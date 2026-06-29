import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-slate-950/80 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 sm:px-8">
        <a href="#home" className="text-2xl sm:text-3xl font-bold tracking-tight gradientText">
          Krishnanjaly S
        </a>

        <nav className="hidden lg:flex gap-8 text-sm font-medium">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group text-gray-300 hover:text-white transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="https://github.com/Krishnanjaly" target="_blank" rel="noreferrer" className="rounded-full p-2 text-gray-300 hover:text-blue-400 transition">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/krishnanjaly-s-70734a291" target="_blank" rel="noreferrer" className="rounded-full p-2 text-gray-300 hover:text-blue-400 transition">
            <FaLinkedin size={20} />
          </a>
          <a href="/resume.pdf" className="primaryBtn rounded-full px-5 py-2.5 font-semibold text-sm">
            Resume
          </a>
        </div>

        <button className="lg:hidden text-3xl text-white" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "100vh" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden lg:hidden bg-slate-950/95"
      >
        <div className="flex flex-col justify-center items-center h-full gap-8 text-xl">
          {links.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="hover:text-blue-400 transition">
              {item.name}
            </a>
          ))}
          <div className="flex gap-8 mt-2">
            <a href="https://github.com/Krishnanjaly" target="_blank" rel="noreferrer">
              <FaGithub size={26} />
            </a>
            <a href="https://linkedin.com/in/krishnanjaly-s-70734a291" target="_blank" rel="noreferrer">
              <FaLinkedin size={26} />
            </a>
          </div>
          <a href="/resume.pdf" className="primaryBtn mt-4 px-8 py-3 rounded-full">
            Download Resume
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Navbar;