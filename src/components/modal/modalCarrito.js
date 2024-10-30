import { React, useContext, useState, useEffect } from "react";
import "../../estilos/modalCarrito.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/UserAgregar";

const ModalCarrito = () => {
  const {
    contador,
    setContador,
    array,
    setArray,
    isOpencarrito,
    setIsOpenCarrito,
  } = useContext(UserContext);

  const [valorToProductos, setValorToProductos] = useState(0);

  const handlerRemover = (id, cantidad) => {
    const newArray = array.filter((array) => array.id !== id);
    setArray(newArray);
    setContador(contador - cantidad);
  };

  const cerrarCarrito = () => {
    setIsOpenCarrito(false);
  };

  const valorTotal = () => {
    if (array.length === 0) {
      setValorToProductos(0);
      console.log("no hay productos");
    } else {
      const total = array.reduce(
        (acc, item) => acc + item.cantidad * item.valor,
        0
      );
      setValorToProductos(parseFloat(total.toFixed(2)));
      console.log("si hay productos y el valor total es ", valorToProductos);
    }
  };

  useEffect(() => {
    valorTotal();
  }, [array]);

  // if (!isOpencarrito) return null;

  return (
    // <div className="modalCarrito">
    <div className={`modalCarrito ${isOpencarrito ? "active" : "no-active"}`}>
      <div
        className={`modalContainer ${isOpencarrito ? "slide-in" : "slide-out"}`}
      >
        <div className="listaCarrito">
          <div className="containerTitulo">
            <h3 className="tituloCarrito">PRODUCTOS</h3>
            <FontAwesomeIcon
              icon={faXmark}
              className="closeMo"
              onClick={cerrarCarrito}
            />
          </div>
          <div>
            {
              // Condicional if en el centro del bloque return
              array.length === 0 ? (
                <div className="carVacio">No hay productos en el carrito</div>
              ) : (
                array.map((array) => (
                  <div className="productosCarrito" key={array.id}>
                    <h3 className="cantProducto">{array.cantidad}</h3>
                    <img src={array.url} width="80" alt="imagen" />
                    <h3 className="priceCarrito">$ {array.valor}</h3>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="deleteProduct"
                      onClick={() => handlerRemover(array.id, array.cantidad)}
                    />
                  </div>
                ))
              )
            }
          </div>

          <div className="totalCarrito">
            <h2>TOTAL ${valorToProductos.toFixed(2)}</h2>
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
