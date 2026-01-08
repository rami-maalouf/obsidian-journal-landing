import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Apple, Smartphone, CheckCircle, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: "ios" | "android";
}

const WaitlistModal = ({ isOpen, onClose, platform }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#7C39ED", "#8758FF", "#A78BFA", "#C4B5FD"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Auto close after delay
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
      setEmail("");
    }, 3000);
  };

  const handleClose = () => {
    onClose();
    setIsSuccess(false);
    setEmail("");
    setError("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass rounded-2xl p-8 w-full max-w-md glow-purple">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSuccess ? (
                <>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      {platform === "ios" ? (
                        <Apple className="w-7 h-7 text-primary-foreground" />
                      ) : (
                        <Smartphone className="w-7 h-7 text-primary-foreground" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Join the {platform === "ios" ? "iOS" : "Android"} Waitlist
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Be notified when we launch
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="input-glass"
                        disabled={isSubmitting}
                      />
                      {error && (
                        <p className="mt-2 text-sm text-destructive">{error}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-hero flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                          <span>Joining...</span>
                        </>
                      ) : (
                        <span>Join Waitlist</span>
                      )}
                    </button>
                  </form>

                  <p className="mt-4 text-xs text-center text-muted-foreground">
                    No spam, ever. We'll only email you when we're ready to launch.
                  </p>
                </>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-muted-foreground">
                    We'll let you know as soon as we launch on {platform === "ios" ? "iOS" : "Android"}.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
