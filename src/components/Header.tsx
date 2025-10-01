import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: scrolled ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-6"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--dark-olive)), hsl(var(--muted-olive)))',
      }}
    >
      <nav
        className={`max-w-5xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center bg-charcoal-black/95 rounded-full border backdrop-blur-md smooth-transition ${
          scrolled ? 'shadow-2xl border-gold-soft/30' : 'shadow-lg border-border/50'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <motion.h1
            className="text-xl md:text-2xl font-heading text-gold-soft cursor-pointer tracking-wide"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            AR
          </motion.h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <motion.li 
              key={item.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-gold-soft smooth-transition font-heading text-sm tracking-wider uppercase"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-gold-soft text-charcoal-dark font-heading text-sm tracking-wider uppercase rounded-full shadow-md hover:shadow-xl smooth-transition hover:bg-gold-soft/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Navigate to contact section"
          >
            Let's Chat
          </motion.button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 bg-dark-olive/98 backdrop-blur-md border border-border rounded-3xl md:hidden overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-6 py-3 text-foreground hover:text-gold-soft hover:bg-muted/20 smooth-transition font-heading tracking-wide"
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="px-4 py-3">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-6 py-2 bg-gold-soft text-charcoal-dark font-heading text-sm tracking-wider uppercase rounded-full shadow-md hover:shadow-lg hover:bg-gold-soft/90 smooth-transition"
                  aria-label="Navigate to contact section"
                >
                  Let's Chat
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
