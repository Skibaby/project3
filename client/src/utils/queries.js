import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const GET_TODOS = gql`
query GetTodos($userId: ID!) {
  getTodos(userId: $userId) {
    title
    todotask
    completedOn
    _id
    userId
  }
}
`

export const GET_TODO = gql`
query GetTodo($_id: ID!) {
  getTodo(_id: $_id) {
    title
    todotask
    completedOn
    _id
    userId
  }
}
`