import type { Dish, GalleryItem, Review } from '../types/restaurant';

export const DISHES: Dish[] = [
  {
    id: 'dish-entrada-1',
    name: 'Carpaccio de Remolacha y Cabra',
    category: 'entradas',
    price: '$18.500 ARS',
    rawPrice: 18500,
    description: 'Finas láminas de remolacha asada, quenelle de queso de cabra artesanal, pistachos crocantes y vinagreta balsámica de higos.',
    image: '/images/dish-4.png',
    badge: 'Entrada de Autor',
    dietary: ['vegetariano', 'sin-tacc', 'chef-choice'],
    pairing: 'Chardonnay de Altura, Valle de Uco',
    chefNote: 'Un juego de contrastes terrosos y cremosos que despierta el paladar con frescura equilibrada.'
  },
  {
    id: 'dish-principal-1',
    name: 'Tagliatelle a la Trufa Negra',
    category: 'principales',
    price: '$24.500 ARS',
    rawPrice: 24500,
    description: 'Pasta fresca hecha a mano diariamente al huevo, emulsión de mantequilla noisette dorada, parmesano reggiano de 24 meses y abundante trufa negra rallada.',
    image: '/images/dish-1.png',
    badge: 'Plato Emblema',
    dietary: ['chef-choice'],
    pairing: 'Pinot Noir Patagonia Reserva 2021',
    chefNote: 'La trufa fresca se incorpora al momento en mesa sobre la pasta caliente para liberar sus aceites más puros.'
  },
  {
    id: 'dish-principal-2',
    name: 'Solomillo a la Brasa de Quebracho',
    category: 'principales',
    price: '$38.000 ARS',
    rawPrice: 38000,
    description: 'Ternera de pastura madurada durante 35 días, vegetales baby de estación ahumados en leña y reducción densa de jugo de cocción lenta.',
    image: '/images/dish-2.png',
    badge: 'Especialidad Brasa',
    dietary: ['sin-tacc', 'maridaje-sugerido'],
    pairing: 'Malbec Gran Reserva, Luján de Cuyo',
    chefNote: 'Sellado a fuego vivo para sellar los jugos y terminado a baja temperatura para una terneza insuperable.'
  },
  {
    id: 'dish-postre-1',
    name: 'Coulant de Chocolate 70%',
    category: 'postres',
    price: '$13.900 ARS',
    rawPrice: 13900,
    description: 'Corazón fundente de cacao amargo ecuatoriano 70%, compota ácida de frutos rojos silvestres y helado de vainilla de Madagascar.',
    image: '/images/dish-3.png',
    badge: 'Tentación Dulce',
    dietary: ['vegetariano', 'chef-choice'],
    pairing: 'Oporto Tawny o Café Espresso de especialidad',
    chefNote: 'El contraste de temperatura entre el núcleo cálido de chocolate y el helado artesanal crea una experiencia sublime.'
  },
  {
    id: 'dish-cava-1',
    name: 'Cava Privada & Vinos de Guarda',
    category: 'cava',
    price: '$28.000 ARS',
    rawPrice: 28000,
    description: 'Selección curada por nuestra sommelier de parcelas exclusivas de Mendoza, Salta y Río Negro. Opciones por copa y botella.',
    image: '/images/dish-5.png',
    badge: 'Selección Sommelier',
    dietary: ['maridaje-sugerido'],
    pairing: 'Ideal para acompañar quesos afinados o carnes rojas',
    chefNote: 'Nuestra cava conserva más de 150 etiquetas con añadas especiales custodiadas a temperatura y humedad óptimas.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'El Oficio en la Cocina',
    category: 'Cocina & Técnica',
    image: '/images/gallery-1.png',
    layout: 'tall'
  },
  {
    id: 'gal-2',
    title: 'Atmósfera & Calidez',
    category: 'Salón Principal',
    image: '/images/gallery-2.png',
    layout: 'regular'
  },
  {
    id: 'gal-3',
    title: 'Coctelería de Autor',
    category: 'Barra & Cócteles',
    image: '/images/gallery-3.png',
    layout: 'regular'
  },
  {
    id: 'gal-4',
    title: 'Huerta & Temporada',
    category: 'Producto Fresco',
    image: '/images/gallery-4.png',
    layout: 'wide'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Lucía Martín',
    occasion: 'Cena de aniversario',
    rating: 5,
    comment: 'Una experiencia redonda de principio a fin. El tagliatelle a la trufa es simplemente de otro planeta y la atención del equipo es cálida e impecable. Volveremos seguro.',
    dishRecommended: 'Tagliatelle a la Trufa Negra',
    date: 'Hace 3 días'
  },
  {
    id: 'rev-2',
    author: 'Carlos Ferrer',
    occasion: 'Comida de negocios',
    rating: 5,
    comment: 'El respeto por el producto de temporada se nota en cada bocado. El solomillo en su punto justo, el ambiente silencioso y una carta de vinos sobresaliente.',
    dishRecommended: 'Solomillo a la Brasa',
    date: 'Hace 1 semana'
  },
  {
    id: 'rev-3',
    author: 'Ana Ruiz',
    occasion: 'Cena con amigos',
    rating: 5,
    comment: 'El coulant de chocolate merece el viaje por sí solo. Detalle, mimo y una cocina honesta que homenajea a las mejores tradiciones sin perder modernidad.',
    dishRecommended: 'Coulant de Chocolate 70%',
    date: 'Hace 2 semanas'
  },
  {
    id: 'rev-4',
    author: 'Esteban Morales',
    occasion: 'Noche de maridaje',
    rating: 5,
    comment: 'La recomendación de la sommelier con los vinos de guarda elevó la cena a un recuerdo memorable. El carpaccio de remolacha sorprende gratamente.',
    dishRecommended: 'Carpaccio de Remolacha y Cabra',
    date: 'Hace 3 semanas'
  }
];

export const SCHEDULE = [
  { days: 'Lunes', hours: 'Cerrado por descanso del equipo', closed: true },
  { days: 'Martes a Jueves', hours: '13:00 – 16:00 | 20:00 – 23:30', closed: false },
  { days: 'Viernes y Sábados', hours: '13:00 – 16:30 | 20:00 – 00:30', closed: false },
  { days: 'Domingos', hours: '12:30 – 17:30 (Servicio de mediodía)', closed: false }
];
