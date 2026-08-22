import { motion } from "motion/react";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "TransitFlow",
      description: "A REST API backend utilizing Gemini Vision AI to detect bus route mismatches from commuter photos, cross-referencing windshield stickers against live LED displays in real-time.",
      tech: ["Java 21", "Spring Boot", "Spring AI", "Docker"],
      github: "https://github.com/balayokesh/transit-flow-backend",
      link: "https://transit-flow-frontend.vercel.app/"
    },
    {
      title: "Asset Tracker",
      description: "An offline Java desktop app featuring a repository-pattern data layer over UUID-keyed JSON files. Decoupled asset metadata from media attachments to guarantee safe deletion with zero data loss.",
      tech: ["Java", "JavaFX", "Jackson"],
      github: "https://github.com/balayokesh/asset-tracker-desktop",
      link: "https://balayokesh.github.io/asset-tracker-desktop/"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-800 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">// featured_projects</h2>
          <p className="text-zinc-400 text-lg font-light">Recent systems and architectures I've built.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between p-8 rounded-sm border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <FolderGit2 className="text-emerald-500" size={32} />
                  <div className="flex gap-4 text-zinc-500">
                    <a href={project.github} target="_blank" className="hover:text-white transition-colors"><Github size={20} /></a>
                    <a href={project.link} target="_blank" className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <h3 className="text-2xl font-light text-white mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6 font-light text-sm">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-[9px] uppercase tracking-widest text-zinc-300 mt-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-zinc-800 px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
