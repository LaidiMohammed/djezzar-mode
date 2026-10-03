'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Product, formatDA } from '@/lib/products';

const shapeClass: Record<Product['shape'], string> = {
  arch: 'shape-arch',
  egg: 'shape-egg',
  pill: 'shape-pill',
  blob: 'shape-blob',
};

export default function ArchCard({ p, index = 0 }: { p: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className={`arch-frame ${shapeClass[p.shape]} aspect-[3/4]`}>
        {p.badge && (
          <span className="absolute top-6 left-1/2 -translate-x-1/2 z-10 bg-gold text-ink text-[11px] tracking-[0.2em] uppercase px-5 py-2 rounded-full font-medium whitespace-nowrap shadow-lg">
            {p.badge}
          </span>
        )}
        <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
        {/* quick order on hover */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <Link href={`/commande?produit=${p.id}`} className="flex items-center gap-2 bg-bone/95 backdrop-blur text-ink text-xs tracking-widest uppercase rounded-full px-6 py-3 hover:bg-gold transition-colors whitespace-nowrap">
            <ShoppingBag size={14} /> Commander
          </Link>
        </div>
      </div>
      <div className="pt-5 px-1 text-center md:text-left">
        <p className="text-[11px] tracking-[0.35em] text-gold uppercase">{p.brand}</p>
        <h3 className="font-display text-[1.7rem] leading-tight mt-1 group-hover:text-gold transition-colors duration-300">{p.name}</h3>
        <p className="text-sm text-muted mt-1 line-clamp-1">{p.desc}</p>
        <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
          <p className="font-display text-2xl text-shine">{formatDA(p.price)}</p>
          {p.oldPrice && <p className="text-sm text-muted line-through">{formatDA(p.oldPrice)}</p>}
        </div>
      </div>
    </motion.article>
  );
}
