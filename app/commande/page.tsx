'use client';
import { useMemo, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Send } from 'lucide-react';
import { products, formatDA } from '@/lib/products';
import { wilayas, saveOrder, buildWhatsAppMessage } from '@/lib/store';

function Form() {
  const sp = useSearchParams();
  const preset = sp.get('produit') || products[0].id;

  const [f, setF] = useState({
    nom: '', telephone: '', wilaya: '05 - Batna', commune: '', adresse: '',
    produitId: preset, taille: 'L', quantite: 1, note: '',
  });
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const produit = useMemo(() => products.find((p) => p.id === f.produitId) || products[0], [f.produitId]);
  const total = produit.price * f.quantite;

  const set = (k: string, v: string | number) => setF((s) => ({ ...s, [k]: v }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (f.nom.trim().length < 3) return setError('Écris ton nom complet.');
    if (!/^(05|06|07)\d{8}$/.test(f.telephone.replace(/\s/g, ''))) return setError('Téléphone invalide. Ex : 0540924588 (10 chiffres, commence par 05/06/07).');
    if (!f.commune.trim()) return setError('Indique ta commune.');
    const order = {
      id: 'CMD-' + Date.now().toString(36).toUpperCase(),
      date: new Date().toLocaleString('fr-DZ'),
      nom: f.nom, telephone: f.telephone, wilaya: f.wilaya, commune: f.commune,
      adresse: f.adresse || '-', produitId: produit.id, produitNom: `${produit.brand} — ${produit.name}`,
      taille: f.taille, quantite: f.quantite, prix: produit.price, total,
      note: f.note, statut: 'nouveau' as const,
    };
    saveOrder(order);
    const msg = buildWhatsAppMessage({ ...order });
    window.open(`https://wa.me/213540924588?text=${msg}`, '_blank');
    setDone(true);
  }

  if (done) {
    return (
      <div className="max-w-xl mx-auto text-center rounded-[2rem] border border-gold/40 bg-smoke p-12">
        <CheckCircle2 size={56} className="mx-auto text-gold" />
        <h2 className="font-display text-4xl mt-5">Commande envoyée !</h2>
        <p className="text-muted mt-3">On te confirme sur WhatsApp au <span className="text-gold">{f.telephone}</span>. Total : <span className="text-gold font-display text-2xl">{formatDA(total)}</span> (COD).</p>
        <div className="flex flex-wrap justify-center gap-3 mt-7">
          <button onClick={() => setDone(false)} className="border border-white/20 rounded-full px-7 py-3 text-xs tracking-widest uppercase hover:border-gold hover:text-gold">Nouvelle commande</button>
          <a href="/vetements" className="bg-gold text-ink rounded-full px-7 py-3 text-xs tracking-widest uppercase">Continuer shopping</a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 rounded-[2rem] border border-white/10 bg-smoke p-7 md:p-9 flex flex-col gap-5">
        <p className="font-display text-3xl">Tes <span className="italic text-gold">infos</span></p>
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="text-xs tracking-widest uppercase text-muted">Nom complet *</label><input className="lux-input mt-2" placeholder="Ex : Amine Benali" value={f.nom} onChange={(e) => set('nom', e.target.value)} /></div>
          <div><label className="text-xs tracking-widest uppercase text-muted">Téléphone *</label><input className="lux-input mt-2" placeholder="0540924588" value={f.telephone} onChange={(e) => set('telephone', e.target.value)} /></div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="text-xs tracking-widest uppercase text-muted">Wilaya *</label>
            <select className="lux-input mt-2" value={f.wilaya} onChange={(e) => set('wilaya', e.target.value)}>{wilayas.map((w) => <option key={w}>{w}</option>)}</select></div>
          <div><label className="text-xs tracking-widest uppercase text-muted">Commune *</label><input className="lux-input mt-2" placeholder="Ex : Batna centre" value={f.commune} onChange={(e) => set('commune', e.target.value)} /></div>
        </div>
        <div><label className="text-xs tracking-widest uppercase text-muted">Adresse complète</label><input className="lux-input mt-2" placeholder="Rue, point de repère..." value={f.adresse} onChange={(e) => set('adresse', e.target.value)} /></div>
        <div><label className="text-xs tracking-widest uppercase text-muted">Note (optionnel)</label><textarea className="lux-input mt-2 min-h-[90px]" placeholder="Couleur préférée, heure d'appel..." value={f.note} onChange={(e) => set('note', e.target.value)} /></div>
        {error && <p className="text-red-400 text-sm border border-red-400/30 rounded-xl px-4 py-3">{error}</p>}
      </div>

      <div className="lg:col-span-2 rounded-[2rem] border border-gold/30 bg-coal p-7 md:p-9 flex flex-col gap-5 h-fit lg:sticky lg:top-28">
        <p className="font-display text-3xl">Ta <span className="italic text-gold">pièce</span></p>
        <div className="flex gap-4 items-center">
          <img src={produit.image} alt={produit.name} className="w-20 h-24 object-cover shape-arch border border-gold/30" />
          <div><p className="text-[10px] tracking-[0.3em] text-gold">{produit.brand}</p><p className="font-display text-xl leading-tight">{produit.name}</p><p className="text-gold">{formatDA(produit.price)}</p></div>
        </div>
        <div><label className="text-xs tracking-widest uppercase text-muted">Produit *</label>
          <select className="lux-input mt-2" value={f.produitId} onChange={(e) => set('produitId', e.target.value)}>{products.map((p) => <option key={p.id} value={p.id}>{p.brand} — {p.name} ({formatDA(p.price)})</option>)}</select></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-xs tracking-widest uppercase text-muted">Taille *</label>
            <select className="lux-input mt-2" value={f.taille} onChange={(e) => set('taille', e.target.value)}>{produit.sizes.map((s) => <option key={s}>{s}</option>)}</select></div>
          <div><label className="text-xs tracking-widest uppercase text-muted">Quantité *</label>
            <select className="lux-input mt-2" value={f.quantite} onChange={(e) => set('quantite', Number(e.target.value))}>{[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}</select></div>
        </div>
        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
          <span className="text-sm text-muted">Total COD</span><span className="font-display text-3xl text-shine">{formatDA(total)}</span>
        </div>
        <button className="bg-gold text-ink rounded-full py-4 text-sm tracking-[0.2em] uppercase hover:bg-bone transition-all flex items-center justify-center gap-2"><Send size={16} /> Commander via WhatsApp</button>
        <p className="text-[11px] text-muted text-center">Paiement à la livraison • Confirmation par appel/WhatsApp</p>
      </div>
    </form>
  );
}

export default function Commande() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-5">
      <p className="text-[11px] tracking-[0.4em] uppercase text-gold">Achats — paiement à la livraison</p>
      <h1 className="font-display text-6xl md:text-8xl mt-2 mb-10">Comman<span className="italic text-gold">der</span></h1>
      <Suspense fallback={<p className="text-muted">Chargement...</p>}><Form /></Suspense>
    </div>
  );
}
