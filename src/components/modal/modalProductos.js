import React from "react";
import "../../estilos/modalProductos.css"

const ModalProductos = () => {
    return(
    <div className="modalContainerP">
        
        <div className="ventanaModal">
                <div className="ventanaProducto">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="zapato" className="imgProducto" />
                </div>

            <div className="ventanaDescripcion">
                <div className="titulosProducto">
                    <h1>TITULO DEL PRODUCTO</h1>
                    <p className="subtituloProducto">Subtitulo</p>
                    <p className="tituloPrecioProducto">$420</p>
                </div>

                <div className="descripcionProducto">
                    <p>loremmmmm mmmmmm kkkkkkks  dkdkkdkd  kskksksksksk djdjdjdj kkskskweueu hdhdhdhdhdhd kdkdkdkdkdkdk</p>    
                </div>

                <div className="botonsProducto">
                    <div className="tituloBoton">
                        <p>CANTIDAD</p>
                        <p>TOTAL PRECIO</p>
                    </div>
                    <div className="botonesCantPre">
                        <div className="botonCantidad">
                             <p>-</p><button>4</button><p>+</p>
                        </div>
                        <div className="botonPrecio">
                             <p>$420</p>
                        </div>
                    </div>
                </div>

                <div className="botonCarritoModal">
                    <button>AGREGAR AL CARRITO</button>
                </div>
            </div>
        
        </div>       
    </div>
    )
}

export default ModalProductos;