import React, { useState } from 'react';
import { UtensilsCrossed, ArrowUp, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setNewsletterEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e130b] border-t border-[#f4efe4]/10 text-[#a9b09c] pt-20 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#f4efe4]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full border border-[#c9a24b]/40 bg-[#1b2416] flex items-center justify-center text-[#c9a24b]">
                <UtensilsCrossed className="w-5 h-5 text-[#c9a24b]" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-[#f4efe4]">
                La Enramada
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm">
              Cocina de autor con producto de temporada, cava de guarda y un servicio cuidado
              al detalle en el corazón de Buenos Aires.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1b2416] border border-[#f4efe4]/10 flex items-center justify-center text-[#f4efe4] hover:text-[#c9a24b] hover:border-[#c9a24b] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1b2416] border border-[#f4efe4]/10 flex items-center justify-center text-[#f4efe4] hover:text-[#c9a24b] hover:border-[#c9a24b] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="font-serif text-sm font-semibold text-[#f4efe4] uppercase tracking-wider">
              Navegación
            </p>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-[#c9a24b] transition-colors">Inicio</a></li>
              <li><a href="#menu" className="hover:text-[#c9a24b] transition-colors">Menú de Estación</a></li>
              <li><a href="#galeria" className="hover:text-[#c9a24b] transition-colors">Galería Fotográfica</a></li>
              <li><a href="#nosotros" className="hover:text-[#c9a24b] transition-colors">Nuestra Filosofía</a></li>
              <li><a href="#opiniones" className="hover:text-[#c9a24b] transition-colors">Comensales</a></li>
              <li><a href="#reserva" className="hover:text-[#c9a24b] transition-colors">Reservas Online</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <p className="font-serif text-sm font-semibold text-[#f4efe4] uppercase tracking-wider">
              Contacto
            </p>
            <div className="space-y-2 text-sm">
              <p>Av. Corrientes 1234, C1043</p>
              <p>Buenos Aires, Argentina</p>
              <p className="pt-1 text-[#f4efe4] font-medium">+54 11 4000-0000</p>
              <p>hola@laenramada.com.ar</p>
            </div>
          </div>

          {/* Newsletter / Club de Vinos */}
          <div className="space-y-3">
            <p className="font-serif text-sm font-semibold text-[#f4efe4] uppercase tracking-wider">
              Club de Vinos & Novedades
            </p>
            <p className="text-xs leading-relaxed">
              Recibe invitaciones a nuestras catas exclusivas de bodega y cambios de carta de estación.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#1b2416] border border-[#f4efe4]/10 rounded-full px-4 py-2.5 text-xs text-[#f4efe4] placeholder-[#a9b09c]/60 focus:outline-none focus:border-[#c9a24b]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#c9a24b] text-[#12180f] hover:bg-[#e4c478] transition-colors cursor-pointer"
                  aria-label="Suscribirse al newsletter"
                >
                  {isSubscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {isSubscribed && (
                <p className="text-[11px] text-[#c9a24b] pt-1">
                  ¡Gracias por sumarte a nuestro Club de Vinos!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} La Enramada. Todos los derechos reservados. Cocina de Autor.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#a9b09c] hover:text-[#c9a24b] transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
