import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import { SiWindows } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
  <SiWindows fontSize={"24px"} color="#0078D4" />
  <div className="tech-icons-text">Windows</div>
</Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <SiVisualstudiocode fontSize={"24px"} color="#007ACC" />
  <div className="tech-icons-text">Vs Code</div>
</Col>
    </Row>
  );
}

export default Toolstack;
