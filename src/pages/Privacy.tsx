import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Layers } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-obsidian">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </Link>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-purple">
            <Layers className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold gradient-text mb-8">Privacy Policy</h1>

          <div className="glass rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Our Commitment to Privacy</h2>
              <p className="leading-relaxed">
                Ignite is built with privacy as a core principle. We believe your thoughts, reflections,
                and personal data should remain entirely yours.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Data Storage</h2>
              <p className="leading-relaxed">
                All your journal entries, voice recordings, and personal data are stored locally on your device.
                We do not have servers that store your content. Your data never leaves your device unless you
                explicitly choose to sync it with your Obsidian vault.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">No Analytics or Tracking</h2>
              <p className="leading-relaxed">
                We do not use analytics services, tracking pixels, or any form of surveillance technology.
                We don't know how you use the app, what you write, or when you use it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Open Source</h2>
              <p className="leading-relaxed">
                Our code is open source, meaning you can audit exactly what our app does with your data.
                Transparency is not just a feature—it's our foundation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Waitlist Information</h2>
              <p className="leading-relaxed">
                When you join our waitlist, we only collect your email address. This is used solely to notify
                you when the app launches. We never share, sell, or use your email for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
              <p className="leading-relaxed">
                If you have any questions about our privacy practices, please reach out to us through our
                social media channels.
              </p>
            </section>

            <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border">
              Last updated: January 2026
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Privacy;
