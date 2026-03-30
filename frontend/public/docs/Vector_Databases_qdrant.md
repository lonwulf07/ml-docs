# Qdrant Documentation
> Scraped on: 2026-03-30 | Root Source: [https://qdrant.tech/documentation/](https://qdrant.tech/documentation/)



---

## Source: https://qdrant.tech/documentation/

# Qdrant Documentation

Qdrant is an AI-native vector search and a semantic search engine. You can use it to extract meaningful information from unstructured data.

[Clone this repo now](https://github.com/qdrant/qdrant_demo/) and build a search engine in five minutes.

## Ready to start developing?

Qdrant is open-source and can be self-hosted. However, the quickest way to get started is with our [free tier](https://qdrant.to/cloud) on Qdrant Cloud. It scales easily and provides a UI where you can interact with data.

### Create your first Qdrant Cloud cluster today

[Get Started](https://qdrant.to/cloud)

## Optimize Qdrant's performance

Boost search speed, reduce latency, and improve the accuracy and memory usage of your Qdrant deployment.

[Learn More](https://qdrant.tech/documentation/guides/optimize/)

---

## Source: https://qdrant.tech/

# High-Performance Vector Search at Scale

Qdrant helps you build the AI retrieval you want. Ship high performance, full-feature vector search at any scale and with any deployment model.

## Build for Production-Grade AI Search

Engineered for real-time retrieval with the speed, accuracy, and scale that modern AI demands.

### Expansive Metadata Filters

Store metadata in JSON and use advanced filters, such as `nested`

, `text`

, `geo`

, `has_vector`

, and more.

[Learn About Metadata Filters](https://qdrant.tech/documentation/concepts/payload/)

### Native Hybrid Search (Dense + Sparse)

Blend keyword and vector search in one query – use dense or sparse vectors. Supports BM25, SPLADE++, and miniCOIL.

[Explore Hybrid Search](https://qdrant.tech/documentation/concepts/hybrid-queries/)

### Built-in Multivector

Set new standards for relevance; make the retrieval layer more expressive, flexible, and multimodal with multiple vectors per object.

[See Documentation](https://qdrant.tech/documentation/advanced-tutorials/using-multivector-representations/)

### Efficient, One-Stage Filtering

Filters are applied during HNSW traversal — no pre- or post-filtering. High recall with low latency, even under complex conditions.

[See Documentation](https://qdrant.tech/articles/filterable-hnsw/)

### Full-Spectrum Reranking

Infuse business logic with score boosting, achieve token-level precision with late interaction models (e.g. ColBERT), diversify results with Maximum Marginal Relevance (MMR)

[See Documentation](https://qdrant.tech/documentation/tutorials-search-engineering/reranking-hybrid-search/)

## One Engine, Endless Applications

## Deploy Anywhere at Enterprise Scale

Open-source DNA with enterprise-grade security and flexibility — run on-prem, hybrid, edge, or move seamlessly to Qdrant Cloud.

[Explore Qdrant Cloud
](https://qdrant.tech/cloud/)

### Qdrant Cloud

Fully managed with high availability and auto-sharding on AWS, GCP, or Azure.

[Learn about Hybrid Cloud
](https://qdrant.tech/hybrid-cloud/)

### Qdrant Hybrid Cloud

Bring your own Kubernetes with decoupled control and data planes. Scale anywhere with full data control.

[Explore Private Cloud
](https://qdrant.tech/private-cloud/)

### Qdrant Private Cloud

Maximum control with air-gapped, compliant deployments.

[Discover Qdrant Edge](https://qdrant.tech/edge/)

### Qdrant Edge (Beta)

Lightweight, low-latency vector search close to where data is generated.

## Enterprise-ready tooling

Deploy on any cloud, hybrid, or edge environment with full data control. Choose the setup that fits your infrastructure and scale securely without compromise.

Qdrant's technical architecture and performance capabilities have proven to be exactly what we need as we scale our AI-powered features across the platform. They are an ideal partner as we standardize our vector search infrastructure to serve millions of users worldwide.

## Performance by Design

We research, engineer, and optimize each component from first principles for the fastest, most scalable, and most customizable AI retrieval and search engine.

### Highest‑Performance Vector Search Engine

Built entirely in Rust with SIMD and a custom storage engine (Gridstore) — no wrappers, no bolt-ons. Just fast, scalable vector search.

### Real‑Time Indexing

Index new data instantly without rebuilding the entire index. Your vectors are searchable the moment they're added.

### Memory‑Efficient Storage

Store billions of vectors with minimal memory footprint using our optimized storage architecture.

### Asymmetric, Scalar and Binary Quantization

Reduce memory usage by up to 64x while maintaining search quality with advanced quantization techniques.

## Engineered for Builders

Intuitive APIs and built-in tools — crafted for developers who demand more.

### Developer friendly APIs

Start with a single API call — scale to advanced control over HNSW, hybrid fusion, reranking, and multi-vector retrieval, all via REST, gRPC, or official clients (Python, JavaScript, etc.).

[Explore the API Docs](https://api.qdrant.tech/api-reference)

### Built-In Web UI & Visualizations

Explore collections, test vector and metadata queries, apply filters, and inspect results — all from a clean visual interface.

[Try Web UI](https://qdrant.tech/documentation/web-ui/)

### Native Cloud Inference

Generate text and image embeddings and run vector search in Qdrant Cloud — no separate pipeline or infrastructure needed.

[Learn More About Inference](https://qdrant.tech/cloud-inference/)

Integrates with leading AI tools & frameworks

## Build AI Search the Way You Want

From RAG to AI agents, Qdrant delivers hybrid dense–sparse retrieval with advanced metadata filtering and real-time updates.

---

## Source: https://qdrant.tech/documentation/cloud-intro/

# Welcome to Qdrant Cloud

[Get Started](https://qdrant.to/cloud)

## Managed Services

Deploy and manage high-performance vector search clusters across cloud environments. Easily scale with fully managed cloud solutions, integrate seamlessly across hybrid setups, or maintain complete control with private cloud deployments in Kubernetes.

## Customer Support

Stream, index, and migrate data to Qdrant with these essential tools and strategies.

---

## Source: https://qdrant.tech/documentation/ecosystem/

# Explore the Qdrant Ecosystem

[Get Started](https://qdrant.to/cloud)

## Start Building

Deploy and manage high-performance vector search clusters across cloud environments. Easily scale with fully managed cloud solutions, integrate seamlessly across hybrid setups, or maintain complete control with private cloud deployments in Kubernetes.

---

## Source: https://qdrant.tech/learn/

Master vector search with Qdrant through comprehensive documentation, structured courses, and hands-on tutorials.

In-depth technical documentation covering vector search concepts, system architecture, and advanced techniques.

Featured articles:

Structured learning paths with progressive difficulty levels, from beginner fundamentals to advanced implementations.

Available topics:

Step-by-step guides and video content for hands-on learning with practical examples and real-world applications.

Tutorial categories:


Start with our beginner-friendly exercises on vector embeddings and basic concepts.

Build out practical projects using our example prototypes and integration guides.

---

## Source: https://api.qdrant.tech/api-reference

# API Reference

Qdrant is a [vector database](https://qdrant.tech/documentation/overview/) and a [semantic search](https://qdrant.tech/documentation/overview/vector-search/) engine. You can use its REST API to develop a production-ready service to store, search, and manage vectors with an additional payload.

## How does Qdrant work?

- First, you should create a
[collection](/api-reference/collections/create-collection)to store all your data. - Then upsert data
[points](/api-reference/points/upsert-points)and enrich them with a custom[payload](/api-reference/points/set-payload). - With a full collection, run a
[search](/api-reference/search/points)to find relevant results. - Collections can be
[snapshotted, downloaded and restored](/api-reference/snapshots/list-snapshots). - When ready, setup a
[distributed system](/api-reference/distributed/create-shard-key)for production.

### Just getting started?

Try the [development quickstart](https://qdrant.tech/documentation/quick-start/) guide.

---

## Source: https://qdrant.tech/documentation/overview/

# Qdrant Overview

## Welcome!

Whether you’re getting started with Qdrant Open-Source or Cloud, this brief primer will help you with understanding an overview of the platform. **It’s highly recommended you read this overview before starting your development with Qdrant!**

## Retrieval Process

Vector search is a transformative information retrieval technique that goes beyond keyword matching to find data based on semantic meaning. It begins with **embedding models**, which convert unstructured data (text, images, audio) into **dense vector embeddings**, fixed-length lists of numbers that represent the data’s conceptual essence. These vectors are mapped into a high-dimensional **vector space**, where items with similar meanings are positioned closely together. This spatial organization allows a search for “climate change” to retrieve documents about “global warming,” even if the exact words differ.

While dense vectors excel at capturing context, they can sometimes miss specific technical terms or unique identifiers. To bridge this gap, Qdrant also utilizes **sparse vectors** designed to capture precise **lexical matches** for specific keywords. Learn more in [this guide](https://qdrant.tech/documentation/guides/text-search/).

The process of generating embeddings from unstructured data is called [inference](https://qdrant.tech/documentation/concepts/inference/). On Qdrant Cloud, you can use [Cloud Inference](https://qdrant.tech/documentation/cloud/inference/) to let Qdrant generate embeddings on the server side. Alternatively, you can use a library like [FastEmbed](https://qdrant.tech/documentation/fastembed/) to generate embeddings on the client side.

The search process itself revolves into the concept of **Top-K** retrieval. When a user submits a request, it is instantly transformed into a **query vector**. The engine then calculates the similarity between this query vector and document vectors, returning the “Top-K” closest matches, where K is a user-defined number representing the desired volume of results. This allows developers to fine-tune the balance between the breadth of the search and the precision of the answers.

To deliver the most robust search experience, Qdrant enables **Hybrid Retrieval** with semantic and lexical search, which you can learn more about [here](https://qdrant.tech/documentation/concepts/hybrid-queries/).

## Architecture

Qdrants operates in a client-server architecture, providing official [client libraries](https://qdrant.tech/documentation/interfaces/#client-libraries) for Python, JavaScript/TypeScript, Rust, Go, .NET, and Java. However, Qdrant exposes HTTP and gRPC [interfaces](https://qdrant.tech/documentation/interfaces/#client-libraries) to facilitate integration with virtually any programming language.

## Data Structure

Qdrant collections are designed for horizontal and vertical scaling. You can learn about the details in the above diagram from links below:

## Deployments

Qdrant supports multiple deployment models to match different infrastructure and operational needs. The right option depends on your security constraints and operational model: Qdrant-managed infrastructure ([Managed Cloud](https://qdrant.tech/documentation/cloud/)), shared responsibility with your own clusters ([Hybrid Cloud](https://qdrant.tech/documentation/hybrid-cloud/)), or full ownership and independence ([Private Cloud](https://qdrant.tech/documentation/private-cloud/) or [Open Source](https://github.com/qdrant/qdrant)).

| Feature | Benefits | OSS | Managed | Hybrid | Private |
|---|---|---|---|---|---|
| Deployment | Choose how and where to deploy your Qdrant vector database based on your infrastructure needs. | ✅ | ✅ | ✅ | ✅ |
| High Availability | Automatic failover and replication to ensure your vector search is always available. | ❌ | ✅ | ✅ | ✅ |
| Zero-Downtime Upgrades | Upgrade your Qdrant database without any service interruption using replication. | ❌ | ✅ | ✅ | ✅ |
| Monitoring & Alerting | Built-in monitoring and alerting to observe the health and performance of your clusters. | ❌ | ✅ | ✅ | ❌ |
| Central Management UI | A unified console to create, configure, and manage all your Qdrant database clusters. | ❌ | ✅ | ✅ | ❌ |
| Horizontal & Vertical Scaling | Scale your clusters up, down, or out with automatic shard rebalancing and resharding support. | ❌ | ✅ | ✅ | ✅ |
| Backups & Disaster Recovery | Automated backups and restore functionality to ensure data durability and graceful recovery. | ❌ | ✅ | ✅ | ✅ |
| Data Privacy & Control | Keep all user data within your own infrastructure and network, not accessible by external parties. | ✅ | ❌ | ✅ | ✅ |
| Multi-Cloud & On-Premises | Deploy on AWS, GCP, Azure, on-premises, or edge locations based on your requirements. | ✅ | ❌ | ✅ | ✅ |
| Enterprise Support | Access to Qdrant’s enterprise support services for production deployments. | ❌ | ✅ | ✅ | ✅ |
| No Infrastructure Management | Qdrant fully manages your infrastructure, so you can focus on building your application. | ❌ | ✅ | ❌ | ❌ |

## Scaling Considerations

The default configuration of Qdrant is sensible when you are starting to work on a POC or your side project. However, when transitioning to production and experiencing the growth of data size and concurrent users, your expectations regarding high availability, latency, or throughput will change. If you foresee scaling the service, you should build your system ready for these kinds of challenges from the outset. There are a few common scenarios you should be aware of, especially if you are taking your first steps with Qdrant, anticipate rapid growth soon, and want to make your system future-proof.

### Memory Requirements

Memory is a critical resource when scaling vector search. By default, Qdrant stores vectors in RAM for maximum search performance, but as collections grow to millions of vectors, keeping everything in memory becomes expensive. Qdrant lets you control the memory usage by offloading data to disk, and you can enable that mechanism at any time, even on an existing collection:

- Frequently accessed vectors naturally stay cached, while others are read from disk only when needed, if you store vectors on disk
- Graph traversal may require IO operations if you store the HNSW index on disk

Put both on disk only when RAM is severely constrained, and ensure you have fast NVMe storage.

### Filtering

Vector search alone can provide a decent search experience to your users; however, semantic similarity is rarely the only factor you have to consider. Embeddings won’t capture attributes such as price, and typically, a filter on a specific payload attribute has to be applied. To make that filtering effective, there are some specific Qdrant mechanisms you should be aware of, including with **payload indexes**.

### Payload Indexes

The payload index is a helper data structure that enables effective filtering on a particular payload attribute. It’s a concept familiar from relational databases, where we create an index on a column that we often filter by. Similarly, in Qdrant, you should also make a payload index on a field used for filtering.

A unique aspect of the payload index is that it extends the HNSW graph, allowing filtering criteria to be applied during the semantic search phase. That means it’s a single-pass graph traversal, rather than pre- or post-filtering, which both have some drawbacks.

The fact that a payload index extends the HNSW graph means it’s more efficient to create it before indexing the data, as the optimizer will need to build the graph once. However, in some cases, you may already have a collection with a lot of vectors and recognize a need to filter by a specific attribute. In such cases, you can still create a payload index, yet **it won’t immediately affect the HNSW graph**.

[ACORN](https://qdrant.tech/documentation/concepts/search/#acorn-search-algorithm) is an additional mechanism that can improve the search accuracy if you have multiple high cardinality filters in your search operations.

### Scaling

Vertical scaling has natural limits - eventually, you’ll hit the maximum capacity of available hardware, and single-node deployments lack redundancy. Optimize scaling with **sharding**, **replication**, and **segment configuration** options.

#### Sharding

Qdrant uses sharding to split collections across multiple nodes, where each shard is an independent store of points. A common recommendation is to start with 12 shards, which provides flexibility to scale from 1 node up to 2, 3, 6, or 12 nodes without resharding. However, this approach can limit throughput on small clusters since each node manages multiple shards.

For optimal throughput, set `shard_number`

equal to your node count (read more here). If you want to have better control over sharding, Qdrant supports [custom shards](https://qdrant.tech/documentation/guides/distributed_deployment/#user-defined-sharding).

#### Replication

The replication factor determines how many copies of each shard exist. **For production systems, a replication factor of at least 2 is strongly recommended**.

#### Segment Configuration

Each shard stores data in multiple [segments](https://qdrant.tech/documentation/concepts/storage/). A segment stores all the data structures of a subset of the points in a shard. Fewer segments create larger segments with better search throughput, as larger HNSW indexes require fewer comparisons. However, larger segments take longer to build and recreate, slowing writes and optimization. More segments mean faster indexing but lower search performance since queries scan more segments. Read more on segment configuration.

### Safety

Some of the collection-level operations may degrade performance of the Qdrant cluster. Qdrant’s [strict mode](https://qdrant.tech/documentation/guides/administration/#strict-mode) prevents inefficient usage patterns through multiple controls: it may block filtering and updates on non-indexed payload fields, limit query result sizes and timeout durations, restrict the complexity and number of filter conditions, cap payload index counts, constrain batch upsert sizes, enforce maximum collection storage limits (for vectors, payloads, and point counts), and implement rate limiting for read and write operations to prevent system overload.

The OSS version does not enforce anything, but please consider enabling and configuring strict mode settings according to the application needs. Otherwise, some of the API calls may impact the performance of your cluster by using Qdrant in a suboptimal way.

## Getting Help

If you’re new to Qdrant, start with the free [ Essentials Course](https://qdrant.tech/course/essentials/), which covers core concepts and best practices. For questions, troubleshooting, and community support, join the

[- it’s the best place to get help from both Qdrant users and the core team. Paid customers have access to the](https://qdrant.to/discord)

**Discord Community**[through the Qdrant Cloud Console, for direct technical assistance and priority response times.](https://qdrant.to/cloud)

**Support Portal**

---

## Source: https://qdrant.tech/documentation/overview/what-is-qdrant/

# Introduction

Vector databases are a relatively new way for interacting with abstract data representations derived from opaque machine learning models such as deep learning architectures. These representations are often called vectors or embeddings and they are a compressed version of the data used to train a machine learning model to accomplish a task like sentiment analysis, speech recognition, object detection, and many others.

These new databases shine in many applications like [semantic search](https://en.wikipedia.org/wiki/Semantic_search)
and [recommendation systems](https://en.wikipedia.org/wiki/Recommender_system), and here, we’ll
learn about one of the most popular and fastest growing vector databases in the market, [Qdrant](https://github.com/qdrant/qdrant).

## What is Qdrant?

[Qdrant](https://github.com/qdrant/qdrant) “is a vector similarity search engine that provides a production-ready
service with a convenient API to store, search, and manage points (i.e. vectors) with an additional
payload.” You can think of the payloads as additional pieces of information that can help you
hone in on your search and also receive useful information that you can give to your users.

You can get started using Qdrant with the Python `qdrant-client`

, by pulling the latest docker
image of `qdrant`

and connecting to it locally, or by trying out [Qdrant’s Cloud](https://cloud.qdrant.io/)
free tier option until you are ready to make the full switch.

With that out of the way, let’s talk about what are vector databases.

## What Are Vector Databases?

Vector databases are a type of database designed to store and query high-dimensional vectors
efficiently. In traditional [OLTP](https://www.ibm.com/topics/oltp) and [OLAP](https://www.ibm.com/topics/olap)
databases (as seen in the image above), data is organized in rows and columns (and these are
called **Tables**), and queries are performed based on the values in those columns. However,
in certain applications including image recognition, natural language processing, and recommendation
systems, data is often represented as vectors in a high-dimensional space, and these vectors, plus
an id and a payload we call a point. These points are the elements we store in something called a **Collection** within a vector
database like Qdrant.

A vector in this context is a mathematical representation of an object or data point, where elements of the vector implicitly or explicitly correspond to specific features or attributes of the object. For example, in an image recognition system, a vector could represent an image, with each element of the vector representing a pixel value or a descriptor/characteristic of that pixel. In a music recommendation system, each vector could represent a song, and elements of the vector would capture song characteristics such as tempo, genre, lyrics, and so on.

Vector databases are optimized for **storing** and **querying** these high-dimensional vectors
efficiently, and they often use specialized data structures and indexing techniques such as
Hierarchical Navigable Small World (HNSW) – which is used to implement Approximate Nearest
Neighbors – and Product Quantization, among others. These databases enable fast similarity
and semantic search while allowing users to find vectors that are the closest to a given query
vector based on some distance metric. The most commonly used distance metrics are Euclidean
Distance, Cosine Similarity, and Dot Product, and these three are fully supported Qdrant.

Here’s a quick overview of the three:

- Cosine similarity is a way to measure how similar two vectors are. To simplify, it reflects whether the vectors have the same direction (similar) or are poles apart. Cosine similarity is often used with text representations to compare how similar two documents or sentences are to each other. The output of cosine similarity ranges from -1 to 1, where -1 means the two vectors are completely dissimilar, and 1 indicates maximum similarity.**Cosine Similarity**- The dot product similarity metric is another way of measuring how similar two vectors are. Unlike cosine similarity, it also considers the length of the vectors. This might be important when, for example, vector representations of your documents are built based on the term (word) frequencies. The dot product similarity is calculated by multiplying the respective values in the two vectors and then summing those products. The higher the sum, the more similar the two vectors are. If you normalize the vectors (so the numbers in them sum up to 1), the dot product similarity will become the cosine similarity.**Dot Product**- Euclidean distance is a way to measure the distance between two points in space, similar to how we measure the distance between two places on a map. It’s calculated by finding the square root of the sum of the squared differences between the two points’ coordinates. This distance metric is also commonly used in machine learning to measure how similar or dissimilar two vectors are.**Euclidean Distance**

Now that we know what vector databases are and how they are structurally different than other databases, let’s go over why they are important.

## Why do we need Vector Databases?

Vector databases play a crucial role in various applications that require similarity search, such as recommendation systems, content-based image retrieval, and personalized search. By taking advantage of their efficient indexing and searching techniques, vector databases enable faster and more accurate retrieval of unstructured data already represented as vectors, which can help put in front of users the most relevant results to their queries.

In addition, other benefits of using vector databases include:

- Efficient storage and indexing of high-dimensional data.
- Ability to handle large-scale datasets with billions of data points.
- Support for real-time analytics and queries.
- Ability to handle vectors derived from complex data types such as images, videos, and natural language text.
- Improved performance and reduced latency in machine learning and AI applications.
- Reduced development and deployment time and cost compared to building a custom solution.

Keep in mind that the specific benefits of using a vector database may vary depending on the use case of your organization and the features of the database you ultimately choose.

Let’s now evaluate, at a high-level, the way Qdrant is architected.

## High-Level Overview of Qdrant’s Architecture

The diagram above represents a high-level overview of some of the main components of Qdrant. Here are the terminologies you should get familiar with.

[Collections](https://qdrant.tech/documentation/concepts/collections/): A collection is a named set of points (vectors with a payload) among which you can search. The vector of each point within the same collection must have the same dimensionality and be compared by a single metric.[Named vectors](https://qdrant.tech/documentation/concepts/collections/#collection-with-multiple-vectors)can be used to have multiple vectors in a single point, each of which can have their own dimensionality and metric requirements.[Distance Metrics](https://en.wikipedia.org/wiki/Metric_space): These are used to measure similarities among vectors and they must be selected at the same time you are creating a collection. The choice of metric depends on the way the vectors were obtained and, in particular, on the neural network that will be used to encode new queries.[Points](https://qdrant.tech/documentation/concepts/points/): The points are the central entity that Qdrant operates with and they consist of a vector and an optional id and payload.- id: a unique identifier for your vectors.
- Vector: a high-dimensional representation of data, for example, an image, a sound, a document, a video, etc.
[Payload](https://qdrant.tech/documentation/concepts/payload/): A payload is a JSON object with additional data you can add to a vector.

[Storage](https://qdrant.tech/documentation/concepts/storage/): Qdrant can use one of two options for storage,**In-memory**storage (Stores all vectors in RAM, has the highest speed since disk access is required only for persistence), or**Memmap**storage, (creates a virtual address space associated with the file on disk).- Clients: the programming languages you can use to connect to Qdrant.

## Next Steps

Now that you know more about vector databases and Qdrant, you are ready to get started with one
of our tutorials. If you’ve never used a vector database, go ahead and jump straight into
the **Getting Started** section. Conversely, if you are a seasoned developer in these
technology, jump to the section most relevant to your use case.

As you go through the tutorials, please let us know if any questions come up in our
[Discord channel here](https://qdrant.to/discord). 😎

---

## Source: https://qdrant.tech/documentation/overview/vector-search/

# How Does Vector Search Work in Qdrant?

If you are still trying to figure out how vector search works, please read ahead. This document describes how vector search is used, covers Qdrant’s place in the larger ecosystem, and outlines how you can use Qdrant to augment your existing projects.

For those who want to start writing code right away, visit our [Complete Beginners tutorial](https://qdrant.tech/documentation/tutorials/search-beginners/) to build a search engine in 5-15 minutes.

## A Brief History of Search

Human memory is unreliable. Thus, as long as we have been trying to collect ‘knowledge’ in written form, we had to figure out how to search for relevant content without rereading the same books repeatedly. That’s why some brilliant minds introduced the inverted index. In the simplest form, it’s an appendix to a book, typically put at its end, with a list of the essential terms-and links to pages they occur at. Terms are put in alphabetical order. Back in the day, that was a manually crafted list requiring lots of effort to prepare. Once digitalization started, it became a lot easier, but still, we kept the same general principles. That worked, and still, it does.

If you are looking for a specific topic in a particular book, you can try to find a related phrase and quickly get to the correct page. Of course, assuming you know the proper term. If you don’t, you must try and fail several times or find somebody else to help you form the correct query.

Time passed, and we haven’t had much change in that area for quite a long time. But our textual data collection started to grow at a greater pace. So we also started building up many processes around those inverted indexes. For example, we allowed our users to provide many words and started splitting them into pieces. That allowed finding some documents which do not necessarily contain all the query words, but possibly part of them. We also started converting words into their root forms to cover more cases, removing stopwords, etc. Effectively we were becoming more and more user-friendly. Still, the idea behind the whole process is derived from the most straightforward keyword-based search known since the Middle Ages, with some tweaks.

Technically speaking, we encode the documents and queries into so-called sparse vectors where each position has a corresponding word from the whole dictionary. If the input text contains a specific word, it gets a non-zero value at that position. But in reality, none of the texts will contain more than hundreds of different words. So the majority of vectors will have thousands of zeros and a few non-zero values. That’s why we call them sparse. And they might be already used to calculate some word-based similarity by finding the documents which have the biggest overlap.

Sparse vectors have relatively **high dimensionality**; equal to the size of the dictionary. And the dictionary is obtained automatically from the input data. So if we have a vector, we are able to partially reconstruct the words used in the text that created that vector.

## The Tower of Babel

Every once in a while, when we discover new problems with inverted indexes, we come up with a new heuristic to tackle it, at least to some extent. Once we realized that people might describe the same concept with different words, we started building lists of synonyms to convert the query to a normalized form. But that won’t work for the cases we didn’t foresee. Still, we need to craft and maintain our dictionaries manually, so they can support the language that changes over time. Another difficult issue comes to light with multilingual scenarios. Old methods require setting up separate pipelines and keeping humans in the loop to maintain the quality.

## The Representation Revolution

The latest research in Machine Learning for NLP is heavily focused on training Deep Language Models. In this process, the neural network takes a large corpus of text as input and creates a mathematical representation of the words in the form of vectors. These vectors are created in such a way that words with similar meanings and occurring in similar contexts are grouped together and represented by similar vectors. And we can also take, for example, an average of all the word vectors to create the vector for a whole text (e.g query, sentence, or paragraph).

We can take those **dense vectors** produced by the network and use them as a **different data representation**. They are dense because neural networks will rarely produce zeros at any position. In contrary to sparse ones, they have a relatively low dimensionality — hundreds or a few thousand only. Unfortunately, if we want to have a look and understand the content of the document by looking at the vector it’s no longer possible. Dimensions are no longer representing the presence of specific words.

Dense vectors can capture the meaning, not the words used in a text. That being said, **Large Language Models can automatically handle synonyms**. More so, since those neural networks might have been trained with multilingual corpora, they translate the same sentence, written in different languages, to similar vector representations, also called **embeddings**. And we can compare them to find similar pieces of text by calculating the distance to other vectors in our database.

**Vector search** is a process of finding similar objects based on their embeddings similarity. The good thing is, you don’t have to design and train your neural network on your own. Many pre-trained models are available, either on **HuggingFace** or by using libraries like [SentenceTransformers](https://www.sbert.net/?ref=hackernoon.com). If you, however, prefer not to get your hands dirty with neural models, you can also create the embeddings with SaaS tools, like [co.embed API](https://docs.cohere.com/reference/embed?ref=hackernoon.com).

## Why Qdrant?

The challenge with vector search arises when we need to find similar documents in a big set of objects. If we want to find the closest examples, the naive approach would require calculating the distance to every document. That might work with dozens or even hundreds of examples but may become a bottleneck if we have more than that. When we work with relational data, we set up database indexes to speed things up and avoid full table scans. And the same is true for vector search. Qdrant is a fully-fledged vector database that speeds up the search process by using a graph-like structure to find the closest objects in sublinear time. So you don’t calculate the distance to every object from the database, but some candidates only.

While doing a semantic search at scale, because this is what we sometimes call the vector search done on texts, we need a specialized tool to do it effectively — a tool like Qdrant.

## Next Steps

Vector search is an exciting alternative to sparse methods. It solves the issues we had with the keyword-based search without needing to maintain lots of heuristics manually. It requires an additional component, a neural encoder, to convert text into vectors.

[ Tutorial 1 - Qdrant for Complete Beginners](https://qdrant.tech/documentation/tutorials/search-beginners/)
Despite its complicated background, vectors search is extraordinarily simple to set up. With Qdrant, you can have a search engine up-and-running in five minutes. Our

[Complete Beginners tutorial](https://qdrant.tech/documentation/tutorials/search-beginners/)will show you how.

[ Tutorial 2 - Question and Answer System](https://qdrant.tech/articles/qa-with-cohere-and-qdrant/)
However, you can also choose SaaS tools to generate them and avoid building your model. Setting up a vector search project with Qdrant Cloud and Cohere co.embed API is fairly easy if you follow the

[Question and Answer system tutorial](https://qdrant.tech/articles/qa-with-cohere-and-qdrant/).

There is another exciting thing about vector search. You can search for any kind of data as long as there is a neural network that would vectorize your data type. Do you think about a reverse image search? That’s also possible with vector embeddings.

---

## Source: https://qdrant.tech/documentation/quickstart/

# How to Get Started with Qdrant Locally

In this short example, you will use the Python Client to create a Collection, load data into it and run a basic search query.

## Download and run

First, download the latest Qdrant image from Dockerhub:

```
docker pull qdrant/qdrant
```


Then, run the service:

```
docker run -p 6333:6333 -p 6334:6334 \
-v "$(pwd)/qdrant_storage:/qdrant/storage:z" \
qdrant/qdrant
```


Under the default configuration all data will be stored in the `./qdrant_storage`

directory. This will also be the only directory that both the Container and the host machine can both see.

Qdrant is now accessible:

- REST API:
[localhost:6333](http://localhost:6333) - Web UI:
[localhost:6333/dashboard](http://localhost:6333/dashboard) - GRPC API:
[localhost:6334](http://localhost:6334)

## Initialize the client

```
from qdrant_client import QdrantClient
client = QdrantClient(url="http://localhost:6333")
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
```


```
use qdrant_client::Qdrant;
// The Rust client uses Qdrant's gRPC interface
let client = Qdrant::from_url("http://localhost:6334").build()?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
// The Java client uses Qdrant's gRPC interface
QdrantClient client = new QdrantClient(
QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
```


```
using Qdrant.Client;
// The C# client uses Qdrant's gRPC interface
var client = new QdrantClient("localhost", 6334);
```


```
import "github.com/qdrant/go-client/qdrant"
// The Go client uses Qdrant's gRPC interface
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
```


## Create a collection

You will be storing all of your vector data in a Qdrant collection. Let’s call it `test_collection`

. This collection will be using a dot product distance metric to compare vectors.

```
from qdrant_client.models import Distance, VectorParams
client.create_collection(
collection_name="test_collection",
vectors_config=VectorParams(size=4, distance=Distance.DOT),
)
```


```
await client.createCollection("test_collection", {
vectors: { size: 4, distance: "Dot" },
});
```


```
use qdrant_client::qdrant::{CreateCollectionBuilder, VectorParamsBuilder};
client
.create_collection(
CreateCollectionBuilder::new("test_collection")
.vectors_config(VectorParamsBuilder::new(4, Distance::Dot)),
)
.await?;
```


```
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.VectorParams;
client.createCollectionAsync("test_collection",
VectorParams.newBuilder().setDistance(Distance.Dot).setSize(4).build()).get();
```


```
using Qdrant.Client.Grpc;
await client.CreateCollectionAsync(collectionName: "test_collection", vectorsConfig: new VectorParams
{
Size = 4, Distance = Distance.Dot
});
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 4,
Distance: qdrant.Distance_Cosine,
}),
})
```


## Add vectors

Let’s now add a few vectors with a payload. Payloads are other data you want to associate with the vector:

```
from qdrant_client.models import PointStruct
operation_info = client.upsert(
collection_name="test_collection",
wait=True,
points=[
PointStruct(id=1, vector=[0.05, 0.61, 0.76, 0.74], payload={"city": "Berlin"}),
PointStruct(id=2, vector=[0.19, 0.81, 0.75, 0.11], payload={"city": "London"}),
PointStruct(id=3, vector=[0.36, 0.55, 0.47, 0.94], payload={"city": "Moscow"}),
PointStruct(id=4, vector=[0.18, 0.01, 0.85, 0.80], payload={"city": "New York"}),
PointStruct(id=5, vector=[0.24, 0.18, 0.22, 0.44], payload={"city": "Beijing"}),
PointStruct(id=6, vector=[0.35, 0.08, 0.11, 0.44], payload={"city": "Mumbai"}),
],
)
print(operation_info)
```


```
const operationInfo = await client.upsert("test_collection", {
wait: true,
points: [
{ id: 1, vector: [0.05, 0.61, 0.76, 0.74], payload: { city: "Berlin" } },
{ id: 2, vector: [0.19, 0.81, 0.75, 0.11], payload: { city: "London" } },
{ id: 3, vector: [0.36, 0.55, 0.47, 0.94], payload: { city: "Moscow" } },
{ id: 4, vector: [0.18, 0.01, 0.85, 0.80], payload: { city: "New York" } },
{ id: 5, vector: [0.24, 0.18, 0.22, 0.44], payload: { city: "Beijing" } },
{ id: 6, vector: [0.35, 0.08, 0.11, 0.44], payload: { city: "Mumbai" } },
],
});
console.debug(operationInfo);
```


```
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder};
let points = vec![
PointStruct::new(1, vec![0.05, 0.61, 0.76, 0.74], [("city", "Berlin".into())]),
PointStruct::new(2, vec![0.19, 0.81, 0.75, 0.11], [("city", "London".into())]),
PointStruct::new(3, vec![0.36, 0.55, 0.47, 0.94], [("city", "Moscow".into())]),
// ..truncated
];
let response = client
.upsert_points(UpsertPointsBuilder::new("test_collection", points).wait(true))
.await?;
dbg!(response);
```


```
import java.util.List;
import java.util.Map;
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;
import io.qdrant.client.grpc.Points.PointStruct;
import io.qdrant.client.grpc.Points.UpdateResult;
UpdateResult operationInfo =
client
.upsertAsync(
"test_collection",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(vectors(0.05f, 0.61f, 0.76f, 0.74f))
.putAllPayload(Map.of("city", value("Berlin")))
.build(),
PointStruct.newBuilder()
.setId(id(2))
.setVectors(vectors(0.19f, 0.81f, 0.75f, 0.11f))
.putAllPayload(Map.of("city", value("London")))
.build(),
PointStruct.newBuilder()
.setId(id(3))
.setVectors(vectors(0.36f, 0.55f, 0.47f, 0.94f))
.putAllPayload(Map.of("city", value("Moscow")))
.build()))
// Truncated
.get();
System.out.println(operationInfo);
```


```
using Qdrant.Client.Grpc;
var operationInfo = await client.UpsertAsync(collectionName: "test_collection", points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new float[]
{
0.05f, 0.61f, 0.76f, 0.74f
},
Payload = {
["city"] = "Berlin"
}
},
new()
{
Id = 2,
Vectors = new float[]
{
0.19f, 0.81f, 0.75f, 0.11f
},
Payload = {
["city"] = "London"
}
},
new()
{
Id = 3,
Vectors = new float[]
{
0.36f, 0.55f, 0.47f, 0.94f
},
Payload = {
["city"] = "Moscow"
}
},
// Truncated
});
Console.WriteLine(operationInfo);
```


```
import (
"context"
"fmt"
"github.com/qdrant/go-client/qdrant"
)
operationInfo, err := client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "test_collection",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectors(0.05, 0.61, 0.76, 0.74),
Payload: qdrant.NewValueMap(map[string]any{"city": "Berlin"}),
},
{
Id: qdrant.NewIDNum(2),
Vectors: qdrant.NewVectors(0.19, 0.81, 0.75, 0.11),
Payload: qdrant.NewValueMap(map[string]any{"city": "London"}),
},
{
Id: qdrant.NewIDNum(3),
Vectors: qdrant.NewVectors(0.36, 0.55, 0.47, 0.94),
Payload: qdrant.NewValueMap(map[string]any{"city": "Moscow"}),
},
// Truncated
},
})
if err != nil {
panic(err)
}
fmt.Println(operationInfo)
```


**Response:**

```
operation_id=0 status=<UpdateStatus.COMPLETED: 'completed'>
```


```
{ operation_id: 0, status: 'completed' }
```


```
PointsOperationResponse {
result: Some(
UpdateResult {
operation_id: Some(
0,
),
status: Completed,
},
),
time: 0.00094027,
}
```


```
operation_id: 0
status: Completed
```


```
{ "operationId": "0", "status": "Completed" }
```


```
operation_id:0 status:Acknowledged
```


## Run a query

Let’s ask a basic question - Which of our stored vectors are most similar to the query vector `[0.2, 0.1, 0.9, 0.7]`

?

```
search_result = client.query_points(
collection_name="test_collection",
query=[0.2, 0.1, 0.9, 0.7],
with_payload=False,
limit=3
).points
print(search_result)
```


```
let searchResult = await client.query(
"test_collection", {
query: [0.2, 0.1, 0.9, 0.7],
limit: 3
});
console.debug(searchResult.points);
```


```
use qdrant_client::qdrant::QueryPointsBuilder;
let search_result = client
.query(
QueryPointsBuilder::new("test_collection")
.query(vec![0.2, 0.1, 0.9, 0.7])
)
.await?;
dbg!(search_result);
```


```
import java.util.List;
import io.qdrant.client.grpc.Points.ScoredPoint;
import io.qdrant.client.grpc.Points.QueryPoints;
import static io.qdrant.client.QueryFactory.nearest;
List<ScoredPoint> searchResult =
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("test_collection")
.setLimit(3)
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.build()).get();
System.out.println(searchResult);
```


```
var searchResult = await client.QueryAsync(
collectionName: "test_collection",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
limit: 3,
);
Console.WriteLine(searchResult);
```


```
import (
"context"
"fmt"
"github.com/qdrant/go-client/qdrant"
)
searchResult, err := client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "test_collection",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
})
if err != nil {
panic(err)
}
fmt.Println(searchResult)
```


**Response:**

```
[
{
"id": 4,
"version": 0,
"score": 1.362,
"payload": null,
"vector": null
},
{
"id": 1,
"version": 0,
"score": 1.273,
"payload": null,
"vector": null
},
{
"id": 3,
"version": 0,
"score": 1.208,
"payload": null,
"vector": null
}
]
```


The results are returned in decreasing similarity order. Note that payload and vector data is missing in these results by default.
See [payload and vector in the result](https://qdrant.tech/documentation/concepts/search/#payload-and-vector-in-the-result) on how to enable it.

## Add a filter

We can narrow down the results further by filtering by payload. Let’s find the closest results that include “London”.

```
from qdrant_client.models import Filter, FieldCondition, MatchValue
search_result = client.query_points(
collection_name="test_collection",
query=[0.2, 0.1, 0.9, 0.7],
query_filter=Filter(
must=[FieldCondition(key="city", match=MatchValue(value="London"))]
),
with_payload=True,
limit=3,
).points
print(search_result)
```


```
searchResult = await client.query("test_collection", {
query: [0.2, 0.1, 0.9, 0.7],
filter: {
must: [{ key: "city", match: { value: "London" } }],
},
with_payload: true,
limit: 3,
});
console.debug(searchResult);
```


```
use qdrant_client::qdrant::{Condition, Filter, QueryPointsBuilder};
let search_result = client
.query(
QueryPointsBuilder::new("test_collection")
.query(vec![0.2, 0.1, 0.9, 0.7])
.filter(Filter::must([Condition::matches(
"city",
"London".to_string(),
)]))
.with_payload(true),
)
.await?;
dbg!(search_result);
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
List<ScoredPoint> searchResult =
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("test_collection")
.setLimit(3)
.setFilter(Filter.newBuilder().addMust(matchKeyword("city", "London")))
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setWithPayload(enable(true))
.build()).get();
System.out.println(searchResult);
```


```
using static Qdrant.Client.Grpc.Conditions;
var searchResult = await client.QueryAsync(
collectionName: "test_collection",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
filter: MatchKeyword("city", "London"),
limit: 3,
payloadSelector: true
);
Console.WriteLine(searchResult);
```


```
import (
"context"
"fmt"
"github.com/qdrant/go-client/qdrant"
)
searchResult, err := client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "test_collection",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("city", "London"),
},
},
WithPayload: qdrant.NewWithPayload(true),
})
if err != nil {
panic(err)
}
fmt.Println(searchResult)
```


**Response:**

```
[
{
"id": 2,
"version": 0,
"score": 0.871,
"payload": {
"city": "London"
},
"vector": null
}
]
```


You have just conducted vector search. You loaded vectors into a database and queried the database with a vector of your own. Qdrant found the closest results and presented you with a similarity score.

## Next steps

Now you know how Qdrant works. Getting started with [Qdrant Cloud](https://qdrant.tech/documentation/cloud/quickstart-cloud/) is just as easy. [Create an account](https://qdrant.to/cloud) and use our SaaS completely free. We will take care of infrastructure maintenance and software updates.

To move onto some more complex examples of vector search, read our [Tutorials](https://qdrant.tech/documentation/tutorials/) and create your own app with the help of our [Examples](https://qdrant.tech/documentation/examples/).

**Note:** There is another way of running Qdrant locally. If you are a Python developer, we recommend that you try Local Mode in [Qdrant Client](https://github.com/qdrant/qdrant-client), as it only takes a few moments to get setup.

---

## Source: https://qdrant.tech/documentation/manage-data/

# Manage Data

Learn how to structure, store, and organize your data in Qdrant. These pages cover the core building blocks — from individual records and the vectors that represent them, to collections, payloads, and the indexing and quantization options that control how data is stored and retrieved.

## Points

[Points](https://qdrant.tech/documentation/manage-data/points/) are the fundamental unit of data in Qdrant — each point is a record consisting of a vector and an optional payload.

## Vectors

[Vectors](https://qdrant.tech/documentation/manage-data/vectors/) define how data is represented in vector space, including support for dense, sparse, and multivector configurations.

## Payload

A [Payload](https://qdrant.tech/documentation/manage-data/payload/) is structured metadata you can attach to a point, enabling filtering and enriched search results.

## Collections

[Collections](https://qdrant.tech/documentation/manage-data/collections/) are named groups of points that share the same vector configuration and serve as the top-level organizational unit in Qdrant.

## Storage

[Storage](https://qdrant.tech/documentation/manage-data/storage/) describes how Qdrant persists vector and payload data, including segment structure and in-memory vs. on-disk options.

## Indexing

[Indexing](https://qdrant.tech/documentation/manage-data/indexing/) covers the available index types — payload, vector, sparse, and filterable — and how they accelerate search and filtering.

## Quantization

[Quantization](https://qdrant.tech/documentation/manage-data/quantization/) reduces memory usage by compressing vectors, with options for scalar, product, and binary quantization.

## Multitenancy

[Multitenancy](https://qdrant.tech/documentation/manage-data/multitenancy/) explains strategies for isolating data across multiple users or tenants within a single Qdrant deployment.

---

## Source: https://qdrant.tech/documentation/manage-data/points/

# Points

The points are the central entity that Qdrant operates with.
A point is a record consisting of a [vector](https://qdrant.tech/documentation/concepts/vectors/) and an optional [payload](https://qdrant.tech/documentation/concepts/payload/).

It looks like this:

```
// This is a simple point
{
"id": 129,
"vector": [0.1, 0.2, 0.3, 0.4],
"payload": {"color": "red"},
}
```


You can search among the points grouped in one [collection](https://qdrant.tech/documentation/concepts/collections/) based on vector similarity.
This procedure is described in more detail in the [search](https://qdrant.tech/documentation/concepts/search/) and [filtering](https://qdrant.tech/documentation/concepts/filtering/) sections.

This section explains how to create and manage vectors.

Any point modification operation is asynchronous and takes place in 2 steps. At the first stage, the operation is written to the Write-ahead-log.

After this moment, the service will not lose the data, even if the machine loses power supply.

## Point IDs

Qdrant supports using both `64-bit unsigned integers`

and `UUID`

as identifiers for points.

Examples of UUID string representations:

- simple:
`936DA01F9ABD4d9d80C702AF85C822A8`

- hyphenated:
`550e8400-e29b-41d4-a716-446655440000`

- urn:
`urn:uuid:F9168C5E-CEB2-4faa-B6BF-329BF39FA1E4`


That means that in every request UUID string could be used instead of numerical id. Example:

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": "5c56c793-69f3-4fbf-87e6-c4bf54c28c26",
"payload": {"color": "red"},
"vector": [0.9, 0.1, 0.1]
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id="5c56c793-69f3-4fbf-87e6-c4bf54c28c26",
payload={
"color": "red",
},
vector=[0.9, 0.1, 0.1],
),
],
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.upsert("{collection_name}", {
points: [
{
id: "5c56c793-69f3-4fbf-87e6-c4bf54c28c26",
payload: {
color: "red",
},
vector: [0.9, 0.1, 0.1],
},
],
});
```


```
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.upsert_points(
UpsertPointsBuilder::new(
"{collection_name}",
vec![PointStruct::new(
"5c56c793-69f3-4fbf-87e6-c4bf54c28c26",
vec![0.9, 0.1, 0.1],
[("color", "Red".into())],
)],
)
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;
import java.util.UUID;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(UUID.fromString("5c56c793-69f3-4fbf-87e6-c4bf54c28c26")))
.setVectors(vectors(0.05f, 0.61f, 0.76f, 0.74f))
.putAllPayload(Map.of("color", value("Red")))
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new()
{
Id = Guid.Parse("5c56c793-69f3-4fbf-87e6-c4bf54c28c26"),
Vectors = new[] { 0.05f, 0.61f, 0.76f, 0.74f },
Payload = { ["color"] = "Red" }
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewID("5c56c793-69f3-4fbf-87e6-c4bf54c28c26"),
Vectors: qdrant.NewVectors(0.05, 0.61, 0.76, 0.74),
Payload: qdrant.NewValueMap(map[string]any{"color": "Red"}),
},
},
})
```


and

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"payload": {"color": "red"},
"vector": [0.9, 0.1, 0.1]
}
]
}
```


```
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
payload={
"color": "red",
},
vector=[0.9, 0.1, 0.1],
),
],
)
```


```
client.upsert("{collection_name}", {
points: [
{
id: 1,
payload: {
color: "red",
},
vector: [0.9, 0.1, 0.1],
},
],
});
```


```
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.upsert_points(
UpsertPointsBuilder::new(
"{collection_name}",
vec![PointStruct::new(
1,
vec![0.9, 0.1, 0.1],
[("color", "Red".into())],
)],
)
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(vectors(0.05f, 0.61f, 0.76f, 0.74f))
.putAllPayload(Map.of("color", value("Red")))
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new[] { 0.05f, 0.61f, 0.76f, 0.74f },
Payload = { ["color"] = "Red" }
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectors(0.05, 0.61, 0.76, 0.74),
Payload: qdrant.NewValueMap(map[string]any{"color": "Red"}),
},
},
})
```


are both possible.

## Vectors

Each point in qdrant may have one or more vectors. Vectors are the central component of the Qdrant architecture, qdrant relies on different types of vectors to provide different types of data exploration and search.

Here is a list of supported vector types:

| Dense Vectors | A regular vectors, generated by majority of the embedding models. |
| Sparse Vectors | Vectors with no fixed length, but only a few non-zero elements. Useful for exact token match and collaborative filtering recommendations. |
| MultiVectors | Matrices of numbers with fixed length but variable height. Usually obtained from late interaction models like ColBERT. |

It is possible to attach more than one type of vector to a single point. In Qdrant we call these Named Vectors.

Read more about vector types, how they are stored and optimized in the [vectors](https://qdrant.tech/documentation/concepts/vectors/) section.

## Upload points

To optimize performance, Qdrant supports batch loading of points. I.e., you can load several points into the service in one API call. Batching allows you to minimize the overhead of creating a network connection.

The Qdrant API supports two ways of creating batches - record-oriented and column-oriented. Internally, these options do not differ and are made only for the convenience of interaction.

Create points with batch:

```
PUT /collections/{collection_name}/points
{
"batch": {
"ids": [1, 2, 3],
"payloads": [
{"color": "red"},
{"color": "green"},
{"color": "blue"}
],
"vectors": [
[0.9, 0.1, 0.1],
[0.1, 0.9, 0.1],
[0.1, 0.1, 0.9]
]
}
}
```


```
client.upsert(
collection_name="{collection_name}",
points=models.Batch(
ids=[1, 2, 3],
payloads=[
{"color": "red"},
{"color": "green"},
{"color": "blue"},
],
vectors=[
[0.9, 0.1, 0.1],
[0.1, 0.9, 0.1],
[0.1, 0.1, 0.9],
],
),
)
```


```
client.upsert("{collection_name}", {
batch: {
ids: [1, 2, 3],
payloads: [{ color: "red" }, { color: "green" }, { color: "blue" }],
vectors: [
[0.9, 0.1, 0.1],
[0.1, 0.9, 0.1],
[0.1, 0.1, 0.9],
],
},
});
```


or record-oriented equivalent:

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"payload": {"color": "red"},
"vector": [0.9, 0.1, 0.1]
},
{
"id": 2,
"payload": {"color": "green"},
"vector": [0.1, 0.9, 0.1]
},
{
"id": 3,
"payload": {"color": "blue"},
"vector": [0.1, 0.1, 0.9]
}
]
}
```


```
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
payload={
"color": "red",
},
vector=[0.9, 0.1, 0.1],
),
models.PointStruct(
id=2,
payload={
"color": "green",
},
vector=[0.1, 0.9, 0.1],
),
models.PointStruct(
id=3,
payload={
"color": "blue",
},
vector=[0.1, 0.1, 0.9],
),
],
)
```


```
client.upsert("{collection_name}", {
points: [
{
id: 1,
payload: { color: "red" },
vector: [0.9, 0.1, 0.1],
},
{
id: 2,
payload: { color: "green" },
vector: [0.1, 0.9, 0.1],
},
{
id: 3,
payload: { color: "blue" },
vector: [0.1, 0.1, 0.9],
},
],
});
```


```
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder};
client
.upsert_points(
UpsertPointsBuilder::new(
"{collection_name}",
vec![
PointStruct::new(1, vec![0.9, 0.1, 0.1], [("color", "red".into())]),
PointStruct::new(2, vec![0.1, 0.9, 0.1], [("color", "green".into())]),
PointStruct::new(3, vec![0.1, 0.1, 0.9], [("color", "blue".into())]),
],
)
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(vectors(0.9f, 0.1f, 0.1f))
.putAllPayload(Map.of("color", value("red")))
.build(),
PointStruct.newBuilder()
.setId(id(2))
.setVectors(vectors(0.1f, 0.9f, 0.1f))
.putAllPayload(Map.of("color", value("green")))
.build(),
PointStruct.newBuilder()
.setId(id(3))
.setVectors(vectors(0.1f, 0.1f, 0.9f))
.putAllPayload(Map.of("color", value("blue")))
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new[] { 0.9f, 0.1f, 0.1f },
Payload = { ["color"] = "red" }
},
new()
{
Id = 2,
Vectors = new[] { 0.1f, 0.9f, 0.1f },
Payload = { ["color"] = "green" }
},
new()
{
Id = 3,
Vectors = new[] { 0.1f, 0.1f, 0.9f },
Payload = { ["color"] = "blue" }
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectors(0.9, 0.1, 0.1),
Payload: qdrant.NewValueMap(map[string]any{"color": "red"}),
},
{
Id: qdrant.NewIDNum(2),
Vectors: qdrant.NewVectors(0.1, 0.9, 0.1),
Payload: qdrant.NewValueMap(map[string]any{"color": "green"}),
},
{
Id: qdrant.NewIDNum(3),
Vectors: qdrant.NewVectors(0.1, 0.1, 0.9),
Payload: qdrant.NewValueMap(map[string]any{"color": "blue"}),
},
},
})
```


### Python client optimizations

The Python client has additional features for loading points, which include:

- Parallelization
- A retry mechanism
- Lazy batching support

For example, you can read your data directly from hard drives, to avoid storing all data in RAM. You can use these
features with the `upload_collection`

and `upload_points`

methods.
Similar to the basic upsert API, these methods support both record-oriented and column-oriented formats.

Column-oriented format:

```
client.upload_collection(
collection_name="{collection_name}",
ids=[1, 2],
payload=[
{"color": "red"},
{"color": "green"},
],
vectors=[
[0.9, 0.1, 0.1],
[0.1, 0.9, 0.1],
],
parallel=4,
max_retries=3,
)
```


Record-oriented format:

```
client.upload_points(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
payload={
"color": "red",
},
vector=[0.9, 0.1, 0.1],
),
models.PointStruct(
id=2,
payload={
"color": "green",
},
vector=[0.1, 0.9, 0.1],
),
],
parallel=4,
max_retries=3,
)
```


### Idempotence

All APIs in Qdrant, including point loading, are idempotent. It means that executing the same method several times in a row is equivalent to a single execution.

In this case, it means that points with the same id will be overwritten when re-uploaded.

Idempotence property is useful if you use, for example, a message queue that doesn’t provide an exactly-once guarantee. Even with such a system, Qdrant ensures data consistency.

### Update Mode

*Available as of v1.17.0*

By default, an upsert operation inserts a point if it does not exist, or updates it if it does. To change this behavior, use the `update_mode`

parameter:

`upsert`

(default): Insert a point if it does not exist, or update it if it does.`insert_only`

: Insert a point only if it does not already exist. If a point with the same ID exists, the operation is ignored.`update_only`

: Update a point only if it already exists. Points that do not exist are not inserted.

For example, to use `insert_only`

mode:

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"payload": {"color": "red"},
"vector": [0.9, 0.1, 0.1]
},
{
"id": 2,
"payload": {"color": "green"},
"vector": [0.1, 0.9, 0.1]
},
{
"id": 3,
"payload": {"color": "blue"},
"vector": [0.1, 0.1, 0.9]
}
],
"update_mode": "insert_only"
}
```


```
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
vector=[0.9, 0.1, 0.1],
payload={
"color": "red",
},
),
models.PointStruct(
id=2,
vector=[0.1, 0.9, 0.1],
payload={
"color": "green",
},
),
models.PointStruct(
id=3,
vector=[0.1, 0.1, 0.9],
payload={
"color": "blue",
},
),
],
update_mode=models.UpdateMode.INSERT_ONLY
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.upsert("{collection_name}", {
points: [
{
id: 1,
payload: { color: "red" },
vector: [0.9, 0.1, 0.1],
},
{
id: 2,
payload: { color: "green" },
vector: [0.1, 0.9, 0.1],
},
{
id: 3,
payload: { color: "blue" },
vector: [0.1, 0.1, 0.9],
},
],
update_mode: "insert_only",
});
```


```
use qdrant_client::qdrant::{PointStruct, UpdateMode, UpsertPointsBuilder};
client
.upsert_points(
UpsertPointsBuilder::new(
"{collection_name}",
vec![
PointStruct::new(1, vec![0.9, 0.1, 0.1], [("color", "red".into())]),
PointStruct::new(2, vec![0.1, 0.9, 0.1], [("color", "green".into())]),
PointStruct::new(3, vec![0.1, 0.1, 0.9], [("color", "blue".into())]),
],
)
.update_mode(UpdateMode::InsertOnly),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import io.qdrant.client.grpc.Points.UpdateMode;
import io.qdrant.client.grpc.Points.UpsertPoints;
import java.util.List;
import java.util.Map;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.upsertAsync(
UpsertPoints.newBuilder()
.setCollectionName("{collection_name}")
.addAllPoints(
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(vectors(0.9f, 0.1f, 0.1f))
.putAllPayload(Map.of("color", value("red")))
.build(),
PointStruct.newBuilder()
.setId(id(2))
.setVectors(vectors(0.1f, 0.9f, 0.1f))
.putAllPayload(Map.of("color", value("green")))
.build(),
PointStruct.newBuilder()
.setId(id(3))
.setVectors(vectors(0.1f, 0.1f, 0.9f))
.putAllPayload(Map.of("color", value("blue")))
.build()))
.setUpdateMode(UpdateMode.InsertOnly)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
new()
{
CollectionName = "{collection_name}",
Points =
{
new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new[] { 0.9f, 0.1f, 0.1f },
Payload = { ["color"] = "red" },
},
new()
{
Id = 2,
Vectors = new[] { 0.1f, 0.9f, 0.1f },
Payload = { ["color"] = "green" },
},
new()
{
Id = 3,
Vectors = new[] { 0.1f, 0.1f, 0.9f },
Payload = { ["color"] = "blue" },
},
},
},
UpdateMode = UpdateMode.InsertOnly,
Wait = true,
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectors(0.9, 0.1, 0.1),
Payload: qdrant.NewValueMap(map[string]any{"color": "red"}),
},
{
Id: qdrant.NewIDNum(2),
Vectors: qdrant.NewVectors(0.1, 0.9, 0.1),
Payload: qdrant.NewValueMap(map[string]any{"color": "green"}),
},
{
Id: qdrant.NewIDNum(3),
Vectors: qdrant.NewVectors(0.1, 0.1, 0.9),
Payload: qdrant.NewValueMap(map[string]any{"color": "blue"}),
},
},
UpdateMode: qdrant.UpdateMode_InsertOnly.Enum(),
})
```


`insert_only`

mode is especially useful when [migrating from one embedding model to another](https://qdrant.tech/documentation/database-tutorials/embedding-model-migration/), where conflicts between regular updates and background re-embedding tasks need to be resolved.

`update_only`

mode is useful with [conditional updates](#conditional-updates). Because upserts default to inserts for non-existing points, a conditional update without an explicit `update_mode`

will insert a new point even if the condition is not met, which is not the intended behavior in most cases.

### Named vectors

*Available as of v0.10.0*

If the collection was created with multiple vectors, each vector data can be provided using the vector’s name:

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"vector": {
"image": [0.9, 0.1, 0.1, 0.2],
"text": [0.4, 0.7, 0.1, 0.8, 0.1, 0.1, 0.9, 0.2]
}
},
{
"id": 2,
"vector": {
"image": [0.2, 0.1, 0.3, 0.9],
"text": [0.5, 0.2, 0.7, 0.4, 0.7, 0.2, 0.3, 0.9]
}
}
]
}
```


```
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
vector={
"image": [0.9, 0.1, 0.1, 0.2],
"text": [0.4, 0.7, 0.1, 0.8, 0.1, 0.1, 0.9, 0.2],
},
),
models.PointStruct(
id=2,
vector={
"image": [0.2, 0.1, 0.3, 0.9],
"text": [0.5, 0.2, 0.7, 0.4, 0.7, 0.2, 0.3, 0.9],
},
),
],
)
```


```
client.upsert("{collection_name}", {
points: [
{
id: 1,
vector: {
image: [0.9, 0.1, 0.1, 0.2],
text: [0.4, 0.7, 0.1, 0.8, 0.1, 0.1, 0.9, 0.2],
},
},
{
id: 2,
vector: {
image: [0.2, 0.1, 0.3, 0.9],
text: [0.5, 0.2, 0.7, 0.4, 0.7, 0.2, 0.3, 0.9],
},
},
],
});
```


```
use std::collections::HashMap;
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder};
use qdrant_client::Payload;
client
.upsert_points(
UpsertPointsBuilder::new(
"{collection_name}",
vec![
PointStruct::new(
1,
HashMap::from([
("image".to_string(), vec![0.9, 0.1, 0.1, 0.2]),
(
"text".to_string(),
vec![0.4, 0.7, 0.1, 0.8, 0.1, 0.1, 0.9, 0.2],
),
]),
Payload::default(),
),
PointStruct::new(
2,
HashMap::from([
("image".to_string(), vec![0.2, 0.1, 0.3, 0.9]),
(
"text".to_string(),
vec![0.5, 0.2, 0.7, 0.4, 0.7, 0.2, 0.3, 0.9],
),
]),
Payload::default(),
),
],
)
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(
namedVectors(
Map.of(
"image",
vector(List.of(0.9f, 0.1f, 0.1f, 0.2f)),
"text",
vector(List.of(0.4f, 0.7f, 0.1f, 0.8f, 0.1f, 0.1f, 0.9f, 0.2f)))))
.build(),
PointStruct.newBuilder()
.setId(id(2))
.setVectors(
namedVectors(
Map.of(
"image",
vector(List.of(0.2f, 0.1f, 0.3f, 0.9f)),
"text",
vector(List.of(0.5f, 0.2f, 0.7f, 0.4f, 0.7f, 0.2f, 0.3f, 0.9f)))))
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new Dictionary<string, float[]>
{
["image"] = [0.9f, 0.1f, 0.1f, 0.2f],
["text"] = [0.4f, 0.7f, 0.1f, 0.8f, 0.1f, 0.1f, 0.9f, 0.2f]
}
},
new()
{
Id = 2,
Vectors = new Dictionary<string, float[]>
{
["image"] = [0.2f, 0.1f, 0.3f, 0.9f],
["text"] = [0.5f, 0.2f, 0.7f, 0.4f, 0.7f, 0.2f, 0.3f, 0.9f]
}
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"image": qdrant.NewVector(0.9, 0.1, 0.1, 0.2),
"text": qdrant.NewVector(0.4, 0.7, 0.1, 0.8, 0.1, 0.1, 0.9, 0.2),
}),
},
{
Id: qdrant.NewIDNum(2),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"image": qdrant.NewVector(0.2, 0.1, 0.3, 0.9),
"text": qdrant.NewVector(0.5, 0.2, 0.7, 0.4, 0.7, 0.2, 0.3, 0.9),
}),
},
},
})
```


*Available as of v1.2.0*

Named vectors are optional. When uploading points, some vectors may be omitted.
For example, you can upload one point with only the `image`

vector and a second
one with only the `text`

vector.

When uploading a point with an existing ID, the existing point is deleted first,
then it is inserted with just the specified vectors. In other words, the entire
point is replaced, and any unspecified vectors are set to null. To keep existing
vectors unchanged and only update specified vectors, see [update vectors](#update-vectors).

### Sparse vectors

*Available as of v1.7.0*

Points can contain dense and sparse vectors.

A sparse vector is an array in which most of the elements have a value of zero.

It is possible to take advantage of this property to have an optimized representation, for this reason they have a different shape than dense vectors.

They are represented as a list of `(index, value)`

pairs, where `index`

is an integer and `value`

is a floating point number. The `index`

is the position of the non-zero value in the vector. The `values`

is the value of the non-zero element.

For example, the following vector:

```
[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0, 0.0]
```


can be represented as a sparse vector:

```
[(6, 1.0), (7, 2.0)]
```


Qdrant uses the following JSON representation throughout its APIs.

```
{
"indices": [6, 7],
"values": [1.0, 2.0]
}
```


The `indices`

and `values`

arrays must have the same length.
And the `indices`

must be unique.

If the `indices`

are not sorted, Qdrant will sort them internally so you may not rely on the order of the elements.

Sparse vectors must be named and can be uploaded in the same way as dense vectors.

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"vector": {
"text": {
"indices": [6, 7],
"values": [1.0, 2.0]
}
}
},
{
"id": 2,
"vector": {
"text": {
"indices": [1, 2, 4, 15, 33, 34],
"values": [0.1, 0.2, 0.3, 0.4, 0.5]
}
}
}
]
}
```


```
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
vector={
"text": models.SparseVector(
indices=[6, 7],
values=[1.0, 2.0],
)
},
),
models.PointStruct(
id=2,
vector={
"text": models.SparseVector(
indices=[1, 2, 3, 4, 5],
values=[0.1, 0.2, 0.3, 0.4, 0.5],
)
},
),
],
)
```


```
client.upsert("{collection_name}", {
points: [
{
id: 1,
vector: {
text: {
indices: [6, 7],
values: [1.0, 2.0],
},
},
},
{
id: 2,
vector: {
text: {
indices: [1, 2, 3, 4, 5],
values: [0.1, 0.2, 0.3, 0.4, 0.5],
},
},
},
],
});
```


```
use std::collections::HashMap;
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder};
use qdrant_client::Payload;
client
.upsert_points(
UpsertPointsBuilder::new(
"{collection_name}",
vec![
PointStruct::new(
1,
HashMap::from([("text".to_string(), vec![(6, 1.0), (7, 2.0)])]),
Payload::default(),
),
PointStruct::new(
2,
HashMap::from([(
"text".to_string(),
vec![(1, 0.1), (2, 0.2), (3, 0.3), (4, 0.4), (5, 0.5)],
)]),
Payload::default(),
),
],
)
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.VectorFactory.vector;
import io.qdrant.client.grpc.Points.NamedVectors;
import io.qdrant.client.grpc.Points.PointStruct;
import io.qdrant.client.grpc.Points.Vectors;
import java.util.List;
import java.util.Map;
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(
Vectors.newBuilder()
.setVectors(
NamedVectors.newBuilder()
.putAllVectors(
Map.of(
"text", vector(List.of(1.0f, 2.0f), List.of(6, 7))))
.build())
.build())
.build(),
PointStruct.newBuilder()
.setId(id(2))
.setVectors(
Vectors.newBuilder()
.setVectors(
NamedVectors.newBuilder()
.putAllVectors(
Map.of(
"text",
vector(
List.of(0.1f, 0.2f, 0.3f, 0.4f, 0.5f),
List.of(1, 2, 3, 4, 5))))
.build())
.build())
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new Dictionary<string, Vector> { ["text"] = ([1.0f, 2.0f], [6, 7]) }
},
new()
{
Id = 2,
Vectors = new Dictionary<string, Vector>
{
["text"] = ([0.1f, 0.2f, 0.3f, 0.4f, 0.5f], [1, 2, 3, 4, 5])
}
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"text": qdrant.NewVectorSparse(
[]uint32{6, 7},
[]float32{1.0, 2.0}),
}),
},
{
Id: qdrant.NewIDNum(2),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"text": qdrant.NewVectorSparse(
[]uint32{1, 2, 3, 4, 5},
[]float32{0.1, 0.2, 0.3, 0.4, 0.5}),
}),
},
},
})
```


### Inference

Instead of providing vectors explicitly, Qdrant can also generate vectors using a process called [inference](https://qdrant.tech/documentation/inference/). Inference is the process of creating vector embeddings from text, images, or other data types using a machine learning model.

You can use inference in the API wherever you can use regular vectors. For example, while upserting points, you can provide the text or image and the embedding model:

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"vector": {
"my-bm25-vector": {
"text": "Recipe for baking chocolate chip cookies",
"model": "qdrant/bm25"
}
}
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True
)
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
vector={
"my-bm25-vector": models.Document(
text="Recipe for baking chocolate chip cookies",
model="Qdrant/bm25",
)
},
)
],
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.upsert("{collection_name}", {
points: [
{
id: 1,
vector: {
'my-bm25-vector': {
text: 'Recipe for baking chocolate chip cookies',
model: 'Qdrant/bm25',
},
},
},
],
});
```


```
use qdrant_client::{
Payload, Qdrant,
qdrant::{DocumentBuilder, PointStruct, UpsertPointsBuilder},
};
use std::collections::HashMap;
let client = Qdrant::from_url("<your-qdrant-url>").build()?;
client
.upsert_points(UpsertPointsBuilder::new(
"{collection_name}",
vec![PointStruct::new(
1,
HashMap::from([(
"my-bm25-vector".to_string(),
DocumentBuilder::new("Recipe for baking chocolate chip cookies", "qdrant/bm25")
.build(),
)]),
Payload::default(),
)],
))
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.Document;
import io.qdrant.client.grpc.Points.Image;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;
QdrantClient client =
new QdrantClient(
QdrantGrpcClient.newBuilder("xyz-example.qdrant.io", 6334, true)
.withApiKey("<your-api-key")
.build());
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(
namedVectors(
Map.of(
"my-bm25-vector",
vector(
Document.newBuilder()
.setModel("qdrant/bm25")
.setText("Recipe for baking chocolate chip cookies")
.build()))))
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient(
host: "xyz-example.qdrant.io", port: 6334, https: true, apiKey: "<your-api-key>");
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new Dictionary<string, Vector>
{
["my-bm25-vector"] = new Document()
{
Model = "qdrant/bm25",
Text = "Recipe for baking chocolate chip cookies",
},
},
},
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "xyz-example.qdrant.io",
Port: 6334,
APIKey: "<paste-your-api-key-here>",
UseTLS: true,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(uint64(1)),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"my-bm25-vector": qdrant.NewVectorDocument(&qdrant.Document{
Model: "qdrant/bm25",
Text: "Recipe for baking chocolate chip cookies",
}),
}),
},
},
})
```


Qdrant uses the model to generate the embeddings and store the point with the resulting vector.

## Modify points

To change a point, you can modify its vectors or its payload. There are several ways to do this.

### Update vectors

*Available as of v1.2.0*

This method updates the specified vectors on the given points. Unspecified vectors are kept unchanged. All given points must exist.

REST API ([Schema](https://api.qdrant.tech/api-reference/points/update-vectors)):

```
PUT /collections/{collection_name}/points/vectors
{
"points": [
{
"id": 1,
"vector": {
"image": [0.1, 0.2, 0.3, 0.4]
}
},
{
"id": 2,
"vector": {
"text": [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2]
}
}
]
}
```


```
client.update_vectors(
collection_name="{collection_name}",
points=[
models.PointVectors(
id=1,
vector={
"image": [0.1, 0.2, 0.3, 0.4],
},
),
models.PointVectors(
id=2,
vector={
"text": [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2],
},
),
],
)
```


```
client.updateVectors("{collection_name}", {
points: [
{
id: 1,
vector: {
image: [0.1, 0.2, 0.3, 0.4],
},
},
{
id: 2,
vector: {
text: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2],
},
},
],
});
```


```
use std::collections::HashMap;
use qdrant_client::qdrant::{
PointVectors, UpdatePointVectorsBuilder,
};
client
.update_vectors(
UpdatePointVectorsBuilder::new(
"{collection_name}",
vec![
PointVectors {
id: Some(1.into()),
vectors: Some(
HashMap::from([("image".to_string(), vec![0.1, 0.2, 0.3, 0.4])]).into(),
),
},
PointVectors {
id: Some(2.into()),
vectors: Some(
HashMap::from([(
"text".to_string(),
vec![0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2],
)])
.into(),
),
},
],
)
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;
import io.qdrant.client.grpc.Points.PointVectors;
import java.util.List;
import java.util.Map;
client
.updateVectorsAsync(
"{collection_name}",
List.of(
PointVectors.newBuilder()
.setId(id(1))
.setVectors(namedVectors(Map.of("image", vector(List.of(0.1f, 0.2f, 0.3f, 0.4f)))))
.build(),
PointVectors.newBuilder()
.setId(id(2))
.setVectors(
namedVectors(
Map.of(
"text", vector(List.of(0.9f, 0.8f, 0.7f, 0.6f, 0.5f, 0.4f, 0.3f, 0.2f)))))
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpdateVectorsAsync(
collectionName: "{collection_name}",
points: new List<PointVectors>
{
new() { Id = 1, Vectors = ("image", new float[] { 0.1f, 0.2f, 0.3f, 0.4f }) },
new()
{
Id = 2,
Vectors = ("text", new float[] { 0.9f, 0.8f, 0.7f, 0.6f, 0.5f, 0.4f, 0.3f, 0.2f })
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.UpdateVectors(context.Background(), &qdrant.UpdatePointVectors{
CollectionName: "{collection_name}",
Points: []*qdrant.PointVectors{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"image": qdrant.NewVector(0.1, 0.2, 0.3, 0.4),
}),
},
{
Id: qdrant.NewIDNum(2),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"text": qdrant.NewVector(0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2),
}),
},
},
})
```


To update points and replace all of its vectors, see [uploading
points](#upload-points).

### Delete vectors

*Available as of v1.2.0*

This method deletes just the specified vectors from the given points. Other vectors are kept unchanged. Points are never deleted.

REST API ([Schema](https://api.qdrant.tech/api-reference/points/delete-vectors)):

```
POST /collections/{collection_name}/points/vectors/delete
{
"points": [0, 3, 100],
"vectors": ["text", "image"]
}
```


```
client.delete_vectors(
collection_name="{collection_name}",
points=[0, 3, 100],
vectors=["text", "image"],
)
```


```
client.deleteVectors("{collection_name}", {
points: [0, 3, 10],
vector: ["text", "image"],
});
```


```
use qdrant_client::qdrant::{
DeletePointVectorsBuilder, PointsIdsList,
};
client
.delete_vectors(
DeletePointVectorsBuilder::new("{collection_name}")
.points_selector(PointsIdsList {
ids: vec![0.into(), 3.into(), 10.into()],
})
.vectors(vec!["text".into(), "image".into()])
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import java.util.List;
client
.deleteVectorsAsync(
"{collection_name}", List.of("text", "image"), List.of(id(0), id(3), id(10)))
.get();
```


```
await client.DeleteVectorsAsync("{collection_name}", ["text", "image"], [0, 3, 10]);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client.DeleteVectors(context.Background(), &qdrant.DeletePointVectors{
CollectionName: "{collection_name}",
PointsSelector: qdrant.NewPointsSelector(
qdrant.NewIDNum(0), qdrant.NewIDNum(3), qdrant.NewIDNum(10)),
Vectors: &qdrant.VectorsSelector{
Names: []string{"text", "image"},
},
})
```


To delete entire points, see [deleting points](#delete-points).

### Update payload

Learn how to modify the payload of a point in the [Payload](https://qdrant.tech/documentation/concepts/payload/#update-payload) section.

## Delete points

REST API ([Schema](https://api.qdrant.tech/api-reference/points/delete-points)):

```
POST /collections/{collection_name}/points/delete
{
"points": [0, 3, 100]
}
```


```
client.delete(
collection_name="{collection_name}",
points_selector=models.PointIdsList(
points=[0, 3, 100],
),
)
```


```
client.delete("{collection_name}", {
points: [0, 3, 100],
});
```


```
use qdrant_client::qdrant::{DeletePointsBuilder, PointsIdsList};
client
.delete_points(
DeletePointsBuilder::new("{collection_name}")
.points(PointsIdsList {
ids: vec![0.into(), 3.into(), 100.into()],
})
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import java.util.List;
client.deleteAsync("{collection_name}", List.of(id(0), id(3), id(100)));
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.DeleteAsync(collectionName: "{collection_name}", ids: (ulong[])[0, 3, 100]);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Delete(context.Background(), &qdrant.DeletePoints{
CollectionName: "{collection_name}",
Points: qdrant.NewPointsSelector(
qdrant.NewIDNum(0), qdrant.NewIDNum(3), qdrant.NewIDNum(100),
),
})
```


Alternative way to specify which points to remove is to use filter.

```
POST /collections/{collection_name}/points/delete
{
"filter": {
"must": [
{
"key": "color",
"match": {
"value": "red"
}
}
]
}
}
```


```
client.delete(
collection_name="{collection_name}",
points_selector=models.FilterSelector(
filter=models.Filter(
must=[
models.FieldCondition(
key="color",
match=models.MatchValue(value="red"),
),
],
)
),
)
```


```
client.delete("{collection_name}", {
filter: {
must: [
{
key: "color",
match: {
value: "red",
},
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, DeletePointsBuilder, Filter};
client
.delete_points(
DeletePointsBuilder::new("{collection_name}")
.points(Filter::must([Condition::matches(
"color",
"red".to_string(),
)]))
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.grpc.Common.Filter;
client
.deleteAsync(
"{collection_name}",
Filter.newBuilder().addMust(matchKeyword("color", "red")).build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.DeleteAsync(collectionName: "{collection_name}", filter: MatchKeyword("color", "red"));
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Delete(context.Background(), &qdrant.DeletePoints{
CollectionName: "{collection_name}",
Points: qdrant.NewPointsSelectorFilter(
&qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("color", "red"),
},
},
),
})
```


This example removes all points with `{ "color": "red" }`

from the collection.

## Conditional updates

*Available as of v1.16.0*

All update operations (including point insertion, vector updates, payload updates, and deletions) support configurable pre-conditions based on filters.

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"vector": [0.05, 0.61, 0.76, 0.74],
"payload": {
"city": "Berlin",
"price": 1.99,
"version": 3
}
}
],
"update_filter": {
"must": [
{
"key": "version",
"match": {
"value": 2
}
}
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
vector=[0.05, 0.61, 0.76, 0.74],
payload={
"city": "Berlin",
"price": 1.99,
"version": 3,
},
),
],
update_filter=models.Filter(
must=[
models.FieldCondition(
key="version",
match=models.MatchValue(value=2),
),
],
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.upsert("{collection_name}", {
points: [
{
id: 1,
vector: [0.05, 0.61, 0.76, 0.74],
payload: {
city: "Berlin",
price: 1.99,
version: 3
},
}
],
update_filter: {
must: [
{
key: "version",
match: {
value: 2
}
}
]
}
});
```


```
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder, Filter, Condition};
use qdrant_client::{Payload, Qdrant};
use serde_json::json;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let points = vec![
PointStruct::new(
1,
vec![0.05, 0.61, 0.76, 0.74],
Payload::try_from(json!({
"city": "Berlin",
"price": 1.99,
"version": 3
})).unwrap(),
)
];
client
.upsert_points(
UpsertPointsBuilder::new("{collection_name}", points)
.wait(true)
.update_filter(Filter::must([Condition::matches("version", 2)]))
).await?;
```


```
import static io.qdrant.client.ConditionFactory.match;
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.PointStruct;
import io.qdrant.client.grpc.Points.UpsertPoints;
import java.util.Map;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.upsertAsync(
UpsertPoints.newBuilder()
.setCollectionName("{collectionName}")
.addPoints(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(vectors(0.05f, 0.61f, 0.76f, 0.74f))
.putAllPayload(Map.of("city", value("Berlin"), "price", value(1.99)))
.build())
.setUpdateFilter(Filter.newBuilder().addMust(match("version", 2)).build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new PointStruct
{
Id = 1,
Vectors = new[] { 0.05f, 0.61f, 0.76f, 0.74f },
Payload = {
["city"] = "Berlin",
["price"] = 1.99,
["version"] = 3
}
}
},
updateFilter: Match("version", 2)
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectors(0.05, 0.61, 0.76, 0.74),
Payload: qdrant.NewValueMap(map[string]any{
"city": "Berlin", "price": 1.99, "version": 3}),
},
},
UpdateFilter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatchInt("version", 2),
},
},
})
```


While conditional payload modification and deletion covers the use-case of mass data modification, conditional point insertion and vector updates are particularly useful for implementing optimistic concurrency control in distributed systems.

A common scenario for such mechanism is when multiple clients try to update the same point independently. Consider the following sequence of events:

- Client A reads point P.
- Client B reads point P.
- Client A modifies point P and writes it back to Qdrant.
- Client B modifies point P (based on the stale data) and writes it back to Qdrant, unintentionally overwriting changes made by Client A.

To prevent such situations, Client B can use conditional updates.
For this, we would need to introduce an additional field in the payload, e.g. `version`

, which would be incremented on each update.

When Client A writes back the modified point P, it would set the condition that the `version`

field must be equal to the value it read initially.
If Client B tries to write back its changes later, the condition would fail (as the `version`

has been incremented by Client A), and Qdrant would reject the update, preventing accidental overwrites.

Instead of `version`

, applications can use timestamps (assuming synchronized clocks) or any other monotonically increasing value that fits their data model.

## Retrieve points

There is a method for retrieving points by their ids.

REST API ([Schema](https://api.qdrant.tech/api-reference/points/get-points)):

```
POST /collections/{collection_name}/points
{
"ids": [0, 3, 100]
}
```


```
client.retrieve(
collection_name="{collection_name}",
ids=[0, 3, 100],
)
```


```
client.retrieve("{collection_name}", {
ids: [0, 3, 100],
});
```


```
use qdrant_client::qdrant::GetPointsBuilder;
client
.get_points(GetPointsBuilder::new(
"{collection_name}",
vec![0.into(), 30.into(), 100.into()],
))
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import java.util.List;
client
.retrieveAsync("{collection_name}", List.of(id(0), id(30), id(100)), false, false, null)
.get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.RetrieveAsync(
collectionName: "{collection_name}",
ids: [0, 30, 100],
withPayload: false,
withVectors: false
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Get(context.Background(), &qdrant.GetPoints{
CollectionName: "{collection_name}",
Ids: []*qdrant.PointId{
qdrant.NewIDNum(0), qdrant.NewIDNum(3), qdrant.NewIDNum(100),
},
})
```


This method has additional parameters `with_vectors`

and `with_payload`

.
Using these parameters, you can select parts of the point you want as a result.
Excluding helps you not to waste traffic transmitting useless data.

The single point can also be retrieved via the API:

REST API ([Schema](https://api.qdrant.tech/api-reference/points/get-point)):

```
GET /collections/{collection_name}/points/{point_id}
```


## Scroll points

Sometimes it might be necessary to get all stored points without knowing ids, or iterate over points that correspond to a filter.

REST API ([Schema](https://api.qdrant.tech/master/api-reference/points/scroll-points)):

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"must": [
{
"key": "color",
"match": {
"value": "red"
}
}
]
},
"limit": 1,
"with_payload": true,
"with_vector": false
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
must=[
models.FieldCondition(key="color", match=models.MatchValue(value="red")),
]
),
limit=1,
with_payload=True,
with_vectors=False,
)
```


```
client.scroll("{collection_name}", {
filter: {
must: [
{
key: "color",
match: {
value: "red",
},
},
],
},
limit: 1,
with_payload: true,
with_vector: false,
});
```


```
use qdrant_client::qdrant::{Condition, Filter, ScrollPointsBuilder};
client
.scroll(
ScrollPointsBuilder::new("{collection_name}")
.filter(Filter::must([Condition::matches(
"color",
"red".to_string(),
)]))
.limit(1)
.with_payload(true)
.with_vectors(false),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(Filter.newBuilder().addMust(matchKeyword("color", "red")).build())
.setLimit(1)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.ScrollAsync(
collectionName: "{collection_name}",
filter: MatchKeyword("color", "red"),
limit: 1,
payloadSelector: true
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("color", "red"),
},
},
Limit: qdrant.PtrOf(uint32(1)),
WithPayload: qdrant.NewWithPayload(true),
})
```


Returns all point with `color`

= `red`

.

```
{
"result": {
"next_page_offset": 1,
"points": [
{
"id": 0,
"payload": {
"color": "red"
}
}
]
},
"status": "ok",
"time": 0.0001
}
```


The Scroll API will return all points that match the filter in a page-by-page manner.

All resulting points are sorted by ID. To query the next page it is necessary to specify the largest seen ID in the `offset`

field.
For convenience, this ID is also returned in the field `next_page_offset`

.
If the value of the `next_page_offset`

field is `null`

- the last page is reached.

### Order points by payload key

*Available as of v1.8.0*

When using the [ scroll](#scroll-points) API, you can sort the results by payload key. For example, you can retrieve points in chronological order if your payloads have a

`"timestamp"`

field, as is shown from the example below:```
POST /collections/{collection_name}/points/scroll
{
"limit": 15,
"order_by": "timestamp", // <-- this!
}
```


```
client.scroll(
collection_name="{collection_name}",
limit=15,
order_by="timestamp", # <-- this!
)
```


```
client.scroll("{collection_name}", {
limit: 15,
order_by: "timestamp", // <-- this!
});
```


```
use qdrant_client::qdrant::{OrderByBuilder, ScrollPointsBuilder};
client
.scroll(
ScrollPointsBuilder::new("{collection_name}")
.limit(15)
.order_by(OrderByBuilder::new("timestamp")),
)
.await?;
```


```
import io.qdrant.client.grpc.Points.OrderBy;
import io.qdrant.client.grpc.Points.ScrollPoints;
client.scrollAsync(ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setLimit(15)
.setOrderBy(OrderBy.newBuilder().setKey("timestamp").build())
.build()).get();
```


```
await client.ScrollAsync("{collection_name}", limit: 15, orderBy: "timestamp");
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Limit: qdrant.PtrOf(uint32(15)),
OrderBy: &qdrant.OrderBy{
Key: "timestamp",
},
})
```


You need to use the `order_by`

`key`

parameter to specify the payload key. Then you can add other fields to control the ordering, such as `direction`

and `start_from`

:

```
"order_by": {
"key": "timestamp",
"direction": "desc" // default is "asc"
"start_from": 123, // start from this value
}
```


```
order_by=models.OrderBy(
key="timestamp",
direction=models.Direction.DESC, # default is "ASC"
start_from=123, # start from this value
)
```


```
order_by: {
key: "timestamp",
direction: "desc", // default is "asc"
start_from: 123, // start from this value
}
```


```
use qdrant_client::qdrant::{start_from::Value, Direction, OrderByBuilder};
OrderByBuilder::new("timestamp")
.direction(Direction::Desc.into())
.start_from(Value::Integer(123))
.build();
```


```
import io.qdrant.client.grpc.Points.Direction;
import io.qdrant.client.grpc.Points.OrderBy;
import io.qdrant.client.grpc.Points.StartFrom;
OrderBy.newBuilder()
.setKey("timestamp")
.setDirection(Direction.Desc)
.setStartFrom(StartFrom.newBuilder()
.setInteger(123)
.build())
.build();
```


```
using Qdrant.Client.Grpc;
new OrderBy
{
Key = "timestamp",
Direction = Direction.Desc,
StartFrom = 123
};
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.OrderBy{
Key: "timestamp",
Direction: qdrant.Direction_Desc.Enum(),
StartFrom: qdrant.NewStartFromInt(123),
}
```


When sorting is based on a non-unique value, it is not possible to rely on an ID offset. Thus, next_page_offset is not returned within the response. However, you can still do pagination by combining `"order_by": { "start_from": ... }`

with a `{ "must_not": [{ "has_id": [...] }] }`

filter.

## Counting points

*Available as of v0.8.4*

Sometimes it can be useful to know how many points fit the filter conditions without doing a real search.

Among others, for example, we can highlight the following scenarios:

- Evaluation of results size for faceted search
- Determining the number of pages for pagination
- Debugging the query execution speed

REST API ([Schema](https://api.qdrant.tech/master/api-reference/points/count-points)):

```
POST /collections/{collection_name}/points/count
{
"filter": {
"must": [
{
"key": "color",
"match": {
"value": "red"
}
}
]
},
"exact": true
}
```


```
client.count(
collection_name="{collection_name}",
count_filter=models.Filter(
must=[
models.FieldCondition(key="color", match=models.MatchValue(value="red")),
]
),
exact=True,
)
```


```
client.count("{collection_name}", {
filter: {
must: [
{
key: "color",
match: {
value: "red",
},
},
],
},
exact: true,
});
```


```
use qdrant_client::qdrant::{Condition, CountPointsBuilder, Filter};
client
.count(
CountPointsBuilder::new("{collection_name}")
.filter(Filter::must([Condition::matches(
"color",
"red".to_string(),
)]))
.exact(true),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.grpc.Common.Filter;
client
.countAsync(
"{collection_name}",
Filter.newBuilder().addMust(matchKeyword("color", "red")).build(),
true)
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.CountAsync(
collectionName: "{collection_name}",
filter: MatchKeyword("color", "red"),
exact: true
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Count(context.Background(), &qdrant.CountPoints{
CollectionName: "midlib",
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("color", "red"),
},
},
})
```


Returns number of counts matching given filtering conditions:

```
{
"count": 3811
}
```


## Batch update

*Available as of v1.5.0*

You can batch multiple point update operations. This includes inserting, updating and deleting points, vectors and payload.

A batch update request consists of a list of operations. These are executed in order. These operations can be batched:

[Upsert points](#upload-points):`upsert`

or`UpsertOperation`

[Delete points](#delete-points):`delete_points`

or`DeleteOperation`

[Update vectors](#update-vectors):`update_vectors`

or`UpdateVectorsOperation`

[Delete vectors](#delete-vectors):`delete_vectors`

or`DeleteVectorsOperation`

[Set payload](https://qdrant.tech/documentation/concepts/payload/#set-payload):`set_payload`

or`SetPayloadOperation`

[Overwrite payload](https://qdrant.tech/documentation/concepts/payload/#overwrite-payload):`overwrite_payload`

or`OverwritePayload`

[Delete payload](https://qdrant.tech/documentation/concepts/payload/#delete-payload-keys):`delete_payload`

or`DeletePayloadOperation`

[Clear payload](https://qdrant.tech/documentation/concepts/payload/#clear-payload):`clear_payload`

or`ClearPayloadOperation`


The following example snippet makes use of all operations.

REST API ([Schema](https://api.qdrant.tech/master/api-reference/points/batch-update)):

```
POST /collections/{collection_name}/points/batch
{
"operations": [
{
"upsert": {
"points": [
{
"id": 1,
"vector": [1.0, 2.0, 3.0, 4.0],
"payload": {}
}
]
}
},
{
"update_vectors": {
"points": [
{
"id": 1,
"vector": [1.0, 2.0, 3.0, 4.0]
}
]
}
},
{
"delete_vectors": {
"points": [1],
"vector": [""]
}
},
{
"overwrite_payload": {
"payload": {
"test_payload": "1"
},
"points": [1]
}
},
{
"set_payload": {
"payload": {
"test_payload_2": "2",
"test_payload_3": "3"
},
"points": [1]
}
},
{
"delete_payload": {
"keys": ["test_payload_2"],
"points": [1]
}
},
{
"clear_payload": {
"points": [1]
}
},
{"delete": {"points": [1]}}
]
}
```


```
client.batch_update_points(
collection_name="{collection_name}",
update_operations=[
models.UpsertOperation(
upsert=models.PointsList(
points=[
models.PointStruct(
id=1,
vector=[1.0, 2.0, 3.0, 4.0],
payload={},
),
]
)
),
models.UpdateVectorsOperation(
update_vectors=models.UpdateVectors(
points=[
models.PointVectors(
id=1,
vector=[1.0, 2.0, 3.0, 4.0],
)
]
)
),
models.DeleteVectorsOperation(
delete_vectors=models.DeleteVectors(points=[1], vector=[""])
),
models.OverwritePayloadOperation(
overwrite_payload=models.SetPayload(
payload={"test_payload": 1},
points=[1],
)
),
models.SetPayloadOperation(
set_payload=models.SetPayload(
payload={
"test_payload_2": 2,
"test_payload_3": 3,
},
points=[1],
)
),
models.DeletePayloadOperation(
delete_payload=models.DeletePayload(keys=["test_payload_2"], points=[1])
),
models.ClearPayloadOperation(clear_payload=models.PointIdsList(points=[1])),
models.DeleteOperation(delete=models.PointIdsList(points=[1])),
],
)
```


```
client.batchUpdate("{collection_name}", {
operations: [
{
upsert: {
points: [
{
id: 1,
vector: [1.0, 2.0, 3.0, 4.0],
payload: {},
},
],
},
},
{
update_vectors: {
points: [
{
id: 1,
vector: [1.0, 2.0, 3.0, 4.0],
},
],
},
},
{
delete_vectors: {
points: [1],
vector: [""],
},
},
{
overwrite_payload: {
payload: {
test_payload: 1,
},
points: [1],
},
},
{
set_payload: {
payload: {
test_payload_2: 2,
test_payload_3: 3,
},
points: [1],
},
},
{
delete_payload: {
keys: ["test_payload_2"],
points: [1],
},
},
{
clear_payload: {
points: [1],
},
},
{
delete: {
points: [1],
},
},
],
});
```


```
use std::collections::HashMap;
use qdrant_client::qdrant::{
points_update_operation::{
ClearPayload, DeletePayload, DeletePoints, DeleteVectors, Operation, OverwritePayload,
PointStructList, SetPayload, UpdateVectors,
},
PointStruct, PointVectors, PointsUpdateOperation, UpdateBatchPointsBuilder, VectorsSelector,
};
use qdrant_client::Payload;
client
.update_points_batch(
UpdateBatchPointsBuilder::new(
"{collection_name}",
vec![
PointsUpdateOperation {
operation: Some(Operation::Upsert(PointStructList {
points: vec![PointStruct::new(
1,
vec![1.0, 2.0, 3.0, 4.0],
Payload::default(),
)],
..Default::default()
})),
},
PointsUpdateOperation {
operation: Some(Operation::UpdateVectors(UpdateVectors {
points: vec![PointVectors {
id: Some(1.into()),
vectors: Some(vec![1.0, 2.0, 3.0, 4.0].into()),
}],
..Default::default()
})),
},
PointsUpdateOperation {
operation: Some(Operation::DeleteVectors(DeleteVectors {
points_selector: Some(vec![1.into()].into()),
vectors: Some(VectorsSelector {
names: vec!["".into()],
}),
..Default::default()
})),
},
PointsUpdateOperation {
operation: Some(Operation::OverwritePayload(OverwritePayload {
points_selector: Some(vec![1.into()].into()),
payload: HashMap::from([("test_payload".to_string(), 1.into())]),
..Default::default()
})),
},
PointsUpdateOperation {
operation: Some(Operation::SetPayload(SetPayload {
points_selector: Some(vec![1.into()].into()),
payload: HashMap::from([
("test_payload_2".to_string(), 2.into()),
("test_payload_3".to_string(), 3.into()),
]),
..Default::default()
})),
},
PointsUpdateOperation {
operation: Some(Operation::DeletePayload(DeletePayload {
points_selector: Some(vec![1.into()].into()),
keys: vec!["test_payload_2".to_string()],
..Default::default()
})),
},
PointsUpdateOperation {
operation: Some(Operation::ClearPayload(ClearPayload {
points: Some(vec![1.into()].into()),
..Default::default()
})),
},
PointsUpdateOperation {
operation: Some(Operation::DeletePoints(DeletePoints {
points: Some(vec![1.into()].into()),
..Default::default()
})),
},
],
)
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;
import io.qdrant.client.grpc.Points.PointStruct;
import io.qdrant.client.grpc.Points.PointVectors;
import io.qdrant.client.grpc.Points.PointsIdsList;
import io.qdrant.client.grpc.Points.PointsSelector;
import io.qdrant.client.grpc.Points.PointsUpdateOperation.ClearPayload;
import io.qdrant.client.grpc.Points.PointsUpdateOperation.DeletePayload;
import io.qdrant.client.grpc.Points.PointsUpdateOperation.DeletePoints;
import io.qdrant.client.grpc.Points.PointsUpdateOperation.DeleteVectors;
import io.qdrant.client.grpc.Points.PointsUpdateOperation.OverwritePayload;
import io.qdrant.client.grpc.Points.PointsUpdateOperation.PointStructList;
import io.qdrant.client.grpc.Points.PointsUpdateOperation.SetPayload;
import io.qdrant.client.grpc.Points.PointsUpdateOperation.UpdateVectors;
import io.qdrant.client.grpc.Points.PointsUpdateOperation;
import io.qdrant.client.grpc.Points.VectorsSelector;
import java.util.List;
import java.util.Map;
client
.batchUpdateAsync(
"{collection_name}",
List.of(
PointsUpdateOperation.newBuilder()
.setUpsert(
PointStructList.newBuilder()
.addPoints(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(vectors(1.0f, 2.0f, 3.0f, 4.0f))
.build())
.build())
.build(),
PointsUpdateOperation.newBuilder()
.setUpdateVectors(
UpdateVectors.newBuilder()
.addPoints(
PointVectors.newBuilder()
.setId(id(1))
.setVectors(vectors(1.0f, 2.0f, 3.0f, 4.0f))
.build())
.build())
.build(),
PointsUpdateOperation.newBuilder()
.setDeleteVectors(
DeleteVectors.newBuilder()
.setPointsSelector(
PointsSelector.newBuilder()
.setPoints(PointsIdsList.newBuilder().addIds(id(1)).build())
.build())
.setVectors(VectorsSelector.newBuilder().addNames("").build())
.build())
.build(),
PointsUpdateOperation.newBuilder()
.setOverwritePayload(
OverwritePayload.newBuilder()
.setPointsSelector(
PointsSelector.newBuilder()
.setPoints(PointsIdsList.newBuilder().addIds(id(1)).build())
.build())
.putAllPayload(Map.of("test_payload", value(1)))
.build())
.build(),
PointsUpdateOperation.newBuilder()
.setSetPayload(
SetPayload.newBuilder()
.setPointsSelector(
PointsSelector.newBuilder()
.setPoints(PointsIdsList.newBuilder().addIds(id(1)).build())
.build())
.putAllPayload(
Map.of("test_payload_2", value(2), "test_payload_3", value(3)))
.build())
.build(),
PointsUpdateOperation.newBuilder()
.setDeletePayload(
DeletePayload.newBuilder()
.setPointsSelector(
PointsSelector.newBuilder()
.setPoints(PointsIdsList.newBuilder().addIds(id(1)).build())
.build())
.addKeys("test_payload_2")
.build())
.build(),
PointsUpdateOperation.newBuilder()
.setClearPayload(
ClearPayload.newBuilder()
.setPoints(
PointsSelector.newBuilder()
.setPoints(PointsIdsList.newBuilder().addIds(id(1)).build())
.build())
.build())
.build(),
PointsUpdateOperation.newBuilder()
.setDeletePoints(
DeletePoints.newBuilder()
.setPoints(
PointsSelector.newBuilder()
.setPoints(PointsIdsList.newBuilder().addIds(id(1)).build())
.build())
.build())
.build()))
.get();
```


To batch many points with a single operation type, please use batching functionality in that operation directly.

## Awaiting result

If the API is called with the `&wait=false`

parameter, or if it is not explicitly specified, the client will receive an acknowledgment of receiving data:

```
{
"result": {
"operation_id": 123,
"status": "acknowledged"
},
"status": "ok",
"time": 0.000206061
}
```


This response does not mean that the data is available for retrieval yet. This uses a form of eventual consistency. It may take a short amount of time before it is actually processed as updating the collection happens in the background. In fact, it is possible that such request eventually fails. If inserting a lot of vectors, we also recommend using asynchronous requests to take advantage of pipelining.

If the logic of your application requires a guarantee that the vector will be available for searching immediately after the API responds, then use the flag `?wait=true`

.
In this case, the API will return the result only after the operation is finished:

```
{
"result": {
"operation_id": 0,
"status": "completed"
},
"status": "ok",
"time": 0.000206061
}
```

---

## Source: https://qdrant.tech/documentation/manage-data/vectors/

# Vectors

Vectors (or embeddings) are the core concept of the Qdrant Vector Search engine. Vectors define the similarity between objects in the vector space.

If a pair of vectors are similar in vector space, it means that the objects they represent are similar in some way.

For example, if you have a collection of images, you can represent each image as a vector. If two images are similar, their vectors will be close to each other in the vector space.

In order to obtain a vector representation of an object, you need to apply a vectorization algorithm to the object. Usually, this algorithm is a neural network that converts the object into a fixed-size vector.

The neural network is usually [trained](https://qdrant.tech/articles/metric-learning-tips/) on a pairs or [triplets](https://qdrant.tech/articles/triplet-loss/) of similar and dissimilar objects, so it learns to recognize a specific type of similarity.

By using this property of vectors, you can explore your data in a number of ways; e.g. by searching for similar objects, clustering objects, and more.

## Vector Types

Modern neural networks can output vectors in different shapes and sizes, and Qdrant supports most of them. Let’s take a look at the most common types of vectors supported by Qdrant.

### Dense Vectors

This is the most common type of vector. It is a simple list of numbers, it has a fixed length and each element of the list is a floating-point number.

It looks like this:

```
// A piece of a real-world dense vector
[
-0.013052909,
0.020387933,
-0.007869,
-0.11111383,
-0.030188112,
-0.0053388323,
0.0010654867,
0.072027855,
-0.04167721,
0.014839341,
-0.032948174,
-0.062975034,
-0.024837125,
....
]
```


The majority of neural networks create dense vectors, so you can use them with Qdrant without any additional processing.
Although compatible with most embedding models out there, Qdrant has been tested with the following [verified embedding providers](https://qdrant.tech/documentation/embeddings/).

### Sparse Vectors

Sparse vectors are a special type of vectors. Mathematically, they are the same as dense vectors, but they contain many zeros so they are stored in a special format.

Sparse vectors in Qdrant don’t have a fixed length, as it is dynamically allocated during vector insertion. The amount of non-zero values in sparse vectors is currently limited to u32 datatype range (4294967295).

In order to define a sparse vector, you need to provide a list of non-zero elements and their indexes.

```
// A sparse vector with 4 non-zero elements
{
"indexes": [1, 3, 5, 7],
"values": [0.1, 0.2, 0.3, 0.4]
}
```


Sparse vectors in Qdrant are kept in special storage and indexed in a separate index, so their configuration is different from dense vectors.

To create a collection with sparse vectors:

```
PUT /collections/{collection_name}
{
"sparse_vectors": {
"text": { }
}
}
```


```
curl -X PUT http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"sparse_vectors": {
"text": { }
}
}'
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config={},
sparse_vectors_config={
"text": models.SparseVectorParams(),
},
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
sparse_vectors: {
text: { },
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
CreateCollectionBuilder, SparseVectorParamsBuilder, SparseVectorsConfigBuilder,
};
let client = Qdrant::from_url("http://localhost:6334").build()?;
let mut sparse_vector_config = SparseVectorsConfigBuilder::default();
sparse_vector_config.add_named_vector_params("text", SparseVectorParamsBuilder::default());
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.sparse_vectors_config(sparse_vector_config),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.SparseVectorConfig;
import io.qdrant.client.grpc.Collections.SparseVectorParams;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setSparseVectorsConfig(
SparseVectorConfig.newBuilder()
.putMap("text", SparseVectorParams.getDefaultInstance()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
sparseVectorsConfig: ("text", new SparseVectorParams())
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
SparseVectorsConfig: qdrant.NewSparseVectorsConfig(
map[string]*qdrant.SparseVectorParams{
"text": {},
}),
})
```


Insert a point with a sparse vector into the created collection:

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"vector": {
"text": {
"indices": [1, 3, 5, 7],
"values": [0.1, 0.2, 0.3, 0.4]
}
}
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
payload={}, # Add any additional payload if necessary
vector={
"text": models.SparseVector(
indices=[1, 3, 5, 7],
values=[0.1, 0.2, 0.3, 0.4]
)
},
)
],
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.upsert("{collection_name}", {
points: [
{
id: 1,
vector: {
text: {
indices: [1, 3, 5, 7],
values: [0.1, 0.2, 0.3, 0.4]
},
},
}
]
});
```


```
use qdrant_client::qdrant::{NamedVectors, PointStruct, UpsertPointsBuilder, Vector};
use qdrant_client::{Payload, Qdrant};
let client = Qdrant::from_url("http://localhost:6334").build()?;
let points = vec![PointStruct::new(
1,
NamedVectors::default().add_vector(
"text",
Vector::new_sparse(vec![1, 3, 5, 7], vec![0.1, 0.2, 0.3, 0.4]),
),
Payload::new(),
)];
client
.upsert_points(UpsertPointsBuilder::new("{collection_name}", points))
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(
namedVectors(Map.of(
"text", vector(List.of(1.0f, 2.0f), List.of(6, 7))))
)
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List < PointStruct > {
new() {
Id = 1,
Vectors = new Dictionary <string, Vector> {
["text"] = ([0.1f, 0.2f, 0.3f, 0.4f], [1, 3, 5, 7])
}
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectorsMap(
map[string]*qdrant.Vector{
"text": qdrant.NewVectorSparse(
[]uint32{1, 3, 5, 7},
[]float32{0.1, 0.2, 0.3, 0.4}),
}),
},
},
})
```


Now you can run a search with sparse vectors:

```
POST /collections/{collection_name}/points/query
{
"query": {
"indices": [1, 3, 5, 7],
"values": [0.1, 0.2, 0.3, 0.4]
},
"using": "text"
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
result = client.query_points(
collection_name="{collection_name}",
query=models.SparseVector(indices=[1, 3, 5, 7], values=[0.1, 0.2, 0.3, 0.4]),
using="text",
).points
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: {
indices: [1, 3, 5, 7],
values: [0.1, 0.2, 0.3, 0.4]
},
using: "text",
limit: 3,
});
```


```
use qdrant_client::qdrant::QueryPointsBuilder;
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![(1, 0.2), (3, 0.1), (5, 0.9), (7, 0.7)])
.limit(10)
.using("text"),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setUsing("text")
.setQuery(nearest(List.of(0.1f, 0.2f, 0.3f, 0.4f), List.of(1, 3, 5, 7)))
.setLimit(3)
.build())
.get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new (float, uint)[] {(0.1f, 1), (0.2f, 3), (0.3f, 5), (0.4f, 7)},
usingVector: "text",
limit: 3
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuerySparse(
[]uint32{1, 3, 5, 7},
[]float32{0.1, 0.2, 0.3, 0.4}),
Using: qdrant.PtrOf("text"),
})
```


### Multivectors

**Available as of v1.10.0**

Qdrant supports the storing of a variable amount of same-shaped dense vectors in a single point. This means that instead of a single dense vector, you can upload a matrix of dense vectors.

The length of the matrix is fixed, but the number of vectors in the matrix can be different for each point.

Multivectors look like this:

```
// A multivector of size 4
"vector": [
[-0.013, 0.020, -0.007, -0.111],
[-0.030, -0.055, 0.001, 0.072],
[-0.041, 0.014, -0.032, -0.062],
....
]
```


There are two scenarios where multivectors are useful:

**Multiple representation of the same object**- For example, you can store multiple embeddings for pictures of the same object, taken from different angles. This approach assumes that the payload is same for all vectors.**Late interaction embeddings**- Some text embedding models can output multiple vectors for a single text. For example, a family of models such as ColBERT output a relatively small vector for each token in the text.

In order to use multivectors, we need to specify a function that will be used to compare between matrices of vectors

Currently, Qdrant supports `max_sim`

function, which is defined as a sum of maximum similarities between each pair of vectors in the matrices.

$$ score = \sum_{i=1}^{N} \max_{j=1}^{M} \text{Sim}(\text{vectorA}_i, \text{vectorB}_j) $$

Where $N$ is the number of vectors in the first matrix, $M$ is the number of vectors in the second matrix, and $\text{Sim}$ is a similarity function, for example, cosine similarity.

To use multivectors, create a collection with the following configuration:

```
PUT collections/{collection_name}
{
"vectors": {
"size": 128,
"distance": "Cosine",
"multivector_config": {
"comparator": "max_sim"
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(
size=128,
distance=models.Distance.COSINE,
multivector_config=models.MultiVectorConfig(
comparator=models.MultiVectorComparator.MAX_SIM
),
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 128,
distance: "Cosine",
multivector_config: {
comparator: "max_sim"
}
},
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, VectorParamsBuilder,
MultiVectorComparator, MultiVectorConfigBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(
VectorParamsBuilder::new(100, Distance::Cosine)
.multivector_config(
MultiVectorConfigBuilder::new(MultiVectorComparator::MaxSim)
),
),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.MultiVectorComparator;
import io.qdrant.client.grpc.Collections.MultiVectorConfig;
import io.qdrant.client.grpc.Collections.VectorParams;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.createCollectionAsync("{collection_name}",
VectorParams.newBuilder().setSize(128)
.setDistance(Distance.Cosine)
.setMultivectorConfig(MultiVectorConfig.newBuilder()
.setComparator(MultiVectorComparator.MaxSim)
.build())
.build()).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams {
Size = 128,
Distance = Distance.Cosine,
MultivectorConfig = new() {
Comparator = MultiVectorComparator.MaxSim
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 128,
Distance: qdrant.Distance_Cosine,
MultivectorConfig: &qdrant.MultiVectorConfig{
Comparator: qdrant.MultiVectorComparator_MaxSim,
},
}),
})
```


To insert a point with multivector:

```
PUT collections/{collection_name}/points
{
"points": [
{
"id": 1,
"vector": [
[-0.013, 0.020, -0.007, -0.111, ...],
[-0.030, -0.055, 0.001, 0.072, ...],
[-0.041, 0.014, -0.032, -0.062, ...]
]
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
vector=[
[-0.013, 0.020, -0.007, -0.111],
[-0.030, -0.055, 0.001, 0.072],
[-0.041, 0.014, -0.032, -0.062]
],
)
],
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.upsert("{collection_name}", {
points: [
{
id: 1,
vector: [
[-0.013, 0.020, -0.007, -0.111],
[-0.030, -0.055, 0.001, 0.072],
[-0.041, 0.014, -0.032, -0.062]
],
}
]
});
```


```
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder, Vector};
use qdrant_client::{Payload, Qdrant};
let client = Qdrant::from_url("http://localhost:6334").build()?;
let points = vec![
PointStruct::new(
1,
Vector::new_multi(vec![
vec![-0.013, 0.020, -0.007, -0.111],
vec![-0.030, -0.055, 0.001, 0.072],
vec![-0.041, 0.014, -0.032, -0.062],
]),
Payload::new()
)
];
client
.upsert_points(
UpsertPointsBuilder::new("{collection_name}", points)
).await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.VectorFactory.multiVector;
import static io.qdrant.client.VectorsFactory.vectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(vectors(multiVector(new float[][] {
{-0.013f, 0.020f, -0.007f, -0.111f},
{-0.030f, -0.055f, 0.001f, 0.072f},
{-0.041f, 0.014f, -0.032f, -0.062f}
})))
.build()
))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List <PointStruct> {
new() {
Id = 1,
Vectors = new float[][] {
[-0.013f, 0.020f, -0.007f, -0.111f],
[-0.030f, -0.05f, 0.001f, 0.072f],
[-0.041f, 0.014f, -0.032f, -0.062f ],
},
},
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectorsMulti(
[][]float32{
{-0.013, 0.020, -0.007, -0.111},
{-0.030, -0.055, 0.001, 0.072},
{-0.041, 0.014, -0.032, -0.062}}),
},
},
})
```


To search with multivector (available in `query`

API):

```
POST collections/{collection_name}/points/query
{
"query": [
[-0.013, 0.020, -0.007, -0.111, ...],
[-0.030, -0.055, 0.001, 0.072, ...],
[-0.041, 0.014, -0.032, -0.062, ...]
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[
[-0.013, 0.020, -0.007, -0.111],
[-0.030, -0.055, 0.001, 0.072],
[-0.041, 0.014, -0.032, -0.062]
],
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
"query": [
[-0.013, 0.020, -0.007, -0.111],
[-0.030, -0.055, 0.001, 0.072],
[-0.041, 0.014, -0.032, -0.062]
]
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{ QueryPointsBuilder, VectorInput };
let client = Qdrant::from_url("http://localhost:6334").build()?;
let res = client.query(
QueryPointsBuilder::new("{collection_name}")
.query(VectorInput::new_multi(
vec![
vec![-0.013, 0.020, -0.007, -0.111],
vec![-0.030, -0.055, 0.001, 0.072],
vec![-0.041, 0.014, -0.032, -0.062],
]
))
).await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(new float[][] {
{-0.013f, 0.020f, -0.007f, -0.111f},
{-0.030f, -0.055f, 0.001f, 0.072f},
{-0.041f, 0.014f, -0.032f, -0.062f}
}))
.build()).get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[][] {
[-0.013f, 0.020f, -0.007f, -0.111f],
[-0.030f, -0.055f, 0.001f, 0.072f],
[-0.041f, 0.014f, -0.032f, -0.062f],
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryMulti(
[][]float32{
{-0.013, 0.020, -0.007, -0.111},
{-0.030, -0.055, 0.001, 0.072},
{-0.041, 0.014, -0.032, -0.062},
}),
})
```


## Named Vectors

In Qdrant, you can store multiple vectors of different sizes and [types](#vector-types) in the same data [point](https://qdrant.tech/documentation/concepts/points/). This is useful when you need to define your data with multiple embeddings to represent different features or modalities (e.g., image, text or video).

To store different vectors for each point, you need to create separate named vector spaces in the [collection](https://qdrant.tech/documentation/concepts/collections/). You can define these vector spaces during collection creation and manage them independently.

To create a collection with named vectors, you need to specify a configuration for each vector:

```
PUT /collections/{collection_name}
{
"vectors": {
"image": {
"size": 4,
"distance": "Dot"
},
"text": {
"size": 5,
"distance": "Cosine"
}
},
"sparse_vectors": {
"text-sparse": {}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config={
"image": models.VectorParams(size=4, distance=models.Distance.DOT),
"text": models.VectorParams(size=5, distance=models.Distance.COSINE),
},
sparse_vectors_config={"text-sparse": models.SparseVectorParams()},
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
image: { size: 4, distance: "Dot" },
text: { size: 5, distance: "Cosine" },
},
sparse_vectors: {
text_sparse: {}
}
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, SparseVectorParamsBuilder, SparseVectorsConfigBuilder,
VectorParamsBuilder, VectorsConfigBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let mut vector_config = VectorsConfigBuilder::default();
vector_config.add_named_vector_params("text", VectorParamsBuilder::new(5, Distance::Dot));
vector_config.add_named_vector_params("image", VectorParamsBuilder::new(4, Distance::Cosine));
let mut sparse_vectors_config = SparseVectorsConfigBuilder::default();
sparse_vectors_config
.add_named_vector_params("text-sparse", SparseVectorParamsBuilder::default());
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(vector_config)
.sparse_vectors_config(sparse_vectors_config),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.SparseVectorConfig;
import io.qdrant.client.grpc.Collections.SparseVectorParams;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorParamsMap;
import io.qdrant.client.grpc.Collections.VectorsConfig;
import java.util.Map;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(VectorsConfig.newBuilder().setParamsMap(
VectorParamsMap.newBuilder().putAllMap(Map.of("image",
VectorParams.newBuilder()
.setSize(4)
.setDistance(Distance.Dot)
.build(),
"text",
VectorParams.newBuilder()
.setSize(5)
.setDistance(Distance.Cosine)
.build()))))
.setSparseVectorsConfig(SparseVectorConfig.newBuilder().putMap(
"text-sparse", SparseVectorParams.getDefaultInstance()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParamsMap
{
Map = {
["image"] = new VectorParams {
Size = 4, Distance = Distance.Dot
},
["text"] = new VectorParams {
Size = 5, Distance = Distance.Cosine
},
}
},
sparseVectorsConfig: new SparseVectorConfig
{
Map = {
["text-sparse"] = new()
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfigMap(
map[string]*qdrant.VectorParams{
"image": {
Size: 4,
Distance: qdrant.Distance_Dot,
},
"text": {
Size: 5,
Distance: qdrant.Distance_Cosine,
},
}),
SparseVectorsConfig: qdrant.NewSparseVectorsConfig(
map[string]*qdrant.SparseVectorParams{
"text-sparse": {},
},
),
})
```


To insert a point with named vectors:

```
PUT /collections/{collection_name}/points?wait=true
{
"points": [
{
"id": 1,
"vector": {
"image": [0.9, 0.1, 0.1, 0.2],
"text": [0.4, 0.7, 0.1, 0.8, 0.1],
"text-sparse": {
"indices": [1, 3, 5, 7],
"values": [0.1, 0.2, 0.3, 0.4]
}
}
}
]
}
```


```
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
vector={
"image": [0.9, 0.1, 0.1, 0.2],
"text": [0.4, 0.7, 0.1, 0.8, 0.1],
"text-sparse": {
"indices": [1, 3, 5, 7],
"values": [0.1, 0.2, 0.3, 0.4],
},
},
),
],
)
```


```
client.upsert("{collection_name}", {
points: [
{
id: 1,
vector: {
image: [0.9, 0.1, 0.1, 0.2],
text: [0.4, 0.7, 0.1, 0.8, 0.1],
text_sparse: {
indices: [1, 3, 5, 7],
values: [0.1, 0.2, 0.3, 0.4]
}
},
},
],
});
```


```
use qdrant_client::qdrant::{
NamedVectors, PointStruct, UpsertPointsBuilder, Vector,
};
use qdrant_client::Payload;
client
.upsert_points(
UpsertPointsBuilder::new(
"{collection_name}",
vec![PointStruct::new(
1,
NamedVectors::default()
.add_vector("text", Vector::new_dense(vec![0.4, 0.7, 0.1, 0.8, 0.1]))
.add_vector("image", Vector::new_dense(vec![0.9, 0.1, 0.1, 0.2]))
.add_vector(
"text-sparse",
Vector::new_sparse(vec![1, 3, 5, 7], vec![0.1, 0.2, 0.3, 0.4]),
),
Payload::default(),
)],
)
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(
namedVectors(
Map.of(
"image",
vector(List.of(0.9f, 0.1f, 0.1f, 0.2f)),
"text",
vector(List.of(0.4f, 0.7f, 0.1f, 0.8f, 0.1f)),
"text-sparse",
vector(List.of(0.1f, 0.2f, 0.3f, 0.4f), List.of(1, 3, 5, 7)))))
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new Dictionary<string, Vector>
{
["image"] = new float[] {0.9f, 0.1f, 0.1f, 0.2f},
["text"] = new float[] {0.4f, 0.7f, 0.1f, 0.8f, 0.1f},
["text-sparse"] = ([0.1f, 0.2f, 0.3f, 0.4f], [1, 3, 5, 7]),
}
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"image": qdrant.NewVector(0.9, 0.1, 0.1, 0.2),
"text": qdrant.NewVector(0.4, 0.7, 0.1, 0.8, 0.1),
"text-sparse": qdrant.NewVectorSparse(
[]uint32{1, 3, 5, 7},
[]float32{0.1, 0.2, 0.3, 0.4}),
}),
},
},
})
```


To search with named vectors (available in `query`

API):

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.7],
"using": "image",
"limit": 3
}
```


```
from qdrant_client import QdrantClient
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7],
using="image",
limit=3,
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7],
using: "image",
limit: 3,
});
```


```
use qdrant_client::qdrant::QueryPointsBuilder;
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.2, 0.1, 0.9, 0.7])
.limit(3)
.using("image"),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setUsing("image")
.setLimit(3)
.build()).get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
usingVector: "image",
limit: 3
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
Using: qdrant.PtrOf("image"),
})
```


## Inference

Instead of providing vectors explicitly when ingesting or querying data, Qdrant can also generate vectors using a process called [inference](https://qdrant.tech/documentation/inference/). Inference is the process of creating vector embeddings from text, images, or other data types using a machine learning model.

You can use inference in the API wherever you can use regular vectors. For example, while upserting points, you can provide the text or image and the embedding model:

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"vector": {
"my-bm25-vector": {
"text": "Recipe for baking chocolate chip cookies",
"model": "qdrant/bm25"
}
}
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True
)
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
vector={
"my-bm25-vector": models.Document(
text="Recipe for baking chocolate chip cookies",
model="Qdrant/bm25",
)
},
)
],
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.upsert("{collection_name}", {
points: [
{
id: 1,
vector: {
'my-bm25-vector': {
text: 'Recipe for baking chocolate chip cookies',
model: 'Qdrant/bm25',
},
},
},
],
});
```


```
use qdrant_client::{
Payload, Qdrant,
qdrant::{DocumentBuilder, PointStruct, UpsertPointsBuilder},
};
use std::collections::HashMap;
let client = Qdrant::from_url("<your-qdrant-url>").build()?;
client
.upsert_points(UpsertPointsBuilder::new(
"{collection_name}",
vec![PointStruct::new(
1,
HashMap::from([(
"my-bm25-vector".to_string(),
DocumentBuilder::new("Recipe for baking chocolate chip cookies", "qdrant/bm25")
.build(),
)]),
Payload::default(),
)],
))
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.Document;
import io.qdrant.client.grpc.Points.Image;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;
QdrantClient client =
new QdrantClient(
QdrantGrpcClient.newBuilder("xyz-example.qdrant.io", 6334, true)
.withApiKey("<your-api-key")
.build());
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(
namedVectors(
Map.of(
"my-bm25-vector",
vector(
Document.newBuilder()
.setModel("qdrant/bm25")
.setText("Recipe for baking chocolate chip cookies")
.build()))))
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient(
host: "xyz-example.qdrant.io", port: 6334, https: true, apiKey: "<your-api-key>");
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new Dictionary<string, Vector>
{
["my-bm25-vector"] = new Document()
{
Model = "qdrant/bm25",
Text = "Recipe for baking chocolate chip cookies",
},
},
},
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "xyz-example.qdrant.io",
Port: 6334,
APIKey: "<paste-your-api-key-here>",
UseTLS: true,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(uint64(1)),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"my-bm25-vector": qdrant.NewVectorDocument(&qdrant.Document{
Model: "qdrant/bm25",
Text: "Recipe for baking chocolate chip cookies",
}),
}),
},
},
})
```


Qdrant uses the model to generate the embeddings and store the point with the resulting vector.

Similarly, you can use inference at query time by providing the text or image to query with and the embedding model:

```
POST /collections/{collection_name}/points/query
{
"query": {
"text": "How to bake cookies?",
"model": "qdrant/bm25"
},
"using": "my-bm25-vector"
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True
)
client.query_points(
collection_name="{collection_name}",
query=models.Document(
text="How to bake cookies?",
model="Qdrant/bm25",
),
using="my-bm25-vector",
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: {
text: 'How to bake cookies?',
model: 'qdrant/bm25',
},
using: 'my-bm25-vector',
});
```


```
use qdrant_client::{
Qdrant,
qdrant::{Document, Query, QueryPointsBuilder},
};
let client = Qdrant::from_url("<your-qdrant-url>").build().unwrap();
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(Query::new_nearest(Document {
text: "How to bake cookies?".into(),
model: "qdrant/bm25".into(),
..Default::default()
}))
.using("my-bm25-vector")
.build(),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.Document;
import io.qdrant.client.grpc.Points;
QdrantClient client =
new QdrantClient(
QdrantGrpcClient.newBuilder("xyz-example.qdrant.io", 6334, true)
.withApiKey("<your-api-key")
.build());
client
.queryAsync(
Points.QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(
nearest(
Document.newBuilder()
.setModel("qdrant/bm25")
.setText("How to bake cookies?")
.build()))
.setUsing("my-bm25-vector")
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient(
host: "xyz-example.qdrant.io",
port: 6334,
https: true,
apiKey: "<your-api-key>"
);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new Document() { Model = "qdrant/bm25", Text = "How to bake cookies?" },
usingVector: "my-bm25-vector"
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "xyz-example.qdrant.io",
Port: 6334,
APIKey: "<paste-your-api-key-here>",
UseTLS: true,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "qdrant/bm25",
Text: "How to bake cookies?",
}),
),
Using: qdrant.PtrOf("my-bm25-vector"),
})
```


## Datatypes

Newest versions of embeddings models generate vectors with very large dimensionalities.
With OpenAI’s `text-embedding-3-large`

embedding model, the dimensionality can go up to 3072.

The amount of memory required to store such vectors grows linearly with the dimensionality, so it is important to choose the right datatype for the vectors.

The choice between datatypes is a trade-off between memory consumption and precision of vectors.

Qdrant supports a number of datatypes for both dense and sparse vectors:

**Float32**

This is the default datatype for vectors in Qdrant. It is a 32-bit (4 bytes) floating-point number. The standard OpenAI embedding of 1536 dimensionality will require 6KB of memory to store in Float32.

You don’t need to specify the datatype for vectors in Qdrant, as it is set to Float32 by default.

**Float16**

This is a 16-bit (2 bytes) floating-point number. It is also known as half-precision float. Intuitively, it looks like this:

```
float32 -> float16 delta (float32 - float16).abs
0.79701585 -> 0.796875 delta 0.00014084578
0.7850789 -> 0.78515625 delta 0.00007736683
0.7775044 -> 0.77734375 delta 0.00016063452
0.85776305 -> 0.85791016 delta 0.00014710426
0.6616839 -> 0.6616211 delta 0.000062823296
```


The main advantage of Float16 is that it requires half the memory of Float32, while having virtually no impact on the quality of vector search.

To use Float16, you need to specify the datatype for vectors in the collection configuration:

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 128,
"distance": "Cosine",
"datatype": "float16" // <-- For dense vectors
},
"sparse_vectors": {
"text": {
"index": {
"datatype": "float16" // <-- And for sparse vectors
}
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(
size=128,
distance=models.Distance.COSINE,
datatype=models.Datatype.FLOAT16
),
sparse_vectors_config={
"text": models.SparseVectorParams(
index=models.SparseIndexParams(datatype=models.Datatype.FLOAT16)
),
},
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 128,
distance: "Cosine",
datatype: "float16"
},
sparse_vectors: {
text: {
index: {
datatype: "float16"
}
}
}
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Datatype, Distance, SparseIndexConfigBuilder, SparseVectorParamsBuilder, SparseVectorsConfigBuilder, VectorParamsBuilder
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let mut sparse_vector_config = SparseVectorsConfigBuilder::default();
sparse_vector_config.add_named_vector_params(
"text",
SparseVectorParamsBuilder::default()
.index(SparseIndexConfigBuilder::default().datatype(Datatype::Float32)),
);
let create_collection = CreateCollectionBuilder::new("{collection_name}")
.sparse_vectors_config(sparse_vector_config)
.vectors_config(
VectorParamsBuilder::new(128, Distance::Cosine).datatype(Datatype::Float16),
);
client.create_collection(create_collection).await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Datatype;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.SparseIndexConfig;
import io.qdrant.client.grpc.Collections.SparseVectorConfig;
import io.qdrant.client.grpc.Collections.SparseVectorParams;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(VectorsConfig.newBuilder()
.setParams(VectorParams.newBuilder()
.setSize(128)
.setDistance(Distance.Cosine)
.setDatatype(Datatype.Float16)
.build())
.build())
.setSparseVectorsConfig(
SparseVectorConfig.newBuilder()
.putMap("text", SparseVectorParams.newBuilder()
.setIndex(SparseIndexConfig.newBuilder()
.setDatatype(Datatype.Float16)
.build())
.build()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams {
Size = 128,
Distance = Distance.Cosine,
Datatype = Datatype.Float16
},
sparseVectorsConfig: (
"text",
new SparseVectorParams {
Index = new SparseIndexConfig {
Datatype = Datatype.Float16
}
}
)
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 128,
Distance: qdrant.Distance_Cosine,
Datatype: qdrant.Datatype_Float16.Enum(),
}),
SparseVectorsConfig: qdrant.NewSparseVectorsConfig(
map[string]*qdrant.SparseVectorParams{
"text": {
Index: &qdrant.SparseIndexConfig{
Datatype: qdrant.Datatype_Float16.Enum(),
},
},
}),
})
```


**Uint8**

Another step towards memory optimization is to use the Uint8 datatype for vectors. Unlike Float16, Uint8 is not a floating-point number, but an integer number in the range from 0 to 255.

Not all embeddings models generate vectors in the range from 0 to 255, so you need to be careful when using Uint8 datatype.

In order to convert a number from float range to Uint8 range, you need to apply a process called quantization.

Some embedding providers may provide embeddings in a pre-quantized format.
One of the most notable examples is the [Cohere int8 & binary embeddings](https://cohere.com/blog/int8-binary-embeddings).

For other embeddings, you will need to apply quantization yourself.

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 128,
"distance": "Cosine",
"datatype": "uint8" // <-- For dense vectors
},
"sparse_vectors": {
"text": {
"index": {
"datatype": "uint8" // <-- For sparse vectors
}
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(
size=128, distance=models.Distance.COSINE, datatype=models.Datatype.UINT8
),
sparse_vectors_config={
"text": models.SparseVectorParams(
index=models.SparseIndexParams(datatype=models.Datatype.UINT8)
),
},
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 128,
distance: "Cosine",
datatype: "uint8"
},
sparse_vectors: {
text: {
index: {
datatype: "uint8"
}
}
}
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Datatype, Distance, SparseIndexConfigBuilder,
SparseVectorParamsBuilder, SparseVectorsConfigBuilder, VectorParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let mut sparse_vector_config = SparseVectorsConfigBuilder::default();
sparse_vector_config.add_named_vector_params(
"text",
SparseVectorParamsBuilder::default()
.index(SparseIndexConfigBuilder::default().datatype(Datatype::Uint8)),
);
let create_collection = CreateCollectionBuilder::new("{collection_name}")
.sparse_vectors_config(sparse_vector_config)
.vectors_config(
VectorParamsBuilder::new(128, Distance::Cosine)
.datatype(Datatype::Uint8)
);
client.create_collection(create_collection).await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Datatype;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.SparseIndexConfig;
import io.qdrant.client.grpc.Collections.SparseVectorConfig;
import io.qdrant.client.grpc.Collections.SparseVectorParams;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(VectorsConfig.newBuilder()
.setParams(VectorParams.newBuilder()
.setSize(128)
.setDistance(Distance.Cosine)
.setDatatype(Datatype.Uint8)
.build())
.build())
.setSparseVectorsConfig(
SparseVectorConfig.newBuilder()
.putMap("text", SparseVectorParams.newBuilder()
.setIndex(SparseIndexConfig.newBuilder()
.setDatatype(Datatype.Uint8)
.build())
.build()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams {
Size = 128,
Distance = Distance.Cosine,
Datatype = Datatype.Uint8
},
sparseVectorsConfig: (
"text",
new SparseVectorParams {
Index = new SparseIndexConfig {
Datatype = Datatype.Uint8
}
}
)
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 128,
Distance: qdrant.Distance_Cosine,
Datatype: qdrant.Datatype_Uint8.Enum(),
}),
SparseVectorsConfig: qdrant.NewSparseVectorsConfig(
map[string]*qdrant.SparseVectorParams{
"text": {
Index: &qdrant.SparseIndexConfig{
Datatype: qdrant.Datatype_Uint8.Enum(),
},
},
}),
})
```


## Quantization

Apart from changing the datatype of the original vectors, Qdrant can create quantized representations of vectors alongside the original ones. This quantized representation can be used to quickly select candidates for rescoring with the original vectors or even used directly for search.

Quantization is applied in the background, during the optimization process.

More information about the quantization process can be found in the [Quantization](https://qdrant.tech/documentation/guides/quantization/) section.

## Vector Storage

Depending on the requirements of the application, Qdrant can use one of the data storage options. Keep in mind that you will have to tradeoff between search speed and the size of RAM used.

More information about the storage options can be found in the [Storage](https://qdrant.tech/documentation/concepts/storage/#vector-storage) section.

---

## Source: https://qdrant.tech/documentation/manage-data/payload/

# Payload

One of the significant features of Qdrant is the ability to store additional information along with vectors.
This information is called `payload`

in Qdrant terminology.

Qdrant allows you to store any information that can be represented using JSON.

Here is an example of a typical payload:

```
{
"name": "jacket",
"colors": ["red", "blue"],
"count": 10,
"price": 11.99,
"locations": [
{
"lon": 52.5200,
"lat": 13.4050
}
],
"reviews": [
{
"user": "alice",
"score": 4
},
{
"user": "bob",
"score": 5
}
]
}
```


## Payload types

In addition to storing payloads, Qdrant also allows you search based on certain kinds of values. This feature is implemented as additional filters during the search and will enable you to incorporate custom logic on top of semantic similarity.

During the filtering, Qdrant will check the conditions over those values that match the type of the filtering condition. If the stored value type does not fit the filtering condition - it will be considered not satisfied.

For example, you will get an empty output if you apply the [range condition](https://qdrant.tech/documentation/concepts/filtering/#range) on the string data.

However, arrays (multiple values of the same type) are treated a little bit different. When we apply a filter to an array, it will succeed if at least one of the values inside the array meets the condition.

The filtering process is discussed in detail in the section [Filtering](https://qdrant.tech/documentation/concepts/filtering/).

Let’s look at the data types that Qdrant supports for searching:

### Integer

`integer`

- 64-bit integer in the range from `-9223372036854775808`

to `9223372036854775807`

.

Example of single and multiple `integer`

values:

```
{
"count": 10,
"sizes": [35, 36, 38]
}
```


### Float

`float`

- 64-bit floating point number.

Example of single and multiple `float`

values:

```
{
"price": 11.99,
"ratings": [9.1, 9.2, 9.4]
}
```


### Bool

Bool - binary value. Equals to `true`

or `false`

.

Example of single and multiple `bool`

values:

```
{
"is_delivered": true,
"responses": [false, false, true, false]
}
```


### Keyword

`keyword`

- string value.

Example of single and multiple `keyword`

values:

```
{
"name": "Alice",
"friends": [
"bob",
"eva",
"jack"
]
}
```


### Geo

`geo`

is used to represent geographical coordinates.

Example of single and multiple `geo`

values:

```
{
"location": {
"lon": 52.5200,
"lat": 13.4050
},
"cities": [
{
"lon": 51.5072,
"lat": 0.1276
},
{
"lon": 40.7128,
"lat": 74.0060
}
]
}
```


Coordinate should be described as an object containing two fields: `lon`

- for longitude, and `lat`

- for latitude.

### Datetime

*Available as of v1.8.0*

`datetime`

- date and time in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format.

See the following examples of single and multiple `datetime`

values:

```
{
"created_at": "2023-02-08T10:49:00Z",
"updated_at": [
"2023-02-08T13:52:00Z",
"2023-02-21T21:23:00Z"
]
}
```


The following formats are supported:

`"2023-02-08T10:49:00Z"`

([RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6), UTC)`"2023-02-08T11:49:00+01:00"`

([RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6), with timezone)`"2023-02-08T10:49:00"`

(without timezone, UTC is assumed)`"2023-02-08T10:49"`

(without timezone and seconds)`"2023-02-08"`

(only date, midnight is assumed)

Notes about the format:

`T`

can be replaced with a space.- The
`T`

and`Z`

symbols are case-insensitive. - UTC is always assumed when the timezone is not specified.
- Timezone can have the following formats:
`±HH:MM`

,`±HHMM`

,`±HH`

, or`Z`

. - Seconds can have up to 6 decimals, so the finest granularity for
`datetime`

is microseconds.

### UUID

*Available as of v1.11.0*

In addition to the basic `keyword`

type, Qdrant supports `uuid`

type for storing UUID values.
Functionally, it works the same as `keyword`

, internally stores parsed UUID values.

```
{
"uuid": "550e8400-e29b-41d4-a716-446655440000",
"uuids": [
"550e8400-e29b-41d4-a716-446655440000",
"550e8400-e29b-41d4-a716-446655440001"
]
}
```


String representation of UUID (e.g. `550e8400-e29b-41d4-a716-446655440000`

) occupies 36 bytes.
But when numeric representation is used, it is only 128 bits (16 bytes).

Usage of `uuid`

index type is recommended in payload-heavy collections to save RAM and improve search performance.

## Create point with payload

REST API ([Schema](https://api.qdrant.tech/api-reference/points/upsert-points))

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"vector": [0.05, 0.61, 0.76, 0.74],
"payload": {"city": "Berlin", "price": 1.99}
},
{
"id": 2,
"vector": [0.19, 0.81, 0.75, 0.11],
"payload": {"city": ["Berlin", "London"], "price": 1.99}
},
{
"id": 3,
"vector": [0.36, 0.55, 0.47, 0.94],
"payload": {"city": ["Berlin", "Moscow"], "price": [1.99, 2.99]}
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
vector=[0.05, 0.61, 0.76, 0.74],
payload={
"city": "Berlin",
"price": 1.99,
},
),
models.PointStruct(
id=2,
vector=[0.19, 0.81, 0.75, 0.11],
payload={
"city": ["Berlin", "London"],
"price": 1.99,
},
),
models.PointStruct(
id=3,
vector=[0.36, 0.55, 0.47, 0.94],
payload={
"city": ["Berlin", "Moscow"],
"price": [1.99, 2.99],
},
),
],
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.upsert("{collection_name}", {
points: [
{
id: 1,
vector: [0.05, 0.61, 0.76, 0.74],
payload: {
city: "Berlin",
price: 1.99,
},
},
{
id: 2,
vector: [0.19, 0.81, 0.75, 0.11],
payload: {
city: ["Berlin", "London"],
price: 1.99,
},
},
{
id: 3,
vector: [0.36, 0.55, 0.47, 0.94],
payload: {
city: ["Berlin", "Moscow"],
price: [1.99, 2.99],
},
},
],
});
```


```
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder};
use qdrant_client::{Payload, Qdrant};
use serde_json::json;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let points = vec![
PointStruct::new(
1,
vec![0.05, 0.61, 0.76, 0.74],
Payload::try_from(json!({"city": "Berlin", "price": 1.99})).unwrap(),
),
PointStruct::new(
2,
vec![0.19, 0.81, 0.75, 0.11],
Payload::try_from(json!({"city": ["Berlin", "London"]})).unwrap(),
),
PointStruct::new(
3,
vec![0.36, 0.55, 0.47, 0.94],
Payload::try_from(json!({"city": ["Berlin", "Moscow"], "price": [1.99, 2.99]}))
.unwrap(),
),
];
client
.upsert_points(UpsertPointsBuilder::new("{collection_name}", points).wait(true))
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.list;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(vectors(0.05f, 0.61f, 0.76f, 0.74f))
.putAllPayload(Map.of("city", value("Berlin"), "price", value(1.99)))
.build(),
PointStruct.newBuilder()
.setId(id(2))
.setVectors(vectors(0.19f, 0.81f, 0.75f, 0.11f))
.putAllPayload(
Map.of("city", list(List.of(value("Berlin"), value("London")))))
.build(),
PointStruct.newBuilder()
.setId(id(3))
.setVectors(vectors(0.36f, 0.55f, 0.47f, 0.94f))
.putAllPayload(
Map.of(
"city",
list(List.of(value("Berlin"), value("London"))),
"price",
list(List.of(value(1.99), value(2.99)))))
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new PointStruct
{
Id = 1,
Vectors = new[] { 0.05f, 0.61f, 0.76f, 0.74f },
Payload = { ["city"] = "Berlin", ["price"] = 1.99 }
},
new PointStruct
{
Id = 2,
Vectors = new[] { 0.19f, 0.81f, 0.75f, 0.11f },
Payload = { ["city"] = new[] { "Berlin", "London" } }
},
new PointStruct
{
Id = 3,
Vectors = new[] { 0.36f, 0.55f, 0.47f, 0.94f },
Payload =
{
["city"] = new[] { "Berlin", "Moscow" },
["price"] = new Value[] { 1.99, 2.99 }
}
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectors(0.05, 0.61, 0.76, 0.74),
Payload: qdrant.NewValueMap(map[string]any{
"city": "Berlin", "price": 1.99}),
},
{
Id: qdrant.NewIDNum(2),
Vectors: qdrant.NewVectors(0.19, 0.81, 0.75, 0.11),
Payload: qdrant.NewValueMap(map[string]any{
"city": []any{"Berlin", "London"}}),
},
{
Id: qdrant.NewIDNum(3),
Vectors: qdrant.NewVectors(0.36, 0.55, 0.47, 0.94),
Payload: qdrant.NewValueMap(map[string]any{
"city": []any{"Berlin", "London"},
"price": []any{1.99, 2.99}}),
},
},
})
```


## Update payload

Updating payloads in Qdrant offers flexible methods to manage vector metadata. The **set payload** method updates specific fields while keeping others unchanged, while the **overwrite** method replaces the entire payload. Developers can also use **clear payload** to remove all metadata or delete fields to remove specific keys without affecting the rest. These options provide precise control for adapting to dynamic datasets.

### Set payload

Set only the given payload values on a point.

REST API ([Schema](https://api.qdrant.tech/api-reference/points/set-payload)):

```
POST /collections/{collection_name}/points/payload
{
"payload": {
"property1": "string",
"property2": "string"
},
"points": [
0, 3, 100
]
}
```


```
client.set_payload(
collection_name="{collection_name}",
payload={
"property1": "string",
"property2": "string",
},
points=[0, 3, 10],
)
```


```
client.setPayload("{collection_name}", {
payload: {
property1: "string",
property2: "string",
},
points: [0, 3, 10],
});
```


```
use qdrant_client::qdrant::{
PointsIdsList, SetPayloadPointsBuilder,
};
use qdrant_client::Payload;
use serde_json::json;
client
.set_payload(
SetPayloadPointsBuilder::new(
"{collection_name}",
Payload::try_from(json!({
"property1": "string",
"property2": "string",
}))
.unwrap(),
)
.points_selector(PointsIdsList {
ids: vec![0.into(), 3.into(), 10.into()],
})
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import java.util.List;
import java.util.Map;
client
.setPayloadAsync(
"{collection_name}",
Map.of("property1", value("string"), "property2", value("string")),
List.of(id(0), id(3), id(10)),
true,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.SetPayloadAsync(
collectionName: "{collection_name}",
payload: new Dictionary<string, Value> { { "property1", "string" }, { "property2", "string" } },
ids: new ulong[] { 0, 3, 10 }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.SetPayload(context.Background(), &qdrant.SetPayloadPoints{
CollectionName: "{collection_name}",
Payload: qdrant.NewValueMap(
map[string]any{"property1": "string", "property2": "string"}),
PointsSelector: qdrant.NewPointsSelector(
qdrant.NewIDNum(0),
qdrant.NewIDNum(3)),
})
```


You don’t need to know the ids of the points you want to modify. The alternative is to use filters.

```
POST /collections/{collection_name}/points/payload
{
"payload": {
"property1": "string",
"property2": "string"
},
"filter": {
"must": [
{
"key": "color",
"match": {
"value": "red"
}
}
]
}
}
```


```
client.set_payload(
collection_name="{collection_name}",
payload={
"property1": "string",
"property2": "string",
},
points=models.Filter(
must=[
models.FieldCondition(
key="color",
match=models.MatchValue(value="red"),
),
],
),
)
```


```
client.setPayload("{collection_name}", {
payload: {
property1: "string",
property2: "string",
},
filter: {
must: [
{
key: "color",
match: {
value: "red",
},
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, SetPayloadPointsBuilder};
use qdrant_client::Payload;
use serde_json::json;
client
.set_payload(
SetPayloadPointsBuilder::new(
"{collection_name}",
Payload::try_from(json!({
"property1": "string",
"property2": "string",
}))
.unwrap(),
)
.points_selector(Filter::must([Condition::matches(
"color",
"red".to_string(),
)]))
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.ValueFactory.value;
import io.qdrant.client.grpc.Common.Filter;
import java.util.Map;
client
.setPayloadAsync(
"{collection_name}",
Map.of("property1", value("string"), "property2", value("string")),
Filter.newBuilder().addMust(matchKeyword("color", "red")).build(),
true,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.SetPayloadAsync(
collectionName: "{collection_name}",
payload: new Dictionary<string, Value> { { "property1", "string" }, { "property2", "string" } },
filter: MatchKeyword("color", "red")
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.SetPayload(context.Background(), &qdrant.SetPayloadPoints{
CollectionName: "{collection_name}",
Payload: qdrant.NewValueMap(
map[string]any{"property1": "string", "property2": "string"}),
PointsSelector: qdrant.NewPointsSelectorFilter(&qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("color", "red"),
},
}),
})
```


*Available as of v1.8.0*

It is possible to modify only a specific key of the payload by using the `key`

parameter.

For instance, given the following payload JSON object on a point:

```
{
"property1": {
"nested_property": "foo",
},
"property2": {
"nested_property": "bar",
}
}
```


You can modify the `nested_property`

of `property1`

with the following request:

```
POST /collections/{collection_name}/points/payload
{
"payload": {
"nested_property": "qux",
},
"key": "property1",
"points": [1]
}
```


Resulting in the following payload:

```
{
"property1": {
"nested_property": "qux",
},
"property2": {
"nested_property": "bar",
}
}
```


### Overwrite payload

Fully replace any existing payload with the given one.

REST API ([Schema](https://api.qdrant.tech/api-reference/points/overwrite-payload)):

```
PUT /collections/{collection_name}/points/payload
{
"payload": {
"property1": "string",
"property2": "string"
},
"points": [
0, 3, 100
]
}
```


```
client.overwrite_payload(
collection_name="{collection_name}",
payload={
"property1": "string",
"property2": "string",
},
points=[0, 3, 10],
)
```


```
client.overwritePayload("{collection_name}", {
payload: {
property1: "string",
property2: "string",
},
points: [0, 3, 10],
});
```


```
use qdrant_client::qdrant::{PointsIdsList, SetPayloadPointsBuilder};
use qdrant_client::Payload;
use serde_json::json;
client
.overwrite_payload(
SetPayloadPointsBuilder::new(
"{collection_name}",
Payload::try_from(json!({
"property1": "string",
"property2": "string",
}))
.unwrap(),
)
.points_selector(PointsIdsList {
ids: vec![0.into(), 3.into(), 10.into()],
})
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import java.util.List;
import java.util.Map;
client
.overwritePayloadAsync(
"{collection_name}",
Map.of("property1", value("string"), "property2", value("string")),
List.of(id(0), id(3), id(10)),
true,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.OverwritePayloadAsync(
collectionName: "{collection_name}",
payload: new Dictionary<string, Value> { { "property1", "string" }, { "property2", "string" } },
ids: new ulong[] { 0, 3, 10 }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.OverwritePayload(context.Background(), &qdrant.SetPayloadPoints{
CollectionName: "{collection_name}",
Payload: qdrant.NewValueMap(
map[string]any{"property1": "string", "property2": "string"}),
PointsSelector: qdrant.NewPointsSelector(
qdrant.NewIDNum(0),
qdrant.NewIDNum(3)),
})
```


Like [set payload](#set-payload), you don’t need to know the ids of the points
you want to modify. The alternative is to use filters.

### Clear payload

This method removes all payload keys from specified points

REST API ([Schema](https://api.qdrant.tech/api-reference/points/clear-payload)):

```
POST /collections/{collection_name}/points/payload/clear
{
"points": [0, 3, 100]
}
```


```
client.clear_payload(
collection_name="{collection_name}",
points_selector=[0, 3, 100],
)
```


```
client.clearPayload("{collection_name}", {
points: [0, 3, 100],
});
```


```
use qdrant_client::qdrant::{ClearPayloadPointsBuilder, PointsIdsList};
client
.clear_payload(
ClearPayloadPointsBuilder::new("{collection_name}")
.points(PointsIdsList {
ids: vec![0.into(), 3.into(), 10.into()],
})
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import java.util.List;
client
.clearPayloadAsync("{collection_name}", List.of(id(0), id(3), id(100)), true, null, null)
.get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.ClearPayloadAsync(collectionName: "{collection_name}", ids: new ulong[] { 0, 3, 100 });
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client.ClearPayload(context.Background(), &qdrant.ClearPayloadPoints{
CollectionName: "{collection_name}",
Points: qdrant.NewPointsSelector(
qdrant.NewIDNum(0),
qdrant.NewIDNum(3)),
})
```


### Delete payload keys

Delete specific payload keys from points.

REST API ([Schema](https://api.qdrant.tech/api-reference/points/delete-payload)):

```
POST /collections/{collection_name}/points/payload/delete
{
"keys": ["color", "price"],
"points": [0, 3, 100]
}
```


```
client.delete_payload(
collection_name="{collection_name}",
keys=["color", "price"],
points=[0, 3, 100],
)
```


```
client.deletePayload("{collection_name}", {
keys: ["color", "price"],
points: [0, 3, 100],
});
```


```
use qdrant_client::qdrant::{DeletePayloadPointsBuilder, PointsIdsList};
client
.delete_payload(
DeletePayloadPointsBuilder::new(
"{collection_name}",
vec!["color".to_string(), "price".to_string()],
)
.points_selector(PointsIdsList {
ids: vec![0.into(), 3.into(), 10.into()],
})
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import java.util.List;
client
.deletePayloadAsync(
"{collection_name}",
List.of("color", "price"),
List.of(id(0), id(3), id(100)),
true,
null,
null)
.get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.DeletePayloadAsync(
collectionName: "{collection_name}",
keys: ["color", "price"],
ids: new ulong[] { 0, 3, 100 }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.DeletePayload(context.Background(), &qdrant.DeletePayloadPoints{
CollectionName: "{collection_name}",
Keys: []string{"color", "price"},
PointsSelector: qdrant.NewPointsSelector(
qdrant.NewIDNum(0),
qdrant.NewIDNum(3)),
})
```


Alternatively, you can use filters to delete payload keys from the points.

```
POST /collections/{collection_name}/points/payload/delete
{
"keys": ["color", "price"],
"filter": {
"must": [
{
"key": "color",
"match": {
"value": "red"
}
}
]
}
}
```


```
client.delete_payload(
collection_name="{collection_name}",
keys=["color", "price"],
points=models.Filter(
must=[
models.FieldCondition(
key="color",
match=models.MatchValue(value="red"),
),
],
),
)
```


```
client.deletePayload("{collection_name}", {
keys: ["color", "price"],
filter: {
must: [
{
key: "color",
match: {
value: "red",
},
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, DeletePayloadPointsBuilder, Filter};
client
.delete_payload(
DeletePayloadPointsBuilder::new(
"{collection_name}",
vec!["color".to_string(), "price".to_string()],
)
.points_selector(Filter::must([Condition::matches(
"color",
"red".to_string(),
)]))
.wait(true),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.grpc.Common.Filter;
import java.util.List;
client
.deletePayloadAsync(
"{collection_name}",
List.of("color", "price"),
Filter.newBuilder().addMust(matchKeyword("color", "red")).build(),
true,
null,
null)
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.DeletePayloadAsync(
collectionName: "{collection_name}",
keys: ["color", "price"],
filter: MatchKeyword("color", "red")
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.DeletePayload(context.Background(), &qdrant.DeletePayloadPoints{
CollectionName: "{collection_name}",
Keys: []string{"color", "price"},
PointsSelector: qdrant.NewPointsSelectorFilter(
&qdrant.Filter{
Must: []*qdrant.Condition{qdrant.NewMatch("color", "red")},
},
),
})
```


## Payload indexing

To search more efficiently with filters, Qdrant allows you to create indexes for payload fields by specifying the name and type of field it is intended to be.

The indexed fields also affect the vector index. See [Indexing](https://qdrant.tech/documentation/concepts/indexing/) for details.

In practice, we recommend creating an index on those fields that could potentially constrain the results the most. For example, using an index for the object ID will be much more efficient, being unique for each record, than an index by its color, which has only a few possible values.

In compound queries involving multiple fields, Qdrant will attempt to use the most restrictive index first.

To create index for the field, you can use the following:

REST API ([Schema](https://api.qdrant.tech/api-reference/indexes/create-field-index))

```
PUT /collections/{collection_name}/index
{
"field_name": "name_of_the_field_to_index",
"field_schema": "keyword"
}
```


```
client.create_payload_index(
collection_name="{collection_name}",
field_name="name_of_the_field_to_index",
field_schema=models.PayloadSchemaType.KEYWORD,
)
```


```
client.createPayloadIndex("{collection_name}", {
field_name: "name_of_the_field_to_index",
field_schema: "keyword",
});
```


```
use qdrant_client::qdrant::{CreateFieldIndexCollectionBuilder, FieldType};
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"name_of_the_field_to_index",
FieldType::Keyword,
)
.wait(true),
)
.await?;
```


```
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
client.createPayloadIndexAsync(
"{collection_name}",
"name_of_the_field_to_index",
PayloadSchemaType.Keyword,
null,
true,
null,
null);
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "name_of_the_field_to_index"
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeKeyword.Enum(),
})
```


The index usage flag is displayed in the payload schema with the [collection info API](https://api.qdrant.tech/api-reference/collections/get-collection).

Payload schema example:

```
{
"payload_schema": {
"property1": {
"data_type": "keyword"
},
"property2": {
"data_type": "integer"
}
}
}
```


## Facet counts

*Available as of v1.12.0*

Faceting is a special counting technique that can be used for various purposes:

- Know which unique values exist for a payload key.
- Know the number of points that contain each unique value.
- Know how restrictive a filter would become by matching a specific value.

Specifically, it is a counting aggregation for the values in a field, akin to a `GROUP BY`

with `COUNT(*)`

commands in SQL.

These results for a specific field is called a “facet”. For example, when you look at an e-commerce search results page, you might see a list of brands on the sidebar, showing the number of products for each brand. This would be a facet for a `"brand"`

field.

To get the facet counts for a field, you can use the following:

REST API ([Facet](https://api.qdrant.tech/v-1-13-x/api-reference/points/facet))

```
POST /collections/{collection_name}/facet
{
"key": "size",
"filter": {
"must": {
"key": "color",
"match": { "value": "red" }
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.facet(
collection_name="{collection_name}",
key="size",
facet_filter=models.Filter(
must=[
models.FieldCondition(
key="color",
match=models.MatchValue(value="red"),
)
]
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.facet("{collection_name}", {
filter: {
must: [
{
key: "color",
match: {
value: "red",
},
},
],
},
key: "size",
});
```


```
use qdrant_client::qdrant::{Condition, FacetCountsBuilder, Filter};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.facet(
FacetCountsBuilder::new("{collection_name}", "size")
.limit(10)
.filter(Filter::must(vec![Condition::matches(
"color",
"red".to_string(),
)])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points;
QdrantClient client = new QdrantClient(
QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.facetAsync(
Points.FacetCounts.newBuilder()
.setCollectionName("{collection_name}")
.setKey("size")
.setFilter(Filter.newBuilder().addMust(matchKeyword("color", "red")).build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.FacetAsync(
"{collection_name}",
key: "size",
filter: MatchKeyword("color", "red")
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
res, err := client.Facet(context.Background(), &qdrant.FacetCounts{
CollectionName: "{collection_name}",
Key: "size",
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("color", "red"),
},
},
})
```


The response will contain the counts for each unique value in the field:

```
{
"response": {
"hits": [
{"value": "L", "count": 19},
{"value": "S", "count": 10},
{"value": "M", "count": 5},
{"value": "XL", "count": 1},
{"value": "XXL", "count": 1}
]
},
"time": 0.0001
}
```


The results are sorted by the count in descending order, then by the value in ascending order. Only values with non-zero counts will be returned.

By default, the way Qdrant the counts for each value is approximate to achieve fast results. This should accurate enough for most cases, but if you need to debug your storage, you can use the `exact`

parameter to get exact counts.

```
POST /collections/{collection_name}/facet
{
"key": "size",
"exact": true
}
```


```
client.facet(
collection_name="{collection_name}",
key="size",
exact=True,
)
```


```
client.facet("{collection_name}", {
key: "size",
exact: true,
});
```


```
use qdrant_client::qdrant::FacetCountsBuilder;
client
.facet(
FacetCountsBuilder::new("{collection_name}", "size")
.limit(10)
.exact(true),
)
.await?;
```


```
import io.qdrant.client.grpc.Points.FacetCounts;
client
.facetAsync(
FacetCounts.newBuilder()
.setCollectionName("{collection_name}")
.setKey("foo")
.setExact(true)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.FacetAsync(
"{collection_name}",
key: "size",
exact: true
);
```


```
res, err := client.Facet(context.Background(), &qdrant.FacetCounts{
CollectionName: "{collection_name}",
Key: "key",
Exact: qdrant.PtrOf(true),
})
```

---

## Source: https://qdrant.tech/documentation/manage-data/collections/

# Collections

A collection is a named set of points (vectors with a payload) among which you can search. The vector of each point within the same collection must have the same dimensionality and be compared by a single metric. [Named vectors](#collection-with-multiple-vectors) can be used to have multiple vectors in a single point, each of which can have their own dimensionality and metric requirements.

Distance metrics are used to measure similarities among vectors. The choice of metric depends on the way vectors obtaining and, in particular, on the method of neural network encoder training.

Qdrant supports these most popular types of metrics:

- Dot product:
`Dot`

-[[wiki]](https://en.wikipedia.org/wiki/Dot_product) - Cosine similarity:
`Cosine`

-[[wiki]](https://en.wikipedia.org/wiki/Cosine_similarity) - Euclidean distance:
`Euclid`

-[[wiki]](https://en.wikipedia.org/wiki/Euclidean_distance) - Manhattan distance:
`Manhattan`

-[[wiki]](https://en.wikipedia.org/wiki/Taxicab_geometry)

In addition to metrics and vector size, each collection uses its own set of parameters that controls collection optimization, index construction, and vacuum. These settings can be changed at any time by a corresponding request.

## Setting up multitenancy

**How many collections should you create?** In most cases, you should only use a single collection with payload-based partitioning. This approach is called [multitenancy](https://en.wikipedia.org/wiki/Multitenancy). It is efficient for most of users, but it requires additional configuration. [Learn how to set it up](https://qdrant.tech/documentation/tutorials/multiple-partitions/)

**When should you create multiple collections?** When you have a limited number of users and you need isolation. This approach is flexible, but it may be more costly, since creating numerous collections may result in resource overhead. Also, you need to ensure that they do not affect each other in any way, including performance-wise.

## Create a collection

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 300,
"distance": "Cosine"
}
}
```


```
curl -X PUT http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"vectors": {
"size": 100,
"distance": "Cosine"
}
}'
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(size=100, distance=models.Distance.COSINE),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: { size: 100, distance: "Cosine" },
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, VectorParamsBuilder, Distance};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(100, Distance::Cosine)),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.VectorParams;
QdrantClient client = new QdrantClient(
QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.createCollectionAsync("{collection_name}",
VectorParams.newBuilder().setDistance(Distance.Cosine).setSize(100).build()).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 100, Distance = Distance.Cosine }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 100,
Distance: qdrant.Distance_Cosine,
}),
})
```


In addition to the required options, you can also specify custom values for the following collection options:

`hnsw_config`

- see[indexing](https://qdrant.tech/documentation/concepts/indexing/#vector-index)for details.`wal_config`

- Write-Ahead-Log related configuration. See more details about[WAL](https://qdrant.tech/documentation/concepts/storage/#versioning)`optimizers_config`

- see[optimizer](https://qdrant.tech/documentation/concepts/optimizer/)for details.`shard_number`

- which defines how many shards the collection should have. See[distributed deployment](https://qdrant.tech/documentation/guides/distributed_deployment/#sharding)section for details.`on_disk_payload`

- defines where to store payload data. If`true`

- payload will be stored on disk only. Might be useful for limiting the RAM usage in case of large payload.`quantization_config`

- see[quantization](https://qdrant.tech/documentation/guides/quantization/#setting-up-quantization-in-qdrant)for details.`strict_mode_config`

- see[strict mode](https://qdrant.tech/documentation/guides/administration/#strict-mode)for details.

Default parameters for the optional collection parameters are defined in [configuration file](https://github.com/qdrant/qdrant/blob/master/config/config.yaml).

See [schema definitions](https://api.qdrant.tech/api-reference/collections/create-collection) and a [configuration file](https://github.com/qdrant/qdrant/blob/master/config/config.yaml) for more information about collection and vector parameters.

*Available as of v1.2.0*

Vectors all live in RAM for very quick access. The `on_disk`

parameter can be
set in the vector configuration. If true, all vectors will live on disk. This
will enable the use of
[memmaps](https://qdrant.tech/documentation/concepts/storage/#configuring-memmap-storage),
which is suitable for ingesting a large amount of data.

### Collection with multiple vectors

*Available as of v0.10.0*

It is possible to have multiple vectors per record. This feature allows for multiple vector storages per collection. To distinguish vectors in one record, they should have a unique name defined when creating the collection. Each named vector in this mode has its distance and size:

```
PUT /collections/{collection_name}
{
"vectors": {
"image": {
"size": 4,
"distance": "Dot"
},
"text": {
"size": 8,
"distance": "Cosine"
}
}
}
```


```
curl -X PUT http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"vectors": {
"image": {
"size": 4,
"distance": "Dot"
},
"text": {
"size": 8,
"distance": "Cosine"
}
}
}'
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config={
"image": models.VectorParams(size=4, distance=models.Distance.DOT),
"text": models.VectorParams(size=8, distance=models.Distance.COSINE),
},
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
image: { size: 4, distance: "Dot" },
text: { size: 8, distance: "Cosine" },
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, VectorParamsBuilder, VectorsConfigBuilder,
};
let client = Qdrant::from_url("http://localhost:6334").build()?;
let mut vectors_config = VectorsConfigBuilder::default();
vectors_config
.add_named_vector_params("image", VectorParamsBuilder::new(4, Distance::Dot).build());
vectors_config.add_named_vector_params(
"text",
VectorParamsBuilder::new(8, Distance::Cosine).build(),
);
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}").vectors_config(vectors_config),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.VectorParams;
import java.util.Map;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
"{collection_name}",
Map.of(
"image", VectorParams.newBuilder().setSize(4).setDistance(Distance.Dot).build(),
"text",
VectorParams.newBuilder().setSize(8).setDistance(Distance.Cosine).build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParamsMap
{
Map =
{
["image"] = new VectorParams { Size = 4, Distance = Distance.Dot },
["text"] = new VectorParams { Size = 8, Distance = Distance.Cosine },
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfigMap(
map[string]*qdrant.VectorParams{
"image": {
Size: 4,
Distance: qdrant.Distance_Dot,
},
"text": {
Size: 8,
Distance: qdrant.Distance_Cosine,
},
}),
})
```


For rare use cases, it is possible to create a collection without any vector storage.

*Available as of v1.1.1*

For each named vector you can optionally specify
[ hnsw_config](https://qdrant.tech/documentation/concepts/indexing/#vector-index) or

[to deviate from the collection configuration. This can be useful to fine-tune search performance on a vector level.](https://qdrant.tech/documentation/guides/quantization/#setting-up-quantization-in-qdrant)

`quantization_config`

*Available as of v1.2.0*

Vectors all live in RAM for very quick access. On a per-vector basis you can set
`on_disk`

to true to store all vectors on disk at all times. This will enable
the use of
[memmaps](https://qdrant.tech/documentation/concepts/storage/#configuring-memmap-storage),
which is suitable for ingesting a large amount of data.

### Vector datatypes

*Available as of v1.9.0*

Some embedding providers may provide embeddings in a pre-quantized format.
One of the most notable examples is the [Cohere int8 & binary embeddings](https://cohere.com/blog/int8-binary-embeddings).
Qdrant has direct support for uint8 embeddings, which you can also use in combination with binary quantization.

To create a collection with uint8 embeddings, you can use the following configuration:

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 1024,
"distance": "Cosine",
"datatype": "uint8"
}
}
```


```
curl -X PUT http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"vectors": {
"size": 1024,
"distance": "Cosine",
"datatype": "uint8"
}
}'
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(
size=1024,
distance=models.Distance.COSINE,
datatype=models.Datatype.UINT8,
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
image: { size: 1024, distance: "Cosine", datatype: "uint8" },
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
CreateCollectionBuilder, Datatype, Distance, VectorParamsBuilder,
};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}").vectors_config(
VectorParamsBuilder::new(1024, Distance::Cosine).datatype(Datatype::Uint8),
),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.Datatype;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.VectorParams;
QdrantClient client = new QdrantClient(
QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync("{collection_name}",
VectorParams.newBuilder()
.setSize(1024)
.setDistance(Distance.Cosine)
.setDatatype(Datatype.Uint8)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams {
Size = 1024, Distance = Distance.Cosine, Datatype = Datatype.Uint8
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 1024,
Distance: qdrant.Distance_Cosine,
Datatype: qdrant.Datatype_Uint8.Enum(),
}),
})
```


Vectors with `uint8`

datatype are stored in a more compact format, which can save memory and improve search speed at the cost of some precision.
If you choose to use the `uint8`

datatype, elements of the vector will be stored as unsigned 8-bit integers, which can take values **from 0 to 255**.

### Collection with sparse vectors

*Available as of v1.7.0*

Qdrant supports sparse vectors as a first-class citizen.

Sparse vectors are useful for text search, where each word is represented as a separate dimension.

Collections can contain sparse vectors as additional [named vectors](#collection-with-multiple-vectors) along side regular dense vectors in a single point.

Unlike dense vectors, sparse vectors must be named. And additionally, sparse vectors and dense vectors must have different names within a collection.

```
PUT /collections/{collection_name}
{
"sparse_vectors": {
"text": { }
}
}
```


```
curl -X PUT http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"sparse_vectors": {
"text": { }
}
}'
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config={},
sparse_vectors_config={
"text": models.SparseVectorParams(),
},
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
sparse_vectors: {
text: { },
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
CreateCollectionBuilder, SparseVectorParamsBuilder, SparseVectorsConfigBuilder,
};
let client = Qdrant::from_url("http://localhost:6334").build()?;
let mut sparse_vector_config = SparseVectorsConfigBuilder::default();
sparse_vector_config.add_named_vector_params("text", SparseVectorParamsBuilder::default());
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.sparse_vectors_config(sparse_vector_config),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.SparseVectorConfig;
import io.qdrant.client.grpc.Collections.SparseVectorParams;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setSparseVectorsConfig(
SparseVectorConfig.newBuilder()
.putMap("text", SparseVectorParams.getDefaultInstance()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
sparseVectorsConfig: ("text", new SparseVectorParams())
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
SparseVectorsConfig: qdrant.NewSparseVectorsConfig(
map[string]*qdrant.SparseVectorParams{
"text": {},
}),
})
```


Outside of a unique name, there are no required configuration parameters for sparse vectors.

The distance function for sparse vectors is always `Dot`

and does not need to be specified.

However, there are optional parameters to tune the underlying [sparse vector index](https://qdrant.tech/documentation/concepts/indexing/#sparse-vector-index).

### Create collection from another collection

To create a collection from another collection, use the [Migration Tool](https://github.com/qdrant/migration/). You can use it to either copy a collection within the same Qdrant instance or to copy a collection to another instance.

For example, to copy a collection from a local instance to a Qdrant Cloud instance, run the following command:

```
docker run --net=host --rm -it registry.cloud.qdrant.io/library/qdrant-migration qdrant \
--source.url 'http://localhost:6334' \
--source.collection 'source-collection' \
--target.url 'https://example.cloud-region.cloud-provider.cloud.qdrant.io:6334' \
--target.api-key 'qdrant-key' \
--target.collection 'target-collection' \
--migration.batch-size 64
```


## Check collection existence

*Available as of v1.8.0*

```
GET http://localhost:6333/collections/{collection_name}/exists
```


```
curl -X GET http://localhost:6333/collections/{collection_name}/exists
```


```
client.collection_exists(collection_name="{collection_name}")
```


```
client.collectionExists("{collection_name}");
```


```
client.collection_exists("{collection_name}").await?;
```


```
client.collectionExistsAsync("{collection_name}").get();
```


```
await client.CollectionExistsAsync("{collection_name}");
```


```
import "context"
client.CollectionExists(context.Background(), "my_collection")
```


## Delete collection

```
DELETE http://localhost:6333/collections/{collection_name}
```


```
curl -X DELETE http://localhost:6333/collections/{collection_name}
```


```
client.delete_collection(collection_name="{collection_name}")
```


```
client.deleteCollection("{collection_name}");
```


```
client.delete_collection("{collection_name}").await?;
```


```
client.deleteCollectionAsync("{collection_name}").get();
```


```
await client.DeleteCollectionAsync("{collection_name}");
```


```
import "context"
client.DeleteCollection(context.Background(), "{collection_name}")
```


## Update collection parameters

Dynamic parameter updates may be helpful, for example, for more efficient initial loading of vectors. For example, you can disable indexing during the upload process, and enable it immediately after the upload is finished. As a result, you will not waste extra computation resources on rebuilding the index.

The following command enables indexing for segments that have more than 10000 kB of vectors stored:

```
PATCH /collections/{collection_name}
{
"optimizers_config": {
"indexing_threshold": 10000
}
}
```


```
curl -X PATCH http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"optimizers_config": {
"indexing_threshold": 10000
}
}'
```


```
client.update_collection(
collection_name="{collection_name}",
optimizers_config=models.OptimizersConfigDiff(indexing_threshold=10000),
)
```


```
client.updateCollection("{collection_name}", {
optimizers_config: {
indexing_threshold: 10000,
},
});
```


```
use qdrant_client::qdrant::{OptimizersConfigDiffBuilder, UpdateCollectionBuilder};
client
.update_collection(
UpdateCollectionBuilder::new("{collection_name}").optimizers_config(
OptimizersConfigDiffBuilder::default().indexing_threshold(10000),
),
)
.await?;
```


```
import io.qdrant.client.grpc.Collections.OptimizersConfigDiff;
import io.qdrant.client.grpc.Collections.UpdateCollection;
client
.updateCollectionAsync(
UpdateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setOptimizersConfig(
OptimizersConfigDiff.newBuilder().setIndexingThreshold(10000).build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpdateCollectionAsync(
collectionName: "{collection_name}",
optimizersConfig: new OptimizersConfigDiff { IndexingThreshold = 10000 }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.UpdateCollection(context.Background(), &qdrant.UpdateCollection{
CollectionName: "{collection_name}",
OptimizersConfig: &qdrant.OptimizersConfigDiff{
IndexingThreshold: qdrant.PtrOf(uint64(10000)),
},
})
```


The following parameters can be updated:

`optimizers_config`

- see[optimizer](https://qdrant.tech/documentation/concepts/optimizer/)for details.`hnsw_config`

- see[indexing](https://qdrant.tech/documentation/concepts/indexing/#vector-index)for details.`quantization_config`

- see[quantization](https://qdrant.tech/documentation/guides/quantization/#setting-up-quantization-in-qdrant)for details.`vectors_config`

- vector-specific configuration, including individual`hnsw_config`

,`quantization_config`

and`on_disk`

settings.`params`

- other collection parameters, including`read_fan_out_delay_ms`

,`write_consistency_factor`

and`on_disk_payload`

.`strict_mode_config`

- see[strict mode](https://qdrant.tech/documentation/guides/administration/#strict-mode)for details.

Full API specification is available in [schema definitions](https://api.qdrant.tech/api-reference/collections/update-collection).

Calls to this endpoint may be blocking as it waits for existing optimizers to finish. We recommended against using this in a production database as it may introduce huge overhead due to the rebuilding of the index.

#### Update vector parameters

*Available as of v1.4.0*

Qdrant 1.4 adds support for updating more collection parameters at runtime. HNSW index, quantization and disk configurations can now be changed without recreating a collection. Segments (with index and quantized data) will automatically be rebuilt in the background to match updated parameters.

To put vector data on disk for a collection that **does not have** named vectors,
use `""`

as name:

```
PATCH /collections/{collection_name}
{
"vectors": {
"": {
"on_disk": true
}
}
}
```


```
curl -X PATCH http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"vectors": {
"": {
"on_disk": true
}
}
}'
```


To put vector data on disk for a collection that **does have** named vectors:

Note: To create a vector name, follow the procedure from our [Points](https://qdrant.tech/documentation/concepts/points/#create-vector-name).

```
PATCH /collections/{collection_name}
{
"vectors": {
"my_vector": {
"on_disk": true
}
}
}
```


```
curl -X PATCH http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"vectors": {
"my_vector": {
"on_disk": true
}
}
}'
```


In the following example the HNSW index and quantization parameters are updated,
both for the whole collection, and for `my_vector`

specifically:

```
PATCH /collections/{collection_name}
{
"vectors": {
"my_vector": {
"hnsw_config": {
"m": 32,
"ef_construct": 123
},
"quantization_config": {
"product": {
"compression": "x32",
"always_ram": true
}
},
"on_disk": true
}
},
"hnsw_config": {
"ef_construct": 123
},
"quantization_config": {
"scalar": {
"type": "int8",
"quantile": 0.8,
"always_ram": false
}
}
}
```


```
curl -X PATCH http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"vectors": {
"my_vector": {
"hnsw_config": {
"m": 32,
"ef_construct": 123
},
"quantization_config": {
"product": {
"compression": "x32",
"always_ram": true
}
},
"on_disk": true
}
},
"hnsw_config": {
"ef_construct": 123
},
"quantization_config": {
"scalar": {
"type": "int8",
"quantile": 0.8,
"always_ram": false
}
}
}'
```


```
client.update_collection(
collection_name="{collection_name}",
vectors_config={
"my_vector": models.VectorParamsDiff(
hnsw_config=models.HnswConfigDiff(
m=32,
ef_construct=123,
),
quantization_config=models.ProductQuantization(
product=models.ProductQuantizationConfig(
compression=models.CompressionRatio.X32,
always_ram=True,
),
),
on_disk=True,
),
},
hnsw_config=models.HnswConfigDiff(
ef_construct=123,
),
quantization_config=models.ScalarQuantization(
scalar=models.ScalarQuantizationConfig(
type=models.ScalarType.INT8,
quantile=0.8,
always_ram=False,
),
),
)
```


```
client.updateCollection("{collection_name}", {
vectors: {
my_vector: {
hnsw_config: {
m: 32,
ef_construct: 123,
},
quantization_config: {
product: {
compression: "x32",
always_ram: true,
},
},
on_disk: true,
},
},
hnsw_config: {
ef_construct: 123,
},
quantization_config: {
scalar: {
type: "int8",
quantile: 0.8,
always_ram: true,
},
},
});
```


```
use std::collections::HashMap;
use qdrant_client::qdrant::{
quantization_config_diff::Quantization, vectors_config_diff::Config, HnswConfigDiffBuilder,
QuantizationType, ScalarQuantizationBuilder, UpdateCollectionBuilder, VectorParamsDiffBuilder,
VectorParamsDiffMap,
};
client
.update_collection(
UpdateCollectionBuilder::new("{collection_name}")
.hnsw_config(HnswConfigDiffBuilder::default().ef_construct(123))
.vectors_config(Config::ParamsMap(VectorParamsDiffMap {
map: HashMap::from([(
("my_vector".into()),
VectorParamsDiffBuilder::default()
.hnsw_config(HnswConfigDiffBuilder::default().m(32).ef_construct(123))
.build(),
)]),
}))
.quantization_config(Quantization::Scalar(
ScalarQuantizationBuilder::default()
.r#type(QuantizationType::Int8.into())
.quantile(0.8)
.always_ram(true)
.build(),
)),
)
.await?;
```


```
import io.qdrant.client.grpc.Collections.HnswConfigDiff;
import io.qdrant.client.grpc.Collections.QuantizationConfigDiff;
import io.qdrant.client.grpc.Collections.QuantizationType;
import io.qdrant.client.grpc.Collections.ScalarQuantization;
import io.qdrant.client.grpc.Collections.UpdateCollection;
import io.qdrant.client.grpc.Collections.VectorParamsDiff;
import io.qdrant.client.grpc.Collections.VectorParamsDiffMap;
import io.qdrant.client.grpc.Collections.VectorsConfigDiff;
client
.updateCollectionAsync(
UpdateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setHnswConfig(HnswConfigDiff.newBuilder().setEfConstruct(123).build())
.setVectorsConfig(
VectorsConfigDiff.newBuilder()
.setParamsMap(
VectorParamsDiffMap.newBuilder()
.putMap(
"my_vector",
VectorParamsDiff.newBuilder()
.setHnswConfig(
HnswConfigDiff.newBuilder()
.setM(3)
.setEfConstruct(123)
.build())
.build())))
.setQuantizationConfig(
QuantizationConfigDiff.newBuilder()
.setScalar(
ScalarQuantization.newBuilder()
.setType(QuantizationType.Int8)
.setQuantile(0.8f)
.setAlwaysRam(true)
.build()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpdateCollectionAsync(
collectionName: "{collection_name}",
hnswConfig: new HnswConfigDiff { EfConstruct = 123 },
vectorsConfig: new VectorParamsDiffMap
{
Map =
{
{
"my_vector",
new VectorParamsDiff
{
HnswConfig = new HnswConfigDiff { M = 3, EfConstruct = 123 }
}
}
}
},
quantizationConfig: new QuantizationConfigDiff
{
Scalar = new ScalarQuantization
{
Type = QuantizationType.Int8,
Quantile = 0.8f,
AlwaysRam = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.UpdateCollection(context.Background(), &qdrant.UpdateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfigDiffMap(
map[string]*qdrant.VectorParamsDiff{
"my_vector": {
HnswConfig: &qdrant.HnswConfigDiff{
M: qdrant.PtrOf(uint64(3)),
EfConstruct: qdrant.PtrOf(uint64(123)),
},
},
}),
QuantizationConfig: qdrant.NewQuantizationDiffScalar(
&qdrant.ScalarQuantization{
Type: qdrant.QuantizationType_Int8,
Quantile: qdrant.PtrOf(float32(0.8)),
AlwaysRam: qdrant.PtrOf(true),
}),
})
```


## Collection info

Qdrant allows determining the configuration parameters of an existing collection to better understand how the points are distributed and indexed.

```
GET /collections/{collection_name}
```


```
curl -X GET http://localhost:6333/collections/{collection_name}
```


```
client.get_collection(collection_name="{collection_name}")
```


```
client.getCollection("{collection_name}");
```


```
client.collection_info("{collection_name}").await?;
```


```
client.getCollectionInfoAsync("{collection_name}").get();
```


```
await client.GetCollectionInfoAsync("{collection_name}");
```


```
import "context"
client.GetCollectionInfo(context.Background(), "{collection_name}")
```


## Expected result

```
{
"result": {
"status": "green",
"optimizer_status": "ok",
"indexed_vectors_count": 1024232,
"points_count": 1068786,
"segments_count": 31,
"config": {
"params": {
"vectors": {
"size": 384,
"distance": "Cosine"
},
"shard_number": 1,
"replication_factor": 1,
"write_consistency_factor": 1,
"on_disk_payload": false
},
"hnsw_config": {
"m": 16,
"ef_construct": 100,
"full_scan_threshold": 10000,
"max_indexing_threads": 0
},
"optimizer_config": {
"deleted_threshold": 0.2,
"vacuum_min_vector_number": 1000,
"default_segment_number": 0,
"max_segment_size": null,
"memmap_threshold": null,
"indexing_threshold": 20000,
"flush_interval_sec": 5,
"max_optimization_threads": 1
},
"wal_config": {
"wal_capacity_mb": 32,
"wal_segments_ahead": 0
}
},
"payload_schema": {}
},
"status": "ok",
"time": 0.00010143
}
```


If you insert the vectors into the collection, the `status`

field may become
`yellow`

whilst it is optimizing. It will become `green`

once all the points are
successfully processed.

The following color statuses are possible:

- 🟢
`green`

: collection is ready - 🟡
`yellow`

: collection is optimizing - ⚫
`grey`

: collection is pending optimization ([help](#grey-collection-status)) - 🔴
`red`

: an error occurred which the engine could not recover from

### Grey collection status

*Available as of v1.9.0*

A collection may have the grey ⚫ status or show “optimizations pending, awaiting update operation” as optimization status. This state is normally caused by restarting a Qdrant instance while optimizations were ongoing.

It means the collection has optimizations pending, but they are paused. You must send any update operation to trigger and start the optimizations again.

For example:

```
PATCH /collections/{collection_name}
{
"optimizers_config": {}
}
```


```
curl -X PATCH http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"optimizers_config": {}
}'
```


```
client.update_collection(
collection_name="{collection_name}",
optimizer_config=models.OptimizersConfigDiff(),
)
```


```
client.updateCollection("{collection_name}", {
optimizers_config: {},
});
```


```
use qdrant_client::qdrant::{OptimizersConfigDiffBuilder, UpdateCollectionBuilder};
client
.update_collection(
UpdateCollectionBuilder::new("{collection_name}")
.optimizers_config(OptimizersConfigDiffBuilder::default()),
)
.await?;
```


```
import io.qdrant.client.grpc.Collections.OptimizersConfigDiff;
import io.qdrant.client.grpc.Collections.UpdateCollection;
client.updateCollectionAsync(
UpdateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setOptimizersConfig(
OptimizersConfigDiff.getDefaultInstance())
.build());
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpdateCollectionAsync(
collectionName: "{collection_name}",
optimizersConfig: new OptimizersConfigDiff { }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.UpdateCollection(context.Background(), &qdrant.UpdateCollection{
CollectionName: "{collection_name}",
OptimizersConfig: &qdrant.OptimizersConfigDiff{},
})
```


Alternatively you may use the `Trigger Optimizers`

button in the [Qdrant Web UI](https://qdrant.tech/documentation/web-ui/).
It is shown next to the grey collection status on the collection info page.

### Approximate point and vector counts

You may be interested in the count attributes:

`points_count`

- total number of objects (vectors and their payloads) stored in the collection`indexed_vectors_count`

- total number of vectors stored in the HNSW or sparse index. Qdrant does not store all the vectors in the index, but only if an index segment might be created for a given configuration.

The above counts are not exact, but should be considered approximate. Depending
on how you use Qdrant these may give very different numbers than what you may
expect. It’s therefore important **not** to rely on them.

More specifically, these numbers represent the count of points and vectors in Qdrant’s internal storage. Internally, Qdrant may temporarily duplicate points as part of automatic optimizations. It may keep changed or deleted points for a bit. And it may delay indexing of new points. All of that is for optimization reasons.

Updates you do are therefore not directly reflected in these numbers. If you see a wildly different count of points, it will likely resolve itself once a new round of automatic optimizations is completed.

To clarify: these numbers don’t represent the exact amount of points or vectors
you have inserted, nor does it represent the exact number of distinguishable
points or vectors you can query. If you want to know exact counts, refer to the
[count API](https://qdrant.tech/documentation/concepts/points/#counting-points).

*Note: these numbers may be removed in a future version of Qdrant.*

### Indexing vectors in HNSW

In some cases, you might be surprised the value of `indexed_vectors_count`

is lower than you expected. This is an intended behaviour and
depends on the [optimizer configuration](https://qdrant.tech/documentation/concepts/optimizer/). A new index segment is built if the size of non-indexed vectors is higher than the
value of `indexing_threshold`

(in kB). If your collection is very small or the dimensionality of the vectors is low, there might be no HNSW segment
created and `indexed_vectors_count`

might be equal to `0`

.

It is possible to reduce the `indexing_threshold`

for an existing collection by [updating collection parameters](#update-collection-parameters).

### Collection metadata

*Available as of v1.16.0*

For convenience and better data organization, Qdrant allows attaching custom metadata to collections in the form of key-value pairs. Adding metadata is treated as a part of collection configuration and synchronized across all nodes in a cluster with consensus protocol.

Collection metadata can be specified during collection creation:

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 300,
"distance": "Cosine"
},
"metadata": {
"my-metadata-field": "value-1",
"another-field": 123
}
}
```


```
curl -X PUT http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"vectors": {
"size": 300,
"distance": "Cosine"
},
"metadata": {
"my-metadata-field": "value-1",
"another-field": 123
}
}'
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
metadata={
"my-metadata-field": "value-1",
"another-field": 123
},
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: { size: 100, distance: "Cosine" },
metadata: {
"my-metadata-field": "value-1",
"another-field": 123
}
});
```


```
use qdrant_client::qdrant::{CreateCollectionBuilder, Distance, VectorParamsBuilder};
use qdrant_client::Qdrant;
use serde_json::{json, Value};
use std::collections::HashMap;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let mut metadata: HashMap<String, Value> = HashMap::new();
metadata.insert("my-metadata-field".to_string(), json!("value-1"));
metadata.insert("another-field".to_string(), json!(123));
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(100, Distance::Cosine))
.metadata(metadata),
)
.await?;
```


```
import static io.qdrant.client.ValueFactory.value;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
import java.util.Map;
QdrantClient client = new QdrantClient(
QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParams(
VectorParams.newBuilder()
.setDistance(Distance.Cosine)
.setSize(100)
.build())
.build())
.putAllMetadata(
Map.of(
"my-metadata-field", value("value-1"),
"another-field", value(123)))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 100, Distance = Distance.Cosine },
metadata: new()
{
["my-metadata-field"] = "value-1",
["another-field"] = 123
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 100,
Distance: qdrant.Distance_Cosine,
}),
Metadata: qdrant.NewValueMap(map[string]any{
"my-metadata-field": "value-1",
"another-field": 123,
}),
})
```


as well as updated later:

```
PATCH /collections/{collection_name}
{
"metadata": {
"my-metadata-field": {
"key-a": "value-a",
"key-b": 42
}
}
}
```


```
curl -X PATCH http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"metadata": {
"my-metadata-field": {
"key-a": "value-a",
"key-b": 42
}
}
}'
```


```
client.update_collection(
collection_name="{collection_name}",
metadata={
"my-metadata-field": {
"key-a": "value-a",
"key-b": 42
}
},
)
```


```
client.updateCollection("{collection_name}", {
metadata: {
"my-metadata-field": {
"key-a": "value-a",
"key-b": 42
}
},
});
```


```
use qdrant_client::qdrant::{UpdateCollectionBuilder};
use qdrant_client::Qdrant;
use serde_json::{json, Value};
use std::collections::HashMap;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let mut metadata: HashMap<String, Value> = HashMap::new();
metadata.insert("my-metadata-field".to_string(), json!({
"key-a": "value-a",
"key-b": 42
}));
client
.update_collection(
UpdateCollectionBuilder::new("{collection_name}").metadata(metadata),
)
.await?;
```


```
import static io.qdrant.client.ValueFactory.value;
import io.qdrant.client.grpc.Collections.OptimizersConfigDiff;
import io.qdrant.client.grpc.Collections.UpdateCollection;
import java.util.Map;
client
.updateCollectionAsync(
UpdateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setOptimizersConfig(
OptimizersConfigDiff.newBuilder().setIndexingThreshold(10000).build())
.putAllMetadata(
Map.of(
"my-metadata-field",
value(
Map.of(
"key-a", value("value-a"),
"key-b", value(42)))))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpdateCollectionAsync(
collectionName: "{collection_name}",
optimizersConfig: new OptimizersConfigDiff { IndexingThreshold = 10000 },
metadata: new()
{
["my-metadata-field"] = new Dictionary<string, Value>
{
["key-a"] = "value-a",
["key-b"] = 42
},
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.UpdateCollection(context.Background(), &qdrant.UpdateCollection{
CollectionName: "{collection_name}",
OptimizersConfig: &qdrant.OptimizersConfigDiff{
IndexingThreshold: qdrant.PtrOf(uint64(10000)),
},
Metadata: qdrant.NewValueMap(map[string]any{
"my-metadata-field": map[string]any{
"key-a": "value-a",
"key-b": 42,
},
}),
})
```


Note, that update operation only modifies the specified metadata fields, leaving other fields unchanged.

When specified, metadata is returned as part of collection info:

```
{
"result": {
"config": {
"metadata": {
"my-metadata-field": {
"key-a": "value-a",
"key-b": 42
},
"another-field": 123
}
}
}
}
```


## Collection aliases

In a production environment, it is sometimes necessary to switch different versions of vectors seamlessly. For example, when upgrading to a new version of the neural network.

There is no way to stop the service and rebuild the collection with new vectors in these situations. Aliases are additional names for existing collections. All queries to the collection can also be done identically, using an alias instead of the collection name.

Thus, it is possible to build a second collection in the background and then switch alias from the old to the new collection. Since all changes of aliases happen atomically, no concurrent requests will be affected during the switch.

### Create alias

```
POST /collections/aliases
{
"actions": [
{
"create_alias": {
"collection_name": "example_collection",
"alias_name": "production_collection"
}
}
]
}
```


```
curl -X POST http://localhost:6333/collections/aliases \
-H 'Content-Type: application/json' \
--data-raw '{
"actions": [
{
"create_alias": {
"collection_name": "example_collection",
"alias_name": "production_collection"
}
}
]
}'
```


```
client.update_collection_aliases(
change_aliases_operations=[
models.CreateAliasOperation(
create_alias=models.CreateAlias(
collection_name="example_collection", alias_name="production_collection"
)
)
]
)
```


```
client.updateCollectionAliases({
actions: [
{
create_alias: {
collection_name: "example_collection",
alias_name: "production_collection",
},
},
],
});
```


```
use qdrant_client::qdrant::CreateAliasBuilder;
client
.create_alias(CreateAliasBuilder::new(
"example_collection",
"production_collection",
))
.await?;
```


```
client.createAliasAsync("production_collection", "example_collection").get();
```


```
await client.CreateAliasAsync(aliasName: "production_collection", collectionName: "example_collection");
```


```
import "context"
client.CreateAlias(context.Background(), "production_collection", "example_collection")
```


### Remove alias

```
POST /collections/aliases
{
"actions": [
{
"delete_alias": {
"alias_name": "production_collection"
}
}
]
}
```


```
curl -X POST http://localhost:6333/collections/aliases \
-H 'Content-Type: application/json' \
--data-raw '{
"actions": [
{
"delete_alias": {
"alias_name": "production_collection"
}
}
]
}'
```


```
client.update_collection_aliases(
change_aliases_operations=[
models.DeleteAliasOperation(
delete_alias=models.DeleteAlias(alias_name="production_collection")
),
]
)
```


```
client.updateCollectionAliases({
actions: [
{
delete_alias: {
alias_name: "production_collection",
},
},
],
});
```


```
client.delete_alias("production_collection").await?;
```


```
client.deleteAliasAsync("production_collection").get();
```


```
await client.DeleteAliasAsync("production_collection");
```


```
import "context"
client.DeleteAlias(context.Background(), "production_collection")
```


### Switch collection

Multiple alias actions are performed atomically. For example, you can switch underlying collection with the following command:

```
POST /collections/aliases
{
"actions": [
{
"delete_alias": {
"alias_name": "production_collection"
}
},
{
"create_alias": {
"collection_name": "example_collection",
"alias_name": "production_collection"
}
}
]
}
```


```
curl -X POST http://localhost:6333/collections/aliases \
-H 'Content-Type: application/json' \
--data-raw '{
"actions": [
{
"delete_alias": {
"alias_name": "production_collection"
}
},
{
"create_alias": {
"collection_name": "example_collection",
"alias_name": "production_collection"
}
}
]
}'
```


```
client.update_collection_aliases(
change_aliases_operations=[
models.DeleteAliasOperation(
delete_alias=models.DeleteAlias(alias_name="production_collection")
),
models.CreateAliasOperation(
create_alias=models.CreateAlias(
collection_name="example_collection", alias_name="production_collection"
)
),
]
)
```


```
client.updateCollectionAliases({
actions: [
{
delete_alias: {
alias_name: "production_collection",
},
},
{
create_alias: {
collection_name: "example_collection",
alias_name: "production_collection",
},
},
],
});
```


```
use qdrant_client::qdrant::CreateAliasBuilder;
client.delete_alias("production_collection").await?;
client
.create_alias(CreateAliasBuilder::new(
"example_collection",
"production_collection",
))
.await?;
```


```
client.deleteAliasAsync("production_collection").get();
client.createAliasAsync("production_collection", "example_collection").get();
```


```
await client.DeleteAliasAsync("production_collection");
await client.CreateAliasAsync(aliasName: "production_collection", collectionName: "example_collection");
```


```
import "context"
client.DeleteAlias(context.Background(), "production_collection")
client.CreateAlias(context.Background(), "production_collection", "example_collection")
```


### List collection aliases

```
GET /collections/{collection_name}/aliases
```


```
curl -X GET http://localhost:6333/collections/{collection_name}/aliases
```


```
from qdrant_client import QdrantClient
client = QdrantClient(url="http://localhost:6333")
client.get_collection_aliases(collection_name="{collection_name}")
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.getCollectionAliases("{collection_name}");
```


```
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.list_collection_aliases("{collection_name}").await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.listCollectionAliasesAsync("{collection_name}").get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.ListCollectionAliasesAsync("{collection_name}");
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.ListCollectionAliases(context.Background(), "{collection_name}")
```


### List all aliases

```
GET /aliases
```


```
curl -X GET http://localhost:6333/aliases
```


```
from qdrant_client import QdrantClient
client = QdrantClient(url="http://localhost:6333")
client.get_aliases()
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.getAliases();
```


```
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.list_aliases().await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.listAliasesAsync().get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.ListAliasesAsync();
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.ListAliases(context.Background())
```


### List all collections

```
GET /collections
```


```
curl -X GET http://localhost:6333/collections
```


```
from qdrant_client import QdrantClient
client = QdrantClient(url="http://localhost:6333")
client.get_collections()
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.getCollections();
```


```
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.list_collections().await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.listCollectionsAsync().get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.ListCollectionsAsync();
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.ListCollections(context.Background())
```

---

## Source: https://qdrant.tech/documentation/manage-data/storage/

# Storage

All data within one collection is divided into segments. Each segment has its independent vector and payload storage as well as indexes.

Data stored in segments usually do not overlap. However, storing the same point in different segments will not cause problems since the search contains a deduplication mechanism.

The segments consist of vector and payload storages, vector and payload [indexes](https://qdrant.tech/documentation/concepts/indexing/), and id mapper, which stores the relationship between internal and external ids.

A segment can be `appendable`

or `non-appendable`

depending on the type of storage and index used.
You can freely add, delete and query data in the `appendable`

segment.
With `non-appendable`

segment can only read and delete data.

The configuration of the segments in the collection can be different and independent of one another, but at least one `appendable’ segment must be present in a collection.

## Vector storage

Depending on the requirements of the application, Qdrant can use one of the data storage options. The choice has to be made between the search speed and the size of the RAM used.

**In-memory storage** - Stores all vectors in RAM, has the highest speed since disk access is required only for persistence.

**Memmap storage** - Creates a virtual address space associated with the file on disk. [Wiki](https://en.wikipedia.org/wiki/Memory-mapped_file).
Mmapped files are not directly loaded into RAM. Instead, they use page cache to access the contents of the file.
This scheme allows flexible use of available memory. With sufficient RAM, it is almost as fast as in-memory storage.

### Configuring Memmap storage

There are two ways to configure the usage of memmap(also known as on-disk) storage:

Set up

`on_disk`

option for the vectors in the collection create API:*Available as of v1.2.0*

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 768,
"distance": "Cosine",
"on_disk": true
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(
size=768, distance=models.Distance.COSINE, on_disk=True
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 768,
distance: "Cosine",
on_disk: true,
},
});
```


```
use qdrant_client::qdrant::{CreateCollectionBuilder, Distance, VectorParamsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(768, Distance::Cosine).on_disk(true)),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.VectorParams;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
"{collection_name}",
VectorParams.newBuilder()
.setSize(768)
.setDistance(Distance.Cosine)
.setOnDisk(true)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
"{collection_name}",
new VectorParams
{
Size = 768,
Distance = Distance.Cosine,
OnDisk = true
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 768,
Distance: qdrant.Distance_Cosine,
OnDisk: qdrant.PtrOf(true),
}),
})
```


This will create a collection with all vectors immediately stored in memmap storage. This is the recommended way, in case your Qdrant instance operates with fast disks and you are working with large collections.

Set up

`memmap_threshold`

option. This option will set the threshold after which the segment will be converted to memmap storage.There are two ways to do this:

- You can set the threshold globally in the
[configuration file](https://qdrant.tech/documentation/guides/configuration/). The parameter is called`memmap_threshold`

(previously`memmap_threshold_kb`

). - You can set the threshold for each collection separately during
[creation](https://qdrant.tech/documentation/concepts/collections/#create-collection)or[update](https://qdrant.tech/documentation/concepts/collections/#update-collection-parameters).

- You can set the threshold globally in the

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 768,
"distance": "Cosine"
},
"optimizers_config": {
"indexing_threshold": 20000
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
optimizers_config=models.OptimizersConfigDiff(indexing_threshold=20000),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 768,
distance: "Cosine",
},
optimizers_config: {
indexing_threshold: 20000,
},
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, OptimizersConfigDiffBuilder, VectorParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(768, Distance::Cosine))
.optimizers_config(OptimizersConfigDiffBuilder::default().indexing_threshold(20000)),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.OptimizersConfigDiff;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParams(
VectorParams.newBuilder()
.setSize(768)
.setDistance(Distance.Cosine)
.build())
.build())
.setOptimizersConfig(
OptimizersConfigDiff.newBuilder().setIndexingThreshold(20000).build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine },
optimizersConfig: new OptimizersConfigDiff { IndexingThreshold = 20000 }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 768,
Distance: qdrant.Distance_Cosine,
}),
OptimizersConfig: &qdrant.OptimizersConfigDiff{
IndexingThreshold: qdrant.PtrOf(uint64(20000)),
},
})
```


The rule of thumb to set the memmap threshold parameter is simple:

- if you have a balanced use scenario - set memmap threshold the same as
`indexing_threshold`

(default is 10000). In this case the optimizer will not make any extra runs and will optimize all thresholds at once. - if you have a high write load and low RAM - set memmap threshold lower than
`indexing_threshold`

to e.g. 5000. In this case the optimizer will convert the segments to memmap storage first and will only apply indexing after that.

In addition, you can use memmap storage not only for vectors, but also for HNSW index.
To enable this, you need to set the `hnsw_config.on_disk`

parameter to `true`

during collection [creation](https://qdrant.tech/documentation/concepts/collections/#create-a-collection) or [updating](https://qdrant.tech/documentation/concepts/collections/#update-collection-parameters).

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 768,
"distance": "Cosine",
"on_disk": true
},
"hnsw_config": {
"on_disk": true
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE, on_disk=True),
hnsw_config=models.HnswConfigDiff(on_disk=True),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 768,
distance: "Cosine",
on_disk: true,
},
hnsw_config: {
on_disk: true,
},
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, HnswConfigDiffBuilder,
VectorParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(768, Distance::Cosine).on_disk(true))
.hnsw_config(HnswConfigDiffBuilder::default().on_disk(true)),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.HnswConfigDiff;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParams(
VectorParams.newBuilder()
.setSize(768)
.setDistance(Distance.Cosine)
.setOnDisk(true)
.build())
.build())
.setHnswConfig(HnswConfigDiff.newBuilder().setOnDisk(true).build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine, OnDisk = true },
hnswConfig: new HnswConfigDiff { OnDisk = true }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 768,
Distance: qdrant.Distance_Cosine,
OnDisk: qdrant.PtrOf(true),
}),
HnswConfig: &qdrant.HnswConfigDiff{
OnDisk: qdrant.PtrOf(true),
},
})
```


## Payload storage

Qdrant supports two types of payload storages: InMemory and OnDisk.

InMemory payload storage is organized in the same way as in-memory vectors.
The payload data is loaded into RAM at service startup while disk and [Gridstore](https://qdrant.tech/articles/gridstore-key-value-storage/) are used for persistence only.
This type of storage works quite fast, but it may require a lot of space to keep all the data in RAM, especially if the payload has large values attached - abstracts of text or even images.

In the case of large payload values, it might be better to use OnDisk payload storage. This type of storage will read and write payload directly to RocksDB, so it won’t require any significant amount of RAM to store. The downside, however, is the access latency. If you need to query vectors with some payload-based conditions - checking values stored on disk might take too much time. In this scenario, we recommend creating a payload index for each field used in filtering conditions to avoid disk access. Once you create the field index, Qdrant will preserve all values of the indexed field in RAM regardless of the payload storage type.

You can specify the desired type of payload storage with [configuration file](https://qdrant.tech/documentation/guides/configuration/) or with collection parameter `on_disk_payload`

during [creation](https://qdrant.tech/documentation/concepts/collections/#create-collection) of the collection.

## Versioning

To ensure data integrity, Qdrant performs all data changes in 2 stages. In the first step, the data is written to the Write-ahead-log(WAL), which orders all operations and assigns them a sequential number.

Once a change has been added to the WAL, it will not be lost even if a power loss occurs. Then the changes go into the segments. Each segment stores the last version of the change applied to it as well as the version of each individual point. If the new change has a sequential number less than the current version of the point, the updater will ignore the change. This mechanism allows Qdrant to safely and efficiently restore the storage from the WAL in case of an abnormal shutdown.

---

## Source: https://qdrant.tech/documentation/manage-data/indexing/

# Indexing

A key feature of Qdrant is the effective combination of vector and traditional indexes. It is essential to have this because for vector search to work effectively with filters, having a vector index only is not enough. In simpler terms, a vector index speeds up vector search, and payload indexes speed up filtering.

The indexes in the segments exist independently, but the parameters of the indexes themselves are configured for the whole collection.

Not all segments automatically have indexes.
Their necessity is determined by the [optimizer](https://qdrant.tech/documentation/concepts/optimizer/) settings and depends, as a rule, on the number of stored points.

## Payload Index

Payload index in Qdrant is similar to the index in conventional document-oriented databases. This index is built for a specific field and type, and is used for quick point requests by the corresponding filtering condition.

The index is also used to accurately estimate the filter cardinality, which helps the [query planning](https://qdrant.tech/documentation/concepts/search/#query-planning) choose a search strategy.

Creating an index requires additional computational resources and memory, so choosing fields to be indexed is essential. Qdrant does not make this choice but grants it to the user.

To mark a field as indexable, you can use the following:

```
PUT /collections/{collection_name}/index
{
"field_name": "name_of_the_field_to_index",
"field_schema": "keyword"
}
```


```
client.create_payload_index(
collection_name="{collection_name}",
field_name="name_of_the_field_to_index",
field_schema=models.PayloadSchemaType.KEYWORD,
)
```


```
client.createPayloadIndex("{collection_name}", {
field_name: "name_of_the_field_to_index",
field_schema: "keyword",
});
```


```
use qdrant_client::qdrant::{CreateFieldIndexCollectionBuilder, FieldType};
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"name_of_the_field_to_index",
FieldType::Keyword,
)
.wait(true),
)
.await?;
```


```
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
client.createPayloadIndexAsync(
"{collection_name}",
"name_of_the_field_to_index",
PayloadSchemaType.Keyword,
null,
true,
null,
null);
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "name_of_the_field_to_index"
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeKeyword.Enum(),
})
```


You can use dot notation to specify a nested field for indexing. Similar to specifying [nested filters](https://qdrant.tech/documentation/concepts/filtering/#nested-key).

Available field types are:

`keyword`

- for[keyword](https://qdrant.tech/documentation/concepts/payload/#keyword)payload, affects[Match](https://qdrant.tech/documentation/concepts/filtering/#match)filtering conditions.`integer`

- for[integer](https://qdrant.tech/documentation/concepts/payload/#integer)payload, affects[Match](https://qdrant.tech/documentation/concepts/filtering/#match)and[Range](https://qdrant.tech/documentation/concepts/filtering/#range)filtering conditions.`float`

- for[float](https://qdrant.tech/documentation/concepts/payload/#float)payload, affects[Range](https://qdrant.tech/documentation/concepts/filtering/#range)filtering conditions.`bool`

- for[bool](https://qdrant.tech/documentation/concepts/payload/#bool)payload, affects[Match](https://qdrant.tech/documentation/concepts/filtering/#match)filtering conditions (available as of v1.4.0).`geo`

- for[geo](https://qdrant.tech/documentation/concepts/payload/#geo)payload, affects[Geo Bounding Box](https://qdrant.tech/documentation/concepts/filtering/#geo-bounding-box)and[Geo Radius](https://qdrant.tech/documentation/concepts/filtering/#geo-radius)filtering conditions.`datetime`

- for[datetime](https://qdrant.tech/documentation/concepts/payload/#datetime)payload, affects[Range](https://qdrant.tech/documentation/concepts/filtering/#range)filtering conditions (available as of v1.8.0).`text`

- a special kind of index, available for[keyword](https://qdrant.tech/documentation/concepts/payload/#keyword)/ string payloads, affects[Full Text search](https://qdrant.tech/documentation/concepts/filtering/#full-text-match)filtering conditions. Read more about[text index configuration](#full-text-index)`uuid`

- a special type of index, similar to`keyword`

, but optimized for[UUID values](https://qdrant.tech/documentation/concepts/payload/#uuid). Affects[Match](https://qdrant.tech/documentation/concepts/filtering/#match)filtering conditions. (available as of v1.11.0)

Payload index may occupy some additional memory, so it is recommended to only use the index for those fields that are used in filtering conditions. If you need to filter by many fields and the memory limits do not allow for indexing all of them, it is recommended to choose the field that limits the search result the most. As a rule, the more different values a payload value has, the more efficiently the index will be used.

### Parameterized index

*Available as of v1.8.0*

We’ve added a parameterized variant to the `integer`

index, which allows
you to fine-tune indexing and search performance.

Both the regular and parameterized `integer`

indexes use the following flags:

`lookup`

: enables support for direct lookup using[Match](https://qdrant.tech/documentation/concepts/filtering/#match)filters.`range`

: enables support for[Range](https://qdrant.tech/documentation/concepts/filtering/#range)filters.

The regular `integer`

index assumes both `lookup`

and `range`

are `true`

. In
contrast, to configure a parameterized index, you would set only one of these
filters to `true`

:

`lookup` | `range` | Result |
|---|---|---|
`true` | `true` | Regular integer index |
`true` | `false` | Parameterized integer index |
`false` | `true` | Parameterized integer index |
`false` | `false` | No integer index |

The parameterized index can enhance performance in collections with millions
of points. We encourage you to try it out. If it does not enhance performance
in your use case, you can always restore the regular `integer`

index.

Note: If you set `"lookup": true`

with a range filter, that may lead to
significant performance issues.

For example, the following code sets up a parameterized integer index which supports only range filters:

```
PUT /collections/{collection_name}/index
{
"field_name": "name_of_the_field_to_index",
"field_schema": {
"type": "integer",
"lookup": false,
"range": true
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_payload_index(
collection_name="{collection_name}",
field_name="name_of_the_field_to_index",
field_schema=models.IntegerIndexParams(
type=models.IntegerIndexType.INTEGER,
lookup=False,
range=True,
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createPayloadIndex("{collection_name}", {
field_name: "name_of_the_field_to_index",
field_schema: {
type: "integer",
lookup: false,
range: true,
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder, FieldType, IntegerIndexParamsBuilder,
};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"name_of_the_field_to_index",
FieldType::Integer,
)
.field_index_params(IntegerIndexParamsBuilder::new(false, true).build()),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.IntegerIndexParams;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"name_of_the_field_to_index",
PayloadSchemaType.Integer,
PayloadIndexParams.newBuilder()
.setIntegerIndexParams(
IntegerIndexParams.newBuilder().setLookup(false).setRange(true).build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "name_of_the_field_to_index",
schemaType: PayloadSchemaType.Integer,
indexParams: new PayloadIndexParams
{
IntegerIndexParams = new()
{
Lookup = false,
Range = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeInteger.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsInt(
&qdrant.IntegerIndexParams{
Lookup: qdrant.PtrOf(false),
Range: qdrant.PtrOf(true),
}),
})
```


### On-disk payload index

*Available as of v1.11.0*

By default all payload-related structures are stored in memory. In this way, the vector index can quickly access payload values during search. As latency in this case is critical, it is recommended to keep hot payload indexes in memory.

There are, however, cases when payload indexes are too large or rarely used. In those cases, it is possible to store payload indexes on disk.

To configure on-disk payload index, you can use the following index parameters:

```
PUT /collections/{collection_name}/index
{
"field_name": "payload_field_name",
"field_schema": {
"type": "keyword",
"on_disk": true
}
}
```


```
client.create_payload_index(
collection_name="{collection_name}",
field_name="payload_field_name",
field_schema=models.KeywordIndexParams(
type=models.KeywordIndexType.KEYWORD,
on_disk=True,
),
)
```


```
client.createPayloadIndex("{collection_name}", {
field_name: "payload_field_name",
field_schema: {
type: "keyword",
on_disk: true
},
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder,
KeywordIndexParamsBuilder,
FieldType
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"payload_field_name",
FieldType::Keyword,
)
.field_index_params(
KeywordIndexParamsBuilder::default()
.on_disk(true),
),
).await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.KeywordIndexParams;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"payload_field_name",
PayloadSchemaType.Keyword,
PayloadIndexParams.newBuilder()
.setKeywordIndexParams(
KeywordIndexParams.newBuilder()
.setOnDisk(true)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "payload_field_name",
schemaType: PayloadSchemaType.Keyword,
indexParams: new PayloadIndexParams
{
KeywordIndexParams = new KeywordIndexParams
{
OnDisk = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeKeyword.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsKeyword(
&qdrant.KeywordIndexParams{
OnDisk: qdrant.PtrOf(true),
}),
})
```


Payload index on-disk is supported for the following types:

`keyword`

`integer`

`float`

`datetime`

`uuid`

`text`

`geo`


The list will be extended in future versions.

### Tenant Index

*Available as of v1.11.0*

Many vector search use-cases require multitenancy. In a multi-tenant scenario the collection is expected to contain multiple subsets of data, where each subset belongs to a different tenant.

Qdrant supports efficient multi-tenant search by enabling [special configuration](https://qdrant.tech/documentation/guides/multiple-partitions/) vector index, which disables global search and only builds sub-indexes for each tenant.

However, knowing that the collection contains multiple tenants unlocks more opportunities for optimization. To optimize storage in Qdrant further, you can enable tenant indexing for payload fields.

This option will tell Qdrant which fields are used for tenant identification and will allow Qdrant to structure storage for faster search of tenant-specific data. One example of such optimization is localizing tenant-specific data closer on disk, which will reduce the number of disk reads during search.

To enable tenant index for a field, you can use the following index parameters:

```
PUT /collections/{collection_name}/index
{
"field_name": "payload_field_name",
"field_schema": {
"type": "keyword",
"is_tenant": true
}
}
```


```
client.create_payload_index(
collection_name="{collection_name}",
field_name="payload_field_name",
field_schema=models.KeywordIndexParams(
type=models.KeywordIndexType.KEYWORD,
is_tenant=True,
),
)
```


```
client.createPayloadIndex("{collection_name}", {
field_name: "payload_field_name",
field_schema: {
type: "keyword",
is_tenant: true
},
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder,
KeywordIndexParamsBuilder,
FieldType
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"payload_field_name",
FieldType::Keyword,
)
.field_index_params(
KeywordIndexParamsBuilder::default()
.is_tenant(true),
),
).await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.KeywordIndexParams;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"payload_field_name",
PayloadSchemaType.Keyword,
PayloadIndexParams.newBuilder()
.setKeywordIndexParams(
KeywordIndexParams.newBuilder()
.setIsTenant(true)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "payload_field_name",
schemaType: PayloadSchemaType.Keyword,
indexParams: new PayloadIndexParams
{
KeywordIndexParams = new KeywordIndexParams
{
IsTenant = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeKeyword.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsKeyword(
&qdrant.KeywordIndexParams{
IsTenant: qdrant.PtrOf(true),
}),
})
```


Tenant optimization is supported for the following datatypes:

`keyword`

`uuid`


### Principal Index

*Available as of v1.11.0*

Similar to the tenant index, the principal index is used to optimize storage for faster search, assuming that the search request is primarily filtered by the principal field.

A good example of a use case for the principal index is time-related data, where each point is associated with a timestamp. In this case, the principal index can be used to optimize storage for faster search with time-based filters.

```
PUT /collections/{collection_name}/index
{
"field_name": "timestamp",
"field_schema": {
"type": "integer",
"is_principal": true
}
}
```


```
client.create_payload_index(
collection_name="{collection_name}",
field_name="timestamp",
field_schema=models.IntegerIndexParams(
type=models.IntegerIndexType.INTEGER,
is_principal=True,
),
)
```


```
client.createPayloadIndex("{collection_name}", {
field_name: "timestamp",
field_schema: {
type: "integer",
is_principal: true
},
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder,
IntegerIndexParamsBuilder,
FieldType
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"timestamp",
FieldType::Integer,
)
.field_index_params(
IntegerIndexParamsBuilder::default()
.is_principal(true),
),
).await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.IntegerIndexParams;
import io.qdrant.client.grpc.Collections.KeywordIndexParams;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"timestamp",
PayloadSchemaType.Integer,
PayloadIndexParams.newBuilder()
.setIntegerIndexParams(
IntegerIndexParams.newBuilder()
.setIsPrincipal(true)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "timestamp",
schemaType: PayloadSchemaType.Integer,
indexParams: new PayloadIndexParams
{
IntegerIndexParams = new IntegerIndexParams
{
IsPrincipal = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeInteger.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsInt(
&qdrant.IntegerIndexParams{
IsPrincipal: qdrant.PtrOf(true),
}),
})
```


Principal optimization is supported for following types:

`integer`

`float`

`datetime`


## Full-text index

Qdrant supports full-text search for string payload. Full-text index allows you to filter points by the presence of a word or a phrase in the payload field.

Full-text index configuration is a bit more complex than other indexes, as you can specify the tokenization parameters. Tokenization is the process of splitting a string into tokens, which are then indexed in the inverted index.

See [Full Text match](https://qdrant.tech/documentation/concepts/filtering/#full-text-match) for examples of querying with a full-text index.

To create a full-text index, you can use the following:

```
PUT /collections/{collection_name}/index
{
"field_name": "name_of_the_field_to_index",
"field_schema": {
"type": "text",
"tokenizer": "word",
"min_token_len": 2,
"max_token_len": 10,
"lowercase": true
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_payload_index(
collection_name="{collection_name}",
field_name="name_of_the_field_to_index",
field_schema=models.TextIndexParams(
type=models.TextIndexType.TEXT,
tokenizer=models.TokenizerType.WORD,
min_token_len=2,
max_token_len=10,
lowercase=True,
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createPayloadIndex("{collection_name}", {
field_name: "name_of_the_field_to_index",
field_schema: {
type: "text",
tokenizer: "word",
min_token_len: 2,
max_token_len: 10,
lowercase: true,
},
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder,
TextIndexParamsBuilder,
FieldType,
TokenizerType,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let text_index_params = TextIndexParamsBuilder::new(TokenizerType::Word)
.min_token_len(2)
.max_token_len(10)
.lowercase(true);
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"name_of_the_field_to_index",
FieldType::Text,
).field_index_params(text_index_params.build()),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
import io.qdrant.client.grpc.Collections.TextIndexParams;
import io.qdrant.client.grpc.Collections.TokenizerType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"name_of_the_field_to_index",
PayloadSchemaType.Text,
PayloadIndexParams.newBuilder()
.setTextIndexParams(
TextIndexParams.newBuilder()
.setTokenizer(TokenizerType.Word)
.setMinTokenLen(2)
.setMaxTokenLen(10)
.setLowercase(true)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "name_of_the_field_to_index",
schemaType: PayloadSchemaType.Text,
indexParams: new PayloadIndexParams
{
TextIndexParams = new TextIndexParams
{
Tokenizer = TokenizerType.Word,
MinTokenLen = 2,
MaxTokenLen = 10,
Lowercase = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeText.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsText(
&qdrant.TextIndexParams{
Tokenizer: qdrant.TokenizerType_Whitespace,
MinTokenLen: qdrant.PtrOf(uint64(2)),
MaxTokenLen: qdrant.PtrOf(uint64(10)),
Lowercase: qdrant.PtrOf(true),
}),
})
```


### Tokenizers

Tokenizers are algorithms used to split text into smaller units called tokens, which are then indexed and searched in a full-text index. In the context of Qdrant, tokenizers determine how string payloads are broken down for efficient searching and filtering. The choice of tokenizer affects how queries match the indexed text, supporting different languages, word boundaries, and search behaviours such as prefix or phrase matching.

Available tokenizers are:

`word`

(default) - splits the string into words, separated by spaces, punctuation marks, and special characters.`whitespace`

- splits the string into words, separated by spaces.`prefix`

- splits the string into words, separated by spaces, punctuation marks, and special characters, and then creates a prefix index for each word. For example:`hello`

will be indexed as`h`

,`he`

,`hel`

,`hell`

,`hello`

.`multilingual`

- a special type of tokenizer based on multiple packages like[charabia](https://github.com/meilisearch/charabia)and[vaporetto](https://github.com/daac-tools/vaporetto)to deliver fast and accurate tokenization for a large variety of languages. It allows proper tokenization and lemmatization for multiple languages, including those with non-Latin alphabets and non-space delimiters. See the[charabia documentation](https://github.com/meilisearch/charabia)for a full list of supported languages and normalization options. Note: For the Japanese language, Qdrant relies on the`vaporetto`

project, which has much less overhead compared to`charabia`

, while maintaining comparable performance.

### Lowercasing

By default, full-text search in Qdrant is case-insensitive. For example, users can search for the lowercase term `tv`

and find text fields containing the uppercase word `TV`

. Case-insensitivity is achieved by converting both the words in the index and the query terms to lowercase.

Lowercasing is enabled by default. To use case-sensitive full-text search, configure a full-text index with `lowercase`

set to `false`

.

```
PUT /collections/{collection_name}/index
{
"field_name": "name_of_the_field_to_index",
"field_schema": {
"type": "text",
"tokenizer": "word",
"lowercase": false
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_payload_index(
collection_name="{collection_name}",
field_name="name_of_the_field_to_index",
field_schema=models.TextIndexParams(
type=models.TextIndexType.TEXT,
tokenizer=models.TokenizerType.WORD,
lowercase=False,
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createPayloadIndex("{collection_name}", {
field_name: "name_of_the_field_to_index",
field_schema: {
type: "text",
tokenizer: "word",
lowercase: false,
},
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder,
TextIndexParamsBuilder,
FieldType,
TokenizerType,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let text_index_params = TextIndexParamsBuilder::new(TokenizerType::Word)
.lowercase(false);
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"name_of_the_field_to_index",
FieldType::Text,
).field_index_params(text_index_params.build()),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
import io.qdrant.client.grpc.Collections.TextIndexParams;
import io.qdrant.client.grpc.Collections.TokenizerType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"name_of_the_field_to_index",
PayloadSchemaType.Text,
PayloadIndexParams.newBuilder()
.setTextIndexParams(
TextIndexParams.newBuilder()
.setTokenizer(TokenizerType.Word)
.setLowercase(true)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "name_of_the_field_to_index",
schemaType: PayloadSchemaType.Text,
indexParams: new PayloadIndexParams
{
TextIndexParams = new TextIndexParams
{
Tokenizer = TokenizerType.Word,
Lowercase = true,
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeText.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsText(
&qdrant.TextIndexParams{
Tokenizer: qdrant.TokenizerType_Word,
Lowercase: qdrant.PtrOf(true),
}),
})
```


### ASCII Folding

*Available as of v1.16.0*

When enabled, ASCII folding converts Unicode characters into their corresponding ASCII equivalents, for example, by removing diacritics. For instance, the character `ã`

is changed into `a`

, `ç`

becomes `c`

, and `é`

is converted to `e`

.

Because ASCII folding is applied to both the words in the index and the query terms, it increases recall. For example, users can search for `cafe`

and also find text fields containing the word `café`

.

ASCII folding is not enabled by default. To enable it, configure a full-text index with `ascii_folding`

set to `true`

.

```
PUT /collections/{collection_name}/index
{
"field_name": "name_of_the_field_to_index",
"field_schema": {
"type": "text",
"tokenizer": "word",
"ascii_folding": true
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_payload_index(
collection_name="{collection_name}",
field_name="name_of_the_field_to_index",
field_schema=models.TextIndexParams(
type=models.TextIndexType.TEXT,
tokenizer=models.TokenizerType.WORD,
ascii_folding=True,
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createPayloadIndex("{collection_name}", {
field_name: "name_of_the_field_to_index",
field_schema: {
type: "text",
tokenizer: "word",
ascii_folding: true,
},
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder,
TextIndexParamsBuilder,
FieldType,
TokenizerType,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let text_index_params = TextIndexParamsBuilder::new(TokenizerType::Word)
.ascii_folding(true);
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"name_of_the_field_to_index",
FieldType::Text,
).field_index_params(text_index_params.build()),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
import io.qdrant.client.grpc.Collections.TextIndexParams;
import io.qdrant.client.grpc.Collections.TokenizerType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"name_of_the_field_to_index",
PayloadSchemaType.Text,
PayloadIndexParams.newBuilder()
.setTextIndexParams(
TextIndexParams.newBuilder()
.setTokenizer(TokenizerType.Word)
.setLowercase(true)
.setAsciiFolding(true)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "name_of_the_field_to_index",
schemaType: PayloadSchemaType.Text,
indexParams: new PayloadIndexParams
{
TextIndexParams = new TextIndexParams
{
Tokenizer = TokenizerType.Word,
Lowercase = true,
AsciiFolding = true,
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeText.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsText(
&qdrant.TextIndexParams{
Tokenizer: qdrant.TokenizerType_Word,
Lowercase: qdrant.PtrOf(true),
AsciiFolding: qdrant.PtrOf(true),
}),
})
```


### Stemmer

A **stemmer** is an algorithm used in text processing to reduce words to their root or base form, known as the “stem.” For example, the words “running”, “runner and “runs” can all be reduced to the stem “run.”
When configuring a full-text index in Qdrant, you can specify a stemmer to be used for a particular language. This enables the index to recognize and match different inflections or derivations of a word.

Qdrant provides an implementation of [Snowball stemmer](https://snowballstem.org/), a widely used and performant variant for some of the most popular languages.
For the list of supported languages, please visit the [rust-stemmers repository](https://github.com/qdrant/rust-stemmers).

For full-text indices, stemming is not enabled by default. To enable it, configure the `snowball`

stemmer with the desired language:

```
PUT /collections/{collection_name}/index
{
"field_name": "name_of_the_field_to_index",
"field_schema": {
"type": "text",
"tokenizer": "word",
"stemmer": {
"type": "snowball",
"language": "english"
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_payload_index(
collection_name="{collection_name}",
field_name="name_of_the_field_to_index",
field_schema=models.TextIndexParams(
type=models.TextIndexType.TEXT,
tokenizer=models.TokenizerType.WORD,
stemmer=models.SnowballParams(
type=models.Snowball.SNOWBALL,
language=models.SnowballLanguage.ENGLISH
)
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createPayloadIndex("{collection_name}", {
field_name: "name_of_the_field_to_index",
field_schema: {
type: "text",
tokenizer: "word",
stemmer: {
type: "snowball",
language: "english"
}
}
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder,
TextIndexParamsBuilder,
FieldType,
TokenizerType,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let text_index_params = TextIndexParamsBuilder::new(TokenizerType::Word)
.snowball_stemmer("english".to_string());
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"{field_name}",
FieldType::Text,
).field_index_params(text_index_params.build()),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
import io.qdrant.client.grpc.Collections.SnowballParams;
import io.qdrant.client.grpc.Collections.StemmingAlgorithm;
import io.qdrant.client.grpc.Collections.TextIndexParams;
import io.qdrant.client.grpc.Collections.TokenizerType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"name_of_the_field_to_index",
PayloadSchemaType.Text,
PayloadIndexParams.newBuilder()
.setTextIndexParams(
TextIndexParams.newBuilder()
.setTokenizer(TokenizerType.Word)
.setStemmer(
StemmingAlgorithm.newBuilder()
.setSnowball(
SnowballParams.newBuilder().setLanguage("english").build())
.build())
.build())
.build(),
true,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "name_of_the_field_to_index",
schemaType: PayloadSchemaType.Text,
indexParams: new PayloadIndexParams
{
TextIndexParams = new TextIndexParams
{
Tokenizer = TokenizerType.Word,
Stemmer = new StemmingAlgorithm
{
Snowball = new SnowballParams
{
Language = "english"
}
}
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeText.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsText(
&qdrant.TextIndexParams{
Tokenizer: qdrant.TokenizerType_Word,
Stemmer: qdrant.NewStemmingAlgorithmSnowball(&qdrant.SnowballParams{
Language: "english",
}),
}),
})
```


### Stopwords

Stopwords are common words (such as “the”, “is”, “at”, “which”, and “on”) that are often filtered out during text processing because they carry little meaningful information for search and retrieval tasks.

In Qdrant, you can specify a list of stopwords to be ignored during full-text indexing and search. This helps simplify search queries and improves relevance.

You can configure stopwords based on predefined languages, as well as extend existing stopword lists with custom words.

For full-text indices, stopword removal is not enabled by default. To enable it, configure the `stopwords`

parameter with the desired languages and any custom stopwords:

```
// Simple
PUT collections/{collection_name}/index
{
"field_name": "name_of_the_field_to_index",
"field_schema": {
"type": "text",
"tokenizer": "word",
"stopwords": "english"
}
}
// Explicit
PUT collections/{collection_name}/index
{
"field_name": "name_of_the_field_to_index",
"field_schema": {
"type": "text",
"tokenizer": "word",
"stopwords": {
"languages": [
"english",
"spanish"
],
"custom": [
"example"
]
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
# Simple
client.create_payload_index(
collection_name="{collection_name}",
field_name="name_of_the_field_to_index",
field_schema=models.TextIndexParams(
type=models.TextIndexType.TEXT,
tokenizer=models.TokenizerType.WORD,
stopwords=models.Language.ENGLISH,
),
)
# Explicit
client.create_payload_index(
collection_name="{collection_name}",
field_name="name_of_the_field_to_index",
field_schema=models.TextIndexParams(
type=models.TextIndexType.TEXT,
tokenizer=models.TokenizerType.WORD,
stopwords=models.StopwordsSet(
languages=[
models.Language.ENGLISH,
models.Language.SPANISH,
],
custom=[
"example"
]
),
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
// Simple
client.createPayloadIndex("{collection_name}", {
field_name: "name_of_the_field_to_index",
field_schema: {
type: "text",
tokenizer: "word",
stopwords: "english"
},
});
// Explicit
client.createPayloadIndex("{collection_name}", {
field_name: "name_of_the_field_to_index",
field_schema: {
type: "text",
tokenizer: "word",
stopwords: {
languages: [
"english",
"spanish"
],
custom: [
"example"
]
}
},
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder,
TextIndexParamsBuilder,
FieldType,
TokenizerType,
StopwordsSet,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
// Simple
let text_index_params = TextIndexParamsBuilder::new(TokenizerType::Word)
.stopwords_language("english".to_string());
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"name_of_the_field_to_index",
FieldType::Text,
).field_index_params(text_index_params.build()),
)
.await?;
// Explicit
let text_index_params = TextIndexParamsBuilder::new(TokenizerType::Word)
.stopwords(StopwordsSet {
languages: vec![
"english".to_string(),
"spanish".to_string(),
],
custom: vec!["example".to_string()],
});
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"{field_name}",
FieldType::Text,
).field_index_params(text_index_params.build()),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
import io.qdrant.client.grpc.Collections.StopwordsSet;
import io.qdrant.client.grpc.Collections.TextIndexParams;
import io.qdrant.client.grpc.Collections.TokenizerType;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"name_of_the_field_to_index",
PayloadSchemaType.Text,
PayloadIndexParams.newBuilder()
.setTextIndexParams(
TextIndexParams.newBuilder()
.setTokenizer(TokenizerType.Word)
.setStopwords(
StopwordsSet.newBuilder()
.addAllLanguages(List.of("english", "spanish"))
.addAllCustom(List.of("example"))
.build())
.build())
.build(),
true,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "name_of_the_field_to_index",
schemaType: PayloadSchemaType.Text,
indexParams: new PayloadIndexParams
{
TextIndexParams = new TextIndexParams
{
Tokenizer = TokenizerType.Word,
Stopwords = new StopwordsSet
{
Languages = { "english", "spanish" },
Custom = { "example" }
}
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeText.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsText(
&qdrant.TextIndexParams{
Tokenizer: qdrant.TokenizerType_Word,
Stopwords: &qdrant.StopwordsSet{
Languages: []string{"english", "spanish"},
Custom: []string{"example"},
},
}),
})
```


### Phrase Search

Phrase search in Qdrant allows you to find documents or points where a specific sequence of words appears together, in the same order, within a text payload field. This is useful when you want to match exact phrases rather than individual words scattered throughout the text.

When using a full-text index with phrase search enabled, you can perform phrase search by enclosing the desired phrase in double quotes in your filter query.
For example, searching for `"machine learning"`

will only return results where the words “machine” and “learning” appear together as a phrase, not just anywhere in the text.

For efficient phrase search, Qdrant requires building an additional data structure, so it needs to be configured during the creation of the full-text index:

```
PUT /collections/{collection_name}/index
{
"field_name": "name_of_the_field_to_index",
"field_schema": {
"type": "text",
"tokenizer": "word",
"lowercase": true,
"phrase_matching": true
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_payload_index(
collection_name="{collection_name}",
field_name="name_of_the_field_to_index",
field_schema=models.TextIndexParams(
type=models.TextIndexType.TEXT,
tokenizer=models.TokenizerType.WORD,
lowercase=True,
phrase_matching=True,
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createPayloadIndex("{collection_name}", {
field_name: "name_of_the_field_to_index",
field_schema: {
type: "text",
tokenizer: "word",
lowercase: true,
phrase_matching: true,
},
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder,
TextIndexParamsBuilder,
FieldType,
TokenizerType,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let text_index_params = TextIndexParamsBuilder::new(TokenizerType::Word)
.phrase_matching(true)
.lowercase(true);
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"name_of_the_field_to_index",
FieldType::Text,
).field_index_params(text_index_params.build()),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
import io.qdrant.client.grpc.Collections.TextIndexParams;
import io.qdrant.client.grpc.Collections.TokenizerType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"name_of_the_field_to_index",
PayloadSchemaType.Text,
PayloadIndexParams.newBuilder()
.setTextIndexParams(
TextIndexParams.newBuilder()
.setTokenizer(TokenizerType.Word)
.setLowercase(true)
.setPhraseMatching(true)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "name_of_the_field_to_index",
schemaType: PayloadSchemaType.Text,
indexParams: new PayloadIndexParams
{
TextIndexParams = new TextIndexParams
{
Tokenizer = TokenizerType.Word,
Lowercase = true,
PhraseMatching = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeText.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsText(
&qdrant.TextIndexParams{
Tokenizer: qdrant.TokenizerType_Whitespace,
Lowercase: qdrant.PtrOf(true),
PhraseMatching: qdrant.PtrOf(true),
}),
})
```


See [Phrase Match](https://qdrant.tech/documentation/concepts/filtering/#phrase-match) for examples of querying phrases with a full-text index.

## Vector Index

A vector index is a data structure built on vectors through a specific mathematical model. Through the vector index, we can efficiently query several vectors similar to the target vector.

Qdrant currently only uses HNSW as a dense vector index.

[HNSW](https://arxiv.org/abs/1603.09320) (Hierarchical Navigable Small World Graph) is a graph-based indexing algorithm. It builds a multi-layer navigation structure for an image according to certain rules. In this structure, the upper layers are more sparse and the distances between nodes are farther. The lower layers are denser and the distances between nodes are closer. The search starts from the uppermost layer, finds the node closest to the target in this layer, and then enters the next layer to begin another search. After multiple iterations, it can quickly approach the target position.

In order to improve performance, HNSW limits the maximum degree of nodes on each layer of the graph to `m`

. In addition, you can use `ef_construct`

(when building an index) or `ef`

(when searching targets) to specify a search range.

The corresponding parameters could be configured in the configuration file:

```
storage:
# Default parameters of HNSW Index. Could be overridden for each collection or named vector individually
hnsw_index:
# Number of edges per node in the index graph.
# Larger the value - more accurate the search, more space required.
m: 16
# Number of neighbours to consider during the index building.
# Larger the value - more accurate the search, more time required to build index.
ef_construct: 100
# Minimal size threshold (in KiloBytes) below which full-scan is preferred over HNSW search.
# This measures the total size of vectors being queried against.
# When the maximum estimated amount of points that a condition satisfies is smaller than
# `full_scan_threshold_kb`, the query planner will use full-scan search instead of HNSW index
# traversal for better performance.
# Note: 1Kb = 1 vector of size 256
full_scan_threshold: 10000
```


And so in the process of creating a [collection](https://qdrant.tech/documentation/concepts/collections/). The `ef`

parameter is configured during [the search](https://qdrant.tech/documentation/concepts/search/) and by default is equal to `ef_construct`

.

HNSW is chosen for several reasons.
First, HNSW is well-compatible with the modification that allows Qdrant to use filters during a search.
Second, it is one of the most accurate and fastest algorithms, according to [public benchmarks](https://github.com/erikbern/ann-benchmarks).

*Available as of v1.1.1*

The HNSW parameters can also be configured on a collection and named vector
level by setting [ hnsw_config](https://qdrant.tech/documentation/concepts/indexing/#vector-index) to fine-tune search
performance.

### Filterable HNSW Index

Separately, a payload index and a vector index cannot completely address the challenges of filtered search.

In the case of high-selectivity (weak) filters, you can use the HNSW index as it is. In the case of low-selectivity (strict) filters, you can use the payload index and do a complete rescore. However, for cases in the middle, this approach does not work well. On one hand, we cannot apply a full scan on too many vectors. On the other hand, the HNSW graph starts to fall apart when using filters that are too strict.

Qdrant solves this problem by extending the HNSW graph with additional edges based on indexed payload values.
Extra edges allow you to efficiently search for nearby vectors using the HNSW index and apply filters as you search in the graph.
You can find more information on this approach in our [article](https://qdrant.tech/articles/filterable-hnsw/).

#### The ACORN Search Algorithm

*Available as of v1.16.0*

In some cases, the additional edges built for Qdrant’s filterable HNSW may not be sufficient.
These extra edges are added for each payload index separately, but not for every possible combination of payload indices.
As a result, a combination of two or more strict filters might still lead to disconnected graph components.
The same can happen when there are a large number of soft-deleted points in the graph.
In such cases, use the [ACORN Search Algorithm](https://qdrant.tech/documentation/concepts/search/#acorn-search-algorithm).
When using ACORN, during graph traversal, it explores not just direct neighbors (first hop), but also neighbors of neighbors (second hop) when direct neighbors are filtered out. This improves search accuracy at the cost of performance.

#### Disable the Creation of Extra Edges for Payload Fields

*Available as of v1.17.0*

Not all payload indices may be intended for use with dense vector search. For example, when a collection contains both dense and sparse vectors, some payload fields may only be used to filter sparse vector searches. Since sparse vector search does not use the HNSW index, it is unnecessary to build extra edges in the HNSW graph for these fields. Creating extra edges adds indexing latency and increases the size of the HNSW graph, which consumes memory as well as disk space, so you may want to disable it for fields that do not require it.

You can disable the creation of extra edges for an indexed payload field by setting `enable_hnsw`

to `false`

when configuring a payload index:

```
PUT /collections/{collection_name}/index
{
"field_name": "name_of_the_field_to_index",
"field_schema": {
"type": "keyword",
"enable_hnsw": false
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_payload_index(
collection_name="{collection_name}",
field_name="name_of_the_field_to_index",
field_schema=models.TextIndexParams(
type=models.TextIndexType.TEXT,
tokenizer=models.TokenizerType.WORD,
enable_hnsw=False,
),
)
```


```
client.createPayloadIndex("{collection_name}", {
field_name: "name_of_the_field_to_index",
field_schema: {
type: "keyword",
enable_hnsw: false,
},
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder, FieldType, KeywordIndexParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"name_of_the_field_to_index",
FieldType::Keyword,
)
.field_index_params(KeywordIndexParamsBuilder::default().enable_hnsw(false)),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.KeywordIndexParams;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"name_of_the_field_to_index",
PayloadSchemaType.Keyword,
PayloadIndexParams.newBuilder()
.setKeywordIndexParams(
KeywordIndexParams.newBuilder()
.setEnableHnsw(false)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "name_of_the_field_to_index",
schemaType: PayloadSchemaType.Keyword,
indexParams: new PayloadIndexParams
{
KeywordIndexParams = new KeywordIndexParams
{
EnableHnsw = false
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "name_of_the_field_to_index",
FieldType: qdrant.FieldType_FieldTypeKeyword.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsKeyword(
&qdrant.KeywordIndexParams{
EnableHnsw: qdrant.PtrOf(false),
}),
})
```


## Sparse Vector Index

*Available as of v1.7.0*

Sparse vectors in Qdrant are indexed with a special data structure, which is optimized for vectors that have a high proportion of zeroes. In some ways, this indexing method is similar to the inverted index, which is used in text search engines.

- A sparse vector index in Qdrant is exact, meaning it does not use any approximation algorithms.
- All sparse vectors added to the collection are immediately indexed in the mutable version of a sparse index.

With Qdrant, you can benefit from a more compact and efficient immutable sparse index, which is constructed during the same optimization process as the dense vector index.

This approach is particularly useful for collections storing both dense and sparse vectors.

To configure a sparse vector index, create a collection with the following parameters:

```
PUT /collections/{collection_name}
{
"sparse_vectors": {
"text": {
"index": {
"on_disk": false
}
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config={},
sparse_vectors_config={
"text": models.SparseVectorParams(
index=models.SparseIndexParams(on_disk=False),
)
},
)
```


```
import { QdrantClient, Schemas } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
sparse_vectors: {
"splade-model-name": {
index: {
on_disk: false
}
}
}
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, SparseIndexConfigBuilder, SparseVectorParamsBuilder,
SparseVectorsConfigBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let mut sparse_vectors_config = SparseVectorsConfigBuilder::default();
sparse_vectors_config.add_named_vector_params(
"splade-model-name",
SparseVectorParamsBuilder::default()
.index(SparseIndexConfigBuilder::default().on_disk(true)),
);
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.sparse_vectors_config(sparse_vectors_config),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections;
QdrantClient client = new QdrantClient(
QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.createCollectionAsync(
Collections.CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setSparseVectorsConfig(
Collections.SparseVectorConfig.newBuilder().putMap(
"splade-model-name",
Collections.SparseVectorParams.newBuilder()
.setIndex(
Collections.SparseIndexConfig
.newBuilder()
.setOnDisk(false)
.build()
).build()
).build()
).build()
).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
sparseVectorsConfig: ("splade-model-name", new SparseVectorParams{
Index = new SparseIndexConfig {
OnDisk = false,
}
})
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
SparseVectorsConfig: qdrant.NewSparseVectorsConfig(
map[string]*qdrant.SparseVectorParams{
"splade-model-name": {
Index: &qdrant.SparseIndexConfig{
OnDisk: qdrant.PtrOf(false),
}},
}),
})
```


The following parameters may affect performance:

`on_disk: true`

- The index is stored on disk, which lets you save memory. This may slow down search performance.`on_disk: false`

- The index is still persisted on disk, but it is also loaded into memory for faster search.

Unlike a dense vector index, a sparse vector index does not require a predefined vector size. It automatically adjusts to the size of the vectors added to the collection.

**Note:** A sparse vector index only supports dot-product similarity searches. It does not support other distance metrics.

### IDF Modifier

*Available as of v1.10.0*

For many search algorithms, it is important to consider how often an item occurs in a collection. Intuitively speaking, the less frequently an item appears in a collection, the more important it is in a search.

This is also known as the Inverse Document Frequency (IDF). It is used in text search engines to rank search results based on the rarity of a word in a collection.

IDF depends on the currently stored documents and therefore can’t be pre-computed in the sparse vectors in streaming inference mode. In order to support IDF in the sparse vector index, Qdrant provides an option to modify the sparse vector query with the IDF statistics automatically.

The only requirement is to enable the IDF modifier in the collection configuration:

```
PUT /collections/{collection_name}
{
"sparse_vectors": {
"text": {
"modifier": "idf"
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config={},
sparse_vectors_config={
"text": models.SparseVectorParams(
modifier=models.Modifier.IDF,
),
},
)
```


```
import { QdrantClient, Schemas } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
sparse_vectors: {
"text": {
modifier: "idf"
}
}
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Modifier, SparseVectorParamsBuilder, SparseVectorsConfigBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let mut sparse_vectors_config = SparseVectorsConfigBuilder::default();
sparse_vectors_config.add_named_vector_params(
"text",
SparseVectorParamsBuilder::default().modifier(Modifier::Idf),
);
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.sparse_vectors_config(sparse_vectors_config),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Modifier;
import io.qdrant.client.grpc.Collections.SparseVectorConfig;
import io.qdrant.client.grpc.Collections.SparseVectorParams;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setSparseVectorsConfig(
SparseVectorConfig.newBuilder()
.putMap("text", SparseVectorParams.newBuilder().setModifier(Modifier.Idf).build()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
sparseVectorsConfig: ("text", new SparseVectorParams {
Modifier = Modifier.Idf,
})
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
SparseVectorsConfig: qdrant.NewSparseVectorsConfig(
map[string]*qdrant.SparseVectorParams{
"text": {
Modifier: qdrant.Modifier_Idf.Enum(),
},
}),
})
```


Qdrant uses the following formula to calculate the IDF modifier:

$$ \text{IDF}(q_i) = \ln \left(\frac{N - n(q_i) + 0.5}{n(q_i) + 0.5}+1\right) $$

Where:

`N`

is the total number of documents in the collection.`n`

is the number of documents containing non-zero values for the given vector element.

---

## Source: https://qdrant.tech/documentation/manage-data/quantization/

# Quantization

Quantization is an optional feature in Qdrant that enables efficient storage and search of high-dimensional vectors. By transforming original vectors into a new representations, quantization compresses data while preserving close to original relative distances between vectors. Different quantization methods have different mechanics and tradeoffs. We will cover them in this section.

Quantization is primarily used to reduce the memory footprint and accelerate the search process in high-dimensional vector spaces. In the context of the Qdrant, quantization allows you to optimize the search engine for specific use cases, striking a balance between accuracy, storage efficiency, and search speed.

There are tradeoffs associated with quantization. On the one hand, quantization allows for significant reductions in storage requirements and faster search times. This can be particularly beneficial in large-scale applications where minimizing the use of resources is a top priority. On the other hand, quantization introduces an approximation error, which can lead to a slight decrease in search quality. The level of this tradeoff depends on the quantization method and its parameters, as well as the characteristics of the data.

## Scalar Quantization

*Available as of v1.1.0*

Scalar quantization, in the context of vector search engines, is a compression technique that compresses vectors by reducing the number of bits used to represent each vector component.

For instance, Qdrant uses 32-bit floating numbers to represent the original vector components. Scalar quantization allows you to reduce the number of bits used to 8.
In other words, Qdrant performs `float32 -> uint8`

conversion for each vector component.
Effectively, this means that the amount of memory required to store a vector is reduced by a factor of 4.

In addition to reducing the memory footprint, scalar quantization also speeds up the search process.
Qdrant uses a special SIMD CPU instruction to perform fast vector comparison.
This instruction works with 8-bit integers, so the conversion to `uint8`

allows Qdrant to perform the comparison faster.

The main drawback of scalar quantization is the loss of accuracy. The `float32 -> uint8`

conversion introduces an error that can lead to a slight decrease in search quality.
However, this error is usually negligible, and tends to be less significant for high-dimensional vectors.
In our experiments, we found that the error introduced by scalar quantization is usually less than 1%.

However, this value depends on the data and the quantization parameters.
Please refer to the [Quantization Tips](#quantization-tips) section for more information on how to optimize the quantization parameters for your use case.

## Binary Quantization

*Available as of v1.5.0*

Binary quantization is an extreme case of scalar quantization.
This feature lets you represent each vector component as a single bit, effectively reducing the memory footprint by a **factor of 32**.

This is the fastest quantization method, since it lets you perform a vector comparison with a few CPU instructions.

Binary quantization can achieve up to a **40x** speedup compared to the original vectors.

However, binary quantization is only efficient for high-dimensional vectors and require a centered distribution of vector components.

At the moment, binary quantization shows good accuracy results with the following models:

- OpenAI
`text-embedding-ada-002`

- 1536d tested with[dbpedia dataset](https://huggingface.co/datasets/KShivendu/dbpedia-entities-openai-1M)achieving 0.98 recall@100 with 4x oversampling - Cohere AI
`embed-english-v2.0`

- 4096d tested on Wikipedia embeddings - 0.98 recall@50 with 2x oversampling

Models with a lower dimensionality or a different distribution of vector components may require additional experiments to find the optimal quantization parameters.

We recommend using binary quantization only with rescoring enabled, as it can significantly improve the search quality with just a minor performance impact. Additionally, oversampling can be used to tune the tradeoff between search speed and search quality in the query time.

### Binary Quantization as Hamming Distance

The additional benefit of this method is that you can efficiently emulate Hamming distance with dot product.

Specifically, if original vectors contain `{-1, 1}`

as possible values, then the dot product of two vectors is equal to the Hamming distance by simply replacing `-1`

with `0`

and `1`

with `1`

.

**Sample truth table**

| Vector 1 | Vector 2 | Dot product |
|---|---|---|
| 1 | 1 | 1 |
| 1 | -1 | -1 |
| -1 | 1 | -1 |
| -1 | -1 | 1 |

| Vector 1 | Vector 2 | Hamming distance |
|---|---|---|
| 1 | 1 | 0 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 0 | 0 | 0 |

As you can see, both functions are equal up to a constant factor, which makes similarity search equivalent. Binary quantization makes it efficient to compare vectors using this representation.

### 1.5-Bit and 2-Bit Quantization

*Available as of v1.15.0*

**Binary quantization** storage can use **2 and 1.5 bits** per dimension, improving precision for smaller vectors. One-bit compression resulted in significant data loss and precision drops for vectors smaller than a thousand dimensions, often requiring expensive rescoring. 2-bit quantization offers 16X compression compared to 32X with one bit, improving performance for smaller vector dimensions. The 1.5-bit quantization compression offers 24X compression and intermediate accuracy.

A major limitation of binary quantization is poor handling of values close to zero. 2-bit quantization addresses this by explicitly representing zeros using an efficient scoring mechanism. In the case of 1.5-bit quantization, the zero-bit is shared between two values, balancing the efficiency of binary quantization with the accuracy improvements of 2-bit quantization, especially when 2-bit BQ requires too much memory.

In order to build 2-bit representation, Qdrant computes values distribution and then assigns bit values to 3 possible buckets:

`-1`

- 00`0`

- 01`1`

- 11

1.5-bit quantization is similar, but merges buckets of pairs of elements into a binary triptets

See how to set up 1.5-bit and 2-bit quantization in the [following section](#set-up-bit-depth).

### Asymmetric Quantization

*Available as of v1.15.0*

The **Asymmetric Quantization** technique allows qdrant to use different vector encoding algorithm for stored vectors and for queries.
Particularly interesting combination is a Binary stored vectors and Scalar quantized queries.

This approach maintains storage size and RAM usage similar to binary quantization while offering improved precision. It is beneficial for memory-constrained deployments, or where the bottleneck is disk I/O rather than CPU. This is particularly useful for indexing millions of vectors as it improves precision without sacrificing much because the limitation in such scenarios is disk speed, not CPU. This approach requires less rescoring for the same quality output.

See how to set up Asymmetric Quantization quantization in the [following section](#set-up-asymmetric-quantization)

## Product Quantization

*Available as of v1.2.0*

Product quantization is a method of compressing vectors to minimize their memory usage by dividing them into chunks and quantizing each segment individually. Each chunk is approximated by a centroid index that represents the original vector component. The positions of the centroids are determined through the utilization of a clustering algorithm such as k-means. For now, Qdrant uses only 256 centroids, so each centroid index can be represented by a single byte.

Product quantization can compress by a more prominent factor than a scalar one. But there are some tradeoffs. Product quantization distance calculations are not SIMD-friendly, so it is slower than scalar quantization. Also, product quantization has a loss of accuracy, so it is recommended to use it only for high-dimensional vectors.

Please refer to the [Quantization Tips](#quantization-tips) section for more information on how to optimize the quantization parameters for your use case.

## How to choose the right quantization method

Here is a brief table of the pros and cons of each quantization method:

| Quantization method | Accuracy | Speed | Compression |
|---|---|---|---|
| Scalar | 0.99 | up to x2 | 4 |
| Product | 0.7 | 0.5 | up to 64 |
| Binary (1 bit) | 0.95* | up to x40 | 32 |
| Binary (1.5 bit) | 0.95** | up to x30 | 24 |
| Binary (2 bit) | 0.95*** | up to x20 | 16 |

`*`

- for compatible models with high-dimensional vectors (approx. 1536+ dimensions)`**`

- for compatible models with medium-dimensional vectors (approx. 1024-1536 dimensions)`***`

- for compatible models with low-dimensional vectors (approx. 768-1024 dimensions)**Binary Quantization**is the fastest method and the most memory-efficient, but it requires a centered distribution of vector components. It is recommended to use with tested models only.- If you are planning to use binary quantization with low or medium-dimensional vectors (approx. 512-1024 dimensions), it is recommended to use 1.5-bit or 2-bit quantization as well as asymmetric quantization feature.

**Scalar Quantization**is the most universal method, as it provides a good balance between accuracy, speed, and compression. It is recommended as default quantization if binary quantization is not applicable.**Product Quantization**may provide a better compression ratio, but it has a significant loss of accuracy and is slower than scalar quantization. It is recommended if the memory footprint is the top priority and the search speed is not critical.

## Setting up Quantization in Qdrant

You can configure quantization for a collection by specifying the quantization parameters in the `quantization_config`

section of the collection configuration.

Quantization will be automatically applied to all vectors during the indexation process. Quantized vectors are stored alongside the original vectors in the collection, so you will still have access to the original vectors if you need them.

*Available as of v1.1.1*

The `quantization_config`

can also be set on a per vector basis by specifying it in a named vector.

### Setting up Scalar Quantization

To enable scalar quantization, you need to specify the quantization parameters in the `quantization_config`

section of the collection configuration.

When enabling scalar quantization on an existing collection, use a PATCH request or the corresponding `update_collection`

method and omit the vector configuration, as it’s already defined.

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 768,
"distance": "Cosine"
},
"quantization_config": {
"scalar": {
"type": "int8",
"quantile": 0.99,
"always_ram": true
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
quantization_config=models.ScalarQuantization(
scalar=models.ScalarQuantizationConfig(
type=models.ScalarType.INT8,
quantile=0.99,
always_ram=True,
),
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 768,
distance: "Cosine",
},
quantization_config: {
scalar: {
type: "int8",
quantile: 0.99,
always_ram: true,
},
},
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, QuantizationType, ScalarQuantizationBuilder,
VectorParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(768, Distance::Cosine))
.quantization_config(
ScalarQuantizationBuilder::default()
.r#type(QuantizationType::Int8.into())
.quantile(0.99)
.always_ram(true),
),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.QuantizationConfig;
import io.qdrant.client.grpc.Collections.QuantizationType;
import io.qdrant.client.grpc.Collections.ScalarQuantization;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParams(
VectorParams.newBuilder()
.setSize(768)
.setDistance(Distance.Cosine)
.build())
.build())
.setQuantizationConfig(
QuantizationConfig.newBuilder()
.setScalar(
ScalarQuantization.newBuilder()
.setType(QuantizationType.Int8)
.setQuantile(0.99f)
.setAlwaysRam(true)
.build())
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine },
quantizationConfig: new QuantizationConfig
{
Scalar = new ScalarQuantization
{
Type = QuantizationType.Int8,
Quantile = 0.99f,
AlwaysRam = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 768,
Distance: qdrant.Distance_Cosine,
}),
QuantizationConfig: qdrant.NewQuantizationScalar(
&qdrant.ScalarQuantization{
Type: qdrant.QuantizationType_Int8,
Quantile: qdrant.PtrOf(float32(0.99)),
AlwaysRam: qdrant.PtrOf(true),
},
),
})
```


There are 3 parameters that you can specify in the `quantization_config`

section:

`type`

- the type of the quantized vector components. Currently, Qdrant supports only `int8`

.

`quantile`

- the quantile of the quantized vector components.
The quantile is used to calculate the quantization bounds.
For instance, if you specify `0.99`

as the quantile, 1% of extreme values will be excluded from the quantization bounds.

Using quantiles lower than `1.0`

might be useful if there are outliers in your vector components.
This parameter only affects the resulting precision and not the memory footprint.
It might be worth tuning this parameter if you experience a significant decrease in search quality.

`always_ram`

- whether to keep quantized vectors always cached in RAM or not. By default, quantized vectors are loaded in the same way as the original vectors.
However, in some setups you might want to keep quantized vectors in RAM to speed up the search process.

In this case, you can set `always_ram`

to `true`

to store quantized vectors in RAM.

### Setting up Binary Quantization

To enable binary quantization, you need to specify the quantization parameters in the `quantization_config`

section of the collection configuration.

When enabling binary quantization on an existing collection, use a PATCH request or the corresponding `update_collection`

method and omit the vector configuration, as it’s already defined.

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 1536,
"distance": "Cosine"
},
"quantization_config": {
"binary": {
"always_ram": true
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(size=1536, distance=models.Distance.COSINE),
quantization_config=models.BinaryQuantization(
binary=models.BinaryQuantizationConfig(
always_ram=True,
),
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 1536,
distance: "Cosine",
},
quantization_config: {
binary: {
always_ram: true,
},
},
});
```


```
use qdrant_client::qdrant::{
BinaryQuantizationBuilder, CreateCollectionBuilder, Distance, VectorParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(1536, Distance::Cosine))
.quantization_config(BinaryQuantizationBuilder::new(true)),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.BinaryQuantization;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.QuantizationConfig;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParams(
VectorParams.newBuilder()
.setSize(1536)
.setDistance(Distance.Cosine)
.build())
.build())
.setQuantizationConfig(
QuantizationConfig.newBuilder()
.setBinary(BinaryQuantization.newBuilder().setAlwaysRam(true).build())
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 1536, Distance = Distance.Cosine },
quantizationConfig: new QuantizationConfig
{
Binary = new BinaryQuantization { AlwaysRam = true }
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 1536,
Distance: qdrant.Distance_Cosine,
}),
QuantizationConfig: qdrant.NewQuantizationBinary(
&qdrant.BinaryQuantization{
AlwaysRam: qdrant.PtrOf(true),
},
),
})
```


`always_ram`

- whether to keep quantized vectors always cached in RAM or not. By default, quantized vectors are loaded in the same way as the original vectors.
However, in some setups you might want to keep quantized vectors in RAM to speed up the search process.

In this case, you can set `always_ram`

to `true`

to store quantized vectors in RAM.

#### Set up bit depth

To enable 2bit or 1.5bit quantization, you need to specify `encoding`

parameter in the `quantization_config`

section of the collection configuration. Available values are `two_bits`

and `one_and_half_bits`

.

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 1536,
"distance": "Cosine"
},
"quantization_config": {
"binary": {
"encoding": "two_bits",
"always_ram": true
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(size=1536, distance=models.Distance.COSINE),
quantization_config=models.BinaryQuantization(
binary=models.BinaryQuantizationConfig(
encoding=models.BinaryQuantizationEncoding.TWO_BITS,
always_ram=True,
),
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 1536,
distance: "Cosine",
},
quantization_config: {
binary: {
encoding: "two_bits",
always_ram: true,
},
},
});
```


```
use qdrant_client::qdrant::{
BinaryQuantizationBuilder,
CreateCollectionBuilder,
Distance,
VectorParamsBuilder,
BinaryQuantizationEncoding,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(1536, Distance::Cosine))
.quantization_config(BinaryQuantizationBuilder::new(true)
.encoding(BinaryQuantizationEncoding::TwoBits)
),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.BinaryQuantization;
import io.qdrant.client.grpc.Collections.BinaryQuantizationEncoding;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.QuantizationConfig;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParams(
VectorParams.newBuilder()
.setSize(1536)
.setDistance(Distance.Cosine)
.build())
.build())
.setQuantizationConfig(
QuantizationConfig.newBuilder()
.setBinary(BinaryQuantization
.newBuilder()
.setEncoding(BinaryQuantizationEncoding.TwoBits)
.setAlwaysRam(true)
.build())
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 1536, Distance = Distance.Cosine },
quantizationConfig: new QuantizationConfig
{
Binary = new BinaryQuantization {
Encoding = BinaryQuantizationEncoding.TwoBits,
AlwaysRam = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 1536,
Distance: qdrant.Distance_Cosine,
}),
QuantizationConfig: qdrant.NewQuantizationBinary(
&qdrant.BinaryQuantization{
Encoding: qdrant.BinaryQuantizationEncoding_TwoBits.Enum(),
AlwaysRam: qdrant.PtrOf(true),
},
),
})
```


#### Set up asymmetric quantization

To enable asymmetric quantization, you need to specify `query_encoding`

parameter in the `quantization_config`

section of the collection configuration. Available values are:

`default`

and`binary`

- use regular binary quantization for the query.`scalar8bits`

- use 8bit quantization for the query.`scalar4bits`

- use 4bit quantization for the query.

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 1536,
"distance": "Cosine"
},
"quantization_config": {
"binary": {
"query_encoding": "scalar8bits",
"always_ram": true
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(size=1536, distance=models.Distance.COSINE),
quantization_config=models.BinaryQuantization(
binary=models.BinaryQuantizationConfig(
query_encoding=models.BinaryQuantizationQueryEncoding.SCALAR8BITS,
always_ram=True,
),
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 1536,
distance: "Cosine",
},
quantization_config: {
binary: {
query_encoding: "scalar8bits",
always_ram: true,
},
},
});
```


```
use qdrant_client::qdrant::{
BinaryQuantizationBuilder,
CreateCollectionBuilder,
Distance,
VectorParamsBuilder,
BinaryQuantizationQueryEncoding,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(1536, Distance::Cosine))
.quantization_config(
BinaryQuantizationBuilder::new(true)
.query_encoding(BinaryQuantizationQueryEncoding::scalar8bits())
),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.BinaryQuantization;
import io.qdrant.client.grpc.Collections.BinaryQuantizationQueryEncoding;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.QuantizationConfig;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParams(
VectorParams.newBuilder()
.setSize(1536)
.setDistance(Distance.Cosine)
.build())
.build())
.setQuantizationConfig(
QuantizationConfig.newBuilder()
.setBinary(BinaryQuantization.newBuilder()
.setQueryEncoding(BinaryQuantizationQueryEncoding
.newBuilder()
.setSetting(BinaryQuantizationQueryEncoding.Setting.Scalar8Bits)
.build())
.setAlwaysRam(true)
.build())
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 1536, Distance = Distance.Cosine },
quantizationConfig: new QuantizationConfig
{
Binary = new BinaryQuantization {
QueryEncoding = new BinaryQuantizationQueryEncoding
{
Setting = BinaryQuantizationQueryEncoding.Types.Setting.Scalar8Bits,
},
AlwaysRam = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 1536,
Distance: qdrant.Distance_Cosine,
}),
QuantizationConfig: qdrant.NewQuantizationBinary(
&qdrant.BinaryQuantization{
QueryEncoding: qdrant.NewBinaryQuantizationQueryEncodingSetting(qdrant.BinaryQuantizationQueryEncoding_Scalar8Bits),
AlwaysRam: qdrant.PtrOf(true),
},
),
})
```


### Setting up Product Quantization

To enable product quantization, you need to specify the quantization parameters in the `quantization_config`

section of the collection configuration.

When enabling product quantization on an existing collection, use a PATCH request or the corresponding `update_collection`

method and omit the vector configuration, as it’s already defined.

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 768,
"distance": "Cosine"
},
"quantization_config": {
"product": {
"compression": "x16",
"always_ram": true
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
quantization_config=models.ProductQuantization(
product=models.ProductQuantizationConfig(
compression=models.CompressionRatio.X16,
always_ram=True,
),
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 768,
distance: "Cosine",
},
quantization_config: {
product: {
compression: "x16",
always_ram: true,
},
},
});
```


```
use qdrant_client::qdrant::{
CompressionRatio, CreateCollectionBuilder, Distance, ProductQuantizationBuilder,
VectorParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(768, Distance::Cosine))
.quantization_config(
ProductQuantizationBuilder::new(CompressionRatio::X16.into()).always_ram(true),
),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CompressionRatio;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.ProductQuantization;
import io.qdrant.client.grpc.Collections.QuantizationConfig;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParams(
VectorParams.newBuilder()
.setSize(768)
.setDistance(Distance.Cosine)
.build())
.build())
.setQuantizationConfig(
QuantizationConfig.newBuilder()
.setProduct(
ProductQuantization.newBuilder()
.setCompression(CompressionRatio.x16)
.setAlwaysRam(true)
.build())
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine },
quantizationConfig: new QuantizationConfig
{
Product = new ProductQuantization { Compression = CompressionRatio.X16, AlwaysRam = true }
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 768,
Distance: qdrant.Distance_Cosine,
}),
QuantizationConfig: qdrant.NewQuantizationProduct(
&qdrant.ProductQuantization{
Compression: qdrant.CompressionRatio_x16,
AlwaysRam: qdrant.PtrOf(true),
},
),
})
```


There are two parameters that you can specify in the `quantization_config`

section:

`compression`

- compression ratio.
Compression ratio represents the size of the quantized vector in bytes divided by the size of the original vector in bytes.
In this case, the quantized vector will be 16 times smaller than the original vector.

`always_ram`

- whether to keep quantized vectors always cached in RAM or not. By default, quantized vectors are loaded in the same way as the original vectors.
However, in some setups you might want to keep quantized vectors in RAM to speed up the search process. Then set `always_ram`

to `true`

.

### Disabling Quantization

To disable quantization in an existing collection, you can do the following:

```
PATCH /collections/{collection_name}
{
"quantization_config": "Disabled"
}
```


```
curl -X PATCH http://localhost:6333/collections/{collection_name} \
-H 'Content-Type: application/json' \
--data-raw '{
"quantization_config": "Disabled"
}'
```


```
client.update_collection(
collection_name="{collection_name}",
quantization_config=models.Disabled.DISABLED,
)
```


```
client.updateCollection("{collection_name}", {
quantization_config: 'Disabled'
});
```


```
use qdrant_client::qdrant::{Disabled, UpdateCollectionBuilder};
client
.update_collection(UpdateCollectionBuilder::new("{collection_name}").quantization_config(Disabled {}))
.await?;
```


```
import io.qdrant.client.grpc.Collections.Disabled;
import io.qdrant.client.grpc.Collections.QuantizationConfigDiff;
import io.qdrant.client.grpc.Collections.UpdateCollection;
client.updateCollectionAsync(
UpdateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setQuantizationConfig(
QuantizationConfigDiff.newBuilder()
.setDisabled(Disabled.getDefaultInstance())
.build())
.build());
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpdateCollectionAsync(
collectionName: "{collection_name}",
quantizationConfig: new QuantizationConfigDiff { Disabled = new Disabled() }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.UpdateCollection(context.Background(), &qdrant.UpdateCollection{
CollectionName: "{collection_name}",
QuantizationConfig: qdrant.NewQuantizationDiffDisabled(),
})
```


### Searching with Quantization

Once you have configured quantization for a collection, you don’t need to do anything extra to search with quantization. Qdrant will automatically use quantized vectors if they are available.

However, there are a few options that you can use to control the search process:

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.7],
"params": {
"quantization": {
"ignore": false,
"rescore": true,
"oversampling": 2.0
}
},
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7],
search_params=models.SearchParams(
quantization=models.QuantizationSearchParams(
ignore=False,
rescore=True,
oversampling=2.0,
)
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7],
params: {
quantization: {
ignore: false,
rescore: true,
oversampling: 2.0,
},
},
limit: 10,
});
```


```
use qdrant_client::qdrant::{
QuantizationSearchParamsBuilder, QueryPointsBuilder, SearchParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.2, 0.1, 0.9, 0.7])
.limit(10)
.params(
SearchParamsBuilder::default().quantization(
QuantizationSearchParamsBuilder::default()
.ignore(false)
.rescore(true)
.oversampling(2.0),
),
),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QuantizationSearchParams;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.SearchParams;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setParams(
SearchParams.newBuilder()
.setQuantization(
QuantizationSearchParams.newBuilder()
.setIgnore(false)
.setRescore(true)
.setOversampling(2.0)
.build())
.build())
.setLimit(10)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
searchParams: new SearchParams
{
Quantization = new QuantizationSearchParams
{
Ignore = false,
Rescore = true,
Oversampling = 2.0
}
},
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
Params: &qdrant.SearchParams{
Quantization: &qdrant.QuantizationSearchParams{
Ignore: qdrant.PtrOf(false),
Rescore: qdrant.PtrOf(true),
Oversampling: qdrant.PtrOf(2.0),
},
},
})
```


`ignore`

- Toggle whether to ignore quantized vectors during the search process. By default, Qdrant will use quantized vectors if they are available.

`rescore`

- Having the original vectors available, Qdrant can re-evaluate top-k search results using the original vectors.
This can improve the search quality, but may slightly decrease the search speed, compared to the search without rescore.
It is recommended to disable rescore only if the original vectors are stored on a slow storage (e.g. HDD or network storage).
By default, rescore is enabled.

**Available as of v1.3.0**

`oversampling`

- Defines how many extra vectors should be pre-selected using quantized index, and then re-scored using original vectors.
For example, if oversampling is 2.4 and limit is 100, then 240 vectors will be pre-selected using quantized index, and then top-100 will be returned after re-scoring.
Oversampling is useful if you want to tune the tradeoff between search speed and search quality in the query time.

## Quantization tips

#### Accuracy tuning

In this section, we will discuss how to tune the search precision. The fastest way to understand the impact of quantization on the search quality is to compare the search results with and without quantization.

In order to disable quantization, you can set `ignore`

to `true`

in the search request:

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.7],
"params": {
"quantization": {
"ignore": true
}
},
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7],
search_params=models.SearchParams(
quantization=models.QuantizationSearchParams(
ignore=True,
)
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7],
params: {
quantization: {
ignore: true,
},
},
});
```


```
use qdrant_client::qdrant::{
QuantizationSearchParamsBuilder, QueryPointsBuilder, SearchParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.2, 0.1, 0.9, 0.7])
.limit(3)
.params(
SearchParamsBuilder::default()
.quantization(QuantizationSearchParamsBuilder::default().ignore(true)),
),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QuantizationSearchParams;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.SearchParams;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setParams(
SearchParams.newBuilder()
.setQuantization(
QuantizationSearchParams.newBuilder().setIgnore(true).build())
.build())
.setLimit(10)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
searchParams: new SearchParams
{
Quantization = new QuantizationSearchParams { Ignore = true }
},
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
Params: &qdrant.SearchParams{
Quantization: &qdrant.QuantizationSearchParams{
Ignore: qdrant.PtrOf(false),
},
},
})
```


**Adjust the quantile parameter**: The quantile parameter in scalar quantization determines the quantization bounds. By setting it to a value lower than 1.0, you can exclude extreme values (outliers) from the quantization bounds. For example, if you set the quantile to 0.99, 1% of the extreme values will be excluded. By adjusting the quantile, you find an optimal value that will provide the best search quality for your collection.**Enable rescore**: Having the original vectors available, Qdrant can re-evaluate top-k search results using the original vectors. On large collections, this can improve the search quality, with just minor performance impact.

#### Memory and speed tuning

In this section, we will discuss how to tune the memory and speed of the search process with quantization.

There are 3 possible modes to place storage of vectors within the qdrant collection:

**All in RAM**- all vector, original and quantized, are loaded and kept in RAM. This is the fastest mode, but requires a lot of RAM. Enabled by default.**Original on Disk, quantized in RAM**- this is a hybrid mode, allows to obtain a good balance between speed and memory usage. Recommended scenario if you are aiming to shrink the memory footprint while keeping the search speed.

This mode is enabled by setting `always_ram`

to `true`

in the quantization config while using memmap storage:

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 768,
"distance": "Cosine",
"on_disk": true
},
"quantization_config": {
"scalar": {
"type": "int8",
"always_ram": true
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE, on_disk=True),
quantization_config=models.ScalarQuantization(
scalar=models.ScalarQuantizationConfig(
type=models.ScalarType.INT8,
always_ram=True,
),
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 768,
distance: "Cosine",
on_disk: true,
},
quantization_config: {
scalar: {
type: "int8",
always_ram: true,
},
},
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, QuantizationType, ScalarQuantizationBuilder,
VectorParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(768, Distance::Cosine))
.quantization_config(
ScalarQuantizationBuilder::default()
.r#type(QuantizationType::Int8.into())
.always_ram(true),
),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.OptimizersConfigDiff;
import io.qdrant.client.grpc.Collections.QuantizationConfig;
import io.qdrant.client.grpc.Collections.QuantizationType;
import io.qdrant.client.grpc.Collections.ScalarQuantization;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParams(
VectorParams.newBuilder()
.setSize(768)
.setDistance(Distance.Cosine)
.setOnDisk(true)
.build())
.build())
.setQuantizationConfig(
QuantizationConfig.newBuilder()
.setScalar(
ScalarQuantization.newBuilder()
.setType(QuantizationType.Int8)
.setAlwaysRam(true)
.build())
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine, OnDisk = true },
quantizationConfig: new QuantizationConfig
{
Scalar = new ScalarQuantization { Type = QuantizationType.Int8, AlwaysRam = true }
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 768,
Distance: qdrant.Distance_Cosine,
OnDisk: qdrant.PtrOf(true),
}),
QuantizationConfig: qdrant.NewQuantizationScalar(&qdrant.ScalarQuantization{
Type: qdrant.QuantizationType_Int8,
AlwaysRam: qdrant.PtrOf(true),
}),
})
```


In this scenario, the number of disk reads may play a significant role in the search speed. In a system with high disk latency, the re-scoring step may become a bottleneck.

Consider disabling `rescore`

to improve the search speed:

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.7],
"params": {
"quantization": {
"rescore": false
}
},
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7],
search_params=models.SearchParams(
quantization=models.QuantizationSearchParams(rescore=False)
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7],
params: {
quantization: {
rescore: false,
},
},
});
```


```
use qdrant_client::qdrant::{
QuantizationSearchParamsBuilder, QueryPointsBuilder, SearchParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.2, 0.1, 0.9, 0.7])
.limit(3)
.params(
SearchParamsBuilder::default()
.quantization(QuantizationSearchParamsBuilder::default().rescore(false)),
),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QuantizationSearchParams;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.SearchParams;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setParams(
SearchParams.newBuilder()
.setQuantization(
QuantizationSearchParams.newBuilder().setRescore(false).build())
.build())
.setLimit(3)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
searchParams: new SearchParams
{
Quantization = new QuantizationSearchParams { Rescore = false }
},
limit: 3
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
Params: &qdrant.SearchParams{
Quantization: &qdrant.QuantizationSearchParams{
Rescore: qdrant.PtrOf(false),
},
},
})
```


**All on Disk**- all vectors, original and quantized, are stored on disk. This mode allows to achieve the smallest memory footprint, but at the cost of the search speed.

It is recommended to use this mode if you have a large collection and fast storage (e.g. SSD or NVMe).

This mode is enabled by setting `always_ram`

to `false`

in the quantization config while using mmap storage:

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 768,
"distance": "Cosine",
"on_disk": true
},
"quantization_config": {
"scalar": {
"type": "int8",
"always_ram": false
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE, on_disk=True),
quantization_config=models.ScalarQuantization(
scalar=models.ScalarQuantizationConfig(
type=models.ScalarType.INT8,
always_ram=False,
),
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 768,
distance: "Cosine",
on_disk: true,
},
quantization_config: {
scalar: {
type: "int8",
always_ram: false,
},
},
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, QuantizationType, ScalarQuantizationBuilder,
VectorParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(768, Distance::Cosine).on_disk(true))
.quantization_config(
ScalarQuantizationBuilder::default()
.r#type(QuantizationType::Int8.into())
.always_ram(false),
),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.OptimizersConfigDiff;
import io.qdrant.client.grpc.Collections.QuantizationConfig;
import io.qdrant.client.grpc.Collections.QuantizationType;
import io.qdrant.client.grpc.Collections.ScalarQuantization;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParams(
VectorParams.newBuilder()
.setSize(768)
.setDistance(Distance.Cosine)
.setOnDisk(true)
.build())
.build())
.setQuantizationConfig(
QuantizationConfig.newBuilder()
.setScalar(
ScalarQuantization.newBuilder()
.setType(QuantizationType.Int8)
.setAlwaysRam(false)
.build())
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine, OnDisk = true},
quantizationConfig: new QuantizationConfig
{
Scalar = new ScalarQuantization { Type = QuantizationType.Int8, AlwaysRam = false }
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 768,
Distance: qdrant.Distance_Cosine,
OnDisk: qdrant.PtrOf(true),
}),
QuantizationConfig: qdrant.NewQuantizationScalar(
&qdrant.ScalarQuantization{
Type: qdrant.QuantizationType_Int8,
AlwaysRam: qdrant.PtrOf(false),
},
),
})
```

---

## Source: https://qdrant.tech/documentation/manage-data/multitenancy/

# Configure Multitenancy

**How many collections should you create?** In most cases, a single collection per embedding model with payload-based partitioning for different tenants and use cases. This approach is called multitenancy. It is efficient for most users, but requires additional configuration. This document will show you how to set it up.

**When should you create multiple collections?** When you have a limited number of users and you need isolation. This approach is flexible, but it may be more costly, since creating numerous collections may result in resource overhead. Also, you need to ensure that they do not affect each other in any way, including performance-wise.

## Partition by payload

When an instance is shared between multiple users, you may need to partition vectors by user. This is done so that each user can only access their own vectors and can’t see the vectors of other users.

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"payload": {"group_id": "user_1"},
"vector": [0.9, 0.1, 0.1]
},
{
"id": 2,
"payload": {"group_id": "user_1"},
"vector": [0.1, 0.9, 0.1]
},
{
"id": 3,
"payload": {"group_id": "user_2"},
"vector": [0.1, 0.1, 0.9]
},
]
}
```


```
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
payload={"group_id": "user_1"},
vector=[0.9, 0.1, 0.1],
),
models.PointStruct(
id=2,
payload={"group_id": "user_1"},
vector=[0.1, 0.9, 0.1],
),
models.PointStruct(
id=3,
payload={"group_id": "user_2"},
vector=[0.1, 0.1, 0.9],
),
],
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.upsert("{collection_name}", {
points: [
{
id: 1,
payload: { group_id: "user_1" },
vector: [0.9, 0.1, 0.1],
},
{
id: 2,
payload: { group_id: "user_1" },
vector: [0.1, 0.9, 0.1],
},
{
id: 3,
payload: { group_id: "user_2" },
vector: [0.1, 0.1, 0.9],
},
],
});
```


```
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.upsert_points(UpsertPointsBuilder::new(
"{collection_name}",
vec![
PointStruct::new(1, vec![0.9, 0.1, 0.1], [("group_id", "user_1".into())]),
PointStruct::new(2, vec![0.1, 0.9, 0.1], [("group_id", "user_1".into())]),
PointStruct::new(3, vec![0.1, 0.1, 0.9], [("group_id", "user_2".into())]),
],
))
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.upsertAsync(
"{collection_name}",
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(vectors(0.9f, 0.1f, 0.1f))
.putAllPayload(Map.of("group_id", value("user_1")))
.build(),
PointStruct.newBuilder()
.setId(id(2))
.setVectors(vectors(0.1f, 0.9f, 0.1f))
.putAllPayload(Map.of("group_id", value("user_1")))
.build(),
PointStruct.newBuilder()
.setId(id(3))
.setVectors(vectors(0.1f, 0.1f, 0.9f))
.putAllPayload(Map.of("group_id", value("user_2")))
.build()))
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new[] { 0.9f, 0.1f, 0.1f },
Payload = { ["group_id"] = "user_1" }
},
new()
{
Id = 2,
Vectors = new[] { 0.1f, 0.9f, 0.1f },
Payload = { ["group_id"] = "user_1" }
},
new()
{
Id = 3,
Vectors = new[] { 0.1f, 0.1f, 0.9f },
Payload = { ["group_id"] = "user_2" }
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectors(0.9, 0.1, 0.1),
Payload: qdrant.NewValueMap(map[string]any{"group_id": "user_1"}),
},
{
Id: qdrant.NewIDNum(2),
Vectors: qdrant.NewVectors(0.1, 0.9, 0.1),
Payload: qdrant.NewValueMap(map[string]any{"group_id": "user_1"}),
},
{
Id: qdrant.NewIDNum(3),
Vectors: qdrant.NewVectors(0.1, 0.1, 0.9),
Payload: qdrant.NewValueMap(map[string]any{"group_id": "user_2"}),
},
},
})
```


- Use a filter along with
`group_id`

to filter vectors for each user.

```
POST /collections/{collection_name}/points/query
{
"query": [0.1, 0.1, 0.9],
"filter": {
"must": [
{
"key": "group_id",
"match": {
"value": "user_1"
}
}
]
},
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[0.1, 0.1, 0.9],
query_filter=models.Filter(
must=[
models.FieldCondition(
key="group_id",
match=models.MatchValue(
value="user_1",
),
)
]
),
limit=10,
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.1, 0.1, 0.9],
filter: {
must: [{ key: "group_id", match: { value: "user_1" } }],
},
limit: 10,
});
```


```
use qdrant_client::qdrant::{Condition, Filter, QueryPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.1, 0.1, 0.9])
.limit(10)
.filter(Filter::must([Condition::matches(
"group_id",
"user_1".to_string(),
)])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder().addMust(matchKeyword("group_id", "user_1")).build())
.setQuery(nearest(0.1f, 0.1f, 0.9f))
.setLimit(10)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.1f, 0.1f, 0.9f },
filter: MatchKeyword("group_id", "user_1"),
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.1, 0.1, 0.9),
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("group_id", "user_1"),
},
},
})
```


## Calibrate performance

The speed of indexation may become a bottleneck in this case, as each user’s vector will be indexed into the same collection. To avoid this bottleneck, consider *bypassing the construction of a global vector index* for the entire collection and building it only for individual groups instead.

By adopting this strategy, Qdrant will index vectors for each user independently, significantly accelerating the process.

To implement this approach, you should:

- Set
`payload_m`

in the HNSW configuration to a non-zero value, such as 16. - Set
`m`

in hnsw config to 0. This will disable building global index for the whole collection.

```
PUT /collections/{collection_name}
{
"vectors": {
"size": 768,
"distance": "Cosine"
},
"hnsw_config": {
"payload_m": 16,
"m": 0
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
hnsw_config=models.HnswConfigDiff(
payload_m=16,
m=0,
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
vectors: {
size: 768,
distance: "Cosine",
},
hnsw_config: {
payload_m: 16,
m: 0,
},
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, HnswConfigDiffBuilder, VectorParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(768, Distance::Cosine))
.hnsw_config(HnswConfigDiffBuilder::default().payload_m(16).m(0)),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.HnswConfigDiff;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParams(
VectorParams.newBuilder()
.setSize(768)
.setDistance(Distance.Cosine)
.build())
.build())
.setHnswConfig(HnswConfigDiff.newBuilder().setPayloadM(16).setM(0).build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine },
hnswConfig: new HnswConfigDiff { PayloadM = 16, M = 0 }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
Size: 768,
Distance: qdrant.Distance_Cosine,
}),
HnswConfig: &qdrant.HnswConfigDiff{
PayloadM: qdrant.PtrOf(uint64(16)),
M: qdrant.PtrOf(uint64(0)),
},
})
```


- Create keyword payload index for
`group_id`

field.

```
PUT /collections/{collection_name}/index
{
"field_name": "group_id",
"field_schema": {
"type": "keyword",
"is_tenant": true
}
}
```


```
client.create_payload_index(
collection_name="{collection_name}",
field_name="group_id",
field_schema=models.KeywordIndexParams(
type=models.KeywordIndexType.KEYWORD,
is_tenant=True,
),
)
```


```
client.createPayloadIndex("{collection_name}", {
field_name: "group_id",
field_schema: {
type: "keyword",
is_tenant: true,
},
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder,
KeywordIndexParamsBuilder,
FieldType
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"group_id",
FieldType::Keyword,
).field_index_params(
KeywordIndexParamsBuilder::default()
.is_tenant(true)
)
).await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.KeywordIndexParams;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"group_id",
PayloadSchemaType.Keyword,
PayloadIndexParams.newBuilder()
.setKeywordIndexParams(
KeywordIndexParams.newBuilder()
.setIsTenant(true)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "group_id",
schemaType: PayloadSchemaType.Keyword,
indexParams: new PayloadIndexParams
{
KeywordIndexParams = new KeywordIndexParams
{
IsTenant = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "group_id",
FieldType: qdrant.FieldType_FieldTypeKeyword.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParams(
&qdrant.KeywordIndexParams{
IsTenant: qdrant.PtrOf(true),
}),
})
```


`is_tenant=true`

parameter is optional, but specifying it provides storage with additional information about the usage patterns the collection is going to use.
When specified, storage structure will be organized in a way to co-locate vectors of the same tenant together, which can significantly improve performance by utilizing sequential reads during queries.

### Limitations

One downside to this approach is that global requests (without the `group_id`

filter) will be slower since they will necessitate scanning all groups to identify the nearest neighbors.

## Tiered multitenancy

In some real-world applications, tenants might not be equally distributed. For example, a SaaS application might have a few large customers and many small ones. Large tenants might require extended resources and isolation, while small tenants should not create too much overhead.

One solution to this problem might be to introduce application-level logic to separate tenants into different collections based on their size or resource requirements. There is, however, a downside to this approach: we might not know in advance which tenants will be large and which stay small. In addition, application-level logic increases complexity of the system and requires additional source of truth for tenant placement management.

To address this problem, in v1.16.0 Qdrant provides a built-in mechanism for tiered multitenancy.

With tiered multitenancy, you can implement two levels of tenant isolation within a single collection, keeping small tenants together inside a shared Shard, while isolating large tenants into their own dedicated Shards. There are 3 components in Qdrant, that allows you to implement tiered multitenancy:

allows you to create named Shards within a collection. It allows to isolate large tenants into their own Shards.**User-defined Sharding****Fallback shards**- a special routing mechanism that allows to route request to either a dedicated Shard (if it exists) or to a shared Fallback Shard. It allows to keep requests unified, without the need to know whether a tenant is dedicated or shared.**Tenant promotion**- a mechanism that allows to move tenants from the shared Fallback Shard to their own dedicated Shard when they grow large enough. This process is based on Qdrant’s internal shard transfer mechanism, which makes promotion completely transparent for the application. Both read and write requests are supported during the promotion process.

### Configure tiered multitenancy

To take advantage of tiered multitenancy, you need to create a collection with user-defined (aka `custom`

) sharding and create a Fallback Shard in it.

```
PUT /collections/{collection_name}
{
"shard_number": 1,
"sharding_method": "custom"
// ... other collection parameters
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_collection(
collection_name="{collection_name}",
shard_number=1,
sharding_method=models.ShardingMethod.CUSTOM,
# ... other collection parameters
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createCollection("{collection_name}", {
shard_number: 1,
sharding_method: "custom",
// ... other collection parameters
});
```


```
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, ShardingMethod, VectorParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_collection(
CreateCollectionBuilder::new("{collection_name}")
.vectors_config(VectorParamsBuilder::new(300, Distance::Cosine))
.shard_number(1)
.sharding_method(ShardingMethod::Custom.into()),
)
.await?;
```


```
import static io.qdrant.client.ShardKeyFactory.shardKey;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.ShardingMethod;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("{collection_name}")
// ... other collection parameters
.setShardNumber(1)
.setShardingMethod(ShardingMethod.Custom)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateCollectionAsync(
collectionName: "{collection_name}",
// ... other collection parameters
shardNumber: 1,
shardingMethod: ShardingMethod.Custom
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "{collection_name}",
// ... other collection parameters
ShardNumber: qdrant.PtrOf(uint32(1)),
ShardingMethod: qdrant.ShardingMethod_Custom.Enum(),
})
```


Start with creating a fallback Shard, which will be used to store small tenants.
Let’s name it `default`

.

```
PUT /collections/{collection_name}/shards
{
"shard_key": "default"
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_shard_key("{collection_name}", "default")
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createShardKey("{collection_name}", {
shard_key: "default"
});
```


```
use qdrant_client::qdrant::{
CreateShardKeyBuilder, CreateShardKeyRequestBuilder
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_shard_key(
CreateShardKeyRequestBuilder::new("{collection_name}")
.request(CreateShardKeyBuilder::default().shard_key("default".to_string())),
)
.await?;
```


```
import static io.qdrant.client.ShardKeyFactory.shardKey;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateShardKey;
import io.qdrant.client.grpc.Collections.CreateShardKeyRequest;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.createShardKeyAsync(CreateShardKeyRequest.newBuilder()
.setCollectionName("{collection_name}")
.setRequest(CreateShardKey.newBuilder()
.setShardKey(shardKey("default"))
.build())
.build()).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateShardKeyAsync(
"{collection_name}",
new CreateShardKey { ShardKey = new ShardKey { Keyword = "default", } }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateShardKey(context.Background(), "{collection_name}", &qdrant.CreateShardKey{
ShardKey: qdrant.NewShardKey("default"),
})
```


Since the collection will allow both dedicated and shared tenants, we need still need to configure payload-based tenancy for this collection the same way as described in the [Partition by payload](#partition-by-payload) section above. Namely, we need to create a payload index for the `group_id`

field with `is_tenant=true`

.

```
PUT /collections/{collection_name}/index
{
"field_name": "group_id",
"field_schema": {
"type": "keyword",
"is_tenant": true
}
}
```


```
client.create_payload_index(
collection_name="{collection_name}",
field_name="group_id",
field_schema=models.KeywordIndexParams(
type=models.KeywordIndexType.KEYWORD,
is_tenant=True,
),
)
```


```
client.createPayloadIndex("{collection_name}", {
field_name: "group_id",
field_schema: {
type: "keyword",
is_tenant: true,
},
});
```


```
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder,
KeywordIndexParamsBuilder,
FieldType
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.create_field_index(
CreateFieldIndexCollectionBuilder::new(
"{collection_name}",
"group_id",
FieldType::Keyword,
).field_index_params(
KeywordIndexParamsBuilder::default()
.is_tenant(true)
)
).await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.KeywordIndexParams;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.createPayloadIndexAsync(
"{collection_name}",
"group_id",
PayloadSchemaType.Keyword,
PayloadIndexParams.newBuilder()
.setKeywordIndexParams(
KeywordIndexParams.newBuilder()
.setIsTenant(true)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreatePayloadIndexAsync(
collectionName: "{collection_name}",
fieldName: "group_id",
schemaType: PayloadSchemaType.Keyword,
indexParams: new PayloadIndexParams
{
KeywordIndexParams = new KeywordIndexParams
{
IsTenant = true
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "{collection_name}",
FieldName: "group_id",
FieldType: qdrant.FieldType_FieldTypeKeyword.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParams(
&qdrant.KeywordIndexParams{
IsTenant: qdrant.PtrOf(true),
}),
})
```


### Query tiered multitenant collection

Now we can start uploading data into the collection. One important difference from the simple payload-based multitenancy is that now we need to specify the **Shard Key Selector** in each request to route requests to the correct Shard.

Shard Key Selector will specify two keys:

`target`

shard - name of the tenant’s dedicated Shard (which may or may not exist).`fallback`

shard - name of the shared Fallback Shard (in our case,`default`

).

```
PUT /collections/{collection_name}/points
{
"points": [
{
"id": 1,
"payload": {"group_id": "user_1"},
"vector": [0.9, 0.1, 0.1]
}
],
"shard_key": {
"fallback": "default",
"target": "user_1"
}
}
```


```
client.upsert(
collection_name="{collection_name}",
points=[
models.PointStruct(
id=1,
payload={"group_id": "user_1"},
vector=[0.9, 0.1, 0.1],
),
],
shard_key_selector=models.ShardKeyWithFallback(
target="user_1",
fallback="default"
)
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.upsert("{collection_name}", {
points: [
{
id: 1,
payload: { group_id: "user_1" },
vector: [0.9, 0.1, 0.1],
}
],
shard_key: {
target: "user_1",
fallback: "default"
}
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{PointStruct, ShardKeySelectorBuilder, UpsertPointsBuilder};
let client = Qdrant::from_url("http://localhost:6334").build()?;
let shard_key_selector = ShardKeySelectorBuilder::with_shard_key("user_1")
.fallback("default")
.build();
client
.upsert_points(
UpsertPointsBuilder::new(
"{collection_name}",
vec![
PointStruct::new(
1,
vec![0.9, 0.1, 0.1],
[("group_id", "user_1".into())]
),
],
)
.shard_key_selector(shard_key_selector),
)
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ShardKeyFactory.shardKey;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import io.qdrant.client.grpc.Points.ShardKeySelector;
import io.qdrant.client.grpc.Points.UpsertPoints;
import java.util.List;
import java.util.Map;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.upsertAsync(
UpsertPoints.newBuilder()
.setCollectionName("{collection_name}")
.addAllPoints(
List.of(
PointStruct.newBuilder()
.setId(id(1))
.setVectors(vectors(0.9f, 0.1f, 0.1f))
.putAllPayload(Map.of("group_id", value("user_1")))
.build()))
.setShardKeySelector(
ShardKeySelector.newBuilder()
.addShardKeys(shardKey("user_1"))
.setFallback(shardKey("default"))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.UpsertAsync(
collectionName: "{collection_name}",
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new[] { 0.9f, 0.1f, 0.1f },
Payload = { ["group_id"] = "user_1" }
}
},
shardKeySelector: new ShardKeySelector {
ShardKeys = { new List<ShardKey> { "user_1" } },
Fallback = new ShardKey { Keyword = "default" }
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "{collection_name}",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(1),
Vectors: qdrant.NewVectors(0.9, 0.1, 0.1),
Payload: qdrant.NewValueMap(map[string]any{"group_id": "user_1"}),
},
},
ShardKeySelector: &qdrant.ShardKeySelector{
ShardKeys: []*qdrant.ShardKey{
qdrant.NewShardKey("user_1"),
},
Fallback: qdrant.NewShardKey("default"),
},
})
```


The routing logic will work as follows:

- If the
`target`

Shard exists and active, the request will be routed to it. - If the
`target`

Shard does not exist, the request will be routed to the`fallback`

Shard.

Similarly, when querying points, we need to specify the Shard Key Selector and filter by `group_id`

.
Note, that filter match value should always match the `target`

Shard Key.

### Promote tenant to dedicated Shard

When a tenant grows large enough, you can promote it to its own dedicated Shard. In order to do that, you first need to create a new Shard for the tenant:

```
PUT /collections/{collection_name}/shards
{
"shard_key": "user_1",
"initial_state": "Partial"
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.create_shard_key(
"{collection_name}",
shard_key="user_1",
initial_state=models.ReplicaState.PARTIAL
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.createShardKey("{collection_name}", {
shard_key: "default",
initial_state: "Partial"
});
```


```
use qdrant_client::qdrant::{
CreateShardKeyBuilder, CreateShardKeyRequestBuilder
};
use qdrant_client::qdrant::ReplicaState;
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.create_shard_key(
CreateShardKeyRequestBuilder::new("{collection_name}")
.request(
CreateShardKeyBuilder::default()
.shard_key("user_1".to_string())
.initial_state(ReplicaState::Partial)
),
)
.await?;
```


```
import static io.qdrant.client.ShardKeyFactory.shardKey;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateShardKey;
import io.qdrant.client.grpc.Collections.CreateShardKeyRequest;
import io.qdrant.client.grpc.Collections.ReplicaState;
import io.qdrant.client.grpc.Common.Filter;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.createShardKeyAsync(CreateShardKeyRequest.newBuilder()
.setCollectionName("{collection_name}")
.setRequest(CreateShardKey.newBuilder()
.setShardKey(shardKey("default"))
.setInitialState(ReplicaState.Partial)
.build())
.build()).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.CreateShardKeyAsync(
"{collection_name}",
new CreateShardKey {
ShardKey = new ShardKey { Keyword = "default" },
InitialState = ReplicaState.Partial
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.CreateShardKey(
context.Background(),
"{collection_name}",
&qdrant.CreateShardKey{
ShardKey: qdrant.NewShardKey("default"),
InitialState: qdrant.PtrOf(qdrant.ReplicaState_Partial),
},
)
```


Note, that we create a Shard in `Partial`

state, since it would still need to transfer data into it.

To initiate data transfer, there is another API method called `replicate_points`

:

```
POST /collections/{collection_name}/cluster
{
"replicate_points": {
"filter": {
"must": {
"key": "group_id",
"match": {
"value": "user_1"
}
}
},
"from_shard_key": "default",
"to_shard_key": "user_1"
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.cluster_collection_update(
collection_name="{collection_name}",
cluster_operation=models.ReplicatePointsOperation(
replicate_points=models.ReplicatePoints(
from_shard_key="default",
to_shard_key="user_1",
filter=models.Filter(
must=[
models.FieldCondition(
key="group_id",
match=models.MatchValue(
value="user_1",
)
)
]
)
)
)
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.updateCollectionCluster("{collection_name}", {
replicate_points: {
filter: {
must: {
key: "group_id",
match: {
value: "user_1"
}
}
},
from_shard_key: "default",
to_shard_key: "user_1"
}
});
```


```
use qdrant_client::qdrant::{
update_collection_cluster_setup_request::Operation, Condition, Filter,
ReplicatePointsBuilder, ShardKey, UpdateCollectionClusterSetupRequest,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.update_collection_cluster_setup(UpdateCollectionClusterSetupRequest {
collection_name: "{collection_name}".to_string(),
operation: Some(Operation::ReplicatePoints(
ReplicatePointsBuilder::new(
ShardKey::from("default"),
ShardKey::from("user_1"),
)
.filter(Filter::must([Condition::matches(
"group_id",
"user_1".to_string(),
)]))
.build(),
)),
timeout: None,
})
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.ShardKeyFactory.shardKey;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.ReplicatePoints;
import io.qdrant.client.grpc.Collections.UpdateCollectionClusterSetupRequest;
import io.qdrant.client.grpc.Common.Filter;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.updateCollectionClusterSetupAsync(
UpdateCollectionClusterSetupRequest.newBuilder()
.setCollectionName("{collection_name}")
.setReplicatePoints(
ReplicatePoints.newBuilder()
.setFromShardKey(shardKey("default"))
.setToShardKey(shardKey("user_1"))
.setFilter(
Filter.newBuilder().addMust(matchKeyword("group_id", "user_1")).build())
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.UpdateCollectionClusterSetupAsync(new()
{
CollectionName = "{collection_name}",
ReplicatePoints = new()
{
FromShardKey = "default",
ToShardKey = "user_1",
Filter = MatchKeyword("group_id", "user_1")
}
});
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.UpdateClusterCollectionSetup(context.Background(), qdrant.NewUpdateCollectionClusterReplicatePoints(
"{collection_name}", &qdrant.ReplicatePoints{
FromShardKey: qdrant.NewShardKey("default"),
ToShardKey: qdrant.NewShardKey("user_1"),
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("group_id", "user_1"),
},
},
},
))
```


Once transfer is completed, target Shard will become `Active`

, and all requests for the tenant will be routed to it automatically.
At this point it is safe to delete the tenant’s data from the shared Fallback Shard to free up space.

### Limitations

- Currently,
`fallback`

Shard may only contain a single shard ID on its own. That means all small tenants must fit a single peer of the cluster. This restriction will be improved in future releases. - Similar to collections, dedicated Shards introduce some resource overhead. It is not recommended to create more than a thousand dedicated Shards per cluster. Recommended threshold of promoting a tenant is the same as the indexing threshold for a single collection, which is around 20K points.

---

## Source: https://qdrant.tech/documentation/search/

# Search

Explore Qdrant’s search capabilities, from basic similarity search to advanced hybrid and multimodal queries. These pages cover how to find relevant results, apply filters, combine query types, and tune search quality and latency.

## Search

[Search](https://qdrant.tech/documentation/search/search/) describes similarity search — finding points whose vectors are closest to a query vector in the configured vector space.

## Filtering

[Filtering](https://qdrant.tech/documentation/search/filtering/) lets you narrow results using payload conditions, combining database-style clauses with vector search for precise retrieval.

## Hybrid Queries

[Hybrid Queries](https://qdrant.tech/documentation/search/hybrid-queries/) combine multiple queries or execute them in stages, enabling fusion of dense and sparse results and complex re-ranking pipelines.

## Explore

[Explore](https://qdrant.tech/documentation/search/explore/) covers discovery APIs such as recommendations and random sampling for browsing and navigating collections.

## Text Search

[Text Search](https://qdrant.tech/documentation/search/text-search/) explains Qdrant’s built-in full-text search capabilities and how to combine them with vector search.

## Search Relevance

[Search Relevance](https://qdrant.tech/documentation/search/search-relevance/) describes techniques to improve result ranking beyond raw vector similarity, including score boosting and re-ranking strategies.

## Low-Latency Search

[Low-Latency Search](https://qdrant.tech/documentation/search/low-latency-search/) covers configuration and design patterns for achieving the fastest possible query response times.

---

## Source: https://qdrant.tech/documentation/search/search/

# Similarity search

Searching for the nearest vectors is at the core of many representational learning applications. Modern neural networks are trained to transform objects into vectors so that objects close in the real world appear close in vector space. It could be, for example, texts with similar meanings, visually similar pictures, or songs of the same genre.

## Query API

*Available as of v1.10.0*

Qdrant provides a single interface for all kinds of search and exploration requests - the `Query API`

.
Here is a reference list of what kind of queries you can perform with the `Query API`

in Qdrant:

Depending on the `query`

parameter, Qdrant might prefer different strategies for the search.

| Nearest Neighbors Search | Vector Similarity Search, also known as k-NN |
| Search By Id | Search by an already stored vector - skip embedding model inference |
|

[Discovery Search](https://qdrant.tech/documentation/concepts/explore/#discovery-api)[Scroll](https://qdrant.tech/documentation/concepts/points/#scroll-points)[Grouping](https://qdrant.tech/documentation/concepts/search/#grouping-api)[Order By](https://qdrant.tech/documentation/concepts/points/#order-points-by-payload-key)[Hybrid Search](https://qdrant.tech/documentation/concepts/hybrid-queries/#hybrid-search)[Multi-Stage Search](https://qdrant.tech/documentation/concepts/hybrid-queries/#multi-stage-queries)[Random Sampling](#random-sampling)**Nearest Neighbors Search**

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.7] // <--- Dense vector
}
```


```
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7], # <--- Dense vector
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7], // <--- Dense vector
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Query, QueryPointsBuilder};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(Query::new_nearest(vec![0.2, 0.1, 0.9, 0.7]))
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collectionName}")
.setQuery(nearest(List.of(0.2f, 0.1f, 0.9f, 0.7f)))
.build()).get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
})
```


**Search By Id**

```
POST /collections/{collection_name}/points/query
{
"query": "43cf51e2-8777-4f52-bc74-c2cbde0c8b04" // <--- point id
}
```


```
client.query_points(
collection_name="{collection_name}",
query="43cf51e2-8777-4f52-bc74-c2cbde0c8b04", # <--- point id
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: '43cf51e2-8777-4f52-bc74-c2cbde0c8b04', // <--- point id
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{PointId, Query, QueryPointsBuilder};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(Query::new_nearest(PointId::from("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")))
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.UUID;
QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collectionName}")
.setQuery(nearest(UUID.fromString("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")))
.build()).get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: Guid.Parse("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryID(qdrant.NewID("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")),
})
```


## Metrics

There are many ways to estimate the similarity of vectors with each other. In Qdrant terms, these ways are called metrics. The choice of metric depends on the vectors obtained and, in particular, on the neural network encoder training method.

Qdrant supports these most popular types of metrics:

- Dot product:
`Dot`

-[https://en.wikipedia.org/wiki/Dot_product](https://en.wikipedia.org/wiki/Dot_product) - Cosine similarity:
`Cosine`

-[https://en.wikipedia.org/wiki/Cosine_similarity](https://en.wikipedia.org/wiki/Cosine_similarity) - Euclidean distance:
`Euclid`

-[https://en.wikipedia.org/wiki/Euclidean_distance](https://en.wikipedia.org/wiki/Euclidean_distance) - Manhattan distance:
`Manhattan`

*-[https://en.wikipedia.org/wiki/Taxicab_geometry](https://en.wikipedia.org/wiki/Taxicab_geometry)*Available as of v1.7

The most typical metric used in similarity learning models is the cosine metric.

Qdrant counts this metric in 2 steps, due to which a higher search speed is achieved. The first step is to normalize the vector when adding it to the collection. It happens only once for each vector.

The second step is the comparison of vectors. In this case, it becomes equivalent to dot production - a very fast operation due to SIMD.

Depending on the query configuration, Qdrant might prefer different strategies for the search.
Read more about it in the [query planning](#query-planning) section.

## Search API

Let’s look at an example of a search query.

REST API - API Schema definition is available [here](https://api.qdrant.tech/api-reference/search/query-points)

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.79],
"filter": {
"must": [
{
"key": "city",
"match": {
"value": "London"
}
}
]
},
"params": {
"hnsw_ef": 128,
"exact": false
},
"limit": 3
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7],
query_filter=models.Filter(
must=[
models.FieldCondition(
key="city",
match=models.MatchValue(
value="London",
),
)
]
),
search_params=models.SearchParams(hnsw_ef=128, exact=False),
limit=3,
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7],
filter: {
must: [
{
key: "city",
match: {
value: "London",
},
},
],
},
params: {
hnsw_ef: 128,
exact: false,
},
limit: 3,
});
```


```
use qdrant_client::qdrant::{Condition, Filter, QueryPointsBuilder, SearchParamsBuilder};
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.2, 0.1, 0.9, 0.7])
.limit(3)
.filter(Filter::must([Condition::matches(
"city",
"London".to_string(),
)]))
.params(SearchParamsBuilder::default().hnsw_ef(128).exact(false)),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.SearchParams;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setFilter(Filter.newBuilder().addMust(matchKeyword("city", "London")).build())
.setParams(SearchParams.newBuilder().setExact(false).setHnswEf(128).build())
.setLimit(3)
.build()).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
filter: MatchKeyword("city", "London"),
searchParams: new SearchParams { Exact = false, HnswEf = 128 },
limit: 3
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("city", "London"),
},
},
Params: &qdrant.SearchParams{
Exact: qdrant.PtrOf(false),
HnswEf: qdrant.PtrOf(uint64(128)),
},
})
```


In this example, we are looking for vectors similar to vector `[0.2, 0.1, 0.9, 0.7]`

.
Parameter `limit`

(or its alias - `top`

) specifies the amount of most similar results we would like to retrieve.

Values under the key `params`

specify custom parameters for the search.
Currently, it could be:

`hnsw_ef`

- value that specifies`ef`

parameter of the HNSW algorithm.`exact`

- option to not use the approximate search (ANN). If set to true, the search may run for a long as it performs a full scan to retrieve exact results.`indexed_only`

- With this option you can disable the search in those segments where vector index is not built yet. This may be useful if you want to minimize the impact to the search performance whilst the collection is also being updated. Using this option may lead to a partial result if the collection is not fully indexed yet, consider using it only if eventual consistency is acceptable for your use case.`quantization`

- parameters related to quantization. See[Searching with Quantization](https://qdrant.tech/documentation/guides/quantization/#searching-with-quantization)guide.`acorn`

- parameters related to the[ACORN search algorithm](#acorn-search-algorithm).

Since the `filter`

parameter is specified, the search is performed only among those points that satisfy the filter condition.
See details of possible filters and their work in the [filtering](https://qdrant.tech/documentation/concepts/filtering/) section.

Example result of this API would be

```
{
"result": [
{ "id": 10, "score": 0.81 },
{ "id": 14, "score": 0.75 },
{ "id": 11, "score": 0.73 }
],
"status": "ok",
"time": 0.001
}
```


The `result`

contains ordered by `score`

list of found point ids.

Note that payload and vector data is missing in these results by default.
See [payload and vector in the result](#payload-and-vector-in-the-result) on how
to include it.

If the collection was created with multiple vectors, the name of the vector to use for searching should be provided:

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.7],
"using": "image",
"limit": 3
}
```


```
from qdrant_client import QdrantClient
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7],
using="image",
limit=3,
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7],
using: "image",
limit: 3,
});
```


```
use qdrant_client::qdrant::QueryPointsBuilder;
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.2, 0.1, 0.9, 0.7])
.limit(3)
.using("image"),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setUsing("image")
.setLimit(3)
.build()).get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
usingVector: "image",
limit: 3
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
Using: qdrant.PtrOf("image"),
})
```


Search is processing only among vectors with the same name.

If the collection was created with sparse vectors, the name of the sparse vector to use for searching should be provided:

You can still use payload filtering and other features of the search API with sparse vectors.

There are however important differences between dense and sparse vector search:

| Index | Sparse Query | Dense Query |
|---|---|---|
| Scoring Metric | Default is `Dot product` , no need to specify it | `Distance` has supported metrics e.g. Dot, Cosine |
| Search Type | Always exact in Qdrant | HNSW is an approximate NN |
| Return Behaviour | Returns only vectors with non-zero values in the same indices as the query vector | Returns `limit` vectors |

In general, the speed of the search is proportional to the number of non-zero values in the query vector.

```
POST /collections/{collection_name}/points/query
{
"query": {
"indices": [1, 3, 5, 7],
"values": [0.1, 0.2, 0.3, 0.4]
},
"using": "text"
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
result = client.query_points(
collection_name="{collection_name}",
query=models.SparseVector(indices=[1, 3, 5, 7], values=[0.1, 0.2, 0.3, 0.4]),
using="text",
).points
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: {
indices: [1, 3, 5, 7],
values: [0.1, 0.2, 0.3, 0.4]
},
using: "text",
limit: 3,
});
```


```
use qdrant_client::qdrant::QueryPointsBuilder;
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![(1, 0.2), (3, 0.1), (5, 0.9), (7, 0.7)])
.limit(10)
.using("text"),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setUsing("text")
.setQuery(nearest(List.of(0.1f, 0.2f, 0.3f, 0.4f), List.of(1, 3, 5, 7)))
.setLimit(3)
.build())
.get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new (float, uint)[] {(0.1f, 1), (0.2f, 3), (0.3f, 5), (0.4f, 7)},
usingVector: "text",
limit: 3
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuerySparse(
[]uint32{1, 3, 5, 7},
[]float32{0.1, 0.2, 0.3, 0.4}),
Using: qdrant.PtrOf("text"),
})
```


### Filtering results by score

In addition to payload filtering, it might be useful to filter out results with a low similarity score.
For example, if you know the minimal acceptance score for your model and do not want any results which are less similar than the threshold.
In this case, you can use `score_threshold`

parameter of the search query.
It will exclude all results with a score worse than the given.

### Payload and vector in the result

By default, retrieval methods do not return any stored information such as
payload and vectors. Additional parameters `with_vectors`

and `with_payload`

alter this behavior.

Example:

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.7],
"with_vectors": true,
"with_payload": true
}
```


```
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7],
with_vectors=True,
with_payload=True,
)
```


```
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7],
with_vector: true,
with_payload: true,
});
```


```
use qdrant_client::qdrant::QueryPointsBuilder;
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.2, 0.1, 0.9, 0.7])
.limit(3)
.with_payload(true)
.with_vectors(true),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.WithVectorsSelectorFactory;
import io.qdrant.client.grpc.Points.QueryPoints;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setWithPayload(enable(true))
.setWithVectors(WithVectorsSelectorFactory.enable(true))
.setLimit(3)
.build())
.get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
payloadSelector: true,
vectorsSelector: true,
limit: 3
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
WithPayload: qdrant.NewWithPayload(true),
WithVectors: qdrant.NewWithVectors(true),
})
```


You can use `with_payload`

to scope to or filter a specific payload subset.
You can even specify an array of items to include, such as `city`

,
`village`

, and `town`

:

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.7],
"with_payload": ["city", "village", "town"]
}
```


```
from qdrant_client import QdrantClient
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7],
with_payload=["city", "village", "town"],
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7],
with_payload: ["city", "village", "town"],
});
```


```
use qdrant_client::qdrant::{with_payload_selector::SelectorOptions, QueryPointsBuilder};
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.2, 0.1, 0.9, 0.7])
.limit(3)
.with_payload(SelectorOptions::Include(
vec![
"city".to_string(),
"village".to_string(),
"town".to_string(),
]
.into(),
))
.with_vectors(true),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.include;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setWithPayload(include(List.of("city", "village", "town")))
.setLimit(3)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
payloadSelector: new WithPayloadSelector
{
Include = new PayloadIncludeSelector
{
Fields = { new string[] { "city", "village", "town" } }
}
},
limit: 3
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
WithPayload: qdrant.NewWithPayloadInclude("city", "village", "town"),
})
```


Or use `include`

or `exclude`

explicitly. For example, to exclude `city`

:

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.7],
"with_payload": {
"exclude": ["city"]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7],
with_payload=models.PayloadSelectorExclude(
exclude=["city"],
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7],
with_payload: {
exclude: ["city"],
},
});
```


```
use qdrant_client::qdrant::{with_payload_selector::SelectorOptions, QueryPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.2, 0.1, 0.9, 0.7])
.limit(3)
.with_payload(SelectorOptions::Exclude(vec!["city".to_string()].into()))
.with_vectors(true),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.exclude;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setWithPayload(exclude(List.of("city")))
.setLimit(3)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
payloadSelector: new WithPayloadSelector
{
Exclude = new PayloadExcludeSelector { Fields = { new string[] { "city" } } }
},
limit: 3
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
WithPayload: qdrant.NewWithPayloadExclude("city"),
})
```


It is possible to target nested fields using a dot notation:

`payload.nested_field`

- for a nested field`payload.nested_array[].sub_field`

- for projecting nested fields within an array

Accessing array elements by index is currently not supported.

### ACORN Search Algorithm

*Available as of v1.16.0*

For filtered vector search, you are recommended to create a [payload index](https://qdrant.tech/documentation/concepts/indexing/#payload-index) for the fields you want to filter by.
During the search, Qdrant will use a combined [filterable index](https://qdrant.tech/documentation/concepts/indexing/#filterable-index).
However, when combining multiple strict payload filters, this mechanism might not provide sufficient accuracy.
In such cases, you can use the ACORN search algorithm.

It is an extension to the regular HNSW search algorithm, based on the ACORN-1 algorithm described in the paper [ACORN: Performant and Predicate-Agnostic Search Over Vector Embeddings and Structured Data](https://arxiv.org/abs/2403.04871).
During graph traversal, it explores not just direct neighbors (first hop), but also neighbors of neighbors (second hop) when direct neighbors are filtered out.
This improves search accuracy at the cost of performance.

Enable it as follows:

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.7],
"params": {
"acorn": {
"enable": true,
"max_selectivity": 0.4
}
},
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7],
search_params=models.SearchParams(
acorn=models.AcornSearchParams(
enable=True,
max_selectivity=0.4,
)
),
limit=10,
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7],
params: {
acorn: {
enable: true,
max_selectivity: 0.4,
},
},
limit: 10,
});
```


```
use qdrant_client::qdrant::{
AcornSearchParamsBuilder, QueryPointsBuilder, SearchParamsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.2, 0.1, 0.9, 0.7])
.limit(10)
.params(
SearchParamsBuilder::default().acorn(
AcornSearchParamsBuilder::new(true)
.max_selectivity(0.4),
),
),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.AcornSearchParams;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.SearchParams;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setParams(
SearchParams.newBuilder()
.setAcorn(
AcornSearchParams.newBuilder()
.setEnable(true)
.setMaxSelectivity(0.4)
.build())
.build())
.setLimit(10)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
searchParams: new SearchParams
{
Acorn = new AcornSearchParams
{
Enable = true,
MaxSelectivity = 0.4
}
},
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
Params: &qdrant.SearchParams{
Acorn: &qdrant.AcornSearchParams{
Enable: qdrant.PtrOf(true),
MaxSelectivity: qdrant.PtrOf(0.4),
},
},
})
```


ACORN is disabled by default.
Once enabled via the `enable`

flag, it activates conditionally when estimated filter selectivity is below the threshold.
The optional `max_selectivity`

value controls this threshold;
`0.0`

means ACORN will never be used, `1.0`

means it will always be used. The default value is `0.4`

.
Selectivity is estimated as:
$$ \text{Estimated filter selectivity} =
\frac{\text{Estimated number of points satisfying the filters}}
{\text{Total number of points}}
$$
Since ACORN is significantly slower (approximately 2-10x in typical scenarios) but improves recall for restrictive filters, tuning this parameter is about deciding when the accuracy improvement justifies the performance cost.

## Batch search API

The batch search API enables to perform multiple search requests via a single request.

Its semantic is straightforward, `n`

batched search requests are equivalent to `n`

singular search requests.

This approach has several advantages. Logically, fewer network connections are required which can be very beneficial on its own.

More importantly, batched requests will be efficiently processed via the query planner which can detect and optimize requests if they have the same `filter`

.

This can have a great effect on latency for non trivial filters as the intermediary results can be shared among the request.

In order to use it, simply pack together your search requests. All the regular attributes of a search request are of course available.

```
POST /collections/{collection_name}/points/query/batch
{
"searches": [
{
"query": [0.2, 0.1, 0.9, 0.7],
"filter": {
"must": [
{
"key": "city",
"match": {
"value": "London"
}
}
]
},
"limit": 3
},
{
"query": [0.5, 0.3, 0.2, 0.3],
"filter": {
"must": [
{
"key": "city",
"match": {
"value": "London"
}
}
]
},
"limit": 3
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
filter_ = models.Filter(
must=[
models.FieldCondition(
key="city",
match=models.MatchValue(
value="London",
),
)
]
)
search_queries = [
models.QueryRequest(query=[0.2, 0.1, 0.9, 0.7], filter=filter_, limit=3),
models.QueryRequest(query=[0.5, 0.3, 0.2, 0.3], filter=filter_, limit=3),
]
client.query_batch_points(collection_name="{collection_name}", requests=search_queries)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
const filter = {
must: [
{
key: "city",
match: {
value: "London",
},
},
],
};
const searches = [
{
query: [0.2, 0.1, 0.9, 0.7],
filter,
limit: 3,
},
{
query: [0.5, 0.3, 0.2, 0.3],
filter,
limit: 3,
},
];
client.queryBatch("{collection_name}", {
searches,
});
```


```
use qdrant_client::qdrant::{Condition, Filter, QueryBatchPointsBuilder, QueryPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let filter = Filter::must([Condition::matches("city", "London".to_string())]);
let searches = vec![
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.1, 0.2, 0.3, 0.4])
.limit(3)
.filter(filter.clone())
.build(),
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.5, 0.3, 0.2, 0.3])
.limit(3)
.filter(filter)
.build(),
];
client
.query_batch(QueryBatchPointsBuilder::new("{collection_name}", searches))
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
Filter filter = Filter.newBuilder().addMust(matchKeyword("city", "London")).build();
List<QueryPoints> searches = List.of(
QueryPoints.newBuilder()
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setFilter(filter)
.setLimit(3)
.build(),
QueryPoints.newBuilder()
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setFilter(filter)
.setLimit(3)
.build());
client.queryBatchAsync("{collection_name}", searches).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
var filter = MatchKeyword("city", "London");
var queries = new List<QueryPoints>
{
new()
{
CollectionName = "{collection_name}",
Query = new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
Filter = filter,
Limit = 3
},
new()
{
CollectionName = "{collection_name}",
Query = new float[] { 0.5f, 0.3f, 0.2f, 0.3f },
Filter = filter,
Limit = 3
}
};
await client.QueryBatchAsync(collectionName: "{collection_name}", queries: queries);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
filter := qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("city", "London"),
},
}
client.QueryBatch(context.Background(), &qdrant.QueryBatchPoints{
CollectionName: "{collection_name}",
QueryPoints: []*qdrant.QueryPoints{
{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
Filter: &filter,
},
{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.5, 0.3, 0.2, 0.3),
Filter: &filter,
},
},
})
```


The result of this API contains one array per search requests.

```
{
"result": [
[
{ "id": 10, "score": 0.81 },
{ "id": 14, "score": 0.75 },
{ "id": 11, "score": 0.73 }
],
[
{ "id": 1, "score": 0.92 },
{ "id": 3, "score": 0.89 },
{ "id": 9, "score": 0.75 }
]
],
"status": "ok",
"time": 0.001
}
```


## Query by ID

Whenever you need to use a vector as an input, you can always use a [point ID](https://qdrant.tech/documentation/concepts/points/#point-ids) instead.

```
POST /collections/{collection_name}/points/query
{
"query": "43cf51e2-8777-4f52-bc74-c2cbde0c8b04" // <--- point id
}
```


```
client.query_points(
collection_name="{collection_name}",
query="43cf51e2-8777-4f52-bc74-c2cbde0c8b04", # <--- point id
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: '43cf51e2-8777-4f52-bc74-c2cbde0c8b04', // <--- point id
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{PointId, Query, QueryPointsBuilder};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(Query::new_nearest(PointId::from("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")))
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.UUID;
QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collectionName}")
.setQuery(nearest(UUID.fromString("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")))
.build()).get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: Guid.Parse("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryID(qdrant.NewID("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")),
})
```


The above example will fetch the default vector from the point with this id, and use it as the query vector.

If the `using`

parameter is also specified, Qdrant will use the vector with that name.

It is also possible to reference an ID from a different collection, by setting the `lookup_from`

parameter.

```
POST /collections/{collection_name}/points/query
{
"query": "43cf51e2-8777-4f52-bc74-c2cbde0c8b04", // <--- point id
"using": "512d-vector"
"lookup_from": {
"collection": "another_collection", // <--- other collection name
"vector": "image-512" // <--- vector name in the other collection
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query="43cf51e2-8777-4f52-bc74-c2cbde0c8b04", # <--- point id
using="512d-vector",
lookup_from=models.LookupLocation(
collection="another_collection", # <--- other collection name
vector="image-512", # <--- vector name in the other collection
)
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: '43cf51e2-8777-4f52-bc74-c2cbde0c8b04', // <--- point id
using: '512d-vector',
lookup_from: {
collection: 'another_collection', // <--- other collection name
vector: 'image-512', // <--- vector name in the other collection
}
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{LookupLocationBuilder, Query, QueryPointsBuilder};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.query(
QueryPointsBuilder::new("{collection_name}")
.query(Query::new_nearest("43cf51e2-8777-4f52-bc74-c2cbde0c8b04"))
.using("512d-vector")
.lookup_from(
LookupLocationBuilder::new("another_collection")
.vector_name("image-512")
)
).await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.LookupLocation;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.UUID;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(UUID.fromString("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")))
.setUsing("512d-vector")
.setLookupFrom(
LookupLocation.newBuilder()
.setCollectionName("another_collection")
.setVectorName("image-512")
.build())
.build())
.get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: Guid.Parse("43cf51e2-8777-4f52-bc74-c2cbde0c8b04"), // <--- point id
usingVector: "512d-vector",
lookupFrom: new() {
CollectionName = "another_collection", // <--- other collection name
VectorName = "image-512" // <--- vector name in the other collection
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryID(qdrant.NewID("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")),
Using: qdrant.PtrOf("512d-vector"),
LookupFrom: &qdrant.LookupLocation{
CollectionName: "another_collection",
VectorName: qdrant.PtrOf("image-512"),
},
})
```


In the case above, Qdrant will fetch the `"image-512"`

vector from the specified point id in the
collection `another_collection`

.

## Pagination

Search and [recommendation](https://qdrant.tech/documentation/concepts/explore/#recommendation-api) APIs allow to skip first results of the search and return only the result starting from some specified offset:

Example:

```
POST /collections/{collection_name}/points/query
{
"query": [0.2, 0.1, 0.9, 0.7],
"with_vectors": true,
"with_payload": true,
"limit": 10,
"offset": 100
}
```


```
from qdrant_client import QdrantClient
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=[0.2, 0.1, 0.9, 0.7],
with_vectors=True,
with_payload=True,
limit=10,
offset=100,
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: [0.2, 0.1, 0.9, 0.7],
with_vector: true,
with_payload: true,
limit: 10,
offset: 100,
});
```


```
use qdrant_client::qdrant::QueryPointsBuilder;
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(vec![0.2, 0.1, 0.9, 0.7])
.with_payload(true)
.with_vectors(true)
.limit(10)
.offset(100),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.WithVectorsSelectorFactory;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setWithPayload(enable(true))
.setWithVectors(WithVectorsSelectorFactory.enable(true))
.setLimit(10)
.setOffset(100)
.build())
.get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
payloadSelector: true,
vectorsSelector: true,
limit: 10,
offset: 100
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
WithPayload: qdrant.NewWithPayload(true),
WithVectors: qdrant.NewWithVectors(true),
Offset: qdrant.PtrOf(uint64(100)),
})
```


Is equivalent to retrieving the 11th page with 10 records per page.

Vector-based retrieval in general and HNSW index in particular, are not designed to be paginated. It is impossible to retrieve Nth closest vector without retrieving the first N vectors first.

However, using the offset parameter saves the resources by reducing network traffic and the number of times the storage is accessed.

Using an `offset`

parameter, will require to internally retrieve `offset + limit`

points, but only access payload and vector from the storage those points which are going to be actually returned.

## Grouping API

It is possible to group results by a certain field. This is useful when you have multiple points for the same item, and you want to avoid redundancy of the same item in the results.

For example, if you have a large document split into multiple chunks, and you want to search or [recommend](https://qdrant.tech/documentation/concepts/explore/#recommendation-api) on a per-document basis, you can group the results by the document ID.

Consider having points with the following payloads:

```
[
{
"id": 0,
"payload": {
"chunk_part": 0,
"document_id": "a"
},
"vector": [0.91]
},
{
"id": 1,
"payload": {
"chunk_part": 1,
"document_id": ["a", "b"]
},
"vector": [0.8]
},
{
"id": 2,
"payload": {
"chunk_part": 2,
"document_id": "a"
},
"vector": [0.2]
},
{
"id": 3,
"payload": {
"chunk_part": 0,
"document_id": 123
},
"vector": [0.79]
},
{
"id": 4,
"payload": {
"chunk_part": 1,
"document_id": 123
},
"vector": [0.75]
},
{
"id": 5,
"payload": {
"chunk_part": 0,
"document_id": -10
},
"vector": [0.6]
}
]
```


With the * groups* API, you will be able to get the best

*N*points for each document, assuming that the payload of the points contains the document ID. Of course there will be times where the best

*N*points cannot be fulfilled due to lack of points or a big distance with respect to the query. In every case, the

`group_size`

is a best-effort parameter, akin to the `limit`

parameter.### Search groups

REST API ([Schema](https://api.qdrant.tech/api-reference/search/query-points-groups)):

```
POST /collections/{collection_name}/points/query/groups
{
// Same as in the regular query API
"query": [1.1],
// Grouping parameters
"group_by": "document_id", // Path of the field to group by
"limit": 4, // Max amount of groups
"group_size": 2 // Max amount of points per group
}
```


```
client.query_points_groups(
collection_name="{collection_name}",
# Same as in the regular query_points() API
query=[1.1],
# Grouping parameters
group_by="document_id", # Path of the field to group by
limit=4, # Max amount of groups
group_size=2, # Max amount of points per group
)
```


```
client.queryGroups("{collection_name}", {
query: [1.1],
group_by: "document_id",
limit: 4,
group_size: 2,
});
```


```
use qdrant_client::qdrant::QueryPointGroupsBuilder;
client
.query_groups(
QueryPointGroupsBuilder::new("{collection_name}", "document_id")
.query(vec![0.2, 0.1, 0.9, 0.7])
.group_size(2u64)
.with_payload(true)
.with_vectors(true)
.limit(4u64),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.grpc.Points.QueryPointGroups;
import io.qdrant.client.grpc.Points.SearchPointGroups;
import java.util.List;
client.queryGroupsAsync(
QueryPointGroups.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setGroupBy("document_id")
.setLimit(4)
.setGroupSize(2)
.build())
.get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryGroupsAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
groupBy: "document_id",
limit: 4,
groupSize: 2
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.QueryGroups(context.Background(), &qdrant.QueryPointGroups{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
GroupBy: "document_id",
GroupSize: qdrant.PtrOf(uint64(2)),
})
```


The output of a * groups* call looks like this:

```
{
"result": {
"groups": [
{
"id": "a",
"hits": [
{ "id": 0, "score": 0.91 },
{ "id": 1, "score": 0.85 }
]
},
{
"id": "b",
"hits": [
{ "id": 1, "score": 0.85 }
]
},
{
"id": 123,
"hits": [
{ "id": 3, "score": 0.79 },
{ "id": 4, "score": 0.75 }
]
},
{
"id": -10,
"hits": [
{ "id": 5, "score": 0.6 }
]
}
]
},
"status": "ok",
"time": 0.001
}
```


The groups are ordered by the score of the top point in the group. Inside each group the points are sorted too.

If the `group_by`

field of a point is an array (e.g. `"document_id": ["a", "b"]`

), the point can be included in multiple groups (e.g. `"document_id": "a"`

and `document_id: "b"`

).

**Limitations**:

- Only
[keyword](https://qdrant.tech/documentation/concepts/payload/#keyword)and[integer](https://qdrant.tech/documentation/concepts/payload/#integer)payload values are supported for the`group_by`

parameter. Payload values with other types will be ignored. - At the moment, pagination is not enabled when using
**groups**, so the`offset`

parameter is not allowed.

### Lookup in groups

Having multiple points for parts of the same item often introduces redundancy in the stored data. Which may be fine if the information shared by the points is small, but it can become a problem if the payload is large, because it multiplies the storage space needed to store the points by a factor of the amount of points we have per group.

One way of optimizing storage when using groups is to store the information shared by the points with the same group id in a single point in another collection. Then, when using the [ groups API](#grouping-api), add the

`with_lookup`

parameter to bring the information from those points into each group.This has the extra benefit of having a single point to update when the information shared by the points in a group changes.

For example, if you have a collection of documents, you may want to chunk them and store the points for the chunks in a separate collection, making sure that you store the point id from the document it belongs in the payload of the chunk point.

In this case, to bring the information from the documents into the chunks grouped by the document id, you can use the `with_lookup`

parameter:

```
POST /collections/chunks/points/query/groups
{
// Same as in the regular query API
"query": [1.1],
// Grouping parameters
"group_by": "document_id",
"limit": 2,
"group_size": 2,
// Lookup parameters
"with_lookup": {
// Name of the collection to look up points in
"collection": "documents",
// Options for specifying what to bring from the payload
// of the looked up point, true by default
"with_payload": ["title", "text"],
// Options for specifying what to bring from the vector(s)
// of the looked up point, true by default
"with_vectors": false
}
}
```


```
client.query_points_groups(
collection_name="chunks",
# Same as in the regular search() API
query=[1.1],
# Grouping parameters
group_by="document_id", # Path of the field to group by
limit=2, # Max amount of groups
group_size=2, # Max amount of points per group
# Lookup parameters
with_lookup=models.WithLookup(
# Name of the collection to look up points in
collection="documents",
# Options for specifying what to bring from the payload
# of the looked up point, True by default
with_payload=["title", "text"],
# Options for specifying what to bring from the vector(s)
# of the looked up point, True by default
with_vectors=False,
),
)
```


```
client.queryGroups("{collection_name}", {
query: [1.1],
group_by: "document_id",
limit: 2,
group_size: 2,
with_lookup: {
collection: "documents",
with_payload: ["title", "text"],
with_vectors: false,
},
});
```


```
use qdrant_client::qdrant::{with_payload_selector::SelectorOptions, QueryPointGroupsBuilder, WithLookupBuilder};
client
.query_groups(
QueryPointGroupsBuilder::new("{collection_name}", "document_id")
.query(vec![0.2, 0.1, 0.9, 0.7])
.limit(2u64)
.limit(2u64)
.with_lookup(
WithLookupBuilder::new("documents")
.with_payload(SelectorOptions::Include(
vec!["title".to_string(), "text".to_string()].into(),
))
.with_vectors(false),
),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.include;
import static io.qdrant.client.WithVectorsSelectorFactory.enable;
import io.qdrant.client.grpc.Points.QueryPointGroups;
import io.qdrant.client.grpc.Points.WithLookup;
import java.util.List;
client.queryGroupsAsync(
QueryPointGroups.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setGroupBy("document_id")
.setLimit(2)
.setGroupSize(2)
.setWithLookup(
WithLookup.newBuilder()
.setCollection("documents")
.setWithPayload(include(List.of("title", "text")))
.setWithVectors(enable(false))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.SearchGroupsAsync(
collectionName: "{collection_name}",
vector: new float[] { 0.2f, 0.1f, 0.9f, 0.7f},
groupBy: "document_id",
limit: 2,
groupSize: 2,
withLookup: new WithLookup
{
Collection = "documents",
WithPayload = new WithPayloadSelector
{
Include = new PayloadIncludeSelector { Fields = { new string[] { "title", "text" } } }
},
WithVectors = false
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.QueryGroups(context.Background(), &qdrant.QueryPointGroups{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
GroupBy: "document_id",
GroupSize: qdrant.PtrOf(uint64(2)),
WithLookup: &qdrant.WithLookup{
Collection: "documents",
WithPayload: qdrant.NewWithPayloadInclude("title", "text"),
},
})
```


For the `with_lookup`

parameter, you can also use the shorthand `with_lookup="documents"`

to bring the whole payload and vector(s) without explicitly specifying it.

The looked up result will show up under `lookup`

in each group.

```
{
"result": {
"groups": [
{
"id": 1,
"hits": [
{ "id": 0, "score": 0.91 },
{ "id": 1, "score": 0.85 }
],
"lookup": {
"id": 1,
"payload": {
"title": "Document A",
"text": "This is document A"
}
}
},
{
"id": 2,
"hits": [
{ "id": 1, "score": 0.85 }
],
"lookup": {
"id": 2,
"payload": {
"title": "Document B",
"text": "This is document B"
}
}
}
]
},
"status": "ok",
"time": 0.001
}
```


Since the lookup is done by matching directly with the point id, the lookup collection must be pre-populated with points where the `id`

matches the `group_by`

value (e.g., document_id) from your primary collection.

Any group id that is not an existing (and valid) point id in the lookup collection will be ignored, and the `lookup`

field will be empty.

## Random Sampling

*Available as of v1.11.0*

In some cases it might be useful to retrieve a random sample of points from the collection. This can be useful for debugging, testing, or for providing entry points for exploration.

Random sampling API is a part of [Universal Query API](#query-api) and can be used in the same way as regular search API.

```
POST /collections/{collection_name}/points/query
{
"query": {
"sample": "random"
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
sampled = client.query_points(
collection_name="{collection_name}",
query=models.SampleQuery(sample=models.Sample.RANDOM)
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
const sampled = await client.query("{collection_name}", {
query: {
sample: "random",
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Query, QueryPointsBuilder, Sample};
let client = Qdrant::from_url("http://localhost:6334").build()?;
let sampled = client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(Query::new_sample(Sample::Random))
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.sample;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.Sample;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(sample(Sample.Random))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(collectionName: "{collection_name}", query: Sample.Random);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.QueryGroups(context.Background(), &qdrant.QueryPointGroups{
CollectionName: "{collection_name}",
Query: qdrant.NewQuerySample(qdrant.Sample_Random),
})
```


## Query planning

Depending on the filter used in the search - there are several possible scenarios for query execution. Qdrant chooses one of the query execution options depending on the available indexes, the complexity of the conditions and the cardinality of the filtering result. This process is called query planning.

The strategy selection process relies heavily on heuristics and can vary from release to release. However, the general principles are:

- planning is performed for each segment independently (see
[storage](https://qdrant.tech/documentation/concepts/storage/)for more information about segments) - prefer a full scan if the amount of points is below a threshold
- estimate the cardinality of a filtered result before selecting a strategy
- retrieve points using payload index (see
[indexing](https://qdrant.tech/documentation/concepts/indexing/)) if cardinality is below threshold - use filterable vector index if the cardinality is above a threshold
- use ACORN when the selectivity (ratio) is low, but the cardinality (an amount) is still high

You can adjust the threshold using a [configuration file](https://github.com/qdrant/qdrant/blob/master/config/config.yaml), as well as independently for each collection.

---

## Source: https://qdrant.tech/documentation/search/filtering/

# Filtering

With Qdrant, you can set conditions when searching or retrieving points.
For example, you can impose conditions on both the [payload](https://qdrant.tech/documentation/concepts/payload/) and the `id`

of the point.

Setting additional conditions is important when it is impossible to express all the features of the object in the embedding. Examples include a variety of business requirements: stock availability, user location, or desired price range.

## Related Content

|
|---|

## Filtering clauses

Qdrant allows you to combine conditions in clauses.
Clauses are different logical operations, such as `OR`

, `AND`

, and `NOT`

.
Clauses can be recursively nested into each other so that you can reproduce an arbitrary boolean expression.

Let’s take a look at the clauses implemented in Qdrant.

Suppose we have a set of points with the following payload:

```
[
{ "id": 1, "city": "London", "color": "green" },
{ "id": 2, "city": "London", "color": "red" },
{ "id": 3, "city": "London", "color": "blue" },
{ "id": 4, "city": "Berlin", "color": "red" },
{ "id": 5, "city": "Moscow", "color": "green" },
{ "id": 6, "city": "Moscow", "color": "blue" }
]
```


### Must

When using `must`

, the clause becomes `true`

only if every condition listed inside `must`

is satisfied.
In this sense, `must`

is equivalent to the operator `AND`

.

Example:

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"must": [
{ "key": "city", "match": { "value": "London" } },
{ "key": "color", "match": { "value": "red" } }
]
}
...
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
must=[
models.FieldCondition(
key="city",
match=models.MatchValue(value="London"),
),
models.FieldCondition(
key="color",
match=models.MatchValue(value="red"),
),
]
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.scroll("{collection_name}", {
filter: {
must: [
{
key: "city",
match: { value: "London" },
},
{
key: "color",
match: { value: "red" },
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, ScrollPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.scroll(
ScrollPointsBuilder::new("{collection_name}").filter(Filter::must([
Condition::matches("city", "london".to_string()),
Condition::matches("color", "red".to_string()),
])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addAllMust(
List.of(matchKeyword("city", "London"), matchKeyword("color", "red")))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
// & operator combines two conditions in an AND conjunction(must)
await client.ScrollAsync(
collectionName: "{collection_name}",
filter: MatchKeyword("city", "London") & MatchKeyword("color", "red")
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("city", "London"),
qdrant.NewMatch("color", "red"),
},
},
})
```


Filtered points would be:

```
[{ "id": 2, "city": "London", "color": "red" }]
```


### Should

When using `should`

, the clause becomes `true`

if at least one condition listed inside `should`

is satisfied.
In this sense, `should`

is equivalent to the operator `OR`

.

Example:

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"should": [
{ "key": "city", "match": { "value": "London" } },
{ "key": "color", "match": { "value": "red" } }
]
}
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
should=[
models.FieldCondition(
key="city",
match=models.MatchValue(value="London"),
),
models.FieldCondition(
key="color",
match=models.MatchValue(value="red"),
),
]
),
)
```


```
client.scroll("{collection_name}", {
filter: {
should: [
{
key: "city",
match: { value: "London" },
},
{
key: "color",
match: { value: "red" },
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, ScrollPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.scroll(
ScrollPointsBuilder::new("{collection_name}").filter(Filter::should([
Condition::matches("city", "london".to_string()),
Condition::matches("color", "red".to_string()),
])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
import java.util.List;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addAllShould(
List.of(matchKeyword("city", "London"), matchKeyword("color", "red")))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
// | operator combines two conditions in an OR disjunction(should)
await client.ScrollAsync(
collectionName: "{collection_name}",
filter: MatchKeyword("city", "London") | MatchKeyword("color", "red")
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Should: []*qdrant.Condition{
qdrant.NewMatch("city", "London"),
qdrant.NewMatch("color", "red"),
},
},
})
```


Filtered points would be:

```
[
{ "id": 1, "city": "London", "color": "green" },
{ "id": 2, "city": "London", "color": "red" },
{ "id": 3, "city": "London", "color": "blue" },
{ "id": 4, "city": "Berlin", "color": "red" }
]
```


### Must Not

When using `must_not`

, the clause becomes `true`

if none of the conditions listed inside `must_not`

is satisfied.
In this sense, `must_not`

is equivalent to the expression `(NOT A) AND (NOT B) AND (NOT C)`

.

Example:

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"must_not": [
{ "key": "city", "match": { "value": "London" } },
{ "key": "color", "match": { "value": "red" } }
]
}
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
must_not=[
models.FieldCondition(key="city", match=models.MatchValue(value="London")),
models.FieldCondition(key="color", match=models.MatchValue(value="red")),
]
),
)
```


```
client.scroll("{collection_name}", {
filter: {
must_not: [
{
key: "city",
match: { value: "London" },
},
{
key: "color",
match: { value: "red" },
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, ScrollPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.scroll(
ScrollPointsBuilder::new("{collection_name}").filter(Filter::must_not([
Condition::matches("city", "london".to_string()),
Condition::matches("color", "red".to_string()),
])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
import java.util.List;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addAllMustNot(
List.of(matchKeyword("city", "London"), matchKeyword("color", "red")))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
// The ! operator negates the condition(must not)
await client.ScrollAsync(
collectionName: "{collection_name}",
filter: !(MatchKeyword("city", "London") & MatchKeyword("color", "red"))
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
MustNot: []*qdrant.Condition{
qdrant.NewMatch("city", "London"),
qdrant.NewMatch("color", "red"),
},
},
})
```


Filtered points would be:

```
[
{ "id": 5, "city": "Moscow", "color": "green" },
{ "id": 6, "city": "Moscow", "color": "blue" }
]
```


### Clauses combination

It is also possible to use several clauses simultaneously:

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"must": [
{ "key": "city", "match": { "value": "London" } }
],
"must_not": [
{ "key": "color", "match": { "value": "red" } }
]
}
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
must=[
models.FieldCondition(key="city", match=models.MatchValue(value="London")),
],
must_not=[
models.FieldCondition(key="color", match=models.MatchValue(value="red")),
],
),
)
```


```
client.scroll("{collection_name}", {
filter: {
must: [
{
key: "city",
match: { value: "London" },
},
],
must_not: [
{
key: "color",
match: { value: "red" },
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, ScrollPointsBuilder};
client
.scroll(
ScrollPointsBuilder::new("{collection_name}").filter(Filter {
must: vec![Condition::matches("city", "London".to_string())],
must_not: vec![Condition::matches("color", "red".to_string())],
..Default::default()
}),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addMust(matchKeyword("city", "London"))
.addMustNot(matchKeyword("color", "red"))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.ScrollAsync(
collectionName: "{collection_name}",
filter: MatchKeyword("city", "London") & !MatchKeyword("color", "red")
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("city", "London"),
},
MustNot: []*qdrant.Condition{
qdrant.NewMatch("color", "red"),
},
},
})
```


Filtered points would be:

```
[
{ "id": 1, "city": "London", "color": "green" },
{ "id": 3, "city": "London", "color": "blue" }
]
```


In this case, the conditions are combined by `AND`

.

Also, the conditions could be recursively nested. Example:

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"must_not": [
{
"must": [
{ "key": "city", "match": { "value": "London" } },
{ "key": "color", "match": { "value": "red" } }
]
}
]
}
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
must_not=[
models.Filter(
must=[
models.FieldCondition(
key="city", match=models.MatchValue(value="London")
),
models.FieldCondition(
key="color", match=models.MatchValue(value="red")
),
],
),
],
),
)
```


```
client.scroll("{collection_name}", {
filter: {
must_not: [
{
must: [
{
key: "city",
match: { value: "London" },
},
{
key: "color",
match: { value: "red" },
},
],
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, ScrollPointsBuilder};
client
.scroll(
ScrollPointsBuilder::new("{collection_name}").filter(Filter::must_not([Filter::must(
[
Condition::matches("city", "London".to_string()),
Condition::matches("color", "red".to_string()),
],
)
.into()])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.filter;
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
import java.util.List;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addMustNot(
filter(
Filter.newBuilder()
.addAllMust(
List.of(
matchKeyword("city", "London"),
matchKeyword("color", "red")))
.build()))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.ScrollAsync(
collectionName: "{collection_name}",
filter: new Filter { MustNot = { MatchKeyword("city", "London") & MatchKeyword("color", "red") } }
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
MustNot: []*qdrant.Condition{
qdrant.NewFilterAsCondition(&qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("city", "London"),
qdrant.NewMatch("color", "red"),
},
}),
},
},
})
```


Filtered points would be:

```
[
{ "id": 1, "city": "London", "color": "green" },
{ "id": 3, "city": "London", "color": "blue" },
{ "id": 4, "city": "Berlin", "color": "red" },
{ "id": 5, "city": "Moscow", "color": "green" },
{ "id": 6, "city": "Moscow", "color": "blue" }
]
```


## Filtering conditions

Different types of values in payload correspond to different kinds of queries that we can apply to them. Let’s look at the existing condition variants and what types of data they apply to.

### Match

```
{
"key": "color",
"match": {
"value": "red"
}
}
```


```
models.FieldCondition(
key="color",
match=models.MatchValue(value="red"),
)
```


```
{
key: 'color',
match: {value: 'red'}
}
```


```
Condition::matches("color", "red".to_string())
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
matchKeyword("color", "red");
```


```
using static Qdrant.Client.Grpc.Conditions;
MatchKeyword("color", "red");
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewMatch("color", "red")
```


For the other types, the match condition will look exactly the same, except for the type used:

```
{
"key": "count",
"match": {
"value": 0
}
}
```


```
models.FieldCondition(
key="count",
match=models.MatchValue(value=0),
)
```


```
{
key: 'count',
match: {value: 0}
}
```


```
Condition::matches("count", 0)
```


```
import static io.qdrant.client.ConditionFactory.match;
match("count", 0);
```


```
using static Qdrant.Client.Grpc.Conditions;
Match("count", 0);
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewMatchInt("count", 0)
```


The simplest kind of condition is one that checks if the stored value equals the given one.
If several values are stored, at least one of them should match the condition.
You can apply it to [keyword](https://qdrant.tech/documentation/concepts/payload/#keyword), [integer](https://qdrant.tech/documentation/concepts/payload/#integer) and [bool](https://qdrant.tech/documentation/concepts/payload/#bool) payloads.

### Match Any

*Available as of v1.1.0*

In case you want to check if the stored value is one of multiple values, you can use the Match Any condition.
Match Any works as a logical OR for the given values. It can also be described as a `IN`

operator.

You can apply it to [keyword](https://qdrant.tech/documentation/concepts/payload/#keyword) and [integer](https://qdrant.tech/documentation/concepts/payload/#integer) payloads.

Example:

```
{
"key": "color",
"match": {
"any": ["black", "yellow"]
}
}
```


```
models.FieldCondition(
key="color",
match=models.MatchAny(any=["black", "yellow"]),
)
```


```
{
key: 'color',
match: {any: ['black', 'yellow']}
}
```


```
Condition::matches("color", vec!["black".to_string(), "yellow".to_string()])
```


```
import static io.qdrant.client.ConditionFactory.matchKeywords;
import java.util.List;
matchKeywords("color", List.of("black", "yellow"));
```


```
using static Qdrant.Client.Grpc.Conditions;
Match("color", ["black", "yellow"]);
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewMatchKeywords("color", "black", "yellow")
```


In this example, the condition will be satisfied if the stored value is either `black`

or `yellow`

.

If the stored value is an array, it should have at least one value matching any of the given values. E.g. if the stored value is `["black", "green"]`

, the condition will be satisfied, because `"black"`

is in `["black", "yellow"]`

.

### Match Except

*Available as of v1.2.0*

In case you want to check if the stored value is not one of multiple values, you can use the Match Except condition.
Match Except works as a logical NOR for the given values.
It can also be described as a `NOT IN`

operator.

You can apply it to [keyword](https://qdrant.tech/documentation/concepts/payload/#keyword) and [integer](https://qdrant.tech/documentation/concepts/payload/#integer) payloads.

Example:

```
{
"key": "color",
"match": {
"except": ["black", "yellow"]
}
}
```


```
models.FieldCondition(
key="color",
match=models.MatchExcept(**{"except": ["black", "yellow"]}),
)
```


```
{
key: 'color',
match: {except: ['black', 'yellow']}
}
```


```
use qdrant_client::qdrant::r#match::MatchValue;
Condition::matches(
"color",
!MatchValue::from(vec!["black".to_string(), "yellow".to_string()]),
)
```


```
import static io.qdrant.client.ConditionFactory.matchExceptKeywords;
import java.util.List;
matchExceptKeywords("color", List.of("black", "yellow"));
```


```
using static Qdrant.Client.Grpc.Conditions;
Match("color", ["black", "yellow"]);
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewMatchExcept("color", "black", "yellow")
```


In this example, the condition will be satisfied if the stored value is neither `black`

nor `yellow`

.

If the stored value is an array, it should have at least one value not matching any of the given values. E.g. if the stored value is `["black", "green"]`

, the condition will be satisfied, because `"green"`

does not match `"black"`

nor `"yellow"`

.

### Nested key

*Available as of v1.1.0*

Payloads being arbitrary JSON object, it is likely that you will need to filter on a nested field.

For convenience, we use a syntax similar to what can be found in the [Jq](https://stedolan.github.io/jq/manual/#Basicfilters) project.

Suppose we have a set of points with the following payload:

```
[
{
"id": 1,
"country": {
"name": "Germany",
"cities": [
{
"name": "Berlin",
"population": 3.7,
"sightseeing": ["Brandenburg Gate", "Reichstag"]
},
{
"name": "Munich",
"population": 1.5,
"sightseeing": ["Marienplatz", "Olympiapark"]
}
]
}
},
{
"id": 2,
"country": {
"name": "Japan",
"cities": [
{
"name": "Tokyo",
"population": 9.3,
"sightseeing": ["Tokyo Tower", "Tokyo Skytree"]
},
{
"name": "Osaka",
"population": 2.7,
"sightseeing": ["Osaka Castle", "Universal Studios Japan"]
}
]
}
}
]
```


You can search on a nested field using a dot notation.

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"should": [
{
"key": "country.name",
"match": {
"value": "Germany"
}
}
]
}
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
should=[
models.FieldCondition(
key="country.name", match=models.MatchValue(value="Germany")
),
],
),
)
```


```
client.scroll("{collection_name}", {
filter: {
should: [
{
key: "country.name",
match: { value: "Germany" },
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, ScrollPointsBuilder};
client
.scroll(
ScrollPointsBuilder::new("{collection_name}").filter(Filter::should([
Condition::matches("country.name", "Germany".to_string()),
])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addShould(matchKeyword("country.name", "Germany"))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.ScrollAsync(collectionName: "{collection_name}", filter: MatchKeyword("country.name", "Germany"));
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Should: []*qdrant.Condition{
qdrant.NewMatch("country.name", "Germany"),
},
},
})
```


You can also search through arrays by projecting inner values using the `[]`

syntax.

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"should": [
{
"key": "country.cities[].population",
"range": {
"gte": 9.0,
}
}
]
}
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
should=[
models.FieldCondition(
key="country.cities[].population",
range=models.Range(
gt=None,
gte=9.0,
lt=None,
lte=None,
),
),
],
),
)
```


```
client.scroll("{collection_name}", {
filter: {
should: [
{
key: "country.cities[].population",
range: {
gt: null,
gte: 9.0,
lt: null,
lte: null,
},
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, Range, ScrollPointsBuilder};
client
.scroll(
ScrollPointsBuilder::new("{collection_name}").filter(Filter::should([
Condition::range(
"country.cities[].population",
Range {
gte: Some(9.0),
..Default::default()
},
),
])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.range;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Common.Range;
import io.qdrant.client.grpc.Points.ScrollPoints;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addShould(
range(
"country.cities[].population",
Range.newBuilder().setGte(9.0).build()))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.ScrollAsync(
collectionName: "{collection_name}",
filter: Range("country.cities[].population", new Qdrant.Client.Grpc.Range { Gte = 9.0 })
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Should: []*qdrant.Condition{
qdrant.NewRange("country.cities[].population", &qdrant.Range{
Gte: qdrant.PtrOf(9.0),
}),
},
},
})
```


This query would only output the point with id 2 as only Japan has a city with population greater than 9.0.

And the leaf nested field can also be an array.

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"should": [
{
"key": "country.cities[].sightseeing",
"match": {
"value": "Osaka Castle"
}
}
]
}
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
should=[
models.FieldCondition(
key="country.cities[].sightseeing",
match=models.MatchValue(value="Osaka Castle"),
),
],
),
)
```


```
client.scroll("{collection_name}", {
filter: {
should: [
{
key: "country.cities[].sightseeing",
match: { value: "Osaka Castle" },
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, ScrollPointsBuilder};
client
.scroll(
ScrollPointsBuilder::new("{collection_name}").filter(Filter::should([
Condition::matches("country.cities[].sightseeing", "Osaka Castle".to_string()),
])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addShould(matchKeyword("country.cities[].sightseeing", "Germany"))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.ScrollAsync(
collectionName: "{collection_name}",
filter: MatchKeyword("country.cities[].sightseeing", "Germany")
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Should: []*qdrant.Condition{
qdrant.NewMatch("country.cities[].sightseeing", "Germany"),
},
},
})
```


This query would only output the point with id 2 as only Japan has a city with the “Osaka castke” as part of the sightseeing.

### Nested object filter

*Available as of v1.2.0*

By default, the conditions are taking into account the entire payload of a point.

For instance, given two points with the following payload:

```
[
{
"id": 1,
"dinosaur": "t-rex",
"diet": [
{ "food": "leaves", "likes": false},
{ "food": "meat", "likes": true}
]
},
{
"id": 2,
"dinosaur": "diplodocus",
"diet": [
{ "food": "leaves", "likes": true},
{ "food": "meat", "likes": false}
]
}
]
```


The following query would match both points:

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"must": [
{
"key": "diet[].food",
"match": {
"value": "meat"
}
},
{
"key": "diet[].likes",
"match": {
"value": true
}
}
]
}
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
must=[
models.FieldCondition(
key="diet[].food", match=models.MatchValue(value="meat")
),
models.FieldCondition(
key="diet[].likes", match=models.MatchValue(value=True)
),
],
),
)
```


```
client.scroll("{collection_name}", {
filter: {
must: [
{
key: "diet[].food",
match: { value: "meat" },
},
{
key: "diet[].likes",
match: { value: true },
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, ScrollPointsBuilder};
client
.scroll(
ScrollPointsBuilder::new("{collection_name}").filter(Filter::must([
Condition::matches("diet[].food", "meat".to_string()),
Condition::matches("diet[].likes", true),
])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.match;
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addAllMust(
List.of(matchKeyword("diet[].food", "meat"), match("diet[].likes", true)))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.ScrollAsync(
collectionName: "{collection_name}",
filter: MatchKeyword("diet[].food", "meat") & Match("diet[].likes", true)
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("diet[].food", "meat"),
qdrant.NewMatchBool("diet[].likes", true),
},
},
})
```


This happens because both points are matching the two conditions:

- the “t-rex” matches food=meat on
`diet[1].food`

and likes=true on`diet[1].likes`

- the “diplodocus” matches food=meat on
`diet[1].food`

and likes=true on`diet[0].likes`


To retrieve only the points which are matching the conditions on an array element basis, that is the point with id 1 in this example, you would need to use a nested object filter.

Nested object filters allow arrays of objects to be queried independently of each other.

It is achieved by using the `nested`

condition type formed by a payload key to focus on and a filter to apply.

The key should point to an array of objects and can be used with or without the bracket notation (“data” or “data[]”).

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"must": [{
"nested": {
"key": "diet",
"filter":{
"must": [
{
"key": "food",
"match": {
"value": "meat"
}
},
{
"key": "likes",
"match": {
"value": true
}
}
]
}
}
}]
}
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
must=[
models.NestedCondition(
nested=models.Nested(
key="diet",
filter=models.Filter(
must=[
models.FieldCondition(
key="food", match=models.MatchValue(value="meat")
),
models.FieldCondition(
key="likes", match=models.MatchValue(value=True)
),
]
),
)
)
],
),
)
```


```
client.scroll("{collection_name}", {
filter: {
must: [
{
nested: {
key: "diet",
filter: {
must: [
{
key: "food",
match: { value: "meat" },
},
{
key: "likes",
match: { value: true },
},
],
},
},
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, NestedCondition, ScrollPointsBuilder};
client
.scroll(
ScrollPointsBuilder::new("{collection_name}").filter(Filter::must([NestedCondition {
key: "diet".to_string(),
filter: Some(Filter::must([
Condition::matches("food", "meat".to_string()),
Condition::matches("likes", true),
])),
}
.into()])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.match;
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.ConditionFactory.nested;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
import java.util.List;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addMust(
nested(
"diet",
Filter.newBuilder()
.addAllMust(
List.of(
matchKeyword("food", "meat"), match("likes", true)))
.build()))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.ScrollAsync(
collectionName: "{collection_name}",
filter: Nested("diet", MatchKeyword("food", "meat") & Match("likes", true))
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewNestedFilter("diet", &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("food", "meat"),
qdrant.NewMatchBool("likes", true),
},
}),
},
},
})
```


The matching logic is modified to be applied at the level of an array element within the payload.

Nested filters work in the same way as if the nested filter was applied to a single element of the array at a time. Parent document is considered to match the condition if at least one element of the array matches the nested filter.

**Limitations**

The `has_id`

condition is not supported within the nested object filter. If you need it, place it in an adjacent `must`

clause.

```
POST /collections/{collection_name}/points/scroll
{
"filter":{
"must":[
{
"nested":{
"key":"diet",
"filter":{
"must":[
{
"key":"food",
"match":{
"value":"meat"
}
},
{
"key":"likes",
"match":{
"value":true
}
}
]
}
}
},
{
"has_id":[
1
]
}
]
}
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
must=[
models.NestedCondition(
nested=models.Nested(
key="diet",
filter=models.Filter(
must=[
models.FieldCondition(
key="food", match=models.MatchValue(value="meat")
),
models.FieldCondition(
key="likes", match=models.MatchValue(value=True)
),
]
),
)
),
models.HasIdCondition(has_id=[1]),
],
),
)
```


```
client.scroll("{collection_name}", {
filter: {
must: [
{
nested: {
key: "diet",
filter: {
must: [
{
key: "food",
match: { value: "meat" },
},
{
key: "likes",
match: { value: true },
},
],
},
},
},
{
has_id: [1],
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, NestedCondition, ScrollPointsBuilder};
client
.scroll(
ScrollPointsBuilder::new("{collection_name}").filter(Filter::must([
NestedCondition {
key: "diet".to_string(),
filter: Some(Filter::must([
Condition::matches("food", "meat".to_string()),
Condition::matches("likes", true),
])),
}
.into(),
Condition::has_id([1]),
])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.hasId;
import static io.qdrant.client.ConditionFactory.match;
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.ConditionFactory.nested;
import static io.qdrant.client.PointIdFactory.id;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
import java.util.List;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addMust(
nested(
"diet",
Filter.newBuilder()
.addAllMust(
List.of(
matchKeyword("food", "meat"), match("likes", true)))
.build()))
.addMust(hasId(id(1)))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.ScrollAsync(
collectionName: "{collection_name}",
filter: Nested("diet", MatchKeyword("food", "meat") & Match("likes", true)) & HasId(1)
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewNestedFilter("diet", &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("food", "meat"),
qdrant.NewMatchBool("likes", true),
},
}),
qdrant.NewHasID(qdrant.NewIDNum(1)),
},
},
})
```


### Full Text Match

*Available as of v0.10.0*

A special case of the `match`

condition is the `text`

match condition.
It allows you to search for a specific substring, token or phrase within the text field.

Exact texts that will match the condition depend on full-text index configuration.
Configuration is defined during the index creation and describe at [full-text index](https://qdrant.tech/documentation/concepts/indexing/#full-text-index).

If there is no full-text index for the field, the condition will work as exact substring match.

```
{
"key": "description",
"match": {
"text": "good cheap"
}
}
```


```
models.FieldCondition(
key="description",
match=models.MatchText(text="good cheap"),
)
```


```
{
key: 'description',
match: {text: 'good cheap'}
}
```


```
use qdrant_client::qdrant::Condition;
Condition::matches_text("description", "good cheap")
```


```
import static io.qdrant.client.ConditionFactory.matchText;
matchText("description", "good cheap");
```


```
using static Qdrant.Client.Grpc.Conditions;
MatchText("description", "good cheap");
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewMatchText("description", "good cheap")
```


If the query has several words, then the condition will be satisfied only if all of them are present in the text.

### Full Text Any

*Available as of v1.16.0*

The `text_any`

full-text match condition is similar to the `text`

condition, but with a key difference: while `text`

only matches text fields that contain *all* the query terms, `text_any`

matches fields that contain *any* of the query terms. In other words, even if a text field contains just one of the query terms, it is considered a match.

For example, a query for `good cheap`

matches `cheap hardware`

as well as `good performance`

.

```
{
"key": "description",
"match": {
"text_any": "good cheap"
}
}
```


```
models.FieldCondition(
key="description",
match=models.MatchTextAny(text_any="good cheap"),
)
```


```
{
key: 'description',
match: {text_any: 'good cheap'}
}
```


```
use qdrant_client::qdrant::Condition;
Condition::matches_text_any("description", "good cheap")
```


```
import static io.qdrant.client.ConditionFactory.matchTextAny;
matchTextAny("description", "good cheap");
```


```
using static Qdrant.Client.Grpc.Conditions;
MatchTextAny("description", "good cheap");
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewMatchTextAny("description", "good cheap")
```


### Phrase Match

*Available as of v1.15.0*

A match `phrase`

condition also leverages [full-text index](https://qdrant.tech/documentation/concepts/indexing/#full-text-index), to perform exact phrase comparisons.
It allows you to search for a specific token phrase within the text field.

For example, the text `"quick brown fox"`

will be matched by the query `"brown fox"`

, but not by `"fox brown"`

.

If there is no full-text index for the field, the condition will work as exact substring match.

```
{
"key": "description",
"match": {
"phrase": "brown fox"
}
}
```


```
models.FieldCondition(
key="description",
match=models.MatchPhrase(phrase="brown fox"),
)
```


```
{
key: 'description',
match: {phrase: 'brown fox'}
}
```


```
use qdrant_client::qdrant::Condition;
Condition::matches_phrase("description", "brown fox")
```


```
import static io.qdrant.client.ConditionFactory.matchPhrase;
matchPhrase("description", "brown fox");
```


```
using static Qdrant.Client.Grpc.Conditions;
MatchPhrase("description", "brown fox");
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewMatchPhrase("description", "brown fox")
```


### Range

```
{
"key": "price",
"range": {
"gt": null,
"gte": 100.0,
"lt": null,
"lte": 450.0
}
}
```


```
models.FieldCondition(
key="price",
range=models.Range(
gt=None,
gte=100.0,
lt=None,
lte=450.0,
),
)
```


```
{
key: 'price',
range: {
gt: null,
gte: 100.0,
lt: null,
lte: 450.0
}
}
```


```
use qdrant_client::qdrant::{Condition, Range};
Condition::range(
"price",
Range {
gt: None,
gte: Some(100.0),
lt: None,
lte: Some(450.0),
},
)
```


```
import static io.qdrant.client.ConditionFactory.range;
import io.qdrant.client.grpc.Common.Range;
range("price", Range.newBuilder().setGte(100.0).setLte(450).build());
```


```
using static Qdrant.Client.Grpc.Conditions;
Range("price", new Qdrant.Client.Grpc.Range { Gte = 100.0, Lte = 450 });
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewRange("price", &qdrant.Range{
Gte: qdrant.PtrOf(100.0),
Lte: qdrant.PtrOf(450.0),
})
```


The `range`

condition sets the range of possible values for stored payload values.
If several values are stored, at least one of them should match the condition.

Comparisons that can be used:

`gt`

- greater than`gte`

- greater than or equal`lt`

- less than`lte`

- less than or equal

Can be applied to [float](https://qdrant.tech/documentation/concepts/payload/#float) and [integer](https://qdrant.tech/documentation/concepts/payload/#integer) payloads.

### Datetime Range

The datetime range is a unique range condition, used for [datetime](https://qdrant.tech/documentation/concepts/payload/#datetime) payloads, which supports RFC 3339 formats.
You do not need to convert dates to UNIX timestamps. During comparison, timestamps are parsed and converted to UTC.

*Available as of v1.8.0*

```
{
"key": "date",
"range": {
"gt": "2023-02-08T10:49:00Z",
"gte": null,
"lt": null,
"lte": "2024-01-31 10:14:31Z"
}
}
```


```
models.FieldCondition(
key="date",
range=models.DatetimeRange(
gt="2023-02-08T10:49:00Z",
gte=None,
lt=None,
lte="2024-01-31T10:14:31Z",
),
)
```


```
{
key: 'date',
range: {
gt: '2023-02-08T10:49:00Z',
gte: null,
lt: null,
lte: '2024-01-31T10:14:31Z'
}
}
```


```
use qdrant_client::qdrant::{Condition, DatetimeRange, Timestamp};
Condition::datetime_range(
"date",
DatetimeRange {
gt: Some(Timestamp::date_time(2023, 2, 8, 10, 49, 0).unwrap()),
gte: None,
lt: None,
lte: Some(Timestamp::date_time(2024, 1, 31, 10, 14, 31).unwrap()),
},
)
```


```
import static io.qdrant.client.ConditionFactory.datetimeRange;
import com.google.protobuf.Timestamp;
import io.qdrant.client.grpc.Common.DatetimeRange;
import java.time.Instant;
long gt = Instant.parse("2023-02-08T10:49:00Z").getEpochSecond();
long lte = Instant.parse("2024-01-31T10:14:31Z").getEpochSecond();
datetimeRange("date",
DatetimeRange.newBuilder()
.setGt(Timestamp.newBuilder().setSeconds(gt))
.setLte(Timestamp.newBuilder().setSeconds(lte))
.build());
```


```
using Qdrant.Client.Grpc;
Conditions.DatetimeRange(
field: "date",
gt: new DateTime(2023, 2, 8, 10, 49, 0, DateTimeKind.Utc),
lte: new DateTime(2024, 1, 31, 10, 14, 31, DateTimeKind.Utc)
);
```


```
import (
"time"
"github.com/qdrant/go-client/qdrant"
"google.golang.org/protobuf/types/known/timestamppb"
)
qdrant.NewDatetimeRange("date", &qdrant.DatetimeRange{
Gt: timestamppb.New(time.Date(2023, 2, 8, 10, 49, 0, 0, time.UTC)),
Lte: timestamppb.New(time.Date(2024, 1, 31, 10, 14, 31, 0, time.UTC)),
})
```


### UUID Match

*Available as of v1.11.0*

Matching of UUID values works similarly to the regular `match`

condition for strings.
Functionally, it will work with `keyword`

and `uuid`

indexes exactly the same, but `uuid`

index is more memory efficient.

```
{
"key": "uuid",
"match": {
"value": "f47ac10b-58cc-4372-a567-0e02b2c3d479"
}
}
```


```
models.FieldCondition(
key="uuid",
match=models.MatchValue(value="f47ac10b-58cc-4372-a567-0e02b2c3d479"),
)
```


```
{
key: 'uuid',
match: {value: 'f47ac10b-58cc-4372-a567-0e02b2c3d479'}
}
```


```
Condition::matches("uuid", "f47ac10b-58cc-4372-a567-0e02b2c3d479".to_string())
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
matchKeyword("uuid", "f47ac10b-58cc-4372-a567-0e02b2c3d479");
```


```
using static Qdrant.Client.Grpc.Conditions;
MatchKeyword("uuid", "f47ac10b-58cc-4372-a567-0e02b2c3d479");
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewMatch("uuid", "f47ac10b-58cc-4372-a567-0e02b2c3d479")
```


### Geo

#### Geo Bounding Box

```
{
"key": "location",
"geo_bounding_box": {
"bottom_right": {
"lon": 13.455868,
"lat": 52.495862
},
"top_left": {
"lon": 13.403683,
"lat": 52.520711
}
}
}
```


```
models.FieldCondition(
key="location",
geo_bounding_box=models.GeoBoundingBox(
bottom_right=models.GeoPoint(
lon=13.455868,
lat=52.495862,
),
top_left=models.GeoPoint(
lon=13.403683,
lat=52.520711,
),
),
)
```


```
{
key: 'location',
geo_bounding_box: {
bottom_right: {
lon: 13.455868,
lat: 52.495862
},
top_left: {
lon: 13.403683,
lat: 52.520711
}
}
}
```


```
use qdrant_client::qdrant::{Condition, GeoBoundingBox, GeoPoint};
Condition::geo_bounding_box(
"location",
GeoBoundingBox {
bottom_right: Some(GeoPoint {
lon: 13.455868,
lat: 52.495862,
}),
top_left: Some(GeoPoint {
lon: 13.403683,
lat: 52.520711,
}),
},
)
```


```
import static io.qdrant.client.ConditionFactory.geoBoundingBox;
geoBoundingBox("location", 52.520711, 13.403683, 52.495862, 13.455868);
```


```
using static Qdrant.Client.Grpc.Conditions;
GeoBoundingBox("location", 52.520711, 13.403683, 52.495862, 13.455868);
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewGeoBoundingBox("location", 52.520711, 13.403683, 52.495862, 13.455868)
```


It matches with `location`

s inside a rectangle with the coordinates of the upper left corner in `top_left`

and the coordinates of the lower right corner in `bottom_right`

.

#### Geo Radius

```
{
"key": "location",
"geo_radius": {
"center": {
"lon": 13.403683,
"lat": 52.520711
},
"radius": 1000.0
}
}
```


```
models.FieldCondition(
key="location",
geo_radius=models.GeoRadius(
center=models.GeoPoint(
lon=13.403683,
lat=52.520711,
),
radius=1000.0,
),
)
```


```
{
key: 'location',
geo_radius: {
center: {
lon: 13.403683,
lat: 52.520711
},
radius: 1000.0
}
}
```


```
use qdrant_client::qdrant::{Condition, GeoPoint, GeoRadius};
Condition::geo_radius(
"location",
GeoRadius {
center: Some(GeoPoint {
lon: 13.403683,
lat: 52.520711,
}),
radius: 1000.0,
},
)
```


```
import static io.qdrant.client.ConditionFactory.geoRadius;
geoRadius("location", 52.520711, 13.403683, 1000.0f);
```


```
using static Qdrant.Client.Grpc.Conditions;
GeoRadius("location", 52.520711, 13.403683, 1000.0f);
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewGeoRadius("location", 52.520711, 13.403683, 1000.0)
```


It matches with `location`

s inside a circle with the `center`

at the center and a radius of `radius`

meters.

If several values are stored, at least one of them should match the condition.
These conditions can only be applied to payloads that match the [geo-data format](https://qdrant.tech/documentation/concepts/payload/#geo).

#### Geo Polygon

Geo Polygons search is useful for when you want to find points inside an irregularly shaped area, for example a country boundary or a forest boundary. A polygon always has an exterior ring and may optionally include interior rings. A lake with an island would be an example of an interior ring. If you wanted to find points in the water but not on the island, you would make an interior ring for the island.

When defining a ring, you must pick either a clockwise or counterclockwise ordering for your points. The first and last point of the polygon must be the same.

Currently, we only support unprojected global coordinates (decimal degrees longitude and latitude) and we are datum agnostic.

```
{
"key": "location",
"geo_polygon": {
"exterior": {
"points": [
{ "lon": -70.0, "lat": -70.0 },
{ "lon": 60.0, "lat": -70.0 },
{ "lon": 60.0, "lat": 60.0 },
{ "lon": -70.0, "lat": 60.0 },
{ "lon": -70.0, "lat": -70.0 }
]
},
"interiors": [
{
"points": [
{ "lon": -65.0, "lat": -65.0 },
{ "lon": 0.0, "lat": -65.0 },
{ "lon": 0.0, "lat": 0.0 },
{ "lon": -65.0, "lat": 0.0 },
{ "lon": -65.0, "lat": -65.0 }
]
}
]
}
}
```


```
models.FieldCondition(
key="location",
geo_polygon=models.GeoPolygon(
exterior=models.GeoLineString(
points=[
models.GeoPoint(
lon=-70.0,
lat=-70.0,
),
models.GeoPoint(
lon=60.0,
lat=-70.0,
),
models.GeoPoint(
lon=60.0,
lat=60.0,
),
models.GeoPoint(
lon=-70.0,
lat=60.0,
),
models.GeoPoint(
lon=-70.0,
lat=-70.0,
),
]
),
interiors=[
models.GeoLineString(
points=[
models.GeoPoint(
lon=-65.0,
lat=-65.0,
),
models.GeoPoint(
lon=0.0,
lat=-65.0,
),
models.GeoPoint(
lon=0.0,
lat=0.0,
),
models.GeoPoint(
lon=-65.0,
lat=0.0,
),
models.GeoPoint(
lon=-65.0,
lat=-65.0,
),
]
)
],
),
)
```


```
{
key: "location",
geo_polygon: {
exterior: {
points: [
{
lon: -70.0,
lat: -70.0
},
{
lon: 60.0,
lat: -70.0
},
{
lon: 60.0,
lat: 60.0
},
{
lon: -70.0,
lat: 60.0
},
{
lon: -70.0,
lat: -70.0
}
]
},
interiors: [
{
points: [
{
lon: -65.0,
lat: -65.0
},
{
lon: 0,
lat: -65.0
},
{
lon: 0,
lat: 0
},
{
lon: -65.0,
lat: 0
},
{
lon: -65.0,
lat: -65.0
}
]
}
]
}
}
```


```
use qdrant_client::qdrant::{Condition, GeoLineString, GeoPoint, GeoPolygon};
Condition::geo_polygon(
"location",
GeoPolygon {
exterior: Some(GeoLineString {
points: vec![
GeoPoint {
lon: -70.0,
lat: -70.0,
},
GeoPoint {
lon: 60.0,
lat: -70.0,
},
GeoPoint {
lon: 60.0,
lat: 60.0,
},
GeoPoint {
lon: -70.0,
lat: 60.0,
},
GeoPoint {
lon: -70.0,
lat: -70.0,
},
],
}),
interiors: vec![GeoLineString {
points: vec![
GeoPoint {
lon: -65.0,
lat: -65.0,
},
GeoPoint {
lon: 0.0,
lat: -65.0,
},
GeoPoint { lon: 0.0, lat: 0.0 },
GeoPoint {
lon: -65.0,
lat: 0.0,
},
GeoPoint {
lon: -65.0,
lat: -65.0,
},
],
}],
},
)
```


```
import static io.qdrant.client.ConditionFactory.geoPolygon;
import io.qdrant.client.grpc.Common.GeoLineString;
import io.qdrant.client.grpc.Common.GeoPoint;
import java.util.List;
geoPolygon(
"location",
GeoLineString.newBuilder()
.addAllPoints(
List.of(
GeoPoint.newBuilder().setLon(-70.0).setLat(-70.0).build(),
GeoPoint.newBuilder().setLon(60.0).setLat(-70.0).build(),
GeoPoint.newBuilder().setLon(60.0).setLat(60.0).build(),
GeoPoint.newBuilder().setLon(-70.0).setLat(60.0).build(),
GeoPoint.newBuilder().setLon(-70.0).setLat(-70.0).build()))
.build(),
List.of(
GeoLineString.newBuilder()
.addAllPoints(
List.of(
GeoPoint.newBuilder().setLon(-65.0).setLat(-65.0).build(),
GeoPoint.newBuilder().setLon(0.0).setLat(-65.0).build(),
GeoPoint.newBuilder().setLon(0.0).setLat(0.0).build(),
GeoPoint.newBuilder().setLon(-65.0).setLat(0.0).build(),
GeoPoint.newBuilder().setLon(-65.0).setLat(-65.0).build()))
.build()));
```


```
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
GeoPolygon(
field: "location",
exterior: new GeoLineString
{
Points =
{
new GeoPoint { Lat = -70.0, Lon = -70.0 },
new GeoPoint { Lat = 60.0, Lon = -70.0 },
new GeoPoint { Lat = 60.0, Lon = 60.0 },
new GeoPoint { Lat = -70.0, Lon = 60.0 },
new GeoPoint { Lat = -70.0, Lon = -70.0 }
}
},
interiors: [
new()
{
Points =
{
new GeoPoint { Lat = -65.0, Lon = -65.0 },
new GeoPoint { Lat = 0.0, Lon = -65.0 },
new GeoPoint { Lat = 0.0, Lon = 0.0 },
new GeoPoint { Lat = -65.0, Lon = 0.0 },
new GeoPoint { Lat = -65.0, Lon = -65.0 }
}
}
]
);
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewGeoPolygon("location",
&qdrant.GeoLineString{
Points: []*qdrant.GeoPoint{
{Lat: -70, Lon: -70},
{Lat: 60, Lon: -70},
{Lat: 60, Lon: 60},
{Lat: -70, Lon: 60},
{Lat: -70, Lon: -70},
},
}, &qdrant.GeoLineString{
Points: []*qdrant.GeoPoint{
{Lat: -65, Lon: -65},
{Lat: 0, Lon: -65},
{Lat: 0, Lon: 0},
{Lat: -65, Lon: 0},
{Lat: -65, Lon: -65},
},
})
```


A match is considered any point location inside or on the boundaries of the given polygon’s exterior but not inside any interiors.

If several location values are stored for a point, then any of them matching will include that point as a candidate in the resultset.
These conditions can only be applied to payloads that match the [geo-data format](https://qdrant.tech/documentation/concepts/payload/#geo).

### Values count

In addition to the direct value comparison, it is also possible to filter by the amount of values.

For example, given the data:

```
[
{ "id": 1, "name": "product A", "comments": ["Very good!", "Excellent"] },
{ "id": 2, "name": "product B", "comments": ["meh", "expected more", "ok"] }
]
```


We can perform the search only among the items with more than two comments:

```
{
"key": "comments",
"values_count": {
"gt": 2
}
}
```


```
models.FieldCondition(
key="comments",
values_count=models.ValuesCount(gt=2),
)
```


```
{
key: 'comments',
values_count: {gt: 2}
}
```


```
use qdrant_client::qdrant::{Condition, ValuesCount};
Condition::values_count(
"comments",
ValuesCount {
gt: Some(2),
..Default::default()
},
)
```


```
import static io.qdrant.client.ConditionFactory.valuesCount;
import io.qdrant.client.grpc.Common.ValuesCount;
valuesCount("comments", ValuesCount.newBuilder().setGt(2).build());
```


```
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
ValuesCount("comments", new ValuesCount { Gt = 2 });
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewValuesCount("comments", &qdrant.ValuesCount{
Gt: qdrant.PtrOf(uint64(2)),
})
```


The result would be:

```
[{ "id": 2, "name": "product B", "comments": ["meh", "expected more", "ok"] }]
```


If stored value is not an array - it is assumed that the amount of values is equals to 1.

### Is Empty

Sometimes it is also useful to filter out records that are missing some value.
The `IsEmpty`

condition may help you with that:

```
{
"is_empty": {
"key": "reports"
}
}
```


```
models.IsEmptyCondition(
is_empty=models.PayloadField(key="reports"),
)
```


```
{
is_empty: {
key: "reports"
}
}
```


```
use qdrant_client::qdrant::Condition;
Condition::is_empty("reports")
```


```
import static io.qdrant.client.ConditionFactory.isEmpty;
isEmpty("reports");
```


```
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
IsEmpty("reports");
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewIsEmpty("reports")
```


This condition will match all records where the field `reports`

either does not exist, or has `null`

or `[]`

value.

### Is Null

It is not possible to test for `NULL`

values with the **match** condition.
We have to use `IsNull`

condition instead:

```
{
"is_null": {
"key": "reports"
}
}
```


```
models.IsNullCondition(
is_null=models.PayloadField(key="reports"),
)
```


```
{
is_null: {
key: "reports"
}
}
```


```
use qdrant_client::qdrant::Condition;
Condition::is_null("reports")
```


```
import static io.qdrant.client.ConditionFactory.isNull;
isNull("reports");
```


```
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
IsNull("reports");
```


```
import "github.com/qdrant/go-client/qdrant"
qdrant.NewIsNull("reports")
```


This condition will match all records where the field `reports`

exists and has `NULL`

value.

### Has id

This type of query is not related to payload, but can be very useful in some situations. For example, the user could mark some specific search results as irrelevant, or we want to search only among the specified points.

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"must": [
{ "has_id": [1,3,5,7,9,11] }
]
}
...
}
```


```
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
must=[
models.HasIdCondition(has_id=[1, 3, 5, 7, 9, 11]),
],
),
)
```


```
client.scroll("{collection_name}", {
filter: {
must: [
{
has_id: [1, 3, 5, 7, 9, 11],
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, ScrollPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.scroll(
ScrollPointsBuilder::new("{collection_name}")
.filter(Filter::must([Condition::has_id([1, 3, 5, 7, 9, 11])])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.hasId;
import static io.qdrant.client.PointIdFactory.id;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
import java.util.List;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addMust(hasId(List.of(id(1), id(3), id(5), id(7), id(9), id(11))))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.ScrollAsync(collectionName: "{collection_name}", filter: HasId([1, 3, 5, 7, 9, 11]));
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewHasID(
qdrant.NewIDNum(1),
qdrant.NewIDNum(3),
qdrant.NewIDNum(5),
qdrant.NewIDNum(7),
qdrant.NewIDNum(9),
qdrant.NewIDNum(11),
),
},
},
})
```


Filtered points would be:

```
[
{ "id": 1, "city": "London", "color": "green" },
{ "id": 3, "city": "London", "color": "blue" },
{ "id": 5, "city": "Moscow", "color": "green" }
]
```


### Has vector

*Available as of v1.13.0*

This condition enables filtering by the presence of a given named vector on a point.

For example, if we have two named vector in our collection.

```
PUT /collections/{collection_name}
{
"vectors": {
"image": {
"size": 4,
"distance": "Dot"
},
"text": {
"size": 8,
"distance": "Cosine"
}
},
"sparse_vectors": {
"sparse-image": {},
"sparse-text": {},
},
}
```


Some points in the collection might have all vectors, some might have only a subset of them.

This is how you can search for points which have the dense `image`

vector defined:

```
POST /collections/{collection_name}/points/scroll
{
"filter": {
"must": [
{ "has_vector": "image" }
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.scroll(
collection_name="{collection_name}",
scroll_filter=models.Filter(
must=[
models.HasVectorCondition(has_vector="image"),
],
),
)
```


```
client.scroll("{collection_name}", {
filter: {
must: [
{
has_vector: "image",
},
],
},
});
```


```
use qdrant_client::qdrant::{Condition, Filter, ScrollPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.scroll(
ScrollPointsBuilder::new("{collection_name}")
.filter(Filter::must([Condition::has_vector("image")])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.hasVector;
import static io.qdrant.client.PointIdFactory.id;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.ScrollPoints;
import java.util.List;
client
.scrollAsync(
ScrollPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(
Filter.newBuilder()
.addMust(hasVector("image"))
.build())
.build())
.get();
```


```
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.ScrollAsync(collectionName: "{collection_name}", filter: HasVector("image"));
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Scroll(context.Background(), &qdrant.ScrollPoints{
CollectionName: "{collection_name}",
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewHasVector(
"image",
),
},
},
})
```

---

## Source: https://qdrant.tech/documentation/search/hybrid-queries/

# Hybrid and Multi-Stage Queries

*Available as of v1.10.0*

With the introduction of [multiple named vectors per point](https://qdrant.tech/documentation/concepts/vectors/#named-vectors), there are use-cases when the best search is obtained by combining multiple queries,
or by performing the search in more than one stage.

Qdrant has a flexible and universal interface to make this possible, called `Query API`

([API reference](https://api.qdrant.tech/api-reference/search/query-points)).

The main component for making the combinations of queries possible is the `prefetch`

parameter, which enables making sub-requests.

Specifically, whenever a query has at least one prefetch, Qdrant will:

- Perform the prefetch query (or queries),
- Apply the main query over the results of its prefetch(es).

Additionally, prefetches can have prefetches themselves, so you can have nested prefetches.

## Hybrid Search

One of the most common problems when you have different representations of the same data is to combine the queried points for each representation into a single result.

For example, in text search, it is often useful to combine dense and sparse vectors to get the best of both worlds: semantic understanding from dense vectors and precise word matching from sparse vectors.

Qdrant has a few ways of fusing the results from different queries: `rrf`

and `dbsf`


### Reciprocal Rank Fusion (RRF)

[RRF](https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf)considers the positions of results within each query and boosts those that appear closer to the top in multiple sets of results. The score of a document is calculated using its rank in each result set:

$$ score(d\in D) = \sum_{r_d\in R(d)} \frac{1}{k + \frac{r_d + 1}{w_r} - 1} $$

Where:

- $D$ the set of points across all results
- $R(d)$ is the set of rankings for a particular document
- $k$ is a constant (set to 2 by default)
- $r$ is an ordered set of results from one source
- $r_d$ is the rank of document $d$ in ranking $r$
- $w_r$ is the weight of ranking $r$ (set to 1 by default)

Because $w_r$ defaults to 1, without setting explicit weights, the formula can be simplified to the original RRF function:

$$ score(d\in D) = \sum_{r_d\in R(d)} \frac{1}{k + r_d} $$

Here is an example of RRF for a query containing two prefetches against different named vectors configured to hold sparse and dense vectors, respectively.

```
POST /collections/{collection_name}/points/query
{
"prefetch": [
{
"query": {
"indices": [1, 42], // <┐
"values": [0.22, 0.8] // <┴─sparse vector
},
"using": "sparse",
"limit": 20
},
{
"query": [0.01, 0.45, 0.67, ...], // <-- dense vector
"using": "dense",
"limit": 20
}
],
"query": { "fusion": "rrf" }, // <--- reciprocal rank fusion
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
prefetch=[
models.Prefetch(
query=models.SparseVector(indices=[1, 42], values=[0.22, 0.8]),
using="sparse",
limit=20,
),
models.Prefetch(
query=[0.01, 0.45, 0.67], # <-- dense vector
using="dense",
limit=20,
),
],
query=models.FusionQuery(fusion=models.Fusion.RRF),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
prefetch: [
{
query: {
values: [0.22, 0.8],
indices: [1, 42],
},
using: 'sparse',
limit: 20,
},
{
query: [0.01, 0.45, 0.67],
using: 'dense',
limit: 20,
},
],
query: {
fusion: 'rrf',
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Fusion, PrefetchQueryBuilder, Query, QueryPointsBuilder};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.query(
QueryPointsBuilder::new("{collection_name}")
.add_prefetch(PrefetchQueryBuilder::default()
.query(Query::new_nearest([(1, 0.22), (42, 0.8)].as_slice()))
.using("sparse")
.limit(20u64)
)
.add_prefetch(PrefetchQueryBuilder::default()
.query(Query::new_nearest(vec![0.01, 0.45, 0.67]))
.using("dense")
.limit(20u64)
)
.query(Query::new_fusion(Fusion::Rrf))
).await?;
```


```
import static io.qdrant.client.QueryFactory.fusion;
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.Fusion;
import io.qdrant.client.grpc.Points.PrefetchQuery;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.addPrefetch(PrefetchQuery.newBuilder()
.setQuery(nearest(List.of(0.22f, 0.8f), List.of(1, 42)))
.setUsing("sparse")
.setLimit(20)
.build())
.addPrefetch(PrefetchQuery.newBuilder()
.setQuery(nearest(List.of(0.01f, 0.45f, 0.67f)))
.setUsing("dense")
.setLimit(20)
.build())
.setQuery(fusion(Fusion.RRF))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
prefetch: new List < PrefetchQuery > {
new() {
Query = new(float, uint)[] {
(0.22f, 1), (0.8f, 42),
},
Using = "sparse",
Limit = 20
},
new() {
Query = new float[] {
0.01f, 0.45f, 0.67f
},
Using = "dense",
Limit = 20
}
},
query: Fusion.Rrf
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Prefetch: []*qdrant.PrefetchQuery{
{
Query: qdrant.NewQuerySparse([]uint32{1, 42}, []float32{0.22, 0.8}),
Using: qdrant.PtrOf("sparse"),
},
{
Query: qdrant.NewQueryDense([]float32{0.01, 0.45, 0.67}),
Using: qdrant.PtrOf("dense"),
},
},
Query: qdrant.NewQueryFusion(qdrant.Fusion_RRF),
})
```


#### Setting RRF Constant k

*Available as of v1.16.0*

To change the value of constant $k$ in the formula, use the dedicated `rrf`

query.

```
POST /collections/{collection_name}/points/query
{
"prefetch": [
// 2+ prefetches here
],
"query": { "rrf": {"k": 60 } }, // <--- parameterized reciprocal rank fusion
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
prefetch=[
# 2+ prefetches here
],
query=models.RrfQuery(rrf=models.Rrf(k=60)),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
prefetch: [
// 2+ prefetches here
],
query: { rrf: { k: 60 } },
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{RrfBuilder, Query, QueryPointsBuilder};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.query(
QueryPointsBuilder::new("{collection_name}")
// .add_prefetch(...) <┐
// .add_prefetch(...) <┴─ 2+ prefetches here
.query(Query::new_rrf(RrfBuilder::with_k(60)))
).await?;
```


```
import static io.qdrant.client.QueryFactory.rrf;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PrefetchQuery;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.Rrf;
import java.util.List;
QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
// .addPrefetch(...) <┐
// .addPrefetch(...) <┴─ 2+ prefetches here
.setQuery(rrf(Rrf.newBuilder().setK(60).build()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
prefetch: new List<PrefetchQuery>
{
// 2+ prefetches here
},
query: new Rrf
{
K = 60,
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Prefetch: []*qdrant.PrefetchQuery{
// 2+ prefetches here
},
Query: qdrant.NewQueryRRF(
&qdrant.Rrf{
K: qdrant.PtrOf(uint32(60)),
}),
})
```


#### Weighted RRF

*Available as of v1.17.0*

By default, each query is assigned an equal weight. In reality, some queries are stronger, more discriminative, or more domain-specific than others. For example, a semantic search model understands meaning better than a simple keyword matcher. Assigning equal weight to both can cause the weaker model to negatively influence results, leading to a suboptimal search experience. To address this, you can assign greater weight to rankers that perform well.

The `rrf`

query allows you to configure relative weights for each of the prefetches. For example, if you have two prefetches and assign a weight of 3.0 to the first and 1.0 to the second, a document ranked third in the first query scores the same as a document ranked first in the second query. In the case of non-overlapping result sets, these weights return three results from the first set for every one result from the second set.

Weights should be provided as an array of numbers, where each weight is applied to the corresponding prefetch in the order they are defined. The number of weights must match the number of prefetches.

```
POST /collections/{collection_name}/points/query
{
"prefetch": [
// Prefetches here
],
"query": {
"rrf": {
"weights": [3.0, 1.0]
}
},
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
prefetch=[
# 2+ prefetches here
],
query=models.RrfQuery(rrf=models.Rrf(weights=[3.0, 1.0])),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
prefetch: [
// Prefetches here
],
query: {
rrf: {
weights: [3.0, 1.0],
},
},
limit: 10,
});
```


```
use qdrant_client::qdrant::{Query, QueryPointsBuilder, RrfBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
// .add_prefetch(...) <┐
// .add_prefetch(...) <┴─ 2+ prefetches here
.query(Query::new_rrf(RrfBuilder::new().weights(vec![3.0, 1.0]))),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.rrf;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PrefetchQuery;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.Rrf;
import java.util.List;
QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
// .addPrefetch(...) <┐
// .addPrefetch(...) <┴─ Prefetches here
.setQuery(rrf(Rrf.newBuilder().addAllWeights(List.of(3.0f, 1.0f)).build()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
prefetch: new List<PrefetchQuery>
{
// 2+ prefetches here
},
query: new Rrf
{
Weights = {3.0f, 1.0f},
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Prefetch: []*qdrant.PrefetchQuery{
// Prefetches here
},
Query: qdrant.NewQueryRRF(
&qdrant.Rrf{
Weights: []float32{3.0, 1.0},
}),
})
```


### Distribution-Based Score Fusion (DBSF)

*Available as of v1.11.0*

[DBSF](https://medium.com/plain-simple-software/distribution-based-score-fusion-dbsf-a-new-approach-to-vector-search-ranking-f87c37488b18)normalizes the scores of the points in each query, using the mean +/- the 3rd standard deviation as limits, and then sums the scores of the same point across different queries.

## Multi-stage queries

In general, larger vector representations give more accurate search results, but makes them more expensive to compute.

Splitting the search into two stages is a known technique to mitigate this effect:

- First, use a smaller and cheaper representation to get a large list of candidates.
- Then, re-score the candidates using the larger and more accurate representation.

There are a few ways to build search architectures around this idea:

- The quantized vectors as a first stage, and the full-precision vectors as a second stage.
- Leverage Matryoshka Representation Learning (
[MRL](https://arxiv.org/abs/2205.13147)) to generate candidate vectors with a shorter vector, and then refine them with a longer one. - Use regular dense vectors to pre-fetch the candidates, and then re-score them with a multi-vector model like
[ColBERT](https://arxiv.org/abs/2112.01488).

To get the best of all worlds, Qdrant has a convenient interface to perform the queries in stages, such that the coarse results are fetched first, and then they are refined later with larger vectors.

### Re-scoring examples

Fetch 1000 results using a shorter MRL byte vector, then re-score them using the full vector and get the top 10.

```
POST /collections/{collection_name}/points/query
{
"prefetch": {
"query": [1, 23, 45, 67], // <------------- small byte vector
"using": "mrl_byte"
"limit": 1000
},
"query": [0.01, 0.299, 0.45, 0.67, ...], // <-- full vector
"using": "full",
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
prefetch=models.Prefetch(
query=[1, 23, 45, 67], # <------------- small byte vector
using="mrl_byte",
limit=1000,
),
query=[0.01, 0.299, 0.45, 0.67], # <-- full vector
using="full",
limit=10,
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
prefetch: {
query: [1, 23, 45, 67], // <------------- small byte vector
using: 'mrl_byte',
limit: 1000,
},
query: [0.01, 0.299, 0.45, 0.67], // <-- full vector,
using: 'full',
limit: 10,
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{PrefetchQueryBuilder, Query, QueryPointsBuilder};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.query(
QueryPointsBuilder::new("{collection_name}")
.add_prefetch(PrefetchQueryBuilder::default()
.query(Query::new_nearest(vec![1.0, 23.0, 45.0, 67.0]))
.using("mlr_byte")
.limit(1000u64)
)
.query(Query::new_nearest(vec![0.01, 0.299, 0.45, 0.67]))
.using("full")
.limit(10u64)
).await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PrefetchQuery;
import io.qdrant.client.grpc.Points.QueryPoints;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.addPrefetch(
PrefetchQuery.newBuilder()
.setQuery(nearest(1, 23, 45, 67)) // <------------- small byte vector
.setLimit(1000)
.setUsing("mrl_byte")
.build())
.setQuery(nearest(0.01f, 0.299f, 0.45f, 0.67f)) // <-- full vector
.setUsing("full")
.setLimit(10)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
prefetch: new List<PrefetchQuery> {
new() {
Query = new float[] { 1,23, 45, 67 }, // <------------- small byte vector
Using = "mrl_byte",
Limit = 1000
}
},
query: new float[] { 0.01f, 0.299f, 0.45f, 0.67f }, // <-- full vector
usingVector: "full",
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Prefetch: []*qdrant.PrefetchQuery{
{
Query: qdrant.NewQueryDense([]float32{1, 23, 45, 67}),
Using: qdrant.PtrOf("mrl_byte"),
Limit: qdrant.PtrOf(uint64(1000)),
},
},
Query: qdrant.NewQueryDense([]float32{0.01, 0.299, 0.45, 0.67}),
Using: qdrant.PtrOf("full"),
})
```


Fetch 100 results using the default vector, then re-score them using a multi-vector to get the top 10.

```
POST /collections/{collection_name}/points/query
{
"prefetch": {
"query": [0.01, 0.45, 0.67, ...], // <-- dense vector
"limit": 100
},
"query": [ // <─┐
[0.1, 0.2, ...], // < │
[0.2, 0.1, ...], // < ├─ multi-vector
[0.8, 0.9, ...] // < │
], // <─┘
"using": "colbert",
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
prefetch=models.Prefetch(
query=[0.01, 0.45, 0.67, 0.53], # <-- dense vector
limit=100,
),
query=[
[0.1, 0.2, 0.32], # <─┐
[0.2, 0.1, 0.52], # < ├─ multi-vector
[0.8, 0.9, 0.93], # < ┘
],
using="colbert",
limit=10,
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
prefetch: {
query: [1, 23, 45, 67], // <------------- small byte vector
limit: 100,
},
query: [
[0.1, 0.2], // <─┐
[0.2, 0.1], // < ├─ multi-vector
[0.8, 0.9], // < ┘
],
using: 'colbert',
limit: 10,
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{PrefetchQueryBuilder, Query, QueryPointsBuilder};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.query(
QueryPointsBuilder::new("{collection_name}")
.add_prefetch(PrefetchQueryBuilder::default()
.query(Query::new_nearest(vec![0.01, 0.45, 0.67]))
.limit(100u64)
)
.query(Query::new_nearest(vec![
vec![0.1, 0.2],
vec![0.2, 0.1],
vec![0.8, 0.9],
]))
.using("colbert")
.limit(10u64)
).await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PrefetchQuery;
import io.qdrant.client.grpc.Points.QueryPoints;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.addPrefetch(
PrefetchQuery.newBuilder()
.setQuery(nearest(0.01f, 0.45f, 0.67f)) // <-- dense vector
.setLimit(100)
.build())
.setQuery(
nearest(
new float[][] {
{0.1f, 0.2f}, // <─┐
{0.2f, 0.1f}, // < ├─ multi-vector
{0.8f, 0.9f} // < ┘
}))
.setUsing("colbert")
.setLimit(10)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
prefetch: new List <PrefetchQuery> {
new() {
Query = new float[] { 0.01f, 0.45f, 0.67f }, // <-- dense vector****
Limit = 100
}
},
query: new float[][] {
[0.1f, 0.2f], // <─┐
[0.2f, 0.1f], // < ├─ multi-vector
[0.8f, 0.9f] // < ┘
},
usingVector: "colbert",
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Prefetch: []*qdrant.PrefetchQuery{
{
Query: qdrant.NewQueryDense([]float32{0.01, 0.45, 0.67}),
Limit: qdrant.PtrOf(uint64(100)),
},
},
Query: qdrant.NewQueryMulti([][]float32{
{0.1, 0.2},
{0.2, 0.1},
{0.8, 0.9},
}),
Using: qdrant.PtrOf("colbert"),
})
```


It is possible to combine all the above techniques in a single query:

```
POST /collections/{collection_name}/points/query
{
"prefetch": {
"prefetch": {
"query": [1, 23, 45, 67], // <------ small byte vector
"using": "mrl_byte"
"limit": 1000
},
"query": [0.01, 0.45, 0.67, ...], // <-- full dense vector
"using": "full"
"limit": 100
},
"query": [ // <─┐
[0.1, 0.2, ...], // < │
[0.2, 0.1, ...], // < ├─ multi-vector
[0.8, 0.9, ...] // < │
], // <─┘
"using": "colbert",
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
prefetch=models.Prefetch(
prefetch=models.Prefetch(
query=[1, 23, 45, 67], # <------ small byte vector
using="mrl_byte",
limit=1000,
),
query=[0.01, 0.45, 0.67], # <-- full dense vector
using="full",
limit=100,
),
query=[
[0.17, 0.23, 0.52], # <─┐
[0.22, 0.11, 0.63], # < ├─ multi-vector
[0.86, 0.93, 0.12], # < ┘
],
using="colbert",
limit=10,
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
prefetch: {
prefetch: {
query: [1, 23, 45, 67], // <------------- small byte vector
using: 'mrl_byte',
limit: 1000,
},
query: [0.01, 0.45, 0.67], // <-- full dense vector
using: 'full',
limit: 100,
},
query: [
[0.1, 0.2], // <─┐
[0.2, 0.1], // < ├─ multi-vector
[0.8, 0.9], // < ┘
],
using: 'colbert',
limit: 10,
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{PrefetchQueryBuilder, Query, QueryPointsBuilder};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.query(
QueryPointsBuilder::new("{collection_name}")
.add_prefetch(PrefetchQueryBuilder::default()
.add_prefetch(PrefetchQueryBuilder::default()
.query(Query::new_nearest(vec![1.0, 23.0, 45.0, 67.0]))
.using("mlr_byte")
.limit(1000u64)
)
.query(Query::new_nearest(vec![0.01, 0.45, 0.67]))
.using("full")
.limit(100u64)
)
.query(Query::new_nearest(vec![
vec![0.1, 0.2],
vec![0.2, 0.1],
vec![0.8, 0.9],
]))
.using("colbert")
.limit(10u64)
).await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PrefetchQuery;
import io.qdrant.client.grpc.Points.QueryPoints;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.addPrefetch(
PrefetchQuery.newBuilder()
.addPrefetch(
PrefetchQuery.newBuilder()
.setQuery(nearest(1, 23, 45, 67)) // <------------- small byte vector
.setUsing("mrl_byte")
.setLimit(1000)
.build())
.setQuery(nearest(0.01f, 0.45f, 0.67f)) // <-- dense vector
.setUsing("full")
.setLimit(100)
.build())
.setQuery(
nearest(
new float[][] {
{0.1f, 0.2f}, // <─┐
{0.2f, 0.1f}, // < ├─ multi-vector
{0.8f, 0.9f} // < ┘
}))
.setUsing("colbert")
.setLimit(10)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
prefetch: new List <PrefetchQuery> {
new() {
Prefetch = {
new List <PrefetchQuery> {
new() {
Query = new float[] { 1, 23, 45, 67 }, // <------------- small byte vector
Using = "mrl_byte",
Limit = 1000
},
}
},
Query = new float[] {0.01f, 0.45f, 0.67f}, // <-- dense vector
Using = "full",
Limit = 100
}
},
query: new float[][] {
[0.1f, 0.2f], // <─┐
[0.2f, 0.1f], // < ├─ multi-vector
[0.8f, 0.9f] // < ┘
},
usingVector: "colbert",
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Prefetch: []*qdrant.PrefetchQuery{
{
Prefetch: []*qdrant.PrefetchQuery{
{
Query: qdrant.NewQueryDense([]float32{1, 23, 45, 67}),
Using: qdrant.PtrOf("mrl_byte"),
Limit: qdrant.PtrOf(uint64(1000)),
},
},
Query: qdrant.NewQueryDense([]float32{0.01, 0.45, 0.67}),
Limit: qdrant.PtrOf(uint64(100)),
Using: qdrant.PtrOf("full"),
},
},
Query: qdrant.NewQueryMulti([][]float32{
{0.1, 0.2},
{0.2, 0.1},
{0.8, 0.9},
}),
Using: qdrant.PtrOf("colbert"),
})
```


## Grouping

*Available as of v1.11.0*

It is possible to group results by a certain field. This is useful when you have multiple points for the same item, and you want to avoid redundancy of the same item in the results.

REST API ([Schema](https://api.qdrant.tech/master/api-reference/search/query-points-groups)):

```
POST /collections/{collection_name}/points/query/groups
{
// Same as in the regular query API
"query": [1.1],
// Grouping parameters
"group_by": "document_id", // Path of the field to group by
"limit": 4, // Max amount of groups
"group_size": 2 // Max amount of points per group
}
```


```
client.query_points_groups(
collection_name="{collection_name}",
# Same as in the regular query_points() API
query=[1.1],
# Grouping parameters
group_by="document_id", # Path of the field to group by
limit=4, # Max amount of groups
group_size=2, # Max amount of points per group
)
```


```
client.queryGroups("{collection_name}", {
query: [1.1],
group_by: "document_id",
limit: 4,
group_size: 2,
});
```


```
use qdrant_client::qdrant::QueryPointGroupsBuilder;
client
.query_groups(
QueryPointGroupsBuilder::new("{collection_name}", "document_id")
.query(vec![0.2, 0.1, 0.9, 0.7])
.group_size(2u64)
.with_payload(true)
.with_vectors(true)
.limit(4u64),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.grpc.Points.QueryPointGroups;
import io.qdrant.client.grpc.Points.SearchPointGroups;
import java.util.List;
client.queryGroupsAsync(
QueryPointGroups.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
.setGroupBy("document_id")
.setLimit(4)
.setGroupSize(2)
.build())
.get();
```


```
using Qdrant.Client;
var client = new QdrantClient("localhost", 6334);
await client.QueryGroupsAsync(
collectionName: "{collection_name}",
query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
groupBy: "document_id",
limit: 4,
groupSize: 2
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.QueryGroups(context.Background(), &qdrant.QueryPointGroups{
CollectionName: "{collection_name}",
Query: qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
GroupBy: "document_id",
GroupSize: qdrant.PtrOf(uint64(2)),
})
```


For more information on the `grouping`

capabilities refer to the reference documentation for search with [grouping](https://qdrant.tech/documentation/concepts/search/#search-groups) and [lookup](https://qdrant.tech/documentation/concepts/search/#lookup-in-groups).

---

## Source: https://qdrant.tech/documentation/search/explore/

# Explore the data

After mastering the concepts in [search](https://qdrant.tech/documentation/concepts/search/), you can start exploring your data in other ways. Qdrant provides a stack of APIs that allow you to find similar vectors in a different fashion, as well as to find the most dissimilar ones. These are useful tools for recommendation systems, data exploration, and data cleaning.

## Recommendation API

In addition to the regular search, Qdrant also allows you to search based on multiple positive and negative examples. The API is called * recommend*, and the examples can be point IDs, so that you can leverage the already encoded objects; and, as of v1.6, you can also use raw vectors as input, so that you can create your vectors on the fly without uploading them as points.

REST API - API Schema definition is available [here](https://api.qdrant.tech/api-reference/search/recommend-points)

```
POST /collections/{collection_name}/points/query
{
"query": {
"recommend": {
"positive": [100, 231],
"negative": [718, [0.2, 0.3, 0.4, 0.5]],
"strategy": "average_vector"
}
},
"filter": {
"must": [
{
"key": "city",
"match": {
"value": "London"
}
}
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=models.RecommendQuery(
recommend=models.RecommendInput(
positive=[100, 231],
negative=[718, [0.2, 0.3, 0.4, 0.5]],
strategy=models.RecommendStrategy.AVERAGE_VECTOR,
)
),
query_filter=models.Filter(
must=[
models.FieldCondition(
key="city",
match=models.MatchValue(
value="London",
),
)
]
),
limit=3,
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: {
recommend: {
positive: [100, 231],
negative: [718, [0.2, 0.3, 0.4, 0.5]],
strategy: "average_vector"
}
},
filter: {
must: [
{
key: "city",
match: {
value: "London",
},
},
],
},
limit: 3
});
```


```
use qdrant_client::qdrant::{
Condition, Filter, QueryPointsBuilder, RecommendInputBuilder, RecommendStrategy,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(
RecommendInputBuilder::default()
.add_positive(100)
.add_positive(231)
.add_positive(vec![0.2, 0.3, 0.4, 0.5])
.add_negative(718)
.strategy(RecommendStrategy::AverageVector)
.build(),
)
.limit(3)
.filter(Filter::must([Condition::matches(
"city",
"London".to_string(),
)])),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.QueryFactory.recommend;
import static io.qdrant.client.VectorInputFactory.vectorInput;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.RecommendInput;
import io.qdrant.client.grpc.Points.RecommendStrategy;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(recommend(RecommendInput.newBuilder()
.addAllPositive(List.of(vectorInput(100), vectorInput(200), vectorInput(100.0f, 231.0f)))
.addAllNegative(List.of(vectorInput(718), vectorInput(0.2f, 0.3f, 0.4f, 0.5f)))
.setStrategy(RecommendStrategy.AverageVector)
.build()))
.setFilter(Filter.newBuilder().addMust(matchKeyword("city", "London")))
.setLimit(3)
.build()).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new RecommendInput {
Positive = { 100, 231 },
Negative = { 718 }
},
filter: MatchKeyword("city", "London"),
limit: 3
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryRecommend(&qdrant.RecommendInput{
Positive: []*qdrant.VectorInput{
qdrant.NewVectorInputID(qdrant.NewIDNum(100)),
qdrant.NewVectorInputID(qdrant.NewIDNum(231)),
},
Negative: []*qdrant.VectorInput{
qdrant.NewVectorInputID(qdrant.NewIDNum(718)),
},
}),
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("city", "London"),
},
},
})
```


Example result of this API would be

```
{
"result": [
{ "id": 10, "score": 0.81 },
{ "id": 14, "score": 0.75 },
{ "id": 11, "score": 0.73 }
],
"status": "ok",
"time": 0.001
}
```


The algorithm used to get the recommendations is selected from the available `strategy`

options. Each of them has its own strengths and weaknesses, so experiment and choose the one that works best for your case.

### Average vector strategy

The default and first strategy added to Qdrant is called `average_vector`

. It preprocesses the input examples to create a single vector that is used for the search. Since the preprocessing step happens very fast, the performance of this strategy is on-par with regular search. The intuition behind this kind of recommendation is that each vector component represents an independent feature of the data, so, by averaging the examples, we should get a good recommendation.

The way to produce the searching vector is by first averaging all the positive and negative examples separately, and then combining them into a single vector using the following formula:

```
avg_positive + avg_positive - avg_negative
```


In the case of not having any negative examples, the search vector will simply be equal to `avg_positive`

.

This is the default strategy that’s going to be set implicitly, but you can explicitly define it by setting `"strategy": "average_vector"`

in the recommendation request.

### Best score strategy

*Available as of v1.6.0*

A new strategy introduced in v1.6, is called `best_score`

. It is based on the idea that the best way to find similar vectors is to find the ones that are closer to a positive example, while avoiding the ones that are closer to a negative one.
The way it works is that each candidate is measured against every example, then we select the best positive and best negative scores. The final score is chosen with this step formula:

```
// Sigmoid function to normalize the score between 0 and 1
let sigmoid = |x| 0.5 * (1.0 + (x / (1.0 + x.abs())));
let score = if best_positive_score > best_negative_score {
sigmoid(best_positive_score)
} else {
-sigmoid(best_negative_score)
};
```


Since we are computing similarities to every example at each step of the search, the performance of this strategy will be linearly impacted by the amount of examples. This means that the more examples you provide, the slower the search will be. However, this strategy can be very powerful and should be more embedding-agnostic.

To use this algorithm, you need to set `"strategy": "best_score"`

in the recommendation request.

#### Using only negative examples

A beneficial side-effect of `best_score`

strategy is that you can use it with only negative examples. This will allow you to find the most dissimilar vectors to the ones you provide. This can be useful for finding outliers in your data, or for finding the most dissimilar vectors to a given one.

Combining negative-only examples with filtering can be a powerful tool for data exploration and cleaning.

### Sum scores strategy

Another strategy for using multiple query vectors simultaneously is to just sum their scores against the candidates. In qdrant, this is called `sum_scores`

strategy.

This strategy was used in [this paper](https://arxiv.org/abs/2210.10695) by [UKP Lab](http://www.ukp.tu-darmstadt.de/), [hessian.ai](https://hessian.ai) and [cohere.ai](https://cohere.ai) to incorporate relevance feedback into a subsequent search. In the paper this boosted the nDCG@20 performance by 5.6% points when using 2-8 positive feedback documents.

The formula that this strategy implements is

$$ s_i = \sum_{v_q\in Q^+}s(v_q, v_i) - \sum_{v_q\in Q^-}s(v_q, v_i) $$

where $Q^+$ is the set of positive examples, $Q^-$ is the set of negative examples, and $s(v_q, v_i)$ is the score of the vector $v_q$ against the vector $v_i$

As with `best_score`

, this strategy also allows using only negative examples.

### Multiple vectors

*Available as of v0.10.0*

If the collection was created with multiple vectors, the name of the vector should be specified in the recommendation request:

```
POST /collections/{collection_name}/points/query
{
"query": {
"recommend": {
"positive": [100, 231],
"negative": [718]
}
},
"using": "image",
"limit": 10
}
```


```
client.query_points(
collection_name="{collection_name}",
query=models.RecommendQuery(
recommend=models.RecommendInput(
positive=[100, 231],
negative=[718],
)
),
using="image",
limit=10,
)
```


```
client.query("{collection_name}", {
query: {
recommend: {
positive: [100, 231],
negative: [718],
}
},
using: "image",
limit: 10
});
```


```
use qdrant_client::qdrant::{QueryPointsBuilder, RecommendInputBuilder};
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(
RecommendInputBuilder::default()
.add_positive(100)
.add_positive(231)
.add_negative(718)
.build(),
)
.limit(10)
.using("image"),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.recommend;
import static io.qdrant.client.VectorInputFactory.vectorInput;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.RecommendInput;
import java.util.List;
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(recommend(RecommendInput.newBuilder()
.addAllPositive(List.of(vectorInput(100), vectorInput(231)))
.addAllNegative(List.of(vectorInput(718)))
.build()))
.setUsing("image")
.setLimit(10)
.build()).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new RecommendInput {
Positive = { 100, 231 },
Negative = { 718 }
},
usingVector: "image",
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryRecommend(&qdrant.RecommendInput{
Positive: []*qdrant.VectorInput{
qdrant.NewVectorInputID(qdrant.NewIDNum(100)),
qdrant.NewVectorInputID(qdrant.NewIDNum(231)),
},
Negative: []*qdrant.VectorInput{
qdrant.NewVectorInputID(qdrant.NewIDNum(718)),
},
}),
Using: qdrant.PtrOf("image"),
})
```


Parameter `using`

specifies which stored vectors to use for the recommendation.

### Lookup vectors from another collection

*Available as of v0.11.6*

If you have collections with vectors of the same dimensionality,
and you want to look for recommendations in one collection based on the vectors of another collection,
you can use the `lookup_from`

parameter.

It might be useful, e.g. in the item-to-user recommendations scenario. Where user and item embeddings, although having the same vector parameters (distance type and dimensionality), are usually stored in different collections.

```
POST /collections/{collection_name}/points/query
{
"query": {
"recommend": {
"positive": [100, 231],
"negative": [718]
}
},
"limit": 10,
"lookup_from": {
"collection": "{external_collection_name}",
"vector": "{external_vector_name}"
}
}
```


```
client.query_points(
collection_name="{collection_name}",
query=models.RecommendQuery(
recommend=models.RecommendInput(
positive=[100, 231],
negative=[718],
)
),
using="image",
limit=10,
lookup_from=models.LookupLocation(
collection="{external_collection_name}", vector="{external_vector_name}"
),
)
```


```
client.query("{collection_name}", {
query: {
recommend: {
positive: [100, 231],
negative: [718],
}
},
using: "image",
limit: 10,
lookup_from: {
collection: "{external_collection_name}",
vector: "{external_vector_name}"
}
});
```


```
use qdrant_client::qdrant::{LookupLocationBuilder, QueryPointsBuilder, RecommendInputBuilder};
client
.query(
QueryPointsBuilder::new("{collection_name}")
.query(
RecommendInputBuilder::default()
.add_positive(100)
.add_positive(231)
.add_negative(718)
.build(),
)
.limit(10)
.using("image")
.lookup_from(
LookupLocationBuilder::new("{external_collection_name}")
.vector_name("{external_vector_name}"),
),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.recommend;
import static io.qdrant.client.VectorInputFactory.vectorInput;
import io.qdrant.client.grpc.Points.LookupLocation;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.RecommendInput;
import java.util.List;
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(recommend(RecommendInput.newBuilder()
.addAllPositive(List.of(vectorInput(100), vectorInput(231)))
.addAllNegative(List.of(vectorInput(718)))
.build()))
.setUsing("image")
.setLimit(10)
.setLookupFrom(
LookupLocation.newBuilder()
.setCollectionName("{external_collection_name}")
.setVectorName("{external_vector_name}")
.build())
.build()).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new RecommendInput {
Positive = { 100, 231 },
Negative = { 718 }
},
usingVector: "image",
limit: 10,
lookupFrom: new LookupLocation
{
CollectionName = "{external_collection_name}",
VectorName = "{external_vector_name}",
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryRecommend(&qdrant.RecommendInput{
Positive: []*qdrant.VectorInput{
qdrant.NewVectorInputID(qdrant.NewIDNum(100)),
qdrant.NewVectorInputID(qdrant.NewIDNum(231)),
},
Negative: []*qdrant.VectorInput{
qdrant.NewVectorInputID(qdrant.NewIDNum(718)),
},
}),
Using: qdrant.PtrOf("image"),
LookupFrom: &qdrant.LookupLocation{
CollectionName: "{external_collection_name}",
VectorName: qdrant.PtrOf("{external_vector_name}"),
},
})
```


Vectors are retrieved from the external collection by ids provided in the `positive`

and `negative`

lists.
These vectors then used to perform the recommendation in the current collection, comparing against the “using” or default vector.

## Batch recommendation API

*Available as of v0.10.0*

Similar to the batch search API in terms of usage and advantages, it enables the batching of recommendation requests.

```
POST /collections/{collection_name}/query/batch
{
"searches": [
{
"query": {
"recommend": {
"positive": [100, 231],
"negative": [718]
}
},
"filter": {
"must": [
{
"key": "city",
"match": {
"value": "London"
}
}
]
},
"limit": 10
},
{
"query": {
"recommend": {
"positive": [200, 67],
"negative": [300]
}
},
"filter": {
"must": [
{
"key": "city",
"match": {
"value": "London"
}
}
]
},
"limit": 10
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
filter_ = models.Filter(
must=[
models.FieldCondition(
key="city",
match=models.MatchValue(
value="London",
),
)
]
)
recommend_queries = [
models.QueryRequest(
query=models.RecommendQuery(
recommend=models.RecommendInput(positive=[100, 231], negative=[718])
),
filter=filter_,
limit=3,
),
models.QueryRequest(
query=models.RecommendQuery(
recommend=models.RecommendInput(positive=[200, 67], negative=[300])
),
filter=filter_,
limit=3,
),
]
client.query_batch_points(
collection_name="{collection_name}", requests=recommend_queries
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
const filter = {
must: [
{
key: "city",
match: {
value: "London",
},
},
],
};
const searches = [
{
query: {
recommend: {
positive: [100, 231],
negative: [718]
}
},
filter,
limit: 3,
},
{
query: {
recommend: {
positive: [200, 67],
negative: [300]
}
},
filter,
limit: 3,
},
];
client.queryBatch("{collection_name}", {
searches,
});
```


```
use qdrant_client::qdrant::{
Condition, Filter, QueryBatchPointsBuilder, QueryPointsBuilder,
RecommendInputBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let filter = Filter::must([Condition::matches("city", "London".to_string())]);
let recommend_queries = vec![
QueryPointsBuilder::new("{collection_name}")
.query(
RecommendInputBuilder::default()
.add_positive(100)
.add_positive(231)
.add_negative(718)
.build(),
)
.filter(filter.clone())
.build(),
QueryPointsBuilder::new("{collection_name}")
.query(
RecommendInputBuilder::default()
.add_positive(200)
.add_positive(67)
.add_negative(300)
.build(),
)
.filter(filter)
.build(),
];
client
.query_batch(QueryBatchPointsBuilder::new(
"{collection_name}",
recommend_queries,
))
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.QueryFactory.recommend;
import static io.qdrant.client.VectorInputFactory.vectorInput;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.RecommendInput;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
Filter filter = Filter.newBuilder().addMust(matchKeyword("city", "London")).build();
List<QueryPoints> recommendQueries = List.of(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(recommend(
RecommendInput.newBuilder()
.addAllPositive(List.of(vectorInput(100), vectorInput(231)))
.addAllNegative(List.of(vectorInput(731)))
.build()))
.setFilter(filter)
.setLimit(3)
.build(),
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(recommend(
RecommendInput.newBuilder()
.addAllPositive(List.of(vectorInput(200), vectorInput(67)))
.addAllNegative(List.of(vectorInput(300)))
.build()))
.setFilter(filter)
.setLimit(3)
.build());
client.queryBatchAsync("{collection_name}", recommendQueries).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
var filter = MatchKeyword("city", "london");
await client.QueryBatchAsync(
collectionName: "{collection_name}",
queries:
[
new QueryPoints()
{
CollectionName = "{collection_name}",
Query = new RecommendInput {
Positive = { 100, 231 },
Negative = { 718 },
},
Limit = 3,
Filter = filter,
},
new QueryPoints()
{
CollectionName = "{collection_name}",
Query = new RecommendInput {
Positive = { 200, 67 },
Negative = { 300 },
},
Limit = 3,
Filter = filter,
}
]
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
filter := qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("city", "London"),
},
}
client.QueryBatch(context.Background(), &qdrant.QueryBatchPoints{
CollectionName: "{collection_name}",
QueryPoints: []*qdrant.QueryPoints{
{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryRecommend(&qdrant.RecommendInput{
Positive: []*qdrant.VectorInput{
qdrant.NewVectorInputID(qdrant.NewIDNum(100)),
qdrant.NewVectorInputID(qdrant.NewIDNum(231)),
},
Negative: []*qdrant.VectorInput{
qdrant.NewVectorInputID(qdrant.NewIDNum(718)),
},
},
),
Filter: &filter,
},
{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryRecommend(&qdrant.RecommendInput{
Positive: []*qdrant.VectorInput{
qdrant.NewVectorInputID(qdrant.NewIDNum(200)),
qdrant.NewVectorInputID(qdrant.NewIDNum(67)),
},
Negative: []*qdrant.VectorInput{
qdrant.NewVectorInputID(qdrant.NewIDNum(300)),
},
},
),
Filter: &filter,
},
},
},
)
```


The result of this API contains one array per recommendation requests.

```
{
"result": [
[
{ "id": 10, "score": 0.81 },
{ "id": 14, "score": 0.75 },
{ "id": 11, "score": 0.73 }
],
[
{ "id": 1, "score": 0.92 },
{ "id": 3, "score": 0.89 },
{ "id": 9, "score": 0.75 }
]
],
"status": "ok",
"time": 0.001
}
```


## Discovery API

*Available as of v1.7*

REST API Schema definition available [here](https://api.qdrant.tech/api-reference/search/discover-points)

In this API, Qdrant introduces the concept of `context`

, which is used for splitting the space. Context is a set of positive-negative pairs, and each pair divides the space into positive and negative zones. In that mode, the search operation prefers points based on how many positive zones they belong to (or how much they avoid negative zones).

The interface for providing context is similar to the recommendation API (ids or raw vectors). Still, in this case, they need to be provided in the form of positive-negative pairs.

Discovery API lets you do two new types of search:

**Discovery search**: Uses the context (the pairs of positive-negative vectors) and a target to return the points more similar to the target, but constrained by the context.**Context search**: Using only the context pairs, get the points that live in the best zone, where loss is minimized

The way positive and negative examples should be arranged in the context pairs is completely up to you. So you can have the flexibility of trying out different permutation techniques based on your model and data.

### Discovery search

This type of search works specially well for combining multimodal, vector-constrained searches. Qdrant already has extensive support for filters, which constrain the search based on its payload, but using discovery search, you can also constrain the vector space in which the search is performed.

The formula for the discovery score can be expressed as:

$$ \text{rank}(v^+, v^-) = \begin{cases} 1, &\quad s(v^+) \geq s(v^-) \\ -1, &\quad s(v^+) < s(v^-) \end{cases} $$ where $v^+$ represents a positive example, $v^-$ represents a negative example, and $s(v)$ is the similarity score of a vector $v$ to the target vector. The discovery score is then computed as: $$ \text{discovery score} = \text{sigmoid}(s(v_t))+ \sum \text{rank}(v_i^+, v_i^-), $$ where $s(v)$ is the similarity function, $v_t$ is the target vector, and again $v_i^+$ and $v_i^-$ are the positive and negative examples, respectively. The sigmoid function is used to normalize the score between 0 and 1 and the sum of ranks is used to penalize vectors that are closer to the negative examples than to the positive ones. In other words, the sum of individual ranks determines how many positive zones a point is in, while the closeness hierarchy comes second.

Example:

```
POST /collections/{collection_name}/points/query
{
"query": {
"discover": {
"target": [0.2, 0.1, 0.9, 0.7],
"context": [
{
"positive": 100,
"negative": 718
},
{
"positive": 200,
"negative": 300
}
]
}
},
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
discover_queries = [
models.QueryRequest(
query=models.DiscoverQuery(
discover=models.DiscoverInput(
target=[0.2, 0.1, 0.9, 0.7],
context=[
models.ContextPair(
positive=100,
negative=718,
),
models.ContextPair(
positive=200,
negative=300,
),
],
)
),
limit=10,
),
]
client.query_batch_points(
collection_name="{collection_name}", requests=discover_queries
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: {
discover: {
target: [0.2, 0.1, 0.9, 0.7],
context: [
{
positive: 100,
negative: 718,
},
{
positive: 200,
negative: 300,
},
],
}
},
limit: 10,
});
```


```
use qdrant_client::qdrant::{ContextInputBuilder, DiscoverInputBuilder, QueryPointsBuilder};
client
.query(
QueryPointsBuilder::new("{collection_name}").query(
DiscoverInputBuilder::new(
vec![0.2, 0.1, 0.9, 0.7],
ContextInputBuilder::default()
.add_pair(100, 718)
.add_pair(200, 300),
)
.build(),
),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.discover;
import static io.qdrant.client.VectorInputFactory.vectorInput;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.ContextInput;
import io.qdrant.client.grpc.Points.ContextInputPair;
import io.qdrant.client.grpc.Points.DiscoverInput;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(discover(DiscoverInput.newBuilder()
.setTarget(vectorInput(0.2f, 0.1f, 0.9f, 0.7f))
.setContext(ContextInput.newBuilder()
.addAllPairs(List.of(
ContextInputPair.newBuilder()
.setPositive(vectorInput(100))
.setNegative(vectorInput(718))
.build(),
ContextInputPair.newBuilder()
.setPositive(vectorInput(200))
.setNegative(vectorInput(300))
.build()))
.build())
.build()))
.setLimit(10)
.build()).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new DiscoverInput {
Target = new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
Context = new ContextInput {
Pairs = {
new ContextInputPair {
Positive = 100,
Negative = 718
},
new ContextInputPair {
Positive = 200,
Negative = 300
},
}
},
},
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryDiscover(&qdrant.DiscoverInput{
Target: qdrant.NewVectorInput(0.2, 0.1, 0.9, 0.7),
Context: &qdrant.ContextInput{
Pairs: []*qdrant.ContextInputPair{
{
Positive: qdrant.NewVectorInputID(qdrant.NewIDNum(100)),
Negative: qdrant.NewVectorInputID(qdrant.NewIDNum(718)),
},
{
Positive: qdrant.NewVectorInputID(qdrant.NewIDNum(200)),
Negative: qdrant.NewVectorInputID(qdrant.NewIDNum(300)),
},
},
},
}),
})
```


### Context search

Conversely, in the absence of a target, a rigid integer-by-integer function doesn’t provide much guidance for the search when utilizing a proximity graph like HNSW. Instead, context search employs a function derived from the [triplet-loss](https://qdrant.tech/articles/triplet-loss/) concept, which is usually applied during model training. For context search, this function is adapted to steer the search towards areas with fewer negative examples.

We can directly associate the score function to a loss function, where 0.0 is the maximum score a point can have, which means it is only in positive areas. As soon as a point exists closer to a negative example, its loss will simply be the difference of the positive and negative similarities.

$$ \text{context score} = \sum \min(s(v^+_i) - s(v^-_i), 0.0) $$

Where $v^+_i$ and $v^-_i$ are the positive and negative examples of each pair, and $s(v)$ is the similarity function.

Using this kind of search, you can expect the output to not necessarily be around a single point, but rather, to be any point that isn’t closer to a negative example, which creates a constrained diverse result. So, even when the API is not called [ recommend](#recommendation-api), recommendation systems can also use this approach and adapt it for their specific use-cases.

Example:

```
POST /collections/{collection_name}/points/query
{
"query": {
"context": [
{
"positive": 100,
"negative": 718
},
{
"positive": 200,
"negative": 300
}
]
},
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
discover_queries = [
models.QueryRequest(
query=models.ContextQuery(
context=[
models.ContextPair(
positive=100,
negative=718,
),
models.ContextPair(
positive=200,
negative=300,
),
],
),
limit=10,
),
]
client.query_batch_points(
collection_name="{collection_name}", requests=discover_queries
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: {
context: [
{
positive: 100,
negative: 718,
},
{
positive: 200,
negative: 300,
},
]
},
limit: 10,
});
```


```
use qdrant_client::qdrant::{ContextInputBuilder, QueryPointsBuilder};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
client
.query(
QueryPointsBuilder::new("{collection_name}").query(
ContextInputBuilder::default()
.add_pair(100, 718)
.add_pair(200, 300)
.build(),
),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.context;
import static io.qdrant.client.VectorInputFactory.vectorInput;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.ContextInput;
import io.qdrant.client.grpc.Points.ContextInputPair;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client.queryAsync(QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(context(ContextInput.newBuilder()
.addAllPairs(List.of(
ContextInputPair.newBuilder()
.setPositive(vectorInput(100))
.setNegative(vectorInput(718))
.build(),
ContextInputPair.newBuilder()
.setPositive(vectorInput(200))
.setNegative(vectorInput(300))
.build()))
.build()))
.setLimit(10)
.build()).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: new ContextInput {
Pairs = {
new ContextInputPair {
Positive = 100,
Negative = 718
},
new ContextInputPair {
Positive = 200,
Negative = 300
},
}
},
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryContext(&qdrant.ContextInput{
Pairs: []*qdrant.ContextInputPair{
{
Positive: qdrant.NewVectorInputID(qdrant.NewIDNum(100)),
Negative: qdrant.NewVectorInputID(qdrant.NewIDNum(718)),
},
{
Positive: qdrant.NewVectorInputID(qdrant.NewIDNum(200)),
Negative: qdrant.NewVectorInputID(qdrant.NewIDNum(300)),
},
},
}),
})
```


## Distance Matrix

*Available as of v1.12.0*

The distance matrix API allows to calculate the distance between sampled pairs of vectors and to return the result as a sparse matrix.

Such API enables new data exploration use cases such as clustering similar vectors, visualization of connections or dimension reduction.

The API input request consists of the following parameters:

`sample`

: the number of vectors to sample`limit`

: the number of scores to return per sample`filter`

: the filter to apply to constraint the samples

Let’s have a look at a basic example with `sample=100`

, `limit=10`

:

The engine starts by selecting `100`

random points from the collection, then for each of the selected points, it will compute the top `10`

closest points **within** the samples.

This will results in a total of 1000 scores represented as a sparse matrix for efficient processing.

The distance matrix API offers two output formats to ease the integration with different tools.

### Pairwise format

Returns the distance matrix as a list of pairs of point `ids`

with their respective score.

```
POST /collections/{collection_name}/points/search/matrix/pairs
{
"sample": 10,
"limit": 2,
"filter": {
"must": {
"key": "color",
"match": { "value": "red" }
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.search_matrix_pairs(
collection_name="{collection_name}",
sample=10,
limit=2,
query_filter=models.Filter(
must=[
models.FieldCondition(
key="color", match=models.MatchValue(value="red")
),
]
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.searchMatrixPairs("{collection_name}", {
filter: {
must: [
{
key: "color",
match: {
value: "red",
},
},
],
},
sample: 10,
limit: 2,
});
```


```
use qdrant_client::qdrant::{Condition, Filter, SearchMatrixPointsBuilder};
client
.search_matrix_pairs(
SearchMatrixPointsBuilder::new("collection_name")
.filter(Filter::must(vec![Condition::matches(
"color",
"red".to_string(),
)]))
.sample(10)
.limit(2),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.SearchMatrixPoints;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.searchMatrixPairsAsync(
SearchMatrixPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(Filter.newBuilder().addMust(matchKeyword("color", "red")).build())
.setSample(10)
.setLimit(2)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.SearchMatrixPairsAsync(
collectionName: "{collection_name}",
filter: MatchKeyword("color", "red"),
sample: 10,
limit: 2
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
sample := uint64(10)
limit := uint64(2)
res, err := client.SearchMatrixPairs(context.Background(), &qdrant.SearchMatrixPoints{
CollectionName: "{collection_name}",
Sample: &sample,
Limit: &limit,
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("color", "red"),
},
},
})
```


Returns

```
{
"result": {
"pairs": [
{"a": 1, "b": 3, "score": 1.4063001},
{"a": 1, "b": 4, "score": 1.2531},
{"a": 2, "b": 1, "score": 1.1550001},
{"a": 2, "b": 8, "score": 1.1359},
{"a": 3, "b": 1, "score": 1.4063001},
{"a": 3, "b": 4, "score": 1.2218001},
{"a": 4, "b": 1, "score": 1.2531},
{"a": 4, "b": 3, "score": 1.2218001},
{"a": 5, "b": 3, "score": 0.70239997},
{"a": 5, "b": 1, "score": 0.6146},
{"a": 6, "b": 3, "score": 0.6353},
{"a": 6, "b": 4, "score": 0.5093},
{"a": 7, "b": 3, "score": 1.0990001},
{"a": 7, "b": 1, "score": 1.0349001},
{"a": 8, "b": 2, "score": 1.1359},
{"a": 8, "b": 3, "score": 1.0553}
]
}
}
```


### Offset format

Returns the distance matrix as a four arrays:

`offsets_row`

and`offsets_col`

, represent the positions of non-zero distance values in the matrix.`scores`

contains the distance values.`ids`

contains the point ids corresponding to the distance values.

```
POST /collections/{collection_name}/points/search/matrix/offsets
{
"sample": 10,
"limit": 2,
"filter": {
"must": {
"key": "color",
"match": { "value": "red" }
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.search_matrix_offsets(
collection_name="{collection_name}",
sample=10,
limit=2,
query_filter=models.Filter(
must=[
models.FieldCondition(
key="color", match=models.MatchValue(value="red")
),
]
),
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.searchMatrixOffsets("{collection_name}", {
filter: {
must: [
{
key: "color",
match: {
value: "red",
},
},
],
},
sample: 10,
limit: 2,
});
```


```
use qdrant_client::qdrant::{Condition, Filter, SearchMatrixPointsBuilder};
client
.search_matrix_offsets(
SearchMatrixPointsBuilder::new("collection_name")
.filter(Filter::must(vec![Condition::matches(
"color",
"red".to_string(),
)]))
.sample(10)
.limit(2),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeyword;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.SearchMatrixPoints;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.searchMatrixOffsetsAsync(
SearchMatrixPoints.newBuilder()
.setCollectionName("{collection_name}")
.setFilter(Filter.newBuilder().addMust(matchKeyword("color", "red")).build())
.setSample(10)
.setLimit(2)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.SearchMatrixOffsetsAsync(
collectionName: "{collection_name}",
filter: MatchKeyword("color", "red"),
sample: 10,
limit: 2
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
sample := uint64(10)
limit := uint64(2)
res, err := client.SearchMatrixOffsets(context.Background(), &qdrant.SearchMatrixPoints{
CollectionName: "{collection_name}",
Sample: &sample,
Limit: &limit,
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("color", "red"),
},
},
})
```


Returns

```
{
"result": {
"offsets_row": [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7],
"offsets_col": [2, 3, 0, 7, 0, 3, 0, 2, 2, 0, 2, 3, 2, 0, 1, 2],
"scores": [
1.4063001, 1.2531, 1.1550001, 1.1359, 1.4063001,
1.2218001, 1.2531, 1.2218001, 0.70239997, 0.6146, 0.6353,
0.5093, 1.0990001, 1.0349001, 1.1359, 1.0553
],
"ids": [1, 2, 3, 4, 5, 6, 7, 8]
}
}
```

---

## Source: https://qdrant.tech/documentation/search/text-search/

## Text Search

Qdrant is a vector search engine, making it a great tool for [semantic search](#semantic-search). However, Qdrant’s capabilities go beyond just vector search. It also supports a range of lexical search features, including filtering on text fields and full-text search using popular algorithms like BM25.

### Semantic Search

Semantic search is a search technique that focuses on the meaning of the text rather than just matching on keywords. This is achieved by converting text into [vectors](https://qdrant.tech/documentation/concepts/vectors/) (embeddings) using machine learning models. These vectors capture the semantic meaning of the text, enabling you to find similar text even if it doesn’t share exact keywords.

For example, to search through a collection of books, you could use a model like the `all-MiniLM-L6-v2`

sentence transformer model. First, create a collection and configure a dense vector for the book descriptions:

```
PUT /collections/books
{
"vectors": {
"description-dense": {
"size": 384,
"distance": "Cosine"
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.create_collection(
collection_name="books",
vectors_config={
"description-dense": models.VectorParams(size=384, distance=models.Distance.COSINE)
},
)
```


```
client.createCollection("books", {
vectors: {
"description-dense": { size: 384, distance: "Cosine" },
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, VectorParamsBuilder, VectorsConfigBuilder,
};
let mut vectors_config = VectorsConfigBuilder::default();
vectors_config.add_named_vector_params(
"description-dense",
VectorParamsBuilder::new(384, Distance::Cosine),
);
client
.create_collection(CreateCollectionBuilder::new("books").vectors_config(vectors_config))
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.*;
QdrantClient client =
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("books")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParamsMap(
VectorParamsMap.newBuilder()
.putMap(
"description-dense",
VectorParams.newBuilder()
.setSize(384)
.setDistance(Distance.Cosine)
.build())
.build())
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.CreateCollectionAsync(
collectionName: "books",
vectorsConfig: new VectorParamsMap
{
Map =
{
["description-dense"] = new VectorParams
{
Size = 384,
Distance = Distance.Cosine,
},
},
}
);
```


```
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "books",
VectorsConfig: qdrant.NewVectorsConfigMap(
map[string]*qdrant.VectorParams{
"description-dense": {
Size: 384,
Distance: qdrant.Distance_Cosine,
},
}),
})
```


Next, you can ingest data:

```
PUT /collections/books/points?wait=true
{
"points": [
{
"id": 1,
"vector": {
"description-dense": {
"text": "A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
"model": "sentence-transformers/all-minilm-l6-v2"
}
},
"payload": {
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515"
}
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.upsert(
collection_name="books",
points=[
models.PointStruct(
id=1,
vector={
"description-dense": models.Document(
text="A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
model="sentence-transformers/all-minilm-l6-v2",
)
},
payload={
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515",
},
)
],
)
```


```
client.upsert("books", {
wait: true,
points: [
{
id: 1,
vector: {
"description-dense": {
text: "A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
model: "sentence-transformers/all-minilm-l6-v2",
},
},
payload: {
title: "The Time Machine",
author: "H.G. Wells",
isbn: "9780553213515",
},
},
],
});
```


```
use std::collections::HashMap;
use qdrant_client::qdrant::{Document, PointStruct, UpsertPointsBuilder};
use qdrant_client::{Payload, Qdrant};
use serde_json::json;
let point = PointStruct::new(
1,
HashMap::from([(
"description-dense".to_string(),
Document::new(
"A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
"sentence-transformers/all-minilm-l6-v2",
),
)]),
Payload::try_from(json!({
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515",
}))
.unwrap(),
);
client
.upsert_points(UpsertPointsBuilder::new("books", vec![point]).wait(true))
.await?;
```


```
import static io.qdrant.client.ConditionFactory.*;
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.*;
import io.qdrant.client.grpc.Points.*;
import java.util.*;
QdrantClient client =
PointStruct point =
PointStruct.newBuilder()
.setId(id(1))
.setVectors(
namedVectors(
Map.of(
"description-dense",
vector(
Document.newBuilder()
.setText(
"A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))))
.putAllPayload(
Map.of(
"title", value("The Time Machine"),
"author", value("H.G. Wells"),
"isbn", value("9780553213515")))
.build();
client.upsertAsync("books", List.of(point)).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.UpsertAsync(
collectionName: "books",
wait: true,
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new Dictionary<string, Vector>
{
["description-dense"] = new Document
{
Text =
"A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
Model = "sentence-transformers/all-minilm-l6-v2",
},
},
Payload =
{
["title"] = "The Time Machine",
["author"] = "H.G. Wells",
["isbn"] = "9780553213515",
},
},
}
);
```


```
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "books",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(uint64(1)),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"description-dense": qdrant.NewVectorDocument(&qdrant.Document{
Model: "sentence-transformers/all-minilm-l6-v2",
Text: "A Victorian scientist builds a device to travel far into the future and observes the dim trajectories of humanity. He discovers evolutionary divergence and the consequences of class division. Wells's novella established time travel as a vehicle for social commentary.",
}),
}),
Payload: qdrant.NewValueMap(map[string]any{
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515",
}),
},
},
})
```


To find books related to “time travel”, use the following query:

```
POST /collections/books/points/query
{
"query": {
"text": "time travel",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="time travel", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
)
```


```
client.query("books", {
query: {
text: "time travel",
model: "sentence-transformers/all-minilm-l6-v2",
},
using: "description-dense",
with_payload: true,
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Document, Query, QueryPointsBuilder};
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"time travel",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("time travel")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "time travel",
Model = "sentence-transformers/all-minilm-l6-v2",
},
usingVector: "description-dense",
payloadSelector: true
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "sentence-transformers/all-minilm-l6-v2",
Text: "time travel",
}),
),
Using: qdrant.PtrOf("description-dense"),
WithPayload: qdrant.NewWithPayload(true),
})
```


In these examples, Qdrant uses [inference](https://qdrant.tech/documentation/concepts/inference) to generate vectors from the `text`

provided in the request using the specified `model`

. Alternatively, you can generate explicit vectors on the client side with a library like [FastEmbed](https://qdrant.tech/documentation/fastembed/).

### Lexical Search

Lexical search, also known as keyword-based search, is a traditional search technique that relies on matching words or phrases in the text. Many applications require a combination of semantic and traditional lexical search. A good example is in e-commerce, where users may want to search for products using a product ID. ID values don’t lend themselves well to vectorization, but being able to search for them is essential for a good search experience. To facilitate these use cases, Qdrant enables you to use lexical search alongside semantic search.

### Filtering Versus Querying

When it comes to lexical search in Qdrant, it’s important to distinguish between filtering and querying. Filtering is used to narrow down results based on exact matches or specific criteria, while querying involves finding relevant documents based on the content of the text. In other words, filtering is about precision, while querying is about recall. A filter does not contribute to the ranking of search results, as no score is calculated for filters. A query calculates a relevance score for each matching document and that score is used to rank search results.

| Filter | Query |
|---|---|
| Does not contribute to ranking | Contributes to ranking |
| Improves precision by narrowing down results | Improves recall by finding relevant data |

## Filtering

Qdrant supports [filtering](https://qdrant.tech/documentation/concepts/filtering) on a wide range of datatypes: numbers, dates, booleans, geolocations, and strings. In Qdrant, a filter is typically combined with a vector query. The vector query is used to score and rank the results, while the filter is used to narrow down the results based on specific criteria.

### Text and Keyword Strings

When it comes to filtering on strings, it is important to understand the difference between the two types of strings in Qdrant: text and keyword. These two string types are designed for different use cases: filtering on exact string values or filtering on individual search terms. To filter on exact string values, Qdrant uses **keyword** strings. Keyword strings are ideal for filtering on strings like IDs, categories, or tags. To filter on individual terms or phrases within a larger body of text, Qdrant uses **text** strings.

For example, take a string like “United States”. If you want to filter on all points with this exact string in the payload, use a keyword filter. On the other hand, if you want to filter on all points that contain the word “united” (matching “United States” as well as “United Kingdom”), use a text filter.

| Keyword | Text |
|---|---|
| Used for exact string matches | Used for filtering on individual terms |
| Ideal for IDs, categories, tags | Ideal for larger text fields |
| Not tokenized |
|

### Filtering on an Exact String

To filter on exact strings, first create a [payload index](https://qdrant.tech/documentation/concepts/indexing/#payload-index) of type `keyword`

for the field you want to filter on. A payload index makes filtering faster and reduces the load on the system.

For example, to filter books by author name, create a keyword index on the “author” field:

```
PUT /collections/books/index?wait=true
{
"field_name": "author",
"field_schema": "keyword"
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.create_payload_index(
collection_name="books",
field_name="author",
field_schema=models.PayloadSchemaType.KEYWORD
)
```


```
client.createPayloadIndex("books", {
field_name: "author",
field_schema: "keyword",
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateFieldIndexCollectionBuilder, FieldType};
client
.create_field_index(CreateFieldIndexCollectionBuilder::new(
"books",
"author",
FieldType::Keyword,
))
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
QdrantClient client =
client
.createPayloadIndexAsync(
"books", "author", PayloadSchemaType.Keyword, null, null, null, null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.CreatePayloadIndexAsync(
collectionName: "books",
fieldName: "author",
schemaType: PayloadSchemaType.Keyword
);
```


```
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "books",
FieldName: "author",
FieldType: qdrant.FieldType_FieldTypeKeyword.Enum(),
})
```


Next, when querying the data, you also add a filter clause to the request. The following example searches for books related to “time travel” but only returns books written by H.G. Wells:

```
POST /collections/books/points/query
{
"query": {
"text": "time travel",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true,
"filter": {
"must": [
{
"key": "author",
"match": {
"value": "H.G. Wells"
}
}
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="time travel", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
query_filter=models.Filter(
must=[models.FieldCondition(key="author", match=models.MatchValue(value="H.G. Wells"))]
),
)
```


```
client.query("books", {
query: {
text: "time travel",
model: "sentence-transformers/all-minilm-l6-v2",
},
using: "description-dense",
with_payload: true,
filter: {
must: [
{
key: "author",
match: {
value: "H.G. Wells",
},
},
],
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Condition, Document, Filter, Query, QueryPointsBuilder};
let filter = Filter::must([Condition::matches("author", "H.G. Wells".to_string())]);
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"time travel",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.filter(filter)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.*;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
Filter filter = Filter.newBuilder().addMust(matchKeyword("author", "H.G. Wells")).build();
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("time travel")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setFilter(filter)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "time travel",
Model = "sentence-transformers/all-minilm-l6-v2",
},
usingVector: "description-dense",
filter: MatchKeyword("author", "H.G. Wells"),
payloadSelector: true
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "sentence-transformers/all-minilm-l6-v2",
Text: "time travel",
}),
),
Using: qdrant.PtrOf("description-dense"),
WithPayload: qdrant.NewWithPayload(true),
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("author", "H.G. Wells"),
},
},
})
```


The ranking of the results of this request is based on the vector similarity of the query. The filter only narrows down the results to those points where the `author`

field exactly matches `H.G. Wells`

. Furthermore, the filter is case-sensitive. Filtering for the lowercase value `h.g. wells`

would not return any results.

The previous example only returns points that match the filter value. If you want the opposite: exclude points with a specific value, use a `must_not`

clause instead of `must`

. The following example only returns books *not* written by H.G. Wells:

```
POST /collections/books/points/query
{
"query": {
"text": "time travel",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true,
"filter": {
"must_not": [
{
"key": "author",
"match": {
"value": "H.G. Wells"
}
}
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="time travel", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
query_filter=models.Filter(
must_not=[models.FieldCondition(key="author", match=models.MatchValue(value="H.G. Wells"))]
),
)
```


```
client.query("books", {
query: {
text: "time travel",
model: "sentence-transformers/all-minilm-l6-v2",
},
using: "description-dense",
with_payload: true,
filter: {
must_not: [
{ key: "author", match: { value: "H.G. Wells" } },
],
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Condition, Document, Filter, Query, QueryPointsBuilder};
let filter = Filter::must_not([Condition::matches("author", "H.G. Wells".to_string())]);
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"time travel",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.filter(filter)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.*;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
Filter filter = Filter.newBuilder().addMustNot(matchKeyword("author", "H.G. Wells")).build();
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("time travel")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setFilter(filter)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var excludeFilter = new Filter { MustNot = { MatchKeyword("author", "H.G. Wells") } };
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "time travel",
Model = "sentence-transformers/all-minilm-l6-v2",
},
usingVector: "description-dense",
filter: excludeFilter,
payloadSelector: true
);
```


```
excludeFilter := qdrant.Filter{
MustNot: []*qdrant.Condition{
qdrant.NewMatch("author", "H.G. Wells"),
},
}
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "sentence-transformers/all-minilm-l6-v2",
Text: "time travel",
}),
),
Using: qdrant.PtrOf("description-dense"),
WithPayload: qdrant.NewWithPayload(true),
Filter: &excludeFilter,
})
```


### Filtering on Multiple Exact Strings

You can provide multiple filter clauses. For example, to find all books co-authored by Larry Niven and Jerry Pournelle, use the following filter:

```
POST /collections/books/points/query
{
"query": {
"text": "space opera",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true,
"filter": {
"must": [
{
"key": "author",
"match": {
"value": "Larry Niven"
}
},
{
"key": "author",
"match": {
"value": "Jerry Pournelle"
}
}
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="space opera", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
query_filter=models.Filter(
must=[
models.FieldCondition(key="author", match=models.MatchValue(value="Larry Niven")),
models.FieldCondition(key="author", match=models.MatchValue(value="Jerry Pournelle")),
]
),
)
```


```
client.query("books", {
query: {
text: "space opera",
model: "sentence-transformers/all-minilm-l6-v2",
},
using: "description-dense",
with_payload: true,
filter: {
must: [
{ key: "author", match: { value: "Larry Niven" } },
{ key: "author", match: { value: "Jerry Pournelle" } },
],
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Condition, Document, Filter, Query, QueryPointsBuilder};
let filter = Filter::must([
Condition::matches("author", "Larry Niven".to_string()),
Condition::matches("author", "Jerry Pournelle".to_string()),
]);
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"space opera",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.filter(filter)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.*;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
Filter filter =
Filter.newBuilder()
.addMust(matchKeyword("author", "Larry Niven"))
.addMust(matchKeyword("author", "Jerry Pournelle"))
.build();
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("space opera")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setFilter(filter)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var andFilter = new Filter
{
Must =
{
MatchKeyword("author", "Larry Niven"),
MatchKeyword("author", "Jerry Pournelle"),
},
};
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "space opera",
Model = "sentence-transformers/all-minilm-l6-v2",
},
usingVector: "description-dense",
filter: andFilter,
payloadSelector: true
);
```


```
andFilter := qdrant.Filter{
Must: []*qdrant.Condition{
qdrant.NewMatch("author", "Larry Niven"),
qdrant.NewMatch("author", "Jerry Pournelle"),
},
}
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "sentence-transformers/all-minilm-l6-v2",
Text: "space opera",
}),
),
Using: qdrant.PtrOf("description-dense"),
WithPayload: qdrant.NewWithPayload(true),
Filter: &andFilter,
})
```


Note that both filter clauses must be true for a point to be included in the results, because a `must`

clause operates like a logical `AND`

. If you want to find books written by either author (as well as both), use a `should`

clause, which operates like a logical `OR`

:

```
POST /collections/books/points/query
{
"query": {
"text": "space opera",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true,
"filter": {
"should": [
{
"key": "author",
"match": {
"value": "Larry Niven"
}
},
{
"key": "author",
"match": {
"value": "Jerry Pournelle"
}
}
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="space opera", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
query_filter=models.Filter(
should=[
models.FieldCondition(key="author", match=models.MatchValue(value="Larry Niven")),
models.FieldCondition(key="author", match=models.MatchValue(value="Jerry Pournelle")),
]
),
)
```


```
client.query("books", {
query: {
text: "space opera",
model: "sentence-transformers/all-minilm-l6-v2",
},
using: "description-dense",
with_payload: true,
filter: {
should: [
{ key: "author", match: { value: "Larry Niven" } },
{ key: "author", match: { value: "Jerry Pournelle" } },
],
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Condition, Document, Filter, Query, QueryPointsBuilder};
let filter = Filter::should([
Condition::matches("author", "Larry Niven".to_string()),
Condition::matches("author", "Jerry Pournelle".to_string()),
]);
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"space opera",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.filter(filter)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.*;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
Filter filter =
Filter.newBuilder()
.addShould(matchKeyword("author", "Larry Niven"))
.addShould(matchKeyword("author", "Jerry Pournelle"))
.build();
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("space opera")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setFilter(filter)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var orFilter = new Filter
{
Should =
{
MatchKeyword("author", "Larry Niven"),
MatchKeyword("author", "Jerry Pournelle"),
},
};
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "space opera",
Model = "sentence-transformers/all-minilm-l6-v2",
},
usingVector: "description-dense",
filter: orFilter,
payloadSelector: true
);
```


```
orFilter := qdrant.Filter{
Should: []*qdrant.Condition{
qdrant.NewMatch("author", "Larry Niven"),
qdrant.NewMatch("author", "Jerry Pournelle"),
},
}
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "sentence-transformers/all-minilm-l6-v2",
Text: "space opera",
}),
),
Using: qdrant.PtrOf("description-dense"),
WithPayload: qdrant.NewWithPayload(true),
Filter: &orFilter,
})
```


Alternatively, when you want to filter on one or more values of a single key, you can use the `any`

condition:

```
POST /collections/books/points/query
{
"query": {
"text": "space opera",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true,
"filter": {
"must": [
{
"key": "author",
"match": {
"any": ["Larry Niven", "Jerry Pournelle"]
}
}
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="space opera", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
query_filter=models.Filter(
must=[
models.FieldCondition(
key="author",
match=models.MatchAny(any=["Larry Niven", "Jerry Pournelle"]),
)
]
),
)
```


```
client.query("books", {
query: {
text: "space opera",
model: "sentence-transformers/all-minilm-l6-v2",
},
using: "description-dense",
with_payload: true,
filter: {
must: [
{
key: "author",
match: { any: ["Larry Niven", "Jerry Pournelle"] },
},
],
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Condition, Document, Filter, Query, QueryPointsBuilder};
let filter = Filter::should([
Condition::matches("author", "Larry Niven".to_string()),
Condition::matches("author", "Jerry Pournelle".to_string()),
]);
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"space opera",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.filter(filter)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.*;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
Filter filter =
Filter.newBuilder()
.addShould(matchKeyword("author", "Larry Niven"))
.addShould(matchKeyword("author", "Jerry Pournelle"))
.build();
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("space opera")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setFilter(filter)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var anyFilter = new Filter
{
Should =
{
MatchKeyword("author", "Larry Niven"),
MatchKeyword("author", "Jerry Pournelle"),
},
};
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "space opera",
Model = "sentence-transformers/all-minilm-l6-v2",
},
usingVector: "description-dense",
filter: anyFilter,
payloadSelector: true
);
```


```
anyFilter := qdrant.Filter{
Should: []*qdrant.Condition{
qdrant.NewMatch("author", "Larry Niven"),
qdrant.NewMatch("author", "Jerry Pournelle"),
},
}
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "sentence-transformers/all-minilm-l6-v2",
Text: "space opera",
}),
),
Using: qdrant.PtrOf("description-dense"),
WithPayload: qdrant.NewWithPayload(true),
Filter: &anyFilter,
})
```


### Full-Text Filtering

In contrast to keyword filtering, filtering on text strings enables you to filter on individual words within a larger text field in a case-insensitive manner. To understand how this works, it’s important to understand how text strings are processed at index time and query time.

#### Text Processing

To enable efficient full-text filtering, Qdrant processes text strings by breaking them down into individual tokens (words) and applying several normalization steps. This process ensures that searches are more flexible and can match variations of words. At query time, Qdrant applies the same processing steps to the filter string, ensuring that the filter matches the indexed tokens correctly.

The following text processing steps are applied to text strings:

- The string is broken down into individual tokens (words) using a process called
[tokenization](https://qdrant.tech/documentation/concepts/indexing/#tokenizers). By default, Qdrant uses the`word`

tokenizer, which splits the string using word boundaries, discarding spaces, punctuation marks, and special characters. - By default, each word is then
[converted to lowercase](https://qdrant.tech/documentation/concepts/indexing/#lowercasing). Lowercasing the tokens allows Qdrant to ignore capitalization, making full-text filters case-insensitive. - Optionally, Qdrant can remove diacritics (accents) from characters using a process called
[ASCII folding](https://qdrant.tech/documentation/concepts/indexing/#ascii-folding). This ensures that diacritics are ignored. As a result, filtering for the word “cafe” matches “café”. - Optionally, tokens can be reduced to their root form using a
[stemmer](https://qdrant.tech/documentation/concepts/indexing/#stemmer). This ensures that filtering for “running” also matches “run” and “ran”. Because stemming is language-specific, if enabled, it must be configured for a specific language. - Certain words like “the”, “is”, and “and” are very common in text and do not contribute much to the meaning of text. These words are called
[stopwords](https://qdrant.tech/documentation/concepts/indexing/#stopwords)and can optionally be removed during indexing. Like stemming, stopword removal is language-specific. You can configure specific languages for stopword removal and/or provide a custom list of stopwords to remove. - Optionally, you can enable
[phrase matching](https://qdrant.tech/documentation/concepts/indexing/#phrase-search)to allow filtering for multiple words in the exact same order as they appear in the original text.

These text processing steps can be configured when creating a [full-text index](documentation/concepts/indexing/#full-text-index). For example, to create a text index on the `title`

field with ASCII folding enabled:

```
PUT /collections/books/index?wait=true
{
"field_name": "title",
"field_schema": {
"type": "text",
"ascii_folding": true
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.create_payload_index(
collection_name="books",
field_name="title",
field_schema=models.TextIndexParams(type=models.TextIndexType.TEXT, ascii_folding=True),
)
```


```
client.createPayloadIndex("books", {
field_name: "title",
field_schema: {
type: "text",
ascii_folding: true,
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder, FieldType, TextIndexParamsBuilder, TokenizerType,
};
let params = TextIndexParamsBuilder::new(TokenizerType::Word)
.ascii_folding(true)
.lowercase(true)
.build();
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new("books", "title", FieldType::Text)
.field_index_params(params),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
import io.qdrant.client.grpc.Collections.TextIndexParams;
import io.qdrant.client.grpc.Collections.TokenizerType;
QdrantClient client =
client
.createPayloadIndexAsync(
"books",
"title",
PayloadSchemaType.Text,
PayloadIndexParams.newBuilder()
.setTextIndexParams(
TextIndexParams.newBuilder()
.setTokenizer(TokenizerType.Word)
.setAsciiFolding(true)
.setLowercase(true)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.CreatePayloadIndexAsync(
collectionName: "books",
fieldName: "title",
schemaType: PayloadSchemaType.Text,
indexParams: new PayloadIndexParams
{
TextIndexParams = new TextIndexParams
{
Tokenizer = TokenizerType.Word,
AsciiFolding = true,
Lowercase = true,
},
}
);
```


```
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "books",
FieldName: "title",
FieldType: qdrant.FieldType_FieldTypeText.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsText(
&qdrant.TextIndexParams{
Tokenizer: qdrant.TokenizerType_Word,
Lowercase: qdrant.PtrOf(true),
AsciiFolding: qdrant.PtrOf(true),
}),
})
```


When querying using this index, Qdrant automatically applies the same text processing steps to the filter string before matching it against the indexed tokens.

### Filter on Text Strings

To filter on text values in a payload field, first create a [full-text index](https://qdrant.tech/documentation/concepts/indexing/#full-text-index) for that field. Next, you can use a `text`

condition to query the collection with a filter for titles that contain the word “space”:

```
POST /collections/books/points/query
{
"query": {
"text": "space opera",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true,
"filter": {
"must": [
{
"key": "title",
"match": {
"text": "space"
}
}
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="space opera", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
query_filter=models.Filter(
must=[models.FieldCondition(key="title", match=models.MatchText(text="space"))]
),
)
```


```
client.query("books", {
query: {
text: "space opera",
model: "sentence-transformers/all-minilm-l6-v2",
},
using: "description-dense",
with_payload: true,
filter: {
must: [
{ key: "title", match: { text: "space" } },
],
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Condition, Document, Filter, Query, QueryPointsBuilder};
let filter = Filter::must([Condition::matches("title", "space".to_string())]);
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"space opera",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.filter(filter)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.*;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
Filter filter = Filter.newBuilder().addMust(matchText("title", "space")).build();
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("space opera")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setFilter(filter)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "space opera",
Model = "sentence-transformers/all-minilm-l6-v2",
},
usingVector: "description-dense",
filter: MatchText("title", "space"),
payloadSelector: true
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "sentence-transformers/all-minilm-l6-v2",
Text: "space opera",
}),
),
Using: qdrant.PtrOf("description-dense"),
WithPayload: qdrant.NewWithPayload(true),
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{qdrant.NewMatchText("title", "space")},
},
})
```


When filtering on more than one term, a `text`

filter only matches fields that contain *all* the specified terms (logical `AND`

). To match fields that contain *any* of the specified terms (logical `OR`

), use the `text_any`

condition:

```
POST /collections/books/points/query
{
"query": {
"text": "space opera",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true,
"filter": {
"must": [
{
"key": "title",
"match": {
"text_any": "space war"
}
}
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="space opera", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
query_filter=models.Filter(
must=[models.FieldCondition(key="title", match=models.MatchTextAny(text_any="space war"))]
),
)
```


```
client.query("books", {
query: {
text: "space opera",
model: "sentence-transformers/all-minilm-l6-v2",
},
using: "description-dense",
with_payload: true,
filter: {
must: [
{ key: "title", match: { text_any: "space war" } },
],
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Condition, Document, Filter, Query, QueryPointsBuilder};
let filter = Filter::must([Condition::matches("title", "space war".to_string())]);
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"space opera",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.filter(filter)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.*;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
Filter filter = Filter.newBuilder().addMust(matchTextAny("title", "space war")).build();
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("space opera")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setFilter(filter)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "space opera",
Model = "sentence-transformers/all-minilm-l6-v2",
},
usingVector: "description-dense",
filter: MatchTextAny("title", "space war"),
payloadSelector: true
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "sentence-transformers/all-minilm-l6-v2",
Text: "space opera",
}),
),
Using: qdrant.PtrOf("description-dense"),
WithPayload: qdrant.NewWithPayload(true),
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{qdrant.NewMatchTextAny("title", "space war")},
},
})
```


Qdrant also supports phrase filtering, enabling you to search for multiple words in the exact order they appear in the original text, with no other words in between. For example, a phrase filter for “time machine” matches against the title “The Time Machine” but would not match “The Time Travel Machine” (there’s a word between “time” and “machine”) nor “Machine Time” (the word order is incorrect).

The difference between phrase filtering and keyword filtering is that phrase filtering applies text processing and, as a result, is case-insensitive, while keyword filtering is case-sensitive and only matches the exact string. Additionally, keyword filtering has to match the entire string, whereas phrase filtering can match part of a larger string. So a keyword filter for “Space War” would not match “The Space War” because it doesn’t match “The,” but a phrase filter for “Space War” would.

Summarizing the differences between the four filtering methods for a multi-term filter on “Space War”:

| Method | Actual⠀query⠀⠀⠀ | Matches `Space War` ? | Matches `The Space War` ? | Matches `War in Space` ? | Matches `War of the Worlds` ? |
|---|---|---|---|---|---|
| text_any | `space` OR `war` | Yes | Yes | Yes | Yes |
| text | `space` AND `war` | Yes | Yes | Yes | No |
| phrase | `"space war"` | Yes | Yes | No | No |
| keyword | `"Space War"` | Yes | No | No | No |

To filter on phrases, use a `phrase`

condition. This requires enabling [phrase searching](https://qdrant.tech/documentation/concepts/indexing/#phrase-search) when creating the full-text index:

```
PUT /collections/books/index?wait=true
{
"field_name": "title",
"field_schema": {
"type": "text",
"ascii_folding": true,
"phrase_matching": true
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.create_payload_index(
collection_name="books",
field_name="title",
field_schema=models.TextIndexParams(type=models.TextIndexType.TEXT, ascii_folding=True, phrase_matching=True),
)
```


```
client.createPayloadIndex("books", {
field_name: "title",
field_schema: {
type: "text",
ascii_folding: true,
phrase_matching: true,
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
CreateFieldIndexCollectionBuilder, FieldType, TextIndexParamsBuilder, TokenizerType,
};
let params = TextIndexParamsBuilder::new(TokenizerType::Word)
.ascii_folding(true)
.phrase_matching(true)
.lowercase(true)
.build();
client
.create_field_index(
CreateFieldIndexCollectionBuilder::new("books", "title", FieldType::Text)
.field_index_params(params),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
import io.qdrant.client.grpc.Collections.TextIndexParams;
import io.qdrant.client.grpc.Collections.TokenizerType;
QdrantClient client =
client
.createPayloadIndexAsync(
"books",
"title",
PayloadSchemaType.Text,
PayloadIndexParams.newBuilder()
.setTextIndexParams(
TextIndexParams.newBuilder()
.setTokenizer(TokenizerType.Word)
.setAsciiFolding(true)
.setPhraseMatching(true)
.setLowercase(true)
.build())
.build(),
null,
null,
null)
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.CreatePayloadIndexAsync(
collectionName: "books",
fieldName: "title",
schemaType: PayloadSchemaType.Text,
indexParams: new PayloadIndexParams
{
TextIndexParams = new TextIndexParams
{
Tokenizer = TokenizerType.Word,
AsciiFolding = true,
PhraseMatching = true,
Lowercase = true,
},
}
);
```


```
client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
CollectionName: "books",
FieldName: "title",
FieldType: qdrant.FieldType_FieldTypeText.Enum(),
FieldIndexParams: qdrant.NewPayloadIndexParamsText(
&qdrant.TextIndexParams{
Tokenizer: qdrant.TokenizerType_Word,
Lowercase: qdrant.PtrOf(true),
AsciiFolding: qdrant.PtrOf(true),
PhraseMatching: qdrant.PtrOf(true),
}),
})
```


Next, you can use a `phrase`

condition to filter for titles that contain the exact phrase “time machine”:

```
POST /collections/books/points/query?wait=true
{
"query": {
"text": "time travel",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true,
"filter": {
"must": [
{
"key": "title",
"match": {
"phrase": "time machine"
}
}
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="time travel", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
query_filter=models.Filter(
must=[models.FieldCondition(key="title", match=models.MatchPhrase(phrase="time machine"))]
),
)
```


```
client.query("books", {
query: {
text: "time travel",
model: "sentence-transformers/all-minilm-l6-v2",
},
using: "description-dense",
with_payload: true,
filter: {
must: [
{ key: "title", match: { phrase: "time machine" } },
],
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Condition, Document, Filter, Query, QueryPointsBuilder};
let filter = Filter::must([Condition::matches("title", "time machine".to_string())]);
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"time travel",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.filter(filter)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.ConditionFactory.*;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.*;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.*;
import java.util.*;
QdrantClient client =
Filter filter = Filter.newBuilder().addMust(matchPhrase("title", "time machine")).build();
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("time travel")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setFilter(filter)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "time travel",
Model = "sentence-transformers/all-minilm-l6-v2",
},
usingVector: "description-dense",
filter: MatchPhrase("title", "time machine"),
payloadSelector: true
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "sentence-transformers/all-minilm-l6-v2",
Text: "time travel",
}),
),
Using: qdrant.PtrOf("description-dense"),
WithPayload: qdrant.NewWithPayload(true),
Filter: &qdrant.Filter{
Must: []*qdrant.Condition{qdrant.NewMatchPhrase("title", "time machine")},
},
})
```


### Progressive Filtering with the Batch Search API

Even though filters are not used to rank results, you can use the [batch search API](https://qdrant.tech/documentation/concepts/search/#batch-search-api) to progressively relax filters. This is useful when you have strict filtering criteria that may not return results. Batching multiple search requests with progressively relaxed filters enables you to get results even when the strictest filter returns no results.

For example, the following batch search request first tries to find books that match all search terms in the title. The second search request relaxes the filter to match any of the search terms. The third search request removes the filter altogether:

```
POST /collections/books/points/query/batch
{
"searches": [
{
"query": {
"text": "time travel",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true,
"filter": {
"must": [
{
"key": "title",
"match": {
"text": "time travel"
}
}
]
}
},
{
"query": {
"text": "time travel",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true,
"filter": {
"must": [
{
"key": "title",
"match": {
"text_any": "time travel"
}
}
]
}
},
{
"query": {
"text": "time travel",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"with_payload": true
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_batch_points(
collection_name="books",
requests=[
models.QueryRequest(
query=models.Document(text="time travel", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
filter=models.Filter(
must=[models.FieldCondition(key="title", match=models.MatchText(text="time travel"))]
),
),
models.QueryRequest(
query=models.Document(text="time travel", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
filter=models.Filter(
must=[models.FieldCondition(key="title", match=models.MatchTextAny(text_any="time travel"))]
),
),
models.QueryRequest(
query=models.Document(text="time travel", model="sentence-transformers/all-minilm-l6-v2"),
using="description-dense",
with_payload=True,
),
],
)
```


```
client.queryBatch("books", {
searches: [
{
query: { text: "time travel", model: "sentence-transformers/all-minilm-l6-v2" },
using: "description-dense",
with_payload: true,
filter: {
must: [{ key: "title", match: { text: "time travel" } }],
},
},
{
query: { text: "time travel", model: "sentence-transformers/all-minilm-l6-v2" },
using: "description-dense",
with_payload: true,
filter: {
must: [{ key: "title", match: { text_any: "time travel" } }],
},
},
{
query: { text: "time travel", model: "sentence-transformers/all-minilm-l6-v2" },
using: "description-dense",
with_payload: true,
},
],
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
Condition, Document, Filter, Query, QueryBatchPointsBuilder, QueryPointsBuilder,
};
let strict_filter = Filter::must([Condition::matches("title", "time travel".to_string())]);
let relaxed_filter = Filter::must([Condition::matches("title", "time travel".to_string())]);
let searches = vec![
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"time travel",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.filter(strict_filter)
.with_payload(true)
.build(),
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"time travel",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.filter(relaxed_filter)
.with_payload(true)
.build(),
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"time travel",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.with_payload(true)
.build(),
];
client
.query_batch(QueryBatchPointsBuilder::new("books", searches))
.await?;
```


```
import static io.qdrant.client.ConditionFactory.*;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.*;
import java.util.*;
QdrantClient client =
QueryPoints searchStrict =
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("time travel")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setFilter(Filter.newBuilder().addMust(matchText("title", "time travel")).build())
.setWithPayload(enable(true))
.build();
QueryPoints searchRelaxed =
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("time travel")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setFilter(Filter.newBuilder().addMust(matchTextAny("title", "time travel")).build())
.setWithPayload(enable(true))
.build();
QueryPoints searchVectorOnly =
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("time travel")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.setUsing("description-dense")
.setWithPayload(enable(true))
.build();
client.queryBatchAsync("books", List.of(searchStrict, searchRelaxed, searchVectorOnly)).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var searchStrict = new QueryPoints
{
CollectionName = "books",
Query = new Document
{
Text = "time travel",
Model = "sentence-transformers/all-minilm-l6-v2",
},
Using = "description-dense",
Filter = new Filter { Must = { MatchText("title", "time travel") } },
};
var searchRelaxed = new QueryPoints
{
CollectionName = "books",
Query = new Document
{
Text = "time travel",
Model = "sentence-transformers/all-minilm-l6-v2",
},
Using = "description-dense",
Filter = new Filter { Must = { MatchTextAny("title", "time travel") } },
};
var searchVectorOnly = new QueryPoints
{
CollectionName = "books",
Query = new Document
{
Text = "time travel",
Model = "sentence-transformers/all-minilm-l6-v2",
},
Using = "description-dense",
};
await client.QueryBatchAsync(
collectionName: "books",
queries: new List<QueryPoints> { searchStrict, searchRelaxed, searchVectorOnly }
);
```


```
strict := &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{Model: "sentence-transformers/all-minilm-l6-v2", Text: "time travel"}),
),
Using: qdrant.PtrOf("description-dense"),
Filter: &qdrant.Filter{Must: []*qdrant.Condition{qdrant.NewMatchText("title", "time travel")}},
}
relaxed := &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{Model: "sentence-transformers/all-minilm-l6-v2", Text: "time travel"}),
),
Using: qdrant.PtrOf("description-dense"),
Filter: &qdrant.Filter{Must: []*qdrant.Condition{qdrant.NewMatchTextAny("title", "time travel")}},
}
vectorOnly := &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{Model: "sentence-transformers/all-minilm-l6-v2", Text: "time travel"}),
),
Using: qdrant.PtrOf("description-dense"),
}
client.QueryBatch(context.Background(), &qdrant.QueryBatchPoints{
CollectionName: "books",
QueryPoints: []*qdrant.QueryPoints{strict, relaxed, vectorOnly},
})
```


The response contains three separate result sets. You can return the first non-empty result set to the user, or you can use the three sets to assemble a single ranked list.

## Full-Text Search

Full-text search is similar to full-text filtering, with the key difference being that full-text queries are used for ranking. For each document that matches the search terms, Qdrant calculates a relevance score based on how well the document matches the search terms. That score is used to rank the results. Qdrant supports several full-text search scoring algorithms.

Full-text search in Qdrant is powered by [sparse vectors](https://qdrant.tech/articles/sparse-vectors/). Why sparse vectors? Because they are a flexible way to represent data for search purposes, from classic BM25-based search, to semantic search, and [collaborative filtering](https://qdrant.tech/documentation/advanced-tutorials/collaborative-filtering/). Each term in the vocabulary corresponds to one or more dimension of the sparse vector, and the values in those dimensions represent the weight of that term in the document. Weights can be calculated using document statistics for use with the [BM25](#bm25) ranking algorithm, or you can use transformer-based models that can capture semantic meaning, like [SPLADE++](#splade), and [miniCOIL](#minicoil).

### BM25

BM25 (Best Matching 25) is a popular ranking algorithm that takes a probabilistic approach to score calculation. For each search term, BM25 considers several statistics about the term and the document to calculate a relevance score:

- Term frequency (TF): the more often a term appears in a document, the more relevant that document is likely to be.
- Inverse document frequency (IDF): the rarer a term is across all documents, the higher the weight of that term.
- Document length: a term appearing in a shorter document is more relevant than the same term appearing in a longer document.

Qdrant provides native support for BM25 through an [inference model](https://qdrant.tech/documentation/concepts/inference/#server-side-inference-bm25) that generates sparse vectors, or you can generate vectors on the client side using the [FastEmbed](https://qdrant.tech/documentation/fastembed/) library.

The BM25 model supports the same [text processing](#text-processing) options as text indices, including tokenization, lowercasing, ASCII folding, stemming, and stopword removal. A notable difference with text indices is that BM25 defaults to English stemming and stopword removal. If you are using a language other than English, ensure that you [configure](#language-specific-settings) the model accordingly.

To use BM25, configure a sparse vector when creating a collection:

```
PUT /collections/books?wait=true
{
"sparse_vectors": {
"title-bm25": {
"modifier": "idf"
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.create_collection(
collection_name="books",
sparse_vectors_config={
"title-bm25": models.SparseVectorParams(modifier=models.Modifier.IDF)
},
)
```


```
client.createCollection("books", {
sparse_vectors: {
"title-bm25": { modifier: "idf" },
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
CreateCollectionBuilder, Modifier, SparseVectorParamsBuilder, SparseVectorsConfigBuilder,
};
let mut sparse = SparseVectorsConfigBuilder::default();
sparse.add_named_vector_params(
"title-bm25",
SparseVectorParamsBuilder::default().modifier(Modifier::Idf),
);
client
.create_collection(CreateCollectionBuilder::new("books").sparse_vectors_config(sparse))
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.*;
QdrantClient client =
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("books")
.setSparseVectorsConfig(
SparseVectorConfig.newBuilder()
.putMap(
"title-bm25",
SparseVectorParams.newBuilder().setModifier(Modifier.Idf).build())
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.CreateCollectionAsync(
collectionName: "books",
sparseVectorsConfig: ("title-bm25", new SparseVectorParams { Modifier = Modifier.Idf })
);
```


```
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "books",
SparseVectorsConfig: qdrant.NewSparseVectorsConfig(
map[string]*qdrant.SparseVectorParams{
"title-bm25": {Modifier: qdrant.Modifier_Idf.Enum()},
}),
})
```


Note the [IDF modifier](https://qdrant.tech/documentation/concepts/indexing/#idf-modifier), which configures the sparse vector for queries that use the inverse document frequency (IDF).

Now you can ingest data. The following example ingests a book with its title represented as a sparse vector generated by the BM25 model:

```
PUT /collections/books/points?wait=true
{
"points": [
{
"id": 1,
"vector": {
"title-bm25": {
"text": "The Time Machine",
"model": "qdrant/bm25"
}
},
"payload": {
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515"
}
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.upsert(
collection_name="books",
points=[
models.PointStruct(
id=1,
vector={
"title-bm25": models.Document(
text="The Time Machine",
model="qdrant/bm25",
)
},
payload={
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515",
},
)
],
)
```


```
client.upsert("books", {
wait: true,
points: [
{
id: 1,
vector: {
"title-bm25": {
text: "The Time Machine",
model: "qdrant/bm25",
},
},
payload: {
title: "The Time Machine",
author: "H.G. Wells",
isbn: "9780553213515",
},
},
],
});
```


```
use std::collections::HashMap;
use qdrant_client::qdrant::{Document, PointStruct, UpsertPointsBuilder};
use qdrant_client::{Payload, Qdrant};
use serde_json::json;
let point = PointStruct::new(
1,
HashMap::from([(
"title-bm25".to_string(),
Document::new("The Time Machine", "qdrant/bm25"),
)]),
Payload::try_from(json!({
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515",
}))
.unwrap(),
);
client
.upsert_points(UpsertPointsBuilder::new("books", vec![point]).wait(true))
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;
import java.util.*;
QdrantClient client =
PointStruct point =
PointStruct.newBuilder()
.setId(id(1))
.setVectors(
namedVectors(
Map.of(
"title-bm25",
vector(
Document.newBuilder()
.setText("The Time Machine")
.setModel("qdrant/bm25")
.build()))))
.putAllPayload(
Map.of(
"title", value("The Time Machine"),
"author", value("H.G. Wells"),
"isbn", value("9780553213515")))
.build();
client.upsertAsync("books", List.of(point)).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.UpsertAsync(
collectionName: "books",
wait: true,
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new Dictionary<string, Vector>
{
["title-bm25"] = new Document
{
Text = "The Time Machine",
Model = "qdrant/bm25",
},
},
Payload =
{
["title"] = "The Time Machine",
["author"] = "H.G. Wells",
["isbn"] = "9780553213515",
},
},
}
);
```


```
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "books",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(uint64(1)),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"title-bm25": qdrant.NewVectorDocument(&qdrant.Document{
Model: "qdrant/bm25",
Text: "The Time Machine",
}),
}),
Payload: qdrant.NewValueMap(map[string]any{
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515",
}),
},
},
})
```


After ingesting data, you can query the sparse vector. The following example searches for books with “time travel” in the title using the BM25 model:

```
POST /collections/books/points/query
{
"query": {
"text": "time travel",
"model": "qdrant/bm25"
},
"using": "title-bm25",
"limit": 10,
"with_payload": true
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="time travel", model="qdrant/bm25"),
using="title-bm25",
limit=10,
with_payload=True,
)
```


```
client.query("books", {
query: {
text: "time travel",
model: "qdrant/bm25",
},
using: "title-bm25",
limit: 10,
with_payload: true,
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Document, Query, QueryPointsBuilder};
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new("time travel", "qdrant/bm25")))
.using("title-bm25")
.limit(10)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("time travel")
.setModel("qdrant/bm25")
.build()))
.setUsing("title-bm25")
.setLimit(10)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.QueryAsync(
collectionName: "books",
query: new Document { Text = "time travel", Model = "qdrant/bm25" },
usingVector: "title-bm25",
payloadSelector: true,
limit: 10
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "qdrant/bm25",
Text: "time travel",
}),
),
Using: qdrant.PtrOf("title-bm25"),
WithPayload: qdrant.NewWithPayload(true),
Limit: qdrant.PtrOf(uint64(10)),
})
```


#### Configuring BM25 Parameters

The BM25 [ranking function](https://en.wikipedia.org/wiki/Okapi_BM25#The_ranking_function) includes three adjustable parameters that you can set at ingest time to optimize search results for your specific use case:

`k`

. Controls term frequency saturation. Higher values increase the influence of term frequency. Defaults to 1.2.`b`

. Controls document length normalization. Ranges from 0 (no normalization) to 1 (full normalization). A higher value means longer documents have less impact. Defaults to 0.75.`avg_len`

. Average number of words in the field being queried. Defaults to 256.

For instance, book titles are generally shorter than 256 words. To achieve more accurate scoring when searching for book titles, you could calculate or estimate the average title length and set the `avg_len`

parameter accordingly:

```
PUT /collections/books/points?wait=true
{
"points": [
{
"id": 1,
"vector": {
"title-bm25": {
"text": "The Time Machine",
"model": "qdrant/bm25",
"options": {
"avg_len": 5.0
}
}
},
"payload": {
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515"
}
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.upsert(
collection_name="books",
points=[
models.PointStruct(
id=1,
vector={
"title-bm25": models.Document(
text="The Time Machine",
model="qdrant/bm25",
options={"avg_len": 5.0}
)
},
payload={
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515",
},
)
],
)
```


```
client.upsert("books", {
wait: true,
points: [
{
id: 1,
vector: {
"title-bm25": {
text: "The Time Machine",
model: "qdrant/bm25",
options: { avg_len: 5.0 },
},
},
payload: {
title: "The Time Machine",
author: "H.G. Wells",
isbn: "9780553213515",
},
},
],
});
```


```
use std::collections::HashMap;
use qdrant_client::qdrant::{DocumentBuilder, PointStruct, UpsertPointsBuilder, Value};
use qdrant_client::{Payload, Qdrant};
use serde_json::json;
let mut options = HashMap::new();
options.insert("avg_len".to_string(), Value::from(5.0));
let point = PointStruct::new(
1,
HashMap::from([(
"title-bm25".to_string(),
DocumentBuilder::new("The Time Machine", "qdrant/bm25")
.options(options)
.build(),
)]),
Payload::try_from(json!({
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515",
}))
.unwrap(),
);
client
.upsert_points(UpsertPointsBuilder::new("books", vec![point]).wait(true))
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;
import java.util.*;
QdrantClient client =
PointStruct point =
PointStruct.newBuilder()
.setId(id(1))
.setVectors(
namedVectors(
Map.of(
"title-bm25",
vector(
Document.newBuilder()
.setText("The Time Machine")
.setModel("qdrant/bm25")
.putOptions("avg_len", value(5.0))
.build()))))
.putAllPayload(
Map.of(
"title", value("The Time Machine"),
"author", value("H.G. Wells"),
"isbn", value("9780553213515")))
.build();
client.upsertAsync("books", List.of(point)).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.UpsertAsync(
collectionName: "books",
wait: true,
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new Dictionary<string, Vector>
{
["title-bm25"] = new Document
{
Text = "The Time Machine",
Model = "qdrant/bm25",
Options = { ["avg_len"] = 5.0 },
},
},
Payload =
{
["title"] = "The Time Machine",
["author"] = "H.G. Wells",
["isbn"] = "9780553213515",
},
},
}
);
```


```
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "books",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(uint64(1)),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"title-bm25": qdrant.NewVectorDocument(&qdrant.Document{
Model: "qdrant/bm25",
Text: "The Time Machine",
Options: qdrant.NewValueMap(map[string]any{"avg_len": 5.0}),
}),
}),
Payload: qdrant.NewValueMap(map[string]any{
"title": "The Time Machine",
"author": "H.G. Wells",
"isbn": "9780553213515",
}),
},
},
})
```


#### Language-specific Settings

By default, BM25 uses English-specific settings for tokenization, stemming, and stopword removal. Words are reduced to their English root form, and common English stopwords are removed. If your data is not in English, this leads to suboptimal search results. To achieve optimal results for other languages, configure language-specific BM25 settings.

**Stemming and Stopwords**

To configure stemming and stopword removal, use the following options:

`language`

: sets the language for stemming and stopword removal. Defaults to`english`

. To disable stemming and stopword removal, set`language`

to`none`

.`stemmer`

: defaults to stemming for`language`

(if set), but can be configured independently.`stopwords`

: defaults to a set of stopwords for`language`

(if set) but can be configured independently. You can configure a specific`language`

and/or configure an explicit set of stopwords that will be merged with the stopword set of the configured language.

For example, to use Spanish stemming and stopwords during data ingestion, use:

```
PUT /collections/books/points?wait=true
{
"points": [
{
"id": 1,
"vector": {
"title-bm25": {
"text": "La Máquina del Tiempo",
"model": "qdrant/bm25",
"options": {
"language": "spanish"
}
}
},
"payload": {
"title": "La Máquina del Tiempo",
"author": "H.G. Wells",
"isbn": "9788411486880"
}
}
]
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.upsert(
collection_name="books",
points=[
models.PointStruct(
id=1,
vector={
"title-bm25": models.Document(
text="La Máquina del Tiempo",
model="qdrant/bm25",
options={"language": "spanish"},
)
},
payload={
"title": "La Máquina del Tiempo",
"author": "H.G. Wells",
"isbn": "9788411486880",
},
)
],
)
```


```
client.upsert("books", {
wait: true,
points: [
{
id: 1,
vector: {
"title-bm25": {
text: "La Máquina del Tiempo",
model: "qdrant/bm25",
options: { language: "spanish" },
},
},
payload: {
title: "La Máquina del Tiempo",
author: "H.G. Wells",
isbn: "9788411486880",
},
},
],
});
```


```
use std::collections::HashMap;
use qdrant_client::qdrant::{DocumentBuilder, PointStruct, UpsertPointsBuilder, Value};
use qdrant_client::{Payload, Qdrant};
use serde_json::json;
let mut options = HashMap::new();
options.insert("language".to_string(), Value::from("spanish"));
let point = PointStruct::new(
1,
HashMap::from([(
"title-bm25".to_string(),
DocumentBuilder::new("La Máquina del Tiempo", "qdrant/bm25")
.options(options)
.build(),
)]),
Payload::try_from(json!({
"title": "La Máquina del Tiempo",
"author": "H.G. Wells",
"isbn": "9788411486880",
}))
.unwrap(),
);
client
.upsert_points(UpsertPointsBuilder::new("books", vec![point]).wait(true))
.await?;
```


```
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;
import java.util.*;
QdrantClient client =
PointStruct point =
PointStruct.newBuilder()
.setId(id(1))
.setVectors(
namedVectors(
Map.of(
"title-bm25",
vector(
Document.newBuilder()
.setText("La Máquina del Tiempo")
.setModel("qdrant/bm25")
.build()))))
.putAllPayload(
Map.of(
"title", value("La Máquina del Tiempo"),
"author", value("H.G. Wells"),
"isbn", value("9788411486880")))
.build();
client.upsertAsync("books", List.of(point)).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.UpsertAsync(
collectionName: "books",
wait: true,
points: new List<PointStruct>
{
new()
{
Id = 1,
Vectors = new Dictionary<string, Vector>
{
["title-bm25"] = new Document
{
Text = "La Máquina del Tiempo",
Model = "qdrant/bm25",
},
},
Payload =
{
["title"] = "La Máquina del Tiempo",
["author"] = "H.G. Wells",
["isbn"] = "9788411486880",
},
},
}
);
```


```
client.Upsert(context.Background(), &qdrant.UpsertPoints{
CollectionName: "books",
Points: []*qdrant.PointStruct{
{
Id: qdrant.NewIDNum(uint64(1)),
Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
"title-bm25": qdrant.NewVectorDocument(&qdrant.Document{
Model: "qdrant/bm25",
Text: "La Máquina del Tiempo",
}),
}),
Payload: qdrant.NewValueMap(map[string]any{
"title": "La Máquina del Tiempo",
"author": "H.G. Wells",
"isbn": "9788411486880",
}),
},
},
})
```


At query time, use the exact same parameters to ensure consistent text processing:

```
POST /collections/books/points/query
{
"query": {
"text": "tiempo",
"model": "qdrant/bm25",
"options": {
"language": "spanish"
}
},
"using": "title-bm25",
"limit": 10,
"with_payload": true
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="tiempo", model="qdrant/bm25", options={"language": "spanish"}),
using="title-bm25",
limit=10,
with_payload=True,
)
```


```
client.query("books", {
query: {
text: "tiempo",
model: "qdrant/bm25",
options: { language: "spanish" },
},
using: "title-bm25",
limit: 10,
with_payload: true,
});
```


```
use std::collections::HashMap;
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{DocumentBuilder, Query, QueryPointsBuilder, Value};
let mut options = HashMap::new();
options.insert("language".to_string(), Value::from("spanish"));
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(
DocumentBuilder::new("tiempo", "qdrant/bm25")
.options(options)
.build(),
))
.using("title-bm25")
.limit(10)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder().setText("tiempo").setModel("qdrant/bm25").build()))
.setUsing("title-bm25")
.setLimit(10)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "tiempo",
Model = "qdrant/bm25",
Options = { ["language"] = "spanish" },
},
usingVector: "title-bm25",
payloadSelector: true,
limit: 10
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "qdrant/bm25",
Text: "tiempo",
Options: qdrant.NewValueMap(map[string]any{"language": "spanish"}),
}),
),
Using: qdrant.PtrOf("title-bm25"),
WithPayload: qdrant.NewWithPayload(true),
Limit: qdrant.PtrOf(uint64(10)),
})
```


To configure only a stemmer or a stopword set, rather than both, set `language`

to `none`

and specify the configuration for the desired stemmer or stopwords.

**ASCII Folding**

ASCII folding is the process of removing diacritics (accents) from characters. By removing diacritics, ASCII folding enables you to ignore accents when searching. For instance, with ASCII folding enabled, searching for “cafe” matches both “cafe” and “café”.

To enable ASCII folding, set the `ascii_folding`

option to `true`

at both ingest and query time:

```
POST /collections/books/points/query
{
"query": {
"text": "Mieville",
"model": "qdrant/bm25",
"options": {
"ascii_folding": true
}
},
"using": "author-bm25",
"limit": 10,
"with_payload": true
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
# Note: the ascii_folding option is not supported by FastEmbed
client.query_points(
collection_name="books",
query=models.Document(text="Mieville", model="qdrant/bm25", options={"ascii_folding": True}),
using="author-bm25",
limit=10,
with_payload=True,
)
```


```
client.query("books", {
query: {
text: "Mieville",
model: "qdrant/bm25",
options: { ascii_folding: true },
},
using: "author-bm25",
limit: 10,
with_payload: true,
});
```


```
use std::collections::HashMap;
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{DocumentBuilder, Query, QueryPointsBuilder, Value};
let mut options = HashMap::new();
options.insert("ascii_folding".to_string(), Value::from(true));
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(
DocumentBuilder::new("Mieville", "qdrant/bm25")
.options(options)
.build(),
))
.using("author-bm25")
.limit(10)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder().setText("Mieville").setModel("qdrant/bm25").build()))
.setUsing("author-bm25")
.setLimit(10)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "Mieville",
Model = "qdrant/bm25",
Options = { ["ascii_folding"] = true },
},
usingVector: "author-bm25",
payloadSelector: true,
limit: 10
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "qdrant/bm25",
Text: "Mieville",
Options: qdrant.NewValueMap(map[string]any{"ascii_folding": true}),
}),
),
Using: qdrant.PtrOf("author-bm25"),
WithPayload: qdrant.NewWithPayload(true),
Limit: qdrant.PtrOf(uint64(10)),
})
```


**Tokenizer**

The tokenizer breaks down text into individual tokens (words). By default, the BM25 model uses the `word`

tokenizer, which splits text based on word boundaries like whitespace and punctuation. This method is effective for Latin-based languages but may not work well for languages with non-Latin alphabets or languages that do not use spaces to separate words. For those languages, use the `multilingual`

tokenizer. This tokenizer supports multiple languages, including those with non-Latin alphabets and non-space delimiters.

```
POST /collections/books/points/query
{
"query": {
"text": "村上春樹",
"model": "qdrant/bm25",
"options": {
"tokenizer": "multilingual"
}
},
"using": "author-bm25",
"limit": 10,
"with_payload": true
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
# Note: the tokenizer option is not supported by FastEmbed
client.query_points(
collection_name="books",
query=models.Document(text="村上春樹", model="qdrant/bm25", options={"tokenizer": "multilingual"}),
using="author-bm25",
limit=10,
with_payload=True,
)
```


```
client.query("books", {
query: {
text: "村上春樹",
model: "qdrant/bm25",
options: { tokenizer: "multilingual" },
},
using: "author-bm25",
limit: 10,
with_payload: true,
});
```


```
use std::collections::HashMap;
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{DocumentBuilder, Query, QueryPointsBuilder, Value};
let mut options = HashMap::new();
options.insert("tokenizer".to_string(), Value::from("multilingual"));
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(
DocumentBuilder::new("村上春樹", "qdrant/bm25")
.options(options)
.build(),
))
.using("author-bm25")
.limit(10)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(Document.newBuilder().setText("村上春樹").setModel("qdrant/bm25").build()))
.setUsing("author-bm25")
.setLimit(10)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "村上春樹",
Model = "qdrant/bm25",
Options = { ["tokenizer"] = "multilingual" },
},
usingVector: "author-bm25",
payloadSelector: true,
limit: 10
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "qdrant/bm25",
Text: "村上春樹",
Options: qdrant.NewValueMap(map[string]any{"tokenizer": "multilingual"}),
}),
),
Using: qdrant.PtrOf("author-bm25"),
WithPayload: qdrant.NewWithPayload(true),
Limit: qdrant.PtrOf(uint64(10)),
})
```


**Language-neutral Text Processing**

In some situations, you may want to disable language-specific processing altogether. For example, when searching for author names, that don’t necessarily conform to the rules of a specific language.

To disable language-specific processing, set the following options:

`language`

: set to`none`

to disable language-specific stemming and stopword removal.`tokenizer`

: set to`multilingual`

for multilingual tokenization and lemmatization.- Optionally, set
`ascii_folding`

to`true`

to enable ASCII folding and ignore diacritics.

```
POST /collections/books/points/query
{
"query": {
"text": "Mieville",
"model": "qdrant/bm25",
"options": {
"language": "none",
"tokenizer": "multilingual",
"ascii_folding": true
}
},
"using": "author-bm25",
"limit": 10,
"with_payload": true
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
# Note: these BM25 options are not supported by FastEmbed
client.query_points(
collection_name="books",
query=models.Document(
text="Mieville",
model="qdrant/bm25",
options={"language": "none", "tokenizer": "multilingual", "ascii_folding": True},
),
using="author-bm25",
limit=10,
with_payload=True,
)
```


```
client.query("books", {
query: {
text: "Mieville",
model: "qdrant/bm25",
options: { language: "none", tokenizer: "multilingual", ascii_folding: true },
},
using: "author-bm25",
limit: 10,
with_payload: true,
});
```


```
use std::collections::HashMap;
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{DocumentBuilder, Query, QueryPointsBuilder, Value};
let mut options = HashMap::new();
options.insert("language".to_string(), Value::from("none"));
options.insert("tokenizer".to_string(), Value::from("multilingual"));
options.insert("ascii_folding".to_string(), Value::from(true));
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(
DocumentBuilder::new("Mieville", "qdrant/bm25")
.options(options)
.build(),
))
.using("author-bm25")
.limit(10)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder().setText("Mieville").setModel("qdrant/bm25").build()))
.setUsing("author-bm25")
.setLimit(10)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.QueryAsync(
collectionName: "books",
query: new Document
{
Text = "Mieville",
Model = "qdrant/bm25",
Options =
{
["language"] = "none",
["tokenizer"] = "multilingual",
["ascii_folding"] = true,
},
},
usingVector: "author-bm25",
payloadSelector: true,
limit: 10
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "qdrant/bm25",
Text: "Mieville",
Options: qdrant.NewValueMap(map[string]any{"language": "none", "tokenizer": "multilingual", "ascii_folding": true}),
}),
),
Using: qdrant.PtrOf("author-bm25"),
WithPayload: qdrant.NewWithPayload(true),
Limit: qdrant.PtrOf(uint64(10)),
})
```


### SPLADE++

The SPLADE (Sparse Lexical and Dense) family of models are transformer-based models that generate sparse vectors out of text. These models combine the benefits of traditional lexical search with the power of transformer-based models by accounting for homonyms and synonyms. SPLADE models achieve this by expanding the vocabulary of the input text using contextual embeddings from the transformer model. For example, when processing the input text “time travel”, a SPLADE model may expand the input to include related terms like “temporal”, “journey”, and “chronology”. This expansion allows SPLADE models to capture the semantic meaning of the text while still leveraging the strengths of lexical search.

The advantage of using SPLADE models is that they [perform better](https://qdrant.tech/articles/sparse-vectors/#splade) than traditional BM25. They also have several downsides though. First, because they use a fixed vocabulary, you can’t use SPLADE models to find terms that are not in the vocabulary, such as product IDs and out-of-domain language (words not seen in training). Secondly, because they are transformer-based models, SPLADE models are slower and require more computational resources than the traditional BM25 model.

On [Qdrant Cloud](https://qdrant.tech/documentation/concepts/inference/#qdrant-cloud-inference), you can use the SPLADE++ model with inference. Alternatively, you can generate vectors on the client side using the [FastEmbed](https://qdrant.tech/documentation/fastembed/) library.

```
POST /collections/books/points/query
{
"query": {
"text": "time travel",
"model": "prithivida/splade_pp_en_v1"
},
"using": "title-splade",
"limit": 10,
"with_payload": true
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
query=models.Document(text="time travel", model="prithivida/splade_pp_en_v1"),
using="title-splade",
limit=10,
with_payload=True,
)
```


```
client.query("books", {
query: {
text: "time travel",
model: "prithivida/splade_pp_en_v1",
},
using: "title-splade",
limit: 10,
with_payload: true,
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Document, Query, QueryPointsBuilder};
client
.query(
QueryPointsBuilder::new("books")
.query(Query::new_nearest(Document::new(
"time travel",
"prithivida/splade_pp_en_v1",
)))
.using("title-splade")
.limit(10)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.setQuery(
nearest(
Document.newBuilder()
.setText("time travel")
.setModel("prithivida/splade_pp_en_v1")
.build()))
.setUsing("title-splade")
.setLimit(10)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.QueryAsync(
collectionName: "books",
query: new Document { Text = "time travel", Model = "prithivida/splade_pp_en_v1" },
usingVector: "title-splade",
payloadSelector: true,
limit: 10
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Query: qdrant.NewQueryNearest(
qdrant.NewVectorInputDocument(&qdrant.Document{
Model: "prithivida/splade_pp_en_v1",
Text: "time travel",
}),
),
Using: qdrant.PtrOf("title-splade"),
WithPayload: qdrant.NewWithPayload(true),
Limit: qdrant.PtrOf(uint64(10)),
})
```


For a tutorial on using SPLADE++ with FastEmbed, refer to [How to Generate Sparse Vectors with SPLADE](https://qdrant.tech/documentation/fastembed/fastembed-splade/).

### miniCOIL

[miniCOIL](https://qdrant.tech/articles/minicoil/) strikes a balance between the flexibility of BM25 and the performance of SPLADE++. miniCOIL is a transformer-based model that generates sparse vectors for text. Unlike SPLADE++, it doesn’t use a vocabulary expansion mechanism. To capture the context and meaning of terms, the model generates a four-dimensional vector for each term. miniCOIL does not use a fixed vocabulary, making it an effective model for lexical search that ranks results based on the contextual meaning of keywords.

miniCOIL can be [used with the FastEmbed library](https://qdrant.tech/documentation/fastembed/fastembed-minicoil/).

## Combining Semantic and Lexical Search with Hybrid Search

[Hybrid search](https://qdrant.tech/documentation/concepts/hybrid-queries/#hybrid-search) enables you to combine semantic and lexical search in a single query, returning results that match the semantic meaning, the exact keywords, or both. This is useful when you don’t know whether the user is looking for a specific keyword or a semantically similar document. For example, when searching for books, a user may enter “time travel” to find books related to the concept of time travel, but they may also enter a book’s ISBN to find a specific book. Hybrid queries enable you to return results for both cases in a single query.

Hybrid queries make use of Qdrant’s ability to store [multiple named vectors](https://qdrant.tech/documentation/concepts/vectors/#named-vectors) in a single point. For example, you can store a dense vector for semantic search and a sparse vector for lexical search in the same point. To do so, first create a collection with both a dense vector and a sparse vector:

```
PUT /collections/books?wait=true
{
"vectors": {
"description-dense": {
"size": 384,
"distance": "Cosine"
}
},
"sparse_vectors": {
"isbn-bm25": {
"modifier": "idf"
}
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.create_collection(
collection_name="books",
vectors_config={
"description-dense": models.VectorParams(size=384, distance=models.Distance.COSINE)
},
sparse_vectors_config={
"isbn-bm25": models.SparseVectorParams(modifier=models.Modifier.IDF)
},
)
```


```
client.createCollection("books", {
vectors: {
"description-dense": { size: 384, distance: "Cosine" },
},
sparse_vectors: {
"isbn-bm25": { modifier: "idf" },
},
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
CreateCollectionBuilder, Distance, Modifier, SparseVectorParamsBuilder,
SparseVectorsConfigBuilder, VectorParamsBuilder, VectorsConfigBuilder,
};
let mut vectors = VectorsConfigBuilder::default();
vectors.add_named_vector_params(
"description-dense",
VectorParamsBuilder::new(384, Distance::Cosine),
);
let mut sparse = SparseVectorsConfigBuilder::default();
sparse.add_named_vector_params(
"isbn-bm25",
SparseVectorParamsBuilder::default().modifier(Modifier::Idf),
);
client
.create_collection(
CreateCollectionBuilder::new("books")
.vectors_config(vectors)
.sparse_vectors_config(sparse),
)
.await?;
```


```
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.*;
QdrantClient client =
client
.createCollectionAsync(
CreateCollection.newBuilder()
.setCollectionName("books")
.setVectorsConfig(
VectorsConfig.newBuilder()
.setParamsMap(
VectorParamsMap.newBuilder()
.putMap(
"description-dense",
VectorParams.newBuilder()
.setSize(384)
.setDistance(Distance.Cosine)
.build())
.build())
.build())
.setSparseVectorsConfig(
SparseVectorConfig.newBuilder()
.putMap(
"isbn-bm25",
SparseVectorParams.newBuilder().setModifier(Modifier.Idf).build())
.build())
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.CreateCollectionAsync(
collectionName: "books",
vectorsConfig: new VectorParamsMap
{
Map =
{
["description-dense"] = new VectorParams
{
Size = 384,
Distance = Distance.Cosine,
},
},
},
sparseVectorsConfig: new SparseVectorConfig
{
Map = { ["isbn-bm25"] = new SparseVectorParams { Modifier = Modifier.Idf } },
}
);
```


```
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
CollectionName: "books",
VectorsConfig: qdrant.NewVectorsConfigMap(
map[string]*qdrant.VectorParams{
"description-dense": {Size: 384, Distance: qdrant.Distance_Cosine},
}),
SparseVectorsConfig: qdrant.NewSparseVectorsConfig(
map[string]*qdrant.SparseVectorParams{
"isbn-bm25": {Modifier: qdrant.Modifier_Idf.Enum()},
}),
})
```


After ingesting data with both vectors, you can use the prefetch feature to run both semantic and lexical queries in a single request. The results of both queries are then combined using a fusion method like Reciprocal Rank Fusion (RRF).

```
POST /collections/books/points/query
{
"prefetch": [
{
"query": {
"text": "9780553213515",
"model": "sentence-transformers/all-minilm-l6-v2"
},
"using": "description-dense",
"score_threshold": 0.5
},
{
"query": {
"text": "9780553213515",
"model": "Qdrant/bm25"
},
"using": "isbn-bm25"
}
],
"query": {
"fusion": "rrf"
},
"limit": 10,
"with_payload": true
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(
url="https://xyz-example.qdrant.io:6333",
api_key="<your-api-key>",
cloud_inference=True,
)
client.query_points(
collection_name="books",
prefetch=[
models.Prefetch(
query=models.Document(
text="9780553213515",
model="sentence-transformers/all-minilm-l6-v2"
),
using="description-dense",
score_threshold=0.5,
),
models.Prefetch(
query=models.Document(
text="9780553213515",
model="Qdrant/bm25",
),
using="isbn-bm25",
),
],
query=models.FusionQuery(fusion=models.Fusion.RRF),
limit=10,
with_payload=True,
)
```


```
client.query("books", {
prefetch: [
{
query: { text: "9780553213515", model: "sentence-transformers/all-minilm-l6-v2" },
using: "description-dense",
score_threshold: 0.5,
},
{
query: { text: "9780553213515", model: "Qdrant/bm25" },
using: "isbn-bm25",
},
],
query: { fusion: "rrf" },
limit: 10,
with_payload: true,
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Document, Fusion, PrefetchQueryBuilder, Query, QueryPointsBuilder};
let dense_prefetch = PrefetchQueryBuilder::default()
.query(Query::new_nearest(Document::new(
"9780553213515",
"sentence-transformers/all-minilm-l6-v2",
)))
.using("description-dense")
.score_threshold(0.5)
.build();
let bm25_prefetch = PrefetchQueryBuilder::default()
.query(Query::new_nearest(Document::new(
"9780553213515",
"Qdrant/bm25",
)))
.using("isbn-bm25")
.build();
client
.query(
QueryPointsBuilder::new("books")
.add_prefetch(dense_prefetch)
.add_prefetch(bm25_prefetch)
.query(Query::new_fusion(Fusion::Rrf))
.limit(10)
.with_payload(true)
.build(),
)
.await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.*;
QdrantClient client =
PrefetchQuery densePrefetch =
PrefetchQuery.newBuilder()
.setUsing("description-dense")
.setScoreThreshold(0.5f)
.setQuery(
nearest(
Document.newBuilder()
.setText("9780553213515")
.setModel("sentence-transformers/all-minilm-l6-v2")
.build()))
.build();
PrefetchQuery bm25Prefetch =
PrefetchQuery.newBuilder()
.setUsing("isbn-bm25")
.setQuery(
nearest(
Document.newBuilder().setText("9780553213515").setModel("Qdrant/bm25").build()))
.build();
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("books")
.addPrefetch(densePrefetch)
.addPrefetch(bm25Prefetch)
.setQuery(Query.newBuilder().setFusion(Fusion.RRF).build())
.setLimit(10)
.setWithPayload(enable(true))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.QueryAsync(
collectionName: "books",
prefetch: new List<PrefetchQuery>
{
new()
{
Using = "description-dense",
Query = new Document
{
Text = "9780553213515",
Model = "sentence-transformers/all-minilm-l6-v2",
},
ScoreThreshold = 0.5f,
},
new()
{
Using = "isbn-bm25",
Query = new Document { Text = "9780553213515", Model = "Qdrant/bm25" },
},
},
query: Fusion.Rrf,
payloadSelector: true,
limit: 10
);
```


```
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "books",
Prefetch: []*qdrant.PrefetchQuery{
{
Using: qdrant.PtrOf("description-dense"),
Query: qdrant.NewQueryDocument(&qdrant.Document{
Text: "9780553213515",
Model: "sentence-transformers/all-minilm-l6-v2",
}),
},
{
Using: qdrant.PtrOf("isbn-bm25"),
Query: qdrant.NewQueryDocument(&qdrant.Document{
Text: "9780553213515",
Model: "qdrant/bm25",
}),
},
},
Query: qdrant.NewQueryFusion(qdrant.Fusion_RRF),
WithPayload: qdrant.NewWithPayload(true),
Limit: qdrant.PtrOf(uint64(10)),
})
```


This query searches for an ISBN, for which only the lexical search returns a result. The `score_threshold`

for the semantic query prevents low-scoring results to be returned (0.5 is just an example threshold; you need to tune what a good threshold is for your data and model). So in this case, only the lexical result is returned to the user. If a user had searched for “time travel”, only the semantic search would return results, and those would be returned to the user. If a user would search for a term that matched both the semantic and lexical vectors, the results from both searches would be combined to provide a more comprehensive set of results.

You are not limited to prefetching just two queries. Examples include, but are not limited to:

- Fuse multiple lexical queries across the
`title`

,`author`

, and`isbn`

fields alongside a semantic query to achieve a comprehensive search across all data. - Prefetch using sparse or dense vectors and/or filters, and
[rescore with dense vectors](https://qdrant.tech/documentation/concepts/hybrid-queries/#multi-stage-queries). [Prefetch with dense and sparse vectors, and rerank using late interaction embeddings](https://qdrant.tech/documentation/advanced-tutorials/reranking-hybrid-search/?q=late+interaction).

## Conclusion

Qdrant’s text search capabilities enable you to build powerful search applications that combine the best of semantic and lexical search. By leveraging dense and sparse vectors, along with Qdrant’s flexible querying capabilities, you can create search experiences that meet a wide range of user needs.

---

## Source: https://qdrant.tech/documentation/search/search-relevance/

# Search Relevance

By default, Qdrant ranks search results based on vector similarity scores. However, you may wish to consider additional factors when ranking results. Qdrant offers several tools to help you accomplish this.

## Score Boosting

*Available as of v1.14.0*

When introducing vector search to specific applications, sometimes business logic needs to be considered for ranking the final list of results.

A quick example is [our own documentation search bar](https://github.com/qdrant/page-search).
It has vectors for every part of the documentation site. If one were to perform a search by “just” using the vectors, all kinds of elements would be equally considered good results.
However, when searching for documentation, we can establish a hierarchy of importance:

`title > content > snippets`


One way to solve this is to weight the results based on the kind of element. For example, we can assign a higher weight to titles and content and keep snippets unboosted.

Pseudocode would be something like:

`score = score + (is_title * 0.5) + (is_content * 0.25)`


The Query API can rescore points with custom formulas based on:

- Dynamic payload values
- Conditions
- Scores of prefetches

To express the formula, the syntax uses objects to identify each element. Taking the documentation example, the request would look like this:

```
POST /collections/{collection_name}/points/query
{
"prefetch": {
"query": [0.2, 0.8, ...], // <-- dense vector
"limit": 50
}
"query": {
"formula": {
"sum": [
"$score",
{
"mult": [
0.5,
{
"key": "tag",
"match": { "any": ["h1", "h2", "h3", "h4"] }
}
]
},
{
"mult": [
0.25,
{
"key": "tag",
"match": { "any": ["p", "li"] }
}
]
}
]
}
}
}
```


```
from qdrant_client import QdrantClient, models
tag_boosted = client.query_points(
collection_name="{collection_name}",
prefetch=models.Prefetch(
query=[0.1, 0.45, 0.67], # <-- dense vector
limit=50
),
query=models.FormulaQuery(
formula=models.SumExpression(sum=[
"$score",
models.MultExpression(mult=[0.5, models.FieldCondition(key="tag", match=models.MatchAny(any=["h1", "h2", "h3", "h4"]))]),
models.MultExpression(mult=[0.25, models.FieldCondition(key="tag", match=models.MatchAny(any=["p", "li"]))])
]
))
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
const tag_boosted = await client.query("{collection_name}", {
prefetch: {
query: [0.2, 0.8, 0.1, 0.9],
limit: 50
},
query: {
formula: {
sum: [
"$score",
{
mult: [ 0.5, { key: "tag", match: { any: ["h1", "h2", "h3", "h4"] }} ]
},
{
mult: [ 0.25, { key: "tag", match: { any: ["p", "li"] }} ]
}
]
}
}
});
```


```
use qdrant_client::qdrant::{
Condition, Expression, FormulaBuilder, PrefetchQueryBuilder, QueryPointsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let _tag_boosted = client.query(
QueryPointsBuilder::new("{collection_name}")
.add_prefetch(PrefetchQueryBuilder::default()
.query(vec![0.01, 0.45, 0.67])
.limit(100u64)
)
.query(FormulaBuilder::new(Expression::sum_with([
Expression::score(),
Expression::mult_with([
Expression::constant(0.5),
Expression::condition(Condition::matches("tag", ["h1", "h2", "h3", "h4"])),
]),
Expression::mult_with([
Expression::constant(0.25),
Expression::condition(Condition::matches("tag", ["p", "li"])),
]),
])))
.limit(10)
).await?;
```


```
import static io.qdrant.client.ConditionFactory.matchKeywords;
import static io.qdrant.client.ExpressionFactory.condition;
import static io.qdrant.client.ExpressionFactory.constant;
import static io.qdrant.client.ExpressionFactory.mult;
import static io.qdrant.client.ExpressionFactory.sum;
import static io.qdrant.client.ExpressionFactory.variable;
import static io.qdrant.client.QueryFactory.formula;
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.Formula;
import io.qdrant.client.grpc.Points.MultExpression;
import io.qdrant.client.grpc.Points.PrefetchQuery;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.SumExpression;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.addPrefetch(
PrefetchQuery.newBuilder()
.setQuery(nearest(0.01f, 0.45f, 0.67f))
.setLimit(100)
.build())
.setQuery(
formula(
Formula.newBuilder()
.setExpression(
sum(
SumExpression.newBuilder()
.addSum(variable("$score"))
.addSum(
mult(
MultExpression.newBuilder()
.addMult(constant(0.5f))
.addMult(
condition(
matchKeywords(
"tag",
List.of("h1", "h2", "h3", "h4"))))
.build()))
.addSum(mult(MultExpression.newBuilder()
.addMult(constant(0.25f))
.addMult(
condition(
matchKeywords(
"tag",
List.of("p", "li"))))
.build()))
.build()))
.build()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
prefetch:
[
new PrefetchQuery { Query = new float[] { 0.01f, 0.45f, 0.67f }, Limit = 100 },
],
query: new Formula
{
Expression = new SumExpression
{
Sum =
{
"$score",
new MultExpression
{
Mult = { 0.5f, Match("tag", ["h1", "h2", "h3", "h4"]) },
},
new MultExpression { Mult = { 0.25f, Match("tag", ["p", "li"]) } },
},
},
},
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Prefetch: []*qdrant.PrefetchQuery{
{
Query: qdrant.NewQuery(0.01, 0.45, 0.67),
},
},
Query: qdrant.NewQueryFormula(&qdrant.Formula{
Expression: qdrant.NewExpressionSum(&qdrant.SumExpression{
Sum: []*qdrant.Expression{
qdrant.NewExpressionVariable("$score"),
qdrant.NewExpressionMult(&qdrant.MultExpression{
Mult: []*qdrant.Expression{
qdrant.NewExpressionConstant(0.5),
qdrant.NewExpressionCondition(qdrant.NewMatchKeywords("tag", "h1", "h2", "h3", "h4")),
},
}),
qdrant.NewExpressionMult(&qdrant.MultExpression{
Mult: []*qdrant.Expression{
qdrant.NewExpressionConstant(0.25),
qdrant.NewExpressionCondition(qdrant.NewMatchKeywords("tag", "p", "li")),
},
}),
},
}),
}),
})
```


There are multiple expressions available. Check the [API docs for specific details](https://api.qdrant.tech/v-1-14-x/api-reference/search/query-points#request.body.query.Query%20Interface.Query.Formula%20Query.formula).

**constant**- A floating point number. e.g.`0.5`

.`"$score"`

- Reference to the score of the point in the prefetch. This is the same as`"$score[0]"`

.`"$score[0]"`

,`"$score[1]"`

,`"$score[2]"`

, … - When using multiple prefetches, you can reference specific prefetch with the index within the array of prefetches.**payload key**- Any plain string will refer to a payload key. This uses the jsonpath format used in every other place, e.g.`key`

or`key.subkey`

. It will try to extract a number from the given key.**condition**- A filtering condition. If the condition is met, it becomes`1.0`

, otherwise`0.0`

.**mult**- Multiply an array of expressions.**sum**- Sum an array of expressions.**div**- Divide an expression by another expression.**abs**- Absolute value of an expression.**pow**- Raise an expression to the power of another expression.**sqrt**- Square root of an expression.**log10**- Base 10 logarithm of an expression.**ln**- Natural logarithm of an expression.**exp**- Exponential function of an expression (`e^x`

).**geo distance**- Haversine distance between two geographic points. Values need to be`{ "lat": 0.0, "lon": 0.0 }`

objects.**decay**- Apply a decay function to an expression, which clamps the output between 0 and 1. Available decay functions are**linear**,**exponential**, and**gaussian**.[See more](#decay-functions).**datetime**- Parse a datetime string (see formats[here](https://qdrant.tech/documentation/concepts/payload/#datetime)), and use it as a POSIX timestamp in seconds.**datetime key**- Specify that a payload key contains a datetime string to be parsed into POSIX seconds.

It is possible to define a default for when the variable (either from payload or prefetch score) is not found. This is given in the form of a mapping from variable to value.
If there is no variable and no defined default, a default value of `0.0`

is used.

### Decay Functions

Decay functions enable you to modify the score based on how far a value is from a target using a linear, exponential, or Gaussian decay function. For all decay functions, these are the available parameters:

| Parameter | Default | Description |
|---|---|---|
`x` | N/A | The value to decay |
`target` | 0.0 | The value at which the decay will be at its peak. For distances, it is usually set at 0.0, but can be set to any value. |
`scale` | 1.0 | The value at which the decay function will be equal to `midpoint` . This is in terms of `x` units. For example, if `x` is in meters, `scale` of 5000 means 5km. Must be a non-zero positive number. |
`midpoint` | 0.5 | Output is `midpoint` when `x` equals `target` ± `scale` . Must be in the range (0.0, 1.0), exclusive. |

The [formula for each decay function](https://www.desmos.com/calculator/idv5hknwb1) is as follows:

| Decay Function | Range | Formula | |
|---|---|---|---|
`lin_decay` | `[0, 1]` | $\text{lin_decay}(x) = \max\left(0,\ -\frac{(1-m_{idpoint})}{s_{cale}}\cdot {abs}(x-t_{arget})+1\right)$ | |
`exp_decay` | `(0, 1]` | $\text{exp_decay}(x) = \exp\left(\frac{\ln(m_{idpoint})}{s_{cale}}\cdot {abs}(x-t_{arget})\right)$ | |
`gauss_decay` | `(0, 1]` | $\text{gauss_decay}(x) = \exp\left(\frac{\ln(m_{idpoint})}{s_{cale}^{2}}\cdot (x-t_{arget})^{2}\right)$ |

#### Boost Points Closer to User

An example of decay functions is to combine the score with how close a result is to a user.

Considering each point has an associated geo location, we can calculate the distance between the point and the request’s location.

Assuming we have cosine scores in the prefetch, we can use a helper function to clamp the geographical distance between 0 and 1, by using a decay function. Once clamped, we can sum the score and the distance together. Pseudocode:

`score = score + gauss_decay(distance)`


In this case, we use a **gauss_decay** function.

```
POST /collections/{collection_name}/points/query
{
"prefetch": { "query": [0.2, 0.8, ...], "limit": 50 },
"query": {
"formula": {
"sum": [
"$score",
{
"gauss_decay": {
"x": {
"geo_distance": {
"origin": { "lat": 52.504043, "lon": 13.393236 }
"to": "geo.location"
}
},
"scale": 5000 // 5km
}
}
]
},
"defaults": { "geo.location": {"lat": 48.137154, "lon": 11.576124} }
}
}
```


```
from qdrant_client import QdrantClient, models
geo_boosted = client.query_points(
collection_name="{collection_name}",
prefetch=models.Prefetch(
query=[0.1, 0.45, 0.67], # <-- dense vector
limit=50
),
query=models.FormulaQuery(
formula=models.SumExpression(sum=[
"$score",
models.GaussDecayExpression(
gauss_decay=models.DecayParamsExpression(
x=models.GeoDistance(
geo_distance=models.GeoDistanceParams(
origin=models.GeoPoint(
lat=52.504043,
lon=13.393236
), # Berlin
to="geo.location"
)
),
scale=5000 # 5km
)
)
]),
defaults={"geo.location": models.GeoPoint(lat=48.137154, lon=11.576124)} # Munich
)
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
const distance_boosted = await client.query("{collection_name}", {
prefetch: {
query: [0.1, 0.45, 0.67],
limit: 50
},
query: {
formula: {
sum: [
"$score",
{
gauss_decay: {
x: {
geo_distance: {
origin: { lat: 52.504043, lon: 13.393236 }, // Berlin
to: "geo.location"
}
},
scale: 5000 // 5km
}
}
]
},
defaults: { "geo.location": { lat: 48.137154, lon: 11.576124 } } // Munich
}
});
```


```
use qdrant_client::qdrant::{
GeoPoint, DecayParamsExpressionBuilder, Expression, FormulaBuilder, PrefetchQueryBuilder, QueryPointsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let _geo_boosted = client.query(
QueryPointsBuilder::new("{collection_name}")
.add_prefetch(
PrefetchQueryBuilder::default()
.query(vec![0.01, 0.45, 0.67])
.limit(100u64),
)
.query(
FormulaBuilder::new(Expression::sum_with([
Expression::score(),
Expression::exp_decay(
DecayParamsExpressionBuilder::new(Expression::geo_distance_with(
// Berlin
GeoPoint { lat: 52.504043, lon: 13.393236 },
"geo.location",
))
.scale(5_000.0),
),
]))
// Munich
.add_default("geo.location", GeoPoint { lat: 48.137154, lon: 11.576124 }),
)
.limit(10),
)
.await?;
```


```
import static io.qdrant.client.ExpressionFactory.expDecay;
import static io.qdrant.client.ExpressionFactory.geoDistance;
import static io.qdrant.client.ExpressionFactory.sum;
import static io.qdrant.client.ExpressionFactory.variable;
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.QueryFactory.formula;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.ValueFactory.value;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.GeoPoint;
import io.qdrant.client.grpc.Points.DecayParamsExpression;
import io.qdrant.client.grpc.Points.Formula;
import io.qdrant.client.grpc.Points.GeoDistance;
import io.qdrant.client.grpc.Points.PrefetchQuery;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.SumExpression;
import java.util.Map;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.addPrefetch(
PrefetchQuery.newBuilder()
.setQuery(nearest(0.01f, 0.45f, 0.67f))
.setLimit(100)
.build())
.setQuery(
formula(
Formula.newBuilder()
.setExpression(
sum(
SumExpression.newBuilder()
.addSum(variable("$score"))
.addSum(
expDecay(
DecayParamsExpression.newBuilder()
.setX(
geoDistance(
GeoDistance.newBuilder()
.setOrigin(
GeoPoint.newBuilder()
.setLat(52.504043)
.setLon(13.393236)
.build())
.setTo("geo.location")
.build()))
.setScale(5000)
.build()))
.build()))
.putDefaults(
"geo.location",
value(
Map.of(
"lat", value(48.137154),
"lon", value(11.576124))))
.build()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Expression;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
prefetch:
[
new PrefetchQuery { Query = new float[] { 0.01f, 0.45f, 0.67f }, Limit = 100 },
],
query: new Formula
{
Expression = new SumExpression
{
Sum =
{
"$score",
FromExpDecay(
new()
{
X = new GeoDistance
{
Origin = new GeoPoint { Lat = 52.504043, Lon = 13.393236 },
To = "geo.location",
},
Scale = 5000,
}
),
},
},
Defaults =
{
["geo.location"] = new Dictionary<string, Value>
{
["lat"] = 48.137154,
["lon"] = 11.576124,
},
},
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Prefetch: []*qdrant.PrefetchQuery{
{
Query: qdrant.NewQuery(0.2, 0.8),
},
},
Query: qdrant.NewQueryFormula(&qdrant.Formula{
Expression: qdrant.NewExpressionSum(&qdrant.SumExpression{
Sum: []*qdrant.Expression{
qdrant.NewExpressionVariable("$score"),
qdrant.NewExpressionExpDecay(&qdrant.DecayParamsExpression{
X: qdrant.NewExpressionGeoDistance(&qdrant.GeoDistance{
Origin: &qdrant.GeoPoint{
Lat: 52.504043,
Lon: 13.393236,
},
To: "geo.location",
}),
}),
},
}),
Defaults: qdrant.NewValueMap(map[string]any{
"geo.location": map[string]any{
"lat": 48.137154,
"lon": 11.576124,
},
}),
}),
})
```


#### Time-Based Score Boosting

Or combine the score with the information on how “fresh” the result is. It’s applicable to (news) articles and, in general, many other different types of searches (think of the “newest” filter you use in applications).

To implement time-based score boosting, you’ll need each point to have a datetime field in its payload, e.g., when the item was uploaded or last updated. Then we can calculate the time difference in seconds between this payload value and the current time, our `target`

.

With an exponential decay function, perfect for use cases with time, as freshness is a very quickly lost quality, we can convert this time difference into a value between 0 and 1, then add it to the original score to prioritize fresh results.

`score = score + exp_decay(current_time - point_time)`


That’s how it will look for an application where, after 1 day, results start being only half-relevant (so get a score of 0.5):

```
POST /collections/{collection_name}/points/query
{
"prefetch": {
"query": [0.2, 0.8, ...], // <-- dense vector
"limit": 50
},
"query": {
"formula": {
"sum": [
"$score", // the final score = score + exp_decay(target_time - x_time)
{
"exp_decay": {
"x": {
"datetime_key": "update_time" // payload key
},
"target": {
"datetime": "YYYY-MM-DDT00:00:00Z" // current datetime
},
"scale": 86400, // 1 day in seconds
"midpoint": 0.5 // if item's "update_time" is more than 1 day apart from current datetime, relevance score is less than 0.5
}
}
]
}
}
}
```


```
from qdrant_client import QdrantClient, models
time_boosted = client.query_points(
collection_name="{collection_name}",
prefetch=models.Prefetch(
query=[0.1, 0.45, 0.67], # <-- dense vector
limit=50
),
query=models.FormulaQuery(
formula=models.SumExpression(
sum=[
"$score", # the final score = score + exp_decay(target_time - x_time)
models.ExpDecayExpression(
exp_decay=models.DecayParamsExpression(
x=models.DatetimeKeyExpression(
datetime_key="upload_time" # payload key
),
target=models.DatetimeExpression(
datetime="YYYY-MM-DDT00:00:00Z" # current datetime
),
scale=86400, # 1 day in seconds
midpoint=0.5 # if item's "update_time" is more than 1 day apart from current datetime, relevance score is less than 0.5
)
)
]
)
)
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
const time_boosted = await client.query('collectionName', {
prefetch: {
query: [0.1, 0.45, 0.67], // <-- dense vector
limit: 50
},
query: {
formula: {
sum: [ // the final score = score + exp_decay(target_time - x_time)
"$score",
{
exp_decay: {
x: {
datetime_key: "update_time" // payload key
},
target: {
datetime: "YYYY-MM-DDT00:00:00Z" // current datetime
},
midpoint: 0.5,
scale: 86400 // 1 day in seconds
}
}
]
}
}
});
```


```
use qdrant_client::qdrant::{
DecayParamsExpressionBuilder, Expression, FormulaBuilder, PrefetchQueryBuilder, QueryPointsBuilder,
};
use qdrant_client::Qdrant;
let client = Qdrant::from_url("http://localhost:6334").build()?;
let _geo_boosted = client.query(
QueryPointsBuilder::new("{collection_name}")
.add_prefetch(
PrefetchQueryBuilder::default()
.query(vec![0.1, 0.45, 0.67]) // <-- dense vector
.limit(50u64),
)
.query(
FormulaBuilder::new(Expression::sum_with([ // the final score = score + exp_decay(target_time - x_time)
Expression::score(),
Expression::exp_decay(
DecayParamsExpressionBuilder::new(Expression::datetime_key("update_time")) // payload key
.target(Expression::datetime("YYYY-MM-DDT00:00:00Z"))
.midpoint(0.5)
.scale(86400.0), // 1 day in seconds
),
]))
)
)
.await?;
```


```
import static io.qdrant.client.ExpressionFactory.datetime;
import static io.qdrant.client.ExpressionFactory.datetimeKey;
import static io.qdrant.client.ExpressionFactory.expDecay;
import static io.qdrant.client.ExpressionFactory.sum;
import static io.qdrant.client.ExpressionFactory.variable;
import static io.qdrant.client.QueryFactory.formula;
import static io.qdrant.client.QueryFactory.nearest;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.DecayParamsExpression;
import io.qdrant.client.grpc.Points.Formula;
import io.qdrant.client.grpc.Points.PrefetchQuery;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.ScoredPoint;
import io.qdrant.client.grpc.Points.SumExpression;
import java.util.List;
QdrantClient client =
new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
List<ScoredPoint> time_boosted = client.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.addPrefetch(
PrefetchQuery.newBuilder()
.setQuery(nearest(0.1f, 0.45f, 0.67f)) // <-- dense vector
.setLimit(50)
.build())
.setQuery(
formula(
Formula.newBuilder()
.setExpression(
sum( // the final score = score + exp_decay(target_time - x_time)
SumExpression.newBuilder()
.addSum(variable("$score"))
.addSum(
expDecay(
DecayParamsExpression.newBuilder()
.setX(
datetimeKey("update_time")) // payload key
.setTarget(
datetime("YYYY-MM-DDT00:00:00Z")) // current datetime
.setMidpoint(0.5f)
.setScale(86400) // 1 day in seconds
.build()))
.build()))
.build()))
.build()
).get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
prefetch:
[
new PrefetchQuery {
Query = new float[] { 0.1f, 0.45f, 0.67f }, // <-- dense vector
Limit = 50
},
],
query: new Formula
{
Expression = new SumExpression
{
Sum = // the final score = score + exp_decay(target_time - x_time)
{
"$score",
Expression.FromExpDecay(
new()
{
X = Expression.FromDateTimeKey("update_time"), // payload key
Target = Expression.FromDateTime("YYYY-MM-DDT00:00:00Z"), // current datetime
Midpoint = 0.5f,
Scale = 86400 // 1 day in seconds
}
)
}
}
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Prefetch: []*qdrant.PrefetchQuery{
{
Query: qdrant.NewQuery(0.1, 0.45, 0.67), // <-- dense vector
Limit: qdrant.PtrOf(uint64(50)),
},
},
Query: qdrant.NewQueryFormula(&qdrant.Formula{
Expression: qdrant.NewExpressionSum(&qdrant.SumExpression{
Sum: []*qdrant.Expression{ // the final score = score + exp_decay(target_time - x_time)
qdrant.NewExpressionVariable("$score"),
qdrant.NewExpressionExpDecay(&qdrant.DecayParamsExpression{
X: qdrant.NewExpressionDatetimeKey("update_time"), // payload key
Target: qdrant.NewExpressionDatetime("YYYY-MM-DDT00:00:00Z"), // current datetime
Scale: qdrant.PtrOf(float32(86400)), // 1 day in seconds
Midpoint: qdrant.PtrOf(float32(0.5)),
}),
},
}),
}),
})
```


## Maximal Marginal Relevance (MMR)

*Available as of v1.15.0*

[Maximal Marginal Relevance (MMR)](https://www.cs.cmu.edu/~jgc/publication/The_Use_MMR_Diversity_Based_LTMIR_1998.pdf) is an algorithm to improve the diversity of the results. It excels when the dataset has many redundant or very similar points for a query.

MMR selects candidates iteratively, starting with the most relevant point (higher similarity to the query). For each next point, it selects the one that hasn’t been chosen yet which has the best combination of relevance and higher separation to the already selected points.

$$ MMR = \arg \max_{D_i \in R\setminus S}[\lambda sim(D_i, Q) - (1 - \lambda)\max_{D_j \in S}sim(D_i, D_j)] $$

This is implemented in Qdrant as a parameter of a nearest neighbors query. You define the vector to get the nearest candidates, and a `diversity`

parameter which controls the balance between relevance (0.0) and diversity (1.0).

```
POST /collections/{collection_name}/points/query
{
"query": {
"nearest": [0.01, 0.45, 0.67, ...], // search vector
"mmr": {
"diversity": 0.5, // 0.0 - relevance; 1.0 - diversity
"candidates_limit": 100 // num of candidates to preselect
}
},
"limit": 10
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient(url="http://localhost:6333")
client.query_points(
collection_name="{collection_name}",
query=models.NearestQuery(
nearest=[0.01, 0.45, 0.67], # search vector
mmr=models.Mmr(
diversity=0.5, # 0.0 - relevance; 1.0 - diversity
candidates_limit=100, # num of candidates to preselect
)
),
limit=10,
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: {
nearest: [0.01, 0.45, 0.67], // search vector
mmr: {
diversity: 0.5, // 0.0 - relevance; 1.0 - diversity
candidates_limit: 100 // num of candidates to preselect
}
},
limit: 10,
});
```


```
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{MmrBuilder, Query, QueryPointsBuilder};
let client = Qdrant::from_url("http://localhost:6334").build()?;
client.query(
QueryPointsBuilder::new("{collection_name}")
.query(Query::new_nearest_with_mmr(
vec![0.01, 0.45, 0.67], // search vector
MmrBuilder::new()
.diversity(0.5) // 0.0 - relevance; 1.0 - diversity
.candidates_limit(100) // num of candidates to preselect
))
.limit(10)
).await?;
```


```
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.VectorInputFactory.vectorInput;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.Mmr;
import io.qdrant.client.grpc.Points.QueryPoints;
QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(
nearest(
vectorInput(0.01f, 0.45f, 0.67f), // <-- search vector
Mmr.newBuilder()
.setDiversity(0.5f) // 0.0 - relevance; 1.0 - diversity
.setCandidatesLimit(100) // num of candidates to preselect
.build()))
.setLimit(10)
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
var client = new QdrantClient("localhost", 6334);
await client.QueryAsync(
collectionName: "{collection_name}",
query: (
new float[] { 0.01f, 0.45f, 0.67f },
new Mmr
{
Diversity = 0.5f, // 0.0 - relevance; 1.0 - diversity
CandidatesLimit = 100 // Number of candidates to preselect
}
),
limit: 10
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client, err := qdrant.NewClient(&qdrant.Config{
Host: "localhost",
Port: 6334,
})
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryMMR(
qdrant.NewVectorInput(0.01, 0.45, 0.67),
&qdrant.Mmr{
Diversity: qdrant.PtrOf(float32(0.5)), // 0.0 - relevance; 1.0 - diversity
CandidatesLimit: qdrant.PtrOf(uint32(100)), // num of candidates to preselect
}),
Limit: qdrant.PtrOf(uint64(10)),
})
```


**Caveat:** Since MMR ranks one point at a time, the scores produced by MMR in Qdrant refer to the similarity to the query vector. This means that the response will not be ordered by score, but rather by the order of selection of MMR.

## Relevance Feedback

*Available as of 1.17*

Relevance feedback distills signals from current search results into the next retrieval iteration to surface more relevant documents.

Qdrant provides a subtype of relevance feedback-based retrieval, where feedback is given by any model (relevance oracle) in a granular fashion: it rescores top retrieved results by their relative relevance to the query. A detailed overview of relevance feedback methods can be found in [Relevance Feedback in Information Retrieval](https://qdrant.tech/articles/search-feedback-loop).

To use relevance feedback-based retrieval, two components are required:

- A collection of vectors to search through.
- An oracle to determine the relevance of search results.

The idea behind using relevance feedback-based retrieval is the following:

- Run a basic nearest neighbors search. Let’s call its results
**Retriever Similarity**and the algorithm behind this search –**retriever**. - Use any
**feedback model**to assign a relevance score to the top X search results (X is not expected to be large, 3-5 is a good option). Let’s call these scores**Feedback Score**. - Through analyzing the Feedback Score for the top results, determine if the feedback model agrees with the retriever, or if retrieval can be improved.
- If it can be improved, use feedback to modify retrieval (vector space traversal) to account for the discrepancies between the feedback model and the retriever.

For example, in this set of retrieved results:

| Point ID | Retriever Similarity | Feedback Score |
|---|---|---|
| 111 | 0.89 | 0.68 |
| 222 | 0.81 | 0.72 |
| 333 | 0.77 | 0.61 |

The feedback model considers the second result with ID 222 to be the most relevant, which is a discrepancy with retriever’s ranking. Hence, this feedback can potentially help make the next iteration of retrieval better.

To leverage the feedback in search across the entire collection, Qdrant provides a query interface that requires:

- The original query (
`target`

), which can be a point ID, an inference object, or a raw vector. - A short list of initial retrieval results and their relevance score (
`feedback`

). Each feedback item consists of:`example`

, which can be point ID, an inference object, or a raw vector used by the retriever.`score`

, the feedback score.

- A definition of the formula that modifies retrieval based on the feedback (
`strategy`

).

```
POST /collections/{collection_name}/points/query
{
"query": {
"relevance_feedback: {
"target": [0.1, 0.9, 0.23, ...],
"feedback": [
{ "example": 111, "score": 0.68 },
{ "example": 222, "score": 0.72 },
{ "example": 333, "score": 0.61 }
],
"strategy": {
"naive": {
"a": 0.12,
"b": 0.43,
"c": 0.03
}
}
]
}
}
```


```
from qdrant_client import QdrantClient, models
client = QdrantClient()
client.query_points(
"{collection_name}",
query=models.RelevanceFeedbackQuery(
relevance_feedback=models.RelevanceFeedbackInput(
target=[0.1, 0.9, 0.23],
feedback=[
models.FeedbackItem(example=111, score=0.68),
models.FeedbackItem(example=222, score=0.72),
models.FeedbackItem(example=333, score=0.61),
],
strategy=models.NaiveFeedbackStrategy(
naive=models.NaiveFeedbackStrategyParams(
a=0.12,
b=0.43,
c=0.03
)
)
)
)
)
```


```
import { QdrantClient } from "@qdrant/js-client-rest";
const client = new QdrantClient({ host: "localhost", port: 6333 });
client.query("{collection_name}", {
query: {
relevance_feedback: {
target: [0.1, 0.9, 0.23],
feedback: [
{ example: 111, score: 0.68 },
{ example: 222, score: 0.72 },
{ example: 333, score: 0.61 },
],
strategy: {
naive: {
a: 0.12,
b: 0.43,
c: 0.03,
},
},
},
},
});
```


```
use qdrant_client::qdrant::{
FeedbackItemBuilder, FeedbackStrategyBuilder, PointId, Query, QueryPointsBuilder,
RelevanceFeedbackInputBuilder, VectorInput,
};
use qdrant_client::Qdrant;
let _points = client.query(
QueryPointsBuilder::new("{collection_name}")
.query(Query::new_relevance_feedback(
RelevanceFeedbackInputBuilder::new(vec![0.01, 0.45, 0.67])
.add_feedback(FeedbackItemBuilder::new(VectorInput::new_id(PointId::from(111)), 0.68))
.add_feedback(FeedbackItemBuilder::new(VectorInput::new_id(PointId::from(222)), 0.72))
.add_feedback(FeedbackItemBuilder::new(VectorInput::new_id(PointId::from(333)), 0.61))
.strategy(FeedbackStrategyBuilder::naive(0.12, 0.43, 0.16))
))
.limit(10u64)
).await?;
```


```
import static io.qdrant.client.QueryFactory.relevanceFeedback;
import static io.qdrant.client.VectorInputFactory.vectorInput;
import io.qdrant.client.grpc.Points.FeedbackItem;
import io.qdrant.client.grpc.Points.FeedbackStrategy;
import io.qdrant.client.grpc.Points.NaiveFeedbackStrategy;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.RelevanceFeedbackInput;
import java.util.List;
client
.queryAsync(
QueryPoints.newBuilder()
.setCollectionName("{collection_name}")
.setQuery(
relevanceFeedback(
RelevanceFeedbackInput.newBuilder()
.setTarget(vectorInput(0.01f, 0.45f, 0.67f))
.addFeedback(
FeedbackItem.newBuilder()
.setExample(vectorInput(111))
.setScore(0.68f)
.build())
.addFeedback(
FeedbackItem.newBuilder()
.setExample(vectorInput(222))
.setScore(0.72f)
.build())
.addFeedback(
FeedbackItem.newBuilder()
.setExample(vectorInput(333))
.setScore(0.61f)
.build())
.setStrategy(
FeedbackStrategy.newBuilder()
.setNaive(
NaiveFeedbackStrategy.newBuilder()
.setA(0.12f)
.setB(0.43f)
.setC(0.16f)
.build())
.build())
.build()))
.build())
.get();
```


```
using Qdrant.Client;
using Qdrant.Client.Grpc;
await client.QueryAsync(
collectionName: "{collection_name}",
query: new RelevanceFeedbackInput
{
Target = new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
Feedback =
{
new FeedbackItem { Example = 111, Score = 0.68f },
new FeedbackItem { Example = 222, Score = 0.72f },
new FeedbackItem { Example = 33, Score = 0.61f },
},
Strategy =
{
Naive = new()
{
A = 0.12f,
B = 0.43f,
C = 0.16f,
},
},
}
);
```


```
import (
"context"
"github.com/qdrant/go-client/qdrant"
)
client.Query(context.Background(), &qdrant.QueryPoints{
CollectionName: "{collection_name}",
Query: qdrant.NewQueryRelevanceFeedback(
&qdrant.RelevanceFeedbackInput{
Target: qdrant.NewVectorInput(0.01, 0.45, 0.67),
Feedback: []*qdrant.FeedbackItem{
{
Example: qdrant.NewVectorInputID(qdrant.NewIDNum(111)),
Score: 0.68,
},
{
Example: qdrant.NewVectorInputID(qdrant.NewIDNum(222)),
Score: 0.72,
},
{
Example: qdrant.NewVectorInputID(qdrant.NewIDNum(333)),
Score: 0.61,
},
},
Strategy: qdrant.NewFeedbackStrategyNaive(&qdrant.NaiveFeedbackStrategy{
A: 0.12, B: 0.43, C: 0.16,
}),
},
),
})
```


Internally, Qdrant combines the feedback list into pairs, based on the relevance scores, and then uses these pairs in a formula that modifies vector space traversal during retrieval (changes the strategy of retrieval). This relevance feedback-based retrieval considers not only the similarity of candidates to the query but also to each feedback pair. For a more detailed description of how it works, refer to the article [Relevance Feedback in Qdrant](https://qdrant.tech/articles/relevance-feedback).

The `a`

, `b`

, and `c`

parameters of the [ naive strategy](#naive-strategy) need to be customized for each triplet of retriever, feedback model, and collection. To get these 3 weights adapted to your setup, use

[our open source Python package](https://pypi.org/project/qdrant-relevance-feedback/).

For a hands-on tutorial on determining the parameters, using them with the Relevance Feedback Query, and evaluating the results, check out [Relevance Feedback in Qdrant](https://qdrant.tech/documentation/tutorials-search-engineering/using-relevance-feedback/).

### Naive Strategy

For now, `naive`

is the only available strategy.

## Naive Strategy

$$ score = a * sim(query, candidate) + \sum_{pair \in pairs}{(confidence_{pair})^b * c * delta_{pair}} \\ $$ \begin{align} \text{where} \\ confidence_{pair} &= relevance_{positive} - relevance_{negative} \\ delta_{pair} &= sim(positive, candidate) - sim(negative, candidate) \\ \end{align}

---

## Source: https://qdrant.tech/documentation/search/low-latency-search/

# Tips for Low-Latency Search with Qdrant

## Scale Horizontally with Replicas

Qdrant can be deployed in a [distributed configuration](https://qdrant.tech/documentation/guides/distributed_deployment). In distributed mode, multiple instances of Qdrant, called peers, operate as a single entity, called a cluster. Data is stored in [collections](https://qdrant.tech/documentation/concepts/collections/), which are divided into [shards](https://qdrant.tech/documentation/guides/distributed_deployment/#sharding) that are distributed across the peers. Each shard can have multiple [replicas](https://qdrant.tech/documentation/guides/distributed_deployment/#replication) for redundancy and load balancing. Because every replica of the same shard contains the same data, read requests can be distributed across replicas, reducing latency and increasing throughput.

For example, a collection with three shards and a replication factor of two would have six total replicas (two replicas for each of the three shards). On a cluster with three peers, these replicas can be evenly distributed across the peers, with each peer hosting two replicas.

When querying a collection, Qdrant reads from one replica of each given shard. Each replica can handle read requests independently, so increasing the number of peers and increasing the replication factor enables you to distribute the read load across more peers, reducing latency and increasing throughput.

However, keep in mind that replicas are not free. You need more hardware to run more peers. Because writes need to be replicated across all replicas, increasing the replication factor can increase write latency. Therefore, it’s important to find the right balance between read performance and resource usage when configuring the replication factor.

## Use Delayed Fan-Outs

*Available as of v1.17.0*

By default, a search operation queries a single replica of each shard in a collection. If a replica responds slowly due to load or network issues, overall search latency can increase. This phenomenon, where a single slow replica increases the 95th or 99th percentile latency of the entire system, is known as “tail latency.” High tail latency can noticeably degrade the user experience.

To reduce tail latency for read operations, Qdrant supports delayed fan-outs. With delayed fan-outs, if the initial request to a replica exceeds a specified latency threshold, an additional read request is sent to another replica. Qdrant will then use the first available response.

You can enable delayed fan-outs per collection by [setting](https://qdrant.tech/documentation/concepts/collections/#update-collection-parameters) the `read_fan_out_delay_ms`

parameter to the number of milliseconds to wait before attempting to read from another replica. To disable delayed fan-outs after enabling, set this parameter to `0`

(default).

An alternative approach to fanning out reads is to always read from multiple replicas, regardless of latency. To enable this, set the `read_fan_out_factor`

parameter to the number of additional replicas to read from. Be aware that this increases the load on the cluster and is generally not recommended, as `read_fan_out_delay_ms`

can achieve similar tail latency improvements with a much lower additional load on the system.

## Query Indexed Data Only

*Available as of v1.17.0*

Shards store their data in [segments](https://qdrant.tech/documentation/concepts/storage/). Write operations go through several stages before the changes are fully indexed and searchable:

- First, each incoming write request is written to the shard’s write-ahead log (WAL). At this stage, the data is not yet searchable, but the write request is persisted and will eventually be applied.
- An update queue tracks entries from the WAL that still need to be applied. The update queue can track up to one million pending updates per shard. When the queue is full, clients experience back pressure: new write requests stall until the queue has capacity.
- Next, updates are taken from the queue and applied to one or more (unoptimized) segments. At this stage, the data is searchable, but not yet indexed, so searching over this data may be slower.
- Finally, the indexing optimizer creates a
[vector index](https://qdrant.tech/documentation/concepts/indexing/#vector-index)(HNSW graph) for unoptimized segments. Once the indexing process is complete, the data is fully indexed, and search performance is optimal. Indexing is a relatively slow operation, so there can be a delay between when data is written and when it is fully indexed, especially under heavy write load.

Search latency can vary depending on where the data is in this process. Querying large amounts of unindexed data can lead to increased latency. This can occur under heavy write load, for example, during nightly batch updates or when processing a large backlog of updates after a period of downtime.

If your application requires a consistently low search latency, set the [search parameter](https://qdrant.tech/documentation/concepts/search/#search-api) `indexed_only`

to `true`

. With this setting enabled, search operations will only consider indexed data, ensuring more consistent and lower response times. The tradeoff is that the most recent data might not be included in search results until it has been indexed.

Enabling `indexed_only`

can cause recently updated data to temporarily disappear from search results until it is indexed again. To mitigate this, set the `prevent_unoptimized`

optimizer setting to `true`

when [creating or updating a collection](https://qdrant.tech/documentation/concepts/collections/#update-collection-parameters), or globally in the [configuration file](https://qdrant.tech/documentation/concepts/optimizer/). It prevents creating segments with a large amount of unindexed data for searches. Instead, once a segment reaches the so called `indexing_threshold`

, all additional points will be added in ‘deferred state’. Deferred points are not yet visible in reads but are still handled in writes. Deferred points will be promoted to visible points once the segment is optimized.

In practice this behavior is good for three things. It prevents high search latencies because the search space on unoptimized data remains small. It prevents throttling update processing on large update queues. And it prevents creating a lot of small segments which would be expensive to optimize. A trade-off is eventual consistency, meaning updates might not be immediately visible. It can be mitigated by opting out on a per-update basis by setting `wait=true`

. Or you might completely disable the feature by setting `indexed_only=false`

and `prevent_unoptimized=false`

.

---

## Source: https://qdrant.tech/documentation/operations/

# Operations

Everything you need to deploy, configure, and run Qdrant in production. These pages cover installation, capacity planning, distributed setups, security, monitoring, performance optimization, and troubleshooting.

## Capacity Planning

[Capacity Planning](https://qdrant.tech/documentation/operations/capacity-planning/) helps you estimate memory and storage requirements based on your vector dimensions, quantization settings, and dataset size.

## Installation

[Installation](https://qdrant.tech/documentation/operations/installation/) covers how to run Qdrant using Docker, from packages, or from source, including basic configuration options.

## Upgrading

[Upgrading](https://qdrant.tech/documentation/operations/upgrades/) explains how to safely upgrade your Qdrant cluster to a new version with zero downtime, including version compatibility and client SDK updates.

## Snapshots

[Snapshots](https://qdrant.tech/documentation/operations/snapshots/) describe how to back up and restore collections at a point in time, for individual nodes or the full cluster.

## Usage Statistics

[Usage Statistics](https://qdrant.tech/documentation/operations/usage-statistics/) explains the anonymized telemetry Qdrant collects and how to opt out.

## Monitoring & Telemetry

[Monitoring](https://qdrant.tech/documentation/operations/monitoring/) covers Qdrant’s metrics endpoint, Prometheus integration, and health-check APIs for observability.

## Security

[Security](https://qdrant.tech/documentation/operations/security/) explains how to enable API key authentication and TLS to secure your Qdrant instance.

## Troubleshooting

[Troubleshooting](https://qdrant.tech/documentation/operations/common-errors/) lists common errors and their solutions to help diagnose issues quickly.

## Configuration

[Configuration](https://qdrant.tech/documentation/operations/configuration/) documents all available Qdrant configuration file settings and environment variable overrides.

## Administration

[Administration](https://qdrant.tech/documentation/operations/administration/) covers runtime administration tools, including recovery mode and collection locking.

## Distributed Deployment

[Distributed Deployment](https://qdrant.tech/documentation/operations/distributed_deployment/) explains how to run Qdrant as a multi-node cluster, including sharding, replication, and consensus.

## Running with GPU

[Running with GPU](https://qdrant.tech/documentation/operations/running-with-GPU/) describes how to enable GPU-accelerated indexing using dedicated Qdrant Docker images for NVIDIA and AMD GPUs.

## Optimize Performance

[Optimize Performance](https://qdrant.tech/documentation/operations/optimize/) walks through three main strategies for tuning Qdrant for high speed, low memory, or high precision workloads.

## Optimizer

[Optimizer](https://qdrant.tech/documentation/operations/optimizer/) describes the background optimizer process that rebuilds segments to improve search performance over time.

---

## Source: https://qdrant.tech/documentation/operations/capacity-planning/

# Capacity Planning

When setting up your cluster, you’ll need to figure out the right balance of **RAM** and **disk storage**. The best setup depends on a few things:

- How many vectors you have and their dimensions.
- The amount of payload data you’re using and their indexes.
- What data you want to store in memory versus on disk.
- Your cluster’s replication settings.
- Whether you’re using quantization and how you’ve set it up.

## Calculating RAM size

You should store frequently accessed data in RAM for faster retrieval. If you want to keep all vectors in memory for optimal performance, you can use this rough formula for estimation:

```
memory_size = number_of_vectors * vector_dimension * 4 bytes * 1.5
```


At the end, we multiply everything by 1.5. This extra 50% accounts for metadata (such as indexes and point versions) and temporary segments created during optimization.

Let’s say you want to store 1 million vectors with 1024 dimensions:

```
memory_size = 1,000,000 * 1024 * 4 bytes * 1.5
```


The memory_size is approximately 6,144,000,000 bytes, or about 5.72 GB.

Depending on the use case, large datasets can benefit from reduced memory requirements via [quantization](https://qdrant.tech/documentation/guides/quantization/).

## Calculating payload size

This is always different. The size of the payload depends on the [structure and content of your data](https://qdrant.tech/documentation/concepts/payload/#payload-types). For instance:

**Text fields**consume space based on length and encoding (e.g. a large chunk of text vs a few words).**Floats**have fixed sizes of 8 bytes for`int64`

or`float64`

.**Boolean fields**typically consume 1 byte.

Calculating total payload size is similar to vectors. We have to multiply it by 1.5 for back-end indexing processes.

```
total_payload_size = number_of_points * payload_size * 1.5
```


Let’s say you want to store 1 million points with JSON payloads of 5KB:

```
total_payload_size = 1,000,000 * 5KB * 1.5
```


The total_payload_size is approximately 5,000,000 bytes, or about 4.77 GB.

## Choosing disk over RAM

For optimal performance, you should store only frequently accessed data in RAM. The rest should be offloaded to the disk. For example, extra payload fields that you don’t use for filtering can be stored on disk.

Only [indexed fields](https://qdrant.tech/documentation/concepts/indexing/#payload-index) should be stored in RAM. You can read more about payload storage in the [Storage](https://qdrant.tech/documentation/concepts/storage/#payload-storage) section.

### Storage-focused configuration

If your priority is to handle large volumes of vectors with average search latency, it’s recommended to configure [memory-mapped (mmap) storage](https://qdrant.tech/documentation/concepts/storage/#configuring-memmap-storage). In this setup, vectors are stored on disk in memory-mapped files, while only the most frequently accessed vectors are cached in RAM.

The amount of available RAM greatly impacts search performance. As a general rule, if you store half as many vectors in RAM, search latency will roughly double.

Disk speed is also crucial. [Contact us](https://qdrant.tech/documentation/support/) if you have specific requirements for high-volume searches in our Cloud.

### Subgroup-oriented configuration

If your use case involves splitting vectors into multiple collections or subgroups based on payload values (e.g., serving searches for multiple users, each with their own subset of vectors), memory-mapped storage is recommended.

In this scenario, only the active subset of vectors will be cached in RAM, allowing for fast searches for the most recent and active users. You can estimate the required memory size as:

```
memory_size = number_of_active_vectors * vector_dimension * 4 bytes * 1.5
```


Please refer to our [multitenancy](https://qdrant.tech/documentation/guides/multiple-partitions/) documentation for more details on partitioning data in a Qdrant.

## Scaling disk space in Qdrant Cloud

Clusters supporting vector search require substantial disk space compared to other search systems. If you’re running low on disk space, you can use the UI at [cloud.qdrant.io](https://cloud.qdrant.io/) to **Scale Up** your cluster.

When running low on disk space, consider the following benefits of scaling up:

**Larger Datasets**: Supports larger datasets, which can improve the relevance and quality of search results.**Improved Indexing**: Enables the use of advanced indexing strategies like HNSW.**Caching**: Enhances speed by having more RAM, allowing more frequently accessed data to be cached.**Backups and Redundancy**: Facilitates more frequent backups, which is a key advantage for data safety.

Always remember to add 50% of the vector size. This would account for things like indexes and auxiliary data used during operations such as vector insertion, deletion, and search. Thus, the estimated memory size including metadata is:

```
total_vector_size = number_of_dimensions * 4 bytes * 1.5
```


**Disclaimer**

The above calculations are estimates at best. If you’re looking for more accurate numbers, you should always test your data set in practice.

---

## Source: https://qdrant.tech/documentation/operations/installation/

# Installation requirements

The following sections describe the requirements for deploying Qdrant.

## CPU and memory

The preferred size of your CPU and RAM depends on:

- Number of vectors
- Vector dimensions
[Payloads](https://qdrant.tech/documentation/concepts/payload/)and their indexes- Storage
- Replication
- How you configure quantization

Our [Cloud Pricing Calculator](https://cloud.qdrant.io/calculator) can help you estimate required resources without payload or index data.

### Supported CPU architectures:

**64-bit system:**

- x86_64/amd64
- AArch64/arm64

**32-bit system:**

- Not supported

### Storage

For persistent storage, Qdrant requires block-level access to storage devices with a [POSIX-compatible file system](https://www.quobyte.com/storage-explained/posix-filesystem/). Network systems such as [iSCSI](https://en.wikipedia.org/wiki/ISCSI) that provide block-level access are also acceptable.
Qdrant won’t work with [Network file systems](https://en.wikipedia.org/wiki/File_system#Network_file_systems) such as NFS, or [Object storage](https://en.wikipedia.org/wiki/Object_storage) systems such as S3.

If you offload vectors to a local disk, we recommend you use a solid-state (SSD or NVMe) drive.

### Networking

Each Qdrant instance requires three open ports:

`6333`

- For the HTTP API, for the[Monitoring](https://qdrant.tech/documentation/guides/monitoring/)health and metrics endpoints`6334`

- For the[gRPC](https://qdrant.tech/documentation/interfaces/#grpc-interface)API`6335`

- For[Distributed deployment](https://qdrant.tech/documentation/guides/distributed_deployment/)

All Qdrant instances in a cluster must be able to:

- Communicate with each other over these ports
- Allow incoming connections to ports
`6333`

and`6334`

from clients that use Qdrant.

### Security

The default configuration of Qdrant might not be secure enough for every situation. Please see [our security documentation](https://qdrant.tech/documentation/guides/security/) for more information.

## Installation options

Qdrant can be installed in different ways depending on your needs:

For production, you can use our Qdrant Cloud to run Qdrant either fully managed in our infrastructure or with Hybrid Cloud in yours.

If you want to run Qdrant in your own infrastructure, without any cloud connection, we recommend to install Qdrant in a Kubernetes cluster with our Qdrant Private Cloud Enterprise Operator.

For testing or development setups, you can run the Qdrant container or as a binary executable. We also provide a Helm chart for an easy installation in Kubernetes.

## Production

### Qdrant Cloud

You can set up production with the [Qdrant Cloud](https://qdrant.to/cloud), which provides fully managed Qdrant databases.
It provides horizontal and vertical scaling, one click installation and upgrades, monitoring, logging, as well as backup and disaster recovery. For more information, see the [Qdrant Cloud documentation](https://qdrant.tech/documentation/cloud/).

### Qdrant Kubernetes Operator

We provide a Qdrant Enterprise Operator for Kubernetes installations as part of our [Qdrant Private Cloud](https://qdrant.tech/documentation/private-cloud/) offering. For more information, [use this form](https://qdrant.to/contact-us) to contact us.

### Kubernetes

You can use a ready-made [Helm Chart](https://helm.sh/docs/) to run Qdrant in your Kubernetes cluster. While it is possible to deploy Qdrant in a distributed setup with the Helm chart, it does not come with the same level of features for zero-downtime upgrades, up and down-scaling, monitoring, logging, and backup and disaster recovery as the Qdrant Cloud offering or the Qdrant Private Cloud Enterprise Operator. Instead you must manage and set this up [yourself](https://qdrant.tech/documentation/guides/distributed_deployment/). Support for the Helm chart is limited to community support.

The following table gives you an overview about the feature differences between the Qdrant Cloud and the Helm chart:

| Feature | Qdrant Helm Chart | Qdrant Cloud |
|---|---|---|
| Open-source | ✅ | |
| Community support only | ✅ | |
| Quick to get started | ✅ | ✅ |
| Vertical and horizontal scaling | ✅ | ✅ |
| API keys with granular access control | ✅ | ✅ |
| Qdrant version upgrades | ✅ | ✅ |
| Support for transit and storage encryption | ✅ | ✅ |
| Zero-downtime upgrades with optimized restart strategy | ✅ | |
| Production ready out-of the box | ✅ | |
| Dataloss prevention on downscaling | ✅ | |
| Full cluster backup and disaster recovery | ✅ | |
| Automatic shard rebalancing | ✅ | |
| Re-sharding support | ✅ | |
| Automatic persistent volume scaling | ✅ | |
| Advanced telemetry | ✅ | |
| One-click API key revoking | ✅ | |
| Recreating nodes with new volumes in existing cluster | ✅ | |
| Enterprise support | ✅ |

To install the helm chart:

```
helm repo add qdrant https://qdrant.to/helm
helm install qdrant qdrant/qdrant
```


For more information, see the [qdrant-helm](https://github.com/qdrant/qdrant-helm/tree/main/charts/qdrant) README.

### Docker and Docker Compose

Usually, we recommend to run Qdrant in Kubernetes, or use the Qdrant Cloud for production setups. This makes setting up highly available and scalable Qdrant clusters with backups and disaster recovery a lot easier.

However, you can also use Docker and Docker Compose to run Qdrant in production, by following the setup instructions in the [Docker](#docker) and [Docker Compose](#docker-compose) Development sections.
In addition, you have to make sure:

- To use a performant
[persistent storage](#storage)for your data - To configure the
[security settings](https://qdrant.tech/documentation/guides/security/)for your deployment - To set up and configure Qdrant on multiple nodes for a highly available
[distributed deployment](https://qdrant.tech/documentation/guides/distributed_deployment/) - To set up a load balancer for your Qdrant cluster
- To create a
[backup and disaster recovery strategy](https://qdrant.tech/documentation/concepts/snapshots/)for your data - To integrate Qdrant with your
[monitoring](https://qdrant.tech/documentation/guides/monitoring/)and logging solutions

## Development

For development and testing, we recommend that you set up Qdrant in Docker. We also have different client libraries.

### Docker

The easiest way to start using Qdrant for testing or development is to run the Qdrant container image.
The latest versions are always available on [DockerHub](https://hub.docker.com/r/qdrant/qdrant/tags?page=1&ordering=last_updated).

Make sure that [Docker](https://docs.docker.com/engine/install/), [Podman](https://podman.io/docs/installation) or the container runtime of your choice is installed and running. The following instructions use Docker.

Pull the image:

```
docker pull qdrant/qdrant
```


In the following command, revise `$(pwd)/path/to/data`

for your Docker configuration. Then use the updated command to run the container:

```
docker run -p 6333:6333 \
-v $(pwd)/path/to/data:/qdrant/storage \
qdrant/qdrant
```


With this command, you start a Qdrant instance with the default configuration.
It stores all data in the `./path/to/data`

directory.

By default, Qdrant uses port 6333, so at [localhost:6333](http://localhost:6333) you should see the welcome message.

To change the Qdrant configuration, you can overwrite the production configuration:

```
docker run -p 6333:6333 \
-v $(pwd)/path/to/data:/qdrant/storage \
-v $(pwd)/path/to/custom_config.yaml:/qdrant/config/production.yaml \
qdrant/qdrant
```


Alternatively, you can use your own `custom_config.yaml`

configuration file:

```
docker run -p 6333:6333 \
-v $(pwd)/path/to/data:/qdrant/storage \
-v $(pwd)/path/to/custom_config.yaml:/qdrant/config/custom_config.yaml \
qdrant/qdrant \
./qdrant --config-path config/custom_config.yaml
```


For more information, see the [Configuration](https://qdrant.tech/documentation/guides/configuration/) documentation.

### Docker Compose

You can also use [Docker Compose](https://docs.docker.com/compose/) to run Qdrant.

Here is an example customized compose file for a single node Qdrant cluster:

```
services:
qdrant:
image: qdrant/qdrant:latest
restart: always
container_name: qdrant
ports:
- 6333:6333
- 6334:6334
expose:
- 6333
- 6334
- 6335
configs:
- source: qdrant_config
target: /qdrant/config/production.yaml
volumes:
- ./qdrant_data:/qdrant/storage
configs:
qdrant_config:
content: |
log_level: INFO
```


### From source

Qdrant is written in Rust and can be compiled into a binary executable. This installation method can be helpful if you want to compile Qdrant for a specific processor architecture or if you do not want to use Docker.

Before compiling, make sure that the necessary libraries and the [rust toolchain](https://www.rust-lang.org/tools/install) are installed.
The current list of required libraries can be found in the [Dockerfile](https://github.com/qdrant/qdrant/blob/master/Dockerfile).

Build Qdrant with Cargo:

```
cargo build --release --bin qdrant
```


After a successful build, you can find the binary in the following subdirectory `./target/release/qdrant`

.

## Client libraries

In addition to the service, Qdrant provides a variety of client libraries for different programming languages. For a full list, see our [Client libraries](https://qdrant.tech/documentation/interfaces/#client-libraries) documentation.