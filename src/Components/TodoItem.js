import React from "react";
import '../Styles/TodoItem.css'

function TodoItem(props) {
    return(
      <li>
        <span className={`${props.completed ? 'task-complete' : 'task-pending'}`}>
          {props.completed ? 'C' : 'P'}
          </span>
        <p className={`${props.completed ? 'complete' : ''}`}>{props.text}</p>
        <span>X</span>
      </li>
    );
}

export {TodoItem};