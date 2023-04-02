import React from "react";
import '../Styles/TodoCounter.css';
import { TodoContext } from "../Context";

const estilos = {
  color: 'red',
  backgroundColor: 'yellow',

};

function TodoCounter({totalTasks, completedTasks}) {
  // const {totalTasks, completedTasks} = React.useContext(TodoContext);
  return (
    <h2 className="header">Haz completado {completedTasks} de {totalTasks} TODO</h2>
  );
}

export { TodoCounter };
