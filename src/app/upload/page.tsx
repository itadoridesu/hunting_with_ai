'use client';

import { UploadBox } from '@/components/upload-box';
import { PredictionCard } from '@/components/prediction-card';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText, Image as ImageIcon } from 'lucide-react';

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
            {/* Removed images */}
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
                <li>Image must be in .fits format.</li>
                <li>Ensure the image clearly shows the light curve.</li>
                <li>Click below to select or drag and drop your image.</li>
                <li>The AI will analyze the visual pattern for transit dips.</li>
              </ol>
            </div>
            {/* Removed images */}
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
