import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch(() => {
        alert("Something went wrong.");
      });
  };

  return (
    <section id="contact" className="section relative overflow-hidden bg-transparent">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="section-shell relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="section-heading">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradientText">Amazing</span>
          </h2>
          <p className="section-subtitle">I&apos;m always happy to talk about internships, collaborations, research work, and exciting new ideas.</p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ x: -80, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="mb-8 text-3xl font-bold sm:text-4xl">Get In Touch</h3>
            <p className="mb-10 leading-8 text-gray-400">Whether you have an opportunity, research collaboration, internship, freelance work, or simply want to say hello, I&apos;d love to hear from you.</p>

            <div className="space-y-5">
              <div className="glass flex items-center gap-5 rounded-[24px] p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl"><FaEnvelope /></div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-400">krishnanjalys98@gmail.com</p>
                </div>
              </div>

              <div className="glass flex items-center gap-5 rounded-[24px] p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl"><FaPhoneAlt /></div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-gray-400">+91 8075584570</p>
                </div>
              </div>

              <div className="glass flex items-center gap-5 rounded-[24px] p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl"><FaMapMarkerAlt /></div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-gray-400">Kerala, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="https://github.com/Krishnanjaly" target="_blank" rel="noreferrer" className="glass flex h-14 w-14 items-center justify-center rounded-full text-2xl transition hover:bg-blue-600">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/krishnanjaly-s-70734a291" target="_blank" rel="noreferrer" className="glass flex h-14 w-14 items-center justify-center rounded-full text-2xl transition hover:bg-blue-600">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ x: 80, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="glass rounded-[32px] p-8 sm:p-10">
              <h3 className="mb-8 text-3xl font-semibold">Send Me a Message</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="mb-3 block text-gray-300">Full Name</label>
                  <input name="user_name" type="text" placeholder="Enter your name" required className="w-full rounded-2xl border border-white/10 bg-[#111] px-5 py-4 outline-none transition focus:border-blue-500" />
                </div>

                <div>
                  <label className="mb-3 block text-gray-300">Email Address</label>
                  <input name="user_email" type="email" placeholder="example@gmail.com" required className="w-full rounded-2xl border border-white/10 bg-[#111] px-5 py-4 outline-none transition focus:border-blue-500" />
                </div>

                <div>
                  <label className="mb-3 block text-gray-300">Subject</label>
                  <input name="subject" type="text" placeholder="Project / Internship / Collaboration" className="w-full rounded-2xl border border-white/10 bg-[#111] px-5 py-4 outline-none transition focus:border-blue-500" />
                </div>

                <div>
                  <label className="mb-3 block text-gray-300">Message</label>
                  <textarea name="message" rows="6" placeholder="Write your message..." required className="w-full resize-none rounded-2xl border border-white/10 bg-[#111] px-5 py-4 outline-none transition focus:border-blue-500" />
                </div>

                <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-5 py-4 font-semibold shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 hover:scale-[1.01]">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;