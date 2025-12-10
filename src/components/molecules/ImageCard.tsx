import { motion } from "framer-motion";
import { Heading, Text, Image } from "../atoms";

interface ImageCardProps {
  image: string;
  title: string;
  description: React.ReactNode;
  imagePosition?: "right" | "left";
}

export const ImageCard: React.FC<ImageCardProps> = ({
  image,
  title,
  description,
  imagePosition = "right",
}) => {
  const isImageRight = imagePosition === "right";

  const ImageWrapper = () => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-xl"
    >
      <Image src={image} alt={title} className="rounded-xl" />
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
        isImageRight ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {imagePosition === "left" && <ImageWrapper />}
      <div className="text-center md:text-left flex flex-col justify-center items-center">
        <Text size="lg" color="secondary" className="leading-relaxed">
          {description}
        </Text>
      </div>
      {imagePosition === "right" && <ImageWrapper />}
    </motion.div>
  );
};
