import React from 'react';
import { ReactTyped } from "react-typed";

export default function Banner() {
    return (
        <div className='bg-[#2699fb] w-full h-screen flex items-center'>
            <div className='max-w-[1240px] mx-auto text-center text-white font-bold '>
                <div className='text-2xl md:text-3xl mt-4'>Learn With us</div>
                <div className='text-3xl md:text-6xl mt-4'>Grow with us</div>
                <div className='text-3xl md:text-5xl mt-4'>Learn : 
                    <ReactTyped
                        strings={[
                            "Web Development",
                            "Digital Marketing",
                            "Ethical Hacking",
                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop={true}
                    >
                    </ReactTyped>
                </div>
                  <button className='bg-black text-white w-[50%] rounded cursor-pointer mt-6 py-1'>Get Started</button>
            </div>
        </div>
    )
}
