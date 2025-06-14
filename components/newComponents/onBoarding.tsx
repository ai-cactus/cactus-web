"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const OnBoarding = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <div className="font-inter fixed inset-0 bg-[#414D60]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="flex rounded-2xl shadow-xl max-w-4xl bg-white border overflow-hidden px-6 py-5 h-1/2 w-1/2">
                {/* Text Content */}
                <div className="flex-1 p-8 flex flex-col">
                    <div className="flex items-center gap-3 mb-8">
                        <Image
                            src="/logo-purple.png"
                            alt="Theraptly Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                        <span className="text-3xl font-bold text-[#4758E0]">Theraptly</span>
                    </div>

                    <div className="flex flex-col gap-6 flex-grow">
                        <h2 className="text-4xl font-bold text-[#414D60] leading-tight">Welcome to Theraptly</h2>
                        <p className="text-lg text-[#414D60]">We turn all your long & tedious compliance work into a much shorter and delightful process.</p>


                        <button 
                            onClick={onComplete}
                            className="flex gap-4 text-left w-full bg-[#15238B30] text-white py-3 px-6 rounded-full hover:border-[#C8CEFC] items-center"
                        >
                            <div>
                            <h1 className='text-md font-bold text-[#4758E0]'>Activate your account</h1>
                            <p className='text-[#4758E0] text-xs'>Let’s get you started by creating a profile for your organization.</p>
                            </div>
                            <div className='px-1 py-1 rounded-full bg-white'><ArrowRight color='black'/></div>
                        </button>
                    </div>
                </div>

                {/* Image Side */}
                <div className="hidden md:block flex-1 bg-gray-100 relative rounded">
                    <Image
                        src="/onBoarding.png"
                        alt="On Boarding Image"
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default OnBoarding;