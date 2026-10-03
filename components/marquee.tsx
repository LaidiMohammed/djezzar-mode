const items = ['DJEZZAR MODE', 'BATNA', 'LIVRAISON 58 WILAYAS', 'STREETWEAR PREMIUM', 'COMMANDE WHATSAPP'];

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y border-gold/20 bg-coal py-4 ${reverse ? 'rotate-[-1deg]' : 'rotate-[1deg]'} scale-[1.02]`}>
      <div className="marquee-track gap-0" style={reverse ? { animationDirection: 'reverse' } : undefined}>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {row.map((t, i) => (
              <span key={i} className="flex items-center gap-6 px-6 whitespace-nowrap">
                <span className={`font-display text-xl italic ${i % 2 ? 'text-gold' : 'text-bone'}`}>{t}</span>
                <span className="w-2 h-2 rotate-45 bg-gold/60 inline-block" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
