import { motion } from "framer-motion";
import { Heading, Image } from "../atoms";
import accomodationImage from "../../assets/accommodation-image.jpg";

export const AccomdationSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading level={2} className="mb-4">
            Akkommodasie
          </Heading>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto" />
        </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ translateY: -5 }}
            className="relative w-full h-[550px] md:h-full rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={accomodationImage}
              alt="Akkommodasie"
              className="w-full h-full"
            />
          </motion.div>
      </div>
    </section>
  );
};
