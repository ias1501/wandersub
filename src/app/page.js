




























// // pages/index.js
// "use client"
// import { useState, useEffect } from 'react';
// import Submarine from '../components/components/submarine';
// import NavBar from '@/components/components/Navbar';
// // import Hero from '@/components/components/Herosection';
// import HeroSection from '@/components/components/Herosection';
// import Footer from '@/components/components/Footer';
// export default function Home() {
  
//   return (
//     <div>
//       <NavBar/>
   
//       <HeroSection/>
//     <Footer/>
//     </div>
//   );
// }
// "use client"
// import React, { useEffect } from 'react';
// import '../styles/globals.css'; // Make sure to adjust the path to your CSS file
// import logo from '../../public/SAVE_20230909_205709-removebg-preview.png';
// import BackgroundVideo from '../components/components/Backgroundvedio';
// import Image from 'next/image';
// import NavBar from '@/components/components/Navbar';
// function Hero2() {
//   // Function to handle the scroll event for changing the navbar style
//   function handleScroll() {
//     const navbar = document.querySelector('header');
//     if (window.scrollY > 100) {
//       navbar.classList.add('bg-color-primary-dark');
//       navbar.classList.add('border-b');
//       navbar.classList.add('border-color-gray');
//     } else {
//       navbar.classList.remove('bg-color-primary-dark');
//       navbar.classList.remove('border-b');
//       navbar.classList.remove('border-color-gray');
//     }
//   }

//   // Function to toggle the mobile menu
//   function toggleMobileMenu() {
//     const menu = document.querySelector('#menu');
//     const faSolid = document.querySelector(".fa-solid");

//     menu.classList.toggle('hidden');
//     faSolid.classList.toggle('fa-xmark');
//   }

//   // Function to show user reviews
//   function showReview(event) {
//     const userTexts = document.getElementsByClassName('user-text');
//     const userPics = document.getElementsByClassName('user-pic');
    
//     for (const userPic of userPics) {
//       userPic.classList.remove("active-pic");
//     }
//     for (const userText of userTexts) {
//       userText.classList.remove("active-text");
//     }
//     let i = Array.from(userPics).indexOf(event.target);
//     userPics[i].classList.add('active-pic');
//     userTexts[i].classList.add('active-text');
//   }

//   // Function to toggle card rotation
//   function toggleCardRotation() {
//     const card_1_front = document.querySelector("#card_1_front");
//     const card_1_back = document.querySelector("#card_1_back");
//     const card_2_front = document.querySelector("#card_2_front");
//     const card_2_back = document.querySelector("#card_2_back");
//     const card_3_front = document.querySelector("#card_3_front");
//     const card_3_back = document.querySelector("#card_3_back");

//     card_1_front.classList.toggle('-rotate-y-180');
//     card_1_back.classList.toggle('rotate-y-180');
//     card_2_front.classList.toggle('-rotate-y-180');
//     card_2_back.classList.toggle('rotate-y-180');
//     card_3_front.classList.toggle('-rotate-y-180');
//     card_3_back.classList.toggle('rotate-y-180');
//   }

//   useEffect(() => {
//     // Attach event listeners when the component mounts
//     handleScroll(); // Call handleScroll initially
//     window.addEventListener('scroll', handleScroll);
//     toggleCardRotation();
//     window.addEventListener('click', toggleCardRotation);

//     // Clean up event listeners when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       // Remove other event listeners if necessary
//     };
//   }, []);

//   return (
//     <div className='bg-color-primary text-color-white'>

//       <title>WanderSub</title>
//       <link rel="stylesheet" href="css/main.css" />
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
//         integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
//         crossOrigin="anonymous"
//         referrerPolicy="no-referrer"
//       />
//       <header className="sticky top-0 z-50">
//        <NavBar/>
//       </header>
//       <main>
//         <section id="home" className="relative">
        
