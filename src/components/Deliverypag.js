import React from "react";
import "../estilos/Delivery.css"
import chicaDelivery from "../jpg/mujer-delivery.png" 

const Delivery = () => {
    return(
        <div className="container-principal">
            <div className="container-delivery">
                <div className="text-delivery">
                    <p>POR COMPRAS MAYORES A <strong>$50</strong></p>
                    <h1>ENTREGA GRATIS A NIVEL NACIONAL</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat sint voluptatum similique laborum corporis in, ut error quos reprehenderit, dolorum eveniet perferendis, ipsum rerum. A dolorem quis veritatis quisquam.</p>  
                
                </div>

                <div className="img-container">
                    <img src={chicaDelivery} alt="fondo" className="imagen-chica" />
                </div>
            </div>
        </div>
    );
}

export default Delivery;