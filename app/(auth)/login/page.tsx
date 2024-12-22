'use client'

import { FilledButton } from '@/components/buttons'
import { InputField } from '@/components/fields'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword, AuthError } from 'firebase/auth'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // TODO: route to dashboard
            alert('Logged in successfully')
        } catch (error) {
            setError((error as AuthError).message);
            console.log(error);
        }
        setLoading(false)
    }

    return (
        <div className='flex flex-col justify-center min-h-screen px-10 py-16'>
            <Image src={'/Logo-Light.png'} alt='cactus ai' width={210} height={60} className='inline-block mx-auto' />
            <h2 className="pt-6 pb-2 text-[#111111] text-2xl font-bold text-center">Log in to your account</h2>
            <p className="text-[#4b4b4b] text-base font-normal text-center">Welcome back! Please enter your details</p>
            <form onSubmit={handleLogin} className='mt-6 max-w-96 w-full mx-auto flex flex-col gap-6'>
                <InputField
                    required
                    id='email'
                    labeltext='Email'
                    name="email"
                    type='email'
                    placeholder='eg. johnfrans@gmail.com'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    required
                    id="password"
                    labeltext='Password'
                    type="password"
                    name="password"
                    placeholder='••••••'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='flex flex-row justify-between mb-10'>
                    <div className='flex flex-row gap-1 items-center'>
                        <input type="checkbox" name="rememberMe" id="rememberMe" />
                        <label htmlFor="rememberMe" className='text-sm font-semibold'>Remember for 30 days</label>
                    </div>
                    <Link href={"#"} className='text-[#4b62cc] font-semibold'>Forget Password</Link>
                </div>
                <div>
                    {error && <p className='text-red-500 text-sm font-semibold mb-2'>{error}</p>}
                    <FilledButton className='w-full' type='submit'>{loading ? '•••' : 'Login'}</FilledButton>
                </div>
                <button className="py-3 px-5 rounded-xl border border-[#c5c5c5] justify-center items-center gap-[15px] inline-flex">
                    <Image src={"/Google.svg"} alt='icon' width={28} height={28} className="w-7 h-7 relative" />
                    <span className="text-[#2b2b2b] text-base font-semibold">Continue with Google</span>
                </button>
                <p className="text-center text-[#4b4b4b] text-base font-normal">Don’t have an account? <Link href={"/signup"} className="text-[#4b62cc] text-base font-bold">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default page