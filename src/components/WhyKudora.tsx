import { motion } from 'framer-motion';
import { Zap, Wrench, Shield, Users, TrendingUp, DollarSign } from 'lucide-react';

export function WhyKudora() {
  const benefits = [
    {
      icon: Zap,
      title: 'Deploy Instantly',
      description: 'Deploy Solidity smart contracts instantly with zero friction',
    },
    {
      icon: Wrench,
      title: 'Familiar Tooling',
      description: 'Use familiar EVM tooling: Hardhat, Foundry, ethers.js, viem',
    },
    {
      icon: Shield,
      title: 'Cosmos-Grade Performance',
      description: 'Cosmos-grade performance, modularity and security',
    },
    {
      icon: Users,
      title: 'Transparent Governance',
      description: 'Transparent and community-driven governance model',
    },
    {
      icon: TrendingUp,
      title: 'Builder Focused',
      description: 'A network focused on builders, not speculation',
    },
    {
      icon: DollarSign,
      title: 'Low Fees',
      description: 'Low and predictable transaction fees for users and developers',
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0F0F12] to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMzksMzIsOTQsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Build on Kudora
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Concrete benefits for developers who want to build without compromise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-teal-500/50 transition-all hover:bg-gray-800/60"
            >
              <benefit.icon className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl bg-gray-900/80 border border-gray-700/50 overflow-hidden shadow-2xl">
            <div className="bg-gray-800/50 px-6 py-3 flex items-center gap-2 border-b border-gray-700/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-gray-400 text-sm ml-4">HelloKudora.sol</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">
                <code>
                  <span className="text-purple-400">pragma</span> <span className="text-teal-300">solidity</span> ^<span className="text-yellow-300">0.8.20</span>;{'\n\n'}
                  <span className="text-purple-400">contract</span> <span className="text-teal-300">HelloKudora</span> {'{\n'}
                  {'    '}<span className="text-purple-400">function</span> <span className="text-blue-300">hello</span>() <span className="text-purple-400">public pure returns</span> (<span className="text-teal-300">string memory</span>) {'{\n'}
                  {'        '}<span className="text-purple-400">return</span> <span className="text-yellow-300">"Welcome to Kudora L1"</span>;{'\n'}
                  {'    }'}
                  {'\n}'}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
