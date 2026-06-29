import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

const timeline = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: "B.Tech Computer Science & Engineering",
    organization: "St. Joseph's College of Engineering & Technology, Palai",
    duration: "2023 - Present",
    description: "Currently pursuing Bachelor's degree in Computer Science and Engineering with a CGPA of 8.74. Focused on Software Engineering, Artificial Intelligence, Data Structures, DBMS, Operating Systems, and Full Stack Development.",
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    title: "BS in Data Science",
    organization: "Indian Institute of Technology Madras",
    duration: "2024 - Present",
    description: "Pursuing BS in Data Science with coursework in Python, Statistics, Data Science, Machine Learning, Computational Thinking, Mathematics and Artificial Intelligence.",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    title: "MERN Stack Intern",
    organization: "Nest Digital",
    duration: "May 2025 - June 2025",
    description: "Developed responsive React applications, integrated REST APIs, worked with MongoDB, Express.js and Node.js while collaborating with experienced developers on real-world software projects.",
  },
  {
    id: 4,
    icon: <FaCertificate />,
    title: "Professional Certifications",
    organization: "Google & NPTEL",
    duration: "2024 - Present",
    description: "Completed Google Data Analytics Professional Certificate, NPTEL certifications in Artificial Intelligence, Privacy & Security, Python for Data Science and Industry 4.0.",
  },
];

function Timeline() {
  return (
    <section id="experience" className="section bg-transparent">
      <div className="section-shell max-w-6xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="section-heading">
          <p className="section-eyebrow">My Journey</p>
          <h2 className="section-title">
            Experience <span className="gradientText">& Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10" />

          {timeline.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.15 }} viewport={{ once: true }} className={`mb-16 flex ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col items-center`}>
              <div className="lg:w-5/12">
                <div className="glass rounded-[28px] p-8 transition duration-300 hover:border-blue-500/60">
                  <div className="mb-6 flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
                      <p className="mt-1 text-blue-400">{item.organization}</p>
                    </div>
                  </div>
                  <span className="mb-6 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">{item.duration}</span>
                  <p className="leading-8 text-gray-400">{item.description}</p>
                </div>
              </div>

              <div className="hidden lg:flex w-2/12 justify-center">
                <div className="h-6 w-6 rounded-full bg-blue-500 shadow-[0_0_30px_#3b82f6]" />
              </div>
              <div className="lg:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;