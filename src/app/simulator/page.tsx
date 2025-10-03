'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { PredictionCard } from '@/components/prediction-card';

export default function SimulatorPage() {
  const [transitDepth, setTransitDepth] = useState(0.3);
  const [orbitalPeriod, setOrbitalPeriod] = useState(30);
  const [confidence, setConfidence] = useState(0);
  const [prediction, setPrediction] = useState('Low Likelihood');

  useEffect(() => {
    // Mock logic for prediction update
    const depthScore = transitDepth * 70; // Transit depth is a strong indicator
    const periodScore = (1 - Math.abs(30 - orbitalPeriod) / 70) * 30; // Sweet spot around 30 days
    const newConfidence = Math.min(100, Math.round(depthScore + periodScore));
    setConfidence(newConfidence);

    if (newConfidence > 80) {
      setPrediction('High Candidate');
    } else if (newConfidence > 60) {
      setPrediction('Exoplanet Candidate');
    } else if (newConfidence > 30) {
      setPrediction('Potential Candidate');
    } else {
      setPrediction('Low Likelihood');
    }
  }, [transitDepth, orbitalPeriod]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline text-center mb-12">
        What If? Simulator
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Adjust Parameters</CardTitle>
            <CardDescription>
              Manipulate these values to see how they affect the AI's prediction in real-time.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <Label htmlFor="transit-depth">Transit Depth</Label>
                <span className="text-sm font-mono text-accent">{transitDepth.toFixed(2)}</span>
              </div>
              <Slider
                id="transit-depth"
                min={0}
                max={1}
                step={0.01}
                value={[transitDepth]}
                onValueChange={(value) => setTransitDepth(value[0])}
              />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <Label htmlFor="orbital-period">Orbital Period (days)</Label>
                <span className="text-sm font-mono text-accent">{orbitalPeriod.toFixed(0)}</span>
              </div>
              <Slider
                id="orbital-period"
                min={0}
                max={100}
                step={1}
                value={[orbitalPeriod]}
                onValueChange={(value) => setOrbitalPeriod(value[0])}
              />
            </div>
          </CardContent>
        </Card>
        <div className="flex items-center justify-center">
            <PredictionCard prediction={prediction} confidence={confidence} />
        </div>
      </div>
    </div>
  );
}
