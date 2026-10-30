export const profile = {
  name: 'Krunal Asari',
  role: 'Mathematics & Computing Undergraduate',
  fieldOfStudy: 'Mathematics & Computing',
  institute: 'Indian Institute of Technology Goa',
  tagline: 'Third-year undergrad at IIT Goa, building projects across machine learning, full-stack development, and systems programming.',
  email: 'krunalkumar.asari.24033@iitgoa.ac.in',
  phone: '+91 9016377642',
  links: {
    github: 'https://github.com/KNL110',
    // TODO: replace with your actual LinkedIn profile URL
    linkedin: 'https://www.linkedin.com/in/',
    kaggle: 'https://www.kaggle.com/krunalasari',
  },
  resume: '/Krunal_Asari_Resume.pdf',
  availableForFreelance: true,
}

export const education = [
  {
    school: 'Indian Institute of Technology Goa',
    degree: 'B.Tech, Mathematics and Computing',
    period: '2024 — Present',
  },
  {
    school: 'Green Valley, Gandhinagar, Gujarat',
    degree: 'Class 11-12, CBSE',
    period: '2023 — 2024',
  },
  {
    school: 'Jawahar Navodaya Vidhyalaya, Dhansura, Arvalli, Gujarat',
    degree: 'Class 6-10, CBSE',
    period: '2017 — 2022',
  },
]

export const skills = {
  Programming: ['C', 'C++', 'Go', 'Python', 'Java', 'JavaScript', 'Scikit-learn'],
  Tools: ['Linux', 'Git', 'GitHub', 'DBMS', 'Computer Networks'],
  Coursework: [
    'Data Structures',
    'Algorithm Design & Analysis',
    'Linear Algebra',
    'Machine Learning',
    'Probability & Statistics',
    'DBMS',
    'Numerical Analysis',
    'Discrete Maths',
    'Multivariate Calculus',
    'Real Analysis',
  ],
}

export const domains = ['Machine Learning', 'Web Development', 'Systems & Security', 'Databases'] as const

export type Domain = (typeof domains)[number]

