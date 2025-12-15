import { motion } from "framer-motion";
import SectionReveal from "../ui/SectionReveal";
import AnimatedCard from "../ui/AnimatedCard";
import { SKILLS } from "../../utils/constants";

const Skills = () => {
  return (
    <section
      id="skills"
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
            Skills & Expertise
          </motion.h2>

          {/* Skills Grid */}
          <div
            className="
              max-w-6xl mx-auto
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-8 lg:gap-10
            "
          >
            {SKILLS.map((skillGroup, index) => {
              const Icon = skillGroup.icon;

              return (
                <AnimatedCard
                  key={skillGroup.category}
                  delay={index * 0.1}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="h-full flex flex-col"
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`
                        w-14 h-14 mb-6
                        rounded-full
                        bg-gradient-to-br ${skillGroup.color}
                        p-0.5
                      `}
                    >
                      <div className="w-full h-full bg-dark-800 rounded-full flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </motion.div>

                    {/* Category */}
                    <h3 className="text-xl font-bold text-white mb-6">
                      {skillGroup.category}
                    </h3>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-4 grow content-start">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + skillIndex * 0.05,
                          }}
                          whileHover={{
                            scale: 1.1,
                            boxShadow:
                              "0 0 18px rgba(0, 212, 255, 0.5)",
                          }}
                          className="
                            inline-flex items-center justify-center
                            px-4 py-2
                            rounded-full
                            text-sm md:text-base
                            text-gray-300
                            bg-dark-700
                            border border-neon-blue/30
                            hover:text-neon-cyan
                            hover:border-neon-cyan
                            transition
                          "
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatedCard>
              );
            })}
          </div>

        </SectionReveal>
      </div>
    </section>
  );
};

export default Skills;
