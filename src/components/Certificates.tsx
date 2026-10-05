import { MdArrowOutward } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import "./styles/Certificates.css";

const certificates = [
  { title: "Infosys Course Completion Certificate", issuer: "Infosys Springboard", file: "/certificates/infosys-learning-full-stack-development.jpeg" },
  { title: "Oracle Certified Foundations Associate", issuer: "Oracle University — Agentic AI Certified Foundations Associate", file: "/certificates/oracle-certified-foundations-associate.jpeg" },
  { title: "Full Stack Web Development", issuer: "Mind Luster", file: "/certificates/full-stack-web-development.jpeg" },
  { title: "AI Powered Python Micro Course", issuer: "Skill Course", file: "/certificates/ai-powered-python-micro-course.png" },
  { title: "Web Design", issuer: "Course Certificate", file: "/certificates/web-design-certificate.pdf" },
];

const Certificates = () => (
  <section className="certificates-section section-container" id="certificates">
    <p className="certificates-kicker">Learning & achievements</p>
    <h2>Certificates</h2>
    <div className="certificates-grid">
      {certificates.map((certificate) => (
        <a
          className="certificate-card"
          href={certificate.file}
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
          key={certificate.file}
        >
          <TbCertificate aria-hidden="true" />
          <div>
            <h3>{certificate.title}</h3>
            <p>{certificate.issuer}</p>
          </div>
          <MdArrowOutward className="certificate-arrow" aria-hidden="true" />
        </a>
      ))}
    </div>
  </section>
);

export default Certificates;
