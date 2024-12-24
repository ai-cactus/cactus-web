'use client'

import { FilledButton } from '@/components/buttons'
import { InputField } from '@/components/fields'
import { LoadingModal } from '@/components/modals'
import { useAuthState } from '@/lib/authState'
import { AuthError } from 'firebase/auth'
import { FirestoreError } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function page() {
    const {user, loading: authLoading} = useAuthState()
    const router = useRouter();

    const [organization, setOrganization] = useState('')
    const [address, setAddress] = useState('')
    const [country_state, setCountry_state] = useState('')
    const [zip_code, setZip_code] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [terms_and_conditions, setTerms_and_conditions] = useState(false)
    
    const completeProfile = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch("http://localhost:3000/auth/complete-profile",
                {
                    headers: {
                        'Content-Type': 'application/json',
                        // @ts-ignore
                        'authorization': `Bearer ${user.accessToken}`
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        name: user!.displayName,
                        practice: organization,
                        jurisdiction: `${address}, ${country_state}, ${zip_code}`,
                    })
                }
            );
            if (!response.ok) {
                setError('An error occurred while creating your account profile. Please try again later with the same email and password. If the problem persists, contact support. \n Error: ' + await response.text())
            } else {
                // navigate to dashboard
                router.push('/dashboard')
            }
        } catch (error) {
            setError((error as AuthError | FirestoreError).message)
        }
        setLoading(false)
    }

    if (authLoading) {
        return <LoadingModal />
    }

    return (
        <div className='flex flex-col justify-center min-h-screen px-10 py-16'>
            <Image src={'/Logo-Light.png'} alt='cactus ai' width={210} height={60} className='inline-block mx-auto' />
            <h2 className="pt-6 pb-2 text-[#111111] text-2xl font-bold text-center">Complete your profile setup</h2>
            <p className="text-[#4b4b4b] text-base font-normal text-center">Enter your personal data to complete your account.</p>
            <form onSubmit={completeProfile} className='mt-6 max-w-96 w-full mx-auto flex flex-col gap-6'>
                <InputField
                    id='organization'
                    labeltext='Organization Name'
                    name="organization"
                    placeholder='eg. johnfrans@gmail.com'
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    required
                />
                <InputField
                    id='address'
                    labeltext='Address'
                    name="address"
                    placeholder='eg. johnfrans@gmail.com'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <div className='flex flex-row gap-4'>
                    <InputField
                        id='state'
                        labeltext='State'
                        name="state"
                        placeholder=''
                        value={country_state}
                        onChange={(e) => setCountry_state(e.target.value)}
                        required
                    />
                    <InputField
                        id='zip_code'
                        labeltext='Zip Code'
                        name="zip_code"
                        placeholder='XXXXXX'
                        value={zip_code}
                        onChange={(e) => setZip_code(e.target.value)}
                        required
                    />
                </div>
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
                    <FilledButton className='w-full' type='submit' disabled={!terms_and_conditions}>{loading ? '•••' : 'Complete your profile'}</FilledButton>
                </div>
            </form>
        </div>
    )
}

export default page