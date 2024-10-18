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
    if (array.length === 0) {
      const productsArray = {
        id: id,
        cantidad: 1,
        valor: precio,
        url: urlImg,
      };
      setArray([...array, productsArray]);
      console.log("contador es, ", contador);
      console.log(
        "El ID es, ",
        id + " la cantidad es: ",
        contador + " El precio es, ",
        precio + "  La url es, ",
        urlImg
      );
    } else {
      const productsArray = array.map((arrayID) => {
        if (arrayID.id === id) {
          return {
            ...arrayID,
            cantidad: arrayID.cantidad + 1,
          };
        }
        return arrayID;
      });

      setArray(productsArray);
    }
  };

  const addArray = () => {
    array.map((array) => {
      console.log("cantidad : ", array.cantidad + " valor : ", array.valor);
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
