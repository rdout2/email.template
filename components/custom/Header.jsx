import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Just_Another_Hand } from 'next/font/google'

function Header() {
  return (
   <div className= "flex justify-between items-center p-4 shadow-sm  px-10">
   
        <Image src={'/logo.svg'} alt='loogo' width={180} height={140}/>
    
    <div>
        <Button> Get Started</Button>
    </div>
   </div>
    
  )
}

export default Header
