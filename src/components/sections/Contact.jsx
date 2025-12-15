import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Instagram,
  Send,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

import SectionReveal from "../ui/SectionReveal";
import AnimatedCard from "../ui/AnimatedCard";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";

/* ================= EMAILJS CONFIG ================= */
const SERVICE_ID = "service_d3n3vrz";
const TEMPLATE_ID = "template_b52qd32";
const PUBLIC_KEY = "VM98xK1eAgM-lS7yN";
/* ================================================== */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); 
  // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  /* ICON MAP */
  const icons = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-20 md:py-28 lg:py-32 xl:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <SectionReveal>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-center mb-20 gradient-text"
          >
            Get In Touch
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

            {/* ================= CONTACT FORM ================= */}
            <AnimatedCard>
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {status === "success" && (
                <div className="flex flex-col items-center text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-400">
                    I’ll get back to you very soon 🚀
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex flex-col items-center text-center py-12">
                  <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Something went wrong
                  </h4>
                  <p className="text-gray-400">
                    Please try again later.
                  </p>
                </div>
              )}

              {(status === "idle" || status === "sending") && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-cyan"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-cyan"
                  />

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-neon-blue/30 rounded-lg text-white resize-none focus:outline-none focus:border-neon-cyan"
                  />

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-105 transition"
                  >
                    <Send className="w-5 h-5" />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </AnimatedCard>

            {/* ================= SOCIAL LINKS ================= */}
            <AnimatedCard>
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>

              <div className="space-y-4">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = icons[link.icon];

                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, x: 6 }}
                      className="flex items-center gap-4 p-4 bg-dark-700 border border-neon-blue/30 rounded-lg hover:border-neon-cyan transition"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-0.5">
                        <div className="w-full h-full bg-dark-800 rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <div>
                        <p className="text-white font-semibold">
                          {link.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {link.name === "Instagram"
                            ? "@sathvik_rk"
                            : link.url}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </AnimatedCard>

          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Contact;
