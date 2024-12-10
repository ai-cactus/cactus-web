'use client'

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