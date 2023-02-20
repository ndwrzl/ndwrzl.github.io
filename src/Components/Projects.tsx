import { Expanded, Project } from "@/Components/Project";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Project as ProjectType, projects } from "../projects";

export function Projects() {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<
    (typeof projects)[0] | undefined
  >();

  const closeExpanded = () => {
    setExpandedCard(undefined);
  };

  const getId = (project: ProjectType) =>
    project.name.toLowerCase().replaceAll(" ", "");

  return (
    <div>
      <h3 className="mt-10 text-5xl">{t("common.projects")}</h3>
      <div className="flex flex-wrap justify-center gap-2 py-4 lg:gap-4 lg:py-8 lg:px-4 2xl:justify-start">
        <AnimatePresence>
          {expandedCard && (
            <Expanded
              {...expandedCard}
              id={getId(expandedCard)}
              onTap={closeExpanded}
            ></Expanded>
          )}
        </AnimatePresence>
        {projects.map((project, i) => (
          <Project
            key={i}
            onTap={() => setExpandedCard(project)}
            id={getId(project)}
            {...project}
          ></Project>
        ))}
      </div>
    </div>
  );
}
