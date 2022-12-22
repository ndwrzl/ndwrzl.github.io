import { Expanded, Project } from "@/Components/Project";
import { useTranslation } from "react-i18next";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { Project as ProjectType, projects } from "../projects";

export function Projects() {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<
    typeof projects[0] | undefined
  >();

  const expandedClick = () => {
    setExpandedCard(undefined);
  };

  const getId = (project: ProjectType) =>
    project.name.toLowerCase().replaceAll(" ", "");

  return (
    <div>
      <h3 className="mt-10 text-5xl">{t("common.projects")}</h3>
      <motion.div
        className="flex flex-wrap justify-center gap-2 py-4 lg:gap-4 lg:py-8 lg:px-4 2xl:justify-start"
        initial="hidden"
        animate="show"
      >
        <AnimateSharedLayout>
          <AnimatePresence>
            {expandedCard && (
              <Expanded
                {...expandedCard}
                id={getId(expandedCard)}
                onTap={expandedClick}
              ></Expanded>
            )}
          </AnimatePresence>
          {projects.map((project, i) => (
            <Project
              key={i}
              id={getId(project)}
              onTap={() => setExpandedCard(project)}
              {...project}
            ></Project>
          ))}
        </AnimateSharedLayout>
      </motion.div>
    </div>
  );
}
