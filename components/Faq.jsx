import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

const questions = [
  {
    q: "What results can I expect and how long will it take?",
    a: "Most clients notice progress within a few weeks. Visible changes depend on consistency, nutrition, and training intensity.",
  },
  {
    q: "Do I need prior experience before starting?",
    a: "No experience is required. All programs are designed for beginners and advanced clients.",
  },
  {
    q: "Do you offer personalized coaching?",
    a: "Yes. Each client receives a customized training and nutrition plan.",
  },
  {
    q: "Can I train from home?",
    a: "Absolutely. You can choose home-based workouts or full gym sessions.",
  },
  {
    q: "How do progress check-ins work?",
    a: "You'll submit weekly updates including measurements, photos, and feedback.",
  },
  {
    q: "Do you work with injuries?",
    a: "Plans can be adapted for common injuries. For serious conditions, medical clearance is recommended.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full max-w-4xl mx-auto mt-24 mb-24 px-4"
    >
      <h2 className="text-center text-white font-bold text-4xl mb-12">FAQ</h2>

      <div className="flex flex-col gap-4">
        {questions.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeIn("up", "tween", 0.1 * i, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#1a1a1a] border border-[#6a6a6a] rounded-2xl p-6 cursor-pointer"
            onClick={() => toggle(i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-white font-semibold text-lg">{item.q}</h3>
              <span className="text-orange-500 text-2xl">
                {openIndex === i ? "−" : "+"}
              </span>
            </div>

            {openIndex === i && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-gray-300 mt-4 leading-relaxed"
              >
                {item.a}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
