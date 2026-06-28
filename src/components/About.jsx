import ProfileCard from "./ProfileCard";

import StatCard from "./StatCard";


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBrain,
  FaCloud,
  FaCode,
  FaDatabase,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
  FaRobot,
  FaStar,
} from "react-icons/fa";

function AnimatedNumber({ value, suffix = "" }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const numericValue = parseFloat(value);
    let frame = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(numericValue * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  const formatted = Number.isInteger(parseFloat(value)) ? display.toFixed(0) : display.toFixed(2);

  return <span>{formatted}{suffix}</span>;
}

function About() {
  const stats = [
    { number: "15", title: "Projects", suffix: "+", icon: <FaCode /> },
    { number: "20", title: "Technologies", suffix: "+", icon: <FaLaptopCode /> },
    { number: "10", title: "Certifications", suffix: "+", icon: <FaStar /> },
    { number: "8.54", title: "CGPA", suffix: "", icon: <FaGraduationCap /> },
  ];

  const focusAreas = [
    {
      title: "Full Stack Craft",
      description: "Designing responsive interfaces and reliable systems with React, Node, and modern tooling.",
      icon: <FaLaptopCode />,
      tone: "from-blue-500/20 via-slate-900/70 to-cyan-400/10",
    },
    {
      title: "AI & Intelligence",
      description: "Building smart features around computer vision, OCR, and practical machine learning workflows.",
      icon: <FaBrain />,
      tone: "from-cyan-500/20 via-slate-900/70 to-blue-500/10",
    },
    {
      title: "Data & Cloud",
      description: "Turning ideas into scalable products through thoughtful data pipelines and cloud-based architecture.",
      icon: <FaCloud />,
      tone: "from-sky-500/20 via-slate-900/70 to-indigo-500/10",
    },
    {
      title: "Product Thinking",
      description: "Balancing elegant UI, speed, and engineering discipline to create experiences that feel effortless.",
      icon: <FaDatabase />,
      tone: "from-indigo-500/20 via-slate-900/70 to-cyan-400/10",
    },
  ];

  const education = [
    {
      period: "2023 — Present",
      title: "B.Tech in Computer Science & Engineering",
      institution: "St. Joseph's College of Engineering & Technology",
      detail: "Focused on software engineering, intelligent systems, and modern application development.",
    },
    {
      period: "2024 — Present",
      title: "BS in Data Science",
      institution: "Indian Institute of Technology Madras",
      detail: "Developing a strong foundation in analytics, mathematics, and computational problem-solving.",
    },
  ];

  const profileItems = [
    { label: "Name", value: "Krishnanjaly S" },
    { label: "Specialization", value: "AI • Full Stack • Data Science" },
    { label: "Location", value: "Kerala, India" },
    { label: "Status", value: "Open to internship opportunities" },
  ];

  return (
    <section id="about" className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_32%)]" />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-10 lg:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.2),_transparent_40%)]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3.5 py-2 text-sm font-medium text-sky-200">
                <FaStar className="text-sky-400" />
                Open to internship opportunities
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">About Me</p>
                  <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Building <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">future-ready</span> digital experiences.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    I&apos;m Krishnanjaly S, a Computer Science student focused on AI, full-stack development, and data-driven product design.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="text-4xl font-semibold text-white sm:text-5xl">
                    <AnimatedNumber value="8.54" />
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">CGPA</p>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-base leading-8 text-slate-400">
                <p>
                  I enjoy transforming ambitious ideas into polished software through sharp engineering, thoughtful architecture, and modern product thinking.
                </p>
                <p>
                  My work blends cloud-native development, intelligent systems, and clean interface design to create experiences that feel both powerful and effortless.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/resume.pdf"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-sky-400/20 bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(56,189,248,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(56,189,248,0.34)]"
                >
                  <FaDownload className="transition duration-300 group-hover:-translate-y-0.5" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  Let&apos;s connect
                  <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="rounded-[36px] border border-sky-400/20 bg-gradient-to-br from-sky-500/15 via-slate-900/60 to-cyan-400/10 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-xl text-white shadow-[0_10px_30px_rgba(56,189,248,0.24)]">
                <FaRobot />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Profile</p>
                <h3 className="text-xl font-semibold text-white">Krishnanjaly S</h3>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              {profileItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + index * 0.04 }}
                  className="rounded-[20px] border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-slate-100">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[36px] border border-white/10 bg-white/[0.035] p-7 shadow-[0_22px_90px_rgba(0,0,0,0.2)] backdrop-blur-2xl sm:p-8"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Signal Board</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">What I focus on</h3>
              </div>
              <div className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-sky-200">
                AI • Web • Data
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {focusAreas.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.05 * index }}
                  className={`rounded-[24px] border border-white/10 bg-gradient-to-br ${item.tone} p-5`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/70 text-lg text-sky-300">
                    {item.icon}
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="rounded-[36px] border border-white/10 bg-slate-950/60 p-7 shadow-[0_22px_90px_rgba(0,0,0,0.2)] backdrop-blur-2xl sm:p-8"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Snapshot</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Progress at a glance</h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                Numbers
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.06 * index }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-lg text-sky-300">
                    {item.icon}
                  </div>
                  <div className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
                    <AnimatedNumber value={item.number} suffix={item.suffix} />
                  </div>
                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-[36px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Academic Path</p>
              <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Education that keeps evolving</h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
                I&apos;m continuously learning at the intersection of engineering, data, and intelligent systems so the work stays both practical and future-facing.
              </p>
            </div>

            <div className="space-y-4">
              {education.map((entry, index) => (
                <motion.div
                  key={entry.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.06 * index }}
                  className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-sky-200/80">{entry.period}</p>
                      <h4 className="mt-2 text-xl font-semibold text-white">{entry.title}</h4>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-xl text-sky-300">
                      <FaGraduationCap />
                    </div>
                  </div>
                  <p className="mt-4 text-base font-medium text-sky-300">{entry.institution}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{entry.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}

export default About;