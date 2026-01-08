import { motion } from "framer-motion";
import { Apple, Mic, Sparkles } from "lucide-react";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Privacy-first. Open source. No backend.</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Just speak.</span>
            <br />
            <span className="gradient-text glow-text">Your journal writes itself.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            The simplest way to capture your thoughts and update your Obsidian daily notes. 
            No typing. No friction. Just your voice and your vault.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <button onClick={onIOSClick} className="btn-hero group flex items-center gap-3">
              <Apple className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
              <span>Join iOS Waitlist</span>
            </button>
            <p className="text-sm text-muted-foreground">
              Be the first to know when we launch
            </p>
          </motion.div>

          {/* Voice Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div className="glass rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-purple pulse-glow">
                  <Mic className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              {/* Waveform Visualization */}
              <div className="flex items-center justify-center gap-1 h-16 mb-6">
                {[...Array(24)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 rounded-full bg-gradient-to-t from-primary to-secondary"
                    animate={{
                      height: [8, Math.random() * 40 + 20, 8],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.05,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground text-center font-mono text-sm">
                "Today was productive. Finished the project draft, had coffee with Sarah..."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
