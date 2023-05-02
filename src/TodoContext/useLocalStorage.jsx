import React from "react";

// Función personalizada para manejar el almacenamiento local
function useLocalStorage(itemName, initialValue) {
    // Establece el estado inicial para el error, la carga y el valor del ítem
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    // Este efecto se ejecuta al montar el componente y maneja la carga de datos desde localStorage
    React.useEffect(() => {
        // Utiliza setTimeout para simular un retraso en la carga de datos
        setTimeout(() => {
            try {
                // Intenta obtener el ítem del almacenamiento local
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                // Si no existe el ítem, crea uno con el valor inicial
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    // Si el ítem existe, lo parsea y lo asigna a parsedItem
                    parsedItem = JSON.parse(localStorageItem);
                }

                // Actualiza el estado del ítem con el valor de parsedItem y establece loading en falso
                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                // Si hay un error, actualiza el estado de error
                setError(error);
            }
        }, 1000);
    });

    // Función para guardar un nuevo ítem en el almacenamiento local
    const saveItem = (newItem) => {
        try {
            // Convierte el nuevo ítem a una cadena JSON
            const stringifiedItem = JSON.stringify(newItem);
            // Guarda el ítem en el almacenamiento local
            localStorage.setItem(itemName, stringifiedItem);
            // Actualiza el estado del ítem con el nuevo valor
            setItem(newItem);
        } catch (error) {
            // Si hay un error, actualiza el estado de error
            setError(error);
        }
    };

    // Retorna el ítem, la función para guardar, y los estados de carga y error
    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };
