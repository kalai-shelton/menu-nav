import React from 'react'
import { Hero_img } from './Hero_img'
import { Hero_slider } from './Hero_slider'

export const Hero_bg = ({ type }) => {
  return (
    <>
      {type == "slider" ?
        <div className=''>
          <Hero_slider content_position={"center_middle"} />
        </div>
        : 
        <div className=''>
        <Hero_img content_position={"center_middle"} />
        </div>}
    </>
  )
}


