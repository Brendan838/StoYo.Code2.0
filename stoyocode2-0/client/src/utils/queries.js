import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      snippets {
        _id
        snippetName
        snippetText
        createdAt
      }
    }
  }
`;