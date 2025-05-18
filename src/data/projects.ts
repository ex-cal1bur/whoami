export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Automated domain recognition and scanning",
    techs: ["Bash", "DNS"],
    link: "https://github.com/ex-cal1bur/DNS_auto_enum",
  },
    {
    title: "[Excal1bur] Writeups",
    techs: ["Hacking","Cibersecurity"],
    link: "https://github.com/ex-cal1bur/Excal1bur_Writeups",
  },
  {
    title: "Notify_autoinstall | A script to install and configure notify automatically to send messages to a discord channel via a WebHook.",
    techs: ["Python"],
    link: "https://github.com/ex-cal1bur/notify_autoinstall",
  },
  {
    title: "CIF reverse shell",
    techs: ["CIF"],
    link: "https://github.com/ex-cal1bur/CIF_Reverse_shell",
  },
  {
    title: "RCE script insecure deserialization with pickle",
    techs: ["Python", "Pickle"],
    link: "https://github.com/ex-cal1bur/Solucion_baby_website_rick",
  },
];

export default projects;
