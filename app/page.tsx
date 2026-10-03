'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, ShieldCheck, Music2 } from 'lucide-react';
import HeroVideo from '@/components/hero-video';
import Marquee from '@/components/marquee';
import ArchCard from '@/components/arch-card';
import BatnaMap from '@/components/batna-map';
import { products, TIKTOK_URL } from '@/lib/products';

export default function Home() {
  const top = products.slice(0, 4);
  return (
    <>
      <HeroVideo />
      <Marquee />

      {/* collection */}
      <section className="max-w-7xl mx-auto px-5 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold">La sélection du moment</p>
            <h2 className="font-street uppercase text-5xl md:text-7xl mt-3">Pièces <span className="font-editorial normal-case text-gold">cultes</span></h2>
            <p className="text-muted mt-3 max-w-md">Formes organiques, pas de rectangles. Chaque carte est une arche — comme en boutique.</p>
          </div>
          <Link href="/vetements" className="group flex items-center gap-3 border border-gold/40 rounded-full px-7 py-3.5 text-sm tracking-widest uppercase hover:bg-gold hover:text-ink transition-all duration-300">
            Tout voir <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
          {top.map((p, i) => <ArchCard key={p.id} p={p} index={i} />)}
        </div>
      </section>

      <Marquee reverse />

      {/* pourquoi */}
      <section className="max-w-7xl mx-auto px-5 py-24 grid lg:grid-cols-3 gap-6">
        {[
          { icon: Truck, t: 'Livraison 58 wilayas', d: 'Expédition rapide partout en Algérie, paiement à la livraison.' },
          { icon: ShieldCheck, t: 'Qualité premium', d: 'Coton lourd, coutures propres, pièces vérifiées avant envoi.' },
          { icon: Star, t: 'Star de TikTok', d: 'Les looks qui buzzent sur @djezzar_mode, dispo en boutique.' },
        ].map((c, i) => (
          <motion.div key={c.t} initial={{ opacity: 0, y: 40, scale: 0.92 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-smoke to-coal p-8 hover:border-gold/50 hover:-translate-y-2 transition-all duration-500">
            <c.icon className="text-gold" size={26} />
            <p className="font-street uppercase text-2xl mt-4">{c.t}</p>
            <p className="text-sm text-muted mt-2 leading-relaxed">{c.d}</p>
          </motion.div>
        ))}
      </section>

      {/* tiktok strip */}
      <section className="max-w-7xl mx-auto px-5 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-gold/25 bg-gradient-to-r from-smoke via-coal to-smoke p-10 md:p-16 flex flex-col md:flex-row items-center gap-8">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="w-20 h-20 shrink-0 rounded-full bg-gold grid place-items-center text-ink animate-float"><Music2 size={32} /></div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold">Vu sur TikTok</p>
            <p className="font-street uppercase text-3xl md:text-5xl mt-2">Les fits qui font le buzz, <span className="font-editorial normal-case text-gold">ici d’abord.</span></p>
          </div>
          <a href={TIKTOK_URL} target="_blank" className="bg-bone text-ink rounded-full px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold transition-all whitespace-nowrap">Voir TikTok</a>
        </motion.div>
      </section>

      {/* localisation */}
      <section className="max-w-7xl mx-auto px-5 pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold mb-3">Nous trouver</p>
          <h2 className="font-street uppercase text-5xl md:text-6xl mb-10">La boutique <span className="font-editorial normal-case text-gold">à Batna</span></h2>
        </motion.div>
        <BatnaMap />
      </section>
    </>
  );
}
