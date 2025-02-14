'use client';
import React from 'react';
import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import EmailTemplate from '@/components/custom/EmailTemplate';

function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <p className="text-center mt-10">Loading...</p>; // Affichage pendant le chargement
  }

  if (!isSignedIn) {
    return <p className="text-center mt-10">You need to sign in to access the dashboard.</p>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl">Hello, {user?.firstName}</h2>
          <Button>+ Create New Email Template</Button>
        </div>
        <EmailTemplate/>
      </div>
    </div>
  );
}

export default Dashboard;
