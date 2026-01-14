import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi everyone! I’m <span className="purple">Anthony Younes</span>{" "}
            from <span className="purple">Lebanon</span>.
            <br />
            I’m currently developing my skills as a{" "}
            <span className="purple">Full Stack Developer</span>,building practical projects to strengthen both frontend and backend expertise.{" "}
            {/* <span className="purple">Juspay</span>. */}
            {/* <br />I hold an Integrated M.Sc. (IMSc) in{" "}
            <span className="purple">Mathematics and Computing</span> from{" "}
            <span className="purple">BIT Mesra</span>. */}
            <br />
            <br />
             Outside of coding, I enjoy activities that keep me active and curious:
          </p>

         <ul>
  <li className="about-activity">
    <ImPointRight /> Running and staying fit 🏃‍♂️
  </li>
  <li className="about-activity">
    <ImPointRight /> Discovering new places and experiences 🌍
  </li>
  <li className="about-activity">
    <ImPointRight /> Learning new things and exploring ideas 💡
  </li>
</ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
