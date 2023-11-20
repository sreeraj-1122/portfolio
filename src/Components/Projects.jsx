import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../Css/Projects.css";
import ProjectCard from "./ProjectCard";
import {projectData} from '../Components/projectData'
function Projects() {
  const [load,setLoad]=useState(5);
  const slice=projectData.slice(0,load);

  const loadMore=()=>{
    setLoad(load + load)
  }
  return (
    <>
      <Container>
        <section className="projects">
          <h3 className="project-title">My Works</h3>
          <div className="underline"></div>

          <div className="project-body">
            <div className="project-texts">
              <h5 className="psection-title">
                See My Works Which Will Amaze You
              </h5>
              <p className="psection-text">
                We develop the best quality website that serves for the
                long-term. Well-documented, clean, easy and elegant interface
                helps any non-technical clients.
              </p>
            </div>
            <ProjectCard  slice={slice}/>
          
          </div>
          <div className="btn-load">
            <button className="load-more-btn" onClick={loadMore}>Load more</button>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Projects;
