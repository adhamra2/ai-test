"use client"
import ExamBank from '@/components/ExamBank';
import Quiz from '@/components/Quiz'
import { File, Upload } from 'lucide-react'
import React, { useState } from 'react'
import { useRef } from 'react';

function AccountPage({handleFile}) {
  return (
    <div className='w-full h-[85vh] max-md:h-auto p-6 max-md:p-3 bg-[#e5e5eb] rounded-xl relative'>
        <h1 className='text-xl font-semibold mb-2'>User identity verification (Pro user only)</h1>
        <div className='w-full h-auto bg-white rounded-xl flex items-center gap-5 p-3'>
            <div className='w-[60px] h-[60px] bg-black rounded-full'>

            </div>
            <div>
                <div className='flex gap-3'>
                    <h1 className='font-bold'>nanoapple</h1>
                    <button className='p-1 px-2 bg-[#5E5BFF] text-[12px] text-white font-bold rounded-md'>Verifed</button>
                </div>
                <h1 className='font-semibold'>Verified user（*****wn）</h1>
            </div>
        </div>
        <h1 className='text-xl font-semibold mt-4 mb-2'>ID information:</h1>
        <div className='w-full h-auto bg-white rounded-xl flex flex-wrap gap-4 p-3'>
            <div className='flex items-center gap-1'>
                <h1>Name :</h1>
                <input type="text" placeholder="***wn" className='w-[100px] py-1 px-2 bg-[#F4F4F4] rounded-md'/>
            </div>
            <div className='flex items-center gap-1'>
                <h1>Sex :</h1>
                <select  className='w-[70px] p-1 bg-[#F4F4F4] rounded-md font-bold'>
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>
            </div>
            <div className='flex items-center gap-1'>
                <h1>Language :</h1>
                <input type="text" placeholder="English" className='w-[100px] py-1 px-2 bg-[#F4F4F4] rounded-md'/>
            </div>
            <div className='flex items-center gap-1'>
                <h1>ID :</h1>
                <input type="text" placeholder="Passport" className='w-[100px] py-1 px-2 bg-[#F4F4F4] rounded-md'/>
            </div>
            <div className='flex items-center gap-1'>
                <h1>ID number:</h1>
                <input type="number" placeholder="1****************3" className='w-[250px] max-md:w-full py-1 px-2 bg-[#F4F4F4] rounded-md'/>
            </div> <br />
            <div className='flex items-center gap-1'>
                <h1>Valid from :</h1>
                <select  className='w-[140px] p-1 bg-[#F4F4F4] rounded-md font-bold'>
                    <option value="2020-08-23">2020-08-23</option>
                </select>
            </div>
            <div className='flex items-center gap-1'>
                <h1>Valid until :</h1>
                <select  className='w-[140px] p-1 bg-[#F4F4F4] rounded-md font-bold'>
                    <option value="2030-008-23">2030-008-23</option>
                </select>
            </div>
        </div>
        <h1 className='text-xl font-semibold mt-4 mb-2'>Other accreditations</h1>
        <div className='w-full h-auto bg-white rounded-xl flex flex-wrap gap-4 p-3'>
            <div className='flex items-center gap-1'>
                <h1>Profession :</h1>
                <select  className='w-[100px] p-1 bg-[#F4F4F4] rounded-md font-bold'>
                    <option value="IT">IT</option>
                </select>
            </div>
            <div className='flex items-center gap-1'>
                <h1>Certification :</h1>
                <input type="text" placeholder="Cisco CCNP" className='w-[300px] max-md:w-[140px] py-1 px-2 bg-[#F4F4F4] rounded-md'/>
            </div>
            <br />
            <div className='flex items-center gap-1'>
                <h1>Cert number :</h1>
                <input type="number" placeholder="133******33" className='w-[250px] max-md:w-full py-1 px-2 bg-[#F4F4F4] rounded-md'/>
            </div>
        </div>
        <div className='mt-10 flex items-center justify-center'>
                <button className='py-1 px-[50px] rounded-full text-white bg-[#3930FF]'>Save</button>
        </div>
    </div>
  )
}

export default AccountPage