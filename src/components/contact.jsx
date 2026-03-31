import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="contact-shell" id="contact">
      <motion.div
        className="contact-frame"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className="contact-copy">
          <p className="section-kicker">Hire Me</p>
          <h2>Let&apos;s turn the next idea into a shipped product.</h2>
          <p className="contact-lead">
            If you&apos;re hiring for frontend, full-stack, or product-focused
            engineering work, send me the details and I&apos;ll get back to you.
          </p>

          <div className="contact-highlights">
            <span>React / Next.js</span>
            <span>Node.js / APIs</span>
            <span>Hyderabad / Remote</span>
          </div>
        </div>

        <div className="contact-actions">
          <button className="contact-open-btn" onClick={() => setIsOpen(true)}>
            Open Contact Form
          </button>
          <a
            className="contact-email-link"
            href="mailto:savyaofficial97@gmail.com"
          >
            savyaofficial97@gmail.com
          </a>
        </div>
      </motion.div>

      {isOpen && (
        <div
          className="contact-modal-backdrop"
          onClick={() => setIsOpen(false)}
          role="presentation"
        >
          <motion.div
            className="contact-modal"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="contact-modal-head">
              <div>
                <p className="contact-modal-kicker">Project Inquiry</p>
                <h3>Send your requirements</h3>
              </div>

              <button
                className="contact-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close contact form"
              >
                ×
              </button>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/savyaofficial97@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New portfolio inquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://virtualsavya.netlify.app/#contact"
              />

              <label className="contact-field">
                <span>Name</span>
                <input type="text" name="name" required placeholder="Your name" />
              </label>

              <label className="contact-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                />
              </label>

              <label className="contact-field">
                <span>Company</span>
                <input type="text" name="company" placeholder="Company / Team" />
              </label>

              <label className="contact-field">
                <span>Project Type</span>
                <input
                  type="text"
                  name="project_type"
                  placeholder="Frontend, full-stack, redesign..."
                />
              </label>

              <label className="contact-field contact-field-full">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Share the role, project scope, timeline, or anything useful."
                />
              </label>

              <div className="contact-form-actions">
                <button type="submit" className="contact-submit-btn">
                  Send Inquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;
