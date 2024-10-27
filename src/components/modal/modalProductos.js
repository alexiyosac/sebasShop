import React, { useContext } from "react";
import "../../estilos/modalProductos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/UserAgregar";

const ModalProductos = () => {
  const {
    isOpen,
    setIsOpen,
    idProduct,
    setIdProduct,
    array,
    setArray,
    modalPro,
  } = useContext(UserContext);

  const cerrarModal = () => {
    setIsOpen(false);
  };

  const mostrarInfo = () => {
    if (modalPro && Array.isArray(modalPro)) {
      modalPro.forEach(item => {
        console.log(`ID: ${item.id}, Título: ${item.title}, Precio: ${item.price}, URL: ${item.url}, Descripción: ${item.descr}`);
      });
    } else {
      console.log("modalPro no es un array o está vacío");
    }
  };

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
              <h1>{item.title || "TITULO DEL PRODUCTO"}</h1>
              <p className="subtituloProducto">Subtitulo</p>
              <p className="tituloPrecioProducto">${item.price || 420}</p>
            </div>

            <div className="descripcionProducto">
              <h3>DESCRIPCIÓN</h3>
              <p>{item.descr || "Descripción del producto..."}</p>
            </div>

            <div className="botonsProducto">
              <div className="tituloBoton">
                <p>CANTIDAD</p>
                <p>TOTAL PRECIO</p>
              </div>
              <div className="botonesCantPre">
                <div className="botonCantidad">
                  <p className="botonesAgregarRestar">-</p>
                  <p>4</p>
                  <p className="botonesAgregarRestar">+</p>
                </div>
                <div className="botonCantidad">
                  <p>${item.price || 420}</p>
                </div>
              </div>
            </div>

            <div className="botonCarritoModal">
              <button className="botonAgregarCart" onClick={mostrarInfo}>
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