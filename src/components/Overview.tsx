import { motion } from 'framer-motion';
import { Network, Code2, Link2 } from 'lucide-react';

export function Overview() {
  const features = [
    {
      icon: Network,
      title: 'Live Network',
      description: 'Operational Layer 1 blockchain ready for production deployments',
    },
    {
      icon: Code2,
      title: 'EVM Compatible',
      description: 'Deploy Solidity contracts with your existing Ethereum tools',
    },
    {
      icon: Link2,
      title: 'Cosmos Interoperability',
      description: 'Built on Cosmos SDK with IBC cross-chain capabilities',
    },
  ];

  return (
    <section className="py-24 bg-[#0F0F12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What is Kudora
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-300">
            <p>
              Kudora is a live Layer 1 blockchain built on Cosmos SDK with full EVM compatibility,
              enabling developers to leverage the best of both ecosystems.
            </p>
            <p>
              Native token: <span className="text-purple-400 font-semibold">KUD</span>
            </p>
            <p className="text-xl font-semibold text-teal-400">
              "An ecosystem where recognition is a currency."
            </p>
            <p>
              Kudora focuses on ethical governance and empowering developers and creators to build
              meaningful applications without the noise of speculation and hype.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-teal-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
