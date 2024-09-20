import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const url = "https://fakestoreapi.com/products/";

  const [todos, setTodos] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      
      {todos.map((item) => {
        return (
               <p>{item.id}</p>
        );
      })}
    </div>
  );
}

export default App;
