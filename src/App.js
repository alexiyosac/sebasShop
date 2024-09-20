import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const url = "https://fakestoreapi.com/products/";

  const [todos, setTodos] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
    console.log(data);
    <div>{data.title}</div>;
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      {todos.map((codigo) => {
        return (
          <div>
            <p>{codigo.id}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
