
// // import {AiOutLineMenu} from "react-icons/ai"
// // const Navbar = () => {
// //     const [menuOpen , setMenuOpen]=useState(false)

// //    const handleNav =() =>(
// //        setMenuOpen(!menuOpen)
// //    )

// //     return (
// //         <nav className="fixed w-full h-24 shadow-xl bg-white">
// //             <div className="flex justify-between items-centre h-full w-full px-4 2xl:px-16">
// //               <Image
// //               src={logo}
// //               alt="Logo"
// //               width="100"
// //               height="75"
// //               className="cursor-pointer"
// //               priority
// //               />
              
// //                 <div >
// //                     <ul className="hidden sm-flex ">
// //                         <Link href="/about">
// //                             <li className="ml-10 uppercase hover:border-b text-xl">Why WanderSub</li>
// //                         </Link>
// //                         <Link href="/contact">
// //                             <li className="ml-10 uppercase hover:border-b text-xl">Contact Us</li>
// //                         </Link>
// //                         <Link href="/Dashboard">
// //                             <li className="ml-10 uppercase hover:border-b text-xl">Dashboard
// //                             </li>
// //                         </Link>
// //                         <Link href="/services">
// //                             <li className="mx-10 uppercase hover:border-b text-xl">Services</li>
// //                         </Link>
                        
// //                     </ul>
// //                      </div>
// //                      <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
// //                         <AiOutLineMenu size={25}/>
// //                      </div>
// //             </div>

// //         </nav>
// //     );
// //     };
// //     export default Navbar -->
// "use client"
// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import { Link } from "react-scroll";
// import Image from "next/image";
// import logo from "../public/logo.jpg"

//  function Navbar() {
// 	const [isOpen, setIsOpen] = useState(false);
// 	return (
// 		<div>
// 			<nav className=" shadow-sm fixed w-full z-10">
// 				<div className="w-full">
// 					<div className="flex items-center h-20 w-full">
// 						<div className="flex items items-center  mx-20  justify-between w-full">
// 							<div className="flex justify-center items-center flex-shrink-0 ">
// 								<h1 className=" font-bold text-xl cursor-pointer">
// 									Wander<span className="text-blue-500">Sub</span>
// 								</h1>
// 							</div>
// 							<div className="hidden md:block">
// 								<div className="ml-10 flex items-baseline space-x-4">
// 									<Link
// 										activeClass="Home"
// 										to="about"
// 										smooth={true}
// 										offset={50}
// 										duration={500}
// 										className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-white"
// 									>
// 										Home
// 									</Link>
// 									<Link
// 										activeClass="about"
// 										to="about"
// 										smooth={true}
// 										offset={50}
// 										duration={500}
// 										className="cursor-pointer hover:bg-blue-600 text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium"
// 									>
// 										About
// 									</Link>
// 									<Link
// 										activeClass="work"
// 										to="work"
// 										smooth={true}
// 										offset={50}
// 										duration={500}
// 										className="cursor-pointer hover:bg-blue-600 text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium"
// 									>
// 										Projects
// 									</Link>

// 									<Link
// 										activeClass="Services"
// 										to="work"
// 										smooth={true}
// 										offset={50}
// 										duration={500}
// 										className="cursor-pointer hover:bg-blue-600 text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium"
// 									>
// 										Services
// 									</Link>

// 									<Link
// 										activeClass="contact"
// 										to="contact"
// 										smooth={true}
// 										offset={50}
// 										duration={500}
// 										className="cursor-pointer bg-blue-600 text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
// 									>
// 										Contact
// 									</Link>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="mr-10 flex md:hidden ">
// 							<button
// 								onClick={() => setIsOpen(!isOpen)}
// 								type="button"
// 								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-black  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
// 								aria-controls="mobile-menu"
// 								aria-expanded="false"
// 							>
// 								<span className="sr-only">Open main menu</span>
// 								{!isOpen ? (
// 									<svg
// 										className="block h-6 w-6"
// 										xmlns="http://www.w3.org/2000/svg"
// 										fill="none"
// 										viewBox="0 0 24 24"
// 										stroke="currentColor"
// 										aria-hidden="true"
// 									>
// 										<path
// 											strokeLinecap="round"
// 											strokeLinejoin="round"
// 											strokeWidth="2"
// 											d="M4 6h16M4 12h16M4 18h16"
// 										/>
// 									</svg>
// 								) : (
// 									<svg
// 										className="block h-6 w-6"
// 										xmlns="http://www.w3.org/2000/svg"
// 										fill="none"
// 										viewBox="0 0 24 24"
// 										stroke="currentColor"
// 										aria-hidden="true"
// 									>
// 										<path
// 											strokeLinecap="round"
// 											strokeLinejoin="round"
// 											strokeWidth="2"
// 											d="M6 18L18 6M6 6l12 12"
// 										/>
// 									</svg>
// 								)}
// 							</button>
// 						</div>
// 					</div>
// 				</div>

