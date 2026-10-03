export type Product = {
  id: string;
  brand: string;
  name: string;
  desc: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  category: string;
  sizes: string[];
  shape: 'arch' | 'egg' | 'pill' | 'blob';
};

export const WHATSAPP_NUMBER = '213540924588';
export const WHATSAPP_DISPLAY = '0540924588';
export const TIKTOK_URL = 'https://www.tiktok.com/@djezzar_mode?is_from_webapp=1&sender_device=pc';

export const products: Product[] = [
  {
    id: 'polo-lacoste-vert',
    brand: 'LACOSTE',
    name: 'Polo Lacoste vert',
    desc: 'Piqué coton, croco brodé, coupe droite.',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=900&q=80&auto=format&fit=crop',
    badge: 'Top vente',
    category: 'Polos',
    sizes: ['M', 'L', 'XL', 'XXL'],
    shape: 'arch',
  },
  {
    id: 'tshirt-tommy-flag',
    brand: 'TOMMY',
    name: 'T-shirt Tommy flag',
    desc: 'Coton lourd 220g, flag brodé poitrine.',
    price: 4200,
    oldPrice: 5200,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80&auto=format&fit=crop',
    badge: 'Nouveau',
    category: 'T-shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shape: 'egg',
  },
  {
    id: 'ensemble-ep-noir',
    brand: 'EP',
    name: 'Ensemble EP noir',
    desc: 'Veste + jogging, deux pièces street.',
    price: 9900,
    image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=900&q=80&auto=format&fit=crop',
    badge: 'TikTok',
    category: 'Ensembles',
    sizes: ['M', 'L', 'XL'],
    shape: 'blob',
  },
  {
    id: 'chemise-oxford-blanche',
    brand: 'CLASSIQUE',
    name: 'Chemise oxford blanche',
    desc: 'Oxford premium, col boutonné.',
    price: 5600,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&q=80&auto=format&fit=crop',
    category: 'Chemises',
    sizes: ['M', 'L', 'XL', 'XXL'],
    shape: 'pill',
  },
  {
    id: 'hoodie-oversize-beige',
    brand: 'DJEZZAR',
    name: 'Hoodie oversize beige',
    desc: 'Molleton gratté 400g, capuche doublée.',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=80&auto=format&fit=crop',
    badge: 'Nouveau',
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    shape: 'egg',
  },
  {
    id: 'veste-teddy-noir',
    brand: 'STREET',
    name: 'Veste teddy noir & beige',
    desc: 'Laine + manches cuir, snap buttons.',
    price: 12500,
    oldPrice: 14900,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80&auto=format&fit=crop',
    badge: 'Top vente',
    category: 'Vestes',
    sizes: ['M', 'L', 'XL'],
    shape: 'arch',
  },
  {
    id: 'cargo-noir-tech',
    brand: 'CARGO',
    name: 'Cargo noir tech',
    desc: '6 poches, tissu ripstop, coupe tapered.',
    price: 5900,
    image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=900&q=80&auto=format&fit=crop',
    category: 'Pantalons',
    sizes: ['M', 'L', 'XL', 'XXL'],
    shape: 'blob',
  },
  {
    id: 'ensemble-survetement-gris',
    brand: 'EP',
    name: 'Survêtement gris premium',
    desc: 'Ensemble jogging + sweat, street Batna.',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=900&q=80&auto=format&fit=crop',
    badge: 'TikTok',
    category: 'Ensembles',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shape: 'pill',
  },
];

export const categories = ['Tous', 'Polos', 'T-shirts', 'Chemises', 'Hoodies', 'Vestes', 'Pantalons', 'Ensembles'];

export function formatDA(n: number) {
  return n.toLocaleString('fr-DZ').replace(/,/g, ' ') + ' DA';
}
