import { SiAwsorganizations } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { GoGear } from "react-icons/go";
import { FaMobileScreenButton } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";

const skillsData = [
  {
    id: 1,
    name: "Full Stack Skills",
    value:
      "Html, JS, CSS, SCSS, React JS, TypeScript, NodeJs, ExpressJs, Firebase, MySql, MongoDb",
    icon: <CgWebsite></CgWebsite>,
  },
  {
    id: 2,
    name: "Devops Skills",
    value:
      "Jenkins, Vagrant, Docker, AWS EC2, AWS ECB, Auto Scaling, S3 Bucket, Bash Scripting",
    icon: <GrCloudSoftware></GrCloudSoftware>,
  },
  {
    id: 3,
    name: "Core Programming Skills",
    value: "C, C++, Java, Python",
    icon: <GoGear></GoGear>,
  },
  {
    id: 4,
    name: "Mobile App Skills",
    value: "React Native",
    icon: <FaMobileScreenButton></FaMobileScreenButton>,
  },
];

export default skillsData;
