"use client"
import React from 'react'
import { Menu, X } from 'lucide-react'

function ExamBank({ onExamClose }) {
  return (
    <div className='absolute top-0 left-0 w-full h-[85vh] rounded-xl z-[100] flex items-center justify-center bg-[#47474738]'>
        <div className='w-[610px] h-[410px] max-md:w-full max-md:px-2 rounded-xl bg-white py-4 px-10 relative shadow-md'>
            <a href="/Home" onClick={onExamClose} className='absolute top-4 right-4'><X /></a>
            <h1 className='text-center font-bold'>Add to exam bank</h1>
            <p>Topic：</p>
            <p>Semiotics-Origin of Subjective Consciousness</p>
            <div className='mt-4'>
                <div className='flex w-full justify-between'>
                    <p>Category：</p>
                    <a href="#" className='text-[#3930FF]'>+ New category</a>
                </div>
                <select name="category-select" id="category-select" className='p-1 border-[1px] border-[#3930FF] rounded-md mt-2'>
                    <option value="Political economics">Political economics</option>
                </select>
            </div>
            <div className='mt-4'>
                <div className='flex w-full justify-between'>
                    <p>Exam material:</p>
                    <a href="#" className='text-[#3930FF]'>+ New file</a>
                </div>
                <select name="category-select" id="category-select" className='p-1 border-[1px] border-[#3930FF] rounded-md mt-2'>
                    <option value="Semiotics_2.pdf">Semiotics_2.pdf</option>
                </select>
            </div>
            <div className='mt-10 flex items-center justify-center'>
                <button className='py-1 px-[50px] rounded-full text-white bg-[#3930FF]'>Ok</button>
            </div>
        </div>
    </div>
  )
}

export default ExamBank