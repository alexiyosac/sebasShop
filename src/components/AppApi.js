import React from "react";
import { useState, useEffect } from "react";

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
            return <li key={index}>{productos.title}</li>
        })}
    </ul>

  )


};

export default AppApi;
