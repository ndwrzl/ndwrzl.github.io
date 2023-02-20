import { motion, Variants } from "framer-motion";
import { Tooltip } from "./Tooltip";

const icons = [
  "css3",
  "html5",
  "react",
  "svelte",
  "arduino",
  "nodejs",
  "typescript",
  "sass",
  "docker",
  "rust",
  "sqlite",
  "mysql",
  "vim",
  "vscode",
];

const groupMotion: Variants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const iconMotion: Variants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
  },
};

export function Icons() {
  return (
    <motion.div
      variants={groupMotion}
      initial="hidden"
      animate="show"
      className="my-4 flex flex-wrap gap-2"
    >
      {icons.map((icon, i) => (
        <Icon icon={icon} key={i}></Icon>
      ))}
    </motion.div>
  );
}

export function Icon(props: { icon: string }) {
  return (
    <motion.div variants={iconMotion}>
      <Tooltip text={props.icon.toUpperCase()}>
        <i
          className={`devicon-${props.icon}-plain colored devicon cursor-pointer text-5xl drop-shadow-xl`}
        ></i>
      </Tooltip>
    </motion.div>
  );
}
