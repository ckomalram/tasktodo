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
  // Cuando se va retornar más de 1 esdo y 1 metodo en el custom hook se recomienda usar objetos
  const {items: tasks, saveItems: setTasks, loading , error} = useLocalStorage('TASKS_V1', []);


  // States
  const [searchvalue, setSearchvalue] = React.useState('');

  //Variables
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  let searchedTasks = [];

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


  //Funcion temporal...
  const addTasks = () => {
    setTasks(defaultTasks);
  }

  /**
   * Effects
   *  Si tiene segundo argumento el useeffect solo se renderizará una vez.
   * Cada vez que cambie los valores que se mandan en el useeffect se debe volver a renderizar
    */

  // console.log('antes Codigo del useeffect');


  //   React.useEffect(()=> {
  //     console.log('!!Ejecutando Codigo del useeffect');
  //   },[totalTasks]);

  // console.log('Luego Codigo del useeffect');  

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
      loading={loading}
      error={error}
    />
  );
}

export default App;
