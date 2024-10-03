import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../estilos/slider.css";
import data from "../zapatos.json"



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
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
   
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <Slider {...settings} className="contenedor-slider slider-container">
          {data.map((zapatos, index)=>{
      return(
        <div className="contenedor-zapatos">
        
            <div className="contenedor-img-zapatos">
                 <img src={zapatos.url} alt={zapatos.name} className="imgZapatos" />
              </div>

            <div className="contenedor-texto">
                <p>{zapatos.name}</p>
            </div>

        </div>

      )
  })}
    </Slider>
  );
};

export default SliderProductos;
