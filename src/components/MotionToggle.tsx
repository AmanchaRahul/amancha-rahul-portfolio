import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Zap, ZapOff } from 'lucide-react';

export default function MotionToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    // Check user's motion preference from localStorage
    const savedPreference = localStorage.getItem('motion-enabled');
    if (savedPreference !== null) {
      const enabled = savedPreference === 'true';
      setMotionEnabled(enabled);
      document.documentElement.classList.toggle('reduce-motion', !enabled);
    }

    // Check system preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && savedPreference === null) {
      setMotionEnabled(false);
      document.documentElement.classList.add('reduce-motion');
    }
  }, []);

  const toggleMotion = () => {
    const newValue = !motionEnabled;
    setMotionEnabled(newValue);
    localStorage.setItem('motion-enabled', String(newValue));
    document.documentElement.classList.toggle('reduce-motion', !newValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-gold-soft text-charcoal-dark rounded-full shadow-lg hover:shadow-xl smooth-transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open motion preferences"
        aria-expanded={isOpen}
      >
        <Settings size={24} className={isOpen ? 'rotate-90 transition-transform duration-300' : 'transition-transform duration-300'} />
      </motion.button>

      {/* Motion Preference Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 bg-card border border-gold-soft/30 rounded-xl shadow-2xl p-6 w-72"
            role="dialog"
            aria-label="Motion preferences"
          >
            <h3 className="text-lg font-heading text-primary mb-4">Motion Preferences</h3>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Toggle animations and motion effects for better accessibility.
              </p>

              {/* Motion Toggle Switch */}
              <div className="flex items-center justify-between p-4 bg-muted/10 rounded-lg">
                <div className="flex items-center gap-3">
                  {motionEnabled ? (
                    <Zap className="text-gold-soft" size={20} />
                  ) : (
                    <ZapOff className="text-muted-foreground" size={20} />
                  )}
                  <span className="text-foreground font-medium">
                    {motionEnabled ? 'Animations On' : 'Animations Off'}
                  </span>
                </div>

                <button
                  onClick={toggleMotion}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    motionEnabled ? 'bg-gold-soft' : 'bg-muted'
                  }`}
                  aria-label={`Turn animations ${motionEnabled ? 'off' : 'on'}`}
                  role="switch"
                  aria-checked={motionEnabled}
                >
                  <motion.div
                    className="absolute top-1 left-1 w-4 h-4 bg-charcoal-dark rounded-full"
                    animate={{ x: motionEnabled ? 24 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full px-4 py-2 bg-gold-soft/10 hover:bg-gold-soft/20 text-gold-soft rounded-lg font-medium smooth-transition"
                aria-label="Close motion preferences"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
