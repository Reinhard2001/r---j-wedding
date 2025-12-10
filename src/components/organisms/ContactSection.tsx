import { motion } from "framer-motion";
import { Heading, Text, Button } from "../atoms";

export const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: "📱",
      method: "WhatsApp",
      value: [
        {
          label: "Reinhard: +27 67 688 9558",
          action: () => window.open("https://wa.me/27676889558"),
        },
        {
          label: "Janita: +27 60 579 4156",
          action: () => window.open("https://wa.me/27605794156"),
        },
      ],
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
            Kontak Ons
          </Heading>
          <Text size="lg" color="secondary" className="max-w-2xl mx-auto">
            Het jy vrae? Ons is net 'n oproep of boodskap weg!
          </Text>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {contactMethods.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{contact.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-2 text-gray-900">
                {contact.method}
              </h3>
              {contact.value.map((val) => (
                <div>
                  <Button variant="outline" size="sm" className="mb-2" onClick={val.action}>
                    {val.label}
                  </Button>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
