'use client';
import { motion } from 'framer-motion';

export default function HeroVideo() {
  return (
    <section className="relative min-h-[105vh] flex items-end overflow-hidden grain">
      {/* video background */}
      <div className="absolute inset-0">
        <video
          autoPlay muted loop playsInline preload="auto"
          poster="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1600&q=80&auto=format&fit=crop"
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://videos.pexels.com/video-files/7677252/7677252-hd_1920_1080_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/6060027/6060027-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>

      {/* giant outline text */}
      <div className="absolute top-28 inset-x-0 overflow-hidden pointer-events-none select-none">
        <motion.p
          initial={{ x: '8%' }}
          animate={{ x: '-8%' }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          className="font-display text-stroke text-[19vw] leading-none whitespace-nowrap text-center italic opacity-60"
        >
          DJEZZAR — BATNA
        </motion.p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pb-24 pt-48 w-full">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <span className="inline-flex items-center gap-2 border border-gold/50 rounded-full px-5 py-2 text-[11px] tracking-[0.3em] uppercase text-gold bg-ink/50 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Batna • Livraison 58 wilayas
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[13vw] md:text-[7.5rem] leading-[0.9] mt-6"
        >
          L’élégance <br /><span className="italic text-shine">street</span> de Batna.
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
              <p className="font-display text-3xl text-gold">{n}</p>
              <p className="text-xs tracking-widest uppercase text-muted mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
