import { motion } from "framer-motion";
import SectionReveal from "../ui/SectionReveal";
import AnimatedCard from "../ui/AnimatedCard";
import { ABOUT } from "../../utils/constants";

const About = () => {
  return (
    <section
      id="about"
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
            About Me
          </motion.h2>

          {/* Content */}
          <div className="max-w-4xl lg:max-w-5xl mx-auto">
            <AnimatedCard className="px-6 md:px-10 lg:px-14 py-10">

              {/* Summary */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="
                  text-lg md:text-xl lg:text-2xl
                  text-gray-300
                  leading-relaxed
                  text-center
                "
              >
                {ABOUT.summary}
              </motion.p>

              {/* Divider */}
              <div className="w-full h-px bg-dark-700 my-10"></div>

              {/* Traits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="
                  flex flex-wrap
                  justify-center
                  gap-4 md:gap-6
                "
              >
                {[
                  "Problem Solver",
                  "Team Player",
                  "Quick Learner",
                  "Detail-Oriented",
                ].map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="
                      inline-flex items-center justify-center
                      px-5 py-2.5
                      rounded-full
                      text-sm md:text-base
                      font-medium
                      text-neon-cyan
                      bg-gradient-to-r from-neon-blue/20 to-neon-purple/20
                      border border-neon-cyan/30
                      transition
                    "
                  >
                    {trait}
                  </motion.span>
                ))}
              </motion.div>

            </AnimatedCard>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default About;
