# Cohere Documentation
> Scraped on: 2026-03-30 | Root Source: [https://docs.cohere.com/docs/prompt-engineering](https://docs.cohere.com/docs/prompt-engineering)



---

## Source: https://docs.cohere.com/docs/prompt-engineering

# A Guide to Crafting Effective Prompts

The most effective prompts are those that are clear, concise, specific, and include examples of exactly what a response should look like. In this chapter, we will cover several strategies and tactics to get the most effective responses from the Command family of models. We will cover formatting and delimiters, context, using examples, structured output, do vs. do not do, length control, begin the completion yourself, and task splitting. We will highlight best practices as a user crafting prompts in the Cohere playground, as well as through the API.

## Formatting and Delimiters

A clear, concise, and specific prompt can be more effective for an LLM with careful formatting. Instructions should be placed at the beginning of the prompt, and different types of information, such as instructions, context, and resources, should be delimited with an explanatory header. Headers can be made more clear by prepending them with `##`

.

For example:

Then use the Chat API to send a message to the model:

## Context

The previous prompt has concise instructions that begin the prompt (“summarize the text”) and is formatted clearly, where the instructions and resources are separated with delimiters. However, it lacks context that the LLM could use to produce a better-quality summary for the desired output. Including information about the input text could improve the prompt.

While embedding a news article directly in a prompt works well, Cohere grounded generation is directly available through the Chat API which can result in a much improved completion. Grounded completion focuses on generating accurate and relevant responses by avoiding preambles, or having to include documents directly in the message. The benefits include:

- Less incorrect information.
- More directly useful responses.
- Responses with precise citations for source tracing.

For this method, we recommend providing documents through the documents parameter. Our models process conversations and document snippets (100-400 word chunks in key-value pairs) as input, and you have the option of including a system message.

For the example above, we can chunk a news article into different sections and attach them via the `documents`

field in the `user`

message. The Chat API will then provide us not only with the completion but also citations that ground information from the documents. See the following:

The model returns a concise summary as instructed:

But importantly, it also returns citations that ground the completion in the included `documents`

. The citations are returned in `response.message.citations`

as a list of JSON dictionaries:

These can easily be rendered into the text to show the source of each piece of information. The following Python function adds the returned citations to the returned completion.

## Incorporating Example Outputs

LLMs respond well when they have specific examples to work from. For example, instead of asking for the salient points of the text and using bullet points “where appropriate”, give an example of what the output should look like.

## Structured Output

In addition to examples, asking the model for structured output with a clear and demonstrated output format can help constrain the output to match desired requirements. JSON works particularly well with the Command R models.

## Do vs. Do Not Do

Be explicit in **exactly** what you want the model to do. Be as assertive as possible and avoid language that could be considered vague. To encourage abstract summarization, do not write something like “avoid extracting full sentences from the input text,” and instead do the following:

## Length Control

Command A models excel at length control. Use this to your advantage by being explicit about the desired length of completion. Different units of length work well, including paragraphs (“give a summary in two paragraphs”); sentences (“make the response between 3 and 5 sentences long”); and words (“the completion should be at least 100 and no more than 200 words long”).

## Begin the Completion Yourself

LLMs can easily be constrained by beginning the completion as part of the input prompt. For example, if it is very important that the output is HTML code and that it must be a well-formed HTML document, you can show the model how the completion should begin, and it will tend to follow suit.

## Task Splitting

Finally, task splitting should be used when the requested task is complex and can be broken down into sub-tasks. Doing this for the model can help guide it to the best possible answer. Instead of asking for a summary of the most important sentence in the most important paragraph in the input, break it down piece by piece in the prompt:

In the next chapter, we will discuss more advanced prompt engineering techniques, including few-shot prompting and chain-of-thought.

---

## Source: https://docs.cohere.com/

Understand how to use our API on a deeper level. Train and customize the model to work for you.

Integrate natural language processing and generation into your products with a few lines of code.

Keep up with the latest releases and platform updates from Cohere.

A collection of resources to help developers get up and running with Cohere.

Our endpoints offer different ways to interact with our models and offer additional value on top of them

Join our learning hub to master Enterprise AI with expert-led courses and step-by-step guides

New to NLP? Learn about Natural Language processing and Large Language Models through our structured curriculum.

v2 API

---

## Source: https://docs.cohere.com/docs/the-cohere-platform

# An Overview of The Cohere Platform

## Large Language Models (LLMs)

Language is important. It’s how we learn about the world (e.g. news, searching the web or Wikipedia), and also how we shape it (e.g. agreements, laws, or messages). Language is also how we connect and communicate — as people, and as groups and companies.

Despite the rapid evolution of software, computers remain limited in their ability to deal with language. Software is great at searching for exact matches in text, but often fails at more advanced uses of language — ones that humans employ on a daily basis.

There’s a clear need for more intelligent tools that better understand language.

A recent breakthrough in artificial intelligence (AI) is the introduction of language processing technologies that enable us to build more intelligent systems with a richer understanding of language than ever before. Large pre-trained Transformer language models, or simply large language models, vastly extend the capabilities of what systems are able to do with text.

Consider this: adding language models to empower Google Search was [noted](https://blog.google/products/search/search-language-understanding-bert/) as “representing the biggest leap forward in the past five years, and one of the biggest leaps forward in the history of Search“. Microsoft also [uses](https://azure.microsoft.com/en-us/blog/bing-delivers-its-largest-improvement-in-search-experience-using-azure-gpus/) such models for every query in the Bing search engine.

Despite the utility of these models, training and deploying them effectively is resource intensive, requiring a large investment of data, compute, and engineering resources.

## Cohere’s LLMs

Cohere allows developers and enterprises to build LLM-powered applications. We do that by creating world-class models, along with the supporting platform required to deploy them securely and privately.

The Command family of models includes [Command A](https://docs.cohere.com/docs/command-a), [Command R7B](https://docs.cohere.com/docs/command-r7b), [Command R+](/docs/command-r-plus), and [Command R](/docs/command-r). Together, they are the text-generation LLMs powering conversational agents, summarization, copywriting, and similar use cases. They work through the [Chat](/reference/chat) endpoint, which can be used with or without [retrieval augmented generation](/docs/retrieval-augmented-generation-rag) RAG.

[Rerank](https://cohere.com/blog/rerank/) is the fastest way to inject the intelligence of a language model into an existing search system. It can be accessed via the [Rerank](/reference/rerank-1) endpoint.

[Embed](https://cohere.com/models/embed) improves the accuracy of search, classification, clustering, and RAG results. It also powers the [Embed](/reference/embed) and [Classify](/reference/classify) endpoints.

[Click here](/docs/foundation-models) to learn more about Cohere foundation models.

## Example Applications

Try [the playground](https://dashboard.cohere.com/playground) to see what an LLM-powered conversational agent can look like. It is able to converse, summarize text, and write emails and articles.

Our goal, however, is to enable you to build your own LLM-powered applications. The [Chat endpoint](/docs/chat-api), for example, can be used to build a conversational agent powered by the Command family of models.

### Retrieval-Augmented Generation (RAG)

“Grounding” refers to the practice of allowing an LLM to access external data sources – like the internet or a company’s internal technical documentation – which leads to better, more factual generations.

Chat is being used with grounding enabled in the screenshot below, and you can see how accurate and information-dense its reply is.

What’s more, advanced RAG capabilities allow you to see what underlying query the model generates when completing its tasks, and its output includes [citations](/docs/documents-and-citations) pointing you to where it found the information it uses. Both the query and the citations can be leveraged alongside the Cohere Embed and Rerank models to build a remarkably powerful RAG system, such as the one found in [this guide](https://cohere.com/llmu/rag-chatbot).

[Click here](/docs/serving-platform) to learn more about the Cohere serving platform.

### Advanced Search & Retrieval

Embeddings enable you to search based on what a phrase *means* rather than simply what keywords it *contains*, leading to search systems that incorporate context and user intent better than anything that has come before.

Learn more about semantic search [here](https://cohere.com/llmu/what-is-semantic-search).

## Fine-Tuning

To [create a fine-tuned model](/docs/fine-tuning), simply upload a dataset and hold on while we train a custom model and then deploy it for you. Fine-tuning can be done with [generative models](/docs/generate-fine-tuning), [multi-label classification models](/docs/classify-fine-tuning), [rerank models](/docs/rerank-fine-tuning), and [chat models](/docs/chat-fine-tuning).

## Accessing Cohere Models

Depending on your privacy/security requirements there are a number of ways to access Cohere:

[Cohere API](/reference/about): this is the easiest option, simply grab an API key from[the dashboard](https://dashboard.cohere.com/)and start using the models hosted by Cohere.- Cloud AI platforms: this option offers a balance of ease-of-use and security. you can access Cohere on various cloud AI platforms such as
[Oracle’s GenAI Service](https://www.oracle.com/uk/artificial-intelligence/generative-ai/large-language-models/), AWS’[Bedrock](https://aws.amazon.com/bedrock/cohere-command-embed/)and[Sagemaker](https://aws.amazon.com/blogs/machine-learning/cohere-brings-language-ai-to-amazon-sagemaker/)platforms,[Google Cloud](https://console.cloud.google.com/marketplace/product/cohere-id-public/cohere-public?ref=txt.cohere.com), and[Azure’s AML service](https://cohere.com/blog/coheres-enterprise-ai-models-coming-soon-to-microsoft-azure-ai-as-a-managed-service/). - Private cloud deploy deployments: Cohere’s models can be deployed privately in most virtual private cloud (VPC) environments, offering enhanced security and highest degree of customization. Please
[contact sales](emailto:team@cohere.com)for information.

### On-Premise and Air Gapped Solutions

- On-premise: if your organization deals with sensitive data that cannot live on a cloud we also offer the option for fully-private deployment on your own infrastructure. Please
[contact sales](emailto:team@cohere.com)for information.

## Let us Know What You’re Making

We hope this overview has whetted your appetite for building with our generative AI models. Reach out to us on [Discord](https://discord.com/invite/co-mmunity) with any questions or to showcase your projects – we love hearing from the Cohere community!

---

## Source: https://docs.cohere.com/reference/about

# Working with Cohere's API and SDK

The Cohere platform allows you to leverage the power of [large language models](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/the-cohere-platform#large-language-models-llms) (LLMs) with just a few lines of code and an [API key](https://dashboard.cohere.com/api-keys?_gl=1*14v2pj5*_gcl_au*NTczMTgyMTIzLjE3MzQ1NTY2OTA.*_ga*MTAxNTg1NTM1MS4xNjk1MjMwODQw*_ga_CRGS116RZS*MTczNjI3NzU2NS4xOS4xLjE3MzYyODExMTkuNDkuMC4w).

Our [Command](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/command-r7b), [Embed](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/cohere-embed), [Rerank](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/rerank), [Aya](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/aya), and [Cohere Transcribe](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/transcribe) models excel at a variety of applications, from the relatively simple ([semantic search](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/semantic-search-embed), and [content generation](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/introduction-to-text-generation-at-cohere)) to the more advanced ([retrieval augmented generation](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/retrieval-augmented-generation-rag) and [agents](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/multi-step-tool-use)). If you have a more specialized use case and custom data, you can also [train a custom model](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/fine-tuning) to get better performance.

Check out [our documentation](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/the-cohere-platform) if you’re ready to start building, and you might want to check out our [API pricing](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/rate-limits).

## SDKs

The Cohere SDK is the primary way of accessing Cohere’s models. We support SDKs in four different languages. To get started, please see the installation methods and code snippets below.

### Python

[https://github.com/cohere-ai/cohere-python](https://github.com/cohere-ai/cohere-python)

### Typescript

[https://github.com/cohere-ai/cohere-typescript](https://github.com/cohere-ai/cohere-typescript)

### Java

[https://github.com/cohere-ai/cohere-java](https://github.com/cohere-ai/cohere-java)

### Go

[https://github.com/cohere-ai/cohere-go](https://github.com/cohere-ai/cohere-go)

## Request Specification

To make a request to any model, you must pass in the `Authorization`

Header and the request must be made through a `POST`

request.

The content of `Authorization`

should be in the shape of `BEARER [API_KEY]`

. All request bodies are sent through JSON.

Model names are found within the dashboard, and details about endpoints are available within the documentation.

---

## Source: https://docs.cohere.com/changelog

[Announcing the Cohere Transcribe model](/changelog/cohere-transcribe-03-2026)

We’re pleased to announce the release of [Cohere Transcribe](/docs.cohere.com/docs.cohere.com/false/false/everyone/default/docs/transcribe), our first transcription model.
Cohere Transcribe specializes in audio-in, text-out, automatic speech recognition (ASR).

## Technical details

**Model name**:`cohere-transcribe-03-2026`

**Input**: Audio waveform**Output**: Text**Languages covered**: English, German, French, Italian, Spanish, Portuguese, Greek, Dutch, Polish, Vietnamese, Chinese, Arabic, Japanese, Korean.**License**:[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)**API endpoint**:[Audio Transcriptions API](/docs.cohere.com/docs.cohere.com/false/false/everyone/default/reference/create-audio-transcription)

## Getting started

The model is available immediately through Cohere’s [Audio Transcriptions API endpoint](/docs.cohere.com/docs.cohere.com/false/false/everyone/default/reference/create-audio-transcription).
You can start transcribing audio using the following example query:

## Availability

You can access Cohere Transcribe via our [API](http://dashboard.cohere.com/) for free, low-setup experimentation
subject to rate limits. See the [Different Types of API Keys and Rate Limits](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/rate-limits) page for
usage details and integration guidance.

For production deployment without rate limits, provision a dedicated [Model Vault](/docs.cohere.com/docs.cohere.com/false/false/everyone/docs/model-vault).
This enables low-latency, private cloud inference without having to manage infrastructure. Pricing is
calculated per hour-instance, with discounted plans for longer-term commitments.
[Contact our team](https://cohere.com/contact-sales) to discuss your requirements.

[Cohere's Rerank v4.0 Model is Here!](/changelog/rerank-v4.0)

We’re pleased to announce the release of [Rerank 4.0](/docs/rerank) our newest and most performant foundational model for ranking.

## Technical Details

**Two model variants available:**`rerank-v4.0-pro`

: Optimized for state-of-the-art quality and complex use-cases`rerank-v4.0-fast`

: Optimized for low latency and high throughput use-cases

**Multilingual support**: Re-rank both English and non-English documents**Semi-structured data support**: Re-rank JSON documents**Extended context length**: 32k token context window

## Example Query

[Announcing Major Command Deprecations](/changelog/2025-09-15-major-command-deprecations)

As part of our ongoing commitment to delivering advanced AI solutions, we are deprecating the following models, features, and API endpoints:

Deprecated Models:

`command-r-03-2024`

(and the alias`command-r`

)`command-r-plus-04-2024`

(and the alias`command-r-plus`

)`command-light`

`command`

`summarize`

(Refer to[the migration guide](https://docs.cohere.com/docs/summarizing-text#migration-from-summarize-to-chat-endpoint)for alternatives).

For command model replacements, we recommend you use `command-r-08-2024`

, `command-r-plus-08-2024`

, or `command-a-03-2025`

(which is the strongest-performing model across domains) instead.

Retired Fine-Tuning Capabilities:
All fine-tuning options via dashboard and API for models including `command-light`

, `command`

, `command-r`

, `classify`

, and `rerank`

are being retired. Previously fine-tuned models will no longer be accessible.

Deprecated Features and API Endpoints:

`/v1/connectors`

(Managed connectors for RAG)`/v1/chat`

parameters:`connectors`

,`search_queries_only`

`/v1/generate`

(Legacy generative endpoint)`/v1/summarize`

(Legacy summarization endpoint)`/v1/classify`

- Slack App integration
- Coral Web UI (chat.cohere.com and coral.cohere.com)

For questions, reach out to [support@cohere.com](mailto:support@cohere.com)

[Announcing Cohere's Command A Translate Model](/changelog/2025-08-28-command-a-translate)

We’re excited to announce the release of **Command A Translate**, Cohere’s first machine translation model. It achieves state-of-the-art performance at producing accurate, fluent translations across 23 languages.

## Key Features

**23 supported languages**: English, French, Spanish, Italian, German, Portuguese, Japanese, Korean, Chinese, Arabic, Russian, Polish, Turkish, Vietnamese, Dutch, Czech, Indonesian, Ukrainian, Romanian, Greek, Hindi, Hebrew, and Persian**111 billion parameters**for superior translation quality**16K token context length**(8K input + 8K output) for handling longer texts**Optimized for deployment**on 1-2 GPUs (A100s/H100s)**Secure deployment options**for sensitive data translation

## Getting Started

The model is available immediately through Cohere’s Chat API endpoint. You can start translating text with simple prompts or integrate it programmatically into your applications.

## Availability

Command A Translate (`command-a-translate-08-2025`

) is now available for all Cohere users through our standard API endpoints. For enterprise customers, [private deployment](https://docs.cohere.com/docs/private-deployment-overview) options are available to ensure maximum security and control over your translation workflows.

For more detailed information about Command A Translate, including technical specifications and implementation examples, visit our [model documentation](/docs/command-a-translate).

[Announcing Cohere's Command A Reasoning Model](/changelog/2025-08-21-command-a-reasoning)

We’re excited to announce the release of **Command A Reasoning**, a hybrid reasoning model designed to excel at complex agentic tasks, in English and 22 other languages. With 111 billion parameters and a 256K context length, this model brings advanced reasoning capabilities to your applications through the familiar Command API interface.

**Key Features**

**Tool Use**: Provides the strongest tool use performance out of the Command family of models.**Agentic Applications**: Demonstrates proactive problem-solving, autonomously using tools and resources to complete highly complex tasks.**Multilingual**: With 23 languages supported, the model solves reasoning and agentic problems in the language your business operates in.

**Technical Specifications**

**Model Name**:`command-a-reasoning-08-2025`

**Context Length**: 256K tokens**Maximum Output**: 32K tokens**API Endpoint**: Chat API

### Getting Started

Integrating Command A Reasoning is straightforward using the Chat API. Here’s a non-streaming example:

**Customization Options**

You can enable and disable thinking capabilities using the `thinking`

parameter, and steer the model’s output with a flexible user-controlled thinking budget; for more details on token budgets, advanced configurations, and best practices, refer to our dedicated [Reasoning documentation](/docs/reasoning).

[Announcing Cohere's Command A Vision Model](/changelog/2025-07-31-command-a-vision)

We’re excited to announce the release of **Command A Vision**, Cohere’s first commercial model capable of understanding and interpreting visual data alongside text. This addition to our Command family brings enterprise-grade vision capabilities to your applications with the same familiar Command API interface.

## Key Features

### Multimodal Capabilities

**Text + Image Processing**: Combine text prompts with image inputs**Enterprise-Focused Use Cases**: Optimized for business applications like document analysis, chart interpretation, and OCR**Multiple Languages**: Officially supports English, Portuguese, Italian, French, German, and Spanish

### Technical Specifications

**Model Name**:`command-a-vision-07-2025`

**Context Length**: 128K tokens**Maximum Output**: 8K tokens**Image Support**: Up to 20 images per request (or 20MB total)**API Endpoint**: Chat API

## What You Can Do

Command A Vision excels in enterprise use cases including:

**📊 Chart & Graph Analysis**: Extract insights from complex visualizations**📋 Table Understanding**: Parse and interpret data tables within images**📄 Document OCR**: Optical character recognition with natural language processing**🌐 Image Processing for Multiple Languages**: Handle text in images across multiple languages**🔍 Scene Analysis**: Identify and describe objects within images

## 💻 Getting Started

The API structure is identical to our existing Command models, making integration straightforward:

There’s much more to be said about working with images, various limitations, and best practices, which you can find in our dedicated [Command A Vision](https://docs.cohere.com/docs/command-a-vision) and [Image Inputs](https://docs.cohere.com/docs/image-inputs) documents.

Announcing Cutting-Edge Cohere Models on OCI


Announcing Cutting-Edge Cohere Models on OCI

We are thrilled to announce that the Oracle Cloud Infrastructure (OCI) Generative AI service now supports Cohere Command A, Rerank v3.5, Embed v3.0 multimodal. This marks a major advancement in providing OCI’s customers with enterprise-ready AI solutions.

Command A 03-2025 is the most performant Command model to date, delivering 150% of the throughput of its predecessor on only two GPUs.

Embed v3.0 is a cutting-edge AI search model enhanced with multimodal capabilities, allowing it to generate embeddings from both text and images.

Rerank 3.5, Cohere’s newest AI search foundation model, is engineered to improve the precision of enterprise search and retrieval-augmented generation (RAG) systems across a wide range of data formats (such as lengthy documents, emails, tables, JSON, and code) and in over 100 languages.

Check out [Oracle’s announcement](https://blogs.oracle.com/ai-and-datascience/post/cohere-command-a-rerank-oci-gen-ai) and [documentation](https://docs.oracle.com/en-us/iaas/Content/generative-ai/pretrained-models.htm) for more details.

[Announcing Embed Multimodal v4](/changelog/embed-multimodal-v4)

We’re thrilled to announce the release of [Embed 4](https://docs.cohere.com/docs/cohere-embed), the most recent entrant into the Embed family of enterprise-focused [large language models](https://docs.cohere.com/docs/the-cohere-platform#large-language-models-llms) (LLMs).

Embed v4 is Cohere’s most performant search model to date, and supports the following new features:

- Matryoshka Embeddings in the following dimensions: ‘[256, 512, 1024, 1536]’
- Unified Embeddings produced from mixed modality input (i.e. a single payload of image(s) and text(s))
- Context length of 128k

Embed v4 achieves state of the art in the following areas:

- Text-to-text retrieval
- Text-to-image retrieval
- Text-to-mixed modality retrieval (from e.g. PDFs)

Embed v4 is available today on the [Cohere Platform](https://docs.cohere.com/docs/the-cohere-platform), [AWS Sagemaker](https://docs.cohere.com/docs/amazon-sagemaker-setup-guide#embeddings), and [Azure AI Foundry](https://docs.cohere.com/docs/cohere-on-microsoft-azure#embeddings). For more information, check out our dedicated blog post [here](https://cohere.com/blog/embed-4).

[Announcing Command A](/changelog/command-a)

We’re thrilled to announce the release of Command A, the most recent entrant into the Command family of enterprise-focused [large language models](https://docs.cohere.com/docs/the-cohere-platform#large-language-models-llms) (LLMs).

[Command A](https://docs.cohere.com/docs/command-a) is Cohere’s most performant model to date, excelling at real world enterprise tasks including tool use, retrieval augmented generation (RAG), agents, and multilingual use cases. With 111B parameters and a context length of 256K, Command A boasts a considerable increase in inference-time efficiency — 150% higher throughput compared to its predecessor Command R+ 08-2024 — and only requires two GPUs (A100s / H100s) to run.

Command A is available today on the [Cohere Platform](https://docs.cohere.com/docs/the-cohere-platform), [HuggingFace](https://huggingface.co/CohereForAI/c4ai-command-a-03-2025), or through the SDK with `command-a-03-2025`

. For more information, check out our [dedicated blog post](https://cohere.com/blog/command-a/).

[Our Groundbreaking Multimodal Model, Aya Vision, is Here!](/changelog/aya-vision-announcement)

Today, Cohere Labs, Cohere’s research arm, is proud to announce [Aya Vision](https://cohere.com/blog/aya-vision), a state-of-the-art multimodal large language model excelling across multiple languages and modalities. Aya Vision outperforms the leading open-weight models in critical benchmarks for language, text, and image capabilities.

built as a foundation for multilingual and multimodal communication, this groundbreaking AI model supports tasks such as image captioning, visual question answering, text generation, and translations from both texts and images into coherent text.

Find more information about Aya Vision [here](/docs/aya-multimodal).

---

## Source: https://docs.cohere.com/page/cookbooks

# Cookbooks

Explore what you can build on Cohere’s generative AI platform. These ready-made guides will get you started with best-practices that get the most out of Cohere’s models. Everything is set up and ready for you to start testing!

### Use Cases

Click on one of the section headers below to jump to guides for that use case category.

## Agents

Learn how to build powerful agents that use tools to connect to external services, like search engines, APIs, and databases. Agents can be used to automate tasks, answer questions, and more.

## Open Source Software Integrations

Cohere integrates natively with a variety of popular Open Source Software tools like LangChain and LlamaIndex. These guides will help you get started with these integrations.

## Search and Embeddings

Learn how to embed and search text with Cohere. These guides will help you build semantic search engines, search Wikipedia, and more.

## Cloud

Learn how to use Cohere's cloud-based services in your preferred environment. Cohere is integrated with most major cloud providers. These guides will help you get started wherever your code lives.

## RAG

Learn how to use Cohere's foundation model for Retrieval-Augmented Generation (RAG). RAG can be used to improve the accuracy of language models by combining them with a retrieval system. This allows the model to generate completions that are grounded in provided sources of truth.

## Summarization

Learn how to summarize long documents, meeting summaries, and technical reports. Summarization is a key feature of Cohere's Command model, which can be used to generate summaries of long documents with citations.

## Finetuning

Learn how to finetune Cohere's models using custom data. Finetuning allows you to adapt Cohere's models to your specific use case, improving performance and accuracy.

## Other

Here are a variety of other fun and useful guides to help you get started with Cohere. From text classification to document parsing, there's something for everyone!

[Built with](https://buildwithfern.com/?utm_campaign=buildWith&utm_medium=docs&utm_source=docs.cohere.com)

---

## Source: https://docs.cohere.com/docs/get-started-installation

# Installation

## Platform options

To be able to use Cohere’s models, first choose the platform where you want to access the model from. Cohere’s models are available on the following platforms:

## Model usage

You can then use the models via these options:

[SDK](https://docs.cohere.com/v1/reference/about#sdks). We support the following SDKs:[Playground](https://docs.cohere.com/v1/docs/playground-overview)

## Installation

To install the Cohere SDK, choose from the following 4 languages:

---

## Source: https://docs.cohere.com/docs/create-client

Get StartedCreating a clientCopy pageCreating Cohere API Client To start using all features available in the Cohere SDK, you should create a client first. PythonTypeScriptJavaGo1import cohere23co = cohere.ClientV2(api_key="YOUR_API_KEY")SourceThe Cohere API client initializes with the following parameters:ParameterTypeDefaultDescriptionapi_keystr/callableNoneAPI key for authenticating requests to the Cohere V2 API.base_urlstros.getenv("CO_API_URL")Base URL for the Cohere API.environmentClientEnvironmentClientEnvironment.PRODUCTIONSpecifies the API environment (e.g., production, staging).client_namestrNoneOptional name for the client instance, useful for logging.timeoutfloatNoneTimeout in seconds for API requests.httpx_clienthttpx.ClientNoneOptional pre-configured httpx.Client for making HTTP requests.thread_pool_executorThreadPoolExecutorThreadPoolExecutor(64)Thread pool executor for concurrent operations, with 64 threads by default.log_experimentalboolTrueEnables/disables warnings for experimental features.

---

## Source: https://docs.cohere.com/docs/playground-overview

# An Overview of the Developer Playground

The [Cohere Playground](https://dashboard.cohere.com/playground) is a visual interface supporting two models:

It’s a great way to test our models for specific use cases without writing code; when you’re ready to start building, simply click `View Code`

to get the underlying logic to add to your application.

## Using the Playground

In the next few sections, we’ll walk through how to interact with both supported models via the Playground.

### Chat

The [Chat endpoint](https://docs.cohere.com/reference/chat) provides a response (i.e. language or code) to a prompt. You can use the Chat Playground to generate text or code, answer a question, or create content. It looks like this:

Your message goes in the `Message...`

box at the bottom, and you can pass a message by hitting `Enter`

or by clicking the `Send`

button.

You can customize the model’s behavior with the `System message`

, which is a prompt that guides the model as it generates output. You can learn more about how to craft an effective system message in our [dedicated guide](https://docs.cohere.com/docs/preambles).

To customize further *within* the Playground, you can use the panel on the right:

Here’s what’s available:

`Model`

: Choose from a list of our generation models (we recommend`command-a-03-2025`

, the default).`Functions`

: Function calling allows developers to connect models to external functions like APIs, databases, etc., take actions in them, and return results for users to interact with. Learn more in[tool use](https://docs.cohere.com/docs/tool-use)docs.`JSON Mode`

: This is part of Cohere’s[structured output](https://docs.cohere.com/docs/structured-outputs)functionality. When enabled, the model’s response will be a JSON object that matched the schema that you have supplied. Learn more in[JSON mode](https://docs.cohere.com/docs/parameter-types-in-json).- Under
`Advanced Parameters`

, you can customize the`temperature`

and`seed`

. A higher temperature will make the model more creative, while a lower temperature will make the model more focused and deterministic, and seed can help you keep outputs consistent. Learn more[here](https://docs.cohere.com/docs/predictable-outputs). - Under
`Advanced Parameters`

, you’ll also see the ability to turn on reasoning. This will cause the model to consider the implications of its response and provide a justification for its output. More information will be available as we continue to roll out this feature.

### Embed

The [Embed](https://docs.cohere.com/reference/embed) model enables users to create numerical representations for strings, which comes in handy for semantic search, topic modeling, classification tasks, and many other workflows. You can use the Embed Playground to test this functionality, and it looks like this:

To create embeddings through the Playground, you can either use `Add input`

to feed the model your own strings, or you can use `Upload a file`

. If you select `Run`

, you’ll see the two-dimensional visualization of the strings in the `OUTPUT`

box.

As with Chat, the Playground’s Embed model interface offers a side panel where you can further customize the model:

Here’s what’s available:

`Model`

: Choose from a list of our embedding models (we recommend`embed-v4.0`

, the default).`Truncate`

: This allows you to specify how the API will handle inputs longer than the maximum token length.

## Next Steps

As mentioned, once you’ve roughed out an idea you can use `View Code`

to get the logic. If you want to explore further, check out our:

[Models page](https://docs.cohere.com/docs/models)[Text Generation](https://docs.cohere.com/docs/introduction-to-text-generation-at-cohere)docs[Embeddings](https://docs.cohere.com/docs/embeddings)docs[API](https://docs.cohere.com/reference/about)reference[Integrations](https://docs.cohere.com/docs/integrations)page[Cookbooks](https://docs.cohere.com/docs/cookbooks)

---

## Source: https://docs.cohere.com/docs/cohere-faqs

# Frequently Asked Questions About Cohere

Here, we’ll walk through some common questions we get about how Cohere’s models work, what pricing options there are, and more!

## Cohere Models

###### What is the difference between the Command R and Command R+ models?


Command R+ is most suitable for those workflows that lean on complex RAG functionality and multi-step tool use (agents). Command R, on the other hand, is great for simpler retrieval augmented generation (RAG) and single-step tool use tasks, as well as applications where price is a major consideration. We offer a full model overview in our [documentation](https://docs.cohere.com/docs/models).

###### What is the difference between Aya and Command R models?


Aya specializes in human-like multilingual text generation and conversations, ideal for content creation and chatbots. Command R excels at understanding and executing instructions, enabling interactive applications and data-driven tasks.This makes it more suitable for many enterprise use cases.

You can check out [this link](https://cohere.com/research/aya) to learn more about Aya models, datasets and related research papers.

###### How do Cohere's models compare to other LLMs on the market?


Cohere’s Command models have strong performance across enterprise tasks such as summarization, multilingual use cases, and retrieval augmented generation. We also have the widest range of deployment options, you can check it [here](https://cohere.com/deployment-options).

###### How can I use Cohere's models for tasks like translation, text embedding, summarization, and custom tool development?


You can access Cohere’s models through our platform (cohere.com) or through various cloud platforms including, but not limited to, Sagemaker, Bedrock, Azure AI, and OCI Generatie AI. We also have private deployments. In terms of use case specific features, please reference the latest [API documentation](https://docs.cohere.com/reference/about) to learn more about the API features and [Cookbooks](https://docs.cohere.com/page/cookbooks) with starter code for various tasks to aid development.

###### What are some best practices, tips, and techniques for prompt engineering?


You can find our prompt engineering recommendations in the following resources:

###### How can I effectively use and fine-tune models for specific tasks, like data extraction, question answering, and generating content within certain constraints?


To fine-tune models for tasks like data extraction, question answering, or content generation, it’s important to start by defining your goals and ensuring your data captures the task accurately.

For generative models, fine-tuning involves training on input-output pairs, where the model learns to generate specific outputs based on given inputs. This is ideal for tasks like customizing responses or enforcing a particular writing style.

For tasks like data extraction, fine-tuning helps the model identify relevant patterns and structure data as needed. High-quality, task-specific data is essential for achieving accurate results.

For more details, you can refer to [Cohere’s fine-tuning guide](https://docs.cohere.com/docs/fine-tuning) for best practices.

Fine tuning is a powerful capability, but takes some effort to get right. You should first understand what you are trying to achieve and then determine if the data you are planning to train on effectively captures that task. The generative models specifically learn off of input/output pairs and therefore need to see examples of the expected input for your task and the ideal output. For more information, see our [finetuning guide](https://docs.cohere.com/v1/docs/chat-improving-the-results).

###### What are the best practices for preparing and structuring fine-tuning data, and what are the supported file formats?


You can find the best practices for preparing and structuring fine-tuning data across these three modules. Data preparation for [chat fine-tuning](https://docs.cohere.com/docs/chat-preparing-the-data), [classify fine-tuning](https://docs.cohere.com/docs/classify-preparing-the-data) and [rerank fine-tuning](https://docs.cohere.com/docs/rerank-preparing-the-data). The primary file formats supported are jsonl and csv.

###### What models are available for fine-tuning using the Cohere platform?


On the generative side we support fine-tuning for Command R and Command R 082024. On the representation side, we support fine-tuning for Classify and Rerank models. You can learn more about it [in this section](https://docs.cohere.com/docs/fine-tuning) of our docs.

###### What specific models are being developed by Cohere and where can I find detailed information about them?


For the latest current offerings, you should reference our [models page](https://docs.cohere.com/v1/docs/models).

###### Which model should I choose for my specific use case?


This largely depends on your use case. In general, Cohere has both generative and representation models. The [models page](https://docs.cohere.com/v1/docs/models) has more information on each of these, but use cases can often use a combination of models.

###### What are the capabilities of Cohere's models?


Cohere models offer a wide range of capabilities, from advanced generative tasks to semantic search and other representation use cases. All of our models are multilingual and can support use cases from [RAG](https://docs.cohere.com/docs/retrieval-augmented-generation-rag) to [Tool Use](https://docs.cohere.com/docs/tools) and much more.

Our [Command](https://cohere.com/command) model family is our flagship series of generative models. These models excel at taking a user instruction (or command) and generating text following the instruction. They also have conversational capabilities which means that they are well-suited for chatbots and virtual assistants.

For representation tasks, we offer two key models:

[Embed](https://cohere.com/embed): Embed models generate embeddings from text, allowing for tasks like classification, clustering, and semantic search.[Rerank](https://cohere.com/rerank): Rerank models improve the output of search and ranking systems by re-organizing results according to specific parameters, improving the relevance and accuracy of search results.

Our models perform best when used end-to-end in their intended workflows. For a detailed breakdown of each model, including their latest versions, check our [models page](https://docs.cohere.com/docs/models).

###### What are the best practices and resources for building a search system for large PDF documents, and how can I optimize the retrieval process using language models and embeddings?


While this depends on the document structure itself, the best rule of thumb would be to split the PDF into its pages and then split each page into chunks that fit our context length.

From there, you should associate each chunk to a page and a doc id which will allow you to have various levels of granularity for retrieval.

You can find further guides on [chunking strategies](https://docs.cohere.com/page/chunking-strategies) and [handling PDFs with mixed data](https://docs.cohere.com/docs/semantic-search-embed#multimodal-pdf-search).

###### How can I develop a multilingual chatbot that can understand and respond to user queries in different languages, incorporate external data, and perform tasks like text search, citation generation, and answer reranking?


Cohere’s models offer multilingual capabilities out of the box. You can reference our example notebooks such as this [RAG one](https://docs.cohere.com/page/basic-rag) to get a better idea of how to piece these models together to build a question answering application.

###### What are the implications and limitations of using an unsupported language in Command-R, and are there plans to expand language support?


We are always looking to expand multilingual support to other languages. Command R/R+ have been exposed to other languages during training and we encourage you to try it on your use case. If you would like to provide feedback or suggestions on additional languages, please don’t hesitate to contact [support@cohere.com](mailto:support@cohere.com).

###### Which languages are supported by Cohere models?


Cohere’s command models are optimized to perform well in the following languages: English, French, Spanish, Italian, German, Brazilian Portuguese, Japanese, Korean, Simplified Chinese, and Arabic.

Additionally, pre-training data has been included for the following 13 languages: Russian, Polish, Turkish, Vietnamese, Dutch, Czech, Indonesian, Ukrainian, Romanian, Greek, Hindi, Hebrew, Persian.

You can find a full list of languages that are supported by Cohere’s multilingual embedding model [here](https://docs.cohere.com/docs/supported-languages).

###### What kind of use case scenarios can Cohere models be useful in?


You can check the range of use cases based on our customer stories [here](https://cohere.com/use-cases).

## Model Deployment

###### What Cohere models can I access via my cloud provider?


You can find the updated cloud support listed in our [documentation](https://docs.cohere.com/v1/docs/cohere-works-everywhere). Check out links to our models on [AWS Bedrock](https://aws.amazon.com/bedrock/cohere-command-embed/), [AWS SageMaker](https://aws.amazon.com/marketplace/seller-profile?id=87af0c85-6cf9-4ed8-bee0-b40ce65167e0), [Azure AI](https://ai.azure.com/explore/models?selectedCollection=cohere), and [OCI Generative AI](https://www.oracle.com/artificial-intelligence/generative-ai/generative-ai-service/features/#models).

###### What are the options and availability for on-premises deployment of Cohere's models?


We have the ability to deploy all of our models privately. To learn more, please reach out to the sales team [using this form](https://cohere.com/contact-sales).

###### Can I get an enterprise license for on-premise deployment of Cohere models for commercial use, and are there any options for self-deployment?


Please reach out to the sales team to learn more.

###### What are the deployment options and considerations for Cohere models?


To learn more, please reach out to the sales team [using this form](https://cohere.com/contact-sales).

###### Is the licensing for self-deployed models non-commercial or research-only?


The default license for our open weights is for non-commercial use. For information about licensing please reach out to the sales team [using this form](https://cohere.com/contact-sales).

###### What are the requirements, resources, and methods needed to deploy Cohere models, especially when dealing with specific use cases, confidentiality, and resource constraints?


Please check our deployment options [here](https://cohere.com/deployment-options) and contact our sales team [with this form](https://cohere.com/contact-sales) to learn more.

## Platform & API

###### How can I monitor and manage my API usage limits, and what steps can I take if I need higher limits or encounter issues with my current limits?


We offer two kinds of API keys: trial keys (with a variety of attendant limitations), and production keys (which have no such limitations). You can learn about them in [this section](https://docs.cohere.com/docs/rate-limits) of our documentation.

###### How can I access Cohere API for personal projects and prototyping?


We make a distinction between “trial” and “production” usage of an API key.

Trial API key usage is free, [but limited](https://docs.cohere.com/docs/rate-limits). You can test different applications or build proofs of concept using all of Cohere’s models and APIs with a trial key by simply signing up for a Cohere account [here](https://dashboard.cohere.com/welcome/register).

###### What are the rate limits for different Cohere API endpoints and plan types, and are there any differences in response times?


Please refer to [API Keys and Rate Limits section](https://docs.cohere.com/v1/docs/rate-limits) of our documentation.

###### Is there a way to provide feedback, ask questions, or report issues directly to the Cohere team or community?


You can contact our support team at [support@cohere.com](mailto:support@cohere.com) and get help and share your feedback with our team and developer community via the [Cohere Discord server](https://discord.gg/co-mmunity).

## Getting Started

###### How do I use the Cohere API?


The Cohere API can be accessed through the SDK. We support SDKs in 4 different languages, Python, Typescript, Java, and Go.

Visit the [API docs](https://docs.cohere.com/reference/about) for further details.

###### Where can I access Cohere's Chatbot Playground or Dashboard?


Here are the relevant links:

###### Where can I find a comprehensive overview and resources about Cohere's products, use cases, and various offerings?


You can find the resources as follows:

- Model pages:
[Command](https://cohere.com/command),[Embed](https://cohere.com/embed), and[Rerank](https://cohere.com/rerank). [For business](https://cohere.com/business)[Cohere documentation](https://docs.cohere.com/)

###### Where can I find resources to start learning and building on Cohere?


For learning, we recommend our [LLM University](https://cohere.com/llmu) hub resources, which have been prepared by Cohere experts. These include a number of very high-quality, step-by-step guides to help you start building quickly.

For building, we recommend checking out our [Github Notebooks](https://github.com/cohere-ai/notebooks), as well as the [Get Started](https://docs.cohere.com/docs/the-cohere-platform) and [Cookbooks](https://docs.cohere.com/page/cookbooks) sections in our documentation.

###### What are some best practices and techniques for prompt engineering, specifically when incorporating documents into a chat model's response?


For general recommendations on prompt engineering check the following resources:

[Prompt Engineering Basics](https://cohere.com/llmu/prompt-engineering-basics)Guide- Tips on
[Crafting Effective Prompts](https://docs.cohere.com/v1/docs/crafting-effective-prompts) - Techniques of
[Advanced Prompt Engineering](https://docs.cohere.com/v1/docs/advanced-prompt-engineering-techniques).

For the most reliable results when working with external document sources, we recommend using a technique called Retrieval-Augmented Generation (RAG). You can learn about it here:

###### Where can I find code examples and tutorials for using the Cohere API with various programming languages and frameworks?


You can find a list of comprehensive tutorials and code examples in our [LLM University](https://cohere.com/llmu) hub and the [Cookbook](https://docs.cohere.com/v1/page/cookbooks) guides.

###### What are some project ideas or suggestions for developers using Cohere models?


Check out our [Cookbooks](https://docs.cohere.com/v1/page/cookbooks), which include step-by-step guides and project examples, and the [Cohere Discord server](https://discord.gg/co-mmunity) for inspiration from our developer community.

###### How can I access LLM University?


LLMU can be accessed directly from the [Cohere website](https://cohere.com/llmu). We periodically add more content and highly recommend you follow us on our socials to stay up to date.

###### Where can I find the documentation for Cohere's models and features?


You can find the documentation with the full Cohere model and feature overview [here](https://docs.cohere.com/).

## Troubleshooting Errors

###### Why am I unable to access and log in to the Cohere dashboard?


If you’re encountering difficulties logging into your Cohere dashboard, there could be a few reasons.

First, check our status page at status.cohere.com to see if any known issues or maintenance activities might impact your access.

If the status page doesn’t indicate any ongoing issues, the next step would be to reach out to our support teams. They’re always ready to assist and can be contacted at [support@cohere.com](mailto:support@cohere.com). Our support team will be able to investigate further and provide you with the necessary guidance to resolve the login issue.

###### How can I resolve issues with logging in and authentication?


We understand that login and authentication issues can be frustrating. Here are some steps you can take to troubleshoot and resolve these problems:

- Check Your Credentials: Ensure you use the correct username and password. It’s easy to make a typo, so double-check your credentials before logging in again.
- Clear Cache and Cookies: Sometimes, issues with logging in can be caused by cached data or cookies on your device. Try clearing your browser’s cache and cookies, then attempt to log in again.
- Contact Support: If none of the above steps resolve the issue, it’s time to contact our support team. We are equipped to handle a wide range of login and authentication issues and can provide further assistance. You can contact us at
[support@cohere.com](mailto:support@cohere.com).

###### What troubleshooting steps would you suggest for an issue suddenly occurring in a previously functional system or script?


If you’re facing any technical challenges or need guidance, our support team is here to help. Contact us at [support@cohere.com](mailto:support@cohere.com), and our technical support engineers will provide the necessary assistance and expertise to resolve your issues.

## Billing, Pricing, Licensing, Account Management

###### How can I get in touch with Cohere's support team?


Please reach out to our support team at [support@cohere.com](mailto:support@cohere.com). When reaching out to the support team, please keep the following questions in mind:

- What model are you referring to?
- Copy paste the error message
- Please note that this is our error message information:
- 400 - invalid combination of parameters
- 422 - request is malformed (eg: unsupported enum value, unknown param)
- 499 - request is canceled by the user
- 401 - invalid api token (not relevant on AWS)
- 404 - model not found (not relevant on AWS)
- 429 - rate limit reached (not relevant on AWS)


- Please note that this is our error message information:
- What is the request seq length you are passing in?
- What are the generation max tokens you are requesting?
- Are all the requests of various input/output shapes failing?
- Share any logs

###### Where can I find information about Cohere's pricing?


Please refer to our dedicated pricing page for most up-to-date [pricing](https://cohere.com/pricing).

###### How can I manage and understand the rate limits and usage of my API key?


Cohere offers two types of API keys: trial keys and production keys.

*Trial Key Limitations*

Trial keys are rate-limited depending on the endpoint you want to use. For example, the Embed endpoint is limited to 5 calls per minute, while the Chat endpoint is limited to 20 calls per minute. All other endpoints on trail keys are 1,000 calls per month. If you want to use Cohere endpoints in a production application or require higher throughput, you can upgrade to a production key.

*Production Key Specifications*

Production keys for all endpoints are rate-limited at 1,000 calls per minute, with unlimited monthly use and are intended for serving Cohere in a public-facing application and testing purposes. Usage of production keys is metered at price points which can be found on the Cohere [pricing page](https://cohere.com/pricing).

To get a production key, you’ll need to be the admin of your organization or ask your organization’s admin to create one. Please visit your [API Keys](https://dashboard.cohere.com/api-keys) > [Dashboard](https://dashboard.cohere.com/), where the process should take less than three minutes and will generate a production key that you can use to serve Cohere APIs in production.

###### How can I monitor and manage my token usage and API calls for personal projects within the limitations of a free plan?


Cohere offers a convenient way to keep track of your usage and billing information. All our endpoints provide this data as metadata for each conversation, which is directly accessible via the API. This ensures you can easily monitor your usage.
Our Dashboard provides an additional layer of control for standard accounts. You can set a monthly spending limit to manage your expenses effectively. To learn more about this feature and how to enable it, please visit the Billing & Usage section on the Dashboard, specifically the [Spending Limit](https://dashboard.cohere.com/billing?tab=spending-limit) tab.

###### What is the process for making changes to my account, and who should I contact for specific requests?


If you need to make changes to your account or have specific requests, Cohere has a straightforward process. All the essential details about your account can be found under the [Dashboard](https://dashboard.cohere.com/). This is a great starting point for any account-related queries.

However, if you have a request that requires further assistance or if the changes you wish to make are not covered by the Dashboard, our support team is here to help. Please feel free to reach out directly at [support@cohere.com](mailto:support@cohere.com) or ask your question in our [Discord community](https://discord.gg/co-mmunity).

###### How can I get in touch with Cohere support to discuss plan options and pricing?


Please reach out to our Sales team at [sales@cohere.com](mailto:sales@cohere.com)

###### How is the cost of using Cohere's API calculated and what factors influence the number of billed tokens?


Cohere’s API pricing is based on a simple and transparent token-based model. The cost of using the API is calculated based on the number of tokens consumed during the API calls.

Check our [pricing page](https://cohere.com/pricing) for more information.

###### What are the rate limits for the free trial API, and how is the monthly limit calculated?


Trial keys are rate-limited depending on the endpoint you want to use, and the monthly limit is 1000 calls per month.

Check our [free trial documentation](https://docs.cohere.com/docs/rate-limits#trial-key-limitations) for more information.

###### Is it possible for a small startup or any commercial entity to use Cohere's technology for production or commercial purposes, and if so, what licenses or permissions are required?


Absolutely! Cohere’s platform empowers businesses, including startups, to leverage our technology for production and commercial purposes.

In terms of usage guidelines, we’ve compiled a comprehensive set of resources to ensure a smooth and compliant experience. You can access these guidelines [here](https://docs.cohere.com/docs/usage-guidelines).

We’re excited to support your business and its unique needs. If you have any further questions or require additional assistance, please don’t hesitate to reach out to our team at [sales@cohere.com](mailto:sales@cohere.com) or [support@cohere.com](mailto:support@cohere.com) for more details.

###### How can I manage my Cohere account, specifically regarding deletion, team invitations, and account merging?


You can access all the necessary tools and information through your account’s dashboard [here](https://dashboard.cohere.com/team).

If you’re unable to find the specific feature or information regarding merging accounts, our support team is always eager to help.

Simply start a new chat with them using the chat bubble on our website or reach out via email to [support@cohere.com](mailto:support@cohere.com).

###### How does the token limit work for multiple documents in a single query?


The token limit for multiple documents in a single query can vary depending on the model or service you’re using. For instance, our Chat Model has a long-context window of 128k tokens. This means that as long as the combined length of your input and output tokens stays within this limit, the number of documents you include in your query shouldn’t be an issue.

It’s important to note that different models may have different token and document limits. To ensure you’re working within the appropriate parameters, we’ve provided detailed information about these limits for each model in [this](https://docs.cohere.com/docs/models) model overview section.

We understand that managing token limits can be a crucial aspect of your work, and we’re here to support you in navigating these considerations effectively. If you have any further questions or require additional assistance, please don’t hesitate to reach out to our team at [support@cohere.com](mailto:support@cohere.com)

###### What are the pricing plans and models available for Cohere's API endpoints, and are there any additional costs associated with specific features or workflows?


Please find the pricing information about our model and services [here](https://cohere.com/pricing).

Should you have any further questions please feel free to reach out to our sales team at [sales@cohere.com](mailto:sales@cohere.com) or [support@cohere.com](mailto:support@cohere.com) for more details.

## Legal, Security, Data Privacy

###### Is my data private and secure when using Cohere platform, or is it accessible to others?


When you’re using Cohere models via our Platform, we segment your data using logical segmentation. When using Cohere models via a private or cloud deployment from one of our partners, your data is not shared with Cohere.

###### Could you provide more specific information about your GDPR compliance practices and policies, including any relevant documentation, so that I can forward the details to our legal team for review?


We support our enterprise customers’ privacy and data security compliance needs by offering multiple deployment options so customers can control access to data and personal information under their control. Seamlessly complete your privacy and security compliance reviews by visiting Cohere’s [Trust Center](https://cohere-inc.secureframetrust.com/) where you can request a copy of our SOC 2 Type II Report, and review our privacy documentation and other compliance resources.

###### How can we ensure we follow best practices to secure our system using Cohere, and how can we communicate that to our clients when they raise concerns about potential vulnerabilities associated with using AI?


When it comes to using AI models securely, two important areas stand out.

#### 1. Model Security and Safety

This responsibility lies primarily with the model provider, and at Cohere, we are deeply committed to ensuring responsible AI development. Our team includes some of the top experts in AI security and safety. We lead through various initiatives, including governance and compliance frameworks, safety and security protocols, strict data controls for model training, and industry thought leadership.

#### 2. Secure Application Development with Cohere Models:

While Cohere ensures the model’s security, customers are responsible for building and deploying applications using these models securely. A strong focus on a Secure Product Lifecycle is essential, and our models integrate seamlessly into this process. Core security principles remain as relevant in the AI space as elsewhere. For example, robust authentication protocols should exist for all users, services, and micro-services. Secrets, tokens, and credentials must be tightly controlled and regularly monitored.

#### Our recommendations:

- Implement responsible AI and governance policies in your AI development process, focusing on customer safety and security.
- Continuously monitor the performance of your applications and promptly address any issues that arise.

We also regularly share insights and best practices on AI security on our blog. Here are a few examples: [1](https://cohere.com/blog/how-generative-ai-has-changed-security-2), [2](https://cohere.com/blog/tackling-ai-security-risks-with-eyes-wide-open), [3](https://cohere.com/blog/building-robust-enterprise-ai-solutions-insights-on-llm-performance-safety-and-future-trends).

###### What if I have more questions?


If there’s anything not covered in this document, you’re welcome to reach to us with [this form](https://forms.gle/Mwbn42rrv5vokwFg6).

---

## Source: https://docs.cohere.com/docs/models

# An Overview of Cohere's Models

Cohere has a variety of models that cover many different use cases. If you need more customization, you can [train a model](/docs/fine-tuning) to tune it to your specific use case.

Cohere models are currently available on the following platforms:

At the end of each major section below, you’ll find technical details about how to call a given model on a particular platform.

## What can These Models Be Used For?

In this section, we’ll provide some high-level context on Cohere’s offerings, and what the strengths of each are.

- The Command family of models includes
[Command A](https://docs.cohere.com/docs/command-a),[Command R7B](https://docs.cohere.com/docs/command-r7b),[Command A Translate](https://docs.cohere.com/docs/command-a-translate),[Command A Reasoning](https://docs.cohere.com/docs/command-a-reasoning),[Command A Vision](https://docs.cohere.com/docs/command-a-vision),[Command R+](/docs/command-r-plus),[Command R](/docs/command-r), and[Command](https://cohere.com/models/command?_gl=1*15hfaqm*_ga*MTAxNTg1NTM1MS4xNjk1MjMwODQw*_ga_CRGS116RZS*MTcxNzYwMzYxMy4zNTEuMS4xNzE3NjAzNjUxLjIyLjAuMA..). Together, they are the text-generation LLMs powering tool-using agents,[retrieval augmented generation](/docs/retrieval-augmented-generation-rag)(RAG), translation, copywriting, and similar use cases. They work through the[Chat](/reference/chat)endpoint, which can be used with or without RAG. [Rerank](https://cohere.com/blog/rerank/?_gl=1*1t6ls4x*_ga*MTAxNTg1NTM1MS4xNjk1MjMwODQw*_ga_CRGS116RZS*MTcxNzYwMzYxMy4zNTEuMS4xNzE3NjAzNjUxLjIyLjAuMA..)is the fastest way to inject the intelligence of a language model into an existing search system. It can be accessed via the[Rerank](/reference/rerank-1)endpoint.[Embed](https://cohere.com/models/embed?_gl=1*1t6ls4x*_ga*MTAxNTg1NTM1MS4xNjk1MjMwODQw*_ga_CRGS116RZS*MTcxNzYwMzYxMy4zNTEuMS4xNzE3NjAzNjUxLjIyLjAuMA..)improves the accuracy of search, classification, clustering, and RAG results. It powers the[Embed](/reference/embed)endpoint.[Cohere Transcribe](/docs.cohere.com/docs.cohere.com/false/false/everyone/transcribe)is Cohere’s dedicated audio transcription model for automatic speech recognition (ASR). It powers the[Audio Transcriptions](/docs.cohere.com/docs.cohere.com/false/false/everyone/reference/create-audio-transcription)endpoint.- The
[Aya](https://cohere.com/research/aya)family of models are aimed at expanding the number of languages covered by generative AI. Aya Expanse covers 23 languages, and Aya Vision is fully multimodal, allowing you to pass in images and text and get a single coherent response. Both are available on the[Chat](/reference/chat)endpoint.

## Command

Command is Cohere’s default generation model that takes a user instruction (or command) and generates text following the instruction. Our Command models also have conversational capabilities, meaning they are well-suited for chat applications, and Command A Vision can interact with [image inputs](https://docs.cohere.com/docs/image-inputs).

### Using Command Models on Different Platforms

In this table, we provide some important context for using Cohere Command models on Amazon Bedrock, Amazon SageMaker, and more.

## Embed

These models can be used to generate embeddings from text or classify it based on various parameters. Embeddings can be used for estimating semantic similarity between two sentences, choosing a sentence which is most likely to follow another sentence, or categorizing user feedback. The Representation model comes with a variety of helper functions, such as for detecting the language of an input.

### Using Embed Models on Different Platforms

In this table, we provide some important context for using Cohere Embed models on Amazon Bedrock, Amazon SageMaker, and more.

## Rerank

The Rerank model can improve created models by re-organizing their results based on certain parameters. This can be used to improve search algorithms.

### Using Rerank Models on Different Platforms

In this table, we provide some important context for using Cohere Rerank models on Amazon Bedrock, SageMaker, and more.

Rerank accepts full strings rather than tokens, so the token limit works a little differently. Rerank will automatically chunk documents longer than 510 tokens, and there is therefore no explicit limit to how long a document can be when using rerank. See our [best practice guide](/docs/reranking-best-practices) for more info about formatting documents for the Rerank endpoint.

## Audio

Cohere Transcribe is our dedicated model for audio-in, text-out automatic speech recognition (ASR) workloads.

### Using Audio Models on Different Platforms

Cohere Transcribe isn’t available on other platforms.

## Aya

[Aya](https://cohere.com/research/aya) is a family of multilingual large language models designed to expand the number of languages covered by generative AI for purposes of research and to better-serve minority linguistic communities.

Its 8-billion and 32-billion parameter “Expanse” offerings are optimized to perform well in these 23 languages: Arabic, Chinese (simplified & traditional), Czech, Dutch, English, French, German, Greek, Hebrew, Hebrew, Hindi, Indonesian, Italian, Japanese, Korean, Persian, Polish, Portuguese, Romanian, Russian, Spanish, Turkish, Ukrainian, and Vietnamese.

Its 8-billion and 32-billion parameter “Vision” models are state-of-the-art multimodal models excelling at a variety of critical benchmarks for language, text, and image capabilities.

### Using Aya Models on Different Platforms

Aya isn’t available on other platforms, but it can be used with WhatsApp. Find more information [here](https://docs.cohere.com/docs/aya#aya-expanse-integration-with-whatsapp).

---

## Source: https://docs.cohere.com/docs/aya

# Aya Family of Models

[Aya](https://cohere.com/research/aya) is a family of multilingual large language models that are designed to expand the number of languages covered by generative AI. The two documents in this section cover the two primary Aya offerings:

[Aya Vision](https://docs.cohere.com/docs/aya-multimodal), a powerful multi-modal model;[Aya Expanse](/docs/aya-expanse), a highly performant multilingual model able to work with 23 languages.

Check them out for far more detail.

## Find More

If you want to see more substantial projects you can check out these notebooks ([source](https://huggingface.co/CohereForAI/aya-expanse-32b)):