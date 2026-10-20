import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { DishModal } from './components/DishModal';
import type { Dish } from './types/restaurant';

export function App() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [initialReservationDish, setInitialReservationDish] = useState<string | undefined>(undefined);

  const scrollToReservation = (dishName?: string) => {
    if (dishName) {
      setInitialReservationDish(dishName);
    }
    const el = document.getElementById('reserva');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#12180f] text-[#f4efe4] font-sans selection:bg-[#c9a24b] selection:text-[#12180f]">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenReservation={() => scrollToReservation()} />

      <main>
        {/* Hero Section */}
        <Hero onOpenReservation={() => scrollToReservation()} />

        {/* Menu & Pairing Section */}
        <MenuSection
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenReservation={() => scrollToReservation()}
        />

        {/* Gallery Section with Lightbox */}
        <GallerySection />

        {/* Philosophy & Live Schedule Section */}
        <AboutSection />

        {/* Guest Reviews Section */}
        <ReviewsSection />

        {/* Online Reservation System */}
        <ReservationSection initialDish={initialReservationDish} />

        {/* Location & Map */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dish Pairing & Detail Modal */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserve={(dishName) => scrollToReservation(dishName)}
      />
    </div>
  );
}

export default App;
