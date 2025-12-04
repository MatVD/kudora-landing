import { motion } from "framer-motion";
import { ExternalLink, Search, BookOpen, Github } from "lucide-react";

export function NetworkStatus() {
  const links = [
    {
      icon: Search,
      title: "Block Explorer",
      description: "View transactions and blocks on Blockscout",
      url: "https://blockscout.kudora.org/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: BookOpen,
      title: "Cosmos Directory",
      description: "Explore Kudora on Cosmos ecosystem",
      url: "https://cosmos.directory/kudora",
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Complete guides and API references",
      url: "https://github.com/Kudora-Labs",
      color: "from-teal-600 to-teal-700",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Open source code and repositories",
      url: "https://github.com/Kudora-Labs",
      color: "from-gray-600 to-gray-700",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Network Status: Live & Operational</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Network Resources
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The Kudora network is live and operational. Access essential tools
            and resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <link.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                {link.title}
                <ExternalLink
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              </h3>
              <p className="text-gray-400 text-sm">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
