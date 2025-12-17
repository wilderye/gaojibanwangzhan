
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ARTWORKS } from '../constants';
import { Artwork } from '../types';

interface Props {
  onSelect: (art: Artwork) => void;
}

const HorizontalGallery: React.FC<Props> = ({ onSelect }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 px-24 md:px-[20vw]">
          {ARTWORKS.map((artwork, i) => (
            <motion.div
              key={artwork.id}
              className="hover-trigger group relative flex flex-col justify-center min-w-[300px] md:min-w-[600px] h-[70vh]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => onSelect(artwork)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 shadow-2xl">
                <motion.img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="font-mono text-[10px] text-white tracking-[0.3em] uppercase">View Archive &mdash; {artwork.id}</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-serif italic text-4xl md:text-6xl mb-2">{artwork.title}</h3>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{artwork.category}</span>
                  <div className="h-px w-12 bg-zinc-800" />
                  <span className="font-mono text-[10px] text-zinc-500">{artwork.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Ending Spacer */}
          <div className="min-w-[40vw] flex items-center justify-center">
             <p className="font-serif italic text-zinc-700 text-2xl">End of Selection</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
