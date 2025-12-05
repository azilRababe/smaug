"use client";

import { Footer, Navbar } from "../../components";
import ContactForm from "../../components/ContactForm";
import { motion } from "framer-motion";
import styles from "../../styles";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";
import Image from "next/image";
import Faq from "../../components/Faq";
import Services from "../../sections/Services";
const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />

    <div className="relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        {/* Image on the left */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="relative flex-[0.5] flex justify-center items-center"
        >
          <Image
            width={5472}
            height={3648}
            src="/outdoorTraining.jpg"
            alt="training"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-fit rounded-[40px]"
          />
        </motion.div>

        {/* Text on the right, taking more space */}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.7] flex flex-col justify-center gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />

          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-orange-600">
              Train Anywhere, Anytime
            </h4>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            Our programs are designed to fit seamlessly into your life. Whether
            you prefer training at home, in your community gym, or outdoors,
            Smaug-X gives you the flexibility to train on your terms.
            <br />
            With a structured approach, real accountability, and a system built
            around your goals, Smaug-X empowers you to evolve into your
            strongest, most confident self.
          </p>
        </motion.div>
      </motion.div>
      <div className="gradient-04 z-0" />
      <Services id="services" />
    </div>

    <div className="relative">
      <Faq />
      <div className="gradient-04 z-0" />
    </div>

    <Footer />
  </div>
);

export default Page;
