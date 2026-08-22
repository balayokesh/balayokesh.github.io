import { motion } from "motion/react";
import { Server, Code2, Database, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-blue-400 mb-4" size={28} />,
      skills: ["Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks",
      icon: <Server className="text-green-400 mb-4" size={28} />,
      skills: ["Spring Boot", "Hibernate/JPA", "React.js", "Express.js", "Node.js"]
    },
    {
      title: "Databases",
      icon: <Database className="text-purple-400 mb-4" size={28} />,
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Cloud",
      icon: <Wrench className="text-orange-400 mb-4" size={28} />,
      skills: ["Git", "Docker", "GCP", "Firebase", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 border-t border-zinc-800 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">// technical_arsenal</h2>
          <p className="text-zinc-400 text-lg font-light">Core technologies I use to build robust and scalable systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-sm border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-colors"
            >
              {category.icon}
              <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-300 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-2 py-0.5 text-[9px] uppercase tracking-widest font-mono rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
