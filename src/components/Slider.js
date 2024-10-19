import { React, useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../estilos/slider.css";
import data from "../zapatos.json";
import { UserContext } from "../context/UserProvider";

const SliderProductos = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { contador, array, setContador, setArray } = useContext(UserContext);
  const incrementarContador = (id, precio, urlImg) => {
    setContador(contador + 1);
    setArray((prevItems) => {
      const itemExistente = prevItems.find((item) => item.id === id);
      if (itemExistente) {
        // Si el item ya existe, actualizar su cantidad
        return prevItems.map((item) =>
          // Buscar si el item ya existe en el array
          item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        // Si el array está vacío o el item no existe, agregar el nuevo item
        const productsArray = {
          id: id,
          cantidad: 1,
          valor: precio,
          url: urlImg,
        };
        return [...prevItems, productsArray];
      }
    });
  };



  const verificar = () => {
    array.length === 0
      ? console.log("array vacio")
      : console.log("array existe");
  };

  return (
    <Slider {...settings} className="contenedor-slider slider-container">
      {data.map((zapatos, index) => {
        return (
          <div className="contenedor-zapatos" key={index}>
            <div className="contenedor-img-zapatos">
              <img
                src={zapatos.url}
                alt={zapatos.name}
                className="imgZapatos"
              />

              <div className="cajaColor">
                <button
                  onClick={() =>
                    incrementarContador(zapatos.id, zapatos.price, zapatos.url)
                  }
                  className="buttonAgregar"
                >
                  AGREGAR AL CARRITO
                </button>
                <button onClick={verificar} className="buttonAgregar">
                  VERIFICAR VACIO
                </button>
              </div>
            </div>

            <div className="contenedor-texto">
              <p>{zapatos.name}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderProductos;
