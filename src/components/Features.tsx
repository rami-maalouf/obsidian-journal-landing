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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Everything your </span>
            <span className="gradient-text">daily journaling</span>
            <span className="text-foreground"> needs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed for the Obsidian community. Built with the tools and workflows you already love.
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
