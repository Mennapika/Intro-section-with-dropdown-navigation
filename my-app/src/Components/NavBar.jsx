import React from 'react'
import logo from '../images/logo.svg';
export const NavBar = () => {
  return (
    <div className='flex flex-row  justify-between  max-w-full h-3/5   bg-white text-lg p-3'>
        <div className='flex flex-row  justify-start'>
      <div className='m-5 p-2'>
         <img  src={logo} alt="logo"/>
      </div>
      <div className='px-4'>
          <ul className='flex flex-row justify-start '>
            <li className='m-6'><a  className='cursor-pointer'> Features</a> </li>
            <li className='m-6'> <a  className='cursor-pointer'> Company</a></li>
            <li className='m-6'> <a  className='cursor-pointer'> Careers</a></li>
            <li className='m-6'> <a  className='cursor-pointer'> About</a></li>
          </ul>
      </div>
      </div>
      <div className='px-4'>
          <button className='m-6 cursor-pointer'>Login</button>
          <button className='m-6 border-black border-2 px-5 py-1 rounded-xl cursor-pointer'>Register</button>
      </div>
    </div>
  )
}
