import {
  ArrowUpRight,
  Award,
  Bot,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  GitFork,
  Globe2,
  Headphones,
  Layers,
  Mail,
  Menu,
  MessageSquare,
  Mic,
  Network,
  Pause,
  Play,
  Radio,
  RotateCcw,
  Send,
  Shield,
  Sparkles,
  Terminal,
  Volume2,
  VolumeX,
  X,
  Zap,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Spoken greeting script
const GREETING_SPEECH =
  "Hello, and welcome to my portfolio! I am Hailemichael Tesfaye Mekuria, an Agentic AI and Full-Stack Engineer from Ethiopia. I architect autonomous multi-agent systems, including NEXUS: The Living City for Addis Ababa, NetsaGuard AI, and decentralized healthcare diagnostic platforms. Explore my live deployments, inspect the autonomous DAG architectures, or test the interactive terminal below. Let us engineer the next frontier of intelligence together!"

// Projects dataset (100% Based on Real Systems - Clean, Validated & High-Impact)
const projects = [
  {
    number: '01',
    category: 'URBAN DIGITAL TWIN / AGENTIC OS',
    filterTag: 'agentic',
    badge: '🏆 META HACKATHON ($150K)',
    title: 'NEXUS: The Living City',
    subtitle: 'Autonomous AI Digital Twin & Metropolitan OS for Addis Ababa (ኔክሰስ አዲስ አበባ)',
    description:
      'Flagship submission for the Meta Global AI Developer Hackathon. An autonomous municipal digital twin orchestrating 11 cognitive city-governance agents, real-time orbital satellite telemetry, zero-shot computer vision hazard segmentation, and dual Amharic/English voice dispatch.',
    stack: [
      'Meta Llama 3.3 70B',
      'Modal H100 GPU',
      'Meta SAM Vision',
      'Llama-Guard 3',
      'TypeScript',
      'Three.js',
      'Vercel',
    ],
    accent: 'flagship',
    icon: Building2,
    github: 'https://github.com/hailemichaeltesfsye-hue/-nexus-the-living-city',
    demos: [
      {
        label: 'Live Production Demo',
        href: 'https://nexus-the-living-city.vercel.app',
      },
    ],
  },
  {
    number: '02',
    category: 'DIGITAL RIGHTS / AGENTIC SYSTEMS',
    filterTag: 'agentic',
    badge: 'LANGGRAPH DAG',
    title: 'NetsaGuard AI',
    subtitle: 'Privacy-Preserving Multilingual Agentic Content Safety Hub',
    description:
      'Africa-first digital rights defense platform countering online harassment and platform throttling. Implements stateful multi-agent LangGraph orchestration with localized PII/PHI sanitization and Model Context Protocol (FastMCP).',
    stack: ['React PWA', 'LangGraph', 'Groq API', 'ChromaDB', 'FastMCP', 'Firebase'],
    accent: 'mint',
    icon: Shield,
    github: 'https://github.com/hailemichaeltesfsye-hue/netsaguard-ai',
    demos: [
      {
        label: 'Live Demo',
        href: 'https://netsaguard-dxa6r43es-coremind2.vercel.app/',
      },
    ],
  },
  {
    number: '03',
    category: 'HEALTHCARE AI / AGENTIC SYSTEMS',
    filterTag: 'agentic',
    badge: 'P2P CONSENSUS',
    title: 'AI-Driven Healthcare Diagnostic Loop',
    subtitle: 'Autonomous P2P Multi-Agent Diagnostic Platform',
    description:
      'Autonomous peer-to-peer multi-agent healthcare diagnostic platform with a live motion graph UI, enabling real-time collaborative diagnosis and consensus across distributed diagnostic agents.',
    stack: ['Python', 'LangChain', 'FastAPI', 'ChromaDB', 'Streamlit UI', 'Medical Graph'],
    accent: 'gold',
    icon: Network,
    github: 'https://github.com/hailemichaeltesfsye-hue/healthcare-diagnostic-loop-v2',
    demos: [
      {
        label: 'Live Demo',
        href: 'https://healthcare-diagnostic-loop-v2-euskzvszeyupkabzgrz9z2.streamlit.app/',
      },
    ],
  },
  {
    number: '04',
    category: 'AGENTIC AI / THEOLOGY & RAG',
    filterTag: 'agentic',
    badge: 'ORTHODOX AI',
    title: 'LIQU YOHANNES AFEWOK',
    subtitle: 'Ethiopian Orthodox Tewahedo Christian AI Teacher',
    description:
      'An interactive Ethiopian Orthodox Tewahedo Christian AI teacher for theology, Scripture study, spiritual education, and multilingual learning, designed to make Orthodox knowledge more accessible through AI.',
    stack: ['AI', 'RAG', 'LangGraph', 'Multilingual', 'Theology', 'Education'],
    accent: 'coral',
    icon: Sparkles,
    github: 'https://github.com/hailemichaeltesfsye-hue/liqu-yohannes-afework',
    demos: [
      {
        label: 'Live Demo',
        href: 'https://liqu-yohannes-afework.vercel.app/',
      },
    ],
  },
  {
    number: '05',
    category: 'FULL-STACK ARCHITECTURE',
    filterTag: 'fullstack',
    badge: 'COMMERCIAL E-COMMERCE',
    title: 'Amazon Clone Architecture',
    subtitle: 'High-Fidelity E-Commerce Microservices Engine',
    description:
      'Production-grade commercial e-commerce replica mimicking the Amazon architecture, integrating RESTful microservices, Stripe payments, and a relational MySQL database with secure token authentication.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Stripe API', 'Firebase'],
    accent: 'lavender',
    icon: Globe2,
    github: 'https://github.com/hailemichaeltesfsye-hue/amazon-clone-backend',
    demos: [
      {
        label: 'Live Demo',
        href: 'https://amazon-clone-frontend-mxye-pwtq42tun-coremind2.vercel.app/',
      },
      {
        label: 'Frontend Repo',
        href: 'https://github.com/hailemichaeltesfsye-hue/amazon-clone-frontend',
      },
    ],
  },
  {
    number: '06',
    category: 'FULL-STACK ARCHITECTURE',
    filterTag: 'fullstack',
    badge: 'COMMUNITY PLATFORM',
    title: 'Evangadi Forum',
    subtitle: 'Full-Stack Q&A Community Platform',
    description:
      'Full-stack question-and-answer forum platform enabling users to post questions, submit answers, and engage in threaded discussions, backed by a secure REST API and MySQL database.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'JWT Auth'],
    accent: 'mint',
    icon: MessageSquare,
    github: 'https://github.com/hailemichaeltesfsye-hue/evangadi-backend',
    demos: [
      {
        label: 'Live Demo',
        href: 'https://evangadi-frontend-b6mf1540a-coremind2.vercel.app',
      },
      {
        label: 'Frontend Repo',
        href: 'https://github.com/hailemichaeltesfsye-hue/evangadi-frontend',
      },
    ],
  },
]

