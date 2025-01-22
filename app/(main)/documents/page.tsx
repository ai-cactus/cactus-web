'use client'

import { FilledButton, OutlinedButton } from '@/components/buttons'
import { Table, TableRow } from '@/components/table';
import { UploadedDocumentContext } from '@/lib/context';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'

function page() {
    const {documents} = useContext(UploadedDocumentContext);
    return (
        <div className='px-10 py-5'>
            <section className='flex flex-row gap-4 justify-between items-center'>
                <div>
                    <h1 className='text-[#5A74EB] text-3xl font-semibold mb-2'>Uploaded Documents</h1>
                    <p className='text-black/70'>Documents and attachments that have been uploaded.</p>
                </div>
                <div className='flex flex-row gap-3'>
                    <OutlinedButton className='border-[#4b62cc] text-[#4b62cc] flex flex-row items-center gap-1'><Image src='/download.svg' alt='download' width={24} height={24} className='h-6 w-auto' /> Download all</OutlinedButton>
                    <Link href={"/dashboard"}><FilledButton className='flex flex-row items-center gap-1'><Image src='/plus.svg' alt='upload' width={24} height={24} className='h-6 w-auto' />Upload New Document</FilledButton></Link>
                </div>
            </section>
            <Table className='my-8'>
                <section className='flex flex-row gap-2 text-black/70 font-semibold'>
                    <div className='flex-1 flex flex-row gap-1 items-end'>Document name <Image src='/filter_ic.svg' alt='filter' width={18} height={18} /></div>
                    <div className='w-24 flex flex-row gap-1 items-end'>File size <Image src='/filter_ic.svg' alt='filter' width={18} height={18} /></div>
                    <div className='w-24 flex flex-row gap-1 items-end'>Date <Image src='/filter_ic.svg' alt='filter' width={18} height={18} /></div>
                    <div className='flex-1 flex flex-row gap-1 items-end'></div>
                </section>
                {...documents.map((doc, i) => <TableRow key={i} item={doc} />)}
            </Table>
        </div >
    )
}

export default page



// const documents: Document[] = [
//     {
//         id: 1,
//         title: "Health-compliance-document.pdf",
//         file_size: "1.2 MB",
//         date: "Jan 12, 2022",
//     },
//     {
//         id: 2,
//         title: "Policy_Handbook_2025.pdf",
//         file_size: "256 KB",
//         date: "Jul 12, 2023",
//     },
//     {
//         id: 3,
//         title: "Health-compliance-document.pdf",
//         file_size: "1.2 MB",
//         date: "Jan 12, 2022",
//     },
//     {
//         id: 4,
//         title: "Policy_Handbook_2025.pdf",
//         file_size: "256 KB",
//         date: "Jul 12, 2023",
//     },
//     {
//         id: 5,
//         title: "Health-compliance-document.pdf",
//         file_size: "1.2 MB",
//         date: "Jan 12, 2022",
//     },
//     {
//         id: 6,
//         title: "Policy_Handbook_2025.pdf",
//         file_size: "256 KB",
//         date: "Jul 12, 2023",
//     },
//     {
//         id: 7,
//         title: "Health-compliance-document.pdf",
//         file_size: "1.2 MB",
//         date: "Jan 12, 2022",
//     },
//     {
//         id: 8,
//         title: "Policy_Handbook_2025.pdf",
//         file_size: "256 KB",
//         date: "Jul 12, 2023",
//     },
//     {
//         id: 9,
//         title: "Health-compliance-document.pdf",
//         file_size: "1.2 MB",
//         date: "Jan 12, 2022",
//     },
//     {
//         id: 10,
//         title: "Policy_Handbook_2025.pdf",
//         file_size: "256 KB",
//         date: "Jul 12, 2023",
//     },
//     {
//         id: 11,
//         title: "Health-compliance-document.pdf",
//         file_size: "1.2 MB",
//         date: "Jan 12, 2022",
//     },
//     {
//         id: 12,
//         title: "Policy_Handbook_2025.pdf",
//         file_size: "256 KB",
//         date: "Jul 12, 2023",
//     },
// ]