import React, { useEffect } from 'react';
import { X, Wine, ChefHat, CheckCircle2, Calendar } from 'lucide-react';
import type { Dish } from '../types/restaurant';

interface DishModalProps {
  dish: Dish | null;
  onClose: () => void;
  onReserve: (dishName: string) => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose, onReserve }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (dish) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#1b2416] border border-[#c9a24b]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#12180f]/80 text-[#f4efe4] hover:text-[#c9a24b] hover:bg-[#12180f] transition-all cursor-pointer border border-[#f4efe4]/10"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media / Image */}
        <div className="md:w-1/2 relative min-h-[260px] md:min-h-full">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b2416] via-transparent to-transparent md:hidden" />
          {dish.badge && (
            <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-[#c9a24b] text-[#12180f] shadow-md">
              {dish.badge}
            </span>
          )}
        </div>

        {/* Details Content */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs uppercase tracking-widest text-[#a9b09c] font-semibold">
                {dish.category === 'entradas' && 'Entrada de Temporada'}
                {dish.category === 'principales' && 'Plato Principal'}
                {dish.category === 'postres' && 'Postre de la Casa'}
                {dish.category === 'cava' && 'Cava & Vinos'}
              </span>
              <span className="font-serif text-xl font-bold text-[#c9a24b]">
                {dish.price}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#f4efe4] mb-4">
              {dish.name}
            </h3>

            <p className="text-[#a9b09c] text-sm leading-relaxed mb-6">
              {dish.description}
            </p>

            {/* Dietary Tags */}
            {dish.dietary && dish.dietary.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {dish.dietary.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-[#12180f] border border-[#f4efe4]/10 text-[#f4efe4]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#c9a24b]" />
                    {tag === 'vegetariano' && 'Apto Vegetariano'}
                    {tag === 'sin-tacc' && 'Sin TACC / Gluten Free'}
                    {tag === 'chef-choice' && 'Favorito del Chef'}
                    {tag === 'maridaje-sugerido' && 'Maridaje Especial'}
                  </span>
                ))}
              </div>
            )}

            {/* Chef Tasting Note */}
            {dish.chefNote && (
              <div className="p-3.5 rounded-xl bg-[#12180f]/80 border border-[#c9a24b]/20 mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c9a24b] mb-1">
                  <ChefHat className="w-4 h-4" />
                  <span>Nota del Chef</span>
                </div>
                <p className="text-xs text-[#a9b09c] italic leading-relaxed">
                  "{dish.chefNote}"
                </p>
              </div>
            )}

            {/* Wine Pairing */}
            {dish.pairing && (
              <div className="p-3.5 rounded-xl bg-[#12180f]/80 border border-[#f4efe4]/10 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#e4c478] mb-1">
                  <Wine className="w-4 h-4" />
                  <span>Maridaje Sugerido por Sommelier</span>
                </div>
                <p className="text-xs text-[#f4efe4] leading-relaxed">
                  {dish.pairing}
                </p>
              </div>
            )}
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#f4efe4]/10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onReserve(dish.name);
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#c9a24b] hover:bg-[#e4c478] text-[#12180f] py-3 rounded-full font-semibold text-sm transition-transform active:scale-95 cursor-pointer shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar para degustar este plato</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
