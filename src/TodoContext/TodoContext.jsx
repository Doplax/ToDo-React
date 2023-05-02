import React from "react";
// Importa el hook personalizado useLocalStorage
import { useLocalStorage } from "./useLocalStorage";

// Crea un contexto para los todos
const TodoContext = React.createContext();

function TodoProvider(props) {
  // Utiliza el hook useLocalStorage para manejar el estado y las acciones de los todos
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  // Crea un estado para el valor de búsqueda
  const [searchValue, setSearchValue] = React.useState("");

  // Filtra los todos completados y obtiene su cantidad
  const completedTodos = todos.filter((todo) => todo.completed === true).length;

  // Obtiene la cantidad total de todos
  const totalTodos = todos.length;

  let searchedTodos = []; // Guardaremos las coincidencias de búsqueda

  // Lógica para filtrar los todos en función del valor de búsqueda
  if (searchValue.length <= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }

  //Función para añadir un nuevo TODO
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos)
  }

  // Función para marcar un todo como completado
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // Función para eliminar un todo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        addTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
