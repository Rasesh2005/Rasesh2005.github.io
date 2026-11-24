// All site content lives here. Edit this file to change what the site shows.

export const profile = {
  name: 'Rasesh Shetty',
  handle: 'rasesh',
  host: 'iitbhu',
  // Banner letters available: R A S E H T Y (see GLYPHS in components/Terminal.tsx).
  banner: ['RASESH', 'SHETTY'],
  bio: 'Systems programmer and competitive programmer. I build low-level software in C++ and ML systems in Python, and study Mathematics and Computing at IIT (BHU) Varanasi.',
  resume: 'https://drive.google.com/file/d/1EzyUhTkgYhGj9EbpE7BbmewpPCForHiD/view?usp=drive_link',
  cpi: 9.52,
  college: 'IDD Mathematics and Computing, IIT (BHU) Varanasi, 2023 to 2028',
  codeforcesRank: 'candidate master',
  facts: [
    ['host', 'IIT (BHU) Varanasi'],
    ['degree', 'Mathematics and Computing'],
    ['cpi', '9.52 / 10'],
    ['langs', 'C++, Python, JavaScript, Rust'],
    ['focus', 'Systems, ML, competitive programming'],
    ['codeforces', 'Candidate Master'],
  ],
}

// highlights: short bullet points shown in the project's README preview. Empty = hidden.
export const projects = [
  {
    name: 'redis-cpp',
    lang: 'C++',
    description: 'A Redis-compatible in-memory data store in C++23. Speaks RESP, so redis-cli connects to it unchanged.',
    stack: ['C++23', 'epoll', 'RESP'],
    highlights: [
      'Pub/Sub, transactions, streams, geospatial indexing, sorted sets (skip lists), blocking ops, partial master-replica replication.',
      '111K+ requests/sec, about 67% of Redis on PING and 50% on GET/SET, with sub-millisecond latency.',
      'Both multithreaded (shared_mutex) and event-driven (epoll) server architectures.',
    ],
    url: 'https://github.com/Rasesh2005/redis-cpp',
  },
  {
    name: 'file-explorer-shell',
    lang: 'C++',
    description: 'A terminal file explorer in C++, inspired by Yazi, built on POSIX system calls.',
    stack: ['C++', 'POSIX', 'LMDB'],
    highlights: [
      'Persistent LMDB-backed inverted index with async background indexing and inotify/FSEvents monitoring.',
      'Tested on 100,000 files (10 GB) with a 314.6 MB index: full-text search in 3.2 s vs 74 s with grep (23x faster).',
    ],
    url: 'https://github.com/Rasesh2005/file-explorer-shell',
  },
  {
    name: 'gdb-ui',
    lang: 'Python',
    description: 'A web-based GDB debugger UI with a fully async pipeline.',
    stack: ['FastAPI', 'React', 'WebSockets', 'Docker'],
    highlights: [
      '100+ concurrent sessions with 9 ms median latency for code sync and GDB/MI parsing.',
      'Per-user Docker-out-of-Docker sandboxes with 200 MB memory and 10 MB disk limits.',
    ],
    url: 'https://github.com/Rasesh2005/GDB-UI',
  },
  {
    name: 'quickbloom',
    lang: 'Rust',
    description: 'A high-performance Bloom filter library for Rust, published on crates.io.',
    stack: ['Rust', 'ahash', 'Atomics'],
    highlights: [
      'Cache-line blocked layout (64-byte blocks) with enhanced double hashing: 13.92 ns inserts vs 18.45 ns for fastbloom on 1M items.',
      'Lock-free atomic and concurrent variants, auto-scaling layers to hold the false-positive rate, and versioned binary persistence.',
    ],
    url: 'https://github.com/Rasesh2005/quickbloom',
  },
]

// The first entry is named in the intro line above the log.
export const achievements = [
  { event: 'Codeforces', stage: 'Rating 2038', result: 'Candidate Master' },
  { event: 'CodeChef', stage: 'Rating 2045', result: '5 star' },
  { event: 'AtCoder', stage: 'Rating 1727', result: 'Blue' },
  { event: 'LeetCode', stage: 'Rating 2138', result: 'Guardian' },
  { event: 'IICPC Quantfest', stage: 'Of 10k+ participants', result: 'Regionalist' },
  { event: 'AMS Derive', stage: 'Rank 26 of 2.5k+', result: 'Finalist' },
  { event: 'Inter IIT 13.0', stage: 'Adobe computer vision', result: 'Team member' },
  { event: 'Meta Hacker Cup', stage: '2025, 1,412 / 5,972 in R2', result: 'Round 2' },
  { event: 'Department', stage: 'A* in 4 subjects', result: 'Rank 5' },
]

// url is optional; entries without one show no link.
export const openSource = [
  {
    kind: 'open source',
    program: 'Summer of Bitcoin',
    role: 'Genesis-KB (BraidPool)',
    period: 'May to Aug 2026',
    repo: 'genesis-kb',
    url: 'https://github.com/genesis-kb',
    contributions: [
      'Built an AI knowledge pipeline: YouTube crawling, async ingestion, multi-provider transcription, LLM correction, translation and summarization.',
      'Built Hello Bitcoin, an online judge for Programming Bitcoin with Docker sandboxing, stateless workers and queue-based orchestration.',
    ],
  },
  {
    kind: 'research internship',
    program: 'Østfold University College',
    role: 'ML research intern, Prof. Sukalpa Chanda',
    period: 'Dec 2025',
    repo: '',
    url: '',
    contributions: [
      'Real-time zero-shot handwritten word spotting with RT-DETRv2, PHOSC embeddings and RoPE/RoPE2D, trained with CIoU and Hungarian matching.',
      'Evaluated on benchmark handwritten datasets with mAP and QbS, showing strong zero-shot generalisation.',
    ],
  },
]

export const publications = [
  {
    key: 'shetty2024museums',
    title: "Understanding the World's Museums through Vision-Language Reasoning",
    note: 'ICCV 2025 · arXiv:2412.01370',
    url: 'https://arxiv.org/abs/2412.01370',
  },
]

// Entries with an empty url are hidden.
export const socials = [
  { label: 'email', value: 'rasesh.udayshetty@gmail.com', url: 'mailto:rasesh.udayshetty@gmail.com' },
  { label: 'telegram', value: '', url: '' }, // TODO: add handle, e.g. value '@handle', url 'https://t.me/handle'
  { label: 'github', value: 'Rasesh2005', url: 'https://github.com/Rasesh2005' },
  { label: 'linkedin', value: 'rasesh-shetty', url: 'https://linkedin.com/in/rasesh-shetty' },
  { label: 'x', value: '@rasesh_shetty', url: 'https://x.com/rasesh_shetty' },
  { label: 'codeforces', value: 'ReaperScythe21', url: 'https://codeforces.com/profile/ReaperScythe21' },
  { label: 'codechef', value: 'rasesh_shetty', url: 'https://www.codechef.com/users/rasesh_shetty' },
  { label: 'atcoder', value: 'rasesh_shetty', url: 'https://atcoder.jp/users/rasesh_shetty' },
  { label: 'leetcode', value: 'RaseshShetty', url: 'https://leetcode.com/u/RaseshShetty/' },
]
