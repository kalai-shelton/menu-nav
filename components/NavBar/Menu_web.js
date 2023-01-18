import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Menu_mob } from './Menu_mob'

const Menu_web = ({ menuItems }) => {
  const [showMenu, setShowMenu] = useState(false)
  const { asPath } = useRouter();
  const router = useRouter();
  const Page = asPath == '/' ? 'home-page' : '';
  return (
    <div className='fixed w-screen'>
      <div className={`w-full flex justify-center ${Page == 'home-page' ? "bg-[#CD853F] bg-opacity-30 md:bg-gray-200 md:bg-opacity-10" : "bg-amber-800"} relative shadow-lg`}>
        <div className='container flex p-5 justify-between items-center'>
          <div className='w-1/4'>
            <div className='w-32  text-5xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-amber-800 to-white cursor-pointer' onClick={() => { router.push("/") }}>LOGO</div>
          </div>

          <div className='w-3/4 hidden md:flex gap-x-10 justify-end'>

            {menuItems?.map((mi) =>
              <Link className=' text-lg font-semibold text-white hover:underline hover:underline-offset-8 hover:decoration-amber-800 hover:decoration-4 ' href={mi?.route}>
                {mi?.name}
              </Link>
            )}

          </div>
          <div className='w-3/4 flex md:hidden justify-end'>
            <button className='p-3 rounded-md bg-opacity-30 bg-white bg text-white' onClick={() => setShowMenu(!showMenu)} >
              <svg viewBox="0 0 100 80" width="22" height="22" fill="white">
                <rect width="100" height="12"></rect>
                <rect y="30" width="100" height="12"></rect>
                <rect y="60" width="100" height="12"></rect>
              </svg>
            </button>
          </div>

        </div>
        {showMenu ? <div className='absolute z-20 top-24 w-full'> <Menu_mob menuItems={menuItems} /></div> : null}

      </div>
    </div>
  )
}

export default Menu_web
