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
    saved(recipes: [ID]!): Saved
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`