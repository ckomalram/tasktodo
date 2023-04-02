import React from 'react';
import './App.css';

//componentes
import { TodoItem } from '../Components/TodoItem';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoButton } from '../Components/TodoButton';
import { Modal } from '../Modal';
import { TodoForm } from "../Components/TodoForm";
import { TodoHeader } from "../Components/TodoHeader";

//hooks
import { useTasks } from '../Hooks/useTasks'



function App() {

  const { error,
    loading,
    searchedTasks,
    completeTask,
    deleteTask, 
    addTask,
    openModal,
    setOpenModal,
    totalTasks,
    completedTasks,
    searchvalue, 
    setSearchvalue,
  } = useTasks();

  return (

    <React.Fragment>

      <TodoHeader>
        <TodoCounter
          totalTasks={totalTasks}
          completedTasks={completedTasks}
        />
        <TodoSearch
          searchvalue={searchvalue}
          setSearchvalue={setSearchvalue}
        />
      </TodoHeader>

      <TodoList>
        {error && <p>Ocurrio un error...</p>}
        {loading && <p>Estamos cargando....</p>}
        {(!loading && !searchedTasks.length) && <p>Crea tu primer TASK</p>}
        {searchedTasks.map(task => (
          <TodoItem
            key={task.text} text={task.text} completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TodoList>

      {openModal && (

        <Modal>
          <TodoForm addTask={addTask} setOpenModal={setOpenModal} />
        </Modal>
      )}


      <TodoButton onOpenModal={setOpenModal} />
    </React.Fragment>

  );
}

export default App;
