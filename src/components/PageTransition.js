"use client"; // Mark this component as a Client Component

import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; // Correct use of usePathname
import { useEffect, useState } from "react";

// Define the animation variants for sliding in and out
const variants = {
  hidden: { opacity: 0, x: "-100%" }, // Slide in from left
  enter: { opacity: 1, x: 0 },        // Center screen
  exit: { opacity: 0, x: "100%" },    // Slide out to right
};

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger mounting state on pathname change
  }, [pathname]);

  return (
    <motion.div
      key={pathname} // Trigger animation when route changes
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "tween", duration: 0.5 }} // Smooth transition
    >
      {isMounted && children}
    </motion.div>
  );
}
