import { UploadBox } from '@/components/upload-box';
import { PredictionCard } from '@/components/prediction-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UploadPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline text-center mb-12">
        Upload Data for Analysis
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Upload Light Curve Data</CardTitle>
          </CardHeader>
          <CardContent>
            <UploadBox />
          </CardContent>
        </Card>
        <div className="flex items-center justify-center">
          <PredictionCard prediction="Exoplanet Candidate" confidence={87} />
        </div>
      </div>
    </div>
  );
}
