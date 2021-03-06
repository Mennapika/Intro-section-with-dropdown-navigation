import React , {useState} from 'react'
import logo from '../images/logo.svg';
import todo from "../images/icon-todo.svg";
import calender from "../images/icon-calendar.svg";
import planning from "../images/icon-planning.svg";
import reminders from "../images/icon-reminders.svg";


export const NavBar = () => {
    const [clicked,setClicked]=React.useState(false);
    const [clickedF,setClickedF]=React.useState(false);
    const [clickedC,setClickedC]=React.useState(false);
           
 const handleClick=()=> setClicked(!clicked);
 const handleClickF=()=> setClickedF(!clickedF);
 const handleClickC=()=> setClickedC(!clickedC);
 const closeMobileMenu=()=>setClicked(false);
  return (
    <div className='flex flex-row  justify-between  max-w-full h-1/5   bg-gray-50 text-lg p-1'>
        <div className='flex flex-row  justify-start'>
      <div className='m-5 p-2'>
         <img  src={logo} alt="logo"/>
      </div>
      <div className='px-4'>
          <ul className='flex flex-row justify-start '>
            <li className='m-6 relative'><a  className='cursor-pointer text-gray-500 hover:text-black' onClick={handleClickF}> Features </a> <i onClick={handleClickF} className={clickedF?"fa-solid fa-chevron-down mx-2  text-gray-500 hover:text-black":"fa-solid fa-chevron-up mx-2 text-gray-500 hover:text-black"}></i> 
            <ul className= {clickedF?"m-4 flex flex-col justify-between bg-white w-50 rounded-xl p-3 shadow-md absolute" :"hidden"}>
            <li className='m-2 flex flex-row justify-between'>  <img src={todo}alt='todoList' height="10" className='m-1 cursor-pointer'/><a  className='cursor-pointer text-gray-500 hover:text-black' onClick={closeMobileMenu}> TodoList </a></li>
            <li className='m-2 flex flex-row justify-between'>  <img src={calender}alt='calender' height="10" className='m-1 cursor-pointer' /><a  className='cursor-pointer text-gray-500 hover:text-black' onClick={closeMobileMenu}> Calendar </a></li>
            <li className='m-2 flex flex-row justify-between'>  <img src={reminders}alt='reminders' width="18" className='m-1 cursor-pointer'/><a  className='cursor-pointer text-gray-500 hover:text-black' onClick={closeMobileMenu}> Reminders </a></li>
            <li className='m-2 flex flex-row justify-between'>  <img src={planning}alt='planning' width="18" className='m-1 cursor-pointer'/><a  className='cursor-pointer text-gray-500 hover:text-black' onClick={closeMobileMenu}> Planning </a></li>
            </ul>
            </li>
            <li className='m-6 group relative'> <a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={handleClickC} > Company</a>  <i onClick={handleClickC}  className={clickedC?"fa-solid fa-chevron-down mx-2  cursor-pointer text-gray-500 hover:text-black":"fa-solid fa-chevron-up mx-2 cursor-pointer text-gray-500 hover:text-black"}></i>
            <ul className= {clickedC?"m-4 flex flex-col justify-between bg-white w-50 rounded-xl p-5 shadow-md absolute" :"hidden"}>
            <li className='m-1 flex flex-row justify-between'> <a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> History </a></li>
            <li className='m-1 flex flex-row justify-between'>  <a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> OurTeam </a></li>
            <li className='m-1 flex flex-row justify-between'>  <a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black' onClick={closeMobileMenu}> Blog </a></li>
            </ul>
            

            </li>
            <li className='m-6'> <a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black'> Careers</a></li>
            <li className='m-6'> <a  className='cursor-pointer text-gray-500 hover:text-black focus:text-black'> About</a></li>
          </ul>
      </div>
      </div>
      <div className='px-4'>
          <button className='m-6 cursor-pointer text-gray-500 hover:text-black focus:text-black'>Login</button>
          <button className='m-6 border-gray-500 border-2 px-5 py-1 rounded-xl cursor-pointer text-gray-500 hover:text-black  hover:border-black focus:text-black'>Register</button>
      </div>
    </div>
  )
}
