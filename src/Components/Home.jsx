import React from "react";
import "../Css/Home.css";
import pic from "../Images/sree.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Container } from "react-bootstrap";
function Home() {
  return (
    
    <div className="home-section">
      <Container>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, </h3>

          <h1>
            I'm <span>Sreeraj</span>
          </h1>
          <h1>Full stack developer</h1>
          <p>
            I am a skilled and passionate we developer with expirience in
            creating visualy apperaing and user-friendly websites
          </p>

          <div className="social-media">
            <a href="https://www.facebook.com/sreerajk.ponnamkaya.5?mibextid=ZbWKwL">
              <BsFacebook />
            </a>
            <a href="www.twitter.com">
              <BsTwitter />
            </a>
            <a href="https://www.secure.instagram.com/_sree__raj._/">
              <AiFillInstagram />
            </a>
            <a href="https://www.linkedin.com/public-profile/settings">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src={pic} alt="" />
        </div>
      </section>
      </Container>
    </div>
  );
}

export default Home;
