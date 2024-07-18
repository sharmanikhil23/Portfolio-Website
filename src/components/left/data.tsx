import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

import { Socials } from "../../dataTypes/types";

const Social: Socials[] = [
  {
    id: 1,
    link: "mailto:nikhil23062000@icloud.com",
    name: "Email",
    value: "nikhil23062000icloud.com",
    icon: <BsFillEnvelopeFill></BsFillEnvelopeFill>,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/-nikhilsharma/",
    name: "Linked In",
    value: "linkedin.com/in/-nikhilsharma/",
    icon: <BsLinkedin></BsLinkedin>,
  },
  {
    id: 3,
    link: "https://x.com/NikhilS46355903",
    name: "X",
    value: "x.com/NikhilS46355903",
    icon: <RiTwitterXFill></RiTwitterXFill>,
  },
  {
    id: 4,
    link: "https://github.com/sharmanikhil23",
    name: "GitHub",
    value: "github.com/sharmanikhil23",
    icon: <BsGithub></BsGithub>,
  },
];

export default Social;
