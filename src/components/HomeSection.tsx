import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { ChevronDown } from 'lucide-react';
import ErrorBoundary from '@/components/ErrorBoundary';
import profileImage from '@/assets/profile.jpg';

export default function HomeSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, hsl(var(--dark-olive)), hsl(var(--muted-olive)))' }}
    >
      {/* 3D Background */}
      <ErrorBoundary>
        <div className="absolute inset-0 opacity-30">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Sphere args={[2, 64, 64]} position={[0, 0, 0]}>
              <MeshDistortMaterial
                color="hsl(27, 32%, 36%)"
                distort={0.4}
                speed={2}
                roughness={0.4}
              />
            </Sphere>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      </ErrorBoundary>

      {/* Stamp-sized Profile Picture for Mobile - Top Right Corner */}
      <motion.div
        className="md:hidden absolute top-20 right-4 z-20"
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="relative"
          whileTap={{ scale: 0.95 }}
          animate={{
            rotate: [0, -3, 3, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        >
          <img
            src={profileImage}
            alt="Rahul Amancha"
            className="w-16 h-16 object-cover rounded-lg border-2 border-gold-soft shadow-lg"
          />
          {/* Small corner accent */}
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gold-soft rounded-tr-md"></div>
        </motion.div>
      </motion.div>

      {/* Medium Profile Picture with Curved Arrow - Desktop/Tablet Only */}
      <motion.div
        className="hidden md:block absolute top-24 right-8 md:right-16 lg:right-24 z-20"
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      >
        {/* Curved Arrow SVG pointing from top-left navbar to profile */}
        <motion.svg
          className="absolute -left-32 -top-8 w-40 h-32 text-gold-soft"
          viewBox="0 0 160 120"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
            </marker>
          </defs>
          <motion.path
            d="M 10 60 Q 50 20, 120 40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
            strokeDasharray="4 4"
          />
        </motion.svg>

        {/* Profile Picture */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={profileImage}
            alt="Rahul Amancha - AI/ML Engineer and Full-Stack Developer"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-2xl border-4 border-gold-soft shadow-2xl"
          />
          {/* Decorative Corner Accent */}
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-gold-soft rounded-tr-xl"></div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-gold-soft rounded-bl-xl"></div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.p
          className="text-primary text-lg md:text-xl mb-4 font-medium tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hey, I'm
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-heading mb-4 text-foreground leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          AMANCHA RAHUL
        </motion.h1>

        {/* Punchy Tagline */}
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl text-gold-soft mb-6 font-semibold tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Crafting AI-Driven Apps
        </motion.p>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          AI/ML Engineer & Full-Stack Developer
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Building innovative AI-powered applications with React Native, Django, and cutting-edge ML technologies.
          Passionate about algorithmic trading, fitness (UFC enthusiast), and sci-fi movies.
        </motion.p>

        <motion.button
          onClick={scrollToAbout}
          className="bg-gold-soft text-charcoal-dark px-8 py-4 rounded-lg font-semibold hover:bg-gold-soft/90 smooth-transition shadow-lg hover:shadow-2xl mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Explore my work and projects"
        >
          Explore My Work
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-muted-foreground" size={32} />
      </motion.div>
    </section>
  );
}
