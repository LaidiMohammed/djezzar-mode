import Link from 'next/link';
import { MapPin, Truck, MessageCircle } from 'lucide-react';

export default function APropos() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-5">
      <p className="text-[11px] tracking-[0.4em] uppercase text-gold">Notre histoire</p>
      <h1 className="font-display text-6xl md:text-8xl mt-2">À pro<span className="italic text-gold">pos</span></h1>

      <div className="grid lg:grid-cols-2 gap-10 mt-12 items-stretch">
        <div className="arch-frame shape-arch min-h-[480px]">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80&auto=format&fit=crop" alt="Boutique Djezzar Mode" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          <p className="absolute bottom-8 inset-x-8 font-display text-3xl italic">« Le street n’est pas un style, c’est une attitude. »</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="rounded-[2rem] border border-white/10 bg-smoke p-8">
            <p className="font-display text-3xl">Djezzar Mode, Batna</p>
            <p className="text-bone/70 mt-4 leading-relaxed text-[15px]">
              Née au cœur de Batna, Djezzar Mode habille la jeunesse avec des pièces street premium :
              polos brodés, ensembles deux-pièces, chemises oxford, hoodies oversize.
              Chaque arrivage est shooté et posté sur TikTok <span className="text-gold">@djezzar_mode</span> avant d’arriver en boutique.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[['100%', 'coton premium'], ['58', 'wilayas livrées'], ['24h', 'expédition']].map(([n, l]) => (
              <div key={l} className="rounded-3xl border border-gold/25 bg-coal p-5 text-center">
                <p className="font-display text-3xl text-gold">{n}</p>
                <p className="text-[11px] tracking-widest uppercase text-muted mt-1">{l}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-smoke p-8 flex flex-col gap-3">
            {[
              [MapPin, 'Adresse : Batna, Algérie'],
              [Truck, 'Livraison : disponible dans les 58 wilayas du pays'],
              [MessageCircle, 'Contact / Commande : WhatsApp 0540924588'],
            ].map(([Icon, t]: any) => (
              <p key={t} className="flex items-center gap-3 text-bone/80 text-sm"><Icon size={17} className="text-gold shrink-0" />{t}</p>
            ))}
            <div className="flex flex-wrap gap-3 mt-4">
              <Link href="/vetements" className="bg-gold text-ink rounded-full px-7 py-3 text-xs tracking-widest uppercase hover:bg-bone transition-all">Voir vêtements</Link>
              <Link href="/commande" className="border border-white/20 rounded-full px-7 py-3 text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-all">Commander</Link>
            </div>
          </div>
        </div>
      </div>

      {/* video strip */}
      <div className="mt-12 relative overflow-hidden rounded-[2.5rem] border border-gold/25 min-h-[420px] grid place-items-center">
        <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/15615496/15615496-hd_1280_720_60fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/7677252/7677252-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/60" />
        <p className="relative font-display text-4xl md:text-6xl text-center px-6 italic">Fashion men — <span className="text-gold">l’attitude runway,</span><br />dans la rue de Batna.</p>
      </div>
    </div>
  );
}
