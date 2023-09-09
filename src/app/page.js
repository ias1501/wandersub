// pages/index.js
"use client"
import { useState, useEffect } from 'react';
import Submarine from '../components/components/submarine';
import NavBar from '@/components/components/Navbar';
// import Hero from '@/components/components/Herosection';
import HeroSection from '@/components/components/Herosection';
import Footer from '@/components/components/Footer';
export default function Home() {
  
  return (
    <div>
      <NavBar/>
   
      <HeroSection/>
    <Footer/>
    </div>
  );
}