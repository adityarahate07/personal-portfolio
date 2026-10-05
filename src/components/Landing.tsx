import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";
import { useLoading } from "../context/LoadingProvider";
import NeonParticleWave from "./NeonParticleWave";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TbArrowDown } from "react-icons/tb";

function useTypingEffect(text: string, delay: number, speed: number, enabled: boolean) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!enabled) return;
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed, enabled]);
  return displayed;
}

const Landing = ({ children }: PropsWithChildren) => {
  const { isLoading } = useLoading();
  const name = useTypingEffect("ADITYA RAHATE", 800, 90, !isLoading);

  return (
    <div className="landing-section" id="landingDiv">
      {/* 1. Cosmic Neon Particle Wave Graphic in Background */}
      <NeonParticleWave />

      <div className="landing-container">
        {/* 2. Profile Info (Left Side) */}
        <div className="hero-left-profile">
          <div className="hero-avatar-wrapper">
            <img
              className="hero-avatar-image"
              src="/images/aditya-rahate-profile.jpeg"
              alt="Aditya Rahate"
            />
          </div>

          <div className="hero-profile-text">
            <span className="hero-greeting">Hello! I'm</span>
            <h1 className="hero-name-cyan" aria-label="Aditya Rahate">
              {name}
              <span className="typing-cursor">|</span>
            </h1>
            <p className="hero-role-white">Full Stack Developer</p>
          </div>

          {/* Social Icons at bottom left */}
          <div className="hero-social-links">
            <a
              href="https://github.com/adityarahate07"
              target="_blank"
              rel="noreferrer"
              className="hero-social-btn"
              data-cursor="disable"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-rahate-a10209330/"
              target="_blank"
              rel="noreferrer"
              className="hero-social-btn"
              data-cursor="disable"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* 3D Model Slot */}
        <div className="landing-avatar-slot">{children}</div>

        {/* 3. Main Heading (Center-Right) */}
        <div className="hero-right-heading">
          <h3 className="hero-subheading-cyan">A Passionate and Dedicated</h3>
          <h2 className="hero-main-title">FULL STACK DEVELOPER</h2>

          {/* Action buttons */}
          <div className="hero-actions-group">
            <a
              href="#work"
              className="btn-electric-primary"
              data-cursor="disable"
            >
              EXPLORE PROJECTS
            </a>
            <a
              href="/Aditya_Rahate_Resume.pdf"
              target="_blank"
              download
              className="btn-glass-secondary"
              data-cursor="disable"
            >
              DOWNLOAD RESUME
            </a>
          </div>

          {/* Centered Scroll indicator pill */}
          <div className="hero-scroll-wrapper">
            <button
              className="hero-scroll-indicator"
              type="button"
              data-cursor="disable"
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>SCROLL TO EXPLORE</span>
              <TbArrowDown className="scroll-arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
