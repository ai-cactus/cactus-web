import { signInWithGoogle } from "@/lib/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DetailedHTMLProps } from "react";

export function FilledButton(props: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`bg-[#4b62cc] disabled:bg-gray-400 text-white py-4 px-5 rounded-xl ${props.className}`}
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
        <button type='button' onClick={_onClick} className="py-3 px-5 rounded-xl border border-[#c5c5c5] justify-center items-center gap-[15px] inline-flex">
            <Image src={"/Google.svg"} alt='icon' width={28} height={28} className="w-7 h-7 relative" />
            <span className="text-[#2b2b2b] text-base font-semibold">Continue with Google</span>
        </button>
    )
}