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
          <p className="navMenu-op">Home</p>
          <p className="navMenu-op">Shop</p>
          <p className="navMenu-op">About</p>
        </div>

        <div className="navSearch">
          Búsqueda <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default navBar;
