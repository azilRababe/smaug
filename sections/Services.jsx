"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { ServicesItems } from "../constants";
import { TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const Services = ({ id }) => (
  <section className={`${styles.paddings} relative z-10`} id={id}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Our Services" />
        <TitleText title={<>Services We Offer</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {ServicesItems.map((item) => (
            <div
              className="flex-1 flex-col sm:max-w-[250px] min-w-[210px]"
              key={item.title}
            >
              <div
                className={`${styles.flexCenter} w-[70px] h-[70px] rounded-xl bg-[#ff5722] mb-4`}
              >
                <div className="text-white text-3xl flex items-center justify-center">
                  {item.imgUrl}
                </div>
              </div>

              <h2 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
                {item.title}
              </h2>
              <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Services;
