import Image from 'next/image';
import React,{useState} from 'react'
import { Client_List } from '../components/Client_list';
import { Content_section } from '../components/Content/components';
import { Footer } from '../components/Footer/components';
import { Hero_bg } from '../components/Home_hero/components/Hero_bg';
import { Testimonials } from '../components/Testimonials/components';

export default function Home() {
  return (
   <div className=''>
    {/* //type can be - "image" / "slider" */}
   <Hero_bg type="slider"/> 
   <Content_section/>
   <Client_List/>
   <Testimonials/>
   <Footer bgColor="bg-gray-700"/>
   </div>
  )
}


