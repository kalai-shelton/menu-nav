import React from 'react'

export const ProfileImg = ({imgSrc}) => {
  return (
    <div className='w-40 h-40 rounded-full bg-[#6F4E37] flex '>
       <img className="h-36 w-36 rounded-full self-end bg-gray-200 ml-2"src={imgSrc}/>
      </div>
  )
}