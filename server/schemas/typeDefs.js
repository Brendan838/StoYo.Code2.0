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
    createdAt: String
  }




  type Folder {
    _id: ID
    folderName: String
    snippets: [Snippet]
    folderAuthor: String
  }
  
  type Query {
    users: [User]
    user(email: String): User
    snippets(email: String): [Snippet]
    snippet(snippetID: ID!): Snippet
    folders: [Folder]
    folder(folderID: ID!): Folder
    me: User
  }
  type Mutation {
    addUser( email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSnippet(snippetText: String!, snippetName: String!): Snippet
    addFolder(folderAuthor: String!, folderName: String!): Folder
    removeSnippet(snippetId: ID!): Snippet
    removeFolder(folderId: ID!): Folder
  }
`

module.exports = typeDefs;