'use client';
import { useState } from 'react';
import ArchCard from '@/components/arch-card';
import { products, categories } from '@/lib/products';

export default function Vetements() {
  const [cat, setCat] = useState('Tous');
  const list = cat === 'Tous' ? products : products.filter((p) => p.category === cat);
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-5">
      <p className="text-[11px] tracking-[0.4em] uppercase text-gold">Catalogue</p>
      <h1 className="font-display text-6xl md:text-8xl mt-2">Vête<span className="italic text-gold">ments</span></h1>
      <p className="text-muted mt-4 max-w-lg">Zéro rectangle. Chaque pièce est présentée en arche organique. Clique sur Commander pour pré-remplir le formulaire.</p>

      <div className="flex flex-wrap gap-2.5 mt-10">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`rounded-full px-6 py-2.5 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${cat === c ? 'bg-gold text-ink border-gold' : 'border-white/15 text-bone/70 hover:border-gold hover:text-gold'}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 mt-12">
        {list.map((p, i) => <ArchCard key={p.id} p={p} index={i} />)}
      </div>
      {list.length === 0 && <p className="text-muted mt-10">Aucune pièce dans cette catégorie pour le moment.</p>}
    </div>
  );
}
