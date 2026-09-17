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
    id: "tcp-load-balancer",
    title: "TCP Load Balancer (L4)",
    category: "Systems",
    stack: ["C++20", "Linux (epoll)", "CMake"],
    match: 96,
    logline: "A single-threaded, event-driven L4 load balancer that survived its own use-after-free bugs to hit zero socket errors.",
    synopsis:
      "A single-threaded L4 (transport-layer) TCP load balancer in C++ using epoll for non-blocking, event-driven I/O — with a full asynchronous connection lifecycle, pluggable backend selection, and timerfd-driven health checking to route around failed backends.",
    highlights: [
      "Full asynchronous connection lifecycle: non-blocking connect() with EPOLLOUT completion detection, and partial-write buffering with backpressure handling to correctly relay data under kernel socket-buffer pressure",
      "Pluggable backend-selection layer (round robin, least-connections) via virtual dispatch over a fixed-capacity backend pool, paired with a timerfd-driven health checker using consecutive-failure thresholds to prevent flapping and reroute traffic within seconds",
      "Diagnosed and resolved multiple heap-use-after-free bugs in event-loop callback lifetime management using AddressSanitizer, caused by std::function closures mutating their own backing storage mid-execution — fixed by snapshotting captured state before any self-referential epoll_ctl operation",
      "Benchmarked with wrk at 100 concurrent connections across 3 backends: 416 req/sec with zero socket errors, validated against a direct-to-backend baseline (307 req/sec) to isolate the environment as the throughput ceiling rather than the load balancer",
      "Verified with unit tests (backend selection, health-aware routing) and an end-to-end integration test driving real traffic through the compiled binary, automated via GitHub Actions CI",
    ],
    stat: { value: "0", label: "socket errors" },
    github: "https://github.com/Aniruddhchilla2407/tcp-load-balancer", // TODO: confirm actual repo URL
  },
  {
    id: "lockfree-feed-handler",
    title: "Lock-Free Market Data Feed Handler",
    category: "Systems",
    stack: ["C", "POSIX Threads", "Linux"],
    match: 98,
    logline: "A lock-free market data pipeline hitting 25M ticks/sec — built to prove exactly how much a lock costs you.",
    synopsis:
      "A multi-threaded market data pipeline in C using a lock-free SPSC ring buffer to pass simulated tick data between producer and consumer threads with zero locks, paired with a per-symbol order book tracking live best bid/ask from streamed updates.",
    highlights: [
      "Lock-free SPSC ring buffer using C11 atomics, acquire/release memory ordering, and cache-line-padded indices to prevent false sharing",
      "Per-symbol order book tracking live best bid/ask from streamed tick updates, alongside a simulated multi-symbol tick generator modeling real-time market data feeds",
      "Benchmarked against a mutex-protected baseline with an identical interface across workloads up to 10M ticks: 4-6x higher throughput (up to 25M ticks/sec) and 3-6x lower p99 latency, with the mutex baseline showing tail-latency spikes up to 3.5ms under lock contention",
      "Validated correctness under real concurrent execution with a dedicated test suite (500K sequential ticks, zero loss/corruption), automated via GitHub Actions CI",
    ],
    stat: { value: "25M", label: "ticks/sec" },
    github: "https://github.com/Aniruddhchilla2407/Lockfree-feed-handler",
  },
  {
    id: "pegboard-lite",
    title: "Actor-orchestration",
    category: "Systems",
    stack: ["Rust", "Tokio", "Actor Model"],
    match: 98,
    logline: "An actor-model runtime built from scratch in Rust — a direct deep dive into the pattern behind Rivet's Pegboard.",
    synopsis:
      "A from-scratch actor orchestration runtime in Rust, built as a self-directed deep dive into the actor-supervisor pattern used in production distributed systems — designed to directly parallel Rivet's Pegboard, which orchestrates actors for game server infrastructure.",
    highlights: [
      "Isolated async actors with mailbox-based message passing (mpsc) and request/response via oneshot channels — no shared-memory state between actors",
      "Panic-safe supervision using catch_unwind: crashed actors are detected, logged, and automatically restarted with fresh state via exponential backoff, without taking down other actors or the process",
      "Generic Actor trait + registry (UUID → mailbox lookup) so any actor type can be spawned and supervised through one clean system API (spawn/send)",
      "Verified with 11 passing unit + integration tests covering mailbox delivery, crash recovery, and multi-actor state isolation",
    ],
    stat: { value: "11", label: "unit + integration tests" },
    github: "https://github.com/Aniruddhchilla2407/Actor-orchestration", // TODO: confirm this is the actual repo URL
  },
  {
    id: "datacontext",
    title: "DataContext",
    category: "AI Infrastructure",
    stack: ["Python", "FastAPI", "PostgreSQL", "MCP SDK", "React"],
    match: 96,
    logline: "An MCP-powered context layer that stops LLM agents from guessing what your data actually means.",
    synopsis:
      "A context layer that grounds LLM agents in schema metadata, business definitions, lineage, and trust signals before they query enterprise data — reducing hallucinated interpretations of ambiguous columns and making agent answers auditable against real business rules.",
    highlights: [
      "Ran controlled before/after comparisons of agent responses on identical questions using Groq/Llama 3.3, demonstrating measurable correctness differences — e.g. correctly resolving a misleading is_active column via an authoritative business-glossary rule",
      "Exposed the context layer as both a REST API and a 7-tool MCP server, letting any MCP-compatible agent consult schema, glossary, lineage, and trust metadata via tool calls — validated end-to-end with Claude Desktop",
      "Architected a shared service layer consumed identically by both the REST and MCP interfaces, avoiding logic duplication between the two access paths",
      "Validated with a 23-test pytest suite and GitHub Actions CI",
    ],
    stat: { value: "7-tool", label: "MCP server" },
    github: "https://github.com/Aniruddhchilla2407/datacontext",
  },
  {
    id: "agent-ops-console",
    title: "Agent Ops Console",
    category: "Full Stack",
    stack: ["Node.js", "Express", "TypeScript", "React", "PostgreSQL", "Redis"],
    match: 93,
    logline: "A real-time ops dashboard for monitoring long-running agent workflows that survive restarts and human approval steps.",
    synopsis:
      "A real-time operations dashboard for monitoring long-running, multi-step agent workflows spanning external systems and human approval points, built on an MVC-structured Express backend with Postgres-backed durable state.",
    highlights: [
      "Durable workflow state machine with explicit transition validation per step type, persisted to Postgres so execution survives server restarts with zero in-memory state",
      "Exponential backoff with jitter for external-call retries, plus a background scheduler that resumes stuck workflows on startup — verified via injected failure simulation",
      "Redis pub/sub → Server-Sent Events pipeline for live workflow updates to the React frontend, filtered per-workflow to minimize unnecessary client traffic",
      "Session-based authentication with bcrypt password hashing, IP-based login rate limiting, account lockout, and honeypot/timing-based bot protection",
      "React + TypeScript timeline UI visualizing step status, retry attempts, and human-approval actions in real time, backed by a JSON-configurable workflow template system",
    ],
    stat: { value: "0", label: "in-memory state (fully durable)" },
    github: "https://github.com/Aniruddhchilla2407/Agent-Ops-Console", // TODO: confirm actual repo URL
  },
  {
    id: "trade-ops-dashboard",
    title: "Trade Ops Dashboard",
    category: "Full Stack",
    stack: ["Django", "DRF", "React", "PostgreSQL"],
    match: 95,
    logline: "An internal-style trading ops platform that catches trade mismatches before they become real problems.",
    synopsis:
      "A full-stack reconciliation platform modeling the internal tooling used at trading firms: ops upload internal and external trade files, a custom matching engine flags discrepancies as typed breaks, and a live dashboard tracks positions and open issues end to end.",
    highlights: [
      "Reconciliation engine matching internal book-of-record trades against externally ingested trade files by symbol/side/quantity/counterparty, with price-tolerance checks and typed break classification (unmatched, price mismatch)",
      "Idempotent, re-runnable reconciliation pass — safe to trigger repeatedly for the same trade date without duplicating breaks, enabling both manual and scheduled triggers on one code path",
      "Weighted-average position cost recomputed from the internal trade ledger on every reconciliation run",
      "CSV ingestion pipeline for bulk trade uploads, with row-level validation and error reporting",
      "React (Vite) dashboard with polling-based live trade monitoring, break resolution workflow, and filterable views",
      "Django REST Framework API backed by PostgreSQL, validated with a pytest suite and GitHub Actions CI",
    ],
    stat: { value: "7", label: "test suite (pytest)" },
    github: "https://github.com/Aniruddhchilla2407/TradeOps---Dashboard",
  },
  {
    id: "pricewatch",
    title: "PriceWatch",
    category: "Full Stack",
    stack: ["Python", "Scheduler", "Notifications", "React"],
    match: 90,
    logline: "A price-drop and restock tracker that watches products for you and tells you the moment it's worth buying.",
    synopsis:
      "An in-progress e-commerce price tracker: a scheduled crawler pipeline monitors product pages for price and stock changes, with a notification layer alerting users the moment a tracked item drops in price or comes back in stock.",
    highlights: [
      "Scheduler/crawler service polling tracked product pages on a recurring schedule, with rate limiting and deduplication to avoid redundant requests",
      "Change-detection pipeline flagging price drops and restocks against historical data",
      "Notification system (email/SMS/push) triggered on detected price drops",
      "Dashboard for tracking wishlist items with historical price charts",
    ],
    stat: { value: "In Progress", label: "actively building" },
    github: "https://github.com/Aniruddhchilla2407/Smart-Restocker", 
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

export const CONTINUE_WATCHING = [
  {
    id: "pricewatch-build",
    projectId: "pricewatch", // ← links this card to the PriceWatch project entry
    title: "PriceWatch",
    note: "Building the scheduler, notification system, and tracking dashboard",
    progress: 20, // TODO: update as you go
  },
];


export const EXPERIENCE = {
  role: "AI Software Engineer Intern",
  company: "TechOptima, Hyderabad, India",
  dates: "Apr 2025 – Jun 2025",
  synopsis:
    "Contributed to AI-assisted credit analysis workflows for corporate and retail use cases, supporting data validation, document processing, and structured output generation.",
  highlights: [
    "Designed backend services and REST APIs for internal AI systems and financial analysis workflows",
    "Built modular data workflows for ingestion, validation, transformation, and processing to improve pipeline consistency",
    "Assisted development of Opt Legal and Opt Grad, contributing to backend/API functionality and workflow integration",
    "Participated in code reviews, debugging, sprint-based development, and cross-functional collaboration",
  ],
};

export const SKILL_ROWS = [
  { label: "Languages", items: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL", "C"] },
  { label: "Frameworks", items: ["FastAPI", "Django", "Node.js", "Express.js", "React.js"] },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "SQLite", "Docker", "GitHub Actions", "AWS EC2/S3/Lambda", "GCP"],
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
    "Currently looking for Software Engineer, AI Engineer, and Forward Deployed Engineer roles, with a focus on backend systems, distributed systems, and infrastructure — alongside a growing interest in AI/ML engineering.",
};