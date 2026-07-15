// ---- Portfolio content ----
// Edit this file to update copy. Layout components never need to change.

export const PROFILE = {
  name: "Aniruddh Chilla",
  tagline: "Backend & distributed systems engineer",
  email: "aniruddhchilla@gmail.com",
  github: "https://github.com/Aniruddhchilla2407",
  linkedin: "https://www.linkedin.com/in/aniruddh-chilla-294a72287/", 
};

export const HERO_PROJECT_ID = "zerocopy-net-stack";

export const PROJECTS = [
  {
    id: "zerocopy-net-stack",
    title: "zerocopy-net-stack",
    category: "Systems",
    stack: ["C++20", "Linux TUN/TAP", "CMake"],
    match: 97,
    logline: "A zero-allocation packet parser built to shave microseconds off every frame.",
    synopsis:
      "A from-scratch C++20 packet parser that reads raw Ethernet frames off a Linux TUN/TAP device with zero heap allocation on the hot path — built as a direct portfolio piece for low-latency trading infra roles.",
    highlights: [
      "Zero-allocation hot path via a pre-allocated memory arena with O(1) acquire/release semantics",
      "Zero-copy Ethernet/IPv4/TCP parsing using packed structs and pointer casts, with bounds-checked variable-length header access (IHL, data-offset)",
      "Fixed-capacity, open-addressed flow hash table — 65K entries, FNV-1a hashing, linear probing, O(1) amortized lookup, no runtime resizing",
      "6-state TCP connection lifecycle tracked per flow",
      "Benchmarked against a naive malloc-per-packet baseline across 1M synthetic packets: 7.27M packets/sec, 1.43x higher throughput, 1.53x lower p99 tail latency",
      "Full CI suite automated via GitHub Actions",
    ],
    stat: { value: "7.27M", label: "packets/sec" },
    github: "https://github.com/Aniruddhchilla2407/zerocopy-net-stack",
  },
  {
    id: "distributed-systems-lab",
    title: "Distributed Systems Lab",
    category: "Distributed Systems",
    stack: ["Python", "FastAPI", "asyncio"],
    match: 94,
    logline: "A monorepo built around one durable log primitive — reused as both a KV store and a Kafka-style broker.",
    synopsis:
      "A Python monorepo exploring durability and crash recovery from first principles: one append-only log format powers both a write-ahead-log key-value store and a Kafka-style message broker.",
    highlights: [
      "Fixed-header binary log format with versioning and CRC32 checksums, reused across the WAL and the broker to detect and truncate torn writes during crash recovery",
      "Durable key-value store with WAL-based recovery, batching, and log compaction — exposed via FastAPI, validated with 29 unit tests",
      "Kafka-style broker: topics, partitions, consumer groups, persisted offset commits, deterministic key-based partitioning, round-robin assignment",
      "Async benchmarking CLI (asyncio + httpx) reporting p50/p95/p99 latency and throughput — used to diagnose write-lock contention as the main concurrency bottleneck",
    ],
    stat: { value: "29", label: "unit tests" },
    github: "https://github.com/Aniruddhchilla2407/distributed-systems-lab",
  },
  {
    id: "connpool",
    title: "connpool",
    category: "Concurrency",
    stack: ["Python", "Threading", "PostgreSQL", "Redis", "SQLite"],
    match: 91,
    logline: "A thread-safe connection pool that keeps blocking I/O out of every critical section.",
    synopsis:
      "A generic, production-grade thread-safe connection pool supporting any backend through pluggable create/close/validate interfaces — published to PyPI with full CI across three OSes.",
    highlights: [
      "Built with threading.Condition; lock discipline keeps blocking I/O outside critical sections while guaranteeing exclusive connection ownership across threads",
      "34-test suite covering concurrency stress tests, timeout/exhaustion behavior, health-check eviction, and lifecycle recycling",
      "93% test coverage, zero mypy --strict errors, zero ruff violations",
      "GitHub Actions CI across Python 3.10–3.13 on Linux, macOS, and Windows",
      "Benchmarked up to 8.2x throughput improvement over a naive single-lock baseline at max_size=8, with correct saturation behavior beyond pool capacity",
    ],
    stat: { value: "8.2x", label: "throughput vs. naive lock" },
    github: "https://github.com/Aniruddhchilla2407/connpool",
  },
  {
    id: "llm-eval-bench",
    title: "llm-eval-bench",
    category: "Developer Tooling",
    stack: ["Python", "CLI", "YAML"],
    match: 88,
    logline: "A YAML-driven CLI for evaluating LLM prompts the same way you'd run a test suite.",
    synopsis:
      "A pip-installable command-line tool that evaluates LLM prompt outputs against YAML-defined test suites, with provider-agnostic adapters so the same suite runs against any model backend.",
    highlights: [
      "Provider-agnostic model adapters — swap the backend without rewriting test suites",
      "Three evaluator types for scoring prompt outputs against expected behavior",
      "Plugin system for adding custom evaluators",
      "Shipped with GitHub Actions CI and a public GitHub release",
    ],
    stat: { value: "3", label: "evaluator types" },
    github: "https://github.com/Aniruddhchilla2407/llm-eval-bench",
  },
];

export const EXPERIENCE = {
  role: "AI Software Engineer Intern",
  company: "TechOptima, Hyderabad, India",
  dates: "Apr 2025 – Jun 2025",
  synopsis:
    "Embedded on a team shipping backend services and monitoring tooling for internal AI-driven credit analysis systems.",
  highlights: [
    "Designed and implemented scalable backend services and REST APIs supporting credit analysis workflows and internal AI systems",
    "Built modular workflows for data ingestion, validation, transformation, and processing to improve consistency and reliability",
    "Developed monitoring dashboards to track system health, model performance, and operational metrics for production workflows",
    "Participated in code reviews, debugging sessions, sprint-based development, and cross-functional collaboration",
  ],
};

export const SKILL_ROWS = [
  { label: "Languages", items: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL", "C"] },
  { label: "Frameworks", items: ["FastAPI", "Django", "Node.js", "Express.js", "React.js"] },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "SQLite", "Docker", "GitHub Actions", "AWS EC2/S3", "GCP"],
  },
  {
    label: "Core Concepts",
    items: ["Distributed Systems", "Concurrency", "WAL & Crash Recovery", "Benchmarking", "OOP", "Data Structures & Algorithms"],
  },
];

export const EDUCATION = {
  school: "GITAM University, Vizag, Andhra Pradesh",
  degree: "B.Tech in Computer Science Engineering",
  dates: "Sep 2022 – Apr 2026",
  detail: "CGPA: 7.8/10",
  coursework:
    "Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Probability & Statistics, Linear Algebra",
};
export const ABOUT = {
  intro:
    "I'm a backend and distributed systems engineer who likes taking a system apart to understand exactly where the time goes — a lock, a syscall, a cache miss — and rebuilding it to be faster and more correct.",
  interests: [
    "Distributed systems fundamentals — write-ahead logs, crash recovery, consensus-adjacent problems like partitioning and offset tracking",
    "Concurrency-safe infrastructure — connection pooling, thread-safe primitives, and code that has to stay correct under contention, not just in the happy path",
    "Low-latency and performance engineering — currently exploring zero-copy parsing and benchmarking-driven optimization, an area I'm actively building into",
    "Applied AI/ML systems — building and evaluating LLM-backed tools, with interest in the engineering side of AI infrastructure",
  ],
  roles:
    "Currently looking for software engineer roles, with a focus on backend systems, distributed systems, and infrastructure — alongside a growing interest in AI/ML engineering.",
};