import { MapPin, Truck, Phone } from 'lucide-react';

export default function BatnaMap() {
  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 overflow-hidden rounded-[2rem] border border-gold/25 min-h-[380px] relative">
        <iframe
          title="Djezzar Mode - Batna"
          src="https://www.openstreetmap.org/export/embed.html?bbox=5.95%2C35.45%2C6.4%2C35.66&layer=mapnik&marker=35.555%2C6.174"
          className="absolute inset-0 w-full h-full grayscale invert-[0.9] contrast-[0.9]"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 bg-ink/90 backdrop-blur rounded-2xl px-5 py-3 border border-gold/40 flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-gold grid place-items-center text-ink"><MapPin size={18} /></span>
          <div><p className="font-display text-lg leading-none">Djezzar Mode</p><p className="text-xs text-muted">Batna, Algérie — 35.555, 6.174</p></div>
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-col gap-4">
        {[
          { icon: MapPin, t: 'Adresse', d: 'Batna, Algérie — centre ville. Repère envoyé sur WhatsApp après commande.' },
          { icon: Truck, t: 'Livraison 58 wilayas', d: 'Envoi rapide vers toutes les wilayas. Paiement à la livraison (COD).' },
          { icon: Phone, t: 'Contact / Commande', d: 'WhatsApp : 0540924588 — réponse 7j/7, TikTok @djezzar_mode.' },
        ].map((c) => (
          <div key={c.t} className="rounded-[1.5rem] border border-white/10 bg-smoke p-6 hover:border-gold/50 transition-colors duration-300">
            <c.icon className="text-gold" size={22} />
            <p className="font-display text-2xl mt-3">{c.t}</p>
            <p className="text-sm text-muted mt-2 leading-relaxed">{c.d}</p>
          </div>
        ))}
        <div className="flex gap-3">
          <a href="https://wa.me/213540924588" target="_blank" className="flex-1 text-center bg-gold text-ink rounded-full py-3.5 text-sm tracking-widest uppercase hover:bg-bone transition-all">WhatsApp</a>
          <a href="https://www.google.com/maps/search/?api=1&query=Batna+Algeria" target="_blank" className="flex-1 text-center border border-white/20 rounded-full py-3.5 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all">Itinéraire</a>
        </div>
      </div>
    </div>
  );
}
