'use client';

import { useState, type DragEvent, useRef } from 'react';
import { UploadCloud } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type UploadBoxProps = {
  fileType: 'CSV' | 'Image';
};

export function UploadBox({ fileType }: UploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  // Define accepted file types
  const acceptedTypes =
    fileType === 'CSV' ? '.csv' : '.fits';

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (!file.name.toLowerCase().endsWith(acceptedTypes.split(',').map(t => t.replace('.', '')).join('|'))) {
        toast({
          title: 'Invalid file type',
          description: `Only ${acceptedTypes} files are accepted.`,
          variant: 'destructive'
        });
        return;
      }

      toast({
        title: 'File Uploaded',
        description: `"${file.name}" is being processed. This is a mock action.`,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(acceptedTypes.split(',').map(t => t.replace('.', '')).join('|'))) {
      toast({
        title: 'Invalid file type',
        description: `Only ${acceptedTypes} files are accepted.`,
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'File Uploaded',
      description: `"${file.name}" is being processed. This is a mock action.`,
    });
  };

  const handleButtonClick = () => inputRef.current?.click();

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-4">
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={cn(
          'flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors',
          'border-muted-foreground/50 hover:border-accent hover:bg-accent/10',
          isDragging && 'border-accent bg-accent/10'
        )}
        onClick={handleButtonClick}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <UploadCloud className={cn('w-10 h-10 mb-3 transition-colors', isDragging ? 'text-accent' : 'text-muted-foreground')} />
          <p className="mb-2 text-sm text-muted-foreground">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-muted-foreground">{fileType} files only</p>
        </div>
        <input
          ref={inputRef}
          id={`file-upload-${fileType}`}
          type="file"
          className="hidden"
          accept={acceptedTypes}
          onChange={handleFileChange}
        />
      </div>
      <Button onClick={handleButtonClick} className="w-full">Upload {fileType} Data</Button>
    </div>
  );
}