export type Project = {
  title: string
  featured: boolean
  domains: Domain[]
  description: string
  bullets: string[]
  tags: string[]
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    title: 'ENGINOS',
    featured: true,
    domains: ['Web Development', 'Systems & Security'],
    description:
      'A self-hosted control panel that runs on your own machine. It syncs your GitHub repositories and mounts projects hosted anywhere under one domain, handling the DNS and routing through Cloudflare.',
    bullets: [
      'Go API and Next.js control panel, shipped with Docker Compose and no setup beyond a one-time code.',
      'Publishes a Cloudflare Worker that keeps the sites serving while the machine is off.',
      'Local-only by design: localhost binding, hostname checks, PIN lock, and encrypted stored tokens.',
    ],
    tags: ['Go', 'Next.js', 'TypeScript', 'Docker', 'Cloudflare Workers', 'SQLite'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/enginos' }],
  },
  {
    title: 'Crypto Exchange',
    featured: true,
    domains: ['Systems & Security'],
    description:
      'A crypto exchange backend in Go, built for learning, with a per-symbol order book and matching engine behind an HTTP API.',
    bullets: [
      'Limit and market orders with order expiry and self-trade prevention.',
      'Orders and cancels signed with the user\'s wallet (EIP-712), with nonce-based replay protection.',
      'Write-ahead log with crash recovery on startup, plus graceful shutdown.',
    ],
    tags: ['Go', 'EIP-712', 'Matching Engine', 'Write-Ahead Log', 'Ethereum'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/crypto-exchange' }],
  },
  {
    title: 'Tic-Tac-Toe RL',
    featured: true,
    domains: ['Machine Learning'],
    description:
      'Two tabular reinforcement learning agents, Q-learning and TD(0) value learning, that learn to play Tic-Tac-Toe perfectly through self-play, with no labeled data or hand-coded strategy.',
    bullets: [
      'After 1,000,000 self-play episodes, both agents draw every game against a perfect minimax opponent.',
      'An exhaustive check confirms no sequence of opponent moves beats either saved agent, from either side.',
      'Uses canonical states, negamax-style bootstrapping, and optimistic initialization.',
    ],
    tags: ['Python', 'Reinforcement Learning', 'Q-Learning', 'TD Learning'],
    links: [
      { label: 'GitHub', href: 'https://github.com/KNL110/tictactoe-rl' },
      { label: 'Live Demo', href: 'https://knl110.github.io/tictactoe-rl/' },
    ],
  },
  {
    title: 'Smart MCQ Solver',
    featured: true,
    domains: ['Machine Learning'],
    description:
      'Deep learning system for automated multiple-choice question answering. Evaluated Bi-LSTM, Transformer, and MLP architectures, and fine-tuned a MiniLM-L6 encoder with a custom prompt-option scoring head.',
    bullets: [
      'Built and compared Bi-LSTM, Transformer, and embedding-based MLP models in PyTorch.',
      'Fine-tuned MiniLM-L6 by unfreezing the final encoder layer and adding a custom classifier head.',
      'Tracked experiments end-to-end (training, evaluation, checkpointing) with Weights & Biases.',
      'Best model: a custom Bidirectional LSTM reaching 0.9972 validation MAP@3.',
    ],
    tags: ['PyTorch', 'Bi-LSTM', 'Transformers', 'MiniLM', 'W&B'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/SmartMCQ-Solver' }],
  },
  {
    title: 'Exam Portal Application',
    featured: true,
    domains: ['Web Development'],
    description:
      'Full-stack exam management system with separate backend and frontend repositories, enabling secure test administration and automated grading.',
    bullets: [
      'Built end-to-end on the MERN stack across two repositories.',
      'Supports multiple user roles — students and instructors — with distinct permissions and views.',
      'Handles secure test administration and automated grading.',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    links: [
      { label: 'GitHub (Backend)', href: 'https://github.com/KNL110/exam-portal-backend' },
      { label: 'GitHub (Frontend)', href: 'https://github.com/KNL110/exam-portal-frontend' },
    ],
  },
  {
    title: 'REF — Reverse Engineering Framework',
    featured: true,
    domains: ['Systems & Security'],
    description:
      'An interactive shell for exploring ELF-64 binaries — sections, program headers, and metadata navigable in a filesystem-like hierarchy. Built to lower the barrier to entry for reverse engineering beginners.',
    bullets: [
      'Parses ELF-64 executable structures with a C++17 core and CMake build.',
      'Interactive shell lets you browse binary internals like a filesystem.',
      'Actively developed, with a roadmap covering disassembly, multi-architecture support, and a plugin system.',
    ],
    tags: ['C++17', 'CMake', 'ELF', 'Reverse Engineering'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/REF' }],
  },
  {
    title: 'AutoWifiLogin',
    featured: false,
    domains: ['Systems & Security'],
    description:
      'A small Go daemon that automatically re-authenticates against IIT Goa\'s PAN-OS wifi captive portal whenever a session times out.',
    bullets: [
      'Detects expiry using the same generate_204 endpoint browsers use for captive-portal detection, run on a systemd timer.',
      'Login flow reverse-engineered from browser traffic, reading the single-use token and preauthid live from the portal.',
    ],
    tags: ['Go', 'Networking', 'Reverse Engineering'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/AutoWifiLogin' }],
  },
  {
    title: 'Process Discovery',
    featured: false,
    domains: ['Machine Learning'],
    description:
      'Recovers units of work from raw operation logs, ranks recurring processes as automation candidates, and automates the top one.',
    bullets: [
      'Segments interleaved activity into threads by agglomerative merging with a continuation score.',
      'Clusters segments into process labels by fingerprint similarity.',
      'Ranks candidates using directly-follows graphs, weighing time spent against branching complexity.',
    ],
    tags: ['Python', 'Process Mining', 'Clustering', 'Automation'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/processDiscovery' }],
  },
  {
    title: 'DistributedCAS',
    featured: false,
    domains: ['Systems & Security'],
    description:
      'A distributed content-addressable storage system in Go, in early development, currently focused on its peer-to-peer networking layer.',
    bullets: [
      'TCP transport with peer abstraction, accept loop, handshake, and message decoding.',
      'Transport layer defined behind interfaces and covered by tests.',
    ],
    tags: ['Go', 'Distributed Systems', 'P2P', 'TCP'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/DistributedCAS' }],
  },
  {
    title: 'JerryCop',
    featured: false,
    domains: ['Systems & Security'],
    description:
      'A config-driven HTTP reverse proxy in Go, in early development, built around a listener and worker pool connected by channels.',
    bullets: [
      'Listener queues incoming requests on a channel and caps concurrent connections with a semaphore.',
      'Workers forward requests to backends and hold the client connection open until the response returns.',
    ],
    tags: ['Go', 'Reverse Proxy', 'Concurrency', 'HTTP'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/JerryCop' }],
  },
  {
    title: 'Rent Management System',
    featured: false,
    domains: ['Databases'],
    description:
      'Desktop DBMS application for managing tenant records with role-based access, built with Python, Tkinter, and PostgreSQL.',
    bullets: [
      'Full CRUD operations via psycopg2 for persistent storage and record retrieval.',
      'Separate Admin and Tenant interfaces with authentication, input validation, and password masking.',
      'Rent summary export functionality for record-keeping.',
    ],
    tags: ['Python', 'Tkinter', 'PostgreSQL', 'psycopg2'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/rent-managment' }],
  },
  {
    title: '16-bit Virtual Machine',
    featured: false,
    domains: ['Systems & Security'],
    description:
      'A custom 16-bit virtual machine with a bytecode interpreter, built for executing obfuscated bytecode and CTF challenges. Inspired by the LC-3 architecture.',
    bullets: [
      '16 general-purpose registers and 64KB addressable memory.',
      'Custom instruction encoding for arithmetic, logic, memory, control flow, and system calls.',
      'Written in C, aimed at CTF-style reverse engineering challenges.',
    ],
    tags: ['C', 'Virtual Machine', 'CTF', 'Systems Programming'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/virtualMachine' }],
  },
  {
    title: 'Chest X-ray Classification',
    featured: false,
    domains: ['Machine Learning'],
    description:
      'A custom PyTorch CNN for multi-class classification of thoracic pathologies from chest X-ray images.',
    bullets: [
      'Five convolutional blocks with adaptive average pooling and a fully connected classifier head.',
      'Trained end-to-end on labeled thoracic imaging data.',
    ],
    tags: ['PyTorch', 'CNN', 'Computer Vision', 'Medical Imaging'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/ML-DLprojects' }],
  },
  {
    title: 'Comment Category Prediction',
    featured: false,
    domains: ['Machine Learning'],
    description:
      'Classical ML pipeline for text classification, combining feature engineering with gradient-boosted models.',
    bullets: [
      'TF-IDF word- and character-level features alongside engineered comment metadata.',
      'Multi-model setup built on LightGBM.',
    ],
    tags: ['LightGBM', 'TF-IDF', 'NLP', 'Scikit-learn'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/ML-DLprojects' }],
  },
  {
    title: 'Plant Leaf Super-Resolution',
    featured: false,
    domains: ['Machine Learning'],
    description:
      'A conditional GAN that performs blind 4x super-resolution, upscaling degraded 32x32 plant leaf images to 128x128 while reconstructing fine detail like veins and lesions.',
    bullets: [
      'Conditional GAN trained with L1 reconstruction loss and BCE adversarial loss.',
      'Adam optimizers for both generator and discriminator.',
    ],
    tags: ['PyTorch', 'GAN', 'Super-Resolution', 'Computer Vision'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/ML-DLprojects' }],
  },
  {
    title: 'Neural Network From Scratch',
    featured: false,
    domains: ['Machine Learning'],
    description:
      'A feedforward neural network and its gradient-based optimizers implemented from first principles in Python, no deep learning framework involved, applied to handwritten digit classification.',
    bullets: [
      'Custom forward/backward pass and gradient optimizers written from scratch.',
      'Applied to a digit classification task to validate the implementation.',
    ],
    tags: ['Python', 'NumPy', 'Neural Networks', 'From Scratch'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/nn-from-scratch' }],
  },
  {
    title: 'Naive Bayes Classifier',
    featured: false,
    domains: ['Machine Learning'],
    description:
      'A Naive Bayes text classifier applied to two tasks: topic categorization on the BBC News dataset and spam detection on the SMS Spam Collection dataset.',
    bullets: [
      'Implements Naive Bayes for multi-class news topic classification.',
      'Applied the same approach to binary spam/ham SMS classification.',
    ],
    tags: ['Python', 'Naive Bayes', 'NLP', 'Text Classification'],
    links: [{ label: 'GitHub', href: 'https://github.com/KNL110/Naive-Bayes-Classifier' }],
  },
]

export const positions = [
  {
    role: 'Secretary',
    org: 'Math and Finance Club, IIT Goa',
    period: '2024 — 2025',
  },
  {
    role: 'Core Member',
    org: 'Infosec (Cybersecurity Club)',
    period: '',
  },
  {
    role: 'Architect',
    org: 'Web Dev Club',
    period: '',
  },
]

export const extracurriculars = [
  {
    title: 'Inter IIT Tech Meet',
    description:
      'Selected to represent IIT Goa in the High Prep AI/ML problem statement at the Inter IIT Tech Meet.',
  },
  {
    title: 'Sports & Athletics',
    description: 'Basketball, Kho-Kho, and Handball.',
  },
]
