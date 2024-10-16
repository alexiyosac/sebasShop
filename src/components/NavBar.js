import React, { useContext } from "react";
import "../estilos/navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserProvider";



const NavBar = ({openModal}) => {


  const { contador } = useContext(UserContext );

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

        <div className="NavCarrito" onClick={openModal}>
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="circuloCar"><p>{contador}</p></div>        
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
