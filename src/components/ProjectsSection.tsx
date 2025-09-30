import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import AshaModel from './3d/AshaModel';
import DripsmithModel from './3d/DripsmithModel';
import EVAgentModel from './3d/EVAgentModel';
import SkillocoModel from './3d/SkillocoModel';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Asha - Health-Focused App',
      date: 'Dec 2024',
      tech: 'Python, Django, HTML, CSS, AI Chatbot, News API',
      description:
        'Comprehensive health management app for diabetes, blood pressure, and skincare with personalized diets, exercises, real-time chat, AI chatbot integration, and health news.',
      github: 'https://github.com/AmanchaRahul/Asha-Health',
      Model: AshaModel,
      color: 'from-red-900/20 to-pink-900/20',
    },
    {
      title: 'Dripsmith - Clothing Platform',
      date: 'Mar 2025',
      tech: 'Vite, Google Image Generation API, Razorpay, 3D Modeling',
      description:
        'AI-driven clothing design generator with 3D previews, instant downloads, and subscription management for personalized fashion experiences.',
      live: '#',
      Model: DripsmithModel,
      color: 'from-purple-900/20 to-blue-900/20',
    },
    {
      title: 'EV Agent - Electric Vehicle Hub',
      date: 'May 2025',
      tech: 'Vite, Supabase, Google Maps API, n8n, SerperAPI, Sarvam AI',
      description:
        'Complete toolkit for EV owners featuring AI chatbot, battery analytics, charging station maps, and localized news for electric vehicle enthusiasts.',
      live: '#',
      Model: EVAgentModel,
      color: 'from-green-900/20 to-teal-900/20',
    },
    {
      title: 'Skilloco - Skill-Based Social Network',
      date: 'Aug 2025',
      tech: 'React Native, Expo Go, Convex, Supabase, Agora SDK',
      description:
        'Social media platform connecting users by skills with secure location sharing, real-time video/voice calls, and privacy-focused networking.',
      live: '#',
      Model: SkillocoModel,
      color: 'from-orange-900/20 to-yellow-900/20',
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
            {projects.map((project, index) => {
              const Model = project.Model;
              return (
                <motion.div
                  key={project.title}
                  className="relative"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div
                    className={`bg-gradient-to-br ${project.color} bg-card p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden`}
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <motion.div
                        className="h-64 md:h-80 rounded-2xl overflow-hidden bg-charcoal-dark/50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ErrorBoundary>
                          <Model />
                        </ErrorBoundary>
                      </motion.div>

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
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
