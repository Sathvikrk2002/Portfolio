import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail, ArrowDown } from "lucide-react";
import GradientBackground from "../ui/GradientBackground";
import { PERSONAL_INFO } from "../../utils/constants";
import profilePic from "../../assets/Sathvik R K.jpg";

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-20 lg:py-24"
    >
      <GradientBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* ================= NEON GRADIENT PHOTO ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="flex justify-center mb-8"
          >
            <div className="relative perspective-1000">
              {/* OUTER HARD GLOW */}
              <div
                className="
                  absolute inset-0 rounded-full
                  blur-[90px]
                  opacity-70
                  bg-gradient-to-br
                  from-neon-blue via-neon-purple to-neon-cyan
                  animate-[gradient_8s_linear_infinite]
                "
              />

              {/* NEON GRADIENT BORDER */}
              <div
                className="
                  relative
                  w-[160px] h-[160px]
                  sm:w-[190px] sm:h-[190px]
                  md:w-[210px] md:h-[210px]
                  rounded-full
                  p-[3px]
                  bg-gradient-to-br
                  from-neon-blue via-neon-purple to-neon-cyan
                "
                style={{
                  boxShadow: `
    0 0 25px rgba(0, 255, 255, 0.6),
    0 0 80px rgba(255, 0, 255, 0.5),
    0 0 140px rgba(0, 140, 255, 0.45)
  `,
                }}
              >
                {/* IMAGE HOLDER */}
                <div className="w-full h-full rounded-full overflow-hidden bg-transparent">
                  {/* IMAGE ZOOMS ONLY */}
                  <motion.img
                    src={profilePic}
                    alt={PERSONAL_INFO.name}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= NAME ================= */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-black gradient-text tracking-tight mb-6
              drop-shadow-[0_0_10px_rgba(59,130,246,0.9)]
              drop-shadow-[0_0_25px_rgba(147,51,234,0.8)]
              drop-shadow-[0_0_45px_rgba(15,23,42,0.9)]
            "
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* ================= ROLE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 min-h-[40px]"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "Java Developer",
                1500,
                "Spring Boot Expert",
                1500,
                "React Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* ================= TAGLINE ================= */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            {PERSONAL_INFO.tagline}
          </p>

          {/* ================= CTA ================= */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white rounded-full bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-105 transition"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white rounded-full bg-dark-800 border border-white/10 hover:border-neon-cyan transition"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white rounded-full bg-dark-800 border border-white/10 hover:border-neon-pink transition"
            >
              <Mail className="w-4 h-4" />
              Contact
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
