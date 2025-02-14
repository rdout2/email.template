import Header from "@/components/custom/header";
import Hero from "@/components/custom/Hero";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'



import Image from "next/image";



export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
   </div>
  );
}
