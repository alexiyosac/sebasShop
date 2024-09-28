import React from "react";
import { useState, useEffect } from "react";
import "../estilos/appApiStyle.css";

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

  return (
    <div className="containerP">
      <ul className="products">
        {todos.map((productos, index) => {
          return (
            <div className="container-products">
              <img
                src={productos.image}
                alt={productos.title}
                width="200"
                height="200"
              />
              <li className="title-products" key={index}>{productos.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AppApi;
