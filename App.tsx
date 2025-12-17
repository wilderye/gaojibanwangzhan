
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import HorizontalGallery from './components/HorizontalGallery';
import Lightbox from './components/Lightbox';
import { EXHIBITION_INFO } from './constants';
import { Artwork } from './types';

const App: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.9]);

  return (
    <div className="relative">
      <CustomCursor />
      
      {/* UI Overlay - Fixed Elements */}
      <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-start pointer-events-none">
        <div className="pointer-events-auto">
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-1">Artist</p>
          <h2 className="font-medium text-lg">{EXHIBITION_INFO.artistName}</h2>
        </div>
        <div className="text-right pointer-events-auto">
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-1">Project</p>
          <h2 className="font-serif italic text-lg">{EXHIBITION_INFO.exhibitionTitle}</h2>
        </div>
      </nav>

      <aside className="fixed bottom-0 left-0 p-8 z-50 hidden md:block">
        <div className="space-y-4">
          {['Intro', 'Gallery', 'Context', 'Contact'].map((item, idx) => (
            <div key={item} className="flex items-center gap-4 group cursor-pointer hover-trigger">
              <span className="font-mono text-[10px] text-zinc-700 group-hover:text-white transition-colors">0{idx + 1}</span>
              <div className="h-px w-0 bg-white group-hover:w-8 transition-all duration-500" />
              <span className="font-mono text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all">{item}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="h-screen w-full flex flex-col items-center justify-center text-center px-6 relative z-10"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-mono text-[11px] tracking-[0.6em] uppercase text-zinc-500 mb-12"
        >
          {EXHIBITION_INFO.duration}
        </motion.span>
        <h1 className="text-7xl md:text-[12vw] font-serif italic tracking-tighter leading-[0.85] mb-12">
          {EXHIBITION_INFO.exhibitionTitle.split(" ").map((word, i) => (
            <span key={i} className="block overflow-hidden">
               <motion.span
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                 className="inline-block"
               >
                 {word}
               </motion.span>
            </span>
          ))}
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="max-w-md font-light text-zinc-400 leading-relaxed italic"
        >
          "An experimental study on the boundaries of visual perception in digital environments."
        </motion.p>
      </motion.section>

      {/* Horizontal Gallery */}
      <HorizontalGallery onSelect={setSelectedArtwork} />

      {/* Epilogue / Footer */}
      <section className="min-h-screen flex flex-col items-center justify-center p-12 bg-zinc-950">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl md:text-8xl font-serif italic mb-12">Fin.</h2>
          <p className="text-xl text-zinc-500 mb-24 font-light leading-relaxed">
            {EXHIBITION_INFO.curatorialStatement}
          </p>
          <div className="flex flex-wrap justify-center gap-12 font-mono text-xs tracking-widest uppercase">
            <a href="#" className="hover-trigger border-b border-transparent hover:border-white transition-all pb-1">Instagram</a>
            <a href="#" className="hover-trigger border-b border-transparent hover:border-white transition-all pb-1">Archive</a>
            <a href="#" className="hover-trigger border-b border-transparent hover:border-white transition-all pb-1">Inquiry</a>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Lightbox artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
    </div>
  );
};

export default App;
