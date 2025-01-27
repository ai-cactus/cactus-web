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
import { BiInfoCircle } from 'react-icons/bi';
import { MdArrowBackIos } from 'react-icons/md';
import { FilledButton } from '@/components/buttons';
import { DocumentResponse } from '@/lib/types';
import Link from 'next/link';
import { useFetch } from '@/lib/hooks';

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
    const [doc, setDoc] = useState<DocumentResponse | null>(null)
    const [fileData, setFIleData] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [analysisType, setAnalysisType] = useState<"all" | "page">("all")
    const [analyzeFrom, setAnalyzeFrom] = useState<number | undefined>(1)
    const [analyzeTo, setAnalyzeTo] = useState<number | undefined>(undefined)
    const { go, data, status, error: analysisError } = useFetch(analysisType === "all" ? "/documents/analyze/" : "/documents/page/analyze/")
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
            setDoc(document)
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

    console.log("Data", data)

    return (
        <div className='relative'>
            <div className='mr-[285px] relative min-h-full p-4 pt-0'>
                <header className='flex flex-row justify-between items-center py-4 bg-white sticky top-[64px] z-10'>
                    <div>
                        <div className='flex flex-row items-center gap-2 mb-2'>
                            <Link href={"/documents"} className='w-8 h-8 border border-blue-600 rounded-full flex justify-center items-center'><MdArrowBackIos className='text-blue-600' /></Link>
                            <h1 className='text-blue-600 text-2xl font-semibold leading-none'>{doc?.fileName}</h1>
                        </div>
                        <p className='text-sm text-black/40'>Review your document and select pages to analyze.</p>
                    </div>
                    <div>
                        <FilledButton onClick={() => {
                            let body: object = { documentId }
                            if (analysisType === "page") {
                                body = { ...body, analyzeFrom, analyzeTo }
                            }
                            go({
                                method: 'POST',
                                body: JSON.stringify(body),
                            })
                        }}>Analyze Now</FilledButton>
                    </div>
                </header>
                {error && <ErrorModal title='Error' message={error} isOpen={true} />}
                {status === "error" && <ErrorModal title='Analysis Error' message={analysisError} isOpen={true} />}
                {(loading || status === "loading") && <LoadingCircleModal />}
                {!(loading || status === "loading") && <Plate editor={editor} onChange={console.log}>
                    <PlateContent />
                </Plate>}
            </div>
            <aside className='flex flex-col bg-white w-[285px] fixed h-[calc(100vh-64px)] top-[64px] right-0 border-l-black/10 border-l px-4 py-5'>
                <section className='flex-1 overflow-y-auto'>
                    <h2 className='text-blue-600 text-base font-semibold pb-4 mb-4 border-b border-b-black/10'>Your Compliance Score: 85%</h2>
                    <div className='uppercase bg-red-100 border border-red-400 p-3 text-xs flex flex-row items-center gap-1 rounded-md mb-4'><BiInfoCircle color='red' />6 conflicts found!</div>
                    {/* <div className='uppercase bg-red-100 border border-red-400 p-3 text-xs flex flex-row items-center gap-1 rounded-md'><BiInfoCircle color='red' />Conflicts found on Pages 2 and 5.</div> */}
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aspernatur sapiente nobis perferendis. Modi quas quisquam dolorum, amet fugit excepturi ad qui ab itaque,
                        at veritatis nostrum illum cupiditate facere? Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Consequatur, culpa. Iure nam voluptatibus,
                        aperiam quaerat expedita optio eligendi culpa minus blanditiis recusandae
                        dolorum perspiciatis nulla perferendis ratione ipsam nisi tempore.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
                        repellat exercitationem tempore nobis, perferendis nemo aut optio quae
                        beatae ex nisi quasi quas quaerat iure! Est sunt cum fugiat veniam!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque iste facere quibusdam ratione distinctio impedit!
                        Voluptatem sit explicabo cupiditate, molestiae aperiam non impedit
                        corrupti at, quas praesentium id? Illo, voluptatibus.
                    </p>
                </section>

                <section className='mt-4'>
                    <h3 className='text-blue-600 text-base font-semibold mb-4'>Select Pages to Analyze</h3>
                    <div className='flex flex-col gap-2'>
                        <label className='flex items-center gap-2'>
                            <input type='radio'
                                name='analysis-type'
                                checked={analysisType === "all"}
                                onChange={(e) => e.target.checked && setAnalysisType("all")}
                                className='form-checkbox'
                            />
                            <span className='text-sm'>Analyze All Pages</span>
                        </label>
                        <label className='flex items-center gap-2'>
                            <input type='radio'
                                name='analysis-type'
                                checked={analysisType === "page"}
                                onChange={(e) => e.target.checked && setAnalysisType("page")}
                                className='form-checkbox'
                            />
                            <span className='text-sm'>Specify Page Range:</span>
                        </label>
                        {(analysisType === "page") && <div className='flex flex-col gap-2'>
                            <p className='text-sm'>Specify Page Range: </p>
                            <div className='flex flex-row gap-2'>
                                <label className='flex-1 flex flex-row items-center gap-2'>
                                    <span className='text-sm'>From</span>
                                    <input type='number'
                                        value={analyzeFrom}
                                        onChange={(e) => setAnalyzeFrom(parseInt(e.target.value))}
                                        className='border border-black/10 rounded min-w-0 w-full'
                                    />
                                </label>
                                <label className='flex-1 flex flex-row items-center gap-2'>
                                    <span className='text-sm'>To</span>
                                    <input type='number'
                                        value={analyzeTo}
                                        onChange={(e) => setAnalyzeTo(parseInt(e.target.value))}
                                        className='border border-black/10 rounded min-w-0 w-full'
                                    />
                                </label>
                            </div>
                        </div>}
                    </div>
                </section>
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
