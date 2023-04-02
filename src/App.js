import React from 'react';
import './App.css';
import { TodoCounter } from './Components/TodoCounter';
import { TodoItem } from './Components/TodoItem';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoButton } from './Components/TodoButton';

const defaultTasks = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Oficios', completed: false },
  { text: 'Comer', completed: true },
  { text: 'Cocinar', completed: false },
];
/**
 * todo counter
 * todo search
 * todo list
 * todo item
 * todo create btn
 */
function App() {

  const [searchvalue, setSearchvalue] = React.useState('');
  const [tasks, setTasks] = React.useState(defaultTasks);
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  let searchedTasks = [];

  if (!searchvalue.length > 0) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter(task => {

      const taskText = task.text.toLowerCase();
      const searchText = searchvalue.toLowerCase();

      return taskText.includes(searchText);

    })
  }

  return (
    <React.Fragment>
      <TodoCounter completedTasks={completedTasks} total={totalTasks} />
      <TodoSearch
        searchvalue={searchvalue}
        setSearchvalue={setSearchvalue}
      />
      <TodoList>
        {searchedTasks.map(task => (
          <TodoItem key={task.text} text={task.text} completed={task.completed} />
        ))}
      </TodoList>
      <TodoButton />
    </React.Fragment>
  );
}

export default App;
