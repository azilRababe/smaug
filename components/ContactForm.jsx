"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "../styles";

const ContactUsSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const inputClassName = `
    w-full p-4
    rounded-xl
    border border-[#6a6a6a]
    bg-transparent
    text-white
    placeholder:text-gray-400
    focus:outline-none focus:border-[#ff5722]
    transition
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phoneNumber, message }),
      });

      if (res.ok) {
        toast.success(
          "Message sent successfully! We will get back to you soon.",
          { duration: 6000 },
        );
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setSubmitted(true);
      } else {
        toast.error("Failed to send message! Please try again.", {
          duration: 6000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message! Please try again.", {
        duration: 6000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`${styles.paddings} relative z-10`} id="contactForm">
      {/* Parent handles the scroll fade */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="flex-1 w-full gradient-05 sm:p-8 p-4 rounded-[32px] border border-[#6a6a6a] backdrop-blur-md flex flex-col justify-center"
        >
          <div className="w-full sm:p-8 p-4 flex flex-col justify-center">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-orange-600 text-center lg:text-left">
              Get in Touch with Smaug-X
            </h4>
            <p className="mt-6 font-normal sm:text-[20px] text-[16px] sm:leading-[28px] leading-[22px] text-white text-center lg:text-left">
              Have questions or want to start your fitness journey? Fill out the
              form and our team will get back to you shortly.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.3, 1)}
          className="flex-1 w-full gradient-05 sm:p-8 p-4 rounded-[32px] border border-[#6a6a6a] backdrop-blur-md flex flex-col justify-center"
        >
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClassName}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClassName}
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={inputClassName}
            />
            <textarea
              rows={4}
              placeholder="Tell us your fitness goals"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={`${inputClassName} resize-none`}
            />
            <button
              type="submit"
              disabled={loading || submitted}
              className="mt-4 bg-orange-600 text-white font-semibold py-3 rounded-xl hover:bg-orange-500 transition-colors"
            >
              {loading
                ? "Please Wait ..."
                : submitted
                  ? "Message Sent!"
                  : "Send Message"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUsSection;
