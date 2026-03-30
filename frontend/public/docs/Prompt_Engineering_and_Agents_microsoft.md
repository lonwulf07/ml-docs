# Microsoft Documentation
> Scraped on: 2026-03-30 | Root Source: [https://microsoft.github.io/autogen/](https://microsoft.github.io/autogen/)



---

## Source: https://microsoft.github.io/autogen/

If you are not redirected automatically, follow this
link to example.com
.
If you are not redirected automatically, follow this
link to example.com
.

---

## Source: https://microsoft.github.io/autogen/stable/

# AutoGen[#](#autogen)

# AutoGen

### A framework for building AI agents and applications

```
# pip install -U "autogen-agentchat" "autogen-ext[openai]"
import asyncio
from autogen_agentchat.agents import AssistantAgent
from autogen_ext.models.openai import OpenAIChatCompletionClient
async def main() -> None:
agent = AssistantAgent("assistant", OpenAIChatCompletionClient(model="gpt-4o"))
print(await agent.run(task="Say 'Hello World!'"))
asyncio.run(main())
```

*Start here if you are prototyping with agents using Python. Migrating from AutoGen 0.2?.*

An event-driven programming framework for building scalable multi-agent AI systems. Example scenarios:

Deterministic and dynamic agentic workflows for business processes.

Research on multi-agent collaboration.

Distributed agents for multi-language applications.


*Start here if you are getting serious about building multi-agent systems.*

Implementations of Core and AgentChat components that interface with external services or other libraries. You can find and use community extensions or create your own. Examples of built-in extensions:

for using Model-Context Protocol (MCP) servers.`McpWorkbench`

for using Assistant API.`OpenAIAssistantAgent`

for running model-generated code in a Docker container.`DockerCommandLineCodeExecutor`

for distributed agents.`GrpcWorkerAgentRuntime`