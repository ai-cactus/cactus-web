import Image from 'next/image'
import { useEffect, useState } from 'react'

export const LoadingModal = () => (
    <div className='flex justify-center items-center h-screen'>
        <Image src={'/Logo-Light.png'} alt='cactus ai' width={210} height={60} className='' />
    </div>
)

export const LoadingCircleModal = () => (
    <div className='absolute z-10 bg-white/80 flex justify-center items-center top-0 bottom-0 left-0 right-0'>
        <div className='w-10 h-10 border-4 border-[#5A74EB] border-r-transparent rounded-full animate-spin'></div>
    </div>
)

export const ErrorModal = ({ title, message, isOpen }: Readonly<{ title: string, message: string, isOpen: boolean }>) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        setIsMenuOpen(isOpen)
    }, [isOpen])

    if (!isMenuOpen) return null
    return (
        <div className='absolute z-10 bg-white/80 flex justify-center items-center top-0 bottom-0 left-0 right-0'>
            <div className='bg-red-500 text-white shadow rounded-lg p-4 min-w-72'>
                <div className='flex justify-between items-center gap-4'>
                    <h3 className='text-xl font-semibold uppercase'>{title}</h3>
                    <button className='w-8 h-8 mb-1 flex justify-center items-center text-white rounded-full hover:bg-white/20'
                        onClick={() => setIsMenuOpen(false)}>&times;</button>
                </div>
                <hr />
                <p className='mt-4'>{message}</p>
            </div>
        </div>
    )
}