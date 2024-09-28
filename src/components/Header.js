import React from "react";
import "../estilos/header.css";

const Header = () => {
  return (
    <header className="container-header">
      <div className="fondo-header">
        <p className="promo-header">Promociones de temporada</p>
        <h1 className="titulo-header">EN TODOS LOS PRODUCTOS</h1>
        <div className="obtenDesc-Header">
          <p className="p-obten">OBTÉN DESC. DE HASTA EL {"\u00A0"}</p>
          {/* \u00A0 agrega un espacio invisible */}
          <p className="p-70">70%</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
