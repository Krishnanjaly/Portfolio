import React, { useEffect, useState } from "react";
import "./Hero.css";

import {
  Code2,
  Database,
  Brain,
  ArrowRight,
  Download,
} from "lucide-react";

import profile from "../assets/profile1.jpeg"; // Change to your image

export default function Hero() {

  const roles = [
    "Full Stack Developer",
    "AI Enthusiast",
    "MERN Stack Developer",
    "Data Science Student",
    "Problem Solver",
  ];

  const [text, setText] = useState("");

  const [roleIndex, setRoleIndex] = useState(0);

  const [isDeleting, setIsDeleting] = useState(false);

  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {

    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {

      if (!isDeleting) {

        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {

          setTimeout(() => {

            setIsDeleting(true);

          }, 1800);

          setTypingSpeed(70);

        }

      } else {

        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {

          setIsDeleting(false);

          setRoleIndex((prev) => (prev + 1) % roles.length);

          setTypingSpeed(120);

        }

      }

    }, typingSpeed);

    return () => clearTimeout(timeout);

  }, [text, isDeleting, roleIndex]);

  return (

    <section className="hero-section" id="home">

      {/* Grid Background */}

      <div className="grid-background"></div>

      {/* Noise */}

      <div className="noise-overlay"></div>

      {/* Glow */}

      <div className="hero-glow glow-left"></div>

      <div className="hero-glow glow-right"></div>

      <div className="hero-container">
        {/* ==========================
      LEFT SIDE
========================== */}

<div className="hero-left">

  <span className="hero-label">
    HELLO, I'M
  </span>

  <h1>
    Krishnanjaly S.
  </h1>

  <h3 className="typing">

    {text}

    <span className="cursor">|</span>

  </h3>

  <p>

    Computer Science student specializing in the
    intersection of

    <span> Artificial Intelligence </span>

    and

    <span> Full Stack Engineering</span>.

    Passionate about creating intelligent,
    scalable and user-centric applications using

    <span> React</span>,

    <span> Node.js</span>,

    <span> MongoDB</span>,

    <span> Express</span>,

    <span> React Native</span>

    and

    <span> Data Science</span>.

  </p>

  <div className="hero-buttons">

    <a
      href="#projects"
      className="primary-btn"
    >

      View My Projects

      <ArrowRight size={18} />

    </a>

    <a
      href="/resume/Krishnanjaly_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="secondary-btn"
    >

      Download Resume

      <Download size={18} />

    </a>

  </div>

</div>
                {/* ==========================
              RIGHT SIDE
        ========================== */}

        <div className="hero-right">

          {/* Rotating Rings */}

          <div className="ring ring1"></div>

          <div className="ring ring2"></div>

          <div className="ring ring3"></div>





          {/* Profile */}

          <div className="profile-wrapper">

            <div className="profile-card">

              <img
                src={profile}
                alt="Krishnanjaly"
                className="profile-image"
              />

            </div>

          </div>





          {/* Floating Tech Card */}

          <div className="floating-card code-card">

            <Code2 size={28} />

          </div>





          <div className="floating-card database-card">

            <Database size={28} />

          </div>





          <div className="floating-card ai-card">

            <Brain size={28} />

          </div>





          {/* Availability */}

          <div className="status-card">

            <span className="status-dot"></span>

            <span>

              Available for Opportunities

            </span>

          </div>





          {/* Projects Counter */}

          <div className="projects-card">

            <h2>

              15+

            </h2>

            <p>

              Projects Completed

            </p>

          </div>

        </div>

      </div>





      {/* ==========================
          SCROLL INDICATOR
      ========================== */}

      <div className="scroll-indicator">

        <span>

          Scroll to Explore

        </span>

        <div className="mouse">

          <div className="wheel"></div>

        </div>

      </div>

    </section>

  );

}