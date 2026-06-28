import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#04070f]">
      <div className="absolute left-1/2 top-[-140px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="mb-5 text-4xl font-bold sm:text-5xl">
              Krishnanjaly<span className="gradientText"> S</span>
            </h2>
            <p className="max-w-xl leading-8 text-gray-400">
              Computer Science Engineering student passionate about Artificial Intelligence, Full Stack Development, and Data Science. I love building intelligent applications that solve real-world problems.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="flex flex-col items-start lg:items-end">
            <h3 className="mb-6 text-2xl font-semibold">Connect With Me</h3>
            <div className="mb-8 flex gap-4">
              <a href="https://github.com/Krishnanjaly" target="_blank" rel="noreferrer" className="glass flex h-14 w-14 items-center justify-center rounded-full transition hover:bg-blue-600">
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com/in/krishnanjaly-s-70734a291" target="_blank" rel="noreferrer" className="glass flex h-14 w-14 items-center justify-center rounded-full transition hover:bg-blue-600">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:krishnanjalys98@gmail.com" className="glass flex h-14 w-14 items-center justify-center rounded-full transition hover:bg-blue-600">
                <FaEnvelope size={22} />
              </a>
            </div>
            <button onClick={scrollToTop} className="flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
              <FaArrowUp /> Back To Top
            </button>
          </motion.div>
        </div>

        <div className="my-10 h-px w-full bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-gray-500 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Krishnanjaly S. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            Designed & Developed with <FaHeart className="text-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;