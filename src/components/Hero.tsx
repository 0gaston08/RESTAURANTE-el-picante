import React from 'react';
import { Calendar, ChevronDown, Award, Sparkles, Wine, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="inicio" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Dark & Gold Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Interior cálido e iluminado con velas del restaurante La Enramada"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12180f] via-[#12180f]/85 to-[#12180f]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12180f] via-transparent to-[#12180f]/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-start justify-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b2416]/90 border border-[#c9a24b]/40 backdrop-blur-md mb-6 shadow-lg shadow-[#12180f]/50">
          <Sparkles className="w-4 h-4 text-[#c9a24b] animate-spin duration-3000" />
          <span className="text-xs uppercase tracking-widest text-[#c9a24b] font-semibold">
            Cocina de Autor · Desde 1998
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] text-[#f4efe4] max-w-3xl mb-6 tracking-tight">
          Sabores que se quedan <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4efe4] via-[#e4c478] to-[#c9a24b]">
            en la memoria
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-[#a9b09c] max-w-2xl mb-10 leading-relaxed font-sans font-normal">
          Producto fresco de pequeños productores, técnica clásica y una cava de guarda excepcional.
          Te invitamos a una experiencia gastronómica donde cada detalle cuenta.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenReservation}
            className="flex items-center justify-center gap-3 bg-[#c9a24b] hover:bg-[#e4c478] text-[#12180f] px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-xl shadow-[#c9a24b]/25 hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Reservar tu Mesa</span>
          </button>
          <a
            href="#menu"
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#f4efe4]/20 hover:border-[#c9a24b] text-[#f4efe4] hover:bg-[#1b2416]/80 font-medium text-base backdrop-blur-sm transition-all duration-300 text-center"
          >
            <span>Explorar la Carta</span>
            <span className="text-[#c9a24b]">↓</span>
          </a>
        </div>

        {/* High-end Highlights Bar */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#f4efe4]/10 max-w-4xl">
          <div className="flex items-center gap-3 p-2">
            <div className="p-2.5 rounded-xl bg-[#1b2416] border border-[#c9a24b]/20 text-[#c9a24b]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif font-bold text-lg text-[#f4efe4]">1★ Estrella</p>
              <p className="text-xs text-[#a9b09c]">Guía Gastronómica</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2.5 rounded-xl bg-[#1b2416] border border-[#c9a24b]/20 text-[#c9a24b]">
              <Wine className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif font-bold text-lg text-[#f4efe4]">+150</p>
              <p className="text-xs text-[#a9b09c]">Etiquetas en Cava</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2.5 rounded-xl bg-[#1b2416] border border-[#c9a24b]/20 text-[#c9a24b]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif font-bold text-lg text-[#f4efe4]">100% Fresco</p>
              <p className="text-xs text-[#a9b09c]">Huerta & Proximidad</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2.5 rounded-xl bg-[#1b2416] border border-[#c9a24b]/20 text-[#c9a24b]">
              <span className="font-serif text-lg font-bold text-[#c9a24b]">25+</span>
            </div>
            <div>
              <p className="font-serif font-bold text-lg text-[#f4efe4]">Años</p>
              <p className="text-xs text-[#a9b09c]">Oficio y Pasión</p>
            </div>
          </div>
        </div>
      </div>

      {/* Down chevron */}
      <a
        href="#menu"
        aria-label="Ir a la carta"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#a9b09c] hover:text-[#c9a24b] transition-colors animate-bounce p-2"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
