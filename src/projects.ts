import wolImg from "@/projects/wakeonlan.webp";
// @ts-ignore
import ytImg from "@/projects/ytdl.jpg?webp&width=400";
// @ts-ignore
import mcImg from "@/projects/mcpanel.png?webp&width=400";
// @ts-ignore
import anilistImg from "@/projects/anilist.png?webp&width=400";
// @ts-ignore
import discobotImg from "@/projects/discobot.png?webp&width=400";
// @ts-ignore
import sambamanagerImg from "@/projects/samba.png?webp&width=400";

type Button = string;

export interface Project {
  name: string;
  url?: string;
  github?: Button;
  demo?: Button;
  madewith?: string[];
  madewithtext?: string[];
  image: string;
}

export const projects: Project[] = [
  {
    name: "Youtube Downloader",
    image: ytImg,
    github: "https://github.com/thegamerx1/YoutubeDL-AHK",
    madewithtext: ["AutoHotkey"],
  },
  {
    name: "Samba Manager",
    github: "https://github.com/ndwrzl/samba-manager",
    madewith: ["rust", "svelte", "arduino"],
    image: sambamanagerImg,
  },
  {
    name: "Did U Watch",
    github: "https://github.com/thegamerx1/diduwatch",
    madewith: ["svelte", "typescript"],
    demo: "https://thegamerx1.github.io/diduwatch/",
    image: anilistImg,
  },
  {
    name: "Wake on Lan",
    github: "https://github.com/thegamerx1/wakeonlan",
    madewith: ["docker", "svelte", "nodejs"],
    image: wolImg,
  },
  {
    name: "MCPanel",
    github: "https://github.com/thegamerx1/MCPanel",
    madewith: ["nodejs", "svelte"],
    image: mcImg,
  },
  {
    name: "DiscoBot",
    github: "https://github.com/thegamerx1/discord-bot",
    madewithtext: ["AutoHotkey"],
    image: discobotImg,
  },
];
