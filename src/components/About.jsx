import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-left">
          <span className="about-tag">ABOUT ME</span>

          <h1 className="about-title">
            Crafting Intelligent
            <br />
            Digital Experiences
          </h1>

          <p className="about-description">
            I'm a Computer Science Engineering student passionate about
            Full-Stack Development, Artificial Intelligence, and Data Science.
            I enjoy building modern web applications that combine clean design,
            powerful functionality, and meaningful user experiences.
          </p>

          <p className="about-description">
            My work focuses on creating scalable solutions using React,
            Node.js, Express, MongoDB, and AI technologies while constantly
            learning new tools and improving my development skills.
          </p>
        </div>

        <div className="about-right">
          {[
            ["01","Frontend Development","Building responsive and interactive interfaces using React, JavaScript, HTML and CSS with modern UI principles."],
            ["02","Backend Development","Creating REST APIs using Node.js, Express and MongoDB with authentication, database management and secure architecture."],
            ["03","Artificial Intelligence","Developing AI-powered applications including emergency detection, automation, intelligent analytics, and smart decision-making systems."],
            ["04","Data Science","Exploring data visualization, machine learning, statistics, and predictive analytics to transform data into actionable insights."]
          ].map(([n,t,d])=>(
            <div className="about-card" key={n}>
              <span className="card-number">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-card"><h2>15+</h2><span>Projects Built</span></div>
        <div className="stat-card"><h2>10+</h2><span>Technologies</span></div>
        <div className="stat-card"><h2>2+</h2><span>Years Learning</span></div>
        <div className="stat-card"><h2>∞</h2><span>Passion to Learn</span></div>
      </div>
    </section>
  );
};

export default About;
