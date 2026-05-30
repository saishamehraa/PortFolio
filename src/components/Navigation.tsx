import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Shield } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Vision', href: '#home' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Systems', href: '#featured' },
    { name: 'Research', href: '#research' },
    { name: 'Timeline', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Shield className="w-5 h-5 text-[#5CF0FF] group-hover:text-white transition-colors" />
          <span className="font-orbitron font-bold text-lg tracking-widest text-white">SAISHA<span className="text-[#5CF0FF]">MEHRA</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#featured"
            className="px-5 py-2 text-sm font-orbitron font-semibold border border-[#5CF0FF]/30 rounded-sm text-[#5CF0FF] hover:bg-[#5CF0FF]/10 transition-colors tracking-wide"
          >
            Explore Ecosystem
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}