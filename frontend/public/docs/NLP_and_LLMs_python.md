# Python Documentation
> Scraped on: 2026-03-30 | Root Source: [https://python.langchain.com/docs/get_started/introduction](https://python.langchain.com/docs/get_started/introduction)



---

## Source: https://python.langchain.com/docs/get_started/introduction

## Requirements

For these examples, you will need to:[Install](/oss/python/langchain/install)the LangChain package- Set up a
[Claude (Anthropic)](https://www.anthropic.com/)account and get an API key - Set the
`ANTHROPIC_API_KEY`

environment variable in your terminal

[any supported model](/oss/python/integrations/providers/overview)by changing the model name in the code and setting up the appropriate API key.

## Build a basic agent

Start by creating a simple agent that can answer questions and call tools. The agent will use Claude Sonnet 4.6 as its language model, a basic weather function as a tool, and a simple prompt to guide its behavior.## Build a real-world agent

Next, build a practical weather forecasting agent that demonstrates key production concepts:**Detailed system prompts**for better agent behavior**Create tools**that integrate with external data**Model configuration**for consistent responsesfor predictable results[Structured output](/oss/python/langchain/structured-output)**Conversational memory**for chat-like interactions**Create and run the agent**to test the fully functional agent

Define the system prompt

The system prompt defines your agent’s role and behavior. Keep it specific and actionable:

Create tools

[Tools](/oss/python/langchain/tools)let a model interact with external systems by calling functions you define. Tools can depend on

[runtime context](/oss/python/langchain/runtime)and also interact with

[agent memory](/oss/python/langchain/short-term-memory).Notice below how the

`get_user_location`

tool uses runtime context:Configure your model

Set up your Depending on the model and provider chosen, initialization parameters may vary; refer to their reference pages for details.

[language model](/oss/python/langchain/models)with the right parameters for your use case:Define response format

Optionally, define a

[structured response format](/oss/python/langchain/structured-output)if you need the agent responses to match a specific schema.Add memory

Add

[memory](/oss/python/langchain/short-term-memory)to your agent to maintain state across interactions. This allows the agent to remember previous conversations and context.In production, use a persistent checkpointer that saves message history to a database.
See

[Add and manage memory](/oss/python/langgraph/add-memory#manage-short-term-memory)for more details.**Understand context**and remember conversations**Use multiple tools**intelligently**Provide structured responses**in a consistent format**Handle user-specific information**through context**Maintain conversation state**across interactions

[Connect these docs](/use-these-docs)to Claude, VSCode, and more via MCP for real-time answers.

---

## Source: https://python.langchain.com/

[more](/oss/python/integrations/providers/overview). LangChain provides a prebuilt agent architecture and model integrations to help you get started quickly and seamlessly incorporate LLMs into your agents and applications. LangChain

[agents](/oss/python/langchain/agents)are built on top of LangGraph in order to provide durable execution, streaming, human-in-the-loop, persistence, and more. You do not need to know LangGraph for basic LangChain agent usage. We recommend you use LangChain if you want to quickly build agents and autonomous applications.

## Create an agent

[Installation instructions](/oss/python/langchain/install)and

[Quickstart guide](/oss/python/langchain/quickstart)to get started building your own agents and applications with LangChain.

## Core benefits

## Standard model interface

Different providers have unique APIs for interacting with models, including the format of responses. LangChain standardizes how you interact with models so that you can seamlessly swap providers and avoid lock-in.

## Easy to use, highly flexible agent

LangChain’s agent abstraction is designed to be easy to get started with, letting you build a simple agent in under 10 lines of code. But it also provides enough flexibility to allow you to do all the context engineering your heart desires.

## Built on top of LangGraph

LangChain’s agents are built on top of LangGraph. This allows us to take advantage of LangGraph’s durable execution, human-in-the-loop support, persistence, and more.

## Debug with LangSmith

Gain deep visibility into complex agent behavior with visualization tools that trace execution paths, capture state transitions, and provide detailed runtime metrics.

[Connect these docs](/use-these-docs)to Claude, VSCode, and more via MCP for real-time answers.

---

## Source: https://python.langchain.com/oss/python/deepagents/overview

[more](/oss/python/integrations/providers/overview). LangChain provides a prebuilt agent architecture and model integrations to help you get started quickly and seamlessly incorporate LLMs into your agents and applications. LangChain

[agents](/oss/python/langchain/agents)are built on top of LangGraph in order to provide durable execution, streaming, human-in-the-loop, persistence, and more. You do not need to know LangGraph for basic LangChain agent usage. We recommend you use LangChain if you want to quickly build agents and autonomous applications.

## Create an agent

[Installation instructions](/oss/python/langchain/install)and

[Quickstart guide](/oss/python/langchain/quickstart)to get started building your own agents and applications with LangChain.

## Core benefits

## Standard model interface

Different providers have unique APIs for interacting with models, including the format of responses. LangChain standardizes how you interact with models so that you can seamlessly swap providers and avoid lock-in.

## Easy to use, highly flexible agent

LangChain’s agent abstraction is designed to be easy to get started with, letting you build a simple agent in under 10 lines of code. But it also provides enough flexibility to allow you to do all the context engineering your heart desires.

## Built on top of LangGraph

LangChain’s agents are built on top of LangGraph. This allows us to take advantage of LangGraph’s durable execution, human-in-the-loop support, persistence, and more.

## Debug with LangSmith

Gain deep visibility into complex agent behavior with visualization tools that trace execution paths, capture state transitions, and provide detailed runtime metrics.

[Connect these docs](/use-these-docs)to Claude, VSCode, and more via MCP for real-time answers.