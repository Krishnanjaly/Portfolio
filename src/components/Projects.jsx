import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured === true);
  const otherProjects = projects.filter((project) => project.featured === false);

  return (
    <section id="projects" className="section bg-transparent">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="section-heading">
          <p className="section-eyebrow">My Work</p>
          <h2 className="section-title">
            Featured <span className="gradientText">Projects</span>
          </h2>
          <p className="section-subtitle">A selection of products and applications that reflect my work in AI, full-stack development, and thoughtful product design.</p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.15 }} viewport={{ once: true }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="my-20 h-px w-full bg-white/10" />

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Other Projects</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.12 }} viewport={{ once: true }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mt-20 text-center">
          <a href="https://github.com/Krishnanjaly" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-blue-600/30 transition hover:bg-blue-700">
            View More Projects <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;