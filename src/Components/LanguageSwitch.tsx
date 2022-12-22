import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

import esIcon from "../icons/es-icon.png";
import usIcon from "../icons/us-icon.png";

interface Props {
  language: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const languages = [
  { name: "Español", icon: esIcon },
  { name: "English", icon: usIcon },
];

export const Switch = ({ language, onClick }: Props) => {
  const isActive = (lang: string) => {
    return lang.toLowerCase() == language;
  };
  return (
    <div className="languagePick my-2 mb-5 flex" onClick={onClick}>
      {languages.map((lang) => (
        <span
          className={`flex-1 text-center ${
            isActive(lang.name) ? "active" : undefined
          }`}
          key={lang.name}
        >
          <img
            height={32}
            width={32}
            src={lang.icon}
            className="mr-2 inline"
          ></img>

          {lang.name}
          {isActive(lang.name) ? (
            <motion.div className="underline" layoutId="underline"></motion.div>
          ) : null}
        </span>
      ))}
    </div>
  );
};
