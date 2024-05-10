"use client"
import React from 'react'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Menu, X } from 'lucide-react'

function Quiz({ onClose  }) {
  return (
    <div className='absolute top-0 left-0 w-full h-[85vh] rounded-xl z-[100] flex items-center justify-center bg-[#47474738]'>
        <div className='w-[610px] h-[410px] max-md:w-full max-md:px-2 rounded-xl bg-white py-4 px-10 relative shadow-md'>
            <a href="#" onClick={onClose} className='absolute top-4 right-4'><X /></a>
            <h1 className='text-center font-bold'>Specify the type of question:</h1>
            <div className='w-full h-auto flex items-center justify-between mt-4'>
                <div className="bg-[url('/Rectangle1.png')] cursor-pointer w-[240px] h-[115px] max-md:w-[190px] rounded-xl flex items-center justify-center text-white font-bold">
                    Multiple choices
                </div>
                <div className="bg-[url('/Rectangle2.png')] cursor-pointer w-[240px] h-[115px] max-md:w-[190px] rounded-xl flex items-center justify-center text-[#fff] font-bold">
                    Short answers
                </div>
            </div>
            <div className='flex justify-between items-center mt-5 '>
                <h1 className='font-bold'>Number of questions</h1>
                <h1 className='font-bold'></h1>
            </div>
            <Slider defaultValue={[15]} max={20} step={1} className="mt-3"/>
            <h1 className='mt-2'>Timer ?</h1>
            <form className='flex items-center gap-5'>
                <div className='flex items-center gap-1'>
                    <input type="checkbox" name="Yes" id="Yes" className='w-4 h-4'/>
                    <label htmlFor="Yes" className='text-[16px]'>Yes</label>
                </div>
                <div className='flex items-center gap-1'>
                    <input type="checkbox" name="No" id="No" className='w-4 h-4'/>
                    <label htmlFor="No" className='text-[16px]'>No</label>
                </div>
            </form>
            <div className='mt-10 flex items-center justify-center'>
                <button className='py-1 px-[50px] rounded-full text-white bg-[#3930FF]'>Ok</button>
            </div>
        </div>
    </div>
  )
}

export default Quiz