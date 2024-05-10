import { Bot, Info, Paperclip, Pen, Pencil } from 'lucide-react'
import React from 'react'

function SideNav() {
  return (
    <div className="flex w-[360px] h-[85vh] flex-col justify-between border-e bg-[#3930FF] rounded-xl max-xl:hidden">
    <div className="px-4 py-6">
        <span className="mx-auto flex items-center justify-center gap-2  rounded-lg text-[18px] font-bold text-white">
        <Pencil />
        Exam Bank
        </span>

        <ul className="mt-6 space-y-1">

        <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 bg-white text-[#3930FF]  hover:bg-white hover:text-gray-700"
            >
                <span className="text-[16px] flex items-center gap-2 text-[#3930FF] font-bold"><Paperclip /> Political economics </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
                </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4 bg-gray-200 rounded-md">
                <li>
                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-[#000] hover:bg-white hover:text-gray-700"
                >   
                    Policypdf
                </a>
                </li>

                <li>
                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-[#000] hover:bg-white hover:text-gray-700"
                >
                    1566LDMMpdf
                </a>
                </li>

                <li>
                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-[#000] hover:bg-white hover:text-gray-700"
                >
                    term 2.pdf
                </a>
                </li>

                <li>
                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-[#000] hover:bg-white hover:text-gray-700"
                >
                    mock test 2022.pdf
                </a>
                </li>
            </ul>
            </details>
        </li>

        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-700"
            >
            <Paperclip />
            Financial markets
            </a>
        </li>

        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-700"
            >
            <Paperclip />
            Accounting
            </a>
        </li>

        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-700"
            >
            <Paperclip />
            temp files
            </a>
        </li>

        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-700"
            >
            <Paperclip />
            Taxation laws
            </a>
        </li>

        </ul>
    </div>

    <div className="flex justify-between w-full px-4 pb-2">
        <a href="#" className='py-2 px-4 text-center rounded-full bg-gray-50 flex items-center gap-1 text-[14px]'><Bot />AI Clinic</a>
        <a href="#" className='py-2 px-4 text-center rounded-full bg-gray-50 flex items-center gap-1 text-[14px]'><Info />HELP</a>
    </div>
    </div>
  )
}

export default SideNav