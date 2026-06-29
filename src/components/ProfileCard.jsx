import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaDownload,
  FaStar,
} from "react-icons/fa";

function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: .7 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      className="
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-blue-500/20
      bg-white/5
      backdrop-blur-xl
      p-8
      "
    >
      {/* Glow */}

      <div className="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative z-10">

        <div className="flex items-center gap-5 mb-8">

          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-3xl">

            👩‍💻

          </div>

          <div>

            <h2 className="text-3xl font-bold">

              Krishnanjaly S

            </h2>

            <p className="text-blue-400">

              Computer Science Engineer

            </p>

          </div>

        </div>

        <div className="space-y-5">

          <Info
            icon={<FaGraduationCap />}
            title="Education"
            value="B.Tech CSE + IITM BS Data Science"
          />

          <Info
            icon={<FaLaptopCode />}
            title="Specialization"
            value="AI • Full Stack • Data Science"
          />

          <Info
            icon={<FaMapMarkerAlt />}
            title="Location"
            value="Kerala, India"
          />

          <Info
            icon={<FaStar />}
            title="CGPA"
            value="8.74"
          />

        </div>

        <button
          className="
          mt-10
          w-full
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          py-4
          rounded-xl
          flex
          justify-center
          items-center
          gap-3
          font-semibold
          hover:scale-105
          duration-300
          "
        >
          <FaDownload />

          Download Resume

        </button>

      </div>

    </motion.div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">

      <div className="text-blue-400 text-xl">

        {icon}

      </div>

      <div>

        <h4 className="text-gray-400 text-sm">

          {title}

        </h4>

        <p className="font-semibold">

          {value}

        </p>

      </div>

    </div>
  );
}

export default ProfileCard;