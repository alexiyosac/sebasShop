import {React, useContext, useState } from "react";
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

const [contador, setContador] = useContext(UserContext);
const [count, setCount] = useState(0);

  const handlerClick = () =>{
    setCount(count + 1);
    console.log(`El valor de count en slider es ${count}`);
    setContador(count);
   
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
                <button onClick={handlerClick} className="buttonAgregar">
                  AGREGAR AL CARRITO {count}
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
