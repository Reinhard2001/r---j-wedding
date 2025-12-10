import { motion } from 'framer-motion';
import { RSVPForm } from '../components/organisms/RSVPForm';
import { Footer } from '../components/organisms';

export const RSVPPage: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20"
    >
      <div className="min-h-screen bg-gradient-to-br from-white to-primary-50">
        <RSVPForm />
      </div>
      <Footer />
    </motion.main>
  );
};
