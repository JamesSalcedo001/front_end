"use client"
import React from 'react';
import Slider from 'react-slick';
import '../stylesheets/carousel.css';
import Image from 'next/image';

const Carousel = ({ carouselData }) => {
  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };

  const settings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    speed: 500,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />
  };

  return (
    <Slider {...settings}>
      {carouselData.map((slide, index) => {
        return (
          <div key={index}>
            <img src={slide.image} alt="slider" key={index} className="image" />
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;






// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import "../stylesheets/carousel.css";


// export default function Carousel() {
//   var settings = {
//     dots: true,
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <>
//     <Slider {...settings} id="carousel" className="w-[600px] h-[600px] m-auto border-2 border-black">
//       <div className="text-center">
//         <h3>1</h3>
//       </div>
//       <div className="text-center">
//         <h3>2</h3>
//       </div>
//       <div className="text-center">
//         <h3>3</h3>
//       </div>
//     </Slider>
//     </>
//   );
// }