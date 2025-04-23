import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bike Rental App "
              description="Bike Rental App to explore and rent bikes on-the-go, built with React.js, Material-UI, and Firebase. Features include real-time bike availability, location-based search, booking management, and secure payment integration for a seamless user experience."
              ghLink="https://github.com/shreyanshh21/bike-rental-servicee"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Infinity Cube runner "
              description="Infinity Cube Runner is a fast-paced endless runner game built with Unity and C#. Features dynamic obstacle generation, increasing difficulty, responsive controls, and immersive visuals for an engaging gameplay experience across platforms."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
             
            />
          </Col>  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="LiveStockcare App"
              description="LivestockCare is an Android app built with Kotlin to manage and monitor livestock health and vaccination schedules. Features include animal categorization, vaccination tracking, detailed species info with images, progress visualization, and localized multilingual support for enhanced usability."
              ghLink="https://github.com/soumyajit4419/Editor.io"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
             
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
