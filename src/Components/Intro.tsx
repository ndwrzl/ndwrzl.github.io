// @ts-ignore
import FeatherIcon from "feather-icons-react";
import { Switch } from "@/Components/LanguageSwitch";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Social } from "./SocialButtons";

export function Intro() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  return (
    <div className="relative z-[3] flex w-full flex-col bg-gradient-to-b from-[#111111] to-[#28282B] p-5 font-arvo drop-shadow-2xl lg:h-full lg:w-96 lg:py-10">
      <Switch
        language={language}
        onClick={() => {
          let newLang = language == "español" ? "english" : "español";
          setLanguage(newLang);
          i18n.changeLanguage(newLang);
        }}
      ></Switch>
      <div className="px-5">
        <div className="text-5xl">Ander López</div>
        <div className="py-5">{t("common.intro")}</div>
      </div>
      <div className="mt-auto"></div>
      <div className="icons flex w-full justify-around">
        <Social url="https://github.com/ndwrzl">
          <FeatherIcon icon="github"></FeatherIcon>
        </Social>
        <Social url="mailto:ndwrzl@proton.me">
          <FeatherIcon icon="mail"></FeatherIcon>
        </Social>
      </div>
    </div>
  );
}
