import { Icon } from "@/Components/DevIcons";
import { type Project } from "@/projects";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
// @ts-ignore
import { useOuterClick } from "react-outer-click";
// @ts-ignore
import FeatherIcon from "feather-icons-react";
import { useRef } from "react";

interface ProjectProps extends Project {
  id: string;
  onTap: () => void;
}

const projectMotion: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    zIndex: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    zIndex: 8,
    scale: 1.07,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export function Project(props: ProjectProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      layout
      variants={projectMotion}
      onClick={props.onTap}
      whileHover="hover"
      transition={{ duration: 0.15, ease: "easeInOut" }}
      className={`project flex h-72 w-full cursor-pointer flex-col rounded-md bg-zinc-600 shadow-gray-900 sm:w-80`}
      layoutId={`project-${props.id}`}
    >
      <img
        className="project-image object-cover object-top"
        src={props.image}
        alt={`${props.name}`}
      />
      <div className="project-title-container relative">
        <span
          className="absolute bottom-4 right-4 font-arvo text-2xl"
          // layoutId={`project-title-${props.id}`}
        >
          {props.name}
        </span>
      </div>
    </motion.div>
  );
}

export function Expanded(props: ProjectProps) {
  const { t } = useTranslation();
  const getMade = props.madewith || props.madewithtext;
  const el = useRef(null);

  useOuterClick(el, () => props.onTap());

  return (
    <motion.div
      className="fullscreen"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "linear" } }}
      animate={{ opacity: 1, transition: { duration: 0.3, ease: "linear" } }}
    >
      <div className="flex justify-center p-8">
        <motion.div
          className={`project expanded container relative flex w-full flex-col rounded-md bg-zinc-600 shadow-2xl will-change-transform lg:w-[900px] lg:flex-row`}
          layoutId={`project-${props.id}`}
          ref={el}
        >
          <div className="h-full max-h-[200px] w-full lg:max-h-[500px]">
            <img
              className="project-image"
              src={props.image}
              alt={`${props.name}`}
            />
          </div>
          <div className="m-5 flex select-text flex-col">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.5, rotate: 90 }}
              onClick={() => props.onTap()}
              className="absolute right-5 top-4 z-10 -m-7 cursor-pointer p-7 will-change-transform"
            >
              <FeatherIcon icon="x"></FeatherIcon>
            </motion.div>
            <span className="font-arvo text-2xl">{props.name}</span>
            <hr className="mb-5 h-px border-0 bg-gray-400"></hr>
            <div className="project-description">
              <span className="py-7 text-lg">{t("projects." + props.id)}</span>
            </div>
            <p>
              {t("common.madewith")}:
              {getMade && props.madewithtext && " " + getMade.join(", ") + "."}
            </p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="flex flex-row flex-wrap justify-center gap-3"
            >
              {getMade &&
                props.madewith &&
                getMade.map((icon) => <Icon icon={icon} key={icon}></Icon>)}
            </motion.div>
            <div className="grow"></div>
            <div className="buttons mt-3 flex flex-col flex-wrap gap-3">
              <Button url={props.github}>Github</Button>
              <Button url={props.demo}>Demo</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Button(props: { url: string | undefined; children: string }) {
  return props.url ? (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      target="_blank"
      className="bg-blue-500 py-2 px-4 font-mono text-white hover:bg-blue-700"
      href={props.url}
    >
      {props.children}
    </motion.a>
  ) : null;
}
