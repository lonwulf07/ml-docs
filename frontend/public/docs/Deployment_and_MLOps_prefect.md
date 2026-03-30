# Prefect Documentation
> Scraped on: 2026-03-30 | Root Source: [https://docs.prefect.io/](https://docs.prefect.io/)



---

## Source: https://docs.prefect.io/

### Essential features

| Feature | Description |
|---|---|
Pythonic | Write workflows in native Python—no DSLs, YAML, or special syntax. Full support for type hints, async/await, and modern Python patterns. Use your existing IDE, debugger, and testing tools. |
State & Recovery | Robust state management that tracks success, failure, and retry states. Resume interrupted runs from the last successful point, and cache expensive computations to avoid unnecessary rework. |
Flexible & Portable Execution | Start flows locally for easy development, then deploy them anywhere—from a single process to containers, Kubernetes, or cloud services—without locking into a vendor. Infrastructure is defined by code (not just configuration), making it simple to scale or change environments. |
Event-Driven | Trigger flows on schedules, external events, or via API. Pause flows for human intervention or approval. Chain flows together based on states, conditions, or any custom logic. |
Dynamic Runtime | Create tasks dynamically at runtime based on actual data or conditions. Easily spawn new tasks and branches during execution for truly data-driven workflows. |
Modern UI | Real-time flow run monitoring, logging, and state tracking through an intuitive interface. View dependency graphs and DAGs automatically—just run your flow and open the UI. |
CI/CD First | Test and simulate flows like normal Python code, giving you fast feedback during development. Integrate seamlessly into your existing CI/CD pipeline for automated testing and deployment. |

## Quickstart

## Quickstart

Quickly create your first deployable workflow tracked by Prefect.

## Install Prefect

Install Prefect and get connected to Prefect Cloud or a self-hosted server.

## Connect AI assistants

Set up the Prefect MCP server for read-only diagnostics and built-in docs access.

## Upgrade to Prefect 3

Upgrade from Prefect 2 to Prefect 3 to get the latest features and performance enhancements.

## AI assistants and MCP

Use the Prefect MCP server to connect assistants like Claude Code, Cursor, Codex CLI, and Gemini CLI to your Prefect environment.## Set up the server

Install once to inspect deployments, flow runs, task runs, and logs while using integrated docs search.

## Review security model

Understand read-only MCP behavior, RBAC scope, and how MCP client capabilities differ from server tools.

## How-to guides

## Build workflows

Learn how to write and customize your Prefect workflows with tasks and flows.

## Deploy workflows

Deploy and manage your workflows as Prefect deployments.

## Configure infrastructure

Deploy your workflows to specific infrastructure platforms.

## Set up automations

Work with events, triggers, and automations to build reactive workflows.

## Configure Prefect

Configure your Prefect environment, secrets, and variables.

## Use Prefect Cloud

Set up and manage your Prefect Cloud account.

## Advanced

## Interactive workflows

Build interactive workflows that can pause and receive input.

## Platform engineering

Use Prefect as a platform for your teams’ data pipelines.

## Extend Prefect

Extend Prefect with custom blocks and API integrations.

## Examples

Check out the gallery of[examples](/v3/examples/index)to see Prefect in action.

## Mini-history of Prefect

**2018-2021:**Our story begins in 2018, when we introduced the idea that workflow orchestration should be Pythonic. Inspired by distributed tools like Dask, and building on the experience of our founder, Jeremiah Lowin (a PMC member of Apache Airflow), we created a system based on simple Python decorators for tasks and flows. But what made Prefect truly special was our introduction of task mapping—a feature that would later become foundational to our dynamic execution capabilities (and eventually imitated by other orchestration SDKs).

**2022:**Prefect’s 2.0 release became inevitable once we recognized that real-world workflows don’t always fit into neat, pre-planned DAG structures: sometimes you need to update a job definition based on runtime information, for example by skipping a branch of your workflow. So we removed a key constraint that workflows be written explicitly as DAGs, fully embracing native Python control flow—if/else conditionals, while loops-everything that makes Python…Python.

**2023-present:**With our release of Prefect 3.0 in 2024, we fully embraced these dynamic patterns by open-sourcing our events and automations backend, allowing users to natively represent event-driven workflows and gain additional observability into their execution. Prefect 3.0 also unlocked a leap forward in performance, improving the runtime overhead of Prefect by up to 90%.

## Join our community

Join Prefect’s vibrant[community of nearly 30,000 engineers](/contribute/index)to learn with others and share your knowledge!

## LLM-friendly formats

The docs are also available in[llms.txt format](https://llmstxt.org/):

[llms.txt](https://docs.prefect.io/llms.txt)- A sitemap listing all documentation pages[llms-full.txt](https://docs.prefect.io/llms-full.txt)- The entire documentation in one file (may exceed context windows)

`.md`

to the URL. For example, this page becomes `https://docs.prefect.io/v3/get-started.md`

.
You can also copy any page as markdown by pressing “Cmd+C” (or “Ctrl+C” on Windows) on your keyboard.

---

## Source: https://docs.prefect.io

### Essential features

| Feature | Description |
|---|---|
Pythonic | Write workflows in native Python—no DSLs, YAML, or special syntax. Full support for type hints, async/await, and modern Python patterns. Use your existing IDE, debugger, and testing tools. |
State & Recovery | Robust state management that tracks success, failure, and retry states. Resume interrupted runs from the last successful point, and cache expensive computations to avoid unnecessary rework. |
Flexible & Portable Execution | Start flows locally for easy development, then deploy them anywhere—from a single process to containers, Kubernetes, or cloud services—without locking into a vendor. Infrastructure is defined by code (not just configuration), making it simple to scale or change environments. |
Event-Driven | Trigger flows on schedules, external events, or via API. Pause flows for human intervention or approval. Chain flows together based on states, conditions, or any custom logic. |
Dynamic Runtime | Create tasks dynamically at runtime based on actual data or conditions. Easily spawn new tasks and branches during execution for truly data-driven workflows. |
Modern UI | Real-time flow run monitoring, logging, and state tracking through an intuitive interface. View dependency graphs and DAGs automatically—just run your flow and open the UI. |
CI/CD First | Test and simulate flows like normal Python code, giving you fast feedback during development. Integrate seamlessly into your existing CI/CD pipeline for automated testing and deployment. |

## Quickstart

## Quickstart

Quickly create your first deployable workflow tracked by Prefect.

## Install Prefect

Install Prefect and get connected to Prefect Cloud or a self-hosted server.

## Connect AI assistants

Set up the Prefect MCP server for read-only diagnostics and built-in docs access.

## Upgrade to Prefect 3

Upgrade from Prefect 2 to Prefect 3 to get the latest features and performance enhancements.

## AI assistants and MCP

Use the Prefect MCP server to connect assistants like Claude Code, Cursor, Codex CLI, and Gemini CLI to your Prefect environment.## Set up the server

Install once to inspect deployments, flow runs, task runs, and logs while using integrated docs search.

## Review security model

Understand read-only MCP behavior, RBAC scope, and how MCP client capabilities differ from server tools.

## How-to guides

## Build workflows

Learn how to write and customize your Prefect workflows with tasks and flows.

## Deploy workflows

Deploy and manage your workflows as Prefect deployments.

## Configure infrastructure

Deploy your workflows to specific infrastructure platforms.

## Set up automations

Work with events, triggers, and automations to build reactive workflows.

## Configure Prefect

Configure your Prefect environment, secrets, and variables.

## Use Prefect Cloud

Set up and manage your Prefect Cloud account.

## Advanced

## Interactive workflows

Build interactive workflows that can pause and receive input.

## Platform engineering

Use Prefect as a platform for your teams’ data pipelines.

## Extend Prefect

Extend Prefect with custom blocks and API integrations.

## Examples

Check out the gallery of[examples](/v3/examples/index)to see Prefect in action.

## Mini-history of Prefect

**2018-2021:**Our story begins in 2018, when we introduced the idea that workflow orchestration should be Pythonic. Inspired by distributed tools like Dask, and building on the experience of our founder, Jeremiah Lowin (a PMC member of Apache Airflow), we created a system based on simple Python decorators for tasks and flows. But what made Prefect truly special was our introduction of task mapping—a feature that would later become foundational to our dynamic execution capabilities (and eventually imitated by other orchestration SDKs).

**2022:**Prefect’s 2.0 release became inevitable once we recognized that real-world workflows don’t always fit into neat, pre-planned DAG structures: sometimes you need to update a job definition based on runtime information, for example by skipping a branch of your workflow. So we removed a key constraint that workflows be written explicitly as DAGs, fully embracing native Python control flow—if/else conditionals, while loops-everything that makes Python…Python.

**2023-present:**With our release of Prefect 3.0 in 2024, we fully embraced these dynamic patterns by open-sourcing our events and automations backend, allowing users to natively represent event-driven workflows and gain additional observability into their execution. Prefect 3.0 also unlocked a leap forward in performance, improving the runtime overhead of Prefect by up to 90%.

## Join our community

Join Prefect’s vibrant[community of nearly 30,000 engineers](/contribute/index)to learn with others and share your knowledge!

## LLM-friendly formats

The docs are also available in[llms.txt format](https://llmstxt.org/):

[llms.txt](https://docs.prefect.io/llms.txt)- A sitemap listing all documentation pages[llms-full.txt](https://docs.prefect.io/llms-full.txt)- The entire documentation in one file (may exceed context windows)

`.md`

to the URL. For example, this page becomes `https://docs.prefect.io/v3/get-started.md`

.
You can also copy any page as markdown by pressing “Cmd+C” (or “Ctrl+C” on Windows) on your keyboard.

---

## Source: https://docs.prefect.io/v3/get-started

### Essential features

| Feature | Description |
|---|---|
Pythonic | Write workflows in native Python—no DSLs, YAML, or special syntax. Full support for type hints, async/await, and modern Python patterns. Use your existing IDE, debugger, and testing tools. |
State & Recovery | Robust state management that tracks success, failure, and retry states. Resume interrupted runs from the last successful point, and cache expensive computations to avoid unnecessary rework. |
Flexible & Portable Execution | Start flows locally for easy development, then deploy them anywhere—from a single process to containers, Kubernetes, or cloud services—without locking into a vendor. Infrastructure is defined by code (not just configuration), making it simple to scale or change environments. |
Event-Driven | Trigger flows on schedules, external events, or via API. Pause flows for human intervention or approval. Chain flows together based on states, conditions, or any custom logic. |
Dynamic Runtime | Create tasks dynamically at runtime based on actual data or conditions. Easily spawn new tasks and branches during execution for truly data-driven workflows. |
Modern UI | Real-time flow run monitoring, logging, and state tracking through an intuitive interface. View dependency graphs and DAGs automatically—just run your flow and open the UI. |
CI/CD First | Test and simulate flows like normal Python code, giving you fast feedback during development. Integrate seamlessly into your existing CI/CD pipeline for automated testing and deployment. |

## Quickstart

## Quickstart

Quickly create your first deployable workflow tracked by Prefect.

## Install Prefect

Install Prefect and get connected to Prefect Cloud or a self-hosted server.

## Connect AI assistants

Set up the Prefect MCP server for read-only diagnostics and built-in docs access.

## Upgrade to Prefect 3

Upgrade from Prefect 2 to Prefect 3 to get the latest features and performance enhancements.

## AI assistants and MCP

Use the Prefect MCP server to connect assistants like Claude Code, Cursor, Codex CLI, and Gemini CLI to your Prefect environment.## Set up the server

Install once to inspect deployments, flow runs, task runs, and logs while using integrated docs search.

## Review security model

Understand read-only MCP behavior, RBAC scope, and how MCP client capabilities differ from server tools.

## How-to guides

## Build workflows

Learn how to write and customize your Prefect workflows with tasks and flows.

## Deploy workflows

Deploy and manage your workflows as Prefect deployments.

## Configure infrastructure

Deploy your workflows to specific infrastructure platforms.

## Set up automations

Work with events, triggers, and automations to build reactive workflows.

## Configure Prefect

Configure your Prefect environment, secrets, and variables.

## Use Prefect Cloud

Set up and manage your Prefect Cloud account.

## Advanced

## Interactive workflows

Build interactive workflows that can pause and receive input.

## Platform engineering

Use Prefect as a platform for your teams’ data pipelines.

## Extend Prefect

Extend Prefect with custom blocks and API integrations.

## Examples

Check out the gallery of[examples](/v3/examples/index)to see Prefect in action.

## Mini-history of Prefect

**2018-2021:**Our story begins in 2018, when we introduced the idea that workflow orchestration should be Pythonic. Inspired by distributed tools like Dask, and building on the experience of our founder, Jeremiah Lowin (a PMC member of Apache Airflow), we created a system based on simple Python decorators for tasks and flows. But what made Prefect truly special was our introduction of task mapping—a feature that would later become foundational to our dynamic execution capabilities (and eventually imitated by other orchestration SDKs).

**2022:**Prefect’s 2.0 release became inevitable once we recognized that real-world workflows don’t always fit into neat, pre-planned DAG structures: sometimes you need to update a job definition based on runtime information, for example by skipping a branch of your workflow. So we removed a key constraint that workflows be written explicitly as DAGs, fully embracing native Python control flow—if/else conditionals, while loops-everything that makes Python…Python.

**2023-present:**With our release of Prefect 3.0 in 2024, we fully embraced these dynamic patterns by open-sourcing our events and automations backend, allowing users to natively represent event-driven workflows and gain additional observability into their execution. Prefect 3.0 also unlocked a leap forward in performance, improving the runtime overhead of Prefect by up to 90%.

## Join our community

Join Prefect’s vibrant[community of nearly 30,000 engineers](/contribute/index)to learn with others and share your knowledge!

## LLM-friendly formats

The docs are also available in[llms.txt format](https://llmstxt.org/):

[llms.txt](https://docs.prefect.io/llms.txt)- A sitemap listing all documentation pages[llms-full.txt](https://docs.prefect.io/llms-full.txt)- The entire documentation in one file (may exceed context windows)

`.md`

to the URL. For example, this page becomes `https://docs.prefect.io/v3/get-started.md`

.
You can also copy any page as markdown by pressing “Cmd+C” (or “Ctrl+C” on Windows) on your keyboard.

---

## Source: https://docs.prefect.io/v3/concepts

## Sections

## Workflows

Learn about the core concepts for building and running workflows.

## Deployments

Learn about the concepts behind deploying and executing workflows.

## Configuration

Learn about configuring your Prefect environment and workflows.

## Automations

Learn about events, triggers, and automations.

## Prefect Cloud

Learn about Prefect Cloud-specific concepts and features.

---

## Source: https://docs.prefect.io/v3/how-to-guides

## Sections

## Workflows

Learn how to write and customize your Prefect workflows.

## Deployments

Learn how to deploy and manage your workflows as Prefect deployments.

## Configuration

Learn how to configure your Prefect environment.

## Automations

Learn how to work with events, triggers, and automations.

## Workflow Infrastructure

Learn how to deploy your workflows to specific infrastructure.

## Prefect Cloud

Learn how to set up your Prefect Cloud account.

## Prefect Self-hosted

Learn how to host your own Prefect server.

## AI

Learn how to integrate AI assistants with Prefect.

## Migrate

Learn how to migrate from other platforms and upgrade to the latest versions of Prefect.