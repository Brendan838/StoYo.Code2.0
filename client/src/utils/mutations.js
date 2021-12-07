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
  mutation addSnippet($snippetText: String!, $snippetName: String!, $parentFolder: String) {
    addSnippet(snippetText: $snippetText, snippetName: $snippetName, parentFolder: $parentFolder) {
      _id
     snippetName
   
    }
  }
`;

export const UPDATE_SNIPPET = gql`
  mutation updateSnippet($_id: ID!, $snippetText: String!, $snippetName: String!, $parentFolder: String) {
    updateSnippet(_id: $_id, snippetText: $snippetText, snippetName: $snippetName, parentFolder: $parentFolder) {
      _id
     snippetName
   
    }
  }
`;

export const DELETE_FOLDER = gql`
  mutation deleteFolder($folderId: ID!) {
    deleteFolder(folderId: $folderId) {
      _id
    }
  }
`;

export const DELETE_SNIPPET = gql`
  mutation deleteSnippet($_id: ID!) {
    deleteSnippet(_id: $_id) {
      _id
    }
  }
`;