interface Skill {
    name: string;
    link?: string;
    level?: string;
    image?: string;
    title?: string;
}

const hardSkills: Skill[] = [
    { name: "HTML", link: "https://en.wikipedia.org/wiki/HTML" },
    { name: "CSS", link: "https://en.wikipedia.org/wiki/CSS" },
    { name: "JavaScript", link: "https://javascript.info/" },
    { name: "TypeScript", link: "https://www.typescriptlang.org/" },
    { name: "React.js", link: "https://react.dev/" },
    { name: "Redux", link: "https://en.wikipedia.org/wiki/Redux" },
    { name: "Sass", link: "https://en.wikipedia.org/wiki/Sass_(style_sheet_language)" },
    { name: "Github", link: "https://github.com/" },
    { name: "Material UI", link: "https://mui.com/" },
    { name: "Tailwind", link: "https://tailwindcss.com/" },
    { name: "Bootstrap", link: "https://getbootstrap.com/" },
    { name: "Rest API", link: "https://www.ibm.com/topics/rest-apis#:~:text=A%20REST%20API%20(also%20called,transfer%20(REST)%20architectural%20style."},
    { name: "Next.js", link: "https://nextjs.org/" },
    { name: "Responsive UI", link: "https://www.w3schools.com/html/html_responsive.asp" },
    { name: "MobX", link: "https://mobx.js.org/README.html" },
];

const softSkills: Skill[] = [
    { name: "Teamwork" },
    { name: "Problem-solving" },
    { name: "Time management" },
    { name: "Adaptability" },
    { name: "Attention to detail" },
    { name: "Fast WPM" }
];

const languages: Skill[] = [
    { name: "Uzbek", level: "Native"},
    { name: "Russian", level: "C2" },
    { name: "English", level: "B2" }
];

const myContact: Skill[] = [
    { name: "PHONE", title: "+998 (90) 788 51 05", image: "/icons/tphone_icon.svg", link: "tel:+998907885105" }, 
    { name: "EMAIL", title: "itachi0777@mail.ru", image: "/icons/email_icon.svg", link: "mailto:itachi0777@mail.ru" },
    { name: "TELEGRAM", title: "@escape_077", image: "/icons/tg_icon.svg", link: "https://t.me/escape_077" },
    { name: "LOCATION", title: "Medgorodog, 1/20, Tashkent, UZ", image: "/icons/location_icon.svg", link: "https://www.google.com/maps/dir//41.3625688,69.1835503/@41.3624803,69.1835418,18.92z?entry=ttu" }, 
];


export { hardSkills, softSkills, languages, myContact };
