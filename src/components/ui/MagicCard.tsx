import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface MagicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export default function MagicCard({ children, className = '', delay = 0, onClick }: MagicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.68, -0.55, 0.265, 1.55],
      }}
      whileHover={{ y: -4, scale: 1.01 }}
      onClick={onClick}
      className={`glass-card cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}
