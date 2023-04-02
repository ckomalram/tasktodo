import React from "react";
import '../Styles/TodoButton.css'

function TodoButton(props) {
    const onClickAdd = () => {
        // alert('Abrir modal de ADD...');
        props.onOpenModal(true);
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