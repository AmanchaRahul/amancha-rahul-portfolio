import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Workflow, ChevronLeft, ChevronRight } from 'lucide-react';
import ImageGallery from './ImageGallery';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

type Automation = {
  title: string;
  description: string;
  stack: string;
  images: string[];
};

function AutomationCardContent({ automation }: { automation: Automation }) {
  return (
    <>
      <ImageGallery images={automation.images} title={automation.title} />

      <div className="flex items-start gap-3 mt-6 mb-3">
        <Workflow className="text-gold-soft mt-1 flex-shrink-0" size={22} />
        <h3 className="text-xl md:text-2xl font-heading text-primary">{automation.title}</h3>
      </div>

      <p className="text-card-foreground leading-relaxed mb-4">{automation.description}</p>

      <p className="text-gold-soft text-sm font-semibold">{automation.stack}</p>
    </>
  );
}

export default function AutomationsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const automations: Automation[] = [
    {
      title: 'Instagram Engagement Scraper',
      description:
        'An automation that scrapes likes and comments from target Instagram posts using Apify actors, then compiles user profiles, engagement type, and timestamps into a Google Sheet for audience research and outreach.',
      stack: 'n8n, Apify, Google Sheets',
      images: [
        '/n8n_workflows_screenshots/Instagram%20likes%20and%20comments%20users%20scraper-1.png',
        '/n8n_workflows_screenshots/Instagram%20likes%20and%20comments%20users%20scraper-2.png',
      ],
    },
    {
      title: 'Slack Automation Requirements Agent',
      description:
        'A Slack-based AI agent that scopes out new automation requests. A user describes what they want built, and the bot asks clarifying questions one at a time until it fully understands the requirement, then delivers a complete n8n automation plan — from the initial trigger to final setup. It also accepts voice notes, transcribing them before processing.',
      stack: 'n8n, Slack API, OpenAI, Speech-to-Text',
      images: [
        '/n8n_workflows_screenshots/Slack_bot-1.jpg',
        '/n8n_workflows_screenshots/slackbot-2.png',
        '/n8n_workflows_screenshots/slackbot-3.png',
      ],
    },
    {
      title: 'PDF Image Extractor',
      description:
        'A Telegram bot that pulls every embedded image out of a PDF document. Upload any file and the workflow parses each page via the pdf.co API, extracts the images, and sends them straight back in the chat, organized by page.',
      stack: 'n8n, Telegram Bot API, pdf.co',
      images: [
        '/n8n_workflows_screenshots/Images_extractor-1.png',
        '/n8n_workflows_screenshots/images_extractor-2.png',
      ],
    },
    {
      title: 'Fitness Chat & Voice Assistant',
      description:
        'A Telegram fitness-coaching bot that accepts voice or text messages, transcribes spoken questions, generates a response with an AI agent, then converts the reply back into natural speech so users get a spoken answer in the chat.',
      stack: 'n8n, Telegram Bot API, OpenAI, ElevenLabs',
      images: ['/n8n_workflows_screenshots/Fitness_bot.jpg'],
    },
    {
      title: 'EV Assistant Chatbot',
      description:
        'A webhook-triggered AI assistant built for the EV Agent platform. An AI tools-agent can search the web, pull live data via SerpAPI, send emails through Gmail, and look up records in Airtable — all from a single chat request.',
      stack: 'n8n, OpenAI, SerpAPI, Gmail, Airtable',
      images: ['/n8n_workflows_screenshots/EV_Chatbot.jpg'],
    },
    {
      title: 'RAG Chatbot with Supabase & Pinecone',
      description:
        'A retrieval-augmented generation (RAG) chatbot — source documents are pulled from Google Drive, split into chunks, and embedded with OpenAI. Built two versions of the ingestion + retrieval pipeline against different vector databases, Supabase and Pinecone, so a conversational AI agent can answer questions by retrieving relevant context from either knowledge base.',
      stack: 'n8n, OpenAI Embeddings, Supabase Vector Store, Pinecone, Google Drive',
      images: [
        '/n8n_workflows_screenshots/RAG_Supabase.png',
        '/n8n_workflows_screenshots/RAG_pinecone.png',
      ],
    },
  ];

  return (
    <section id="automations" className="section-padding bg-olive-gray min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-4">
            N8N AUTOMATIONS
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
            AI-powered workflow automations built for clients — chatbots, document processing, content generation,
            and data scraping, all orchestrated with n8n
          </p>

          {/* Desktop: grid */}
          <div className="hidden md:grid gap-8 md:grid-cols-2">
            {automations.map((automation, index) => (
              <motion.div
                key={automation.title}
                className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border/30 hover:border-gold-soft/50 smooth-transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <AutomationCardContent automation={automation} />
              </motion.div>
            ))}
          </div>

          {/* Mobile: swipeable carousel */}
          <div className="md:hidden">
            <div className="relative">
              <Carousel setApi={setApi} opts={{ align: 'start' }}>
                <CarouselContent>
                  {automations.map((automation) => (
                    <CarouselItem key={automation.title}>
                      <div className="bg-card p-6 rounded-2xl shadow-lg border border-border/30">
                        <AutomationCardContent automation={automation} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <button
                onClick={() => api?.scrollPrev()}
                disabled={current === 0}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-charcoal-dark/80 border border-gold-soft/50 text-gold-soft backdrop-blur-sm shadow-lg disabled:opacity-30 smooth-transition"
                aria-label="Previous automation"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                disabled={current === automations.length - 1}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-charcoal-dark/80 border border-gold-soft/50 text-gold-soft backdrop-blur-sm shadow-lg disabled:opacity-30 smooth-transition"
                aria-label="Next automation"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {automations.map((automation, index) => (
                <button
                  key={automation.title}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full smooth-transition ${
                    index === current ? 'w-6 bg-gold-soft' : 'w-2 bg-muted-foreground/40'
                  }`}
                  aria-label={`Go to automation ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
