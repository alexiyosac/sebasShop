import React from "react";
import "./App.css";
import AppApi from "./components/AppApi";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Delivery from "./components/Deliverypag";
import SliderProductos from "./components/Slider";
import { UserProvider } from "./context/UserProvider";


function App() {

 

  return (
    <UserProvider>
      <NavBar />
      <Header />
      <SliderProductos />
      <AppApi />
      <Delivery />
    </UserProvider>
  );
}

export default App;
