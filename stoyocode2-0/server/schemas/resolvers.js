const { AuthenticationError } = require('apollo-server-express');
const { User, Snippet, Folder } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('folders');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('folder');
    },
    // resolve folders
    folders: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Folder.find(params).populate('snippets');
    },
    folder: async (parent, { folderId }) => {
      return Folder.findOne({ _id: folderId }),populate('snippet');
    },
    // resolve snippets
    snippets: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Snippet.find(params).sort({ createdAt: -1 });
    },
    snippet: async (parent, { snippetId }) => {
      return Snippet.findOne({ _id: snippetId });
    },
    // What does me do?
    me: async (parent, args, context) => {
      console.log("context", context)
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('folder');
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    // addUser: async (parent, { username, email, password }) => {
    //   const user = await User.create({ username, email, password });
    //   const token = signToken(user);
    //   return { token, user };
    // },
    // login: async (parent, { username, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw new AuthenticationError('Username/Password does not exists!');
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError('Incorrect credentials');
    //   }

    //   const token = signToken(user);

    //   return { token, user };
    // },

    addFolder: async (parent, { folderName }, context) => {
      if (context.user) {
        const thought = await Folder.create({
          folderName,
          folderAuthor: context.user.username,
        });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $addToSet: { thoughts: thought._id } }
        // );

        return folder;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addSnippet: async (parent, { snippetName, snippetText }, context) => {
      if (context.user) {
        return Snippet.findOneAndUpdate(
          { _id: snippetId },
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
    removeFolder: async (parent, { folderId }, context) => {
      if (context.user) {
        const folder = await Folder.findOneAndDelete({
          _id: folderId,
          folderAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { folder: folder._id } }
        );

        return folder;
      }
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