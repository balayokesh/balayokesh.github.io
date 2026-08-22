import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-zinc-800 bg-transparent">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-zinc-500 font-mono text-xs mb-4 uppercase tracking-widest">// what's_next</div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 uppercase tracking-tighter">Get In Touch</h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto font-light">
            I'm currently looking for new opportunities to build scalable backend systems. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <a href="mailto:balayokeshmani@outlook.com" className="inline-block bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-sm font-semibold text-sm uppercase tracking-widest transition-colors mb-16 font-mono">
            Say Hello
          </a>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/balayokesh" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/balayokeshmani" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:balayokeshmani@outlook.com" className="text-zinc-500 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="text-center mt-20 text-zinc-600 font-mono text-[10px] uppercase tracking-widest border-t border-zinc-800 pt-8 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Built with React & Tailwind CSS</p>
      </div>
    </section>
  );
}
