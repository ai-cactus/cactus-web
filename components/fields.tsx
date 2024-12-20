import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText: string
}

export function InputField(props: InputFieldProps) {
    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor={props.id}>{props.labelText}</label>
            <input
                {...props}
                className='py-3 px-5 border border-[#cecece] rounded-xl text-base min-w-0 w-full'
            />
        </div>
    )
}