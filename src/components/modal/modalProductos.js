import React, { useContext } from "react";
import "../../estilos/modalProductos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { UserContext }  from "../../context/UserAgregar";



const ModalProductos = () => {
    const { isOpen, setIsOpen } = useContext(UserContext);

    const cerrarModal = () =>{
        setIsOpen(false);
    }
    

if (!isOpen) return null;  //si ifOpen es falso

    return(
    <div className="modalContainerP">


        <div className="ventanaModal">
                <div className="ventanaProducto">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="zapato" className="imgProducto" />

                    
                </div>

            <div className="ventanaDescripcion">
            <FontAwesomeIcon
              icon={faXmark}
              className="closeModalCart"
              onClick={cerrarModal}
            />
          
                <div className="titulosProducto">
                    <h1>TITULO DEL PRODUCTO</h1>
                    <p className="subtituloProducto">Subtitulo</p>
                    <p className="tituloPrecioProducto">$420</p>


                    
                </div>

                <div className="descripcionProducto">
                    <h3>DESCRIPCIÓN</h3>
                    <p>loremmmmm mmmmmm kkkkkkks  dkdkkdkd  kskksksksksk djdjdjdj kkskskweueu hdhdhdhdhdhd kdkdkdkdkdkdk</p>    
                </div>

                <div className="botonsProducto">
                    <div className="tituloBoton">
                        <p>CANTIDAD</p>
                        <p>TOTAL PRECIO</p>
                    </div>
                    <div className="botonesCantPre">
                        <div className="botonCantidad">
                            <p className="botonesAgregarRestar">-</p><p>4</p><p className="botonesAgregarRestar">+</p>
                        </div>
                        <div className="botonCantidad">
                             <p>$420</p>
                        </div>
                    </div>
                </div>

                <div className="botonCarritoModal">
                    <button className="botonAgregarCart">AGREGAR AL CARRITO</button>
                </div>
            </div>
        
        </div>       
    </div>
    )
}

export default ModalProductos;