// 				<Transition
// 					show={isOpen}
// 					enter="transition ease-out duration-100 transform"
// 					enterFrom="opacity-0 scale-95"
// 					enterTo="opacity-100 scale-100"
// 					leave="transition ease-in duration-75 transform"
// 					leaveFrom="opacity-100 scale-100"
// 					leaveTo="opacity-0 scale-95"
// 				>
// 					{(ref) => (
// 						<div className="md:hidden" id="mobile-menu">
// 							<div
// 								ref={ref}
// 								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
// 							>
// 								<Link
// 									href="/home"
// 									activeClass="home"
// 									to="home"
// 									smooth={true}
// 									offset={50}
// 									duration={500}
// 									className="cursor-pointer hover:bg-blue-600 text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
// 								>
// 									Home
// 								</Link>
// 								<Link
// 									href="/about"
// 									activeClass="about"
// 									to="about"
// 									smooth={true}
// 									offset={50}
// 									duration={500}
// 									className="cursor-pointer hover:bg-blue-600 text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
// 								>
// 									About
// 								</Link>

// 								<Link
// 									href="/work"
// 									activeClass="work"
// 									to="work"
// 									smooth={true}
// 									offset={50}
// 									duration={500}
// 									className="cursor-pointer hover:bg-blue-600 text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
// 								>
// 									Projects
// 								</Link>
// 								<Link
// 									href="/services"
// 									activeClass="services"
// 									to="services"
// 									smooth={true}
// 									offset={50}
// 									duration={500}
// 									className="cursor-pointer hover:bg-blue-600 text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
// 								>
// 									Services
// 								</Link>

// 								<Link
// 									href="/contact"
// 									activeClass="work"
// 									to="work"
// 									smooth={true}
// 									offset={50}
// 									duration={500}
// 									className="cursor-pointer hover:bg-blue-600 text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
// 								>
// 									Contact
// 								</Link>
// 							</div>
// 						</div>
// 					)}
// 				</Transition>
// 			</nav>
// 		</div>
// 	);
// }

// export default Navbar;
 "use client"
 import Image from 'next/image';
 import Link from 'next/link';
 import { useState } from 'react';
 import logo from "public/logo.jpg"
 function NavBar() {
   const [navbar, setNavbar] = useState(false);
   return (
	 <div>
	   <nav className="w-full  fixed top-0 left-0 right-0 z-10 h-20 shadow-xl bg-transparent ">
		 <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
		   <div>
			 <div className="flex items-center justify-between py-3 md:py-5 md:block">
			   {/* LOGO */}
			   <Link href="/">
			                  <Image
              src={logo}
              alt="Logo"
              width="50"
              height="55"
              className="cursor-pointer"
              priority
              />
			   </Link>
			   {/* HAMBURGER BUTTON FOR MOBILE */}
			   <div className="md:hidden">
				 <button
				   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
				   onClick={() => setNavbar(!navbar)}
				 >
				   {navbar ? (
					 <Image src="/close.svg" width={30} height={30} alt="logo" />
				   ) : (
					 <Image
					   src="/hamburger-menu.svg"
					   width={30}
					   height={30}
					   alt="logo"
					   className="focus:border-none active:border-none"
					 />
				   )}
				 </button>
			   </div>
			 </div>
		   </div>
		   <div>
			 <div
			   className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
				 navbar ? 'p-12 md:p-0 block' : 'hidden'
			   }`}
			 >
			   <ul className="h-screen md:h-auto items-center justify-center md:flex ">
				 <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
				   <Link href="#about" onClick={() => setNavbar(!navbar)}>
					 AboutUs
				   </Link>
				 </li>
				 <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
				   <Link href="#services" onClick={() => setNavbar(!navbar)}>
					 Services
				   </Link>
				 </li>
				 <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
				   <Link href="#contactus" onClick={() => setNavbar(!navbar)}>
					 ContactUs
				   </Link>
				 </li>
				 <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
				   <Link href="#dashboard" onClick={() => setNavbar(!navbar)}>
					 Dashboard
				   </Link>
				 </li>
			   </ul>
			 </div>
		   </div>
		 </div>
	   </nav>
	 </div>
   );
 }
 
 export default NavBar;
