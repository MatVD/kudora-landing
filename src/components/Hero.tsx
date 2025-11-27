import { motion } from 'framer-motion';
import { ArrowRight, Code2, Network } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0F12]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -top-48 -left-48 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[120px] -bottom-48 -right-48 animate-pulse delay-1000" />
        <NetworkBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
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
            Kudora is an EVM-compatible Layer 1 built in the Cosmos ecosystem, designed for builders who want real value, not hype.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg font-semibold transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 flex items-center gap-2">
              Explore the Network
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-teal-600/10 hover:bg-teal-600/20 text-teal-300 border border-teal-500/30 rounded-lg font-semibold transition-all flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Start Building
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function NetworkBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="#8B5CF6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      {[...Array(8)].map((_, i) => (
        <motion.line
          key={i}
          x1={`${Math.random() * 100}%`}
          y1={`${Math.random() * 100}%`}
          x2={`${Math.random() * 100}%`}
          y2={`${Math.random() * 100}%`}
          stroke="#8B5CF6"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: 'reverse' }}
        />
      ))}
    </svg>
  );
}
