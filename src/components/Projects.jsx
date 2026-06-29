import React, { useEffect, useState } from "react";
import "./Projects.css";

import {
  ExternalLink,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import sheild from "../assets/sheild.png";
import platecraft from "../assets/platecraft.jpg";
import offside from "../assets/offside.jpg";
import water from "../assets/water.jpeg";

const projectData = [
  {
    id: 1,
    category: "AI",
    title: "SHEILD Safety",
    image: sheild,
    badge: "AI MOBILE APP",

    description:
      "AI-powered personal safety application featuring voice SOS, motion detection, QR emergency support, trusted contacts, live GPS sharing and automatic cloud evidence recording.",

    technologies: [
      "React Native",
      "Node.js",
      "Express",
      "MySQL",
      "Cloudinary",
      "Twilio",
    ],

    features: [
      "Voice Activation",
      "Motion Analysis",
      "SOS Automation",
      "24/7 Monitoring",
    ],
  },

  {
    id: 2,
    category: "Web",
    title: "PlateCraft",
    image: platecraft,
    badge: "MERN WEB",

    description:
      "Recipe sharing platform built with the MERN Stack featuring authentication, recipe management, favorites and responsive UI.",

    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
    ],

    features: [
      "Authentication",
      "Favorites",
      "Recipe Search",
      "Responsive",
    ],
  },

  {
    id: 3,
    category: "Web",
    title: "Offside Deal",
    image: offside,
    badge: "E-COMMERCE",

    description:
      "Football merchandise shopping platform with secure authentication, shopping cart, wishlist and order management.",

    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
    ],

    features: [
      "Shopping Cart",
      "Wishlist",
      "Orders",
      "Authentication",
    ],
  },

  {
    id: 4,
    category: "Hackathon",
    title: "Water Footprint Calculator",
    image: water,
    badge: "HACKATHON",

    description:
      "Interactive Smart India Hackathon project that estimates household water consumption through questionnaires.",

    technologies: [
      "HTML",
      "CSS",
    ],

    features: [
      "Water Analysis",
      "Interactive UI",
      "Calculator",
      "Awareness",
    ],
  },
];

