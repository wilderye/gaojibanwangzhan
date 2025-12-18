
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

  // Adjusted scroll range for 8 images + 3 videos
  // Increased height to allow sufficient scroll time for all elements
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-94%"]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-32 px-24 md:px-[15vw] items-center">
          
          {/* Static Artworks Section */}
          {ARTWORKS.map((artwork, i) => (
            <motion.div
              key={artwork.id}
              className="hover-trigger group relative flex flex-col justify-center shrink-0"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              viewport={{ once: true }}
              onClick={() => onSelect(artwork)}
            >
              {/* Variable width container based on image aspect ratio */}
              <div className="relative h-[55vh] md:h-[62vh] overflow-hidden bg-zinc-900 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] border border-zinc-800/50">
                <motion.img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                />
                
                <div className="absolute top-4 right-4 mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[9px] text-white tracking-widest uppercase">Archive 0{i+1}</span>
                </div>
              </div>

              <div className="mt-10">
                <div className="flex items-baseline gap-4 mb-3">
                   <span className="font-mono text-[10px] text-zinc-600">0{i + 1}</span>
                   <h3 className="font-serif italic text-4xl md:text-6xl whitespace-nowrap">{artwork.title}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.3em]">{artwork.category}</span>
                  <div className="h-px flex-1 bg-zinc-900 min-w-[60px]" />
                  <span className="font-mono text-[9px] text-zinc-500">{artwork.year}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Work 09: Bilibili */}
          <motion.div
            className="group relative flex flex-col justify-center shrink-0"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[55vh] md:h-[62vh] aspect-video overflow-hidden bg-black shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)] border border-zinc-800">
              <iframe 
                src="https://player.bilibili.com/player.html?isOutside=true&aid=115734571193745&bvid=BV1FQq5BvEoq&cid=34797784813&p=1&high_quality=1&danmaku=0" 
                scrolling="no" 
                border="0" 
                frameBorder="no" 
                framespacing="0" 
                allowFullScreen={true}
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
              />
            </div>
            <div className="mt-10">
              <div className="flex items-baseline gap-4 mb-3">
                 <span className="font-mono text-[10px] text-zinc-600">09</span>
                 <h3 className="font-serif italic text-4xl md:text-6xl whitespace-nowrap">Digital Flow</h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.3em]">Motion Graphic</span>
                <div className="h-px flex-1 bg-zinc-900 min-w-[60px]" />
                <span className="font-mono text-[9px] text-zinc-500">2024</span>
              </div>
            </div>
          </motion.div>

          {/* Work 10: YouTube (Fixed with nocookie) */}
          <motion.div
            className="group relative flex flex-col justify-center shrink-0"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[55vh] md:h-[62vh] aspect-video overflow-hidden bg-black shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)] border border-zinc-800">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube-nocookie.com/embed/z-RujD40BJE?si=ut2J04asHhySZdvB&rel=0&modestbranding=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen={true}
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
              />
            </div>
            <div className="mt-10">
              <div className="flex items-baseline gap-4 mb-3">
                 <span className="font-mono text-[10px] text-zinc-600">10</span>
                 <h3 className="font-serif italic text-4xl md:text-6xl whitespace-nowrap">The Pulse</h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.3em]">Experimental Video</span>
                <div className="h-px flex-1 bg-zinc-900 min-w-[60px]" />
                <span className="font-mono text-[9px] text-zinc-500">2024</span>
              </div>
            </div>
          </motion.div>

          {/* Work 11: Direct MP4 (New) - Vertical Ratio for impact */}
          <motion.div
            className="group relative flex flex-col justify-center shrink-0"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[55vh] md:h-[62vh] aspect-[9/16] overflow-hidden bg-black shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)] border border-zinc-800">
              <video
                src="https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1766084714479_qdqqd_r095wj.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
              />
               <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-transparent transition-colors" />
            </div>
            <div className="mt-10">
              <div className="flex items-baseline gap-4 mb-3">
                 <span className="font-mono text-[10px] text-zinc-600">11</span>
                 <h3 className="font-serif italic text-4xl md:text-6xl whitespace-nowrap">Resonance Loop</h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.3em]">Generative</span>
                <div className="h-px flex-1 bg-zinc-900 min-w-[60px]" />
                <span className="font-mono text-[9px] text-zinc-500">2024</span>
              </div>
            </div>
          </motion.div>
          
          {/* Ending Spacer */}
          <div className="min-w-[50vw] flex flex-col items-start pl-24 border-l border-zinc-900">
             <span className="font-mono text-[10px] text-zinc-700 uppercase tracking-[0.5em] mb-4">Finis</span>
             <p className="font-serif italic text-zinc-500 text-4xl md:text-6xl">End of Exhibit</p>
             <p className="font-mono text-[9px] text-zinc-800 mt-8 tracking-widest uppercase">Project Resonance 2024</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
