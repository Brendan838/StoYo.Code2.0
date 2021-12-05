const { AuthenticationError } = require('apollo-server-express');
const { User, Snippet, Folder } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('folders');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('folder');
    },
    // resolve folders
    folders: async (parent, args, context) => {
      // const params = email ? { email } : {};
      // return Folder.find(params).populate('snippets');
    if (context.user) {
        const folderInfo = await Folder.find({ folderAuthor: context.user.email })
        console.log(folderInfo)
        return folderInfo;
      }
      throw new AuthenticationError("You need to be logged in!");

    },
    folder: async (parent, { folderId }) => {
      return Folder.findOne({ _id: folderId }).populate('snippets');

    },
    // resolve snippets
    snippets: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Snippet.find(params).sort({ createdAt: -1 });
    },
    snippet: async (parent, { snippetId }) => {
      return Snippet.findOne({ _id: snippetId });
    },
    // What does me do?
    me: async (parent, args, context) => {
      console.log("context", context)
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('email/Password does not exists!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addFolder: async (parent, { folderName, folderAuthor }, context) => {
      if (context.user) {
        const folder = await Folder.create({
          folderName,
          folderAuthor: context.user.email,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { folder: folder._id } }
        );

        return Folder;
      }

      else {
        const folder = await Folder.create({
          folderName, 
          folderAuthor, 
        });

        await User.findOneAndUpdate(
          { email: folderAuthor},
          { $addToSet: { folder } }
        );

        return Folder;

      }
      // throw new AuthenticationError('You need to be logged in!');
    },
    addSnippet: async (parent, { createdAt, snippetText }, context) => {
      if (context.user) {
        return Snippet.findOneAndUpdate(
          { _id: context.snippetId },
          {
            $addToSet: {
              comments: { snippetText, createdAt },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    deleteFolder: async (parent, { folderId }, context) => {
      // if (context.user) {
        const folder = await Folder.findOneAndDelete({
          _id: folderId,
        });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $pull: { folder: folder._id } }
        // );

        return folder;
      // }
      
throw new AuthenticationError('You need to be logged in!');
    },
    removeSnippet: async (parent, { folderId, snippetId }, context) => {
      if (context.user) {
        return Folder.findOneAndUpdate(
          { _id: folderId },
          {
            $pull: {
              snippets: {
                _id: snippetId,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;