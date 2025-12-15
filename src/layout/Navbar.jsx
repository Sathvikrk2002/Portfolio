import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) =>
        item.href.replace("#", "")
      );

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          isScrolled
            ? "bg-dark-900/90 backdrop-blur-lg border-b border-neon-blue/20 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="relative flex items-center justify-center h-20">

          {/* LOGO / NAME */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            whileHover={{ scale: 1.05 }}
            className="
              absolute left-0
              text-2xl font-bold
              gradient-text
              cursor-pointer
            "
          >
            Sathvik
          </motion.a>

          {/* DESKTOP NAV */}
          <div
            className="
              hidden lg:flex items-center gap-8
              bg-dark-800/60
              px-10 py-3
              rounded-full
              border border-white/10
              backdrop-blur-md
            "
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                whileHover={{ scale: 1.08 }}
                className={`
                  text-sm font-medium cursor-pointer transition-colors
                  ${
                    activeSection === item.href.replace("#", "")
                      ? "text-neon-cyan"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              absolute right-0 lg:hidden
              p-2 text-white
            "
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="
              lg:hidden
              bg-dark-900/95
              backdrop-blur-lg
              border-t border-neon-blue/20
            "
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className={`
                    block text-lg font-medium transition-colors
                    ${
                      activeSection === item.href.replace("#", "")
                        ? "text-neon-cyan"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
