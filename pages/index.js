import React,{useState} from 'react'
import { SignUpPage } from '../components/Login/SignUpPage'
import { SignInPage } from '../components/Login/SignInPage'


export default function Home() {
    const[isSignUp, setSignUp]= useState(0)

  return (
    <div className='flex'>
    <div className='bg-gray-100 w-3/5 h-screen mt-10'>
      <img className='w-full h-full' src="sampleImages/image3.jpeg"/>
    </div>
  <div className="w-2/5 bg-white h-screen py-10 px-5">
<div className='flex flex-col mt-5'>
<div className='flex justify-center gap-x-20'>

      <button className={`${isSignUp == 0 ? "bg-green-200":"bg-white"}focus:outline-none px-5 shadow-lg py-1 rounded-md  text-gray-800 hover:bg-green-200 hover:text-white`} onClick={()=>{setSignUp(0)}}>SignIn</button>
      <button className={`${isSignUp == 1 ? "bg-green-200":"bg-white"}focus:outline-none px-5 shadow-lg py-1 rounded-md bg-white text-gray-800 hover:bg-green-200 hover:text-white`} onClick={()=>{setSignUp(1)}}>SignUp</button>
    </div>
    {isSignUp == 1?
    <div className='m-5'>
      <SignUpPage/>
   
    </div>
    :<SignInPage/>}
</div>
    </div>
    </div>
  )
}


