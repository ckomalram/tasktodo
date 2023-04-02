import React from "react";

import { TodoCounter } from '../Components/TodoCounter';
import { TodoItem } from '../Components/TodoItem';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoButton } from '../Components/TodoButton';

function AppUi({
    completedTasks,
    totalTasks,
    searchedTasks,
    searchvalue,
    setSearchvalue,
    completeTask,
    deleteTask,
    addTasks,
    loading,
    error
}) {
    return (

        <React.Fragment>
            <TodoCounter completedTasks={completedTasks} total={totalTasks} />
            <TodoSearch
                searchvalue={searchvalue}
                setSearchvalue={setSearchvalue}
            />
            <TodoList>
                {error && <p>Ocurrio un error...</p>}
                {loading && <p>Estamos cargando....</p>}
                {(!loading && !searchedTasks.length ) && <p>Crea tu primer TASK</p>}
                {searchedTasks.map(task => (
                    <TodoItem
                        key={task.text} text={task.text} completed={task.completed}
                        onComplete={() => completeTask(task.text)}
                        onDelete={() => deleteTask(task.text)}
                    />
                ))}
            </TodoList>
            <TodoButton onAddTasks={() => addTasks()} />
        </React.Fragment>

    );
}

export { AppUi };