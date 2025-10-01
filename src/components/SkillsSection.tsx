import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Cpu, Smartphone, Palette } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages & Frameworks',
      skills: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Django', 'React.js', 'Next.js', 'React Native'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Expo Go', 'Cross-platform Apps', 'Native APIs', 'Agora SDK'],
    },
    {
      icon: Database,
      title: 'Databases & Backend',
      skills: ['PostgreSQL', 'Supabase', 'Firebase', 'Convex', 'Django Web Framework'],
    },
    {
      icon: Cpu,
      title: 'AI & Automation',
      skills: ['Cursor', 'Claude Code', 'Image Generation APIs', 'AI Chatbots', 'n8n', 'Make.com', 'Sarvam AI', 'Deepgram'],
    },
    {
      icon: Cloud,
      title: 'Cloud & APIs',
      skills: ['Vercel', 'Netlify', 'Render', 'Google Maps API', 'Twilio', 'Razorpay', 'Stripe'],
    },
    {
      icon: Palette,
      title: 'Design & Styling',
      skills: ['Tailwind CSS', 'Bootstrap', 'Responsive Design', '3D Modeling', 'Vite'],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-charcoal min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-4">
            TECHNICAL SKILLS
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
            A comprehensive toolkit for building modern, scalable applications
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-heading text-primary">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground smooth-transition cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
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
