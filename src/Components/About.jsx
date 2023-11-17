import React from "react";
import "../Css/About.css";
import pic from "../Images/sree.jpg";
import { Container } from "react-bootstrap";

function About() {
  return (
    <>
      <Container>
        <section className="about">
          {/* <div className="about-img">
                    <img src={pic} alt="" />
            </div> */}
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <div className="underline"></div>

            <p className="about-me">
              Hi! I’m Sreeraj, and I’m a developer who has passion for building
              clean web applications with intuitive functionalities. I enjoy the
              process of turning ideas into reality using creative solutions.
              I’m always curious about learning new skills, tools, and concepts.
              In addition to working on various solo full stack projects, I have
              worked with creative teams, which involves daily stand-ups and
              communications, source control, and project management.I have a
              strong understanding of design and a keen eye for detail.Im
              proficient in <b> HTML,CSS</b> and <b>JavaScript</b>.Currently iam
              learning <b>MERN</b> stack.
            </p>
            <button className="btn-hire">hire me</button>
            <button className="btn-cv">download cv</button>
          </div>
        </section>
      </Container>
    </>
  );
}

export default About;
