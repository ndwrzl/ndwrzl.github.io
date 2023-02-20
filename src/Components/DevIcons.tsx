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

const iconMotion: Variants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export function Icons() {
  const wrap = (icon: string) => (
    <Tooltip text={icon.toUpperCase()}>
      <motion.div variants={iconMotion}>
        <Icon icon={icon}></Icon>
      </motion.div>
    </Tooltip>
  );

  return (
    <motion.div
      variants={iconMotion}
      initial="hidden"
      animate="show"
      className="my-4 flex flex-wrap gap-2"
    >
      {icons.map((icon) => wrap(icon))}
    </motion.div>
  );
}

export function Icon(props: { icon: string }) {
  return (
    <i
      className={`devicon-${props.icon}-plain colored devicon cursor-pointer text-5xl drop-shadow-xl`}
    ></i>
  );
}
