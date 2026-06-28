import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiNextdotjs, SiFastapi, SiTensorflow, SiPytorch, SiFirebase, SiGithub } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython />, level: 95 },
      { name: "Java", icon: <FaJava />, level: 90 },
      { name: "JavaScript", icon: <SiJavascript />, level: 92 },
      { name: "TypeScript", icon: <SiTypescript />, level: 85 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, level: 95 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 90 },
      { name: "Express", icon: <SiExpress />, level: 88 },
      { name: "FastAPI", icon: <SiFastapi />, level: 80 },
      { name: "Firebase", icon: <SiFirebase />, level: 82 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 92 },
      { name: "MySQL", icon: <SiMysql />, level: 90 },
    ],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow />, level: 75 },
      { name: "PyTorch", icon: <SiPytorch />, level: 72 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 94 },
      { name: "GitHub", icon: <SiGithub />, level: 95 },
      { name: "Docker", icon: <FaDocker />, level: 75 },
    ],
  },
];

function SkillBar({ level }) {
  return (
    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
      <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section bg-transparent">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-heading">
          <p className="section-eyebrow">My Skills</p>
          <h2 className="section-title">
            Technical <span className="gradientText">Expertise</span>
          </h2>
          <p className="section-subtitle">I enjoy building intelligent software using modern technologies, from full-stack development to AI and cloud-powered products.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.08 }} className="card p-8">
              <h3 className="mb-8 text-2xl font-semibold sm:text-3xl">{category.title}</h3>
              <div className="space-y-8">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl text-blue-400 sm:text-3xl">{skill.icon}</div>
                        <h4 className="text-base font-semibold sm:text-lg">{skill.name}</h4>
                      </div>
                      <span className="font-semibold text-blue-400">{skill.level}%</span>
                    </div>
                    <SkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mt-20 grid gap-6 md:grid-cols-4">
          <div className="glass rounded-[24px] p-8 text-center">
            <h1 className="text-4xl font-bold text-blue-400 sm:text-5xl">20+</h1>
            <p className="mt-3 text-gray-400">Technologies</p>
          </div>
          <div className="glass rounded-[24px] p-8 text-center">
            <h1 className="text-4xl font-bold text-blue-400 sm:text-5xl">15+</h1>
            <p className="mt-3 text-gray-400">Projects</p>
          </div>
          <div className="glass rounded-[24px] p-8 text-center">
            <h1 className="text-4xl font-bold text-blue-400 sm:text-5xl">10+</h1>
            <p className="mt-3 text-gray-400">Certifications</p>
          </div>
          <div className="glass rounded-[24px] p-8 text-center">
            <h1 className="text-4xl font-bold text-blue-400 sm:text-5xl">3+</h1>
            <p className="mt-3 text-gray-400">Years Learning</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;