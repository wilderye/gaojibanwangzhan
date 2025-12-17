
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative min-h-screen py-24 px-6 md:px-24 flex flex-col justify-center ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
