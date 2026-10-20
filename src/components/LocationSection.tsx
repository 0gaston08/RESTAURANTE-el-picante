import React from 'react';
import { MapPin, Phone, Mail, Navigation, Train, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-24 sm:py-32 bg-[#171f13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c9a24b] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            En el Corazón de la Ciudad
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#f4efe4] tracking-tight mb-4">
            Ven a Visitarnos
          </h2>
          <p className="text-[#a9b09c] text-sm sm:text-base leading-relaxed">
            Un oasis gastronómico en pleno centro porteño. De fácil acceso en transporte público
            o con estacionamiento concertado a media cuadra.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-5 bg-[#1b2416] border border-[#f4efe4]/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-[#f4efe4] pb-4 border-b border-[#f4efe4]/10">
                Punto de Encuentro
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-[#12180f] text-[#c9a24b] border border-[#c9a24b]/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#a9b09c]">Dirección</strong>
                    <span className="text-sm text-[#f4efe4] font-medium">Av. Corrientes 1234, C1043 Buenos Aires</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-[#12180f] text-[#c9a24b] border border-[#c9a24b]/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#a9b09c]">Teléfono</strong>
                    <a href="tel:+541140000000" className="text-sm text-[#f4efe4] hover:text-[#c9a24b] transition-colors font-medium">
                      +54 11 4000-0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-[#12180f] text-[#c9a24b] border border-[#c9a24b]/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#a9b09c]">Contacto Directo</strong>
                    <a href="mailto:hola@laenramada.com.ar" className="text-sm text-[#f4efe4] hover:text-[#c9a24b] transition-colors font-medium">
                      hola@laenramada.com.ar
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-[#12180f] text-[#c9a24b] border border-[#c9a24b]/20 shrink-0">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#a9b09c]">Subte & Transporte</strong>
                    <p className="text-xs text-[#f4efe4] mt-0.5">
                      Estación Uruguay (Línea B) · Estación Callao (Línea B) · Colectivos 24, 26, 29, 111, 140
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-8 border-t border-[#f4efe4]/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av+Corrientes+1234+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#12180f] hover:bg-[#c9a24b] text-[#f4efe4] hover:text-[#12180f] text-xs font-semibold border border-[#f4efe4]/10 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
              </a>

              <a
                href="https://wa.me/5491140000000?text=Hola%2C%20quisiera%20consultar%20sobre%20una%20reserva%20en%20La%20Enramada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#12180f] hover:bg-[#25D366] text-[#f4efe4] hover:text-white text-xs font-semibold border border-[#f4efe4]/10 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-7 bg-[#1b2416] border border-[#f4efe4]/10 rounded-3xl overflow-hidden min-h-[380px] relative shadow-2xl">
            <iframe
              title="Mapa de ubicación de La Enramada"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-58.3945%2C-34.6065%2C-58.3855%2C-34.6015&amp;layer=mapnik&amp;marker=-34.6040%2C-58.3900"
              className="w-full h-full min-h-[420px] border-0 filter contrast-125 brightness-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map pin badge overlay */}
            <div className="absolute top-4 left-4 bg-[#12180f]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#c9a24b]/40 text-xs font-medium text-[#f4efe4] flex items-center gap-2 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c9a24b] animate-ping" />
              <span>La Enramada · C1043 Buenos Aires</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
