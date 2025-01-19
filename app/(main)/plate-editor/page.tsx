'use client'

import React from 'react'

import {
    usePlateEditor,
    Plate,
    PlateContent,
} from '@udecode/plate/react';

function page() {
    const editor = usePlateEditor();

    return (
        <Plate editor={editor}>
            <PlateContent placeholder="Type..." />
        </Plate>
    );
}

export default page