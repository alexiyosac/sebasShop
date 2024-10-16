import { React, useContext, useState } from "react";
import "../../estilos/modalCarrito.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/UserProvider";



const ModalCarrito = ({ open, openModal }) => {
  const { array, setArray } = useContext(UserContext);
  if (!open) return null;

  return (
    <div className="modalCarrito">
      <div className="modalContainer">
        <div className="listaCarrito">
          <div className="containerTitulo">
            <h3 className="tituloCarrito">PRODUCTOS</h3>
            <FontAwesomeIcon icon={faXmark} className="closeMo" onClick={openModal}/>
          </div>
       
          <div>
            {array.map((array) => (
          
                <div className="productosCarrito" key={array.id}>
                  
                        <h3 className="cantProducto">{array.cantidad}</h3>
                        <img
                          src={array.url}
                          width="80"
                          alt="imagen"
                        />
                        <h3 className="priceCarrito">{array.valor}</h3>
                        <FontAwesomeIcon icon={faXmark} className="deleteProduct" />           
                </div>

              ))}
              
              </div>
          

          <div className="totalCarrito">
            <h2>Total $20</h2>
          </div>
        </div>

        <div className="vaciarCarrito">
          <h4>VACIAR CARRITO</h4>
        </div>
      </div>
    </div>
  );
};

export default ModalCarrito;
