import React from 'react';
import PropTypes from "prop-types";

function TodoItem(props) {
  const getStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: props.todo.completed ? "line-through" : "none"
  }

  const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  const { id, title } = props.todo

  return (
    <div style={getStyle}>
      <p>
        <input type="checkbox" onChange={props.markComplete.bind(this, id)} /> {" "}
        {title}
        <button style={btnStyle} >X</button>
      </p>
    </div>
  )
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
