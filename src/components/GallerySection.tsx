import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        (activeImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[#171f13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c9a24b] font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            Galería & Espacios
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#f4efe4] tracking-tight mb-4">
            Un Vistazo a la Casa
          </h2>
          <p className="text-[#a9b09c] text-sm sm:text-base leading-relaxed">
            Luces tenues, detalles en madera noble y la energía viva de los fogones.
            Cada rincón está pensado para que tu velada sea un momento para recordar.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {GALLERY_ITEMS.map((item, index) => {
            const isTall = item.layout === 'tall';
            const isWide = item.layout === 'wide';

            return (
              <figure
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#12180f] border border-[#f4efe4]/10 hover:border-[#c9a24b]/40 transition-all duration-300 hover:shadow-2xl ${
                  isTall ? 'md:row-span-2' : ''
                } ${isWide ? 'md:col-span-2' : ''}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12180f]/90 via-[#12180f]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#c9a24b] font-semibold">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-xl font-medium text-[#f4efe4]">
                        {item.title}
                      </h4>
                    </div>
                    <div className="p-2 rounded-full bg-[#c9a24b] text-[#12180f]">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-20 p-3 rounded-full bg-[#1b2416] text-[#f4efe4] hover:text-[#c9a24b] border border-[#f4efe4]/10 cursor-pointer"
            aria-label="Cerrar lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-[#1b2416]/80 text-[#f4efe4] hover:text-[#c9a24b] border border-[#f4efe4]/10 cursor-pointer hover:scale-110 transition-transform"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-[#1b2416]/80 text-[#f4efe4] hover:text-[#c9a24b] border border-[#f4efe4]/10 cursor-pointer hover:scale-110 transition-transform"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[activeImageIndex].image}
              alt={GALLERY_ITEMS[activeImageIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#c9a24b]">
                {GALLERY_ITEMS[activeImageIndex].category}
              </span>
              <h3 className="font-serif text-xl text-[#f4efe4]">
                {GALLERY_ITEMS[activeImageIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
