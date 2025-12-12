import { motion } from "framer-motion";
import { Heading } from "../atoms";
import { ImageCard } from "../molecules";
import benchImage from "../../assets/bench-image.jpg";
import holdLookImage from "../../assets/hold-look-image.jpg";

export const StorySection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };


  const ourStoryParagraphsPartOne = [
    "Ons storie begin nie by ’n toevallige ontmoeting nie – dit begin by ’n belofte.",
    "Een middag, oppad huis toe van werk, het ek (Janita) worship musiek geluister en net stil geword voor die Here. In daardie heilige oomblik het Hy iets onverwags in my hart geplant:",
    "'Jy gaan jou man ontmoet… in jou kerk.'",
    "En die stem het nie stil geword nie. Sondag na Sondag het ek by Maranatha ingestap met ’n vrede wat ek nie kon verklaar nie. Elke keer weer: 'Hier gaan jy hom ontmoet.'",
    "Aan die ander kant, sonder dat ek ooit geweet het, het Reinhard dieselfde belofte ontvang. Ook hy het die Here hoor sê:",
    "'Wag. Jy gaan jou vrou ontmoet in die kerk.'",
    "Na maande van wag en wonder, het God iemand onverwags gebruik — ons skoonsussie het ’n woord ontvang dat sy ons moes voorstel… en toe gebeur dit.",
    "Daardie Sondag het ons mekaar vir die eerste keer in die oë gekyk.",
  ];

  const ourStoryParagraphsPartTwo = [
    "Ons onthou nog die vrede. Die wete. Die sagtheid van ’n God wat nie vergeet nie.",
    "Dáár het twee siele gestaan — en ons het geweet: jy is die een waarvoor ek gebid het.",
    "Van daardie dag af het ons nooit weer opgehou gesels nie. Elke dag saam is ’n getuienis van Sy trou:",
    "Hy doen wat Hy belowe.",
    "Op Sy tyd.",
    "Op Sy manier.",
    "En mooier as wat ons ooit sou droom.",
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-16"
        >
          <motion.div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Ons Verhaal
            </Heading>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto" />
          </motion.div>

          <ImageCard
            image={benchImage}
            title="Hoe Ons Alles Begin Het"
            description={ourStoryParagraphsPartOne.map((para, i) => (
              <p key={i} className="mb-4">
                {para}
              </p>
            ))}
            imagePosition="right"
          />

          <ImageCard
            image={holdLookImage}
            title="Hoe Ons Alles Begin Het"
            description={ourStoryParagraphsPartTwo.map((para, i) => (
              <p key={i} className="mb-4">
                {para}
              </p>
            ))}
            imagePosition="left"
          />
        </motion.div>
      </div>
    </section>
  );
};
