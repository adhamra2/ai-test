import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function LoginPage() {
  return (
    <div className="w-full min-h-[100vh] max-md:h-auto px-[10%] max-md:px-[3%] max-md:pb-3 bg-[url('/loginBg.png')] bg-cover flex items-start justify-between gap-10 pt-[200px] flex-wrap max-md:pt-[60px]">
        <div className='max-w-[440px]'>
            <h1 href='/' className='text-[#0B00FF] text-[40px] font-bold flex items-center max-md:text-[30px]'><img src="/pen.png" alt="pen" className='mr-7 max-md:hidden'/>Chat<span className='text-[#FF9466]'>Exam</span>.AI <img src="/PATTERN.png" alt="PATTERN" className='ml-7 max-md:w-11 max-md:h-11'/></h1>
            <p className='text-[26px] max-md:text-[21px] font-bold'>Experience the <a href="#" className='text-[#3930FF] '>AI-driven </a>self-service mock exam platform for <a href="#" className='text-[#3930FF]'>FREE</a>. From exam phobia,  to exam euphoria.</p>
            <div className='pt-5'>
                <a href='/' className='py-2 px-4 rounded-full text-white bg-[#3930FF] border-[1px] border-[#3930FF]'>Get Started</a>
                <div className='flex items-center gap-3 mt-4'>
                    <a href="#" className='p-2.5 border-[1px] rounded-full'><Facebook /></a>
                    <a href="#" className='p-2.5 border-[1px] rounded-full'><Instagram /></a>
                    <a href="#" className='p-2.5 border-[1px] rounded-full'><Twitter /></a>

                </div>
            </div>
        </div>
        <div className='w-[580px] h-[470px] rounded-xl bg-white shadow py-5 px-10 relative max-md:py-2 max-md:px-5 max-md:w-full max-md:h-[450px]'>
            <h1 className='text-center text-2xl font-semibold text-[#3930FF]'>Sign in</h1>
            <h1 className='text-[#3930FF] text-md font-semibold mt-5'>Mobile sign in</h1>
            <form className='mt-3'>
                <div className='flex justify-between max-md:flex-wrap'>
                    <input type="text" placeholder='Mobile Number' className='py-2 px-3 w-[360px] bg-[#F2F2FF] rounded-full'/>
                    <button className='py-2 px-4 rounded-full text-white bg-[#3930FF] max-md:mt-3'>Get code</button>
                </div>
                <input type="text" placeholder='Code' className='py-2 px-3 w-[360px] max-md:w-auto bg-[#F2F2FF] rounded-full mt-5 mb-3'/> <br />
                <a href="#" className=''>Dont have an account ? <span className='text-[#3930FF] underline'>Sign Up</span></a>
                <div className='flex items-center gap-3 mt-auto absolute bottom-[50px] max-md:flex-wrap  max-md:bottom-4'>
                    <button className='py-2 px-4 rounded-full text-white bg-[#3930FF] border-[1px] border-[#3930FF]'>Sign in</button>
                    <button className='py-2 px-4 rounded-full text-black flex gap-2 items-center border-[1px] border-[#E3E3EA]'><img src="/google.png" alt="google" />Google</button>
                    <button className='py-2 px-4 rounded-full text-black flex gap-2 items-center border-[1px] border-[#E3E3EA]'><img src="/facebook.png" alt="facebook" />Facebook</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage