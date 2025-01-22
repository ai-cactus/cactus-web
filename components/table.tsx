'use client'

import { ReactNode, useEffect, useRef, useState } from "react";
import { FilledButton, OutlinedButton } from "./buttons";
import Image from "next/image";
import { DocumentResponse } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

export type Document = {
    id: number,
    title: string,
    file_size: string,
    date: string,
}

export const Table = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <section className={`border border-black/10 rounded-lg ${className}`} role='table'>
            {Array.isArray(children)
                ? children.map((child, i) => <div key={i} className={`${i !== 0 ? "border-t border-t-black/10" : ''} px-10 py-2`}>{child}</div>)
                : children}
        </section>
    );
};


export const TableRow = ({ item }: { item: DocumentResponse }) => {
    const [editMode, setEditMode] = useState(false)
    const [menuIsActive, setMenuIsActive] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter()

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuIsActive(false); // Close the menu if clicking outside
            }
        };

        // Attach listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <section className='flex flex-row gap-2 items-center'>
            <div className='flex-1 flex flex-row items-center gap-2'>
                <Image
                    src='/file_ic.png'
                    alt='file'
                    width={42}
                    height={42}
                    className='h-10 w-auto'
                />
                <input
                    type="text"
                    defaultValue={item.fileName}
                    disabled={!editMode}
                    className="outline-none disabled:border-none border-2 border-black rounded bg-transparent text-black/70 font-semibold text-sm w-full"
                    onKeyDown={(e) => e.key === 'Enter' && setEditMode(false)}
                />
            </div>
            <div className='text-sm w-24'>{item.fileSize}</div>
            <div className='text-sm w-24'>{item.createdAt}</div>
            <div className='relative text-sm flex-1 flex flex-row gap-5 items-center justify-end'>
                <FilledButton onClick={() => router.push(`/documents/${item._id}`)} className='py-1 px-4 min-w-0 flex flex-row gap-1 items-center'><Image src='/chat-lines.svg' alt='analyze' width={24} height={24} className='h-6 w-auto' />Analyze</FilledButton>
                <OutlinedButton className='py-1 px-4 text-[#4b62cc] border-[#4b62cc]'>Details</OutlinedButton>
                <button onClick={() => setMenuIsActive(true)} className="px-4"><Image src="/menu.svg" alt='menu' width={24} height={24} className='h-6 w-auto' /></button>
                <div ref={menuRef} className="absolute top-0 right-0 z-20 bg-white rounded-lg shadow-lg p-2 space-y-2" style={{ display: menuIsActive ? 'block' : 'none' }}>
                    <button onClick={() => setEditMode(true)} className="p-2 rounded-lg hover:bg-gray-100 w-full text-left flex flex-row gap-1 items-center"><Image src='/edit-pencil.svg' alt='edit' width={24} height={24} className='h-6 w-auto' />Rename</button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 w-full text-left flex flex-row gap-1 items-center"><Image src='/chat-lines-black.svg' alt='version history' width={24} height={24} className='h-6 w-auto' />Version History</button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 w-full text-left flex flex-row gap-1 items-center text-red-600"><Image src='/trash.svg' alt='trash' width={24} height={24} className='h-6 w-auto' />Delete</button>
                </div>
            </div>
        </section>
    )
}
