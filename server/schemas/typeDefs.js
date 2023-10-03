const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Todo {
    _id: ID
    title: String
    completedOn: Boolean
    userId: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    getTodos(userId: ID!): Todo
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addTodo(title:String!, todoItem:String!, userId:ID!): Todo
  }
`;

module.exports = typeDefs;
