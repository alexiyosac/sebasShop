import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "../estilos/appApiStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { UserContext }  from "../context/UserAgregar";



const AppApi = () => {
  
  const url = "https://fakestoreapi.com/products/";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(url);
      const data = await response.json();
      setTodos(data);
      
    }

    fetchApi();
  }, []);


const {agregarItem} = useContext(UserContext);
const manejarClick = (id, precio, urlImg) => {
  agregarItem(id, precio, urlImg);
}

  return (
    <div className="containerP">
      <ul className="products">
        {todos.map((productos, index) => {
          return (
            <div className="container-products" key={index} >
              <div className="container-img" >
                <img
                  className="img-products"
                  src={productos.image}
                  alt={productos.title}
                  width="200"
                  height="200"
                />
              </div>

              <li className="title-products" >
                {productos.title}
                
              </li>

              <div className="price-products">
                <p>${productos.price}</p>
                <FontAwesomeIcon icon={faCartPlus} className="iconCard" onClick={()=> manejarClick(productos.id, productos.price, productos.image)}/>
              </div>

            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AppApi;
