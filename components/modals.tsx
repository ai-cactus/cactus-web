import Image from 'next/image'

export const LoadingModal = () => (
    <div className='flex justify-center items-center h-screen'>
        <Image src={'/Logo-Light.png'} alt='cactus ai' width={210} height={60} className='' />
    </div>
)