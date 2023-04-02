import React from "react";
import '../Styles/TodoCounter.css';

// const estilos = {
//   color: 'red',
//   backgroundColor: 'yellow',

// };

function TodoCounter({totalTasks, completedTasks}) {
  return (
    <h2 className="header">Haz completado {completedTasks} de {totalTasks} TODO</h2>
  );
}

export { TodoCounter };
