import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [toggle, setToggle] = useState(true);
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto flex justify-between items-center'>
                <div className='text-3xl font-bold'>
                    WsCube Tech
                </div>
                {
                    toggle ?
                        <FaBars onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block cursor-pointer' />
                        :
                        <IoMdClose onClick={() => setToggle(!toggle)} className='text-white text-3xl md:hidden block font-bold cursor-pointer' />
                }
                <ul className='hidden md:flex gap-5 text-white'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                {/* Responsive Menu */}
                <ul className={`md:hidden text-white fixed  bg-black flex flex-col gap-6 h-screen w-[50%] p-3  top-[68px] duration-300 ease-in ...
                ${toggle ? 'left-[-100%]' : 'left-[0%]'} 
                 >`}>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div >
    )
}
