import React, { useState } from "react";
import "../Css/Skills.css";
import { Container } from "react-bootstrap";
import html from "../Images/html.png";
import css from "../Images/css3.png";
import bootstrap from "../Images/bootstrap.png";
import js from "../Images/javascript.png";
import react from "../Images/react.png";
import git from "../Images/git.png";
import npm from "../Images/npm.png";
import command from "../Images/command.png";
import firebase from "../Images/firebase.png";
import code from "../Images/vs-code.png";
import photoshop from "../Images/photoshop.png";
import ts from "../Images/ts.png";
import vue from "../Images/vue.png";
function Skills() {
  const [btnclr, setBtncolor] = useState(true);

  return (
    <>
      <Container>
        <section className="skills">
          <h1 className="skill-title">My Skills</h1>
          <div className="text-underline"></div>
          <div className="skill-body">
            <div className="skills-content">
              <h3>What My Programming Skills Included?</h3>
              <p>
                I develop simple, intuitive and responsive user interface that
                helps users get things done with less effort and time with those
                technologies.
              </p>
              <div className="btn-skills">
                <button
                  className={btnclr ? "btn-common" : "btn-skill"}
                  onClick={() => {
                    setBtncolor(true);
                  }}
                >
                  Skills
                </button>
                <button
                  className={btnclr ? "btn-tools" : "btn-common"}
                  onClick={() => {
                    setBtncolor(false);
                  }}
                >
                  Tools
                </button>
              </div>
            </div>

            <div className="skill-box">
              {btnclr ? (
                <ul className="skill-list">
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">HTML5</div>
                      <div className="card-icon">
                        <img src={html} alt="HTML5 logo" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">CSS</div>
                      <div className="card-icon">
                        <img src={css} alt="CSS logo" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">Bootstrap</div>
                      <div className="card-icon">
                        <img src={bootstrap} alt="CSS logo" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">JavaScript</div>
                      <div className="card-icon">
                        <img src={js} alt="JavaScript logo" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">React</div>
                      <div className="card-icon">
                        <img src={react} alt="react logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">TypeScript</div>
                      <div className="card-icon">
                        <img src={ts} alt="react logo" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">Vue js</div>
                      <div className="card-icon">
                        <img src={vue} alt="react logo" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">Firebase</div>
                      <div className="card-icon">
                        <img src={firebase} alt="git logo" />
                      </div>
                    </div>
                  </li>
                </ul>
              ) : (
                <ul className="tool-list">
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">GIT</div>
                      <div className="card-icon">
                        <img src={git} alt="git logo" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">npm</div>
                      <div className="card-icon">
                        <img src={npm} alt="git logo" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">Command Line</div>
                      <div className="card-icon">
                        <img src={command} alt="git logo" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">VS Code</div>
                      <div className="card-icon">
                        <img src={code} alt="git logo" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">Firebase</div>
                      <div className="card-icon">
                        <img src={firebase} alt="git logo" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-card">
                      <div className="tooltip-img">Photoshop</div>
                      <div className="card-icon">
                        <img src={photoshop} alt="git logo" />
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Skills;
