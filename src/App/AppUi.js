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
    deleteTask
}) {
    return (

        <React.Fragment>
            <TodoCounter completedTasks={completedTasks} total={totalTasks} />
            <TodoSearch
                searchvalue={searchvalue}
                setSearchvalue={setSearchvalue}
            />
            <TodoList>
                {searchedTasks.map(task => (
                    <TodoItem
                        key={task.text} text={task.text} completed={task.completed}
                        onComplete={() => completeTask(task.text)}
                        onDelete={() => deleteTask(task.text)}
                    />
                ))}
            </TodoList>
            <TodoButton />
        </React.Fragment>

    );
}

export { AppUi };