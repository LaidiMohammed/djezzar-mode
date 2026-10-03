import Link from 'next/link';
import { MapPin, Truck, MessageCircle, Music2 } from 'lucide-react';
import { TIKTOK_URL, WHATSAPP_DISPLAY } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-coal mt-0">
      <div className="max-w-7xl mx-auto px-5 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-3xl">DJEZZAR <span className="text-gold italic">Mode</span></p>
          <p className="text-sm text-muted mt-3 leading-relaxed">Streetwear premium à Batna. Pièces choisies, finitions luxe, esprit rue algérienne.</p>
          <a href={TIKTOK_URL} target="_blank" className="mt-4 inline-flex items-center gap-2 text-sm border border-white/15 rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-all">
            <Music2 size={15} /> @djezzar_mode
          </a>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Navigation</p>
          <div className="flex flex-col gap-2.5 text-sm text-bone/70">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="/vetements" className="hover:text-gold transition-colors">Vêtements</Link>
            <Link href="/a-propos" className="hover:text-gold transition-colors">À propos</Link>
            <Link href="/commande" className="hover:text-gold transition-colors">Commander</Link>
            <Link href="/admin" className="hover:text-gold transition-colors">Admin</Link>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Boutique</p>
          <div className="flex flex-col gap-2.5 text-sm text-bone/70">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> Batna, Algérie</span>
            <span className="flex items-center gap-2"><Truck size={14} className="text-gold" /> Livraison 58 wilayas</span>
            <span className="flex items-center gap-2"><MessageCircle size={14} className="text-gold" /> {WHATSAPP_DISPLAY}</span>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Commande rapide</p>
          <p className="text-sm text-muted mb-4">Remplis le formulaire, on te confirme sur WhatsApp.</p>
          <Link href="/commande" className="bg-gold text-ink rounded-full px-6 py-3 text-sm tracking-widest uppercase hover:bg-bone transition-all inline-block">Commander</Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-muted tracking-widest">© 2026 DJEZZAR MODE — BATNA • DESIGNED WITH PASSION</div>
    </footer>
  );
}
