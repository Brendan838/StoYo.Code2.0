import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_FOLDER = gql`
    mutation addFolder($folderName: String!) {
        addFolder(folderName: $folderName) {
            _id
            folderName
            folderAuthor
            createdAt
            snippets {
                _id
                snippetText
            }
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser( $email: String!, $password: String!) {
    addUser( email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_SNIPPET = gql`
  mutation addsnippet($folderId: ID!, $snippetText: String!) {
    addsnippet(thoughtId: $folderId, snippetText: $snippetText) {
      _id
      folderName
      folderAuthor
      createdAt
      snippets {
        _id
        snippetText
        createdAt
      }
    }
  }
`;