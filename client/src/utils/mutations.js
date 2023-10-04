import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
    mutation addUser(
      $email:String!, 
      $username:String!, 
      $password:String!
    ) {
      addUser(
        email: $email, 
        username: $username, 
        password: $password
      ) {
        token
        user {
          username
          email
          password
          _id
        }
      }
    }
`;


export const ADD_TODO = gql`
  mutation addTodo(
    $title:String!,
    $userId:ID!
  ) {
    addTodo(
      title: $title, 
      userId: $userId
    ) {
      title
      complete
      createdAt
    }
  }
`;

export const UPDATE_TODO = gql`
mutation updateTodo($todoId: ID!, $complete: Boolean) {
  updateTodo(todoId: $todoId, complete: $complete) {
    complete
  }
}
`;