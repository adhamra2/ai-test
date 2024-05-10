import React from 'react'

function StartPage() {
  return (
    <div className='w-full h-[100vh] px-[10%] max-md:px-[3%] flex justify-between gap-10 items-center flex-wrap max-2xl:pt-[100px] max-2xl:justify-center max-md:justify-center'>
        <header className='flex items-center justify-between absolute top-0 left-0 w-full px-[10%] max-md:px-[3%]'> 
            <h1 className='text-[#0B00FF] text-[30px] font-bold'>Chat<span className='text-[#FF9466]'>Exam</span>.AI</h1>
            <div className='flex items-center gap-6 mt-3 max-xl:hidden'>
                <a href="/Home" className='text-[20px] font-[600]'>How it works<img src="/Vector1.png" alt="" className='w-[70px] h-[14px] mx-auto'/></a>
                <a href="#" className='text-[20px] font-[600]'>Mock exams<img src="/Vector2.png" alt="" className='w-[70px] h-[14px] mx-auto'/></a>
                <a href="#" className='text-[20px] font-[600]'>Competitions<img src="/Vector3.png" alt="" className='w-[70px] h-[14px]  mx-auto'/></a>
            </div>
            <div className='flex items-center gap-5 login'>
                <a href="/Login" className='py-1 px-5 bg-[#3930FF] border-[1px] border-[#3930FF] text-white rounded-full'>Sign in</a>
                <a href="/Login " className='py-1 px-5 bg-[#fff] border-[1px] border-[#3930FF] text-[#0B00FF] rounded-full max-md:hidden'>Sign up</a>
            </div>
        </header>

        <div className='w-[530px] h-auto max-md:w-full  '>
            <div className='w-[530px] h-[530px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[330px] max-sm:h-[330px] max-sm:mx-auto image'>
                <img src="/hero.png" alt="hero" className='w-full h-full'/>
            </div>
            <h1 className='font-bold max-md:text-center'>Experience the AI-driven self-service mock exam platform for FREE. From exam phobia, to exam euphoria.</h1>
            <div className='flex items-center gap-5 mt-3 max-md:justify-center max-sm:gap-2'>
                <a href="#" className='bg-[#3930FF] text-white py-1 px-[60px] rounded-full max-md:px-3 max-md:py-2 font-bold '>Try mock quizzes</a>
                <a href="#" className='bg-[#FF3980] text-white py-1 px-10 rounded-full max-md:py-2 font-bold'>Surprise</a>
            </div>
        </div>
        <div className='w-auto h-[620px] flex flex-col gap-3 xl:max-2xl:flex-row'>
            <div className='flex gap-3 max-md:flex-wrap max-md:justify-center'>
                <div className='w-[320px] h-[320px] bg-[#4a42d8] rounded-xl p-10 text-white relative'>
                    <div className='text-center relative'><h1 className='text-black absolute top-3 left-[90px] font-bold'> Y3 - Y6 </h1> <img src="/cardsimage.png" alt="Cards Image" /></div>
                    <p className='mt-10'>How many meters are 3 2.8 meters connected?</p>
                    <p className='mt-5'>What is 9.954 to the nearest 10th place?</p>
                    <p className='absolute bottom-3 right-10'>Year 4 math</p>
                </div>
                <div className='w-[320px] h-[320px] bg-[#d8744a] rounded-xl p-10 text-white relative'>
                    <div className='text-center relative'><h1 className='text-black absolute top-3 left-[90px] font-bold'> Y7 - Y12 </h1> <img src="/cardsimage.png" alt="Cards Image" /></div>
                    <p className='mt-10'>The largest and smallest units in the hierarchy of biological classification are.</p>
                    <p className='mt-5'>A . Phylum, Kingdom <br /> B . Domain, Species</p>
                    <p className='absolute bottom-3 right-10'>Year 9 biology</p>
                </div>
            </div>
            <div className='flex gap-3 max-md:flex-wrap max-md:justify-center'>
                <div className='w-[320px] h-[320px] bg-[#d8744a] rounded-xl p-10 text-white relative'>
                    <div className='text-center relative'><h1 className='text-black absolute top-3 left-[85px] font-bold'>University</h1> <img src="/cardsimage.png" alt="Cards Image" /></div>
                    <p className='mt-10'>The standard currency is: .</p>
                    <p className='mt-5'>A . The base currency <br /> B . Currency based on gold <br /> C . Currency issued by the central bank</p>
                    <p className='absolute bottom-3 right-10'>Financial markets</p>
                </div>
                <div className='w-[320px] h-[320px] bg-[#4a42d8] rounded-xl p-10 text-white relative'>
                    <div className='text-center relative'><h1 className='text-black absolute top-3 left-[80px] font-bold'>Professional</h1> <img src="/cardsimage.png" alt="Cards Image" /></div>
                    <p className='mt-10'>When valuing a call option using the binominal model.</p>
                    <p className='mt-5'>A . Increases <br /> B . Unchanged</p>
                    <p className='absolute bottom-3 right-10'>CFA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartPage