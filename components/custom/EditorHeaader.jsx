'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Code, Monitor, Smartphone } from 'lucide-react';
import { useScreenSize } from '@/app/provider';

function EditorHeader() {
  const { screenSize, setScreenSize } = useScreenSize();
  const context = useScreenSize();
  
  if (!context) {
    return null; // ou un indicateur de chargement
  }

  return (
    <div className="p-4 shadow-sm flex justify-between items-center">
      <Image src="/logo.svg" alt="logo" width={180} height={140} priority />

      <div className="flex gap-3">
        <Button
          variant="ghost"
          className={screenSize === 'desktop' ? 'bg-purple-100 text-primary' : ''}
          onClick={() => setScreenSize('desktop')}
        >
          <Monitor className="mr-2" /> Desktop
        </Button>

        <Button
          variant="ghost"
          className={screenSize === 'mobile' ? 'bg-purple-100 text-primary' : ''}
          onClick={() => setScreenSize('mobile')}
        >
          <Smartphone className="mr-2" /> Mobile
        </Button>
      </div>

      <div className="flex gap-3">
        <Button variant="ghost" className="hover:text-primary hover:bg-purple-100">
          <Code />
        </Button>
        <Button variant="outline">Send Test Email</Button>
        <Button>Save Template</Button>
      </div>
    </div>
  );
}

export default EditorHeader;
