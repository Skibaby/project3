const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
    todos: [Todo]
  }

  type Todo {
    _id: ID
    title: String
    complete: Boolean
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    getTodos(userId: ID!): [Todo]
    getTodo(todoId: ID!): Todo
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addTodo(title:String!, userId:ID!): Todo
    updateTodo(todoId:ID!, complete: Boolean): Todo
    deleteTodo(todoId:ID!): Todo
  }
`;

module.exports = typeDefs;
