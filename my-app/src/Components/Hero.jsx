import React from 'react'
import hero from '../images/image-hero-desktop.png'
import databiz from '../images/client-databiz.svg'
import audiophile from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'
export const Hero = () => {
  return (
    <div className='flex flex-row  justify-center items-center m-6 '>
     <div className='w-9/12 mx-10  ml-24'>
         <div className='flex flex-col m-5 p-5 justify-between w-8/12  ' >
         <h1 className='text-6xl font-bold mb-10'>Make <br></br> remote work </h1>
         <p className='font-medium text-lg text-gray-400'> Get your team in sync .no matter your location. Streamline processes. create team rituals. and watch prodactivity soar</p>
         </div>
         <button className=' bg-black border-2 rounded-xl font-medium px-5 py-2 mx-8  m-2 cursor-pointer text-white hover:text-black  hover:border-black hover:bg-white '>Learn more</button>
         <div className='flex flex-row  mt-14 justify-between m-5 w-8/12'>
             <img src={databiz} alt="databiz"  className=' h-5 m-2'/>
             <img src={audiophile} alt="audiophile"  className=' h-5 m-2'/>
             <img src={meet} alt="meet"  className=' h-5 m-2'/>
             <img src={maker} alt="maker"  className=' h-5 m-2'/>
         </div>
     </div >
     <div className=''>
     <img src={hero} alt="hero" className='w-7/12 ml-24 '/>
    </div>
    </div>
  )
}
