import React , {useState} from 'react'
import logo from '../images/logo.svg';
import todo from "../images/icon-todo.svg";
import calender from "../images/icon-calendar.svg";
import planning from "../images/icon-planning.svg";
import reminders from "../images/icon-reminders.svg";


export const NavBarMobile = () => {
    const [clicked,setClicked]=React.useState(false);
    const [clickedF,setClickedF]=React.useState(false);
    const [clickedC,setClickedC]=React.useState(false);
           
 const handleClick=()=> setClicked(!clicked);
 const handleClickF=()=> setClickedF(!clickedF);
 const handleClickC=()=> setClickedC(!clickedC);
 const closeMobileMenu=()=>setClicked(false);
  return (
    <div className='flex flex-row  justify-between  max-w-full h-1/5   bg-gray-50 text-lg p-1'>
         <div className='m-5 p-2 justify-start'>
         <img  src={logo} alt="logo"/>
      </div>
      <div  className='m-5 p-2  justify-end relative '>
      <i onClick={handleClick} className='fa-solid fa-bars text-gray-500 hover:text-black focus:text-black'></i>
      <ul className= {clicked? "flex flex-col  absolute -top-1/2 -right-3/4 z-1 bg-white p-10 h-screen ":"hidden"} >
            <div>
            <i  onClick={handleClick} className= 'fa-solid fa-xmark text-gray-500 hover:text-black focus:text-black float-right m-2 '></i>
            </div>
            <li ><a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black  flex flex-row' > Features <i onClick={handleClickF} className={clickedF?"fa-solid fa-chevron-up m-3 mx-3 text-gray-500 hover:text-black focus:text-black":"fa-solid fa-chevron-down  m-2 mx-3 text-gray-500 hover:text-black focus:text-black inline"}></i></a> 
            <ul className= {clickedF?"flex flex-col justify-between block  top-10 " :"hidden"}>
            <li className='m-1 flex flex-row '>  <img src={todo}alt='todoList' height="10" className='m-1 cursor-pointer'/><a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> TodoList </a></li>
            <li className='m-1 flex flex-row '>  <img src={calender}alt='calender' height="10" className='m-1 cursor-pointer' /><a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> Calendar </a></li>
            <li className='m-1 flex flex-row '>  <img src={reminders}alt='reminders' width="18" className='m-1 cursor-pointer'/><a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> Reminders </a></li>
            <li className='m-1 flex flex-row '>  <img src={planning}alt='planning' width="18" className='m-1 cursor-pointer'/><a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> Planning </a></li>
            </ul>
            </li>
            <li className=' m-1'> <a  className='cursor-pointer  flex  text-gray-500 hover:text-black focus:text-black' > Company <i onClick={handleClickC} className={clickedC?"fa-solid fa-chevron-up m-2 text-gray-500 hover:text-black focus:text-black":"fa-solid fa-chevron-down m-2 text-gray-500 hover:text-black focus:text-black"}></i></a> 
            <ul className= {clickedC?" flex flex-col justify-between" :"hidden"}>
            <li className='m-1 flex flex-row '> <a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> History </a></li>
            <li className='m-1 flex flex-row '>  <a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> OurTeam </a></li>
            <li className='m-1 flex flex-row '>  <a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> Blog </a></li>
            </ul>
            
             </li>
            <li className=' m-1'> <a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> Careers</a></li>
            <li className=' m-1'> <a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> About</a></li>
            <div className='px-2'>
          <button className=' px-10 py-1 m-2 cursor-pointer text-gray-500 hover:text-black focus:text-black'>Login</button>
          <button className=' border-gray-500 border-2 px-10 py-1  m-2 rounded-xl cursor-pointer text-gray-500 hover:text-black  hover:border-black focus:text-black'>Register</button>
      </div>
          </ul>
       
      </div>
    </div>
  )
}
