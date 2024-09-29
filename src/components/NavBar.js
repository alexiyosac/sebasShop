import React from "react";
import "../estilos/navBar.css";

const navBar = () => {
  return (
    <div className="containerPrincipal">
      <div className="container">
        <div className="navLogo">
          Sebas
          <strong>SHOP</strong>
        </div>
        <div className="navMenu">
          <a href="/home" className="navMenu-op">Home</a>
          <a href="/shop" className="navMenu-op">Shop</a>
          <a href="/about" className="navMenu-op">About</a>
        </div>

        <div className="navSearch">
          Búsqueda <input type="text" className="typeSearch"/>
        </div>
      </div>
    </div>
  );
};

export default navBar;
