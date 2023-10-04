import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_TODO, UPDATE_TODO } from "../utils/mutations";
import auth from "../utils/auth";

function Home() {
  const [title, setTitle ] = useState('');

  if (!auth.loggedIn()) {
    return <Navigate to={'/login'} />
  }

  const { data, loading, error } = useQuery(QUERY_ME);
  const [addTodo, { error: addError }] = useMutation(ADD_TODO);
  const [updateTodo, { error: updateError }] = useMutation(UPDATE_TODO);

  const user = data?.me ?? {};

  const handleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addTodo({
      variables: {
        userId: auth.getProfile()?.data?._id,
        title,
      },
      refetchQueries: [QUERY_ME]
    });
  }

  const handleComplete = async (todoId, complete) => {
    await updateTodo({
      variables: {
        todoId,
        complete,
      },
      refetchQueries: [QUERY_ME]
    });
  } 

  if (error || addError || updateError) {
    throw Error(error);
  }

  if (loading) {
    return <h2>Loading…</h2>;
  }
  
  return (
    <>
      <h2>Todo List</h2>
      <article>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          name="title" 
          id="title" 
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>

      </article>
      <article>
        {user?.todos?.map(todo => {
          return todo.complete ? 
          (<button className="secondary" key={todo._id} onClick={() => handleComplete(todo._id, todo.complete )}>
           <s> {todo.title}</s>
          </button>) :
          (<button className="contrast" key={todo._id} onClick={() => handleComplete(todo._id, todo.complete )}>
          {todo.title}
        </button>)
        })}
      </article>
    </>
  );
}

export default Home;