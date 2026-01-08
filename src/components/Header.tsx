import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

interface HeaderProps {
  onAndroidClick: () => void;
}

const Header = ({ onAndroidClick }: HeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-purple">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 text-primary-foreground"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-semibold text-foreground">Obsidian Journal</span>
        </div>

        {/* Android Button */}
        <button onClick={onAndroidClick} className="btn-android flex items-center gap-2">
          <Smartphone className="w-4 h-4" />
          <span>Android Waitlist</span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
