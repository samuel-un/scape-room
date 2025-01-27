import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function ToDoList() {
    const [toDos, setToDos] = useState([]);

    const addToDo = (toDo) => {
        if (!toDo.text || /^\s*$/.test(toDo.text)) {
            return;
        }

        const newToDos = [toDo, ...toDos];
        setToDos(newToDos);
    };

    const removeToDo = (id) => {
        const removeArr = toDos.filter((toDo) => toDo.id !== id);
        setToDos(removeArr);
    };

    const updateToDo = (toDoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setToDos((prev) =>
            prev.map((item) => (item.id === toDoId ? newValue : item))
        );
    };

    return (
        <div>
            <h1>¿Qué planes tienes para hoy?</h1>
            <ToDoForm onSubmit={addToDo} />
            {toDos.length === 0 ? (
                <p>No tienes tareas pendientes.</p>
            ) : (
                <ToDo toDos={toDos} removeToDo={removeToDo} updateToDo={updateToDo} />
            )}
        </div>
    );
}

export default ToDoList;