//           <div className="blob1" />
//           <div className="blob2" />
//           <div className="container py-20">
//             <div className="flex flex-col items-center z-20 md:flex-row">
//               <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
//                 <h1 className="title mb-4">Awesome App for Your Financial.</h1>
//                 <p className="leading-relaxed mb-10">
//                   This should be used to tell a story and let your users know a
//                   little more about app and its use, How can benefit them.
//                 </p>
//                 <button className="btn">Download app</button>
//               </div>
//               <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
//               <Image
//               src={logo}
//               alt="Logo"
//               width="500"
//               height="500"
//               className="cursor-pointer"
//               priority
//               />
//               </div> 
//             </div>
//           </div>
//         </section>
//         <section id="features" className="bg-color-primary-light">
//           <div className="container py-20">
//             <div className="text-center m-auto mb-20 md:w-1/2">
//               <h4 className="font-bold text-color-secondary mb-4">Our Future</h4>
//               <h1 className="title">Easy To Manage Your All Payments By Our App</h1>
//             </div>
//             <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
//               {/* card no 1 */}
//               <div id='toggleBtn' className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200" onClick={toggleCardRotation}>
//                 <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
//                   <i className="fa-solid fa-calendar-days text-4xl" />
//                 </div>
//                 <h3 className="text-xl font-bold py-4">Expense Tracking</h3>
//                 <p className="leading-relaxed">
//                   We use an application designed for testing and to keep track.
//                 </p>
//               </div>
//               {/* card no 2 */}
//               <div id='toggleBtn' className="bg-color-primary-dark border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer" onClick={toggleCardRotation}>
//                 <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
//                   <i className="fa-solid fa-chart-column text-4xl" />
//                 </div>
//                 <h3 className="text-xl font-bold py-4">Finance Snapshot</h3>
//                 <p className="leading-relaxed">
//                   We use an application designed for testing and to keep track.
//                 </p>
//               </div>
//               {/* card no 3 */}
//               <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
//                 <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
//                   <i className="fa-solid fa-phone text-4xl" />
//                 </div>
//                 <h3 className="text-xl font-bold py-4">Support 24/24</h3>
//                 <p className="leading-relaxed">
//                   We use an application designed for testing and to keep track.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Add more sections here */}
//         <section id="pricing" class="bg-color-primary-light">
//             <div class="container py-20">
//                 <div class="text-center m-auto mb-20 md:w-1/2">
                    
//                     <h1 class="title">Features</h1>
//                     {/* <!-- Rounded switch  --> */}
                   
//                 </div>
//                 <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//                     {/* <!-- card 1 --> */}
//                     <div class="card relative h-auto w-auto">
//                         {/* <!-- front side  --> */}
//                         <div id="card_1_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            
//                         </div>
//                         {/* <!-- back side  --> */}
//                         <div id="card_1_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
                            
//                         </div>
//                     </div>
//                     {/* <!-- card 2 --> */}
//                     <div class="card relative h-auto w-auto">
//                         {/* <!-- front side  --> */}
//                         <div id="card_2_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            
//                         </div>
//                         {/* <!-- back side  --> */}
//                         <div id="card_2_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
                           
//                         </div>
//                     </div>
//                     {/* <!-- card 3 --> */}
//                     <div class="card relative h-auto w-auto">
//                         {/* <!-- front side  --> */}
//                         <div id="card_3_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
//                             <div class="relative">
//                                 <p class="text-6xl text-black pl-2 font-bold  before:absolute before:text-sm before:top-0 before:left-0">
//                                     Feature3
//                                 </p>
//                             </div>
//                             <div class="py-10">
//                                 <h3 class="text-xl font-bold pb-3">Basic</h3>
//                                 <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
//                             </div>
//                             <ul class="space-y-4 pb-10">
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-secondary"></i>
//                                     <span class="pl-4">Expense Management</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-secondary"></i>
//                                     <span class="pl-4">Card Management</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Instant Statistics</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Bookmark Function</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Accounting System</span>
//                                 </li>
//                             </ul>
//                             <button class="card_btn">Get Started</button>
//                         </div>
//                         {/* <!-- back side  --> */}
//                         <div id="card_3_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
//                             <div class="relative">
//                                 <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
//                                     500<span class="text-sm font-normal tracking-widest">/per month</span>
//                                 </p>
//                             </div>
//                             <div class="py-10">
//                                 <h3 class="text-xl font-bold pb-3">Premium</h3>
//                                 <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
//                             </div>
//                             <ul class="space-y-4 pb-10">
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-secondary"></i>
//                                     <span class="pl-4">Expense Management</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-secondary"></i>
//                                     <span class="pl-4">Card Management</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Instant Statistics</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Bookmark Function</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Accounting System</span>
//                                 </li>
//                             </ul>
//                             <button class="card_btn">Get Started</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//       </main>
//     </div>
    
