"use client"
import ExamBank from '@/components/ExamBank';
import Quiz from '@/components/Quiz'
import { File, Upload } from 'lucide-react'
import React, { useState } from 'react'
import { useRef } from 'react';

function HomePage2({handleFile}) {
  const [quizOpen, setQuizOpen] = useState(false);

  const toggleQuiz = () => {
    setQuizOpen(!quizOpen);
  };

  const [examBankOpen, setExamBankOpen] = useState(false);

  const toggleExamBank = () => {
    setExamBankOpen(!quizOpen);
  };

  const hiddenFileInput = useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
  return (
    <div className='w-full h-[85vh] p-[10px] bg-[#e5e5eb] rounded-xl relative'>
        <div className='flex w-full h-full items-center justify-center gap-2 '>
            <button onClick={handleClick} className='w-[640px] h-[430px] bg-white rounded-xl max-md:w-full p-5 text-center'>
                <img src="/OBJECTS.png" alt="" className='w-[310px] h-[150px] mx-auto'/>
                <h1 className='mt-3 text-center text-xl text-[#3930FF]'>Click to upload documents or <br /> exam materials</h1>
                <p className='mt-10'>Each file must be less than 200 pages and less than 20MB</p>
            </button>
        </div>
        <div className='flex items-center justify-center gap-3 w-full absolute bottom-3 right-[1px] max-md:flex-wrap max-md:justify-normal max-md:bottom-7 max-md:p-4 max-md:rounded-xl max-md:bg-[#e5e5eb]'>
            <input type="text" placeholder='Anything you’d like to ask?' className='py-2 px-3 w-[790px] rounded-full shadow-xl md:max-lg:w-[570px] max-md:w-full' />
            <div className='flex gap-3 items-center'>
                <a href="#" onClick={() => setQuizOpen(!quizOpen)} className='py-2 px-6 bg-[#3930FF] border-[1px] border-[#3930FF] rounded-full text-white'>Quiz</a>
                <a href="#" className='py-2 px-6 bg-[#fff] border-[1px] border-[#3930FF] rounded-full text-[#3930FF]'>Ask</a>
                <button onClick={handleClick} title='Upload Documents Or Exam Materials' href="#" className='py-2 px-2 bg-[#fff] border-[1px] border-[#3930FF] rounded-full text-[#3930FF]'><Upload /></button>
            </div>
        </div>
        <div className='absolute top-5 right-10 max-md:right-5 max-md:gap-2 flex gap-5 bg-[#e5e5eb] p-1 rounded-md'>
            <a href="#" onClick={() => setExamBankOpen(!examBankOpen)} className='font-bold text-[#3930FF] '>+ Exam Bank</a>
            <a href="#" className='font-bold text-[#3930FF] '>+ Ai Clinic</a>
        </div>
        {quizOpen && <Quiz onClose={toggleQuiz} />}
        {examBankOpen && <ExamBank onExamClose={toggleExamBank} />}
        <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{display: 'none'}} // Make the file input element invisible
      />
    </div>
  )
}

export default HomePage2