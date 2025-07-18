import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu, 
  Brain, 
  Code, 
  Database, 
  Palette, 
  Figma, 
  Users, 
  Lightbulb,
  Zap,
  Layers,
  Monitor,
  Smartphone,
  Globe,
  GitBranch,
  BarChart,
  Camera
} from 'lucide-react';

const skillCategories = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'primary',
    description: 'Neural Networks, Deep Learning, Computer Vision',
    chips: [
      { name: 'PyTorch', level: 90, icon: Cpu, description: 'Deep learning framework for research and production' },
      { name: 'TensorFlow', level: 85, icon: Cpu, description: 'End-to-end ML platform' },
      { name: 'Computer Vision', level: 88, icon: Camera, description: 'OpenCV, Image Processing, Object Detection' },
      { name: 'NLP', level: 82, icon: Brain, description: 'Natural Language Processing, Transformers' },
      { name: 'Neural Networks', level: 92, icon: GitBranch, description: 'CNNs, RNNs, GANs, Transformers' }
    ]
  },
  {
    id: 'programming',
    title: 'Programming & Development',
    icon: Code,
    color: 'primary',
    description: 'Full-stack development with modern technologies',
    chips: [
      { name: 'Python', level: 95, icon: Code, description: 'Primary language for AI/ML and backend development' },
      { name: 'Java', level: 85, icon: Globe, description: 'Modern apps, DSA, Kotlin' },
      { name: 'C++', level: 80, icon: Monitor, description: 'Component-based backend development' },
      { name: 'SQL', level: 85, icon: Database, description: 'Database design and complex queries' },
      { name: 'Git', level: 92, icon: GitBranch, description: 'Version control and collaborative development' }
    ]
  },
  {
    id: 'design',
    title: 'Design & Creativity',
    icon: Palette,
    color: 'secondary',
    description: 'Visual design, UX/UI, and creative problem solving',
    chips: [
      { name: 'UI/UX Design', level: 90, icon: Smartphone, description: 'User-centered design, wireframing, prototyping' },
      { name: 'Figma', level: 92, icon: Figma, description: 'Design systems, collaborative design, prototyping' },
      { name: 'Adobe Suite', level: 85, icon: Layers, description: 'Photoshop, Illustrator, After Effects' },
      { name: 'Design Systems', level: 88, icon: Layers, description: 'Scalable design frameworks and components' },
      { name: 'Brand Strategy', level: 80, icon: Lightbulb, description: 'Visual identity, brand positioning' }
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership & Soft Skills',
    icon: Users,
    color: 'accent',
    description: 'Team leadership, communication, and strategic thinking',
    chips: [
      { name: 'Team Leadership', level: 88, icon: Users, description: 'Managing cross-functional teams and projects' },
      { name: 'Public Speaking', level: 85, icon: Users, description: 'Presentations, workshops, community talks' },
      { name: 'Strategic Planning', level: 82, icon: BarChart, description: 'Long-term vision and execution planning' },
      { name: 'Mentoring', level: 90, icon: Lightbulb, description: 'Guiding and developing team members' },
      { name: 'Problem Solving', level: 95, icon: Zap, description: 'Creative and analytical problem-solving' }
    ]
  }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('ai-ml');
  const [hoveredChip, setHoveredChip] = useState<string | null>(null);

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory)!;

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold gradient-text-neural mb-6">
            The Toolbox
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An interactive circuit board of skills and technologies, where each component
            powers the fusion of AI engineering, creative design, and leadership excellence.
          </p>
        </div>

        {/* Category selector - Circuit board style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <Card
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  cursor-pointer transition-all duration-500 p-6 text-center group
                  ${isActive 
                    ? `glass-morphism neon-glow-${category.color} scale-105` 
                    : 'glass-morphism hover:neon-glow-primary'
                  }
                `}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-${category.color}/20 flex items-center justify-center group-hover:animate-glow-pulse`}>
                  <Icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="font-bold text-sm mb-1">{category.title}</h3>
                <p className="text-xs text-muted-foreground">{category.description}</p>
                
                {/* Circuit connection lines */}
                {isActive && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute top-1/2 left-1/2 w-full h-0.5 bg-${category.color}/30 transform -translate-y-1/2`} />
                    <div className={`absolute top-1/2 left-1/2 h-full w-0.5 bg-${category.color}/30 transform -translate-x-1/2`} />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Active category details */}
        <div className="relative">
          {/* Circuit board background */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full">
              {/* Circuit traces */}
              {[...Array(20)].map((_, i) => (
                <line
                  key={i}
                  x1={`${Math.random() * 100}%`}
                  y1={`${Math.random() * 100}%`}
                  x2={`${Math.random() * 100}%`}
                  y2={`${Math.random() * 100}%`}
                  stroke={`hsl(var(--${currentCategory.color}))`}
                  strokeWidth="1"
                  opacity="0.3"
                  className="animate-neural-pulse"
                  style={{ animationDelay: `${Math.random() * 3}s` }}
                />
              ))}
            </svg>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className={`text-4xl font-bold mb-4 gradient-text-${currentCategory.color}`}>
                {currentCategory.title}
              </h3>
              <p className="text-xl text-muted-foreground">
                {currentCategory.description}
              </p>
            </div>

            {/* Skill chips grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentCategory.chips.map((chip, index) => {
                const ChipIcon = chip.icon;
                const isHovered = hoveredChip === chip.name;
                
                return (
                  <Card
                    key={index}
                    onMouseEnter={() => setHoveredChip(chip.name)}
                    onMouseLeave={() => setHoveredChip(null)}
                    className={`
                      glass-morphism p-6 transition-all duration-500 group cursor-pointer
                      ${isHovered ? `neon-glow-${currentCategory.color} scale-105` : 'hover:neon-glow-primary'}
                    `}
                  >
                    {/* Chip header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-${currentCategory.color}/20 group-hover:animate-glow-pulse`}>
                        <ChipIcon className={`w-5 h-5 text-${currentCategory.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{chip.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">Power Level</span>
                          <div className={`w-2 h-2 rounded-full bg-${currentCategory.color} animate-glow-pulse`} />
                        </div>
                      </div>
                    </div>

                    {/* Power level indicator */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Proficiency</span>
                        <span className={`text-sm font-bold text-${currentCategory.color}`}>
                          {chip.level}%
                        </span>
                      </div>
                      <Progress 
                        value={chip.level} 
                        className="h-2"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {chip.description}
                    </p>

                    {/* Hover effect details */}
                    {isHovered && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className={`absolute top-0 left-0 w-full h-0.5 bg-${currentCategory.color}/50 animate-pulse`} />
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-${currentCategory.color}/50 animate-pulse`} />
                        <div className={`absolute top-0 left-0 w-0.5 h-full bg-${currentCategory.color}/50 animate-pulse`} />
                        <div className={`absolute top-0 right-0 w-0.5 h-full bg-${currentCategory.color}/50 animate-pulse`} />
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Power source indicator */}
            <div className="text-center">
              <Card className="glass-morphism p-8 max-w-3xl mx-auto neon-glow-accent">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Zap className="w-8 h-8 text-accent animate-glow-pulse" />
                  <h4 className="text-2xl font-bold gradient-text-creative">Core Power Source</h4>
                  <Zap className="w-8 h-8 text-accent animate-glow-pulse" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The fusion of technical mastery, creative vision, and leadership excellence creates
                  a synergistic effect where each skill amplifies the others, powering innovative
                  solutions that bridge technology and human experience.
                </p>
                <div className="flex justify-center items-center gap-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Technical Excellence
                  </Badge>
                  <span className="text-accent">+</span>
                  <Badge variant="outline" className="border-secondary/30 text-secondary">
                    Creative Innovation
                  </Badge>
                  <span className="text-accent">+</span>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    Leadership Impact
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
