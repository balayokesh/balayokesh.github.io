import { motion } from "motion/react";
import { Terminal, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 text-emerald-500 font-mono mb-4 text-xs tracking-widest uppercase">
            <span>[ SYSTEM STATUS: ACTIVE ]</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tighter uppercase">
            Bala Yokesh Mani
          </h1>
          <h2 className="text-xl md:text-2xl text-zinc-400 font-mono mb-8 uppercase tracking-widest">
            Backend Software Engineer
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light">
            I design and build reliable, scalable backend systems with a high bar for engineering quality. Currently engineering robust automation platforms serving global banking clients.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#experience" className="bg-white hover:bg-zinc-200 text-black px-6 py-3 rounded-sm font-semibold transition-colors flex items-center gap-2 uppercase tracking-widest text-xs">
              View Experience <ChevronRight size={18} />
            </a>
            <a href="#contact" className="bg-transparent hover:bg-white hover:text-black text-zinc-300 px-6 py-3 rounded-sm font-semibold transition-colors border border-zinc-700 uppercase tracking-widest text-xs">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
