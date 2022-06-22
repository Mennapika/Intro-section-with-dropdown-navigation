import { useEffect, useState } from 'react';
import { Hero } from './Components/Hero';
import { NavBar } from './Components/NavBar';
import logo from './logo.svg';
import React from 'react';
import { NavBarMobile } from './Components/NavBarMobile';
import { HeroMobile } from './Components/HeroMobile';
function App() {
 const [isMobile,setIsMobile]= useState(false);
 const handleResize=()=>{
  if(window.innerWidth<830){
    setIsMobile(true);
  }else{
    setIsMobile(false)
  }
 }

 useEffect(()=>{
  window.addEventListener('resize',handleResize);
  return()=>window
 })
 
  return (
    <div>
    {
      isMobile? <div><NavBarMobile/> <HeroMobile/></div>: <div><NavBar/> <Hero/></div>
    }
    </div>
  );
}

export default App;
