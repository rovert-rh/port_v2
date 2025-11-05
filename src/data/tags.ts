import NextJS from "../Components/icons/NextJS.astro";
import Tailwind from "../Components/icons/Tailwind.astro";
import Html from "../Components/icons/Html.astro";
import Css from "../Components/icons/Css.astro";
import Shopify from "../Components/icons/Shopify.astro";
import Javascript from "../Components/icons/Javascript.astro";
import React from "../Components/icons/React.astro";
import Express from "../Components/icons/Express.astro";
import MongoDB from "../Components/icons/MongoDB.astro";
import AstroI from "../Components/icons/AstroIcon.astro";
import DOTNET from "../Components/icons/NET.astro";

export const TAGS = {
    NEXT: { name: "Next.js", class: "bg-black text-white", icon: NextJS },
    TAILWIND: { name: "Tailwind", class: "bg-[#003159] text-white", icon: Tailwind },
    HTML: { name: "HTML", class: "bg-[#ef652a] text-white", icon: Html },
    CSS: { name: "CSS", class: "bg-[#2965f1] text-white", icon: Css },
    SHOPIFY: { name: "Shopify", class: "bg-[#5E8E3E] text-white", icon: Shopify },
    JAVASCRIPT: { name: "JS", class: "bg-[#f0db4f] text-black", icon: Javascript },
    REACT: { name: "React", class: "bg-[#2965f1] text-white", icon: React },
    EXPRESS: { name: "Express", class: "bg-[#000] text-white", icon: Express },
    MONGO: { name: "MongoDB", class: "bg-[#b2ffbd] text-black", icon: MongoDB },
    ASTRO: { name: "Astro", class: "bg-black text-white", icon: AstroI },
    DOTNET: { name: "DOTNET", class: "bg-[#512BD4] text-white", icon: DOTNET },
} as const;

export type TagKey = keyof typeof TAGS;