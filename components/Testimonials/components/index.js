import React from 'react'
import { ImageCard } from './ImageCard'
import testData from '../data/Testimonial_data'

export const Testimonials = () => {
  return (
    <div className='bg-[#EADDCA] pb-8 pt-24'>
    <div className='flex gap-x-5 container mx-auto overflow-auto overflow-x-scroll scrollbar-hide px-5 lg:px-0 '>
   
        {testData?.map((td)=>
        <div className='w-full flex flex-col mt-20 '>
      <ImageCard imgSrc={td?.image} title={td?.name} content={td?.content} />
      </div>
        )}
    </div>
    </div>
  )
}


