import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code, 
  Palette, 
  Users,
  Brain,
  Heart,
  Zap
} from 'lucide-react';

const timelineData = [
  {
    year: '2019',
    type: 'academic',
    title: 'Started Computer Engineering',
    description: 'Started freelance as User interface designer, discovering the creative sides',
    icon: GraduationCap
  },
  {
    year: '2021',
    type: 'creative',
    title: 'Design Awakening',
    description: 'Started freelance graphic design, discovering the creative side',
    icon: Palette
  },
  {
    year: '2022',
    type: 'academic',
    title: 'AI Specialization',
    description: 'Deep dive into Machine Learning and Neural Networks',
    icon: Brain
  },
  {
    year: '2022',
    type: 'leadership',
    title: 'E-Cell Leadership',
    description: 'Leading entrepreneurship initiatives and building communities',
    icon: Users
  },
  {
    year: '2023',
    type: 'technical',
    title: 'Microsoft AI Internship',
    description: 'Built AI solutions for real-world problems',
    icon: Briefcase
  },
  {
    year: '2024',
    type: 'creative',
    title: 'Design-Tech Fusion',
    description: 'Merged AI engineering with creative design thinking',
    icon: Zap
  }
];

const personalityTraits = [
  { 
    category: 'AI Engineering', 
    skills: ['Neural Networks', 'Deep Learning', 'Computer Vision', 'NLP'],
    color: 'primary'
  },
  { 
    category: 'Design Thinking', 
    skills: ['UI/UX Design', 'Visual Communication', 'Creative Problem Solving', 'Brand Strategy'],
    color: 'secondary'
  },
  { 
    category: 'Education & Leadership', 
    skills: ['Community Building', 'Mentoring', 'Public Speaking', 'Team Leadership'],
    color: 'accent'
  }
];

export const AboutSection = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold gradient-text-neural mb-6">
            The Origin Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through parallel dimensions of technology and creativity,
            where each milestone shaped the fusion of AI engineering and artistic vision.
          </p>
        </div>

        {/* DNA Double Helix Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text-primary">
            Timeline DNA: The Evolution
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Central helix line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-50" />
            
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    isLeft ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* Timeline item */}
                  <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card 
                      className={`glass-morphism p-6 cursor-pointer transition-all duration-300 ${
                        selectedYear === item.year ? 'neon-glow-primary scale-105' : 'hover:neon-glow-secondary'
                      }`}
                      onClick={() => setSelectedYear(selectedYear === item.year ? null : item.year)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-full ${
                          item.type === 'academic' ? 'bg-primary/20 text-primary' :
                          item.type === 'creative' ? 'bg-secondary/20 text-secondary' :
                          item.type === 'leadership' ? 'bg-accent/20 text-accent' :
                          'bg-primary/20 text-primary'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-muted-foreground">{item.year}</span>
                      </div>
                      <h4 className="text-lg font-bold mb-2">Started freelancing</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>

                  {/* Central node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary neon-glow-primary animate-glow-pulse" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Personality Venn Diagram */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text-creative">
            Personality Fusion Matrix
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {personalityTraits.map((trait, index) => (
              <Card 
                key={index}
                className="glass-morphism p-6 hover:neon-glow-primary transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${trait.color}/20 flex items-center justify-center group-hover:animate-glow-pulse`}>
                    {trait.category === 'AI Engineering' && <Brain className={`w-8 h-8 text-${trait.color}`} />}
                    {trait.category === 'Design Thinking' && <Palette className={`w-8 h-8 text-${trait.color}`} />}
                    {trait.category === 'Education & Leadership' && <Heart className={`w-8 h-8 text-${trait.color}`} />}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{trait.category}</h4>
                </div>
                
                <div className="space-y-2">
                  {trait.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className={`w-full justify-center py-2 border-${trait.color}/30 text-${trait.color} hover:bg-${trait.color}/10 transition-all duration-300`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Intersection highlight */}
        <div className="text-center">
          <Card className="glass-morphism p-8 max-w-3xl mx-auto neon-glow-accent">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-accent animate-glow-pulse" />
              <h4 className="text-2xl font-bold gradient-text-creative">The Fusion Zone</h4>
              <Zap className="w-8 h-8 text-accent animate-glow-pulse" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Where AI algorithms meet artistic intuition, where technical precision enhances creative expression,
              and where leadership bridges the gap between innovation and impact. This is where the magic happens.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
