import React from "react";
import "./TodoItem.css";

// Función del componente TodoItem que recibe las propiedades del componente
function TodoItem(props) {
  return (
    //Crea un elemento de lista con la clase "TodoItem"
    <li className="TodoItem">
      {/*// Crea un ícono de verificación que muestra si el todo está completado o no*/}
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span>
      {/*// Muestra el texto del todo y aplica la clase "TodoItem-p--complete" si el todo está completado*/}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/*// Crea un ícono para eliminar el todo*/}
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