//   );
// }

// export default Hero2;

"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './hero3.css';
import NavBar from '@/components/components/Navbar';
import logo from '../../public/SAVE_20230909_205709-removebg-preview.png';
import Image from 'next/image';
import Footer from '@/components/components/Footer';
import { FaFacebook, FaDiscord, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
const Hero3 = () => {
  useEffect(() => {
      // Initialize GSAP and ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Set initial properties for photos
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });
     
      // Create GSAP animation
      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1
      });
      
  
      // Create ScrollTrigger
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        animation: animation,
        scrub: true,
        markers: false
      });
      
  }, []);
  const socialMediaLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaDiscord />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaGithub />, url: '#' },
    { icon: <FaDribbble />, url: '#' }
  ];

  return (

    <div className='bg-color-primary text-color-white'>
       <title>WanderSub</title>
      <link rel="stylesheet" href="css/main.css" />
       <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <header className="sticky top-0 z-50">
       <NavBar/>
      </header>
      <main>
        <section id="home" className="relative">
        
          <div className="blob1" />
          <div className="blob2" />
          <div className="container py-20">
            <div className="flex flex-col items-center z-20 md:flex-row">
              <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
                <h1 className="title mb-4">“Explore the secrets of underwater world with WanderSub”</h1>
                <p className="leading-relaxed mb-10">
                WanderSub is a state-of-the-art underwater remotely operated vehicle (ROV) built for underwater exploration, environmental monitoring, scientific research, aquaculture development, and disaster relief. It's your go-to tool with 5 Degrees of Freedom (DOF) maneuverability, multi-modal communication, barcode scanning, and high-quality video transmission. Plus, its integrated Control Software and User Website simplifies operation tenfold.
                </p>
                <button className="btn">Explore Now</button>
              </div>
              <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
              <Image
              src={logo}
              alt="Logo"
              width="500"
              height="500"
              className="cursor-pointer"
              priority
              />
              </div> 
            </div>
          </div>
        </section>
        </main>
       <h1 className='text-center '>Features</h1>
        
        <div className="gallery bg-galery bg-no repeat bg-cover">
          
          <div className="left">
            <div className="detailsWrapper">
              <div className="details">
                <div className="headline turqoise" >5 Degrees of Freedom
                <p className='text'>egwfciodlxksmn</p>
                </div>
              </div>
              <div className="details">
                <div className="headline bs" >3 Ways of Communication
               <p> Li-Fi
                UART without vedio streaming
                Ethernet</p>
                </div>
              </div>
              <div className="details">
                <div className="headline raf" >Relative Mapping of Underwater Objects
                <p> Li-Fi
                UART without vedio streaming
                Ethernet</p>
                </div>
              </div>
              <div className="details">
                <div className="headline skyblue" >Relative Mapping of Underwater Objects
                <p> Li-Fi
                UART without vedio streaming
                Ethernet</p>
                </div>
              </div>
              <div className="details">
                <div className="headline bbe" >Relative Mapping of Underwater Objects
                <p> Li-Fi
                UART without vedio streaming
                Ethernet</p>
                </div>
              </div>
              <div className="details">
                <div className="headline bluegrey" >Relative Mapping of Underwater Objects
                <p> Li-Fi
                UART without vedio streaming
                Ethernet</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="photos">
              <div className="photo card bg-rov1 bg-cover bg-no repeat ">5 Degrees of Freedom</div>
              <div className="photo card bg-Lifi bg-cover bg-no repeat ">3 Ways of Communication</div>
              <div className="photo card bg-rov2 bg-cover bg-no repeat">Relative Mapping of Underwater Objects</div>
              <div className="photo card bg-rov3 bg-cover bg-no repeat">Faster Travel</div>
              <div className="photo card bg-cs bg-cover bg-no repeat">Integrated ROV Control Software</div>
              <div className="photo card bg-ls bg-cover bg-no repeat">Live Video Streaming</div>
              <div className="photo card bg-dm bg-cover bg-no repeat">Depth Monitoring</div>
              <div className="photo card bg-dl bg-cover bg-no repeat">Data Logging</div>
            </div>
          </div>
        </div>
       
        <Footer/>
        
    
      </div>
  )
}

export default Hero3
