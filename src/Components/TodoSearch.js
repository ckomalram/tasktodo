import React from "react";
import '../Styles/TodoSearch.css';

function TodoSearch() {

  const [searchvalue, setSearchvalue] = React.useState('');

  const onSearchValueChange = (event) => {
    // console.log(event.target.value);
    console.log(event.target.value);
    setSearchvalue(event.target.value);
  };

    return(
      <input 
      placeholder="Buscar..." type="text" autoComplete="off"
      value={searchvalue}
      onChange={onSearchValueChange}
      />
    );
}

export {TodoSearch};