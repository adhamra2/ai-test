import { BookText, Bot, CalendarCheck, Flag, FolderPlus, History, Indent, Info, Landmark, Paperclip, Pen, Pencil, ScrollText, Stamp, User, UserRoundCog, Users } from 'lucide-react'
import React from 'react'

function AccountSideNav() {
  return (
    <div className="flex w-[360px] h-[85vh] flex-col justify-between border-e bg-[#3930FF] rounded-xl max-xl:hidden">
    <div className="px-4 py-6">
        <span className="mx-auto flex items-center justify-center gap-2  rounded-lg text-[18px] font-bold text-white">
        <Users />
        Account management
        </span>

        <ul className="mt-6 space-y-3">

        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-[#3930FF] bg-white hover:text-gray-700"
            >
            <Stamp />
            User Identity
            </a>
        </li>

        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-700"
            >
            <BookText />
            Account Information
            </a>
        </li>

        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-700"
            >
            <History />
            Exam history
            </a>
        </li>

        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-700"
            >
            <ScrollText />
            Competition management
            </a>
        </li>
        
        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-700"
            >
            <Flag />
            Competition participation
            </a>
        </li>

        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-700"
            >
            <CalendarCheck />
            User check-in record
            </a>
        </li>

        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-700"
            >
            <FolderPlus />
            Account top-up
            </a>
        </li>

        <li>
            <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-700"
            >
            <Landmark />
            Credits
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

export default AccountSideNav