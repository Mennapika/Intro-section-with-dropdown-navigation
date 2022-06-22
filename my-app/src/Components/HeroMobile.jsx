import React from 'react'
import hero from '../images/image-hero-mobile.png'
import databiz from '../images/client-databiz.svg'
import audiophile from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'

export const HeroMobile = () => {
  return (
    <div className='flex flex-col  justify-center  '>
    <div className=' items-center mb-4'>
     <img src={hero} alt="hero" className='w-12/12  '/>
    </div>
     <div className='flex flex-col'>
        <div className='m-auto text-center'>
        <h1 className='text-4xl font-bold mb-3 '>Make remote work </h1>
         <p className='font-medium text-base text-gray-500 w-12/12 text-center'> Get your team in sync .no matter your location. Streamline processes. create team rituals. and watch prodactivity soar</p>
         <button className=' bg-black border-2 rounded-xl font-medium px-3 py-3  m-2 cursor-pointer text-white hover:text-black  hover:border-black hover:bg-white '>Learn more</button>
        </div>
        <div className='flex flex-row  justify-between m-3  '>
             <img src={databiz} alt="databiz"  className=' h-4 m-1'/>
             <img src={audiophile} alt="audiophile"  className=' h-4 m-1'/>
             <img src={meet} alt="meet"  className=' h-4 m-1'/>
             <img src={maker} alt="maker"  className=' h-4 m-1'/>
         </div>
     </div >
    
     
    </div>
  )
}
