import React, { useMemo } from 'react';
import { Clock, MapPin, Phone, Sparkles } from 'lucide-react';
import { SCHEDULE } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  // Calculate if restaurant is currently open in Argentina time
  const currentStatus = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const timeInDecimal = hour + minutes / 60;

    if (day === 1) {
      return { isOpen: false, text: 'Cerrado por descanso (Lunes)', badgeColor: 'bg-red-950/80 text-red-300 border-red-500/30' };
    }

    if (day === 0) { // Sunday
      const isOpen = timeInDecimal >= 12.5 && timeInDecimal < 17.5;
      return {
        isOpen,
        text: isOpen ? 'Abierto ahora (Almuerzo dominical)' : 'Abre hoy a las 12:30 h',
        badgeColor: isOpen ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30' : 'bg-amber-950/80 text-amber-300 border-amber-500/30'
      };
    }

    // Tuesday to Saturday
    const isLunch = timeInDecimal >= 13 && timeInDecimal < 16.5;
    const isDinner = timeInDecimal >= 20 && timeInDecimal < 24;
    const isOpen = isLunch || isDinner;

    return {
      isOpen,
      text: isOpen
        ? (isLunch ? 'Abierto ahora (Turno Almuerzo)' : 'Abierto ahora (Turno Cena)')
        : (timeInDecimal < 13 ? 'Abre hoy a las 13:00 h' : (timeInDecimal < 20 ? 'Abre esta noche a las 20:00 h' : 'Cerrado hasta mañana 13:00 h')),
      badgeColor: isOpen ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30' : 'bg-amber-950/80 text-amber-300 border-amber-500/30'
    };
  }, []);

  const todayIndex = new Date().getDay(); // 0: Dom, 1: Lun, 2: Mar...

  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-[#12180f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Story & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c9a24b] font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Nuestra Filosofía
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#f4efe4] tracking-tight leading-tight">
                Una casa donde la cocina es un oficio de paciencia
              </h2>
            </div>

            <div className="space-y-4 text-[#a9b09c] text-base leading-relaxed">
              <p>
                Desde 1998 mantenemos inmutable el mismo compromiso: venerar el producto. 
                Construimos alianzas estrechas con más de cuarenta pequeños productores, agricultores 
                y bodegas boutique que comparten nuestro afán por la autenticidad.
              </p>
              <p>
                Nuestra carta no responde a modas efímeras; responde a lo que la tierra, 
                el clima y las estaciones nos brindan en cada cosecha. Cada salsa reducida durante horas 
                y cada masa estirada al amanecer reflejan el cariño con el que queremos recibirte en la mesa.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#f4efe4]/10">
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#c9a24b] block">25+</span>
                <span className="text-xs text-[#a9b09c] uppercase tracking-wider block">Años de Tradición</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#c9a24b] block">40+</span>
                <span className="text-xs text-[#a9b09c] uppercase tracking-wider block">Productores Locales</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#c9a24b] block">1★</span>
                <span className="text-xs text-[#a9b09c] uppercase tracking-wider block">Reconocimiento</span>
              </div>
            </div>
          </div>

          {/* Schedule & Live Status Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#1b2416] border border-[#c9a24b]/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
              {/* Live Badge */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#f4efe4]/10">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#c9a24b]" />
                  <h3 className="font-serif text-2xl font-semibold text-[#f4efe4]">Horarios</h3>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${currentStatus.badgeColor}`}>
                  <span className="w-2 h-2 rounded-full bg-current animate-ping" />
                  {currentStatus.text}
                </span>
              </div>

              {/* Schedule List */}
              <ul className="space-y-4 mb-8">
                {SCHEDULE.map((item, idx) => {
                  // Determine if this row is today
                  const isCurrentDay = (todayIndex === 1 && idx === 0) ||
                    (todayIndex >= 2 && todayIndex <= 4 && idx === 1) ||
                    ((todayIndex === 5 || todayIndex === 6) && idx === 2) ||
                    (todayIndex === 0 && idx === 3);

                  return (
                    <li
                      key={item.days}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-[#f4efe4]/5 text-sm gap-1 ${
                        isCurrentDay ? 'bg-[#c9a24b]/10 -mx-3 px-3 rounded-lg font-medium' : ''
                      }`}
                    >
                      <span className={`text-[#f4efe4] ${isCurrentDay ? 'text-[#c9a24b] font-semibold' : ''}`}>
                        {item.days} {isCurrentDay && <span className="text-[10px] ml-1 bg-[#c9a24b] text-[#12180f] px-1.5 py-0.5 rounded-full font-bold">Hoy</span>}
                      </span>
                      <span className={item.closed ? 'text-[#a9b09c]/60 italic' : 'text-[#a9b09c]'}>
                        {item.hours}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Location Note */}
              <div className="pt-2 text-xs text-[#a9b09c] space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c9a24b] shrink-0 mt-0.5" />
                  <span>Av. Corrientes 1234, C1043 Buenos Aires · A pasos de calle peatonal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#c9a24b] shrink-0" />
                  <span>Reservas telefónicas: +54 11 4000-0000</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
