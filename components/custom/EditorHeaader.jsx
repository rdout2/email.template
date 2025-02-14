import React from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';
import { Code, CodeSquare } from 'lucide-react';

function EditorHeaader() {
  return (
    <div className='p-4 shadow-sm flex justify-between'>
    <Image src='/logo.svg' alt='logo' width={180} height={140} priority />
     <div>

     </div>
     <div className='flex gap-3'>
        <Button variant ="ghost"
        className ="hover:text-primary
        hover:bg-purple-100">
            <Code/>
        </Button>
        <Button variant= "outline">Send Test Email </Button>
        <Button> Save tempplate</Button>
     </div>
    </div>
  )
}

export default EditorHeaader
