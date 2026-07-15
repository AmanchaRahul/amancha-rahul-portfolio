import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, GraduationCap, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import ImageGallery from './ImageGallery';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

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

type Project = {
  title: string;
  date: string;
  tech: string;
  description: string;
  metrics?: string;
  github?: string;
  live?: string;
  images: string[];
};

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Image Gallery */}
      <div>
        {project.images.length > 0 ? (
          <ImageGallery images={project.images} title={project.title} />
        ) : (
          <div className="aspect-video rounded-xl bg-muted/20 border border-gold-soft/20 flex flex-col items-center justify-center gap-3 p-8 text-center">
            <GraduationCap className="text-gold-soft" size={48} />
            <p className="text-card-foreground font-medium">{project.title}</p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Lock size={14} />
              <span>Private client project — screenshots unavailable</span>
            </div>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="space-y-4">
        <div>
          <h3 className="text-3xl md:text-4xl font-heading text-primary mb-2">
            {project.title}
          </h3>
          <p className="text-gold-soft text-sm font-semibold">{project.date}</p>
        </div>

        <p className="text-card-foreground text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Metrics Display with Gold Accent */}
        {project.metrics && (
          <div className="pt-2 pb-2">
            <p className="text-gold-soft text-sm font-semibold italic leading-relaxed">
              {project.metrics}
            </p>
          </div>
        )}

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
              className="flex items-center gap-2 px-6 py-3 bg-gold-soft text-charcoal-dark rounded-lg font-semibold hover:bg-gold-soft/90 smooth-transition shadow-md hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`View ${project.title} on GitHub`}
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
              className="flex items-center gap-2 px-6 py-3 bg-card border-2 border-gold-soft text-gold-soft rounded-lg font-semibold hover:bg-gold-soft hover:text-charcoal-dark smooth-transition shadow-md hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`View ${project.title} ${project.title.includes('Skilloco') ? 'app link' : 'live demo'}`}
            >
              <ExternalLink size={20} />
              {project.title.includes('Skilloco') ? 'App Link' : 'Live Demo'}
            </motion.a>
          )}
          {!project.github && !project.live && (
            <div className="flex items-center gap-2 px-6 py-3 bg-muted/30 text-muted-foreground rounded-lg font-medium text-sm">
              <Lock size={16} />
              Delivered privately for client
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const projects: Project[] = [
    {
      title: 'Learn with Sanu - Coaching Platform',
      date: 'Jun 2026',
      tech: 'React 18, TypeScript, Vite, Tailwind CSS v4, Supabase (PostgreSQL, Realtime, Auth, Edge Functions), Resend, Framer Motion, shadcn/ui, Recharts',
      description:
        'A full-stack coaching platform delivered for a paying client, handling 100+ student enrollments through a multi-step UPI payment flow. Built a real-time admin dashboard with Supabase Realtime for session management, communications, and revenue tracking across 50+ active sessions, with backend logic in Supabase Edge Functions and automated enrollment/session emails via Resend.',
      metrics: '100+ student enrollments • Real-time admin dashboard • 50+ active sessions tracked • Automated email flows',
      images: [],
    },
    {
      title: 'Skilloco - Skill-Based Social Network',
      date: 'Aug 2025',
      tech: 'React Native, Expo Go, Convex, Supabase, Agora SDK',
      description:
        'Mobile social network built with React Native, featuring real-time video/voice calling via Agora SDK, secure location-based skill matching, and end-to-end encrypted messaging.',
      metrics: 'Agora SDK video calls • Real-time sync with Convex • Secure location sharing',
      live: 'https://drive.google.com/file/d/1Oe7PlhF8jqsyutYDFfyMhCabi0mdw2Ch/view?usp=sharing',
      images: [skilloco1, skilloco2, skilloco3, skilloco4, skilloco5, skilloco6, skilloco7, skilloco8],
    },
    {
      title: 'Asha - Health-Focused App',
      date: 'Dec 2024',
      tech: 'Python, Django, Django Channels, Redis, Cloudinary, Google OAuth, News API',
      description:
        'A Django health app covering diabetes, blood pressure, and skincare workflows for 30+ users. Real-time patient-doctor chat is powered by Django Channels and Redis, handling 20+ concurrent sessions. Includes Google OAuth sign-in, Cloudinary media handling for user-uploaded content, and a News API integration surfacing the latest health updates.',
      metrics: 'Real-time chat (Django Channels + Redis) • Google OAuth sign-in • Cloudinary media uploads • Live health news feed',
      github: 'https://github.com/AmanchaRahul/Asha-Health',
      live: 'https://asha2.onrender.com',
      images: [asha1, asha2, asha3, asha4, asha5, asha6, asha7, asha8],
    },
    {
      title: 'Dripsmith - Clothing Platform',
      date: 'Mar 2025',
      tech: 'Vite, Google Image Generation API, Razorpay, 3D Modeling',
      description:
        'AI-driven fashion platform generating custom clothing designs with 3D visualization. Integrated Razorpay payment gateway for subscription tiers and seamless checkout experience.',
      metrics: 'Google AI image generation • Interactive 3D models • Subscription management',
      live: 'https://dripsmith.vercel.app/',
      images: [dripsmith1, dripsmith2, dripsmith3, dripsmith4, dripsmith5, dripsmith6, dripsmith7, dripsmith8],
    },
    {
      title: 'EV Agent - Electric Vehicle Hub',
      date: 'May 2025',
      tech: 'Vite, Supabase, Google Maps API, n8n, SerperAPI, Sarvam AI',
      description:
        'Complete EV ecosystem with AI assistant powered by Sarvam AI, real-time battery analytics, charging station locator via Google Maps, and automated news aggregation using n8n workflows.',
      metrics: 'AI-powered chatbot • Real-time station mapping • Automated news curation',
      live: 'https://ev-agent.vercel.app/',
      images: [evAgent1, evAgent2, evAgent3, evAgent4, evAgent5, evAgent6, evAgent7, evAgent8],
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
            Full-stack applications spanning health tech, AI-driven design, electric vehicles, coaching platforms, and social networking
          </p>

          {/* Desktop: stacked list */}
          <div className="hidden md:block space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="relative"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="bg-card p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden border border-border/30 hover:border-gold-soft/50 smooth-transition"
                  whileHover={{ boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.25)" }}
                >
                  <ProjectCardContent project={project} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: swipeable carousel */}
          <div className="md:hidden">
            <div className="relative">
              <Carousel setApi={setApi} opts={{ align: 'start' }}>
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem key={project.title}>
                      <div className="bg-card p-6 rounded-3xl shadow-2xl overflow-hidden border border-border/30">
                        <ProjectCardContent project={project} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <button
                onClick={() => api?.scrollPrev()}
                disabled={current === 0}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-charcoal-dark/80 border border-gold-soft/50 text-gold-soft backdrop-blur-sm shadow-lg disabled:opacity-30 smooth-transition"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                disabled={current === projects.length - 1}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-charcoal-dark/80 border border-gold-soft/50 text-gold-soft backdrop-blur-sm shadow-lg disabled:opacity-30 smooth-transition"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full smooth-transition ${
                    index === current ? 'w-6 bg-gold-soft' : 'w-2 bg-muted-foreground/40'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Let's Collaborate CTA */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next AI/ML project, mobile app, or innovative tech solution.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 bg-gold-soft text-charcoal-dark px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gold-soft/90 smooth-transition shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Navigate to contact section to collaborate"
            >
              Let's Collaborate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
