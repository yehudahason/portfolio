import { useEffect, useMemo, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { projects, type Category, type Project } from "./projects";

const categories = [
  "All Projects",
  "Web App",
  "Frontend",
  "Landing Page",
  "Full Stack",
  // "E-commerce",
] as const;
const social = {
  github: "https://github.com/yehudahason",
  linkedin: "https://www.linkedin.com/in/yehuda-hason-974aa62ab/",
  email: "yehudaxt@gmail.com",
};

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "HTML & CSS",
  "Go",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Supabase",
  "Git",
  "Docker",
  "Figma",
  "Vps",
  "Linux",
];
export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      return saved
        ? saved === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return true;
    }
  });
  const [category, setCategory] =
    useState<(typeof categories)[number]>("All Projects");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);
  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (category === "All Projects" || p.category === category) &&
          `${p.title} ${p.description} ${p.stack.join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase().trim()),
      ),
    [category, query],
  );
  const displayed =
    showAll || category !== "All Projects" || query
      ? filtered
      : filtered.slice(0, 6);
  function selectCategory(c: (typeof categories)[number]) {
    setCategory(c);
    setShowAll(false);
  }
  function closeMobile() {
    setMobileOpen(false);
  }
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMobile}>
            <span className="brand-symbol">
              Y<span>.</span>
            </span>
            <span className="brand-separator" />
            <span className="brand-label">
              Yehuda Hason
              <br />
              portfolio
            </span>
          </a>
          <nav
            className={`nav-links ${mobileOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            <a onClick={closeMobile} href="#home">
              Home
            </a>
            <a onClick={closeMobile} href="#work">
              Projects
            </a>
            <a onClick={closeMobile} href="#about">
              About
            </a>
            <a onClick={closeMobile} href="#contact">
              Contact
            </a>
          </nav>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setDark((d) => !d)}
              aria-label={
                dark ? "Switch to light theme" : "Switch to dark theme"
              }
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" className="nav-contact">
              Let's talk <ArrowUpRight size={15} />
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> AVAILABLE FOR FREELANCE PROJECTS
            </div>
            <h1>
              Building digital
              <br />
              <span>experiences</span>
              <br />
              that matter<span className="period">.</span>
            </h1>
            <p className="hero-intro">
              Hey, I'm <strong>Yehuda</strong> — a web developer turning complex
              ideas into beautiful, high-performing websites and applications.
            </p>
            <div className="hero-buttons">
              <a href="#work" className="primary-btn">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a href="#about" className="secondary-btn">
                More about me <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-social">
              <span>FIND ME ON</span>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${social.email}`} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-glow" />
            <div className="visual-card code-card">
              <div className="code-card-head">
                <span className="code-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>developer.tsx</span>
                <Code2 size={15} />
              </div>
              <div className="code-lines">
                <div>
                  <em>const</em> developer = {"{"}
                </div>
                <div className="indent">
                  name: <strong>'Yehuda Hason'</strong>,
                </div>
                <div className="indent">
                  role: <strong>'Web Developer'</strong>,
                </div>
                <div className="indent">
                  passion: <strong>'Building things'</strong>,
                </div>
                {/* <div className="indent">
                  projects: <b>40</b>,
                </div> */}
                <div>
                  <span>{"}"}</span>;
                </div>
                <div className="code-spacer" />
                <div>
                  <em>developer</em>.build(<strong>'awesome'</strong>);
                </div>
              </div>
            </div>
            <div className="float-chip top-chip">
              <span className="chip-icon">
                <Globe2 size={19} />
              </span>
              {/* <span>
                
                <small>Built & launched</small>
              </span> */}
            </div>
            <div className="float-chip bottom-chip">
              <span className="chip-icon check-icon">
                <Check size={18} />
              </span>
              <span>
                <strong>100% responsive</strong>
                <small>Every screen, every time</small>
              </span>
            </div>
          </div>
        </section>

        <section className="stats-wrap">
          <div className="container stats">
            {/* <div>
              <p>Projects delivered</p>
            </div> */}
            <span className="stat-separator" />
            <div>
              <strong>
                {skills.length}
                <span>+</span>
              </strong>
              <p>Technologies used</p>
            </div>
            <span className="stat-separator" />
            <div>
              <strong>
                100<span>%</span>
              </strong>
              <p>Passion for the craft</p>
            </div>
            <span className="stat-separator" />
            <div>
              <strong>∞</strong>
              <p>Ideas to bring to life</p>
            </div>
          </div>
        </section>

        <section id="work" className="section work-section container">
          <div className="section-kicker">
            <span>01 / SELECTED WORK</span>
            <span className="section-line" />
          </div>
          <div className="section-heading">
            <div>
              <h2>
                My latest <span>projects.</span>
              </h2>
              <p>
                A collection of websites and web applications — each built with
                care, precision, and purpose.
              </p>
            </div>
            <div className="project-count">
              <Layers3 size={19} />
              {projects.length} PROJECTS
            </div>
          </div>
          <div className="work-toolbar">
            <div className="filters" role="group" aria-label="Project category">
              {categories.map((c) => (
                <button
                  className={category === c ? "active" : ""}
                  onClick={() => selectCategory(c)}
                  key={c}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="search-box">
              <Search size={17} />
              <input
                type="search"
                placeholder="Search projects..."
                aria-label="Search projects"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>
          {displayed.length ? (
            <div className="projects-grid">
              {displayed.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              No projects found. Try another keyword or category.
            </div>
          )}
          {!showAll &&
            category === "All Projects" &&
            !query &&
            filtered.length > 6 && (
              <button className="view-all" onClick={() => setShowAll(true)}>
                View all {projects.length} projects <ArrowRight size={19} />
              </button>
            )}
          {showAll && category === "All Projects" && !query && (
            <button
              className="view-all"
              onClick={() => {
                setShowAll(false);
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Show less <ArrowDown className="rotate-180" size={18} />
            </button>
          )}
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <div className="section-kicker">
              <span>02 / ABOUT ME</span>
              <span className="section-line" />
            </div>
            <div className="about-grid">
              <div>
                <h2>
                  Code is my craft.
                  <br />
                  <span>Creativity is my fuel.</span>
                </h2>
                <div className="about-decoration">
                  <span>&lt;/&gt;</span>
                </div>
              </div>
              <div className="about-copy">
                <p>
                  I'm a passionate web developer who loves creating fast,
                  accessible and visually engaging digital experiences. From
                  clean frontends to powerful backend systems, I enjoy every
                  part of bringing a product to life.
                </p>
                <p>
                  I focus on writing maintainable code, thoughtful UI design,
                  and building experiences that work seamlessly across devices.
                </p>
                <h3>MY TOOLBOX</h3>
                <div className="skills">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section container">
          <div className="contact-panel">
            <div className="contact-glow" />
            <div className="section-kicker">03 / GET IN TOUCH</div>
            <h2>
              Have a project
              <br />
              in <em>mind?</em>
            </h2>
            <p>
              Let's turn your next big idea into something exceptional. I'm
              always open to discussing new projects and opportunities.
            </p>
            <a href={`mailto:${social.email}`} className="primary-btn">
              Let's build something <ArrowUpRight size={19} />
            </a>
            <div className="contact-bottom">
              <span>HAVE AN IDEA? LET'S MAKE IT REAL.</span>
              <ArrowUpRight size={25} />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <div className="footer-brand">
          <span>
            Y<span>.</span>
          </span>
          <small>Designed & developed with care.</small>
        </div>
        <p>© {new Date().getFullYear()} Yehuda Hason. All rights reserved.</p>
        <div className="footer-links">
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
