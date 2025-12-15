import { motion } from 'framer-motion';

const GradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-dark-900">
      {/* Deep Background Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-30 blur-[100px]"
        style={{ background: 'var(--neon-purple)', opacity: 0.2 }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'var(--neon-blue)', opacity: 0.15 }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-[150px]"
        style={{ background: 'var(--dark-600)', opacity: 0.4 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />
    </div>
  );
};

export default GradientBackground;
