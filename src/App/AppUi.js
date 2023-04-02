import React from "react";

import { TodoCounter } from '../Components/TodoCounter';
import { TodoItem } from '../Components/TodoItem';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoButton } from '../Components/TodoButton';
import { TodoContext } from '../Context';
import { Modal } from '../Modal';
import { TodoForm } from "../Components/TodoForm";

function AppUi() {

    const { error,
        loading,
        searchedTasks,
        completeTask,
        deleteTask, openModal, setOpenModal
    } = React.useContext(TodoContext);

    return (

        <React.Fragment>

            <TodoCounter />
            <TodoSearch />

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
                   <TodoForm/>
                </Modal>
            )}


            <TodoButton onOpenModal={setOpenModal} />
        </React.Fragment>

    );
}

export { AppUi };