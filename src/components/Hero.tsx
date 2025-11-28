import { motion } from "framer-motion";
import { ArrowRight, Code2, Network } from "lucide-react";
import { ParticlesBackground } from './ParticlesBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0F12]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -top-48 -left-48 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[120px] -bottom-48 -right-48 animate-pulse delay-1000" />
        <ParticlesBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-16 md:mt-0 px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-8">
            <Network className="w-4 h-4" />
            <span>Live Layer 1 Network</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Build with Purpose.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Deploy on Kudora.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Kudora is an EVM-compatible Layer 1 built in the Cosmos ecosystem,
            designed for builders who want real value, not hype.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg font-semibold transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 flex items-center gap-2">
              <a
                href="https://cosmos.directory/kudora"
                className="flex items-center gap-2"
              >
                Explore the Network
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </button>
            <button className="group px-8 py-4 bg-teal-600/10 hover:bg-teal-600/20 text-teal-300 border border-teal-500/30 rounded-lg font-semibold transition-all flex items-center gap-2">
              <a
                href="https://github.com/Kudora-Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Code2 className="w-5 h-5" />
                Start Building
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
