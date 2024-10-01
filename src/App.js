import React from "react";
import "./App.css";
import AppApi from "./components/AppApi";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Delivery from "./components/Deliverypag";
import SliderProductos from "./components/Slider";


function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <SliderProductos />
      <AppApi />
      <Delivery />
    </div>
  );
}

export default App;
