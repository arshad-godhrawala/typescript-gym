import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Title from "@/shared/Title";
import BenefitsCard from "./BenefitsCard";
import Button from "@/shared/Button";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilites",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem omnis qui culpa tempora nostrum officia unde dolorem nobis nulla.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem omnis qui culpa tempora nostrum officia unde dolorem nobis nulla.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem omnis qui culpa tempora nostrum officia unde dolorem nobis nulla.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto w-5/6 min-h-full py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER  */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Title>MORE THAN JUST A GAME.</Title>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType, idx) => (
            <BenefitsCard
              key={idx}
              icon={benefit.icon}
              title={benefit.title}
              desc={benefit.desc}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION  */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS  */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphics"
          />

          {/* DESCRIPTION  */}
          <div>
            {/* TITLE  */}
            <div className="relative">
              <div className="before:absolute before:-top-10 before:-left-40 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Title>
                    MILLIONS OF HAPPY MEMEBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </Title>
                </motion.div>
              </div>
            </div>

            {/* PARAGRAPH  */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                qui odio cumque unde nobis libero nihil harum. Dolor est in sit
                doloribus quia et, ratione, repellendus quis nisi rem maiores!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores facere optio sequi, nostrum ut aliquam necessitatibus
                placeat aliquid a minus, modi quaerat molestias fugit nihil
                magni nulla nisi mollitia voluptate similique amet laborum
                accusantium cum. Et nulla ratione, enim alias dignissimos sint
                natus asperiores? Quisquam dicta optio nisi laboriosam culpa?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                iste ea obcaecati praesentium debitis pariatur dolor veniam
                quisquam sunt! Minima amet assumenda possimus vero eum debitis
                illum voluptates quia repellat, cum corrupti voluptatibus
                quaerat cumque mollitia corporis tenetur tempora adipisci
                nesciunt fuga nam dolor consectetur ut itaque! Suscipit, error
                fuga.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                voluptatum ex cumque necessitatibus eos hic, eligendi saepe nemo
                nisi illo eveniet incidunt labore dolorem, alias aut aspernatur
                adipisci animi nam obcaecati consequatur. Vel minima non enim
                fuga error ratione maiores? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Labore hic quasi dolor deserunt,
                quos facere nam odit laudantium tempora! Doloribus, magni
                quibusdam? Dolor temporibus facilis ad laboriosam placeat quam,
                nostrum recusandae doloribus accusamus magni voluptatibus rerum
                quod quo asperiores eum architecto perferendis expedita laborum
                autem eius beatae hic officiis illo! Omnis ut soluta temporibus,
                dolor vero necessitatibus iure eveniet nostrum quos cumque
                doloremque distinctio dolorem ducimus alias? Dolores, omnis.
                Inventore molestias eum ad! Asperiores cumque at culpa et earum,
                ipsam perferendis modi consectetur, consequatur molestias
                debitis sint, fugiat nisi autem quo minima harum accusantium
                pariatur reiciendis eveniet molestiae dolorum optio.
              </p>
            </motion.div>

            {/* BUTTON  */}
            <div className="relative mt-6">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <Button setSelectedPage={setSelectedPage}>Join Now</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
