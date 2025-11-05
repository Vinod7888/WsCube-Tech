import React from 'react'
import single from "../assets/single.png";

export default function Plans() {
    return (
        <div className="max-w-[1240px] mx-auto px-4 py-20">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                <div className="shadow-xl rounded-xl hover:scale-105 duration-300">
                    <div className="flex flex-col items-center gap-4 py-8 px-6">
                        <img className="w-[60px]" src={single} alt="" />
                        <h1 className="font-bold text-lg">Web Development</h1>
                        <h2 className="font-bold text-2xl">$149</h2>
                        <p className="text-center">Lorem ipsum dolor sit</p>
                        <p className="text-center">Amet consectetur adipisicing elit.</p>
                        <p className="text-center">Rerum voluptatibus quos quaerat.</p>
                        <button className="bg-[#00df9a] px-6 py-2 rounded-md cursor-pointer mt-4 hover:bg-[#00c785] duration-200">
                            Start Trial
                        </button>
                    </div>
                </div>

                <div className="shadow-xl rounded-xl bg-gray-200 hover:scale-105 duration-300">
                    <div className="flex flex-col items-center gap-4 py-8 px-6">
                        <img className="w-[60px]" src={single} alt="" />
                        <h1 className="font-bold text-lg">Digital Marketing</h1>
                        <h2 className="font-bold text-2xl">$149</h2>
                        <p className="text-center">Lorem ipsum dolor sit</p>
                        <p className="text-center">Amet consectetur adipisicing elit.</p>
                        <p className="text-center">Rerum voluptatibus quos quaerat.</p>
                        <button className="bg-black text-[#00df9a] px-6 py-2 rounded-md cursor-pointer mt-4 hover:bg-gray-800 duration-200">
                            Start Trial
                        </button>
                    </div>
                </div>

                <div className="shadow-xl rounded-xl hover:scale-105 duration-300">
                    <div className="flex flex-col items-center gap-4 py-8 px-6">
                        <img className="w-[60px]" src={single} alt="" />
                        <h1 className="font-bold text-lg">Ethical Hacking</h1>
                        <h2 className="font-bold text-2xl">$149</h2>
                        <p className="text-center">Lorem ipsum dolor sit</p>
                        <p className="text-center">Amet consectetur adipisicing elit.</p>
                        <p className="text-center">Rerum voluptatibus quos quaerat.</p>
                        <button className="bg-[#00df9a] px-6 py-2 rounded-md cursor-pointer mt-4 hover:bg-[#00c785] duration-200">
                            Start Trial
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