export default function Projects() {

  const [activeFilter, setActiveFilter] =
    useState("All");

  const [scrollProgress, setScrollProgress] =
    useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const winScroll =
        document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress(
        (winScroll / height) * 100
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const filters = [
    "All",
    "AI",
    "Web",
    "Hackathon",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter(
          (project) =>
            project.category === activeFilter
        );

  return (

    <div className="projects-page">

      {/* NOISE */}

      <div className="noise-overlay"></div>

      {/* SCROLL BAR */}

      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
        }}
      ></div>

      {/* HERO */}

      <section className="hero-section">

        <div className="grid-background"></div>

        <div className="hero-content">

          <h1>

            Featured

            <span> Projects</span>

          </h1>

          <p>

            A collection of projects that combine
            Artificial Intelligence, Full Stack
            Development and Mobile Applications to
            solve real-world problems.

          </p>

          <div className="filters">

            {filters.map((filter) => (

              <button

                key={filter}

                onClick={() =>
                  setActiveFilter(filter)
                }

                className={
                  activeFilter === filter
                    ? "filter active"
                    : "filter"
                }

              >

                {filter}

              </button>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <main className="projects-container">

              {/* ==========================
              SHEILD PROJECT
      ========================== */}

      {filteredProjects
        .filter((project) => project.id === 1)
        .map((project) => (
          <section
            key={project.id}
            className="project-section left-layout"
          >
            {/* IMAGE SIDE */}

            <div className="project-image-wrapper">

              <div className="blur-circle top-left"></div>

              <div className="glass-card border-beam image-card">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

              </div>

              {/* Floating Metric Card */}

              <div className="metric-card">

                <div className="metric">

                  <p>TECH STACK</p>

                  <h3>06</h3>

                </div>

                <div className="metric">

                  <p>DURATION</p>

                  <h3>3M</h3>

                </div>

                <div className="metric">

                  <p>LINES</p>

                  <h3>12K</h3>

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="project-content">

              <span className="project-tag">

                {project.badge}

              </span>

              <h2>

                {project.title}

              </h2>

              <p className="project-description">

                {project.description}

              </p>

              {/* Technologies */}

              <div className="tech-stack">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="tech-pill"
                  >

                    {tech}

                  </span>

                ))}

              </div>

              {/* Features */}

              <div className="features-grid">

                {project.features.map((feature) => (

                  <div
                    key={feature}
                    className="feature-item"
                  >

                    <CheckCircle
                      size={18}
                      className="feature-icon"
                    />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              {/* Buttons */}

              <div className="project-buttons">

                <button className="primary-btn">

                  Live Demo

                  <ExternalLink size={18} />

                </button>

                <button className="secondary-btn">

                  GitHub

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          </section>
        ))}

              {/* ==========================
              PLATECRAFT
      ========================== */}

      {filteredProjects
        .filter((project) => project.id === 2)
        .map((project) => (
          <section
            key={project.id}
            className="project-section right-layout"
          >
            {/* CONTENT */}

            <div className="project-content">

              <span className="project-tag">
                {project.badge}
              </span>

              <h2>{project.title}</h2>

              <p className="project-description">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="tech-stack">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="tech-pill"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Features */}

              <div className="features-grid">

                {project.features.map((feature) => (

                  <div
                    key={feature}
                    className="feature-item"
                  >

                    <CheckCircle
                      size={18}
                      className="feature-icon"
                    />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              {/* Buttons */}

              <div className="project-buttons">

                <button className="primary-btn">

                  Live Demo

                  <ExternalLink size={18} />

                </button>

                <button className="secondary-btn">

                  GitHub

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

            {/* IMAGE */}

            <div className="project-image-wrapper">

              <div className="blur-circle bottom-right"></div>

              <div className="glass-card border-beam image-card">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

              </div>

              {/* Floating Card */}

              <div className="metric-card left-card">

                <div className="metric">

                  <p>TYPE</p>

                  <h3>MERN</h3>

                </div>

                <div className="metric">

                  <p>STATUS</p>

                  <h3>LIVE</h3>

                </div>

              </div>

            </div>

          </section>
        ))}

              {/* ==========================
              OFFSIDE DEAL
      ========================== */}

      {filteredProjects
        .filter((project) => project.id === 3)
        .map((project) => (
          <section
            key={project.id}
            className="project-section left-layout"
          >

            {/* IMAGE */}

            <div className="project-image-wrapper">

              <div className="blur-circle top-left"></div>

              <div className="glass-card border-beam image-card">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

              </div>

            </div>

            {/* CONTENT */}

            <div className="project-content">

              <span className="project-tag">

                {project.badge}

              </span>

              <h2>

                {project.title}

              </h2>

              <p className="project-description">

                {project.description}

              </p>

              <div className="tech-stack">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="tech-pill"
                  >

                    {tech}

                  </span>

                ))}

              </div>

              <div className="features-grid">

                {project.features.map((feature) => (

                  <div
                    key={feature}
                    className="feature-item"
                  >

                    <CheckCircle
                      size={18}
                      className="feature-icon"
                    />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <div className="project-buttons">

                <button className="primary-btn">

                  Live Demo

                  <ExternalLink size={18} />

                </button>

                <button className="secondary-btn">

                  GitHub

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          </section>
        ))}






      {/* ==========================
      WATER FOOTPRINT CALCULATOR
      ========================== */}

      {filteredProjects
        .filter((project) => project.id === 4)
        .map((project) => (
          <section
            key={project.id}
            className="project-section right-layout"
          >

            {/* CONTENT */}

            <div className="project-content">

              <span className="project-tag">

                {project.badge}

              </span>

              <h2>

                {project.title}

              </h2>

              <p className="project-description">

                {project.description}

              </p>

              <div className="tech-stack">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="tech-pill"
                  >

                    {tech}

                  </span>

                ))}

              </div>

              <div className="features-grid">

                {project.features.map((feature) => (

                  <div
                    key={feature}
                    className="feature-item"
                  >

                    <CheckCircle
                      size={18}
                      className="feature-icon"
                    />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <div className="project-buttons">

                <button className="primary-btn">

                  Live Demo

                  <ExternalLink size={18} />

                </button>

                <button className="secondary-btn">

                  GitHub

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

            {/* IMAGE */}

            <div className="project-image-wrapper">

              <div className="blur-circle bottom-right"></div>

              <div className="glass-card border-beam image-card">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

              </div>

            </div>

          </section>
        ))}

    </main>






    {/* ==========================
            CTA SECTION
    ========================== */}

    <section className="cta-section">

      <div className="glass-card cta-card">

        <h2>

          Ready to build something amazing?

        </h2>

        <p>

          I'm always excited to collaborate on
          innovative AI, MERN Stack and Mobile
          Application projects.

        </p>

        <div className="cta-buttons">

          <button className="primary-btn">

            Contact Me

            <ArrowRight size={20} />

          </button>

          <a
            href="/resume/Krishnanjaly_Resume.pdf"
            download
            className="secondary-btn"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>


    </div>
  );
}