import Image from 'next/image';
import React,{useState} from 'react'
import { Hero_bg } from '../components/Home_hero/components/Hero_bg';

export default function Home() {
  return (
   <div className=''>
    {/* //type cane be - "image" / "slider" */}
   <Hero_bg type="slider"/> 
   </div>
  )
}


