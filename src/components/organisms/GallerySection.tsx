import { motion } from 'framer-motion';
import { Heading, Text } from '../atoms';
import { GalleryGrid } from '../molecules';

export const GallerySection: React.FC = () => {
  const galleryImages = [
    { id: '1', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop', alt: 'Paar Portret' },
    { id: '2', src: 'https://images.unsplash.com/photo-1516680612576-becd6a9102d1?w=400&h=400&fit=crop', alt: 'Ring Foto' },
    { id: '3', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', alt: 'Bruid & Bruidegom' },
    { id: '4', src: 'https://images.unsplash.com/photo-1537633552985-87a033c51ce0?w=400&h=400&fit=crop', alt: 'Troue Bloeme' },
    { id: '5', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop', alt: 'Stel Portret' },
    { id: '6', src: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=400&h=400&fit=crop', alt: 'Tabel Instelling' },
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
            Galerij
          </Heading>
          <Text size="lg" color="secondary" className="max-w-2xl mx-auto">
            Oomblikke wat vir ewig onthou sal word
          </Text>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mt-4" />
        </motion.div>

        <GalleryGrid images={galleryImages} />
      </div>
    </section>
  );
};
