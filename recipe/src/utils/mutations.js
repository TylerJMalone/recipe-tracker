import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_RECIPE = gql`
  mutation saveRecipe(
    $recipeId: String!
    $title: String!
    $description: String!
    $image: String!
    $imageType: String!
  ) {
    saveRecipe(
      recipeId: $recipeId
      title: $title
      description: $description
      image: $image
      imageType: $imageType
    ) {
      recipe {
        
      }

    }
}
`;