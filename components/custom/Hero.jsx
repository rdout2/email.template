import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 flex flex-col items-center mt-24' >
       <h2 className='font-extrabold text-5xl text-center'>
        AI Powered <span className='text-primary'>  Email Templeate</span>
       </h2>
       <p className= ' text-center mt-4'>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
       </p>
       <div className='flex gap-5 mt-10'>
       <Button variant= "outline"> Try Demo</Button>
       <Button> Get Statted</Button>
      
       </div>
       <Image src={'/landing.png'} alt='landing' width={1000} height={800} className='mt-12 rounded-xl' />
    </div>
  )
}
