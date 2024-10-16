// src/main.jsx
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


const ImageCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [foto1, foto2, foto3, foto4, foto5];

  return (
    <div className="flex justify-center p-4">
      <div className="w-full md:w-3/4 lg:w-2/3">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ease-in-out ${activeSlide === index ? 'scale-110' : 'scale-100'}`}
              style={{ margin: '0 15px' }}
            >
              <img src={image} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageCarousel;
