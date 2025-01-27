import { useState } from "react";

function ToDoForm({ onSubmit, edit }) {
    const [input, setInput] = useState(edit ? edit.value : "");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            id: edit ? edit.id : Math.floor(Math.random() * 10000),
            text: input,
        });

        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <form className="toDo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={edit ? "Edita tu tarea" : "Añade un todo"}
                value={input}
                name="text"
                className="toDo-input"
                onChange={handleChange}
            />
            <button className="toDo-button">
                {edit ? "Actualizar tarea" : "Añadir tarea"}
            </button>
        </form>
    );
}

export default ToDoForm;
