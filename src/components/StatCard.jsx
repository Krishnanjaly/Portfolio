import { motion } from "framer-motion";

function StatCard({
  icon,
  number,
  label,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      group
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        duration-500
        bg-gradient-to-br
        from-blue-500/10
        to-cyan-500/5
        "
      />

      {/* Icon */}

      <div
        className="
        relative
        w-16
        h-16
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        flex
        items-center
        justify-center
        text-2xl
        mb-6
        shadow-lg
        shadow-blue-500/30
        "
      >
        {icon}
      </div>

      {/* Number */}

      <h2
        className="
        text-5xl
        font-extrabold
        gradientText
        "
      >
        {number}
      </h2>

      {/* Label */}

      <p
        className="
        uppercase
        tracking-[5px]
        text-sm
        text-gray-400
        mt-3
        "
      >
        {label}
      </p>

      {/* Decorative Glow */}

      <div
        className="
        absolute
        -top-12
        -right-12
        w-36
        h-36
        rounded-full
        bg-blue-500/10
        blur-[80px]
        "
      />
    </motion.div>
  );
}

export default StatCard;