import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Eye, Wine } from 'lucide-react';
import { DISHES } from '../data/restaurantData';
import type { Dish, DishCategory } from '../types/restaurant';

interface MenuSectionProps {
  onSelectDish: (dish: Dish) => void;
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDish, onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<DishCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'todos' as DishCategory, label: 'Toda la Carta' },
    { id: 'entradas' as DishCategory, label: 'Entradas' },
    { id: 'principales' as DishCategory, label: 'Principales' },
    { id: 'postres' as DishCategory, label: 'Postres' },
    { id: 'cava' as DishCategory, label: 'Cava & Vinos' },
  ];

  const filteredDishes = useMemo(() => {
    return DISHES.filter((dish) => {
      const matchesCategory =
        selectedCategory === 'todos' || dish.category === selectedCategory;
      const matchesSearch =
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (dish.pairing && dish.pairing.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#12180f] relative overflow-hidden">
      {/* Subtle Glow backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c9a24b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c9a24b] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Nuestra Propuesta Culinaria
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#f4efe4] tracking-tight mb-4">
            Platos Destacados
          </h2>
          <p className="text-[#a9b09c] text-sm sm:text-base leading-relaxed">
            Una cocina arraigada en el respeto por el origen. Cada receta rinde homenaje
            a los ciclos naturales y a las mejores técnicas artesanales.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#1b2416] border border-[#f4efe4]/10 max-w-full overflow-x-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#c9a24b] text-[#12180f] font-semibold shadow-md'
                      : 'text-[#f4efe4]/70 hover:text-[#f4efe4] hover:bg-[#12180f]/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Live Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#a9b09c] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar plato, ingrediente..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1b2416] border border-[#f4efe4]/10 focus:border-[#c9a24b] rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#f4efe4] placeholder-[#a9b09c]/60 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#a9b09c] hover:text-[#f4efe4]"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-[#1b2416]/40 rounded-3xl border border-[#f4efe4]/10">
            <p className="text-[#f4efe4] font-serif text-xl mb-2">No encontramos platos con esa búsqueda</p>
            <p className="text-[#a9b09c] text-sm mb-6">Prueba con otra palabra clave o restablece los filtros.</p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#c9a24b] text-[#12180f] text-xs font-semibold"
            >
              Ver toda la carta
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <article
                key={dish.id}
                className="group bg-[#1b2416] border border-[#f4efe4]/10 hover:border-[#c9a24b]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#c9a24b]/10 flex flex-col justify-between"
              >
                {/* Media Container */}
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#12180f]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b2416] via-transparent to-transparent opacity-80" />

                    {/* Floating badge */}
                    {dish.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#12180f]/85 border border-[#c9a24b]/30 text-[#c9a24b] backdrop-blur-md">
                        {dish.badge}
                      </span>
                    )}

                    {/* Quick View Button */}
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="absolute bottom-3 right-3 p-2.5 rounded-full bg-[#12180f]/90 text-[#f4efe4] hover:text-[#c9a24b] border border-[#f4efe4]/10 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 cursor-pointer shadow-lg"
                      title="Ver maridaje y ficha técnica"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-xl font-semibold text-[#f4efe4] group-hover:text-[#e4c478] transition-colors leading-snug">
                        {dish.name}
                      </h3>
                      <span className="font-serif text-base font-bold text-[#c9a24b] whitespace-nowrap">
                        {dish.price}
                      </span>
                    </div>

                    <p className="text-sm text-[#a9b09c] line-clamp-3 leading-relaxed mb-4">
                      {dish.description}
                    </p>

                    {/* Dietary Badges */}
                    {dish.dietary && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {dish.dietary.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#12180f] text-[#a9b09c] border border-[#f4efe4]/5"
                          >
                            {tag === 'vegetariano' && 'Vegetariano'}
                            {tag === 'sin-tacc' && 'Sin TACC'}
                            {tag === 'chef-choice' && 'Firma'}
                            {tag === 'maridaje-sugerido' && 'Maridaje'}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-[#f4efe4]/5 flex items-center justify-between text-xs">
                  <button
                    onClick={() => onSelectDish(dish)}
                    className="inline-flex items-center gap-1.5 text-[#c9a24b] hover:text-[#e4c478] font-medium transition-colors cursor-pointer"
                  >
                    <Wine className="w-3.5 h-3.5" />
                    <span>Ver Maridaje & Ficha</span>
                  </button>
                  <button
                    onClick={onOpenReservation}
                    className="text-[#a9b09c] hover:text-[#f4efe4] transition-colors cursor-pointer underline decoration-[#f4efe4]/30"
                  >
                    Pedir en Reserva
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Tasting Menu Notice */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#1b2416] via-[#222d1c] to-[#1b2416] border border-[#c9a24b]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-2xl text-[#f4efe4] font-semibold">
              Menú Degustación "Paso a Paso"
            </h4>
            <p className="text-sm text-[#a9b09c] max-w-xl">
              7 tiempos armonizados con vinos de nuestra cava privada. Disponible únicamente con reserva previa.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#c9a24b] hover:bg-[#e4c478] text-[#12180f] font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
          >
            Consultar Disponibilidad
          </button>
        </div>
      </div>
    </section>
  );
};
