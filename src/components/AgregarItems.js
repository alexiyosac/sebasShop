import { React, useContext } from "react";
import { UserContext } from "../context/UserProvider";

const AgregarItems = ({ id, precio, urlImg }) => {
  const { contador, setContador, array, setArray } = useContext(UserContext);

  const manejarAgregarItems = () => {
      // Incrementar el contador
      setContador(contador + 1);

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
      <div>
        <button onClick={manejarAgregarItems}>AGREGAR AL CARRITO</button>
      </div>
    );
  };

  export default AgregarItems;


