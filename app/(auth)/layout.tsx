import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className=''>
            <section className='lg:mr-[50%]'>{children}</section>
            <section className='w-[50%] fixed right-0 top-0 bottom-0 bg-[url(/background-1.png)]'>
                <div className='backdrop-blur-sm w-full h-full'>
                </div>
            </section>
        </div>
    )
}

export default Layout