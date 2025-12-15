import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';





const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-10001 flex flex-col items-center justify-center bg-dark-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="relative">
             {/* Glitch Effect Text */}
            <motion.div 
               className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-neon-blue via-neon-purple to-neon-pink mb-8 tracking-tighter"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
            >
              SRK
            </motion.div>
            
            {/* Progress Bar */}
            <div className="w-64 h-1 bg-dark-700 rounded-full overflow-hidden relative">
              <motion.div 
                className="h-full bg-neon-cyan shadow-[0_0_15px_rgba(0,255,240,0.6)]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ type: "spring", stiffness: 50 }}
              />
            </div>
            
            <motion.p 
              className="mt-4 text-neon-blue font-mono text-sm tracking-widest text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              INITIALIZING SYSTEM... {Math.min(progress, 100)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
