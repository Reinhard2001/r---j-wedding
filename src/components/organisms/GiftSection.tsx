import { motion } from 'framer-motion';
import { Heading, Text, Image } from '../atoms';

export const GiftSection: React.FC = () => {
  const giftOptions = [
    {
      method: 'Bankoorskakeling',
      details: 'Reinhardus van der Merwe\nRekeningnommer: 123456789\nBank: Standard Bank\nBranch kode: 050123',
    },
    {
      method: 'Mobiele Betaling (Tymeown)',
      details: 'Stuur \'n betalingversoek aan:\nreinhardus.vdm@email.com',
    },
    {
      method: 'Regsreeks Gawes',
      details: 'Ons het ook \"n bruidery-inskrywing by...\nJuweliers: Diamonds & More\nHome Decor: Living Luxe',
    },
  ];

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
            Gawe & Gawes
          </Heading>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Text size="lg" color="secondary" className="mb-8 leading-relaxed">
              Jou teenwoordigheid op ons spesiale dag is die mooiste gawa reeds. Nietemin, vir diegene 
              wat dit graag wil doen, het ons die volgende opsies saamgestel. Enige bydrae sal baie waardeer word!
            </Text>

            <div className="space-y-6">
              {giftOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg border-l-4 border-primary-600"
                >
                  <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">
                    {option.method}
                  </h4>
                  <p className="text-gray-700 whitespace-pre-line text-sm">
                    {option.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=600&h=600&fit=crop"
              alt="Troue gawes"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
