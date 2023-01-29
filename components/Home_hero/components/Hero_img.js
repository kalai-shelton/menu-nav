import React from 'react'
import { Content_section } from './Content_section';
import Image from 'next/image';

export const Hero_img = ({ content_position }) => {
    const content_positions = {
        left_top: "grid place-content-start",
        left_middle: "flex items-center",
        left_bottom: "flex items-end",
        center_top: "grid content-start",
        center_middle: "grid content-center",
        center_bottom: "grid content-end",
        right_top: "flex flex-row-reverse items-start text-right",
        right_middle: "flex flex-row-reverse items-center text-right",
        right_bottom: "flex flex-row-reverse items-end text-right",
    }
    return (
        <div class="h-70vh lg:h-100vh w-full relative">
           <Image className='' fill src="/images/wall5.jpg"/>
            <div className={`absolute inset-24  ${content_positions[content_position]}`}>

                <Content_section />

            </div>
        </div>
    )
}


