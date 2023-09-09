// // components/HeroSection.js
// import { useEffect } from 'react';

// const HeroSection = () => {
//   useEffect(() => {
//     // Add a scroll event listener
//     const handleScroll = () => {
//       const submarineImage = document.querySelector('.submarine-img');
//       const featureContainers = document.querySelectorAll('.feature-container');
//       const scrollPosition = window.scrollY;

//       // Calculate the position to move the submarine image
//       const submarinePosition = scrollPosition / 2;

//       // Move the submarine image down
//       submarineImage.style.transform = `translateY(${submarinePosition}px)`;

//       // Check if feature containers are in view and reveal them
//       featureContainers.forEach((container, index) => {
//         const containerPosition = container.getBoundingClientRect().top + scrollPosition;

//         if (containerPosition < window.innerHeight - 100) {
//           container.style.opacity = '1';
//         }
//       });
//     };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section className="bg-sea4 bg-cover bg-no repeat text-black h-screen flex flex-col justify-center items-center relative overflow-hidden">
//       <img
//         src="/subimage.png"
//         alt="Submarine"
//         className="w-40 h-40 absolute submarine-img"
//         style={{ transition: 'transform 0.3s' }}
//       />
//       <div className="mt-6 text-center relative">
//         <h1 className="text-4xl font-bold">Welcome to Our Company</h1>
//         <div
//           className="feature-container opacity-0 mt-2"
//           style={{ transition: 'opacity 0.3s' }}
//         >
//           <p>Feature 1: Description</p>
//         </div>
//         <div
//           className="feature-container opacity-0 mt-2"
//           style={{ transition: 'opacity 0.3s' }}
//         >
//           <p>Feature 2: Description</p>
//         </div>
//         <div
//           className="feature-container opacity-0 mt-2"
//           style={{ transition: 'opacity 0.3s' }}
//         >
//           <p>Feature 3: Description</p>
//         </div>
//         <div
//           className="feature-container opacity-0 mt-2"
//           style={{ transition: 'opacity 0.3s' }}
//         >
//           <p>Feature 4: Description</p>
//         </div>
//         <div
//           className="feature-container opacity-0 mt-2"
//           style={{ transition: 'opacity 0.3s' }}
//         >
//           <p>Feature 5: Description</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




