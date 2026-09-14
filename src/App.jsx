import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  Code2,
  Database,
  ExternalLink,
  GitFork,
  Globe2,
  Mail,
  Menu,
  Network,
  Send,
  Sparkles,
  X,
} from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    number: '01',
    category: 'AGENTIC SYSTEMS',
    title: 'AI-Driven Healthcare Diagnostic Loop',
    subtitle: 'Autonomous P2P Multi-Agent Diagnostic Platform',
    description: 'Built an autonomous peer-to-peer multi-agent healthcare diagnostic platform with a live motion graph UI, enabling real-time collaborative diagnosis across distributed agents.',
    stack: ['Python', 'Multi-agent', 'P2P'],
    accent: 'gold',
    icon: Network,
    github: 'https://github.com/hailemichaeltesfsye-hue/ai-driven-healthcare-diagnostic-loop',
    demos: [{ label: 'Live Demo', href: 'https://ai-driven-healthcare-diagnostic-loop-izbdsqfouzvc2cvanza7ry.streamlit.app/' }],
  },
  {
    number: '02',
    category: 'SECURITY / AGENTIC SYSTEMS',
    title: 'SOC Agent Workforce',
    subtitle: 'Automated Security Operations Center Workflows',
    description: 'Developed a multi-agent system automating Security Operations Center (SOC) workflows, coordinating specialized agents to monitor, detect, and respond to security events.',
    stack: ['Python', 'Multi-agent', 'Automation'],
    accent: 'mint',
    icon: CircleDot,
    github: 'https://github.com/hailemichaeltesfsye-hue/soc-agent-workforce',
    demos: [{ label: 'Live Demo', href: 'https://soc-agent-workforce-2ltjjgpd7uuoyz3pnhpvcu.streamlit.app/' }],
  },
  {
    number: '03',
    category: 'AGENTIC SYSTEMS',
    title: 'AI Product Launch Team',
    subtitle: 'Hierarchical Multi-Agent Collaboration Network',
    description: 'Engineered an autonomous multi-agent simulation of a corporate workflow with a live hierarchical agent dashboard, orchestrating marketing, PM, and tech-lead agents with LangGraph.',
    stack: ['Python', 'LangGraph', 'Multi-agent'],
    accent: 'coral',
    icon: Code2,
    github: 'https://github.com/hailemichaeltesfsye-hue/ai-product-launch-team',
    demos: [{ label: 'Live Demo', href: 'https://ai-appuct-launch-team-7vhjefw6zztlwx2oc2a6fz.streamlit.app/' }],
  },
  {
    number: '04',
    category: 'FULL-STACK ARCHITECTURE',
    title: 'Amazon & Netflix Clones',
    subtitle: 'High-Fidelity Web Industry Architectures',
    description: 'Built production-grade web replicas mimicking Netflix and Amazon user experiences, integrating REST APIs, Stripe payments, and a secure MySQL database for dynamic authentication and streaming.',
    stack: ['React', 'Node.js', 'MySQL'],
    accent: 'lavender',
    icon: Globe2,
    github: 'https://github.com/hailemichaeltesfsye-hue/amazon-clone-backend',
    demos: [
      { label: 'Amazon Demo', href: 'https://amazon-clone-frontend-mxye-pwtq42tun-coremind2.vercel.app/' },
      { label: 'Netflix Demo', href: 'https://hailemichaeltesfsye-hue.github.io/Netflix_Clone_2026A/' },
    ],
  },
]

const skillGroups = [
  { label: 'CORE DEVELOPMENT', icon: Code2, items: ['JavaScript', 'React.js', 'Node.js', 'Python (Programming Language)', 'Full-Stack Development', 'REST APIs'] },
  { label: 'DATABASES', icon: Database, items: ['MySQL'] },
  { label: 'AGENTIC AI & LLM', icon: Network, items: ['Agentic AI Development', 'Large Language Models (LLM)', 'Prompt Engineering', 'LangChain', 'Multi-agent Systems'] },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hailemichael-tesfaye-2b7114401/', icon: Network },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61584502285183', icon: Globe2 },
  { label: 'Gmail', href: 'mailto:hailemichaeltesfsye@gmail.com', icon: Mail },
  { label: 'Telegram', href: 'https://t.me/hailemicha85330', icon: Send },
]

