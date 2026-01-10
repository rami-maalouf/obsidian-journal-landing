import { motion } from "framer-motion";
import { Apple, Sparkles } from "lucide-react";
import { TranscriptVisual } from "./TranscriptVisual";

interface HeroProps {
  onIOSClick: () => void;
}

const Hero = ({ onIOSClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-obsidian" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{ background: "hsl(262 83% 58% / 0.15)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "hsl(255 100% 67% / 0.1)" }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Privacy-first. Open source. No backend.</span>
          </motion.div> */}

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold py-6 leading-tight"
          >
            <span className="text-foreground">Update your Obsidian notes</span>
            <br />
            <span className="gradient-text glow-text">with your voice.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Just talk, and we'll take care of placing the content right where it belongs in your vault.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <button onClick={onIOSClick} className="btn-hero group flex items-center gap-3">
              <Apple className="w-5 h-5 relative z-10 transition-transform group-hover:scale-" />
              <span>Join iOS Beta</span>
            </button>
             <p className="text-sm text-muted-foreground">
              Available on TestFlight now
            </p>
          </motion.div>

          {/* Voice Visualization */}
          <div className="pt-14">
             <TranscriptVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
