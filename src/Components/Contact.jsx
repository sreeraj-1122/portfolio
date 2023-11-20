import React from "react";
import '../Css/Contact.css'
import { Container } from "react-bootstrap";
import { FaCircleUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
function Contact() {
  return (
    <>
      <Container>
        <section className="contact">
          <h2 className="contact-title">Contact Me</h2>
          <div className="contact-line"></div>
          <div className="contact-body">
            <div className="contact-content">
              <h2 className="content-title">
                Have You Any Project? Please Drop a Message
              </h2>
              <p className="content-text">
                Get in touch and let me know how i can help. Fill out the form
                and i’ll be in touch as soon as possible.
              </p>
              <div className="address-section">
              <IoLocationSharp className="address-icon" />
                <h4 className="address">Address:</h4>
              </div>

                <p className="address-text">
                  Ponnamkaya(H),Munnad(PO), <br/>Chengala(Via),Kasaragod(Dist),<br/>  Kerala,671541
                </p>
              <div className="address-section">
              <FaPhoneVolume className="address-icon" />
                <h4 className="address">Phone:</h4>
              </div>
                <p className="address-text">8078382787</p>
              <div className="address-section">
              <MdEmail className="address-icon" />
                <h4 className="address">Email:</h4>
              </div>
                <p className="address-text">
                  sreeraj2122@gmail.com <br />
                  sreeraj2221@gmail.com
                </p>
              <div className="contact-social-list">
                <a href="" className="contact-social-links">
                    <div className="contact-tooltip">Facebook</div>
                    <BsFacebook className="social-icons"/>
                </a>
                <a href="" className="contact-social-links">
                    <div className="contact-tooltip">Facebook</div>
                    <BsTwitter className="social-icons"/>
                </a>
                <a href="" className="contact-social-links">
                    <div className="contact-tooltip">Facebook</div>
                    <AiFillInstagram className="social-icons"/>
                </a>
                <a href="" className="contact-social-links">
                    <div className="contact-tooltip">Facebook</div>
                    <AiFillLinkedin className="social-icons"/>
                </a>
                <a href="" className="contact-social-links">
                    <div className="contact-tooltip">Facebook</div>
                    <FaGithub className="social-icons"/>
                </a>
              </div>
            </div>
            <div className="form-section">
                <form  className="form">
                    <div className="form-wrapper">
                        <label htmlFor="" className="form-label">Name</label>
                        <div className="input-wrapper">
                        <FaCircleUser className="input-icon" />
                            <input type="text" name="" className="input-field" placeholder="e.g John Doe" />
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <label htmlFor="" className="form-label">Email</label>
                        <div className="input-wrapper">
                        <MdEmail className="input-icon" />

                            <input type="email" name="" className="input-field" placeholder="e.g johndoe@gmail.com"/>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <label htmlFor="" className="form-label">Phone</label>
                        <div className="input-wrapper">
                        <FaPhoneAlt className="input-icon" />
                            <input type="text" name="" className="input-field" placeholder="Phone number" />
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <label htmlFor="" className="form-label">Message</label>
                        <div className="input-wrapper">
                        <RiMessage2Fill className="input-icon" />
                           <textarea name="" id=""className="input-field" placeholder="Write message"></textarea>
                        </div>
                    </div>
                    
                    <button className="contact-btn">SEND</button>
                </form>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Contact;
