
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import VirtueMeter from "@/components/VirtueMeter";
import { Award, Clock, Heart, LucideIcon, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface Deed {
  id: number;
  title: string;
  description: string;
  karmaPoints: number;
  date: string;
  category: string;
}

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: LucideIcon;
  unlocked: boolean;
  progress?: number;
}

const recentDeeds: Deed[] = [
  {
    id: 1,
    title: "Morning Meditation",
    description: "Completed a 20-minute mindfulness session",
    karmaPoints: 15,
    date: "Today",
    category: "Self-Care"
  },
  {
    id: 2,
    title: "Helped Neighbor",
    description: "Assisted elderly neighbor with groceries",
    karmaPoints: 30,
    date: "Yesterday",
    category: "Community"
  },
  {
    id: 3,
    title: "Gratitude Practice",
    description: "Wrote 5 things I'm grateful for",
    karmaPoints: 10,
    date: "2 days ago",
    category: "Self-Care"
  },
  {
    id: 4,
    title: "Donation",
    description: "Contributed to local shelter",
    karmaPoints: 40,
    date: "3 days ago",
    category: "Charity"
  }
];

const achievements: Achievement[] = [
  {
    id: 1,
    name: "Morning Sage",
    description: "Complete 10 morning reflections",
    icon: Star,
    unlocked: true,
  },
  {
    id: 2,
    name: "Compassion Guide",
    description: "Perform 20 acts of kindness",
    icon: Heart,
    unlocked: false,
    progress: 65
  },
  {
    id: 3,
    name: "Wisdom Seeker",
    description: "Read 30 wisdom scrolls",
    icon: Award,
    unlocked: false,
    progress: 40
  },
  {
    id: 4,
    name: "Consistent Practitioner",
    description: "Log in for 14 consecutive days",
    icon: Clock,
    unlocked: false,
    progress: 85
  }
];

const Wallet = () => {
  const totalKarma = recentDeeds.reduce((sum, deed) => sum + deed.karmaPoints, 0);

  return (
    <div className="animate-fade-in space-y-8">
      <h1 className="font-playfair text-3xl md:text-4xl font-bold">Soul Wallet</h1>
      <p className="text-muted-foreground max-w-2xl">
        Track your spiritual journey through karma points, virtues, and achievements.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="font-playfair">Karma Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                <div className="absolute inset-0 bg-gradient-gold rounded-full opacity-20"></div>
                <div className="text-4xl font-playfair">{totalKarma}</div>
              </div>
              <p className="text-muted-foreground text-center">
                Karma points accumulate through virtuous actions and spiritual practices
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="font-playfair">Virtue Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <VirtueMeter className="p-0 bg-transparent border-0 shadow-none" />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <Tabs defaultValue="deeds">
            <CardHeader className="pb-0">
              <div className="flex justify-between items-center">
                <CardTitle className="font-playfair">Your Journey</CardTitle>
                <TabsList>
                  <TabsTrigger value="deeds">Recent Deeds</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <TabsContent value="deeds" className="mt-0">
                <div className="space-y-4">
                  {recentDeeds.map(deed => (
                    <div key={deed.id} className="flex justify-between items-start pb-4 border-b last:border-0">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{deed.title}</h3>
                          <Badge variant="outline">{deed.category}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{deed.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{deed.date}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sacred-gold font-medium">
                        <Zap className="h-4 w-4" />
                        {deed.karmaPoints}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="achievements" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map(achievement => {
                    const Icon = achievement.icon;
                    return (
                      <Card key={achievement.id} className={cn(
                        "border",
                        achievement.unlocked ? "border-sacred-gold bg-sacred-gold/5" : ""
                      )}>
                        <CardContent className="p-4 flex gap-4">
                          <div className={cn(
                            "p-2 rounded-full", 
                            achievement.unlocked ? "bg-sacred-gold text-white" : "bg-muted"
                          )}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium mb-1">{achievement.name}</h3>
                            <p className="text-muted-foreground text-sm mb-2">{achievement.description}</p>
                            {!achievement.unlocked && achievement.progress !== undefined && (
                              <div className="space-y-1">
                                <Progress value={achievement.progress} className="h-1" />
                                <p className="text-xs text-muted-foreground">{achievement.progress}% complete</p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
