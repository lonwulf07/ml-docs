# Zenml Documentation
> Scraped on: 2026-03-30 | Root Source: [https://www.zenml.io/home](https://www.zenml.io/home)



---

## Source: https://www.zenml.io/home

# The AI Control Plane

One layer for orchestration, versioning, and governance — from training pipelines to agent evals, local to Kubernetes.

## Trusted by 1,000s of top companies to standardize their AI workflows

## Ready to Unify Your AI Platform?

Join thousands of teams using ZenML to eliminate chaos and accelerate AI delivery

## Use ZenML with any framework

60+ integrations across the AI ecosystem. From sklearn to LangGraph.

Whitepaper

## ZenML as your Enterprise-Grade AI Platform

We have put down our expertise around building production-ready, scalable AI platforms, building on insights from our top customers.

## Customer Stories

Learn how teams are using ZenML to save time and simplify their MLOps.

[ ](/case-study/jetbrains)

### Creating a Unified AI Platform: How JetBrains Centralizes ML on Kubernetes with ZenML

[ ](/case-study/adeo-leroy-merlin)

### How ADEO Leroy Merlin decreased their time-to-market from 2 months to 2 weeks

[ ](/case-study/brevo)

### How Brevo accelerated model development by 80% using ZenML

[ ](/case-study/cross-screen-media)

### How Cross Screen Media Trains Models for 210 Markets in Hours, Not Weeks, with ZenML

[ ](/llmops-database)

ZenML tracks production AI deployments across the industry

See the LLMOps database here

ZenML offers the capability to build end-to-end ML workflows that seamlessly integrate with various components of the ML stack. This enables teams to accelerate their time to market by bridging the gap between data scientists and engineers.

Harold Gimenez

SVP R&D at HashiCorp

ZenML allows orchestrating ML pipelines independent of any infrastructure or tooling choices. ML teams can free their minds of tooling FOMO from the fast-moving MLOps space, with the simple and extensible ZenML interface.

Richard Socher

Former Chief Scientist Salesforce and Founder of You.com

ZenML allowed us a fast transition between dev to prod. It's no longer the big fish eating the small fish – it's the fast fish eating the slow fish.

François Serra

ML Engineer / ML Ops / ML Solution architect at ADEO Services

Many teams still struggle with managing models, datasets, code, and monitoring as they deploy ML models into production. ZenML provides a solid toolkit for making that easy in the Python ML world.

Chris Manning

Professor of Linguistics and CS at Stanford

Thanks to ZenML we've set up a pipeline where before we had only Jupyter notebooks. It helped us tremendously with data and model versioning.

Francesco Pudda

Machine Learning Engineer at WiseTech Global

ZenML allows you to quickly and responsibly go from POC to production ML systems while enabling reproducibility, flexibility, and above all, sanity.

Goku Mohandas

Founder of MadeWithML

News

## Latest ZenML Updates

Stay updated on the latest developments, announcements, and updates from the ZenML ecosystem.

[See all news](/blog)

No compliance headaches

## Your VPC, your data

ZenML is a metadata layer on top of your existing infrastructure, meaning all data and compute stays on your side.

### ZenML is SOC2 and ISO 27001 Compliant

We Take Security Seriously

ZenML is SOC2 and ISO 27001 compliant, validating our adherence to industry-leading standards for data security, availability, and confidentiality in our ongoing commitment to protecting your ML workflows and data.

## Looking to Get Ahead in MLOps & LLMOps?

Subscribe to the ZenML newsletter and receive regular product updates, tutorials, examples, and more.

We care about your data in our [privacy policy](/privacy-policy).

Support

## Frequently asked questions

Everything you need to know about the product.

## What is the difference between ZenML and other machine learning orchestrators?

[many orchestrators](https://docs.zenml.io/stacks/orchestrators)natively and can be extended to work with

[custom orchestrators](https://docs.zenml.io/stacks/orchestrators/custom). Read more about how ZenML

[compares to orchestrators](/vs/zenml-vs-orchestrators).

## Does ZenML integrate with my MLOps stack?

[Kubernetes](/integrations/kubernetes),

[AWS](/integrations/aws),

[GCP Vertex AI](/integrations/gcp-vertexai),

[Kubeflow](/integrations/kubeflow),

[Apache Airflow](/integrations/airflow), and many more. Artifact, secrets, and container storage for all major cloud providers.

## Does ZenML help in GenAI / LLMOps use-cases?

[LlamaIndex](https://www.llamaindex.ai/),

[OpenAI](https://openai.com/),

[LangChain](https://www.langchain.com/), and more. Check out our

[projects](/projects)for real-world examples.

## How can I build my MLOps/LLMOps platform using ZenML?

[user guides](https://docs.zenml.io/user-guides), then extend with experiment trackers, model deployers, model registries and more from the

[stack components](https://docs.zenml.io/stacks)library.

## What is the difference between the open source and Pro product?

[Apache 2.0 on GitHub](https://github.com/zenml-io/zenml). Pro offers a managed version plus Pro-only features for scaling teams. Learn more on the

[comparison page](/open-source-vs-pro).

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/blog/the-experimentation-phase-is-over-key-findings-from-1-200-production-deployments

## On this page

The LLMOps Database crossed 1,200 case studies this month. Since I last published a summary, I’ve catalogued another 400 production deployments: real systems handling real traffic, built by teams who’ve learned the hard way what actually works when the on-call engineer is asleep.

This post distils the key findings. I begin by examining why general engineering maturity remains the primary predictor of success. From there, I explore six specific trends defining the current landscape: the shift to context engineering, the migration of guardrails into infrastructure, the rise of “shadow testing,” and the stabilizing role of the Model Context Protocol (MCP).

For the full analysis with detailed case studies across all themes, [[read the complete report →]](https://www.zenml.io/blog/what-1200-production-deployments-reveal-about-llmops-in-2025)

## The Core Finding: Engineering Remains Central

A consistent pattern emerges across 1,200 case studies. Teams shipping reliable production LLM systems rely heavily on robust software engineering fundamentals. While AI-specific skills like context engineering are vital, they operate best when supported by solid infrastructure.

Generative AI does not bypass traditional engineering disciplines. Indeed, the challenge often lies less in model capability and more in the infrastructure required to deploy that capability reliably. Distributed systems, networking, durable execution, and state management provide the necessary foundation. These core skills allow specialized AI techniques to function at enterprise scale.

[LinkedIn’s AI team](https://www.zenml.io/llmops-database/building-and-scaling-a-production-generative-ai-assistant-for-professional-networking) noted that while prompt engineering involves significant nuance, the surrounding system demands rigorous engineering. Building reliable products requires async pipelines, streaming response handling, and capacity management alongside model optimization.

[GetOnStack’s experience](https://www.zenml.io/llmops-database/production-deployment-challenges-and-infrastructure-gaps-for-multi-agent-ai-systems) illustrates this balance. Their multi-agent system costs escalated from $127 to $47,000 in weekly costs over four weeks due to an undetected infinite conversation loop. They subsequently invested six weeks in building message queues, circuit breakers, and monitoring. These standard distributed systems components proved essential for controlling their AI agents.

Once this engineering foundation is established, however, distinct patterns emerge in how teams handle the unique challenges of LLMs. Beyond the basics of reliability and uptime, specific architectural choices set successful deployments apart.

## Six Themes Emerging from Production

### 1. From Demos to Real Business Outcomes

The proof-of-concept era is visibly ending. The database now regularly tracks systems handling genuinely critical business functions with quantified impact.

[Stripe’s fraud detection](https://www.zenml.io/llmops-database/building-economic-infrastructure-for-ai-with-foundation-models-and-agentic-commerce) improved card-testing accuracy from 59% to 97% for their largest merchants, on infrastructure processing 1.3% of global GDP. [nib’s chatbot ](https://www.zenml.io/llmops-database/transforming-agent-and-customer-experience-with-generative-ai-in-health-insurance)generates $22 million in documented savings across 4 million interactions. [Ramp’s policy agent](https://www.zenml.io/llmops-database/building-trustworthy-llm-agents-for-automated-expense-management) handles 65% of expense approvals autonomously.

The organisations extracting real value aren’t the ones with the most innovative demos. They’re the ones doing the unglamorous engineering work: evaluation pipelines, guardrails, designing for uncertainty.

### 2. Context Engineering > Prompt Engineering

If 2023 was the year of prompt engineering (learning how to talk to models), 2024-2025 have marked the rise of context engineering: learning how to architect the information models consume.

The core insight: just because you *can* fit everything into a million-token context window doesn’t mean you *should*. [Manus found](https://www.zenml.io/llmops-database/context-engineering-for-production-ai-agents-at-scale) that “context rot” begins between 50k–150k tokens regardless of theoretical limits. [Dropbox](https://www.zenml.io/llmops-database/context-engineering-for-agentic-ai-systems) encountered “analysis paralysis” when exposing too many tools. The model spent more time deciding which tool to use than actually acting.

The winning pattern is “just-in-time” context injection: dynamically assembling only what’s needed based on the user’s immediate state. [Shopify](https://www.zenml.io/llmops-database/building-production-ready-ai-assistant-with-agentic-architecture) collocates instructions with tool outputs rather than loading everything upfront. [Elyos AI](https://www.zenml.io/llmops-database/building-low-latency-voice-ai-agents-for-home-services) actively removes context that’s served its purpose, calling it “just-in-time in, just-in-time out.”

Leaner contexts make models smarter, along with being faster and cheaper. The million-token window is a ceiling to stay under, rather than a feature to exploit.

### 3. Guardrails Move from Prompts to Infrastructure

The limitations of prompt-based guardrails are now well understood. As [Oso’s framework](https://www.zenml.io/llmops-database/production-ready-agent-behavior-identity-intent-and-governance) puts it: “what 1997 was for SQL injection, 2025 is for prompt injection.”

The most reliable guardrails are implemented in code, not prompts. Oso’s “session tainting” automatically blocks agents from using communication tools after they’ve touched both untrusted content and sensitive data, regardless of what the model tries to do. [Wakam](https://www.zenml.io/llmops-database/enterprise-scale-ai-agent-deployment-in-insurance) implements dual-layer permissions: one controlling what humans see, another controlling what agents access. [Komodo Health](https://www.zenml.io/llmops-database/building-a-multi-agent-healthcare-analytics-assistant-with-llm-powered-natural-language-queries) stripped their LLM of all authorisation logic entirely. The APIs the LLM calls handle security, and if they return 403 Forbidden, the LLM simply says “I can’t access that.”

The pattern is clear: architectural constraints provide guarantees that prompt engineering cannot.

### 4. Evaluation Grows Up

The phrase “evals are the new unit tests” has become a mantra for good reason. [Ramp’s approach](https://www.zenml.io/llmops-database/building-trustworthy-llm-agents-for-automated-expense-management) is instructive: they discovered that user feedback requires careful interpretation. Finance teams might approve expenses that technically violate policy out of convenience. Treating user actions as ground truth would bias the system toward excessive leniency. Their solution: “golden datasets” independently labelled to establish correct decisions based solely on available information.

Shadow testing before live deployment has become standard for high-stakes applications. Ramp runs agents in “shadow mode” on real transactions, comparing predictions to human decisions. They only enable live actions once shadow accuracy hits specific thresholds, testing guardrails on real financial data without risking a dollar.

Circuit breakers acknowledge that perfect reliability is impossible. [Cox Automotive ](https://www.zenml.io/llmops-database/scaling-ai-agents-to-production-a-blueprint-for-autonomous-customer-service)implements hard limits on cost and conversation turns; when thresholds are exceeded, the system gracefully hands off to humans. The goal isn’t preventing all failures but ensuring failures are detected quickly and handled gracefully.

### 5. MCP Quietly Stabilises

While agent harnesses and memory systems remain in flux, the Model Context Protocol has achieved something unusual: relative stability. Enterprises are building servers, SaaS companies are exposing APIs, and a practical knowledge base is accumulating.

[Loblaws wrapped 50+ internal APIs](https://www.zenml.io/llmops-database/building-alfred-production-ready-agentic-orchestration-layer-for-e-commerce) so their orchestration agent could handle complex workflows like shopping for recipe ingredients. [Sentry’s MCP server ](https://www.zenml.io/llmops-database/scaling-an-mcp-server-for-error-monitoring-to-60-million-monthly-requests)handles 60 million requests per month with a three-person team.

But the database also documents MCP’s real challenges. [CloudQuery discovered ](https://www.zenml.io/llmops-database/building-and-operating-an-mcp-server-for-llm-powered-cloud-infrastructure-queries)that tool naming matters more than expected: a tool named `example_queries`

sat unused for two weeks; renaming it to `known_good_queries`

with a verbose description made it frequently used. Tools are prompts. [Digits explicitly rejected MCP](https://www.zenml.io/llmops-database/running-llm-agents-in-production-for-accounting-automation) for production: “all our data is internal and major security questions remain unresolved.”

MCP is settling into its appropriate role as infrastructure for connecting agents to existing systems, rather than a solution in itself.

### 6. Stop Waiting for the Frontier

There’s a seductive narrative that the next model release will solve your production problems. The database tells a different story.

[Cubic’s AI code review agent](https://www.zenml.io/llmops-database/reducing-false-positives-in-ai-code-review-agents-through-architecture-refinement) got *worse* when they gave it more tools. The agent became confused, generating false positives until developers stopped trusting it. Instead of a smarter model, they needed streamlining: fewer capabilities, better results. [Alexa’s team](https://www.zenml.io/llmops-database/transforming-a-voice-assistant-from-scripted-commands-to-generative-ai-conversation-at-scale) found that adding more few-shot examples *decreased *accuracy because the model overfitted to examples instead of reasoning.

[Stripe’s compliance lead](https://www.zenml.io/llmops-database/ai-powered-compliance-investigation-agents-for-enhanced-due-diligence) describes end-to-end automation as a “fairytale.” Instead, they decomposed complex reviews into bite-sized tasks on strict “rails,” ensuring that even unexpected model behaviour is contained to a single task.

The teams shipping systems that work aren’t waiting for GPT-6. [Robinhood](https://www.zenml.io/llmops-database/fine-tuning-and-multi-stage-model-optimization-for-financial-ai-agents) reduced P90 latencies from 55 seconds to under one second through hierarchical tuning (prompt optimisation, trajectory tuning, LoRA fine-tuning) rather than waiting for faster models. [Care Access](https://www.zenml.io/llmops-database/optimizing-medical-record-processing-with-prompt-caching-at-scale) cut costs 86% by separating static medical records (cached) from dynamic questions: pure infrastructure engineering.

The allure of the frontier is that it promises to make engineering unnecessary. It doesn’t. Better models shift where challenges lie; they don’t eliminate them.

## What This Means for Practitioners

The implication is straightforward: invest in engineering.

The organisations winning with LLMs are distinguished by their infrastructure, their evaluation practices, their operational discipline, and their willingness to treat AI systems with the same rigour they’d apply to any mission-critical technology. Model access and prompt libraries matter far less than these fundamentals.

The experimentation phase has ended. The engineering phase has begun.

[[Read the full report →]](https://www.zenml.io/blog/what-1200-production-deployments-reveal-about-llmops-in-2025) for detailed case studies on each theme, including specific architectural patterns, failure modes, and implementation details from companies including Stripe, Amazon, DoorDash, Shopify, LinkedIn, Manus, Ramp, Cox Automotive, and dozens more.

*The LLMOps Database is maintained by ZenML. We catalogue production LLM deployments to help practitioners learn from what’s actually working in the field. *[Explore the database →](https://www.zenml.io/llmops-database)

---

## Source: https://www.zenml.io/

# The AI Control Plane

One layer for orchestration, versioning, and governance — from training pipelines to agent evals, local to Kubernetes.

## Trusted by 1,000s of top companies to standardize their AI workflows

## Ready to Unify Your AI Platform?

Join thousands of teams using ZenML to eliminate chaos and accelerate AI delivery

## Use ZenML with any framework

60+ integrations across the AI ecosystem. From sklearn to LangGraph.

Whitepaper

## ZenML as your Enterprise-Grade AI Platform

We have put down our expertise around building production-ready, scalable AI platforms, building on insights from our top customers.

## Customer Stories

Learn how teams are using ZenML to save time and simplify their MLOps.

[ ](/case-study/jetbrains)

### Creating a Unified AI Platform: How JetBrains Centralizes ML on Kubernetes with ZenML

[ ](/case-study/adeo-leroy-merlin)

### How ADEO Leroy Merlin decreased their time-to-market from 2 months to 2 weeks

[ ](/case-study/brevo)

### How Brevo accelerated model development by 80% using ZenML

[ ](/case-study/cross-screen-media)

### How Cross Screen Media Trains Models for 210 Markets in Hours, Not Weeks, with ZenML

[ ](/llmops-database)

ZenML tracks production AI deployments across the industry

See the LLMOps database here

ZenML offers the capability to build end-to-end ML workflows that seamlessly integrate with various components of the ML stack. This enables teams to accelerate their time to market by bridging the gap between data scientists and engineers.

Harold Gimenez

SVP R&D at HashiCorp

ZenML allows orchestrating ML pipelines independent of any infrastructure or tooling choices. ML teams can free their minds of tooling FOMO from the fast-moving MLOps space, with the simple and extensible ZenML interface.

Richard Socher

Former Chief Scientist Salesforce and Founder of You.com

ZenML allowed us a fast transition between dev to prod. It's no longer the big fish eating the small fish – it's the fast fish eating the slow fish.

François Serra

ML Engineer / ML Ops / ML Solution architect at ADEO Services

Many teams still struggle with managing models, datasets, code, and monitoring as they deploy ML models into production. ZenML provides a solid toolkit for making that easy in the Python ML world.

Chris Manning

Professor of Linguistics and CS at Stanford

Thanks to ZenML we've set up a pipeline where before we had only Jupyter notebooks. It helped us tremendously with data and model versioning.

Francesco Pudda

Machine Learning Engineer at WiseTech Global

ZenML allows you to quickly and responsibly go from POC to production ML systems while enabling reproducibility, flexibility, and above all, sanity.

Goku Mohandas

Founder of MadeWithML

News

## Latest ZenML Updates

Stay updated on the latest developments, announcements, and updates from the ZenML ecosystem.

[See all news](/blog)

No compliance headaches

## Your VPC, your data

ZenML is a metadata layer on top of your existing infrastructure, meaning all data and compute stays on your side.

### ZenML is SOC2 and ISO 27001 Compliant

We Take Security Seriously

ZenML is SOC2 and ISO 27001 compliant, validating our adherence to industry-leading standards for data security, availability, and confidentiality in our ongoing commitment to protecting your ML workflows and data.

## Looking to Get Ahead in MLOps & LLMOps?

Subscribe to the ZenML newsletter and receive regular product updates, tutorials, examples, and more.

We care about your data in our [privacy policy](/privacy-policy).

Support

## Frequently asked questions

Everything you need to know about the product.

## What is the difference between ZenML and other machine learning orchestrators?

[many orchestrators](https://docs.zenml.io/stacks/orchestrators)natively and can be extended to work with

[custom orchestrators](https://docs.zenml.io/stacks/orchestrators/custom). Read more about how ZenML

[compares to orchestrators](/vs/zenml-vs-orchestrators).

## Does ZenML integrate with my MLOps stack?

[Kubernetes](/integrations/kubernetes),

[AWS](/integrations/aws),

[GCP Vertex AI](/integrations/gcp-vertexai),

[Kubeflow](/integrations/kubeflow),

[Apache Airflow](/integrations/airflow), and many more. Artifact, secrets, and container storage for all major cloud providers.

## Does ZenML help in GenAI / LLMOps use-cases?

[LlamaIndex](https://www.llamaindex.ai/),

[OpenAI](https://openai.com/),

[LangChain](https://www.langchain.com/), and more. Check out our

[projects](/projects)for real-world examples.

## How can I build my MLOps/LLMOps platform using ZenML?

[user guides](https://docs.zenml.io/user-guides), then extend with experiment trackers, model deployers, model registries and more from the

[stack components](https://docs.zenml.io/stacks)library.

## What is the difference between the open source and Pro product?

[Apache 2.0 on GitHub](https://github.com/zenml-io/zenml). Pro offers a managed version plus Pro-only features for scaling teams. Learn more on the

[comparison page](/open-source-vs-pro).

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/features/iterate-at-warp-speed

Speed

# From Idea to Production at Warp Speed

Accelerate your ML workflow with seamless local-to-cloud transitions and smart caching

## From Jupyter to the Cloud

Elevate your ML workflows from local experiments to production-grade deployments.

- Frictionless transition between development and production environments.
- Automated containerization ensures reproducibility across infrastructures.
- Schedule workflows seamlessly.

## Simply Add Decorators To Existing code

Write once, run anywhere. Harness the power of decorators to transform your existing codebase.

- Simple Pythonic SDK that just works.
- Write once, deploy anywhere: from laptops to Kubernetes clusters.
- Accelerate team-wide adoption of MLOps best practices.

## Smart caching for faster iterations

Maximize efficiency with smart, automated caching mechanisms.

- Slash compute costs across your organization.
- Blazing fast development speed with automated data versioning.
- Eliminate idle GPU time, optimizing resource utilization.

After a benchmark on several solutions, we choose ZenML for its stack flexibility and its incremental process. We started from small local pipelines and gradually created more complex production ones. It was very easy to adopt.

Clément Depraz

Data Scientist at Brevo

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/features/auto-track-everything

Observability

# Full Visibility, Zero Effort

Automatic logging and versioning for truly reproducible ML workflows

## Comprehensive automatic logging

Achieve unparalleled observability across your ML pipeline with zero-effort tracking.

- Automate logging of code, data, metadata, and LLM prompts.
- Maintain consistent visibility across development and production environments.
- Streamline debugging and auditing with granular execution insights.

## Seamless Version Control

Ensure reproducibility and traceability in your ML/GenAI pipelines.

- Native integration with Git repositories for code versioning.
- Automatic linking of model artifacts to specific code commits.
- Effortless recreation of experiments and model versions.

## Automatic Containerization

Guarantee consistency from development to production with automated containerization.

- Auto-generate Docker containers for your ML environments.
- Eliminate "works on my machine" issues across your team.
- Enable anyone to run fully reproducible code without DevOps expertise.

ZenML's automatic logging and containerization have transformed our MLOps pipeline. We've drastically reduced environment inconsistencies and can now reproduce any experiment with just a few clicks. It's like having a DevOps engineer built into our ML framework.

Liza Bykhanova

Data Scientist at Competera

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/features/shared-ml-building-blocks

Reusability

# Collaborate, Innovate, Accelerate

Boost team productivity with reusable components and standardized configurations

## Modular, Reusable ML Components

Build once, use everywhere. Share steps and pipelines across your team to accelerate development. Accelerate development with a library of shareable ML building blocks.

- Create and share pipeline steps and components across your organization.
- Implement DRY (Don't Repeat Yourself) principles in ML workflows.
- Boost team productivity through standardized, battle-tested modules.

## Standardized infrastructure configs

Ensure consistency and optimize resource utilization across ML projects.

- Implement uniform deployment processes across teams.
- Minimize environment-related debugging time.
- Enforce cost-effective practices through standardized configs.

## Centralized ML Asset Management

Unify control and visibility of your entire ML ecosystem.

- Manage models, code, and data coherently across distributed infrastructure.
- Seamlessly transition between cloud resources and local development.
- Enhance security with centralized access control and audit trails.

ZenML's approach to standardization and reusability has been a game-changer for our ML teams. We've significantly reduced development time with easy development of pipelines, and our cross-team collaboration has never been smoother. The centralized asset management gives us the visibility and control we needed to scale our ML operations confidently.

Maximilian Balluff

Lead AI Engineer at IT4IPM GmbH

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/features/backend-flexibility-zero-lock-in

Flexibility

# Freedom to Choose, Power to Switch

One framework for all your MLOps and LLMOps needs, with the flexibility to change as you grow

## Seamless Backend Interoperability

Liberate your ML pipelines from infrastructure constraints.

- Effortlessly switch between orchestration engines and artifact stores.
- Multi-cloud support ensures true vendor independence.
- Maintain consistent workflows across diverse environments.

## Unified ML and GenAI framework

Optimize resource utilization across traditional ML and generative AI workloads.

- Access cost-effective and readily available GPUs without code modifications.
- Seamlessly transition between CPU and GPU environments.
- Leverage unified abstractions for diverse ML and GenAI tasks.

## Customizable LLMOps Stack

Tailor your large language model operations to your specific requirements.

- Automate updating and testing of your RAG applications.
- Flexible integrations with leading fine-tuning frameworks, Hugging Face Accelerate, Axolotl, PyTorch Lightning and more.
- Get a central picture of all LLM models with prompts, metrics, and more.

With ZenML, we're no longer tied to a single cloud provider. The flexibility to switch backends between AWS and GCP has been a game-changer for our team.

Dragos Ciupureanu

Koble.ai

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/features/limitless-scaling

Scale

# Scale Your ML Operations Without Limits

Effortlessly deploy across clouds and infrastructures with unified resource management

## Multi-cloud and K8s Flexibility

Deploy on your terms. ZenML integrates with Vertex AI, Sagemaker, Azure ML, Kubeflow, Airflow, and more. Your pipelines, your choice of infrastructure.

- Effortless scale from local development to enterprise infrastructure.
- Easy one-click setups to connect your compute plane.
- Infrastructure-agnostic code eliminates vendor lock-in.

## Unified Resource Orchestration

Abstract away infrastructure complexities. Define compute requirements once, deploy everywhere.

- Streamline resource allocation with high-level CPU, memory, and GPU specifications.
- Shield data scientists from intricate cloud configurations.
- Seamlessly transition between local, cloud, and hybrid environments.

## Zero-Friction Cloud Provisioning

Accelerate cloud adoption with minimal DevOps overhead.

- Provision or register cloud resources without deep infrastructure expertise.
- Leverage our Terraform modules or single-click deployments for rapid setup.
- Standardize team onboarding with templated infrastructure solutions.

ZenML allowed us a fast transition between dev to prod. It’s no longer the big fish eating the small fish – it’s the fast fish eating the slow fish

François Serra

ML Engineer / ML Ops / ML Solution architect at ADEO Services

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/features/streamline-cloud-expenses

Optimization

# Optimize Your ML Spend

Gain clarity on resource usage and costs across your entire ML infrastructure

## Eliminate GPU Idle Time

Know where your money goes. Optimize GPU utilization without the infrastructure hassle.

- Automatically deploy workloads to GPUs when needed.
- Intelligent shutdown of GPU resources post-task completion.
- Minimize costs by eliminating idle GPU time.

## Streamlined Cost-Effective MLOps

Implement efficient practices across your ML projects with ease. Align your ML initiatives with smart resource allocation strategies.

- Automatically deploy workloads to GPUs when needed.
- Intelligent shutdown of GPU resources post-task completion.
- Minimize costs by eliminating idle GPU time.

## On-Demand Compute for ML Workflows

Leverage cloud resources effectively with seamless scaling. Optimize cloud spend while maintaining full flexibility in your ML operations.

- Deploy compute resources only when your ML pipelines need them.
- Automatic resource provisioning and de-provisioning based on workload.
- Integrate effortlessly with your existing ML development process.

Our data scientists are now autonomous in writing their pipelines & putting it in prod, setting up data-quality gates & alerting easily.

François Serra

ML Engineer / ML Ops / ML Solution architect at ADEO Services

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/pro

# Supercharge your MLOps with a fully-managed control plane

Forget the infrastructure setup and security concerns. Get a single pane of glass view into your entire organization.

## Trusted by 1,000s of top companies to standardize their AI workflows

"ZenML cuts out a lot of the infrastructure busywork so I can focus more on the tasks relevant to me. ZenML Pro helps us to keep an overview, as all components we need for MLOps, including documentation and metrics are available in one place!"

Florian Pfisterer

ML Engineer, Hema.to

We guide you from the first minute

## Get set up in less than a day

When you choose ZenML Pro, we don’t just hand over the keys. We make sure your infrastructure is ready, your pipelines are running, and your data scientists are onboarded.

### Guided Onboarding

Get personalized support to write your first ML pipelines, ensuring a smooth start on your MLOps journey with ZenML.

### Seamless Infrastructure Setup

We handle the setup of your MLOps infrastructure, so you can focus on building exceptional models. Bring your own cloud!

### Production Ready

Our experts will help your teams to connect your workflow and set up initial automations, streamlining your operations.

Flexibility

## Organize assets into Projects

Safe, isolated environments to structure your projects and separate concerns between teams.

[Learn More](/features/organize-assets-into-projects)

Optimization

## Streamlined Pipeline Management

Enhanced pipeline controls including the ability to create run templates and trigger from the dashboard.

[Learn More](/features/streamlined-pipeline-management)

Governance

## Role-based access control and permissions

Ensure high security standards by giving granular permissions and access to the entire team.

[Learn More](/features/role-based-access-control-and-permissions)

Speed

## Enterprise-Grade Support and Onboarding

Get access to our network of experts for advice on setting up your MLOps platform and onboarding onto ZenML.

[Learn More](/features/enterprise-grade-support-and-onboarding)

No compliance headaches

## Your VPC, your data

ZenML is a metadata layer on top of your existing infrastructure, meaning all data and compute stays on your side.

ZenML is SOC2 and ISO 27001 Compliant

### We Take Security Seriously

ZenML is SOC2 and ISO 27001 compliant, validating our adherence to industry-leading standards for data security, availability, and confidentiality in our ongoing commitment to protecting your ML workflows and data.

Open Source vs Pro

## ZenML Pro is Open Source and More

Built from the foundations the Open Source product, ZenML Pro is the best way to scale ZenML usage in your team.

### Managed control plane

ZenML Pro offers multi-tenant, fully-managed ZenML deployments. Separate your team into workspaces, and deploy dev, staging, and production servers separately.

### Roles and Permissions

ZenML Pro tenants have built-in roles and permissions, as an extension to the open-source product. We connect ZenML with your OIDC provider and offer SSO.

### Control and configurability

ZenML Pro control plane allows you to run ZenML pipelines directly from the server, and features enhanced configurability for your pipeline builds.

### Enhanced observability

ZenML Pro tenants have an enhanced dashboard with more features including a model control plane to view all your ML models, and the ability to trigger pipelines, do CI/CD and lots more.

"ZenML offers the capability to build end-to-end ML workflows that seamlessly integrate with various components of the ML stack, such as different providers, data stores, and orchestrators."

Harold Giménez

SVP R&D at HashiCorp

"ZenML allows you to quickly and responsibly go from POC to production ML systems while enabling reproducibility, flexibility, and above all, sanity."

Goku Mohandas

Founder of MadeWithML

"ZenML allows orchestrating ML pipelines independent of any infrastructure or tooling choices. ML teams can free their minds of tooling FOMO from the fast-moving MLOps space, with the simple and extensible ZenML interface."

Richard Socher

Former Chief Scientist Salesforce and Founder of You.com

A lot of our teams struggle to bring sanity to their model training processes. ZenML is built in a way that encourages good, maintainable pipelines.

Matt Squire

CTO at Fuzzy Labs

ZenML allows you to keep your ML pipeline code cloud-agnostic, enabling faster future migrations to another technology stack.

Gabriel Martin

Machine Learning Engineer at Frontiers

Thanks to ZenML we’ve set up a pipeline where before we had only jupyter notebooks. It helped us tremendously with data and model versioning!

Francesco Pudda

Machine Learning Engineer at WiseTech Global

Support

## Frequently asked questions

Everything you need to know about ZenML Pro

## What about data security and compliance?

**no data**flows through the actual ZenML Pro side, but remains inside your own cloud infrastructure behind your VPC. Only metadata is transferred to our servers (names of pipelines, models, statuses, metrics, etc), which we store encrypted at transit and at rest.

We are

**SOC2 compliant**, validating our adherence to industry-leading standards for data security, availability, and confidentiality in our ongoing commitment to protecting your ML workflows and data.

Please refer to our

[terms of service and privacy policy](/terms-of-service)for more details.

## How does ZenML Pro interface with my internal services?

[here](https://docs.zenml.io/how-to/infrastructure-deployment/auth-management).

## What are the various deployment scenarios for ZenML Pro?

[as a service](https://docs.zenml.io/pro), which centrally tracks everything related to pipelines, stacks, models, artifacts, etc. This page goes through

[various deployment scenarios](/deployments)for this deployment.

## I am an open source user. Can I transition to the Pro version? What about my data!

[request a demo](/book-your-demo), we offer a migration service that helps transition your legacy database into your Pro account.

## What is the difference between the open-source and Pro product?

[GitHub](https://github.com/zenml-io/zenml)and you can run and manage it in-house without using the Pro product. On the other hand, the Pro product offers one of the best experiences to use ZenML, and includes a managed version of the OSS product, including some Pro-only features that create the best collaborative experience for many companies that are scaling their ML efforts.

You can see a more detailed comparison

[here](/open-source-vs-pro).

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/open-source-vs-pro

# ZenML Open Source vs Pro

Transform your ML workflows from single-player experiments to multiplayer production systems. ZenML Pro builds on the same open-source foundation you trust: no code rewrites, no metadata migrations required.

ZenML Open Source vs Pro

## ZenML Pro is Open Source and More

ZenML Pro extends the beloved open-source foundation with enterprise features designed for collaboration, governance, and scale. Start with OSS, upgrade when ready: your pipelines keep running exactly as they are.

### Managed control plane

ZenML Pro offers multi-tenant, fully-managed ZenML deployments. Separate your team into workspaces, and deploy dev, staging, and production servers separately.

### Roles and Permissions

ZenML Pro tenants have built-in roles and permissions, as an extension to the open-source product. We connect ZenML with your OIDC provider and offer SSO.

### Control and configurability

ZenML Pro control plane allows you to run ZenML pipelines directly from the server, and features enhanced configurability for your pipeline builds.

### Enhanced observability

ZenML Pro tenants have an enhanced dashboard with more features including a model control plane to view all your ML models, and the ability to trigger pipelines, do CI/CD and lots more.

## Is Your ML Team Ready for the Next Station?

Our subway map framework helps you identify pain signals that indicate it’s time to upgrade your ML infrastructure.

### Collaboration

"Who just overwrote my training stack?"

Multiple teams sharing buckets, databases, or GPU quotas without clear boundaries.

### Governance

"Who just overwrote my training stack?"

Security teams requiring proof of who changed what, when—especially before production deployments.

### Automation

"Can we refresh the model for tomorrow’s demo?"

Non-engineers needing to trigger retrains without CLI knowledge or developer intervention.

### Reliability

"The server DB is down again"

Operations teams spending hours on cluster maintenance, upgrades, and backup procedures.

Differences

## ZenML Open Source vs Pro Feature Breakdown

A feature by feature comparison between ZenML Open Source vs ZenML Pro

| Feature | OSS | ZenML Pro |
|---|---|---|
| Pipelines ML pipelines are Python workflows that execute a machine learning task | Basic Controls with legacy dashboard | Advanced Controls and modern dashboard |
| Artifact and Model Control Plane See all your models and artifacts in one place | Not available | Accessible in UI |
| Event Triggers External sources | Client can trigger the pipeline only | Webhooks to trigger actions (pipeline run, model promote) etc. |
| Run Templates Create repeatable workflows triggered with one click | Not available | Create run templates with one-click and run templates directly via the dashboard |
| Container management If executed remotely, pipelines run in containers | Basic management | Advanced management with container re-use and optimization |
| Role Based Access Control Roles dictate who has permissions to do what | Not available | Fine-grained permissions |
| User Management A user account in one ZenML server | Basic | Advanced with SSO |
| Infrastructure The infrastructure that supports the central ZenML server | Self-managed | Managed, multi-tenant deployment with database backups, security, compliance, rollbacks, upgrades etc |
| Service Connectors Credentials, authorization, and access control for your ML stack components | CLI only | Modern dashboard |
| Integrations External tools for experiment tracking, model deployment, drift detection, etc. | Community | Purpose-built |
| Support Seeking help when stuck | Community | Dedicated 24/7 |
| Setup of MLOps workflow Setting up of the codebase and infrastructure required to build a successful MLOps platform | Self managed | Specialized onboarding |

### Start deploying reproducible AI workflows today

Enterprise-grade MLOps platform trusted by thousands of companies in production.

---

## Source: https://www.zenml.io/compare

See how ZenML compares to other MLOps tools and platforms.

e2e-platforms

orchestrators

orchestrators

e2e-platforms

e2e-platforms

e2e-platforms

orchestrators

orchestrators

e2e-platforms

e2e-platforms

data-model-versioning

orchestrators

modeling

orchestrators

model-serving

orchestrators

data-annotators

llm-observability

genai-frameworks

e2e-platforms

experiment-trackers

orchestrators

model-serving

e2e-platforms

e2e-platforms

---

## Source: https://www.zenml.io/llmops-database

Explore 1483 real-world LLMOps use cases, tools, and implementations. Filter by technology, industry, or search for specific topics.

Loading LLMOps database...

Subscribe to the ZenML newsletter and receive regular product updates, tutorials, examples, and more.

---

## Source: https://www.zenml.io/whitepaper-architecting-an-enterprise-grade-mlops-platform

# Architecting an Enterprise-Grade MLOps Platform

## Is your ML platform more of a headache than a helper?

Let's be honest, many are. It slows down iterations, hinders deployment, and ultimately costs you your competitive edge. This whitepaper provides a blueprint for building an enterprise-grade MLOps platform that







*actually*works:**Eliminate the Firefighting:**Learn how to free your data scientists from infrastructure struggles so they can focus on innovation.**Achieve a Unified Control Plane:**Get complete visibility and management of your entire ML lifecycle, from experimentation to deployment.**Build a Seamless, Integrated Ecosystem:**Discover how to move beyond individual tools and create a platform that truly empowers your team.

---

## Source: https://www.zenml.io/case-studies

Case Studies

# Real Teams. Real AI Workflows

See how teams are using ZenML to unify their AI platforms—from batch evaluations to real-time serving, traditional ML to GenAI workflows.

## Start deploying reproducible AI workflows today

Enterprise-grade MLOps platform trusted by thousands of companies in production.

---

## Source: https://www.zenml.io/case-study/jetbrains

# Creating a Unified AI Platform: How JetBrains Centralizes ML on Kubernetes with ZenML

*A phased migration from Kubeflow and Prefect OSS to a single platform now managing a 170% month‑over‑month execution growth and complex 3,000+ node agentic pipelines.*

**🚀 At a Glance: The JetBrains Transformation**

**The Challenge:**A ~200‑person AI organization—with ~100 hands‑on ML practitioners—was fragmented across multiple systems, creating a high maintenance burden and blocking code reuse.**The Solution:**JetBrains adopted ZenML as its single, Kubernetes-native MLOps platform, enabling diverse teams to unify on one infrastructure.******The Impact:**Grew from 8 to 44 active users (450%) in 6 months. ZenML now efficiently manages a 170% month‑over‑month increase in total execution time (Sep→Oct 2025), runs complex 3,000+ node agentic pipelines, and has completely replaced Kubeflow for key workloads—starting with the flagship pipeline—while consolidating work previously split between Kubeflow and Prefect OSS.

### "ZenML has helped us to boost the collaboration and best practices exchange, while keeping the infrastructure burden as low as possible for the MLEs."

**📊 Key Metrics of Change**

*Note:* The **+170%** figure refers to the **month‑over‑month** change in total execution time from **September to October 2025**.

**The Challenge: When Enterprise Scale Creates Chaos**

**The Orchestrator Sprawl**

Before standardizing, JetBrains' MLOps team was managing a fragmented and costly collection of tools. This was not only inefficient but was creating a significant and growing maintenance burden at the same time. Different teams used different solutions for similar problems—**Prefect OSS** for classical ML and lightweight training, **Kubeflow** for LLM evaluation and data prep, and raw **Kubernetes scripts** for LLM training—which created a high-overhead environment where infrastructure support was fractured and best practices were impossible to enforce.

**The Collaboration Crisis**

This technical fragmentation created deep organizational silos. With a ~200‑person AI organization—and around 100 hands‑on ML practitioners—there was no unified platform to track models from training to evaluation, making lineage and reproducibility a manual, detective‑like process. As a result, code reuse was nearly impossible, and valuable time was lost as teams independently solved the same problems, unable to build on each other's work.

**The Department Dilemma**

Initially, the MLOps team’s mandate was to support multiple teams within a single department. Even within that boundary, teams followed entirely different rules and architectural patterns—from monorepos to dedicated repositories—making a one‑size‑fits‑all solution unrealistic. This diversity of environments and requirements made a one-size-fits-all solution impossible and which meant the current model was fundamentally unsustainable.

**The Solution: Develop Locally, Scale on Kubernetes**

**Why ZenML Won the Evaluation**

JetBrains ran a market-wide evaluation to find one platform that satisfied both advanced and casual users without increasing infra overhead. ZenML stood out on developer experience and platform fundamentals:

**Simple, Pythonic SDK and ease of use**: Teams define pipelines as plain Python with minimal boilerplate and sensible defaults. This made it straightforward to move from scripts/notebooks and previously environment‑locked pipes to reproducible pipelines and accelerated onboarding.**Proper artifact versioning and lineage**: Outputs are versioned by default and lineage is tracked across steps and runs, enabling reliable reproducibility, side‑by‑side comparisons, and auditability. Shared artifacts also make reuse across teams practical.**Run locally, scale on Kubernetes unchanged**: The same code runs on a laptop for fast iteration and on internal GKE and external GPU Kubernetes clusters for scale. Local/inline runtimes tighten the dev loop and reduce cold‑start overhead.**Incremental adoption with pragmatic migration**: Teams migrated pipeline‑by‑pipeline—no big‑bang rewrite. Portions of existing training/eval code could often be wrapped as steps with some refactoring, while tightly coupled pipelines required deeper changes. Existing data stores and surrounding services were reused where feasible.**Kubernetes‑first architecture**: Native Kubernetes integration fits their internal and external clusters, supporting GPU workloads, namespace isolation, secrets management, and enterprise networking patterns.**Vendor‑agnostic (no cloud lock‑in)**: Works across clouds and on‑prem, aligning with JetBrains’ strategy to avoid provider‑specific MLOps stacks.**Cost‑effective enterprise footprint**: Consolidates multiple orchestrators and homegrown glue into one platform, reducing maintenance burden while improving governance and observability.

**The Phased Implementation Journey**

Implementation was a phased and strategic journey, not a "big bang" migration. After a successful proof-of-concept in early 2025, the JetBrains teams with support from the MLOps team began methodically migrating workloads and implementing new complex pipelines for agent use-cases and beyond.

They strategically targeted their most complex and widely-used **"flagman" (flagship) pipeline** from Kubeflow first. By proving the platform's value on this critical, high-visibility workload, they established best practices and built internal confidence. This strategy was a clear success, paving the way for wider adoption that grew from just 8 monthly active users in April to 44 by October.

**An Architecture for Enterprise Scale**

The team now manages a highly sophisticated architecture on ZenML, tailored to their enterprise scale.

**Logical Workload Separation:**They organize work into distinct ZenML projects (e.g., Models R&D, Validation, Data/Logs) to cleanly manage the lifecycle and permissions for different teams.**Advanced Orchestration:**More advanced teams are able to work with more complex architectures to dynamically orchestrate complex GPU workloads.**Proven for AI:**The platform has proven it can handle this complexity, successfully running massive agentic AI pipelines with**over 3,000 nodes**in a single graph and multiple such graphs at the same time. One of these is used for evaluating their coding agent and runs popular agent benchmarks against their system to get a sense of how well it performs.

**The Results: Compound Growth and Stability**

The successful migration and internal development efforts have translated into measurable, compounding gains for JetBrains. The platform's stability and feature set have become a powerful draw for internal teams.

**Explosive and Organic Adoption**

The strongest proof of success has been the platform's rapid, organic adoption following internal advocacy. In a single month (September to October 2025), the number of monthly active users grew by **63%**, driven by word-of-mouth and visible team successes. Concretely, unique monthly active users grew from **27 to 44** between September and October 2025 (+63% month‑over‑month), as additional teams started running real workloads. This demand is widespread, with a planned internal workshop on ML workflows attracting **over 150 invites** from across the organization, signaling massive interest in the new, standardized approach.

**Technical and Migration Wins**

With a unified platform, JetBrains has unlocked significant technical victories. The MLOps team is successfully migrating complex workloads off of Kubeflow and Prefect OSS, eliminating a major maintenance burden and unifying their infrastructure. New platform capabilities like inline runtimes shorten feedback loops for simple pipelines by skipping per‑step container cold starts; the orchestrator still initializes as usual. Combined with completed stability improvements, this has shifted internal perception from early “low‑maturity” concerns to a stable, production‑grade platform with good standing internally.

**Looking Forward: A Strategic Partnership for the Next Wave of AI**

The collaboration between JetBrains and ZenML has evolved from addressing initial infrastructure challenges to enabling future innovation. With a stable foundation, the focus is now on scaling the platform's impact across the entire company.

**Scaling Knowledge**

The partnership now includes deep collaboration on scaling best practices. Jointly-planned workshops for JetBrains' 150-person ML organization are designed to transfer knowledge efficiently, ensuring that teams can not only use the platform but also leverage its most advanced capabilities for complex AI workloads.

**Scaling Adoption**

ZenML is now the standard default platform for new ML projects at JetBrains, reducing the overhead of selecting and configuring disparate frameworks. Adoption and momentum continues to expand, with a large team currently onboarding. This promises even more significant growth in the coming months.

**Scaling Innovation**

With a stable and scalable foundation, the partnership is now focused on unlocking the next frontier of innovation. The MLOps team is no longer just managing complexity; they’re enabling simplicity at scale. The unified platform gives them the capacity to explore and productionize sophisticated agentic AI workloads and advanced model architectures, positioning JetBrains to stay at the vanguard of AI development.

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/case-study/adeo-leroy-merlin

# How ADEO Leroy Merlin decreased their time-to-market from 2 months to 2 weeks

## "ZenML allowed us a fast transition between dev to prod. It’s no longer the big fish eating the small fish – it’s the fast fish eating the slow fish."

**ADEO**and it’s subsidiary**Leroy Merlin**, leading names in the retail sector, initiated a**data-driven transformation journey**.- Adeo's
**time-to-market**from idea to deployment, was**hindered by manual processes**, emphasized the need for a**scalable ML pipeline framework**. - The
**challenges**were evident: to**streamline infrastructure complexities and enhancing team collaboration**for ML model deployment,**minimizing back-and-forth interactions**between data scientists and ML engineers. - They decided to
**abstract away these complexities with ZenML**. - Their
**time-to-market reduced**from 8.5 weeks**to a mere 2 weeks**. - They anticipate a remarkable
**300% increase in deployment efficiency.**

## The Challenge: Manual Processes Burdening the ML Lifecycle

Traditional ML model development posed several challenges:

**Isolated Development**

Data scientists worked independently, facing issues with data versioning, model tracking, and conducting isolated experiments.**Infrastructure Overhead**

Setting up computational resources for model training required DevOps support, posing difficulties for data scientists unfamiliar with Docker or specialized hardware.**Reproducibility and Portability**

Switching between local and cloud environments for experiment reproducibility was complex.**ML Infrastructure Complexity**

Managing the entire ML lifecycle across different tools and infrastructure increased workflow complexity.

## The Solution: Abstracting away the complexity with ZenML

ADEO Leroy Merlin adopted ZenML to streamline ML pipelines without compromising flexibility. ZenML's framework facilitated easy pipeline construction, versioning, and deployment, emphasizing reproducibility and automation. Key features include:

**Quick Set-Up**

ZenML's Pythonic framework enabled swift pipeline annotation and construction.**Data and Model Versioning**

Easy tracking and versioning of datasets and models ensured result reproducibility.**Pipeline Portability**Abstracted infrastructure complexities allowed seamless prototyping and deployment across local and cloud environments.

**Framework and Infrastructure Agnosticism**

Flexibility to use any ML library, such as TensorFlow or PyTorch, and deploy workloads across different infrastructure targets with minimal overhead.

**The Results: A Simplified and More Productive Workflow**

Following a successful evaluation, ADEO Leroy Merlin conducted a pilot project using ZenML to classify penguin species based on physical traits, demonstrating its effectiveness. Subsequently,

**Centralized Experimentation Workflow**Data scientists utilized a centralized hub for logging experiments and sharing methodologies effortlessly.

**Autonomous ML Pipelines**

ZenML's abstraction layers empowered data scientists to independently set up pipelines for complex computational needs and deployment specifics.**Enhanced Collaboration**

Predefined pipeline components available in ZenML enabled better reuse and sharing of common pipeline elements across teams.**Accelerated Development Cycle**

Increased productivity allowed for rapid iteration, rigorous testing, and confident model deployment.**Reduced Operational Overhead**

Automation of the ML lifecycle significantly decreased time spent on environment configuration and management, prioritizing high-value development tasks.

### "Our data scientists are now autonomous in writing their pipelines & putting it in prod, setting up data-quality gates & alerting easily."

## The Business Impact: A New Era of Retail Efficiency

### Expedited Time-to-Market

The shift from 2 months to a mere 2 weeks from development to production marked a significant milestone in ADEO Leroy Merlin's ML journey.

### Robust Deployment

With 5 ML models in production, the team is on track to reach a target of 20 by the end of 2024.

### Automation with Operational Efficiency

1,614 development runs and 109 production runs showcased the reliability and confidence in the ML models deployed.

In order to roll-out a new business unit in another country, all the team needed to do was create one config file, and the model was already ready to go.

### FTP Economy

Streamlined processes led to a remarkable reduction in FTP economy for the 6-member ML team.

### Breaking Barriers

Data scientists and ML engineers expressed increased satisfaction as they autonomously deployed their models, shattering the 'stay in PoC' limitation.

### "ZenML has proven to be a critical asset in our machine learning toolbox, and we are excited to continue leveraging its capabilities to drive ADEO's machine learning initiatives to new heights."

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/case-study/cross-screen-media

# How Cross Screen Media Trains Models for 210 Markets in Hours, Not Weeks, with ZenML

The data science team at Cross Screen Media manages ML workflows across **210 local markets** on **trillions-of-rows-scale** tabular data. Through two key projects, they demonstrated ZenML's impact: first, a critical pipeline that previously took **~1 week** now completes all 210 markets in **~2 hours** after code optimization and ZenML implementation. Building on this success, the team applied ZenML to a second project involving model development, achieving a **~17% average AUC improvement** across all markets. These wins freed the 3-person team to tackle more ambitious methodologies.

**The Challenge: A Week-Long Training Bottleneck**

At the core of Cross Screen Media's business is its ability to plan and measure hyper-local advertising campaigns across 210 markets. Working with massive structured datasets scaling to **trillions of rows**, the data science team of three found themselves spending more time managing infrastructure than building models.

### "Before ZenML, our process was entirely manual. We ran models locally or on custom cloud instances. We didn't have a platform to do things in a repeatable way."

This manual process created several critical issues:

**A Two-Codebase Problem:**The team was forced to maintain two separate codebases—Jupyter notebooks for experimentation and different Python scripts for production. This required constant, error-prone translation between environments.**Operational Risk:**The workflow created single points of failure. As the team noted, if the person responsible for a model run was sick, the entire process could stall, jeopardizing delivery.**A Week-Long Bottleneck:**Running models for all 210 markets was a slow operation that stifled iteration and took over a week to complete. The hardware and process limitations also forced them to simplify their models, sacrificing predictive accuracy for the sake of finishing the job. The team knew they could build better models but lacked the platform to do it efficiently.

**The Solution: A Standardized Platform for Automation**

The team chose ZenML to build a new MLOps strategy. With ZenML, they engineered a standardized workflow, building a single codebase with pipeline templates that could be parameterized for each of the 210 markets.

### "The biggest benefit is easily utilizing Kubernetes. Once ZenML is set up, we can use it for all our parallel runs, which lifts our efficiency a lot."

This change meant a model could be tested locally on a small data sample with confidence that it would scale in production. ZenML acted as the orchestration layer, empowering the data science team to operate as a self-sufficient unit

### "Everything has changed now that we have a single codebase. We test locally and know it will run in production. It’s a huge time saver."

This investment in standardization pays dividends for future work. "The incremental cost of new projects is much less now," Shey and Junyi Lin add. "Once you have the patterns and templates set up, you can reuse most of it for subsequent projects."

**A Partnership That Accelerates**

Beyond the technology itself, the CSM team highlighted the value of ZenML's responsive support model. In contrast to experiences with larger providers, they noted the benefit of having direct access to the technical team. "The team has been responsive and quick to work on the unique challenges we faced," Shey and Junyi Lin noted, ensuring that implementation hurdles were overcome without losing momentum.

**The Results: Two Projects, Two Wins**

Cross Screen Media's ZenML implementation delivered impact across two sequential projects, each demonstrating different dimensions of value.

*Project 1: Pipeline Acceleration*

*Project 1: Pipeline Acceleration*

The first project focused on optimizing a critical data pipeline that processed all 210 markets. The team refactored their code and implemented ZenML orchestration, collapsing the runtime dramatically.

**Runtime collapse:** A pipeline that previously required **~1 week** to complete across all 210 markets now finishes in **~2 hours**. *(This reflects both ZenML orchestration **and** code optimizations.)*

This acceleration was transformative. The team no longer spent days waiting for pipeline runs to complete, freeing them to iterate and explore more sophisticated approaches.

*Project 2: Model Quality Improvements*

*Project 2: Model Quality Improvements*

Building on the infrastructure and patterns established in Project 1, the team applied ZenML to a second initiative focused on improving their modeling methodology. With the platform handling orchestration and parallelization across 210 markets, they could invest in more advanced techniques.

"ZenML gave us the opportunity to make our models more complex and add more attributes," said Shey and Junyi Lin. "This was impossible before because we lacked the right platform."

The additional model complexity paid off. By implementing more sophisticated approaches, the team achieved a **~17% average improvement in AUC score**across all 210 markets—a direct enhancement of Cross Screen Media's core product quality.

*Operational Excellence*

*Operational Excellence*

Beyond the project-specific wins, the ZenML dashboard became the team's command center for MLOps, providing observability across all pipeline runs.

### "The UI really helps. If something fails, we can see exactly where it happened and check the logs directly in ZenML. That wasn't possible for us before."

**Fewer**The team now debugs primarily in the ZenML UI; shelling into Kubernetes is rarely necessary.`kubectl`

dives:

This centralized observability provides long-term business value. The ZenML dashboard acts as a historical ledger, allowing the team to look back at year-old model runs, see which markets failed, and track performance metrics over time—a capability that was impossible with their previous, fragmented approach.

### Looking forward

The team is eager for **fully dynamic templating** of market subsets to reduce manual grouping. This aligns with ZenML’s ongoing templating work and will further simplify large-fanout runs.

By solving their primary bottleneck of speed, the team at Cross Screen Media unlocked a new level of model performance and business value.

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/deployments

# Flexible Deployment for Your MLOps Needs

Streamline your machine learning workflows with ZenML's adaptable deployment options. Whether you're experimenting locally or scaling to production, ZenML empowers you to orchestrate, manage, and deploy your models with ease.

ZenML Architecture

## Built on a Robust Client-Server Architecture

ZenML is a metadata layer on top of your existing infrastructure, meaning all data and compute stays on your side.

ZenML Server

### Central hub managing your ML metadata

Store your pipelines, runs, stacks, and configurations. It provides a REST server for communication.

ZenML Client

### Your interface to interact with the ZenML Server

It enables you to trigger actions, access information, and control your ML operations.

ZenML Dashboard

### Visualize your pipelines, artifacts, and stacks.

Usually bundled with the server, the dashboard provides a seamless visual experience on top of the ZenML Client.

Deployments comparison

## Choose the Deployment that Fits Your Needs

| Feature | Open Source (Self-hosted) | Pro |
|---|---|---|
| Run pipelines on cloud infra | Self-hosted | SaaS / Self-hosted |
| Run pipelines on cloud infra | ||
| Managed platform | ||
| No setup required | ||
| Easy version upgrade | ||
| RBAC | ||
| Run Templates | ||
| SSO / Auth2 | ||
| No metadata leaves customer cloud |

## Get started quickly with Local Deployment

- Ideal for initial experimentation, learning ZenML, and developing pipelines.
- Easy setup - everything runs on your machine.
- Uses a local SQLite database for storing metadata.

[Learn More](https://docs.zenml.io/deploying-zenml/deploying-zenml#deployment-scenarios)

## Deploy the ZenML server to start collaborating

- Deploy the ZenML server and dashboard centrally as soon as you are deploying remote workloads or inviting colleagues
- Backed by a robust database (MySQL) to persist production workloads
- Suitable for production-level workloads.

[Learn More](https://docs.zenml.io/getting-started/deploying-zenml)

## Easily upgrade to ZenML Pro to unlock enterprise-grade features

- Best for teams and organizations looking to scale MLOps
- Pro adds on top of OSS with advanced functionality and enterprise controls
- Seamlessly upgrade to ZenML Pro from OSS with one-click

[Learn More](/pro)

Various methods available:

[ ](https://docs.zenml.io/pro)

### ZenML Pro

One click deployment with a managed service

[ ](https://docs.zenml.io/getting-started/deploying-zenml/deploy-with-docker)

### Docker

Run ZenML Server in a container, optionally connecting to an external MySQL database.

[ ](https://docs.zenml.io/getting-started/deploying-zenml/deploy-with-helm)

### Helm

Deploy on a Kubernetes cluster using Helm charts for robust, production-ready setups.

[ ](https://docs.zenml.io/getting-started/deploying-zenml/deploy-using-huggingface-spaces)

### Hugging Face Spaces

Quick and free deployment option, ideal for trying out ZenML.

ZenML architecture

## Focus on What Matters - Your MLOps

ZenML is a metadata layer on top of your existing infrastructure, meaning all data and compute stays on your side.

### Fully managed service

ZenML handles deployment, maintenance, and infrastructure.

### Simplified workflow

Allows you to focus on your ML workflows without infrastructure management overhead.

### Scalable architecture

Suitable for teams and organisations looking for a streamlined and scalable solution.

### Full on-prem available

Full on-prem deployment available as well (ask for details)

### Enhanced observability

Enhanced security features and integrations with cloud services.

### Risk-free evaluation

14-day free trial for thorough testing and POC development.

## Unify Your ML and LLM Workflows

- Free, powerful MLOps open source foundation
- Works with any infrastructure
- Upgrade to managed Pro features

---

## Source: https://www.zenml.io/projects

Browse our projects for everything you need to replicate a production-grade use case — demo, video, blog, and code.

Predict bank clients most likely to subscribe to term deposits using machine learning.

Setup time: 5-10 mins

An end-to-end credit scoring workflow that automatically generates the technical evidence required by the EU AI Act.

Setup time: 5-10 mins

Turn European Central Bank data into actionable interest rate forecasts with this comprehensive MLOps solution.

Setup time: 5-10 mins

A production-ready MLOps pipeline for time series forecasting using ZenML and Darts, featuring TFT-based training and scheduled batch inference.

Setup time: 5-10 mins

Elevate your gaming platform with an AI that translates player language into actionable data. A model that understands gaming terminology, extracts key attributes, and structures conversations for intelligent recommendations and support.

Setup time: 5-10 mins

A personalized AI image generation product that can create your avatars from a selfie.

Setup time: 5-10 mins

Wake up to AI-generated insights from your Supabase database every morning. This ZenML pipeline uses OpenAI's GPT-4 to analyze yesterday's database activity, compare it to historical trends, and deliver concise summaries directly to your Slack channels.

Setup time: 5-10 mins

A scalable multi-model OCR workflow framework for batch document processing and model evaluation.

Setup time: 5-10 mins

A production-ready MLOps pipeline for accurate breast cancer classification using machine learning.

Setup time: 5-10 mins

AI-powered automated test generation and coverage analysis pipeline built with ZenML and LLMs.

Setup time: 5-10 mins

End-to-end pipeline that automates research paper discovery and classification for specialized research domains.

Setup time: 5-10 mins

A robust MLOps pipeline for retail sales forecasting designed for retail data scientists and ML engineers.

Setup time: 5-10 mins

End-to-end computer vision pipeline that trains a YOLOv5 model to detect and recognize American Sign Language alphabet in real-time images, with deployment to Vertex AI.

Setup time: 5-10 mins

Transform your ML workflow with an AI assistant that actually understands ZenML. This project fine-tunes open-source LLMs to generate production-ready MLOps pipelines.

Setup time: 5-10 mins

Interactive VS Code extension that provides hands-on ZenML pipeline tutorials directly in your development environment

Setup time: 5-10 mins

A production-ready agent that can help you with your ZenML questions.

Setup time: 5-10 mins

---

## Source: https://www.zenml.io/slack

Please upgrade to a supported browser, or try one of our apps.

See system requirements


v4.48.102

v4.47.69

Don't see the platform you're looking for? Let us know.

---

## Source: https://www.zenml.io/roadmap

We read every piece of feedback, and take your input very seriously.

To see all available qualifiers, see our documentation.

---

## Source: https://www.zenml.io/pricing

# Ship ML pipelines with confidence

Predictable, transparent pricing that scales with value.

### Starter

For small teams

**500** pipeline runs

**1** project

**1** snapshot

- Model Control Plane
- Artifact Control Plane
- 1 workspace
- Unlimited team members
- Basic support

### Growth

For growing teams

**2,000** pipeline runs

**3** projects

**5** snapshots

Everything in Starter, plus:

- Advanced Native Scheduling
- Webhooks & Triggers
- Priority support

### Scale

For scaling teams

**5,000** pipeline runs

**10** projects

**20** snapshots

Everything in Growth, plus:

- Codespaces (Remote IDE)
- Priority support

### Enterprise

For organizations

**Unlimited** pipeline runs

**Unlimited** projects

**Unlimited** snapshots

Everything in Scale, plus:

- SSO (SAML/OIDC)
- RBAC (Custom Roles)
- Audit Logs
- Regional Deployment
- On-prem / Hybrid
- SOC2 & GDPR
- Professional Services
- Dedicated support + SLA

[Or talk to an engineer about deployment →](/book-your-demo)

[Learn where data lives](https://docs.zenml.io/pro/system-architecture#where-data-lives).

### Compare Plans

| Plans | Starter | Growth | Scale | Enterprise |
|---|---|---|---|---|
| Feature | ||||
| Price | $399/mo | $999/mo | $2,499/mo | Custom |
| Pipeline Runs/mo | 500 | 2,000 | 5,000 | Unlimited |
| Projects | 1 | 3 | 10 | Unlimited |
|
|

[SOC2 & GDPR ↗](https://security.zenml.io/)[Talk to Sales](/book-your-demo)[Talk to Sales](/book-your-demo)[Talk to Sales](/book-your-demo)[Talk to Sales](/book-your-demo)## Are you startup or academic?

Apply for a special price to access ZenML Pro features for early-stage companies building ML-powered products, universities, research institutions, and educational use cases.

[Apply Now](/startups-and-academics)

No compliance headaches

## Your VPC, your data

ZenML is a metadata layer on top of your existing infrastructure, meaning all data and compute stays on your side.

ZenML is SOC2 and ISO 27001 Compliant

### We Take Security Seriously

ZenML is SOC2 and ISO 27001 compliant, validating our adherence to industry-leading standards for data security, availability, and confidentiality in our ongoing commitment to protecting your ML workflows and data.

Support

## Frequently asked questions

Everything you need to know about the product.

## What happens if I exceed my plan’s limits?

## Can I self-host ZenML?

## How do Run Template Triggers work?

## What’s the difference between the managed plans and the open source version?

## What kind of support is included in each plan?

## Trusted by 1,000s of members of top companies

Join the ZenML Community and start improving your MLOps

1,000,000

pipelines run in ZenML

100,000

pipelines run last month

21,000

stacks registered last 12 months

200,000

models trained last 12 months

"ZenML offers the capability to build end-to-end ML workflows that seamlessly integrate with various components of the ML stack, such as different providers, data stores, and orchestrators."

Harold Giménez

SVP R&D at HashiCorp

## Start deploying reproducible AI workflows today

Enterprise-grade MLOps platform trusted by thousands of companies in production.

---

## Source: https://www.zenml.io/blog

[How I Rebuilt zenml.io in a Week with Claude Code](/blog/how-i-rebuilt-zenml-io-in-a-week-with-claude-code)

I rebuilt zenml.io — 2,224 pages, 20 CMS collections — from Webflow to Astro in a week using Claude Code and a multi-model AI workflow. Here's how.

I rebuilt zenml.io — 2,224 pages, 20 CMS collections — from Webflow to Astro in a week using Claude Code and a multi-model AI workflow. Here's how.

Agentic RAG without guardrails spirals out of control. Here's how ZenML's dynamic pipelines give you fan-out, budget limits, and lineage without limiting the LLMs.

ZenML's new Quick Wins skill for Claude Code automatically audits your ML pipelines and implements 15 best-practice improvements (from metadata logging to Model Control Plane setup) based on what's actually missing in your codebase.

ML pipeline scheduling hides complexity beneath simple cron syntax—lessons on freshness, monitoring gaps, and overrun policies from Twitter, LinkedIn, and Shopify.

Analysis of 1,200 production LLM deployments reveals six key patterns separating successful teams from those stuck in demo mode: context engineering over prompt engineering, infrastructure-based guardrails, rigorous evaluation practices, and the recognition that software engineering fundamentals—not frontier models—remain the primary predictor of success.

Explore 419 new real-world LLMOps case studies from the ZenML database, now totaling 1,182 production implementations—from multi-agent systems to RAG.

Neptune AI is terminating its standalone SaaS solution. Switch to ZenML to track ML experiments and do much more.

ZenML's new pipeline deployments feature lets you use the same pipeline syntax to run both batch ML training jobs and deploy real-time AI agents or inference APIs, with seamless local-to-cloud deployment via a unified deployer stack component.

ZenML launches Pipeline Deployments, a new feature that transforms any ML pipeline or AI agent into a persistent, high-performance HTTP service with no cold starts and full observability.

ZenML's Pipeline Deployments transform pipelines into persistent HTTP services with warm state, instant rollbacks, and full observability—unifying real-time AI agents and classical ML models under one production-ready abstraction.

How to build a production-ready financial report analysis pipeline using multiple specialized AI agents with ZenML for orchestration, SmolAgents for lightweight agent implementation, and LangFuse for observability and debugging.

---

## Source: https://www.zenml.io/get-started

Open Source

# Get Started with ZenML

Build production-ready ML pipelines with the open-source framework trusted by thousands of ML engineers worldwide.

## Start in 3 simple steps

### Install ZenML

Get ZenML up and running in minutes. You just need to install it

`pip install 'zenml[local]'`


### Write your first pipeline

Create a simple `run.py`

file with a basic workflow:

```
from zenml import step, pipeline
@step
def basic_step() -> str:
"""A simple step that returns a greeting message."""
return "Hello World!"
@pipeline
def basic_pipeline():
"""A simple pipeline with just one step."""
basic_step()
if __name__ == "__main__":
basic_pipeline()
```


### Run your pipeline locally

ZenML automatically tracks the execution and stores artifacts.

`python run.py`


ZenML Architecture

## Built on a Robust Client-Server Architecture

ZenML is a metadata layer on top of your existing infrastructure, meaning all data and compute stays on your side.

Projects

## Start with one of our ready-made projects

Everything you need to replicate a production-grade use case — demo, video, blog, and code.


### BankSubscription Predictor

Predict bank clients most likely to subscribe to term deposits using machine learning.


### Credit Scorer: EU AI Act Compliant MLOps

An end-to-end credit scoring workflow that automatically generates the technical evidence required by the EU AI Act.


### EuroRate Predictor

Turn European Central Bank data into actionable interest rate forecasts with this comprehensive MLOps solution.


### FloraCast

A production-ready MLOps pipeline for time series forecasting using ZenML and Darts, featuring TFT-based training and scheduled batch inference.


### GameSense: The LLM That Understands Gamers

Elevate your gaming platform with an AI that translates player language into actionable data. A model that understands gaming terminology, extracts key attributes, and structures conversations for intelligent recommendations and support.


### Magic Photobooth

A personalized AI image generation product that can create your avatars from a selfie.

Resources

## Your Complete ZenML Learning Toolkit

Dive deeper into ZenML with comprehensive documentation, development tools, hands-on tutorials, and a thriving community of ML engineers ready to help you succeed.

[ ](https://docs.zenml.io)

### Official Documentation

Comprehensive guides, tutorials, and API reference to master ZenML

[ ](https://marketplace.visualstudio.com/items?itemName=ZenML.zenml-vscode)

### VS Code Extension

ZenML Studio enhances your ML workflow with support for pipelines, stacks, server management and DAG visualization.

[ ](https://github.com/zenml-io/vscode-tutorial)

### Interactive Tutorial

Master ZenML fundamentals through 10 guided pipeline examples with step-by-step tutorials and one-click execution!

[ ](/slack)

### Slack Community

Join thousands of ML engineers sharing knowledge and best practices.

## Ready for the next level?

Go beyond open source with ZenML Pro. Get enterprise features, managed infrastructure, RBAC, enhanced security, dedicated support, and more.

---

## Source: https://www.zenml.io/integrations/airflow

Seamlessly integrate the robustness of Apache Airflow with the ML-centric capabilities of ZenML pipelines. This powerful combination simplifies the orchestration of complex machine learning workflows, enabling data scientists and engineers to focus on building high-quality models while leveraging Airflow's proven production-grade features.



```
from zenml import step, pipeline
from zenml.integrations.airflow.flavors.airflow_orchestrator_flavor import AirflowOrchestratorSettings
@step
def my_step():
print("Running in Airflow!")
airflow_settings = AirflowOrchestratorSettings(
operator="airflow.providers.docker.operators.docker.DockerOperator",
operator_args={}
)
@pipeline(settings={"orchestrator.airflow": airflow_settings})
def my_airflow_pipeline():
my_step()
if __name__ == "__main__":
my_airflow_pipeline()]
```


Expand your ML pipelines with more than 50 ZenML Integrations

---

## Source: https://www.zenml.io/integrations/amazon-s3

Elevate your MLOps game by integrating Amazon S3 with ZenML for efficient and reliable artifact storage. This powerful combination allows you to store and manage your pipeline artifacts in the cloud, ensuring scalability, high availability, and seamless collaboration for your machine learning projects.

```
# Step 1: Install the AWS integration
>>> zenml integration install s3
# Step 2: Register the S3 artifact store
>>> zenml artifact-store register s3_store -f s3 --path="s3://your-bucket-name"
# Step 3: [Optional] Connect the S3 artifact store to a Service Connector
>>> zenml artifact-store connect s3_store -i
# Step 4: Update your stack to use the S3 artifact store
>>> zenml stack update -a s3_store
# Step 5: Run the pipeline using the S3 artifact store
>>> python3 my_pipeline.py
Initiating a new run for the pipeline: my_pipeline.
Executing a new run.
Using user: user1
Using stack: remote_stack
orchestrator: default
artifact_store: s3_store
You can visualize your pipeline runs in the ZenML Dashboard. In order to try it locally, please run zenml up.
Step my_step has started.
Step my_step has finished in 0.078s.
Step my_step completed successfully.
Pipeline run has finished in 0.112s.
The artifact value you saved in the `my_pipeline` run is:
{'key': 'value', 'message': 'Hello from S3!'}
```


```
from typing_extensions import Annotated
from zenml import pipeline, step
from zenml.client import Client
@step
def my_step(input_dict: dict) -> Annotated[dict, "dict_from_s3"]:
output_dict = input_dict.copy()
output_dict["message"] = "Hello from S3!"
return output_dict
@pipeline
def my_pipeline(input_dict: dict):
my_step(input_dict)
if __name__ == "__main__":
input_data = {"key": "value"}
my_pipeline(input_data)
print(
"The artifact value you saved in the `my_pipeline` run is:\n"
+ str(Client().get_artifact_version(name_id_or_prefix="dict_from_s3").load())
)
```


my_pipeline.py

Expand your ML pipelines with more than 50 ZenML Integrations

---

## Source: https://www.zenml.io/integrations/argilla

Enhance your machine learning workflows by integrating Argilla, an open-source data curation platform, with ZenML. This integration enables efficient data annotation within ZenML pipelines, leveraging Argilla's human-in-the-loop approach for improved data quality and model performance.



```
# register an annotator authentication secret first
# zenml secret create argilla_secrets --api_key="<your_argilla_api_key>"
# then register the annotator itself
# zenml annotator register argilla --flavor argilla --authentication_secret=argilla_secrets
from zenml.client import Client
client = Client()
annotator = client.active_stack.annotator
# list dataset names
dataset_names = annotator.get_dataset_names()
# get a specific dataset
dataset = annotator.get_dataset("dataset_name")
# get the annotations for a dataset
annotations = annotator.get_labeled_data(dataset_name="dataset_name")
# launch the annotation interface via the CLI
# zenml annotator dataset annotate <dataset_name>
```


Expand your ML pipelines with more than 50 ZenML Integrations

---

## Source: https://www.zenml.io/integrations/autogen

Seamlessly orchestrate flexible, emergent multi-agent workflows inside ZenML pipelines.

AutoGen is an open‑source, MIT‑licensed framework by Microsoft for building AI agents that interact through dynamic, conversational loops—even allowing human participants when needed. It excels at rapid prototyping of complex, emergent multi-agent behaviors through asynchronous messaging, role-based tools, and customizable memory modules. Integrating AutoGen into ZenML enables you to embed these conversational agent workflows into reproducible, versioned pipelines. This brings production-ready orchestration, tracking, continuous evaluation, and deployment flexibility—so your AutoGen agents go from prototype to scalable, monitored system faster and more reliably Analytics Vidhya.

```
from zenml import pipeline, step
from zenml.integrations.autogen import AutoGenAgentStep
@step
def agent_chat_step() -> str:
# Define and run an AutoGen multi-agent GroupChat
# (Placeholder—adapt with actual AutoGen API calls)
response = run_autogen_groupchat(...)
return response
@step
def evaluate_response(response: str) -> bool:
# Insert your evaluation logic (e.g., correctness, relevance)
return some_quality_check(response)
@pipeline
def autogen_agent_pipeline():
resp = agent_chat_step()
ok = evaluate_response(resp)
if __name__ == "__main__":
p = autogen_agent_pipeline()
p.run()
```


Expand your ML pipelines with more than 50 ZenML Integrations

---

## Source: https://www.zenml.io/integrations/aws-strands

Build and orchestrate Strands agents with reproducible ZenML pipelines.

AWS Strands is an open-source agent framework that simplifies building intelligent agents using Python decorators and a lightweight execution model. It provides a simple, callable interface for defining agents, supports built-in tools through the @tool decorator, and even enables math and reasoning capabilities out of the box. By integrating Strands with ZenML, you can run Strands agents inside production-ready pipelines. This unlocks orchestration, artifact tracking, reproducibility, and deployment flexibility—allowing you to move from experimentation to enterprise-scale AI workflows with ease. Integrating AutoGen into ZenML enables you to embed these conversational agent workflows into reproducible, versioned pipelines. This brings production-ready orchestration, tracking, continuous evaluation, and deployment flexibility—so your AutoGen agents go from prototype to scalable, monitored system faster and more reliably Analytics Vidhya.

`@tool`

decorator.```
from zenml import ExternalArtifact, pipeline, step
from agent import agent
@step
def run_strands(query: str) -> str:
return str(agent(query))
@pipeline
def strands_weather_pipeline() -> str:
q = ExternalArtifact(value="What's the weather like in Tokyo?")
return run_strands(q.value)
if __name__ == "__main__":
print(strands_weather_pipeline())
```


Expand your ML pipelines with more than 50 ZenML Integrations