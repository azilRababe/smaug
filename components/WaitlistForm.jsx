"use client";

import { useState } from "react";
// import { db, analytics } from "../lib/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { logEvent } from "firebase/analytics";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!email.includes("@")) {
    //   setMessage("Please enter a valid email.");
    //   return;
    // }

    // try {
    //   await addDoc(collection(db, "waitlist"), {
    //     email: email.toLowerCase(),
    //     joinedAt: serverTimestamp(),
    //   });

    //   if (analytics) {
    //     logEvent(analytics, "waitlist_joined", { email });
    //   }

    //   setMessage("🎉 You’ve been added to the waitlist!");
    //   setEmail("");
    // } catch (err) {
    //   console.error("Error adding to waitlist:", err);
    //   setMessage("Something went wrong. Please try again.");
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 flex flex-row w-full">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="p-2 w-full bg-transparent text-white placeholder:text-white focus:outline-none underline-offset-2 focus:border-[#ff5722] text-[16px] md:text-[18px] tracking-wide "
      />
      <button
        type="submit"
        className="text-white p-2 rounded w-full bg-[#ff5722] hover:bg-[#e64a19] transition-colors duration-300 "
      >
        Join Waitlist
      </button>
      {/* {message && <p>{message}</p>} */}
    </form>
  );
};

export default WaitlistForm;
