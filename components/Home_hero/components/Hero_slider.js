import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageItems from "./Image_Data"
import Image from 'next/image';
import { Content_section } from './Content_section';
export const Hero_slider = ({content_position}) => {
    const content_positions = {
        left_top :"grid place-content-start",
        left_middle:"flex items-center",
        left_bottom:"flex items-end",
        center_top:"grid content-start",
        center_middle:"grid content-center",
        center_bottom:"grid content-end",
        right_top:"flex flex-row-reverse items-start text-right",
        right_middle:"flex flex-row-reverse items-center text-right",
        right_bottom:"flex flex-row-reverse items-end text-right",
    }
    return (
        <div className=' bg-gradient-to-r from-amber-800 to-white '>
            <Carousel infiniteLoop
                useKeyboardArrows
                autoPlay
                showThumbs={false}
            >
                {imageItems?.map((img, id) =>
                    <div className='h-70vh lg:h-100vh w-full relative' key={id}>
                        <Image fill src={img?.src} />
                        <div className={`absolute inset-24 ${content_positions[content_position]}`}>
                           
                         <Content_section/>
                       
                        </div>
                    </div>
                )}


            </Carousel>
        </div>
    )
}