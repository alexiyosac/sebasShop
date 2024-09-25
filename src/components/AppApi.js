import React from "react";
import { useState, useEffect } from "react";
import "../estilos/appApiStyle.css"

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
    <ul>
        {todos.map((productos, index)=>{
            return <div>
              <li key={index}>{productos.title}</li>
              <img src={productos.image} alt={productos.title} width="200" />
              </div>
        })}
       
    </ul>

  )


};

export default AppApi;
