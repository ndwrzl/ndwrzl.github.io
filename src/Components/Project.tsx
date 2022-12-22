import { Icon } from "@/App";
import { type Project } from "@/projects";
import { motion, Variants } from "framer-motion";
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
      variants={projectMotion}
      onClick={props.onTap}
      whileHover="hover"
      transition={{ duration: 0.15, ease: "easeInOut" }}
      className={`project flex h-72 w-full cursor-pointer snap-center flex-col rounded-md bg-zinc-600 shadow-gray-900 drop-shadow-2xl sm:w-80`}
      layoutId={`project-${props.id}`}
    >
      <motion.div
        className="project-image-container drop-shadow-2xl"
        // layoutId={`project-image-container-${props.id}`}
      >
        <img
          className="object-cover object-top"
          src={props.image}
          alt={`${props.name}`}
        />
      </motion.div>
      <motion.div className="project-title-container">
        <span className="project-title font-arvo text-2xl">{props.name}</span>
      </motion.div>
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
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <div className="project-content-container flex justify-center">
        <motion.div
          className={`project expanded container flex w-full flex-col rounded-md bg-zinc-600 shadow-2xl lg:w-[900px] lg:flex-row`}
          layoutId={`project-${props.id}`}
          ref={el}
        >
          <motion.div
            className="project-image-container relative max-h-[200px] lg:max-h-[500px]"
            // layoutId={`project-image-container-${props.id}`}
          >
            <img src={props.image} alt={`${props.name}`} />
          </motion.div>
          <div className="content m-5 flex grow flex-col">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.5, rotate: 90 }}
              onClick={() => props.onTap()}
              className="absolute right-7 top-7 z-10 -m-7 cursor-pointer p-7"
            >
              <FeatherIcon icon="x"></FeatherIcon>
            </motion.div>
            <span className="font-arvo text-2xl">{props.name}</span>
            <hr className="mb-5 h-px border-0 bg-gray-400"></hr>
            <motion.div
              className="project-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="py-7 text-lg">{t("projects." + props.id)}</span>
            </motion.div>
            <p>
              {t("common.madewith")}:
              {getMade && props.madewithtext && " " + getMade.join(", ") + "."}
            </p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                staggerChildren: 1,
                duration: 1,
                ease: "easeInOut",
              }}
              className="flex flex-row flex-wrap justify-center gap-3 text-5xl"
            >
              {getMade &&
                props.madewith &&
                getMade.map((icon) => <Icon icon={icon} key={icon}></Icon>)}
            </motion.div>
            <div className="grow"></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              className="buttons mt-3 flex flex-col flex-wrap gap-3"
            >
              <Button url={props.github}>Github</Button>
              <Button url={props.demo}>Demo</Button>
            </motion.div>
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
