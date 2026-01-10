import { Link } from "react-router-dom";
import { Layers } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiYoutube } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Layers className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">
              © 2026 Ignite by <a href="https://orbitlabs.studio" className="text-primary hover:underline transition-colors" target="_blank">Orbit Labs</a>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/psycho-baller/obsidian-journal-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/psycho.baller"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/rami__maalouf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <BsTwitterX className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@ramimaalouf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <FiYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/orbitlabsdotstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
