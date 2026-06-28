import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ y: -10, scale: 1.01 }} transition={{ duration: 0.35 }} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0f1424] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
      <div className="relative h-64 overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-3.5 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          {project.category}
        </span>
      </div>

      <div className="p-7 sm:p-8">
        <h2 className="mb-3 text-2xl font-bold sm:text-3xl">{project.title}</h2>
        <p className="mb-6 leading-7 text-gray-400">{project.description}</p>

        <div className="mb-8 flex flex-wrap gap-2.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-sm text-blue-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl bg-[#1a2237] px-5 py-3 text-sm font-medium transition hover:bg-blue-600">
            <FaGithub /> GitHub
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-blue-500/50 px-5 py-3 text-sm font-medium transition hover:bg-blue-600">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}

export default ProjectCard;