import { useState } from "react";
import "./App.css";

const paths = [
  {
    id: "guided",
    title: "Follow a guided path",
    icon: "/images/guided-path.png",
    description: "Step-by-step exploration of IMDA’s core focus areas.",
    projects: [
      { title: "Smart Nation Platforms", summary: "How we’re shaping national digital infrastructure." },
      { title: "AI Policy Lab", summary: "Policy innovation in a rapidly evolving field." }
    ]
  },
  {
    id: "individual",
    title: "Try an individual project",
    icon: "/images/individual-project.png",
    description: "Pick a project and dive into what interests you.",
    projects: [
      { title: "5G Use Case Trials", summary: "Powering autonomous systems and media." },
      { title: "Digital Skills Training", summary: "Workforce transformation programmes in action." }
    ]
  },
  {
    id: "hardware",
    title: "Start with real-world tech",
    icon: "/images/hardware-path.png",
    description: "Explore public sector use of IoT, sensors, and communications tech.",
    projects: [
      { title: "IoT Trials at National Parks", summary: "Nature meets tech in biodiversity tracking." },
      { title: "Public WiFi Infrastructure", summary: "How we support universal access." }
    ]
  }
];

export default function App() {
  const [activePath, setActivePath] = useState(null);

  return (
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Discover Your Path at IMDA</h1>
          <p className="hero-subtitle">
            Explore exciting programmes and projects — and find your fit in Singapore’s digital future.
          </p>
        </div>
      </section>

      <section className="paths-section">
        {!activePath && (
          <div className="path-grid">
            {paths.map((path) => (
              <div
                key={path.id}
                onClick={() => setActivePath(path)}
                className="path-card"
              >
                <img src={path.icon} alt="" className="path-icon" />
                <h2 className="path-title">{path.title}</h2>
                <p className="path-description">{path.description}</p>
              </div>
            ))}
          </div>
        )}

        {activePath && (
          <div className="project-details">
            <button onClick={() => setActivePath(null)} className="back-button">
              ← Back to all paths
            </button>
            <h2 className="project-title">{activePath.title}</h2>
            <ul className="project-list">
              {activePath.projects.map((proj, idx) => (
                <li key={idx} className="project-item">
                  <h3 className="project-name">{proj.title}</h3>
                  <p className="project-summary">{proj.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Interested in joining IMDA or learning more? Reach out to us directly.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="contact-input" />
            <input type="email" placeholder="Your Email" className="contact-input" />
            <textarea placeholder="Your Message" className="contact-textarea"></textarea>
            <button type="submit" className="contact-button">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Infocomm Media Development Authority</p>
      </footer>
    </main>
  );
}
