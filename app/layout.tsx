import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Floats from '@/components/floats';

export const metadata: Metadata = {
  title: 'Djezzar Mode — Streetwear Batna | Livraison 58 wilayas',
  description: 'Boutique streetwear à Batna. Polos, ensembles, chemises premium. Commande WhatsApp 0540924588, livraison 58 wilayas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased pb-16 lg:pb-0">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Floats />
      </body>
    </html>
  );
}
