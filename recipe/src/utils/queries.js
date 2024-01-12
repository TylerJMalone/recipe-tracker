import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      books {
        _id
        title
        recipes
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      books {
        _id
        title
        recipes
      }
    }
  }
`;

export const QUERY_SAVED = gql`
  query getSaved($recipes: [ID]!) {
    recipes(recipes: $recipes) {
      _id
      title
      description
      image
      imageType
    }
  }
`;