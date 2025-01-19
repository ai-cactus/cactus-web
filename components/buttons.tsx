'use client'

import { signInWithGoogle } from "@/lib/auth";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode, useState } from "react";

export function FilledButton(props: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`bg-[#4b62cc] disabled:bg-gray-400 text-white font-semibold py-3 px-5 rounded-lg ${props.className}`}
        >{props.children}</button>
    )
}


export function GoogleAuthButton({ role = "login" }: { role?: "login" | "signup" }) {
    const router = useRouter()
    const _onClick = async () => {
        const user = await signInWithGoogle()
        if (role === "login") {
            console.log("login")
            router.push('/dashboard')
        } else {
            console.log("signup")
            router.push('/signup/complete')
        }
    }
    return (
        <button type='button' onClick={_onClick} className="py-3 px-5 rounded-lg border border-[#c5c5c5] justify-center items-center gap-[15px] inline-flex">
            <Image src={"/Google.svg"} alt='icon' width={28} height={28} className="w-7 h-7 relative" />
            <span className="text-[#2b2b2b] text-base font-semibold">Continue with Google</span>
        </button>
    )
}


export interface NavButtonProps extends LinkProps {
    href: string,
    label: string,
    icon: string,
    surfix?: ReactNode,
    className?: string,
    routes?: NavButtonProps[]
}


const _NavButton = (props: NavButtonProps) => {
    const segment = useSelectedLayoutSegment()
    return (
        <Link {...props} className={`flex flex-row items-center px-4 py-4 gap-4 font-medium
        ${props.href.substring(1).startsWith(segment!) ? 'text-black' : 'text-[#757575]'} ${props.className}`}
        >
            <Image src={props.icon} alt={props.label} width={24} height={24} className='w-4' />
            <span className="flex-1">{props.label}</span>
            {props.surfix}
        </Link>
    );
}

export const NavButton = (props: NavButtonProps) => {
    const [isOpen, setIsOpen] = useState(false)
    if (!props.routes) {
        return <_NavButton {...props} />
    } return (
        <div>
            <_NavButton {...props} onClick={() => setIsOpen(prev => !prev)} surfix={<Image src={'/nav-arrow-down.svg'} alt={"nav arrow down"} width={24} height={24} className='w-6' />} />
            <div className="flex flex-col ml-4" style={{display: isOpen ? 'block' : 'none'}}>
                {props.routes.map((route, i) => <NavButton key={i} {...route} />)}
            </div>
        </div>
    )
}

export const OutlinedButton = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return (
        <button {...props} className={`px-5 py-3 rounded-lg border border-[#cccccc] font-semibold ${props.className}`} />
    )
}