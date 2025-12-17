
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Artwork } from '../types';

interface Props {
  artwork: Artwork | null;
  onClose: () => void;
}

const Lightbox: React.FC<Props> = ({ artwork, onClose }) => {
  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-12"
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
          
          <motion.button
            className="absolute top-8 right-8 text-white hover:text-zinc-400 z-10 p-2"
            onClick={onClose}
            whileHover={{ rotate: 90 }}
          >
            <X size={32} />
          </motion.button>

          <motion.div 
            className="relative w-full max-w-6xl flex flex-col md:flex-row gap-12 items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="w-full md:w-3/5">
              <img 
                src={artwork.imageUrl} 
                alt={artwork.title} 
                className="w-full h-auto shadow-2xl rounded-sm"
              />
            </div>
            
            <div className="w-full md:w-2/5 text-white">
              <h2 className="text-4xl md:text-6xl font-serif italic mb-6">{artwork.title}</h2>
              <div className="space-y-6 text-zinc-300">
                <p className="text-lg leading-relaxed">{artwork.description}</p>
                <div className="pt-6 border-t border-zinc-800 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-zinc-500 uppercase text-xs tracking-widest">Medium</span>
                    <span className="text-sm font-medium">{artwork.medium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 uppercase text-xs tracking-widest">Dimensions</span>
                    <span className="text-sm font-medium">{artwork.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 uppercase text-xs tracking-widest">Year</span>
                    <span className="text-sm font-medium">{artwork.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
