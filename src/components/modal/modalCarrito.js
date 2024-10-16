import "../../estilos/modalCarrito.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const ModalCarrito = ({ open, openModal }) => {
  if (!open) return null;
  

  return (
    <div className="modalCarrito">
      <div className="modalContainer">
        <div className="listaCarrito">
          <div className="containerTitulo">
            <h3 className="tituloCarrito">PRODUCTOS</h3>
            <FontAwesomeIcon icon={faXmark} className="closeMo" onClick={openModal}/>
          </div>
          <hr></hr>
          <div className="productosCarrito">
            <h3 className="cantProducto">1</h3>
            <img
              src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
              width="80"
              alt="imagen"
            />
            <h3 className="priceCarrito">$20.00</h3>
            <FontAwesomeIcon icon={faXmark} className="deleteProduct" />
          </div>

          <hr></hr>

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
