import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Search, Filter, Heart, MessageSquare } from "lucide-react";
import { useState } from "react";
import PrayerCandle from "@/components/PrayerCandle";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface Mentor {
  id: number;
  name: string;
  title: string;
  faith: string;
  rating: number;
  image: string;
  specialties: string[];
  bio: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Zen Mindfulness Guide",
    faith: "Buddhism",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=256",
    specialties: ["Meditation", "Mindfulness", "Grief"],
    bio: "Zen practitioner with 12 years of experience guiding others through mindfulness practices. Specializes in helping people find peace during difficult transitions."
  },
  {
    id: 2,
    name: "Michael Thompson",
    title: "Compassionate Listening Counselor",
    faith: "Christianity",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=256",
    specialties: ["Forgiveness", "Spiritual Growth", "Recovery"],
    bio: "Former pastor who now dedicates his life to compassionate listening and guidance. Creates space for healing through authentic spiritual connection."
  },
  {
    id: 3,
    name: "Amara Okafor",
    title: "Ubuntu Philosophy Teacher",
    faith: "Indigenous Wisdom",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=256",
    specialties: ["Community Building", "Identity", "Purpose"],
    bio: "Scholar of African philosophy with expertise in Ubuntu principles. Helps individuals reconnect with their purpose through community and ancestral wisdom."
  },
  {
    id: 4,
    name: "Rabbi David Goldstein",
    title: "Wisdom Tradition Scholar",
    faith: "Judaism",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256",
    specialties: ["Sacred Texts", "Life Transitions", "Ethics"],
    bio: "Rabbi and scholar dedicated to making ancient wisdom relevant to modern challenges. Creates bridges between tradition and contemporary life."
  }
];

const Mentors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredMentors = mentors.filter(
    mentor => 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.faith.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCandleLight = (mentorName: string) => {
    toast({
      title: "Candle lit for " + mentorName,
      description: "Your intention has been sent.",
    });
  };

  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Compassion Mentors</h1>
        <p className="text-muted-foreground max-w-2xl">
          Connect with spiritual guides across various wisdom traditions who can help you navigate 
          your journey toward dignity and purpose.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, faith, or specialty..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Traditions</TabsTrigger>
          <TabsTrigger value="buddhism">Buddhism</TabsTrigger>
          <TabsTrigger value="christianity">Christianity</TabsTrigger>
          <TabsTrigger value="indigenous">Indigenous</TabsTrigger>
          <TabsTrigger value="judaism">Judaism</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map(mentor => (
              <MentorCard 
                key={mentor.id} 
                mentor={mentor} 
                onLightCandle={handleCandleLight} 
              />
            ))}
          </div>
        </TabsContent>
        {/* Other tabs would filter by tradition */}
        {["buddhism", "christianity", "indigenous", "judaism"].map(faith => (
          <TabsContent key={faith} value={faith} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors
                .filter(m => m.faith.toLowerCase() === faith)
                .map(mentor => (
                  <MentorCard 
                    key={mentor.id} 
                    mentor={mentor} 
                    onLightCandle={handleCandleLight} 
                  />
                ))
              }
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

const MentorCard = ({ mentor, onLightCandle }: { 
  mentor: Mentor, 
  onLightCandle: (name: string) => void
}) => (
  <Card className="overflow-hidden glass-card">
    <CardContent className="p-0">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={mentor.image} 
          alt={mentor.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center text-white">
            <Star className="fill-sacred-gold text-sacred-gold h-4 w-4 mr-1" />
            <span>{mentor.rating}</span>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-playfair text-xl font-medium mb-1">{mentor.name}</h3>
          <p className="text-muted-foreground text-sm mb-2">{mentor.title}</p>
          <Badge variant="outline">{mentor.faith}</Badge>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {mentor.specialties.map(specialty => (
            <Badge key={specialty} variant="secondary">{specialty}</Badge>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">{mentor.bio}</p>
        
        <div className="flex gap-2">
          <Button variant="default" className="flex-1">
            <MessageSquare className="mr-2 h-4 w-4" /> Connect
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Heart className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-playfair text-center">Light a Candle for {mentor.name}</DialogTitle>
              </DialogHeader>
              <div className="flex justify-center">
                <PrayerCandle 
                  onLight={() => onLightCandle(mentor.name)}
                  intention={`Sending gratitude to ${mentor.name} for their guidance`}
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Mentors;
