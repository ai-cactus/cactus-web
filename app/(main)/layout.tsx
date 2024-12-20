import Image from 'next/image';
import React from 'react'

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <aside className='flex flex-col fixed top-0 bottom-0 w-72 bg-[#fdfdfd] border-r border-r-[#1c1c1c] py-4'>
                <Image src={'/Logo-Light.png'} alt='cactus ai' width={210} height={60} className='inline-block mx-auto' />
                <section>
                    <h3 className="text-[#757575] text-xs font-medium font-['Inter'] uppercase leading-3 tracking-wide">Main</h3>
                </section>
            </aside>
            <div>
                <nav></nav>
                <main>{children}</main>
            </div>
        </div>
    )
}

export default layout