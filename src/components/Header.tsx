import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import profileImage from '@/assets/profile.jpg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8"
    >
      <nav 
        className={`max-w-5xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center bg-dark-olive rounded-full border border-border/50 backdrop-blur-md smooth-transition ${
          scrolled ? 'shadow-2xl' : 'shadow-lg'
        }`}
      >
        {/* Profile Picture & Logo */}
        <div className="flex items-center gap-4">
          <motion.img
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-brown-warm object-cover shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.h1
            className="text-xl md:text-2xl font-heading text-brown-light cursor-pointer tracking-wide"
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
                className="text-foreground hover:text-brown-light smooth-transition font-heading text-sm tracking-wider uppercase"
              >
                {item.label}
              </button>
            </motion.li>
          ))}
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-cream-accent text-brown-warm font-heading text-sm tracking-wider uppercase rounded-full shadow-md hover:shadow-lg smooth-transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
                    className="w-full text-left px-6 py-3 text-foreground hover:text-brown-light hover:bg-muted/20 smooth-transition font-heading tracking-wide"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="px-4 py-3">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-6 py-2 bg-cream-accent text-brown-warm font-heading text-sm tracking-wider uppercase rounded-full shadow-md"
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
