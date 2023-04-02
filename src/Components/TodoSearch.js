import React from "react";
import '../Styles/TodoSearch.css';

function TodoSearch() {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  };

    return(
      <input 
      onChange={onSearchValueChange}
      placeholder="Buscar..." type="text" autoComplete="off"
      />
    );
}

export {TodoSearch};