import { motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative glass rounded-xl p-8 transition-smooth h-full ${className}`}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${(mousePosition.y - 150) / 40}deg) rotateY(${(mousePosition.x - 150) / 40}deg)`
          : 'none',
      }}
    >
      {/* Glow effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 opacity-40 blur-2xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, var(--neon-blue), transparent 60%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
        />
      )}
      
      {/* Shine effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 60%)`,
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
