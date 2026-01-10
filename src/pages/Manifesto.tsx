import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const Manifesto = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sectionDelay = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay }
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden font-sans text-foreground selection:bg-primary/20">
      {/* Background Gradients */}
      <div className="fixed inset-0 bg-gradient-obsidian z-0" />
      <div className="fixed inset-0 noise-overlay pointer-events-none z-10" />

      {/* Floating Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-blob" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-20">
        <Header onAndroidClick={() => {}} />

        <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
          <motion.div {...fadeInUp} className="mb-12">
            <Link to="/">
              <Button variant="ghost" className="group pl-0 hover:pl-2 transition-all gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <header className="mb-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              The <span className="gradient-text">Ignite</span> Manifesto
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            />
          </header>

          <div className="space-y-24">
            {/* The Problem */}
            <motion.section {...sectionDelay(0)} className="prose-section">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <span className="text-muted-foreground/50 text-xl font-mono">01.</span>
                The Problem: The Double Friction of Thought
              </h2>
              <div className="glass p-8 rounded-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  We live in a stream of consciousness. But when we try to capture that stream, we hit two walls that kill our best ideas.
                </p>

                <div className="grid md:grid-cols-2 gap-8 py-4">
                  <div className="bg-background/40 p-6 rounded-xl border border-destructive/20">
                    <h3 className="text-foreground font-semibold mb-3 flex items-center gap-2">
                       The Friction of Mechanics
                    </h3>
                    <p className="text-base">
                      Capturing a thought on mobile plays out like a tragedy. You unlock your phone, wait for Obsidian to load, scroll to the right section, and peck at a glass screen. By the time you're ready to type, the nuance of the idea has evaporated. This friction is fatal.
                    </p>
                  </div>

                  <div className="bg-background/40 p-6 rounded-xl border border-destructive/20">
                    <h3 className="text-foreground font-semibold mb-3 flex items-center gap-2">
                       The Friction of Structure
                    </h3>
                    <p className="text-base">
                      Even worse is what happens <em>while</em> we write. We unconsciously filter ourselves. We worry about spelling, phrasing, and <em>where</em> this note belongs. We switch from "Creator Mode" to "Librarian Mode" instantly.
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-primary/50 pl-6 italic text-foreground/80">
                  "The Tragedy: We are spending 50% of our brainpower on <em>managing</em> our notes (where does this go? how do I format this?) instead of, <em>ideating</em>, <em>thinking</em>, <em>inventing</em>, <em>creating</em>, <em>reflecting</em>. We need a system that lets us do just these things without distraction, while the machine handles the chores of structure and placement."
                </div>
              </div>
            </motion.section>

            {/* The Solution */}
            <motion.section {...sectionDelay(0.1)} className="prose-section">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <span className="text-muted-foreground/50 text-xl font-mono">02.</span>
                The Solution
              </h2>
              <div className="glass p-8 rounded-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">Ignite</strong> is the zero-friction bridge. It is not a replacement for Obsidian; it is the perfect satellite. It exists for one singular purpose: <strong className="text-primary">Instant, intelligent capture.</strong>
                </p>
                <p>
                  We are the "middleman" that instantly understands you and your Obsidian Daily Notes, and puts your thoughts where they belong.
                </p>

                <div className="grid gap-4 mt-6">
                  {[
                    { title: "Personalized Intelligence", desc: "The AI deeply understands your daily note template and updates it surgically. Just as you would if you manually did it." },
                    { title: "Fully Private", desc: "Your thoughts are yours. No cloud database. No 'sync' servers. it works just like another Obsidian plugin." },
                    { title: "Speed is a Feature", desc: "Capture must be faster than forgetting." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-secondary/5 p-4 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-mono shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-foreground font-semibold">{item.title}</h4>
                        <p className="text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Who This Is For */}
            <motion.section {...sectionDelay(0.2)} className="prose-section">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <span className="text-muted-foreground/50 text-xl font-mono">03.</span>
                Who This Is For
              </h2>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-1 border border-primary/20">
                <div className="bg-background/90 backdrop-blur-sm p-8 rounded-xl h-full">
                  <p className="text-xl font-medium text-foreground mb-6">
                    This is for the <span className="gradient-text font-bold">Architects of Thought</span>.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    You are the person who has a "Daily Note" template that you've refined for years. You track your sleep, your mood, your learning, and your tasks. You believe that writing things down clears the mind.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    But you're also human. You struggle to maintain the discipline of filling out that template every single day. You want to dump your brain contents into a system and have the system <em>deal with it</em>.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Functionality */}
            <motion.section {...sectionDelay(0.3)} className="prose-section">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <span className="text-muted-foreground/50 text-xl font-mono">04.</span>
                What It Actually Does
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: "🎙️",
                    title: "Effortless Capture",
                    desc: "We use state-of-the-art on-device transcription (WhisperKit) to turn your voice into perfect text. 4x faster than cloud transcription and just as accurate."
                  },
                  {
                    icon: "🧠",
                    title: "Intelligent Template Hydration",
                    desc: "Most AI tools just dump a summary at the bottom of a file. We are smarter. We read your existing Daily Note template. We understand your structure. We patch your file surgically. We don't overwrite; we populate."
                  },
                  {
                    icon: "📝",
                    title: "Archive & Drafts",
                    desc: "Not ready to commit to the vault? Keep it as a draft. Review it, edit it, then swipe to send. It's a staging area for your mind."
                  },
                  {
                    icon: "🔒",
                    title: "Zero Lock-In",
                    desc: "We are just editing Markdown files. If you delete our app tomorrow, your data is still just text files in your vault. We are a good citizen of the ecosystem."
                  }
                ].map((feature, i) => (
                  <div key={i} className="glass p-6 rounded-xl hover:bg-secondary/5 transition-colors">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Vision */}
            <motion.section {...sectionDelay(0.4)} className="text-center py-20">
              <div className="max-w-2xl mx-auto space-y-8">
                <h2 className="text-4xl font-bold gradient-text">The Vision</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We are building the <strong>ultimate input method for the thoughtful life.</strong>
                  <br /><br />
                  We believe that technology should dissolve. You shouldn't be "using an app"; you should be <strong>offloading your mind</strong> to allow it to flow freely and think clearly.
                </p>
                <div className="pt-8">
                   <p className="text-sm font-mono text-muted-foreground/60 uppercase tracking-widest">
                    Built with obsession in Swift. Open Source. Private First.
                   </p>
                </div>
              </div>
            </motion.section>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Manifesto;
