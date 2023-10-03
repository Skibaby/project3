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
    todotask: String
    completedOn: Boolean
    createdAt: String
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
    getTodos(userId: ID!): [Todo]
  }

  

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addTodo(title:String!, todotask:String!, userId:ID!): Todo
    updateTodo(_id:ID!, completedOn: Boolean): Todo
    deleteTodo(_id:ID!): Todo
  }
`;

module.exports = typeDefs;
