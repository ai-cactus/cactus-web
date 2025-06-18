import { FilledButton } from '@/components/buttons';
import { InputField } from '@/components/fields';
import Image from 'next/image';
import React from 'react';

function ComplianceProfessionalProfile() {
    return (
        <div className='min-h-screen bg-white px-6 py-8 md:px-10 md:py-12'>
            <div className='max-w-4xl mx-auto'>
                <section className='flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8'>
                    <div>
                        <h1 className='text-[#5A74EB] text-2xl md:text-3xl font-semibold mb-1'>Compliance Professional Profile</h1>
                        <p className='text-black/70 text-sm md:text-base'>Complete your compliance professional profile</p>
                    </div>
                    <FilledButton className='flex items-center gap-2 px-6 py-2 text-sm md:text-base'>
                        <Image src='/check.svg' alt='save' width={20} height={20} className='h-5 w-5' />
                        Save Profile
                    </FilledButton>
                </section>

                <section className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
                    <div className='flex-1 space-y-6'>
                        <div className='space-y-4'>
                            <h2 className='text-lg font-medium text-gray-800'>Professional Information</h2>
                            <InputField labeltext='Full Name' />
                            <InputField labeltext='Job Title' />
                            <InputField labeltext='Company/Organization' />
                            <InputField labeltext='Professional License Number (if applicable)' />
                        </div>

                        <div className='space-y-4'>
                            <h2 className='text-lg font-medium text-gray-800'>Contact Information</h2>
                            <InputField labeltext='Email Address' type='email' />
                            <InputField labeltext='Phone Number' type='tel' />
                            <InputField labeltext='LinkedIn Profile (optional)' />
                        </div>

                        <div className='space-y-4'>
                            <h2 className='text-lg font-medium text-gray-800'>Areas of Expertise</h2>
                            <div className='space-y-2'>
                                <div className='flex items-center gap-2'>
                                    <input type='checkbox' id='hipaa' className='rounded text-blue-600' />
                                    <label htmlFor='hipaa'>HIPAA Compliance</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='checkbox' id='gdpr' className='rounded text-blue-600' />
                                    <label htmlFor='gdpr'>GDPR Compliance</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='checkbox' id='ccpa' className='rounded text-blue-600' />
                                    <label htmlFor='ccpa'>CCPA Compliance</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='checkbox' id='other' className='rounded text-blue-600' />
                                    <label htmlFor='other'>Other (please specify)</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-64 flex flex-col items-center'>
                        <div className='w-52 h-52 bg-gray-200 rounded-lg mb-4 overflow-hidden'>
                            {/* Placeholder for profile picture */}
                            <div className='w-full h-full flex items-center justify-center text-gray-400'>
                                <span>Profile Photo</span>
                            </div>
                        </div>
                        <button className='text-sm text-blue-600 hover:text-blue-800'>
                            Upload Photo
                        </button>
                    </div>
                </section>

                <div className='mt-8 pt-6 border-t border-gray-200'>
                    <h2 className='text-lg font-medium text-gray-800 mb-4'>Professional Bio</h2>
                    <textarea 
                        className='w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='Tell us about your experience and expertise in compliance...'
                    />
                </div>
            </div>
        </div>
    );
}

export default ComplianceProfessionalProfile;
