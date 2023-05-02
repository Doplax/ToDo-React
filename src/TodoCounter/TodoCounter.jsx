import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";


function TodoCounter () {
    //const { total, completed} = props // En vez de hacerlo aqui, lo hacemos arriba en la funcion directamente
    const { totalTodos , completedTodos} = React.useContext(TodoContext)

    return(
        <h2 className="TodoCounter"> Has completado {completedTodos} de {totalTodos} TODOS </h2>
    )
}



// export default TodoCounter
// No usaremos la linea esta, ya que nos podria dar errores a la hora de nombrar el paquete cuando lo llamamos desde App.js, en lugar de esto, utulizaremos la siguiente linea, para obligarnos a usar un export nombrado:
export { TodoCounter }
