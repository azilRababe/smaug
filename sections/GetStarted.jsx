"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TypingText, TitleText } from "../components";
import { startingSteps } from "../constants";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center gap-12`}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <TypingText title="| Schedule Your First Session" />
        <TitleText title="Getting started in just a few steps" />
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="w-full flex flex-wrap justify-center gap-10"
      >
        {startingSteps.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col items-center md:items-start bg-[#1e1e1e] rounded-3xl p-6 max-w-[280px] shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center w-[70px] h-[70px] rounded-2xl bg-gradient-to-r from-[#ff5722] to-[#ff8a50] mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
              0{index + 1}
            </div>
            <p className="text-center md:text-left text-[17px] text-[#ccc] leading-7 group-hover:text-white transition-colors duration-300">
              {feature}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
