import React from "react";
import "./Education.css";
import {
  School,
  Star,
  TrendingUp,
  AllInclusive,
} from "@mui/icons-material";

const Education = () => {
  return (
    <section className="education-section" id="education">

      {/* Heading */}

      <div className="education-heading">
        <span className="education-subtitle">
          ACADEMIC TRAJECTORY
        </span>

        <h2>Education Journey</h2>
      </div>

      {/* Timeline */}

      <div className="timeline">

        <div className="timeline-line"></div>

        {/* =========================
            FIRST CARD
        ========================== */}

        <div className="timeline-item">

          <div className="timeline-left">

            <h3>B.Tech in Computer Science & Engineering</h3>

            <span>2023 - Present</span>

          </div>

          <div className="timeline-node"></div>

          <div className="timeline-right glass-card">

            <div className="mobile-title">

              <h3>B.Tech in Computer Science & Engineering</h3>

              <span>2023 - Present</span>

            </div>

            <p className="college">

              <School />

              St. Joseph's College of Engineering & Technology, Palai

            </p>

            <p className="description">

              Pursuing a Bachelor's degree in Computer Science &
              Engineering with a strong focus on software engineering,
              algorithms, operating systems, computer networks and
              full-stack development. Actively involved in building
              AI-powered applications and modern web technologies.

            </p>

            <div className="highlight">

              <Star />

              CGPA : 8.54

            </div>

          </div>

        </div>

        {/* =========================
            SECOND CARD
        ========================== */}

        <div className="timeline-item reverse">

          <div className="timeline-left glass-card">

            <div className="mobile-title">

              <h3>BS in Data Science & Applications</h3>

              <span>2024 - Present</span>

            </div>

            <p className="college">

              <School />

              IIT Madras

            </p>

            <p className="description">

              Simultaneously pursuing the BS Degree in Data Science &
              Applications offered by IIT Madras, specializing in
              machine learning, statistics, Python programming,
              data visualization and artificial intelligence.

            </p>

            <div className="highlight">

              Pursuing Excellence

              <TrendingUp />

            </div>

          </div>

          <div className="timeline-node"></div>

          <div className="timeline-right desktop-title">

            <h3>BS in Data Science & Applications</h3>

            <span>2024 - Present</span>

          </div>

        </div>

        {/* Bottom */}

        <div className="timeline-footer">

          <div className="footer-card">

            <AllInclusive />

            <span>

              Continuous Learning & Research Focused

            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;