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
    todoItem: String
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
    getTodos(id: ID!): Todo
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addTodo(title:String!, todoItem:String!, userId:ID!): Todo
  }
`;

module.exports = typeDefs;
