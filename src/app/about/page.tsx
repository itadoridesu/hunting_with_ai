'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  { name: 'Eyad Oumar', email: 'eiadoumer14@gmail.com', avatarId: 'team-eyad' },
  { name: 'Adem Hamizi', email: 'ademhamizi2005@gmail.com', avatarId: 'team-adem' },
  { name: 'Abdulrahman Zaatari', email: 'zaatariabdulrahman@gmail.com', avatarId: 'team-abdulrahman' },
  { name: 'Karim Kichly', email: 'karim.kishly@gmail.com', avatarId: 'team-karim' },
  { name: 'Ayman Kacan', email: 'aymanalmanar@gmail.com', avatarId: 'team-ayman' },
  { name: 'Mohammed Dayeh', email: 'dayeh800@gmail.com', avatarId: 'team-mohammed' },
];

export default function AboutPage() {
    const logoImage = PlaceHolderImages.find(img => img.id === 'team-logo');
    
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline text-center mb-6">
        About <span className="text-accent">Astro Boys</span>
      </h1>
      
      <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl text-center mb-12">
        A project by <span className="font-bold text-accent">Astro Boys</span> to revolutionize exoplanet discovery using AI.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch max-w-6xl mx-auto h-full">
        
        {/* Team Members Section */}
        <Card className="lg:col-span-2 flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline">Our Team</CardTitle>
            <CardDescription>The minds behind the mission.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="space-y-6 h-full">
              {teamMembers.map((member) => {
                const memberImage = PlaceHolderImages.find(img => img.id === member.avatarId);
                return (
                    <div key={member.name} className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                            {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />}
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{member.name}</p>
                            <a href={`mailto:${member.email}`} className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                {member.email}
                            </a>
                        </div>
                    </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Logo and Contact Section */}
        <div className="flex flex-col gap-8 h-full">
            <Card className="flex-1 flex flex-col">
                <CardHeader className="items-center text-center">
                    <CardTitle className="font-headline">Team Logo</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex justify-center items-center p-6">
                    {logoImage && (
                        <div className="flex justify-center items-center h-full w-full">
                            <Image
                                src={logoImage.imageUrl}
                                alt="Astro Boys Logo"
                                width={180}
                                height={180}
                                className="rounded-full shadow-lg shadow-cyan-500/20"
                                data-ai-hint={logoImage.imageHint}
                            />
                        </div>
                    )}
                </CardContent>
            </Card>

            <Card className="flex-1">
                <CardHeader>
                    <CardTitle className="font-headline">Support & Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="font-semibold mb-2">WhatsApp Support</h3>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:underline">
                            <Phone className="w-5 h-5" />
                            <span>+1 (234) 567-890</span>
                        </a>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold">Send a Message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <Input type="email" placeholder="Your Email" required />
                            <Textarea placeholder="Your message..." required />
                            <Button type="submit" className="w-full">Send Email</Button>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}