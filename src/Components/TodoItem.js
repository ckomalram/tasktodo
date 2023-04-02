import React from "react";
import '../Styles/TodoItem.css'

function TodoItem(props) {

  const onComplete = () => {
    // alert('Se completo el TODO ' + props.text);
    props.onComplete();
  }

  const onDelete = () => {
    // alert('Borraste el TODO ' + props.text);
    props.onDelete();
  }
  return (
    <li>
      <span 
      className={`${props.completed ? 'task-complete' : 'task-pending'}`}
      onClick={onComplete}
      >
        {props.completed ? 'C' : 'P'}
      </span>
      <p >{props.text}</p>
      <span
      onClick={onDelete}
      
      >X</span>
    </li>
  );
}

export { TodoItem };