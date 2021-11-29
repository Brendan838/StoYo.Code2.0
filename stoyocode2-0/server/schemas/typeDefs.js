const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    snippets: [Snippet]!
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
    folderAuthor: [User]
    snippets: [Snippet]
  }

  type Query {
    users: [User]
    user(username: String!): User
    snippets(username: String): [Snippet]
    snippet(snippetID: ID!): Snippet
    folders(username: String): [Folder]
    folder(folderID: ID!): Folder
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSnippet(snippetText: String!): Snippet
    addFolder(folderId: ID!, folderName: String!): Folder
    removeSnippet(snippetId: ID!): Snippet
    removeFolder(folderId: ID!): Folder
  }
`;

module.exports = typeDefs;
