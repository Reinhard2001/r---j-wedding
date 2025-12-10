import { motion } from 'framer-motion';
import { Text } from '../atoms';

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  title,
  description,
  isLast = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 md:gap-8"
    >
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-4 h-4 bg-primary-600 rounded-full border-4 border-primary-100"
        />
        {!isLast && <div className="w-1 h-24 md:h-32 bg-gradient-to-b from-primary-600 to-primary-100" />}
      </div>
      <div className="pb-8 md:pb-12">
        <Text size="sm" weight="bold" className="text-primary-600 uppercase">
          {time}
        </Text>
        <h4 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mt-2 mb-2">
          {title}
        </h4>
        <Text size="base" color="secondary">
          {description}
        </Text>
      </div>
    </motion.div>
  );
};
