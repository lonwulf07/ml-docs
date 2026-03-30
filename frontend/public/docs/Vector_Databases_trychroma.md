# Trychroma Documentation
> Scraped on: 2026-03-30 | Root Source: [https://www.trychroma.com/](https://www.trychroma.com/)



---

## Source: https://www.trychroma.com/

# Open-source data infrastructure for AI

## Fast, serverless, and scalable infrastructure supporting vector, full-text, regex, and metadata search. Built on object storage and trusted by millions of developers. Open-source Apache 2.0.

Or,

[get started locally](https://docs.trychroma.com/docs/overview/getting-started).AI App

Chroma

knowledge_base - 1,277,467 records

awaiting query input

5M+ monthly downloads

Apache 2.0

24k Github stars

24k Github stars

Low latency search

Fast queries over billions of multi-tenant indexes.

Up to 10x cheaper

Built on object storage with automatic data tiering.

No engineering ops

Scales with your data and traffic. SOC 2 Type II.

Features

◆

Vector search

Semantic similarity search

◇

Sparse vector search

Lexical search (BM25, SPLADE)

●

Full-text Search

Trigram and regex search

◐

Metadata Search

Filtering and faceted search

◊

Forking

Dataset versioning, A/B testing, and roll-outs

▣

CLI

Command-line tools for development

```
import { ChromaClient } from 'chromadb'
const client = new ChromaClient()
const collection = await client.getOrCreateCollection({
name: "my_collection"
})
// Add documents with embeddings
await collection.add({
ids: ["id1", "id2"],
documents: ["This is a document", "Another doc"],
embeddings: [[1.2, 2.3, ...], [3.4, 4.5, ...]]
})
// Query by vector similarity
const results = await collection.query({
queryEmbeddings: [[1.1, 2.2, ...]],
nResults: 10
})
```


Terminal Output

Run the code above to see the output ^

Performance

Fast search over billions of multi-tenant indexes

Chroma's indexes are built and optimized for object-storage offering unparalleled cost and performance. State-of-the-art vector, full-text, and regex search.

Latency

Query Latency

@384 dim at 100k vectors

Warm

Cold

p50

20ms

650ms

p90

27ms

1.2s

p99

57ms

1.5s

[Contact us](/talk-with-us)to run a POC for your specific workload.

Dedicated clusters can be scaled to your specific requirements.

Technical specs

Write throughput (per collection)30 MB/s (2000+ QPS)

Concurrent reads (per collection)10 (200+ QPS)

Collections per database1M

Records per collection5M

Recall90-100%

Zero-ops infra

┌───────────────────────────────┐ │ Query Layer │ │ Fast memory cache (hot) │ │ SSD cache (warm) │ └───────────────────────────────┘ ↕ Intelligent tiering ┌───────────────────────────────┐ │ Storage Layer │ │ S3 / GCS (cold) │ │ • All vectors │ │ • All metadata │ │ • All indexes │ └───────────────────────────────┘

Unlike legacy search systems, Chroma is a database you'll want to be on-call for.

✓Auto-scales with usage

✓No manual tuning

✓Serverless pricing

Chroma takes full advantage of object storage with automatic query-aware data tiering and caching.

✓Vectors are large: 1GB text → 15GB of vectors

✓Memory is expensive: $5/GB/mo

✓Object storage is not: $0.02/GB/mo

Enterprise

Chroma brings the security, compliance, education and operational model enterprises need with our Apache 2.0 architecture.

BYOC in your VPC, multi-cloud/multi-region replication, point-in-time-recovery ensure a resilient and scalable search system with the same 0-ops story as Cloud.

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▓░ ░▓ ▓░ ┌──────────── YOUR VPC ─────────────┐ ░▓ ▓░ │ │ ░▓ ▓░ │ █ DATA PLANE █ │ ░▓ ▓░ │ │ ░▓ ▓░ │ Your data, your cloud │ ░▓ ▓░ │ │ ░▓ ▓░ │ │ ░▓ ▓░ └───────────────────────────────────┘ ░▓ ▓░ │ ░▓ ▓░ │ ░▓ ▓░ ▼ ░▓ ▓░ ═════════════════════════════════════ ░▓ ▓░ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ░▓ ▓░ ░▓ ▓░ ┌────────── CHROMA VPC ─────────────┐ ░▓ ▓░ │ │ ░▓ ▓░ │ █ CONTROL PLANE █ │ ░▓ ▓░ │ │ ░▓ ▓░ │ Managed by Chroma │ ░▓ ▓░ │ Monitoring, backups, ops │ ░▓ ▓░ │ │ ░▓ ▓░ └───────────────────────────────────┘ ░▓ ▓░ ░▓ ▓░ ✓ BYOC in your VPC ░▓ ▓░ ✓ Multi-region replication ░▓ ▓░ ✓ 0-ops management ░▓ ▓░ ░▓ ▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

[▶] Videos

[●] Open source community

Open-source databases give your team the control and flexibility to build exactly what you need. No licensing limits, no vendor lock-in, just reliable performance backed by a large community.

[Github →](https://github.com/chroma-core/chroma)

Chroma has over 26k GitHub stars and is used in over 90k other open-source codebases on GitHub. It is downloaded over 11M times a month.

[Discord →](https://discord.gg/MMeYNTmh3x)

Join the Discord to see what people are building!

[Run Chroma OSS →](https://docs.trychroma.com/deployment)

Run Chroma on your own infrastructure with our open-source deployment guides.

[◆] Support

[Open-source →](https://discord.gg/MMeYNTmh3x)

Join our 10K person strong Discord community to get fast and expert help from the open-source community.

[All plans →](https://docs.trychroma.com/support)

Helpful support direct from engineers on the Chroma team

[Pro Plan →](/pricing)

Direct Slack communication for fast support and help designing and iterating your search system.

[Enterprise Plan →](/enterprise)

Customized SLAs ensure your team gets 24/7 assistance.

[▲] Research

Our research spans both basic and applied research for search, retrieval, agents, and context engineering.

[■] Updates

Chroma's project is rapidly improving. Here are the latest updates.


Metadata Arrays

Store arrays of strings, numbers, and booleans in metadata.

Feb 2026


Indexing Status

Monitor real-time indexing progress of your collections.

Jan 2026


Read Level

Control read consistency with index-only or full read modes.

Jan 2026


Private Networking

Secure connectivity with AWS PrivateLink support.

Jan 2026


GroupBy

Group and aggregate search results by metadata keys.

Jan 2026


Customer-Managed Encryption Keys

Encrypt your data with your own encryption keys.

Dec 2025


Chroma Web Sync

Automatically crawl, scrape, chunk and embed web pages.

Nov 2025


Sparse Vector Search

First class support for BM25 and SPLADE vectors.

Oct 2025


Introducing Chroma Sync

Automatically chunk, embed, and index GitHub repos.

Oct 2025


wal3: Chroma's Write-Ahead Log

A Write-Ahead Log for Chroma, Built on Object Storage

Sep 2025


Package Search MCP

Query thousands of open-source repos through MCP.

Sep 2025


Collection Forking

Fast duplication of collections with copy-on-write.

Aug 2025


Designing a query execution engine

A push-based, morsel-driven execution engine in Rust.

Aug 2025


70% Data Throughput Increase

Performance boost using base64 vector encoding.

Jul 2025


Regex Search Support

Search using regular expressions with new operators.

Jun 2025


JavaScript Client V3

Complete rewrite with reduced bundle size.

Jun 2025

We’re looking for curious people who are dedicated to becoming world-class at their craft to join our team.

Get started

Get up and running in 30 seconds or less with $5 in free credits.

Quick Start

`pip install chromadb`

JavaScript / TypeScript

[JavaScript / TypeScript getting started docs →](https://docs.trychroma.com/docs/overview/getting-started#typescript)`npm install chromadb`

---

## Source: https://www.trychroma.com/home

# Open-source data infrastructure for AI

## Fast, serverless, and scalable infrastructure supporting vector, full-text, regex, and metadata search. Built on object storage and trusted by millions of developers. Open-source Apache 2.0.

Or,

[get started locally](https://docs.trychroma.com/docs/overview/getting-started).AI App

Chroma

knowledge_base - 1,277,467 records

awaiting query input

5M+ monthly downloads

Apache 2.0

24k Github stars

24k Github stars

Low latency search

Fast queries over billions of multi-tenant indexes.

Up to 10x cheaper

Built on object storage with automatic data tiering.

No engineering ops

Scales with your data and traffic. SOC 2 Type II.

Features

◆

Vector search

Semantic similarity search

◇

Sparse vector search

Lexical search (BM25, SPLADE)

●

Full-text Search

Trigram and regex search

◐

Metadata Search

Filtering and faceted search

◊

Forking

Dataset versioning, A/B testing, and roll-outs

▣

CLI

Command-line tools for development

```
import { ChromaClient } from 'chromadb'
const client = new ChromaClient()
const collection = await client.getOrCreateCollection({
name: "my_collection"
})
// Add documents with embeddings
await collection.add({
ids: ["id1", "id2"],
documents: ["This is a document", "Another doc"],
embeddings: [[1.2, 2.3, ...], [3.4, 4.5, ...]]
})
// Query by vector similarity
const results = await collection.query({
queryEmbeddings: [[1.1, 2.2, ...]],
nResults: 10
})
```


Terminal Output

Run the code above to see the output ^

Performance

Fast search over billions of multi-tenant indexes

Chroma's indexes are built and optimized for object-storage offering unparalleled cost and performance. State-of-the-art vector, full-text, and regex search.

Latency

Query Latency

@384 dim at 100k vectors

Warm

Cold

p50

20ms

650ms

p90

27ms

1.2s

p99

57ms

1.5s

[Contact us](/talk-with-us)to run a POC for your specific workload.

Dedicated clusters can be scaled to your specific requirements.

Technical specs

Write throughput (per collection)30 MB/s (2000+ QPS)

Concurrent reads (per collection)10 (200+ QPS)

Collections per database1M

Records per collection5M

Recall90-100%

Zero-ops infra

┌───────────────────────────────┐ │ Query Layer │ │ Fast memory cache (hot) │ │ SSD cache (warm) │ └───────────────────────────────┘ ↕ Intelligent tiering ┌───────────────────────────────┐ │ Storage Layer │ │ S3 / GCS (cold) │ │ • All vectors │ │ • All metadata │ │ • All indexes │ └───────────────────────────────┘

Unlike legacy search systems, Chroma is a database you'll want to be on-call for.

✓Auto-scales with usage

✓No manual tuning

✓Serverless pricing

Chroma takes full advantage of object storage with automatic query-aware data tiering and caching.

✓Vectors are large: 1GB text → 15GB of vectors

✓Memory is expensive: $5/GB/mo

✓Object storage is not: $0.02/GB/mo

Enterprise

Chroma brings the security, compliance, education and operational model enterprises need with our Apache 2.0 architecture.

BYOC in your VPC, multi-cloud/multi-region replication, point-in-time-recovery ensure a resilient and scalable search system with the same 0-ops story as Cloud.

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▓░ ░▓ ▓░ ┌──────────── YOUR VPC ─────────────┐ ░▓ ▓░ │ │ ░▓ ▓░ │ █ DATA PLANE █ │ ░▓ ▓░ │ │ ░▓ ▓░ │ Your data, your cloud │ ░▓ ▓░ │ │ ░▓ ▓░ │ │ ░▓ ▓░ └───────────────────────────────────┘ ░▓ ▓░ │ ░▓ ▓░ │ ░▓ ▓░ ▼ ░▓ ▓░ ═════════════════════════════════════ ░▓ ▓░ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ░▓ ▓░ ░▓ ▓░ ┌────────── CHROMA VPC ─────────────┐ ░▓ ▓░ │ │ ░▓ ▓░ │ █ CONTROL PLANE █ │ ░▓ ▓░ │ │ ░▓ ▓░ │ Managed by Chroma │ ░▓ ▓░ │ Monitoring, backups, ops │ ░▓ ▓░ │ │ ░▓ ▓░ └───────────────────────────────────┘ ░▓ ▓░ ░▓ ▓░ ✓ BYOC in your VPC ░▓ ▓░ ✓ Multi-region replication ░▓ ▓░ ✓ 0-ops management ░▓ ▓░ ░▓ ▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

[▶] Videos

[●] Open source community

Open-source databases give your team the control and flexibility to build exactly what you need. No licensing limits, no vendor lock-in, just reliable performance backed by a large community.

[Github →](https://github.com/chroma-core/chroma)

Chroma has over 26k GitHub stars and is used in over 90k other open-source codebases on GitHub. It is downloaded over 11M times a month.

[Discord →](https://discord.gg/MMeYNTmh3x)

Join the Discord to see what people are building!

[Run Chroma OSS →](https://docs.trychroma.com/deployment)

Run Chroma on your own infrastructure with our open-source deployment guides.

[◆] Support

[Open-source →](https://discord.gg/MMeYNTmh3x)

Join our 10K person strong Discord community to get fast and expert help from the open-source community.

[All plans →](https://docs.trychroma.com/support)

Helpful support direct from engineers on the Chroma team

[Pro Plan →](/pricing)

Direct Slack communication for fast support and help designing and iterating your search system.

[Enterprise Plan →](/enterprise)

Customized SLAs ensure your team gets 24/7 assistance.

[▲] Research

Our research spans both basic and applied research for search, retrieval, agents, and context engineering.

[■] Updates

Chroma's project is rapidly improving. Here are the latest updates.


Metadata Arrays

Store arrays of strings, numbers, and booleans in metadata.

Feb 2026


Indexing Status

Monitor real-time indexing progress of your collections.

Jan 2026


Read Level

Control read consistency with index-only or full read modes.

Jan 2026


Private Networking

Secure connectivity with AWS PrivateLink support.

Jan 2026


GroupBy

Group and aggregate search results by metadata keys.

Jan 2026


Customer-Managed Encryption Keys

Encrypt your data with your own encryption keys.

Dec 2025


Chroma Web Sync

Automatically crawl, scrape, chunk and embed web pages.

Nov 2025


Sparse Vector Search

First class support for BM25 and SPLADE vectors.

Oct 2025


Introducing Chroma Sync

Automatically chunk, embed, and index GitHub repos.

Oct 2025


wal3: Chroma's Write-Ahead Log

A Write-Ahead Log for Chroma, Built on Object Storage

Sep 2025


Package Search MCP

Query thousands of open-source repos through MCP.

Sep 2025


Collection Forking

Fast duplication of collections with copy-on-write.

Aug 2025


Designing a query execution engine

A push-based, morsel-driven execution engine in Rust.

Aug 2025


70% Data Throughput Increase

Performance boost using base64 vector encoding.

Jul 2025


Regex Search Support

Search using regular expressions with new operators.

Jun 2025


JavaScript Client V3

Complete rewrite with reduced bundle size.

Jun 2025

We’re looking for curious people who are dedicated to becoming world-class at their craft to join our team.

Get started

Get up and running in 30 seconds or less with $5 in free credits.

Quick Start

`pip install chromadb`

JavaScript / TypeScript

[JavaScript / TypeScript getting started docs →](https://docs.trychroma.com/docs/overview/getting-started#typescript)`npm install chromadb`

---

## Source: https://www.trychroma.com/products/sync

# Chroma Sync

Serverless data ingestion for Chroma Cloud. Connect your S3 buckets, GitHub repositories, and websites. Chroma handles parsing, chunking, and embedding so you can start searching in minutes.

## Built for scale and reliability

Whether you're syncing a handful of files or millions of documents, Sync runs the same pipeline: a queue-based system with retries, rate-limit awareness, and automatic error recovery.

Designed to maximize throughput without dropping work. Monitor every invocation in the dashboard or through the Sync API.

+--------------------------------------+ | YOUR DATA SOURCES | | | | +--------+ +--------+ +--------+ | | | S3 | | GitHub | | Web | | | | bucket | | repos | | pages | | | +---+----+ +---+----+ +---+----+ | | | | | | +------+----------+----------+---------+ | | | v v v +======================================+ || CHROMA SYNC || || || || PARSE --> CHUNK --> EMBED || || || || * Retries & error recovery || || * Rate-limit awareness || || * Maximum throughput || || || +================+=====================+ | v +--------------------------------------+ | CHROMA DATABASE | | | | Ready for vector, full-text, | | regex, sparse, and hybrid search | | | +--------------------------------------+

## Three sources, one pipeline

Sync Features

S3 Sync

- Bucket-level connections
- PDFs, docs, images, and text
- Auto-sync for file updates
- Queue-based ingest at scale

GitHub Sync

- Public and private repositories
- Branch or commit targeting
- Diff-based incremental updates
- Syntax-aware code chunking

Web Sync

- JavaScript page rendering
- Recursive crawl from a seed URL
- Depth and path filters
- Structured markdown extraction

## From data to search

1.

### Parse

PDFs, Office documents, images, ebooks, HTML, and code, converted to clean markdown with tables, headings, and structure preserved.

2.

### Chunk

Tree-sitter for syntax-aware code chunking. Structured markdown chunking for documents. Respects function boundaries and sections.

3.

### Embed

Dense and sparse embeddings generated automatically with open models. No extra API keys needed.

4.

### Search

Ready for semantic, sparse, hybrid, regex, and full-text search across your data.

## Usage-based pricing

$0.04

per GiB processed

[View full pricing →](/pricing)

+ $0.01 / document page extracted

+ $0.01 / webpage scraped

---

## Source: https://www.trychroma.com/products/chromadb

# ChromaDB

The open-source data infrastructure for AI. Fast, serverless, and scalable — supporting vector, full-text, regex, and metadata search. Built on object storage and trusted by millions of developers.

Trusted by teams at

## Open source at the core

Chroma is licensed under Apache 2.0. The same codebase powers both the open-source database and Chroma Cloud, so there is no vendor lock-in.

### Single-node

Run locally with pip, npm, or Docker. In-memory or persistent storage.

### Chroma Cloud

Fully managed, serverless, and scalable. No provisioning, no tuning. Get started in under 30 seconds.

### Bring your own cloud

Deploy in your own VPC with multi-region replication and point-in-time recovery. Full control over your infrastructure.

Many search methods, one platform

Chroma unifies dense vector search, sparse vector search, full-text search, regex matching, and metadata filtering in a single query interface. Combine them with hybrid search for the best retrieval quality.

◆

Vector search

Semantic similarity search

◇

Sparse vector search

Lexical search (BM25, SPLADE)

●

Full-text Search

Trigram and regex search

◐

Metadata Search

Filtering and faceted search

◊

Forking

Dataset versioning, A/B testing, and roll-outs

▣

CLI

Command-line tools for development

```
import { ChromaClient } from 'chromadb'
const client = new ChromaClient()
const collection = await client.getOrCreateCollection({
name: "my_collection"
})
// Add documents with embeddings
await collection.add({
ids: ["id1", "id2"],
documents: ["This is a document", "Another doc"],
embeddings: [[1.2, 2.3, ...], [3.4, 4.5, ...]]
})
// Query by vector similarity
const results = await collection.query({
queryEmbeddings: [[1.1, 2.2, ...]],
nResults: 10
})
```


Terminal Output

Run the code above to see the output ^

Fast search over billions of multi-tenant indexes

Chroma's indexes are built and optimized for object storage, offering unparalleled cost and performance. State-of-the-art vector, full-text, and regex search.

Latency

Query Latency

@384 dim at 100k vectors

Warm

Cold

p50

20ms

650ms

p90

27ms

1.2s

p99

57ms

1.5s

[Contact us](/talk-with-us)to run a POC for your specific workload.

Dedicated clusters can be scaled to your specific requirements.

Technical specs

Write throughput (per collection)30 MB/s (2000+ QPS)

Concurrent reads (per collection)10 (200+ QPS)

Collections per database1M

Records per collection5M

Recall90-100%

Zero-ops infra

┌───────────────────────────────┐ │ Query Layer │ │ Fast memory cache (hot) │ │ SSD cache (warm) │ └───────────────────────────────┘ ↕ Intelligent tiering ┌───────────────────────────────┐ │ Storage Layer │ │ S3 / GCS (cold) │ │ • All vectors │ │ • All metadata │ │ • All indexes │ └───────────────────────────────┘

Unlike legacy search systems, Chroma is a database you'll want to be on-call for.

✓Auto-scales with usage

✓No manual tuning

✓Serverless pricing

Chroma takes full advantage of object storage with automatic query-aware data tiering and caching.

✓Vectors are large: 1GB text → 15GB of vectors

✓Memory is expensive: $5/GB/mo

✓Object storage is not: $0.02/GB/mo