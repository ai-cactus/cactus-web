import { FilledButton, OutlinedButton } from '@/components/buttons'
import { InputField } from '@/components/fields'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='px-10 py-5'>
            <section className='flex flex-row gap-4 justify-between items-center'>
                <div>
                    <h1 className='text-[#5A74EB] text-3xl font-semibold mb-2'>Profile</h1>
                    <p className='text-black/70'>Basic information...</p>
                </div>
                <div className='flex flex-row gap-3'>
                    <FilledButton className='flex flex-row items-center gap-1'><Image src='/check.svg' alt='save' width={24} height={24} className='h-6 w-auto' />Save</FilledButton>
                </div>
            </section>
            <section className='flex flex-row gap-16 my-8'>
                <div className='flex-1 flex flex-col gap-4'>
                    <InputField labeltext='Organization Name' />
                    <InputField labeltext='Email address' />
                    <div className='flex flex-row gap-4 w-full'>
                        <InputField labeltext='State' className='flex-1' />
                        <InputField labeltext='City' className='flex-1' />
                    </div>
                    <InputField labeltext='Zip Code' />
                </div>
                <div className=''>
                    <div className='w-52 h-52 bg-slate-500 rounded-lg'></div>
                </div>
            </section>
        </div>
    )
}

export default page