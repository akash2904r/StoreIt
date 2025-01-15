"use client";

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
    ownerId: string;
    accountId: string;
    className: string;
}

export default function FileUploader({ 
    ownerId,
    accountId,
    className 
}: Props) {
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    return (
        <div {...getRootProps()} className="cursor-pointer">
            <input {...getInputProps()} />
            <Button type="button" className={cn('uploader-button', className)}>
                <Image 
                    src="/icons/upload.svg"
                    alt="upload"
                    width={24}
                    height={24}
                />
                <p>Upload</p>
            </Button>
            {files.length > 0 && (
                <ul className="uploader-preview-list">
                    <h4 className="h4 text-light-100">Uploading</h4>

                    {files.map((file, index) => {
                        const { type, extension } = getFileType(file.name);
                    })}
                </ul>
            )}

            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}