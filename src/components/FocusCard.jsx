import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function FocusCard({
  icon,
  title,
  description,
  technologies = [],
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      transition-all
      duration-500
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        -right-24
        -top-24
        w-60
        h-60
        rounded-full
        bg-blue-500/10
        blur-[120px]
        opacity-0
        group-hover:opacity-100
        duration-500
        "
      />

      {/* Animated Border */}

      <div
        className="
        absolute
        inset-0
        rounded-[28px]
        border
        border-blue-500/0
        group-hover:border-blue-500/40
        duration-500
        "
      />

      <div className="relative z-10">

        {/* Icon */}

        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-gradient-to-br
          from-blue-600
          to-cyan-500
          flex
          items-center
          justify-center
          text-3xl
          shadow-lg
          shadow-blue-500/30
          mb-8
          "
        >
          {icon}
        </div>

        {/* Title */}

        <h3 className="text-2xl font-bold mb-4">
          {title}
        </h3>

        {/* Description */}

        <p className="text-gray-400 leading-7 mb-8">
          {description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="
              px-4
              py-2
              rounded-full
              text-sm
              border
              border-blue-500/20
              bg-blue-500/10
              text-blue-300
              hover:bg-blue-500/20
              transition
              "
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Bottom Arrow */}

        <div className="flex justify-end mt-8">

          <motion.div
            whileHover={{
              x: 5,
            }}
            className="
            w-12
            h-12
            rounded-full
            bg-blue-600
            flex
            justify-center
            items-center
            "
          >
            <FaArrowRight />
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
}

export default FocusCard;