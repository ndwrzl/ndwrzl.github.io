import { useTranslation } from "react-i18next";
import { Intro } from "./Components/Intro";
import { Projects } from "./Components/Projects";
import { motion, Variants } from "framer-motion";
import { MouseFollow } from "./Components/Mouse";
import "./i18n";
import { Icons } from "./Components/DevIcons";

export default function App() {
  function hasTouch() {
    return "ontouchstart" in window;
  }
  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-gradient-to-bl from-[#02aa85] to-[#c200ff]  text-slate-100 lg:h-full lg:flex-row">
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
