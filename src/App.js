import React from 'react';
import './App.css';
import {TodoCounter} from './Components/TodoCounter';
import { TodoItem } from './Components/TodoItem';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoButton } from './Components/TodoButton';

const tasks =  [
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];
/**
 * todo counter
 * todo search
 * todo list
 * todo item
 * todo create btn
 */
function App() {
  return (
    <React.Fragment>
       <TodoCounter/>
       <TodoSearch/>
       <TodoList>
        {tasks.map(task => (
          <TodoItem key={task.text} text={task.text}/>
        ))}
       </TodoList>
       <TodoButton/>
    </React.Fragment>
  );
}

export default App;
