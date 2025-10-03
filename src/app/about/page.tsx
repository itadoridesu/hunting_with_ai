import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  { name: 'Eyad Oumar', email: 'eiadoumer14@gmail.com', imageId: 'team-eyad' },
  { name: 'Adem Hamizi', email: 'ademhamizi2005@gmail.com', imageId: 'team-adem' },
  { name: 'Abdulrahman Zaatari', email: 'zaatariabdulrahman@gmail.com', imageId: 'team-abdulrahman' },
  { name: 'Karim Kichly', email: 'karim.kishly@gmail.com', imageId: 'team-karim' },
  { name: 'Ayman Kacan', email: 'aymanalmanar@gmail.com', imageId: 'team-ayman' },
  { name: 'Mohammed Dayeh', email: 'dayeh800@gmail.com', imageId: 'team-mohammed' },
];

export default function AboutPage() {
    const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <section className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
                    About Astro Boys
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl">
                    The minds behind the mission.
                </p>
            </section>

            <section className="mt-16">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member) => {
                        const memberImage = getImage(member.imageId);
                        return (
                            <Card key={member.name} className="text-center transition-transform transform hover:-translate-y-2">
                                <CardHeader>
                                    <Avatar className="mx-auto h-24 w-24 mb-4 border-2 border-accent">
                                        {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />}
                                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="font-headline">{member.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{member.email}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
