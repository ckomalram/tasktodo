import React from "react";
import '../Styles/TodoCounter.css';

const estilos = {
  color: 'red',
  backgroundColor: 'yellow',

};

function TodoCounter() {
  return (
    <h2 className="header">Haz completado 1 de 3 TODO</h2>
  );
}

export { TodoCounter };
