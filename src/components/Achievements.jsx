import React, { useEffect } from "react";
import "./Achievements.css";

import {
  Award,
  GraduationCap,
  ShieldCheck,
  Brain,
  Code2,
  Factory,
} from "lucide-react";

export default function Achievements() {

  const certifications = [

    {
      title: "Google Data Analytics",
      issuer: "Google",
      icon: <GraduationCap size={32} />,
      description:
        "Professional Certificate covering SQL, R, Tableau, spreadsheets, data visualization and the complete analytics workflow.",
      badge: "Professional Certificate",
    },

    {
      title: "Privacy & Online Media",
      issuer: "NPTEL / SWAYAM",
      icon: <ShieldCheck size={32} />,
      description:
        "Elite certification focused on privacy, online social media security, cyber threats and digital identity.",
      badge: "78% Score",
    },

    {
      title: "Fundamentals of AI",
      issuer: "NPTEL",
      icon: <Brain size={32} />,
      description:
        "Artificial Intelligence concepts including search algorithms, reasoning, intelligent agents and knowledge representation.",
      badge: "78% Score",
    },

    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      icon: <Code2 size={32} />,
      description:
        "Scientific computing using Python, NumPy, Pandas, Matplotlib and data analysis techniques.",
      badge: "63% Score",
    },

    {
      title: "Industry 4.0 & IIoT",
      issuer: "NPTEL",
      icon: <Factory size={32} />,
      description:
        "Industrial Internet of Things, smart manufacturing, automation and Industry 4.0 technologies.",
      badge: "68% Score",
    },

    {
      title: "Programming Foundation",
      issuer: "IIT Madras",
      icon: <Award size={32} />,
      description:
        "Foundation level in Programming and Data Science from IIT Madras with strong algorithmic thinking.",
      badge: "Foundation Level",
    },

  ];

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

    <section className="achievements-page" id="achievements">

      <div className="achievement-grid"></div>

      <div className="noise-overlay"></div>

      <div className="achievement-glow glow-left"></div>

      <div className="achievement-glow glow-right"></div>

      <div className="achievements-container">

        {/* ======================
            HERO
        ====================== */}

        <div className="achievement-hero reveal">

          <span>

            VERIFIED ACHIEVEMENTS

          </span>

          <h1>

            Certifications

            <span> & Milestones</span>

          </h1>

          <p>

            A journey of continuous learning and
            professional growth through industry
            certifications, academic excellence,
            artificial intelligence,
            full stack development
            and data science.

          </p>

        </div>

                {/* ======================
            CERTIFICATIONS
        ====================== */}

        <div className="certifications-section reveal">

          <div className="section-heading">

            <h2>

              Verified Credentials

            </h2>

            <p>

              Accredited by Google, NPTEL & IIT Madras

            </p>

          </div>

          <div className="certification-grid">

            {certifications.map((certificate, index) => (

              <div
                className="certificate-card"
                key={index}
              >

                <div className="certificate-icon">

                  {certificate.icon}

                </div>

                <div className="certificate-content">

                  <div className="certificate-top">

                    <h3>

                      {certificate.title}

                    </h3>

                    <span className="certificate-badge">

                      {certificate.badge}

                    </span>

                  </div>

                  <p>

                    {certificate.description}

                  </p>

                  <div className="certificate-footer">

                    <span>

                      {certificate.issuer}

                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}