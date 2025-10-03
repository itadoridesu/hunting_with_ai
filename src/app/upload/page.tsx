import { UploadBox } from '@/components/upload-box';
import { PredictionCard } from '@/components/prediction-card';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

const csvImages = [
    { id: 'csv-1', src: 'https://picsum.photos/seed/csv1/300/200', alt: 'CSV data example 1', hint: 'data sheet' },
    { id: 'csv-2', src: 'https://picsum.photos/seed/csv2/300/200', alt: 'CSV data example 2', hint: 'spreadsheet' },
    { id: 'csv-3', src: 'https://picsum.photos/seed/csv3/300/200', alt: 'CSV data example 3', hint: 'data table' },
    { id: 'csv-4', src: 'https://picsum.photos/seed/csv4/300/200', alt: 'CSV data example 4', hint: 'financial chart' },
];

const lightCurveImages = [
    { id: 'lc-1', src: 'https://picsum.photos/seed/lc1/300/200', alt: 'Light curve example 1', hint: 'signal graph' },
    { id: 'lc-2', src: 'https://picsum.photos/seed/lc2/300/200', alt: 'Light curve example 2', hint: 'data wave' },
    { id: 'lc-3', src: 'https://picsum.photos/seed/lc3/300/200', alt: 'Light curve example 3', hint: 'audio wave' },
    { id: 'lc-4', src: 'https://picsum.photos/seed/lc4/300/200', alt: 'Light curve example 4', hint: 'line chart' },
];


export default function UploadPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline text-center mb-4">
        Upload Data for Analysis
      </h1>
      <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Our AI can analyze raw tabular data from missions like Kepler or light curve images. Choose the appropriate uploader for your data type.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* CSV Upload Section */}
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-accent" />
                <div>
                    <CardTitle className="font-headline">Raw/Tabular Data (CSV)</CardTitle>
                    <CardDescription>For Kepler, K2, or TESS datasets</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
                <h3 className="font-semibold">Instructions:</h3>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                    <li>Ensure your file is in CSV format.</li>
                    <li>The data should contain flux values over time.</li>
                    <li>Click below to select or drag and drop your file.</li>
                    <li>Our AI will process the data to detect planetary signals.</li>
                </ol>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {csvImages.map(img => (
                    <Image key={img.id} src={img.src} alt={img.alt} width={300} height={200} data-ai-hint={img.hint} className="rounded-md object-cover aspect-video" />
                ))}
            </div>
            <UploadBox fileType="CSV" />
          </CardContent>
        </Card>

        {/* Image Upload Section */}
        <Card className="h-full">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <ImageIcon className="w-8 h-8 text-accent" />
                    <div>
                        <CardTitle className="font-headline">Light Curve Images</CardTitle>
                        <CardDescription>For visual representations of light curves</CardDescription>
                    </div>
                </div>
            </CardHeader>
          <CardContent className="space-y-6">
             <div className="space-y-2">
                <h3 className="font-semibold">Instructions:</h3>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                    <li>Image can be in PNG, JPG, or GIF format.</li>
                    <li>Ensure the image clearly shows the light curve.</li>
                    <li>Click below to select or drag and drop your image.</li>
                    <li>The AI will analyze the visual pattern for transit dips.</li>
                </ol>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {lightCurveImages.map(img => (
                    <Image key={img.id} src={img.src} alt={img.alt} width={300} height={200} data-ai-hint={img.hint} className="rounded-md object-cover aspect-video" />
                ))}
            </div>
            <UploadBox fileType="Image" />
          </CardContent>
        </Card>
      </div>

       <div className="mt-12 flex items-center justify-center">
          <PredictionCard prediction="Awaiting Data..." confidence={0} />
        </div>
    </div>
  );
}
