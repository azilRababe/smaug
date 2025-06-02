"use client";

import { useEffect, useState } from "react";
import { getAnalytics, isSupported } from "firebase/analytics";
import { app } from "./firebase";

export function useAnalytics() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    isSupported().then((supported) => {
      if (supported) {
        const analyticsInstance = getAnalytics(app);
        setAnalytics(analyticsInstance);
      }
    });
  }, []);

  return analytics;
}
