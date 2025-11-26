import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@vikramanand52",
    icon: Icons.gitHub,
    link: "https://github.com/vikramanand52",
  },
  {
    name: "LinkedIn",
    username: "Vikram Anand",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/vikram-anand-a6b0b2192/",
  },
  {
    name: "Twitter",
    username: "@Vikram_anand_01",
    icon: Icons.twitter,
    link: "https://twitter.com/Vikram_anand_01",
  },
  {
    name: "Gmail",
    username: "vikramanand9431",
    icon: Icons.gmail,
    link: "mailto:vikramanand9431@gmail.com",
  },
];
