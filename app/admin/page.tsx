'use client';
import { useEffect, useState } from 'react';
import { Trash2, Phone, Package, TrendingUp, ShoppingBag } from 'lucide-react';
import { getOrders, updateOrderStatus, deleteOrder, Order } from '@/lib/store';
import { products, formatDA } from '@/lib/products';

const statuts: Order['statut'][] = ['nouveau', 'confirmé', 'expédié', 'livré'];

export default function Admin() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [tab, setTab] = useState<'commandes' | 'produits' | 'stats'>('commandes');
  const [filter, setFilter] = useState('tous');

  const refresh = () => setOrders(getOrders());
  useEffect(refresh, []);

  const filtered = filter === 'tous' ? orders : orders.filter((o) => o.statut === filter);
  const ca = orders.filter((o) => o.statut !== 'nouveau').reduce((s, o) => s + o.total, 0);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-5">
      <p className="text-[11px] tracking-[0.4em] uppercase text-gold">Panel boutique — accès direct</p>
      <h1 className="font-display text-6xl md:text-7xl mt-2">Ad<span className="italic text-gold">min</span></h1>

      <div className="flex gap-2.5 mt-8">
        {(['commandes', 'produits', 'stats'] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`rounded-full px-6 py-2.5 text-xs tracking-[0.2em] uppercase border capitalize transition-all ${tab === t ? 'bg-gold text-ink border-gold' : 'border-white/15 text-bone/70 hover:border-gold'}`}>{t}</button>
        ))}
      </div>

      {tab === 'commandes' && (
        <>
          <div className="flex flex-wrap gap-2 mt-6">
            {['tous', ...statuts].map((s) => (
              <button key={s} onClick={() => setFilter(s)} className={`rounded-full px-5 py-2 text-[11px] tracking-widest uppercase border ${filter === s ? 'bg-bone text-ink border-bone' : 'border-white/15 text-muted hover:text-gold hover:border-gold'}`}>{s} ({s === 'tous' ? orders.length : orders.filter((o) => o.statut === s).length})</button>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {filtered.length === 0 && <p className="text-muted border border-dashed border-white/15 rounded-2xl p-10 text-center">Aucune commande. Fais un test depuis /commande.</p>}
            {filtered.map((o) => (
              <div key={o.id} className="rounded-3xl border border-white/10 bg-smoke p-6 grid md:grid-cols-4 gap-4">
                <div>
                  <p className="font-display text-xl">{o.nom}</p>
                  <p className="text-sm text-muted">{o.telephone} • {o.wilaya}</p>
                  <p className="text-xs text-muted mt-1">{o.commune} — {o.adresse}</p>
                  <p className="text-[11px] text-muted mt-1">{o.date} • {o.id}</p>
                </div>
                <div>
                  <p className="text-sm"><span className="text-gold">{o.produitNom}</span></p>
                  <p className="text-sm text-muted">Taille {o.taille} × {o.quantite} — {formatDA(o.total)}</p>
                  {o.note && <p className="text-xs text-muted mt-1 italic">« {o.note} »</p>}
                </div>
                <div className="flex md:flex-col flex-wrap gap-2">
                  {statuts.map((s) => (
                    <button key={s} onClick={() => { updateOrderStatus(o.id, s); refresh(); }}
                      className={`rounded-full px-4 py-1.5 text-[11px] tracking-widest uppercase border ${o.statut === s ? 'bg-gold text-ink border-gold' : 'border-white/15 text-muted hover:border-gold hover:text-gold'}`}>{s}</button>
                  ))}
                </div>
                <div className="flex md:flex-col gap-2 md:items-end justify-between">
                  <a href={`https://wa.me/213${o.telephone.slice(1)}?text=Salam%20${encodeURIComponent(o.nom)}%2C%20Djezzar%20Mode%20confirme%20ta%20commande%20${o.id}%20(${encodeURIComponent(o.produitNom)})%20!`} target="_blank" className="flex items-center gap-2 bg-gold/15 text-gold border border-gold/40 rounded-full px-5 py-2.5 text-xs hover:bg-gold hover:text-ink transition-all"><Phone size={14} /> Appeler</a>
                  <button onClick={() => { if (confirm('Supprimer ?')) { deleteOrder(o.id); refresh(); } }} className="flex items-center gap-2 text-red-400/80 text-xs hover:text-red-400"><Trash2 size={14} /> Supprimer</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === 'produits' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((p) => (
            <div key={p.id} className="rounded-3xl border border-white/10 bg-smoke overflow-hidden">
              <img src={p.image} alt={p.name} className="h-52 w-full object-cover" />
              <div className="p-5">
                <p className="text-[10px] tracking-[0.3em] text-gold">{p.brand}</p>
                <p className="font-display text-xl">{p.name}</p>
                <p className="text-gold mt-1">{formatDA(p.price)}</p>
                <a href={`/commande?produit=${p.id}`} className="mt-3 inline-block text-xs tracking-widest uppercase border border-white/15 rounded-full px-4 py-2 hover:border-gold hover:text-gold">Tester commande</a>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'stats' && (
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {[
            { icon: ShoppingBag, n: String(orders.length), l: 'commandes totales' },
            { icon: TrendingUp, n: formatDA(ca), l: 'CA confirmé+' },
            { icon: Package, n: String(orders.filter((o) => o.statut === 'nouveau').length), l: 'à confirmer' },
          ].map((s) => (
            <div key={s.l} className="rounded-[2rem] border border-gold/25 bg-coal p-8 text-center">
              <s.icon className="mx-auto text-gold" size={26} />
              <p className="font-display text-4xl mt-3">{s.n}</p>
              <p className="text-xs tracking-widest uppercase text-muted mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
