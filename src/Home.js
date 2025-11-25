import React, { useState } from "react";
import "./App.css";

function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="about-section">
      {/* Portfolio Photo */}
      <img
        src={process.env.PUBLIC_URL + "/my-photo.jpg"}
        alt="Portfolio"
        className="portfolio-photo-box"
      />

      <h2>About Myself</h2>
      <div className="about-card">
        <h3>John Daryl, Zarsuela</h3>
        <p>
          Enthusiastic 3rd-year student pursuing a <b>Bachelor of Science in Computer Science</b> at Pamantasan ng Cabuyao.
        </p>
        <p>
          Passionate about building web applications and growing skills in frontend development, design, and software engineering.
        </p>
        <p>
          Interested in problem-solving, learning new technologies, and collaborating on innovative projects.
        </p>
        <p>
          Current focus: mastering React, building useful web projects, and exploring tech communities.
        </p>
        <p>
          <i>"Code, connect, and create with curiosity."</i>
        </p>
      </div>
      {/* Contact Me Button */}
      <button
        className="contact-button"
        onClick={() => setShowContact(!showContact)}
      >
        Contact Me
      </button>
      {showContact && (
        <div className="contact-info">
          <p>Phone: 0991-840-2506</p>
          <p>Phone: 0991-121-5017</p>
          <p>Email: zarsuela0010@gmail.com</p>
        </div>
      )}
    </section>
  );
}
export default Home;
