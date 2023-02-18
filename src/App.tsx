import { useTranslation } from "react-i18next";
import { Intro } from "./Components/Intro";
import { Projects } from "./Components/Projects";
import { motion, Variants } from "framer-motion";
import { MouseFollow } from "./Components/Mouse";
import "./i18n";

export default function App() {
  function hasTouch() {
    return "ontouchstart" in window;
  }
  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-gradient-to-bl from-[#02aa85] to-[#c200ff] text-slate-100 lg:h-full lg:flex-row">
      {!hasTouch() ? <MouseFollow /> : null}
      <Intro />
      <div className="relative z-[3] w-full px-6 font-arvo md:overflow-y-auto md:py-4 md:px-14">
        <Welcome></Welcome>
        <Icons></Icons>
        <Projects />
      </div>
    </div>
  );
}

function Welcome() {
  const { t } = useTranslation();
  const waveMotion: Variants = {
    wave: {
      rotate: [-10, 30, -10],
      transition: {
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
        duration: 1,
      },
    },
  };

  return (
    <h2 className="mt-10 whitespace-pre-line font-source text-2xl">
      <motion.span
        variants={waveMotion}
        animate="wave"
        className="inline-block text-5xl"
      >
        👋
      </motion.span>
      {t("common.welcome")}
    </h2>
  );
}

function Icons() {
  const iconMotion = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
    },
  };

  const wrap = (icon: string) => (
    <motion.div variants={iconMotion}>
      <Icon icon={icon}></Icon>
    </motion.div>
  );

  return (
    <motion.div
      variants={iconMotion}
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
      className="my-4 flex flex-wrap gap-2 text-5xl"
    >
      {wrap("css3")}
      {wrap("html5")}
      {wrap("react")}
      {wrap("svelte")}
      {wrap("arduino")}
      {wrap("nodejs")}
      {wrap("typescript")}
      {wrap("sass")}
      {wrap("docker")}
      {wrap("rust")}
      {wrap("sqlite")}
      {wrap("mysql")}
      {wrap("vim")}
      {wrap("vscode")}
    </motion.div>
  );
}

export function Icon(props: { icon: string }) {
  return (
    <i
      className={`devicon-${props.icon}-plain colored devicon drop-shadow-xl`}
    ></i>
  );
}
