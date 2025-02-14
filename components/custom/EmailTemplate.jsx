'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

function EmailTemplate() {
  const [emailList, setEmailList] = useState([]); // Initialisation correcte de useState

  return (
    <div>
      <h2 className="font-bold text-xl text-primary mt-10">Workspace</h2>
      
      {emailList.length === 0 && (
        <div className= 'flex flex-col items-center mt-12'>
          <Image src="/email.png" alt="email" height={250} width={250} />
          <p className="mt-4 text-gray-600">No email templates found. Create one to get started!</p>
          <Button className='mt-10'>+Create New</Button>
        </div>
      )}
    </div>
  );
}

export default EmailTemplate;
