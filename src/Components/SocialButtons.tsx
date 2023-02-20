import { motion, Variants } from "framer-motion";

const circleMotion: Variants = {
  rest: {
    scale: 0,
    transition: {
      delay: 0.1,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};
const textMotion: Variants = {
  rest: {
    color: "#ffffff",
    transition: {
      delay: 0.1,
    },
  },
  hover: {
    color: "#47198c",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};
export function Social({ url, children }: { url: string; children: any }) {
  return (
    <motion.a
      className="grid"
      initial="rest"
      whileHover="hover"
      animate="rest"
      target="_blank"
      href={url}
    >
      <motion.div
        variants={circleMotion}
        className="col-start-1 row-start-1 h-16 w-16 rounded-full bg-[#ffffff]"
      ></motion.div>
      <motion.div
        variants={textMotion}
        className="col-start-1 row-start-1 flex items-center justify-center drop-shadow-xl"
      >
        {children}
      </motion.div>
    </motion.a>
  );
}
