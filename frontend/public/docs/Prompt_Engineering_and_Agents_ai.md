# Ai Documentation
> Scraped on: 2026-03-30 | Root Source: [https://ai.google.dev/gemini-api/docs](https://ai.google.dev/gemini-api/docs)



---

## Source: https://ai.google.dev/gemini-api/docs

# Gemini API

The fastest path from prompt to production with Gemini, Veo, Nano Banana, and more.

### Python

```
from google import genai
client = genai.Client()
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents="Explain how AI works in a few words",
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: "Explain how AI works in a few words",
});
console.log(response.text);
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
result, err := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
genai.Text("Explain how AI works in a few words"),
nil,
)
if err != nil {
log.Fatal(err)
}
fmt.Println(result.Text())
}
```


### Java

```
package com.example;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
public class GenerateTextFromTextInput {
public static void main(String[] args) {
Client client = new Client();
GenerateContentResponse response =
client.models.generateContent(
"gemini-3-flash-preview",
"Explain how AI works in a few words",
null);
System.out.println(response.text());
}
}
```


### C#

```
using System.Threading.Tasks;
using Google.GenAI;
using Google.GenAI.Types;
public class GenerateContentSimpleText {
public static async Task main() {
var client = new Client();
var response = await client.Models.GenerateContentAsync(
model: "gemini-3-flash-preview", contents: "Explain how AI works in a few words"
);
Console.WriteLine(response.Candidates[0].Content.Parts[0].Text);
}
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"text": "Explain how AI works in a few words"
}
]
}
]
}'
```


[Start building](/gemini-api/docs/quickstart)

Follow our Quickstart guide to get an API key and make your first API call in minutes.

## Meet the models

[View all](/gemini-api/docs/models)


New

Gemini 3.1 ProOur most intelligent model, the best in the world for multimodal understanding, all built on state-of-the-art reasoning.


New

Gemini 3 FlashFrontier-class performance rivaling larger models at a fraction of the cost.


New

Gemini 3.1 Flash-LiteHigh-volume, cost-sensitive workhorse model with the performance and quality of the Gemini 3 series.


Nano Banana 2 and Nano Banana Pro

State-of-the-art image generation and editing models.


Veo 3.1

Our state-of-the-art video generation model, with native audio.


Gemini Robotics

A vision-language model (VLM) that brings Gemini's agentic capabilities to robotics and enables advanced reasoning in the physical world.

## Explore Capabilities

[
](/gemini-api/docs/image-generation)

Native Image Generation (Nano Banana)

Generate and edit highly contextual images natively with Gemini 2.5 Flash Image.

[
](/gemini-api/docs/long-context)

Long Context

Input millions of tokens to Gemini models and derive understanding from unstructured images, videos, and documents.

[
](/gemini-api/docs/structured-output)

Structured Outputs

Constrain Gemini to respond with JSON, a structured data format suitable for automated processing.

[
](/gemini-api/docs/function-calling)

Function Calling

Build agentic workflows by connecting Gemini to external APIs and tools.

[
](/gemini-api/docs/video)

Video Generation with Veo 3.1

Create high-quality video content from text or image prompts with our state-of-the-art model.

[
](/gemini-api/docs/live)

Voice Agents with Live API

Build real-time voice applications and agents with the Live API.

[
](/gemini-api/docs/tools)

Tools

Connect Gemini to the world through built-in tools like Google Search, URL Context, Google Maps, Code Execution and Computer Use.

[
](/gemini-api/docs/document-processing)

Document Understanding

Process up to 1000 pages of PDF files with full multimodal understanding or other text-based file types.

[
](/gemini-api/docs/thinking)

Thinking

Explore how thinking capabilities improve reasoning for complex tasks and agents.

---

## Source: https://ai.google.dev/

[
New
Build with Gemini 3 Flash, our frontier intelligence built for speed and scale
](https://aistudio.google.com/apps)

# AI for every

developer

Unlock AI models to build innovative apps and transform development workflows with tools across platforms.

[Explore models in Google AI Studio](https://aistudio.google.com)

## Start building

Get started building with cutting-edge AI models and tools

### Integrate Google AI models with an API key

Build with cutting-edge AI models, like Gemini, Imagen, and Veo, from Google DeepMind

[View Gemini API docs](https://ai.google.dev/gemini-api/docs)

### Own your AI with Gemma open models

Build custom AI solutions and retain complete control. Tailor Gemma models, built from the same research and technology as Gemini, with your own data.

[Build with Gemma](https://ai.google.dev/gemma)

### Run AI models on-device with Google AI Edge

Build and deploy edge ML solutions across mobile, web, and embedded applications, from simple APIs to custom pipelines, with support across all major frameworks.

[Explore Google AI Edge](https://ai.google.dev/edge)

### Build with AI responsibly

Build trusted and secure AI with guidance for responsible design, development, and deployment of models and applications.

[Build Responsible AI](https://ai.google.dev/responsible/)

## Boost productivity with AI code assistance

### Agents

Gemini empowers you to be more productive by acting as your coding agent. It can plan and execute tasks, freeing you to focus on what matters most.

### Analysis and insights

Improve code quality and fix issues with code analysis. Get insights, suggestions, and code snippets within your existing development environment.

### Code generation

Gemini adds AI-powered code completion with natural language understanding to create entire code blocks from your descriptions, revolutionizing your development workflow.

### Code chat

Ask development questions and receive responses that help you reduce errors, solve problems, and become a better developer. Gemini understands the context of your environment to give you the best responses for your questions.

## Explore apps built with the Gemini API

## Join the community

Tap into the power of our community forum. Get answers, build together, and be part of the conversation.

---

## Source: https://discuss.ai.google.dev/c/gemini-api/

Questions, feedback, and best practices around building with the Gemini API.
Follow the quickstart to get started using the SDK of your choice. You can also check out examples from the Gemini API Cookbook.
Helpful link…

If you’re experiencing 429 or 503 errors when accessing the Gemini API, please read on.
429 errors
429 (“Too Many Requests”) errors are usually triggered if you exceed one of our listed quotas:
Requests per minute (R…

---

## Source: https://ai.google.dev/api

This API reference describes the standard, streaming, and real-time APIs you can
use to interact with the Gemini models. You can use the REST APIs in any
environment that supports HTTP requests. Refer to the
[Quickstart guide](https://ai.google.dev/gemini-api/docs/quickstart) for how to
get started with your first API call. If you're looking for the references for
our language-specific libraries and SDKs, go to the link for that language in
the left navigation under **SDK references**.

## Primary endpoints

The Gemini API is organized around the following major endpoints:

**Standard content generation (**A standard REST endpoint that processes your request and returns the model's full response in a single package. This is best for non-interactive tasks where you can wait for the entire result.):`generateContent`

**Streaming content generation (**Uses Server-Sent Events (SSE) to push chunks of the response to you as they are generated. This provides a faster, more interactive experience for applications like chatbots.):`streamGenerateContent`

**Live API (**A stateful WebSocket-based API for bi-directional streaming, designed for real-time conversational use cases.):`BidiGenerateContent`

**Batch mode (**A standard REST endpoint for submitting batches of):`batchGenerateContent`

`generateContent`

requests.**Embeddings (**A standard REST endpoint that generates a text embedding vector from the input):`embedContent`

`Content`

.**Gen Media APIs:**Endpoints for generating media with our specialized models such as[Imagen for image generation](/api/models#method:-models.predict), and[Veo for video generation](/api/models#method:-models.predictlongrunning). Gemini also has these capabilities built in which you can access using the`generateContent`

API.**Platform APIs:**Utility endpoints that support core capabilities such as[uploading files](/api/files), and[counting tokens](/api/tokens).

## Authentication

All requests to the Gemini API must include a `x-goog-api-key`

header with your
API key. Create one with a few clicks in [Google AI
Studio](https://aistudio.google.com/app/apikey).

The following is an example request with the API key included in the header:

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"text": "Explain how AI works in a few words"
}
]
}
]
}'
```


For instructions on how to pass your key to the API using Gemini SDKs,
see the [Using Gemini API keys](/gemini-api/docs/api-key) guide.

## Content generation

This is the central endpoint for sending prompts to the model. There are two endpoints for generating content, the key difference is how you receive the response:

: Receives a request and provides a single response after the model has finished its entire generation.(REST)`generateContent`

: Receives the exact same request, but the model streams back chunks of the response as they are generated. This provides a better user experience for interactive applications as it lets you display partial results immediately.(SSE)`streamGenerateContent`


### Request body structure

The [request body](/api/generate-content#request-body) is a JSON object that is
**identical** for both standard and streaming modes and is built from a few core
objects:

object: Represents a single turn in a conversation.`Content`

object: A piece of data within a`Part`

`Content`

turn (like text or an image).`inline_data`

(): A container for raw media bytes and their MIME type.`Blob`


At the highest level, the request body contains a `contents`

object, which is a
list of `Content`

objects, each representing turns in conversation. In most
cases, for basic text generation, you will have a single `Content`

object, but
if you'd like to maintain conversation history, you can use multiple `Content`

objects.

The following shows a typical `generateContent`

request body:

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"role": "user",
"parts": [
// A list of Part objects goes here
]
},
{
"role": "model",
"parts": [
// A list of Part objects goes here
]
}
]
}'
```


### Response body structure

The [response body](/api/generate-content#response-body) is similar for both
the streaming and standard modes except for the following:

- Standard mode: The response body contains an instance of
.`GenerateContentResponse`

- Streaming mode: The response body contains a stream of
instances.`GenerateContentResponse`


At a high level, the response body contains a `candidates`

object, which is a
list of `Candidate`

objects. The `Candidate`

object contains a `Content`

object that has the generated response returned from the model.

## Request examples

The following examples show how these components come together for different types of requests.

### Text-only prompt

A simple text prompt consists of a `contents`

array with a single `Content`

object. That object's `parts`

array, in turn, contains a single `Part`

object
with a `text`

field.

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"text": "Explain how AI works in a single paragraph."
}
]
}
]
}'
```


### Multimodal prompt (text and image)

To provide both text and an image in a prompt, the `parts`

array should contain
two `Part`

objects: one for the text, and one for the image `inline_data`

.

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{
"inline_data": {
"mime_type":"image/jpeg",
"data": "/9j/4AAQSkZJRgABAQ... (base64-encoded image)"
}
},
{"text": "What is in this picture?"},
]
}]
}'
```


### Multi-turn conversations (chat)

To build a conversation with multiple turns, you define the `contents`

array
with multiple `Content`

objects. The API will use this entire history as context
for the next response. The `role`

for each `Content`

object should alternate
between `user`

and `model`

.

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"role": "user",
"parts": [
{ "text": "Hello." }
]
},
{
"role": "model",
"parts": [
{ "text": "Hello! How can I help you today?" }
]
},
{
"role": "user",
"parts": [
{ "text": "Please write a four-line poem about the ocean." }
]
}
]
}'
```


### Key takeaways

`Content`

is the envelope: It's the top-level container for a message turn, whether it's from the user or the model.`Part`

enables multimodality: Use multiple`Part`

objects within a single`Content`

object to combine different types of data (text, image, video URI, etc.).- Choose your data method:
- For small, directly embedded media (like most images), use a
`Part`

with`inline_data`

. - For larger files or files you want to reuse across requests, use the
File API to upload the file and reference it with a
`file_data`

part.

- For small, directly embedded media (like most images), use a
- Manage conversation history: For chat applications using the REST API, build
the
`contents`

array by appending`Content`

objects for each turn, alternating between`"user"`

and`"model"`

roles. If you're using an SDK, refer to the SDK documentation for the recommended way to manage conversation history.

## Response examples

The following examples show how these components come together for different types of requests.

### Text-only response

A default text response consists of a `candidates`

array with one or more
`content`

objects that contain the model's response.

The following is an example of a **standard** response:

```
{
"candidates": [
{
"content": {
"parts": [
{
"text": "At its core, Artificial Intelligence works by learning from vast amounts of data ..."
}
],
"role": "model"
},
"finishReason": "STOP",
"index": 1
}
],
}
```


The following is series of **streaming** responses. Each response contains a
`responseId`

that ties the full response together:

```
{
"candidates": [
{
"content": {
"parts": [
{
"text": "The image displays"
}
],
"role": "model"
},
"index": 0
}
],
"usageMetadata": {
"promptTokenCount": ...
},
"modelVersion": "gemini-2.5-flash-lite",
"responseId": "mAitaLmkHPPlz7IPvtfUqQ4"
}
...
{
"candidates": [
{
"content": {
"parts": [
{
"text": " the following materials:\n\n* **Wood:** The accordion and the violin are primarily"
}
],
"role": "model"
},
"index": 0
}
],
"usageMetadata": {
"promptTokenCount": ...
}
"modelVersion": "gemini-2.5-flash-lite",
"responseId": "mAitaLmkHPPlz7IPvtfUqQ4"
}
```


## Live API (BidiGenerateContent) WebSockets API

Live API offers a stateful WebSocket based API for bi-directional streaming to
enable real-time streaming use cases. You can review
[Live API guide](/gemini-api/docs/live) and the [Live API reference](/api/live)
for more details.

## Specialized models

In addition to the Gemini family of models, Gemini API offers endpoints for
specialized models such as [Imagen](/gemini-api/docs/imagen),
[Lyria](/gemini-api/docs/music-generation) and
[embedding](/gemini-api/docs/embeddings) models. You can check out
these guides under the Models section.

## Platform APIs

The rest of the endpoints enable additional capabilities to use with the main
endpoints described so far. Check out topics
[Batch mode](/gemini-api/docs/batch-mode) and
[File API](/gemini-api/docs/files) in the Guides section to learn more.

## What's next

If you're just getting started, check out the following guides, which will help you understand the Gemini API programming model:

You might also want to check out the capabilities guides, which introduce different Gemini API features and provide code examples:

---

## Source: https://ai.google.dev/gemini-api/docs/quickstart

This quickstart shows you how to install our [libraries](/gemini-api/docs/libraries)
and make your first Gemini API request.

## Before you begin

Using the Gemini API requires an API key, you can create one for free to get started.

## Install the Google GenAI SDK

### Python

Using [Python 3.9+](https://www.python.org/downloads/), install the
[ google-genai package](https://pypi.org/project/google-genai/)
using the following

[pip command](https://packaging.python.org/en/latest/tutorials/installing-packages/):

```
pip install -q -U google-genai
```


### JavaScript

Using [Node.js v18+](https://nodejs.org/en/download/package-manager),
install the
[Google Gen AI SDK for TypeScript and JavaScript](https://www.npmjs.com/package/@google/genai)
using the following
[npm command](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):

```
npm install @google/genai
```


### Go

Install
[google.golang.org/genai](https://pkg.go.dev/google.golang.org/genai) in
your module directory using the [go get command](https://go.dev/doc/code):

```
go get google.golang.org/genai
```


### Java

If you're using Maven, you can install
[google-genai](https://github.com/googleapis/java-genai) by adding the
following to your dependencies:

```
<dependencies>
<dependency>
<groupId>com.google.genai</groupId>
<artifactId>google-genai</artifactId>
<version>1.0.0</version>
</dependency>
</dependencies>
```


### C#

Install
[googleapis/go-genai](https://googleapis.github.io/dotnet-genai/) in
your module directory using the [dotnet add command](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-package-add)

```
dotnet add package Google.GenAI
```


### Apps Script

- To create a new Apps Script project, go to
[script.new](https://script.google.com/u/0/home/projects/create). - Click
**Untitled project**. - Rename the Apps Script project
**AI Studio**and click**Rename**. - Set your
[API key](https://developers.google.com/apps-script/guides/properties#manage_script_properties_manually)- At the left, click
**Project Settings**. - Under
**Script Properties**click**Add script property**. - For
**Property**, enter the key name:`GEMINI_API_KEY`

. - For
**Value**, enter the value for the API key. - Click
**Save script properties**.

- At the left, click
- Replace the
`Code.gs`

file contents with the following code:

## Make your first request

Here is an example that uses the
[ generateContent](/api/generate-content#method:-models.generatecontent) method
to send a request to the Gemini API using the Gemini 2.5 Flash model.

If you [set your API key](/gemini-api/docs/api-key#set-api-env-var) as the
environment variable `GEMINI_API_KEY`

, it will be picked up automatically by the
client when using the [Gemini API libraries](/gemini-api/docs/libraries).
Otherwise you will need to [pass your API key](/gemini-api/docs/api-key#provide-api-key-explicitly) as
an argument when initializing the client.

Note that all code samples in the Gemini API docs assume that you have set the
environment variable `GEMINI_API_KEY`

.

### Python

```
from google import genai
# The client gets the API key from the environment variable `GEMINI_API_KEY`.
client = genai.Client()
response = client.models.generate_content(
model="gemini-3-flash-preview", contents="Explain how AI works in a few words"
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});
async function main() {
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: "Explain how AI works in a few words",
});
console.log(response.text);
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
result, err := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
genai.Text("Explain how AI works in a few words"),
nil,
)
if err != nil {
log.Fatal(err)
}
fmt.Println(result.Text())
}
```


### Java

```
package com.example;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
public class GenerateTextFromTextInput {
public static void main(String[] args) {
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
Client client = new Client();
GenerateContentResponse response =
client.models.generateContent(
"gemini-3-flash-preview",
"Explain how AI works in a few words",
null);
System.out.println(response.text());
}
}
```


### C#

```
using System.Threading.Tasks;
using Google.GenAI;
using Google.GenAI.Types;
public class GenerateContentSimpleText {
public static async Task main() {
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
var client = new Client();
var response = await client.Models.GenerateContentAsync(
model: "gemini-3-flash-preview", contents: "Explain how AI works in a few words"
);
Console.WriteLine(response.Candidates[0].Content.Parts[0].Text);
}
}
```


### Apps Script

```
// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.
const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
function main() {
const payload = {
contents: [
{
parts: [
{ text: 'Explain how AI works in a few words' },
],
},
],
};
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';
const options = {
method: 'POST',
contentType: 'application/json',
headers: {
'x-goog-api-key': apiKey,
},
payload: JSON.stringify(payload)
};
const response = UrlFetchApp.fetch(url, options);
const data = JSON.parse(response);
const content = data['candidates'][0]['content']['parts'][0]['text'];
console.log(content);
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"text": "Explain how AI works in a few words"
}
]
}
]
}'
```


## What's next

Now that you made your first API request, you might want to explore the following guides that show Gemini in action:

---

## Source: https://ai.google.dev/gemini-api/docs/api-key

To use the Gemini API, you need an API key. This page outlines how to create and manage your keys in Google AI Studio as well as how to set up your environment to use them in your code.

[
Create or view a Gemini API Key](https://aistudio.google.com/app/apikey)

## API Keys

You can create and manage all your Gemini API Keys from the
[Google AI Studio](https://aistudio.google.com/app/apikey) **API Keys** page.

Once you have an API key, you have the following options to connect to the Gemini API:

For initial testing, you can hard code an API key, but this should only be
temporary since it's not secure. You can find examples for hard coding the API
key in [Providing API key explicitly](#provide-api-key-explicitly) section.

## Google Cloud projects

[Google Cloud projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
are fundamental to using Google Cloud services (such as the Gemini API),
managing billing, and controlling collaborators and permissions. Google AI
Studio provides a lightweight interface to your Google Cloud projects.

If you don't have
any projects created yet, you must either create a new project or import one
from Google Cloud into Google AI Studio. The **Projects** page in Google AI
Studio will display all keys that have sufficient permission to use the Gemini
API. Refer to the [import projects](#import-projects) section for instructions.

### Default project

For new users, after accepting Terms of Service, Google AI Studio creates a
default Google Cloud Project and API Key, for ease of use. You can rename this
project in Google AI Studio by navigating to **Projects** view in the
**Dashboard**, clicking the 3 dots settings button next to a project and
choosing **Rename project**. Existing users, or users who already have Google
Cloud Accounts won't have a default project created.

## Import projects

Each Gemini API key is associated with a Google Cloud project. By default,
Google AI Studio does not show all of your Cloud Projects. You must import the
projects you want by searching for the name or project ID in the
**Import Projects** dialog. To view a complete list of projects you have access
to, visit the Cloud Console.

If you don't have any projects imported yet, follow these steps to import a Google Cloud project and create a key:

- Go to
[Google AI Studio](https://aistudio.google.com). - Open the
**Dashboard**from the left side panel. - Select
**Projects**. - Select the
**Import projects**button in the**Projects**page. - Search for and select the Google Cloud project you want to import and select
the
**Import**button.

Once a project is imported, go to the **API Keys** page from the **Dashboard**
menu and create an API key in the project you just imported.

## Limitations

The following are limitations of managing API keys and Google Cloud projects in Google AI Studio.

- You can create a maximum of 10 project at a time from the Google AI Studio
**Projects**page. - You can name and rename projects and keys.
- The
**API keys**and**Projects**pages display a maximum of 100 keys and 50 projects. - Only API keys that have no restrictions, or are restricted to the Generative Language API are displayed.

For additional management access to your projects, including modifying and
restricting API keys, visit the
[Google Cloud Console credentials page](https://console.cloud.google.com/apis/credentials).
In the Cloud Console, you can select your project, click an existing API key,
and then restrict it to the **Generative Language API**.

## Setting the API key as an environment variable

If you set the environment variable `GEMINI_API_KEY`

or `GOOGLE_API_KEY`

, the
API key will automatically be picked up by the client when using one of the
[Gemini API libraries](/gemini-api/docs/libraries). It's recommended that you
set only one of those variables, but if both are set, `GOOGLE_API_KEY`

takes
precedence.

If you're using the REST API, or JavaScript on the browser, you will need to provide the API key explicitly.

Here is how you can set your API key locally as the environment variable
`GEMINI_API_KEY`

with different operating systems.

### Linux/macOS - Bash

Bash is a common Linux and macOS terminal configuration. You can check if you have a configuration file for it by running the following command:

`~/.bashrc`


If the response is "No such file or directory", you will need to create this
file and open it by running the following commands, or use `zsh`

:

`touch ~/.bashrc`

`open ~/.bashrc`


Next, you need to set your API key by adding the following export command:

`export GEMINI_API_KEY=<YOUR_API_KEY_HERE>`


After saving the file, apply the changes by running:

`source ~/.bashrc`


### macOS - Zsh

Zsh is a common Linux and macOS terminal configuration. You can check if you have a configuration file for it by running the following command:

`~/.zshrc`


If the response is "No such file or directory", you will need to create this
file and open it by running the following commands, or use `bash`

:

`touch ~/.zshrc`

`open ~/.zshrc`


Next, you need to set your API key by adding the following export command:

`export GEMINI_API_KEY=<YOUR_API_KEY_HERE>`


After saving the file, apply the changes by running:

`source ~/.zshrc`


### Windows

- Search for "Environment Variables" in the search bar.
- Choose to modify
**System Settings**. You may have to confirm you want to do this. - In the system settings dialog, click the button labeled
**Environment Variables**. - Under either
**User variables**(for the current user) or**System variables**(applies to all users who use the machine), click**New...** - Specify the variable name as
`GEMINI_API_KEY`

. Specify your Gemini API Key as the variable value. - Click
**OK**to apply the changes. - Open a new terminal session (cmd or Powershell) to get the new variable.

## Providing the API key explicitly

In some cases, you may want to explicitly provide an API key. For example:

- You're doing a simple API call and prefer hard coding the API key.
- You want explicit control without having to rely on automatic discovery of environment variables by the Gemini API libraries
- You're using an environment where environment variables are not supported (e.g web) or you are making REST calls.

Below are examples for how you can provide an API key explicitly:

### Python

```
from google import genai
client = genai.Client(api_key="
````YOUR_API_KEY`")
response = client.models.generate_content(
model="gemini-3-flash-preview", contents="Explain how AI works in a few words"
)
print(response.text)


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: "
````YOUR_API_KEY`" });
async function main() {
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: "Explain how AI works in a few words",
});
console.log(response.text);
}
main();


### Go

```
package main
import (
"context"
"fmt"
"log"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, &genai.ClientConfig{
APIKey: "
````YOUR_API_KEY`",
Backend: genai.BackendGeminiAPI,
})
if err != nil {
log.Fatal(err)
}
result, err := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
genai.Text("Explain how AI works in a few words"),
nil,
)
if err != nil {
log.Fatal(err)
}
fmt.Println(result.Text())
}


### Java

```
package com.example;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
public class GenerateTextFromTextInput {
public static void main(String[] args) {
Client client = Client.builder().apiKey("
````YOUR_API_KEY`").build();
GenerateContentResponse response =
client.models.generateContent(
"gemini-3-flash-preview",
"Explain how AI works in a few words",
null);
System.out.println(response.text());
}
}


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H 'Content-Type: application/json' \
-H "x-goog-api-key:
````YOUR_API_KEY`" \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"text": "Explain how AI works in a few words"
}
]
}
]
}'


## Keep your API key secure

Treat your Gemini API key like a password. If compromised, others can use your project's quota, incur charges (if billing is enabled), and access your private data, such as files.

### Critical security rules

**Keep keys confidential**: API keys for Gemini may access sensitive data your application depends upon.**Never commit API keys to source control.**Do not check your API key into version control systems like Git.**Never expose API keys on the client-side.**Do not use your API key directly in web or mobile apps in production. Keys in client-side code (including our JavaScript/TypeScript libraries and REST calls) can be extracted.

**Restrict access**: Restrict API key usage to specific IP addresses, HTTP referrers, or Android/iOS apps where possible.**Restrict usage**: Enable only the necessary APIs for each key.**Perform regular audits**: Regularly audit your API keys and rotate them periodically.

### Best practices

**Use server-side calls with API keys**The most secure way to use your API key is to call the Gemini API from a server-side application where the key can be kept confidential.**Use ephemeral tokens for client-side access (Live API only):**For direct client-side access to the Live API, you can use ephemeral tokens. They come with lower security risks and can be suitable for production use. Review[ephemeral tokens](/gemini-api/docs/ephemeral-tokens)guide for more information.**Consider adding restrictions to your key:**You can limit a key's permissions by adding[API key restrictions](https://cloud.google.com/api-keys/docs/add-restrictions-api-keys#add-api-restrictions). This minimizes the potential damage if the key is ever leaked.

For some general best practices, you can also review this
[support article](https://support.google.com/googleapi/answer/6310037).

---

## Source: https://ai.google.dev/gemini-api/docs/libraries

When building with the Gemini API, we recommend using the **Google GenAI SDK**.
These are the official, production-ready libraries that we develop and maintain
for the most popular languages. They are in [General Availability](/gemini-api/docs/libraries#new-libraries) and used in all our official
documentation and examples.

If you're new to the Gemini API, follow our [quickstart guide](/gemini-api/docs/quickstart) to get started.

## Language support and installation

The Google GenAI SDK is available for the Python, JavaScript/TypeScript, Go and Java languages. You can install each language's library using package managers, or visit their GitHub repos for further engagement:

### Python

Library:

`google-genai`

GitHub Repository:

[googleapis/python-genai](https://github.com/googleapis/python-genai)Installation:

`pip install google-genai`


### JavaScript

Library:

`@google/genai`

GitHub Repository:

[googleapis/js-genai](https://github.com/googleapis/js-genai)Installation:

`npm install @google/genai`


### Go

Library:

`google.golang.org/genai`

GitHub Repository:

[googleapis/go-genai](https://github.com/googleapis/go-genai)Installation:

`go get google.golang.org/genai`


### Java

Library:

`google-genai`

GitHub Repository:

[googleapis/java-genai](https://github.com/googleapis/java-genai)Installation: If you're using Maven, add the following to your dependencies:


```
<dependencies>
<dependency>
<groupId>com.google.genai</groupId>
<artifactId>google-genai</artifactId>
<version>1.0.0</version>
</dependency>
</dependencies>
```


### C#

Library:

`Google.GenAI`

GitHub Repository:

[googleapis/dotnet-genai](https://googleapis.github.io/dotnet-genai/)Installation:

`dotnet add package Google.GenAI`


## General availability

As of May 2025, the Google GenAI SDK has reached General Availability (GA) across all supported platforms and are the recommended libraries to access the Gemini API. They are stable, fully supported for production use, and are actively maintained. They provide access to the latest features, and offer the best performance working with Gemini.

If you're using one of our legacy libraries,
we strongly recommend you migrate so that you can access the latest features and
get the best performance working with Gemini. Review the [legacy libraries](/gemini-api/docs/libraries#previous-sdks) section for more information.

## Legacy libraries and migration

If you are using one of our legacy libraries, we recommend that you
[migrate to the new libraries](/gemini-api/docs/migrate).

The legacy libraries don't provide access to recent features (such as
[Live API](/gemini-api/docs/live) and [Veo](/gemini-api/docs/video)) and are
deprecated as of November 30th, 2025.

Each legacy library's support status varies, detailed in the following table:

| Language | Legacy library | Support status | Recommended library |
|---|---|---|---|
Python |
|
Not actively maintained |
|
JavaScript/TypeScript |
|
Not actively maintained |
|
Go |
|
Not actively maintained |
|
Dart and Flutter |
|
Not actively maintained | Use
|

**Swift**[generative-ai-swift](https://github.com/google/generative-ai-swift)

[Firebase AI Logic](https://firebase.google.com/products/firebase-ai-logic)**Android**[generative-ai-android](https://github.com/google-gemini/generative-ai-android)

[Firebase AI Logic](https://firebase.google.com/products/firebase-ai-logic)**Note for Java developers:** There was no legacy Google-provided Java SDK for
the Gemini API, so no migration from a previous Google library is required. You
can start directly with the new library in the
[Language support and installation](#install) section.

---

## Source: https://ai.google.dev/gemini-api/docs/pricing

Start building free of charge with generous limits, then scale up with prepaid then pay-as-you-go pricing for your production ready applications.

### Free

For developers and small projects getting started with the Gemini API.

- check_circleLimited access to certain models
- check_circleFree input & output tokens
- check_circleGoogle AI Studio access
- check_circleContent used to improve our products
[*](https://ai.google.dev/gemini-api/terms)

[Get started for Free](https://aistudio.google.com)

### Paid

For production applications that require higher volumes and advanced features.

- check_circleHigher rate limits for production deployments
- check_circleAccess to Context caching
- check_circleBatch API (50% cost reduction)
- check_circleAccess to Google's most advanced models
- check_circleContent
**not**used to improve our products[*](https://ai.google.dev/gemini-api/terms)

[Upgrade to Paid](https://aistudio.google.com/api-keys)

### Enterprise

For large-scale deployments with custom needs for security, support, and compliance, powered by [Vertex AI](https://cloud.google.com/vertex-ai).

- check_circleAll features in Paid, plus optional access to:
- check_circleDedicated support channels
- check_circleAdvanced security & compliance
- check_circleProvisioned throughput
- check_circleVolume-based discounts (based on usage)
- check_circleML ops, model garden and more

[Contact Sales](https://cloud.google.com/contact)

## Gemini 3.1 Pro Preview


`gemini-3.1-pro-preview`

and `gemini-3.1-pro-preview-customtools`

The latest performance, intelligence, and usability improvements to the best model family in the world for multimodal understanding, agentic capabilities, and vibe-coding.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $2.00, prompts <= 200k tokens $4.00, prompts > 200k tokens |
| Output price (including thinking tokens) | Not available | $12.00, prompts <= 200k tokens $18.00, prompts > 200k |
| Context caching price | Not available | $0.20, prompts <= 200k tokens $0.40, prompts > 200k $4.50 / 1,000,000 tokens per hour (storage price) |
Grounding with Google Search* |
Not available | 5,000 prompts per month (free, shared across Gemini 3), then $14 / 1,000 search queries |
| Grounding with Google Maps | Not available | 5,000 prompts per month (free), then $14 / 1,000 search queries |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $1.00, prompts <= 200k tokens $2.00, prompts > 200k tokens |
| Output price (including thinking tokens) | Not available | $6.00, prompts <= 200k tokens $9.00, prompts > 200k |
| Context caching price | Not available | $0.20, prompts <= 200k tokens $0.40, prompts > 200k $4.50 / 1,000,000 tokens per hour (storage price) |
Grounding with Google Search* |
Not available | 1,500 RPD (free, shared across Gemini 3), then $14 / 1,000 search queries |
| Grounding with Google Maps | Not available | 1,500 RPD (free), then $14 / 1,000 search queries |
| Used to improve our products |
|

[No](/gemini-api/terms)* A customer-submitted request to Gemini may result in one or more
queries to Google Search. You will be charged for each individual search query
performed.

## Gemini 3.1 Flash-Lite Preview


`gemini-3.1-flash-lite-preview`

Our most cost-efficient model, optimized for high-volume agentic tasks, translation, and simple data processing.

Preview models may change before becoming stable and have more restrictive rate limits.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $0.25 (text / image / video) $0.50 (audio) |
| Output price (including thinking tokens) | Free of charge | $1.50 |
| Context caching price | Not available | $0.025 (text / image / video) $0.05 (audio) $1.00 / 1,000,000 tokens per hour (storage price) |
Grounding with Google Search* |
Not available | 5,000 prompts per month (free, shared across Gemini 3), then $14 / 1,000 search queries |
| Grounding with Google Maps | Not available | 5,000 prompts per month (free), then $14 / 1,000 search queries |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $0.125 (text / image / video) $0.25 (audio) |
| Output price (including thinking tokens) | Free of charge | $0.75 |
| Context caching price | Not available | $0.0125 (text / image / video) $0.025 (audio) $0.50 / 1,000,000 tokens per hour (storage price) |
Grounding with Google Search* |
Not available | 5,000 prompts per month (free, shared across Gemini 3), then $14 / 1,000 search queries |
| Grounding with Google Maps | Not available | 5,000 prompts per month (free), then $14 / 1,000 search queries |
| Used to improve our products |
|

[No](/gemini-api/terms)* A customer-submitted request to Gemini may result in one or more
queries to Google Search. You will be charged for each individual search query
performed.

## Gemini 3.1 Flash Live Preview


`gemini-3.1-flash-live-preview`

Our low-latency, audio-to-audio model optimized for real-time dialogue with acoustic nuance detection, numeric precision, and multimodal awareness.

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $0.75 (text) $3.00 or $0.005/min (audio) $1.00 or $0.002/min (image/video) |
| Output price (including thinking tokens) | Free of charge | $4.50 (text) $12.00 or $0.018/min (audio) |
Grounding with Google Search* |
Supported | 5,000 prompts per month (free, shared across Gemini 3), then $14 / 1,000 search queries |
| Used to improve our products |
|

[No](/gemini-api/terms)* A customer-submitted request to Gemini may result in one or more
queries to Google Search. You will be charged for each individual search query
performed.

## Gemini 3.1 Flash Image Preview 🍌


`gemini-3.1-flash-image-preview`

Designed for speed and efficiency, the Gemini 3.1 Flash Image generation model is effective for quick, interactive responses and high throughput.

Preview models may change before becoming stable and have more restrictive rate limits.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.50 (text/image) |
| Output price | Not available | $3 (text and thinking) $60.00 (images) Equivalent to $0.045 per 0.5K image *$0.067 per 1K image *,
$0.101 per 2K image*,
and $0.151 per 4K image*.
|
Grounding with Google Search** |
Not available | 5,000 prompts per month (free, shared across Gemini 3), then $14 / 1,000 search queries for text and image-based grounding. |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.25 (text, image) |
| Output price | Not available | $1.50 (text and thinking) $30.00 (images) Equivalent to $0.022 per 0.5K image *$0.034 per 1K image *,$0.050 per 2K image *,and $0.076 per 4K image *.
|
| Used to improve our products |
|

[No](/gemini-api/terms)* Image output is priced at $60 per 1,000,000 tokens.
Output images at 0.5K (512px) consume 747 tokens and are equivalent to $0.045 per
image. Output images at 1K (1024x1024px) consume 1120 tokens and are equivalent
to $0.067 per image. Output images at 2K (2048x2048px) consume 1680 tokens and
are equivalent to $0.101 per image. Output images at 4K (4096x4096px) consume
2520 tokens and are equivalent to $0.151 per image.

** A customer-submitted request to Gemini may result in one or more
queries to Google Search. You will be charged for each individual search query
performed. Retrieved context (text or images) provided by Grounding with Google
Search is not charged as input tokens.

## Gemini 3 Flash Preview


`gemini-3-flash-preview`

Our most intelligent model built for speed, combining frontier intelligence with superior search and grounding.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $0.50 (text / image / video) $1.00 (audio) |
| Output price (including thinking tokens) | Free of charge | $3.00 |
| Context caching price | Free of charge | $0.05 (text / image / video) $0.10 (audio) $1.00 / 1,000,000 tokens per hour (storage price) |
Grounding with Google Search* |
Not available | 5,000 prompts per month (free, shared across Gemini 3), then $14 / 1,000 search queries |
| Grounding with Google Maps | Not available | 5,000 prompts per month (free), then $14 / 1,000 search queries |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.25 (text / image / video) $0.50 (audio) |
| Output price (including thinking tokens) | Not available | $1.50 |
| Context caching price | Not available | Same as Standard, Batch pricing not yet implemented$0.05 (text / image / video) $0.10 (audio) $1.00 / 1,000,000 tokens per hour (storage price) |
Grounding with Google Search* |
Not available | 1,500 RPD (free, shared across Gemini 3), then $14 / 1,000 search queries |
| Grounding with Google Maps | Not available | 1,500 RPD (free), then $14 / 1,000 search queries |
| Used to improve our products |
|

[No](/gemini-api/terms)* A customer-submitted request to Gemini may result in one or more
queries to Google Search. You will be charged for each individual search query
performed.

## Gemini 3 Pro Image Preview 🍌


`gemini-3-pro-image-preview`

Our native image generation model, optimized for speed, flexibility, and
contextual understanding. **Text input and output** is priced the same as
[Gemini 3.1 Pro](#gemini-3.1-pro-preview).

Preview models may change before becoming stable and have more restrictive rate limits.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $2.00 (text/image), equivalent to $0.0011 per image * |
| Output price | Not available | $12.00 (text and thinking) $120.00 (images) Equivalent to $0.134 per 1K/2K image **and $0.24 per 4K image **
|
Grounding with Google Web and Image Search*** |
Not available | 5,000 prompts per month (free, shared across Gemini 3), then $14 / 1,000 search queries |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $1.00 (text), $0.0006 (image) * |
| Output price | Not available | $6.00 (text and thinking) $0.067 per 1K/2K image **$0.12 per 4K image **
|
| Used to improve our products |
|

[No](/gemini-api/terms)* Image input is set at 560 tokens or $0.0011 per image.

** Image output is priced at $120 per 1,000,000 tokens. Output
images from 1024x1024px (1K) and up to 2048x2048px (2K) consume 1120 tokens and
are equivalent to $0.134 per image. Output images up to 4096x4096px (4K) consume
2000 tokens and are equivalent to $0.24 per image.

*** A customer-submitted request to Gemini may result in one or more
queries to Google Search. You will be charged for each individual search query
performed.

## Gemini 2.5 Pro


`gemini-2.5-pro`

Our state-of-the-art multipurpose model, which excels at coding and complex reasoning tasks.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $1.25, prompts <= 200k tokens $2.50, prompts > 200k tokens |
| Output price (including thinking tokens) | Free of charge | $10.00, prompts <= 200k tokens $15.00, prompts > 200k |
| Context caching price | Not available | $0.125, prompts <= 200k tokens $0.25, prompts > 200k $4.50 / 1,000,000 tokens per hour (storage price) |
| Grounding with Google Search | Not available | 1,500 RPD (free), then $35 / 1,000 grounded prompts |
| Grounding with Google Maps | Not available | 10,000 RPD (free), then $25 / 1,000 grounded prompts |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.625, prompts <= 200k tokens $1.25, prompts > 200k tokens |
| Output price (including thinking tokens) | Not available | $5.00, prompts <= 200k tokens $7.50, prompts > 200k |
| Context caching price | Not available | $0.125, prompts <= 200k tokens $0.25, prompts > 200k $4.50 / 1,000,000 tokens per hour (storage price) |
| Grounding with Google Search | Not available | 1,500 RPD (free), then $35 / 1,000 grounded prompts |
| Grounding with Google Maps | Not available | Not available |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemini 2.5 Flash


`gemini-2.5-flash`

Our first hybrid reasoning model which supports a 1M token context window and has thinking budgets.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $0.30 (text / image / video) $1.00 (audio) |
| Output price (including thinking tokens) | Free of charge | $2.50 |
| Context caching price | Not available | $0.03 (text / image / video) $0.1 (audio) $1.00 / 1,000,000 tokens per hour (storage price) |
| Grounding with Google Search | Free of charge, up to 500 RPD (limit shared with Flash-Lite RPD) | 1,500 RPD (free, limit shared with Flash-Lite RPD), then $35 / 1,000 grounded prompts |
| Grounding with Google Maps | 500 RPD | 1,500 RPD (free), then $25 / 1,000 grounded prompts |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.15 (text / image / video) $0.50 (audio) |
| Output price (including thinking tokens) | Not available | $1.25 |
| Context caching price | Not available | $0.03 (text / image / video) $0.1 (audio) $1.00 / 1,000,000 tokens per hour (storage price) |
| Grounding with Google Search | Not available | 1,500 RPD (free, limit shared with Flash-Lite RPD), then $35 / 1,000 grounded prompts |
| Grounding with Google Maps | Not available | Not available |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemini 2.5 Flash-Lite


`gemini-2.5-flash-lite`

Our smallest and most cost effective model, built for at scale usage.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price (text, image, video) | Free of charge | $0.10 (text / image / video) $0.30 (audio) |
| Output price (including thinking tokens) | Free of charge | $0.40 |
| Context caching price | Not available | $0.01 (text / image / video) $0.03 (audio) $1.00 / 1,000,000 tokens per hour (storage price) |
| Grounding with Google Search | Free of charge, up to 500 RPD (limit shared with Flash RPD) | 1,500 RPD (free, limit shared with Flash RPD), then $35 / 1,000 grounded prompts |
| Grounding with Google Maps | 500 RPD | 1,500 RPD (free), then $25 / 1,000 grounded prompts |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price (text, image, video) | Not available | $0.05 (text / image / video) $0.15 (audio) |
| Output price (including thinking tokens) | Not available | $0.20 |
| Context caching price | Not available | $0.01 (text / image / video) $0.03 (audio) $1.00 / 1,000,000 tokens per hour (storage price) |
| Grounding with Google Search | Not available | 1,500 RPD (free, limit shared with Flash RPD), then $35 / 1,000 grounded prompts |
| Grounding with Google Maps | Not available | Not available |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemini 2.5 Flash-Lite Preview


`gemini-2.5-flash-lite-preview-09-2025`

The latest model based on Gemini 2.5 Flash lite optimized for cost-efficiency, high throughput and high quality.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price (text, image, video) | Free of charge | $0.10 (text / image / video) $0.30 (audio) |
| Output price (including thinking tokens) | Free of charge | $0.40 |
| Context caching price | Not available | $0.01 (text / image / video) $0.03 (audio) $1.00 / 1,000,000 tokens per hour (storage price) |
| Grounding with Google Search | Free of charge, up to 500 RPD (limit shared with Flash RPD) | 1,500 RPD (free, limit shared with Flash RPD), then $35 / 1,000 grounded prompts |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price (text, image, video) | Not available | $0.05 (text / image / video) $0.15 (audio) |
| Output price (including thinking tokens) | Not available | $0.20 |
| Context caching price | Not available | $0.01 (text / image / video) $0.03 (audio) $1.00 / 1,000,000 tokens per hour (storage price) |
| Grounding with Google Search | Not available | 1,500 RPD (free, limit shared with Flash RPD), then $35 / 1,000 grounded prompts |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemini 2.5 Flash Native Audio (Live API)


`gemini-2.5-flash-native-audio-preview-12-2025`

Our [Live API](/gemini-api/docs/live) native audio models optimized for higher
quality audio outputs with better pacing, voice naturalness, verbosity, and
mood.

Preview models may change before becoming stable and have more restrictive rate limits.

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $0.50 (text) $3.00 (audio / video) |
| Output price (including thinking tokens) | Free of charge | $2.00 (text) $12.00 (audio) |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemini 2.5 Flash Image 🍌


`gemini-2.5-flash-image`

Our native image generation model, optimized for speed, flexibility, and
contextual understanding. Text input and output is priced the same as
[2.5 Flash](#gemini-2.5-flash).

Preview models may change before becoming stable and have more restrictive rate limits.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.30 (text / image) |
| Output price | Not available | $0.039 per image* |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.15 (text / image) |
| Output price | Not available | $0.0195 per image* |
| Used to improve our products |
|

[No](/gemini-api/terms)[*] Image output is priced at $30 per 1,000,000 tokens. Output images up to 1024x1024px consume 1290 tokens and are equivalent to $0.039 per image.

## Gemini 2.5 Flash Preview TTS


`gemini-2.5-flash-preview-tts`

Our 2.5 Flash text-to-speech audio model optimized for price-performant, low-latency, controllable speech generation.

Preview models may change before becoming stable and have more restrictive rate limits.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $0.50 (text) |
| Output price | Free of charge | $10.00 (audio) |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.25 (text) |
| Output price | Not available | $5.00 (audio) |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemini 2.5 Pro Preview TTS


`gemini-2.5-pro-preview-tts`

Our 2.5 Pro text-to-speech audio model optimized for powerful, low-latency speech generation for more natural outputs and easier to steer prompts.

Preview models may change before becoming stable and have more restrictive rate limits.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $1.00 (text) |
| Output price | Not available | $20.00 (audio) |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.50 (text) |
| Output price | Not available | $10.00 (audio) |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemini 2.0 Flash


`gemini-2.0-flash`

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $0.10 (text / image / video) $0.70 (audio) |
| Output price | Free of charge | $0.40 |
| Context caching price | Free of charge | $0.025 / 1,000,000 tokens (text/image/video) $0.175 / 1,000,000 tokens (audio) |
| Context caching (storage) | Not available | $1.00 / 1,000,000 tokens per hour |
| Image generation pricing | Not available (
|

[shut down](/gemini-api/docs/deprecations#gemini-2.0-models))[Yes](/gemini-api/terms)[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.05 (text / image / video) $0.35 (audio) |
| Output price | Not available | $0.20 |
| Context caching price | Not available | $0.025 / 1,000,000 tokens (text/image/video) $0.175 / 1,000,000 tokens (audio) |
| Context caching (storage) | Not available | $1.00 / 1,000,000 tokens per hour |
| Image generation pricing | Not available (
|

[shut down](/gemini-api/docs/deprecations#gemini-2.0-models))[Yes](/gemini-api/terms)[No](/gemini-api/terms)[*] Image output is priced at $30 per 1,000,000 tokens. Output images up to 1024x1024px consume 1290 tokens and are equivalent to $0.039 per image.

## Gemini 2.0 Flash-Lite


`gemini-2.0-flash-lite`

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $0.075 |
| Output price | Free of charge | $0.30 |
| Context caching price | Not available | Not available |
| Context caching (storage) | Not available | Not available |
| Tuning price | Not available | Not available |
| Grounding with Google Search | Not available | Not available |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.0375 |
| Output price | Not available | $0.15 |
| Context caching price | Not available | Not available |
| Context caching (storage) | Not available | Not available |
| Tuning price | Not available | Not available |
| Grounding with Google Search | Not available | Not available |
| Used to improve our products |
|

[No](/gemini-api/terms)## Imagen 4


`imagen-4.0-generate-001`

, `imagen-4.0-ultra-generate-001`

, `imagen-4.0-fast-generate-001`

Our latest image generation model, with significantly better text rendering and better overall image quality.

Preview models may change before becoming stable and have more restrictive rate limits.

| Free Tier | Paid Tier, per Image in USD | |
|---|---|---|
| Imagen 4 Fast image price | Not available | $0.02 |
| Imagen 4 Standard image price | Not available | $0.04 |
| Imagen 4 Ultra image price | Not available | $0.06 |
| Used to improve our products |
|

[No](/gemini-api/terms)## Veo 3.1


`veo-3.1-generate-preview`

, `veo-3.1-fast-generate-preview`

Our latest video generation model, available to developers on the paid tier of the Gemini API.

Preview models may change before becoming stable and have more restrictive rate limits.

| Free Tier | Paid Tier, per second in USD | |
|---|---|---|
| Veo 3.1 Standard video with audio price (default) | Not available | $0.40 (720p and 1080p) $0.60 (4k) |
| Veo 3.1 Fast video with audio price (default) | Not available | $0.15 (720p and 1080p) $0.35 (4k) |
| Used to improve our products |
|

[No](/gemini-api/terms)## Veo 3


`veo-3.0-generate-001`

, `veo-3.0-fast-generate-001`

Our stable video generation model, available to developers on the paid tier of the Gemini API.

| Free Tier | Paid Tier, per second in USD | |
|---|---|---|
| Veo 3 Standard video with audio price (default) | Not available | $0.40 |
| Veo 3 Fast video with audio price (default) | Not available | $0.15 |
| Used to improve our products |
|

[No](/gemini-api/terms)## Veo 2


`veo-2.0-generate-001`

Our state-of-the-art video generation model, available to developers on the paid tier of the Gemini API.

| Free Tier | Paid Tier, per second in USD | |
|---|---|---|
| Video price | Not available | $0.35 |
| Used to improve our products |
|

[No](/gemini-api/terms)## Lyria 3


`lyria-3-clip-preview`

and `lyria-3-pro-preview`

Google's family of music generation models. Preview models may change before becoming stable and have more restrictive rate limits.

| Free Tier | Paid Tier, per request in USD | |
|---|---|---|
| Lyria 3 Pro Preview (Full Song) | Not available | $0.08 per song |
| Lyria 3 Clip Preview (30s) | Not available | $0.04 per song |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemini Embedding 2 Preview


`gemini-embedding-2-preview`

Our first multimodal embedding model, mapping text, images, video, audio, and PDFs into a unified embedding space.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Text input price | Free of charge | $0.20 |
| Image input price | Free of charge | $0.45 ($0.00012 per image) |
| Audio input price | Free of charge | $6.50 ($0.00016 per second) |
| Video input price | Free of charge | $12.00 ($0.00079 per frame) |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Text input price | Not available | Not available |
| Image input price | Not available | Not available |
| Audio input price | Not available | Not available |
| Video input price | Not available | Not available |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemini Embedding


`gemini-embedding-001`

Our Gemini Embeddings model for text-only use cases, available to developers on the free and paid tiers of the Gemini API.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $0.15 |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $0.075 |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemini Robotics-ER 1.5 Preview


`gemini-robotics-er-1.5-preview`

Gemini Robotics-ER, short for Gemini Robotics-Embodied Reasoning, is a thinking model that enhances robots' abilities to understand and interact with the physical world.

### Standard

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | $0.30 (text / image / video) $1.00 (audio) |
| Output price (including thinking tokens) | Free of charge | $2.50 |
| Grounding with Google Search | Free of charge, up to 500 RPD (limit shared with Flash-Lite RPD) | 1,500 RPD (free, limit shared with Flash-Lite RPD), then $35 / 1,000 grounded prompts |
| Used to improve our products |
|

[No](/gemini-api/terms)### Batch

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | Not available |
| Output price (including thinking tokens) | Not available | Not available |
| Grounding with Google Search | Not available | Not available |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemini 2.5 Computer Use Preview


`gemini-2.5-computer-use-preview-10-2025`

Our Computer Use model optimized for building browser control agents that automate tasks.

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Not available | $1.25, prompts <= 200k tokens $2.50, prompts > 200k token |
| Output price | Not available | $10.00, prompts <= 200k tokens $15.00, prompts > 200k |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemma 3

Our lightweight, state-of the art, open model built from the same technology that powers our Gemini models.

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | Not available |
| Output price | Free of charge | Not available |
| Context caching price | Free of charge | Not available |
| Context caching (storage) | Free of charge | Not available |
| Tuning price | Not available | Not available |
| Grounding with Google Search | Not available | Not available |
| Used to improve our products |
|

[No](/gemini-api/terms)## Gemma 3n

Our open model built for efficient performance on everyday devices like mobile phones, laptops, and tablets.

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
| Input price | Free of charge | Not available |
| Output price | Free of charge | Not available |
| Context caching price | Free of charge | Not available |
| Context caching (storage) | Free of charge | Not available |
| Tuning price | Not available | Not available |
| Grounding with Google Search | Not available | Not available |
| Used to improve our products |
|

[No](/gemini-api/terms)## Pricing for tools

Tools are priced at their own rates, applied to the model using them.
Check the [Models](/gemini-api/docs/models) page for which tools are available
to each model.

| Free Tier | Paid Tier, per 1M tokens in USD | |
|---|---|---|
|

Not available for Pro.

1,500 RPD free (limit shared for Flash and Flash-Lite).

Then $35 / 1,000 grounded prompts

Gemini 3 models:

5,000 prompts per month (free), then $14 / 1,000 search queries

[Google Maps](/gemini-api/docs/maps-grounding#pricing_and_rate_limits)Not available for Pro.

10,000 RPD free for Pro.

Then $25 / 1,000 grounded prompts

[Code execution](/gemini-api/docs/code-execution#billing)**Output tokens**when created, and as**Input tokens**when the model uses them as part of its iterative reasoning process.[URL context](/gemini-api/docs/url-context#limitations)[Computer use](/gemini-api/docs/computer-use)[Gemini 2.5 Computer Use Preview](#gemini-2.5-computer-use-preview-10-2025)pricing table.[File search](/gemini-api/docs/file-search#pricing)[embeddings](#gemini-embedding)at $0.15 / 1M tokens.Retrieved document tokens charged as regular tokens per model pricing.

[Custom Tools endpoint (Gemini 3.1 Pro Preview)](/gemini-api/docs/models/gemini-3.1-pro-preview)[Gemini 3.1 Pro Preview](#gemini-3.1-pro-preview)pricing## Pricing for agents

Agent usage costs are calculated based on the underlying token consumption and usage of the tools.

| Model | Tools | |
|---|---|---|
|

[Gemini 3 Pro](#gemini-3-pro-preview)list rates, including input, output, and intermediate input / reasoning tokens generated during agentic loops.## Notes

- Google AI Studio usage is free of charge in all
[available regions](/gemini-api/docs/available-regions). See[Billing FAQs](/gemini-api/docs/billing)for details. - Prices may differ from the prices listed here and the prices offered on
Vertex AI. For Vertex prices, see the
[Vertex AI pricing page](https://cloud.google.com/vertex-ai/generative-ai/pricing). - If you are using
[dynamic retrieval](/gemini-api/docs/grounding)to optimize costs, only requests that contain at least one grounding support URL from the web in their response are charged for Grounding with Google Search. Costs for Gemini always apply. Rate limits are subject to change.

---

## Source: https://ai.google.dev/gemini-api/docs/batch-api

The Gemini Batch API is designed to process large volumes of requests
asynchronously at [50% of the standard cost](/gemini-api/docs/pricing).
The target turnaround time is 24 hours, but in majority of cases, it is much
quicker.

Use Batch API for large-scale, non-urgent tasks such as data pre-processing or running evaluations where an immediate response is not required.

## Creating a batch job

You have two ways to submit your requests in Batch API:

A list of[Inline requests](#inline-requests):objects directly included in your batch creation request. This is suitable for smaller batches that keep the total request size under 20MB. The`GenerateContentRequest`

**output**returned from the model is a list of`inlineResponse`

objects.A[Input file](#input-file):[JSON Lines (JSONL)](https://jsonlines.org/)file where each line contains a completeobject. This method is recommended for larger requests. The`GenerateContentRequest`

**output**returned from the model is a JSONL file where each line is either a`GenerateContentResponse`

or a status object.

### Inline requests

For a small number of requests, you can directly embed the
[ GenerateContentRequest](/api/batch-mode#GenerateContentRequest) objects
within your

[. The following example calls the](/api/batch-mode#request-body)

`BatchGenerateContentRequest`

[method with inline requests:](/api/batch-mode#google.ai.generativelanguage.v1beta.BatchService.BatchGenerateContent)

`BatchGenerateContent`

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
# A list of dictionaries, where each is a GenerateContentRequest
inline_requests = [
{
'contents': [{
'parts': [{'text': 'Tell me a one-sentence joke.'}],
'role': 'user'
}]
},
{
'contents': [{
'parts': [{'text': 'Why is the sky blue?'}],
'role': 'user'
}]
}
]
inline_batch_job = client.batches.create(
model="gemini-3-flash-preview",
src=inline_requests,
config={
'display_name': "inlined-requests-job-1",
},
)
print(f"Created batch job: {inline_batch_job.name}")
```


### JavaScript

```
import {GoogleGenAI} from '@google/genai';
const ai = new GoogleGenAI({});
const inlinedRequests = [
{
contents: [{
parts: [{text: 'Tell me a one-sentence joke.'}],
role: 'user'
}]
},
{
contents: [{
parts: [{'text': 'Why is the sky blue?'}],
role: 'user'
}]
}
]
const response = await ai.batches.create({
model: 'gemini-3-flash-preview',
src: inlinedRequests,
config: {
displayName: 'inlined-requests-job-1',
}
});
console.log(response);
```


### REST

```
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:batchGenerateContent \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-X POST \
-H "Content-Type:application/json" \
-d '{
"batch": {
"display_name": "my-batch-requests",
"input_config": {
"requests": {
"requests": [
{
"request": {"contents": [{"parts": [{"text": "Describe the process of photosynthesis."}]}]},
"metadata": {
"key": "request-1"
}
},
{
"request": {"contents": [{"parts": [{"text": "Describe the process of photosynthesis."}]}]},
"metadata": {
"key": "request-2"
}
}
]
}
}
}
}'
```


### Input file

For larger sets of requests, prepare a JSON Lines (JSONL) file. Each line in
this file must be a JSON object containing a user-defined key and a request
object, where the request is a valid
[ GenerateContentRequest](/api/batch-mode#GenerateContentRequest) object. The
user-defined key is used in the response to indicate which output is the result
of which request. For example, the request with the key defined as

`request-1`

will have its response annotated with the same key name.This file is uploaded using the [File API](/gemini-api/docs/files). The maximum
allowed file size for an input file is 2GB.

The following is an example of a JSONL file. You can save it in a file named
`my-batch-requests.json`

:

```
{"key": "request-1", "request": {"contents": [{"parts": [{"text": "Describe the process of photosynthesis."}]}], "generation_config": {"temperature": 0.7}}}
{"key": "request-2", "request": {"contents": [{"parts": [{"text": "What are the main ingredients in a Margherita pizza?"}]}]}}
```


Similarly to inline requests, you can specify other parameters like system instructions, tools or other configurations in each request JSON.

You can upload this file using the [File API](/gemini-api/docs/files) as
shown in the following example. If
you are working with multimodal input, you can reference other uploaded files
within your JSONL file.

### Python

```
import json
from google import genai
from google.genai import types
client = genai.Client()
# Create a sample JSONL file
with open("my-batch-requests.jsonl", "w") as f:
requests = [
{"key": "request-1", "request": {"contents": [{"parts": [{"text": "Describe the process of photosynthesis."}]}]}},
{"key": "request-2", "request": {"contents": [{"parts": [{"text": "What are the main ingredients in a Margherita pizza?"}]}]}}
]
for req in requests:
f.write(json.dumps(req) + "\n")
# Upload the file to the File API
uploaded_file = client.files.upload(
file='my-batch-requests.jsonl',
config=types.UploadFileConfig(display_name='my-batch-requests', mime_type='jsonl')
)
print(f"Uploaded file: {uploaded_file.name}")
```


### JavaScript

```
import {GoogleGenAI} from '@google/genai';
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from 'url';
const ai = new GoogleGenAI({});
const fileName = "my-batch-requests.jsonl";
// Define the requests
const requests = [
{ "key": "request-1", "request": { "contents": [{ "parts": [{ "text": "Describe the process of photosynthesis." }] }] } },
{ "key": "request-2", "request": { "contents": [{ "parts": [{ "text": "What are the main ingredients in a Margherita pizza?" }] }] } }
];
// Construct the full path to file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, fileName); // __dirname is the directory of the current script
async function writeBatchRequestsToFile(requests, filePath) {
try {
// Use a writable stream for efficiency, especially with larger files.
const writeStream = fs.createWriteStream(filePath, { flags: 'w' });
writeStream.on('error', (err) => {
console.error(`Error writing to file ${filePath}:`, err);
});
for (const req of requests) {
writeStream.write(JSON.stringify(req) + '\n');
}
writeStream.end();
console.log(`Successfully wrote batch requests to ${filePath}`);
} catch (error) {
// This catch block is for errors that might occur before stream setup,
// stream errors are handled by the 'error' event.
console.error(`An unexpected error occurred:`, error);
}
}
// Write to a file.
writeBatchRequestsToFile(requests, filePath);
// Upload the file to the File API.
const uploadedFile = await ai.files.upload({file: 'my-batch-requests.jsonl', config: {
mimeType: 'jsonl',
}});
console.log(uploadedFile.name);
```


### REST

```
tmp_batch_input_file=batch_input.tmp
echo -e '{"contents": [{"parts": [{"text": "Describe the process of photosynthesis."}]}], "generationConfig": {"temperature": 0.7}}\n{"contents": [{"parts": [{"text": "What are the main ingredients in a Margherita pizza?"}]}]}' > batch_input.tmp
MIME_TYPE=$(file -b --mime-type "${tmp_batch_input_file}")
NUM_BYTES=$(wc -c < "${tmp_batch_input_file}")
DISPLAY_NAME=BatchInput
tmp_header_file=upload-header.tmp
# Initial resumable request defining metadata.
# The upload url is in the response headers dump them to a file.
curl "https://generativelanguage.googleapis.com/upload/v1beta/files" \
-D "${tmp_header_file}" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "X-Goog-Upload-Protocol: resumable" \
-H "X-Goog-Upload-Command: start" \
-H "X-Goog-Upload-Header-Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Header-Content-Type: ${MIME_TYPE}" \
-H "Content-Type: application/jsonl" \
-d "{'file': {'display_name': '${DISPLAY_NAME}'}}" 2> /dev/null
upload_url=$(grep -i "x-goog-upload-url: " "${tmp_header_file}" | cut -d" " -f2 | tr -d "\r")
rm "${tmp_header_file}"
# Upload the actual bytes.
curl "${upload_url}" \
-H "Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Offset: 0" \
-H "X-Goog-Upload-Command: upload, finalize" \
--data-binary "@${tmp_batch_input_file}" 2> /dev/null > file_info.json
file_uri=$(jq ".file.uri" file_info.json)
```


The following example calls the
[ BatchGenerateContent](/api/batch-mode#google.ai.generativelanguage.v1beta.BatchService.BatchGenerateContent)
method with the input file uploaded using File API:

### Python

```
from google import genai
# Assumes `uploaded_file` is the file object from the previous step
client = genai.Client()
file_batch_job = client.batches.create(
model="gemini-3-flash-preview",
src=uploaded_file.name,
config={
'display_name': "file-upload-job-1",
},
)
print(f"Created batch job: {file_batch_job.name}")
```


### JavaScript

```
// Assumes `uploadedFile` is the file object from the previous step
const fileBatchJob = await ai.batches.create({
model: 'gemini-3-flash-preview',
src: uploadedFile.name,
config: {
displayName: 'file-upload-job-1',
}
});
console.log(fileBatchJob);
```


### REST

```
# Set the File ID taken from the upload response.
BATCH_INPUT_FILE='files/123456'
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:batchGenerateContent \
-X POST \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type:application/json" \
-d "{
'batch': {
'display_name': 'my-batch-requests',
'input_config': {
'file_name': '${BATCH_INPUT_FILE}'
}
}
}"
```


When you create a batch job, you will get a job name returned. Use this name
for [monitoring](#batch-job-status) the job status as well as
[retrieving the results](#retrieve-batch-results) once the job completes.

The following is an example output that contains a job name:

```
Created batch job from file: batches/123456789
```


### Batch embedding support

You can use the Batch API to interact with the
[Embeddings model](/gemini-api/docs/embeddings) for higher throughput.
To create an embeddings batch job with either [inline requests](#inline-requests)
or [input files](#input-file), use the `batches.create_embeddings`

API and
specify the embeddings model.

### Python

```
from google import genai
client = genai.Client()
# Creating an embeddings batch job with an input file request:
file_job = client.batches.create_embeddings(
model="gemini-embedding-001",
src={'file_name': uploaded_batch_requests.name},
config={'display_name': "Input embeddings batch"},
)
# Creating an embeddings batch job with an inline request:
batch_job = client.batches.create_embeddings(
model="gemini-embedding-001",
# For a predefined list of requests `inlined_requests`
src={'inlined_requests': inlined_requests},
config={'display_name': "Inlined embeddings batch"},
)
```


### JavaScript

```
// Creating an embeddings batch job with an input file request:
let fileJob;
fileJob = await client.batches.createEmbeddings({
model: 'gemini-embedding-001',
src: {fileName: uploadedBatchRequests.name},
config: {displayName: 'Input embeddings batch'},
});
console.log(`Created batch job: ${fileJob.name}`);
// Creating an embeddings batch job with an inline request:
let batchJob;
batchJob = await client.batches.createEmbeddings({
model: 'gemini-embedding-001',
// For a predefined a list of requests `inlinedRequests`
src: {inlinedRequests: inlinedRequests},
config: {displayName: 'Inlined embeddings batch'},
});
console.log(`Created batch job: ${batchJob.name}`);
```


Read the Embeddings section in the [Batch API cookbook](https://github.com/google-gemini/cookbook/blob/main/quickstarts/Batch_mode.ipynb)
for more examples.

### Request configuration

You can include any request configurations you would use in a standard non-batch request. For example, you could specify the temperature, system instructions or even pass in other modalities. The following example shows an example inline request that contains a system instruction for one of the requests:

### Python

```
inline_requests_list = [
{'contents': [{'parts': [{'text': 'Write a short poem about a cloud.'}]}]},
{'contents': [{
'parts': [{
'text': 'Write a short poem about a cat.'
}]
}],
'config': {
'system_instruction': {'parts': [{'text': 'You are a cat. Your name is Neko.'}]}}
}
]
```


### JavaScript

```
inlineRequestsList = [
{contents: [{parts: [{text: 'Write a short poem about a cloud.'}]}]},
{contents: [{parts: [{text: 'Write a short poem about a cat.'}]}],
config: {systemInstruction: {parts: [{text: 'You are a cat. Your name is Neko.'}]}}}
]
```


Similarly can specify tools to use for a request. The following example
shows a request that enables the [Google Search tool](/gemini-api/docs/google-search):

### Python

```
inlined_requests = [
{'contents': [{'parts': [{'text': 'Who won the euro 1998?'}]}]},
{'contents': [{'parts': [{'text': 'Who won the euro 2025?'}]}],
'config':{'tools': [{'google_search': {}}]}}]
```


### JavaScript

```
inlineRequestsList = [
{contents: [{parts: [{text: 'Who won the euro 1998?'}]}]},
{contents: [{parts: [{text: 'Who won the euro 2025?'}]}],
config: {tools: [{googleSearch: {}}]}}
]
```


You can specify [structured output](/gemini-api/docs/structured-output) as well.
The following example shows how to specify for your batch requests.

### Python

```
import time
from google import genai
from pydantic import BaseModel, TypeAdapter
class Recipe(BaseModel):
recipe_name: str
ingredients: list[str]
client = genai.Client()
# A list of dictionaries, where each is a GenerateContentRequest
inline_requests = [
{
'contents': [{
'parts': [{'text': 'List a few popular cookie recipes, and include the amounts of ingredients.'}],
'role': 'user'
}],
'config': {
'response_mime_type': 'application/json',
'response_schema': list[Recipe]
}
},
{
'contents': [{
'parts': [{'text': 'List a few popular gluten free cookie recipes, and include the amounts of ingredients.'}],
'role': 'user'
}],
'config': {
'response_mime_type': 'application/json',
'response_schema': list[Recipe]
}
}
]
inline_batch_job = client.batches.create(
model="gemini-3-flash-preview",
src=inline_requests,
config={
'display_name': "structured-output-job-1"
},
)
# wait for the job to finish
job_name = inline_batch_job.name
print(f"Polling status for job: {job_name}")
while True:
batch_job_inline = client.batches.get(name=job_name)
if batch_job_inline.state.name in ('JOB_STATE_SUCCEEDED', 'JOB_STATE_FAILED', 'JOB_STATE_CANCELLED', 'JOB_STATE_EXPIRED'):
break
print(f"Job not finished. Current state: {batch_job_inline.state.name}. Waiting 30 seconds...")
time.sleep(30)
print(f"Job finished with state: {batch_job_inline.state.name}")
# print the response
for i, inline_response in enumerate(batch_job_inline.dest.inlined_responses, start=1):
print(f"\n--- Response {i} ---")
# Check for a successful response
if inline_response.response:
# The .text property is a shortcut to the generated text.
print(inline_response.response.text)
```


### JavaScript

```
import {GoogleGenAI, Type} from '@google/genai';
const ai = new GoogleGenAI({});
const inlinedRequests = [
{
contents: [{
parts: [{text: 'List a few popular cookie recipes, and include the amounts of ingredients.'}],
role: 'user'
}],
config: {
responseMimeType: 'application/json',
responseSchema: {
type: Type.ARRAY,
items: {
type: Type.OBJECT,
properties: {
'recipeName': {
type: Type.STRING,
description: 'Name of the recipe',
nullable: false,
},
'ingredients': {
type: Type.ARRAY,
items: {
type: Type.STRING,
description: 'Ingredients of the recipe',
nullable: false,
},
},
},
required: ['recipeName'],
},
},
}
},
{
contents: [{
parts: [{text: 'List a few popular gluten free cookie recipes, and include the amounts of ingredients.'}],
role: 'user'
}],
config: {
responseMimeType: 'application/json',
responseSchema: {
type: Type.ARRAY,
items: {
type: Type.OBJECT,
properties: {
'recipeName': {
type: Type.STRING,
description: 'Name of the recipe',
nullable: false,
},
'ingredients': {
type: Type.ARRAY,
items: {
type: Type.STRING,
description: 'Ingredients of the recipe',
nullable: false,
},
},
},
required: ['recipeName'],
},
},
}
}
]
const inlinedBatchJob = await ai.batches.create({
model: 'gemini-3-flash-preview',
src: inlinedRequests,
config: {
displayName: 'inlined-requests-job-1',
}
});
```


The following shows an example output of this job:

```
--- Response 1 ---
[
{
"recipe_name": "Chocolate Chip Cookies",
"ingredients": [
"1 cup (2 sticks) unsalted butter, softened",
"3/4 cup granulated sugar",
"3/4 cup packed light brown sugar",
"1 large egg",
"1 teaspoon vanilla extract",
"2 1/4 cups all-purpose flour",
"1 teaspoon baking soda",
"1/2 teaspoon salt",
"1 1/2 cups chocolate chips"
]
},
{
"recipe_name": "Oatmeal Raisin Cookies",
"ingredients": [
"1 cup (2 sticks) unsalted butter, softened",
"1 cup packed light brown sugar",
"1/2 cup granulated sugar",
"2 large eggs",
"1 teaspoon vanilla extract",
"1 1/2 cups all-purpose flour",
"1 teaspoon baking soda",
"1 teaspoon ground cinnamon",
"1/2 teaspoon salt",
"3 cups old-fashioned rolled oats",
"1 cup raisins"
]
},
{
"recipe_name": "Sugar Cookies",
"ingredients": [
"1 cup (2 sticks) unsalted butter, softened",
"1 1/2 cups granulated sugar",
"1 large egg",
"1 teaspoon vanilla extract",
"2 3/4 cups all-purpose flour",
"1 teaspoon baking powder",
"1/2 teaspoon salt"
]
}
]
--- Response 2 ---
[
{
"recipe_name": "Gluten-Free Chocolate Chip Cookies",
"ingredients": [
"1 cup (2 sticks) unsalted butter, softened",
"3/4 cup granulated sugar",
"3/4 cup packed light brown sugar",
"2 large eggs",
"1 teaspoon vanilla extract",
"2 1/4 cups gluten-free all-purpose flour blend (with xanthan gum)",
"1 teaspoon baking soda",
"1/2 teaspoon salt",
"1 1/2 cups chocolate chips"
]
},
{
"recipe_name": "Gluten-Free Peanut Butter Cookies",
"ingredients": [
"1 cup (250g) creamy peanut butter",
"1/2 cup (100g) granulated sugar",
"1/2 cup (100g) packed light brown sugar",
"1 large egg",
"1 teaspoon vanilla extract",
"1/2 teaspoon baking soda",
"1/4 teaspoon salt"
]
},
{
"recipe_name": "Gluten-Free Oatmeal Raisin Cookies",
"ingredients": [
"1/2 cup (1 stick) unsalted butter, softened",
"1/2 cup granulated sugar",
"1/2 cup packed light brown sugar",
"1 large egg",
"1 teaspoon vanilla extract",
"1 cup gluten-free all-purpose flour blend",
"1/2 teaspoon baking soda",
"1/2 teaspoon ground cinnamon",
"1/4 teaspoon salt",
"1 1/2 cups gluten-free rolled oats",
"1/2 cup raisins"
]
}
]
```


## Monitoring job status

Use the operation name obtained when creating the batch job to poll its status. The state field of the batch job will indicate its current status. A batch job can be in one of the following states:

`JOB_STATE_PENDING`

: The job has been created and is waiting to be processed by the service.`JOB_STATE_RUNNING`

: The job is in progress.`JOB_STATE_SUCCEEDED`

: The job completed successfully. You can now retrieve the results.`JOB_STATE_FAILED`

: The job failed. Check the error details for more information.`JOB_STATE_CANCELLED`

: The job was cancelled by the user.`JOB_STATE_EXPIRED`

: The job has expired because it was running or pending for more than 48 hours. The job will not have any results to retrieve. You can try submitting the job again or splitting up the requests into smaller batches.

You can poll the job status periodically to check for completion.

### Python

```
import time
from google import genai
client = genai.Client()
# Use the name of the job you want to check
# e.g., inline_batch_job.name from the previous step
job_name = "YOUR_BATCH_JOB_NAME" # (e.g. 'batches/your-batch-id')
batch_job = client.batches.get(name=job_name)
completed_states = set([
'JOB_STATE_SUCCEEDED',
'JOB_STATE_FAILED',
'JOB_STATE_CANCELLED',
'JOB_STATE_EXPIRED',
])
print(f"Polling status for job: {job_name}")
batch_job = client.batches.get(name=job_name) # Initial get
while batch_job.state.name not in completed_states:
print(f"Current state: {batch_job.state.name}")
time.sleep(30) # Wait for 30 seconds before polling again
batch_job = client.batches.get(name=job_name)
print(f"Job finished with state: {batch_job.state.name}")
if batch_job.state.name == 'JOB_STATE_FAILED':
print(f"Error: {batch_job.error}")
```


### JavaScript

```
// Use the name of the job you want to check
// e.g., inlinedBatchJob.name from the previous step
let batchJob;
const completedStates = new Set([
'JOB_STATE_SUCCEEDED',
'JOB_STATE_FAILED',
'JOB_STATE_CANCELLED',
'JOB_STATE_EXPIRED',
]);
try {
batchJob = await ai.batches.get({name: inlinedBatchJob.name});
while (!completedStates.has(batchJob.state)) {
console.log(`Current state: ${batchJob.state}`);
// Wait for 30 seconds before polling again
await new Promise(resolve => setTimeout(resolve, 30000));
batchJob = await client.batches.get({ name: batchJob.name });
}
console.log(`Job finished with state: ${batchJob.state}`);
if (batchJob.state === 'JOB_STATE_FAILED') {
// The exact structure of `error` might vary depending on the SDK
// This assumes `error` is an object with a `message` property.
console.error(`Error: ${batchJob.state}`);
}
} catch (error) {
console.error(`An error occurred while polling job ${batchJob.name}:`, error);
}
```


## Retrieving results

Once the job status indicates your batch job has succeeded, the results are
available in the `response`

field.

### Python

```
import json
from google import genai
client = genai.Client()
# Use the name of the job you want to check
# e.g., inline_batch_job.name from the previous step
job_name = "YOUR_BATCH_JOB_NAME"
batch_job = client.batches.get(name=job_name)
if batch_job.state.name == 'JOB_STATE_SUCCEEDED':
# If batch job was created with a file
if batch_job.dest and batch_job.dest.file_name:
# Results are in a file
result_file_name = batch_job.dest.file_name
print(f"Results are in file: {result_file_name}")
print("Downloading result file content...")
file_content = client.files.download(file=result_file_name)
# Process file_content (bytes) as needed
print(file_content.decode('utf-8'))
# If batch job was created with inline request
# (for embeddings, use batch_job.dest.inlined_embed_content_responses)
elif batch_job.dest and batch_job.dest.inlined_responses:
# Results are inline
print("Results are inline:")
for i, inline_response in enumerate(batch_job.dest.inlined_responses):
print(f"Response {i+1}:")
if inline_response.response:
# Accessing response, structure may vary.
try:
print(inline_response.response.text)
except AttributeError:
print(inline_response.response) # Fallback
elif inline_response.error:
print(f"Error: {inline_response.error}")
else:
print("No results found (neither file nor inline).")
else:
print(f"Job did not succeed. Final state: {batch_job.state.name}")
if batch_job.error:
print(f"Error: {batch_job.error}")
```


### JavaScript

```
// Use the name of the job you want to check
// e.g., inlinedBatchJob.name from the previous step
const jobName = "YOUR_BATCH_JOB_NAME";
try {
const batchJob = await ai.batches.get({ name: jobName });
if (batchJob.state === 'JOB_STATE_SUCCEEDED') {
console.log('Found completed batch:', batchJob.displayName);
console.log(batchJob);
// If batch job was created with a file destination
if (batchJob.dest?.fileName) {
const resultFileName = batchJob.dest.fileName;
console.log(`Results are in file: ${resultFileName}`);
console.log("Downloading result file content...");
const fileContentBuffer = await ai.files.download({ file: resultFileName });
// Process fileContentBuffer (Buffer) as needed
console.log(fileContentBuffer.toString('utf-8'));
}
// If batch job was created with inline responses
else if (batchJob.dest?.inlinedResponses) {
console.log("Results are inline:");
for (let i = 0; i < batchJob.dest.inlinedResponses.length; i++) {
const inlineResponse = batchJob.dest.inlinedResponses[i];
console.log(`Response ${i + 1}:`);
if (inlineResponse.response) {
// Accessing response, structure may vary.
if (inlineResponse.response.text !== undefined) {
console.log(inlineResponse.response.text);
} else {
console.log(inlineResponse.response); // Fallback
}
} else if (inlineResponse.error) {
console.error(`Error: ${inlineResponse.error}`);
}
}
}
// If batch job was an embedding batch with inline responses
else if (batchJob.dest?.inlinedEmbedContentResponses) {
console.log("Embedding results found inline:");
for (let i = 0; i < batchJob.dest.inlinedEmbedContentResponses.length; i++) {
const inlineResponse = batchJob.dest.inlinedEmbedContentResponses[i];
console.log(`Response ${i + 1}:`);
if (inlineResponse.response) {
console.log(inlineResponse.response);
} else if (inlineResponse.error) {
console.error(`Error: ${inlineResponse.error}`);
}
}
} else {
console.log("No results found (neither file nor inline).");
}
} else {
console.log(`Job did not succeed. Final state: ${batchJob.state}`);
if (batchJob.error) {
console.error(`Error: ${typeof batchJob.error === 'string' ? batchJob.error : batchJob.error.message || JSON.stringify(batchJob.error)}`);
}
}
} catch (error) {
console.error(`An error occurred while processing job ${jobName}:`, error);
}
```


### REST

```
BATCH_NAME="batches/123456" # Your batch job name
curl https://generativelanguage.googleapis.com/v1beta/$BATCH_NAME \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type:application/json" 2> /dev/null > batch_status.json
if jq -r '.done' batch_status.json | grep -q "false"; then
echo "Batch has not finished processing"
fi
batch_state=$(jq -r '.metadata.state' batch_status.json)
if [[ $batch_state = "JOB_STATE_SUCCEEDED" ]]; then
if [[ $(jq '.response | has("inlinedResponses")' batch_status.json) = "true" ]]; then
jq -r '.response.inlinedResponses' batch_status.json
exit
fi
responses_file_name=$(jq -r '.response.responsesFile' batch_status.json)
curl https://generativelanguage.googleapis.com/download/v1beta/$responses_file_name:download?alt=media \
-H "x-goog-api-key: $GEMINI_API_KEY" 2> /dev/null
elif [[ $batch_state = "JOB_STATE_FAILED" ]]; then
jq '.error' batch_status.json
elif [[ $batch_state == "JOB_STATE_CANCELLED" ]]; then
echo "Batch was cancelled by the user"
elif [[ $batch_state == "JOB_STATE_EXPIRED" ]]; then
echo "Batch expired after 48 hours"
fi
```


## Listing batch jobs

You can list your recent batch jobs.

### Python

```
batch_jobs = client.batches.list()
# Optional query config:
# batch_jobs = client.batches.list(config={'page_size': 5})
for batch_job in batch_jobs:
print(batch_job)
```


### JavaScript

```
const batchJobs = await ai.batches.list();
// Optional query config:
// const batchJobs = await ai.batches.list({config: {'pageSize': 5}});
for await (const batchJob of batchJobs) {
console.log(batchJob);
}
```


### REST

```
curl https://generativelanguage.googleapis.com/v1beta/batches \
-H "x-goog-api-key: $GEMINI_API_KEY"
```


## Cancelling a batch job

You can cancel an ongoing batch job using its name. When a job is canceled, it stops processing new requests.

### Python

```
client.batches.cancel(name=batch_job_to_cancel.name)
```


### JavaScript

```
await ai.batches.cancel({name: batchJobToCancel.name});
```


### REST

```
BATCH_NAME="batches/123456" # Your batch job name
# Cancel the batch
curl https://generativelanguage.googleapis.com/v1beta/$BATCH_NAME:cancel \
-H "x-goog-api-key: $GEMINI_API_KEY" \
# Confirm that the status of the batch after cancellation is JOB_STATE_CANCELLED
curl https://generativelanguage.googleapis.com/v1beta/$BATCH_NAME \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type:application/json" 2> /dev/null | jq -r '.metadata.state'
```


## Deleting a batch job

You can delete an existing batch job using its name. When a job is deleted, it stops processing new requests and is removed from the list of batch jobs.

### Python

```
client.batches.delete(name=batch_job_to_delete.name)
```


### JavaScript

```
await ai.batches.delete({name: batchJobToDelete.name});
```


### REST

```
BATCH_NAME="batches/123456" # Your batch job name
# Delete the batch job
curl https://generativelanguage.googleapis.com/v1beta/$BATCH_NAME:delete \
-H "x-goog-api-key: $GEMINI_API_KEY"
```


## Generating images in batch

If you're using [Gemini Nano Banana](/gemini-api/docs/image-generation) and need to generate a lot
of images, you can use the Batch API to get higher
[rate limits](/gemini-api/docs/rate-limits) in exchange for a turnaround of up
to 24 hours.

You can either use inline requests for small batches of requests (under 20MB) or a JSONL input file for large batches (recommended for image generation):

### Python

```
import json
import time
import base64
from google import genai
from google.genai import types
from PIL import Image
client = genai.Client()
# 1. Create and upload file
file_name = "my-batch-image-requests.jsonl"
with open(file_name, "w") as f:
requests = [
{"key": "request-1", "request": {"contents": [{"parts": [{"text": "A big letter A surrounded by animals starting with the A letter"}]}], "generation_config": {"responseModalities": ["TEXT", "IMAGE"]}}},
{"key": "request-2", "request": {"contents": [{"parts": [{"text": "A big letter B surrounded by animals starting with the B letter"}]}], "generation_config": {"responseModalities": ["TEXT", "IMAGE"]}}}
]
for req in requests:
f.write(json.dumps(req) + "\n")
uploaded_file = client.files.upload(
file=file_name,
config=types.UploadFileConfig(display_name='my-batch-image-requests', mime_type='jsonl')
)
print(f"Uploaded file: {uploaded_file.name}")
# 2. Create batch job
file_batch_job = client.batches.create(
model="gemini-3-pro-image-preview",
src=uploaded_file.name,
config={
'display_name': "file-image-upload-job-1",
},
)
print(f"Created batch job: {file_batch_job.name}")
# 3. Monitor job status
job_name = file_batch_job.name
print(f"Polling status for job: {job_name}")
completed_states = set([
'JOB_STATE_SUCCEEDED',
'JOB_STATE_FAILED',
'JOB_STATE_CANCELLED',
'JOB_STATE_EXPIRED',
])
batch_job = client.batches.get(name=job_name) # Initial get
while batch_job.state.name not in completed_states:
print(f"Current state: {batch_job.state.name}")
time.sleep(10) # Wait for 10 seconds before polling again
batch_job = client.batches.get(name=job_name)
print(f"Job finished with state: {batch_job.state.name}")
# 4. Retrieve results
if batch_job.state.name == 'JOB_STATE_SUCCEEDED':
result_file_name = batch_job.dest.file_name
print(f"Results are in file: {result_file_name}")
print("Downloading result file content...")
file_content_bytes = client.files.download(file=result_file_name)
file_content = file_content_bytes.decode('utf-8')
# The result file is also a JSONL file. Parse and print each line.
for line in file_content.splitlines():
if line:
parsed_response = json.loads(line)
if 'response' in parsed_response and parsed_response['response']:
for part in parsed_response['response']['candidates'][0]['content']['parts']:
if part.get('text'):
print(part['text'])
elif part.get('inlineData'):
print(f"Image mime type: {part['inlineData']['mimeType']}")
data = base64.b64decode(part['inlineData']['data'])
elif 'error' in parsed_response:
print(f"Error: {parsed_response['error']}")
elif batch_job.state.name == 'JOB_STATE_FAILED':
print(f"Error: {batch_job.error}")
```


### JavaScript

```
import {GoogleGenAI} from '@google/genai';
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from 'url';
const ai = new GoogleGenAI({});
async function run() {
// 1. Create and upload file
const fileName = "my-batch-image-requests.jsonl";
const requests = [
{ "key": "request-1", "request": { "contents": [{ "parts": [{ "text": "A big letter A surrounded by animals starting with the A letter" }] }], "generation_config": {"responseModalities": ["TEXT", "IMAGE"]} } },
{ "key": "request-2", "request": { "contents": [{ "parts": [{ "text": "A big letter B surrounded by animals starting with the B letter" }] }], "generation_config": {"responseModalities": ["TEXT", "IMAGE"]} } }
];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, fileName);
try {
const writeStream = fs.createWriteStream(filePath, { flags: 'w' });
for (const req of requests) {
writeStream.write(JSON.stringify(req) + '\n');
}
writeStream.end();
console.log(`Successfully wrote batch requests to ${filePath}`);
} catch (error) {
console.error(`An unexpected error occurred writing file:`, error);
return;
}
const uploadedFile = await ai.files.upload({file: fileName, config: { mimeType: 'jsonl' }});
console.log(`Uploaded file: ${uploadedFile.name}`);
// 2. Create batch job
const fileBatchJob = await ai.batches.create({
model: 'gemini-3-pro-image-preview',
src: uploadedFile.name,
config: {
displayName: 'file-image-upload-job-1',
}
});
console.log(fileBatchJob);
// 3. Monitor job status
let batchJob;
const completedStates = new Set([
'JOB_STATE_SUCCEEDED',
'JOB_STATE_FAILED',
'JOB_STATE_CANCELLED',
'JOB_STATE_EXPIRED',
]);
try {
batchJob = await ai.batches.get({name: fileBatchJob.name});
while (!completedStates.has(batchJob.state)) {
console.log(`Current state: ${batchJob.state}`);
// Wait for 10 seconds before polling again
await new Promise(resolve => setTimeout(resolve, 10000));
batchJob = await ai.batches.get({ name: batchJob.name });
}
console.log(`Job finished with state: ${batchJob.state}`);
} catch (error) {
console.error(`An error occurred while polling job ${fileBatchJob.name}:`, error);
return;
}
// 4. Retrieve results
if (batchJob.state === 'JOB_STATE_SUCCEEDED') {
if (batchJob.dest?.fileName) {
const resultFileName = batchJob.dest.fileName;
console.log(`Results are in file: ${resultFileName}`);
console.log("Downloading result file content...");
const fileContentBuffer = await ai.files.download({ file: resultFileName });
const fileContent = fileContentBuffer.toString('utf-8');
for (const line of fileContent.split('\n')) {
if (line) {
const parsedResponse = JSON.parse(line);
if (parsedResponse.response) {
for (const part of parsedResponse.response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
console.log(`Image mime type: ${part.inlineData.mimeType}`);
}
}
} else if (parsedResponse.error) {
console.error(`Error: ${parsedResponse.error}`);
}
}
}
} else {
console.log("No result file found.");
}
} else if (batchJob.state === 'JOB_STATE_FAILED') {
console.error(`Error: ${typeof batchJob.error === 'string' ? batchJob.error : batchJob.error.message || JSON.stringify(batchJob.error)}`);
}
}
run();
```


### REST

```
# 1. Create and upload file
echo '{"key": "request-1", "request": {"contents": [{"parts": [{"text": "A big letter A surrounded by animals starting with the A letter"}]}], "generation_config": {"responseModalities": ["TEXT", "IMAGE"]}}}' > my-batch-image-requests.jsonl
echo '{"key": "request-2", "request": {"contents": [{"parts": [{"text": "A big letter B surrounded by animals starting with the B letter"}]}], "generation_config": {"responseModalities": ["TEXT", "IMAGE"]}}}' >> my-batch-image-requests.jsonl
# Follow File API guide to upload: https://ai.google.dev/gemini-api/docs/files#upload_a_file
# This example assumes you have uploaded the file and set BATCH_INPUT_FILE to its name (e.g., files/abcdef123)
BATCH_INPUT_FILE="files/your-uploaded-file-name"
# 2. Create batch job
printf -v request_data '{
"batch": {
"display_name": "my-batch-file-image-requests",
"input_config": { "file_name": "%s" }
}
}' "$BATCH_INPUT_FILE"
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:batchGenerateContent \
-X POST \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type:application/json" \
-d "$request_data" > created_batch.json
BATCH_NAME=$(jq -r '.name' created_batch.json)
echo "Created batch job: $BATCH_NAME"
# 3. Poll job status until completion by repeating the following command:
curl https://generativelanguage.googleapis.com/v1beta/$BATCH_NAME \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type:application/json" > batch_status.json
echo "Current status:"
jq '.' batch_status.json
# 4. If state is JOB_STATE_SUCCEEDED, download results file
batch_state=$(jq -r '.state' batch_status.json)
if [[ $batch_state = "JOB_STATE_SUCCEEDED" ]]; then
responses_file_name=$(jq -r '.dest.fileName' batch_status.json)
echo "Job succeeded. Downloading results from $responses_file_name..."
curl https://generativelanguage.googleapis.com/download/v1beta/$responses_file_name:download?alt=media \
-H "x-goog-api-key: $GEMINI_API_KEY" > batch_results.jsonl
echo "Results saved to batch_results.jsonl"
fi
```


## Technical details

**Supported models:**Batch API supports a range of Gemini models. Refer to the[Models page](/gemini-api/docs/models)for each model's support of Batch API. The supported modalities for Batch API are the same as what's supported on the interactive (or non-batch) API.**Pricing:**Batch API usage is priced at 50% of the standard interactive API cost for the equivalent model. See the[pricing page](/gemini-api/docs/pricing)for details. Refer to the[rate limits page](/gemini-api/docs/rate-limits#batch-mode)for details on rate limits for this feature.**Service Level Objective (SLO):**Batch jobs are designed to complete within a 24-hour turnaround time. Many jobs may complete much faster depending on their size and current system load.**Caching:**[Context caching](/gemini-api/docs/caching)is enabled for batch requests. If a request in your batch results in a cache hit, the cached tokens are priced the same as for non-batch API traffic.

## Best practices

**Use input files for large requests:**For a large number of requests, always use the file input method for better manageability and to avoid hitting request size limits for thecall itself. Note that there's a the 2GB file size limit per input file.`BatchGenerateContent`

**Error handling:**Check the`batchStats`

for`failedRequestCount`

after a job completes. If using file output, parse each line to check if it's a`GenerateContentResponse`

or a status object indicating an error for that specific request. See the[troubleshooting guide](/gemini-api/docs/troubleshooting#error-codes)for a complete set of error codes.**Submit jobs once:**The creation of a batch job is not idempotent. If you send the same creation request twice, two separate batch jobs will be created.**Break up very large batches:**While the target turnaround time is 24 hours, actual processing time can vary based on system load and job size. For large jobs, consider breaking them into smaller batches if intermediate results are needed sooner.

## What's next

- Check out the
[Batch API notebook](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Batch_mode.ipynb)for more examples. - The OpenAI compatibility layer supports Batch API. Read the examples on the
[OpenAI Compatibility](/gemini-api/docs/openai#batch)page.

---

## Source: https://ai.google.dev/gemini-api/docs/interactions

The Interactions API ([Beta](/gemini-api/docs/api-versions)) is a unified interface
for interacting with Gemini models and agents. As an improved alternative
to the [ generateContent](/api/generate-content#method:-models.generatecontent)
API, it simplifies state management, tool orchestration,
and long-running tasks. For comprehensive view of the API schema, see the

[API Reference](/api/interactions-api). During the Beta, features and schemas are subject to

[breaking changes](#breaking-changes). To get started quickly, try the

[Interactions API quickstart notebook](https://colab.sandbox.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Get_started_interactions_api.ipynb).

The following example shows how to call the Interactions API with a text prompt.

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="Tell me a short joke about programming."
)
print(interaction.outputs[-1].text)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Tell me a short joke about programming.',
});
console.log(interaction.outputs[interaction.outputs.length - 1].text);
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Tell me a short joke about programming."
}'
```


## Basic interactions

The Interactions API is available through our
[existing SDKs](#sdk). The simplest way to interact with the model is by
providing a text prompt. The `input`

can be a string, a list containing a
content objects, or a list of turns with roles and content objects.

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="Tell me a short joke about programming."
)
print(interaction.outputs[-1].text)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Tell me a short joke about programming.',
});
console.log(interaction.outputs[interaction.outputs.length - 1].text);
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Tell me a short joke about programming."
}'
```


## Conversation

You can build multi-turn conversations in two ways:

- Statefully by referencing a previous interaction
- Statelessly by providing the entire conversation history

### Stateful conversation

To continue a conversation, pass the `id`

from the previous interaction to the
`previous_interaction_id`

parameter. The API remembers the conversation history,
so you only need to send the new input. For details on which fields are
inherited and which must be re-specified, see
[Server-side state management](#server-side-state).

### Python

```
from google import genai
client = genai.Client()
# 1. First turn
interaction1 = client.interactions.create(
model="gemini-3-flash-preview",
input="Hi, my name is Phil."
)
print(f"Model: {interaction1.outputs[-1].text}")
# 2. Second turn (passing previous_interaction_id)
interaction2 = client.interactions.create(
model="gemini-3-flash-preview",
input="What is my name?",
previous_interaction_id=interaction1.id
)
print(f"Model: {interaction2.outputs[-1].text}")
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
// 1. First turn
const interaction1 = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Hi, my name is Phil.'
});
console.log(`Model: ${interaction1.outputs[interaction1.outputs.length - 1].text}`);
// 2. Second turn (passing previous_interaction_id)
const interaction2 = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'What is my name?',
previous_interaction_id: interaction1.id
});
console.log(`Model: ${interaction2.outputs[interaction2.outputs.length - 1].text}`);
```


### REST

```
# 1. First turn
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Hi, my name is Phil."
}'
# 2. Second turn (Replace INTERACTION_ID with the ID from the previous interaction)
# curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
# -H "Content-Type: application/json" \
# -H "x-goog-api-key: $GEMINI_API_KEY" \
# -d '{
# "model": "gemini-3-flash-preview",
# "input": "What is my name?",
# "previous_interaction_id": "INTERACTION_ID"
# }'
```


#### Retrieve past stateful interactions

Using the interaction `id`

to retrieve previous turns of the conversation.

### Python

```
previous_interaction = client.interactions.get("<YOUR_INTERACTION_ID>")
print(previous_interaction)
```


### JavaScript

```
const previous_interaction = await client.interactions.get("<YOUR_INTERACTION_ID>");
console.log(previous_interaction);
```


### REST

```
curl -X GET "https://generativelanguage.googleapis.com/v1beta/interactions/<YOUR_INTERACTION_ID>" \
-H "x-goog-api-key: $GEMINI_API_KEY"
```


#### Include original input

By default, `interactions.get()`

returns only the model's outputs. To include the
original normalized input in the response, set `include_input`

to `true`

.

### Python

```
interaction = client.interactions.get(
"<YOUR_INTERACTION_ID>",
include_input=True
)
print(f"Input: {interaction.input}")
print(f"Output: {interaction.outputs}")
```


### JavaScript

```
const interaction = await client.interactions.get(
"<YOUR_INTERACTION_ID>",
{ include_input: true }
);
console.log(`Input: ${JSON.stringify(interaction.input)}`);
console.log(`Output: ${JSON.stringify(interaction.outputs)}`);
```


### REST

```
curl -X GET "https://generativelanguage.googleapis.com/v1beta/interactions/<YOUR_INTERACTION_ID>?include_input=true" \
-H "x-goog-api-key: $GEMINI_API_KEY"
```


### Stateless conversation

You can manage conversation history manually on the client side.

### Python

```
from google import genai
client = genai.Client()
conversation_history = [
{
"role": "user",
"content": "What are the three largest cities in Spain?"
}
]
interaction1 = client.interactions.create(
model="gemini-3-flash-preview",
input=conversation_history
)
print(f"Model: {interaction1.outputs[-1].text}")
conversation_history.append({"role": "model", "content": interaction1.outputs})
conversation_history.append({
"role": "user",
"content": "What is the most famous landmark in the second one?"
})
interaction2 = client.interactions.create(
model="gemini-3-flash-preview",
input=conversation_history
)
print(f"Model: {interaction2.outputs[-1].text}")
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const conversationHistory = [
{
role: 'user',
content: "What are the three largest cities in Spain?"
}
];
const interaction1 = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: conversationHistory
});
console.log(`Model: ${interaction1.outputs[interaction1.outputs.length - 1].text}`);
conversationHistory.push({ role: 'model', content: interaction1.outputs });
conversationHistory.push({
role: 'user',
content: "What is the most famous landmark in the second one?"
});
const interaction2 = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: conversationHistory
});
console.log(`Model: ${interaction2.outputs[interaction2.outputs.length - 1].text}`);
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": [
{
"role": "user",
"content": "What are the three largest cities in Spain?"
},
{
"role": "model",
"content": "The three largest cities in Spain are Madrid, Barcelona, and Valencia."
},
{
"role": "user",
"content": "What is the most famous landmark in the second one?"
}
]
}'
```


## Multimodal capabilities

You can use the Interactions API for multimodal use cases such as image understanding or video generation.

### Multimodal understanding

You can provide multimodal input as base64-encoded data inline, by using the Files API for larger files, or by passing a publicly accessible link in the uri field. The code samples that follow demonstrate the public URL method.

#### Image understanding

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input=[
{"type": "text", "text": "Describe the image."},
{
"type": "image",
"uri": "
````YOUR_URL`",
"mime_type": "image/png"
}
]
)
print(interaction.outputs[-1].text)


### JavaScript

```
import {GoogleGenAI} from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: [
{type: 'text', text: 'Describe the image.'},
{
type: 'image',
uri: '
````YOUR_URL`',
mime_type: 'image/png'
}
]
});
console.log(interaction.outputs[interaction.outputs.length - 1].text);


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"model": "gemini-3-flash-preview",
"input": [
{
"type": "text",
"text": "Describe the image."
},
{
"type": "image",
"uri": "
````YOUR_URL`",
"mime_type": "image/png"
}
]
}'


#### Audio understanding

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input=[
{"type": "text", "text": "What does this audio say?"},
{
"type": "audio",
"uri": "
````YOUR_URL`",
"mime_type": "audio/wav"
}
]
)
print(interaction.outputs[-1].text)


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: [
{ type: 'text', text: 'What does this audio say?' },
{
type: 'audio',
uri: '
````YOUR_URL`',
mime_type: 'audio/wav'
}
]
});
console.log(interaction.outputs[interaction.outputs.length - 1].text);


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": [
{"type": "text", "text": "What does this audio say?"},
{
"type": "audio",
"uri": "
````YOUR_URL`",
"mime_type": "audio/wav"
}
]
}'


#### Video understanding

### Python

```
from google import genai
client = genai.Client()
print("Analyzing video...")
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input=[
{"type": "text", "text": "What is happening in this video? Provide a timestamped summary."},
{
"type": "video",
"uri": "
````YOUR_URL`",
"mime_type": "video/mp4"
}
]
)
print(interaction.outputs[-1].text)


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
console.log('Analyzing video...');
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: [
{ type: 'text', text: 'What is happening in this video? Provide a timestamped summary.' },
{
type: 'video',
uri: '
````YOUR_URL`',
mime_type: 'video/mp4'
}
]
});
console.log(interaction.outputs[interaction.outputs.length - 1].text);


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": [
{"type": "text", "text": "What is happening in this video?"},
{
"type": "video",
"uri": "
````YOUR_URL`",
"mime_type": "video/mp4"
}
]
}'


#### Document (PDF) understanding

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input=[
{"type": "text", "text": "What is this document about?"},
{
"type": "document",
"uri": "
````YOUR_URL`",
"mime_type": "application/pdf"
}
]
)
print(interaction.outputs[-1].text)


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: [
{ type: 'text', text: 'What is this document about?' },
{
type: 'document',
uri: '
````YOUR_URL`',
mime_type: 'application/pdf'
}
],
});
console.log(interaction.outputs[0].text);


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": [
{"type": "text", "text": "What is this document about?"},
{
"type": "document",
"uri": "
````YOUR_URL`",
"mime_type": "application/pdf"
}
]
}'


### Multimodal generation

You can use Interactions API to generate multimodal outputs.

#### Image generation

### Python

```
import base64
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-pro-image-preview",
input="Generate an image of a futuristic city.",
response_modalities=["IMAGE"]
)
for output in interaction.outputs:
if output.type == "image":
print(f"Generated image with mime_type: {output.mime_type}")
# Save the image
with open("generated_city.png", "wb") as f:
f.write(base64.b64decode(output.data))
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-pro-image-preview',
input: 'Generate an image of a futuristic city.',
response_modalities: ['IMAGE']
});
for (const output of interaction.outputs) {
if (output.type === 'image') {
console.log(`Generated image with mime_type: ${output.mime_type}`);
// Save the image
fs.writeFileSync('generated_city.png', Buffer.from(output.data, 'base64'));
}
}
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-pro-image-preview",
"input": "Generate an image of a futuristic city.",
"response_modalities": ["IMAGE"]
}'
```


##### Configure image output

You can customize generated images using `image_config`

within `generation_config`

to control the aspect ratio and resolution.

| Parameter | Options | Description |
|---|---|---|
`aspect_ratio` |
`1:1` , `2:3` , `3:2` , `3:4` , `4:3` , `4:5` , `5:4` , `9:16` , `16:9` , `21:9` |
Controls the width-to-height ratio of the output image. |
`image_size` |
`1k` , `2k` , `4k` |
Sets the output image resolution. |

### Python

```
import base64
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-pro-image-preview",
input="Generate an image of a futuristic city.",
generation_config={
"image_config": {
"aspect_ratio": "9:16",
"image_size": "2k"
}
}
)
for output in interaction.outputs:
if output.type == "image":
print(f"Generated image with mime_type: {output.mime_type}")
# Save the image
with open("generated_city.png", "wb") as f:
f.write(base64.b64decode(output.data))
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-pro-image-preview',
input: 'Generate an image of a futuristic city.',
generation_config: {
image_config: {
aspect_ratio: '9:16',
image_size: '2k'
}
}
});
for (const output of interaction.outputs) {
if (output.type === 'image') {
console.log(`Generated image with mime_type: ${output.mime_type}`);
// Save the image
fs.writeFileSync('generated_city.png', Buffer.from(output.data, 'base64'));
}
}
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-pro-image-preview",
"input": "Generate an image of a futuristic city.",
"generation_config": {
"image_config": {
"aspect_ratio": "9:16",
"image_size": "2k"
}
}
}'
```


#### Speech generation

Generate natural-sounding speech from text using the text-to-speech (TTS) model.
Configure voice, language, and speaker settings with the `speech_config`

parameter.

### Python

```
import base64
from google import genai
import wave
# Set up the wave file to save the output:
def wave_file(filename, pcm, channels=1, rate=24000, sample_width=2):
with wave.open(filename, "wb") as wf:
wf.setnchannels(channels)
wf.setsampwidth(sample_width)
wf.setframerate(rate)
wf.writeframes(pcm)
client = genai.Client()
interaction = client.interactions.create(
model="gemini-2.5-flash-preview-tts",
input="Say the following: WOOHOO This is so much fun!.",
response_modalities=["AUDIO"],
generation_config={
"speech_config": {
"language": "en-us",
"voice": "kore"
}
}
)
for output in interaction.outputs:
if output.type == "audio":
print(f"Generated audio with mime_type: {output.mime_type}")
# Save the audio as wave file to the current directory.
wave_file("generated_audio.wav", base64.b64decode(output.data))
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';
import wav from 'wav';
async function saveWaveFile(
filename,
pcmData,
channels = 1,
rate = 24000,
sampleWidth = 2,
) {
return new Promise((resolve, reject) => {
const writer = new wav.FileWriter(filename, {
channels,
sampleRate: rate,
bitDepth: sampleWidth * 8,
});
writer.on('finish', resolve);
writer.on('error', reject);
writer.write(pcmData);
writer.end();
});
}
async function main() {
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const client = new GoogleGenAI({apiKey: GEMINI_API_KEY});
const interaction = await client.interactions.create({
model: 'gemini-2.5-flash-preview-tts',
input: 'Say the following: WOOHOO This is so much fun!.',
response_modalities: ['AUDIO'],
generation_config: {
speech_config: {
language: "en-us",
voice: "kore"
}
}
});
for (const output of interaction.outputs) {
if (output.type === 'audio') {
console.log(`Generated audio with mime_type: ${output.mime_type}`);
const audioBuffer = Buffer.from(output.data, 'base64');
// Save the audio as wave file to the current directory
await saveWaveFile("generated_audio.wav", audioBuffer);
}
}
}
await main();
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-2.5-flash-preview-tts",
"input": "Say the following: WOOHOO This is so much fun!.",
"response_modalities": ["AUDIO"],
"generation_config": {
"speech_config": {
"language": "en-us",
"voice": "kore"
}
}
}' | jq -r '.outputs[] | select(.type == "audio") | .data' | base64 -d > generated_audio.pcm
# You may need to install ffmpeg.
ffmpeg -f s16le -ar 24000 -ac 1 -i generated_audio.pcm generated_audio.wav
```


##### Multi-speaker speech generation

Generate speech with multiple speakers by specifying speaker names in the prompt
and matching them in the `speech_config`

.

The prompt should include the speaker names:

```
TTS the following conversation between Alice and Bob:
Alice: Hi Bob, how are you doing today?
Bob: I'm doing great, thanks for asking! How about you?
Alice: Fantastic! I just learned about the Gemini API.
```


Then configure the `speech_config`

with matching speakers:

```
"generation_config": {
"speech_config": [
{"voice": "Zephyr", "speaker": "Alice", "language": "en-US"},
{"voice": "Puck", "speaker": "Bob", "language": "en-US"}
]
}
```


#### Music generation

Generate high-quality music from text prompts using Lyria 3 models. The Interactions API supports both short clips and full-length songs with vocals, lyrics, and instrumental arrangements.

For the complete music generation guide including custom lyrics, timing control,
and image-to-music, see
[Generate music with Lyria 3](/gemini-api/docs/music-generation).

### Python

```
import base64
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="lyria-3-clip-preview",
input="Create a 30-second cheerful acoustic folk song with "
"guitar and harmonica.",
response_modalities=["AUDIO", "TEXT"]
)
for output in interaction.outputs:
if output.type == "audio":
print(f"Generated audio with mime_type: {output.mime_type}")
with open("music.mp3", "wb") as f:
f.write(base64.b64decode(output.data))
elif output.type == "text":
print(f"Lyrics: {output.text}")
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'lyria-3-clip-preview',
input: 'Create a 30-second cheerful acoustic folk song with ' +
'guitar and harmonica.',
response_modalities: ['AUDIO', 'TEXT']
});
for (const output of interaction.outputs) {
if (output.type === 'audio') {
console.log(`Generated audio with mime_type: ${output.mime_type}`);
fs.writeFileSync('music.mp3', Buffer.from(output.data, 'base64'));
} else if (output.type === 'text') {
console.log(`Lyrics: ${output.text}`);
}
}
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "lyria-3-clip-preview",
"input": "Create a 30-second cheerful acoustic folk song with guitar and harmonica.",
"response_modalities": ["AUDIO", "TEXT"]
}'
```


For full-length songs (up to ~4 minutes), use the `lyria-3-pro-preview`

model:

### Python

```
interaction = client.interactions.create(
model="lyria-3-pro-preview",
input="An epic cinematic orchestral piece about a journey home. "
"Starts with a solo piano intro, builds through sweeping "
"strings, and climaxes with a massive wall of sound.",
response_modalities=["AUDIO", "TEXT"]
)
```


### JavaScript

```
const interaction = await client.interactions.create({
model: 'lyria-3-pro-preview',
input: 'An epic cinematic orchestral piece about a journey home. ' +
'Starts with a solo piano intro, builds through sweeping ' +
'strings, and climaxes with a massive wall of sound.',
response_modalities: ['AUDIO', 'TEXT']
});
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "lyria-3-pro-preview",
"input": "An epic cinematic orchestral piece about a journey home. Starts with a solo piano intro, builds through sweeping strings, and climaxes with a massive wall of sound.",
"response_modalities": ["AUDIO", "TEXT"]
}'
```


## Agentic capabilities

The Interactions API is designed for building and interacting with agents, and includes support for function calling, built-in tools, structured outputs, and the Model Context Protocol (MCP).

### Agents

You can use specialized agents like `deep-research-pro-preview-12-2025`

for
complex tasks. To learn more about the Gemini Deep Research Agent, see the
[Deep Research](/gemini-api/docs/deep-research) guide.

### Python

```
import time
from google import genai
client = genai.Client()
# 1. Start the Deep Research Agent
initial_interaction = client.interactions.create(
input="Research the history of the Google TPUs with a focus on 2025 and 2026.",
agent="deep-research-pro-preview-12-2025",
background=True
)
print(f"Research started. Interaction ID: {initial_interaction.id}")
# 2. Poll for results
while True:
interaction = client.interactions.get(initial_interaction.id)
print(f"Status: {interaction.status}")
if interaction.status == "completed":
print("\nFinal Report:\n", interaction.outputs[-1].text)
break
elif interaction.status in ["failed", "cancelled"]:
print(f"Failed with status: {interaction.status}")
break
time.sleep(10)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
// 1. Start the Deep Research Agent
const initialInteraction = await client.interactions.create({
input: 'Research the history of the Google TPUs with a focus on 2025 and 2026.',
agent: 'deep-research-pro-preview-12-2025',
background: true
});
console.log(`Research started. Interaction ID: ${initialInteraction.id}`);
// 2. Poll for results
while (true) {
const interaction = await client.interactions.get(initialInteraction.id);
console.log(`Status: ${interaction.status}`);
if (interaction.status === 'completed') {
console.log('\nFinal Report:\n', interaction.outputs[interaction.outputs.length - 1].text);
break;
} else if (['failed', 'cancelled'].includes(interaction.status)) {
console.log(`Failed with status: ${interaction.status}`);
break;
}
await new Promise(resolve => setTimeout(resolve, 10000));
}
```


### REST

```
# 1. Start the Deep Research Agent
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"input": "Research the history of the Google TPUs with a focus on 2025 and 2026.",
"agent": "deep-research-pro-preview-12-2025",
"background": true
}'
# 2. Poll for results (Replace INTERACTION_ID with the ID from the previous interaction)
# curl -X GET "https://generativelanguage.googleapis.com/v1beta/interactions/INTERACTION_ID" \
# -H "x-goog-api-key: $GEMINI_API_KEY"
```


### Tools and function calling

This section explains how to use function calling to define custom tools and how to use Google's built-in tools within the Interactions API.

#### Function calling

### Python

```
from google import genai
client = genai.Client()
# 1. Define the tool
def get_weather(location: str):
"""Gets the weather for a given location."""
return f"The weather in {location} is sunny."
weather_tool = {
"type": "function",
"name": "get_weather",
"description": "Gets the weather for a given location.",
"parameters": {
"type": "object",
"properties": {
"location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"}
},
"required": ["location"]
}
}
# 2. Send the request with tools
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="What is the weather in Paris?",
tools=[weather_tool]
)
# 3. Handle the tool call
for output in interaction.outputs:
if output.type == "function_call":
print(f"Tool Call: {output.name}({output.arguments})")
# Execute tool
result = get_weather(**output.arguments)
# Send result back
interaction = client.interactions.create(
model="gemini-3-flash-preview",
previous_interaction_id=interaction.id,
input=[{
"type": "function_result",
"name": output.name,
"call_id": output.id,
"result": result
}]
)
print(f"Response: {interaction.outputs[-1].text}")
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
// 1. Define the tool
const weatherTool = {
type: 'function',
name: 'get_weather',
description: 'Gets the weather for a given location.',
parameters: {
type: 'object',
properties: {
location: { type: 'string', description: 'The city and state, e.g. San Francisco, CA' }
},
required: ['location']
}
};
// 2. Send the request with tools
let interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'What is the weather in Paris?',
tools: [weatherTool]
});
// 3. Handle the tool call
for (const output of interaction.outputs) {
if (output.type === 'function_call') {
console.log(`Tool Call: ${output.name}(${JSON.stringify(output.arguments)})`);
// Execute tool (Mocked)
const result = `The weather in ${output.arguments.location} is sunny.`;
// Send result back
interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
previous_interaction_id:interaction.id,
input: [{
type: 'function_result',
name: output.name,
call_id: output.id,
result: result
}]
});
console.log(`Response: ${interaction.outputs[interaction.outputs.length - 1].text}`);
}
}
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "What is the weather in Paris?",
"tools": [{
"type": "function",
"name": "get_weather",
"description": "Gets the weather for a given location.",
"parameters": {
"type": "object",
"properties": {
"location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"}
},
"required": ["location"]
}
}]
}'
# Handle the tool call and send result back (Replace INTERACTION_ID and CALL_ID)
# curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
# -H "Content-Type: application/json" \
# -H "x-goog-api-key: $GEMINI_API_KEY" \
# -d '{
# "model": "gemini-3-flash-preview",
# "previous_interaction_id": "INTERACTION_ID",
# "input": [{
# "type": "function_result",
# "name": "get_weather",
# "call_id": "FUNCTION_CALL_ID",
# "result": "The weather in Paris is sunny."
# }]
# }'
```


##### Function calling with client-side state

If you don't want to use server-side state, you can manage it all on the client side.

### Python

```
from google import genai
client = genai.Client()
functions = [
{
"type": "function",
"name": "schedule_meeting",
"description": "Schedules a meeting with specified attendees at a given time and date.",
"parameters": {
"type": "object",
"properties": {
"attendees": {"type": "array", "items": {"type": "string"}},
"date": {"type": "string", "description": "Date of the meeting (e.g., 2024-07-29)"},
"time": {"type": "string", "description": "Time of the meeting (e.g., 15:00)"},
"topic": {"type": "string", "description": "The subject of the meeting."},
},
"required": ["attendees", "date", "time", "topic"],
},
}
]
history = [{"role": "user","content": [{"type": "text", "text": "Schedule a meeting for 2025-11-01 at 10 am with Peter and Amir about the Next Gen API."}]}]
# 1. Model decides to call the function
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input=history,
tools=functions
)
# add model interaction back to history
history.append({"role": "model", "content": interaction.outputs})
for output in interaction.outputs:
if output.type == "function_call":
print(f"Function call: {output.name} with arguments {output.arguments}")
# 2. Execute the function and get a result
# In a real app, you would call your function here.
# call_result = schedule_meeting(**json.loads(output.arguments))
call_result = "Meeting scheduled successfully."
# 3. Send the result back to the model
history.append({"role": "user", "content": [{"type": "function_result", "name": output.name, "call_id": output.id, "result": call_result}]})
interaction2 = client.interactions.create(
model="gemini-3-flash-preview",
input=history,
)
print(f"Final response: {interaction2.outputs[-1].text}")
else:
print(f"Output: {output}")
```


### JavaScript

```
// 1. Define the tool
const functions = [
{
type: 'function',
name: 'schedule_meeting',
description: 'Schedules a meeting with specified attendees at a given time and date.',
parameters: {
type: 'object',
properties: {
attendees: { type: 'array', items: { type: 'string' } },
date: { type: 'string', description: 'Date of the meeting (e.g., 2024-07-29)' },
time: { type: 'string', description: 'Time of the meeting (e.g., 15:00)' },
topic: { type: 'string', description: 'The subject of the meeting.' },
},
required: ['attendees', 'date', 'time', 'topic'],
},
},
];
const history = [
{ role: 'user', content: [{ type: 'text', text: 'Schedule a meeting for 2025-11-01 at 10 am with Peter and Amir about the Next Gen API.' }] }
];
// 2. Model decides to call the function
let interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: history,
tools: functions
});
// add model interaction back to history
history.push({ role: 'model', content: interaction.outputs });
for (const output of interaction.outputs) {
if (output.type === 'function_call') {
console.log(`Function call: ${output.name} with arguments ${JSON.stringify(output.arguments)}`);
// 3. Send the result back to the model
history.push({ role: 'user', content: [{ type: 'function_result', name: output.name, call_id: output.id, result: 'Meeting scheduled successfully.' }] });
const interaction2 = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: history,
});
console.log(`Final response: ${interaction2.outputs[interaction2.outputs.length - 1].text}`);
}
}
```


##### Multimodal function results

The `result`

field in a `function_result`

accepts either a plain string or an
array of `TextContent`

and `ImageContent`

objects. This lets you return
images, such as screenshots or charts, alongside text from your function calls,
so the model can reason over the visual output.

### Python

```
import base64
from google import genai
client = genai.Client()
functions = [
{
"type": "function",
"name": "take_screenshot",
"description": "Takes a screenshot of a specified website.",
"parameters": {
"type": "object",
"properties": {
"url": {"type": "string", "description": "The URL to take a screenshot of."},
},
"required": ["url"],
},
}
]
# 1. Model decides to call the function
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="Can you take a screenshot of https://google.com and tell me what you see?",
tools=functions
)
for output in interaction.outputs:
if output.type == "function_call":
print(f"Function call: {output.name}({output.arguments})")
# 2. Execute the function and load the image
# Replace with actual function call, pseudo code for reading image from disk
with open("screenshot.png", "rb") as f:
base64_image = base64.b64encode(f.read()).decode("utf-8")
# 3. Return a multimodal result (text + image)
call_result = [
{"type": "text", "text": "Screenshot captured successfully."},
{"type": "image", "mime_type": "image/png", "data": base64_image}
]
response = client.interactions.create(
model="gemini-3-flash-preview",
tools=functions,
previous_interaction_id=interaction.id,
input=[{
"type": "function_result",
"name": output.name,
"call_id": output.id,
"result": call_result
}]
)
print(f"Response: {response.outputs[-1].text}")
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';
const client = new GoogleGenAI({});
const functions = [
{
type: 'function',
name: 'take_screenshot',
description: 'Takes a screenshot of a specified website.',
parameters: {
type: 'object',
properties: {
url: { type: 'string', description: 'The URL to take a screenshot of.' },
},
required: ['url'],
},
}
];
// 1. Model decides to call the function
let interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Can you take a screenshot of https://google.com and tell me what you see?',
tools: functions
});
for (const output of interaction.outputs) {
if (output.type === 'function_call') {
console.log(`Function call: ${output.name}(${JSON.stringify(output.arguments)})`);
// 2. Execute the function and load the image
// Replace with actual function call, pseudo code for reading image from disk
const base64Image = fs.readFileSync('screenshot.png').toString('base64');
// 3. Return a multimodal result (text + image)
const callResult = [
{ type: 'text', text: 'Screenshot captured successfully.' },
{ type: 'image', mime_type: 'image/png', data: base64Image }
];
const response = await client.interactions.create({
model: 'gemini-3-flash-preview',
tools: functions,
previous_interaction_id: interaction.id,
input: [{
type: 'function_result',
name: output.name,
call_id: output.id,
result: callResult
}]
});
console.log(`Response: ${response.outputs[response.outputs.length - 1].text}`);
}
}
```


### REST

```
# 1. Send request with tools (will return a function_call)
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Can you take a screenshot of https://google.com and tell me what you see?",
"tools": [{
"type": "function",
"name": "take_screenshot",
"description": "Takes a screenshot of a specified website.",
"parameters": {
"type": "object",
"properties": {
"url": {"type": "string", "description": "The URL to take a screenshot of."}
},
"required": ["url"]
}
}]
}'
# 2. Send multimodal result back (Replace INTERACTION_ID, CALL_ID, and BASE64_IMAGE)
# curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
# -H "Content-Type: application/json" \
# -H "x-goog-api-key: $GEMINI_API_KEY" \
# -d '{
# "model": "gemini-3-flash-preview",
# "tools": [{"type": "function", "name": "take_screenshot", "description": "Takes a screenshot of a specified website.", "parameters": {"type": "object", "properties": {"url": {"type": "string"}}, "required": ["url"]}}],
# "previous_interaction_id": "INTERACTION_ID",
# "input": [{
# "type": "function_result",
# "name": "take_screenshot",
# "call_id": "CALL_ID",
# "result": [
# {"type": "text", "text": "Screenshot captured successfully."},
# {"type": "image", "mime_type": "image/png", "data": "BASE64_IMAGE"}
# ]
# }]
# }'
```


#### Built-in tools

Gemini comes with built-in tools like
[Grounding with Google Search](/gemini-api/docs/google-search),
[Grounding with Google Image Search](#image-search-grounding),
[Grounding with Google Maps](#grounding-with-google-maps),
[Code execution](/gemini-api/docs/code-execution),
[URL context](/gemini-api/docs/url-context), and
[Computer Use](/gemini-api/docs/computer-use)

##### Grounding with Google Search

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="Who won the last Super Bowl?",
tools=[{"type": "google_search"}]
)
# Find the text output (not the GoogleSearchResultContent)
text_output = next((o for o in interaction.outputs if o.type == "text"), None)
if text_output:
print(text_output.text)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Who won the last Super Bowl?',
tools: [{ type: 'google_search' }]
});
// Find the text output (not the GoogleSearchResultContent)
const textOutput = interaction.outputs.find(o => o.type === 'text');
if (textOutput) console.log(textOutput.text);
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Who won the last Super Bowl?",
"tools": [{"type": "google_search"}]
}'
```


##### Grounding with Google Image Search (only for 3.1 Flash Image)

Grounding with Google Image Search allows models to use web images retrieved via Google Image Search as visual context for image generation. Image Search is a new search type within the existing Grounding with Google Search tool, functioning alongside standard [Web Search](#grounding-with-google-search).

###### Enabling Image Search

Request image results by adding `"image_search"`

to the `search_types`

array for the `google_search`

tool.

### Python

```
interaction = client.interactions.create(
model="gemini-3.1-flash-image-preview",
input="Search for an image of a vintage gold bitcoin coin.",
tools=[{
"type": "google_search",
"search_types": ["web_search", "image_search"]
}]
)
```


### JavaScript

```
const interaction = await client.interactions.create({
model: 'gemini-3.1-flash-image-preview',
input: 'Search for an image of a vintage gold bitcoin coin.',
tools: [{
type: 'google_search',
search_types: ['web_search', 'image_search']
}]
});
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3.1-flash-image-preview",
"input": "Search for an image of a vintage gold bitcoin coin.",
"tools": [{
"type": "google_search",
"search_types": ["web_search", "image_search"]
}]
}'
```


###### Mandatory display requirements

To comply with [Google Search Terms of Service](/gemini-api/terms#grounding-with-google-search), your UI must implement two distinct levels of attribution:

**Google Search Attribution**You must display the "Check on Google" search suggestions provided in the

`google_search_result`

block.**Field:**`rendered_content`

(HTML/CSS)**Action:**Render this chip as-is near the model's response.

**Publisher Attribution**You must provide a link to the "containing page" (the landing page) for every image displayed.

**Field:**`url`

(Found within the`result`

array)**Requirement:**You must provide a direct, single-click path from the image to its containing source webpage. Using intermediate image viewers or multi-click paths is not permitted.


###### Handling grounded response

The following snippet demonstrates how to handle the interleaved response blocks for both raw image data and mandatory attribution.

### Python

```
for output in interaction.outputs:
# 1. Handle raw multimodal image data
if output.type == "image":
print(f"🖼️ Image received: {output.mime_type}")
# 'data' contains base64-encoded image content
display_image(output.data, output.mime_type)
# 2. Handle mandatory Search and Publisher attribution
elif output.type == "google_search_result":
# Display Google Search Attribution
if output.rendered_content:
render_html_chips(output.rendered_content)
# Provide Publisher Attribution
for source in output.result:
print(f"Source Page: {source['url']}")
```


### JavaScript

```
for (const output of interaction.outputs) {
// 1. Handle raw multimodal image data
if (output.type === 'image') {
console.log(`🖼️ Image received: ${output.mimeType}`);
// 'data' contains base64-encoded image content
displayImage(output.data, output.mimeType);
}
// 2. Handle mandatory Search and Publisher attribution
else if (output.type === 'google_search_result') {
// Display Google Search Attribution
if (output.renderedContent) {
renderHtmlChips(output.renderedContent);
}
// Provide Publisher Attribution
for (const source of output.result) {
console.log(`Source Page: ${source.url}`);
}
}
}
```


###### Expected output schema

The **Image Block** (type: `"image"`

) contains the raw visual data generated or retrieved by the model.

```
{
"type": "image",
"mime_type": "image/png",
"data": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB..." // Base64 content
}
```


The **Result Block** (type: `"google_search_result"`

) contains the mandatory attribution metadata linked to the search.

```
{
"type": "google_search_result",
"call_id": "search_002",
"rendered_content": "<div class=\"search-suggestions\">...</div>", // Google Search Attribution
"result": [
{
"url": "https://example.com/source-page", // Publisher Attribution
"title": "Source Page Title"
}
]
}
```


##### Grounding with Google Maps

Grounding with Google Maps allows models to use Google Maps data for visual context, map pins, and location-based discovery.

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="What's the best coffee shop near me?",
tools=[{"type": "google_maps"}]
)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'What\'s the best coffee shop near me?',
tools: [{ type: 'google_maps' }]
});
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "What is the best coffee shop near me?",
"tools": [{"type": "google_maps"}]
}'
```


###### Service usage requirements

When presenting results from Grounding with Google Maps, you must follow the
[Google Maps Terms of Service](/gemini-api/terms#grounding-with-google-maps).
You must inform your users of the following and meet these display requirements:

**Inform the user**: Immediately follow the generated content with the associated Google Maps sources. The sources must be viewable within one user interaction.**Display links**: Generate a link preview for each source (including review snippets if present).**Attribute to "Google Maps"**: Follow th[text attribution guidelines](/gemini-api/docs/maps-grounding#maps-attribution-guidelines).**Display the source title**.**Link to the source**using the provided URL.**Attribution Guidelines**: Do not modify the text "Google Maps" (capitalization, wrapping). Prevent browser translation using`translate="no"`

.

###### Handling the response

The following snippet demonstrates how to handle the response by extracting the text and inline citations (including review snippets) to meet display requirements.

### Python

```
for output in interaction.outputs:
if output.type == "text":
print(output.text)
if output.annotations:
print("\nSources:")
for annotation in output.annotations:
if annotation.get("type") == "place_citation":
# Display place citation
print(f"- {annotation['name']} (Google Maps): {annotation['url']}")
# Display review snippets if available
if "review_snippets" in annotation:
for snippet in annotation["review_snippets"]:
print(f" - Review: {snippet['title']} ({snippet['url']})")
elif output.type == "google_maps_result":
# You can also access the raw place data here if needed for map pins
pass
```


### JavaScript

```
for (const output of interaction.outputs) {
if (output.type === 'text') {
console.log(output.text);
if (output.annotations) {
console.log('\nSources:');
for (const annotation of output.annotations) {
if (annotation.type === 'place_citation') {
console.log(`- ${annotation.name} (Google Maps): ${annotation.url}`);
if (annotation.review_snippets) {
for (const snippet of annotation.review_snippets) {
console.log(` - Review: ${snippet.title} (${snippet.url})`);
}
}
}
}
}
}
}
```


###### Expected output schema

Expect the following output schema when using Grounding with Google Maps.

The **Result Block** (type: `"google_maps_result"`

) contains the structured place data.

```
{
"type": "google_maps_result",
"call_id": "maps_001",
"result": {
"places": [
{
"place_id": "ChIJ...",
"name": "Blue Bottle Coffee", // Google Maps Source
"url": "https://maps.google.com/?cid=...", // Google Maps Link
"review_snippets": [
{
"title": "Amazing single-origin selections",
"url": "https://maps.google.com/...",
"review_id": "def456"
}
]
}
],
"widget_context_token": "widgetcontent/..."
},
"signature": "..."
}
```


The **Text Block** (type: `"text"`

) contains the generated content with inline
annotations.

```
{
"type": "text",
"text": "Blue Bottle Coffee (4.5★) on Mint Plaza was rated highly online...",
"annotations": [
{
"type": "place_citation",
"place_id": "ChIJ...",
"name": "Blue Bottle Coffee", // Google Maps Source
"url": "https://maps.google.com/?cid=...", // Google Maps Link
"review_snippets": [
{
"title": "Amazing single-origin selections",
"url": "https://maps.google.com/...",
"review_id": "def456"
}
],
"start_index": 0,
"end_index": 42
}
]
}
```


##### Code execution

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="Calculate the 50th Fibonacci number.",
tools=[{"type": "code_execution"}]
)
print(interaction.outputs[-1].text)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Calculate the 50th Fibonacci number.',
tools: [{ type: 'code_execution' }]
});
console.log(interaction.outputs[interaction.outputs.length - 1].text);
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Calculate the 50th Fibonacci number.",
"tools": [{"type": "code_execution"}]
}'
```


##### URL context

Grounding with URL context allows the model to read public URLs provided in the prompt or tool list.

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="Summarize the content of https://www.wikipedia.org/",
tools=[{"type": "url_context"}]
)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Summarize the content of https://www.wikipedia.org/',
tools: [{ type: 'url_context' }]
});
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Summarize the content of https://www.wikipedia.org/",
"tools": [{"type": "url_context"}]
}'
```


###### Handling the response

The following snippet demonstrates how to handle the response by extracting the text and inline citations (type `url_citation`

).

### Python

```
for output in interaction.outputs:
if output.type == "text":
print(output.text)
if output.annotations:
print("\nSources:")
for annotation in output.annotations:
if annotation.get("type") == "url_citation":
print(f"- {annotation['title']}: {annotation['url']}")
```


### JavaScript

```
for (const output of interaction.outputs) {
if (output.type === 'text') {
console.log(output.text);
if (output.annotations) {
console.log('\nSources:');
for (const annotation of output.annotations) {
if (annotation.type === 'url_citation') {
console.log(`- ${annotation.title}: ${annotation.url}`);
}
}
}
}
}
```


###### Expected output schema

Expect the following output schema when using URL context.

The **Call Block** (type: `"url_context_call"`

) contains the URL the model attempted to read.

```
{
"type": "url_context_call",
"id": "browse_001",
"arguments": {
"urls": ["https://www.wikipedia.org/"]
},
"signature": "EkYKIGY5OT..."
}
```


The **Result Block** (type: `"url_context_result"`

) contains the status of the retrieval.

```
{
"type": "url_context_result",
"call_id": "browse_001",
"result": {
"url": "https://www.wikipedia.org/",
"status": "URL_RETRIEVAL_STATUS_SUCCESS"
},
"signature": "EkYKIGY5OT..."
}
```


The **Text Block** contains the generated text and inline citations.

```
{
"type": "text",
"text": "Wikipedia is a free online encyclopedia...",
"annotations": [
{
"type": "url_citation",
"url": "https://www.wikipedia.org/",
"title": "Wikipedia — Main Page",
"start_index": 0,
"end_index": 42
}
]
}
```


##### Computer use

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-2.5-computer-use-preview-10-2025",
input="Search for highly rated smart fridges with touchscreen, 2 doors, around 25 cu ft, priced below 4000 dollars on Google Shopping. Create a bulleted list of the 3 cheapest options in the format of name, description, price in an easy-to-read layout.",
tools=[{
"type": "computer_use",
"environment": "browser",
"excludedPredefinedFunctions": ["drag_and_drop"]
}]
)
# The response will contain tool calls (actions) for the computer interface
# or text explaining the action
for output in interaction.outputs:
print(output)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-2.5-computer-use-preview-10-2025',
input: 'Search for highly rated smart fridges with touchscreen, 2 doors, around 25 cu ft, priced below 4000 dollars on Google Shopping. Create a bulleted list of the 3 cheapest options in the format of name, description, price in an easy-to-read layout.',
tools: [{
type: 'computer_use',
environment: 'browser',
excludedPredefinedFunctions: ['drag_and_drop']
}]
});
// The response will contain tool calls (actions) for the computer interface
// or text explaining the action
interaction.outputs.forEach(output => console.log(output));
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-2.5-computer-use-preview-10-2025",
"input": "Search for highly rated smart fridges with touchscreen, 2 doors, around 25 cu ft, priced below 4000 dollars on Google Shopping. Create a bulleted list of the 3 cheapest options in the format of name, description, price in an easy-to-read layout.",
"tools": [{
"type": "computer_use",
"environment": "browser",
"excludedPredefinedFunctions": ["drag_and_drop"]
}]
}'
```


###### Handling Computer Use function results

Since Computer Use is a client-side tool loop, you must execute the action (e.g., opening a browser) and send the result back to the model. When sending the `function_result`

for actions like `open_web_browser`

, make sure to pass the URL response in the results list as shown below:

```
{
"type": "function_result",
"name": "open_web_browser",
"call_id": "5q6h0z70",
"result": [
{
"type": "text",
"text": "{\"url\": \"https://google.com\", \"safety_acknowledgement\":true}"
},
{
"type": "image",
"data": "iVBORw0KGgoAAAANSUhEUgAA...",
"mime_type": "image/png"
}
]
}
```


##### File search

Grounding with File search allows the model to search your uploaded files in File Search Stores.

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="Tell me about the book 'I, Claudius'",
tools=[{"type": "file_search", "file_search_store_names": ["fileSearchStores/my-store-name"]}]
)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: "Tell me about the book 'I, Claudius'",
tools: [{ type: 'file_search', file_search_store_names: ['fileSearchStores/my-store-name'] }]
});
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Tell me about the book 'I, Claudius'",
"tools": [{"type": "file_search", "file_search_store_names": ["fileSearchStores/my-store-name"]}]
}'
```


###### Handling the response

The following snippet demonstrates how to handle the response by extracting the text and inline citations (type `file_citation`

).

### Python

```
for output in interaction.outputs:
if output.type == "text":
print(output.text)
if output.annotations:
print("\nSources:")
for annotation in output.annotations:
if annotation.get("type") == "file_citation":
print(f"- {annotation['file_name']} ({annotation['document_uri']}):")
print(f" Snippet: {annotation['source']}")
```


### JavaScript

```
for (const output of interaction.outputs) {
if (output.type === 'text') {
console.log(output.text);
if (output.annotations) {
console.log('\nSources:');
for (const annotation of output.annotations) {
if (annotation.type === 'file_citation') {
console.log(`- ${annotation.fileName} (${annotation.documentUri}):`);
console.log(` Snippet: ${annotation.source}`);
}
}
}
}
}
```


###### Expected output schema

Expect the following output schema when using File search.

The **Call Block** (type: `"file_search_call"`

) contains the call metadata.

```
{
"type": "file_search_call",
"id": "filesearch_001",
"signature": "EkYKIGY5OT..."
}
```


The **Result Block** (type: `"file_search_result"`

) contains the result metadata.

```
{
"type": "file_search_result",
"call_id": "filesearch_001",
"signature": "EkYKIGY5OT..."
}
```


The **Text Block** contains the generated text and inline citations.

```
{
"type": "text",
"text": "The book 'I, Claudius' is a historical novel by Robert Graves...",
"annotations": [
{
"type": "file_citation",
"document_uri": "fileSearchStores/my-store-name/documents/abc",
"file_name": "book_summaries.pdf",
"source": "Claudius is the narrator of this historical novel...",
"start_index": 0,
"end_index": 60
}
]
}
```


#### Combining built-in tools and function calling

You can use [built-in tools and function calling](/gemini-api/docs/tool-combination) together in the same request.

### Python

```
from google import genai
import json
client = genai.Client()
get_weather = {
"type": "function",
"name": "getWeather",
"description": "Gets the weather for a requested city.",
"parameters": {
"type": "object",
"properties": {
"city": {
"type": "string",
"description": "The city and state, e.g. Utqiaġvik, Alaska",
},
},
"required": ["city"],
},
}
tools = [
{"type": "google_search"}, # Built-in tool
get_weather # Custom tool (callable)
]
# Turn 1: Initial request with both tools enabled
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="What is the northernmost city in the United States? What's the weather like there today?",
tools=tools
)
for output in interaction.outputs:
if output.type == "function_call":
print(f"Function call: {output.name} (ID: {output.id})")
# Execute your custom function locally
result = {"response": "Very cold. 22 degrees Fahrenheit."}
# Turn 2: Provide the function result back to the model.
# Passing `previous_interaction_id` automatically circulates the
# built-in Google Search context (and thought signatures) from Turn 1
interaction_2 = client.interactions.create(
model="gemini-3-flash-preview",
previous_interaction_id=interaction.id,
tools=tools,
input=[{
"type": "function_result",
"name": output.name,
"call_id": output.id,
"result": json.dumps(result)
}]
)
for output in interaction_2.outputs:
if output.type == "text":
print(output.text)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const weatherTool = {
type: 'function',
name: 'get_weather',
description: 'Gets the weather for a given location.',
parameters: {
type: 'object',
properties: {
location: { type: 'string', description: 'The city and state, e.g. San Francisco, CA' }
},
required: ['location']
}
};
const tools = [
{type: 'google_search'}, // Built-in tool
weatherTool // Custom tool
];
// Turn 1: Initial request with both tools enabled
let interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: "What is the northernmost city in the United States? What's the weather like there today?",
tools: tools
});
for (const output of interaction.outputs) {
if (output.type == "function_call") {
console.log(`Function call: ${output.name} (ID: ${output.id})`);
// Execute your custom function locally
const result = {response: "Very cold. 22 degrees Fahrenheit."};
// Turn 2: Provide the function result back to the model.
// Passing `previous_interaction_id` automatically circulates the
// built-in Google Search context (and thought signatures) from Turn 1
const interaction_2 = await client.interactions.create({
model: "gemini-3-flash-preview",
previous_interaction_id: interaction.id,
tools: tools,
input: [{
type: "function_result",
name: output.name,
call_id: output.id,
result: JSON.stringify(result)
}]
});
for (const output_2 of interaction_2.outputs) {
if (output_2.type == "text") {
console.log(output_2.text);
}
}
}
}
```


### REST

```
# Turn 1: Initial request with both tools enabled
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "What is the northernmost city in the United States? What is the weather like there today?",
"tools": [
{"type": "google_search"},
{
"type": "function",
"name": "get_weather",
"description": "Gets the weather for a given location.",
"parameters": {
"type": "object",
"properties": {
"location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"}
},
"required": ["location"]
}
}
]
}'
# Assuming Turn 1 returns a function_call for get_weather,
# replace INTERACTION_ID and CALL_ID with values from Turn 1 response.
# Turn 2: Provide the function result back to the model.
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"previous_interaction_id": "INTERACTION_ID",
"tools": [
{"type": "google_search"},
{
"type": "function",
"name": "get_weather",
"description": "Gets the weather for a given location.",
"parameters": {
"type": "object",
"properties": {
"location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"}
},
"required": ["location"]
}
}
],
"input": [{
"type": "function_result",
"name": "get_weather",
"call_id": "CALL_ID",
"result": "{\"response\": \"Very cold. 22 degrees Fahrenheit.\"}"
}]
}'
```


##### Understanding tool context circulation

Gemini 3 and newer models support **tool context circulation** to maintain a
reliable "memory" of server-side actions. When a built-in tool (like Google
Search) is triggered, the API generates specific `toolCall`

and `toolResponse`

parts. These parts contain the precise context the model needs to reason about
those results in the next turn.

**Stateful (Recommended)**: If you use`previous_interaction_id`

, the API manages this circulation for you automatically.**Stateless**: If you manage history manually, you must include these blocks exactly as they were returned by the API in your input array.

### Remote Model context protocol (MCP)

Remote [MCP](https://modelcontextprotocol.io/docs/getting-started/intro)
integration simplifies agent development by allowing the Gemini API
to directly call external tools hosted on remote servers.

### Python

```
import datetime
from google import genai
client = genai.Client()
mcp_server = {
"type": "mcp_server",
"name": "weather_service",
"url": "https://gemini-api-demos.uc.r.appspot.com/mcp"
}
today = datetime.date.today().strftime("%d %B %Y")
interaction = client.interactions.create(
model="gemini-2.5-flash",
input="What is the weather like in New York today?",
tools=[mcp_server],
system_instruction=f"Today is {today}."
)
print(interaction.outputs[-1].text)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const mcpServer = {
type: 'mcp_server',
name: 'weather_service',
url: 'https://gemini-api-demos.uc.r.appspot.com/mcp'
};
const today = new Date().toDateString();
const interaction = await client.interactions.create({
model: 'gemini-2.5-flash',
input: 'What is the weather like in New York today?',
tools: [mcpServer],
system_instruction: `Today is ${today}.`
});
console.log(interaction.outputs[interaction.outputs.length - 1].text);
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-2.5-flash",
"input": "What is the weather like in New York today?",
"tools": [{
"type": "mcp_server",
"name": "weather_service",
"url": "https://gemini-api-demos.uc.r.appspot.com/mcp"
}],
"system_instruction": "Today is '"$(date +"%du%Bt%Y")"' YYYY-MM-DD>."
}'
```


**Important notes:**

- Remote MCP only works with Streamable HTTP servers (SSE servers are not supported)
- Remote MCP does not work with Gemini 3 models (this is coming soon)
- MCP server names shouldn't include "-" character (use snake_case server names instead)

### Structured output (JSON schema)

Enforce a specific JSON output by providing a JSON schema in the
`response_format`

parameter. This is useful for tasks like moderation,
classification, or data extraction.

### Python

```
from google import genai
from pydantic import BaseModel, Field
from typing import Literal, Union
client = genai.Client()
class SpamDetails(BaseModel):
reason: str = Field(description="The reason why the content is considered spam.")
spam_type: Literal["phishing", "scam", "unsolicited promotion", "other"]
class NotSpamDetails(BaseModel):
summary: str = Field(description="A brief summary of the content.")
is_safe: bool = Field(description="Whether the content is safe for all audiences.")
class ModerationResult(BaseModel):
decision: Union[SpamDetails, NotSpamDetails]
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="Moderate the following content: 'Congratulations! You've won a free cruise. Click here to claim your prize: www.definitely-not-a-scam.com'",
response_format=ModerationResult.model_json_schema(),
)
parsed_output = ModerationResult.model_validate_json(interaction.outputs[-1].text)
print(parsed_output)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
import { z } from 'zod';
const client = new GoogleGenAI({});
const moderationSchema = z.object({
decision: z.union([
z.object({
reason: z.string().describe('The reason why the content is considered spam.'),
spam_type: z.enum(['phishing', 'scam', 'unsolicited promotion', 'other']).describe('The type of spam.'),
}).describe('Details for content classified as spam.'),
z.object({
summary: z.string().describe('A brief summary of the content.'),
is_safe: z.boolean().describe('Whether the content is safe for all audiences.'),
}).describe('Details for content classified as not spam.'),
]),
});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: "Moderate the following content: 'Congratulations! You've won a free cruise. Click here to claim your prize: www.definitely-not-a-scam.com'",
response_format: z.toJSONSchema(moderationSchema),
});
console.log(interaction.outputs[0].text);
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Moderate the following content: 'Congratulations! You've won a free cruise. Click here to claim your prize: www.definitely-not-a-scam.com'",
"response_format": {
"type": "object",
"properties": {
"decision": {
"type": "object",
"properties": {
"reason": {"type": "string", "description": "The reason why the content is considered spam."},
"spam_type": {"type": "string", "description": "The type of spam."}
},
"required": ["reason", "spam_type"]
}
},
"required": ["decision"]
}
}'
```


### Combining tools and structured output

Combine built-in tools with structured output to get a reliable JSON object based on information retrieved by a tool.

### Python

```
from google import genai
from pydantic import BaseModel, Field
from typing import Literal, Union
client = genai.Client()
class SpamDetails(BaseModel):
reason: str = Field(description="The reason why the content is considered spam.")
spam_type: Literal["phishing", "scam", "unsolicited promotion", "other"]
class NotSpamDetails(BaseModel):
summary: str = Field(description="A brief summary of the content.")
is_safe: bool = Field(description="Whether the content is safe for all audiences.")
class ModerationResult(BaseModel):
decision: Union[SpamDetails, NotSpamDetails]
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="Moderate the following content: 'Congratulations! You've won a free cruise. Click here to claim your prize: www.definitely-not-a-scam.com'",
response_format=ModerationResult.model_json_schema(),
tools=[{"type": "url_context"}]
)
parsed_output = ModerationResult.model_validate_json(interaction.outputs[-1].text)
print(parsed_output)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
import { z } from 'zod'; // Assuming zod is used for schema generation, or define manually
const client = new GoogleGenAI({});
const obj = z.object({
winning_team: z.string(),
score: z.string(),
});
const schema = z.toJSONSchema(obj);
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Who won the last euro?',
tools: [{ type: 'google_search' }],
response_format: schema,
});
console.log(interaction.outputs[0].text);
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Who won the last euro?",
"tools": [{"type": "google_search"}],
"response_format": {
"type": "object",
"properties": {
"winning_team": {"type": "string"},
"score": {"type": "string"}
}
}
}'
```


## Advanced features

There are also additional advance features that give you more flexibility in working with Interactions API.

### Streaming

Receive responses incrementally as they are generated.

When `stream=true`

, the final `interaction.complete`

event does not contain the
generated content in the `outputs`

field. It only contains usage metadata and
the final status. You must aggregate `content.delta`

events client-side to
reconstruct the full response or tool call arguments.

### Python

```
from google import genai
client = genai.Client()
stream = client.interactions.create(
model="gemini-3-flash-preview",
input="Explain quantum entanglement in simple terms.",
stream=True
)
for chunk in stream:
if chunk.event_type == "content.delta":
if chunk.delta.type == "text":
print(chunk.delta.text, end="", flush=True)
elif chunk.delta.type == "thought":
print(chunk.delta.thought, end="", flush=True)
elif chunk.event_type == "interaction.complete":
print(f"\n\n--- Stream Finished ---")
print(f"Total Tokens: {chunk.interaction.usage.total_tokens}")
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const stream = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Explain quantum entanglement in simple terms.',
stream: true,
});
for await (const chunk of stream) {
if (chunk.event_type === 'content.delta') {
if (chunk.delta.type === 'text' && 'text' in chunk.delta) {
process.stdout.write(chunk.delta.text);
} else if (chunk.delta.type === 'thought' && 'thought' in chunk.delta) {
process.stdout.write(chunk.delta.thought);
}
} else if (chunk.event_type === 'interaction.complete') {
console.log('\n\n--- Stream Finished ---');
console.log(`Total Tokens: ${chunk.interaction.usage.total_tokens}`);
}
}
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions?alt=sse" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Explain quantum entanglement in simple terms.",
"stream": true
}'
```


#### Streaming event types

When streaming is enabled, the API returns Server-Sent Events (SSE). Each event
has an `event_type`

field indicating its purpose. Full list of event types is available in the [API reference](/api/interactions-api#Resource:Interaction).

| Event Type | Description |
|---|---|
`interaction.start` |
First event. Contains the interaction `id` and initial `status` (`in_progress` ). |
`interaction.status_update` |
Indicates status changes (e.g., `in_progress` ). |
`content.start` |
Marks the start of a new output block. Contains `index` and content `type` (e.g., `text` , `thought` ). |
`content.delta` |
Incremental content updates. Contains the partial data keyed by `delta.type` . |
`content.stop` |
Marks the end of an output block at `index` . |
`interaction.complete` |
Final event. Contains `id` , `status` , `usage` , and metadata. Note: `outputs` is `None` —you must reconstruct outputs from the `content.*` events. |
`error` |
Indicates an error occurred. Contains `error.code` and `error.message` . |

#### Reconstructing the Interaction object from streaming events

Unlike non-streaming responses, streaming responses do **not** contain an
`outputs`

array. You must reconstruct outputs by accumulating content from the
`content.delta`

events.

### Python

```
from google import genai
client = genai.Client()
stream = client.interactions.create(
model="gemini-3-flash-preview",
input="Write a haiku about Python programming.",
stream=True
)
# Accumulate outputs by index
outputs = {}
usage = None
for chunk in stream:
if chunk.event_type == "content.start":
outputs[chunk.index] = {"type": chunk.content.type}
elif chunk.event_type == "content.delta":
output = outputs[chunk.index]
if chunk.delta.type == "text":
output["text"] = output.get("text", "") + chunk.delta.text
elif chunk.delta.type == "thought_signature":
output["signature"] = chunk.delta.signature
elif chunk.delta.type == "thought_summary":
output["summary"] = output.get("summary", "") + getattr(chunk.delta.content, "text", "")
elif chunk.event_type == "interaction.complete":
usage = chunk.interaction.usage
# Final outputs list (sorted by index)
final_outputs = [outputs[i] for i in sorted(outputs.keys())]
print(f"\n\nOutputs: {final_outputs}")
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const stream = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Write a haiku about Python programming.',
stream: true,
});
// Accumulate outputs by index
const outputs = new Map();
let usage = null;
for await (const chunk of stream) {
if (chunk.event_type === 'content.start') {
outputs.set(chunk.index, { type: chunk.content.type });
} else if (chunk.event_type === 'content.delta') {
const output = outputs.get(chunk.index);
if (chunk.delta.type === 'text') {
output.text = (output.text || '') + chunk.delta.text;
process.stdout.write(chunk.delta.text);
} else if (chunk.delta.type === 'thought_signature') {
output.signature = chunk.delta.signature;
} else if (chunk.delta.type === 'thought_summary') {
output.summary = (output.summary || '') + (chunk.delta.content?.text || '');
}
} else if (chunk.event_type === 'interaction.complete') {
usage = chunk.interaction.usage;
}
}
// Final outputs list (sorted by index)
const finalOutputs = [...outputs.entries()]
.sort((a, b) => a[0] - b[0])
.map(([_, output]) => output);
console.log(`\n\nOutputs:`, finalOutputs);
```


#### Streaming tool calls

When using tools with streaming, the model generates function calls as a sequence of
`content.delta`

events on the stream. Unlike text, tool arguments are delivered as
complete JSON objects within a single `content.delta`

event. The
`outputs`

array is empty in the `interaction.complete`

event during
streaming, you must capture tool calls from deltas as shown below.

### Python

```
from google import genai
import json
client = genai.Client()
weather_tool = {
"type": "function",
"name": "get_weather",
"description": "Gets the weather for a given location.",
"parameters": {
"type": "object",
"properties": {
"location": {"type": "string", "description": "The city and state"}
},
"required": ["location"]
}
}
stream = client.interactions.create(
model="gemini-3-flash-preview",
input="What is the weather in Paris?",
tools=[weather_tool],
stream=True
)
# A map to capture tool calls by their ID as they arrive
function_calls = {}
for chunk in stream:
if chunk.event_type == "content.delta":
if chunk.delta.type == "text" and chunk.delta.text:
print(chunk.delta.text, end="", flush=True)
elif chunk.delta.type == "function_call":
print(f"\nExecuting {chunk.delta.name} immediately...")
# result = my_tools[chunk.delta.name](**chunk.delta.arguments)
function_calls[chunk.delta.id] = chunk.delta
elif chunk.event_type == "interaction.complete":
print("\n\nAll tools executed. Stream finished.")
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const weatherTool = {
type: 'function',
name: 'get_weather',
description: 'Gets the weather for a given location.',
parameters: {
type: 'object',
properties: {
location: { type: 'string', description: 'The city and state' }
},
required: ['location']
}
};
const stream = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'What is the weather in Paris?',
tools: [weatherTool],
stream: true,
});
const toolCalls = new Map();
for await (const chunk of stream) {
if (chunk.event_type === 'content.delta') {
if (chunk.delta.type === 'text' && chunk.delta.text) {
process.stdout.write(chunk.delta.text);
} else if (chunk.delta.type === 'function_call') {
console.log(`\nExecuting ${chunk.delta.name} immediately...`);
// const result = myTools[chunk.delta.name](chunk.delta.arguments);
toolCalls.set(chunk.delta.id, chunk.delta);
}
} else if (chunk.event_type === 'interaction.complete') {
console.log('\n\nAll tools executed. Stream finished.');
}
}
```


### REST

```
# When streaming via SSE, capture function_call data from content.delta events.
# The 'arguments' field arrives as a complete JSON object once generated.
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions?alt=sse" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "What is the weather in Paris?",
"tools": [{
"type": "function",
"name": "get_weather",
"description": "Gets the weather for a given location.",
"parameters": {
"type": "object",
"properties": {
"location": {"type": "string", "description": "The city and state"}
},
"required": ["location"]
}
}],
"stream": true
}'
```


### Configuration

Customize the model's behavior with `generation_config`

.

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="Tell me a story about a brave knight.",
generation_config={
"temperature": 0.7,
"max_output_tokens": 500,
"thinking_level": "low",
}
)
print(interaction.outputs[-1].text)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Tell me a story about a brave knight.',
generation_config: {
temperature: 0.7,
max_output_tokens: 500,
thinking_level: 'low',
}
});
console.log(interaction.outputs[interaction.outputs.length - 1].text);
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Tell me a story about a brave knight.",
"generation_config": {
"temperature": 0.7,
"max_output_tokens": 500,
"thinking_level": "low"
}
}'
```


### Thinking

Gemini 2.5 and newer models use an internal reasoning process called "thinking" before generating a response. This helps the model produce better answers for complex tasks like math, coding, and multi-step reasoning.

#### Thinking level

The `thinking_level`

parameter lets you control the model's reasoning depth:

| Level | Description | Supported Models |
|---|---|---|
`minimal` |
Matches the "no thinking" setting for most queries. In some cases, models may think very minimally. Minimizes latency and cost. | Flash Models Only (e.g. Gemini 3 Flash) |
`low` |
Light reasoning that prioritises latency and cost savings for simple instruction following and chat. | All Thinking Models |
`medium` |
Balanced thinking for most tasks. | Flash Models Only (e.g. Gemini 3 Flash) |
`high` |
(Default) Maximizes reasoning depth. The model may take significantly longer to reach a first token, but the output will be more carefully reasoned. |
All Thinking Models |

#### Thinking summaries

The model's thinking is represented as **thought blocks** (`type: "thought"`

)
in the response outputs. You can control whether to receive human-readable
summaries of the thinking process using the `thinking_summaries`

parameter:

| Value | Description |
|---|---|
`auto` |
(Default) Returns thought summaries when available. |
`none` |
Disables thought summaries. |

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input="Solve this step by step: What is 15% of 240?",
generation_config={
"thinking_level": "high",
"thinking_summaries": "auto"
}
)
for output in interaction.outputs:
if output.type == "thought":
print(f"Thinking: {output.summary}")
elif output.type == "text":
print(f"Answer: {output.text}")
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: 'Solve this step by step: What is 15% of 240?',
generation_config: {
thinking_level: 'high',
thinking_summaries: 'auto'
}
});
for (const output of interaction.outputs) {
if (output.type === 'thought') {
console.log(`Thinking: ${output.summary}`);
} else if (output.type === 'text') {
console.log(`Answer: ${output.text}`);
}
}
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": "Solve this step by step: What is 15% of 240?",
"generation_config": {
"thinking_level": "high",
"thinking_summaries": "auto"
}
}'
```


Every thought block contains a `signature`

field (a cryptographic hash of the
internal reasoning state) and an optional `summary`

field (a human-readable
summary of the model's reasoning). The `signature`

is always present, but a
thought block may contain only a signature with no summary in these cases:

**Simple requests**: The model didn't reason enough to generate a summary: Summaries are explicitly disabled`thinking_summaries: "none"`


Your code should always handle thought blocks where the `summary`

is empty or
absent. When managing conversation history manually (stateless mode), you must
include thought blocks with their signatures in subsequent requests to validate
authenticity.

### Working with files

#### Working with remote files

Access files using remote URLs directly in the API call.

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input=[
{
"type": "image",
"uri": "https://github.com/<github-path>/cats-and-dogs.jpg",
},
{"type": "text", "text": "Describe what you see."}
],
)
for output in interaction.outputs:
if output.type == "text":
print(output.text)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: [
{
type: 'image',
uri: 'https://github.com/<github-path>/cats-and-dogs.jpg',
},
{ type: 'text', text: 'Describe what you see.' }
],
});
for (const output of interaction.outputs) {
if (output.type === 'text') {
console.log(output.text);
}
}
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": [
{
"type": "image",
"uri": "https://github.com/<github-path>/cats-and-dogs.jpg"
},
{"type": "text", "text": "Describe what you see."}
]
}'
```


#### Working with Gemini Files API

Upload files to the Gemini [Files API](/gemini-api/docs/files)
before using them.

### Python

```
from google import genai
import time
import requests
client = genai.Client()
# 1. Download the file
url = "https://github.com/philschmid/gemini-samples/raw/refs/heads/main/assets/cats-and-dogs.jpg"
response = requests.get(url)
with open("cats-and-dogs.jpg", "wb") as f:
f.write(response.content)
# 2. Upload to Gemini Files API
file = client.files.upload(file="cats-and-dogs.jpg")
# 3. Wait for processing
while client.files.get(name=file.name).state != "ACTIVE":
time.sleep(2)
# 4. Use in Interaction
interaction = client.interactions.create(
model="gemini-3-flash-preview",
input=[
{
"type": "image",
"uri": file.uri,
},
{"type": "text", "text": "Describe what you see."}
],
)
for output in interaction.outputs:
if output.type == "text":
print(output.text)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';
import fetch from 'node-fetch';
const client = new GoogleGenAI({});
// 1. Download the file
const url = 'https://github.com/philschmid/gemini-samples/raw/refs/heads/main/assets/cats-and-dogs.jpg';
const filename = 'cats-and-dogs.jpg';
const response = await fetch(url);
const buffer = await response.buffer();
fs.writeFileSync(filename, buffer);
// 2. Upload to Gemini Files API
const myfile = await client.files.upload({ file: filename, config: { mimeType: 'image/jpeg' } });
// 3. Wait for processing
while ((await client.files.get({ name: myfile.name })).state !== 'ACTIVE') {
await new Promise(resolve => setTimeout(resolve, 2000));
}
// 4. Use in Interaction
const interaction = await client.interactions.create({
model: 'gemini-3-flash-preview',
input: [
{ type: 'image', uri: myfile.uri, },
{ type: 'text', text: 'Describe what you see.' }
],
});
for (const output of interaction.outputs) {
if (output.type === 'text') {
console.log(output.text);
}
}
```


### REST

```
# 1. Upload the file (Requires File API setup)
# See https://ai.google.dev/gemini-api/docs/files for details.
# Assume FILE_URI is obtained from the upload step.
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "gemini-3-flash-preview",
"input": [
{"type": "image", "uri": "FILE_URI"},
{"type": "text", "text": "Describe what you see."}
]
}'
```


### Data model

You can learn more about the data model in the [API
Reference](/api/interactions-api#data-models). The following is a high
level overview of the main components.

#### Interaction

| Property | Type | Description |
|---|---|---|
`id` |
`string` |
Unique identifier for the interaction. |
`model` / `agent` |
`string` |
The model or agent used. Only one can be provided. |
`input` |
`Content[]` |

`outputs`

`Content[]`

`tools`

`Tool[]`

`previous_interaction_id`

`string`

`stream`

`boolean`

`status`

`string`

`completed`

, `in_progress`

, `requires_action`

,`failed`

, etc.`background`

`boolean`

`store`

`boolean`

`true`

. Set to `false`

to opt out.`usage`

[Usage](/api/interactions-api#Resource:Interaction)## Supported models & agents

| Model Name | Type | Model ID |
|---|---|---|
| Gemini 3.1 Flash-Lite Preview | Model | `gemini-3.1-flash-lite-preview` |
| Gemini 3.1 Pro Preview | Model | `gemini-3.1-pro-preview` |
| Gemini 3 Flash Preview | Model | `gemini-3-flash-preview` |
| Gemini 2.5 Pro | Model | `gemini-2.5-pro` |
| Gemini 2.5 Flash | Model | `gemini-2.5-flash` |
| Gemini 2.5 Flash-lite | Model | `gemini-2.5-flash-lite` |
| Lyria 3 Clip Preview | Model | `lyria-3-clip-preview` |
| Lyria 3 Pro Preview | Model | `lyria-3-pro-preview` |
| Deep Research Preview | Agent | `deep-research-pro-preview-12-2025` |

## How the Interactions API works

The Interactions API is designed around a central resource: the
.
An

`Interaction`

`Interaction`

represents a complete turn in a conversation
or task. It acts as a session record, containing the entire history of an
interaction, including all user inputs, model thoughts, tool calls, tool
results, and final model outputs.When you make a call to
[ interactions.create](/api/interactions-api#CreateInteraction), you are
creating a new

`Interaction`

resource.### Server-side state management

You can use the `id`

of a completed interaction in a subsequent call using the
`previous_interaction_id`

parameter to continue the conversation. The server
uses this ID to retrieve the conversation history, saving you from having to
resend the entire chat history.

Only the conversation history (inputs and outputs) is preserved
using `previous_interaction_id`

. The other parameters are **interaction-scoped**
and apply only to the specific interaction you are currently generating:

`tools`

`system_instruction`

`generation_config`

(including`thinking_level`

,`temperature`

, etc.)

This means you must re-specify these parameters in each new interaction if you want them to apply. This server-side state management is optional; you can also operate in stateless mode by sending the full conversation history in each request.

### Data storage and retention

By default, all Interaction objects are stored (`store=true`

) in order to
simplify use of server-side state management features (with
`previous_interaction_id`

), background execution (using `background=true`

) and
observability purposes.

**Paid Tier**: Interactions are retained for**55 days**.**Free Tier**: Interactions are retained for**1 day**.

If you don't want this, you can
set `store=false`

in your request. This control is separate from state
management; you can opt out of storage for any interaction. However, note that
`store=false`

is incompatible with `background=true`

and prevents using
`previous_interaction_id`

for subsequent turns.

You can delete stored interactions at any time using the delete method found in
the [API Reference](/api/interactions-api). You can only delete interactions if
you know the interaction ID.

After the retention period expires, your data will be deleted automatically.

Interactions objects are processed according to the [terms](/gemini-api/terms).

## Best practices

**Cache hit rate**: Using`previous_interaction_id`

to continue conversations allows the system to more easily utilize implicit caching for the conversation history, which improves performance and reduces costs.**Mixing interactions**: You have the flexibility to mix and match Agent and Model interactions within a conversation. For example, you can use a specialized agent, like the Deep Research agent, for initial data collection, and then use a standard Gemini model for follow-up tasks such as summarizing or reformatting, linking these steps with the`previous_interaction_id`

.

## SDKs

You can use latest version of the Google GenAI SDKs in order to access Interactions API.

- On Python, this is
`google-genai`

package from`1.55.0`

version onwards. - On JavaScript, this is
`@google/genai`

package from`1.33.0`

version onwards.

You can learn more about how to install the SDKs on
[Libraries](/gemini-api/docs/libraries) page.

## Limitations

**Beta status**: The Interactions API is in beta/preview. Features and schemas may change.**Remote MCP**: Gemini 3 does not support remote MCP, this is coming soon.

## Breaking changes

The Interactions API is currently in an early beta stage. We are actively developing and refining the API capabilities, resource schemas, and SDK interfaces based on real-world usage and developer feedback.

As a result, **breaking changes may occur**.
Updates may include changes to:

- Schemas for input and output.
- SDK method signatures and object structures.
- Specific feature behaviors.

For production workloads, you should continue to use the standard
[ generateContent](/gemini-api/docs/text-generation) API. It remains the
recommended path for stable deployments and will continue to be actively
developed and maintained.

## Feedback

Your feedback is critical to the development of the Interactions API.
Share your thoughts, report bugs, or request features on our
[Google AI Developer Community Forum](https://discuss.ai.google.dev/c/gemini-api/4).

## What's next

- Try the
[Interactions API quickstart notebook](https://colab.sandbox.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Get_started_interactions_api.ipynb). - Learn more about the
[Gemini Deep Research Agent](/gemini-api/docs/deep-research).

---

## Source: https://ai.google.dev/gemini-api/docs/coding-agents

AI coding assistants are powerful but have limitations—training data cuts off at a specific date, missing new API features and changes. Without access to Gemini-specific documentation, agents may suggest generic patterns instead of optimized approaches.

To keep your coding assistant current with the evolving Gemini API and its
recommended usage, we recommend setting up the **Gemini Docs MCP**
and enhancing your environment with **Gemini API Skills**. While these tools are usable independently, they are designed to work
together to provide complete coverage.

## Connect the Gemini Docs MCP

Gemini hosts a public Model Context Protocol (MCP) server at
`gemini-api-docs-mcp.dev`

. Connecting your coding agent to this server ensures that
all queries have access to the latest APIs, code updates, and optimal configuration examples.

Run the following command in your agent's terminal or project root to install the server:

```
npx add-mcp gemini-api-docs-mcp.dev
```


This server adds a `search_documentation`

function that your agent can use to
retrieve real-time API definitions and integration patterns from the official
Gemini documentation files.

## Add API Development Skills

The skills provide **baked-in rules and best practices** (such as enforcing the correct SDK and current model versions) directly in your assistant's context. The skill works together with the Gemini Docs MCP service: If you have both
installed, the skill uses the MCP service for documentation, but even without
the MCP installed, it will fetch `llms.txt`

from `ai.google.dev`

as a fallback.

To install these skills, you can use one of the following supported tools. Installation instructions for both are provided below each skill module:

: Recommended. The open standard for portable agent behaviors.[skills.sh](https://skills.sh): Supported for users already utilizing the Context7 ecosystem.[Context7](https://context7.com)

### gemini-api-dev

The foundational skill for general-purpose Gemini development. This skill provides documentation and best practices for:

- Prompt routing to current models (e.g., Gemini 3.1 Pro/Flash) and avoiding deprecated models
- Multimodal prompting, function calling, structured outputs, and common integration patterns

#### Install with skills.sh

```
npx skills add google-gemini/gemini-skills --skill gemini-api-dev --global
```


#### Install with Context7

```
npx ctx7 skills install /google-gemini/gemini-skills gemini-api-dev
```


### gemini-live-api-dev

Skill for building real-time conversational AI applications with Gemini Live API. This skill provides documentation and best practices for:

- WebSocket connections for low-latency streaming
- Streaming audio, video, and text
- Voice activity detection and barge-in support

#### Install with skills.sh

```
npx skills add google-gemini/gemini-skills --skill gemini-live-api-dev --global
```


#### Install with Context7

```
npx ctx7 skills install /google-gemini/gemini-skills gemini-live-api-dev
```


### gemini-interactions-api

Skill for building apps with the
[Interactions API](/gemini-api/docs/interactions). The Interactions API is a
unified interface for interacting with Gemini models and agents, designed for
agentic applications. This skill covers:

- Text generation, multi-turn chat, and streaming
- Function calling, structured output, and image generation
- Background execution and Deep Research agents
- Server-side conversation state management
- Python and TypeScript SDK patterns

#### Install with skills.sh

```
npx skills add google-gemini/gemini-skills --skill gemini-interactions-api --global
```


#### Install with Context7

```
npx ctx7 skills install /google-gemini/gemini-skills gemini-interactions-api
```


## Verify installation

After installing, confirm that your coding assistant can connect to the Gemini Docs MCP server and use your installed skills.

### 1. Verify agent behavior

The most reliable way to verify is to ask your agent a technical question about Gemini API.

**Prompt:** "How do I use context caching with the Gemini API?"

A successful setup will:

**Provide accurate code**: Reference specific Gemini methods like`cacheContent`

or`cachedContents.create`

from the latest endpoints.**Use the MCP Tool**: Show that it is connected to the**Gemini Docs MCP Server**or utilizing the`search_documentation`

tool to fetch data.**Invoke loaded skills**: Show an indicator that it is "Using skill: gemini-api-dev" (if relying on a secondary wrapper).

### 2. Verify manifestations & tools

If the agent gives a general or generic answer, use the specific Discovery or Status commands for your environment to verify that the Docs MCP or skill is loaded into memory.

| Environment | MCP Verification | Skills Verification |
|---|---|---|
Claude Code |
Type `/mcp` in the terminal to view active servers and `search_documentation` tools. |
Type `/skills` in the terminal to list all active manifests. |
Cursor |
Navigate to Settings > Features > MCP. Ensure server is "Connected". |
Open Settings > Rules. Verify the skill appears under "Agent Decides." |
Antigravity |
Check the Customizations > Connections sidebar for MCP status. |
Type `/skills list` or check the Customizations > Rules sidebar. |
Gemini CLI |
Run `gemini mcp list` or use `/mcp list` . |
Run `gemini skills list` or use the `/skills` slash command in-session. |
Copilot |
Type `@gemini /mcp` to list active data connectors. |
Type `@gemini /skills` (or `/skills` ) to view active extensions. |

## Troubleshooting

If your agent provides only general information or fails to recognize Gemini-specific methods, check the following:

### Agent didn't discover the skill

Most agents index skills only on startup.

**Fix:** Completely restart your IDE (Cursor/VS Code) or exit and re-open your
terminal-based agent (Claude Code).

### Global vs. local conflict

If you installed with the `--global`

flag, your agent might be ignoring it in
favor of project-specific rules.

**Fix:** Try installing the skill directly into your project root without the
global flag:

```
npx skills add google-gemini/gemini-skills --skill gemini-api-dev
```

---

## Source: https://ai.google.dev/gemini-api/docs/models

## Gemini 3

[
](/gemini-api/docs/models/gemini-3.1-pro-preview)

### Gemini 3.1 Pro

Advanced intelligence, complex problem-solving skills, and powerful agentic and vibe coding capabilities.

New Preview

[
](/gemini-api/docs/models/gemini-3-flash-preview)

### Gemini 3 Flash

Frontier-class performance rivaling larger models at a fraction of the cost.

Preview

[
](/gemini-api/docs/models/gemini-3.1-flash-lite-preview)

### Gemini 3.1 Flash-Lite

Frontier-class performance rivaling larger models at a fraction of the cost.

New Preview

[
](/gemini-api/docs/models/gemini-3.1-flash-image-preview)

### Nano Banana 2

Powerful, high-efficiency image generation and editing, optimized for speed and high-volume use cases.

Preview

[
](/gemini-api/docs/models/gemini-3-pro-image-preview)

### Nano Banana Pro

State-of-the-art image generation and editing models for highly contextual native image creation.

Preview

[
](/gemini-api/docs/models/gemini-3.1-flash-live-preview)

### Gemini 3.1 Flash Live

High-quality, low-latency Live API model for real-time dialogue and voice-first AI applications.

New Preview

## Gemini 2.5 Flash

[Gemini 2.5 Flash](/gemini-api/docs/models/gemini-2.5-flash)

Our best price-performance model for low-latency, high-volume tasks that require reasoning.

[Nano Banana](/gemini-api/docs/models/gemini-2.5-flash-image)

State-of-the-art native image generation and editing designed for fast, creative workflows.

[Gemini 2.5 Flash Live Preview](/gemini-api/docs/models/gemini-2.5-flash-native-audio-preview-12-2025)

Optimized for real-time conversational agents with sub-second native audio streaming.

[Gemini 2.5 Flash TTS Preview](/gemini-api/docs/models/gemini-2.5-flash-preview-tts)

Controllable text-to-speech audio generation with fine control over style and pacing.

## Gemini 2.5 Flash-Lite

[Gemini 2.5 Flash-Lite](/gemini-api/docs/models/gemini-2.5-flash-lite)

The fastest and most budget-friendly multimodal model in the 2.5 family.

## Gemini 2.5 Pro

[Gemini 2.5 Pro](/gemini-api/docs/models/gemini-2.5-pro)

Our most advanced model for complex tasks, featuring deep reasoning and coding capabilities.

[Gemini 2.5 Pro TTS Preview](/gemini-api/docs/models/gemini-2.5-pro-preview-tts)

High-fidelity speech synthesis optimized for quality in structured workflows like podcasts and audiobooks.

## Audio models

*This section contains all audio models,
including ones that may already be listed in other sections*

[Gemini 3.1 Flash Live Preview](/gemini-api/docs/models/gemini-3.1-flash-live-preview)

Our high-quality, low-latency audio-to-audio (A2A) model designed for real-time dialogue and voice-first AI applications.

[Gemini 2.5 Flash Live Preview](/gemini-api/docs/models/gemini-2.5-flash-native-audio-preview-12-2025)

Our flagship Live API model for low-latency, bidirectional voice and video agents with native audio reasoning.

[Gemini 2.5 Flash TTS Preview](/gemini-api/docs/models/gemini-2.5-flash-preview-tts)

Fast and controllable text-to-speech for low-latency, cost-efficient applications and real-time assistants.

[Gemini 2.5 Pro TTS Preview](/gemini-api/docs/models/gemini-2.5-pro-preview-tts)

High-fidelity speech synthesis optimized for quality in structured workflows like podcasts and audiobooks.

## Generative media models

*This section contains all generative media models,
including ones that may already be listed in other sections*

[Nano Banana 2 Preview](/gemini-api/docs/models/gemini-3.1-flash-image-preview)

High-efficiency production-scale visual creation, combining the intelligence of the Gemini 3 series with lightning-fast generation speeds.

[Veo 3.1 Preview](/gemini-api/docs/models/veo-3.1-generate-preview)

State-of-the-art cinematic video generation with advanced creative controls and natively synchronized audio.

[Nano Banana Pro Preview](/gemini-api/docs/models/gemini-3-pro-image-preview)

A professional design engine with a reasoning core for studio-quality 4K visuals, complex layouts, and precise text rendering.

[Lyria Experimental](/gemini-api/docs/models/lyria-realtime-exp)

High-fidelity music generation model providing granular creative control over instruments, BPM, and complex compositions.

[Nano Banana](/gemini-api/docs/models/gemini-2.5-flash-image)

State-of-the-art native image generation and editing designed for fast, creative workflows.

[Imagen 4](/gemini-api/docs/models/imagen)

Text-to-image model yet, featuring fast and ultra-fast generation and exceptional clarity up to 2K resolution.

## Music generation models

[Lyria 3 Pro Preview](/gemini-api/docs/models/lyria-3-pro-preview)

Our flagship music generation model, optimized for full-length songs with complex structural coherence.

[Lyria 3 Clip Preview](/gemini-api/docs/models/lyria-3-clip-preview)

Optimized for generating short musical clips, loops, and previews up to 30 seconds.

[Lyria RealTime Experimental](/gemini-api/docs/models/lyria-realtime-exp)

High-fidelity music generation model providing granular creative control and real-time streaming capabilities.

## Tool and agent models

[Computer Use Preview](/gemini-api/docs/models/gemini-2.5-computer-use-preview-10-2025)

A specialized model that can "see" a digital screen and perform UI actions like clicking, typing, and navigating to automate complex browser tasks.

[Gemini Deep Research Preview](/gemini-api/docs/models/deep-research-pro-preview-12-2025)

An agentic model that autonomously plans and executes multi-step research across hundreds of sources to produce cited, interactive reports.

## Specialized task models

[Gemini Embedding 2 Preview](/gemini-api/docs/models/gemini-embedding-2-preview)

Our first multimodal embedding model, mapping text, images, video, audio, and PDFs into a unified embedding space for advanced semantic search and RAG systems.

[Gemini Embedding](/gemini-api/docs/models/gemini-embedding-001)

High-dimensional vector representations for advanced semantic search, text classification, and RAG systems.

[Gemini Robotics Preview](/gemini-api/docs/models/gemini-robotics-er-1.5-preview)

Advanced embodied reasoning model that understands physical spaces and plans multi-step tasks for robotic agents.

## Previous models

[Gemini 2.0 Flash Deprecated](/gemini-api/docs/models/gemini-2.0-flash)

Our second generation workhorse model, with next-gen features and improved capabilities, including superior speed, native tool use, and a 1M token context window.

[Gemini 2.0 Flash-Lite Deprecated](/gemini-api/docs/models/gemini-2.0-flash-lite)

Our fastest second generation model, optimized for cost efficiency and low latency.

[Gemini 3 Pro Preview Shut down](/gemini-api/docs/models/gemini-3-pro-preview)

Our state-of-the-art reasoning model, with advanced multimodal understanding.

## Model version name patterns

Gemini models are available in either *stable*, *preview*, *latest*, or
*experimental* versions.

### Stable

Points to a specific stable model. Stable models usually don't change. Most production apps should use a specific stable model.

For example: `gemini-2.5-flash`

.

### Preview

Points to a preview model which may be used for production. Preview models will typically have billing enabled, might come with more restrictive rate limits and will be deprecated with at least 2 weeks notice.

For example: `gemini-2.5-flash-preview-09-2025`

.

### Latest

Points to the latest release for a specific model variation. This can be a
stable, preview or experimental release. This alias will get hot-swapped with
every new release of a specific model variation. A **2-week notice** will
be provided through email before the version behind latest is changed.

For example: `gemini-flash-latest`

.

### Experimental

Points to an experimental model which will typically be not be suitable for production use and come with more restrictive rate limits. We release experimental models to gather feedback and get our latest updates into the hands of developers quickly.

Experimental models are not stable and availability of model endpoints is subject to change.

## Model deprecations

For information about model deprecations, visit the [Gemini deprecations](/gemini-api/docs/deprecations) page.

---

## Source: https://ai.google.dev/gemini-api/docs/gemini-3

Gemini 3 is our most intelligent model family to date, built on a foundation of state-of-the-art reasoning. It is designed to bring any idea to life by mastering agentic workflows, autonomous coding, and complex multimodal tasks. This guide covers key features of the Gemini 3 model family and how to get the most out of it.

Explore our [collection of Gemini 3 apps](https://aistudio.google.com/app/apps?source=showcase&showcaseTag=gemini-3) to
see how the model handles advanced reasoning, autonomous coding, and complex
multimodal tasks.

Get started with a few lines of code:

### Python

```
from google import genai
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-pro-preview",
contents="Find the race condition in this multi-threaded C++ snippet: [code here]",
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function run() {
const response = await ai.models.generateContent({
model: "gemini-3.1-pro-preview",
contents: "Find the race condition in this multi-threaded C++ snippet: [code here]",
});
console.log(response.text);
}
run();
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts": [{"text": "Find the race condition in this multi-threaded C++ snippet: [code here]"}]
}]
}'
```


## Meet the Gemini 3 series

Gemini 3.1 Pro is best for complex tasks that require broad world knowledge and advanced reasoning across modalities.

Gemini 3 Flash is our latest 3-series model, with Pro-level intelligence at the speed and pricing of Flash.

Nano Banana Pro (also known as Gemini 3 Pro Image) is our highest quality image generation model, and Nano Banana 2 (also known as Gemini 3.1 Flash Image) is the high-volume, high-efficiency, lower price-point equivalent.

Gemini 3.1 Flash-Lite is our workhorse model built for cost-efficiency model and high-volume tasks.

All Gemini 3 models are currently in preview.

| Model ID | Context Window (In / Out) | Knowledge Cutoff | Pricing (Input / Output)* |
|---|---|---|---|
gemini-3.1-flash-lite-preview |
1M / 64k | Jan 2025 | $0.25 (text, image, video), $0.50 (audio) / $1.50 |
gemini-3.1-flash-image-preview |
128k / 32k | Jan 2025 | $0.25 (Text Input) / $0.067 (Image Output)** |
gemini-3.1-pro-preview |
1M / 64k | Jan 2025 | $2 / $12 (<200k tokens) $4 / $18 (>200k tokens) |
gemini-3-flash-preview |
1M / 64k | Jan 2025 | $0.50 / $3 |
gemini-3-pro-image-preview |
65k / 32k | Jan 2025 | $2 (Text Input) / $0.134 (Image Output)** |

** Pricing is per 1 million tokens unless otherwise noted.*
*** Image pricing varies by resolution. See the pricing page for details.*

For detailed limits, pricing, and additional information, see the
[models page](/gemini-api/docs/models/gemini).

## New API features in Gemini 3

Gemini 3 introduces new parameters designed to give developers more control over latency, cost, and multimodal fidelity.

### Thinking level

Gemini 3 series models use dynamic thinking by default to reason through
prompts. You can use the `thinking_level`

parameter, which controls the
**maximum** depth of the model's internal reasoning process before it produces a
response. Gemini 3 treats these levels as relative allowances for thinking
rather than strict token guarantees.

If `thinking_level`

is not specified, Gemini 3 will default to `high`

. For
faster, lower-latency responses when complex reasoning isn't required, you can
constrain the model's thinking level to `low`

.

| Thinking Level | Gemini 3.1 Pro | Gemini 3.1 Flash-Lite | Gemini 3 Flash | Description |
|---|---|---|---|---|
`minimal` |
Not supported | Supported (Default) | Supported | Matches the "no thinking" setting for most queries. The model may think very minimally for complex coding tasks. Minimizes latency for chat or high throughput applications. Note, `minimal` does not guarantee that thinking is off. |
`low` |
Supported | Supported | Supported | Minimizes latency and cost. Best for simple instruction following, chat, or high-throughput applications. |
`medium` |
Supported | Supported | Supported | Balanced thinking for most tasks. |
`high` |
Supported (Default, Dynamic) | Supported (Dynamic) | Supported (Default, Dynamic) | Maximizes reasoning depth. The model may take significantly longer to reach a first (non thinking) output token, but the output will be more carefully reasoned. |

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-pro-preview",
contents="How does AI work?",
config=types.GenerateContentConfig(
thinking_config=types.ThinkingConfig(thinking_level="low")
),
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
const response = await ai.models.generateContent({
model: "gemini-3.1-pro-preview",
contents: "How does AI work?",
config: {
thinkingConfig: {
thinkingLevel: "low",
}
},
});
console.log(response.text);
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts": [{"text": "How does AI work?"}]
}],
"generationConfig": {
"thinkingConfig": {
"thinkingLevel": "low"
}
}
}'
```


### Media resolution

Gemini 3 introduces granular control over multimodal vision processing via the
`media_resolution`

parameter. Higher resolutions improve the model's ability to
read fine text or identify small details, but increase token usage and latency.
The `media_resolution`

parameter determines the **maximum number of tokens
allocated per input image or video frame.**

You can now set the resolution to `media_resolution_low`

,
`media_resolution_medium`

, `media_resolution_high`

, or
`media_resolution_ultra_high`

per individual media part or globally (via
`generation_config`

, global not available for ultra high). If unspecified, the
model uses optimal defaults based on the media type.

**Recommended settings**

| Media Type | Recommended Setting | Max Tokens | Usage Guidance |
|---|---|---|---|
Images |
`media_resolution_high` |
1120 | Recommended for most image analysis tasks to ensure maximum quality. |
PDFs |
`media_resolution_medium` |
560 | Optimal for document understanding; quality typically saturates at `medium` . Increasing to `high` rarely improves OCR results for standard documents. |
Video (General) |
`media_resolution_low` (or `media_resolution_medium` ) |
70 (per frame) | Note: For video, `low` and `medium` settings are treated identically (70 tokens) to optimize context usage. This is sufficient for most action recognition and description tasks. |
Video (Text-heavy) |
`media_resolution_high` |
280 (per frame) | Required only when the use case involves reading dense text (OCR) or small details within video frames. |

### Python

```
from google import genai
from google.genai import types
import base64
# The media_resolution parameter is currently only available in the v1alpha API version.
client = genai.Client(http_options={'api_version': 'v1alpha'})
response = client.models.generate_content(
model="gemini-3.1-pro-preview",
contents=[
types.Content(
parts=[
types.Part(text="What is in this image?"),
types.Part(
inline_data=types.Blob(
mime_type="image/jpeg",
data=base64.b64decode("..."),
),
media_resolution={"level": "media_resolution_high"}
)
]
)
]
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
// The media_resolution parameter is currently only available in the v1alpha API version.
const ai = new GoogleGenAI({ apiVersion: "v1alpha" });
async function run() {
const response = await ai.models.generateContent({
model: "gemini-3.1-pro-preview",
contents: [
{
parts: [
{ text: "What is in this image?" },
{
inlineData: {
mimeType: "image/jpeg",
data: "...",
},
mediaResolution: {
level: "media_resolution_high"
}
}
]
}
]
});
console.log(response.text);
}
run();
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1alpha/models/gemini-3.1-pro-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts": [
{ "text": "What is in this image?" },
{
"inlineData": {
"mimeType": "image/jpeg",
"data": "..."
},
"mediaResolution": {
"level": "media_resolution_high"
}
}
]
}]
}'
```


### Temperature

For all Gemini 3 models, we strongly recommend keeping the temperature parameter
at its default value of `1.0`

.

While previous models often benefited from tuning temperature to control creativity versus determinism, Gemini 3's reasoning capabilities are optimized for the default setting. Changing the temperature (setting it below 1.0) may lead to unexpected behavior, such as looping or degraded performance, particularly in complex mathematical or reasoning tasks.

### Thought signatures

Gemini 3 uses [Thought signatures](/gemini-api/docs/thought-signatures) to
maintain reasoning context across API calls. These signatures are encrypted
representations of the model's internal thought process. To ensure the model
maintains its reasoning capabilities you must return these signatures back to
the model in your request exactly as they were received:

**Function Calling (Strict):**The API enforces strict validation on the "Current Turn". Missing signatures will result in a 400 error.**Text/Chat:**Validation is not strictly enforced, but omitting signatures will degrade the model's reasoning and answer quality.**Image generation/editing (Strict)**: The API enforces strict validation on all Model parts including a`thoughtSignature`

. Missing signatures will result in a 400 error.

#### Function calling (strict validation)

When Gemini generates a `functionCall`

, it relies on the `thoughtSignature`

to
process the tool's output correctly in the next turn. The "Current Turn"
includes all Model (`functionCall`

) and User (`functionResponse`

) steps that
occurred since the last standard **User** `text`

message.

**Single Function Call:**The`functionCall`

part contains a signature. You must return it.**Parallel Function Calls:**Only the first`functionCall`

part in the list will contain the signature. You must return the parts in the exact order received.**Multi-Step (Sequential):**If the model calls a tool, receives a result, and calls*another*tool (within the same turn),**both**function calls have signatures. You must return**all**accumulated signatures in the history.

#### Text and streaming

For standard chat or text generation, the presence of a signature is not guaranteed.

**Non-Streaming**: The final content part of the response may contain a`thoughtSignature`

, though it is not always present. If one is returned, you should send it back to maintain best performance.**Streaming**: If a signature is generated, it may arrive in a final chunk that contains an empty text part. Ensure your stream parser checks for signatures even if the text field is empty.

#### Image generation and editing

For `gemini-3-pro-image-preview`

and `gemini-3.1-flash-image-preview`

, thought
signatures are critical for
conversational editing. When you ask the model to modify an image it relies on
the `thoughtSignature`

from the previous turn to understand the composition and
logic of the original image.

**Editing:**Signatures are guaranteed on the first part after the thoughts of the response (`text`

or`inlineData`

) and on every subsequent`inlineData`

part. You must return all of these signatures to avoid errors.

#### Code examples

#### Multi-step Function Calling (Sequential)

The user asks a question requiring two separate steps (Check Flight -> Book Taxi) in one turn.

**Step 1: Model calls Flight Tool.**

The model returns a signature `<Sig_A>`


// Model Response (Turn 1, Step 1) { "role": "model", "parts": [ { "functionCall": { "name": "check_flight", "args": {...} }, "thoughtSignature": "<Sig_A>" // SAVE THIS } ] }

**Step 2: User sends Flight Result**

We must send back `<Sig_A>`

to keep the model's train of thought.

// User Request (Turn 1, Step 2) [ { "role": "user", "parts": [{ "text": "Check flight AA100..." }] }, { "role": "model", "parts": [ { "functionCall": { "name": "check_flight", "args": {...} }, "thoughtSignature": "<Sig_A>" // REQUIRED } ] }, { "role": "user", "parts": [{ "functionResponse": { "name": "check_flight", "response": {...} } }] } ]

**Step 3: Model calls Taxi Tool**

The model remembers the flight delay via `<Sig_A>`

and now decides to book a taxi. It generates a *new* signature `<Sig_B>`

.

// Model Response (Turn 1, Step 3) { "role": "model", "parts": [ { "functionCall": { "name": "book_taxi", "args": {...} }, "thoughtSignature": "<Sig_B>" // SAVE THIS } ] }

**Step 4: User sends Taxi Result**

To complete the turn, you must send back the entire chain: `<Sig_A>`

AND `<Sig_B>`

.

// User Request (Turn 1, Step 4) [ // ... previous history ... { "role": "model", "parts": [ { "functionCall": { "name": "check_flight", ... }, "thoughtSignature": "<Sig_A>" } ] }, { "role": "user", "parts": [{ "functionResponse": {...} }] }, { "role": "model", "parts": [ { "functionCall": { "name": "book_taxi", ... }, "thoughtSignature": "<Sig_B>" } ] }, { "role": "user", "parts": [{ "functionResponse": {...} }] } ]

#### Parallel Function Calling

The user asks: "Check the weather in Paris and London." The model returns two function calls in one response.

// User Request (Sending Parallel Results) [ { "role": "user", "parts": [ { "text": "Check the weather in Paris and London." } ] }, { "role": "model", "parts": [ // 1. First Function Call has the signature { "functionCall": { "name": "check_weather", "args": { "city": "Paris" } }, "thoughtSignature": "<Signature_A>" }, // 2. Subsequent parallel calls DO NOT have signatures { "functionCall": { "name": "check_weather", "args": { "city": "London" } } } ] }, { "role": "user", "parts": [ // 3. Function Responses are grouped together in the next block { "functionResponse": { "name": "check_weather", "response": { "temp": "15C" } } }, { "functionResponse": { "name": "check_weather", "response": { "temp": "12C" } } } ] } ]

#### Text/In-Context Reasoning (No Validation)

The user asks a question that requires in-context reasoning without external tools. While not strictly validated, including the signature helps the model maintain the reasoning chain for follow-up questions.

// User Request (Follow-up question) [ { "role": "user", "parts": [{ "text": "What are the risks of this investment?" }] }, { "role": "model", "parts": [ { "text": "I need to calculate the risk step-by-step. First, I'll look at volatility...", "thoughtSignature": "<Signature_C>" // Recommended to include } ] }, { "role": "user", "parts": [{ "text": "Summarize that in one sentence." }] } ]

#### Image Generation & Editing

For image generation, signatures are strictly validated. They appear on the **first part** (text or image) and **all subsequent image parts**. All must be returned in the next turn.

// Model Response (Turn 1) { "role": "model", "parts": [ // 1. First part ALWAYS has a signature (even if text) { "text": "I will generate a cyberpunk city...", "thoughtSignature": "<Signature_D>" }, // 2. ALL InlineData (Image) parts ALWAYS have signatures { "inlineData": { ... }, "thoughtSignature": "<Signature_E>" }, ] } // User Request (Turn 2 - Requesting an Edit) { "contents": [ // History must include ALL signatures received { "role": "user", "parts": [{ "text": "Generate a cyberpunk city" }] }, { "role": "model", "parts": [ { "text": "...", "thoughtSignature": "<Signature_D>" }, { "inlineData": "...", "thoughtSignature": "<Signature_E>" }, ] }, // New User Prompt { "role": "user", "parts": [{ "text": "Make it daytime." }] } ] }

#### Migrating from other models

If you are transferring a conversation trace from another model (e.g., Gemini 2.5) or injecting a custom function call that was not generated by Gemini 3, you will not have a valid signature.

To bypass strict validation in these specific scenarios, populate the field with
this specific dummy string: ```
"thoughtSignature": "context_engineering_is_the_way
to_go"
```


### Structured Outputs with tools

Gemini 3 models allow you to combine [Structured Outputs](/gemini-api/docs/structured-output) with built-in tools, including
[Grounding with Google Search](/gemini-api/docs/google-search), [URL Context](/gemini-api/docs/url-context), [Code Execution](/gemini-api/docs/code-execution), and [Function Calling](/gemini-api/docs/function-calling).

### Python

```
from google import genai
from google.genai import types
from pydantic import BaseModel, Field
from typing import List
class MatchResult(BaseModel):
winner: str = Field(description="The name of the winner.")
final_match_score: str = Field(description="The final match score.")
scorers: List[str] = Field(description="The name of the scorer.")
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-pro-preview",
contents="Search for all details for the latest Euro.",
config={
"tools": [
{"google_search": {}},
{"url_context": {}}
],
"response_mime_type": "application/json",
"response_json_schema": MatchResult.model_json_schema(),
},
)
result = MatchResult.model_validate_json(response.text)
print(result)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
const ai = new GoogleGenAI({});
const matchSchema = z.object({
winner: z.string().describe("The name of the winner."),
final_match_score: z.string().describe("The final score."),
scorers: z.array(z.string()).describe("The name of the scorer.")
});
async function run() {
const response = await ai.models.generateContent({
model: "gemini-3.1-pro-preview",
contents: "Search for all details for the latest Euro.",
config: {
tools: [
{ googleSearch: {} },
{ urlContext: {} }
],
responseMimeType: "application/json",
responseJsonSchema: zodToJsonSchema(matchSchema),
},
});
const match = matchSchema.parse(JSON.parse(response.text));
console.log(match);
}
run();
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts": [{"text": "Search for all details for the latest Euro."}]
}],
"tools": [
{"googleSearch": {}},
{"urlContext": {}}
],
"generationConfig": {
"responseMimeType": "application/json",
"responseJsonSchema": {
"type": "object",
"properties": {
"winner": {"type": "string", "description": "The name of the winner."},
"final_match_score": {"type": "string", "description": "The final score."},
"scorers": {
"type": "array",
"items": {"type": "string"},
"description": "The name of the scorer."
}
},
"required": ["winner", "final_match_score", "scorers"]
}
}
}'
```


### Image generation

Gemini 3.1 Flash Image and Gemini 3 Pro Image let you generate and edit images
from text prompts. It uses
reasoning to "think" through a prompt and can retrieve real-time data—such as
weather forecasts or stock charts—before using [Google Search](/gemini-api/docs/google-search) grounding before generating high-fidelity
images.

**New & improved capabilities:**

**4K & text rendering:**Generate sharp, legible text and diagrams with up to 2K and 4K resolutions.**Grounded generation:**Use the`google_search`

tool to verify facts and generate imagery based on real-world information. Grounding with Google*Image*Search available for Gemini 3.1 Flash Image.**Conversational editing:**Multi-turn image editing by simply asking for changes (e.g., "Make the background a sunset"). This workflow relies on**Thought Signatures**to preserve visual context between turns.

For complete details on aspect ratios, editing workflows, and configuration
options, see the [Image Generation guide](/gemini-api/docs/image-generation).

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-3-pro-image-preview",
contents="Generate an infographic of the current weather in Tokyo.",
config=types.GenerateContentConfig(
tools=[{"google_search": {}}],
image_config=types.ImageConfig(
aspect_ratio="16:9",
image_size="4K"
)
)
)
image_parts = [part for part in response.parts if part.inline_data]
if image_parts:
image = image_parts[0].as_image()
image.save('weather_tokyo.png')
image.show()
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
const ai = new GoogleGenAI({});
async function run() {
const response = await ai.models.generateContent({
model: "gemini-3-pro-image-preview",
contents: "Generate a visualization of the current weather in Tokyo.",
config: {
tools: [{ googleSearch: {} }],
imageConfig: {
aspectRatio: "16:9",
imageSize: "4K"
}
}
});
for (const part of response.candidates[0].content.parts) {
if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("weather_tokyo.png", buffer);
}
}
}
run();
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts": [{"text": "Generate a visualization of the current weather in Tokyo."}]
}],
"tools": [{"googleSearch": {}}],
"generationConfig": {
"imageConfig": {
"aspectRatio": "16:9",
"imageSize": "4K"
}
}
}'
```


**Example Response**

### Code Execution with images

Gemini 3 Flash can treat vision as an active investigation, not just a static
glance. By combining reasoning with [code execution](/gemini-api/docs/code-execution), the model formulates a plan, then writes and
executes Python code to zoom in, crop, annotate, or otherwise manipulate images
step-by-step to visually ground its answers.

**Use cases:**

**Zoom and inspect:**The model implicitly detects when details are too small (e.g., reading a distant gauge or serial number) and writes code to crop and re-examine the area at higher resolution.**Visual math and plotting:**The model can run multi-step calculations using code (e.g., summing line items on a receipt, or generating a Matplotlib chart from extracted data).**Image annotation:**The model can draw arrows, bounding boxes, or other annotations directly onto images to answer spatial questions like "Where should this item go?".

To enable visual thinking, configure [Code Execution](/gemini-api/docs/code-execution) as a tool. The model will automatically use
code to manipulate images when needed.

### Python

```
from google import genai
from google.genai import types
import requests
from PIL import Image
import io
image_path = "https://goo.gle/instrument-img"
image_bytes = requests.get(image_path).content
image = types.Part.from_bytes(data=image_bytes, mime_type="image/jpeg")
client = genai.Client()
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[
image,
"Zoom into the expression pedals and tell me how many pedals are there?"
],
config=types.GenerateContentConfig(
tools=[types.Tool(code_execution=types.ToolCodeExecution)]
),
)
for part in response.candidates[0].content.parts:
if part.text is not None:
print(part.text)
if part.executable_code is not None:
print(part.executable_code.code)
if part.code_execution_result is not None:
print(part.code_execution_result.output)
if part.as_image() is not None:
display(Image.open(io.BytesIO(part.as_image().image_bytes)))
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const imageUrl = "https://goo.gle/instrument-img";
const response = await fetch(imageUrl);
const imageArrayBuffer = await response.arrayBuffer();
const base64ImageData = Buffer.from(imageArrayBuffer).toString("base64");
const result = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: [
{
inlineData: {
mimeType: "image/jpeg",
data: base64ImageData,
},
},
{
text: "Zoom into the expression pedals and tell me how many pedals are there?",
},
],
config: {
tools: [{ codeExecution: {} }],
},
});
for (const part of result.candidates[0].content.parts) {
if (part.text) {
console.log("Text:", part.text);
}
if (part.executableCode) {
console.log("Code:", part.executableCode.code);
}
if (part.codeExecutionResult) {
console.log("Output:", part.codeExecutionResult.output);
}
}
}
main();
```


### REST

```
IMG_URL="https://goo.gle/instrument-img"
MODEL="gemini-3-flash-preview"
MIME_TYPE=$(curl -sIL "$IMG_URL" | grep -i '^content-type:' | awk -F ': ' '{print $2}' | sed 's/\r$//' | head -n 1)
if [[ -z "$MIME_TYPE" || ! "$MIME_TYPE" == image/* ]]; then
MIME_TYPE="image/jpeg"
fi
if [[ "$(uname)" == "Darwin" ]]; then
IMAGE_B64=$(curl -sL "$IMG_URL" | base64 -b 0)
elif [[ "$(base64 --version 2>&1)" = *"FreeBSD"* ]]; then
IMAGE_B64=$(curl -sL "$IMG_URL" | base64)
else
IMAGE_B64=$(curl -sL "$IMG_URL" | base64 -w0)
fi
curl "https://generativelanguage.googleapis.com/v1beta/models/$MODEL:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{
"inline_data": {
"mime_type":"'"$MIME_TYPE"'",
"data": "'"$IMAGE_B64"'"
}
},
{"text": "Zoom into the expression pedals and tell me how many pedals are there?"}
]
}],
"tools": [{"code_execution": {}}]
}'
```


For more details on code execution with images, see [Code Execution](/gemini-api/docs/code-execution#images).

### Multimodal function responses

[Multimodal function calling](/gemini-api/docs/function-calling#multimodal)
allows users to have function responses containing
multimodal objects allowing for improved utilization of function calling
capabilities of the model. Standard function calling only supports text-based
function responses:

### Python

```
from google import genai
from google.genai import types
import requests
client = genai.Client()
# This is a manual, two turn multimodal function calling workflow:
# 1. Define the function tool
get_image_declaration = types.FunctionDeclaration(
name="get_image",
description="Retrieves the image file reference for a specific order item.",
parameters={
"type": "object",
"properties": {
"item_name": {
"type": "string",
"description": "The name or description of the item ordered (e.g., 'instrument')."
}
},
"required": ["item_name"],
},
)
tool_config = types.Tool(function_declarations=[get_image_declaration])
# 2. Send a message that triggers the tool
prompt = "Show me the instrument I ordered last month."
response_1 = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[prompt],
config=types.GenerateContentConfig(
tools=[tool_config],
)
)
# 3. Handle the function call
function_call = response_1.function_calls[0]
requested_item = function_call.args["item_name"]
print(f"Model wants to call: {function_call.name}")
# Execute your tool (e.g., call an API)
# (This is a mock response for the example)
print(f"Calling external tool for: {requested_item}")
function_response_data = {
"image_ref": {"$ref": "instrument.jpg"},
}
image_path = "https://goo.gle/instrument-img"
image_bytes = requests.get(image_path).content
function_response_multimodal_data = types.FunctionResponsePart(
inline_data=types.FunctionResponseBlob(
mime_type="image/jpeg",
display_name="instrument.jpg",
data=image_bytes,
)
)
# 4. Send the tool's result back
# Append this turn's messages to history for a final response.
history = [
types.Content(role="user", parts=[types.Part(text=prompt)]),
response_1.candidates[0].content,
types.Content(
role="user",
parts=[
types.Part.from_function_response(
name=function_call.name,
response=function_response_data,
parts=[function_response_multimodal_data]
)
],
)
]
response_2 = client.models.generate_content(
model="gemini-3-flash-preview",
contents=history,
config=types.GenerateContentConfig(
tools=[tool_config],
thinking_config=types.ThinkingConfig(include_thoughts=True)
),
)
print(f"\nFinal model response: {response_2.text}")
```


### JavaScript

```
import { GoogleGenAI, Type } from '@google/genai';
const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
// This is a manual, two turn multimodal function calling workflow:
// 1. Define the function tool
const getImageDeclaration = {
name: 'get_image',
description: 'Retrieves the image file reference for a specific order item.',
parameters: {
type: Type.OBJECT,
properties: {
item_name: {
type: Type.STRING,
description: "The name or description of the item ordered (e.g., 'instrument').",
},
},
required: ['item_name'],
},
};
const toolConfig = {
functionDeclarations: [getImageDeclaration],
};
// 2. Send a message that triggers the tool
const prompt = 'Show me the instrument I ordered last month.';
const response1 = await client.models.generateContent({
model: 'gemini-3-flash-preview',
contents: prompt,
config: {
tools: [toolConfig],
},
});
// 3. Handle the function call
const functionCall = response1.functionCalls[0];
const requestedItem = functionCall.args.item_name;
console.log(`Model wants to call: ${functionCall.name}`);
// Execute your tool (e.g., call an API)
// (This is a mock response for the example)
console.log(`Calling external tool for: ${requestedItem}`);
const functionResponseData = {
image_ref: { $ref: 'instrument.jpg' },
};
const imageUrl = "https://goo.gle/instrument-img";
const response = await fetch(imageUrl);
const imageArrayBuffer = await response.arrayBuffer();
const base64ImageData = Buffer.from(imageArrayBuffer).toString('base64');
const functionResponseMultimodalData = {
inlineData: {
mimeType: 'image/jpeg',
displayName: 'instrument.jpg',
data: base64ImageData,
},
};
// 4. Send the tool's result back
// Append this turn's messages to history for a final response.
const history = [
{ role: 'user', parts: [{ text: prompt }] },
response1.candidates[0].content,
{
role: 'tool',
parts: [
{
functionResponse: {
name: functionCall.name,
response: functionResponseData,
parts: [functionResponseMultimodalData],
},
},
],
},
];
const response2 = await client.models.generateContent({
model: 'gemini-3-flash-preview',
contents: history,
config: {
tools: [toolConfig],
thinkingConfig: { includeThoughts: true },
},
});
console.log(`\nFinal model response: ${response2.text}`);
```


### REST

```
IMG_URL="https://goo.gle/instrument-img"
MIME_TYPE=$(curl -sIL "$IMG_URL" | grep -i '^content-type:' | awk -F ': ' '{print $2}' | sed 's/\r$//' | head -n 1)
if [[ -z "$MIME_TYPE" || ! "$MIME_TYPE" == image/* ]]; then
MIME_TYPE="image/jpeg"
fi
# Check for macOS
if [[ "$(uname)" == "Darwin" ]]; then
IMAGE_B64=$(curl -sL "$IMG_URL" | base64 -b 0)
elif [[ "$(base64 --version 2>&1)" = *"FreeBSD"* ]]; then
IMAGE_B64=$(curl -sL "$IMG_URL" | base64)
else
IMAGE_B64=$(curl -sL "$IMG_URL" | base64 -w0)
fi
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
...,
{
"role": "user",
"parts": [
{
"functionResponse": {
"name": "get_image",
"response": {
"image_ref": {
"$ref": "instrument.jpg"
}
},
"parts": [
{
"inlineData": {
"displayName": "instrument.jpg",
"mimeType":"'"$MIME_TYPE"'",
"data": "'"$IMAGE_B64"'"
}
}
]
}
}
]
}
]
}'
```


### Combine built-in tools and function calling

Gemini 3 allows the use of built-in tools (like Google Search, URL
context, and [more](/gemini-api/docs/tools)) and custom [function calling](/gemini-api/docs/function-calling) tools in the same API call, allowing for
more complex workflows. Learn more on the [tool combinations](/gemini-api/docs/tool-combination) page.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
getWeather = {
"name": "getWeather",
"description": "Gets the weather for a requested city.",
"parameters": {
"type": "object",
"properties": {
"city": {
"type": "string",
"description": "The city and state, e.g. Utqiaġvik, Alaska",
},
},
"required": ["city"],
},
}
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents="What is the northernmost city in the United States? What's the weather like there today?",
config=types.GenerateContentConfig(
tools=[
types.Tool(
google_search=types.ToolGoogleSearch(), # Built-in tool
function_declarations=[getWeather] # Custom tool
),
],
include_server_side_tool_invocations=True
),
)
history = [
types.Content(
role="user",
parts=[types.Part(text="What is the northernmost city in the United States? What's the weather like there today?")]
),
response.candidates[0].content,
types.Content(
role="user",
parts=[types.Part(
function_response=types.FunctionResponse(
name="getWeather",
response={"response": "Very cold. 22 degrees Fahrenheit."},
id=response.candidates[0].content.parts[2].function_call.id
)
)]
)
]
response_2 = client.models.generate_content(
model="gemini-3-flash-preview",
contents=history,
config=types.GenerateContentConfig(
tools=[
types.Tool(
google_search=types.ToolGoogleSearch(),
function_declarations=[getWeather]
),
],
include_server_side_tool_invocations=True
),
)
```


### Javascript

```
import { GoogleGenAI, Type } from '@google/genai';
const client = new GoogleGenAI({});
const getWeather = {
name: "getWeather",
description: "Get the weather in a given location",
parameters: {
type: "OBJECT",
properties: {
location: {
type: "STRING",
description: "The city and state, e.g. San Francisco, CA"
}
},
required: ["location"]
}
};
async function run() {
const model = client.models.generateContent({
model: "gemini-3-flash-preview",
});
const tools = [
{ googleSearch: {} },
{ functionDeclarations: [getWeather] }
];
const toolConfig = { includeServerSideToolInvocations: true };
const result1 = await model.generateContent({
contents: [{role: "user", parts: [{text: "What is the northernmost city in the United States? What's the weather like there today?"}]}],
tools: tools,
toolConfig: toolConfig,
});
const response1 = result1.response;
const functionCallId = response1.candidates[0].content.parts.find(p => p.functionCall)?.functionCall?.id;
const history = [
{
role: "user",
parts:[{text: "What is the northernmost city in the United States? What's the weather like there today?"}]
},
response1.candidates[0].content,
{
role: "user",
parts: [{
functionResponse: {
name: "getWeather",
response: {response: "Very cold. 22 degrees Fahrenheit."},
id: functionCallId
}
}]
}
];
const result2 = await model.generateContent({
contents: history,
tools: tools,
toolConfig: toolConfig,
});
}
run();
```


## Migrating from Gemini 2.5

Gemini 3 is our most capable model family to date and offers a stepwise improvement over Gemini 2.5. When migrating, consider the following:

**Thinking:**If you were previously using complex prompt engineering (like chain of thought) to force Gemini 2.5 to reason, try Gemini 3 with`thinking_level: "high"`

and simplified prompts.**Temperature settings:**If your existing code explicitly sets temperature (especially to low values for deterministic outputs), we recommend removing this parameter and using the Gemini 3 default of 1.0 to avoid potential looping issues or performance degradation on complex tasks.**PDF & document understanding:**If you relied on specific behavior for dense document parsing, test the new`media_resolution_high`

setting to ensure continued accuracy.**Token consumption:**Migrating to Gemini 3 defaults may**increase**token usage for PDFs but**decrease**token usage for video. If requests now exceed the context window due to higher default resolutions, we recommend explicitly reducing the media resolution.**Image segmentation:**Image segmentation capabilities (returning pixel-level masks for objects) are not supported in Gemini 3 Pro or Gemini 3 Flash. For workloads requiring native image segmentation, we recommend continuing to utilize Gemini 2.5 Flash with thinking turned off or[Gemini Robotics-ER 1.5](/gemini-api/docs/robotics-overview).**Computer Use:**Gemini 3 Pro and Gemini 3 Flash support[Computer Use](/gemini-api/docs/computer-use). Unlike the 2.5 series, you don't need to use a separate model to access the Computer Use tool.**Tool support**:[Combining built-in tools with function calling](/gemini-api/docs/tool-combination)is now supported for Gemini 3 models.[Maps grounding](/gemini-api/docs/maps-grounding)is also now supported for Gemini 3 models.

## OpenAI compatibility

For users utilizing the [OpenAI compatibility layer](/gemini-api/docs/openai),
standard parameters (OpenAI's `reasoning_effort`

) are automatically mapped to
Gemini (`thinking_level`

) equivalents.

## Prompting best practices

Gemini 3 is a reasoning model, which changes how you should prompt.

**Precise instructions:**Be concise in your input prompts. Gemini 3 responds best to direct, clear instructions. It may over-analyze verbose or overly complex prompt engineering techniques used for older models.**Output verbosity:**By default, Gemini 3 is less verbose and prefers providing direct, efficient answers. If your use case requires a more conversational or "chatty" persona, you must explicitly steer the model in the prompt (e.g., "Explain this as a friendly, talkative assistant").**Context management:**When working with large datasets (e.g., entire books, odebases, or long videos), place your specific instructions or questions at the end of the prompt, after the data context. Anchor the model's reasoning to the provided data by starting your question with a phrase like, "Based on the information above...".

Learn more about prompt design strategies in the [prompt engineering guide](/gemini-api/docs/prompting-strategies).

## FAQ

**What is the knowledge cutoff for Gemini 3?**Gemini 3 models have a knowledge cutoff of January 2025. For more recent information, use the[Search Grounding](/gemini-api/docs/google-search)tool.**What are the context window limits?**Gemini 3 models support a 1 million token input context window and up to 64k tokens of output.**Is there a free tier for Gemini 3?**Gemini 3 Flash`gemini-3-flash-preview`

and 3.1 Flash-Lite`gemini-3.1-flash-lite-preview`

have free tiers in the Gemini API. You can try Gemini 3.1 Pro and 3 Flash for free in Google AI Studio, but there is no free tier available for`gemini-3.1-pro-preview`

in the Gemini API.**Will my old**Yes,`thinking_budget`

code still work?`thinking_budget`

is still supported for backward compatibility, but we recommend migrating to`thinking_level`

for more predictable performance. Do not use both in the same request.**Does Gemini 3 support the Batch API?**Yes, Gemini 3 supports the[Batch API](/gemini-api/docs/batch-api).**Is Context Caching supported?**Yes,[Context Caching](/gemini-api/docs/caching)is supported for Gemini 3.**Which tools are supported in Gemini 3?**Gemini 3 supports[Google Search](/gemini-api/docs/google-search),[Grounding with Google Maps](/gemini-api/docs/maps-grounding),[File Search](/gemini-api/docs/file-search),[Code Execution](/gemini-api/docs/code-execution), and[URL Context](/gemini-api/docs/url-context). It also supports standard[Function Calling](/gemini-api/docs/function-calling)for your own custom tools, and in[combination with built-in tools](/gemini-api/docs/tool-combination).**What is**If you are using`gemini-3.1-pro-preview-customtools`

?`gemini-3.1-pro-preview`

and the model ignores your custom tools in favor of bash commands, try the`gemini-3.1-pro-preview-customtools`

model instead. More info[here](/gemini-api/docs/models/gemini-3.1-pro-preview#gemini-31-pro-preview-customtools).

## Next steps

- Get started with the
[Gemini 3 Cookbook](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Get_started.ipynb#templateParams=%7B%22MODEL_ID%22%3A+%22gemini-3-pro-preview%22%7D) - Check the dedicated Cookbook guide on
[thinking levels](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Get_started_thinking_REST.ipynb#gemini3)and how to migrate from thinking budget to thinking levels.

---

## Source: https://ai.google.dev/gemini-api/docs/image-generation

# Nano Banana image generation

[Try a Nano Banana 2 app](https://aistudio.google.com/apps/bundled/pet_passport)- Or build your own from prompts:

-
**Prompt:**"A photo of a glossy magazine cover, the minimal blue cover has the large bold words Nano Banana. The text is in a serif font and fills the view. No other text. In front of the text there is a portrait of a person in a sleek and minimal dress. She is playfully holding the number 2, which is the focal point.

Put the issue number and "Feb 2026" date in the corner along with a barcode. The magazine is on a shelf against an orange plastered wall, within a designer store."Create[professional product shots](#4_product_mockups_commercial_photography)in[AI Studio](https://aistudio.google.com/apps?features=chat_based_image_editing) -
**Prompt:**"Present a clear, 45° top-down isometric miniature 3D cartoon scene of London, featuring its most iconic landmarks and architectural elements. Use soft, refined textures with realistic PBR materials and gentle, lifelike lighting and shadows. Integrate the current weather conditions directly into the city environment to create an immersive atmospheric mood. Use a clean, minimalistic composition with a soft, solid-colored background. At the top-center, place the title "London" in large bold text, a prominent weather icon beneath it, then the date (small text) and temperature (medium text). All text must be centered with consistent spacing, and may subtly overlap the tops of the buildings."Learn more about[search grounding](#use-with-grounding)and try it in[AI Studio](https://aistudio.google.com/apps?features=chat_based_image_editing,search_grounding) -
**Prompt:**"Use image search to find accurate images of a resplendent quetzal bird. Create a beautiful 3:2 wallpaper of this bird, with a natural top to bottom gradient and minimal composition."Use Google[Image Search](#image-search)grounding with Nano Banana 2. Try it in[AI Studio](https://aistudio.google.com/apps?features=chat_based_image_editing,search_grounding) -
**Prompt:**"Put this logo on a high-end ad for a banana scented perfume. The logo is perfectly integrated into the bottle."Try Nano Banana's[high fidelity detail preservation](#5_high-fidelity_detail_preservation)in[AI Studio](https://aistudio.google.com/apps?features=chat_based_image_editing) -
**Prompt:**"A photo of an everyday scene at a busy cafe serving breakfast. In the foreground is an anime man with blue hair, one of the people is a pencil sketch, another is a claymation person"Experiment with different[artistic styles](#3_style_transfer)with Nano Banana in[AI Studio](https://aistudio.google.com/apps?features=chat_based_image_editing) -
**Prompt:**"Use search to find how the Gemini 3 Flash launch has been received. Use this information to write a short article about it (with headings). Return a photo of the article as it appeared in a design focused glossy magazine. It is a photo of a single folded over page, showing the article about Gemini 3 Flash. One hero photo. Headline in serif." -
**Prompt:**"An icon representing a cute dog. The background is white. Make the icons in a colorful and tactile 3D style. No text."Create[icons, stickers, and assets](#2_stylized_illustrations_stickers)with Nano Banana in[AI Studio](https://aistudio.google.com/apps?features=chat_based_image_editing,search_grounding) -
**Prompt:**"Make a photo that is perfectly isometric. It is not a miniature, it is a captured photo that just happened to be perfectly isometric. It is a photo of a beautiful modern garden. There's a large 2 shaped pool and the words: Nano Banana 2."

**Nano Banana** is the name for Gemini's native image generation capabilities.
Gemini can generate and process images conversationally
with text, images, or a combination of both. This lets you create, edit, and
iterate on visuals with unprecedented control.

Nano Banana refers to three distinct models available in the Gemini API:

**Nano Banana 2**: The[Gemini 3.1 Flash Image Preview](/gemini-api/docs/models/gemini-3.1-flash-image-preview)model (`gemini-3.1-flash-image-preview`

). This model serves as the high-efficiency counterpart to Gemini 3 Pro Image, optimized for speed and high-volume developer use cases.**Nano Banana Pro**: The[Gemini 3 Pro Image Preview](/gemini-api/docs/models/gemini-3-pro-image-preview)model (`gemini-3-pro-image-preview`

). This model is designed for professional asset production, utilizing advanced reasoning ("Thinking") to follow complex instructions and render high-fidelity text.**Nano Banana**: The[Gemini 2.5 Flash Image](/gemini-api/docs/models/gemini-2.5-flash-image)model (`gemini-2.5-flash-image`

). This model is designed for speed and efficiency, optimized for high-volume, low-latency tasks.

All generated images include a [SynthID watermark](/responsible/docs/safeguards/synthid).

## Image generation (text-to-image)

### Python

```
from google import genai
from google.genai import types
from PIL import Image
client = genai.Client()
prompt = ("Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme")
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[prompt],
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("generated_image.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const prompt =
"Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme";
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("gemini-native-image.png", buffer);
console.log("Image saved as gemini-native-image.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
genai.Text("Create a picture of a nano banana dish in a " +
" fancy restaurant with a Gemini theme"),
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "gemini_generated_image.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
public class TextToImage {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
"Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme",
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("_01_generated_image.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme"}
]
}]
}'
```


## Image editing (text-and-image-to-image)

**Reminder**: Make sure you have the necessary rights to any images you upload.
Don't generate content that infringe on others' rights, including videos or
images that deceive, harass, or harm. Your use of this generative AI service is
subject to our [Prohibited Use Policy](https://policies.google.com/terms/generative-ai/use-policy).

Provide an image and use text prompts to add, remove, or modify elements, change the style, or adjust the color grading.

The following example demonstrates uploading `base64`

encoded images.
For multiple images, larger payloads, and supported MIME types, check the [Image
understanding](/gemini-api/docs/image-understanding) page.

### Python

```
from google import genai
from google.genai import types
from PIL import Image
client = genai.Client()
prompt = (
"Create a picture of my cat eating a nano-banana in a "
"fancy restaurant under the Gemini constellation",
)
image = Image.open("/path/to/cat_image.png")
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[prompt, image],
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("generated_image.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imagePath = "path/to/cat_image.png";
const imageData = fs.readFileSync(imagePath);
const base64Image = imageData.toString("base64");
const prompt = [
{ text: "Create a picture of my cat eating a nano-banana in a" +
"fancy restaurant under the Gemini constellation" },
{
inlineData: {
mimeType: "image/png",
data: base64Image,
},
},
];
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("gemini-native-image.png", buffer);
console.log("Image saved as gemini-native-image.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
imagePath := "/path/to/cat_image.png"
imgData, _ := os.ReadFile(imagePath)
parts := []*genai.Part{
genai.NewPartFromText("Create a picture of my cat eating a nano-banana in a fancy restaurant under the Gemini constellation"),
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/png",
Data: imgData,
},
},
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
contents,
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "gemini_generated_image.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class TextAndImageToImage {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
Content.fromParts(
Part.fromText("""
Create a picture of my cat eating a nano-banana in
a fancy restaurant under the Gemini constellation
"""),
Part.fromBytes(
Files.readAllBytes(
Path.of("src/main/resources/cat.jpg")),
"image/jpeg")),
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("gemini_generated_image.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d "{
\"contents\": [{
\"parts\":[
{\"text\": \"'Create a picture of my cat eating a nano-banana in a fancy restaurant under the Gemini constellation\"},
{
\"inline_data\": {
\"mime_type\":\"image/jpeg\",
\"data\": \"<BASE64_IMAGE_DATA>\"
}
}
]
}]
}"
```


### Multi-turn image editing

Keep generating and editing images conversationally. Chat or multi-turn conversation is the recommended way to iterate on images. The following example shows a prompt to generate an infographic about photosynthesis.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
chat = client.chats.create(
model="gemini-3.1-flash-image-preview",
config=types.GenerateContentConfig(
response_modalities=['TEXT', 'IMAGE'],
tools=[{"google_search": {}}]
)
)
message = "Create a vibrant infographic that explains photosynthesis as if it were a recipe for a plant's favorite food. Show the \"ingredients\" (sunlight, water, CO2) and the \"finished dish\" (sugar/energy). The style should be like a page from a colorful kids' cookbook, suitable for a 4th grader."
response = chat.send_message(message)
for part in response.parts:
if part.text is not None:
print(part.text)
elif image:= part.as_image():
image.save("photosynthesis.png")
```


### Javascript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const chat = ai.chats.create({
model: "gemini-3.1-flash-image-preview",
config: {
responseModalities: ['TEXT', 'IMAGE'],
tools: [{googleSearch: {}}],
},
});
}
await main();
const message = "Create a vibrant infographic that explains photosynthesis as if it were a recipe for a plant's favorite food. Show the \"ingredients\" (sunlight, water, CO2) and the \"finished dish\" (sugar/energy). The style should be like a page from a colorful kids' cookbook, suitable for a 4th grader."
let response = await chat.sendMessage({message});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("photosynthesis.png", buffer);
console.log("Image saved as photosynthesis.png");
}
}
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
defer client.Close()
model := client.GenerativeModel("gemini-3.1-flash-image-preview")
model.GenerationConfig = &pb.GenerationConfig{
ResponseModalities: []pb.ResponseModality{genai.Text, genai.Image},
}
chat := model.StartChat()
message := "Create a vibrant infographic that explains photosynthesis as if it were a recipe for a plant's favorite food. Show the \"ingredients\" (sunlight, water, CO2) and the \"finished dish\" (sugar/energy). The style should be like a page from a colorful kids' cookbook, suitable for a 4th grader."
resp, err := chat.SendMessage(ctx, genai.Text(message))
if err != nil {
log.Fatal(err)
}
for _, part := range resp.Candidates[0].Content.Parts {
if txt, ok := part.(genai.Text); ok {
fmt.Printf("%s", string(txt))
} else if img, ok := part.(genai.ImageData); ok {
err := os.WriteFile("photosynthesis.png", img.Data, 0644)
if err != nil {
log.Fatal(err)
}
}
}
}
```


### Java

```
import com.google.genai.Chat;
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.GoogleSearch;
import com.google.genai.types.ImageConfig;
import com.google.genai.types.Part;
import com.google.genai.types.RetrievalConfig;
import com.google.genai.types.Tool;
import com.google.genai.types.ToolConfig;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class MultiturnImageEditing {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.tools(Tool.builder()
.googleSearch(GoogleSearch.builder().build())
.build())
.build();
Chat chat = client.chats.create("gemini-3.1-flash-image-preview", config);
GenerateContentResponse response = chat.sendMessage("""
Create a vibrant infographic that explains photosynthesis
as if it were a recipe for a plant's favorite food.
Show the "ingredients" (sunlight, water, CO2)
and the "finished dish" (sugar/energy).
The style should be like a page from a colorful
kids' cookbook, suitable for a 4th grader.
""");
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("photosynthesis.png"), blob.data().get());
}
}
}
// ...
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"role": "user",
"parts": [
{"text": "Create a vibrant infographic that explains photosynthesis as if it were a recipe for a plants favorite food. Show the \"ingredients\" (sunlight, water, CO2) and the \"finished dish\" (sugar/energy). The style should be like a page from a colorful kids cookbook, suitable for a 4th grader."}
]
}],
"generationConfig": {
"responseModalities": ["TEXT", "IMAGE"]
}
}'
```


You can then use the same chat to change the language on the graphic to Spanish.

### Python

```
message = "Update this infographic to be in Spanish. Do not change any other elements of the image."
aspect_ratio = "16:9" # "1:1","1:4","1:8","2:3","3:2","3:4","4:1","4:3","4:5","5:4","8:1","9:16","16:9","21:9"
resolution = "2K" # "512", "1K", "2K", "4K"
response = chat.send_message(message,
config=types.GenerateContentConfig(
image_config=types.ImageConfig(
aspect_ratio=aspect_ratio,
image_size=resolution
),
))
for part in response.parts:
if part.text is not None:
print(part.text)
elif image:= part.as_image():
image.save("photosynthesis_spanish.png")
```


### Javascript

```
const message = 'Update this infographic to be in Spanish. Do not change any other elements of the image.';
const aspectRatio = '16:9';
const resolution = '2K';
let response = await chat.sendMessage({
message,
config: {
responseModalities: ['TEXT', 'IMAGE'],
imageConfig: {
aspectRatio: aspectRatio,
imageSize: resolution,
},
tools: [{googleSearch: {}}],
},
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("photosynthesis2.png", buffer);
console.log("Image saved as photosynthesis2.png");
}
}
```


### Go

```
message = "Update this infographic to be in Spanish. Do not change any other elements of the image."
aspect_ratio = "16:9" // "1:1","1:4","1:8","2:3","3:2","3:4","4:1","4:3","4:5","5:4","8:1","9:16","16:9","21:9"
resolution = "2K" // "512", "1K", "2K", "4K"
model.GenerationConfig.ImageConfig = &pb.ImageConfig{
AspectRatio: aspect_ratio,
ImageSize: resolution,
}
resp, err = chat.SendMessage(ctx, genai.Text(message))
if err != nil {
log.Fatal(err)
}
for _, part := range resp.Candidates[0].Content.Parts {
if txt, ok := part.(genai.Text); ok {
fmt.Printf("%s", string(txt))
} else if img, ok := part.(genai.ImageData); ok {
err := os.WriteFile("photosynthesis_spanish.png", img.Data, 0644)
if err != nil {
log.Fatal(err)
}
}
}
```


### Java

```
String aspectRatio = "16:9"; // "1:1","1:4","1:8","2:3","3:2","3:4","4:1","4:3","4:5","5:4","8:1","9:16","16:9","21:9"
String resolution = "2K"; // "512", "1K", "2K", "4K"
config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.imageConfig(ImageConfig.builder()
.aspectRatio(aspectRatio)
.imageSize(resolution)
.build())
.build();
response = chat.sendMessage(
"Update this infographic to be in Spanish. " +
"Do not change any other elements of the image.",
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("photosynthesis_spanish.png"), blob.data().get());
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
"contents": [
{
"role": "user",
"parts": [{"text": "Create a vibrant infographic that explains photosynthesis..."}]
},
{
"role": "model",
"parts": [{"inline_data": {"mime_type": "image/png", "data": "<PREVIOUS_IMAGE_DATA>"}}]
},
{
"role": "user",
"parts": [{"text": "Update this infographic to be in Spanish. Do not change any other elements of the image."}]
}
],
"tools": [{"google_search": {}}],
"generationConfig": {
"responseModalities": ["TEXT", "IMAGE"],
"imageConfig": {
"aspectRatio": "16:9",
"imageSize": "2K"
}
}
}'
```


## New with Gemini 3 Image models

Gemini 3 offers state-of-the-art image generation and editing models. Gemini 3.1 Flash Image is optimized for speed and high-volume use-cases, and Gemini 3 Pro Image is optimized for professional asset production. Designed to tackle the most challenging workflows through advanced reasoning, they excel at complex, multi-turn creation and modification tasks.

**High-resolution output**: Built-in generation capabilities for 1K, 2K, and 4K visuals.**Gemini 3.1 Flash Image**adds the smaller 512 (0.5K) resolution.

**Advanced text rendering**: Capable of generating legible, stylized text for infographics, menus, diagrams, and marketing assets.**Grounding with Google Search**: The model can use Google Search as a tool to verify facts and generate imagery based on real-time data (e.g., current weather maps, stock charts, recent events).**Gemini 3.1 Flash Image**adds the integration of Grounding with Google Search for Images alongside Web Search.

**Thinking mode**: The model utilizes a "thinking" process to reason through complex prompts. It generates interim "thought images" (visible in the backend but not charged) to refine the composition before producing the final high-quality output.**Up to 14 reference images**: You can now mix up to 14 reference images to produce the final image.**New aspect ratios**: Gemini 3.1 Flash Image Preview adds 1:4, 4:1, 1:8, and 8:1[aspect ratios](#aspect_ratios_and_image_size).

### Use up to 14 reference images

Gemini 3 image models let you to mix up to 14 reference images. These 14 images can include the following:

| Gemini 3.1 Flash Image Preview | Gemini 3 Pro Image Preview |
|---|---|
| Up to 10 images of objects with high-fidelity to include in the final image | Up to 6 images of objects with high-fidelity to include in the final image |
| Up to 4 images of characters to maintain character consistency | Up to 5 images of characters to maintain character consistency |

### Python

```
from google import genai
from google.genai import types
from PIL import Image
prompt = "An office group photo of these people, they are making funny faces."
aspect_ratio = "5:4" # "1:1","1:4","1:8","2:3","3:2","3:4","4:1","4:3","4:5","5:4","8:1","9:16","16:9","21:9"
resolution = "2K" # "512", "1K", "2K", "4K"
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[
prompt,
Image.open('person1.png'),
Image.open('person2.png'),
Image.open('person3.png'),
Image.open('person4.png'),
Image.open('person5.png'),
],
config=types.GenerateContentConfig(
response_modalities=['TEXT', 'IMAGE'],
image_config=types.ImageConfig(
aspect_ratio=aspect_ratio,
image_size=resolution
),
)
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif image:= part.as_image():
image.save("office.png")
```


### Javascript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const prompt =
'An office group photo of these people, they are making funny faces.';
const aspectRatio = '5:4';
const resolution = '2K';
const contents = [
{ text: prompt },
{
inlineData: {
mimeType: "image/jpeg",
data: base64ImageFile1,
},
},
{
inlineData: {
mimeType: "image/jpeg",
data: base64ImageFile2,
},
},
{
inlineData: {
mimeType: "image/jpeg",
data: base64ImageFile3,
},
},
{
inlineData: {
mimeType: "image/jpeg",
data: base64ImageFile4,
},
},
{
inlineData: {
mimeType: "image/jpeg",
data: base64ImageFile5,
},
}
];
const response = await ai.models.generateContent({
model: 'gemini-3.1-flash-image-preview',
contents: contents,
config: {
responseModalities: ['TEXT', 'IMAGE'],
imageConfig: {
aspectRatio: aspectRatio,
imageSize: resolution,
},
},
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("image.png", buffer);
console.log("Image saved as image.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
defer client.Close()
model := client.GenerativeModel("gemini-3.1-flash-image-preview")
model.GenerationConfig = &pb.GenerationConfig{
ResponseModalities: []pb.ResponseModality{genai.Text, genai.Image},
ImageConfig: &pb.ImageConfig{
AspectRatio: "5:4",
ImageSize: "2K",
},
}
img1, err := os.ReadFile("person1.png")
if err != nil { log.Fatal(err) }
img2, err := os.ReadFile("person2.png")
if err != nil { log.Fatal(err) }
img3, err := os.ReadFile("person3.png")
if err != nil { log.Fatal(err) }
img4, err := os.ReadFile("person4.png")
if err != nil { log.Fatal(err) }
img5, err := os.ReadFile("person5.png")
if err != nil { log.Fatal(err) }
parts := []genai.Part{
genai.Text("An office group photo of these people, they are making funny faces."),
genai.ImageData{MIMEType: "image/png", Data: img1},
genai.ImageData{MIMEType: "image/png", Data: img2},
genai.ImageData{MIMEType: "image/png", Data: img3},
genai.ImageData{MIMEType: "image/png", Data: img4},
genai.ImageData{MIMEType: "image/png", Data: img5},
}
resp, err := model.GenerateContent(ctx, parts...)
if err != nil {
log.Fatal(err)
}
for _, part := range resp.Candidates[0].Content.Parts {
if txt, ok := part.(genai.Text); ok {
fmt.Printf("%s", string(txt))
} else if img, ok := part.(genai.ImageData); ok {
err := os.WriteFile("office.png", img.Data, 0644)
if err != nil {
log.Fatal(err)
}
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.ImageConfig;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class GroupPhoto {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.imageConfig(ImageConfig.builder()
.aspectRatio("5:4")
.imageSize("2K")
.build())
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
Content.fromParts(
Part.fromText("An office group photo of these people, they are making funny faces."),
Part.fromBytes(Files.readAllBytes(Path.of("person1.png")), "image/png"),
Part.fromBytes(Files.readAllBytes(Path.of("person2.png")), "image/png"),
Part.fromBytes(Files.readAllBytes(Path.of("person3.png")), "image/png"),
Part.fromBytes(Files.readAllBytes(Path.of("person4.png")), "image/png"),
Part.fromBytes(Files.readAllBytes(Path.of("person5.png")), "image/png")
), config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("office.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d "{
\"contents\": [{
\"parts\":[
{\"text\": \"An office group photo of these people, they are making funny faces.\"},
{\"inline_data\": {\"mime_type\":\"image/png\", \"data\": \"<BASE64_DATA_IMG_1>\"}},
{\"inline_data\": {\"mime_type\":\"image/png\", \"data\": \"<BASE64_DATA_IMG_2>\"}},
{\"inline_data\": {\"mime_type\":\"image/png\", \"data\": \"<BASE64_DATA_IMG_3>\"}},
{\"inline_data\": {\"mime_type\":\"image/png\", \"data\": \"<BASE64_DATA_IMG_4>\"}},
{\"inline_data\": {\"mime_type\":\"image/png\", \"data\": \"<BASE64_DATA_IMG_5>\"}}
]
}],
\"generationConfig\": {
\"responseModalities\": [\"TEXT\", \"IMAGE\"],
\"imageConfig\": {
\"aspectRatio\": \"5:4\",
\"imageSize\": \"2K\"
}
}
}"
```


### Grounding with Google Search

Use the [Google Search tool](/gemini-api/docs/google-search) to generate images
based on real-time information, such as weather forecasts, stock charts, or
recent events.

Note that when using Grounding with Google Search with image generation,
image-based search results are not passed to the generation model and are
excluded from the response (see [Grounding with Google Search for images](#image-search))

### Python

```
from google import genai
prompt = "Visualize the current weather forecast for the next 5 days in San Francisco as a clean, modern weather chart. Add a visual on what I should wear each day"
aspect_ratio = "16:9" # "1:1","1:4","1:8","2:3","3:2","3:4","4:1","4:3","4:5","5:4","8:1","9:16","16:9","21:9"
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=prompt,
config=types.GenerateContentConfig(
response_modalities=['Text', 'Image'],
image_config=types.ImageConfig(
aspect_ratio=aspect_ratio,
),
tools=[{"google_search": {}}]
)
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif image:= part.as_image():
image.save("weather.png")
```


### Javascript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const prompt = 'Visualize the current weather forecast for the next 5 days in San Francisco as a clean, modern weather chart. Add a visual on what I should wear each day';
const aspectRatio = '16:9';
const resolution = '2K';
const response = await ai.models.generateContent({
model: 'gemini-3.1-flash-image-preview',
contents: prompt,
config: {
responseModalities: ['TEXT', 'IMAGE'],
imageConfig: {
aspectRatio: aspectRatio,
imageSize: resolution,
},
tools: [{ googleSearch: {} }]
},
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("image.png", buffer);
console.log("Image saved as image.png");
}
}
}
main();
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.GoogleSearch;
import com.google.genai.types.ImageConfig;
import com.google.genai.types.Part;
import com.google.genai.types.Tool;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
public class SearchGrounding {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.imageConfig(ImageConfig.builder()
.aspectRatio("16:9")
.build())
.tools(Tool.builder()
.googleSearch(GoogleSearch.builder().build())
.build())
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview", """
Visualize the current weather forecast for the next 5 days
in San Francisco as a clean, modern weather chart.
Add a visual on what I should wear each day
""",
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("weather.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{"parts": [{"text": "Visualize the current weather forecast for the next 5 days in San Francisco as a clean, modern weather chart. Add a visual on what I should wear each day"}]}],
"tools": [{"google_search": {}}],
"generationConfig": {
"responseModalities": ["TEXT", "IMAGE"],
"imageConfig": {"aspectRatio": "16:9"}
}
}'
```


The response includes `groundingMetadata`

which contains the following required
fields:

: Contains the HTML and CSS to render the required search suggestions.`searchEntryPoint`

: Returns the top 3 web sources used to ground the generated image`groundingChunks`


### Grounding with Google Search for Images (3.1 Flash)

Grounding with Google Search for images allows models to use web images retrieved via
Google Search as visual context for image generation. Image Search is a
new search type within the existing Grounding with Google Search tool,
functioning alongside standard [Web Search](#use-with-grounding).

To enable Image Search, configure the `googleSearch`

tool in your API request
and specify `imageSearch`

within the `searchTypes`

object. Image Search can be
used independently or together with Web Search.

Note that Grounding with Google Search for images can't be used to search for people.

### Python

```
from google import genai
prompt = "A detailed painting of a Timareta butterfly resting on a flower"
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=prompt,
config=types.GenerateContentConfig(
response_modalities=["IMAGE"],
tools=[
types.Tool(google_search=types.GoogleSearch(
search_types=types.SearchTypes(
web_search=types.WebSearch(),
image_search=types.ImageSearch()
)
))
]
)
)
# Display grounding sources if available
if response.candidates and response.candidates[0].grounding_metadata and response.candidates[0].grounding_metadata.search_entry_point:
display(HTML(response.candidates[0].grounding_metadata.search_entry_point.rendered_content))
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
async function main() {
const ai = new GoogleGenAI({});
const prompt = "A detailed painting of a Timareta butterfly resting on a flower";
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
config: {
responseModalities: ["IMAGE"],
tools: [
{
googleSearch: {
searchTypes: {
webSearch: {},
imageSearch: {}
}
}
}
]
}
});
// Display grounding sources if available
if (response.candidates && response.candidates[0].groundingMetadata && response.candidates[0].groundingMetadata.searchEntryPoint) {
console.log(response.candidates[0].groundingMetadata.searchEntryPoint.renderedContent);
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"google.golang.org/genai"
pb "google.golang.org/genai/schema"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
defer client.Close()
model := client.GenerativeModel("gemini-3.1-flash-image-preview")
model.Tools = []*pb.Tool{
{
GoogleSearch: &pb.GoogleSearch{
SearchTypes: &pb.SearchTypes{
WebSearch: &pb.WebSearch{},
ImageSearch: &pb.ImageSearch{},
},
},
},
}
model.GenerationConfig = &pb.GenerationConfig{
ResponseModalities: []pb.ResponseModality{genai.Image},
}
prompt := "A detailed painting of a Timareta butterfly resting on a flower"
resp, err := model.GenerateContent(ctx, genai.Text(prompt))
if err != nil {
log.Fatal(err)
}
if resp.Candidates[0].GroundingMetadata != nil && resp.Candidates[0].GroundingMetadata.SearchEntryPoint != nil {
fmt.Println(resp.Candidates[0].GroundingMetadata.SearchEntryPoint.RenderedContent)
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{"parts": [{"text": "A detailed painting of a Timareta butterfly resting on a flower"}]}],
"tools": [{"google_search": {"searchTypes": {"webSearch": {}, "imageSearch": {}}}}],
"generationConfig": {
"responseModalities": ["IMAGE"]
}
}'
```


**Display requirements**

When you use Image Search within Grounding with Google Search, you must comply with the following conditions:

**Source attribution**: You must provide a link to the webpage containing the source image (the "containing page," not the image file itself) in a manner that the user will recognize as a link.**Direct navigation**: If you also choose to display the source images, you must provide a direct, single-click path from the source images to its containing source webpage. Any other implementation that delays or abstracts the end user's access to the source webpage, including but not limited to any multi-click path or the use of an intermediate image viewer, is not permitted.

**Response**

For grounded responses using image search, the API provides clear attribution
and metadata to link its output to verified sources. Key fields in the
`groundingMetadata`

object include:

: The specific queries used by the model for visual context (image search).`imageSearchQueries`

: Contains source information for retrieved results. For image sources, these will be returned as redirect URLs using a new image chunk type. This chunk includes:`groundingChunks`

: The web page URL for attribution (the landing page).`uri`

: The direct image URL.`image_uri`


: Provides specific mappings that link the generated content to its relevant citation source in the chunks.`groundingSupports`

: Includes the "Google Search" chip containing compliant HTML and CSS to render Search Suggestions.`searchEntryPoint`


### Generate images up to 4K resolution

Gemini 3 image models generate 1K images by default but can also output 2K,
4K, and 512 (0.5K) (Gemini 3.1 Flash Image only) images. To generate higher
resolution assets, specify the `image_size`

in the `generation_config`

.

You must use an uppercase 'K' (e.g. 1K, 2K, 4K). The `512`

value does not use a 'K' suffix. Lowercase
parameters (e.g., 1k) will be rejected.

### Python

```
from google import genai
from google.genai import types
prompt = "Da Vinci style anatomical sketch of a dissected Monarch butterfly. Detailed drawings of the head, wings, and legs on textured parchment with notes in English."
aspect_ratio = "1:1" # "1:1","1:4","1:8","2:3","3:2","3:4","4:1","4:3","4:5","5:4","8:1","9:16","16:9","21:9"
resolution = "1K" # "512", "1K", "2K", "4K"
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=prompt,
config=types.GenerateContentConfig(
response_modalities=['TEXT', 'IMAGE'],
image_config=types.ImageConfig(
aspect_ratio=aspect_ratio,
image_size=resolution
),
)
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif image:= part.as_image():
image.save("butterfly.png")
```


### Javascript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const prompt =
'Da Vinci style anatomical sketch of a dissected Monarch butterfly. Detailed drawings of the head, wings, and legs on textured parchment with notes in English.';
const aspectRatio = '1:1';
const resolution = '1K';
const response = await ai.models.generateContent({
model: 'gemini-3.1-flash-image-preview',
contents: prompt,
config: {
responseModalities: ['TEXT', 'IMAGE'],
imageConfig: {
aspectRatio: aspectRatio,
imageSize: resolution,
},
},
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("image.png", buffer);
console.log("Image saved as image.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
defer client.Close()
model := client.GenerativeModel("gemini-3.1-flash-image-preview")
model.GenerationConfig = &pb.GenerationConfig{
ResponseModalities: []pb.ResponseModality{genai.Text, genai.Image},
ImageConfig: &pb.ImageConfig{
AspectRatio: "1:1",
ImageSize: "1K",
},
}
prompt := "Da Vinci style anatomical sketch of a dissected Monarch butterfly. Detailed drawings of the head, wings, and legs on textured parchment with notes in English."
resp, err := model.GenerateContent(ctx, genai.Text(prompt))
if err != nil {
log.Fatal(err)
}
for _, part := range resp.Candidates[0].Content.Parts {
if txt, ok := part.(genai.Text); ok {
fmt.Printf("%s", string(txt))
} else if img, ok := part.(genai.ImageData); ok {
err := os.WriteFile("butterfly.png", img.Data, 0644)
if err != nil {
log.Fatal(err)
}
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.GoogleSearch;
import com.google.genai.types.ImageConfig;
import com.google.genai.types.Part;
import com.google.genai.types.Tool;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
public class HiRes {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.imageConfig(ImageConfig.builder()
.aspectRatio("16:9")
.imageSize("4K")
.build())
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview", """
Da Vinci style anatomical sketch of a dissected Monarch butterfly.
Detailed drawings of the head, wings, and legs on textured
parchment with notes in English.
""",
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("butterfly.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{"parts": [{"text": "Da Vinci style anatomical sketch of a dissected Monarch butterfly. Detailed drawings of the head, wings, and legs on textured parchment with notes in English."}]}],
"tools": [{"google_search": {}}],
"generationConfig": {
"responseModalities": ["TEXT", "IMAGE"],
"imageConfig": {"aspectRatio": "1:1", "imageSize": "1K"}
}
}'
```


The following is an example image generated from this prompt:

### Thinking Process

Gemini 3 image models are thinking models that use a reasoning
process ("Thinking") for complex prompts. This feature is enabled by default and
cannot be disabled in the API. To learn more about the thinking process, see
the [Gemini Thinking](/gemini-api/docs/thinking) guide.

The model generates up to two interim images to test composition and logic. The last image within Thinking is also the final rendered image.

You can check the thoughts that lead to the final image being produced.

### Python

```
for part in response.parts:
if part.thought:
if part.text:
print(part.text)
elif image:= part.as_image():
image.show()
```


### Javascript

```
for (const part of response.candidates[0].content.parts) {
if (part.thought) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, 'base64');
fs.writeFileSync('image.png', buffer);
console.log('Image saved as image.png');
}
}
}
```


#### Controlling thinking levels

With Gemini 3.1 Flash Image, you can control the amount of thinking the model
uses to balance quality and latency. The default `thinkingLevel`

is `minimal`

,
and the supported levels are `minimal`

and `high`

. Setting the
`thinkingLevel`

to `minimal`

provides the lowest latency responses. Note that
minimal thinking does not mean the model uses no thinking at all.

You can add the `includeThoughts`

boolean to determine whether the model's
generated thoughts are returned in the response, or remain hidden.

### Python

```
from google import genai
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents="A futuristic city built inside a giant glass bottle floating in space",
config=types.GenerateContentConfig(
response_modalities=["IMAGE"],
thinking_config=types.ThinkingConfig(
thinking_level="High",
include_thoughts=True
),
)
)
for part in response.parts:
if part.thought: # Skip outputting thoughts
continue
if part.text:
display(Markdown(part.text))
elif image:= part.as_image():
image.show()
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: "A futuristic city built inside a giant glass bottle floating in space",
config: {
responseModalities: ["IMAGE"],
thinkingConfig: {
thinkingLevel: "High",
includeThoughts: true
},
},
});
for (const part of response.candidates[0].content.parts) {
if (part.thought) { // Skip outputting thoughts
continue;
}
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("image.png", buffer);
console.log("Image saved as image.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
pb "google.golang.org/genai/schema"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
defer client.Close()
model := client.GenerativeModel("gemini-3.1-flash-image-preview")
model.GenerationConfig = &pb.GenerationConfig{
ResponseModalities: []pb.ResponseModality{genai.Image},
ThinkingConfig: &pb.ThinkingConfig{
ThinkingLevel: "High",
IncludeThoughts: true,
},
}
prompt := "A futuristic city built inside a giant glass bottle floating in space"
resp, err := model.GenerateContent(ctx, genai.Text(prompt))
if err != nil {
log.Fatal(err)
}
for _, part := range resp.Candidates[0].Content.Parts {
if part.Thought { // Skip outputting thoughts
continue
}
if txt, ok := part.(genai.Text); ok {
fmt.Printf("%s", string(txt))
} else if img, ok := part.(genai.ImageData); ok {
err := os.WriteFile("image.png", img.Data, 0644)
if err != nil {
log.Fatal(err)
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{"parts": [{"text": "A futuristic city built inside a giant glass bottle floating in space"}]}],
"generationConfig": {
"responseModalities": ["IMAGE"],
"thinkingConfig": {
"thinkingLevel": "High",
"includeThoughts": true
}
}
}'
```


Note that thinking tokens are billed regardless of whether `includeThoughts`

is
set to `true`

or `false`

, as the [thinking process](#thinking-process) always
happens by default whether you view the process or not.

#### Thought Signatures

Thought signatures are encrypted representations of the
model's internal thought process and are used to preserve reasoning context
across multi-turn interactions. All responses include a `thought_signature`

field. As a general rule, if you receive a thought signature in a model
response, you should pass it back exactly as received when sending the
conversation history in the next turn. Failure to circulate thought signatures
may cause the response to fail. Check the [thought signature](/gemini-api/docs/thought-signatures)
documentation for more explanations of signatures overall.

Here is how thought signatures work:

- All
`inline_data`

parts with image`mimetype`

which are part of the response should have signature. - If there are some text parts at the beginning (before any image) right after the thoughts, the first text part should also have a signature.
- If
`inline_data`

parts with image`mimetype`

are part of thoughts, they won't have signatures.

The following code shows an example of where thought signatures are included:

```
[
{
"inline_data": {
"data": "<base64_image_data_0>",
"mime_type": "image/png"
},
"thought": true // Thoughts don't have signatures
},
{
"inline_data": {
"data": "<base64_image_data_1>",
"mime_type": "image/png"
},
"thought": true // Thoughts don't have signatures
},
{
"inline_data": {
"data": "<base64_image_data_2>",
"mime_type": "image/png"
},
"thought": true // Thoughts don't have signatures
},
{
"text": "Here is a step-by-step guide to baking macarons, presented in three separate images.\n\n### Step 1: Piping the Batter\n\nThe first step after making your macaron batter is to pipe it onto a baking sheet. This requires a steady hand to create uniform circles.\n\n",
"thought_signature": "<Signature_A>" // The first non-thought part always has a signature
},
{
"inline_data": {
"data": "<base64_image_data_3>",
"mime_type": "image/png"
},
"thought_signature": "<Signature_B>" // All image parts have a signatures
},
{
"text": "\n\n### Step 2: Baking and Developing Feet\n\nOnce piped, the macarons are baked in the oven. A key sign of a successful bake is the development of \"feet\"—the ruffled edge at the base of each macaron shell.\n\n"
// Follow-up text parts don't have signatures
},
{
"inline_data": {
"data": "<base64_image_data_4>",
"mime_type": "image/png"
},
"thought_signature": "<Signature_C>" // All image parts have a signatures
},
{
"text": "\n\n### Step 3: Assembling the Macaron\n\nThe final step is to pair the cooled macaron shells by size and sandwich them together with your desired filling, creating the classic macaron dessert.\n\n"
},
{
"inline_data": {
"data": "<base64_image_data_5>",
"mime_type": "image/png"
},
"thought_signature": "<Signature_D>" // All image parts have a signatures
}
]
```


## Other image generation modes

Gemini supports other image interaction modes based on prompt structure and context, including:

**Text to image(s) and text (interleaved):**Outputs images with related text.- Example prompt: "Generate an illustrated recipe for a paella."

**Image(s) and text to image(s) and text (interleaved)**: Uses input images and text to create new related images and text.- Example prompt: (With an image of a furnished room) "What other color sofas would work in my space? can you update the image?"


## Generate images in batch

If you need to generate a lot of images, you can use the
[Batch API](/gemini-api/docs/batch-api). You get higher
[rate limits](/gemini-api/docs/rate-limits) in exchange for a turnaround of up
to 24 hours.

Check the [Batch API image generation documentation](/gemini-api/docs/batch-api#image-generation) and the [cookbook](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Batch_mode.ipynb)
for Batch API image examples and code.

## Prompting guide and strategies

Mastering image generation starts with one fundamental principle:


Describe the scene, don't just list keywords.The model's core strength is its deep language understanding. A narrative, descriptive paragraph will almost always produce a better, more coherent image than a list of disconnected words.

### Prompts for generating images

The following strategies will help you create effective prompts to generate exactly the images you're looking for.

#### 1. Photorealistic scenes

For realistic images, use photography terms. Mention camera angles, lens types, lighting, and fine details to guide the model toward a photorealistic result.

### Template

```
A photorealistic [shot type] of [subject], [action or expression], set in
[environment]. The scene is illuminated by [lighting description], creating
a [mood] atmosphere. Captured with a [camera/lens details], emphasizing
[key textures and details]. The image should be in a [aspect ratio] format.
```


### Prompt

```
A photorealistic close-up portrait of an elderly Japanese ceramicist with
deep, sun-etched wrinkles and a warm, knowing smile. He is carefully
inspecting a freshly glazed tea bowl. The setting is his rustic,
sun-drenched workshop. The scene is illuminated by soft, golden hour light
streaming through a window, highlighting the fine texture of the clay.
Captured with an 85mm portrait lens, resulting in a soft, blurred background
(bokeh). The overall mood is serene and masterful. Vertical portrait
orientation.
```


### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents="A photorealistic close-up portrait of an elderly Japanese ceramicist with deep, sun-etched wrinkles and a warm, knowing smile. He is carefully inspecting a freshly glazed tea bowl. The setting is his rustic, sun-drenched workshop with pottery wheels and shelves of clay pots in the background. The scene is illuminated by soft, golden hour light streaming through a window, highlighting the fine texture of the clay and the fabric of his apron. Captured with an 85mm portrait lens, resulting in a soft, blurred background (bokeh). The overall mood is serene and masterful.",
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("photorealistic_example.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const prompt =
"A photorealistic close-up portrait of an elderly Japanese ceramicist with deep, sun-etched wrinkles and a warm, knowing smile. He is carefully inspecting a freshly glazed tea bowl. The setting is his rustic, sun-drenched workshop with pottery wheels and shelves of clay pots in the background. The scene is illuminated by soft, golden hour light streaming through a window, highlighting the fine texture of the clay and the fabric of his apron. Captured with an 85mm portrait lens, resulting in a soft, blurred background (bokeh). The overall mood is serene and masterful.";
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("photorealistic_example.png", buffer);
console.log("Image saved as photorealistic_example.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
genai.Text("A photorealistic close-up portrait of an elderly Japanese ceramicist with deep, sun-etched wrinkles and a warm, knowing smile. He is carefully inspecting a freshly glazed tea bowl. The setting is his rustic, sun-drenched workshop with pottery wheels and shelves of clay pots in the background. The scene is illuminated by soft, golden hour light streaming through a window, highlighting the fine texture of the clay and the fabric of his apron. Captured with an 85mm portrait lens, resulting in a soft, blurred background (bokeh). The overall mood is serene and masterful."),
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "photorealistic_example.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
public class PhotorealisticScene {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
"""
A photorealistic close-up portrait of an elderly Japanese ceramicist
with deep, sun-etched wrinkles and a warm, knowing smile. He is
carefully inspecting a freshly glazed tea bowl. The setting is his
rustic, sun-drenched workshop with pottery wheels and shelves of
clay pots in the background. The scene is illuminated by soft,
golden hour light streaming through a window, highlighting the
fine texture of the clay and the fabric of his apron. Captured
with an 85mm portrait lens, resulting in a soft, blurred
background (bokeh). The overall mood is serene and masterful.
""",
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("photorealistic_example.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "A photorealistic close-up portrait of an elderly Japanese ceramicist with deep, sun-etched wrinkles and a warm, knowing smile. He is carefully inspecting a freshly glazed tea bowl. The setting is his rustic, sun-drenched workshop with pottery wheels and shelves of clay pots in the background. The scene is illuminated by soft, golden hour light streaming through a window, highlighting the fine texture of the clay and the fabric of his apron. Captured with an 85mm portrait lens, resulting in a soft, blurred background (bokeh). The overall mood is serene and masterful."}
]
}]
}'
```


#### 2. Stylized illustrations & stickers

To create stickers, icons, or assets, be explicit about the style and request a transparent background.

### Template

```
A [style] sticker of a [subject], featuring [key characteristics] and a
[color palette]. The design should have [line style] and [shading style].
The background must be transparent.
```


### Prompt

```
A kawaii-style sticker of a happy red panda wearing a tiny bamboo hat. It's
munching on a green bamboo leaf. The design features bold, clean outlines,
simple cel-shading, and a vibrant color palette. The background must be white.
```


### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents="A kawaii-style sticker of a happy red panda wearing a tiny bamboo hat. It's munching on a green bamboo leaf. The design features bold, clean outlines, simple cel-shading, and a vibrant color palette. The background must be white.",
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("red_panda_sticker.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const prompt =
"A kawaii-style sticker of a happy red panda wearing a tiny bamboo hat. It's munching on a green bamboo leaf. The design features bold, clean outlines, simple cel-shading, and a vibrant color palette. The background must be white.";
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("red_panda_sticker.png", buffer);
console.log("Image saved as red_panda_sticker.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
genai.Text("A kawaii-style sticker of a happy red panda wearing a tiny bamboo hat. It's munching on a green bamboo leaf. The design features bold, clean outlines, simple cel-shading, and a vibrant color palette. The background must be white."),
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "red_panda_sticker.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
public class StylizedIllustration {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
"""
A kawaii-style sticker of a happy red panda wearing a tiny bamboo
hat. It's munching on a green bamboo leaf. The design features
bold, clean outlines, simple cel-shading, and a vibrant color
palette. The background must be white.
""",
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("red_panda_sticker.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "A kawaii-style sticker of a happy red panda wearing a tiny bamboo hat. It is munching on a green bamboo leaf. The design features bold, clean outlines, simple cel-shading, and a vibrant color palette. The background must be white."}
]
}]
}'
```


#### 3. Accurate text in images

Gemini excels at rendering text. Be clear about the text, the font style (descriptively), and the overall design. Use Gemini 3 Pro Image Preview for professional asset production.

### Template

```
Create a [image type] for [brand/concept] with the text "[text to render]"
in a [font style]. The design should be [style description], with a
[color scheme].
```


### Prompt

```
Create a modern, minimalist logo for a coffee shop called 'The Daily Grind'. The text should be in a clean, bold, sans-serif font. The color scheme is black and white. Put the logo in a circle. Use a coffee bean in a clever way.
```


### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents="Create a modern, minimalist logo for a coffee shop called 'The Daily Grind'. The text should be in a clean, bold, sans-serif font. The color scheme is black and white. Put the logo in a circle. Use a coffee bean in a clever way.",
config=types.GenerateContentConfig(
image_config=types.ImageConfig(
aspect_ratio="1:1",
)
)
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("logo_example.jpg")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const prompt =
"Create a modern, minimalist logo for a coffee shop called 'The Daily Grind'. The text should be in a clean, bold, sans-serif font. The color scheme is black and white. Put the logo in a circle. Use a coffee bean in a clever way.";
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
config: {
imageConfig: {
aspectRatio: "1:1",
},
},
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("logo_example.jpg", buffer);
console.log("Image saved as logo_example.jpg");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
genai.Text("Create a modern, minimalist logo for a coffee shop called 'The Daily Grind'. The text should be in a clean, bold, sans-serif font. The color scheme is black and white. Put the logo in a circle. Use a coffee bean in a clever way."),
&genai.GenerateContentConfig{
ImageConfig: &genai.ImageConfig{
AspectRatio: "1:1",
},
},
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "logo_example.jpg"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import com.google.genai.types.ImageConfig;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
public class AccurateTextInImages {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.imageConfig(ImageConfig.builder()
.aspectRatio("1:1")
.build())
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
"""
Create a modern, minimalist logo for a coffee shop called 'The Daily Grind'. The text should be in a clean, bold, sans-serif font. The color scheme is black and white. Put the logo in a circle. Use a coffee bean in a clever way.
""",
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("logo_example.jpg"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "Create a modern, minimalist logo for a coffee shop called The Daily Grind. The text should be in a clean, bold, sans-serif font. The color scheme is black and white. Put the logo in a circle. Use a coffee bean in a clever way."}
]
}],
"generationConfig": {
"imageConfig": {
"aspectRatio": "1:1"
}
}
}'
```


#### 4. Product mockups & commercial photography

Perfect for creating clean, professional product shots for ecommerce, advertising, or branding.

### Template

```
A high-resolution, studio-lit product photograph of a [product description]
on a [background surface/description]. The lighting is a [lighting setup,
e.g., three-point softbox setup] to [lighting purpose]. The camera angle is
a [angle type] to showcase [specific feature]. Ultra-realistic, with sharp
focus on [key detail]. [Aspect ratio].
```


### Prompt

```
A high-resolution, studio-lit product photograph of a minimalist ceramic
coffee mug in matte black, presented on a polished concrete surface. The
lighting is a three-point softbox setup designed to create soft, diffused
highlights and eliminate harsh shadows. The camera angle is a slightly
elevated 45-degree shot to showcase its clean lines. Ultra-realistic, with
sharp focus on the steam rising from the coffee. Square image.
```


### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents="A high-resolution, studio-lit product photograph of a minimalist ceramic coffee mug in matte black, presented on a polished concrete surface. The lighting is a three-point softbox setup designed to create soft, diffused highlights and eliminate harsh shadows. The camera angle is a slightly elevated 45-degree shot to showcase its clean lines. Ultra-realistic, with sharp focus on the steam rising from the coffee. Square image.",
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("product_mockup.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const prompt =
"A high-resolution, studio-lit product photograph of a minimalist ceramic coffee mug in matte black, presented on a polished concrete surface. The lighting is a three-point softbox setup designed to create soft, diffused highlights and eliminate harsh shadows. The camera angle is a slightly elevated 45-degree shot to showcase its clean lines. Ultra-realistic, with sharp focus on the steam rising from the coffee. Square image.";
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("product_mockup.png", buffer);
console.log("Image saved as product_mockup.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
genai.Text("A high-resolution, studio-lit product photograph of a minimalist ceramic coffee mug in matte black, presented on a polished concrete surface. The lighting is a three-point softbox setup designed to create soft, diffused highlights and eliminate harsh shadows. The camera angle is a slightly elevated 45-degree shot to showcase its clean lines. Ultra-realistic, with sharp focus on the steam rising from the coffee. Square image."),
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "product_mockup.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
public class ProductMockup {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
"""
A high-resolution, studio-lit product photograph of a minimalist
ceramic coffee mug in matte black, presented on a polished
concrete surface. The lighting is a three-point softbox setup
designed to create soft, diffused highlights and eliminate harsh
shadows. The camera angle is a slightly elevated 45-degree shot
to showcase its clean lines. Ultra-realistic, with sharp focus
on the steam rising from the coffee. Square image.
""",
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("product_mockup.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "A high-resolution, studio-lit product photograph of a minimalist ceramic coffee mug in matte black, presented on a polished concrete surface. The lighting is a three-point softbox setup designed to create soft, diffused highlights and eliminate harsh shadows. The camera angle is a slightly elevated 45-degree shot to showcase its clean lines. Ultra-realistic, with sharp focus on the steam rising from the coffee. Square image."}
]
}]
}'
```


#### 5. Minimalist & negative space design

Excellent for creating backgrounds for websites, presentations, or marketing materials where text will be overlaid.

### Template

```
A minimalist composition featuring a single [subject] positioned in the
[bottom-right/top-left/etc.] of the frame. The background is a vast, empty
[color] canvas, creating significant negative space. Soft, subtle lighting.
[Aspect ratio].
```


### Prompt

```
A minimalist composition featuring a single, delicate red maple leaf
positioned in the bottom-right of the frame. The background is a vast, empty
off-white canvas, creating significant negative space for text. Soft,
diffused lighting from the top left. Square image.
```


### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents="A minimalist composition featuring a single, delicate red maple leaf positioned in the bottom-right of the frame. The background is a vast, empty off-white canvas, creating significant negative space for text. Soft, diffused lighting from the top left. Square image.",
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("minimalist_design.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const prompt =
"A minimalist composition featuring a single, delicate red maple leaf positioned in the bottom-right of the frame. The background is a vast, empty off-white canvas, creating significant negative space for text. Soft, diffused lighting from the top left. Square image.";
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("minimalist_design.png", buffer);
console.log("Image saved as minimalist_design.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
genai.Text("A minimalist composition featuring a single, delicate red maple leaf positioned in the bottom-right of the frame. The background is a vast, empty off-white canvas, creating significant negative space for text. Soft, diffused lighting from the top left. Square image."),
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "minimalist_design.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
public class MinimalistDesign {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
"""
A minimalist composition featuring a single, delicate red maple
leaf positioned in the bottom-right of the frame. The background
is a vast, empty off-white canvas, creating significant negative
space for text. Soft, diffused lighting from the top left.
Square image.
""",
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("minimalist_design.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "A minimalist composition featuring a single, delicate red maple leaf positioned in the bottom-right of the frame. The background is a vast, empty off-white canvas, creating significant negative space for text. Soft, diffused lighting from the top left. Square image."}
]
}]
}'
```


#### 6. Sequential art (Comic panel / Storyboard)

Builds on character consistency and scene description to create panels for visual storytelling. For accuracy with text and storytelling ability, these prompts work best with Gemini 3 Pro and Gemini 3.1 Flash Image Preview.

### Template

```
Make a 3 panel comic in a [style]. Put the character in a [type of scene].
```


### Prompt

```
Make a 3 panel comic in a gritty, noir art style with high-contrast black and white inks. Put the character in a humurous scene.
```


### Python

```
from google import genai
from google.genai import types
from PIL import Image
client = genai.Client()
image_input = Image.open('/path/to/your/man_in_white_glasses.jpg')
text_input = "Make a 3 panel comic in a gritty, noir art style with high-contrast black and white inks. Put the character in a humurous scene."
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[text_input, image_input],
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("comic_panel.jpg")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imagePath = "/path/to/your/man_in_white_glasses.jpg";
const imageData = fs.readFileSync(imagePath);
const base64Image = imageData.toString("base64");
const prompt = [
{text: "Make a 3 panel comic in a gritty, noir art style with high-contrast black and white inks. Put the character in a humurous scene."},
{
inlineData: {
mimeType: "image/jpeg",
data: base64Image,
},
},
];
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("comic_panel.jpg", buffer);
console.log("Image saved as comic_panel.jpg");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
imagePath := "/path/to/your/man_in_white_glasses.jpg"
imgData, _ := os.ReadFile(imagePath)
parts := []*genai.Part{
genai.NewPartFromText("Make a 3 panel comic in a gritty, noir art style with high-contrast black and white inks. Put the character in a humurous scene."),
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/jpeg",
Data: imgData,
},
},
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
contents,
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "comic_panel.jpg"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class ComicPanel {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
Content.fromParts(
Part.fromText("""
Make a 3 panel comic in a gritty, noir art style with high-contrast black and white inks. Put the character in a humurous scene.
"""),
Part.fromBytes(
Files.readAllBytes(
Path.of("/path/to/your/man_in_white_glasses.jpg")),
"image/jpeg")),
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("comic_panel.jpg"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "Make a 3 panel comic in a gritty, noir art style with high-contrast black and white inks. Put the character in a humurous scene."},
{"inline_data": {"mime_type": "image/jpeg", "data": "<BASE64_IMAGE_DATA>"}}
]
}]
}'
```


Input |
Output |

#### 7. Grounding with Google Search

Use Google Search to generate images based on recent or real-time information. This is useful for news, weather, and other time-sensitive topics.

### Prompt

```
Make a simple but stylish graphic of last night's Arsenal game in the Champion's League
```


### Python

```
from google import genai
from google.genai import types
prompt = "Make a simple but stylish graphic of last night's Arsenal game in the Champion's League"
aspect_ratio = "16:9" # "1:1","1:4","1:8","2:3","3:2","3:4","4:1","4:3","4:5","5:4","8:1","9:16","16:9","21:9"
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=prompt,
config=types.GenerateContentConfig(
response_modalities=['Text', 'Image'],
image_config=types.ImageConfig(
aspect_ratio=aspect_ratio,
),
tools=[{"google_search": {}}]
)
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif image:= part.as_image():
image.save("football-score.jpg")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const prompt = "Make a simple but stylish graphic of last night's Arsenal game in the Champion's League";
const aspectRatio = '16:9';
const resolution = '2K';
const response = await ai.models.generateContent({
model: 'gemini-3.1-flash-image-preview',
contents: prompt,
config: {
responseModalities: ['TEXT', 'IMAGE'],
imageConfig: {
aspectRatio: aspectRatio,
imageSize: resolution,
},
tools: [{"google_search": {}}],
},
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("football-score.jpg", buffer);
console.log("Image saved as football-score.jpg");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
pb "google.golang.org/genai/schema"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
defer client.Close()
model := client.GenerativeModel("gemini-3.1-flash-image-preview")
model.Tools = []*pb.Tool{
pb.NewGoogleSearchTool(),
}
model.GenerationConfig = &pb.GenerationConfig{
ResponseModalities: []pb.ResponseModality{genai.Text, genai.Image},
ImageConfig: &pb.ImageConfig{
AspectRatio: "16:9",
},
}
prompt := "Make a simple but stylish graphic of last night's Arsenal game in the Champion's League"
resp, err := model.GenerateContent(ctx, genai.Text(prompt))
if err != nil {
log.Fatal(err)
}
for _, part := range resp.Candidates[0].Content.Parts {
if txt, ok := part.(genai.Text); ok {
fmt.Printf("%s", string(txt))
} else if img, ok := part.(genai.ImageData); ok {
err := os.WriteFile("football-score.jpg", img.Data, 0644)
if err != nil {
log.Fatal(err)
}
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.GoogleSearch;
import com.google.genai.types.ImageConfig;
import com.google.genai.types.Part;
import com.google.genai.types.Tool;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
public class SearchGrounding {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.imageConfig(ImageConfig.builder()
.aspectRatio("16:9")
.build())
.tools(Tool.builder()
.googleSearch(GoogleSearch.builder().build())
.build())
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview", """
Make a simple but stylish graphic of last night's Arsenal game in the Champion's League
""",
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("football-score.jpg"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{"parts": [{"text": "Make a simple but stylish graphic of last nights Arsenal game in the Champions League"}]}],
"tools": [{"google_search": {}}],
"generationConfig": {
"responseModalities": ["TEXT", "IMAGE"],
"imageConfig": {"aspectRatio": "16:9"}
}
}'
```


### Prompts for editing images

These examples show how to provide images alongside your text prompts for editing, composition, and style transfer.

#### 1. Adding and removing elements

Provide an image and describe your change. The model will match the original image's style, lighting, and perspective.

### Template

```
Using the provided image of [subject], please [add/remove/modify] [element]
to/from the scene. Ensure the change is [description of how the change should
integrate].
```


### Prompt

```
"Using the provided image of my cat, please add a small, knitted wizard hat
on its head. Make it look like it's sitting comfortably and matches the soft
lighting of the photo."
```


### Python

```
from google import genai
from google.genai import types
from PIL import Image
client = genai.Client()
# Base image prompt: "A photorealistic picture of a fluffy ginger cat sitting on a wooden floor, looking directly at the camera. Soft, natural light from a window."
image_input = Image.open('/path/to/your/cat_photo.png')
text_input = """Using the provided image of my cat, please add a small, knitted wizard hat on its head. Make it look like it's sitting comfortably and not falling off."""
# Generate an image from a text prompt
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[text_input, image_input],
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("cat_with_hat.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imagePath = "/path/to/your/cat_photo.png";
const imageData = fs.readFileSync(imagePath);
const base64Image = imageData.toString("base64");
const prompt = [
{ text: "Using the provided image of my cat, please add a small, knitted wizard hat on its head. Make it look like it's sitting comfortably and not falling off." },
{
inlineData: {
mimeType: "image/png",
data: base64Image,
},
},
];
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("cat_with_hat.png", buffer);
console.log("Image saved as cat_with_hat.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
imagePath := "/path/to/your/cat_photo.png"
imgData, _ := os.ReadFile(imagePath)
parts := []*genai.Part{
genai.NewPartFromText("Using the provided image of my cat, please add a small, knitted wizard hat on its head. Make it look like it's sitting comfortably and not falling off."),
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/png",
Data: imgData,
},
},
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
contents,
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "cat_with_hat.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class AddRemoveElements {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
Content.fromParts(
Part.fromText("""
Using the provided image of my cat, please add a small,
knitted wizard hat on its head. Make it look like it's
sitting comfortably and not falling off.
"""),
Part.fromBytes(
Files.readAllBytes(
Path.of("/path/to/your/cat_photo.png")),
"image/png")),
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("cat_with_hat.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d "{
\"contents\": [{
\"parts\":[
{\"text\": \"Using the provided image of my cat, please add a small, knitted wizard hat on its head. Make it look like it's sitting comfortably and not falling off.\"},
{
\"inline_data\": {
\"mime_type\":\"image/png\",
\"data\": \"<BASE64_IMAGE_DATA>\"
}
}
]
}]
}"
```


Input |
Output |

#### 2. Inpainting (Semantic masking)

Conversationally define a "mask" to edit a specific part of an image while leaving the rest untouched.

### Template

```
Using the provided image, change only the [specific element] to [new
element/description]. Keep everything else in the image exactly the same,
preserving the original style, lighting, and composition.
```


### Prompt

```
"Using the provided image of a living room, change only the blue sofa to be
a vintage, brown leather chesterfield sofa. Keep the rest of the room,
including the pillows on the sofa and the lighting, unchanged."
```


### Python

```
from google import genai
from google.genai import types
from PIL import Image
client = genai.Client()
# Base image prompt: "A wide shot of a modern, well-lit living room with a prominent blue sofa in the center. A coffee table is in front of it and a large window is in the background."
living_room_image = Image.open('/path/to/your/living_room.png')
text_input = """Using the provided image of a living room, change only the blue sofa to be a vintage, brown leather chesterfield sofa. Keep the rest of the room, including the pillows on the sofa and the lighting, unchanged."""
# Generate an image from a text prompt
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[living_room_image, text_input],
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("living_room_edited.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imagePath = "/path/to/your/living_room.png";
const imageData = fs.readFileSync(imagePath);
const base64Image = imageData.toString("base64");
const prompt = [
{
inlineData: {
mimeType: "image/png",
data: base64Image,
},
},
{ text: "Using the provided image of a living room, change only the blue sofa to be a vintage, brown leather chesterfield sofa. Keep the rest of the room, including the pillows on the sofa and the lighting, unchanged." },
];
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("living_room_edited.png", buffer);
console.log("Image saved as living_room_edited.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
imagePath := "/path/to/your/living_room.png"
imgData, _ := os.ReadFile(imagePath)
parts := []*genai.Part{
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/png",
Data: imgData,
},
},
genai.NewPartFromText("Using the provided image of a living room, change only the blue sofa to be a vintage, brown leather chesterfield sofa. Keep the rest of the room, including the pillows on the sofa and the lighting, unchanged."),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
contents,
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "living_room_edited.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class Inpainting {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
Content.fromParts(
Part.fromBytes(
Files.readAllBytes(
Path.of("/path/to/your/living_room.png")),
"image/png"),
Part.fromText("""
Using the provided image of a living room, change
only the blue sofa to be a vintage, brown leather
chesterfield sofa. Keep the rest of the room,
including the pillows on the sofa and the lighting,
unchanged.
""")),
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("living_room_edited.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d "{
\"contents\": [{
\"parts\":[
{
\"inline_data\": {
\"mime_type\":\"image/png\",
\"data\": \"<BASE64_IMAGE_DATA>\"
}
},
{\"text\": \"Using the provided image of a living room, change only the blue sofa to be a vintage, brown leather chesterfield sofa. Keep the rest of the room, including the pillows on the sofa and the lighting, unchanged.\"}
]
}]
}"
```


Input |
Output |

#### 3. Style transfer

Provide an image and ask the model to recreate its content in a different artistic style.

### Template

```
Transform the provided photograph of [subject] into the artistic style of [artist/art style]. Preserve the original composition but render it with [description of stylistic elements].
```


### Prompt

```
"Transform the provided photograph of a modern city street at night into the artistic style of Vincent van Gogh's 'Starry Night'. Preserve the original composition of buildings and cars, but render all elements with swirling, impasto brushstrokes and a dramatic palette of deep blues and bright yellows."
```


### Python

```
from google import genai
from google.genai import types
from PIL import Image
client = genai.Client()
# Base image prompt: "A photorealistic, high-resolution photograph of a busy city street in New York at night, with bright neon signs, yellow taxis, and tall skyscrapers."
city_image = Image.open('/path/to/your/city.png')
text_input = """Transform the provided photograph of a modern city street at night into the artistic style of Vincent van Gogh's 'Starry Night'. Preserve the original composition of buildings and cars, but render all elements with swirling, impasto brushstrokes and a dramatic palette of deep blues and bright yellows."""
# Generate an image from a text prompt
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[city_image, text_input],
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("city_style_transfer.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imagePath = "/path/to/your/city.png";
const imageData = fs.readFileSync(imagePath);
const base64Image = imageData.toString("base64");
const prompt = [
{
inlineData: {
mimeType: "image/png",
data: base64Image,
},
},
{ text: "Transform the provided photograph of a modern city street at night into the artistic style of Vincent van Gogh's 'Starry Night'. Preserve the original composition of buildings and cars, but render all elements with swirling, impasto brushstrokes and a dramatic palette of deep blues and bright yellows." },
];
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("city_style_transfer.png", buffer);
console.log("Image saved as city_style_transfer.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
imagePath := "/path/to/your/city.png"
imgData, _ := os.ReadFile(imagePath)
parts := []*genai.Part{
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/png",
Data: imgData,
},
},
genai.NewPartFromText("Transform the provided photograph of a modern city street at night into the artistic style of Vincent van Gogh's 'Starry Night'. Preserve the original composition of buildings and cars, but render all elements with swirling, impasto brushstrokes and a dramatic palette of deep blues and bright yellows."),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
contents,
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "city_style_transfer.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class StyleTransfer {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
Content.fromParts(
Part.fromBytes(
Files.readAllBytes(
Path.of("/path/to/your/city.png")),
"image/png"),
Part.fromText("""
Transform the provided photograph of a modern city
street at night into the artistic style of
Vincent van Gogh's 'Starry Night'. Preserve the
original composition of buildings and cars, but
render all elements with swirling, impasto
brushstrokes and a dramatic palette of deep blues
and bright yellows.
""")),
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("city_style_transfer.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d "{
\"contents\": [{
\"parts\":[
{
\"inline_data\": {
\"mime_type\":\"image/png\",
\"data\": \"<BASE64_IMAGE_DATA>\"
}
},
{\"text\": \"Transform the provided photograph of a modern city street at night into the artistic style of Vincent van Gogh's 'Starry Night'. Preserve the original composition of buildings and cars, but render all elements with swirling, impasto brushstrokes and a dramatic palette of deep blues and bright yellows.\"}
]
}]
}"
```


Input |
Output |

#### 4. Advanced composition: Combining multiple images

Provide multiple images as context to create a new, composite scene. This is perfect for product mockups or creative collages.

### Template

```
Create a new image by combining the elements from the provided images. Take
the [element from image 1] and place it with/on the [element from image 2].
The final image should be a [description of the final scene].
```


### Prompt

```
"Create a professional e-commerce fashion photo. Take the blue floral dress
from the first image and let the woman from the second image wear it.
Generate a realistic, full-body shot of the woman wearing the dress, with
the lighting and shadows adjusted to match the outdoor environment."
```


### Python

```
from google import genai
from google.genai import types
from PIL import Image
client = genai.Client()
# Base image prompts:
# 1. Dress: "A professionally shot photo of a blue floral summer dress on a plain white background, ghost mannequin style."
# 2. Model: "Full-body shot of a woman with her hair in a bun, smiling, standing against a neutral grey studio background."
dress_image = Image.open('/path/to/your/dress.png')
model_image = Image.open('/path/to/your/model.png')
text_input = """Create a professional e-commerce fashion photo. Take the blue floral dress from the first image and let the woman from the second image wear it. Generate a realistic, full-body shot of the woman wearing the dress, with the lighting and shadows adjusted to match the outdoor environment."""
# Generate an image from a text prompt
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[dress_image, model_image, text_input],
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("fashion_ecommerce_shot.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imagePath1 = "/path/to/your/dress.png";
const imageData1 = fs.readFileSync(imagePath1);
const base64Image1 = imageData1.toString("base64");
const imagePath2 = "/path/to/your/model.png";
const imageData2 = fs.readFileSync(imagePath2);
const base64Image2 = imageData2.toString("base64");
const prompt = [
{
inlineData: {
mimeType: "image/png",
data: base64Image1,
},
},
{
inlineData: {
mimeType: "image/png",
data: base64Image2,
},
},
{ text: "Create a professional e-commerce fashion photo. Take the blue floral dress from the first image and let the woman from the second image wear it. Generate a realistic, full-body shot of the woman wearing the dress, with the lighting and shadows adjusted to match the outdoor environment." },
];
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("fashion_ecommerce_shot.png", buffer);
console.log("Image saved as fashion_ecommerce_shot.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
imgData1, _ := os.ReadFile("/path/to/your/dress.png")
imgData2, _ := os.ReadFile("/path/to/your/model.png")
parts := []*genai.Part{
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/png",
Data: imgData1,
},
},
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/png",
Data: imgData2,
},
},
genai.NewPartFromText("Create a professional e-commerce fashion photo. Take the blue floral dress from the first image and let the woman from the second image wear it. Generate a realistic, full-body shot of the woman wearing the dress, with the lighting and shadows adjusted to match the outdoor environment."),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
contents,
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "fashion_ecommerce_shot.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class AdvancedComposition {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
Content.fromParts(
Part.fromBytes(
Files.readAllBytes(
Path.of("/path/to/your/dress.png")),
"image/png"),
Part.fromBytes(
Files.readAllBytes(
Path.of("/path/to/your/model.png")),
"image/png"),
Part.fromText("""
Create a professional e-commerce fashion photo.
Take the blue floral dress from the first image and
let the woman from the second image wear it. Generate
a realistic, full-body shot of the woman wearing the
dress, with the lighting and shadows adjusted to
match the outdoor environment.
""")),
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("fashion_ecommerce_shot.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d "{
\"contents\": [{
\"parts\":[
{
\"inline_data\": {
\"mime_type\":\"image/png\",
\"data\": \"<BASE64_IMAGE_DATA_1>\"
}
},
{
\"inline_data\": {
\"mime_type\":\"image/png\",
\"data\": \"<BASE64_IMAGE_DATA_2>\"
}
},
{\"text\": \"Create a professional e-commerce fashion photo. Take the blue floral dress from the first image and let the woman from the second image wear it. Generate a realistic, full-body shot of the woman wearing the dress, with the lighting and shadows adjusted to match the outdoor environment.\"}
]
}]
}"
```


Input 1 |
Input 2 |
Output |

#### 5. High-fidelity detail preservation

To ensure critical details (like a face or logo) are preserved during an edit, describe them in great detail along with your edit request.

### Template

```
Using the provided images, place [element from image 2] onto [element from
image 1]. Ensure that the features of [element from image 1] remain
completely unchanged. The added element should [description of how the
element should integrate].
```


### Prompt

```
"Take the first image of the woman with brown hair, blue eyes, and a neutral
expression. Add the logo from the second image onto her black t-shirt.
Ensure the woman's face and features remain completely unchanged. The logo
should look like it's naturally printed on the fabric, following the folds
of the shirt."
```


### Python

```
from google import genai
from google.genai import types
from PIL import Image
client = genai.Client()
# Base image prompts:
# 1. Woman: "A professional headshot of a woman with brown hair and blue eyes, wearing a plain black t-shirt, against a neutral studio background."
# 2. Logo: "A simple, modern logo with the letters 'G' and 'A' in a white circle."
woman_image = Image.open('/path/to/your/woman.png')
logo_image = Image.open('/path/to/your/logo.png')
text_input = """Take the first image of the woman with brown hair, blue eyes, and a neutral expression. Add the logo from the second image onto her black t-shirt. Ensure the woman's face and features remain completely unchanged. The logo should look like it's naturally printed on the fabric, following the folds of the shirt."""
# Generate an image from a text prompt
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[woman_image, logo_image, text_input],
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("woman_with_logo.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imagePath1 = "/path/to/your/woman.png";
const imageData1 = fs.readFileSync(imagePath1);
const base64Image1 = imageData1.toString("base64");
const imagePath2 = "/path/to/your/logo.png";
const imageData2 = fs.readFileSync(imagePath2);
const base64Image2 = imageData2.toString("base64");
const prompt = [
{
inlineData: {
mimeType: "image/png",
data: base64Image1,
},
},
{
inlineData: {
mimeType: "image/png",
data: base64Image2,
},
},
{ text: "Take the first image of the woman with brown hair, blue eyes, and a neutral expression. Add the logo from the second image onto her black t-shirt. Ensure the woman's face and features remain completely unchanged. The logo should look like it's naturally printed on the fabric, following the folds of the shirt." },
];
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("woman_with_logo.png", buffer);
console.log("Image saved as woman_with_logo.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
imgData1, _ := os.ReadFile("/path/to/your/woman.png")
imgData2, _ := os.ReadFile("/path/to/your/logo.png")
parts := []*genai.Part{
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/png",
Data: imgData1,
},
},
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/png",
Data: imgData2,
},
},
genai.NewPartFromText("Take the first image of the woman with brown hair, blue eyes, and a neutral expression. Add the logo from the second image onto her black t-shirt. Ensure the woman's face and features remain completely unchanged. The logo should look like it's naturally printed on the fabric, following the folds of the shirt."),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
contents,
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "woman_with_logo.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class HighFidelity {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
Content.fromParts(
Part.fromBytes(
Files.readAllBytes(
Path.of("/path/to/your/woman.png")),
"image/png"),
Part.fromBytes(
Files.readAllBytes(
Path.of("/path/to/your/logo.png")),
"image/png"),
Part.fromText("""
Take the first image of the woman with brown hair,
blue eyes, and a neutral expression. Add the logo
from the second image onto her black t-shirt.
Ensure the woman's face and features remain
completely unchanged. The logo should look like
it's naturally printed on the fabric, following
the folds of the shirt.
""")),
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("woman_with_logo.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d "{
\"contents\": [{
\"parts\":[
{
\"inline_data\": {
\"mime_type\":\"image/png\",
\"data\": \"<BASE64_IMAGE_DATA_1>\"
}
},
{
\"inline_data\": {
\"mime_type\":\"image/png\",
\"data\": \"<BASE64_IMAGE_DATA_2>\"
}
},
{\"text\": \"Take the first image of the woman with brown hair, blue eyes, and a neutral expression. Add the logo from the second image onto her black t-shirt. Ensure the woman's face and features remain completely unchanged. The logo should look like it's naturally printed on the fabric, following the folds of the shirt.\"}
]
}]
}"
```


Input 1 |
Input 2 |
Output |

#### 6. Bring something to life

Upload a rough sketch or drawing and ask the model to refine it into a finished image.

### Template

```
Turn this rough [medium] sketch of a [subject] into a [style description]
photo. Keep the [specific features] from the sketch but add [new details/materials].
```


### Prompt

```
"Turn this rough pencil sketch of a futuristic car into a polished photo of the finished concept car in a showroom. Keep the sleek lines and low profile from the sketch but add metallic blue paint and neon rim lighting."
```


### Python

```
from google import genai
from PIL import Image
client = genai.Client()
# Base image prompt: "A rough pencil sketch of a flat sports car on white paper."
sketch_image = Image.open('/path/to/your/car_sketch.png')
text_input = """Turn this rough pencil sketch of a futuristic car into a polished photo of the finished concept car in a showroom. Keep the sleek lines and low profile from the sketch but add metallic blue paint and neon rim lighting."""
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[sketch_image, text_input],
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("car_photo.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imagePath = "/path/to/your/car_sketch.png";
const imageData = fs.readFileSync(imagePath);
const base64Image = imageData.toString("base64");
const prompt = [
{
inlineData: {
mimeType: "image/png",
data: base64Image,
},
},
{ text: "Turn this rough pencil sketch of a futuristic car into a polished photo of the finished concept car in a showroom. Keep the sleek lines and low profile from the sketch but add metallic blue paint and neon rim lighting." },
];
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("car_photo.png", buffer);
console.log("Image saved as car_photo.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
imgData, _ := os.ReadFile("/path/to/your/car_sketch.png")
parts := []*genai.Part{
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/png",
Data: imgData,
},
},
genai.NewPartFromText("Turn this rough pencil sketch of a futuristic car into a polished photo of the finished concept car in a showroom. Keep the sleek lines and low profile from the sketch but add metallic blue paint and neon rim lighting."),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
contents,
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "car_photo.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class BringToLife {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
Content.fromParts(
Part.fromBytes(
Files.readAllBytes(
Path.of("/path/to/your/car_sketch.png")),
"image/png"),
Part.fromText("""
Turn this rough pencil sketch of a futuristic car into a polished photo of the finished concept car in a showroom. Keep the sleek lines and low profile from the sketch but add metallic blue paint and neon rim lighting.
""")),
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("car_photo.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d "{
\"contents\": [{
\"parts\":[
{
\"inline_data\": {
\"mime_type\":\"image/png\",
\"data\": \"<BASE64_IMAGE_DATA>\"
}
},
{\"text\": \"Turn this rough pencil sketch of a futuristic car into a polished photo of the finished concept car in a showroom. Keep the sleek lines and low profile from the sketch but add metallic blue paint and neon rim lighting.\"}
]
}]
}"
```


Input |
Output |

#### 7. Character consistency: 360 view

You can generate 360-degree views of a character by iteratively prompting for different angles. For best results, include previously generated images in subsequent prompts to maintain consistency. For complex poses, include a reference image of the desired pose.

### Template

```
A studio portrait of [person] against [background], [looking forward/in profile looking right/etc.]
```


### Prompt

```
A studio portrait of this man against white, in profile looking right
```


### Python

```
from google import genai
from google.genai import types
from PIL import Image
client = genai.Client()
image_input = Image.open('/path/to/your/man_in_white_glasses.jpg')
text_input = """A studio portrait of this man against white, in profile looking right"""
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[text_input, image_input],
)
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
image = part.as_image()
image.save("man_right_profile.png")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imagePath = "/path/to/your/man_in_white_glasses.jpg";
const imageData = fs.readFileSync(imagePath);
const base64Image = imageData.toString("base64");
const prompt = [
{ text: "A studio portrait of this man against white, in profile looking right" },
{
inlineData: {
mimeType: "image/jpeg",
data: base64Image,
},
},
];
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const imageData = part.inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("man_right_profile.png", buffer);
console.log("Image saved as man_right_profile.png");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
imagePath := "/path/to/your/man_in_white_glasses.jpg"
imgData, _ := os.ReadFile(imagePath)
parts := []*genai.Part{
genai.NewPartFromText("A studio portrait of this man against white, in profile looking right"),
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/jpeg",
Data: imgData,
},
},
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
contents,
)
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
imageBytes := part.InlineData.Data
outputFilename := "man_right_profile.png"
_ = os.WriteFile(outputFilename, imageBytes, 0644)
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class CharacterConsistency {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("TEXT", "IMAGE")
.build();
GenerateContentResponse response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
Content.fromParts(
Part.fromText("""
A studio portrait of this man against white, in profile looking right
"""),
Part.fromBytes(
Files.readAllBytes(
Path.of("/path/to/your/man_in_white_glasses.jpg")),
"image/jpeg")),
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("man_right_profile.png"), blob.data().get());
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d "{
\"contents\": [{
\"parts\":[
{\"text\": \"A studio portrait of this man against white, in profile looking right\"},
{
\"inline_data\": {
\"mime_type\":\"image/jpeg\",
\"data\": \"<BASE64_IMAGE_DATA>\"
}
}
]
}]
}"
```


Input |
Output 1 |
Output 2 |

### Best Practices

To elevate your results from good to great, incorporate these professional strategies into your workflow.

**Be Hyper-Specific:**The more detail you provide, the more control you have. Instead of "fantasy armor," describe it: "ornate elven plate armor, etched with silver leaf patterns, with a high collar and pauldrons shaped like falcon wings."**Provide Context and Intent:**Explain the*purpose*of the image. The model's understanding of context will influence the final output. For example, "Create a logo for a high-end, minimalist skincare brand" will yield better results than just "Create a logo."**Iterate and Refine:**Don't expect a perfect image on the first try. Use the conversational nature of the model to make small changes. Follow up with prompts like, "That's great, but can you make the lighting a bit warmer?" or "Keep everything the same, but change the character's expression to be more serious."**Use Step-by-Step Instructions:**For complex scenes with many elements, break your prompt into steps. "First, create a background of a serene, misty forest at dawn. Then, in the foreground, add a moss-covered ancient stone altar. Finally, place a single, glowing sword on top of the altar."**Use "Semantic Negative Prompts":**Instead of saying "no cars," describe the desired scene positively: "an empty, deserted street with no signs of traffic."**Control the Camera:**Use photographic and cinematic language to control the composition. Terms like`wide-angle shot`

,`macro shot`

,`low-angle perspective`

.

## Limitations

- For best performance, use the following languages: EN, ar-EG, de-DE, es-MX, fr-FR, hi-IN, id-ID, it-IT, ja-JP, ko-KR, pt-BR, ru-RU, ua-UA, vi-VN, zh-CN.
- Image generation does not support audio or video inputs.
- The model won't always follow the exact number of image outputs that the user explicitly asks for.
`gemini-2.5-flash-image`

works best with up to 3 images as input, while`gemini-3-pro-image-preview`

supports 5 images with high fidelity, and up to 14 images in total.`gemini-3.1-flash-image-preview`

supports character resemblance of up to 4 characters and the fidelity of up to 10 objects in a single workflow.- When generating text for an image, Gemini works best if you first generate the text and then ask for an image with the text.
`gemini-3.1-flash-image-preview`

Grounding with Google Search does not support using real-world images of people from web search at this time.- All generated images include a
[SynthID watermark](/responsible/docs/safeguards/synthid).

## Optional configurations

You can optionally configure the response modalities and aspect ratio of the
model's output in the `config`

field of `generate_content`

calls.

### Output types

The model defaults to returning text and image responses
(i.e. `response_modalities=['Text', 'Image']`

).
You can configure the response to return only images without text using
`response_modalities=['Image']`

.

### Python

```
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[prompt],
config=types.GenerateContentConfig(
response_modalities=['Image']
)
)
```


### JavaScript

```
const response = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
config: {
responseModalities: ['Image']
}
});
```


### Go

```
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
genai.Text("Create a picture of a nano banana dish in a " +
" fancy restaurant with a Gemini theme"),
&genai.GenerateContentConfig{
ResponseModalities: "Image",
},
)
```


### Java

```
response = client.models.generateContent(
"gemini-3.1-flash-image-preview",
prompt,
GenerateContentConfig.builder()
.responseModalities("IMAGE")
.build());
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme"}
]
}],
"generationConfig": {
"responseModalities": ["Image"]
}
}'
```


### Aspect ratios and image size

The model defaults to matching the output image size to that of your input
image, or otherwise generates 1:1 squares.
You can control the aspect ratio of the output image using the `aspect_ratio`

field under `image_config`

in the response request, shown here:

### Python

```
# For gemini-2.5-flash-image
response = client.models.generate_content(
model="gemini-2.5-flash-image",
contents=[prompt],
config=types.GenerateContentConfig(
image_config=types.ImageConfig(
aspect_ratio="16:9",
)
)
)
# For gemini-3.1-flash-image-preview and gemini-3-pro-image-preview
response = client.models.generate_content(
model="gemini-3.1-flash-image-preview",
contents=[prompt],
config=types.GenerateContentConfig(
image_config=types.ImageConfig(
aspect_ratio="16:9",
image_size="2K",
)
)
)
```


### JavaScript

```
// For gemini-2.5-flash-image
const response = await ai.models.generateContent({
model: "gemini-2.5-flash-image",
contents: prompt,
config: {
imageConfig: {
aspectRatio: "16:9",
},
}
});
// For gemini-3.1-flash-image-preview and gemini-3-pro-image-preview
const response_gemini3 = await ai.models.generateContent({
model: "gemini-3.1-flash-image-preview",
contents: prompt,
config: {
imageConfig: {
aspectRatio: "16:9",
imageSize: "2K",
},
}
});
```


### Go

```
// For gemini-2.5-flash-image
result, _ := client.Models.GenerateContent(
ctx,
"gemini-2.5-flash-image",
genai.Text("Create a picture of a nano banana dish in a " +
" fancy restaurant with a Gemini theme"),
&genai.GenerateContentConfig{
ImageConfig: &genai.ImageConfig{
AspectRatio: "16:9",
},
}
)
// For gemini-3.1-flash-image-preview and gemini-3-pro-image-preview
result_gemini3, _ := client.Models.GenerateContent(
ctx,
"gemini-3.1-flash-image-preview",
genai.Text("Create a picture of a nano banana dish in a " +
" fancy restaurant with a Gemini theme"),
&genai.GenerateContentConfig{
ImageConfig: &genai.ImageConfig{
AspectRatio: "16:9",
ImageSize: "2K",
},
}
)
```


### Java

```
// For gemini-2.5-flash-image
response = client.models.generateContent(
"gemini-2.5-flash-image",
prompt,
GenerateContentConfig.builder()
.imageConfig(ImageConfig.builder()
.aspectRatio("16:9")
.build())
.build());
// For gemini-3.1-flash-image-preview and gemini-3-pro-image-preview
response_gemini3 = client.models.generateContent(
"gemini-3.1-flash-image-preview",
prompt,
GenerateContentConfig.builder()
.imageConfig(ImageConfig.builder()
.aspectRatio("16:9")
.imageSize("2K")
.build())
.build());
```


### REST

```
# For gemini-2.5-flash-image
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
"contents": [{
"parts": [
{"text": "Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme"}
]
}],
"generationConfig": {
"imageConfig": {
"aspectRatio": "16:9"
}
}
}'
# For gemini-3-pro-image-preview
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
"contents": [{
"parts": [
{"text": "Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme"}
]
}],
"generationConfig": {
"imageConfig": {
"aspectRatio": "16:9",
"imageSize": "2K"
}
}
}'
```


The different ratios available and the size of the image generated are listed in the following tables:

### 3.1 Flash Image Preview

| Aspect ratio | 512 resolution | 0.5K tokens | 1K resolution | 1K tokens | 2K resolution | 2K tokens | 4K resolution | 4K tokens |
|---|---|---|---|---|---|---|---|---|
1:1 |
512x512 | 747 | 1024x1024 | 1120 | 2048x2048 | 1680 | 4096x4096 | 2520 |
1:4 |
256x1024 | 747 | 512x2048 | 1120 | 1024x4096 | 1680 | 2048x8192 | 2520 |
1:8 |
192x1536 | 747 | 384x3072 | 1120 | 768x6144 | 1680 | 1536x12288 | 2520 |
2:3 |
424x632 | 747 | 848x1264 | 1120 | 1696x2528 | 1680 | 3392x5056 | 2520 |
3:2 |
632x424 | 747 | 1264x848 | 1120 | 2528x1696 | 1680 | 5056x3392 | 2520 |
3:4 |
448x600 | 747 | 896x1200 | 1120 | 1792x2400 | 1680 | 3584x4800 | 2520 |
4:1 |
1024x256 | 747 | 2048x512 | 1120 | 4096x1024 | 1680 | 8192x2048 | 2520 |
4:3 |
600x448 | 747 | 1200x896 | 1120 | 2400x1792 | 1680 | 4800x3584 | 2520 |
4:5 |
464x576 | 747 | 928x1152 | 1120 | 1856x2304 | 1680 | 3712x4608 | 2520 |
5:4 |
576x464 | 747 | 1152x928 | 1120 | 2304x1856 | 1680 | 4608x3712 | 2520 |
8:1 |
1536x192 | 747 | 3072x384 | 1120 | 6144x768 | 1680 | 12288x1536 | 2520 |
9:16 |
384x688 | 747 | 768x1376 | 1120 | 1536x2752 | 1680 | 3072x5504 | 2520 |
16:9 |
688x384 | 747 | 1376x768 | 1120 | 2752x1536 | 1680 | 5504x3072 | 2520 |
21:9 |
792x168 | 747 | 1584x672 | 1120 | 3168x1344 | 1680 | 6336x2688 | 2520 |

### 3 Pro Image Preview

| Aspect ratio | 1K resolution | 1K tokens | 2K resolution | 2K tokens | 4K resolution | 4K tokens |
|---|---|---|---|---|---|---|
1:1 |
1024x1024 | 1120 | 2048x2048 | 1120 | 4096x4096 | 2000 |
2:3 |
848x1264 | 1120 | 1696x2528 | 1120 | 3392x5056 | 2000 |
3:2 |
1264x848 | 1120 | 2528x1696 | 1120 | 5056x3392 | 2000 |
3:4 |
896x1200 | 1120 | 1792x2400 | 1120 | 3584x4800 | 2000 |
4:3 |
1200x896 | 1120 | 2400x1792 | 1120 | 4800x3584 | 2000 |
4:5 |
928x1152 | 1120 | 1856x2304 | 1120 | 3712x4608 | 2000 |
5:4 |
1152x928 | 1120 | 2304x1856 | 1120 | 4608x3712 | 2000 |
9:16 |
768x1376 | 1120 | 1536x2752 | 1120 | 3072x5504 | 2000 |
16:9 |
1376x768 | 1120 | 2752x1536 | 1120 | 5504x3072 | 2000 |
21:9 |
1584x672 | 1120 | 3168x1344 | 1120 | 6336x2688 | 2000 |

### Gemini 2.5 Flash Image

| Aspect ratio | Resolution | Tokens |
|---|---|---|
| 1:1 | 1024x1024 | 1290 |
| 2:3 | 832x1248 | 1290 |
| 3:2 | 1248x832 | 1290 |
| 3:4 | 864x1184 | 1290 |
| 4:3 | 1184x864 | 1290 |
| 4:5 | 896x1152 | 1290 |
| 5:4 | 1152x896 | 1290 |
| 9:16 | 768x1344 | 1290 |
| 16:9 | 1344x768 | 1290 |
| 21:9 | 1536x672 | 1290 |

## Model selection

Choose the model best suited for your specific use case.

**Gemini 3.1 Flash Image Preview (Nano Banana 2 Preview)**should be your go-to image generation model, as the best all around performance and intelligence to cost and latency balance. Check the model[pricing](/gemini-api/docs/pricing#gemini-3.1-flash-image-preview)and[capabilities](/gemini-api/docs/models/gemini-3.1-flash-image-preview)page for more details.**Gemini 3 Pro Image Preview (Nano Banana Pro Preview)**is designed for professional asset production and complex instructions. This model features real-world grounding using Google Search, a default "Thinking" process that refines composition prior to generation, and can generate images of up to 4K resolutions. Check the model[pricing](/gemini-api/docs/pricing#gemini-3-pro-image-preview)and[capabilities](/gemini-api/docs/models/gemini-3-pro-image-preview)page for more details.**Gemini 2.5 Flash Image (Nano Banana)**is designed for speed and efficiency. This model is optimized for high-volume, low-latency tasks and generates images at 1024px resolution. Check the model[pricing](/gemini-api/docs/pricing#gemini-2.5-flash-image)and[capabilities](/gemini-api/docs/models/gemini-2.5-flash-image)page for more details.

### When to use Imagen

In addition to using Gemini's built-in image generation capabilities, you can
also access [Imagen](/gemini-api/docs/imagen), our specialized image generation
model, through the Gemini API.

Imagen 4 should be your go-to model when starting to generate images with Imagen. Choose Imagen 4 Ultra for advanced use-cases or when you need the best image quality (note that can only generate one image at a time).

## What's next

- Find more examples and code samples in the
[cookbook guide](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Get_Started_Nano_Banana.ipynb). - Check out the
[Veo guide](/gemini-api/docs/video)to learn how to generate videos with the Gemini API. - To learn more about Gemini models, see
[Gemini models](/gemini-api/docs/models/gemini).

---

## Source: https://ai.google.dev/gemini-api/docs/video

To learn about video understanding, see the

[Video understanding]guide.

[Veo 3.1](https://deepmind.google/models/veo/) is Google's state-of-the-art
model for generating high-fidelity, 8-second 720p, 1080p or 4k videos featuring
stunning realism and natively generated audio. You can access
this model programmatically using the Gemini API. To learn more about the
available Veo model variants, see the [Model Versions](#model-versions) section.

Veo 3.1 excels at a wide range of visual and cinematic styles and introduces several new capabilities:

**Portrait videos**: Choose between landscape (`16:9`

) and portrait (`9:16`

) videos.**Video extension**: Extend videos that were previously generated using Veo.**Frame-specific generation**: Generate a video by specifying the first and/or last frames.**Image-based direction**: Use up to three reference images to guide the content of your generated video.

For more information about writing effective text prompts for video generation,
see the [Veo prompt guide](#prompt-guide)

## Text to video generation

Choose an example to see how to generate a video with dialogue, cinematic realism, or creative animation:

### Python

```
import time
from google import genai
from google.genai import types
client = genai.Client()
prompt = """A close up of two people staring at a cryptic drawing on a wall, torchlight flickering.
A man murmurs, 'This must be it. That's the secret code.' The woman looks at him and whispering excitedly, 'What did you find?'"""
operation = client.models.generate_videos(
model="veo-3.1-generate-preview",
prompt=prompt,
)
# Poll the operation status until the video is ready.
while not operation.done:
print("Waiting for video generation to complete...")
time.sleep(10)
operation = client.operations.get(operation)
# Download the generated video.
generated_video = operation.response.generated_videos[0]
client.files.download(file=generated_video.video)
generated_video.video.save("dialogue_example.mp4")
print("Generated video saved to dialogue_example.mp4")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
const prompt = `A close up of two people staring at a cryptic drawing on a wall, torchlight flickering.
A man murmurs, 'This must be it. That's the secret code.' The woman looks at him and whispering excitedly, 'What did you find?'`;
let operation = await ai.models.generateVideos({
model: "veo-3.1-generate-preview",
prompt: prompt,
});
// Poll the operation status until the video is ready.
while (!operation.done) {
console.log("Waiting for video generation to complete...")
await new Promise((resolve) => setTimeout(resolve, 10000));
operation = await ai.operations.getVideosOperation({
operation: operation,
});
}
// Download the generated video.
ai.files.download({
file: operation.response.generatedVideos[0].video,
downloadPath: "dialogue_example.mp4",
});
console.log(`Generated video saved to dialogue_example.mp4`);
```


### Go

```
package main
import (
"context"
"log"
"os"
"time"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
prompt := `A close up of two people staring at a cryptic drawing on a wall, torchlight flickering.
A man murmurs, 'This must be it. That's the secret code.' The woman looks at him and whispering excitedly, 'What did you find?'`
operation, _ := client.Models.GenerateVideos(
ctx,
"veo-3.1-generate-preview",
prompt,
nil,
nil,
)
// Poll the operation status until the video is ready.
for !operation.Done {
log.Println("Waiting for video generation to complete...")
time.Sleep(10 * time.Second)
operation, _ = client.Operations.GetVideosOperation(ctx, operation, nil)
}
// Download the generated video.
video := operation.Response.GeneratedVideos[0]
client.Files.Download(ctx, video.Video, nil)
fname := "dialogue_example.mp4"
_ = os.WriteFile(fname, video.Video.VideoBytes, 0644)
log.Printf("Generated video saved to %s\n", fname)
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateVideosOperation;
import com.google.genai.types.Video;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
class GenerateVideoFromText {
public static void main(String[] args) throws Exception {
Client client = new Client();
String prompt = "A close up of two people staring at a cryptic drawing on a wall, torchlight flickering.\n" +
"A man murmurs, 'This must be it. That's the secret code.' The woman looks at him and whispering excitedly, 'What did you find?'";
GenerateVideosOperation operation =
client.models.generateVideos("veo-3.1-generate-preview", prompt, null, null);
// Poll the operation status until the video is ready.
while (!operation.done().isPresent() || !operation.done().get()) {
System.out.println("Waiting for video generation to complete...");
Thread.sleep(10000);
operation = client.operations.getVideosOperation(operation, null);
}
// Download the generated video.
Video video = operation.response().get().generatedVideos().get().get(0).video().get();
Path path = Paths.get("dialogue_example.mp4");
client.files.download(video, path.toString(), null);
if (video.videoBytes().isPresent()) {
Files.write(path, video.videoBytes().get());
System.out.println("Generated video saved to dialogue_example.mp4");
}
}
}
```


### REST

```
# Note: This script uses jq to parse the JSON response.
# GEMINI API Base URL
BASE_URL="https://generativelanguage.googleapis.com/v1beta"
# Send request to generate video and capture the operation name into a variable.
operation_name=$(curl -s "${BASE_URL}/models/veo-3.1-generate-preview:predictLongRunning" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-X "POST" \
-d '{
"instances": [{
"prompt": "A close up of two people staring at a cryptic drawing on a wall, torchlight flickering. A man murmurs, \"This must be it. That'\''s the secret code.\" The woman looks at him and whispering excitedly, \"What did you find?\""
}
]
}' | jq -r .name)
# Poll the operation status until the video is ready
while true; do
# Get the full JSON status and store it in a variable.
status_response=$(curl -s -H "x-goog-api-key: $GEMINI_API_KEY" "${BASE_URL}/${operation_name}")
# Check the "done" field from the JSON stored in the variable.
is_done=$(echo "${status_response}" | jq .done)
if [ "${is_done}" = "true" ]; then
# Extract the download URI from the final response.
video_uri=$(echo "${status_response}" | jq -r '.response.generateVideoResponse.generatedSamples[0].video.uri')
echo "Downloading video from: ${video_uri}"
# Download the video using the URI and API key and follow redirects.
curl -L -o dialogue_example.mp4 -H "x-goog-api-key: $GEMINI_API_KEY" "${video_uri}"
break
fi
# Wait for 5 seconds before checking again.
sleep 10
done
```


### Control the aspect ratio

Veo 3.1 lets you create landscape (`16:9`

, the default setting) or portrait
(`9:16`

) videos. You can tell the model which one you want using the
`aspect_ratio`

parameter:

### Python

```
import time
from google import genai
from google.genai import types
client = genai.Client()
prompt = """A montage of pizza making: a chef tossing and flattening the floury dough, ladling rich red tomato sauce in a spiral, sprinkling mozzarella cheese and pepperoni, and a final shot of the bubbling golden-brown pizza, upbeat electronic music with a rhythmical beat is playing, high energy professional video."""
operation = client.models.generate_videos(
model="veo-3.1-generate-preview",
prompt=prompt,
config=types.GenerateVideosConfig(
aspect_ratio="9:16",
),
)
# Poll the operation status until the video is ready.
while not operation.done:
print("Waiting for video generation to complete...")
time.sleep(10)
operation = client.operations.get(operation)
# Download the generated video.
generated_video = operation.response.generated_videos[0]
client.files.download(file=generated_video.video)
generated_video.video.save("pizza_making.mp4")
print("Generated video saved to pizza_making.mp4")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
const prompt = `A montage of pizza making: a chef tossing and flattening the floury dough, ladling rich red tomato sauce in a spiral, sprinkling mozzarella cheese and pepperoni, and a final shot of the bubbling golden-brown pizza, upbeat electronic music with a rhythmical beat is playing, high energy professional video.`;
let operation = await ai.models.generateVideos({
model: "veo-3.1-generate-preview",
prompt: prompt,
config: {
aspectRatio: "9:16",
},
});
// Poll the operation status until the video is ready.
while (!operation.done) {
console.log("Waiting for video generation to complete...")
await new Promise((resolve) => setTimeout(resolve, 10000));
operation = await ai.operations.getVideosOperation({
operation: operation,
});
}
// Download the generated video.
ai.files.download({
file: operation.response.generatedVideos[0].video,
downloadPath: "pizza_making.mp4",
});
console.log(`Generated video saved to pizza_making.mp4`);
```


### Go

```
package main
import (
"context"
"log"
"os"
"time"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
prompt := `A montage of pizza making: a chef tossing and flattening the floury dough, ladling rich red tomato sauce in a spiral, sprinkling mozzarella cheese and pepperoni, and a final shot of the bubbling golden-brown pizza, upbeat electronic music with a rhythmical beat is playing, high energy professional video.`
videoConfig := &genai.GenerateVideosConfig{
AspectRatio: "9:16",
}
operation, _ := client.Models.GenerateVideos(
ctx,
"veo-3.1-generate-preview",
prompt,
nil,
videoConfig,
)
// Poll the operation status until the video is ready.
for !operation.Done {
log.Println("Waiting for video generation to complete...")
time.Sleep(10 * time.Second)
operation, _ = client.Operations.GetVideosOperation(ctx, operation, nil)
}
// Download the generated video.
video := operation.Response.GeneratedVideos[0]
client.Files.Download(ctx, video.Video, nil)
fname := "pizza_making.mp4"
_ = os.WriteFile(fname, video.Video.VideoBytes, 0644)
log.Printf("Generated video saved to %s\n", fname)
}
```


### REST

```
# Note: This script uses jq to parse the JSON response.
# GEMINI API Base URL
BASE_URL="https://generativelanguage.googleapis.com/v1beta"
# Send request to generate video and capture the operation name into a variable.
operation_name=$(curl -s "${BASE_URL}/models/veo-3.1-generate-preview:predictLongRunning" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-X "POST" \
-d '{
"instances": [{
"prompt": "A montage of pizza making: a chef tossing and flattening the floury dough, ladling rich red tomato sauce in a spiral, sprinkling mozzarella cheese and pepperoni, and a final shot of the bubbling golden-brown pizza, upbeat electronic music with a rhythmical beat is playing, high energy professional video."
}
],
"parameters": {
"aspectRatio": "9:16"
}
}' | jq -r .name)
# Poll the operation status until the video is ready
while true; do
# Get the full JSON status and store it in a variable.
status_response=$(curl -s -H "x-goog-api-key: $GEMINI_API_KEY" "${BASE_URL}/${operation_name}")
# Check the "done" field from the JSON stored in the variable.
is_done=$(echo "${status_response}" | jq .done)
if [ "${is_done}" = "true" ]; then
# Extract the download URI from the final response.
video_uri=$(echo "${status_response}" | jq -r '.response.generateVideoResponse.generatedSamples[0].video.uri')
echo "Downloading video from: ${video_uri}"
# Download the video using the URI and API key and follow redirects.
curl -L -o pizza_making.mp4 -H "x-goog-api-key: $GEMINI_API_KEY" "${video_uri}"
break
fi
# Wait for 5 seconds before checking again.
sleep 10
done
```


### Control the resolution

Veo 3.1 can also directly generate 720p, 1080p or 4k videos.

Note that the higher the resolution, the higher the latency will be. 4k videos
are also more pricey (cf. [pricing](/gemini-api/docs/pricing#veo-3.1)).

[Video extension](#extending_veo_videos) is also limited to 720p videos.

### Python

```
import time
from google import genai
from google.genai import types
client = genai.Client()
prompt = """A stunning drone view of the Grand Canyon during a flamboyant sunset that highlights the canyon's colors. The drone slowly flies towards the sun then accelerates, dives and flies inside the canyon."""
operation = client.models.generate_videos(
model="veo-3.1-generate-preview",
prompt=prompt,
config=types.GenerateVideosConfig(
resolution="4k",
),
)
# Poll the operation status until the video is ready.
while not operation.done:
print("Waiting for video generation to complete...")
time.sleep(10)
operation = client.operations.get(operation)
# Download the generated video.
generated_video = operation.response.generated_videos[0]
client.files.download(file=generated_video.video)
generated_video.video.save("4k_grand_canyon.mp4")
print("Generated video saved to 4k_grand_canyon.mp4")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
const prompt = `A stunning drone view of the Grand Canyon during a flamboyant sunset that highlights the canyon's colors. The drone slowly flies towards the sun then accelerates, dives and flies inside the canyon.`;
let operation = await ai.models.generateVideos({
model: "veo-3.1-generate-preview",
prompt: prompt,
config: {
resolution: "4k",
},
});
// Poll the operation status until the video is ready.
while (!operation.done) {
console.log("Waiting for video generation to complete...")
await new Promise((resolve) => setTimeout(resolve, 10000));
operation = await ai.operations.getVideosOperation({
operation: operation,
});
}
// Download the generated video.
ai.files.download({
file: operation.response.generatedVideos[0].video,
downloadPath: "4k_grand_canyon.mp4",
});
console.log(`Generated video saved to 4k_grand_canyon.mp4`);
```


### Go

```
package main
import (
"context"
"log"
"os"
"time"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
prompt := `A stunning drone view of the Grand Canyon during a flamboyant sunset that highlights the canyon's colors. The drone slowly flies towards the sun then accelerates, dives and flies inside the canyon.`
videoConfig := &genai.GenerateVideosConfig{
Resolution: "4k",
}
operation, _ := client.Models.GenerateVideos(
ctx,
"veo-3.1-generate-preview",
prompt,
nil,
videoConfig,
)
// Poll the operation status until the video is ready.
for !operation.Done {
log.Println("Waiting for video generation to complete...")
time.Sleep(10 * time.Second)
operation, _ = client.Operations.GetVideosOperation(ctx, operation, nil)
}
// Download the generated video.
video := operation.Response.GeneratedVideos[0]
client.Files.Download(ctx, video.Video, nil)
fname := "4k_grand_canyon.mp4"
_ = os.WriteFile(fname, video.Video.VideoBytes, 0644)
log.Printf("Generated video saved to %s\n", fname)
}
```


### REST

```
# Note: This script uses jq to parse the JSON response.
# GEMINI API Base URL
BASE_URL="https://generativelanguage.googleapis.com/v1beta"
# Send request to generate video and capture the operation name into a variable.
operation_name=$(curl -s "${BASE_URL}/models/veo-3.1-generate-preview:predictLongRunning" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-X "POST" \
-d '{
"instances": [{
"prompt": "A stunning drone view of the Grand Canyon during a flamboyant sunset that highlights the canyon'\''s colors. The drone slowly flies towards the sun then accelerates, dives and flies inside the canyon."
}
],
"parameters": {
"resolution": "4k"
}
}' | jq -r .name)
# Poll the operation status until the video is ready
while true; do
# Get the full JSON status and store it in a variable.
status_response=$(curl -s -H "x-goog-api-key: $GEMINI_API_KEY" "${BASE_URL}/${operation_name}")
# Check the "done" field from the JSON stored in the variable.
is_done=$(echo "${status_response}" | jq .done)
if [ "${is_done}" = "true" ]; then
# Extract the download URI from the final response.
video_uri=$(echo "${status_response}" | jq -r '.response.generateVideoResponse.generatedSamples[0].video.uri')
echo "Downloading video from: ${video_uri}"
# Download the video using the URI and API key and follow redirects.
curl -L -o 4k_grand_canyon.mp4 -H "x-goog-api-key: $GEMINI_API_KEY" "${video_uri}"
break
fi
# Wait for 5 seconds before checking again.
sleep 10
done
```


## Image to video generation

The following code demonstrates generating an image using
[Gemini 2.5 Flash Image aka Nano Banana](/gemini-api/docs/image-generation),
then using that image as the
starting frame for generating a video with Veo 3.1.

### Python

```
import time
from google import genai
client = genai.Client()
prompt = "Panning wide shot of a calico kitten sleeping in the sunshine"
# Step 1: Generate an image with Nano Banana.
image = client.models.generate_content(
model="gemini-2.5-flash-image",
contents=prompt,
config={"response_modalities":['IMAGE']}
)
# Step 2: Generate video with Veo 3.1 using the image.
operation = client.models.generate_videos(
model="veo-3.1-generate-preview",
prompt=prompt,
image=image.parts[0].as_image(),
)
# Poll the operation status until the video is ready.
while not operation.done:
print("Waiting for video generation to complete...")
time.sleep(10)
operation = client.operations.get(operation)
# Download the video.
video = operation.response.generated_videos[0]
client.files.download(file=video.video)
video.video.save("veo3_with_image_input.mp4")
print("Generated video saved to veo3_with_image_input.mp4")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
const prompt = "Panning wide shot of a calico kitten sleeping in the sunshine";
// Step 1: Generate an image with Nano Banana.
const imageResponse = await ai.models.generateContent({
model: "gemini-2.5-flash-image",
prompt: prompt,
});
// Step 2: Generate video with Veo 3.1 using the image.
let operation = await ai.models.generateVideos({
model: "veo-3.1-generate-preview",
prompt: prompt,
image: {
imageBytes: imageResponse.generatedImages[0].image.imageBytes,
mimeType: "image/png",
},
});
// Poll the operation status until the video is ready.
while (!operation.done) {
console.log("Waiting for video generation to complete...")
await new Promise((resolve) => setTimeout(resolve, 10000));
operation = await ai.operations.getVideosOperation({
operation: operation,
});
}
// Download the video.
ai.files.download({
file: operation.response.generatedVideos[0].video,
downloadPath: "veo3_with_image_input.mp4",
});
console.log(`Generated video saved to veo3_with_image_input.mp4`);
```


### Go

```
package main
import (
"context"
"log"
"os"
"time"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
prompt := "Panning wide shot of a calico kitten sleeping in the sunshine"
// Step 1: Generate an image with Nano Banana.
imageResponse, err := client.Models.GenerateContent(
ctx,
"gemini-2.5-flash-image",
prompt,
nil, // GenerateImagesConfig
)
if err != nil {
log.Fatal(err)
}
// Step 2: Generate video with Veo 3.1 using the image.
operation, err := client.Models.GenerateVideos(
ctx,
"veo-3.1-generate-preview",
prompt,
imageResponse.GeneratedImages[0].Image,
nil, // GenerateVideosConfig
)
if err != nil {
log.Fatal(err)
}
// Poll the operation status until the video is ready.
for !operation.Done {
log.Println("Waiting for video generation to complete...")
time.Sleep(10 * time.Second)
operation, _ = client.Operations.GetVideosOperation(ctx, operation, nil)
}
// Download the video.
video := operation.Response.GeneratedVideos[0]
client.Files.Download(ctx, video.Video, nil)
fname := "veo3_with_image_input.mp4"
_ = os.WriteFile(fname, video.Video.VideoBytes, 0644)
log.Printf("Generated video saved to %s\n", fname)
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateVideosOperation;
import com.google.genai.types.Image;
import com.google.genai.types.Video;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
class GenerateVideoFromImage {
public static void main(String[] args) throws Exception {
Client client = new Client();
String prompt = "Panning wide shot of a calico kitten sleeping in the sunshine";
// Step 1: Generate an image with Nano Banana:
// ...
// We assume 'image' contains the generated image from step 1,
// or is loaded from a file:
Image image = Image.fromFile("path/to/your/image.png");
// Step 2: Generate video with Veo 3.1 using the image.
GenerateVideosOperation operation =
client.models.generateVideos("veo-3.1-generate-preview", prompt, image, null);
// Poll the operation status until the video is ready.
while (!operation.done().isPresent() || !operation.done().get()) {
System.out.println("Waiting for video generation to complete...");
Thread.sleep(10000);
operation = client.operations.getVideosOperation(operation, null);
}
// Download the video.
Video video = operation.response().get().generatedVideos().get().get(0).video().get();
Path path = Paths.get("veo3_with_image_input.mp4");
client.files.download(video, path.toString(), null);
if (video.videoBytes().isPresent()) {
Files.write(path, video.videoBytes().get());
System.out.println("Generated video saved to veo3_with_image_input.mp4");
}
}
}
```


### Using reference images

Veo 3.1 now accepts up to 3 reference images to guide your generated video's content. Provide images of a person, character, or product to preserve the subject's appearance in the output video.

For example, using these three images generated with
[Nano Banana](/gemini-api/docs/image-generation) as references with a
[well-written prompt](#use-reference-images) creates the following video:

``dress_image`` |
``woman_image`` |
``glasses_image`` |
|---|---|---|

### Python

```
import time
from google import genai
client = genai.Client()
prompt = "The video opens with a medium, eye-level shot of a beautiful woman with dark hair and warm brown eyes. She wears a magnificent, high-fashion flamingo dress with layers of pink and fuchsia feathers, complemented by whimsical pink, heart-shaped sunglasses. She walks with serene confidence through the crystal-clear, shallow turquoise water of a sun-drenched lagoon. The camera slowly pulls back to a medium-wide shot, revealing the breathtaking scene as the dress's long train glides and floats gracefully on the water's surface behind her. The cinematic, dreamlike atmosphere is enhanced by the vibrant colors of the dress against the serene, minimalist landscape, capturing a moment of pure elegance and high-fashion fantasy."
dress_reference = types.VideoGenerationReferenceImage(
image=dress_image, # Generated separately with Nano Banana
reference_type="asset"
)
sunglasses_reference = types.VideoGenerationReferenceImage(
image=glasses_image, # Generated separately with Nano Banana
reference_type="asset"
)
woman_reference = types.VideoGenerationReferenceImage(
image=woman_image, # Generated separately with Nano Banana
reference_type="asset"
)
operation = client.models.generate_videos(
model="veo-3.1-generate-preview",
prompt=prompt,
config=types.GenerateVideosConfig(
reference_images=[dress_reference, glasses_reference, woman_reference],
),
)
# Poll the operation status until the video is ready.
while not operation.done:
print("Waiting for video generation to complete...")
time.sleep(10)
operation = client.operations.get(operation)
# Download the video.
video = operation.response.generated_videos[0]
client.files.download(file=video.video)
video.video.save("veo3.1_with_reference_images.mp4")
print("Generated video saved to veo3.1_with_reference_images.mp4")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
const prompt = "The video opens with a medium, eye-level shot of a beautiful woman with dark hair and warm brown eyes. She wears a magnificent, high-fashion flamingo dress with layers of pink and fuchsia feathers, complemented by whimsical pink, heart-shaped sunglasses. She walks with serene confidence through the crystal-clear, shallow turquoise water of a sun-drenched lagoon. The camera slowly pulls back to a medium-wide shot, revealing the breathtaking scene as the dress's long train glides and floats gracefully on the water's surface behind her. The cinematic, dreamlike atmosphere is enhanced by the vibrant colors of the dress against the serene, minimalist landscape, capturing a moment of pure elegance and high-fashion fantasy.";
// dressImage, glassesImage, womanImage generated separately with Nano Banana
// and available as objects like { imageBytes: "...", mimeType: "image/png" }
const dressReference = {
image: dressImage,
referenceType: "asset",
};
const sunglassesReference = {
image: glassesImage,
referenceType: "asset",
};
const womanReference = {
image: womanImage,
referenceType: "asset",
};
let operation = await ai.models.generateVideos({
model: "veo-3.1-generate-preview",
prompt: prompt,
config: {
referenceImages: [
dressReference,
sunglassesReference,
womanReference,
],
},
});
// Poll the operation status until the video is ready.
while (!operation.done) {
console.log("Waiting for video generation to complete...");
await new Promise((resolve) => setTimeout(resolve, 10000));
operation = await ai.operations.getVideosOperation({
operation: operation,
});
}
// Download the video.
ai.files.download({
file: operation.response.generatedVideos[0].video,
downloadPath: "veo3.1_with_reference_images.mp4",
});
console.log(`Generated video saved to veo3.1_with_reference_images.mp4`);
```


### Go

```
package main
import (
"context"
"log"
"os"
"time"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
prompt := `The video opens with a medium, eye-level shot of a beautiful woman with dark hair and warm brown eyes. She wears a magnificent, high-fashion flamingo dress with layers of pink and fuchsia feathers, complemented by whimsical pink, heart-shaped sunglasses. She walks with serene confidence through the crystal-clear, shallow turquoise water of a sun-drenched lagoon. The camera slowly pulls back to a medium-wide shot, revealing the breathtaking scene as the dress's long train glides and floats gracefully on the water's surface behind her. The cinematic, dreamlike atmosphere is enhanced by the vibrant colors of the dress against the serene, minimalist landscape, capturing a moment of pure elegance and high-fashion fantasy.`
// dressImage, glassesImage, womanImage generated separately with Nano Banana
// and available as *genai.Image objects.
var dressImage, glassesImage, womanImage *genai.Image
dressReference := &genai.VideoGenerationReferenceImage{
Image: dressImage,
ReferenceType: "asset",
}
sunglassesReference := &genai.VideoGenerationReferenceImage{
Image: glassesImage,
ReferenceType: "asset",
}
womanReference := &genai.VideoGenerationReferenceImage{
Image: womanImage,
ReferenceType: "asset",
}
operation, _ := client.Models.GenerateVideos(
ctx,
"veo-3.1-generate-preview",
prompt,
nil, // image
&genai.GenerateVideosConfig{
ReferenceImages: []*genai.VideoGenerationReferenceImage{
dressReference,
sunglassesReference,
womanReference,
},
},
)
// Poll the operation status until the video is ready.
for !operation.Done {
log.Println("Waiting for video generation to complete...")
time.Sleep(10 * time.Second)
operation, _ = client.Operations.GetVideosOperation(ctx, operation, nil)
}
// Download the video.
video := operation.Response.GeneratedVideos[0]
client.Files.Download(ctx, video.Video, nil)
fname := "veo3.1_with_reference_images.mp4"
_ = os.WriteFile(fname, video.Video.VideoBytes, 0644)
log.Printf("Generated video saved to %s\n", fname)
}
```


### REST

```
# Note: This script uses jq to parse the JSON response.
# It assumes dress_image_base64, glasses_image_base64, and woman_image_base64
# contain base64-encoded image data.
# GEMINI API Base URL
BASE_URL="https://generativelanguage.googleapis.com/v1beta"
# Send request to generate video and capture the operation name into a variable.
operation_name=$(curl -s "${BASE_URL}/models/veo-3.1-generate-preview:predictLongRunning" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-X "POST" \
-d '{
"instances": [{
"prompt": "The video opens with a medium, eye-level shot of a beautiful woman with dark hair and warm brown eyes. She wears a magnificent, high-fashion flamingo dress with layers of pink and fuchsia feathers, complemented by whimsical pink, heart-shaped sunglasses. She walks with serene confidence through the crystal-clear, shallow turquoise water of a sun-drenched lagoon. The camera slowly pulls back to a medium-wide shot, revealing the breathtaking scene as the dress'\''s long train glides and floats gracefully on the water'\''s surface behind her. The cinematic, dreamlike atmosphere is enhanced by the vibrant colors of the dress against the serene, minimalist landscape, capturing a moment of pure elegance and high-fashion fantasy.",
"referenceImages": [
{
"image": {"inlineData": {"mimeType": "image/png", "data": "'"$dress_image_base64"'"}},
"referenceType": "asset"
},
{
"image": {"inlineData": {"mimeType": "image/png", "data": "'"$glasses_image_base64"'"}},
"referenceType": "asset"
},
{
"image": {"inlineData": {"mimeType": "image/png", "data": "'"$woman_image_base64"'"}},
"referenceType": "asset"
}
]
}],
}' | jq -r .name)
# Poll the operation status until the video is ready
while true; do
# Get the full JSON status and store it in a variable.
status_response=$(curl -s -H "x-goog-api-key: $GEMINI_API_KEY" "${BASE_URL}/${operation_name}")
# Check the "done" field from the JSON stored in the variable.
is_done=$(echo "${status_response}" | jq .done)
if [ "${is_done}" = "true" ]; then
# Extract the download URI from the final response.
video_uri=$(echo "${status_response}" | jq -r '.response.generateVideoResponse.generatedSamples[0].video.uri')
echo "Downloading video from: ${video_uri}"
# Download the video using the URI and API key and follow redirects.
curl -L -o veo3.1_with_reference_images.mp4 -H "x-goog-api-key: $GEMINI_API_KEY" "${video_uri}"
break
fi
# Wait for 10 seconds before checking again.
sleep 10
done
```


### Using first and last frames

Veo 3.1 lets you create videos using interpolation, or specifying the first and
last frames of the video. For information about writing effective text prompts
for video generation, see the [Veo prompt guide](#use-reference-images).

### Python

```
import time
from google import genai
client = genai.Client()
prompt = "A cinematic, haunting video. A ghostly woman with long white hair and a flowing dress swings gently on a rope swing beneath a massive, gnarled tree in a foggy, moonlit clearing. The fog thickens and swirls around her, and she slowly fades away, vanishing completely. The empty swing is left swaying rhythmically on its own in the eerie silence."
operation = client.models.generate_videos(
model="veo-3.1-generate-preview",
prompt=prompt,
image=first_image, # The starting frame is passed as a primary input
config=types.GenerateVideosConfig(
last_frame=last_image # The ending frame is passed as a generation constraint in the config
),
)
# Poll the operation status until the video is ready.
while not operation.done:
print("Waiting for video generation to complete...")
time.sleep(10)
operation = client.operations.get(operation)
# Download the video.
video = operation.response.generated_videos[0]
client.files.download(file=video.video)
video.video.save("veo3.1_with_interpolation.mp4")
print("Generated video saved to veo3.1_with_interpolation.mp4")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
const prompt = "A cinematic, haunting video. A ghostly woman with long white hair and a flowing dress swings gently on a rope swing beneath a massive, gnarled tree in a foggy, moonlit clearing. The fog thickens and swirls around her, and she slowly fades away, vanishing completely. The empty swing is left swaying rhythmically on its own in the eerie silence.";
// firstImage and lastImage generated separately with Nano Banana
// and available as objects like { imageBytes: "...", mimeType: "image/png" }
let operation = await ai.models.generateVideos({
model: "veo-3.1-generate-preview",
prompt: prompt,
image: firstImage, // The starting frame is passed as a primary input
config: {
lastFrame: lastImage, // The ending frame is passed as a generation constraint in the config
},
});
// Poll the operation status until the video is ready.
while (!operation.done) {
console.log("Waiting for video generation to complete...")
await new Promise((resolve) => setTimeout(resolve, 10000));
operation = await ai.operations.getVideosOperation({
operation: operation,
});
}
// Download the video.
ai.files.download({
file: operation.response.generatedVideos[0].video,
downloadPath: "veo3.1_with_interpolation.mp4",
});
console.log(`Generated video saved to veo3.1_with_interpolation.mp4`);
```


### Go

```
package main
import (
"context"
"log"
"os"
"time"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
prompt := `A cinematic, haunting video. A ghostly woman with long white hair and a flowing dress swings gently on a rope swing beneath a massive, gnarled tree in a foggy, moonlit clearing. The fog thickens and swirls around her, and she slowly fades away, vanishing completely. The empty swing is left swaying rhythmically on its own in the eerie silence.`
// firstImage and lastImage generated separately with Nano Banana
// and available as *genai.Image objects.
var firstImage, lastImage *genai.Image
operation, _ := client.Models.GenerateVideos(
ctx,
"veo-3.1-generate-preview",
prompt,
firstImage, // The starting frame is passed as a primary input
&genai.GenerateVideosConfig{
LastFrame: lastImage, // The ending frame is passed as a generation constraint in the config
},
)
// Poll the operation status until the video is ready.
for !operation.Done {
log.Println("Waiting for video generation to complete...")
time.Sleep(10 * time.Second)
operation, _ = client.Operations.GetVideosOperation(ctx, operation, nil)
}
// Download the video.
video := operation.Response.GeneratedVideos[0]
client.Files.Download(ctx, video.Video, nil)
fname := "veo3.1_with_interpolation.mp4"
_ = os.WriteFile(fname, video.Video.VideoBytes, 0644)
log.Printf("Generated video saved to %s\n", fname)
}
```


### REST

```
# Note: This script uses jq to parse the JSON response.
# It assumes first_image_base64 and last_image_base64
# contain base64-encoded image data.
# GEMINI API Base URL
BASE_URL="https://generativelanguage.googleapis.com/v1beta"
# Send request to generate video and capture the operation name into a variable.
# The starting frame is passed as a primary input
# The ending frame is passed as a generation constraint in the config
operation_name=$(curl -s "${BASE_URL}/models/veo-3.1-generate-preview:predictLongRunning" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-X "POST" \
-d '{
"instances": [{
"prompt": "A cinematic, haunting video. A ghostly woman with long white hair and a flowing dress swings gently on a rope swing beneath a massive, gnarled tree in a foggy, moonlit clearing. The fog thickens and swirls around her, and she slowly fades away, vanishing completely. The empty swing is left swaying rhythmically on its own in the eerie silence.",
"image": {"inlineData": {"mimeType": "image/png", "data": "'"$first_image_base64"'"}},
"lastFrame": {"inlineData": {"mimeType": "image/png", "data": "'"$last_image_base64"'"}}
}],
}' | jq -r .name)
# Poll the operation status until the video is ready
while true; do
# Get the full JSON status and store it in a variable.
status_response=$(curl -s -H "x-goog-api-key: $GEMINI_API_KEY" "${BASE_URL}/${operation_name}")
# Check the "done" field from the JSON stored in the variable.
is_done=$(echo "${status_response}" | jq .done)
if [ "${is_done}" = "true" ]; then
# Extract the download URI from the final response.
video_uri=$(echo "${status_response}" | jq -r '.response.generateVideoResponse.generatedSamples[0].video.uri')
echo "Downloading video from: ${video_uri}"
# Download the video using the URI and API key and follow redirects.
curl -L -o veo3.1_with_interpolation.mp4 -H "x-goog-api-key: $GEMINI_API_KEY" "${video_uri}"
break
fi
# Wait for 10 seconds before checking again.
sleep 10
done
```


``first_image`` |
``last_image`` |
veo3.1_with_interpolation.mp4 |
|---|---|---|

## Extending Veo videos

Use Veo 3.1 to extend videos that you previously generated with Veo by 7 seconds and up to 20 times.

Input video limitations:

- Veo-generated videos only up to 141 seconds long.
- Gemini API only supports video extensions for Veo-generated videos.
- The video should come from a previous generation, like
`operation.response.generated_videos[0].video`

- Videos are stored for 2 days, but if a video is referenced for extension, its 2-day storage timer resets. You can only extend videos that were generated or referenced in the last two days.
- Input videos are expected to have a certain length, aspect ratio, and dimensions:
- Aspect ratio: 9:16 or 16:9
- Resolution: 720p
- Video length: 141 seconds or less


The output of the extension is a single video combining the user input video and the generated extended video for up to 148 seconds of video.

This example takes the a Veo-generated video, shown here with
its original prompt, and extends it using the `video`

parameter and a new
prompt:

| Prompt | Output: `butterfly_video` |
|---|---|
| An origami butterfly flaps its wings and flies out of the french doors into the garden. |

### Python

```
import time
from google import genai
client = genai.Client()
prompt = "Track the butterfly into the garden as it lands on an orange origami flower. A fluffy white puppy runs up and gently pats the flower."
operation = client.models.generate_videos(
model="veo-3.1-generate-preview",
video=operation.response.generated_videos[0].video, # This must be a video from a previous generation
prompt=prompt,
config=types.GenerateVideosConfig(
number_of_videos=1,
resolution="720p"
),
)
# Poll the operation status until the video is ready.
while not operation.done:
print("Waiting for video generation to complete...")
time.sleep(10)
operation = client.operations.get(operation)
# Download the video.
video = operation.response.generated_videos[0]
client.files.download(file=video.video)
video.video.save("veo3.1_extension.mp4")
print("Generated video saved to veo3.1_extension.mp4")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
const prompt = "Track the butterfly into the garden as it lands on an orange origami flower. A fluffy white puppy runs up and gently pats the flower.";
// butterflyVideo must be a video from a previous generation
// available as an object like { videoBytes: "...", mimeType: "video/mp4" }
let operation = await ai.models.generateVideos({
model: "veo-3.1-generate-preview",
video: butterflyVideo,
prompt: prompt,
config: {
numberOfVideos: 1,
resolution: "720p",
},
});
// Poll the operation status until the video is ready.
while (!operation.done) {
console.log("Waiting for video generation to complete...")
await new Promise((resolve) => setTimeout(resolve, 10000));
operation = await ai.operations.getVideosOperation({
operation: operation,
});
}
// Download the video.
ai.files.download({
file: operation.response.generatedVideos[0].video,
downloadPath: "veo3.1_extension.mp4",
});
console.log(`Generated video saved to veo3.1_extension.mp4`);
```


### Go

```
package main
import (
"context"
"log"
"os"
"time"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
prompt := `Track the butterfly into the garden as it lands on an orange origami flower. A fluffy white puppy runs up and gently pats the flower.`
// butterflyVideo must be a video from a previous generation
// available as a *genai.Video object.
var butterflyVideo *genai.Video
operation, _ := client.Models.GenerateVideos(
ctx,
"veo-3.1-generate-preview",
prompt,
nil, // image
butterflyVideo,
&genai.GenerateVideosConfig{
NumberOfVideos: 1,
Resolution: "720p",
},
)
// Poll the operation status until the video is ready.
for !operation.Done {
log.Println("Waiting for video generation to complete...")
time.Sleep(10 * time.Second)
operation, _ = client.Operations.GetVideosOperation(ctx, operation, nil)
}
// Download the video.
video := operation.Response.GeneratedVideos[0]
client.Files.Download(ctx, video.Video, nil)
fname := "veo3.1_extension.mp4"
_ = os.WriteFile(fname, video.Video.VideoBytes, 0644)
log.Printf("Generated video saved to %s\n", fname)
}
```


### REST

```
# Note: This script uses jq to parse the JSON response.
# It assumes butterfly_video_base64 contains base64-encoded
# video data from a previous generation.
# GEMINI API Base URL
BASE_URL="https://generativelanguage.googleapis.com/v1beta"
# Send request to generate video and capture the operation name into a variable.
operation_name=$(curl -s "${BASE_URL}/models/veo-3.1-generate-preview:predictLongRunning" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-X "POST" \
-d '{
"instances": [{
"prompt": "Track the butterfly into the garden as it lands on an orange origami flower. A fluffy white puppy runs up and gently pats the flower.",
"video": {"inlineData": {"mimeType": "video/mp4", "data": "'"$butterfly_video_base64"'"}}
}],
"parameters": {
"numberOfVideos": 1,
"resolution": "720p"
}
}' | jq -r .name)
# Poll the operation status until the video is ready
while true; do
# Get the full JSON status and store it in a variable.
status_response=$(curl -s -H "x-goog-api-key: $GEMINI_API_KEY" "${BASE_URL}/${operation_name}")
# Check the "done" field from the JSON stored in the variable.
is_done=$(echo "${status_response}" | jq .done)
if [ "${is_done}" = "true" ]; then
# Extract the download URI from the final response.
video_uri=$(echo "${status_response}" | jq -r '.response.generateVideoResponse.generatedSamples[0].video.uri')
echo "Downloading video from: ${video_uri}"
# Download the video using the URI and API key and follow redirects.
curl -L -o veo3.1_extension.mp4 -H "x-goog-api-key: $GEMINI_API_KEY" "${video_uri}"
break
fi
# Wait for 10 seconds before checking again.
sleep 10
done
```


For information about writing effective text prompts for video generation, see
the [Veo prompt guide](#extend-prompt).

## Handling asynchronous operations

Video generation is a computationally intensive task. When you send a request
to the API, it starts a long-running job and immediately returns an `operation`

object. You must then poll until the video is ready, which is indicated by the
`done`

status being true.

The core of this process is a polling loop, which periodically checks the job's status.

### Python

```
import time
from google import genai
from google.genai import types
client = genai.Client()
# After starting the job, you get an operation object.
operation = client.models.generate_videos(
model="veo-3.1-generate-preview",
prompt="A cinematic shot of a majestic lion in the savannah.",
)
# Alternatively, you can use operation.name to get the operation.
operation = types.GenerateVideosOperation(name=operation.name)
# This loop checks the job status every 10 seconds.
while not operation.done:
time.sleep(10)
# Refresh the operation object to get the latest status.
operation = client.operations.get(operation)
# Once done, the result is in operation.response.
# ... process and download your video ...
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
// After starting the job, you get an operation object.
let operation = await ai.models.generateVideos({
model: "veo-3.1-generate-preview",
prompt: "A cinematic shot of a majestic lion in the savannah.",
});
// Alternatively, you can use operation.name to get the operation.
// operation = types.GenerateVideosOperation(name=operation.name)
// This loop checks the job status every 10 seconds.
while (!operation.done) {
await new Promise((resolve) => setTimeout(resolve, 1000));
// Refresh the operation object to get the latest status.
operation = await ai.operations.getVideosOperation({ operation });
}
// Once done, the result is in operation.response.
// ... process and download your video ...
```


### Go

```
package main
import (
"context"
"log"
"time"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
// After starting the job, you get an operation object.
operation, _ := client.Models.GenerateVideos(
ctx,
"veo-3.1-generate-preview",
"A cinematic shot of a majestic lion in the savannah.",
nil,
nil,
)
// This loop checks the job status every 10 seconds.
for !operation.Done {
time.Sleep(10 * time.Second)
// Refresh the operation object to get the latest status.
operation, _ = client.Operations.GetVideosOperation(ctx, operation, nil)
}
// Once done, the result is in operation.Response.
// ... process and download your video ...
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateVideosOperation;
import com.google.genai.types.Video;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
class HandleAsync {
public static void main(String[] args) throws Exception {
Client client = new Client();
// After starting the job, you get an operation object.
GenerateVideosOperation operation =
client.models.generateVideos(
"veo-3.1-generate-preview",
"A cinematic shot of a majestic lion in the savannah.",
null,
null);
// This loop checks the job status every 10 seconds.
while (!operation.done().isPresent() || !operation.done().get()) {
Thread.sleep(10000);
// Refresh the operation object to get the latest status.
operation = client.operations.getVideosOperation(operation, null);
}
// Once done, the result is in operation.response.
// Download the generated video.
Video video = operation.response().get().generatedVideos().get().get(0).video().get();
Path path = Paths.get("async_example.mp4");
client.files.download(video, path.toString(), null);
if (video.videoBytes().isPresent()) {
Files.write(path, video.videoBytes().get());
System.out.println("Generated video saved to async_example.mp4");
}
}
}
```


### REST

```
# Note: This script uses jq to parse the JSON response.
# GEMINI API Base URL
BASE_URL="https://generativelanguage.googleapis.com/v1beta"
# Send request to generate video and capture the operation name into a variable.
operation_name=$(curl -s "${BASE_URL}/models/veo-3.1-generate-preview:predictLongRunning" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-X "POST" \
-d '{
"instances": [{
"prompt": "A cinematic shot of a majestic lion in the savannah."
}
]
}' | jq -r .name)
# This loop checks the job status every 10 seconds.
while true; do
# Get the full JSON status and store it in a variable.
status_response=$(curl -s -H "x-goog-api-key: $GEMINI_API_KEY" "${BASE_URL}/${operation_name}")
# Check the "done" field from the JSON stored in the variable.
is_done=$(echo "${status_response}" | jq .done)
if [ "${is_done}" = "true" ]; then
# Once done, the result is in status_response.
# ... process and download your video ...
echo "Video generation complete."
break
fi
# Wait for 10 seconds before checking again.
echo "Waiting for video generation to complete..."
sleep 10
done
```


## Veo API parameters and specifications

These are the parameters you can set in your API request to control the video generation process.

| Parameter | Description | Veo 3.1 & Veo 3.1 Fast | Veo 3 & Veo 3 Fast | Veo 2 |
|---|---|---|---|---|
| Instances | ||||
`prompt` |
The text description for the video. Supports audio cues. | `string` |
`string` |
`string` |
`image` |
An initial image to animate. | `Image` object |
`Image` object |
`Image` object |
`lastFrame` |
The final image for an interpolation video to transition. Must be used in combination with the `image` parameter. |
`Image` object |
`Image` object |
`Image` object |
`referenceImages` |
Up to three images to be used as style and content references. | `VideoGenerationReferenceImage` object (Veo 3.1 only) |
n/a | n/a |
`video` |
Video to be used for video extension. | `Video` object from a previous generation |
n/a | n/a |
| Parameters | ||||
`aspectRatio` |
The video's aspect ratio. | `"16:9"` (default),`"9:16"` |
`"16:9"` (default),`"9:16"` |
`"16:9"` (default),`"9:16"` |
`durationSeconds` |
Length of the generated video. | `"4"` , `"6"` , `"8"` . Must be "8" when using extension, reference images or with 1080p and 4k resolutions |
`"4"` , `"6"` , `"8"` . Must be "8" when using extension, reference images or with 1080p and 4k resolutions |
`"5"` , `"6"` , `"8"` |
`personGeneration` |
Controls the generation of people. (See
|
Text-to-video & Extension:`"allow_all"` onlyImage-to-video, Interpolation, & Reference images: `"allow_adult"` only
|
Text-to-video:`"allow_all"` onlyImage-to-video: `"allow_adult"` only
|
Text-to-video: `"allow_all"` , `"allow_adult"` , `"dont_allow"`
Image-to-video: `"allow_adult"` , and `"dont_allow"`
|
`resolution` |
The video's resolution. | `"720p"` (default), `"1080p"` (only supports 8s duration),`"4k"` (only supports 8s duration) `"720p"` only for extension |
`"720p"` (default), `"1080p"` (only supports 8s duration),`"4k"` (only supports 8s duration) `"720p"` only for extension |
Unsupported |

Note that the `seed`

parameter is also available for Veo 3 models.
It doesn't guarantee determinism, but slightly improves it.

## Veo prompt guide

This section contains examples of videos you can create using Veo, and shows you how to modify prompts to produce distinct results.

### Safety filters

Veo applies safety filters across Gemini to help ensure that
generated videos and uploaded photos don't contain offensive content.
Prompts that violate our [terms and guidelines](/gemini-api/docs/usage-policies#abuse-monitoring) are blocked.

### Prompt writing basics

Good prompts are descriptive and clear. To get the most out of Veo, start with identifying your core idea, refine your idea by adding keywords and modifiers, and incorporate video-specific terminology into your prompts.

The following elements should be included in your prompt:

**Subject**: The object, person, animal, or scenery that you want in your video, such as*cityscape*,*nature*,*vehicles*, or*puppies*.**Action**: What the subject is doing (for example,*walking*,*running*, or*turning their head*).**Style**: Specify creative direction using specific film style keywords, such as*sci-fi*,*horror film*,*film noir*, or animated styles like*cartoon*.**Camera positioning and motion**: [Optional] Control the camera's location and movement using terms like*aerial view*,*eye-level*,*top-down shot*,*dolly shot*, or*worms eye*.**Composition**: [Optional] How the shot is framed, such as*wide shot*,*close-up*,*single-shot*or*two-shot*.**Focus and lens effects**: [Optional] Use terms like*shallow focus*,*deep focus*,*soft focus*,*macro lens*, and*wide-angle lens*to achieve specific visual effects.**Ambiance**: [Optional] How the color and light contribute to the scene, such as*blue tones*,*night*, or*warm tones*.

#### More tips for writing prompts

**Use descriptive language**: Use adjectives and adverbs to paint a clear picture for Veo.**Enhance the facial details**: Specify facial details as a focus of the photo like using the word*portrait*in the prompt.

*For more comprehensive prompting strategies, visit Introduction to
prompt design.*

### Prompting for audio

With Veo 3, you can provide cues for sound effects, ambient noise, and dialogue. The model captures the nuance of these cues to generate a synchronized soundtrack.

**Dialogue:**Use quotes for specific speech. (Example: "This must be the key," he murmured.)**Sound Effects (SFX):**Explicitly describe sounds. (Example: tires screeching loudly, engine roaring.)**Ambient Noise:**Describe the environment's soundscape. (Example: A faint, eerie hum resonates in the background.)

These videos demonstrate prompting Veo 3's audio generation with increasing levels of detail.

Prompt |
Generated output |
|---|---|
More detail (Dialogue and ambience)A wide shot of a misty Pacific Northwest forest. Two exhausted hikers, a man and a woman, push through ferns when the man stops abruptly, staring at a tree. Close-up: Fresh, deep claw marks are gouged into the tree's bark. Man: (Hand on his hunting knife) "That's no ordinary bear." Woman: (Voice tight with fear, scanning the woods) "Then what is it?" A rough bark, snapping twigs, footsteps on the damp earth. A lone bird chirps. |
|
Less detail (Dialogue)Paper Cut-Out Animation. New Librarian: "Where do you keep the forbidden books?" Old Curator: "We don't. They keep us." |

Try out these prompts yourself to hear the audio!
[Try Veo 3](https://deepmind.google/models/veo/)

### Prompting with reference images

You can use one or more images as inputs to guide your generated videos, using
Veo's [image-to-video](/gemini-api/docs/video#generate-from-images)
capabilities. Veo uses the input image as the initial frame. Select an image
closest to what you envision as the first scene of your video to animate
everyday objects, bring drawings and paintings to life, and add movement and
sound to nature scenes.

Prompt |
Generated output |
|---|---|
Input image (Generated by Nano Banana)A hyperrealistic macro photo of tiny, miniature surfers riding ocean waves inside a rustic stone bathroom sink. A vintage brass faucet is running, creating the perpetual surf. Surreal, whimsical, bright natural lighting. |
|
Output Video (Generated by Veo 3.1)A surreal, cinematic macro video. Tiny surfers ride perpetual, rolling waves inside a stone bathroom sink. A running vintage brass faucet generates the endless surf. The camera slowly pans across the whimsical, sunlit scene as the miniature figures expertly carve the turquoise water. |

Veo 3.1 lets you reference images or ingredients to direct your generated video's content. Provide up to three asset images of a single person, character, or product. Veo preserves the subject's appearance in the output video.

Prompt |
Generated output |
|---|---|
Reference image (Generated by Nano Banana)A deep sea angler fish lurks in the deep dark water, teeth bared and bait glowing. |
|
Reference image (Generated by Nano Banana)A pink child's princess costume complete with a wand and tiara, on a plain product background. |
|
Output Video (Generated by Veo 3.1)Create a silly cartoon version of the fish wearing the costume, swimming and waving the wand around. |

Using Veo 3.1, you can also generate videos by specifying the first and last frames of the video.

Prompt |
Generated output |
|---|---|
First image (Generated by Nano Banana)A high quality photorealistic front image of a ginger cat driving a red convertible racing car on the French riviera coast. |
|
Last image (Generated by Nano Banana)Show what happens when the car takes off from a cliff. |
|
Output Video (Generated by Veo 3.1)Optional |

This feature gives you precise control over your shot's composition by letting you define the starting and ending frame. Upload an image or use a frame from a previous video generation to make sure your scene begins and concludes exactly as you envision it.

### Prompting for extension

To extend your Veo-generated video with Veo 3.1, use the video as an input along with an optional text prompt. Extend finalizes the final second or 24 frames of your video and continues the action.

Note that voice is not able to be effectively extended if it's not present in the last 1 second of video.

Prompt |
Generated output |
|---|---|
Input video (Generated by Veo 3.1)The paraglider takes off from the top of the mountain and starts gliding down the mountains overlooking the flower covered valleys below. |
|
Output Video (Generated by Veo 3.1)Extend this video with the paraglider slowly descending. |

### Example prompts and output

This section presents several prompts, highlighting how descriptive details can elevate the outcome of each video.

#### Icicles

This video demonstrates how you can use the elements of
[prompt writing basics](#basics) in your prompt.

Prompt |
Generated output |
|---|---|
| Close up shot (composition) of melting icicles (subject) on a frozen rock wall (context) with cool blue tones (ambiance), zoomed in (camera motion) maintaining close-up detail of water drips (action). |

#### Man on the phone

These videos demonstrate how you can revise your prompt with increasingly specific details to get Veo to refine the output to your liking.

Prompt |
Generated output |
|---|---|
Less detailThe camera dollies to show a close up of a desperate man in a green trench coat. He's making a call on a rotary-style wall phone with a green neon light. It looks like a movie scene. |
|
More detailA close-up cinematic shot follows a desperate man in a weathered green trench coat as he dials a rotary phone mounted on a gritty brick wall, bathed in the eerie glow of a green neon sign. The camera dollies in, revealing the tension in his jaw and the desperation etched on his face as he struggles to make the call. The shallow depth of field focuses on his furrowed brow and the black rotary phone, blurring the background into a sea of neon colors and indistinct shadows, creating a sense of urgency and isolation. |

#### Snow leopard

Prompt |
Generated output |
|---|---|
Simple prompt:A cute creature with snow leopard-like fur is walking in winter forest, 3D cartoon style render. |
|
Detailed prompt:Create a short 3D animated scene in a joyful cartoon style. A cute creature with snow leopard-like fur, large expressive eyes, and a friendly, rounded form happily prances through a whimsical winter forest. The scene should feature rounded, snow-covered trees, gentle falling snowflakes, and warm sunlight filtering through the branches. The creature's bouncy movements and wide smile should convey pure delight. Aim for an upbeat, heartwarming tone with bright, cheerful colors and playful animation. |

### Examples by writing elements

These examples show you how to refine your prompts by each basic element.

#### Subject and context

Specify the main focus (subject) and the background or environment (context).

Prompt |
Generated output |
|---|---|
| An architectural rendering of a white concrete apartment building with flowing organic shapes, seamlessly blending with lush greenery and futuristic elements | |
| A satellite floating through outer space with the moon and some stars in the background. |

#### Action

Specify what the subject is doing (e.g., walking, running, or turning their head).

Prompt |
Generated output |
|---|---|
| A wide shot of a woman walking along the beach, looking content and relaxed towards the horizon at sunset. |

#### Style

Add keywords to steer the generation toward a specific aesthetic (e.g., surreal, vintage, futuristic, film noir).

Prompt |
Generated output |
|---|---|
| Film noir style, man and woman walk on the street, mystery, cinematic, black and white. |

#### Camera motion and composition

Specify how the camera moves (POV shot, aerial view, tracking drone view) and how the shot is framed (wide shot, close-up, low angle).

Prompt |
Generated output |
|---|---|
| A POV shot from a vintage car driving in the rain, Canada at night, cinematic. | |
| Extreme close-up of a an eye with city reflected in it. |

#### Ambiance

Color palettes and lighting influence the mood. Try terms like "muted orange warm tones," "natural light," "sunrise," or "cool blue tones."

Prompt |
Generated output |
|---|---|
| A close-up of a girl holding adorable golden retriever puppy in the park, sunlight. | |
| Cinematic close-up shot of a sad woman riding a bus in the rain, cool blue tones, sad mood. |

### Negative prompts

Negative prompts specify elements you *don't* want in the video.

- ❌ Don't use instructive language like
*no*or*don't*. (e.g., "No walls"). - ✅ Do describe what you don't want to see. (e.g., "wall, frame").

Prompt |
Generated output |
|---|---|
Without Negative Prompt:Generate a short, stylized animation of a large, solitary oak tree with leaves blowing vigorously in a strong wind... [truncated] |
|
With Negative Prompt:[Same prompt] Negative prompt: urban background, man-made structures, dark, stormy, or threatening atmosphere. |

### Aspect ratios

Veo lets you specify the aspect ratio for your video.

Prompt |
Generated output |
|---|---|
Widescreen (16:9)Create a video with a tracking drone view of a man driving a red convertible car in Palm Springs, 1970s, warm sunlight, long shadows. |
|
Portrait (9:16)Create a video highlighting the smooth motion of a majestic Hawaiian waterfall within a lush rainforest. Focus on realistic water flow, detailed foliage, and natural lighting to convey tranquility. Capture the rushing water, misty atmosphere, and dappled sunlight filtering through the dense canopy. Use smooth, cinematic camera movements to showcase the waterfall and its surroundings. Aim for a peaceful, realistic tone, transporting the viewer to the serene beauty of the Hawaiian rainforest. |

## Limitations

**Request latency:**Min: 11 seconds; Max: 6 minutes (during peak hours).**Regional limitations:**In EU, UK, CH, MENA locations, the following are the allowed values for`personGeneration`

:- Veo 3:
`allow_adult`

only. - Veo 2:
`dont_allow`

and`allow_adult`

. Default is`dont_allow`

.

- Veo 3:
**Video retention:**Generated videos are stored on the server for 2 days, after which they are removed. To save a local copy, you must download your video within 2 days of generation. Extended videos are treated as newly generated videos.**Watermarking:**Videos created by Veo are watermarked using[SynthID](https://deepmind.google/technologies/synthid/), our tool for watermarking and identifying AI-generated content. Videos can be verified using the[SynthID](https://deepmind.google/science/synthid/)verification platform.**Safety:**Generated videos are passed through safety filters and memorization checking processes that help mitigate privacy, copyright and bias risks.**Audio error:**Veo 3.1 will sometimes block a video from generating because of safety filters or other processing issues with the audio. You will not be charged if your video is blocked from generating.

## Model features

| Feature | Description | Veo 3.1 & Veo 3.1 Fast | Veo 3 & Veo 3 Fast | Veo 2 |
|---|---|---|---|---|
Audio |
Natively generates audio with video. | Natively generates audio with video. | ✔️ Always on | ❌ Silent only |
Input Modalities |
The type of input used for generation. | Text-to-Video, Image-to-Video, Video-to-Video | Text-to-Video, Image-to-Video | Text-to-Video, Image-to-Video |
Resolution |
The output resolution of the video. | 720p, 1080p (8s length only), 4k (8s length only) 720p only when using video extension. |
720p & 1080p (16:9 only) | 720p |
Frame Rate |
The output frame rate of the video. | 24fps | 24fps | 24fps |
Video Duration |
Length of the generated video. | 8 seconds, 6 seconds, 4 seconds 8 seconds only if 1080p or 4k or using reference images |
8 seconds | 5-8 seconds |
Videos per Request |
Number of videos generated per request. | 1 | 1 | 1 or 2 |
Status & Details |
Model availability and further details. |
|

[Stable](/gemini-api/docs/models#stable)[Stable](/gemini-api/docs/models#latest-stable)## Model versions

Check out the [Pricing](/gemini-api/docs/pricing#veo-3.1) and [Rate limits](/gemini-api/docs/rate-limits) pages for more Veo model-specific usage
details.

Veo Fast versions allow developers to create videos with sound while maintaining high quality and optimizing for speed and business use cases. They're ideal for backend services that programmatically generate ads, tools for rapid A/B testing of creative concepts, or apps that need to quickly produce social media content.

### Veo 3.1 Preview

| Property | Description |
|---|---|
| Model code |
|
| Supported data types |
Text, Image
Video with audio |
| Limits |
1,024 tokens
1 |
| Latest update | January 2026 |

### Veo 3.1 Fast Preview

| Property | Description |
|---|---|
| Model code |
|
| Supported data types |
Text, Image
Video with audio |
| Limits |
1,024 tokens
1 |
| Latest update | January 2026 |

### Veo 2

| Property | Description |
|---|---|
| Model code |
|
| Supported data types |
Text, image
Video |
| Limits |
N/A
Any image resolution and aspect ratio up to 20MB file size
Up to 2 |
| Latest update | April 2025 |

## What's next

- Get started with the Veo 3.1 API by experimenting in the
[Veo Quickstart Colab](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Get_started_Veo.ipynb)and the[Veo 3.1 applet](https://aistudio.google.com/apps/bundled/veo_studio). - Learn how to write even better prompts with our
[Introduction to prompt design](/gemini-api/docs/prompting-intro).

---

## Source: https://ai.google.dev/gemini-api/docs/music-generation

Lyria 3 is Google's family of music generation models, available through the Gemini API. With Lyria 3, you can generate high-quality, 48kHz stereo audio from text prompts or from images. These models deliver structural coherence, including vocals, timed lyrics, and full instrumental arrangements.

The Lyria 3 family includes two models:

| Model | Model ID | Best for | Duration | Output |
|---|---|---|---|---|
Lyria 3 Clip |
`lyria-3-clip-preview` |
Short clips, loops, previews | 30 seconds | MP3 |
Lyria 3 Pro |
`lyria-3-pro-preview` |
Full-length songs with verses, choruses, bridges | A couple of minutes (controllable via prompt) | MP3, WAV |

Both models can be used using the standard `generateContent`

method and the new
[Interactions API](/gemini-api/docs/interactions), supporting multimodal
inputs (text and images), and produce **48kHz high-fidelity stereo** audio.

## Generate a music clip

The Lyria 3 Clip model always generates a **30-second** clip. To generate a
clip, call the `generateContent`

method and set `response_modalities`

to
`["AUDIO", "TEXT"]`

. Including `TEXT`

lets you receive the generated lyrics
or song structure alongside the audio.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="lyria-3-clip-preview",
contents="Create a 30-second cheerful acoustic folk song with "
"guitar and harmonica.",
config=types.GenerateContentConfig(
response_modalities=["AUDIO", "TEXT"],
),
)
# Parse the response
for part in response.parts:
if part.text is not None:
print(part.text)
elif part.inline_data is not None:
with open("clip.mp3", "wb") as f:
f.write(part.inline_data.data)
print("Audio saved to clip.mp3")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
const ai = new GoogleGenAI({});
async function main() {
const response = await ai.models.generateContent({
model: "lyria-3-clip-preview",
contents: "Create a 30-second cheerful acoustic folk song with " +
"guitar and harmonica.",
config: {
responseModalities: ["AUDIO", "TEXT"],
},
});
for (const part of response.candidates[0].content.parts) {
if (part.text) {
console.log(part.text);
} else if (part.inlineData) {
const buffer = Buffer.from(part.inlineData.data, "base64");
fs.writeFileSync("clip.mp3", buffer);
console.log("Audio saved to clip.mp3");
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
config := &genai.GenerateContentConfig{
ResponseModalities: []string{"AUDIO", "TEXT"},
}
result, err := client.Models.GenerateContent(
ctx,
"lyria-3-clip-preview",
genai.Text("Create a 30-second cheerful acoustic folk song " +
"with guitar and harmonica."),
config,
)
if err != nil {
log.Fatal(err)
}
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
fmt.Println(part.Text)
} else if part.InlineData != nil {
err := os.WriteFile("clip.mp3", part.InlineData.Data, 0644)
if err != nil {
log.Fatal(err)
}
fmt.Println("Audio saved to clip.mp3")
}
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
public class GenerateMusicClip {
public static void main(String[] args) throws IOException {
try (Client client = new Client()) {
GenerateContentConfig config = GenerateContentConfig.builder()
.responseModalities("AUDIO", "TEXT")
.build();
GenerateContentResponse response = client.models.generateContent(
"lyria-3-clip-preview",
"Create a 30-second cheerful acoustic folk song with "
+ "guitar and harmonica.",
config);
for (Part part : response.parts()) {
if (part.text().isPresent()) {
System.out.println(part.text().get());
} else if (part.inlineData().isPresent()) {
var blob = part.inlineData().get();
if (blob.data().isPresent()) {
Files.write(Paths.get("clip.mp3"), blob.data().get());
System.out.println("Audio saved to clip.mp3");
}
}
}
}
}
}
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/lyria-3-clip-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "Create a 30-second cheerful acoustic folk song with guitar and harmonica."}
]
}],
"generationConfig": {
"responseModalities": ["AUDIO", "TEXT"]
}
}'
```


### C#

```
using System.Threading.Tasks;
using Google.GenAI;
using Google.GenAI.Types;
using System.IO;
public class GenerateMusicClip {
public static async Task main() {
var client = new Client();
var config = new GenerateContentConfig {
ResponseModalities = { "AUDIO", "TEXT" }
};
var response = await client.Models.GenerateContentAsync(
model: "lyria-3-clip-preview",
contents: "Create a 30-second cheerful acoustic folk song with guitar and harmonica.",
config: config
);
foreach (var part in response.Candidates[0].Content.Parts) {
if (part.Text != null) {
Console.WriteLine(part.Text);
} else if (part.InlineData != null) {
await File.WriteAllBytesAsync("clip.mp3", part.InlineData.Data);
Console.WriteLine("Audio saved to clip.mp3");
}
}
}
}
```


## Generate a full-length song

Use the `lyria-3-pro-preview`

model to generate full-length songs that last a
couple of minutes. The Pro model understands musical structure and can create
compositions with distinct verses, choruses, and bridges. You can influence the
duration by specifying it in your prompt (e.g., "create a 2-minute song") or by
using [timestamps](#timing) to define the structure.

### Python

```
response = client.models.generate_content(
model="lyria-3-pro-preview",
contents="An epic cinematic orchestral piece about a journey home. "
"Starts with a solo piano intro, builds through sweeping "
"strings, and climaxes with a massive wall of sound.",
config=types.GenerateContentConfig(
response_modalities=["AUDIO", "TEXT"],
),
)
```


### JavaScript

```
const response = await ai.models.generateContent({
model: "lyria-3-pro-preview",
contents: "An epic cinematic orchestral piece about a journey home. " +
"Starts with a solo piano intro, builds through sweeping " +
"strings, and climaxes with a massive wall of sound.",
config: {
responseModalities: ["AUDIO", "TEXT"],
},
});
```


### Go

```
result, err := client.Models.GenerateContent(
ctx,
"lyria-3-pro-preview",
genai.Text("An epic cinematic orchestral piece about a journey " +
"home. Starts with a solo piano intro, builds through " +
"sweeping strings, and climaxes with a massive wall of sound."),
config,
)
```


### Java

```
GenerateContentResponse response = client.models.generateContent(
"lyria-3-pro-preview",
"An epic cinematic orchestral piece about a journey home. "
+ "Starts with a solo piano intro, builds through sweeping "
+ "strings, and climaxes with a massive wall of sound.",
config);
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/lyria-3-pro-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "An epic cinematic orchestral piece about a journey home. Starts with a solo piano intro, builds through sweeping strings, and climaxes with a massive wall of sound."}
]
}],
"generationConfig": {
"responseModalities": ["AUDIO", "TEXT"]
}
}'
```


### C#

```
var response = await client.Models.GenerateContentAsync(
model: "lyria-3-pro-preview",
contents: "An epic cinematic orchestral piece about a journey home. " +
"Starts with a solo piano intro, builds through sweeping " +
"strings, and climaxes with a massive wall of sound.",
config: config
);
```


## Parse the response

The response from Lyria 3 contains multiple parts. Text parts contain the
generated lyrics or a JSON description of the song structure. Parts with
`inline_data`

contain the audio bytes.

### Python

```
lyrics = []
audio_data = None
for part in response.parts:
if part.text is not None:
lyrics.append(part.text)
elif part.inline_data is not None:
audio_data = part.inline_data.data
if lyrics:
print("Lyrics:\n" + "\n".join(lyrics))
if audio_data:
with open("output.mp3", "wb") as f:
f.write(audio_data)
```


### JavaScript

```
const lyrics = [];
let audioData = null;
for (const part of response.candidates[0].content.parts) {
if (part.text) {
lyrics.push(part.text);
} else if (part.inlineData) {
audioData = Buffer.from(part.inlineData.data, "base64");
}
}
if (lyrics.length) {
console.log("Lyrics:\n" + lyrics.join("\n"));
}
if (audioData) {
fs.writeFileSync("output.mp3", audioData);
}
```


### Go

```
var lyrics []string
var audioData []byte
for _, part := range result.Candidates[0].Content.Parts {
if part.Text != "" {
lyrics = append(lyrics, part.Text)
} else if part.InlineData != nil {
audioData = part.InlineData.Data
}
}
if len(lyrics) > 0 {
fmt.Println("Lyrics:\n" + strings.Join(lyrics, "\n"))
}
if audioData != nil {
err := os.WriteFile("output.mp3", audioData, 0644)
if err != nil {
log.Fatal(err)
}
}
```


### Java

```
List<String> lyrics = new ArrayList<>();
byte[] audioData = null;
for (Part part : response.parts()) {
if (part.text().isPresent()) {
lyrics.add(part.text().get());
} else if (part.inlineData().isPresent()) {
audioData = part.inlineData().get().data().get();
}
}
if (!lyrics.isEmpty()) {
System.out.println("Lyrics:\n" + String.join("\n", lyrics));
}
if (audioData != null) {
Files.write(Paths.get("output.mp3"), audioData);
}
```


### C#

```
var lyrics = new List<string>();
byte[] audioData = null;
foreach (var part in response.Candidates[0].Content.Parts) {
if (part.Text != null) {
lyrics.Add(part.Text);
} else if (part.InlineData != null) {
audioData = part.InlineData.Data;
}
}
if (lyrics.Count > 0) {
Console.WriteLine("Lyrics:\n" + string.Join("\n", lyrics));
}
if (audioData != null) {
await File.WriteAllBytesAsync("output.mp3", audioData);
}
```


### REST

```
# The output from the REST API is a JSON object containing base64 encoded data.
# You can extract the text or the audio data using a tool like jq.
# To extract the audio and save it to a file:
curl ... | jq -r '.candidates[0].content.parts[] | select(.inlineData) | .inlineData.data' | base64 -d > output.mp3
```


## Generate music from images

Lyria 3 supports multimodal inputs — you can provide up to **10 images**
alongside your text prompt and the model will compose music inspired by the
visual content.

### Python

```
from PIL import Image
image = Image.open("desert_sunset.jpg")
response = client.models.generate_content(
model="lyria-3-pro-preview",
contents=[
"An atmospheric ambient track inspired by the mood and "
"colors in this image.",
image,
],
config=types.GenerateContentConfig(
response_modalities=["AUDIO", "TEXT"],
),
)
```


### JavaScript

```
const imageData = fs.readFileSync("desert_sunset.jpg");
const base64Image = imageData.toString("base64");
const response = await ai.models.generateContent({
model: "lyria-3-pro-preview",
contents: [
{ text: "An atmospheric ambient track inspired by the mood " +
"and colors in this image." },
{
inlineData: {
mimeType: "image/jpeg",
data: base64Image,
},
},
],
config: {
responseModalities: ["AUDIO", "TEXT"],
},
});
```


### Go

```
imgData, err := os.ReadFile("desert_sunset.jpg")
if err != nil {
log.Fatal(err)
}
parts := []*genai.Part{
genai.NewPartFromText("An atmospheric ambient track inspired " +
"by the mood and colors in this image."),
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/jpeg",
Data: imgData,
},
},
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, err := client.Models.GenerateContent(
ctx,
"lyria-3-pro-preview",
contents,
config,
)
```


### Java

```
GenerateContentResponse response = client.models.generateContent(
"lyria-3-pro-preview",
Content.fromParts(
Part.fromText("An atmospheric ambient track inspired by "
+ "the mood and colors in this image."),
Part.fromBytes(
Files.readAllBytes(Path.of("desert_sunset.jpg")),
"image/jpeg")),
config);
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/lyria-3-pro-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d "{
\"contents\": [{
\"parts\":[
{\"text\": \"An atmospheric ambient track inspired by the mood and colors in this image.\"},
{
\"inline_data\": {
\"mime_type\":\"image/jpeg\",
\"data\": \"<BASE64_IMAGE_DATA>\"
}
}
]
}],
\"generationConfig\": {
\"responseModalities\": [\"AUDIO\", \"TEXT\"]
}
}"
```


### C#

```
var response = await client.Models.GenerateContentAsync(
model: "lyria-3-pro-preview",
contents: new List<Part> {
Part.FromText("An atmospheric ambient track inspired by the mood and colors in this image."),
Part.FromBytes(await File.ReadAllBytesAsync("desert_sunset.jpg"), "image/jpeg")
},
config: config
);
```


## Provide custom lyrics

You can write your own lyrics and include them in the prompt. Use section tags
like `[Verse]`

, `[Chorus]`

, and `[Bridge]`

to help the model understand the
song structure:

### Python

```
prompt = """
Create a dreamy indie pop song with the following lyrics:
[Verse 1]
Walking through the neon glow,
city lights reflect below,
every shadow tells a story,
every corner, fading glory.
[Chorus]
We are the echoes in the night,
burning brighter than the light,
hold on tight, don't let me go,
we are the echoes down below.
[Verse 2]
Footsteps lost on empty streets,
rhythms sync to heartbeats,
whispers carried by the breeze,
dancing through the autumn leaves.
"""
response = client.models.generate_content(
model="lyria-3-pro-preview",
contents=prompt,
config=types.GenerateContentConfig(
response_modalities=["AUDIO", "TEXT"],
),
)
```


### JavaScript

```
const prompt = `
Create a dreamy indie pop song with the following lyrics:
[Verse 1]
Walking through the neon glow,
city lights reflect below,
every shadow tells a story,
every corner, fading glory.
[Chorus]
We are the echoes in the night,
burning brighter than the light,
hold on tight, don't let me go,
we are the echoes down below.
[Verse 2]
Footsteps lost on empty streets,
rhythms sync to heartbeats,
whispers carried by the breeze,
dancing through the autumn leaves.
`;
const response = await ai.models.generateContent({
model: "lyria-3-pro-preview",
contents: prompt,
config: {
responseModalities: ["AUDIO", "TEXT"],
},
});
```


### Go

```
prompt := `
Create a dreamy indie pop song with the following lyrics:
[Verse 1]
Walking through the neon glow,
city lights reflect below,
every shadow tells a story,
every corner, fading glory.
[Chorus]
We are the echoes in the night,
burning brighter than the light,
hold on tight, don't let me go,
we are the echoes down below.
[Verse 2]
Footsteps lost on empty streets,
rhythms sync to heartbeats,
whispers carried by the breeze,
dancing through the autumn leaves.
`
result, err := client.Models.GenerateContent(
ctx,
"lyria-3-pro-preview",
genai.Text(prompt),
config,
)
```


### Java

```
String prompt = """
Create a dreamy indie pop song with the following lyrics:
[Verse 1]
Walking through the neon glow,
city lights reflect below,
every shadow tells a story,
every corner, fading glory.
[Chorus]
We are the echoes in the night,
burning brighter than the light,
hold on tight, don't let me go,
we are the echoes down below.
[Verse 2]
Footsteps lost on empty streets,
rhythms sync to heartbeats,
whispers carried by the breeze,
dancing through the autumn leaves.
""";
GenerateContentResponse response = client.models.generateContent(
"lyria-3-pro-preview",
prompt,
config);
```


### C#

```
var prompt = @"
Create a dreamy indie pop song with the following lyrics:
[Verse 1]
Walking through the neon glow,
city lights reflect below,
every shadow tells a story,
every corner, fading glory.
[Chorus]
We are the echoes in the night,
burning brighter than the light,
hold on tight, don't let me go,
we are the echoes down below.
[Verse 2]
Footsteps lost on empty streets,
rhythms sync to heartbeats,
whispers carried by the breeze,
dancing through the autumn leaves.
";
var response = await client.Models.GenerateContentAsync(
model: "lyria-3-pro-preview",
contents: prompt,
config: config
);
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/lyria-3-pro-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "Create a dreamy indie pop song with the following lyrics: ..."}
]
}],
"generationConfig": {
"responseModalities": ["AUDIO", "TEXT"]
}
}'
```


## Control timing and structure

You can specify exactly what happens at specific moments in the song using timestamps. This is useful for controlling when instruments enter, when lyrics are delivered, and how the song progresses:

### Python

```
prompt = """
[0:00 - 0:10] Intro: Begin with a soft lo-fi beat and muffled
vinyl crackle.
[0:10 - 0:30] Verse 1: Add a warm Fender Rhodes piano melody
and gentle vocals singing about a rainy morning.
[0:30 - 0:50] Chorus: Full band with upbeat drums and soaring
synth leads. The lyrics are hopeful and uplifting.
[0:50 - 1:00] Outro: Fade out with the piano melody alone.
"""
response = client.models.generate_content(
model="lyria-3-pro-preview",
contents=prompt,
config=types.GenerateContentConfig(
response_modalities=["AUDIO", "TEXT"],
),
)
```


### JavaScript

```
const prompt = `
[0:00 - 0:10] Intro: Begin with a soft lo-fi beat and muffled
vinyl crackle.
[0:10 - 0:30] Verse 1: Add a warm Fender Rhodes piano melody
and gentle vocals singing about a rainy morning.
[0:30 - 0:50] Chorus: Full band with upbeat drums and soaring
synth leads. The lyrics are hopeful and uplifting.
[0:50 - 1:00] Outro: Fade out with the piano melody alone.
`;
const response = await ai.models.generateContent({
model: "lyria-3-pro-preview",
contents: prompt,
config: {
responseModalities: ["AUDIO", "TEXT"],
},
});
```


### Go

```
prompt := `
[0:00 - 0:10] Intro: Begin with a soft lo-fi beat and muffled
vinyl crackle.
[0:10 - 0:30] Verse 1: Add a warm Fender Rhodes piano melody
and gentle vocals singing about a rainy morning.
[0:30 - 0:50] Chorus: Full band with upbeat drums and soaring
synth leads. The lyrics are hopeful and uplifting.
[0:50 - 1:00] Outro: Fade out with the piano melody alone.
`
result, err := client.Models.GenerateContent(
ctx,
"lyria-3-pro-preview",
genai.Text(prompt),
config,
)
```


### Java

```
String prompt = """
[0:00 - 0:10] Intro: Begin with a soft lo-fi beat and muffled
vinyl crackle.
[0:10 - 0:30] Verse 1: Add a warm Fender Rhodes piano melody
and gentle vocals singing about a rainy morning.
[0:30 - 0:50] Chorus: Full band with upbeat drums and soaring
synth leads. The lyrics are hopeful and uplifting.
[0:50 - 1:00] Outro: Fade out with the piano melody alone.
""";
GenerateContentResponse response = client.models.generateContent(
"lyria-3-pro-preview",
prompt,
config);
```


### C#

```
var prompt = @"
[0:00 - 0:10] Intro: Begin with a soft lo-fi beat and muffled
vinyl crackle.
[0:10 - 0:30] Verse 1: Add a warm Fender Rhodes piano melody
and gentle vocals singing about a rainy morning.
[0:30 - 0:50] Chorus: Full band with upbeat drums and soaring
synth leads. The lyrics are hopeful and uplifting.
[0:50 - 1:00] Outro: Fade out with the piano melody alone.
";
var response = await client.Models.GenerateContentAsync(
model: "lyria-3-pro-preview",
contents: prompt,
config: config
);
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/lyria-3-pro-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "[0:00 - 0:10] Intro: ..."}
]
}],
"generationConfig": {
"responseModalities": ["AUDIO", "TEXT"]
}
}'
```


## Generate instrumental tracks

For background music, game soundtracks, or any use case where vocals are not required, you can prompt the model to produce instrumental-only tracks:

### Python

```
response = client.models.generate_content(
model="lyria-3-clip-preview",
contents="A bright chiptune melody in C Major, retro 8-bit "
"video game style. Instrumental only, no vocals.",
config=types.GenerateContentConfig(
response_modalities=["AUDIO", "TEXT"],
),
)
```


### JavaScript

```
const response = await ai.models.generateContent({
model: "lyria-3-clip-preview",
contents: "A bright chiptune melody in C Major, retro 8-bit " +
"video game style. Instrumental only, no vocals.",
config: {
responseModalities: ["AUDIO", "TEXT"],
},
});
```


### Go

```
result, err := client.Models.GenerateContent(
ctx,
"lyria-3-clip-preview",
genai.Text("A bright chiptune melody in C Major, retro 8-bit " +
"video game style. Instrumental only, no vocals."),
config,
)
```


### Java

```
GenerateContentResponse response = client.models.generateContent(
"lyria-3-clip-preview",
"A bright chiptune melody in C Major, retro 8-bit "
+ "video game style. Instrumental only, no vocals.",
config);
```


### C#

```
var response = await client.Models.GenerateContentAsync(
model: "lyria-3-clip-preview",
contents: "A bright chiptune melody in C Major, retro 8-bit " +
"video game style. Instrumental only, no vocals.",
config: config
);
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/lyria-3-clip-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "A bright chiptune melody in C Major, retro 8-bit video game style. Instrumental only, no vocals."}
]
}],
"generationConfig": {
"responseModalities": ["AUDIO", "TEXT"]
}
}'
```


## Generate music in different languages

Lyria 3 generates lyrics in the language of your prompt. To generate a song with French lyrics, write your prompt in French. The model adapts its vocal style and pronunciation to match the language.

### Python

```
response = client.models.generate_content(
model="lyria-3-pro-preview",
contents="Crée une chanson pop romantique en français sur un "
"coucher de soleil à Paris. Utilise du piano et de "
"la guitare acoustique.",
config=types.GenerateContentConfig(
response_modalities=["AUDIO", "TEXT"],
),
)
```


### JavaScript

```
const response = await ai.models.generateContent({
model: "lyria-3-pro-preview",
contents: "Crée une chanson pop romantique en français sur un " +
"coucher de soleil à Paris. Utilise du piano et de " +
"la guitare acoustique.",
config: {
responseModalities: ["AUDIO", "TEXT"],
},
});
```


### Go

```
result, err := client.Models.GenerateContent(
ctx,
"lyria-3-pro-preview",
genai.Text("Crée une chanson pop romantique en français sur un " +
"coucher de soleil à Paris. Utilise du piano et de " +
"la guitare acoustique."),
config,
)
```


### Java

```
GenerateContentResponse response = client.models.generateContent(
"lyria-3-pro-preview",
"Crée une chanson pop romantique en français sur un "
+ "coucher de soleil à Paris. Utilise du piano et de "
+ "la guitare acoustique.",
config);
```


### C#

```
var response = await client.Models.GenerateContentAsync(
model: "lyria-3-pro-preview",
contents: "Crée une chanson pop romantique en français sur un " +
"coucher de soleil à Paris. Utilise du piano et de " +
"la guitare acoustique.",
config: config
);
```


### REST

```
curl -s -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/lyria-3-pro-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts": [
{"text": "Crée une chanson pop romantique en français sur un coucher de soleil à Paris. Utilise du piano et de la guitare acoustique."}
]
}],
"generationConfig": {
"responseModalities": ["AUDIO", "TEXT"]
}
}'
```


## Model intelligence

Lyria 3 analyzes your prompt process where the model reasons through musical structure (intro, verse, chorus, bridge, etc.) based on your prompt. This happens before the audio is generated and ensures structural coherence and musicality.

## Interactions API

You can use Lyria 3 models with the [Interactions API](/gemini-api/docs/interactions);
a unified interface for interacting with Gemini models and agents. It simplifies
state management and long-running tasks for complex multimodal use cases.

### Python

```
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model="lyria-3-pro-preview",
input="An epic cinematic orchestral piece about a journey home. " +
"Starts with a solo piano intro, builds through sweeping " +
"strings, and climaxes with a massive wall of sound.",
response_modalities=["AUDIO", "TEXT"]
)
for output in interaction.outputs:
if output.text:
print(output.text)
elif output.inline_data:
with open("interaction_output.mp3", "wb") as f:
f.write(output.inline_data.data)
print("Audio saved to interaction_output.mp3")
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
model: 'lyria-3-pro-preview',
input: 'An epic cinematic orchestral piece about a journey home. ' +
'Starts with a solo piano intro, builds through sweeping ' +
'strings, and climaxes with a massive wall of sound.',
responseModalities: ['AUDIO', 'TEXT'],
});
for (const output of interaction.outputs) {
if (output.text) {
console.log(output.text);
} else if (output.inlineData) {
const buffer = Buffer.from(output.inlineData.data, 'base64');
fs.writeFileSync('interaction_output.mp3', buffer);
console.log('Audio saved to interaction_output.mp3');
}
}
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"model": "lyria-3-pro-preview",
"input": "An epic cinematic orchestral piece about a journey home. Starts with a solo piano intro, builds through sweeping strings, and climaxes with a massive wall of sound.",
"responseModalities": ["AUDIO", "TEXT"]
}'
```


## Prompting guide

The more specific your prompt, the better the results. Here's what you can include to guide the generation:

**Genre**: Specify a genre or blend of genres (e.g., "lo-fi hip hop", "jazz fusion", "cinematic orchestral").**Instruments**: Name specific instruments (e.g., "Fender Rhodes piano", "slide guitar", "TR-808 drum machine").**BPM**: Set the tempo (e.g., "120 BPM", "slow tempo around 70 BPM").**Key/Scale**: Specify a musical key (e.g., "in G major", "D minor").**Mood and atmosphere**: Use descriptive adjectives (e.g., "nostalgic", "aggressive", "ethereal", "dreamy").**Structure**: Use tags like`[Verse]`

,`[Chorus]`

,`[Bridge]`

,`[Intro]`

,`[Outro]`

or timestamps to control the song's progression.**Duration**: The Clip model always produces 30-second clips. For the Pro model, specify the desired length in your prompt (e.g., "create a 2-minute song") or use timestamps to control duration.

### Example prompts

Here are some examples of effective prompts:

`"A 30-second lofi hip hop beat with dusty vinyl crackle, mellow Rhodes piano chords, a slow boom-bap drum pattern at 85 BPM, and a jazzy upright bass line. Instrumental only."`

`"An upbeat, feel-good pop song in G major at 120 BPM with bright acoustic guitar strumming, claps, and warm vocal harmonies about a summer road trip."`

`"A dark, atmospheric trap beat at 140 BPM with heavy 808 bass, eerie synth pads, sharp hi-hats, and a haunting vocal sample. In D minor."`


## Best practices

**Iterate with Clip first.**Use the faster`lyria-3-clip-preview`

model to experiment with prompts before committing to a full-length generation with`lyria-3-pro-preview`

.**Be specific.**Vague prompts produce generic results. Mention instruments, BPM, key, mood, and structure for the best output.**Match your language.**Prompt in the language you want the lyrics in.**Use section tags.**`[Verse]`

,`[Chorus]`

,`[Bridge]`

tags give the model clear structure to follow.**Separate lyrics from instructions.**When providing custom lyrics, clearly separate them from your musical direction instructions.

## Limitations

**Safety**: All prompts are checked by safety filters. Prompts that trigger the filters will be blocked. This includes prompts that request specific artist voices or the generation of copyrighted lyrics.**Watermarking**: All generated audio includes a[SynthID audio watermark](/responsible/docs/safeguards/synthid)for identification. This watermark is imperceptible to the human ear and does not affect the listening experience.**Multi-turn editing**: Music generation is a single-turn process. Iterative editing or refining a generated clip through multiple prompts is not supported in the current version of Lyria 3.**Length**: The Clip model always generates 30-second clips. The Pro model generates songs that last a couple of minutes; exact duration can be influenced through your prompt.**Determinism**: Results may vary between calls, even with the same prompt.

## What's next

- Check
[pricing](https://ai.google.dev/gemini-api/docs/pricing)for Lyria 3 models, - Try
[real-time, streaming music generation](https://ai.google.dev/gemini-api/docs/realtime-music-generation)with Lyria RealTime, - Generate multi-speaker conversations with the
[TTS models](https://ai.google.dev/gemini-api/docs/audio-generation), - Discover how to generate
[images](https://ai.google.dev/gemini-api/docs/image-generation)or[videos](https://ai.google.dev/gemini-api/docs/video), - Find out how Gemini can
[understand audio files](https://ai.google.dev/gemini-api/docs/audio), - Have a real-time conversation with Gemini using the
[Live API](https://ai.google.dev/gemini-api/docs/live).

---

## Source: https://ai.google.dev/gemini-api/docs/realtime-music-generation

The Gemini API, using
[Lyria RealTime](https://deepmind.google/technologies/lyria/realtime/),
provides access to a state-of-the-art, real-time, streaming music
generation model. It allows developers to build applications where users
can interactively create, continuously steer, and perform instrumental
music.

Lyria RealTime music generation uses a persistent, bidirectional,
low-latency streaming connection using
[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

To experience what can be built using Lyria RealTime, try it on AI Studio
using the [Prompt DJ](https://aistudio.google.com/apps/bundled/promptdj) or the
[MIDI DJ](https://aistudio.google.com/apps/bundled/promptdj-midi) apps.

## Generate and control music

Lyria RealTime works similarly to the [Live API](https://ai.google.dev/gemini-api/docs/live)
in that it uses Websockets to maintain real-time communication with the model.

The following code demonstrates how to generate music:

### Python

This example initializes the Lyria RealTime session using
`client.aio.live.music.connect()`

, then sends an
initial prompt with `session.set_weighted_prompts()`

along with an initial
configuration using `session.set_music_generation_config`

, starts the music
generation using `session.play()`

and sets up
`receive_audio()`

to process the audio chunks it receives.

```
import asyncio
from google import genai
from google.genai import types
client = genai.Client(http_options={'api_version': 'v1alpha'})
async def main():
async def receive_audio(session):
"""Example background task to process incoming audio."""
while True:
async for message in session.receive():
audio_data = message.server_content.audio_chunks[0].data
# Process audio...
await asyncio.sleep(10**-12)
async with (
client.aio.live.music.connect(model='models/lyria-realtime-exp') as session,
asyncio.TaskGroup() as tg,
):
# Set up task to receive server messages.
tg.create_task(receive_audio(session))
# Send initial prompts and config
await session.set_weighted_prompts(
prompts=[
types.WeightedPrompt(text='minimal techno', weight=1.0),
]
)
await session.set_music_generation_config(
config=types.LiveMusicGenerationConfig(bpm=90, temperature=1.0)
)
# Start streaming music
await session.play()
if __name__ == "__main__":
asyncio.run(main())
```


### JavaScript

This example initializes the Lyria RealTime session using
`client.live.music.connect()`

, then sends an
initial prompt with `session.setWeightedPrompts()`

along with an initial
configuration using `session.setMusicGenerationConfig`

, starts the music
generation using `session.play()`

and sets up an
`onMessage`

callback to process the audio chunks it receives.

```
import { GoogleGenAI } from "@google/genai";
import Speaker from "speaker";
import { Buffer } from "buffer";
const client = new GoogleGenAI({
apiKey: GEMINI_API_KEY,
apiVersion: "v1alpha" ,
});
async function main() {
const speaker = new Speaker({
channels: 2, // stereo
bitDepth: 16, // 16-bit PCM
sampleRate: 44100, // 44.1 kHz
});
const session = await client.live.music.connect({
model: "models/lyria-realtime-exp",
callbacks: {
onmessage: (message) => {
if (message.serverContent?.audioChunks) {
for (const chunk of message.serverContent.audioChunks) {
const audioBuffer = Buffer.from(chunk.data, "base64");
speaker.write(audioBuffer);
}
}
},
onerror: (error) => console.error("music session error:", error),
onclose: () => console.log("Lyria RealTime stream closed."),
},
});
await session.setWeightedPrompts({
weightedPrompts: [
{ text: "Minimal techno with deep bass, sparse percussion, and atmospheric synths", weight: 1.0 },
],
});
await session.setMusicGenerationConfig({
musicGenerationConfig: {
bpm: 90,
temperature: 1.0,
audioFormat: "pcm16", // important so we know format
sampleRateHz: 44100,
},
});
await session.play();
}
main().catch(console.error);
```


You can then use `session.play()`

, `session.pause()`

, `session.stop()`

and
`session.reset_context()`

to start, pause, stop or reset the session.

## Steer music in real-time

You can steer music generation in real-time by sending prompts and updating generation parameters in real time.

### Prompt Lyria RealTime

While the stream is active, you can send new `WeightedPrompt`

messages at any
time to alter the generated music. The model will smoothly transition based
on the new input.

The prompts need to follow the right format with a `text`

(the
actual prompt), and a `weight`

. The `weight`

can take any value except `0`

. `1.0`

is usually a good starting point.

### Python

```
from google.genai import types
await session.set_weighted_prompts(
prompts=[
{"text": "Piano", "weight": 2.0},
types.WeightedPrompt(text="Meditation", weight=0.5),
types.WeightedPrompt(text="Live Performance", weight=1.0),
]
)
```


### JavaScript

```
await session.setMusicGenerationConfig({
weightedPrompts: [
{ text: 'Harmonica', weight: 0.3 },
{ text: 'Afrobeat', weight: 0.7 }
],
});
```


Note that the model transitions can be a bit abrupt when drastically changing the prompts so it's recommended to implement some kind of cross-fading by sending intermediate weight values to the model.

### Update the configuration

You can steer music generation by updating the music generation parameters in real time. You can't just update a parameter, you need to set the whole configuration otherwise the other fields will be reset back to their default values.

Since updating the bpm or the scale is a drastic change for the model you'll
also need to tell it to reset its context using `reset_context()`

to take the
new config into account. It won't stop the stream, but it will be a hard
transition. You don't need to do it for the other parameters.

### Python

```
from google.genai import types
await session.set_music_generation_config(
config=types.LiveMusicGenerationConfig(
bpm=128,
scale=types.Scale.D_MAJOR_B_MINOR,
music_generation_mode=types.MusicGenerationMode.QUALITY
)
)
await session.reset_context();
```


### JavaScript

```
await session.setMusicGenerationConfig({
musicGenerationConfig: {
bpm: 120,
density: 0.75,
musicGenerationMode: MusicGenerationMode.QUALITY
},
});
await session.reset_context();
```


## Prompt guide for Lyria RealTime

Here's a non-exhaustive list of prompts you can use to prompt Lyria RealTime:

- Instruments:
`303 Acid Bass, 808 Hip Hop Beat, Accordion, Alto Saxophone, Bagpipes, Balalaika Ensemble, Banjo, Bass Clarinet, Bongos, Boomy Bass, Bouzouki, Buchla Synths, Cello, Charango, Clavichord, Conga Drums, Didgeridoo, Dirty Synths, Djembe, Drumline, Dulcimer, Fiddle, Flamenco Guitar, Funk Drums, Glockenspiel, Guitar, Hang Drum, Harmonica, Harp, Harpsichord, Hurdy-gurdy, Kalimba, Koto, Lyre, Mandolin, Maracas, Marimba, Mbira, Mellotron, Metallic Twang, Moog Oscillations, Ocarina, Persian Tar, Pipa, Precision Bass, Ragtime Piano, Rhodes Piano, Shamisen, Shredding Guitar, Sitar, Slide Guitar, Smooth Pianos, Spacey Synths, Steel Drum, Synth Pads, Tabla, TR-909 Drum Machine, Trumpet, Tuba, Vibraphone, Viola Ensemble, Warm Acoustic Guitar, Woodwinds, ...`

- Music Genre:
`Acid Jazz, Afrobeat, Alternative Country, Baroque, Bengal Baul, Bhangra, Bluegrass, Blues Rock, Bossa Nova, Breakbeat, Celtic Folk, Chillout, Chiptune, Classic Rock, Contemporary R&B, Cumbia, Deep House, Disco Funk, Drum & Bass, Dubstep, EDM, Electro Swing, Funk Metal, G-funk, Garage Rock, Glitch Hop, Grime, Hyperpop, Indian Classical, Indie Electronic, Indie Folk, Indie Pop, Irish Folk, Jam Band, Jamaican Dub, Jazz Fusion, Latin Jazz, Lo-Fi Hip Hop, Marching Band, Merengue, New Jack Swing, Minimal Techno, Moombahton, Neo-Soul, Orchestral Score, Piano Ballad, Polka, Post-Punk, 60s Psychedelic Rock, Psytrance, R&B, Reggae, Reggaeton, Renaissance Music, Salsa, Shoegaze, Ska, Surf Rock, Synthpop, Techno, Trance, Trap Beat, Trip Hop, Vaporwave, Witch house, ...`

- Mood/Description:
`Acoustic Instruments, Ambient, Bright Tones, Chill, Crunchy Distortion, Danceable, Dreamy, Echo, Emotional, Ethereal Ambience, Experimental, Fat Beats, Funky, Glitchy Effects, Huge Drop, Live Performance, Lo-fi, Ominous Drone, Psychedelic, Rich Orchestration, Saturated Tones, Subdued Melody, Sustained Chords, Swirling Phasers, Tight Groove, Unsettling, Upbeat, Virtuoso, Weird Noises, ...`


These are just some examples, Lyria RealTime can do much more. Experiment with your own prompts!

## Best practices

- Client applications must implement robust audio buffering to ensure smooth playback. This helps account for network jitter and slight variations in generation latency.
- Effective prompting:
- Be descriptive. Use adjectives describing mood, genre, and instrumentation.
- Iterate and steer gradually. Rather than completely changing the prompt, try adding or modifying elements to morph the music more smoothly.
- Experiment with weight on
`WeightedPrompt`

to influence how strongly a new prompt affects the ongoing generation.


## Technical details

This section describes the specifics of how to use Lyria RealTime music generation.

### Specifications

- Output format: Raw 16-bit PCM Audio
- Sample rate: 48kHz
- Channels: 2 (stereo)

### Controls

Music generation can be influenced in real time by sending messages containing:

`WeightedPrompt`

: A text string describing a musical idea, genre, instrument, mood, or characteristic. Multiple prompts can potentially be supplied to blend influences. See[above](/gemini-api/docs/:#steer-music)for more details on how to best prompt Lyria RealTime.`MusicGenerationConfig`

: Configuration for the music generation process, influencing the characteristics of the output audio.). Parameters include:`guidance`

: (float) Range:`[0.0, 6.0]`

. Default:`4.0`

. Controls how strictly the model follows the prompts. Higher guidance improves adherence to the prompt, but makes transitions more abrupt.`bpm`

: (int) Range:`[60, 200]`

. Sets the Beats Per Minute you want for the generated music. You need to stop/play or reset the context for the model it take into account the new bpm.`density`

: (float) Range:`[0.0, 1.0]`

. Controls the density of musical notes/sounds. Lower values produce sparser music; higher values produce "busier" music.`brightness`

: (float) Range:`[0.0, 1.0]`

. Adjusts the tonal quality. Higher values produce "brighter" sounding audio, generally emphasizing higher frequencies.`scale`

: (Enum) Sets the musical scale (Key and Mode) for the generation. Use theprovided by the SDK. You need to stop/play or reset the context for the model it take into account the new scale.`Scale`

enum values`mute_bass`

: (bool) Default:`False`

. Controls whether the model reduces the outputs' bass.`mute_drums`

: (bool) Default:`False`

. Controls whether the model outputs reduces the outputs' drums.`only_bass_and_drums`

: (bool) Default:`False`

. Steer the model to try to only output bass and drums.`music_generation_mode`

: (Enum) Indicates to the model if it should focus on`QUALITY`

(default value) or`DIVERSITY`

of music. It can also be set to`VOCALIZATION`

to let the model generate vocalizations as another instrument (add them as new pompts).

`PlaybackControl`

: Commands to control playback aspects, such as play, pause, stop or reset the context.

For `bpm`

, `density`

, `brightness`

and `scale`

, if no value is provided, the
model will decide what's best according to your initial prompts.

More classical parameters like `temperature`

(0.0 to 3.0, default 1.1), `top_k`

(1 to 1000, default 40), and `seed`

(0 to 2 147 483 647, randomly selected by
default) are also customizable in the `MusicGenerationConfig`

.

#### Scale Enum Values

Here are all the scale values that the model can accept:

| Enum Value | Scale / Key |
|---|---|
`C_MAJOR_A_MINOR` |
C major / A minor |
`D_FLAT_MAJOR_B_FLAT_MINOR` |
D♭ major / B♭ minor |
`D_MAJOR_B_MINOR` |
D major / B minor |
`E_FLAT_MAJOR_C_MINOR` |
E♭ major / C minor |
`E_MAJOR_D_FLAT_MINOR` |
E major / C♯/D♭ minor |
`F_MAJOR_D_MINOR` |
F major / D minor |
`G_FLAT_MAJOR_E_FLAT_MINOR` |
G♭ major / E♭ minor |
`G_MAJOR_E_MINOR` |
G major / E minor |
`A_FLAT_MAJOR_F_MINOR` |
A♭ major / F minor |
`A_MAJOR_G_FLAT_MINOR` |
A major / F♯/G♭ minor |
`B_FLAT_MAJOR_G_MINOR` |
B♭ major / G minor |
`B_MAJOR_A_FLAT_MINOR` |
B major / G♯/A♭ minor |
`SCALE_UNSPECIFIED` |
Default / The model decides |

The model is capable of guiding the notes that are played, but does
not distinguish between relative keys. Thus each enum corresponds both to the
relative major and minor. For example, `C_MAJOR_A_MINOR`

would correspond to all
the white keys of a piano, and `F_MAJOR_D_MINOR`

would be all the white keys
except B flat.

### Limitations

- Instrumental only: The model generates instrumental music only.
- Safety: Prompts are checked by safety filters. Prompts triggering the filters
will be ignored in which case an explanation will be written in the output's
`filtered_prompt`

field. - Watermarking: Output audio is always watermarked for identification following
our
[Responsible AI](https://ai.google/responsibility/principles/)principles.

## What's next

- Generate full songs and vocal tracks with
[Lyria 3](https://ai.google.dev/gemini-api/docs/music-generation), - Instead of music, learn how to generate multi-speakers conversation using
the
[TTS models](https://ai.google.dev/gemini-api/docs/audio-generation), - Discover how to generate
[images](https://ai.google.dev/gemini-api/docs/image-generation)or[videos](https://ai.google.dev/gemini-api/docs/video), - Instead of generation music or audio, find out how to Gemini can
[understand Audio files](https://ai.google.dev/gemini-api/docs/audio), - Have a real-time conversation with Gemini using the
[Live API](https://ai.google.dev/gemini-api/docs/live).

Explore the [Cookbook](https://github.com/google-gemini/cookbook) for more
code examples and tutorials.

---

## Source: https://ai.google.dev/gemini-api/docs/imagen

Imagen is Google's high-fidelity image generation model, capable of generating
realistic and high quality images from text prompts. All generated images
include a SynthID watermark. To learn more about the available Imagen model
variants, see the [Model versions](#model-versions) section.

## Generate images using the Imagen models

This example demonstrates generating images with an [Imagen model](https://deepmind.google/technologies/imagen/):

### Python

```
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO
client = genai.Client()
response = client.models.generate_images(
model='imagen-4.0-generate-001',
prompt='Robot holding a red skateboard',
config=types.GenerateImagesConfig(
number_of_images= 4,
)
)
for generated_image in response.generated_images:
generated_image.image.show()
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const response = await ai.models.generateImages({
model: 'imagen-4.0-generate-001',
prompt: 'Robot holding a red skateboard',
config: {
numberOfImages: 4,
},
});
let idx = 1;
for (const generatedImage of response.generatedImages) {
let imgBytes = generatedImage.image.imageBytes;
const buffer = Buffer.from(imgBytes, "base64");
fs.writeFileSync(`imagen-${idx}.png`, buffer);
idx++;
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
config := &genai.GenerateImagesConfig{
NumberOfImages: 4,
}
response, _ := client.Models.GenerateImages(
ctx,
"imagen-4.0-generate-001",
"Robot holding a red skateboard",
config,
)
for n, image := range response.GeneratedImages {
fname := fmt.Sprintf("imagen-%d.png", n)
_ = os.WriteFile(fname, image.Image.ImageBytes, 0644)
}
}
```


### REST

```
curl -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"instances": [
{
"prompt": "Robot holding a red skateboard"
}
],
"parameters": {
"sampleCount": 4
}
}'
```


### Imagen configuration

Imagen supports English only prompts at this time and the following parameters:

`numberOfImages`

: The number of images to generate, from 1 to 4 (inclusive). The default is 4.`imageSize`

: The size of the generated image. This is only supported for the Standard and Ultra models. The supported values are`1K`

and`2K`

. Default is`1K`

.`aspectRatio`

: Changes the aspect ratio of the generated image. Supported values are`"1:1"`

,`"3:4"`

,`"4:3"`

,`"9:16"`

, and`"16:9"`

. The default is`"1:1"`

.`personGeneration`

: Allow the model to generate images of people. The following values are supported:`"dont_allow"`

: Block generation of images of people.`"allow_adult"`

: Generate images of adults, but not children. This is the default.`"allow_all"`

: Generate images that include adults and children.


## Imagen prompt guide

This section of the Imagen guide shows you how modifying a text-to-image prompt can produce different results, along with examples of images you can create.

### Prompt writing basics

A good prompt is descriptive and clear, and makes use of meaningful keywords and
modifiers. Start by thinking of your **subject**, **context**, and **style**.

**Subject**: The first thing to think about with any prompt is the*subject*: the object, person, animal, or scenery you want an image of.**Context and background:**Just as important is the*background or context*in which the subject will be placed. Try placing your subject in a variety of backgrounds. For example, a studio with a white background, outdoors, or indoor environments.**Style:**Finally, add the style of image you want.*Styles*can be general (painting, photograph, sketches) or very specific (pastel painting, charcoal drawing, isometric 3D). You can also combine styles.

After you write a first version of your prompt, refine your prompt by adding more details until you get to the image that you want. Iteration is important. Start by establishing your core idea, and then refine and expand upon that core idea until the generated image is close to your vision.

Imagen models can transform your ideas into detailed images, whether your prompts are short or long and detailed. Refine your vision through iterative prompting, adding details until you achieve the perfect result.

|
Short prompts let you generate an image quickly. |
Longer prompts let you add specific details and build your image. |

Additional advice for Imagen prompt writing:

**Use descriptive language**: Employ detailed adjectives and adverbs to paint a clear picture for Imagen.**Provide context**: If necessary, include background information to aid the AI's understanding.**Reference specific artists or styles**: If you have a particular aesthetic in mind, referencing specific artists or art movements can be helpful.**Use prompt engineering tools**: Consider exploring prompt engineering tools or resources to help you refine your prompts and achieve optimal results.**Enhancing the facial details in your personal and group images**: Specify facial details as a focus of the photo (for example, use the word "portrait" in the prompt).

### Generate text in images

Imagen models can add text into images, opening up more creative image generation possibilities. Use the following guidance to get the most out of this feature:

**Iterate with confidence**: You might have to regenerate images until you achieve the look you want. Imagen's text integration is still evolving, and sometimes multiple attempts yield the best results.**Keep it short**: Limit text to 25 characters or less for optimal generation.**Multiple phrases**: Experiment with two or three distinct phrases to provide additional information. Avoid exceeding three phrases for cleaner compositions.**Guide Placement**: While Imagen can attempt to position text as directed, expect occasional variations. This feature is continually improving.**Inspire font style**: Specify a general font style to subtly influence Imagen's choices. Don't rely on precise font replication, but expect creative interpretations.**Font size**: Specify a font size or a general indication of size (for example,*small*,*medium*,*large*) to influence the font size generation.

### Prompt parameterization

To better control output results, you might find it helpful to parameterize the inputs into Imagen. For example, suppose you want your customers to be able to generate logos for their business, and you want to make sure logos are always generated on a solid color background. You also want to limit the options that the client can select from a menu.

In this example, you can create a parameterized prompt similar to the following:

A{logo_style}logo for a{company_area}company on a solid color background. Include the text{company_name}.

In your custom user interface, the customer can input the parameters using a menu, and their chosen value populates the prompt Imagen receives.

For example:

Prompt:

`A`

`minimalist`logo for a`health care`company on a solid color background. Include the text`Journey`.Prompt:

`A`

`modern`logo for a`software`company on a solid color background. Include the text`Silo`.Prompt:

`A`

`traditional`logo for a`baking`company on a solid color background. Include the text`Seed`.

### Advanced prompt writing techniques

Use the following examples to create more specific prompts based on attributes like photography descriptors, shapes and materials, historical art movements, and image quality modifiers.

#### Photography

- Prompt includes:
*"A photo of..."*

To use this style, start with using keywords that clearly tell
Imagen that you're looking for a photograph. Start your prompts with
*"A photo of. . ."*. For example:

Image source: Each image was generated using its corresponding text prompt with the Imagen 4 model.

##### Photography modifiers

In the following examples, you can see several photography-specific modifiers and parameters. You can combine multiple modifiers for more precise control.

**Camera Proximity**-*Close up, taken from far away***Camera Position**-*aerial, from below***Lighting**-*natural, dramatic, warm, cold***Camera Settings***- motion blur, soft focus, bokeh, portrait***Lens types**-*35mm, 50mm, fisheye, wide angle, macro***Film types**-*black and white, polaroid*

Image source: Each image was generated using its corresponding text prompt with the Imagen 4 model.

### Illustration and art

- Prompt includes:
*"A*,`painting`of..."*"A*`sketch`of..."

Art styles vary from monochrome styles like pencil sketches, to hyper-realistic digital art. For example, the following images use the same prompt with different styles:

*"An [art style or creation technique] of an angular
sporty electric sedan with skyscrapers in the background"*

Image source: Each image was generated using its corresponding text prompt with the Imagen 2 model.

##### Shapes and materials

- Prompt includes:
*"...made of..."*,*"...in the shape of..."*

One of the strengths of this technology is that you can create imagery that is otherwise difficult or impossible. For example, you can recreate your company logo in different materials and textures.

Image source: Each image was generated using its corresponding text prompt with the Imagen 4 model.

#### Historical art references

- Prompt includes:
*"...in the style of..."*

Certain styles have become iconic over the years. The following are some ideas of historical painting or art styles that you can try.

*"generate an image in the style of [art period or movement]
: a wind farm"*

Image source: Each image was generated using its corresponding text prompt with the Imagen 4 model.

#### Image quality modifiers

Certain keywords can let the model know that you're looking for a high-quality asset. Examples of quality modifiers include the following:

**General Modifiers**-*high-quality, beautiful, stylized***Photos**-*4K, HDR, Studio Photo***Art, Illustration**-*by a professional, detailed*

The following are a few examples of prompts without quality modifiers and the same prompt with quality modifiers.

Image source: Each image was generated using its corresponding text prompt with the Imagen 4 model.

#### Aspect ratios

Imagen image generation lets you set five distinct image aspect ratios.

**Square**(1:1, default) - A standard square photo. Common uses for this aspect ratio include social media posts.**Fullscreen**(4:3) - This aspect ratio is commonly used in media or film. It is also the dimensions of most old (non-widescreen) TVs and medium format cameras. It captures more of the scene horizontally (compared to 1:1), making it a preferred aspect ratio for photography.**Portrait full screen**(3:4) - This is the fullscreen aspect ratio rotated 90 degrees. This lets to capture more of the scene vertically compared to the 1:1 aspect ratio.**Widescreen**(16:9) - This ratio has replaced 4:3 and is now the most common aspect ratio for TVs, monitors, and mobile phone screens (landscape). Use this aspect ratio when you want to capture more of the background (for example, scenic landscapes).**Portrait**(9:16) - This ratio is widescreen but rotated. This a relatively new aspect ratio that has been popularized by short form video apps (for example, YouTube shorts). Use this for tall objects with strong vertical orientations such as buildings, trees, waterfalls, or other similar objects.

#### Photorealistic images

Different versions of the image generation model might offer a mix of artistic and photorealistic output. Use the following wording in prompts to generate more photorealistic output, based on the subject you want to generate.

| Use case | Lens type | Focal lengths | Additional details |
|---|---|---|---|
| People (portraits) | Prime, zoom | 24-35mm | black and white film, Film noir, Depth of field, duotone (mention two colors) |
| Food, insects, plants (objects, still life) | Macro | 60-105mm | High detail, precise focusing, controlled lighting |
| Sports, wildlife (motion) | Telephoto zoom | 100-400mm | Fast shutter speed, Action or movement tracking |
| Astronomical, landscape (wide-angle) | Wide-angle | 10-24mm | Long exposure times, sharp focus, long exposure, smooth water or clouds |

##### Portraits

| Use case | Lens type | Focal lengths | Additional details |
|---|---|---|---|
| People (portraits) | Prime, zoom | 24-35mm | black and white film, Film noir, Depth of field, duotone (mention two colors) |

Using several keywords from the table, Imagen can generate the following portraits:

Prompt: *A woman, 35mm portrait, blue and grey duotones*

Model: `imagen-4.0-generate-001`


Prompt: *A woman, 35mm portrait, film noir*

Model: `imagen-4.0-generate-001`


##### Objects

| Use case | Lens type | Focal lengths | Additional details |
|---|---|---|---|
| Food, insects, plants (objects, still life) | Macro | 60-105mm | High detail, precise focusing, controlled lighting |

Using several keywords from the table, Imagen can generate the following object images:

Prompt: *leaf of a prayer plant, macro lens, 60mm*

Model: `imagen-4.0-generate-001`


Prompt: *a plate of pasta, 100mm Macro lens*

Model: `imagen-4.0-generate-001`


##### Motion

| Use case | Lens type | Focal lengths | Additional details |
|---|---|---|---|
| Sports, wildlife (motion) | Telephoto zoom | 100-400mm | Fast shutter speed, Action or movement tracking |

Using several keywords from the table, Imagen can generate the following motion images:

Prompt: *a winning touchdown, fast shutter speed, movement tracking*

Model: `imagen-4.0-generate-001`


Prompt: *A deer running in the forest, fast shutter speed, movement tracking*

Model: `imagen-4.0-generate-001`


##### Wide-angle

| Use case | Lens type | Focal lengths | Additional details |
|---|---|---|---|
| Astronomical, landscape (wide-angle) | Wide-angle | 10-24mm | Long exposure times, sharp focus, long exposure, smooth water or clouds |

Using several keywords from the table, Imagen can generate the following wide-angle images:

Prompt: *an expansive mountain range, landscape wide angle 10mm*

Model: `imagen-4.0-generate-001`


Prompt: *a photo of the moon, astro photography, wide angle 10mm*

Model: `imagen-4.0-generate-001`


## Model versions

### Imagen 4

| Property | Description |
|---|---|
| Model code |
|
| Supported data types |
Text
Images |
|
Token limits
480 tokens (text)
1 to 4 (Ultra/Standard/Fast) |
| Latest update | June 2025 |

### Imagen 3

The Imagen 3 model has been [shut down](/gemini-api/docs/deprecations).

---

## Source: https://ai.google.dev/gemini-api/docs/speech-generation

The Gemini API can transform text input into single speaker or multi-speaker
audio using Gemini text-to-speech (TTS) generation capabilities.
Text-to-speech (TTS) generation is * controllable*,
meaning you can use natural language to structure interactions and guide the

*style*,

*accent*,

*pace*, and

*tone*of the audio.

The TTS capability differs from speech generation provided through the
[Live API](/gemini-api/docs/live), which is designed for interactive,
unstructured audio, and multimodal inputs and outputs. While the Live API excels
in dynamic conversational contexts, TTS through the Gemini API
is tailored for scenarios that require exact text recitation with fine-grained
control over style and sound, such as podcast or audiobook generation.

This guide shows you how to generate single-speaker and multi-speaker audio from text.

## Before you begin

Ensure you use a Gemini 2.5 model variant with Gemini text-to-speech (TTS)
capabilities, as listed in the [Supported models](/gemini-api/docs/speech-generation#supported-models) section. For optimal
results, consider which model best fits your specific use case.

You may find it useful to [test the Gemini 2.5 TTS models in AI Studio](https://aistudio.google.com/generate-speech) before you start building.

## Single-speaker TTS

To convert text to single-speaker audio, set the response modality to "audio",
and pass a `SpeechConfig`

object with `VoiceConfig`

set.
You'll need to choose a voice name from the prebuilt [output voices](#voices).

This example saves the output audio from the model in a wave file:

### Python

```
from google import genai
from google.genai import types
import wave
# Set up the wave file to save the output:
def wave_file(filename, pcm, channels=1, rate=24000, sample_width=2):
with wave.open(filename, "wb") as wf:
wf.setnchannels(channels)
wf.setsampwidth(sample_width)
wf.setframerate(rate)
wf.writeframes(pcm)
client = genai.Client()
response = client.models.generate_content(
model="gemini-2.5-flash-preview-tts",
contents="Say cheerfully: Have a wonderful day!",
config=types.GenerateContentConfig(
response_modalities=["AUDIO"],
speech_config=types.SpeechConfig(
voice_config=types.VoiceConfig(
prebuilt_voice_config=types.PrebuiltVoiceConfig(
voice_name='Kore',
)
)
),
)
)
data = response.candidates[0].content.parts[0].inline_data.data
file_name='out.wav'
wave_file(file_name, data) # Saves the file to current directory
```


### JavaScript

```
import {GoogleGenAI} from '@google/genai';
import wav from 'wav';
async function saveWaveFile(
filename,
pcmData,
channels = 1,
rate = 24000,
sampleWidth = 2,
) {
return new Promise((resolve, reject) => {
const writer = new wav.FileWriter(filename, {
channels,
sampleRate: rate,
bitDepth: sampleWidth * 8,
});
writer.on('finish', resolve);
writer.on('error', reject);
writer.write(pcmData);
writer.end();
});
}
async function main() {
const ai = new GoogleGenAI({});
const response = await ai.models.generateContent({
model: "gemini-2.5-flash-preview-tts",
contents: [{ parts: [{ text: 'Say cheerfully: Have a wonderful day!' }] }],
config: {
responseModalities: ['AUDIO'],
speechConfig: {
voiceConfig: {
prebuiltVoiceConfig: { voiceName: 'Kore' },
},
},
},
});
const data = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
const audioBuffer = Buffer.from(data, 'base64');
const fileName = 'out.wav';
await saveWaveFile(fileName, audioBuffer);
}
await main();
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-X POST \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts":[{
"text": "Say cheerfully: Have a wonderful day!"
}]
}],
"generationConfig": {
"responseModalities": ["AUDIO"],
"speechConfig": {
"voiceConfig": {
"prebuiltVoiceConfig": {
"voiceName": "Kore"
}
}
}
},
"model": "gemini-2.5-flash-preview-tts",
}' | jq -r '.candidates[0].content.parts[0].inlineData.data' | \
base64 --decode >out.pcm
# You may need to install ffmpeg.
ffmpeg -f s16le -ar 24000 -ac 1 -i out.pcm out.wav
```


## Multi-speaker TTS

For multi-speaker audio, you'll need a `MultiSpeakerVoiceConfig`

object with
each speaker (up to 2) configured as a `SpeakerVoiceConfig`

.
You'll need to define each `speaker`

with the same names used in the
[prompt](#controllable):

### Python

```
from google import genai
from google.genai import types
import wave
# Set up the wave file to save the output:
def wave_file(filename, pcm, channels=1, rate=24000, sample_width=2):
with wave.open(filename, "wb") as wf:
wf.setnchannels(channels)
wf.setsampwidth(sample_width)
wf.setframerate(rate)
wf.writeframes(pcm)
client = genai.Client()
prompt = """TTS the following conversation between Joe and Jane:
Joe: How's it going today Jane?
Jane: Not too bad, how about you?"""
response = client.models.generate_content(
model="gemini-2.5-flash-preview-tts",
contents=prompt,
config=types.GenerateContentConfig(
response_modalities=["AUDIO"],
speech_config=types.SpeechConfig(
multi_speaker_voice_config=types.MultiSpeakerVoiceConfig(
speaker_voice_configs=[
types.SpeakerVoiceConfig(
speaker='Joe',
voice_config=types.VoiceConfig(
prebuilt_voice_config=types.PrebuiltVoiceConfig(
voice_name='Kore',
)
)
),
types.SpeakerVoiceConfig(
speaker='Jane',
voice_config=types.VoiceConfig(
prebuilt_voice_config=types.PrebuiltVoiceConfig(
voice_name='Puck',
)
)
),
]
)
)
)
)
data = response.candidates[0].content.parts[0].inline_data.data
file_name='out.wav'
wave_file(file_name, data) # Saves the file to current directory
```


### JavaScript

```
import {GoogleGenAI} from '@google/genai';
import wav from 'wav';
async function saveWaveFile(
filename,
pcmData,
channels = 1,
rate = 24000,
sampleWidth = 2,
) {
return new Promise((resolve, reject) => {
const writer = new wav.FileWriter(filename, {
channels,
sampleRate: rate,
bitDepth: sampleWidth * 8,
});
writer.on('finish', resolve);
writer.on('error', reject);
writer.write(pcmData);
writer.end();
});
}
async function main() {
const ai = new GoogleGenAI({});
const prompt = `TTS the following conversation between Joe and Jane:
Joe: How's it going today Jane?
Jane: Not too bad, how about you?`;
const response = await ai.models.generateContent({
model: "gemini-2.5-flash-preview-tts",
contents: [{ parts: [{ text: prompt }] }],
config: {
responseModalities: ['AUDIO'],
speechConfig: {
multiSpeakerVoiceConfig: {
speakerVoiceConfigs: [
{
speaker: 'Joe',
voiceConfig: {
prebuiltVoiceConfig: { voiceName: 'Kore' }
}
},
{
speaker: 'Jane',
voiceConfig: {
prebuiltVoiceConfig: { voiceName: 'Puck' }
}
}
]
}
}
}
});
const data = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
const audioBuffer = Buffer.from(data, 'base64');
const fileName = 'out.wav';
await saveWaveFile(fileName, audioBuffer);
}
await main();
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-X POST \
-H "Content-Type: application/json" \
-d '{
"contents": [{
"parts":[{
"text": "TTS the following conversation between Joe and Jane:
Joe: Hows it going today Jane?
Jane: Not too bad, how about you?"
}]
}],
"generationConfig": {
"responseModalities": ["AUDIO"],
"speechConfig": {
"multiSpeakerVoiceConfig": {
"speakerVoiceConfigs": [{
"speaker": "Joe",
"voiceConfig": {
"prebuiltVoiceConfig": {
"voiceName": "Kore"
}
}
}, {
"speaker": "Jane",
"voiceConfig": {
"prebuiltVoiceConfig": {
"voiceName": "Puck"
}
}
}]
}
}
},
"model": "gemini-2.5-flash-preview-tts",
}' | jq -r '.candidates[0].content.parts[0].inlineData.data' | \
base64 --decode > out.pcm
# You may need to install ffmpeg.
ffmpeg -f s16le -ar 24000 -ac 1 -i out.pcm out.wav
```


## Controlling speech style with prompts

You can control style, tone, accent, and pace using natural language prompts for both single- and multi-speaker TTS. For example, in a single-speaker prompt, you can say:

```
Say in an spooky whisper:
"By the pricking of my thumbs...
Something wicked this way comes"
```


In a multi-speaker prompt, provide the model with each speaker's name and corresponding transcript. You can also provide guidance for each speaker individually:

```
Make Speaker1 sound tired and bored, and Speaker2 sound excited and happy:
Speaker1: So... what's on the agenda today?
Speaker2: You're never going to guess!
```


Try using a [voice option](#voices) that corresponds to the style or emotion you
want to convey, to emphasize it even more. In the previous prompt, for example,
*Enceladus*'s breathiness might emphasize "tired" and "bored", while
*Puck*'s upbeat tone could complement "excited" and "happy".

## Generating a prompt to convert to audio

The TTS models only output audio, but you can use
[other models](/gemini-api/docs/models) to generate a transcript first,
then pass that transcript to the TTS model to read aloud.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
transcript = client.models.generate_content(
model="gemini-2.5-flash",
contents="""Generate a short transcript around 100 words that reads
like it was clipped from a podcast by excited herpetologists.
The hosts names are Dr. Anya and Liam.""").text
response = client.models.generate_content(
model="gemini-2.5-flash-preview-tts",
contents=transcript,
config=types.GenerateContentConfig(
response_modalities=["AUDIO"],
speech_config=types.SpeechConfig(
multi_speaker_voice_config=types.MultiSpeakerVoiceConfig(
speaker_voice_configs=[
types.SpeakerVoiceConfig(
speaker='Dr. Anya',
voice_config=types.VoiceConfig(
prebuilt_voice_config=types.PrebuiltVoiceConfig(
voice_name='Kore',
)
)
),
types.SpeakerVoiceConfig(
speaker='Liam',
voice_config=types.VoiceConfig(
prebuilt_voice_config=types.PrebuiltVoiceConfig(
voice_name='Puck',
)
)
),
]
)
)
)
)
# ...Code to stream or save the output
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const transcript = await ai.models.generateContent({
model: "gemini-2.5-flash",
contents: "Generate a short transcript around 100 words that reads like it was clipped from a podcast by excited herpetologists. The hosts names are Dr. Anya and Liam.",
})
const response = await ai.models.generateContent({
model: "gemini-2.5-flash-preview-tts",
contents: transcript,
config: {
responseModalities: ['AUDIO'],
speechConfig: {
multiSpeakerVoiceConfig: {
speakerVoiceConfigs: [
{
speaker: "Dr. Anya",
voiceConfig: {
prebuiltVoiceConfig: {voiceName: "Kore"},
}
},
{
speaker: "Liam",
voiceConfig: {
prebuiltVoiceConfig: {voiceName: "Puck"},
}
}
]
}
}
}
});
}
// ..JavaScript code for exporting .wav file for output audio
await main();
```


## Voice options

TTS models support the following 30 voice options in the `voice_name`

field:

Zephyr -- Bright |
Puck -- Upbeat |
Charon -- Informative |
Kore -- Firm |
Fenrir -- Excitable |
Leda -- Youthful |
Orus -- Firm |
Aoede -- Breezy |
Callirrhoe -- Easy-going |
Autonoe -- Bright |
Enceladus -- Breathy |
Iapetus -- Clear |
Umbriel -- Easy-going |
Algieba -- Smooth |
Despina -- Smooth |
Erinome -- Clear |
Algenib -- Gravelly |
Rasalgethi -- Informative |
Laomedeia -- Upbeat |
Achernar -- Soft |
Alnilam -- Firm |
Schedar -- Even |
Gacrux -- Mature |
Pulcherrima -- Forward |
Achird -- Friendly |
Zubenelgenubi -- Casual |
Vindemiatrix -- Gentle |
Sadachbia -- Lively |
Sadaltager -- Knowledgeable |
Sulafat -- Warm |

You can hear all the voice options in
[AI Studio](https://aistudio.google.com/generate-speech).

## Supported languages

The TTS models detect the input language automatically. The following languages are supported:

| Language | BCP-47 Code | Language | BCP-47 Code |
|---|---|---|---|
| Arabic | ar | Filipino | fil |
| Bangla | bn | Finnish | fi |
| Dutch | nl | Galician | gl |
| English | en | Georgian | ka |
| French | fr | Greek | el |
| German | de | Gujarati | gu |
| Hindi | hi | Haitian Creole | ht |
| Indonesian | id | Hebrew | he |
| Italian | it | Hungarian | hu |
| Japanese | ja | Icelandic | is |
| Korean | ko | Javanese | jv |
| Marathi | mr | Kannada | kn |
| Polish | pl | Konkani | kok |
| Portuguese | pt | Lao | lo |
| Romanian | ro | Latin | la |
| Russian | ru | Latvian | lv |
| Spanish | es | Lithuanian | lt |
| Tamil | ta | Luxembourgish | lb |
| Telugu | te | Macedonian | mk |
| Thai | th | Maithili | mai |
| Turkish | tr | Malagasy | mg |
| Ukrainian | uk | Malay | ms |
| Vietnamese | vi | Malayalam | ml |
| Afrikaans | af | Mongolian | mn |
| Albanian | sq | Nepali | ne |
| Amharic | am | Norwegian, Bokmål | nb |
| Armenian | hy | Norwegian, Nynorsk | nn |
| Azerbaijani | az | Odia | or |
| Basque | eu | Pashto | ps |
| Belarusian | be | Persian | fa |
| Bulgarian | bg | Punjabi | pa |
| Burmese | my | Serbian | sr |
| Catalan | ca | Sindhi | sd |
| Cebuano | ceb | Sinhala | si |
| Chinese, Mandarin | cmn | Slovak | sk |
| Croatian | hr | Slovenian | sl |
| Czech | cs | Swahili | sw |
| Danish | da | Swedish | sv |
| Estonian | et | Urdu | ur |

## Supported models

| Model | Single speaker | Multispeaker |
|---|---|---|
|

[Gemini 2.5 Pro Preview TTS](/gemini-api/docs/models/gemini-2.5-pro-preview-tts)## Limitations

- TTS models can only receive text inputs and generate audio outputs.
- A TTS session has a
[context window](/gemini-api/docs/long-context)limit of 32k tokens. - Review
[Languages](/gemini-api/docs/speech-generation#languages)section for language support.

## Prompting guide

The **Gemini Native Audio Generation Text-to-Speech (TTS)** model differentiates
itself from traditional TTS models by using a large language model that
knows ** not only what to say, but also how to say it**.

To unlock this capability, users can think of themselves as directors setting a
scene for a virtual voice talent to perform. To craft a prompt, we recommend
considering the following components: an **Audio Profile** that defines the
character's core identity and archetype; a **Scene description** that
establishes the physical environment and emotional "vibe"; and **Director's
Notes** that offer more precise performance guidance regarding style, accent and
pace control.

By providing nuanced instructions such as a precise regional accent, specific
paralinguistic features (e.g. breathiness), or pacing, users can leverage the
model's context awareness to generate highly dynamic, natural and expressive
audio performances. For optimal performance, we recommend the **Transcript** and
directorial prompts align, *so that "who is saying it"* matches with *"what is
said"* and *"how it is being said."*

The purpose of this guide is to offer fundamental direction and spark ideas when developing audio experiences using Gemini TTS audio generation. We are excited to witness what you create!

### Prompting structure

A robust prompt ideally includes the following elements that come together to craft a great performance:

**Audio Profile**- Establishes a persona for the voice, defining a character identity, archetype and any other characteristics like age, background etc.**Scene**- Sets the stage. Describes both the physical environment and the "vibe".**Director's Notes**- Performance guidance where you can break down which instructions are important for your virtual talent to take note of. Examples are style, breathing, pacing, articulation and accent.**Sample context**- Gives the model a contextual starting point, so your virtual actor enters the scene you set up naturally.**Transcript**- The text that the model will speak out. For best performance, remember that the transcript topic and writing style should correlate to the directions you are giving.

Example full prompt:

```
# AUDIO PROFILE: Jaz R.
## "The Morning Hype"
## THE SCENE: The London Studio
It is 10:00 PM in a glass-walled studio overlooking the moonlit London skyline,
but inside, it is blindingly bright. The red "ON AIR" tally light is blazing.
Jaz is standing up, not sitting, bouncing on the balls of their heels to the
rhythm of a thumping backing track. Their hands fly across the faders on a
massive mixing desk. It is a chaotic, caffeine-fueled cockpit designed to wake
up an entire nation.
### DIRECTOR'S NOTES
Style:
* The "Vocal Smile": You must hear the grin in the audio. The soft palate is
always raised to keep the tone bright, sunny, and explicitly inviting.
* Dynamics: High projection without shouting. Punchy consonants and elongated
vowels on excitement words (e.g., "Beauuutiful morning").
Pace: Speaks at an energetic pace, keeping up with the fast music. Speaks
with A "bouncing" cadence. High-speed delivery with fluid transitions — no dead
air, no gaps.
Accent: Jaz is from Brixton, London
### SAMPLE CONTEXT
Jaz is the industry standard for Top 40 radio, high-octane event promos, or any
script that requires a charismatic Estuary accent and 11/10 infectious energy.
#### TRANSCRIPT
Yes, massive vibes in the studio! You are locked in and it is absolutely
popping off in London right now. If you're stuck on the tube, or just sat
there pretending to work... stop it. Seriously, I see you. Turn this up!
We've got the project roadmap landing in three, two... let's go!
```


### Detailed Prompting Strategies

Let's break down each element of the prompt.

#### Audio Profile

Briefly describe the persona of the character.

**Name.**Giving your character a name helps ground the model and tight performance together, Refer to the character by name when setting the scene and context**Role.**Core identity and archetype of the character that's playing out in the scene. e.g., Radio DJ, Podcaster, News reporter etc.

Examples:

```
# AUDIO PROFILE: Jaz R.
## "The Morning Hype"
```


```
# AUDIO PROFILE: Monica A.
## "The Beauty Influencer"
```


#### Scene

Set the context for the scene, including location, mood, and environmental details that establish the tone and vibe. Describe what is happening around the character and how it affects them. The scene provides the environmental context for the entire interaction and guides the acting performance in a subtle organic way.

Examples:

```
## THE SCENE: The London Studio
It is 10:00 PM in a glass-walled studio overlooking the moonlit London skyline,
but inside, it is blindingly bright. The red "ON AIR" tally light is blazing.
Jaz is standing up, not sitting, bouncing on the balls of their heels to the
rhythm of a thumping backing track. Their hands fly across the faders on a
massive mixing desk. It is a chaotic, caffeine-fueled cockpit designed to
wake up an entire nation.
```


```
## THE SCENE: Homegrown Studio
A meticulously sound-treated bedroom in a suburban home. The space is
deadened by plush velvet curtains and a heavy rug, but there is a
distinct "proximity effect."
```


#### Directors notes

This critical section includes specific performance guidance. You can skip all the other elements, but we recommend you include this element.

Define only what's important to the performance, being careful to not overspecify. Too many strict rules will limit the models' creativity and may result in a worse performance. Balance the role and scene description with the specific performance rules.

The most common directions are **Style, Pacing and Accent**, but the model is
not limited to these, nor requires them. Feel free to include custom
instructions to cover any additional details important to your performance, and
go into as much or as little detail as necessary.

For example:

```
### DIRECTOR'S NOTES
Style: Enthusiastic and Sassy GenZ beauty YouTuber
Pacing: Speaks at an energetic pace, keeping up with the extremely fast, rapid
delivery influencers use in short form videos.
Accent: Southern california valley girl from Laguna Beach |
```


**Style:**

Sets the tone and Style of the generated speech. Include things like upbeat,
energetic, relaxed, bored etc. to guide the performance. Be descriptive and
provide as much detail as necessary: *"Infectious enthusiasm. The listener
should feel like they are part of a massive, exciting community event."* works
better than simply saying *"energetic and enthusiastic".*

You can even try terms that are popular in the voiceover industry, like "vocal smile". You can layer as many style characteristics as you want.

Examples:

Simple Emotion

```
DIRECTORS NOTES
...
Style: Frustrated and angry developer who can't get the build to run.
...
```


More depth

```
DIRECTORS NOTES
...
Style: Sassy GenZ beauty YouTuber, who mostly creates content for YouTube Shorts.
...
```


Complex

```
DIRECTORS NOTES
Style:
* The "Vocal Smile": You must hear the grin in the audio. The soft palate is
always raised to keep the tone bright, sunny, and explicitly inviting.
*Dynamics: High projection without shouting. Punchy consonants and
elongated vowels on excitement words (e.g., "Beauuutiful morning").
```


**Accent:**

Describe the desired accent. The more specific you are, the better the
results are. For example use "*British English accent as heard in Croydon,
England*" vs "*British Accent*".

Examples:

```
### DIRECTORS NOTES
...
Accent: Southern california valley girl from Laguna Beach
...
```


```
### DIRECTORS NOTES
...
Accent: Jaz is a from Brixton, London
...
```


**Pacing:**

Overall pacing and pace variation throughout the piece.

Examples:

Simple

```
### DIRECTORS NOTES
...
Pacing: Speak as fast as possible
...
```


More Depth

```
### DIRECTORS NOTES
...
Pacing: Speaks at a faster, energetic pace, keeping up with fast paced music.
...
```


Complex

```
### DIRECTORS NOTES
...
Pacing: The "Drift": The tempo is incredibly slow and liquid. Words bleed into each other. There is zero urgency.
...
```


**Give it a try**

Try some of these examples yourself on
[AI Studio](https://aistudio.google.com/generate-speech), play with our
[TTS App](http://aistudio.google.com/app/apps/bundled/synergy_intro) and let
Gemini put you in the directors chair. Keep these tips in mind to make great
vocal performances:

- Remember to keep the entire prompt coherent – the script and direction go hand in hand in creating a great performance.
- Don't feel you have to describe everything, sometimes giving the model space to fill in the gaps helps naturalness. (Just like a talented actor)
- If you ever are feeling stuck, have Gemini lend you a hand to help you craft your script or performance.

## What's next

- Try the
[audio generation cookbook](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Get_started_TTS.ipynb). - Gemini's
[Live API](/gemini-api/docs/live)offers interactive audio generation options you can interleave with other modalities. - For working with audio
*inputs*, visit the[Audio understanding](/gemini-api/docs/audio)guide.

---

## Source: https://ai.google.dev/gemini-api/docs/embeddings

The Gemini API offers embedding models to generate embeddings for text, images, video, and other content. These resulting embeddings can then be used for tasks such as semantic search, classification, and clustering, providing more accurate, context-aware results than keyword-based approaches.

The latest model, `gemini-embedding-2-preview`

, is the first multimodal
embedding model in the Gemini API. It maps text, images,
video, audio, and documents into a unified embedding space, enabling cross-modal
search, classification, and clustering across over 100 languages. See the
[multimodal embeddings section](#multimodal) to learn more. For text-only
use cases, `gemini-embedding-001`

remains available.

Building Retrieval Augmented Generation (RAG) systems is a common use case for
AI products. Embeddings play a key role in significantly enhancing model outputs
with improved factual accuracy, coherence, and contextual richness. If you prefer
to use a managed RAG solution, we built the [File Search](/gemini-api/docs/file-search)
tool which makes doing RAG easier to manage and more cost effective.

## Generating embeddings

Use the `embedContent`

method to generate text embeddings:

### Python

```
from google import genai
client = genai.Client()
result = client.models.embed_content(
model="gemini-embedding-001",
contents="What is the meaning of life?"
)
print(result.embeddings)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
async function main() {
const ai = new GoogleGenAI({});
const response = await ai.models.embedContent({
model: 'gemini-embedding-001',
contents: 'What is the meaning of life?',
});
console.log(response.embeddings);
}
main();
```


### Go

```
package main
import (
"context"
"encoding/json"
"fmt"
"log"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
contents := []*genai.Content{
genai.NewContentFromText("What is the meaning of life?", genai.RoleUser),
}
result, err := client.Models.EmbedContent(ctx,
"gemini-embedding-001",
contents,
nil,
)
if err != nil {
log.Fatal(err)
}
embeddings, err := json.MarshalIndent(result.Embeddings, "", " ")
if err != nil {
log.Fatal(err)
}
fmt.Println(string(embeddings))
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: ${GEMINI_API_KEY}" \
-d '{
"model": "models/gemini-embedding-001",
"content": {
"parts": [{
"text": "What is the meaning of life?"
}]
}
}'
```


You can also generate embeddings for multiple chunks at once by passing them in as a list of strings.

### Python

```
from google import genai
client = genai.Client()
result = client.models.embed_content(
model="gemini-embedding-001",
contents= [
"What is the meaning of life?",
"What is the purpose of existence?",
"How do I bake a cake?"
]
)
for embedding in result.embeddings:
print(embedding)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
async function main() {
const ai = new GoogleGenAI({});
const response = await ai.models.embedContent({
model: 'gemini-embedding-001',
contents: [
'What is the meaning of life?',
'What is the purpose of existence?',
'How do I bake a cake?'
],
});
console.log(response.embeddings);
}
main();
```


### Go

```
package main
import (
"context"
"encoding/json"
"fmt"
"log"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
contents := []*genai.Content{
genai.NewContentFromText("What is the meaning of life?"),
genai.NewContentFromText("How does photosynthesis work?"),
genai.NewContentFromText("Tell me about the history of the internet."),
}
result, err := client.Models.EmbedContent(ctx,
"gemini-embedding-001",
contents,
nil,
)
if err != nil {
log.Fatal(err)
}
embeddings, err := json.MarshalIndent(result.Embeddings, "", " ")
if err != nil {
log.Fatal(err)
}
fmt.Println(string(embeddings))
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"content": {
"parts": [
{
"text": "What is the meaning of life?"
},
{
"text": "How much wood would a woodchuck chuck?"
},
{
"text": "How does the brain work?"
}
]
},
"taskType": "SEMANTIC_SIMILARITY"
}'
```


## Specify task type to improve performance

You can use embeddings for a wide range of tasks from classification to document
search. Specifying the right task type helps optimize the embeddings for the
intended relationships, maximizing accuracy and efficiency. For a complete list
of supported task types, see the [Supported task types](#supported-task-types)
table.

The following example shows how you can use
`SEMANTIC_SIMILARITY`

to check how similar in meaning strings of texts are.

### Python

```
from google import genai
from google.genai import types
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
client = genai.Client()
texts = [
"What is the meaning of life?",
"What is the purpose of existence?",
"How do I bake a cake?",
]
result = client.models.embed_content(
model="gemini-embedding-001",
contents=texts,
config=types.EmbedContentConfig(task_type="SEMANTIC_SIMILARITY")
)
# Create a 3x3 table to show the similarity matrix
df = pd.DataFrame(
cosine_similarity([e.values for e in result.embeddings]),
index=texts,
columns=texts,
)
print(df)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
// npm i compute-cosine-similarity
import * as cosineSimilarity from "compute-cosine-similarity";
async function main() {
const ai = new GoogleGenAI({});
const texts = [
"What is the meaning of life?",
"What is the purpose of existence?",
"How do I bake a cake?",
];
const response = await ai.models.embedContent({
model: 'gemini-embedding-001',
contents: texts,
config: { taskType: 'SEMANTIC_SIMILARITY' },
});
const embeddings = response.embeddings.map(e => e.values);
for (let i = 0; i < texts.length; i++) {
for (let j = i + 1; j < texts.length; j++) {
const text1 = texts[i];
const text2 = texts[j];
const similarity = cosineSimilarity(embeddings[i], embeddings[j]);
console.log(`Similarity between '${text1}' and '${text2}': ${similarity.toFixed(4)}`);
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"math"
"google.golang.org/genai"
)
// cosineSimilarity calculates the similarity between two vectors.
func cosineSimilarity(a, b []float32) (float64, error) {
if len(a) != len(b) {
return 0, fmt.Errorf("vectors must have the same length")
}
var dotProduct, aMagnitude, bMagnitude float64
for i := 0; i < len(a); i++ {
dotProduct += float64(a[i] * b[i])
aMagnitude += float64(a[i] * a[i])
bMagnitude += float64(b[i] * b[i])
}
if aMagnitude == 0 || bMagnitude == 0 {
return 0, nil
}
return dotProduct / (math.Sqrt(aMagnitude) * math.Sqrt(bMagnitude)), nil
}
func main() {
ctx := context.Background()
client, _ := genai.NewClient(ctx, nil)
defer client.Close()
texts := []string{
"What is the meaning of life?",
"What is the purpose of existence?",
"How do I bake a cake?",
}
var contents []*genai.Content
for _, text := range texts {
contents = append(contents, genai.NewContentFromText(text, genai.RoleUser))
}
result, _ := client.Models.EmbedContent(ctx,
"gemini-embedding-001",
contents,
&genai.EmbedContentRequest{TaskType: genai.TaskTypeSemanticSimilarity},
)
embeddings := result.Embeddings
for i := 0; i < len(texts); i++ {
for j := i + 1; j < len(texts); j++ {
similarity, _ := cosineSimilarity(embeddings[i].Values, embeddings[j].Values)
fmt.Printf("Similarity between '%s' and '%s': %.4f\n", texts[i], texts[j], similarity)
}
}
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"taskType": "SEMANTIC_SIMILARITY",
"content": {
"parts": [
{
"text": "What is the meaning of life?"
},
{
"text": "How much wood would a woodchuck chuck?"
},
{
"text": "How does the brain work?"
}
]
}
}'
```


The code snippets will show how similar the different chunks of text are to one another when run.

### Supported task types

| Task type | Description | Examples |
|---|---|---|
SEMANTIC_SIMILARITY |
Embeddings optimized to assess text similarity. | Recommendation systems, duplicate detection |
CLASSIFICATION |
Embeddings optimized to classify texts according to preset labels. | Sentiment analysis, spam detection |
CLUSTERING |
Embeddings optimized to cluster texts based on their similarities. | Document organization, market research, anomaly detection |
RETRIEVAL_DOCUMENT |
Embeddings optimized for document search. | Indexing articles, books, or web pages for search. |
RETRIEVAL_QUERY |
Embeddings optimized for general search queries.
Use `RETRIEVAL_QUERY` for queries; `RETRIEVAL_DOCUMENT` for documents to be retrieved.
|
Custom search |
CODE_RETRIEVAL_QUERY |
Embeddings optimized for retrieval of code blocks based on natural language queries.
Use `CODE_RETRIEVAL_QUERY` for queries; `RETRIEVAL_DOCUMENT` for code blocks to be retrieved.
|
Code suggestions and search |
QUESTION_ANSWERING |
Embeddings for questions in a question-answering system, optimized for finding documents that answer the question.
Use `QUESTION_ANSWERING` for questions; `RETRIEVAL_DOCUMENT` for documents to be retrieved.
|
Chatbox |
FACT_VERIFICATION |
Embeddings for statements that need to be verified, optimized for retrieving documents that contain evidence supporting or refuting the statement.
Use `FACT_VERIFICATION` for the target text; `RETRIEVAL_DOCUMENT` for documents to be retrieved
|
Automated fact-checking systems |

## Controlling embedding size

Both `gemini-embedding-001`

and `gemini-embedding-2-preview`

are trained using
the Matryoshka Representation Learning (MRL) technique which teaches a model to
learn high-dimensional embeddings that have initial segments (or prefixes) which
are also useful, simpler versions of the same data.

Use the `output_dimensionality`

parameter to control the size of
the output embedding vector. Selecting a smaller output dimensionality can save
storage space and increase computational efficiency for downstream applications,
while sacrificing little in terms of quality. By default, both models output a
3072-dimensional embedding, but you can truncate it to a smaller size without
losing quality to save storage space. We recommend using 768, 1536, or 3072
output dimensions.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
result = client.models.embed_content(
model="gemini-embedding-001",
contents="What is the meaning of life?",
config=types.EmbedContentConfig(output_dimensionality=768)
)
[embedding_obj] = result.embeddings
embedding_length = len(embedding_obj.values)
print(f"Length of embedding: {embedding_length}")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
async function main() {
const ai = new GoogleGenAI({});
const response = await ai.models.embedContent({
model: 'gemini-embedding-001',
contents: 'What is the meaning of life?',
config: { outputDimensionality: 768 },
});
const embeddingLength = response.embeddings[0].values.length;
console.log(`Length of embedding: ${embeddingLength}`);
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
// The client uses Application Default Credentials.
// Authenticate with 'gcloud auth application-default login'.
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
defer client.Close()
contents := []*genai.Content{
genai.NewContentFromText("What is the meaning of life?", genai.RoleUser),
}
result, err := client.Models.EmbedContent(ctx,
"gemini-embedding-001",
contents,
&genai.EmbedContentRequest{OutputDimensionality: 768},
)
if err != nil {
log.Fatal(err)
}
embedding := result.Embeddings[0]
embeddingLength := len(embedding.Values)
fmt.Printf("Length of embedding: %d\n", embeddingLength)
}
```


### REST

```
curl -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent" \
-H 'Content-Type: application/json' \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-d '{
"content": {"parts":[{ "text": "What is the meaning of life?"}]},
"output_dimensionality": 768
}'
```


Example output from the code snippet:

```
Length of embedding: 768
```


## Ensuring quality for smaller dimensions

The 3072 dimension embedding is normalized. Normalized embeddings produce more accurate semantic similarity by comparing vector direction, not magnitude. For other dimensions, including 768 and 1536, you need to normalize the embeddings as follows:

### Python

```
import numpy as np
from numpy.linalg import norm
embedding_values_np = np.array(embedding_obj.values)
normed_embedding = embedding_values_np / np.linalg.norm(embedding_values_np)
print(f"Normed embedding length: {len(normed_embedding)}")
print(f"Norm of normed embedding: {np.linalg.norm(normed_embedding):.6f}") # Should be very close to 1
```


Example output from this code snippet:

```
Normed embedding length: 768
Norm of normed embedding: 1.000000
```


The following table shows the MTEB scores, a commonly used benchmark for embeddings, for different dimensions. Notably, the result shows that performance is not strictly tied to the size of the embedding dimension, with lower dimensions achieving scores comparable to their higher dimension counterparts.

| MRL Dimension | MTEB Score (Gemini Embedding 001) |
|---|---|
| 2048 | 68.16 |
| 1536 | 68.17 |
| 768 | 67.99 |
| 512 | 67.55 |
| 256 | 66.19 |
| 128 | 63.31 |

## Multimodal embeddings

The `gemini-embedding-2-preview`

model supports multimodal input, allowing you
to embed images, video, audio, and documents content alongside text. All modalities
are mapped into the same embedding space, enabling cross-modal search and
comparison.

### Supported modalities and limits

The overall maximum input tokens limit is 8192 tokens.

| Modality | Specifications and limits |
|---|---|
Text |
Supports up to 8,192 tokens. |
Image |
Maximum of 6 images per request. Supported formats: PNG, JPEG. |
Audio |
Maximum duration of 80 seconds. Supported formats: MP3, WAV. |
Video |
Maximum duration of 120 seconds. Supported formats: MP4, MOV. Supported codecs: H264, H265, AV1, VP9. The system processes a maximum of 32 frames per video: short videos (≤32s) are sampled at 1 fps, while longer videos are uniformly sampled to 32 frames. Audio tracks are not processed in video files. |
Documents (PDF) |
Maximum of 6 pages. |

### Embedding images

The following example shows how to embed an image using
`gemini-embedding-2-preview`

.

Images can be provided as inline data or as uploaded files
through the [Files API](/gemini-api/docs/files).

### Python

```
from google import genai
from google.genai import types
with open('example.png', 'rb') as f:
image_bytes = f.read()
client = genai.Client()
result = client.models.embed_content(
model='gemini-embedding-2-preview',
contents=[
types.Part.from_bytes(
data=image_bytes,
mime_type='image/png',
),
]
)
print(result.embeddings)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imgBase64 = fs.readFileSync("example.png", { encoding: "base64" });
const response = await ai.models.embedContent({
model: 'gemini-embedding-2-preview',
contents: [{
inlineData: {
mimeType: 'image/png',
data: imgBase64,
},
}],
});
console.log(response.embeddings);
}
main();
```


### REST

```
IMG_PATH="/path/to/your/image.png"
IMG_BASE64=$(base64 -w0 "${IMG_PATH}")
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2-preview:embedContent" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: ${GEMINI_API_KEY}" \
-d '{
"content": {
"parts": [{
"inline_data": {
"mime_type": "image/png",
"data": "'"${IMG_BASE64}"'"
}
}]
}
}'
```


### Embedding aggregation

When working with multimodal content, how you structure your input affects the embedding output:

**Single content entry:**Submitting multiple parts (for example, text and an image) within a single content entry produces one aggregated embedding for all modalities within that entry.**Multiple entries:**Sending multiple entries in the`contents`

array returns separate embeddings for each entry.**Post-level representation:**For complex objects like social media posts with multiple media items, we recommend aggregating separate embeddings (for example, by averaging) to create a coherent post-level representation.

The following example shows how to create one aggregated embedding for text and image input.
Use the `parts`

field to combine multiple inputs:

### Python

```
from google import genai
from google.genai import types
with open('dog.png', 'rb') as f:
image_bytes = f.read()
result = client.models.embed_content(
model='gemini-embedding-2-preview',
contents=[
types.Content(
parts=[
types.Part(text="An image of a dog"),
types.Part.from_bytes(
data=image_bytes,
mime_type='image/png',
)
]
)
]
)
# This produces one embedding
for embedding in result.embeddings:
print(embedding.values)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imgBase64 = fs.readFileSync("dog.png", { encoding: "base64" });
const response = await ai.models.embedContent({
model: 'gemini-embedding-2-preview',
contents: {
parts: [
{ text: 'An image of a dog' },
{ inlineData: { mimeType: 'image/png', data: imgBase64 } },
],
},
});
console.log(response.embeddings);
}
main();
```


### REST

```
IMG_PATH="/path/to/your/dog.png"
IMG_BASE64=$(base64 -w0 "${IMG_PATH}")
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2-preview:embedContent" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: ${GEMINI_API_KEY}" \
-d '{
"content": {
"parts": [
{"text": "An image of a dog"},
{
"inline_data": {
"mime_type": "image/png",
"data": "'"${IMG_BASE64}"'"
}
}
]
}
}'
```


On the other hand, this example creates multiple embeddings in one embedding call:

### Python

```
from google import genai
from google.genai import types
with open('dog.png', 'rb') as f:
image_bytes = f.read()
result = client.models.embed_content(
model='gemini-embedding-2-preview',
contents=[
"The dog is cute",
types.Part.from_bytes(
data=image_bytes,
mime_type='image/png',
),
]
)
# This produces two embeddings
for embedding in result.embeddings:
print(embedding.values)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const imgBase64 = fs.readFileSync("dog.png", { encoding: "base64" });
const response = await ai.models.embedContent({
model: 'gemini-embedding-2-preview',
contents: [
'The dog is cute',
{
inlineData: {
mimeType: 'image/png',
data: imgBase64,
},
},
],
});
console.log(response.embeddings);
}
main();
```


### REST

```
IMG_PATH="/path/to/your/dog.png"
IMG_BASE64=$(base64 -w0 "${IMG_PATH}")
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2-preview:batchEmbedContents" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: ${GEMINI_API_KEY}" \
-d '{
"requests": [
{
"model": "models/gemini-embedding-2-preview",
"content": {"parts": [{"text": "The dog is cute"}]}
},
{
"model": "models/gemini-embedding-2-preview",
"content": {"parts": [{"inline_data": {"mime_type": "image/png", "data": "'"${IMG_BASE64}"'"}}]}
}
]
}'
```


### Embedding audio

The following example shows how to embed an audio file using
`gemini-embedding-2-preview`

.

Audio files can be provided as inline data or as uploaded files
through the [Files API](/gemini-api/docs/files).

### Python

```
from google import genai
from google.genai import types
with open('example.mp3', 'rb') as f:
audio_bytes = f.read()
client = genai.Client()
result = client.models.embed_content(
model='gemini-embedding-2-preview',
contents=[
types.Part.from_bytes(
data=audio_bytes,
mime_type='audio/mpeg',
),
]
)
print(result.embeddings)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const audioBase64 = fs.readFileSync("example.mp3", { encoding: "base64" });
const response = await ai.models.embedContent({
model: 'gemini-embedding-2-preview',
contents: [{
inlineData: {
mimeType: 'audio/mpeg',
data: audioBase64,
},
}],
});
console.log(response.embeddings);
}
main();
```


### REST

```
AUDIO_PATH="/path/to/your/example.mp3"
AUDIO_BASE64=$(base64 -w0 "${AUDIO_PATH}")
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2-preview:embedContent" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: ${GEMINI_API_KEY}" \
-d '{
"content": {
"parts": [{
"inline_data": {
"mime_type": "audio/mpeg",
"data": "'"${AUDIO_BASE64}"'"
}
}]
}
}'
```


### Embedding video

The following example shows how to embed a video using
`gemini-embedding-2-preview`

.

Videos can be provided as inline data or as uploaded files
through the [Files API](/gemini-api/docs/files).

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
with open('example.mp4', 'rb') as f:
video_bytes = f.read()
result = client.models.embed_content(
model='gemini-embedding-2-preview',
contents=[
types.Part.from_bytes(
data=video_bytes,
mime_type='video/mp4',
),
]
)
print(result.embeddings[0].values)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const videoBase64 = fs.readFileSync("example.mp4", { encoding: "base64" });
const response = await ai.models.embedContent({
model: 'gemini-embedding-2-preview',
contents: [{
inlineData: {
mimeType: 'video/mp4',
data: videoBase64,
},
}],
});
console.log(response.embeddings);
}
main();
```


### REST

```
VIDEO_PATH="/path/to/your/video.mp4"
VIDEO_BASE64=$(base64 -w0 "${VIDEO_PATH}")
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2-preview:embedContent" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: ${GEMINI_API_KEY}" \
-d '{
"content": {
"parts": [{
"inline_data": {
"mime_type": "video/mp4",
"data": "'"${VIDEO_BASE64}"'"
}
}]
}
}'
```


If you need to embed videos >120 seconds, you can chunk the video into overlapping segments and embed those chunks individually.

### Embedding documents

documents in PDF format can be embedded directly. The model processes the visual and text content of each page.

PDFs can be provided as inline data or as uploaded files
through the [Files API](/gemini-api/docs/files).

### Python

```
from google import genai
from google.genai import types
with open('example.pdf', 'rb') as f:
pdf_bytes = f.read()
client = genai.Client()
result = client.models.embed_content(
model='gemini-embedding-2-preview',
contents=[
types.Part.from_bytes(
data=pdf_bytes,
mime_type='application/pdf',
),
]
)
print(result.embeddings)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
async function main() {
const ai = new GoogleGenAI({});
const pdfBase64 = fs.readFileSync("example.pdf", { encoding: "base64" });
const response = await ai.models.embedContent({
model: 'gemini-embedding-2-preview',
contents: [{
inlineData: {
mimeType: 'application/pdf',
data: pdfBase64,
},
}],
});
console.log(response.embeddings);
}
main();
```


### REST

```
PDF_PATH="/path/to/your/example.pdf"
PDF_BASE64=$(base64 -w0 "${PDF_PATH}")
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2-preview:embedContent" \
-H "Content-Type: application/json" \
-H "x-goog-api-key: ${GEMINI_API_KEY}" \
-d '{
"content": {
"parts": [{
"inline_data": {
"mime_type": "application/pdf",
"data": "'"${PDF_BASE64}"'"
}
}]
}
}'
```


## Use cases

Text embeddings are crucial for a variety of common AI use cases, such as:

**Retrieval-Augmented Generation (RAG):**Embeddings enhance the quality of generated text by retrieving and incorporating relevant information into the context of a model.**Information retrieval:**Search for the most semantically similar text or documents given a piece of input text.**Search reranking**: Prioritize the most relevant items by semantically scoring initial results against the query.**Anomaly detection:**Comparing groups of embeddings can help identify hidden trends or outliers.**Classification:**Automatically categorize text based on its content, such as sentiment analysis or spam detection**Clustering:**Effectively grasp complex relationships by creating clusters and visualizations of your embeddings.

## Storing embeddings

As you take embeddings to production, it is common to
use **vector databases** to efficiently store, index, and retrieve
high-dimensional embeddings. Google Cloud offers managed data services that
can be used for this purpose including
[Vertex AI Vector Search 2.0](https://docs.cloud.google.com/vertex-ai/docs/vector-search-2/overview),
[BigQuery](https://cloud.google.com/bigquery/docs/introduction),
[AlloyDB](https://cloud.google.com/alloydb/docs/overview), and
[Cloud SQL](https://cloud.google.com/sql/docs/postgres/introduction).

The following tutorials show how to use other third party vector databases with Gemini Embedding.

## Model versions

### Gemini Embedding 2 Preview

| Property | Description |
|---|---|
| Model code |
|
| Supported data types |
Text, image, video, audio, PDF
Text embeddings |
|
Token limits
8,192
Flexible, supports: 128 - 3072, Recommended: 768, 1536, 3072 |
| Versions |
|
| Latest update | November 2025 |

### Gemini Embedding

| Property | Description |
|---|---|
| Model code |
|
| Supported data types |
Text
Text embeddings |
|
Token limits
2,048
Flexible, supports: 128 - 3072, Recommended: 768, 1536, 3072 |
| Versions |
|
| Latest update | June 2025 |

For deprecated Embeddings models, visit the [Deprecations](/gemini-api/docs/deprecations) page

## Migration from gemini-embedding-001

The embedding spaces between `gemini-embedding-001`

and
`gemini-embedding-2-preview`

are **incompatible**. This means you cannot
directly compare embeddings generated by one model with embeddings generated by
the other. If you are upgrading to `gemini-embedding-2-preview`

, you must
re-embed all of your existing data.

## Batch embeddings

If latency is not a concern, try using the Gemini Embeddings models with
[Batch API](/gemini-api/docs/batch-api#batch-embedding). This
allows for much higher throughput at 50% of the default Embedding price.
Find examples on how to get started in the [Batch API cookbook](https://github.com/google-gemini/cookbook/blob/main/quickstarts/Batch_mode.ipynb).

## Responsible use notice

Unlike generative AI models that create new content, the Gemini Embedding model
is only intended to transform the format of your input data into a numerical
representation. While Google is responsible for providing an embedding model
that transforms the format of your input data to the numerical-format requested,
users retain full responsibility for the data they input and the resulting
embeddings. By using the Gemini Embedding model you confirm that you have the
necessary rights to any content that you upload. Do not generate content that
infringes on others' intellectual property or privacy rights. Your use of this
service is subject to our [Prohibited Use
Policy](https://policies.google.com/terms/generative-ai/use-policy) and
[Google's Terms of Service](/gemini-api/terms).

## Start building with embeddings

Check out the [embeddings quickstart
notebook](https://github.com/google-gemini/cookbook/blob/main/quickstarts/Embeddings.ipynb)
to explore the model capabilities and learn how to customize and visualize your
embeddings.

---

## Source: https://ai.google.dev/gemini-api/docs/robotics-overview

Gemini Robotics-ER 1.5 is a vision-language model (VLM) that brings Gemini's agentic capabilities to robotics. It's designed for advanced reasoning in the physical world, allowing robots to interpret complex visual data, perform spatial reasoning, and plan actions from natural language commands.

Key features and benefits:

**Enhanced autonomy:**Robots can reason, adapt, and respond to changes in open-ended environments.**Natural language interaction:**Makes robots easier to use by enabling complex task assignments using natural language.**Task orchestration:**Deconstructs natural language commands into subtasks and integrates with existing robot controllers and behaviors to complete long-horizon tasks.**Versatile capabilities:**Locates and identifies objects, understands object relationships, plans grasps and trajectories, and interprets dynamic scenes.

This document describes [what the model does](#how-it-works) and takes you
through several [examples](#agentic-capabilities) that highlight the model's
agentic capabilities.

If you want to jump right in, you can try out the model in Google AI Studio.

## Safety

While Gemini Robotics-ER 1.5 was built with safety in mind, it is your
responsibility to maintain a safe environment around the robot. Generative AI
models can make mistakes, and physical robots can cause damage. Safety is a
priority, and making generative AI models safe when used with real-world
robotics is an active and critical area of our research. To learn more, visit
the [Google DeepMind robotics safety page](https://deepmind.google/models/gemini-robotics/safety).

## Getting started: Finding objects in a scene

The following example demonstrates a common robotics use case. It shows how to
pass an image and a text prompt to the model using the
[ generateContent](/api/generate-content#method:-models.generatecontent)
method to get a list of identified objects with their corresponding 2D points.
The model returns points for items it identified in an image, returning
their normalized 2D coordinates and labels.

You can use this output with a robotics API or call a vision-language-action (VLA) model or any other third-party user-defined functions to generate actions for a robot to perform.

### Python

```
from google import genai
from google.genai import types
PROMPT = """
Point to no more than 10 items in the image. The label returned
should be an identifying name for the object detected.
The answer should follow the json format: [{"point": <point>,
"label": <label1>}, ...]. The points are in [y, x] format
normalized to 0-1000.
"""
client = genai.Client()
# Load your image
with open("my-image.png", 'rb') as f:
image_bytes = f.read()
image_response = client.models.generate_content(
model="gemini-robotics-er-1.5-preview",
contents=[
types.Part.from_bytes(
data=image_bytes,
mime_type='image/png',
),
PROMPT
],
config = types.GenerateContentConfig(
temperature=0.5,
thinking_config=types.ThinkingConfig(thinking_budget=0)
)
)
print(image_response.text)
```


### REST

```
# First, ensure you have the image file locally.
# Encode the image to base64
IMAGE_BASE64=$(base64 -w 0 my-image.png)
curl -X POST \
"https://generativelanguage.googleapis.com/v1beta/models/gemini-robotics-er-1.5-preview:generateContent \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-d '{
"contents": [
{
"parts": [
{
"inlineData": {
"mimeType": "image/png",
"data": "'"${IMAGE_BASE64}"'"
}
},
{
"text": "Point to no more than 10 items in the image. The label returned should be an identifying name for the object detected. The answer should follow the json format: [{\"point\": [y, x], \"label\": <label1>}, ...]. The points are in [y, x] format normalized to 0-1000."
}
]
}
],
"generationConfig": {
"temperature": 0.5,
"thinkingConfig": {
"thinkingBudget": 0
}
}
}'
```


The output will be a JSON array containing objects, each with a `point`

(normalized `[y, x]`

coordinates) and a `label`

identifying the object.

### JSON

```
[
{"point": [376, 508], "label": "small banana"},
{"point": [287, 609], "label": "larger banana"},
{"point": [223, 303], "label": "pink starfruit"},
{"point": [435, 172], "label": "paper bag"},
{"point": [270, 786], "label": "green plastic bowl"},
{"point": [488, 775], "label": "metal measuring cup"},
{"point": [673, 580], "label": "dark blue bowl"},
{"point": [471, 353], "label": "light blue bowl"},
{"point": [492, 497], "label": "bread"},
{"point": [525, 429], "label": "lime"}
]
```


The following image is an example of how these points can be displayed:


## How it works

Gemini Robotics-ER 1.5 allows your robots to contextualize and work in the physical world using spatial understanding. It takes image/video/audio input and natural language prompts to:

**Understand objects and scene context**: Identifies objects, and reasons about their relationship to the scene, including their affordances.**Understand task instructions**: Interprets tasks given in natural language, like "find the banana".**Reason spatially and temporally**: Understand sequences of actions and how objects interact with a scene over time.**Provide structured output**: Returns coordinates (points or bounding boxes) representing object locations.

This enables robots to "see" and "understand" their environment programmatically.

Gemini Robotics-ER 1.5 is also agentic, which means it can break down complex tasks (like "put the apple in the bowl") into sub-tasks to orchestrate long horizon tasks:

**Sequencing subtasks**: Decomposes commands into a logical sequence of steps.**Function calls/Code execution**: Executes steps by calling your existing robot functions/tools or executing generated code.

Read more about how function calling with Gemini works on the [Function Calling
page](/gemini-api/docs/function-calling?example=meeting#how-it-works).

### Using the thinking budget with Gemini Robotics-ER 1.5

Gemini Robotics-ER 1.5 has a flexible thinking budget that gives you control over latency versus accuracy tradeoffs. For spatial understanding tasks like object detection, the model can achieve high performance with a small thinking budget. More complex reasoning tasks like counting and weight estimation benefit from a larger thinking budget. This lets you balance the need for low-latency responses with high-accuracy results for more challenging tasks.

To learn more about thinking budgets, see the
[Thinking](/gemini-api/docs/thinking)
core capabilities page.

## Agentic capabilities for robotics

This section walks through various capabilities of Gemini Robotics-ER 1.5, demonstrating how to use the model for robotic perception, reasoning, and planning applications.

The examples in this section demonstrate capabilities from pointing and finding
objects in an image to planning trajectories and orchestrating long horizon
tasks. For simplicity, the code snippets have been reduced to show the prompt
and the call to `generate_content`

API. The full runnable code as well as
additional examples can be found in the
[Robotics cookbook](https://github.com/google-gemini/cookbook/blob/main/quickstarts/gemini-robotics-er.ipynb).

### Pointing to objects

Pointing and finding objects in images or video frames is a common use case for vision-and-language models (VLMs) in robotics. The following example asks the model to find specific objects within an image and return their coordinates in an image.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
# Load your image and set up your prompt
with open('path/to/image-with-objects.jpg', 'rb') as f:
image_bytes = f.read()
queries = [
"bread",
"starfruit",
"banana",
]
prompt = f"""
Get all points matching the following objects: {', '.join(queries)}. The
label returned should be an identifying name for the object detected.
The answer should follow the json format:
[{{"point":
```, "label": }}, ...]. The points are in
[y, x] format normalized to 0-1000.
"""
image_response = client.models.generate_content(
model="gemini-robotics-er-1.5-preview",
contents=[
types.Part.from_bytes(
data=image_bytes,
mime_type='image/jpeg',
),
prompt
],
config = types.GenerateContentConfig(
temperature=0.5,
thinking_config=types.ThinkingConfig(thinking_budget=0)
)
)
print(image_response.text)


The output would be similar to the getting started example, a JSON containing the coordinates of the objects found and their labels.

```
[
{"point": [671, 317], "label": "bread"},
{"point": [738, 307], "label": "bread"},
{"point": [702, 237], "label": "bread"},
{"point": [629, 307], "label": "bread"},
{"point": [833, 800], "label": "bread"},
{"point": [609, 663], "label": "banana"},
{"point": [770, 483], "label": "starfruit"}
]
```



Use the following prompt to request the model to interpret abstract categories like "fruit" instead of specific objects and locate all instances in the image.

### Python

```
prompt = f"""
Get all points for fruit. The label returned should be an identifying
name for the object detected.
""" + """The answer should follow the json format:
[{"point": <point>, "label": <label1>}, ...]. The points are in
[y, x] format normalized to 0-1000."""
```


Visit the [image understanding](/gemini-api/docs/image-understanding) page for
other image processing techniques.

### Tracking objects in a video

Gemini Robotics-ER 1.5 can also analyze video frames to track objects
over time. See [Video inputs](/gemini-api/docs/video-understanding#supported-formats)
for a list of supported video formats.

The following is the base prompt used to find specific objects in each frame that the model analyzes:

### Python

```
# Define the objects to find
queries = [
"pen (on desk)",
"pen (in robot hand)",
"laptop (opened)",
"laptop (closed)",
]
base_prompt = f"""
Point to the following objects in the provided image: {', '.join(queries)}.
The answer should follow the json format:
[{{"point":
```, "label": }}, ...].
The points are in [y, x] format normalized to 0-1000.
If no objects are found, return an empty JSON list [].
"""


The output shows a pen and laptop being tracked across the video frames.

For the full runnable code, see the
[Robotics cookbook](https://github.com/google-gemini/cookbook/blob/main/quickstarts/gemini-robotics-er.ipynb).

### Object detection and bounding boxes

Beyond single points, the model can also return 2D bounding boxes, providing a rectangular region enclosing an object.

This example requests 2D bounding boxes for identifiable objects on a table. The model is instructed to limit the output to 25 objects and to name multiple instances uniquely.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
# Load your image and set up your prompt
with open('path/to/image-with-objects.jpg', 'rb') as f:
image_bytes = f.read()
prompt = """
Return bounding boxes as a JSON array with labels. Never return masks
or code fencing. Limit to 25 objects. Include as many objects as you
can identify on the table.
If an object is present multiple times, name them according to their
unique characteristic (colors, size, position, unique characteristics, etc..).
The format should be as follows: [{"box_2d": [ymin, xmin, ymax, xmax],
"label": <label for the object>}] normalized to 0-1000. The values in
box_2d must only be integers
"""
image_response = client.models.generate_content(
model="gemini-robotics-er-1.5-preview",
contents=[
types.Part.from_bytes(
data=image_bytes,
mime_type='image/jpeg',
),
prompt
],
config = types.GenerateContentConfig(
temperature=0.5,
thinking_config=types.ThinkingConfig(thinking_budget=0)
)
)
print(image_response.text)
```


The following displays the boxes returned from the model.


For the full runnable code, see the [Robotics
cookbook](https://github.com/google-gemini/cookbook/blob/main/quickstarts/gemini-robotics-er.ipynb).
The [Image understanding](/gemini-api/docs/image-understanding) page also has
additional examples of visual tasks like segmentation and object detection.

Additional bounding box examples can be found in the
[Image understanding](/gemini-api/docs/image-understanding) page.

### Trajectories

Gemini Robotics-ER 1.5 can generate sequences of points that define a trajectory, useful for guiding robot movement.

This example requests a trajectory to move a red pen to an organizer, including the starting point and a series of intermediate points.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
# Load your image and set up your prompt
with open('path/to/image-with-objects.jpg', 'rb') as f:
image_bytes = f.read()
points_data = []
prompt = """
Place a point on the red pen, then 15 points for the trajectory of
moving the red pen to the top of the organizer on the left.
The points should be labeled by order of the trajectory, from '0'
(start point at left hand) to <n> (final point)
The answer should follow the json format:
[{"point": <point>, "label": <label1>}, ...].
The points are in [y, x] format normalized to 0-1000.
"""
image_response = client.models.generate_content(
model="gemini-robotics-er-1.5-preview",
contents=[
types.Part.from_bytes(
data=image_bytes,
mime_type='image/jpeg',
),
prompt
],
config = types.GenerateContentConfig(
temperature=0.5,
)
)
print(image_response.text)
```


The response is a set of coordinates that describe the trajectory of the path that the red pen should follow to complete the task of moving it on top of the organizer:

```
[
{"point": [550, 610], "label": "0"},
{"point": [500, 600], "label": "1"},
{"point": [450, 590], "label": "2"},
{"point": [400, 580], "label": "3"},
{"point": [350, 550], "label": "4"},
{"point": [300, 520], "label": "5"},
{"point": [250, 490], "label": "6"},
{"point": [200, 460], "label": "7"},
{"point": [180, 430], "label": "8"},
{"point": [160, 400], "label": "9"},
{"point": [140, 370], "label": "10"},
{"point": [120, 340], "label": "11"},
{"point": [110, 320], "label": "12"},
{"point": [105, 310], "label": "13"},
{"point": [100, 305], "label": "14"},
{"point": [100, 300], "label": "15"}
]
```



### Orchestration

Gemini Robotics-ER 1.5 can perform higher-level spatial reasoning, inferring actions or identifying optimal locations based on contextual understanding.

#### Making room for a laptop

This example shows how Gemini Robotics-ER can reason about a space. The prompt asks the model to identify which object needs to be moved to create space for another item.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
# Load your image and set up your prompt
with open('path/to/image-with-objects.jpg', 'rb') as f:
image_bytes = f.read()
prompt = """
Point to the object that I need to remove to make room for my laptop
The answer should follow the json format: [{"point": <point>,
"label": <label1>}, ...]. The points are in [y, x] format normalized to 0-1000.
"""
image_response = client.models.generate_content(
model="gemini-robotics-er-1.5-preview",
contents=[
types.Part.from_bytes(
data=image_bytes,
mime_type='image/jpeg',
),
prompt
],
config = types.GenerateContentConfig(
temperature=0.5,
thinking_config=types.ThinkingConfig(thinking_budget=0)
)
)
print(image_response.text)
```


The response contains a 2D coordinate of the object that answers the user's question, in this case, the object that should move to make room for a laptop.

```
[
{"point": [672, 301], "label": "The object that I need to remove to make room for my laptop"}
]
```



#### Packing a Lunch

The model can also provide instructions for multi-step tasks and point to relevant objects for each step. This example shows how the model plans a series of steps to pack a lunch bag.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
# Load your image and set up your prompt
with open('path/to/image-of-lunch.jpg', 'rb') as f:
image_bytes = f.read()
prompt = """
Explain how to pack the lunch box and lunch bag. Point to each
object that you refer to. Each point should be in the format:
[{"point": [y, x], "label": }], where the coordinates are
normalized between 0-1000.
"""
image_response = client.models.generate_content(
model="gemini-robotics-er-1.5-preview",
contents=[
types.Part.from_bytes(
data=image_bytes,
mime_type='image/jpeg',
),
prompt
],
config = types.GenerateContentConfig(
temperature=0.5,
thinking_config=types.ThinkingConfig(thinking_budget=0)
)
)
print(image_response.text)
```


The response of this prompt is a set of step by step instructions on how to pack a lunch bag from the image input.

**Input image**

**Model output**

```
Based on the image, here is a plan to pack the lunch box and lunch bag:
1. **Pack the fruit into the lunch box.** Place the [apple](apple), [banana](banana), [red grapes](red grapes), and [green grapes](green grapes) into the [blue lunch box](blue lunch box).
2. **Add the spoon to the lunch box.** Put the [blue spoon](blue spoon) inside the lunch box as well.
3. **Close the lunch box.** Secure the lid on the [blue lunch box](blue lunch box).
4. **Place the lunch box inside the lunch bag.** Put the closed [blue lunch box](blue lunch box) into the [brown lunch bag](brown lunch bag).
5. **Pack the remaining items into the lunch bag.** Place the [blue snack bar](blue snack bar) and the [brown snack bar](brown snack bar) into the [brown lunch bag](brown lunch bag).
Here is the list of objects and their locations:
* [{"point": [899, 440], "label": "apple"}]
* [{"point": [814, 363], "label": "banana"}]
* [{"point": [727, 470], "label": "red grapes"}]
* [{"point": [675, 608], "label": "green grapes"}]
* [{"point": [706, 529], "label": "blue lunch box"}]
* [{"point": [864, 517], "label": "blue spoon"}]
* [{"point": [499, 401], "label": "blue snack bar"}]
* [{"point": [614, 705], "label": "brown snack bar"}]
* [{"point": [448, 501], "label": "brown lunch bag"}]
```


#### Calling a custom robot API

This example demonstrates task orchestration with a custom robot API. It introduces a mock API designed for a pick-and-place operation. The task is to pick up a blue block and place it in an orange bowl:

Similar to the other examples on this page, the full runnable code is available
in the [Robotics cookbook](https://github.com/google-gemini/cookbook/blob/main/quickstarts/gemini-robotics-er.ipynb).

First step is to locate both of the items with the following prompt:

### Python

```
prompt = """
Locate and point to the blue block and the orange bowl. The label
returned should be an identifying name for the object detected.
The answer should follow the json format: [{"point": <point>, "label": <label1>}, ...].
The points are in [y, x] format normalized to 0-1000.
"""
```


The model response includes the normalized coordinates of the block and the bowl:

```
[
{"point": [389, 252], "label": "orange bowl"},
{"point": [727, 659], "label": "blue block"}
]
```


This example uses the following mock robot API:

### Python

```
def move(x, y, high):
print(f"moving to coordinates: {x}, {y}, {15 if high else 5}")
def setGripperState(opened):
print("Opening gripper" if opened else "Closing gripper")
def returnToOrigin():
print("Returning to origin pose")
```


The next step is calling a sequence of API functions with the necessary logic to execute the action. The following prompt includes a description of the robot API that the model should use when orchestrating this task.

### Python

```
prompt = f"""
You are a robotic arm with six degrees-of-freedom. You have the
following functions available to you:
def move(x, y, high):
# moves the arm to the given coordinates. The boolean value 'high' set
to True means the robot arm should be lifted above the scene for
avoiding obstacles during motion. 'high' set to False means the robot
arm should have the gripper placed on the surface for interacting with
objects.
def setGripperState(opened):
# Opens the gripper if opened set to true, otherwise closes the gripper
def returnToOrigin():
# Returns the robot to an initial state. Should be called as a cleanup
operation.
The origin point for calculating the moves is at normalized point
y={robot_origin_y}, x={robot_origin_x}. Use this as the new (0,0) for
calculating moves, allowing x and y to be negative.
Perform a pick and place operation where you pick up the blue block at
normalized coordinates ({block_x}, {block_y}) (relative coordinates:
{block_relative_x}, {block_relative_y}) and place it into the orange
bowl at normalized coordinates ({bowl_x}, {bowl_y})
(relative coordinates: {bowl_relative_x}, {bowl_relative_y}).
Provide the sequence of function calls as a JSON list of objects, where
each object has a "function" key (the function name) and an "args" key
(a list of arguments for the function).
Also, include your reasoning before the JSON output.
For example:
Reasoning: To pick up the block, I will first move the arm to a high
position above the block, open the gripper, move down to the block,
close the gripper, lift the arm, move to a high position above the bowl,
move down to the bowl, open the gripper, and then lift the arm back to
a high position.
"""
```


The following shows a possible output of the model based on the prompt and the mock robot API. The output includes the model thinking process and the tasks that it planned out as a result. It also shows the output of the robot function calls that the model sequenced together.

```
Reasoning: To perform the pick and place operation, I will first move the
robotic arm to a high position above the blue block to ensure clearance. Then, I
will open the gripper in preparation for grasping. Next, I will lower the arm to
the surface level to position the gripper around the block and close the gripper
to secure it. After picking up the block, I will lift the arm to clear the
surface and move towards the orange bowl, maintaining a high position to avoid
collisions. Once positioned above the bowl, I will lower the arm to place the
block inside. I will then open the gripper to release the block. Finally, I will
lift the arm out of the bowl and call `returnToOrigin` to reset the robot's
state.
[
{
"function": "move",
"args": [
163,
427,
true
]
},
{
"function": "setGripperState",
"args": [
true
]
},
{
"function": "move",
"args": [
163,
427,
false
]
},
{
"function": "setGripperState",
"args": [
false
]
},
{
"function": "move",
"args": [
163,
427,
true
]
},
{
"function": "move",
"args": [
-247,
90,
true
]
},
{
"function": "move",
"args": [
-247,
90,
false
]
},
{
"function": "setGripperState",
"args": [
true
]
},
{
"function": "move",
"args": [
-247,
90,
true
]
},
{
"function": "returnToOrigin",
"args": []
}
]
Executing Function Calls:
moving to coordinates: 163, 427, 15
Opening gripper
moving to coordinates: 163, 427, 5
Closing gripper
moving to coordinates: 163, 427, 15
moving to coordinates: -247, 90, 15
moving to coordinates: -247, 90, 5
Opening gripper
moving to coordinates: -247, 90, 15
Returning to origin pose
```


### Code execution

Gemini Robotics-ER 1.5 can suggest and execute Python code to perform tasks that require dynamic actions, such as zooming into an image region for better detail.

This example demonstrates how the model can suggest using the
[code execution](/gemini-api/docs/code-execution) tool to "zoom in" on a specific
area of an image, which it then carries out to answer the user's question.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
# Load your image and set up your prompt
with open('path/to/image-of-object.jpg', 'rb') as f:
image_bytes = f.read()
prompt = """
What is the air quality reading? Using the code execution feature,
zoom in on the image to take a closer look.
"""
response = client.models.generate_content(
model="gemini-robotics-er-1.5-preview",
contents=[
types.Part.from_bytes(
data=image_bytes,
mime_type='image/jpeg',
),
prompt
],
config = types.GenerateContentConfig(
temperature=0.5,
tools=[types.Tool(code_execution=types.ToolCodeExecution)]
)
)
for part in response.candidates[0].content.parts:
if part.text is not None:
print(part.text)
if part.executable_code is not None:
print(part.executable_code.code)
if part.code_execution_result is not None:
print(part.code_execution_result.output)
```


The following shows a possible model response for this task. The output shows
the model generating code for zooming into the image to read the screen better.
It also shows the thought process around the adjustments it made to the
cropping. For the complete sample output, see the [Robotics
cookbook](https://github.com/google-gemini/cookbook/blob/main/quickstarts/gemini-robotics-er.ipynb).

```
# Detect relevant objects and output in json format
# [{"box_2d": [379, 407, 481, 553], "label": "display"}]
from PIL import Image
# Open the image
img = Image.open("input_file_0.jpeg")
# Define the coordinates for cropping (normalized to 0-1000)
# Based on visual inspection, the display is roughly centered around [430, 430] to [500, 500] in a 1000x1000 scale.
# Let's try to zoom in on the display area.
# Bounding box for display: [ymin, xmin, ymax, xmax] in pixels.
# From visual inspection of the original image (size 90489 bytes, resolution
unknown but let's assume a standard aspect ratio and roughly 1000x1000 for
relative positioning),
# the display is located at approximately y=380-480, x=410-540.
# Let's define a larger area around it for context.
# Let's say we want to crop from y=350 to y=550 and x=350 to x=650.
...
thought
The crop was too tight and only captured part of the display. Let's adjust the bounding box.
The previous crop was `img.crop((400, 350, 600, 500))`. This means xmin=400, ymin=350, xmax=600, ymax=500.
The display is centered around x=480, y=430.
The previous crop captured the left side of the display.
Let's expand the x range to the right and y range to cover the whole circle.
New bounding box estimate: ymin=370, xmin=400, ymax=500, xmax=600.
Let's try again with a wider crop.
# Detect relevant objects and output in json format
# [{"box_2d": [379, 407, 481, 553], "label": "display"}]
from PIL import Image
# Open the image
img = Image.open("input_file_0.jpeg")
# Define the coordinates for cropping (normalized to 0-1000)
…
The reading of 14 falls into the "Moderate" category.
The prompt asks for the "air quality reading", which can be interpreted as
either the numerical value or the categorical description. Given the numerical
value is explicitly displayed, it's the primary reading.
Let's provide the numerical value as the reading.
The reading is 014.
Based on the display on the air purifier, the air quality reading is **014**.
```


## Best practices

To optimize the performance and accuracy of your robotics applications, it's crucial to understand how to interact with the Gemini model effectively. This section outlines best practices and key strategies for crafting prompts, handling visual data, and structuring tasks to achieve the most reliable results.

Use clear and simple language.

**Embrace natural language**: The Gemini model is designed to comprehend natural, conversational language. Structure your prompts in a way that is semantically clear and mirrors how a person would naturally give instructions.**Use everyday terminology**: Opt for common, everyday language over technical or specialized jargon. If the model is not responding as expected to a particular term, try rephrasing it with a more common synonym.

Optimize the visual input.

**Zoom in for detail**: When dealing with objects that are small or difficult to discern in a wider shot, use a bounding box function to isolate the object of interest. You can then crop the image to this selection and send the new, focused image to the model for a more detailed analysis.**Experiment with lighting and color**: The model's perception can be affected by challenging lighting conditions and poor color contrast.

Break down complex problems into smaller steps. By addressing each smaller step individually, you can guide the model to a more precise and successful outcome.

Improve accuracy through consensus. For tasks that require a high degree of precision, you can query the model multiple times with the same prompt. By averaging the returned results, you can arrive at a "consensus" that is often more accurate and reliable.


## Limitations

Consider the following limitations when developing with Gemini Robotics-ER 1.5:

**Preview status:**The model is currently in**Preview**. APIs and capabilities may change, and it may not be suitable for production-critical applications without thorough testing.**Latency:**Complex queries, high-resolution inputs, or extensive`thinking_budget`

can lead to increased processing times.**Hallucinations:**Like all large language models, Gemini Robotics-ER 1.5 can occasionally "hallucinate" or provide incorrect information, especially for ambiguous prompts or out-of-distribution inputs.**Dependence on prompt quality:**The quality of the model's output is highly dependent on the clarity and specificity of the input prompt. Vague or poorly structured prompts can lead to suboptimal results.**Computational cost:**Running the model, especially with video inputs or high`thinking_budget`

, consumes computational resources and incurs costs. See the[Thinking](/gemini-api/docs/thinking)page for more details.**Input types:**See the following topics for details on limitations for each mode.

## Privacy Notice

You acknowledge that the models referenced in this document (the "Robotics
Models") leverage video and audio data in order to operate and move your
hardware in accordance with your instructions. You therefore may operate the
Robotics Models such that data from identifiable persons, such as voice,
imagery, and likeness data ("Personal Data"), will be collected by the Robotics
Models. If you elect to operate the Robotics Models in a manner that collects
Personal Data, you agree that you will not permit any identifiable persons to
interact with, or be present in the area surrounding, the Robotics Models,
unless and until such identifiable persons have been sufficiently notified of
and consented to the fact that their Personal Data may be provided to and used
by Google as outlined in the Gemini API Additional Terms of Service found at
[https://ai.google.dev/gemini-api/terms](https://ai.google.dev/gemini-api/terms)
(the "Terms"), including in accordance
with the section entitled "How Google Uses Your Data". You will ensure that such
notice permits the collection and use of Personal Data as outlined in the Terms,
and you will use commercially reasonable efforts to minimize the collection and
distribution of Personal Data by using techniques such as face blurring and
operating the Robotics Models in areas not containing identifiable persons to
the extent practicable.

## Pricing

For detailed information on pricing and available regions, refer to the
[pricing](/gemini-api/docs/pricing) page.

## Model versions

| Property | Description |
|---|---|
| Model code | `gemini-robotics-er-1.5-preview` |
| Supported data types |
Text, images, video, audio
Text |
|
Token limits
1,048,576
65,536 |
| Capabilities |
Not supported
Not supported
Not supported
Supported
Supported
Not supported
Not supported
Not supported
Supported
Supported
Supported
Supported |
| Versions |
|
| Latest update | September 2025 |
| Knowledge cutoff | January 2025 |

## Next steps

- Explore other capabilities and continue experimenting with different prompts
and inputs to discover more applications for Gemini Robotics-ER 1.5.
See the
[Robotics cookbook](https://github.com/google-gemini/cookbook/blob/main/quickstarts/gemini-robotics-er.ipynb)for more examples. - Learn about how Gemini Robotics models were built with safety in mind, visit
the
[Google DeepMind robotics safety page](https://deepmind.google/models/gemini-robotics/safety). - Read about the latest updates on Gemini Robotics models on the
[Gemini Robotics landing page](https://deepmind.google/robotics).

---

## Source: https://ai.google.dev/gemini-api/docs/text-generation

The Gemini API can generate text output from text, images, video, and audio inputs.

Here's a basic example:

### Python

```
from google import genai
client = genai.Client()
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents="How does AI work?"
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: "How does AI work?",
});
console.log(response.text);
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
genai.Text("Explain how AI works in a few words"),
nil,
)
fmt.Println(result.Text())
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
public class GenerateContentWithTextInput {
public static void main(String[] args) {
Client client = new Client();
GenerateContentResponse response =
client.models.generateContent("gemini-3-flash-preview", "How does AI work?", null);
System.out.println(response.text());
}
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"text": "How does AI work?"
}
]
}
]
}'
```


### Apps Script

```
// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.
const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
function main() {
const payload = {
contents: [
{
parts: [
{ text: 'How AI does work?' },
],
},
],
};
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';
const options = {
method: 'POST',
contentType: 'application/json',
headers: {
'x-goog-api-key': apiKey,
},
payload: JSON.stringify(payload)
};
const response = UrlFetchApp.fetch(url, options);
const data = JSON.parse(response);
const content = data['candidates'][0]['content']['parts'][0]['text'];
console.log(content);
}
```


## Thinking with Gemini

Gemini models often have ["thinking"](/gemini-api/docs/thinking) enabled by default
which allows the model to reason before responding to a request.

Each model supports different thinking configurations which gives you control
over cost, latency, and intelligence. For more details, see the
[thinking guide](/gemini-api/docs/thinking#set-budget).

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents="How does AI work?",
config=types.GenerateContentConfig(
thinking_config=types.ThinkingConfig(thinking_level="low")
),
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: "How does AI work?",
config: {
thinkingConfig: {
thinkingLevel: ThinkingLevel.LOW,
},
}
});
console.log(response.text);
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
thinkingLevelVal := "low"
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
genai.Text("How does AI work?"),
&genai.GenerateContentConfig{
ThinkingConfig: &genai.ThinkingConfig{
ThinkingLevel: &thinkingLevelVal,
},
}
)
fmt.Println(result.Text())
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.ThinkingConfig;
import com.google.genai.types.ThinkingLevel;
public class GenerateContentWithThinkingConfig {
public static void main(String[] args) {
Client client = new Client();
GenerateContentConfig config =
GenerateContentConfig.builder()
.thinkingConfig(ThinkingConfig.builder().thinkingLevel(new ThinkingLevel("low")))
.build();
GenerateContentResponse response =
client.models.generateContent("gemini-3-flash-preview", "How does AI work?", config);
System.out.println(response.text());
}
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"text": "How does AI work?"
}
]
}
],
"generationConfig": {
"thinkingConfig": {
"thinkingLevel": "low"
}
}
}'
```


### Apps Script

```
// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.
const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
function main() {
const payload = {
contents: [
{
parts: [
{ text: 'How AI does work?' },
],
},
],
generationConfig: {
thinkingConfig: {
thinkingLevel: 'low'
}
}
};
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';
const options = {
method: 'POST',
contentType: 'application/json',
headers: {
'x-goog-api-key': apiKey,
},
payload: JSON.stringify(payload)
};
const response = UrlFetchApp.fetch(url, options);
const data = JSON.parse(response);
const content = data['candidates'][0]['content']['parts'][0]['text'];
console.log(content);
}
```


## System instructions and other configurations

You can guide the behavior of Gemini models with system instructions. To do so,
pass a [ GenerateContentConfig](/api/generate-content#v1beta.GenerationConfig)
object.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-3-flash-preview",
config=types.GenerateContentConfig(
system_instruction="You are a cat. Your name is Neko."),
contents="Hello there"
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: "Hello there",
config: {
systemInstruction: "You are a cat. Your name is Neko.",
},
});
console.log(response.text);
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
config := &genai.GenerateContentConfig{
SystemInstruction: genai.NewContentFromText("You are a cat. Your name is Neko.", genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
genai.Text("Hello there"),
config,
)
fmt.Println(result.Text())
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
public class GenerateContentWithSystemInstruction {
public static void main(String[] args) {
Client client = new Client();
GenerateContentConfig config =
GenerateContentConfig.builder()
.systemInstruction(
Content.fromParts(Part.fromText("You are a cat. Your name is Neko.")))
.build();
GenerateContentResponse response =
client.models.generateContent("gemini-3-flash-preview", "Hello there", config);
System.out.println(response.text());
}
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
"system_instruction": {
"parts": [
{
"text": "You are a cat. Your name is Neko."
}
]
},
"contents": [
{
"parts": [
{
"text": "Hello there"
}
]
}
]
}'
```


### Apps Script

```
// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.
const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
function main() {
const systemInstruction = {
parts: [{
text: 'You are a cat. Your name is Neko.'
}]
};
const payload = {
systemInstruction,
contents: [
{
parts: [
{ text: 'Hello there' },
],
},
],
};
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';
const options = {
method: 'POST',
contentType: 'application/json',
headers: {
'x-goog-api-key': apiKey,
},
payload: JSON.stringify(payload)
};
const response = UrlFetchApp.fetch(url, options);
const data = JSON.parse(response);
const content = data['candidates'][0]['content']['parts'][0]['text'];
console.log(content);
}
```


The [ GenerateContentConfig](/api/generate-content#v1beta.GenerationConfig)
object also lets you override default generation parameters, such as

[temperature](/api/generate-content#v1beta.GenerationConfig).

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=["Explain how AI works"],
config=types.GenerateContentConfig(
temperature=0.1
)
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: "Explain how AI works",
config: {
temperature: 0.1,
},
});
console.log(response.text);
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
temp := float32(0.9)
topP := float32(0.5)
topK := float32(20.0)
config := &genai.GenerateContentConfig{
Temperature: &temp,
TopP: &topP,
TopK: &topK,
ResponseMIMEType: "application/json",
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
genai.Text("What is the average size of a swallow?"),
config,
)
fmt.Println(result.Text())
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
public class GenerateContentWithConfig {
public static void main(String[] args) {
Client client = new Client();
GenerateContentConfig config = GenerateContentConfig.builder().temperature(0.1f).build();
GenerateContentResponse response =
client.models.generateContent("gemini-3-flash-preview", "Explain how AI works", config);
System.out.println(response.text());
}
}
```


### REST

```
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"text": "Explain how AI works"
}
]
}
],
"generationConfig": {
"stopSequences": [
"Title"
],
"temperature": 1.0,
"topP": 0.8,
"topK": 10
}
}'
```


### Apps Script

```
// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.
const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
function main() {
const generationConfig = {
temperature: 1,
topP: 0.95,
topK: 40,
responseMimeType: 'text/plain',
};
const payload = {
generationConfig,
contents: [
{
parts: [
{ text: 'Explain how AI works in a few words' },
],
},
],
};
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';
const options = {
method: 'POST',
contentType: 'application/json',
headers: {
'x-goog-api-key': apiKey,
},
payload: JSON.stringify(payload)
};
const response = UrlFetchApp.fetch(url, options);
const data = JSON.parse(response);
const content = data['candidates'][0]['content']['parts'][0]['text'];
console.log(content);
}
```


Refer to the [ GenerateContentConfig](/api/generate-content#v1beta.GenerationConfig)
in our API reference for a complete list of configurable parameters and their
descriptions.

## Multimodal inputs

The Gemini API supports multimodal inputs, allowing you to combine text with media files. The following example demonstrates providing an image:

### Python

```
from PIL import Image
from google import genai
client = genai.Client()
image = Image.open("/path/to/organ.png")
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[image, "Tell me about this instrument"]
)
print(response.text)
```


### JavaScript

```
import {
GoogleGenAI,
createUserContent,
createPartFromUri,
} from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const image = await ai.files.upload({
file: "/path/to/organ.png",
});
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: [
createUserContent([
"Tell me about this instrument",
createPartFromUri(image.uri, image.mimeType),
]),
],
});
console.log(response.text);
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
imagePath := "/path/to/organ.jpg"
imgData, _ := os.ReadFile(imagePath)
parts := []*genai.Part{
genai.NewPartFromText("Tell me about this instrument"),
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "image/jpeg",
Data: imgData,
},
},
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.Content;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;
public class GenerateContentWithMultiModalInputs {
public static void main(String[] args) {
Client client = new Client();
Content content =
Content.fromParts(
Part.fromText("Tell me about this instrument"),
Part.fromUri("/path/to/organ.jpg", "image/jpeg"));
GenerateContentResponse response =
client.models.generateContent("gemini-3-flash-preview", content, null);
System.out.println(response.text());
}
}
```


### REST

```
# Use a temporary file to hold the base64 encoded image data
TEMP_B64=$(mktemp)
trap 'rm -f "$TEMP_B64"' EXIT
base64 $B64FLAGS $IMG_PATH > "$TEMP_B64"
# Use a temporary file to hold the JSON payload
TEMP_JSON=$(mktemp)
trap 'rm -f "$TEMP_JSON"' EXIT
cat > "$TEMP_JSON" << EOF
{
"contents": [
{
"parts": [
{
"text": "Tell me about this instrument"
},
{
"inline_data": {
"mime_type": "image/jpeg",
"data": "$(cat "$TEMP_B64")"
}
}
]
}
]
}
EOF
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d "@$TEMP_JSON"
```


### Apps Script

```
// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.
const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
function main() {
const imageUrl = 'http://image/url';
const image = getImageData(imageUrl);
const payload = {
contents: [
{
parts: [
{ image },
{ text: 'Tell me about this instrument' },
],
},
],
};
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';
const options = {
method: 'POST',
contentType: 'application/json',
headers: {
'x-goog-api-key': apiKey,
},
payload: JSON.stringify(payload)
};
const response = UrlFetchApp.fetch(url, options);
const data = JSON.parse(response);
const content = data['candidates'][0]['content']['parts'][0]['text'];
console.log(content);
}
function getImageData(url) {
const blob = UrlFetchApp.fetch(url).getBlob();
return {
mimeType: blob.getContentType(),
data: Utilities.base64Encode(blob.getBytes())
};
}
```


For alternative methods of providing images and more advanced image processing,
see our [image understanding guide](/gemini-api/docs/image-understanding).
The API also supports [document](/gemini-api/docs/document-processing), [video](/gemini-api/docs/video-understanding), and [audio](/gemini-api/docs/audio)
inputs and understanding.

## Streaming responses

By default, the model returns a response only after the entire generation process is complete.

For more fluid interactions, use streaming to receive [ GenerateContentResponse](/api/generate-content#v1beta.GenerateContentResponse) instances incrementally
as they're generated.

### Python

```
from google import genai
client = genai.Client()
response = client.models.generate_content_stream(
model="gemini-3-flash-preview",
contents=["Explain how AI works"]
)
for chunk in response:
print(chunk.text, end="")
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const response = await ai.models.generateContentStream({
model: "gemini-3-flash-preview",
contents: "Explain how AI works",
});
for await (const chunk of response) {
console.log(chunk.text);
}
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
stream := client.Models.GenerateContentStream(
ctx,
"gemini-3-flash-preview",
genai.Text("Write a story about a magic backpack."),
nil,
)
for chunk, _ := range stream {
part := chunk.Candidates[0].Content.Parts[0]
fmt.Print(part.Text)
}
}
```


### Java

```
import com.google.genai.Client;
import com.google.genai.ResponseStream;
import com.google.genai.types.GenerateContentResponse;
public class GenerateContentStream {
public static void main(String[] args) {
Client client = new Client();
ResponseStream<GenerateContentResponse> responseStream =
client.models.generateContentStream(
"gemini-3-flash-preview", "Write a story about a magic backpack.", null);
for (GenerateContentResponse res : responseStream) {
System.out.print(res.text());
}
// To save resources and avoid connection leaks, it is recommended to close the response
// stream after consumption (or using try block to get the response stream).
responseStream.close();
}
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:streamGenerateContent?alt=sse" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
--no-buffer \
-d '{
"contents": [
{
"parts": [
{
"text": "Explain how AI works"
}
]
}
]
}'
```


### Apps Script

```
// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.
const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
function main() {
const payload = {
contents: [
{
parts: [
{ text: 'Explain how AI works' },
],
},
],
};
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:streamGenerateContent';
const options = {
method: 'POST',
contentType: 'application/json',
headers: {
'x-goog-api-key': apiKey,
},
payload: JSON.stringify(payload)
};
const response = UrlFetchApp.fetch(url, options);
const data = JSON.parse(response);
const content = data['candidates'][0]['content']['parts'][0]['text'];
console.log(content);
}
```


## Multi-turn conversations (chat)

Our SDKs provide functionality to collect multiple rounds of prompts and responses into a chat, giving you an easy way to keep track of the conversation history.

### Python

```
from google import genai
client = genai.Client()
chat = client.chats.create(model="gemini-3-flash-preview")
response = chat.send_message("I have 2 dogs in my house.")
print(response.text)
response = chat.send_message("How many paws are in my house?")
print(response.text)
for message in chat.get_history():
print(f'role - {message.role}',end=": ")
print(message.parts[0].text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const chat = ai.chats.create({
model: "gemini-3-flash-preview",
history: [
{
role: "user",
parts: [{ text: "Hello" }],
},
{
role: "model",
parts: [{ text: "Great to meet you. What would you like to know?" }],
},
],
});
const response1 = await chat.sendMessage({
message: "I have 2 dogs in my house.",
});
console.log("Chat response 1:", response1.text);
const response2 = await chat.sendMessage({
message: "How many paws are in my house?",
});
console.log("Chat response 2:", response2.text);
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
history := []*genai.Content{
genai.NewContentFromText("Hi nice to meet you! I have 2 dogs in my house.", genai.RoleUser),
genai.NewContentFromText("Great to meet you. What would you like to know?", genai.RoleModel),
}
chat, _ := client.Chats.Create(ctx, "gemini-3-flash-preview", nil, history)
res, _ := chat.SendMessage(ctx, genai.Part{Text: "How many paws are in my house?"})
if len(res.Candidates) > 0 {
fmt.Println(res.Candidates[0].Content.Parts[0].Text)
}
}
```


### Java

```
import com.google.genai.Chat;
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentResponse;
public class MultiTurnConversation {
public static void main(String[] args) {
Client client = new Client();
Chat chatSession = client.chats.create("gemini-3-flash-preview");
GenerateContentResponse response =
chatSession.sendMessage("I have 2 dogs in my house.");
System.out.println("First response: " + response.text());
response = chatSession.sendMessage("How many paws are in my house?");
System.out.println("Second response: " + response.text());
// Get the history of the chat session.
// Passing 'true' to getHistory() returns the curated history, which excludes
// empty or invalid parts.
// Passing 'false' here would return the comprehensive history, including
// empty or invalid parts.
ImmutableList<Content> history = chatSession.getHistory(true);
System.out.println("History: " + history);
}
}
```


### REST

```
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"role": "user",
"parts": [
{
"text": "Hello"
}
]
},
{
"role": "model",
"parts": [
{
"text": "Great to meet you. What would you like to know?"
}
]
},
{
"role": "user",
"parts": [
{
"text": "I have two dogs in my house. How many paws are in my house?"
}
]
}
]
}'
```


### Apps Script

```
// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.
const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
function main() {
const payload = {
contents: [
{
role: 'user',
parts: [
{ text: 'Hello' },
],
},
{
role: 'model',
parts: [
{ text: 'Great to meet you. What would you like to know?' },
],
},
{
role: 'user',
parts: [
{ text: 'I have two dogs in my house. How many paws are in my house?' },
],
},
],
};
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';
const options = {
method: 'POST',
contentType: 'application/json',
headers: {
'x-goog-api-key': apiKey,
},
payload: JSON.stringify(payload)
};
const response = UrlFetchApp.fetch(url, options);
const data = JSON.parse(response);
const content = data['candidates'][0]['content']['parts'][0]['text'];
console.log(content);
}
```


Streaming can also be used for multi-turn conversations.

### Python

```
from google import genai
client = genai.Client()
chat = client.chats.create(model="gemini-3-flash-preview")
response = chat.send_message_stream("I have 2 dogs in my house.")
for chunk in response:
print(chunk.text, end="")
response = chat.send_message_stream("How many paws are in my house?")
for chunk in response:
print(chunk.text, end="")
for message in chat.get_history():
print(f'role - {message.role}', end=": ")
print(message.parts[0].text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const chat = ai.chats.create({
model: "gemini-3-flash-preview",
history: [
{
role: "user",
parts: [{ text: "Hello" }],
},
{
role: "model",
parts: [{ text: "Great to meet you. What would you like to know?" }],
},
],
});
const stream1 = await chat.sendMessageStream({
message: "I have 2 dogs in my house.",
});
for await (const chunk of stream1) {
console.log(chunk.text);
console.log("_".repeat(80));
}
const stream2 = await chat.sendMessageStream({
message: "How many paws are in my house?",
});
for await (const chunk of stream2) {
console.log(chunk.text);
console.log("_".repeat(80));
}
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
history := []*genai.Content{
genai.NewContentFromText("Hi nice to meet you! I have 2 dogs in my house.", genai.RoleUser),
genai.NewContentFromText("Great to meet you. What would you like to know?", genai.RoleModel),
}
chat, _ := client.Chats.Create(ctx, "gemini-3-flash-preview", nil, history)
stream := chat.SendMessageStream(ctx, genai.Part{Text: "How many paws are in my house?"})
for chunk, _ := range stream {
part := chunk.Candidates[0].Content.Parts[0]
fmt.Print(part.Text)
}
}
```


### Java

```
import com.google.genai.Chat;
import com.google.genai.Client;
import com.google.genai.ResponseStream;
import com.google.genai.types.GenerateContentResponse;
public class MultiTurnConversationWithStreaming {
public static void main(String[] args) {
Client client = new Client();
Chat chatSession = client.chats.create("gemini-3-flash-preview");
ResponseStream<GenerateContentResponse> responseStream =
chatSession.sendMessageStream("I have 2 dogs in my house.", null);
for (GenerateContentResponse response : responseStream) {
System.out.print(response.text());
}
responseStream = chatSession.sendMessageStream("How many paws are in my house?", null);
for (GenerateContentResponse response : responseStream) {
System.out.print(response.text());
}
// Get the history of the chat session. History is added after the stream
// is consumed and includes the aggregated response from the stream.
System.out.println("History: " + chatSession.getHistory(false));
}
}
```


### REST

```
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:streamGenerateContent?alt=sse \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"role": "user",
"parts": [
{
"text": "Hello"
}
]
},
{
"role": "model",
"parts": [
{
"text": "Great to meet you. What would you like to know?"
}
]
},
{
"role": "user",
"parts": [
{
"text": "I have two dogs in my house. How many paws are in my house?"
}
]
}
]
}'
```


### Apps Script

```
// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.
const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
function main() {
const payload = {
contents: [
{
role: 'user',
parts: [
{ text: 'Hello' },
],
},
{
role: 'model',
parts: [
{ text: 'Great to meet you. What would you like to know?' },
],
},
{
role: 'user',
parts: [
{ text: 'I have two dogs in my house. How many paws are in my house?' },
],
},
],
};
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:streamGenerateContent';
const options = {
method: 'POST',
contentType: 'application/json',
headers: {
'x-goog-api-key': apiKey,
},
payload: JSON.stringify(payload)
};
const response = UrlFetchApp.fetch(url, options);
const data = JSON.parse(response);
const content = data['candidates'][0]['content']['parts'][0]['text'];
console.log(content);
}
```


## Prompting tips

Consult our [prompt engineering guide](/gemini/docs/prompting-strategies) for
suggestions on getting the most out of Gemini.

## What's next

- Try
[Gemini in Google AI Studio](https://aistudio.google.com). - Experiment with
[structured outputs](/gemini-api/docs/structured-output)for JSON-like responses. - Explore Gemini's
[image](/gemini-api/docs/image-understanding),[video](/gemini-api/docs/video-understanding),[audio](/gemini-api/docs/audio)and[document](/gemini-api/docs/document-processing)understanding capabilities. - Learn about multimodal
[file prompting strategies](/gemini-api/docs/files#prompt-guide).

---

## Source: https://ai.google.dev/gemini-api/docs/image-understanding

Gemini models are built to be multimodal from the ground up, unlocking a wide range of image processing and computer vision tasks including but not limited to image captioning, classification, and visual question answering without having to train specialized ML models.

In addition to their general multimodal capabilities, Gemini models offer
**enhanced accuracy** for specific use cases like [object detection](#object-detection) and [segmentation](#segmentation), through additional
training.

## Passing images to Gemini

You can provide images as input to Gemini using two methods:

[Passing inline image data](#inline-image): Ideal for smaller files (total request size less than 20MB, including prompts).[Uploading images using the File API](#upload-image): Recommended for larger files or for reusing images across multiple requests.

### Passing inline image data

You can pass inline image data in the
request to `generateContent`

. You can provide image data as Base64 encoded
strings or by reading local files directly (depending on the language).

The following example shows how to read an image from a local file and pass
it to `generateContent`

API for processing.

### Python

```
from google import genai
from google.genai import types
with open('path/to/small-sample.jpg', 'rb') as f:
image_bytes = f.read()
client = genai.Client()
response = client.models.generate_content(
model='gemini-3-flash-preview',
contents=[
types.Part.from_bytes(
data=image_bytes,
mime_type='image/jpeg',
),
'Caption this image.'
]
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
const ai = new GoogleGenAI({});
const base64ImageFile = fs.readFileSync("path/to/small-sample.jpg", {
encoding: "base64",
});
const contents = [
{
inlineData: {
mimeType: "image/jpeg",
data: base64ImageFile,
},
},
{ text: "Caption this image." },
];
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: contents,
});
console.log(response.text);
```


### Go

```
bytes, _ := os.ReadFile("path/to/small-sample.jpg")
parts := []*genai.Part{
genai.NewPartFromBytes(bytes, "image/jpeg"),
genai.NewPartFromText("Caption this image."),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
```


### REST

```
IMG_PATH="/path/to/your/image1.jpg"
if [[ "$(base64 --version 2>&1)" = *"FreeBSD"* ]]; then
B64FLAGS="--input"
else
B64FLAGS="-w0"
fi
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{
"inline_data": {
"mime_type":"image/jpeg",
"data": "'"$(base64 $B64FLAGS $IMG_PATH)"'"
}
},
{"text": "Caption this image."},
]
}]
}' 2> /dev/null
```


You can also fetch an image from a URL, convert it to bytes, and pass it to
`generateContent`

as shown in the following examples.

### Python

```
from google import genai
from google.genai import types
import requests
image_path = "https://goo.gle/instrument-img"
image_bytes = requests.get(image_path).content
image = types.Part.from_bytes(
data=image_bytes, mime_type="image/jpeg"
)
client = genai.Client()
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=["What is this image?", image],
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
async function main() {
const ai = new GoogleGenAI({});
const imageUrl = "https://goo.gle/instrument-img";
const response = await fetch(imageUrl);
const imageArrayBuffer = await response.arrayBuffer();
const base64ImageData = Buffer.from(imageArrayBuffer).toString('base64');
const result = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: [
{
inlineData: {
mimeType: 'image/jpeg',
data: base64ImageData,
},
},
{ text: "Caption this image." }
],
});
console.log(result.text);
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"io"
"net/http"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
// Download the image.
imageResp, _ := http.Get("https://goo.gle/instrument-img")
imageBytes, _ := io.ReadAll(imageResp.Body)
parts := []*genai.Part{
genai.NewPartFromBytes(imageBytes, "image/jpeg"),
genai.NewPartFromText("Caption this image."),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


### REST

```
IMG_URL="https://goo.gle/instrument-img"
MIME_TYPE=$(curl -sIL "$IMG_URL" | grep -i '^content-type:' | awk -F ': ' '{print $2}' | sed 's/\r$//' | head -n 1)
if [[ -z "$MIME_TYPE" || ! "$MIME_TYPE" == image/* ]]; then
MIME_TYPE="image/jpeg"
fi
# Check for macOS
if [[ "$(uname)" == "Darwin" ]]; then
IMAGE_B64=$(curl -sL "$IMG_URL" | base64 -b 0)
elif [[ "$(base64 --version 2>&1)" = *"FreeBSD"* ]]; then
IMAGE_B64=$(curl -sL "$IMG_URL" | base64)
else
IMAGE_B64=$(curl -sL "$IMG_URL" | base64 -w0)
fi
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{
"inline_data": {
"mime_type":"'"$MIME_TYPE"'",
"data": "'"$IMAGE_B64"'"
}
},
{"text": "Caption this image."}
]
}]
}' 2> /dev/null
```


### Uploading images using the File API

For large files or to be able to use the same image file repeatedly, use the
Files API. The following code uploads an image file and then uses the file in a
call to `generateContent`

. See the [Files API guide](/gemini-api/docs/files) for
more information and examples.

### Python

```
from google import genai
client = genai.Client()
my_file = client.files.upload(file="path/to/sample.jpg")
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[my_file, "Caption this image."],
)
print(response.text)
```


### JavaScript

```
import {
GoogleGenAI,
createUserContent,
createPartFromUri,
} from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const myfile = await ai.files.upload({
file: "path/to/sample.jpg",
config: { mimeType: "image/jpeg" },
});
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: createUserContent([
createPartFromUri(myfile.uri, myfile.mimeType),
"Caption this image.",
]),
});
console.log(response.text);
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
uploadedFile, _ := client.Files.UploadFromPath(ctx, "path/to/sample.jpg", nil)
parts := []*genai.Part{
genai.NewPartFromText("Caption this image."),
genai.NewPartFromURI(uploadedFile.URI, uploadedFile.MIMEType),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


### REST

```
IMAGE_PATH="path/to/sample.jpg"
MIME_TYPE=$(file -b --mime-type "${IMAGE_PATH}")
NUM_BYTES=$(wc -c < "${IMAGE_PATH}")
DISPLAY_NAME=IMAGE
tmp_header_file=upload-header.tmp
# Initial resumable request defining metadata.
# The upload url is in the response headers dump them to a file.
curl "https://generativelanguage.googleapis.com/upload/v1beta/files" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-D upload-header.tmp \
-H "X-Goog-Upload-Protocol: resumable" \
-H "X-Goog-Upload-Command: start" \
-H "X-Goog-Upload-Header-Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Header-Content-Type: ${MIME_TYPE}" \
-H "Content-Type: application/json" \
-d "{'file': {'display_name': '${DISPLAY_NAME}'}}" 2> /dev/null
upload_url=$(grep -i "x-goog-upload-url: " "${tmp_header_file}" | cut -d" " -f2 | tr -d "\r")
rm "${tmp_header_file}"
# Upload the actual bytes.
curl "${upload_url}" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H "Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Offset: 0" \
-H "X-Goog-Upload-Command: upload, finalize" \
--data-binary "@${IMAGE_PATH}" 2> /dev/null > file_info.json
file_uri=$(jq -r ".file.uri" file_info.json)
echo file_uri=$file_uri
# Now generate content using that file
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{"file_data":{"mime_type": "'"${MIME_TYPE}"'", "file_uri": "'"${file_uri}"'"}},
{"text": "Caption this image."}]
}]
}' 2> /dev/null > response.json
cat response.json
echo
jq ".candidates[].content.parts[].text" response.json
```


## Prompting with multiple images

You can provide multiple images in a single prompt by including multiple image
`Part`

objects in the `contents`

array. These can be a mix of inline data
(local files or URLs) and File API references.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
# Upload the first image
image1_path = "path/to/image1.jpg"
uploaded_file = client.files.upload(file=image1_path)
# Prepare the second image as inline data
image2_path = "path/to/image2.png"
with open(image2_path, 'rb') as f:
img2_bytes = f.read()
# Create the prompt with text and multiple images
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[
"What is different between these two images?",
uploaded_file, # Use the uploaded file reference
types.Part.from_bytes(
data=img2_bytes,
mime_type='image/png'
)
]
)
print(response.text)
```


### JavaScript

```
import {
GoogleGenAI,
createUserContent,
createPartFromUri,
} from "@google/genai";
import * as fs from "node:fs";
const ai = new GoogleGenAI({});
async function main() {
// Upload the first image
const image1_path = "path/to/image1.jpg";
const uploadedFile = await ai.files.upload({
file: image1_path,
config: { mimeType: "image/jpeg" },
});
// Prepare the second image as inline data
const image2_path = "path/to/image2.png";
const base64Image2File = fs.readFileSync(image2_path, {
encoding: "base64",
});
// Create the prompt with text and multiple images
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: createUserContent([
"What is different between these two images?",
createPartFromUri(uploadedFile.uri, uploadedFile.mimeType),
{
inlineData: {
mimeType: "image/png",
data: base64Image2File,
},
},
]),
});
console.log(response.text);
}
await main();
```


### Go

```
// Upload the first image
image1Path := "path/to/image1.jpg"
uploadedFile, _ := client.Files.UploadFromPath(ctx, image1Path, nil)
// Prepare the second image as inline data
image2Path := "path/to/image2.jpeg"
imgBytes, _ := os.ReadFile(image2Path)
parts := []*genai.Part{
genai.NewPartFromText("What is different between these two images?"),
genai.NewPartFromBytes(imgBytes, "image/jpeg"),
genai.NewPartFromURI(uploadedFile.URI, uploadedFile.MIMEType),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
```


### REST

```
# Upload the first image
IMAGE1_PATH="path/to/image1.jpg"
MIME1_TYPE=$(file -b --mime-type "${IMAGE1_PATH}")
NUM1_BYTES=$(wc -c < "${IMAGE1_PATH}")
DISPLAY_NAME1=IMAGE1
tmp_header_file1=upload-header1.tmp
curl "https://generativelanguage.googleapis.com/upload/v1beta/files" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-D upload-header1.tmp \
-H "X-Goog-Upload-Protocol: resumable" \
-H "X-Goog-Upload-Command: start" \
-H "X-Goog-Upload-Header-Content-Length: ${NUM1_BYTES}" \
-H "X-Goog-Upload-Header-Content-Type: ${MIME1_TYPE}" \
-H "Content-Type: application/json" \
-d "{'file': {'display_name': '${DISPLAY_NAME1}'}}" 2> /dev/null
upload_url1=$(grep -i "x-goog-upload-url: " "${tmp_header_file1}" | cut -d" " -f2 | tr -d "\r")
rm "${tmp_header_file1}"
curl "${upload_url1}" \
-H "Content-Length: ${NUM1_BYTES}" \
-H "X-Goog-Upload-Offset: 0" \
-H "X-Goog-Upload-Command: upload, finalize" \
--data-binary "@${IMAGE1_PATH}" 2> /dev/null > file_info1.json
file1_uri=$(jq ".file.uri" file_info1.json)
echo file1_uri=$file1_uri
# Prepare the second image (inline)
IMAGE2_PATH="path/to/image2.png"
MIME2_TYPE=$(file -b --mime-type "${IMAGE2_PATH}")
if [[ "$(base64 --version 2>&1)" = *"FreeBSD"* ]]; then
B64FLAGS="--input"
else
B64FLAGS="-w0"
fi
IMAGE2_BASE64=$(base64 $B64FLAGS $IMAGE2_PATH)
# Now generate content using both images
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{"text": "What is different between these two images?"},
{"file_data":{"mime_type": "'"${MIME1_TYPE}"'", "file_uri": '$file1_uri'}},
{
"inline_data": {
"mime_type":"'"${MIME2_TYPE}"'",
"data": "'"$IMAGE2_BASE64"'"
}
}
]
}]
}' 2> /dev/null > response.json
cat response.json
echo
jq ".candidates[].content.parts[].text" response.json
```


## Object detection

Models are trained to detect objects in an image and get their bounding box coordinates. The coordinates, relative to image dimensions, scale to [0, 1000]. You need to descale these coordinates based on your original image size.

### Python

```
from google import genai
from google.genai import types
from PIL import Image
import json
client = genai.Client()
prompt = "Detect the all of the prominent items in the image. The box_2d should be [ymin, xmin, ymax, xmax] normalized to 0-1000."
image = Image.open("/path/to/image.png")
config = types.GenerateContentConfig(
response_mime_type="application/json"
)
response = client.models.generate_content(model="gemini-3-flash-preview",
contents=[image, prompt],
config=config
)
width, height = image.size
bounding_boxes = json.loads(response.text)
converted_bounding_boxes = []
for bounding_box in bounding_boxes:
abs_y1 = int(bounding_box["box_2d"][0]/1000 * height)
abs_x1 = int(bounding_box["box_2d"][1]/1000 * width)
abs_y2 = int(bounding_box["box_2d"][2]/1000 * height)
abs_x2 = int(bounding_box["box_2d"][3]/1000 * width)
converted_bounding_boxes.append([abs_x1, abs_y1, abs_x2, abs_y2])
print("Image size: ", width, height)
print("Bounding boxes:", converted_bounding_boxes)
```


For more examples, check following notebooks in the [Gemini Cookbook](https://github.com/google-gemini/cookbook):

## Segmentation

Starting with Gemini 2.5, models not only detect items but also segment them and provide their contour masks.

The model predicts a JSON list, where each item represents a segmentation mask.
Each item has a bounding box ("`box_2d`

") in the format `[y0, x0, y1, x1]`

with
normalized coordinates between 0 and 1000, a label ("`label`

") that identifies
the object, and finally the segmentation mask inside the bounding box, as base64
encoded png that is a probability map with values between 0 and 255.
The mask needs to be resized to match the bounding box dimensions, then
binarized at your confidence threshold (127 for the midpoint).

### Python

```
from google import genai
from google.genai import types
from PIL import Image, ImageDraw
import io
import base64
import json
import numpy as np
import os
client = genai.Client()
def parse_json(json_output: str):
# Parsing out the markdown fencing
lines = json_output.splitlines()
for i, line in enumerate(lines):
if line == "```json":
json_output = "\n".join(lines[i+1:]) # Remove everything before "```json"
output = json_output.split("```")[0] # Remove everything after the closing "```"
break # Exit the loop once "```json" is found
return json_output
def extract_segmentation_masks(image_path: str, output_dir: str = "segmentation_outputs"):
# Load and resize image
im = Image.open(image_path)
im.thumbnail([1024, 1024], Image.Resampling.LANCZOS)
prompt = """
Give the segmentation masks for the wooden and glass items.
Output a JSON list of segmentation masks where each entry contains the 2D
bounding box in the key "box_2d", the segmentation mask in key "mask", and
the text label in the key "label". Use descriptive labels.
"""
config = types.GenerateContentConfig(
thinking_config=types.ThinkingConfig(thinking_budget=0) # set thinking_budget to 0 for better results in object detection
)
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[prompt, im], # Pillow images can be directly passed as inputs (which will be converted by the SDK)
config=config
)
# Parse JSON response
items = json.loads(parse_json(response.text))
# Create output directory
os.makedirs(output_dir, exist_ok=True)
# Process each mask
for i, item in enumerate(items):
# Get bounding box coordinates
box = item["box_2d"]
y0 = int(box[0] / 1000 * im.size[1])
x0 = int(box[1] / 1000 * im.size[0])
y1 = int(box[2] / 1000 * im.size[1])
x1 = int(box[3] / 1000 * im.size[0])
# Skip invalid boxes
if y0 >= y1 or x0 >= x1:
continue
# Process mask
png_str = item["mask"]
if not png_str.startswith("data:image/png;base64,"):
continue
# Remove prefix
png_str = png_str.removeprefix("data:image/png;base64,")
mask_data = base64.b64decode(png_str)
mask = Image.open(io.BytesIO(mask_data))
# Resize mask to match bounding box
mask = mask.resize((x1 - x0, y1 - y0), Image.Resampling.BILINEAR)
# Convert mask to numpy array for processing
mask_array = np.array(mask)
# Create overlay for this mask
overlay = Image.new('RGBA', im.size, (0, 0, 0, 0))
overlay_draw = ImageDraw.Draw(overlay)
# Create overlay for the mask
color = (255, 255, 255, 200)
for y in range(y0, y1):
for x in range(x0, x1):
if mask_array[y - y0, x - x0] > 128: # Threshold for mask
overlay_draw.point((x, y), fill=color)
# Save individual mask and its overlay
mask_filename = f"{item['label']}_{i}_mask.png"
overlay_filename = f"{item['label']}_{i}_overlay.png"
mask.save(os.path.join(output_dir, mask_filename))
# Create and save overlay
composite = Image.alpha_composite(im.convert('RGBA'), overlay)
composite.save(os.path.join(output_dir, overlay_filename))
print(f"Saved mask and overlay for {item['label']} to {output_dir}")
# Example usage
if __name__ == "__main__":
extract_segmentation_masks("path/to/image.png")
```


Check the
[segmentation example](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Spatial_understanding.ipynb#scrollTo=WQJTJ8wdGOKx)
in the cookbook guide for a more detailed example.

## Supported image formats

Gemini supports the following image format MIME types:

- PNG -
`image/png`

- JPEG -
`image/jpeg`

- WEBP -
`image/webp`

- HEIC -
`image/heic`

- HEIF -
`image/heif`


To learn about other file input methods, see the
[File input methods](/gemini-api/docs/file-input-methods) guide.

## Capabilities

All Gemini model versions are multimodal and can be utilized in a wide range of image processing and computer vision tasks including but not limited to image captioning, visual question and answering, image classification, object detection and segmentation.

Gemini can reduce the need to use specialized ML models depending on your quality and performance requirements.

The latest model versions are specifically trained improve accuracy of
specialized tasks in addition to generic capabilities, like enhanced
[object detection](#object-detection) and [segmentation](#segmentation).

## Limitations and key technical information

### File limit

Gemini models support a maximum of 3,600 image files per request.

### Token calculation

- 258 tokens if both dimensions <= 384 pixels. Larger images are tiled into 768x768 pixel tiles, each costing 258 tokens.

A rough formula for calculating the number of tiles is as follows:

- Calculate the crop unit size which is roughly: floor(min(width, height) / 1.5).
- Divide each dimension by the crop unit size and multiply together to get the number of tiles.

For example, for an image of dimensions 960x540 would have a crop unit size of 360. Divide each dimension by 360 and the number of tile is 3 * 2 = 6.

### Media resolution

Gemini 3 introduces granular control over multimodal vision processing with the
`media_resolution`

parameter. The `media_resolution`

parameter determines the
**maximum number of tokens allocated per input image or video frame.**
Higher resolutions improve the model's ability to
read fine text or identify small details, but increase token usage and latency.

For more details about the parameter and how it can impact token calculations,
see the [media resolution](/gemini-api/docs/media-resolution) guide.

## Tips and best practices

- Verify that images are correctly rotated.
- Use clear, non-blurry images.
- When using a single image with text, place the text prompt
*after*the image part in the`contents`

array.

## What's next

This guide shows you how to upload image files and generate text outputs from image inputs. To learn more, see the following resources:

[Files API](/gemini-api/docs/files): Learn more about uploading and managing files for use with Gemini.[System instructions](/gemini-api/docs/text-generation#system-instructions): System instructions let you steer the behavior of the model based on your specific needs and use cases.[File prompting strategies](/gemini-api/docs/files#prompt-guide): The Gemini API supports prompting with text, image, audio, and video data, also known as multimodal prompting.[Safety guidance](/gemini-api/docs/safety-guidance): Sometimes generative AI models produce unexpected outputs, such as outputs that are inaccurate, biased, or offensive. Post-processing and human evaluation are essential to limit the risk of harm from such outputs.

---

## Source: https://ai.google.dev/gemini-api/docs/video-understanding

To learn about video generation, see the

[Veo]guide.

Gemini models can process videos, enabling many frontier developer use cases that would have historically required domain specific models. Some of Gemini's vision capabilities include the ability to: describe, segment, and extract information from videos, answer questions about video content, and refer to specific timestamps within a video.

You can provide videos as input to Gemini in the following ways:

| Input method | Max size | Recommended use case |
|---|---|---|
|

[Cloud Storage Registration](https://ai.google.dev/gemini-api/docs/file-input-methods#registration)[Inline Data](#inline-video)[YouTube URLs](#youtube)

Note:The[File API]is recommended for most use cases, especially for files larger than 100MB or when you want to reuse the file across multiple requests.

To learn about other file input methods, such as using external URLs or files
stored in Google Cloud, see the
[File input methods](/gemini-api/docs/file-input-methods) guide.

### Upload a video file

The following code downloads a sample video, uploads it using the [Files API](/gemini-api/docs/files),
waits for it to be processed, and then uses the uploaded file reference to
summarize the video.

### Python

```
from google import genai
client = genai.Client()
myfile = client.files.upload(file="path/to/sample.mp4")
response = client.models.generate_content(
model="gemini-3-flash-preview", contents=[myfile, "Summarize this video. Then create a quiz with an answer key based on the information in this video."]
)
print(response.text)
```


### JavaScript

```
import {
GoogleGenAI,
createUserContent,
createPartFromUri,
} from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const myfile = await ai.files.upload({
file: "path/to/sample.mp4",
config: { mimeType: "video/mp4" },
});
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: createUserContent([
createPartFromUri(myfile.uri, myfile.mimeType),
"Summarize this video. Then create a quiz with an answer key based on the information in this video.",
]),
});
console.log(response.text);
}
await main();
```


### Go

```
uploadedFile, _ := client.Files.UploadFromPath(ctx, "path/to/sample.mp4", nil)
parts := []*genai.Part{
genai.NewPartFromText("Summarize this video. Then create a quiz with an answer key based on the information in this video."),
genai.NewPartFromURI(uploadedFile.URI, uploadedFile.MIMEType),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
```


### REST

```
VIDEO_PATH="path/to/sample.mp4"
MIME_TYPE=$(file -b --mime-type "${VIDEO_PATH}")
NUM_BYTES=$(wc -c < "${VIDEO_PATH}")
DISPLAY_NAME=VIDEO
tmp_header_file=upload-header.tmp
echo "Starting file upload..."
curl "https://generativelanguage.googleapis.com/upload/v1beta/files" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-D ${tmp_header_file} \
-H "X-Goog-Upload-Protocol: resumable" \
-H "X-Goog-Upload-Command: start" \
-H "X-Goog-Upload-Header-Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Header-Content-Type: ${MIME_TYPE}" \
-H "Content-Type: application/json" \
-d "{'file': {'display_name': '${DISPLAY_NAME}'}}" 2> /dev/null
upload_url=$(grep -i "x-goog-upload-url: " "${tmp_header_file}" | cut -d" " -f2 | tr -d "\r")
rm "${tmp_header_file}"
echo "Uploading video data..."
curl "${upload_url}" \
-H "Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Offset: 0" \
-H "X-Goog-Upload-Command: upload, finalize" \
--data-binary "@${VIDEO_PATH}" 2> /dev/null > file_info.json
file_uri=$(jq -r ".file.uri" file_info.json)
echo file_uri=$file_uri
echo "File uploaded successfully. File URI: ${file_uri}"
# --- 3. Generate content using the uploaded video file ---
echo "Generating content from video..."
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{"file_data":{"mime_type": "'"${MIME_TYPE}"'", "file_uri": "'"${file_uri}"'"}},
{"text": "Summarize this video. Then create a quiz with an answer key based on the information in this video."}]
}]
}' 2> /dev/null > response.json
jq -r ".candidates[].content.parts[].text" response.json
```


Always use the Files API when the total request size (including the file, text prompt, system instructions, etc.) is larger than 20 MB, the video duration is significant, or if you intend to use the same video in multiple prompts. The File API accepts video file formats directly.

To learn more about working with media files, see
[Files API](/gemini-api/docs/files).

### Pass video data inline

Instead of uploading a video file using the File API, you can pass smaller
videos directly in the request to `generateContent`

. This is suitable for
shorter videos under 20MB total request size.

Here's an example of providing inline video data:

### Python

```
from google import genai
from google.genai import types
# Only for videos of size <20Mb
video_file_name = "/path/to/your/video.mp4"
video_bytes = open(video_file_name, 'rb').read()
client = genai.Client()
response = client.models.generate_content(
model='gemini-3-flash-preview',
contents=types.Content(
parts=[
types.Part(
inline_data=types.Blob(data=video_bytes, mime_type='video/mp4')
),
types.Part(text='Please summarize the video in 3 sentences.')
]
)
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
const ai = new GoogleGenAI({});
const base64VideoFile = fs.readFileSync("path/to/small-sample.mp4", {
encoding: "base64",
});
const contents = [
{
inlineData: {
mimeType: "video/mp4",
data: base64VideoFile,
},
},
{ text: "Please summarize the video in 3 sentences." }
];
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: contents,
});
console.log(response.text);
```


### REST

```
VIDEO_PATH=/path/to/your/video.mp4
if [[ "$(base64 --version 2>&1)" = *"FreeBSD"* ]]; then
B64FLAGS="--input"
else
B64FLAGS="-w0"
fi
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{
"inline_data": {
"mime_type":"video/mp4",
"data": "'$(base64 $B64FLAGS $VIDEO_PATH)'"
}
},
{"text": "Please summarize the video in 3 sentences."}
]
}]
}' 2> /dev/null
```


### Pass YouTube URLs

You can pass YouTube URLs directly to Gemini API as part of your request as follows:

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model='gemini-3-flash-preview',
contents=types.Content(
parts=[
types.Part(
file_data=types.FileData(file_uri='https://www.youtube.com/watch?v=9hE5-98ZeCg')
),
types.Part(text='Please summarize the video in 3 sentences.')
]
)
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
const contents = [
{
fileData: {
fileUri: "https://www.youtube.com/watch?v=9hE5-98ZeCg",
},
},
{ text: "Please summarize the video in 3 sentences." }
];
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: contents,
});
console.log(response.text);
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
parts := []*genai.Part{
genai.NewPartFromText("Please summarize the video in 3 sentences."),
genai.NewPartFromURI("https://www.youtube.com/watch?v=9hE5-98ZeCg","video/mp4"),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{"text": "Please summarize the video in 3 sentences."},
{
"file_data": {
"file_uri": "https://www.youtube.com/watch?v=9hE5-98ZeCg"
}
}
]
}]
}' 2> /dev/null
```


**Limitations:**

- For the free tier, you can't upload more than 8 hours of YouTube video per day.
- For the paid tier, there is no limit based on video length.
- For models prior to Gemini 2.5, you can upload only 1 video per request. For Gemini 2.5 and later models, you can upload a maximum of 10 videos per request.
- You can only upload public videos (not private or unlisted videos).

## Use context caching for long videos

For videos longer than 10 minutes, or when you plan to make multiple requests
against the same video file, use [context caching](/gemini-api/docs/caching) to
reduce costs and improve latency. Context caching lets you process the video
once and reuse the tokens for subsequent queries, making it ideal for chat
sessions or repeated analysis of long-form content.

## Refer to timestamps in the content

You can ask questions about specific points in time within the video using
timestamps of the form `MM:SS`

.

### Python

```
prompt = "What are the examples given at 00:05 and 00:10 supposed to show us?" # Adjusted timestamps for the NASA video
```


### JavaScript

```
const prompt = "What are the examples given at 00:05 and 00:10 supposed to show us?";
```


### Go

```
prompt := []*genai.Part{
genai.NewPartFromURI(currentVideoFile.URI, currentVideoFile.MIMEType),
// Adjusted timestamps for the NASA video
genai.NewPartFromText("What are the examples given at 00:05 and " +
"00:10 supposed to show us?"),
}
```


### REST

```
PROMPT="What are the examples given at 00:05 and 00:10 supposed to show us?"
```


## Extract detailed insights from video

Gemini models offer powerful capabilities for understanding video content by
processing information from both the **audio and visual** streams. This lets you
extract a rich set of details, including generating descriptions of what is
happening in a video and answering questions about its content.

For visual descriptions, the model samples the video at a rate of **1 frame
per second** (FPS). This default sampling rate works well for most content, but
note that it may miss details in videos with rapid motion or quick scene changes.
For such high-motion content, consider [setting a custom frame rate](#custom-frame-rate).

### Python

```
prompt = "Describe the key events in this video, providing both audio and visual details. Include timestamps for salient moments."
```


### JavaScript

```
const prompt = "Describe the key events in this video, providing both audio and visual details. Include timestamps for salient moments.";
```


### Go

```
prompt := []*genai.Part{
genai.NewPartFromURI(currentVideoFile.URI, currentVideoFile.MIMEType),
genai.NewPartFromText("Describe the key events in this video, providing both audio and visual details. " +
"Include timestamps for salient moments."),
}
```


### REST

```
PROMPT="Describe the key events in this video, providing both audio and visual details. Include timestamps for salient moments."
```


## Customize video processing

You can customize video processing in the Gemini API by setting clipping intervals or providing custom frame rate sampling.

### Set clipping intervals

You can clip video by specifying `videoMetadata`

with start and end offsets.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model='models/gemini-3-flash-preview',
contents=types.Content(
parts=[
types.Part(
file_data=types.FileData(file_uri='https://www.youtube.com/watch?v=XEzRZ35urlk'),
video_metadata=types.VideoMetadata(
start_offset='1250s',
end_offset='1570s'
)
),
types.Part(text='Please summarize the video in 3 sentences.')
]
)
)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({});
const model = 'gemini-3-flash-preview';
async function main() {
const contents = [
{
role: 'user',
parts: [
{
fileData: {
fileUri: 'https://www.youtube.com/watch?v=9hE5-98ZeCg',
mimeType: 'video/*',
},
videoMetadata: {
startOffset: '40s',
endOffset: '80s',
}
},
{
text: 'Please summarize the video in 3 sentences.',
},
],
},
];
const response = await ai.models.generateContent({
model,
contents,
});
console.log(response.text)
}
await main();
```


### Set a custom frame rate

You can set custom frame rate sampling by passing an `fps`

argument to
`videoMetadata`

.

### Python

```
from google import genai
from google.genai import types
# Only for videos of size <20Mb
video_file_name = "/path/to/your/video.mp4"
video_bytes = open(video_file_name, 'rb').read()
client = genai.Client()
response = client.models.generate_content(
model='models/gemini-3-flash-preview',
contents=types.Content(
parts=[
types.Part(
inline_data=types.Blob(
data=video_bytes,
mime_type='video/mp4'),
video_metadata=types.VideoMetadata(fps=5)
),
types.Part(text='Please summarize the video in 3 sentences.')
]
)
)
```


By default 1 frame per second (FPS) is sampled from the video. You might want to set low FPS (< 1) for long videos. This is especially useful for mostly static videos (e.g. lectures). Use a higher FPS for videos requiring granular temporal analysis, such as fast-action understanding or high-speed motion tracking.

## Supported video formats

Gemini supports the following video format MIME types:

`video/mp4`

`video/mpeg`

`video/mov`

`video/avi`

`video/x-flv`

`video/mpg`

`video/webm`

`video/wmv`

`video/3gpp`


## Technical details about videos

**Supported models & context**: All Gemini can process video data.- Models with a 1M context window can process videos up to 1 hour long at default media resolution or 3 hours long at low media resolution.

**File API processing**: When using the File API, videos are stored at 1 frame per second (FPS) and audio is processed at 1Kbps (single channel). Timestamps are added every second.- These rates are subject to change in the future for improvements in inference.
- You can override the 1 FPS sampling rate by
[setting a custom frame rate](#custom-frame-rate).

**Token calculation**: Each second of video is tokenized as follows:- Individual frames (sampled at 1 FPS):
- If
is set to low, frames are tokenized at 66 tokens per frame.`mediaResolution`

- Otherwise, frames are tokenized at 258 tokens per frame.

- If
- Audio: 32 tokens per second.
- Metadata is also included.
- Total: Approximately 300 tokens per second of video at default media resolution, or 100 tokens per second of video at low media resolution.

- Individual frames (sampled at 1 FPS):
**Medial resolution**: Gemini 3 introduces granular control over multimodal vision processing with the`media_resolution`

parameter. The`media_resolution`

parameter determines the**maximum number of tokens allocated per input image or video frame.**Higher resolutions improve the model's ability to read fine text or identify small details, but increase token usage and latency.For more details about the parameter and how it can impact token calculations, see the

[media resolution](/gemini-api/docs/media-resolution)guide.**Timestamp format**: When referring to specific moments in a video within your prompt, use the`MM:SS`

format (e.g.,`01:15`

for 1 minute and 15 seconds).**Best practices**:- Use only one video per prompt request for optimal results.
- If combining text and a single video, place the text prompt
*after*the video part in the`contents`

array. - Be aware that fast action sequences might lose detail due to the 1 FPS sampling rate. Consider slowing down such clips if necessary.


## What's next

This guide shows how to upload video files and generate text outputs from video inputs. To learn more, see the following resources:

[System instructions](/gemini-api/docs/text-generation#system-instructions): System instructions let you steer the behavior of the model based on your specific needs and use cases.[Files API](/gemini-api/docs/files): Learn more about uploading and managing files for use with Gemini.[File prompting strategies](/gemini-api/docs/files#prompt-guide): The Gemini API supports prompting with text, image, audio, and video data, also known as multimodal prompting.[Safety guidance](/gemini-api/docs/safety-guidance): Sometimes generative AI models produce unexpected outputs, such as outputs that are inaccurate, biased, or offensive. Post-processing and human evaluation are essential to limit the risk of harm from such outputs.

---

## Source: https://ai.google.dev/gemini-api/docs/document-processing

Gemini models can process documents in PDF format, using native vision to understand entire document contexts. This goes beyond just text extraction, allowing Gemini to:

- Analyze and interpret content, including text, images, diagrams, charts, and tables, even in long documents up to 1000 pages.
- Extract information into
[structured output](/gemini-api/docs/structured-output)formats. - Summarize and answer questions based on both the visual and textual elements in a document.
- Transcribe document content (e.g. to HTML), preserving layouts and formatting, for use in downstream applications.

You can also pass non-PDF documents in the same way but Gemini will see them as normal text which will eliminate context like charts or formatting.

## Passing PDF data inline

You can pass PDF data inline in the request to `generateContent`

. This is best
suited for smaller documents or temporary processing where you don't need to
reference the file in subsequent requests. We recommend using the [Files API](/gemini-api/docs/document-processing#large-pdfs)
for larger documents that you need to refer to in multi-turn interactions to
improve request latency and reduce bandwidth usage.

The following example shows you how to fetch a PDF from a URL and convert it to bytes for processing:

### Python

```
from google import genai
from google.genai import types
import httpx
client = genai.Client()
doc_url = "https://discovery.ucl.ac.uk/id/eprint/10089234/1/343019_3_art_0_py4t4l_convrt.pdf"
# Retrieve and encode the PDF byte
doc_data = httpx.get(doc_url).content
prompt = "Summarize this document"
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[
types.Part.from_bytes(
data=doc_data,
mime_type='application/pdf',
),
prompt
]
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: "GEMINI_API_KEY" });
async function main() {
const pdfResp = await fetch('https://discovery.ucl.ac.uk/id/eprint/10089234/1/343019_3_art_0_py4t4l_convrt.pdf')
.then((response) => response.arrayBuffer());
const contents = [
{ text: "Summarize this document" },
{
inlineData: {
mimeType: 'application/pdf',
data: Buffer.from(pdfResp).toString("base64")
}
}
];
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: contents
});
console.log(response.text);
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"io"
"net/http"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, _ := genai.NewClient(ctx, &genai.ClientConfig{
APIKey: os.Getenv("GEMINI_API_KEY"),
Backend: genai.BackendGeminiAPI,
})
pdfResp, _ := http.Get("https://discovery.ucl.ac.uk/id/eprint/10089234/1/343019_3_art_0_py4t4l_convrt.pdf")
var pdfBytes []byte
if pdfResp != nil && pdfResp.Body != nil {
pdfBytes, _ = io.ReadAll(pdfResp.Body)
pdfResp.Body.Close()
}
parts := []*genai.Part{
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "application/pdf",
Data: pdfBytes,
},
},
genai.NewPartFromText("Summarize this document"),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


### REST

```
DOC_URL="https://discovery.ucl.ac.uk/id/eprint/10089234/1/343019_3_art_0_py4t4l_convrt.pdf"
PROMPT="Summarize this document"
DISPLAY_NAME="base64_pdf"
# Download the PDF
wget -O "${DISPLAY_NAME}.pdf" "${DOC_URL}"
# Check for FreeBSD base64 and set flags accordingly
if [[ "$(base64 --version 2>&1)" = *"FreeBSD"* ]]; then
B64FLAGS="--input"
else
B64FLAGS="-w0"
fi
# Base64 encode the PDF
ENCODED_PDF=$(base64 $B64FLAGS "${DISPLAY_NAME}.pdf")
# Generate content using the base64 encoded PDF
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=$GOOGLE_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{"inline_data": {"mime_type": "application/pdf", "data": "'"$ENCODED_PDF"'"}},
{"text": "'$PROMPT'"}
]
}]
}' 2> /dev/null > response.json
cat response.json
echo
jq ".candidates[].content.parts[].text" response.json
# Clean up the downloaded PDF
rm "${DISPLAY_NAME}.pdf"
```


You can also read a PDF from a local file for processing:

### Python

```
from google import genai
from google.genai import types
import pathlib
client = genai.Client()
# Retrieve and encode the PDF byte
filepath = pathlib.Path('file.pdf')
prompt = "Summarize this document"
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[
types.Part.from_bytes(
data=filepath.read_bytes(),
mime_type='application/pdf',
),
prompt])
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from 'fs';
const ai = new GoogleGenAI({ apiKey: "GEMINI_API_KEY" });
async function main() {
const contents = [
{ text: "Summarize this document" },
{
inlineData: {
mimeType: 'application/pdf',
data: Buffer.from(fs.readFileSync("content/343019_3_art_0_py4t4l_convrt.pdf")).toString("base64")
}
}
];
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: contents
});
console.log(response.text);
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, _ := genai.NewClient(ctx, &genai.ClientConfig{
APIKey: os.Getenv("GEMINI_API_KEY"),
Backend: genai.BackendGeminiAPI,
})
pdfBytes, _ := os.ReadFile("path/to/your/file.pdf")
parts := []*genai.Part{
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "application/pdf",
Data: pdfBytes,
},
},
genai.NewPartFromText("Summarize this document"),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


## Uploading PDFs using the Files API

We recommend you use Files API for larger files or when you intend to reuse a document across multiple requests. This improves request latency and reduces bandwidth usage by decoupling the file upload from the model requests.

### Large PDFs from URLs

Use the File API to simplify uploading and processing large PDF files from URLs:

### Python

```
from google import genai
from google.genai import types
import io
import httpx
client = genai.Client()
long_context_pdf_path = "https://www.nasa.gov/wp-content/uploads/static/history/alsj/a17/A17_FlightPlan.pdf"
# Retrieve and upload the PDF using the File API
doc_io = io.BytesIO(httpx.get(long_context_pdf_path).content)
sample_doc = client.files.upload(
# You can pass a path or a file-like object here
file=doc_io,
config=dict(
mime_type='application/pdf')
)
prompt = "Summarize this document"
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[sample_doc, prompt])
print(response.text)
```


### JavaScript

```
import { createPartFromUri, GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: "GEMINI_API_KEY" });
async function main() {
const pdfBuffer = await fetch("https://www.nasa.gov/wp-content/uploads/static/history/alsj/a17/A17_FlightPlan.pdf")
.then((response) => response.arrayBuffer());
const fileBlob = new Blob([pdfBuffer], { type: 'application/pdf' });
const file = await ai.files.upload({
file: fileBlob,
config: {
displayName: 'A17_FlightPlan.pdf',
},
});
// Wait for the file to be processed.
let getFile = await ai.files.get({ name: file.name });
while (getFile.state === 'PROCESSING') {
getFile = await ai.files.get({ name: file.name });
console.log(`current file status: ${getFile.state}`);
console.log('File is still processing, retrying in 5 seconds');
await new Promise((resolve) => {
setTimeout(resolve, 5000);
});
}
if (file.state === 'FAILED') {
throw new Error('File processing failed.');
}
// Add the file to the contents.
const content = [
'Summarize this document',
];
if (file.uri && file.mimeType) {
const fileContent = createPartFromUri(file.uri, file.mimeType);
content.push(fileContent);
}
const response = await ai.models.generateContent({
model: 'gemini-3-flash-preview',
contents: content,
});
console.log(response.text);
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"io"
"net/http"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, _ := genai.NewClient(ctx, &genai.ClientConfig{
APIKey: os.Getenv("GEMINI_API_KEY"),
Backend: genai.BackendGeminiAPI,
})
pdfURL := "https://www.nasa.gov/wp-content/uploads/static/history/alsj/a17/A17_FlightPlan.pdf"
localPdfPath := "A17_FlightPlan_downloaded.pdf"
respHttp, _ := http.Get(pdfURL)
defer respHttp.Body.Close()
outFile, _ := os.Create(localPdfPath)
defer outFile.Close()
_, _ = io.Copy(outFile, respHttp.Body)
uploadConfig := &genai.UploadFileConfig{MIMEType: "application/pdf"}
uploadedFile, _ := client.Files.UploadFromPath(ctx, localPdfPath, uploadConfig)
promptParts := []*genai.Part{
genai.NewPartFromURI(uploadedFile.URI, uploadedFile.MIMEType),
genai.NewPartFromText("Summarize this document"),
}
contents := []*genai.Content{
genai.NewContentFromParts(promptParts, genai.RoleUser), // Specify role
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


### REST

```
PDF_PATH="https://www.nasa.gov/wp-content/uploads/static/history/alsj/a17/A17_FlightPlan.pdf"
DISPLAY_NAME="A17_FlightPlan"
PROMPT="Summarize this document"
# Download the PDF from the provided URL
wget -O "${DISPLAY_NAME}.pdf" "${PDF_PATH}"
MIME_TYPE=$(file -b --mime-type "${DISPLAY_NAME}.pdf")
NUM_BYTES=$(wc -c < "${DISPLAY_NAME}.pdf")
echo "MIME_TYPE: ${MIME_TYPE}"
echo "NUM_BYTES: ${NUM_BYTES}"
tmp_header_file=upload-header.tmp
# Initial resumable request defining metadata.
# The upload url is in the response headers dump them to a file.
curl "${BASE_URL}/upload/v1beta/files?key=${GOOGLE_API_KEY}" \
-D upload-header.tmp \
-H "X-Goog-Upload-Protocol: resumable" \
-H "X-Goog-Upload-Command: start" \
-H "X-Goog-Upload-Header-Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Header-Content-Type: ${MIME_TYPE}" \
-H "Content-Type: application/json" \
-d "{'file': {'display_name': '${DISPLAY_NAME}'}}" 2> /dev/null
upload_url=$(grep -i "x-goog-upload-url: " "${tmp_header_file}" | cut -d" " -f2 | tr -d "\r")
rm "${tmp_header_file}"
# Upload the actual bytes.
curl "${upload_url}" \
-H "Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Offset: 0" \
-H "X-Goog-Upload-Command: upload, finalize" \
--data-binary "@${DISPLAY_NAME}.pdf" 2> /dev/null > file_info.json
file_uri=$(jq ".file.uri" file_info.json)
echo "file_uri: ${file_uri}"
# Now generate content using that file
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=$GOOGLE_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{"text": "'$PROMPT'"},
{"file_data":{"mime_type": "application/pdf", "file_uri": '$file_uri'}}]
}]
}' 2> /dev/null > response.json
cat response.json
echo
jq ".candidates[].content.parts[].text" response.json
# Clean up the downloaded PDF
rm "${DISPLAY_NAME}.pdf"
```


### Large PDFs stored locally

### Python

```
from google import genai
from google.genai import types
import pathlib
import httpx
client = genai.Client()
# Retrieve and encode the PDF byte
file_path = pathlib.Path('large_file.pdf')
# Upload the PDF using the File API
sample_file = client.files.upload(
file=file_path,
)
prompt="Summarize this document"
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[sample_file, "Summarize this document"])
print(response.text)
```


### JavaScript

```
import { createPartFromUri, GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: "GEMINI_API_KEY" });
async function main() {
const file = await ai.files.upload({
file: 'path-to-localfile.pdf'
config: {
displayName: 'A17_FlightPlan.pdf',
},
});
// Wait for the file to be processed.
let getFile = await ai.files.get({ name: file.name });
while (getFile.state === 'PROCESSING') {
getFile = await ai.files.get({ name: file.name });
console.log(`current file status: ${getFile.state}`);
console.log('File is still processing, retrying in 5 seconds');
await new Promise((resolve) => {
setTimeout(resolve, 5000);
});
}
if (file.state === 'FAILED') {
throw new Error('File processing failed.');
}
// Add the file to the contents.
const content = [
'Summarize this document',
];
if (file.uri && file.mimeType) {
const fileContent = createPartFromUri(file.uri, file.mimeType);
content.push(fileContent);
}
const response = await ai.models.generateContent({
model: 'gemini-3-flash-preview',
contents: content,
});
console.log(response.text);
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, _ := genai.NewClient(ctx, &genai.ClientConfig{
APIKey: os.Getenv("GEMINI_API_KEY"),
Backend: genai.BackendGeminiAPI,
})
localPdfPath := "/path/to/file.pdf"
uploadConfig := &genai.UploadFileConfig{MIMEType: "application/pdf"}
uploadedFile, _ := client.Files.UploadFromPath(ctx, localPdfPath, uploadConfig)
promptParts := []*genai.Part{
genai.NewPartFromURI(uploadedFile.URI, uploadedFile.MIMEType),
genai.NewPartFromText("Give me a summary of this pdf file."),
}
contents := []*genai.Content{
genai.NewContentFromParts(promptParts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


### REST

```
NUM_BYTES=$(wc -c < "${PDF_PATH}")
DISPLAY_NAME=TEXT
tmp_header_file=upload-header.tmp
# Initial resumable request defining metadata.
# The upload url is in the response headers dump them to a file.
curl "${BASE_URL}/upload/v1beta/files?key=${GEMINI_API_KEY}" \
-D upload-header.tmp \
-H "X-Goog-Upload-Protocol: resumable" \
-H "X-Goog-Upload-Command: start" \
-H "X-Goog-Upload-Header-Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Header-Content-Type: application/pdf" \
-H "Content-Type: application/json" \
-d "{'file': {'display_name': '${DISPLAY_NAME}'}}" 2> /dev/null
upload_url=$(grep -i "x-goog-upload-url: " "${tmp_header_file}" | cut -d" " -f2 | tr -d "\r")
rm "${tmp_header_file}"
# Upload the actual bytes.
curl "${upload_url}" \
-H "Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Offset: 0" \
-H "X-Goog-Upload-Command: upload, finalize" \
--data-binary "@${PDF_PATH}" 2> /dev/null > file_info.json
file_uri=$(jq ".file.uri" file_info.json)
echo file_uri=$file_uri
# Now generate content using that file
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=$GOOGLE_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{"text": "Can you add a few more lines to this poem?"},
{"file_data":{"mime_type": "application/pdf", "file_uri": '$file_uri'}}]
}]
}' 2> /dev/null > response.json
cat response.json
echo
jq ".candidates[].content.parts[].text" response.json
```


You can verify the API successfully stored the uploaded file and get its
metadata by calling [ files.get](/api/rest/v1beta/files/get). Only the

`name`

(and by extension, the `uri`

) are unique.### Python

```
from google import genai
import pathlib
client = genai.Client()
fpath = pathlib.Path('example.txt')
fpath.write_text('hello')
file = client.files.upload(file='example.txt')
file_info = client.files.get(name=file.name)
print(file_info.model_dump_json(indent=4))
```


### REST

```
name=$(jq ".file.name" file_info.json)
# Get the file of interest to check state
curl https://generativelanguage.googleapis.com/v1beta/files/$name > file_info.json
# Print some information about the file you got
name=$(jq ".file.name" file_info.json)
echo name=$name
file_uri=$(jq ".file.uri" file_info.json)
echo file_uri=$file_uri
```


## Passing multiple PDFs

The Gemini API is capable of processing multiple PDF documents (up to 1000 pages) in a single request, as long as the combined size of the documents and the text prompt stays within the model's context window.

### Python

```
from google import genai
import io
import httpx
client = genai.Client()
doc_url_1 = "https://arxiv.org/pdf/2312.11805"
doc_url_2 = "https://arxiv.org/pdf/2403.05530"
# Retrieve and upload both PDFs using the File API
doc_data_1 = io.BytesIO(httpx.get(doc_url_1).content)
doc_data_2 = io.BytesIO(httpx.get(doc_url_2).content)
sample_pdf_1 = client.files.upload(
file=doc_data_1,
config=dict(mime_type='application/pdf')
)
sample_pdf_2 = client.files.upload(
file=doc_data_2,
config=dict(mime_type='application/pdf')
)
prompt = "What is the difference between each of the main benchmarks between these two papers? Output these in a table."
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[sample_pdf_1, sample_pdf_2, prompt]
)
print(response.text)
```


### JavaScript

```
import { createPartFromUri, GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: "GEMINI_API_KEY" });
async function uploadRemotePDF(url, displayName) {
const pdfBuffer = await fetch(url)
.then((response) => response.arrayBuffer());
const fileBlob = new Blob([pdfBuffer], { type: 'application/pdf' });
const file = await ai.files.upload({
file: fileBlob,
config: {
displayName: displayName,
},
});
// Wait for the file to be processed.
let getFile = await ai.files.get({ name: file.name });
while (getFile.state === 'PROCESSING') {
getFile = await ai.files.get({ name: file.name });
console.log(`current file status: ${getFile.state}`);
console.log('File is still processing, retrying in 5 seconds');
await new Promise((resolve) => {
setTimeout(resolve, 5000);
});
}
if (file.state === 'FAILED') {
throw new Error('File processing failed.');
}
return file;
}
async function main() {
const content = [
'What is the difference between each of the main benchmarks between these two papers? Output these in a table.',
];
let file1 = await uploadRemotePDF("https://arxiv.org/pdf/2312.11805", "PDF 1")
if (file1.uri && file1.mimeType) {
const fileContent = createPartFromUri(file1.uri, file1.mimeType);
content.push(fileContent);
}
let file2 = await uploadRemotePDF("https://arxiv.org/pdf/2403.05530", "PDF 2")
if (file2.uri && file2.mimeType) {
const fileContent = createPartFromUri(file2.uri, file2.mimeType);
content.push(fileContent);
}
const response = await ai.models.generateContent({
model: 'gemini-3-flash-preview',
contents: content,
});
console.log(response.text);
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"io"
"net/http"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, _ := genai.NewClient(ctx, &genai.ClientConfig{
APIKey: os.Getenv("GEMINI_API_KEY"),
Backend: genai.BackendGeminiAPI,
})
docUrl1 := "https://arxiv.org/pdf/2312.11805"
docUrl2 := "https://arxiv.org/pdf/2403.05530"
localPath1 := "doc1_downloaded.pdf"
localPath2 := "doc2_downloaded.pdf"
respHttp1, _ := http.Get(docUrl1)
defer respHttp1.Body.Close()
outFile1, _ := os.Create(localPath1)
_, _ = io.Copy(outFile1, respHttp1.Body)
outFile1.Close()
respHttp2, _ := http.Get(docUrl2)
defer respHttp2.Body.Close()
outFile2, _ := os.Create(localPath2)
_, _ = io.Copy(outFile2, respHttp2.Body)
outFile2.Close()
uploadConfig1 := &genai.UploadFileConfig{MIMEType: "application/pdf"}
uploadedFile1, _ := client.Files.UploadFromPath(ctx, localPath1, uploadConfig1)
uploadConfig2 := &genai.UploadFileConfig{MIMEType: "application/pdf"}
uploadedFile2, _ := client.Files.UploadFromPath(ctx, localPath2, uploadConfig2)
promptParts := []*genai.Part{
genai.NewPartFromURI(uploadedFile1.URI, uploadedFile1.MIMEType),
genai.NewPartFromURI(uploadedFile2.URI, uploadedFile2.MIMEType),
genai.NewPartFromText("What is the difference between each of the " +
"main benchmarks between these two papers? " +
"Output these in a table."),
}
contents := []*genai.Content{
genai.NewContentFromParts(promptParts, genai.RoleUser),
}
modelName := "gemini-3-flash-preview"
result, _ := client.Models.GenerateContent(
ctx,
modelName,
contents,
nil,
)
fmt.Println(result.Text())
}
```


### REST

```
DOC_URL_1="https://arxiv.org/pdf/2312.11805"
DOC_URL_2="https://arxiv.org/pdf/2403.05530"
DISPLAY_NAME_1="Gemini_paper"
DISPLAY_NAME_2="Gemini_1.5_paper"
PROMPT="What is the difference between each of the main benchmarks between these two papers? Output these in a table."
# Function to download and upload a PDF
upload_pdf() {
local doc_url="$1"
local display_name="$2"
# Download the PDF
wget -O "${display_name}.pdf" "${doc_url}"
local MIME_TYPE=$(file -b --mime-type "${display_name}.pdf")
local NUM_BYTES=$(wc -c < "${display_name}.pdf")
echo "MIME_TYPE: ${MIME_TYPE}"
echo "NUM_BYTES: ${NUM_BYTES}"
local tmp_header_file=upload-header.tmp
# Initial resumable request
curl "${BASE_URL}/upload/v1beta/files?key=${GOOGLE_API_KEY}" \
-D "${tmp_header_file}" \
-H "X-Goog-Upload-Protocol: resumable" \
-H "X-Goog-Upload-Command: start" \
-H "X-Goog-Upload-Header-Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Header-Content-Type: ${MIME_TYPE}" \
-H "Content-Type: application/json" \
-d "{'file': {'display_name': '${display_name}'}}" 2> /dev/null
local upload_url=$(grep -i "x-goog-upload-url: " "${tmp_header_file}" | cut -d" " -f2 | tr -d "\r")
rm "${tmp_header_file}"
# Upload the PDF
curl "${upload_url}" \
-H "Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Offset: 0" \
-H "X-Goog-Upload-Command: upload, finalize" \
--data-binary "@${display_name}.pdf" 2> /dev/null > "file_info_${display_name}.json"
local file_uri=$(jq ".file.uri" "file_info_${display_name}.json")
echo "file_uri for ${display_name}: ${file_uri}"
# Clean up the downloaded PDF
rm "${display_name}.pdf"
echo "${file_uri}"
}
# Upload the first PDF
file_uri_1=$(upload_pdf "${DOC_URL_1}" "${DISPLAY_NAME_1}")
# Upload the second PDF
file_uri_2=$(upload_pdf "${DOC_URL_2}" "${DISPLAY_NAME_2}")
# Now generate content using both files
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=$GOOGLE_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{"file_data": {"mime_type": "application/pdf", "file_uri": '$file_uri_1'}},
{"file_data": {"mime_type": "application/pdf", "file_uri": '$file_uri_2'}},
{"text": "'$PROMPT'"}
]
}]
}' 2> /dev/null > response.json
cat response.json
echo
jq ".candidates[].content.parts[].text" response.json
```


## Technical details

Gemini supports PDF files up to 50MB or 1000 pages. This limit applies to both inline data and Files API uploads. Each document page is equivalent to 258 tokens.

While there are no specific limits to the number of pixels in a document besides
the model's [context window](/gemini-api/docs/long-context), larger pages are
scaled down to a maximum resolution of 3072 x 3072 while preserving their original
aspect ratio, while smaller pages are scaled up to 768 x 768 pixels. There is no
cost reduction for pages at lower sizes, other than bandwidth, or performance
improvement for pages at higher resolution.

### Gemini 3 models

Gemini 3 introduces granular control over multimodal vision processing with the
`media_resolution`

parameter. You can now set the resolution to low, medium, or
high per individual media part. With this addition, the processing of PDF
documents has been updated:

**Native text inclusion:**Text natively embedded in the PDF is extracted and provided to the model.**Billing & token reporting:**- You are
**not charged**for tokens originating from the extracted**native text**in PDFs. - In the
`usage_metadata`

section of the API response, tokens generated from processing PDF pages (as images) are now counted under the`IMAGE`

modality, not a separate`DOCUMENT`

modality as in some earlier versions.

- You are

For more details about the media resolution parameter, see the
[Media resolution](/gemini-api/docs/media-resolution) guide.

### Document types

Technically, you can pass other MIME types for document understanding, like
TXT, Markdown, HTML, XML, etc. However, document vision ** only meaningfully
understands PDFs**. Other types will be extracted as pure text, and the model
won't be able to interpret what we see in the rendering of those files. Any
file-type specifics like charts, diagrams, HTML tags, Markdown formatting, etc.,
will be lost.

To learn about other file input methods, see the
[File input methods](/gemini-api/docs/file-input-methods) guide.

### Best practices

For best results:

- Rotate pages to the correct orientation before uploading.
- Avoid blurry pages.
- If using a single page, place the text prompt after the page.

## What's next

To learn more, see the following resources:

[File prompting strategies](/gemini-api/docs/files#prompt-guide): The Gemini API supports prompting with text, image, audio, and video data, also known as multimodal prompting.[System instructions](/gemini-api/docs/text-generation#system-instructions): System instructions let you steer the behavior of the model based on your specific needs and use cases.

---

## Source: https://ai.google.dev/gemini-api/docs/audio

Gemini can analyze audio input and generate text responses.

### Python

```
from google import genai
client = genai.Client()
myfile = client.files.upload(file="path/to/sample.mp3")
response = client.models.generate_content(
model="gemini-3-flash-preview", contents=["Describe this audio clip", myfile]
)
print(response.text)
```


### JavaScript

```
import {
GoogleGenAI,
createUserContent,
createPartFromUri,
} from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const myfile = await ai.files.upload({
file: "path/to/sample.mp3",
config: { mimeType: "audio/mp3" },
});
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: createUserContent([
createPartFromUri(myfile.uri, myfile.mimeType),
"Describe this audio clip",
]),
});
console.log(response.text);
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
localAudioPath := "/path/to/sample.mp3"
uploadedFile, _ := client.Files.UploadFromPath(
ctx,
localAudioPath,
nil,
)
parts := []*genai.Part{
genai.NewPartFromText("Describe this audio clip"),
genai.NewPartFromURI(uploadedFile.URI, uploadedFile.MIMEType),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


### REST

```
AUDIO_PATH="path/to/sample.mp3"
MIME_TYPE=$(file -b --mime-type "${AUDIO_PATH}")
NUM_BYTES=$(wc -c < "${AUDIO_PATH}")
DISPLAY_NAME=AUDIO
tmp_header_file=upload-header.tmp
# Initial resumable request defining metadata.
# The upload url is in the response headers dump them to a file.
curl "https://generativelanguage.googleapis.com/upload/v1beta/files" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-D upload-header.tmp \
-H "X-Goog-Upload-Protocol: resumable" \
-H "X-Goog-Upload-Command: start" \
-H "X-Goog-Upload-Header-Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Header-Content-Type: ${MIME_TYPE}" \
-H "Content-Type: application/json" \
-d "{'file': {'display_name': '${DISPLAY_NAME}'}}" 2> /dev/null
upload_url=$(grep -i "x-goog-upload-url: " "${tmp_header_file}" | cut -d" " -f2 | tr -d "\r")
rm "${tmp_header_file}"
# Upload the actual bytes.
curl "${upload_url}" \
-H "Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Offset: 0" \
-H "X-Goog-Upload-Command: upload, finalize" \
--data-binary "@${AUDIO_PATH}" 2> /dev/null > file_info.json
file_uri=$(jq ".file.uri" file_info.json)
echo file_uri=$file_uri
# Now generate content using that file
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{"text": "Describe this audio clip"},
{"file_data":{"mime_type": "${MIME_TYPE}", "file_uri": '$file_uri'}}]
}]
}' 2> /dev/null > response.json
cat response.json
echo
jq ".candidates[].content.parts[].text" response.json
```


## Overview

Gemini can analyze and understand audio input and generate text responses to it, enabling use cases like the following:

- Describe, summarize, or answer questions about audio content.
- Provide a transcription and translation of the audio (speech to text).
- Detect emotion in speech and music.
- Analyze specific segments of the audio, and provide timestamps.

As of now the Gemini API doesn't support real-time transcription use cases.
For real-time voice and video interactions refer to the [Live API](/gemini-api/docs/live).
For dedicated speech to text models with support for real-time transcription,
use the [Google Cloud Speech-to-Text API](https://cloud.google.com/speech-to-text).

## Transcribe speech to text

This example application shows how to prompt the Gemini API to transcribe,
translate, and summarize speech, including timestamps and emotion detection
using [structured outputs](/gemini-api/docs/structured-output).

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
YOUTUBE_URL = "https://www.youtube.com/watch?v=ku-N-eS1lgM"
def main():
prompt = """
Process the audio file and generate a detailed transcription.
Requirements:
1. Provide accurate timestamps for each segment (Format: MM:SS).
2. Detect the primary language of each segment.
3. If the segment is in a language different than English, also provide the English translation.
4. Identify the primary emotion of the speaker in this segment. You MUST choose exactly one of the following: Happy, Sad, Angry, Neutral.
5. Provide a brief summary of the entire audio at the beginning.
"""
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[
types.Content(
parts=[
types.Part(
file_data=types.FileData(
file_uri=YOUTUBE_URL
)
),
types.Part(
text=prompt
)
]
)
],
config=types.GenerateContentConfig(
response_mime_type="application/json",
response_schema=types.Schema(
type=types.Type.OBJECT,
properties={
"summary": types.Schema(
type=types.Type.STRING,
description="A concise summary of the audio content.",
),
"segments": types.Schema(
type=types.Type.ARRAY,
description="List of transcribed segments with timestamp.",
items=types.Schema(
type=types.Type.OBJECT,
properties={
"timestamp": types.Schema(type=types.Type.STRING),
"content": types.Schema(type=types.Type.STRING),
"language": types.Schema(type=types.Type.STRING),
"language_code": types.Schema(type=types.Type.STRING),
"translation": types.Schema(type=types.Type.STRING),
"emotion": types.Schema(
type=types.Type.STRING,
enum=["happy", "sad", "angry", "neutral"]
),
},
required=["timestamp", "content", "language", "language_code", "emotion"],
),
),
},
required=["summary", "segments"],
),
),
)
print(response.text)
if __name__ == "__main__":
main()
```


### JavaScript

```
import {
GoogleGenAI,
Type
} from "@google/genai";
const ai = new GoogleGenAI({});
const YOUTUBE_URL = "https://www.youtube.com/watch?v=ku-N-eS1lgM";
async function main() {
const prompt = `
Process the audio file and generate a detailed transcription.
Requirements:
1. Provide accurate timestamps for each segment (Format: MM:SS).
2. Detect the primary language of each segment.
3. If the segment is in a language different than English, also provide the English translation.
4. Identify the primary emotion of the speaker in this segment. You MUST choose exactly one of the following: Happy, Sad, Angry, Neutral.
5. Provide a brief summary of the entire audio at the beginning.
`;
const Emotion = {
Happy: 'happy',
Sad: 'sad',
Angry: 'angry',
Neutral: 'neutral'
};
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: {
parts: [
{
fileData: {
fileUri: YOUTUBE_URL,
},
},
{
text: prompt,
},
],
},
config: {
responseMimeType: "application/json",
responseSchema: {
type: Type.OBJECT,
properties: {
summary: {
type: Type.STRING,
description: "A concise summary of the audio content.",
},
segments: {
type: Type.ARRAY,
description: "List of transcribed segments with timestamp.",
items: {
type: Type.OBJECT,
properties: {
timestamp: { type: Type.STRING },
content: { type: Type.STRING },
language: { type: Type.STRING },
language_code: { type: Type.STRING },
translation: { type: Type.STRING },
emotion: {
type: Type.STRING,
enum: Object.values(Emotion)
},
},
required: ["timestamp", "content", "language", "language_code", "emotion"],
},
},
},
required: ["summary", "segments"],
},
},
});
const json = JSON.parse(response.text);
console.log(json);
}
await main();
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"file_data": {
"file_uri": "https://www.youtube.com/watch?v=ku-N-eS1lgM",
"mime_type": "video/mp4"
}
},
{
"text": "Process the audio file and generate a detailed transcription.\n\nRequirements:\n1. Provide accurate timestamps for each segment (Format: MM:SS).\n2. Detect the primary language of each segment.\n3. If the segment is in a language different than English, also provide the English translation.\n4. Identify the primary emotion of the speaker in this segment. You MUST choose exactly one of the following: Happy, Sad, Angry, Neutral.\n5. Provide a brief summary of the entire audio at the beginning."
}
]
}
],
"generation_config": {
"response_mime_type": "application/json",
"response_schema": {
"type": "OBJECT",
"properties": {
"summary": {
"type": "STRING",
"description": "A concise summary of the audio content."
},
"segments": {
"type": "ARRAY",
"description": "List of transcribed segments with timestamp.",
"items": {
"type": "OBJECT",
"properties": {
"timestamp": { "type": "STRING" },
"content": { "type": "STRING" },
"language": { "type": "STRING" },
"language_code": { "type": "STRING" },
"translation": { "type": "STRING" },
"emotion": {
"type": "STRING",
"enum": ["happy", "sad", "angry", "neutral"]
}
},
"required": ["timestamp", "content", "language", "language_code", "emotion"]
}
}
},
"required": ["summary", "segments"]
}
}
}' 2> /dev/null > response.json
cat response.json
echo
jq ".candidates[].content.parts[].text" response.json
```


You can prompt [AI Studio Build](https://aistudio.google.com/apps?e=0) to create
an app just like
[this example transcription app](https://aistudio.google.com/apps/bundled/echoscript)
, with the click of a button.

## Input audio

You can provide audio data to Gemini in the following ways:

[Upload an audio file](#upload-audio)before making a request to`generateContent`

.[Pass inline audio data](#inline-audio)with the request to`generateContent`

.

To learn about other file input methods, see the
[File input methods](/gemini-api/docs/file-input-methods) guide.

### Upload an audio file

You can use the [Files API](/gemini-api/docs/files) to upload an audio file.
Always use the Files API when the total request size (including the files, text
prompt, system instructions, etc.) is larger than 20 MB.

The following code uploads an audio file and then uses the file in a call to
`generateContent`

.

### Python

```
from google import genai
client = genai.Client()
myfile = client.files.upload(file="path/to/sample.mp3")
response = client.models.generate_content(
model="gemini-3-flash-preview", contents=["Describe this audio clip", myfile]
)
print(response.text)
```


### JavaScript

```
import {
GoogleGenAI,
createUserContent,
createPartFromUri,
} from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const myfile = await ai.files.upload({
file: "path/to/sample.mp3",
config: { mimeType: "audio/mp3" },
});
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: createUserContent([
createPartFromUri(myfile.uri, myfile.mimeType),
"Describe this audio clip",
]),
});
console.log(response.text);
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
localAudioPath := "/path/to/sample.mp3"
uploadedFile, _ := client.Files.UploadFromPath(
ctx,
localAudioPath,
nil,
)
parts := []*genai.Part{
genai.NewPartFromText("Describe this audio clip"),
genai.NewPartFromURI(uploadedFile.URI, uploadedFile.MIMEType),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


### REST

```
AUDIO_PATH="path/to/sample.mp3"
MIME_TYPE=$(file -b --mime-type "${AUDIO_PATH}")
NUM_BYTES=$(wc -c < "${AUDIO_PATH}")
DISPLAY_NAME=AUDIO
tmp_header_file=upload-header.tmp
# Initial resumable request defining metadata.
# The upload url is in the response headers dump them to a file.
curl "https://generativelanguage.googleapis.com/upload/v1beta/files" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-D upload-header.tmp \
-H "X-Goog-Upload-Protocol: resumable" \
-H "X-Goog-Upload-Command: start" \
-H "X-Goog-Upload-Header-Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Header-Content-Type: ${MIME_TYPE}" \
-H "Content-Type: application/json" \
-d "{'file': {'display_name': '${DISPLAY_NAME}'}}" 2> /dev/null
upload_url=$(grep -i "x-goog-upload-url: " "${tmp_header_file}" | cut -d" " -f2 | tr -d "\r")
rm "${tmp_header_file}"
# Upload the actual bytes.
curl "${upload_url}" \
-H "Content-Length: ${NUM_BYTES}" \
-H "X-Goog-Upload-Offset: 0" \
-H "X-Goog-Upload-Command: upload, finalize" \
--data-binary "@${AUDIO_PATH}" 2> /dev/null > file_info.json
file_uri=$(jq ".file.uri" file_info.json)
echo file_uri=$file_uri
# Now generate content using that file
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{"text": "Describe this audio clip"},
{"file_data":{"mime_type": "${MIME_TYPE}", "file_uri": '$file_uri'}}]
}]
}' 2> /dev/null > response.json
cat response.json
echo
jq ".candidates[].content.parts[].text" response.json
```


To learn more about working with media files, see
[Files API](/gemini-api/docs/files).

### Pass audio data inline

Instead of uploading an audio file, you can pass inline audio data in the
request to `generateContent`

:

### Python

```
from google import genai
from google.genai import types
with open('path/to/small-sample.mp3', 'rb') as f:
audio_bytes = f.read()
client = genai.Client()
response = client.models.generate_content(
model='gemini-3-flash-preview',
contents=[
'Describe this audio clip',
types.Part.from_bytes(
data=audio_bytes,
mime_type='audio/mp3',
)
]
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
const ai = new GoogleGenAI({});
const base64AudioFile = fs.readFileSync("path/to/small-sample.mp3", {
encoding: "base64",
});
const contents = [
{ text: "Please summarize the audio." },
{
inlineData: {
mimeType: "audio/mp3",
data: base64AudioFile,
},
},
];
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: contents,
});
console.log(response.text);
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
audioBytes, _ := os.ReadFile("/path/to/small-sample.mp3")
parts := []*genai.Part{
genai.NewPartFromText("Describe this audio clip"),
&genai.Part{
InlineData: &genai.Blob{
MIMEType: "audio/mp3",
Data: audioBytes,
},
},
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


A few things to keep in mind about inline audio data:

- The maximum request size is 20 MB, which includes text prompts,
system instructions, and files provided inline. If your file's
size will make the
*total request size*exceed 20 MB, then use the Files API to[upload an audio file](#upload-audio)for use in the request. - If you're using an audio sample multiple times, it's more efficient
to
[upload an audio file](#upload-audio).

## Get a transcript

To get a transcript of audio data, just ask for it in the prompt:

### Python

```
from google import genai
client = genai.Client()
myfile = client.files.upload(file='path/to/sample.mp3')
prompt = 'Generate a transcript of the speech.'
response = client.models.generate_content(
model='gemini-3-flash-preview',
contents=[prompt, myfile]
)
print(response.text)
```


### JavaScript

```
import {
GoogleGenAI,
createUserContent,
createPartFromUri,
} from "@google/genai";
const ai = new GoogleGenAI({});
const myfile = await ai.files.upload({
file: "path/to/sample.mp3",
config: { mimeType: "audio/mpeg" },
});
const result = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: createUserContent([
createPartFromUri(myfile.uri, myfile.mimeType),
"Generate a transcript of the speech.",
]),
});
console.log("result.text=", result.text);
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
localAudioPath := "/path/to/sample.mp3"
uploadedFile, _ := client.Files.UploadFromPath(
ctx,
localAudioPath,
nil,
)
parts := []*genai.Part{
genai.NewPartFromText("Generate a transcript of the speech."),
genai.NewPartFromURI(uploadedFile.URI, uploadedFile.MIMEType),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


## Refer to timestamps

You can refer to specific sections of an audio file using timestamps of the form
`MM:SS`

. For example, the following prompt requests a transcript that

- Starts at 2 minutes 30 seconds from the beginning of the file.
Ends at 3 minutes 29 seconds from the beginning of the file.


### Python

```
# Create a prompt containing timestamps.
prompt = "Provide a transcript of the speech from 02:30 to 03:29."
```


### JavaScript

```
// Create a prompt containing timestamps.
const prompt = "Provide a transcript of the speech from 02:30 to 03:29."
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
localAudioPath := "/path/to/sample.mp3"
uploadedFile, _ := client.Files.UploadFromPath(
ctx,
localAudioPath,
nil,
)
parts := []*genai.Part{
genai.NewPartFromText("Provide a transcript of the speech " +
"between the timestamps 02:30 and 03:29."),
genai.NewPartFromURI(uploadedFile.URI, uploadedFile.MIMEType),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
result, _ := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Println(result.Text())
}
```


## Count tokens

Call the `countTokens`

method to get a count of the number of tokens in an
audio file. For example:

### Python

```
from google import genai
client = genai.Client()
response = client.models.count_tokens(
model='gemini-3-flash-preview',
contents=[myfile]
)
print(response)
```


### JavaScript

```
import {
GoogleGenAI,
createUserContent,
createPartFromUri,
} from "@google/genai";
const ai = new GoogleGenAI({});
const myfile = await ai.files.upload({
file: "path/to/sample.mp3",
config: { mimeType: "audio/mpeg" },
});
const countTokensResponse = await ai.models.countTokens({
model: "gemini-3-flash-preview",
contents: createUserContent([
createPartFromUri(myfile.uri, myfile.mimeType),
]),
});
console.log(countTokensResponse.totalTokens);
```


### Go

```
package main
import (
"context"
"fmt"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
localAudioPath := "/path/to/sample.mp3"
uploadedFile, _ := client.Files.UploadFromPath(
ctx,
localAudioPath,
nil,
)
parts := []*genai.Part{
genai.NewPartFromURI(uploadedFile.URI, uploadedFile.MIMEType),
}
contents := []*genai.Content{
genai.NewContentFromParts(parts, genai.RoleUser),
}
tokens, _ := client.Models.CountTokens(
ctx,
"gemini-3-flash-preview",
contents,
nil,
)
fmt.Printf("File %s is %d tokens\n", localAudioPath, tokens.TotalTokens)
}
```


## Supported audio formats

Gemini supports the following audio format MIME types:

- WAV -
`audio/wav`

- MP3 -
`audio/mp3`

- AIFF -
`audio/aiff`

- AAC -
`audio/aac`

- OGG Vorbis -
`audio/ogg`

- FLAC -
`audio/flac`


## Technical details about audio

- Gemini represents each second of audio as 32 tokens; for example, one minute of audio is represented as 1,920 tokens.
- Gemini can "understand" non-speech components, such as birdsong or sirens.
- The maximum supported length of audio data in a single prompt is 9.5 hours.
Gemini doesn't limit the
*number*of audio files in a single prompt; however, the total combined length of all audio files in a single prompt can't exceed 9.5 hours. - Gemini downsamples audio files to a 16 Kbps data resolution.
- If the audio source contains multiple channels, Gemini combines those channels into a single channel.

## What's next

This guide shows how to generate text in response to audio data. To learn more, see the following resources:

[File prompting strategies](/gemini-api/docs/files#prompt-guide): The Gemini API supports prompting with text, image, audio, and video data, also known as multimodal prompting.[System instructions](/gemini-api/docs/text-generation#system-instructions): System instructions let you steer the behavior of the model based on your specific needs and use cases.[Safety guidance](/gemini-api/docs/safety-guidance): Sometimes generative AI models produce unexpected outputs, such as outputs that are inaccurate, biased, or offensive. Post-processing and human evaluation are essential to limit the risk of harm from such outputs.

---

## Source: https://ai.google.dev/gemini-api/docs/thinking

The [Gemini 3 and 2.5 series models](/gemini-api/docs/models) use an internal
"thinking process" that significantly improves their reasoning and multi-step
planning abilities, making them highly effective for complex tasks such as
coding, advanced mathematics, and data analysis.

This guide shows you how to work with Gemini's thinking capabilities using the Gemini API.

## Generating content with thinking

Initiating a request with a thinking model is similar to any other content
generation request. The key difference lies in specifying one of the
[models with thinking support](#supported-models) in the `model`

field, as
demonstrated in the following [text generation](/gemini-api/docs/text-generation#text-input) example:

### Python

```
from google import genai
client = genai.Client()
prompt = "Explain the concept of Occam's Razor and provide a simple, everyday example."
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=prompt
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const prompt = "Explain the concept of Occam's Razor and provide a simple, everyday example.";
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: prompt,
});
console.log(response.text);
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
prompt := "Explain the concept of Occam's Razor and provide a simple, everyday example."
model := "gemini-3-flash-preview"
resp, _ := client.Models.GenerateContent(ctx, model, genai.Text(prompt), nil)
fmt.Println(resp.Text())
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"text": "Explain the concept of Occam'\''s Razor and provide a simple, everyday example."
}
]
}
]
}'
```
```


## Thought summaries

Thought summaries are summarized versions of the model's raw thoughts and offer insights into the model's internal reasoning process. Note that thinking levels and budgets apply to the model's raw thoughts and not to thought summaries.

You can enable thought summaries by setting `includeThoughts`

to `true`

in your
request configuration. You can then access the summary by iterating through the
`response`

parameter's `parts`

, and checking the `thought`

boolean.

Here's an example demonstrating how to enable and retrieve thought summaries without streaming, which returns a single, final thought summary with the response:

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
prompt = "What is the sum of the first 50 prime numbers?"
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=prompt,
config=types.GenerateContentConfig(
thinking_config=types.ThinkingConfig(
include_thoughts=True
)
)
)
for part in response.candidates[0].content.parts:
if not part.text:
continue
if part.thought:
print("Thought summary:")
print(part.text)
print()
else:
print("Answer:")
print(part.text)
print()
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: "What is the sum of the first 50 prime numbers?",
config: {
thinkingConfig: {
includeThoughts: true,
},
},
});
for (const part of response.candidates[0].content.parts) {
if (!part.text) {
continue;
}
else if (part.thought) {
console.log("Thoughts summary:");
console.log(part.text);
}
else {
console.log("Answer:");
console.log(part.text);
}
}
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"google.golang.org/genai"
"os"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
contents := genai.Text("What is the sum of the first 50 prime numbers?")
model := "gemini-3-flash-preview"
resp, _ := client.Models.GenerateContent(ctx, model, contents, &genai.GenerateContentConfig{
ThinkingConfig: &genai.ThinkingConfig{
IncludeThoughts: true,
},
})
for _, part := range resp.Candidates[0].Content.Parts {
if part.Text != "" {
if part.Thought {
fmt.Println("Thoughts Summary:")
fmt.Println(part.Text)
} else {
fmt.Println("Answer:")
fmt.Println(part.Text)
}
}
}
}
```


And here is an example using thinking with streaming, which returns rolling, incremental summaries during generation:

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
prompt = """
Alice, Bob, and Carol each live in a different house on the same street: red, green, and blue.
The person who lives in the red house owns a cat.
Bob does not live in the green house.
Carol owns a dog.
The green house is to the left of the red house.
Alice does not own a cat.
Who lives in each house, and what pet do they own?
"""
thoughts = ""
answer = ""
for chunk in client.models.generate_content_stream(
model="gemini-3-flash-preview",
contents=prompt,
config=types.GenerateContentConfig(
thinking_config=types.ThinkingConfig(
include_thoughts=True
)
)
):
for part in chunk.candidates[0].content.parts:
if not part.text:
continue
elif part.thought:
if not thoughts:
print("Thoughts summary:")
print(part.text)
thoughts += part.text
else:
if not answer:
print("Answer:")
print(part.text)
answer += part.text
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
const prompt = `Alice, Bob, and Carol each live in a different house on the same
street: red, green, and blue. The person who lives in the red house owns a cat.
Bob does not live in the green house. Carol owns a dog. The green house is to
the left of the red house. Alice does not own a cat. Who lives in each house,
and what pet do they own?`;
let thoughts = "";
let answer = "";
async function main() {
const response = await ai.models.generateContentStream({
model: "gemini-3-flash-preview",
contents: prompt,
config: {
thinkingConfig: {
includeThoughts: true,
},
},
});
for await (const chunk of response) {
for (const part of chunk.candidates[0].content.parts) {
if (!part.text) {
continue;
} else if (part.thought) {
if (!thoughts) {
console.log("Thoughts summary:");
}
console.log(part.text);
thoughts = thoughts + part.text;
} else {
if (!answer) {
console.log("Answer:");
}
console.log(part.text);
answer = answer + part.text;
}
}
}
}
await main();
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/genai"
)
const prompt = `
Alice, Bob, and Carol each live in a different house on the same street: red, green, and blue.
The person who lives in the red house owns a cat.
Bob does not live in the green house.
Carol owns a dog.
The green house is to the left of the red house.
Alice does not own a cat.
Who lives in each house, and what pet do they own?
`
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
contents := genai.Text(prompt)
model := "gemini-3-flash-preview"
resp := client.Models.GenerateContentStream(ctx, model, contents, &genai.GenerateContentConfig{
ThinkingConfig: &genai.ThinkingConfig{
IncludeThoughts: true,
},
})
for chunk := range resp {
for _, part := range chunk.Candidates[0].Content.Parts {
if len(part.Text) == 0 {
continue
}
if part.Thought {
fmt.Printf("Thought: %s\n", part.Text)
} else {
fmt.Printf("Answer: %s\n", part.Text)
}
}
}
}
```


## Controlling thinking

Gemini models engage in dynamic thinking by default, automatically adjusting the amount of reasoning effort based on the complexity of the user's request. However, if you have specific latency constraints or require the model to engage in deeper reasoning than usual, you can optionally use parameters to control thinking behavior.

### Thinking levels (Gemini 3)

The `thinkingLevel`

parameter, recommended for Gemini 3 models and onwards,
lets you control reasoning behavior.

The following table details the `thinkingLevel`

settings for each model type:

| Thinking Level | Gemini 3.1 Pro | Gemini 3.1 Flash-Lite | Gemini 3 Flash | Description |
|---|---|---|---|---|
`minimal` |
Not supported | Supported (Default) | Supported | Matches the "no thinking" setting for most queries. The model may think very minimally for complex coding tasks. Minimizes latency for chat or high throughput applications. Note, `minimal` does not guarantee that thinking is off. |
`low` |
Supported | Supported | Supported | Minimizes latency and cost. Best for simple instruction following, chat, or high-throughput applications. |
`medium` |
Supported | Supported | Supported | Balanced thinking for most tasks. |
`high` |
Supported (Default, Dynamic) | Supported (Dynamic) | Supported (Default, Dynamic) | Maximizes reasoning depth. The model may take significantly longer to reach a first (non thinking) output token, but the output will be more carefully reasoned. |

The following example shows how to set the thinking level.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents="Provide a list of 3 famous physicists and their key contributions",
config=types.GenerateContentConfig(
thinking_config=types.ThinkingConfig(thinking_level="low")
),
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: "Provide a list of 3 famous physicists and their key contributions",
config: {
thinkingConfig: {
thinkingLevel: ThinkingLevel.LOW,
},
},
});
console.log(response.text);
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"google.golang.org/genai"
"os"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
thinkingLevelVal := "low"
contents := genai.Text("Provide a list of 3 famous physicists and their key contributions")
model := "gemini-3-flash-preview"
resp, _ := client.Models.GenerateContent(ctx, model, contents, &genai.GenerateContentConfig{
ThinkingConfig: &genai.ThinkingConfig{
ThinkingLevel: &thinkingLevelVal,
},
})
fmt.Println(resp.Text())
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"text": "Provide a list of 3 famous physicists and their key contributions"
}
]
}
],
"generationConfig": {
"thinkingConfig": {
"thinkingLevel": "low"
}
}
}'
```


You cannot disable thinking for Gemini 3.1 Pro. Gemini 3 Flash and Flash-Lite
also do not support full thinking-off, but the `minimal`

setting means the model likely will not think (though it still potentially can).
If you don't specify a thinking level, Gemini will use the Gemini 3 models'
default dynamic thinking level, `"high"`

.

Gemini 2.5 series models don't support `thinkingLevel`

; use `thinkingBudget`

instead.

### Thinking budgets

The `thinkingBudget`

parameter, introduced with the Gemini 2.5 series, guides
the model on the specific number of thinking tokens to use for reasoning.

The following are `thinkingBudget`

configuration details for each model type.
You can disable thinking by setting `thinkingBudget`

to 0.
Setting the `thinkingBudget`

to -1 turns
on **dynamic thinking**, meaning the model will adjust the budget based on the
complexity of the request.

| Model | Default setting (Thinking budget is not set) |
Range | Disable thinking | Turn on dynamic thinking |
|---|---|---|---|---|
2.5 Pro |
Dynamic thinking | `128` to `32768` |
N/A: Cannot disable thinking | `thinkingBudget = -1` (Default) |
2.5 Flash |
Dynamic thinking | `0` to `24576` |
`thinkingBudget = 0` |
`thinkingBudget = -1` (Default) |
2.5 Flash Preview |
Dynamic thinking | `0` to `24576` |
`thinkingBudget = 0` |
`thinkingBudget = -1` (Default) |
2.5 Flash Lite |
Model does not think | `512` to `24576` |
`thinkingBudget = 0` |
`thinkingBudget = -1` |
2.5 Flash Lite Preview |
Model does not think | `512` to `24576` |
`thinkingBudget = 0` |
`thinkingBudget = -1` |
Robotics-ER 1.5 Preview |
Dynamic thinking | `0` to `24576` |
`thinkingBudget = 0` |
`thinkingBudget = -1` (Default) |
2.5 Flash Live Native Audio Preview (09-2025) |
Dynamic thinking | `0` to `24576` |
`thinkingBudget = 0` |
`thinkingBudget = -1` (Default) |

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
response = client.models.generate_content(
model="gemini-2.5-flash",
contents="Provide a list of 3 famous physicists and their key contributions",
config=types.GenerateContentConfig(
thinking_config=types.ThinkingConfig(thinking_budget=1024)
# Turn off thinking:
# thinking_config=types.ThinkingConfig(thinking_budget=0)
# Turn on dynamic thinking:
# thinking_config=types.ThinkingConfig(thinking_budget=-1)
),
)
print(response.text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
async function main() {
const response = await ai.models.generateContent({
model: "gemini-2.5-flash",
contents: "Provide a list of 3 famous physicists and their key contributions",
config: {
thinkingConfig: {
thinkingBudget: 1024,
// Turn off thinking:
// thinkingBudget: 0
// Turn on dynamic thinking:
// thinkingBudget: -1
},
},
});
console.log(response.text);
}
main();
```


### Go

```
package main
import (
"context"
"fmt"
"google.golang.org/genai"
"os"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
thinkingBudgetVal := int32(1024)
contents := genai.Text("Provide a list of 3 famous physicists and their key contributions")
model := "gemini-2.5-flash"
resp, _ := client.Models.GenerateContent(ctx, model, contents, &genai.GenerateContentConfig{
ThinkingConfig: &genai.ThinkingConfig{
ThinkingBudget: &thinkingBudgetVal,
// Turn off thinking:
// ThinkingBudget: int32(0),
// Turn on dynamic thinking:
// ThinkingBudget: int32(-1),
},
})
fmt.Println(resp.Text())
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"parts": [
{
"text": "Provide a list of 3 famous physicists and their key contributions"
}
]
}
],
"generationConfig": {
"thinkingConfig": {
"thinkingBudget": 1024
}
}
}'
```


Depending on the prompt, the model might overflow or underflow the token budget.

## Thought signatures

The Gemini API is stateless, so the model treats every API request independently and doesn't have access to thought context from previous turns in multi-turn interactions.

In order to enable maintaining thought context across multi-turn interactions, Gemini returns thought signatures, which are encrypted representations of the model's internal thought process.

**Gemini 2.5 models**return thought signatures when thinking is enabled and the request includes[function calling](/gemini-api/docs/function-calling#thinking), specifically[function declarations](/gemini-api/docs/function-calling#step-2).**Gemini 3 models**may return thought signatures for all types of[parts](/api/caching#Part). We recommend you always pass all signatures back as received, but it's*required*for function calling signatures. Read the[Thought Signatures](/gemini-api/docs/thought-signatures)page to learn more.

Other usage limitations to consider with function calling include:

- Signatures are returned from the model within other parts in the response,
for example function calling or text parts.
[Return the entire response](https://ai.google.dev/gemini-api/docs/function-calling#step-4)with all parts back to the model in subsequent turns. - Don't concatenate parts with signatures together.
- Don't merge one part with a signature with another part without a signature.

## Pricing

When thinking is turned on, response pricing is the sum of output
tokens and thinking tokens. You can get the total number of generated thinking
tokens from the `thoughtsTokenCount`

field.

### Python

```
# ...
print("Thoughts tokens:",response.usage_metadata.thoughts_token_count)
print("Output tokens:",response.usage_metadata.candidates_token_count)
```


### JavaScript

```
// ...
console.log(`Thoughts tokens: ${response.usageMetadata.thoughtsTokenCount}`);
console.log(`Output tokens: ${response.usageMetadata.candidatesTokenCount}`);
```


### Go

```
// ...
usageMetadata, err := json.MarshalIndent(response.UsageMetadata, "", " ")
if err != nil {
log.Fatal(err)
}
fmt.Println("Thoughts tokens:", string(usageMetadata.thoughts_token_count))
fmt.Println("Output tokens:", string(usageMetadata.candidates_token_count))
```


Thinking models generate full thoughts to improve the quality of the final
response, and then output [summaries](#summaries) to provide insight into the
thought process. So, pricing is based on the full thought tokens the
model needs to generate to create a summary, despite only the summary being
output from the API.

You can learn more about tokens in the [Token counting](/gemini-api/docs/tokens)
guide.

## Best practices

This section includes some guidance for using thinking models efficiently.
As always, following our [prompting guidance and best practices](/gemini-api/docs/prompting-strategies) will get you the best results.

### Debugging and steering

**Review reasoning**: When you're not getting your expected response from the thinking models, it can help to carefully analyze Gemini's thought summaries. You can see how it broke down the task and arrived at its conclusion, and use that information to correct towards the right results.**Provide Guidance in Reasoning**: If you're hoping for a particularly lengthy output, you may want to provide guidance in your prompt to constrain the[amount of thinking](#set-budget)the model uses. This lets you reserve more of the token output for your response.

### Task complexity

**Easy Tasks (Thinking could be OFF):**For straightforward requests where complex reasoning isn't required, such as fact retrieval or classification, thinking is not required. Examples include:- "Where was DeepMind founded?"
- "Is this email asking for a meeting or just providing information?"

**Medium Tasks (Default/Some Thinking):**Many common requests benefit from a degree of step-by-step processing or deeper understanding. Gemini can flexibly use thinking capability for tasks like:- Analogize photosynthesis and growing up.
- Compare and contrast electric cars and hybrid cars.

**Hard Tasks (Maximum Thinking Capability):**For truly complex challenges, such as solving complex math problems or coding tasks, we recommend setting a high thinking budget. These types of tasks require the model to engage its full reasoning and planning capabilities, often involving many internal steps before providing an answer. Examples include:- Solve problem 1 in AIME 2025: Find the sum of all integer bases b > 9 for
which 17
bis a divisor of 97b. - Write Python code for a web application that visualizes real-time stock market data, including user authentication. Make it as efficient as possible.

- Solve problem 1 in AIME 2025: Find the sum of all integer bases b > 9 for
which 17

## Supported models, tools, and capabilities

Thinking features are supported on all 3 and 2.5 series models.
You can find all model capabilities on the
[model overview](/gemini-api/docs/models) page.

Thinking models work with all of Gemini's tools and capabilities. This allows the models to interact with external systems, execute code, or access real-time information, incorporating the results into their reasoning and final response.

You can try examples of using tools with thinking models in the
[Thinking cookbook](https://colab.sandbox.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Get_started_thinking.ipynb).

## What's next?

- Thinking coverage is available in our
[OpenAI Compatibility](/gemini-api/docs/openai#thinking)guide.

---

## Source: https://ai.google.dev/gemini-api/docs/thought-signatures

Thought signatures are encrypted representations of the model's internal thought
process and are used to preserve reasoning context across multi-step
interactions.
When using thinking models (such as the Gemini 3 and 2.5 series), the API may
return a `thoughtSignature`

field within the [content parts](/api/caching#Part)
of the response (e.g., `text`

or `functionCall`

parts).

As a general rule, if you receive a thought signature in a model response,
you should pass it back exactly as received when sending the conversation
history in the next turn.
**When using Gemini 3 models, you must pass back thought signatures during
function calling, otherwise you will get a validation error** (4xx status code).
This includes when using the `minimal`

[thinking level](/gemini-api/docs/thinking#thinking-levels) setting for Gemini 3
Flash.

## How it works

The graphic below visualizes the meaning of "turn" and "step" as they pertain to
[function calling](/gemini-api/docs/function-calling) in the Gemini API. A "turn"
is a single, complete exchange in a conversation between a user and a model. A
"step" is a finer-grained action or operation performed by the model, often as
part of a larger process to complete a turn.

*This document focuses on handling function calling for Gemini 3 models. Refer
to the model behavior section for discrepancies with 2.5.*

Gemini 3 returns thought signatures for all model responses (responses from the API) with a function call. Thought signatures show up in the following cases:

- When there are
[parallel function](/gemini-api/docs/function-calling#parallel_function_calling)calls, the first function call part returned by the model response will have a thought signature. - When there are sequential function calls (multi-step), each function call will have a signature and you must pass all signatures back.
- Model responses without a function call will return a thought signature inside the last part returned by the model.

The following table provides a visualization for multi-step function calls, combining the definitions of turns and steps with the concept of signatures introduced above:

|
|
|
|
|
1 |
1 |
`request1 = user_prompt` |
`FC1 + signature` |
`FR1` |
1 |
2 |
`request2 = request1 + (FC1 + signature) + FR1` |
`FC2 + signature` |
`FR2` |
1 |
3 |
`request3 = request2 + (FC2 + signature) + FR2` |
`text_output` |
None |

## Signatures in function calling parts

When Gemini generates a `functionCall`

, it relies on the `thought_signature`

to process the tool's output correctly in the next turn.

**Behavior**:**Single Function Call**: The`functionCall`

part will contain a`thought_signature`

.**Parallel Function Calls**: If the model generates parallel function calls in a response, the`thought_signature`

is attached**only to the first**`functionCall`

part. Subsequent`functionCall`

parts in the same response will**not**contain a signature.

**Requirement**: You**must**return this signature in the exact part where it was received when sending the conversation history back.**Validation**: Strict validation is enforced for all function calls within the current turn . (Only current turn is required; we don't validate on previous turns)- The API goes back in the history (newest to oldest) to find the most recent
**User**message that contains standard content (e.g.,`text`

) ( which would be the start of the current turn). This will not**be**a`functionResponse`

. **All**model`functionCall`

turns occurring after that specific use message are considered part of the turn.- The
**first**`functionCall`

part in**each step**of the current turn**must**include its`thought_signature`

. - If you omit a
`thought_signature`

for the first`functionCall`

part in any step of the current turn, the request will fail with a 400 error.

- The API goes back in the history (newest to oldest) to find the most recent
**If proper signatures are not returned, here is how you will error out**- Gemini 3 models: Failure to include
signatures will result in a 400 error. The verbiage will be of the form:
- Function call
`<Function Call>`

in the`<index of contents array>`

content block is missing a`thought_signature`

. For example,*Function call*`FC1`

in the`1.`

content block is missing a`thought_signature`

.

- Function call

- Gemini 3 models: Failure to include
signatures will result in a 400 error. The verbiage will be of the form:

### Sequential function calling example

This section shows an example of multiple function calls where the user asks a complex question requiring multiple tasks.

Let's walk through a multiple-turn function calling example where the user asks
a complex question requiring multiple tasks: ```
"Check flight status for AA100 and
book a taxi if delayed"
```

.

|
|
|
|
|
1 |
1 |
`request1="Check flight status for AA100 and book a taxi 2 hours before if delayed."` |
`FC1 ("check_flight") + signature` |
`FR1` |
1 |
2 |
`request2 ` |
`FC2("book_taxi") + signature` |
`FR2` |
1 |
3 |
`request3 ` |
`text_output` |
`None` |

The following code illustrates the sequence in the above table.

**Turn 1, Step 1 (User request)**

```
{
"contents": [
{
"role": "user",
"parts": [
{
"text": "Check flight status for AA100 and book a taxi 2 hours before if delayed."
}
]
}
],
"tools": [
{
"functionDeclarations": [
{
"name": "check_flight",
"description": "Gets the current status of a flight",
"parameters": {
"type": "object",
"properties": {
"flight": {
"type": "string",
"description": "The flight number to check"
}
},
"required": [
"flight"
]
}
},
{
"name": "book_taxi",
"description": "Book a taxi",
"parameters": {
"type": "object",
"properties": {
"time": {
"type": "string",
"description": "time to book the taxi"
}
},
"required": [
"time"
]
}
}
]
}
]
}
```


**Turn 1, Step 1 (Model response)**

```
{
"content": {
"role": "model",
"parts": [
{
"functionCall": {
"name": "check_flight",
"args": {
"flight": "AA100"
}
},
"thoughtSignature": "<Signature A>"
}
]
}
}
```


**Turn 1, Step 2 (User response - Sending tool outputs)** Since this user turn
only contains a `functionResponse`

(no fresh text), we are still in Turn 1. We
must preserve `<Signature_A>`

.

```
{
"role": "user",
"parts": [
{
"text": "Check flight status for AA100 and book a taxi 2 hours before if delayed."
}
]
},
{
"role": "model",
"parts": [
{
"functionCall": {
"name": "check_flight",
"args": {
"flight": "AA100"
}
},
"thoughtSignature": "<Signature A>" //Required and Validated
}
]
},
{
"role": "user",
"parts": [
{
"functionResponse": {
"name": "check_flight",
"response": {
"status": "delayed",
"departure_time": "12 PM"
}
}
}
]
}
```


**Turn 1, Step 2 (Model)** The model now decides to book a taxi based on the
previous tool output.

```
{
"content": {
"role": "model",
"parts": [
{
"functionCall": {
"name": "book_taxi",
"args": {
"time": "10 AM"
}
},
"thoughtSignature": "<Signature B>"
}
]
}
}
```


**Turn 1, Step 3 (User - Sending tool output)** To send the taxi booking
confirmation, we must include signatures for **ALL** function calls in this loop
(`<Signature A>`

+ `<Signature B>`

).

```
{
"role": "user",
"parts": [
{
"text": "Check flight status for AA100 and book a taxi 2 hours before if delayed."
}
]
},
{
"role": "model",
"parts": [
{
"functionCall": {
"name": "check_flight",
"args": {
"flight": "AA100"
}
},
"thoughtSignature": "<Signature A>" //Required and Validated
}
]
},
{
"role": "user",
"parts": [
{
"functionResponse": {
"name": "check_flight",
"response": {
"status": "delayed",
"departure_time": "12 PM"
}
}
}
]
},
{
"role": "model",
"parts": [
{
"functionCall": {
"name": "book_taxi",
"args": {
"time": "10 AM"
}
},
"thoughtSignature": "<Signature B>" //Required and Validated
}
]
},
{
"role": "user",
"parts": [
{
"functionResponse": {
"name": "book_taxi",
"response": {
"booking_status": "success"
}
}
}
]
}
}
```


### Parallel function calling example

Let's walk through a parallel function calling example where the users asks
`"Check weather in Paris and London"`

to see where the model does validation.

|
|
|
|
|
|---|---|---|---|---|
1 |
1 |
request1="Check the weather in Paris and London" |
FC1 ("Paris") + signature FC2 ("London") |
FR1 |
1 |
2 |
request 2 |
text_output (no FCs) |
None |

The following code illustrates the sequence in the above table.

**Turn 1, Step 1 (User request)**

```
{
"contents": [
{
"role": "user",
"parts": [
{
"text": "Check the weather in Paris and London."
}
]
}
],
"tools": [
{
"functionDeclarations": [
{
"name": "get_current_temperature",
"description": "Gets the current temperature for a given location.",
"parameters": {
"type": "object",
"properties": {
"location": {
"type": "string",
"description": "The city name, e.g. San Francisco"
}
},
"required": [
"location"
]
}
}
]
}
]
}
```


**Turn 1, Step 1 (Model response)**

```
{
"content": {
"parts": [
{
"functionCall": {
"name": "get_current_temperature",
"args": {
"location": "Paris"
}
},
"thoughtSignature": "<Signature_A>"// INCLUDED on First FC
},
{
"functionCall": {
"name": "get_current_temperature",
"args": {
"location": "London"
}// NO signature on subsequent parallel FCs
}
}
]
}
}
```


**Turn 1, Step 2 (User response - Sending tool outputs)** We must preserve
`<Signature_A>`

on the first part exactly as received.

```
[
{
"role": "user",
"parts": [
{
"text": "Check the weather in Paris and London."
}
]
},
{
"role": "model",
"parts": [
{
"functionCall": {
"name": "get_current_temperature",
"args": {
"city": "Paris"
}
},
"thought_signature": "<Signature_A>" // MUST BE INCLUDED
},
{
"functionCall": {
"name": "get_current_temperature",
"args": {
"city": "London"
}
}
} // NO SIGNATURE FIELD
]
},
{
"role": "user",
"parts": [
{
"functionResponse": {
"name": "get_current_temperature",
"response": {
"temp": "15C"
}
}
},
{
"functionResponse": {
"name": "get_current_temperature",
"response": {
"temp": "12C"
}
}
}
]
}
]
```


## Signatures in non `functionCall`

parts

Gemini may also return `thought_signatures`

in the final part of the response
in non-function-call parts.

**Behavior**: The final content part (`text, inlineData…`

) returned by the model may contain a`thought_signature`

.**Recommendation**: Returning these signatures is**recommended**to ensure the model maintains high-quality reasoning, especially for complex instruction following or simulated agentic workflows.**Validation**: The API does**not**strictly enforce validation. You won't receive a blocking error if you omit them, though performance may degrade.

### Text/In-context reasoning (No validation)

**Turn 1, Step 1 (Model response)**

```
{
"role": "model",
"parts": [
{
"text": "I need to calculate the risk. Let me think step-by-step...",
"thought_signature": "<Signature_C>" // OPTIONAL (Recommended)
}
]
}
```


**Turn 2, Step 1 (User)**

```
[
{ "role": "user", "parts": [{ "text": "What is the risk?" }] },
{
"role": "model",
"parts": [
{
"text": "I need to calculate the risk. Let me think step-by-step...",
// If you omit <Signature_C> here, no error will occur.
}
]
},
{ "role": "user", "parts": [{ "text": "Summarize it." }] }
]
```


## Signatures for OpenAI compatibility

The following examples shows how to handle thought signatures for a chat
completion API using [OpenAI compatibility](/gemini-api/docs/openai).

### Sequential function calling example

This is an example of multiple function calling where the user asks a complex question requiring multiple tasks.

Let's walk through a multiple-turn function calling example where the user asks
`Check flight status for AA100 and book a taxi if delayed`

and you can see what
happens when the user asks a complex question requiring multiple tasks.

|
|
|
|
|
1 |
1 |
`request1="Check the weather in Paris and London"` |
`FC1 ("Paris") + signature` |
`FR1` |
1 |
2 |
`request 2 ` |
`text_output` |
`None` |

The following code walks through the given sequence.

**Turn 1, Step 1 (User Request)**

```
{
"model": "google/gemini-3.1-pro-preview",
"messages": [
{
"role": "user",
"content": "Check flight status for AA100 and book a taxi 2 hours before if delayed."
}
],
"tools": [
{
"type": "function",
"function": {
"name": "check_flight",
"description": "Gets the current status of a flight",
"parameters": {
"type": "object",
"properties": {
"flight": {
"type": "string",
"description": "The flight number to check."
}
},
"required": [
"flight"
]
}
}
},
{
"type": "function",
"function": {
"name": "book_taxi",
"description": "Book a taxi",
"parameters": {
"type": "object",
"properties": {
"time": {
"type": "string",
"description": "time to book the taxi"
}
},
"required": [
"time"
]
}
}
}
]
}
```


**Turn 1, Step 1 (Model Response)**

```
{
"role": "model",
"tool_calls": [
{
"extra_content": {
"google": {
"thought_signature": "<Signature A>"
}
},
"function": {
"arguments": "{\"flight\":\"AA100\"}",
"name": "check_flight"
},
"id": "function-call-1",
"type": "function"
}
]
}
```


**Turn 1, Step 2 (User Response - Sending Tool Outputs)**

Since this user turn only contains a `functionResponse`

(no fresh text), we are
still in Turn 1 and must preserve `<Signature_A>`

.

```
"messages": [
{
"role": "user",
"content": "Check flight status for AA100 and book a taxi 2 hours before if delayed."
},
{
"role": "model",
"tool_calls": [
{
"extra_content": {
"google": {
"thought_signature": "<Signature A>" //Required and Validated
}
},
"function": {
"arguments": "{\"flight\":\"AA100\"}",
"name": "check_flight"
},
"id": "function-call-1",
"type": "function"
}
]
},
{
"role": "tool",
"name": "check_flight",
"tool_call_id": "function-call-1",
"content": "{\"status\":\"delayed\",\"departure_time\":\"12 PM\"}"
}
]
```


**Turn 1, Step 2 (Model)**

The model now decides to book a taxi based on the previous tool output.

```
{
"role": "model",
"tool_calls": [
{
"extra_content": {
"google": {
"thought_signature": "<Signature B>"
}
},
"function": {
"arguments": "{\"time\":\"10 AM\"}",
"name": "book_taxi"
},
"id": "function-call-2",
"type": "function"
}
]
}
```


**Turn 1, Step 3 (User - Sending Tool Output)**

To send the taxi booking confirmation, we must include signatures for ALL
function calls in this loop (`<Signature A>`

+ `<Signature B>`

).

```
"messages": [
{
"role": "user",
"content": "Check flight status for AA100 and book a taxi 2 hours before if delayed."
},
{
"role": "model",
"tool_calls": [
{
"extra_content": {
"google": {
"thought_signature": "<Signature A>" //Required and Validated
}
},
"function": {
"arguments": "{\"flight\":\"AA100\"}",
"name": "check_flight"
},
"id": "function-call-1d6a1a61-6f4f-4029-80ce-61586bd86da5",
"type": "function"
}
]
},
{
"role": "tool",
"name": "check_flight",
"tool_call_id": "function-call-1d6a1a61-6f4f-4029-80ce-61586bd86da5",
"content": "{\"status\":\"delayed\",\"departure_time\":\"12 PM\"}"
},
{
"role": "model",
"tool_calls": [
{
"extra_content": {
"google": {
"thought_signature": "<Signature B>" //Required and Validated
}
},
"function": {
"arguments": "{\"time\":\"10 AM\"}",
"name": "book_taxi"
},
"id": "function-call-65b325ba-9b40-4003-9535-8c7137b35634",
"type": "function"
}
]
},
{
"role": "tool",
"name": "book_taxi",
"tool_call_id": "function-call-65b325ba-9b40-4003-9535-8c7137b35634",
"content": "{\"booking_status\":\"success\"}"
}
]
```


### Parallel function calling example

Let's walk through a parallel function calling example where the users asks
`"Check weather in Paris and London"`

and you can see where the model does
validation.

|
|
|
|
|
1 |
1 |
`request1="Check the weather in Paris and London"` |
`FC1 ("Paris") + signature` |
`FR1` |
1 |
2 |
`request 2 ` |
`text_output` |
`None` |

Here's the code to walk through the given sequence.

**Turn 1, Step 1 (User Request)**

```
{
"contents": [
{
"role": "user",
"parts": [
{
"text": "Check the weather in Paris and London."
}
]
}
],
"tools": [
{
"functionDeclarations": [
{
"name": "get_current_temperature",
"description": "Gets the current temperature for a given location.",
"parameters": {
"type": "object",
"properties": {
"location": {
"type": "string",
"description": "The city name, e.g. San Francisco"
}
},
"required": [
"location"
]
}
}
]
}
]
}
```


**Turn 1, Step 1 (Model Response)**

```
{
"role": "assistant",
"tool_calls": [
{
"extra_content": {
"google": {
"thought_signature": "<Signature A>" //Signature returned
}
},
"function": {
"arguments": "{\"location\":\"Paris\"}",
"name": "get_current_temperature"
},
"id": "function-call-f3b9ecb3-d55f-4076-98c8-b13e9d1c0e01",
"type": "function"
},
{
"function": {
"arguments": "{\"location\":\"London\"}",
"name": "get_current_temperature"
},
"id": "function-call-335673ad-913e-42d1-bbf5-387c8ab80f44",
"type": "function" // No signature on Parallel FC
}
]
}
```


**Turn 1, Step 2 (User Response - Sending Tool Outputs)**

You must preserve `<Signature_A>`

on the first part exactly as received.

```
"messages": [
{
"role": "user",
"content": "Check the weather in Paris and London."
},
{
"role": "assistant",
"tool_calls": [
{
"extra_content": {
"google": {
"thought_signature": "<Signature A>" //Required
}
},
"function": {
"arguments": "{\"location\":\"Paris\"}",
"name": "get_current_temperature"
},
"id": "function-call-f3b9ecb3-d55f-4076-98c8-b13e9d1c0e01",
"type": "function"
},
{
"function": { //No Signature
"arguments": "{\"location\":\"London\"}",
"name": "get_current_temperature"
},
"id": "function-call-335673ad-913e-42d1-bbf5-387c8ab80f44",
"type": "function"
}
]
},
{
"role":"tool",
"name": "get_current_temperature",
"tool_call_id": "function-call-f3b9ecb3-d55f-4076-98c8-b13e9d1c0e01",
"content": "{\"temp\":\"15C\"}"
},
{
"role":"tool",
"name": "get_current_temperature",
"tool_call_id": "function-call-335673ad-913e-42d1-bbf5-387c8ab80f44",
"content": "{\"temp\":\"12C\"}"
}
]
```


## FAQs

**How do I transfer history from a different model to Gemini 3 with a function call part in the current turn and step? I need to provide function call parts that were not generated by the API and therefore don't have an associated thought signature?**While injecting custom function call blocks into the request is strongly discouraged, in cases where it can't be avoided, e.g. providing information to the model on function calls and responses that were executed deterministically by the client, or transferring a trace from a different model that does not include thought signatures, you can set the following dummy signatures of either

`"context_engineering_is_the_way_to_go"`

or`"skip_thought_signature_validator"`

in the thought signature field to skip validation.**I am sending back interleaved parallel function calls and responses and the API is returning a 400. Why?**When the API returns parallel function calls "FC1 + signature, FC2", the user response expected is "FC1+ signature, FC2, FR1, FR2". If you have them interleaved as "FC1 + signature, FR1, FC2, FR2" the API will return a 400 error.

**When streaming and the model is not returning a function call I can't find the thought signature**During a model response not containing a FC with a streaming request, the model may return the thought signature in a part with an empty text content part. It is advisable to parse the entire request until the

`finish_reason`

is returned by the model.

## Thought signatures for different models

[Gemini 3 models](/gemini-api/docs/models#gemini-3) and Gemini 2.5 models
behave differently with thought signatures in function calls:

- If there are function calls in a response,
- Gemini 3 will always have the signature on the first function call part.
It is
**mandatory**to return that part. - Gemini 2.5 will have the signature in the first part (regardless of
type). It is
**optional**to return that part.

- Gemini 3 will always have the signature on the first function call part.
It is
- If there are no function calls in a response,
- Gemini 3 will have the signature on the last part if the model generates a thought.
- Gemini 2.5 won't have a signature in any part.


Refer to the [Thinking](/gemini-api/docs/thinking#signatures) page for more
comparison details.
For Gemini 3 Image models see the thinking process section of the
[Image generation](/gemini-api/docs/image-generation#thinking-process) guide.

---

## Source: https://ai.google.dev/gemini-api/docs/structured-output

You can configure Gemini models to generate responses that adhere to a provided JSON Schema. This ensures predictable, type-safe results and simplifies extracting structured data from unstructured text.

Using structured outputs is ideal for:

**Data extraction:**Pull specific information like names and dates from text.**Structured classification:**Classify text into predefined categories.**Agentic workflows:**Generate structured inputs for tools or APIs.

In addition to supporting JSON Schema in the REST API, the Google GenAI SDKs
make it easy to define schemas using
[Pydantic](https://docs.pydantic.dev/latest/) (Python) and
[Zod](https://zod.dev/) (JavaScript).

This example demonstrates how to extract structured data from text using basic
JSON Schema types like `object`

, `array`

, `string`

, and `integer`

.

### Python

```
from google import genai
from pydantic import BaseModel, Field
from typing import List, Optional
class Ingredient(BaseModel):
name: str = Field(description="Name of the ingredient.")
quantity: str = Field(description="Quantity of the ingredient, including units.")
class Recipe(BaseModel):
recipe_name: str = Field(description="The name of the recipe.")
prep_time_minutes: Optional[int] = Field(description="Optional time in minutes to prepare the recipe.")
ingredients: List[Ingredient]
instructions: List[str]
client = genai.Client()
prompt = """
Please extract the recipe from the following text.
The user wants to make delicious chocolate chip cookies.
They need 2 and 1/4 cups of all-purpose flour, 1 teaspoon of baking soda,
1 teaspoon of salt, 1 cup of unsalted butter (softened), 3/4 cup of granulated sugar,
3/4 cup of packed brown sugar, 1 teaspoon of vanilla extract, and 2 large eggs.
For the best part, they'll need 2 cups of semisweet chocolate chips.
First, preheat the oven to 375°F (190°C). Then, in a small bowl, whisk together the flour,
baking soda, and salt. In a large bowl, cream together the butter, granulated sugar, and brown sugar
until light and fluffy. Beat in the vanilla and eggs, one at a time. Gradually beat in the dry
ingredients until just combined. Finally, stir in the chocolate chips. Drop by rounded tablespoons
onto ungreased baking sheets and bake for 9 to 11 minutes.
"""
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=prompt,
config={
"response_mime_type": "application/json",
"response_json_schema": Recipe.model_json_schema(),
},
)
recipe = Recipe.model_validate_json(response.text)
print(recipe)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
const ingredientSchema = z.object({
name: z.string().describe("Name of the ingredient."),
quantity: z.string().describe("Quantity of the ingredient, including units."),
});
const recipeSchema = z.object({
recipe_name: z.string().describe("The name of the recipe."),
prep_time_minutes: z.number().optional().describe("Optional time in minutes to prepare the recipe."),
ingredients: z.array(ingredientSchema),
instructions: z.array(z.string()),
});
const ai = new GoogleGenAI({});
const prompt = `
Please extract the recipe from the following text.
The user wants to make delicious chocolate chip cookies.
They need 2 and 1/4 cups of all-purpose flour, 1 teaspoon of baking soda,
1 teaspoon of salt, 1 cup of unsalted butter (softened), 3/4 cup of granulated sugar,
3/4 cup of packed brown sugar, 1 teaspoon of vanilla extract, and 2 large eggs.
For the best part, they'll need 2 cups of semisweet chocolate chips.
First, preheat the oven to 375°F (190°C). Then, in a small bowl, whisk together the flour,
baking soda, and salt. In a large bowl, cream together the butter, granulated sugar, and brown sugar
until light and fluffy. Beat in the vanilla and eggs, one at a time. Gradually beat in the dry
ingredients until just combined. Finally, stir in the chocolate chips. Drop by rounded tablespoons
onto ungreased baking sheets and bake for 9 to 11 minutes.
`;
const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: prompt,
config: {
responseMimeType: "application/json",
responseJsonSchema: zodToJsonSchema(recipeSchema),
},
});
const recipe = recipeSchema.parse(JSON.parse(response.text));
console.log(recipe);
```


### Go

```
package main
import (
"context"
"fmt"
"log"
"google.golang.org/genai"
)
func main() {
ctx := context.Background()
client, err := genai.NewClient(ctx, nil)
if err != nil {
log.Fatal(err)
}
prompt := `
Please extract the recipe from the following text.
The user wants to make delicious chocolate chip cookies.
They need 2 and 1/4 cups of all-purpose flour, 1 teaspoon of baking soda,
1 teaspoon of salt, 1 cup of unsalted butter (softened), 3/4 cup of granulated sugar,
3/4 cup of packed brown sugar, 1 teaspoon of vanilla extract, and 2 large eggs.
For the best part, they'll need 2 cups of semisweet chocolate chips.
First, preheat the oven to 375°F (190°C). Then, in a small bowl, whisk together the flour,
baking soda, and salt. In a large bowl, cream together the butter, granulated sugar, and brown sugar
until light and fluffy. Beat in the vanilla and eggs, one at a time. Gradually beat in the dry
ingredients until just combined. Finally, stir in the chocolate chips. Drop by rounded tablespoons
onto ungreased baking sheets and bake for 9 to 11 minutes.
`
config := &genai.GenerateContentConfig{
ResponseMIMEType: "application/json",
ResponseJsonSchema: map[string]any{
"type": "object",
"properties": map[string]any{
"recipe_name": map[string]any{
"type": "string",
"description": "The name of the recipe.",
},
"prep_time_minutes": map[string]any{
"type": "integer",
"description": "Optional time in minutes to prepare the recipe.",
},
"ingredients": map[string]any{
"type": "array",
"items": map[string]any{
"type": "object",
"properties": map[string]any{
"name": map[string]any{
"type": "string",
"description": "Name of the ingredient.",
},
"quantity": map[string]any{
"type": "string",
"description": "Quantity of the ingredient, including units.",
},
},
"required": []string{"name", "quantity"},
},
},
"instructions": map[string]any{
"type": "array",
"items": map[string]any{"type": "string"},
},
},
"required": []string{"recipe_name", "ingredients", "instructions"},
},
}
result, err := client.Models.GenerateContent(
ctx,
"gemini-3-flash-preview",
genai.Text(prompt),
config,
)
if err != nil {
log.Fatal(err)
}
fmt.Println(result.Text())
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts":[
{ "text": "Please extract the recipe from the following text.\nThe user wants to make delicious chocolate chip cookies.\nThey need 2 and 1/4 cups of all-purpose flour, 1 teaspoon of baking soda,\n1 teaspoon of salt, 1 cup of unsalted butter (softened), 3/4 cup of granulated sugar,\n3/4 cup of packed brown sugar, 1 teaspoon of vanilla extract, and 2 large eggs.\nFor the best part, they will need 2 cups of semisweet chocolate chips.\nFirst, preheat the oven to 375°F (190°C). Then, in a small bowl, whisk together the flour,\nbaking soda, and salt. In a large bowl, cream together the butter, granulated sugar, and brown sugar\nuntil light and fluffy. Beat in the vanilla and eggs, one at a time. Gradually beat in the dry\ningredients until just combined. Finally, stir in the chocolate chips. Drop by rounded tablespoons\nonto ungreased baking sheets and bake for 9 to 11 minutes." }
]
}],
"generationConfig": {
"responseMimeType": "application/json",
"responseJsonSchema": {
"type": "object",
"properties": {
"recipe_name": {
"type": "string",
"description": "The name of the recipe."
},
"prep_time_minutes": {
"type": "integer",
"description": "Optional time in minutes to prepare the recipe."
},
"ingredients": {
"type": "array",
"items": {
"type": "object",
"properties": {
"name": { "type": "string", "description": "Name of the ingredient."},
"quantity": { "type": "string", "description": "Quantity of the ingredient, including units."}
},
"required": ["name", "quantity"]
}
},
"instructions": {
"type": "array",
"items": { "type": "string" }
}
},
"required": ["recipe_name", "ingredients", "instructions"]
}
}
}'
```


**Example Response:**

```
{
"recipe_name": "Delicious Chocolate Chip Cookies",
"ingredients": [
{
"name": "all-purpose flour",
"quantity": "2 and 1/4 cups"
},
{
"name": "baking soda",
"quantity": "1 teaspoon"
},
{
"name": "salt",
"quantity": "1 teaspoon"
},
{
"name": "unsalted butter (softened)",
"quantity": "1 cup"
},
{
"name": "granulated sugar",
"quantity": "3/4 cup"
},
{
"name": "packed brown sugar",
"quantity": "3/4 cup"
},
{
"name": "vanilla extract",
"quantity": "1 teaspoon"
},
{
"name": "large eggs",
"quantity": "2"
},
{
"name": "semisweet chocolate chips",
"quantity": "2 cups"
}
],
"instructions": [
"Preheat the oven to 375°F (190°C).",
"In a small bowl, whisk together the flour, baking soda, and salt.",
"In a large bowl, cream together the butter, granulated sugar, and brown sugar until light and fluffy.",
"Beat in the vanilla and eggs, one at a time.",
"Gradually beat in the dry ingredients until just combined.",
"Stir in the chocolate chips.",
"Drop by rounded tablespoons onto ungreased baking sheets and bake for 9 to 11 minutes."
]
}
```


## Streaming

You can stream structured outputs, which allows you to start processing the response as it's being generated, without having to wait for the entire output to be complete. This can improve the perceived performance of your application.

The streamed chunks will be valid partial JSON strings, which can be concatenated to form the final, complete JSON object.

### Python

```
from google import genai
from pydantic import BaseModel, Field
from typing import Literal
class Feedback(BaseModel):
sentiment: Literal["positive", "neutral", "negative"]
summary: str
client = genai.Client()
prompt = "The new UI is incredibly intuitive and visually appealing. Great job. Add a very long summary to test streaming!"
response_stream = client.models.generate_content_stream(
model="gemini-3-flash-preview",
contents=prompt,
config={
"response_mime_type": "application/json",
"response_json_schema": Feedback.model_json_schema(),
},
)
for chunk in response_stream:
print(chunk.candidates[0].content.parts[0].text)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
const ai = new GoogleGenAI({});
const prompt = "The new UI is incredibly intuitive and visually appealing. Great job! Add a very long summary to test streaming!";
const feedbackSchema = z.object({
sentiment: z.enum(["positive", "neutral", "negative"]),
summary: z.string(),
});
const stream = await ai.models.generateContentStream({
model: "gemini-3-flash-preview",
contents: prompt,
config: {
responseMimeType: "application/json",
responseJsonSchema: zodToJsonSchema(feedbackSchema),
},
});
for await (const chunk of stream) {
console.log(chunk.candidates[0].content.parts[0].text)
}
```


## Structured outputs with tools

Gemini 3 lets you combine Structured Outputs with built-in tools, including
[Grounding with Google Search](/gemini-api/docs/google-search),
[URL Context](/gemini-api/docs/url-context),
[Code Execution](/gemini-api/docs/code-execution),
[File Search](/gemini-api/docs/file-search#structured-output), and
[Function Calling](/gemini-api/docs/function-calling).

### Python

```
from google import genai
from pydantic import BaseModel, Field
from typing import List
class MatchResult(BaseModel):
winner: str = Field(description="The name of the winner.")
final_match_score: str = Field(description="The final match score.")
scorers: List[str] = Field(description="The name of the scorer.")
client = genai.Client()
response = client.models.generate_content(
model="gemini-3.1-pro-preview",
contents="Search for all details for the latest Euro.",
config={
"tools": [
{"google_search": {}},
{"url_context": {}}
],
"response_mime_type": "application/json",
"response_json_schema": MatchResult.model_json_schema(),
},
)
result = MatchResult.model_validate_json(response.text)
print(result)
```


### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
const ai = new GoogleGenAI({});
const matchSchema = z.object({
winner: z.string().describe("The name of the winner."),
final_match_score: z.string().describe("The final score."),
scorers: z.array(z.string()).describe("The name of the scorer.")
});
async function run() {
const response = await ai.models.generateContent({
model: "gemini-3.1-pro-preview",
contents: "Search for all details for the latest Euro.",
config: {
tools: [
{ googleSearch: {} },
{ urlContext: {} }
],
responseMimeType: "application/json",
responseJsonSchema: zodToJsonSchema(matchSchema),
},
});
const match = matchSchema.parse(JSON.parse(response.text));
console.log(match);
}
run();
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
"parts": [{"text": "Search for all details for the latest Euro."}]
}],
"tools": [
{"googleSearch": {}},
{"urlContext": {}}
],
"generationConfig": {
"responseMimeType": "application/json",
"responseJsonSchema": {
"type": "object",
"properties": {
"winner": {"type": "string", "description": "The name of the winner."},
"final_match_score": {"type": "string", "description": "The final score."},
"scorers": {
"type": "array",
"items": {"type": "string"},
"description": "The name of the scorer."
}
},
"required": ["winner", "final_match_score", "scorers"]
}
}
}'
```


## JSON schema support

To generate a JSON object, set the `response_mime_type`

in the generation configuration to `application/json`

and provide a `response_json_schema`

. The schema must be a valid [JSON Schema](https://json-schema.org/) that describes the desired output format.

The model will then generate a response that is a syntactically valid JSON string matching the provided schema. When using structured outputs, the model will produce outputs in the same order as the keys in the schema.

Gemini's structured output mode supports a subset of the [JSON Schema](https://json-schema.org) specification.

The following values of `type`

are supported:

: For text.`string`

: For floating-point numbers.`number`

: For whole numbers.`integer`

: For true/false values.`boolean`

: For structured data with key-value pairs.`object`

: For lists of items.`array`

: To allow a property to be null, include`null`

`"null"`

in the type array (e.g.,`{"type": ["string", "null"]}`

).

These descriptive properties help guide the model:

: A short description of a property.`title`

: A longer and more detailed description of a property.`description`


### Type-specific properties

**For object values:**

: An object where each key is a property name and each value is a schema for that property.`properties`

: An array of strings, listing which properties are mandatory.`required`

: Controls whether properties not listed in`additionalProperties`

`properties`

are allowed. Can be a boolean or a schema.

**For string values:**

: Lists a specific set of possible strings for classification tasks.`enum`

: Specifies a syntax for the string, such as`format`

`date-time`

,`date`

,`time`

.

**For number and integer values:**


: Lists a specific set of possible numeric values.`enum`

: The minimum inclusive value.`minimum`

: The maximum inclusive value.`maximum`


**For array values:**

: Defines the schema for all items in the array.`items`

: Defines a list of schemas for the first N items, allowing for tuple-like structures.`prefixItems`

: The minimum number of items in the array.`minItems`

: The maximum number of items in the array.`maxItems`


## Model support

The following models support structured output:

| Model | Structured Outputs |
|---|---|
| Gemini 3.1 Pro Preview | ✔️ |
| Gemini 3 Flash Preview | ✔️ |
| Gemini 2.5 Pro | ✔️ |
| Gemini 2.5 Flash | ✔️ |
| Gemini 2.5 Flash-Lite | ✔️ |
| Gemini 2.0 Flash | ✔️* |
| Gemini 2.0 Flash-Lite | ✔️* |

** Note that Gemini 2.0 requires an explicit propertyOrdering list within the JSON input to define the preferred structure. You can find an example in this cookbook.*

## Structured outputs vs. function calling

Both structured outputs and function calling use JSON schemas, but they serve different purposes:

| Feature | Primary Use Case |
|---|---|
Structured Outputs |
Formatting the final response to the user. Use this when you want the model's answer to be in a specific format (e.g., extracting data from a document to save to a database). |
Function Calling |
Taking action during the conversation. Use this when the model needs to ask you to perform a task (e.g., "get current weather") before it can provide a final answer. |

## Best practices

**Clear descriptions:**Use the`description`

field in your schema to provide clear instructions to the model about what each property represents. This is crucial for guiding the model's output.**Strong typing:**Use specific types (`integer`

,`string`

,`enum`

) whenever possible. If a parameter has a limited set of valid values, use an`enum`

.**Prompt engineering:**Clearly state in your prompt what you want the model to do. For example, "Extract the following information from the text..." or "Classify this feedback according to the provided schema...".**Validation:**While structured output guarantees syntactically correct JSON, it does not guarantee the values are semantically correct. Always validate the final output in your application code before using it.**Error handling:**Implement robust error handling in your application to gracefully manage cases where the model's output, while schema-compliant, may not meet your business logic requirements.

## Limitations

**Schema subset:**Not all features of the JSON Schema specification are supported. The model ignores unsupported properties.**Schema complexity:**The API may reject very large or deeply nested schemas. If you encounter errors, try simplifying your schema by shortening property names, reducing nesting, or limiting the number of constraints.

---

## Source: https://ai.google.dev/gemini-api/docs/function-calling

Function calling lets you connect models to external tools and APIs. Instead of generating text responses, the model determines when to call specific functions and provides the necessary parameters to execute real-world actions. This allows the model to act as a bridge between natural language and real-world actions and data. Function calling has 3 primary use cases:

**Augment Knowledge:**Access information from external sources like databases, APIs, and knowledge bases.**Extend Capabilities:**Use external tools to perform computations and extend the limitations of the model, such as using a calculator or creating charts.**Take Actions:**Interact with external systems using APIs, such as scheduling appointments, creating invoices, sending emails, or controlling smart home devices.

### Python

```
from google import genai
from google.genai import types
# Define the function declaration for the model
schedule_meeting_function = {
"name": "schedule_meeting",
"description": "Schedules a meeting with specified attendees at a given time and date.",
"parameters": {
"type": "object",
"properties": {
"attendees": {
"type": "array",
"items": {"type": "string"},
"description": "List of people attending the meeting.",
},
"date": {
"type": "string",
"description": "Date of the meeting (e.g., '2024-07-29')",
},
"time": {
"type": "string",
"description": "Time of the meeting (e.g., '15:00')",
},
"topic": {
"type": "string",
"description": "The subject or topic of the meeting.",
},
},
"required": ["attendees", "date", "time", "topic"],
},
}
# Configure the client and tools
client = genai.Client()
tools = types.Tool(function_declarations=[schedule_meeting_function])
config = types.GenerateContentConfig(tools=[tools])
# Send request with function declarations
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents="Schedule a meeting with Bob and Alice for 03/14/2025 at 10:00 AM about the Q3 planning.",
config=config,
)
# Check for a function call
if response.candidates[0].content.parts[0].function_call:
function_call = response.candidates[0].content.parts[0].function_call
print(f"Function to call: {function_call.name}")
print(f"ID: {function_call.id}")
print(f"Arguments: {function_call.args}")
# In a real app, you would call your function here:
# result = schedule_meeting(**function_call.args)
else:
print("No function call found in the response.")
print(response.text)
```


### JavaScript

```
import { GoogleGenAI, Type } from '@google/genai';
// Configure the client
const ai = new GoogleGenAI({});
// Define the function declaration for the model
const scheduleMeetingFunctionDeclaration = {
name: 'schedule_meeting',
description: 'Schedules a meeting with specified attendees at a given time and date.',
parameters: {
type: Type.OBJECT,
properties: {
attendees: {
type: Type.ARRAY,
items: { type: Type.STRING },
description: 'List of people attending the meeting.',
},
date: {
type: Type.STRING,
description: 'Date of the meeting (e.g., "2024-07-29")',
},
time: {
type: Type.STRING,
description: 'Time of the meeting (e.g., "15:00")',
},
topic: {
type: Type.STRING,
description: 'The subject or topic of the meeting.',
},
},
required: ['attendees', 'date', 'time', 'topic'],
},
};
// Send request with function declarations
const response = await ai.models.generateContent({
model: 'gemini-3-flash-preview',
contents: 'Schedule a meeting with Bob and Alice for 03/27/2025 at 10:00 AM about the Q3 planning.',
config: {
tools: [{
functionDeclarations: [scheduleMeetingFunctionDeclaration]
}],
},
});
// Check for function calls in the response
if (response.functionCalls && response.functionCalls.length > 0) {
const functionCall = response.functionCalls[0]; // Assuming one function call
console.log(`Function to call: ${functionCall.name}`);
console.log(`ID: ${functionCall.id}`);
console.log(`Arguments: ${JSON.stringify(functionCall.args)}`);
// In a real app, you would call your actual function here:
// const result = await scheduleMeeting(functionCall.args);
} else {
console.log("No function call found in the response.");
console.log(response.text);
}
```


### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
{
"role": "user",
"parts": [
{
"text": "Schedule a meeting with Bob and Alice for 03/27/2025 at 10:00 AM about the Q3 planning."
}
]
}
],
"tools": [
{
"functionDeclarations": [
{
"name": "schedule_meeting",
"description": "Schedules a meeting with specified attendees at a given time and date.",
"parameters": {
"type": "object",
"properties": {
"attendees": {
"type": "array",
"items": {"type": "string"},
"description": "List of people attending the meeting."
},
"date": {
"type": "string",
"description": "Date of the meeting (e.g., '2024-07-29')"
},
"time": {
"type": "string",
"description": "Time of the meeting (e.g., '15:00')"
},
"topic": {
"type": "string",
"description": "The subject or topic of the meeting."
}
},
"required": ["attendees", "date", "time", "topic"]
}
}
]
}
]
}'
```


## How function calling works

Function calling involves a structured interaction between your application, the model, and external functions. Here's a breakdown of the process:

**Define function declaration:**Define the function declaration in your application code. Function Declarations describe the function's name, parameters, and purpose to the model.**Call API with function declarations:**Send user prompt along with the function declaration(s) to the model. It analyzes the request and determines if a function call would be helpful. If so, it responds with a structured JSON object containing the function name, arguments, and a unique`id`

(this`id`

is now always returned by the API for Gemini 3 models*).**Execute function code (your responsibility):**The Model*doesn't*execute the function itself. It's your application's responsibility to process the response and check for a function call. If**Yes**: Extract the name, args, and`id`

of the function and execute the corresponding function in your application.**No:**The model has provided a direct text response to the prompt (this flow is less emphasized in the example but is a possible outcome).

**Create user friendly response:**If a function was executed, capture the result and send it back to the model, ensuring you include the matching`id`

, in a subsequent turn of the conversation. It will use the result to generate a final, user-friendly response that incorporates the information from the function call.

This process can be repeated over multiple turns, allowing for complex
interactions and workflows. The model also supports calling multiple functions
in a single turn ([parallel function calling](#parallel_function_calling)), in
sequence ([compositional function calling](#compositional_function_calling)),
and with built-in Gemini tools ([multi-tool use](#native-tools)).

* **Always map function IDs:** Gemini 3 now always returns a unique
`id`

with every `functionCall`

. Include this exact `id`

in your
`functionResponse`

so the model can accurately map your result back to the
original request.

### Step 1: Define a function declaration

Define a function and its declaration within your application code that allows users to set light values and make an API request. This function could call external services or APIs.

### Python

```
# Define a function that the model can call to control smart lights
set_light_values_declaration = {
"name": "set_light_values",
"description": "Sets the brightness and color temperature of a light.",
"parameters": {
"type": "object",
"properties": {
"brightness": {
"type": "integer",
"description": "Light level from 0 to 100. Zero is off and 100 is full brightness",
},
"color_temp": {
"type": "string",
"enum": ["daylight", "cool", "warm"],
"description": "Color temperature of the light fixture, which can be `daylight`, `cool` or `warm`.",
},
},
"required": ["brightness", "color_temp"],
},
}
# This is the actual function that would be called based on the model's suggestion
def set_light_values(brightness: int, color_temp: str) -> dict[str, int | str]:
"""Set the brightness and color temperature of a room light. (mock API).
Args:
brightness: Light level from 0 to 100. Zero is off and 100 is full brightness
color_temp: Color temperature of the light fixture, which can be `daylight`, `cool` or `warm`.
Returns:
A dictionary containing the set brightness and color temperature.
"""
return {"brightness": brightness, "colorTemperature": color_temp}
```


### JavaScript

```
import { Type } from '@google/genai';
// Define a function that the model can call to control smart lights
const setLightValuesFunctionDeclaration = {
name: 'set_light_values',
description: 'Sets the brightness and color temperature of a light.',
parameters: {
type: Type.OBJECT,
properties: {
brightness: {
type: Type.NUMBER,
description: 'Light level from 0 to 100. Zero is off and 100 is full brightness',
},
color_temp: {
type: Type.STRING,
enum: ['daylight', 'cool', 'warm'],
description: 'Color temperature of the light fixture, which can be `daylight`, `cool` or `warm`.',
},
},
required: ['brightness', 'color_temp'],
},
};
/**
* Set the brightness and color temperature of a room light. (mock API)
* @param {number} brightness - Light level from 0 to 100. Zero is off and 100 is full brightness
* @param {string} color_temp - Color temperature of the light fixture, which can be `daylight`, `cool` or `warm`.
* @return {Object} A dictionary containing the set brightness and color temperature.
*/
function setLightValues(brightness, color_temp) {
return {
brightness: brightness,
colorTemperature: color_temp
};
}
```


### Step 2: Call the model with function declarations

Once you have defined your function declarations, you can prompt the model to use them. It analyzes the prompt and function declarations and decides whether to respond directly or to call a function. If a function is called, the response object will contain a function call suggestion.

### Python

```
from google.genai import types
# Configure the client and tools
client = genai.Client()
tools = types.Tool(function_declarations=[set_light_values_declaration])
config = types.GenerateContentConfig(tools=[tools])
# Define user prompt
contents = [
types.Content(
role="user", parts=[types.Part(text="Turn the lights down to a romantic level")]
)
]
# Send request with function declarations
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents=contents,
config=config,
)
print(response.candidates[0].content.parts[0].function_call)
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
// Generation config with function declaration
const config = {
tools: [{
functionDeclarations: [setLightValuesFunctionDeclaration]
}]
};
// Configure the client
const ai = new GoogleGenAI({});
// Define user prompt
const contents = [
{
role: 'user',
parts: [{ text: 'Turn the lights down to a romantic level' }]
}
];
// Send request with function declarations
const response = await ai.models.generateContent({
model: 'gemini-3-flash-preview',
contents: contents,
config: config
});
console.log(response.functionCalls[0]);
```


The model then returns a `functionCall`

object in an OpenAPI compatible
schema specifying how to call one or more of the declared functions in order to
respond to the user's question.

### Python

```
id='8f2b1a3c' args={'color_temp': 'warm', 'brightness': 25} name='set_light_values'
```


### JavaScript

```
{
id: '8f2b1a3c',
name: 'set_light_values',
args: { brightness: 25, color_temp: 'warm' }
}
```


### Step 3: Execute set_light_values function code

Extract the function call details from the model's response, parse the arguments
, and execute the `set_light_values`

function.

### Python

```
# Extract tool call details, it may not be in the first part.
tool_call = response.candidates[0].content.parts[0].function_call
if tool_call.name == "set_light_values":
result = set_light_values(**tool_call.args)
print(f"Function execution result: {result}")
```


### JavaScript

```
// Extract tool call details
const tool_call = response.functionCalls[0]
let result;
if (tool_call.name === 'set_light_values') {
result = setLightValues(tool_call.args.brightness, tool_call.args.color_temp);
console.log(`Function execution result: ${JSON.stringify(result)}`);
}
```


### Step 4: Create user friendly response with function result and call the model again

Finally, send the result of the function execution back to the model so it can incorporate this information into its final response to the user.

### Python

```
from google import genai
from google.genai import types
# Create a function response part
function_response_part = types.Part.from_function_response(
name=tool_call.name,
response={"result": result},
id=tool_call.id,
)
# Append function call and result of the function execution to contents
contents.append(response.candidates[0].content) # Append the content from the model's response.
contents.append(types.Content(role="user", parts=[function_response_part])) # Append the function response
client = genai.Client()
final_response = client.models.generate_content(
model="gemini-3-flash-preview",
config=config,
contents=contents,
)
print(final_response.text)
```


### JavaScript

```
// Create a function response part
const function_response_part = {
name: tool_call.name,
response: { result },
id: tool_call.id
}
// Append function call and result of the function execution to contents
contents.push(response.candidates[0].content);
contents.push({ role: 'user', parts: [{ functionResponse: function_response_part }] });
// Get the final response from the model
const final_response = await ai.models.generateContent({
model: 'gemini-3-flash-preview',
contents: contents,
config: config
});
console.log(final_response.text);
```


This completes the function calling flow. The model successfully used the
`set_light_values`

function to perform the request action of the user.

## Function declarations

When you implement function calling in a prompt, you create a `tools`

object,
which contains one or more `function declarations`

. You define functions using
JSON, specifically with a [select subset](https://ai.google.dev/api/caching#Schema)
of the [OpenAPI schema](https://spec.openapis.org/oas/v3.0.3#schemaw) format. A
single function declaration can include the following parameters:

`name`

(string): A unique name for the function (`get_weather_forecast`

,`send_email`

). Use descriptive names without spaces or special characters (use underscores or camelCase).`description`

(string): A clear and detailed explanation of the function's purpose and capabilities. This is crucial for the model to understand when to use the function. Be specific and provide examples if helpful ("Finds theaters based on location and optionally movie title which is currently playing in theaters.").`parameters`

(object): Defines the input parameters the function expects.`type`

(string): Specifies the overall data type, such as`object`

.`properties`

(object): Lists individual parameters, each with:`type`

(string): The data type of the parameter, such as`string`

,`integer`

,`boolean, array`

.`description`

(string): A description of the parameter's purpose and format. Provide examples and constraints ("The city and state, e.g., 'San Francisco, CA' or a zip code e.g., '95616'.").`enum`

(array, optional): If the parameter values are from a fixed set, use "enum" to list the allowed values instead of just describing them in the description. This improves accuracy ("enum": ["daylight", "cool", "warm"]).

`required`

(array): An array of strings listing the parameter names that are mandatory for the function to operate.


You can also construct `FunctionDeclarations`

from Python functions directly using
`types.FunctionDeclaration.from_callable(client=client, callable=your_function)`

.

## Function calling with thinking models

Gemini 3 and 2.5 series models use an internal ["thinking"](/gemini-api/docs/thinking) process to reason through requests. This
significantly improves function calling performance,
allowing the model to better determine when to call a function and which
parameters to use. Because the Gemini API is stateless, models use
[thought signatures](/gemini-api/docs/thought-signatures) to maintain context
across multi-turn conversations.

This section covers advanced management of thought signatures and is only necessary if you're manually constructing API requests (e.g., via REST) or manipulating conversation history.

**If you're using the Google GenAI SDKs (our
official libraries), you don't need to manage this process**. The SDKs
automatically handle the necessary steps, as shown in the earlier

[example](/gemini-api/docs/function-calling#step-4).

### Managing conversation history manually

If you modify the conversation history manually, instead of sending the
[complete previous response](/gemini-api/docs/function-calling#step-4) you
must correctly handle the `thought_signature`

included in the model's turn.

Follow these rules to ensure the model's context is preserved:

- Always send the
`thought_signature`

back to the model inside its original.`Part`

**Always include the exact**`id`

from the`function_call`

in your`function_response`

so the API can map the result to the correct request.- Don't merge a
`Part`

containing a signature with one that does not. This breaks the positional context of the thought. - Don't combine two
`Parts`

that both contain signatures, as the signature strings cannot be merged.

#### Gemini 3 thought signatures

In Gemini 3, any [ Part](/api#request-body-structure) of a model response
may contain a thought signature.
While we generally recommend returning signatures from all

`Part`

types,
passing back thought signatures is mandatory for function calling. Unless you
are manipulating conversation history manually, the Google GenAI SDK will
handle thought signatures automatically.If you are manipulating conversation history manually, refer to the
[Thoughts Signatures](/gemini-api/docs/thought-signatures) page for complete
guidance and details on handling thought signatures for Gemini 3.

##### Inspecting thought signatures

While not necessary for implementation, you can inspect the response to see the
`thought_signature`

for debugging or educational purposes.

### Python

```
import base64
# After receiving a response from a model with thinking enabled
# response = client.models.generate_content(...)
# The signature is attached to the response part containing the function call
part = response.candidates[0].content.parts[0]
if part.thought_signature:
print(base64.b64encode(part.thought_signature).decode("utf-8"))
```


### JavaScript

```
// After receiving a response from a model with thinking enabled
// const response = await ai.models.generateContent(...)
// The signature is attached to the response part containing the function call
const part = response.candidates[0].content.parts[0];
if (part.thoughtSignature) {
console.log(part.thoughtSignature);
}
```


Learn more about limitations and usage of thought signatures, and about thinking
models in general, on the [Thinking](/gemini-api/docs/thinking#signatures) page.

## Parallel function calling

In addition to single turn function calling, you can also call multiple functions at once. Parallel function calling lets you execute multiple functions at once and is used when the functions are not dependent on each other. This is useful in scenarios like gathering data from multiple independent sources, such as retrieving customer details from different databases or checking inventory levels across various warehouses or performing multiple actions such as converting your apartment into a disco.

When the model initiates multiple function calls in a single turn, you don't
need to return the `function_result`

objects in the same order that the
`function_call`

objects were received. The Gemini API maps each result back to
its corresponding call using the `id`

from the model's output. This lets you
execute your functions asynchronously and append the results to your list as
they complete.

### Python

```
power_disco_ball = {
"name": "power_disco_ball",
"description": "Powers the spinning disco ball.",
"parameters": {
"type": "object",
"properties": {
"power": {
"type": "boolean",
"description": "Whether to turn the disco ball on or off.",
}
},
"required": ["power"],
},
}
start_music = {
"name": "start_music",
"description": "Play some music matching the specified parameters.",
"parameters": {
"type": "object",
"properties": {
"energetic": {
"type": "boolean",
"description": "Whether the music is energetic or not.",
},
"loud": {
"type": "boolean",
"description": "Whether the music is loud or not.",
},
},
"required": ["energetic", "loud"],
},
}
dim_lights = {
"name": "dim_lights",
"description": "Dim the lights.",
"parameters": {
"type": "object",
"properties": {
"brightness": {
"type": "number",
"description": "The brightness of the lights, 0.0 is off, 1.0 is full.",
}
},
"required": ["brightness"],
},
}
```


### JavaScript

```
import { Type } from '@google/genai';
const powerDiscoBall = {
name: 'power_disco_ball',
description: 'Powers the spinning disco ball.',
parameters: {
type: Type.OBJECT,
properties: {
power: {
type: Type.BOOLEAN,
description: 'Whether to turn the disco ball on or off.'
}
},
required: ['power']
}
};
const startMusic = {
name: 'start_music',
description: 'Play some music matching the specified parameters.',
parameters: {
type: Type.OBJECT,
properties: {
energetic: {
type: Type.BOOLEAN,
description: 'Whether the music is energetic or not.'
},
loud: {
type: Type.BOOLEAN,
description: 'Whether the music is loud or not.'
}
},
required: ['energetic', 'loud']
}
};
const dimLights = {
name: 'dim_lights',
description: 'Dim the lights.',
parameters: {
type: Type.OBJECT,
properties: {
brightness: {
type: Type.NUMBER,
description: 'The brightness of the lights, 0.0 is off, 1.0 is full.'
}
},
required: ['brightness']
}
};
```


Configure the function calling mode to allow using all of the specified tools.
To learn more, you can read about
[configuring function calling](/gemini-api/docs/function-calling#function_calling_modes).

### Python

```
from google import genai
from google.genai import types
# Configure the client and tools
client = genai.Client()
house_tools = [
types.Tool(function_declarations=[power_disco_ball, start_music, dim_lights])
]
config = types.GenerateContentConfig(
tools=house_tools,
automatic_function_calling=types.AutomaticFunctionCallingConfig(
disable=True
),
# Force the model to call 'any' function, instead of chatting.
tool_config=types.ToolConfig(
function_calling_config=types.FunctionCallingConfig(mode='ANY')
),
)
chat = client.chats.create(model="gemini-3-flash-preview", config=config)
response = chat.send_message("Turn this place into a party!")
# Print out each of the function calls requested from this single call
print("Example 1: Forced function calling")
for fn in response.function_calls:
args = ", ".join(f"{key}={val}" for key, val in fn.args.items())
print(f"{fn.name}({args}) - ID: {fn.id}")
```


### JavaScript

```
import { GoogleGenAI } from '@google/genai';
// Set up function declarations
const houseFns = [powerDiscoBall, startMusic, dimLights];
const config = {
tools: [{
functionDeclarations: houseFns
}],
// Force the model to call 'any' function, instead of chatting.
toolConfig: {
functionCallingConfig: {
mode: 'any'
}
}
};
// Configure the client
const ai = new GoogleGenAI({});
// Create a chat session
const chat = ai.chats.create({
model: 'gemini-3-flash-preview',
config: config
});
const response = await chat.sendMessage({message: 'Turn this place into a party!'});
// Print out each of the function calls requested from this single call
console.log("Example 1: Forced function calling");
for (const fn of response.functionCalls) {
const args = Object.entries(fn.args)
.map(([key, val]) => `${key}=${val}`)
.join(', ');
console.log(`${fn.name}(${args}) - ID: ${fn.id}`);
}
```


Each of the printed results reflects a single function call that the model has requested. To send the results back, include the responses in the same order as they were requested.

The Python SDK supports [automatic function calling](/gemini-api/docs/function-calling#automatic_function_calling_python_only),
which automatically converts Python functions to declarations, handles the
function call execution and response cycle for you. Following is an example for
the disco use case.

### Python

```
from google import genai
from google.genai import types
# Actual function implementations
def power_disco_ball_impl(power: bool) -> dict:
"""Powers the spinning disco ball.
Args:
power: Whether to turn the disco ball on or off.
Returns:
A status dictionary indicating the current state.
"""
return {"status": f"Disco ball powered {'on' if power else 'off'}"}
def start_music_impl(energetic: bool, loud: bool) -> dict:
"""Play some music matching the specified parameters.
Args:
energetic: Whether the music is energetic or not.
loud: Whether the music is loud or not.
Returns:
A dictionary containing the music settings.
"""
music_type = "energetic" if energetic else "chill"
volume = "loud" if loud else "quiet"
return {"music_type": music_type, "volume": volume}
def dim_lights_impl(brightness: float) -> dict:
"""Dim the lights.
Args:
brightness: The brightness of the lights, 0.0 is off, 1.0 is full.
Returns:
A dictionary containing the new brightness setting.
"""
return {"brightness": brightness}
# Configure the client
client = genai.Client()
config = types.GenerateContentConfig(
tools=[power_disco_ball_impl, start_music_impl, dim_lights_impl]
)
# Make the request
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents="Do everything you need to this place into party!",
config=config,
)
print("\nExample 2: Automatic function calling")
print(response.text)
# I've turned on the disco ball, started playing loud and energetic music, and dimmed the lights to 50% brightness. Let's get this party started!
```


## Compositional function calling

Compositional or sequential function calling allows Gemini to chain multiple
function calls together to fulfill a complex request. For example, to answer
"Get the temperature in my current location", the Gemini API might first invoke
a `get_current_location()`

function followed by a `get_weather()`

function that
takes the location as a parameter.

The following example demonstrates how to implement compositional function calling using the Python SDK and automatic function calling.

### Python

This example uses the automatic function calling feature of the
`google-genai`

Python SDK. The SDK automatically converts the Python
functions to the required schema, executes the function calls when requested
by the model, and sends the results back to the model to complete the task.

```
import os
from google import genai
from google.genai import types
# Example Functions
def get_weather_forecast(location: str) -> dict:
"""Gets the current weather temperature for a given location."""
print(f"Tool Call: get_weather_forecast(location={location})")
# TODO: Make API call
print("Tool Response: {'temperature': 25, 'unit': 'celsius'}")
return {"temperature": 25, "unit": "celsius"} # Dummy response
def set_thermostat_temperature(temperature: int) -> dict:
"""Sets the thermostat to a desired temperature."""
print(f"Tool Call: set_thermostat_temperature(temperature={temperature})")
# TODO: Interact with a thermostat API
print("Tool Response: {'status': 'success'}")
return {"status": "success"}
# Configure the client and model
client = genai.Client()
config = types.GenerateContentConfig(
tools=[get_weather_forecast, set_thermostat_temperature]
)
# Make the request
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents="If it's warmer than 20°C in London, set the thermostat to 20°C, otherwise set it to 18°C.",
config=config,
)
# Print the final, user-facing response
print(response.text)
```


**Expected Output**

When you run the code, you will see the SDK orchestrating the function
calls. The model first calls `get_weather_forecast`

, receives the
temperature, and then calls `set_thermostat_temperature`

with the correct
value based on the logic in the prompt.

```
Tool Call: get_weather_forecast(location=London)
Tool Response: {'temperature': 25, 'unit': 'celsius'}
Tool Call: set_thermostat_temperature(temperature=20)
Tool Response: {'status': 'success'}
OK. I've set the thermostat to 20°C.
```


### JavaScript

This example shows how to use JavaScript/TypeScript SDK to do comopositional function calling using a manual execution loop.

```
import { GoogleGenAI, Type } from "@google/genai";
// Configure the client
const ai = new GoogleGenAI({});
// Example Functions
function get_weather_forecast({ location }) {
console.log(`Tool Call: get_weather_forecast(location=${location})`);
// TODO: Make API call
console.log("Tool Response: {'temperature': 25, 'unit': 'celsius'}");
return { temperature: 25, unit: "celsius" };
}
function set_thermostat_temperature({ temperature }) {
console.log(
`Tool Call: set_thermostat_temperature(temperature=${temperature})`,
);
// TODO: Make API call
console.log("Tool Response: {'status': 'success'}");
return { status: "success" };
}
const toolFunctions = {
get_weather_forecast,
set_thermostat_temperature,
};
const tools = [
{
functionDeclarations: [
{
name: "get_weather_forecast",
description:
"Gets the current weather temperature for a given location.",
parameters: {
type: Type.OBJECT,
properties: {
location: {
type: Type.STRING,
},
},
required: ["location"],
},
},
{
name: "set_thermostat_temperature",
description: "Sets the thermostat to a desired temperature.",
parameters: {
type: Type.OBJECT,
properties: {
temperature: {
type: Type.NUMBER,
},
},
required: ["temperature"],
},
},
],
},
];
// Prompt for the model
let contents = [
{
role: "user",
parts: [
{
text: "If it's warmer than 20°C in London, set the thermostat to 20°C, otherwise set it to 18°C.",
},
],
},
];
// Loop until the model has no more function calls to make
while (true) {
const result = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents,
config: { tools },
});
if (result.functionCalls && result.functionCalls.length > 0) {
const functionCall = result.functionCalls[0];
const { name, args } = functionCall;
if (!toolFunctions[name]) {
throw new Error(`Unknown function call: ${name}`);
}
// Call the function and get the response.
const toolResponse = toolFunctions[name](args);
const functionResponsePart = {
name: functionCall.name,
response: {
result: toolResponse,
},
id: functionCall.id,
};
// Send the function response back to the model.
contents.push({
role: "model",
parts: [
{
functionCall: functionCall,
},
],
});
contents.push({
role: "user",
parts: [
{
functionResponse: functionResponsePart,
},
],
});
} else {
// No more function calls, break the loop.
console.log(result.text);
break;
}
}
```


**Expected Output**

When you run the code, you will see the SDK orchestrating the function
calls. The model first calls `get_weather_forecast`

, receives the
temperature, and then calls `set_thermostat_temperature`

with the correct
value based on the logic in the prompt.

```
Tool Call: get_weather_forecast(location=London)
Tool Response: {'temperature': 25, 'unit': 'celsius'}
Tool Call: set_thermostat_temperature(temperature=20)
Tool Response: {'status': 'success'}
OK. It's 25°C in London, so I've set the thermostat to 20°C.
```


Compositional function calling is a native [Live
API](https://ai.google.dev/gemini-api/docs/live) feature. This means Live API
can handle the function calling similar to the Python SDK.

### Python

```
# Light control schemas
turn_on_the_lights_schema = {'name': 'turn_on_the_lights'}
turn_off_the_lights_schema = {'name': 'turn_off_the_lights'}
prompt = """
Hey, can you write run some python code to turn on the lights, wait 10s and then turn off the lights?
"""
tools = [
{'code_execution': {}},
{'function_declarations': [turn_on_the_lights_schema, turn_off_the_lights_schema]}
]
await run(prompt, tools=tools, modality="AUDIO")
```


### JavaScript

```
// Light control schemas
const turnOnTheLightsSchema = { name: 'turn_on_the_lights' };
const turnOffTheLightsSchema = { name: 'turn_off_the_lights' };
const prompt = `
Hey, can you write run some python code to turn on the lights, wait 10s and then turn off the lights?
`;
const tools = [
{ codeExecution: {} },
{ functionDeclarations: [turnOnTheLightsSchema, turnOffTheLightsSchema] }
];
await run(prompt, tools=tools, modality="AUDIO")
```


## Function calling modes

The Gemini API lets you control how the model uses the provided tools
(function declarations). Specifically, you can set the mode within
the.`function_calling_config`

.

`AUTO (Default)`

: The model decides whether to generate a natural language response or suggest a function call based on the prompt and context. This is the most flexible mode and recommended for most scenarios.`ANY`

: The model is constrained to always predict a function call and guarantees function schema adherence. If`allowed_function_names`

is not specified, the model can choose from any of the provided function declarations. If`allowed_function_names`

is provided as a list, the model can only choose from the functions in that list. Use this mode when you require a function call response to every prompt (if applicable).`NONE`

: The model is*prohibited*from making function calls. This is equivalent to sending a request without any function declarations. Use this to temporarily disable function calling without removing your tool definitions.`VALIDATED`

(Preview): The model is constrained to predict either function calls or natural language, and ensures function schema adherence. If`allowed_function_names`

is not provided, the model picks from all of the available function declarations. If`allowed_function_names`

is provided, the model picks from the set of allowed functions.

### Python

```
from google.genai import types
# Configure function calling mode
tool_config = types.ToolConfig(
function_calling_config=types.FunctionCallingConfig(
mode="ANY", allowed_function_names=["get_current_temperature"]
)
)
# Create the generation config
config = types.GenerateContentConfig(
tools=[tools], # not defined here.
tool_config=tool_config,
)
```


### JavaScript

```
import { FunctionCallingConfigMode } from '@google/genai';
// Configure function calling mode
const toolConfig = {
functionCallingConfig: {
mode: FunctionCallingConfigMode.ANY,
allowedFunctionNames: ['get_current_temperature']
}
};
// Create the generation config
const config = {
tools: tools, // not defined here.
toolConfig: toolConfig,
};
```


## Automatic function calling (Python only)

When using the Python SDK, you can provide Python functions directly as tools.
The SDK converts these functions into declarations, manages the function call
execution, and handles the response cycle for you. Define your function with
type hints and a docstring. For optimal results, it is recommended to use
[Google-style docstrings.](https://google.github.io/styleguide/pyguide.html#383-functions-and-methods)
The SDK will then automatically:

- Detect function call responses from the model.
- Call the corresponding Python function in your code.
- Send the function's response back to the model.
- Return the model's final text response.

The SDK currently doesn't parse argument descriptions into the property description slots of the generated function declaration. Instead, it sends the entire docstring as the top-level function description.

### Python

```
from google import genai
from google.genai import types
# Define the function with type hints and docstring
def get_current_temperature(location: str) -> dict:
"""Gets the current temperature for a given location.
Args:
location: The city and state, e.g. San Francisco, CA
Returns:
A dictionary containing the temperature and unit.
"""
# ... (implementation) ...
return {"temperature": 25, "unit": "Celsius"}
# Configure the client
client = genai.Client()
config = types.GenerateContentConfig(
tools=[get_current_temperature]
) # Pass the function itself
# Make the request
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents="What's the temperature in Boston?",
config=config,
)
print(response.text) # The SDK handles the function call and returns the final text
```


You can disable automatic function calling with:

### Python

```
config = types.GenerateContentConfig(
tools=[get_current_temperature],
automatic_function_calling=types.AutomaticFunctionCallingConfig(disable=True)
)
```


### Automatic function schema declaration

The API is able to describe any of the following types. `Pydantic`

types are
allowed, as long as the fields defined on them are also composed of allowed
types. Dict types (like `dict[str: int]`

) are not well supported here, don't
use them.

### Python

```
AllowedType = (
int | float | bool | str | list['AllowedType'] | pydantic.BaseModel)
```


To see what the inferred schema looks like, you can convert it using
[ from_callable](https://googleapis.github.io/python-genai/genai.html#genai.types.FunctionDeclaration.from_callable):

### Python

```
from google import genai
from google.genai import types
def multiply(a: float, b: float):
"""Returns a * b."""
return a * b
client = genai.Client()
fn_decl = types.FunctionDeclaration.from_callable(callable=multiply, client=client)
# to_json_dict() provides a clean JSON representation.
print(fn_decl.to_json_dict())
```


## Multi-tool use: Combine built-in tools with function calling

You can enable multiple tools, combining built-in tools with function calling in the same request.

Gemini 3 models can combine built-in tools with function calling out-of-the-box,
thanks to the tool context circulation feature. Read the page on
[Combining built-in tools and function calling](/gemini-api/docs/tool-combination) to learn more.

### Python

```
from google import genai
from google.genai import types
client = genai.Client()
getWeather = {
"name": "getWeather",
"description": "Gets the weather for a requested city.",
"parameters": {
"type": "object",
"properties": {
"city": {
"type": "string",
"description": "The city and state, e.g. Utqiaġvik, Alaska",
},
},
"required": ["city"],
},
}
response = client.models.generate_content(
model="gemini-3-flash-preview",
contents="What is the northernmost city in the United States? What's the weather like there today?",
config=types.GenerateContentConfig(
tools=[
types.Tool(
google_search=types.ToolGoogleSearch(), # Built-in tool
function_declarations=[getWeather] # Custom tool
),
],
include_server_side_tool_invocations=True
),
)
history = [
types.Content(
role="user",
parts=[types.Part(text="What is the northernmost city in the United States? What's the weather like there today?")]
),
response.candidates[0].content,
types.Content(
role="user",
parts=[types.Part(
function_response=types.FunctionResponse(
name="getWeather",
response={"response": "Very cold. 22 degrees Fahrenheit."},
id=response.candidates[0].content.parts[2].function_call.id
)
)]
)
]
response_2 = client.models.generate_content(
model="gemini-3-flash-preview",
contents=history,
config=types.GenerateContentConfig(
tools=[
types.Tool(
google_search=types.ToolGoogleSearch(),
function_declarations=[getWeather]
),
],
include_server_side_tool_invocations=True
),
)
```


### Javascript

```
import { GoogleGenAI, Type } from '@google/genai';
const client = new GoogleGenAI({});
const getWeather = {
name: "getWeather",
description: "Get the weather in a given location",
parameters: {
type: "OBJECT",
properties: {
location: {
type: "STRING",
description: "The city and state, e.g. San Francisco, CA"
}
},
required: ["location"]
}
};
async function run() {
const model = client.models.generateContent({
model: "gemini-3-flash-preview",
});
const tools = [
{ googleSearch: {} },
{ functionDeclarations: [getWeather] }
];
const toolConfig = { includeServerSideToolInvocations: true };
const result1 = await model.generateContent({
contents: [{role: "user", parts: [{text: "What is the northernmost city in the United States? What's the weather like there today?"}]}],
tools: tools,
toolConfig: toolConfig,
});
const response1 = result1.response;
const functionCallId = response1.candidates[0].content.parts.find(p => p.functionCall)?.functionCall?.id;
const history = [
{
role: "user",
parts:[{text: "What is the northernmost city in the United States? What's the weather like there today?"}]
},
response1.candidates[0].content,
{
role: "user",
parts: [{
functionResponse: {
name: "getWeather",
response: {response: "Very cold. 22 degrees Fahrenheit."},
id: functionCallId
}
}]
}
];
const result2 = await model.generateContent({
contents: history,
tools: tools,
toolConfig: toolConfig,
});
}
run();
```


For models before the Gemini 3 series, use the
[Live API](/gemini-api/docs/live-api/tools).

## Multimodal function responses

For Gemini 3 series models, you can include multimodal content in the function response parts that you send to the model. The model can process this multimodal content in its next turn to produce a more informed response. The following MIME types are supported for multimodal content in function responses:

**Images**:`image/png`

,`image/jpeg`

,`image/webp`

**Documents**:`application/pdf`

,`text/plain`


To include multimodal data in a function response, include it as one or more
parts nested within the `functionResponse`

part. Each multimodal part must
contain `inlineData`

. If you reference a multimodal part from
within the structured `response`

field, it must contain a unique `displayName`

.

You can also reference a multimodal part from within the structured `response`

field of the `functionResponse`

part by using the JSON reference format
`{"$ref": "<displayName>"}`

. The model substitutes the reference with the
multimodal content when processing the response. Each `displayName`

can only be
referenced once in the structured `response`

field.

The following example shows a message containing a `functionResponse`

for a
function named `get_image`

and a nested part containing image data with
`displayName: "instrument.jpg"`

. The `functionResponse`

's `response`

field
references this image part:

### Python

```
from google import genai
from google.genai import types
import requests
client = genai.Client()
# This is a manual, two turn multimodal function calling workflow:
# 1. Define the function tool
get_image_declaration = types.FunctionDeclaration(
name="get_image",
description="Retrieves the image file reference for a specific order item.",
parameters={
"type": "object",
"properties": {
"item_name": {
"type": "string",
"description": "The name or description of the item ordered (e.g., 'instrument')."
}
},
"required": ["item_name"],
},
)
tool_config = types.Tool(function_declarations=[get_image_declaration])
# 2. Send a message that triggers the tool
prompt = "Show me the instrument I ordered last month."
response_1 = client.models.generate_content(
model="gemini-3-flash-preview",
contents=[prompt],
config=types.GenerateContentConfig(
tools=[tool_config],
)
)
# 3. Handle the function call
function_call = response_1.function_calls[0]
requested_item = function_call.args["item_name"]
print(f"Model wants to call: {function_call.name}")
# Execute your tool (e.g., call an API)
# (This is a mock response for the example)
print(f"Calling external tool for: {requested_item}")
function_response_data = {
"image_ref": {"$ref": "instrument.jpg"},
}
image_path = "https://goo.gle/instrument-img"
image_bytes = requests.get(image_path).content
function_response_multimodal_data = types.FunctionResponsePart(
inline_data=types.FunctionResponseBlob(
mime_type="image/jpeg",
display_name="instrument.jpg",
data=image_bytes,
)
)
# 4. Send the tool's result back
# Append this turn's messages to history for a final response.
history = [
types.Content(role="user", parts=[types.Part(text=prompt)]),
response_1.candidates[0].content,
types.Content(
role="user",
parts=[
types.Part.from_function_response(
id=function_call.id,
name=function_call.name,
response=function_response_data,
parts=[function_response_multimodal_data]
)
],
)
]
response_2 = client.models.generate_content(
model="gemini-3-flash-preview",
contents=history,
config=types.GenerateContentConfig(
tools=[tool_config],
thinking_config=types.ThinkingConfig(include_thoughts=True)
),
)
print(f"\nFinal model response: {response_2.text}")
```


### JavaScript

```
import { GoogleGenAI, Type } from '@google/genai';
const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
// This is a manual, two turn multimodal function calling workflow:
// 1. Define the function tool
const getImageDeclaration = {
name: 'get_image',
description: 'Retrieves the image file reference for a specific order item.',
parameters: {
type: Type.OBJECT,
properties: {
item_name: {
type: Type.STRING,
description: "The name or description of the item ordered (e.g., 'instrument').",
},
},
required: ['item_name'],
},
};
const toolConfig = {
functionDeclarations: [getImageDeclaration],
};
// 2. Send a message that triggers the tool
const prompt = 'Show me the instrument I ordered last month.';
const response1 = await client.models.generateContent({
model: 'gemini-3-flash-preview',
contents: prompt,
config: {
tools: [toolConfig],
},
});
// 3. Handle the function call
const functionCall = response1.functionCalls[0];
const requestedItem = functionCall.args.item_name;
console.log(`Model wants to call: ${functionCall.name}`);
// Execute your tool (e.g., call an API)
// (This is a mock response for the example)
console.log(`Calling external tool for: ${requestedItem}`);
const functionResponseData = {
image_ref: { $ref: 'instrument.jpg' },
};
const imageUrl = "https://goo.gle/instrument-img";
const response = await fetch(imageUrl);
const imageArrayBuffer = await response.arrayBuffer();
const base64ImageData = Buffer.from(imageArrayBuffer).toString('base64');
const functionResponseMultimodalData = {
inlineData: {
mimeType: 'image/jpeg',
displayName: 'instrument.jpg',
data: base64ImageData,
},
};
// 4. Send the tool's result back
// Append this turn's messages to history for a final response.
const history = [
{ role: 'user', parts: [{ text: prompt }] },
response1.candidates[0].content,
{
role: 'user',
parts: [
{
functionResponse: {
id: functionCall.id,
name: functionCall.name,
response: functionResponseData,
parts: [functionResponseMultimodalData]
},
},
],
},
];
const response2 = await client.models.generateContent({
model: 'gemini-3-flash-preview',
contents: history,
config: {
tools: [toolConfig],
thinkingConfig: { includeThoughts: true },
},
});
console.log(`\nFinal model response: ${response2.text}`);
```


### REST

```
IMG_URL="https://goo.gle/instrument-img"
MIME_TYPE=$(curl -sIL "$IMG_URL" | grep -i '^content-type:' | awk -F ': ' '{print $2}' | sed 's/\r$//' | head -n 1)
if [[ -z "$MIME_TYPE" || ! "$MIME_TYPE" == image/* ]]; then
MIME_TYPE="image/jpeg"
fi
# Check for macOS
if [[ "$(uname)" == "Darwin" ]]; then
IMAGE_B64=$(curl -sL "$IMG_URL" | base64 -b 0)
elif [[ "$(base64 --version 2>&1)" = *"FreeBSD"* ]]; then
IMAGE_B64=$(curl -sL "$IMG_URL" | base64)
else
IMAGE_B64=$(curl -sL "$IMG_URL" | base64 -w0)
fi
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
-H "x-goog-api-key: $GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [
...,
{
"role": "user",
"parts": [
{
"functionResponse": {
"name": "get_image",
"id": "UNIQUE_CALL_ID_HERE",
"response": {
"image_ref": {
"$ref": "instrument.jpg"
}
},
"parts": [
{
"inlineData": {
"displayName": "instrument.jpg",
"mimeType":"'"$MIME_TYPE"'",
"data": "'"$IMAGE_B64"'"
}
}
]
}
}
]
}
]
}'
```


## Function calling with Structured output

For Gemini 3 series models, you can use function calling with
[structured output](/gemini-api/docs/structured-output). This lets the model
predict function calls or outputs that adhere to a specific schema. As a result,
you receive consistently formatted responses when the model doesn't generate
function calls.

## Model context protocol (MCP)

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is
an open standard for connecting AI applications with external tools and data.
MCP provides a common protocol for models to access context, such as functions
(tools), data sources (resources), or predefined prompts.

The Gemini SDKs have built-in support for the MCP, reducing boilerplate code and
offering
[automatic tool calling](/gemini-api/docs/function-calling#automatic_function_calling_python_only)
for MCP tools. When the model generates an MCP tool call, the Python and
JavaScript client SDK can automatically execute the MCP tool and send the
response back to the model in a subsequent request, continuing this loop until
no more tool calls are made by the model.

Here, you can find an example of how to use a local MCP server with Gemini and
`mcp`

SDK.

### Python

Make sure the latest version of the
[ mcp SDK](https://modelcontextprotocol.io/introduction) is installed on
your platform of choice.

```
pip install mcp
```


```
import os
import asyncio
from datetime import datetime
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from google import genai
client = genai.Client()
# Create server parameters for stdio connection
server_params = StdioServerParameters(
command="npx", # Executable
args=["-y", "@philschmid/weather-mcp"], # MCP Server
env=None, # Optional environment variables
)
async def run():
async with stdio_client(server_params) as (read, write):
async with ClientSession(read, write) as session:
# Prompt to get the weather for the current day in London.
prompt = f"What is the weather in London in {datetime.now().strftime('%Y-%m-%d')}?"
# Initialize the connection between client and server
await session.initialize()
# Send request to the model with MCP function declarations
response = await client.aio.models.generate_content(
model="gemini-2.5-flash",
contents=prompt,
config=genai.types.GenerateContentConfig(
temperature=0,
tools=[session], # uses the session, will automatically call the tool
# Uncomment if you **don't** want the SDK to automatically call the tool
# automatic_function_calling=genai.types.AutomaticFunctionCallingConfig(
# disable=True
# ),
),
)
print(response.text)
# Start the asyncio event loop and run the main function
asyncio.run(run())
```


### JavaScript

Make sure the latest version of the `mcp`

SDK is installed on your platform
of choice.

```
npm install @modelcontextprotocol/sdk
```


```
import { GoogleGenAI, FunctionCallingConfigMode , mcpToTool} from '@google/genai';
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
// Create server parameters for stdio connection
const serverParams = new StdioClientTransport({
command: "npx", // Executable
args: ["-y", "@philschmid/weather-mcp"] // MCP Server
});
const client = new Client(
{
name: "example-client",
version: "1.0.0"
}
);
// Configure the client
const ai = new GoogleGenAI({});
// Initialize the connection between client and server
await client.connect(serverParams);
// Send request to the model with MCP tools
const response = await ai.models.generateContent({
model: "gemini-2.5-flash",
contents: `What is the weather in London in ${new Date().toLocaleDateString()}?`,
config: {
tools: [mcpToTool(client)], // uses the session, will automatically call the tool
// Uncomment if you **don't** want the sdk to automatically call the tool
// automaticFunctionCalling: {
// disable: true,
// },
},
});
console.log(response.text)
// Close the connection
await client.close();
```


### Limitations with built-in MCP support

Built-in MCP support is a [experimental](/gemini-api/docs/models#preview)
feature in our SDKs and has the following limitations:

- Only tools are supported, not resources nor prompts
- It is available for the Python and JavaScript/TypeScript SDK.
- Breaking changes might occur in future releases.

Manual integration of MCP servers is always an option if these limit what you're building.

## Supported models

This section lists models and their function calling capabilities. Experimental
models are not included. You can find a comprehensive capabilities overview on
the [model overview](https://ai.google.dev/gemini-api/docs/models) page.

| Model | Function Calling | Parallel Function Calling | Compositional Function Calling |
|---|---|---|---|
| Gemini 3.1 Pro Preview | ✔️ | ✔️ | ✔️ |
| Gemini 3 Flash Preview | ✔️ | ✔️ | ✔️ |
| Gemini 2.5 Pro | ✔️ | ✔️ | ✔️ |
| Gemini 2.5 Flash | ✔️ | ✔️ | ✔️ |
| Gemini 2.5 Flash-Lite | ✔️ | ✔️ | ✔️ |
| Gemini 2.0 Flash | ✔️ | ✔️ | ✔️ |
| Gemini 2.0 Flash-Lite | X | X | X |

## Best practices

**Function and Parameter Descriptions:**Be extremely clear and specific in your descriptions. The model relies on these to choose the correct function and provide appropriate arguments.**Naming:**Use descriptive function names (without spaces, periods, or dashes).**Strong Typing:**Use specific types (integer, string, enum) for parameters to reduce errors. If a parameter has a limited set of valid values, use an enum.**Tool Selection:**While the model can use an arbitrary number of tools, providing too many can increase the risk of selecting an incorrect or suboptimal tool. For best results, aim to provide only the relevant tools for the context or task, ideally keeping the active set to a maximum of 10-20. Consider dynamic tool selection based on conversation context if you have a large total number of tools.**Prompt Engineering:**- Provide context: Tell the model its role (e.g., "You are a helpful weather assistant.").
- Give instructions: Specify how and when to use functions (e.g., "Don't guess dates; always use a future date for forecasts.").
- Encourage clarification: Instruct the model to ask clarifying questions if needed.
- See
[Agentic workflows](/gemini-api/docs/prompting-strategies#agentic-workflows)for further strategies on designing these prompts. Here is an example of a tested[system instruction](/gemini-api/docs/prompting-strategies#agentic-si-template).

**Temperature:**Use a low temperature (e.g., 0) for more deterministic and reliable function calls.**Validation:**If a function call has significant consequences (e.g., placing an order), validate the call with the user before executing it.**Check Finish Reason:**Always check thein the model's response to handle cases where the model failed to generate a valid function call.`finishReason`

**Error Handling**: Implement robust error handling in your functions to gracefully handle unexpected inputs or API failures. Return informative error messages that the model can use to generate helpful responses to the user.**Security:**Be mindful of security when calling external APIs. Use appropriate authentication and authorization mechanisms. Avoid exposing sensitive data in function calls.**Token Limits:**Function descriptions and parameters count towards your input token limit. If you're hitting token limits, consider limiting the number of functions or the length of the descriptions, break down complex tasks into smaller, more focused function sets.**Mix of bash and custom tools**For those building with a mix of bash and custom tools, Gemini 3.1 Pro Preview comes with a separate endpoint available via the API called.`gemini-3.1-pro-preview-customtools`


## Notes and limitations

- Positioning of function call parts: When using custom function declarations
[alongside built-in tools](/gemini-api/docs/tool-combination)(like Google Search), the model may return a mix of`functionCall`

,`toolCall`

, and`toolResponse`

parts in a single turn. Because of this, don't assume the`functionCall`

will always be the last item in the parts array. If you are manually parsing the JSON response, always iterate through the parts array rather than relying on position. - Only a
[subset of the OpenAPI schema](/api/caching#FunctionDeclaration)is supported. - For
`ANY`

mode, the API may reject very large or deeply nested schemas. If you encounter errors, try simplifying your function parameter and response schemas by shortening property names, reducing nesting, or limiting the number of function declarations. - Supported parameter types in Python are limited.
- Automatic function calling is a Python SDK feature only.