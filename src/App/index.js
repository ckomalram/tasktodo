import React from 'react';
import './App.css';
import { AppUi } from './AppUi';
import { useLocalStorage } from '../Hooks/UseLocalStorage';

const defaultTasks = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Oficios', completed: false },
  { text: 'Comer', completed: true },
  { text: 'Cocinar', completed: false },
];

function App() {

  // custom hook useLocalStorage
  const [tasks, setTasks] = useLocalStorage('TASKS_V1', []);


  // States
  const [searchvalue, setSearchvalue] = React.useState('');

  //Variables
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  let searchedTasks = [];


  //Logic cases
  if (!searchvalue.length > 0) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter(task => {

      const taskText = task.text.toLowerCase();
      const searchText = searchvalue.toLowerCase();

      return taskText.includes(searchText);

    })
  }

  //Function to events


  const completeTask = (text) => {
    const index = tasks.findIndex(task => task.text === text);

    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
    // tasks[index] =  { text: tasks[index].text, completed: true };
  }

  const deleteTask = (text) => {
    const index = tasks.findIndex(task => task.text === text);

    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    // tasks[index] =  { text: tasks[index].text, completed: true };
  }

  //Funcion temporal...
  const addTasks = () => {
    setTasks(defaultTasks);
  }

  return (
    <AppUi
      completedTasks={completedTasks}
      totalTasks={totalTasks}
      searchedTasks={searchedTasks}
      searchvalue={searchvalue}
      setSearchvalue={setSearchvalue}
      completeTask={completeTask}
      deleteTask={deleteTask}
      addTasks={addTasks}
    />
  );
}

export default App;
