import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Palette, 
  Users, 
  Calendar,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';

const universes = [
  {
    id: 'tech',
    title: 'Tech Universe',
    subtitle: 'AI Engineering & Development',
    color: 'primary',
    experiences: [
      {
        company: 'Microsoft',
        role: 'AI Research Intern',
        period: '2023 - Present',
        description: 'Developed cutting-edge AI solutions for healthcare applications, working with neural networks and computer vision.',
        technologies: ['Python', 'PyTorch', 'Computer Vision', 'Azure AI'],
        achievements: ['Improved model accuracy by 23%', 'Deployed 3 production models'],
        icon: Building2
      },
      {
        company: 'Phoenix Algo',
        role: 'Machine Learning Engineer',
        period: '2022 - 2023',
        description: 'Built automated trading algorithms using deep learning and quantitative analysis.',
        technologies: ['TensorFlow', 'Pandas', 'Algorithmic Trading', 'Financial Modeling'],
        achievements: ['Generated 15% better returns', 'Reduced processing time by 40%'],
        icon: Code
      }
    ]
  },
  {
    id: 'creative',
    title: 'Design Universe',
    subtitle: 'Visual Communication & Creativity',
    color: 'secondary',
    experiences: [
      {
        company: 'Freelance Design Studio',
        role: 'UI/UX Designer & Brand Strategist',
        period: '2021 - Present',
        description: 'Creating digital experiences that bridge technology and human emotion through thoughtful design.',
        technologies: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'Design Systems'],
        achievements: ['50+ successful projects', 'Client satisfaction: 98%'],
        icon: Palette
      },
      {
        company: 'Creative Collective',
        role: 'Visual Communication Lead',
        period: '2022 - 2023',
        description: 'Led creative campaigns that transformed brand narratives through innovative visual storytelling.',
        technologies: ['Brand Strategy', 'Visual Design', 'Motion Graphics', 'Creative Direction'],
        achievements: ['Increased brand engagement by 150%', 'Award-winning campaigns'],
        icon: Award
      }
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership Universe',
    subtitle: 'Community Building & Education',
    color: 'accent',
    experiences: [
      {
        company: 'E-Cell PICT',
        role: 'Executive Committee Member',
        period: '2022 - Present',
        description: 'Building entrepreneurial ecosystems and fostering innovation among student communities.',
        technologies: ['Event Management', 'Community Building', 'Public Speaking', 'Strategic Planning'],
        achievements: ['Organized 20+ events', 'Mentored 100+ students'],
        icon: Users
      },
      {
        company: 'Internshala',
        role: 'Student Partner & Campus Ambassador',
        period: '2021 - 2022',
        description: 'Bridged the gap between students and industry through educational initiatives and career guidance.',
        technologies: ['Educational Technology', 'Career Counseling', 'Workshop Facilitation', 'Partnership Development'],
        achievements: ['Reached 1000+ students', 'Top performer recognition'],
        icon: GraduationCap
      }
    ]
  }
];

export const ExperienceSection = () => {
  const [activeUniverse, setActiveUniverse] = useState('tech');

  const currentUniverse = universes.find(u => u.id === activeUniverse)!;

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold gradient-text-neural mb-6">
            The Multiverse
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Parallel dimensions of experience where technology, creativity, and leadership
            intersect to create innovative solutions and meaningful impact.
          </p>
        </div>

        {/* Universe selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {universes.map((universe) => (
            <Button
              key={universe.id}
              onClick={() => setActiveUniverse(universe.id)}
              variant={activeUniverse === universe.id ? "default" : "outline"}
              size="lg"
              className={`
                transition-all duration-500 px-8 py-4 text-lg
                ${activeUniverse === universe.id 
                  ? `bg-${universe.color} hover:bg-${universe.color}/90 neon-glow-${universe.color}` 
                  : `border-${universe.color}/30 text-${universe.color} hover:bg-${universe.color}/10 hover:neon-glow-${universe.color}`
                }
              `}
            >
              <div className="text-center">
                <div className="font-bold">{universe.title}</div>
                <div className="text-sm opacity-80">{universe.subtitle}</div>
              </div>
            </Button>
          ))}
        </div>

        {/* Active universe content */}
        <div className="relative">
          {/* Universe background effect */}
          <div className="absolute inset-0 opacity-5">
            <div className={`w-full h-full bg-gradient-to-br from-${currentUniverse.color} to-transparent rounded-3xl`} />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className={`text-4xl font-bold mb-4 gradient-text-${currentUniverse.color}`}>
                {currentUniverse.title}
              </h3>
              <p className="text-xl text-muted-foreground">
                {currentUniverse.subtitle}
              </p>
            </div>

            {/* Experience cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {currentUniverse.experiences.map((exp, index) => {
                const Icon = exp.icon;
                
                return (
                  <Card 
                    key={index}
                    className="glass-morphism p-8 hover:neon-glow-primary transition-all duration-500 group"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-${currentUniverse.color}/20 group-hover:animate-glow-pulse`}>
                        <Icon className={`w-6 h-6 text-${currentUniverse.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <span className="font-semibold">{exp.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                        Technologies & Skills
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className={`border-${currentUniverse.color}/30 text-${currentUniverse.color} hover:bg-${currentUniverse.color}/10 transition-all duration-300`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center gap-2 text-sm">
                            <div className={`w-2 h-2 rounded-full bg-${currentUniverse.color} animate-glow-pulse`} />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Multiverse connection visualization */}
        <div className="mt-16 text-center">
          <Card className="glass-morphism p-8 max-w-4xl mx-auto neon-glow-accent">
            <h4 className="text-2xl font-bold mb-4 gradient-text-creative">
              Interdimensional Connections
            </h4>
            <p className="text-muted-foreground mb-6">
              Each universe influences and amplifies the others, creating a synergistic effect
              where technical expertise enhances creative vision, leadership skills drive innovation,
              and design thinking improves technical solutions.
            </p>
            <div className="flex justify-center gap-4">
              <div className="w-4 h-4 rounded-full bg-primary animate-glow-pulse" />
              <div className="w-1 h-4 bg-gradient-to-r from-primary to-secondary" />
              <div className="w-4 h-4 rounded-full bg-secondary animate-glow-pulse" />
              <div className="w-1 h-4 bg-gradient-to-r from-secondary to-accent" />
              <div className="w-4 h-4 rounded-full bg-accent animate-glow-pulse" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
