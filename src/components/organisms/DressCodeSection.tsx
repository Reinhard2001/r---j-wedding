import { motion } from 'framer-motion';
import { Heading, Text, Image } from '../atoms';
import handsImageTwo from "../../assets/hands-image-2.jpg"

export const DressCodeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading level={2} className="mb-4">
            Kleredrag
          </Heading>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">
              Formeel
            </h3>
            <Text size="lg" color="secondary" className="leading-relaxed mb-4">
              Ons versoek om formeel aan te tree. Dit is 'n spesiale aand en ons wil dit mooi maak.
            </Text>
            <ul className="space-y-2">
              <Text size="base">👔 Vir Mans: Formele Pak, das is nie nodig nie.</Text>
              <Text size="base">👗 Vir Vrouens: Formele Aand klere.</Text>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl h-96">
              <Image
                src={handsImageTwo}
                alt="Formele kledingkode"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
