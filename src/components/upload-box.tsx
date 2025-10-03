'use client';

import { useState, type DragEvent } from 'react';
import { UploadCloud } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function UploadBox() {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

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
      // Mock upload process
      toast({
        title: "File Uploaded",
        description: `"${files[0].name}" is being processed. This is a mock action.`,
      });
    }
  };
  
  const handleButtonClick = () => {
    // This is a mock action.
    toast({
        title: "Feature not implemented",
        description: "File uploads are mocked for this demonstration.",
        variant: "destructive"
      });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-4">
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={cn(
          'flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-colors',
          'border-muted-foreground/50 hover:border-accent hover:bg-accent/10',
          isDragging && 'border-accent bg-accent/10'
        )}
      >
        <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadCloud className={cn('w-10 h-10 mb-3 transition-colors', isDragging ? 'text-accent' : 'text-muted-foreground')} />
                <p className="mb-2 text-sm text-muted-foreground">
                <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">CSV or image files</p>
            </div>
        </label>
        <input id="file-upload" type="file" className="hidden" />
      </div>
      <Button onClick={handleButtonClick} className="w-full">Upload Light Curve Data</Button>
    </div>
  );
}