// components/HeroSection.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
const HeroSection = () => {
  useEffect(() => {
    // Scroll-triggered animations
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the submarine image
    gsap.fromTo(
      '.submarine-img',
      { y: '100%' },
      { y: '0%', duration: 1, ease: 'power2.inOut', scrollTrigger: '.submarine-img' }
    );

    // Animation for the feature containers
    const featureContainers = document.querySelectorAll('.feature-container');
    featureContainers.forEach((container, index) => {
      gsap.fromTo(
        container,
        { opacity: 0, y: '20px' },
        {
          opacity: 1,
          y: '0',
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%', // Adjust this value to control when the animation triggers
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-sea4 bg-cover bg-no repeat text-white h-screen flex flex-col justify-center items-center relative">
      <img
        src="/subimage.png"
        alt="Submarine"
        className="w-40 h-40 animate-float submarine-img"
      />
      <div className="mt-6 text-center relative">
        {/* <h1 className="text-4xl font-bold">Welcome to Our Company</h1> */}
        <div className="feature-container opacity-0 mt-2">
          <p>Feature 1: Description</p>
        </div>
        <div className="feature-container opacity-0 mt-2">
          <p>Feature 2: Description</p>
        </div>
        <div className="feature-container opacity-0 mt-2">
          <p>Feature 3: Description</p>
        </div>
        <div className="feature-container opacity-0 mt-2">
          <p>Feature 4: Description</p>
        </div>
        <div className="feature-container opacity-0 mt-2">
          <p>Feature 5: Description</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;




// import Head from "next/head";
// // import HeroSection from "components/HeroSection";
// // import Navbar from "components/Navbar";
// import React from "react";
// import Link from "next/link";

// export default function Herosection() {
// 	return (
// 		<>
// 		<div className=" min-h-screen flex justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
// 			 <Head>
// 				<title>Navigation using nextjs and tailwindcss</title>
// 				<meta name="description" content="Generated by create next app" />
// 				<link rel="icon" href="/pro.ico" />
// 			</Head>
// 			{/* <Navbar /> */}
			
			 
// 			<h1 className="text-center font-bold lg:text-4xl text-4xl space-y-2">WanderSub</h1>
// 		</div>
// 		<div className="p-10">
// 			<h2 className="font-bold text-4xl" >Misssion</h2>
// 			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra tellus in hac habitasse platea dictumst. Ullamcorper eget nulla facilisi etiam. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Et leo duis ut diam quam nulla. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Amet cursus sit amet dictum. Aenean et tortor at risus viverra adipiscing at in. Lacus sed turpis tincidunt id aliquet risus feugiat in ante.
// 			</p>

// 		</div>
// 		<div className="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed">

// 		</div>
// 		<div className="min-h-screen px-8 py-16 bg-black">
// 			<h1 className="text-4xl pb-10 text-white">
// 				 UnderwaterROV...
// 			</h1>
            
// 				<div className="min-h-screen px-8 py-16">

// 				</div>
//            <div className="grid gap-8 items-start justify-center">
// 			<div className="relative group">
// 				<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover: opacity-500 transition duration-1000 group-hover:duration-200">

// 				</div>

// 				<Link href="../pages/signin">
// 			<button className=" relative px-7 py-4 bg-black rounded-lg leading-none flex items-center space-x-5">
// 				<span className="text-gray-100 text-5xl group-hover:text-blue-500 transition duration-200">Let's start 🚀</span>

// 			</button>
// 			</Link>
// 			</div>
// 		   </div>
// 			{/* <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
// 				<h1 className="text-center">Let's start 🚀 </h1>
// 			</div> */}
            
// 		</div>
// 		<div className="bg-sea2 min-h-screen bg-no-repeat bg-center bg-fixed bg-cover">

// 		</div>
// 		</>
// 	);
// };





// // import React from "react";
// // import Link from "next/link";

// // function HeroSection() {
// // 	return (
       
  

// // 		<div className="bg-gradient-to-l md:bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center flex-col  pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
// // 			<h1 className="text-gray-900 pb-10">
// // 				 UnderwaterROV<span className="text-blue-500">Robust</span> &{" "}
// // 				<span className="text-blue-400"></span>
// // 			</h1>
// //             <Link href="../auth/signin">
           
// // 			<div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
// // 				<h1 className="text-center">Let's start 🚀 </h1>
// // 			</div>
// //             </Link>
// // 		</div>
    
// // 	);
// // }

// // export default HeroSection;



// import React, { useState, useEffect } from 'react';

// const Hero = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [showFeatures, setShowFeatures] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (scrollY >= 500) {
//       setShowFeatures(true);
//     } else {
//       setShowFeatures(false);
//     }
//   }, [scrollY]);
// const translateY=  scrollY*5.0;
// const rotateDeg=scrollY*0.1;
//   return (
//     <section
//       className="hero relative h-screen bg-sea4 bg-cover bg-no repeat"
//       style={{
//         overflow: 'hidden',
//       }}
//     >
//       <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
// 	  style={{
// 		transform:'translateY(${translateY}px) rotate(${rotateDeg}deg)',
// 		transition:'transform 0.5s ease',
// 	  }}>
//         <img
//           src="/subimage.png"
//           alt="Submarine"
//           className="w-40 h-40 transition-transform duration-500"
//           style={{
//             transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.2}deg)`,
//           }}
//         />
//       </div>

//       {showFeatures && (
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl">
//           <p>Feature 1: Description</p>
//           <p>Feature 2: Description</p>
//           <p>Feature 3: Description</p>
//           <p>Feature 4: Description</p>
//           <p>Feature 5: Description</p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;



// components/HeroSection.js
// import { useEffect, useState } from 'react';

// const HeroSection = () => {
//   const [featuresVisible, setFeaturesVisible] = useState([false, false, false, false, false]);

//   // Add an event listener to track the scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       const featureContainers = document.querySelectorAll('.feature-container');
//       featureContainers.forEach((container, index) => {
//         // Calculate when each feature container should become visible
//         const offset = container.getBoundingClientRect().top + window.scrollY;
//         if (window.scrollY + window.innerHeight > offset) {
//           setFeaturesVisible((prev) => {
//             // Set the opacity to 1 to make it visible
//             const newVisible = [...prev];
//             newVisible[index] = true;
//             return newVisible;
//           });
//         }
//       });
//     };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);
//     // Clean up the listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section className="bg-sea4 bg-cover bg-no repeat text-black h-screen flex flex-col justify-center items-center relative">
//       <img
//         src="/subimage.png"
//         alt="Submarine"
//         className="w-40 h-40 animate-float"
//       />
//       <div className="mt-6 text-center relative">
//         <h1 className="text-4xl font-bold color-black">Welcome to Our Company</h1>
//         {featuresVisible[0] && (
//           <div className="feature-container opacity-2 transition-opacity duration-5">
//             <p className="mt-2">Feature 1: Description</p>
//           </div>
//         )}
//         {featuresVisible[1] && (
//           <div className="feature-container opacity-0 transition-opacity duration-500">
//             <p className="mt-2">Feature 2: Description</p>
//           </div>
//         )}
//         {featuresVisible[2] && (
//           <div className="feature-container opacity-0 transition-opacity duration-500">
//             <p className="mt-2">Feature 3: Description</p>
//           </div>
//         )}
//         {featuresVisible[3] && (
//           <div className="feature-container opacity-0 transition-opacity duration-500">
//             <p className="mt-2">Feature 4: Description</p>
//           </div>
//         )}
//         {featuresVisible[4] && (
//           <div className="feature-container opacity-0 transition-opacity duration-500">
//             <p className="mt-2">Feature 5: Description</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



