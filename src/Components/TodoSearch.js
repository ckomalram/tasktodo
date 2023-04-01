import React from "react";
import '../Styles/TodoSearch.css';

function TodoSearch() {
    return(
      <input placeholder="Buscar..." type="text" autoComplete="off"/>
    );
}

export {TodoSearch};