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
    snippets: async (parent, args, context) => {

     
      const getSnips = Snippet.find({snippetAuthor: context.user.email})
      return getSnips
      
      
    },
    // snippet: async (parent, { snippetId }) => {
    //   return Snippet.findOne({ _id: snippetId });
    // },
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

    addFolder: async (parent, { folderName }, context) => {
      if (context.user) {
        const folder = await Folder.create({
          folderName, 
          folderAuthor: context.user.email
        
        });

        return folder;
      }

     
      throw new AuthenticationError('You need to be logged in!');
      }
      
    ,
    addSnippet: async (parent, { snippetName, snippetText, parentFolder }, context) => {
      if (context.user) {

        const newSnip = await Snippet.create(
         {
          snippetAuthor: context.user.email,
          snippetName,
          snippetText,
          parentFolder,

         
          });
      return newSnip
      }
      throw new AuthenticationError('You need to be logged in!');

    },
    updateSnippet: async (parent, { _id, snippetName, snippetText, parentFolder }, context) => {
      if (context.user) {
        const updatedSnip = await Snippet.findOneAndUpdate({_id: _id},
         {
          snippetName,
          snippetText,
          parentFolder,
          });
      return updatedSnip
      }
      throw new AuthenticationError('You need to be logged in!');

    },
    deleteFolder: async (parent, { folderId }, context) => {
      if (context.user) {

        const getFolderInfo = await Folder.findOne({_id: folderId})
    
        const parentFolderName = getFolderInfo.folderName
        console.log(parentFolderName)
        

        const folder = await Folder.findOneAndDelete({
          _id: folderId,

        });

      const deleteSnippets = await Snippet.remove({parentFolder: parentFolderName})
      console.log(deleteSnippets)

      return folder;
      }
      
      
throw new AuthenticationError('You need to be logged in!');
    },
    deleteSnippet: async (parent, { _id }, context) => {
      // if (context.user) {


      await Snippet.remove({_id: _id});
      
      return _id
    // 
    // }

    // throw new AuthenticationError('You need to be logged in!');
  }


  }



}
module.exports = resolvers;