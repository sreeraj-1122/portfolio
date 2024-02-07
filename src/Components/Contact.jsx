import React, { useRef } from "react";
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
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o39k96s', 'template_9l6e4un', form.current, 'RWRwfSrXKj9qsBN04')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
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
                <a href="https://www.facebook.com/sreerajk.ponnamkaya.5?mibextid=ZbWKwL" className="contact-social-links">
                    <div className="contact-tooltip">Facebook</div>
                    <BsFacebook className="social-icons"/>
                </a>
                <a href="www.twitter.com" className="contact-social-links">
                    <div className="contact-tooltip">Twitter</div>
                    <BsTwitter className="social-icons"/>
                </a>
                <a href="https://www.secure.instagram.com/_sree__raj._/" className="contact-social-links">
                    <div className="contact-tooltip">Instagram</div>
                    <AiFillInstagram className="social-icons"/>
                </a>
                <a href=" https://www.linkedin.com/in/sree-raj-b02070272" className="contact-social-links">
                    <div className="contact-tooltip">Linkdin</div>
                    <AiFillLinkedin className="social-icons"/>
                </a>
                <a href="https://github.com/sreeraj-1122" className="contact-social-links">
                    <div className="contact-tooltip">Github</div>
                    <FaGithub className="social-icons"/>
                </a>
              </div>
            </div>
            <div className="form-section">
                <form  className="form" ref={form} onSubmit={sendEmail}>
                    <div className="form-wrapper">
                        <label htmlFor="" className="form-label">Name</label>
                        <div className="input-wrapper">
                        <FaCircleUser className="input-icon" />
                            <input type="text" name="from_name" className="input-field" placeholder="e.g John Doe" required/>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <label htmlFor="" className="form-label">Email</label>
                        <div className="input-wrapper">
                        <MdEmail className="input-icon" />

                            <input type="email" name="from_email" className="input-field" placeholder="e.g johndoe@gmail.com" required/>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <label htmlFor="" className="form-label">Phone</label>
                        <div className="input-wrapper">
                        <FaPhoneAlt className="input-icon" />
                            <input type="text" name="from_number" className="input-field" placeholder="Phone number" required />
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <label htmlFor="" className="form-label">Message</label>
                        <div className="input-wrapper">
                        <RiMessage2Fill className="input-icon" />
                           <textarea name="message" id=""className="input-field" placeholder="Write message" required></textarea>
                        </div>
                    </div>
                    
                    <button type="submit"  className="contact-btn">SEND</button>
                </form>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Contact;
