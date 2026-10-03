'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroVideo() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // ——— Scroll-driven zoom: video zooms OUT, giant title zooms IN ———
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const shadeOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const giantScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const giantOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.15]);

  return (
    <section ref={ref} className="relative min-h-[110vh] flex items-end overflow-hidden">
      {/* ——— Video background, crystal clear (no grain, no blur) ——— */}
      <motion.div style={{ scale: videoScale, y: videoY }} className="absolute inset-0">
        <motion.video
          autoPlay muted loop playsInline preload="auto"
          poster="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80&auto=format&fit=crop"
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <source src="https://videos.pexels.com/video-files/15615496/15615496-hd_1920_1080_60fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/15615496/15615496-hd_1280_720_60fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/7677252/7677252-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <motion.div style={{ opacity: shadeOpacity }} className="absolute inset-0 bg-ink pointer-events-none" />
      </motion.div>

      {/* giant street title — zooms IN on scroll */}
      <motion.div
        style={{ scale: giantScale, opacity: giantOpacity }}
        className="absolute top-28 inset-x-0 overflow-hidden pointer-events-none select-none will-change-transform"
      >
        <motion.p
          initial={{ x: '8%' }}
          animate={{ x: '-8%' }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          className="font-street text-stroke text-[21vw] leading-none whitespace-nowrap text-center uppercase"
        >
          DJEZZAR — BATNA
        </motion.p>
      </motion.div>

      {/* content — zooms OUT + fades on scroll */}
      <motion.div
        style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 pb-28 pt-48 w-full will-change-transform"
      >
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <span className="inline-flex items-center gap-2 border border-gold/50 rounded-full px-5 py-2 text-[11px] tracking-[0.3em] uppercase text-gold bg-ink/50 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Batna • Livraison 58 wilayas
          </span>
        </motion.div>

        {/* ——— NEW street typography ——— */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 uppercase"
        >
          <span className="block font-street text-[15vw] md:text-[7rem] leading-[0.95]">L’élégance</span>
          <span className="block font-editorial text-[13vw] md:text-[6rem] leading-[0.95] text-shine normal-case">street</span>
          <span className="block font-street text-[15vw] md:text-[7rem] leading-[0.95]">de Batna<span className="text-gold">.</span></span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }} className="max-w-xl text-bone/70 mt-6 leading-relaxed">
          Polos, ensembles, chemises premium. Coupe droite, matières lourdes, esprit rue.
          Commande en 1 minute — confirmation directe sur WhatsApp.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.8 }} className="flex flex-wrap gap-4 mt-8">
          <a href="/vetements" className="bg-gold text-ink rounded-full px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-bone hover:scale-105 transition-all duration-300">Voir la collection</a>
          <a href="https://wa.me/213540924588?text=Salam%20Djezzar%20Mode%20!%20Je%20veux%20commander." target="_blank" className="border border-bone/30 rounded-full px-8 py-4 text-sm tracking-[0.2em] uppercase backdrop-blur hover:border-gold hover:text-gold transition-all duration-300">WhatsApp direct</a>
        </motion.div>

        <div className="grid grid-cols-3 max-w-lg gap-6 mt-12 border-t border-white/10 pt-6">
          {[['58', 'wilayas livrées'], ['8+', 'pièces premium'], ['7j/7', 'sur WhatsApp']].map(([n, l]) => (
            <div key={l}>
              <p className="font-street text-3xl text-gold">{n}</p>
              <p className="text-xs tracking-widest uppercase text-muted mt-1">{l}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted z-10">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
