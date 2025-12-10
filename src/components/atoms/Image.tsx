interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  objectFit = 'cover',
}) => {
  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full ${objectFitClass[objectFit]} ${className}`}
      loading="lazy"
    />
  );
};
