import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Smartphone, Layers, Moon } from "lucide-react";
import { SiInstagram} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiYoutube } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

interface HeaderProps {
  onAndroidClick: () => void;
}

const Header = ({ onAndroidClick }: HeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-2"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between glass px-6 py-2 rounded-2xl">
        {/* Logo Icon + Brand Name */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            {/* <span className="text-sm font-medium text-foreground px-2.5 py-1 rounded-lg border border-primary/20 bg-primary/5 hidden sm:inline">
              Ignite
            </span> */}
          </Link>
        </div>

        {/* Social Links + Android Button */}
        <div className="flex items-center gap-6">
          <Link
            to="/manifesto"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Manifesto
          </Link>

          {/* Social Links */}
          <div className="hidden sm:flex items-center gap-6">
            <a
              href="https://github.com/psycho-baller/obsidian-journal-landing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/psycho.baller"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/rami__maalouf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <BsTwitterX className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@ramimaalouf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="YouTube"
            >
              <FiYoutube className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/orbitlabsdotstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>

          <div className="w-px h-6 bg-border hidden sm:block" />

          {/* Android Button */}
          <button onClick={onAndroidClick} className="btn-android flex items-center gap-2 bg-secondary/10 hover:bg-secondary/20 border-secondary/20 hover:border-secondary/40 text-secondary-foreground">
            <Smartphone className="w-4 h-4" />
            <span className="hidden sm:inline">Android Waitlist</span>
            <span className="sm:hidden">Android</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
