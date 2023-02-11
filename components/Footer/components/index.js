import Link from 'next/link'
import React from 'react'
import footerdata from '../data/footerLinks_data'
// import {MdFacebook} from 'react-icons/md'


export const Footer = ({ bgColor }) => {
    return (
        <div className={`h-auto ${bgColor} `}>
            <div className='container mx-auto  px-5 lg:px-0 text-white'>
                <div className=' pt-8 pb-5 gap-x-8 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4  items-center lg:items-start'>
                    <div className=' flex flex-col gap-y-5'>
                        <div className='w-32  text-5xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-amber-800 to-white cursor-pointer' onClick={() => { router.push("/") }}>LOGO</div>
                        {footerdata?.content ?
                            <div className='font-medium'> {footerdata?.content}</div>
                            : null}
                    </div>
                    {footerdata?.quickLinks1?.length ?
                        <div className=' flex flex-col gap-y-2'>
                            <div className='font-medium text-lg pb-2'>Quick Links 1</div>
                            {footerdata?.quickLinks1?.map((ql) =>
                                <Link href={ql?.route}>{ql?.name}</Link>
                            )}
                        </div>
                        : null}
                    {footerdata?.quickLinks2?.length ?
                        <div className=' flex flex-col gap-y-2'>
                            <div className='font-medium text-lg pb-2'>Quick Links 2</div>
                            {footerdata?.quickLinks2.map((ql) =>
                                <Link href={ql?.route}>{ql?.name}</Link>
                            )}

                        </div>
                        : null}
                    {footerdata?.Contact_List?.length || footerdata?.questions?.length ?
                        <div className=' flex flex-col gap-y-2'>
                            {footerdata?.Contact_List?.length ?
                                <>
                                    <div className='font-medium text-lg pb-2'>Contact Us</div>
                                    {footerdata?.Contact_List?.map((cl) =>
                                        <div className='flex'>
                                            <div>{cl?.name}</div>
                                            <Link href="/">:{cl?.contactNo}</Link>
                                        </div>

                                    )}
                                </> : null}
                            {footerdata?.questions?.length ?
                                <>
                                    <div className='font-medium text-lg pt-5 pb-2'>Have any questions ?</div>
                                    {footerdata?.questions?.map((cl) =>
                                        <div className='flex'>
                                            <div>{cl?.name}</div>
                                            <Link href="/">:{cl?.contactNo}</Link>
                                        </div>

                                    )}
                                </> : null}

                            {footerdata?.social_media?.length ?
                                <div className='pt-5 flex gap-x-2'>
                                    {footerdata?.social_media?.map((sm) =>
                                        <>
                                            {sm?.logo}
                                        </>
                                    )}
                                </div>
                                : null}
                        </div>
                        : null}
                </div>
                <div className='py-4 text-xs w-full'>
                    Copyright © 2023 Inarvo solutions <span> | Privacy policy</span><span> | Terms & Conditions</span>
                </div>

            </div>
        </div>
    )
}

