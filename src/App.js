import React from "react";
import "./App.css";
import AppApi from "./components/AppApi";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <AppApi />
      <img src="https://kiyariperu.com/wp-content/uploads/2015/09/imaki40-1200x800.jpg" alt="Fondo" width="300" />
    </div>
  );
}

export default App;
