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
  MessageSquare,
  Network,
  Send,
  Sparkles,
  Tv,
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
    github: 'https://github.com',
    demos: [{ label: 'Live Demo', href: 'https://streamlit.app' }],
  },
  {
    number: '02',
    category: 'DIGITAL RIGHTS / AGENTIC SYSTEMS',
    title: 'NetsaGuard AI',
    subtitle: 'Privacy-Preserving Multilingual Agentic Content Safety Hub',
    description: 'Africa-first digital rights defense platform engineered to counter online harassment and platform throttling. Implements stateful multi-agent LangGraph orchestration with localized PII/PHI regex sanitization.',
    stack: ['React', 'LangGraph', 'Groq API', 'ChromaDB', 'FastMCP'],
    accent: 'mint',
    icon: Shield,
    github: 'https://github.com/hailemichaeltesfsye-hue/netsaguard-ai',
    demos: [{ label: 'Live Demo', href: 'https://netsaguard-dxa6r43es-coremind2.vercel.app/' }],
  },
  {
    number: '03',
    category: 'SMART CITIES / DIGITAL TWIN',
    title: 'NEXUS: The Living City',
    subtitle: 'Autonomous AI Digital Twin for Ethiopia',
    description: 'An autonomous urban monitoring and orchestration digital twin mimicking real-time growth, energy grid balancing, and resource optimization via parallel worker agent nodes.',
    stack: ['React HUD', 'Node.js', 'LangGraph', 'Grok API'],
    accent: 'coral',
    icon: Building2,
    github: 'https://github.com/hailemichaeltesfsye-hue/-nexus-the-living-city',
    demos: [{ label: 'Live Demo', href: 'https://nexus-the-living-city.vercel.app/' }],
  },
  {
    number: '04',
    category: 'FULL-STACK ARCHITECTURE',
    title: 'Amazon Clone',
    subtitle: 'High-Fidelity E-Commerce Architecture',
    description: 'Built a production-grade web replica mimicking the Amazon user experience, integrating REST APIs, Stripe payments, and a secure MySQL database for dynamic authentication and checkout.',
    stack: ['React', 'Node.js', 'MySQL'],
    accent: 'lavender',
    icon: Globe2,
    github: 'https://github.com',
    demos: [{ label: 'Live Demo', href: 'https://amazon-clone-frontend-mxye-pwtq42tun-coremind2.vercel.app/' }],
  },
  {
    number: '05',
    category: 'FULL-STACK ARCHITECTURE',
    title: 'Netflix Clone',
    subtitle: 'High-Fidelity Streaming Platform Architecture',
    description: 'Built a production-grade web replica mimicking the Netflix user experience, integrating REST APIs and dynamic authentication for a smooth, responsive streaming interface.',
    stack: ['React', 'Node.js', 'REST APIs'],
    accent: 'coral',
    icon: Tv,
    github: 'https://github.com',
    demos: [{ label: 'Live Demo', href: 'https://github.io' }],
  },
  {
    number: '06',
    category: 'FULL-STACK ARCHITECTURE',
    title: 'Evangadi Forum',
    subtitle: 'Full-Stack Q&A Community Platform',
    description: 'Built a full-stack question-and-answer forum platform enabling users to post questions, submit answers, and engage in threaded discussions, backed by a secure REST API and MySQL database.',
    stack: ['React', 'Node.js', 'MySQL'],
    accent: 'mint',
    icon: MessageSquare,
    github: 'https://github.com',
    demos: [
      { label: 'Live Demo', href: 'https://evangadi-frontend-b6mf1540a-coremind2.vercel.app' },
      { label: 'Frontend Repo', href: 'https://github.com' },
    ],
  },
]

const skillGroups = [
  { label: 'CORE DEVELOPMENT', icon: Code2, items: ['JavaScript', 'React.js', 'Node.js', 'Python (Programming Language)', 'Full-Stack Development', 'REST APIs'] },
  { label: 'DATABASES', icon: Database, items: ['MySQL'] },
  { label: 'AGENTIC AI & LLM', icon: Network, items: ['Agentic AI Development', 'Large Language Models (LLM)', 'Prompt Engineering', 'LangChain', 'Multi-agent Systems'] },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Network },
  { label: 'Facebook', href: 'https://facebook.com', icon: Globe2 },
  { label: 'Gmail', href: 'mailto:hailemichaeltesfsye@gmail.com', icon: Mail },
  { label: 'Telegram', href: 'https://t.me', icon: Send },
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
          <a className="nav-linkedin" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
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
          <div className="hero-scene">
            {heroParticles.map((p, i) => (
              <span
                key={i}
                className="scene-particle"
                style={{
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                }}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
