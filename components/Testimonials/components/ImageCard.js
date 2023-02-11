import React from 'react'
import { ProfileImg } from './ProfileImg'



export const ImageCard = ({ imgSrc,title,content}) => {
  return (
    <div className='w-72 h-auto relative bg-white hover:shadow-2xl rounded-md '>
      <div className='absolute -top-20 left-14'>
        <ProfileImg imgSrc={imgSrc?imgSrc : "images/user.png"} />
      </div>
      <div className='text-center mt-24 p-5'>
        {title &&
        <div className='text-lg font-medium'>{title}</div> 
}
        <div className='text-base pt-4'>{content}</div>
        <div className='text-primary pt-8'>more</div>
      </div>
    </div>
  )
}