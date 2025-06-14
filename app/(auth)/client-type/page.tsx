'use client'

import { FilledButton } from '@/components/buttons'
import { ClientOptionCard } from '@/components/cards'
import FeaturesSection from '@/components/FeaturesSection'
import React, { useState } from 'react'

function OnboardingPage() {
    const [selected, setSelected] = useState('Health-Service-Provider')

    return (
        <div className="min-h-screen flex flex-col lg:flex-row font-inter m-4 bg-white">
            {/* Left Column - Form */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 max-w-2xl mx-auto w-full">
                <div className="w-full space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-semibold text-gray-900">Tell us about your role</h1>
                        <p className="text-gray-500 max-w-md mx-auto">
                            Choose the option that best describes how you wish to use Theraptly.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <ClientOptionCard
                            icon='/card-01.svg'
                            title='Health Service Provider'
                            value='Health-Service-Provider'
                            selected={selected}
                            onSelect={() => setSelected('Health-Service-Provider')}
                        />
                        <ClientOptionCard
                            icon='/card-01.svg'
                            title='Compliance Professional'
                            value='Compliance-Professional'
                            selected={selected}
                            onSelect={() => setSelected('Compliance-Professional')}
                        />
                    </div>

                    <FilledButton className="w-full py-3" type="submit">
                        Continue
                    </FilledButton>
                </div>
            </div>

            {/* Right Column - Feature Showcase */}
            <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-l-3xl overflow-hidden">
                <div className="w-full p-12 flex items-center justify-center">
                    <FeaturesSection />
                </div>
            </div>
        </div>
    )
}

export default OnboardingPage