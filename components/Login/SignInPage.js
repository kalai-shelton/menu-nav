
import React, { useState } from 'react'
import { TextBox } from '../common/TextBox'

export const SignInPage = () => {
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)

    const handleUserName = (e) => {
        setUserName(e)
    }
    const handlePassword = (e) => {
        setPassword(e)
    }
    return (
        
        <div className='bg-white rounded-md shadow-md h-auto w-full '>
            <div className='text-lg leading-2 py-8 font-bold pl-5'>Log in</div>
            <div className='flex flex-col '>
                <div className='flex justify-center'>
                    <div className='w-4/5'>
                        <div className='flex flex-col'>
                            <div className='text-sm text-gray-800'>
                                UserName
                            </div>
                            <TextBox
                                style={"border border-gray-300 my-2 rounded-md w-full py-2"}
                                value={userName}
                                handleChange={(val) => { handleUserName(val) }} />
                        </div>


                        <div className='text-sm text-gray-800'>
                            password
                        </div>
                        <TextBox
                            style={"border border-gray-300 my-2 rounded-md w-full py-2"}
                            value={userName}
                            handleChange={(val) => { handlePassword(val) }} />
                    </div>

                </div>
            </div>
            <div className='flex justify-end'>
                <div className='text-sm text-green-400 mt-1 mb-50 mr-20'>Forget password ?</div>
            </div>
            <div className='flex justify-center my-8'>
                <button className='focus:outline-none rounded-md shadow-lg bg-green-200 hover:bg-green-400 text-white w-44 text-center'>Log in</button>
            </div>
            <div className='flex gap-x-4 py-2'>
                <input type="checkbox" className='w-6 h-6 rounded-md border border-gray-300 ' />
                <div>Keep me Loged in</div>
            </div>
        </div>
    )
}


