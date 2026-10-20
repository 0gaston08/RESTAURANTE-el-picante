import React, { useState } from 'react';
import { Star, Plus, CheckCircle, Sparkles, X } from 'lucide-react';
import { REVIEWS } from '../data/restaurantData';
import type { Review } from '../types/restaurant';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [occasion, setOccasion] = useState('Cena romántica');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [dishRecommended, setDishRecommended] = useState('Tagliatelle a la Trufa Negra');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      author: author.trim(),
      occasion,
      rating,
      comment: comment.trim(),
      dishRecommended,
      date: 'Recién publicada'
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setIsModalOpen(false);
      setAuthor('');
      setComment('');
    }, 1800);
  };

  return (
    <section id="opiniones" className="py-24 sm:py-32 bg-[#171f13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Overall Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c9a24b] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Testimonios de Comensales
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#f4efe4] tracking-tight">
              Lo que dicen de nosotros
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 bg-[#1b2416] border border-[#f4efe4]/10 px-4 py-2 rounded-full">
              <div className="flex text-[#c9a24b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-serif font-bold text-[#f4efe4] text-sm">4.9 / 5.0</span>
              <span className="text-xs text-[#a9b09c]">(+480 opiniones)</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c9a24b] hover:bg-[#e4c478] text-[#12180f] font-semibold text-xs tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Dejar mi Opinión</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsList.map((review) => (
            <blockquote
              key={review.id}
              className="bg-[#1b2416] border border-[#f4efe4]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#c9a24b]/40 transition-colors duration-300 relative group"
            >
              <div>
                {/* Rating Stars & Occasion */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#c9a24b]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#a9b09c] bg-[#12180f] px-2 py-0.5 rounded-md border border-[#f4efe4]/5">
                    {review.occasion}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-[#f4efe4]/90 text-sm leading-relaxed mb-6 font-sans italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Dish recommendation */}
              <footer className="pt-4 border-t border-[#f4efe4]/5">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold text-sm text-[#f4efe4]">
                    {review.author}
                  </span>
                  <span className="text-[11px] text-[#a9b09c]">{review.date}</span>
                </div>
                {review.dishRecommended && (
                  <p className="text-[11px] text-[#c9a24b] mt-1 font-medium">
                    Recomienda: {review.dishRecommended}
                  </p>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

      {/* New Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#1b2416] border border-[#c9a24b]/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#a9b09c] hover:text-[#f4efe4] bg-[#12180f] border border-[#f4efe4]/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-semibold text-[#f4efe4] mb-2">
              Comparte tu Experiencia
            </h3>
            <p className="text-xs text-[#a9b09c] mb-6">
              Tus comentarios ayudan a nuestro equipo a seguir perfeccionando cada servicio.
            </p>

            {submittedMessage ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-[#c9a24b] mx-auto animate-bounce" />
                <p className="font-serif text-xl text-[#f4efe4]">¡Muchas gracias por tu reseña!</p>
                <p className="text-xs text-[#a9b09c]">Tu opinión ha sido añadida a la comunidad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs text-[#a9b09c] mb-1 font-medium">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Ej. Valeria Bianchi"
                    className="w-full bg-[#12180f] border border-[#f4efe4]/10 rounded-xl px-4 py-2.5 text-sm text-[#f4efe4] focus:outline-none focus:border-[#c9a24b]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#a9b09c] mb-1 font-medium">
                      Ocasión
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full bg-[#12180f] border border-[#f4efe4]/10 rounded-xl px-3 py-2.5 text-sm text-[#f4efe4] focus:outline-none focus:border-[#c9a24b]"
                    >
                      <option>Cena romántica</option>
                      <option>Cena de aniversario</option>
                      <option>Comida de negocios</option>
                      <option>Cena con amigos</option>
                      <option>Degustación y cata</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#a9b09c] mb-1 font-medium">
                      Calificación
                    </label>
                    <div className="flex items-center gap-1.5 h-[42px] px-3 bg-[#12180f] rounded-xl border border-[#f4efe4]/10">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          className="p-1 cursor-pointer"
                        >
                          <Star
                            className={`w-4 h-4 ${
                              star <= rating
                                ? 'text-[#c9a24b] fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#a9b09c] mb-1 font-medium">
                    Plato que Recomiendas
                  </label>
                  <input
                    type="text"
                    value={dishRecommended}
                    onChange={(e) => setDishRecommended(e.target.value)}
                    placeholder="Ej. Tagliatelle a la Trufa Negra"
                    className="w-full bg-[#12180f] border border-[#f4efe4]/10 rounded-xl px-4 py-2.5 text-sm text-[#f4efe4] focus:outline-none focus:border-[#c9a24b]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#a9b09c] mb-1 font-medium">
                    Tu Comentario
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Cuéntanos sobre los sabores, la atmósfera o la atención recibida..."
                    className="w-full bg-[#12180f] border border-[#f4efe4]/10 rounded-xl px-4 py-2.5 text-sm text-[#f4efe4] focus:outline-none focus:border-[#c9a24b]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#c9a24b] hover:bg-[#e4c478] text-[#12180f] font-semibold text-sm transition-all cursor-pointer shadow-lg mt-2"
                >
                  Publicar Opinión
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
