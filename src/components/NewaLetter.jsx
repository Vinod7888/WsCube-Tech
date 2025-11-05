import React from 'react'

export default function NewaLetter() {
    return (
        <div className='bg-[#2699fb] p-[50px]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='p-2'>
                    <h1 className='text-4xl text-white font-bold'>Want to learn latest I.T skill?</h1>
                    <p className='text-white'>Sign up to our newslatter and stay up to date.</p>
                </div>
                <div className='p-2 mt-4'>
                    <div>
                        <input className='p-1 bg-white rounded mr-2' type="email" name="" id="" placeholder='Enter Email' />
                        <button className='bg-black text-white px-3 py-1 rounded cursor-pointer  mt-2'>Notify ME</button>
                    </div>
                    <div className='mt-4'>
                        <p className='text-white'>WE care bout the protection of your data . Read our </p>
                        <p>privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
