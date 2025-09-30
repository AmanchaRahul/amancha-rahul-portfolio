import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ImageGallery from './ImageGallery';

// Import Asha screenshots
import asha1 from '@/assets/asha/1.jpg';
import asha2 from '@/assets/asha/2.jpg';
import asha3 from '@/assets/asha/3.jpg';
import asha4 from '@/assets/asha/WhatsApp Image 2025-09-30 at 18.32.22_0a214b6d.jpg';
import asha5 from '@/assets/asha/WhatsApp Image 2025-09-30 at 18.32.23_574b3992.jpg';
import asha6 from '@/assets/asha/WhatsApp Image 2025-09-30 at 18.32.23_c1123175.jpg';
import asha7 from '@/assets/asha/WhatsApp Image 2025-09-30 at 18.32.24_d9b6949f.jpg';
import asha8 from '@/assets/asha/WhatsApp Image 2025-09-30 at 18.32.25_46f3e979.jpg';

// Import Dripsmith screenshots
import dripsmith1 from '@/assets/dripsmith/1.png';
import dripsmith2 from '@/assets/dripsmith/2.png';
import dripsmith3 from '@/assets/dripsmith/3.png';
import dripsmith4 from '@/assets/dripsmith/Screenshot (814).png';
import dripsmith5 from '@/assets/dripsmith/Screenshot (848).png';
import dripsmith6 from '@/assets/dripsmith/Screenshot (850).png';
import dripsmith7 from '@/assets/dripsmith/Screenshot (861).png';
import dripsmith8 from '@/assets/dripsmith/Screenshot (862).png';

// Import EV Agent screenshots
import evAgent1 from '@/assets/ev-agent/Screenshot (1354).png';
import evAgent2 from '@/assets/ev-agent/Screenshot (1355).png';
import evAgent3 from '@/assets/ev-agent/Screenshot (1357).png';
import evAgent4 from '@/assets/ev-agent/Screenshot (1359).png';
import evAgent5 from '@/assets/ev-agent/Screenshot (1362).png';
import evAgent6 from '@/assets/ev-agent/Screenshot (1363).png';
import evAgent7 from '@/assets/ev-agent/Screenshot (1364).png';
import evAgent8 from '@/assets/ev-agent/Screenshot (1365).png';

// Import Skilloco screenshots
import skilloco1 from '@/assets/skilloco/1.jpg';
import skilloco2 from '@/assets/skilloco/2.jpg';
import skilloco3 from '@/assets/skilloco/3.jpg';
import skilloco4 from '@/assets/skilloco/4.jpg';
import skilloco5 from '@/assets/skilloco/8.jpg';
import skilloco6 from '@/assets/skilloco/9.jpg';
import skilloco7 from '@/assets/skilloco/12.jpg';
import skilloco8 from '@/assets/skilloco/13.jpg';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Asha - Health-Focused App',
      date: 'Dec 2024',
      tech: 'Python, Django, HTML, CSS, AI Chatbot, News API',
      description:
        'Comprehensive health management app for diabetes, blood pressure, and skincare with personalized diets, exercises, real-time chat, AI chatbot integration, and health news.',
      github: 'https://github.com/AmanchaRahul/Asha-Health',
      live: 'https://asha2.onrender.com',
      images: [asha1, asha2, asha3, asha4, asha5, asha6, asha7, asha8],
    },
    {
      title: 'Dripsmith - Clothing Platform',
      date: 'Mar 2025',
      tech: 'Vite, Google Image Generation API, Razorpay, 3D Modeling',
      description:
        'AI-driven clothing design generator with 3D previews, instant downloads, and subscription management for personalized fashion experiences.',
      live: 'https://dripsmith.vercel.app/',
      images: [dripsmith1, dripsmith2, dripsmith3, dripsmith4, dripsmith5, dripsmith6, dripsmith7, dripsmith8],
    },
    {
      title: 'EV Agent - Electric Vehicle Hub',
      date: 'May 2025',
      tech: 'Vite, Supabase, Google Maps API, n8n, SerperAPI, Sarvam AI',
      description:
        'Complete toolkit for EV owners featuring AI chatbot, battery analytics, charging station maps, and localized news for electric vehicle enthusiasts.',
      live: 'https://ev-agent.vercel.app/',
      images: [evAgent1, evAgent2, evAgent3, evAgent4, evAgent5, evAgent6, evAgent7, evAgent8],
    },
    {
      title: 'Skilloco - Skill-Based Social Network',
      date: 'Aug 2025',
      tech: 'React Native, Expo Go, Convex, Supabase, Agora SDK',
      description:
        'Social media platform connecting users by skills with secure location sharing, real-time video/voice calls, and privacy-focused networking.',
      live: 'https://drive.google.com/file/d/1Oe7PlhF8jqsyutYDFfyMhCabi0mdw2Ch/view?usp=sharing',
      images: [skilloco1, skilloco2, skilloco3, skilloco4, skilloco5, skilloco6, skilloco7, skilloco8],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-olive-dark min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-4">
            FEATURED PROJECTS
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
            Innovative applications spanning health tech, AI-driven design, electric vehicles, and social networking
          </p>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="relative"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-card p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden border border-border/30">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image Gallery */}
                    <div>
                      <ImageGallery images={project.images} title={project.title} />
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-heading text-primary mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{project.date}</p>
                      </div>

                      <p className="text-card-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>

                      <div className="pt-2">
                        <p className="text-sm text-muted-foreground mb-2">Tech Stack:</p>
                        <p className="text-primary font-medium">{project.tech}</p>
                      </div>

                      <div className="flex gap-4 pt-4">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 smooth-transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={20} />
                            GitHub
                          </motion.a>
                        )}
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-card border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground smooth-transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
