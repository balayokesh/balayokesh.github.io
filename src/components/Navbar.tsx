import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#050505]/90 backdrop-blur-md py-4 shadow-sm border-b border-zinc-800" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-mono text-white tracking-tighter uppercase">
          Bala Yokesh Mani
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.a 
              key={idx}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-[10px] font-mono text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              <span className="text-zinc-600 mr-1">//</span>
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            href="https://docs.google.com/document/d/1FtKitcE1Q18qrqtA64cNWP-aDpZbIZx-yXVpEzeoUl4/edit?usp=sharing"
            target="_blank"
            className="px-4 py-2 border border-zinc-700 text-zinc-400 hover:bg-white hover:text-black transition-colors text-[10px] font-mono uppercase tracking-widest"
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-zinc-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-zinc-800 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link, idx) => (
            <a 
              key={idx}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-zinc-400 hover:text-white py-2 font-mono text-xs uppercase tracking-widest"
            >
              <span className="text-zinc-600 mr-2">//</span>
              {link.name}
            </a>
          ))}
          <a 
            href="https://docs.google.com/document/d/1FtKitcE1Q18qrqtA64cNWP-aDpZbIZx-yXVpEzeoUl4/edit?usp=sharing"
            className="mt-2 w-max px-6 py-2 border border-zinc-700 text-zinc-400 hover:bg-white hover:text-black transition-colors text-xs font-mono uppercase tracking-widest"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
