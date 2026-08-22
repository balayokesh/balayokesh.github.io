import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-zinc-800 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">// experience</h2>
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-3 md:ml-0 md:pl-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-12 last:mb-0 group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#050505] border border-emerald-500 hidden md:block"></div>
            
            <div className="bg-zinc-900/20 border border-zinc-800 rounded-sm p-6 md:p-8 hover:border-zinc-700 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 opacity-20"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-light text-white flex items-center gap-2">
                    Systems Engineer
                  </h3>
                  <div className="text-zinc-500 font-mono text-sm mt-1 uppercase tracking-widest">Tata Consultancy Services</div>
                </div>
                <div className="flex items-center gap-2 text-zinc-600 mt-2 md:mt-0 font-mono text-xs tracking-widest">
                  <Calendar size={14} />
                  <span>AUG 2023 – PRESENT</span>
                </div>
              </div>

              <div className="space-y-4 text-zinc-400 font-light text-sm">
                <div className="flex gap-3 items-start">
                  <span className="text-zinc-700 mt-1 shrink-0">•</span>
                  <p>Designed and developed a configurable Java Selenium-based incident assignment platform serving 4 teams.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-zinc-700 mt-1 shrink-0">•</span>
                  <p>Scaled platform to process 200+ tickets daily with burst capacity exceeding 1,000+ incidents/hour in a 24/7 unattended environment.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-zinc-700 mt-1 shrink-0">•</span>
                  <p>Achieved 99% SLA compliance for a global banking client by ensuring seamless processing across shift transitions.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-zinc-700 mt-1 shrink-0">•</span>
                  <p>Owned the end-to-end delivery lifecycle: direct client requirement gathering, solution design, development, UAT, and production deployment.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-zinc-700 mt-1 shrink-0">•</span>
                  <p>Built shell script-based automation for middleware handover and server health checks, saving 5+ hours per cycle.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-zinc-700 mt-1 shrink-0">•</span>
                  <p>Ensured enterprise-grade security compliance applying rigorous testing and zero-defect deployment standards on live banking servers.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
