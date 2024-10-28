import React, { createContext, useState } from "react";


export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [contador, setContador] = useState(0);
  const [array, setArray] = useState([]);
  const [isOpen, setIsOpen] =useState(false);
  const [isOpencarrito, setIsOpenCarrito] = useState(false);
  const [modalPro, setModalPro] = useState([]);
  const [precioModal, setPrecioModal] =useState(0);


  const modalProducto =(id, title, price, url, descr, category)=>{
    // const newArray ={
    //   id: id,
    //   title: title,
    //   price: price,
    //   url: url,
    //   descr: descr,
    //   category: category,
    // }

    // setModalPro([newArray])
    const newTitulo = title.split(' ').slice(0, 3).join(' ').toUpperCase();
    setModalPro([{id:id, title:newTitulo, price:price, url: url, descr: descr, category:category}])
    setPrecioModal(price);
    
  }

  const agregarItem = (id, precio, urlImg, cantidadV) => {
    

    // Incrementar el contador
     cantidadV > 1 ? setContador((prev) => prev + cantidadV) : setContador((prev) => prev + 1)
    console.log("la cantidad del usecontext es :", cantidadV)
    console.log("El contador es :", contador);

    // Actualizar el array de items
    setArray((prevItems) => {
      const itemExistente = prevItems.find((item) => item.id === id);
    if (itemExistente) {
      // Si el item ya existe, actualizar su cantidad
        if (cantidadV > 0){ 
          return prevItems.map((item) =>
            item.id === id ? { ...item, cantidad: item.cantidad + cantidadV } :  item // Se suma cantidad al item existente
          );
        }
        else{
          return prevItems.map((item) =>
            item.id === id ? { ...item, cantidad: item.cantidad + 1 } :  item // Se suma cantidad al item existente
          );
        }
    } else {
      if(cantidadV > 0){
        const nuevoItem = {
          id: id,
          cantidad: cantidadV,
          valor: precio,
          url: urlImg,
        };
        return [...prevItems, nuevoItem];
      }
      else{
              // Si el item no existe, agregarlo al array
              const nuevoItem = {
                id: id,
                cantidad: 1, // Si cantidad es 0, inicializa en 1
                valor: precio,
                url: urlImg,
              };
              return [...prevItems, nuevoItem];
            }
      }
    });
  };

  return (
 
    <UserContext.Provider value={{ contador, setContador, array, setArray, agregarItem, modalProducto, isOpen, setIsOpen, isOpencarrito, setIsOpenCarrito, precioModal, setPrecioModal, modalPro, setModalPro }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;