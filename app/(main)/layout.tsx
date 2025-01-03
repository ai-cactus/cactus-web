'use client'

import { NavButton } from '@/components/buttons';
import { MainNav } from '@/components/navs';
import { logOut } from '@/lib/auth';
import withAuth from '@/lib/withAuth';
import Image from 'next/image';
import React from 'react'

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=''>
            <aside className='flex flex-col fixed top-0 bottom-0 w-72 bg-[#fdfdfd] border-r border-r-[#1C1C1C1A]'>
                <header className='bg-white h-16 flex items-center justify-center'>
                    <Image src={'/Logo-Light.png'} alt='cactus ai' width={210} height={60} className='inline-block h-12 object-contain' />
                </header>
                <div className='overflow-y-auto mt-4 px-4 py-6 flex flex-col gap-16'>
                    <section>
                        <h3 className="mb-2 text-[#757575] text-xs font-medium font-['Inter'] uppercase leading-3 tracking-wide">Main</h3>
                        <nav className='flex flex-col'>
                            {primaryNav.map((item, key) => <NavButton key={key} href={item.href} icon={item.icon} label={item.label} />)}
                        </nav>
                    </section>
                    <section>
                        <h3 className="mb-2 text-[#757575] text-xs font-medium font-['Inter'] uppercase leading-3 tracking-wide">Help & Settings</h3>
                        <nav className='flex flex-col'>
                            {secondaryNav.map((item, key) => <NavButton key={key} href={item.href} icon={item.icon} label={item.label} />)}
                            <NavButton href={"#"} onClick={logOut} icon={"/exit_ic.svg"} label={"Logout"} className='text-[#D55F5A]' />
                        </nav>
                    </section>
                </div>
            </aside>
            <div className='ml-72 relative'>
                <MainNav />
                <main>{children}</main>
            </div>
        </div>
    )
}

export default withAuth(layout);


const primaryNav = [
    {
        icon: "/home_ic.svg",
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: "/document_ic.svg",
        label: "Documents",
        href: "/documents",
    },
    {
        icon: "/history_ic.svg",
        label: "History",
        href: "/history",
    },
]

const secondaryNav = [
    {
        icon: "/settings_ic.svg",
        label: "Settings",
        href: "/settings",
    },
    {
        icon: "/help_center_ic.svg",
        label: "Help Center",
        href: "/help-center",
    },
]