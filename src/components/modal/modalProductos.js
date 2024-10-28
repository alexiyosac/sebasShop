import React, { useContext, useState, useEffect} from "react";
import "../../estilos/modalProductos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/UserAgregar";

const ModalProductos = () => {
  const {
    isOpen,
    setIsOpen,
    modalPro,
    precioModal,
    agregarItem,
  } = useContext(UserContext);



const [cantidad, setCantidad] = useState(1);
const [valorTotal, setValorTotal] = useState(precioModal);

useEffect(() => {
  // Cada vez que `precioModal` cambie, actualizamos `valorTotal`
  setValorTotal(precioModal);
}, [precioModal, isOpen]);



  const cerrarModal = () => {
    setIsOpen(false);
    setCantidad(1);
    console.log("EL PRECIO del modal es :", valorTotal)
  };



  const sumarCantidad = () =>{
      setCantidad(prev => cantidad + 1);
      setValorTotal(prev=> prev + precioModal);
  
  }


  const restarCantidad =() => {
    if(cantidad !==1){
      setCantidad(prev => cantidad - 1);
      setValorTotal(prev=> prev - precioModal);
    }
  }


  const agregarProductos =(id, precio, urlImg, cantidad)=>{
    agregarItem(id, precio, urlImg, cantidad);
  }



  if (!isOpen) return null; //si ifOpen es falso
  return (
    <div className="modalContainerP">
 
      {modalPro && modalPro.map((item) => (
       
        <div className="ventanaModal" key={item.id}>
          <div className="ventanaProducto">
            <img
              src={item.url}
              alt={item.title}
              className="imgProducto"
            />
          </div>

          <div className="ventanaDescripcion">
            <FontAwesomeIcon
              icon={faXmark}
              className="closeModalCart"
              onClick={cerrarModal}
            />

            <div className="titulosProducto">
              <h1>{item.title}</h1>
              <p className="subtituloProducto" >{item.category}</p>
              <p className="tituloPrecioProducto">${item.price}</p>
            </div>

            <div className="descripcionProducto">
              <h3>DESCRIPCIÓN</h3>
              <p className="descripcionCaja">{item.descr}</p>
            </div>

            <div className="botonsProducto">
              <div className="tituloBoton">
                <p>CANTIDAD</p>
                <p>TOTAL PRECIO</p>
              </div>
              <div className="botonesCantPre">
                <div className="botonCantidad">
                  <p className="botonesAgregarRestar" onClick={restarCantidad}>-</p>
                  <p>{cantidad}</p>
                  <p className="botonesAgregarRestar" onClick={sumarCantidad}>+</p>
                </div>
                <div className="botonCantidad">
                  <p>${valorTotal.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="botonCarritoModal">
              <button className="botonAgregarCart" onClick={()=> agregarProductos(item.id, item.price,item.url, cantidad)}>
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModalProductos;