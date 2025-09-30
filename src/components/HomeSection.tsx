import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { ChevronDown } from 'lucide-react';

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
          className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 text-foreground leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          AMANCHA RAHUL
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Software Developer & AI Enthusiast
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Building innovative apps with React Native, Django, and AI integrations. 
          Specializing in mobile development and algorithmic trading.
        </motion.p>

        <motion.button
          onClick={scrollToAbout}
          className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 smooth-transition shadow-lg hover:shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-muted-foreground" size={32} />
      </motion.div>
    </section>
  );
}
