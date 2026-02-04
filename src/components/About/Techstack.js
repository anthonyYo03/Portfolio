import { Col, Row } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiAngular,
  SiReact,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiGit,
  SiPostman,
  SiPostgresql
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 fontSize={"24px"} color="#E34F26" />
        <div className="tech-icons-text">HTML5</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 fontSize={"24px"} color="#1572B6" />
        <div className="tech-icons-text">CSS3</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap fontSize={"24px"} color="#7952B3" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript fontSize={"24px"} color="#F7DF1E" />
        <div className="tech-icons-text">Javascript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript fontSize={"24px"} color="#3178C6" />
        <div className="tech-icons-text">Typescript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs fontSize={"24px"} color="#339933" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress fontSize={"24px"} className="tech-icons-text" />
        <div className="tech-icons-text">Express JS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAngular fontSize={"24px"} color="#DD0031" />
        <div className="tech-icons-text">Angular</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiReact fontSize={"24px"} color="#61DAFB" />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb fontSize={"24px"} color="#47A248" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver fontSize={"24px"} color="#CC2927" />
        <div className="tech-icons-text">Microsoft SQL Server</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
  <SiPostgresql fontSize={"24px"} color="#336791" />
  <div className="tech-icons-text">PostgreSQL</div>
</Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGit fontSize={"24px"} color="#F05032" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize={"24px"} color="#FF6C37" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGithub fontSize={"24px"} color="#FFFFFF" />
        <div className="tech-icons-text">GitHub</div>
      </Col>
    </Row>
  );
}

export default Techstack;