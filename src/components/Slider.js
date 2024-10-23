import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../estilos/slider.css";
import data from "../zapatos.json";
import { UserContext }  from "../context/UserAgregar";

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



  const { agregarItem } = useContext(UserContext);

  const manejarClick = (id, precio, urlImg) => {
    agregarItem(id, precio, urlImg);
  };


  return (
    <Slider {...settings} className="contenedor-slider slider-container">
      {/* recorrer el array de zapatos */}
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
                <button className="buttonAgregar" onClick={() => manejarClick(zapatos.id, zapatos.price, zapatos.url )}>
                 AGREGAR AL CARRITO
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
