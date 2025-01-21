'use client'
import { FilledButton, OutlinedButton } from '@/components/buttons';
import { ErrorModal, LoadingCircleModal } from '@/components/modals';
import { UploadedDocumentContext } from '@/lib/context';
import { useFetch } from '@/lib/hooks';
import { ComplianceDocumentType, DocumentResponse } from '@/lib/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

function page() {
  const router = useRouter()
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { go, status, error: uploadError, data } = useFetch('/documents/upload');
  const {setDocuments} = useContext(UploadedDocumentContext);

  const validExtensions = ['.pdf', '.docx', '.doc', '.txt', '.rtf'];
  const invalidFileMesssage = `Invalid file format. Only ${validExtensions.join(', ')} files are allowed.`;

  const onDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragover' || e.type === 'dragenter') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];

      if (isValidFileType(droppedFile, validExtensions)) {
        setFile(droppedFile);
        setError(null);
      } else {
        setError(invalidFileMesssage);
      }

      e.dataTransfer.clearData();
    }
  }

  const onFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];

      if (isValidFileType(selectedFile, validExtensions)) {
        setFile(selectedFile);
        setError(null);
      } else {
        setError(invalidFileMesssage);
      }
    }
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      go({ method: 'POST', body: formData });
    }
  }

  useEffect(() => {
    if (status === 'success' && data && file) {
      console.log("Response", data)
      setDocuments((prev: DocumentResponse[]) => [...prev, data as DocumentResponse]);
      router.push(`/plate-editor/`);
    }
  }, [status, data, file])


  return (
    <div className=''>
      <h1 className='text-[#5A74EB] text-3xl font-semibold text-center my-12'>Upload policy</h1>
      <section
        className='relative h-[350px] w-[500px] border-2 border-dashed border-[#cccccc] rounded-xl mx-auto flex flex-col justify-center items-center'
        onDragEnter={onDrag}
        onDragOver={onDrag}
        onDragLeave={onDrag}
        onDrop={onDrop}>
        {file ? <div>
          <p>{file.name} | {formatFileSize(file.size)}</p>
        </div>
          : <div className='flex flex-col justify-center items-center'>
            <Image src={'/upload_ic.png'} alt='upload icon' width={100} height={100} className='h-16 w-16 object-contain' />
            <h2 className='text-black text-xl font-semibold mt-4'>Drag and Drop file or click to choose file</h2>
            <p className='text-[#565656] text-lg'>Supported formats: XLS, XSLX</p>
          </div>
        }
        {error && <p className='text-red-500 text-sm font-semibold'>{error}</p>}
        <input type="file" name="" id="" onChange={onFileSelection} className='absolute opacity-0 w-full h-full cursor-pointer' />
      </section>
      <section className='flex flex-row gap-4 justify-between my-12 max-w-[500px] w-full mx-auto'>
        <div className=''></div>
        <div className='flex flex-row gap-4'>
          <OutlinedButton>Cancel</OutlinedButton>
          <FilledButton
            disabled={!file}
            onClick={handleUpload}>Analyze</FilledButton>
        </div>
      </section>
      {status === "loading" && <LoadingCircleModal />}
      {<ErrorModal isOpen={status === "error"} title='Upload Error' message={JSON.stringify(uploadError)} />}
    </div>
  )
}

export default page


// Function to format the file size
const formatFileSize = (sizeInBytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;

  while (sizeInBytes >= 1024 && index < units.length - 1) {
    sizeInBytes /= 1024;
    index++;
  }

  return `${sizeInBytes.toFixed(2)} ${units[index]}`;
};

// Function to validate the file type
const isValidFileType = (file: File, validExtensions: string[]) => {

  return validExtensions.some((ext) => file.name.toLowerCase().endsWith(ext));
};