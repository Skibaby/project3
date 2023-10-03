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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const GET_USER = gql`
    mutation AddUser($email:String!, $username:String!, $password:String!) {
      addUser(email: $email, username: $username, password: $password) {
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
  mutation AddTodo($title:String!, $todotask:String!, $userId:ID!) {
    addTodo(title: $title, todotask: $todotask, userId: $userId) {
      title
      completedOn
      userId
      todotask
      createdAt
    }
  }
`;

export const DELETE_TODO = gql`
mutation DeleteTodo($_id: ID!) {
  deleteTodo(_id: $_id) {
    completedOn
  }
`