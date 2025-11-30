"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const inputClassName = `
    w-full px-4 py-3 
    rounded-md
    bg-[#5a5a5a] 
    border border-[#707070]
    text-white
    placeholder-[#cfcfcf]
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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* NAME */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Your Name"
        required
        className={`${inputClassName}`}
      />

      {/* EMAIL */}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Your Email"
        required
        className={`${inputClassName}`}
      />

      {/* PHONE */}
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="tel"
        placeholder="Your Phone Number"
        className={`${inputClassName}`}
      />

      {/* MESSAGE */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell us your fitness goals"
        rows={4}
        required
        className={`${inputClassName} resize-none`}
      />

      {/* BUTTON */}
      <button
        disabled={loading || submitted}
        type="submit"
        className="
          mt-2 bg-[#ff5722]
          py-3 rounded-md
          font-semibold text-white
          hover:opacity-90
          transition
        "
      >
        {loading
          ? "Please Wait ..."
          : submitted
            ? "Message Sent!"
            : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
