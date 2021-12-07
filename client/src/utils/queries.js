import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      snippets {
        _id
        snippetText
        createdAt
      }
    }
  }
`;
export const QUERY_SNIPPETS = gql`
  query getSnippets{
    snippets {
      _id
      snippetName
      snippetText
      parentFolder
      
    }
  }
`;
export const QUERY_SINGLE_SNIPPET = gql`
  query getSingleSnippet($snippetId: ID!) {
    snippet(snippetId: $snippetId) {
      _id
      snippetName
      snippetText
      createdAt
    }
  }
`;
export const QUERY_FOLDERS = gql`
  query folders {
    folders {
      _id
      folderName
      folderAuthor
    }
  }
`;
export const QUERY_SINGLE_FOLDER = gql`
  query getSingleFolder($folderId: ID!) {
    folder(folderId: $folderId) {
      _id
      folderName
      folderAuthor
      snippets {
        _id
        snippetName
        snippetText
        createdAt         
      }
    }
  }
`;