const heroParticles = [
  { left: '20%', top: '18%', size: 6, delay: '0s', duration: '5.5s' },
  { left: '30%', top: '62%', size: 8, delay: '1.1s', duration: '6.2s' },
  { left: '44%', top: '14%', size: 5, delay: '0.8s', duration: '4.9s' },
  { left: '56%', top: '28%', size: 7, delay: '1.7s', duration: '6.8s' },
  { left: '74%', top: '20%', size: 6, delay: '2.1s', duration: '5.4s' },
  { left: '82%', top: '48%', size: 9, delay: '0.4s', duration: '7.1s' },
  { left: '68%', top: '70%', size: 7, delay: '2.6s', duration: '6.5s' },
  { left: '50%', top: '78%', size: 5, delay: '1.3s', duration: '5.8s' },
  { left: '18%', top: '72%', size: 8, delay: '2.9s', duration: '7.4s' },
  { left: '12%', top: '46%', size: 5, delay: '0.7s', duration: '5.1s' },
  { left: '86%', top: '76%', size: 6, delay: '1.8s', duration: '6.9s' },
  { left: '34%', top: '82%', size: 6, delay: '3.2s', duration: '6.1s' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" aria-label="Home">
            <span className="brand-mark">HM</span>
            <span className="brand-text">HTM<span>.</span></span>
          </a>
          <a className="nav-linkedin" href="https://www.linkedin.com/in/hailemichael-tesfaye-2b7114401/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <span>in</span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let's connect <ArrowUpRight size={16} /></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> Available for thoughtful collaborations</div>
            <h1>Building the <em>next</em><br />layer of intelligence.</h1>
            <p className="hero-subtitle">I&apos;m Hailemichael Tesfaye Mekuria, a <strong>Certified Agentic AI Engineer</strong> & Full-Stack Developer. I bridge robust web applications with cutting-edge agentic AI architectures.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View my projects <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Contact me <Mail size={17} /></a>
            </div>
            <div className="hero-meta"><span>Based in Ethiopia</span><span className="meta-line" /><span>Working globally</span></div>
          </div>
          <div className="hero-visual reveal delay-one" aria-label="Agentic systems visualization">
            <div className="visual-grid" />
            <div className="orbit orbit-outer"><span className="orbit-node node-one" /><span className="orbit-node node-two" /></div>
            <div className="orbit orbit-inner"><span className="orbit-node node-three" /></div>
            <div className="beam-ring" aria-hidden="true" />
            <div className="hero-visual-photo-wrap">
              <div className="hero-visual-photo-ring" aria-hidden="true" />
              <div className="hero-visual-photo">
                <img src="/profile.jpg" alt="Hailemichael Tesfaye Mekuria" />
              </div>
            </div>
            {heroParticles.map((particle, index) => (
              <span
                key={`${particle.left}-${particle.top}-${index}`}
                className={`magic-particle particle-${(index % 6) + 1}${index % 2 === 0 ? '' : ' mint'}`}
                style={{
                  left: particle.left,
                  top: particle.top,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                }}
              />
            ))}
            <div className="signal signal-one">/ orchestrate</div>
            <div className="signal signal-two">/ learn</div>
            <div className="signal signal-three">/ evolve</div>
            <div className="visual-caption"><span>01</span> Systems that think in motion</div>
          </div>
        </section>

        <section className="trust-strip"><div className="container trust-inner"><span className="trust-label">Currently exploring</span><span>Autonomous workflows</span><span>Multi-agent systems</span><span>Human-centered products</span></div></section>

        <section id="work" className="section container work-section">
          <div className="section-heading"><div><span className="section-kicker">Selected work / 2024—26</span><h2>Ideas made <em>operational.</em></h2></div><p>From autonomous research loops to full-stack platforms, I build systems where complexity becomes a useful experience.</p></div>
          <div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        </section>

        <section id="capabilities" className="capabilities-band"><div className="container capabilities-layout"><div className="cap-intro"><span className="section-kicker">The toolkit / 01</span><h2>Fluent across<br /><em>the stack.</em></h2><p>The best systems emerge at the intersection of disciplines. These are the tools I use to find that intersection.</p></div><div className="skills-list">{skillGroups.map((group) => <div className="skill-group" key={group.label}><div className="skill-heading"><group.icon size={19} /><span>{group.label}</span></div><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

        <section id="about" className="section container about-section"><div className="about-label"><span className="section-kicker">Experience / 02</span><div className="vertical-line" /></div><div className="about-content"><div className="about-top"><h2>Leading with<br /><em>curiosity.</em></h2><div className="credential"><div className="credential-icon"><Check size={19} /></div><div><span className="credential-label">Certified / August 28, 2026</span><strong>Certificate of Completion in Agentic Engineering</strong><small>NSK AI / Zerra Build</small></div></div></div><div className="experience-row"><span className="exp-date">2026 — PRESENT</span><div><h3>Campus Lead Candidate & Udara Ambassador</h3><p className="exp-org">The Udara Project <span>/ NSK AI · Zerra Build</span></p><p>Orchestrated a tech community strategy to empower campus students with Agentic AI skills. Represented Wollo University in international technical lead selection and coordinated technical awareness campaigns.</p></div></div></div></section>

        <section id="contact" className="contact-band">
          <div className="container contact-inner-simple">
            <div className="contact-intro"><span className="section-kicker">Have a complex idea?</span><h2>Let&apos;s make it<br /><em>intelligent.</em></h2><p>Reach out through any of the channels below — I usually reply within a day.</p></div>
            <div className="contact-icons">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-icon-card"
                  >
                    <Icon size={22} />
                    <span>{social.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container"><span>© 2026 Hailemichael Tesfaye Mekuria</span><span>Designed & engineered with intent.</span><div className="socials"><a href="https://github.com/hailemichaeltesfsye-hue" aria-label="GitHub" target="_blank" rel="noreferrer"><Code2 size={17} /></a><a href="https://www.linkedin.com/in/hailemichael-tesfaye-2b7114401/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Network size={17} /></a><a href="#top" aria-label="Back to top"><ChevronDown size={17} className="back-top" /></a></div></footer>
    </div>
  )
}

function ProjectCard({ project }) {
  const Icon = project.icon
  return (
    <div className={`project-card ${project.accent}`}>
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <Icon size={20} />
        <span className="project-category">{project.category}</span>
        <Code2 size={16} style={{ marginLeft: 'auto' }} />
      </div>
      <div className="project-art">
        <div className="art-lines" />
        <div className="art-icon"><Icon size={38} strokeWidth={1.2} /></div>
        <span className="art-label">{project.number} / 04</span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <h4>{project.subtitle}</h4>
        <p>{project.description}</p>
        <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
            <GitFork size={14} /> Code
          </a>
          {project.demos?.map((demo) => (
            <a key={demo.href} href={demo.href} target="_blank" rel="noreferrer" className="project-link">
              <ExternalLink size={14} /> {demo.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App