// Architecture DAG stages
const architectureStages = [
  {
    id: '01',
    title: 'Ingestion & Local PII Filter',
    subtitle: 'Data Sovereignty & Regex Sanitization',
    desc: 'Before any prompt hits the LLM inference layer, local regex and semantic filters strip sensitive PII/PHI (phone numbers, national IDs, medical identifiers) entirely client-side, guaranteeing sovereign privacy.',
    tech: 'Local Regex • Spacy Semantic Guard • Zero-Egress Sanitizer',
    projectRef: 'NetsaGuard AI & Healthcare Diagnostic Loop',
  },
  {
    id: '02',
    title: 'LangGraph Multi-Agent Orchestrator',
    subtitle: 'Cyclic State Transitions & Byzantine Consensus',
    desc: 'Dynamic supervisor agents coordinate specialized worker nodes through cyclic graphs with deterministic state transitions, self-healing retries, and automated peer review before synthesis.',
    tech: 'LangGraph StateMachine • Multi-Agent Consensus • Cyclic DAGs',
    projectRef: 'NEXUS Living City & NetsaGuard AI',
  },
  {
    id: '03',
    title: 'Model Context Protocol (FastMCP)',
    subtitle: 'Standardized Sensor & Tool Calling',
    desc: 'External APIs, database queries, and system actions run through standardized Model Context Protocol (FastMCP) interfaces, allowing agents to execute verifiable real-world commands safely.',
    tech: 'FastMCP • Tool Schemas • Structured JSON Validation',
    projectRef: 'NetsaGuard AI & NEXUS Living City',
  },
  {
    id: '04',
    title: 'ChromaDB Vector Retrieval',
    subtitle: 'Episodic & Domain Memory',
    desc: 'Agents retrieve localized knowledge and past interaction contexts via low-latency ChromaDB vector embeddings, eliminating hallucinations and grounding responses in verified truth.',
    tech: 'ChromaDB • Cosine Similarity • Multi-Modal Embeddings',
    projectRef: 'NetsaGuard AI & Liqu Yohannes Afework',
  },
  {
    id: '05',
    title: 'HITL Validation & Consensus Gate',
    subtitle: 'Human-In-The-Loop Safety Gate & Audit Trail',
    desc: 'High-risk actions require cryptographic HMAC authorization or automated Byzantine multi-agent verification before dispatching critical state changes or orbital city actuators.',
    tech: 'HMAC-SHA256 • HITL Glassmorphism Gate • Cryptographic Audit Trail',
    projectRef: 'NEXUS Living City & NetsaGuard AI',
  },
]

