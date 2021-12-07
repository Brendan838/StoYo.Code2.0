const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }
  type User {
    _id: ID
    email: String
    password: String
    snippets: [Snippet]
    folders: [Folder]
  }
  type Snippet {
    _id: ID
    snippetName: String
    snippetText: String
    parentFolder: String
    snippetAuthor: String
  }




  type Folder {
    _id: ID
    folderName: String
    # snippets: [Snippet]
    folderAuthor: String
  }
  
  type Query {
    users: [User]
    user(email: String): User
    snippets: [Snippet]
    folders: [Folder]
    folder(folderID: ID!): Folder
    me: User
  }
  type Mutation {
    addUser( email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSnippet(snippetText: String!, snippetName: String!, parentFolder: String): Snippet
    updateSnippet(_id: ID!, snippetText: String!, snippetName: String!, parentFolder: String): Snippet
    addFolder(folderName: String!): Folder
    deleteSnippet(_id: ID!): Snippet
    deleteFolder(folderId: ID!): Folder
  }
`

module.exports = typeDefs;