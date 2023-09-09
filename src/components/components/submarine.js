// components/Submarine.js
import React, { useEffect, useState } from 'react';
 // Replace with your image path

const Submarine = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const initialPositionStyle = {
    transform: 'translateY(100px)', // Set the initial position to 0px
  };

  const translateY = scrollY * 0.5; // Adjust the scrolling speed as needed

  const submarineStyle = {
    transform: `translateY(${translateY}px)`, // Apply translateY to the image
  };

  return (
    <div className="submarine-container" style={initialPositionStyle}>
      <div className="submarine" style={submarineStyle}>
       
      </div>
    </div>
  );
};

export default Submarine;