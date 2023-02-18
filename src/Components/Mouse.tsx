import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function MouseFollow() {
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        left: e.x,
        top: e.y,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <motion.div
        id="mouse"
        animate={mousePosition}
        transition={{
          left: {
            duration: 0.7,
            ease: "linear",
            repeat: 0,
            type: "spring",
            stiffness: 80,
          },
          top: {
            duration: 0.9,
            ease: "linear",
            repeat: 0,
            type: "spring",
            stiffness: 80,
          },
          default: {
            duration: 2.5,
            repeat: Infinity,
          },
        }}
      ></motion.div>
      <motion.div id="blur"></motion.div>
    </>
  );
}
