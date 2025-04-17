
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import QuoteOfTheDay from "@/components/QuoteOfTheDay";
import VirtueMeter from "@/components/VirtueMeter";
import PrayerCandle from "@/components/PrayerCandle";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, SunMoon } from "lucide-react";
import { useState } from "react";

// Sample data for rituals
const dailyRituals = [
  {
    id: 1,
    title: "Morning Reflection",
    description: "Begin your day with a 5-minute meditation on gratitude.",
    icon: <SunMoon className="h-5 w-5 text-sacred-gold" />,
    completed: false
  },
  {
    id: 2,
    title: "Mindful Breathing",
    description: "Take 10 deep breaths, focusing on each inhale and exhale.",
    icon: <Clock className="h-5 w-5 text-sacred-gold" />,
    completed: false
  },
  {
    id: 3,
    title: "Compassionate Action",
    description: "Perform one act of kindness for someone else today.",
    icon: <CheckCircle2 className="h-5 w-5 text-sacred-gold" />,
    completed: false
  }
];

const wisdomScrolls = [
  {
    id: 1,
    title: "The Nature of Suffering",
    excerpt: "The root of suffering is attachment to transient things and ignorance of the true nature of reality.",
    tradition: "Buddhism"
  },
  {
    id: 2,
    title: "Practicing Virtue",
    excerpt: "Virtue is not an act but a habit. The good of man is a working of the soul in the way of excellence.",
    tradition: "Aristotelian"
  },
  {
    id: 3,
    title: "Finding Inner Peace",
    excerpt: "Peace comes from within. Do not seek it without. If your mind is at peace, you will find peace everywhere you go.",
    tradition: "Buddhist"
  },
  {
    id: 4,
    title: "The Power of Now",
    excerpt: "The present moment is all you ever have. Make the Now the primary focus of your life.",
    tradition: "Contemporary"
  }
];

const RitualDashboard = () => {
  const [rituals, setRituals] = useState(dailyRituals);
  const { toast } = useToast();

  const completeRitual = (id: number) => {
    setRituals(rituals.map(ritual => 
      ritual.id === id ? { ...ritual, completed: true } : ritual
    ));
    toast({
      title: "Ritual completed",
      description: "Your progress has been recorded.",
    });
  };

  const handleLightCandle = () => {
    toast({
      title: "Candle lit",
      description: "Your intention has been set.",
    });
  };

  return (
    <div className="animate-fade-in space-y-8">
      <h1 className="font-playfair text-3xl md:text-4xl font-bold">Ritual Dashboard</h1>
      <p className="text-muted-foreground max-w-2xl">
        Welcome to your daily ritual space. Here you can find practices, wisdom, and tools 
        to nurture your spiritual growth.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="rituals">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="rituals">Daily Rituals</TabsTrigger>
              <TabsTrigger value="wisdom">Wisdom Scrolls</TabsTrigger>
            </TabsList>
            <TabsContent value="rituals" className="space-y-4 mt-6">
              {rituals.map(ritual => (
                <Card key={ritual.id}>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{ritual.icon}</div>
                      <div>
                        <h3 className="font-playfair text-lg font-medium mb-1">{ritual.title}</h3>
                        <p className="text-muted-foreground text-sm">{ritual.description}</p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => completeRitual(ritual.id)} 
                      disabled={ritual.completed}
                      variant={ritual.completed ? "outline" : "default"}
                    >
                      {ritual.completed ? "Completed" : "Complete"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="wisdom" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair">Infinite Wisdom</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-6">
                      {wisdomScrolls.map(scroll => (
                        <div key={scroll.id} className="pb-4 border-b last:border-0">
                          <h3 className="font-playfair text-lg font-medium mb-2">{scroll.title}</h3>
                          <p className="text-muted-foreground mb-2 italic">"{scroll.excerpt}"</p>
                          <div className="text-sm text-sacred-gold">{scroll.tradition} wisdom</div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <QuoteOfTheDay />
        </div>

        <div className="space-y-6">
          <VirtueMeter />
          
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="font-playfair text-center">Set an Intention</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <PrayerCandle 
                onLight={handleLightCandle}
                intention="For inner peace and compassion to all beings"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RitualDashboard;
