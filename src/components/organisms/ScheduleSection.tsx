import { motion } from "framer-motion";
import { Heading } from "../atoms";
import { TimelineItem } from "../molecules";

export const ScheduleSection: React.FC = () => {
  const scheduleItems = [
    {
      time: "14:00",
      title: "Gaste Aankoms",
      description:
        "Almal kom na die venue. Groet en geniet die geselskap.",
    },
    {
      time: "15:00 - 15:45",
      title: "Seremonie",
      description: "Die groot oomblik! Reinhard en Janita beloof hulle lewe.",
    },
    {
      time: "15:50 - 17:30",
      title: "Cocktail hour + Snacks + Foto's",
      description:
        "Geniet ligte happies en drankies terwyl foto's geneem word en gaste saam kuier.",
    },
    {
      time: "17:45 - 19:30",
      title: "Reception",
      description:
        "Tyd vir speeches, gebed en heerlike ete saam met familie en vriende.",
    },
    {
      time: "19:30",
      title: "Eerste Dans + Pa & Dogter Dans",
      description:
        "Reinhard en Janita se eerste dans as man en vrou, gevolg deur die pa & dogter dans.",
    },
    {
      time: "20:00",
      title: "Cake cutting & dessert",
      description:
        "Sny van koek en geniet die nagereg saam ons mense.",
    },
    {
      time: "20:30 - 23:00",
      title: "PARTY!!!",
      description:
        "Dans die aand weg! Musiek, lag en viering van liefde en vriendskap.",
    },
    {
      time: "23:00+",
      title: "Couple send off",
      description:
        "Wens die paartjie geluk terwyl hulle vertrek vir hul nuwe avontuur saam.",
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
            Die Program
          </Heading>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {scheduleItems.map((item, index) => (
            <TimelineItem
              key={index}
              time={item.time}
              title={item.title}
              description={item.description}
              isLast={index === scheduleItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
