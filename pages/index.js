import Image from 'next/image';
import React,{useState} from 'react'
import { Client_List } from '../components/Client_list';
import { Content_section } from '../components/Content/components';
import { Footer } from '../components/Footer/components';
import { Hero_bg } from '../components/Home_hero/components/Hero_bg';
import { Testimonials } from '../components/Testimonials/components';
//datas as props
import contentData from '../components/Content/data/content';
import clientData from '../components/Client_list/data/client_data';
import testData from '../components/Testimonials/data/Testimonial_data'
import footerdata from '../components/Footer/data/footerLinks_data'

export default function Home() {
  return (
   <div className=''>
    {/* //type can be - "image" / "slider" */}
   <Hero_bg type="slider"/> 
   <Content_section  contentData={contentData}/>
   <Client_List clientData={clientData}/>
   <Testimonials testData={testData}/>
   <Footer footerdata={footerdata} bgColor="bg-gray-700"/>
   </div>
  )
}


