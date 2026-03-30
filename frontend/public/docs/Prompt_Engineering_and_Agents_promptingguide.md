# Promptingguide Documentation
> Scraped on: 2026-03-30 | Root Source: [https://www.promptingguide.ai/](https://www.promptingguide.ai/)



---

## Source: https://www.promptingguide.ai/

# Prompt Engineering Guide

Prompt engineering is a relatively new discipline for developing and optimizing prompts to efficiently use language models (LMs) for a wide variety of applications and research topics. Prompt engineering skills help to better understand the capabilities and limitations of large language models (LLMs).

Researchers use prompt engineering to improve the capacity of LLMs on a wide range of common and complex tasks such as question answering and arithmetic reasoning. Developers use prompt engineering to design robust and effective prompting techniques that interface with LLMs and other tools.

Prompt engineering is not just about designing and developing prompts. It encompasses a wide range of skills and techniques that are useful for interacting and developing with LLMs. It's an important skill to interface, build with, and understand capabilities of LLMs. You can use prompt engineering to improve safety of LLMs and build new capabilities like augmenting LLMs with domain knowledge and external tools.

Motivated by the high interest in developing with LLMs, we have created this new prompt engineering guide that contains all the latest papers, advanced prompting techniques, learning guides, model-specific prompting guides, lectures, references, new LLM capabilities, and tools related to prompt engineering.

## Related Learning

[CourseBeginner2 hours](https://academy.dair.ai/courses/introduction-prompt-engineering)

### Prompt Engineering for LLMs

Learn essential prompt engineering techniques to get the most out of large language models. From basic prompting to advanced strategies.

[CourseIntermediate5 hours](https://academy.dair.ai/courses/building-effective-ai-agents)

### Building Effective AI Agents

Learn to build effective AI agents. Covers function calling, tool integration, and debugging agentic systems.

### Explore All Courses

Discover our full catalog of AI and prompt engineering courses. From beginners to advanced practitioners.Use code `PROMPTING20`

for 20% off!

[Browse Academy](https://academy.dair.ai/)

---

## Source: https://www.promptingguide.ai/about

# About

The Prompt Engineering Guide is a project by [DAIR.AI (opens in a new tab)](https://github.com/dair-ai). It aims to educate researchers and practitioners about prompt engineering, context engineering, RAG, and AI Agents.

DAIR.AI aims to democratize AI research, education, and technologies. Our mission is to enable the next-generation of AI innovators and creators.

## Sponsorship

We are open to sponsorship opportunities to help us continue building and maintaining this guide. If you're interested in sponsoring this project, please reach out to us at [hello@dair.ai](mailto:hello@dair.ai).

## Contributions

We welcome contributions from the community. Lookout for the Edit buttons.

License information [here (opens in a new tab)](https://github.com/dair-ai/Prompt-Engineering-Guide#license).

We borrow inspirations from many open resources like [OpenAI CookBook (opens in a new tab)](https://github.com/openai/openai-cookbook), [Pretrain, Prompt, Predict (opens in a new tab)](http://pretrain.nlpedia.ai/), [Learn Prompting (opens in a new tab)](https://learnprompting.org/), and many others.

---

## Source: https://www.promptingguide.ai/services

# Services

Welcome to our services page! Here you can find information about the services we offer.

## Our Offerings

### Trainings & Workshops

We offer both cohort-based trainings for teams to learn how to systematically apply proven techniques around prompt engineering, context engineering, RAG, and AI Agents.

If you looking for a private training, please request more information at [training@dair.ai](mailto:training@dair.ai)

### Consulting

We offer expert technical consulting services for prompt engineering, context engineering, RAG, and AI Agents.

Reach out to [hello@dair.ai](mailto:hello@dair.ai) or book a session [here (opens in a new tab)](https://calendly.com/elvisosaravia/connect-with-elvis-saravia).

### Custom Solutions

If you are looking to implement tailored AI solutions for your specific needs, we can help you with that.

Reach out to [hello@dair.ai](mailto:hello@dair.ai) to connect with our team.

---

## Source: https://www.promptingguide.ai/introduction

# Introduction

Prompt engineering is a relatively new discipline for developing and optimizing prompts to efficiently apply and build with large language models (LLMs) for a wide variety of applications and use cases.

Prompt engineering skills help to better understand the capabilities and limitations of LLMs. Researchers use prompt engineering to improve safety and the capacity of LLMs on a wide range of common and complex tasks such as question answering and arithmetic reasoning. Developers use prompt engineering to design robust and effective prompting techniques that interface with LLMs and other tools.

This comprehensive guide covers the theory and practical aspects of prompt engineering and how to leverage the best prompting techniques to interact and build with LLMs.

All examples are tested with `gpt-3.5-turbo`

using the [OpenAI's Playground (opens in a new tab)](https://platform.openai.com/playground) unless otherwise specified. The model uses the default configurations, i.e., `temperature=1`

and `top_p=1`

. The prompts should also work with other models that have similar capabilities as `gpt-3.5-turbo`

but the model responses may vary.

---

## Source: https://www.promptingguide.ai/introduction/settings

# LLM Settings

When designing and testing prompts, you typically interact with the LLM via an API. You can configure a few parameters to get different results for your prompts. Tweaking these settings are important to improve reliability and desirability of responses and it takes a bit of experimentation to figure out the proper settings for your use cases. Below are the common settings you will come across when using different LLM providers:

**Temperature** - In short, the lower the `temperature`

, the more deterministic the results in the sense that the highest probable next token is always picked. Increasing temperature could lead to more randomness, which encourages more diverse or creative outputs. You are essentially increasing the weights of the other possible tokens. In terms of application, you might want to use a lower temperature value for tasks like fact-based QA to encourage more factual and concise responses. For poem generation or other creative tasks, it might be beneficial to increase the temperature value.

**Top P** - A sampling technique with temperature, called nucleus sampling, where you can control how deterministic the model is. If you are looking for exact and factual answers keep this low. If you are looking for more diverse responses, increase to a higher value. If you use Top P it means that only the tokens comprising the `top_p`

probability mass are considered for responses, so a low `top_p`

value selects the most confident responses. This means that a high `top_p`

value will enable the model to look at more possible words, including less likely ones, leading to more diverse outputs.

The general recommendation is to alter temperature or Top P but not both.

**Max Length** - You can manage the number of tokens the model generates by adjusting the `max length`

. Specifying a max length helps you prevent long or irrelevant responses and control costs.

**Stop Sequences** - A `stop sequence`

is a string that stops the model from generating tokens. Specifying stop sequences is another way to control the length and structure of the model's response. For example, you can tell the model to generate lists that have no more than 10 items by adding "11" as a stop sequence.

**Frequency Penalty** - The `frequency penalty`

applies a penalty on the next token proportional to how many times that token already appeared in the response and prompt. The higher the frequency penalty, the less likely a word will appear again. This setting reduces the repetition of words in the model's response by giving tokens that appear more a higher penalty.

**Presence Penalty** - The `presence penalty`

also applies a penalty on repeated tokens but, unlike the frequency penalty, the penalty is the same for all repeated tokens. A token that appears twice and a token that appears 10 times are penalized the same. This setting prevents the model from repeating phrases too often in its response. If you want the model to generate diverse or creative text, you might want to use a higher presence penalty. Or, if you need the model to stay focused, try using a lower presence penalty.

Similar to `temperature`

and `top_p`

, the general recommendation is to alter the frequency or presence penalty but not both.

Before starting with some basic examples, keep in mind that your results may vary depending on the version of LLM you use.

## Related Learning

[CourseBeginner2 hours](https://academy.dair.ai/courses/introduction-prompt-engineering)

### Prompt Engineering for LLMs

Learn how to configure temperature, top-p, and other LLM parameters for optimal results in our comprehensive course.

[CourseIntermediate5 hours](https://academy.dair.ai/courses/building-effective-ai-agents)

### Building Effective AI Agents

Learn to build effective AI agents. Covers function calling, tool integration, and debugging agentic systems.

### Explore All Courses

Discover our full catalog of AI and prompt engineering courses. From beginners to advanced practitioners.Use code `PROMPTING20`

for 20% off!

[Browse Academy](https://academy.dair.ai/)

---

## Source: https://www.promptingguide.ai/introduction/basics

# Basics of Prompting

## Prompting an LLM

You can achieve a lot with simple prompts, but the quality of results depends on how much information you provide it and how well-crafted the prompt is. A prompt can contain information like the *instruction* or *question* you are passing to the model and include other details such as *context*, *inputs*, or *examples*. You can use these elements to instruct the model more effectively to improve the quality of results.

Let's get started by going over a basic example of a simple prompt:

*Prompt*

`The sky is`


*Output:*

`blue.`


If you are using the OpenAI Playground or any other LLM playground, you can prompt the model as shown in the following screenshot:

Here is a tutorial on how to get started with the OpenAI Playground:

Something to note is that when using the OpenAI chat models like `gpt-3.5-turbo`

or `gpt-4`

, you can structure your prompt using three different roles: `system`

, `user`

, and `assistant`

. The system message is not required but helps to set the overall behavior of the assistant. The example above only includes a user message which you can use to directly prompt the model. For simplicity, all of the examples, except when it's explicitly mentioned, will use only the `user`

message to prompt the `gpt-3.5-turbo`

model. The `assistant`

message in the example above corresponds to the model response. You can also define an assistant message to pass examples of the desired behavior you want. You can learn more about working with chat models [here (opens in a new tab)](https://www.promptingguide.ai/models/chatgpt).

You can observe from the prompt example above that the language model responds with a sequence of tokens that make sense given the context `"The sky is"`

. The output might be unexpected or far from the task you want to accomplish. In fact, this basic example highlights the necessity to provide more context or instructions on what specifically you want to achieve with the system. This is what prompt engineering is all about.

Let's try to improve it a bit:

*Prompt:*

```
Complete the sentence:
The sky is
```


*Output:*

`blue during the day and dark at night.`


Is that better? Well, with the prompt above you are instructing the model to complete the sentence so the result looks a lot better as it follows exactly what you told it to do ("complete the sentence"). This approach of designing effective prompts to instruct the model to perform a desired task is what's referred to as **prompt engineering** in this guide.

The example above is a basic illustration of what's possible with LLMs today. Today's LLMs are able to perform all kinds of advanced tasks that range from text summarization to mathematical reasoning to code generation.

## Prompt Formatting

You have tried a very simple prompt above. A standard prompt has the following format:

`<Question>?`


or

`<Instruction>`


You can format this into a question answering (QA) format, which is standard in a lot of QA datasets, as follows:

```
Q: <Question>?
A:
```


When prompting like the above, it's also referred to as *zero-shot prompting*, i.e., you are directly prompting the model for a response without any examples or demonstrations about the task you want it to achieve. Some large language models have the ability to perform zero-shot prompting but it depends on the complexity and knowledge of the task at hand and the tasks the model was trained to perform good on.

A concrete prompt example is as follows:

*Prompt*

`Q: What is prompt engineering?`


With some of the more recent models you can skip the "Q:" part as it is implied and understood by the model as a question answering task based on how the sequence is composed. In other words, the prompt could be simplified as follows:

*Prompt*

`What is prompt engineering?`


Given the standard format above, one popular and effective technique to prompting is referred to as *few-shot prompting* where you provide exemplars (i.e., demonstrations). You can format few-shot prompts as follows:

```
<Question>?
<Answer>
<Question>?
<Answer>
<Question>?
<Answer>
<Question>?
```


The QA format version would look like this:

```
Q: <Question>?
A: <Answer>
Q: <Question>?
A: <Answer>
Q: <Question>?
A: <Answer>
Q: <Question>?
A:
```


Keep in mind that it's not required to use the QA format. The prompt format depends on the task at hand. For instance, you can perform a simple classification task and give exemplars that demonstrate the task as follows:

*Prompt:*

```
This is awesome! // Positive
This is bad! // Negative
Wow that movie was rad! // Positive
What a horrible show! //
```


*Output:*

`Negative`


Few-shot prompts enable in-context learning, which is the ability of language models to learn tasks given a few demonstrations. We discuss zero-shot prompting and few-shot prompting more extensively in upcoming sections.

## Related Learning

[CourseBeginner2 hours](https://academy.dair.ai/courses/introduction-prompt-engineering)

### Prompt Engineering for LLMs

Master zero-shot, few-shot, and advanced prompting methods to get better results from large language models.

[CourseIntermediate5 hours](https://academy.dair.ai/courses/building-effective-ai-agents)

### Building Effective AI Agents

Learn to build effective AI agents. Covers function calling, tool integration, and debugging agentic systems.

### Explore All Courses

Discover our full catalog of AI and prompt engineering courses. From beginners to advanced practitioners.Use code `PROMPTING20`

for 20% off!

[Browse Academy](https://academy.dair.ai/)

---

## Source: https://www.promptingguide.ai/introduction/elements

# Elements of a Prompt

As we cover more and more examples and applications with prompt engineering, you will notice that certain elements make up a prompt.

A prompt contains any of the following elements:

**Instruction** - a specific task or instruction you want the model to perform

**Context** - external information or additional context that can steer the model to better responses

**Input Data** - the input or question that we are interested to find a response for

**Output Indicator** - the type or format of the output.

To demonstrate the prompt elements better, here is a simple prompt that aims to perform a text classification task:

*Prompt*

```
Classify the text into neutral, negative, or positive
Text: I think the food was okay.
Sentiment:
```


In the prompt example above, the instruction correspond to the classification task, "Classify the text into neutral, negative, or positive". The input data corresponds to the "I think the food was okay.' part, and the output indicator used is "Sentiment:". Note that this basic example doesn't use context but this can also be provided as part of the prompt. For instance, the context for this text classification prompt can be additional examples provided as part of the prompt to help the model better understand the task and steer the type of outputs that you expect.

You do not need all the four elements for a prompt and the format depends on the task at hand. We will touch on more concrete examples in upcoming guides.

## Related Learning

[CourseBeginner2 hours](https://academy.dair.ai/courses/introduction-prompt-engineering)

### Prompt Engineering for LLMs

Master zero-shot, few-shot, and advanced prompting methods to get better results from large language models.

[CourseIntermediate5 hours](https://academy.dair.ai/courses/building-effective-ai-agents)

### Building Effective AI Agents

Learn to build effective AI agents. Covers function calling, tool integration, and debugging agentic systems.

### Explore All Courses

Discover our full catalog of AI and prompt engineering courses. From beginners to advanced practitioners.Use code `PROMPTING20`

for 20% off!

[Browse Academy](https://academy.dair.ai/)

---

## Source: https://www.promptingguide.ai/introduction/tips

# General Tips for Designing Prompts

Here are some tips to keep in mind while you are designing your prompts:

### Start Simple

As you get started with designing prompts, you should keep in mind that it is really an iterative process that requires a lot of experimentation to get optimal results. Using a simple playground from OpenAI or Cohere is a good starting point.

You can start with simple prompts and keep adding more elements and context as you aim for better results. Iterating your prompt along the way is vital for this reason. As you read the guide, you will see many examples where specificity, simplicity, and conciseness will often give you better results.

When you have a big task that involves many different subtasks, you can try to break down the task into simpler subtasks and keep building up as you get better results. This avoids adding too much complexity to the prompt design process at the beginning.

### The Instruction

You can design effective prompts for various simple tasks by using commands to instruct the model what you want to achieve, such as "Write", "Classify", "Summarize", "Translate", "Order", etc.

Keep in mind that you also need to experiment a lot to see what works best. Try different instructions with different keywords, contexts, and data and see what works best for your particular use case and task. Usually, the more specific and relevant the context is to the task you are trying to perform, the better. We will touch on the importance of sampling and adding more context in the upcoming guides.

Others recommend that you place instructions at the beginning of the prompt. Another recommendation is to use some clear separator like "###" to separate the instruction and context.

For instance:

*Prompt:*

```
### Instruction ###
Translate the text below to Spanish:
Text: "hello!"
```


*Output:*

`¡Hola!`


### Specificity

Be very specific about the instruction and task you want the model to perform. The more descriptive and detailed the prompt is, the better the results. This is particularly important when you have a desired outcome or style of generation you are seeking. There aren't specific tokens or keywords that lead to better results. It's more important to have a good format and descriptive prompt. In fact, providing examples in the prompt is very effective to get desired output in specific formats.

When designing prompts, you should also keep in mind the length of the prompt as there are limitations regarding how long the prompt can be. Thinking about how specific and detailed you should be. Including too many unnecessary details is not necessarily a good approach. The details should be relevant and contribute to the task at hand. This is something you will need to experiment with a lot. We encourage a lot of experimentation and iteration to optimize prompts for your applications.

As an example, let's try a simple prompt to extract specific information from a piece of text.

*Prompt:*

```
Extract the name of places in the following text.
Desired format:
Place: <comma_separated_list_of_places>
Input: "Although these developments are encouraging to researchers, much is still a mystery. “We often have a black box between the brain and the effect we see in the periphery,” says Henrique Veiga-Fernandes, a neuroimmunologist at the Champalimaud Centre for the Unknown in Lisbon. “If we want to use it in the therapeutic context, we actually need to understand the mechanism.“"
```


*Output:*

`Place: Champalimaud Centre for the Unknown, Lisbon`


Input text is obtained from [this Nature article (opens in a new tab)](https://www.nature.com/articles/d41586-023-00509-z).

### Avoid Impreciseness

Given the tips above about being detailed and improving format, it's easy to fall into the trap of wanting to be too clever about prompts and potentially creating imprecise descriptions. It's often better to be specific and direct. The analogy here is very similar to effective communication -- the more direct, the more effective the message gets across.

For example, you might be interested in learning the concept of prompt engineering. You might try something like:

`Explain the concept prompt engineering. Keep the explanation short, only a few sentences, and don't be too descriptive.`


It's not clear from the prompt above how many sentences to use and what style. You might still somewhat get good responses with the above prompts but the better prompt would be one that is very specific, concise, and to the point. Something like:

`Use 2-3 sentences to explain the concept of prompt engineering to a high school student.`


### To do or not to do?

Another common tip when designing prompts is to avoid saying what not to do but say what to do instead. This encourages more specificity and focuses on the details that lead to good responses from the model.

Here is an example of a movie recommendation chatbot failing at exactly what I don't want it to do because of how I wrote the instruction -- focusing on what not to do.

*Prompt:*

```
The following is an agent that recommends movies to a customer. DO NOT ASK FOR INTERESTS. DO NOT ASK FOR PERSONAL INFORMATION.
Customer: Please recommend a movie based on my interests.
Agent:
```


*Output:*

`Sure, I can recommend a movie based on your interests. What kind of movie would you like to watch? Do you prefer action, comedy, romance, or something else?`


Here is a better prompt:

*Prompt:*

```
The following is an agent that recommends movies to a customer. The agent is responsible to recommend a movie from the top global trending movies. It should refrain from asking users for their preferences and avoid asking for personal information. If the agent doesn't have a movie to recommend, it should respond "Sorry, couldn't find a movie to recommend today.".
Customer: Please recommend a movie based on my interests.
Agent:
```


*Output:*

`Sorry, I don't have any information about your interests. However, here's a list of the top global trending movies right now: [list of movies]. I hope you find something you like!`


Some of the examples above were adopted from the ["Best practices for prompt engineering with OpenAI API" article. (opens in a new tab)](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api)

## Related Learning

[CourseBeginner2 hours](https://academy.dair.ai/courses/introduction-prompt-engineering)

### Prompt Engineering for LLMs

Master prompt design techniques including specificity, formatting, and instruction crafting for better LLM results.

[CourseIntermediate5 hours](https://academy.dair.ai/courses/building-effective-ai-agents)

### Building Effective AI Agents

Learn to build effective AI agents. Covers function calling, tool integration, and debugging agentic systems.

### Explore All Courses

Discover our full catalog of AI and prompt engineering courses. From beginners to advanced practitioners.Use code `PROMPTING20`

for 20% off!

[Browse Academy](https://academy.dair.ai/)