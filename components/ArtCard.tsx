
import React from 'react';
import { motion } from 'framer-motion';
import { Artwork } from '../types';

interface Props {
  artwork: Artwork;
  index: number;
  onClick: (artwork: Artwork) => void;
}

const ArtCard: React.FC<Props> = ({ artwork, index, onClick }) => {
  // Staggered layout logic: alternate left/right/center
  const getLayoutClass = () => {
    if (index % 3 === 0) return "md:ml-auto md:w-2/3";
    if (index % 3 === 1) return "md:mr-auto md:w-2/3";
    return "mx-auto md:w-3/4";
  };

  return (
    <div className={`mb-32 md:mb-64 ${getLayoutClass()}`}>
      <motion.div 
        className="hover-trigger relative group cursor-pointer"
        onClick={() => onClick(artwork)}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <div className="overflow-hidden relative shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)]">
          <motion.img 
            src={artwork.imageUrl} 
            alt={artwork.title}
            className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-start">
          <div>
            <motion.h3 
              className="text-2xl md:text-4xl font-serif italic mb-2 tracking-tight"
            >
              {artwork.title}
            </motion.h3>
            <p className="text-zinc-500 text-sm uppercase tracking-[0.2em]">
              {artwork.category} &mdash; {artwork.year}
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:text-right">
            <span className="text-xs text-zinc-400 border border-zinc-800 px-3 py-1 rounded-full">
              {artwork.id}
            </span>
          </div>
        </div>
        
        {/* Decorative breathing element */}
        <motion.div 
          className="absolute -right-4 -bottom-4 w-24 h-px bg-zinc-800 hidden md:block"
          animate={{ scaleX: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default ArtCard;
