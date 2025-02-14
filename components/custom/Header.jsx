'use client';  // Ce fichier est un composant client

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

function Header() {
  return (
    <div className='flex justify-between items-center p-4 shadow-sm px-10'>
      <Image src={'/logo.svg'} alt='logo' width={180} height={140} priority />

      <div className="flex items-center space-x-4">
        {/* Affiche le bouton Sign In si l'utilisateur n'est pas connecté */}
        <SignedOut>
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>

        {/* Affiche le bouton Dashboard et UserButton si l'utilisateur est connecté */}
        <SignedIn>
        <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
