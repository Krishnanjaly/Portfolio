import "./Contact.css";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Handshake,
  Circle,
  Download,
  Send,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const form = useRef();

const [loading, setLoading] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
    .sendForm(
      "service_l26gxrp",
      "template_3tmik4b",
      form.current,
      "zNHHyOgTGPK3hpsZc"
    )
    .then(
      () => {
        alert("✅ Message sent successfully!");

        form.current.reset();

        setLoading(false);
      },
      (error) => {
        console.log(error);

        alert("❌ Failed to send message.");

        setLoading(false);
      }
    );
};

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

          }

        });

      },

      {
        threshold: 0.1,
      }

    );

    document

      .querySelectorAll(".fade-up")

      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);

  return (

    <div className="contact-page">

      {/* Noise Overlay */}

      <div className="noise-overlay"></div>

      {/* ===========================
            NAVBAR
      =========================== */}

      <nav className="navbar">

        <div className="nav-container">

          <h2 className="logo">

            Krishnanjaly S

          </h2>

          <div className="nav-links">

            <a href="/">Home</a>

            <a href="/about">About</a>

            <a href="/skills">Skills</a>

            <a href="/projects">Projects</a>

            <a
              href="/contact"
              className="active"
            >
              Contact
            </a>

          </div>

          <a
  href="/resume/Krishnanjaly_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  Resume
</a>

        </div>

      </nav>





      <main className="contact-main">

        {/* ===========================
              HERO
        =========================== */}

        <section className="hero fade-up">

          <h1>

            Let's Build Something

            <br />

            <span>Amazing Together</span>

          </h1>

          <p>

            Have a project in mind or simply want
            to connect? I'm always open to
            discussing AI, Full Stack Development,
            Mobile Applications, collaborations and
            exciting opportunities.

          </p>

        </section>







        {/* ===========================
            QUICK INFO
        =========================== */}

        <section className="quick-info fade-up">

          <div className="info-card">

            <div className="icon-box">

              <Clock size={28} />

            </div>

            <div>

              <small>

                RESPONSE TIME

              </small>

              <h3>

                {"<"} 24 Hours

              </h3>

            </div>

          </div>





          <div className="info-card">

            <div className="icon-box">

              <Handshake size={28} />

            </div>

            <div>

              <small>

                OPEN TO

              </small>

              <h3>

                Collaborations

              </h3>

            </div>

          </div>





          <div className="info-card">

            <div className="icon-box green">

              <Circle
                size={18}
                fill="currentColor"
              />

            </div>

            <div>

              <small>

                STATUS

              </small>

              <h3>

                Available

              </h3>

            </div>

          </div>

        </section>





        {/* ===========================
            CONTACT GRID
        =========================== */}

        <section className="contact-grid">

                    {/* ==========================
                LEFT COLUMN
          ========================== */}

          <div className="contact-left fade-up">

            <h2>

              Get In Touch

            </h2>

            {/* Email */}

            <a
              href="mailto:krishnanjalys98@gmail.com"
              className="contact-card"
            >

              <div className="contact-icon">

                <Mail size={24} />

              </div>

              <div>

                <small>

                  Email Me

                </small>

                <h4>

                  krishnanjalys98@gmail.com

                </h4>

              </div>

            </a>





            {/* Phone */}

            <a
              href="tel:+918075584570"
              className="contact-card"
            >

              <div className="contact-icon">

                <Phone size={24} />

              </div>

              <div>

                <small>

                  Call Me

                </small>

                <h4>

                  +91 8075584570

                </h4>

              </div>

            </a>





            {/* Location */}

            <div className="contact-card">

              <div className="contact-icon">

                <MapPin size={24} />

              </div>

              <div>

                <small>

                  Location

                </small>

                <h4>

                  Kerala, India

                </h4>

              </div>

            </div>





            {/* Social */}

            <div className="social-grid">

              <a
                href="https://www.linkedin.com/in/krishnanjaly-s-70734a291/"
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >

                <ArrowRight size={30} />

                <span>

                  LinkedIn

                </span>

              </a>





              <a
                href="https://github.com/Krishnanjaly"
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >

                <ArrowRight size={30} />

                <span>

                  GitHub

                </span>

              </a>

            </div>





            {/* Resume */}

            <a
            href="/resume/Krishnanjaly_Resume.pdf"
            download
            className="resume-download"
          >
            Download Resume
          </a>





            {/* Status */}

            <div className="availability">

              <span className="pulse-dot"></span>

              <p>

                Available for Freelance &
                Full-Time Opportunities

              </p>

            </div>

          </div>









          {/* ==========================
               RIGHT COLUMN
          ========================== */}

          <div className="contact-right fade-up">

            <div className="glass-form">

              <h2>

                Send Me A Message

              </h2>

              <form ref={form} onSubmit={sendEmail}>

                <div className="form-row">

                <div className="input-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                  />

                </div>

                <div className="input-group">

                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    required
                  />

                </div>

              </div>

              <div className="input-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                />

              </div>

              <div className="input-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Tell me about your project..."
                  required
                />

              </div>

                <button
                    type="submit"
                    className="send-btn"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}

                    <Send size={20} />
                  </button>

              </form>

            </div>

          </div>

        </section>

                {/* ==========================
              WORLD SECTION
        ========================== */}

        <section className="world-section fade-up">

          <div className="glass-world">

            <div className="world-content">

              <h2>

                Let's Connect Worldwide

              </h2>

              <p>

                Currently based in Kerala, India,
                but always excited to collaborate
                with clients, startups and teams
                around the world.

              </p>

            </div>

            <div className="world-map">

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR0byIPG_Y8dNCaRRDyXYU1Mr-DBF6fA5Y1fkGT4D_cSb9ZhfR_ALe2C4HGDNpWeXoudhkHaX95OWOQfzpzVnQcuOJNhazF0hPr3dXGUGmKAKl2efpQW3IntXYk-17gg0yRhBY55demlyKxsWbuuJJibsHSuXgKMCtBtf5fGIJJiB1blO9OFCYODU1lYFr533rwFIKofj7bPYNkh89KOcLpNZBPFlW5oOmswyaHCioWat-TshnTMxHaZ6t5jfXbnm3klN_NlXnZITT"
                alt="World Map"
              />

              <div className="map-pulse"></div>

            </div>

          </div>

        </section>







        {/* ==========================
                QUOTE
        ========================== */}

        <section className="quote-section fade-up">

          <h2>

            "Great software begins with

            <span>

              {" "}
              great conversations

            </span>

            ."

          </h2>

        </section>







        {/* ==========================
               CTA
        ========================== */}

        <section className="cta-banner fade-up">

          <div className="glass-cta">

            <h2>

              Ready to Build Something Together?

            </h2>

            <div className="cta-buttons">

              <button className="hire-btn">

                Hire Me

              </button>

              <button className="project-btn">

                View Projects

              </button>

            </div>

          </div>

        </section>

      </main>








      {/* ==========================
              FOOTER
      ========================== */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-logo">

            <h2>

              Krishnanjaly S

            </h2>

          </div>

          <div className="footer-links">

            <a
              href="https://www.linkedin.com/in/krishnanjaly-s-70734a291/"
              target="_blank"
              rel="noreferrer"
            >

              LinkedIn

            </a>

            <a
              href="https://github.com/Krishnanjaly"
              target="_blank"
              rel="noreferrer"
            >

              GitHub

            </a>

            <a
              href="mailto:krishnanjalys98@gmail.com"
            >

              Email

            </a>

          </div>

        </div>

        <div className="footer-bottom">

          © {new Date().getFullYear()} Krishnanjaly S.
          All rights reserved.

        </div>

      </footer>

    </div>

  );

}