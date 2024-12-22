'use client'

import { FilledButton } from '@/components/buttons'
import { InputField } from '@/components/fields'
import { auth, db } from '@/lib/firebase'
import { sign } from 'crypto'
import { createUserWithEmailAndPassword, AuthError, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, setDoc, FirestoreError } from 'firebase/firestore'
import { set } from 'mongoose'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function page() {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [organization, setOrganization] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [country_state, setCountry_state] = useState('')
    const [zip_code, setZip_code] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [terms_and_conditions, setTerms_and_conditions] = useState(false)

    const handleSignup = async (e: any) => {
        e.preventDefault()
        try {
            let userCredential;
            try {
               userCredential = await createUserWithEmailAndPassword(auth, email, password)
            } catch (error) {
                const _error = (error as AuthError)
                if (_error.code === 'auth/email-already-in-use') {
                    // If the email is already in use, sign in with the email and password
                    // This will allow the user to complete their profile
                    userCredential = await signInWithEmailAndPassword(auth, email, password)
                } else {
                    // If the error is not email-already-in-use, rethrow the error
                    throw error;
                }
            }
            const user = userCredential.user
            const response = await fetch("http://localhost:3000/auth/complete-profile",
                {
                    // set request mode to no-cors
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                        // @ts-ignore
                        'authorization': `Bearer ${user.accessToken}`
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        name: `${first_name} ${last_name}`,
                        practice: `${organization}`,
                        juridiction: `${address}, ${country_state}, ${zip_code}`,
                        // email, 
                        // address, 
                        // country_state, 
                        // zip_code, 
                        // role: null, 
                        // isVerified: false, 
                    })
                }
            );
            console.log(response)
            console.log(user)
            if (!response.ok) {
                setError('An error occurred while creating your account profile. Please try again later with the same email and password. If the problem persists, contact support.')
            } else {
                // @ts-ignore
                console.log(user.accessToken)
                alert('Account created successfully')
            }
        } catch (error) {
            setError((error as AuthError | FirestoreError).message)
        }
    }

    return (
        <div className='flex flex-col justify-center min-h-screen px-10 py-16'>
            <Image src={'/Logo-Light.png'} alt='cactus ai' width={210} height={60} className='inline-block mx-auto' />
            <h2 className="pt-6 pb-2 text-[#111111] text-2xl font-bold text-center">Create a new account</h2>
            <p className="text-[#4b4b4b] text-base font-normal text-center">Enter your personal data to create your account.</p>
            <form onSubmit={handleSignup} className='mt-6 max-w-96 w-full mx-auto flex flex-col gap-6'>
                <div className='flex flex-row gap-4'>
                    <InputField
                        id='first_name'
                        labelText='First Name'
                        name="first_name"
                        placeholder='eg. John'
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                        required
                    />
                    <InputField
                        id='last_name'
                        labelText='Last Name'
                        name="last_name"
                        placeholder='eg. Wick'
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                        required
                    />
                </div>
                <InputField
                    id='organization'
                    labelText='Organization Name'
                    name="organization"
                    placeholder='eg. johnfrans@gmail.com'
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    required
                />
                <InputField
                    id='email'
                    labelText='Email'
                    type='email'
                    name="email"
                    placeholder='eg. johnfrans@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <InputField
                    id='address'
                    labelText='Address'
                    name="address"
                    placeholder='eg. johnfrans@gmail.com'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <div className='flex flex-row gap-4'>
                    <InputField
                        id='state'
                        labelText='State'
                        name="state"
                        placeholder=''
                        value={country_state}
                        onChange={(e) => setCountry_state(e.target.value)}
                        required
                    />
                    <InputField
                        id='zip_code'
                        labelText='Zip Code'
                        name="zip_code"
                        placeholder='XXXXXX'
                        value={zip_code}
                        onChange={(e) => setZip_code(e.target.value)}
                        required
                    />
                </div>
                <InputField
                    id="password"
                    labelText='Password'
                    type="password"
                    name="password"
                    placeholder='••••••'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className='flex flex-row justify-between mb-10'>
                    <div className='flex flex-row gap-1 items-center'>
                        <input type="checkbox"
                            name="terms_and_conditions"
                            id="terms_and_conditions"
                            checked={terms_and_conditions}
                            onChange={(e) => setTerms_and_conditions(e.target.checked)}
                        />
                        <label htmlFor="terms_and_conditions" className='text-sm font-semibold'>Yes,  I understand and agree to the <Link href="" className='text-[#4b62cc] font-semibold whitespace-nowrap'>Cactus Terms of Service</Link></label>
                    </div>
                </div>
                <div>
                    {error && <p className='text-red-500 text-sm font-semibold mb-2'>{error}</p>}
                    <FilledButton className='w-full' type='submit' disabled={!terms_and_conditions}>Sign Up</FilledButton>
                </div>
                <p className="text-center text-[#4b4b4b] text-base font-normal">You have an account? <Link href={"/login"} className="text-[#4b62cc] text-base font-bold">Login</Link></p>
            </form>
        </div>
    )
}

export default page