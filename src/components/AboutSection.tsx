import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase } from 'lucide-react';

export default function AboutSection() {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Geethanjali College of Engineering and Technology',
      period: '2020 - 2024',
      score: 'CGPA: 7.0',
    },
    {
      degree: 'Senior Secondary',
      institution: 'Narayana Junior College',
      period: '2018 - 2020',
      score: 'Score: 961/1000',
    },
    {
      degree: 'Secondary Education',
      institution: 'Sri Sai Vidyalay High School',
      period: '2018',
      score: 'CGPA: 8.5',
    },
  ];

  return (
    <section id="about" className="section-padding bg-olive-gray min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-12">
            ABOUT ME
          </h2>

          {/* Bio */}
          <motion.div
            className="bg-card p-8 md:p-12 rounded-2xl shadow-lg mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-2xl font-heading text-primary mb-4">Based in Hyderabad, India</h3>
                <p className="text-card-foreground text-lg leading-relaxed mb-4">
                  I'm a full-stack developer skilled in Python/Django and React, with freelance and contract
                  experience shipping web applications end-to-end — backend APIs, payment integrations, real-time
                  features, and AI-powered product features. I'm comfortable with Supabase and Firebase for auth,
                  storage, and realtime data.
                </p>
                <p className="text-card-foreground text-lg leading-relaxed mb-6">
                  I use AI-assisted development tools like Claude Code and Cursor to build and ship faster, while
                  still owning the architecture and doing my own debugging. From health-focused applications to
                  coaching platforms and automation workflows, I enjoy tackling complex problems and delivering
                  production-ready solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={32} />
              <h3 className="text-3xl font-heading text-primary">Education</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl smooth-transition"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">{edu.degree}</h4>
                  <p className="text-card-foreground mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mb-1">{edu.period}</p>
                  <p className="text-primary font-medium">{edu.score}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Highlight */}
          <motion.div
            className="mt-12 bg-card p-8 md:p-12 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <Briefcase className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-2xl font-heading text-primary mb-4">Professional Experience</h3>
                <p className="text-card-foreground text-lg leading-relaxed">
                  Experienced in freelance and contract development, building and maintaining backend integrations
                  and full-stack web applications for clients — including API connectivity and deployment support.
                  I've built n8n-based automation workflows (email, image generation, document/PDF extraction) to
                  streamline client processes, and delivered rapid prototypes for AI-enabled features, including a
                  Telegram-based assistant and client web apps. Specialized in Django backends, React Native/React
                  mobile and web apps, and AI integrations.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
