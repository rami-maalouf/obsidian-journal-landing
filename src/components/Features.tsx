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
    title: "Effortless Capture",
    description: "Capture at the speed of thought with an on-device transcription that is 4x faster and just as accurate as cloud transcriptions.",
  },
  {
    icon: RefreshCw,
    title: "Instant Vault Sync",
    description: "Your daily note updates the moment you finish speaking. No manual steps. No waiting.",
  },
  {
    icon: Layers,
    title: "Intelligent Template Hydration",
    description: "we deeply analyze your daily note template and surgically update it based on the new content",
  },
  {
    icon: Shield,
    title: "Fully Private",
    description: "Everything goes straight to your vault. No servers. No cloud database.",
  },
  {
    icon: Clock,
    title: "Never Lose the Nuance",
    description: "By the time you're ready to type, the idea has often evaporated. Voice captures the full depth of your thought instantly.",
  },
  {
    icon: Code2,
    title: "Zero Lock-In",
    description: "We're basically an Obsidian plugin that's also open-source.",
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

interface FeaturesProps {
  onIOSClick?: () => void;
}

const Features = ({ onIOSClick }: FeaturesProps) => {
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
            Built for Architects of Thought
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You've spent years refining your template. We make sure it gets filled—surgically.
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
          <div className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto flex flex-col items-center">

            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to stop typing?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of Obsidian users who've already made the switch.
            </p>

            <button onClick={onIOSClick} className="btn-hero group flex items-center gap-3">
              {/* Note: Ideally we pass down onIOSClick prop here, but for now we'll rely on the header button or add the prop if needed.
                  Wait, Features component doesn't receive props currently. Let's fix that. */}
               <span className="flex items-center gap-2">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.65 4.4.61 5.28 4.7 5.38 4.72-.03.07-3.24 1.04-3.24 4.09 0 3.2 2.84 4.19 2.92 4.22-.05.15-1.35 4.67-4 4.67zM12.03 7.25c-.11-2.35 1.9-4.7 4.54-4.8C16.89 4.38 12.39 3.01 12.03 7.25z" />
                 </svg>
                 Join iOS Beta
               </span>
            </button>

            <p className="text-sm text-muted-foreground mt-6">
              Available on TestFlight • Free during beta
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
