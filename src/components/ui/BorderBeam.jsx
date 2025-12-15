import { motion } from 'framer-motion';

const BorderBeam = ({ children, className = "", duration = 3 }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.8), transparent)',
            width: '200%',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  );
};

export default BorderBeam;
