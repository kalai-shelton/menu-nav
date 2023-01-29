import Link from 'next/link'
import React from 'react'

export const Menu_mob = ({menuItems}) => {
  return (
    <div className='w-full flex justify-center bg-white bg-opacity-10 md:hidden -mt-2'>
        <div className='flex flex-col w-full text-center '>
            {menuItems?.map((mi)=>
      <Link className='py-2 bg-[#CD853F] bg-opacity-30 hover:bg-amber-800 w-full border-b border-amber-600 text-white text-lg font-semibold' href={mi?.route}>{mi?.name}</Link>
            )}

      </div>
    </div>
  ) 
}


