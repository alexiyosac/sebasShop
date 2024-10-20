import React, { createContext, useState } from "react";


export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [contador, setContador] = useState(0);
  const [array, setArray] = useState([]);

  const agregarItem = (id, precio, urlImg) => {
    // Incrementar el contador
    setContador((prev) => prev + 1);

    // Actualizar el array de items
    setArray((prevItems) => {
      const itemExistente = prevItems.find((item) => item.id === id);
      if (itemExistente) {
        // Si el item ya existe, actualizar su cantidad
        return prevItems.map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        // Si el item no existe, agregarlo al array
        const nuevoItem = {
          id: id,
          cantidad: 1,
          valor: precio,
          url: urlImg,
        };
        return [...prevItems, nuevoItem];
      }
    });
  };

  return (
 
    <UserContext.Provider value={{ contador, setContador, array, setArray, agregarItem }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;