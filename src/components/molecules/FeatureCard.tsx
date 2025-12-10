import { motion } from 'framer-motion';
import { Heading, Text, Button } from '../atoms';

interface FeatureCardProps {
  icon?: string;
  title: string;
  description: string;
  cta?: {
    text: string;
    onClick: () => void;
  };
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  cta,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ translateY: -5 }}
      className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
    >
      {icon && (
        <div className="text-4xl mb-4">{icon}</div>
      )}
      <Heading level={3} className="mb-3">
        {title}
      </Heading>
      <Text size="base" color="secondary" className="mb-6">
        {description}
      </Text>
      {cta && (
        <Button variant="outline" size="sm" onClick={cta.onClick}>
          {cta.text}
        </Button>
      )}
    </motion.div>
  );
};
