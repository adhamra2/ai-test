"use client"
import { Menu, User } from 'lucide-react'
import React, { useState } from 'react'

function Header() {

  
  return (
    <div className='w-full h-[70px] bg-white flex items-center justify-between px-[7%] max-md:px-[2%] absolute top-0 left-0'>
        <a href='/' className='text-[#0B00FF] text-[30px] font-bold max-md:text-[22px]'>Chat<span className='text-[#FF9466]'>Exam</span>.AI</a>
        <div className='flex items-center gap-4 max-xl:hidden'>
            <a href="/Home"  className='py-2 px-5 bg-[#FF9466] text-white  rounded-full'>Home</a>
            <a href="#" className='py-2 px-5  rounded-full'>My quizzes</a>
            <a href="/Launch-competition" className='py-2 px-5  rounded-full'>Launch competition</a>
            <a href="/Join-competition" className='py-2 px-5  rounded-full'>Join competition</a>
        </div>
        <div className='flex items-center gap-3'>
            <a href="/Account" className='flex gap-3 bg-[#362EE2] text-white py-2 px-4 rounded-md rounded-bl max-md:hidden'><User />Account</a>
            <a href="#"><Menu size={30} className='text-center xl:hidden'/></a>
        </div>
    </div>
  )
}

export default Header