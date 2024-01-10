const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    books: [Book]!
  }

  type Book {
    _id: ID
    title: String!
    recipes: [Recipe]!
  }

  type Recipe {
    _id: ID
    recipeId: String!
    title: String!
    description: String
    image: String
    imageType: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }
`