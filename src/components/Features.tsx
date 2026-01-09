import { motion } from "framer-motion";
import {
  Mic,
  Shield,
  RefreshCw,
  Layers,
  Clock,
  Code2,
  Smartphone,
  FileText
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice-First Capture",
    description: "Simply speak your thoughts. No typing, no friction. Your voice becomes structured journal entries instantly.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Sync to Obsidian",
    description: "Your daily note updates automatically. Every reflection, every thought, synced to your vault in real-time.",
  },
  {
    icon: Layers,
    title: "Smart Structuring",
    description: "AI understands context and structures your thoughts. Mood tracking, activities, reflections—all organized perfectly.",
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "No servers. No database. Everything stays on your device. Your thoughts are yours and yours alone.",
  },
  {
    icon: Clock,
    title: "Daily Rituals Made Easy",
    description: "Build consistent journaling habits. Quick prompts and gentle reminders help you reflect every single day.",
  },
  {
    icon: Code2,
    title: "Open Source",
    description: "Fully transparent. Audit the code, contribute, or fork it. Built by the community, for the community.",
  },
];

// Voice Transcript Visual Component
const TranscriptVisual = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-5xl mx-auto">
      {/* Raw Transcript */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-xl p-6 w-full lg:w-80"
      >
        <div className="flex items-center gap-2 mb-4">
          <Mic className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Voice Input</span>
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed">
          "I slept about 7 hours last night. Today I learned that you can use dataview queries to filter tasks by due date. Also feeling pretty motivated after my morning run."
        </p>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex items-center justify-center"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-purple">
          <svg className="w-5 h-5 text-primary-foreground rotate-90 lg:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </motion.div>

      {/* Markdown Output */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass rounded-xl p-6 w-full lg:w-96"
      >
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-4 h-4 text-secondary" />
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Daily Note Output</span>
        </div>
        <div className="font-mono text-sm space-y-1">
          <div className="text-muted-foreground">---</div>
          <div><span className="text-primary">sleep:</span> <span className="text-foreground/80">7</span></div>
          <div><span className="text-primary">mood:</span> <span className="text-foreground/80">motivated</span></div>
          <div><span className="text-primary">exercise:</span> <span className="text-foreground/80">morning run</span></div>
          <div className="text-muted-foreground">---</div>
          <div className="pt-2">
            <span className="text-secondary">## Things I Learned Today</span>
          </div>
          <div className="text-foreground/80 pl-0">
            - Dataview queries can filter tasks by due date
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-obsidian" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Designed for Obsidian Power Users
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stripped away everything unnecessary to give you the fastest way to capture your thoughts directly into your daily notes
          </p>
        </motion.div>



        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:from-primary/30 group-hover:to-secondary/30">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-2 border-background">
                  <Smartphone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center border-2 border-background">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Your thoughts deserve a better home
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Stop losing reflections to scattered notes. Let your voice flow into your Obsidian vault,
              structured and searchable forever.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Works with any Obsidian vault
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Supports custom templates
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Markdown native
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
