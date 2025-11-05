import React from 'react';
import laptop from "../assets/laptop.jpg";

export default function Export() {
    return (
        <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-2'>
            <div className=''>
                <img className='laptop-img' src={laptop} alt="" />
            </div>
            <div className='flex flex-col justify-center mt-4'>
                <h1 className='text-[#00df9a] font-bold'>LEARN FROM EXPERTS</h1>
                <p className='mt-2 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aspernatur mollitia, veniam magnam cum perspiciatis reiciendis quod tenetur iure provident
                    eligendi magni corrupti, asperiores sint. Accusamus, mollitia a. Ut, delectus!</p>
                <button className='bg-black text-white w-[20%]  rounded cursor-pointer mt-2 py-1'>Get Started</button>
            </div>
        </div>
    )
}
