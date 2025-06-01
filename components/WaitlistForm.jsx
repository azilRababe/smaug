"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { logEvent } from "firebase/analytics";

import toast from "react-hot-toast";

import { db, getAnalyticsInstance } from "../lib/firebase";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        timestamp: serverTimestamp(),
      });

      const analytics = await getAnalyticsInstance();
      if (analytics) {
        logEvent(analytics, "waitlist_joined", { email });
      }

      setSubmitted(true);
      toast.success("You've successfully joined the waitlist!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to join waitlist. Please try again.");
      console.error("Error adding to waitlist:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 flex flex-row w-full">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        disabled={loading || submitted}
        className="p-2 w-full bg-transparent text-white placeholder:text-white focus:outline-none underline-offset-2 focus:border-[#ff5722] text-[16px] md:text-[18px] tracking-wide "
      />
      <button
        disabled={loading || submitted}
        type="submit"
        className="text-white p-2 rounded w-full bg-[#ff5722] hover:bg-[#e64a19] transition-colors duration-300 "
      >
        {loading ? "Joining..." : submitted ? "Joined!" : "Join Waitlist"}
      </button>
    </form>
  );
};

export default WaitlistForm;
