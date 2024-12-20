import { DetailedHTMLProps } from "react";

export function FilledButton(props: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <button 
        {...props}
        className={`bg-[#4b62cc] text-white py-4 px-5 rounded-xl ${props.className}`}
        >{props.children}</button>
    )
}