export type DishCategory = 'todos' | 'entradas' | 'principales' | 'postres' | 'cava';

export interface Dish {
  id: string;
  name: string;
  category: 'entradas' | 'principales' | 'postres' | 'cava';
  price: string;
  rawPrice: number;
  description: string;
  image: string;
  badge?: string;
  dietary?: ('vegetariano' | 'sin-tacc' | 'chef-choice' | 'maridaje-sugerido')[];
  pairing?: string;
  chefNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  layout?: 'tall' | 'wide' | 'regular';
}

export interface Review {
  id: string;
  author: string;
  occasion: string;
  rating: number;
  comment: string;
  dishRecommended?: string;
  date: string;
}

export interface ReservationFormData {
  nombre: string;
  email: string;
  telefono: string;
  fecha: string;
  hora: string;
  personas: string;
  zona: 'salon' | 'patio' | 'barra';
  notas: string;
}

export interface ConfirmedReservation extends ReservationFormData {
  code: string;
  createdAt: string;
}
