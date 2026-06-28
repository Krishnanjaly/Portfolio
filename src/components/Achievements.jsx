import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaMedal, FaGraduationCap } from "react-icons/fa";

const achievements = [
  {
    id: 1,
    icon: <FaCertificate />,
    title: "Google Data Analytics Professional Certificate",
    organization: "Google",
    description: "Completed the Google Data Analytics Professional Certificate covering data analysis, visualization, SQL, spreadsheets, Tableau, and R programming.",
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    title: "BS Foundation Level",
    organization: "IIT Madras",
    description: "Successfully completed the Foundation Level in IIT Madras BS Degree in Data Science and Applications.",
  },
  {
    id: 3,
    icon: <FaAward />,
    title: "NPTEL Certifications",
    organization: "NPTEL",
    description: "Completed certifications in Artificial Intelligence, Python for Data Science, Privacy & Security in Online Social Media, and Industry 4.0.",
  },
  {
    id: 4,
    icon: <FaMedal />,
    title: "AI & Machine Learning Workshop",
    organization: "NIT Calicut",
    description: "Participated in a hands-on Artificial Intelligence and Machine Learning workshop conducted by NIT Calicut.",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="section bg-transparent">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="section-heading">
          <p className="section-eyebrow">Achievements</p>
          <h2 className="section-title">
            Certifications <span className="gradientText">& Milestones</span>
          </h2>
          <p className="section-subtitle">Continuous learning has shaped my journey and helped me build a strong foundation across technology, data, and AI.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {achievements.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.15 }} viewport={{ once: true }} whileHover={{ y: -8 }} className="glass rounded-[28px] border border-white/10 p-8 transition-all hover:border-blue-500/60">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl">{item.icon}</div>
              <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
              <p className="mb-5 text-blue-400">{item.organization}</p>
              <p className="leading-8 text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mt-20 grid gap-6 md:grid-cols-4">
          <div className="glass rounded-[24px] p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-400 sm:text-5xl">10+</h2>
            <p className="mt-3 text-gray-400">Certifications</p>
          </div>
          <div className="glass rounded-[24px] p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-400 sm:text-5xl">15+</h2>
            <p className="mt-3 text-gray-400">Projects</p>
          </div>
          <div className="glass rounded-[24px] p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-400 sm:text-5xl">3+</h2>
            <p className="mt-3 text-gray-400">Workshops</p>
          </div>
          <div className="glass rounded-[24px] p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-400 sm:text-5xl">2</h2>
            <p className="mt-3 text-gray-400">Degree Programs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;