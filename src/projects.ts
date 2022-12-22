import wolImg from "@/projects/wakeonlan.webp";
import ytImg from "@/projects/ytdl.jpg";
import mcImg from "@/projects/mcpanel.png";
import anilistImg from "@/projects/anilist.png";
import discobotImg from "@/projects/discobot.png";
import sambamanagerImg from "@/projects/samba.png";

type Button = string;

export interface Project {
	name: string;
	url?: string;
	github?: Button,
	demo?: Button,
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
