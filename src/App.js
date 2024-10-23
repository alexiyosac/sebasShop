import React, { useState } from "react";
import "./App.css";
import AppApi from "./components/AppApi";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Delivery from "./components/Deliverypag";
import ModalCarrito from "./components/modal/modalCarrito";
import SliderProductos from "./components/Slider";
import ModalProductos from "./components/modal/modalProductos";
import UserContext from "./context/UserAgregar"


function App() {
  const [openModalCar, setOpenModalCar] = useState(false);

  return (
    <UserContext> 
      <ModalProductos />
      <ModalCarrito open={openModalCar} openModal={()=> setOpenModalCar(!openModalCar)}/>
      <NavBar openModal={()=> setOpenModalCar(true)}/>
      <Header />
      <SliderProductos />
      <AppApi />
      <Delivery />
    </UserContext>
  );
}

export default App;
