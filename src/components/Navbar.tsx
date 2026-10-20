import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed, Calendar, Phone, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Menú & Cava', href: '#menu' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Historia', href: '#nosotros' },
    { name: 'Opiniones', href: '#opiniones' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#12180f]/95 backdrop-blur-md py-3 border-b border-[#f4efe4]/10 shadow-2xl'
          : 'bg-gradient-to-b from-[#12180f]/90 via-[#12180f]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 group transition-transform active:scale-95"
        >
          <div className="w-10 h-10 rounded-full border border-[#c9a24b]/40 bg-[#1b2416] flex items-center justify-center text-[#c9a24b] shadow-inner group-hover:border-[#c9a24b] transition-colors">
            <UtensilsCrossed className="w-5 h-5 text-[#c9a24b]" />
          </div>
          <div>
            <span className="font-serif text-2xl font-semibold tracking-wide text-[#f4efe4] group-hover:text-[#c9a24b] transition-colors">
              La Enramada
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-[#a9b09c] font-sans -mt-1">
              Cocina de Autor · 1998
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#f4efe4]/80 hover:text-[#c9a24b] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c9a24b] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+541140000000"
            className="hidden lg:flex items-center gap-1.5 text-xs text-[#a9b09c] hover:text-[#f4efe4] transition-colors px-3 py-1.5 rounded-full border border-[#f4efe4]/10 bg-[#1b2416]/50"
          >
            <Phone className="w-3.5 h-3.5 text-[#c9a24b]" />
            <span>+54 11 4000-0000</span>
          </a>
          <button
            onClick={onOpenReservation}
            className="flex items-center gap-2 bg-[#c9a24b] hover:bg-[#e4c478] text-[#12180f] px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#c9a24b]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Reservar Mesa</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#f4efe4] hover:text-[#c9a24b] hover:bg-[#1b2416] transition-colors cursor-pointer"
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#12180f]/98 backdrop-blur-xl border-b border-[#f4efe4]/10 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4 text-base font-sans">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-[#f4efe4]/90 hover:text-[#c9a24b] py-2 border-b border-[#f4efe4]/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#a9b09c]">→</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  handleLinkClick();
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#c9a24b] text-[#12180f] py-3 rounded-full font-semibold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Mesa</span>
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-[#a9b09c] pt-2">
                <Clock className="w-3.5 h-3.5 text-[#c9a24b]" />
                <span>Mar a Dom desde 13:00 h · Buenos Aires</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
