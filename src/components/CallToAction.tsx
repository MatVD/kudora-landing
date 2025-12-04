import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 bg-[#0F0F12] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-br from-purple-600/10 via-transparent to-teal-600/10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join the Builders
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              of Kudora
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Be part of a blockchain ecosystem that values real contributions,
            technical excellence, and meaningful innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/Kudora-Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg font-semibold transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 flex items-center gap-2 text-lg"
              aria-label="Start building on Kudora - Access GitHub resources"
            >
              Start Building
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://discord.gg/tRzeP4Cy"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-teal-600/10 hover:bg-teal-600/20 text-teal-300 border border-teal-500/30 rounded-lg font-semibold transition-all flex items-center gap-2 text-lg"
              aria-label="Join Kudora community on Discord"
            >
              <Users className="w-5 h-5" aria-hidden="true" />
              Join Discord
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <a
              href="https://cosmos.directory/kudora"
              className="hover:text-purple-400 transition-colors"
            >
              Live Network Status
            </a>
            <a
              href="https://github.com/Kudora-Labs"
              className="hover:text-purple-400 transition-colors"
            >
              Documentation
            </a>
            <a
              href="https://github.com/Kudora-Labs"
              className="hover:text-purple-400 transition-colors"
            >
              Developer Resources
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
