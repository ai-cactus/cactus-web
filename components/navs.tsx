'use client'

import { useAuthState } from "@/lib/authState";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function LandingHeaderNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <section role="menu">
            <div role="menubar" className="md:hidden">
                <button onClick={() => setIsMenuOpen(true)}>
                    <Image src="/menu.png" alt="menu open" className="w-9 h-auto" width={36} height={36} />
                </button>
            </div>
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-white md:bg-transparent fixed md:relative z-50 h-screen md:h-fit top-0 right-0 max-w-sm md:max-w-fit w-full md:w-fit`}>
                <div role="menubar" className="flex md:hidden flex-row justify-end p-4">
                    <button onClick={() => setIsMenuOpen(false)}>
                        <Image src="/close.png" alt="menu close" className="w-9 h-auto" width={36} height={36} />
                    </button>
                </div>
                <ul role="menuitem" className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0 p-8 md:p-0">
                    <li>
                        <Link href="#" className="font-medium px-5 py-3 rounded-full inline-block w-full md:w-fit border border-black">Product</Link>
                    </li>
                    <li>
                        <Link href="#" className="font-medium px-5 py-3 rounded-full inline-block w-full md:w-fit border border-black">Features</Link>
                    </li>
                    <li>
                        <Link href="#" className="font-medium px-5 py-3 rounded-full inline-block w-full md:w-fit border border-black">Testimonials</Link>
                    </li>
                    <li>
                        <Link href="#request-a-demo" className="font-medium px-8 py-3 rounded-full bg-black text-white md:ml-8 inline-block w-full md:w-fit">Get Started</Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}


export function LandingFooterNav() {
    return (
        <div>
            <nav>
                <ul className="flex space-x-2">
                    <li>
                        <Link href="#" className="font-medium px-5 py-3 rounded-full">Product</Link>
                    </li>
                    <li>
                        <Link href="#" className="font-medium px-5 py-3 rounded-full">Features</Link>
                    </li>
                    <li>
                        <Link href="#" className="font-medium px-5 py-3 rounded-full">Testimonials</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className="flex flex-row gap-4">
                    <li>
                        <Link href=""><Image src="/Facebook.svg" alt="Facebook-icon" className="w-8 h-8" width={34} height={34} /></Link>
                    </li>
                    <li>
                        <Link href=""><Image src="/TwitterX.svg" alt="TwitterX-icon" className="w-8 h-8" width={34} height={34} /></Link>
                    </li>
                    <li>
                        <Link href=""><Image src="/Instagram.svg" alt="Instagram-icon" className="w-8 h-8" width={34} height={34} /></Link>
                    </li>
                    <li>
                        <Link href=""><Image src="/LinkedIn.svg" alt="LinkedIn-icon" className="w-8 h-8" width={34} height={34} /></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export function MainNav() {
    const {user} = useAuthState()
    return (
        <nav className='sticky h-16 top-0 flex flex-row items-center gap-10 px-10 bg-white border-b border-b-[#1C1C1C1A]'>
            <form action="" className='flex-1 flex flex-row bg-[#F2F5F8] rounded-lg h-10 gap-4 px-5'>
                <button type='submit'>
                    <Image src={"/search_ic.svg"} alt='search icon' width={24} height={24} />
                </button>
                <input
                    required
                    type="text"
                    name=""
                    id=""
                    placeholder='Seach or type a command'
                    className='w-full bg-transparent outline-none'
                />
            </form>
            <Link href={"/notifications"} className='bg-[#F2F5F8] p-2 rounded-lg'>
                <Image src={"/notification_ic.svg"} alt='search icon' width={24} height={24} />
            </Link>
            <div className='flex flex-row items-center gap-2'>
                <Image src={"/avatar.png"} alt='search icon' width={48} height={48} className='rounded-full w-11 h-11' />
                <div className='max-w-32'>
                    <h3 className='text-xs uppercase'>Health compliance</h3>
                    <h2 className='text-sm font-semibold'>{user?.displayName}</h2>
                </div>
            </div>
        </nav>
    );
}