import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Zap, Palette, GraduationCap } from 'lucide-react';
import heroAvatar from '@/assets/hero-avatar.jpg';
import particlesBg from '@/assets/particles-bg.jpg';

const taglines = [
  { text: "AI Architect", icon: Zap },
  { text: "Design Alchemist", icon: Palette },
  { text: "Edu-Futurist", icon: GraduationCap }
];

export const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = taglines[currentTagline].icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${particlesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Neural network lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity="0.1"
              className="animate-neural-pulse"
              style={{ animationDelay: `${Math.random() * 3}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Hero avatar */}
        <div className="mb-8 relative">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <img
              src={heroAvatar}
              alt="Aashay Chahande - AI Engineer & Creative Visionary"
              className="w-full h-full object-cover rounded-full glass-morphism neon-glow-primary animate-hologram-flicker"
            />
            
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-secondary rounded-full neon-glow-secondary" />
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 bg-accent rounded-full neon-glow-accent" />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full neon-glow-primary" />
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-6 h-6 bg-secondary rounded-full neon-glow-secondary" />
            </div>
          </div>
        </div>

        {/* Name and title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text-neural">
          Aashay Chahande
        </h1>
        
        {/* Dynamic tagline */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <div className="flex items-center gap-4 text-2xl md:text-4xl font-semibold transition-all duration-500">
            <CurrentIcon className="w-8 h-8 md:w-12 md:h-12 text-primary animate-glow-pulse" />
            <span className="gradient-text-primary">
              {taglines[currentTagline].text}
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Where <span className="gradient-text-primary font-semibold">AI Engineering</span> meets{' '}
          <span className="gradient-text-creative font-semibold">Artistic Vision</span>.
          Building the future through the lens of technology and creativity.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 neon-glow-primary transition-all duration-300 text-lg px-8 py-6">
            Explore My Universe
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-secondary text-secondary hover:bg-secondary/10 neon-glow-secondary transition-all duration-300 text-lg px-8 py-6"
          >
            Download Resume
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary mx-auto animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};
