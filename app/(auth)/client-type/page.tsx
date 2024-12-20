'use client'

import { ClientOptionCard } from '@/components/cards'
import React, { useState } from 'react'

function page() {
    const [selected, setSelected] = useState('Health-Service-Provider')
    return (
        <div className='min-h-screen flex flex-col gap-4 justify-center items-center'>
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
    )
}

export default page