import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle2, Sparkles, MessageCircle, X } from 'lucide-react';
import type { ReservationFormData, ConfirmedReservation } from '../types/restaurant';

interface ReservationSectionProps {
  initialDish?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ initialDish }) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    nombre: '',
    email: '',
    telefono: '',
    fecha: todayStr,
    hora: '21:00',
    personas: '2',
    zona: 'salon',
    notas: initialDish ? `Interesado especialmente en probar: ${initialDish}` : '',
  });

  const [confirmedReservation, setConfirmedReservation] = useState<ConfirmedReservation | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const timeSlots = [
    { label: 'Almuerzo 13:00', value: '13:00' },
    { label: 'Almuerzo 13:30', value: '13:30' },
    { label: 'Almuerzo 14:00', value: '14:00' },
    { label: 'Cena 20:00', value: '20:00' },
    { label: 'Cena 20:30', value: '20:30' },
    { label: 'Cena 21:00', value: '21:00' },
    { label: 'Cena 21:30', value: '21:30' },
    { label: 'Cena 22:00', value: '22:00' },
  ];

  const zones = [
    { id: 'salon' as const, label: 'Salón Principal', desc: 'Ambiente íntimo con velas y cava vista' },
    { id: 'patio' as const, label: 'Patio & Pérgola', desc: 'Espacio al aire libre con vegetación autóctona' },
    { id: 'barra' as const, label: 'Barra del Chef', desc: 'Vista directa al emplatado y cocina viva' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.nombre.trim() || !formData.email.trim() || !formData.fecha) {
      setErrorMessage('Por favor completa todos los datos obligatorios para confirmar.');
      return;
    }

    const randomCode = `ENR-${Math.floor(1000 + Math.random() * 9000)}`;
    const confirmed: ConfirmedReservation = {
      ...formData,
      code: randomCode,
      createdAt: new Date().toLocaleDateString('es-AR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setConfirmedReservation(confirmed);
  };

  const handleReset = () => {
    setConfirmedReservation(null);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      fecha: todayStr,
      hora: '21:00',
      personas: '2',
      zona: 'salon',
      notas: '',
    });
  };

  return (
    <section id="reserva" className="py-24 sm:py-32 bg-[#12180f] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1b2416] via-[#12180f] to-[#12180f]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c9a24b] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Experiencia Gastronómica
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#f4efe4] tracking-tight mb-4">
            Reserva tu Mesa
          </h2>
          <p className="text-[#a9b09c] text-sm sm:text-base leading-relaxed">
            Guardamos tu lugar para que disfrutes de una velada distendida y sin apuros.
            Confirmación inmediata y asistencia personalizada.
          </p>
        </div>

        {/* Reservation Card / Form */}
        <div className="bg-[#1b2416] border border-[#c9a24b]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/30 text-red-200 text-xs">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Comensales y Fecha */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a9b09c] mb-2 font-medium">
                  Comensales
                </label>
                <div className="relative">
                  <select
                    value={formData.personas}
                    onChange={(e) => setFormData({ ...formData, personas: e.target.value })}
                    className="w-full bg-[#12180f] border border-[#f4efe4]/10 rounded-xl px-4 py-3 text-sm text-[#f4efe4] focus:outline-none focus:border-[#c9a24b] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="1">1 Persona (Barra o Mesa individual)</option>
                    <option value="2">2 Personas (Mesa íntima)</option>
                    <option value="3">3 Personas</option>
                    <option value="4">4 Personas</option>
                    <option value="5">5 Personas</option>
                    <option value="6">6 Personas</option>
                    <option value="8+">8 o más personas (Mesa de grupo)</option>
                  </select>
                  <Users className="w-4 h-4 text-[#c9a24b] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a9b09c] mb-2 font-medium">
                  Fecha
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={formData.fecha}
                    onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                    className="w-full bg-[#12180f] border border-[#f4efe4]/10 rounded-xl px-4 py-3 text-sm text-[#f4efe4] focus:outline-none focus:border-[#c9a24b] transition-colors [color-scheme:dark] cursor-pointer"
                  />
                  <Calendar className="w-4 h-4 text-[#c9a24b] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a9b09c] mb-2 font-medium">
                  Horario de Entrada
                </label>
                <div className="relative">
                  <select
                    value={formData.hora}
                    onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                    className="w-full bg-[#12180f] border border-[#f4efe4]/10 rounded-xl px-4 py-3 text-sm text-[#f4efe4] focus:outline-none focus:border-[#c9a24b] transition-colors appearance-none cursor-pointer"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                  <Clock className="w-4 h-4 text-[#c9a24b] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Step 2: Selección de Zona */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a9b09c] mb-2.5 font-medium">
                Preferencia de Espacio
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {zones.map((zone) => {
                  const isSelected = formData.zona === zone.id;
                  return (
                    <button
                      type="button"
                      key={zone.id}
                      onClick={() => setFormData({ ...formData, zona: zone.id })}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#c9a24b]/15 border-[#c9a24b] text-[#f4efe4]'
                          : 'bg-[#12180f] border-[#f4efe4]/10 text-[#a9b09c] hover:border-[#f4efe4]/25'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-[#f4efe4]">
                          {zone.label}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#c9a24b]" />
                        )}
                      </div>
                      <p className="text-[11px] leading-snug opacity-80">
                        {zone.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Contacto */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a9b09c] mb-2 font-medium">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre y apellido"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full bg-[#12180f] border border-[#f4efe4]/10 rounded-xl px-4 py-3 text-sm text-[#f4efe4] focus:outline-none focus:border-[#c9a24b] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a9b09c] mb-2 font-medium">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#12180f] border border-[#f4efe4]/10 rounded-xl px-4 py-3 text-sm text-[#f4efe4] focus:outline-none focus:border-[#c9a24b] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a9b09c] mb-2 font-medium">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+54 11 ..."
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full bg-[#12180f] border border-[#f4efe4]/10 rounded-xl px-4 py-3 text-sm text-[#f4efe4] focus:outline-none focus:border-[#c9a24b] transition-colors"
                />
              </div>
            </div>

            {/* Step 4: Notas / Peticiones Especiales */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a9b09c] mb-2 font-medium">
                Peticiones Especiales, Alergias o Maridaje
              </label>
              <textarea
                rows={2}
                placeholder="Indícanos si celebras algún aniversario, preferencias dietarias (celiaquía, vegetariano) o requerimientos especiales..."
                value={formData.notas}
                onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                className="w-full bg-[#12180f] border border-[#f4efe4]/10 rounded-xl px-4 py-2.5 text-sm text-[#f4efe4] focus:outline-none focus:border-[#c9a24b] transition-colors"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#a9b09c]">
                * Las reservas se conservan con 15 minutos de cortesía tras la hora pactada.
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#c9a24b] hover:bg-[#e4c478] text-[#12180f] font-bold text-base transition-all duration-300 shadow-xl shadow-[#c9a24b]/20 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Confirmar Reserva Online
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmedReservation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#1b2416] border border-[#c9a24b] rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-2 rounded-full text-[#a9b09c] hover:text-[#f4efe4] bg-[#12180f] border border-[#f4efe4]/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#c9a24b]/20 border border-[#c9a24b] text-[#c9a24b] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#c9a24b] font-semibold">
              Reserva Confirmada
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#f4efe4] mt-1 mb-2">
              ¡Te esperamos, {confirmedReservation.nombre}!
            </h3>
            <p className="text-xs text-[#a9b09c] mb-6">
              Hemos enviado los detalles y el código de mesa a tu correo: <strong className="text-[#f4efe4]">{confirmedReservation.email}</strong>
            </p>

            {/* Voucher Box */}
            <div className="p-4 rounded-2xl bg-[#12180f] border border-[#c9a24b]/30 text-left space-y-2 mb-6">
              <div className="flex justify-between items-center pb-2 border-b border-[#f4efe4]/10">
                <span className="text-xs text-[#a9b09c]">Código de Reserva:</span>
                <span className="font-mono text-sm font-bold text-[#c9a24b]">{confirmedReservation.code}</span>
              </div>
              <div className="flex justify-between text-xs text-[#f4efe4]">
                <span className="text-[#a9b09c]">Fecha y Turno:</span>
                <span>{confirmedReservation.fecha} · {confirmedReservation.hora} h</span>
              </div>
              <div className="flex justify-between text-xs text-[#f4efe4]">
                <span className="text-[#a9b09c]">Comensales:</span>
                <span>{confirmedReservation.personas} comensales</span>
              </div>
              <div className="flex justify-between text-xs text-[#f4efe4]">
                <span className="text-[#a9b09c]">Ubicación:</span>
                <span className="capitalize">{confirmedReservation.zona === 'salon' ? 'Salón Principal' : (confirmedReservation.zona === 'patio' ? 'Patio & Pérgola' : 'Barra del Chef')}</span>
              </div>
              {confirmedReservation.notas && (
                <div className="pt-1 text-[11px] text-[#a9b09c] border-t border-[#f4efe4]/5">
                  Nota: "{confirmedReservation.notas}"
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/5491140000000?text=${encodeURIComponent(`Hola La Enramada, reservé la mesa ${confirmedReservation.code} para el ${confirmedReservation.fecha} a las ${confirmedReservation.hora}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#12180f] border border-[#c9a24b]/40 text-[#f4efe4] hover:bg-[#c9a24b] hover:text-[#12180f] text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Enviar por WhatsApp</span>
              </a>
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-full bg-[#c9a24b] text-[#12180f] text-xs font-bold hover:bg-[#e4c478] transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
