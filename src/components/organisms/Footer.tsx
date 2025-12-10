import { motion } from 'framer-motion';
import { Heading, Text } from '../atoms';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navigasie',
      links: [
        { label: 'Tuis', href: '#' },
        { label: 'Ons Verhaal', href: '#story' },
        { label: 'Venue', href: '#venue' },
        { label: 'Program', href: '#schedule' },
      ],
    },
    {
      title: 'Inligting',
      links: [
        { label: 'Kontak', href: '#contact' },
      ],
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 md:py-16"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Heading level={3} className="mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                R & J
              </span>
            </Heading>
            <Text size="sm" color="white" className="opacity-75">
              'n Liefdesverhaal vir 'n leeftyd
            </Text>
          </motion.div>

          {/* Navigation Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
            >
              <h4 className="font-serif font-bold text-lg mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors underline-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <Text size="sm" color="white" className="opacity-75">
            © {currentYear} Reinhard & Janita. Gemaak met liefde en sorg.
          </Text>
          <div className="mt-4 flex justify-center gap-4">
            <span className="text-2xl">💕</span>
            <span className="text-2xl">💍</span>
            <span className="text-2xl">💕</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