const skillGroups = [
  {
    label: 'AGENTIC AI & MULTI-AGENT SWARMS',
    icon: Network,
    items: [
      'LangGraph State Orchestration',
      'Autonomous Multi-Agent Swarms',
      'Model Context Protocol (FastMCP)',
      'Meta Llama 3.3 70B & Modal H100',
      'ChromaDB Vector Retrieval & RAG',
      'Byzantine Fault-Tolerant Consensus',
    ],
  },
  {
    label: 'CORE FULL-STACK & WEB APPS',
    icon: Code2,
    items: [
      'React 19 & TypeScript',
      'Node.js & Express Architecture',
      'Python 3.11+ / FastAPI',
      'RESTful API Microservices',
      'Three.js 3D Viewport Integrations',
      'Responsive Glassmorphic UI/UX',
    ],
  },
  {
    label: 'DATABASES, CLOUD & DEVOPS',
    icon: Database,
    items: [
      'PostgreSQL & MySQL Databases',
      'Firebase Firestore & Auth',
      'Docker Containers & Sandboxes',
      'Vercel & Modal Cloud Deployments',
      'Git / GitHub Actions CI/CD',
      'Multi-Service System Architecture',
    ],
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hailemichael-tesfaye-2b7114401/',
    icon: Network,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/hailemichaeltesfsye-hue',
    icon: Code2,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/hailemicha85330',
    icon: Send,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61584502285183',
    icon: Globe2,
  },
  {
    label: 'Gmail',
    href: 'mailto:hailemichaeltesfsye@gmail.com',
    icon: Mail,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeDagStep, setActiveDagStep] = useState(0)
  const [toastMessage, setToastMessage] = useState('')
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const hasSpokenRef = useRef(false)

  // Sound Synthesizer via Web Audio API
  const playCyberSound = (freq = 880, duration = 0.08) => {
    if (!soundEnabled) return
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      const osc = audioCtx.createOscillator()
      const gain = audioCtx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime)
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration)
      osc.connect(gain)
      gain.connect(audioCtx.destination)
      osc.start()
      osc.stop(audioCtx.currentTime + duration)
    } catch {
      // AudioContext not allowed or not supported
    }
  }

  const showToast = (msg) => {
    setToastMessage(msg)
    playCyberSound(1040, 0.12)
    setTimeout(() => setToastMessage(''), 3500)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('hailemichaeltesfsye@gmail.com')
    showToast('Copied hailemichaeltesfsye@gmail.com to clipboard!')
  }

  const [speechRate, setSpeechRate] = useState(1.0)
  const isSpeakingRef = useRef(false)
  const autoPlayTriggeredRef = useRef(false)

  // Classical Voice Speech Synthesis Handler
  const stopSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setIsSpeaking(false)
    isSpeakingRef.current = false
  }

  const speakGreeting = (rate = speechRate) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return
    }
    try {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(GREETING_SPEECH)
      const voices = window.speechSynthesis.getVoices()
      const preferredVoice =
        voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.includes('Natural') ||
              v.name.includes('Google') ||
              v.name.includes('Samantha') ||
              v.name.includes('Daniel') ||
              v.name.includes('Arthur') ||
              v.name.includes('Oliver') ||
              v.name.includes('David')),
        ) || voices.find((v) => v.lang.startsWith('en'))

      if (preferredVoice) utterance.voice = preferredVoice
      utterance.rate = rate
      utterance.pitch = 1.0

      utterance.onstart = () => {
        setIsSpeaking(true)
        isSpeakingRef.current = true
      }
      utterance.onend = () => {
        setIsSpeaking(false)
        isSpeakingRef.current = false
      }
      utterance.onerror = () => {
        setIsSpeaking(false)
        isSpeakingRef.current = false
      }

      window.speechSynthesis.speak(utterance)
    } catch (e) {
      setIsSpeaking(false)
      isSpeakingRef.current = false
    }
  }

  const toggleSpeech = () => {
    if (isSpeaking) {
      stopSpeech()
      showToast('Classical voice companion paused.')
    } else {
      speakGreeting(speechRate)
      playCyberSound(900, 0.1)
    }
  }

  const replaySpeech = () => {
    stopSpeech()
    setTimeout(() => {
      speakGreeting(speechRate)
      playCyberSound(950, 0.08)
      showToast('Replaying classical voice dispatch...')
    }, 120)
  }

  const copyTranscript = () => {
    navigator.clipboard.writeText(GREETING_SPEECH)
    showToast('Voice dispatch transcript copied to clipboard!')
  }

  // Automatic Seamless Voice Playback Without Instruction
  useEffect(() => {
    if (typeof window === 'undefined') return

    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices()
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices()
      }
    }

    const triggerPlay = () => {
      if (autoPlayTriggeredRef.current) return
      autoPlayTriggeredRef.current = true
      speakGreeting(1.0)
    }

    // Direct automated attempt after mount
    const timer = setTimeout(() => {
      triggerPlay()
    }, 600)

    // Seamless interaction triggers (plays naturally on first scroll or touch without instructions)
    const onNaturalInteraction = () => {
      if (!isSpeakingRef.current && !autoPlayTriggeredRef.current) {
        triggerPlay()
      }
      detach()
    }

    const detach = () => {
      window.removeEventListener('pointerdown', onNaturalInteraction)
      window.removeEventListener('click', onNaturalInteraction)
      window.removeEventListener('scroll', onNaturalInteraction)
      window.removeEventListener('wheel', onNaturalInteraction)
      window.removeEventListener('touchstart', onNaturalInteraction)
      window.removeEventListener('keydown', onNaturalInteraction)
    }

    window.addEventListener('pointerdown', onNaturalInteraction, { passive: true })
    window.addEventListener('click', onNaturalInteraction, { passive: true })
    window.addEventListener('scroll', onNaturalInteraction, { passive: true })
    window.addEventListener('wheel', onNaturalInteraction, { passive: true })
    window.addEventListener('touchstart', onNaturalInteraction, { passive: true })
    window.addEventListener('keydown', onNaturalInteraction, { passive: true })

    return () => {
      clearTimeout(timer)
      detach()
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  // Handle smooth deep-link scrolling on initial load if hash is present (e.g. #work)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const initialHash = window.location.hash
    if (initialHash) {
      const targetId = initialHash.replace('#', '')
      const timer = setTimeout(() => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [])

  // Smooth section scroll helper that avoids jarring jumps
  const scrollToSection = (e, sectionId) => {
    if (e && e.preventDefault) e.preventDefault()
    setMenuOpen(false)
    playCyberSound(750, 0.05)
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', )
      }
    }
  }

  // Smooth scroll to top helper
  const scrollToTop = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    setMenuOpen(false)
    playCyberSound(650, 0.06)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', window.location.pathname)
    }
  }

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true
    return p.filterTag === activeFilter
  })

  return (
    <div className="site-shell">
      {/* Majestic Volumetric Sun Light & Celestial Horizon */}
      <div className="sunlight-container" aria-hidden="true">
        <div className="sunlight-core" />
        <div className="sunlight-corona" />
        <div className="sunlight-rays" />
        <div className="sunlight-beam-horizontal" />
        <div className="sunlight-haze" />
      </div>

      {/* Background Neural Canvas with Solar Dust */}
      <NeuralMatrixCanvas />

      {/* Navigation */}
      <header className="nav-wrap">
        <nav className="nav container">
          <a
            className="brand"
            href="#top"
            aria-label="Home"
            onClick={scrollToTop}
          >
            <span className="brand-mark">HM</span>
            <span className="brand-text">
              HTM<span>.</span>
            </span>
          </a>

          <div className="nav-actions">
            <button
              className={`sound-toggle ${soundEnabled ? 'is-active' : ''}`}
              onClick={() => {
                const next = !soundEnabled
                setSoundEnabled(next)
                if (next) showToast('Cyber audio telemetry enabled!')
                else showToast('Audio muted.')
              }}
              aria-label="Toggle Sound Effects"
              title="Toggle Cyber Sounds"
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
            >
              Featured Systems
            </a>
            <a
              href="#architecture"
              onClick={(e) => scrollToSection(e, 'architecture')}
            >
              Agentic DAG
            </a>
            <a
              href="#terminal"
              onClick={(e) => scrollToSection(e, 'terminal')}
            >
              CLI Console
            </a>
            <a
              href="#capabilities"
              onClick={(e) => scrollToSection(e, 'capabilities')}
            >
              Toolkit
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
            >
              Credentials
            </a>
            <a
              className="nav-contact"
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Let&apos;s Connect <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              <span>Available for Agentic AI & Full-Stack Systems</span>
            </div>

            <h1>
              Building the <em>next</em>
              <br />
              layer of intelligence.
            </h1>

            <p className="hero-subtitle">
              I&apos;m <strong>Hailemichael Tesfaye Mekuria</strong>, an{' '}
              <strong>Agentic AI & Full-Stack Engineer</strong> from Ethiopia. I architect
              autonomous multi-agent digital twins, sovereign privacy defense systems,
              and high-fidelity web platforms.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="#work"
                onClick={(e) => scrollToSection(e, 'work')}
              >
                Explore Systems <ArrowUpRight size={17} />
              </a>

              <button
                className={`button button-voice ${isSpeaking ? 'is-speaking' : ''}`}
                onClick={toggleSpeech}
                aria-label="Toggle AI Voice Greeting"
              >
                {isSpeaking ? <VolumeX size={17} /> : <Mic size={17} />}
                <span>{isSpeaking ? 'Pause Voice Intro' : 'Voice Intro'}</span>
              </button>

              <a
                className="button button-quiet"
                href="https://drive.google.com/file/d/1O4EJ0Q-Nw_7WvPVtyXmyzULZQNzE1VGL/view"
                target="_blank"
                rel="noreferrer"
                onClick={() => playCyberSound(800, 0.05)}
              >
                Review CV <ExternalLink size={14} />
              </a>
            </div>

            <div className="hero-meta">
              <span className="meta-line" />
              <span>Kombolcha, Ethiopia</span>
              <span className="meta-line" />
              <span>Wollo University Software Engineering</span>
              <span className="meta-line" />
              <span>Meta Global AI Hackathon Competitor</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="photo-cyber-aura" aria-hidden="true" />
            <div className="photo-scanner-beam" aria-hidden="true" />
            <div className="orbit orbit-outer">
              <span className="orbit-node node-one" />
              <span className="orbit-node node-two" />
            </div>
            <div className="orbit orbit-inner">
              <span className="orbit-node node-three" />
            </div>

            <div className="beam-ring" aria-hidden="true" />

            <div className="hero-visual-photo-wrap">
              <div className="hero-visual-photo-ring" aria-hidden="true" />
              <div className="hero-visual-photo">
                <img src="/profile.jpg" alt="Hailemichael Tesfaye Mekuria" />
              </div>
            </div>

            <span className="magic-particle particle-1" />
            <span className="magic-particle particle-2 mint" />
            <span className="magic-particle particle-3" />
            <span className="magic-particle particle-4 mint" />
            <span className="magic-particle particle-5" />
            <span className="magic-particle particle-6 mint" />

            <div className="signal signal-one">/ nexus.digital-twin</div>
            <div className="signal signal-two">/ netsaguard.defense</div>
            <div className="signal signal-three">/ multi-agent.langgraph</div>

            <div className="visual-caption">
              <span>01</span> Autonomous intelligence coordinating in motion
            </div>
          </div>
        </section>

        {/* Live Metrics Ticker Strip */}
        <section className="trust-strip">
          <div className="container trust-inner">
            <span className="trust-label">
              <Bot size={15} /> Verified Reality
            </span>
            <span className="trust-tag">🏆 Meta Global AI Hackathon ($150K)</span>
            <span className="trust-tag">🌐 10+ Live Deployments</span>
            <span className="trust-tag">🐍 Python 43.4% • TypeScript 33.7%</span>
            <span className="trust-tag">🛡️ LangGraph State Machine</span>
            <span className="trust-tag">⚡ Model Context Protocol (FastMCP)</span>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="section container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Portfolio Architectures / 2024—26</span>
              <h2>
                Systems made <em>operational.</em>
              </h2>
            </div>
            <p>
              From the <strong>NEXUS Addis Ababa Digital Twin</strong> to sovereign
              privacy defense hubs and decentralized healthcare consensus, each project
              transforms complex agentic logic into live verifiable software.
            </p>
          </div>

          {/* Interactive Filter Bar */}
          <div className="filter-bar">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => {
                setActiveFilter('all')
                playCyberSound(650, 0.05)
              }}
            >
              All Systems ({projects.length})
            </button>
            <button
              className={`filter-btn ${activeFilter === 'agentic' ? 'is-active' : ''}`}
              onClick={() => {
                setActiveFilter('agentic')
                playCyberSound(750, 0.05)
              }}
            >
              Agentic AI & Swarms (4)
            </button>
            <button
              className={`filter-btn ${activeFilter === 'fullstack' ? 'is-active' : ''}`}
              onClick={() => {
                setActiveFilter('fullstack')
                playCyberSound(850, 0.05)
              }}
            >
              Full-Stack Architecture (2)
            </button>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
                onPlaySound={playCyberSound}
              />
            ))}
          </div>
        </section>

        {/* Interactive Architecture DAG Visualizer */}
        <section id="architecture" className="dag-section">
          <div className="container">
            <div className="section-heading">
              <div className="dag-intro">
                <span className="section-kicker">Engineering Blueprint / 02</span>
                <h2>
                  How my <em>agentic systems</em> run.
                </h2>
              </div>
              <p>
                A 5-stage sovereign pipeline engineered for fault tolerance, deterministic
                state transitions, and zero-hallucination execution. Click any node to
                inspect.
              </p>
            </div>

            <div className="dag-layout">
              <div className="dag-steps">
                {architectureStages.map((stage, idx) => (
                  <button
                    key={stage.id}
                    className={`dag-step-btn ${activeDagStep === idx ? 'is-active' : ''}`}
                    onClick={() => {
                      setActiveDagStep(idx)
                      playCyberSound(600 + idx * 80, 0.06)
                    }}
                  >
                    <span className="dag-step-num">{stage.id}</span>
                    <div className="dag-step-info">
                      <h4>{stage.title}</h4>
                      <small>{stage.subtitle}</small>
                    </div>
                    <ChevronRight
                      size={18}
                      style={{ marginLeft: 'auto', opacity: activeDagStep === idx ? 1 : 0.4 }}
                    />
                  </button>
                ))}
              </div>

              <div className="dag-preview-card">
                <span className="dag-badge">
                  STAGE {architectureStages[activeDagStep].id} ARCHITECTURE SPEC
                </span>
                <h3>{architectureStages[activeDagStep].title}</h3>
                <p>{architectureStages[activeDagStep].desc}</p>
                <div className="dag-tech-box">
                  <span>Stack & Implementation:</span>
                  <code>{architectureStages[activeDagStep].tech}</code>
                </div>
                <div className="dag-tech-box" style={{ marginTop: '12px' }}>
                  <span>Implemented In:</span>
                  <code style={{ color: 'var(--gold)' }}>
                    {architectureStages[activeDagStep].projectRef}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive HTM Agent Console */}
        <section id="terminal" className="console-section container">
          <AgentConsole
            onPlaySound={playCyberSound}
            onCopyEmail={copyEmail}
            onToggleVoice={toggleSpeech}
            isSpeaking={isSpeaking}
          />
        </section>

        {/* Capabilities Band */}
        <section id="capabilities" className="capabilities-band">
          <div className="container capabilities-layout">
            <div className="cap-intro">
              <span className="section-kicker">The Toolkit / 03</span>
              <h2>
                Fluent across
                <br />
                <em>the stack.</em>
              </h2>
              <p>
                The strongest systems emerge at the convergence of multi-agent intelligence
                and full-stack software engineering.
              </p>
            </div>

            <div className="skills-list">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <div className="skill-heading">
                    <group.icon size={19} />
                    <span>{group.label}</span>
                  </div>
                  <div className="skill-items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About & Credentials Section (Cleaned & Focused on Verified Achievements) */}
        <section id="about" className="section container about-section">
          <div className="about-label">
            <span className="section-kicker">Credentials / 04</span>
            <div className="vertical-line" />
          </div>

          <div className="about-content">
            <div className="about-top">
              <h2>
                Engineering with
                <br />
                <em>rigor & curiosity.</em>
              </h2>

              <div className="credential">
                <div className="credential-icon">
                  <Check size={20} />
                </div>
                <div>
                  <span
                    className="credential-label"
                    style={{
                      color: 'var(--gold)',
                      fontFamily: 'DM Mono',
                      fontSize: '10px',
                    }}
                  >
                    CERTIFIED / AUGUST 28, 2026
                  </span>
                  <strong>Certificate of Completion in Agentic Engineering</strong>
                  <small>NSK AI / Zerra Build Global Cohort</small>
                </div>
              </div>
            </div>

            <div className="experience-row">
              <span className="exp-date">2026</span>
              <div>
                <h3>Hackathon Competitor & Lead AI Architect</h3>
                <p className="exp-org">
                  Meta Global AI Developer Hackathon ($150K Grand Challenge)
                </p>
                <p>
                  Architected <strong>NEXUS: The Living City</strong>, an autonomous AI
                  digital twin and metropolitan operating system for Addis Ababa. Integrated
                  Meta Llama 3.3 70B cognitive reasoning, Modal Serverless H100 GPUs, and
                  Meta SAM aerial computer vision with Llama-Guard 3 safety guardrails.
                </p>
              </div>
            </div>

            <div className="experience-row">
              <span className="exp-date">2026 — PRESENT</span>
              <div>
                <h3>Campus Lead Candidate & Udara Ambassador</h3>
                <p className="exp-org">
                  The Udara Project <span>/ NSK AI · Zerra Build · Wollo University</span>
                </p>
                <p>
                  Orchestrated a tech community strategy to empower African campus students
                  with Agentic AI and multi-agent development skills. Represented Wollo
                  University in international technical lead selection and coordinated
                  awareness campaigns for sovereign AI architectures.
                </p>
              </div>
            </div>

            <div className="experience-row">
              <span className="exp-date">2023 — PRESENT</span>
              <div>
                <h3>BSc in Software Engineering</h3>
                <p className="exp-org">
                  Wollo University, Kombolcha Institute of Technology (KIOT)
                </p>
                <p>
                  Focusing on distributed systems, artificial intelligence, algorithms,
                  database management, and enterprise software engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-band">
          <div className="container contact-inner-simple">
            <div className="contact-intro">
              <span className="section-kicker">Have an ambitious project?</span>
              <h2>
                Let&apos;s build it
                <br />
                <em>intelligent.</em>
              </h2>
              <p>
                Whether you need autonomous multi-agent pipelines, LangGraph systems, or
                scalable full-stack architectures, reach out below.
              </p>
            </div>

            <div className="contact-icons">
              {socialLinks.map((social) => {
                const Icon = social.icon
                if (social.label === 'Gmail') {
                  return (
                    <button
                      key={social.label}
                      onClick={copyEmail}
                      className="contact-icon-card"
                      title="Click to copy email address"
                    >
                      <Icon size={22} style={{ color: 'var(--mint)' }} />
                      <div style={{ textAlign: 'left' }}>
                        <div>{social.label}</div>
                        <small
                          style={{
                            color: 'var(--muted)',
                            fontSize: '11px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <Copy size={12} /> Click to Copy
                        </small>
                      </div>
                    </button>
                  )
                }
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-icon-card"
                    onClick={() => playCyberSound(800, 0.05)}
                  >
                    <Icon size={22} style={{ color: 'var(--gold)' }} />
                    <span>{social.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Floating AI Voice Greeting HUD */}
      <div className={`voice-hud ${isSpeaking ? 'is-active' : ''}`}>
        <div className="voice-hud-indicator">
          <div className="sound-wave">
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className="voice-hud-title">
            {isSpeaking ? 'AI Voice Guide: Speaking...' : 'AI Voice Greeting'}
          </span>
        </div>
        <button
          className="voice-hud-btn"
          onClick={toggleSpeech}
          title={isSpeaking ? 'Pause Voice Greeting' : 'Play Voice Greeting'}
        >
          {isSpeaking ? <VolumeX size={13} /> : <Volume2 size={13} />}
          <span>{isSpeaking ? 'Pause' : 'Play Voice'}</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="footer container">
        <span>© 2026 Hailemichael Tesfaye Mekuria</span>
        <span>Agentic AI & Full-Stack Engineer · Kombolcha, Ethiopia</span>
        <div className="socials">
          <a
            href="https://github.com/hailemichaeltesfsye-hue"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/hailemichael-tesfaye-2b7114401/"
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noreferrer"
          >
            <Network size={18} />
          </a>
          <a
            href="#top"
            aria-label="Back to top of page"
            onClick={scrollToTop}
          >
            <ChevronDown size={18} className="back-top" />
          </a>
        </div>
      </footer>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="alert">
          <Sparkles size={16} style={{ color: 'var(--gold)' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, onPlaySound }) {
  const Icon = project.icon
  return (
    <div className={`project-card ${project.accent}`}>
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <Icon size={19} />
        <span className="project-category">{project.category}</span>
        <span className="project-badge">{project.badge}</span>
      </div>

      <div className="project-art">
        <div className="art-lines" />
        <div className="art-icon">
          <Icon size={38} strokeWidth={1.3} />
        </div>
        <span className="art-label">{project.number} / 06</span>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <h4>{project.subtitle}</h4>
        <p>{project.description}</p>

        <div className="stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            onClick={() => onPlaySound?.(700, 0.06)}
          >
            <GitFork size={14} /> Source Code
          </a>
          {project.demos?.map((demo) => (
            <a
              key={demo.href}
              href={demo.href}
              target="_blank"
              rel="noreferrer"
              className="project-link demo-primary"
              onClick={() => onPlaySound?.(920, 0.08)}
            >
              <ExternalLink size={14} /> {demo.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

// Interactive Agent Console Component
function AgentConsole({ onPlaySound, onCopyEmail, onToggleVoice, isSpeaking }) {
  const [history, setHistory] = useState([
    {
      cmd: 'init --agent-core',
      output:
        'HTM Agent Core v3.0 initialized. Status: OPERATIONAL // Orchestrator: LangGraph // Vector Memory: ChromaDB // Cognitive Core: Meta Llama 3.3 70B\nType a command below or click a quick action to inspect Hailemichael\'s systems.',
    },
  ])
  const [inputVal, setInputVal] = useState('')
  const terminalEndRef = useRef(null)

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const executeCommand = (raw) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    onPlaySound?.(820, 0.05)
    let output = ''

    if (cmd === 'voice' || cmd === 'speak' || cmd === 'intro') {
      onToggleVoice?.()
      output = `[AUDIO SUBSYSTEM]: ${
        isSpeaking
          ? 'Paused voice greeting.'
          : 'Dispatched speech synthesis unit. Playing English voice greeting...'
      }`
    } else if (cmd === 'nexus') {
      output = `[NEXUS: THE LIVING CITY]
• Event: Meta Global AI Developer Hackathon ($150K Grand Challenge)
• Role: Lead AI Architect & Developer (Hailemichael Tesfaye Mekuria)
• Scope: Autonomous AI Digital Twin & Metropolitan OS for Addis Ababa
• Cognitive Core: Meta Llama 3.3 70B Instruct (11 autonomous municipal agents)
• Compute Partner: Modal Serverless H100 GPUs ($101.00 USD Grant)
• Perception Layer: Meta SAM (Segment Anything Model) Vision
• Safety Floor: Llama-Guard 3 Constitutional AI
• Live Production URL: https://nexus-the-living-city.vercel.app
• GitHub: https://github.com/hailemichaeltesfsye-hue/-nexus-the-living-city`
    } else if (cmd === 'projects' || cmd.includes('project')) {
      output = `Active Systems Deployed:
• 01. NEXUS: The Living City [Meta Llama 3.3 70B / Modal H100] -> Live: nexus-the-living-city.vercel.app
• 02. NetsaGuard AI [LangGraph / Groq / ChromaDB / FastMCP] -> Live on Vercel
• 03. AI Healthcare Diagnostic Loop v2 [P2P Consensus / Streamlit / Medical Graph]
• 04. LIQU YOHANNES AFEWOK [Ethiopian Orthodox AI Teacher / RAG / LangGraph] -> Live on Vercel
• 05. Amazon Full-Stack Architecture [React / Node.js / MySQL / Stripe] -> Live on Vercel
• 06. Evangadi Forum [React / Node.js / MySQL / JWT Auth] -> Live on Vercel`
    } else if (cmd === 'skills' || cmd.includes('stack')) {
      output = `Engineering Stack (100% Reality):
[Agentic AI] LangGraph, FastMCP, ChromaDB, Meta Llama 3.3 70B, Modal H100 GPUs, Multi-Agent Swarms
[Languages] Python (43.4%), TypeScript (33.7%), JavaScript (15.5%), HTML/CSS, SQL
[Frontend] React 19, Vite, Three.js 3D Viewport, Modern HUDs, Glassmorphism
[Backend & DB] Node.js, Express, FastAPI, PostgreSQL, MySQL, Firebase Firestore, Docker`
    } else if (cmd === 'credentials' || cmd.includes('cert')) {
      output = `Verified Credentials & Affiliations:
• Certificate of Completion in Agentic Engineering (August 28, 2026) - NSK AI / Zerra Build Global Cohort
• Meta Global AI Developer Hackathon Competitor ($150K Challenge - NEXUS Addis Ababa)
• BSc in Software Engineering Student - Wollo University (Kombolcha, Ethiopia)
• Campus Lead Candidate & Udara Ambassador - The Udara Project`
    } else if (cmd === 'status' || cmd.includes('ping') || cmd === 'stats') {
      output = `Live GitHub Reality Stats:
• Public Repositories: 25+
• Total Annual Contributions: 172+
• Live Production Demos: 10+
• Primary Code Language: Python (43.4%)
• Secondary Code Language: TypeScript (33.7%)
• LangGraph State Machine: ACTIVE (latency: 18ms)
• ChromaDB Vector Store: ONLINE (embeddings: 1536-dim)`
    } else if (cmd === 'contact') {
      output = `Contact Coordinates:
• Email: hailemichaeltesfsye@gmail.com
• LinkedIn: https://www.linkedin.com/in/hailemichael-tesfaye-2b7114401/
• Portfolio: https://hailemichael-portfolio-psi.vercel.app/
• Telegram: https://t.me/hailemicha85330
• GitHub: https://github.com/hailemichaeltesfsye-hue`
    } else if (cmd === 'clear') {
      setHistory([])
      setInputVal('')
      return
    } else {
      output = `Command '${cmd}' processed by HTM Core.
Recognized commands: 'nexus', 'projects', 'skills', 'status', 'credentials', 'voice', 'contact', 'clear'.`
    }

    setHistory((prev) => [...prev, { cmd: raw, output }])
    setInputVal('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    executeCommand(inputVal)
  }

  return (
    <div className="terminal-card">
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="term-dot red" />
          <span className="term-dot yellow" />
          <span className="term-dot green" />
        </div>
        <div className="terminal-title">
          <Terminal size={14} /> HTM_AGENT_CLI // LIVE ORCHESTRATION TERMINAL
        </div>
        <div className="terminal-status">● AGENT ACTIVE</div>
      </div>

      <div className="terminal-body">
        {history.map((item, idx) => (
          <div key={idx} className="term-line">
            <div>
              <span className="term-prompt">agent@htm:~$</span>
              <span>{item.cmd}</span>
            </div>
            <div className="term-output" style={{ whiteSpace: 'pre-line' }}>
              {item.output}
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
          <span className="term-prompt">agent@htm:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'nexus', 'projects', 'skills', 'voice', 'contact'..."
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontFamily: 'inherit',
              fontSize: '13px',
              outline: 'none',
              flex: 1,
            }}
          />
          <span className="term-cursor" />
        </form>
        <div ref={terminalEndRef} />
      </div>

      <div className="terminal-chips">
        <span className="chip-label">Quick Actions:</span>
        <button
          type="button"
          className="terminal-chip"
          onClick={() => executeCommand('nexus')}
        >
          &gt; nexus
        </button>
        <button
          type="button"
          className="terminal-chip"
          onClick={() => executeCommand('projects')}
        >
          &gt; projects
        </button>
        <button
          type="button"
          className="terminal-chip"
          onClick={() => executeCommand('skills')}
        >
          &gt; skills
        </button>
        <button
          type="button"
          className="terminal-chip"
          onClick={() => executeCommand('status')}
        >
          &gt; status
        </button>
        <button
          type="button"
          className="terminal-chip"
          onClick={() => executeCommand('credentials')}
        >
          &gt; credentials
        </button>
        <button
          type="button"
          className="terminal-chip"
          onClick={() => executeCommand('contact')}
        >
          &gt; contact
        </button>
        <button
          type="button"
          className="terminal-chip"
          onClick={() => executeCommand('clear')}
        >
          &gt; clear
        </button>
      </div>
    </div>
  )
}

// Background Neural Particle Canvas
function NeuralMatrixCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55)
    const nodes = []

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        color:
          i % 4 === 0
            ? 'rgba(255, 220, 90, '
            : i % 4 === 1
            ? 'rgba(255, 170, 50, '
            : i % 4 === 2
            ? 'rgba(255, 250, 220, '
            : 'rgba(213, 174, 87, ',
      })
    }

    let mouse = { x: -1000, y: -1000 }
    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx
        n.y += n.vy

        if (n.x < 0) n.x = width
        if (n.x > width) n.x = 0
        if (n.y < 0) n.y = height
        if (n.y > height) n.y = 0

        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const distMouse = Math.sqrt(dx * dx + dy * dy)
        if (distMouse < 120) {
          n.x -= (dx / distMouse) * 0.6
          n.y -= (dy / distMouse) * 0.6
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2)
        ctx.fillStyle = n.color + '0.65)'
        ctx.fill()

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j]
          const dist = Math.hypot(n.x - m.x, n.y - m.y)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(m.x, m.y)
            const alpha = (1 - dist / 130) * 0.18
            ctx.strokeStyle = 'rgba(255, 215, 90, ' + (alpha * 1.25) + ')'
            ctx.lineWidth = 0.75
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  )
}

export default App
