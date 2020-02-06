import React from 'react';
import PropTypes from "prop-types";

function TodoItem(props) {
  // Todo items style
  const itemStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: props.todo.completed ? "line-through" : "none"
  }

  // Delete button style
  const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  // Destructuring id & title
  const {id, title} = props.todo

  return (
    <div style={itemStyle}>
      <p>
        <input type="checkbox" onChange={props.markComplete.bind(this, id)} /> {" "}
        {title}
        <button onClick={props.delTodo.bind(this, id)} style={btnStyle} >X</button>
      </p>
    </div>
  )
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default TodoItem
