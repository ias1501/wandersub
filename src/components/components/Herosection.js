import Head from "next/head";
// import HeroSection from "components/HeroSection";
// import Navbar from "components/Navbar";
import React from "react";
import Link from "next/link";

export default function Herosection() {
	return (
		<>
		<div className=" min-h-screen flex justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
			 <Head>
				<title>Navigation using nextjs and tailwindcss</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			{/* <Navbar /> */}
			
			 
			<h1 className="text-center font-bold lg:text-4xl text-4xl space-y-2">WanderSub</h1>
		</div>
		<div className="p-10">
			<h2 className="font-bold text-4xl" >Misssion</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra tellus in hac habitasse platea dictumst. Ullamcorper eget nulla facilisi etiam. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Et leo duis ut diam quam nulla. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Amet cursus sit amet dictum. Aenean et tortor at risus viverra adipiscing at in. Lacus sed turpis tincidunt id aliquet risus feugiat in ante.
			</p>

		</div>
		<div className="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed">

		</div>
		<div className="min-h-screen px-8 py-16 bg-black">
			<h1 className="text-4xl pb-10 text-white">
				 UnderwaterROV...
			</h1>
            
				<div className="min-h-screen px-8 py-16">

				</div>
           <div className="grid gap-8 items-start justify-center">
			<div className="relative group">
				<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover: opacity-500 transition duration-1000 group-hover:duration-200">

				</div>

				<Link href="../pages/signin">
			<button className=" relative px-7 py-4 bg-black rounded-lg leading-none flex items-center space-x-5">
				<span className="text-gray-100 text-5xl group-hover:text-blue-500 transition duration-200">Let's start 🚀</span>

			</button>
			</Link>
			</div>
		   </div>
			{/* <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
				<h1 className="text-center">Let's start 🚀 </h1>
			</div> */}
            
		</div>
		<div className="bg-sea2 min-h-screen bg-no-repeat bg-center bg-fixed bg-cover">

		</div>
		</>
	);
};





// import React from "react";
// import Link from "next/link";

// function HeroSection() {
// 	return (
       
  

// 		<div className="bg-gradient-to-l md:bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center flex-col  pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
// 			<h1 className="text-gray-900 pb-10">
// 				 UnderwaterROV<span className="text-blue-500">Robust</span> &{" "}
// 				<span className="text-blue-400"></span>
// 			</h1>
//             <Link href="../auth/signin">
           
// 			<div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
// 				<h1 className="text-center">Let's start 🚀 </h1>
// 			</div>
//             </Link>
// 		</div>
    
// 	);
// }

// export default HeroSection;