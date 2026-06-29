import React, { useEffect } from "react";
import "./Skills.css";
import {
  Terminal,
  Code,
  Storage,
  Web,
  Dns,
  Api,
  Psychology,
  Build,
} from "@mui/icons-material";

const programming = [
  { icon: <Terminal />, name: "Python", percent: 95 },
  { icon: <Code />, name: "Java", percent: 85 },
  { icon: <Code />, name: "JavaScript", percent: 90 },
  { icon: <Storage />, name: "SQL", percent: 85 },
];

const frontend = [
  { icon: <Web />, name: "React", percent: 90 },
  { icon: <Web />, name: "HTML5", percent: 95 },
  { icon: <Web />, name: "CSS3", percent: 92 },
  { icon: <Web />, name: "Tailwind CSS", percent: 95 },
];

const backend = [
  { icon: <Dns />, name: "Node.js", percent: 88 },
  { icon: <Api />, name: "Express.js", percent: 85 },
  { icon: <Api />, name: "FastAPI", percent: 75 },
];

const database = [
  { icon: <Storage />, name: "MongoDB", percent: 82 },
  { icon: <Storage />, name: "MySQL", percent: 85 },
];

const ai = [
  { icon: <Psychology />, name: "TensorFlow", percent: 78 },
  { icon: <Psychology />, name: "PyTorch", percent: 80 },
  { icon: <Psychology />, name: "OpenAI APIs", percent: 90 },
];

const tools = [
  { icon: <Build />, name: "Git", percent: 95 },
  { icon: <Build />, name: "GitHub", percent: 95 },
  { icon: <Build />, name: "Docker", percent: 70 },
];

const categories = [
  {
    title: "Programming",
    data: programming,
  },
  {
    title: "Frontend",
    data: frontend,
  },
  {
    title: "Backend",
    data: backend,
  },
  {
    title: "Databases",
    data: database,
  },
  {
    title: "Artificial Intelligence",
    data: ai,
  },
  {
    title: "Tools",
    data: tools,
  },
];

const stats = [
  {
    value: "20+",
    title: "Technologies",
  },
  {
    value: "45+",
    title: "Projects",
  },
  {
    value: "10+",
    title: "Certifications",
  },
  {
    value: "3+",
    title: "Years Learning",
  },
];

const Skills = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            entry.target
              .querySelectorAll(".progress-fill")
              .forEach((bar) => {
                bar.style.width = bar.dataset.percent + "%";
              });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section">

      <div className="skills-header">

        <span className="section-tag">
          EXPERTISE STACK
        </span>

        <h1>
          The Architecture of
          <span> Intelligence.</span>
        </h1>

      </div>

      <div className="skills-grid">

        {categories.map((category) => (
          <div className="skill-card" key={category.title}>

            <h2>{category.title}</h2>

            <div className="skill-list">

              {category.data.map((skill) => (
                <div
                  className="skill-item"
                  key={skill.name}
                >
                  <div className="skill-info">

                    <div className="skill-left">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>

                    <span className="skill-percent">
                      {skill.percent}%
                    </span>

                  </div>

                  <div className="progress-track">

                    <div
                      className="progress-fill"
                      data-percent={skill.percent}
                    ></div>

                  </div>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

      <div className="stats-grid">

        {stats.map((item) => (
          <div className="stat-card" key={item.title}>

            <h2>{item.value}</h2>

            <p>{item.title}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;