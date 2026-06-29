import React, { useEffect, useRef } from "react";
import "./Education.css";

import {
  GraduationCap,
  BookOpen,
  Brain,
  Database,
  Code2,
  Network,
  Cpu,
  BarChart3,
  Terminal,
} from "lucide-react";

export default function Education() {

  const subjects = [

    {
      icon: <BookOpen size={38} />,
      title: "Data Structures",
    },

    {
      icon: <Terminal size={38} />,
      title: "Algorithms",
    },

    {
      icon: <Database size={38} />,
      title: "Database Systems",
    },

    {
      icon: <Cpu size={38} />,
      title: "Operating Systems",
    },

    {
      icon: <Network size={38} />,
      title: "Computer Networks",
    },

    {
      icon: <Code2 size={38} />,
      title: "Software Engineering",
    },

    {
      icon: <Brain size={38} />,
      title: "Artificial Intelligence",
    },

    {
      icon: <BarChart3 size={38} />,
      title: "Statistics",
    },

    {
      icon: <GraduationCap size={38} />,
      title: "Web Technologies",
    },

  ];

  const sliderRef = useRef(null);

  useEffect(() => {

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("active");

          }

        });

      },

      {

        threshold: 0.15,

      }

    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);

  return (

    <section className="education-page" id="education">

      {/* Grid */}

      <div className="edu-grid"></div>

      {/* Noise */}

      <div className="noise-overlay"></div>

      {/* Glow */}

      <div className="edu-glow glow-one"></div>

      <div className="edu-glow glow-two"></div>

      <div className="education-container">

        {/* ==========================
            HERO
        ========================== */}

        <div className="education-hero reveal">

          <span>

            EDUCATION

          </span>

          <h1>

            Education Journey

          </h1>

          <p>

            My academic journey has equipped me with
            strong foundations in

            <strong> Computer Science</strong>,

            <strong> Artificial Intelligence</strong>,

            <strong> Data Science</strong>

            and modern software engineering.

          </p>

        </div>
                {/* ==========================
            TIMELINE
        ========================== */}

        <div className="education-timeline">

          {/* B.Tech */}

          <div className="timeline-item reveal left">

            <div className="timeline-card">

              <div className="timeline-top">

                <span className="year">

                  2023 – Present

                </span>

                <h2>

                  8.74

                </h2>

              </div>

              <h3>

                St. Joseph's College of Engineering
                and Technology, Palai

              </h3>

              <h4>

                Bachelor of Technology
                (Computer Science & Engineering)

              </h4>

              <p>

                Focused on software engineering,
                operating systems,
                algorithms,
                databases,
                artificial intelligence,
                computer networks
                and full stack development.

              </p>

              <div className="tags">

                <span>Data Structures</span>

                <span>Algorithms</span>

                <span>Operating Systems</span>

                <span>AI</span>

                <span>Web Development</span>

              </div>

            </div>

          </div>

                    {/* IIT Madras */}

          <div className="timeline-item reveal right">

            <div className="timeline-card">

              <div className="timeline-top">

                <span className="year">

                  2024 – Present

                </span>

                <h2>

                  6.25

                </h2>

              </div>

              <h3>

                Indian Institute of Technology Madras

              </h3>

              <h4>

                BS in Data Science and Applications

              </h4>

              <p>

                Pursuing interdisciplinary studies in
                Programming,
                Statistics,
                Machine Learning,
                Artificial Intelligence,
                Data Analytics,
                Mathematics
                and Computational Thinking.

              </p>

              <div className="tags">

                <span>Python</span>

                <span>Statistics</span>

                <span>Machine Learning</span>

                <span>Data Science</span>

                <span>Visualization</span>

              </div>

            </div>

          </div>

        </div>





        {/* ==========================
             STATS
        ========================== */}

        <div className="education-stats reveal">

          <div className="stat-box">

            <h2>

              8.74

            </h2>

            <p>

              Current B.Tech CGPA

            </p>

          </div>





          <div className="stat-box">

            <h2>

              6.25

            </h2>

            <p>

              BS CGPA

            </p>

          </div>





          <div className="stat-box">

            <h2>

              2+

            </h2>

            <p>

              Degree Programs

            </p>

          </div>





          <div className="stat-box">

            <h2>

              10+

            </h2>

            <p>

              Core Subjects

            </p>

          </div>

        </div>

                {/* ==========================
            CORE SUBJECTS
        ========================== */}

        <div className="subjects-section reveal">

          <div className="section-title">

            <h2>

              Core Subjects

            </h2>

          </div>

          <div
            className="subjects-slider"
            ref={sliderRef}
          >

            {subjects.map((subject, index) => (

              <div
                className="subject-card"
                key={index}
              >

                <div className="subject-icon">

                  {subject.icon}

                </div>

                <h3>

                  {subject.title}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}