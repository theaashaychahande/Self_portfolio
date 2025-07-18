import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  User, 
  Briefcase, 
  Zap, 
  Folder, 
  Mail, 
  Menu, 
  X,
  Palette,
  GraduationCap
} from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, techIcon: Home },
  { id: 'about', label: 'Origin Story', icon: User, techIcon: User },
  { id: 'experience', label: 'Multiverse', icon: Briefcase, techIcon: Briefcase },
  { id: 'skills', label: 'Toolbox', icon: Zap, techIcon: Zap },
  { id: 'projects', label: 'Lab', icon: Folder, techIcon: Folder },
  { id: 'contact', label: 'Transmission', icon: Mail, techIcon: Mail },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="glass-morphism rounded-full px-6 py-3 neon-glow-primary">
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground neon-glow-primary' 
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-6 right-6 z-50 md:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full glass-morphism neon-glow-primary p-0"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 right-0 w-64 glass-morphism rounded-2xl p-4 neon-glow-primary">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground neon-glow-primary' 
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Holographic brand indicator */}
      <div className="fixed top-6 left-6 z-50">
        <div className="glass-morphism rounded-full p-3 neon-glow-secondary animate-hologram-flicker">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full animate-glow-pulse" />
            <span className="hidden sm:block text-sm font-bold gradient-text-primary">AC</span>
          </div>
        </div>
      </div>
    </>
  );
};
