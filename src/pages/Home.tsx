
import { Button } from "@/components/ui/button";
import QuoteOfTheDay from "@/components/QuoteOfTheDay";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Calendar, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
          Cathedral of <span className="text-sacred-gold">Compassion</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          A sacred-tech platform that helps the destitute rise through tools inspired by spirituality,
          religion, philosophy, and history.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button size="lg" asChild>
            <Link to="/rituals">
              Begin the Journey to Dignity <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/mentors">
              Find a Compassion Mentor <User className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Quote of the day */}
      <QuoteOfTheDay className="max-w-2xl mx-auto" />

      {/* Features grid */}
      <section className="py-12">
        <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-center mb-8">
          Begin Your Spiritual Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Daily Rituals"
            description="Cultivate meaning through daily spiritual micro-practices designed for growth."
            icon={<Calendar className="h-10 w-10 text-sacred-gold" />}
            href="/rituals"
          />
          <FeatureCard
            title="Philosophical Wisdom"
            description="Explore teachings from Stoicism, Ubuntu, Taoism, and other traditions."
            icon={<BookOpen className="h-10 w-10 text-sacred-gold" />}
            href="/philosophy"
          />
          <FeatureCard
            title="Compassion Network"
            description="Connect with mentors who guide you through your journey to dignity."
            icon={<Heart className="h-10 w-10 text-sacred-gold" />}
            href="/mentors"
          />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description, icon, href }: { 
  title: string, 
  description: string, 
  icon: React.ReactNode,
  href: string
}) => (
  <Card className="overflow-hidden glass-card hover:shadow-md transition-all">
    <CardContent className="p-6">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="font-playfair text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="ghost" className="group" asChild>
        <Link to={href}>
          Explore 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

export default Home;
