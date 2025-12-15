import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionReveal from "../ui/SectionReveal";
import AnimatedCard from "../ui/AnimatedCard";
import { CERTIFICATIONS } from "../../utils/constants";

const Certifications = () => {
  return (
    <section
      id="certifications"
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
            Certifications
          </motion.h2>

          {/* Certifications Grid */}
          <div
            className="
              max-w-5xl mx-auto
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6 md:gap-8 lg:gap-10
            "
          >
            {CERTIFICATIONS.map((cert, index) => (
              <AnimatedCard
                key={cert}
                delay={index * 0.12}
                className="flex items-center gap-4"
              >
                {/* Icon */}
                <div
                  className="
                    w-12 h-12 shrink-0
                    rounded-full
                    bg-gradient-to-br from-neon-blue to-neon-cyan
                    p-0.5
                  "
                >
                  <div className="w-full h-full bg-dark-800 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Text */}
                <p className="text-white font-medium text-lg leading-snug">
                  {cert}
                </p>
              </AnimatedCard>
            ))}
          </div>

        </SectionReveal>
      </div>
    </section>
  );
};

export default Certifications;
