import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Tuis', href: '/' },
    { name: 'Ons Verhaal', href: '/#story' },
    { name: 'Venue', href: '/#venue' },
    { name: 'Program', href: '/#schedule' },
    { name: 'Galery', href: '/#gallery' },
    { name: 'RSVP', href: '/rsvp' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-800/40 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4 md:py-6">
        <Link to="/" className="text-2xl md:text-3xl font-serif font-bold gradient-text">
          R & J
        </Link>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-200 hover:text-primary-600 transition-colors underline-accent"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
