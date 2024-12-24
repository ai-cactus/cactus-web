'use client'
import { useAuthState } from '@/lib/authState'
import Image from 'next/image';
import React from 'react'

function page() {
  const {user} = useAuthState();
  console.log(user?.metadata)
  return (
    <div className=''>
      <h1 className='text-[#5A74EB] text-3xl font-semibold text-center my-12'>Upload policy</h1>
      <section className='h-[350px] w-[500px] border-2 border-dashed border-[#cccccc] rounded-xl mx-auto flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <Image src={'/upload_ic.png'} alt='upload icon' width={100} height={100} className='h-16 w-16 object-contain' />
          <h2 className='text-black text-xl font-semibold mt-4'>Drag and Drop file or Choose file</h2>
          <p className='text-[#565656] text-lg'>Supported formats: XLS, XSLX</p>
        </div>
      </section>
      <section className='flex flex-row gap-4 justify-between my-12 max-w-[500px] w-full mx-auto'>
        <div></div>
        <div className='flex flex-row gap-4'>
          <button className='px-5 py-3 min-w-28 rounded-lg border border-[#cccccc] font-semibold'>Cancel</button>
          <button className='px-5 py-3 min-w-28 rounded-lg border border-[#cccccc] bg-[#5A74EB] text-white font-semibold'>Next</button>
        </div>
      </section>
    </div>
  )
}

export default page