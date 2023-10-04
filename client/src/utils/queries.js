import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      todos {
        title
        complete
        _id
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      todos {
        title
        complete
        _id
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      todos {
        title
        complete
        _id
      }
    }
  }
`;

export const GET_TODOS = gql`
query getTodos($userId: ID!) {
  getTodos(userId: $userId) {
    title
    complete
    _id
  }
}
`

export const GET_TODO = gql`
query getTodo($todoId: ID!) {
  getTodo(todoId: $todoId) {
    title
    complete
    _id
  }
}
`