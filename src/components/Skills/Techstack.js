import React from "react";
import { Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiAngularSimple,
  DiBootstrap,
  DiDart,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiFlutter,
  SiMysql
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import Techicon from "./Techicon";

const techStacksList = [
  { tooltipId: "javascript-id", icon: <DiJavascript1 />, tooltipTextContent: "Javascript" },
  { tooltipId: "golang-id", icon: <TbBrandGolang />, tooltipTextContent: "Golang" },
  { tooltipId: "python-id", icon: <DiPython />, tooltipTextContent: "Python" },
  { tooltipId: "node-id", icon: <DiNodejs />, tooltipTextContent: "Node.js" },
  { tooltipId: "react-id", icon: <DiReact />, tooltipTextContent: "React" },
  { tooltipId: "angular-id", icon: <DiAngularSimple />, tooltipTextContent: "Angular" },
  { tooltipId: "dot-id", icon: <SiNextdotjs />, tooltipTextContent: "Next.js" },
  { tooltipId: "bootstrap-id", icon: <DiBootstrap />, tooltipTextContent: "Bootstrap" },
  { tooltipId: "dart-id", icon: <DiDart />, tooltipTextContent: "Dart" },
  { tooltipId: "java-id", icon: <DiJava />, tooltipTextContent: "Java" },
  { tooltipId: "flutter-id", icon: <SiFlutter />, tooltipTextContent: "Flutter" },
  { tooltipId: "postgresql-id", icon: <SiPostgresql />, tooltipTextContent: "PostgreSQL" },
  { tooltipId: "mongodb-id", icon: <DiMongodb />, tooltipTextContent: "MongoDB" },
  { tooltipId: "mysql-id", icon: <SiMysql />, tooltipTextContent: "MySQL" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStacksList.map((tech) => (
        <Techicon key={tech.tooltipId} tooltipId={tech.tooltipId} icon={tech.icon} tooltipTextContent={tech.tooltipTextContent}/>
      ))}
    </Row>
  );
}

export default Techstack;
