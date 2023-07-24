import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Title from "@/shared/Title";
import ClassesCard from "./ClassesCard";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim facere illo, voluptatem aspernatur saepe maiores deserunt adipisci dolore ad? Quos.",
    image: image1,
  },
  {
    name: "Fitness Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim facere illo, voluptatem aspernatur saepe maiores deserunt adipisci dolore ad? Quos.",
    image: image2,
  },
  {
    name: "Adventure Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim facere illo, voluptatem aspernatur saepe maiores deserunt adipisci dolore ad? Quos.",
    image: image3,
  },
  {
    name: "Ab Core Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim facere illo, voluptatem aspernatur saepe maiores deserunt adipisci dolore ad? Quos.",
    image: image4,
  },
  {
    name: "Yoga Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim facere illo, voluptatem aspernatur saepe maiores deserunt adipisci dolore ad? Quos.",
    image: image5,
  },
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim facere illo, voluptatem aspernatur saepe maiores deserunt adipisci dolore ad? Quos.",
    image: image6,
  },
];

const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Title> OUR CLASSES</Title>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              unde id nihil, similique, fugit quos accusamus alias et natus hic
              molestias obcaecati. Quibusdam ipsa fuga labore. Earum, facere
              fuga ducimus cum est tempore in saepe reprehenderit perspiciatis
              ea quibusdam culpa!\
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, idx) => (
              <ClassesCard
                key={idx}
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
