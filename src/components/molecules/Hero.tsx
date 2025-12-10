import { motion } from "framer-motion";
import { Heading, Text } from "../atoms";
import { useEffect, useState } from "react";

type HeroProps = {
  title: string;
  subtitle?: string;
  date: string;
  backgroundImage?: string;
  guests?: any[],
};

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  date,
  backgroundImage,
  guests,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(date).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-screen bg-cover bg-center flex "
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(135deg, #fdf8f3 0%, #f4b8a3 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-center container-custom"
      >
        <div className="pt-24 items-start justify-start w-full gap-y-2">
          <p className="text-sm font-serif text-[#d3cdbf] drop-shadow-md font-light">
            Uitnodiging Aan
          </p>
          {guests && guests.length > 0 && (
            <p className="text-xl font-serif text-[#a6c8a2] drop-shadow-md mb-32  font-light">
              {guests.length === 1
                ? guests[0]
                : guests.slice(0, -1).join(', ') + ' & ' + guests[guests.length - 1]}
            </p>
          )}
        </div>
        <Heading
          level={1}
          variant="gradient"
          className="mb-4 text-white drop-shadow-lg"
        >
          {title}
        </Heading>
        {subtitle && (
          <Text
            size="lg"
            color="white"
            className="mb-6 drop-shadow-md font-light"
          >
            {subtitle}
          </Text>
        )}
        <p className="text-2xl md:text-4xl font-serif text-white drop-shadow-md mb-8">
          {date}
        </p>
        <div className="text-2xl md:text-4xl font-serif text-[#a6c8a2] drop-shadow-md mb-8 flex justify-center gap-4">
          <div>{timeLeft.days}d</div>
          <div>{timeLeft.hours}h</div>
          <div>{timeLeft.minutes}m</div>
          <div>{timeLeft.seconds}s</div>
        </div>
      </motion.div>
    </motion.div>
  );
};
