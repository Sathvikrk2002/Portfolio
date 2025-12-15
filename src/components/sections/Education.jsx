import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionReveal from "../ui/SectionReveal";
import AnimatedCard from "../ui/AnimatedCard";
import { EDUCATION } from "../../utils/constants";

const Education = () => {
  return (
    <section
      id="education"
      className="
        relative w-full overflow-hidden
        py-16 md:py-20 lg:py-24 xl:py-28
      "
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <SectionReveal>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              text-5xl md:text-6xl
              font-bold text-center
              mb-16
              gradient-text
            "
          >
            Education
          </motion.h2>

          {/* Education Grid */}
          <div
            className="
              max-w-6xl mx-auto
              grid grid-cols-1
              md:grid-cols-2
              gap-8 lg:gap-10
            "
          >
            {EDUCATION.map((edu, index) => (
              <AnimatedCard
                key={edu.degree}
                delay={index * 0.15}
                className="h-full text-center"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="
                    w-16 h-16 mx-auto mb-6
                    rounded-full
                    bg-gradient-to-br from-neon-purple to-neon-pink
                    p-0.5
                  "
                >
                  <div className="w-full h-full bg-dark-800 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Degree */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-neon-cyan mb-2">
                  {edu.institution}
                </p>

                {/* Period */}
                <p className="text-gray-400 text-sm mb-5">
                  {edu.period}
                </p>

                {/* CGPA pr Percentage */}
                {/* CGPA or Percentage */}
                {(edu.cgpa || edu.percentage) && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="
                      inline-flex items-center justify-center gap-2
                      px-5 py-2
                      rounded-full
                      bg-gradient-to-r
                      from-neon-blue/20 to-neon-purple/20
                      border border-neon-cyan/30
                      mx-auto
                    "
                  >
                    <Award className="w-4 h-4 text-neon-cyan" />
                    <span className="text-white font-semibold">
                      {edu.cgpa
                        ? `CGPA: ${edu.cgpa}`
                        : `Percentage: ${edu.percentage}%`}
                    </span>
                  </motion.div>
                )}

              </AnimatedCard>
            ))}
          </div>

        </SectionReveal>
      </div>
    </section>
  );
};

export default Education;
