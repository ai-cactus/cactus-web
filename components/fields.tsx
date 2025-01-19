import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labeltext: string
}

export function InputField(props: InputFieldProps) {
    return (
        <div className={`flex flex-col gap-1 ${props.className}`}>
            <label htmlFor={props.id}>{props.labeltext}</label>
            <input
                {...props}
                className='py-3 px-5 border border-[#cecece] rounded-xl text-base min-w-0 w-full'
            />
        </div>
    )
}