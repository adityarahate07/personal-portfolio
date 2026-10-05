import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <a className="contact-email" href="mailto:rahateaditya07@gmail.com" data-cursor="disable">
              rahateaditya07@gmail.com
            </a>
            <p className="contact-details">+91 9011902085<br />Chh. Sambhajinagar, Maharashtra, India</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/adityarahate07"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-rahate-a10209330/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <a
              href="/Aditya_Rahate_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-resume"
            >
              <TbDownload /> Download Resume
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Built by <span>Aditya Rahate</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Aditya Rahate. All Rights Reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
