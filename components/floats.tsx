'use client';
import { MessageCircle, Music2 } from 'lucide-react';
import { TIKTOK_URL } from '@/lib/products';

export default function Floats() {
  return (
    <>
      <div className="fixed bottom-20 lg:bottom-5 right-4 lg:right-5 z-50 flex flex-col gap-3">
        <a href={TIKTOK_URL} target="_blank" aria-label="TikTok"
          className="w-12 h-12 rounded-full bg-smoke border border-white/15 grid place-items-center hover:border-gold hover:text-gold transition-all hover:scale-110">
          <Music2 size={20} />
        </a>
        <a href="https://wa.me/213540924588?text=Salam%20Djezzar%20Mode!" target="_blank" aria-label="WhatsApp"
          className="w-14 h-14 rounded-full bg-gold text-ink grid place-items-center shadow-[0_0_40px_rgba(216,184,122,.5)] hover:scale-110 transition-transform animate-float">
          <MessageCircle size={24} />
        </a>
      </div>
      {/* mobile bottom bar */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-ink/95 backdrop-blur border-t border-gold/20 grid grid-cols-4 text-[10px] tracking-widest uppercase py-2.5 px-2">
        {[['Home', '/'], ['Shop', '/vetements'], ['Commander', '/commande'], ['Admin', '/admin']].map(([l, h]) => (
          <a key={h + l} href={h} className="text-center py-1.5 text-bone/70 hover:text-gold">{l}</a>
        ))}
      </nav>
    </>
  );
}
