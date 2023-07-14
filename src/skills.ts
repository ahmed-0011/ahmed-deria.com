import react from "@/images/skills/react.png";
import typeScript from "@/images/skills/typescript.png";
import javaScript from "@/images/skills/javascript.png";
import html from "@/images/skills/html.png";
import css from "@/images/skills/css.png";
import python from "@/images/skills/python.png";
import java from "@/images/skills/java.png";
import sass from "@/images/skills/sass.png";
import styledComponents from "@/images/skills/styled-components.png";
import tailwindcss from "@/images/skills/tailwind.png";
import vitejs from "@/images/skills/vitejs.png";
import bash from "@/images/skills/bash.png";
import linux from "@/images/skills/linux.png";
import expressjs from "@/images/skills/expressjs.png";
import firebase from "@/images/skills/firebase.png";
import mysql from "@/images/skills/mysql.png";
import git from "@/images/skills/git.png";
import markdown from "@/images/skills/markdown.png";
import astro from "@/images/skills/astro.png";

type Skill = {
    name: string;
    imageSrc: string;
};

const skills: Skill[] = [
    { name: "React", imageSrc: react },
    { name: "TypeScript", imageSrc: typeScript },
    { name: "JavaScript", imageSrc: javaScript },
    { name: "HTML", imageSrc: html },
    { name: "CSS", imageSrc: css },
    { name: "Python", imageSrc: python },
    { name: "Java", imageSrc: java },
    { name: "SASS", imageSrc: sass },
    { name: "styled-components", imageSrc: styledComponents },
    { name: "TailwindCSS", imageSrc: tailwindcss },
    { name: "Astro", imageSrc: astro },
    { name: "Vitejs", imageSrc: vitejs },
    { name: "Bash", imageSrc: bash },
    { name: "Linux", imageSrc: linux },
    { name: "Expressjs", imageSrc: expressjs },
    { name: "Firebase", imageSrc: firebase },
    { name: "MySQL", imageSrc: mysql },
    { name: "Git", imageSrc: git },
    { name: "Markdown", imageSrc: markdown }
];

export default skills;
