# Mlflow Documentation
> Scraped on: 2026-03-30 | Root Source: [https://mlflow.org/docs/latest/index.html](https://mlflow.org/docs/latest/index.html)



---

## Source: https://mlflow.org/docs/latest/index.html

# MLflow Documentation

Welcome to the MLflow Documentation. Our documentation is organized into two sections to help you find exactly what you need. Choose [ LLMs & Agents](/docs/latest/genai/) for agent and LLM application development, tracing, and evaluation tools, or select

[for traditional ML workflows.](/docs/latest/ml/)

**Machine Learning**## LLMs & Agents

Explore tools for LLM and agent observability, prompt management, foundation model deployment, and evaluation frameworks. Learn how to track, evaluate, and optimize your LLM applications and agent workflows with MLflow.

## Machine Learning

Access comprehensive guides for experiment tracking, model packaging, registry management, and deployment. Get started with MLflow's core functionality for traditional machine learning workflows, hyperparameter tuning, and model lifecycle management.

---

## Source: https://mlflow.org/docs/latest/

# MLflow Documentation

Welcome to the MLflow Documentation. Our documentation is organized into two sections to help you find exactly what you need. Choose [ LLMs & Agents](/docs/latest/genai/) for agent and LLM application development, tracing, and evaluation tools, or select

[for traditional ML workflows.](/docs/latest/ml/)

**Machine Learning**## LLMs & Agents

Explore tools for LLM and agent observability, prompt management, foundation model deployment, and evaluation frameworks. Learn how to track, evaluate, and optimize your LLM applications and agent workflows with MLflow.

## Machine Learning

Access comprehensive guides for experiment tracking, model packaging, registry management, and deployment. Get started with MLflow's core functionality for traditional machine learning workflows, hyperparameter tuning, and model lifecycle management.

---

## Source: https://mlflow.org/docs/latest/genai/

# MLflow: AI Engineering Platform for LLMs and Agents

MLflow is the largest open source ** AI engineering platform for agents and LLMs**. MLflow enables teams of all sizes to debug,
evaluate,

[monitor](https://mlflow.org/ai-monitoring), and optimize production-quality AI applications, while controlling costs and managing access to models and data. With over 30 million monthly downloads, thousands of organizations rely on MLflow each day to ship AI to production with confidence.

MLflow's comprehensive feature set for agents
and LLM applications includes production-grade [observability](/docs/latest/genai/tracing/), [evaluation](/docs/latest/genai/eval-monitor/),
[prompt management](/docs/latest/genai/prompt-registry/), an [AI Gateway](https://mlflow.org/ai-gateway) for managing costs and model access, and much more.

#### Open Source

Join thousands of teams building agents and LLM applications with MLflow - with 20K+ GitHub Stars and 50M+ monthly downloads. As part of the Linux Foundation, MLflow ensures your AI infrastructure remains open and vendor-neutral.

#### OpenTelemetry

MLflow Tracing is fully compatible with OpenTelemetry, making it free from vendor lock-in and easy to integrate with your existing observability stack.

#### All-in-one Platform

Manage the complete AI development journey from prototype to production. Track prompts, evaluate quality, deploy AI agents, and monitor performance in one platform.

#### Complete Observability

See inside every AI decision with comprehensive tracing that captures prompts, retrievals, tool calls, and LLM responses. Debug complex workflows with confidence.

#### Evaluation & Monitoring

Stop manual testing with LLM judges and custom metrics. Systematically evaluate every change to ensure consistent improvements in your AI applications.

#### Framework Integration

Use any agent framework or LLM provider. With 100+ integrations and extensible APIs, MLflow adapts to your tech stack, not the other way around.

**Try the MLflow LLMs and Agents Demo**

The quickest way to learn about MLflow for LLMs and AI Agents is to try the demo. **Click to launch the demo ↓**


**Try the MLflow LLMs and Agents Demo**

**Click to launch the demo ↓**

## Observability[](#observability)

Debug and iterate on agents and LLM applications using MLflow's [tracing](https://mlflow.org/llm-tracing), which captures your app's entire execution, including prompts, retrievals and tool calls.
MLflow's open-source, OpenTelemetry-compatible tracing SDK helps avoid vendor lock-in.

## Evaluations[](#evaluations)

Accurately measure free-form language with LLM judges by utilizing [LLM-as-a-judge](https://mlflow.org/llm-evaluation) metrics, mimicking human expertise, to assess and enhance agent quality. Access pre-built judges for common metrics like hallucination or relevance, or develop custom judges tailored to your business needs and expert insights.

## Prompt Management & Optimization[](#prompt-management--optimization)

Version, compare, iterate on, and discover prompt templates directly through the MLflow UI. Reuse prompts across multiple versions of your agent or application code, and view rich lineage identifying which versions are using each prompt. Accelerate development with [automated prompt optimization](https://mlflow.org/prompt-optimization) that uses data-driven algorithms to improve your prompts without manual trial-and-error.

## Running Anywhere[](#running-anywhere)

MLflow can be used in a variety of environments, including your local environment, on-premises clusters, cloud platforms, and managed services. Being an open-source platform, MLflow is **vendor-neutral**; whether you're building AI agents, LLM applications, or ML models, you have access to MLflow's core capabilities — tracing, evaluation, experiment tracking, deployment, and more.

## Ask AI About MLflow[](#ask-ai-about-mlflow)

## Community[](#community)

Connect with fellow builders, ask questions, and stay up to date — join our vibrant MLflow community on Slack, GitHub, LinkedIn, and more!

Learn how to get involved and discover all our channels on the [Community Page](/docs/latest/community/).

---

## Source: https://mlflow.org/docs/latest/ml/

# MLflow: AI Engineering Platform for LLMs, Agents, & Models

MLflow is the largest open source **AI engineering platform for agents, LLMs, and ML models**. MLflow enables teams of all sizes to debug,
evaluate, monitor, and optimize production-quality AI applications while
controlling costs and managing access to models and data. With over 30 million monthly downloads,
thousands of organizations rely on MLflow each day to ship AI to production with confidence.

MLflow's comprehensive feature set for agents
and LLM applications includes production-grade [observability](/docs/latest/genai/tracing/), [evaluation](/docs/latest/genai/eval-monitor/),
[prompt management](/docs/latest/genai/prompt-registry/), an [AI Gateway](/docs/latest/genai/governance/ai-gateway/) for managing costs and model access, and more.
Learn more at [MLflow for LLMs and Agents](/docs/latest/genai/).

For machine learning (ML) model development, MLflow provides [experiment tracking](/docs/latest/ml/tracking/quickstart/), [model evaluation capabilities](/docs/latest/ml/evaluation/), a [production model registry](/docs/latest/ml/model-registry/), and [model deployment tools](/docs/latest/ml/deployment/).

## Getting Started with MLflow for ML Models[](#getting-started-with-mlflow-for-ml-models)

This page covers MLflow's tools for **traditional machine learning and deep learning**: ML experiment
tracking, model versioning, model deployment, and model evaluation. If you're building agents and LLM applications, see [MLflow for LLMs and Agents](/docs/latest/genai/).

If this is your first time exploring MLflow for MLOps, the tutorials and guides here are a great place to start.

[Start learning →](/docs/latest/ml/getting-started/quickstart/)

### Quickstart

A quick guide to learn the basics of MLflow for MLOps by training a simple scikit-learn model

[Start building →](/docs/latest/genai/getting-started/connect-environment/)

### MLflow for Agents & LLMs

A walkthrough of MLflow's Agent and LLM capabilities, including tracing, evaluation, and prompt management

[Start training →](/docs/latest/ml/getting-started/deep-learning/)

### Deep Learning Guide

A hands-on tutorial on how to use MLflow for ML to track deep learning model training with PyTorch

## MLflow for ML Models: Core Capabilities[](#mlflow-for-ml-models-core-capabilities)

MLflow for ML Models provides comprehensive support for traditional machine learning and deep learning workflows. From experiment tracking and model versioning to deployment and monitoring, MLflow streamlines every aspect of the ML lifecycle. Whether you're working with scikit-learn models, training deep neural networks, or managing complex ML pipelines, MLflow provides the tools you need to build reliable, scalable machine learning systems.

Explore the MLflow's machine learning capabilities and integrations below to enhance your ML development workflow!

- Tracking & Experiments
- Model Registry
- Model Deployment
- ML Library Integrations
- Model Evaluation

### Track experiments and manage your ML development[](#track-experiments-and-manage-your-ml-development)

#### Core Features[](#core-features)

**MLflow Tracking** provides comprehensive experiment logging, parameter tracking, metrics visualization, and artifact management.

**Key Benefits:**

**Experiment Organization**: Track and compare multiple model experiments**Metric Visualization**: Built-in plots and charts for model performance**Artifact Storage**: Store models, plots, and other files with each run**Collaboration**: Share experiments and results across teams

#### Guides[](#guides)

### Manage model versions and lifecycle[](#manage-model-versions-and-lifecycle)

#### Core Features[](#core-features-1)

**MLflow Model Registry** provides centralized model versioning, stage management, and model lineage tracking.

**Key Benefits:**

**Version Control**: Track model versions with automatic lineage**Stage Management**: Promote models through staging, production, and archived stages**Collaboration**: Team-based model review and approval workflows**Model Discovery**: Search and discover models across your organization

#### Guides[](#guides-1)

### Deploy models to production environments[](#deploy-models-to-production-environments)

#### Core Features[](#core-features-2)

**MLflow Deployment** supports multiple deployment targets including REST APIs, cloud platforms, and edge devices.

**Key Benefits:**

**Multiple Targets**: Deploy to local servers, cloud platforms, or containerized environments**Model Serving**: Built-in REST API serving with automatic input validation**Batch Inference**: Support for batch scoring and offline predictions**Production Ready**: Scalable deployment options for enterprise use

#### Guides[](#guides-2)

### Explore Native MLflow ML Library Integrations[](#explore-native-mlflow-ml-library-integrations)

### Evaluate and validate your ML models[](#evaluate-and-validate-your-ml-models)

#### Core Features[](#core-features-3)

**MLflow Evaluation** provides comprehensive model validation tools, automated metrics calculation, and model comparison capabilities.

**Key Benefits:**

**Automated Metrics**: Built-in evaluation metrics for classification, regression, and more**Custom Evaluators**: Create custom evaluation functions for domain-specific metrics**Model Comparison**: Compare multiple models and versions side-by-side**Validation Datasets**: Track evaluation datasets and ensure reproducible results

#### Guides[](#guides-3)

Learn how to [evaluate your ML models](/docs/latest/ml/evaluation/) with MLflow

Discover [custom evaluation metrics](/docs/latest/ml/evaluation/#custom-metrics--visualizations) and functions

Compare models with [MLflow Model Validation](/docs/latest/ml/evaluation/#model-validation)

## Running MLflow for ML Models Anywhere[](#running-mlflow-for-ml-models-anywhere)

MLflow can be used in a variety of environments, including your local environment, on-premises clusters, cloud platforms, and managed services. Being an open-source platform, MLflow is **vendor-neutral**; whether you're building AI agents, LLM applications, or ML models, you have access to MLflow's core capabilities — tracing, evaluation, experiment tracking, deployment, and more.

---

## Source: https://mlflow.org/docs/latest/api_reference/index.html

Main Docs
API Documentation
3.11.0rc0
Home
Python API
TypeScript API
Command-Line Interface
MLflow Authentication Python API
MLflow Authentication REST API
R API
Java API
REST API
Contribute
Documentation
MLflow API Docs
MLflow API Docs
This page hosts the API documentation for MLflow.
Python API
TypeScript API
Command-Line Interface
MLflow Authentication Python API
MLflow Authentication REST API
R API
Java API
REST API

---

## Source: https://mlflow.org/docs/latest/self-hosting/

# Self-Hosting MLflow


The most vendor-neutral MLOps/LLMOps platform in the world.[]

MLflow is fully open-source. Thousands of users and organizations run their own MLflow instances to meet their specific needs. Being open-source and trusted by the popular cloud providers, MLflow is the best choice for teams/organizations that worry about vendor lock-in.

As of MLflow 3.7.0, the default tracking backend has changed from file-based storage (`./mlruns`

) to SQLite database (`sqlite:///mlflow.db`

) for better performance and reliability.

**Existing users:** If you have existing data in `./mlruns`

, MLflow will automatically detect and continue using it. No action is required.

**New users:** New MLflow servers will use SQLite by default. To use file-based storage instead, set `MLFLOW_TRACKING_URI=./mlruns`

or specify `--backend-store-uri ./mlruns`

when starting the server.

For more details and migration guidance, see [GitHub Issue #18534](https://github.com/mlflow/mlflow/issues/18534).

## The Quickest Path: Run `mlflow`

Command[](#the-quickest-path-run-mlflow-command)

The easiest way to start MLflow server is to run the `mlflow`

CLI command in your terminal. This is suitable for personal use or small teams.

First, install MLflow with:

`pip install mlflow`



Then, start the server with:

`mlflow server --port 5000`



This will start the server and UI at `http://localhost:5000`

using SQLite as the backend store (the default). You can connect the client to the server by setting the tracking URI:

`import mlflow`


mlflow.set_tracking_uri("http://localhost:5000")


# Start tracking!

# Open http://localhost:5000 in your browser to view the UI.



Now, you are ready to start your experiment!

For production deployments or custom backend configurations, see [Backend Store](/docs/latest/self-hosting/architecture/backend-store/) documentation.

## Other Deployment Options[](#other-deployment-options)

### Docker Compose[](#docker-compose)

The MLflow repository includes a ready-to-run Compose project under `docker-compose/`

that provisions MLflow, PostgreSQL, and [RustFS](https://github.com/rustfs/rustfs).

`git clone https://github.com/mlflow/mlflow.git`

cd docker-compose

cp .env.dev.example .env

docker compose up -d



Read the instructions [here](https://github.com/mlflow/mlflow/tree/master/docker-compose) for more details and configuration options for the docker compose bundle.

### Kubernetes[](#kubernetes)

To deploy on Kubernetes, use the MLflow Helm chart provided by [Bitnami](https://artifacthub.io/packages/helm/bitnami/mlflow) or [Community Helm Charts](https://artifacthub.io/packages/helm/community-charts/mlflow).

### Cloud Services[](#cloud-services)

If you are looking for production-scale deployments without maintenance costs, MLflow is also available as managed services from popular cloud providers.

## Architecture[](#architecture)

MLflow, at a high level, consists of the following components:

**Tracking Server**: The lightweight FastAPI server that serves the MLflow UI and API.**Backend Store**: The Backend Store is relational database (or file system) that stores the metadata of the experiments, runs, traces, etc.**Artifact Store**: The Artifact Store is responsible for storing the large artifacts such as model weights, images, etc.

Each component is designed to be pluggable, so you can customize it to meet your needs. For example, you can start with a single host mode with SQLite backend and local file system for storing artifacts. To scale up, you can switch backend store to PostgreSQL cluster and point artifact store to cloud storage such as S3, GCS, or Azure Blob Storage.

To learn more about the architecture and available backend options, see [Architecture](/docs/latest/self-hosting/architecture/overview/).

## Workspaces[](#workspaces)

MLflow supports [workspaces](/docs/latest/self-hosting/workspaces/) to organize experiments, registered models, prompts, and artifacts on a shared MLflow instance. Workspaces add logical separation and workspace-level permissions so teams can collaborate without running separate servers. Workspaces are opt-in and require a SQL database backend.

## Access Control & Security[](#access-control--security)

MLflow support [username/password login](/docs/latest/self-hosting/security/basic-http-auth/) via basic HTTP authentication, [SSO (Single Sign-On)](/docs/latest/self-hosting/security/sso/), and [custom authentication plugins](/docs/latest/self-hosting/security/custom/).

MLflow also provides built-in [network protection](/docs/latest/self-hosting/security/network/) middleware to protect your tracking server from network exposure.

Need highly secure MLflow server? Check out [Databricks Managed MLflow](https://www.databricks.com/product/managed-mlflow) to get fully managed MLflow servers with unified governance and security.

## FAQs[](#faqs)

See [Troubleshooting & FAQs](/docs/latest/self-hosting/troubleshooting/) for more information.

When using the remote tracking server, you may hit an access denied error when accessing the MLflow UI from a browser.

Invalid Host header - possible DNS rebinding attack detected


This error typically indicates that the tracking server's network security settings need to be configured. The most common causes are:

**Host validation**: The`--allowed-hosts`

flag restricts which Host headers are accepted**CORS restrictions**: The`--cors-allowed-origins`

flag controls which origins can make API requests

To resolve this, configure your tracking server with the appropriate flags. For example:

`mlflow server --allowed-hosts "mlflow.company.com,localhost:*" \`

--cors-allowed-origins "https://app.company.com"



**Note**: These security options are only available with the default FastAPI-based server (uvicorn). They are
not supported when using Flask directly or with `--gunicorn-opts`

or `--waitress-opts`

.

Refer to the [Network Security Guide](/docs/latest/self-hosting/security/network/) for detailed configuration options.

---

## Source: https://mlflow.org/docs/latest/community/

# Community

Welcome to the MLflow community! Connect with thousands of data scientists, ML engineers, software engineers, and practitioners who are building the future of machine learning, Agent, and GenAI applications together.

## 🤝 Community Resources[](#-community-resources)

Join the conversation and get help from our vibrant community:

[Visit GitHub →](https://github.com/mlflow/mlflow)

### GitHub

Explore the codebase, contribute, and report issues

[Join Slack →](https://mlflow.org/slack)

### Slack

Connect with MLflow users and contributors in real-time

[Follow us →](https://x.com/mlflow)

### X

Follow us for the latest updates and news

### LinkedIn

Connect →

Connect with us on LinkedIn for professional updates

[Ask questions →](https://stackoverflow.com/questions/tagged/mlflow)

### Stack Overflow

Get help with technical questions using the mlflow tag

## 🚀 Get Involved[](#-get-involved)

There are many ways to contribute to the MLflow ecosystem:

[Start contributing →](https://github.com/mlflow/mlflow/blob/master/CONTRIBUTING.md)

### Contributing Guide

Learn how to contribute code, documentation, and more to MLflow

[Read blog →](https://mlflow.org/blog/index.html)

### MLflow Blog

Stay updated with the latest developments and best practices

[Learn more →](https://mlflow.org/ambassadors)

### Ambassador Program

Become a community leader and advocate for MLflow

[Report issue →](https://github.com/mlflow/mlflow/issues/new/choose)

### Report Issues

Help us improve MLflow by reporting bugs or requesting features

## 📣 Announcements[](#-announcements)

Stay informed about MLflow updates, releases, and community news:

[View releases →](https://github.com/mlflow/mlflow/releases)

### Latest Releases

Check out the newest features and bug fixes in our GitHub releases

[See events →](https://lu.ma/mlflow?k=c)

### Community Events

Join us for office hours, webinars, and community meetups

**Join thousands of ML practitioners building with MLflow!**

Have questions? Start with our [Slack community](https://mlflow.org/slack) or check out the [GitHub repository](https://github.com/mlflow/mlflow).

---

## Source: https://mlflow.org

### Observability

Capture complete [traces](/llm-tracing) of your LLM applications and agents to get deep [insights](/ai-observability) into their behavior. Built on OpenTelemetry and supports any LLM provider and agent framework. [Monitor](/ai-monitoring) production quality, costs, and safety.

### Evaluation

Run systematic [evaluations](/llm-evaluation), track quality metrics over time, and catch regressions before they reach production. Choose from 50+ built-in metrics and LLM judges, or define your own with highly flexible APIs.

### Prompts & Optimization

Version, test, and deploy [prompts](/prompt-registry) with full lineage tracking. Automatically [optimize prompts](/prompt-optimization) with state-of-the-art algorithms to improve performance.

### AI Gateway

Unified API [gateway](/ai-gateway) for all LLM providers. Route requests, manage rate limits, handle fallbacks, and control costs through a unified OpenAI-compatible interface.

### Agent Server

Deploy agents to production with a single command. The MLflow Agent Server provides a FastAPI-based hosting solution with automatic request validation, streaming support, and built-in tracing — so you can go from prototype to production endpoint in minutes.

from mlflow.agent_server import AgentServer, invoke, streamfrom mlflow.types.agent import ResponsesAgentRequest, ResponsesAgentResponse@invoke()async def run_agent(request: ResponsesAgentRequest) -> ResponsesAgentResponse:msgs = [i.model_dump() for i in request.input]result = await Runner.run(agent, msgs)return ResponsesAgentResponse(output=[item.to_input_item() for item in result.new_items])# Start the serveragent_server = AgentServer("MyAgent")agent_server.run(app_import_string="server:app")

[mlflow/mlflow](https://github.com/mlflow/mlflow)

### Open Source

100% open source under Apache 2.0 license. Forever free, no strings attached.

### No Vendor Lock-in

Works with any cloud, framework, or tool you use. Switch vendors anytime.

### Production Ready

Battle-tested at scale by Fortune 500 companies and thousands of teams.

### Full Visibility

Complete tracking and observability for all your AI applications and agents.

### Community

20K+ GitHub stars, 900+ contributors. Join the fastest-growing AIOps community.

### Integrations

Works out of the box with LangChain, OpenAI, PyTorch, and 100+ AI frameworks.

[Get Started →](https://mlflow.org/docs/latest/genai/tracing/quickstart/)

### Start MLflow Server

One command to get started. Docker setup is also available.

### Enable Logging

Add minimal code to start capturing traces, metrics, and parameters

### Run your code

Run your code as usual. Explore traces and metrics in the MLflow UI.

[FAQ page](/faq)for everything you need to know about MLflow.

MLflow is the largest **open source AI engineering platform** for [agents, LLMs](/genai), and [ML models](/classical-ml). MLflow enables teams of all sizes to debug, evaluate, monitor, and optimize production-quality AI applications while controlling costs and managing access to models and data. With over 30 million monthly downloads, thousands of organizations rely on MLflow each day to ship AI to production with confidence.

MLflow's comprehensive feature set for agents and LLM applications includes production-grade [observability](/genai/observability), [evaluation](/genai/evaluations), [prompt management](/prompt-registry), [prompt optimization](/prompt-optimization), an [AI Gateway](/genai/ai-gateway) for managing costs and model access, and more. Learn more at [MLflow for LLMs and Agents](/genai).

For machine learning (ML) model development, MLflow provides [experiment tracking](/classical-ml/experiment-tracking), [model evaluation](/classical-ml/model-evaluation) capabilities, a production [model registry](/classical-ml/model-registry), and [model deployment](/classical-ml/serving) tools.

---

## Source: https://mlflow.org/releases

[MLflow 3.10.1](/releases/3.10.1)

MLflow 3.10.1 is a patch release that contains some minor feature enhancements, bug fixes, and documentation updates.

Features:

- [UI] Add try-it page on Gateway usage example modal (
[#21077](https://github.com/mlflow/mlflow/pull/21077),[@PattaraS](https://github.com/PattaraS)) - [UI] Filter gateway experiments from the experiment list page (
[#21130](https://github.com/mlflow/mlflow/pull/21130),[@copilot-swe-agent](https://github.com/copilot-swe-agent))

Bug fixes:

- [UI] Fix "View full dashboard" link in gateway usage tab when workspace is enabled (
[#21191](https://github.com/mlflow/mlflow/pull/21191),[@copilot-swe-agent](https://github.com/copilot-swe-agent)) - [UI] Persist AI Gateway default passphrase security banner dismissal to localStorage (
[#21292](https://github.com/mlflow/mlflow/pull/21292),[@copilot-swe-agent](https://github.com/copilot-swe-agent)) - [Evaluation] Demote unused parameters log message from WARNING to DEBUG in instructions judge (
[#21294](https://github.com/mlflow/mlflow/pull/21294),[@copilot-swe-agent](https://github.com/copilot-swe-agent)) - [UI] Clear "All" time selector when switching to overview tab (
[#21371](https://github.com/mlflow/mlflow/pull/21371),[@daniellok-db](https://github.com/daniellok-db)) - [Prompts / UI] Fix Traces view in Prompts tab not being scrollable (
[#21282](https://github.com/mlflow/mlflow/pull/21282),[@TomeHirata](https://github.com/TomeHirata)) - [UI] Fix judge builder instruction textarea (
[#21299](https://github.com/mlflow/mlflow/pull/21299),[@daniellok-db](https://github.com/daniellok-db)) - [UI] Fix group mode to aggregate "Additional runs" as "Unassigned" group in charts (
[#21155](https://github.com/mlflow/mlflow/pull/21155),[@copilot-swe-agent](https://github.com/copilot-swe-agent)) - [UI] Fix artifact download when workspaces are enabled (
[#21074](https://github.com/mlflow/mlflow/pull/21074),[@timsolovev](https://github.com/timsolovev)) - [Tracing] Fix NOT NULL constraint on assessments.trace_id during trace export (
[#21348](https://github.com/mlflow/mlflow/pull/21348),[@dbczumar](https://github.com/dbczumar)) - [Tracking] Fix 403 Forbidden for artifact list via query param when
`default_permission=NO_PERMISSIONS`

([#21220](https://github.com/mlflow/mlflow/pull/21220),[@copilot-swe-agent](https://github.com/copilot-swe-agent)) - [UI] [ML-63097] Fix broken LLM judge documentation links (
[#21347](https://github.com/mlflow/mlflow/pull/21347),[@smoorjani](https://github.com/smoorjani)) - [Tracing] Fix Run Judge failed with litellm.InternalServerError: Invalid response object. (
[#21262](https://github.com/mlflow/mlflow/pull/21262),[@PattaraS](https://github.com/PattaraS)) - [Tracing / UI] Update Action menu: indentation to avoid confusion (
[#21266](https://github.com/mlflow/mlflow/pull/21266),[@PattaraS](https://github.com/PattaraS)) - [Model Registry] Fix MlflowClient.copy_model_version for the case that copy UC model across workspaces (
[#21212](https://github.com/mlflow/mlflow/pull/21212),[@WeichenXu123](https://github.com/WeichenXu123)) - [UI] Fix empty description box rendering for sanitized-empty experiment descriptions (
[#21223](https://github.com/mlflow/mlflow/pull/21223),[@copilot-swe-agent](https://github.com/copilot-swe-agent)) - [Artifacts] Fix single artifact downloading through
`HttpArtifactRepository`

([#12955](https://github.com/mlflow/mlflow/pull/12955),[@Koenkk](https://github.com/Koenkk)) - [Tracing] Fix find_last_user_message_index skipping skill content injections (
[#21119](https://github.com/mlflow/mlflow/pull/21119),[@alkispoly-db](https://github.com/alkispoly-db)) - [Tracing] Fix retrieval context extraction when span outputs are stored as strings (
[#21213](https://github.com/mlflow/mlflow/pull/21213),[@smoorjani](https://github.com/smoorjani)) - [UI] Fix visibility toggle button in chart tooltip not working (
[#21071](https://github.com/mlflow/mlflow/pull/21071),[@daniellok-db](https://github.com/daniellok-db)) - [UI] Move gateway experiment filtering to server-side query to fix inconsistent page sizes (
[#21138](https://github.com/mlflow/mlflow/pull/21138),[@copilot-swe-agent](https://github.com/copilot-swe-agent)) - [Gateway] Downgrade spurious warning to debug log for gateway endpoints with fallback_config but no FALLBACK models (
[#21123](https://github.com/mlflow/mlflow/pull/21123),[@copilot-swe-agent](https://github.com/copilot-swe-agent)) - [Tracing] Fix MCP fn_wrapper to pass None for optional params with UNSET defaults (
[#21051](https://github.com/mlflow/mlflow/pull/21051),[@yangbaechu](https://github.com/yangbaechu)) - [Tracking] Add CASCADE to
`logged_model`

tables`experiment_id`

foreign keys ([#20185](https://github.com/mlflow/mlflow/pull/20185),[@harupy](https://github.com/harupy)) - [Tracing] Fix MCP fn_wrapper handling of Click UNSET defaults (
[#20953](https://github.com/mlflow/mlflow/pull/20953)) ([#20962](https://github.com/mlflow/mlflow/pull/20962),[@yangbaechu](https://github.com/yangbaechu))

Documentation updates:

- [Docs] Update SSO oidc plugin doc: add google identity platform / AWS cognito / Azure Entra ID configuration guide (
[#20591](https://github.com/mlflow/mlflow/pull/20591),[@WeichenXu123](https://github.com/WeichenXu123)) - [Docs / Tracing] Fix distributed tracing rendering and improve doc (
[#21070](https://github.com/mlflow/mlflow/pull/21070),[@B-Step62](https://github.com/B-Step62)) - [Docs] docs: Add single quotes to install commands with extras to prevent zsh errors (
[#21227](https://github.com/mlflow/mlflow/pull/21227),[@mshavliuk](https://github.com/mshavliuk)) - [Docs / Model Registry] Fix outdated docstring claiming models:/ URIs are unsupported in register_model (
[#21197](https://github.com/mlflow/mlflow/pull/21197),[@copilot-swe-agent](https://github.com/copilot-swe-agent)) - [Docs] Replace MinIO with RustFS in docker-compose setup (
[#21099](https://github.com/mlflow/mlflow/pull/21099),[@jmaggesi](https://github.com/jmaggesi))

For a comprehensive list of changes, see the [release change log](https://github.com/mlflow/mlflow/releases/tag/v3.10.1), and check out the latest documentation on [mlflow.org](http://mlflow.org/).

---

## Source: https://mlflow.org/blog

The leading open source AI engineering platform

Mastering the ML lifecycle

Debug, evaluate, monitor, and optimize your AI agents and LLM applications, with production-grade tracing, evaluation, prompt management, and much more.

Manage the full machine learning and deep learning model lifecycle, with experiment tracking, hyperparameter tuning, and beyond.

---

## Source: https://mlflow.org/ambassadors

We're thrilled to recognize our MLflow Ambassadors, a select group distinguished by their commitment to mentoring, teaching, and most importantly, building AI solutions.

These ambassadors are visible at various industry meetups and speaking engagements, as well as through their insightful contributions right here in our [MLflow Blog](/blog). They regularly share their invaluable expertise, experiences, and tips on leveraging MLflow for practical MLOps applications, as well as in-depth tutorials on how to leverage some of the more advanced features of MLflow. Representing a wide array of backgrounds and industries, each ambassador brings a unique perspective fueled by a shared enthusiasm for innovation and education in the field.

Are you interested in becoming an official MLflow Ambassador?

### Alfonso Roa Redondo

### Alvin Rindra Fazrie

### Aman Kumar

### Awadelrahman M.A. Ahmed

### Hadil Affes

### Hamza Usman Ghani

### Hugo Carvalho

### Imen Selmi

### Ivan Reyes

### Jacek Laskowski

### Joana Ferreira

### Koyelia Ghosh Roy

### Gin Ee Leow

### Maria Vechtomova

### Melina Solovey

### Miguel Diaz

### Oussama Boussaid

### Rahul Pandey

### Shekhar Shukla

### Shrinath Suresh

### Stavros Niafas

### Thor Steen

### Vitale Sparacello

- Promote MLflow projects and technology
- Educate a local community on the MLflow mission and technical aspects
- Engage in MLflow community growth

### Requirements

- Actively involved in the MLflow community as a contributor, blogger, speaker, etc.
- An active leader in the MLOps / AI community with a minimum of 1 year of experience in:
- Organizing events (virtual/in-person)
- Speaking at events
- Mentoring others
- Creating content (e.g., blogs, videos, etc.)

### Responsibilities

- Contribute technical content such as blog posts, video tutorials, training modules, etc.
- Organize and host local MLflow community events and meetups
- Help the community learn more about MLflow
- Advocate for MLflow at events, evangelizing and disseminating information about MLflow.
- Be a source of information and support for those interested in MLflow and help the local community learn more about MLflow.
- Facilitate the local community's understanding and exploration of MLflow.
- Publicly represent and uphold the interests of the MLflow community.

The MLflow Ambassador Selection Committee reviews applications every 6 months. We are focused on creating a group of Ambassadors that meet our requirements and represent our community and geographical diversity.