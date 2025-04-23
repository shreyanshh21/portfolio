import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>  
  Hi Everyone! I am <span className="purple">Shreyansh</span>, a tech enthusiast from <span className="purple">Dehri on Sone, India</span>.  
  <br />  
  Currently pursuing my <span className="purple">B.Tech in Computer Science</span> at <span className="purple">Lovely Professional University (LPU)</span>, 
  <br />  
  <br />  
  When I'm not coding, you’ll find me:  
</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shreyansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
