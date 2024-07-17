import React from "react";
import "../Css/About.css";
import { Container } from "react-bootstrap";

function About() {
  const handleEmail = () => {
    window.location.href =
      "mailto:sreeraj2122@gmail.com?subject=Hello&body=Send an mail";
  };
  return (
    <>
      <Container>
        <section className="about">
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <div className="underline"></div>

            <p className="about-me">
              Hi! I’m Sreeraj, a MERN stack developer with a passion for
              building clean, efficient web applications with intuitive
              functionalities. I enjoy transforming ideas into reality using
              creative solutions and am always eager to learn new skills, tools,
              and concepts. With proficiency in <b>HTML</b>, <b>CSS</b>,{" "}
              <b>JavaScript</b>, and the <b>MERN stack</b>, I have worked on various solo full-stack projects, honing my ability to create seamless user experiences.My strong understanding of design and keen eye for detail ensure
              that my projects are not only functional but also visually
              appealing. In addition to my solo endeavors, I have experience
              collaborating with creative teams, participating in daily
              stand-ups, managing communications, using source control, and
              handling project management tasks. I thrive in dynamic
              environments where I can contribute to and learn from my team. I’m
              always curious and ready to take on new challenges in the
              ever-evolving field of web development. Let's build something
              amazing together!
            </p>
            <button onClick={handleEmail} className="btn-hire">
              hire me
            </button>
            <button className="btn-cv">download cv</button>
          </div>
        </section>
      </Container>
    </>
  );
}

export default About;
