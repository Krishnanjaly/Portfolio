import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

const roles = [
  "Computer Science Engineer",
  "AI Developer",
  "Full Stack Developer",
  "Data Science Student",
];

function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 90);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="section relative overflow-hidden pt-28 lg:pt-32">
      <div className="absolute top-[-220px] right-[-180px] h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[140px]" />
      <div className="absolute bottom-[-180px] left-[-120px] h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="section-shell grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
            Available for internships and collaborations
          </div>

          <h1 className="mt-7 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Hi,
            <br />
            I&apos;m <span className="gradientText whitespace-nowrap">Krishnanjaly S</span>
          </h1>

          <h2 className="mt-5 h-14 text-2xl font-semibold text-gray-300 sm:text-3xl">
            {text}
            <span className="ml-1 animate-pulse text-blue-400">|</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I build thoughtful AI-powered products, modern web experiences, and scalable software that turns ideas into dependable digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/resume.pdf" className="primaryBtn inline-flex items-center justify-center px-7 py-3 font-semibold">
              Download Resume
            </a>
            <a href="#projects" className="secondaryBtn btn inline-flex items-center justify-center px-7 py-3 font-semibold">
              View Projects
            </a>
          </div>

          <div className="mt-10 flex gap-5">
            <a href="https://github.com/Krishnanjaly" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-blue-400 hover:text-blue-400">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/krishnanjaly-s-70734a291" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-blue-400 hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-[440px] w-[440px] rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <img src="/profile1.jpeg" alt="profile" className="w-full max-w-[380px] rounded-[28px] object-cover" />
          </div>

          <motion.div animate={{ y: [0, -16, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="glass absolute -top-6 right-2 rounded-2xl px-4 py-3 text-sm font-medium">
            💻 React Developer
          </motion.div>
          <motion.div animate={{ y: [0, 18, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="glass absolute bottom-20 -left-4 rounded-2xl px-4 py-3 text-sm font-medium">
            🤖 AI Engineer
          </motion.div>
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="glass absolute bottom-[-18px] right-10 rounded-2xl px-4 py-3 text-sm font-medium">
            📊 Data Science
          </motion.div>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <FaArrowDown className="text-2xl text-blue-400" />
      </motion.div>
    </section>
  );
}

export default Hero;