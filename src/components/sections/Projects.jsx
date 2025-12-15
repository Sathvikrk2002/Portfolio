import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionReveal from "../ui/SectionReveal";
import AnimatedCard from "../ui/AnimatedCard";
import { PROJECTS } from "../../utils/constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative w-full overflow-hidden
        py-20 md:py-28 lg:py-32 xl:py-36
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
              mb-20
              gradient-text
            "
          >
            Featured Projects
          </motion.h2>

          {/* Projects Grid */}
          <div
            className="
              max-w-6xl mx-auto
              grid grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8 lg:gap-10
            "
          >
            {PROJECTS.map((project, index) => (
              <AnimatedCard
                key={project.title}
                delay={index * 0.15}
                className="h-full flex flex-col"
              >
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 min-h-[72px]">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3 mb-6 grow">
                  {project.highlights.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.15 + i * 0.08,
                      }}
                      className="flex items-start text-sm text-gray-500"
                    >
                      <span className="text-neon-cyan mr-2 shrink-0">
                        ▹
                      </span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay:
                          index * 0.15 + techIndex * 0.05,
                      }}
                      className="
                        inline-flex items-center justify-center
                        px-3 py-1.5
                        rounded-full
                        text-xs font-medium
                        text-neon-cyan
                        bg-dark-700
                        border border-neon-blue/30
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex-1
                      flex items-center justify-center gap-2
                      px-4 py-3
                      rounded-lg
                      bg-dark-700
                      border border-neon-blue/30
                      text-white
                      hover:bg-dark-600
                      transition
                    "
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex-1
                      flex items-center justify-center gap-2
                      px-4 py-3
                      rounded-lg
                      font-semibold text-white
                      bg-gradient-to-r
                      from-neon-blue to-neon-purple
                      transition
                    "
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                </div>
              </AnimatedCard>
            ))}
          </div>

        </SectionReveal>
      </div>
    </section>
  );
};

export default Projects;
