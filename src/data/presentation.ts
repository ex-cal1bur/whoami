type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "daniel.mirandabarcelona@gmail.com",
  title: "Hi, I’m Daniel Miranda Barcelona AKA Excal1bur 👋",
  // profile: "/profile.webp",
  description:
    "*Tech enthusiast and offensive security* with a background in *resolving critical incidents* in *Oracle* environments and now training to be a *pentester*. I complement my *software engineering* profession with CTF challenges, *vulnerability exploration*, and *tool creation*. Now studying for the *OSCP*, with the goal of moving into a technical cybersecurity career.",
  socials: [
    {
      label: "🔗 Linkedin",
      link: "https://www.linkedin.com/in/daniel-miranda-barcelona/",
    },
    {
      label: "🐙 Github",
      link: "https://github.com/Ex-cal1bur",
    },
    {
      label: "📄 CV",
      link: "https://drive.google.com/file/d/1XyNbDBzSs74PdDtOlw08tBt1F1L3PKMm/view?usp=sharing",
    },
     {
      label: "💬 discord community",
      link: "https://discord.gg/HGMedJ4UnN",
    },
  ],
};

export default presentation;
