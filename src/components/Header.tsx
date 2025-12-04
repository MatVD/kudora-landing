import { Github, FileText, Book } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo_dark_v1.svg";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0F0F12]/80 border-b border-white/5"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top - Kudora Chain homepage"
          >
            <img
              src={logo}
              alt="Kudora Chain - EVM-compatible Layer 1 blockchain logo"
              className="w-12 h-12 border-white border rounded-full"
              width="48"
              height="48"
            />
          </button>

          {/* Navigation */}
          <nav
            className="flex items-center gap-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <a
              href="https://github.com/Kudora-Labs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Kudora Labs repositories on GitHub"
              className="flex items-center gap-0 sm:gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://kudora.org/white-paper/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read Kudora Chain technical whitepaper"
              className="flex items-center gap-0 sm:gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              <FileText className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline">Whitepaper</span>
            </a>
            <a
              href="https://github.com/Kudora-Labs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Browse Kudora Chain developer documentation"
              className="flex items-center gap-0 sm:gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Book className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline">Documentation</span>
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
