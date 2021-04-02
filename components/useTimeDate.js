import { useState, useEffect } from "react";

const useTimeDate = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "short",
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }`;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  });

  return {
    time,
    day,
    date,
    wish,
  };
};

export default useTimeDate;
