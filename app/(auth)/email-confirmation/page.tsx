import { FilledButton } from '@/components/buttons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='flex flex-col px-10 py-10'>
            <Image src={'/email-confirm.png'} alt='email confirmation' width={4000} height={3500} className='inline-block mx-auto h-56 w-auto' />
            <h1 className='text-3xl font-bold text-center mt-7'>Hi! John</h1>
            <h2 className='text-2xl font-bold text-center my-2'>Welcome to Cactus ai</h2>
            <p className='mb-7 text-center'>Click the button below to confirm your email address and start using your account.</p>
            <FilledButton>Confirm your Email</FilledButton>
            <p className="text-center text-[#4b4b4b] text-base font-normal mt-7">Don’t have an account? <Link href={"/signup"} className="text-[#4b62cc] text-base font-bold">Sign Up</Link></p>
        </div>
    )
}

export default page