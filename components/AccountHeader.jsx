import { Home, Menu, User, Users } from 'lucide-react'
import React from 'react'

function AccountHeader() {
  return (
    <div className='w-full h-[70px] bg-white flex items-center justify-between px-[7%] max-md:px-[2%] absolute top-0 left-0'>
        <a href='/' className='text-[#0B00FF] text-[30px] font-bold'>Chat<span className='text-[#FF9466]'>Exam</span>.AI</a>
        <h1 className='flex gap-2 text-xl max-md:hidden'><Users />Account management</h1>
        <div className='flex items-center gap-3'>
            <a href="/Home" className='flex gap-3 bg-[#362EE2] text-white py-2 px-4 rounded-md rounded-bl max-md:hidden'><Home />Home</a>
            <a href="#"><Menu size={30} className='text-center xl:hidden'/></a>
        </div>
    </div>
  )
}

export default AccountHeader