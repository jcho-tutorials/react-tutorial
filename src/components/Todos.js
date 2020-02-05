import React from 'react';
import TodoItem from "./TodoItem";

function Todos(props) {
  return (
    props.todos.map((todo) => (
      <TodoItem key={ todo.id } todo={ todo } markComplete={ props.markComplete } />
    ))

  );
}

export default Todos;
