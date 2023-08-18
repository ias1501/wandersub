// components/ServicesCarousel.js
"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image';
import "../components/sercarousel.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

    const CarouselComponent = () => {
      const [hover, setHover] = useState(false);
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
      const slides = [
        {
          title: 'Mobile app',
          content: 'Slide 1 Content...',
          imageSrc: '/floattest.jpg'
        },
        {
          title: 'Slide 2 Title',
          content: 'Slide 2 Content...',
          imageSrc: '/image2.jpg'
        },
        {
          title: 'Slide 3 Title',
          content: 'Slide 3 Content...',
          imageSrc: '/image3.jpg'
        },
        // Add more slides as needed
      ];
    
      return (
        <div
      className={`slide-container ${hover ? 'hover' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
        <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <div className="slide-content">
            <h3>{slide.title}</h3>
            <p>{slide.content}</p>
          </div>
          <div className="slide-image">
            <Image src={slide.imageSrc} alt={`Slide ${index + 1}`} width={800} height={500} layout="responsive" />
          </div>
        </div>
      ))}
    </Slider>
    </div>
      //   <Carousel showArrows={true}
      //   renderArrowPrev={(onClickHandler, hasPrev, label) =>
      //     hasPrev && (
      //       <button onClick={onClickHandler} title={label} className="carousel-arrow prev">
      //         <FaArrowLeft />
      //       </button>
      //     )
      //   }
      //   renderArrowNext={(onClickHandler, hasNext, label) =>
      //     hasNext && (
      //       <button onClick={onClickHandler} title={label} className="carousel-arrow next">
      //         <FaArrowRight />
      //       </button>
      //     )
      //   }
      // >
      //     <div className="slide">
      //       <div className="slide-content">
      //         <h3>Mobile app</h3>
      //         <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
      //       </div>
      //       <div className="slide-image">
      //         <Image src="/floattest.jpg" alt="Image 1" width={800} height={500} layout="responsive" />
      //       </div>
      //     </div>
      //     <div className="slide">
      //       <div className="slide-content">
      //         <h3>Desktop App</h3>
      //         <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm..</p>
      //       </div>
      //       <div className="slide-image">
      //         <Image src="/floattest.jpg" alt="Image 1" width={800} height={500} layout="responsive" />
      //       </div>
      //     </div>
      //     <div className="slide">
      //       <div className="slide-content">
      //         <h3>Multiple Users</h3>
      //         <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
      //       </div>
      //       <div className="slide-image">
      //         <Image src="/floattest.jpg" alt="Image 1" width={800} height={500} layout="responsive" />
      //       </div>
      //     </div>
      //     <div className="slide">
      //       <div className="slide-content">
      //         <h3>Integrations</h3>
      //         <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
      //       </div>
      //       <div className="slide-image">
      //         <Image src="/floattest.jpg" alt="Image 1" width={800} height={500} layout="responsive" />
      //       </div>
      //     </div>
      //     <div className="slide">
      //       <div className="slide-content">
      //         <h3>Monthly Report</h3>
      //         <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
      //       </div>
      //       <div className="slide-image">
      //         <Image src="/floattest.jpg" alt="Image 1" width={800} height={500} layout="responsive" />
      //       </div>
      //     </div>
      //     <div className="slide">
      //       <div className="slide-content">
      //         <h3>Granular Permission </h3>
      //         <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
      //       </div>
      //       <div className="slide-image">
      //         <Image src="/floattest.jpg" alt="Image 1" width={800} height={500} layout="responsive" />
      //       </div>
      //     </div>
          


      //     {/* ... Repeat for other slides */}
      //   </Carousel>
      );
    };
    const NextArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <button className={`${className} carousel-arrow next`} style={style} onClick={onClick}>
          <FaArrowRight />
        </button>
      );
    };
    
    const PrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <button className={`${className} carousel-arrow prev`} style={style} onClick={onClick}>
          <FaArrowLeft />
        </button>
      );
    };
    
    export default CarouselComponent;