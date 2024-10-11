import React from "react";
import { useState } from "react";
import "../estilos/navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
  const [cantCarrito, setCanCarrito] = useState(0);


    return (
    <div className="containerPrincipal">
      <div className="container">
        <div className="navLogo">
          Sebas
          <strong>SHOP</strong>
        </div>
        <div className="navMenu">
          <a href="/home" className="navMenu-op">
            Home
          </a>
          <a href="/shop" className="navMenu-op">
            Shop
          </a>
          <a href="/about" className="navMenu-op">
            About
          </a>
        </div>

        <div className="NavCarrito">
          <p>{cantCarrito}</p>
        </div>

        <div className="navSearch">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Búsqueda" className="typeSearch" />
        </div>
      </div>
    </div>

  );
};

export default NavBar;
