import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from '@/components/ui/sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_ny9kgfb',
        'template_8pf4w0c',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'QhA67z7FxfkoWDemQ'
      );

      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9032016299',
      href: 'tel:+919032016299',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'amancharahul25@gmail.com',
      href: 'mailto:amancharahul25@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'amancha-rahul',
      href: 'https://www.linkedin.com/in/amancha-rahul-a2b265217/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'AmanchaRahul',
      href: 'https://github.com/AmanchaRahul',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-charcoal-dark min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
            Have a project in mind or want to collaborate? Let's connect and build something amazing together.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading text-primary mb-6">Contact Information</h3>
              
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : undefined}
                    rel={item.label === 'LinkedIn' || item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl hover:bg-muted smooth-transition group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 smooth-transition">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-input text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-input text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-input text-foreground rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 smooth-transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            className="mt-20 pt-8 border-t border-border text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground">
              © 2025 Amancha Rahul. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
