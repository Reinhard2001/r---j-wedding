import { motion } from 'framer-motion';
import { Heading } from '../atoms';
import { FeatureCard } from '../molecules';

export const InfoSection: React.FC = () => {
  const infoItems = [
    {
      icon: '👶',
      title: 'Kinders Welkom!',
      description: 'Alle kinders is baie welkom op ons spesiale dag.',
    },
    {
      icon: '➕',
      title: 'Plus-Een Welkom',
      description: 'Jy kan \'n metgesel bring. Asseblief RSVP teen einde Januarie.',
    },
    {
      icon: '🎉',
      title: 'Addisionele Versoeke',
      description: 'Het jy enige addisionele versoeke? Laat asseblief ASAP!',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading level={2} className="mb-4">
            Addisionele Inligting
          </Heading>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoItems.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
