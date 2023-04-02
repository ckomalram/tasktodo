import React from "react";
import '../Styles/TodoCounter.css';

const estilos = {
  color: 'red',
  backgroundColor: 'yellow',

};

function TodoCounter({total, completedTasks}) {
  return (
    <h2 className="header">Haz completado {completedTasks} de {total} TODO</h2>
  );
}

export { TodoCounter };
