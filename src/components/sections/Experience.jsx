import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import SectionReveal from "../ui/SectionReveal";
import AnimatedCard from "../ui/AnimatedCard";
import { EXPERIENCE } from "../../utils/constants";

const Experience = () => {
  return (
    <section
      id="experience"
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
            Experience
          </motion.h2>

          {/* Timeline / Cards */}
          <div
            className="
              max-w-5xl mx-auto
              space-y-8 md:space-y-10 lg:space-y-12
            "
          >
            {EXPERIENCE.map((exp, index) => (
              <AnimatedCard
                key={exp.company}
                delay={index * 0.15}
                className="relative"
              >
                <div className="flex items-start gap-5 md:gap-6">

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="
                      w-14 h-14
                      rounded-full
                      bg-gradient-to-br from-neon-blue to-neon-purple
                      p-0.5
                      shrink-0
                    "
                  >
                    <div className="w-full h-full bg-dark-800 rounded-full flex items-center justify-center">
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="grow">
                    {/* Role */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>

                    {/* Company & Period */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-neon-cyan font-semibold">
                        {exp.company}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-5 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-3">
                      {exp.achievements.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.15 + i * 0.08,
                          }}
                          className="flex items-start text-sm md:text-base text-gray-500"
                        >
                          <span className="text-neon-cyan mr-2 shrink-0">
                            ▹
                          </span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

        </SectionReveal>
      </div>
    </section>
  );
};

export default Experience;
