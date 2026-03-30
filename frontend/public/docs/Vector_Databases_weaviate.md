# Weaviate Documentation
> Scraped on: 2026-03-30 | Root Source: [https://www.weaviate.io/developers/weaviate](https://www.weaviate.io/developers/weaviate)



---

## Source: https://www.weaviate.io/developers/weaviate

# Weaviate Database

Weaviate *(we-vee-eight)* is an open-source, AI vector database. Use
this documentation to get started with Weaviate and learn how to get the
most out of Weaviate's features.

[New to Weaviate?](/weaviate/quickstart)

Start with the Quickstart tutorial – an end-to-end demo that takes 15–30 minutes.

[Weaviate Academy](https://academy.weaviate.io/)

Check out Weaviate Academy – a learning platform centered around AI-native development.

## Find the right documentation and resources[](#find-the-right-documentation-and-resources)

The Weaviate documentation is structured into multiple units based on the service and functionality.

[Weaviate Database](/weaviate)

Develop AI applications using Weaviate's APIs and tools

[Deploy](/deploy)

Deploy, configure, and maintain Weaviate Database

[Weaviate Agents](/agents)

Build and deploy intelligent agents with Weaviate

[Weaviate Cloud](/cloud)

Manage and scale Weaviate in the cloud

## AI-assisted coding[](#ai-assisted-coding)

Check out our resources on AI-assisted coding (*Vibe coding*) with Weaviate:

[Weaviate Docs MCP Server](/weaviate/mcp/docs-mcp-server)

Instant access to Weaviate's documentation directly in your AI development environment.

[Best practices for coding with AI](/weaviate/best-practices/code-generation)

Avoid hallucinations and improve your AI-assisted coding experience.

## What is Weaviate?[](#what-is-weaviate)

Weaviate is an **open-source vector database** designed to store and index both data objects and their vector embeddings. This architecture enables advanced semantic search capabilities by comparing the meaning encoded in vectors rather than relying solely on keyword matching. Key capabilities include:

-
[Semantic and hybrid search](/weaviate/search/basics)

By indexing data with vectors, Weaviate supports searches based on both semantic similarity and keywords. This allows for more relevant results even when the query terms don’t exactly match the stored data. -
[Retrieval augmented generation (RAG)](/weaviate/search/generative)

Weaviate can serve as a robust backend for RAG workflows, where vector search is used to retrieve context that enhances the output of generative models, making it easier to generate accurate, context-aware responses. -
[Agent-driven workflows](/agents)

Its flexible API and integration with modern AI models make Weaviate suitable for powering applications that rely on intelligent agents. These agents can leverage semantic insights to make decisions or trigger actions based on the data stored in Weaviate.

#### Course: A Quick Tour of Weaviate

Become familiar with Weaviate's architecture, core concepts, and key capabilities. Understand how its features and integrations map to AI builders' needs.

[Open Academy Course](https://academy.weaviate.io/courses/wa050-py)

## The Weaviate Ecosystem[](#the-weaviate-ecosystem)

The Weaviate ecosystem consists of multiple tools and services centered around building cloud-native AI-powered applications.

As shown in the high-level overview above, the ecosystem consists of:

: An open source vector database that stores both objects and vectors.[Weaviate Database](#what-is-weaviate): A fully managed cloud deployment of the Weaviate vector database.[Weaviate Cloud](/cloud): Pre-built agentic services for Weaviate Cloud users.[Weaviate Agents](/agents): A managed embedding inference service for Weaviate Cloud users.[Weaviate Embeddings](/cloud/embeddings): Third-party models that integrate with Weaviate.[External model providers](/weaviate/model-providers)

## Choose your deployment[](#choose-your-deployment)

[EvaluationDeploymentProductionWeaviate Cloud](/cloud/manage-clusters/create)

- From evaluation (sandbox) to production
- Shared Cloud (infrastructure managed by Weaviate)
- (Optional) Data replication (high-availability)
- (Optional) Zero-downtime updates

[EvaluationDeploymentProductionDocker](/deploy/installation-guides/docker-installation)

- For local evaluation & development
- Local inference containers
- Multi-modal models
- Customizable configurations

[EvaluationDeploymentProductionKubernetes](/deploy/installation-guides/k8s-installation)

- For development to production
- Local inference containers
- Multi-modal models
- Customizable configurations
- Self-deploy or Marketplace deployment
- (Optional) Zero-downtime updates

[EvaluationDeploymentProductionEmbedded Weaviate](/deploy/installation-guides/embedded)

- For basic, quick evaluation
- Conveniently launch Weaviate directly from Python or JS/TS

---

## Source: https://www.weaviate.io/go/console?utm_content=navbar

Redirecting to Weaviate Console…
Continue