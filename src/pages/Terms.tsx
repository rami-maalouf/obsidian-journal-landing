import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Layers } from "lucide-react";

const Terms = () => {
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
          <h1 className="text-4xl font-bold gradient-text mb-8">Terms of Service</h1>
          
          <div className="glass rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By using Obsidian Journal, you agree to these terms. The app is provided as-is, and we 
                make no warranties regarding its functionality or availability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Your Data, Your Responsibility</h2>
              <p className="leading-relaxed">
                Since all data is stored locally on your device, you are responsible for backing up your data. 
                We cannot recover lost data as we have no access to it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Open Source License</h2>
              <p className="leading-relaxed">
                Obsidian Journal is open source software. You are free to view, fork, and modify the code 
                according to our open source license. Contributions to the project are welcome.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Obsidian Integration</h2>
              <p className="leading-relaxed">
                This app integrates with Obsidian but is not officially affiliated with or endorsed by Obsidian. 
                Obsidian is a trademark of Obsidian MD.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
              <p className="leading-relaxed">
                We are not liable for any damages arising from the use of this app. Use at your own discretion 
                and always maintain backups of important data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Changes to Terms</h2>
              <p className="leading-relaxed">
                We may update these terms from time to time. Continued use of the app constitutes acceptance 
                of any changes.
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

export default Terms;
