"use client"
import { Slider } from '@/components/ui/slider';
import { PenLine, X } from 'lucide-react';
import React, { useState } from 'react';

function LaunchPage() {
    const [activeTab, setActiveTab] = useState('choose'); // Default active tab is 'choose'

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Define dynamic styles for the card
    const cardStyle = {
        width: activeTab === 'choose' ? '570px' : '100%',
        height: activeTab === 'choose' ? '400px' : '100%'
    };

    return (
        <div className="w-full h-screen max-h-[85vh] flex justify-center items-center max-md:justify-center max-md:items-start bg-[#efe8fa] max-md:bg-white rounded-xl">
                <img src="/capa2.png" alt="" className='absolute bottom-12 left-12 w-[200px] h-[200px] md:hidden '/>
                <img src="/capa1.png" alt="" className='absolute bottom-14 right-6 w-[200px] h-[200px] md:hidden abImage'/>
            <div className='z-10 bg-white rounded-md relative p-5 max-md:p-0 ' style={cardStyle}>
                <img src="/capa2.png" alt="" className='absolute bottom-12 left-4 w-[200px] h-[200px] max-md:hidden'/>
                <img src="/capa1.png" alt="" className='absolute bottom-14 right-4 w-[200px] h-[200px] max-md:hidden '/>
                <div className='flex items-center justify-center gap-2'>
                    <a className={activeTab === 'choose' ? 'font-bold flex gap-2 items-center' : ''} onClick={() => handleTabClick('choose')}>
                       Choose
                    </a>
                    <span className='mb-1'>................</span>
                    <a className={activeTab === 'publish' ? 'font-bold' : ''} onClick={() => handleTabClick('publish')}>Publish</a>
                    <span className='mb-1'>................</span>
                    <a className={activeTab === 'prize' ? 'font-bold' : ''} onClick={() => handleTabClick('prize')}>Prize</a>
                </div>
                <div className=''>
                    {/* Render content based on active tab */}
                    {activeTab === 'choose' && (
                        <div className='flex flex-col gap-3 items-center justify-center mt-4'>
                            <div className="bg-[#FF763C] cursor-pointer w-[240px] h-[60px]  rounded-xl flex items-center justify-center text-white font-bold">
                                Choose from exam bank
                            </div>
                            <div className="bg-[#C6C6E1] z-1 cursor-pointer w-[240px] h-[60px]  rounded-xl flex items-center justify-center text-[#fff] font-bold">
                                Edit your own questions
                            </div>
                            <div className='mt-4 flex items-center justify-center'>
                                <button onClick={() => handleTabClick('publish')} className='py-1 px-[50px] rounded-full text-white bg-[#3930FF]'>Next</button>
                            </div>
                        </div>
                    )}
                    {activeTab === 'publish' && (
                        <div>
                            <h1 className='mt-10 font-bold text-xl flex gap-2'>Term 2 mock exam questions<PenLine color='#3930FF'/></h1>
                            <div className='w-full h-auto p-2 bg-[#d3d3d3] flex justify-between items-center rounded-md mt-2'>
                                <h1>1. explain and elaborate on the theory of surplus value in political economy.</h1>
                                <a href="#"><X /></a>
                            </div>
                            <div className='w-full h-auto p-2 bg-[#d3d3d3] flex justify-between items-center rounded-md mt-2'>
                                <h1>2. Discuss the main differences between a constitutional monarchy and a capitalist market economy system, and analyze their respective advantages and disadvantages.</h1>
                                <a href="#"><X /></a>
                            </div>
                            <div className='flex items-center gap-3 mt-4 text-[#3930FF]'>
                                <a href="#">+ from exam bank</a>
                                <a href="#">+ new questions</a>
                            </div>
                            <div className='flex items-center justify-center '>
                                <a onClick={() => handleTabClick('prize')} href="#" className='max-md:mt-3 bg-black py-2 px-[60px] rounded-full shadow-xl text-[#fff]'>Next</a>
                            </div>
                        </div>
                    )}
                    {activeTab === 'prize' && (
                        <div className='flex items-center justify-center w-full h-[85vh]'>
                            <div className='w-[610px] h-[410px] max-md:w-full max-md:px-2 rounded-xl bg-white py-4 px-10 relative shadow-md'>
                                    <a href="#"  className='absolute top-4 right-4'><X /></a>
                                    <h1 className='text-center font-bold flex items-center justify-center gap-1'><img src="/capa3.png" alt="" className='w-[30px] h-[30px]'/>Set Prize</h1>
                                    <div className='flex justify-between items-center mt-5 '>
                                        <h1 className='font-bold'>Prize money</h1>
                                        <h1 className='font-bold'></h1>
                                    </div>
                                    <div className='flex items-center justify-between font-bold text-md '>
                                        <h1>0</h1>
                                        <h1>10,000</h1>
                                    </div>
                                    <Slider defaultValue={[0]} max={10000}  step={1} className="mt-3"/>
                                    <div className='mt-10 flex items-center justify-center'>
                                        <button className='py-1 px-[50px] rounded-full text-white bg-[#3930FF]'>Ok</button>
                                    </div>
                                </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LaunchPage;
