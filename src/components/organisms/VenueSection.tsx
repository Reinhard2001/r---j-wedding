import { motion } from "framer-motion";
import { Heading, Text, Button } from "../atoms";
import mapLocation from "../../assets/map-location.png"

export const VenueSection: React.FC = () => {
  const venueName = "La-Bita Events - Wedding Venue";
  const address = "Kenneth St, Boekenhoutkloof, Pretoria, 0030";

  const handleCopyLink = () => {
    const mapLink = `https://www.google.com/maps/place/La-Bita+Events+Wedding+Venue/@-25.6966159,28.0398711,1293m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1ebfd6bfa0cb16d3:0x7c8eb39b9da112f6!2sLa-Bita+Events+Wedding+Venue!8m2!3d-25.6976044!4d28.0405162!16s%2Fg%2F11c46f_bsx!3m5!1s0x1ebfd6bfa0cb16d3:0x7c8eb39b9da112f6!8m2!3d-25.6976044!4d28.0405162!16s%2Fg%2F11c46f_bsx?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoASAFQAw%3D%3D`;
    navigator.clipboard.writeText(mapLink);
    alert("Skakel gekopieer!");
  };

  const handleShareLocation = () => {
    const mapLink = `https://www.google.com/maps/place/La-Bita+Events+Wedding+Venue/@-25.6966159,28.0398711,1293m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1ebfd6bfa0cb16d3:0x7c8eb39b9da112f6!2sLa-Bita+Events+Wedding+Venue!8m2!3d-25.6976044!4d28.0405162!16s%2Fg%2F11c46f_bsx!3m5!1s0x1ebfd6bfa0cb16d3:0x7c8eb39b9da112f6!8m2!3d-25.6976044!4d28.0405162!16s%2Fg%2F11c46f_bsx?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoASAFQAw%3D%3D`;
    window.open(mapLink, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading level={2} className="mb-4">
            Perseel & Tydsip
          </Heading>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary-600">
                {venueName}
              </h3>
              <Text size="lg" color="secondary" className="mb-2">
                📍 {address}
              </Text>
              <Text size="lg" weight="semibold" className="mb-6">
                🕐 Donderdag, 26 Februarie 2026 (14:00 - 23:00)
              </Text>
              <Text
                size="base"
                color="secondary"
                className="leading-relaxed mb-8"
              >
                Sluit by ons aan by La-Bita, waar die berge en natuurskoon
                die perfekte agtergrond bied vir ons dag vol liefde en vreugde.
              </Text>
            </div>

            <div className="flex gap-4 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={handleCopyLink} variant="outline">
                  📋 Kopieër Link
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={handleShareLocation}>📤 Maak Oop</Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden h-96 md:h-full"
          >
            <img src={mapLocation} alt="La-bita-img-location" className="rounded-xl"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
