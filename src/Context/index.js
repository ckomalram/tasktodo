import React from "react";
import { useLocalStorage } from './UseLocalStorage'

const defaultTasks = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Oficios', completed: false },
  { text: 'Comer', completed: true },
  { text: 'Cocinar', completed: false },
];

// provider y consumer
/**
 * Provider para envolver la app completa
 * consumer para utilizar los metodos que tenga el contexto siempre que lo necesitemos
 */
const TodoContext = React.createContext();

function TodoProvider(props) {
  // custom hook useLocalStorage
  // Cuando se va retornar más de 1 esdo y 1 metodo en el custom hook se recomienda usar objetos
  const { items: tasks, saveItems: setTasks, loading, error } = useLocalStorage('TASKS_V1', defaultTasks);


  // States
  const [searchvalue, setSearchvalue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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
    <TodoContext.Provider value={{
      completedTasks,
      totalTasks,
      searchedTasks,
      searchvalue,
      setSearchvalue,
      completeTask,
      deleteTask,
      addTasks,
      loading,
      error,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider >
  );
}

export { TodoContext , TodoProvider}