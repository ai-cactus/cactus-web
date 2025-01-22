'use client'

import React, { useContext, useEffect, useState } from 'react'
import mammoth from 'mammoth';
import { useParams } from 'next/navigation';

import {
    usePlateEditor,
    Plate,
    PlateContent,
    createPlatePlugin,
} from '@udecode/plate/react';
import {
    BoldPlugin,
    ItalicPlugin,
    UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import { DocxPlugin } from '@udecode/plate-docx';
import { JuicePlugin } from '@udecode/plate-juice';
import { UploadedDocumentContext } from '@/lib/context';
import { ErrorModal, LoadingCircleModal } from '@/components/modals';
import { set } from 'mongoose';

const ImagePlugin = createPlatePlugin({
    key: 'image',
    node: {
        isElement: true,
        isVoid: true,
        type: 'img',
    },
});

function page() {
    const { documents } = useContext(UploadedDocumentContext);
    const { documentId } = useParams()
    const [fileData, setFIleData] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const editor = usePlateEditor({
        value: fileData,
        plugins: [
            DocxPlugin,
            JuicePlugin,
            BoldPlugin,
            ItalicPlugin,
            UnderlinePlugin,
        ]
    }, [fileData]);

    useEffect(() => {
        (async () => {
            const document = documents.find(v => v._id === documentId)
            if (document === undefined) {
                setError(`Document (${documentId}) not found`)
                return;
            };
            setLoading(true)
            let url = new URL(document.storagePath, 'http://localhost:9000/public/')
            console.log("URL", url)
            try {
                const res = await fetch(url)
                const blob = await res.blob()
                const data = await loadDocx(blob)
                setFIleData(data)
            } catch (error) {
                setError(error as string)
            }
            setLoading(false)
        })();
    }, [documents, documentId])

    return (
        <div className='relative'>
            <div className='mr-[250px] relative min-h-full'>
                {error && <ErrorModal title='Error' message={error} isOpen={true} />}
                {loading && <LoadingCircleModal />}
                {!loading && <Plate editor={editor} onChange={console.log}>
                    <PlateContent />
                </Plate>}
            </div>
            <aside className='bg-white w-[250px] fixed -z-10 h-[calc(100vh-64px)] top-[64px] right-0 border-l-black/10 border-l'>
                Side Pane
            </aside>
        </div>
    );
}

export default page


async function loadDocx(file: Blob) {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer }, {});
    return result.value;
}

// Use the HTML content in your Plate.js editor
