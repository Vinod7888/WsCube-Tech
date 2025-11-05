import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='w-full bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 lg:grid-cols-4'>
        <div>
          <div className='p-2'>
            <h1 className='text-2xl font-bold cursor-pointer'>WsCube Tech.</h1>
            <p className='text-white text-[14px] mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum earum tempore temporibus numquam</p>
            <div className='flex gap-[50px] text-xl text-white mt-4 list-none'>
              <li><FaSquareFacebook className='cursor-pointer' /></li>
              <li><FaInstagram className='cursor-pointer' /></li>
              <li> <FaTwitterSquare className='cursor-pointer' /></li>
              <li><FaGithub className='cursor-pointer' /></li>
            </div>
          </div>

        </div>
        <div className='md:text-center'>
          <div className='list-none p-2'>
            <li className='text-xl'>Solutions</li>
            <li className='text-white mt-2'>Analytics</li>
            <li className='text-white mt-2'>Marketing</li>
            <li className='text-white mt-2'>Commerce</li>
            <li className='text-white mt-2'>Insights</li>
          </div>
        </div>
        <div className='md:text-center'>
          <div className='list-none p-2'>
            <li className='text-xl'>Support</li>
            <li className='text-white mt-2'>Pricing</li>
            <li className='text-white mt-2'>Documentation</li>
            <li className='text-white mt-2'>Guides</li>
            <li className='text-white mt-2'>API Status</li>
          </div>
        </div>
        <div className='md:text-center'>
          <div className='list-none p-2'>
            <li className='text-xl'>Company</li>
            <li className='text-white mt-2'>About</li>
            <li className='text-white mt-2'>Blog</li>
            <li className='text-white mt-2'>Jobs</li>
            <li className='text-white mt-2'>Press</li>
            <li className='text-white mt-2'>Carees</li>
          </div>
        </div>
      </div>
    </div>
  )
}
