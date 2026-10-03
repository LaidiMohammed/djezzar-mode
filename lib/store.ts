export const wilayas = [
  '01 - Adrar','02 - Chlef','03 - Laghouat','04 - Oum El Bouaghi','05 - Batna','06 - Béjaïa',
  '07 - Biskra','08 - Béchar','09 - Blida','10 - Bouira','11 - Tamanrasset','12 - Tébessa',
  '13 - Tlemcen','14 - Tiaret','15 - Tizi Ouzou','16 - Alger','17 - Djelfa','18 - Jijel',
  '19 - Sétif','20 - Saïda','21 - Skikda','22 - Sidi Bel Abbès','23 - Annaba','24 - Guelma',
  '25 - Constantine','26 - Médéa','27 - Mostaganem',"28 - M'Sila",'29 - Mascara','30 - Ouargla',
  '31 - Oran','32 - El Bayadh','33 - Illizi','34 - Bordj Bou Arréridj','35 - Boumerdès','36 - El Tarf',
  '37 - Tindouf','38 - Tissemsilt','39 - El Oued','40 - Khenchela','41 - Souk Ahras','42 - Tipaza',
  '43 - Mila','44 - Aïn Defla','45 - Naâma','46 - Aïn Témouchent','47 - Ghardaïa','48 - Relizane',
  '49 - Timimoun','50 - Bordj Badji Mokhtar','51 - Ouled Djellal','52 - Béni Abbès','53 - In Salah',
  '54 - In Guezzam','55 - Touggourt','56 - Djanet','57 - El M’Ghair','58 - El Meniaa',
];

export type Order = {
  id: string;
  date: string;
  nom: string;
  telephone: string;
  wilaya: string;
  commune: string;
  adresse: string;
  produitId: string;
  produitNom: string;
  taille: string;
  quantite: number;
  prix: number;
  total: number;
  note?: string;
  statut: 'nouveau' | 'confirmé' | 'expédié' | 'livré';
};

const KEY = 'djezz_orders_v1';
const PKEY = 'djezz_products_custom_v1';

export function getOrders(): Order[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveOrder(o: Order) {
  const all = getOrders();
  all.unshift(o);
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function updateOrderStatus(id: string, statut: Order['statut']) {
  const all = getOrders().map((o) => (o.id === id ? { ...o, statut } : o));
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function deleteOrder(id: string) {
  localStorage.setItem(KEY, JSON.stringify(getOrders().filter((o) => o.id !== id)));
}

export function buildWhatsAppMessage(o: Omit<Order, 'id' | 'date' | 'statut' | 'total'> & { total: number }) {
  return `🛍️ NOUVELLE COMMANDE DJEZZAR MODE%0A%0A👤 Nom: ${encodeURIComponent(o.nom)}%0A📞 Tél: ${encodeURIComponent(o.telephone)}%0A📍 Wilaya: ${encodeURIComponent(o.wilaya)}%0A🏘️ Commune: ${encodeURIComponent(o.commune)}%0A🏠 Adresse: ${encodeURIComponent(o.adresse)}%0A%0A👕 Produit: ${encodeURIComponent(o.produitNom)}%0A📏 Taille: ${encodeURIComponent(o.taille)}%0A🔢 Quantité: ${o.quantite}%0A💰 Total: ${o.total} DA%0A%0A📝 Note: ${encodeURIComponent(o.note || '-')}`;
}
