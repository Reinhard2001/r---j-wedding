import { motion } from 'framer-motion';
import { Image } from '../atoms';

interface GalleryGridProps {
  images: Array<{
    id: string;
    src: string;
    alt: string;
  }>;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-xl h-64 md:h-72 cursor-pointer group"
        >
          <Image src={image.src} alt={image.alt} />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </motion.div>
      ))}
    </div>
  );
};
