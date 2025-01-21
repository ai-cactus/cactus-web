'use client'

import React, { useContext, useEffect, useState } from 'react'

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
    const [fileData, setFIleData] = useState('')
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
        if (documents.length === 0) return;
        let url = new URL(documents[documents.length - 1].storagePath, 'http://localhost:9000/public/')
        console.log("URL", url)
        fetch(url)
            .then(response => response.blob())
            .then(blob => loadDocx(blob))
            .then(data => setFIleData(data));
    }, [documents])

    return (
        <div>
            <Plate editor={editor} onChange={console.log}>
                <PlateContent />
            </Plate>
        </div>
    );
}

export default page


import mammoth from 'mammoth';
import { readFileSync } from 'fs';

async function loadDocx(file: Blob) {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer }, {});
    return result.value;
}

// Use the HTML content in your Plate.js editor
