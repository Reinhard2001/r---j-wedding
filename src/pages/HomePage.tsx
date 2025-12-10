import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Hero } from '../components/molecules';
import {
  StorySection,
  ScheduleSection,
  VenueSection,
  DressCodeSection,
  InfoSection,
  ContactSection,
  Footer,
} from '../components/organisms';
import handsImage from '../assets/hands-image.jpg';

export const HomePage: React.FC = () => {
  const [guests, setGuests] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guestParam = params.get('guest') || '';
    const guestList = guestParam
      .split(',')
      .map((g) => g.trim())
      .filter((g) => g.length > 0);
    setGuests(guestList);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero
        guests={guests} // pass array of guests
        title="Reinhard & Janita"
        subtitle="Twee Siele, Een Belofte!"
        date="26 Februarie 2026"
        backgroundImage={handsImage}
      />

      <section id="story" className="scroll-mt-20">
        <StorySection />
      </section>

      <section id="venue" className="scroll-mt-20">
        <VenueSection />
      </section>

      <section id="schedule" className="scroll-mt-20">
        <ScheduleSection />
      </section>

      <section id="dress-code" className="scroll-mt-20">
        <DressCodeSection />
      </section>

      <section id="info" className="scroll-mt-20">
        <InfoSection />
      </section>

      <section id="contact" className="scroll-mt-20">
        <ContactSection />
      </section>

      <Footer />
    </motion.main>
  );
};
