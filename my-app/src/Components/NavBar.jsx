import React from 'react'
import logo from '../images/logo.svg';
export const NavBar = () => {
  return (
    <div className='flex flex-row  justify-between max-w-full h-3/5   bg-white text-lg p-3'>
      <div className='m-4'>
         <img  src={logo} alt="logo"/>
      </div>
      <div>
          <ul className='flex flex-row justify-start '>
            <li className='m-4'>Features</li>
            <li className='m-4'>Company</li>
            <li className='m-4'>Careers</li>
            <li className='m-4'>About</li>
          </ul>
      </div>
      <div >
          <button className='m-4'>Login</button>
          <button className='m-4'>Register</button>
      </div>
    </div>
  )
}
