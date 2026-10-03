'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MapPin } from 'lucide-react';
import { WHATSAPP_DISPLAY } from '@/lib/products';

const links = [
  { href: '/', label: 'Home' },
  { href: '/vetements', label: 'Vêtements' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/commande', label: 'Achats' },
  { href: '/admin', label: 'Admin' },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink/90 backdrop-blur-xl border-b border-gold/20 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border border-gold/60 grid place-items-center bg-ink group-hover:rotate-[20deg] transition-transform duration-500">
              <span className="font-display text-gold text-2xl font-bold -mt-0.5">D</span>
            </div>
            <div className="leading-none">
              <p className="font-display text-2xl tracking-wide">DJEZZAR <span className="text-gold italic">Mode</span></p>
              <p className="text-[10px] tracking-[0.35em] text-muted uppercase flex items-center gap-1"><MapPin size={10} className="text-gold" /> Batna • Streetwear</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 relative group ${path === l.href ? 'text-gold' : 'text-bone/70 hover:text-bone'}`}>
                {l.label}
                <span className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ${path === l.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`https://wa.me/213540924588`} target="_blank" className="text-xs tracking-widest border border-gold/40 rounded-full px-5 py-2.5 hover:bg-gold hover:text-ink transition-all duration-300">
              {WHATSAPP_DISPLAY}
            </a>
            <Link href="/commande" className="flex items-center gap-2 bg-gold text-ink text-xs tracking-widest uppercase rounded-full px-5 py-2.5 hover:bg-bone transition-all duration-300">
              <ShoppingBag size={14} /> Commander
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden w-11 h-11 rounded-full border border-gold/40 grid place-items-center">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-ink/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div className={`absolute top-24 left-5 right-5 flex flex-col gap-2 transition-all duration-500 ${open ? 'translate-y-0' : '-translate-y-6'}`}>
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`font-display text-4xl py-3 border-b border-white/10 transition-all duration-500 ${path === l.href ? 'text-gold italic pl-4' : 'text-bone'} ${open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
              {l.label}
            </Link>
          ))}
          <a href="https://wa.me/213540924588" className="mt-6 bg-gold text-ink text-center rounded-full py-4 tracking-widest uppercase text-sm">WhatsApp {WHATSAPP_DISPLAY}</a>
        </div>
      </div>
    </>
  );
}
