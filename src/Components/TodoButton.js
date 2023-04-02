import React from "react";
import '../Styles/TodoButton.css'

function TodoButton() {
    const onClickAdd = () => {
        alert('Abrir modal de ADD...');
    };

    return (
        <button
            onClick={onClickAdd}
        >
            Add
        </button>
    );
}

export { TodoButton };