import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../estilos/slider.css";
import data from "../zapatos.json"



const SliderProductos = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <Slider {...settings} className="contenedor-slider slider-container">
          {data.map((zapatos, index)=>{
      return(
        <img src={zapatos.url} alt={zapatos.name} className="imgZapatos" />
      )
  })}
    </Slider>
  );
};

export default SliderProductos;
