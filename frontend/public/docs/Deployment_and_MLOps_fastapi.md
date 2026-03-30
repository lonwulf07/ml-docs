# Fastapi Documentation
> Scraped on: 2026-03-30 | Root Source: [https://fastapi.tiangolo.com/](https://fastapi.tiangolo.com/)



---

## Source: https://fastapi.tiangolo.com/

# FastAPI[¶](#fastapi)

*FastAPI framework, high performance, easy to learn, fast to code, ready for production*

**Documentation**: [https://fastapi.tiangolo.com](https://fastapi.tiangolo.com)

**Source Code**: [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI is a modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints.

The key features are:

**Fast**: Very high performance, on par with**NodeJS**and**Go**(thanks to Starlette and Pydantic).[One of the fastest Python frameworks available](#performance).**Fast to code**: Increase the speed to develop features by about 200% to 300%. ***Fewer bugs**: Reduce about 40% of human (developer) induced errors. ***Intuitive**: Great editor support. Completion everywhere. Less time debugging.**Easy**: Designed to be easy to use and learn. Less time reading docs.**Short**: Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs.**Robust**: Get production-ready code. With automatic interactive documentation.**Standards-based**: Based on (and fully compatible with) the open standards for APIs:[OpenAPI](https://github.com/OAI/OpenAPI-Specification)(previously known as Swagger) and[JSON Schema](https://json-schema.org/).

* estimation based on tests conducted by an internal development team, building production applications.

## Sponsors[¶](#sponsors)

### Keystone Sponsor[¶](#keystone-sponsor)

### Gold and Silver Sponsors[¶](#gold-and-silver-sponsors)

## Opinions[¶](#opinions)

"*[...] I'm using FastAPI a ton these days. [...] I'm actually planning to use it for all of my team's ML services at Microsoft. Some of them are getting integrated into the core Windows product and some Office products.*"

**Microsoft**

[(ref)](https://github.com/fastapi/fastapi/pull/26)

"*We adopted the FastAPI library to spawn a REST server that can be queried to obtain predictions. [for Ludwig]*"

**Uber**

[(ref)](https://eng.uber.com/ludwig-v0-2/)

"* Netflix is pleased to announce the open-source release of our crisis management orchestration framework: Dispatch! [built with FastAPI]*"

**Netflix**

[(ref)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

"*I’m over the moon excited about FastAPI. It’s so fun!*"

**[Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) podcast host**

[(ref)](https://x.com/brianokken/status/1112220079972728832)

"*Honestly, what you've built looks super solid and polished. In many ways, it's what I wanted Hug to be - it's really inspiring to see someone build that.*"

**[Hug](https://github.com/hugapi/hug) creator**

[(ref)](https://news.ycombinator.com/item?id=19455465)

"*If you're looking to learn one modern framework for building REST APIs, check out FastAPI [...] It's fast, easy to use and easy to learn [...]*"

"*We've switched over to FastAPI for our APIs [...] I think you'll like it [...]*"

**[Explosion AI](https://explosion.ai) founders - [spaCy](https://spacy.io) creators**

[(ref)](https://x.com/_inesmontani/status/1144173225322143744)-

[(ref)](https://x.com/honnibal/status/1144031421859655680)

"*If anyone is looking to build a production Python API, I would highly recommend FastAPI. It is beautifully designed, simple to use and highly scalable, it has become a key component in our API first development strategy and is driving many automations and services such as our Virtual TAC Engineer.*"

**Cisco**

[(ref)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## FastAPI mini documentary[¶](#fastapi-mini-documentary)

There's a [FastAPI mini documentary](https://www.youtube.com/watch?v=mpR8ngthqiE) released at the end of 2025, you can watch it online:

**Typer**, the FastAPI of CLIs[¶](#typer-the-fastapi-of-clis)

If you are building a CLI app to be used in the terminal instead of a web API, check out [ Typer](https://typer.tiangolo.com/).

**Typer** is FastAPI's little sibling. And it's intended to be the **FastAPI of CLIs**. ⌨️ 🚀

## Requirements[¶](#requirements)

FastAPI stands on the shoulders of giants:

## Installation[¶](#installation)

Create and activate a [virtual environment](https://fastapi.tiangolo.com/virtual-environments/) and then install FastAPI:

```
$ pip install "fastapi[standard]"
---> 100%
```


**Note**: Make sure you put `"fastapi[standard]"`

in quotes to ensure it works in all terminals.

## Example[¶](#example)

### Create it[¶](#create-it)

Create a file `main.py`

with:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## Or use `async def`

...

If your code uses `async`

/ `await`

, use `async def`

:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**Note**:

If you don't know, check the *"In a hurry?"* section about [ async and await in the docs](https://fastapi.tiangolo.com/async/#in-a-hurry).


### Run it[¶](#run-it)

Run the server with:

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


## About the command `fastapi dev`

...

The command `fastapi dev`

reads your `main.py`

file automatically, detects the **FastAPI** app in it, and starts a server using [Uvicorn](https://www.uvicorn.dev).

By default, `fastapi dev`

will start with auto-reload enabled for local development.

You can read more about it in the [FastAPI CLI docs](https://fastapi.tiangolo.com/fastapi-cli/).

### Check it[¶](#check-it)

Open your browser at [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery).

You will see the JSON response as:

```
{"item_id": 5, "q": "somequery"}
```


You already created an API that:

- Receives HTTP requests in the
*paths*`/`

and`/items/{item_id}`

. - Both
*paths*take`GET`

*operations*(also known as HTTP*methods*). - The
*path*`/items/{item_id}`

has a*path parameter*`item_id`

that should be an`int`

. - The
*path*`/items/{item_id}`

has an optional`str`

*query parameter*`q`

.

### Interactive API docs[¶](#interactive-api-docs)

Now go to [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

You will see the automatic interactive API documentation (provided by [Swagger UI](https://github.com/swagger-api/swagger-ui)):

### Alternative API docs[¶](#alternative-api-docs)

And now, go to [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

You will see the alternative automatic documentation (provided by [ReDoc](https://github.com/Rebilly/ReDoc)):

## Example upgrade[¶](#example-upgrade)

Now modify the file `main.py`

to receive a body from a `PUT`

request.

Declare the body using standard Python types, thanks to Pydantic.

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


The `fastapi dev`

server should reload automatically.

### Interactive API docs upgrade[¶](#interactive-api-docs-upgrade)

Now go to [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

- The interactive API documentation will be automatically updated, including the new body:

- Click on the button "Try it out", it allows you to fill the parameters and directly interact with the API:

- Then click on the "Execute" button, the user interface will communicate with your API, send the parameters, get the results and show them on the screen:

### Alternative API docs upgrade[¶](#alternative-api-docs-upgrade)

And now, go to [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

- The alternative documentation will also reflect the new query parameter and body:

### Recap[¶](#recap)

In summary, you declare **once** the types of parameters, body, etc. as function parameters.

You do that with standard modern Python types.

You don't have to learn a new syntax, the methods or classes of a specific library, etc.

Just standard **Python**.

For example, for an `int`

:

```
item_id: int
```


or for a more complex `Item`

model:

```
item: Item
```


...and with that single declaration you get:

- Editor support, including:
- Completion.
- Type checks.

- Validation of data:
- Automatic and clear errors when the data is invalid.
- Validation even for deeply nested JSON objects.

- Conversion of input data: coming from the network to Python data and types. Reading from:
- JSON.
- Path parameters.
- Query parameters.
- Cookies.
- Headers.
- Forms.
- Files.

- Conversion of output data: converting from Python data and types to network data (as JSON):
- Convert Python types (
`str`

,`int`

,`float`

,`bool`

,`list`

, etc). `datetime`

objects.`UUID`

objects.- Database models.
- ...and many more.

- Convert Python types (
- Automatic interactive API documentation, including 2 alternative user interfaces:
- Swagger UI.
- ReDoc.


Coming back to the previous code example, **FastAPI** will:

- Validate that there is an
`item_id`

in the path for`GET`

and`PUT`

requests. - Validate that the
`item_id`

is of type`int`

for`GET`

and`PUT`

requests.- If it is not, the client will see a useful, clear error.

- Check if there is an optional query parameter named
`q`

(as in`http://127.0.0.1:8000/items/foo?q=somequery`

) for`GET`

requests.- As the
`q`

parameter is declared with`= None`

, it is optional. - Without the
`None`

it would be required (as is the body in the case with`PUT`

).

- As the
- For
`PUT`

requests to`/items/{item_id}`

, read the body as JSON:- Check that it has a required attribute
`name`

that should be a`str`

. - Check that it has a required attribute
`price`

that has to be a`float`

. - Check that it has an optional attribute
`is_offer`

, that should be a`bool`

, if present. - All this would also work for deeply nested JSON objects.

- Check that it has a required attribute
- Convert from and to JSON automatically.
- Document everything with OpenAPI, that can be used by:
- Interactive documentation systems.
- Automatic client code generation systems, for many languages.

- Provide 2 interactive documentation web interfaces directly.

We just scratched the surface, but you already get the idea of how it all works.

Try changing the line with:

```
return {"item_name": item.name, "item_id": item_id}
```


...from:

```
... "item_name": item.name ...
```


...to:

```
... "item_price": item.price ...
```


...and see how your editor will auto-complete the attributes and know their types:

For a more complete example including more features, see the [Tutorial - User Guide](https://fastapi.tiangolo.com/tutorial/).

**Spoiler alert**: the tutorial - user guide includes:

- Declaration of
**parameters**from other different places as:**headers**,**cookies**,**form fields**and**files**. - How to set
**validation constraints**as`maximum_length`

or`regex`

. - A very powerful and easy to use
**Dependency Injection**system. - Security and authentication, including support for
**OAuth2**with**JWT tokens**and**HTTP Basic**auth. - More advanced (but equally easy) techniques for declaring
**deeply nested JSON models**(thanks to Pydantic). **GraphQL**integration with[Strawberry](https://strawberry.rocks)and other libraries.- Many extra features (thanks to Starlette) as:
**WebSockets**- extremely easy tests based on HTTPX and
`pytest`

**CORS****Cookie Sessions**- ...and more.


### Deploy your app (optional)[¶](#deploy-your-app-optional)

You can optionally deploy your FastAPI app to [FastAPI Cloud](https://fastapicloud.com), go and join the waiting list if you haven't. 🚀

If you already have a **FastAPI Cloud** account (we invited you from the waiting list 😉), you can deploy your application with one command.

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


That's it! Now you can access your app at that URL. ✨

#### About FastAPI Cloud[¶](#about-fastapi-cloud)

** FastAPI Cloud** is built by the same author and team behind

**FastAPI**.

It streamlines the process of **building**, **deploying**, and **accessing** an API with minimal effort.

It brings the same **developer experience** of building apps with FastAPI to **deploying** them to the cloud. 🎉

FastAPI Cloud is the primary sponsor and funding provider for the *FastAPI and friends* open source projects. ✨

#### Deploy to other cloud providers[¶](#deploy-to-other-cloud-providers)

FastAPI is open source and based on standards. You can deploy FastAPI apps to any cloud provider you choose.

Follow your cloud provider's guides to deploy FastAPI apps with them. 🤓

## Performance[¶](#performance)

Independent TechEmpower benchmarks show **FastAPI** applications running under Uvicorn as [one of the fastest Python frameworks available](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7), only below Starlette and Uvicorn themselves (used internally by FastAPI). (*)

To understand more about it, see the section [Benchmarks](https://fastapi.tiangolo.com/benchmarks/).

## Dependencies[¶](#dependencies)

FastAPI depends on Pydantic and Starlette.

`standard`

Dependencies[¶](#standard-dependencies)

When you install FastAPI with `pip install "fastapi[standard]"`

it comes with the `standard`

group of optional dependencies:

Used by Pydantic:

- for email validation.`email-validator`


Used by Starlette:

- Required if you want to use the`httpx`

`TestClient`

.- Required if you want to use the default template configuration.`jinja2`

- Required if you want to support form "parsing", with`python-multipart`

`request.form()`

.

Used by FastAPI:

- for the server that loads and serves your application. This includes`uvicorn`

`uvicorn[standard]`

, which includes some dependencies (e.g.`uvloop`

) needed for high performance serving.`fastapi-cli[standard]`

- to provide the`fastapi`

command.- This includes
`fastapi-cloud-cli`

, which allows you to deploy your FastAPI application to[FastAPI Cloud](https://fastapicloud.com).

- This includes

### Without `standard`

Dependencies[¶](#without-standard-dependencies)

If you don't want to include the `standard`

optional dependencies, you can install with `pip install fastapi`

instead of `pip install "fastapi[standard]"`

.

### Without `fastapi-cloud-cli`

[¶](#without-fastapi-cloud-cli)

If you want to install FastAPI with the standard dependencies but without the `fastapi-cloud-cli`

, you can install with `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

.

### Additional Optional Dependencies[¶](#additional-optional-dependencies)

There are some additional dependencies you might want to install.

Additional optional Pydantic dependencies:

- for settings management.`pydantic-settings`

- for extra types to be used with Pydantic.`pydantic-extra-types`


Additional optional FastAPI dependencies:

- Required if you want to use`orjson`

`ORJSONResponse`

.- Required if you want to use`ujson`

`UJSONResponse`

.

## License[¶](#license)

This project is licensed under the terms of the MIT license.

---

## Source: https://fastapi.tiangolo.com/newsletter/

FastAPI

UploadFile

HTTPException

WebSocketException

Depends()

Security()

APIRouter

BackgroundTasks

Request

HTTPConnection

Response

docs

models

jsonable_encoder

StaticFiles

Jinja2Templates

TestClient

---

## Source: https://fastapi.tiangolo.com/de/

# FastAPI[¶](#fastapi)

## 🌐 Übersetzung durch KI und Menschen

Diese Übersetzung wurde von KI erstellt, angeleitet von Menschen. 🤝

Sie könnte Fehler enthalten, etwa Missverständnisse des ursprünglichen Sinns oder unnatürliche Formulierungen, usw. 🤖

Sie können diese Übersetzung verbessern, indem Sie [uns helfen, die KI-LLM besser anzuleiten](https://fastapi.tiangolo.com/de/contributing/#translations).

*FastAPI-Framework, hohe Performanz, leicht zu lernen, schnell zu entwickeln, produktionsreif*

**Dokumentation**: [https://fastapi.tiangolo.com/de](https://fastapi.tiangolo.com/de)

**Quellcode**: [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI ist ein modernes, schnelles (hoch performantes) Webframework zur Erstellung von APIs mit Python auf Basis von Standard-Python-Typhinweisen.

Seine Schlüssel-Merkmale sind:

**Schnell**: Sehr hohe Performanz, auf Augenhöhe mit**NodeJS**und**Go**(dank Starlette und Pydantic).[Eines der schnellsten verfügbaren Python-Frameworks](#performance).**Schnell zu entwickeln**: Erhöhen Sie die Geschwindigkeit bei der Entwicklung von Features um etwa 200 % bis 300 %. ***Weniger Bugs**: Verringern Sie die von Menschen (Entwicklern) verursachten Fehler um etwa 40 %. ***Intuitiv**: Hervorragende Editor-Unterstützung. Code-Vervollständigung überall. Weniger Zeit mit Debuggen verbringen.**Einfach**: So konzipiert, dass es einfach zu benutzen und zu erlernen ist. Weniger Zeit mit dem Lesen von Dokumentation verbringen.**Kurz**: Minimieren Sie die Verdoppelung von Code. Mehrere Features aus jeder Parameterdeklaration. Weniger Bugs.**Robust**: Erhalten Sie produktionsreifen Code. Mit automatischer, interaktiver Dokumentation.**Standards-basiert**: Basierend auf (und vollständig kompatibel mit) den offenen Standards für APIs:[OpenAPI](https://github.com/OAI/OpenAPI-Specification)(früher bekannt als Swagger) und[JSON Schema](https://json-schema.org/).

* Schätzung basierend auf Tests, die von einem internen Entwicklungsteam durchgeführt wurden, das Produktionsanwendungen erstellt.

## Sponsoren[¶](#sponsors)

### Keystone-Sponsor[¶](#keystone-sponsor)

### Gold- und Silber-Sponsoren[¶](#gold-and-silver-sponsors)

## Meinungen[¶](#opinions)

„*[...] Ich verwende FastAPI heutzutage sehr oft. [...] Ich habe tatsächlich vor, es für alle ML-Services meines Teams bei Microsoft zu verwenden. Einige davon werden in das Kernprodukt Windows und einige Office-Produkte integriert.*“

**Microsoft**

[(Ref.)](https://github.com/fastapi/fastapi/pull/26)

„*Wir haben die FastAPI-Bibliothek übernommen, um einen REST-Server zu erstellen, der für Vorhersagen abgefragt werden kann. [für Ludwig]*“

**Uber**

[(Ref.)](https://eng.uber.com/ludwig-v0-2/)

„* Netflix freut sich, die Open-Source-Veröffentlichung unseres Krisenmanagement-Orchestrierung-Frameworks bekannt zu geben: Dispatch! [erstellt mit FastAPI]*“

**Netflix**

[(Ref.)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

„*Ich bin hellauf begeistert von FastAPI. Es macht so viel Spaß!*“

**[Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) Podcast-Host**

[(Ref.)](https://x.com/brianokken/status/1112220079972728832)

„*Ehrlich, was Du gebaut hast, sieht super solide und poliert aus. In vielerlei Hinsicht ist es so, wie ich Hug haben wollte – es ist wirklich inspirierend, jemanden so etwas bauen zu sehen.*“

**[Hug](https://github.com/hugapi/hug)-Autor**

[(Ref.)](https://news.ycombinator.com/item?id=19455465)

„*Wenn Sie ein modernes Framework zum Erstellen von REST-APIs erlernen möchten, schauen Sie sich FastAPI an. [...] Es ist schnell, einfach zu verwenden und leicht zu lernen [...]*“

„*Wir haben zu FastAPI für unsere APIs gewechselt [...] Ich denke, es wird Ihnen gefallen [...]*“

**[Explosion AI](https://explosion.ai)-Gründer – [spaCy](https://spacy.io)-Autoren**

[(Ref.)](https://x.com/_inesmontani/status/1144173225322143744)–

[(Ref.)](https://x.com/honnibal/status/1144031421859655680)

„*Falls irgendjemand eine Produktions-Python-API erstellen möchte, kann ich FastAPI wärmstens empfehlen. Es ist wunderschön konzipiert, einfach zu verwenden und hoch skalierbar; es ist zu einer Schlüsselkomponente unserer API-First-Entwicklungsstrategie geworden und treibt viele Automatisierungen und Services an, wie etwa unseren Virtual TAC Engineer.*“

**Cisco**

[(Ref.)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## FastAPI Mini-Dokumentarfilm[¶](#fastapi-mini-documentary)

Es gibt einen [FastAPI-Mini-Dokumentarfilm](https://www.youtube.com/watch?v=mpR8ngthqiE), veröffentlicht Ende 2025, Sie können ihn online ansehen:

**Typer**, das FastAPI der CLIs[¶](#typer-the-fastapi-of-clis)

Wenn Sie eine CLI-Anwendung für das Terminal erstellen, anstelle einer Web-API, schauen Sie sich [ Typer](https://typer.tiangolo.com/) an.

**Typer** ist die kleine Schwester von FastAPI. Und es soll das **FastAPI der CLIs** sein. ⌨️ 🚀

## Anforderungen[¶](#requirements)

FastAPI steht auf den Schultern von Giganten:

## Installation[¶](#installation)

Erstellen und aktivieren Sie eine [virtuelle Umgebung](https://fastapi.tiangolo.com/de/virtual-environments/) und installieren Sie dann FastAPI:

```
$ pip install "fastapi[standard]"
---> 100%
```


**Hinweis**: Stellen Sie sicher, dass Sie `"fastapi[standard]"`

in Anführungszeichen setzen, damit es in allen Terminals funktioniert.

## Beispiel[¶](#example)

### Erstellung[¶](#create-it)

Erstellen Sie eine Datei `main.py`

mit:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## Oder verwenden Sie `async def`

...

Wenn Ihr Code `async`

/ `await`

verwendet, benutzen Sie `async def`

:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**Hinweis**:

Wenn Sie das nicht kennen, schauen Sie sich den Abschnitt *„In Eile?“* über [ async und await in der Dokumentation](https://fastapi.tiangolo.com/de/async/#in-a-hurry) an.


### Starten[¶](#run-it)

Starten Sie den Server mit:

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


## Über den Befehl `fastapi dev`

...

Der Befehl `fastapi dev`

liest Ihre `main.py`

-Datei, erkennt die **FastAPI**-App darin und startet einen Server mit [Uvicorn](https://www.uvicorn.dev).

Standardmäßig wird `fastapi dev`

mit aktiviertem Auto-Reload für die lokale Entwicklung gestartet.

Sie können mehr darüber in der [FastAPI CLI Dokumentation](https://fastapi.tiangolo.com/de/fastapi-cli/) lesen.

### Es testen[¶](#check-it)

Öffnen Sie Ihren Browser unter [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery).

Sie sehen die JSON-Response als:

```
{"item_id": 5, "q": "somequery"}
```


Sie haben bereits eine API erstellt, welche:

- HTTP-Requests auf den
*Pfaden*`/`

und`/items/{item_id}`

entgegennimmt. - Beide
*Pfade*nehmen`GET`

*Operationen*(auch bekannt als HTTP-*Methoden*) entgegen. - Der
*Pfad*`/items/{item_id}`

hat einen*Pfad-Parameter*`item_id`

, der ein`int`

sein sollte. - Der
*Pfad*`/items/{item_id}`

hat einen optionalen`str`

-*Query-Parameter*`q`

.

### Interaktive API-Dokumentation[¶](#interactive-api-docs)

Gehen Sie nun auf [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

Sie sehen die automatische interaktive API-Dokumentation (bereitgestellt von [Swagger UI](https://github.com/swagger-api/swagger-ui)):

### Alternative API-Dokumentation[¶](#alternative-api-docs)

Und jetzt gehen Sie auf [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

Sie sehen die alternative automatische Dokumentation (bereitgestellt von [ReDoc](https://github.com/Rebilly/ReDoc)):

## Beispielaktualisierung[¶](#example-upgrade)

Ändern Sie jetzt die Datei `main.py`

, um den Body eines `PUT`

-Requests zu empfangen.

Deklarieren Sie den Body mit Standard-Python-Typen, dank Pydantic.

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


Der `fastapi dev`

-Server sollte automatisch neu laden.

### Interaktive API-Dokumentation aktualisieren[¶](#interactive-api-docs-upgrade)

Gehen Sie jetzt auf [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

- Die interaktive API-Dokumentation wird automatisch aktualisiert, einschließlich des neuen Bodys:

- Klicken Sie auf den Button „Try it out“, damit können Sie die Parameter ausfüllen und direkt mit der API interagieren:

- Klicken Sie dann auf den Button „Execute“, die Benutzeroberfläche wird mit Ihrer API kommunizieren, die Parameter senden, die Ergebnisse erhalten und sie auf dem Bildschirm anzeigen:

### Alternative API-Dokumentation aktualisieren[¶](#alternative-api-docs-upgrade)

Und jetzt gehen Sie auf [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

- Die alternative Dokumentation wird ebenfalls den neuen Query-Parameter und Body widerspiegeln:

### Zusammenfassung[¶](#recap)

Zusammengefasst deklarieren Sie **einmal** die Typen von Parametern, Body, usw. als Funktionsparameter.

Das machen Sie mit modernen Standard-Python-Typen.

Sie müssen keine neue Syntax, Methoden oder Klassen einer bestimmten Bibliothek usw. lernen.

Nur Standard-**Python**.

Zum Beispiel für ein `int`

:

```
item_id: int
```


oder für ein komplexeres `Item`

-Modell:

```
item: Item
```


... und mit dieser einen Deklaration erhalten Sie:

- Editor-Unterstützung, einschließlich:
- Vervollständigung.
- Typprüfungen.

- Validierung von Daten:
- Automatische und eindeutige Fehler, wenn die Daten ungültig sind.
- Validierung sogar für tief verschachtelte JSON-Objekte.

- Konvertierung von Eingabedaten: Aus dem Netzwerk kommend, zu Python-Daten und -Typen. Lesen von:
- JSON.
- Pfad-Parametern.
- Query-Parametern.
- Cookies.
- Headern.
- Formularen.
- Dateien.

- Konvertierung von Ausgabedaten: Konvertierung von Python-Daten und -Typen zu Netzwerkdaten (als JSON):
- Konvertieren von Python-Typen (
`str`

,`int`

,`float`

,`bool`

,`list`

, usw.). `datetime`

-Objekte.`UUID`

-Objekte.- Datenbankmodelle.
- ... und viele mehr.

- Konvertieren von Python-Typen (
- Automatische interaktive API-Dokumentation, einschließlich zwei alternativer Benutzeroberflächen:
- Swagger UI.
- ReDoc.


Um auf das vorherige Codebeispiel zurückzukommen, **FastAPI** wird:

- Validieren, dass es eine
`item_id`

im Pfad für`GET`

- und`PUT`

-Requests gibt. - Validieren, ob die
`item_id`

vom Typ`int`

für`GET`

- und`PUT`

-Requests ist.- Falls nicht, sieht der Client einen hilfreichen, klaren Fehler.

- Prüfen, ob es einen optionalen Query-Parameter namens
`q`

(wie in`http://127.0.0.1:8000/items/foo?q=somequery`

) für`GET`

-Requests gibt.- Da der
`q`

-Parameter mit`= None`

deklariert ist, ist er optional. - Ohne das
`None`

wäre er erforderlich (wie der Body im Fall von`PUT`

).

- Da der
- Bei
`PUT`

-Requests an`/items/{item_id}`

den Body als JSON lesen:- Prüfen, ob er ein erforderliches Attribut
`name`

hat, das ein`str`

sein muss. - Prüfen, ob er ein erforderliches Attribut
`price`

hat, das ein`float`

sein muss. - Prüfen, ob er ein optionales Attribut
`is_offer`

hat, das ein`bool`

sein muss, falls vorhanden. - All dies würde auch für tief verschachtelte JSON-Objekte funktionieren.

- Prüfen, ob er ein erforderliches Attribut
- Automatisch von und nach JSON konvertieren.
- Alles mit OpenAPI dokumentieren, welches verwendet werden kann von:
- Interaktiven Dokumentationssystemen.
- Automatisch Client-Code generierenden Systemen für viele Sprachen.

- Zwei interaktive Dokumentations-Weboberflächen direkt bereitstellen.

Wir haben nur an der Oberfläche gekratzt, aber Sie bekommen schon eine Vorstellung davon, wie das Ganze funktioniert.

Versuchen Sie, diese Zeile zu ändern:

```
return {"item_name": item.name, "item_id": item_id}
```


... von:

```
... "item_name": item.name ...
```


... zu:

```
... "item_price": item.price ...
```


... und sehen Sie, wie Ihr Editor die Attribute automatisch vervollständigt und ihre Typen kennt:

Für ein vollständigeres Beispiel, mit weiteren Funktionen, siehe das [Tutorial – Benutzerhandbuch](https://fastapi.tiangolo.com/de/tutorial/).

**Spoiler-Alarm**: Das Tutorial – Benutzerhandbuch enthält:

- Deklaration von
**Parametern**von anderen verschiedenen Stellen wie:**Header**,**Cookies**,**Formularfelder**und**Dateien**. - Wie man
**Validierungs-Constraints**wie`maximum_length`

oder`regex`

setzt. - Ein sehr leistungsfähiges und einfach zu bedienendes System für
**Dependency Injection**. - Sicherheit und Authentifizierung, einschließlich Unterstützung für
**OAuth2**mit**JWT-Tokens**und**HTTP Basic**Authentifizierung. - Fortgeschrittenere (aber ebenso einfache) Techniken zur Deklaration
**tief verschachtelter JSON-Modelle**(dank Pydantic). **GraphQL**-Integration mit[Strawberry](https://strawberry.rocks)und anderen Bibliotheken.- Viele zusätzliche Features (dank Starlette) wie:
**WebSockets**- extrem einfache Tests auf Basis von HTTPX und
`pytest`

**CORS****Cookie-Sessions**- ... und mehr.


### Ihre App deployen (optional)[¶](#deploy-your-app-optional)

Optional können Sie Ihre FastAPI-App in die [FastAPI Cloud](https://fastapicloud.com) deployen, gehen Sie und treten Sie der Warteliste bei, falls noch nicht geschehen. 🚀

Wenn Sie bereits ein **FastAPI Cloud**-Konto haben (wir haben Sie von der Warteliste eingeladen 😉), können Sie Ihre Anwendung mit einem einzigen Befehl deployen.

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


Das war’s! Jetzt können Sie unter dieser URL auf Ihre App zugreifen. ✨

#### Über FastAPI Cloud[¶](#about-fastapi-cloud)

** FastAPI Cloud** wird vom selben Autor und Team hinter

**FastAPI**entwickelt.

Es vereinfacht den Prozess des **Erstellens**, **Deployens** und **Zugreifens** auf eine API mit minimalem Aufwand.

Es bringt die gleiche **Developer-Experience** beim Erstellen von Apps mit FastAPI auch zum **Deployment** in der Cloud. 🎉

FastAPI Cloud ist der Hauptsponsor und Finanzierer der *FastAPI and friends* Open-Source-Projekte. ✨

#### Bei anderen Cloudanbietern deployen[¶](#deploy-to-other-cloud-providers)

FastAPI ist Open Source und basiert auf Standards. Sie können FastAPI-Apps bei jedem Cloudanbieter Ihrer Wahl deployen.

Folgen Sie den Anleitungen Ihres Cloudanbieters, um FastAPI-Apps dort bereitzustellen. 🤓

## Performanz[¶](#performance)

Unabhängige TechEmpower-Benchmarks zeigen **FastAPI**-Anwendungen, die unter Uvicorn laufen, als [eines der schnellsten verfügbaren Python-Frameworks](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7), nur hinter Starlette und Uvicorn selbst (intern von FastAPI verwendet). (*)

Um mehr darüber zu erfahren, siehe den Abschnitt [Benchmarks](https://fastapi.tiangolo.com/de/benchmarks/).

## Abhängigkeiten[¶](#dependencies)

FastAPI hängt von Pydantic und Starlette ab.

`standard`

-Abhängigkeiten[¶](#standard-dependencies)

Wenn Sie FastAPI mit `pip install "fastapi[standard]"`

installieren, kommt es mit der `standard`

-Gruppe optionaler Abhängigkeiten:

Verwendet von Pydantic:

– für E-Mail-Validierung.`email-validator`


Verwendet von Starlette:

– erforderlich, wenn Sie den`httpx`

`TestClient`

verwenden möchten.– erforderlich, wenn Sie die Default-Template-Konfiguration verwenden möchten.`jinja2`

– erforderlich, wenn Sie Formulare mittels`python-multipart`

`request.form()`

„parsen“ möchten.

Verwendet von FastAPI:

– für den Server, der Ihre Anwendung lädt und bereitstellt. Dies umfasst`uvicorn`

`uvicorn[standard]`

, das einige Abhängigkeiten (z. B.`uvloop`

) beinhaltet, die für eine Bereitstellung mit hoher Performanz benötigt werden.`fastapi-cli[standard]`

– um den`fastapi`

-Befehl bereitzustellen.- Dies beinhaltet
`fastapi-cloud-cli`

, das es Ihnen ermöglicht, Ihre FastAPI-Anwendung auf[FastAPI Cloud](https://fastapicloud.com)bereitzustellen.

- Dies beinhaltet

### Ohne `standard`

-Abhängigkeiten[¶](#without-standard-dependencies)

Wenn Sie die `standard`

optionalen Abhängigkeiten nicht einschließen möchten, können Sie mit `pip install fastapi`

statt `pip install "fastapi[standard]"`

installieren.

### Ohne `fastapi-cloud-cli`

[¶](#without-fastapi-cloud-cli)

Wenn Sie FastAPI mit den Standardabhängigkeiten, aber ohne das `fastapi-cloud-cli`

installieren möchten, können Sie mit `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

installieren.

### Zusätzliche optionale Abhängigkeiten[¶](#additional-optional-dependencies)

Es gibt einige zusätzliche Abhängigkeiten, die Sie installieren möchten.

Zusätzliche optionale Pydantic-Abhängigkeiten:

– für die Verwaltung von Einstellungen.`pydantic-settings`

– für zusätzliche Typen zur Verwendung mit Pydantic.`pydantic-extra-types`


Zusätzliche optionale FastAPI-Abhängigkeiten:

– erforderlich, wenn Sie`orjson`

`ORJSONResponse`

verwenden möchten.– erforderlich, wenn Sie`ujson`

`UJSONResponse`

verwenden möchten.

## Lizenz[¶](#license)

Dieses Projekt ist unter den Bedingungen der MIT-Lizenz lizenziert.

---

## Source: https://fastapi.tiangolo.com/es/

# FastAPI[¶](#fastapi)

## 🌐 Traducción por IA y humanos

Esta traducción fue hecha por IA guiada por humanos. 🤝

Podría tener errores al interpretar el significado original, o sonar poco natural, etc. 🤖

Puedes mejorar esta traducción [ayudándonos a guiar mejor al LLM de IA](https://fastapi.tiangolo.com/es/contributing/#translations).

*FastAPI framework, alto rendimiento, fácil de aprender, rápido de programar, listo para producción*

**Documentación**: [https://fastapi.tiangolo.com](https://fastapi.tiangolo.com/es)

**Código Fuente**: [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI es un framework web moderno, rápido (de alto rendimiento), para construir APIs con Python basado en las anotaciones de tipos estándar de Python.

Las funcionalidades clave son:

**Rápido**: Muy alto rendimiento, a la par con**NodeJS**y**Go**(gracias a Starlette y Pydantic).[Uno de los frameworks Python más rápidos disponibles](#performance).**Rápido de programar**: Aumenta la velocidad para desarrollar funcionalidades en aproximadamente un 200% a 300%. ***Menos bugs**: Reduce en aproximadamente un 40% los errores inducidos por humanos (desarrolladores). ***Intuitivo**: Gran soporte para editores. Autocompletado en todas partes. Menos tiempo depurando.**Fácil**: Diseñado para ser fácil de usar y aprender. Menos tiempo leyendo documentación.**Corto**: Minimiza la duplicación de código. Múltiples funcionalidades desde cada declaración de parámetro. Menos bugs.**Robusto**: Obtén código listo para producción. Con documentación interactiva automática.**Basado en estándares**: Basado (y completamente compatible) con los estándares abiertos para APIs:[OpenAPI](https://github.com/OAI/OpenAPI-Specification)(anteriormente conocido como Swagger) y[JSON Schema](https://json-schema.org/).

* estimación basada en pruebas con un equipo de desarrollo interno, construyendo aplicaciones de producción.

## Sponsors[¶](#sponsors)

### Sponsor Keystone[¶](#keystone-sponsor)

### Sponsors Oro y Plata[¶](#gold-and-silver-sponsors)

## Opiniones[¶](#opinions)

"*[...] Estoy usando FastAPI un montón estos días. [...] De hecho, estoy planeando usarlo para todos los servicios de ML de mi equipo en Microsoft. Algunos de ellos se están integrando en el núcleo del producto Windows y algunos productos de Office.*"

**Microsoft**

[(ref)](https://github.com/fastapi/fastapi/pull/26)

"*Adoptamos el paquete FastAPI para crear un servidor REST que pueda ser consultado para obtener predicciones. [para Ludwig]*"

**Uber**

[(ref)](https://eng.uber.com/ludwig-v0-2/)

"* Netflix se complace en anunciar el lanzamiento de código abierto de nuestro framework de orquestación de gestión de crisis: Dispatch! [construido con FastAPI]*"

**Netflix**

[(ref)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

"*Estoy súper emocionado con FastAPI. ¡Es tan divertido!*"

**[Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) host del podcast**

[(ref)](https://x.com/brianokken/status/1112220079972728832)

"*Honestamente, lo que has construido parece súper sólido y pulido. En muchos aspectos, es lo que quería que Hug fuera; es realmente inspirador ver a alguien construir eso.*"

**[Hug](https://github.com/hugapi/hug) creador**

[(ref)](https://news.ycombinator.com/item?id=19455465)

"*Si estás buscando aprender un framework moderno para construir APIs REST, échale un vistazo a FastAPI [...] Es rápido, fácil de usar y fácil de aprender [...]*"

"*Nos hemos cambiado a FastAPI para nuestras APIs [...] Creo que te gustará [...]*"

**[fundadores de Explosion AI](https://explosion.ai) - [creadores de spaCy](https://spacy.io)**

[(ref)](https://x.com/_inesmontani/status/1144173225322143744)-

[(ref)](https://x.com/honnibal/status/1144031421859655680)

"*Si alguien está buscando construir una API de Python para producción, altamente recomendaría FastAPI. Está hermosamente diseñado, es simple de usar y altamente escalable, se ha convertido en un componente clave en nuestra estrategia de desarrollo API primero y está impulsando muchas automatizaciones y servicios como nuestro Ingeniero Virtual TAC.*"

**Cisco**

[(ref)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## Mini documental de FastAPI[¶](#fastapi-mini-documentary)

Hay un [mini documental de FastAPI](https://www.youtube.com/watch?v=mpR8ngthqiE) lanzado a finales de 2025, puedes verlo online:

**Typer**, el FastAPI de las CLIs[¶](#typer-the-fastapi-of-clis)

Si estás construyendo una aplicación de CLI para ser usada en la terminal en lugar de una API web, revisa [ Typer](https://typer.tiangolo.com/).

**Typer** es el hermano pequeño de FastAPI. Y está destinado a ser el **FastAPI de las CLIs**. ⌨️ 🚀

## Requisitos[¶](#requirements)

FastAPI se apoya en hombros de gigantes:

## Instalación[¶](#installation)

Crea y activa un [entorno virtual](https://fastapi.tiangolo.com/es/virtual-environments/) y luego instala FastAPI:

```
$ pip install "fastapi[standard]"
---> 100%
```


**Nota**: Asegúrate de poner `"fastapi[standard]"`

entre comillas para asegurar que funcione en todas las terminales.

## Ejemplo[¶](#example)

### Créalo[¶](#create-it)

Crea un archivo `main.py`

con:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## O usa `async def`

...

Si tu código usa `async`

/ `await`

, usa `async def`

:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**Nota**:

Si no lo sabes, revisa la sección *"¿Con prisa?"* sobre [ async y await en la documentación](https://fastapi.tiangolo.com/es/async/#in-a-hurry).


### Córrelo[¶](#run-it)

Corre el servidor con:

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


## Acerca del comando `fastapi dev`

...

El comando `fastapi dev`

lee tu archivo `main.py`

automáticamente, detecta la app **FastAPI** en él y arranca un servidor usando [Uvicorn](https://www.uvicorn.dev).

Por defecto, `fastapi dev`

comenzará con auto-recarga habilitada para el desarrollo local.

Puedes leer más sobre esto en la [documentación del CLI de FastAPI](https://fastapi.tiangolo.com/es/fastapi-cli/).

### Revísalo[¶](#check-it)

Abre tu navegador en [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery).

Verás el response JSON como:

```
{"item_id": 5, "q": "somequery"}
```


Ya creaste una API que:

- Recibe requests HTTP en los
*paths*`/`

y`/items/{item_id}`

. - Ambos
*paths*toman*operaciones*`GET`

(también conocidas como métodos HTTP). - El
*path*`/items/{item_id}`

tiene un*parámetro de path*`item_id`

que debe ser un`int`

. - El
*path*`/items/{item_id}`

tiene un*parámetro de query*`q`

opcional que es un`str`

.

### Documentación interactiva de la API[¶](#interactive-api-docs)

Ahora ve a [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

Verás la documentación interactiva automática de la API (proporcionada por [Swagger UI](https://github.com/swagger-api/swagger-ui)):

### Documentación alternativa de la API[¶](#alternative-api-docs)

Y ahora, ve a [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

Verás la documentación alternativa automática (proporcionada por [ReDoc](https://github.com/Rebilly/ReDoc)):

## Actualización del ejemplo[¶](#example-upgrade)

Ahora modifica el archivo `main.py`

para recibir un body desde un request `PUT`

.

Declara el body usando tipos estándar de Python, gracias a Pydantic.

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


El servidor `fastapi dev`

debería recargarse automáticamente.

### Actualización de la documentación interactiva de la API[¶](#interactive-api-docs-upgrade)

Ahora ve a [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

- La documentación interactiva de la API se actualizará automáticamente, incluyendo el nuevo body:

- Haz clic en el botón "Try it out", te permite llenar los parámetros e interactuar directamente con la API:

- Luego haz clic en el botón "Execute", la interfaz de usuario se comunicará con tu API, enviará los parámetros, obtendrá los resultados y los mostrará en la pantalla:

### Actualización de la documentación alternativa de la API[¶](#alternative-api-docs-upgrade)

Y ahora, ve a [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

- La documentación alternativa también reflejará el nuevo parámetro de query y body:

### Resumen[¶](#recap)

En resumen, declaras **una vez** los tipos de parámetros, body, etc. como parámetros de función.

Lo haces con tipos estándar modernos de Python.

No tienes que aprender una nueva sintaxis, los métodos o clases de un paquete específico, etc.

Solo **Python** estándar.

Por ejemplo, para un `int`

:

```
item_id: int
```


o para un modelo `Item`

más complejo:

```
item: Item
```


...y con esa única declaración obtienes:

- Soporte para editores, incluyendo:
- Autocompletado.
- Chequeo de tipos.

- Validación de datos:
- Errores automáticos y claros cuando los datos son inválidos.
- Validación incluso para objetos JSON profundamente anidados.

- Conversión de datos de entrada: de la red a los datos y tipos de Python. Leyendo desde:
- JSON.
- Parámetros de path.
- Parámetros de query.
- Cookies.
- Headers.
- Formularios.
- Archivos.

- Conversión de datos de salida: convirtiendo de datos y tipos de Python a datos de red (como JSON):
- Convertir tipos de Python (
`str`

,`int`

,`float`

,`bool`

,`list`

, etc). - Objetos
`datetime`

. - Objetos
`UUID`

. - Modelos de base de datos.
- ...y muchos más.

- Convertir tipos de Python (
- Documentación interactiva automática de la API, incluyendo 2 interfaces de usuario alternativas:
- Swagger UI.
- ReDoc.


Volviendo al ejemplo de código anterior, **FastAPI**:

- Validará que haya un
`item_id`

en el path para requests`GET`

y`PUT`

. - Validará que el
`item_id`

sea del tipo`int`

para requests`GET`

y`PUT`

.- Si no lo es, el cliente verá un error útil y claro.

- Revisa si hay un parámetro de query opcional llamado
`q`

(como en`http://127.0.0.1:8000/items/foo?q=somequery`

) para requests`GET`

.- Como el parámetro
`q`

está declarado con`= None`

, es opcional. - Sin el
`None`

sería requerido (como lo es el body en el caso con`PUT`

).

- Como el parámetro
- Para requests
`PUT`

a`/items/{item_id}`

, leerá el body como JSON:- Revisa que tiene un atributo requerido
`name`

que debe ser un`str`

. - Revisa que tiene un atributo requerido
`price`

que debe ser un`float`

. - Revisa que tiene un atributo opcional
`is_offer`

, que debe ser un`bool`

, si está presente. - Todo esto también funcionaría para objetos JSON profundamente anidados.

- Revisa que tiene un atributo requerido
- Convertirá de y a JSON automáticamente.
- Documentará todo con OpenAPI, que puede ser usado por:
- Sistemas de documentación interactiva.
- Sistemas de generación automática de código cliente, para muchos lenguajes.

- Proporcionará 2 interfaces web de documentación interactiva directamente.

Solo tocamos los conceptos básicos, pero ya te haces una idea de cómo funciona todo.

Intenta cambiar la línea con:

```
return {"item_name": item.name, "item_id": item_id}
```


...desde:

```
... "item_name": item.name ...
```


...a:

```
... "item_price": item.price ...
```


...y observa cómo tu editor autocompleta los atributos y conoce sus tipos:

Para un ejemplo más completo incluyendo más funcionalidades, ve al [Tutorial - Guía del Usuario](https://fastapi.tiangolo.com/es/tutorial/).

**Alerta de spoilers**: el tutorial - guía del usuario incluye:

- Declaración de
**parámetros**desde otros lugares diferentes como:**headers**,**cookies**,**campos de formulario**y**archivos**. - Cómo establecer
**restricciones de validación**como`maximum_length`

o`regex`

. - Un sistema de
**Inyección de Dependencias**muy poderoso y fácil de usar. - Seguridad y autenticación, incluyendo soporte para
**OAuth2**con**tokens JWT**y autenticación**HTTP Basic**. - Técnicas más avanzadas (pero igualmente fáciles) para declarar
**modelos JSON profundamente anidados**(gracias a Pydantic). - Integración con
**GraphQL**usando[Strawberry](https://strawberry.rocks)y otros paquetes. - Muchas funcionalidades extra (gracias a Starlette) como:
**WebSockets**- pruebas extremadamente fáciles basadas en HTTPX y
`pytest`

**CORS****Sesiones de Cookies**- ...y más.


### Despliega tu app (opcional)[¶](#deploy-your-app-optional)

Opcionalmente puedes desplegar tu app de FastAPI en [FastAPI Cloud](https://fastapicloud.com), ve y únete a la lista de espera si no lo has hecho. 🚀

Si ya tienes una cuenta de **FastAPI Cloud** (te invitamos desde la lista de espera 😉), puedes desplegar tu aplicación con un solo comando.

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


¡Eso es todo! Ahora puedes acceder a tu app en esa URL. ✨

#### Acerca de FastAPI Cloud[¶](#about-fastapi-cloud)

** FastAPI Cloud** está construido por el mismo autor y equipo detrás de

**FastAPI**.

Optimiza el proceso de **construir**, **desplegar** y **acceder** a una API con un esfuerzo mínimo.

Trae la misma **experiencia de desarrollador** de construir apps con FastAPI a **desplegarlas** en la nube. 🎉

FastAPI Cloud es el sponsor principal y proveedor de financiamiento para los proyectos open source *FastAPI and friends*. ✨

#### Despliega en otros proveedores de cloud[¶](#deploy-to-other-cloud-providers)

FastAPI es open source y está basado en estándares. Puedes desplegar apps de FastAPI en cualquier proveedor de cloud que elijas.

Sigue las guías de tu proveedor de cloud para desplegar apps de FastAPI con ellos. 🤓

## Rendimiento[¶](#performance)

Benchmarks independientes de TechEmpower muestran aplicaciones **FastAPI** ejecutándose bajo Uvicorn como [uno de los frameworks Python más rápidos disponibles](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7), solo por debajo de Starlette y Uvicorn (usados internamente por FastAPI). (*)

Para entender más sobre esto, ve la sección [Benchmarks](https://fastapi.tiangolo.com/es/benchmarks/).

## Dependencias[¶](#dependencies)

FastAPI depende de Pydantic y Starlette.

### Dependencias `standard`

[¶](#standard-dependencies)

Cuando instalas FastAPI con `pip install "fastapi[standard]"`

viene con el grupo `standard`

de dependencias opcionales:

Usadas por Pydantic:

- para validación de correos electrónicos.`email-validator`


Usadas por Starlette:

- Requerido si deseas usar el`httpx`

`TestClient`

.- Requerido si deseas usar la configuración de plantilla por defecto.`jinja2`

- Requerido si deseas soportar form "parsing", con`python-multipart`

`request.form()`

.

Usadas por FastAPI:

- para el servidor que carga y sirve tu aplicación. Esto incluye`uvicorn`

`uvicorn[standard]`

, que incluye algunas dependencias (por ejemplo,`uvloop`

) necesarias para servir con alto rendimiento.`fastapi-cli[standard]`

- para proporcionar el comando`fastapi`

.- Esto incluye
`fastapi-cloud-cli`

, que te permite desplegar tu aplicación de FastAPI en[FastAPI Cloud](https://fastapicloud.com).

- Esto incluye

### Sin Dependencias `standard`

[¶](#without-standard-dependencies)

Si no deseas incluir las dependencias opcionales `standard`

, puedes instalar con `pip install fastapi`

en lugar de `pip install "fastapi[standard]"`

.

### Sin `fastapi-cloud-cli`

[¶](#without-fastapi-cloud-cli)

Si quieres instalar FastAPI con las dependencias standard pero sin `fastapi-cloud-cli`

, puedes instalar con `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

.

### Dependencias Opcionales Adicionales[¶](#additional-optional-dependencies)

Existen algunas dependencias adicionales que podrías querer instalar.

Dependencias opcionales adicionales de Pydantic:

- para la gestión de configuraciones.`pydantic-settings`

- para tipos extra para ser usados con Pydantic.`pydantic-extra-types`


Dependencias opcionales adicionales de FastAPI:

## Licencia[¶](#license)

Este proyecto tiene licencia bajo los términos de la licencia MIT.

---

## Source: https://fastapi.tiangolo.com/fr/

# FastAPI[¶](#fastapi)

## 🌐 Traduction par IA et humains

Cette traduction a été réalisée par une IA guidée par des humains. 🤝

Elle peut contenir des erreurs d'interprétation du sens original, ou paraître peu naturelle, etc. 🤖

Vous pouvez améliorer cette traduction en [nous aidant à mieux guider le LLM d'IA](https://fastapi.tiangolo.com/fr/contributing/#translations).

*Framework FastAPI, haute performance, facile à apprendre, rapide à coder, prêt pour la production*

**Documentation** : [https://fastapi.tiangolo.com/fr](https://fastapi.tiangolo.com/fr)

**Code Source** : [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI est un framework web moderne et rapide (haute performance) pour la création d'API avec Python, basé sur les annotations de type standard de Python.

Les principales fonctionnalités sont :

**Rapide**: très hautes performances, au niveau de**NodeJS**et**Go**(grâce à Starlette et Pydantic).[L'un des frameworks Python les plus rapides](#performance).**Rapide à coder**: augmente la vitesse de développement des fonctionnalités d'environ 200 % à 300 %. ***Moins de bugs**: réduit d'environ 40 % les erreurs induites par le développeur. ***Intuitif**: excellente compatibilité avec les éditeurs. Autocomplétion partout. Moins de temps passé à déboguer.**Facile**: conçu pour être facile à utiliser et à apprendre. Moins de temps passé à lire les documents.**Concis**: diminue la duplication de code. Plusieurs fonctionnalités à partir de chaque déclaration de paramètre. Moins de bugs.**Robuste**: obtenez un code prêt pour la production. Avec une documentation interactive automatique.**Basé sur des normes**: basé sur (et entièrement compatible avec) les standards ouverts pour les APIs :[OpenAPI](https://github.com/OAI/OpenAPI-Specification)(précédemment connu sous le nom de Swagger) et[JSON Schema](https://json-schema.org/).

* estimation basée sur des tests d'une équipe de développement interne, construisant des applications de production.

## Sponsors[¶](#sponsors)

### Sponsor clé de voûte[¶](#keystone-sponsor)

### Sponsors Or et Argent[¶](#gold-and-silver-sponsors)

## Opinions[¶](#opinions)

« *[...] J'utilise beaucoup FastAPI ces derniers temps. [...] Je prévois de l'utiliser dans mon équipe pour tous les services de ML chez Microsoft. Certains d'entre eux sont intégrés au cœur de Windows et à certains produits Office.* »

**Microsoft**

[(ref)](https://github.com/fastapi/fastapi/pull/26)

« *Nous avons adopté la bibliothèque FastAPI pour créer un serveur REST qui peut être interrogé pour obtenir des prédictions. [pour Ludwig]* »

**Uber**

[(ref)](https://eng.uber.com/ludwig-v0-2/)

« * Netflix est heureux d'annoncer la publication en open source de notre framework d'orchestration de gestion de crise : Dispatch ! [construit avec FastAPI]* »

**Netflix**

[(ref)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

« *Je suis plus qu'enthousiaste à propos de FastAPI. C'est tellement fun !* »

**Animateur du podcast [Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855)**

[(ref)](https://x.com/brianokken/status/1112220079972728832)

« *Honnêtement, ce que vous avez construit a l'air super solide et soigné. À bien des égards, c'est ce que je voulais que Hug soit — c'est vraiment inspirant de voir quelqu'un construire ça.* »

**Créateur de [Hug](https://github.com/hugapi/hug)**

[(ref)](https://news.ycombinator.com/item?id=19455465)

« *Si vous cherchez à apprendre un framework moderne pour créer des APIs REST, regardez FastAPI [...] C'est rapide, facile à utiliser et facile à apprendre [...]* »

« *Nous sommes passés à FastAPI pour nos APIs [...] Je pense que vous l'aimerez [...]* »

**Fondateurs de [Explosion AI](https://explosion.ai) - Créateurs de [spaCy](https://spacy.io)**

[(ref)](https://x.com/_inesmontani/status/1144173225322143744)-

[(ref)](https://x.com/honnibal/status/1144031421859655680)

« *Si quelqu'un cherche à construire une API Python de production, je recommande vivement FastAPI. Il est magnifiquement conçu, simple à utiliser et hautement scalable. Il est devenu un composant clé de notre stratégie de développement API-first et alimente de nombreuses automatisations et services tels que notre ingénieur TAC virtuel.* »

**Cisco**

[(ref)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## Mini documentaire FastAPI[¶](#fastapi-mini-documentary)

Un [mini documentaire FastAPI](https://www.youtube.com/watch?v=mpR8ngthqiE) est sorti fin 2025, vous pouvez le regarder en ligne :

**Typer**, le FastAPI des CLIs[¶](#typer-the-fastapi-of-clis)

Si vous construisez une application CLI à utiliser dans un terminal au lieu d'une API web, regardez [ Typer](https://typer.tiangolo.com/).

**Typer** est le petit frère de FastAPI. Et il est destiné à être le **FastAPI des CLIs**. ⌨️ 🚀

## Prérequis[¶](#requirements)

FastAPI repose sur les épaules de géants :

## Installation[¶](#installation)

Créez et activez un [environnement virtuel](https://fastapi.tiangolo.com/fr/virtual-environments/) puis installez FastAPI :

```
$ pip install "fastapi[standard]"
---> 100%
```


**Remarque** : Vous devez vous assurer de mettre « fastapi[standard] » entre guillemets pour garantir que cela fonctionne dans tous les terminaux.

## Exemple[¶](#example)

### Créer[¶](#create-it)

Créez un fichier `main.py`

avec :

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## Ou utilisez `async def`

...

Si votre code utilise `async`

/ `await`

, utilisez `async def`

:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**Remarque** :

Si vous ne savez pas, consultez la section « Vous êtes pressés ? » à propos de [ async et await dans la documentation](https://fastapi.tiangolo.com/fr/async/#in-a-hurry).


### Lancer[¶](#run-it)

Lancez le serveur avec :

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


## À propos de la commande `fastapi dev`

...

La commande `fastapi dev`

lit automatiquement votre fichier `main.py`

, détecte l'application **FastAPI** qu'il contient et lance un serveur avec [Uvicorn](https://www.uvicorn.dev).

Par défaut, `fastapi dev`

démarre avec le rechargement automatique activé pour le développement local.

Vous pouvez en savoir plus dans la [documentation de la CLI FastAPI](https://fastapi.tiangolo.com/fr/fastapi-cli/).

### Vérifier[¶](#check-it)

Ouvrez votre navigateur à l'adresse [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery).

Vous verrez la réponse JSON :

```
{"item_id": 5, "q": "somequery"}
```


Vous avez déjà créé une API qui :

- Reçoit des requêtes HTTP sur les
*chemins*`/`

et`/items/{item_id}`

. - Les deux
*chemins*acceptent des*opérations*`GET`

(également connues sous le nom de*méthodes*HTTP). - Le
*chemin*`/items/{item_id}`

a un*paramètre de chemin*`item_id`

qui doit être un`int`

. - Le
*chemin*`/items/{item_id}`

a un*paramètre de requête*optionnel`q`

de type`str`

.

### Documentation API interactive[¶](#interactive-api-docs)

Maintenant, rendez-vous sur [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

Vous verrez la documentation interactive automatique de l'API (fournie par [Swagger UI](https://github.com/swagger-api/swagger-ui)) :

### Documentation API alternative[¶](#alternative-api-docs)

Et maintenant, rendez-vous sur [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

Vous verrez la documentation alternative automatique (fournie par [ReDoc](https://github.com/Rebilly/ReDoc)) :

## Mettre à niveau l'exemple[¶](#example-upgrade)

Modifiez maintenant le fichier `main.py`

pour recevoir un corps depuis une requête `PUT`

.

Déclarez le corps en utilisant les types Python standard, grâce à Pydantic.

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


Le serveur `fastapi dev`

devrait se recharger automatiquement.

### Mettre à niveau la documentation API interactive[¶](#interactive-api-docs-upgrade)

Maintenant, rendez-vous sur [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

- La documentation interactive de l'API sera automatiquement mise à jour, y compris le nouveau corps :

- Cliquez sur le bouton « Try it out », il vous permet de renseigner les paramètres et d'interagir directement avec l'API :

- Cliquez ensuite sur le bouton « Execute », l'interface utilisateur communiquera avec votre API, enverra les paramètres, obtiendra les résultats et les affichera à l'écran :

### Mettre à niveau la documentation API alternative[¶](#alternative-api-docs-upgrade)

Et maintenant, rendez-vous sur [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

- La documentation alternative reflètera également le nouveau paramètre de requête et le nouveau corps :

### En résumé[¶](#recap)

En résumé, vous déclarez **une fois** les types de paramètres, le corps, etc. en tant que paramètres de fonction.

Vous faites cela avec les types Python standard modernes.

Vous n'avez pas à apprendre une nouvelle syntaxe, les méthodes ou les classes d'une bibliothèque spécifique, etc.

Juste du **Python** standard.

Par exemple, pour un `int`

:

```
item_id: int
```


ou pour un modèle `Item`

plus complexe :

```
item: Item
```


... et avec cette déclaration unique, vous obtenez :

- Une assistance dans l'éditeur, notamment :
- l'autocomplétion.
- la vérification des types.

- La validation des données :
- des erreurs automatiques et claires lorsque les données ne sont pas valides.
- une validation même pour les objets JSON profondément imbriqués.

- Conversion des données d'entrée : venant du réseau vers les données et types Python. Lecture depuis :
- JSON.
- Paramètres de chemin.
- Paramètres de requête.
- Cookies.
- En-têtes.
- Formulaires.
- Fichiers.

- Conversion des données de sortie : conversion des données et types Python en données réseau (au format JSON) :
- Conversion des types Python (
`str`

,`int`

,`float`

,`bool`

,`list`

, etc). - Objets
`datetime`

. - Objets
`UUID`

. - Modèles de base de données.
- ... et bien plus.

- Conversion des types Python (
- Documentation API interactive automatique, avec 2 interfaces utilisateur au choix :
- Swagger UI.
- ReDoc.


Pour revenir à l'exemple de code précédent, **FastAPI** va :

- Valider la présence d'un
`item_id`

dans le chemin pour les requêtes`GET`

et`PUT`

. - Valider que
`item_id`

est de type`int`

pour les requêtes`GET`

et`PUT`

.- Si ce n'est pas le cas, le client verra une erreur utile et claire.

- Vérifier s'il existe un paramètre de requête optionnel nommé
`q`

(comme dans`http://127.0.0.1:8000/items/foo?q=somequery`

) pour les requêtes`GET`

.- Comme le paramètre
`q`

est déclaré avec`= None`

, il est optionnel. - Sans le
`None`

, il serait requis (comme l'est le corps dans le cas de`PUT`

).

- Comme le paramètre
- Pour les requêtes
`PUT`

vers`/items/{item_id}`

, lire le corps au format JSON :- Vérifier qu'il a un attribut obligatoire
`name`

qui doit être un`str`

. - Vérifier qu'il a un attribut obligatoire
`price`

qui doit être un`float`

. - Vérifier qu'il a un attribut optionnel
`is_offer`

, qui doit être un`bool`

, s'il est présent. - Tout cela fonctionne également pour les objets JSON profondément imbriqués.

- Vérifier qu'il a un attribut obligatoire
- Convertir automatiquement depuis et vers JSON.
- Tout documenter avec OpenAPI, qui peut être utilisé par :
- des systèmes de documentation interactive.
- des systèmes de génération automatique de clients, pour de nombreux langages.

- Fournir directement 2 interfaces web de documentation interactive.

Nous n'avons fait qu'effleurer la surface, mais vous avez déjà une idée de la façon dont tout fonctionne.

Essayez de changer la ligne contenant :

```
return {"item_name": item.name, "item_id": item_id}
```


... de :

```
... "item_name": item.name ...
```


... à :

```
... "item_price": item.price ...
```


... et voyez comment votre éditeur complète automatiquement les attributs et connaît leurs types :

Pour un exemple plus complet comprenant plus de fonctionnalités, voir le [Tutoriel - Guide utilisateur](https://fastapi.tiangolo.com/fr/tutorial/).

**Alerte spoiler** : le tutoriel - guide utilisateur inclut :

- Déclaration de
**paramètres**provenant d'autres emplacements comme :**en-têtes**,**cookies**,**champs de formulaire**et**fichiers**. - Comment définir des
**contraintes de validation**comme`maximum_length`

ou`regex`

. - Un système
**d'injection de dépendances**très puissant et facile à utiliser. - Sécurité et authentification, y compris la prise en charge de
**OAuth2**avec des**JWT tokens**et l'authentification**HTTP Basic**. - Des techniques plus avancées (mais tout aussi faciles) pour déclarer des
**modèles JSON profondément imbriqués**(grâce à Pydantic). - Intégration
**GraphQL**avec[Strawberry](https://strawberry.rocks)et d'autres bibliothèques. - De nombreuses fonctionnalités supplémentaires (grâce à Starlette) comme :
**WebSockets**- des tests extrêmement faciles basés sur HTTPX et
`pytest`

**CORS****Cookie Sessions**- ... et plus encore.


### Déployer votre application (optionnel)[¶](#deploy-your-app-optional)

Vous pouvez, si vous le souhaitez, déployer votre application FastAPI sur [FastAPI Cloud](https://fastapicloud.com), allez vous inscrire sur la liste d'attente si ce n'est pas déjà fait. 🚀

Si vous avez déjà un compte **FastAPI Cloud** (nous vous avons invité depuis la liste d'attente 😉), vous pouvez déployer votre application avec une seule commande.

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


C'est tout ! Vous pouvez maintenant accéder à votre application à cette URL. ✨

#### À propos de FastAPI Cloud[¶](#about-fastapi-cloud)

** FastAPI Cloud** est construit par le même auteur et la même équipe derrière

**FastAPI**.

Il simplifie le processus de **construction**, de **déploiement** et **d'accès** à une API avec un effort minimal.

Il apporte la même **expérience développeur** de la création d'applications avec FastAPI au **déploiement** dans le cloud. 🎉

FastAPI Cloud est le principal sponsor et financeur des projets open source *FastAPI and friends*. ✨

#### Déployer sur d'autres fournisseurs cloud[¶](#deploy-to-other-cloud-providers)

FastAPI est open source et basé sur des standards. Vous pouvez déployer des applications FastAPI sur n'importe quel fournisseur cloud de votre choix.

Suivez les guides de votre fournisseur cloud pour y déployer des applications FastAPI. 🤓

## Performance[¶](#performance)

Les benchmarks TechEmpower indépendants montrent que les applications **FastAPI** s'exécutant sous Uvicorn sont [parmi les frameworks Python les plus rapides](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7), juste derrière Starlette et Uvicorn eux-mêmes (utilisés en interne par FastAPI). (*)

Pour en savoir plus, consultez la section [Benchmarks](https://fastapi.tiangolo.com/fr/benchmarks/).

## Dépendances[¶](#dependencies)

FastAPI dépend de Pydantic et Starlette.

### Dépendances `standard`

[¶](#standard-dependencies)

Lorsque vous installez FastAPI avec `pip install "fastapi[standard]"`

, il inclut le groupe `standard`

de dépendances optionnelles :

Utilisées par Pydantic :

- pour la validation des adresses e-mail.`email-validator`


Utilisées par Starlette :

- Obligatoire si vous souhaitez utiliser le`httpx`

`TestClient`

.- Obligatoire si vous souhaitez utiliser la configuration de template par défaut.`jinja2`

- Obligatoire si vous souhaitez prendre en charge l’« parsing » de formulaires avec`python-multipart`

`request.form()`

.

Utilisées par FastAPI :

- pour le serveur qui charge et sert votre application. Cela inclut`uvicorn`

`uvicorn[standard]`

, qui comprend certaines dépendances (par ex.`uvloop`

) nécessaires pour une haute performance.`fastapi-cli[standard]`

- pour fournir la commande`fastapi`

.- Cela inclut
`fastapi-cloud-cli`

, qui vous permet de déployer votre application FastAPI sur[FastAPI Cloud](https://fastapicloud.com).

- Cela inclut

### Sans les dépendances `standard`

[¶](#without-standard-dependencies)

Si vous ne souhaitez pas inclure les dépendances optionnelles `standard`

, vous pouvez installer avec `pip install fastapi`

au lieu de `pip install "fastapi[standard]"`

.

### Sans `fastapi-cloud-cli`

[¶](#without-fastapi-cloud-cli)

Si vous souhaitez installer FastAPI avec les dépendances standard mais sans `fastapi-cloud-cli`

, vous pouvez installer avec `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

.

### Dépendances optionnelles supplémentaires[¶](#additional-optional-dependencies)

Il existe des dépendances supplémentaires que vous pourriez vouloir installer.

Dépendances optionnelles supplémentaires pour Pydantic :

- pour la gestion des paramètres.`pydantic-settings`

- pour des types supplémentaires à utiliser avec Pydantic.`pydantic-extra-types`


Dépendances optionnelles supplémentaires pour FastAPI :

- Obligatoire si vous souhaitez utiliser`orjson`

`ORJSONResponse`

.- Obligatoire si vous souhaitez utiliser`ujson`

`UJSONResponse`

.

## Licence[¶](#license)

Ce projet est soumis aux termes de la licence MIT.

---

## Source: https://fastapi.tiangolo.com/ja/

# FastAPI[¶](#fastapi)

## 🌐 AI と人間による翻訳

この翻訳は、人間のガイドに基づいて AI によって作成されました。🤝

原文の意図を取り違えていたり、不自然な表現になっている可能性があります。🤖

[AI LLM をより適切に誘導するのを手伝う](https://fastapi.tiangolo.com/ja/contributing/#translations) ことで、この翻訳を改善できます。

*FastAPI フレームワーク、高パフォーマンス、学びやすい、素早くコーディングできる、本番運用に対応*

**ドキュメント**: [https://fastapi.tiangolo.com/ja](https://fastapi.tiangolo.com/ja)

**ソースコード**: [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI は、Python の標準である型ヒントに基づいて Python で API を構築するための、モダンで、高速（高パフォーマンス）な Web フレームワークです。

主な特徴:

**高速**:**NodeJS**や**Go**並みのとても高いパフォーマンス（Starlette と Pydantic のおかげです）。[利用可能な最も高速な Python フレームワークの一つです](#performance)。**高速なコーディング**: 開発速度を約 200%〜300% 向上させます。***少ないバグ**: 開発者起因のヒューマンエラーを約 40% 削減します。***直感的**: 素晴らしいエディタサポート。補完 があらゆる場所で使えます。デバッグ時間を削減します。**簡単**: 簡単に利用・習得できるようにデザインされています。ドキュメントを読む時間を削減します。**短い**: コードの重複を最小限にします。各パラメータ宣言から複数の機能を得られます。バグも減ります。**堅牢性**: 自動対話型ドキュメントにより、本番環境向けのコードが得られます。**Standards-based**: API のオープンスタンダードに基づいており（そして完全に互換性があります）、[OpenAPI](https://github.com/OAI/OpenAPI-Specification)（以前は Swagger として知られていました）や[JSON Schema](https://json-schema.org/)をサポートします。

* 本番アプリケーションを構築している社内開発チームのテストに基づく見積もりです。

## Sponsors[¶](#sponsors)

### Keystone Sponsor[¶](#keystone-sponsor)

### Gold and Silver Sponsors[¶](#gold-and-silver-sponsors)

## 評価[¶](#opinions)

"*[...] 最近 FastAPI を使っています。 [...] 実際に私のチームの全ての Microsoft の機械学習サービス で使用する予定です。 そのうちのいくつかのコアな Windows 製品と Office 製品に統合されつつあります。*"

**Microsoft**

[(ref)](https://github.com/fastapi/fastapi/pull/26)

"*FastAPIライブラリを採用し、クエリで 予測値 を取得できる REST サーバを構築しました。 [for Ludwig]*"

**Uber**

[(ref)](https://eng.uber.com/ludwig-v0-2/)

"* Netflix は、危機管理オーケストレーションフレームワーク、Dispatch のオープンソースリリースを発表できることをうれしく思います。 [built with FastAPI]*"

**Netflix**

[(ref)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

"*私は FastAPI にワクワクしています。 めちゃくちゃ楽しいです！*"

**[Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) podcast host**

[(ref)](https://x.com/brianokken/status/1112220079972728832)

"*正直、あなたが作ったものは超堅実で洗練されているように見えます。いろんな意味で、それは私が Hug にそうなってほしかったものです。誰かがそれを作るのを見るのは本当に刺激的です。*"

**[Hug](https://github.com/hugapi/hug) creator**

[(ref)](https://news.ycombinator.com/item?id=19455465)

"*REST API を構築するための モダンなフレームワーク を学びたい方は、FastAPI [...] をチェックしてみてください。 [...] 高速で、使用・習得が簡単です [...]*"

"*私たちの API は FastAPI に切り替えました [...] きっと気に入ると思います [...]*"

**[Explosion AI](https://explosion.ai) founders - [spaCy](https://spacy.io) creators**

[(ref)](https://x.com/_inesmontani/status/1144173225322143744)-

[(ref)](https://x.com/honnibal/status/1144031421859655680)

"*本番運用の Python API を構築したい方には、 FastAPI を強くおすすめします。美しく設計されており、使いやすく、高いスケーラビリティがあります。私たちの API ファースト開発戦略の 主要コンポーネント となり、Virtual TAC Engineer などの多くの自動化やサービスを推進しています。*"

**Cisco**

[(ref)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## FastAPI ミニドキュメンタリー[¶](#fastapi-mini-documentary)

2025 年末に公開された [FastAPI ミニドキュメンタリー](https://www.youtube.com/watch?v=mpR8ngthqiE)があります。オンラインで視聴できます:

**Typer**、CLI 版 FastAPI[¶](#typer-the-fastapi-of-clis)

Web API の代わりにターミナルで使用する CLI アプリを構築する場合は、[ Typer](https://typer.tiangolo.com/) を確認してください。

**Typer** は FastAPI の弟分です。そして、**CLI 版 FastAPI** を意図しています。 ⌨️ 🚀

## 必要条件[¶](#requirements)

FastAPI は巨人の肩の上に立っています。

## インストール[¶](#installation)

[仮想環境](https://fastapi.tiangolo.com/ja/virtual-environments/) を作成して有効化し、それから FastAPI をインストールします。

```
$ pip install "fastapi[standard]"
---> 100%
```


**注**: すべてのターミナルで動作するように、`"fastapi[standard]"`

は必ずクォートで囲んでください。

## アプリケーション例[¶](#example)

### 作成[¶](#create-it)

`main.py`

ファイルを作成し、以下のコードを入力します。

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## または `async def`

を使います...

コードで `async`

/ `await`

を使用する場合は、`async def`

を使います。

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**注**:

わからない場合は、*「In a hurry?」* セクションの [ドキュメントの async と await](https://fastapi.tiangolo.com/ja/async/#in-a-hurry) を確認してください。


### 実行[¶](#run-it)

以下のコマンドでサーバーを起動します。

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


`fastapi dev`

コマンドについて

`fastapi dev`

コマンドは `main.py`

ファイルを自動的に読み取り、その中の **FastAPI** アプリを検出し、[Uvicorn](https://www.uvicorn.dev) を使用してサーバーを起動します。

デフォルトでは、`fastapi dev`

はローカル開発向けに自動リロードを有効にして起動します。

詳しくは [FastAPI CLI docs](https://fastapi.tiangolo.com/ja/fastapi-cli/) を参照してください。

### 動作確認[¶](#check-it)

ブラウザで [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery) を開きます。

以下の JSON のレスポンスが確認できます。

```
{"item_id": 5, "q": "somequery"}
```


すでに以下の API が作成されています。

*パス*`/`

と`/items/{item_id}`

で HTTP リクエストを受け取ります。- 両方の
*パス*は`GET`

*操作*（HTTP*メソッド*としても知られています）を取ります。 *パス*`/items/{item_id}`

は`int`

であるべき*パスパラメータ*`item_id`

を持ちます。*パス*`/items/{item_id}`

はオプションの`str`

*クエリパラメータ*`q`

を持ちます。

### 自動対話型 API ドキュメント[¶](#interactive-api-docs)

次に、[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) にアクセスします。

自動対話型 API ドキュメントが表示されます（[Swagger UI](https://github.com/swagger-api/swagger-ui) が提供しています）。

### 代替 API ドキュメント[¶](#alternative-api-docs)

次に、[http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc) にアクセスします。

代替の自動ドキュメントが表示されます（[ReDoc](https://github.com/Rebilly/ReDoc) が提供しています）。

## アップグレード例[¶](#example-upgrade)

次に、`PUT`

リクエストからボディを受け取るために `main.py`

ファイルを修正しましょう。

Pydantic によって、標準的な Python の型を使ってボディを宣言します。

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


`fastapi dev`

サーバーは自動でリロードされるはずです。

### 自動対話型 API ドキュメントのアップグレード[¶](#interactive-api-docs-upgrade)

次に、[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) にアクセスします。

- 自動対話型 API ドキュメントは新しいボディも含めて自動でアップデートされます。

- 「Try it out」ボタンをクリックします。パラメータを入力して API と直接やりとりできます。

- 次に、「Execute」ボタンをクリックします。ユーザーインターフェースは API と通信し、パラメータを送信し、結果を取得して画面に表示します。

### 代替 API ドキュメントのアップグレード[¶](#alternative-api-docs-upgrade)

次に、[http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc) にアクセスします。

- 代替のドキュメントにも新しいクエリパラメータやボディが反映されます。

### まとめ[¶](#recap)

要約すると、関数のパラメータとして、パラメータやボディなどの型を **一度だけ** 宣言します。

標準的な最新の Python の型を使います。

新しい構文や特定のライブラリのメソッドやクラスなどを覚える必要はありません。

単なる標準的な **Python** です。

例えば、`int`

の場合:

```
item_id: int
```


または、より複雑な `Item`

モデルの場合:

```
item: Item
```


...そして、この一度の宣言で、以下のようになります。

- 以下を含むエディタサポート:
- 補完。
- 型チェック。

- データの検証:
- データが無効な場合に自動で明確なエラーを返します。
- 深い入れ子になった JSON オブジェクトでも検証が可能です。

- 入力データの 変換: ネットワークから Python のデータや型へ。以下から読み取ります:
- JSON。
- パスパラメータ。
- クエリパラメータ。
- Cookie。
- ヘッダー。
- フォーム。
- ファイル。

- 出力データの 変換: Python のデータや型からネットワークデータへ（JSON として）変換します:
- Python の型（
`str`

、`int`

、`float`

、`bool`

、`list`

など）の変換。 `datetime`

オブジェクト。`UUID`

オブジェクト。- データベースモデル。
- ...などなど。

- Python の型（
- 2 つの代替ユーザーインターフェースを含む自動対話型 API ドキュメント:
- Swagger UI。
- ReDoc。


前のコード例に戻ると、**FastAPI** は次のように動作します。

`GET`

および`PUT`

リクエストのパスに`item_id`

があることを検証します。`GET`

および`PUT`

リクエストに対して`item_id`

が`int`

型であることを検証します。- そうでない場合、クライアントは有用で明確なエラーを受け取ります。

`GET`

リクエストに対して、`q`

という名前のオプションのクエリパラメータ（`http://127.0.0.1:8000/items/foo?q=somequery`

のような）が存在するかどうかを調べます。`q`

パラメータは`= None`

で宣言されているため、オプションです。`None`

がなければ必須になります（`PUT`

の場合のボディと同様です）。

`PUT`

リクエストを`/items/{item_id}`

に送信する場合、ボディを JSON として読み込みます:- 必須の属性
`name`

があり、`str`

であるべきことを確認します。 - 必須の属性
`price`

があり、`float`

でなければならないことを確認します。 - オプションの属性
`is_offer`

があり、存在する場合は`bool`

であるべきことを確認します。 - これらはすべて、深くネストされた JSON オブジェクトに対しても動作します。

- 必須の属性
- JSON への/からの変換を自動的に行います。
- OpenAPI ですべてを文書化し、以下で利用できます:
- 対話型ドキュメントシステム。
- 多くの言語に対応した自動クライアントコード生成システム。

- 2 つの対話型ドキュメント Web インターフェースを直接提供します。

まだ表面的な部分に触れただけですが、仕組みはすでにイメージできているはずです。

以下の行を変更してみてください。

```
return {"item_name": item.name, "item_id": item_id}
```


...以下の:

```
... "item_name": item.name ...
```


...を:

```
... "item_price": item.price ...
```


...に変更し、エディタが属性を自動補完し、その型を知ることを確認してください。

より多くの機能を含む、より完全な例については、[Tutorial - User Guide](https://fastapi.tiangolo.com/ja/tutorial/) を参照してください。

**ネタバレ注意**: tutorial - user guide には以下が含まれます。

**ヘッダー**、**Cookie**、**フォームフィールド**、**ファイル**など、他のさまざまな場所からの**パラメータ**宣言。`maximum_length`

や`regex`

のような**検証制約**を設定する方法。- 非常に強力で使いやすい
**依存性注入**システム。 **JWT トークン**を用いた**OAuth2**や**HTTP Basic**認証のサポートを含む、セキュリティと認証。**深くネストされた JSON モデル**を宣言するための、より高度な（しかし同様に簡単な）手法（Pydantic のおかげです）。[Strawberry](https://strawberry.rocks)および他のライブラリによる**GraphQL**統合。- 以下のようなたくさんのおまけ機能（Starlette のおかげです）:
**WebSockets**- HTTPX と
`pytest`

に基づく極めて簡単なテスト **CORS****Cookie Sessions**- ...などなど。


### アプリをデプロイ（任意）[¶](#deploy-your-app-optional)

必要に応じて FastAPI アプリを [FastAPI Cloud](https://fastapicloud.com) にデプロイできます。まだの場合はウェイティングリストに参加してください。 🚀

すでに **FastAPI Cloud** アカウント（ウェイティングリストから招待されました 😉）がある場合は、1 コマンドでアプリケーションをデプロイできます。

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


これで完了です！その URL でアプリにアクセスできます。 ✨

#### FastAPI Cloud について[¶](#about-fastapi-cloud)

** FastAPI Cloud** は

**FastAPI**の作者と同じチームによって作られています。

最小限の労力で API を **構築**、**デプロイ**、**アクセス** するためのプロセスを効率化します。

FastAPI でアプリを構築するのと同じ **開発者体験** を、クラウドへの **デプロイ** にももたらします。 🎉

FastAPI Cloud は *FastAPI and friends* オープンソースプロジェクトの主要スポンサーであり、資金提供元です。 ✨

#### 他のクラウドプロバイダにデプロイ[¶](#deploy-to-other-cloud-providers)

FastAPI はオープンソースであり、標準に基づいています。選択した任意のクラウドプロバイダに FastAPI アプリをデプロイできます。

各クラウドプロバイダのガイドに従って、FastAPI アプリをデプロイしてください。 🤓

## パフォーマンス[¶](#performance)

独立した TechEmpower のベンチマークでは、Uvicorn で動作する **FastAPI** アプリケーションが、[利用可能な最も高速な Python フレームワークの一つ](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7)であり、Starlette と Uvicorn（FastAPI で内部的に使用されています）にのみ下回っていると示されています。（*）

詳細は [Benchmarks](https://fastapi.tiangolo.com/ja/benchmarks/) セクションをご覧ください。

## 依存関係[¶](#dependencies)

FastAPI は Pydantic と Starlette に依存しています。

`standard`

依存関係[¶](#standard-dependencies)

FastAPI を `pip install "fastapi[standard]"`

でインストールすると、`standard`

グループのオプション依存関係が含まれます。

Pydantic によって使用されるもの:

- メール検証のため。`email-validator`


Starlette によって使用されるもの:

-`httpx`

`TestClient`

を使用したい場合に必要です。- デフォルトのテンプレート設定を使用したい場合に必要です。`jinja2`

-`python-multipart`

`request.form()`

とともに、フォームの 「parsing」 をサポートしたい場合に必要です。

FastAPI によって使用されるもの:

- アプリケーションをロードして提供するサーバーのため。これには`uvicorn`

`uvicorn[standard]`

も含まれ、高性能なサービングに必要な依存関係（例:`uvloop`

）が含まれます。`fastapi-cli[standard]`

-`fastapi`

コマンドを提供します。- これには
`fastapi-cloud-cli`

が含まれ、FastAPI アプリケーションを[FastAPI Cloud](https://fastapicloud.com)にデプロイできます。

- これには

`standard`

依存関係なし[¶](#without-standard-dependencies)

`standard`

のオプション依存関係を含めたくない場合は、`pip install "fastapi[standard]"`

の代わりに `pip install fastapi`

でインストールできます。

`fastapi-cloud-cli`

なし[¶](#without-fastapi-cloud-cli)

標準の依存関係を含めつつ `fastapi-cloud-cli`

を除外して FastAPI をインストールしたい場合は、`pip install "fastapi[standard-no-fastapi-cloud-cli]"`

でインストールできます。

### 追加のオプション依存関係[¶](#additional-optional-dependencies)

追加でインストールしたい依存関係があります。

追加のオプション Pydantic 依存関係:

- 設定管理のため。`pydantic-settings`

- Pydantic で使用する追加の型のため。`pydantic-extra-types`


追加のオプション FastAPI 依存関係:

## ライセンス[¶](#license)

このプロジェクトは MIT ライセンスの条項の下でライセンスされています。

---

## Source: https://fastapi.tiangolo.com/ko/

# FastAPI[¶](#fastapi)

## 🌐 AI와 사람이 함께한 번역

이 번역은 사람의 안내를 받아 AI가 만들었습니다. 🤝

원문의 의미를 오해하거나 부자연스러워 보이는 등 오류가 있을 수 있습니다. 🤖

*FastAPI 프레임워크, 고성능, 간편한 학습, 빠른 코드 작성, 준비된 프로덕션*

**문서**: [https://fastapi.tiangolo.com/ko](https://fastapi.tiangolo.com/ko)

**소스 코드**: [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI는 현대적이고, 빠르며(고성능), 파이썬 표준 타입 힌트에 기초한 Python의 API를 빌드하기 위한 웹 프레임워크입니다.

주요 특징으로:

**빠름**: (Starlette과 Pydantic 덕분에)**NodeJS**및**Go**와 대등할 정도로 매우 높은 성능.[사용 가능한 가장 빠른 파이썬 프레임워크 중 하나](#performance).**빠른 코드 작성**: 약 200%에서 300%까지 기능 개발 속도 증가. ***적은 버그**: 사람(개발자)에 의한 에러 약 40% 감소. ***직관적**: 훌륭한 편집기 지원. 자동완성이 모든 곳에서 동작. 적은 디버깅 시간.**쉬움**: 쉽게 사용하고 배우도록 설계. 적은 문서 읽기 시간.**짧음**: 코드 중복 최소화. 각 매개변수 선언의 여러 기능. 적은 버그.**견고함**: 준비된 프로덕션 용 코드를 얻으십시오. 자동 대화형 문서와 함께.**표준 기반**: API에 대한 (완전히 호환되는) 개방형 표준 기반:[OpenAPI](https://github.com/OAI/OpenAPI-Specification)(이전에 Swagger로 알려졌던) 및[JSON Schema](https://json-schema.org/).

* 내부 개발팀의 프로덕션 애플리케이션을 빌드한 테스트에 근거한 측정

## 스폰서[¶](#sponsors)

### 키스톤 스폰서[¶](#keystone-sponsor)

### 골드 및 실버 스폰서[¶](#gold-and-silver-sponsors)

## 의견들[¶](#opinions)

"*[...] 저는 요즘 FastAPI를 많이 사용하고 있습니다. [...] 사실 우리 팀의 마이크로소프트 ML 서비스 전부를 바꿀 계획입니다. 그중 일부는 핵심 Windows와 몇몇의 Office 제품들이 통합되고 있습니다.*"

**마이크로소프트**

[(ref)](https://github.com/fastapi/fastapi/pull/26)

"* FastAPI 라이브러리를 채택하여 예측을 얻기 위해 쿼리를 실행 할 수 있는 REST 서버를 생성했습니다. [Ludwig을 위해]*"

**우버**

[(ref)](https://eng.uber.com/ludwig-v0-2/)

"* Netflix는 우리의 오픈 소스 배포판인 위기 관리 오케스트레이션 프레임워크를 발표할 수 있어 기쁩니다: 바로 Dispatch입니다! [FastAPI로 빌드]*"

**넷플릭스**

[(ref)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

"* FastAPI가 너무 좋아서 구름 위를 걷는듯 합니다. 정말 즐겁습니다!*"

**[Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) podcast host**

[(ref)](https://x.com/brianokken/status/1112220079972728832)

"*솔직히, 당신이 만든 것은 매우 견고하고 세련되어 보입니다. 여러 면에서 Hug가 이렇게 되었으면 합니다 - 그걸 만든 누군가를 보는 것은 많은 영감을 줍니다.*"

**[Hug](https://github.com/hugapi/hug) 제작자**

[(ref)](https://news.ycombinator.com/item?id=19455465)

"*REST API를 만들기 위해 현대적인 프레임워크를 찾고 있다면 FastAPI를 확인해 보십시오. [...] 빠르고, 쓰기 쉽고, 배우기도 쉽습니다 [...]*"

"*우리 API를 FastAPI로 바꿨습니다 [...] 아마 여러분도 좋아하실 것입니다 [...]*"

**[Explosion AI](https://explosion.ai) 설립자 - [spaCy](https://spacy.io) 제작자**

[(ref)](https://x.com/_inesmontani/status/1144173225322143744)-

[(ref)](https://x.com/honnibal/status/1144031421859655680)

"*프로덕션 Python API를 만들고자 한다면, 저는 FastAPI를 강력히 추천합니다. 아름답게 설계되었고, 사용이 간단하며, 확장성이 매우 뛰어나고, 우리의 API 우선 개발 전략에서 핵심 구성 요소가 되었으며 Virtual TAC Engineer 같은 많은 자동화와 서비스를 이끌고 있습니다.*"

**Cisco**

[(ref)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## FastAPI 미니 다큐멘터리[¶](#fastapi-mini-documentary)

2025년 말에 공개된 [FastAPI 미니 다큐멘터리](https://www.youtube.com/watch?v=mpR8ngthqiE)가 있습니다. 온라인에서 시청할 수 있습니다:

**Typer**, CLI를 위한 FastAPI[¶](#typer-the-fastapi-of-clis)

웹 API 대신 터미널에서 사용할 CLI 앱을 만들고 있다면, [ Typer](https://typer.tiangolo.com/)를 확인해 보십시오.

**Typer**는 FastAPI의 동생입니다. 그리고 **CLI를 위한 FastAPI**가 되기 위해 생겼습니다. ⌨️ 🚀

## 요구사항[¶](#requirements)

FastAPI는 거인들의 어깨 위에 서 있습니다:

## 설치[¶](#installation)

[가상 환경](https://fastapi.tiangolo.com/ko/virtual-environments/)을 생성하고 활성화한 다음 FastAPI를 설치하세요:

```
$ pip install "fastapi[standard]"
---> 100%
```


**Note**: 모든 터미널에서 동작하도록 `"fastapi[standard]"`

를 따옴표로 감싸 넣었는지 확인하세요.

## 예제[¶](#example)

### 만들기[¶](#create-it)

다음 내용으로 `main.py`

파일을 만드십시오:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## 또는 `async def`

사용하기...

여러분의 코드가 `async`

/ `await`

을 사용한다면, `async def`

를 사용하십시오:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**Note**:

잘 모르겠다면, ["급하세요?"](https://fastapi.tiangolo.com/ko/async/#in-a-hurry) 섹션을 확인해 보십시오.

### 실행하기[¶](#run-it)

다음 명령으로 서버를 실행하십시오:

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


`fastapi dev`

명령에 관하여...

`fastapi dev`

명령은 여러분의 `main.py`

파일을 자동으로 읽고, 그 안의 **FastAPI** 앱을 감지한 다음, [Uvicorn](https://www.uvicorn.dev)을 사용해 서버를 시작합니다.

기본적으로 `fastapi dev`

는 로컬 개발을 위해 auto-reload가 활성화된 상태로 시작됩니다.

자세한 내용은 [FastAPI CLI 문서](https://fastapi.tiangolo.com/ko/fastapi-cli/)에서 확인할 수 있습니다.

### 확인하기[¶](#check-it)

브라우저로 [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery)를 열어보십시오.

아래의 JSON 응답을 볼 수 있습니다:

```
{"item_id": 5, "q": "somequery"}
```


여러분은 벌써 API를 만들었습니다:

*경로*`/`

및`/items/{item_id}`

에서 HTTP 요청 받기.- 두
*경로*모두`GET`

*연산*(HTTP*메소드*로 알려진)을 받습니다. *경로*`/items/{item_id}`

는`int`

형 이어야 하는*경로 매개변수*`item_id`

를 가지고 있습니다.*경로*`/items/{item_id}`

는 선택적인`str`

형*쿼리 매개변수*`q`

를 가지고 있습니다.

### 대화형 API 문서[¶](#interactive-api-docs)

이제 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)로 가보십시오.

자동 대화형 API 문서를 볼 수 있습니다 ([Swagger UI](https://github.com/swagger-api/swagger-ui) 제공):

### 대안 API 문서[¶](#alternative-api-docs)

그리고 이제 [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)로 가봅시다.

다른 자동 문서를 볼 수 있습니다([ReDoc](https://github.com/Rebilly/ReDoc) 제공):

## 예제 업그레이드[¶](#example-upgrade)

이제 `PUT`

요청에서 본문을 받기 위해 `main.py`

파일을 수정해봅시다.

Pydantic 덕분에 표준 Python 타입을 사용해 본문을 선언합니다.

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


`fastapi dev`

서버는 자동으로 리로딩되어야 합니다.

### 대화형 API 문서 업그레이드[¶](#interactive-api-docs-upgrade)

이제 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)로 이동합니다.

- 대화형 API 문서는 새 본문을 포함해 자동으로 업데이트됩니다:

- "Try it out" 버튼을 클릭하면, 매개변수를 채우고 API와 직접 상호작용할 수 있습니다:

- 그런 다음 "Execute" 버튼을 클릭하면, 사용자 인터페이스가 API와 통신하고 매개변수를 전송한 뒤 결과를 받아 화면에 표시합니다:

### 대안 API 문서 업그레이드[¶](#alternative-api-docs-upgrade)

그리고 이제, [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)로 이동합니다.

- 대안 문서 역시 새 쿼리 매개변수와 본문을 반영합니다:

### 요약[¶](#recap)

요약하면, 여러분은 매개변수의 타입, 본문 등을 함수 매개변수로서 **한번에** 선언했습니다.

여러분은 현대 표준 파이썬 타입으로 이를 행했습니다.

새로운 문법, 특정 라이브러리의 메소드나 클래스 등을 배울 필요가 없습니다.

그저 표준 **Python** 입니다.

예를 들어, `int`

에 대해선:

```
item_id: int
```


또는 좀 더 복잡한 `Item`

모델에 대해선:

```
item: Item
```


...그리고 단 하나의 선언으로 여러분이 얻는 것은:

- 다음을 포함한 편집기 지원:
- 자동완성.
- 타입 검사.

- 데이터 검증:
- 데이터가 유효하지 않을 때 자동으로 생성하는 명확한 에러.
- 깊이 중첩된 JSON 객체에 대한 유효성 검사.

- 입력 데이터 변환: 네트워크에서 파이썬 데이터 및 타입으로 전송. 읽을 수 있는 것들:
- JSON.
- 경로 매개변수.
- 쿼리 매개변수.
- 쿠키.
- 헤더.
- 폼(Forms).
- 파일.

- 출력 데이터 변환: 파이썬 데이터 및 타입을 네트워크 데이터로 전환(JSON 형식으로):
- 파이썬 타입 변환 (
`str`

,`int`

,`float`

,`bool`

,`list`

, 등). `datetime`

객체.`UUID`

객체.- 데이터베이스 모델.
- ...더 많은 것들.

- 파이썬 타입 변환 (
- 대안가능한 사용자 인터페이스를 2개 포함한 자동 대화형 API 문서:
- Swagger UI.
- ReDoc.


이전 코드 예제로 돌아가서, **FastAPI**는 다음처럼 처리합니다:

`GET`

및`PUT`

요청에`item_id`

가 경로에 있는지 검증.`GET`

및`PUT`

요청에`item_id`

가`int`

타입인지 검증.- 그렇지 않다면 클라이언트는 유용하고 명확한 에러를 볼 수 있습니다.

`GET`

요청에`q`

라는 선택적인 쿼리 매개변수가 있는지 검사(`http://127.0.0.1:8000/items/foo?q=somequery`

처럼).`q`

매개변수는`= None`

으로 선언되었기 때문에 선택사항입니다.`None`

이 없다면 필수사항입니다(`PUT`

의 경우와 마찬가지로).

`/items/{item_id}`

으로의`PUT`

요청은 본문을 JSON으로 읽음:`name`

을 필수 속성으로 갖고`str`

형인지 검사.`price`

를 필수 속성으로 갖고`float`

형이어야 하는지 검사.- 만약 주어진다면,
`is_offer`

를 선택 속성으로 갖고`bool`

형이어야 하는지 검사. - 이 모든 것은 깊이 중첩된 JSON 객체에도 적용됩니다.

- JSON을 변환하거나 JSON으로 변환하는 것을 자동화.
- 다음에서 사용할 수 있는 모든 것을 OpenAPI로 문서화:
- 대화형 문서 시스템.
- 여러 언어들에 대한 자동 클라이언트 코드 생성 시스템.

- 2개의 대화형 문서 웹 인터페이스를 직접 제공.

우리는 그저 수박 겉 핥기만 했을 뿐인데 여러분은 벌써 어떻게 작동하는지 알고 있습니다.

다음 줄을 바꿔보십시오:

```
return {"item_name": item.name, "item_id": item_id}
```


...에서:

```
... "item_name": item.name ...
```


...으로:

```
... "item_price": item.price ...
```


...그러고 나서 여러분의 편집기가 속성과 타입을 알고 자동 완성하는지 보십시오:

더 많은 기능을 포함한 보다 완전한 예제의 경우, [튜토리얼 - 사용자 가이드](https://fastapi.tiangolo.com/ko/tutorial/)를 보십시오.

**스포일러 주의**: 튜토리얼 - 사용자 가이드는:

- 서로 다른 장소에서
**매개변수**선언:**헤더**,**쿠키**,**폼 필드**그리고**파일**. `maximum_length`

또는`regex`

처럼**유효성 제약**하는 방법.- 강력하고 사용하기 쉬운
**의존성 주입**시스템. **OAuth2**지원을 포함한**JWT tokens**및**HTTP Basic**을 갖는 보안과 인증.- (Pydantic 덕분에)
**깊은 중첩 JSON 모델**을 선언하는데 더 진보한 (하지만 마찬가지로 쉬운) 기술. [Strawberry](https://strawberry.rocks)및 기타 라이브러리와의**GraphQL**통합.- (Starlette 덕분에) 많은 추가 기능:
**웹 소켓**- HTTPX 및
`pytest`

에 기반한 극히 쉬운 테스트 **CORS****쿠키 세션**- ...기타 등등.


### 앱 배포하기(선택 사항)[¶](#deploy-your-app-optional)

선택적으로 FastAPI 앱을 [FastAPI Cloud](https://fastapicloud.com)에 배포할 수 있습니다. 아직이라면 대기자 명단에 등록해 보세요. 🚀

이미 **FastAPI Cloud** 계정이 있다면(대기자 명단에서 초대해 드렸습니다 😉), 한 번의 명령으로 애플리케이션을 배포할 수 있습니다.

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


이게 전부입니다! 이제 해당 URL에서 앱에 접근할 수 있습니다. ✨

#### FastAPI Cloud 소개[¶](#about-fastapi-cloud)

** FastAPI Cloud**는

**FastAPI**뒤에 있는 동일한 작성자와 팀이 만들었습니다.

최소한의 노력으로 API를 **빌드**, **배포**, **접근**하는 과정을 간소화합니다.

FastAPI로 앱을 빌드할 때의 동일한 **개발자 경험**을 클라우드에 **배포**하는 데까지 확장해 줍니다. 🎉

FastAPI Cloud는 *FastAPI and friends* 오픈 소스 프로젝트의 주요 스폰서이자 자금 제공자입니다. ✨

#### 다른 클라우드 제공자에 배포하기[¶](#deploy-to-other-cloud-providers)

FastAPI는 오픈 소스이며 표준을 기반으로 합니다. 선택한 어떤 클라우드 제공자에도 FastAPI 앱을 배포할 수 있습니다.

클라우드 제공자의 가이드를 따라 FastAPI 앱을 배포하세요. 🤓

## 성능[¶](#performance)

독립된 TechEmpower 벤치마크에서 Uvicorn에서 작동하는 **FastAPI** 애플리케이션이 [사용 가능한 가장 빠른 Python 프레임워크 중 하나](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7)로 Starlette와 Uvicorn(FastAPI에서 내부적으로 사용)에만 밑돌고 있습니다. (*)

자세한 내용은 [벤치마크](https://fastapi.tiangolo.com/ko/benchmarks/) 섹션을 보십시오.

## 의존성[¶](#dependencies)

FastAPI는 Pydantic과 Starlette에 의존합니다.

`standard`

의존성[¶](#standard-dependencies)

`pip install "fastapi[standard]"`

로 FastAPI를 설치하면 `standard`

그룹의 선택적 의존성이 함께 설치됩니다.

Pydantic이 사용하는:

- 이메일 유효성 검사.`email-validator`


Starlette이 사용하는:

-`httpx`

`TestClient`

를 사용하려면 필요.- 기본 템플릿 설정을 사용하려면 필요.`jinja2`

-`python-multipart`

`request.form()`

과 함께 form "파싱" 지원을 원하면 필요.

FastAPI가 사용하는:

- 애플리케이션을 로드하고 제공하는 서버를 위한 것입니다. 여기에는 고성능 서빙에 필요한 일부 의존성(예:`uvicorn`

`uvloop`

)이 포함된`uvicorn[standard]`

가 포함됩니다.`fastapi-cli[standard]`

-`fastapi`

명령을 제공하기 위한 것입니다.- 여기에는
[FastAPI Cloud](https://fastapicloud.com)에 FastAPI 애플리케이션을 배포할 수 있게 해주는`fastapi-cloud-cli`

가 포함됩니다.

- 여기에는

`standard`

의존성 없이[¶](#without-standard-dependencies)

`standard`

선택적 의존성을 포함하고 싶지 않다면, `pip install "fastapi[standard]"`

대신 `pip install fastapi`

로 설치할 수 있습니다.

`fastapi-cloud-cli`

없이[¶](#without-fastapi-cloud-cli)

표준 의존성과 함께 FastAPI를 설치하되 `fastapi-cloud-cli`

없이 설치하고 싶다면, `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

로 설치할 수 있습니다.

### 추가 선택적 의존성[¶](#additional-optional-dependencies)

추가로 설치하고 싶을 수 있는 의존성도 있습니다.

추가 선택적 Pydantic 의존성:

- 설정 관리를 위한 것입니다.`pydantic-settings`

- Pydantic에서 사용할 추가 타입을 위한 것입니다.`pydantic-extra-types`


추가 선택적 FastAPI 의존성:

## 라이센스[¶](#license)

이 프로젝트는 MIT 라이센스 조약에 따라 라이센스가 부여됩니다.

---

## Source: https://fastapi.tiangolo.com/pt/

# FastAPI[¶](#fastapi)

## 🌐 Tradução por IA e humanos

Esta tradução foi feita por IA orientada por humanos. 🤝

Ela pode conter erros de interpretação do significado original ou soar pouco natural, etc. 🤖

Você pode melhorar esta tradução [ajudando-nos a orientar melhor o LLM de IA](https://fastapi.tiangolo.com/pt/contributing/#translations).

*Framework FastAPI, alta performance, fácil de aprender, rápido para codar, pronto para produção*

**Documentação**: [https://fastapi.tiangolo.com/pt](https://fastapi.tiangolo.com/pt)

**Código fonte**: [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI é um framework web moderno e rápido (alta performance) para construção de APIs com Python, baseado nos type hints padrões do Python.

Os recursos chave são:

**Rápido**: alta performance, equivalente a**NodeJS**e**Go**(graças ao Starlette e Pydantic).[Um dos frameworks Python mais rápidos disponíveis](#performance).**Rápido para codar**: Aumenta a velocidade para desenvolver recursos entre 200% a 300%. ***Poucos bugs**: Reduz cerca de 40% de erros induzidos por humanos (desenvolvedores). ***Intuitivo**: Grande suporte a editores. Completação em todos os lugares. Menos tempo debugando.**Fácil**: Projetado para ser fácil de aprender e usar. Menos tempo lendo docs.**Enxuto**: Minimize duplicação de código. Múltiplas funcionalidades para cada declaração de parâmetro. Menos bugs.**Robusto**: Tenha código pronto para produção. E com documentação interativa automática.**Baseado em padrões**: Baseado em (e totalmente compatível com) os padrões abertos para APIs:[OpenAPI](https://github.com/OAI/OpenAPI-Specification)(anteriormente conhecido como Swagger) e[JSON Schema](https://json-schema.org/).

* estimativas baseadas em testes realizados com equipe interna de desenvolvimento, construindo aplicações em produção.

## Patrocinadores[¶](#sponsors)

### Patrocinador Keystone[¶](#keystone-sponsor)

### Patrocinadores Ouro e Prata[¶](#gold-and-silver-sponsors)

## Opiniões[¶](#opinions)

"*[...] Estou usando FastAPI muito esses dias. [...] Estou na verdade planejando utilizar ele em todos os times de serviços ML na Microsoft. Alguns deles estão sendo integrados no _core* do produto

**Windows**e alguns produtos

**Office**._"

**Microsoft**

[(ref)](https://github.com/fastapi/fastapi/pull/26)

"*Nós adotamos a biblioteca FastAPI para iniciar um servidor REST que pode ser consultado para obter previsões. [para o Ludwig]*"

**Uber**

[(ref)](https://eng.uber.com/ludwig-v0-2/)

"*A Netflix tem o prazer de anunciar o lançamento open-source do nosso framework de orquestração de gerenciamento de crises: Dispatch! [criado com FastAPI]*"

**Netflix**

[(ref)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

"*Estou muito entusiasmado com o FastAPI. É tão divertido!*"

**[Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) apresentador do podcast**

[(ref)](https://x.com/brianokken/status/1112220079972728832)

"*Honestamente, o que você construiu parece super sólido e refinado. De muitas formas, é o que eu queria que o Hug fosse - é realmente inspirador ver alguém construir isso.*"

**criador do [Hug](https://github.com/hugapi/hug)**

[(ref)](https://news.ycombinator.com/item?id=19455465)

"*Se você está procurando aprender um framework moderno para construir APIs REST, dê uma olhada no FastAPI [...] É rápido, fácil de usar e fácil de aprender [...]*"

"*Nós trocamos nossas APIs por FastAPI [...] Acredito que você gostará dele [...]*"

**fundadores da [Explosion AI](https://explosion.ai) - criadores da [spaCy](https://spacy.io)**

[(ref)](https://x.com/_inesmontani/status/1144173225322143744)-

[(ref)](https://x.com/honnibal/status/1144031421859655680)

"*Se alguém estiver procurando construir uma API Python para produção, eu recomendaria fortemente o FastAPI. Ele é lindamente projetado, simples de usar e altamente escalável, e se tornou um componente chave para a nossa estratégia de desenvolvimento API first, impulsionando diversas automações e serviços, como o nosso Virtual TAC Engineer.*"

**Cisco**

[(ref)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## Mini documentário do FastAPI[¶](#fastapi-mini-documentary)

Há um [mini documentário do FastAPI](https://www.youtube.com/watch?v=mpR8ngthqiE) lançado no fim de 2025, você pode assisti-lo online:

**Typer**, o FastAPI das interfaces de linhas de comando[¶](#typer-the-fastapi-of-clis)

Se você estiver construindo uma aplicação CLI para ser utilizada no terminal ao invés de uma API web, dê uma olhada no [ Typer](https://typer.tiangolo.com/).

**Typer** é o irmão menor do FastAPI. E seu propósito é ser o **FastAPI das CLIs**. ⌨️ 🚀

## Requisitos[¶](#requirements)

FastAPI está nos ombros de gigantes:

## Instalação[¶](#installation)

Crie e ative um [ambiente virtual](https://fastapi.tiangolo.com/pt/virtual-environments/) e então instale o FastAPI:

```
$ pip install "fastapi[standard]"
---> 100%
```


**Nota**: Certifique-se de que você colocou `"fastapi[standard]"`

com aspas, para garantir que funcione em todos os terminais.

## Exemplo[¶](#example)

### Crie[¶](#create-it)

Crie um arquivo `main.py`

com:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## Ou use `async def`

...

Se seu código utiliza `async`

/ `await`

, use `async def`

:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**Nota**:

Se você não sabe, verifique a seção *"Com pressa?"* sobre [ async e await nas docs](https://fastapi.tiangolo.com/pt/async/#in-a-hurry).


### Rode[¶](#run-it)

Rode o servidor com:

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


## Sobre o comando `fastapi dev`

...

O comando `fastapi dev`

lê automaticamente o seu arquivo `main.py`

, detecta a aplicação **FastAPI** nele e inicia um servidor usando o [Uvicorn](https://www.uvicorn.dev).

Por padrão, o `fastapi dev`

iniciará com auto-reload habilitado para desenvolvimento local.

Você pode ler mais sobre isso na [documentação do FastAPI CLI](https://fastapi.tiangolo.com/pt/fastapi-cli/).

### Verifique[¶](#check-it)

Abra seu navegador em [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery).

Você verá a resposta JSON como:

```
{"item_id": 5, "q": "somequery"}
```


Você acabou de criar uma API que:

- Recebe requisições HTTP nos
*paths*`/`

e`/items/{item_id}`

. - Ambos
*paths*fazem*operações*`GET`

(também conhecido como*métodos*HTTP). - O
*path*`/items/{item_id}`

tem um*parâmetro de path*`item_id`

que deve ser um`int`

. - O
*path*`/items/{item_id}`

tem um*parâmetro query*`q`

`str`

opcional.

### Documentação Interativa da API[¶](#interactive-api-docs)

Agora vá para [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

Você verá a documentação automática interativa da API (fornecida por [Swagger UI](https://github.com/swagger-api/swagger-ui)):

### Documentação Alternativa da API[¶](#alternative-api-docs)

E agora, vá para [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

Você verá a documentação automática alternativa (fornecida por [ReDoc](https://github.com/Rebilly/ReDoc)):

## Evoluindo o Exemplo[¶](#example-upgrade)

Agora modifique o arquivo `main.py`

para receber um corpo de uma requisição `PUT`

.

Declare o corpo utilizando tipos padrão Python, graças ao Pydantic.

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


O servidor `fastapi dev`

deverá recarregar automaticamente.

### Evoluindo a Documentação Interativa da API[¶](#interactive-api-docs-upgrade)

Agora vá para [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

- A documentação interativa da API será automaticamente atualizada, incluindo o novo corpo:

- Clique no botão "Try it out", ele permitirá que você preencha os parâmetros e interaja diretamente com a API:

- Então clique no botão "Execute", a interface do usuário irá se comunicar com a API, enviar os parâmetros, pegar os resultados e mostrá-los na tela:

### Evoluindo a Documentação Alternativa da API[¶](#alternative-api-docs-upgrade)

E agora, vá para [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

- A documentação alternativa também irá refletir o novo parâmetro query e o corpo:

### Recapitulando[¶](#recap)

Resumindo, você declara **uma vez** os tipos dos parâmetros, corpo etc. como parâmetros de função.

Você faz isso com os tipos padrão do Python moderno.

Você não terá que aprender uma nova sintaxe, os métodos ou classes de uma biblioteca específica etc.

Apenas **Python** padrão.

Por exemplo, para um `int`

:

```
item_id: int
```


ou para um modelo mais complexo, `Item`

:

```
item: Item
```


...e com essa única declaração você tem:

- Suporte ao Editor, incluindo:
- Completação.
- Verificação de tipos.

- Validação de dados:
- Erros automáticos e claros quando o dado é inválido.
- Validação até para objetos JSON profundamente aninhados.

- Conversão de dados de entrada: vindo da rede para dados e tipos Python. Consegue ler:
- JSON.
- Parâmetros de path.
- Parâmetros query.
- Cookies.
- Cabeçalhos.
- Formulários.
- Arquivos.

- Conversão de dados de saída: convertendo de tipos e dados Python para dados de rede (como JSON):
- Converte tipos Python (
`str`

,`int`

,`float`

,`bool`

,`list`

etc). - Objetos
`datetime`

. - Objetos
`UUID`

. - Modelos de Banco de Dados.
- ...e muito mais.

- Converte tipos Python (
- Documentação interativa automática da API, incluindo 2 alternativas de interface de usuário:
- Swagger UI.
- ReDoc.


Voltando ao código do exemplo anterior, **FastAPI** irá:

- Validar que existe um
`item_id`

no path para requisições`GET`

e`PUT`

. - Validar que
`item_id`

é do tipo`int`

para requisições`GET`

e`PUT`

.- Se não for, o cliente verá um erro útil e claro.

- Verificar se existe um parâmetro query opcional nomeado como
`q`

(como em`http://127.0.0.1:8000/items/foo?q=somequery`

) para requisições`GET`

.- Como o parâmetro
`q`

é declarado com`= None`

, ele é opcional. - Sem o
`None`

ele seria obrigatório (como o corpo no caso de`PUT`

).

- Como o parâmetro
- Para requisições
`PUT`

para`/items/{item_id}`

, lerá o corpo como JSON:- Verifica que tem um atributo obrigatório
`name`

que deve ser`str`

. - Verifica que tem um atributo obrigatório
`price`

que tem que ser um`float`

. - Verifica que tem um atributo opcional
`is_offer`

, que deve ser um`bool`

, se presente. - Tudo isso também funcionaria para objetos JSON profundamente aninhados.

- Verifica que tem um atributo obrigatório
- Converter de e para JSON automaticamente.
- Documentar tudo com OpenAPI, que poderá ser usado por:
- Sistemas de documentação interativos.
- Sistemas de clientes de geração de código automáticos, para muitas linguagens.

- Fornecer diretamente 2 interfaces web de documentação interativa.

Nós apenas arranhamos a superfície, mas você já tem ideia de como tudo funciona.

Experimente mudar a seguinte linha:

```
return {"item_name": item.name, "item_id": item_id}
```


...de:

```
... "item_name": item.name ...
```


...para:

```
... "item_price": item.price ...
```


...e veja como seu editor irá auto-completar os atributos e saberá os tipos:

Para um exemplo mais completo incluindo mais recursos, veja o [Tutorial - Guia do Usuário](https://fastapi.tiangolo.com/pt/tutorial/).

**Alerta de Spoiler**: o tutorial - guia do usuário inclui:

- Declaração de
**parâmetros**de diferentes lugares como:**cabeçalhos**,**cookies**,**campos de formulários**e**arquivos**. - Como configurar
**limitações de validação**como`maximum_length`

ou`regex`

. - Um poderoso e fácil de usar sistema de
**Injeção de Dependência**. - Segurança e autenticação, incluindo suporte para
**OAuth2**com autenticação com**JWT tokens**e**HTTP Basic**. - Técnicas mais avançadas (mas igualmente fáceis) para declaração de
**modelos JSON profundamente aninhados**(graças ao Pydantic). - Integrações
**GraphQL**com o[Strawberry](https://strawberry.rocks)e outras bibliotecas. - Muitos recursos extras (graças ao Starlette) como:
**WebSockets**- testes extremamente fáceis baseados em HTTPX e
`pytest`

**CORS****Cookie Sessions**- ...e mais.


### Implemente sua aplicação (opcional)[¶](#deploy-your-app-optional)

Você pode opcionalmente implantar sua aplicação FastAPI na [FastAPI Cloud](https://fastapicloud.com), vá e entre na lista de espera se ainda não o fez. 🚀

Se você já tem uma conta na **FastAPI Cloud** (nós convidamos você da lista de espera 😉), pode implantar sua aplicação com um único comando.

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


É isso! Agora você pode acessar sua aplicação nesse URL. ✨

#### Sobre a FastAPI Cloud[¶](#about-fastapi-cloud)

** FastAPI Cloud** é construída pelo mesmo autor e equipe por trás do

**FastAPI**.

Ela simplifica o processo de **construir**, **implantar** e **acessar** uma API com esforço mínimo.

Traz a mesma **experiência do desenvolvedor** de construir aplicações com FastAPI para **implantá-las** na nuvem. 🎉

A FastAPI Cloud é a principal patrocinadora e financiadora dos projetos open source do ecossistema *FastAPI and friends*. ✨

#### Implante em outros provedores de nuvem[¶](#deploy-to-other-cloud-providers)

FastAPI é open source e baseado em padrões. Você pode implantar aplicações FastAPI em qualquer provedor de nuvem que escolher.

Siga os tutoriais do seu provedor de nuvem para implantar aplicações FastAPI com eles. 🤓

## Performance[¶](#performance)

Testes de performance independentes do TechEmpower mostram aplicações **FastAPI** rodando sob Uvicorn como [um dos frameworks Python mais rápidos disponíveis](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7), somente atrás de Starlette e Uvicorn (utilizados internamente pelo FastAPI). (*)

Para entender mais sobre isso, veja a seção [Comparações](https://fastapi.tiangolo.com/pt/benchmarks/).

## Dependências[¶](#dependencies)

O FastAPI depende do Pydantic e do Starlette.

### Dependências `standard`

[¶](#standard-dependencies)

Quando você instala o FastAPI com `pip install "fastapi[standard]"`

, ele vem com o grupo `standard`

de dependências opcionais:

Utilizado pelo Pydantic:

- para validação de email.`email-validator`


Utilizado pelo Starlette:

- Obrigatório caso você queira utilizar o`httpx`

`TestClient`

.- Obrigatório se você quer utilizar a configuração padrão de templates.`jinja2`

- Obrigatório se você deseja suporte a "parsing" de formulário, com`python-multipart`

`request.form()`

.

Utilizado pelo FastAPI:

- para o servidor que carrega e serve a sua aplicação. Isto inclui`uvicorn`

`uvicorn[standard]`

, que inclui algumas dependências (e.g.`uvloop`

) necessárias para servir em alta performance.`fastapi-cli[standard]`

- que disponibiliza o comando`fastapi`

.- Isso inclui
`fastapi-cloud-cli`

, que permite implantar sua aplicação FastAPI na[FastAPI Cloud](https://fastapicloud.com).

- Isso inclui

### Sem as dependências `standard`

[¶](#without-standard-dependencies)

Se você não deseja incluir as dependências opcionais `standard`

, você pode instalar utilizando `pip install fastapi`

ao invés de `pip install "fastapi[standard]"`

.

### Sem o `fastapi-cloud-cli`

[¶](#without-fastapi-cloud-cli)

Se você quiser instalar o FastAPI com as dependências padrão, mas sem o `fastapi-cloud-cli`

, você pode instalar com `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

.

### Dependências opcionais adicionais[¶](#additional-optional-dependencies)

Existem algumas dependências adicionais que você pode querer instalar.

Dependências opcionais adicionais do Pydantic:

- para gerenciamento de configurações.`pydantic-settings`

- para tipos extras a serem utilizados com o Pydantic.`pydantic-extra-types`


Dependências opcionais adicionais do FastAPI:

- Obrigatório se você deseja utilizar o`orjson`

`ORJSONResponse`

.- Obrigatório se você deseja utilizar o`ujson`

`UJSONResponse`

.

## Licença[¶](#license)

Esse projeto é licenciado sob os termos da licença MIT.

---

## Source: https://fastapi.tiangolo.com/ru/

# FastAPI[¶](#fastapi)

## 🌐 Перевод выполнен с помощью ИИ и людей

Этот перевод был сделан ИИ под руководством людей. 🤝

В нем могут быть ошибки из-за неправильного понимания оригинального смысла или неестественности и т. д. 🤖

Вы можете улучшить этот перевод, [помогая нам лучше направлять ИИ LLM](https://fastapi.tiangolo.com/ru/contributing/#translations).

*Фреймворк FastAPI: высокая производительность, прост в изучении, позволяет быстро писать код, готов к продакшн*

**Документация**: [https://fastapi.tiangolo.com](https://fastapi.tiangolo.com/ru)

**Исходный код**: [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI — это современный, быстрый (высокопроизводительный) веб-фреймворк для создания API на Python, основанный на стандартных аннотациях типов Python.

Ключевые особенности:

**Скорость**: Очень высокая производительность, на уровне**NodeJS**и**Go**(благодаря Starlette и Pydantic).[Один из самых быстрых доступных фреймворков Python](#performance).**Быстрота разработки**: Увеличьте скорость разработки фич примерно на 200–300%. ***Меньше ошибок**: Сократите примерно на 40% количество ошибок, вызванных человеком (разработчиком). ***Интуитивность**: Отличная поддержка редактора кода. Автозавершение везде. Меньше времени на отладку.**Простота**: Разработан так, чтобы его было легко использовать и осваивать. Меньше времени на чтение документации.**Краткость**: Минимизируйте дублирование кода. Несколько возможностей из каждого объявления параметров. Меньше ошибок.**Надежность**: Получите код, готовый к продакшн. С автоматической интерактивной документацией.**На основе стандартов**: Основан на открытых стандартах API и полностью совместим с ними:[OpenAPI](https://github.com/OAI/OpenAPI-Specification)(ранее известный как Swagger) и[JSON Schema](https://json-schema.org/).

* оценка на основе тестов внутренней команды разработчиков, создающих продакшн-приложения.

## Спонсоры[¶](#sponsors)

### Ключевой-спонсор[¶](#keystone-sponsor)

### Золотые и серебряные спонсоры[¶](#gold-and-silver-sponsors)

## Мнения[¶](#opinions)

"*[...] В последнее время я много где использую FastAPI. [...] На самом деле я планирую использовать его для всех ML-сервисов моей команды в Microsoft. Некоторые из них интегрируются в основной продукт Windows, а некоторые — в продукты Office.*"

**Microsoft**

[(ref)](https://github.com/fastapi/fastapi/pull/26)

"*Мы начали использовать библиотеку FastAPI, чтобы поднять REST-сервер, к которому можно обращаться за предсказаниями. [для Ludwig]*"

**Uber**

[(ref)](https://eng.uber.com/ludwig-v0-2/)

"* Netflix рада объявить об открытом релизе нашего фреймворка оркестрации антикризисного управления: Dispatch! [создан с помощью FastAPI]*"

**Netflix**

[(ref)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

"*Я в полном восторге от FastAPI. Это так весело!*"

**Ведущий подкаста [Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855)**

[(ref)](https://x.com/brianokken/status/1112220079972728832)

"*Честно говоря, то, что вы создали, выглядит очень солидно и отполировано. Во многих смыслах это то, чем я хотел видеть Hug — очень вдохновляет видеть, как кто-то это создал.*"

**Создатель [Hug](https://github.com/hugapi/hug)**

[(ref)](https://news.ycombinator.com/item?id=19455465)

"*Если вы хотите изучить один современный фреймворк для создания REST API, посмотрите FastAPI [...] Он быстрый, простой в использовании и лёгкий в изучении [...]*"

"*Мы переключились на FastAPI для наших API [...] Думаю, вам тоже понравится [...]*"

**Основатели [Explosion AI](https://explosion.ai) — создатели [spaCy](https://spacy.io)**

[(ref)](https://x.com/_inesmontani/status/1144173225322143744)-

[(ref)](https://x.com/honnibal/status/1144031421859655680)

"*Если кто-то собирается делать продакшн-API на Python, я настоятельно рекомендую FastAPI. Он прекрасно спроектирован, прост в использовании и отлично масштабируется, стал ключевым компонентом нашей стратегии API-first и приводит в действие множество автоматизаций и сервисов, таких как наш Virtual TAC Engineer.*"

**Cisco**

[(ref)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## Мини-документальный фильм о FastAPI[¶](#fastapi-mini-documentary)

В конце 2025 года вышел [мини-документальный фильм о FastAPI](https://www.youtube.com/watch?v=mpR8ngthqiE), вы можете посмотреть его онлайн:

**Typer**, FastAPI для CLI[¶](#typer-the-fastapi-of-clis)

Если вы создаёте приложение CLI для использования в терминале вместо веб-API, посмотрите [ Typer](https://typer.tiangolo.com/).

**Typer** — младший брат FastAPI. И он задуман как **FastAPI для CLI**. ⌨️ 🚀

## Зависимости[¶](#requirements)

FastAPI стоит на плечах гигантов:

## Установка[¶](#installation)

Создайте и активируйте [виртуальное окружение](https://fastapi.tiangolo.com/ru/virtual-environments/), затем установите FastAPI:

```
$ pip install "fastapi[standard]"
---> 100%
```


**Примечание**: Обязательно заключите `"fastapi[standard]"`

в кавычки, чтобы это работало во всех терминалах.

## Пример[¶](#example)

### Создание[¶](#create-it)

Создайте файл `main.py`

со следующим содержимым:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## Или используйте `async def`

...

Если ваш код использует `async`

/ `await`

, используйте `async def`

:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**Примечание**:

Если не уверены, посмотрите раздел *«Нет времени?»* о [ async и await в документации](https://fastapi.tiangolo.com/ru/async/#in-a-hurry).


### Запуск[¶](#run-it)

Запустите сервер командой:

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


## О команде `fastapi dev`

...

Команда `fastapi dev`

читает ваш файл `main.py`

, находит в нём приложение **FastAPI** и запускает сервер с помощью [Uvicorn](https://www.uvicorn.dev).

По умолчанию `fastapi dev`

запускается с включённой авто-перезагрузкой для локальной разработки.

Подробнее в [документации по FastAPI CLI](https://fastapi.tiangolo.com/ru/fastapi-cli/).

### Проверка[¶](#check-it)

Откройте браузер на [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery).

Вы увидите JSON-ответ:

```
{"item_id": 5, "q": "somequery"}
```


Вы уже создали API, который:

- Получает HTTP-запросы по
*путям*`/`

и`/items/{item_id}`

. - Оба
*пути*используют`GET`

*операции*(также известные как HTTP*методы*). *Путь*`/items/{item_id}`

имеет*path-параметр*`item_id`

, который должен быть`int`

.*Путь*`/items/{item_id}`

имеет необязательный`str`

*параметр запроса*`q`

.

### Интерактивная документация API[¶](#interactive-api-docs)

Перейдите на [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

Вы увидите автоматическую интерактивную документацию API (предоставлена [Swagger UI](https://github.com/swagger-api/swagger-ui)):

### Альтернативная документация API[¶](#alternative-api-docs)

Теперь откройте [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

Вы увидите альтернативную автоматическую документацию (предоставлена [ReDoc](https://github.com/Rebilly/ReDoc)):

## Пример обновления[¶](#example-upgrade)

Теперь измените файл `main.py`

, чтобы принимать тело запроса из `PUT`

HTTP-запроса.

Объявите тело запроса, используя стандартные типы Python, спасибо Pydantic.

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


Сервер `fastapi dev`

должен перезагрузиться автоматически.

### Обновление интерактивной документации API[¶](#interactive-api-docs-upgrade)

Перейдите на [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

- Интерактивная документация API будет автоматически обновлена, включая новое тело запроса:

- Нажмите кнопку «Try it out», это позволит вам заполнить параметры и напрямую взаимодействовать с API:

- Затем нажмите кнопку «Execute», интерфейс свяжется с вашим API, отправит параметры, получит результаты и отобразит их на экране:

### Обновление альтернативной документации API[¶](#alternative-api-docs-upgrade)

Теперь откройте [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

- Альтернативная документация также отразит новый параметр запроса и тело запроса:

### Подведём итоги[¶](#recap)

Итак, вы объявляете **один раз** типы параметров, тело запроса и т.д. как параметры функции.

Вы делаете это с помощью стандартных современных типов Python.

Вам не нужно изучать новый синтаксис, методы или классы конкретной библиотеки и т.п.

Только стандартный **Python**.

Например, для `int`

:

```
item_id: int
```


или для более сложной модели `Item`

:

```
item: Item
```


...и с этим единственным объявлением вы получаете:

- Поддержку редактора кода, включая:
- Автозавершение.
- Проверку типов.

- Валидацию данных:
- Автоматические и понятные ошибки, когда данные некорректны.
- Валидацию даже для глубоко вложенных объектов JSON.

- Преобразование входных данных: из сети в данные и типы Python. Чтение из:
- JSON.
- Параметров пути.
- Параметров запроса.
- Cookies.
- HTTP-заголовков.
- Форм.
- Файлов.

- Преобразование выходных данных: из данных и типов Python в данные сети (например, JSON):
- Преобразование типов Python (
`str`

,`int`

,`float`

,`bool`

,`list`

и т.д.). - Объекты
`datetime`

. - Объекты
`UUID`

. - Модели баз данных.
- ...и многое другое.

- Преобразование типов Python (
- Автоматическую интерактивную документацию API, включая 2 альтернативных интерфейса:
- Swagger UI.
- ReDoc.


Возвращаясь к предыдущему примеру кода, **FastAPI** будет:

- Валидировать наличие
`item_id`

в пути для`GET`

и`PUT`

HTTP-запросов. - Валидировать, что
`item_id`

имеет тип`int`

для`GET`

и`PUT`

HTTP-запросов.- Если это не так, клиент увидит полезную понятную ошибку.

- Проверять, есть ли необязательный параметр запроса с именем
`q`

(например,`http://127.0.0.1:8000/items/foo?q=somequery`

) для`GET`

HTTP-запросов.- Поскольку параметр
`q`

объявлен с`= None`

, он необязателен. - Без
`None`

он был бы обязательным (как тело запроса в случае с`PUT`

).

- Поскольку параметр
- Для
`PUT`

HTTP-запросов к`/items/{item_id}`

читать тело запроса как JSON:- Проверять, что есть обязательный атрибут
`name`

, который должен быть`str`

. - Проверять, что есть обязательный атрибут
`price`

, который должен быть`float`

. - Проверять, что есть необязательный атрибут
`is_offer`

, который должен быть`bool`

, если он присутствует. - Всё это также будет работать для глубоко вложенных объектов JSON.

- Проверять, что есть обязательный атрибут
- Автоматически преобразовывать из и в JSON.
- Документировать всё с помощью OpenAPI, что может быть использовано:
- Системами интерактивной документации.
- Системами автоматической генерации клиентского кода для многих языков.

- Предоставлять 2 веб-интерфейса интерактивной документации напрямую.

Мы только поверхностно ознакомились, но вы уже понимаете, как всё это работает.

Попробуйте изменить строку:

```
return {"item_name": item.name, "item_id": item_id}
```


...из:

```
... "item_name": item.name ...
```


...на:

```
... "item_price": item.price ...
```


...и посмотрите, как ваш редактор кода будет автоматически дополнять атрибуты и знать их типы:

Более полный пример с дополнительными возможностями см. в [Учебник - Руководство пользователя](https://fastapi.tiangolo.com/ru/tutorial/).

**Осторожно, спойлер**: учебник - руководство пользователя включает:

- Объявление
**параметров**из других источников:**HTTP-заголовки**,**cookies**,**поля формы**и**файлы**. - Как задать
**ограничения валидации**вроде`maximum_length`

или`regex`

. - Очень мощную и простую в использовании систему
**внедрения зависимостей**. - Безопасность и аутентификацию, включая поддержку
**OAuth2**с**JWT токенами**и**HTTP Basic**аутентификацию. - Более продвинутые (но столь же простые) приёмы объявления
**глубоко вложенных JSON-моделей**(спасибо Pydantic). - Интеграцию
**GraphQL**с[Strawberry](https://strawberry.rocks)и другими библиотеками. - Множество дополнительных функций (благодаря Starlette), таких как:
**WebSockets**- чрезвычайно простые тесты на основе HTTPX и
`pytest`

**CORS****сессии с использованием cookie**- ...и многое другое.


### Разверните приложение (опционально)[¶](#deploy-your-app-optional)

При желании вы можете развернуть своё приложение FastAPI в [FastAPI Cloud](https://fastapicloud.com), присоединяйтесь к списку ожидания, если ещё не сделали этого. 🚀

Если у вас уже есть аккаунт **FastAPI Cloud** (мы пригласили вас из списка ожидания 😉), вы можете развернуть ваше приложение одной командой.

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


Вот и всё! Теперь вы можете открыть ваше приложение по этой ссылке. ✨

#### О FastAPI Cloud[¶](#about-fastapi-cloud)

** FastAPI Cloud** создан тем же автором и командой, что и

**FastAPI**.

Он упрощает процесс **создания образа**, **развертывания** и **доступа** к API при минимальных усилиях.

Он переносит тот же **опыт разработчика**, что и при создании приложений на FastAPI, на их **развертывание** в облаке. 🎉

FastAPI Cloud — основной спонсор и источник финансирования для проектов с открытым исходным кодом из экосистемы *FastAPI and friends*. ✨

#### Развертывание у других облачных провайдеров[¶](#deploy-to-other-cloud-providers)

FastAPI — это open source и стандартизированный фреймворк. Вы можете развернуть приложения FastAPI у любого облачного провайдера на ваш выбор.

Следуйте руководствам вашего облачного провайдера по развертыванию приложений FastAPI. 🤓

## Производительность[¶](#performance)

Независимые бенчмарки TechEmpower показывают приложения **FastAPI**, работающие под управлением Uvicorn, как [один из самых быстрых доступных фреймворков Python](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7), уступающий только самим Starlette и Uvicorn (используются внутри FastAPI). (*)

Чтобы узнать больше, см. раздел [Бенчмарки](https://fastapi.tiangolo.com/ru/benchmarks/).

## Зависимости[¶](#dependencies)

FastAPI зависит от Pydantic и Starlette.

### Зависимости `standard`

[¶](#standard-dependencies)

Когда вы устанавливаете FastAPI с помощью `pip install "fastapi[standard]"`

, он идёт с группой опциональных зависимостей `standard`

:

Используется Pydantic:

— для проверки адресов электронной почты.`email-validator`


Используется Starlette:

— обязателен, если вы хотите использовать`httpx`

`TestClient`

.— обязателен, если вы хотите использовать конфигурацию шаблонов по умолчанию.`jinja2`

- обязателен, если вы хотите поддерживать «парсинг» форм через`python-multipart`

`request.form()`

.

Используется FastAPI:

— сервер, который загружает и «отдаёт» ваше приложение. Включает`uvicorn`

`uvicorn[standard]`

, содержащий некоторые зависимости (например,`uvloop`

), нужные для высокой производительности.`fastapi-cli[standard]`

— чтобы предоставить команду`fastapi`

.- Включает
`fastapi-cloud-cli`

, который позволяет развернуть ваше приложение FastAPI в[FastAPI Cloud](https://fastapicloud.com).

- Включает

### Без зависимостей `standard`

[¶](#without-standard-dependencies)

Если вы не хотите включать опциональные зависимости `standard`

, можно установить `pip install fastapi`

вместо `pip install "fastapi[standard]"`

.

### Без `fastapi-cloud-cli`

[¶](#without-fastapi-cloud-cli)

Если вы хотите установить FastAPI со стандартными зависимостями, но без `fastapi-cloud-cli`

, установите `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

.

### Дополнительные опциональные зависимости[¶](#additional-optional-dependencies)

Есть дополнительные зависимости, которые вы можете установить.

Дополнительные опциональные зависимости Pydantic:

— для управления настройками.`pydantic-settings`

— дополнительные типы для использования с Pydantic.`pydantic-extra-types`


Дополнительные опциональные зависимости FastAPI:

— обязателен, если вы хотите использовать`orjson`

`ORJSONResponse`

.— обязателен, если вы хотите использовать`ujson`

`UJSONResponse`

.

## Лицензия[¶](#license)

Этот проект распространяется на условиях лицензии MIT.

---

## Source: https://fastapi.tiangolo.com/tr/

# FastAPI[¶](#fastapi)

## 🌐 Yapay Zekâ ve İnsanlar Tarafından Çeviri

Bu çeviri, insanlar tarafından yönlendirilen bir yapay zekâ ile oluşturuldu. 🤝

Orijinal anlamın yanlış anlaşılması ya da kulağa doğal gelmeme gibi hatalar içerebilir. 🤖

[Yapay zekâ LLM'ini daha iyi yönlendirmemize yardımcı olarak](https://fastapi.tiangolo.com/tr/contributing/#translations) bu çeviriyi iyileştirebilirsiniz.

*FastAPI framework, yüksek performanslı, öğrenmesi kolay, kodlaması hızlı, production'a hazır*

**Dokümantasyon**: [https://fastapi.tiangolo.com/tr](https://fastapi.tiangolo.com/tr)

**Kaynak Kod**: [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI, Python'un standart type hints'lerine dayalı olarak Python ile API'lar oluşturmak için kullanılan modern ve hızlı (yüksek performanslı) bir web framework'üdür.

Temel özellikleri şunlardır:

**Hızlı**: Çok yüksek performanslı,**NodeJS**ve**Go**ile eşit düzeyde (Starlette ve Pydantic sayesinde).[Mevcut en hızlı Python framework'lerinden biri](#performance).**Kodlaması Hızlı**: Özellik geliştirme hızını yaklaşık %200 ile %300 aralığında artırır. ***Daha az hata**: İnsan (geliştirici) kaynaklı hataları yaklaşık %40 azaltır. ***Sezgisel**: Harika bir editör desteği. Her yerde Tamamlama. Hata ayıklamaya daha az zaman.**Kolay**: Kullanımı ve öğrenmesi kolay olacak şekilde tasarlandı. Doküman okumaya daha az zaman.**Kısa**: Kod tekrarını minimize eder. Her parametre tanımından birden fazla özellik. Daha az hata.**Sağlam**: Production'a hazır kod elde edersiniz. Otomatik etkileşimli dokümantasyon ile birlikte.**Standardlara dayalı**: API'lar için açık standartlara dayalıdır (ve tamamen uyumludur);[OpenAPI](https://github.com/OAI/OpenAPI-Specification)(önceden Swagger olarak biliniyordu) ve[JSON Schema](https://json-schema.org/).

* tahmin, production uygulamalar geliştiren dahili bir geliştirme ekibinin yaptığı testlere dayanmaktadır.

## Sponsorlar[¶](#sponsors)

### Keystone Sponsor[¶](#keystone-sponsor)

### Gold and Silver Sponsors[¶](#gold-and-silver-sponsors)

## Görüşler[¶](#opinions)

"*[...] Bugünlerde FastAPI'ı çok fazla kullanıyorum. [...] Aslında bunu ekibimin Microsoft'taki ML servislerinin tamamında kullanmayı planlıyorum. Bunlardan bazıları ana Windows ürününe ve bazı Office ürünlerine entegre ediliyor.*"

**Microsoft**

[(ref)](https://github.com/fastapi/fastapi/pull/26)

"* predictions almak için sorgulanabilecek bir REST server oluşturmak amacıyla FastAPI kütüphanesini benimsedik. [Ludwig için]*"

**Uber**

[(ref)](https://eng.uber.com/ludwig-v0-2/)

"* Netflix, kriz yönetimi orkestrasyon framework'ümüz: Dispatch'in open-source sürümünü duyurmaktan memnuniyet duyar! [FastAPI ile geliştirildi]*"

**Netflix**

[(ref)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

"* FastAPI için ayın üzerindeymişcesine heyecanlıyım. Çok eğlenceli!*"

**[Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) podcast host**

[(ref)](https://x.com/brianokken/status/1112220079972728832)

"*Dürüst olmak gerekirse, inşa ettiğiniz şey gerçekten sağlam ve profesyonel görünüyor. Birçok açıdan, Hug'ın olmasını istediğim şey tam da bu - böyle bir şeyi inşa eden birini görmek gerçekten ilham verici.*"

**[Hug](https://github.com/hugapi/hug) yaratıcısı**

[(ref)](https://news.ycombinator.com/item?id=19455465)

"*REST API'lar geliştirmek için modern bir framework öğrenmek istiyorsanız, FastAPI'a bir göz atın [...] Hızlı, kullanımı ve öğrenmesi kolay [...]*"

"* API'larımız için FastAPI'a geçtik [...] Bence hoşunuza gidecek [...]*"

**[Explosion AI](https://explosion.ai) kurucuları - [spaCy](https://spacy.io) yaratıcıları**

[(ref)](https://x.com/_inesmontani/status/1144173225322143744)-

[(ref)](https://x.com/honnibal/status/1144031421859655680)

"*Production'da Python API geliştirmek isteyen herkese FastAPI'ı şiddetle tavsiye ederim. Harika tasarlanmış, kullanımı kolay ve yüksek ölçeklenebilir; API-first geliştirme stratejimizin kilit bir bileşeni haline geldi ve Virtual TAC Engineer gibi birçok otomasyon ve servise güç veriyor.*"

**Cisco**

[(ref)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## FastAPI mini belgeseli[¶](#fastapi-mini-documentary)

2025'in sonunda yayınlanan bir [FastAPI mini belgeseli](https://www.youtube.com/watch?v=mpR8ngthqiE) var, online olarak izleyebilirsiniz:

## CLI'ların FastAPI'ı: **Typer**[¶](#typer-the-fastapi-of-clis)

Web API yerine terminalde kullanılacak bir CLI uygulaması geliştiriyorsanız [ Typer](https://typer.tiangolo.com/)'a göz atın.

**Typer**, FastAPI'ın küçük kardeşi. Ve hedefi CLI'ların **FastAPI'ı** olmak. ⌨️ 🚀

## Gereksinimler[¶](#requirements)

FastAPI iki devin omuzları üstünde duruyor:

## Kurulum[¶](#installation)

Bir [virtual environment](https://fastapi.tiangolo.com/tr/virtual-environments/) oluşturup etkinleştirelim ve ardından FastAPI'ı yükleyelim:

```
$ pip install "fastapi[standard]"
---> 100%
```


**Not**: Tüm terminallerde çalıştığından emin olmak için `"fastapi[standard]"`

ifadesini tırnak içinde yazdığınızdan emin olun.

## Örnek[¶](#example)

### Oluşturalım[¶](#create-it)

Şu içerikle `main.py`

adında bir dosya oluşturalım:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## Ya da `async def`

kullanalım...

Eğer kodunuz `async`

/ `await`

kullanıyorsa, `async def`

kullanın:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**Not**:

Eğer bilmiyorsanız, dokümanlardaki [ async ve await](https://fastapi.tiangolo.com/tr/async/#in-a-hurry) hakkında


*"Aceleniz mi var?"*bölümüne bakın.

### Çalıştıralım[¶](#run-it)

Sunucuyu şu komutla çalıştıralım:

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


`fastapi dev`

komutu hakkında...

`fastapi dev`

komutu, `main.py`

dosyanızı okur, içindeki **FastAPI** uygulamasını algılar ve [Uvicorn](https://www.uvicorn.dev) kullanarak bir server başlatır.

Varsayılan olarak `fastapi dev`

, local geliştirme için auto-reload etkin şekilde başlar.

Daha fazla bilgi için [FastAPI CLI dokümantasyonu](https://fastapi.tiangolo.com/tr/fastapi-cli/)'nu okuyabilirsiniz.

### Kontrol Edelim[¶](#check-it)

Tarayıcınızda şu bağlantıyı açın: [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery).

Şu JSON response'unu göreceksiniz:

```
{"item_id": 5, "q": "somequery"}
```


Artık şunları yapan bir API oluşturdunuz:

`/`

ve`/items/{item_id}`

*path*'lerinde HTTP request'leri alır.- Her iki
*path*de`GET`

*operasyonlarını*(HTTP*method*'ları olarak da bilinir) kabul eder. `/items/{item_id}`

*path*'i,`int`

olması gereken`item_id`

adlı bir*path parameter*'a sahiptir.`/items/{item_id}`

*path*'i, opsiyonel`str`

bir*query parameter*olan`q`

'ya sahiptir.

### Etkileşimli API dokümantasyonu[¶](#interactive-api-docs)

Şimdi [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) adresine gidin.

Otomatik etkileşimli API dokümantasyonunu göreceksiniz ([Swagger UI](https://github.com/swagger-api/swagger-ui) tarafından sağlanır):

### Alternatif API dokümantasyonu[¶](#alternative-api-docs)

Ve şimdi [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc) adresine gidin.

Alternatif otomatik dokümantasyonu göreceksiniz ([ReDoc](https://github.com/Rebilly/ReDoc) tarafından sağlanır):

## Örneği Güncelleyelim[¶](#example-upgrade)

Şimdi `main.py`

dosyasını, `PUT`

request'iyle gelen bir body alacak şekilde değiştirelim.

Body'yi Pydantic sayesinde standart Python tiplerini kullanarak tanımlayalım.

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


`fastapi dev`

server'ı otomatik olarak yeniden yüklemelidir.

### Etkileşimli API dokümantasyonu güncellemesi[¶](#interactive-api-docs-upgrade)

Şimdi [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) adresine gidin.

- Etkileşimli API dokümantasyonu, yeni body dahil olacak şekilde otomatik olarak güncellenecek:

- "Try it out" butonuna tıklayın; parametreleri doldurmanıza ve API ile doğrudan etkileşime girmenize olanak sağlar:

- Sonra "Execute" butonuna tıklayın; kullanıcı arayüzü API'nız ile iletişim kuracak, parametreleri gönderecek, sonuçları alacak ve ekranda gösterecek:

### Alternatif API dokümantasyonu güncellemesi[¶](#alternative-api-docs-upgrade)

Ve şimdi [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc) adresine gidin.

- Alternatif dokümantasyon da yeni query parameter ve body'yi yansıtacak:

### Özet[¶](#recap)

Özetle, parametrelerin, body'nin vb. type'larını fonksiyon parametreleri olarak **bir kere** tanımlarsınız.

Bunu standart modern Python tipleriyle yaparsınız.

Yeni bir syntax, belirli bir kütüphanenin method'larını ya da class'larını vb. öğrenmeniz gerekmez.

Sadece standart **Python**.

Örneğin bir `int`

için:

```
item_id: int
```


ya da daha karmaşık bir `Item`

modeli için:

```
item: Item
```


...ve bu tek tanımla şunları elde edersiniz:

- Şunlar dahil editör desteği:
- Completion.
- Type kontrolleri.

- Verinin doğrulanması:
- Veri geçersiz olduğunda otomatik ve anlaşılır hatalar.
- Çok derin iç içe JSON nesneleri için bile doğrulama.

- Girdi verisinin Dönüşümü: network'ten gelen veriyi Python verisine ve type'larına çevirir. Şunlardan okur:
- JSON.
- Path parameter'lar.
- Query parameter'lar.
- Cookie'ler.
- Header'lar.
- Form'lar.
- File'lar.

- Çıktı verisinin Dönüşümü: Python verisini ve type'larını network verisine çevirir (JSON olarak):
- Python type'larını dönüştürür (
`str`

,`int`

,`float`

,`bool`

,`list`

, vb.). `datetime`

nesneleri.`UUID`

nesneleri.- Veritabanı modelleri.
- ...ve daha fazlası.

- Python type'larını dönüştürür (
- 2 alternatif kullanıcı arayüzü dahil otomatik etkileşimli API dokümantasyonu:
- Swagger UI.
- ReDoc.


Önceki kod örneğine dönersek, **FastAPI** şunları yapacaktır:

`GET`

ve`PUT`

request'leri için path'te`item_id`

olduğunu doğrular.`GET`

ve`PUT`

request'leri için`item_id`

'nin type'ının`int`

olduğunu doğrular.- Değilse, client faydalı ve anlaşılır bir hata görür.

`GET`

request'leri için`q`

adlı opsiyonel bir query parameter olup olmadığını kontrol eder (`http://127.0.0.1:8000/items/foo?q=somequery`

örneğindeki gibi).`q`

parametresi`= None`

ile tanımlandığı için opsiyoneldir.`None`

olmasaydı zorunlu olurdu (tıpkı`PUT`

örneğindeki body gibi).

`/items/{item_id}`

'ye yapılan`PUT`

request'leri için body'yi JSON olarak okur:`str`

olması gereken, zorunlu`name`

alanı olduğunu kontrol eder.`float`

olması gereken, zorunlu`price`

alanı olduğunu kontrol eder.- Varsa,
`bool`

olması gereken opsiyonel`is_offer`

alanını kontrol eder. - Bunların hepsi çok derin iç içe JSON nesneleri için de çalışır.

- JSON'a ve JSON'dan dönüşümü otomatik yapar.
- Her şeyi OpenAPI ile dokümante eder; bu dokümantasyon şunlar tarafından kullanılabilir:
- Etkileşimli dokümantasyon sistemleri.
- Birçok dil için otomatik client kodu üretim sistemleri.

- 2 etkileşimli dokümantasyon web arayüzünü doğrudan sunar.

Daha yolun başındayız, ama bunun nasıl çalıştığı hakkında fikri kaptınız.

Şu satırı değiştirmeyi deneyin:

```
return {"item_name": item.name, "item_id": item_id}
```


...şundan:

```
... "item_name": item.name ...
```


...şuna:

```
... "item_price": item.price ...
```


...ve editörünüzün alanları otomatik tamamladığını ve type'larını bildiğini görün:

Daha fazla özellik içeren daha kapsamlı bir örnek için [Öğretici - Kullanıcı Rehberi](https://fastapi.tiangolo.com/tr/tutorial/)'ne bakın.

**Spoiler alert**: öğretici - kullanıcı rehberi şunları içerir:

**parameter**'ların farklı yerlerden:**header**'lar,**cookie**'ler,**form alanları**ve**file**'lar olarak tanımlanması.`maximum_length`

ya da`regex`

gibi**doğrulama kısıtlamalarının**nasıl ayarlanacağı.- Çok güçlü ve kullanımı kolay bir
**Bağımlılık Enjeksiyonu**sistemi. **JWT tokens**ve**HTTP Basic**auth ile**OAuth2**desteği dahil güvenlik ve kimlik doğrulama.**Çok derin iç içe JSON modelleri**tanımlamak için daha ileri (ama aynı derecede kolay) teknikler (Pydantic sayesinde).[Strawberry](https://strawberry.rocks)ve diğer kütüphaneler ile**GraphQL**entegrasyonu.- Starlette sayesinde gelen birçok ek özellik:
**WebSockets**- HTTPX ve
`pytest`

tabanlı aşırı kolay testler **CORS****Cookie Sessions**- ...ve daha fazlası.


### Uygulamanızı deploy edin (opsiyonel)[¶](#deploy-your-app-optional)

İsterseniz FastAPI uygulamanızı [FastAPI Cloud](https://fastapicloud.com)'a deploy edebilirsiniz; eğer henüz yapmadıysanız gidip bekleme listesine katılın. 🚀

Zaten bir **FastAPI Cloud** hesabınız varsa (bekleme listesinden sizi davet ettiysek 😉), uygulamanızı tek bir komutla deploy edebilirsiniz.

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


Hepsi bu! Artık uygulamanıza bu URL'den erişebilirsiniz. ✨

#### FastAPI Cloud hakkında[¶](#about-fastapi-cloud)

** FastAPI Cloud**,

**FastAPI**'ın arkasındaki aynı yazar ve ekip tarafından geliştirilmiştir.

**Bir API'ı build etmek**, **deploy etmek** ve **erişmek** süreçlerini minimum eforla kolaylaştırır.

FastAPI ile uygulama geliştirmenin sağladığı aynı **developer experience**'ı, onları cloud'a **deploy etmeye** de taşır. 🎉

FastAPI Cloud, *FastAPI and friends* open source projelerinin ana sponsoru ve finansman sağlayıcısıdır. ✨

#### Diğer cloud sağlayıcılarına deploy[¶](#deploy-to-other-cloud-providers)

FastAPI open source'tur ve standartlara dayanır. FastAPI uygulamalarını seçtiğiniz herhangi bir cloud sağlayıcısına deploy edebilirsiniz.

FastAPI uygulamalarını onlarla deploy etmek için cloud sağlayıcınızın rehberlerini takip edin. 🤓

## Performans[¶](#performance)

Bağımsız TechEmpower kıyaslamaları, Uvicorn altında çalışan **FastAPI** uygulamalarının [mevcut en hızlı Python framework'lerinden biri](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7) olduğunu gösteriyor; sadece Starlette ve Uvicorn'un kendisinin gerisinde (FastAPI tarafından dahili olarak kullanılır). (*)

Daha iyi anlamak için [Kıyaslamalar](https://fastapi.tiangolo.com/tr/benchmarks/) bölümüne bakın.

## Bağımlılıklar[¶](#dependencies)

FastAPI, Pydantic ve Starlette'a bağımlıdır.

`standard`

Bağımlılıkları[¶](#standard-dependencies)

FastAPI'ı `pip install "fastapi[standard]"`

ile yüklediğinizde, opsiyonel bağımlılıkların `standard`

grubuyla birlikte gelir:

Pydantic tarafından kullanılanlar:

- email doğrulaması için.`email-validator`


Starlette tarafından kullanılanlar:

-`httpx`

`TestClient`

kullanmak istiyorsanız gereklidir.- varsayılan template yapılandırmasını kullanmak istiyorsanız gereklidir.`jinja2`

-`python-multipart`

`request.form()`

ile, form "ayrıştırma" desteği istiyorsanız gereklidir.

FastAPI tarafından kullanılanlar:

- uygulamanızı yükleyen ve servis eden server için. Buna, yüksek performanslı servis için gereken bazı bağımlılıkları (örn.`uvicorn`

`uvloop`

) içeren`uvicorn[standard]`

dahildir.`fastapi-cli[standard]`

-`fastapi`

komutunu sağlamak için.- Buna, FastAPI uygulamanızı
[FastAPI Cloud](https://fastapicloud.com)'a deploy etmenizi sağlayan`fastapi-cloud-cli`

dahildir.

- Buna, FastAPI uygulamanızı

`standard`

Bağımlılıkları Olmadan[¶](#without-standard-dependencies)

`standard`

opsiyonel bağımlılıklarını dahil etmek istemiyorsanız, `pip install fastapi`

ile kurabilirsiniz.

`fastapi-cloud-cli`

Olmadan[¶](#without-fastapi-cloud-cli)

FastAPI'ı standard bağımlılıklarla ama `fastapi-cloud-cli`

olmadan kurmak istiyorsanız, `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

ile yükleyebilirsiniz.

### Ek Opsiyonel Bağımlılıklar[¶](#additional-optional-dependencies)

Yüklemek isteyebileceğiniz bazı ek bağımlılıklar da vardır.

Ek opsiyonel Pydantic bağımlılıkları:

- ayar yönetimi için.`pydantic-settings`

- Pydantic ile kullanılacak ek type'lar için.`pydantic-extra-types`


Ek opsiyonel FastAPI bağımlılıkları:

-`orjson`

`ORJSONResponse`

kullanmak istiyorsanız gereklidir.-`ujson`

`UJSONResponse`

kullanmak istiyorsanız gereklidir.

## Lisans[¶](#license)

Bu proje MIT lisansı şartları altında lisanslanmıştır.

---

## Source: https://fastapi.tiangolo.com/uk/

# FastAPI[¶](#fastapi)

## 🌐 Переклад ШІ та людьми

Цей переклад виконано ШІ під керівництвом людей. 🤝

Можливі помилки через неправильне розуміння початкового змісту або неприродні формулювання тощо. 🤖

Ви можете покращити цей переклад, [допомігши нам краще спрямовувати AI LLM](https://fastapi.tiangolo.com/uk/contributing/#translations).

*Фреймворк FastAPI - це висока продуктивність, легко вивчати, швидко писати код, готовий до продакшину*

**Документація**: [https://fastapi.tiangolo.com](https://fastapi.tiangolo.com/uk)

**Вихідний код**: [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI - це сучасний, швидкий (високопродуктивний) вебфреймворк для створення API за допомогою Python, що базується на стандартних підказках типів Python.

Ключові особливості:

**Швидкий**: дуже висока продуктивність, на рівні з**NodeJS**та**Go**(завдяки Starlette та Pydantic).[Один із найшвидших Python-фреймворків](#performance).**Швидке написання коду**: пришвидшує розробку функціоналу приблизно на 200%–300%. ***Менше помилок**: зменшує приблизно на 40% кількість помилок, спричинених людиною (розробником). ***Інтуїтивний**: чудова підтримка редакторами коду. Автодоповнення всюди. Менше часу на налагодження.**Простий**: спроєктований так, щоб бути простим у використанні та вивченні. Менше часу на читання документації.**Короткий**: мінімізує дублювання коду. Кілька можливостей з кожного оголошення параметра. Менше помилок.**Надійний**: ви отримуєте код, готовий до продакшину. З автоматичною інтерактивною документацією.**Заснований на стандартах**: базується на (і повністю сумісний з) відкритими стандартами для API:[OpenAPI](https://github.com/OAI/OpenAPI-Specification)(раніше відомий як Swagger) та[JSON Schema](https://json-schema.org/).

* оцінка на основі тестів, проведених внутрішньою командою розробників, що створює продакшн-застосунки.

## Спонсори[¶](#sponsors)

### Ключовий спонсор[¶](#keystone-sponsor)

### Золоті та срібні спонсори[¶](#gold-and-silver-sponsors)

## Враження[¶](#opinions)

"*[...] I'm using FastAPI a ton these days. [...] I'm actually planning to use it for all of my team's ML services at Microsoft. Some of them are getting integrated into the core Windows product and some Office products.*"

**Microsoft**

[(ref)](https://github.com/fastapi/fastapi/pull/26)

"*We adopted the FastAPI library to spawn a REST server that can be queried to obtain predictions. [for Ludwig]*"

**Uber**

[(ref)](https://eng.uber.com/ludwig-v0-2/)

"* Netflix is pleased to announce the open-source release of our crisis management orchestration framework: Dispatch! [built with FastAPI]*"

**Netflix**

[(ref)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

"*I’m over the moon excited about FastAPI. It’s so fun!*"

**[Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) podcast host**

[(ref)](https://x.com/brianokken/status/1112220079972728832)

"*Honestly, what you've built looks super solid and polished. In many ways, it's what I wanted Hug to be - it's really inspiring to see someone build that.*"

**[Hug](https://github.com/hugapi/hug) creator**

[(ref)](https://news.ycombinator.com/item?id=19455465)

"*If you're looking to learn one modern framework for building REST APIs, check out FastAPI [...] It's fast, easy to use and easy to learn [...]*"

"*We've switched over to FastAPI for our APIs [...] I think you'll like it [...]*"

**[Explosion AI](https://explosion.ai) founders - [spaCy](https://spacy.io) creators**

[(ref)](https://x.com/_inesmontani/status/1144173225322143744)-

[(ref)](https://x.com/honnibal/status/1144031421859655680)

"*If anyone is looking to build a production Python API, I would highly recommend FastAPI. It is beautifully designed, simple to use and highly scalable, it has become a key component in our API first development strategy and is driving many automations and services such as our Virtual TAC Engineer.*"

**Cisco**

[(ref)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## Міні-документальний фільм про FastAPI[¶](#fastapi-mini-documentary)

Наприкінці 2025 року вийшов [міні-документальний фільм про FastAPI](https://www.youtube.com/watch?v=mpR8ngthqiE), ви можете переглянути його онлайн:

**Typer**, FastAPI для CLI[¶](#typer-the-fastapi-of-clis)

Якщо ви створюєте застосунок CLI для використання в терміналі замість веб-API, зверніть увагу на [ Typer](https://typer.tiangolo.com/).

**Typer** - молодший брат FastAPI. І його задумано як **FastAPI для CLI**. ⌨️ 🚀

## Вимоги[¶](#requirements)

FastAPI стоїть на плечах гігантів:

## Встановлення[¶](#installation)

Створіть і активуйте [віртуальне середовище](https://fastapi.tiangolo.com/uk/virtual-environments/), а потім встановіть FastAPI:

```
$ pip install "fastapi[standard]"
---> 100%
```


**Примітка**: переконайтеся, що ви взяли `"fastapi[standard]"`

у лапки, щоб це працювало в усіх терміналах.

## Приклад[¶](#example)

### Створіть[¶](#create-it)

Створіть файл `main.py`

з:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## Або використайте `async def`

...

Якщо ваш код використовує `async`

/ `await`

, скористайтеся `async def`

:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**Примітка**:

Якщо ви не знаєте, перегляньте розділ *"In a hurry?"* про [ async та await у документації](https://fastapi.tiangolo.com/uk/async/#in-a-hurry).


### Запустіть[¶](#run-it)

Запустіть сервер за допомогою:

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


## Про команду `fastapi dev`

...

Команда `fastapi dev`

автоматично читає ваш файл `main.py`

, знаходить у ньому застосунок **FastAPI** і запускає сервер за допомогою [Uvicorn](https://www.uvicorn.dev).

За замовчуванням `fastapi dev`

запускається з авто-перезавантаженням для локальної розробки.

Докладніше читайте в [документації FastAPI CLI](https://fastapi.tiangolo.com/uk/fastapi-cli/).

### Перевірте[¶](#check-it)

Відкрийте браузер і перейдіть на [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery).

Ви побачите JSON-відповідь:

```
{"item_id": 5, "q": "somequery"}
```


Ви вже створили API, який:

- Отримує HTTP-запити за
*шляхами*`/`

та`/items/{item_id}`

. - Обидва
*шляхи*приймають`GET`

*операції*(також відомі як HTTP*методи*). *Шлях*`/items/{item_id}`

містить*параметр шляху*`item_id`

, який має бути типу`int`

.*Шлях*`/items/{item_id}`

містить необовʼязковий`str`

*параметр запиту*`q`

.

### Інтерактивна документація API[¶](#interactive-api-docs)

Тепер перейдіть на [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

Ви побачите автоматичну інтерактивну документацію API (надану [Swagger UI](https://github.com/swagger-api/swagger-ui)):

### Альтернативна документація API[¶](#alternative-api-docs)

А тепер перейдіть на [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

Ви побачите альтернативну автоматичну документацію (надану [ReDoc](https://github.com/Rebilly/ReDoc)):

## Приклад оновлення[¶](#example-upgrade)

Тепер змініть файл `main.py`

, щоб отримувати тіло `PUT`

-запиту.

Оголосіть тіло, використовуючи стандартні типи Python, завдяки Pydantic.

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


Сервер `fastapi dev`

має автоматично перезавантажитися.

### Оновлення інтерактивної документації API[¶](#interactive-api-docs-upgrade)

Тепер перейдіть на [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

- Інтерактивна документація API буде автоматично оновлена, включно з новим тілом:

- Натисніть кнопку "Try it out", вона дозволяє заповнити параметри та безпосередньо взаємодіяти з API:

- Потім натисніть кнопку "Execute", інтерфейс користувача зв'яжеться з вашим API, надішле параметри, отримає результати та покаже їх на екрані:

### Оновлення альтернативної документації API[¶](#alternative-api-docs-upgrade)

А тепер перейдіть на [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

- Альтернативна документація також відобразить новий параметр запиту та тіло:

### Підсумки[¶](#recap)

Отже, ви оголошуєте **один раз** типи параметрів, тіла тощо як параметри функції.

Ви робите це за допомогою стандартних сучасних типів Python.

Вам не потрібно вивчати новий синтаксис, методи чи класи конкретної бібліотеки тощо.

Лише стандартний **Python**.

Наприклад, для `int`

:

```
item_id: int
```


або для складнішої моделі `Item`

:

```
item: Item
```


...і з цим єдиним оголошенням ви отримуєте:

- Підтримку редактора, включно з:
- Автодоповненням.
- Перевіркою типів.

- Валідацію даних:
- Автоматичні та зрозумілі помилки, коли дані некоректні.
- Валідацію навіть для глибоко вкладених JSON-обʼєктів.

- Перетворення вхідних даних: з мережі до даних і типів Python. Читання з:
- JSON.
- Параметрів шляху.
- Параметрів запиту.
- Cookies.
- Headers.
- Forms.
- Files.

- Перетворення вихідних даних: перетворення з даних і типів Python у мережеві дані (як JSON):
- Перетворення типів Python (
`str`

,`int`

,`float`

,`bool`

,`list`

, тощо). - Обʼєктів
`datetime`

. - Обʼєктів
`UUID`

. - Моделей бази даних.
- ...та багато іншого.

- Перетворення типів Python (
- Автоматичну інтерактивну документацію API, включно з 2 альтернативними інтерфейсами користувача:
- Swagger UI.
- ReDoc.


Повертаючись до попереднього прикладу коду, **FastAPI**:

- Перевірить, що
`item_id`

є у шляху для`GET`

та`PUT`

-запитів. - Перевірить, що
`item_id`

має тип`int`

для`GET`

та`PUT`

-запитів.- Якщо це не так, клієнт побачить корисну, зрозумілу помилку.

- Перевірить, чи є необов'язковий параметр запиту з назвою
`q`

(як у`http://127.0.0.1:8000/items/foo?q=somequery`

) для`GET`

-запитів.- Оскільки параметр
`q`

оголошено як`= None`

, він необов'язковий. - Без
`None`

він був би обов'язковим (як і тіло у випадку з`PUT`

).

- Оскільки параметр
- Для
`PUT`

-запитів до`/items/{item_id}`

прочитає тіло як JSON:- Перевірить, що є обовʼязковий атрибут
`name`

, який має бути типу`str`

. - Перевірить, що є обовʼязковий атрибут
`price`

, який має бути типу`float`

. - Перевірить, що є необовʼязковий атрибут
`is_offer`

, який має бути типу`bool`

, якщо він присутній. - Усе це також працюватиме для глибоко вкладених JSON-обʼєктів.

- Перевірить, що є обовʼязковий атрибут
- Автоматично перетворюватиме з та в JSON.
- Документуватиме все за допомогою OpenAPI, який може бути використано в:
- Інтерактивних системах документації.
- Системах автоматичної генерації клієнтського коду для багатьох мов.

- Надаватиме безпосередньо 2 вебінтерфейси інтерактивної документації.

Ми лише трішки доторкнулися до поверхні, але ви вже маєте уявлення про те, як усе працює.

Спробуйте змінити рядок:

```
return {"item_name": item.name, "item_id": item_id}
```


...із:

```
... "item_name": item.name ...
```


...на:

```
... "item_price": item.price ...
```


...і побачите, як ваш редактор автоматично доповнюватиме атрибути та знатиме їхні типи:

Для більш повного прикладу, що включає більше можливостей, перегляньте [Навчальний посібник - Посібник користувача](https://fastapi.tiangolo.com/uk/tutorial/).

**Попередження про спойлер**: навчальний посібник - посібник користувача містить:

- Оголошення
**параметрів**з інших різних місць, як-от:**headers**,**cookies**,**form fields**та**files**. - Як встановлювати
**обмеження валідації**як`maximum_length`

або`regex`

. - Дуже потужну і просту у використанні систему
**Впровадження залежностей**. - Безпеку та автентифікацію, включно з підтримкою
**OAuth2**з**JWT tokens**та**HTTP Basic**auth. - Досконаліші (але однаково прості) техніки для оголошення
**глибоко вкладених моделей JSON**(завдяки Pydantic). - Інтеграцію
**GraphQL**з[Strawberry](https://strawberry.rocks)та іншими бібліотеками. - Багато додаткових можливостей (завдяки Starlette) як-от:
**WebSockets**- надзвичайно прості тести на основі HTTPX та
`pytest`

**CORS****Cookie Sessions**- ...та більше.


### Розгортання застосунку (необовʼязково)[¶](#deploy-your-app-optional)

За бажання ви можете розгорнути ваш застосунок FastAPI у [FastAPI Cloud](https://fastapicloud.com), перейдіть і приєднайтеся до списку очікування, якщо ви ще цього не зробили. 🚀

Якщо у вас вже є обліковий запис **FastAPI Cloud** (ми запросили вас зі списку очікування 😉), ви можете розгорнути ваш застосунок однією командою.

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


Ось і все! Тепер ви можете отримати доступ до вашого застосунку за цією URL-адресою. ✨

#### Про FastAPI Cloud[¶](#about-fastapi-cloud)

** FastAPI Cloud** створено тим самим автором і командою, що стоять за

**FastAPI**.

Він спрощує процес **створення**, **розгортання** та **доступу** до API з мінімальними зусиллями.

Він забезпечує той самий **developer experience** створення застосунків на FastAPI під час їх **розгортання** у хмарі. 🎉

FastAPI Cloud - основний спонсор і джерело фінансування open source проєктів *FastAPI and friends*. ✨

#### Розгортання в інших хмарних провайдерів[¶](#deploy-to-other-cloud-providers)

FastAPI - open source проект і базується на стандартах. Ви можете розгортати застосунки FastAPI в будь-якому хмарному провайдері, який ви оберете.

Дотримуйтеся інструкцій вашого хмарного провайдера, щоб розгорнути застосунки FastAPI у нього. 🤓

## Продуктивність[¶](#performance)

Незалежні тести TechEmpower показують застосунки **FastAPI**, які працюють під керуванням Uvicorn, як [одні з найшвидших доступних Python-фреймворків](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7), поступаючись лише Starlette та Uvicorn (які внутрішньо використовуються в FastAPI). (*)

Щоб дізнатися більше, перегляньте розділ [Benchmarks](https://fastapi.tiangolo.com/uk/benchmarks/).

## Залежності[¶](#dependencies)

FastAPI залежить від Pydantic і Starlette.

### Залежності `standard`

[¶](#standard-dependencies)

Коли ви встановлюєте FastAPI за допомогою `pip install "fastapi[standard]"`

, ви отримуєте групу необовʼязкових залежностей `standard`

:

Використовується Pydantic:

- для валідації електронної пошти.`email-validator`


Використовується Starlette:

- потрібно, якщо ви хочете використовувати`httpx`

`TestClient`

.- потрібно, якщо ви хочете використовувати конфігурацію шаблонів за замовчуванням.`jinja2`

- потрібно, якщо ви хочете підтримувати форми з «парсингом» через`python-multipart`

`request.form()`

.

Використовується FastAPI:

- для сервера, який завантажує та обслуговує ваш застосунок. Це включає`uvicorn`

`uvicorn[standard]`

, до якого входять деякі залежності (наприклад,`uvloop`

), потрібні для високопродуктивної роботи сервера.`fastapi-cli[standard]`

- щоб надати команду`fastapi`

.- Це включає
`fastapi-cloud-cli`

, який дозволяє розгортати ваш застосунок FastAPI у[FastAPI Cloud](https://fastapicloud.com).

- Це включає

### Без залежностей `standard`

[¶](#without-standard-dependencies)

Якщо ви не хочете включати необовʼязкові залежності `standard`

, ви можете встановити через `pip install fastapi`

замість `pip install "fastapi[standard]"`

.

### Без `fastapi-cloud-cli`

[¶](#without-fastapi-cloud-cli)

Якщо ви хочете встановити FastAPI зі стандартними залежностями, але без `fastapi-cloud-cli`

, ви можете встановити через `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

.

### Додаткові необовʼязкові залежності[¶](#additional-optional-dependencies)

Є ще деякі додаткові залежності, які ви можете захотіти встановити.

Додаткові необовʼязкові залежності Pydantic:

- для керування налаштуваннями.`pydantic-settings`

- для додаткових типів, що можуть бути використані з Pydantic.`pydantic-extra-types`


Додаткові необовʼязкові залежності FastAPI:

- потрібно, якщо ви хочете використовувати`orjson`

`ORJSONResponse`

.- потрібно, якщо ви хочете використовувати`ujson`

`UJSONResponse`

.

## Ліцензія[¶](#license)

Цей проєкт ліцензовано згідно з умовами ліцензії MIT.

---

## Source: https://fastapi.tiangolo.com/zh/

# FastAPI[¶](#fastapi)

*FastAPI 框架，高性能，易于学习，高效编码，生产可用*

**文档**： [https://fastapi.tiangolo.com/zh](https://fastapi.tiangolo.com/zh)

**源码**： [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI 是一个用于构建 API 的现代、快速（高性能）的 Web 框架，使用 Python 并基于标准的 Python 类型提示。

关键特性：

**快速**：极高性能，可与**NodeJS**和**Go**并肩（归功于 Starlette 和 Pydantic）。[最快的 Python 框架之一](#performance)。**高效编码**：功能开发速度提升约 200% ～ 300%。***更少 bug**：人为（开发者）错误减少约 40%。***直观**：极佳的编辑器支持。处处皆可自动补全。更少的调试时间。**易用**：为易用和易学而设计。更少的文档阅读时间。**简短**：最小化代码重复。一次参数声明即可获得多种功能。更少的 bug。**健壮**：生产可用级代码。并带有自动生成的交互式文档。**标准化**：基于（并完全兼容）API 的开放标准：[OpenAPI](https://github.com/OAI/OpenAPI-Specification)（以前称为 Swagger）和[JSON Schema](https://json-schema.org/)。

* 基于某内部开发团队在构建生产应用时的测试估算。

## 赞助商[¶](#sponsors)

### Keystone 赞助商[¶](#keystone-sponsor)

### 金牌和银牌赞助商[¶](#gold-and-silver-sponsors)

## 评价[¶](#opinions)

「*[...] 最近我大量使用 FastAPI。[...] 我实际上计划把它用于我团队在 微软 的所有 机器学习服务。其中一些正在集成进核心 Windows 产品以及一些 Office 产品。*」

**Microsoft**

[(ref)](https://github.com/fastapi/fastapi/pull/26)

「*我们采用 FastAPI 来构建可查询以获取预测结果的 REST 服务器。[用于 Ludwig]*」

**Uber**

[(ref)](https://eng.uber.com/ludwig-v0-2/)

「* Netflix 很高兴宣布开源我们的危机管理编排框架：Dispatch！[使用 FastAPI 构建]*」

**Netflix**

[(ref)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

「*我对 FastAPI 兴奋到飞起。它太有趣了！*」

**[Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) 播客主持人**

[(ref)](https://x.com/brianokken/status/1112220079972728832)

「*老实说，你构建的东西非常稳健而且打磨得很好。从很多方面看，这就是我想让 Hug 成为的样子 —— 看到有人把它做出来真的很鼓舞人心。*」

**[Hug](https://github.com/hugapi/hug) 作者**

[(ref)](https://news.ycombinator.com/item?id=19455465)

「*如果你想学一个用于构建 REST API 的 现代框架，看看 FastAPI [...] 它快速、易用且易学 [...]*」

「*我们已经把我们的 API 切换到 FastAPI [...] 我想你会喜欢它 [...]*」

**[Explosion AI](https://explosion.ai) 创始人 - [spaCy](https://spacy.io) 作者**

[(ref)](https://x.com/_inesmontani/status/1144173225322143744)-

[(ref)](https://x.com/honnibal/status/1144031421859655680)

「*如果有人正在构建生产级的 Python API，我强烈推荐 FastAPI。它设计优雅、使用简单且高度可扩展，已经成为我们 API 优先开发战略中的关键组件，并驱动了许多自动化和服务，比如我们的 Virtual TAC Engineer。*」

**Cisco**

[(ref)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## FastAPI 迷你纪录片[¶](#fastapi-mini-documentary)

在 2025 年末发布了一部 [FastAPI 迷你纪录片](https://www.youtube.com/watch?v=mpR8ngthqiE)，你可以在线观看：

**Typer**，命令行中的 FastAPI[¶](#typer-the-fastapi-of-clis)

如果你要开发一个用于终端的 命令行应用而不是 Web API，看看 [ Typer](https://typer.tiangolo.com/)。

**Typer** 是 FastAPI 的小同胞。它的目标是成为**命令行中的 FastAPI**。⌨️ 🚀

## 依赖[¶](#requirements)

FastAPI 站在巨人的肩膀之上：

## 安装[¶](#installation)

创建并激活一个 [虚拟环境](https://fastapi.tiangolo.com/zh/virtual-environments/)，然后安装 FastAPI：

```
$ pip install "fastapi[standard]"
---> 100%
```


**Note**: 请确保把 `"fastapi[standard]"`

用引号包起来，以保证在所有终端中都能正常工作。

## 示例[¶](#example)

### 创建[¶](#create-it)

创建文件 `main.py`

，内容如下：

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## 或者使用 `async def`

...

如果你的代码里会用到 `async`

/ `await`

，请使用 `async def`

：

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**Note**:

如果你不确定，请查看文档中 *"In a hurry?"* 章节的 [ async 和 await](https://fastapi.tiangolo.com/zh/async/#in-a-hurry) 部分。


### 运行[¶](#run-it)

用下面的命令运行服务器：

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


## 关于命令 `fastapi dev`

...

`fastapi dev`

命令会读取你的 `main.py`

文件，检测其中的 **FastAPI** 应用，并使用 [Uvicorn](https://www.uvicorn.dev) 启动服务器。

默认情况下，`fastapi dev`

会在本地开发时启用自动重载。

你可以在 [FastAPI CLI 文档](https://fastapi.tiangolo.com/zh/fastapi-cli/) 中了解更多。

### 检查[¶](#check-it)

用浏览器打开 [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery)。

你会看到如下 JSON 响应：

```
{"item_id": 5, "q": "somequery"}
```


你已经创建了一个 API，它可以：

- 在路径
`/`

和`/items/{item_id}`

接收 HTTP 请求。 - 以上两个路径都接受
`GET`

*操作*（也称为 HTTP*方法*）。 - 路径
`/items/{item_id}`

有一个应为`int`

的*路径参数*`item_id`

。 - 路径
`/items/{item_id}`

有一个可选的`str`

类型*查询参数*`q`

。

### 交互式 API 文档[¶](#interactive-api-docs)

现在访问 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)。

你会看到自动生成的交互式 API 文档（由 [Swagger UI](https://github.com/swagger-api/swagger-ui) 提供）：

### 可选的 API 文档[¶](#alternative-api-docs)

然后访问 [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)。

你会看到另一个自动生成的文档（由 [ReDoc](https://github.com/Rebilly/ReDoc) 提供）：

## 示例升级[¶](#example-upgrade)

现在修改 `main.py`

文件来接收来自 `PUT`

请求的请求体。

借助 Pydantic，使用标准的 Python 类型来声明请求体。

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


`fastapi dev`

服务器会自动重载。

### 交互式 API 文档升级[¶](#interactive-api-docs-upgrade)

现在访问 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)。

- 交互式 API 文档会自动更新，并包含新的请求体：

- 点击「Try it out」按钮，它允许你填写参数并直接与 API 交互：

- 然后点击「Execute」按钮，界面会与你的 API 通信、发送参数、获取结果并在屏幕上展示：

### 可选文档升级[¶](#alternative-api-docs-upgrade)

再访问 [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)。

- 可选文档同样会体现新的查询参数和请求体：

### 总结[¶](#recap)

总之，你只需要把参数、请求体等的类型作为函数参数**声明一次**。

这些都使用标准的现代 Python 类型即可。

你不需要学习新的语法、某个特定库的方法或类等。

只需要标准的 **Python**。

例如，一个 `int`

：

```
item_id: int
```


或者更复杂的 `Item`

模型：

```
item: Item
```


……通过一次声明，你将获得：

- 编辑器支持，包括：
- 自动补全。
- 类型检查。

- 数据校验：
- 当数据无效时自动生成清晰的错误信息。
- 即便是多层嵌套的 JSON 对象也会进行校验。

- 转换输入数据：从网络读取到 Python 数据和类型。读取来源：
- JSON。
- 路径参数。
- 查询参数。
- Cookies。
- Headers。
- Forms。
- Files。

- 转换输出数据：从 Python 数据和类型转换为网络数据（JSON）：
- 转换 Python 类型（
`str`

、`int`

、`float`

、`bool`

、`list`

等）。 `datetime`

对象。`UUID`

对象。- 数据库模型。
- ……以及更多。

- 转换 Python 类型（
- 自动生成的交互式 API 文档，包括两种可选的用户界面：
- Swagger UI。
- ReDoc。


回到之前的代码示例，**FastAPI** 将会：

- 校验
`GET`

和`PUT`

请求的路径中是否包含`item_id`

。 - 校验
`GET`

和`PUT`

请求中的`item_id`

是否为`int`

类型。- 如果不是，客户端会看到清晰有用的错误信息。

- 对于
`GET`

请求，检查是否存在名为`q`

的可选查询参数（如`http://127.0.0.1:8000/items/foo?q=somequery`

）。- 因为参数
`q`

被声明为`= None`

，所以它是可选的。 - 如果没有
`None`

，它就是必需的（就像`PUT`

情况下的请求体）。

- 因为参数
- 对于发送到
`/items/{item_id}`

的`PUT`

请求，把请求体作为 JSON 读取：- 检查是否存在必需属性
`name`

，且为`str`

。 - 检查是否存在必需属性
`price`

，且为`float`

。 - 检查是否存在可选属性
`is_offer`

，如果存在则应为`bool`

。 - 对于多层嵌套的 JSON 对象，同样适用。

- 检查是否存在必需属性
- 自动完成 JSON 的读取与输出转换。
- 使用 OpenAPI 记录所有内容，可用于：
- 交互式文档系统。
- 多语言的客户端代码自动生成系统。

- 直接提供 2 种交互式文档 Web 界面。

我们只是浅尝辄止，但你已经大致了解其工作方式了。

尝试把这一行：

```
return {"item_name": item.name, "item_id": item_id}
```


……从：

```
... "item_name": item.name ...
```


……改为：

```
... "item_price": item.price ...
```


……看看你的编辑器如何自动补全属性并知道它们的类型：

更多包含更多特性的完整示例，请参阅 [教程 - 用户指南](https://fastapi.tiangolo.com/zh/tutorial/)。

**剧透警告**：教程 - 用户指南包括：

- 来自不同位置的
**参数**声明：**headers**、**cookies**、**form 字段**和**文件**。 - 如何设置
**校验约束**，如`maximum_length`

或`regex`

。 - 功能强大且易用的
**依赖注入**系统。 - 安全与认证，包括对
**OAuth2**、**JWT tokens**和**HTTP Basic**认证的支持。 - 更高级（但同样简单）的
**多层嵌套 JSON 模型**声明技巧（得益于 Pydantic）。 - 通过
[Strawberry](https://strawberry.rocks)等库进行**GraphQL**集成。 - 许多额外特性（归功于 Starlette），例如：
**WebSockets**- 基于 HTTPX 和
`pytest`

的极其简单的测试 **CORS****Cookie Sessions**- ……以及更多。


### 部署你的应用（可选）[¶](#deploy-your-app-optional)

你可以选择把 FastAPI 应用部署到 [FastAPI Cloud](https://fastapicloud.com)，如果还没有的话去加入候补名单吧。🚀

如果你已经有 **FastAPI Cloud** 账号（我们从候补名单邀请了你 😉），你可以用一个命令部署你的应用。

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


就这样！现在你可以通过该 URL 访问你的应用了。✨

#### 关于 FastAPI Cloud[¶](#about-fastapi-cloud)

** FastAPI Cloud** 由

**FastAPI**的同一位作者和团队打造。

它让你以最小的工作量就能**构建**、**部署**并**访问**一个 API。

它把用 FastAPI 构建应用时的**开发者体验**带到了部署到云上的过程。🎉

FastAPI Cloud 是「FastAPI and friends」开源项目的主要赞助方和资金提供者。✨

#### 部署到其他云厂商[¶](#deploy-to-other-cloud-providers)

FastAPI 是开源且基于标准的。你可以部署 FastAPI 应用到你选择的任意云厂商。

按照你的云厂商的指南部署 FastAPI 应用即可。🤓

## 性能[¶](#performance)

独立机构 TechEmpower 的基准测试显示，运行在 Uvicorn 下的 **FastAPI** 应用是 [最快的 Python 框架之一](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7)，仅次于 Starlette 和 Uvicorn 本身（FastAPI 内部使用它们）。(*)

想了解更多，请参阅 [基准测试](https://fastapi.tiangolo.com/zh/benchmarks/) 章节。

## 依赖项[¶](#dependencies)

FastAPI 依赖 Pydantic 和 Starlette。

`standard`

依赖[¶](#standard-dependencies)

当你通过 `pip install "fastapi[standard]"`

安装 FastAPI 时，会包含 `standard`

组的一些可选依赖：

Pydantic 使用：

- 用于 email 校验。`email-validator`


Starlette 使用：

- 使用`httpx`

`TestClient`

时需要。- 使用默认模板配置时需要。`jinja2`

- 使用`python-multipart`

`request.form()`

支持表单「解析」时需要。

FastAPI 使用：

- 加载并提供你的应用的服务器。包含`uvicorn`

`uvicorn[standard]`

，其中包含高性能服务所需的一些依赖（例如`uvloop`

）。`fastapi-cli[standard]`

- 提供`fastapi`

命令。- 其中包含
`fastapi-cloud-cli`

，它允许你将 FastAPI 应用部署到[FastAPI Cloud](https://fastapicloud.com)。

- 其中包含

### 不包含 `standard`

依赖[¶](#without-standard-dependencies)

如果你不想包含这些 `standard`

可选依赖，可以使用 `pip install fastapi`

，而不是 `pip install "fastapi[standard]"`

。

### 不包含 `fastapi-cloud-cli`

[¶](#without-fastapi-cloud-cli)

如果你想安装带有 standard 依赖但不包含 `fastapi-cloud-cli`

的 FastAPI，可以使用 `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

。

### 其他可选依赖[¶](#additional-optional-dependencies)

还有一些你可能想安装的可选依赖。

额外的 Pydantic 可选依赖：

- 用于配置管理。`pydantic-settings`

- 用于在 Pydantic 中使用的额外类型。`pydantic-extra-types`


额外的 FastAPI 可选依赖：

## 许可协议[¶](#license)

该项目遵循 MIT 许可协议。

---

## Source: https://fastapi.tiangolo.com/zh-hant/

# FastAPI[¶](#fastapi)

*FastAPI 框架，高效能，易於學習，快速開發，適用於生產環境*

**文件**： [https://fastapi.tiangolo.com/zh-hant](https://fastapi.tiangolo.com/zh-hant)

**程式碼**： [https://github.com/fastapi/fastapi](https://github.com/fastapi/fastapi)

FastAPI 是一個現代、快速（高效能）的 Web 框架，用於以 Python 並基於標準的 Python 型別提示來構建 API。

主要特點包含：

**快速**：非常高的效能，可與**NodeJS**和**Go**相當（歸功於 Starlette 和 Pydantic）。[最快的 Python 框架之一](#performance)。**極速開發**：開發功能的速度可提升約 200% 至 300%。***更少的 Bug**：減少約 40% 的人為（開發者）錯誤。***直覺**：具有出色的編輯器支援，處處都有 自動補全。更少的偵錯時間。**簡單**：設計上易於使用與學習。更少的讀文件時間。**簡潔**：最小化程式碼重複性。每個參數宣告可帶來多個功能。更少的錯誤。**穩健**：立即獲得可投入生產的程式碼，並自動生成互動式文件。**標準化**：基於（且完全相容於）API 的開放標準：[OpenAPI](https://github.com/OAI/OpenAPI-Specification)（之前稱為 Swagger）和[JSON Schema](https://json-schema.org/)。

* 基於內部開發團隊在建立生產應用程式時的測試預估。

## 贊助[¶](#sponsors)

### 基石贊助商[¶](#keystone-sponsor)

### 金級與銀級贊助商[¶](#gold-and-silver-sponsors)

## 評價[¶](#opinions)

"*[...] 近期大量使用 FastAPI。[...] 我實際上打算在我在微軟團隊的所有機器學習服務上使用它。其中一些正在整合到核心的 Windows 產品，以及一些 Office 產品。*"

**Microsoft**

[(ref)](https://github.com/fastapi/fastapi/pull/26)

"*我們採用了 FastAPI 函式庫來啟動一個 REST 伺服器，供查詢以取得預測。[for Ludwig]*"

**Uber**

[(ref)](https://eng.uber.com/ludwig-v0-2/)

"* Netflix 很高興宣布我們的危機管理協調框架 Dispatch 開源！[使用 FastAPI 建構]*"

**Netflix**

[(ref)](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)

"*我對 FastAPI 興奮得不得了。超好玩！*"

**[Python Bytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) podcast 主持人**

[(ref)](https://x.com/brianokken/status/1112220079972728832)

"*老實說，你們做的看起來非常穩健又精緻。很多方面都正是我希望 Hug 成為的樣子——看到有人把它建出來真的很鼓舞人心。*"

**[Hug](https://github.com/hugapi/hug) 創作者**

[(ref)](https://news.ycombinator.com/item?id=19455465)

"*如果你想學一個用於構建 REST API 的 現代框架，看看 FastAPI [...] 它很快、易用、也容易學習 [...]*"

"*我們的 API 已經改用 FastAPI [...] 我想你會喜歡它 [...]*"

**[Explosion AI](https://explosion.ai) 創辦人 - [spaCy](https://spacy.io) 創作者**

[(ref)](https://x.com/_inesmontani/status/1144173225322143744)-

[(ref)](https://x.com/honnibal/status/1144031421859655680)

"*如果有人想要打造一個可用於生產環境的 Python API，我強力推薦 FastAPI。它設計優雅、簡單易用且高度可擴展，已經成為我們 API first 開發策略中的關鍵元件，推動了許多自動化與服務，例如我們的 Virtual TAC Engineer。*"

**Cisco**

[(ref)](https://www.linkedin.com/posts/deonpillsbury_cisco-cx-python-activity-6963242628536487936-trAp/)

## FastAPI 迷你紀錄片[¶](#fastapi-mini-documentary)

在 2025 年底發布了一支 [FastAPI 迷你紀錄片](https://www.youtube.com/watch?v=mpR8ngthqiE)，你可以在線上觀看：

**Typer**，命令列的 FastAPI[¶](#typer-the-fastapi-of-clis)

如果你不是在做 Web API，而是要建立一個在終端機中使用的 CLI 應用程式，可以看看 [ Typer](https://typer.tiangolo.com/)。

**Typer** 是 FastAPI 的小老弟。他立志成為命令列世界的 **FastAPI**。⌨️ 🚀

## 需求[¶](#requirements)

FastAPI 是站在以下巨人的肩膀上：

## 安裝[¶](#installation)

建立並啟用一個[虛擬環境](https://fastapi.tiangolo.com/zh-hant/virtual-environments/)，然後安裝 FastAPI：

```
$ pip install "fastapi[standard]"
---> 100%
```


**注意**：請務必將 `"fastapi[standard]"`

用引號包起來，以確保在所有終端機中都能正常運作。

## 範例[¶](#example)

### 建立[¶](#create-it)

建立檔案 `main.py`

，內容如下：

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


## 或使用 `async def`

...

如果你的程式碼使用 `async`

/ `await`

，請使用 `async def`

：

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
```


**注意**：

如果你不確定，請查看文件中 *"In a hurry?"* 章節的[關於文件中的 async 與 await](https://fastapi.tiangolo.com/zh-hant/async/#in-a-hurry)。


### 運行[¶](#run-it)

使用以下指令運行伺服器：

```
$ fastapi dev
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


## 關於指令 `fastapi dev`

...

指令 `fastapi dev`

會讀取你的 `main.py`

，偵測其中的 **FastAPI** 應用，並使用 [Uvicorn](https://www.uvicorn.dev) 啟動伺服器。

預設情況下，`fastapi dev`

會在本機開發時啟用自動重新載入。

可在 [FastAPI CLI 文件](https://fastapi.tiangolo.com/zh-hant/fastapi-cli/)中閱讀更多資訊。

### 檢查[¶](#check-it)

使用瀏覽器開啟 [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery)。

你將會看到以下 JSON 回應：

```
{"item_id": 5, "q": "somequery"}
```


你已經建立了一個具有以下功能的 API：

- 透過路徑
`/`

和`/items/{item_id}`

接受 HTTP 請求。 - 以上兩個路徑都接受
`GET`

*操作*（也被稱為 HTTP*方法*）。 - 路徑
`/items/{item_id}`

有一個`int`

型別的路徑參數`item_id`

。 - 路徑
`/items/{item_id}`

有一個可選的`str`

查詢參數`q`

。

### 互動式 API 文件[¶](#interactive-api-docs)

接著前往 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)。

你會看到自動生成的互動式 API 文件（由 [Swagger UI](https://github.com/swagger-api/swagger-ui) 提供）：

### 替代 API 文件[¶](#alternative-api-docs)

現在前往 [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)。

你會看到另一種自動文件（由 [ReDoc](https://github.com/Rebilly/ReDoc) 提供）：

## 範例升級[¶](#example-upgrade)

現在修改 `main.py`

檔案，使其能從 `PUT`

請求接收 body。

多虧了 Pydantic，你可以用標準的 Python 型別來宣告 body。

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
is_offer: bool | None = None
@app.get("/")
def read_root():
return {"Hello": "World"}
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
return {"item_id": item_id, "q": q}
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
return {"item_name": item.name, "item_id": item_id}
```


`fastapi dev`

伺服器應會自動重新載入。

### 互動式 API 文件升級[¶](#interactive-api-docs-upgrade)

前往 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)。

- 互動式 API 文件會自動更新，包含新的 body：

- 點擊「Try it out」按鈕，你可以填寫參數並直接與 API 互動：

- 然後點擊「Execute」按鈕，使用者介面會與你的 API 溝通、送出參數、取得結果並顯示在螢幕上：

### 替代 API 文件升級[¶](#alternative-api-docs-upgrade)

現在前往 [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)。

- 替代文件也會反映新的查詢參數與 body：

### 總結[¶](#recap)

總結來說，你只需在函式參數中**一次**宣告參數、body 等的型別。

你使用的是現代標準的 Python 型別。

你不需要學新的語法、特定函式庫的方法或類別，等等。

就用標準的 **Python**。

例如，對於一個 `int`

：

```
item_id: int
```


或是一個更複雜的 `Item`

模型：

```
item: Item
```


…透過一次宣告，你將獲得：

- 編輯器支援，包括：
- 自動補全。
- 型別檢查。

- 資料驗證：
- 當資料無效時，自動且清楚的錯誤。
- 即使是深度巢狀的 JSON 物件也能驗證。

- 輸入資料的 轉換：從網路讀入到 Python 資料與型別。包含：
- JSON。
- 路徑參數。
- 查詢參數。
- Cookies。
- 標頭。
- 表單。
- 檔案。

- 輸出資料的 轉換：從 Python 資料與型別轉換為網路資料（JSON）：
- 轉換 Python 型別（
`str`

、`int`

、`float`

、`bool`

、`list`

等）。 `datetime`

物件。`UUID`

物件。- 資料庫模型。
- ...還有更多。

- 轉換 Python 型別（
- 自動生成的互動式 API 文件，包含 2 種替代的使用者介面：
- Swagger UI。
- ReDoc。


回到前面的程式碼範例，**FastAPI** 會：

- 驗證
`GET`

與`PUT`

請求的路徑中是否包含`item_id`

。 - 驗證
`GET`

與`PUT`

請求中的`item_id`

是否為`int`

型別。- 如果不是，客戶端會看到清楚有用的錯誤。

- 在
`GET`

請求中檢查是否有名為`q`

的可選查詢參數（如`http://127.0.0.1:8000/items/foo?q=somequery`

）。- 因為
`q`

參數被宣告為`= None`

，所以它是可選的。 - 若沒有
`None`

，則它會是必填（就像`PUT`

時的 body）。

- 因為
- 對於
`/items/{item_id}`

的`PUT`

請求，以 JSON 讀取 body：- 檢查是否有必填屬性
`name`

，且為`str`

。 - 檢查是否有必填屬性
`price`

，且為`float`

。 - 檢查是否有可選屬性
`is_offer`

，若存在則應為`bool`

。 - 以上也適用於深度巢狀的 JSON 物件。

- 檢查是否有必填屬性
- 自動在 JSON 與 Python 之間轉換。
- 以 OpenAPI 記錄所有內容，可用於：
- 互動式文件系統。
- 為多種語言自動產生用戶端程式碼的系統。

- 直接提供兩種互動式文件網頁介面。

我們只觸及了表面，但你已經了解它的運作方式了。

試著把這一行：

```
return {"item_name": item.name, "item_id": item_id}
```


…從：

```
... "item_name": item.name ...
```


…改為：

```
... "item_price": item.price ...
```


…然後看看你的編輯器如何自動補全屬性並知道它們的型別：

若想看包含更多功能的完整範例，請參考 [Tutorial - User Guide](https://fastapi.tiangolo.com/zh-hant/tutorial/)。

**劇透警告**：教學 - 使用者指南包含：

- 來自不同來源的
**參數**宣告：例如**headers**、**cookies**、**form fields**和**files**。 - 如何設定
**驗證限制**，如`maximum_length`

或`regex`

。 - 一個非常強大且易用的
**依賴注入**系統。 - 安全與驗證，包含支援
**OAuth2**搭配**JWT tokens**與**HTTP Basic**驗證。 - 宣告
**深度巢狀 JSON 模型**的進階（但同樣簡單）技巧（感謝 Pydantic）。 - 與
[Strawberry](https://strawberry.rocks)及其他函式庫的**GraphQL**整合。 - 許多額外功能（感謝 Starlette），例如：
**WebSockets**- 基於 HTTPX 與
`pytest`

的極其簡單的測試 **CORS****Cookie Sessions**- ...以及更多。


### 部署你的應用（可選）[¶](#deploy-your-app-optional)

你也可以選擇將 FastAPI 應用部署到 [FastAPI Cloud](https://fastapicloud.com)，如果你還沒加入，去登記等候名單吧。🚀

如果你已經有 **FastAPI Cloud** 帳號（我們已從等候名單邀請你 😉），你可以用一個指令部署你的應用。

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


就這樣！現在你可以在該 URL 造訪你的應用。✨

#### 關於 FastAPI Cloud[¶](#about-fastapi-cloud)

** FastAPI Cloud** 由

**FastAPI**的同一位作者與團隊打造。

它讓你以最小的努力精簡地完成 API 的**建置**、**部署**與**存取**流程。

它把用 FastAPI 開發應用的**開發者體驗**帶到**部署**到雲端的流程中。🎉

FastAPI Cloud 是「FastAPI 與好朋友們」這些開源專案的主要贊助與資金來源。✨

#### 部署到其他雲端供應商[¶](#deploy-to-other-cloud-providers)

FastAPI 是開源且基於標準。你可以把 FastAPI 應用部署到任何你選擇的雲端供應商。

依照你雲端供應商的指南來部署 FastAPI 應用吧。🤓

## 效能[¶](#performance)

獨立的 TechEmpower 基準測試顯示，在 Uvicorn 下運行的 **FastAPI** 應用是[最快的 Python 框架之一](https://www.techempower.com/benchmarks/#section=test&runid=7464e520-0dc2-473d-bd34-dbdfd7e85911&hw=ph&test=query&l=zijzen-7)，僅次於 Starlette 與 Uvicorn 本身（FastAPI 內部使用它們）。(*)

想了解更多，請參閱[測試結果](https://fastapi.tiangolo.com/zh-hant/benchmarks/)。

## 依賴套件[¶](#dependencies)

FastAPI 依賴 Pydantic 與 Starlette。

`standard`

依賴套件[¶](#standard-dependencies)

當你以 `pip install "fastapi[standard]"`

安裝 FastAPI 時，會包含 `standard`

這組可選依賴套件：

Pydantic 會使用：

- 用於電子郵件驗證。`email-validator`


Starlette 會使用：

- 若要使用`httpx`

`TestClient`

必須安裝。- 若要使用預設的模板設定必須安裝。`jinja2`

- 若要支援表單 "解析"，搭配`python-multipart`

`request.form()`

。

FastAPI 會使用：

- 用於載入並服務你的應用的伺服器。這包含`uvicorn`

`uvicorn[standard]`

，其中含有一些高效能服務所需的依賴（例如`uvloop`

）。`fastapi-cli[standard]`

- 提供`fastapi`

指令。- 其中包含
`fastapi-cloud-cli`

，可讓你將 FastAPI 應用部署到[FastAPI Cloud](https://fastapicloud.com)。

- 其中包含

### 不含 `standard`

依賴套件[¶](#without-standard-dependencies)

如果你不想包含 `standard`

可選依賴，可以改用 `pip install fastapi`

（而不是 `pip install "fastapi[standard]"`

）。

### 不含 `fastapi-cloud-cli`

[¶](#without-fastapi-cloud-cli)

如果你想安裝帶有 standard 依賴、但不包含 `fastapi-cloud-cli`

，可以使用 `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

。

### 額外可選依賴套件[¶](#additional-optional-dependencies)

有些額外依賴你可能也會想安裝。

Pydantic 的額外可選依賴：

- 設定管理。`pydantic-settings`

- 與 Pydantic 一起使用的額外型別。`pydantic-extra-types`


FastAPI 的額外可選依賴：

## 授權[¶](#license)

本專案以 MIT 授權條款釋出。

---

## Source: https://fastapi.tiangolo.com/features/

# Features[¶](#features)

## FastAPI features[¶](#fastapi-features)

**FastAPI** gives you the following:

### Based on open standards[¶](#based-on-open-standards)

for API creation, including declarations of path operations, parameters, request bodies, security, etc.**OpenAPI**- Automatic data model documentation with
(as OpenAPI itself is based on JSON Schema).**JSON Schema** - Designed around these standards, after a meticulous study. Instead of an afterthought layer on top.
- This also allows using automatic
**client code generation**in many languages.

### Automatic docs[¶](#automatic-docs)

Interactive API documentation and exploration web user interfaces. As the framework is based on OpenAPI, there are multiple options, 2 included by default.

, with interactive exploration, call and test your API directly from the browser.**Swagger UI**

- Alternative API documentation with
.**ReDoc**

### Just Modern Python[¶](#just-modern-python)

It's all based on standard **Python type** declarations (thanks to Pydantic). No new syntax to learn. Just standard modern Python.

If you need a 2 minute refresher of how to use Python types (even if you don't use FastAPI), check the short tutorial: [Python Types](../python-types/).

You write standard Python with types:

```
from datetime import date
from pydantic import BaseModel
# Declare a variable as a str
# and get editor support inside the function
def main(user_id: str):
return user_id
# A Pydantic model
class User(BaseModel):
id: int
name: str
joined: date
```


That can then be used like:

```
my_user: User = User(id=3, name="John Doe", joined="2018-07-19")
second_user_data = {
"id": 4,
"name": "Mary",
"joined": "2018-11-30",
}
my_second_user: User = User(**second_user_data)
```


Info

`**second_user_data`

means:

Pass the keys and values of the `second_user_data`

dict directly as key-value arguments, equivalent to: `User(id=4, name="Mary", joined="2018-11-30")`


### Editor support[¶](#editor-support)

All the framework was designed to be easy and intuitive to use, all the decisions were tested on multiple editors even before starting development, to ensure the best development experience.

In the Python developer surveys, it's clear [that one of the most used features is "autocompletion"](https://www.jetbrains.com/research/python-developers-survey-2017/#tools-and-features).

The whole **FastAPI** framework is based to satisfy that. Autocompletion works everywhere.

You will rarely need to come back to the docs.

Here's how your editor might help you:

- in
[PyCharm](https://www.jetbrains.com/pycharm/):

You will get completion in code you might even consider impossible before. As for example, the `price`

key inside a JSON body (that could have been nested) that comes from a request.

No more typing the wrong key names, coming back and forth between docs, or scrolling up and down to find if you finally used `username`

or `user_name`

.

### Short[¶](#short)

It has sensible **defaults** for everything, with optional configurations everywhere. All the parameters can be fine-tuned to do what you need and to define the API you need.

But by default, it all **"just works"**.

### Validation[¶](#validation)

-
Validation for most (or all?) Python

**data types**, including:- JSON objects (
`dict`

). - JSON array (
`list`

) defining item types. - String (
`str`

) fields, defining min and max lengths. - Numbers (
`int`

,`float`

) with min and max values, etc.

- JSON objects (
-
Validation for more exotic types, like:

- URL.
- Email.
- UUID.
- ...and others.


All the validation is handled by the well-established and robust **Pydantic**.

### Security and authentication[¶](#security-and-authentication)

Security and authentication integrated. Without any compromise with databases or data models.

All the security schemes defined in OpenAPI, including:

- HTTP Basic.
**OAuth2**(also with**JWT tokens**). Check the tutorial on[OAuth2 with JWT](../tutorial/security/oauth2-jwt/).- API keys in:
- Headers.
- Query parameters.
- Cookies, etc.


Plus all the security features from Starlette (including **session cookies**).

All built as reusable tools and components that are easy to integrate with your systems, data stores, relational and NoSQL databases, etc.

### Dependency Injection[¶](#dependency-injection)

FastAPI includes an extremely easy to use, but extremely powerful **Dependency Injection** system.

- Even dependencies can have dependencies, creating a hierarchy or
**"graph" of dependencies**. - All
**automatically handled**by the framework. - All the dependencies can require data from requests and
**augment the path operation**constraints and automatic documentation. **Automatic validation**even for*path operation*parameters defined in dependencies.- Support for complex user authentication systems,
**database connections**, etc. **No compromise**with databases, frontends, etc. But easy integration with all of them.

### Unlimited "plug-ins"[¶](#unlimited-plug-ins)

Or in other way, no need for them, import and use the code you need.

Any integration is designed to be so simple to use (with dependencies) that you can create a "plug-in" for your application in 2 lines of code using the same structure and syntax used for your *path operations*.

### Tested[¶](#tested)

- 100% test coverage.
- 100% type annotated code base.
- Used in production applications.

## Starlette features[¶](#starlette-features)

**FastAPI** is fully compatible with (and based on) [ Starlette](https://www.starlette.dev/). So, any additional Starlette code you have, will also work.

`FastAPI`

is actually a sub-class of `Starlette`

. So, if you already know or use Starlette, most of the functionality will work the same way.

With **FastAPI** you get all of **Starlette**'s features (as FastAPI is just Starlette on steroids):

- Seriously impressive performance. It is
[one of the fastest Python frameworks available, on par with](https://github.com/encode/starlette#performance).**NodeJS**and**Go** **WebSocket**support.- In-process background tasks.
- Startup and shutdown events.
- Test client built on HTTPX.
**CORS**, GZip, Static Files, Streaming responses.**Session and Cookie**support.- 100% test coverage.
- 100% type annotated codebase.

## Pydantic features[¶](#pydantic-features)

**FastAPI** is fully compatible with (and based on) [ Pydantic](https://docs.pydantic.dev/). So, any additional Pydantic code you have, will also work.

Including external libraries also based on Pydantic, as ORMs, ODMs for databases.

This also means that in many cases you can pass the same object you get from a request **directly to the database**, as everything is validated automatically.

The same applies the other way around, in many cases you can just pass the object you get from the database **directly to the client**.

With **FastAPI** you get all of **Pydantic**'s features (as FastAPI is based on Pydantic for all the data handling):

**No brainfuck**:- No new schema definition micro-language to learn.
- If you know Python types you know how to use Pydantic.

- Plays nicely with your
**IDE/linter/brain**:- Because pydantic data structures are just instances of classes you define; auto-completion, linting, mypy and your intuition should all work properly with your validated data.

- Validate
**complex structures**:- Use of hierarchical Pydantic models, Python
`typing`

’s`List`

and`Dict`

, etc. - And validators allow complex data schemas to be clearly and easily defined, checked and documented as JSON Schema.
- You can have deeply
**nested JSON**objects and have them all validated and annotated.

- Use of hierarchical Pydantic models, Python
**Extensible**:- Pydantic allows custom data types to be defined or you can extend validation with methods on a model decorated with the validator decorator.

- 100% test coverage.

---

## Source: https://fastapi.tiangolo.com/learn/

Learn¶ Here are the introductory sections and the tutorials to learn FastAPI. You could consider this a book, a course, the official and recommended way to learn FastAPI. 😎

---

## Source: https://fastapi.tiangolo.com/reference/

# Reference[¶](#reference)

Here's the reference or code API, the classes, functions, parameters, attributes, and all the FastAPI parts you can use in your applications.

If you want to **learn FastAPI** you are much better off reading the
[FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/).

Here's the reference or code API, the classes, functions, parameters, attributes, and all the FastAPI parts you can use in your applications.

If you want to **learn FastAPI** you are much better off reading the
[FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/).

---

## Source: https://fastapi.tiangolo.com/fastapi-people/

# FastAPI People[¶](#fastapi-people)

FastAPI has an amazing community that welcomes people from all backgrounds.

## Creator[¶](#creator)

Hey! 👋

This is me:

I'm the creator of **FastAPI**. You can read more about that in [Help FastAPI - Get Help - Connect with the author](../help-fastapi/#connect-with-the-author).

...But here I want to show you the community.

**FastAPI** receives a lot of support from the community. And I want to highlight their contributions.

These are the people that:

[Help others with questions in GitHub](../help-fastapi/#help-others-with-questions-in-github).[Create Pull Requests](../help-fastapi/#create-a-pull-request).- Review Pull Requests,
[especially important for translations](../contributing/#translations). - Help
[manage the repository](../management-tasks/)(team members).

All these tasks help maintain the repository.

A round of applause to them. 👏 🙇

## Team[¶](#team)

This is the current list of team members. 😎

They have different levels of involvement and permissions, they can perform [repository management tasks](../management-tasks/) and together we [manage the FastAPI repository](../management/).

Although the team members have the permissions to perform privileged tasks, all the [help from others maintaining FastAPI](../help-fastapi/#help-maintain-fastapi) is very much appreciated! 🙇♂️

## FastAPI Experts[¶](#fastapi-experts)

These are the users that have been [helping others the most with questions in GitHub](../help-fastapi/#help-others-with-questions-in-github). 🙇

They have proven to be **FastAPI Experts** by helping many others. ✨

You can see the **FastAPI Experts** for:

[Last Month](#fastapi-experts-last-month)🤓[3 Months](#fastapi-experts-3-months)😎[6 Months](#fastapi-experts-6-months)🧐[1 Year](#fastapi-experts-1-year)🧑🔬🧙**All Time**

### FastAPI Experts - Last Month[¶](#fastapi-experts-last-month)

These are the users that have been [helping others the most with questions in GitHub](../help-fastapi/#help-others-with-questions-in-github) during the last month. 🤓

[@YuriiMotov](https://github.com/YuriiMotov)

[@Toygarmetu](https://github.com/Toygarmetu)

[@JavierSanchezCastro](https://github.com/JavierSanchezCastro)

[@valentinDruzhinin](https://github.com/valentinDruzhinin)

### FastAPI Experts - 3 Months[¶](#fastapi-experts-3-months)

These are the users that have been [helping others the most with questions in GitHub](../help-fastapi/#help-others-with-questions-in-github) during the last 3 months. 😎

[@YuriiMotov](https://github.com/YuriiMotov)

[@Toygarmetu](https://github.com/Toygarmetu)

[@JavierSanchezCastro](https://github.com/JavierSanchezCastro)

[@ceb10n](https://github.com/ceb10n)

[@valentinDruzhinin](https://github.com/valentinDruzhinin)

[@sachinh35](https://github.com/sachinh35)

[@RichieB2B](https://github.com/RichieB2B)

[@EmmanuelNiyonshuti](https://github.com/EmmanuelNiyonshuti)

[@luzzodev](https://github.com/luzzodev)

### FastAPI Experts - 6 Months[¶](#fastapi-experts-6-months)

These are the users that have been [helping others the most with questions in GitHub](../help-fastapi/#help-others-with-questions-in-github) during the last 6 months. 🧐

[@YuriiMotov](https://github.com/YuriiMotov)

[@luzzodev](https://github.com/luzzodev)

[@engripaye](https://github.com/engripaye)

[@JavierSanchezCastro](https://github.com/JavierSanchezCastro)

[@Toygarmetu](https://github.com/Toygarmetu)

[@valentinDruzhinin](https://github.com/valentinDruzhinin)

[@ceb10n](https://github.com/ceb10n)

[@RichieB2B](https://github.com/RichieB2B)

[@JunjieAraoXiong](https://github.com/JunjieAraoXiong)

### FastAPI Experts - 1 Year[¶](#fastapi-experts-1-year)

These are the users that have been [helping others the most with questions in GitHub](../help-fastapi/#help-others-with-questions-in-github) during the last year. 🧑🔬

[@YuriiMotov](https://github.com/YuriiMotov)

[@luzzodev](https://github.com/luzzodev)

[@valentinDruzhinin](https://github.com/valentinDruzhinin)

[@JavierSanchezCastro](https://github.com/JavierSanchezCastro)

[@alv2017](https://github.com/alv2017)

[@engripaye](https://github.com/engripaye)

[@sachinh35](https://github.com/sachinh35)

[@yauhen-sobaleu](https://github.com/yauhen-sobaleu)

[@Toygarmetu](https://github.com/Toygarmetu)

[@raceychan](https://github.com/raceychan)

[@yinziyan1206](https://github.com/yinziyan1206)

[@Kludex](https://github.com/Kludex)

[@ceb10n](https://github.com/ceb10n)

[@RichieB2B](https://github.com/RichieB2B)

[@JunjieAraoXiong](https://github.com/JunjieAraoXiong)

[@CodeKraken-cmd](https://github.com/CodeKraken-cmd)

[@svlandeg](https://github.com/svlandeg)

[@DoctorJohn](https://github.com/DoctorJohn)

[@WilliamDEdwards](https://github.com/WilliamDEdwards)

### FastAPI Experts - All Time[¶](#fastapi-experts-all-time)

Here are the all time **FastAPI Experts**. 🤓🤯

These are the users that have [helped others the most with questions in GitHub](../help-fastapi/#help-others-with-questions-in-github) through *all time*. 🧙

[@YuriiMotov](https://github.com/YuriiMotov)

[@Kludex](https://github.com/Kludex)

[@jgould22](https://github.com/jgould22)

[@dmontagu](https://github.com/dmontagu)

[@Mause](https://github.com/Mause)

[@ycd](https://github.com/ycd)

[@JarroVGIT](https://github.com/JarroVGIT)

[@euri10](https://github.com/euri10)

[@iudeen](https://github.com/iudeen)

[@phy25](https://github.com/phy25)

[@JavierSanchezCastro](https://github.com/JavierSanchezCastro)

[@luzzodev](https://github.com/luzzodev)

[@raphaelauv](https://github.com/raphaelauv)

[@ArcLightSlavik](https://github.com/ArcLightSlavik)

[@ghandic](https://github.com/ghandic)

[@n8sty](https://github.com/n8sty)

[@falkben](https://github.com/falkben)

[@yinziyan1206](https://github.com/yinziyan1206)

[@acidjunk](https://github.com/acidjunk)

[@sm-Fifteen](https://github.com/sm-Fifteen)

[@adriangb](https://github.com/adriangb)

[@insomnes](https://github.com/insomnes)

[@Dustyposa](https://github.com/Dustyposa)

[@frankie567](https://github.com/frankie567)

[@odiseo0](https://github.com/odiseo0)

[@sinisaos](https://github.com/sinisaos)

[@includeamin](https://github.com/includeamin)

[@chbndrhnns](https://github.com/chbndrhnns)

[@STeveShary](https://github.com/STeveShary)

[@krishnardt](https://github.com/krishnardt)

[@panla](https://github.com/panla)

[@valentinDruzhinin](https://github.com/valentinDruzhinin)

[@prostomarkeloff](https://github.com/prostomarkeloff)

[@alv2017](https://github.com/alv2017)

[@hasansezertasan](https://github.com/hasansezertasan)

[@dbanty](https://github.com/dbanty)

[@wshayes](https://github.com/wshayes)

[@SirTelemak](https://github.com/SirTelemak)

[@connebs](https://github.com/connebs)

[@nymous](https://github.com/nymous)

[@chrisK824](https://github.com/chrisK824)

[@ceb10n](https://github.com/ceb10n)

[@rafsaf](https://github.com/rafsaf)

[@nsidnev](https://github.com/nsidnev)

[@chris-allnutt](https://github.com/chris-allnutt)

[@ebottos94](https://github.com/ebottos94)

[@estebanx64](https://github.com/estebanx64)

[@sehraramiz](https://github.com/sehraramiz)

## Top Contributors[¶](#top-contributors)

Here are the **Top Contributors**. 👷

These users have [created the most Pull Requests](../help-fastapi/#create-a-pull-request) that have been *merged*.

They have contributed source code, documentation, etc. 📦

[@YuriiMotov](https://github.com/YuriiMotov)

[@alejsdev](https://github.com/alejsdev)

[@Kludex](https://github.com/Kludex)

[@svlandeg](https://github.com/svlandeg)

[@dmontagu](https://github.com/dmontagu)

[@nilslindemann](https://github.com/nilslindemann)

[@euri10](https://github.com/euri10)

[@kantandane](https://github.com/kantandane)

[@zhaohan-dong](https://github.com/zhaohan-dong)

[@mariacamilagl](https://github.com/mariacamilagl)

[@handabaldeep](https://github.com/handabaldeep)

[@vishnuvskvkl](https://github.com/vishnuvskvkl)

[@alissadb](https://github.com/alissadb)

[@alv2017](https://github.com/alv2017)

[@wshayes](https://github.com/wshayes)

[@samuelcolvin](https://github.com/samuelcolvin)

[@waynerv](https://github.com/waynerv)

[@musicinmybrain](https://github.com/musicinmybrain)

[@krishnamadhavan](https://github.com/krishnamadhavan)

[@jekirl](https://github.com/jekirl)

[@hitrust](https://github.com/hitrust)

[@ShahriyarR](https://github.com/ShahriyarR)

[@adriangb](https://github.com/adriangb)

[@iudeen](https://github.com/iudeen)

[@philipokiokio](https://github.com/philipokiokio)

[@AlexWendland](https://github.com/AlexWendland)

[@valentinDruzhinin](https://github.com/valentinDruzhinin)

[@divums](https://github.com/divums)

[@prostomarkeloff](https://github.com/prostomarkeloff)

[@frankie567](https://github.com/frankie567)

[@nsidnev](https://github.com/nsidnev)

[@pawamoy](https://github.com/pawamoy)

[@patrickmckenna](https://github.com/patrickmckenna)

[@hukkin](https://github.com/hukkin)

[@marcosmmb](https://github.com/marcosmmb)

[@Serrones](https://github.com/Serrones)

[@uriyyo](https://github.com/uriyyo)

[@andrew222651](https://github.com/andrew222651)

[@rkbeatss](https://github.com/rkbeatss)

[@asheux](https://github.com/asheux)

[@blkst8](https://github.com/blkst8)

[@ghandic](https://github.com/ghandic)

[@TeoZosa](https://github.com/TeoZosa)

[@graingert](https://github.com/graingert)

[@jaystone776](https://github.com/jaystone776)

[@zanieb](https://github.com/zanieb)

There are hundreds of other contributors, you can see them all in the [FastAPI GitHub Contributors page](https://github.com/fastapi/fastapi/graphs/contributors). 👷

## Top Translation Reviewers[¶](#top-translation-reviewers)

These users are the **Top Translation Reviewers**. 🕵️

Translation reviewers have the [ power to approve translations](../contributing/#translations) of the documentation. Without them, there wouldn't be documentation in several other languages.

[@s111d](https://github.com/s111d)

[@Xewus](https://github.com/Xewus)

[@sodaMelon](https://github.com/sodaMelon)

[@ceb10n](https://github.com/ceb10n)

[@tokusumi](https://github.com/tokusumi)

[@hard-coders](https://github.com/hard-coders)

[@hasansezertasan](https://github.com/hasansezertasan)

[@alv2017](https://github.com/alv2017)

[@nazarepiedady](https://github.com/nazarepiedady)

[@AlertRED](https://github.com/AlertRED)

[@Alexandrhub](https://github.com/Alexandrhub)

[@nilslindemann](https://github.com/nilslindemann)

[@YuriiMotov](https://github.com/YuriiMotov)

[@cassiobotaro](https://github.com/cassiobotaro)

[@waynerv](https://github.com/waynerv)

[@mattwang44](https://github.com/mattwang44)

[@Laineyzhang55](https://github.com/Laineyzhang55)

[@Kludex](https://github.com/Kludex)

[@komtaki](https://github.com/komtaki)

[@svlandeg](https://github.com/svlandeg)

[@rostik1410](https://github.com/rostik1410)

[@alperiox](https://github.com/alperiox)

[@Rishat-F](https://github.com/Rishat-F)

[@Winand](https://github.com/Winand)

[@solomein-sv](https://github.com/solomein-sv)

[@mezgoodle](https://github.com/mezgoodle)

[@JavierSanchezCastro](https://github.com/JavierSanchezCastro)

[@alejsdev](https://github.com/alejsdev)

[@stlucasgarcia](https://github.com/stlucasgarcia)

[@SwftAlpc](https://github.com/SwftAlpc)

[@timothy-jeong](https://github.com/timothy-jeong)

[@rjNemo](https://github.com/rjNemo)

[@yychanlee](https://github.com/yychanlee)

[@Vincy1230](https://github.com/Vincy1230)

[@akarev0](https://github.com/akarev0)

[@romashevchenko](https://github.com/romashevchenko)

[@LorhanSohaky](https://github.com/LorhanSohaky)

[@black-redoc](https://github.com/black-redoc)

[@pedabraham](https://github.com/pedabraham)

[@Smlep](https://github.com/Smlep)

[@dedkot01](https://github.com/dedkot01)

[@hsuanchi](https://github.com/hsuanchi)

[@dpinezich](https://github.com/dpinezich)

[@maoyibo](https://github.com/maoyibo)

[@0417taehyun](https://github.com/0417taehyun)

[@BilalAlpaslan](https://github.com/BilalAlpaslan)

[@junah201](https://github.com/junah201)

[@zy7y](https://github.com/zy7y)

[@mycaule](https://github.com/mycaule)

## Sponsors[¶](#sponsors)

These are the **Sponsors**. 😎

They are supporting my work with **FastAPI** (and others), mainly through [GitHub Sponsors](https://github.com/sponsors/tiangolo).

### Gold Sponsors[¶](#gold-sponsors)

### Silver Sponsors[¶](#silver-sponsors)

### Bronze Sponsors[¶](#bronze-sponsors)

### Individual Sponsors[¶](#individual-sponsors)

## About the data - technical details[¶](#about-the-data-technical-details)

The main intention of this page is to highlight the effort of the community to help others.

Especially including efforts that are normally less visible, and in many cases more arduous, like helping others with questions and reviewing Pull Requests with translations.

The data is calculated each month, you can read the [source code here](https://github.com/fastapi/fastapi/blob/master/scripts/).

Here I'm also highlighting contributions from sponsors.

I also reserve the right to update the algorithm, sections, thresholds, etc (just in case 🤷).

---

## Source: https://fastapi.tiangolo.com/resources/

FastAPI

UploadFile

HTTPException

WebSocketException

Depends()

Security()

APIRouter

BackgroundTasks

Request

HTTPConnection

Response

docs

models

jsonable_encoder

StaticFiles

Jinja2Templates

TestClient

Additional resources, external links, and more. ✈️

---

## Source: https://fastapi.tiangolo.com/about/

FastAPI

UploadFile

HTTPException

WebSocketException

Depends()

Security()

APIRouter

BackgroundTasks

Request

HTTPConnection

Response

docs

models

jsonable_encoder

StaticFiles

Jinja2Templates

TestClient

About FastAPI, its design, inspiration and more. 🤓

---

## Source: https://fastapi.tiangolo.com/release-notes/

# Release Notes[¶](#release-notes)

## Latest Changes[¶](#latest-changes)

### Docs[¶](#docs)

### Internal[¶](#internal)

## 0.135.2 (2026-03-01)[¶](#01352-2026-03-01)

### Upgrades[¶](#upgrades)

### Docs[¶](#docs_1)

- 📝 Add missing last release notes dates. PR
[#15202](https://github.com/fastapi/fastapi/pull/15202)by[@tiangolo](https://github.com/tiangolo). - 📝 Update docs for contributors and team members regarding translation PRs. PR
[#15200](https://github.com/fastapi/fastapi/pull/15200)by[@YuriiMotov](https://github.com/YuriiMotov). - 💄 Fix code blocks in reference docs overflowing table width. PR
[#15094](https://github.com/fastapi/fastapi/pull/15094)by[@YuriiMotov](https://github.com/YuriiMotov). - 📝 Fix duplicated words in docstrings. PR
[#15116](https://github.com/fastapi/fastapi/pull/15116)by[@AhsanSheraz](https://github.com/AhsanSheraz). - 📝 Add docs for
`pyproject.toml`

with`entrypoint`

. PR[#15075](https://github.com/fastapi/fastapi/pull/15075)by[@tiangolo](https://github.com/tiangolo). - 📝 Update links in docs to no longer use the classes external-link and internal-link. PR
[#15061](https://github.com/fastapi/fastapi/pull/15061)by[@tiangolo](https://github.com/tiangolo). - 🔨 Add JS and CSS handling for automatic
`target=_blank`

for links in docs. PR[#15063](https://github.com/fastapi/fastapi/pull/15063)by[@tiangolo](https://github.com/tiangolo). - 💄 Update styles for internal and external links in new tab. PR
[#15058](https://github.com/fastapi/fastapi/pull/15058)by[@tiangolo](https://github.com/tiangolo). - 📝 Add documentation for the FastAPI VS Code extension. PR
[#15008](https://github.com/fastapi/fastapi/pull/15008)by[@savannahostrowski](https://github.com/savannahostrowski). - 📝 Fix doctrings for
`max_digits`

and`decimal_places`

. PR[#14944](https://github.com/fastapi/fastapi/pull/14944)by[@YuriiMotov](https://github.com/YuriiMotov). - 📝 Add dates to release notes. PR
[#15001](https://github.com/fastapi/fastapi/pull/15001)by[@YuriiMotov](https://github.com/YuriiMotov).

### Translations[¶](#translations)

- 🌐 Update translations for zh (update-outdated). PR
[#15177](https://github.com/fastapi/fastapi/pull/15177)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for zh-hant (update-outdated). PR
[#15178](https://github.com/fastapi/fastapi/pull/15178)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for zh-hant (add-missing). PR
[#15176](https://github.com/fastapi/fastapi/pull/15176)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for zh (add-missing). PR
[#15175](https://github.com/fastapi/fastapi/pull/15175)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for ja (update-outdated). PR
[#15171](https://github.com/fastapi/fastapi/pull/15171)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for ko (update-outdated). PR
[#15170](https://github.com/fastapi/fastapi/pull/15170)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for tr (update-outdated). PR
[#15172](https://github.com/fastapi/fastapi/pull/15172)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for ko (add-missing). PR
[#15168](https://github.com/fastapi/fastapi/pull/15168)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for ja (add-missing). PR
[#15167](https://github.com/fastapi/fastapi/pull/15167)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for tr (add-missing). PR
[#15169](https://github.com/fastapi/fastapi/pull/15169)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for fr (update-outdated). PR
[#15165](https://github.com/fastapi/fastapi/pull/15165)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for fr (add-missing). PR
[#15163](https://github.com/fastapi/fastapi/pull/15163)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for uk (update-outdated). PR
[#15160](https://github.com/fastapi/fastapi/pull/15160)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for uk (add-missing). PR
[#15158](https://github.com/fastapi/fastapi/pull/15158)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for pt (add-missing). PR
[#15157](https://github.com/fastapi/fastapi/pull/15157)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for pt (update-outdated). PR
[#15159](https://github.com/fastapi/fastapi/pull/15159)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for es (update-outdated). PR
[#15155](https://github.com/fastapi/fastapi/pull/15155)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for es (add-missing). PR
[#15154](https://github.com/fastapi/fastapi/pull/15154)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for de (update-outdated). PR
[#15156](https://github.com/fastapi/fastapi/pull/15156)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for ru (update-and-add). PR
[#15152](https://github.com/fastapi/fastapi/pull/15152)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for de (add-missing). PR
[#15153](https://github.com/fastapi/fastapi/pull/15153)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_1)

- 🔨 Exclude spam comments from statistics in
`scripts/people.py`

. PR[#15088](https://github.com/fastapi/fastapi/pull/15088)by[@YuriiMotov](https://github.com/YuriiMotov). - ⬆ Bump authlib from 1.6.7 to 1.6.9. PR
[#15128](https://github.com/fastapi/fastapi/pull/15128)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pyasn1 from 0.6.2 to 0.6.3. PR
[#15143](https://github.com/fastapi/fastapi/pull/15143)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump ujson from 5.11.0 to 5.12.0. PR
[#15150](https://github.com/fastapi/fastapi/pull/15150)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔨 Tweak translation workflow and translation fixer tool. PR
[#15166](https://github.com/fastapi/fastapi/pull/15166)by[@YuriiMotov](https://github.com/YuriiMotov). - 🔨 Fix
`commit_in_place`

passed via env variable in`translate.yml`

workflow. PR[#15151](https://github.com/fastapi/fastapi/pull/15151)by[@YuriiMotov](https://github.com/YuriiMotov). - 🔨 Update translation general prompt to enforce link style in translation matches the original link style. PR
[#15148](https://github.com/fastapi/fastapi/pull/15148)by[@YuriiMotov](https://github.com/YuriiMotov). - 👷 Re-enable translation workflow run by cron in CI (twice a month). PR
[#15145](https://github.com/fastapi/fastapi/pull/15145)by[@YuriiMotov](https://github.com/YuriiMotov). - 👷 Add
`ty`

to precommit. PR[#15091](https://github.com/fastapi/fastapi/pull/15091)by[@svlandeg](https://github.com/svlandeg). - ⬆ Bump dorny/paths-filter from 3 to 4. PR
[#15106](https://github.com/fastapi/fastapi/pull/15106)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump cairosvg from 2.8.2 to 2.9.0. PR
[#15108](https://github.com/fastapi/fastapi/pull/15108)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pyjwt from 2.11.0 to 2.12.0. PR
[#15110](https://github.com/fastapi/fastapi/pull/15110)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump black from 26.1.0 to 26.3.1. PR
[#15100](https://github.com/fastapi/fastapi/pull/15100)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔨 Update script to autofix permalinks to account for headers with Markdown links. PR
[#15062](https://github.com/fastapi/fastapi/pull/15062)by[@tiangolo](https://github.com/tiangolo). - 📌 Pin Click for MkDocs live reload. PR
[#15057](https://github.com/fastapi/fastapi/pull/15057)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump werkzeug from 3.1.5 to 3.1.6. PR
[#14948](https://github.com/fastapi/fastapi/pull/14948)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pydantic-ai from 1.62.0 to 1.63.0. PR
[#15035](https://github.com/fastapi/fastapi/pull/15035)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pytest-codspeed from 4.2.0 to 4.3.0. PR
[#15034](https://github.com/fastapi/fastapi/pull/15034)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump strawberry-graphql from 0.291.2 to 0.307.1. PR
[#15033](https://github.com/fastapi/fastapi/pull/15033)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump typer from 0.21.1 to 0.24.1. PR
[#15032](https://github.com/fastapi/fastapi/pull/15032)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump actions/download-artifact from 7 to 8. PR
[#15020](https://github.com/fastapi/fastapi/pull/15020)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump actions/upload-artifact from 6 to 7. PR
[#15019](https://github.com/fastapi/fastapi/pull/15019)by[@dependabot[bot]](https://github.com/apps/dependabot).

## 0.135.1 (2026-03-01)[¶](#01351-2026-03-01)

### Fixes[¶](#fixes)

- 🐛 Fix, avoid yield from a TaskGroup, only as an async context manager, closed in the request async exit stack. PR
[#15038](https://github.com/fastapi/fastapi/pull/15038)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_2)

- ✏️ Fix typo in
`docs/en/docs/_llm-test.md`

. PR[#15007](https://github.com/fastapi/fastapi/pull/15007)by[@adityagiri3600](https://github.com/adityagiri3600). - 📝 Update Skill, optimize context, trim and refactor into references. PR
[#15031](https://github.com/fastapi/fastapi/pull/15031)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_2)

- 👥 Update FastAPI People - Experts. PR
[#15037](https://github.com/fastapi/fastapi/pull/15037)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Contributors and Translators. PR
[#15029](https://github.com/fastapi/fastapi/pull/15029)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI GitHub topic repositories. PR
[#15036](https://github.com/fastapi/fastapi/pull/15036)by[@tiangolo](https://github.com/tiangolo).

## 0.135.0 (2026-03-01)[¶](#01350-2026-03-01)

### Features[¶](#features)

- ✨ Add support for Server Sent Events. PR
[#15030](https://github.com/fastapi/fastapi/pull/15030)by[@tiangolo](https://github.com/tiangolo).- New docs:
[Server-Sent Events (SSE)](https://fastapi.tiangolo.com/tutorial/server-sent-events/).

- New docs:

## 0.134.0 (2026-02-27)[¶](#01340-2026-02-27)

### Features[¶](#features_1)

- ✨ Add support for streaming JSON Lines and binary data with
`yield`

. PR[#15022](https://github.com/fastapi/fastapi/pull/15022)by[@tiangolo](https://github.com/tiangolo).- This also upgrades Starlette from
`>=0.40.0`

to`>=0.46.0`

, as it's needed to properly unrwap and re-raise exceptions from exception groups. - New docs:
[Stream JSON Lines](https://fastapi.tiangolo.com/tutorial/stream-json-lines/). - And new docs:
[Stream Data](https://fastapi.tiangolo.com/advanced/stream-data/).

- This also upgrades Starlette from

### Docs[¶](#docs_3)

- 📝 Update Library Agent Skill with streaming responses. PR
[#15024](https://github.com/fastapi/fastapi/pull/15024)by[@tiangolo](https://github.com/tiangolo). - 📝 Update docs for responses and new stream with
`yield`

. PR[#15023](https://github.com/fastapi/fastapi/pull/15023)by[@tiangolo](https://github.com/tiangolo). - 📝 Add
`await`

in`StreamingResponse`

code example to allow cancellation. PR[#14681](https://github.com/fastapi/fastapi/pull/14681)by[@casperdcl](https://github.com/casperdcl). - 📝 Rename
`docs_src/websockets`

to`docs_src/websockets_`

to avoid import errors. PR[#14979](https://github.com/fastapi/fastapi/pull/14979)by[@YuriiMotov](https://github.com/YuriiMotov).

### Internal[¶](#internal_3)

- 🔨 Run tests with
`pytest-xdist`

and`pytest-cov`

. PR[#14992](https://github.com/fastapi/fastapi/pull/14992)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.133.1 (2026-02-25)[¶](#01331-2026-02-25)

### Features[¶](#features_2)

- 🔧 Add FastAPI Agents Skill. PR
[#14982](https://github.com/fastapi/fastapi/pull/14982)by[@tiangolo](https://github.com/tiangolo).- Read more about it in
[Library Agent Skills](https://tiangolo.com/ideas/library-agent-skills/).

- Read more about it in

### Internal[¶](#internal_4)

- ✅ Fix all tests are skipped on Windows. PR
[#14994](https://github.com/fastapi/fastapi/pull/14994)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.133.0 (2026-02-24)[¶](#01330-2026-02-24)

### Upgrades[¶](#upgrades_1)

## 0.132.1 (2026-02-24)[¶](#01321-2026-02-24)

### Refactors[¶](#refactors)

### Internal[¶](#internal_5)

- 👥 Update FastAPI People - Experts. PR
[#14972](https://github.com/fastapi/fastapi/pull/14972)by[@tiangolo](https://github.com/tiangolo). - 👷 Allow skipping
`benchmark`

job in`test`

workflow. PR[#14974](https://github.com/fastapi/fastapi/pull/14974)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.132.0 (2026-02-23)[¶](#01320-2026-02-23)

### Breaking Changes[¶](#breaking-changes)

- 🔒️ Add
`strict_content_type`

checking for JSON requests. PR[#14978](https://github.com/fastapi/fastapi/pull/14978)by[@tiangolo](https://github.com/tiangolo).- Now FastAPI checks, by default, that JSON requests have a
`Content-Type`

header with a valid JSON value, like`application/json`

, and rejects requests that don't. - If the clients for your app don't send a valid
`Content-Type`

header you can disable this with`strict_content_type=False`

. - Check the new docs:
[Strict Content-Type Checking](https://fastapi.tiangolo.com/advanced/strict-content-type/).

- Now FastAPI checks, by default, that JSON requests have a

### Internal[¶](#internal_6)

- ⬆ Bump flask from 3.1.2 to 3.1.3. PR
[#14949](https://github.com/fastapi/fastapi/pull/14949)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Update all dependencies to use
`griffelib`

instead of`griffe`

. PR[#14973](https://github.com/fastapi/fastapi/pull/14973)by[@svlandeg](https://github.com/svlandeg). - 🔨 Fix
`FastAPI People`

workflow. PR[#14951](https://github.com/fastapi/fastapi/pull/14951)by[@YuriiMotov](https://github.com/YuriiMotov). - 👷 Do not run codspeed with coverage as it's not tracked. PR
[#14966](https://github.com/fastapi/fastapi/pull/14966)by[@tiangolo](https://github.com/tiangolo). - 👷 Do not include benchmark tests in coverage to speed up coverage processing. PR
[#14965](https://github.com/fastapi/fastapi/pull/14965)by[@tiangolo](https://github.com/tiangolo).

## 0.131.0 (2026-02-22)[¶](#01310-2026-02-22)

### Breaking Changes[¶](#breaking-changes_1)

## 0.130.0 (2026-02-22)[¶](#01300-2026-02-22)

### Features[¶](#features_3)

- ✨ Serialize JSON response with Pydantic (in Rust), when there's a Pydantic return type or response model. PR
[#14962](https://github.com/fastapi/fastapi/pull/14962)by[@tiangolo](https://github.com/tiangolo).- This results in 2x (or more) performance increase for JSON responses.
- New docs:
[Custom Response - JSON Performance](https://fastapi.tiangolo.com/advanced/custom-response/#json-performance).


## 0.129.2 (2026-02-21)[¶](#01292-2026-02-21)

### Internal[¶](#internal_7)

- ⬆️ Upgrade pytest. PR
[#14959](https://github.com/fastapi/fastapi/pull/14959)by[@tiangolo](https://github.com/tiangolo). - 👷 Fix CI, do not attempt to publish
`fastapi-slim`

. PR[#14958](https://github.com/fastapi/fastapi/pull/14958)by[@tiangolo](https://github.com/tiangolo). - ➖ Drop support for
`fastapi-slim`

, no more versions will be released, use only`"fastapi[standard]"`

or`fastapi`

. PR[#14957](https://github.com/fastapi/fastapi/pull/14957)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update pyproject.toml, remove unneeded lines. PR
[#14956](https://github.com/fastapi/fastapi/pull/14956)by[@tiangolo](https://github.com/tiangolo).

## 0.129.1 (2026-02-21)[¶](#01291-2026-02-21)

### Fixes[¶](#fixes_1)

- ♻️ Fix JSON Schema for bytes, use
`"contentMediaType": "application/octet-stream"`

instead of`"format": "binary"`

. PR[#14953](https://github.com/fastapi/fastapi/pull/14953)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_4)

- 🔨 Add Kapa.ai widget (AI chatbot). PR
[#14938](https://github.com/fastapi/fastapi/pull/14938)by[@tiangolo](https://github.com/tiangolo). - 🔥 Remove Python 3.9 specific files, no longer needed after updating translations. PR
[#14931](https://github.com/fastapi/fastapi/pull/14931)by[@tiangolo](https://github.com/tiangolo). - 📝 Update docs for JWT to prevent timing attacks. PR
[#14908](https://github.com/fastapi/fastapi/pull/14908)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_1)

- ✏️ Fix several typos in ru translations. PR
[#14934](https://github.com/fastapi/fastapi/pull/14934)by[@argoarsiks](https://github.com/argoarsiks). - 🌐 Update translations for ko (update-all and add-missing). PR
[#14923](https://github.com/fastapi/fastapi/pull/14923)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for uk (add-missing). PR
[#14922](https://github.com/fastapi/fastapi/pull/14922)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for zh-hant (update-all and add-missing). PR
[#14921](https://github.com/fastapi/fastapi/pull/14921)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for fr (update-all and add-missing). PR
[#14920](https://github.com/fastapi/fastapi/pull/14920)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for de (update-all) . PR
[#14910](https://github.com/fastapi/fastapi/pull/14910)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for ja (update-all). PR
[#14916](https://github.com/fastapi/fastapi/pull/14916)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for pt (update-all). PR
[#14912](https://github.com/fastapi/fastapi/pull/14912)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for es (update-all and add-missing). PR
[#14911](https://github.com/fastapi/fastapi/pull/14911)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for zh (update-all). PR
[#14917](https://github.com/fastapi/fastapi/pull/14917)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for uk (update-all). PR
[#14914](https://github.com/fastapi/fastapi/pull/14914)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for tr (update-all). PR
[#14913](https://github.com/fastapi/fastapi/pull/14913)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for ru (update-outdated). PR
[#14909](https://github.com/fastapi/fastapi/pull/14909)by[@YuriiMotov](https://github.com/YuriiMotov).

### Internal[¶](#internal_8)

- 👷 Always run tests on push to
`master`

branch and when run by scheduler. PR[#14940](https://github.com/fastapi/fastapi/pull/14940)by[@YuriiMotov](https://github.com/YuriiMotov). - 🎨 Upgrade typing syntax for Python 3.10. PR
[#14932](https://github.com/fastapi/fastapi/pull/14932)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump cryptography from 46.0.4 to 46.0.5. PR
[#14892](https://github.com/fastapi/fastapi/pull/14892)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pillow from 12.1.0 to 12.1.1. PR
[#14899](https://github.com/fastapi/fastapi/pull/14899)by[@dependabot[bot]](https://github.com/apps/dependabot).

## 0.129.0 (2026-02-12)[¶](#01290-2026-02-12)

### Breaking Changes[¶](#breaking-changes_2)

### Refactors[¶](#refactors_1)

### Docs[¶](#docs_5)

- 📝 Update highlights in webhooks docs. PR
[#14905](https://github.com/fastapi/fastapi/pull/14905)by[@tiangolo](https://github.com/tiangolo). - 📝 Update source examples and docs from Python 3.9 to 3.10. PR
[#14900](https://github.com/fastapi/fastapi/pull/14900)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_9)

## 0.128.8 (2026-02-11)[¶](#01288-2026-02-11)

### Docs[¶](#docs_6)

- 📝 Fix grammar in
`docs/en/docs/tutorial/first-steps.md`

. PR[#14708](https://github.com/fastapi/fastapi/pull/14708)by[@SanjanaS10](https://github.com/SanjanaS10).

### Internal[¶](#internal_10)

- 🔨 Tweak PDM hook script. PR
[#14895](https://github.com/fastapi/fastapi/pull/14895)by[@tiangolo](https://github.com/tiangolo). - ♻️ Update build setup for
`fastapi-slim`

, deprecate it, and make it only depend on`fastapi`

. PR[#14894](https://github.com/fastapi/fastapi/pull/14894)by[@tiangolo](https://github.com/tiangolo).

## 0.128.7 (2026-02-10)[¶](#01287-2026-02-10)

### Features[¶](#features_4)

- ✨ Show a clear error on attempt to include router into itself. PR
[#14258](https://github.com/fastapi/fastapi/pull/14258)by[@JavierSanchezCastro](https://github.com/JavierSanchezCastro). - ✨ Replace
`dict`

by`Mapping`

on`HTTPException.headers`

. PR[#12997](https://github.com/fastapi/fastapi/pull/12997)by[@rijenkii](https://github.com/rijenkii).

### Refactors[¶](#refactors_2)

- ♻️ Simplify reading files in memory, do it sequentially instead of (fake) parallel. PR
[#14884](https://github.com/fastapi/fastapi/pull/14884)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_7)

- 📝 Use
`dfn`

tag for definitions instead of`abbr`

in docs. PR[#14744](https://github.com/fastapi/fastapi/pull/14744)by[@YuriiMotov](https://github.com/YuriiMotov).

### Internal[¶](#internal_11)

- ✅ Tweak comment in test to reference PR. PR
[#14885](https://github.com/fastapi/fastapi/pull/14885)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update LLM-prompt for
`abbr`

and`dfn`

tags. PR[#14747](https://github.com/fastapi/fastapi/pull/14747)by[@YuriiMotov](https://github.com/YuriiMotov). - ✅ Test order for the submitted byte Files. PR
[#14828](https://github.com/fastapi/fastapi/pull/14828)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🔧 Configure
`test`

workflow to run tests with`inline-snapshot=review`

. PR[#14876](https://github.com/fastapi/fastapi/pull/14876)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.128.6 (2026-02-09)[¶](#01286-2026-02-09)

### Fixes[¶](#fixes_2)

- 🐛 Fix
`on_startup`

and`on_shutdown`

parameters of`APIRouter`

. PR[#14873](https://github.com/fastapi/fastapi/pull/14873)by[@YuriiMotov](https://github.com/YuriiMotov).

### Translations[¶](#translations_2)

### Internal[¶](#internal_12)

- ✅ Fix parameterized tests with snapshots. PR
[#14875](https://github.com/fastapi/fastapi/pull/14875)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.128.5 (2026-02-08)[¶](#01285-2026-02-08)

### Refactors[¶](#refactors_3)

### Internal[¶](#internal_13)

## 0.128.4 (2026-02-07)[¶](#01284-2026-02-07)

### Refactors[¶](#refactors_4)

- ♻️ Refactor internals, simplify Pydantic v2/v1 utils,
`create_model_field`

, better types for`lenient_issubclass`

. PR[#14860](https://github.com/fastapi/fastapi/pull/14860)by[@tiangolo](https://github.com/tiangolo). - ♻️ Simplify internals, remove Pydantic v1 only logic, no longer needed. PR
[#14857](https://github.com/fastapi/fastapi/pull/14857)by[@tiangolo](https://github.com/tiangolo). - ♻️ Refactor internals, cleanup unneeded Pydantic v1 specific logic. PR
[#14856](https://github.com/fastapi/fastapi/pull/14856)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_3)

- 🌐 Update translations for fr (outdated pages). PR
[#14839](https://github.com/fastapi/fastapi/pull/14839)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for tr (outdated and missing). PR
[#14838](https://github.com/fastapi/fastapi/pull/14838)by[@YuriiMotov](https://github.com/YuriiMotov).

### Internal[¶](#internal_14)

## 0.128.3 (2026-02-06)[¶](#01283-2026-02-06)

### Refactors[¶](#refactors_5)

- ♻️ Re-implement
`on_event`

in FastAPI for compatibility with the next Starlette, while keeping backwards compatibility. PR[#14851](https://github.com/fastapi/fastapi/pull/14851)by[@tiangolo](https://github.com/tiangolo).

### Upgrades[¶](#upgrades_2)

### Translations[¶](#translations_4)

### Internal[¶](#internal_15)

- 👷 Run tests with Starlette from git. PR
[#14849](https://github.com/fastapi/fastapi/pull/14849)by[@tiangolo](https://github.com/tiangolo). - 👷 Run tests with lower bound uv sync, upgrade
`fastapi[all]`

minimum dependencies:`ujson >=5.8.0`

,`orjson >=3.9.3`

. PR[#14846](https://github.com/fastapi/fastapi/pull/14846)by[@tiangolo](https://github.com/tiangolo).

## 0.128.2 (2026-02-05)[¶](#01282-2026-02-05)

### Features[¶](#features_5)

- ✨ Add support for PEP695
`TypeAliasType`

. PR[#13920](https://github.com/fastapi/fastapi/pull/13920)by[@cstruct](https://github.com/cstruct). - ✨ Allow
`Response`

type hint as dependency annotation. PR[#14794](https://github.com/fastapi/fastapi/pull/14794)by[@jonathan-fulton](https://github.com/jonathan-fulton).

### Fixes[¶](#fixes_3)

- 🐛 Fix using
`Json[list[str]]`

type (issue #10997). PR[#14616](https://github.com/fastapi/fastapi/pull/14616)by[@mkanetsuna](https://github.com/mkanetsuna).

### Docs[¶](#docs_8)

- 📝 Update docs for translations. PR
[#14830](https://github.com/fastapi/fastapi/pull/14830)by[@tiangolo](https://github.com/tiangolo). - 📝 Fix duplicate word in
`advanced-dependencies.md`

. PR[#14815](https://github.com/fastapi/fastapi/pull/14815)by[@Rayyan-Oumlil](https://github.com/Rayyan-Oumlil).

### Translations[¶](#translations_5)

- 🌐 Enable Traditional Chinese translations. PR
[#14842](https://github.com/fastapi/fastapi/pull/14842)by[@tiangolo](https://github.com/tiangolo). - 🌐 Enable French docs translations. PR
[#14841](https://github.com/fastapi/fastapi/pull/14841)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for fr (translate-page). PR
[#14837](https://github.com/fastapi/fastapi/pull/14837)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for de (update-outdated). PR
[#14836](https://github.com/fastapi/fastapi/pull/14836)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for pt (update-outdated). PR
[#14833](https://github.com/fastapi/fastapi/pull/14833)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for ko (update-outdated). PR
[#14835](https://github.com/fastapi/fastapi/pull/14835)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for es (update-outdated). PR
[#14832](https://github.com/fastapi/fastapi/pull/14832)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for tr (update-outdated). PR
[#14831](https://github.com/fastapi/fastapi/pull/14831)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for tr (add-missing). PR
[#14790](https://github.com/fastapi/fastapi/pull/14790)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for fr (update-outdated). PR
[#14826](https://github.com/fastapi/fastapi/pull/14826)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for zh-hant (update-outdated). PR
[#14825](https://github.com/fastapi/fastapi/pull/14825)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for uk (update-outdated). PR
[#14822](https://github.com/fastapi/fastapi/pull/14822)by[@tiangolo](https://github.com/tiangolo). - 🔨 Update docs and translations scripts, enable Turkish. PR
[#14824](https://github.com/fastapi/fastapi/pull/14824)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_16)

## 0.128.1 (2026-02-04)[¶](#01281-2026-02-04)

### Features[¶](#features_6)

- ✨ Add
`viewport`

meta tag to improve Swagger UI on mobile devices. PR[#14777](https://github.com/fastapi/fastapi/pull/14777)by[@Joab0](https://github.com/Joab0). - 🚸 Improve error message for invalid query parameter type annotations. PR
[#14479](https://github.com/fastapi/fastapi/pull/14479)by[@retwish](https://github.com/retwish).

### Fixes[¶](#fixes_4)

- 🐛 Update
`ValidationError`

schema to include`input`

and`ctx`

. PR[#14791](https://github.com/fastapi/fastapi/pull/14791)by[@jonathan-fulton](https://github.com/jonathan-fulton). - 🐛 Fix TYPE_CHECKING annotations for Python 3.14 (PEP 649). PR
[#14789](https://github.com/fastapi/fastapi/pull/14789)by[@mgu](https://github.com/mgu). - 🐛 Strip whitespaces from
`Authorization`

header credentials. PR[#14786](https://github.com/fastapi/fastapi/pull/14786)by[@WaveTheory1](https://github.com/WaveTheory1). - 🐛 Fix OpenAPI duplication of
`anyOf`

refs for app-level responses with specified`content`

and`model`

as`Union`

. PR[#14463](https://github.com/fastapi/fastapi/pull/14463)by[@DJMcoder](https://github.com/DJMcoder).

### Refactors[¶](#refactors_6)

- 🎨 Tweak types for mypy. PR
[#14816](https://github.com/fastapi/fastapi/pull/14816)by[@tiangolo](https://github.com/tiangolo). - 🏷️ Re-export
`IncEx`

type from Pydantic instead of duplicating it. PR[#14641](https://github.com/fastapi/fastapi/pull/14641)by[@mvanderlee](https://github.com/mvanderlee). - 💡 Update comment for Pydantic internals. PR
[#14814](https://github.com/fastapi/fastapi/pull/14814)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_9)

- 📝 Update docs for contributing translations, simplify title. PR
[#14817](https://github.com/fastapi/fastapi/pull/14817)by[@tiangolo](https://github.com/tiangolo). - 📝 Fix typing issue in
`docs_src/app_testing/app_b`

code example. PR[#14573](https://github.com/fastapi/fastapi/pull/14573)by[@timakaa](https://github.com/timakaa). - 📝 Fix example of license identifier in documentation. PR
[#14492](https://github.com/fastapi/fastapi/pull/14492)by[@johnson-earls](https://github.com/johnson-earls). - 📝 Add banner to translated pages. PR
[#14809](https://github.com/fastapi/fastapi/pull/14809)by[@YuriiMotov](https://github.com/YuriiMotov). - 📝 Add links to related sections of docs to docstrings. PR
[#14776](https://github.com/fastapi/fastapi/pull/14776)by[@YuriiMotov](https://github.com/YuriiMotov). - 📝 Update embedded code examples to Python 3.10 syntax. PR
[#14758](https://github.com/fastapi/fastapi/pull/14758)by[@YuriiMotov](https://github.com/YuriiMotov). - 📝 Fix dependency installation command in
`docs/en/docs/contributing.md`

. PR[#14757](https://github.com/fastapi/fastapi/pull/14757)by[@YuriiMotov](https://github.com/YuriiMotov). - 📝 Use return type annotation instead of
`response_model`

when possible. PR[#14753](https://github.com/fastapi/fastapi/pull/14753)by[@YuriiMotov](https://github.com/YuriiMotov). - 📝 Use
`WSGIMiddleware`

from`a2wsgi`

instead of deprecated`fastapi.middleware.wsgi.WSGIMiddleware`

. PR[#14756](https://github.com/fastapi/fastapi/pull/14756)by[@YuriiMotov](https://github.com/YuriiMotov). - 📝 Fix minor typos in release notes. PR
[#14780](https://github.com/fastapi/fastapi/pull/14780)by[@whyvineet](https://github.com/whyvineet). - 🐛 Fix copy button in custom.js. PR
[#14722](https://github.com/fastapi/fastapi/pull/14722)by[@fcharrier](https://github.com/fcharrier). - 📝 Add contribution instructions about LLM generated code and comments and automated tools for PRs. PR
[#14706](https://github.com/fastapi/fastapi/pull/14706)by[@tiangolo](https://github.com/tiangolo). - 📝 Update docs for management tasks. PR
[#14705](https://github.com/fastapi/fastapi/pull/14705)by[@tiangolo](https://github.com/tiangolo). - 📝 Update docs about managing translations. PR
[#14704](https://github.com/fastapi/fastapi/pull/14704)by[@tiangolo](https://github.com/tiangolo). - 📝 Update docs for contributing with translations. PR
[#14701](https://github.com/fastapi/fastapi/pull/14701)by[@tiangolo](https://github.com/tiangolo). - 📝 Specify language code for code block. PR
[#14656](https://github.com/fastapi/fastapi/pull/14656)by[@YuriiMotov](https://github.com/YuriiMotov).

### Translations[¶](#translations_6)

- 🌐 Improve LLM prompt of
`uk`

documentation. PR[#14795](https://github.com/fastapi/fastapi/pull/14795)by[@roli2py](https://github.com/roli2py). - 🌐 Update translations for ja (update-outdated). PR
[#14588](https://github.com/fastapi/fastapi/pull/14588)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for uk (update outdated, found by fixer tool). PR
[#14739](https://github.com/fastapi/fastapi/pull/14739)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for tr (update-outdated). PR
[#14745](https://github.com/fastapi/fastapi/pull/14745)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update
`llm-prompt.md`

for Korean language. PR[#14763](https://github.com/fastapi/fastapi/pull/14763)by[@seuthootDev](https://github.com/seuthootDev). - 🌐 Update translations for ko (update outdated, found by fixer tool). PR
[#14738](https://github.com/fastapi/fastapi/pull/14738)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for de (update-outdated). PR
[#14690](https://github.com/fastapi/fastapi/pull/14690)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update LLM prompt for Russian translations. PR
[#14733](https://github.com/fastapi/fastapi/pull/14733)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update translations for ru (update-outdated). PR
[#14693](https://github.com/fastapi/fastapi/pull/14693)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for pt (update-outdated). PR
[#14724](https://github.com/fastapi/fastapi/pull/14724)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update Korean LLM prompt. PR
[#14740](https://github.com/fastapi/fastapi/pull/14740)by[@hard-coders](https://github.com/hard-coders). - 🌐 Improve LLM prompt for Turkish translations. PR
[#14728](https://github.com/fastapi/fastapi/pull/14728)by[@Kadermiyanyedi](https://github.com/Kadermiyanyedi). - 🌐 Update portuguese llm-prompt.md. PR
[#14702](https://github.com/fastapi/fastapi/pull/14702)by[@ceb10n](https://github.com/ceb10n). - 🌐 Update LLM prompt instructions file for French. PR
[#14618](https://github.com/fastapi/fastapi/pull/14618)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for ko (add-missing). PR
[#14699](https://github.com/fastapi/fastapi/pull/14699)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for ko (update-outdated). PR
[#14589](https://github.com/fastapi/fastapi/pull/14589)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for uk (update-outdated). PR
[#14587](https://github.com/fastapi/fastapi/pull/14587)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for es (update-outdated). PR
[#14686](https://github.com/fastapi/fastapi/pull/14686)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add LLM prompt file for Turkish, generated from the existing translations. PR
[#14547](https://github.com/fastapi/fastapi/pull/14547)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add LLM prompt file for Traditional Chinese, generated from the existing translations. PR
[#14550](https://github.com/fastapi/fastapi/pull/14550)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add LLM prompt file for Simplified Chinese, generated from the existing translations. PR
[#14549](https://github.com/fastapi/fastapi/pull/14549)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_17)

- ⬇️ Downgrade LLM translations model to GPT-5 to reduce mistakes. PR
[#14823](https://github.com/fastapi/fastapi/pull/14823)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix translation script commit in place. PR
[#14818](https://github.com/fastapi/fastapi/pull/14818)by[@tiangolo](https://github.com/tiangolo). - 🔨 Update translation script to retry if LLM-response doesn't pass validation with Translation Fixer tool. PR
[#14749](https://github.com/fastapi/fastapi/pull/14749)by[@YuriiMotov](https://github.com/YuriiMotov). - 👷 Run tests only on relevant code changes (not on docs). PR
[#14813](https://github.com/fastapi/fastapi/pull/14813)by[@tiangolo](https://github.com/tiangolo). - 👷 Run mypy by pre-commit. PR
[#14806](https://github.com/fastapi/fastapi/pull/14806)by[@YuriiMotov](https://github.com/YuriiMotov). - ⬆ Bump ruff from 0.14.3 to 0.14.14. PR
[#14798](https://github.com/fastapi/fastapi/pull/14798)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pyasn1 from 0.6.1 to 0.6.2. PR
[#14804](https://github.com/fastapi/fastapi/pull/14804)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump sqlmodel from 0.0.27 to 0.0.31. PR
[#14802](https://github.com/fastapi/fastapi/pull/14802)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump mkdocs-macros-plugin from 1.4.1 to 1.5.0. PR
[#14801](https://github.com/fastapi/fastapi/pull/14801)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump gitpython from 3.1.45 to 3.1.46. PR
[#14800](https://github.com/fastapi/fastapi/pull/14800)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump typer from 0.16.0 to 0.21.1. PR
[#14799](https://github.com/fastapi/fastapi/pull/14799)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👥 Update FastAPI GitHub topic repositories. PR
[#14803](https://github.com/fastapi/fastapi/pull/14803)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Contributors and Translators. PR
[#14796](https://github.com/fastapi/fastapi/pull/14796)by[@tiangolo](https://github.com/tiangolo). - 🔧 Ensure that an edit to
`uv.lock`

gets the`internal`

label. PR[#14759](https://github.com/fastapi/fastapi/pull/14759)by[@svlandeg](https://github.com/svlandeg). - 🔧 Update sponsors: remove Requestly. PR
[#14735](https://github.com/fastapi/fastapi/pull/14735)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, LambdaTest changes to TestMu AI. PR
[#14734](https://github.com/fastapi/fastapi/pull/14734)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump actions/cache from 4 to 5. PR
[#14511](https://github.com/fastapi/fastapi/pull/14511)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump actions/upload-artifact from 5 to 6. PR
[#14525](https://github.com/fastapi/fastapi/pull/14525)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump actions/download-artifact from 6 to 7. PR
[#14526](https://github.com/fastapi/fastapi/pull/14526)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👷 Tweak CI input names. PR
[#14688](https://github.com/fastapi/fastapi/pull/14688)by[@tiangolo](https://github.com/tiangolo). - 🔨 Refactor translation script to allow committing in place. PR
[#14687](https://github.com/fastapi/fastapi/pull/14687)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix translation script path. PR
[#14685](https://github.com/fastapi/fastapi/pull/14685)by[@tiangolo](https://github.com/tiangolo). - ✅ Enable tests in CI for scripts. PR
[#14684](https://github.com/fastapi/fastapi/pull/14684)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add pre-commit local script to fix language translations. PR
[#14683](https://github.com/fastapi/fastapi/pull/14683)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Migrate to uv. PR
[#14676](https://github.com/fastapi/fastapi/pull/14676)by[@DoctorJohn](https://github.com/DoctorJohn). - 🔨 Add LLM translations tool fixer. PR
[#14652](https://github.com/fastapi/fastapi/pull/14652)by[@YuriiMotov](https://github.com/YuriiMotov). - 👥 Update FastAPI People - Sponsors. PR
[#14626](https://github.com/fastapi/fastapi/pull/14626)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI GitHub topic repositories. PR
[#14630](https://github.com/fastapi/fastapi/pull/14630)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Contributors and Translators. PR
[#14625](https://github.com/fastapi/fastapi/pull/14625)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translation prompts. PR
[#14619](https://github.com/fastapi/fastapi/pull/14619)by[@tiangolo](https://github.com/tiangolo). - 🔨 Update LLM translation script to guide reviewers to change the prompt. PR
[#14614](https://github.com/fastapi/fastapi/pull/14614)by[@tiangolo](https://github.com/tiangolo). - 👷 Do not run translations on cron while finishing updating existing languages. PR
[#14613](https://github.com/fastapi/fastapi/pull/14613)by[@tiangolo](https://github.com/tiangolo). - 🔥 Remove test variants for Pydantic v1 in test_request_params. PR
[#14612](https://github.com/fastapi/fastapi/pull/14612)by[@tiangolo](https://github.com/tiangolo). - 🔥 Remove Pydantic v1 specific test variants. PR
[#14611](https://github.com/fastapi/fastapi/pull/14611)by[@tiangolo](https://github.com/tiangolo).

## 0.128.0 (2025-12-27)[¶](#01280-2025-12-27)

### Breaking Changes[¶](#breaking-changes_3)

### Internal[¶](#internal_18)

## 0.127.1 (2025-12-26)[¶](#01271-2025-12-26)

### Refactors[¶](#refactors_7)

### Docs[¶](#docs_10)

### Translations[¶](#translations_7)

- 🌐 Update translations for de (update-outdated). PR
[#14602](https://github.com/fastapi/fastapi/pull/14602)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Update translations for de (update-outdated). PR
[#14581](https://github.com/fastapi/fastapi/pull/14581)by[@nilslindemann](https://github.com/nilslindemann).

### Internal[¶](#internal_19)

- 🔧 Update pre-commit to use local Ruff instead of hook. PR
[#14604](https://github.com/fastapi/fastapi/pull/14604)by[@tiangolo](https://github.com/tiangolo). - ✅ Add missing tests for code examples. PR
[#14569](https://github.com/fastapi/fastapi/pull/14569)by[@YuriiMotov](https://github.com/YuriiMotov). - 👷 Remove
`lint`

job from`test`

CI workflow. PR[#14593](https://github.com/fastapi/fastapi/pull/14593)by[@YuriiMotov](https://github.com/YuriiMotov). - 👷 Update secrets check. PR
[#14592](https://github.com/fastapi/fastapi/pull/14592)by[@tiangolo](https://github.com/tiangolo). - 👷 Run CodSpeed tests in parallel to other tests to speed up CI. PR
[#14586](https://github.com/fastapi/fastapi/pull/14586)by[@tiangolo](https://github.com/tiangolo). - 🔨 Update scripts and pre-commit to autofix files. PR
[#14585](https://github.com/fastapi/fastapi/pull/14585)by[@tiangolo](https://github.com/tiangolo).

## 0.127.0 (2025-12-21)[¶](#01270-2025-12-21)

### Breaking Changes[¶](#breaking-changes_4)

### Translations[¶](#translations_8)

- 🔧 Add LLM prompt file for Korean, generated from the existing translations. PR
[#14546](https://github.com/fastapi/fastapi/pull/14546)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add LLM prompt file for Japanese, generated from the existing translations. PR
[#14545](https://github.com/fastapi/fastapi/pull/14545)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_20)

## 0.126.0 (2025-12-20)[¶](#01260-2025-12-20)

### Upgrades[¶](#upgrades_3)

- ➖ Drop support for Pydantic v1, keeping short temporary support for Pydantic v2's
`pydantic.v1`

. PR[#14575](https://github.com/fastapi/fastapi/pull/14575)by[@tiangolo](https://github.com/tiangolo).- The minimum version of Pydantic installed is now
`pydantic >=2.7.0`

. - The
`standard`

dependencies now include`pydantic-settings >=2.0.0`

and`pydantic-extra-types >=2.0.0`

.

- The minimum version of Pydantic installed is now

### Docs[¶](#docs_11)

- 📝 Fix duplicated variable in
`docs_src/python_types/tutorial005_py39.py`

. PR[#14565](https://github.com/fastapi/fastapi/pull/14565)by[@paras-verma7454](https://github.com/paras-verma7454).

### Translations[¶](#translations_9)

- 🔧 Add LLM prompt file for Ukrainian, generated from the existing translations. PR
[#14548](https://github.com/fastapi/fastapi/pull/14548)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_21)

- 🔧 Tweak pre-commit to allow committing release-notes. PR
[#14577](https://github.com/fastapi/fastapi/pull/14577)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Use prek as a pre-commit alternative. PR
[#14572](https://github.com/fastapi/fastapi/pull/14572)by[@tiangolo](https://github.com/tiangolo). - 👷 Add performance tests with CodSpeed. PR
[#14558](https://github.com/fastapi/fastapi/pull/14558)by[@tiangolo](https://github.com/tiangolo).

## 0.125.0 (2025-12-17)[¶](#01250-2025-12-17)

### Breaking Changes[¶](#breaking-changes_5)

- 🔧 Drop support for Python 3.8. PR
[#14563](https://github.com/fastapi/fastapi/pull/14563)by[@tiangolo](https://github.com/tiangolo).- This would actually not be a
*breaking*change as no code would really break. Any Python 3.8 installer would just refuse to install the latest version of FastAPI and would only install 0.124.4. Only marking it as a "breaking change" to make it visible.

- This would actually not be a

### Refactors[¶](#refactors_8)

### Docs[¶](#docs_12)

- ⚰️ Remove Python 3.8 from CI and remove Python 3.8 examples from source docs. PR
[#14559](https://github.com/fastapi/fastapi/pull/14559)by[@YuriiMotov](https://github.com/YuriiMotov)and[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_10)

- 🌐 Update translations for pt (add-missing). PR
[#14539](https://github.com/fastapi/fastapi/pull/14539)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add LLM prompt file for French, generated from the existing French docs. PR
[#14544](https://github.com/fastapi/fastapi/pull/14544)by[@tiangolo](https://github.com/tiangolo). - 🌐 Sync Portuguese docs (pages found with script). PR
[#14554](https://github.com/fastapi/fastapi/pull/14554)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Sync Spanish docs (outdated pages found with script). PR
[#14553](https://github.com/fastapi/fastapi/pull/14553)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Sync German docs. PR
[#14519](https://github.com/fastapi/fastapi/pull/14519)by[@nilslindemann](https://github.com/nilslindemann). - 🔥 Remove inactive/scarce translations to Vietnamese. PR
[#14543](https://github.com/fastapi/fastapi/pull/14543)by[@tiangolo](https://github.com/tiangolo). - 🔥 Remove inactive/scarce translations to Persian. PR
[#14542](https://github.com/fastapi/fastapi/pull/14542)by[@tiangolo](https://github.com/tiangolo). - 🔥 Remove translation to emoji to simplify the new setup with LLM autotranslations. PR
[#14541](https://github.com/fastapi/fastapi/pull/14541)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for pt (update-outdated). PR
[#14537](https://github.com/fastapi/fastapi/pull/14537)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for es (update-outdated). PR
[#14532](https://github.com/fastapi/fastapi/pull/14532)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update translations for es (add-missing). PR
[#14533](https://github.com/fastapi/fastapi/pull/14533)by[@tiangolo](https://github.com/tiangolo). - 🌐 Remove translations for removed docs. PR
[#14516](https://github.com/fastapi/fastapi/pull/14516)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_22)

- ⬆ Bump
`markdown-include-variants`

from 0.0.7 to 0.0.8. PR[#14556](https://github.com/fastapi/fastapi/pull/14556)by[@YuriiMotov](https://github.com/YuriiMotov). - 🔧 Temporarily disable translations still in progress, being migrated to the new LLM setup. PR
[#14555](https://github.com/fastapi/fastapi/pull/14555)by[@YuriiMotov](https://github.com/YuriiMotov). - 🔧 Update test workflow config, remove commented code. PR
[#14540](https://github.com/fastapi/fastapi/pull/14540)by[@tiangolo](https://github.com/tiangolo). - 👷 Configure coverage, error on main tests, don't wait for Smokeshow. PR
[#14536](https://github.com/fastapi/fastapi/pull/14536)by[@tiangolo](https://github.com/tiangolo). - 👷 Run Smokeshow always, even on test failures. PR
[#14538](https://github.com/fastapi/fastapi/pull/14538)by[@tiangolo](https://github.com/tiangolo). - 👷 Make Pydantic versions customizable in CI. PR
[#14535](https://github.com/fastapi/fastapi/pull/14535)by[@tiangolo](https://github.com/tiangolo). - 👷 Fix checkout GitHub Action fetch-depth for LLM translations, enable cron monthly. PR
[#14531](https://github.com/fastapi/fastapi/pull/14531)by[@tiangolo](https://github.com/tiangolo). - 👷 Fix Typer command for CI LLM translations. PR
[#14530](https://github.com/fastapi/fastapi/pull/14530)by[@tiangolo](https://github.com/tiangolo). - 👷 Update LLM translation CI, add language matrix and extra commands, prepare for scheduled run. PR
[#14529](https://github.com/fastapi/fastapi/pull/14529)by[@tiangolo](https://github.com/tiangolo). - 👷 Update github-actions user for GitHub Actions workflows. PR
[#14528](https://github.com/fastapi/fastapi/pull/14528)by[@tiangolo](https://github.com/tiangolo). - ➕ Add requirements for translations. PR
[#14515](https://github.com/fastapi/fastapi/pull/14515)by[@tiangolo](https://github.com/tiangolo).

## 0.124.4 (2025-12-12)[¶](#01244-2025-12-12)

### Fixes[¶](#fixes_5)

- 🐛 Fix parameter aliases. PR
[#14371](https://github.com/fastapi/fastapi/pull/14371)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.124.3 (2025-12-12)[¶](#01243-2025-12-12)

### Fixes[¶](#fixes_6)

- 🐛 Fix support for tagged union with discriminator inside of
`Annotated`

with`Body()`

. PR[#14512](https://github.com/fastapi/fastapi/pull/14512)by[@tiangolo](https://github.com/tiangolo).

### Refactors[¶](#refactors_9)

- ✅ Add set of tests for request parameters and alias. PR
[#14358](https://github.com/fastapi/fastapi/pull/14358)by[@YuriiMotov](https://github.com/YuriiMotov).

### Docs[¶](#docs_13)

- 📝 Tweak links format. PR
[#14505](https://github.com/fastapi/fastapi/pull/14505)by[@tiangolo](https://github.com/tiangolo). - 📝 Update docs about re-raising validation errors, do not include string as is to not leak information. PR
[#14487](https://github.com/fastapi/fastapi/pull/14487)by[@tiangolo](https://github.com/tiangolo). - 🔥 Remove external links section. PR
[#14486](https://github.com/fastapi/fastapi/pull/14486)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_11)

- 🌐 Sync Russian docs. PR
[#14509](https://github.com/fastapi/fastapi/pull/14509)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Sync German docs. PR
[#14488](https://github.com/fastapi/fastapi/pull/14488)by[@nilslindemann](https://github.com/nilslindemann).

### Internal[¶](#internal_23)

- 👷 Tweak coverage to not pass Smokeshow max file size limit. PR
[#14507](https://github.com/fastapi/fastapi/pull/14507)by[@tiangolo](https://github.com/tiangolo). - ✅ Expand test matrix to include Windows and MacOS. PR
[#14171](https://github.com/fastapi/fastapi/pull/14171)by[@svlandeg](https://github.com/svlandeg).

## 0.124.2 (2025-12-10)[¶](#01242-2025-12-10)

### Fixes[¶](#fixes_7)

## 0.124.1 (2025-12-10)[¶](#01241-2025-12-10)

### Fixes[¶](#fixes_8)

### Docs[¶](#docs_14)

- 📝 Add variants for code examples in "Advanced User Guide". PR
[#14413](https://github.com/fastapi/fastapi/pull/14413)by[@YuriiMotov](https://github.com/YuriiMotov). - 📝 Update tech stack in project generation docs. PR
[#14472](https://github.com/fastapi/fastapi/pull/14472)by[@alejsdev](https://github.com/alejsdev).

### Internal[¶](#internal_24)

## 0.124.0 (2025-12-06)[¶](#01240-2025-12-06)

### Features[¶](#features_7)

- 🚸 Improve tracebacks by adding endpoint metadata. PR
[#14306](https://github.com/fastapi/fastapi/pull/14306)by[@savannahostrowski](https://github.com/savannahostrowski).

### Internal[¶](#internal_25)

- ✏️ Fix typo in
`scripts/mkdocs_hooks.py`

. PR[#14457](https://github.com/fastapi/fastapi/pull/14457)by[@yujiteshima](https://github.com/yujiteshima).

## 0.123.10 (2025-12-05)[¶](#012310-2025-12-05)

### Fixes[¶](#fixes_9)

- 🐛 Fix using class (not instance) dependency that has
`__call__`

method. PR[#14458](https://github.com/fastapi/fastapi/pull/14458)by[@YuriiMotov](https://github.com/YuriiMotov). - 🐛 Fix
`separate_input_output_schemas=False`

with`computed_field`

. PR[#14453](https://github.com/fastapi/fastapi/pull/14453)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.123.9 (2025-12-04)[¶](#01239-2025-12-04)

### Fixes[¶](#fixes_10)

- 🐛 Fix OAuth2 scopes in OpenAPI in extra corner cases, parent dependency with scopes, sub-dependency security scheme without scopes. PR
[#14459](https://github.com/fastapi/fastapi/pull/14459)by[@tiangolo](https://github.com/tiangolo).

## 0.123.8 (2025-12-04)[¶](#01238-2025-12-04)

### Fixes[¶](#fixes_11)

- 🐛 Fix OpenAPI security scheme OAuth2 scopes declaration, deduplicate security schemes with different scopes. PR
[#14455](https://github.com/fastapi/fastapi/pull/14455)by[@tiangolo](https://github.com/tiangolo).

## 0.123.7 (2025-12-04)[¶](#01237-2025-12-04)

### Fixes[¶](#fixes_12)

## 0.123.6 (2025-12-04)[¶](#01236-2025-12-04)

### Fixes[¶](#fixes_13)

- 🐛 Fix support for functools wraps and partial combined, for async and regular functions and classes in path operations and dependencies. PR
[#14448](https://github.com/fastapi/fastapi/pull/14448)by[@tiangolo](https://github.com/tiangolo).

## 0.123.5 (2025-12-02)[¶](#01235-2025-12-02)

### Features[¶](#features_8)

- ✨ Allow using dependables with
`functools.partial()`

. PR[#9753](https://github.com/fastapi/fastapi/pull/9753)by[@lieryan](https://github.com/lieryan). - ✨ Add support for wrapped functions (e.g.
`@functools.wraps()`

) used with forward references. PR[#5077](https://github.com/fastapi/fastapi/pull/5077)by[@lucaswiman](https://github.com/lucaswiman). - ✨ Handle wrapped dependencies. PR
[#9555](https://github.com/fastapi/fastapi/pull/9555)by[@phy1729](https://github.com/phy1729).

### Fixes[¶](#fixes_14)

### Refactors[¶](#refactors_10)

- 🔥 Remove dangling extra conditional no longer needed. PR
[#14435](https://github.com/fastapi/fastapi/pull/14435)by[@tiangolo](https://github.com/tiangolo). - ♻️ Refactor internals, update
`is_coroutine`

check to reuse internal supported variants (unwrap, check class). PR[#14434](https://github.com/fastapi/fastapi/pull/14434)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_12)

- 🌐 Sync German docs. PR
[#14367](https://github.com/fastapi/fastapi/pull/14367)by[@nilslindemann](https://github.com/nilslindemann).

## 0.123.4 (2025-12-02)[¶](#01234-2025-12-02)

### Fixes[¶](#fixes_15)

- 🐛 Fix OpenAPI schema support for computed fields when using
`separate_input_output_schemas=False`

. PR[#13207](https://github.com/fastapi/fastapi/pull/13207)by[@vgrafe](https://github.com/vgrafe).

### Docs[¶](#docs_15)

- 📝 Fix docstring of
`servers`

parameter. PR[#14405](https://github.com/fastapi/fastapi/pull/14405)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.123.3 (2025-12-02)[¶](#01233-2025-12-02)

### Fixes[¶](#fixes_16)

- 🐛 Fix Query\Header\Cookie parameter model alias. PR
[#14360](https://github.com/fastapi/fastapi/pull/14360)by[@YuriiMotov](https://github.com/YuriiMotov). - 🐛 Fix optional sequence handling in
`serialize sequence value`

with Pydantic V2. PR[#14297](https://github.com/fastapi/fastapi/pull/14297)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.123.2 (2025-12-02)[¶](#01232-2025-12-02)

### Fixes[¶](#fixes_17)

- 🐛 Fix unformatted
`{type_}`

in FastAPIError. PR[#14416](https://github.com/fastapi/fastapi/pull/14416)by[@Just-Helpful](https://github.com/Just-Helpful). - 🐛 Fix parsing extra non-body parameter list. PR
[#14356](https://github.com/fastapi/fastapi/pull/14356)by[@YuriiMotov](https://github.com/YuriiMotov). - 🐛 Fix parsing extra
`Form`

parameter list. PR[#14303](https://github.com/fastapi/fastapi/pull/14303)by[@YuriiMotov](https://github.com/YuriiMotov). - 🐛 Fix support for form values with empty strings interpreted as missing (
`None`

if that's the default), for compatibility with HTML forms. PR[#13537](https://github.com/fastapi/fastapi/pull/13537)by[@MarinPostma](https://github.com/MarinPostma).

### Docs[¶](#docs_16)

- 📝 Add tip on how to install
`pip`

in case of`No module named pip`

error in`virtual-environments.md`

. PR[#14211](https://github.com/fastapi/fastapi/pull/14211)by[@zadevhub](https://github.com/zadevhub). - 📝 Update Primary Key notes for the SQL databases tutorial to avoid confusion. PR
[#14120](https://github.com/fastapi/fastapi/pull/14120)by[@FlaviusRaducu](https://github.com/FlaviusRaducu). - 📝 Clarify estimation note in documentation. PR
[#14070](https://github.com/fastapi/fastapi/pull/14070)by[@SaisakthiM](https://github.com/SaisakthiM).

## 0.123.1 (2025-12-02)[¶](#01231-2025-12-02)

### Fixes[¶](#fixes_18)

- 🐛 Avoid accessing non-existing "$ref" key for Pydantic v2 compat remapping. PR
[#14361](https://github.com/fastapi/fastapi/pull/14361)by[@svlandeg](https://github.com/svlandeg). - 🐛 Fix
`TypeError`

when encoding a decimal with a`NaN`

or`Infinity`

value. PR[#12935](https://github.com/fastapi/fastapi/pull/12935)by[@kentwelcome](https://github.com/kentwelcome).

### Internal[¶](#internal_26)

- 🐛 Fix Windows UnicodeEncodeError in CLI test. PR
[#14295](https://github.com/fastapi/fastapi/pull/14295)by[@hemanth-thirthahalli](https://github.com/hemanth-thirthahalli). - 🔧 Update sponsors: add Greptile. PR
[#14429](https://github.com/fastapi/fastapi/pull/14429)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI GitHub topic repositories. PR
[#14426](https://github.com/fastapi/fastapi/pull/14426)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump markdown-include-variants from 0.0.6 to 0.0.7. PR
[#14423](https://github.com/fastapi/fastapi/pull/14423)by[@YuriiMotov](https://github.com/YuriiMotov). - 👥 Update FastAPI People - Sponsors. PR
[#14422](https://github.com/fastapi/fastapi/pull/14422)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Contributors and Translators. PR
[#14420](https://github.com/fastapi/fastapi/pull/14420)by[@tiangolo](https://github.com/tiangolo).

## 0.123.0 (2025-11-30)[¶](#01230-2025-11-30)

### Fixes[¶](#fixes_19)

- 🐛 Cache dependencies that don't use scopes and don't have sub-dependencies with scopes. PR
[#14419](https://github.com/fastapi/fastapi/pull/14419)by[@tiangolo](https://github.com/tiangolo).

## 0.122.1 (2025-11-30)[¶](#01221-2025-11-30)

### Fixes[¶](#fixes_20)

- 🐛 Fix hierarchical security scope propagation. PR
[#5624](https://github.com/fastapi/fastapi/pull/5624)by[@kristjanvalur](https://github.com/kristjanvalur).

### Docs[¶](#docs_17)

### Internal[¶](#internal_27)

- ⬆ Bump markdown-include-variants from 0.0.5 to 0.0.6. PR
[#14418](https://github.com/fastapi/fastapi/pull/14418)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.122.0 (2025-11-24)[¶](#01220-2025-11-24)

### Fixes[¶](#fixes_21)

- 🐛 Use
`401`

status code in security classes when credentials are missing. PR[#13786](https://github.com/fastapi/fastapi/pull/13786)by[@YuriiMotov](https://github.com/YuriiMotov).- If your code depended on these classes raising the old (less correct)
`403`

status code, check the new docs about how to override the classes, to use the same old behavior:[Use Old 403 Authentication Error Status Codes](https://fastapi.tiangolo.com/how-to/authentication-error-status-code/).

- If your code depended on these classes raising the old (less correct)

### Internal[¶](#internal_28)

- 🔧 Configure labeler to exclude files that start from underscore for
`lang-all`

label. PR[#14213](https://github.com/fastapi/fastapi/pull/14213)by[@YuriiMotov](https://github.com/YuriiMotov). - 👷 Add pre-commit config with local script for permalinks. PR
[#14398](https://github.com/fastapi/fastapi/pull/14398)by[@tiangolo](https://github.com/tiangolo). - 💄 Use font Fira Code to fix display of Rich panels in docs in Windows. PR
[#14387](https://github.com/fastapi/fastapi/pull/14387)by[@tiangolo](https://github.com/tiangolo). - 👷 Add custom pre-commit CI. PR
[#14397](https://github.com/fastapi/fastapi/pull/14397)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump actions/checkout from 5 to 6. PR
[#14381](https://github.com/fastapi/fastapi/pull/14381)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👷 Upgrade
`latest-changes`

GitHub Action and pin`actions/checkout@v5`

. PR[#14403](https://github.com/fastapi/fastapi/pull/14403)by[@svlandeg](https://github.com/svlandeg). - 🛠️ Add
`add-permalinks`

and`add-permalinks-page`

to`scripts/docs.py`

. PR[#14033](https://github.com/fastapi/fastapi/pull/14033)by[@YuriiMotov](https://github.com/YuriiMotov). - 🔧 Upgrade Material for MkDocs and remove insiders. PR
[#14375](https://github.com/fastapi/fastapi/pull/14375)by[@tiangolo](https://github.com/tiangolo).

## 0.121.3 (2025-11-19)[¶](#01213-2025-11-19)

### Refactors[¶](#refactors_11)

- ♻️ Make the result of
`Depends()`

and`Security()`

hashable, as a workaround for other tools interacting with these internal parts. PR[#14372](https://github.com/fastapi/fastapi/pull/14372)by[@tiangolo](https://github.com/tiangolo).

### Upgrades[¶](#upgrades_4)

- ⬆️ Bump Starlette to <
`0.51.0`

. PR[#14282](https://github.com/fastapi/fastapi/pull/14282)by[@musicinmybrain](https://github.com/musicinmybrain).

### Docs[¶](#docs_18)

- 📝 Add missing hash part. PR
[#14369](https://github.com/fastapi/fastapi/pull/14369)by[@nilslindemann](https://github.com/nilslindemann). - 📝 Fix typos in code comments. PR
[#14364](https://github.com/fastapi/fastapi/pull/14364)by[@Edge-Seven](https://github.com/Edge-Seven). - 📝 Add docs for using FastAPI Cloud. PR
[#14359](https://github.com/fastapi/fastapi/pull/14359)by[@tiangolo](https://github.com/tiangolo).

## 0.121.2 (2025-11-13)[¶](#01212-2025-11-13)

### Fixes[¶](#fixes_22)

### Docs[¶](#docs_19)

- 📝 Add EuroPython talk & podcast episode with Sebastián Ramírez. PR
[#14260](https://github.com/fastapi/fastapi/pull/14260)by[@clytaemnestra](https://github.com/clytaemnestra). - ✏️ Fix links and add missing permalink in docs. PR
[#14217](https://github.com/fastapi/fastapi/pull/14217)by[@YuriiMotov](https://github.com/YuriiMotov).

### Translations[¶](#translations_13)

- 🌐 Update Portuguese translations with LLM prompt. PR
[#14228](https://github.com/fastapi/fastapi/pull/14228)by[@ceb10n](https://github.com/ceb10n). - 🔨 Add Portuguese translations LLM prompt. PR
[#14208](https://github.com/fastapi/fastapi/pull/14208)by[@ceb10n](https://github.com/ceb10n). - 🌐 Sync Russian docs. PR
[#14331](https://github.com/fastapi/fastapi/pull/14331)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Sync German docs. PR
[#14317](https://github.com/fastapi/fastapi/pull/14317)by[@nilslindemann](https://github.com/nilslindemann).

## 0.121.1 (2025-11-08)[¶](#01211-2025-11-08)

### Fixes[¶](#fixes_23)

- 🐛 Fix
`Depends(func, scope='function')`

for top level (parameterless) dependencies. PR[#14301](https://github.com/fastapi/fastapi/pull/14301)by[@luzzodev](https://github.com/luzzodev).

### Docs[¶](#docs_20)

- 📝 Update docs for advanced dependencies with
`yield`

, noting the changes in 0.121.0, adding`scope`

. PR[#14287](https://github.com/fastapi/fastapi/pull/14287)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_29)

- ⬆ Bump ruff from 0.13.2 to 0.14.3. PR
[#14276](https://github.com/fastapi/fastapi/pull/14276)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#14289](https://github.com/fastapi/fastapi/pull/14289)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci).

## 0.121.0 (2025-11-03)[¶](#01210-2025-11-03)

### Features[¶](#features_9)

- ✨ Add support for dependencies with scopes, support
`scope="request"`

for dependencies with`yield`

that exit before the response is sent. PR[#14262](https://github.com/fastapi/fastapi/pull/14262)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_30)

- 👥 Update FastAPI People - Contributors and Translators. PR
[#14273](https://github.com/fastapi/fastapi/pull/14273)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Sponsors. PR
[#14274](https://github.com/fastapi/fastapi/pull/14274)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI GitHub topic repositories. PR
[#14280](https://github.com/fastapi/fastapi/pull/14280)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump mkdocs-macros-plugin from 1.4.0 to 1.4.1. PR
[#14277](https://github.com/fastapi/fastapi/pull/14277)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump mkdocstrings[python] from 0.26.1 to 0.30.1. PR
[#14279](https://github.com/fastapi/fastapi/pull/14279)by[@dependabot[bot]](https://github.com/apps/dependabot).

## 0.120.4 (2025-10-31)[¶](#01204-2025-10-31)

### Fixes[¶](#fixes_24)

- 🐛 Fix security schemes in OpenAPI when added at the top level app. PR
[#14266](https://github.com/fastapi/fastapi/pull/14266)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.120.3 (2025-10-30)[¶](#01203-2025-10-30)

### Refactors[¶](#refactors_12)

- ♻️ Reduce internal cyclic recursion in dependencies, from 2 functions calling each other to 1 calling itself. PR
[#14256](https://github.com/fastapi/fastapi/pull/14256)by[@tiangolo](https://github.com/tiangolo). - ♻️ Refactor internals of dependencies, simplify code and remove
`get_param_sub_dependant`

. PR[#14255](https://github.com/fastapi/fastapi/pull/14255)by[@tiangolo](https://github.com/tiangolo). - ♻️ Refactor internals of dependencies, simplify using dataclasses. PR
[#14254](https://github.com/fastapi/fastapi/pull/14254)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_21)

- 📝 Update note for untranslated pages. PR
[#14257](https://github.com/fastapi/fastapi/pull/14257)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.120.2 (2025-10-29)[¶](#01202-2025-10-29)

### Fixes[¶](#fixes_25)

### Internal[¶](#internal_31)

- 🔧 Add sponsor: SerpApi. PR
[#14248](https://github.com/fastapi/fastapi/pull/14248)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump actions/download-artifact from 5 to 6. PR
[#14236](https://github.com/fastapi/fastapi/pull/14236)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#14237](https://github.com/fastapi/fastapi/pull/14237)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Bump actions/upload-artifact from 4 to 5. PR
[#14235](https://github.com/fastapi/fastapi/pull/14235)by[@dependabot[bot]](https://github.com/apps/dependabot).

## 0.120.1 (2025-10-27)[¶](#01201-2025-10-27)

### Upgrades[¶](#upgrades_5)

- ⬆️ Bump Starlette to <
`0.50.0`

. PR[#14234](https://github.com/fastapi/fastapi/pull/14234)by[@YuriiMotov](https://github.com/YuriiMotov).

### Internal[¶](#internal_32)

- 🔧 Add
`license`

and`license-files`

to`pyproject.toml`

, remove`License`

from`classifiers`

. PR[#14230](https://github.com/fastapi/fastapi/pull/14230)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.120.0 (2025-10-23)[¶](#01200-2025-10-23)

There are no major nor breaking changes in this release. ☕️

The internal reference documentation now uses `annotated_doc.Doc`

instead of `typing_extensions.Doc`

, this adds a new (very small) dependency on [ annotated-doc](https://github.com/fastapi/annotated-doc), a package made just to provide that

`Doc`

documentation utility class.I would expect `typing_extensions.Doc`

to be deprecated and then removed at some point from `typing_extensions`

, for that reason there's the new `annotated-doc`

micro-package. If you are curious about this, you can read more in the repo for [ annotated-doc](https://github.com/fastapi/annotated-doc).

This new version `0.120.0`

only contains that transition to the new home package for that utility class `Doc`

.

### Translations[¶](#translations_14)

- 🌐 Sync German docs. PR
[#14188](https://github.com/fastapi/fastapi/pull/14188)by[@nilslindemann](https://github.com/nilslindemann).

### Internal[¶](#internal_33)

- ➕ Migrate internal reference documentation from
`typing_extensions.Doc`

to`annotated_doc.Doc`

. PR[#14222](https://github.com/fastapi/fastapi/pull/14222)by[@tiangolo](https://github.com/tiangolo). - 🛠️ Update German LLM prompt and test file. PR
[#14189](https://github.com/fastapi/fastapi/pull/14189)by[@nilslindemann](https://github.com/nilslindemann). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#14181](https://github.com/fastapi/fastapi/pull/14181)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci).

## 0.119.1 (2025-10-20)[¶](#01191-2025-10-20)

### Fixes[¶](#fixes_26)

- 🐛 Fix internal Pydantic v1 compatibility (warnings) for Python 3.14 and Pydantic 2.12.1. PR
[#14186](https://github.com/fastapi/fastapi/pull/14186)by[@svlandeg](https://github.com/svlandeg).

### Docs[¶](#docs_22)

### Internal[¶](#internal_34)

- 🔧 Add sponsor Requestly. PR
[#14205](https://github.com/fastapi/fastapi/pull/14205)by[@tiangolo](https://github.com/tiangolo). - 🔧 Configure reminder for
`waiting`

label in`issue-manager`

. PR[#14156](https://github.com/fastapi/fastapi/pull/14156)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.119.0 (2025-10-11)[¶](#01190-2025-10-11)

FastAPI now (temporarily) supports both Pydantic v2 models and `pydantic.v1`

models at the same time in the same app, to make it easier for any FastAPI apps still using Pydantic v1 to gradually but quickly **migrate to Pydantic v2**.

```
from fastapi import FastAPI
from pydantic import BaseModel as BaseModelV2
from pydantic.v1 import BaseModel
class Item(BaseModel):
name: str
description: str | None = None
class ItemV2(BaseModelV2):
title: str
summary: str | None = None
app = FastAPI()
@app.post("/items/", response_model=ItemV2)
def create_item(item: Item):
return {"title": item.name, "summary": item.description}
```


Adding this feature was a big effort with the main objective of making it easier for the few applications still stuck in Pydantic v1 to migrate to Pydantic v2.

And with this, support for **Pydantic v1 is now deprecated** and will be **removed** from FastAPI in a future version soon.

**Note**: have in mind that the Pydantic team already stopped supporting Pydantic v1 for recent versions of Python, starting with Python 3.14.

You can read in the docs more about how to [Migrate from Pydantic v1 to Pydantic v2](https://fastapi.tiangolo.com/how-to/migrate-from-pydantic-v1-to-pydantic-v2/).

### Features[¶](#features_10)

- ✨ Add support for
`from pydantic.v1 import BaseModel`

, mixed Pydantic v1 and v2 models in the same app. PR[#14168](https://github.com/fastapi/fastapi/pull/14168)by[@tiangolo](https://github.com/tiangolo).

## 0.118.3 (2025-10-10)[¶](#01183-2025-10-10)

### Upgrades[¶](#upgrades_6)

## 0.118.2 (2025-10-08)[¶](#01182-2025-10-08)

### Fixes[¶](#fixes_27)

- 🐛 Fix tagged discriminated union not recognized as body field. PR
[#12942](https://github.com/fastapi/fastapi/pull/12942)by[@frankie567](https://github.com/frankie567).

### Internal[¶](#internal_35)

- ⬆ Bump astral-sh/setup-uv from 6 to 7. PR
[#14167](https://github.com/fastapi/fastapi/pull/14167)by[@dependabot[bot]](https://github.com/apps/dependabot).

## 0.118.1 (2025-10-08)[¶](#01181-2025-10-08)

### Upgrades[¶](#upgrades_7)

### Docs[¶](#docs_23)

### Translations[¶](#translations_15)

- 🔨 Add Russian translations LLM prompt. PR
[#13936](https://github.com/fastapi/fastapi/pull/13936)by[@tiangolo](https://github.com/tiangolo). - 🌐 Sync German docs. PR
[#14149](https://github.com/fastapi/fastapi/pull/14149)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add Russian translations for missing pages (LLM-generated). PR
[#14135](https://github.com/fastapi/fastapi/pull/14135)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Update Russian translations for existing pages (LLM-generated). PR
[#14123](https://github.com/fastapi/fastapi/pull/14123)by[@YuriiMotov](https://github.com/YuriiMotov). - 🌐 Remove configuration files for inactive translations. PR
[#14130](https://github.com/fastapi/fastapi/pull/14130)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_36)

- 🔨 Move local coverage logic to its own script. PR
[#14166](https://github.com/fastapi/fastapi/pull/14166)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#14161](https://github.com/fastapi/fastapi/pull/14161)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Bump griffe-typingdoc from 0.2.8 to 0.2.9. PR
[#14144](https://github.com/fastapi/fastapi/pull/14144)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump mkdocs-macros-plugin from 1.3.9 to 1.4.0. PR
[#14145](https://github.com/fastapi/fastapi/pull/14145)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump markdown-include-variants from 0.0.4 to 0.0.5. PR
[#14146](https://github.com/fastapi/fastapi/pull/14146)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#14126](https://github.com/fastapi/fastapi/pull/14126)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 👥 Update FastAPI GitHub topic repositories. PR
[#14150](https://github.com/fastapi/fastapi/pull/14150)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Sponsors. PR
[#14139](https://github.com/fastapi/fastapi/pull/14139)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Contributors and Translators. PR
[#14138](https://github.com/fastapi/fastapi/pull/14138)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump ruff from 0.12.7 to 0.13.2. PR
[#14147](https://github.com/fastapi/fastapi/pull/14147)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump sqlmodel from 0.0.24 to 0.0.25. PR
[#14143](https://github.com/fastapi/fastapi/pull/14143)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump tiangolo/issue-manager from 0.5.1 to 0.6.0. PR
[#14148](https://github.com/fastapi/fastapi/pull/14148)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👷 Update docs previews comment, single comment, add failure status. PR
[#14129](https://github.com/fastapi/fastapi/pull/14129)by[@tiangolo](https://github.com/tiangolo). - 🔨 Modify
`mkdocs_hooks.py`

to add`title`

to page's metadata (remove permalinks in social cards). PR[#14125](https://github.com/fastapi/fastapi/pull/14125)by[@YuriiMotov](https://github.com/YuriiMotov).

## 0.118.0 (2025-09-29)[¶](#01180-2025-09-29)

### Fixes[¶](#fixes_28)

- 🐛 Fix support for
`StreamingResponse`

s with dependencies with`yield`

or`UploadFile`

s, close after the response is done. PR[#14099](https://github.com/fastapi/fastapi/pull/14099)by[@tiangolo](https://github.com/tiangolo).

Before FastAPI 0.118.0, if you used a dependency with `yield`

, it would run the exit code after the *path operation function* returned but right before sending the response.

This change also meant that if you returned a `StreamingResponse`

, the exit code of the dependency with `yield`

would have been already run.

For example, if you had a database session in a dependency with `yield`

, the `StreamingResponse`

would not be able to use that session while streaming data because the session would have already been closed in the exit code after `yield`

.

This behavior was reverted in 0.118.0, to make the exit code after `yield`

be executed after the response is sent.

You can read more about it in the docs for [Advanced Dependencies - Dependencies with yield, HTTPException, except and Background Tasks](https://fastapi.tiangolo.com/advanced/advanced-dependencies#dependencies-with-yield-httpexception-except-and-background-tasks). Including what you could do if you wanted to close a database session earlier, before returning the response to the client.



### Docs[¶](#docs_24)

- 📝 Update
`tutorial/security/oauth2-jwt/`

to use`pwdlib`

with Argon2 instead of`passlib`

. PR[#13917](https://github.com/fastapi/fastapi/pull/13917)by[@Neizvestnyj](https://github.com/Neizvestnyj). - ✏️ Fix typos in OAuth2 password request forms. PR
[#14112](https://github.com/fastapi/fastapi/pull/14112)by[@alv2017](https://github.com/alv2017). - 📝 Update contributing guidelines for installing requirements. PR
[#14095](https://github.com/fastapi/fastapi/pull/14095)by[@alejsdev](https://github.com/alejsdev).

### Translations[¶](#translations_16)

- 🌐 Sync German docs. PR
[#14098](https://github.com/fastapi/fastapi/pull/14098)by[@nilslindemann](https://github.com/nilslindemann).

### Internal[¶](#internal_37)

- ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#14103](https://github.com/fastapi/fastapi/pull/14103)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ♻️ Refactor sponsor image handling. PR
[#14102](https://github.com/fastapi/fastapi/pull/14102)by[@alejsdev](https://github.com/alejsdev). - 🐛 Fix sponsor display issue by hiding element on image error. PR
[#14097](https://github.com/fastapi/fastapi/pull/14097)by[@alejsdev](https://github.com/alejsdev). - 🐛 Hide sponsor badge when sponsor image is not displayed. PR
[#14096](https://github.com/fastapi/fastapi/pull/14096)by[@alejsdev](https://github.com/alejsdev).

## 0.117.1 (2025-09-20)[¶](#01171-2025-09-20)

### Fixes[¶](#fixes_29)

- 🐛 Fix validation error when
`File`

is declared after`Form`

parameter. PR[#11194](https://github.com/fastapi/fastapi/pull/11194)by[@thomasleveil](https://github.com/thomasleveil).

## 0.117.0 (2025-09-20)[¶](#01170-2025-09-20)

### Features[¶](#features_11)

- ✨ Allow
`None`

as return type for bodiless responses. PR[#9425](https://github.com/fastapi/fastapi/pull/9425)by[@hofrob](https://github.com/hofrob). - ✨ Allow array values for OpenAPI schema
`type`

field. PR[#13639](https://github.com/fastapi/fastapi/pull/13639)by[@sammasak](https://github.com/sammasak). - ✨ Add OpenAPI
`external_docs`

parameter to`FastAPI`

. PR[#13713](https://github.com/fastapi/fastapi/pull/13713)by[@cmtoro](https://github.com/cmtoro).

### Fixes[¶](#fixes_30)

- ⚡️ Fix
`default_factory`

for response model field with Pydantic V1. PR[#9704](https://github.com/fastapi/fastapi/pull/9704)by[@vvanglro](https://github.com/vvanglro). - 🐛 Fix inconsistent processing of model docstring formfeed char with Pydantic V1. PR
[#6039](https://github.com/fastapi/fastapi/pull/6039)by[@MaxwellPayne](https://github.com/MaxwellPayne). - 🐛 Fix
`jsonable_encoder`

alters`json_encoders`

of Pydantic v1 objects. PR[#4972](https://github.com/fastapi/fastapi/pull/4972)by[@aboubacs](https://github.com/aboubacs). - 🐛 Reenable
`allow_arbitrary_types`

when only 1 argument is used on the API endpoint. PR[#13694](https://github.com/fastapi/fastapi/pull/13694)by[@rmawatson](https://github.com/rmawatson). - 🐛 Fix
`inspect.getcoroutinefunction()`

can break testing with`unittest.mock.patch()`

. PR[#14022](https://github.com/fastapi/fastapi/pull/14022)by[@secrett2633](https://github.com/secrett2633).

### Refactors[¶](#refactors_13)

- ♻️ Create
`dependency-cache`

dict in`solve_dependencies`

only if`None`

(don't re-create if empty). PR[#13689](https://github.com/fastapi/fastapi/pull/13689)by[@bokshitsky](https://github.com/bokshitsky). - ✅ Enable test case for duplicated headers in
`test_tutorial/test_header_params/test_tutorial003.py`

. PR[#13864](https://github.com/fastapi/fastapi/pull/13864)by[@Amogha-ark](https://github.com/Amogha-ark). - 📌 Pin
`httpx`

to`>=0.23.0,<1.0.0`

. PR[#14086](https://github.com/fastapi/fastapi/pull/14086)by[@YuriiMotov](https://github.com/YuriiMotov).

### Docs[¶](#docs_25)

- 📝 Add note about Cookies and JavaScript on
`tutorial/cookie-params.md`

. PR[#13510](https://github.com/fastapi/fastapi/pull/13510)by[@Kludex](https://github.com/Kludex). - 📝 Remove outdated formatting from
`path-params-numeric-validations.md`

for languages`en`

,`es`

and`uk`

.. PR[#14059](https://github.com/fastapi/fastapi/pull/14059)by[@svlandeg](https://github.com/svlandeg). - 📝 Fix and Improve English Documentation. PR
[#14048](https://github.com/fastapi/fastapi/pull/14048)by[@nilslindemann](https://github.com/nilslindemann).

### Translations[¶](#translations_17)

- 📝 Update prompts and German translation. PR
[#14015](https://github.com/fastapi/fastapi/pull/14015)by[@nilslindemann](https://github.com/nilslindemann).

### Internal[¶](#internal_38)

- ✅ Simplify tests for response_model. PR
[#14062](https://github.com/fastapi/fastapi/pull/14062)by[@dynamicy](https://github.com/dynamicy). - 🚨 Install pydantic.mypy plugin. PR
[#14081](https://github.com/fastapi/fastapi/pull/14081)by[@svlandeg](https://github.com/svlandeg). - ✅ Add LLM test file. PR
[#14049](https://github.com/fastapi/fastapi/pull/14049)by[@nilslindemann](https://github.com/nilslindemann). - 🔨 Update translations script. PR
[#13968](https://github.com/fastapi/fastapi/pull/13968)by[@YuriiMotov](https://github.com/YuriiMotov). - 🛠️ Update
`docs.py generate-readme`

command to remove permalinks from headers. PR[#14055](https://github.com/fastapi/fastapi/pull/14055)by[@YuriiMotov](https://github.com/YuriiMotov). - ⬆️ Update mypy to 1.14.1. PR
[#12970](https://github.com/fastapi/fastapi/pull/12970)by[@tamird](https://github.com/tamird).

## 0.116.2 (2025-09-16)[¶](#01162-2025-09-16)

### Upgrades[¶](#upgrades_8)

- ⬆️ Upgrade Starlette supported version range to >=0.40.0,<0.49.0. PR
[#14077](https://github.com/fastapi/fastapi/pull/14077)by[@musicinmybrain](https://github.com/musicinmybrain).

### Docs[¶](#docs_26)

- 📝 Add documentation for Behind a Proxy - Proxy Forwarded Headers, using
`--forwarded-allow-ips="*"`

. PR[#14028](https://github.com/fastapi/fastapi/pull/14028)by[@tiangolo](https://github.com/tiangolo). - 📝 Add deprecation info block about
`dict()`

in`docs/tutorial/body.md`

. PR[#13906](https://github.com/fastapi/fastapi/pull/13906)by[@jomkv](https://github.com/jomkv). - 📝 Fix Twitter to be X (Twitter) everywhere in documentation. PR
[#13809](https://github.com/fastapi/fastapi/pull/13809)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🐛 Prevent scroll-to-top on restart/fast buttons in
`termynal.js`

. PR[#13714](https://github.com/fastapi/fastapi/pull/13714)by[@Ashish-Pandey62](https://github.com/Ashish-Pandey62). - 📝 Update testing events documentation. PR
[#13259](https://github.com/fastapi/fastapi/pull/13259)by[@z0z0r4](https://github.com/z0z0r4). - 📝 Remove obsolete
`url`

field in error responses in docs. PR[#13655](https://github.com/fastapi/fastapi/pull/13655)by[@Taoup](https://github.com/Taoup). - 📝 Bring the
`scope`

claim in line with the standard in`docs_src/security/tutorial005.py`

. PR[#11189](https://github.com/fastapi/fastapi/pull/11189)by[@DurandA](https://github.com/DurandA). - 📝 Update TrustedHostMiddleware Documentation. PR
[#11441](https://github.com/fastapi/fastapi/pull/11441)by[@soulee-dev](https://github.com/soulee-dev). - 📝 Remove links to site callbackhell.com that doesn't exist anymore. PR
[#14006](https://github.com/fastapi/fastapi/pull/14006)by[@dennybiasiolli](https://github.com/dennybiasiolli). - 📝 Add permalinks to headers in English docs. PR
[#13993](https://github.com/fastapi/fastapi/pull/13993)by[@YuriiMotov](https://github.com/YuriiMotov). - 📝 Update
`docs/en/docs/advanced/generate-clients.md`

. PR[#13793](https://github.com/fastapi/fastapi/pull/13793)by[@mrlubos](https://github.com/mrlubos). - 📝 Add discussion template for new language translation requests. PR
[#13535](https://github.com/fastapi/fastapi/pull/13535)by[@alejsdev](https://github.com/alejsdev).

### Translations[¶](#translations_18)

- 📝 Fix code include for Pydantic models example in
`docs/zh/docs/python-types.md`

. PR[#13997](https://github.com/fastapi/fastapi/pull/13997)by[@anfreshman](https://github.com/anfreshman). - 🌐 Update Portuguese Translation for
`docs/pt/docs/async.md`

. PR[#13863](https://github.com/fastapi/fastapi/pull/13863)by[@EdmilsonRodrigues](https://github.com/EdmilsonRodrigues). - 📝 Fix highlight line in
`docs/ja/docs/tutorial/body.md`

. PR[#13927](https://github.com/fastapi/fastapi/pull/13927)by[@KoyoMiyazaki](https://github.com/KoyoMiyazaki). - 🌐 Add Persian translation for
`docs/fa/docs/environment-variables.md`

. PR[#13923](https://github.com/fastapi/fastapi/pull/13923)by[@Mohammad222PR](https://github.com/Mohammad222PR). - 🌐 Add Persian translation for
`docs/fa/docs/python-types.md`

. PR[#13524](https://github.com/fastapi/fastapi/pull/13524)by[@Mohammad222PR](https://github.com/Mohammad222PR). - 🌐 Update Portuguese Translation for
`docs/pt/docs/project-generation.md`

. PR[#13875](https://github.com/fastapi/fastapi/pull/13875)by[@EdmilsonRodrigues](https://github.com/EdmilsonRodrigues). - 🌐 Add Persian translation for
`docs/fa/docs/async.md`

. PR[#13541](https://github.com/fastapi/fastapi/pull/13541)by[@Mohammad222PR](https://github.com/Mohammad222PR). - 🌐 Add Bangali translation for
`docs/bn/about/index.md`

. PR[#13882](https://github.com/fastapi/fastapi/pull/13882)by[@sajjadrahman56](https://github.com/sajjadrahman56).

### Internal[¶](#internal_39)

- ⬆ Bump pyjwt from 2.8.0 to 2.9.0. PR
[#13960](https://github.com/fastapi/fastapi/pull/13960)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#14080](https://github.com/fastapi/fastapi/pull/14080)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Bump actions/setup-python from 5 to 6. PR
[#14042](https://github.com/fastapi/fastapi/pull/14042)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump actions/labeler from 5 to 6. PR
[#14046](https://github.com/fastapi/fastapi/pull/14046)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#14056](https://github.com/fastapi/fastapi/pull/14056)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#14035](https://github.com/fastapi/fastapi/pull/14035)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Bump pypa/gh-action-pypi-publish from 1.12.4 to 1.13.0. PR
[#14041](https://github.com/fastapi/fastapi/pull/14041)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👥 Update FastAPI People - Contributors and Translators. PR
[#14029](https://github.com/fastapi/fastapi/pull/14029)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Sponsors. PR
[#14030](https://github.com/fastapi/fastapi/pull/14030)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI GitHub topic repositories. PR
[#14031](https://github.com/fastapi/fastapi/pull/14031)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Experts. PR
[#14034](https://github.com/fastapi/fastapi/pull/14034)by[@tiangolo](https://github.com/tiangolo). - 👷 Detect and label merge conflicts on PRs automatically. PR
[#14045](https://github.com/fastapi/fastapi/pull/14045)by[@svlandeg](https://github.com/svlandeg). - 🔧 Update sponsors: remove Platform.sh. PR
[#14027](https://github.com/fastapi/fastapi/pull/14027)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors: remove Mobb. PR
[#14026](https://github.com/fastapi/fastapi/pull/14026)by[@tiangolo](https://github.com/tiangolo). - 🛠️ Update
`mkdocs_hooks`

to handle headers with permalinks when building docs. PR[#14025](https://github.com/fastapi/fastapi/pull/14025)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#14016](https://github.com/fastapi/fastapi/pull/14016)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Bump
`mkdocs-macros-plugin`

from 1.3.7 to 1.3.9. PR[#14003](https://github.com/fastapi/fastapi/pull/14003)by[@YuriiMotov](https://github.com/YuriiMotov). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13999](https://github.com/fastapi/fastapi/pull/13999)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13983](https://github.com/fastapi/fastapi/pull/13983)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Bump actions/checkout from 4 to 5. PR
[#13986](https://github.com/fastapi/fastapi/pull/13986)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Update Speakeasy sponsor graphic. PR
[#13971](https://github.com/fastapi/fastapi/pull/13971)by[@chailandau](https://github.com/chailandau). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13969](https://github.com/fastapi/fastapi/pull/13969)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Bump actions/download-artifact from 4 to 5. PR
[#13975](https://github.com/fastapi/fastapi/pull/13975)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👥 Update FastAPI People - Experts. PR
[#13963](https://github.com/fastapi/fastapi/pull/13963)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump ruff from 0.11.2 to 0.12.7. PR
[#13957](https://github.com/fastapi/fastapi/pull/13957)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump cairosvg from 2.7.1 to 2.8.2. PR
[#13959](https://github.com/fastapi/fastapi/pull/13959)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pydantic-ai from 0.0.30 to 0.4.10. PR
[#13958](https://github.com/fastapi/fastapi/pull/13958)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👥 Update FastAPI GitHub topic repositories. PR
[#13962](https://github.com/fastapi/fastapi/pull/13962)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump mkdocs-material from 9.6.15 to 9.6.16. PR
[#13961](https://github.com/fastapi/fastapi/pull/13961)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump tiangolo/latest-changes from 0.3.2 to 0.4.0. PR
[#13952](https://github.com/fastapi/fastapi/pull/13952)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👥 Update FastAPI People - Sponsors. PR
[#13956](https://github.com/fastapi/fastapi/pull/13956)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Contributors and Translators. PR
[#13955](https://github.com/fastapi/fastapi/pull/13955)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors: Databento link and sponsors_badge data. PR
[#13954](https://github.com/fastapi/fastapi/pull/13954)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors: Add Railway. PR
[#13953](https://github.com/fastapi/fastapi/pull/13953)by[@tiangolo](https://github.com/tiangolo). - ⚒️ Update translate script, update prompt to minimize generated diff. PR
[#13947](https://github.com/fastapi/fastapi/pull/13947)by[@YuriiMotov](https://github.com/YuriiMotov). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13943](https://github.com/fastapi/fastapi/pull/13943)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⚒️ Tweak translate script and CI. PR
[#13939](https://github.com/fastapi/fastapi/pull/13939)by[@tiangolo](https://github.com/tiangolo). - 👷 Add CI to translate with LLMs. PR
[#13937](https://github.com/fastapi/fastapi/pull/13937)by[@tiangolo](https://github.com/tiangolo). - ⚒️ Update translate script, show and update outdated translations. PR
[#13933](https://github.com/fastapi/fastapi/pull/13933)by[@tiangolo](https://github.com/tiangolo). - 🔨 Refactor translate script with extra feedback (prints). PR
[#13932](https://github.com/fastapi/fastapi/pull/13932)by[@tiangolo](https://github.com/tiangolo). - 🔨 Update translations script to remove old (removed) files. PR
[#13928](https://github.com/fastapi/fastapi/pull/13928)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13894](https://github.com/fastapi/fastapi/pull/13894)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Update httpx requirement to >=0.23.0,<0.29.0. PR
[#13114](https://github.com/fastapi/fastapi/pull/13114)by[@yan12125](https://github.com/yan12125). - 🔧 Update sponsors: Add Mobb. PR
[#13916](https://github.com/fastapi/fastapi/pull/13916)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Experts. PR
[#13889](https://github.com/fastapi/fastapi/pull/13889)by[@tiangolo](https://github.com/tiangolo). - 🔨 Update FastAPI People sleep interval, use external settings. PR
[#13888](https://github.com/fastapi/fastapi/pull/13888)by[@tiangolo](https://github.com/tiangolo).

## 0.116.1 (2025-07-11)[¶](#01161-2025-07-11)

### Upgrades[¶](#upgrades_9)

### Docs[¶](#docs_27)

- 📝 Add notification about impending changes in Translations to
`docs/en/docs/contributing.md`

. PR[#13886](https://github.com/fastapi/fastapi/pull/13886)by[@YuriiMotov](https://github.com/YuriiMotov).

### Internal[¶](#internal_40)

- ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13871](https://github.com/fastapi/fastapi/pull/13871)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci).

## 0.116.0 (2025-07-07)[¶](#01160-2025-07-07)

### Features[¶](#features_12)

Installing `fastapi[standard]`

now includes `fastapi-cloud-cli`

.

This will allow you to deploy to [FastAPI Cloud](https://fastapicloud.com) with the `fastapi deploy`

command.

If you want to install `fastapi`

with the standard dependencies but without `fastapi-cloud-cli`

, you can install instead `fastapi[standard-no-fastapi-cloud-cli]`

.

### Translations[¶](#translations_19)

- 🌐 Add Russian translation for
`docs/ru/docs/advanced/response-directly.md`

. PR[#13801](https://github.com/fastapi/fastapi/pull/13801)by[@NavesSapnis](https://github.com/NavesSapnis). - 🌐 Add Russian translation for
`docs/ru/docs/advanced/additional-status-codes.md`

. PR[#13799](https://github.com/fastapi/fastapi/pull/13799)by[@NavesSapnis](https://github.com/NavesSapnis). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/body-updates.md`

. PR[#13804](https://github.com/fastapi/fastapi/pull/13804)by[@valentinDruzhinin](https://github.com/valentinDruzhinin).

### Internal[¶](#internal_41)

- ⬆ Bump pillow from 11.1.0 to 11.3.0. PR
[#13852](https://github.com/fastapi/fastapi/pull/13852)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👥 Update FastAPI People - Sponsors. PR
[#13846](https://github.com/fastapi/fastapi/pull/13846)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI GitHub topic repositories. PR
[#13848](https://github.com/fastapi/fastapi/pull/13848)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump mkdocs-material from 9.6.1 to 9.6.15. PR
[#13849](https://github.com/fastapi/fastapi/pull/13849)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13843](https://github.com/fastapi/fastapi/pull/13843)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 👥 Update FastAPI People - Contributors and Translators. PR
[#13845](https://github.com/fastapi/fastapi/pull/13845)by[@tiangolo](https://github.com/tiangolo).

## 0.115.14 (2025-06-26)[¶](#011514-2025-06-26)

### Fixes[¶](#fixes_31)

- 🐛 Fix support for unions when using
`Form`

. PR[#13827](https://github.com/fastapi/fastapi/pull/13827)by[@patrick91](https://github.com/patrick91).

### Docs[¶](#docs_28)

- ✏️ Fix grammar mistake in
`docs/en/docs/advanced/response-directly.md`

. PR[#13800](https://github.com/fastapi/fastapi/pull/13800)by[@NavesSapnis](https://github.com/NavesSapnis). - 📝 Update Speakeasy URL to Speakeasy Sandbox. PR
[#13697](https://github.com/fastapi/fastapi/pull/13697)by[@ndimares](https://github.com/ndimares).

### Translations[¶](#translations_20)

- 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/response-model.md`

. PR[#13792](https://github.com/fastapi/fastapi/pull/13792)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/security/index.md`

. PR[#13805](https://github.com/fastapi/fastapi/pull/13805)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - ✏️ Fix typo in
`docs/ja/docs/tutorial/encoder.md`

. PR[#13815](https://github.com/fastapi/fastapi/pull/13815)by[@ruzia](https://github.com/ruzia). - ✏️ Fix typo in
`docs/ja/docs/tutorial/handling-errors.md`

. PR[#13814](https://github.com/fastapi/fastapi/pull/13814)by[@ruzia](https://github.com/ruzia). - ✏️ Fix typo in
`docs/ja/docs/tutorial/body-fields.md`

. PR[#13802](https://github.com/fastapi/fastapi/pull/13802)by[@ruzia](https://github.com/ruzia). - 🌐 Add Russian translation for
`docs/ru/docs/advanced/index.md`

. PR[#13797](https://github.com/fastapi/fastapi/pull/13797)by[@NavesSapnis](https://github.com/NavesSapnis).

### Internal[¶](#internal_42)

- ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13823](https://github.com/fastapi/fastapi/pull/13823)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci).

## 0.115.13 (2025-06-17)[¶](#011513-2025-06-17)

### Fixes[¶](#fixes_32)

- 🐛 Fix truncating the model's description with form feed (
`\f`

) character for Pydantic V2. PR[#13698](https://github.com/fastapi/fastapi/pull/13698)by[@YuriiMotov](https://github.com/YuriiMotov).

### Refactors[¶](#refactors_14)

- ✨ Add
`refreshUrl`

parameter in`OAuth2PasswordBearer`

. PR[#11460](https://github.com/fastapi/fastapi/pull/11460)by[@snosratiershad](https://github.com/snosratiershad). - 🚸 Set format to password for fields
`password`

and`client_secret`

in`OAuth2PasswordRequestForm`

, make docs show password fields for passwords. PR[#11032](https://github.com/fastapi/fastapi/pull/11032)by[@Thodoris1999](https://github.com/Thodoris1999). - ✅ Simplify tests for
`settings`

. PR[#13505](https://github.com/fastapi/fastapi/pull/13505)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - ✅ Simplify tests for
`validate_response_recursive`

. PR[#13507](https://github.com/fastapi/fastapi/pull/13507)by[@valentinDruzhinin](https://github.com/valentinDruzhinin).

### Upgrades[¶](#upgrades_10)

- ⬆️ Update ReDoc to version 2.x. PR
[#9700](https://github.com/fastapi/fastapi/pull/9700)by[@joakimnordling](https://github.com/joakimnordling).

### Docs[¶](#docs_29)

- 📝 Add annotations to HTTP middleware example. PR
[#11530](https://github.com/fastapi/fastapi/pull/11530)by[@Kilo59](https://github.com/Kilo59). - 📝 Clarify in CORS docs that wildcards and credentials are mutually exclusive. PR
[#9829](https://github.com/fastapi/fastapi/pull/9829)by[@dfioravanti](https://github.com/dfioravanti). - ✏️ Fix typo in docstring. PR
[#13532](https://github.com/fastapi/fastapi/pull/13532)by[@comp64](https://github.com/comp64). - 📝 Clarify guidance on using
`async def`

without`await`

. PR[#13642](https://github.com/fastapi/fastapi/pull/13642)by[@swastikpradhan1999](https://github.com/swastikpradhan1999). - 📝 Update exclude-parameters-from-openapi documentation links. PR
[#13600](https://github.com/fastapi/fastapi/pull/13600)by[@timonrieger](https://github.com/timonrieger). - 📝 Clarify the middleware execution order in docs. PR
[#13699](https://github.com/fastapi/fastapi/pull/13699)by[@YuriiMotov](https://github.com/YuriiMotov). - 🍱 Update Drawio diagrams SVGs, single file per diagram, sans-serif font. PR
[#13706](https://github.com/fastapi/fastapi/pull/13706)by[@tiangolo](https://github.com/tiangolo). - 📝 Update docs for "Help FastAPI", simplify and reduce "sponsor" section. PR
[#13670](https://github.com/fastapi/fastapi/pull/13670)by[@tiangolo](https://github.com/tiangolo). - 📝 Remove unnecessary bullet from docs. PR
[#13641](https://github.com/fastapi/fastapi/pull/13641)by[@Adamowoc](https://github.com/Adamowoc). - ✏️ Fix syntax error in
`docs/en/docs/tutorial/handling-errors.md`

. PR[#13623](https://github.com/fastapi/fastapi/pull/13623)by[@gsheni](https://github.com/gsheni). - 📝 Fix typo in documentation. PR
[#13599](https://github.com/fastapi/fastapi/pull/13599)by[@Taoup](https://github.com/Taoup). - 📝 Fix liblab client generation doc link. PR
[#13571](https://github.com/fastapi/fastapi/pull/13571)by[@EFord36](https://github.com/EFord36). - ✏️ Fix talk information typo. PR
[#13544](https://github.com/fastapi/fastapi/pull/13544)by[@blueswen](https://github.com/blueswen). - 📝 Add External Link: Taiwanese talk on FastAPI with observability . PR
[#13527](https://github.com/fastapi/fastapi/pull/13527)by[@blueswen](https://github.com/blueswen).

### Translations[¶](#translations_21)

- 🌐 Add Russian Translation for
`docs/ru/docs/advanced/response-change-status-code.md`

. PR[#13791](https://github.com/fastapi/fastapi/pull/13791)by[@NavesSapnis](https://github.com/NavesSapnis). - 🌐 Add Persian translation for
`docs/fa/docs/learn/index.md`

. PR[#13518](https://github.com/fastapi/fastapi/pull/13518)by[@Mohammad222PR](https://github.com/Mohammad222PR). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/sub-applications.md`

. PR[#4543](https://github.com/fastapi/fastapi/pull/4543)by[@NinaHwang](https://github.com/NinaHwang). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/schema-extra-example.md`

. PR[#13769](https://github.com/fastapi/fastapi/pull/13769)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - ✏️ Remove redundant words in docs/zh/docs/python-types.md. PR
[#13774](https://github.com/fastapi/fastapi/pull/13774)by[@CharleeWa](https://github.com/CharleeWa). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/query-param-models.md`

. PR[#13748](https://github.com/fastapi/fastapi/pull/13748)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Bengali translation for
`docs/bn/docs/environment-variables.md`

. PR[#13629](https://github.com/fastapi/fastapi/pull/13629)by[@SakibSibly](https://github.com/SakibSibly). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/query-params-str-validations.md`

page. PR[#13546](https://github.com/fastapi/fastapi/pull/13546)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/cookie-param-models.md`

. PR[#13616](https://github.com/fastapi/fastapi/pull/13616)by[@EgorOnishchuk](https://github.com/EgorOnishchuk). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/extra-models.md`

. PR[#13063](https://github.com/fastapi/fastapi/pull/13063)by[@timothy-jeong](https://github.com/timothy-jeong). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/path-params-numeric-validations.md`

page. PR[#13548](https://github.com/fastapi/fastapi/pull/13548)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/middleware.md`

page. PR[#13520](https://github.com/fastapi/fastapi/pull/13520)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/background-tasks.md`

page. PR[#13502](https://github.com/fastapi/fastapi/pull/13502)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/cors.md`

page. PR[#13519](https://github.com/fastapi/fastapi/pull/13519)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Update Korean translation for
`docs/ko/docs/advanced/events.md`

. PR[#13487](https://github.com/fastapi/fastapi/pull/13487)by[@bom1215](https://github.com/bom1215). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/handling-errors.md`

page. PR[#13420](https://github.com/fastapi/fastapi/pull/13420)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/request-form-models.md`

. PR[#13552](https://github.com/fastapi/fastapi/pull/13552)by[@EgorOnishchuk](https://github.com/EgorOnishchuk). - 📝 Fix internal anchor link in Spanish deployment docs. PR
[#13737](https://github.com/fastapi/fastapi/pull/13737)by[@fabianfalon](https://github.com/fabianfalon). - 🌐 Update Korean translation for
`docs/ko/docs/virtual-environments.md`

. PR[#13630](https://github.com/fastapi/fastapi/pull/13630)by[@sungchan1](https://github.com/sungchan1). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/header-param-models.md`

. PR[#13526](https://github.com/fastapi/fastapi/pull/13526)by[@minaton-ru](https://github.com/minaton-ru). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/index.md`

. PR[#13374](https://github.com/fastapi/fastapi/pull/13374)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Update Chinese translation for
`docs/zh/docs/deployment/manually.md`

. PR[#13324](https://github.com/fastapi/fastapi/pull/13324)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Update Chinese translation for
`docs/zh/docs/deployment/server-workers.md`

. PR[#13292](https://github.com/fastapi/fastapi/pull/13292)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/first-steps.md`

. PR[#13348](https://github.com/fastapi/fastapi/pull/13348)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng).

### Internal[¶](#internal_43)

- 🔨 Resolve Pydantic deprecation warnings in internal script. PR
[#13696](https://github.com/fastapi/fastapi/pull/13696)by[@emmanuel-ferdman](https://github.com/emmanuel-ferdman). - 🔧 Update sponsors: remove Porter. PR
[#13783](https://github.com/fastapi/fastapi/pull/13783)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13781](https://github.com/fastapi/fastapi/pull/13781)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13757](https://github.com/fastapi/fastapi/pull/13757)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Bump griffe-typingdoc from 0.2.7 to 0.2.8. PR
[#13751](https://github.com/fastapi/fastapi/pull/13751)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🍱 Update sponsors: Dribia badge size. PR
[#13773](https://github.com/fastapi/fastapi/pull/13773)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors: add Dribia. PR
[#13771](https://github.com/fastapi/fastapi/pull/13771)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump typer from 0.15.3 to 0.16.0. PR
[#13752](https://github.com/fastapi/fastapi/pull/13752)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👥 Update FastAPI GitHub topic repositories. PR
[#13754](https://github.com/fastapi/fastapi/pull/13754)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Sponsors. PR
[#13750](https://github.com/fastapi/fastapi/pull/13750)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Contributors and Translators. PR
[#13749](https://github.com/fastapi/fastapi/pull/13749)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13736](https://github.com/fastapi/fastapi/pull/13736)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 🔧 Update sponsors: Add InterviewPal. PR
[#13728](https://github.com/fastapi/fastapi/pull/13728)by[@tiangolo](https://github.com/tiangolo). - 🔧 Remove Google Analytics. PR
[#13727](https://github.com/fastapi/fastapi/pull/13727)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors: remove MongoDB. PR
[#13725](https://github.com/fastapi/fastapi/pull/13725)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13711](https://github.com/fastapi/fastapi/pull/13711)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 🔧 Update sponsors: add Subtotal. PR
[#13701](https://github.com/fastapi/fastapi/pull/13701)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors: remove deepset / Haystack. PR
[#13700](https://github.com/fastapi/fastapi/pull/13700)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13688](https://github.com/fastapi/fastapi/pull/13688)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 👥 Update FastAPI People - Experts. PR
[#13671](https://github.com/fastapi/fastapi/pull/13671)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump typer from 0.12.5 to 0.15.3. PR
[#13666](https://github.com/fastapi/fastapi/pull/13666)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump sqlmodel from 0.0.23 to 0.0.24. PR
[#13665](https://github.com/fastapi/fastapi/pull/13665)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Update Sponsors: Zuplo logo and alt text. PR
[#13645](https://github.com/fastapi/fastapi/pull/13645)by[@martyndavies](https://github.com/martyndavies). - 👥 Update FastAPI GitHub topic repositories. PR
[#13667](https://github.com/fastapi/fastapi/pull/13667)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update links for LinkedIn and bottom. PR
[#13669](https://github.com/fastapi/fastapi/pull/13669)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors: remove Bump.sh and Coherence. PR
[#13668](https://github.com/fastapi/fastapi/pull/13668)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Sponsors. PR
[#13664](https://github.com/fastapi/fastapi/pull/13664)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Contributors and Translators. PR
[#13662](https://github.com/fastapi/fastapi/pull/13662)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13656](https://github.com/fastapi/fastapi/pull/13656)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ✅ Use
`inline-snapshot`

to support different Pydantic versions in the test suite. PR[#12534](https://github.com/fastapi/fastapi/pull/12534)by[@15r10nk](https://github.com/15r10nk). - ⬆ Bump astral-sh/setup-uv from 5 to 6. PR
[#13648](https://github.com/fastapi/fastapi/pull/13648)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13634](https://github.com/fastapi/fastapi/pull/13634)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13619](https://github.com/fastapi/fastapi/pull/13619)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#13594](https://github.com/fastapi/fastapi/pull/13594)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 👥 Update FastAPI People - Experts. PR
[#13568](https://github.com/fastapi/fastapi/pull/13568)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI GitHub topic repositories. PR
[#13565](https://github.com/fastapi/fastapi/pull/13565)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Sponsors. PR
[#13559](https://github.com/fastapi/fastapi/pull/13559)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Contributors and Translators. PR
[#13558](https://github.com/fastapi/fastapi/pull/13558)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump dirty-equals from 0.8.0 to 0.9.0. PR
[#13561](https://github.com/fastapi/fastapi/pull/13561)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Clean up
`docs/en/mkdocs.yml`

configuration file. PR[#13542](https://github.com/fastapi/fastapi/pull/13542)by[@svlandeg](https://github.com/svlandeg). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12986](https://github.com/fastapi/fastapi/pull/12986)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci).

## 0.115.12 (2025-03-23)[¶](#011512-2025-03-23)

### Fixes[¶](#fixes_33)

### Docs[¶](#docs_30)

- 📝 Update
`docs/en/docs/tutorial/middleware.md`

. PR[#13444](https://github.com/fastapi/fastapi/pull/13444)by[@Rishat-F](https://github.com/Rishat-F). - 👥 Update FastAPI People - Experts. PR
[#13493](https://github.com/fastapi/fastapi/pull/13493)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_22)

- 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/metadata.md`

page. PR[#13459](https://github.com/fastapi/fastapi/pull/13459)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/response-status-code.md`

page. PR[#13462](https://github.com/fastapi/fastapi/pull/13462)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/cookie-param-models.md`

page. PR[#13460](https://github.com/fastapi/fastapi/pull/13460)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/header-param-models.md`

page. PR[#13461](https://github.com/fastapi/fastapi/pull/13461)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Japanese translation for
`docs/ja/docs/virtual-environments.md`

. PR[#13304](https://github.com/fastapi/fastapi/pull/13304)by[@k94-ishi](https://github.com/k94-ishi). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/security/oauth2-jwt.md`

. PR[#13333](https://github.com/fastapi/fastapi/pull/13333)by[@yes0ng](https://github.com/yes0ng). - 🌐 Add Vietnamese translation for
`docs/vi/docs/deployment/cloud.md`

. PR[#13407](https://github.com/fastapi/fastapi/pull/13407)by[@ptt3199](https://github.com/ptt3199).

### Internal[¶](#internal_44)

- ⬆ Bump pydantic-ai from 0.0.15 to 0.0.30. PR
[#13438](https://github.com/fastapi/fastapi/pull/13438)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump sqlmodel from 0.0.22 to 0.0.23. PR
[#13437](https://github.com/fastapi/fastapi/pull/13437)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump black from 24.10.0 to 25.1.0. PR
[#13436](https://github.com/fastapi/fastapi/pull/13436)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump ruff to 0.9.4. PR
[#13299](https://github.com/fastapi/fastapi/pull/13299)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Update sponsors: pause TestDriven. PR
[#13446](https://github.com/fastapi/fastapi/pull/13446)by[@tiangolo](https://github.com/tiangolo).

## 0.115.11 (2025-03-01)[¶](#011511-2025-03-01)

### Fixes[¶](#fixes_34)

- 🐛 Add docs examples and tests (support) for
`Annotated`

custom validations, like`AfterValidator`

, revert[#13440](https://github.com/fastapi/fastapi/pull/13440). PR[#13442](https://github.com/fastapi/fastapi/pull/13442)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_23)

### Internal[¶](#internal_45)

- 👥 Update FastAPI GitHub topic repositories. PR
[#13439](https://github.com/fastapi/fastapi/pull/13439)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Contributors and Translators. PR
[#13432](https://github.com/fastapi/fastapi/pull/13432)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Sponsors. PR
[#13433](https://github.com/fastapi/fastapi/pull/13433)by[@tiangolo](https://github.com/tiangolo).

## 0.115.10 (2025-02-28)[¶](#011510-2025-02-28)

### Fixes[¶](#fixes_35)

### Upgrades[¶](#upgrades_11)

- ⬆️ Bump Starlette to allow up to 0.46.0:
`>=0.40.0,<0.47.0`

. PR[#13426](https://github.com/fastapi/fastapi/pull/13426)by[@musicinmybrain](https://github.com/musicinmybrain).

### Translations[¶](#translations_24)

- 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/debugging.md`

. PR[#13370](https://github.com/fastapi/fastapi/pull/13370)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/query-params.md`

. PR[#13362](https://github.com/fastapi/fastapi/pull/13362)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/path-params.md`

. PR[#13354](https://github.com/fastapi/fastapi/pull/13354)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/cookie-param-models.md`

. PR[#13330](https://github.com/fastapi/fastapi/pull/13330)by[@k94-ishi](https://github.com/k94-ishi). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/body-multiple-params.md`

. PR[#13408](https://github.com/fastapi/fastapi/pull/13408)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/query-param-models.md`

. PR[#13323](https://github.com/fastapi/fastapi/pull/13323)by[@k94-ishi](https://github.com/k94-ishi). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/body-nested-models.md`

. PR[#13409](https://github.com/fastapi/fastapi/pull/13409)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Vietnamese translation for
`docs/vi/docs/deployment/versions.md`

. PR[#13406](https://github.com/fastapi/fastapi/pull/13406)by[@ptt3199](https://github.com/ptt3199). - 🌐 Add Vietnamese translation for
`docs/vi/docs/deployment/index.md`

. PR[#13405](https://github.com/fastapi/fastapi/pull/13405)by[@ptt3199](https://github.com/ptt3199). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/request-forms.md`

. PR[#13383](https://github.com/fastapi/fastapi/pull/13383)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/testing.md`

. PR[#13371](https://github.com/fastapi/fastapi/pull/13371)by[@valentinDruzhinin](https://github.com/valentinDruzhinin).

## 0.115.9 (2025-02-27)[¶](#01159-2025-02-27)

### Fixes[¶](#fixes_36)

### Refactors[¶](#refactors_15)

- ✅ Simplify tests for
`query_params_str_validations`

. PR[#13218](https://github.com/fastapi/fastapi/pull/13218)by[@alv2017](https://github.com/alv2017). - ✅ Simplify tests for
`app_testing`

. PR[#13220](https://github.com/fastapi/fastapi/pull/13220)by[@alv2017](https://github.com/alv2017). - ✅ Simplify tests for
`dependency_testing`

. PR[#13223](https://github.com/fastapi/fastapi/pull/13223)by[@alv2017](https://github.com/alv2017).

### Docs[¶](#docs_31)

- 🍱 Update sponsors: CodeRabbit logo. PR
[#13424](https://github.com/fastapi/fastapi/pull/13424)by[@tiangolo](https://github.com/tiangolo). - 🩺 Unify the badges across all tutorial translations. PR
[#13329](https://github.com/fastapi/fastapi/pull/13329)by[@svlandeg](https://github.com/svlandeg). - 📝 Fix typos in virtual environments documentation. PR
[#13396](https://github.com/fastapi/fastapi/pull/13396)by[@bullet-ant](https://github.com/bullet-ant). - 🐛 Fix issue with Swagger theme change example in the official tutorial. PR
[#13289](https://github.com/fastapi/fastapi/pull/13289)by[@Zerohertz](https://github.com/Zerohertz). - 📝 Add more precise description of HTTP status code range in docs. PR
[#13347](https://github.com/fastapi/fastapi/pull/13347)by[@DanielYang59](https://github.com/DanielYang59). - 🔥 Remove manual type annotations in JWT tutorial to avoid typing expectations (JWT doesn't provide more types). PR
[#13378](https://github.com/fastapi/fastapi/pull/13378)by[@tiangolo](https://github.com/tiangolo). - 📝 Update docs for Query Params and String Validations, remove obsolete Ellipsis docs (
`...`

). PR[#13377](https://github.com/fastapi/fastapi/pull/13377)by[@tiangolo](https://github.com/tiangolo). - ✏️ Remove duplicate title in docs
`body-multiple-params`

. PR[#13345](https://github.com/fastapi/fastapi/pull/13345)by[@DanielYang59](https://github.com/DanielYang59). - 📝 Fix test badge. PR
[#13313](https://github.com/fastapi/fastapi/pull/13313)by[@esadek](https://github.com/esadek).

### Translations[¶](#translations_25)

- 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/header-params.md`

. PR[#13381](https://github.com/fastapi/fastapi/pull/13381)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/request-files.md`

. PR[#13395](https://github.com/fastapi/fastapi/pull/13395)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/request-form-models.md`

. PR[#13384](https://github.com/fastapi/fastapi/pull/13384)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/request-forms-and-files.md`

. PR[#13386](https://github.com/fastapi/fastapi/pull/13386)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Update Korean translation for
`docs/ko/docs/help-fastapi.md`

. PR[#13262](https://github.com/fastapi/fastapi/pull/13262)by[@Zerohertz](https://github.com/Zerohertz). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/custom-response.md`

. PR[#13265](https://github.com/fastapi/fastapi/pull/13265)by[@11kkw](https://github.com/11kkw). - 🌐 Update Korean translation for
`docs/ko/docs/tutorial/security/simple-oauth2.md`

. PR[#13335](https://github.com/fastapi/fastapi/pull/13335)by[@yes0ng](https://github.com/yes0ng). - 🌐 Add Russian translation for
`docs/ru/docs/advanced/response-cookies.md`

. PR[#13327](https://github.com/fastapi/fastapi/pull/13327)by[@Stepakinoyan](https://github.com/Stepakinoyan). - 🌐 Add Vietnamese translation for
`docs/vi/docs/tutorial/static-files.md`

. PR[#11291](https://github.com/fastapi/fastapi/pull/11291)by[@ptt3199](https://github.com/ptt3199). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/dependencies/dependencies-with-yield.md`

. PR[#13257](https://github.com/fastapi/fastapi/pull/13257)by[@11kkw](https://github.com/11kkw). - 🌐 Add Vietnamese translation for
`docs/vi/docs/virtual-environments.md`

. PR[#13282](https://github.com/fastapi/fastapi/pull/13282)by[@ptt3199](https://github.com/ptt3199). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/static-files.md`

. PR[#13285](https://github.com/fastapi/fastapi/pull/13285)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Vietnamese translation for
`docs/vi/docs/environment-variables.md`

. PR[#13287](https://github.com/fastapi/fastapi/pull/13287)by[@ptt3199](https://github.com/ptt3199). - 🌐 Add Vietnamese translation for
`docs/vi/docs/fastapi-cli.md`

. PR[#13294](https://github.com/fastapi/fastapi/pull/13294)by[@ptt3199](https://github.com/ptt3199). - 🌐 Add Ukrainian translation for
`docs/uk/docs/features.md`

. PR[#13308](https://github.com/fastapi/fastapi/pull/13308)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Add Ukrainian translation for
`docs/uk/docs/learn/index.md`

. PR[#13306](https://github.com/fastapi/fastapi/pull/13306)by[@valentinDruzhinin](https://github.com/valentinDruzhinin). - 🌐 Update Portuguese Translation for
`docs/pt/docs/deployment/https.md`

. PR[#13317](https://github.com/fastapi/fastapi/pull/13317)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Update Portuguese Translation for
`docs/pt/docs/index.md`

. PR[#13328](https://github.com/fastapi/fastapi/pull/13328)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Russian translation for
`docs/ru/docs/advanced/websockets.md`

. PR[#13279](https://github.com/fastapi/fastapi/pull/13279)by[@Rishat-F](https://github.com/Rishat-F).

### Internal[¶](#internal_46)

- ✅ Fix a minor bug in the test
`tests/test_modules_same_name_body/test_main.py`

. PR[#13411](https://github.com/fastapi/fastapi/pull/13411)by[@alv2017](https://github.com/alv2017). - 👷 Use
`wrangler-action`

v3. PR[#13415](https://github.com/fastapi/fastapi/pull/13415)by[@joakimnordling](https://github.com/joakimnordling). - 🔧 Update sponsors: add CodeRabbit. PR
[#13402](https://github.com/fastapi/fastapi/pull/13402)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update team: Add Ludovico. PR
[#13390](https://github.com/fastapi/fastapi/pull/13390)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors: Add LambdaTest. PR
[#13389](https://github.com/fastapi/fastapi/pull/13389)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump cloudflare/wrangler-action from 3.13 to 3.14. PR
[#13350](https://github.com/fastapi/fastapi/pull/13350)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump mkdocs-material from 9.5.18 to 9.6.1. PR
[#13301](https://github.com/fastapi/fastapi/pull/13301)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pillow from 11.0.0 to 11.1.0. PR
[#13300](https://github.com/fastapi/fastapi/pull/13300)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👥 Update FastAPI People - Sponsors. PR
[#13295](https://github.com/fastapi/fastapi/pull/13295)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Experts. PR
[#13303](https://github.com/fastapi/fastapi/pull/13303)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI GitHub topic repositories. PR
[#13302](https://github.com/fastapi/fastapi/pull/13302)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People - Contributors and Translators. PR
[#13293](https://github.com/fastapi/fastapi/pull/13293)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump inline-snapshot from 0.18.1 to 0.19.3. PR
[#13298](https://github.com/fastapi/fastapi/pull/13298)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Update sponsors, add Permit. PR
[#13288](https://github.com/fastapi/fastapi/pull/13288)by[@tiangolo](https://github.com/tiangolo).

## 0.115.8 (2025-01-30)[¶](#01158-2025-01-30)

### Fixes[¶](#fixes_37)

- 🐛 Fix
`OAuth2PasswordRequestForm`

and`OAuth2PasswordRequestFormStrict`

fixed`grant_type`

"password" RegEx. PR[#9783](https://github.com/fastapi/fastapi/pull/9783)by[@skarfie123](https://github.com/skarfie123).

### Refactors[¶](#refactors_16)

- ✅ Simplify tests for body_multiple_params . PR
[#13237](https://github.com/fastapi/fastapi/pull/13237)by[@alejsdev](https://github.com/alejsdev). - ♻️ Move duplicated code portion to a static method in the
`APIKeyBase`

super class. PR[#3142](https://github.com/fastapi/fastapi/pull/3142)by[@ShahriyarR](https://github.com/ShahriyarR). - ✅ Simplify tests for request_files. PR
[#13182](https://github.com/fastapi/fastapi/pull/13182)by[@alejsdev](https://github.com/alejsdev).

### Docs[¶](#docs_32)

- 📝 Change the word "unwrap" to "unpack" in
`docs/en/docs/tutorial/extra-models.md`

. PR[#13061](https://github.com/fastapi/fastapi/pull/13061)by[@timothy-jeong](https://github.com/timothy-jeong). - 📝 Update Request Body's
`tutorial002`

to deal with`tax=0`

case. PR[#13230](https://github.com/fastapi/fastapi/pull/13230)by[@togogh](https://github.com/togogh). - 👥 Update FastAPI People - Experts. PR
[#13269](https://github.com/fastapi/fastapi/pull/13269)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_26)

- 🌐 Add Japanese translation for
`docs/ja/docs/environment-variables.md`

. PR[#13226](https://github.com/fastapi/fastapi/pull/13226)by[@k94-ishi](https://github.com/k94-ishi). - 🌐 Add Russian translation for
`docs/ru/docs/advanced/async-tests.md`

. PR[#13227](https://github.com/fastapi/fastapi/pull/13227)by[@Rishat-F](https://github.com/Rishat-F). - 🌐 Update Russian translation for
`docs/ru/docs/tutorial/dependencies/dependencies-in-path-operation-decorators.md`

. PR[#13252](https://github.com/fastapi/fastapi/pull/13252)by[@Rishat-F](https://github.com/Rishat-F). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/bigger-applications.md`

. PR[#13154](https://github.com/fastapi/fastapi/pull/13154)by[@alv2017](https://github.com/alv2017).

### Internal[¶](#internal_47)

- ⬆️ Add support for Python 3.13. PR
[#13274](https://github.com/fastapi/fastapi/pull/13274)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade AnyIO max version for tests, new range:
`>=3.2.1,<5.0.0`

. PR[#13273](https://github.com/fastapi/fastapi/pull/13273)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update Sponsors badges. PR
[#13271](https://github.com/fastapi/fastapi/pull/13271)by[@tiangolo](https://github.com/tiangolo). - ♻️ Fix
`notify_translations.py`

empty env var handling for PR label events vs workflow_dispatch. PR[#13272](https://github.com/fastapi/fastapi/pull/13272)by[@tiangolo](https://github.com/tiangolo). - ♻️ Refactor and move
`scripts/notify_translations.py`

, no need for a custom GitHub Action. PR[#13270](https://github.com/fastapi/fastapi/pull/13270)by[@tiangolo](https://github.com/tiangolo). - 🔨 Update FastAPI People Experts script, refactor and optimize data fetching to handle rate limits. PR
[#13267](https://github.com/fastapi/fastapi/pull/13267)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump pypa/gh-action-pypi-publish from 1.12.3 to 1.12.4. PR
[#13251](https://github.com/fastapi/fastapi/pull/13251)by[@dependabot[bot]](https://github.com/apps/dependabot).

## 0.115.7 (2025-01-22)[¶](#01157-2025-01-22)

### Upgrades[¶](#upgrades_12)

- ⬆️ Upgrade
`python-multipart`

to >=0.0.18. PR[#13219](https://github.com/fastapi/fastapi/pull/13219)by[@DanielKusyDev](https://github.com/DanielKusyDev). - ⬆️ Bump Starlette to allow up to 0.45.0:
`>=0.40.0,<0.46.0`

. PR[#13117](https://github.com/fastapi/fastapi/pull/13117)by[@Kludex](https://github.com/Kludex). - ⬆️ Upgrade
`jinja2`

to >=3.1.5. PR[#13194](https://github.com/fastapi/fastapi/pull/13194)by[@DanielKusyDev](https://github.com/DanielKusyDev).

### Refactors[¶](#refactors_17)

- ✅ Simplify tests for websockets. PR
[#13202](https://github.com/fastapi/fastapi/pull/13202)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for request_form_models . PR
[#13183](https://github.com/fastapi/fastapi/pull/13183)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for separate_openapi_schemas. PR
[#13201](https://github.com/fastapi/fastapi/pull/13201)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for security. PR
[#13200](https://github.com/fastapi/fastapi/pull/13200)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for schema_extra_example. PR
[#13197](https://github.com/fastapi/fastapi/pull/13197)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for request_model. PR
[#13195](https://github.com/fastapi/fastapi/pull/13195)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for request_forms_and_files. PR
[#13185](https://github.com/fastapi/fastapi/pull/13185)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for request_forms. PR
[#13184](https://github.com/fastapi/fastapi/pull/13184)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for path_query_params. PR
[#13181](https://github.com/fastapi/fastapi/pull/13181)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for path_operation_configurations. PR
[#13180](https://github.com/fastapi/fastapi/pull/13180)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for header_params. PR
[#13179](https://github.com/fastapi/fastapi/pull/13179)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for extra_models. PR
[#13178](https://github.com/fastapi/fastapi/pull/13178)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for extra_data_types. PR
[#13177](https://github.com/fastapi/fastapi/pull/13177)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for cookie_params. PR
[#13176](https://github.com/fastapi/fastapi/pull/13176)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for dependencies. PR
[#13174](https://github.com/fastapi/fastapi/pull/13174)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for body_updates. PR
[#13172](https://github.com/fastapi/fastapi/pull/13172)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for body_nested_models. PR
[#13171](https://github.com/fastapi/fastapi/pull/13171)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for body_multiple_params. PR
[#13170](https://github.com/fastapi/fastapi/pull/13170)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for body_fields. PR
[#13169](https://github.com/fastapi/fastapi/pull/13169)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for body. PR
[#13168](https://github.com/fastapi/fastapi/pull/13168)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for bigger_applications. PR
[#13167](https://github.com/fastapi/fastapi/pull/13167)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for background_tasks. PR
[#13166](https://github.com/fastapi/fastapi/pull/13166)by[@alejsdev](https://github.com/alejsdev). - ✅ Simplify tests for additional_status_codes. PR
[#13149](https://github.com/fastapi/fastapi/pull/13149)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_33)

- ✏️ Update Strawberry integration docs. PR
[#13155](https://github.com/fastapi/fastapi/pull/13155)by[@kinuax](https://github.com/kinuax). - 🔥 Remove unused Peewee tutorial files. PR
[#13158](https://github.com/fastapi/fastapi/pull/13158)by[@alejsdev](https://github.com/alejsdev). - 📝 Update image in body-nested-model docs. PR
[#11063](https://github.com/fastapi/fastapi/pull/11063)by[@untilhamza](https://github.com/untilhamza). - 📝 Update
`fastapi-cli`

UI examples in docs. PR[#13107](https://github.com/fastapi/fastapi/pull/13107)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 👷 Add new GitHub Action to update contributors, translators, and translation reviewers. PR
[#13136](https://github.com/fastapi/fastapi/pull/13136)by[@tiangolo](https://github.com/tiangolo). - ✏️ Fix typo in
`docs/en/docs/virtual-environments.md`

. PR[#13124](https://github.com/fastapi/fastapi/pull/13124)by[@tiangolo](https://github.com/tiangolo). - ✏️ Fix error in
`docs/en/docs/contributing.md`

. PR[#12899](https://github.com/fastapi/fastapi/pull/12899)by[@kingsubin](https://github.com/kingsubin). - 📝 Minor corrections in
`docs/en/docs/tutorial/sql-databases.md`

. PR[#13081](https://github.com/fastapi/fastapi/pull/13081)by[@alv2017](https://github.com/alv2017). - 📝 Update includes in
`docs/ru/docs/tutorial/query-param-models.md`

. PR[#12994](https://github.com/fastapi/fastapi/pull/12994)by[@alejsdev](https://github.com/alejsdev). - ✏️ Fix typo in README installation instructions. PR
[#13011](https://github.com/fastapi/fastapi/pull/13011)by[@dave-hay](https://github.com/dave-hay). - 📝 Update docs for
`fastapi-cli`

. PR[#13031](https://github.com/fastapi/fastapi/pull/13031)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_27)

- 🌐 Update Portuguese Translation for
`docs/pt/docs/tutorial/request-forms.md`

. PR[#13216](https://github.com/fastapi/fastapi/pull/13216)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Update Portuguese translation for
`docs/pt/docs/advanced/settings.md`

. PR[#13209](https://github.com/fastapi/fastapi/pull/13209)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/security/oauth2-jwt.md`

. PR[#13205](https://github.com/fastapi/fastapi/pull/13205)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Indonesian translation for
`docs/id/docs/index.md`

. PR[#13191](https://github.com/fastapi/fastapi/pull/13191)by[@gerry-sabar](https://github.com/gerry-sabar). - 🌐 Add Indonesian translation for
`docs/id/docs/tutorial/static-files.md`

. PR[#13092](https://github.com/fastapi/fastapi/pull/13092)by[@guspan-tanadi](https://github.com/guspan-tanadi). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/security/get-current-user.md`

. PR[#13188](https://github.com/fastapi/fastapi/pull/13188)by[@ceb10n](https://github.com/ceb10n). - 🌐 Remove Wrong Portuguese translations location for
`docs/pt/docs/advanced/benchmarks.md`

. PR[#13187](https://github.com/fastapi/fastapi/pull/13187)by[@ceb10n](https://github.com/ceb10n). - 🌐 Update Portuguese translations. PR
[#13156](https://github.com/fastapi/fastapi/pull/13156)by[@nillvitor](https://github.com/nillvitor). - 🌐 Update Russian translation for
`docs/ru/docs/tutorial/security/first-steps.md`

. PR[#13159](https://github.com/fastapi/fastapi/pull/13159)by[@Yarous](https://github.com/Yarous). - ✏️ Delete unnecessary backspace in
`docs/ja/docs/tutorial/path-params-numeric-validations.md`

. PR[#12238](https://github.com/fastapi/fastapi/pull/12238)by[@FakeDocument](https://github.com/FakeDocument). - 🌐 Update Chinese translation for
`docs/zh/docs/fastapi-cli.md`

. PR[#13102](https://github.com/fastapi/fastapi/pull/13102)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Add new Spanish translations for all docs with new LLM-assisted system using PydanticAI. PR
[#13122](https://github.com/fastapi/fastapi/pull/13122)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update existing Spanish translations using the new LLM-assisted system using PydanticAI. PR
[#13118](https://github.com/fastapi/fastapi/pull/13118)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update Chinese translation for
`docs/zh/docs/advanced/security/oauth2-scopes.md`

. PR[#13110](https://github.com/fastapi/fastapi/pull/13110)by[@ChenPu2002](https://github.com/ChenPu2002). - 🌐 Add Indonesian translation for
`docs/id/docs/tutorial/path-params.md`

. PR[#13086](https://github.com/fastapi/fastapi/pull/13086)by[@gerry-sabar](https://github.com/gerry-sabar). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/sql-databases.md`

. PR[#13093](https://github.com/fastapi/fastapi/pull/13093)by[@GeumBinLee](https://github.com/GeumBinLee). - 🌐 Update Chinese translation for
`docs/zh/docs/async.md`

. PR[#13095](https://github.com/fastapi/fastapi/pull/13095)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/openapi-webhooks.md`

. PR[#13091](https://github.com/fastapi/fastapi/pull/13091)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/async-tests.md`

. PR[#13074](https://github.com/fastapi/fastapi/pull/13074)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Add Ukrainian translation for
`docs/uk/docs/fastapi-cli.md`

. PR[#13020](https://github.com/fastapi/fastapi/pull/13020)by[@ykertytsky](https://github.com/ykertytsky). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/events.md`

. PR[#12512](https://github.com/fastapi/fastapi/pull/12512)by[@ZhibangYue](https://github.com/ZhibangYue). - 🌐 Add Russian translation for
`/docs/ru/docs/tutorial/sql-databases.md`

. PR[#13079](https://github.com/fastapi/fastapi/pull/13079)by[@alv2017](https://github.com/alv2017). - 🌐 Update Chinese translation for
`docs/zh/docs/advanced/testing-dependencies.md`

. PR[#13066](https://github.com/fastapi/fastapi/pull/13066)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Update Traditional Chinese translation for
`docs/zh-hant/docs/tutorial/index.md`

. PR[#13075](https://github.com/fastapi/fastapi/pull/13075)by[@codingjenny](https://github.com/codingjenny). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/sql-databases.md`

. PR[#13051](https://github.com/fastapi/fastapi/pull/13051)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/query-params-str-validations.md`

. PR[#12928](https://github.com/fastapi/fastapi/pull/12928)by[@Vincy1230](https://github.com/Vincy1230). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/header-param-models.md`

. PR[#13040](https://github.com/fastapi/fastapi/pull/13040)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/path-params.md`

. PR[#12926](https://github.com/fastapi/fastapi/pull/12926)by[@Vincy1230](https://github.com/Vincy1230). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/first-steps.md`

. PR[#12923](https://github.com/fastapi/fastapi/pull/12923)by[@Vincy1230](https://github.com/Vincy1230). - 🌐 Update Russian translation for
`docs/ru/docs/deployment/docker.md`

. PR[#13048](https://github.com/fastapi/fastapi/pull/13048)by[@anklav24](https://github.com/anklav24). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/generate-clients.md`

. PR[#13030](https://github.com/fastapi/fastapi/pull/13030)by[@vitumenezes](https://github.com/vitumenezes). - 🌐 Add Indonesian translation for
`docs/id/docs/tutorial/first-steps.md`

. PR[#13042](https://github.com/fastapi/fastapi/pull/13042)by[@gerry-sabar](https://github.com/gerry-sabar). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/cookie-param-models.md`

. PR[#13038](https://github.com/fastapi/fastapi/pull/13038)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/request-form-models.md`

. PR[#13045](https://github.com/fastapi/fastapi/pull/13045)by[@Zhongheng-Cheng](https://github.com/Zhongheng-Cheng). - 🌐 Add Russian translation for
`docs/ru/docs/virtual-environments.md`

. PR[#13026](https://github.com/fastapi/fastapi/pull/13026)by[@alv2017](https://github.com/alv2017). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/testing.md`

. PR[#12968](https://github.com/fastapi/fastapi/pull/12968)by[@jts8257](https://github.com/jts8257). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/async-test.md`

. PR[#12918](https://github.com/fastapi/fastapi/pull/12918)by[@icehongssii](https://github.com/icehongssii). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/security/oauth2-jwt.md`

. PR[#10601](https://github.com/fastapi/fastapi/pull/10601)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/security/simple-oauth2.md`

. PR[#10599](https://github.com/fastapi/fastapi/pull/10599)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/security/get-current-user.md`

. PR[#10594](https://github.com/fastapi/fastapi/pull/10594)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/features.md`

. PR[#12441](https://github.com/fastapi/fastapi/pull/12441)by[@codingjenny](https://github.com/codingjenny). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/virtual-environments.md`

. PR[#12791](https://github.com/fastapi/fastapi/pull/12791)by[@Vincy1230](https://github.com/Vincy1230). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/templates.md`

. PR[#12726](https://github.com/fastapi/fastapi/pull/12726)by[@Heumhub](https://github.com/Heumhub). - 🌐 Add Russian translation for
`docs/ru/docs/fastapi-cli.md`

. PR[#13041](https://github.com/fastapi/fastapi/pull/13041)by[@alv2017](https://github.com/alv2017). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/cookie-param-models.md`

. PR[#13000](https://github.com/fastapi/fastapi/pull/13000)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/header-param-models.md`

. PR[#13001](https://github.com/fastapi/fastapi/pull/13001)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/request-form-models.md`

. PR[#13002](https://github.com/fastapi/fastapi/pull/13002)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/request-forms.md`

. PR[#13003](https://github.com/fastapi/fastapi/pull/13003)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Korean translation for
`docs/ko/docs/resources/index.md`

. PR[#13004](https://github.com/fastapi/fastapi/pull/13004)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Korean translation for
`docs/ko/docs/how-to/configure-swagger-ui.md`

. PR[#12898](https://github.com/fastapi/fastapi/pull/12898)by[@nahyunkeem](https://github.com/nahyunkeem). - 🌐 Add Korean translation to
`docs/ko/docs/advanced/additional-status-codes.md`

. PR[#12715](https://github.com/fastapi/fastapi/pull/12715)by[@nahyunkeem](https://github.com/nahyunkeem). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/tutorial/first-steps.md`

. PR[#12467](https://github.com/fastapi/fastapi/pull/12467)by[@codingjenny](https://github.com/codingjenny).

### Internal[¶](#internal_48)

- 🔧 Add Pydantic 2 trove classifier. PR
[#13199](https://github.com/fastapi/fastapi/pull/13199)by[@johnthagen](https://github.com/johnthagen). - 👥 Update FastAPI People - Sponsors. PR
[#13231](https://github.com/fastapi/fastapi/pull/13231)by[@tiangolo](https://github.com/tiangolo). - 👷 Refactor FastAPI People Sponsors to use 2 tokens. PR
[#13228](https://github.com/fastapi/fastapi/pull/13228)by[@tiangolo](https://github.com/tiangolo). - 👷 Update token for FastAPI People - Sponsors. PR
[#13225](https://github.com/fastapi/fastapi/pull/13225)by[@tiangolo](https://github.com/tiangolo). - 👷 Add independent CI automation for FastAPI People - Sponsors. PR
[#13221](https://github.com/fastapi/fastapi/pull/13221)by[@tiangolo](https://github.com/tiangolo). - 👷 Add retries to Smokeshow. PR
[#13151](https://github.com/fastapi/fastapi/pull/13151)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update Speakeasy sponsor graphic. PR
[#13147](https://github.com/fastapi/fastapi/pull/13147)by[@chailandau](https://github.com/chailandau). - 👥 Update FastAPI GitHub topic repositories. PR
[#13146](https://github.com/fastapi/fastapi/pull/13146)by[@tiangolo](https://github.com/tiangolo). - 👷♀️ Add script for GitHub Topic Repositories and update External Links. PR
[#13135](https://github.com/fastapi/fastapi/pull/13135)by[@alejsdev](https://github.com/alejsdev). - 👥 Update FastAPI People - Contributors and Translators. PR
[#13145](https://github.com/fastapi/fastapi/pull/13145)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump markdown-include-variants from 0.0.3 to 0.0.4. PR
[#13129](https://github.com/fastapi/fastapi/pull/13129)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump inline-snapshot from 0.14.0 to 0.18.1. PR
[#13132](https://github.com/fastapi/fastapi/pull/13132)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump mkdocs-macros-plugin from 1.0.5 to 1.3.7. PR
[#13133](https://github.com/fastapi/fastapi/pull/13133)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔨 Add internal scripts to generate language translations with PydanticAI, include Spanish prompt. PR
[#13123](https://github.com/fastapi/fastapi/pull/13123)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump astral-sh/setup-uv from 4 to 5. PR
[#13096](https://github.com/fastapi/fastapi/pull/13096)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Update sponsors: rename CryptAPI to BlockBee. PR
[#13078](https://github.com/fastapi/fastapi/pull/13078)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump pypa/gh-action-pypi-publish from 1.12.2 to 1.12.3. PR
[#13055](https://github.com/fastapi/fastapi/pull/13055)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump types-ujson from 5.7.0.1 to 5.10.0.20240515. PR
[#13018](https://github.com/fastapi/fastapi/pull/13018)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump black from 24.3.0 to 24.10.0. PR
[#13014](https://github.com/fastapi/fastapi/pull/13014)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump inline-snapshot from 0.13.0 to 0.14.0. PR
[#13017](https://github.com/fastapi/fastapi/pull/13017)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump dirty-equals from 0.6.0 to 0.8.0. PR
[#13015](https://github.com/fastapi/fastapi/pull/13015)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump cloudflare/wrangler-action from 3.12 to 3.13. PR
[#12996](https://github.com/fastapi/fastapi/pull/12996)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump astral-sh/setup-uv from 3 to 4. PR
[#12982](https://github.com/fastapi/fastapi/pull/12982)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Remove duplicate actions/checkout in
`notify-translations.yml`

. PR[#12915](https://github.com/fastapi/fastapi/pull/12915)by[@tinyboxvk](https://github.com/tinyboxvk). - 🔧 Update team members. PR
[#13033](https://github.com/fastapi/fastapi/pull/13033)by[@tiangolo](https://github.com/tiangolo). - 📝 Update sponsors: remove Codacy. PR
[#13032](https://github.com/fastapi/fastapi/pull/13032)by[@tiangolo](https://github.com/tiangolo).

## 0.115.6 (2024-12-03)[¶](#01156-2024-12-03)

### Fixes[¶](#fixes_38)

- 🐛 Preserve traceback when an exception is raised in sync dependency with
`yield`

. PR[#5823](https://github.com/fastapi/fastapi/pull/5823)by[@sombek](https://github.com/sombek).

### Refactors[¶](#refactors_18)

### Docs[¶](#docs_34)

- 📝 Update includes format in docs with an automated script. PR
[#12950](https://github.com/fastapi/fastapi/pull/12950)by[@tiangolo](https://github.com/tiangolo). - 📝 Update includes for
`docs/de/docs/advanced/using-request-directly.md`

. PR[#12685](https://github.com/fastapi/fastapi/pull/12685)by[@alissadb](https://github.com/alissadb). - 📝 Update includes for
`docs/de/docs/how-to/conditional-openapi.md`

. PR[#12689](https://github.com/fastapi/fastapi/pull/12689)by[@alissadb](https://github.com/alissadb).

### Translations[¶](#translations_28)

- 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/async.md`

. PR[#12990](https://github.com/fastapi/fastapi/pull/12990)by[@ILoveSorasakiHina](https://github.com/ILoveSorasakiHina). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/tutorial/query-param-models.md`

. PR[#12932](https://github.com/fastapi/fastapi/pull/12932)by[@Vincy1230](https://github.com/Vincy1230). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/testing-dependencies.md`

. PR[#12992](https://github.com/fastapi/fastapi/pull/12992)by[@Limsunoh](https://github.com/Limsunoh). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/websockets.md`

. PR[#12991](https://github.com/fastapi/fastapi/pull/12991)by[@kwang1215](https://github.com/kwang1215). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/response-model.md`

. PR[#12933](https://github.com/fastapi/fastapi/pull/12933)by[@AndreBBM](https://github.com/AndreBBM). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/middlewares.md`

. PR[#12753](https://github.com/fastapi/fastapi/pull/12753)by[@nahyunkeem](https://github.com/nahyunkeem). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/openapi-webhooks.md`

. PR[#12752](https://github.com/fastapi/fastapi/pull/12752)by[@saeye](https://github.com/saeye). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/query-param-models.md`

. PR[#12931](https://github.com/fastapi/fastapi/pull/12931)by[@Vincy1230](https://github.com/Vincy1230). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/query-param-models.md`

. PR[#12445](https://github.com/fastapi/fastapi/pull/12445)by[@gitgernit](https://github.com/gitgernit). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/query-param-models.md`

. PR[#12940](https://github.com/fastapi/fastapi/pull/12940)by[@jts8257](https://github.com/jts8257). - 🔥 Remove obsolete tutorial translation to Chinese for
`docs/zh/docs/tutorial/sql-databases.md`

, it references files that are no longer on the repo. PR[#12949](https://github.com/fastapi/fastapi/pull/12949)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_49)

- ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12954](https://github.com/fastapi/fastapi/pull/12954)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci).

## 0.115.5 (2024-11-12)[¶](#01155-2024-11-12)

### Refactors[¶](#refactors_19)

### Docs[¶](#docs_35)

- 📝 Update includes for
`docs/en/docs/tutorial/body.md`

. PR[#12757](https://github.com/fastapi/fastapi/pull/12757)by[@gsheni](https://github.com/gsheni). - 📝 Update includes in
`docs/en/docs/advanced/testing-dependencies.md`

. PR[#12647](https://github.com/fastapi/fastapi/pull/12647)by[@AyushSinghal1794](https://github.com/AyushSinghal1794). - 📝 Update includes for
`docs/en/docs/tutorial/metadata.md`

. PR[#12773](https://github.com/fastapi/fastapi/pull/12773)by[@Nimitha-jagadeesha](https://github.com/Nimitha-jagadeesha). - 📝 Update
`docs/en/docs/tutorial/dependencies/dependencies-with-yield.md`

. PR[#12045](https://github.com/fastapi/fastapi/pull/12045)by[@xuvjso](https://github.com/xuvjso). - 📝 Update includes for
`docs/en/docs/tutorial/dependencies/global-dependencies.md`

. PR[#12653](https://github.com/fastapi/fastapi/pull/12653)by[@vishnuvskvkl](https://github.com/vishnuvskvkl). - 📝 Update includes for
`docs/en/docs/tutorial/body-updates.md`

. PR[#12712](https://github.com/fastapi/fastapi/pull/12712)by[@davioc](https://github.com/davioc). - 📝 Remove mention of Celery in the project generators. PR
[#12742](https://github.com/fastapi/fastapi/pull/12742)by[@david-caro](https://github.com/david-caro). - 📝 Update includes in
`docs/en/docs/tutorial/header-param-models.md`

. PR[#12814](https://github.com/fastapi/fastapi/pull/12814)by[@zhaohan-dong](https://github.com/zhaohan-dong). - 📝 Update
`contributing.md`

docs, include note to not translate this page. PR[#12841](https://github.com/fastapi/fastapi/pull/12841)by[@tiangolo](https://github.com/tiangolo). - 📝 Update includes in
`docs/en/docs/tutorial/request-forms.md`

. PR[#12648](https://github.com/fastapi/fastapi/pull/12648)by[@vishnuvskvkl](https://github.com/vishnuvskvkl). - 📝 Update includes in
`docs/en/docs/tutorial/request-form-models.md`

. PR[#12649](https://github.com/fastapi/fastapi/pull/12649)by[@vishnuvskvkl](https://github.com/vishnuvskvkl). - 📝 Update includes in
`docs/en/docs/tutorial/security/oauth2-jwt.md`

. PR[#12650](https://github.com/fastapi/fastapi/pull/12650)by[@OCE1960](https://github.com/OCE1960). - 📝 Update includes in
`docs/vi/docs/tutorial/first-steps.md`

. PR[#12754](https://github.com/fastapi/fastapi/pull/12754)by[@MxPy](https://github.com/MxPy). - 📝 Update includes for
`docs/pt/docs/advanced/wsgi.md`

. PR[#12769](https://github.com/fastapi/fastapi/pull/12769)by[@Nimitha-jagadeesha](https://github.com/Nimitha-jagadeesha). - 📝 Update includes for
`docs/en/docs/tutorial/dependencies/dependencies-in-path-operation-decorators.md`

. PR[#12815](https://github.com/fastapi/fastapi/pull/12815)by[@handabaldeep](https://github.com/handabaldeep). - 📝 Update includes for
`docs/en/docs/tutorial/dependencies/classes-as-dependencies.md`

. PR[#12813](https://github.com/fastapi/fastapi/pull/12813)by[@handabaldeep](https://github.com/handabaldeep). - ✏️ Fix error in
`docs/en/docs/tutorial/middleware.md`

. PR[#12819](https://github.com/fastapi/fastapi/pull/12819)by[@alejsdev](https://github.com/alejsdev). - 📝 Update includes for
`docs/en/docs/tutorial/security/get-current-user.md`

. PR[#12645](https://github.com/fastapi/fastapi/pull/12645)by[@OCE1960](https://github.com/OCE1960). - 📝 Update includes for
`docs/en/docs/tutorial/security/first-steps.md`

. PR[#12643](https://github.com/fastapi/fastapi/pull/12643)by[@OCE1960](https://github.com/OCE1960). - 📝 Update includes in
`docs/de/docs/advanced/additional-responses.md`

. PR[#12821](https://github.com/fastapi/fastapi/pull/12821)by[@zhaohan-dong](https://github.com/zhaohan-dong). - 📝 Update includes in
`docs/en/docs/advanced/generate-clients.md`

. PR[#12642](https://github.com/fastapi/fastapi/pull/12642)by[@AyushSinghal1794](https://github.com/AyushSinghal1794). - 📝 Fix admonition double quotes with new syntax. PR
[#12835](https://github.com/fastapi/fastapi/pull/12835)by[@tiangolo](https://github.com/tiangolo). - 📝 Update includes in
`docs/zh/docs/advanced/additional-responses.md`

. PR[#12828](https://github.com/fastapi/fastapi/pull/12828)by[@zhaohan-dong](https://github.com/zhaohan-dong). - 📝 Update includes in
`docs/en/docs/tutorial/path-params-numeric-validations.md`

. PR[#12825](https://github.com/fastapi/fastapi/pull/12825)by[@zhaohan-dong](https://github.com/zhaohan-dong). - 📝 Update includes for
`docs/en/docs/advanced/testing-websockets.md`

. PR[#12761](https://github.com/fastapi/fastapi/pull/12761)by[@hamidrasti](https://github.com/hamidrasti). - 📝 Update includes for
`docs/en/docs/advanced/using-request-directly.md`

. PR[#12760](https://github.com/fastapi/fastapi/pull/12760)by[@hamidrasti](https://github.com/hamidrasti). - 📝 Update includes for
`docs/advanced/wsgi.md`

. PR[#12758](https://github.com/fastapi/fastapi/pull/12758)by[@hamidrasti](https://github.com/hamidrasti). - 📝 Update includes in
`docs/de/docs/tutorial/middleware.md`

. PR[#12729](https://github.com/fastapi/fastapi/pull/12729)by[@paintdog](https://github.com/paintdog). - 📝 Update includes for
`docs/en/docs/tutorial/schema-extra-example.md`

. PR[#12822](https://github.com/fastapi/fastapi/pull/12822)by[@tiangolo](https://github.com/tiangolo). - 📝 Update includes in
`docs/fr/docs/advanced/additional-responses.md`

. PR[#12634](https://github.com/fastapi/fastapi/pull/12634)by[@fegmorte](https://github.com/fegmorte). - 📝 Update includes in
`docs/fr/docs/advanced/path-operation-advanced-configuration.md`

. PR[#12633](https://github.com/fastapi/fastapi/pull/12633)by[@kantandane](https://github.com/kantandane). - 📝 Update includes in
`docs/fr/docs/advanced/response-directly.md`

. PR[#12632](https://github.com/fastapi/fastapi/pull/12632)by[@kantandane](https://github.com/kantandane). - 📝 Update includes for
`docs/en/docs/tutorial/header-params.md`

. PR[#12640](https://github.com/fastapi/fastapi/pull/12640)by[@vishnuvskvkl](https://github.com/vishnuvskvkl). - 📝 Update includes in
`docs/en/docs/tutorial/cookie-param-models.md`

. PR[#12639](https://github.com/fastapi/fastapi/pull/12639)by[@vishnuvskvkl](https://github.com/vishnuvskvkl). - 📝 Update includes for
`docs/en/docs/tutorial/extra-models.md`

. PR[#12638](https://github.com/fastapi/fastapi/pull/12638)by[@vishnuvskvkl](https://github.com/vishnuvskvkl). - 📝 Update includes for
`docs/en/docs/tutorial/cors.md`

. PR[#12637](https://github.com/fastapi/fastapi/pull/12637)by[@vishnuvskvkl](https://github.com/vishnuvskvkl). - 📝 Update includes for
`docs/en/docs/tutorial/dependencies/sub-dependencies.md`

. PR[#12810](https://github.com/fastapi/fastapi/pull/12810)by[@handabaldeep](https://github.com/handabaldeep). - 📝 Update includes in
`docs/en/docs/tutorial/body-nested-models.md`

. PR[#12812](https://github.com/fastapi/fastapi/pull/12812)by[@zhaohan-dong](https://github.com/zhaohan-dong). - 📝 Update includes in
`docs/en/docs/tutorial/path-operation-configuration.md`

. PR[#12809](https://github.com/fastapi/fastapi/pull/12809)by[@AlexWendland](https://github.com/AlexWendland). - 📝 Update includes in
`docs/en/docs/tutorial/request-files.md`

. PR[#12818](https://github.com/fastapi/fastapi/pull/12818)by[@zhaohan-dong](https://github.com/zhaohan-dong). - 📝 Update includes for
`docs/en/docs/tutorial/query-param-models.md`

. PR[#12817](https://github.com/fastapi/fastapi/pull/12817)by[@handabaldeep](https://github.com/handabaldeep). - 📝 Update includes in
`docs/en/docs/tutorial/path-params.md`

. PR[#12811](https://github.com/fastapi/fastapi/pull/12811)by[@AlexWendland](https://github.com/AlexWendland). - 📝 Update includes in
`docs/en/docs/tutorial/response-model.md`

. PR[#12621](https://github.com/fastapi/fastapi/pull/12621)by[@kantandane](https://github.com/kantandane). - 📝 Update includes in
`docs/en/docs/advanced/websockets.md`

. PR[#12606](https://github.com/fastapi/fastapi/pull/12606)by[@vishnuvskvkl](https://github.com/vishnuvskvkl). - 📝 Updates include for
`docs/en/docs/tutorial/cookie-params.md`

. PR[#12808](https://github.com/fastapi/fastapi/pull/12808)by[@handabaldeep](https://github.com/handabaldeep). - 📝 Update includes in
`docs/en/docs/tutorial/middleware.md`

. PR[#12807](https://github.com/fastapi/fastapi/pull/12807)by[@AlexWendland](https://github.com/AlexWendland). - 📝 Update includes in
`docs/en/docs/advanced/sub-applications.md`

. PR[#12806](https://github.com/fastapi/fastapi/pull/12806)by[@zhaohan-dong](https://github.com/zhaohan-dong). - 📝 Update includes in
`docs/en/docs/advanced/response-headers.md`

. PR[#12805](https://github.com/fastapi/fastapi/pull/12805)by[@zhaohan-dong](https://github.com/zhaohan-dong). - 📝 Update includes in
`docs/fr/docs/tutorial/first-steps.md`

. PR[#12594](https://github.com/fastapi/fastapi/pull/12594)by[@kantandane](https://github.com/kantandane). - 📝 Update includes in
`docs/en/docs/advanced/response-cookies.md`

. PR[#12804](https://github.com/fastapi/fastapi/pull/12804)by[@zhaohan-dong](https://github.com/zhaohan-dong). - 📝 Update includes in
`docs/en/docs/advanced/path-operation-advanced-configuration.md`

. PR[#12802](https://github.com/fastapi/fastapi/pull/12802)by[@zhaohan-dong](https://github.com/zhaohan-dong). - 📝 Update includes for
`docs/en/docs/advanced/response-directly.md`

. PR[#12803](https://github.com/fastapi/fastapi/pull/12803)by[@handabaldeep](https://github.com/handabaldeep). - 📝 Update includes in
`docs/zh/docs/tutorial/background-tasks.md`

. PR[#12798](https://github.com/fastapi/fastapi/pull/12798)by[@zhaohan-dong](https://github.com/zhaohan-dong). - 📝 Update includes for
`docs/de/docs/tutorial/body-multiple-params.md`

. PR[#12699](https://github.com/fastapi/fastapi/pull/12699)by[@alissadb](https://github.com/alissadb). - 📝 Update includes in
`docs/em/docs/tutorial/body-updates.md`

. PR[#12799](https://github.com/fastapi/fastapi/pull/12799)by[@AlexWendland](https://github.com/AlexWendland). - 📝 Update includes
`docs/en/docs/advanced/response-change-status-code.md`

. PR[#12801](https://github.com/fastapi/fastapi/pull/12801)by[@handabaldeep](https://github.com/handabaldeep). - 📝 Update includes
`docs/en/docs/advanced/openapi-callbacks.md`

. PR[#12800](https://github.com/fastapi/fastapi/pull/12800)by[@handabaldeep](https://github.com/handabaldeep). - 📝 Update includes in
`docs/fr/docs/tutorial/body-multiple-params.md`

. PR[#12598](https://github.com/fastapi/fastapi/pull/12598)by[@kantandane](https://github.com/kantandane). - 📝 Update includes in
`docs/en/docs/tutorial/body-multiple-params.md`

. PR[#12593](https://github.com/fastapi/fastapi/pull/12593)by[@Tashanam-Shahbaz](https://github.com/Tashanam-Shahbaz). - 📝 Update includes in
`docs/pt/docs/tutorial/background-tasks.md`

. PR[#12736](https://github.com/fastapi/fastapi/pull/12736)by[@bhunao](https://github.com/bhunao). - 📝 Update includes for
`docs/en/docs/advanced/custom-response.md`

. PR[#12797](https://github.com/fastapi/fastapi/pull/12797)by[@handabaldeep](https://github.com/handabaldeep). - 📝 Update includes for
`docs/pt/docs/python-types.md`

. PR[#12671](https://github.com/fastapi/fastapi/pull/12671)by[@ceb10n](https://github.com/ceb10n). - 📝 Update includes for
`docs/de/docs/python-types.md`

. PR[#12660](https://github.com/fastapi/fastapi/pull/12660)by[@alissadb](https://github.com/alissadb). - 📝 Update includes for
`docs/de/docs/advanced/dataclasses.md`

. PR[#12658](https://github.com/fastapi/fastapi/pull/12658)by[@alissadb](https://github.com/alissadb). - 📝 Update includes in
`docs/fr/docs/tutorial/path-params.md`

. PR[#12592](https://github.com/fastapi/fastapi/pull/12592)by[@kantandane](https://github.com/kantandane). - 📝 Update includes for
`docs/de/docs/how-to/configure-swagger-ui.md`

. PR[#12690](https://github.com/fastapi/fastapi/pull/12690)by[@alissadb](https://github.com/alissadb). - 📝 Update includes in
`docs/en/docs/advanced/security/oauth2-scopes.md`

. PR[#12572](https://github.com/fastapi/fastapi/pull/12572)by[@krishnamadhavan](https://github.com/krishnamadhavan). - 📝 Update includes for
`docs/en/docs/how-to/conditional-openapi.md`

. PR[#12624](https://github.com/fastapi/fastapi/pull/12624)by[@rabinlamadong](https://github.com/rabinlamadong). - 📝 Update includes in
`docs/en/docs/tutorial/dependencies/index.md`

. PR[#12615](https://github.com/fastapi/fastapi/pull/12615)by[@bharara](https://github.com/bharara). - 📝 Update includes in
`docs/en/docs/tutorial/response-status-code.md`

. PR[#12620](https://github.com/fastapi/fastapi/pull/12620)by[@kantandane](https://github.com/kantandane). - 📝 Update includes in
`docs/en/docs/how-to/custom-docs-ui-assets.md`

. PR[#12623](https://github.com/fastapi/fastapi/pull/12623)by[@rabinlamadong](https://github.com/rabinlamadong). - 📝 Update includes in
`docs/en/docs/advanced/openapi-webhooks.md`

. PR[#12605](https://github.com/fastapi/fastapi/pull/12605)by[@salmantec](https://github.com/salmantec). - 📝 Update includes in
`docs/en/docs/advanced/events.md`

. PR[#12604](https://github.com/fastapi/fastapi/pull/12604)by[@salmantec](https://github.com/salmantec). - 📝 Update includes in
`docs/en/docs/advanced/dataclasses.md`

. PR[#12603](https://github.com/fastapi/fastapi/pull/12603)by[@salmantec](https://github.com/salmantec). - 📝 Update includes in
`docs/es/docs/tutorial/cookie-params.md`

. PR[#12602](https://github.com/fastapi/fastapi/pull/12602)by[@antonyare93](https://github.com/antonyare93). - 📝 Update includes in
`docs/fr/docs/tutorial/path-params-numeric-validations.md`

. PR[#12601](https://github.com/fastapi/fastapi/pull/12601)by[@kantandane](https://github.com/kantandane). - 📝 Update includes in
`docs/fr/docs/tutorial/background-tasks.md`

. PR[#12600](https://github.com/fastapi/fastapi/pull/12600)by[@kantandane](https://github.com/kantandane). - 📝 Update includes in
`docs/en/docs/tutorial/encoder.md`

. PR[#12597](https://github.com/fastapi/fastapi/pull/12597)by[@tonyjly](https://github.com/tonyjly). - 📝 Update includes in
`docs/en/docs/how-to/custom-docs-ui-assets.md`

. PR[#12557](https://github.com/fastapi/fastapi/pull/12557)by[@philipokiokio](https://github.com/philipokiokio). - 🎨 Adjust spacing. PR
[#12635](https://github.com/fastapi/fastapi/pull/12635)by[@alejsdev](https://github.com/alejsdev). - 📝 Update includes in
`docs/en/docs/how-to/custom-request-and-route.md`

. PR[#12560](https://github.com/fastapi/fastapi/pull/12560)by[@philipokiokio](https://github.com/philipokiokio).

### Translations[¶](#translations_29)

- 🌐 Add Korean translation for
`docs/ko/docs/advanced/testing-websockets.md`

. PR[#12739](https://github.com/fastapi/fastapi/pull/12739)by[@Limsunoh](https://github.com/Limsunoh). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/environment-variables.md`

. PR[#12785](https://github.com/fastapi/fastapi/pull/12785)by[@Vincy1230](https://github.com/Vincy1230). - 🌐 Add Chinese translation for
`docs/zh/docs/environment-variables.md`

. PR[#12784](https://github.com/fastapi/fastapi/pull/12784)by[@Vincy1230](https://github.com/Vincy1230). - 🌐 Add Korean translation for
`ko/docs/advanced/response-headers.md`

. PR[#12740](https://github.com/fastapi/fastapi/pull/12740)by[@kwang1215](https://github.com/kwang1215). - 🌐 Add Chinese translation for
`docs/zh/docs/virtual-environments.md`

. PR[#12790](https://github.com/fastapi/fastapi/pull/12790)by[@Vincy1230](https://github.com/Vincy1230). - 🌐 Add Korean translation for
`/docs/ko/docs/environment-variables.md`

. PR[#12526](https://github.com/fastapi/fastapi/pull/12526)by[@Tolerblanc](https://github.com/Tolerblanc). - 🌐 Add Korean translation for
`docs/ko/docs/history-design-future.md`

. PR[#12646](https://github.com/fastapi/fastapi/pull/12646)by[@saeye](https://github.com/saeye). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/advanced-dependencies.md`

. PR[#12675](https://github.com/fastapi/fastapi/pull/12675)by[@kim-sangah](https://github.com/kim-sangah). - 🌐 Add Korean translation for
`docs/ko/docs/how-to/conditional-openapi.md`

. PR[#12731](https://github.com/fastapi/fastapi/pull/12731)by[@sptcnl](https://github.com/sptcnl). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/using_request_directly.md`

. PR[#12738](https://github.com/fastapi/fastapi/pull/12738)by[@kwang1215](https://github.com/kwang1215). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/testing-events.md`

. PR[#12741](https://github.com/fastapi/fastapi/pull/12741)by[@9zimin9](https://github.com/9zimin9). - 🌐 Add Korean translation for
`docs/ko/docs/security/index.md`

. PR[#12743](https://github.com/fastapi/fastapi/pull/12743)by[@kim-sangah](https://github.com/kim-sangah). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/path-operation-advanced-configuration.md`

. PR[#12762](https://github.com/fastapi/fastapi/pull/12762)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/wsgi.md`

. PR[#12659](https://github.com/fastapi/fastapi/pull/12659)by[@Limsunoh](https://github.com/Limsunoh). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/websockets.md`

. PR[#12703](https://github.com/fastapi/fastapi/pull/12703)by[@devfernandoa](https://github.com/devfernandoa). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/security/simple-oauth2.md`

. PR[#12520](https://github.com/fastapi/fastapi/pull/12520)by[@LidiaDomingos](https://github.com/LidiaDomingos). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/response-directly.md`

. PR[#12674](https://github.com/fastapi/fastapi/pull/12674)by[@9zimin9](https://github.com/9zimin9). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/middleware.md`

. PR[#12704](https://github.com/fastapi/fastapi/pull/12704)by[@devluisrodrigues](https://github.com/devluisrodrigues). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/openapi-callbacks.md`

. PR[#12705](https://github.com/fastapi/fastapi/pull/12705)by[@devfernandoa](https://github.com/devfernandoa). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/request-files.md`

. PR[#12706](https://github.com/fastapi/fastapi/pull/12706)by[@devluisrodrigues](https://github.com/devluisrodrigues). - 🌐 Add Portuguese Translation for
`docs/pt/docs/advanced/custom-response.md`

. PR[#12631](https://github.com/fastapi/fastapi/pull/12631)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/metadata.md`

. PR[#12538](https://github.com/fastapi/fastapi/pull/12538)by[@LinkolnR](https://github.com/LinkolnR). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/metadata.md`

. PR[#12541](https://github.com/fastapi/fastapi/pull/12541)by[@kwang1215](https://github.com/kwang1215). - 🌐 Add Korean Translation for
`docs/ko/docs/advanced/response-cookies.md`

. PR[#12546](https://github.com/fastapi/fastapi/pull/12546)by[@kim-sangah](https://github.com/kim-sangah). - 🌐 Add Korean translation for
`docs/ko/docs/fastapi-cli.md`

. PR[#12515](https://github.com/fastapi/fastapi/pull/12515)by[@dhdld](https://github.com/dhdld). - 🌐 Add Korean Translation for
`docs/ko/docs/advanced/response-change-status-code.md`

. PR[#12547](https://github.com/fastapi/fastapi/pull/12547)by[@9zimin9](https://github.com/9zimin9).

### Internal[¶](#internal_50)

- ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12907](https://github.com/fastapi/fastapi/pull/12907)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 🔨 Update docs preview script to show previous version and English version. PR
[#12856](https://github.com/fastapi/fastapi/pull/12856)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump tiangolo/latest-changes from 0.3.1 to 0.3.2. PR
[#12794](https://github.com/fastapi/fastapi/pull/12794)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pypa/gh-action-pypi-publish from 1.12.0 to 1.12.2. PR
[#12788](https://github.com/fastapi/fastapi/pull/12788)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pypa/gh-action-pypi-publish from 1.11.0 to 1.12.0. PR
[#12781](https://github.com/fastapi/fastapi/pull/12781)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump cloudflare/wrangler-action from 3.11 to 3.12. PR
[#12777](https://github.com/fastapi/fastapi/pull/12777)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12766](https://github.com/fastapi/fastapi/pull/12766)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Bump pypa/gh-action-pypi-publish from 1.10.3 to 1.11.0. PR
[#12721](https://github.com/fastapi/fastapi/pull/12721)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Update pre-commit requirement from <4.0.0,>=2.17.0 to >=2.17.0,<5.0.0. PR
[#12749](https://github.com/fastapi/fastapi/pull/12749)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump typer from 0.12.3 to 0.12.5. PR
[#12748](https://github.com/fastapi/fastapi/pull/12748)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Update flask requirement from <3.0.0,>=1.1.2 to >=1.1.2,<4.0.0. PR
[#12747](https://github.com/fastapi/fastapi/pull/12747)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pillow from 10.4.0 to 11.0.0. PR
[#12746](https://github.com/fastapi/fastapi/pull/12746)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Update pytest requirement from <8.0.0,>=7.1.3 to >=7.1.3,<9.0.0. PR
[#12745](https://github.com/fastapi/fastapi/pull/12745)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Update sponsors: add Render. PR
[#12733](https://github.com/fastapi/fastapi/pull/12733)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12707](https://github.com/fastapi/fastapi/pull/12707)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci).

## 0.115.4 (2024-10-27)[¶](#01154-2024-10-27)

### Refactors[¶](#refactors_20)

- ♻️ Update logic to import and check
`python-multipart`

for compatibility with newer version. PR[#12627](https://github.com/fastapi/fastapi/pull/12627)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_36)

- 📝 Update includes in
`docs/fr/docs/tutorial/body.md`

. PR[#12596](https://github.com/fastapi/fastapi/pull/12596)by[@kantandane](https://github.com/kantandane). - 📝 Update includes in
`docs/fr/docs/tutorial/debugging.md`

. PR[#12595](https://github.com/fastapi/fastapi/pull/12595)by[@kantandane](https://github.com/kantandane). - 📝 Update includes in
`docs/fr/docs/tutorial/query-params-str-validations.md`

. PR[#12591](https://github.com/fastapi/fastapi/pull/12591)by[@kantandane](https://github.com/kantandane). - 📝 Update includes in
`docs/fr/docs/tutorial/query-params.md`

. PR[#12589](https://github.com/fastapi/fastapi/pull/12589)by[@kantandane](https://github.com/kantandane). - 📝 Update includes in
`docs/en/tutorial/body-fields.md`

. PR[#12588](https://github.com/fastapi/fastapi/pull/12588)by[@lucaromagnoli](https://github.com/lucaromagnoli). - 📝 Update includes in
`docs/de/docs/tutorial/response-status-code.md`

. PR[#12585](https://github.com/fastapi/fastapi/pull/12585)by[@abejaranoh](https://github.com/abejaranoh). - 📝 Update includes in
`docs/en/docs/tutorial/body.md`

. PR[#12586](https://github.com/fastapi/fastapi/pull/12586)by[@lucaromagnoli](https://github.com/lucaromagnoli). - 📝 Update includes in
`docs/en/docs/advanced/behind-a-proxy.md`

. PR[#12583](https://github.com/fastapi/fastapi/pull/12583)by[@imjuanleonard](https://github.com/imjuanleonard). - 📝 Update includes syntax for
`docs/pl/docs/tutorial/first-steps.md`

. PR[#12584](https://github.com/fastapi/fastapi/pull/12584)by[@sebkozlo](https://github.com/sebkozlo). - 📝 Update includes in
`docs/en/docs/advanced/middleware.md`

. PR[#12582](https://github.com/fastapi/fastapi/pull/12582)by[@montanarograziano](https://github.com/montanarograziano). - 📝 Update includes in
`docs/en/docs/advanced/additional-status-codes.md`

. PR[#12577](https://github.com/fastapi/fastapi/pull/12577)by[@krishnamadhavan](https://github.com/krishnamadhavan). - 📝 Update includes in
`docs/en/docs/advanced/advanced-dependencies.md`

. PR[#12578](https://github.com/fastapi/fastapi/pull/12578)by[@krishnamadhavan](https://github.com/krishnamadhavan). - 📝 Update includes in
`docs/en/docs/advanced/additional-responses.md`

. PR[#12576](https://github.com/fastapi/fastapi/pull/12576)by[@krishnamadhavan](https://github.com/krishnamadhavan). - 📝 Update includes in
`docs/en/docs/tutorial/static-files.md`

. PR[#12575](https://github.com/fastapi/fastapi/pull/12575)by[@lucaromagnoli](https://github.com/lucaromagnoli). - 📝 Update includes in
`docs/en/docs/advanced/async-tests.md`

. PR[#12568](https://github.com/fastapi/fastapi/pull/12568)by[@krishnamadhavan](https://github.com/krishnamadhavan). - 📝 Update includes in
`docs/pt/docs/advanced/behind-a-proxy.md`

. PR[#12563](https://github.com/fastapi/fastapi/pull/12563)by[@asmioglou](https://github.com/asmioglou). - 📝 Update includes in
`docs/de/docs/advanced/security/http-basic-auth.md`

. PR[#12561](https://github.com/fastapi/fastapi/pull/12561)by[@Nimitha-jagadeesha](https://github.com/Nimitha-jagadeesha). - 📝 Update includes in
`docs/en/docs/tutorial/background-tasks.md`

. PR[#12559](https://github.com/fastapi/fastapi/pull/12559)by[@FarhanAliRaza](https://github.com/FarhanAliRaza). - 📝 Update includes in
`docs/fr/docs/python-types.md`

. PR[#12558](https://github.com/fastapi/fastapi/pull/12558)by[@Ismailtlem](https://github.com/Ismailtlem). - 📝 Update includes in
`docs/en/docs/how-to/graphql.md`

. PR[#12564](https://github.com/fastapi/fastapi/pull/12564)by[@philipokiokio](https://github.com/philipokiokio). - 📝 Update includes in
`docs/en/docs/how-to/extending-openapi.md`

. PR[#12562](https://github.com/fastapi/fastapi/pull/12562)by[@philipokiokio](https://github.com/philipokiokio). - 📝 Update includes for
`docs/en/docs/how-to/configure-swagger-ui.md`

. PR[#12556](https://github.com/fastapi/fastapi/pull/12556)by[@tiangolo](https://github.com/tiangolo). - 📝 Update includes for
`docs/en/docs/how-to/separate-openapi-schemas.md`

. PR[#12555](https://github.com/fastapi/fastapi/pull/12555)by[@tiangolo](https://github.com/tiangolo). - 📝 Update includes for
`docs/en/docs/advanced/security/http-basic-auth.md`

. PR[#12553](https://github.com/fastapi/fastapi/pull/12553)by[@tiangolo](https://github.com/tiangolo). - 📝 Update includes in
`docs/en/docs/tutorial/first-steps.md`

. PR[#12552](https://github.com/fastapi/fastapi/pull/12552)by[@tiangolo](https://github.com/tiangolo). - 📝 Update includes in
`docs/en/docs/python-types.md`

. PR[#12551](https://github.com/fastapi/fastapi/pull/12551)by[@tiangolo](https://github.com/tiangolo). - 📝 Fix link in OAuth2 docs. PR
[#12550](https://github.com/fastapi/fastapi/pull/12550)by[@tiangolo](https://github.com/tiangolo). - 📝 Add External Link: FastAPI do Zero. PR
[#12533](https://github.com/fastapi/fastapi/pull/12533)by[@rennerocha](https://github.com/rennerocha). - 📝 Fix minor typos. PR
[#12516](https://github.com/fastapi/fastapi/pull/12516)by[@kkirsche](https://github.com/kkirsche). - 🌐 Fix rendering issue in translations. PR
[#12509](https://github.com/fastapi/fastapi/pull/12509)by[@alejsdev](https://github.com/alejsdev).

### Translations[¶](#translations_30)

- 📝 Update includes in
`docs/de/docs/advanced/async-tests.md`

. PR[#12567](https://github.com/fastapi/fastapi/pull/12567)by[@imjuanleonard](https://github.com/imjuanleonard). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/sql-databases.md`

. PR[#12530](https://github.com/fastapi/fastapi/pull/12530)by[@ilacftemp](https://github.com/ilacftemp). - 🌐 Add Korean translation for
`docs/ko/docs/benchmarks.md`

. PR[#12540](https://github.com/fastapi/fastapi/pull/12540)by[@Limsunoh](https://github.com/Limsunoh). - 🌐 Add Portuguese translation for
`docs/pt/docs/how-to/separate-openapi-schemas.md`

. PR[#12518](https://github.com/fastapi/fastapi/pull/12518)by[@ilacftemp](https://github.com/ilacftemp). - 🌐 Update Traditional Chinese translation for
`docs/zh-hant/docs/deployment/index.md`

. PR[#12521](https://github.com/fastapi/fastapi/pull/12521)by[@codingjenny](https://github.com/codingjenny). - 🌐 Update Traditional Chinese translation for
`docs/zh-hant/docs/deployment/cloud.md`

. PR[#12522](https://github.com/fastapi/fastapi/pull/12522)by[@codingjenny](https://github.com/codingjenny). - 🌐 Update Traditional Chinese translation for
`docs/zh-hant/docs/how-to/index.md`

. PR[#12523](https://github.com/fastapi/fastapi/pull/12523)by[@codingjenny](https://github.com/codingjenny). - 🌐 Update Traditional Chinese translation for
`docs/zh-hant/docs/tutorial/index.md`

. PR[#12524](https://github.com/fastapi/fastapi/pull/12524)by[@codingjenny](https://github.com/codingjenny). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/how-to/index.md`

. PR[#12468](https://github.com/fastapi/fastapi/pull/12468)by[@codingjenny](https://github.com/codingjenny). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/tutorial/index.md`

. PR[#12466](https://github.com/fastapi/fastapi/pull/12466)by[@codingjenny](https://github.com/codingjenny). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/header-param-models.md`

. PR[#12437](https://github.com/fastapi/fastapi/pull/12437)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Add Portuguese translation for
`docs/pt/docs/how-to/extending-openapi.md`

. PR[#12470](https://github.com/fastapi/fastapi/pull/12470)by[@ilacftemp](https://github.com/ilacftemp). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/dataclasses.md`

. PR[#12475](https://github.com/fastapi/fastapi/pull/12475)by[@leoscarlato](https://github.com/leoscarlato). - 🌐 Add Portuguese translation for
`docs/pt/docs/how-to/custom-request-and-route.md`

. PR[#12483](https://github.com/fastapi/fastapi/pull/12483)by[@devfernandoa](https://github.com/devfernandoa).

### Internal[¶](#internal_51)

- ⬆ Bump cloudflare/wrangler-action from 3.9 to 3.11. PR
[#12544](https://github.com/fastapi/fastapi/pull/12544)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👷 Update GitHub Action to deploy docs previews to handle missing deploy comments. PR
[#12527](https://github.com/fastapi/fastapi/pull/12527)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12505](https://github.com/fastapi/fastapi/pull/12505)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci).

## 0.115.3 (2024-10-22)[¶](#01153-2024-10-22)

### Upgrades[¶](#upgrades_13)

### Docs[¶](#docs_37)

- 📝 Fix broken link in docs. PR
[#12495](https://github.com/fastapi/fastapi/pull/12495)by[@eltonjncorreia](https://github.com/eltonjncorreia).

### Translations[¶](#translations_31)

- 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/fastapi-cli.md`

. PR[#12444](https://github.com/fastapi/fastapi/pull/12444)by[@codingjenny](https://github.com/codingjenny). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/deployment/index.md`

. PR[#12439](https://github.com/fastapi/fastapi/pull/12439)by[@codingjenny](https://github.com/codingjenny). - 🌐 Add Portuguese translation for
`docs/pt/docs/how-to/testing-database.md`

. PR[#12472](https://github.com/fastapi/fastapi/pull/12472)by[@GuilhermeRameh](https://github.com/GuilhermeRameh). - 🌐 Add Portuguese translation for
`docs/pt/docs/how-to/custom-docs-ui-assets.md`

. PR[#12473](https://github.com/fastapi/fastapi/pull/12473)by[@devluisrodrigues](https://github.com/devluisrodrigues). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/response-headers.md`

. PR[#12458](https://github.com/fastapi/fastapi/pull/12458)by[@leonardopaloschi](https://github.com/leonardopaloschi). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/deployment/cloud.md`

. PR[#12440](https://github.com/fastapi/fastapi/pull/12440)by[@codingjenny](https://github.com/codingjenny). - 🌐 Update Portuguese translation for
`docs/pt/docs/python-types.md`

. PR[#12428](https://github.com/fastapi/fastapi/pull/12428)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Russian translation for
`docs/ru/docs/environment-variables.md`

. PR[#12436](https://github.com/fastapi/fastapi/pull/12436)by[@wisderfin](https://github.com/wisderfin). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/resources/index.md`

. PR[#12443](https://github.com/fastapi/fastapi/pull/12443)by[@codingjenny](https://github.com/codingjenny). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/about/index.md`

. PR[#12438](https://github.com/fastapi/fastapi/pull/12438)by[@codingjenny](https://github.com/codingjenny). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/query-param-models.md`

. PR[#12414](https://github.com/fastapi/fastapi/pull/12414)by[@ceb10n](https://github.com/ceb10n). - 🌐 Remove Portuguese translation for
`docs/pt/docs/deployment.md`

. PR[#12427](https://github.com/fastapi/fastapi/pull/12427)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/body-updates.md`

. PR[#12381](https://github.com/fastapi/fastapi/pull/12381)by[@andersonrocha0](https://github.com/andersonrocha0). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/response-cookies.md`

. PR[#12417](https://github.com/fastapi/fastapi/pull/12417)by[@Paulofalcao2002](https://github.com/Paulofalcao2002).

### Internal[¶](#internal_52)

- 👷 Update issue manager workflow . PR
[#12457](https://github.com/fastapi/fastapi/pull/12457)by[@alejsdev](https://github.com/alejsdev). - 🔧 Update team, include YuriiMotov 🚀. PR
[#12453](https://github.com/fastapi/fastapi/pull/12453)by[@tiangolo](https://github.com/tiangolo). - 👷 Refactor label-approved, make it an internal script instead of an external GitHub Action. PR
[#12280](https://github.com/fastapi/fastapi/pull/12280)by[@tiangolo](https://github.com/tiangolo). - 👷 Fix smokeshow, checkout files on CI. PR
[#12434](https://github.com/fastapi/fastapi/pull/12434)by[@tiangolo](https://github.com/tiangolo). - 👷 Use uv in CI. PR
[#12281](https://github.com/fastapi/fastapi/pull/12281)by[@tiangolo](https://github.com/tiangolo). - ⬆ Update httpx requirement from <0.25.0,>=0.23.0 to >=0.23.0,<0.28.0. PR
[#11509](https://github.com/fastapi/fastapi/pull/11509)by[@dependabot[bot]](https://github.com/apps/dependabot).

## 0.115.2 (2024-10-12)[¶](#01152-2024-10-12)

### Upgrades[¶](#upgrades_14)

## 0.115.1 (2024-10-12)[¶](#01151-2024-10-12)

### Fixes[¶](#fixes_39)

- 🐛 Fix openapi generation with responses kwarg. PR
[#10895](https://github.com/fastapi/fastapi/pull/10895)by[@flxdot](https://github.com/flxdot). - 🐛 Remove
`Required`

shadowing from fastapi using Pydantic v2. PR[#12197](https://github.com/fastapi/fastapi/pull/12197)by[@pachewise](https://github.com/pachewise).

### Refactors[¶](#refactors_21)

### Docs[¶](#docs_38)

- ✨ Add new tutorial for SQL databases with SQLModel. PR
[#12285](https://github.com/fastapi/fastapi/pull/12285)by[@tiangolo](https://github.com/tiangolo). - 📝 Add External Link: How to profile a FastAPI asynchronous request. PR
[#12389](https://github.com/fastapi/fastapi/pull/12389)by[@brouberol](https://github.com/brouberol). - 🔧 Remove
`base_path`

for`mdx_include`

Markdown extension in MkDocs. PR[#12391](https://github.com/fastapi/fastapi/pull/12391)by[@tiangolo](https://github.com/tiangolo). - 📝 Update link to Swagger UI configuration docs. PR
[#12264](https://github.com/fastapi/fastapi/pull/12264)by[@makisukurisu](https://github.com/makisukurisu). - 📝 Adding links for Playwright and Vite in
`docs/project-generation.md`

. PR[#12274](https://github.com/fastapi/fastapi/pull/12274)by[@kayqueGovetri](https://github.com/kayqueGovetri). - 📝 Fix small typos in the documentation. PR
[#12213](https://github.com/fastapi/fastapi/pull/12213)by[@svlandeg](https://github.com/svlandeg).

### Translations[¶](#translations_32)

- 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/cookie-param-models.md`

. PR[#12298](https://github.com/fastapi/fastapi/pull/12298)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Portuguese translation for
`docs/pt/docs/how-to/graphql.md`

. PR[#12215](https://github.com/fastapi/fastapi/pull/12215)by[@AnandaCampelo](https://github.com/AnandaCampelo). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/security/oauth2-scopes.md`

. PR[#12263](https://github.com/fastapi/fastapi/pull/12263)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Portuguese translation for
`docs/pt/docs/deployment/concepts.md`

. PR[#12219](https://github.com/fastapi/fastapi/pull/12219)by[@marcelomarkus](https://github.com/marcelomarkus). - 🌐 Add Portuguese translation for
`docs/pt/docs/how-to/conditional-openapi.md`

. PR[#12221](https://github.com/fastapi/fastapi/pull/12221)by[@marcelomarkus](https://github.com/marcelomarkus). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/response-directly.md`

. PR[#12266](https://github.com/fastapi/fastapi/pull/12266)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Update Portuguese translation for
`docs/pt/docs/tutorial/cookie-params.md`

. PR[#12297](https://github.com/fastapi/fastapi/pull/12297)by[@ceb10n](https://github.com/ceb10n). - 🌐 Fix Korean translation for
`docs/ko/docs/tutorial/index.md`

. PR[#12278](https://github.com/fastapi/fastapi/pull/12278)by[@kkotipy](https://github.com/kkotipy). - 🌐 Update Portuguese translation for
`docs/pt/docs/advanced/security/http-basic-auth.md`

. PR[#12275](https://github.com/fastapi/fastapi/pull/12275)by[@andersonrocha0](https://github.com/andersonrocha0). - 🌐 Add Portuguese translation for
`docs/pt/docs/deployment/cloud.md`

. PR[#12217](https://github.com/fastapi/fastapi/pull/12217)by[@marcelomarkus](https://github.com/marcelomarkus). - ✏️ Fix typo in
`docs/es/docs/python-types.md`

. PR[#12235](https://github.com/fastapi/fastapi/pull/12235)by[@JavierSanchezCastro](https://github.com/JavierSanchezCastro). - 🌐 Add Dutch translation for
`docs/nl/docs/environment-variables.md`

. PR[#12200](https://github.com/fastapi/fastapi/pull/12200)by[@maxscheijen](https://github.com/maxscheijen). - 🌐 Add Portuguese translation for
`docs/pt/docs/deployment/manually.md`

. PR[#12210](https://github.com/fastapi/fastapi/pull/12210)by[@JoaoGustavoRogel](https://github.com/JoaoGustavoRogel). - 🌐 Add Portuguese translation for
`docs/pt/docs/deployment/server-workers.md`

. PR[#12220](https://github.com/fastapi/fastapi/pull/12220)by[@marcelomarkus](https://github.com/marcelomarkus). - 🌐 Add Portuguese translation for
`docs/pt/docs/how-to/configure-swagger-ui.md`

. PR[#12222](https://github.com/fastapi/fastapi/pull/12222)by[@marcelomarkus](https://github.com/marcelomarkus).

### Internal[¶](#internal_53)

- ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12396](https://github.com/fastapi/fastapi/pull/12396)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 🔨 Add script to generate variants of files. PR
[#12405](https://github.com/fastapi/fastapi/pull/12405)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add speakeasy-api to
`sponsors_badge.yml`

. PR[#12404](https://github.com/fastapi/fastapi/pull/12404)by[@tiangolo](https://github.com/tiangolo). - ➕ Add docs dependency: markdown-include-variants. PR
[#12399](https://github.com/fastapi/fastapi/pull/12399)by[@tiangolo](https://github.com/tiangolo). - 📝 Fix extra mdx-base-path paths. PR
[#12397](https://github.com/fastapi/fastapi/pull/12397)by[@tiangolo](https://github.com/tiangolo). - 👷 Tweak labeler to not override custom labels. PR
[#12398](https://github.com/fastapi/fastapi/pull/12398)by[@tiangolo](https://github.com/tiangolo). - 👷 Update worfkow deploy-docs-notify URL. PR
[#12392](https://github.com/fastapi/fastapi/pull/12392)by[@tiangolo](https://github.com/tiangolo). - 👷 Update Cloudflare GitHub Action. PR
[#12387](https://github.com/fastapi/fastapi/pull/12387)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump pypa/gh-action-pypi-publish from 1.10.1 to 1.10.3. PR
[#12386](https://github.com/fastapi/fastapi/pull/12386)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump mkdocstrings[python] from 0.25.1 to 0.26.1. PR
[#12371](https://github.com/fastapi/fastapi/pull/12371)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump griffe-typingdoc from 0.2.6 to 0.2.7. PR
[#12370](https://github.com/fastapi/fastapi/pull/12370)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12331](https://github.com/fastapi/fastapi/pull/12331)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 🔧 Update sponsors, remove Fine.dev. PR
[#12271](https://github.com/fastapi/fastapi/pull/12271)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12253](https://github.com/fastapi/fastapi/pull/12253)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ✏️ Fix docstring typos in http security. PR
[#12223](https://github.com/fastapi/fastapi/pull/12223)by[@albertvillanova](https://github.com/albertvillanova).

## 0.115.0 (2024-09-17)[¶](#01150-2024-09-17)

### Highlights[¶](#highlights)

Now you can declare `Query`

, `Header`

, and `Cookie`

parameters with Pydantic models. 🎉

`Query`

Parameter Models[¶](#query-parameter-models)

Use Pydantic models for `Query`

parameters:

```
from typing import Annotated, Literal
from fastapi import FastAPI, Query
from pydantic import BaseModel, Field
app = FastAPI()
class FilterParams(BaseModel):
limit: int = Field(100, gt=0, le=100)
offset: int = Field(0, ge=0)
order_by: Literal["created_at", "updated_at"] = "created_at"
tags: list[str] = []
@app.get("/items/")
async def read_items(filter_query: Annotated[FilterParams, Query()]):
return filter_query
```


Read the new docs: [Query Parameter Models](https://fastapi.tiangolo.com/tutorial/query-param-models/).

`Header`

Parameter Models[¶](#header-parameter-models)

Use Pydantic models for `Header`

parameters:

```
from typing import Annotated
from fastapi import FastAPI, Header
from pydantic import BaseModel
app = FastAPI()
class CommonHeaders(BaseModel):
host: str
save_data: bool
if_modified_since: str | None = None
traceparent: str | None = None
x_tag: list[str] = []
@app.get("/items/")
async def read_items(headers: Annotated[CommonHeaders, Header()]):
return headers
```


Read the new docs: [Header Parameter Models](https://fastapi.tiangolo.com/tutorial/header-param-models/).

`Cookie`

Parameter Models[¶](#cookie-parameter-models)

Use Pydantic models for `Cookie`

parameters:

```
from typing import Annotated
from fastapi import Cookie, FastAPI
from pydantic import BaseModel
app = FastAPI()
class Cookies(BaseModel):
session_id: str
fatebook_tracker: str | None = None
googall_tracker: str | None = None
@app.get("/items/")
async def read_items(cookies: Annotated[Cookies, Cookie()]):
return cookies
```


Read the new docs: [Cookie Parameter Models](https://fastapi.tiangolo.com/tutorial/cookie-param-models/).

#### Forbid Extra Query (Cookie, Header) Parameters[¶](#forbid-extra-query-cookie-header-parameters)

Use Pydantic models to restrict extra values for `Query`

parameters (also applies to `Header`

and `Cookie`

parameters).

To achieve it, use Pydantic's `model_config = {"extra": "forbid"}`

:

```
from typing import Annotated, Literal
from fastapi import FastAPI, Query
from pydantic import BaseModel, Field
app = FastAPI()
class FilterParams(BaseModel):
model_config = {"extra": "forbid"}
limit: int = Field(100, gt=0, le=100)
offset: int = Field(0, ge=0)
order_by: Literal["created_at", "updated_at"] = "created_at"
tags: list[str] = []
@app.get("/items/")
async def read_items(filter_query: Annotated[FilterParams, Query()]):
return filter_query
```


This applies to `Query`

, `Header`

, and `Cookie`

parameters, read the new docs:

### Features[¶](#features_13)

- ✨ Add support for Pydantic models for parameters using
`Query`

,`Cookie`

,`Header`

. PR[#12199](https://github.com/fastapi/fastapi/pull/12199)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_33)

- 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/security/http-basic-auth.md`

. PR[#12195](https://github.com/fastapi/fastapi/pull/12195)by[@ceb10n](https://github.com/ceb10n).

### Internal[¶](#internal_54)

- ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12204](https://github.com/fastapi/fastapi/pull/12204)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci).

## 0.114.2 (2024-09-13)[¶](#01142-2024-09-13)

### Fixes[¶](#fixes_40)

- 🐛 Fix form field regression with
`alias`

. PR[#12194](https://github.com/fastapi/fastapi/pull/12194)by[@Wurstnase](https://github.com/Wurstnase).

### Translations[¶](#translations_34)

- 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/request-form-models.md`

. PR[#12175](https://github.com/fastapi/fastapi/pull/12175)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Chinese translation for
`docs/zh/docs/project-generation.md`

. PR[#12170](https://github.com/fastapi/fastapi/pull/12170)by[@waketzheng](https://github.com/waketzheng). - 🌐 Add Dutch translation for
`docs/nl/docs/python-types.md`

. PR[#12158](https://github.com/fastapi/fastapi/pull/12158)by[@maxscheijen](https://github.com/maxscheijen).

### Internal[¶](#internal_55)

- 💡 Add comments with instructions for Playwright screenshot scripts. PR
[#12193](https://github.com/fastapi/fastapi/pull/12193)by[@tiangolo](https://github.com/tiangolo). - ➕ Add inline-snapshot for tests. PR
[#12189](https://github.com/fastapi/fastapi/pull/12189)by[@tiangolo](https://github.com/tiangolo).

## 0.114.1 (2024-09-11)[¶](#01141-2024-09-11)

### Refactors[¶](#refactors_22)

- ⚡️ Improve performance in request body parsing with a cache for internal model fields. PR
[#12184](https://github.com/fastapi/fastapi/pull/12184)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_39)

### Translations[¶](#translations_35)

- 🌐 Add Portuguese translation for
`docs/pt/docs/virtual-environments.md`

. PR[#12163](https://github.com/fastapi/fastapi/pull/12163)by[@marcelomarkus](https://github.com/marcelomarkus). - 🌐 Add Portuguese translation for
`docs/pt/docs/environment-variables.md`

. PR[#12162](https://github.com/fastapi/fastapi/pull/12162)by[@marcelomarkus](https://github.com/marcelomarkus). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/testing.md`

. PR[#12164](https://github.com/fastapi/fastapi/pull/12164)by[@marcelomarkus](https://github.com/marcelomarkus). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/debugging.md`

. PR[#12165](https://github.com/fastapi/fastapi/pull/12165)by[@marcelomarkus](https://github.com/marcelomarkus). - 🌐 Add Korean translation for
`docs/ko/docs/project-generation.md`

. PR[#12157](https://github.com/fastapi/fastapi/pull/12157)by[@BORA040126](https://github.com/BORA040126).

### Internal[¶](#internal_56)

- ⬆ Bump tiangolo/issue-manager from 0.5.0 to 0.5.1. PR
[#12173](https://github.com/fastapi/fastapi/pull/12173)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12176](https://github.com/fastapi/fastapi/pull/12176)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 👷 Update
`issue-manager.yml`

. PR[#12159](https://github.com/fastapi/fastapi/pull/12159)by[@tiangolo](https://github.com/tiangolo). - ✏️ Fix typo in
`fastapi/params.py`

. PR[#12143](https://github.com/fastapi/fastapi/pull/12143)by[@surreal30](https://github.com/surreal30).

## 0.114.0 (2024-09-06)[¶](#01140-2024-09-06)

You can restrict form fields to only include those declared in a Pydantic model and forbid any extra field sent in the request using Pydantic's `model_config = {"extra": "forbid"}`

:

```
from typing import Annotated
from fastapi import FastAPI, Form
from pydantic import BaseModel
app = FastAPI()
class FormData(BaseModel):
username: str
password: str
model_config = {"extra": "forbid"}
@app.post("/login/")
async def login(data: Annotated[FormData, Form()]):
return data
```


Read the new docs: [Form Models - Forbid Extra Form Fields](https://fastapi.tiangolo.com/tutorial/request-form-models/#forbid-extra-form-fields).

### Features[¶](#features_14)

### Docs[¶](#docs_40)

### Internal[¶](#internal_57)

- ✅ Update internal tests for latest Pydantic, including CI tweaks to install the latest Pydantic. PR
[#12147](https://github.com/fastapi/fastapi/pull/12147)by[@tiangolo](https://github.com/tiangolo).

## 0.113.0 (2024-09-05)[¶](#01130-2024-09-05)

Now you can declare form fields with Pydantic models:

```
from typing import Annotated
from fastapi import FastAPI, Form
from pydantic import BaseModel
app = FastAPI()
class FormData(BaseModel):
username: str
password: str
@app.post("/login/")
async def login(data: Annotated[FormData, Form()]):
return data
```


Read the new docs: [Form Models](https://fastapi.tiangolo.com/tutorial/request-form-models/).

### Features[¶](#features_15)

### Internal[¶](#internal_58)

## 0.112.4 (2024-09-05)[¶](#01124-2024-09-05)

This release is mainly a big internal refactor to enable adding support for Pydantic models for `Form`

fields, but that feature comes in the next release.

This release shouldn't affect apps using FastAPI in any way. You don't even have to upgrade to this version yet. It's just a checkpoint. 🤓

### Refactors[¶](#refactors_23)

- ♻️ Refactor deciding if
`embed`

body fields, do not overwrite fields, compute once per router, refactor internals in preparation for Pydantic models in`Form`

,`Query`

and others. PR[#12117](https://github.com/fastapi/fastapi/pull/12117)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_59)

- ⏪️ Temporarily revert "✨ Add support for Pydantic models in
`Form`

parameters" to make a checkpoint release. PR[#12128](https://github.com/fastapi/fastapi/pull/12128)by[@tiangolo](https://github.com/tiangolo). Restored by PR[#12129](https://github.com/fastapi/fastapi/pull/12129). - ✨ Add support for Pydantic models in
`Form`

parameters. PR[#12127](https://github.com/fastapi/fastapi/pull/12127)by[@tiangolo](https://github.com/tiangolo). Reverted by PR[#12128](https://github.com/fastapi/fastapi/pull/12128)to make a checkpoint release with only refactors. Restored by PR[#12129](https://github.com/fastapi/fastapi/pull/12129).

## 0.112.3 (2024-09-05)[¶](#01123-2024-09-05)

This release is mainly internal refactors, it shouldn't affect apps using FastAPI in any way. You don't even have to upgrade to this version yet. There are a few bigger releases coming right after. 🚀

### Refactors[¶](#refactors_24)

- ♻️ Refactor internal
`check_file_field()`

, rename to`ensure_multipart_is_installed()`

to clarify its purpose. PR[#12106](https://github.com/fastapi/fastapi/pull/12106)by[@tiangolo](https://github.com/tiangolo). - ♻️ Rename internal
`create_response_field()`

to`create_model_field()`

as it's used for more than response models. PR[#12103](https://github.com/fastapi/fastapi/pull/12103)by[@tiangolo](https://github.com/tiangolo). - ♻️ Refactor and simplify internal data from
`solve_dependencies()`

using dataclasses. PR[#12100](https://github.com/fastapi/fastapi/pull/12100)by[@tiangolo](https://github.com/tiangolo). - ♻️ Refactor and simplify internal
`analyze_param()`

to structure data with dataclasses instead of tuple. PR[#12099](https://github.com/fastapi/fastapi/pull/12099)by[@tiangolo](https://github.com/tiangolo). - ♻️ Refactor and simplify dependencies data structures with dataclasses. PR
[#12098](https://github.com/fastapi/fastapi/pull/12098)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_41)

- 📝 Add External Link: Techniques and applications of SQLAlchemy global filters in FastAPI. PR
[#12109](https://github.com/fastapi/fastapi/pull/12109)by[@TheShubhendra](https://github.com/TheShubhendra). - 📝 Add note about
`time.perf_counter()`

in middlewares. PR[#12095](https://github.com/fastapi/fastapi/pull/12095)by[@tiangolo](https://github.com/tiangolo). - 📝 Tweak middleware code sample
`time.time()`

to`time.perf_counter()`

. PR[#11957](https://github.com/fastapi/fastapi/pull/11957)by[@domdent](https://github.com/domdent). - 🔧 Update sponsors: Coherence. PR
[#12093](https://github.com/fastapi/fastapi/pull/12093)by[@tiangolo](https://github.com/tiangolo). - 📝 Fix async test example not to trigger DeprecationWarning. PR
[#12084](https://github.com/fastapi/fastapi/pull/12084)by[@marcinsulikowski](https://github.com/marcinsulikowski). - 📝 Update
`docs_src/path_params_numeric_validations/tutorial006.py`

. PR[#11478](https://github.com/fastapi/fastapi/pull/11478)by[@MuhammadAshiqAmeer](https://github.com/MuhammadAshiqAmeer). - 📝 Update comma in
`docs/en/docs/async.md`

. PR[#12062](https://github.com/fastapi/fastapi/pull/12062)by[@Alec-Gillis](https://github.com/Alec-Gillis). - 📝 Update docs about serving FastAPI: ASGI servers, Docker containers, etc.. PR
[#12069](https://github.com/fastapi/fastapi/pull/12069)by[@tiangolo](https://github.com/tiangolo). - 📝 Clarify
`response_class`

parameter, validations, and returning a response directly. PR[#12067](https://github.com/fastapi/fastapi/pull/12067)by[@tiangolo](https://github.com/tiangolo). - 📝 Fix minor typos and issues in the documentation. PR
[#12063](https://github.com/fastapi/fastapi/pull/12063)by[@svlandeg](https://github.com/svlandeg). - 📝 Add note in Docker docs about ensuring graceful shutdowns and lifespan events with
`CMD`

exec form. PR[#11960](https://github.com/fastapi/fastapi/pull/11960)by[@GPla](https://github.com/GPla).

### Translations[¶](#translations_36)

- 🌐 Add Dutch translation for
`docs/nl/docs/features.md`

. PR[#12101](https://github.com/fastapi/fastapi/pull/12101)by[@maxscheijen](https://github.com/maxscheijen). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/testing-events.md`

. PR[#12108](https://github.com/fastapi/fastapi/pull/12108)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/security/index.md`

. PR[#12114](https://github.com/fastapi/fastapi/pull/12114)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Dutch translation for
`docs/nl/docs/index.md`

. PR[#12042](https://github.com/fastapi/fastapi/pull/12042)by[@svlandeg](https://github.com/svlandeg). - 🌐 Update Chinese translation for
`docs/zh/docs/how-to/index.md`

. PR[#12070](https://github.com/fastapi/fastapi/pull/12070)by[@synthpop123](https://github.com/synthpop123).

### Internal[¶](#internal_60)

- ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12115](https://github.com/fastapi/fastapi/pull/12115)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Bump pypa/gh-action-pypi-publish from 1.10.0 to 1.10.1. PR
[#12120](https://github.com/fastapi/fastapi/pull/12120)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pillow from 10.3.0 to 10.4.0. PR
[#12105](https://github.com/fastapi/fastapi/pull/12105)by[@dependabot[bot]](https://github.com/apps/dependabot). - 💚 Set
`include-hidden-files`

to`True`

when using the`upload-artifact`

GH action. PR[#12118](https://github.com/fastapi/fastapi/pull/12118)by[@svlandeg](https://github.com/svlandeg). - ⬆ Bump pypa/gh-action-pypi-publish from 1.9.0 to 1.10.0. PR
[#12112](https://github.com/fastapi/fastapi/pull/12112)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Update sponsors link: Coherence. PR
[#12097](https://github.com/fastapi/fastapi/pull/12097)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update labeler config to handle sponsorships data. PR
[#12096](https://github.com/fastapi/fastapi/pull/12096)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, remove Kong. PR
[#12085](https://github.com/fastapi/fastapi/pull/12085)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12076](https://github.com/fastapi/fastapi/pull/12076)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 👷 Update
`latest-changes`

GitHub Action. PR[#12073](https://github.com/fastapi/fastapi/pull/12073)by[@tiangolo](https://github.com/tiangolo).

## 0.112.2 (2024-08-24)[¶](#01122-2024-08-24)

### Fixes[¶](#fixes_41)

- 🐛 Fix
`allow_inf_nan`

option for Param and Body classes. PR[#11867](https://github.com/fastapi/fastapi/pull/11867)by[@giunio-prc](https://github.com/giunio-prc). - 🐛 Ensure that
`app.include_router`

merges nested lifespans. PR[#9630](https://github.com/fastapi/fastapi/pull/9630)by[@Lancetnik](https://github.com/Lancetnik).

### Refactors[¶](#refactors_25)

- 🎨 Fix typing annotation for semi-internal
`FastAPI.add_api_route()`

. PR[#10240](https://github.com/fastapi/fastapi/pull/10240)by[@ordinary-jamie](https://github.com/ordinary-jamie). - ⬆️ Upgrade version of Ruff and reformat. PR
[#12032](https://github.com/fastapi/fastapi/pull/12032)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_42)

- 📝 Fix a typo in
`docs/en/docs/virtual-environments.md`

. PR[#12064](https://github.com/fastapi/fastapi/pull/12064)by[@aymenkrifa](https://github.com/aymenkrifa). - 📝 Add docs about Environment Variables and Virtual Environments. PR
[#12054](https://github.com/fastapi/fastapi/pull/12054)by[@tiangolo](https://github.com/tiangolo). - 📝 Add Asyncer mention in async docs. PR
[#12037](https://github.com/fastapi/fastapi/pull/12037)by[@tiangolo](https://github.com/tiangolo). - 📝 Move the Features docs to the top level to improve the main page menu. PR
[#12036](https://github.com/fastapi/fastapi/pull/12036)by[@tiangolo](https://github.com/tiangolo). - ✏️ Fix import typo in reference example for
`Security`

. PR[#11168](https://github.com/fastapi/fastapi/pull/11168)by[@0shah0](https://github.com/0shah0). - 📝 Highlight correct line in tutorial
`docs/en/docs/tutorial/body-multiple-params.md`

. PR[#11978](https://github.com/fastapi/fastapi/pull/11978)by[@svlandeg](https://github.com/svlandeg). - 🔥 Remove Sentry link from Advanced Middleware docs. PR
[#12031](https://github.com/fastapi/fastapi/pull/12031)by[@alejsdev](https://github.com/alejsdev). - 📝 Clarify management tasks for translations, multiples files in one PR. PR
[#12030](https://github.com/fastapi/fastapi/pull/12030)by[@tiangolo](https://github.com/tiangolo). - 📝 Edit the link to the OpenAPI "Responses Object" and "Response Object" sections in the "Additional Responses in OpenAPI" section. PR
[#11996](https://github.com/fastapi/fastapi/pull/11996)by[@VaitoSoi](https://github.com/VaitoSoi). - 🔨 Specify
`email-validator`

dependency with dash. PR[#11515](https://github.com/fastapi/fastapi/pull/11515)by[@jirikuncar](https://github.com/jirikuncar). - 🌐 Add Spanish translation for
`docs/es/docs/project-generation.md`

. PR[#11947](https://github.com/fastapi/fastapi/pull/11947)by[@alejsdev](https://github.com/alejsdev). - 📝 Fix minor typo. PR
[#12026](https://github.com/fastapi/fastapi/pull/12026)by[@MicaelJarniac](https://github.com/MicaelJarniac). - 📝 Several docs improvements, tweaks, and clarifications. PR
[#11390](https://github.com/fastapi/fastapi/pull/11390)by[@nilslindemann](https://github.com/nilslindemann). - 📝 Add missing
`compresslevel`

parameter on docs for`GZipMiddleware`

. PR[#11350](https://github.com/fastapi/fastapi/pull/11350)by[@junah201](https://github.com/junah201). - 📝 Fix inconsistent response code when item already exists in docs for testing. PR
[#11818](https://github.com/fastapi/fastapi/pull/11818)by[@lokomilo](https://github.com/lokomilo). - 📝 Update
`docs/en/docs/tutorial/body.md`

with Python 3.10 union type example. PR[#11415](https://github.com/fastapi/fastapi/pull/11415)by[@rangzen](https://github.com/rangzen).

### Translations[¶](#translations_37)

- 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/request_file.md`

. PR[#12018](https://github.com/fastapi/fastapi/pull/12018)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Add Japanese translation for
`docs/ja/docs/learn/index.md`

. PR[#11592](https://github.com/fastapi/fastapi/pull/11592)by[@ukwhatn](https://github.com/ukwhatn). - 📝 Update Spanish translation docs for consistency. PR
[#12044](https://github.com/fastapi/fastapi/pull/12044)by[@alejsdev](https://github.com/alejsdev). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/dependencies/dependencies-with-yield.md`

. PR[#12028](https://github.com/fastapi/fastapi/pull/12028)by[@xuvjso](https://github.com/xuvjso). - 📝 Update FastAPI People, do not translate to have the most recent info. PR
[#12034](https://github.com/fastapi/fastapi/pull/12034)by[@tiangolo](https://github.com/tiangolo). - 🌐 Update Urdu translation for
`docs/ur/docs/benchmarks.md`

. PR[#10046](https://github.com/fastapi/fastapi/pull/10046)by[@AhsanSheraz](https://github.com/AhsanSheraz).

### Internal[¶](#internal_61)

- ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#12046](https://github.com/fastapi/fastapi/pull/12046)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 🔧 Update coverage config files. PR
[#12035](https://github.com/fastapi/fastapi/pull/12035)by[@tiangolo](https://github.com/tiangolo). - 🔨 Standardize shebang across shell scripts. PR
[#11942](https://github.com/fastapi/fastapi/pull/11942)by[@gitworkflows](https://github.com/gitworkflows). - ⬆ Update sqlalchemy requirement from <1.4.43,>=1.3.18 to >=1.3.18,<2.0.33. PR
[#11979](https://github.com/fastapi/fastapi/pull/11979)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔊 Remove old ignore warnings. PR
[#11950](https://github.com/fastapi/fastapi/pull/11950)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade griffe-typingdoc for the docs. PR
[#12029](https://github.com/fastapi/fastapi/pull/12029)by[@tiangolo](https://github.com/tiangolo). - 🙈 Add .coverage* to
`.gitignore`

. PR[#11940](https://github.com/fastapi/fastapi/pull/11940)by[@gitworkflows](https://github.com/gitworkflows). - ⚙️ Record and show test coverage contexts (what test covers which line). PR
[#11518](https://github.com/fastapi/fastapi/pull/11518)by[@slafs](https://github.com/slafs).

## 0.112.1 (2024-08-15)[¶](#01121-2024-08-15)

### Upgrades[¶](#upgrades_15)

- ⬆️ Allow Starlette 0.38.x, update the pin to
`>=0.37.2,<0.39.0`

. PR[#11876](https://github.com/fastapi/fastapi/pull/11876)by[@musicinmybrain](https://github.com/musicinmybrain).

### Docs[¶](#docs_43)

- 📝 Update docs section about "Don't Translate these Pages". PR
[#12022](https://github.com/fastapi/fastapi/pull/12022)by[@tiangolo](https://github.com/tiangolo). - 📝 Add documentation for non-translated pages and scripts to verify them. PR
[#12020](https://github.com/fastapi/fastapi/pull/12020)by[@tiangolo](https://github.com/tiangolo). - 📝 Update docs about discussions questions. PR
[#11985](https://github.com/fastapi/fastapi/pull/11985)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_38)

- 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/bigger-applications.md`

. PR[#11971](https://github.com/fastapi/fastapi/pull/11971)by[@marcelomarkus](https://github.com/marcelomarkus). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/testing-websockets.md`

. PR[#11994](https://github.com/fastapi/fastapi/pull/11994)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/testing-dependencies.md`

. PR[#11995](https://github.com/fastapi/fastapi/pull/11995)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/using-request-directly.md`

. PR[#11956](https://github.com/fastapi/fastapi/pull/11956)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add French translation for
`docs/fr/docs/tutorial/body-multiple-params.md`

. PR[#11796](https://github.com/fastapi/fastapi/pull/11796)by[@pe-brian](https://github.com/pe-brian). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/query-params.md`

. PR[#11557](https://github.com/fastapi/fastapi/pull/11557)by[@caomingpei](https://github.com/caomingpei). - 🌐 Update typo in Chinese translation for
`docs/zh/docs/advanced/testing-dependencies.md`

. PR[#11944](https://github.com/fastapi/fastapi/pull/11944)by[@bestony](https://github.com/bestony). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/sub-applications.md`

and`docs/pt/docs/advanced/behind-a-proxy.md`

. PR[#11856](https://github.com/fastapi/fastapi/pull/11856)by[@marcelomarkus](https://github.com/marcelomarkus). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/cors.md`

and`docs/pt/docs/tutorial/middleware.md`

. PR[#11916](https://github.com/fastapi/fastapi/pull/11916)by[@wesinalves](https://github.com/wesinalves). - 🌐 Add French translation for
`docs/fr/docs/tutorial/path-params-numeric-validations.md`

. PR[#11788](https://github.com/fastapi/fastapi/pull/11788)by[@pe-brian](https://github.com/pe-brian).

### Internal[¶](#internal_62)

- ⬆ Bump pypa/gh-action-pypi-publish from 1.8.14 to 1.9.0. PR
[#11727](https://github.com/fastapi/fastapi/pull/11727)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Add changelog URL to
`pyproject.toml`

, shows in PyPI. PR[#11152](https://github.com/fastapi/fastapi/pull/11152)by[@Pierre-VF](https://github.com/Pierre-VF). - 👷 Do not sync labels as it overrides manually added labels. PR
[#12024](https://github.com/fastapi/fastapi/pull/12024)by[@tiangolo](https://github.com/tiangolo). - 👷🏻 Update Labeler GitHub Actions. PR
[#12019](https://github.com/fastapi/fastapi/pull/12019)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update configs for MkDocs for languages and social cards. PR
[#12016](https://github.com/fastapi/fastapi/pull/12016)by[@tiangolo](https://github.com/tiangolo). - 👷 Update permissions and config for labeler GitHub Action. PR
[#12008](https://github.com/fastapi/fastapi/pull/12008)by[@tiangolo](https://github.com/tiangolo). - 👷🏻 Add GitHub Action label-checker. PR
[#12005](https://github.com/fastapi/fastapi/pull/12005)by[@tiangolo](https://github.com/tiangolo). - 👷 Add label checker GitHub Action. PR
[#12004](https://github.com/fastapi/fastapi/pull/12004)by[@tiangolo](https://github.com/tiangolo). - 👷 Update GitHub Action add-to-project. PR
[#12002](https://github.com/fastapi/fastapi/pull/12002)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update labeler GitHub Action. PR
[#12001](https://github.com/fastapi/fastapi/pull/12001)by[@tiangolo](https://github.com/tiangolo). - 👷 Add GitHub Action labeler. PR
[#12000](https://github.com/fastapi/fastapi/pull/12000)by[@tiangolo](https://github.com/tiangolo). - 👷 Add GitHub Action add-to-project. PR
[#11999](https://github.com/fastapi/fastapi/pull/11999)by[@tiangolo](https://github.com/tiangolo). - 📝 Update admonitions in docs missing. PR
[#11998](https://github.com/fastapi/fastapi/pull/11998)by[@tiangolo](https://github.com/tiangolo). - 🔨 Update docs.py script to enable dirty reload conditionally. PR
[#11986](https://github.com/fastapi/fastapi/pull/11986)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update MkDocs instant previews. PR
[#11982](https://github.com/fastapi/fastapi/pull/11982)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix deploy docs previews script to handle mkdocs.yml files. PR
[#11984](https://github.com/fastapi/fastapi/pull/11984)by[@tiangolo](https://github.com/tiangolo). - 💡 Add comment about custom Termynal line-height. PR
[#11976](https://github.com/fastapi/fastapi/pull/11976)by[@tiangolo](https://github.com/tiangolo). - 👷 Add alls-green for test-redistribute. PR
[#11974](https://github.com/fastapi/fastapi/pull/11974)by[@tiangolo](https://github.com/tiangolo). - 👷 Update docs-previews to handle no docs changes. PR
[#11975](https://github.com/fastapi/fastapi/pull/11975)by[@tiangolo](https://github.com/tiangolo). - 🔨 Refactor script
`deploy_docs_status.py`

to account for deploy URLs with or without trailing slash. PR[#11965](https://github.com/fastapi/fastapi/pull/11965)by[@tiangolo](https://github.com/tiangolo). - 🔒️ Update permissions for deploy-docs action. PR
[#11964](https://github.com/fastapi/fastapi/pull/11964)by[@tiangolo](https://github.com/tiangolo). - 👷🏻 Add deploy docs status and preview links to PRs. PR
[#11961](https://github.com/fastapi/fastapi/pull/11961)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update docs setup with latest configs and plugins. PR
[#11953](https://github.com/fastapi/fastapi/pull/11953)by[@tiangolo](https://github.com/tiangolo). - 🔇 Ignore warning from attrs in Trio. PR
[#11949](https://github.com/fastapi/fastapi/pull/11949)by[@tiangolo](https://github.com/tiangolo).

## 0.112.0 (2024-08-02)[¶](#01120-2024-08-02)

### Breaking Changes[¶](#breaking-changes_6)

- ♻️ Add support for
`pip install "fastapi[standard]"`

with standard dependencies and`python -m fastapi`

. PR[#11935](https://github.com/fastapi/fastapi/pull/11935)by[@tiangolo](https://github.com/tiangolo).

#### Summary[¶](#summary)

Install with:

```
pip install "fastapi[standard]"
```


#### Other Changes[¶](#other-changes)

- This adds support for calling the CLI as:

```
python -m fastapi
```


- And it upgrades
`fastapi-cli[standard] >=0.0.5`

.

#### Technical Details[¶](#technical-details)

Before this, `fastapi`

would include the standard dependencies, with Uvicorn and the `fastapi-cli`

, etc.

And `fastapi-slim`

would not include those standard dependencies.

Now `fastapi`

doesn't include those standard dependencies unless you install with `pip install "fastapi[standard]"`

.

Before, you would install `pip install fastapi`

, now you should include the `standard`

optional dependencies (unless you want to exclude one of those): `pip install "fastapi[standard]"`

.

This change is because having the standard optional dependencies installed by default was being inconvenient to several users, and having to install instead `fastapi-slim`

was not being a feasible solution.

Discussed here: [#11522](https://github.com/fastapi/fastapi/pull/11522) and here: [#11525](https://github.com/fastapi/fastapi/discussions/11525)

### Docs[¶](#docs_44)

- ✏️ Fix typos in docs. PR
[#11926](https://github.com/fastapi/fastapi/pull/11926)by[@jianghuyiyuan](https://github.com/jianghuyiyuan). - 📝 Tweak management docs. PR
[#11918](https://github.com/fastapi/fastapi/pull/11918)by[@tiangolo](https://github.com/tiangolo). - 🚚 Rename GitHub links from tiangolo/fastapi to fastapi/fastapi. PR
[#11913](https://github.com/fastapi/fastapi/pull/11913)by[@tiangolo](https://github.com/tiangolo). - 📝 Add docs about FastAPI team and project management. PR
[#11908](https://github.com/tiangolo/fastapi/pull/11908)by[@tiangolo](https://github.com/tiangolo). - 📝 Re-structure docs main menu. PR
[#11904](https://github.com/tiangolo/fastapi/pull/11904)by[@tiangolo](https://github.com/tiangolo). - 📝 Update Speakeasy URL. PR
[#11871](https://github.com/tiangolo/fastapi/pull/11871)by[@ndimares](https://github.com/ndimares).

### Translations[¶](#translations_39)

- 🌐 Update Portuguese translation for
`docs/pt/docs/alternatives.md`

. PR[#11931](https://github.com/fastapi/fastapi/pull/11931)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/dependencies/sub-dependencies.md`

. PR[#10515](https://github.com/tiangolo/fastapi/pull/10515)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/response-change-status-code.md`

. PR[#11863](https://github.com/tiangolo/fastapi/pull/11863)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Portuguese translation for
`docs/pt/docs/reference/background.md`

. PR[#11849](https://github.com/tiangolo/fastapi/pull/11849)by[@lucasbalieiro](https://github.com/lucasbalieiro). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/dependencies/dependencies-with-yield.md`

. PR[#11848](https://github.com/tiangolo/fastapi/pull/11848)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Add Portuguese translation for
`docs/pt/docs/reference/apirouter.md`

. PR[#11843](https://github.com/tiangolo/fastapi/pull/11843)by[@lucasbalieiro](https://github.com/lucasbalieiro).

### Internal[¶](#internal_63)

- 🔧 Update sponsors: add liblab. PR
[#11934](https://github.com/fastapi/fastapi/pull/11934)by[@tiangolo](https://github.com/tiangolo). - 👷 Update GitHub Action label-approved permissions. PR
[#11933](https://github.com/fastapi/fastapi/pull/11933)by[@tiangolo](https://github.com/tiangolo). - 👷 Refactor GitHub Action to comment docs deployment URLs and update token. PR
[#11925](https://github.com/fastapi/fastapi/pull/11925)by[@tiangolo](https://github.com/tiangolo). - 👷 Update tokens for GitHub Actions. PR
[#11924](https://github.com/fastapi/fastapi/pull/11924)by[@tiangolo](https://github.com/tiangolo). - 👷 Update token permissions to comment deployment URL in docs. PR
[#11917](https://github.com/fastapi/fastapi/pull/11917)by[@tiangolo](https://github.com/tiangolo). - 👷 Update token permissions for GitHub Actions. PR
[#11915](https://github.com/fastapi/fastapi/pull/11915)by[@tiangolo](https://github.com/tiangolo). - 👷 Update GitHub Actions token usage. PR
[#11914](https://github.com/fastapi/fastapi/pull/11914)by[@tiangolo](https://github.com/tiangolo). - 👷 Update GitHub Action to notify translations with label
`approved-1`

. PR[#11907](https://github.com/tiangolo/fastapi/pull/11907)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, remove Reflex. PR
[#11875](https://github.com/tiangolo/fastapi/pull/11875)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors: remove TalkPython. PR
[#11861](https://github.com/tiangolo/fastapi/pull/11861)by[@tiangolo](https://github.com/tiangolo). - 🔨 Update docs Termynal scripts to not include line nums for local dev. PR
[#11854](https://github.com/tiangolo/fastapi/pull/11854)by[@tiangolo](https://github.com/tiangolo).

## 0.111.1 (2024-07-14)[¶](#01111-2024-07-14)

### Upgrades[¶](#upgrades_16)

- ➖ Remove
`orjson`

and`ujson`

from default dependencies. PR[#11842](https://github.com/tiangolo/fastapi/pull/11842)by[@tiangolo](https://github.com/tiangolo).- These dependencies are still installed when you install with
`pip install "fastapi[all]"`

. But they are not included in`pip install fastapi`

.

- These dependencies are still installed when you install with
- 📝 Restored Swagger-UI links to use the latest version possible. PR
[#11459](https://github.com/tiangolo/fastapi/pull/11459)by[@UltimateLobster](https://github.com/UltimateLobster).

### Docs[¶](#docs_45)

- ✏️ Rewording in
`docs/en/docs/fastapi-cli.md`

. PR[#11716](https://github.com/tiangolo/fastapi/pull/11716)by[@alejsdev](https://github.com/alejsdev). - 📝 Update Hypercorn links in all the docs. PR
[#11744](https://github.com/tiangolo/fastapi/pull/11744)by[@kittydoor](https://github.com/kittydoor). - 📝 Update docs with Ariadne reference from Starlette to FastAPI. PR
[#11797](https://github.com/tiangolo/fastapi/pull/11797)by[@DamianCzajkowski](https://github.com/DamianCzajkowski). - 📝 Update fastapi instrumentation external link. PR
[#11317](https://github.com/tiangolo/fastapi/pull/11317)by[@softwarebloat](https://github.com/softwarebloat). - ✏️ Fix links to alembic example repo in docs. PR
[#11628](https://github.com/tiangolo/fastapi/pull/11628)by[@augiwan](https://github.com/augiwan). - ✏️ Update
`docs/en/docs/fastapi-cli.md`

. PR[#11715](https://github.com/tiangolo/fastapi/pull/11715)by[@alejsdev](https://github.com/alejsdev). - 📝 Update External Links . PR
[#11500](https://github.com/tiangolo/fastapi/pull/11500)by[@devon2018](https://github.com/devon2018). - 📝 Add External Link: Tutorial de FastAPI, ¿el mejor framework de Python?. PR
[#11618](https://github.com/tiangolo/fastapi/pull/11618)by[@EduardoZepeda](https://github.com/EduardoZepeda). - 📝 Fix typo in
`docs/en/docs/tutorial/body-multiple-params.md`

. PR[#11698](https://github.com/tiangolo/fastapi/pull/11698)by[@mwb-u](https://github.com/mwb-u). - 📝 Add External Link: Deploy a Serverless FastAPI App with Neon Postgres and AWS App Runner at any scale. PR
[#11633](https://github.com/tiangolo/fastapi/pull/11633)by[@ananis25](https://github.com/ananis25). - 📝 Update
`security/first-steps.md`

. PR[#11674](https://github.com/tiangolo/fastapi/pull/11674)by[@alejsdev](https://github.com/alejsdev). - 📝 Update
`security/first-steps.md`

. PR[#11673](https://github.com/tiangolo/fastapi/pull/11673)by[@alejsdev](https://github.com/alejsdev). - 📝 Update note in
`path-params-numeric-validations.md`

. PR[#11672](https://github.com/tiangolo/fastapi/pull/11672)by[@alejsdev](https://github.com/alejsdev). - 📝 Tweak intro docs about
`Annotated`

and`Query()`

params. PR[#11664](https://github.com/tiangolo/fastapi/pull/11664)by[@tiangolo](https://github.com/tiangolo). - 📝 Update JWT auth documentation to use PyJWT instead of pyhon-jose. PR
[#11589](https://github.com/tiangolo/fastapi/pull/11589)by[@estebanx64](https://github.com/estebanx64). - 📝 Update docs. PR
[#11603](https://github.com/tiangolo/fastapi/pull/11603)by[@alejsdev](https://github.com/alejsdev). - ✏️ Fix typo: convert every 're-use' to 'reuse'.. PR
[#11598](https://github.com/tiangolo/fastapi/pull/11598)by[@hasansezertasan](https://github.com/hasansezertasan). - ✏️ Fix typo in
`fastapi/applications.py`

. PR[#11593](https://github.com/tiangolo/fastapi/pull/11593)by[@petarmaric](https://github.com/petarmaric). - ✏️ Fix link in
`fastapi-cli.md`

. PR[#11524](https://github.com/tiangolo/fastapi/pull/11524)by[@svlandeg](https://github.com/svlandeg).

### Translations[¶](#translations_40)

- 🌐 Add Spanish translation for
`docs/es/docs/how-to/graphql.md`

. PR[#11697](https://github.com/tiangolo/fastapi/pull/11697)by[@camigomezdev](https://github.com/camigomezdev). - 🌐 Add Portuguese translation for
`docs/pt/docs/reference/index.md`

. PR[#11840](https://github.com/tiangolo/fastapi/pull/11840)by[@lucasbalieiro](https://github.com/lucasbalieiro). - 🌐 Fix link in German translation. PR
[#11836](https://github.com/tiangolo/fastapi/pull/11836)by[@anitahammer](https://github.com/anitahammer). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/dependencies/sub-dependencies.md`

. PR[#11792](https://github.com/tiangolo/fastapi/pull/11792)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Add Turkish translation for
`docs/tr/docs/tutorial/request-forms.md`

. PR[#11553](https://github.com/tiangolo/fastapi/pull/11553)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Portuguese translation for
`docs/pt/docs/reference/exceptions.md`

. PR[#11834](https://github.com/tiangolo/fastapi/pull/11834)by[@lucasbalieiro](https://github.com/lucasbalieiro). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/dependencies/global-dependencies.md`

. PR[#11826](https://github.com/tiangolo/fastapi/pull/11826)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Add Portuguese translation for
`docs/pt/docs/how-to/general.md`

. PR[#11825](https://github.com/tiangolo/fastapi/pull/11825)by[@lucasbalieiro](https://github.com/lucasbalieiro). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/async-tests.md`

. PR[#11808](https://github.com/tiangolo/fastapi/pull/11808)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/first-steps.md`

. PR[#11809](https://github.com/tiangolo/fastapi/pull/11809)by[@vkhoroshchak](https://github.com/vkhoroshchak). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/dependencies/dependencies-in-path-operation-operators.md`

. PR[#11804](https://github.com/tiangolo/fastapi/pull/11804)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Add Chinese translation for
`docs/zh/docs/fastapi-cli.md`

. PR[#11786](https://github.com/tiangolo/fastapi/pull/11786)by[@logan2d5](https://github.com/logan2d5). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/openapi-webhooks.md`

. PR[#11791](https://github.com/tiangolo/fastapi/pull/11791)by[@ceb10n](https://github.com/ceb10n). - 🌐 Update Chinese translation for
`docs/tutorial/security/oauth2-jwt.md`

. PR[#11781](https://github.com/tiangolo/fastapi/pull/11781)by[@logan2d5](https://github.com/logan2d5). - 📝 Fix image missing in French translation for
`docs/fr/docs/async.md`

. PR[#11787](https://github.com/tiangolo/fastapi/pull/11787)by[@pe-brian](https://github.com/pe-brian). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/advanced-dependencies.md`

. PR[#11775](https://github.com/tiangolo/fastapi/pull/11775)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/dependencies/classes-as-dependencies.md`

. PR[#11768](https://github.com/tiangolo/fastapi/pull/11768)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/additional-status-codes.md`

. PR[#11753](https://github.com/tiangolo/fastapi/pull/11753)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/dependencies/index.md`

. PR[#11757](https://github.com/tiangolo/fastapi/pull/11757)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/settings.md`

. PR[#11739](https://github.com/tiangolo/fastapi/pull/11739)by[@Joao-Pedro-P-Holanda](https://github.com/Joao-Pedro-P-Holanda). - 🌐 Add French translation for
`docs/fr/docs/learn/index.md`

. PR[#11712](https://github.com/tiangolo/fastapi/pull/11712)by[@benjaminvandammeholberton](https://github.com/benjaminvandammeholberton). - 🌐 Add Portuguese translation for
`docs/pt/docs/how-to/index.md`

. PR[#11731](https://github.com/tiangolo/fastapi/pull/11731)by[@vhsenna](https://github.com/vhsenna). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/additional-responses.md`

. PR[#11736](https://github.com/tiangolo/fastapi/pull/11736)by[@ceb10n](https://github.com/ceb10n). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/benchmarks.md`

. PR[#11713](https://github.com/tiangolo/fastapi/pull/11713)by[@ceb10n](https://github.com/ceb10n). - 🌐 Fix Korean translation for
`docs/ko/docs/tutorial/response-status-code.md`

. PR[#11718](https://github.com/tiangolo/fastapi/pull/11718)by[@nayeonkinn](https://github.com/nayeonkinn). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/extra-data-types.md`

. PR[#11711](https://github.com/tiangolo/fastapi/pull/11711)by[@nayeonkinn](https://github.com/nayeonkinn). - 🌐 Fix Korean translation for
`docs/ko/docs/tutorial/body-nested-models.md`

. PR[#11710](https://github.com/tiangolo/fastapi/pull/11710)by[@nayeonkinn](https://github.com/nayeonkinn). - 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/fastapi-cli.md`

. PR[#11641](https://github.com/tiangolo/fastapi/pull/11641)by[@ayr-ton](https://github.com/ayr-ton). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/fastapi-people.md`

. PR[#11639](https://github.com/tiangolo/fastapi/pull/11639)by[@hsuanchi](https://github.com/hsuanchi). - 🌐 Add Turkish translation for
`docs/tr/docs/advanced/index.md`

. PR[#11606](https://github.com/tiangolo/fastapi/pull/11606)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Turkish translation for
`docs/tr/docs/deployment/cloud.md`

. PR[#11610](https://github.com/tiangolo/fastapi/pull/11610)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Turkish translation for
`docs/tr/docs/advanced/security/index.md`

. PR[#11609](https://github.com/tiangolo/fastapi/pull/11609)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Turkish translation for
`docs/tr/docs/advanced/testing-websockets.md`

. PR[#11608](https://github.com/tiangolo/fastapi/pull/11608)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Turkish translation for
`docs/tr/docs/how-to/general.md`

. PR[#11607](https://github.com/tiangolo/fastapi/pull/11607)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Update Chinese translation for
`docs/zh/docs/advanced/templates.md`

. PR[#11620](https://github.com/tiangolo/fastapi/pull/11620)by[@chaoless](https://github.com/chaoless). - 🌐 Add Turkish translation for
`docs/tr/docs/deployment/index.md`

. PR[#11605](https://github.com/tiangolo/fastapi/pull/11605)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Turkish translation for
`docs/tr/docs/tutorial/static-files.md`

. PR[#11599](https://github.com/tiangolo/fastapi/pull/11599)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Polish translation for
`docs/pl/docs/fastapi-people.md`

. PR[#10196](https://github.com/tiangolo/fastapi/pull/10196)by[@isulim](https://github.com/isulim). - 🌐 Add Turkish translation for
`docs/tr/docs/advanced/wsgi.md`

. PR[#11575](https://github.com/tiangolo/fastapi/pull/11575)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Turkish translation for
`docs/tr/docs/tutorial/cookie-params.md`

. PR[#11561](https://github.com/tiangolo/fastapi/pull/11561)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Russian translation for
`docs/ru/docs/about/index.md`

. PR[#10961](https://github.com/tiangolo/fastapi/pull/10961)by[@s111d](https://github.com/s111d). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/sql-databases.md`

. PR[#11539](https://github.com/tiangolo/fastapi/pull/11539)by[@chaoless](https://github.com/chaoless). - 🌐 Add Chinese translation for
`docs/zh/docs/how-to/configure-swagger-ui.md`

. PR[#11501](https://github.com/tiangolo/fastapi/pull/11501)by[@Lucas-lyh](https://github.com/Lucas-lyh). - 🌐 Update Chinese translation for
`/docs/advanced/security/http-basic-auth.md`

. PR[#11512](https://github.com/tiangolo/fastapi/pull/11512)by[@nick-cjyx9](https://github.com/nick-cjyx9).

### Internal[¶](#internal_64)

- ♻️ Simplify internal docs script. PR
[#11777](https://github.com/tiangolo/fastapi/pull/11777)by[@gitworkflows](https://github.com/gitworkflows). - 🔧 Update sponsors: add Fine. PR
[#11784](https://github.com/tiangolo/fastapi/pull/11784)by[@tiangolo](https://github.com/tiangolo). - 🔧 Tweak sponsors: Kong URL. PR
[#11765](https://github.com/tiangolo/fastapi/pull/11765)by[@tiangolo](https://github.com/tiangolo). - 🔧 Tweak sponsors: Kong URL. PR
[#11764](https://github.com/tiangolo/fastapi/pull/11764)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, add Stainless. PR
[#11763](https://github.com/tiangolo/fastapi/pull/11763)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, add Zuplo. PR
[#11729](https://github.com/tiangolo/fastapi/pull/11729)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update Sponsor link: Coherence. PR
[#11730](https://github.com/tiangolo/fastapi/pull/11730)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#11669](https://github.com/tiangolo/fastapi/pull/11669)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add sponsor Kong. PR
[#11662](https://github.com/tiangolo/fastapi/pull/11662)by[@tiangolo](https://github.com/tiangolo). - 👷 Update Smokeshow, fix sync download artifact and smokeshow configs. PR
[#11563](https://github.com/tiangolo/fastapi/pull/11563)by[@tiangolo](https://github.com/tiangolo). - 👷 Update Smokeshow download artifact GitHub Action. PR
[#11562](https://github.com/tiangolo/fastapi/pull/11562)by[@tiangolo](https://github.com/tiangolo). - 👷 Update GitHub actions to download and upload artifacts to v4, for docs and coverage. PR
[#11550](https://github.com/tiangolo/fastapi/pull/11550)by[@tamird](https://github.com/tamird). - 👷 Tweak CI for test-redistribute, add needed env vars for slim. PR
[#11549](https://github.com/tiangolo/fastapi/pull/11549)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#11511](https://github.com/tiangolo/fastapi/pull/11511)by[@tiangolo](https://github.com/tiangolo).

## 0.111.0 (2024-05-03)[¶](#01110-2024-05-03)

### Features[¶](#features_16)

- ✨ Add FastAPI CLI, the new
`fastapi`

command. PR[#11522](https://github.com/tiangolo/fastapi/pull/11522)by[@tiangolo](https://github.com/tiangolo).- New docs:
[FastAPI CLI](https://fastapi.tiangolo.com/fastapi-cli/).

- New docs:

Try it out with:

```
$ pip install --upgrade fastapi
$ fastapi dev main.py
╭────────── FastAPI CLI - Development mode ───────────╮
│ │
│ Serving at: http://127.0.0.1:8000 │
│ │
│ API docs: http://127.0.0.1:8000/docs │
│ │
│ Running in development mode, for production use: │
│ │
│ fastapi run │
│ │
╰─────────────────────────────────────────────────────╯
INFO: Will watch for changes in these directories: ['/home/user/code/awesomeapp']
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO: Started reloader process [2248755] using WatchFiles
INFO: Started server process [2248757]
INFO: Waiting for application startup.
INFO: Application startup complete.
```


### Refactors[¶](#refactors_26)

- 🔧 Add configs and setup for
`fastapi-slim`

including optional extras`fastapi-slim[standard]`

, and`fastapi`

including by default the same`standard`

extras. PR[#11503](https://github.com/tiangolo/fastapi/pull/11503)by[@tiangolo](https://github.com/tiangolo).

## 0.110.3 (2024-04-30)[¶](#01103-2024-04-30)

### Docs[¶](#docs_46)

- 📝 Update references to Python version, FastAPI supports all the current versions, no need to make the version explicit. PR
[#11496](https://github.com/tiangolo/fastapi/pull/11496)by[@tiangolo](https://github.com/tiangolo). - ✏️ Fix typo in
`fastapi/security/api_key.py`

. PR[#11481](https://github.com/tiangolo/fastapi/pull/11481)by[@ch33zer](https://github.com/ch33zer). - ✏️ Fix typo in
`security/http.py`

. PR[#11455](https://github.com/tiangolo/fastapi/pull/11455)by[@omarmoo5](https://github.com/omarmoo5).

### Translations[¶](#translations_41)

- 🌐 Add Traditional Chinese translation for
`docs/zh-hant/benchmarks.md`

. PR[#11484](https://github.com/tiangolo/fastapi/pull/11484)by[@KNChiu](https://github.com/KNChiu). - 🌐 Update Chinese translation for
`docs/zh/docs/fastapi-people.md`

. PR[#11476](https://github.com/tiangolo/fastapi/pull/11476)by[@billzhong](https://github.com/billzhong). - 🌐 Add Chinese translation for
`docs/zh/docs/how-to/index.md`

and`docs/zh/docs/how-to/general.md`

. PR[#11443](https://github.com/tiangolo/fastapi/pull/11443)by[@billzhong](https://github.com/billzhong). - 🌐 Add Spanish translation for cookie-params
`docs/es/docs/tutorial/cookie-params.md`

. PR[#11410](https://github.com/tiangolo/fastapi/pull/11410)by[@fabianfalon](https://github.com/fabianfalon).

### Internal[¶](#internal_65)

- ⬆ Bump mkdocstrings[python] from 0.23.0 to 0.24.3. PR
[#11469](https://github.com/tiangolo/fastapi/pull/11469)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔨 Update internal scripts and remove unused ones. PR
[#11499](https://github.com/tiangolo/fastapi/pull/11499)by[@tiangolo](https://github.com/tiangolo). - 🔧 Migrate from Hatch to PDM for the internal build. PR
[#11498](https://github.com/tiangolo/fastapi/pull/11498)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade MkDocs Material and re-enable cards. PR
[#11466](https://github.com/tiangolo/fastapi/pull/11466)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump pillow from 10.2.0 to 10.3.0. PR
[#11403](https://github.com/tiangolo/fastapi/pull/11403)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Ungroup dependabot updates. PR
[#11465](https://github.com/tiangolo/fastapi/pull/11465)by[@tiangolo](https://github.com/tiangolo).

## 0.110.2 (2024-04-19)[¶](#01102-2024-04-19)

### Fixes[¶](#fixes_42)

- 🐛 Fix support for query parameters with list types, handle JSON encoding Pydantic
`UndefinedType`

. PR[#9929](https://github.com/tiangolo/fastapi/pull/9929)by[@arjwilliams](https://github.com/arjwilliams).

### Refactors[¶](#refactors_27)

- ♻️ Simplify Pydantic configs in OpenAPI models in
`fastapi/openapi/models.py`

. PR[#10886](https://github.com/tiangolo/fastapi/pull/10886)by[@JoeTanto2](https://github.com/JoeTanto2). - ✨ Add support for Pydantic's 2.7 new deprecated Field parameter, remove URL from validation errors response. PR
[#11461](https://github.com/tiangolo/fastapi/pull/11461)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_47)

- 📝 Fix types in examples under
`docs_src/extra_data_types`

. PR[#10535](https://github.com/tiangolo/fastapi/pull/10535)by[@nilslindemann](https://github.com/nilslindemann). - 📝 Update references to UJSON. PR
[#11464](https://github.com/tiangolo/fastapi/pull/11464)by[@tiangolo](https://github.com/tiangolo). - 📝 Tweak docs and translations links, typos, format. PR
[#11389](https://github.com/tiangolo/fastapi/pull/11389)by[@nilslindemann](https://github.com/nilslindemann). - 📝 Fix typo in
`docs/es/docs/async.md`

. PR[#11400](https://github.com/tiangolo/fastapi/pull/11400)by[@fabianfalon](https://github.com/fabianfalon). - 📝 Update OpenAPI client generation docs to use
`@hey-api/openapi-ts`

. PR[#11339](https://github.com/tiangolo/fastapi/pull/11339)by[@jordanshatford](https://github.com/jordanshatford).

### Translations[¶](#translations_42)

- 🌐 Update Chinese translation for
`docs/zh/docs/index.html`

. PR[#11430](https://github.com/tiangolo/fastapi/pull/11430)by[@waketzheng](https://github.com/waketzheng). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/dependencies/dependencies-in-path-operation-decorators.md`

. PR[#11411](https://github.com/tiangolo/fastapi/pull/11411)by[@anton2yakovlev](https://github.com/anton2yakovlev). - 🌐 Add Portuguese translations for
`learn/index.md`

`resources/index.md`

`help/index.md`

`about/index.md`

. PR[#10807](https://github.com/tiangolo/fastapi/pull/10807)by[@nazarepiedady](https://github.com/nazarepiedady). - 🌐 Update Russian translations for deployments docs. PR
[#11271](https://github.com/tiangolo/fastapi/pull/11271)by[@Lufa1u](https://github.com/Lufa1u). - 🌐 Add Bengali translations for
`docs/bn/docs/python-types.md`

. PR[#11376](https://github.com/tiangolo/fastapi/pull/11376)by[@imtiaz101325](https://github.com/imtiaz101325). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/security/simple-oauth2.md`

. PR[#5744](https://github.com/tiangolo/fastapi/pull/5744)by[@KdHyeon0661](https://github.com/KdHyeon0661). - 🌐 Add Korean translation for
`docs/ko/docs/help-fastapi.md`

. PR[#4139](https://github.com/tiangolo/fastapi/pull/4139)by[@kty4119](https://github.com/kty4119). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/events.md`

. PR[#5087](https://github.com/tiangolo/fastapi/pull/5087)by[@pers0n4](https://github.com/pers0n4). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/path-operation-configuration.md`

. PR[#1954](https://github.com/tiangolo/fastapi/pull/1954)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/request-forms-and-files.md`

. PR[#1946](https://github.com/tiangolo/fastapi/pull/1946)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/dependencies/dependencies-with-yield.md`

. PR[#10532](https://github.com/tiangolo/fastapi/pull/10532)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/debugging.md`

. PR[#5695](https://github.com/tiangolo/fastapi/pull/5695)by[@JungWooGeon](https://github.com/JungWooGeon).

### Internal[¶](#internal_66)

## 0.110.1 (2024-04-02)[¶](#01101-2024-04-02)

### Fixes[¶](#fixes_43)

### Refactors[¶](#refactors_28)

- ♻️ Update mypy. PR
[#11049](https://github.com/tiangolo/fastapi/pull/11049)by[@k0t3n](https://github.com/k0t3n). - ♻️ Simplify string format with f-strings in
`fastapi/applications.py`

. PR[#11335](https://github.com/tiangolo/fastapi/pull/11335)by[@igeni](https://github.com/igeni).

### Upgrades[¶](#upgrades_17)

- ⬆️ Upgrade Starlette to >=0.37.2,<0.38.0, remove Starlette filterwarning for internal tests. PR
[#11266](https://github.com/tiangolo/fastapi/pull/11266)by[@nothielf](https://github.com/nothielf).

### Docs[¶](#docs_48)

- 📝 Tweak docs and translations links and remove old docs translations. PR
[#11381](https://github.com/tiangolo/fastapi/pull/11381)by[@tiangolo](https://github.com/tiangolo). - ✏️ Fix typo in
`fastapi/security/oauth2.py`

. PR[#11368](https://github.com/tiangolo/fastapi/pull/11368)by[@shandongbinzhou](https://github.com/shandongbinzhou). - 📝 Update links to Pydantic docs to point to new website. PR
[#11328](https://github.com/tiangolo/fastapi/pull/11328)by[@alejsdev](https://github.com/alejsdev). - ✏️ Fix typo in
`docs/en/docs/tutorial/extra-models.md`

. PR[#11329](https://github.com/tiangolo/fastapi/pull/11329)by[@alejsdev](https://github.com/alejsdev). - 📝 Update
`project-generation.md`

. PR[#11326](https://github.com/tiangolo/fastapi/pull/11326)by[@alejsdev](https://github.com/alejsdev). - 📝 Update External Links. PR
[#11327](https://github.com/tiangolo/fastapi/pull/11327)by[@alejsdev](https://github.com/alejsdev). - 🔥 Remove link to Pydantic's benchmark, on other i18n pages.. PR
[#11224](https://github.com/tiangolo/fastapi/pull/11224)by[@hirotoKirimaru](https://github.com/hirotoKirimaru). - ✏️ Fix typos in docstrings. PR
[#11295](https://github.com/tiangolo/fastapi/pull/11295)by[@davidhuser](https://github.com/davidhuser). - 🛠️ Improve Node.js script in docs to generate TypeScript clients. PR
[#11293](https://github.com/tiangolo/fastapi/pull/11293)by[@alejsdev](https://github.com/alejsdev). - 📝 Update examples for tests to replace "inexistent" for "nonexistent". PR
[#11220](https://github.com/tiangolo/fastapi/pull/11220)by[@Homesteady](https://github.com/Homesteady). - 📝 Update
`python-multipart`

GitHub link in all docs from`https://andrew-d.github.io/python-multipart/`

to`https://github.com/Kludex/python-multipart`

. PR[#11239](https://github.com/tiangolo/fastapi/pull/11239)by[@joshjhans](https://github.com/joshjhans).

### Translations[¶](#translations_43)

- 🌐 Add German translation for
`docs/de/docs/tutorial/response-status-code.md`

. PR[#10357](https://github.com/tiangolo/fastapi/pull/10357)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/query-params.md`

. PR[#3480](https://github.com/tiangolo/fastapi/pull/3480)by[@jaystone776](https://github.com/jaystone776). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/body.md`

. PR[#3481](https://github.com/tiangolo/fastapi/pull/3481)by[@jaystone776](https://github.com/jaystone776). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/path-params.md`

. PR[#3479](https://github.com/tiangolo/fastapi/pull/3479)by[@jaystone776](https://github.com/jaystone776). - 🌐 Update Chinese translation for
`docs/tutorial/body-fields.md`

. PR[#3496](https://github.com/tiangolo/fastapi/pull/3496)by[@jaystone776](https://github.com/jaystone776). - 🌐 Update Chinese translation for
`docs/tutorial/extra-models.md`

. PR[#3497](https://github.com/tiangolo/fastapi/pull/3497)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/metadata.md`

. PR[#2667](https://github.com/tiangolo/fastapi/pull/2667)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add German translation for
`docs/de/docs/contributing.md`

. PR[#10487](https://github.com/tiangolo/fastapi/pull/10487)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Update Japanese translation of
`docs/ja/docs/tutorial/query-params.md`

. PR[#10808](https://github.com/tiangolo/fastapi/pull/10808)by[@urushio](https://github.com/urushio). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/security/get-current-user.md`

. PR[#3842](https://github.com/tiangolo/fastapi/pull/3842)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/openapi-callbacks.md`

. PR[#3825](https://github.com/tiangolo/fastapi/pull/3825)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/extending-openapi.md`

. PR[#3823](https://github.com/tiangolo/fastapi/pull/3823)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/testing-dependencies.md`

. PR[#3819](https://github.com/tiangolo/fastapi/pull/3819)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/custom-request-and-route.md`

. PR[#3816](https://github.com/tiangolo/fastapi/pull/3816)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/external-links.md`

. PR[#3833](https://github.com/tiangolo/fastapi/pull/3833)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/templates.md`

. PR[#3812](https://github.com/tiangolo/fastapi/pull/3812)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/sub-applications.md`

. PR[#3811](https://github.com/tiangolo/fastapi/pull/3811)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/async-sql-databases.md`

. PR[#3805](https://github.com/tiangolo/fastapi/pull/3805)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/middleware.md`

. PR[#3804](https://github.com/tiangolo/fastapi/pull/3804)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/dataclasses.md`

. PR[#3803](https://github.com/tiangolo/fastapi/pull/3803)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/using-request-directly.md`

. PR[#3802](https://github.com/tiangolo/fastapi/pull/3802)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/security/http-basic-auth.md`

. PR[#3801](https://github.com/tiangolo/fastapi/pull/3801)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/security/oauth2-scopes.md`

. PR[#3800](https://github.com/tiangolo/fastapi/pull/3800)by[@jaystone776](https://github.com/jaystone776). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/cookie-params.md`

. PR[#3486](https://github.com/tiangolo/fastapi/pull/3486)by[@jaystone776](https://github.com/jaystone776). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/header-params.md`

. PR[#3487](https://github.com/tiangolo/fastapi/pull/3487)by[@jaystone776](https://github.com/jaystone776). - 🌐 Update Chinese translation for
`docs/tutorial/response-status-code.md`

. PR[#3498](https://github.com/tiangolo/fastapi/pull/3498)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add German translation for
`docs/de/docs/tutorial/security/first-steps.md`

. PR[#10432](https://github.com/tiangolo/fastapi/pull/10432)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/events.md`

. PR[#10693](https://github.com/tiangolo/fastapi/pull/10693)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/deployment/cloud.md`

. PR[#10746](https://github.com/tiangolo/fastapi/pull/10746)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/behind-a-proxy.md`

. PR[#10675](https://github.com/tiangolo/fastapi/pull/10675)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/help-fastapi.md`

. PR[#10455](https://github.com/tiangolo/fastapi/pull/10455)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Update German translation for
`docs/de/docs/python-types.md`

. PR[#10287](https://github.com/tiangolo/fastapi/pull/10287)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/path-params.md`

. PR[#10290](https://github.com/tiangolo/fastapi/pull/10290)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/handling-errors.md`

. PR[#10379](https://github.com/tiangolo/fastapi/pull/10379)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Update German translation for
`docs/de/docs/index.md`

. PR[#10283](https://github.com/tiangolo/fastapi/pull/10283)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/security/http-basic-auth.md`

. PR[#10651](https://github.com/tiangolo/fastapi/pull/10651)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/bigger-applications.md`

. PR[#10554](https://github.com/tiangolo/fastapi/pull/10554)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/path-operation-advanced-configuration.md`

. PR[#10612](https://github.com/tiangolo/fastapi/pull/10612)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/static-files.md`

. PR[#10584](https://github.com/tiangolo/fastapi/pull/10584)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/security/oauth2-jwt.md`

. PR[#10522](https://github.com/tiangolo/fastapi/pull/10522)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/response-model.md`

. PR[#10345](https://github.com/tiangolo/fastapi/pull/10345)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/extra-models.md`

. PR[#10351](https://github.com/tiangolo/fastapi/pull/10351)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/body-updates.md`

. PR[#10396](https://github.com/tiangolo/fastapi/pull/10396)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/alternatives.md`

. PR[#10855](https://github.com/tiangolo/fastapi/pull/10855)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/templates.md`

. PR[#10678](https://github.com/tiangolo/fastapi/pull/10678)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/security/oauth2-scopes.md`

. PR[#10643](https://github.com/tiangolo/fastapi/pull/10643)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/async-tests.md`

. PR[#10708](https://github.com/tiangolo/fastapi/pull/10708)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/metadata.md`

. PR[#10581](https://github.com/tiangolo/fastapi/pull/10581)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/testing.md`

. PR[#10586](https://github.com/tiangolo/fastapi/pull/10586)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/schema-extra-example.md`

. PR[#10597](https://github.com/tiangolo/fastapi/pull/10597)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/index.md`

. PR[#10611](https://github.com/tiangolo/fastapi/pull/10611)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/response-directly.md`

. PR[#10618](https://github.com/tiangolo/fastapi/pull/10618)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/additional-responses.md`

. PR[#10626](https://github.com/tiangolo/fastapi/pull/10626)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/response-cookies.md`

. PR[#10627](https://github.com/tiangolo/fastapi/pull/10627)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/response-headers.md`

. PR[#10628](https://github.com/tiangolo/fastapi/pull/10628)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/response-change-status-code.md`

. PR[#10632](https://github.com/tiangolo/fastapi/pull/10632)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/advanced-dependencies.md`

. PR[#10633](https://github.com/tiangolo/fastapi/pull/10633)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/security/index.md`

. PR[#10635](https://github.com/tiangolo/fastapi/pull/10635)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/using-request-directly.md`

. PR[#10653](https://github.com/tiangolo/fastapi/pull/10653)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/dataclasses.md`

. PR[#10667](https://github.com/tiangolo/fastapi/pull/10667)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/middleware.md`

. PR[#10668](https://github.com/tiangolo/fastapi/pull/10668)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/sub-applications.md`

. PR[#10671](https://github.com/tiangolo/fastapi/pull/10671)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/websockets.md`

. PR[#10687](https://github.com/tiangolo/fastapi/pull/10687)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/testing-websockets.md`

. PR[#10703](https://github.com/tiangolo/fastapi/pull/10703)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/testing-events.md`

. PR[#10704](https://github.com/tiangolo/fastapi/pull/10704)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/testing-dependencies.md`

. PR[#10706](https://github.com/tiangolo/fastapi/pull/10706)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/openapi-callbacks.md`

. PR[#10710](https://github.com/tiangolo/fastapi/pull/10710)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/settings.md`

. PR[#10709](https://github.com/tiangolo/fastapi/pull/10709)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/wsgi.md`

. PR[#10713](https://github.com/tiangolo/fastapi/pull/10713)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/deployment/index.md`

. PR[#10733](https://github.com/tiangolo/fastapi/pull/10733)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/deployment/https.md`

. PR[#10737](https://github.com/tiangolo/fastapi/pull/10737)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/deployment/manually.md`

. PR[#10738](https://github.com/tiangolo/fastapi/pull/10738)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/deployment/concepts.md`

. PR[#10744](https://github.com/tiangolo/fastapi/pull/10744)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Update German translation for
`docs/de/docs/features.md`

. PR[#10284](https://github.com/tiangolo/fastapi/pull/10284)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/deployment/server-workers.md`

. PR[#10747](https://github.com/tiangolo/fastapi/pull/10747)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/deployment/docker.md`

. PR[#10759](https://github.com/tiangolo/fastapi/pull/10759)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/how-to/index.md`

. PR[#10769](https://github.com/tiangolo/fastapi/pull/10769)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/how-to/general.md`

. PR[#10770](https://github.com/tiangolo/fastapi/pull/10770)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/how-to/graphql.md`

. PR[#10788](https://github.com/tiangolo/fastapi/pull/10788)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/how-to/custom-request-and-route.md`

. PR[#10789](https://github.com/tiangolo/fastapi/pull/10789)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/how-to/conditional-openapi.md`

. PR[#10790](https://github.com/tiangolo/fastapi/pull/10790)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/how-to/separate-openapi-schemas.md`

. PR[#10796](https://github.com/tiangolo/fastapi/pull/10796)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/how-to/configure-swagger-ui.md`

. PR[#10804](https://github.com/tiangolo/fastapi/pull/10804)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/how-to/custom-docs-ui-assets.md`

. PR[#10803](https://github.com/tiangolo/fastapi/pull/10803)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/parameters.md`

. PR[#10814](https://github.com/tiangolo/fastapi/pull/10814)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/status.md`

. PR[#10815](https://github.com/tiangolo/fastapi/pull/10815)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/uploadfile.md`

. PR[#10816](https://github.com/tiangolo/fastapi/pull/10816)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/exceptions.md`

. PR[#10817](https://github.com/tiangolo/fastapi/pull/10817)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/dependencies.md`

. PR[#10818](https://github.com/tiangolo/fastapi/pull/10818)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/apirouter.md`

. PR[#10819](https://github.com/tiangolo/fastapi/pull/10819)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/websockets.md`

. PR[#10822](https://github.com/tiangolo/fastapi/pull/10822)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/httpconnection.md`

. PR[#10823](https://github.com/tiangolo/fastapi/pull/10823)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/response.md`

. PR[#10824](https://github.com/tiangolo/fastapi/pull/10824)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/middleware.md`

. PR[#10837](https://github.com/tiangolo/fastapi/pull/10837)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/openapi/*.md`

. PR[#10838](https://github.com/tiangolo/fastapi/pull/10838)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/security/index.md`

. PR[#10839](https://github.com/tiangolo/fastapi/pull/10839)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/staticfiles.md`

. PR[#10841](https://github.com/tiangolo/fastapi/pull/10841)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/testclient.md`

. PR[#10843](https://github.com/tiangolo/fastapi/pull/10843)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/project-generation.md`

. PR[#10851](https://github.com/tiangolo/fastapi/pull/10851)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/history-design-future.md`

. PR[#10865](https://github.com/tiangolo/fastapi/pull/10865)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/dependencies/dependencies-with-yield.md`

. PR[#10422](https://github.com/tiangolo/fastapi/pull/10422)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/dependencies/global-dependencies.md`

. PR[#10420](https://github.com/tiangolo/fastapi/pull/10420)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Update German translation for
`docs/de/docs/fastapi-people.md`

. PR[#10285](https://github.com/tiangolo/fastapi/pull/10285)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/dependencies/sub-dependencies.md`

. PR[#10409](https://github.com/tiangolo/fastapi/pull/10409)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/security/index.md`

. PR[#10429](https://github.com/tiangolo/fastapi/pull/10429)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/dependencies/dependencies-in-path-operation-decorators.md`

. PR[#10411](https://github.com/tiangolo/fastapi/pull/10411)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/extra-data-types.md`

. PR[#10534](https://github.com/tiangolo/fastapi/pull/10534)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/security/simple-oauth2.md`

. PR[#10504](https://github.com/tiangolo/fastapi/pull/10504)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/security/get-current-user.md`

. PR[#10439](https://github.com/tiangolo/fastapi/pull/10439)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/request-forms-and-files.md`

. PR[#10368](https://github.com/tiangolo/fastapi/pull/10368)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/encoder.md`

. PR[#10385](https://github.com/tiangolo/fastapi/pull/10385)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/request-forms.md`

. PR[#10361](https://github.com/tiangolo/fastapi/pull/10361)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/deployment/versions.md`

. PR[#10491](https://github.com/tiangolo/fastapi/pull/10491)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/async.md`

. PR[#10449](https://github.com/tiangolo/fastapi/pull/10449)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/cookie-params.md`

. PR[#10323](https://github.com/tiangolo/fastapi/pull/10323)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/dependencies/classes-as-dependencies.md`

. PR[#10407](https://github.com/tiangolo/fastapi/pull/10407)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/dependencies/index.md`

. PR[#10399](https://github.com/tiangolo/fastapi/pull/10399)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/header-params.md`

. PR[#10326](https://github.com/tiangolo/fastapi/pull/10326)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/path-params-numeric-validations.md`

. PR[#10307](https://github.com/tiangolo/fastapi/pull/10307)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/query-params-str-validations.md`

. PR[#10304](https://github.com/tiangolo/fastapi/pull/10304)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/request-files.md`

. PR[#10364](https://github.com/tiangolo/fastapi/pull/10364)by[@nilslindemann](https://github.com/nilslindemann). - :globe_with_meridians: Add Portuguese translation for
`docs/pt/docs/advanced/templates.md`

. PR[#11338](https://github.com/tiangolo/fastapi/pull/11338)by[@SamuelBFavarin](https://github.com/SamuelBFavarin). - 🌐 Add Bengali translations for
`docs/bn/docs/learn/index.md`

. PR[#11337](https://github.com/tiangolo/fastapi/pull/11337)by[@imtiaz101325](https://github.com/imtiaz101325). - 🌐 Fix Korean translation for
`docs/ko/docs/index.md`

. PR[#11296](https://github.com/tiangolo/fastapi/pull/11296)by[@choi-haram](https://github.com/choi-haram). - 🌐 Add Korean translation for
`docs/ko/docs/about/index.md`

. PR[#11299](https://github.com/tiangolo/fastapi/pull/11299)by[@choi-haram](https://github.com/choi-haram). - 🌐 Add Korean translation for
`docs/ko/docs/advanced/index.md`

. PR[#9613](https://github.com/tiangolo/fastapi/pull/9613)by[@ElliottLarsen](https://github.com/ElliottLarsen). - 🌐 Add German translation for
`docs/de/docs/how-to/extending-openapi.md`

. PR[#10794](https://github.com/tiangolo/fastapi/pull/10794)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/metadata.md`

. PR[#11286](https://github.com/tiangolo/fastapi/pull/11286)by[@jackleeio](https://github.com/jackleeio). - 🌐 Update Chinese translation for
`docs/zh/docs/contributing.md`

. PR[#10887](https://github.com/tiangolo/fastapi/pull/10887)by[@Aruelius](https://github.com/Aruelius). - 🌐 Add Azerbaijani translation for
`docs/az/docs/fastapi-people.md`

. PR[#11195](https://github.com/tiangolo/fastapi/pull/11195)by[@vusallyv](https://github.com/vusallyv). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/dependencies/index.md`

. PR[#11223](https://github.com/tiangolo/fastapi/pull/11223)by[@kohiry](https://github.com/kohiry). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/query-params.md`

. PR[#11242](https://github.com/tiangolo/fastapi/pull/11242)by[@jackleeio](https://github.com/jackleeio). - 🌐 Add Azerbaijani translation for
`docs/az/learn/index.md`

. PR[#11192](https://github.com/tiangolo/fastapi/pull/11192)by[@vusallyv](https://github.com/vusallyv).

### Internal[¶](#internal_67)

- 👥 Update FastAPI People. PR
[#11387](https://github.com/tiangolo/fastapi/pull/11387)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump actions/cache from 3 to 4. PR
[#10988](https://github.com/tiangolo/fastapi/pull/10988)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pypa/gh-action-pypi-publish from 1.8.11 to 1.8.14. PR
[#11318](https://github.com/tiangolo/fastapi/pull/11318)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pillow from 10.1.0 to 10.2.0. PR
[#11011](https://github.com/tiangolo/fastapi/pull/11011)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump black from 23.3.0 to 24.3.0. PR
[#11325](https://github.com/tiangolo/fastapi/pull/11325)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👷 Add cron to run test once a week on monday. PR
[#11377](https://github.com/tiangolo/fastapi/pull/11377)by[@estebanx64](https://github.com/estebanx64). - ➕ Replace mkdocs-markdownextradata-plugin with mkdocs-macros-plugin. PR
[#11383](https://github.com/tiangolo/fastapi/pull/11383)by[@tiangolo](https://github.com/tiangolo). - 👷 Disable MkDocs insiders social plugin while an issue in MkDocs Material is handled. PR
[#11373](https://github.com/tiangolo/fastapi/pull/11373)by[@tiangolo](https://github.com/tiangolo). - 👷 Fix logic for when to install and use MkDocs Insiders. PR
[#11372](https://github.com/tiangolo/fastapi/pull/11372)by[@tiangolo](https://github.com/tiangolo). - 👷 Do not use Python packages cache for publish. PR
[#11366](https://github.com/tiangolo/fastapi/pull/11366)by[@tiangolo](https://github.com/tiangolo). - 👷 Add CI to test sdists for redistribution (e.g. Linux distros). PR
[#11365](https://github.com/tiangolo/fastapi/pull/11365)by[@tiangolo](https://github.com/tiangolo). - 👷 Update build-docs GitHub Action path filter. PR
[#11354](https://github.com/tiangolo/fastapi/pull/11354)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update Ruff config, add extra ignore rule from SQLModel. PR
[#11353](https://github.com/tiangolo/fastapi/pull/11353)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade configuration for Ruff v0.2.0. PR
[#11075](https://github.com/tiangolo/fastapi/pull/11075)by[@charliermarsh](https://github.com/charliermarsh). - 🔧 Update sponsors, add MongoDB. PR
[#11346](https://github.com/tiangolo/fastapi/pull/11346)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump dorny/paths-filter from 2 to 3. PR
[#11028](https://github.com/tiangolo/fastapi/pull/11028)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump dawidd6/action-download-artifact from 3.0.0 to 3.1.4. PR
[#11310](https://github.com/tiangolo/fastapi/pull/11310)by[@dependabot[bot]](https://github.com/apps/dependabot). - ♻️ Refactor computing FastAPI People, include 3 months, 6 months, 1 year, based on comment date, not discussion date. PR
[#11304](https://github.com/tiangolo/fastapi/pull/11304)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#11228](https://github.com/tiangolo/fastapi/pull/11228)by[@tiangolo](https://github.com/tiangolo). - 🔥 Remove Jina AI QA Bot from the docs. PR
[#11268](https://github.com/tiangolo/fastapi/pull/11268)by[@nan-wang](https://github.com/nan-wang). - 🔧 Update sponsors, remove Jina, remove Powens, move TestDriven.io. PR
[#11213](https://github.com/tiangolo/fastapi/pull/11213)by[@tiangolo](https://github.com/tiangolo).

## 0.110.0 (2024-02-24)[¶](#01100-2024-02-24)

### Breaking Changes[¶](#breaking-changes_7)

- 🐛 Fix unhandled growing memory for internal server errors, refactor dependencies with
`yield`

and`except`

to require raising again as in regular Python. PR[#11191](https://github.com/tiangolo/fastapi/pull/11191)by[@tiangolo](https://github.com/tiangolo).- This is a breaking change (and only slightly) if you used dependencies with
`yield`

, used`except`

in those dependencies, and didn't raise again. - This was reported internally by
[@rushilsrivastava](https://github.com/rushilsrivastava)as a memory leak when the server had unhandled exceptions that would produce internal server errors, the memory allocated before that point would not be released. - Read the new docs:
[Dependencies with](https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-with-yield/#dependencies-with-yield-and-except).`yield`

and`except`


- This is a breaking change (and only slightly) if you used dependencies with

In short, if you had dependencies that looked like:

```
def my_dep():
try:
yield
except SomeException:
pass
```


Now you need to make sure you raise again after `except`

, just as you would in regular Python:

```
def my_dep():
try:
yield
except SomeException:
raise
```


### Docs[¶](#docs_49)

- ✏️ Fix minor typos in
`docs/ko/docs/`

. PR[#11126](https://github.com/tiangolo/fastapi/pull/11126)by[@KaniKim](https://github.com/KaniKim). - ✏️ Fix minor typo in
`fastapi/applications.py`

. PR[#11099](https://github.com/tiangolo/fastapi/pull/11099)by[@JacobHayes](https://github.com/JacobHayes).

### Translations[¶](#translations_44)

- 🌐 Add German translation for
`docs/de/docs/reference/background.md`

. PR[#10820](https://github.com/tiangolo/fastapi/pull/10820)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/templating.md`

. PR[#10842](https://github.com/tiangolo/fastapi/pull/10842)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/external-links.md`

. PR[#10852](https://github.com/tiangolo/fastapi/pull/10852)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Update Turkish translation for
`docs/tr/docs/tutorial/query-params.md`

. PR[#11162](https://github.com/tiangolo/fastapi/pull/11162)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add German translation for
`docs/de/docs/reference/encoders.md`

. PR[#10840](https://github.com/tiangolo/fastapi/pull/10840)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/responses.md`

. PR[#10825](https://github.com/tiangolo/fastapi/pull/10825)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/reference/request.md`

. PR[#10821](https://github.com/tiangolo/fastapi/pull/10821)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add Turkish translation for
`docs/tr/docs/tutorial/query-params.md`

. PR[#11078](https://github.com/tiangolo/fastapi/pull/11078)by[@emrhnsyts](https://github.com/emrhnsyts). - 🌐 Add German translation for
`docs/de/docs/reference/fastapi.md`

. PR[#10813](https://github.com/tiangolo/fastapi/pull/10813)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/newsletter.md`

. PR[#10853](https://github.com/tiangolo/fastapi/pull/10853)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add Traditional Chinese translation for
`docs/zh-hant/docs/learn/index.md`

. PR[#11142](https://github.com/tiangolo/fastapi/pull/11142)by[@hsuanchi](https://github.com/hsuanchi). - 🌐 Add Korean translation for
`/docs/ko/docs/tutorial/dependencies/global-dependencies.md`

. PR[#11123](https://github.com/tiangolo/fastapi/pull/11123)by[@riroan](https://github.com/riroan). - 🌐 Add Korean translation for
`/docs/ko/docs/tutorial/dependencies/dependencies-in-path-operation-decorators.md`

. PR[#11124](https://github.com/tiangolo/fastapi/pull/11124)by[@riroan](https://github.com/riroan). - 🌐 Add Korean translation for
`/docs/ko/docs/tutorial/schema-extra-example.md`

. PR[#11121](https://github.com/tiangolo/fastapi/pull/11121)by[@KaniKim](https://github.com/KaniKim). - 🌐 Add Korean translation for
`/docs/ko/docs/tutorial/body-fields.md`

. PR[#11112](https://github.com/tiangolo/fastapi/pull/11112)by[@KaniKim](https://github.com/KaniKim). - 🌐 Add Korean translation for
`/docs/ko/docs/tutorial/cookie-params.md`

. PR[#11118](https://github.com/tiangolo/fastapi/pull/11118)by[@riroan](https://github.com/riroan). - 🌐 Update Korean translation for
`/docs/ko/docs/dependencies/index.md`

. PR[#11114](https://github.com/tiangolo/fastapi/pull/11114)by[@KaniKim](https://github.com/KaniKim). - 🌐 Update Korean translation for
`/docs/ko/docs/deployment/docker.md`

. PR[#11113](https://github.com/tiangolo/fastapi/pull/11113)by[@KaniKim](https://github.com/KaniKim). - 🌐 Update Turkish translation for
`docs/tr/docs/tutorial/first-steps.md`

. PR[#11094](https://github.com/tiangolo/fastapi/pull/11094)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Spanish translation for
`docs/es/docs/advanced/security/index.md`

. PR[#2278](https://github.com/tiangolo/fastapi/pull/2278)by[@Xaraxx](https://github.com/Xaraxx). - 🌐 Add Spanish translation for
`docs/es/docs/advanced/response-headers.md`

. PR[#2276](https://github.com/tiangolo/fastapi/pull/2276)by[@Xaraxx](https://github.com/Xaraxx). - 🌐 Add Spanish translation for
`docs/es/docs/deployment/index.md`

and`~/deployment/versions.md`

. PR[#9669](https://github.com/tiangolo/fastapi/pull/9669)by[@pabloperezmoya](https://github.com/pabloperezmoya). - 🌐 Add Spanish translation for
`docs/es/docs/benchmarks.md`

. PR[#10928](https://github.com/tiangolo/fastapi/pull/10928)by[@pablocm83](https://github.com/pablocm83). - 🌐 Add Spanish translation for
`docs/es/docs/advanced/response-change-status-code.md`

. PR[#11100](https://github.com/tiangolo/fastapi/pull/11100)by[@alejsdev](https://github.com/alejsdev).

## 0.109.2 (2024-02-04)[¶](#01092-2024-02-04)

### Upgrades[¶](#upgrades_18)

### Translations[¶](#translations_45)

### Internal[¶](#internal_68)

## 0.109.1 (2024-02-03)[¶](#01091-2024-02-03)

### Security fixes[¶](#security-fixes)

- ⬆️ Upgrade minimum version of
`python-multipart`

to`>=0.0.7`

to fix a vulnerability when using form data with a ReDos attack. You can also simply upgrade`python-multipart`

.

Read more in the [advisory: Content-Type Header ReDoS](https://github.com/tiangolo/fastapi/security/advisories/GHSA-qf9m-vfgh-m389).

### Features[¶](#features_17)

### Refactors[¶](#refactors_29)

- ✅ Refactor tests for duplicate operation ID generation for compatibility with other tools running the FastAPI test suite. PR
[#10876](https://github.com/tiangolo/fastapi/pull/10876)by[@emmettbutler](https://github.com/emmettbutler). - ♻️ Simplify string format with f-strings in
`fastapi/utils.py`

. PR[#10576](https://github.com/tiangolo/fastapi/pull/10576)by[@eukub](https://github.com/eukub). - 🔧 Fix Ruff configuration unintentionally enabling and re-disabling mccabe complexity check. PR
[#10893](https://github.com/tiangolo/fastapi/pull/10893)by[@jiridanek](https://github.com/jiridanek). - ✅ Re-enable test in
`tests/test_tutorial/test_header_params/test_tutorial003.py`

after fix in Starlette. PR[#10904](https://github.com/tiangolo/fastapi/pull/10904)by[@ooknimm](https://github.com/ooknimm).

### Docs[¶](#docs_50)

- 📝 Tweak wording in
`help-fastapi.md`

. PR[#11040](https://github.com/tiangolo/fastapi/pull/11040)by[@tiangolo](https://github.com/tiangolo). - 📝 Tweak docs for Behind a Proxy. PR
[#11038](https://github.com/tiangolo/fastapi/pull/11038)by[@tiangolo](https://github.com/tiangolo). - 📝 Add External Link: 10 Tips for adding SQLAlchemy to FastAPI. PR
[#11036](https://github.com/tiangolo/fastapi/pull/11036)by[@Donnype](https://github.com/Donnype). - 📝 Add External Link: Tips on migrating from Flask to FastAPI and vice-versa. PR
[#11029](https://github.com/tiangolo/fastapi/pull/11029)by[@jtemporal](https://github.com/jtemporal). - 📝 Deprecate old tutorials: Peewee, Couchbase, encode/databases. PR
[#10979](https://github.com/tiangolo/fastapi/pull/10979)by[@tiangolo](https://github.com/tiangolo). - ✏️ Fix typo in
`fastapi/security/oauth2.py`

. PR[#10972](https://github.com/tiangolo/fastapi/pull/10972)by[@RafalSkolasinski](https://github.com/RafalSkolasinski). - 📝 Update
`HTTPException`

details in`docs/en/docs/tutorial/handling-errors.md`

. PR[#5418](https://github.com/tiangolo/fastapi/pull/5418)by[@papb](https://github.com/papb). - ✏️ A few tweaks in
`docs/de/docs/tutorial/first-steps.md`

. PR[#10959](https://github.com/tiangolo/fastapi/pull/10959)by[@nilslindemann](https://github.com/nilslindemann). - ✏️ Fix link in
`docs/en/docs/advanced/async-tests.md`

. PR[#10960](https://github.com/tiangolo/fastapi/pull/10960)by[@nilslindemann](https://github.com/nilslindemann). - ✏️ Fix typos for Spanish documentation. PR
[#10957](https://github.com/tiangolo/fastapi/pull/10957)by[@jlopezlira](https://github.com/jlopezlira). - 📝 Add warning about lifespan functions and backwards compatibility with events. PR
[#10734](https://github.com/tiangolo/fastapi/pull/10734)by[@jacob-indigo](https://github.com/jacob-indigo). - ✏️ Fix broken link in
`docs/tutorial/sql-databases.md`

in several languages. PR[#10716](https://github.com/tiangolo/fastapi/pull/10716)by[@theoohoho](https://github.com/theoohoho). - ✏️ Remove broken links from
`external_links.yml`

. PR[#10943](https://github.com/tiangolo/fastapi/pull/10943)by[@Torabek](https://github.com/Torabek). - 📝 Update template docs with more info about
`url_for`

. PR[#5937](https://github.com/tiangolo/fastapi/pull/5937)by[@EzzEddin](https://github.com/EzzEddin). - 📝 Update usage of Token model in security docs. PR
[#9313](https://github.com/tiangolo/fastapi/pull/9313)by[@piotrszacilowski](https://github.com/piotrszacilowski). - ✏️ Update highlighted line in
`docs/en/docs/tutorial/bigger-applications.md`

. PR[#5490](https://github.com/tiangolo/fastapi/pull/5490)by[@papb](https://github.com/papb). - 📝 Add External Link: Explore How to Effectively Use JWT With FastAPI. PR
[#10212](https://github.com/tiangolo/fastapi/pull/10212)by[@aanchlia](https://github.com/aanchlia). - 📝 Add hyperlink to
`docs/en/docs/tutorial/static-files.md`

. PR[#10243](https://github.com/tiangolo/fastapi/pull/10243)by[@hungtsetse](https://github.com/hungtsetse). - 📝 Add External Link: Instrument a FastAPI service adding tracing with OpenTelemetry and send/show traces in Grafana Tempo. PR
[#9440](https://github.com/tiangolo/fastapi/pull/9440)by[@softwarebloat](https://github.com/softwarebloat). - 📝 Review and rewording of
`en/docs/contributing.md`

. PR[#10480](https://github.com/tiangolo/fastapi/pull/10480)by[@nilslindemann](https://github.com/nilslindemann). - 📝 Add External Link: ML serving and monitoring with FastAPI and Evidently. PR
[#9701](https://github.com/tiangolo/fastapi/pull/9701)by[@mnrozhkov](https://github.com/mnrozhkov). - 📝 Reword in docs, from "have in mind" to "keep in mind". PR
[#10376](https://github.com/tiangolo/fastapi/pull/10376)by[@malicious](https://github.com/malicious). - 📝 Add External Link: Talk by Jeny Sadadia. PR
[#10265](https://github.com/tiangolo/fastapi/pull/10265)by[@JenySadadia](https://github.com/JenySadadia). - 📝 Add location info to
`tutorial/bigger-applications.md`

. PR[#10552](https://github.com/tiangolo/fastapi/pull/10552)by[@nilslindemann](https://github.com/nilslindemann). - ✏️ Fix Pydantic method name in
`docs/en/docs/advanced/path-operation-advanced-configuration.md`

. PR[#10826](https://github.com/tiangolo/fastapi/pull/10826)by[@ahmedabdou14](https://github.com/ahmedabdou14).

### Translations[¶](#translations_46)

- 🌐 Add Spanish translation for
`docs/es/docs/external-links.md`

. PR[#10933](https://github.com/tiangolo/fastapi/pull/10933)by[@pablocm83](https://github.com/pablocm83). - 🌐 Update Korean translation for
`docs/ko/docs/tutorial/first-steps.md`

,`docs/ko/docs/tutorial/index.md`

,`docs/ko/docs/tutorial/path-params.md`

, and`docs/ko/docs/tutorial/query-params.md`

. PR[#4218](https://github.com/tiangolo/fastapi/pull/4218)by[@SnowSuno](https://github.com/SnowSuno). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/dependencies/dependencies-with-yield.md`

. PR[#10870](https://github.com/tiangolo/fastapi/pull/10870)by[@zhiquanchi](https://github.com/zhiquanchi). - 🌐 Add Chinese translation for
`docs/zh/docs/deployment/concepts.md`

. PR[#10282](https://github.com/tiangolo/fastapi/pull/10282)by[@xzmeng](https://github.com/xzmeng). - 🌐 Add Azerbaijani translation for
`docs/az/docs/index.md`

. PR[#11047](https://github.com/tiangolo/fastapi/pull/11047)by[@aykhans](https://github.com/aykhans). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/middleware.md`

. PR[#2829](https://github.com/tiangolo/fastapi/pull/2829)by[@JeongHyeongKim](https://github.com/JeongHyeongKim). - 🌐 Add German translation for
`docs/de/docs/tutorial/body-nested-models.md`

. PR[#10313](https://github.com/tiangolo/fastapi/pull/10313)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add Persian translation for
`docs/fa/docs/tutorial/middleware.md`

. PR[#9695](https://github.com/tiangolo/fastapi/pull/9695)by[@mojtabapaso](https://github.com/mojtabapaso). - 🌐 Update Farsi translation for
`docs/fa/docs/index.md`

. PR[#10216](https://github.com/tiangolo/fastapi/pull/10216)by[@theonlykingpin](https://github.com/theonlykingpin). - 🌐 Add German translation for
`docs/de/docs/tutorial/body-fields.md`

. PR[#10310](https://github.com/tiangolo/fastapi/pull/10310)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/body.md`

. PR[#10295](https://github.com/tiangolo/fastapi/pull/10295)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/body-multiple-params.md`

. PR[#10308](https://github.com/tiangolo/fastapi/pull/10308)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/security/get-current-user.md`

. PR[#2681](https://github.com/tiangolo/fastapi/pull/2681)by[@sh0nk](https://github.com/sh0nk). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/advanced-dependencies.md`

. PR[#3798](https://github.com/tiangolo/fastapi/pull/3798)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/events.md`

. PR[#3815](https://github.com/tiangolo/fastapi/pull/3815)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/behind-a-proxy.md`

. PR[#3820](https://github.com/tiangolo/fastapi/pull/3820)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/testing-events.md`

. PR[#3818](https://github.com/tiangolo/fastapi/pull/3818)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/testing-websockets.md`

. PR[#3817](https://github.com/tiangolo/fastapi/pull/3817)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/testing-database.md`

. PR[#3821](https://github.com/tiangolo/fastapi/pull/3821)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/deployment/deta.md`

. PR[#3837](https://github.com/tiangolo/fastapi/pull/3837)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/history-design-future.md`

. PR[#3832](https://github.com/tiangolo/fastapi/pull/3832)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/project-generation.md`

. PR[#3831](https://github.com/tiangolo/fastapi/pull/3831)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for
`docs/zh/docs/deployment/docker.md`

. PR[#10296](https://github.com/tiangolo/fastapi/pull/10296)by[@xzmeng](https://github.com/xzmeng). - 🌐 Update Spanish translation for
`docs/es/docs/features.md`

. PR[#10884](https://github.com/tiangolo/fastapi/pull/10884)by[@pablocm83](https://github.com/pablocm83). - 🌐 Add Spanish translation for
`docs/es/docs/newsletter.md`

. PR[#10922](https://github.com/tiangolo/fastapi/pull/10922)by[@pablocm83](https://github.com/pablocm83). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/background-tasks.md`

. PR[#5910](https://github.com/tiangolo/fastapi/pull/5910)by[@junah201](https://github.com/junah201). - :globe_with_meridians: Add Turkish translation for
`docs/tr/docs/alternatives.md`

. PR[#10502](https://github.com/tiangolo/fastapi/pull/10502)by[@alperiox](https://github.com/alperiox). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/dependencies/index.md`

. PR[#10989](https://github.com/tiangolo/fastapi/pull/10989)by[@KaniKim](https://github.com/KaniKim). - 🌐 Add Korean translation for
`/docs/ko/docs/tutorial/body.md`

. PR[#11000](https://github.com/tiangolo/fastapi/pull/11000)by[@KaniKim](https://github.com/KaniKim). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/schema-extra-example.md`

. PR[#4065](https://github.com/tiangolo/fastapi/pull/4065)by[@luccasmmg](https://github.com/luccasmmg). - 🌐 Add Turkish translation for
`docs/tr/docs/history-design-future.md`

. PR[#11012](https://github.com/tiangolo/fastapi/pull/11012)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Turkish translation for
`docs/tr/docs/resources/index.md`

. PR[#11020](https://github.com/tiangolo/fastapi/pull/11020)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Turkish translation for
`docs/tr/docs/how-to/index.md`

. PR[#11021](https://github.com/tiangolo/fastapi/pull/11021)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add German translation for
`docs/de/docs/tutorial/query-params.md`

. PR[#10293](https://github.com/tiangolo/fastapi/pull/10293)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/benchmarks.md`

. PR[#10866](https://github.com/tiangolo/fastapi/pull/10866)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add Turkish translation for
`docs/tr/docs/learn/index.md`

. PR[#11014](https://github.com/tiangolo/fastapi/pull/11014)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Persian translation for
`docs/fa/docs/tutorial/security/index.md`

. PR[#9945](https://github.com/tiangolo/fastapi/pull/9945)by[@mojtabapaso](https://github.com/mojtabapaso). - 🌐 Add Turkish translation for
`docs/tr/docs/help/index.md`

. PR[#11013](https://github.com/tiangolo/fastapi/pull/11013)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Turkish translation for
`docs/tr/docs/about/index.md`

. PR[#11006](https://github.com/tiangolo/fastapi/pull/11006)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Update Turkish translation for
`docs/tr/docs/benchmarks.md`

. PR[#11005](https://github.com/tiangolo/fastapi/pull/11005)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Italian translation for
`docs/it/docs/index.md`

. PR[#5233](https://github.com/tiangolo/fastapi/pull/5233)by[@matteospanio](https://github.com/matteospanio). - 🌐 Add Korean translation for
`docs/ko/docs/help/index.md`

. PR[#10983](https://github.com/tiangolo/fastapi/pull/10983)by[@KaniKim](https://github.com/KaniKim). - 🌐 Add Korean translation for
`docs/ko/docs/features.md`

. PR[#10976](https://github.com/tiangolo/fastapi/pull/10976)by[@KaniKim](https://github.com/KaniKim). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/security/get-current-user.md`

. PR[#5737](https://github.com/tiangolo/fastapi/pull/5737)by[@KdHyeon0661](https://github.com/KdHyeon0661). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/security/first-steps.md`

. PR[#10541](https://github.com/tiangolo/fastapi/pull/10541)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/handling-errors.md`

. PR[#10375](https://github.com/tiangolo/fastapi/pull/10375)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/encoder.md`

. PR[#10374](https://github.com/tiangolo/fastapi/pull/10374)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/body-updates.md`

. PR[#10373](https://github.com/tiangolo/fastapi/pull/10373)by[@AlertRED](https://github.com/AlertRED). - 🌐 Russian translation: updated
`fastapi-people.md`

.. PR[#10255](https://github.com/tiangolo/fastapi/pull/10255)by[@NiKuma0](https://github.com/NiKuma0). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/security/index.md`

. PR[#5798](https://github.com/tiangolo/fastapi/pull/5798)by[@3w36zj6](https://github.com/3w36zj6). - 🌐 Add German translation for
`docs/de/docs/advanced/generate-clients.md`

. PR[#10725](https://github.com/tiangolo/fastapi/pull/10725)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/openapi-webhooks.md`

. PR[#10712](https://github.com/tiangolo/fastapi/pull/10712)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/custom-response.md`

. PR[#10624](https://github.com/tiangolo/fastapi/pull/10624)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/advanced/additional-status-codes.md`

. PR[#10617](https://github.com/tiangolo/fastapi/pull/10617)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add German translation for
`docs/de/docs/tutorial/middleware.md`

. PR[#10391](https://github.com/tiangolo/fastapi/pull/10391)by[@JohannesJungbluth](https://github.com/JohannesJungbluth). - 🌐 Add German translation for introduction documents. PR
[#10497](https://github.com/tiangolo/fastapi/pull/10497)by[@nilslindemann](https://github.com/nilslindemann). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/encoder.md`

. PR[#1955](https://github.com/tiangolo/fastapi/pull/1955)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/extra-data-types.md`

. PR[#1932](https://github.com/tiangolo/fastapi/pull/1932)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Turkish translation for
`docs/tr/docs/async.md`

. PR[#5191](https://github.com/tiangolo/fastapi/pull/5191)by[@BilalAlpaslan](https://github.com/BilalAlpaslan). - 🌐 Add Turkish translation for
`docs/tr/docs/project-generation.md`

. PR[#5192](https://github.com/tiangolo/fastapi/pull/5192)by[@BilalAlpaslan](https://github.com/BilalAlpaslan). - 🌐 Add Korean translation for
`docs/ko/docs/deployment/docker.md`

. PR[#5657](https://github.com/tiangolo/fastapi/pull/5657)by[@nearnear](https://github.com/nearnear). - 🌐 Add Korean translation for
`docs/ko/docs/deployment/server-workers.md`

. PR[#4935](https://github.com/tiangolo/fastapi/pull/4935)by[@jujumilk3](https://github.com/jujumilk3). - 🌐 Add Korean translation for
`docs/ko/docs/deployment/index.md`

. PR[#4561](https://github.com/tiangolo/fastapi/pull/4561)by[@jujumilk3](https://github.com/jujumilk3). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/path-operation-configuration.md`

. PR[#3639](https://github.com/tiangolo/fastapi/pull/3639)by[@jungsu-kwon](https://github.com/jungsu-kwon). - 🌐 Modify the description of
`zh`

- Traditional Chinese. PR[#10889](https://github.com/tiangolo/fastapi/pull/10889)by[@cherinyy](https://github.com/cherinyy). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/static-files.md`

. PR[#2957](https://github.com/tiangolo/fastapi/pull/2957)by[@jeesang7](https://github.com/jeesang7). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/response-model.md`

. PR[#2766](https://github.com/tiangolo/fastapi/pull/2766)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/body-multiple-params.md`

. PR[#2461](https://github.com/tiangolo/fastapi/pull/2461)by[@PandaHun](https://github.com/PandaHun). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/query-params-str-validations.md`

. PR[#2415](https://github.com/tiangolo/fastapi/pull/2415)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Korean translation for
`docs/ko/docs/python-types.md`

. PR[#2267](https://github.com/tiangolo/fastapi/pull/2267)by[@jrim](https://github.com/jrim). - 🌐 Add Korean translation for
`docs/ko/docs/tutorial/body-nested-models.md`

. PR[#2506](https://github.com/tiangolo/fastapi/pull/2506)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Korean translation for
`docs/ko/docs/learn/index.md`

. PR[#10977](https://github.com/tiangolo/fastapi/pull/10977)by[@KaniKim](https://github.com/KaniKim). - 🌐 Initialize translations for Traditional Chinese. PR
[#10505](https://github.com/tiangolo/fastapi/pull/10505)by[@hsuanchi](https://github.com/hsuanchi). - ✏️ Tweak the german translation of
`docs/de/docs/tutorial/index.md`

. PR[#10962](https://github.com/tiangolo/fastapi/pull/10962)by[@nilslindemann](https://github.com/nilslindemann). - ✏️ Fix typo error in
`docs/ko/docs/tutorial/path-params.md`

. PR[#10758](https://github.com/tiangolo/fastapi/pull/10758)by[@2chanhaeng](https://github.com/2chanhaeng). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/dependencies/dependencies-with-yield.md`

. PR[#1961](https://github.com/tiangolo/fastapi/pull/1961)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/dependencies/dependencies-in-path-operation-decorators.md`

. PR[#1960](https://github.com/tiangolo/fastapi/pull/1960)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/dependencies/sub-dependencies.md`

. PR[#1959](https://github.com/tiangolo/fastapi/pull/1959)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/background-tasks.md`

. PR[#2668](https://github.com/tiangolo/fastapi/pull/2668)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/dependencies/index.md`

and`docs/ja/docs/tutorial/dependencies/classes-as-dependencies.md`

. PR[#1958](https://github.com/tiangolo/fastapi/pull/1958)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/response-model.md`

. PR[#1938](https://github.com/tiangolo/fastapi/pull/1938)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/body-multiple-params.md`

. PR[#1903](https://github.com/tiangolo/fastapi/pull/1903)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/path-params-numeric-validations.md`

. PR[#1902](https://github.com/tiangolo/fastapi/pull/1902)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/python-types.md`

. PR[#1899](https://github.com/tiangolo/fastapi/pull/1899)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/handling-errors.md`

. PR[#1953](https://github.com/tiangolo/fastapi/pull/1953)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/response-status-code.md`

. PR[#1942](https://github.com/tiangolo/fastapi/pull/1942)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/extra-models.md`

. PR[#1941](https://github.com/tiangolo/fastapi/pull/1941)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/schema-extra-example.md`

. PR[#1931](https://github.com/tiangolo/fastapi/pull/1931)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/body-nested-models.md`

. PR[#1930](https://github.com/tiangolo/fastapi/pull/1930)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for
`docs/ja/docs/tutorial/body-fields.md`

. PR[#1923](https://github.com/tiangolo/fastapi/pull/1923)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add German translation for
`docs/de/docs/tutorial/index.md`

. PR[#9502](https://github.com/tiangolo/fastapi/pull/9502)by[@fhabers21](https://github.com/fhabers21). - 🌐 Add German translation for
`docs/de/docs/tutorial/background-tasks.md`

. PR[#10566](https://github.com/tiangolo/fastapi/pull/10566)by[@nilslindemann](https://github.com/nilslindemann). - ✏️ Fix typo in
`docs/ru/docs/index.md`

. PR[#10672](https://github.com/tiangolo/fastapi/pull/10672)by[@Delitel-WEB](https://github.com/Delitel-WEB). - ✏️ Fix typos in
`docs/zh/docs/tutorial/extra-data-types.md`

. PR[#10727](https://github.com/tiangolo/fastapi/pull/10727)by[@HiemalBeryl](https://github.com/HiemalBeryl). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/dependencies/classes-as-dependencies.md`

. PR[#10410](https://github.com/tiangolo/fastapi/pull/10410)by[@AlertRED](https://github.com/AlertRED).

### Internal[¶](#internal_69)

- 👥 Update FastAPI People. PR
[#11074](https://github.com/tiangolo/fastapi/pull/11074)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors: add Coherence. PR
[#11066](https://github.com/tiangolo/fastapi/pull/11066)by[@tiangolo](https://github.com/tiangolo). - 👷 Upgrade GitHub Action issue-manager. PR
[#11056](https://github.com/tiangolo/fastapi/pull/11056)by[@tiangolo](https://github.com/tiangolo). - 🍱 Update sponsors: TalkPython badge. PR
[#11052](https://github.com/tiangolo/fastapi/pull/11052)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors: TalkPython badge image. PR
[#11048](https://github.com/tiangolo/fastapi/pull/11048)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, remove Deta. PR
[#11041](https://github.com/tiangolo/fastapi/pull/11041)by[@tiangolo](https://github.com/tiangolo). - 💄 Fix CSS breaking RTL languages (erroneously introduced by a previous RTL PR). PR
[#11039](https://github.com/tiangolo/fastapi/pull/11039)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add Italian to
`mkdocs.yml`

. PR[#11016](https://github.com/tiangolo/fastapi/pull/11016)by[@alejsdev](https://github.com/alejsdev). - 🔨 Verify
`mkdocs.yml`

languages in CI, update`docs.py`

. PR[#11009](https://github.com/tiangolo/fastapi/pull/11009)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update config in
`label-approved.yml`

to accept translations with 1 reviewer. PR[#11007](https://github.com/tiangolo/fastapi/pull/11007)by[@alejsdev](https://github.com/alejsdev). - 👷 Add changes-requested handling in GitHub Action issue manager. PR
[#10971](https://github.com/tiangolo/fastapi/pull/10971)by[@tiangolo](https://github.com/tiangolo). - 🔧 Group dependencies on dependabot updates. PR
[#10952](https://github.com/tiangolo/fastapi/pull/10952)by[@Kludex](https://github.com/Kludex). - ⬆ Bump actions/setup-python from 4 to 5. PR
[#10764](https://github.com/tiangolo/fastapi/pull/10764)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pypa/gh-action-pypi-publish from 1.8.10 to 1.8.11. PR
[#10731](https://github.com/tiangolo/fastapi/pull/10731)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump dawidd6/action-download-artifact from 2.28.0 to 3.0.0. PR
[#10777](https://github.com/tiangolo/fastapi/pull/10777)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Add support for translations to languages with a longer code name, like
`zh-hant`

. PR[#10950](https://github.com/tiangolo/fastapi/pull/10950)by[@tiangolo](https://github.com/tiangolo).

## 0.109.0 (2024-01-11)[¶](#01090-2024-01-11)

### Features[¶](#features_18)

### Upgrades[¶](#upgrades_19)

### Docs[¶](#docs_51)

- ✏️ Fix typo in
`docs/en/docs/alternatives.md`

. PR[#10931](https://github.com/tiangolo/fastapi/pull/10931)by[@s111d](https://github.com/s111d). - 📝 Replace
`email`

with`username`

in`docs_src/security/tutorial007`

code examples. PR[#10649](https://github.com/tiangolo/fastapi/pull/10649)by[@nilslindemann](https://github.com/nilslindemann). - 📝 Add VS Code tutorial link. PR
[#10592](https://github.com/tiangolo/fastapi/pull/10592)by[@nilslindemann](https://github.com/nilslindemann). - 📝 Add notes about Pydantic v2's new
`.model_dump()`

. PR[#10929](https://github.com/tiangolo/fastapi/pull/10929)by[@tiangolo](https://github.com/tiangolo). - 📝 Fix broken link in
`docs/en/docs/tutorial/sql-databases.md`

. PR[#10765](https://github.com/tiangolo/fastapi/pull/10765)by[@HurSungYun](https://github.com/HurSungYun). - 📝 Add External Link: FastAPI application monitoring made easy. PR
[#10917](https://github.com/tiangolo/fastapi/pull/10917)by[@tiangolo](https://github.com/tiangolo). - ✨ Generate automatic language names for docs translations. PR
[#5354](https://github.com/tiangolo/fastapi/pull/5354)by[@jakul](https://github.com/jakul). - ✏️ Fix typos in
`docs/en/docs/alternatives.md`

and`docs/en/docs/tutorial/dependencies/index.md`

. PR[#10906](https://github.com/tiangolo/fastapi/pull/10906)by[@s111d](https://github.com/s111d). - ✏️ Fix typos in
`docs/en/docs/tutorial/dependencies/dependencies-with-yield.md`

. PR[#10834](https://github.com/tiangolo/fastapi/pull/10834)by[@Molkree](https://github.com/Molkree). - 📝 Add article: "Building a RESTful API with FastAPI: Secure Signup and Login Functionality Included". PR
[#9733](https://github.com/tiangolo/fastapi/pull/9733)by[@dxphilo](https://github.com/dxphilo). - 📝 Add warning about lifecycle events with
`AsyncClient`

. PR[#4167](https://github.com/tiangolo/fastapi/pull/4167)by[@andrew-chang-dewitt](https://github.com/andrew-chang-dewitt). - ✏️ Fix typos in
`/docs/reference/exceptions.md`

and`/en/docs/reference/status.md`

. PR[#10809](https://github.com/tiangolo/fastapi/pull/10809)by[@clarencepenz](https://github.com/clarencepenz). - ✏️ Fix typo in
`openapi-callbacks.md`

. PR[#10673](https://github.com/tiangolo/fastapi/pull/10673)by[@kayjan](https://github.com/kayjan). - ✏️ Fix typo in
`fastapi/routing.py`

. PR[#10520](https://github.com/tiangolo/fastapi/pull/10520)by[@sepsh](https://github.com/sepsh). - 📝 Replace HTTP code returned in case of existing user error in docs for testing. PR
[#4482](https://github.com/tiangolo/fastapi/pull/4482)by[@TristanMarion](https://github.com/TristanMarion). - 📝 Add blog for FastAPI & Supabase. PR
[#6018](https://github.com/tiangolo/fastapi/pull/6018)by[@theinfosecguy](https://github.com/theinfosecguy). - 📝 Update example source files for SQL databases with SQLAlchemy. PR
[#9508](https://github.com/tiangolo/fastapi/pull/9508)by[@s-mustafa](https://github.com/s-mustafa). - 📝 Update code examples in docs for body, replace name
`create_item`

with`update_item`

when appropriate. PR[#5913](https://github.com/tiangolo/fastapi/pull/5913)by[@OttoAndrey](https://github.com/OttoAndrey). - ✏️ Fix typo in dependencies with yield source examples. PR
[#10847](https://github.com/tiangolo/fastapi/pull/10847)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_47)

- 🌐 Add Bengali translation for
`docs/bn/docs/index.md`

. PR[#9177](https://github.com/tiangolo/fastapi/pull/9177)by[@Fahad-Md-Kamal](https://github.com/Fahad-Md-Kamal). - ✏️ Update Python version in
`index.md`

in several languages. PR[#10711](https://github.com/tiangolo/fastapi/pull/10711)by[@tamago3keran](https://github.com/tamago3keran). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/request-forms-and-files.md`

. PR[#10347](https://github.com/tiangolo/fastapi/pull/10347)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Ukrainian translation for
`docs/uk/docs/index.md`

. PR[#10362](https://github.com/tiangolo/fastapi/pull/10362)by[@rostik1410](https://github.com/rostik1410). - ✏️ Update Python version in
`docs/ko/docs/index.md`

. PR[#10680](https://github.com/tiangolo/fastapi/pull/10680)by[@Eeap](https://github.com/Eeap). - 🌐 Add Persian translation for
`docs/fa/docs/features.md`

. PR[#5887](https://github.com/tiangolo/fastapi/pull/5887)by[@amirilf](https://github.com/amirilf). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/additional-responses.md`

. PR[#10325](https://github.com/tiangolo/fastapi/pull/10325)by[@ShuibeiC](https://github.com/ShuibeiC). - 🌐 Fix typos in Russian translations for
`docs/ru/docs/tutorial/background-tasks.md`

,`docs/ru/docs/tutorial/body-nested-models.md`

,`docs/ru/docs/tutorial/debugging.md`

,`docs/ru/docs/tutorial/testing.md`

. PR[#10311](https://github.com/tiangolo/fastapi/pull/10311)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/request-files.md`

. PR[#10332](https://github.com/tiangolo/fastapi/pull/10332)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Chinese translation for
`docs/zh/docs/deployment/server-workers.md`

. PR[#10292](https://github.com/tiangolo/fastapi/pull/10292)by[@xzmeng](https://github.com/xzmeng). - 🌐 Add Chinese translation for
`docs/zh/docs/deployment/cloud.md`

. PR[#10291](https://github.com/tiangolo/fastapi/pull/10291)by[@xzmeng](https://github.com/xzmeng). - 🌐 Add Chinese translation for
`docs/zh/docs/deployment/manually.md`

. PR[#10279](https://github.com/tiangolo/fastapi/pull/10279)by[@xzmeng](https://github.com/xzmeng). - 🌐 Add Chinese translation for
`docs/zh/docs/deployment/https.md`

. PR[#10277](https://github.com/tiangolo/fastapi/pull/10277)by[@xzmeng](https://github.com/xzmeng). - 🌐 Add Chinese translation for
`docs/zh/docs/deployment/index.md`

. PR[#10275](https://github.com/tiangolo/fastapi/pull/10275)by[@xzmeng](https://github.com/xzmeng). - 🌐 Add German translation for
`docs/de/docs/tutorial/first-steps.md`

. PR[#9530](https://github.com/tiangolo/fastapi/pull/9530)by[@fhabers21](https://github.com/fhabers21). - 🌐 Update Turkish translation for
`docs/tr/docs/index.md`

. PR[#10444](https://github.com/tiangolo/fastapi/pull/10444)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Chinese translation for
`docs/zh/docs/learn/index.md`

. PR[#10479](https://github.com/tiangolo/fastapi/pull/10479)by[@KAZAMA-DREAM](https://github.com/KAZAMA-DREAM). - 🌐 Add Russian translation for
`docs/ru/docs/learn/index.md`

. PR[#10539](https://github.com/tiangolo/fastapi/pull/10539)by[@AlertRED](https://github.com/AlertRED). - 🌐 Update SQLAlchemy instruction in Chinese translation
`docs/zh/docs/tutorial/sql-databases.md`

. PR[#9712](https://github.com/tiangolo/fastapi/pull/9712)by[@Royc30ne](https://github.com/Royc30ne). - 🌐 Add Turkish translation for
`docs/tr/docs/external-links.md`

. PR[#10549](https://github.com/tiangolo/fastapi/pull/10549)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Spanish translation for
`docs/es/docs/learn/index.md`

. PR[#10885](https://github.com/tiangolo/fastapi/pull/10885)by[@pablocm83](https://github.com/pablocm83). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/body-fields.md`

. PR[#10670](https://github.com/tiangolo/fastapi/pull/10670)by[@ArtemKhymenko](https://github.com/ArtemKhymenko). - 🌐 Add Hungarian translation for
`/docs/hu/docs/index.md`

. PR[#10812](https://github.com/tiangolo/fastapi/pull/10812)by[@takacs](https://github.com/takacs). - 🌐 Add Turkish translation for
`docs/tr/docs/newsletter.md`

. PR[#10550](https://github.com/tiangolo/fastapi/pull/10550)by[@hasansezertasan](https://github.com/hasansezertasan). - 🌐 Add Spanish translation for
`docs/es/docs/help/index.md`

. PR[#10907](https://github.com/tiangolo/fastapi/pull/10907)by[@pablocm83](https://github.com/pablocm83). - 🌐 Add Spanish translation for
`docs/es/docs/about/index.md`

. PR[#10908](https://github.com/tiangolo/fastapi/pull/10908)by[@pablocm83](https://github.com/pablocm83). - 🌐 Add Spanish translation for
`docs/es/docs/resources/index.md`

. PR[#10909](https://github.com/tiangolo/fastapi/pull/10909)by[@pablocm83](https://github.com/pablocm83).

### Internal[¶](#internal_70)

- 👥 Update FastAPI People. PR
[#10871](https://github.com/tiangolo/fastapi/pull/10871)by[@tiangolo](https://github.com/tiangolo). - 👷 Upgrade custom GitHub Action comment-docs-preview-in-pr. PR
[#10916](https://github.com/tiangolo/fastapi/pull/10916)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade GitHub Action latest-changes. PR
[#10915](https://github.com/tiangolo/fastapi/pull/10915)by[@tiangolo](https://github.com/tiangolo). - 👷 Upgrade GitHub Action label-approved. PR
[#10913](https://github.com/tiangolo/fastapi/pull/10913)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade GitHub Action label-approved. PR
[#10905](https://github.com/tiangolo/fastapi/pull/10905)by[@tiangolo](https://github.com/tiangolo).

## 0.108.0 (2023-12-26)[¶](#01080-2023-12-26)

### Upgrades[¶](#upgrades_20)

- ⬆️ Upgrade Starlette to
`>=0.29.0,<0.33.0`

, update docs and usage of templates with new Starlette arguments. Remove pin of AnyIO`>=3.7.1,<4.0.0`

, add support for AnyIO 4.x.x. PR[#10846](https://github.com/tiangolo/fastapi/pull/10846)by[@tiangolo](https://github.com/tiangolo).

## 0.107.0 (2023-12-26)[¶](#01070-2023-12-26)

### Upgrades[¶](#upgrades_21)

### Docs[¶](#docs_52)

- 📝 Add docs: Node.js script alternative to update OpenAPI for generated clients. PR
[#10845](https://github.com/tiangolo/fastapi/pull/10845)by[@alejsdev](https://github.com/alejsdev). - 📝 Restructure Docs section in Contributing page. PR
[#10844](https://github.com/tiangolo/fastapi/pull/10844)by[@alejsdev](https://github.com/alejsdev).

## 0.106.0 (2023-12-25)[¶](#01060-2023-12-25)

### Breaking Changes[¶](#breaking-changes_8)

Using resources from dependencies with `yield`

in background tasks is no longer supported.

This change is what supports the new features, read below. 🤓

### Dependencies with `yield`

, `HTTPException`

and Background Tasks[¶](#dependencies-with-yield-httpexception-and-background-tasks)

Dependencies with `yield`

now can raise `HTTPException`

and other exceptions after `yield`

. 🎉

Read the new docs here: [Dependencies with yield and HTTPException](https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-with-yield/#dependencies-with-yield-and-httpexception).


```
from fastapi import Depends, FastAPI, HTTPException
from typing_extensions import Annotated
app = FastAPI()
data = {
"plumbus": {"description": "Freshly pickled plumbus", "owner": "Morty"},
"portal-gun": {"description": "Gun to create portals", "owner": "Rick"},
}
class OwnerError(Exception):
pass
def get_username():
try:
yield "Rick"
except OwnerError as e:
raise HTTPException(status_code=400, detail=f"Owner error: {e}")
@app.get("/items/{item_id}")
def get_item(item_id: str, username: Annotated[str, Depends(get_username)]):
if item_id not in data:
raise HTTPException(status_code=404, detail="Item not found")
item = data[item_id]
if item["owner"] != username:
raise OwnerError(username)
return item
```


Before FastAPI 0.106.0, raising exceptions after `yield`

was not possible, the exit code in dependencies with `yield`

was executed *after* the response was sent, so [Exception Handlers](https://fastapi.tiangolo.com/tutorial/handling-errors/#install-custom-exception-handlers) would have already run.

This was designed this way mainly to allow using the same objects "yielded" by dependencies inside of background tasks, because the exit code would be executed after the background tasks were finished.

Nevertheless, as this would mean waiting for the response to travel through the network while unnecessarily holding a resource in a dependency with yield (for example a database connection), this was changed in FastAPI 0.106.0.

Additionally, a background task is normally an independent set of logic that should be handled separately, with its own resources (e.g. its own database connection).

If you used to rely on this behavior, now you should create the resources for background tasks inside the background task itself, and use internally only data that doesn't depend on the resources of dependencies with `yield`

.

For example, instead of using the same database session, you would create a new database session inside of the background task, and you would obtain the objects from the database using this new session. And then instead of passing the object from the database as a parameter to the background task function, you would pass the ID of that object and then obtain the object again inside the background task function.

The sequence of execution before FastAPI 0.106.0 was like this diagram:

Time flows from top to bottom. And each column is one of the parts interacting or executing code.

```
sequenceDiagram
participant client as Client
participant handler as Exception handler
participant dep as Dep with yield
participant operation as Path Operation
participant tasks as Background tasks
Note over client,tasks: Can raise exception for dependency, handled after response is sent
Note over client,operation: Can raise HTTPException and can change the response
client ->> dep: Start request
Note over dep: Run code up to yield
opt raise
dep -->> handler: Raise HTTPException
handler -->> client: HTTP error response
dep -->> dep: Raise other exception
end
dep ->> operation: Run dependency, e.g. DB session
opt raise
operation -->> dep: Raise HTTPException
dep -->> handler: Auto forward exception
handler -->> client: HTTP error response
operation -->> dep: Raise other exception
dep -->> handler: Auto forward exception
end
operation ->> client: Return response to client
Note over client,operation: Response is already sent, can't change it anymore
opt Tasks
operation -->> tasks: Send background tasks
end
opt Raise other exception
tasks -->> dep: Raise other exception
end
Note over dep: After yield
opt Handle other exception
dep -->> dep: Handle exception, can't change response. E.g. close DB session.
end
```


The new execution flow can be found in the docs: [Execution of dependencies with yield](https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-with-yield/#execution-of-dependencies-with-yield).

### Features[¶](#features_19)

- ✨ Add support for raising exceptions (including
`HTTPException`

) in dependencies with`yield`

in the exit code, do not support them in background tasks. PR[#10831](https://github.com/tiangolo/fastapi/pull/10831)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_71)

## 0.105.0 (2023-12-12)[¶](#01050-2023-12-12)

### Features[¶](#features_20)

- ✨ Add support for multiple Annotated annotations, e.g.
`Annotated[str, Field(), Query()]`

. PR[#10773](https://github.com/tiangolo/fastapi/pull/10773)by[@tiangolo](https://github.com/tiangolo).

### Refactors[¶](#refactors_30)

### Docs[¶](#docs_53)

### Internal[¶](#internal_72)

- 🔧 Update sponsors, add Scalar. PR
[#10728](https://github.com/tiangolo/fastapi/pull/10728)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, add PropelAuth. PR
[#10760](https://github.com/tiangolo/fastapi/pull/10760)by[@tiangolo](https://github.com/tiangolo). - 👷 Update build docs, verify README on CI. PR
[#10750](https://github.com/tiangolo/fastapi/pull/10750)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, remove Fern. PR
[#10729](https://github.com/tiangolo/fastapi/pull/10729)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, add Codacy. PR
[#10677](https://github.com/tiangolo/fastapi/pull/10677)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, add Reflex. PR
[#10676](https://github.com/tiangolo/fastapi/pull/10676)by[@tiangolo](https://github.com/tiangolo). - 📝 Update release notes, move and check latest-changes. PR
[#10588](https://github.com/tiangolo/fastapi/pull/10588)by[@tiangolo](https://github.com/tiangolo). - 👷 Upgrade latest-changes GitHub Action. PR
[#10587](https://github.com/tiangolo/fastapi/pull/10587)by[@tiangolo](https://github.com/tiangolo).

## 0.104.1 (2023-10-30)[¶](#01041-2023-10-30)

### Fixes[¶](#fixes_44)

- 📌 Pin Swagger UI version to 5.9.0 temporarily to handle a bug crashing it in 5.9.1. PR
[#10529](https://github.com/tiangolo/fastapi/pull/10529)by[@alejandraklachquin](https://github.com/alejandraklachquin).- This is not really a bug in FastAPI but in Swagger UI, nevertheless pinning the version will work while a solution is found on the
[Swagger UI side](https://github.com/swagger-api/swagger-ui/issues/9337).

- This is not really a bug in FastAPI but in Swagger UI, nevertheless pinning the version will work while a solution is found on the

### Docs[¶](#docs_54)

- 📝 Update data structure and render for external-links. PR
[#10495](https://github.com/tiangolo/fastapi/pull/10495)by[@tiangolo](https://github.com/tiangolo). - ✏️ Fix link to SPDX license identifier in
`docs/en/docs/tutorial/metadata.md`

. PR[#10433](https://github.com/tiangolo/fastapi/pull/10433)by[@worldworm](https://github.com/worldworm). - 📝 Update example validation error from Pydantic v1 to match Pydantic v2 in
`docs/en/docs/tutorial/path-params.md`

. PR[#10043](https://github.com/tiangolo/fastapi/pull/10043)by[@giuliowaitforitdavide](https://github.com/giuliowaitforitdavide). - ✏️ Fix typos in emoji docs and in some source examples. PR
[#10438](https://github.com/tiangolo/fastapi/pull/10438)by[@afuetterer](https://github.com/afuetterer). - ✏️ Fix typo in
`docs/en/docs/reference/dependencies.md`

. PR[#10465](https://github.com/tiangolo/fastapi/pull/10465)by[@suravshresth](https://github.com/suravshresth). - ✏️ Fix typos and rewordings in
`docs/en/docs/tutorial/body-nested-models.md`

. PR[#10468](https://github.com/tiangolo/fastapi/pull/10468)by[@yogabonito](https://github.com/yogabonito). - 📝 Update docs, remove references to removed
`pydantic.Required`

in`docs/en/docs/tutorial/query-params-str-validations.md`

. PR[#10469](https://github.com/tiangolo/fastapi/pull/10469)by[@yogabonito](https://github.com/yogabonito). - ✏️ Fix typo in
`docs/en/docs/reference/index.md`

. PR[#10467](https://github.com/tiangolo/fastapi/pull/10467)by[@tarsil](https://github.com/tarsil). - 🔥 Remove unnecessary duplicated docstrings. PR
[#10484](https://github.com/tiangolo/fastapi/pull/10484)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_73)

- ✏️ Update Pydantic links to dotenv support. PR
[#10511](https://github.com/tiangolo/fastapi/pull/10511)by[@White-Mask](https://github.com/White-Mask). - ✏️ Update links in
`docs/en/docs/async.md`

and`docs/zh/docs/async.md`

to make them relative. PR[#10498](https://github.com/tiangolo/fastapi/pull/10498)by[@hasnatsajid](https://github.com/hasnatsajid). - ✏️ Fix links in
`docs/em/docs/async.md`

. PR[#10507](https://github.com/tiangolo/fastapi/pull/10507)by[@hasnatsajid](https://github.com/hasnatsajid). - ✏️ Fix typo in
`docs/em/docs/index.md`

, Python 3.8. PR[#10521](https://github.com/tiangolo/fastapi/pull/10521)by[@kerriop](https://github.com/kerriop). - ⬆ Bump pillow from 9.5.0 to 10.1.0. PR
[#10446](https://github.com/tiangolo/fastapi/pull/10446)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Update mkdocs-material requirement from <9.0.0,>=8.1.4 to >=8.1.4,<10.0.0. PR
[#5862](https://github.com/tiangolo/fastapi/pull/5862)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump mkdocs-material from 9.1.21 to 9.4.7. PR
[#10545](https://github.com/tiangolo/fastapi/pull/10545)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👷 Install MkDocs Material Insiders only when secrets are available, for Dependabot. PR
[#10544](https://github.com/tiangolo/fastapi/pull/10544)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors badges, Databento. PR
[#10519](https://github.com/tiangolo/fastapi/pull/10519)by[@tiangolo](https://github.com/tiangolo). - 👷 Adopt Ruff format. PR
[#10517](https://github.com/tiangolo/fastapi/pull/10517)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add
`CITATION.cff`

file for academic citations. PR[#10496](https://github.com/tiangolo/fastapi/pull/10496)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix overriding MKDocs theme lang in hook. PR
[#10490](https://github.com/tiangolo/fastapi/pull/10490)by[@tiangolo](https://github.com/tiangolo). - 🔥 Drop/close Gitter chat. Questions should go to GitHub Discussions, free conversations to Discord.. PR
[#10485](https://github.com/tiangolo/fastapi/pull/10485)by[@tiangolo](https://github.com/tiangolo).

## 0.104.0 (2023-10-18)[¶](#01040-2023-10-18)

## Features[¶](#features_21)

- ✨ Add reference (code API) docs with PEP 727, add subclass with custom docstrings for
`BackgroundTasks`

, refactor docs structure. PR[#10392](https://github.com/tiangolo/fastapi/pull/10392)by[@tiangolo](https://github.com/tiangolo). New docs at[FastAPI Reference - Code API](https://fastapi.tiangolo.com/reference/).

## Upgrades[¶](#upgrades_22)

### Internal[¶](#internal_74)

- ⬆ Bump dawidd6/action-download-artifact from 2.27.0 to 2.28.0. PR
[#10268](https://github.com/tiangolo/fastapi/pull/10268)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump actions/checkout from 3 to 4. PR
[#10208](https://github.com/tiangolo/fastapi/pull/10208)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pypa/gh-action-pypi-publish from 1.8.6 to 1.8.10. PR
[#10061](https://github.com/tiangolo/fastapi/pull/10061)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Update sponsors, Bump.sh images. PR
[#10381](https://github.com/tiangolo/fastapi/pull/10381)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#10363](https://github.com/tiangolo/fastapi/pull/10363)by[@tiangolo](https://github.com/tiangolo).

## 0.103.2 (2023-09-28)[¶](#01032-2023-09-28)

### Refactors[¶](#refactors_31)

- ⬆️ Upgrade compatibility with Pydantic v2.4, new renamed functions and JSON Schema input/output models with default values. PR
[#10344](https://github.com/tiangolo/fastapi/pull/10344)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_48)

- 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/extra-data-types.md`

. PR[#10132](https://github.com/tiangolo/fastapi/pull/10132)by[@ArtemKhymenko](https://github.com/ArtemKhymenko). - 🌐 Fix typos in French translations for
`docs/fr/docs/advanced/path-operation-advanced-configuration.md`

,`docs/fr/docs/alternatives.md`

,`docs/fr/docs/async.md`

,`docs/fr/docs/features.md`

,`docs/fr/docs/help-fastapi.md`

,`docs/fr/docs/index.md`

,`docs/fr/docs/python-types.md`

,`docs/fr/docs/tutorial/body.md`

,`docs/fr/docs/tutorial/first-steps.md`

,`docs/fr/docs/tutorial/query-params.md`

. PR[#10154](https://github.com/tiangolo/fastapi/pull/10154)by[@s-rigaud](https://github.com/s-rigaud). - 🌐 Add Chinese translation for
`docs/zh/docs/async.md`

. PR[#5591](https://github.com/tiangolo/fastapi/pull/5591)by[@mkdir700](https://github.com/mkdir700). - 🌐 Update Chinese translation for
`docs/tutorial/security/simple-oauth2.md`

. PR[#3844](https://github.com/tiangolo/fastapi/pull/3844)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Korean translation for
`docs/ko/docs/deployment/cloud.md`

. PR[#10191](https://github.com/tiangolo/fastapi/pull/10191)by[@Sion99](https://github.com/Sion99). - 🌐 Add Japanese translation for
`docs/ja/docs/deployment/https.md`

. PR[#10298](https://github.com/tiangolo/fastapi/pull/10298)by[@tamtam-fitness](https://github.com/tamtam-fitness). - 🌐 Fix typo in Russian translation for
`docs/ru/docs/tutorial/body-fields.md`

. PR[#10224](https://github.com/tiangolo/fastapi/pull/10224)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Polish translation for
`docs/pl/docs/help-fastapi.md`

. PR[#10121](https://github.com/tiangolo/fastapi/pull/10121)by[@romabozhanovgithub](https://github.com/romabozhanovgithub). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/header-params.md`

. PR[#10226](https://github.com/tiangolo/fastapi/pull/10226)by[@AlertRED](https://github.com/AlertRED). - 🌐 Add Chinese translation for
`docs/zh/docs/deployment/versions.md`

. PR[#10276](https://github.com/tiangolo/fastapi/pull/10276)by[@xzmeng](https://github.com/xzmeng).

### Internal[¶](#internal_75)

- 🔧 Update sponsors, remove Flint. PR
[#10349](https://github.com/tiangolo/fastapi/pull/10349)by[@tiangolo](https://github.com/tiangolo). - 🔧 Rename label "awaiting review" to "awaiting-review" to simplify search queries. PR
[#10343](https://github.com/tiangolo/fastapi/pull/10343)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, enable Svix (revert #10228). PR
[#10253](https://github.com/tiangolo/fastapi/pull/10253)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, remove Svix. PR
[#10228](https://github.com/tiangolo/fastapi/pull/10228)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, add Bump.sh. PR
[#10227](https://github.com/tiangolo/fastapi/pull/10227)by[@tiangolo](https://github.com/tiangolo).

## 0.103.1 (2023-09-02)[¶](#01031-2023-09-02)

### Fixes[¶](#fixes_45)

- 📌 Pin AnyIO to < 4.0.0 to handle an incompatibility while upgrading to Starlette 0.31.1. PR
[#10194](https://github.com/tiangolo/fastapi/pull/10194)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_55)

- ✏️ Fix validation parameter name in docs, from
`regex`

to`pattern`

. PR[#10085](https://github.com/tiangolo/fastapi/pull/10085)by[@pablodorrio](https://github.com/pablodorrio). - ✏️ Fix indent format in
`docs/en/docs/deployment/server-workers.md`

. PR[#10066](https://github.com/tiangolo/fastapi/pull/10066)by[@tamtam-fitness](https://github.com/tamtam-fitness). - ✏️ Fix Pydantic examples in tutorial for Python types. PR
[#9961](https://github.com/tiangolo/fastapi/pull/9961)by[@rahulsalgare](https://github.com/rahulsalgare). - ✏️ Fix link to Pydantic docs in
`docs/en/docs/tutorial/extra-data-types.md`

. PR[#10155](https://github.com/tiangolo/fastapi/pull/10155)by[@hasnatsajid](https://github.com/hasnatsajid). - ✏️ Fix typo in
`docs/en/docs/tutorial/handling-errors.md`

. PR[#10170](https://github.com/tiangolo/fastapi/pull/10170)by[@poupapaa](https://github.com/poupapaa). - ✏️ Fix typo in
`docs/en/docs/tutorial/dependencies/dependencies-in-path-operation-decorators.md`

. PR[#10172](https://github.com/tiangolo/fastapi/pull/10172)by[@ragul-kachiappan](https://github.com/ragul-kachiappan).

### Translations[¶](#translations_49)

- 🌐 Remove duplicate line in translation for
`docs/pt/docs/tutorial/path-params.md`

. PR[#10126](https://github.com/tiangolo/fastapi/pull/10126)by[@LecoOliveira](https://github.com/LecoOliveira). - 🌐 Add Yoruba translation for
`docs/yo/docs/index.md`

. PR[#10033](https://github.com/tiangolo/fastapi/pull/10033)by[@AfolabiOlaoluwa](https://github.com/AfolabiOlaoluwa). - 🌐 Add Ukrainian translation for
`docs/uk/docs/python-types.md`

. PR[#10080](https://github.com/tiangolo/fastapi/pull/10080)by[@rostik1410](https://github.com/rostik1410). - 🌐 Add Vietnamese translations for
`docs/vi/docs/tutorial/first-steps.md`

and`docs/vi/docs/tutorial/index.md`

. PR[#10088](https://github.com/tiangolo/fastapi/pull/10088)by[@magiskboy](https://github.com/magiskboy). - 🌐 Add Ukrainian translation for
`docs/uk/docs/alternatives.md`

. PR[#10060](https://github.com/tiangolo/fastapi/pull/10060)by[@whysage](https://github.com/whysage). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/index.md`

. PR[#10079](https://github.com/tiangolo/fastapi/pull/10079)by[@rostik1410](https://github.com/rostik1410). - ✏️ Fix typos in
`docs/en/docs/how-to/separate-openapi-schemas.md`

and`docs/en/docs/tutorial/schema-extra-example.md`

. PR[#10189](https://github.com/tiangolo/fastapi/pull/10189)by[@xzmeng](https://github.com/xzmeng). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/generate-clients.md`

. PR[#9883](https://github.com/tiangolo/fastapi/pull/9883)by[@funny-cat-happy](https://github.com/funny-cat-happy).

### Refactors[¶](#refactors_32)

- ✏️ Fix typos in comment in
`fastapi/applications.py`

. PR[#10045](https://github.com/tiangolo/fastapi/pull/10045)by[@AhsanSheraz](https://github.com/AhsanSheraz). - ✅ Add missing test for OpenAPI examples, it was missing in coverage. PR
[#10188](https://github.com/tiangolo/fastapi/pull/10188)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_76)

## 0.103.0 (2023-08-26)[¶](#01030-2023-08-26)

### Features[¶](#features_22)

- ✨ Add support for
`openapi_examples`

in all FastAPI parameters. PR[#10152](https://github.com/tiangolo/fastapi/pull/10152)by[@tiangolo](https://github.com/tiangolo).- New docs:
[OpenAPI-specific examples](https://fastapi.tiangolo.com/tutorial/schema-extra-example/#openapi-specific-examples).

- New docs:

### Docs[¶](#docs_56)

- 📝 Add note to docs about Separate Input and Output Schemas with FastAPI version. PR
[#10150](https://github.com/tiangolo/fastapi/pull/10150)by[@tiangolo](https://github.com/tiangolo).

## 0.102.0 (2023-08-25)[¶](#01020-2023-08-25)

### Features[¶](#features_23)

- ✨ Add support for disabling the separation of input and output JSON Schemas in OpenAPI with Pydantic v2 with
`separate_input_output_schemas=False`

. PR[#10145](https://github.com/tiangolo/fastapi/pull/10145)by[@tiangolo](https://github.com/tiangolo).- New docs
[Separate OpenAPI Schemas for Input and Output or Not](https://fastapi.tiangolo.com/how-to/separate-openapi-schemas/). - This PR also includes a new setup (internal tools) for generating screenshots for the docs.

- New docs

### Refactors[¶](#refactors_33)

### Docs[¶](#docs_57)

- 📝 Add new docs section, How To - Recipes, move docs that don't have to be read by everyone to How To. PR
[#10114](https://github.com/tiangolo/fastapi/pull/10114)by[@tiangolo](https://github.com/tiangolo). - 📝 Update Advanced docs, add links to sponsor courses. PR
[#10113](https://github.com/tiangolo/fastapi/pull/10113)by[@tiangolo](https://github.com/tiangolo). - 📝 Update docs for generating clients. PR
[#10112](https://github.com/tiangolo/fastapi/pull/10112)by[@tiangolo](https://github.com/tiangolo). - 📝 Tweak MkDocs and add redirects. PR
[#10111](https://github.com/tiangolo/fastapi/pull/10111)by[@tiangolo](https://github.com/tiangolo). - 📝 Restructure docs for cloud providers, include links to sponsors. PR
[#10110](https://github.com/tiangolo/fastapi/pull/10110)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_77)

## 0.101.1 (2023-08-14)[¶](#01011-2023-08-14)

### Fixes[¶](#fixes_46)

- ✨ Add
`ResponseValidationError`

printable details, to show up in server error logs. PR[#10078](https://github.com/tiangolo/fastapi/pull/10078)by[@tiangolo](https://github.com/tiangolo).

### Refactors[¶](#refactors_34)

- ✏️ Fix typo in deprecation warnings in
`fastapi/params.py`

. PR[#9854](https://github.com/tiangolo/fastapi/pull/9854)by[@russbiggs](https://github.com/russbiggs). - ✏️ Fix typos in comments on internal code in
`fastapi/concurrency.py`

and`fastapi/routing.py`

. PR[#9590](https://github.com/tiangolo/fastapi/pull/9590)by[@ElliottLarsen](https://github.com/ElliottLarsen).

### Docs[¶](#docs_58)

- ✏️ Fix typo in release notes. PR
[#9835](https://github.com/tiangolo/fastapi/pull/9835)by[@francisbergin](https://github.com/francisbergin). - 📝 Add external article: Build an SMS Spam Classifier Serverless Database with FaunaDB and FastAPI. PR
[#9847](https://github.com/tiangolo/fastapi/pull/9847)by[@adejumoridwan](https://github.com/adejumoridwan). - 📝 Fix typo in
`docs/en/docs/contributing.md`

. PR[#9878](https://github.com/tiangolo/fastapi/pull/9878)by[@VicenteMerino](https://github.com/VicenteMerino). - 📝 Fix code highlighting in
`docs/en/docs/tutorial/bigger-applications.md`

. PR[#9806](https://github.com/tiangolo/fastapi/pull/9806)by[@theonlykingpin](https://github.com/theonlykingpin).

### Translations[¶](#translations_50)

- 🌐 Add Japanese translation for
`docs/ja/docs/deployment/concepts.md`

. PR[#10062](https://github.com/tiangolo/fastapi/pull/10062)by[@tamtam-fitness](https://github.com/tamtam-fitness). - 🌐 Add Japanese translation for
`docs/ja/docs/deployment/server-workers.md`

. PR[#10064](https://github.com/tiangolo/fastapi/pull/10064)by[@tamtam-fitness](https://github.com/tamtam-fitness). - 🌐 Update Japanese translation for
`docs/ja/docs/deployment/docker.md`

. PR[#10073](https://github.com/tiangolo/fastapi/pull/10073)by[@tamtam-fitness](https://github.com/tamtam-fitness). - 🌐 Add Ukrainian translation for
`docs/uk/docs/fastapi-people.md`

. PR[#10059](https://github.com/tiangolo/fastapi/pull/10059)by[@rostik1410](https://github.com/rostik1410). - 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/cookie-params.md`

. PR[#10032](https://github.com/tiangolo/fastapi/pull/10032)by[@rostik1410](https://github.com/rostik1410). - 🌐 Add Russian translation for
`docs/ru/docs/deployment/docker.md`

. PR[#9971](https://github.com/tiangolo/fastapi/pull/9971)by[@Xewus](https://github.com/Xewus). - 🌐 Add Vietnamese translation for
`docs/vi/docs/python-types.md`

. PR[#10047](https://github.com/tiangolo/fastapi/pull/10047)by[@magiskboy](https://github.com/magiskboy). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/dependencies/global-dependencies.md`

. PR[#9970](https://github.com/tiangolo/fastapi/pull/9970)by[@dudyaosuplayer](https://github.com/dudyaosuplayer). - 🌐 Add Urdu translation for
`docs/ur/docs/benchmarks.md`

. PR[#9974](https://github.com/tiangolo/fastapi/pull/9974)by[@AhsanSheraz](https://github.com/AhsanSheraz).

### Internal[¶](#internal_78)

- 🔧 Add sponsor Porter. PR
[#10051](https://github.com/tiangolo/fastapi/pull/10051)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, add Jina back as bronze sponsor. PR
[#10050](https://github.com/tiangolo/fastapi/pull/10050)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump mypy from 1.4.0 to 1.4.1. PR
[#9756](https://github.com/tiangolo/fastapi/pull/9756)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump mkdocs-material from 9.1.17 to 9.1.21. PR
[#9960](https://github.com/tiangolo/fastapi/pull/9960)by[@dependabot[bot]](https://github.com/apps/dependabot).

## 0.101.0 (2023-08-04)[¶](#01010-2023-08-04)

### Features[¶](#features_24)

- ✨ Enable Pydantic's serialization mode for responses, add support for Pydantic's
`computed_field`

, better OpenAPI for response models, proper required attributes, better generated clients. PR[#10011](https://github.com/tiangolo/fastapi/pull/10011)by[@tiangolo](https://github.com/tiangolo).

### Refactors[¶](#refactors_35)

- ✅ Fix tests for compatibility with pydantic 2.1.1. PR
[#9943](https://github.com/tiangolo/fastapi/pull/9943)by[@dmontagu](https://github.com/dmontagu). - ✅ Fix test error in Windows for
`jsonable_encoder`

. PR[#9840](https://github.com/tiangolo/fastapi/pull/9840)by[@iudeen](https://github.com/iudeen).

### Upgrades[¶](#upgrades_23)

### Translations[¶](#translations_51)

- 🌐 Add Russian translation for
`docs/ru/docs/tutorial/security/index.md`

. PR[#9963](https://github.com/tiangolo/fastapi/pull/9963)by[@eVery1337](https://github.com/eVery1337). - 🌐 Remove Vietnamese note about missing translation. PR
[#9957](https://github.com/tiangolo/fastapi/pull/9957)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_79)

- 👷 Add GitHub Actions step dump context to debug external failures. PR
[#10008](https://github.com/tiangolo/fastapi/pull/10008)by[@tiangolo](https://github.com/tiangolo). - 🔧 Restore MkDocs Material pin after the fix. PR
[#10001](https://github.com/tiangolo/fastapi/pull/10001)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update the Question template to ask for the Pydantic version. PR
[#10000](https://github.com/tiangolo/fastapi/pull/10000)by[@tiangolo](https://github.com/tiangolo). - 📍 Update MkDocs Material dependencies. PR
[#9986](https://github.com/tiangolo/fastapi/pull/9986)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#9999](https://github.com/tiangolo/fastapi/pull/9999)by[@tiangolo](https://github.com/tiangolo). - 🐳 Update Dockerfile with compatibility versions, to upgrade later. PR
[#9998](https://github.com/tiangolo/fastapi/pull/9998)by[@tiangolo](https://github.com/tiangolo). - ➕ Add pydantic-settings to FastAPI People dependencies. PR
[#9988](https://github.com/tiangolo/fastapi/pull/9988)by[@tiangolo](https://github.com/tiangolo). - ♻️ Update FastAPI People logic with new Pydantic. PR
[#9985](https://github.com/tiangolo/fastapi/pull/9985)by[@tiangolo](https://github.com/tiangolo). - 🍱 Update sponsors, Fern badge. PR
[#9982](https://github.com/tiangolo/fastapi/pull/9982)by[@tiangolo](https://github.com/tiangolo). - 👷 Deploy docs to Cloudflare Pages. PR
[#9978](https://github.com/tiangolo/fastapi/pull/9978)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsor Fern. PR
[#9979](https://github.com/tiangolo/fastapi/pull/9979)by[@tiangolo](https://github.com/tiangolo). - 👷 Update CI debug mode with Tmate. PR
[#9977](https://github.com/tiangolo/fastapi/pull/9977)by[@tiangolo](https://github.com/tiangolo).

## 0.100.1 (2023-07-27)[¶](#01001-2023-07-27)

### Fixes[¶](#fixes_47)

- 🐛 Replace
`MultHostUrl`

to`AnyUrl`

for compatibility with older versions of Pydantic v1. PR[#9852](https://github.com/tiangolo/fastapi/pull/9852)by[@Kludex](https://github.com/Kludex).

### Docs[¶](#docs_59)

### Translations[¶](#translations_52)

- 🌐 Add Ukrainian translation for
`docs/uk/docs/tutorial/body.md`

. PR[#4574](https://github.com/tiangolo/fastapi/pull/4574)by[@ss-o-furda](https://github.com/ss-o-furda). - 🌐 Add Vietnamese translation for
`docs/vi/docs/features.md`

and`docs/vi/docs/index.md`

. PR[#3006](https://github.com/tiangolo/fastapi/pull/3006)by[@magiskboy](https://github.com/magiskboy). - 🌐 Add Korean translation for
`docs/ko/docs/async.md`

. PR[#4179](https://github.com/tiangolo/fastapi/pull/4179)by[@NinaHwang](https://github.com/NinaHwang). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/background-tasks.md`

. PR[#9812](https://github.com/tiangolo/fastapi/pull/9812)by[@wdh99](https://github.com/wdh99). - 🌐 Add French translation for
`docs/fr/docs/tutorial/query-params-str-validations.md`

. PR[#4075](https://github.com/tiangolo/fastapi/pull/4075)by[@Smlep](https://github.com/Smlep). - 🌐 Add French translation for
`docs/fr/docs/tutorial/index.md`

. PR[#2234](https://github.com/tiangolo/fastapi/pull/2234)by[@JulianMaurin](https://github.com/JulianMaurin). - 🌐 Add French translation for
`docs/fr/docs/contributing.md`

. PR[#2132](https://github.com/tiangolo/fastapi/pull/2132)by[@JulianMaurin](https://github.com/JulianMaurin). - 🌐 Add French translation for
`docs/fr/docs/benchmarks.md`

. PR[#2155](https://github.com/tiangolo/fastapi/pull/2155)by[@clemsau](https://github.com/clemsau). - 🌐 Update Chinese translations with new source files. PR
[#9738](https://github.com/tiangolo/fastapi/pull/9738)by[@mahone3297](https://github.com/mahone3297). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/request-forms.md`

. PR[#9841](https://github.com/tiangolo/fastapi/pull/9841)by[@dedkot01](https://github.com/dedkot01). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/handling-errors.md`

. PR[#9485](https://github.com/tiangolo/fastapi/pull/9485)by[@Creat55](https://github.com/Creat55).

### Internal[¶](#internal_80)

- 🔧 Update sponsors, add Fern. PR
[#9956](https://github.com/tiangolo/fastapi/pull/9956)by[@tiangolo](https://github.com/tiangolo). - 👷 Update FastAPI People token. PR
[#9844](https://github.com/tiangolo/fastapi/pull/9844)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#9775](https://github.com/tiangolo/fastapi/pull/9775)by[@tiangolo](https://github.com/tiangolo). - 👷 Update MkDocs Material token. PR
[#9843](https://github.com/tiangolo/fastapi/pull/9843)by[@tiangolo](https://github.com/tiangolo). - 👷 Update token for latest changes. PR
[#9842](https://github.com/tiangolo/fastapi/pull/9842)by[@tiangolo](https://github.com/tiangolo).

## 0.100.0 (2023-07-07)[¶](#01000-2023-07-07)

✨ Support for **Pydantic v2** ✨

Pydantic version 2 has the **core** re-written in **Rust** and includes a lot of improvements and features, for example:

- Improved
**correctness**in corner cases. **Safer**types.- Better
**performance**and**less energy**consumption. - Better
**extensibility**. - etc.

...all this while keeping the **same Python API**. In most of the cases, for simple models, you can simply upgrade the Pydantic version and get all the benefits. 🚀

In some cases, for pure data validation and processing, you can get performance improvements of **20x** or more. This means 2,000% or more. 🤯

When you use **FastAPI**, there's a lot more going on, processing the request and response, handling dependencies, executing **your own code**, and particularly, **waiting for the network**. But you will probably still get some nice performance improvements just from the upgrade.

The focus of this release is **compatibility** with Pydantic v1 and v2, to make sure your current apps keep working. Later there will be more focus on refactors, correctness, code improvements, and then **performance** improvements. Some third-party early beta testers that ran benchmarks on the beta releases of FastAPI reported improvements of **2x - 3x**. Which is not bad for just doing `pip install --upgrade fastapi pydantic`

. This was not an official benchmark and I didn't check it myself, but it's a good sign.

### Migration[¶](#migration)

Check out the [Pydantic migration guide](https://docs.pydantic.dev/2.0/migration/).

For the things that need changes in your Pydantic models, the Pydantic team built [ bump-pydantic](https://github.com/pydantic/bump-pydantic).

A command line tool that will **process your code** and update most of the things **automatically** for you. Make sure you have your code in git first, and review each of the changes to make sure everything is correct before committing the changes.

### Pydantic v1[¶](#pydantic-v1)

**This version of FastAPI still supports Pydantic v1**. And although Pydantic v1 will be deprecated at some point, it will still be supported for a while.

This means that you can install the new Pydantic v2, and if something fails, you can install Pydantic v1 while you fix any problems you might have, but having the latest FastAPI.

There are **tests for both Pydantic v1 and v2**, and test **coverage** is kept at **100%**.

### Changes[¶](#changes)

-
There are

**new parameter**fields supported by Pydantic`Field()`

for:`Path()`

`Query()`

`Header()`

`Cookie()`

`Body()`

`Form()`

`File()`


-
The new parameter fields are:

`default_factory`

`alias_priority`

`validation_alias`

`serialization_alias`

`discriminator`

`strict`

`multiple_of`

`allow_inf_nan`

`max_digits`

`decimal_places`

`json_schema_extra`



...you can read about them in the Pydantic docs.

- The parameter
`regex`

has been deprecated and replaced by`pattern`

.- You can read more about it in the docs for
[Query Parameters and String Validations: Add regular expressions](https://fastapi.tiangolo.com/tutorial/query-params-str-validations/#add-regular-expressions).

- You can read more about it in the docs for
- New Pydantic models use an improved and simplified attribute
`model_config`

that takes a simple dict instead of an internal class`Config`

for their configuration.- You can read more about it in the docs for
[Declare Request Example Data](https://fastapi.tiangolo.com/tutorial/schema-extra-example/).

- You can read more about it in the docs for
- The attribute
`schema_extra`

for the internal class`Config`

has been replaced by the key`json_schema_extra`

in the new`model_config`

dict.- You can read more about it in the docs for
[Declare Request Example Data](https://fastapi.tiangolo.com/tutorial/schema-extra-example/).

- You can read more about it in the docs for
- When you install
`"fastapi[all]"`

it now also includes:- for settings management.`pydantic-settings`

- for extra types to be used with Pydantic.`pydantic-extra-types`


-
Now Pydantic Settings is an additional optional package (included in

`"fastapi[all]"`

). To use settings you should now import`from pydantic_settings import BaseSettings`

instead of importing from`pydantic`

directly.- You can read more about it in the docs for
[Settings and Environment Variables](https://fastapi.tiangolo.com/advanced/settings/).

- You can read more about it in the docs for
-
PR

[#9816](https://github.com/tiangolo/fastapi/pull/9816)by[@tiangolo](https://github.com/tiangolo), included all the work done (in multiple PRs) on the beta branch (`main-pv2`

).

## 0.99.1 (2023-07-02)[¶](#0991-2023-07-02)

### Fixes[¶](#fixes_48)

- 🐛 Fix JSON Schema accepting bools as valid JSON Schemas, e.g.
`additionalProperties: false`

. PR[#9781](https://github.com/tiangolo/fastapi/pull/9781)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_60)

## 0.99.0 (2023-06-30)[¶](#0990-2023-06-30)

### Features[¶](#features_25)

-
✨ Add support for OpenAPI 3.1.0. PR

[#9770](https://github.com/tiangolo/fastapi/pull/9770)by[@tiangolo](https://github.com/tiangolo).- New support for documenting
**webhooks**, read the new docs here:[Advanced User Guide: OpenAPI Webhooks](https://fastapi.tiangolo.com/advanced/openapi-webhooks/). - Upgrade OpenAPI 3.1.0, this uses JSON Schema 2020-12.
- Upgrade Swagger UI to version 5.x.x, that supports OpenAPI 3.1.0.
- Updated
`examples`

field in`Query()`

,`Cookie()`

,`Body()`

, etc. based on the latest JSON Schema and OpenAPI. Now it takes a list of examples and they are included directly in the JSON Schema, not outside. Read more about it (including the historical technical details) in the updated docs:[Tutorial: Declare Request Example Data](https://fastapi.tiangolo.com/tutorial/schema-extra-example/).

- New support for documenting
-
✨ Add support for

`deque`

objects and children in`jsonable_encoder`

. PR[#9433](https://github.com/tiangolo/fastapi/pull/9433)by[@cranium](https://github.com/cranium).

### Docs[¶](#docs_61)

### Translations[¶](#translations_53)

- 🌐 Add Persian translation for
`docs/fa/docs/advanced/sub-applications.md`

. PR[#9692](https://github.com/tiangolo/fastapi/pull/9692)by[@mojtabapaso](https://github.com/mojtabapaso). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/response-model.md`

. PR[#9675](https://github.com/tiangolo/fastapi/pull/9675)by[@glsglsgls](https://github.com/glsglsgls).

### Internal[¶](#internal_81)

- 🔨 Enable linenums in MkDocs Material during local live development to simplify highlighting code. PR
[#9769](https://github.com/tiangolo/fastapi/pull/9769)by[@tiangolo](https://github.com/tiangolo). - ⬆ Update httpx requirement from <0.24.0,>=0.23.0 to >=0.23.0,<0.25.0. PR
[#9724](https://github.com/tiangolo/fastapi/pull/9724)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump mkdocs-material from 9.1.16 to 9.1.17. PR
[#9746](https://github.com/tiangolo/fastapi/pull/9746)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔥 Remove missing translation dummy pages, no longer necessary. PR
[#9751](https://github.com/tiangolo/fastapi/pull/9751)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#9259](https://github.com/tiangolo/fastapi/pull/9259)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ✨ Add Material for MkDocs Insiders features and cards. PR
[#9748](https://github.com/tiangolo/fastapi/pull/9748)by[@tiangolo](https://github.com/tiangolo). - 🔥 Remove languages without translations. PR
[#9743](https://github.com/tiangolo/fastapi/pull/9743)by[@tiangolo](https://github.com/tiangolo). - ✨ Refactor docs for building scripts, use MkDocs hooks, simplify (remove) configs for languages. PR
[#9742](https://github.com/tiangolo/fastapi/pull/9742)by[@tiangolo](https://github.com/tiangolo). - 🔨 Add MkDocs hook that renames sections based on the first index file. PR
[#9737](https://github.com/tiangolo/fastapi/pull/9737)by[@tiangolo](https://github.com/tiangolo). - 👷 Make cron jobs run only on main repo, not on forks, to avoid error notifications from missing tokens. PR
[#9735](https://github.com/tiangolo/fastapi/pull/9735)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update MkDocs for other languages. PR
[#9734](https://github.com/tiangolo/fastapi/pull/9734)by[@tiangolo](https://github.com/tiangolo). - 👷 Refactor Docs CI, run in multiple workers with a dynamic matrix to optimize speed. PR
[#9732](https://github.com/tiangolo/fastapi/pull/9732)by[@tiangolo](https://github.com/tiangolo). - 🔥 Remove old internal GitHub Action watch-previews that is no longer needed. PR
[#9730](https://github.com/tiangolo/fastapi/pull/9730)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade MkDocs and MkDocs Material. PR
[#9729](https://github.com/tiangolo/fastapi/pull/9729)by[@tiangolo](https://github.com/tiangolo). - 👷 Build and deploy docs only on docs changes. PR
[#9728](https://github.com/tiangolo/fastapi/pull/9728)by[@tiangolo](https://github.com/tiangolo).

## 0.98.0 (2023-06-22)[¶](#0980-2023-06-22)

### Features[¶](#features_26)

### Docs[¶](#docs_62)

- 📝 Update docs on Pydantic using ujson internally. PR
[#5804](https://github.com/tiangolo/fastapi/pull/5804)by[@mvasilkov](https://github.com/mvasilkov). - ✏ Rewording in
`docs/en/docs/tutorial/debugging.md`

. PR[#9581](https://github.com/tiangolo/fastapi/pull/9581)by[@ivan-abc](https://github.com/ivan-abc). - 📝 Add german blog post (Domain-driven Design mit Python und FastAPI). PR
[#9261](https://github.com/tiangolo/fastapi/pull/9261)by[@msander](https://github.com/msander). - ✏️ Tweak wording in
`docs/en/docs/tutorial/security/index.md`

. PR[#9561](https://github.com/tiangolo/fastapi/pull/9561)by[@jyothish-mohan](https://github.com/jyothish-mohan). - 📝 Update
`Annotated`

notes in`docs/en/docs/tutorial/schema-extra-example.md`

. PR[#9620](https://github.com/tiangolo/fastapi/pull/9620)by[@Alexandrhub](https://github.com/Alexandrhub). - ✏️ Fix typo
`Annotation`

->`Annotated`

in`docs/en/docs/tutorial/query-params-str-validations.md`

. PR[#9625](https://github.com/tiangolo/fastapi/pull/9625)by[@mccricardo](https://github.com/mccricardo). - 📝 Use in memory database for testing SQL in docs. PR
[#1223](https://github.com/tiangolo/fastapi/pull/1223)by[@HarshaLaxman](https://github.com/HarshaLaxman).

### Translations[¶](#translations_54)

- 🌐 Add Russian translation for
`docs/ru/docs/tutorial/metadata.md`

. PR[#9681](https://github.com/tiangolo/fastapi/pull/9681)by[@TabarakoAkula](https://github.com/TabarakoAkula). - 🌐 Fix typo in Spanish translation for
`docs/es/docs/tutorial/first-steps.md`

. PR[#9571](https://github.com/tiangolo/fastapi/pull/9571)by[@lilidl-nft](https://github.com/lilidl-nft). - 🌐 Add Russian translation for
`docs/tutorial/path-operation-configuration.md`

. PR[#9696](https://github.com/tiangolo/fastapi/pull/9696)by[@TabarakoAkula](https://github.com/TabarakoAkula). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/security/index.md`

. PR[#9666](https://github.com/tiangolo/fastapi/pull/9666)by[@lordqyxz](https://github.com/lordqyxz). - 🌐 Add Chinese translations for
`docs/zh/docs/advanced/settings.md`

. PR[#9652](https://github.com/tiangolo/fastapi/pull/9652)by[@ChoyeonChern](https://github.com/ChoyeonChern). - 🌐 Add Chinese translations for
`docs/zh/docs/advanced/websockets.md`

. PR[#9651](https://github.com/tiangolo/fastapi/pull/9651)by[@ChoyeonChern](https://github.com/ChoyeonChern). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/testing.md`

. PR[#9641](https://github.com/tiangolo/fastapi/pull/9641)by[@wdh99](https://github.com/wdh99). - 🌐 Add Russian translation for
`docs/tutorial/extra-models.md`

. PR[#9619](https://github.com/tiangolo/fastapi/pull/9619)by[@ivan-abc](https://github.com/ivan-abc). - 🌐 Add Russian translation for
`docs/tutorial/cors.md`

. PR[#9608](https://github.com/tiangolo/fastapi/pull/9608)by[@ivan-abc](https://github.com/ivan-abc). - 🌐 Add Polish translation for
`docs/pl/docs/features.md`

. PR[#5348](https://github.com/tiangolo/fastapi/pull/5348)by[@mbroton](https://github.com/mbroton). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/body-nested-models.md`

. PR[#9605](https://github.com/tiangolo/fastapi/pull/9605)by[@Alexandrhub](https://github.com/Alexandrhub).

### Internal[¶](#internal_82)

- ⬆ Bump ruff from 0.0.272 to 0.0.275. PR
[#9721](https://github.com/tiangolo/fastapi/pull/9721)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Update uvicorn[standard] requirement from <0.21.0,>=0.12.0 to >=0.12.0,<0.23.0. PR
[#9463](https://github.com/tiangolo/fastapi/pull/9463)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump mypy from 1.3.0 to 1.4.0. PR
[#9719](https://github.com/tiangolo/fastapi/pull/9719)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Update pre-commit requirement from <3.0.0,>=2.17.0 to >=2.17.0,<4.0.0. PR
[#9251](https://github.com/tiangolo/fastapi/pull/9251)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pypa/gh-action-pypi-publish from 1.8.5 to 1.8.6. PR
[#9482](https://github.com/tiangolo/fastapi/pull/9482)by[@dependabot[bot]](https://github.com/apps/dependabot). - ✏️ Fix tooltips for light/dark theme toggler in docs. PR
[#9588](https://github.com/tiangolo/fastapi/pull/9588)by[@pankaj1707k](https://github.com/pankaj1707k). - 🔧 Set minimal hatchling version needed to build the package. PR
[#9240](https://github.com/tiangolo/fastapi/pull/9240)by[@mgorny](https://github.com/mgorny). - 📝 Add repo link to PyPI. PR
[#9559](https://github.com/tiangolo/fastapi/pull/9559)by[@JacobCoffee](https://github.com/JacobCoffee). - ✏️ Fix typos in data for tests. PR
[#4958](https://github.com/tiangolo/fastapi/pull/4958)by[@ryanrussell](https://github.com/ryanrussell). - 🔧 Update sponsors, add Flint. PR
[#9699](https://github.com/tiangolo/fastapi/pull/9699)by[@tiangolo](https://github.com/tiangolo). - 👷 Lint in CI only once, only with one version of Python, run tests with all of them. PR
[#9686](https://github.com/tiangolo/fastapi/pull/9686)by[@tiangolo](https://github.com/tiangolo).

## 0.97.0 (2023-06-11)[¶](#0970-2023-06-11)

### Features[¶](#features_27)

- ✨ Add support for
`dependencies`

in WebSocket routes. PR[#4534](https://github.com/tiangolo/fastapi/pull/4534)by[@paulo-raca](https://github.com/paulo-raca). - ✨ Add exception handler for
`WebSocketRequestValidationError`

(which also allows to override it). PR[#6030](https://github.com/tiangolo/fastapi/pull/6030)by[@kristjanvalur](https://github.com/kristjanvalur).

### Refactors[¶](#refactors_36)

- ⬆️ Upgrade and fully migrate to Ruff, remove isort, includes a couple of tweaks suggested by the new version of Ruff. PR
[#9660](https://github.com/tiangolo/fastapi/pull/9660)by[@tiangolo](https://github.com/tiangolo). - ♻️ Update internal type annotations and upgrade mypy. PR
[#9658](https://github.com/tiangolo/fastapi/pull/9658)by[@tiangolo](https://github.com/tiangolo). - ♻️ Simplify
`AsyncExitStackMiddleware`

as without Python 3.6`AsyncExitStack`

is always available. PR[#9657](https://github.com/tiangolo/fastapi/pull/9657)by[@tiangolo](https://github.com/tiangolo).

### Upgrades[¶](#upgrades_24)

### Internal[¶](#internal_83)

- 💚 Update CI cache to fix installs when dependencies change. PR
[#9659](https://github.com/tiangolo/fastapi/pull/9659)by[@tiangolo](https://github.com/tiangolo). - ⬇️ Separate requirements for development into their own requirements.txt files, they shouldn't be extras. PR
[#9655](https://github.com/tiangolo/fastapi/pull/9655)by[@tiangolo](https://github.com/tiangolo).

## 0.96.1 (2023-06-10)[¶](#0961-2023-06-10)

### Fixes[¶](#fixes_49)

- 🐛 Fix
`HTTPException`

header type annotations. PR[#9648](https://github.com/tiangolo/fastapi/pull/9648)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix OpenAPI model fields int validations,
`gte`

to`ge`

. PR[#9635](https://github.com/tiangolo/fastapi/pull/9635)by[@tiangolo](https://github.com/tiangolo).

### Upgrades[¶](#upgrades_25)

- 📌 Update minimum version of Pydantic to >=1.7.4. This fixes an issue when trying to use an old version of Pydantic. PR
[#9567](https://github.com/tiangolo/fastapi/pull/9567)by[@Kludex](https://github.com/Kludex).

### Refactors[¶](#refactors_37)

- ♻ Remove
`media_type`

from`ORJSONResponse`

as it's inherited from the parent class. PR[#5805](https://github.com/tiangolo/fastapi/pull/5805)by[@Kludex](https://github.com/Kludex). - ♻ Instantiate
`HTTPException`

only when needed, optimization refactor. PR[#5356](https://github.com/tiangolo/fastapi/pull/5356)by[@pawamoy](https://github.com/pawamoy).

### Docs[¶](#docs_63)

### Translations[¶](#translations_55)

- 🌐 Fix spelling in Indonesian translation of
`docs/id/docs/tutorial/index.md`

. PR[#5635](https://github.com/tiangolo/fastapi/pull/5635)by[@purwowd](https://github.com/purwowd). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/index.md`

. PR[#5896](https://github.com/tiangolo/fastapi/pull/5896)by[@Wilidon](https://github.com/Wilidon). - 🌐 Add Chinese translations for
`docs/zh/docs/advanced/response-change-status-code.md`

and`docs/zh/docs/advanced/response-headers.md`

. PR[#9544](https://github.com/tiangolo/fastapi/pull/9544)by[@ChoyeonChern](https://github.com/ChoyeonChern). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/schema-extra-example.md`

. PR[#9621](https://github.com/tiangolo/fastapi/pull/9621)by[@Alexandrhub](https://github.com/Alexandrhub).

### Internal[¶](#internal_84)

- 🔧 Add sponsor Platform.sh. PR
[#9650](https://github.com/tiangolo/fastapi/pull/9650)by[@tiangolo](https://github.com/tiangolo). - 👷 Add custom token to Smokeshow and Preview Docs for download-artifact, to prevent API rate limits. PR
[#9646](https://github.com/tiangolo/fastapi/pull/9646)by[@tiangolo](https://github.com/tiangolo). - 👷 Add custom tokens for GitHub Actions to avoid rate limits. PR
[#9647](https://github.com/tiangolo/fastapi/pull/9647)by[@tiangolo](https://github.com/tiangolo).

## 0.96.0 (2023-06-03)[¶](#0960-2023-06-03)

### Features[¶](#features_28)

- ⚡ Update
`create_cloned_field`

to use a global cache and improve startup performance. PR[#4645](https://github.com/tiangolo/fastapi/pull/4645)by[@madkinsz](https://github.com/madkinsz)and previous original PR by[@huonw](https://github.com/huonw).

### Docs[¶](#docs_64)

- 📝 Update Deta deployment tutorial for compatibility with Deta Space. PR
[#6004](https://github.com/tiangolo/fastapi/pull/6004)by[@mikBighne98](https://github.com/mikBighne98). - ✏️ Fix typo in Deta deployment tutorial. PR
[#9501](https://github.com/tiangolo/fastapi/pull/9501)by[@lemonyte](https://github.com/lemonyte).

### Translations[¶](#translations_56)

- 🌐 Add Russian translation for
`docs/tutorial/body.md`

. PR[#3885](https://github.com/tiangolo/fastapi/pull/3885)by[@solomein-sv](https://github.com/solomein-sv). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/static-files.md`

. PR[#9580](https://github.com/tiangolo/fastapi/pull/9580)by[@Alexandrhub](https://github.com/Alexandrhub). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/query-params.md`

. PR[#9584](https://github.com/tiangolo/fastapi/pull/9584)by[@Alexandrhub](https://github.com/Alexandrhub). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/first-steps.md`

. PR[#9471](https://github.com/tiangolo/fastapi/pull/9471)by[@AGolicyn](https://github.com/AGolicyn). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/debugging.md`

. PR[#9579](https://github.com/tiangolo/fastapi/pull/9579)by[@Alexandrhub](https://github.com/Alexandrhub). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/path-params.md`

. PR[#9519](https://github.com/tiangolo/fastapi/pull/9519)by[@AGolicyn](https://github.com/AGolicyn). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/static-files.md`

. PR[#9436](https://github.com/tiangolo/fastapi/pull/9436)by[@wdh99](https://github.com/wdh99). - 🌐 Update Spanish translation including new illustrations in
`docs/es/docs/async.md`

. PR[#9483](https://github.com/tiangolo/fastapi/pull/9483)by[@andresbermeoq](https://github.com/andresbermeoq). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/path-params-numeric-validations.md`

. PR[#9563](https://github.com/tiangolo/fastapi/pull/9563)by[@ivan-abc](https://github.com/ivan-abc). - 🌐 Add Russian translation for
`docs/ru/docs/deployment/concepts.md`

. PR[#9577](https://github.com/tiangolo/fastapi/pull/9577)by[@Xewus](https://github.com/Xewus). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/body-multiple-params.md`

. PR[#9586](https://github.com/tiangolo/fastapi/pull/9586)by[@Alexandrhub](https://github.com/Alexandrhub).

### Internal[¶](#internal_85)

- 👥 Update FastAPI People. PR
[#9602](https://github.com/tiangolo/fastapi/pull/9602)by[@github-actions[bot]](https://github.com/apps/github-actions). - 🔧 Update sponsors, remove InvestSuite. PR
[#9612](https://github.com/tiangolo/fastapi/pull/9612)by[@tiangolo](https://github.com/tiangolo).

## 0.95.2 (2023-05-16)[¶](#0952-2023-05-16)

- ⬆️ Upgrade Starlette version to
`>=0.27.0`

for a security release. PR[#9541](https://github.com/tiangolo/fastapi/pull/9541)by[@tiangolo](https://github.com/tiangolo). Details on[Starlette's security advisory](https://github.com/encode/starlette/security/advisories/GHSA-v5gw-mw7f-84px).

### Translations[¶](#translations_57)

- 🌐 Add Portuguese translation for
`docs/pt/docs/advanced/events.md`

. PR[#9326](https://github.com/tiangolo/fastapi/pull/9326)by[@oandersonmagalhaes](https://github.com/oandersonmagalhaes). - 🌐 Add Russian translation for
`docs/ru/docs/deployment/manually.md`

. PR[#9417](https://github.com/tiangolo/fastapi/pull/9417)by[@Xewus](https://github.com/Xewus). - 🌐 Add setup for translations to Lao. PR
[#9396](https://github.com/tiangolo/fastapi/pull/9396)by[@TheBrown](https://github.com/TheBrown). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/testing.md`

. PR[#9403](https://github.com/tiangolo/fastapi/pull/9403)by[@Xewus](https://github.com/Xewus). - 🌐 Add Russian translation for
`docs/ru/docs/deployment/https.md`

. PR[#9428](https://github.com/tiangolo/fastapi/pull/9428)by[@Xewus](https://github.com/Xewus). - ✏ Fix command to install requirements in Windows. PR
[#9445](https://github.com/tiangolo/fastapi/pull/9445)by[@MariiaRomanuik](https://github.com/MariiaRomanuik). - 🌐 Add French translation for
`docs/fr/docs/advanced/response-directly.md`

. PR[#9415](https://github.com/tiangolo/fastapi/pull/9415)by[@axel584](https://github.com/axel584). - 🌐 Initiate Czech translation setup. PR
[#9288](https://github.com/tiangolo/fastapi/pull/9288)by[@3p1463k](https://github.com/3p1463k). - ✏ Fix typo in Portuguese docs for
`docs/pt/docs/index.md`

. PR[#9337](https://github.com/tiangolo/fastapi/pull/9337)by[@lucasbalieiro](https://github.com/lucasbalieiro). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/response-status-code.md`

. PR[#9370](https://github.com/tiangolo/fastapi/pull/9370)by[@nadia3373](https://github.com/nadia3373).

### Internal[¶](#internal_86)

- 🐛 Fix
`flask.escape`

warning for internal tests. PR[#9468](https://github.com/tiangolo/fastapi/pull/9468)by[@samuelcolvin](https://github.com/samuelcolvin). - ✅ Refactor 2 tests, for consistency and simplification. PR
[#9504](https://github.com/tiangolo/fastapi/pull/9504)by[@tiangolo](https://github.com/tiangolo). - ✅ Refactor OpenAPI tests, prepare for Pydantic v2. PR
[#9503](https://github.com/tiangolo/fastapi/pull/9503)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump dawidd6/action-download-artifact from 2.26.0 to 2.27.0. PR
[#9394](https://github.com/tiangolo/fastapi/pull/9394)by[@dependabot[bot]](https://github.com/apps/dependabot). - 💚 Disable setup-python pip cache in CI. PR
[#9438](https://github.com/tiangolo/fastapi/pull/9438)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump pypa/gh-action-pypi-publish from 1.6.4 to 1.8.5. PR
[#9346](https://github.com/tiangolo/fastapi/pull/9346)by[@dependabot[bot]](https://github.com/apps/dependabot).

## 0.95.1 (2023-04-13)[¶](#0951-2023-04-13)

### Fixes[¶](#fixes_50)

- 🐛 Fix using
`Annotated`

in routers or path operations decorated multiple times. PR[#9315](https://github.com/tiangolo/fastapi/pull/9315)by[@sharonyogev](https://github.com/sharonyogev).

### Docs[¶](#docs_65)

- 🌐 🔠 📄 🐢 Translate docs to Emoji 🥳 🎉 💥 🤯 🤯. PR
[#5385](https://github.com/tiangolo/fastapi/pull/5385)by[@LeeeeT](https://github.com/LeeeeT). - 📝 Add notification message warning about old versions of FastAPI not supporting
`Annotated`

. PR[#9298](https://github.com/tiangolo/fastapi/pull/9298)by[@grdworkin](https://github.com/grdworkin). - 📝 Fix typo in
`docs/en/docs/advanced/behind-a-proxy.md`

. PR[#5681](https://github.com/tiangolo/fastapi/pull/5681)by[@Leommjr](https://github.com/Leommjr). - ✏ Fix wrong import from typing module in Persian translations for
`docs/fa/docs/index.md`

. PR[#6083](https://github.com/tiangolo/fastapi/pull/6083)by[@Kimiaattaei](https://github.com/Kimiaattaei). - ✏️ Fix format, remove unnecessary asterisks in
`docs/en/docs/help-fastapi.md`

. PR[#9249](https://github.com/tiangolo/fastapi/pull/9249)by[@armgabrielyan](https://github.com/armgabrielyan). - ✏ Fix typo in
`docs/en/docs/tutorial/query-params-str-validations.md`

. PR[#9272](https://github.com/tiangolo/fastapi/pull/9272)by[@nicornk](https://github.com/nicornk). - ✏ Fix typo/bug in inline code example in
`docs/en/docs/tutorial/query-params-str-validations.md`

. PR[#9273](https://github.com/tiangolo/fastapi/pull/9273)by[@tim-habitat](https://github.com/tim-habitat). - ✏ Fix typo in
`docs/en/docs/tutorial/path-params-numeric-validations.md`

. PR[#9282](https://github.com/tiangolo/fastapi/pull/9282)by[@aadarsh977](https://github.com/aadarsh977). - ✏ Fix typo: 'wll' to 'will' in
`docs/en/docs/tutorial/query-params-str-validations.md`

. PR[#9380](https://github.com/tiangolo/fastapi/pull/9380)by[@dasstyxx](https://github.com/dasstyxx).

### Translations[¶](#translations_58)

- 🌐 Add French translation for
`docs/fr/docs/advanced/index.md`

. PR[#5673](https://github.com/tiangolo/fastapi/pull/5673)by[@axel584](https://github.com/axel584). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/body-nested-models.md`

. PR[#4053](https://github.com/tiangolo/fastapi/pull/4053)by[@luccasmmg](https://github.com/luccasmmg). - 🌐 Add Russian translation for
`docs/ru/docs/alternatives.md`

. PR[#5994](https://github.com/tiangolo/fastapi/pull/5994)by[@Xewus](https://github.com/Xewus). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/extra-models.md`

. PR[#5912](https://github.com/tiangolo/fastapi/pull/5912)by[@LorhanSohaky](https://github.com/LorhanSohaky). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/path-operation-configuration.md`

. PR[#5936](https://github.com/tiangolo/fastapi/pull/5936)by[@LorhanSohaky](https://github.com/LorhanSohaky). - 🌐 Add Russian translation for
`docs/ru/docs/contributing.md`

. PR[#6002](https://github.com/tiangolo/fastapi/pull/6002)by[@stigsanek](https://github.com/stigsanek). - 🌐 Add Korean translation for
`docs/tutorial/dependencies/classes-as-dependencies.md`

. PR[#9176](https://github.com/tiangolo/fastapi/pull/9176)by[@sehwan505](https://github.com/sehwan505). - 🌐 Add Russian translation for
`docs/ru/docs/project-generation.md`

. PR[#9243](https://github.com/tiangolo/fastapi/pull/9243)by[@Xewus](https://github.com/Xewus). - 🌐 Add French translation for
`docs/fr/docs/index.md`

. PR[#9265](https://github.com/tiangolo/fastapi/pull/9265)by[@frabc](https://github.com/frabc). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/query-params-str-validations.md`

. PR[#9267](https://github.com/tiangolo/fastapi/pull/9267)by[@dedkot01](https://github.com/dedkot01). - 🌐 Add Russian translation for
`docs/ru/docs/benchmarks.md`

. PR[#9271](https://github.com/tiangolo/fastapi/pull/9271)by[@Xewus](https://github.com/Xewus).

### Internal[¶](#internal_87)

- 🔧 Update sponsors: remove Jina. PR
[#9388](https://github.com/tiangolo/fastapi/pull/9388)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, add databento, remove Ines's course and StriveWorks. PR
[#9351](https://github.com/tiangolo/fastapi/pull/9351)by[@tiangolo](https://github.com/tiangolo).

## 0.95.0 (2023-03-18)[¶](#0950-2023-03-18)

### Highlights[¶](#highlights_1)

This release adds support for dependencies and parameters using `Annotated`

and recommends its usage. ✨

This has **several benefits**, one of the main ones is that now the parameters of your functions with `Annotated`

would **not be affected** at all.

If you call those functions in **other places in your code**, the actual **default values** will be kept, your editor will help you notice missing **required arguments**, Python will require you to pass required arguments at **runtime**, you will be able to **use the same functions** for different things and with different libraries (e.g. **Typer** will soon support `Annotated`

too, then you could use the same function for an API and a CLI), etc.

Because `Annotated`

is **standard Python**, you still get all the **benefits** from editors and tools, like **autocompletion**, **inline errors**, etc.

One of the **biggest benefits** is that now you can create `Annotated`

dependencies that are then shared by multiple *path operation functions*, this will allow you to **reduce** a lot of **code duplication** in your codebase, while keeping all the support from editors and tools.

For example, you could have code like this:

```
def get_current_user(token: str):
# authenticate user
return User()
@app.get("/items/")
def read_items(user: User = Depends(get_current_user)):
...
@app.post("/items/")
def create_item(*, user: User = Depends(get_current_user), item: Item):
...
@app.get("/items/{item_id}")
def read_item(*, user: User = Depends(get_current_user), item_id: int):
...
@app.delete("/items/{item_id}")
def delete_item(*, user: User = Depends(get_current_user), item_id: int):
...
```


There's a bit of code duplication for the dependency:

```
user: User = Depends(get_current_user)
```


...the bigger the codebase, the more noticeable it is.

Now you can create an annotated dependency once, like this:

```
CurrentUser = Annotated[User, Depends(get_current_user)]
```


And then you can reuse this `Annotated`

dependency:

```
CurrentUser = Annotated[User, Depends(get_current_user)]
@app.get("/items/")
def read_items(user: CurrentUser):
...
@app.post("/items/")
def create_item(user: CurrentUser, item: Item):
...
@app.get("/items/{item_id}")
def read_item(user: CurrentUser, item_id: int):
...
@app.delete("/items/{item_id}")
def delete_item(user: CurrentUser, item_id: int):
...
```


...and `CurrentUser`

has all the typing information as `User`

, so your editor will work as expected (autocompletion and everything), and **FastAPI** will be able to understand the dependency defined in `Annotated`

. 😎

Roughly **all the docs** have been rewritten to use `Annotated`

as the main way to declare **parameters** and **dependencies**. All the **examples** in the docs now include a version with `Annotated`

and a version without it, for each of the specific Python versions (when there are small differences/improvements in more recent versions). There were around 23K new lines added between docs, examples, and tests. 🚀

The key updated docs are:

- Python Types Intro:
- Tutorial:

Special thanks to [@nzig](https://github.com/nzig) for the core implementation and to [@adriangb](https://github.com/adriangb) for the inspiration and idea with [Xpresso](https://github.com/adriangb/xpresso)! 🚀

### Features[¶](#features_29)

### Docs[¶](#docs_66)

- 📝 Tweak tip recommending
`Annotated`

in docs. PR[#9270](https://github.com/tiangolo/fastapi/pull/9270)by[@tiangolo](https://github.com/tiangolo). - 📝 Update order of examples, latest Python version first, and simplify version tab names. PR
[#9269](https://github.com/tiangolo/fastapi/pull/9269)by[@tiangolo](https://github.com/tiangolo). - 📝 Update all docs to use
`Annotated`

as the main recommendation, with new examples and tests. PR[#9268](https://github.com/tiangolo/fastapi/pull/9268)by[@tiangolo](https://github.com/tiangolo).

## 0.94.1 (2023-03-14)[¶](#0941-2023-03-14)

### Fixes[¶](#fixes_51)

## 0.94.0 (2023-03-10)[¶](#0940-2023-03-10)

### Upgrades[¶](#upgrades_26)

- ⬆ Upgrade python-multipart to support 0.0.6. PR
[#9212](https://github.com/tiangolo/fastapi/pull/9212)by[@musicinmybrain](https://github.com/musicinmybrain). - ⬆️ Upgrade Starlette version, support new
`lifespan`

with state. PR[#9239](https://github.com/tiangolo/fastapi/pull/9239)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_67)

### Translations[¶](#translations_59)

### Internal[¶](#internal_88)

- ➕ Add
`pydantic`

to PyPI classifiers. PR[#5914](https://github.com/tiangolo/fastapi/pull/5914)by[@yezz123](https://github.com/yezz123). - ⬆ Bump black from 22.10.0 to 23.1.0. PR
[#5953](https://github.com/tiangolo/fastapi/pull/5953)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump types-ujson from 5.6.0.0 to 5.7.0.1. PR
[#6027](https://github.com/tiangolo/fastapi/pull/6027)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump dawidd6/action-download-artifact from 2.24.3 to 2.26.0. PR
[#6034](https://github.com/tiangolo/fastapi/pull/6034)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#5709](https://github.com/tiangolo/fastapi/pull/5709)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci).

## 0.93.0 (2023-03-07)[¶](#0930-2023-03-07)

### Features[¶](#features_30)

- ✨ Add support for
`lifespan`

async context managers (superseding`startup`

and`shutdown`

events). Initial PR[#2944](https://github.com/tiangolo/fastapi/pull/2944)by[@uSpike](https://github.com/uSpike).

Now, instead of using independent `startup`

and `shutdown`

events, you can define that logic in a single function with `yield`

decorated with `@asynccontextmanager`

(an async context manager).

For example:

```
from contextlib import asynccontextmanager
from fastapi import FastAPI
def fake_answer_to_everything_ml_model(x: float):
return x * 42
ml_models = {}
@asynccontextmanager
async def lifespan(app: FastAPI):
# Load the ML model
ml_models["answer_to_everything"] = fake_answer_to_everything_ml_model
yield
# Clean up the ML models and release the resources
ml_models.clear()
app = FastAPI(lifespan=lifespan)
@app.get("/predict")
async def predict(x: float):
result = ml_models["answer_to_everything"](x)
return {"result": result}
```


**Note**: This is the recommended way going forward, instead of using `startup`

and `shutdown`

events.

Read more about it in the new docs: [Advanced User Guide: Lifespan Events](https://fastapi.tiangolo.com/advanced/events/).

### Docs[¶](#docs_68)

### Translations[¶](#translations_60)

- 🌐 Tamil translations - initial setup. PR
[#5564](https://github.com/tiangolo/fastapi/pull/5564)by[@gusty1g](https://github.com/gusty1g). - 🌐 Add French translation for
`docs/fr/docs/advanced/path-operation-advanced-configuration.md`

. PR[#9221](https://github.com/tiangolo/fastapi/pull/9221)by[@axel584](https://github.com/axel584). - 🌐 Add French translation for
`docs/tutorial/debugging.md`

. PR[#9175](https://github.com/tiangolo/fastapi/pull/9175)by[@frabc](https://github.com/frabc). - 🌐 Initiate Armenian translation setup. PR
[#5844](https://github.com/tiangolo/fastapi/pull/5844)by[@har8](https://github.com/har8). - 🌐 Add French translation for
`deployment/manually.md`

. PR[#3693](https://github.com/tiangolo/fastapi/pull/3693)by[@rjNemo](https://github.com/rjNemo).

### Internal[¶](#internal_89)

- 👷 Update translation bot messages. PR
[#9206](https://github.com/tiangolo/fastapi/pull/9206)by[@tiangolo](https://github.com/tiangolo). - 👷 Update translations bot to use Discussions, and notify when a PR is done. PR
[#9183](https://github.com/tiangolo/fastapi/pull/9183)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors-badges. PR
[#9182](https://github.com/tiangolo/fastapi/pull/9182)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#9181](https://github.com/tiangolo/fastapi/pull/9181)by[@github-actions[bot]](https://github.com/apps/github-actions). - 🔊 Log GraphQL errors in FastAPI People, because it returns 200, with a payload with an error. PR
[#9171](https://github.com/tiangolo/fastapi/pull/9171)by[@tiangolo](https://github.com/tiangolo). - 💚 Fix/workaround GitHub Actions in Docker with git for FastAPI People. PR
[#9169](https://github.com/tiangolo/fastapi/pull/9169)by[@tiangolo](https://github.com/tiangolo). - ♻️ Refactor FastAPI Experts to use only discussions now that questions are migrated. PR
[#9165](https://github.com/tiangolo/fastapi/pull/9165)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade analytics. PR
[#6025](https://github.com/tiangolo/fastapi/pull/6025)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade and re-enable installing Typer-CLI. PR
[#6008](https://github.com/tiangolo/fastapi/pull/6008)by[@tiangolo](https://github.com/tiangolo).

## 0.92.0 (2023-02-14)[¶](#0920-2023-02-14)

🚨 This is a security fix. Please upgrade as soon as possible.

### Upgrades[¶](#upgrades_27)

- ⬆️ Upgrade Starlette to 0.25.0. PR
[#5996](https://github.com/tiangolo/fastapi/pull/5996)by[@tiangolo](https://github.com/tiangolo).- This solves a vulnerability that could allow denial of service attacks by using many small multipart fields/files (parts), consuming high CPU and memory.
- Only applications using forms (e.g. file uploads) could be affected.
- For most cases, upgrading won't have any breaking changes.


## 0.91.0 (2023-02-10)[¶](#0910-2023-02-10)

### Upgrades[¶](#upgrades_28)

- ⬆️ Upgrade Starlette version to
`0.24.0`

and refactor internals for compatibility. PR[#5985](https://github.com/tiangolo/fastapi/pull/5985)by[@tiangolo](https://github.com/tiangolo).- This can solve nuanced errors when using middlewares. Before Starlette
`0.24.0`

, a new instance of each middleware class would be created when a new middleware was added. That normally was not a problem, unless the middleware class expected to be created only once, with only one instance, that happened in some cases. This upgrade would solve those cases (thanks[@adriangb](https://github.com/adriangb)! Starlette PR[#2017](https://github.com/encode/starlette/pull/2017)). Now the middleware class instances are created once, right before the first request (the first time the app is called). - If you depended on that previous behavior, you might need to update your code. As always, make sure your tests pass before merging the upgrade.

- This can solve nuanced errors when using middlewares. Before Starlette

## 0.90.1 (2023-02-09)[¶](#0901-2023-02-09)

### Upgrades[¶](#upgrades_29)

### Docs[¶](#docs_69)

- ✏ Tweak wording to clarify
`docs/en/docs/project-generation.md`

. PR[#5930](https://github.com/tiangolo/fastapi/pull/5930)by[@chandra-deb](https://github.com/chandra-deb). - ✏ Update Pydantic GitHub URLs. PR
[#5952](https://github.com/tiangolo/fastapi/pull/5952)by[@yezz123](https://github.com/yezz123). - 📝 Add opinion from Cisco. PR
[#5981](https://github.com/tiangolo/fastapi/pull/5981)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_61)

### Internal[¶](#internal_90)

- ✏ Update
`zip-docs.sh`

internal script, remove extra space. PR[#5931](https://github.com/tiangolo/fastapi/pull/5931)by[@JuanPerdomo00](https://github.com/JuanPerdomo00).

## 0.90.0 (2023-02-08)[¶](#0900-2023-02-08)

### Upgrades[¶](#upgrades_30)

### Docs[¶](#docs_70)

- 📝 Add article "Tortoise ORM / FastAPI 整合快速筆記" to External Links. PR
[#5496](https://github.com/tiangolo/fastapi/pull/5496)by[@Leon0824](https://github.com/Leon0824). - 👥 Update FastAPI People. PR
[#5954](https://github.com/tiangolo/fastapi/pull/5954)by[@github-actions[bot]](https://github.com/apps/github-actions). - 📝 Micro-tweak help docs. PR
[#5960](https://github.com/tiangolo/fastapi/pull/5960)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update new issue chooser to direct to GitHub Discussions. PR
[#5948](https://github.com/tiangolo/fastapi/pull/5948)by[@tiangolo](https://github.com/tiangolo). - 📝 Recommend GitHub Discussions for questions. PR
[#5944](https://github.com/tiangolo/fastapi/pull/5944)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_62)

- 🌐 Add Russian translation for
`docs/ru/docs/tutorial/body-fields.md`

. PR[#5898](https://github.com/tiangolo/fastapi/pull/5898)by[@simatheone](https://github.com/simatheone). - 🌐 Add Russian translation for
`docs/ru/docs/help-fastapi.md`

. PR[#5970](https://github.com/tiangolo/fastapi/pull/5970)by[@tiangolo](https://github.com/tiangolo). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/static-files.md`

. PR[#5858](https://github.com/tiangolo/fastapi/pull/5858)by[@batlopes](https://github.com/batlopes). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/encoder.md`

. PR[#5525](https://github.com/tiangolo/fastapi/pull/5525)by[@felipebpl](https://github.com/felipebpl). - 🌐 Add Russian translation for
`docs/ru/docs/contributing.md`

. PR[#5870](https://github.com/tiangolo/fastapi/pull/5870)by[@Xewus](https://github.com/Xewus).

### Internal[¶](#internal_91)

- ⬆️ Upgrade Ubuntu version for docs workflow. PR
[#5971](https://github.com/tiangolo/fastapi/pull/5971)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors badges. PR
[#5943](https://github.com/tiangolo/fastapi/pull/5943)by[@tiangolo](https://github.com/tiangolo). - ✨ Compute FastAPI Experts including GitHub Discussions. PR
[#5941](https://github.com/tiangolo/fastapi/pull/5941)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade isort and update pre-commit. PR
[#5940](https://github.com/tiangolo/fastapi/pull/5940)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add template for questions in Discussions. PR
[#5920](https://github.com/tiangolo/fastapi/pull/5920)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update Sponsor Budget Insight to Powens. PR
[#5916](https://github.com/tiangolo/fastapi/pull/5916)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update GitHub Sponsors badge data. PR
[#5915](https://github.com/tiangolo/fastapi/pull/5915)by[@tiangolo](https://github.com/tiangolo).

## 0.89.1 (2023-01-10)[¶](#0891-2023-01-10)

### Fixes[¶](#fixes_52)

- 🐛 Ignore Response classes on return annotation. PR
[#5855](https://github.com/tiangolo/fastapi/pull/5855)by[@Kludex](https://github.com/Kludex). See the new docs in the PR below.

### Docs[¶](#docs_71)

- 📝 Update docs and examples for Response Model with Return Type Annotations, and update runtime error. PR
[#5873](https://github.com/tiangolo/fastapi/pull/5873)by[@tiangolo](https://github.com/tiangolo). New docs at[Response Model - Return Type: Other Return Type Annotations](https://fastapi.tiangolo.com/tutorial/response-model/#other-return-type-annotations). - 📝 Add External Link: FastAPI lambda container: serverless simplified. PR
[#5784](https://github.com/tiangolo/fastapi/pull/5784)by[@rafrasenberg](https://github.com/rafrasenberg).

### Translations[¶](#translations_63)

- 🌐 Add Turkish translation for
`docs/tr/docs/tutorial/first_steps.md`

. PR[#5691](https://github.com/tiangolo/fastapi/pull/5691)by[@Kadermiyanyedi](https://github.com/Kadermiyanyedi).

## 0.89.0 (2023-01-07)[¶](#0890-2023-01-07)

### Features[¶](#features_31)

- ✨ Add support for function return type annotations to declare the
`response_model`

. Initial PR[#1436](https://github.com/tiangolo/fastapi/pull/1436)by[@uriyyo](https://github.com/uriyyo).

Now you can declare the return type / `response_model`

in the function return type annotation:

```
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Item(BaseModel):
name: str
price: float
@app.get("/items/")
async def read_items() -> list[Item]:
return [
Item(name="Portal Gun", price=42.0),
Item(name="Plumbus", price=32.0),
]
```


FastAPI will use the return type annotation to perform:

- Data validation
- Automatic documentation
- It could power automatic client generators

**Data filtering**

Before this version it was only supported via the `response_model`

parameter.

Read more about it in the new docs: [Response Model - Return Type](https://fastapi.tiangolo.com/tutorial/response-model/).

### Docs[¶](#docs_72)

- 📝 Add External Link: Authorization on FastAPI with Casbin. PR
[#5712](https://github.com/tiangolo/fastapi/pull/5712)by[@Xhy-5000](https://github.com/Xhy-5000). - ✏ Fix typo in
`docs/en/docs/async.md`

. PR[#5785](https://github.com/tiangolo/fastapi/pull/5785)by[@Kingdageek](https://github.com/Kingdageek). - ✏ Fix typo in
`docs/en/docs/deployment/concepts.md`

. PR[#5824](https://github.com/tiangolo/fastapi/pull/5824)by[@kelbyfaessler](https://github.com/kelbyfaessler).

### Translations[¶](#translations_64)

- 🌐 Add Russian translation for
`docs/ru/docs/fastapi-people.md`

. PR[#5577](https://github.com/tiangolo/fastapi/pull/5577)by[@Xewus](https://github.com/Xewus). - 🌐 Fix typo in Chinese translation for
`docs/zh/docs/benchmarks.md`

. PR[#4269](https://github.com/tiangolo/fastapi/pull/4269)by[@15027668g](https://github.com/15027668g). - 🌐 Add Korean translation for
`docs/tutorial/cors.md`

. PR[#3764](https://github.com/tiangolo/fastapi/pull/3764)by[@NinaHwang](https://github.com/NinaHwang).

### Internal[¶](#internal_92)

- ⬆ Update coverage[toml] requirement from <7.0,>=6.5.0 to >=6.5.0,<8.0. PR
[#5801](https://github.com/tiangolo/fastapi/pull/5801)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Update uvicorn[standard] requirement from <0.19.0,>=0.12.0 to >=0.12.0,<0.21.0 for development. PR
[#5795](https://github.com/tiangolo/fastapi/pull/5795)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump dawidd6/action-download-artifact from 2.24.2 to 2.24.3. PR
[#5842](https://github.com/tiangolo/fastapi/pull/5842)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👥 Update FastAPI People. PR
[#5825](https://github.com/tiangolo/fastapi/pull/5825)by[@github-actions[bot]](https://github.com/apps/github-actions). - ⬆ Bump types-ujson from 5.5.0 to 5.6.0.0. PR
[#5735](https://github.com/tiangolo/fastapi/pull/5735)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump pypa/gh-action-pypi-publish from 1.5.2 to 1.6.4. PR
[#5750](https://github.com/tiangolo/fastapi/pull/5750)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👷 Add GitHub Action gate/check. PR
[#5492](https://github.com/tiangolo/fastapi/pull/5492)by[@webknjaz](https://github.com/webknjaz). - 🔧 Update sponsors, add Svix. PR
[#5848](https://github.com/tiangolo/fastapi/pull/5848)by[@tiangolo](https://github.com/tiangolo). - 🔧 Remove Doist sponsor. PR
[#5847](https://github.com/tiangolo/fastapi/pull/5847)by[@tiangolo](https://github.com/tiangolo). - ⬆ Update sqlalchemy requirement from <=1.4.41,>=1.3.18 to >=1.3.18,<1.4.43. PR
[#5540](https://github.com/tiangolo/fastapi/pull/5540)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump nwtgck/actions-netlify from 1.2.4 to 2.0.0. PR
[#5757](https://github.com/tiangolo/fastapi/pull/5757)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👷 Refactor CI artifact upload/download for docs previews. PR
[#5793](https://github.com/tiangolo/fastapi/pull/5793)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump pypa/gh-action-pypi-publish from 1.5.1 to 1.5.2. PR
[#5714](https://github.com/tiangolo/fastapi/pull/5714)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👥 Update FastAPI People. PR
[#5722](https://github.com/tiangolo/fastapi/pull/5722)by[@github-actions[bot]](https://github.com/apps/github-actions). - 🔧 Update sponsors, disable course bundle. PR
[#5713](https://github.com/tiangolo/fastapi/pull/5713)by[@tiangolo](https://github.com/tiangolo). - ⬆ Update typer[all] requirement from <0.7.0,>=0.6.1 to >=0.6.1,<0.8.0. PR
[#5639](https://github.com/tiangolo/fastapi/pull/5639)by[@dependabot[bot]](https://github.com/apps/dependabot).

## 0.88.0 (2022-11-27)[¶](#0880-2022-11-27)

### Upgrades[¶](#upgrades_31)

- ⬆ Bump Starlette to version
`0.22.0`

to fix bad encoding for query parameters in new`TestClient`

. PR[#5659](https://github.com/tiangolo/fastapi/pull/5659)by[@azogue](https://github.com/azogue).

### Docs[¶](#docs_73)

- ✏️ Fix typo in docs for
`docs/en/docs/advanced/middleware.md`

. PR[#5376](https://github.com/tiangolo/fastapi/pull/5376)by[@rifatrakib](https://github.com/rifatrakib).

### Translations[¶](#translations_65)

### Internal[¶](#internal_93)

- 👷 Tweak build-docs to improve CI performance. PR
[#5699](https://github.com/tiangolo/fastapi/pull/5699)by[@tiangolo](https://github.com/tiangolo). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#5566](https://github.com/tiangolo/fastapi/pull/5566)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆️ Upgrade Ruff. PR
[#5698](https://github.com/tiangolo/fastapi/pull/5698)by[@tiangolo](https://github.com/tiangolo). - 👷 Remove pip cache for Smokeshow as it depends on a requirements.txt. PR
[#5700](https://github.com/tiangolo/fastapi/pull/5700)by[@tiangolo](https://github.com/tiangolo). - 💚 Fix pip cache for Smokeshow. PR
[#5697](https://github.com/tiangolo/fastapi/pull/5697)by[@tiangolo](https://github.com/tiangolo). - 👷 Fix and tweak CI cache handling. PR
[#5696](https://github.com/tiangolo/fastapi/pull/5696)by[@tiangolo](https://github.com/tiangolo). - 👷 Update
`setup-python`

action in tests to use new caching feature. PR[#5680](https://github.com/tiangolo/fastapi/pull/5680)by[@madkinsz](https://github.com/madkinsz). - ⬆ Bump black from 22.8.0 to 22.10.0. PR
[#5569](https://github.com/tiangolo/fastapi/pull/5569)by[@dependabot[bot]](https://github.com/apps/dependabot).

## 0.87.0 (2022-11-13)[¶](#0870-2022-11-13)

Highlights of this release:

[Upgraded Starlette](https://github.com/encode/starlette/releases/tag/0.21.0)- Now the
`TestClient`

is based on HTTPX instead of Requests. 🚀 - There are some possible
**breaking changes**in the`TestClient`

usage, but[@Kludex](https://github.com/Kludex)built[bump-testclient](https://github.com/Kludex/bump-testclient)to help you automatize migrating your tests. Make sure you are using Git and that you can undo any unnecessary changes (false positive changes, etc) before using`bump-testclient`

.

- Now the
- New
[WebSocketException (and docs)](https://fastapi.tiangolo.com/advanced/websockets/#using-depends-and-others), re-exported from Starlette. - Upgraded and relaxed dependencies for package extras
`all`

(including new Uvicorn version), when you install`"fastapi[all]"`

. - New docs about how to
.**Help Maintain FastAPI**

### Features[¶](#features_32)

- ⬆️ Upgrade and relax dependencies for extras "all". PR
[#5634](https://github.com/tiangolo/fastapi/pull/5634)by[@tiangolo](https://github.com/tiangolo). - ✨ Re-export Starlette's
`WebSocketException`

and add it to docs. PR[#5629](https://github.com/tiangolo/fastapi/pull/5629)by[@tiangolo](https://github.com/tiangolo). - 📝 Update references to Requests for tests to HTTPX, and add HTTPX to extras. PR
[#5628](https://github.com/tiangolo/fastapi/pull/5628)by[@tiangolo](https://github.com/tiangolo). - ⬆ Upgrade Starlette to
`0.21.0`

, including the new. PR`TestClient`

based on HTTPX[#5471](https://github.com/tiangolo/fastapi/pull/5471)by[@pawelrubin](https://github.com/pawelrubin).

### Docs[¶](#docs_74)

- ✏️ Tweak Help FastAPI from PR review after merging. PR
[#5633](https://github.com/tiangolo/fastapi/pull/5633)by[@tiangolo](https://github.com/tiangolo). - ✏️ Clarify docs on CORS. PR
[#5627](https://github.com/tiangolo/fastapi/pull/5627)by[@paxcodes](https://github.com/paxcodes). - 📝 Update Help FastAPI: Help Maintain FastAPI. PR
[#5632](https://github.com/tiangolo/fastapi/pull/5632)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_66)

- 🌐 Fix highlight lines for Japanese translation for
`docs/tutorial/query-params.md`

. PR[#2969](https://github.com/tiangolo/fastapi/pull/2969)by[@ftnext](https://github.com/ftnext). - 🌐 Add French translation for
`docs/fr/docs/advanced/additional-status-code.md`

. PR[#5477](https://github.com/tiangolo/fastapi/pull/5477)by[@axel584](https://github.com/axel584). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/request-forms-and-files.md`

. PR[#5579](https://github.com/tiangolo/fastapi/pull/5579)by[@batlopes](https://github.com/batlopes). - 🌐 Add Japanese translation for
`docs/ja/docs/advanced/websockets.md`

. PR[#4983](https://github.com/tiangolo/fastapi/pull/4983)by[@xryuseix](https://github.com/xryuseix).

### Internal[¶](#internal_94)

- ✨ Use Ruff for linting. PR
[#5630](https://github.com/tiangolo/fastapi/pull/5630)by[@tiangolo](https://github.com/tiangolo). - 🛠 Add Arabic issue number to Notify Translations GitHub Action. PR
[#5610](https://github.com/tiangolo/fastapi/pull/5610)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump dawidd6/action-download-artifact from 2.24.1 to 2.24.2. PR
[#5609](https://github.com/tiangolo/fastapi/pull/5609)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump dawidd6/action-download-artifact from 2.24.0 to 2.24.1. PR
[#5603](https://github.com/tiangolo/fastapi/pull/5603)by[@dependabot[bot]](https://github.com/apps/dependabot). - 📝 Update coverage badge to use Samuel Colvin's Smokeshow. PR
[#5585](https://github.com/tiangolo/fastapi/pull/5585)by[@tiangolo](https://github.com/tiangolo).

## 0.86.0 (2022-11-03)[¶](#0860-2022-11-03)

### Features[¶](#features_33)

- ⬆ Add Python 3.11 to the officially supported versions. PR
[#5587](https://github.com/tiangolo/fastapi/pull/5587)by[@tiangolo](https://github.com/tiangolo). - ✅ Enable tests for Python 3.11. PR
[#4881](https://github.com/tiangolo/fastapi/pull/4881)by[@tiangolo](https://github.com/tiangolo).

### Fixes[¶](#fixes_53)

### Docs[¶](#docs_75)

- ✏ Fix typo in
`docs/en/docs/tutorial/security/oauth2-jwt.md`

. PR[#5584](https://github.com/tiangolo/fastapi/pull/5584)by[@vivekashok1221](https://github.com/vivekashok1221).

### Translations[¶](#translations_67)

- 🌐 Update wording in Chinese translation for
`docs/zh/docs/python-types.md`

. PR[#5416](https://github.com/tiangolo/fastapi/pull/5416)by[@supercaizehua](https://github.com/supercaizehua). - 🌐 Add Russian translation for
`docs/ru/docs/deployment/index.md`

. PR[#5336](https://github.com/tiangolo/fastapi/pull/5336)by[@Xewus](https://github.com/Xewus). - 🌐 Update Chinese translation for
`docs/tutorial/security/oauth2-jwt.md`

. PR[#3846](https://github.com/tiangolo/fastapi/pull/3846)by[@jaystone776](https://github.com/jaystone776).

### Internal[¶](#internal_95)

- 👷 Update FastAPI People to exclude bots: pre-commit-ci, dependabot. PR
[#5586](https://github.com/tiangolo/fastapi/pull/5586)by[@tiangolo](https://github.com/tiangolo). - 🎨 Format OpenAPI JSON in
`test_starlette_exception.py`

. PR[#5379](https://github.com/tiangolo/fastapi/pull/5379)by[@iudeen](https://github.com/iudeen). - 👷 Switch from Codecov to Smokeshow plus pytest-cov to pure coverage for internal tests. PR
[#5583](https://github.com/tiangolo/fastapi/pull/5583)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#5571](https://github.com/tiangolo/fastapi/pull/5571)by[@github-actions[bot]](https://github.com/apps/github-actions).

## 0.85.2 (2022-10-31)[¶](#0852-2022-10-31)

### Docs[¶](#docs_76)

- ✏ Fix grammar and add helpful links to dependencies in
`docs/en/docs/async.md`

. PR[#5432](https://github.com/tiangolo/fastapi/pull/5432)by[@pamelafox](https://github.com/pamelafox). - ✏ Fix broken link in
`alternatives.md`

. PR[#5455](https://github.com/tiangolo/fastapi/pull/5455)by[@su-shubham](https://github.com/su-shubham). - ✏ Fix typo in docs about contributing, for compatibility with
`pip`

in Zsh. PR[#5523](https://github.com/tiangolo/fastapi/pull/5523)by[@zhangbo2012](https://github.com/zhangbo2012). - 📝 Fix typo in docs with examples for Python 3.10 instead of 3.9. PR
[#5545](https://github.com/tiangolo/fastapi/pull/5545)by[@feliciss](https://github.com/feliciss).

### Translations[¶](#translations_68)

- 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/request-forms.md`

. PR[#4934](https://github.com/tiangolo/fastapi/pull/4934)by[@batlopes](https://github.com/batlopes). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/dependencies/classes-as-dependencies.md`

. PR[#4971](https://github.com/tiangolo/fastapi/pull/4971)by[@Zssaer](https://github.com/Zssaer). - 🌐 Add French translation for
`deployment/deta.md`

. PR[#3692](https://github.com/tiangolo/fastapi/pull/3692)by[@rjNemo](https://github.com/rjNemo). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/query-params-str-validations.md`

. PR[#5255](https://github.com/tiangolo/fastapi/pull/5255)by[@hjlarry](https://github.com/hjlarry). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/sql-databases.md`

. PR[#4999](https://github.com/tiangolo/fastapi/pull/4999)by[@Zssaer](https://github.com/Zssaer). - 🌐 Add Chinese translation for
`docs/zh/docs/advanced/wsgi.md`

. PR[#4505](https://github.com/tiangolo/fastapi/pull/4505)by[@ASpathfinder](https://github.com/ASpathfinder). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/body-multiple-params.md`

. PR[#4111](https://github.com/tiangolo/fastapi/pull/4111)by[@lbmendes](https://github.com/lbmendes). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/path-params-numeric-validations.md`

. PR[#4099](https://github.com/tiangolo/fastapi/pull/4099)by[@lbmendes](https://github.com/lbmendes). - 🌐 Add French translation for
`deployment/versions.md`

. PR[#3690](https://github.com/tiangolo/fastapi/pull/3690)by[@rjNemo](https://github.com/rjNemo). - 🌐 Add French translation for
`docs/fr/docs/help-fastapi.md`

. PR[#2233](https://github.com/tiangolo/fastapi/pull/2233)by[@JulianMaurin](https://github.com/JulianMaurin). - 🌐 Fix typo in Chinese translation for
`docs/zh/docs/tutorial/security/first-steps.md`

. PR[#5530](https://github.com/tiangolo/fastapi/pull/5530)by[@yuki1sntSnow](https://github.com/yuki1sntSnow). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/response-status-code.md`

. PR[#4922](https://github.com/tiangolo/fastapi/pull/4922)by[@batlopes](https://github.com/batlopes). - 🔧 Add config for Tamil translations. PR
[#5563](https://github.com/tiangolo/fastapi/pull/5563)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_96)

- ⬆ Bump internal dependency mypy from 0.971 to 0.982. PR
[#5541](https://github.com/tiangolo/fastapi/pull/5541)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump nwtgck/actions-netlify from 1.2.3 to 1.2.4. PR
[#5507](https://github.com/tiangolo/fastapi/pull/5507)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump internal dependency types-ujson from 5.4.0 to 5.5.0. PR
[#5537](https://github.com/tiangolo/fastapi/pull/5537)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump dawidd6/action-download-artifact from 2.23.0 to 2.24.0. PR
[#5508](https://github.com/tiangolo/fastapi/pull/5508)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Update internal dependency pytest-cov requirement from <4.0.0,>=2.12.0 to >=2.12.0,<5.0.0. PR
[#5539](https://github.com/tiangolo/fastapi/pull/5539)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#5536](https://github.com/tiangolo/fastapi/pull/5536)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 🐛 Fix internal Trio test warnings. PR
[#5547](https://github.com/tiangolo/fastapi/pull/5547)by[@samuelcolvin](https://github.com/samuelcolvin). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#5408](https://github.com/tiangolo/fastapi/pull/5408)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆️ Upgrade Typer to include Rich in scripts for docs. PR
[#5502](https://github.com/tiangolo/fastapi/pull/5502)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix calling
`mkdocs`

for languages as a subprocess to fix/enable MkDocs Material search plugin. PR[#5501](https://github.com/tiangolo/fastapi/pull/5501)by[@tiangolo](https://github.com/tiangolo).

## 0.85.1 (2022-10-14)[¶](#0851-2022-10-14)

### Fixes[¶](#fixes_54)

- 🐛 Fix support for strings in OpenAPI status codes:
`default`

,`1XX`

,`2XX`

,`3XX`

,`4XX`

,`5XX`

. PR[#5187](https://github.com/tiangolo/fastapi/pull/5187)by[@JarroVGIT](https://github.com/JarroVGIT).

### Docs[¶](#docs_77)

### Internal[¶](#internal_97)

- 👥 Update FastAPI People. PR
[#5447](https://github.com/tiangolo/fastapi/pull/5447)by[@github-actions[bot]](https://github.com/apps/github-actions). - 🔧 Disable Material for MkDocs search plugin. PR
[#5495](https://github.com/tiangolo/fastapi/pull/5495)by[@tiangolo](https://github.com/tiangolo). - 🔇 Ignore Trio warning in tests for CI. PR
[#5483](https://github.com/tiangolo/fastapi/pull/5483)by[@samuelcolvin](https://github.com/samuelcolvin).

## 0.85.0 (2022-09-15)[¶](#0850-2022-09-15)

### Features[¶](#features_34)

- ⬆ Upgrade version required of Starlette from
`0.19.1`

to`0.20.4`

. Initial PR[#4820](https://github.com/tiangolo/fastapi/pull/4820)by[@Kludex](https://github.com/Kludex).- This includes several bug fixes in Starlette.

- ⬆️ Upgrade Uvicorn max version in public extras: all. From
`>=0.12.0,<0.18.0`

to`>=0.12.0,<0.19.0`

. PR[#5401](https://github.com/tiangolo/fastapi/pull/5401)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_98)

- ⬆️ Upgrade dependencies for doc and dev internal extras: Typer, Uvicorn. PR
[#5400](https://github.com/tiangolo/fastapi/pull/5400)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade test dependencies: Black, HTTPX, databases, types-ujson. PR
[#5399](https://github.com/tiangolo/fastapi/pull/5399)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade mypy and tweak internal type annotations. PR
[#5398](https://github.com/tiangolo/fastapi/pull/5398)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update test dependencies, upgrade Pytest, move dependencies from dev to test. PR
[#5396](https://github.com/tiangolo/fastapi/pull/5396)by[@tiangolo](https://github.com/tiangolo).

## 0.84.0 (2022-09-14)[¶](#0840-2022-09-14)

### Breaking Changes[¶](#breaking-changes_9)

This version of FastAPI drops support for Python 3.6. 🔥 Please upgrade to a supported version of Python (3.7 or above), Python 3.6 reached the end-of-life a long time ago. 😅☠

- 🔧 Update package metadata, drop support for Python 3.6, move build internals from Flit to Hatch. PR
[#5240](https://github.com/tiangolo/fastapi/pull/5240)by[@ofek](https://github.com/ofek).

## 0.83.0 (2022-09-11)[¶](#0830-2022-09-11)

🚨 This is probably the last release (or one of the last releases) to support Python 3.6. 🔥

Python 3.6 reached the [end-of-life and is no longer supported by Python](https://www.python.org/downloads/release/python-3615/) since around a year ago.

You hopefully updated to a supported version of Python a while ago. If you haven't, you really should.

### Features[¶](#features_35)

### Fixes[¶](#fixes_55)

- 🐛 Fix
`RuntimeError`

raised when`HTTPException`

has a status code with no content. PR[#5365](https://github.com/tiangolo/fastapi/pull/5365)by[@iudeen](https://github.com/iudeen). - 🐛 Fix empty response body when default
`status_code`

is empty but the a`Response`

parameter with`response.status_code`

is set. PR[#5360](https://github.com/tiangolo/fastapi/pull/5360)by[@tmeckel](https://github.com/tmeckel).

### Docs[¶](#docs_78)

### Internal[¶](#internal_99)

- ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#5352](https://github.com/tiangolo/fastapi/pull/5352)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci).

## 0.82.0 (2022-09-04)[¶](#0820-2022-09-04)

🚨 This is probably the last release (or one of the last releases) to support Python 3.6. 🔥

Python 3.6 reached the [end-of-life and is no longer supported by Python](https://www.python.org/downloads/release/python-3615/) since around a year ago.

You hopefully updated to a supported version of Python a while ago. If you haven't, you really should.

### Features[¶](#features_36)

- ✨ Export
`WebSocketState`

in`fastapi.websockets`

. PR[#4376](https://github.com/tiangolo/fastapi/pull/4376)by[@matiuszka](https://github.com/matiuszka). - ✨ Support Python internal description on Pydantic model's docstring. PR
[#3032](https://github.com/tiangolo/fastapi/pull/3032)by[@Kludex](https://github.com/Kludex). - ✨ Update
`ORJSONResponse`

to support non`str`

keys and serializing Numpy arrays. PR[#3892](https://github.com/tiangolo/fastapi/pull/3892)by[@baby5](https://github.com/baby5).

### Fixes[¶](#fixes_56)

- 🐛 Allow exit code for dependencies with
`yield`

to always execute, by removing capacity limiter for them, to e.g. allow closing DB connections without deadlocks. PR[#5122](https://github.com/tiangolo/fastapi/pull/5122)by[@adriangb](https://github.com/adriangb). - 🐛 Fix FastAPI People GitHub Action: set HTTPX timeout for GraphQL query request. PR
[#5222](https://github.com/tiangolo/fastapi/pull/5222)by[@iudeen](https://github.com/iudeen). - 🐛 Make sure a parameter defined as required is kept required in OpenAPI even if defined as optional in another dependency. PR
[#4319](https://github.com/tiangolo/fastapi/pull/4319)by[@cd17822](https://github.com/cd17822). - 🐛 Fix support for path parameters in WebSockets. PR
[#3879](https://github.com/tiangolo/fastapi/pull/3879)by[@davidbrochart](https://github.com/davidbrochart).

### Docs[¶](#docs_79)

- ✏ Update Hypercorn link, now pointing to GitHub. PR
[#5346](https://github.com/tiangolo/fastapi/pull/5346)by[@baconfield](https://github.com/baconfield). - ✏ Tweak wording in
`docs/en/docs/advanced/dataclasses.md`

. PR[#3698](https://github.com/tiangolo/fastapi/pull/3698)by[@pfackeldey](https://github.com/pfackeldey). - 📝 Add note about Python 3.10
`X | Y`

operator in explanation about Response Models. PR[#5307](https://github.com/tiangolo/fastapi/pull/5307)by[@MendyLanda](https://github.com/MendyLanda). - 📝 Add link to New Relic article: "How to monitor FastAPI application performance using Python agent". PR
[#5260](https://github.com/tiangolo/fastapi/pull/5260)by[@sjyothi54](https://github.com/sjyothi54). - 📝 Update docs for
`ORJSONResponse`

with details about improving performance. PR[#2615](https://github.com/tiangolo/fastapi/pull/2615)by[@falkben](https://github.com/falkben). - 📝 Add docs for creating a custom Response class. PR
[#5331](https://github.com/tiangolo/fastapi/pull/5331)by[@tiangolo](https://github.com/tiangolo). - 📝 Add tip about using alias for form data fields. PR
[#5329](https://github.com/tiangolo/fastapi/pull/5329)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_69)

- 🌐 Add Russian translation for
`docs/ru/docs/features.md`

. PR[#5315](https://github.com/tiangolo/fastapi/pull/5315)by[@Xewus](https://github.com/Xewus). - 🌐 Update Chinese translation for
`docs/zh/docs/tutorial/request-files.md`

. PR[#4529](https://github.com/tiangolo/fastapi/pull/4529)by[@ASpathfinder](https://github.com/ASpathfinder). - 🌐 Add Chinese translation for
`docs/zh/docs/tutorial/encoder.md`

. PR[#4969](https://github.com/tiangolo/fastapi/pull/4969)by[@Zssaer](https://github.com/Zssaer). - 🌐 Fix MkDocs file line for Portuguese translation of
`background-task.md`

. PR[#5242](https://github.com/tiangolo/fastapi/pull/5242)by[@ComicShrimp](https://github.com/ComicShrimp).

### Internal[¶](#internal_100)

- 👥 Update FastAPI People. PR
[#5347](https://github.com/tiangolo/fastapi/pull/5347)by[@github-actions[bot]](https://github.com/apps/github-actions). - ⬆ Bump dawidd6/action-download-artifact from 2.22.0 to 2.23.0. PR
[#5321](https://github.com/tiangolo/fastapi/pull/5321)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#5318](https://github.com/tiangolo/fastapi/pull/5318)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ✏ Fix a small code highlight line error. PR
[#5256](https://github.com/tiangolo/fastapi/pull/5256)by[@hjlarry](https://github.com/hjlarry). - ♻ Internal small refactor, move
`operation_id`

parameter position in delete method for consistency with the code. PR[#4474](https://github.com/tiangolo/fastapi/pull/4474)by[@hiel](https://github.com/hiel). - 🔧 Update sponsors, disable ImgWhale. PR
[#5338](https://github.com/tiangolo/fastapi/pull/5338)by[@tiangolo](https://github.com/tiangolo).

## 0.81.0 (2022-08-26)[¶](#0810-2022-08-26)

### Features[¶](#features_37)

- ✨ Add ReDoc
`<noscript>`

warning when JS is disabled. PR[#5074](https://github.com/tiangolo/fastapi/pull/5074)by[@evroon](https://github.com/evroon). - ✨ Add support for
`FrozenSet`

in parameters (e.g. query). PR[#2938](https://github.com/tiangolo/fastapi/pull/2938)by[@juntatalor](https://github.com/juntatalor). - ✨ Allow custom middlewares to raise
`HTTPException`

s and propagate them. PR[#2036](https://github.com/tiangolo/fastapi/pull/2036)by[@ghandic](https://github.com/ghandic). - ✨ Preserve
`json.JSONDecodeError`

information when handling invalid JSON in request body, to support custom exception handlers that use its information. PR[#4057](https://github.com/tiangolo/fastapi/pull/4057)by[@UKnowWhoIm](https://github.com/UKnowWhoIm).

### Fixes[¶](#fixes_57)

- 🐛 Fix
`jsonable_encoder`

for dataclasses with pydantic-compatible fields. PR[#3607](https://github.com/tiangolo/fastapi/pull/3607)by[@himbeles](https://github.com/himbeles). - 🐛 Fix support for extending
`openapi_extras`

with parameter lists. PR[#4267](https://github.com/tiangolo/fastapi/pull/4267)by[@orilevari](https://github.com/orilevari).

### Docs[¶](#docs_80)

- ✏ Fix a simple typo in
`docs/en/docs/python-types.md`

. PR[#5193](https://github.com/tiangolo/fastapi/pull/5193)by[@GlitchingCore](https://github.com/GlitchingCore). - ✏ Fix typos in
`tests/test_schema_extra_examples.py`

. PR[#5126](https://github.com/tiangolo/fastapi/pull/5126)by[@supraaxdd](https://github.com/supraaxdd). - ✏ Fix typos in
`docs/en/docs/tutorial/path-params-numeric-validations.md`

. PR[#5142](https://github.com/tiangolo/fastapi/pull/5142)by[@invisibleroads](https://github.com/invisibleroads). - 📝 Add step about upgrading pip in the venv to avoid errors when installing dependencies
`docs/en/docs/contributing.md`

. PR[#5181](https://github.com/tiangolo/fastapi/pull/5181)by[@edisnake](https://github.com/edisnake). - ✏ Reword and clarify text in tutorial
`docs/en/docs/tutorial/body-nested-models.md`

. PR[#5169](https://github.com/tiangolo/fastapi/pull/5169)by[@papb](https://github.com/papb). - ✏ Fix minor typo in
`docs/en/docs/features.md`

. PR[#5206](https://github.com/tiangolo/fastapi/pull/5206)by[@OtherBarry](https://github.com/OtherBarry). - ✏ Fix minor typos in
`docs/en/docs/async.md`

. PR[#5125](https://github.com/tiangolo/fastapi/pull/5125)by[@Ksenofanex](https://github.com/Ksenofanex). - 📝 Add external link to docs: "Fastapi, Docker(Docker compose) and Postgres". PR
[#5033](https://github.com/tiangolo/fastapi/pull/5033)by[@krishnardt](https://github.com/krishnardt). - 📝 Simplify example for docs for Additional Responses, remove unnecessary
`else`

. PR[#4693](https://github.com/tiangolo/fastapi/pull/4693)by[@adriangb](https://github.com/adriangb). - 📝 Update docs, compare enums with identity instead of equality. PR
[#4905](https://github.com/tiangolo/fastapi/pull/4905)by[@MicaelJarniac](https://github.com/MicaelJarniac). - ✏ Fix typo in
`docs/en/docs/python-types.md`

. PR[#4886](https://github.com/tiangolo/fastapi/pull/4886)by[@MicaelJarniac](https://github.com/MicaelJarniac). - 🎨 Fix syntax highlighting in docs for OpenAPI Callbacks. PR
[#4368](https://github.com/tiangolo/fastapi/pull/4368)by[@xncbf](https://github.com/xncbf). - ✏ Reword confusing sentence in docs file
`typo-fix-path-params-numeric-validations.md`

. PR[#3219](https://github.com/tiangolo/fastapi/pull/3219)by[@ccrenfroe](https://github.com/ccrenfroe). - 📝 Update docs for handling HTTP Basic Auth with
`secrets.compare_digest()`

to account for non-ASCII characters. PR[#3536](https://github.com/tiangolo/fastapi/pull/3536)by[@lewoudar](https://github.com/lewoudar). - 📝 Update docs for testing, fix examples with relative imports. PR
[#5302](https://github.com/tiangolo/fastapi/pull/5302)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_70)

- 🌐 Add Russian translation for
`docs/ru/docs/index.md`

. PR[#5289](https://github.com/tiangolo/fastapi/pull/5289)by[@impocode](https://github.com/impocode). - 🌐 Add Russian translation for
`docs/ru/docs/deployment/versions.md`

. PR[#4985](https://github.com/tiangolo/fastapi/pull/4985)by[@emp7yhead](https://github.com/emp7yhead). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/header-params.md`

. PR[#4921](https://github.com/tiangolo/fastapi/pull/4921)by[@batlopes](https://github.com/batlopes). - 🌐 Update
`ko/mkdocs.yml`

for a missing link. PR[#5020](https://github.com/tiangolo/fastapi/pull/5020)by[@dalinaum](https://github.com/dalinaum).

### Internal[¶](#internal_101)

- ⬆ Bump dawidd6/action-download-artifact from 2.21.1 to 2.22.0. PR
[#5258](https://github.com/tiangolo/fastapi/pull/5258)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#5196](https://github.com/tiangolo/fastapi/pull/5196)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - 🔥 Delete duplicated tests in
`tests/test_tutorial/test_sql_databases/test_sql_databases.py`

. PR[#5040](https://github.com/tiangolo/fastapi/pull/5040)by[@raccoonyy](https://github.com/raccoonyy). - ♻ Simplify internal RegEx in
`fastapi/utils.py`

. PR[#5057](https://github.com/tiangolo/fastapi/pull/5057)by[@pylounge](https://github.com/pylounge). - 🔧 Fix Type hint of
`auto_error`

which does not need to be`Optional[bool]`

. PR[#4933](https://github.com/tiangolo/fastapi/pull/4933)by[@DavidKimDY](https://github.com/DavidKimDY). - 🔧 Update mypy config, use
`strict = true`

instead of manual configs. PR[#4605](https://github.com/tiangolo/fastapi/pull/4605)by[@michaeloliverx](https://github.com/michaeloliverx). - ♻ Change a
`dict()`

for`{}`

in`fastapi/utils.py`

. PR[#3138](https://github.com/tiangolo/fastapi/pull/3138)by[@ShahriyarR](https://github.com/ShahriyarR). - ♻ Move internal variable for errors in
`jsonable_encoder`

to put related code closer. PR[#4560](https://github.com/tiangolo/fastapi/pull/4560)by[@GuilleQP](https://github.com/GuilleQP). - ♻ Simplify conditional assignment in
`fastapi/dependencies/utils.py`

. PR[#4597](https://github.com/tiangolo/fastapi/pull/4597)by[@cikay](https://github.com/cikay). - ⬆ Upgrade version pin accepted for Flake8, for internal code, to
`flake8 >=3.8.3,<6.0.0`

. PR[#4097](https://github.com/tiangolo/fastapi/pull/4097)by[@jamescurtin](https://github.com/jamescurtin). - 🍱 Update Jina banner, fix typo. PR
[#5301](https://github.com/tiangolo/fastapi/pull/5301)by[@tiangolo](https://github.com/tiangolo).

## 0.80.0 (2022-08-23)[¶](#0800-2022-08-23)

### Breaking Changes - Fixes[¶](#breaking-changes-fixes)

If you are using `response_model`

with some type that doesn't include `None`

but the function is returning `None`

, it will now raise an internal server error, because you are returning invalid data that violates the contract in `response_model`

. Before this release it would allow breaking that contract returning `None`

.

For example, if you have an app like this:

```
from fastapi import FastAPI
from pydantic import BaseModel
class Item(BaseModel):
name: str
price: Optional[float] = None
owner_ids: Optional[List[int]] = None
app = FastAPI()
@app.get("/items/invalidnone", response_model=Item)
def get_invalid_none():
return None
```


...calling the path `/items/invalidnone`

will raise an error, because `None`

is not a valid type for the `response_model`

declared with `Item`

.

You could also be implicitly returning `None`

without realizing, for example:

```
from fastapi import FastAPI
from pydantic import BaseModel
class Item(BaseModel):
name: str
price: Optional[float] = None
owner_ids: Optional[List[int]] = None
app = FastAPI()
@app.get("/items/invalidnone", response_model=Item)
def get_invalid_none():
if flag:
return {"name": "foo"}
# if flag is False, at this point the function will implicitly return None
```


If you have *path operations* using `response_model`

that need to be allowed to return `None`

, make it explicit in `response_model`

using `Union[Something, None]`

:

```
from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
class Item(BaseModel):
name: str
price: Optional[float] = None
owner_ids: Optional[List[int]] = None
app = FastAPI()
@app.get("/items/invalidnone", response_model=Union[Item, None])
def get_invalid_none():
return None
```


This way the data will be correctly validated, you won't have an internal server error, and the documentation will also reflect that this *path operation* could return `None`

(or `null`

in JSON).

### Fixes[¶](#fixes_58)

- ⬆ Upgrade Swagger UI copy of
`oauth2-redirect.html`

to include fixes for flavors of authorization code flows in Swagger UI. PR[#3439](https://github.com/tiangolo/fastapi/pull/3439)initial PR by[@koonpeng](https://github.com/koonpeng). - ♻ Strip empty whitespace from description extracted from docstrings. PR
[#2821](https://github.com/tiangolo/fastapi/pull/2821)by[@and-semakin](https://github.com/and-semakin). - 🐛 Fix cached dependencies when using a dependency in
`Security()`

and other places (e.g.`Depends()`

) with different OAuth2 scopes. PR[#2945](https://github.com/tiangolo/fastapi/pull/2945)by[@laggardkernel](https://github.com/laggardkernel). - 🎨 Update type annotations for
`response_model`

, allow things like`Union[str, None]`

. PR[#5294](https://github.com/tiangolo/fastapi/pull/5294)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_71)

- 🌐 Fix typos in German translation for
`docs/de/docs/features.md`

. PR[#4533](https://github.com/tiangolo/fastapi/pull/4533)by[@0xflotus](https://github.com/0xflotus). - 🌐 Add missing navigator for
`encoder.md`

in Korean translation. PR[#5238](https://github.com/tiangolo/fastapi/pull/5238)by[@joonas-yoon](https://github.com/joonas-yoon). - (Empty PR merge by accident)
[#4913](https://github.com/tiangolo/fastapi/pull/4913).

## 0.79.1 (2022-08-18)[¶](#0791-2022-08-18)

### Fixes[¶](#fixes_59)

- 🐛 Fix
`jsonable_encoder`

using`include`

and`exclude`

parameters for non-Pydantic objects. PR[#2606](https://github.com/tiangolo/fastapi/pull/2606)by[@xaviml](https://github.com/xaviml). - 🐛 Fix edge case with repeated aliases names not shown in OpenAPI. PR
[#2351](https://github.com/tiangolo/fastapi/pull/2351)by[@klaa97](https://github.com/klaa97). - 📝 Add misc dependency installs to tutorial docs. PR
[#2126](https://github.com/tiangolo/fastapi/pull/2126)by[@TeoZosa](https://github.com/TeoZosa).

### Docs[¶](#docs_81)

- 📝 Add note giving credit for illustrations to
[Ketrina Thompson](https://www.instagram.com/ketrinadrawsalot/). PR[#5284](https://github.com/tiangolo/fastapi/pull/5284)by[@tiangolo](https://github.com/tiangolo). - ✏ Fix typo in
`python-types.md`

. PR[#5116](https://github.com/tiangolo/fastapi/pull/5116)by[@Kludex](https://github.com/Kludex). - ✏ Fix typo in
`docs/en/docs/python-types.md`

. PR[#5007](https://github.com/tiangolo/fastapi/pull/5007)by[@atiabbz](https://github.com/atiabbz). - 📝 Remove unneeded Django/Flask references from async topic intro. PR
[#5280](https://github.com/tiangolo/fastapi/pull/5280)by[@carltongibson](https://github.com/carltongibson). - ✨ Add illustrations for Concurrent burgers and Parallel burgers. PR
[#5277](https://github.com/tiangolo/fastapi/pull/5277)by[@tiangolo](https://github.com/tiangolo). Updated docs at:[Concurrency and Burgers](https://fastapi.tiangolo.com/async/#concurrency-and-burgers).

### Translations[¶](#translations_72)

- 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/query-params.md`

. PR[#4775](https://github.com/tiangolo/fastapi/pull/4775)by[@batlopes](https://github.com/batlopes). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/security/first-steps.md`

. PR[#4954](https://github.com/tiangolo/fastapi/pull/4954)by[@FLAIR7](https://github.com/FLAIR7). - 🌐 Add translation for
`docs/zh/docs/advanced/response-cookies.md`

. PR[#4638](https://github.com/tiangolo/fastapi/pull/4638)by[@zhangbo2012](https://github.com/zhangbo2012). - 🌐 Add French translation for
`docs/fr/docs/deployment/index.md`

. PR[#3689](https://github.com/tiangolo/fastapi/pull/3689)by[@rjNemo](https://github.com/rjNemo). - 🌐 Add Portuguese translation for
`tutorial/handling-errors.md`

. PR[#4769](https://github.com/tiangolo/fastapi/pull/4769)by[@frnsimoes](https://github.com/frnsimoes). - 🌐 Add French translation for
`docs/fr/docs/history-design-future.md`

. PR[#3451](https://github.com/tiangolo/fastapi/pull/3451)by[@rjNemo](https://github.com/rjNemo). - 🌐 Add Russian translation for
`docs/ru/docs/tutorial/background-tasks.md`

. PR[#4854](https://github.com/tiangolo/fastapi/pull/4854)by[@AdmiralDesu](https://github.com/AdmiralDesu). - 🌐 Add Chinese translation for
`docs/tutorial/security/first-steps.md`

. PR[#3841](https://github.com/tiangolo/fastapi/pull/3841)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Japanese translation for
`docs/ja/docs/advanced/nosql-databases.md`

. PR[#4205](https://github.com/tiangolo/fastapi/pull/4205)by[@sUeharaE4](https://github.com/sUeharaE4). - 🌐 Add Indonesian translation for
`docs/id/docs/tutorial/index.md`

. PR[#4705](https://github.com/tiangolo/fastapi/pull/4705)by[@bas-baskara](https://github.com/bas-baskara). - 🌐 Add Persian translation for
`docs/fa/docs/index.md`

and tweak right-to-left CSS. PR[#2395](https://github.com/tiangolo/fastapi/pull/2395)by[@mohsen-mahmoodi](https://github.com/mohsen-mahmoodi).

### Internal[¶](#internal_102)

- 🔧 Update Jina sponsorship. PR
[#5283](https://github.com/tiangolo/fastapi/pull/5283)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update Jina sponsorship. PR
[#5272](https://github.com/tiangolo/fastapi/pull/5272)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, Striveworks badge. PR
[#5179](https://github.com/tiangolo/fastapi/pull/5179)by[@tiangolo](https://github.com/tiangolo).

## 0.79.0 (2022-07-14)[¶](#0790-2022-07-14)

### Fixes - Breaking Changes[¶](#fixes-breaking-changes)

- 🐛 Fix removing body from status codes that do not support it. PR
[#5145](https://github.com/tiangolo/fastapi/pull/5145)by[@tiangolo](https://github.com/tiangolo).- Setting
`status_code`

to`204`

,`304`

, or any code below`200`

(1xx) will remove the body from the response. - This fixes an error in Uvicorn that otherwise would be thrown:
`RuntimeError: Response content longer than Content-Length`

. - This removes
`fastapi.openapi.constants.STATUS_CODES_WITH_NO_BODY`

, it is replaced by a function in utils.

- Setting

### Translations[¶](#translations_73)

- 🌐 Start of Hebrew translation. PR
[#5050](https://github.com/tiangolo/fastapi/pull/5050)by[@itay-raveh](https://github.com/itay-raveh). - 🔧 Add config for Swedish translations notification. PR
[#5147](https://github.com/tiangolo/fastapi/pull/5147)by[@tiangolo](https://github.com/tiangolo). - 🌐 Start of Swedish translation. PR
[#5062](https://github.com/tiangolo/fastapi/pull/5062)by[@MrRawbin](https://github.com/MrRawbin). - 🌐 Add Japanese translation for
`docs/ja/docs/advanced/index.md`

. PR[#5043](https://github.com/tiangolo/fastapi/pull/5043)by[@wakabame](https://github.com/wakabame). - 🌐🇵🇱 Add Polish translation for
`docs/pl/docs/tutorial/first-steps.md`

. PR[#5024](https://github.com/tiangolo/fastapi/pull/5024)by[@Valaraucoo](https://github.com/Valaraucoo).

### Internal[¶](#internal_103)

- 🔧 Update translations notification for Hebrew. PR
[#5158](https://github.com/tiangolo/fastapi/pull/5158)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update Dependabot commit message. PR
[#5156](https://github.com/tiangolo/fastapi/pull/5156)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump actions/upload-artifact from 2 to 3. PR
[#5148](https://github.com/tiangolo/fastapi/pull/5148)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump actions/cache from 2 to 3. PR
[#5149](https://github.com/tiangolo/fastapi/pull/5149)by[@dependabot[bot]](https://github.com/apps/dependabot). - 🔧 Update sponsors badge configs. PR
[#5155](https://github.com/tiangolo/fastapi/pull/5155)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#5154](https://github.com/tiangolo/fastapi/pull/5154)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update Jina sponsor badges. PR
[#5151](https://github.com/tiangolo/fastapi/pull/5151)by[@tiangolo](https://github.com/tiangolo). - ⬆ Bump actions/checkout from 2 to 3. PR
[#5133](https://github.com/tiangolo/fastapi/pull/5133)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ [pre-commit.ci] pre-commit autoupdate. PR
[#5030](https://github.com/tiangolo/fastapi/pull/5030)by[@pre-commit-ci[bot]](https://github.com/apps/pre-commit-ci). - ⬆ Bump nwtgck/actions-netlify from 1.1.5 to 1.2.3. PR
[#5132](https://github.com/tiangolo/fastapi/pull/5132)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump codecov/codecov-action from 2 to 3. PR
[#5131](https://github.com/tiangolo/fastapi/pull/5131)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump dawidd6/action-download-artifact from 2.9.0 to 2.21.1. PR
[#5130](https://github.com/tiangolo/fastapi/pull/5130)by[@dependabot[bot]](https://github.com/apps/dependabot). - ⬆ Bump actions/setup-python from 2 to 4. PR
[#5129](https://github.com/tiangolo/fastapi/pull/5129)by[@dependabot[bot]](https://github.com/apps/dependabot). - 👷 Add Dependabot. PR
[#5128](https://github.com/tiangolo/fastapi/pull/5128)by[@tiangolo](https://github.com/tiangolo). - ♻️ Move from
`Optional[X]`

to`Union[X, None]`

for internal utils. PR[#5124](https://github.com/tiangolo/fastapi/pull/5124)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, remove Dropbase, add Doist. PR
[#5096](https://github.com/tiangolo/fastapi/pull/5096)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, remove Classiq, add ImgWhale. PR
[#5079](https://github.com/tiangolo/fastapi/pull/5079)by[@tiangolo](https://github.com/tiangolo).

## 0.78.0 (2022-05-14)[¶](#0780-2022-05-14)

### Features[¶](#features_38)

-
✨ Add support for omitting

`...`

as default value when declaring required parameters with: -
`Path()`

`Query()`

`Header()`

`Cookie()`

`Body()`

`Form()`

`File()`


New docs at [Tutorial - Query Parameters and String Validations - Make it required](https://fastapi.tiangolo.com/tutorial/query-params-str-validations/#make-it-required). PR [#4906](https://github.com/tiangolo/fastapi/pull/4906) by [@tiangolo](https://github.com/tiangolo).

Up to now, declaring a required parameter while adding additional validation or metadata needed using `...`

(Ellipsis).

For example:

```
from fastapi import Cookie, FastAPI, Header, Path, Query
app = FastAPI()
@app.get("/items/{item_id}")
def main(
item_id: int = Path(default=..., gt=0),
query: str = Query(default=..., max_length=10),
session: str = Cookie(default=..., min_length=3),
x_trace: str = Header(default=..., title="Tracing header"),
):
return {"message": "Hello World"}
```


...all these parameters are required because the default value is `...`

(Ellipsis).

But now it's possible and supported to just omit the default value, as would be done with Pydantic fields, and the parameters would still be required.

✨ For example, this is now supported:

```
from fastapi import Cookie, FastAPI, Header, Path, Query
app = FastAPI()
@app.get("/items/{item_id}")
def main(
item_id: int = Path(gt=0),
query: str = Query(max_length=10),
session: str = Cookie(min_length=3),
x_trace: str = Header(title="Tracing header"),
):
return {"message": "Hello World"}
```


To declare parameters as optional (not required), you can set a default value as always, for example using `None`

:

```
from typing import Union
from fastapi import Cookie, FastAPI, Header, Path, Query
app = FastAPI()
@app.get("/items/{item_id}")
def main(
item_id: int = Path(gt=0),
query: Union[str, None] = Query(default=None, max_length=10),
session: Union[str, None] = Cookie(default=None, min_length=3),
x_trace: Union[str, None] = Header(default=None, title="Tracing header"),
):
return {"message": "Hello World"}
```


### Docs[¶](#docs_82)

- 📝 Add docs recommending
`Union`

over`Optional`

and migrate source examples. New docs at[Python Types Intro - Using](https://fastapi.tiangolo.com/python-types/#using-union-or-optional). PR`Union`

or`Optional`

[#4908](https://github.com/tiangolo/fastapi/pull/4908)by[@tiangolo](https://github.com/tiangolo). - 🎨 Fix default value as set in tutorial for Path Operations Advanced Configurations. PR
[#4899](https://github.com/tiangolo/fastapi/pull/4899)by[@tiangolo](https://github.com/tiangolo). - 📝 Add documentation for redefined path operations. PR
[#4864](https://github.com/tiangolo/fastapi/pull/4864)by[@madkinsz](https://github.com/madkinsz). - 📝 Updates links for Celery documentation. PR
[#4736](https://github.com/tiangolo/fastapi/pull/4736)by[@sammyzord](https://github.com/sammyzord). - ✏ Fix example code with sets in tutorial for body nested models. PR
[#3030](https://github.com/tiangolo/fastapi/pull/3030)by[@hitrust](https://github.com/hitrust). - ✏ Fix links to Pydantic docs. PR
[#4670](https://github.com/tiangolo/fastapi/pull/4670)by[@kinuax](https://github.com/kinuax). - 📝 Update docs about Swagger UI self-hosting with newer source links. PR
[#4813](https://github.com/tiangolo/fastapi/pull/4813)by[@Kastakin](https://github.com/Kastakin). - 📝 Add link to external article: Building the Poll App From Django Tutorial With FastAPI And React. PR
[#4778](https://github.com/tiangolo/fastapi/pull/4778)by[@jbrocher](https://github.com/jbrocher). - 📝 Add OpenAPI warning to "Body - Fields" docs with extra schema extensions. PR
[#4846](https://github.com/tiangolo/fastapi/pull/4846)by[@ml-evs](https://github.com/ml-evs).

### Translations[¶](#translations_74)

- 🌐 Fix code examples in Japanese translation for
`docs/ja/docs/tutorial/testing.md`

. PR[#4623](https://github.com/tiangolo/fastapi/pull/4623)by[@hirotoKirimaru](https://github.com/hirotoKirimaru).

### Internal[¶](#internal_104)

- ♻ Refactor dict value extraction to minimize key lookups
`fastapi/utils.py`

. PR[#3139](https://github.com/tiangolo/fastapi/pull/3139)by[@ShahriyarR](https://github.com/ShahriyarR). - ✅ Add tests for required nonable parameters and body fields. PR
[#4907](https://github.com/tiangolo/fastapi/pull/4907)by[@tiangolo](https://github.com/tiangolo). - 👷 Fix installing Material for MkDocs Insiders in CI. PR
[#4897](https://github.com/tiangolo/fastapi/pull/4897)by[@tiangolo](https://github.com/tiangolo). - 👷 Add pre-commit CI instead of custom GitHub Action. PR
[#4896](https://github.com/tiangolo/fastapi/pull/4896)by[@tiangolo](https://github.com/tiangolo). - 👷 Add pre-commit GitHub Action workflow. PR
[#4895](https://github.com/tiangolo/fastapi/pull/4895)by[@tiangolo](https://github.com/tiangolo). - 📝 Add dark mode auto switch to docs based on OS preference. PR
[#4869](https://github.com/tiangolo/fastapi/pull/4869)by[@ComicShrimp](https://github.com/ComicShrimp). - 🔥 Remove un-used old pending tests, already covered in other places. PR
[#4891](https://github.com/tiangolo/fastapi/pull/4891)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add Python formatting hooks to pre-commit. PR
[#4890](https://github.com/tiangolo/fastapi/pull/4890)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add pre-commit with first config and first formatting pass. PR
[#4888](https://github.com/tiangolo/fastapi/pull/4888)by[@tiangolo](https://github.com/tiangolo). - 👷 Disable CI installing Material for MkDocs in forks. PR
[#4410](https://github.com/tiangolo/fastapi/pull/4410)by[@dolfinus](https://github.com/dolfinus).

## 0.77.1 (2022-05-10)[¶](#0771-2022-05-10)

### Upgrades[¶](#upgrades_32)

### Docs[¶](#docs_83)

- 📝 Add link to german article: REST-API Programmieren mittels Python und dem FastAPI Modul. PR
[#4624](https://github.com/tiangolo/fastapi/pull/4624)by[@fschuermeyer](https://github.com/fschuermeyer). - 📝 Add external link: PyCharm Guide to FastAPI. PR
[#4512](https://github.com/tiangolo/fastapi/pull/4512)by[@mukulmantosh](https://github.com/mukulmantosh). - 📝 Add external link to article: Building an API with FastAPI and Supabase and Deploying on Deta. PR
[#4440](https://github.com/tiangolo/fastapi/pull/4440)by[@aUnicornDev](https://github.com/aUnicornDev). - ✏ Fix small typo in
`docs/en/docs/tutorial/security/first-steps.md`

. PR[#4515](https://github.com/tiangolo/fastapi/pull/4515)by[@KikoIlievski](https://github.com/KikoIlievski).

### Translations[¶](#translations_75)

- 🌐 Add Polish translation for
`docs/pl/docs/tutorial/index.md`

. PR[#4516](https://github.com/tiangolo/fastapi/pull/4516)by[@MKaczkow](https://github.com/MKaczkow). - ✏ Fix typo in deployment. PR
[#4629](https://github.com/tiangolo/fastapi/pull/4629)by[@raisulislam541](https://github.com/raisulislam541). - 🌐 Add Portuguese translation for
`docs/pt/docs/help-fastapi.md`

. PR[#4583](https://github.com/tiangolo/fastapi/pull/4583)by[@mateusjs](https://github.com/mateusjs).

### Internal[¶](#internal_105)

## 0.77.0 (2022-05-10)[¶](#0770-2022-05-10)

### Upgrades[¶](#upgrades_33)

- ⬆ Upgrade Starlette from 0.18.0 to 0.19.0. PR
[#4488](https://github.com/tiangolo/fastapi/pull/4488)by[@Kludex](https://github.com/Kludex).- When creating an explicit
`JSONResponse`

the`content`

argument is now required.

- When creating an explicit

### Docs[¶](#docs_84)

- 📝 Add external link to article: Seamless FastAPI Configuration with ConfZ. PR
[#4414](https://github.com/tiangolo/fastapi/pull/4414)by[@silvanmelchior](https://github.com/silvanmelchior). - 📝 Add external link to article: 5 Advanced Features of FastAPI You Should Try. PR
[#4436](https://github.com/tiangolo/fastapi/pull/4436)by[@kaustubhgupta](https://github.com/kaustubhgupta). - ✏ Reword to improve legibility of docs about
`TestClient`

. PR[#4389](https://github.com/tiangolo/fastapi/pull/4389)by[@rgilton](https://github.com/rgilton). - 📝 Add external link to blog post about Kafka, FastAPI, and Ably. PR
[#4044](https://github.com/tiangolo/fastapi/pull/4044)by[@Ugbot](https://github.com/Ugbot). - ✏ Fix typo in
`docs/en/docs/tutorial/sql-databases.md`

. PR[#4875](https://github.com/tiangolo/fastapi/pull/4875)by[@wpyoga](https://github.com/wpyoga). - ✏ Fix typo in
`docs/en/docs/async.md`

. PR[#4726](https://github.com/tiangolo/fastapi/pull/4726)by[@Prezu](https://github.com/Prezu).

### Translations[¶](#translations_76)

- 🌐 Update source example highlights for
`docs/zh/docs/tutorial/query-params-str-validations.md`

. PR[#4237](https://github.com/tiangolo/fastapi/pull/4237)by[@caimaoy](https://github.com/caimaoy). - 🌐 Remove translation docs references to aiofiles as it's no longer needed since AnyIO. PR
[#3594](https://github.com/tiangolo/fastapi/pull/3594)by[@alonme](https://github.com/alonme). - ✏ 🌐 Fix typo in Portuguese translation for
`docs/pt/docs/tutorial/path-params.md`

. PR[#4722](https://github.com/tiangolo/fastapi/pull/4722)by[@CleoMenezesJr](https://github.com/CleoMenezesJr). - 🌐 Fix live docs server for translations for some languages. PR
[#4729](https://github.com/tiangolo/fastapi/pull/4729)by[@wakabame](https://github.com/wakabame). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/cookie-params.md`

. PR[#4112](https://github.com/tiangolo/fastapi/pull/4112)by[@lbmendes](https://github.com/lbmendes). - 🌐 Fix French translation for
`docs/tutorial/body.md`

. PR[#4332](https://github.com/tiangolo/fastapi/pull/4332)by[@Smlep](https://github.com/Smlep). - 🌐 Add Japanese translation for
`docs/ja/docs/advanced/conditional-openapi.md`

. PR[#2631](https://github.com/tiangolo/fastapi/pull/2631)by[@sh0nk](https://github.com/sh0nk). - 🌐 Fix Japanese translation of
`docs/ja/docs/tutorial/body.md`

. PR[#3062](https://github.com/tiangolo/fastapi/pull/3062)by[@a-takahashi223](https://github.com/a-takahashi223). - 🌐 Add Portuguese translation for
`docs/pt/docs/tutorial/background-tasks.md`

. PR[#2170](https://github.com/tiangolo/fastapi/pull/2170)by[@izaguerreiro](https://github.com/izaguerreiro). - 🌐 Add Portuguese translation for
`docs/deployment/deta.md`

. PR[#4442](https://github.com/tiangolo/fastapi/pull/4442)by[@lsglucas](https://github.com/lsglucas). - 🌐 Add Russian translation for
`docs/async.md`

. PR[#4036](https://github.com/tiangolo/fastapi/pull/4036)by[@Winand](https://github.com/Winand). - 🌐 Add Portuguese translation for
`docs/tutorial/body.md`

. PR[#3960](https://github.com/tiangolo/fastapi/pull/3960)by[@leandrodesouzadev](https://github.com/leandrodesouzadev). - 🌐 Add Portuguese translation of
`tutorial/extra-data-types.md`

. PR[#4077](https://github.com/tiangolo/fastapi/pull/4077)by[@luccasmmg](https://github.com/luccasmmg). - 🌐 Update German translation for
`docs/features.md`

. PR[#3905](https://github.com/tiangolo/fastapi/pull/3905)by[@jomue](https://github.com/jomue).

## 0.76.0 (2022-05-05)[¶](#0760-2022-05-05)

### Upgrades[¶](#upgrades_34)

### Internal[¶](#internal_106)

- 👥 Update FastAPI People. PR
[#4847](https://github.com/tiangolo/fastapi/pull/4847)by[@github-actions[bot]](https://github.com/apps/github-actions). - 🔧 Add Budget Insight sponsor. PR
[#4824](https://github.com/tiangolo/fastapi/pull/4824)by[@tiangolo](https://github.com/tiangolo). - 🍱 Update sponsor, ExoFlare badge. PR
[#4822](https://github.com/tiangolo/fastapi/pull/4822)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update sponsors, enable Dropbase again, update TalkPython link. PR
[#4821](https://github.com/tiangolo/fastapi/pull/4821)by[@tiangolo](https://github.com/tiangolo).

## 0.75.2 (2022-04-17)[¶](#0752-2022-04-17)

This release includes upgrades to third-party packages that handle security issues. Although there's a chance these issues don't affect you in particular, please upgrade as soon as possible.

### Fixes[¶](#fixes_60)

- ✅ Fix new/recent tests with new fixed
`ValidationError`

JSON Schema. PR[#4806](https://github.com/tiangolo/fastapi/pull/4806)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix JSON Schema for
`ValidationError`

at field`loc`

. PR[#3810](https://github.com/tiangolo/fastapi/pull/3810)by[@dconathan](https://github.com/dconathan). - 🐛 Fix support for prefix on APIRouter WebSockets. PR
[#2640](https://github.com/tiangolo/fastapi/pull/2640)by[@Kludex](https://github.com/Kludex).

### Upgrades[¶](#upgrades_35)

- ⬆️ Update ujson ranges for CVE-2021-45958. PR
[#4804](https://github.com/tiangolo/fastapi/pull/4804)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade dependencies upper range for extras "all". PR
[#4803](https://github.com/tiangolo/fastapi/pull/4803)by[@tiangolo](https://github.com/tiangolo). - ⬆ Upgrade Swagger UI - swagger-ui-dist@4. This handles a security issue in Swagger UI itself where it could be possible to inject HTML into Swagger UI. Please upgrade as soon as you can, in particular if you expose your Swagger UI (
`/docs`

) publicly to non-expert users. PR[#4347](https://github.com/tiangolo/fastapi/pull/4347)by[@RAlanWright](https://github.com/RAlanWright).

### Internal[¶](#internal_107)

- 🔧 Update sponsors, add: ExoFlare, Ines Course; remove: Dropbase, Vim.so, Calmcode; update: Striveworks, TalkPython and TestDriven.io. PR
[#4805](https://github.com/tiangolo/fastapi/pull/4805)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade Codecov GitHub Action. PR
[#4801](https://github.com/tiangolo/fastapi/pull/4801)by[@tiangolo](https://github.com/tiangolo).

## 0.75.1 (2022-04-01)[¶](#0751-2022-04-01)

### Translations[¶](#translations_77)

- 🌐 Start Dutch translations. PR
[#4703](https://github.com/tiangolo/fastapi/pull/4703)by[@tiangolo](https://github.com/tiangolo). - 🌐 Start Persian/Farsi translations. PR
[#4243](https://github.com/tiangolo/fastapi/pull/4243)by[@aminalaee](https://github.com/aminalaee). - ✏ Reword sentence about handling errors. PR
[#1993](https://github.com/tiangolo/fastapi/pull/1993)by[@khuhroproeza](https://github.com/khuhroproeza).

### Internal[¶](#internal_108)

- 👥 Update FastAPI People. PR
[#4752](https://github.com/tiangolo/fastapi/pull/4752)by[@github-actions[bot]](https://github.com/apps/github-actions). - ➖ Temporarily remove typer-cli from dependencies and upgrade Black to unblock Pydantic CI. PR
[#4754](https://github.com/tiangolo/fastapi/pull/4754)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add configuration to notify Dutch translations. PR
[#4702](https://github.com/tiangolo/fastapi/pull/4702)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#4699](https://github.com/tiangolo/fastapi/pull/4699)by[@github-actions[bot]](https://github.com/apps/github-actions). - 🐛 Fix FastAPI People generation to include missing file in commit. PR
[#4695](https://github.com/tiangolo/fastapi/pull/4695)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update Classiq sponsor links. PR
[#4688](https://github.com/tiangolo/fastapi/pull/4688)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add Classiq sponsor. PR
[#4671](https://github.com/tiangolo/fastapi/pull/4671)by[@tiangolo](https://github.com/tiangolo). - 📝 Add Jina's QA Bot to the docs to help people that want to ask quick questions. PR
[#4655](https://github.com/tiangolo/fastapi/pull/4655)by[@tiangolo](https://github.com/tiangolo)based on original PR[#4626](https://github.com/tiangolo/fastapi/pull/4626)by[@hanxiao](https://github.com/hanxiao).

## 0.75.0 (2022-03-04)[¶](#0750-2022-03-04)

### Features[¶](#features_39)

- ✨ Add support for custom
`generate_unique_id_function`

and docs for generating clients. New docs:[Advanced - Generate Clients](https://fastapi.tiangolo.com/advanced/generate-clients/). PR[#4650](https://github.com/tiangolo/fastapi/pull/4650)by[@tiangolo](https://github.com/tiangolo).

## 0.74.1 (2022-02-21)[¶](#0741-2022-02-21)

### Features[¶](#features_40)

- ✨ Include route in scope to allow middleware and other tools to extract its information. PR
[#4603](https://github.com/tiangolo/fastapi/pull/4603)by[@tiangolo](https://github.com/tiangolo).

## 0.74.0 (2022-02-17)[¶](#0740-2022-02-17)

### Breaking Changes[¶](#breaking-changes_10)

Dependencies with `yield`

can now catch `HTTPException`

and custom exceptions. For example:

```
async def get_database():
with Session() as session:
try:
yield session
except HTTPException:
session.rollback()
raise
finally:
session.close()
```


After the dependency with `yield`

handles the exception (or not) the exception is raised again. So that any exception handlers can catch it, or ultimately the default internal `ServerErrorMiddleware`

.

If you depended on exceptions not being received by dependencies with `yield`

, and receiving an exception breaks the code after `yield`

, you can use a block with `try`

and `finally`

:

```
async def do_something():
try:
yield something
finally:
some_cleanup()
```


...that way the `finally`

block is run regardless of any exception that might happen.

### Features[¶](#features_41)

- The same PR
[#4575](https://github.com/tiangolo/fastapi/pull/4575)from above also fixes the`contextvars`

context for the code before and after`yield`

. This was the main objective of that PR.

This means that now, if you set a value in a context variable before `yield`

, the value would still be available after `yield`

(as you would intuitively expect). And it also means that you can reset the context variable with a token afterwards.

For example, this works correctly now:

```
from contextvars import ContextVar
from typing import Any, Dict, Optional
legacy_request_state_context_var: ContextVar[Optional[Dict[str, Any]]] = ContextVar(
"legacy_request_state_context_var", default=None
)
async def set_up_request_state_dependency():
request_state = {"user": "deadpond"}
contextvar_token = legacy_request_state_context_var.set(request_state)
yield request_state
legacy_request_state_context_var.reset(contextvar_token)
```


...before this change it would raise an error when resetting the context variable, because the `contextvars`

context was different, because of the way it was implemented.

**Note**: You probably don't need `contextvars`

, and you should probably avoid using them. But they are powerful and useful in some advanced scenarios, for example, migrating from code that used Flask's `g`

semi-global variable.

**Technical Details**: If you want to know more of the technical details you can check out the PR description [#4575](https://github.com/tiangolo/fastapi/pull/4575).

### Internal[¶](#internal_109)

- 🔧 Add Striveworks sponsor. PR
[#4596](https://github.com/tiangolo/fastapi/pull/4596)by[@tiangolo](https://github.com/tiangolo). - 💚 Only build docs on push when on master to avoid duplicate runs from PRs. PR
[#4564](https://github.com/tiangolo/fastapi/pull/4564)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#4502](https://github.com/tiangolo/fastapi/pull/4502)by[@github-actions[bot]](https://github.com/apps/github-actions).

## 0.73.0 (2022-01-23)[¶](#0730-2022-01-23)

### Features[¶](#features_42)

- ✨ Add support for declaring
`UploadFile`

parameters without explicit`File()`

. PR[#4469](https://github.com/tiangolo/fastapi/pull/4469)by[@tiangolo](https://github.com/tiangolo). New docs:[Request Files - File Parameters with UploadFile](https://fastapi.tiangolo.com/tutorial/request-files/#file-parameters-with-uploadfile). - ✨ Add support for tags with Enums. PR
[#4468](https://github.com/tiangolo/fastapi/pull/4468)by[@tiangolo](https://github.com/tiangolo). New docs:[Path Operation Configuration - Tags with Enums](https://fastapi.tiangolo.com/tutorial/path-operation-configuration/#tags-with-enums). - ✨ Allow hiding from OpenAPI (and Swagger UI)
`Query`

,`Cookie`

,`Header`

, and`Path`

parameters. PR[#3144](https://github.com/tiangolo/fastapi/pull/3144)by[@astraldawn](https://github.com/astraldawn). New docs:[Query Parameters and String Validations - Exclude from OpenAPI](https://fastapi.tiangolo.com/tutorial/query-params-str-validations/#exclude-from-openapi).

### Docs[¶](#docs_85)

### Fixes[¶](#fixes_61)

- 🐛 Fix bug preventing to use OpenAPI when using tuples. PR
[#3874](https://github.com/tiangolo/fastapi/pull/3874)by[@victorbenichoux](https://github.com/victorbenichoux). - 🐛 Prefer custom encoder over defaults if specified in
`jsonable_encoder`

. PR[#2061](https://github.com/tiangolo/fastapi/pull/2061)by[@viveksunder](https://github.com/viveksunder).

### Internal[¶](#internal_110)

- 🐛 Fix docs dependencies cache, to get the latest Material for MkDocs. PR
[#4466](https://github.com/tiangolo/fastapi/pull/4466)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add sponsor Dropbase. PR
[#4465](https://github.com/tiangolo/fastapi/pull/4465)by[@tiangolo](https://github.com/tiangolo).

## 0.72.0 (2022-01-16)[¶](#0720-2022-01-16)

### Features[¶](#features_43)

- ✨ Enable configuring Swagger UI parameters. Original PR
[#2568](https://github.com/tiangolo/fastapi/pull/2568)by[@jmriebold](https://github.com/jmriebold). Here are the new docs:[Configuring Swagger UI](https://fastapi.tiangolo.com/advanced/extending-openapi/#configuring-swagger-ui).

### Docs[¶](#docs_86)

### Translations[¶](#translations_78)

- 🌐 Update Chinese translation for
`docs/help-fastapi.md`

. PR[#3847](https://github.com/tiangolo/fastapi/pull/3847)by[@jaystone776](https://github.com/jaystone776). - 🌐 Fix Korean translation for
`docs/ko/docs/index.md`

. PR[#4195](https://github.com/tiangolo/fastapi/pull/4195)by[@kty4119](https://github.com/kty4119). - 🌐 Add Polish translation for
`docs/pl/docs/index.md`

. PR[#4245](https://github.com/tiangolo/fastapi/pull/4245)by[@MicroPanda123](https://github.com/MicroPanda123). - 🌐 Add Chinese translation for
`docs\tutorial\path-operation-configuration.md`

. PR[#3312](https://github.com/tiangolo/fastapi/pull/3312)by[@jaystone776](https://github.com/jaystone776).

### Internal[¶](#internal_111)

## 0.71.0 (2022-01-07)[¶](#0710-2022-01-07)

### Features[¶](#features_44)

- ✨ Add docs and tests for Python 3.9 and Python 3.10. PR
[#3712](https://github.com/tiangolo/fastapi/pull/3712)by[@tiangolo](https://github.com/tiangolo).- You can start with
[Python Types Intro](https://fastapi.tiangolo.com/python-types/), it explains what changes between different Python versions, in Python 3.9 and in Python 3.10. - All the FastAPI docs are updated. Each code example in the docs that could use different syntax in Python 3.9 or Python 3.10 now has all the alternatives in tabs.

- You can start with
- ⬆️ Upgrade Starlette to 0.17.1. PR
[#4145](https://github.com/tiangolo/fastapi/pull/4145)by[@simondale00](https://github.com/simondale00).

### Internal[¶](#internal_112)

- 👥 Update FastAPI People. PR
[#4354](https://github.com/tiangolo/fastapi/pull/4354)by[@github-actions[bot]](https://github.com/apps/github-actions). - 🔧 Add FastAPI Trove Classifier for PyPI as now there's one 🤷😁. PR
[#4386](https://github.com/tiangolo/fastapi/pull/4386)by[@tiangolo](https://github.com/tiangolo). - ⬆ Upgrade MkDocs Material and configs. PR
[#4385](https://github.com/tiangolo/fastapi/pull/4385)by[@tiangolo](https://github.com/tiangolo).

## 0.70.1 (2021-12-12)[¶](#0701-2021-12-12)

There's nothing interesting in this particular FastAPI release. It is mainly to enable/unblock the release of the next version of Pydantic that comes packed with features and improvements. 🤩

### Fixes[¶](#fixes_62)

- 🐛 Fix JSON Schema for dataclasses, supporting the fixes in Pydantic 1.9. PR
[#4272](https://github.com/tiangolo/fastapi/pull/4272)by[@PrettyWood](https://github.com/PrettyWood).

### Translations[¶](#translations_79)

- 🌐 Add Korean translation for
`docs/tutorial/request-forms-and-files.md`

. PR[#3744](https://github.com/tiangolo/fastapi/pull/3744)by[@NinaHwang](https://github.com/NinaHwang). - 🌐 Add Korean translation for
`docs/tutorial/request-files.md`

. PR[#3743](https://github.com/tiangolo/fastapi/pull/3743)by[@NinaHwang](https://github.com/NinaHwang). - 🌐 Add portuguese translation for
`docs/tutorial/query-params-str-validations.md`

. PR[#3965](https://github.com/tiangolo/fastapi/pull/3965)by[@leandrodesouzadev](https://github.com/leandrodesouzadev). - 🌐 Add Korean translation for
`docs/tutorial/response-status-code.md`

. PR[#3742](https://github.com/tiangolo/fastapi/pull/3742)by[@NinaHwang](https://github.com/NinaHwang). - 🌐 Add Korean translation for Tutorial - JSON Compatible Encoder. PR
[#3152](https://github.com/tiangolo/fastapi/pull/3152)by[@NEONKID](https://github.com/NEONKID). - 🌐 Add Korean translation for Tutorial - Path Parameters and Numeric Validations. PR
[#2432](https://github.com/tiangolo/fastapi/pull/2432)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Korean translation for
`docs/ko/docs/deployment/versions.md`

. PR[#4121](https://github.com/tiangolo/fastapi/pull/4121)by[@DevDae](https://github.com/DevDae). - 🌐 Fix Korean translation for
`docs/ko/docs/tutorial/index.md`

. PR[#4193](https://github.com/tiangolo/fastapi/pull/4193)by[@kimjaeyoonn](https://github.com/kimjaeyoonn). - 🔧 Add CryptAPI sponsor. PR
[#4264](https://github.com/tiangolo/fastapi/pull/4264)by[@tiangolo](https://github.com/tiangolo). - 📝 Update
`docs/tutorial/dependencies/classes-as-dependencies`

: Add type of query parameters in a description of`Classes as dependencies`

. PR[#4015](https://github.com/tiangolo/fastapi/pull/4015)by[@0417taehyun](https://github.com/0417taehyun). - 🌐 Add French translation for Tutorial - First steps. PR
[#3455](https://github.com/tiangolo/fastapi/pull/3455)by[@Smlep](https://github.com/Smlep). - 🌐 Add French translation for
`docs/tutorial/path-params.md`

. PR[#3548](https://github.com/tiangolo/fastapi/pull/3548)by[@Smlep](https://github.com/Smlep). - 🌐 Add French translation for
`docs/tutorial/query-params.md`

. PR[#3556](https://github.com/tiangolo/fastapi/pull/3556)by[@Smlep](https://github.com/Smlep). - 🌐 Add Turkish translation for
`docs/python-types.md`

. PR[#3926](https://github.com/tiangolo/fastapi/pull/3926)by[@BilalAlpaslan](https://github.com/BilalAlpaslan).

### Internal[¶](#internal_113)

- 👥 Update FastAPI People. PR
[#4274](https://github.com/tiangolo/fastapi/pull/4274)by[@github-actions[bot]](https://github.com/apps/github-actions).

## 0.70.0 (2021-10-07)[¶](#0700-2021-10-07)

This release just upgrades Starlette to the latest version, `0.16.0`

, which includes several bug fixes and some small breaking changes.

These last **three consecutive releases** are independent so that you can **migrate gradually**:

- First to FastAPI
`0.68.2`

, with no breaking changes, but upgrading all the sub-dependencies. - Next to FastAPI
`0.69.0`

, which upgrades Starlette to`0.15.0`

, with AnyIO support, and a higher chance of having breaking changes in your code. - Finally to FastAPI
`0.70.0`

, just upgrading Starlette to the latest version`0.16.0`

with additional bug fixes.

This way, in case there was a breaking change for your code in one of the releases, you can still benefit from the previous upgrades. ✨

### Breaking Changes - Upgrade[¶](#breaking-changes-upgrade)

Also upgrades the ranges of optional dependencies:

`"jinja2 >=2.11.2,<4.0.0"`

`"itsdangerous >=1.1.0,<3.0.0"`


## 0.69.0 (2021-10-07)[¶](#0690-2021-10-07)

### Breaking Changes - Upgrade[¶](#breaking-changes-upgrade_1)

This release adds support for [Trio](https://trio.readthedocs.io/en/stable/). ✨

It upgrades the version of Starlette to `0.15.0`

, now based on [AnyIO](https://anyio.readthedocs.io/en/stable/), and the internal async components in **FastAPI** are now based on AnyIO as well, making it compatible with both **asyncio** and **Trio**.

You can read the docs about running [FastAPI with Trio using Hypercorn](https://fastapi.tiangolo.com/deployment/manually/#hypercorn-with-trio).

This release also removes `graphene`

as an optional dependency for GraphQL. If you need to work with GraphQL, the recommended library now is [Strawberry](https://strawberry.rocks/). You can read the new [FastAPI with GraphQL docs](https://fastapi.tiangolo.com/advanced/graphql/).

### Features[¶](#features_45)

- ✨ Add support for Trio via AnyIO, upgrading Starlette to
`0.15.0`

. PR[#3372](https://github.com/tiangolo/fastapi/pull/3372)by[@graingert](https://github.com/graingert). - ➖ Remove
`graphene`

as an optional dependency. PR[#4007](https://github.com/tiangolo/fastapi/pull/4007)by[@tiangolo](https://github.com/tiangolo).

### Docs[¶](#docs_87)

- 📝 Add docs for using Trio with Hypercorn. PR
[#4014](https://github.com/tiangolo/fastapi/pull/4014)by[@tiangolo](https://github.com/tiangolo). - ✏ Fix typos in Deployment Guide. PR
[#3975](https://github.com/tiangolo/fastapi/pull/3975)by[@ghandic](https://github.com/ghandic). - 📝 Update docs with pip install calls when using extras with brackets, use quotes for compatibility with Zsh. PR
[#3131](https://github.com/tiangolo/fastapi/pull/3131)by[@tomwei7](https://github.com/tomwei7). - 📝 Add external link to article: Deploying ML Models as API Using FastAPI and Heroku. PR
[#3904](https://github.com/tiangolo/fastapi/pull/3904)by[@kaustubhgupta](https://github.com/kaustubhgupta). - ✏ Fix typo in file paths in
`docs/en/docs/contributing.md`

. PR[#3752](https://github.com/tiangolo/fastapi/pull/3752)by[@NinaHwang](https://github.com/NinaHwang). - ✏ Fix a typo in
`docs/en/docs/advanced/path-operation-advanced-configuration.md`

and`docs/en/docs/release-notes.md`

. PR[#3750](https://github.com/tiangolo/fastapi/pull/3750)by[@saintmalik](https://github.com/saintmalik). - ✏️ Add a missing comma in the security tutorial. PR
[#3564](https://github.com/tiangolo/fastapi/pull/3564)by[@jalvaradosegura](https://github.com/jalvaradosegura). - ✏ Fix typo in
`docs/en/docs/help-fastapi.md`

. PR[#3760](https://github.com/tiangolo/fastapi/pull/3760)by[@jaystone776](https://github.com/jaystone776). - ✏ Fix typo about file path in
`docs/en/docs/tutorial/bigger-applications.md`

. PR[#3285](https://github.com/tiangolo/fastapi/pull/3285)by[@HolyDorus](https://github.com/HolyDorus). - ✏ Re-word to clarify test client in
`docs/en/docs/tutorial/testing.md`

. PR[#3382](https://github.com/tiangolo/fastapi/pull/3382)by[@Bharat123rox](https://github.com/Bharat123rox). - 📝 Fix incorrect highlighted code. PR
[#3325](https://github.com/tiangolo/fastapi/pull/3325)by[@paxcodes](https://github.com/paxcodes). - 📝 Add external link to article: How-to deploy FastAPI app to Heroku. PR
[#3241](https://github.com/tiangolo/fastapi/pull/3241)by[@Jarmos-san](https://github.com/Jarmos-san). - ✏ Fix typo (mistranslation) in
`docs/en/docs/advanced/templates.md`

. PR[#3211](https://github.com/tiangolo/fastapi/pull/3211)by[@oerpli](https://github.com/oerpli). - 📝 Remove note about (now supported) feature from Swagger UI in
`docs/en/docs/tutorial/request-files.md`

. PR[#2803](https://github.com/tiangolo/fastapi/pull/2803)by[@gsganden](https://github.com/gsganden). - ✏ Fix typo re-word in
`docs/tutorial/handling-errors.md`

. PR[#2700](https://github.com/tiangolo/fastapi/pull/2700)by[@graue70](https://github.com/graue70).

### Translations[¶](#translations_80)

- 🌐 Initialize Azerbaijani translations. PR
[#3941](https://github.com/tiangolo/fastapi/pull/3941)by[@madatbay](https://github.com/madatbay). - 🌐 Add Turkish translation for
`docs/fastapi-people.md`

. PR[#3848](https://github.com/tiangolo/fastapi/pull/3848)by[@BilalAlpaslan](https://github.com/BilalAlpaslan).

### Internal[¶](#internal_114)

- 📝 Add supported Python versions badge. PR
[#2794](https://github.com/tiangolo/fastapi/pull/2794)by[@hramezani](https://github.com/hramezani). - ✏ Fix link in Japanese docs for
`docs/ja/docs/deployment/docker.md`

. PR[#3245](https://github.com/tiangolo/fastapi/pull/3245)by[@utamori](https://github.com/utamori). - 🔧 Correct DeprecationWarning config and comment in pytest settings. PR
[#4008](https://github.com/tiangolo/fastapi/pull/4008)by[@graingert](https://github.com/graingert). - 🔧 Swap light/dark theme button icon. PR
[#3246](https://github.com/tiangolo/fastapi/pull/3246)by[@eddsalkield](https://github.com/eddsalkield). - 🔧 Lint only in Python 3.7 and above. PR
[#4006](https://github.com/tiangolo/fastapi/pull/4006)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add GitHub Action notify-translations config for Azerbaijani. PR
[#3995](https://github.com/tiangolo/fastapi/pull/3995)by[@tiangolo](https://github.com/tiangolo).

## 0.68.2 (2021-10-05)[¶](#0682-2021-10-05)

This release has **no breaking changes**. 🎉

It upgrades the version ranges of sub-dependencies to allow applications using FastAPI to easily upgrade them.

Soon there will be a new FastAPI release upgrading Starlette to take advantage of recent improvements, but as that has a higher chance of having breaking changes, it will be in a separate release.

### Features[¶](#features_46)

- ⬆Increase supported version of aiofiles to suppress warnings. PR
[#2899](https://github.com/tiangolo/fastapi/pull/2899)by[@SnkSynthesis](https://github.com/SnkSynthesis). - ➖ Do not require backports in Python >= 3.7. PR
[#1880](https://github.com/tiangolo/fastapi/pull/1880)by[@FFY00](https://github.com/FFY00). - ⬆ Upgrade required Python version to >= 3.6.1, needed by typing.Deque, used by Pydantic. PR
[#2733](https://github.com/tiangolo/fastapi/pull/2733)by[@hukkin](https://github.com/hukkin). - ⬆️ Bump Uvicorn max range to 0.15.0. PR
[#3345](https://github.com/tiangolo/fastapi/pull/3345)by[@Kludex](https://github.com/Kludex).

### Docs[¶](#docs_88)

- 📝 Update GraphQL docs, recommend Strawberry. PR
[#3981](https://github.com/tiangolo/fastapi/pull/3981)by[@tiangolo](https://github.com/tiangolo). - 📝 Re-write and extend Deployment guide: Concepts, Uvicorn, Gunicorn, Docker, Containers, Kubernetes. PR
[#3974](https://github.com/tiangolo/fastapi/pull/3974)by[@tiangolo](https://github.com/tiangolo). - 📝 Upgrade HTTPS guide with more explanations and diagrams. PR
[#3950](https://github.com/tiangolo/fastapi/pull/3950)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_81)

- 🌐 Add Turkish translation for
`docs/features.md`

. PR[#1950](https://github.com/tiangolo/fastapi/pull/1950)by[@ycd](https://github.com/ycd). - 🌐 Add Turkish translation for
`docs/benchmarks.md`

. PR[#2729](https://github.com/tiangolo/fastapi/pull/2729)by[@Telomeraz](https://github.com/Telomeraz). - 🌐 Add Turkish translation for
`docs/index.md`

. PR[#1908](https://github.com/tiangolo/fastapi/pull/1908)by[@ycd](https://github.com/ycd). - 🌐 Add French translation for
`docs/tutorial/body.md`

. PR[#3671](https://github.com/tiangolo/fastapi/pull/3671)by[@Smlep](https://github.com/Smlep). - 🌐 Add French translation for
`deployment/docker.md`

. PR[#3694](https://github.com/tiangolo/fastapi/pull/3694)by[@rjNemo](https://github.com/rjNemo). - 🌐 Add Portuguese translation for
`docs/tutorial/path-params.md`

. PR[#3664](https://github.com/tiangolo/fastapi/pull/3664)by[@FelipeSilva93](https://github.com/FelipeSilva93). - 🌐 Add Portuguese translation for
`docs/deployment/https.md`

. PR[#3754](https://github.com/tiangolo/fastapi/pull/3754)by[@lsglucas](https://github.com/lsglucas). - 🌐 Add German translation for
`docs/features.md`

. PR[#3699](https://github.com/tiangolo/fastapi/pull/3699)by[@mawassk](https://github.com/mawassk).

### Internal[¶](#internal_115)

- ✨ Update GitHub Action: notify-translations, to avoid a race conditions. PR
[#3989](https://github.com/tiangolo/fastapi/pull/3989)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade development
`autoflake`

, supporting multi-line imports. PR[#3988](https://github.com/tiangolo/fastapi/pull/3988)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Increase dependency ranges for tests and docs: pytest-cov, pytest-asyncio, black, httpx, sqlalchemy, databases, mkdocs-markdownextradata-plugin. PR
[#3987](https://github.com/tiangolo/fastapi/pull/3987)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#3986](https://github.com/tiangolo/fastapi/pull/3986)by[@github-actions[bot]](https://github.com/apps/github-actions). - 💚 Fix badges in README and main page. PR
[#3979](https://github.com/tiangolo/fastapi/pull/3979)by[@ghandic](https://github.com/ghandic). - ⬆ Upgrade internal testing dependencies: mypy to version 0.910, add newly needed type packages. PR
[#3350](https://github.com/tiangolo/fastapi/pull/3350)by[@ArcLightSlavik](https://github.com/ArcLightSlavik). - ✨ Add Deepset Sponsorship. PR
[#3976](https://github.com/tiangolo/fastapi/pull/3976)by[@tiangolo](https://github.com/tiangolo). - 🎨 Tweak CSS styles for shell animations. PR
[#3888](https://github.com/tiangolo/fastapi/pull/3888)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add new Sponsor Calmcode.io. PR
[#3777](https://github.com/tiangolo/fastapi/pull/3777)by[@tiangolo](https://github.com/tiangolo).

## 0.68.1 (2021-08-24)[¶](#0681-2021-08-24)

- ✨ Add support for
`read_with_orm_mode`

, to support[SQLModel](https://sqlmodel.tiangolo.com/)relationship attributes. PR[#3757](https://github.com/tiangolo/fastapi/pull/3757)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_82)

- 🌐 Add Portuguese translation of
`docs/fastapi-people.md`

. PR[#3461](https://github.com/tiangolo/fastapi/pull/3461)by[@ComicShrimp](https://github.com/ComicShrimp). - 🌐 Add Chinese translation for
`docs/tutorial/dependencies/dependencies-in-path-operation-decorators.md`

. PR[#3492](https://github.com/tiangolo/fastapi/pull/3492)by[@jaystone776](https://github.com/jaystone776). - 🔧 Add new Translation tracking issues for German and Indonesian. PR
[#3718](https://github.com/tiangolo/fastapi/pull/3718)by[@tiangolo](https://github.com/tiangolo). - 🌐 Add Chinese translation for
`docs/tutorial/dependencies/sub-dependencies.md`

. PR[#3491](https://github.com/tiangolo/fastapi/pull/3491)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Portuguese translation for
`docs/advanced/index.md`

. PR[#3460](https://github.com/tiangolo/fastapi/pull/3460)by[@ComicShrimp](https://github.com/ComicShrimp). - 🌐 Portuguese translation of
`docs/async.md`

. PR[#1330](https://github.com/tiangolo/fastapi/pull/1330)by[@Serrones](https://github.com/Serrones). - 🌐 Add French translation for
`docs/async.md`

. PR[#3416](https://github.com/tiangolo/fastapi/pull/3416)by[@Smlep](https://github.com/Smlep).

### Internal[¶](#internal_116)

- ✨ Add GitHub Action: Notify Translations. PR
[#3715](https://github.com/tiangolo/fastapi/pull/3715)by[@tiangolo](https://github.com/tiangolo). - ✨ Update computation of FastAPI People and sponsors. PR
[#3714](https://github.com/tiangolo/fastapi/pull/3714)by[@tiangolo](https://github.com/tiangolo). - ✨ Enable recent Material for MkDocs Insiders features. PR
[#3710](https://github.com/tiangolo/fastapi/pull/3710)by[@tiangolo](https://github.com/tiangolo). - 🔥 Remove/clean extra imports from examples in docs for features. PR
[#3709](https://github.com/tiangolo/fastapi/pull/3709)by[@tiangolo](https://github.com/tiangolo). - ➕ Update docs library to include sources in Markdown. PR
[#3648](https://github.com/tiangolo/fastapi/pull/3648)by[@tiangolo](https://github.com/tiangolo). - ⬆ Enable tests for Python 3.9. PR
[#2298](https://github.com/tiangolo/fastapi/pull/2298)by[@Kludex](https://github.com/Kludex). - 👥 Update FastAPI People. PR
[#3642](https://github.com/tiangolo/fastapi/pull/3642)by[@github-actions[bot]](https://github.com/apps/github-actions).

## 0.68.0 (2021-07-29)[¶](#0680-2021-07-29)

### Features[¶](#features_47)

- ✨ Add support for extensions and updates to the OpenAPI schema in each
*path operation*. New docs:[FastAPI Path Operation Advanced Configuration - OpenAPI Extra](https://fastapi.tiangolo.com/advanced/path-operation-advanced-configuration/#openapi-extra). Initial PR[#1922](https://github.com/tiangolo/fastapi/pull/1922)by[@edouardlp](https://github.com/edouardlp). - ✨ Add additional OpenAPI metadata parameters to
`FastAPI`

class, shown on the automatic API docs UI. New docs:[Metadata and Docs URLs](https://fastapi.tiangolo.com/tutorial/metadata/). Initial PR[#1812](https://github.com/tiangolo/fastapi/pull/1812)by[@dkreeft](https://github.com/dkreeft). - ✨ Add
`description`

parameter to all the security scheme classes, e.g.`APIKeyQuery(name="key", description="A very cool API key")`

. PR[#1757](https://github.com/tiangolo/fastapi/pull/1757)by[@hylkepostma](https://github.com/hylkepostma). - ✨ Update OpenAPI models, supporting recursive models and extensions. PR
[#3628](https://github.com/tiangolo/fastapi/pull/3628)by[@tiangolo](https://github.com/tiangolo). - ✨ Import and re-export data structures from Starlette, used by Request properties, on
`fastapi.datastructures`

. Initial PR[#1872](https://github.com/tiangolo/fastapi/pull/1872)by[@jamescurtin](https://github.com/jamescurtin).

### Docs[¶](#docs_89)

- 📝 Update docs about async and response-model with more gender neutral language. PR
[#1869](https://github.com/tiangolo/fastapi/pull/1869)by[@Edward-Knight](https://github.com/Edward-Knight).

### Translations[¶](#translations_83)

- 🌐 Add Russian translation for
`docs/python-types.md`

. PR[#3039](https://github.com/tiangolo/fastapi/pull/3039)by[@dukkee](https://github.com/dukkee). - 🌐 Add Chinese translation for
`docs/tutorial/dependencies/index.md`

. PR[#3489](https://github.com/tiangolo/fastapi/pull/3489)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Russian translation for
`docs/external-links.md`

. PR[#3036](https://github.com/tiangolo/fastapi/pull/3036)by[@dukkee](https://github.com/dukkee). - 🌐 Add Chinese translation for
`docs/tutorial/dependencies/global-dependencies.md`

. PR[#3493](https://github.com/tiangolo/fastapi/pull/3493)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Portuguese translation for
`docs/deployment/versions.md`

. PR[#3618](https://github.com/tiangolo/fastapi/pull/3618)by[@lsglucas](https://github.com/lsglucas). - 🌐 Add Japanese translation for
`docs/tutorial/security/oauth2-jwt.md`

. PR[#3526](https://github.com/tiangolo/fastapi/pull/3526)by[@sattosan](https://github.com/sattosan).

### Internal[¶](#internal_117)

- ✅ Add the
`docs_src`

directory to test coverage and update tests. Initial PR[#1904](https://github.com/tiangolo/fastapi/pull/1904)by[@Kludex](https://github.com/Kludex). - 🔧 Add new GitHub templates with forms for new issues. PR
[#3612](https://github.com/tiangolo/fastapi/pull/3612)by[@tiangolo](https://github.com/tiangolo). - 📝 Add official FastAPI Twitter to docs:
[@fastapi](https://x.com/fastapi). PR[#3578](https://github.com/tiangolo/fastapi/pull/3578)by[@tiangolo](https://github.com/tiangolo).

## 0.67.0 (2021-07-21)[¶](#0670-2021-07-21)

### Features[¶](#features_48)

- ✨ Add support for
`dataclasses`

in request bodies and`response_model`

. New documentation:[Advanced User Guide - Using Dataclasses](https://fastapi.tiangolo.com/advanced/dataclasses/). PR[#3577](https://github.com/tiangolo/fastapi/pull/3577)by[@tiangolo](https://github.com/tiangolo). - ✨ Support
`dataclasses`

in responses. PR[#3576](https://github.com/tiangolo/fastapi/pull/3576)by[@tiangolo](https://github.com/tiangolo), continuation from initial PR[#2722](https://github.com/tiangolo/fastapi/pull/2722)by[@amitlissack](https://github.com/amitlissack).

### Docs[¶](#docs_90)

- 📝 Add external link: How to Create A Fake Certificate Authority And Generate TLS Certs for FastAPI. PR
[#2839](https://github.com/tiangolo/fastapi/pull/2839)by[@aitoehigie](https://github.com/aitoehigie). - ✏ Fix code highlighted line in:
`body-nested-models.md`

. PR[#3463](https://github.com/tiangolo/fastapi/pull/3463)by[@jaystone776](https://github.com/jaystone776). - ✏ Fix typo in
`body-nested-models.md`

. PR[#3462](https://github.com/tiangolo/fastapi/pull/3462)by[@jaystone776](https://github.com/jaystone776). - ✏ Fix typo "might me" -> "might be" in
`docs/en/docs/tutorial/schema-extra-example.md`

. PR[#3362](https://github.com/tiangolo/fastapi/pull/3362)by[@dbrakman](https://github.com/dbrakman). - 📝 Add external link: Building simple E-Commerce with NuxtJS and FastAPI. PR
[#3271](https://github.com/tiangolo/fastapi/pull/3271)by[@ShahriyarR](https://github.com/ShahriyarR). - 📝 Add external link: Serve a machine learning model using Sklearn, FastAPI and Docker. PR
[#2974](https://github.com/tiangolo/fastapi/pull/2974)by[@rodrigo-arenas](https://github.com/rodrigo-arenas). - ✏️ Fix typo on docstring in datastructures file. PR
[#2887](https://github.com/tiangolo/fastapi/pull/2887)by[@Kludex](https://github.com/Kludex). - 📝 Add External Link: Deploy FastAPI on Ubuntu and Serve using Caddy 2 Web Server. PR
[#3572](https://github.com/tiangolo/fastapi/pull/3572)by[@tiangolo](https://github.com/tiangolo). - 📝 Add External Link, replaces #1898. PR
[#3571](https://github.com/tiangolo/fastapi/pull/3571)by[@tiangolo](https://github.com/tiangolo).

### Internal[¶](#internal_118)

- 🎨 Improve style for sponsors, add radius border. PR
[#2388](https://github.com/tiangolo/fastapi/pull/2388)by[@Kludex](https://github.com/Kludex). - 👷 Update GitHub Action latest-changes. PR
[#3574](https://github.com/tiangolo/fastapi/pull/3574)by[@tiangolo](https://github.com/tiangolo). - 👷 Update GitHub Action latest-changes. PR
[#3573](https://github.com/tiangolo/fastapi/pull/3573)by[@tiangolo](https://github.com/tiangolo). - 👷 Rename and clarify CI workflow job names. PR
[#3570](https://github.com/tiangolo/fastapi/pull/3570)by[@tiangolo](https://github.com/tiangolo). - 👷 Update GitHub Action latest-changes, strike 2 ⚾. PR
[#3575](https://github.com/tiangolo/fastapi/pull/3575)by[@tiangolo](https://github.com/tiangolo). - 🔧 Sort external links in docs to have the most recent at the top. PR
[#3568](https://github.com/tiangolo/fastapi/pull/3568)by[@tiangolo](https://github.com/tiangolo).

## 0.66.1 (2021-07-19)[¶](#0661-2021-07-19)

### Translations[¶](#translations_84)

- 🌐 Add basic setup for German translations. PR
[#3522](https://github.com/tiangolo/fastapi/pull/3522)by[@0x4Dark](https://github.com/0x4Dark). - 🌐 Add Portuguese translation for
`docs/tutorial/security/index.md`

. PR[#3507](https://github.com/tiangolo/fastapi/pull/3507)by[@oandersonmagalhaes](https://github.com/oandersonmagalhaes). - 🌐 Add Portuguese translation for
`docs/deployment/index.md`

. PR[#3337](https://github.com/tiangolo/fastapi/pull/3337)by[@lsglucas](https://github.com/lsglucas).

### Internal[¶](#internal_119)

- 🔧 Configure strict pytest options and update/refactor tests. Upgrade pytest to
`>=6.2.4,<7.0.0`

and pytest-cov to`>=2.12.0,<3.0.0`

. Initial PR[#2790](https://github.com/tiangolo/fastapi/pull/2790)by[@graingert](https://github.com/graingert). - ⬆️ Upgrade python-jose dependency to
`>=3.3.0,<4.0.0`

for tests. PR[#3468](https://github.com/tiangolo/fastapi/pull/3468)by[@tiangolo](https://github.com/tiangolo).

## 0.66.0 (2021-07-04)[¶](#0660-2021-07-04)

### Features[¶](#features_49)

- ✨ Allow setting the
`response_class`

to`RedirectResponse`

or`FileResponse`

and returning the URL from the function. New and updated docs are in the tutorial section**Custom Response - HTML, Stream, File, others**, in[RedirectResponse](https://fastapi.tiangolo.com/advanced/custom-response/#redirectresponse)and in[FileResponse](https://fastapi.tiangolo.com/advanced/custom-response/#fileresponse). PR[#3457](https://github.com/tiangolo/fastapi/pull/3457)by[@tiangolo](https://github.com/tiangolo).

### Fixes[¶](#fixes_63)

- 🐛 Fix include/exclude for dicts in
`jsonable_encoder`

. PR[#2016](https://github.com/tiangolo/fastapi/pull/2016)by[@Rubikoid](https://github.com/Rubikoid). - 🐛 Support custom OpenAPI / JSON Schema fields in the generated output OpenAPI. PR
[#1429](https://github.com/tiangolo/fastapi/pull/1429)by[@jmagnusson](https://github.com/jmagnusson).

### Translations[¶](#translations_85)

- 🌐 Add Spanish translation for
`tutorial/query-params.md`

. PR[#2243](https://github.com/tiangolo/fastapi/pull/2243)by[@mariacamilagl](https://github.com/mariacamilagl). - 🌐 Add Spanish translation for
`advanced/response-directly.md`

. PR[#1253](https://github.com/tiangolo/fastapi/pull/1253)by[@jfunez](https://github.com/jfunez). - 🌐 Add Spanish translation for
`advanced/additional-status-codes.md`

. PR[#1252](https://github.com/tiangolo/fastapi/pull/1252)by[@jfunez](https://github.com/jfunez). - 🌐 Add Spanish translation for
`advanced/path-operation-advanced-configuration.md`

. PR[#1251](https://github.com/tiangolo/fastapi/pull/1251)by[@jfunez](https://github.com/jfunez).

## 0.65.3 (2021-07-03)[¶](#0653-2021-07-03)

### Fixes[¶](#fixes_64)

- ♻ Assume request bodies contain JSON when no Content-Type header is provided. This fixes a breaking change introduced by
[0.65.2 with PR #2118](https://github.com/tiangolo/fastapi/pull/2118). It should allow upgrading FastAPI applications with clients that send JSON data without a`Content-Type`

header. And there's still protection against CSRFs. PR[#3456](https://github.com/tiangolo/fastapi/pull/3456)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_86)

- 🌐 Initialize Indonesian translations. PR
[#3014](https://github.com/tiangolo/fastapi/pull/3014)by[@pace-noge](https://github.com/pace-noge). - 🌐 Add Spanish translation of Tutorial - Path Parameters. PR
[#2219](https://github.com/tiangolo/fastapi/pull/2219)by[@mariacamilagl](https://github.com/mariacamilagl). - 🌐 Add Spanish translation of Tutorial - First Steps. PR
[#2208](https://github.com/tiangolo/fastapi/pull/2208)by[@mariacamilagl](https://github.com/mariacamilagl). - 🌐 Portuguese translation of Tutorial - Body - Fields. PR
[#3420](https://github.com/tiangolo/fastapi/pull/3420)by[@ComicShrimp](https://github.com/ComicShrimp). - 🌐 Add Chinese translation for Tutorial - Request - Forms - and - Files. PR
[#3249](https://github.com/tiangolo/fastapi/pull/3249)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for Tutorial - Handling - Errors. PR
[#3299](https://github.com/tiangolo/fastapi/pull/3299)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for Tutorial - Form - Data. PR
[#3248](https://github.com/tiangolo/fastapi/pull/3248)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for Tutorial - Body - Updates. PR
[#3237](https://github.com/tiangolo/fastapi/pull/3237)by[@jaystone776](https://github.com/jaystone776). - 🌐 Add Chinese translation for FastAPI People. PR
[#3112](https://github.com/tiangolo/fastapi/pull/3112)by[@hareru](https://github.com/hareru). - 🌐 Add French translation for Project Generation. PR
[#3197](https://github.com/tiangolo/fastapi/pull/3197)by[@Smlep](https://github.com/Smlep). - 🌐 Add French translation for Python Types Intro. PR
[#3185](https://github.com/tiangolo/fastapi/pull/3185)by[@Smlep](https://github.com/Smlep). - 🌐 Add French translation for External Links. PR
[#3103](https://github.com/tiangolo/fastapi/pull/3103)by[@Smlep](https://github.com/Smlep). - 🌐 Add French translation for Alternatives, Inspiration and Comparisons. PR
[#3020](https://github.com/tiangolo/fastapi/pull/3020)by[@rjNemo](https://github.com/rjNemo). - 🌐 Fix Chinese translation code snippet mismatch in Tutorial - Python Types Intro. PR
[#2573](https://github.com/tiangolo/fastapi/pull/2573)by[@BoYanZh](https://github.com/BoYanZh). - 🌐 Add Portuguese translation for Development Contributing. PR
[#1364](https://github.com/tiangolo/fastapi/pull/1364)by[@Serrones](https://github.com/Serrones). - 🌐 Add Chinese translation for Tutorial - Request - Files. PR
[#3244](https://github.com/tiangolo/fastapi/pull/3244)by[@jaystone776](https://github.com/jaystone776).

### Internal[¶](#internal_120)

- 👥 Update FastAPI People. PR
[#3450](https://github.com/tiangolo/fastapi/pull/3450)by[@github-actions[bot]](https://github.com/apps/github-actions). - 👥 Update FastAPI People. PR
[#3319](https://github.com/tiangolo/fastapi/pull/3319)by[@github-actions[bot]](https://github.com/apps/github-actions). - ⬆ Upgrade docs development dependency on
`typer-cli`

to >=0.0.12 to fix conflicts. PR[#3429](https://github.com/tiangolo/fastapi/pull/3429)by[@tiangolo](https://github.com/tiangolo).

## 0.65.2 (2021-06-09)[¶](#0652-2021-06-09)

### Security fixes[¶](#security-fixes_1)

- 🔒 Check Content-Type request header before assuming JSON. Initial PR
[#2118](https://github.com/tiangolo/fastapi/pull/2118)by[@patrickkwang](https://github.com/patrickkwang).

This change fixes a [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) security vulnerability when using cookies for authentication in path operations with JSON payloads sent by browsers.

In versions lower than `0.65.2`

, FastAPI would try to read the request payload as JSON even if the `content-type`

header sent was not set to `application/json`

or a compatible JSON media type (e.g. `application/geo+json`

).

So, a request with a content type of `text/plain`

containing JSON data would be accepted and the JSON data would be extracted.

But requests with content type `text/plain`

are exempt from [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) preflights, for being considered [Simple requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests). So, the browser would execute them right away including cookies, and the text content could be a JSON string that would be parsed and accepted by the FastAPI application.

See [CVE-2021-32677](https://github.com/tiangolo/fastapi/security/advisories/GHSA-8h2j-cgx8-6xv7) for more details.

Thanks to [Dima Boger](https://x.com/b0g3r) for the security report! 🙇🔒

### Internal[¶](#internal_121)

- 🔧 Update sponsors badge, course bundle. PR
[#3340](https://github.com/tiangolo/fastapi/pull/3340)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add new gold sponsor Jina 🎉. PR
[#3291](https://github.com/tiangolo/fastapi/pull/3291)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add new banner sponsor badge for FastAPI courses bundle. PR
[#3288](https://github.com/tiangolo/fastapi/pull/3288)by[@tiangolo](https://github.com/tiangolo). - 👷 Upgrade Issue Manager GitHub Action. PR
[#3236](https://github.com/tiangolo/fastapi/pull/3236)by[@tiangolo](https://github.com/tiangolo).

## 0.65.1 (2021-05-11)[¶](#0651-2021-05-11)

### Security fixes[¶](#security-fixes_2)

- 📌 Upgrade pydantic pin, to handle security vulnerability
[CVE-2021-29510](https://github.com/pydantic/pydantic/security/advisories/GHSA-5jqp-qgf6-3pvh). PR[#3213](https://github.com/tiangolo/fastapi/pull/3213)by[@tiangolo](https://github.com/tiangolo).

## 0.65.0 (2021-05-10)[¶](#0650-2021-05-10)

### Breaking Changes - Upgrade[¶](#breaking-changes-upgrade_2)

- ⬆️ Upgrade Starlette to
`0.14.2`

, including internal`UJSONResponse`

migrated from Starlette. This includes several bug fixes and features from Starlette. PR[#2335](https://github.com/tiangolo/fastapi/pull/2335)by[@hanneskuettner](https://github.com/hanneskuettner).

### Translations[¶](#translations_87)

- 🌐 Initialize new language Polish for translations. PR
[#3170](https://github.com/tiangolo/fastapi/pull/3170)by[@neternefer](https://github.com/neternefer).

### Internal[¶](#internal_122)

- 👷 Add GitHub Action cache to speed up CI installs. PR
[#3204](https://github.com/tiangolo/fastapi/pull/3204)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade setup-python GitHub Action to v2. PR
[#3203](https://github.com/tiangolo/fastapi/pull/3203)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix docs script to generate a new translation language with
`overrides`

boilerplate. PR[#3202](https://github.com/tiangolo/fastapi/pull/3202)by[@tiangolo](https://github.com/tiangolo). - ✨ Add new Deta banner badge with new sponsorship tier 🙇. PR
[#3194](https://github.com/tiangolo/fastapi/pull/3194)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#3189](https://github.com/tiangolo/fastapi/pull/3189)by[@github-actions[bot]](https://github.com/apps/github-actions). - 🔊 Update FastAPI People to allow better debugging. PR
[#3188](https://github.com/tiangolo/fastapi/pull/3188)by[@tiangolo](https://github.com/tiangolo).

## 0.64.0 (2021-05-07)[¶](#0640-2021-05-07)

### Features[¶](#features_50)

- ✨ Add support for adding multiple
`examples`

in request bodies and path, query, cookie, and header params. New docs:[Declare Request Example Data](https://fastapi.tiangolo.com/tutorial/schema-extra-example/#body-with-multiple-examples). Initial PR[#1267](https://github.com/tiangolo/fastapi/pull/1267)by[@austinorr](https://github.com/austinorr).

### Fixes[¶](#fixes_65)

- 📌 Pin SQLAlchemy range for tests, as it doesn't use SemVer. PR
[#3001](https://github.com/tiangolo/fastapi/pull/3001)by[@tiangolo](https://github.com/tiangolo). - 🎨 Add newly required type annotations for mypy. PR
[#2882](https://github.com/tiangolo/fastapi/pull/2882)by[@tiangolo](https://github.com/tiangolo). - 🎨 Remove internal "type: ignore", now unnecessary. PR
[#2424](https://github.com/tiangolo/fastapi/pull/2424)by[@AsakuraMizu](https://github.com/AsakuraMizu).

### Docs[¶](#docs_91)

- 📝 Add link to article in Russian "FastAPI: знакомимся с фреймворком". PR
[#2564](https://github.com/tiangolo/fastapi/pull/2564)by[@trkohler](https://github.com/trkohler). - 📝 Add external link to blog post "Authenticate Your FastAPI App with Auth0". PR
[#2172](https://github.com/tiangolo/fastapi/pull/2172)by[@dompatmore](https://github.com/dompatmore). - 📝 Fix broken link to article: Machine learning model serving in Python using FastAPI and Streamlit. PR
[#2557](https://github.com/tiangolo/fastapi/pull/2557)by[@davidefiocco](https://github.com/davidefiocco). - 📝 Add FastAPI Medium Article: Deploy a dockerized FastAPI application to AWS. PR
[#2515](https://github.com/tiangolo/fastapi/pull/2515)by[@vjanz](https://github.com/vjanz). - ✏ Fix typo in Tutorial - Handling Errors. PR
[#2486](https://github.com/tiangolo/fastapi/pull/2486)by[@johnthagen](https://github.com/johnthagen). - ✏ Fix typo in Security OAuth2 scopes. PR
[#2407](https://github.com/tiangolo/fastapi/pull/2407)by[@jugmac00](https://github.com/jugmac00). - ✏ Fix typo/clarify docs for SQL (Relational) Databases. PR
[#2393](https://github.com/tiangolo/fastapi/pull/2393)by[@kangni](https://github.com/kangni). - 📝 Add external link to "FastAPI for Flask Users". PR
[#2280](https://github.com/tiangolo/fastapi/pull/2280)by[@amitness](https://github.com/amitness).

### Translations[¶](#translations_88)

- 🌐 Fix Chinese translation of Tutorial - Query Parameters, remove obsolete content. PR
[#3051](https://github.com/tiangolo/fastapi/pull/3051)by[@louis70109](https://github.com/louis70109). - 🌐 Add French translation for Tutorial - Background Tasks. PR
[#3098](https://github.com/tiangolo/fastapi/pull/3098)by[@Smlep](https://github.com/Smlep). - 🌐 Fix Korean translation for docs/ko/docs/index.md. PR
[#3159](https://github.com/tiangolo/fastapi/pull/3159)by[@SueNaEunYang](https://github.com/SueNaEunYang). - 🌐 Add Korean translation for Tutorial - Query Parameters. PR
[#2390](https://github.com/tiangolo/fastapi/pull/2390)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add French translation for FastAPI People. PR
[#2232](https://github.com/tiangolo/fastapi/pull/2232)by[@JulianMaurin](https://github.com/JulianMaurin). - 🌐 Add Korean translation for Tutorial - Path Parameters. PR
[#2355](https://github.com/tiangolo/fastapi/pull/2355)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add French translation for Features. PR
[#2157](https://github.com/tiangolo/fastapi/pull/2157)by[@Jefidev](https://github.com/Jefidev). - 👥 Update FastAPI People. PR
[#3031](https://github.com/tiangolo/fastapi/pull/3031)by[@github-actions[bot]](https://github.com/apps/github-actions). - 🌐 Add Chinese translation for Tutorial - Debugging. PR
[#2737](https://github.com/tiangolo/fastapi/pull/2737)by[@blt232018](https://github.com/blt232018). - 🌐 Add Chinese translation for Tutorial - Security - OAuth2 with Password (and hashing), Bearer with JWT tokens. PR
[#2642](https://github.com/tiangolo/fastapi/pull/2642)by[@waynerv](https://github.com/waynerv). - 🌐 Add Korean translation for Tutorial - Header Parameters. PR
[#2589](https://github.com/tiangolo/fastapi/pull/2589)by[@mode9](https://github.com/mode9). - 🌐 Add Chinese translation for Tutorial - Metadata and Docs URLs. PR
[#2559](https://github.com/tiangolo/fastapi/pull/2559)by[@blt232018](https://github.com/blt232018). - 🌐 Add Korean translation for Tutorial - First Steps. PR
[#2323](https://github.com/tiangolo/fastapi/pull/2323)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Chinese translation for Tutorial - CORS (Cross-Origin Resource Sharing). PR
[#2540](https://github.com/tiangolo/fastapi/pull/2540)by[@blt232018](https://github.com/blt232018). - 🌐 Add Chinese translation for Tutorial - Middleware. PR
[#2334](https://github.com/tiangolo/fastapi/pull/2334)by[@lpdswing](https://github.com/lpdswing). - 🌐 Add Korean translation for Tutorial - Intro. PR
[#2317](https://github.com/tiangolo/fastapi/pull/2317)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Chinese translation for Tutorial - Bigger Applications - Multiple Files. PR
[#2453](https://github.com/tiangolo/fastapi/pull/2453)by[@waynerv](https://github.com/waynerv). - 🌐 Add Chinese translation for Tutorial - Security - Security Intro. PR
[#2443](https://github.com/tiangolo/fastapi/pull/2443)by[@waynerv](https://github.com/waynerv). - 🌐 Add Chinese translation for Tutorial - Header Parameters. PR
[#2412](https://github.com/tiangolo/fastapi/pull/2412)by[@maoyibo](https://github.com/maoyibo). - 🌐 Add Chinese translation for Tutorial - Extra Data Types. PR
[#2410](https://github.com/tiangolo/fastapi/pull/2410)by[@maoyibo](https://github.com/maoyibo). - 🌐 Add Japanese translation for Deployment - Docker. PR
[#2312](https://github.com/tiangolo/fastapi/pull/2312)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Deployment - Versions. PR
[#2310](https://github.com/tiangolo/fastapi/pull/2310)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Chinese translation for Tutorial - Cookie Parameters. PR
[#2261](https://github.com/tiangolo/fastapi/pull/2261)by[@alicrazy1947](https://github.com/alicrazy1947). - 🌐 Add Japanese translation for Tutorial - Static files. PR
[#2260](https://github.com/tiangolo/fastapi/pull/2260)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Tutorial - Testing. PR
[#2259](https://github.com/tiangolo/fastapi/pull/2259)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Tutorial - Debugging. PR
[#2256](https://github.com/tiangolo/fastapi/pull/2256)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Tutorial - Middleware. PR
[#2255](https://github.com/tiangolo/fastapi/pull/2255)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Concurrency and async / await. PR
[#2058](https://github.com/tiangolo/fastapi/pull/2058)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Chinese translation for Tutorial - Security - Simple OAuth2 with Password and Bearer. PR
[#2514](https://github.com/tiangolo/fastapi/pull/2514)by[@waynerv](https://github.com/waynerv). - 🌐 Add Japanese translation for Deployment - Deta. PR
[#2314](https://github.com/tiangolo/fastapi/pull/2314)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Chinese translation for Tutorial - Security - Get Current User. PR
[#2474](https://github.com/tiangolo/fastapi/pull/2474)by[@waynerv](https://github.com/waynerv). - 🌐 Add Japanese translation for Deployment - Manually. PR
[#2313](https://github.com/tiangolo/fastapi/pull/2313)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Deployment - Intro. PR
[#2309](https://github.com/tiangolo/fastapi/pull/2309)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for FastAPI People. PR
[#2254](https://github.com/tiangolo/fastapi/pull/2254)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Advanced - Path Operation Advanced Configuration. PR
[#2124](https://github.com/tiangolo/fastapi/pull/2124)by[@Attsun1031](https://github.com/Attsun1031). - 🌐 Add Japanese translation for External Links. PR
[#2070](https://github.com/tiangolo/fastapi/pull/2070)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Tutorial - Body - Updates. PR
[#1956](https://github.com/tiangolo/fastapi/pull/1956)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for Tutorial - Form Data. PR
[#1943](https://github.com/tiangolo/fastapi/pull/1943)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Japanese translation for Tutorial - Cookie Parameters. PR
[#1933](https://github.com/tiangolo/fastapi/pull/1933)by[@SwftAlpc](https://github.com/SwftAlpc).

### Internal[¶](#internal_123)

- 🔧 Update top banner, point to newsletter. PR
[#3003](https://github.com/tiangolo/fastapi/pull/3003)by[@tiangolo](https://github.com/tiangolo). - 🔧 Disable sponsor WeTransfer. PR
[#3002](https://github.com/tiangolo/fastapi/pull/3002)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#2880](https://github.com/tiangolo/fastapi/pull/2880)by[@github-actions[bot]](https://github.com/apps/github-actions). - 👥 Update FastAPI People. PR
[#2739](https://github.com/tiangolo/fastapi/pull/2739)by[@github-actions[bot]](https://github.com/apps/github-actions). - 🔧 Add new Gold Sponsor Talk Python 🎉. PR
[#2673](https://github.com/tiangolo/fastapi/pull/2673)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add new Gold Sponsor vim.so 🎉. PR
[#2669](https://github.com/tiangolo/fastapi/pull/2669)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add FastAPI user survey banner. PR
[#2623](https://github.com/tiangolo/fastapi/pull/2623)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add new Bronze Sponsor(s) 🥉🎉. PR
[#2622](https://github.com/tiangolo/fastapi/pull/2622)by[@tiangolo](https://github.com/tiangolo). - 📝 Update social links: add Discord, fix GitHub. PR
[#2621](https://github.com/tiangolo/fastapi/pull/2621)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update FastAPI People GitHub Sponsors order. PR
[#2620](https://github.com/tiangolo/fastapi/pull/2620)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update InvestSuite sponsor data. PR
[#2608](https://github.com/tiangolo/fastapi/pull/2608)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#2590](https://github.com/tiangolo/fastapi/pull/2590)by[@github-actions[bot]](https://github.com/apps/github-actions).

## 0.63.0 (2020-12-20)[¶](#0630-2020-12-20)

### Features[¶](#features_51)

- ✨ Improve type annotations, add support for mypy --strict, internally and for external packages. PR
[#2547](https://github.com/tiangolo/fastapi/pull/2547)by[@tiangolo](https://github.com/tiangolo).

### Breaking changes[¶](#breaking-changes_11)

- ⬆️ Upgrade Uvicorn when installing
`fastapi[all]`

to the latest version including`uvloop`

, the new range is`uvicorn[standard] >=0.12.0,<0.14.0`

. PR[#2548](https://github.com/tiangolo/fastapi/pull/2548)by[@tiangolo](https://github.com/tiangolo).

### Fixes[¶](#fixes_66)

- 🐛 PR
[#2547](https://github.com/tiangolo/fastapi/pull/2547)(read above) also fixes some false-positive mypy errors with`callbacks`

parameters and when using the`OAuth2`

class.

### Docs[¶](#docs_92)

- 📝 Update Uvicorn installation instructions to use uvicorn[standard] (includes uvloop). PR
[#2543](https://github.com/tiangolo/fastapi/pull/2543)by[@tiangolo](https://github.com/tiangolo). - 📝 Update title for Deta tutorial. PR
[#2466](https://github.com/tiangolo/fastapi/pull/2466)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#2454](https://github.com/tiangolo/fastapi/pull/2454)by[@github-actions[bot]](https://github.com/apps/github-actions).

### Translations[¶](#translations_89)

- 🌐 Add docs lang selector widget. PR
[#2542](https://github.com/tiangolo/fastapi/pull/2542)by[@tiangolo](https://github.com/tiangolo). - 🌐 Add Chinese translation for Tutorial - Response Status Code. PR
[#2442](https://github.com/tiangolo/fastapi/pull/2442)by[@waynerv](https://github.com/waynerv). - 🌐 Start translation of the documentation for the Albanian language. PR
[#2516](https://github.com/tiangolo/fastapi/pull/2516)by[@vjanz](https://github.com/vjanz). - 🌐 Add Chinese translation for Tutorial - Extra Models. PR
[#2416](https://github.com/tiangolo/fastapi/pull/2416)by[@waynerv](https://github.com/waynerv). - 🌐 Add Chinese translation for Tutorial - Response Model. PR
[#2414](https://github.com/tiangolo/fastapi/pull/2414)by[@waynerv](https://github.com/waynerv). - 🌐 Add Chinese translation for Tutorial - Schema Extra Example. PR
[#2411](https://github.com/tiangolo/fastapi/pull/2411)by[@maoyibo](https://github.com/maoyibo). - 🌐 Add Korean translation for Index. PR
[#2192](https://github.com/tiangolo/fastapi/pull/2192)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Japanese translation for Advanced User Guide - Additional Status Codes. PR
[#2145](https://github.com/tiangolo/fastapi/pull/2145)by[@Attsun1031](https://github.com/Attsun1031).

### Internal[¶](#internal_124)

- 🐛 Fix docs overrides directory for translations. PR
[#2541](https://github.com/tiangolo/fastapi/pull/2541)by[@tiangolo](https://github.com/tiangolo). - ➖ Remove Typer as a docs building dependency (covered by typer-cli) to fix pip resolver conflicts. PR
[#2539](https://github.com/tiangolo/fastapi/pull/2539)by[@tiangolo](https://github.com/tiangolo). - ✨ Add newsletter: FastAPI and friends. PR
[#2509](https://github.com/tiangolo/fastapi/pull/2509)by[@tiangolo](https://github.com/tiangolo). - ✨ Add new Gold Sponsor: InvestSuite 🎉. PR
[#2508](https://github.com/tiangolo/fastapi/pull/2508)by[@tiangolo](https://github.com/tiangolo). - 🔧 Add issue template configs. PR
[#2476](https://github.com/tiangolo/fastapi/pull/2476)by[@tiangolo](https://github.com/tiangolo).

## 0.62.0 (2020-11-29)[¶](#0620-2020-11-29)

### Features[¶](#features_52)

Up to now, for several options, the only way to apply them to a group of *path operations* was in `include_router`

. That works well, but the call to `app.include_router()`

or `router.include_router()`

is normally done in another file.

That means that, for example, to apply authentication to all the *path operations* in a router it would end up being done in a different file, instead of keeping related logic together.

Setting options in `include_router`

still makes sense in some cases, for example, to override or increase configurations from a third party router included in an app. But in a router that is part of a bigger application, it would probably make more sense to add those settings when creating the `APIRouter`

.

**In FastAPI**

This allows setting the (mostly new) parameters (additionally to the already existing parameters):

`default_response_class`

: updated to handle defaults in`APIRouter`

and`include_router`

.`dependencies`

: to include ✨ top-level dependencies ✨ that apply to the whole application. E.g. to add global authentication.`callbacks`

: OpenAPI callbacks that apply to all the*path operations*.`deprecated`

: to mark all the*path operations*as deprecated. 🤷`include_in_schema`

: to allow excluding all the*path operations*from the OpenAPI schema.`responses`

: OpenAPI responses that apply to all the*path operations*.

For example:

```
from fastapi import FastAPI, Depends
async def some_dependency():
return
app = FastAPI(dependencies=[Depends(some_dependency)])
```


**In APIRouter**

This allows setting the (mostly new) parameters (additionally to the already existing parameters):

`default_response_class`

: updated to handle defaults in`APIRouter`

and`include_router`

. For example, it's not needed to set it explicitly when[creating callbacks](https://fastapi.tiangolo.com/advanced/openapi-callbacks/).`dependencies`

: to include ✨ router-level dependencies ✨ that apply to all the*path operations*in a router. Up to now, this was only possible with`include_router`

.`callbacks`

: OpenAPI callbacks that apply to all the*path operations*in this router.`deprecated`

: to mark all the*path operations*in a router as deprecated.`include_in_schema`

: to allow excluding all the*path operations*in a router from the OpenAPI schema.`responses`

: OpenAPI responses that apply to all the*path operations*in a router.`prefix`

: to set the path prefix for a router. Up to now, this was only possible when calling`include_router`

.`tags`

: OpenAPI tags to apply to all the*path operations*in this router.

For example:

```
from fastapi import APIRouter, Depends
async def some_dependency():
return
router = APIRouter(prefix="/users", dependencies=[Depends(some_dependency)])
```


**In include_router**

Most of these settings are now supported in `APIRouter`

, which normally lives closer to the related code, so it is recommended to use `APIRouter`

when possible.

But `include_router`

is still useful to, for example, adding options (like `dependencies`

, `prefix`

, and `tags`

) when including a third party router, or a generic router that is shared between several projects.

This PR allows setting the (mostly new) parameters (additionally to the already existing parameters):

`default_response_class`

: updated to handle defaults in`APIRouter`

and`FastAPI`

.`deprecated`

: to mark all the*path operations*in a router as deprecated in OpenAPI.`include_in_schema`

: to allow disabling all the*path operations*from showing in the OpenAPI schema.`callbacks`

: OpenAPI callbacks that apply to all the*path operations*in this router.

Note: all the previous parameters are still there, so it's still possible to declare `dependencies`

in `include_router`

.

### Breaking Changes[¶](#breaking-changes_12)

- PR
[#2434](https://github.com/tiangolo/fastapi/pull/2434)includes several improvements that shouldn't affect normal use cases, but could affect in advanced scenarios:- If you are testing the generated OpenAPI (you shouldn't, FastAPI already tests it extensively for you): the order for
`tags`

in`include_router`

and*path operations*was updated for consistency, but it's a simple order change. - If you have advanced custom logic to access each route's
`route.response_class`

, or the`router.default_response_class`

, or the`app.default_response_class`

: the default value for`response_class`

in`APIRoute`

and for`default_response_class`

in`APIRouter`

and`FastAPI`

is now a`DefaultPlaceholder`

used internally to handle and solve default values and overrides. The actual response class inside the`DefaultPlaceholder`

is available at`route.response_class.value`

.

- If you are testing the generated OpenAPI (you shouldn't, FastAPI already tests it extensively for you): the order for

### Docs[¶](#docs_93)

-
PR

[#2434](https://github.com/tiangolo/fastapi/pull/2434)(above) includes new or updated docs: -
📝 Add FastAPI monitoring blog post to External Links. PR

[#2324](https://github.com/tiangolo/fastapi/pull/2324)by[@louisguitton](https://github.com/louisguitton). - ✏️ Fix typo in Deta tutorial. PR
[#2320](https://github.com/tiangolo/fastapi/pull/2320)by[@tiangolo](https://github.com/tiangolo). - ✨ Add Discord chat. PR
[#2322](https://github.com/tiangolo/fastapi/pull/2322)by[@tiangolo](https://github.com/tiangolo). - 📝 Fix image links for sponsors. PR
[#2304](https://github.com/tiangolo/fastapi/pull/2304)by[@tiangolo](https://github.com/tiangolo).

### Translations[¶](#translations_90)

- 🌐 Add Japanese translation for Advanced - Custom Response. PR
[#2193](https://github.com/tiangolo/fastapi/pull/2193)by[@Attsun1031](https://github.com/Attsun1031). - 🌐 Add Chinese translation for Benchmarks. PR
[#2119](https://github.com/tiangolo/fastapi/pull/2119)by[@spaceack](https://github.com/spaceack). - 🌐 Add Chinese translation for Tutorial - Body - Nested Models. PR
[#1609](https://github.com/tiangolo/fastapi/pull/1609)by[@waynerv](https://github.com/waynerv). - 🌐 Add Chinese translation for Advanced - Custom Response. PR
[#1459](https://github.com/tiangolo/fastapi/pull/1459)by[@RunningIkkyu](https://github.com/RunningIkkyu). - 🌐 Add Chinese translation for Advanced - Return a Response Directly. PR
[#1452](https://github.com/tiangolo/fastapi/pull/1452)by[@RunningIkkyu](https://github.com/RunningIkkyu). - 🌐 Add Chinese translation for Advanced - Additional Status Codes. PR
[#1451](https://github.com/tiangolo/fastapi/pull/1451)by[@RunningIkkyu](https://github.com/RunningIkkyu). - 🌐 Add Chinese translation for Advanced - Path Operation Advanced Configuration. PR
[#1447](https://github.com/tiangolo/fastapi/pull/1447)by[@RunningIkkyu](https://github.com/RunningIkkyu). - 🌐 Add Chinese translation for Advanced User Guide - Intro. PR
[#1445](https://github.com/tiangolo/fastapi/pull/1445)by[@RunningIkkyu](https://github.com/RunningIkkyu).

### Internal[¶](#internal_125)

- 🔧 Update TestDriven link to course in sponsors section. PR
[#2435](https://github.com/tiangolo/fastapi/pull/2435)by[@tiangolo](https://github.com/tiangolo). - 🍱 Update sponsor logos. PR
[#2418](https://github.com/tiangolo/fastapi/pull/2418)by[@tiangolo](https://github.com/tiangolo). - 💚 Fix disabling install of Material for MkDocs Insiders in forks, strike 1 ⚾. PR
[#2340](https://github.com/tiangolo/fastapi/pull/2340)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix disabling Material for MkDocs Insiders install in forks. PR
[#2339](https://github.com/tiangolo/fastapi/pull/2339)by[@tiangolo](https://github.com/tiangolo). - ✨ Add silver sponsor WeTransfer. PR
[#2338](https://github.com/tiangolo/fastapi/pull/2338)by[@tiangolo](https://github.com/tiangolo). - ✨ Set up and enable Material for MkDocs Insiders for the docs. PR
[#2325](https://github.com/tiangolo/fastapi/pull/2325)by[@tiangolo](https://github.com/tiangolo).

## 0.61.2 (2020-11-05)[¶](#0612-2020-11-05)

### Fixes[¶](#fixes_67)

- 📌 Relax Swagger UI version pin. PR
[#2089](https://github.com/tiangolo/fastapi/pull/2089)by[@jmriebold](https://github.com/jmriebold). - 🐛 Fix bug overriding custom HTTPException and RequestValidationError from exception_handlers. PR
[#1924](https://github.com/tiangolo/fastapi/pull/1924)by[@uriyyo](https://github.com/uriyyo). - ✏️ Fix typo on dependencies utils and cleanup unused variable. PR
[#1912](https://github.com/tiangolo/fastapi/pull/1912)by[@Kludex](https://github.com/Kludex).

### Docs[¶](#docs_94)

- ✏️ Fix typo in Tutorial - Path Parameters. PR
[#2231](https://github.com/tiangolo/fastapi/pull/2231)by[@mariacamilagl](https://github.com/mariacamilagl). - ✏ Fix a stylistic error in docs. PR
[#2206](https://github.com/tiangolo/fastapi/pull/2206)by[@ddobrinskiy](https://github.com/ddobrinskiy). - ✏ Fix capitalizaiton typo in docs. PR
[#2204](https://github.com/tiangolo/fastapi/pull/2204)by[@imba-tjd](https://github.com/imba-tjd). - ✏ Fix typo in docs. PR
[#2179](https://github.com/tiangolo/fastapi/pull/2179)by[@ammarasmro](https://github.com/ammarasmro). - 📝 Update/fix links in docs to use HTTPS. PR
[#2165](https://github.com/tiangolo/fastapi/pull/2165)by[@imba-tjd](https://github.com/imba-tjd). - ✏ Fix typos and add rewording in docs. PR
[#2159](https://github.com/tiangolo/fastapi/pull/2159)by[@nukopy](https://github.com/nukopy). - 📝 Fix code consistency in examples for Tutorial - User Guide - Path Parameters. PR
[#2158](https://github.com/tiangolo/fastapi/pull/2158)by[@nukopy](https://github.com/nukopy). - 📝 Fix renamed parameter
`content_type`

typo. PR[#2135](https://github.com/tiangolo/fastapi/pull/2135)by[@TeoZosa](https://github.com/TeoZosa). - ✏ Fix minor typos in docs. PR
[#2122](https://github.com/tiangolo/fastapi/pull/2122)by[@TeoZosa](https://github.com/TeoZosa). - ✏ Fix typos in docs and source examples. PR
[#2102](https://github.com/tiangolo/fastapi/pull/2102)by[@AdrianDeAnda](https://github.com/AdrianDeAnda). - ✏ Fix incorrect Celery URLs in docs. PR
[#2100](https://github.com/tiangolo/fastapi/pull/2100)by[@CircleOnCircles](https://github.com/CircleOnCircles). - 📝 Simplify intro to Python Types, all currently supported Python versions include type hints 🎉. PR
[#2085](https://github.com/tiangolo/fastapi/pull/2085)by[@ninjaaron](https://github.com/ninjaaron). - 📝 Fix example code with sets in Tutorial - Body - Nested Models 3. PR
[#2054](https://github.com/tiangolo/fastapi/pull/2054)by[@hitrust](https://github.com/hitrust). - 📝 Fix example code with sets in Tutorial - Body - Nested Models 2. PR
[#2053](https://github.com/tiangolo/fastapi/pull/2053)by[@hitrust](https://github.com/hitrust). - 📝 Fix example code with sets in Tutorial - Body - Nested Models. PR
[#2052](https://github.com/tiangolo/fastapi/pull/2052)by[@hitrust](https://github.com/hitrust). - ✏ Fix typo in Benchmarks. PR
[#1995](https://github.com/tiangolo/fastapi/pull/1995)by[@AlejoAsd](https://github.com/AlejoAsd). - 📝 Add note in CORS tutorial about allow_origins with ["*"] and allow_credentials. PR
[#1895](https://github.com/tiangolo/fastapi/pull/1895)by[@dsmurrell](https://github.com/dsmurrell). - 📝 Add deployment to Deta, the first gold sponsor 🎉. PR
[#2303](https://github.com/tiangolo/fastapi/pull/2303)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#2282](https://github.com/tiangolo/fastapi/pull/2282)by[@github-actions[bot]](https://github.com/apps/github-actions). - ✏️ Fix uppercase in Tutorial - Query parameters. PR
[#2245](https://github.com/tiangolo/fastapi/pull/2245)by[@mariacamilagl](https://github.com/mariacamilagl). - 📝 Add articles to External Links. PR
[#2247](https://github.com/tiangolo/fastapi/pull/2247)by[@tiangolo](https://github.com/tiangolo). - ✏ Fix typo in Spanish tutorial index. PR
[#2020](https://github.com/tiangolo/fastapi/pull/2020)by[@aviloncho](https://github.com/aviloncho).

### Translations[¶](#translations_91)

- 🌐 Add Japanese translation for Advanced Tutorial - Response Directly. PR
[#2191](https://github.com/tiangolo/fastapi/pull/2191)by[@Attsun1031](https://github.com/Attsun1031). - 📝 Add Japanese translation for Tutorial - Security - First Steps. PR
[#2153](https://github.com/tiangolo/fastapi/pull/2153)by[@komtaki](https://github.com/komtaki). - 🌐 Add Japanese translation for Tutorial - Query Parameters and String Validations. PR
[#1901](https://github.com/tiangolo/fastapi/pull/1901)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Portuguese translation for External Links. PR
[#1443](https://github.com/tiangolo/fastapi/pull/1443)by[@Serrones](https://github.com/Serrones). - 🌐 Add Japanese translation for Tutorial - CORS. PR
[#2125](https://github.com/tiangolo/fastapi/pull/2125)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Contributing. PR
[#2067](https://github.com/tiangolo/fastapi/pull/2067)by[@komtaki](https://github.com/komtaki). - 🌐 Add Japanese translation for Project Generation. PR
[#2050](https://github.com/tiangolo/fastapi/pull/2050)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Alternatives. PR
[#2043](https://github.com/tiangolo/fastapi/pull/2043)by[@Attsun1031](https://github.com/Attsun1031). - 🌐 Add Japanese translation for History Design and Future. PR
[#2002](https://github.com/tiangolo/fastapi/pull/2002)by[@komtaki](https://github.com/komtaki). - 🌐 Add Japanese translation for Benchmarks. PR
[#1992](https://github.com/tiangolo/fastapi/pull/1992)by[@komtaki](https://github.com/komtaki). - 🌐 Add Japanese translation for Tutorial - Header Parameters. PR
[#1935](https://github.com/tiangolo/fastapi/pull/1935)by[@SwftAlpc](https://github.com/SwftAlpc). - 🌐 Add Portuguese translation for Tutorial - First Steps. PR
[#1861](https://github.com/tiangolo/fastapi/pull/1861)by[@jessicapaz](https://github.com/jessicapaz). - 🌐 Add Portuguese translation for Python Types. PR
[#1796](https://github.com/tiangolo/fastapi/pull/1796)by[@izaguerreiro](https://github.com/izaguerreiro). - 🌐 Add Japanese translation for Help FastAPI. PR
[#1692](https://github.com/tiangolo/fastapi/pull/1692)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Tutorial - Body. PR
[#1683](https://github.com/tiangolo/fastapi/pull/1683)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for Tutorial - Query Params. PR
[#1674](https://github.com/tiangolo/fastapi/pull/1674)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for tutorial/path-params.md. PR
[#1671](https://github.com/tiangolo/fastapi/pull/1671)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for tutorial/first-steps.md. PR
[#1658](https://github.com/tiangolo/fastapi/pull/1658)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add Japanese translation for tutorial/index.md. PR
[#1656](https://github.com/tiangolo/fastapi/pull/1656)by[@tokusumi](https://github.com/tokusumi). - 🌐 Add translation to Portuguese for Project Generation. PR
[#1602](https://github.com/tiangolo/fastapi/pull/1602)by[@Serrones](https://github.com/Serrones). - 🌐 Add Japanese translation for Features. PR
[#1625](https://github.com/tiangolo/fastapi/pull/1625)by[@tokusumi](https://github.com/tokusumi). - 🌐 Initialize new language Korean for translations. PR
[#2018](https://github.com/tiangolo/fastapi/pull/2018)by[@hard-coders](https://github.com/hard-coders). - 🌐 Add Portuguese translation of Deployment. PR
[#1374](https://github.com/tiangolo/fastapi/pull/1374)by[@Serrones](https://github.com/Serrones).

### Internal[¶](#internal_126)

- 🔥 Cleanup after upgrade for Docs Previews GitHub Action. PR
[#2248](https://github.com/tiangolo/fastapi/pull/2248)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix CI docs preview, unzip docs. PR
[#2246](https://github.com/tiangolo/fastapi/pull/2246)by[@tiangolo](https://github.com/tiangolo). - ✨ Add instant docs deploy previews for PRs from forks. PR
[#2244](https://github.com/tiangolo/fastapi/pull/2244)by[@tiangolo](https://github.com/tiangolo). - ⚡️ Build docs for languages in parallel in subprocesses to speed up CI. PR
[#2242](https://github.com/tiangolo/fastapi/pull/2242)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix docs order generation for partial translations. PR
[#2238](https://github.com/tiangolo/fastapi/pull/2238)by[@tiangolo](https://github.com/tiangolo). - 👥 Update FastAPI People. PR
[#2202](https://github.com/tiangolo/fastapi/pull/2202)by[@github-actions[bot]](https://github.com/apps/github-actions). - ♻️ Update FastAPI People GitHub Action to send the PR as github-actions. PR
[#2201](https://github.com/tiangolo/fastapi/pull/2201)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update FastAPI People GitHub Action config, run monthly. PR
[#2199](https://github.com/tiangolo/fastapi/pull/2199)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix FastAPI People GitHub Action Docker dependency, strike 1 ⚾. PR
[#2198](https://github.com/tiangolo/fastapi/pull/2198)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix FastAPI People GitHub Action Docker dependencies. PR
[#2197](https://github.com/tiangolo/fastapi/pull/2197)by[@tiangolo](https://github.com/tiangolo). - 🐛 Fix FastAPI People GitHub Action when there's nothing to change. PR
[#2196](https://github.com/tiangolo/fastapi/pull/2196)by[@tiangolo](https://github.com/tiangolo). - 👥 Add new section FastAPI People. PR
[#2195](https://github.com/tiangolo/fastapi/pull/2195)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade GitHub Action Latest Changes. PR
[#2190](https://github.com/tiangolo/fastapi/pull/2190)by[@tiangolo](https://github.com/tiangolo). - ⬆️ Upgrade GitHub Action Label Approved. PR
[#2189](https://github.com/tiangolo/fastapi/pull/2189)by[@tiangolo](https://github.com/tiangolo). - 🔧 Update GitHub Action Label Approved, run at 12:00. PR
[#2185](https://github.com/tiangolo/fastapi/pull/2185)by[@tiangolo](https://github.com/tiangolo). - 👷 Upgrade GitHub Action Latest Changes. PR
[#2184](https://github.com/tiangolo/fastapi/pull/2184)by[@tiangolo](https://github.com/tiangolo). - 👷 Set GitHub Action Label Approved to run daily, not every minute. PR
[#2163](https://github.com/tiangolo/fastapi/pull/2163)by[@tiangolo](https://github.com/tiangolo). - 🔥 Remove pr-approvals GitHub Action as it's not compatible with forks. Use the new one. PR
[#2162](https://github.com/tiangolo/fastapi/pull/2162)by[@tiangolo](https://github.com/tiangolo). - 👷 Add GitHub Action Latest Changes. PR
[#2160](https://github.com/tiangolo/fastapi/pull/2160). - 👷 Add GitHub Action Label Approved. PR
[#2161](https://github.com/tiangolo/fastapi/pull/2161).

## 0.61.1 (2020-08-29)[¶](#0611-2020-08-29)

### Fixes[¶](#fixes_68)

- Fix issues using
`jsonable_encoder`

with SQLAlchemy models directly. PR[#1987](https://github.com/tiangolo/fastapi/pull/1987).

### Docs[¶](#docs_95)

- Fix typo in NoSQL docs. PR
[#1980](https://github.com/tiangolo/fastapi/pull/1980)by[@facundojmaero](https://github.com/facundojmaero).

### Translations[¶](#translations_92)

- Add translation for
[main page to Japanese](https://fastapi.tiangolo.com/ja/)PR[#1571](https://github.com/tiangolo/fastapi/pull/1571)by[@ryuckel](https://github.com/ryuckel). - Initialize French translations. PR
[#1975](https://github.com/tiangolo/fastapi/pull/1975)by[@JulianMaurin-BM](https://github.com/JulianMaurin-BM). - Initialize Turkish translations. PR
[#1905](https://github.com/tiangolo/fastapi/pull/1905)by[@ycd](https://github.com/ycd).

### Internal[¶](#internal_127)

## 0.61.0 (2020-08-09)[¶](#0610-2020-08-09)

### Features[¶](#features_53)

- Add support for injecting
`HTTPConnection`

(as`Request`

and`WebSocket`

). Useful for sharing app state in dependencies. PR[#1827](https://github.com/tiangolo/fastapi/pull/1827)by[@nsidnev](https://github.com/nsidnev). - Export
`WebSocketDisconnect`

and add example handling WebSocket disconnections to docs. PR[#1822](https://github.com/tiangolo/fastapi/pull/1822)by[@rkbeatss](https://github.com/rkbeatss).

### Breaking Changes[¶](#breaking-changes_13)

- Require Pydantic >
`1.0.0`

.- Remove support for deprecated Pydantic
`0.32.2`

. This improves maintainability and allows new features. - In
`FastAPI`

and`APIRouter`

:- Remove
*path operation decorators*related/deprecated parameter`response_model_skip_defaults`

(use`response_model_exclude_unset`

instead). - Change
*path operation decorators*parameter default for`response_model_exclude`

from`set()`

to`None`

(as is in Pydantic).

- Remove
- In
`encoders.jsonable_encoder`

:- Remove deprecated
`skip_defaults`

, use instead`exclude_unset`

. - Set default of
`exclude`

from`set()`

to`None`

(as is in Pydantic).

- Remove deprecated
- PR
[#1862](https://github.com/tiangolo/fastapi/pull/1862).

- Remove support for deprecated Pydantic
- In
`encoders.jsonable_encoder`

remove parameter`sqlalchemy_safe`

.- It was an early hack to allow returning SQLAlchemy models, but it was never documented, and the recommended way is using Pydantic's
`orm_mode`

as described in the tutorial:[SQL (Relational) Databases](https://fastapi.tiangolo.com/tutorial/sql-databases/). - PR
[#1864](https://github.com/tiangolo/fastapi/pull/1864).

- It was an early hack to allow returning SQLAlchemy models, but it was never documented, and the recommended way is using Pydantic's

### Docs[¶](#docs_96)

- Add link to the course by TestDriven.io:
[Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/). PR[#1860](https://github.com/tiangolo/fastapi/pull/1860). - Fix empty log message in docs example about handling errors. PR
[#1815](https://github.com/tiangolo/fastapi/pull/1815)by[@manlix](https://github.com/manlix). - Reword text to reduce ambiguity while not being gender-specific. PR
[#1824](https://github.com/tiangolo/fastapi/pull/1824)by[@Mause](https://github.com/Mause).

### Internal[¶](#internal_128)

- Add Flake8 linting. Original PR
[#1774](https://github.com/tiangolo/fastapi/pull/1774)by[@MashhadiNima](https://github.com/MashhadiNima). - Disable Gitter bot, as it's currently broken, and Gitter's response doesn't show the problem. PR
[#1853](https://github.com/tiangolo/fastapi/pull/1853).

## 0.60.2 (2020-08-08)[¶](#0602-2020-08-08)

- Fix typo in docs for query parameters. PR
[#1832](https://github.com/tiangolo/fastapi/pull/1832)by[@ycd](https://github.com/ycd). - Add docs about
[Async Tests](https://fastapi.tiangolo.com/advanced/async-tests/). PR[#1619](https://github.com/tiangolo/fastapi/pull/1619)by[@empicano](https://github.com/empicano). - Raise an exception when using form data (
`Form`

,`File`

) without having`python-multipart`

installed.- Up to now the application would run, and raise an exception only when receiving a request with form data, the new behavior, raising early, will prevent from deploying applications with broken dependencies.
- It also detects if the correct package
`python-multipart`

is installed instead of the incorrect`multipart`

(both importable as`multipart`

). - PR
[#1851](https://github.com/tiangolo/fastapi/pull/1851)based on original PR[#1627](https://github.com/tiangolo/fastapi/pull/1627)by[@chrisngyn](https://github.com/chrisngyn),[@YKo20010](https://github.com/YKo20010),[@kx-chen](https://github.com/kx-chen).

- Re-enable Gitter releases bot. PR
[#1831](https://github.com/tiangolo/fastapi/pull/1831). - Add link to async SQL databases tutorial from main SQL tutorial. PR
[#1813](https://github.com/tiangolo/fastapi/pull/1813)by[@short2strings](https://github.com/short2strings). - Fix typo in tutorial about behind a proxy. PR
[#1807](https://github.com/tiangolo/fastapi/pull/1807)by[@toidi](https://github.com/toidi). - Fix typo in Portuguese docs. PR
[#1795](https://github.com/tiangolo/fastapi/pull/1795)by[@izaguerreiro](https://github.com/izaguerreiro). - Add translations setup for Ukrainian. PR
[#1830](https://github.com/tiangolo/fastapi/pull/1830). - Add external link
[Build And Host Fast Data Science Applications Using FastAPI](https://towardsdatascience.com/build-and-host-fast-data-science-applications-using-fastapi-823be8a1d6a0). PR[#1786](https://github.com/tiangolo/fastapi/pull/1786)by[@Kludex](https://github.com/Kludex). - Fix encoding of Pydantic models that inherit from others models with custom
`json_encoders`

. PR[#1769](https://github.com/tiangolo/fastapi/pull/1769)by[@henrybetts](https://github.com/henrybetts). - Simplify and improve
`jsonable_encoder`

. PR[#1754](https://github.com/tiangolo/fastapi/pull/1754)by[@MashhadiNima](https://github.com/MashhadiNima). - Simplify internal code syntax in several points. PR
[#1753](https://github.com/tiangolo/fastapi/pull/1753)by[@uriyyo](https://github.com/uriyyo). - Improve internal typing, declare
`Optional`

parameters. PR[#1731](https://github.com/tiangolo/fastapi/pull/1731)by[@MashhadiNima](https://github.com/MashhadiNima). - Add external link
[Deploy FastAPI on Azure App Service](https://www.tutlinks.com/deploy-fastapi-on-azure/)to docs. PR[#1726](https://github.com/tiangolo/fastapi/pull/1726)by[@windson](https://github.com/windson). - Add link to Starlette docs about WebSocket testing. PR
[#1717](https://github.com/tiangolo/fastapi/pull/1717)by[@hellocoldworld](https://github.com/hellocoldworld). - Refactor generating dependant, merge for loops. PR
[#1714](https://github.com/tiangolo/fastapi/pull/1714)by[@Bloodielie](https://github.com/Bloodielie). - Update example for templates with Jinja to include HTML media type. PR
[#1690](https://github.com/tiangolo/fastapi/pull/1690)by[@frafra](https://github.com/frafra). - Fix typos in docs for security. PR
[#1678](https://github.com/tiangolo/fastapi/pull/1678)by[@nilslindemann](https://github.com/nilslindemann). - Fix typos in docs for dependencies. PR
[#1675](https://github.com/tiangolo/fastapi/pull/1675)by[@nilslindemann](https://github.com/nilslindemann). - Fix type annotation for
`**extra`

parameters in`FastAPI`

. PR[#1659](https://github.com/tiangolo/fastapi/pull/1659)by[@bharel](https://github.com/bharel). - Bump MkDocs Material to fix docs in browsers with dark mode. PR
[#1789](https://github.com/tiangolo/fastapi/pull/1789)by[@adriencaccia](https://github.com/adriencaccia). - Remove docs preview comment from each commit. PR
[#1826](https://github.com/tiangolo/fastapi/pull/1826). - Update GitHub context extraction for Gitter notification bot. PR
[#1766](https://github.com/tiangolo/fastapi/pull/1766).

## 0.60.1 (2020-07-22)[¶](#0601-2020-07-22)

- Add debugging logs for GitHub actions to introspect GitHub hidden context. PR
[#1764](https://github.com/tiangolo/fastapi/pull/1764). - Use OS preference theme for online docs. PR
[#1760](https://github.com/tiangolo/fastapi/pull/1760)by[@adriencaccia](https://github.com/adriencaccia). - Upgrade Starlette to version
`0.13.6`

to handle a vulnerability when using static files in Windows. PR[#1759](https://github.com/tiangolo/fastapi/pull/1759)by[@jamesag26](https://github.com/jamesag26). - Pin Swagger UI temporarily, waiting for a fix for
[swagger-api/swagger-ui#6249](https://github.com/swagger-api/swagger-ui/issues/6249). PR[#1763](https://github.com/tiangolo/fastapi/pull/1763). - Update GitHub Actions, use commit from PR for docs preview, not commit from pre-merge. PR
[#1761](https://github.com/tiangolo/fastapi/pull/1761). - Update GitHub Actions, refactor Gitter bot. PR
[#1746](https://github.com/tiangolo/fastapi/pull/1746).

## 0.60.0 (2020-07-20)[¶](#0600-2020-07-20)

- Add GitHub Action to watch for missing preview docs and trigger a preview deploy. PR
[#1740](https://github.com/tiangolo/fastapi/pull/1740). - Add custom GitHub Action to get artifact with docs preview. PR
[#1739](https://github.com/tiangolo/fastapi/pull/1739). - Add new GitHub Actions to preview docs from PRs. PR
[#1738](https://github.com/tiangolo/fastapi/pull/1738). - Add XML test coverage to support GitHub Actions. PR
[#1737](https://github.com/tiangolo/fastapi/pull/1737). - Update badges and remove Travis now that GitHub Actions is the main CI. PR
[#1736](https://github.com/tiangolo/fastapi/pull/1736). - Add GitHub Actions for CI, move from Travis. PR
[#1735](https://github.com/tiangolo/fastapi/pull/1735). - Add support for adding OpenAPI schema for GET requests with a body. PR
[#1626](https://github.com/tiangolo/fastapi/pull/1626)by[@victorphoenix3](https://github.com/victorphoenix3).

## 0.59.0 (2020-07-10)[¶](#0590-2020-07-10)

- Fix typo in docstring for OAuth2 utils. PR
[#1621](https://github.com/tiangolo/fastapi/pull/1621)by[@tomarv2](https://github.com/tomarv2). - Update JWT docs to use Python-jose instead of PyJWT. Initial PR
[#1610](https://github.com/tiangolo/fastapi/pull/1610)by[@asheux](https://github.com/asheux). - Fix/re-enable search bar in docs. PR
[#1703](https://github.com/tiangolo/fastapi/pull/1703). - Auto-generate a "server" in OpenAPI
`servers`

when there's a`root_path`

instead of prefixing all the`paths`

:- Add a new parameter for
`FastAPI`

classes:`root_path_in_servers`

to disable the auto-generation of`servers`

. - New docs about
`root_path`

and`servers`

in[Additional Servers](https://fastapi.tiangolo.com/advanced/behind-a-proxy/#additional-servers). - Update OAuth2 examples to use a relative URL for
`tokenUrl="token"`

to make sure those examples keep working as-is even when behind a reverse proxy. - Initial PR
[#1596](https://github.com/tiangolo/fastapi/pull/1596)by[@rkbeatss](https://github.com/rkbeatss).

- Add a new parameter for
- Fix typo/link in External Links. PR
[#1702](https://github.com/tiangolo/fastapi/pull/1702). - Update handling of
[External Links](https://fastapi.tiangolo.com/external-links/)to use a data file and allow translating the headers without becoming obsolete quickly when new links are added. PR[#https://github.com/tiangolo/fastapi/pull/1701](https://github.com/tiangolo/fastapi/pull/1701). - Add external link
[Machine learning model serving in Python using FastAPI and Streamlit](https://davidefiocco.github.io/2020/06/27/streamlit-fastapi-ml-serving.html)to docs. PR[#1669](https://github.com/tiangolo/fastapi/pull/1669)by[@davidefiocco](https://github.com/davidefiocco). - Add note in docs on order in Pydantic Unions. PR
[#1591](https://github.com/tiangolo/fastapi/pull/1591)by[@kbanc](https://github.com/kbanc). - Improve support for tests in editor. PR
[#1699](https://github.com/tiangolo/fastapi/pull/1699). - Pin dependencies. PR
[#1697](https://github.com/tiangolo/fastapi/pull/1697). - Update isort to version 5.x.x. PR
[#1670](https://github.com/tiangolo/fastapi/pull/1670)by[@asheux](https://github.com/asheux).

## 0.58.1 (2020-06-28)[¶](#0581-2020-06-28)

- Add link in docs to Pydantic data types. PR
[#1612](https://github.com/tiangolo/fastapi/pull/1612)by[@tayoogunbiyi](https://github.com/tayoogunbiyi). - Fix link in warning logs for
`openapi_prefix`

. PR[#1611](https://github.com/tiangolo/fastapi/pull/1611)by[@bavaria95](https://github.com/bavaria95). - Fix bad link in docs. PR
[#1603](https://github.com/tiangolo/fastapi/pull/1603)by[@molto0504](https://github.com/molto0504). - Add Vim temporary files to
`.gitignore`

for contributors using Vim. PR[#1590](https://github.com/tiangolo/fastapi/pull/1590)by[@asheux](https://github.com/asheux). - Fix typo in docs for sub-applications. PR
[#1578](https://github.com/tiangolo/fastapi/pull/1578)by[@schlpbch](https://github.com/schlpbch). - Use
`Optional`

in all the examples in the docs. Original PR[#1574](https://github.com/tiangolo/fastapi/pull/1574)by[@chrisngyn](https://github.com/chrisngyn),[@kx-chen](https://github.com/kx-chen),[@YKo20010](https://github.com/YKo20010). Updated and merged PR[#1644](https://github.com/tiangolo/fastapi/pull/1644). - Update tests and handling of
`response_model_by_alias`

. PR[#1642](https://github.com/tiangolo/fastapi/pull/1642). - Add translation to Chinese for
[Body - Fields - 请求体 - 字段](https://fastapi.tiangolo.com/zh/tutorial/body-fields/). PR[#1569](https://github.com/tiangolo/fastapi/pull/1569)by[@waynerv](https://github.com/waynerv). - Update Chinese translation of main page. PR
[#1564](https://github.com/tiangolo/fastapi/pull/1564)by[@waynerv](https://github.com/waynerv). - Add translation to Chinese for
[Body - Multiple Parameters - 请求体 - 多个参数](https://fastapi.tiangolo.com/zh/tutorial/body-multiple-params/). PR[#1532](https://github.com/tiangolo/fastapi/pull/1532)by[@waynerv](https://github.com/waynerv). - Add translation to Chinese for
[Path Parameters and Numeric Validations - 路径参数和数值校验](https://fastapi.tiangolo.com/zh/tutorial/path-params-numeric-validations/). PR[#1506](https://github.com/tiangolo/fastapi/pull/1506)by[@waynerv](https://github.com/waynerv). - Add GitHub action to auto-label approved PRs (mainly for translations). PR
[#1638](https://github.com/tiangolo/fastapi/pull/1638).

## 0.58.0 (2020-06-15)[¶](#0580-2020-06-15)

- Deep merge OpenAPI responses to preserve all the additional metadata. PR
[#1577](https://github.com/tiangolo/fastapi/pull/1577). - Mention in docs that only main app events are run (not sub-apps). PR
[#1554](https://github.com/tiangolo/fastapi/pull/1554)by[@amacfie](https://github.com/amacfie). - Fix body validation error response, do not include body variable when it is not embedded. PR
[#1553](https://github.com/tiangolo/fastapi/pull/1553)by[@amacfie](https://github.com/amacfie). - Fix testing OAuth2 security scopes when using dependency overrides. PR
[#1549](https://github.com/tiangolo/fastapi/pull/1549)by[@amacfie](https://github.com/amacfie). - Fix Model for JSON Schema keyword
`not`

as a JSON Schema instead of a list. PR[#1548](https://github.com/tiangolo/fastapi/pull/1548)by[@v-do](https://github.com/v-do). - Add support for OpenAPI
`servers`

. PR[#1547](https://github.com/tiangolo/fastapi/pull/1547)by[@mikaello](https://github.com/mikaello).

## 0.57.0 (2020-06-13)[¶](#0570-2020-06-13)

- Remove broken link from "External Links". PR
[#1565](https://github.com/tiangolo/fastapi/pull/1565)by[@victorphoenix3](https://github.com/victorphoenix3). - Update/fix docs for
[WebSockets with dependencies](https://fastapi.tiangolo.com/advanced/websockets/#using-depends-and-others). Original PR[#1540](https://github.com/tiangolo/fastapi/pull/1540)by[@ChihSeanHsu](https://github.com/ChihSeanHsu). - Add support for Python's
`http.HTTPStatus`

in`status_code`

parameters. PR[#1534](https://github.com/tiangolo/fastapi/pull/1534)by[@retnikt](https://github.com/retnikt). - When using Pydantic models with
`__root__`

, use the internal value in`jsonable_encoder`

. PR[#1524](https://github.com/tiangolo/fastapi/pull/1524)by[@patrickkwang](https://github.com/patrickkwang). - Update docs for path parameters. PR
[#1521](https://github.com/tiangolo/fastapi/pull/1521)by[@yankeexe](https://github.com/yankeexe). - Update docs for first steps, links and rewording. PR
[#1518](https://github.com/tiangolo/fastapi/pull/1518)by[@yankeexe](https://github.com/yankeexe). - Enable
`showCommonExtensions`

in Swagger UI to show additional validations like`maxLength`

, etc. PR[#1466](https://github.com/tiangolo/fastapi/pull/1466)by[@TiewKH](https://github.com/TiewKH). - Make
`OAuth2PasswordRequestFormStrict`

importable directly from`fastapi.security`

. PR[#1462](https://github.com/tiangolo/fastapi/pull/1462)by[@RichardHoekstra](https://github.com/RichardHoekstra). - Add docs about
[Default response class](https://fastapi.tiangolo.com/advanced/custom-response/#default-response-class). PR[#1455](https://github.com/tiangolo/fastapi/pull/1455)by[@TezRomacH](https://github.com/TezRomacH). - Add note in docs about additional parameters
`response_model_exclude_defaults`

and`response_model_exclude_none`

in[Response Model](https://fastapi.tiangolo.com/tutorial/response-model/#use-the-response_model_exclude_unset-parameter). PR[#1427](https://github.com/tiangolo/fastapi/pull/1427)by[@wshayes](https://github.com/wshayes). - Add note about
[PyCharm Pydantic plugin](https://github.com/koxudaxi/pydantic-pycharm-plugin)to docs. PR[#1420](https://github.com/tiangolo/fastapi/pull/1420)by[@koxudaxi](https://github.com/koxudaxi). - Update and clarify testing function name. PR
[#1395](https://github.com/tiangolo/fastapi/pull/1395)by[@chenl](https://github.com/chenl). - Fix duplicated headers created by indirect dependencies that use the request directly. PR
[#1386](https://github.com/tiangolo/fastapi/pull/1386)by[@obataku](https://github.com/obataku)from tests by[@scottsmith2gmail](https://github.com/scottsmith2gmail). - Upgrade Starlette version to
`0.13.4`

. PR[#1361](https://github.com/tiangolo/fastapi/pull/1361)by[@rushton](https://github.com/rushton). - Improve error handling and feedback for requests with invalid JSON. PR
[#1354](https://github.com/tiangolo/fastapi/pull/1354)by[@aviramha](https://github.com/aviramha). - Add support for declaring metadata for tags in OpenAPI. New docs at
[Tutorial - Metadata and Docs URLs - Metadata for tags](https://fastapi.tiangolo.com/tutorial/metadata/#metadata-for-tags). PR[#1348](https://github.com/tiangolo/fastapi/pull/1348)by[@thomas-maschler](https://github.com/thomas-maschler). - Add basic setup for Russian translations. PR
[#1566](https://github.com/tiangolo/fastapi/pull/1566). - Remove obsolete Chinese articles after adding official community translations. PR
[#1510](https://github.com/tiangolo/fastapi/pull/1510)by[@waynerv](https://github.com/waynerv). - Add
`__repr__`

for*path operation function*parameter helpers (like`Query`

,`Depends`

, etc) to simplify debugging. PR[#1560](https://github.com/tiangolo/fastapi/pull/1560)by[@rkbeatss](https://github.com/rkbeatss)and[@victorphoenix3](https://github.com/victorphoenix3).

## 0.56.1 (2020-06-12)[¶](#0561-2020-06-12)

- Add link to advanced docs from tutorial. PR
[#1512](https://github.com/tiangolo/fastapi/pull/1512)by[@kx-chen](https://github.com/kx-chen). - Remove internal unnecessary f-strings. PR
[#1526](https://github.com/tiangolo/fastapi/pull/1526)by[@kotamatsuoka](https://github.com/kotamatsuoka). - Add translation to Chinese for
[Query Parameters and String Validations - 查询参数和字符串校验](https://fastapi.tiangolo.com/zh/tutorial/query-params-str-validations/). PR[#1500](https://github.com/tiangolo/fastapi/pull/1500)by[@waynerv](https://github.com/waynerv). - Add translation to Chinese for
[Request Body - 请求体](https://fastapi.tiangolo.com/zh/tutorial/body/). PR[#1492](https://github.com/tiangolo/fastapi/pull/1492)by[@waynerv](https://github.com/waynerv). - Add translation to Chinese for
[Help FastAPI - Get Help - 帮助 FastAPI - 获取帮助](https://fastapi.tiangolo.com/zh/help-fastapi/). PR[#1465](https://github.com/tiangolo/fastapi/pull/1465)by[@waynerv](https://github.com/waynerv). - Add translation to Chinese for
[Query Parameters - 查询参数](https://fastapi.tiangolo.com/zh/tutorial/query-params/). PR[#1454](https://github.com/tiangolo/fastapi/pull/1454)by[@waynerv](https://github.com/waynerv). - Add translation to Chinese for
[Contributing - 开发 - 贡献](https://fastapi.tiangolo.com/zh/contributing/). PR[#1460](https://github.com/tiangolo/fastapi/pull/1460)by[@waynerv](https://github.com/waynerv). - Add translation to Chinese for
[Path Parameters - 路径参数](https://fastapi.tiangolo.com/zh/tutorial/path-params/). PR[#1453](https://github.com/tiangolo/fastapi/pull/1453)by[@waynerv](https://github.com/waynerv). - Add official Microsoft project generator for
[serving spaCy with FastAPI and Azure Cognitive Skills](https://github.com/microsoft/cookiecutter-spacy-fastapi)to[Project Generators](https://fastapi.tiangolo.com/project-generation/). PR[#1390](https://github.com/tiangolo/fastapi/pull/1390)by[@kabirkhan](https://github.com/kabirkhan). - Update docs in
[Python Types Intro](https://fastapi.tiangolo.com/python-types/)to include info about`Optional`

. Original PR[#1377](https://github.com/tiangolo/fastapi/pull/1377)by[@yaegassy](https://github.com/yaegassy). - Fix support for callable class dependencies with
`yield`

. PR[#1365](https://github.com/tiangolo/fastapi/pull/1365)by[@mrosales](https://github.com/mrosales). - Fix/remove incorrect error logging when a client sends invalid payloads. PR
[#1351](https://github.com/tiangolo/fastapi/pull/1351)by[@dbanty](https://github.com/dbanty). - Add translation to Chinese for
[First Steps - 第一步](https://fastapi.tiangolo.com/zh/tutorial/first-steps/). PR[#1323](https://github.com/tiangolo/fastapi/pull/1323)by[@waynerv](https://github.com/waynerv). - Fix generating OpenAPI for apps using callbacks with routers including Pydantic models. PR
[#1322](https://github.com/tiangolo/fastapi/pull/1322)by[@nsidnev](https://github.com/nsidnev). - Optimize internal regex performance in
`get_path_param_names()`

. PR[#1243](https://github.com/tiangolo/fastapi/pull/1243)by[@heckad](https://github.com/heckad). - Remove
`*,`

from functions in docs where it's not needed. PR[#1239](https://github.com/tiangolo/fastapi/pull/1239)by[@pankaj-giri](https://github.com/pankaj-giri). - Start translations for Italian. PR
[#1557](https://github.com/tiangolo/fastapi/pull/1557)by[@csr](https://github.com/csr).

## 0.56.0 (2020-06-11)[¶](#0560-2020-06-11)

- Add support for ASGI
`root_path`

:- Use
`root_path`

internally for mounted applications, so that OpenAPI and the docs UI works automatically without extra configurations and parameters. - Add new
`root_path`

parameter for`FastAPI`

applications to provide it in cases where it can be set with the command line (e.g. for Uvicorn and Hypercorn, with the parameter`--root-path`

). - Deprecate
`openapi_prefix`

parameter in favor of the new`root_path`

parameter. - Add new/updated docs for
[Sub Applications - Mounts](https://fastapi.tiangolo.com/advanced/sub-applications/), without`openapi_prefix`

(as it is now handled automatically). - Add new/updated docs for
[Behind a Proxy](https://fastapi.tiangolo.com/advanced/behind-a-proxy/), including how to setup a local testing proxy with Traefik and using`root_path`

. - Update docs for
[Extending OpenAPI](https://fastapi.tiangolo.com/advanced/extending-openapi/)with the new`openapi_prefix`

parameter passed (internally generated from`root_path`

). - Original PR
[#1199](https://github.com/tiangolo/fastapi/pull/1199)by[@iksteen](https://github.com/iksteen).

- Use
- Update new issue templates and docs:
[Help FastAPI - Get Help](https://fastapi.tiangolo.com/help-fastapi/). PR[#1531](https://github.com/tiangolo/fastapi/pull/1531). - Update GitHub action issue-manager. PR
[#1520](https://github.com/tiangolo/fastapi/pull/1520). - Add new links:
**English articles**:[Real-time Notifications with Python and Postgres](https://wuilly.com/2019/10/real-time-notifications-with-python-and-postgres/)by[Guillermo Cruz](https://wuilly.com/).[Microservice in Python using FastAPI](https://dev.to/paurakhsharma/microservice-in-python-using-fastapi-24cc)by[Paurakh Sharma Humagain](https://x.com/PaurakhSharma).[Build simple API service with Python FastAPI — Part 1](https://dev.to/cuongld2/build-simple-api-service-with-python-fastapi-part-1-581o)by[cuongld2](https://dev.to/cuongld2).[FastAPI + Zeit.co = 🚀](https://paulsec.github.io/posts/fastapi_plus_zeit_serverless_fu/)by[Paul Sec](https://x.com/PaulWebSec).[Build a web API from scratch with FastAPI - the workshop](https://dev.to/tiangolo/build-a-web-api-from-scratch-with-fastapi-the-workshop-2ehe)by[Sebastián Ramírez (tiangolo)](https://x.com/tiangolo).[Build a Secure Twilio Webhook with Python and FastAPI](https://www.twilio.com/blog/build-secure-twilio-webhook-python-fastapi)by[Twilio](https://www.twilio.com).[Using FastAPI with Django](https://www.stavros.io/posts/fastapi-with-django/)by[Stavros Korokithakis](https://x.com/Stavros).[Introducing Dispatch](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072)by[Netflix](https://netflixtechblog.com/).

**Podcasts**:**Talks**:- PR
[#1467](https://github.com/tiangolo/fastapi/pull/1467).

- Add translation to Chinese for
[Python Types Intro - Python 类型提示简介](https://fastapi.tiangolo.com/zh/python-types/). PR[#1197](https://github.com/tiangolo/fastapi/pull/1197)by[@waynerv](https://github.com/waynerv).

## 0.55.1 (2020-05-23)[¶](#0551-2020-05-23)

- Fix handling of enums with their own schema in path parameters. To support
[pydantic/pydantic#1432](https://github.com/pydantic/pydantic/pull/1432)in FastAPI. PR[#1463](https://github.com/tiangolo/fastapi/pull/1463).

## 0.55.0 (2020-05-23)[¶](#0550-2020-05-23)

- Allow enums to allow them to have their own schemas in OpenAPI. To support
[pydantic/pydantic#1432](https://github.com/pydantic/pydantic/pull/1432)in FastAPI. PR[#1461](https://github.com/tiangolo/fastapi/pull/1461). - Add links for funding through
[GitHub sponsors](https://github.com/sponsors/tiangolo). PR[#1425](https://github.com/tiangolo/fastapi/pull/1425). - Update issue template for for questions. PR
[#1344](https://github.com/tiangolo/fastapi/pull/1344)by[@retnikt](https://github.com/retnikt). - Update warning about storing passwords in docs. PR
[#1336](https://github.com/tiangolo/fastapi/pull/1336)by[@skorokithakis](https://github.com/skorokithakis). - Fix typo. PR
[#1326](https://github.com/tiangolo/fastapi/pull/1326)by[@chenl](https://github.com/chenl). - Add translation to Portuguese for
[Alternatives, Inspiration and Comparisons - Alternativas, Inspiração e Comparações](https://fastapi.tiangolo.com/pt/alternatives/). PR[#1325](https://github.com/tiangolo/fastapi/pull/1325)by[@Serrones](https://github.com/Serrones). - Fix 2 typos in docs. PR
[#1324](https://github.com/tiangolo/fastapi/pull/1324)by[@waynerv](https://github.com/waynerv). - Update CORS docs, fix correct default of
`max_age=600`

. PR[#1301](https://github.com/tiangolo/fastapi/pull/1301)by[@derekbekoe](https://github.com/derekbekoe). - Add translation of
[main page to Portuguese](https://fastapi.tiangolo.com/pt/). PR[#1300](https://github.com/tiangolo/fastapi/pull/1300)by[@Serrones](https://github.com/Serrones). - Re-word and clarify docs for extra info in fields. PR
[#1299](https://github.com/tiangolo/fastapi/pull/1299)by[@chris-allnutt](https://github.com/chris-allnutt). - Make sure the
`*`

in short features in the docs is consistent (after`.`

) in all languages. PR[#1424](https://github.com/tiangolo/fastapi/pull/1424). - Update order of execution for
`get_db`

in SQLAlchemy tutorial. PR[#1293](https://github.com/tiangolo/fastapi/pull/1293)by[@bcb](https://github.com/bcb). - Fix typos in Async docs. PR
[#1423](https://github.com/tiangolo/fastapi/pull/1423).

## 0.54.2 (2020-05-16)[¶](#0542-2020-05-16)

- Add translation to Spanish for
[Concurrency and async / await - Concurrencia y async / await](https://fastapi.tiangolo.com/es/async/). PR[#1290](https://github.com/tiangolo/fastapi/pull/1290)by[@alvaropernas](https://github.com/alvaropernas). - Remove obsolete vote link. PR
[#1289](https://github.com/tiangolo/fastapi/pull/1289)by[@donhui](https://github.com/donhui). - Allow disabling docs UIs by just disabling OpenAPI with
`openapi_url=None`

. New example in docs:[Advanced: Conditional OpenAPI](https://fastapi.tiangolo.com/advanced/conditional-openapi/). PR[#1421](https://github.com/tiangolo/fastapi/pull/1421). - Add translation to Portuguese for
[Benchmarks - Comparações](https://fastapi.tiangolo.com/pt/benchmarks/). PR[#1274](https://github.com/tiangolo/fastapi/pull/1274)by[@Serrones](https://github.com/Serrones). - Add translation to Portuguese for
[Tutorial - User Guide - Intro - Tutorial - Guia de Usuário - Introdução](https://fastapi.tiangolo.com/pt/tutorial/). PR[#1259](https://github.com/tiangolo/fastapi/pull/1259)by[@marcosmmb](https://github.com/marcosmmb). - Allow using Unicode in MkDocs for translations. PR
[#1419](https://github.com/tiangolo/fastapi/pull/1419). - Add translation to Spanish for
[Advanced User Guide - Intro - Guía de Usuario Avanzada - Introducción](https://fastapi.tiangolo.com/es/advanced/). PR[#1250](https://github.com/tiangolo/fastapi/pull/1250)by[@jfunez](https://github.com/jfunez). - Add translation to Portuguese for
[History, Design and Future - História, Design e Futuro](https://fastapi.tiangolo.com/pt/history-design-future/). PR[#1249](https://github.com/tiangolo/fastapi/pull/1249)by[@marcosmmb](https://github.com/marcosmmb). - Add translation to Portuguese for
[Features - Recursos](https://fastapi.tiangolo.com/pt/features/). PR[#1248](https://github.com/tiangolo/fastapi/pull/1248)by[@marcosmmb](https://github.com/marcosmmb). - Add translation to Spanish for
[Tutorial - User Guide - Intro - Tutorial - Guía de Usuario - Introducción](https://fastapi.tiangolo.com/es/tutorial/). PR[#1244](https://github.com/tiangolo/fastapi/pull/1244)by[@MartinEliasQ](https://github.com/MartinEliasQ). - Add translation to Chinese for
[Deployment - 部署](https://fastapi.tiangolo.com/zh/deployment/). PR[#1203](https://github.com/tiangolo/fastapi/pull/1203)by[@RunningIkkyu](https://github.com/RunningIkkyu). - Add translation to Chinese for
[Tutorial - User Guide - Intro - 教程 - 用户指南 - 简介](https://fastapi.tiangolo.com/zh/tutorial/). PR[#1202](https://github.com/tiangolo/fastapi/pull/1202)by[@waynerv](https://github.com/waynerv). - Add translation to Chinese for
[Features - 特性](https://fastapi.tiangolo.com/zh/features/). PR[#1192](https://github.com/tiangolo/fastapi/pull/1192)by[@Dustyposa](https://github.com/Dustyposa). - Add translation for
[main page to Chinese](https://fastapi.tiangolo.com/zh/)PR[#1191](https://github.com/tiangolo/fastapi/pull/1191)by[@waynerv](https://github.com/waynerv). - Update docs for project generation. PR
[#1287](https://github.com/tiangolo/fastapi/pull/1287). - Add Spanish translation for
[Introducción a los Tipos de Python (Python Types Intro)](https://fastapi.tiangolo.com/es/python-types/). PR[#1237](https://github.com/tiangolo/fastapi/pull/1237)by[@mariacamilagl](https://github.com/mariacamilagl). - Add Spanish translation for
[Características (Features)](https://fastapi.tiangolo.com/es/features/). PR[#1220](https://github.com/tiangolo/fastapi/pull/1220)by[@mariacamilagl](https://github.com/mariacamilagl).

## 0.54.1 (2020-04-08)[¶](#0541-2020-04-08)

- Update database test setup. PR
[#1226](https://github.com/tiangolo/fastapi/pull/1226). - Improve test debugging by showing response text in failing tests. PR
[#1222](https://github.com/tiangolo/fastapi/pull/1222)by[@samuelcolvin](https://github.com/samuelcolvin).

## 0.54.0 (2020-04-05)[¶](#0540-2020-04-05)

- Fix grammatical mistakes in async docs. PR
[#1188](https://github.com/tiangolo/fastapi/pull/1188)by[@mickeypash](https://github.com/mickeypash). - Add support for
`response_model_exclude_defaults`

and`response_model_exclude_none`

: - Add example about
[Testing a Database](https://fastapi.tiangolo.com/advanced/testing-database/). Initial PR[#1144](https://github.com/tiangolo/fastapi/pull/1144)by[@duganchen](https://github.com/duganchen). - Update docs for
[Development - Contributing: Translations](https://fastapi.tiangolo.com/contributing/#translations)including note about reviewing translation PRs.[#1215](https://github.com/tiangolo/fastapi/pull/1215). - Update log style in README.md for GitHub Markdown compatibility. PR
[#1200](https://github.com/tiangolo/fastapi/pull/1200)by[#geekgao](https://github.com/geekgao). - Add Python venv
`env`

to`.gitignore`

. PR[#1212](https://github.com/tiangolo/fastapi/pull/1212)by[@cassiobotaro](https://github.com/cassiobotaro). - Start Portuguese translations. PR
[#1210](https://github.com/tiangolo/fastapi/pull/1210)by[@cassiobotaro](https://github.com/cassiobotaro). - Update docs for Pydantic's
`Settings`

using a dependency with`@lru_cache()`

. PR[#1214](https://github.com/tiangolo/fastapi/pull/1214). - Add first translation to Spanish
[FastAPI](https://fastapi.tiangolo.com/es/). PR[#1201](https://github.com/tiangolo/fastapi/pull/1201)by[@mariacamilagl](https://github.com/mariacamilagl). - Add docs about
[Settings and Environment Variables](https://fastapi.tiangolo.com/advanced/settings/). Initial PR[1118](https://github.com/tiangolo/fastapi/pull/1118)by[@alexmitelman](https://github.com/alexmitelman).

## 0.53.2 (2020-03-30)[¶](#0532-2020-03-30)

- Fix automatic embedding of body fields for dependencies and sub-dependencies. Original PR
[#1079](https://github.com/tiangolo/fastapi/pull/1079)by[@Toad2186](https://github.com/Toad2186). - Fix dependency overrides in WebSocket testing. PR
[#1122](https://github.com/tiangolo/fastapi/pull/1122)by[@amitlissack](https://github.com/amitlissack). - Fix docs script to ensure languages are always sorted. PR
[#1189](https://github.com/tiangolo/fastapi/pull/1189). - Start translations for Chinese. PR
[#1187](https://github.com/tiangolo/fastapi/pull/1187)by[@RunningIkkyu](https://github.com/RunningIkkyu). - Add docs for
[Schema Extra - Example](https://fastapi.tiangolo.com/tutorial/schema-extra-example/). PR[#1185](https://github.com/tiangolo/fastapi/pull/1185).

## 0.53.1 (2020-03-29)[¶](#0531-2020-03-29)

- Fix included example after translations refactor. PR
[#1182](https://github.com/tiangolo/fastapi/pull/1182). - Add docs example for
`example`

in`Field`

. Docs at[Body - Fields: JSON Schema extras](https://fastapi.tiangolo.com/tutorial/body-fields/#json-schema-extras). PR[#1106](https://github.com/tiangolo/fastapi/pull/1106)by[@JohnPaton](https://github.com/JohnPaton). - Fix using recursive models in
`response_model`

. PR[#1164](https://github.com/tiangolo/fastapi/pull/1164)by[@voegtlel](https://github.com/voegtlel). - Add docs for
[Pycharm Debugging](https://fastapi.tiangolo.com/tutorial/debugging/). PR[#1096](https://github.com/tiangolo/fastapi/pull/1096)by[@youngquan](https://github.com/youngquan). - Fix typo in docs. PR
[#1148](https://github.com/tiangolo/fastapi/pull/1148)by[@PLNech](https://github.com/PLNech). - Update Windows development environment instructions. PR
[#1179](https://github.com/tiangolo/fastapi/pull/1179).

## 0.53.0 (2020-03-27)[¶](#0530-2020-03-27)

- Update test coverage badge. PR
[#1175](https://github.com/tiangolo/fastapi/pull/1175). - Add
`orjson`

to`pip install fastapi[all]`

. PR[#1161](https://github.com/tiangolo/fastapi/pull/1161)by[@michael0liver](https://github.com/michael0liver). - Fix included example for
`GZipMiddleware`

. PR[#1138](https://github.com/tiangolo/fastapi/pull/1138)by[@arimbr](https://github.com/arimbr). - Fix class name in docstring for
`OAuth2PasswordRequestFormStrict`

. PR[#1126](https://github.com/tiangolo/fastapi/pull/1126)by[@adg-mh](https://github.com/adg-mh). - Clarify function name in example in docs. PR
[#1121](https://github.com/tiangolo/fastapi/pull/1121)by[@tmsick](https://github.com/tmsick). - Add external link
[Apache Kafka producer and consumer with FastAPI and aiokafka](https://iwpnd.pw/articles/2020-03/apache-kafka-fastapi-geostream)to docs. PR[#1112](https://github.com/tiangolo/fastapi/pull/1112)by[@iwpnd](https://github.com/iwpnd). - Fix serialization when using
`by_alias`

or`exclude_unset`

and returning data with Pydantic models. PR[#1074](https://github.com/tiangolo/fastapi/pull/1074)by[@juhovh-aiven](https://github.com/juhovh-aiven). - Add Gitter chat to docs. PR
[#1061](https://github.com/tiangolo/fastapi/pull/1061)by[@aakashnand](https://github.com/aakashnand). - Update and simplify translations docs. PR
[#1171](https://github.com/tiangolo/fastapi/pull/1171). - Update development of FastAPI docs, set address to
`127.0.0.1`

to improve Windows support. PR[#1169](https://github.com/tiangolo/fastapi/pull/1169)by[@mariacamilagl](https://github.com/mariacamilagl). - Add support for docs translations. New docs:
[Development - Contributing: Docs: Translations](https://fastapi.tiangolo.com/contributing/#translations). PR[#1168](https://github.com/tiangolo/fastapi/pull/1168). - Update terminal styles in docs and add note about
. PR**Typer**, the FastAPI of CLIs[#1139](https://github.com/tiangolo/fastapi/pull/1139).

## 0.52.0 (2020-03-01)[¶](#0520-2020-03-01)

- Add new high-performance JSON response class using
`orjson`

. New docs:[Custom Response - HTML, Stream, File, others:](https://fastapi.tiangolo.com/advanced/custom-response/#use-orjsonresponse). PR`ORJSONResponse`

[#1065](https://github.com/tiangolo/fastapi/pull/1065).

## 0.51.0 (2020-03-01)[¶](#0510-2020-03-01)

- Re-export utils from Starlette:
- This allows using things like
`from fastapi.responses import JSONResponse`

instead of`from starlette.responses import JSONResponse`

. - It's mainly syntax sugar, a convenience for developer experience.
- Now
`Request`

,`Response`

,`WebSocket`

,`status`

can be imported directly from`fastapi`

as in`from fastapi import Response`

. This is because those are frequently used, to use the request directly, to set headers and cookies, to get status codes, etc. - Documentation changes in many places, but new docs and noticeable improvements:
- PR
[#1064](https://github.com/tiangolo/fastapi/pull/1064).

- This allows using things like

## 0.50.0 (2020-02-29)[¶](#0500-2020-02-29)

- Add link to Release Notes from docs about pinning versions for deployment. PR
[#1058](https://github.com/tiangolo/fastapi/pull/1058). - Upgrade code to use the latest version of Starlette, including:
- Several bug fixes.
- Optional redirects of slashes, with or without ending in
`/`

. - Events for routers,
`"startup"`

, and`"shutdown"`

. - PR
[#1057](https://github.com/tiangolo/fastapi/pull/1057).

- Add docs about pinning FastAPI versions for deployment:
[Deployment: FastAPI versions](https://fastapi.tiangolo.com/deployment/#fastapi-versions). PR[#1056](https://github.com/tiangolo/fastapi/pull/1056).

## 0.49.2 (2020-02-29)[¶](#0492-2020-02-29)

- Fix links in release notes. PR
[#1052](https://github.com/tiangolo/fastapi/pull/1052)by[@sattosan](https://github.com/sattosan). - Fix typo in release notes. PR
[#1051](https://github.com/tiangolo/fastapi/pull/1051)by[@sattosan](https://github.com/sattosan). - Refactor/clarify
`serialize_response`

parameter name to avoid confusion. PR[#1031](https://github.com/tiangolo/fastapi/pull/1031)by[@patrickmckenna](https://github.com/patrickmckenna). - Refactor calling each a path operation's handler function in an isolated function, to simplify profiling. PR
[#1027](https://github.com/tiangolo/fastapi/pull/1027)by[@sm-Fifteen](https://github.com/sm-Fifteen). - Add missing dependencies for testing. PR
[#1026](https://github.com/tiangolo/fastapi/pull/1026)by[@sm-Fifteen](https://github.com/sm-Fifteen). - Fix accepting valid types for response models, including Python types like
`List[int]`

. PR[#1017](https://github.com/tiangolo/fastapi/pull/1017)by[@patrickmckenna](https://github.com/patrickmckenna). - Fix format in SQL tutorial. PR
[#1015](https://github.com/tiangolo/fastapi/pull/1015)by[@vegarsti](https://github.com/vegarsti).

## 0.49.1 (2020-02-28)[¶](#0491-2020-02-28)

- Fix path operation duplicated parameters when used in dependencies and the path operation function. PR
[#994](https://github.com/tiangolo/fastapi/pull/994)by[@merowinger92](https://github.com/merowinger92). - Update Netlify previews deployment GitHub action as the fix is already merged and there's a new release. PR
[#1047](https://github.com/tiangolo/fastapi/pull/1047). - Move mypy configurations to config file. PR
[#987](https://github.com/tiangolo/fastapi/pull/987)by[@hukkinj1](https://github.com/hukkinj1). - Temporary fix to Netlify previews not deployable from PRs from forks. PR
[#1046](https://github.com/tiangolo/fastapi/pull/1046)by[@mariacamilagl](https://github.com/mariacamilagl).

## 0.49.0 (2020-02-16)[¶](#0490-2020-02-16)

- Fix encoding of
`pathlib`

paths in`jsonable_encoder`

. PR[#978](https://github.com/tiangolo/fastapi/pull/978)by[@patrickmckenna](https://github.com/patrickmckenna). - Add articles to
[External Links](https://fastapi.tiangolo.com/external-links/):[PythonのWeb frameworkのパフォーマンス比較 (Django, Flask, responder, FastAPI, japronto)](https://qiita.com/bee2/items/0ad260ab9835a2087dae)and[[FastAPI] Python製のASGI Web フレームワーク FastAPIに入門する](https://qiita.com/bee2/items/75d9c0d7ba20e7a4a0e9). PR[#974](https://github.com/tiangolo/fastapi/pull/974)by[@tokusumi](https://github.com/tokusumi). - Fix broken links in docs. PR
[#949](https://github.com/tiangolo/fastapi/pull/949)by[@tsotnikov](https://github.com/tsotnikov). - Fix small typos. PR
[#941](https://github.com/tiangolo/fastapi/pull/941)by[@NikitaKolesov](https://github.com/NikitaKolesov). - Update and clarify docs for dependencies with
`yield`

. PR[#986](https://github.com/tiangolo/fastapi/pull/986). - Add Mermaid JS support for diagrams in docs. Add first diagrams to
[Dependencies: First Steps](https://fastapi.tiangolo.com/tutorial/dependencies/)and[Dependencies with](https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-with-yield/#dependencies-with-yield-and-httpexception). PR`yield`

and`HTTPException`

[#985](https://github.com/tiangolo/fastapi/pull/985). - Update CI to run docs deployment in GitHub actions. PR
[#983](https://github.com/tiangolo/fastapi/pull/983). - Allow
`callable`

s in*path operation functions*, like functions modified with`functools.partial`

. PR[#977](https://github.com/tiangolo/fastapi/pull/977).

## 0.48.0 (2020-02-04)[¶](#0480-2020-02-04)

- Run linters first in tests to error out faster. PR
[#948](https://github.com/tiangolo/fastapi/pull/948). - Log warning about
`email-validator`

only when used. PR[#946](https://github.com/tiangolo/fastapi/pull/946). - Simplify
[Peewee docs](https://fastapi.tiangolo.com/advanced/sql-databases-peewee/)with double dependency with`yield`

. PR[#947](https://github.com/tiangolo/fastapi/pull/947). - Add article
[External Links](https://fastapi.tiangolo.com/external-links/):[Create and Deploy FastAPI app to Heroku](https://www.tutlinks.com/create-and-deploy-fastapi-app-to-heroku/). PR[#942](https://github.com/tiangolo/fastapi/pull/942)by[@windson](https://github.com/windson). - Update description of Sanic, as it is now ASGI too. PR
[#932](https://github.com/tiangolo/fastapi/pull/932)by[@raphaelauv](https://github.com/raphaelauv). - Fix typo in main page. PR
[#920](https://github.com/tiangolo/fastapi/pull/920)by[@mMarzeta](https://github.com/mMarzeta). - Fix parsing of possibly invalid bodies. PR
[#918](https://github.com/tiangolo/fastapi/pull/918)by[@dmontagu](https://github.com/dmontagu). - Fix typo
[#916](https://github.com/tiangolo/fastapi/pull/916)by[@adursun](https://github.com/adursun). - Allow
`Any`

type for enums in OpenAPI. PR[#906](https://github.com/tiangolo/fastapi/pull/906)by[@songzhi](https://github.com/songzhi). - Add article to
[External Links](https://fastapi.tiangolo.com/external-links/):[How to continuously deploy a FastAPI to AWS Lambda with AWS SAM](https://iwpnd.pw/articles/2020-01/deploy-fastapi-to-aws-lambda). PR[#901](https://github.com/tiangolo/fastapi/pull/901)by[@iwpnd](https://github.com/iwpnd). - Add note about using Body parameters without Pydantic. PR
[#900](https://github.com/tiangolo/fastapi/pull/900)by[@pawamoy](https://github.com/pawamoy). - Fix Pydantic field clone logic. PR
[#899](https://github.com/tiangolo/fastapi/pull/899)by[@deuce2367](https://github.com/deuce2367). - Fix link in middleware docs. PR
[#893](https://github.com/tiangolo/fastapi/pull/893)by[@linchiwei123](https://github.com/linchiwei123). - Rename default API title from "Fast API" to "FastAPI" for consistency. PR
[#890](https://github.com/tiangolo/fastapi/pull/890).

## 0.47.1 (2020-01-18)[¶](#0471-2020-01-18)

- Fix model filtering in
`response_model`

, cloning sub-models. PR[#889](https://github.com/tiangolo/fastapi/pull/889). - Fix FastAPI serialization of Pydantic models using ORM mode blocking the event loop. PR
[#888](https://github.com/tiangolo/fastapi/pull/888).

## 0.47.0 (2020-01-18)[¶](#0470-2020-01-18)

- Refactor documentation to make a simpler and shorter
[Tutorial - User Guide](https://fastapi.tiangolo.com/tutorial/)and an additional[Advanced User Guide](https://fastapi.tiangolo.com/advanced/)with all the additional docs. PR[#887](https://github.com/tiangolo/fastapi/pull/887). - Tweak external links, Markdown format, typos. PR
[#881](https://github.com/tiangolo/fastapi/pull/881). - Fix bug in tutorial handling HTTP Basic Auth
`username`

and`password`

. PR[#865](https://github.com/tiangolo/fastapi/pull/865)by[@isaevpd](https://github.com/isaevpd). - Fix handling form
*path operation*parameters declared with pure classes like`list`

,`tuple`

, etc. PR[#856](https://github.com/tiangolo/fastapi/pull/856)by[@nsidnev](https://github.com/nsidnev). - Add request
`body`

to`RequestValidationError`

, new docs:[Use the](https://fastapi.tiangolo.com/tutorial/handling-errors/#use-the-requestvalidationerror-body). Initial PR`RequestValidationError`

body[#853](https://github.com/tiangolo/fastapi/pull/853)by[@aviramha](https://github.com/aviramha). - Update
[External Links](https://fastapi.tiangolo.com/external-links/)with new links and dynamic GitHub projects with`fastapi`

topic. PR[#850](https://github.com/tiangolo/fastapi/pull/850). - Fix Peewee
`contextvars`

handling in docs:[SQL (Relational) Databases with Peewee](https://fastapi.tiangolo.com/advanced/sql-databases-peewee/). PR[#879](https://github.com/tiangolo/fastapi/pull/879). - Setup development environment with Python's Venv and Flit, instead of requiring the extra Pipenv duplicating dependencies. Updated docs:
[Development - Contributing](https://fastapi.tiangolo.com/contributing/). PR[#877](https://github.com/tiangolo/fastapi/pull/877). - Update docs for
[HTTP Basic Auth](https://fastapi.tiangolo.com/advanced/security/http-basic-auth/)to improve security against timing attacks. Initial PR[#807](https://github.com/tiangolo/fastapi/pull/807)by[@zwass](https://github.com/zwass).

## 0.46.0 (2020-01-08)[¶](#0460-2020-01-08)

- Fix typos and tweak configs. PR
[#837](https://github.com/tiangolo/fastapi/pull/837). - Add link to Chinese article in
[External Links](https://fastapi.tiangolo.com/external-links/). PR[810](https://github.com/tiangolo/fastapi/pull/810)by[@wxq0309](https://github.com/wxq0309). - Implement
`OAuth2AuthorizationCodeBearer`

class. PR[#797](https://github.com/tiangolo/fastapi/pull/797)by[@kuwv](https://github.com/kuwv). - Update example upgrade in docs main page. PR
[#795](https://github.com/tiangolo/fastapi/pull/795)by[@cdeil](https://github.com/cdeil). - Fix callback handling for sub-routers. PR
[#792](https://github.com/tiangolo/fastapi/pull/792)by[@jekirl](https://github.com/jekirl). - Fix typos. PR
[#784](https://github.com/tiangolo/fastapi/pull/784)by[@kkinder](https://github.com/kkinder). - Add 4 Japanese articles to
[External Links](https://fastapi.tiangolo.com/external-links/). PR[#783](https://github.com/tiangolo/fastapi/pull/783)by[@HymanZHAN](https://github.com/HymanZHAN). - Add support for subtypes of main types in
`jsonable_encoder`

, e.g. asyncpg's UUIDs. PR[#756](https://github.com/tiangolo/fastapi/pull/756)by[@RmStorm](https://github.com/RmStorm). - Fix usage of Pydantic's
`HttpUrl`

in docs. PR[#832](https://github.com/tiangolo/fastapi/pull/832)by[@Dustyposa](https://github.com/Dustyposa). - Fix Twitter links in docs. PR
[#813](https://github.com/tiangolo/fastapi/pull/813)by[@justindujardin](https://github.com/justindujardin). - Add docs for correctly
[using FastAPI with Peewee ORM](https://fastapi.tiangolo.com/advanced/sql-databases-peewee/). Including how to overwrite parts of Peewee to correctly handle async threads. PR[#789](https://github.com/tiangolo/fastapi/pull/789).

## 0.45.0 (2019-12-11)[¶](#0450-2019-12-11)

- Add support for OpenAPI Callbacks:
- New docs:
[OpenAPI Callbacks](https://fastapi.tiangolo.com/advanced/openapi-callbacks/). - Refactor generation of
`operationId`

s to be valid Python names (also valid variables in most languages). - Add
`default_response_class`

parameter to`APIRouter`

. - Original PR
[#722](https://github.com/tiangolo/fastapi/pull/722)by[@booooh](https://github.com/booooh).

- New docs:
- Refactor logging to use the same logger everywhere, update log strings and levels. PR
[#781](https://github.com/tiangolo/fastapi/pull/781). - Add article to
[External Links](https://fastapi.tiangolo.com/external-links/):[Почему Вы должны попробовать FastAPI?](https://habr.com/ru/post/478620/). PR[#766](https://github.com/tiangolo/fastapi/pull/766)by[@prostomarkeloff](https://github.com/prostomarkeloff). - Remove gender bias in docs for handling errors. PR
[#780](https://github.com/tiangolo/fastapi/pull/780). Original idea in PR[#761](https://github.com/tiangolo/fastapi/pull/761)by[@classywhetten](https://github.com/classywhetten). - Rename docs and references to
`body-schema`

to`body-fields`

to keep in line with Pydantic. PR[#746](https://github.com/tiangolo/fastapi/pull/746)by[@prostomarkeloff](https://github.com/prostomarkeloff).

## 0.44.1 (2019-12-04)[¶](#0441-2019-12-04)

- Add GitHub social preview images to git. PR
[#752](https://github.com/tiangolo/fastapi/pull/752). - Update PyPI "trove classifiers". PR
[#751](https://github.com/tiangolo/fastapi/pull/751). - Add full support for Python 3.8. Enable Python 3.8 in full in Travis. PR
[749](https://github.com/tiangolo/fastapi/pull/749). - Update "new issue" templates. PR
[#749](https://github.com/tiangolo/fastapi/pull/749). - Fix serialization of errors for exotic Pydantic types. PR
[#748](https://github.com/tiangolo/fastapi/pull/748)by[@dmontagu](https://github.com/dmontagu).

## 0.44.0 (2019-11-27)[¶](#0440-2019-11-27)

- Add GitHub action
[Issue Manager](https://github.com/tiangolo/issue-manager). PR[#742](https://github.com/tiangolo/fastapi/pull/742). - Fix typos in docs. PR
[734](https://github.com/tiangolo/fastapi/pull/734)by[@bundabrg](https://github.com/bundabrg). - Fix usage of
`custom_encoder`

in`jsonable_encoder`

. PR[#715](https://github.com/tiangolo/fastapi/pull/715)by[@matrixise](https://github.com/matrixise). - Fix invalid XML example. PR
[710](https://github.com/tiangolo/fastapi/pull/710)by[@OcasoProtal](https://github.com/OcasoProtal). - Fix typos and update wording in deployment docs. PR
[#700](https://github.com/tiangolo/fastapi/pull/700)by[@marier-nico](https://github.com/tiangolo/fastapi/pull/700). - Add note about dependencies in
`APIRouter`

docs. PR[#698](https://github.com/tiangolo/fastapi/pull/698)by[@marier-nico](https://github.com/marier-nico). - Add support for async class methods as dependencies
[#681](https://github.com/tiangolo/fastapi/pull/681)by[@frankie567](https://github.com/frankie567). - Add FastAPI with Swagger UI cheatsheet to external links. PR
[#671](https://github.com/tiangolo/fastapi/pull/671)by[@euri10](https://github.com/euri10). - Fix typo in HTTP protocol in CORS example. PR
[#647](https://github.com/tiangolo/fastapi/pull/647)by[@forestmonster](https://github.com/forestmonster). - Add support for Pydantic versions
`1.0.0`

and above, with temporary (deprecated) backwards compatibility for Pydantic`0.32.2`

. PR[#646](https://github.com/tiangolo/fastapi/pull/646)by[@dmontagu](https://github.com/dmontagu).

## 0.43.0 (2019-11-24)[¶](#0430-2019-11-24)

- Update docs to reduce gender bias. PR
[#645](https://github.com/tiangolo/fastapi/pull/645)by[@ticosax](https://github.com/ticosax). - Add docs about
[overriding the](https://fastapi.tiangolo.com/advanced/path-operation-advanced-configuration/#using-the-path-operation-function-name-as-the-operationid)based on their function name. PR`operationId`

for all the*path operations*[#642](https://github.com/tiangolo/fastapi/pull/642)by[@SKalt](https://github.com/SKalt). - Fix validators in models generating an incorrect key order. PR
[#637](https://github.com/tiangolo/fastapi/pull/637)by[@jaddison](https://github.com/jaddison). - Generate correct OpenAPI docs for responses with no content. PR
[#621](https://github.com/tiangolo/fastapi/pull/621)by[@brotskydotcom](https://github.com/brotskydotcom). - Remove
`$`

from Bash code blocks in docs for consistency. PR[#613](https://github.com/tiangolo/fastapi/pull/613)by[@nstapelbroek](https://github.com/nstapelbroek). - Add docs for
[self-serving docs' (Swagger UI) static assets](https://fastapi.tiangolo.com/advanced/extending-openapi/#self-hosting-javascript-and-css-for-docs), e.g. to use the docs offline, or without Internet. Initial PR[#557](https://github.com/tiangolo/fastapi/pull/557)by[@svalouch](https://github.com/svalouch). - Fix
`black`

linting after upgrade. PR[#682](https://github.com/tiangolo/fastapi/pull/682)by[@frankie567](https://github.com/frankie567).

## 0.42.0 (2019-10-09)[¶](#0420-2019-10-09)

- Add dependencies with
`yield`

, a.k.a. exit steps, context managers, cleanup, teardown, ...- This allows adding extra code after a dependency is done. It can be used, for example, to close database connections.
- Dependencies with
`yield`

can be normal or`async`

,**FastAPI**will run normal dependencies in a threadpool. - They can be combined with normal dependencies.
- It's possible to have arbitrary trees/levels of dependencies with
`yield`

and exit steps are handled in the correct order automatically. - It works by default in Python 3.7 or above. For Python 3.6, it requires the extra backport dependencies:
`async-exit-stack`

`async-generator`


- New docs at
[Dependencies with](https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-with-yield/).`yield`

- Updated database docs
[SQL (Relational) Databases: Main](https://fastapi.tiangolo.com/tutorial/sql-databases/#main-fastapi-app).**FastAPI**app - PR
[#595](https://github.com/tiangolo/fastapi/pull/595).

- Fix
`sitemap.xml`

in website. PR[#598](https://github.com/tiangolo/fastapi/pull/598)by[@samuelcolvin](https://github.com/samuelcolvin).

## 0.41.0 (2019-10-07)[¶](#0410-2019-10-07)

- Upgrade required Starlette to
`0.12.9`

, the new range is`>=0.12.9,<=0.12.9`

.- Add
`State`

to FastAPI apps at`app.state`

. - PR
[#593](https://github.com/tiangolo/fastapi/pull/593).

- Add
- Improve handling of custom classes for
`Request`

s and`APIRoute`

s.- This helps to more easily solve use cases like:
- Reading a body before and/or after a request (equivalent to a middleware).
- Run middleware-like code only for a subset of
*path operations*. - Process a request before passing it to a
*path operation function*. E.g. decompressing, deserializing, etc. - Processing a response after being generated by
*path operation functions*but before returning it. E.g. adding custom headers, logging, adding extra metadata.

- New docs section:
[Custom Request and APIRoute class](https://fastapi.tiangolo.com/advanced/custom-request-and-route/). - PR
[#589](https://github.com/tiangolo/fastapi/pull/589)by[@dmontagu](https://github.com/dmontagu).

- This helps to more easily solve use cases like:
- Fix preserving custom route class in routers when including other sub-routers. PR
[#538](https://github.com/tiangolo/fastapi/pull/538)by[@dmontagu](https://github.com/dmontagu).

## 0.40.0 (2019-10-04)[¶](#0400-2019-10-04)

- Add notes to docs about installing
`python-multipart`

when using forms. PR[#574](https://github.com/tiangolo/fastapi/pull/574)by[@sliptonic](https://github.com/sliptonic). - Generate OpenAPI schemas in alphabetical order. PR
[#554](https://github.com/tiangolo/fastapi/pull/554)by[@dmontagu](https://github.com/dmontagu). - Add support for truncating docstrings from
*path operation functions*.- New docs at
[Advanced description from docstring](https://fastapi.tiangolo.com/advanced/path-operation-advanced-configuration/#advanced-description-from-docstring). - PR
[#556](https://github.com/tiangolo/fastapi/pull/556)by[@svalouch](https://github.com/svalouch).

- New docs at
- Fix
`DOCTYPE`

in HTML files generated for Swagger UI and ReDoc. PR[#537](https://github.com/tiangolo/fastapi/pull/537)by[@Trim21](https://github.com/Trim21). - Fix handling
`4XX`

responses overriding default`422`

validation error responses. PR[#517](https://github.com/tiangolo/fastapi/pull/517)by[@tsouvarev](https://github.com/tsouvarev). - Fix typo in documentation for
[Simple HTTP Basic Auth](https://fastapi.tiangolo.com/advanced/security/http-basic-auth/#simple-http-basic-auth). PR[#514](https://github.com/tiangolo/fastapi/pull/514)by[@prostomarkeloff](https://github.com/prostomarkeloff). - Fix incorrect documentation example in
[first steps](https://fastapi.tiangolo.com/tutorial/first-steps/). PR[#511](https://github.com/tiangolo/fastapi/pull/511)by[@IgnatovFedor](https://github.com/IgnatovFedor). - Add support for Swagger UI
[initOauth](https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/oauth2.md)settings with the parameter`swagger_ui_init_oauth`

. PR[#499](https://github.com/tiangolo/fastapi/pull/499)by[@zamiramir](https://github.com/zamiramir).

## 0.39.0 (2019-09-29)[¶](#0390-2019-09-29)

- Allow path parameters to have default values (e.g.
`None`

) and discard them instead of raising an error.- This allows declaring a parameter like
`user_id: str = None`

that can be taken from a query parameter, but the same*path operation*can be included in a router with a path`/users/{user_id}`

, in which case will be taken from the path and will be required. - PR
[#464](https://github.com/tiangolo/fastapi/pull/464)by[@jonathanunderwood](https://github.com/jonathanunderwood).

- This allows declaring a parameter like
- Add support for setting a
`default_response_class`

in the`FastAPI`

instance or in`include_router`

. Initial PR[#467](https://github.com/tiangolo/fastapi/pull/467)by[@toppk](https://github.com/toppk). - Add support for type annotations using strings and
`from __future__ import annotations`

. PR[#451](https://github.com/tiangolo/fastapi/pull/451)by[@dmontagu](https://github.com/dmontagu).

## 0.38.1 (2019-09-01)[¶](#0381-2019-09-01)

- Fix incorrect
`Request`

class import. PR[#493](https://github.com/tiangolo/fastapi/pull/493)by[@kamalgill](https://github.com/kamalgill).

## 0.38.0 (2019-08-31)[¶](#0380-2019-08-31)

- Add recent articles to
[External Links](https://fastapi.tiangolo.com/external-links/)and recent opinions. PR[#490](https://github.com/tiangolo/fastapi/pull/490). - Upgrade support range for Starlette to include
`0.12.8`

. The new range is`>=0.11.1,<=0.12.8"`

. PR[#477](https://github.com/tiangolo/fastapi/pull/477)by[@dmontagu](https://github.com/dmontagu). - Upgrade support to Pydantic version 0.32.2 and update internal code to use it (breaking change). PR
[#463](https://github.com/tiangolo/fastapi/pull/463)by[@dmontagu](https://github.com/dmontagu).

## 0.37.0 (2019-08-31)[¶](#0370-2019-08-31)

- Add support for custom route classes for advanced use cases. PR
[#468](https://github.com/tiangolo/fastapi/pull/468)by[@dmontagu](https://github.com/dmontagu). - Allow disabling Google fonts in ReDoc. PR
[#481](https://github.com/tiangolo/fastapi/pull/481)by[@b1-luettje](https://github.com/b1-luettje). - Fix security issue: when returning a sub-class of a response model and using
`skip_defaults`

it could leak information. PR[#485](https://github.com/tiangolo/fastapi/pull/485)by[@dmontagu](https://github.com/dmontagu). - Enable tests for Python 3.8-dev. PR
[#465](https://github.com/tiangolo/fastapi/pull/465)by[@Jamim](https://github.com/Jamim). - Add support and tests for Pydantic dataclasses in
`response_model`

. PR[#454](https://github.com/tiangolo/fastapi/pull/454)by[@dconathan](https://github.com/dconathan). - Fix typo in OAuth2 JWT tutorial. PR
[#447](https://github.com/tiangolo/fastapi/pull/447)by[@pablogamboa](https://github.com/pablogamboa). - Use the
`media_type`

parameter in`Body()`

params to set the media type in OpenAPI for`requestBody`

. PR[#439](https://github.com/tiangolo/fastapi/pull/439)by[@divums](https://github.com/divums). - Add article
[Deploying a scikit-learn model with ONNX and FastAPI](https://medium.com/@nico.axtmann95/deploying-a-scikit-learn-model-with-onnx-und-fastapi-1af398268915)by[Nico Axtmann](https://www.linkedin.com/in/nico-axtmann). PR[#438](https://github.com/tiangolo/fastapi/pull/438)by[@naxty](https://github.com/naxty). - Allow setting custom
`422`

(validation error) response/schema in OpenAPI. - Fix using
`"default"`

extra response with status codes at the same time. PR[#489](https://github.com/tiangolo/fastapi/pull/489). - Allow additional responses to use status code ranges (like
`5XX`

and`4XX`

) and`"default"`

. PR[#435](https://github.com/tiangolo/fastapi/pull/435)by[@divums](https://github.com/divums).

## 0.36.0 (2019-08-26)[¶](#0360-2019-08-26)

- Fix implementation for
`skip_defaults`

when returning a Pydantic model. PR[#422](https://github.com/tiangolo/fastapi/pull/422)by[@dmontagu](https://github.com/dmontagu). - Fix OpenAPI generation when using the same dependency in multiple places for the same
*path operation*. PR[#417](https://github.com/tiangolo/fastapi/pull/417)by[@dmontagu](https://github.com/dmontagu). - Allow having empty paths in
*path operations*used with`include_router`

and a`prefix`

. - Fix mypy error after merging PR #415. PR
[#462](https://github.com/tiangolo/fastapi/pull/462).

## 0.35.0 (2019-08-08)[¶](#0350-2019-08-08)

- Fix typo in routing
`assert`

. PR[#419](https://github.com/tiangolo/fastapi/pull/419)by[@pablogamboa](https://github.com/pablogamboa). - Fix typo in docs. PR
[#411](https://github.com/tiangolo/fastapi/pull/411)by[@bronsen](https://github.com/bronsen). - Fix parsing a body type declared with
`Union`

. PR[#400](https://github.com/tiangolo/fastapi/pull/400)by[@koxudaxi](https://github.com/koxudaxi).

## 0.34.0 (2019-08-06)[¶](#0340-2019-08-06)

-
Upgrade Starlette supported range to include the latest

`0.12.7`

. The new range is`0.11.1,<=0.12.7`

. PR[#367](https://github.com/tiangolo/fastapi/pull/367)by[@dedsm](https://github.com/dedsm). -
Add test for OpenAPI schema with duplicate models from PR

[#333](https://github.com/tiangolo/fastapi/pull/333)by[@dmontagu](https://github.com/dmontagu). PR[#385](https://github.com/tiangolo/fastapi/pull/385).

## 0.33.0 (2019-07-13)[¶](#0330-2019-07-13)

## 0.32.0 (2019-07-12)[¶](#0320-2019-07-12)

-
Fix typo in docs for features. PR

[#380](https://github.com/tiangolo/fastapi/pull/380)by[@MartinoMensio](https://github.com/MartinoMensio). -
Fix source code

`limit`

for example in[Query Parameters](https://fastapi.tiangolo.com/tutorial/query-params/). PR[#366](https://github.com/tiangolo/fastapi/pull/366)by[@Smashman](https://github.com/Smashman). -
Update wording in docs about

[OAuth2 scopes](https://fastapi.tiangolo.com/advanced/security/oauth2-scopes/). PR[#371](https://github.com/tiangolo/fastapi/pull/371)by[@cjw296](https://github.com/cjw296). -
Update docs for

`Enum`

s to inherit from`str`

and improve Swagger UI rendering. PR[#351](https://github.com/tiangolo/fastapi/pull/351). -
Fix regression, add Swagger UI deep linking again. PR

[#350](https://github.com/tiangolo/fastapi/pull/350). -
Add test for having path templates in

`prefix`

of`.include_router`

. PR[#349](https://github.com/tiangolo/fastapi/pull/349). -
Add note to docs:

[Include the same router multiple times with different](https://fastapi.tiangolo.com/tutorial/bigger-applications/#include-the-same-router-multiple-times-with-different-prefix). PR`prefix`

[#348](https://github.com/tiangolo/fastapi/pull/348). -
Fix OpenAPI/JSON Schema generation for two functions with the same name (in different modules) with the same composite bodies.

- Composite bodies' IDs are now based on path, not only on route name, as the auto-generated name uses the function names, that can be duplicated in different modules.
- The same new ID generation applies to response models.
- This also changes the generated title for those models.
- Only composite bodies and response models are affected because those are generated dynamically, they don't have a module (a Python file).
- This also adds the possibility of using
`.include_router()`

with the same`APIRouter`

*multiple*times, with different prefixes, e.g.`/api/v2`

and`/api/latest`

, and it will now work correctly. - PR
[#347](https://github.com/tiangolo/fastapi/pull/347).


## 0.31.0 (2019-06-28)[¶](#0310-2019-06-28)

- Upgrade Pydantic supported version to
`0.29.0`

.- New supported version range is
`"pydantic >=0.28,<=0.29.0"`

. - This adds support for Pydantic
[Generic Models](https://docs.pydantic.dev/latest/#generic-models), kudos to[@dmontagu](https://github.com/dmontagu). - PR
[#344](https://github.com/tiangolo/fastapi/pull/344).

- New supported version range is

## 0.30.1 (2019-06-28)[¶](#0301-2019-06-28)

-
Add section in docs about

[External Links and Articles](https://fastapi.tiangolo.com/external-links/). PR[#341](https://github.com/tiangolo/fastapi/pull/341). -
Remove

`Pipfile.lock`

from the repository as it is only used by FastAPI contributors (developers of FastAPI itself). See the PR for more details. PR[#340](https://github.com/tiangolo/fastapi/pull/340). -
Update section about

[Help FastAPI - Get Help](https://fastapi.tiangolo.com/help-fastapi/). PR[#339](https://github.com/tiangolo/fastapi/pull/339). -
Refine internal type declarations to improve/remove Mypy errors in users' code. PR

[#338](https://github.com/tiangolo/fastapi/pull/338). -
Update and clarify

[SQL tutorial with SQLAlchemy](https://fastapi.tiangolo.com/tutorial/sql-databases/). PR[#331](https://github.com/tiangolo/fastapi/pull/331)by[@mariacamilagl](https://github.com/mariacamilagl). -
Add SQLite

[online viewers to the docs](https://fastapi.tiangolo.com/tutorial/sql-databases/#interact-with-the-database-directly). PR[#330](https://github.com/tiangolo/fastapi/pull/330)by[@cyrilbois](https://github.com/cyrilbois).

## 0.30.0 (2019-06-20)[¶](#0300-2019-06-20)

-
Add support for Pydantic's ORM mode:

- Updated documentation about SQL with SQLAlchemy, using Pydantic models with ORM mode, SQLAlchemy models with relations, separation of files, simplification of code and other changes. New docs:
[SQL (Relational) Databases](https://fastapi.tiangolo.com/tutorial/sql-databases/). - The new support for ORM mode fixes issues/adds features related to ORMs with lazy-loading, hybrid properties, dynamic/getters (using
`@property`

decorators) and several other use cases. - This applies to ORMs like SQLAlchemy, Peewee, Tortoise ORM, GINO ORM and virtually any other.
- If your
*path operations*return an arbitrary object with attributes (e.g.`my_item.name`

instead of`my_item["name"]`

) AND you use a`response_model`

, make sure to update the Pydantic models with`orm_mode = True`

as described in the docs (link above). - New documentation about receiving plain
`dict`

s as request bodies:[Bodies of arbitrary](https://fastapi.tiangolo.com/tutorial/body-nested-models/#bodies-of-arbitrary-dicts).`dict`

s - New documentation about returning arbitrary
`dict`

s in responses:[Response with arbitrary](https://fastapi.tiangolo.com/tutorial/extra-models/#response-with-arbitrary-dict).`dict`

**Technical Details**:- When declaring a
`response_model`

it is used directly to generate the response content, from whatever was returned from the*path operation function*. - Before this, the return content was first passed through
`jsonable_encoder`

to ensure it was a "jsonable" object, like a`dict`

, instead of an arbitrary object with attributes (like an ORM model). That's why you should make sure to update your Pydantic models for objects with attributes to use`orm_mode = True`

. - If you don't have a
`response_model`

, the return object will still be passed through`jsonable_encoder`

first. - When a
`response_model`

is declared, the same`response_model`

type declaration won't be used as is, it will be "cloned" to create an new one (a cloned Pydantic`Field`

with all the submodels cloned as well). - This avoids/fixes a potential security issue: as the returned object is passed directly to Pydantic, if the returned object was a subclass of the
`response_model`

(e.g. you return a`UserInDB`

that inherits from`User`

but contains extra fields, like`hashed_password`

, and`User`

is used in the`response_model`

), it would still pass the validation (because`UserInDB`

is a subclass of`User`

) and the object would be returned as-is, including the`hashed_password`

. To fix this, the declared`response_model`

is cloned, if it is a Pydantic model class (or contains Pydantic model classes in it, e.g. in a`List[Item]`

), the Pydantic model class(es) will be a different one (the "cloned" one). So, an object that is a subclass won't simply pass the validation and returned as-is, because it is no longer a sub-class of the cloned`response_model`

. Instead, a new Pydantic model object will be created with the contents of the returned object. So, it will be a new object (made with the data from the returned one), and will be filtered by the cloned`response_model`

, containing only the declared fields as normally.

- When declaring a
- PR
[#322](https://github.com/tiangolo/fastapi/pull/322).

- Updated documentation about SQL with SQLAlchemy, using Pydantic models with ORM mode, SQLAlchemy models with relations, separation of files, simplification of code and other changes. New docs:
-
Remove/clean unused RegEx code in routing. PR

[#314](https://github.com/tiangolo/fastapi/pull/314)by[@dmontagu](https://github.com/dmontagu). -
Use default response status code descriptions for additional responses. PR

[#313](https://github.com/tiangolo/fastapi/pull/313)by[@duxiaoyao](https://github.com/duxiaoyao).

## 0.29.1 (2019-06-13)[¶](#0291-2019-06-13)

-
Fix handling an empty-body request with a required body param. PR

[#311](https://github.com/tiangolo/fastapi/pull/311). -
Fix broken link in docs:

[Return a Response directly](https://fastapi.tiangolo.com/advanced/response-directly/). PR[#306](https://github.com/tiangolo/fastapi/pull/306)by[@dmontagu](https://github.com/dmontagu). -
Fix docs discrepancy in docs for

[Response Model](https://fastapi.tiangolo.com/tutorial/response-model/). PR[#288](https://github.com/tiangolo/fastapi/pull/288)by[@awiddersheim](https://github.com/awiddersheim).

## 0.29.0 (2019-06-06)[¶](#0290-2019-06-06)

- Add support for declaring a
`Response`

parameter:- This allows declaring:
[Response Cookies](https://fastapi.tiangolo.com/advanced/response-cookies/).[Response Headers](https://fastapi.tiangolo.com/advanced/response-headers/).- An HTTP Status Code different than the default:
[Response - Change Status Code](https://fastapi.tiangolo.com/advanced/response-change-status-code/).

- All of this while still being able to return arbitrary objects (
`dict`

, DB model, etc). - Update attribution to Hug, for inspiring the
`response`

parameter pattern. - PR
[#294](https://github.com/tiangolo/fastapi/pull/294).

- This allows declaring:

## 0.28.0 (2019-06-05)[¶](#0280-2019-06-05)

-
Implement dependency cache per request.

- This avoids calling each dependency multiple times for the same request.
- This is useful while calling external services, performing costly computation, etc.
- This also means that if a dependency was declared as a
*path operation decorator*dependency, possibly at the router level (with`.include_router()`

) and then it is declared again in a specific*path operation*, the dependency will be called only once. - The cache can be disabled per dependency declaration, using
`use_cache=False`

as in`Depends(your_dependency, use_cache=False)`

. - Updated docs at:
[Using the same dependency multiple times](https://fastapi.tiangolo.com/tutorial/dependencies/sub-dependencies/#using-the-same-dependency-multiple-times). - PR
[#292](https://github.com/tiangolo/fastapi/pull/292).

-
Implement dependency overrides for testing.

- This allows using overrides/mocks of dependencies during tests.
- New docs:
[Testing Dependencies with Overrides](https://fastapi.tiangolo.com/advanced/testing-dependencies/). - PR
[#291](https://github.com/tiangolo/fastapi/pull/291).


## 0.27.2 (2019-06-03)[¶](#0272-2019-06-03)

- Fix path and query parameters receiving
`dict`

as a valid type. It should be mapped to a body payload. PR[#287](https://github.com/tiangolo/fastapi/pull/287). Updated docs at:[Query parameter list / multiple values with defaults: Using](https://fastapi.tiangolo.com/tutorial/query-params-str-validations/#using-list).`list`


## 0.27.1 (2019-06-03)[¶](#0271-2019-06-03)

-
Fix

`auto_error=False`

handling in`HTTPBearer`

security scheme. Do not`raise`

when there's an incorrect`Authorization`

header if`auto_error=False`

. PR[#282](https://github.com/tiangolo/fastapi/pull/282). -
Fix type declaration of

`HTTPException`

. PR[#279](https://github.com/tiangolo/fastapi/pull/279).

## 0.27.0 (2019-05-30)[¶](#0270-2019-05-30)

-
Fix broken link in docs about OAuth 2.0 with scopes. PR

[#275](https://github.com/tiangolo/fastapi/pull/275)by[@dmontagu](https://github.com/dmontagu). -
Refactor param extraction using Pydantic

`Field`

:- Large refactor, improvement, and simplification of param extraction from
*path operations*. - Fix/add support for list
*query parameters*with list defaults. New documentation:[Query parameter list / multiple values with defaults](https://fastapi.tiangolo.com/tutorial/query-params-str-validations/#query-parameter-list-multiple-values-with-defaults). - Add support for enumerations in
*path operation*parameters. New documentation:[Path Parameters: Predefined values](https://fastapi.tiangolo.com/tutorial/path-params/#predefined-values). - Add support for type annotations using
`Optional`

as in`param: Optional[str] = None`

. New documentation:[Optional type declarations](https://fastapi.tiangolo.com/tutorial/query-params/#optional-type-declarations). - PR
[#278](https://github.com/tiangolo/fastapi/pull/278).

- Large refactor, improvement, and simplification of param extraction from

## 0.26.0 (2019-05-29)[¶](#0260-2019-05-29)

-
Separate error handling for validation errors.

- This will allow developers to customize the exception handlers.
- Document better how to handle exceptions and use error handlers.
- Include
`RequestValidationError`

and`WebSocketRequestValidationError`

(this last one will be useful once[encode/starlette#527](https://github.com/encode/starlette/pull/527)or equivalent is merged). - New documentation about exceptions handlers:
- PR
[#273](https://github.com/tiangolo/fastapi/pull/273).

-
Fix support for

*paths*in*path parameters*without needing explicit`Path(...)`

.- PR
[#256](https://github.com/tiangolo/fastapi/pull/256). - Documented in PR
[#272](https://github.com/tiangolo/fastapi/pull/272)by[@wshayes](https://github.com/wshayes). - New documentation at:
[Path Parameters containing paths](https://fastapi.tiangolo.com/tutorial/path-params/#path-parameters-containing-paths).

- PR
-
Update docs for testing FastAPI. Include using

`POST`

, sending JSON, testing headers, etc. New documentation:[Testing](https://fastapi.tiangolo.com/tutorial/testing/#testing-extended-example). PR[#271](https://github.com/tiangolo/fastapi/pull/271). -
Fix type declaration of

`response_model`

to allow generic Python types as`List[Model]`

. Mainly to fix`mypy`

for users. PR[#266](https://github.com/tiangolo/fastapi/pull/266).

## 0.25.0 (2019-05-27)[¶](#0250-2019-05-27)

-
Add support for Pydantic's

`include`

,`exclude`

,`by_alias`

.- Update documentation:
[Response Model](https://fastapi.tiangolo.com/tutorial/response-model/#response_model_include-and-response_model_exclude). - Add docs for:
[Body - updates](https://fastapi.tiangolo.com/tutorial/body-updates/), using Pydantic's`skip_defaults`

. - Add method consistency tests.
- PR
[#264](https://github.com/tiangolo/fastapi/pull/264).

- Update documentation:
-
Add

`CONTRIBUTING.md`

file to GitHub, to help new contributors. PR[#255](https://github.com/tiangolo/fastapi/pull/255)by[@wshayes](https://github.com/wshayes). -
Add support for Pydantic's

`skip_defaults`

:- There's a new
*path operation decorator*parameter`response_model_skip_defaults`

.- The name of the parameter will most probably change in a future version to
`response_skip_defaults`

,`model_skip_defaults`

or something similar.

- The name of the parameter will most probably change in a future version to
- New
[documentation section about using](https://fastapi.tiangolo.com/tutorial/response-model/#response-model-encoding-parameters).`response_model_skip_defaults`

- PR
[#248](https://github.com/tiangolo/fastapi/pull/248)by[@wshayes](https://github.com/wshayes).

- There's a new

## 0.24.0 (2019-05-24)[¶](#0240-2019-05-24)

-
Add support for WebSockets with dependencies and parameters.

- Support included for:
`Depends`

`Security`

`Cookie`

`Header`

`Path`

`Query`

- ...as these are compatible with the WebSockets protocol (e.g.
`Body`

is not).

[Updated documentation for WebSockets](https://fastapi.tiangolo.com/advanced/websockets/).- PR
[#178](https://github.com/tiangolo/fastapi/pull/178)by[@jekirl](https://github.com/jekirl).

- Support included for:
-
Upgrade the compatible version of Pydantic to

`0.26.0`

.

## 0.23.0 (2019-05-21)[¶](#0230-2019-05-21)

-
Upgrade the compatible version of Starlette to

`0.12.0`

.- This includes support for ASGI 3 (the latest version of the standard).
- It's now possible to use
[Starlette's](https://www.starlette.dev/responses/#streamingresponse)with iterators, like`StreamingResponse`

[file-like](https://docs.python.org/3/glossary.html#term-file-like-object)objects (as those returned by`open()`

). - It's now possible to use the low level utility
`iterate_in_threadpool`

from`starlette.concurrency`

(for advanced scenarios). - PR
[#243](https://github.com/tiangolo/fastapi/pull/243).

-
Add OAuth2 redirect page for Swagger UI. This allows having delegated authentication in the Swagger UI docs. For this to work, you need to add

`{your_origin}/docs/oauth2-redirect`

to the allowed callbacks in your OAuth2 provider (in Auth0, Facebook, Google, etc).- For example, during development, it could be
`http://localhost:8000/docs/oauth2-redirect`

. - Keep in mind that this callback URL is independent of whichever one is used by your frontend. You might also have another callback at
`https://yourdomain.com/login/callback`

. - This is only to allow delegated authentication in the API docs with Swagger UI.
- PR
[#198](https://github.com/tiangolo/fastapi/pull/198)by[@steinitzu](https://github.com/steinitzu).

- For example, during development, it could be
-
Make Swagger UI and ReDoc route handlers (

*path operations*) be`async`

functions instead of lambdas to improve performance. PR[#241](https://github.com/tiangolo/fastapi/pull/241)by[@Trim21](https://github.com/Trim21). -
Make Swagger UI and ReDoc URLs parameterizable, allowing to host and serve local versions of them and have offline docs. PR

[#112](https://github.com/tiangolo/fastapi/pull/112)by[@euri10](https://github.com/euri10).

## 0.22.0 (2019-05-16)[¶](#0220-2019-05-16)

-
Add support for

`dependencies`

parameter:- A parameter in
*path operation decorators*, for dependencies that should be executed but the return value is not important or not used in the*path operation function*. - A parameter in the
`.include_router()`

method of FastAPI applications and routers, to include dependencies that should be executed in each*path operation*in a router.- This is useful, for example, to require authentication or permissions in specific group of
*path operations*. - Different
`dependencies`

can be applied to different routers.

- This is useful, for example, to require authentication or permissions in specific group of
- These
`dependencies`

are run before the normal parameter dependencies. And normal dependencies are run too. They can be combined. - Dependencies declared in a router are executed first, then the ones defined in
*path operation decorators*, and then the ones declared in normal parameters. They are all combined and executed. - All this also supports using
`Security`

with`scopes`

in those`dependencies`

parameters, for more advanced OAuth 2.0 security scenarios with scopes. - New documentation about
[dependencies in](https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-in-path-operation-decorators/).*path operation decorators* - New documentation about
[dependencies in the](https://fastapi.tiangolo.com/tutorial/bigger-applications/#include-an-apirouter-with-a-prefix-tags-responses-and-dependencies).`include_router()`

method - PR
[#235](https://github.com/tiangolo/fastapi/pull/235).

- A parameter in
-
Fix OpenAPI documentation of Starlette URL convertors. Specially useful when using

`path`

convertors, to take a whole path as a parameter, like`/some/url/{p:path}`

. PR[#234](https://github.com/tiangolo/fastapi/pull/234)by[@euri10](https://github.com/euri10). -
Make default parameter utilities exported from

`fastapi`

be functions instead of classes (the new functions return instances of those classes). To be able to override the return types and fix`mypy`

errors in FastAPI's users' code. Applies to`Path`

,`Query`

,`Header`

,`Cookie`

,`Body`

,`Form`

,`File`

,`Depends`

, and`Security`

. PR[#226](https://github.com/tiangolo/fastapi/pull/226)and PR[#231](https://github.com/tiangolo/fastapi/pull/231). -
Separate development scripts

`test.sh`

,`lint.sh`

, and`format.sh`

. PR[#232](https://github.com/tiangolo/fastapi/pull/232). -
Re-enable

`black`

formatting checks for Python 3.7. PR[#229](https://github.com/tiangolo/fastapi/pull/229)by[@zamiramir](https://github.com/zamiramir).

## 0.21.0 (2019-05-15)[¶](#0210-2019-05-15)

-
On body parsing errors, raise

`from`

previous exception, to allow better introspection in logging code. PR[#192](https://github.com/tiangolo/fastapi/pull/195)by[@ricardomomm](https://github.com/ricardomomm). -
Use Python logger named "

`fastapi`

" instead of root logger. PR[#222](https://github.com/tiangolo/fastapi/pull/222)by[@euri10](https://github.com/euri10). -
Fix typo in routing. PR

[#221](https://github.com/tiangolo/fastapi/pull/221)by[@djlambert](https://github.com/djlambert).

## 0.20.1 (2019-05-11)[¶](#0201-2019-05-11)

-
Add typing information to package including file

`py.typed`

. PR[#209](https://github.com/tiangolo/fastapi/pull/209)by[@meadsteve](https://github.com/meadsteve). -
Add FastAPI bot for Gitter. To automatically announce new releases. PR

[#189](https://github.com/tiangolo/fastapi/pull/189).

## 0.20.0 (2019-04-27)[¶](#0200-2019-04-27)

-
Upgrade OAuth2:

- Upgrade Password flow using Bearer tokens to use the correct HTTP status code 401
`UNAUTHORIZED`

, with`WWW-Authenticate`

headers. - Update, simplify, and improve all the
[security docs](https://fastapi.tiangolo.com/advanced/security/). - Add new
`scope_str`

to`SecurityScopes`

and update docs:[OAuth2 scopes](https://fastapi.tiangolo.com/advanced/security/oauth2-scopes/). - Update docs, images, tests.
- PR
[#188](https://github.com/tiangolo/fastapi/pull/188).

- Upgrade Password flow using Bearer tokens to use the correct HTTP status code 401
-
Include

[Hypercorn](https://gitlab.com/pgjones/hypercorn)as an alternative ASGI server in the docs. PR[#187](https://github.com/tiangolo/fastapi/pull/187). -
Add docs for

[Static Files](https://fastapi.tiangolo.com/tutorial/static-files/)and[Templates](https://fastapi.tiangolo.com/advanced/templates/). PR[#186](https://github.com/tiangolo/fastapi/pull/186). -
Add docs for handling

[Response Cookies](https://fastapi.tiangolo.com/advanced/response-cookies/)and[Response Headers](https://fastapi.tiangolo.com/advanced/response-headers/). PR[#185](https://github.com/tiangolo/fastapi/pull/185).

## 0.19.0 (2019-04-26)[¶](#0190-2019-04-26)

-
Rename

*path operation decorator*parameter`content_type`

to`response_class`

. PR[#183](https://github.com/tiangolo/fastapi/pull/183). -
Add docs:

- How to use the
`jsonable_encoder`

in[JSON compatible encoder](https://fastapi.tiangolo.com/tutorial/encoder/). - How to
[Return a Response directly](https://fastapi.tiangolo.com/advanced/response-directly/). - Update how to use a
[Custom Response Class](https://fastapi.tiangolo.com/advanced/custom-response/). - PR
[#184](https://github.com/tiangolo/fastapi/pull/184).

- How to use the

## 0.18.0 (2019-04-22)[¶](#0180-2019-04-22)

-
Add docs for

[HTTP Basic Auth](https://fastapi.tiangolo.com/advanced/custom-response/). PR[#177](https://github.com/tiangolo/fastapi/pull/177). -
Upgrade HTTP Basic Auth handling with automatic headers (automatic browser login prompt). PR

[#175](https://github.com/tiangolo/fastapi/pull/175). -
Update dependencies for security. PR

[#174](https://github.com/tiangolo/fastapi/pull/174). -
Add docs for

[Middleware](https://fastapi.tiangolo.com/tutorial/middleware/). PR[#173](https://github.com/tiangolo/fastapi/pull/173).

## 0.17.0 (2019-04-20)[¶](#0170-2019-04-20)

-
Make Flit publish from CI. PR

[#170](https://github.com/tiangolo/fastapi/pull/170). -
Add documentation about handling

[CORS (Cross-Origin Resource Sharing)](https://fastapi.tiangolo.com/tutorial/cors/). PR[#169](https://github.com/tiangolo/fastapi/pull/169). -
By default, encode by alias. This allows using Pydantic

`alias`

parameters working by default. PR[#168](https://github.com/tiangolo/fastapi/pull/168).

## 0.16.0 (2019-04-16)[¶](#0160-2019-04-16)

-
Upgrade

*path operation*`docstring`

parsing to support proper Markdown descriptions. New documentation at[Path Operation Configuration](https://fastapi.tiangolo.com/tutorial/path-operation-configuration/#description-from-docstring). PR[#163](https://github.com/tiangolo/fastapi/pull/163). -
Refactor internal usage of Pydantic to use correct data types. PR

[#164](https://github.com/tiangolo/fastapi/pull/164). -
Fix typo in Tutorial about Extra Models. PR

[#159](https://github.com/tiangolo/fastapi/pull/159)by[@danielmichaels](https://github.com/danielmichaels). -
Fix

[Query Parameters](https://fastapi.tiangolo.com/tutorial/query-params/)URL examples in docs. PR[#157](https://github.com/tiangolo/fastapi/pull/157)by[@hayata-yamamoto](https://github.com/hayata-yamamoto).

## 0.15.0 (2019-04-14)[¶](#0150-2019-04-14)

-
Add support for multiple file uploads (as a single form field). New docs at:

[Multiple file uploads](https://fastapi.tiangolo.com/tutorial/request-files/#multiple-file-uploads). PR[#158](https://github.com/tiangolo/fastapi/pull/158). -
Add docs for:

[Additional Status Codes](https://fastapi.tiangolo.com/advanced/additional-status-codes/). PR[#156](https://github.com/tiangolo/fastapi/pull/156).

## 0.14.0 (2019-04-12)[¶](#0140-2019-04-12)

-
Improve automatically generated names of

*path operations*in OpenAPI (in API docs). A function`read_items`

instead of having a generated name "Read Items Get" will have "Read Items". PR[#155](https://github.com/tiangolo/fastapi/pull/155). -
Add docs for:

[Testing](https://fastapi.tiangolo.com/tutorial/testing/). PR**FastAPI**[#151](https://github.com/tiangolo/fastapi/pull/151). -
Update

`/docs`

Swagger UI to enable deep linking. This allows sharing the URL pointing directly to the*path operation*documentation in the docs. PR[#148](https://github.com/tiangolo/fastapi/pull/148)by[@wshayes](https://github.com/wshayes). -
Update development dependencies,

`Pipfile.lock`

. PR[#150](https://github.com/tiangolo/fastapi/pull/150). -
Include Falcon and Hug in:

[Alternatives, Inspiration and Comparisons](https://fastapi.tiangolo.com/alternatives/).

## 0.13.0 (2019-04-09)[¶](#0130-2019-04-09)

- Improve/upgrade OAuth2 scopes support with
`SecurityScopes`

:`SecurityScopes`

can be declared as a parameter like`Request`

, to get the scopes of all super-dependencies/dependants.- Improve
`Security`

handling, merging scopes when declaring`SecurityScopes`

. - Allow using
`SecurityBase`

(like`OAuth2`

) classes with`Depends`

and still document them.`Security`

now is needed only to declare`scopes`

. - Updated docs about:
[OAuth2 with Password (and hashing), Bearer with JWT tokens](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/). - New docs about:
[OAuth2 scopes](https://fastapi.tiangolo.com/advanced/security/oauth2-scopes/). - PR
[#141](https://github.com/tiangolo/fastapi/pull/141).


## 0.12.1 (2019-04-05)[¶](#0121-2019-04-05)

-
Fix bug: handling additional

`responses`

in`APIRouter.include_router()`

. PR[#140](https://github.com/tiangolo/fastapi/pull/140). -
Fix typo in SQL tutorial. PR

[#138](https://github.com/tiangolo/fastapi/pull/138)by[@mostaphaRoudsari](https://github.com/mostaphaRoudsari). -
Fix typos in section about nested models and OAuth2 with JWT. PR

[#127](https://github.com/tiangolo/fastapi/pull/127)by[@mmcloud](https://github.com/mmcloud).

## 0.12.0 (2019-04-05)[¶](#0120-2019-04-05)

- Add additional
`responses`

parameter to*path operation decorators*to extend responses in OpenAPI (and API docs).- It also allows extending existing responses generated from
`response_model`

, declare other media types (like images), etc. - The new documentation is here:
[Additional Responses](https://fastapi.tiangolo.com/advanced/additional-responses/). `responses`

can also be added to`.include_router()`

, the updated docs are here:[Bigger Applications](https://fastapi.tiangolo.com/tutorial/bigger-applications/#add-some-custom-tags-and-responses).- PR
[#97](https://github.com/tiangolo/fastapi/pull/97)originally initiated by[@barsi](https://github.com/barsi).

- It also allows extending existing responses generated from
- Update
`scripts/test-cov-html.sh`

to allow passing extra parameters like`-vv`

, for development.

## 0.11.0 (2019-04-03)[¶](#0110-2019-04-03)

-
Add

`auto_error`

parameter to security utility functions. Allowing them to be optional. Also allowing to have multiple alternative security schemes that are then checked in a single dependency instead of each one verifying and returning the error to the client automatically when not satisfied. PR[#134](https://github.com/tiangolo/fastapi/pull/134). -
Update

[SQL Tutorial](https://fastapi.tiangolo.com/tutorial/sql-databases/#create-a-middleware-to-handle-sessions)to close database sessions even when there are exceptions. PR[#89](https://github.com/tiangolo/fastapi/pull/89)by[@alexiri](https://github.com/alexiri). -
Fix duplicate dependency in

`pyproject.toml`

. PR[#128](https://github.com/tiangolo/fastapi/pull/128)by[@zxalif](https://github.com/zxalif).

## 0.10.3 (2019-03-30)[¶](#0103-2019-03-30)

-
Add Gitter chat, badge, links, etc.

[https://gitter.im/tiangolo/fastapi](https://gitter.im/tiangolo/fastapi). PR[#117](https://github.com/tiangolo/fastapi/pull/117). -
Add docs about

[Extending OpenAPI](https://fastapi.tiangolo.com/advanced/extending-openapi/). PR[#126](https://github.com/tiangolo/fastapi/pull/126). -
Make Travis run Ubuntu Xenial (newer version) and Python 3.7 instead of Python 3.7-dev. PR

[#92](https://github.com/tiangolo/fastapi/pull/92)by[@blueyed](https://github.com/blueyed). -
Fix duplicated param variable creation. PR

[#123](https://github.com/tiangolo/fastapi/pull/123)by[@yihuang](https://github.com/yihuang). -
Add note in

[Response Model docs](https://fastapi.tiangolo.com/tutorial/response-model/)about why using a function parameter instead of a function return type annotation. PR[#109](https://github.com/tiangolo/fastapi/pull/109)by[@JHSaunders](https://github.com/JHSaunders). -
Fix event docs (startup/shutdown) function name. PR

[#105](https://github.com/tiangolo/fastapi/pull/105)by[@stratosgear](https://github.com/stratosgear).

## 0.10.2 (2019-03-29)[¶](#0102-2019-03-29)

-
Fix OpenAPI (JSON Schema) for declarations of Python

`Union`

(JSON Schema`additionalProperties`

). PR[#121](https://github.com/tiangolo/fastapi/pull/121). -
Update

[Background Tasks](https://fastapi.tiangolo.com/tutorial/background-tasks/)with a note on Celery. -
Document response models using unions and lists, updated at:

[Extra Models](https://fastapi.tiangolo.com/tutorial/extra-models/). PR[#108](https://github.com/tiangolo/fastapi/pull/108).

## 0.10.1 (2019-03-25)[¶](#0101-2019-03-25)

- Add docs and tests for
[encode/databases](https://github.com/encode/databases). New docs at:[Async SQL (Relational) Databases](https://fastapi.tiangolo.com/advanced/async-sql-databases/). PR[#107](https://github.com/tiangolo/fastapi/pull/107).

## 0.10.0 (2019-03-24)[¶](#0100-2019-03-24)

-
Add support for Background Tasks in

*path operation functions*and dependencies. New documentation about[Background Tasks is here](https://fastapi.tiangolo.com/tutorial/background-tasks/). PR[#103](https://github.com/tiangolo/fastapi/pull/103). -
Add support for

`.websocket_route()`

in`APIRouter`

. PR[#100](https://github.com/tiangolo/fastapi/pull/100)by[@euri10](https://github.com/euri10). -
New docs section about

[Events: startup - shutdown](https://fastapi.tiangolo.com/advanced/events/). PR[#99](https://github.com/tiangolo/fastapi/pull/99).

## 0.9.1 (2019-03-22)[¶](#091-2019-03-22)

- Document receiving
[Multiple values with the same query parameter](https://fastapi.tiangolo.com/tutorial/query-params-str-validations/#query-parameter-list-multiple-values)and[Duplicate headers](https://fastapi.tiangolo.com/tutorial/header-params/#duplicate-headers). PR[#95](https://github.com/tiangolo/fastapi/pull/95).

## 0.9.0 (2019-03-22)[¶](#090-2019-03-22)

-
Upgrade compatible Pydantic version to

`0.21.0`

. PR[#90](https://github.com/tiangolo/fastapi/pull/90). -
Add documentation for:

[Application Configuration](https://fastapi.tiangolo.com/tutorial/application-configuration/). -
Fix typo in docs. PR

[#76](https://github.com/tiangolo/fastapi/pull/76)by[@matthewhegarty](https://github.com/matthewhegarty). -
Fix link in "Deployment" to "Bigger Applications".


## 0.8.0 (2019-03-16)[¶](#080-2019-03-16)

-
Add support for adding

`tags`

in`app.include_router()`

. PR[#55](https://github.com/tiangolo/fastapi/pull/55)by[@euri10](https://github.com/euri10). Documentation updated in the section:[Bigger Applications](https://fastapi.tiangolo.com/tutorial/bigger-applications/). -
Update docs related to Uvicorn to use new

`--reload`

option from version`0.5.x`

. PR[#74](https://github.com/tiangolo/fastapi/pull/74). -
Update

`isort`

imports and scripts to be compatible with newer versions. PR[#75](https://github.com/tiangolo/fastapi/pull/75).

## 0.7.1 (2019-03-04)[¶](#071-2019-03-04)

-
Update

[technical details about](https://fastapi.tiangolo.com/async/#path-operation-functions)with respect to previous frameworks. PR`async def`

handling[#64](https://github.com/tiangolo/fastapi/pull/64)by[@haizaar](https://github.com/haizaar). -
Add

[deployment documentation for Docker in Raspberry Pi](https://fastapi.tiangolo.com/deployment/#raspberry-pi-and-other-architectures)and other architectures. -
Trigger Docker images build on Travis CI automatically. PR

[#65](https://github.com/tiangolo/fastapi/pull/65).

## 0.7.0 (2019-03-03)[¶](#070-2019-03-03)

- Add support for
`UploadFile`

in`File`

parameter annotations.- This includes a file-like interface.
- Here's the updated documentation for declaring
.`File`

parameters with`UploadFile`

- And here's the updated documentation for using
at the same time.`Form`

parameters mixed with`File`

parameters, supporting`bytes`

and`UploadFile`

- PR
[#63](https://github.com/tiangolo/fastapi/pull/63).


## 0.6.4 (2019-03-02)[¶](#064-2019-03-02)

-
Add

[technical details about](https://fastapi.tiangolo.com/async/#very-technical-details). PR`async def`

handling to docs[#61](https://github.com/tiangolo/fastapi/pull/61). -
Add docs for

[Debugging FastAPI applications in editors](https://fastapi.tiangolo.com/tutorial/debugging/). -
Fix typos in docs.

-
Add section about

[History, Design and Future](https://fastapi.tiangolo.com/history-design-future/). -
Add docs for using

[WebSockets with](https://fastapi.tiangolo.com/advanced/websockets/). PR**FastAPI**[#62](https://github.com/tiangolo/fastapi/pull/62).

## 0.6.3 (2019-02-23)[¶](#063-2019-02-23)

- Add Favicons to docs. PR
[#53](https://github.com/tiangolo/fastapi/pull/53).

## 0.6.2 (2019-02-23)[¶](#062-2019-02-23)

-
Introduce new project generator based on FastAPI and PostgreSQL:

[https://github.com/tiangolo/full-stack-fastapi-postgresql](https://github.com/tiangolo/full-stack-fastapi-postgresql). PR[#52](https://github.com/tiangolo/fastapi/pull/52). -
Update

[SQL tutorial with SQLAlchemy, using](https://fastapi.tiangolo.com/tutorial/sql-databases/). PR`Depends`

to improve editor support and reduce code repetition[#52](https://github.com/tiangolo/fastapi/pull/52). -
Improve middleware naming in tutorial for SQL with SQLAlchemy

[https://fastapi.tiangolo.com/tutorial/sql-databases/](https://fastapi.tiangolo.com/tutorial/sql-databases/).

## 0.6.1 (2019-02-20)[¶](#061-2019-02-20)

- Add docs for GraphQL:
[https://fastapi.tiangolo.com/advanced/graphql/](https://fastapi.tiangolo.com/advanced/graphql/). PR[#48](https://github.com/tiangolo/fastapi/pull/48).

## 0.6.0 (2019-02-19)[¶](#060-2019-02-19)

-
Update SQL with SQLAlchemy tutorial at

[https://fastapi.tiangolo.com/tutorial/sql-databases/](https://fastapi.tiangolo.com/tutorial/sql-databases/)using the new official`request.state`

. PR[#45](https://github.com/tiangolo/fastapi/pull/45). -
Upgrade Starlette to version

`0.11.1`

and add required compatibility changes. PR[#44](https://github.com/tiangolo/fastapi/pull/44).

## 0.5.1 (2019-02-18)[¶](#051-2019-02-18)

-
Add section about

[helping and getting help with](https://fastapi.tiangolo.com/help-fastapi/).**FastAPI** -
Add note about

[path operations order in docs](https://fastapi.tiangolo.com/tutorial/path-params/#order-matters). -
Update

[section about error handling](https://fastapi.tiangolo.com/tutorial/handling-errors/)with more information and make relation with Starlette error handling utilities more explicit. PR[#41](https://github.com/tiangolo/fastapi/pull/41).

## 0.5.0 (2019-02-16)[¶](#050-2019-02-16)

-
Add new

`HTTPException`

with support for custom headers. With new documentation for handling errors at:[https://fastapi.tiangolo.com/tutorial/handling-errors/](https://fastapi.tiangolo.com/tutorial/handling-errors/). PR[#35](https://github.com/tiangolo/fastapi/pull/35). -
Add

[documentation to use Starlette](https://fastapi.tiangolo.com/advanced/using-request-directly/)directly. Check`Request`

object[#25](https://github.com/tiangolo/fastapi/pull/25)by[@euri10](https://github.com/euri10). -
Add issue templates to simplify reporting bugs, getting help, etc:

[#34](https://github.com/tiangolo/fastapi/pull/34). -
Update example for the SQLAlchemy tutorial at

[https://fastapi.tiangolo.com/tutorial/sql-databases/](https://fastapi.tiangolo.com/tutorial/sql-databases/)using middleware and database session attached to request.

## 0.4.0 (2019-02-16)[¶](#040-2019-02-16)

-
Add

`openapi_prefix`

, support for reverse proxy and mounting sub-applications. See the docs at[https://fastapi.tiangolo.com/advanced/sub-applications-proxy/](https://fastapi.tiangolo.com/advanced/sub-applications-proxy/):[#26](https://github.com/tiangolo/fastapi/pull/26)by[@kabirkhan](https://github.com/kabirkhan). -
Update

[docs/tutorial for SQLAlchemy](https://fastapi.tiangolo.com/tutorial/sql-databases/)including note about*DB Browser for SQLite*.

## 0.3.0 (2019-02-12)[¶](#030-2019-02-12)

- Fix/add SQLAlchemy support, including ORM, and update
[docs for SQLAlchemy](https://fastapi.tiangolo.com/tutorial/sql-databases/):[#30](https://github.com/tiangolo/fastapi/pull/30).

## 0.2.1 (2019-02-12)[¶](#021-2019-02-12)

- Fix
`jsonable_encoder`

for Pydantic models with`Config`

but without`json_encoders`

:[#29](https://github.com/tiangolo/fastapi/pull/29).

---

## Source: https://fastapi.tiangolo.com/python-types/

# Python Types Intro[¶](#python-types-intro)

Python has support for optional "type hints" (also called "type annotations").

These **"type hints"** or annotations are a special syntax that allow declaring the type of a variable.

By declaring types for your variables, editors and tools can give you better support.

This is just a **quick tutorial / refresher** about Python type hints. It covers only the minimum necessary to use them with **FastAPI**... which is actually very little.

**FastAPI** is all based on these type hints, they give it many advantages and benefits.

But even if you never use **FastAPI**, you would benefit from learning a bit about them.

Note

If you are a Python expert, and you already know everything about type hints, skip to the next chapter.

## Motivation[¶](#motivation)

Let's start with a simple example:

```
def get_full_name(first_name, last_name):
full_name = first_name.title() + " " + last_name.title()
return full_name
print(get_full_name("john", "doe"))
```


Calling this program outputs:

```
John Doe
```


The function does the following:

- Takes a
`first_name`

and`last_name`

. - Converts the first letter of each one to upper case with
`title()`

. - Concatenates them with a space in the middle.

```
def get_full_name(first_name, last_name):
full_name = first_name.title() + " " + last_name.title()
return full_name
print(get_full_name("john", "doe"))
```


### Edit it[¶](#edit-it)

It's a very simple program.

But now imagine that you were writing it from scratch.

At some point you would have started the definition of the function, you had the parameters ready...

But then you have to call "that method that converts the first letter to upper case".

Was it `upper`

? Was it `uppercase`

? `first_uppercase`

? `capitalize`

?

Then, you try with the old programmer's friend, editor autocompletion.

You type the first parameter of the function, `first_name`

, then a dot (`.`

) and then hit `Ctrl+Space`

to trigger the completion.

But, sadly, you get nothing useful:

### Add types[¶](#add-types)

Let's modify a single line from the previous version.

We will change exactly this fragment, the parameters of the function, from:

```
first_name, last_name
```


to:

```
first_name: str, last_name: str
```


That's it.

Those are the "type hints":

```
def get_full_name(first_name: str, last_name: str):
full_name = first_name.title() + " " + last_name.title()
return full_name
print(get_full_name("john", "doe"))
```


That is not the same as declaring default values like would be with:

```
first_name="john", last_name="doe"
```


It's a different thing.

We are using colons (`:`

), not equals (`=`

).

And adding type hints normally doesn't change what happens from what would happen without them.

But now, imagine you are again in the middle of creating that function, but with type hints.

At the same point, you try to trigger the autocomplete with `Ctrl+Space`

and you see:

With that, you can scroll, seeing the options, until you find the one that "rings a bell":

## More motivation[¶](#more-motivation)

Check this function, it already has type hints:

```
def get_name_with_age(name: str, age: int):
name_with_age = name + " is this old: " + age
return name_with_age
```


Because the editor knows the types of the variables, you don't only get completion, you also get error checks:

Now you know that you have to fix it, convert `age`

to a string with `str(age)`

:

```
def get_name_with_age(name: str, age: int):
name_with_age = name + " is this old: " + str(age)
return name_with_age
```


## Declaring types[¶](#declaring-types)

You just saw the main place to declare type hints. As function parameters.

This is also the main place you would use them with **FastAPI**.

### Simple types[¶](#simple-types)

You can declare all the standard Python types, not only `str`

.

You can use, for example:

`int`

`float`

`bool`

`bytes`


```
def get_items(item_a: str, item_b: int, item_c: float, item_d: bool, item_e: bytes):
return item_a, item_b, item_c, item_d, item_e
```


`typing`

module[¶](#typing-module)

For some additional use cases, you might need to import some things from the standard library `typing`

module, for example when you want to declare that something has "any type", you can use `Any`

from `typing`

:

```
from typing import Any
def some_function(data: Any):
print(data)
```


### Generic types[¶](#generic-types)

Some types can take "type parameters" in square brackets, to define their internal types, for example a "list of strings" would be declared `list[str]`

.

These types that can take type parameters are called **Generic types** or **Generics**.

You can use the same builtin types as generics (with square brackets and types inside):

`list`

`tuple`

`set`

`dict`


#### List[¶](#list)

For example, let's define a variable to be a `list`

of `str`

.

Declare the variable, with the same colon (`:`

) syntax.

As the type, put `list`

.

As the list is a type that contains some internal types, you put them in square brackets:

```
def process_items(items: list[str]):
for item in items:
print(item)
```


Info

Those internal types in the square brackets are called "type parameters".

In this case, `str`

is the type parameter passed to `list`

.

That means: "the variable `items`

is a `list`

, and each of the items in this list is a `str`

".

By doing that, your editor can provide support even while processing items from the list:

Without types, that's almost impossible to achieve.

Notice that the variable `item`

is one of the elements in the list `items`

.

And still, the editor knows it is a `str`

, and provides support for that.

#### Tuple and Set[¶](#tuple-and-set)

You would do the same to declare `tuple`

s and `set`

s:

```
def process_items(items_t: tuple[int, int, str], items_s: set[bytes]):
return items_t, items_s
```


This means:

- The variable
`items_t`

is a`tuple`

with 3 items, an`int`

, another`int`

, and a`str`

. - The variable
`items_s`

is a`set`

, and each of its items is of type`bytes`

.

#### Dict[¶](#dict)

To define a `dict`

, you pass 2 type parameters, separated by commas.

The first type parameter is for the keys of the `dict`

.

The second type parameter is for the values of the `dict`

:

```
def process_items(prices: dict[str, float]):
for item_name, item_price in prices.items():
print(item_name)
print(item_price)
```


This means:

- The variable
`prices`

is a`dict`

:- The keys of this
`dict`

are of type`str`

(let's say, the name of each item). - The values of this
`dict`

are of type`float`

(let's say, the price of each item).

- The keys of this

#### Union[¶](#union)

You can declare that a variable can be any of **several types**, for example, an `int`

or a `str`

.

To define it you use the vertical bar (`|`

) to separate both types.

This is called a "union", because the variable can be anything in the union of those two sets of types.

```
def process_item(item: int | str):
print(item)
```


This means that `item`

could be an `int`

or a `str`

.

#### Possibly `None`

[¶](#possibly-none)

You can declare that a value could have a type, like `str`

, but that it could also be `None`

.

```
def say_hi(name: str | None = None):
if name is not None:
print(f"Hey {name}!")
else:
print("Hello World")
```


Using `str | None`

instead of just `str`

will let the editor help you detect errors where you could be assuming that a value is always a `str`

, when it could actually be `None`

too.

### Classes as types[¶](#classes-as-types)

You can also declare a class as the type of a variable.

Let's say you have a class `Person`

, with a name:

```
class Person:
def __init__(self, name: str):
self.name = name
def get_person_name(one_person: Person):
return one_person.name
```


Then you can declare a variable to be of type `Person`

:

```
class Person:
def __init__(self, name: str):
self.name = name
def get_person_name(one_person: Person):
return one_person.name
```


And then, again, you get all the editor support:

Notice that this means "`one_person`

is an **instance** of the class `Person`

".

It doesn't mean "`one_person`

is the **class** called `Person`

".

## Pydantic models[¶](#pydantic-models)

[Pydantic](https://docs.pydantic.dev/) is a Python library to perform data validation.

You declare the "shape" of the data as classes with attributes.

And each attribute has a type.

Then you create an instance of that class with some values and it will validate the values, convert them to the appropriate type (if that's the case) and give you an object with all the data.

And you get all the editor support with that resulting object.

An example from the official Pydantic docs:

```
from datetime import datetime
from pydantic import BaseModel
class User(BaseModel):
id: int
name: str = "John Doe"
signup_ts: datetime | None = None
friends: list[int] = []
external_data = {
"id": "123",
"signup_ts": "2017-06-01 12:22",
"friends": [1, "2", b"3"],
}
user = User(**external_data)
print(user)
# > User id=123 name='John Doe' signup_ts=datetime.datetime(2017, 6, 1, 12, 22) friends=[1, 2, 3]
print(user.id)
# > 123
```


Info

To learn more about [Pydantic, check its docs](https://docs.pydantic.dev/).

**FastAPI** is all based on Pydantic.

You will see a lot more of all this in practice in the [Tutorial - User Guide](../tutorial/).

## Type Hints with Metadata Annotations[¶](#type-hints-with-metadata-annotations)

Python also has a feature that allows putting **additional metadata** in these type hints using `Annotated`

.

You can import `Annotated`

from `typing`

.

```
from typing import Annotated
def say_hello(name: Annotated[str, "this is just metadata"]) -> str:
return f"Hello {name}"
```


Python itself doesn't do anything with this `Annotated`

. And for editors and other tools, the type is still `str`

.

But you can use this space in `Annotated`

to provide **FastAPI** with additional metadata about how you want your application to behave.

The important thing to remember is that **the first type parameter** you pass to

`Annotated`

is the **actual type**. The rest, is just metadata for other tools.

For now, you just need to know that `Annotated`

exists, and that it's standard Python. 😎

Later you will see how **powerful** it can be.

Tip

The fact that this is **standard Python** means that you will still get the **best possible developer experience** in your editor, with the tools you use to analyze and refactor your code, etc. ✨

And also that your code will be very compatible with many other Python tools and libraries. 🚀

## Type hints in **FastAPI**[¶](#type-hints-in-fastapi)

**FastAPI** takes advantage of these type hints to do several things.

With **FastAPI** you declare parameters with type hints and you get:

**Editor support**.**Type checks**.

...and **FastAPI** uses the same declarations to:

**Define requirements**: from request path parameters, query parameters, headers, bodies, dependencies, etc.**Convert data**: from the request to the required type.**Validate data**: coming from each request:- Generating
**automatic errors**returned to the client when the data is invalid.

- Generating
**Document**the API using OpenAPI:- which is then used by the automatic interactive documentation user interfaces.


This might all sound abstract. Don't worry. You'll see all this in action in the [Tutorial - User Guide](../tutorial/).

The important thing is that by using standard Python types, in a single place (instead of adding more classes, decorators, etc), **FastAPI** will do a lot of the work for you.

Info

If you already went through all the tutorial and came back to see more about types, a good resource is [the "cheat sheet" from mypy](https://mypy.readthedocs.io/en/latest/cheat_sheet_py3.html).

---

## Source: https://fastapi.tiangolo.com/async/

# Concurrency and async / await[¶](#concurrency-and-async-await)

Details about the `async def`

syntax for *path operation functions* and some background about asynchronous code, concurrency, and parallelism.

## In a hurry?[¶](#in-a-hurry)

**TL;DR:**

If you are using third party libraries that tell you to call them with `await`

, like:

```
results = await some_library()
```


Then, declare your *path operation functions* with `async def`

like:

```
@app.get('/')
async def read_results():
results = await some_library()
return results
```


Note

You can only use `await`

inside of functions created with `async def`

.

If you are using a third party library that communicates with something (a database, an API, the file system, etc.) and doesn't have support for using `await`

, (this is currently the case for most database libraries), then declare your *path operation functions* as normally, with just `def`

, like:

```
@app.get('/')
def results():
results = some_library()
return results
```


If your application (somehow) doesn't have to communicate with anything else and wait for it to respond, use `async def`

, even if you don't need to use `await`

inside.

If you just don't know, use normal `def`

.

**Note**: You can mix `def`

and `async def`

in your *path operation functions* as much as you need and define each one using the best option for you. FastAPI will do the right thing with them.

Anyway, in any of the cases above, FastAPI will still work asynchronously and be extremely fast.

But by following the steps above, it will be able to do some performance optimizations.

## Technical Details[¶](#technical-details)

Modern versions of Python have support for **"asynchronous code"** using something called **"coroutines"**, with ** async and await** syntax.


Let's see that phrase by parts in the sections below:

**Asynchronous Code**`async`

and`await`

**Coroutines**

## Asynchronous Code[¶](#asynchronous-code)

Asynchronous code just means that the language 💬 has a way to tell the computer / program 🤖 that at some point in the code, it 🤖 will have to wait for *something else* to finish somewhere else. Let's say that *something else* is called "slow-file" 📝.

So, during that time, the computer can go and do some other work, while "slow-file" 📝 finishes.

Then the computer / program 🤖 will come back every time it has a chance because it's waiting again, or whenever it 🤖 finished all the work it had at that point. And it 🤖 will see if any of the tasks it was waiting for have already finished, doing whatever it had to do.

Next, it 🤖 takes the first task to finish (let's say, our "slow-file" 📝) and continues whatever it had to do with it.

That "wait for something else" normally refers to I/O operations that are relatively "slow" (compared to the speed of the processor and the RAM memory), like waiting for:

- the data from the client to be sent through the network
- the data sent by your program to be received by the client through the network
- the contents of a file in the disk to be read by the system and given to your program
- the contents your program gave to the system to be written to disk
- a remote API operation
- a database operation to finish
- a database query to return the results
- etc.

As the execution time is consumed mostly by waiting for I/O operations, they call them "I/O bound" operations.

It's called "asynchronous" because the computer / program doesn't have to be "synchronized" with the slow task, waiting for the exact moment that the task finishes, while doing nothing, to be able to take the task result and continue the work.

Instead of that, by being an "asynchronous" system, once finished, the task can wait in line a little bit (some microseconds) for the computer / program to finish whatever it went to do, and then come back to take the results and continue working with them.

For "synchronous" (contrary to "asynchronous") they commonly also use the term "sequential", because the computer / program follows all the steps in sequence before switching to a different task, even if those steps involve waiting.

### Concurrency and Burgers[¶](#concurrency-and-burgers)

This idea of **asynchronous** code described above is also sometimes called **"concurrency"**. It is different from **"parallelism"**.

**Concurrency** and **parallelism** both relate to "different things happening more or less at the same time".

But the details between *concurrency* and *parallelism* are quite different.

To see the difference, imagine the following story about burgers:

### Concurrent Burgers[¶](#concurrent-burgers)

You go with your crush to get fast food, you stand in line while the cashier takes the orders from the people in front of you. 😍

Then it's your turn, you place your order of 2 very fancy burgers for your crush and you. 🍔🍔

The cashier says something to the cook in the kitchen so they know they have to prepare your burgers (even though they are currently preparing the ones for the previous clients).

You pay. 💸

The cashier gives you the number of your turn.

While you are waiting, you go with your crush and pick a table, you sit and talk with your crush for a long time (as your burgers are very fancy and take some time to prepare).

As you are sitting at the table with your crush, while you wait for the burgers, you can spend that time admiring how awesome, cute and smart your crush is ✨😍✨.

While waiting and talking to your crush, from time to time, you check the number displayed on the counter to see if it's your turn already.

Then at some point, it finally is your turn. You go to the counter, get your burgers and come back to the table.

You and your crush eat the burgers and have a nice time. ✨

Info

Beautiful illustrations by [Ketrina Thompson](https://www.instagram.com/ketrinadrawsalot). 🎨

Imagine you are the computer / program 🤖 in that story.

While you are at the line, you are just idle 😴, waiting for your turn, not doing anything very "productive". But the line is fast because the cashier is only taking the orders (not preparing them), so that's fine.

Then, when it's your turn, you do actual "productive" work, you process the menu, decide what you want, get your crush's choice, pay, check that you give the correct bill or card, check that you are charged correctly, check that the order has the correct items, etc.

But then, even though you still don't have your burgers, your work with the cashier is "on pause" ⏸, because you have to wait 🕙 for your burgers to be ready.

But as you go away from the counter and sit at the table with a number for your turn, you can switch 🔀 your attention to your crush, and "work" ⏯ 🤓 on that. Then you are again doing something very "productive" as is flirting with your crush 😍.

Then the cashier 💁 says "I'm finished with doing the burgers" by putting your number on the counter's display, but you don't jump like crazy immediately when the displayed number changes to your turn number. You know no one will steal your burgers because you have the number of your turn, and they have theirs.

So you wait for your crush to finish the story (finish the current work ⏯ / task being processed 🤓), smile gently and say that you are going for the burgers ⏸.

Then you go to the counter 🔀, to the initial task that is now finished ⏯, pick the burgers, say thanks and take them to the table. That finishes that step / task of interaction with the counter ⏹. That in turn, creates a new task, of "eating burgers" 🔀 ⏯, but the previous one of "getting burgers" is finished ⏹.

### Parallel Burgers[¶](#parallel-burgers)

Now let's imagine these aren't "Concurrent Burgers", but "Parallel Burgers".

You go with your crush to get parallel fast food.

You stand in line while several (let's say 8) cashiers that at the same time are cooks take the orders from the people in front of you.

Everyone before you is waiting for their burgers to be ready before leaving the counter because each of the 8 cashiers goes and prepares the burger right away before getting the next order.

Then it's finally your turn, you place your order of 2 very fancy burgers for your crush and you.

You pay 💸.

The cashier goes to the kitchen.

You wait, standing in front of the counter 🕙, so that no one else takes your burgers before you do, as there are no numbers for turns.

As you and your crush are busy not letting anyone get in front of you and take your burgers whenever they arrive, you cannot pay attention to your crush. 😞

This is "synchronous" work, you are "synchronized" with the cashier/cook 👨🍳. You have to wait 🕙 and be there at the exact moment that the cashier/cook 👨🍳 finishes the burgers and gives them to you, or otherwise, someone else might take them.

Then your cashier/cook 👨🍳 finally comes back with your burgers, after a long time waiting 🕙 there in front of the counter.

You take your burgers and go to the table with your crush.

You just eat them, and you are done. ⏹

There was not much talk or flirting as most of the time was spent waiting 🕙 in front of the counter. 😞

Info

Beautiful illustrations by [Ketrina Thompson](https://www.instagram.com/ketrinadrawsalot). 🎨

In this scenario of the parallel burgers, you are a computer / program 🤖 with two processors (you and your crush), both waiting 🕙 and dedicating their attention ⏯ to be "waiting on the counter" 🕙 for a long time.

The fast food store has 8 processors (cashiers/cooks). While the concurrent burgers store might have had only 2 (one cashier and one cook).

But still, the final experience is not the best. 😞

This would be the parallel equivalent story for burgers. 🍔

For a more "real life" example of this, imagine a bank.

Up to recently, most of the banks had multiple cashiers 👨💼👨💼👨💼👨💼 and a big line 🕙🕙🕙🕙🕙🕙🕙🕙.

All of the cashiers doing all the work with one client after the other 👨💼⏯.

And you have to wait 🕙 in the line for a long time or you lose your turn.

You probably wouldn't want to take your crush 😍 with you to run errands at the bank 🏦.

### Burger Conclusion[¶](#burger-conclusion)

In this scenario of "fast food burgers with your crush", as there is a lot of waiting 🕙, it makes a lot more sense to have a concurrent system ⏸🔀⏯.

This is the case for most of the web applications.

Many, many users, but your server is waiting 🕙 for their not-so-good connection to send their requests.

And then waiting 🕙 again for the responses to come back.

This "waiting" 🕙 is measured in microseconds, but still, summing it all, it's a lot of waiting in the end.

That's why it makes a lot of sense to use asynchronous ⏸🔀⏯ code for web APIs.

This kind of asynchronicity is what made NodeJS popular (even though NodeJS is not parallel) and that's the strength of Go as a programming language.

And that's the same level of performance you get with **FastAPI**.

And as you can have parallelism and asynchronicity at the same time, you get higher performance than most of the tested NodeJS frameworks and on par with Go, which is a compiled language closer to C [(all thanks to Starlette)](https://www.techempower.com/benchmarks/#section=data-r17&hw=ph&test=query&l=zijmkf-1).

### Is concurrency better than parallelism?[¶](#is-concurrency-better-than-parallelism)

Nope! That's not the moral of the story.

Concurrency is different than parallelism. And it is better on **specific** scenarios that involve a lot of waiting. Because of that, it generally is a lot better than parallelism for web application development. But not for everything.

So, to balance that out, imagine the following short story:

You have to clean a big, dirty house.


*Yep, that's the whole story*.

There's no waiting 🕙 anywhere, just a lot of work to be done, on multiple places of the house.

You could have turns as in the burgers example, first the living room, then the kitchen, but as you are not waiting 🕙 for anything, just cleaning and cleaning, the turns wouldn't affect anything.

It would take the same amount of time to finish with or without turns (concurrency) and you would have done the same amount of work.

But in this case, if you could bring the 8 ex-cashier/cooks/now-cleaners, and each one of them (plus you) could take a zone of the house to clean it, you could do all the work in **parallel**, with the extra help, and finish much sooner.

In this scenario, each one of the cleaners (including you) would be a processor, doing their part of the job.

And as most of the execution time is taken by actual work (instead of waiting), and the work in a computer is done by a CPU, they call these problems "CPU bound".

Common examples of CPU bound operations are things that require complex math processing.

For example:

**Audio**or**image processing**.**Computer vision**: an image is composed of millions of pixels, each pixel has 3 values / colors, processing that normally requires computing something on those pixels, all at the same time.**Machine Learning**: it normally requires lots of "matrix" and "vector" multiplications. Think of a huge spreadsheet with numbers and multiplying all of them together at the same time.**Deep Learning**: this is a sub-field of Machine Learning, so, the same applies. It's just that there is not a single spreadsheet of numbers to multiply, but a huge set of them, and in many cases, you use a special processor to build and / or use those models.

### Concurrency + Parallelism: Web + Machine Learning[¶](#concurrency-parallelism-web-machine-learning)

With **FastAPI** you can take advantage of concurrency that is very common for web development (the same main attraction of NodeJS).

But you can also exploit the benefits of parallelism and multiprocessing (having multiple processes running in parallel) for **CPU bound** workloads like those in Machine Learning systems.

That, plus the simple fact that Python is the main language for **Data Science**, Machine Learning and especially Deep Learning, make FastAPI a very good match for Data Science / Machine Learning web APIs and applications (among many others).

To see how to achieve this parallelism in production see the section about [Deployment](../deployment/).

`async`

and `await`

[¶](#async-and-await)

Modern versions of Python have a very intuitive way to define asynchronous code. This makes it look just like normal "sequential" code and do the "awaiting" for you at the right moments.

When there is an operation that will require waiting before giving the results and has support for these new Python features, you can code it like:

```
burgers = await get_burgers(2)
```


The key here is the `await`

. It tells Python that it has to wait ⏸ for `get_burgers(2)`

to finish doing its thing 🕙 before storing the results in `burgers`

. With that, Python will know that it can go and do something else 🔀 ⏯ in the meanwhile (like receiving another request).

For `await`

to work, it has to be inside a function that supports this asynchronicity. To do that, you just declare it with `async def`

:

```
async def get_burgers(number: int):
# Do some asynchronous stuff to create the burgers
return burgers
```


...instead of `def`

:

```
# This is not asynchronous
def get_sequential_burgers(number: int):
# Do some sequential stuff to create the burgers
return burgers
```


With `async def`

, Python knows that, inside that function, it has to be aware of `await`

expressions, and that it can "pause" ⏸ the execution of that function and go do something else 🔀 before coming back.

When you want to call an `async def`

function, you have to "await" it. So, this won't work:

```
# This won't work, because get_burgers was defined with: async def
burgers = get_burgers(2)
```


So, if you are using a library that tells you that you can call it with `await`

, you need to create the *path operation functions* that uses it with `async def`

, like in:

```
@app.get('/burgers')
async def read_burgers():
burgers = await get_burgers(2)
return burgers
```


### More technical details[¶](#more-technical-details)

You might have noticed that `await`

can only be used inside of functions defined with `async def`

.

But at the same time, functions defined with `async def`

have to be "awaited". So, functions with `async def`

can only be called inside of functions defined with `async def`

too.

So, about the egg and the chicken, how do you call the first `async`

function?

If you are working with **FastAPI** you don't have to worry about that, because that "first" function will be your *path operation function*, and FastAPI will know how to do the right thing.

But if you want to use `async`

/ `await`

without FastAPI, you can do it as well.

### Write your own async code[¶](#write-your-own-async-code)

Starlette (and **FastAPI**) are based on [AnyIO](https://anyio.readthedocs.io/en/stable/), which makes it compatible with both Python's standard library [asyncio](https://docs.python.org/3/library/asyncio-task.html) and [Trio](https://trio.readthedocs.io/en/stable/).

In particular, you can directly use [AnyIO](https://anyio.readthedocs.io/en/stable/) for your advanced concurrency use cases that require more advanced patterns in your own code.

And even if you were not using FastAPI, you could also write your own async applications with [AnyIO](https://anyio.readthedocs.io/en/stable/) to be highly compatible and get its benefits (e.g. *structured concurrency*).

I created another library on top of AnyIO, as a thin layer on top, to improve a bit the type annotations and get better **autocompletion**, **inline errors**, etc. It also has a friendly introduction and tutorial to help you **understand** and write **your own async code**: [Asyncer](https://asyncer.tiangolo.com/). It would be particularly useful if you need to **combine async code with regular** (blocking/synchronous) code.

### Other forms of asynchronous code[¶](#other-forms-of-asynchronous-code)

This style of using `async`

and `await`

is relatively new in the language.

But it makes working with asynchronous code a lot easier.

This same syntax (or almost identical) was also included recently in modern versions of JavaScript (in Browser and NodeJS).

But before that, handling asynchronous code was quite more complex and difficult.

In previous versions of Python, you could have used threads or [Gevent](https://www.gevent.org/). But the code is way more complex to understand, debug, and think about.

In previous versions of NodeJS / Browser JavaScript, you would have used "callbacks". Which leads to "callback hell".

## Coroutines[¶](#coroutines)

**Coroutine** is just the very fancy term for the thing returned by an `async def`

function. Python knows that it is something like a function, that it can start and that it will end at some point, but that it might be paused ⏸ internally too, whenever there is an `await`

inside of it.

But all this functionality of using asynchronous code with `async`

and `await`

is many times summarized as using "coroutines". It is comparable to the main key feature of Go, the "Goroutines".

## Conclusion[¶](#conclusion)

Let's see the same phrase from above:

Modern versions of Python have support for

"asynchronous code"using something called"coroutines", withsyntax.`async`

and`await`


That should make more sense now. ✨

All that is what powers FastAPI (through Starlette) and what makes it have such an impressive performance.

## Very Technical Details[¶](#very-technical-details)

Warning

You can probably skip this.

These are very technical details of how **FastAPI** works underneath.

If you have quite some technical knowledge (coroutines, threads, blocking, etc.) and are curious about how FastAPI handles `async def`

vs normal `def`

, go ahead.

### Path operation functions[¶](#path-operation-functions)

When you declare a *path operation function* with normal `def`

instead of `async def`

, it is run in an external threadpool that is then awaited, instead of being called directly (as it would block the server).

If you are coming from another async framework that does not work in the way described above and you are used to defining trivial compute-only *path operation functions* with plain `def`

for a tiny performance gain (about 100 nanoseconds), please note that in **FastAPI** the effect would be quite opposite. In these cases, it's better to use `async def`

unless your *path operation functions* use code that performs blocking I/O.

Still, in both situations, chances are that **FastAPI** will [still be faster](../#performance) than (or at least comparable to) your previous framework.

### Dependencies[¶](#dependencies)

The same applies for [dependencies](../tutorial/dependencies/). If a dependency is a standard `def`

function instead of `async def`

, it is run in the external threadpool.

### Sub-dependencies[¶](#sub-dependencies)

You can have multiple dependencies and [sub-dependencies](../tutorial/dependencies/sub-dependencies/) requiring each other (as parameters of the function definitions), some of them might be created with `async def`

and some with normal `def`

. It would still work, and the ones created with normal `def`

would be called on an external thread (from the threadpool) instead of being "awaited".

### Other utility functions[¶](#other-utility-functions)

Any other utility function that you call directly can be created with normal `def`

or `async def`

and FastAPI won't affect the way you call it.

This is in contrast to the functions that FastAPI calls for you: *path operation functions* and dependencies.

If your utility function is a normal function with `def`

, it will be called directly (as you write it in your code), not in a threadpool, if the function is created with `async def`

then you should `await`

for that function when you call it in your code.

Again, these are very technical details that would probably be useful if you came searching for them.

Otherwise, you should be good with the guidelines from the section above: [In a hurry?](#in-a-hurry).

---

## Source: https://fastapi.tiangolo.com/environment-variables/

# Environment Variables[¶](#environment-variables)

Tip

If you already know what "environment variables" are and how to use them, feel free to skip this.

An environment variable (also known as "**env var**") is a variable that lives **outside** of the Python code, in the **operating system**, and could be read by your Python code (or by other programs as well).

Environment variables could be useful for handling application **settings**, as part of the **installation** of Python, etc.

## Create and Use Env Vars[¶](#create-and-use-env-vars)

You can **create** and use environment variables in the **shell (terminal)**, without needing Python:

```
// You could create an env var MY_NAME with
$ export MY_NAME="Wade Wilson"
// Then you could use it with other programs, like
$ echo "Hello $MY_NAME"
Hello Wade Wilson
```


```
// Create an env var MY_NAME
$ $Env:MY_NAME = "Wade Wilson"
// Use it with other programs, like
$ echo "Hello $Env:MY_NAME"
Hello Wade Wilson
```


## Read env vars in Python[¶](#read-env-vars-in-python)

You could also create environment variables **outside** of Python, in the terminal (or with any other method), and then **read them in Python**.

For example you could have a file `main.py`

with:

```
import os
name = os.getenv("MY_NAME", "World")
print(f"Hello {name} from Python")
```


Tip

The second argument to [ os.getenv()](https://docs.python.org/3.8/library/os.html#os.getenv) is the default value to return.

If not provided, it's `None`

by default, here we provide `"World"`

as the default value to use.

Then you could call that Python program:

```
// Here we don't set the env var yet
$ python main.py
// As we didn't set the env var, we get the default value
Hello World from Python
// But if we create an environment variable first
$ export MY_NAME="Wade Wilson"
// And then call the program again
$ python main.py
// Now it can read the environment variable
Hello Wade Wilson from Python
```


```
// Here we don't set the env var yet
$ python main.py
// As we didn't set the env var, we get the default value
Hello World from Python
// But if we create an environment variable first
$ $Env:MY_NAME = "Wade Wilson"
// And then call the program again
$ python main.py
// Now it can read the environment variable
Hello Wade Wilson from Python
```


As environment variables can be set outside of the code, but can be read by the code, and don't have to be stored (committed to `git`

) with the rest of the files, it's common to use them for configurations or **settings**.

You can also create an environment variable only for a **specific program invocation**, that is only available to that program, and only for its duration.

To do that, create it right before the program itself, on the same line:

```
// Create an env var MY_NAME in line for this program call
$ MY_NAME="Wade Wilson" python main.py
// Now it can read the environment variable
Hello Wade Wilson from Python
// The env var no longer exists afterwards
$ python main.py
Hello World from Python
```


Tip

You can read more about it at [The Twelve-Factor App: Config](https://12factor.net/config).

## Types and Validation[¶](#types-and-validation)

These environment variables can only handle **text strings**, as they are external to Python and have to be compatible with other programs and the rest of the system (and even with different operating systems, as Linux, Windows, macOS).

That means that **any value** read in Python from an environment variable **will be a str**, and any conversion to a different type or any validation has to be done in code.

You will learn more about using environment variables for handling **application settings** in the [Advanced User Guide - Settings and Environment Variables](../advanced/settings/).

`PATH`

Environment Variable[¶](#path-environment-variable)

There is a **special** environment variable called ** PATH** that is used by the operating systems (Linux, macOS, Windows) to find programs to run.

The value of the variable `PATH`

is a long string that is made of directories separated by a colon `:`

on Linux and macOS, and by a semicolon `;`

on Windows.

For example, the `PATH`

environment variable could look like this:

```
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
```


This means that the system should look for programs in the directories:

`/usr/local/bin`

`/usr/bin`

`/bin`

`/usr/sbin`

`/sbin`


```
C:\Program Files\Python312\Scripts;C:\Program Files\Python312;C:\Windows\System32
```


This means that the system should look for programs in the directories:

`C:\Program Files\Python312\Scripts`

`C:\Program Files\Python312`

`C:\Windows\System32`


When you type a **command** in the terminal, the operating system **looks for** the program in **each of those directories** listed in the `PATH`

environment variable.

For example, when you type `python`

in the terminal, the operating system looks for a program called `python`

in the **first directory** in that list.

If it finds it, then it will **use it**. Otherwise it keeps looking in the **other directories**.

### Installing Python and Updating the `PATH`

[¶](#installing-python-and-updating-the-path)

When you install Python, you might be asked if you want to update the `PATH`

environment variable.

Let's say you install Python and it ends up in a directory `/opt/custompython/bin`

.

If you say yes to update the `PATH`

environment variable, then the installer will add `/opt/custompython/bin`

to the `PATH`

environment variable.

It could look like this:

```
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/custompython/bin
```


This way, when you type `python`

in the terminal, the system will find the Python program in `/opt/custompython/bin`

(the last directory) and use that one.

Let's say you install Python and it ends up in a directory `C:\opt\custompython\bin`

.

If you say yes to update the `PATH`

environment variable, then the installer will add `C:\opt\custompython\bin`

to the `PATH`

environment variable.

```
C:\Program Files\Python312\Scripts;C:\Program Files\Python312;C:\Windows\System32;C:\opt\custompython\bin
```


This way, when you type `python`

in the terminal, the system will find the Python program in `C:\opt\custompython\bin`

(the last directory) and use that one.

So, if you type:

```
$ python
```


The system will **find** the `python`

program in `/opt/custompython/bin`

and run it.

It would be roughly equivalent to typing:

```
$ /opt/custompython/bin/python
```


The system will **find** the `python`

program in `C:\opt\custompython\bin\python`

and run it.

It would be roughly equivalent to typing:

```
$ C:\opt\custompython\bin\python
```


This information will be useful when learning about [Virtual Environments](../virtual-environments/).

## Conclusion[¶](#conclusion)

With this you should have a basic understanding of what **environment variables** are and how to use them in Python.

You can also read more about them in the [Wikipedia for Environment Variable](https://en.wikipedia.org/wiki/Environment_variable).

In many cases it's not very obvious how environment variables would be useful and applicable right away. But they keep showing up in many different scenarios when you are developing, so it's good to know about them.

For example, you will need this information in the next section, about [Virtual Environments](../virtual-environments/).

---

## Source: https://fastapi.tiangolo.com/virtual-environments/

# Virtual Environments[¶](#virtual-environments)

When you work in Python projects you probably should use a **virtual environment** (or a similar mechanism) to isolate the packages you install for each project.

Info

If you already know about virtual environments, how to create them and use them, you might want to skip this section. 🤓

Tip

A **virtual environment** is different than an **environment variable**.

An **environment variable** is a variable in the system that can be used by programs.

A **virtual environment** is a directory with some files in it.

Info

This page will teach you how to use **virtual environments** and how they work.

If you are ready to adopt a **tool that manages everything** for you (including installing Python), try [uv](https://github.com/astral-sh/uv).

## Create a Project[¶](#create-a-project)

First, create a directory for your project.

What I normally do is that I create a directory named `code`

inside my home/user directory.

And inside of that I create one directory per project.

```
// Go to the home directory
$ cd
// Create a directory for all your code projects
$ mkdir code
// Enter into that code directory
$ cd code
// Create a directory for this project
$ mkdir awesome-project
// Enter into that project directory
$ cd awesome-project
```


## Create a Virtual Environment[¶](#create-a-virtual-environment)

When you start working on a Python project **for the first time**, create a virtual environment **inside your project**.

Tip

You only need to do this **once per project**, not every time you work.

To create a virtual environment, you can use the `venv`

module that comes with Python.

```
$ python -m venv .venv
```


## What that command means

`python`

: use the program called`python`

`-m`

: call a module as a script, we'll tell it which module next`venv`

: use the module called`venv`

that normally comes installed with Python`.venv`

: create the virtual environment in the new directory`.venv`


If you have [ uv](https://github.com/astral-sh/uv) installed, you can use it to create a virtual environment.

```
$ uv venv
```


Tip

By default, `uv`

will create a virtual environment in a directory called `.venv`

.

But you could customize it passing an additional argument with the directory name.

That command creates a new virtual environment in a directory called `.venv`

.

`.venv`

or other name

You could create the virtual environment in a different directory, but there's a convention of calling it `.venv`

.

## Activate the Virtual Environment[¶](#activate-the-virtual-environment)

Activate the new virtual environment so that any Python command you run or package you install uses it.

Tip

Do this **every time** you start a **new terminal session** to work on the project.

```
$ source .venv/bin/activate
```


```
$ .venv\Scripts\Activate.ps1
```


Or if you use Bash for Windows (e.g. [Git Bash](https://gitforwindows.org/)):

```
$ source .venv/Scripts/activate
```


Tip

Every time you install a **new package** in that environment, **activate** the environment again.

This makes sure that if you use a **terminal (CLI) program** installed by that package, you use the one from your virtual environment and not any other that could be installed globally, probably with a different version than what you need.

## Check the Virtual Environment is Active[¶](#check-the-virtual-environment-is-active)

Check that the virtual environment is active (the previous command worked).

Tip

This is **optional**, but it's a good way to **check** that everything is working as expected and you are using the virtual environment you intended.

```
$ which python
/home/user/code/awesome-project/.venv/bin/python
```


If it shows the `python`

binary at `.venv/bin/python`

, inside of your project (in this case `awesome-project`

), then it worked. 🎉

```
$ Get-Command python
C:\Users\user\code\awesome-project\.venv\Scripts\python
```


If it shows the `python`

binary at `.venv\Scripts\python`

, inside of your project (in this case `awesome-project`

), then it worked. 🎉

## Upgrade `pip`

[¶](#upgrade-pip)

Tip

If you use [ uv](https://github.com/astral-sh/uv) you would use it to install things instead of

`pip`

, so you don't need to upgrade `pip`

. 😎If you are using `pip`

to install packages (it comes by default with Python), you should **upgrade** it to the latest version.

Many exotic errors while installing a package are solved by just upgrading `pip`

first.

Tip

You would normally do this **once**, right after you create the virtual environment.

Make sure the virtual environment is active (with the command above) and then run:

```
$ python -m pip install --upgrade pip
---> 100%
```


Tip

Sometimes, you might get a ** No module named pip** error when trying to upgrade pip.

If this happens, install and upgrade pip using the command below:

```
$ python -m ensurepip --upgrade
---> 100%
```


This command will install pip if it is not already installed and also ensures that the installed version of pip is at least as recent as the one available in `ensurepip`

.

## Add `.gitignore`

[¶](#add-gitignore)

If you are using **Git** (you should), add a `.gitignore`

file to exclude everything in your `.venv`

from Git.

Tip

If you used [ uv](https://github.com/astral-sh/uv) to create the virtual environment, it already did this for you, you can skip this step. 😎

Tip

Do this **once**, right after you create the virtual environment.

```
$ echo "*" > .venv/.gitignore
```


## What that command means

`echo "*"`

: will "print" the text`*`

in the terminal (the next part changes that a bit)`>`

: anything printed to the terminal by the command to the left of`>`

should not be printed but instead written to the file that goes to the right of`>`

`.gitignore`

: the name of the file where the text should be written

And `*`

for Git means "everything". So, it will ignore everything in the `.venv`

directory.

That command will create a file `.gitignore`

with the content:

```
*
```


## Install Packages[¶](#install-packages)

After activating the environment, you can install packages in it.

Tip

Do this **once** when installing or upgrading the packages your project needs.

If you need to upgrade a version or add a new package you would **do this again**.

### Install Packages Directly[¶](#install-packages-directly)

If you're in a hurry and don't want to use a file to declare your project's package requirements, you can install them directly.

Tip

It's a (very) good idea to put the packages and versions your program needs in a file (for example `requirements.txt`

or `pyproject.toml`

).

```
$ pip install "fastapi[standard]"
---> 100%
```


If you have [ uv](https://github.com/astral-sh/uv):

```
$ uv pip install "fastapi[standard]"
---> 100%
```


### Install from `requirements.txt`

[¶](#install-from-requirements-txt)

If you have a `requirements.txt`

, you can now use it to install its packages.

```
$ pip install -r requirements.txt
---> 100%
```


If you have [ uv](https://github.com/astral-sh/uv):

```
$ uv pip install -r requirements.txt
---> 100%
```


`requirements.txt`


A `requirements.txt`

with some packages could look like:

```
fastapi[standard]==0.113.0
pydantic==2.8.0
```


## Run Your Program[¶](#run-your-program)

After you activated the virtual environment, you can run your program, and it will use the Python inside of your virtual environment with the packages you installed there.

```
$ python main.py
Hello World
```


## Configure Your Editor[¶](#configure-your-editor)

You would probably use an editor, make sure you configure it to use the same virtual environment you created (it will probably autodetect it) so that you can get autocompletion and inline errors.

For example:

Tip

You normally have to do this only **once**, when you create the virtual environment.

## Deactivate the Virtual Environment[¶](#deactivate-the-virtual-environment)

Once you are done working on your project you can **deactivate** the virtual environment.

```
$ deactivate
```


This way, when you run `python`

it won't try to run it from that virtual environment with the packages installed there.

## Ready to Work[¶](#ready-to-work)

Now you're ready to start working on your project.

Tip

Do you want to understand what's all that above?

Continue reading. 👇🤓

## Why Virtual Environments[¶](#why-virtual-environments)

To work with FastAPI you need to install [Python](https://www.python.org/).

After that, you would need to **install** FastAPI and any other **packages** you want to use.

To install packages you would normally use the `pip`

command that comes with Python (or similar alternatives).

Nevertheless, if you just use `pip`

directly, the packages would be installed in your **global Python environment** (the global installation of Python).

### The Problem[¶](#the-problem)

So, what's the problem with installing packages in the global Python environment?

At some point, you will probably end up writing many different programs that depend on **different packages**. And some of these projects you work on will depend on **different versions** of the same package. 😱

For example, you could create a project called `philosophers-stone`

, this program depends on another package called ** harry, using the version 1**. So, you need to install


`harry`

.```
flowchart LR
stone(philosophers-stone) -->|requires| harry-1[harry v1]
```


Then, at some point later, you create another project called `prisoner-of-azkaban`

, and this project also depends on `harry`

, but this project needs ** harry version 3**.


```
flowchart LR
azkaban(prisoner-of-azkaban) --> |requires| harry-3[harry v3]
```


But now the problem is, if you install the packages globally (in the global environment) instead of in a local **virtual environment**, you will have to choose which version of `harry`

to install.

If you want to run `philosophers-stone`

you will need to first install `harry`

version `1`

, for example with:

```
$ pip install "harry==1"
```


And then you would end up with `harry`

version `1`

installed in your global Python environment.

```
flowchart LR
subgraph global[global env]
harry-1[harry v1]
end
subgraph stone-project[philosophers-stone project]
stone(philosophers-stone) -->|requires| harry-1
end
```


But then if you want to run `prisoner-of-azkaban`

, you will need to uninstall `harry`

version `1`

and install `harry`

version `3`

(or just installing version `3`

would automatically uninstall version `1`

).

```
$ pip install "harry==3"
```


And then you would end up with `harry`

version `3`

installed in your global Python environment.

And if you try to run `philosophers-stone`

again, there's a chance it would **not work** because it needs `harry`

version `1`

.

```
flowchart LR
subgraph global[global env]
harry-1[<strike>harry v1</strike>]
style harry-1 fill:#ccc,stroke-dasharray: 5 5
harry-3[harry v3]
end
subgraph stone-project[philosophers-stone project]
stone(philosophers-stone) -.-x|⛔️| harry-1
end
subgraph azkaban-project[prisoner-of-azkaban project]
azkaban(prisoner-of-azkaban) --> |requires| harry-3
end
```


Tip

It's very common in Python packages to try the best to **avoid breaking changes** in **new versions**, but it's better to be safe, and install newer versions intentionally and when you can run the tests to check everything is working correctly.

Now, imagine that with **many** other **packages** that all your **projects depend on**. That's very difficult to manage. And you would probably end up running some projects with some **incompatible versions** of the packages, and not knowing why something isn't working.

Also, depending on your operating system (e.g. Linux, Windows, macOS), it could have come with Python already installed. And in that case it probably had some packages pre-installed with some specific versions **needed by your system**. If you install packages in the global Python environment, you could end up **breaking** some of the programs that came with your operating system.

## Where are Packages Installed[¶](#where-are-packages-installed)

When you install Python, it creates some directories with some files in your computer.

Some of these directories are the ones in charge of having all the packages you install.

When you run:

```
// Don't run this now, it's just an example 🤓
$ pip install "fastapi[standard]"
---> 100%
```


That will download a compressed file with the FastAPI code, normally from [PyPI](https://pypi.org/project/fastapi/).

It will also **download** files for other packages that FastAPI depends on.

Then it will **extract** all those files and put them in a directory in your computer.

By default, it will put those files downloaded and extracted in the directory that comes with your Python installation, that's the **global environment**.

## What are Virtual Environments[¶](#what-are-virtual-environments)

The solution to the problems of having all the packages in the global environment is to use a **virtual environment for each project** you work on.

A virtual environment is a **directory**, very similar to the global one, where you can install the packages for a project.

This way, each project will have its own virtual environment (`.venv`

directory) with its own packages.

```
flowchart TB
subgraph stone-project[philosophers-stone project]
stone(philosophers-stone) --->|requires| harry-1
subgraph venv1[.venv]
harry-1[harry v1]
end
end
subgraph azkaban-project[prisoner-of-azkaban project]
azkaban(prisoner-of-azkaban) --->|requires| harry-3
subgraph venv2[.venv]
harry-3[harry v3]
end
end
stone-project ~~~ azkaban-project
```


## What Does Activating a Virtual Environment Mean[¶](#what-does-activating-a-virtual-environment-mean)

When you activate a virtual environment, for example with:

```
$ source .venv/bin/activate
```


```
$ .venv\Scripts\Activate.ps1
```


Or if you use Bash for Windows (e.g. [Git Bash](https://gitforwindows.org/)):

```
$ source .venv/Scripts/activate
```


That command will create or modify some [environment variables](../environment-variables/) that will be available for the next commands.

One of those variables is the `PATH`

variable.

Tip

You can learn more about the `PATH`

environment variable in the [Environment Variables](../environment-variables/#path-environment-variable) section.

Activating a virtual environment adds its path `.venv/bin`

(on Linux and macOS) or `.venv\Scripts`

(on Windows) to the `PATH`

environment variable.

Let's say that before activating the environment, the `PATH`

variable looked like this:

```
/usr/bin:/bin:/usr/sbin:/sbin
```


That means that the system would look for programs in:

`/usr/bin`

`/bin`

`/usr/sbin`

`/sbin`


```
C:\Windows\System32
```


That means that the system would look for programs in:

`C:\Windows\System32`


After activating the virtual environment, the `PATH`

variable would look something like this:

```
/home/user/code/awesome-project/.venv/bin:/usr/bin:/bin:/usr/sbin:/sbin
```


That means that the system will now start looking first for programs in:

```
/home/user/code/awesome-project/.venv/bin
```


before looking in the other directories.

So, when you type `python`

in the terminal, the system will find the Python program in

```
/home/user/code/awesome-project/.venv/bin/python
```


and use that one.

```
C:\Users\user\code\awesome-project\.venv\Scripts;C:\Windows\System32
```


That means that the system will now start looking first for programs in:

```
C:\Users\user\code\awesome-project\.venv\Scripts
```


before looking in the other directories.

So, when you type `python`

in the terminal, the system will find the Python program in

```
C:\Users\user\code\awesome-project\.venv\Scripts\python
```


and use that one.

An important detail is that it will put the virtual environment path at the **beginning** of the `PATH`

variable. The system will find it **before** finding any other Python available. This way, when you run `python`

, it will use the Python **from the virtual environment** instead of any other `python`

(for example, a `python`

from a global environment).

Activating a virtual environment also changes a couple of other things, but this is one of the most important things it does.

## Checking a Virtual Environment[¶](#checking-a-virtual-environment)

When you check if a virtual environment is active, for example with:

```
$ which python
/home/user/code/awesome-project/.venv/bin/python
```


```
$ Get-Command python
C:\Users\user\code\awesome-project\.venv\Scripts\python
```


That means that the `python`

program that will be used is the one **in the virtual environment**.

You use `which`

in Linux and macOS and `Get-Command`

in Windows PowerShell.

The way that command works is that it will go and check in the `PATH`

environment variable, going through **each path in order**, looking for the program called `python`

. Once it finds it, it will **show you the path** to that program.

The most important part is that when you call `python`

, that is the exact "`python`

" that will be executed.

So, you can confirm if you are in the correct virtual environment.

Tip

It's easy to activate one virtual environment, get one Python, and then **go to another project**.

And the second project **wouldn't work** because you are using the **incorrect Python**, from a virtual environment for another project.

It's useful being able to check what `python`

is being used. 🤓

## Why Deactivate a Virtual Environment[¶](#why-deactivate-a-virtual-environment)

For example, you could be working on a project `philosophers-stone`

, **activate that virtual environment**, install packages and work with that environment.

And then you want to work on **another project** `prisoner-of-azkaban`

.

You go to that project:

```
$ cd ~/code/prisoner-of-azkaban
```


If you don't deactivate the virtual environment for `philosophers-stone`

, when you run `python`

in the terminal, it will try to use the Python from `philosophers-stone`

.

```
$ cd ~/code/prisoner-of-azkaban
$ python main.py
// Error importing sirius, it's not installed 😱
Traceback (most recent call last):
File "main.py", line 1, in <module>
import sirius
```


But if you deactivate the virtual environment and activate the new one for `prisoner-of-askaban`

then when you run `python`

it will use the Python from the virtual environment in `prisoner-of-azkaban`

.

```
$ cd ~/code/prisoner-of-azkaban
// You don't need to be in the old directory to deactivate, you can do it wherever you are, even after going to the other project 😎
$ deactivate
// Activate the virtual environment in prisoner-of-azkaban/.venv 🚀
$ source .venv/bin/activate
// Now when you run python, it will find the package sirius installed in this virtual environment ✨
$ python main.py
I solemnly swear 🐺
```


## Alternatives[¶](#alternatives)

This is a simple guide to get you started and teach you how everything works **underneath**.

There are many **alternatives** to managing virtual environments, package dependencies (requirements), projects.

Once you are ready and want to use a tool to **manage the entire project**, packages dependencies, virtual environments, etc. I would suggest you try [uv](https://github.com/astral-sh/uv).

`uv`

can do a lot of things, it can:

**Install Python**for you, including different versions- Manage the
**virtual environment**for your projects - Install
**packages** - Manage package
**dependencies and versions**for your project - Make sure you have an
**exact**set of packages and versions to install, including their dependencies, so that you can be sure that you can run your project in production exactly the same as in your computer while developing, this is called**locking** - And many other things

## Conclusion[¶](#conclusion)

If you read and understood all this, now **you know much more** about virtual environments than many developers out there. 🤓

Knowing these details will most probably be useful in a future time when you are debugging something that seems complex, but you will know **how it all works underneath**. 😎

---

## Source: https://fastapi.tiangolo.com/tutorial/

# Tutorial - User Guide[¶](#tutorial-user-guide)

This tutorial shows you how to use **FastAPI** with most of its features, step by step.

Each section gradually builds on the previous ones, but it's structured to separate topics, so that you can go directly to any specific one to solve your specific API needs.

It is also built to work as a future reference so you can come back and see exactly what you need.

## Run the code[¶](#run-the-code)

All the code blocks can be copied and used directly (they are actually tested Python files).

To run any of the examples, copy the code to a file `main.py`

, and start `fastapi dev`

:

```
$ <font color="#4E9A06">fastapi</font> dev
<span style="background-color:#009485"><font color="#D3D7CF"> FastAPI </font></span> Starting development server 🚀
Searching for package file structure from directories
with <font color="#3465A4">__init__.py</font> files
Importing from <font color="#75507B">/home/user/code/</font><font color="#AD7FA8">awesomeapp</font>
<span style="background-color:#007166"><font color="#D3D7CF"> module </font></span> 🐍 main.py
<span style="background-color:#007166"><font color="#D3D7CF"> code </font></span> Importing the FastAPI app object from the module with
the following code:
<u style="text-decoration-style:solid">from </u><u style="text-decoration-style:solid"><b>main</b></u><u style="text-decoration-style:solid"> import </u><u style="text-decoration-style:solid"><b>app</b></u>
<span style="background-color:#007166"><font color="#D3D7CF"> app </font></span> Using import string: <font color="#3465A4">main:app</font>
<span style="background-color:#007166"><font color="#D3D7CF"> server </font></span> Server started at <font color="#729FCF"><u style="text-decoration-style:solid">http://127.0.0.1:8000</u></font>
<span style="background-color:#007166"><font color="#D3D7CF"> server </font></span> Documentation at <font color="#729FCF"><u style="text-decoration-style:solid">http://127.0.0.1:8000/docs</u></font>
<span style="background-color:#007166"><font color="#D3D7CF"> tip </font></span> Running in development mode, for production use:
<b>fastapi run</b>
Logs:
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Will watch for changes in these directories:
<b>[</b><font color="#4E9A06">'/home/user/code/awesomeapp'</font><b>]</b>
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Uvicorn running on <font color="#729FCF"><u style="text-decoration-style:solid">http://127.0.0.1:8000</u></font> <b>(</b>Press CTRL+C
to quit<b>)</b>
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Started reloader process <b>[</b><font color="#34E2E2"><b>383138</b></font><b>]</b> using WatchFiles
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Started server process <b>[</b><font color="#34E2E2"><b>383153</b></font><b>]</b>
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Waiting for application startup.
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Application startup complete.
```


It is **HIGHLY encouraged** that you write or copy the code, edit it and run it locally.

Using it in your editor is what really shows you the benefits of FastAPI, seeing how little code you have to write, all the type checks, autocompletion, etc.

## Install FastAPI[¶](#install-fastapi)

The first step is to install FastAPI.

Make sure you create a [virtual environment](../virtual-environments/), activate it, and then **install FastAPI**:

```
$ pip install "fastapi[standard]"
---> 100%
```


Note

When you install with `pip install "fastapi[standard]"`

it comes with some default optional standard dependencies, including `fastapi-cloud-cli`

, which allows you to deploy to [FastAPI Cloud](https://fastapicloud.com).

If you don't want to have those optional dependencies, you can instead install `pip install fastapi`

.

If you want to install the standard dependencies but without the `fastapi-cloud-cli`

, you can install with `pip install "fastapi[standard-no-fastapi-cloud-cli]"`

.

Tip

FastAPI has an [official extension for VS Code](https://marketplace.visualstudio.com/items?itemName=FastAPILabs.fastapi-vscode) (and Cursor), which provides a lot of features, including a path operation explorer, path operation search, CodeLens navigation in tests (jump to definition from tests), and FastAPI Cloud deployment and logs, all from your editor.

## Advanced User Guide[¶](#advanced-user-guide)

There is also an **Advanced User Guide** that you can read later after this **Tutorial - User guide**.

The **Advanced User Guide** builds on this one, uses the same concepts, and teaches you some extra features.

But you should first read the **Tutorial - User Guide** (what you are reading right now).

It's designed so that you can build a complete application with just the **Tutorial - User Guide**, and then extend it in different ways, depending on your needs, using some of the additional ideas from the **Advanced User Guide**.

---

## Source: https://fastapi.tiangolo.com/tutorial/first-steps/

# First Steps[¶](#first-steps)

The simplest FastAPI file could look like this:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def root():
return {"message": "Hello World"}
```


Copy that to a file `main.py`

.

Run the live server:

```
$ <font color="#4E9A06">fastapi</font> dev
<span style="background-color:#009485"><font color="#D3D7CF"> FastAPI </font></span> Starting development server 🚀
Searching for package file structure from directories
with <font color="#3465A4">__init__.py</font> files
Importing from <font color="#75507B">/home/user/code/</font><font color="#AD7FA8">awesomeapp</font>
<span style="background-color:#007166"><font color="#D3D7CF"> module </font></span> 🐍 main.py
<span style="background-color:#007166"><font color="#D3D7CF"> code </font></span> Importing the FastAPI app object from the module with
the following code:
<u style="text-decoration-style:solid">from </u><u style="text-decoration-style:solid"><b>main</b></u><u style="text-decoration-style:solid"> import </u><u style="text-decoration-style:solid"><b>app</b></u>
<span style="background-color:#007166"><font color="#D3D7CF"> app </font></span> Using import string: <font color="#3465A4">main:app</font>
<span style="background-color:#007166"><font color="#D3D7CF"> server </font></span> Server started at <font color="#729FCF"><u style="text-decoration-style:solid">http://127.0.0.1:8000</u></font>
<span style="background-color:#007166"><font color="#D3D7CF"> server </font></span> Documentation at <font color="#729FCF"><u style="text-decoration-style:solid">http://127.0.0.1:8000/docs</u></font>
<span style="background-color:#007166"><font color="#D3D7CF"> tip </font></span> Running in development mode, for production use:
<b>fastapi run</b>
Logs:
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Will watch for changes in these directories:
<b>[</b><font color="#4E9A06">'/home/user/code/awesomeapp'</font><b>]</b>
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Uvicorn running on <font color="#729FCF"><u style="text-decoration-style:solid">http://127.0.0.1:8000</u></font> <b>(</b>Press CTRL+C
to quit<b>)</b>
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Started reloader process <b>[</b><font color="#34E2E2"><b>383138</b></font><b>]</b> using WatchFiles
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Started server process <b>[</b><font color="#34E2E2"><b>383153</b></font><b>]</b>
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Waiting for application startup.
<span style="background-color:#007166"><font color="#D3D7CF"> INFO </font></span> Application startup complete.
```


In the output, there's a line with something like:

```
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
```


That line shows the URL where your app is being served on your local machine.

### Check it[¶](#check-it)

Open your browser at [http://127.0.0.1:8000](http://127.0.0.1:8000).

You will see the JSON response as:

```
{"message": "Hello World"}
```


### Interactive API docs[¶](#interactive-api-docs)

Now go to [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

You will see the automatic interactive API documentation (provided by [Swagger UI](https://github.com/swagger-api/swagger-ui)):

### Alternative API docs[¶](#alternative-api-docs)

And now, go to [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc).

You will see the alternative automatic documentation (provided by [ReDoc](https://github.com/Rebilly/ReDoc)):

### OpenAPI[¶](#openapi)

**FastAPI** generates a "schema" with all your API using the **OpenAPI** standard for defining APIs.

#### "Schema"[¶](#schema)

A "schema" is a definition or description of something. Not the code that implements it, but just an abstract description.

#### API "schema"[¶](#api-schema)

In this case, [OpenAPI](https://github.com/OAI/OpenAPI-Specification) is a specification that dictates how to define a schema of your API.

This schema definition includes your API paths, the possible parameters they take, etc.

#### Data "schema"[¶](#data-schema)

The term "schema" might also refer to the shape of some data, like a JSON content.

In that case, it would mean the JSON attributes, and data types they have, etc.

#### OpenAPI and JSON Schema[¶](#openapi-and-json-schema)

OpenAPI defines an API schema for your API. And that schema includes definitions (or "schemas") of the data sent and received by your API using **JSON Schema**, the standard for JSON data schemas.

#### Check the `openapi.json`

[¶](#check-the-openapi-json)

If you are curious about how the raw OpenAPI schema looks like, FastAPI automatically generates a JSON (schema) with the descriptions of all your API.

You can see it directly at: [http://127.0.0.1:8000/openapi.json](http://127.0.0.1:8000/openapi.json).

It will show a JSON starting with something like:

```
{
"openapi": "3.1.0",
"info": {
"title": "FastAPI",
"version": "0.1.0"
},
"paths": {
"/items/": {
"get": {
"responses": {
"200": {
"description": "Successful Response",
"content": {
"application/json": {
...
```


#### What is OpenAPI for[¶](#what-is-openapi-for)

The OpenAPI schema is what powers the two interactive documentation systems included.

And there are dozens of alternatives, all based on OpenAPI. You could easily add any of those alternatives to your application built with **FastAPI**.

You could also use it to generate code automatically, for clients that communicate with your API. For example, frontend, mobile or IoT applications.

### Configure the app `entrypoint`

in `pyproject.toml`

[¶](#configure-the-app-entrypoint-in-pyproject-toml)

You can configure where your app is located in a `pyproject.toml`

file like:

```
[tool.fastapi]
entrypoint = "main:app"
```


That `entrypoint`

will tell the `fastapi`

command that it should import the app like:

```
from main import app
```


If your code was structured like:

```
.
├── backend
│ ├── main.py
│ ├── __init__.py
```


Then you would set the `entrypoint`

as:

```
[tool.fastapi]
entrypoint = "backend.main:app"
```


which would be equivalent to:

```
from backend.main import app
```


`fastapi dev`

with path[¶](#fastapi-dev-with-path)

You can also pass the file path to the `fastapi dev`

command, and it will guess the FastAPI app object to use:

```
$ fastapi dev main.py
```


But you would have to remember to pass the correct path every time you call the `fastapi`

command.

Additionally, other tools might not be able to find it, for example the [VS Code Extension](../../editor-support/) or [FastAPI Cloud](https://fastapicloud.com), so it is recommended to use the `entrypoint`

in `pyproject.toml`

.

### Deploy your app (optional)[¶](#deploy-your-app-optional)

You can optionally deploy your FastAPI app to [FastAPI Cloud](https://fastapicloud.com), go and join the waiting list if you haven't. 🚀

If you already have a **FastAPI Cloud** account (we invited you from the waiting list 😉), you can deploy your application with one command.

Before deploying, make sure you are logged in:

```
$ fastapi login
You are logged in to FastAPI Cloud 🚀
```


Then deploy your app:

```
$ fastapi deploy
Deploying to FastAPI Cloud...
✅ Deployment successful!
🐔 Ready the chicken! Your app is ready at https://myapp.fastapicloud.dev
```


That's it! Now you can access your app at that URL. ✨

## Recap, step by step[¶](#recap-step-by-step)

### Step 1: import `FastAPI`

[¶](#step-1-import-fastapi)

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def root():
return {"message": "Hello World"}
```


`FastAPI`

is a Python class that provides all the functionality for your API.

Technical Details

`FastAPI`

is a class that inherits directly from `Starlette`

.

You can use all the [Starlette](https://www.starlette.dev/) functionality with `FastAPI`

too.

### Step 2: create a `FastAPI`

"instance"[¶](#step-2-create-a-fastapi-instance)

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def root():
return {"message": "Hello World"}
```


Here the `app`

variable will be an "instance" of the class `FastAPI`

.

This will be the main point of interaction to create all your API.

### Step 3: create a *path operation*[¶](#step-3-create-a-path-operation)

#### Path[¶](#path)

"Path" here refers to the last part of the URL starting from the first `/`

.

So, in a URL like:

```
https://example.com/items/foo
```


...the path would be:

```
/items/foo
```


Info

A "path" is also commonly called an "endpoint" or a "route".

While building an API, the "path" is the main way to separate "concerns" and "resources".

#### Operation[¶](#operation)

"Operation" here refers to one of the HTTP "methods".

One of:

`POST`

`GET`

`PUT`

`DELETE`


...and the more exotic ones:

`OPTIONS`

`HEAD`

`PATCH`

`TRACE`


In the HTTP protocol, you can communicate to each path using one (or more) of these "methods".

When building APIs, you normally use these specific HTTP methods to perform a specific action.

Normally you use:

`POST`

: to create data.`GET`

: to read data.`PUT`

: to update data.`DELETE`

: to delete data.

So, in OpenAPI, each of the HTTP methods is called an "operation".

We are going to call them "**operations**" too.

#### Define a *path operation decorator*[¶](#define-a-path-operation-decorator)

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def root():
return {"message": "Hello World"}
```


The `@app.get("/")`

tells **FastAPI** that the function right below is in charge of handling requests that go to:

- the path
`/`

- using a
`get`

operation

`@decorator`

Info

That `@something`

syntax in Python is called a "decorator".

You put it on top of a function. Like a pretty decorative hat (I guess that's where the term came from).

A "decorator" takes the function below and does something with it.

In our case, this decorator tells **FastAPI** that the function below corresponds to the **path** `/`

with an **operation** `get`

.

It is the "**path operation decorator**".

You can also use the other operations:

`@app.post()`

`@app.put()`

`@app.delete()`


And the more exotic ones:

`@app.options()`

`@app.head()`

`@app.patch()`

`@app.trace()`


Tip

You are free to use each operation (HTTP method) as you wish.

**FastAPI** doesn't enforce any specific meaning.

The information here is presented as a guideline, not a requirement.

For example, when using GraphQL you normally perform all the actions using only `POST`

operations.

### Step 4: define the **path operation function**[¶](#step-4-define-the-path-operation-function)

This is our "**path operation function**":

**path**: is`/`

.**operation**: is`get`

.**function**: is the function below the "decorator" (below`@app.get("/")`

).

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def root():
return {"message": "Hello World"}
```


This is a Python function.

It will be called by **FastAPI** whenever it receives a request to the URL "`/`

" using a `GET`

operation.

In this case, it is an `async`

function.

You could also define it as a normal function instead of `async def`

:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def root():
return {"message": "Hello World"}
```


Note

If you don't know the difference, check the [Async: "In a hurry?"](../../async/#in-a-hurry).

### Step 5: return the content[¶](#step-5-return-the-content)

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def root():
return {"message": "Hello World"}
```


You can return a `dict`

, `list`

, singular values as `str`

, `int`

, etc.

You can also return Pydantic models (you'll see more about that later).

There are many other objects and models that will be automatically converted to JSON (including ORMs, etc). Try using your favorite ones, it's highly probable that they are already supported.

### Step 6: Deploy it[¶](#step-6-deploy-it)

Deploy your app to ** FastAPI Cloud** with one command:

`fastapi deploy`

. 🎉#### About FastAPI Cloud[¶](#about-fastapi-cloud)

** FastAPI Cloud** is built by the same author and team behind

**FastAPI**.

It streamlines the process of **building**, **deploying**, and **accessing** an API with minimal effort.

It brings the same **developer experience** of building apps with FastAPI to **deploying** them to the cloud. 🎉

FastAPI Cloud is the primary sponsor and funding provider for the *FastAPI and friends* open source projects. ✨

#### Deploy to other cloud providers[¶](#deploy-to-other-cloud-providers)

FastAPI is open source and based on standards. You can deploy FastAPI apps to any cloud provider you choose.

Follow your cloud provider's guides to deploy FastAPI apps with them. 🤓

## Recap[¶](#recap)

- Import
`FastAPI`

. - Create an
`app`

instance. - Write a
**path operation decorator**using decorators like`@app.get("/")`

. - Define a
**path operation function**; for example,`def root(): ...`

. - Run the development server using the command
`fastapi dev`

. - Optionally deploy your app with
`fastapi deploy`

.

---

## Source: https://fastapi.tiangolo.com/tutorial/path-params/

# Path Parameters[¶](#path-parameters)

You can declare path "parameters" or "variables" with the same syntax used by Python format strings:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/items/{item_id}")
async def read_item(item_id):
return {"item_id": item_id}
```


The value of the path parameter `item_id`

will be passed to your function as the argument `item_id`

.

So, if you run this example and go to [http://127.0.0.1:8000/items/foo](http://127.0.0.1:8000/items/foo), you will see a response of:

```
{"item_id":"foo"}
```


## Path parameters with types[¶](#path-parameters-with-types)

You can declare the type of a path parameter in the function, using standard Python type annotations:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/items/{item_id}")
async def read_item(item_id: int):
return {"item_id": item_id}
```


In this case, `item_id`

is declared to be an `int`

.

Check

This will give you editor support inside of your function, with error checks, completion, etc.

## Data conversion[¶](#data-conversion)

If you run this example and open your browser at [http://127.0.0.1:8000/items/3](http://127.0.0.1:8000/items/3), you will see a response of:

```
{"item_id":3}
```


Check

Notice that the value your function received (and returned) is `3`

, as a Python `int`

, not a string `"3"`

.

So, with that type declaration, **FastAPI** gives you automatic request "parsing".

## Data validation[¶](#data-validation)

But if you go to the browser at [http://127.0.0.1:8000/items/foo](http://127.0.0.1:8000/items/foo), you will see a nice HTTP error of:

```
{
"detail": [
{
"type": "int_parsing",
"loc": [
"path",
"item_id"
],
"msg": "Input should be a valid integer, unable to parse string as an integer",
"input": "foo"
}
]
}
```


because the path parameter `item_id`

had a value of `"foo"`

, which is not an `int`

.

The same error would appear if you provided a `float`

instead of an `int`

, as in: [http://127.0.0.1:8000/items/4.2](http://127.0.0.1:8000/items/4.2)

Check

So, with the same Python type declaration, **FastAPI** gives you data validation.

Notice that the error also clearly states exactly the point where the validation didn't pass.

This is incredibly helpful while developing and debugging code that interacts with your API.

## Documentation[¶](#documentation)

And when you open your browser at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs), you will see an automatic, interactive, API documentation like:

Check

Again, just with that same Python type declaration, **FastAPI** gives you automatic, interactive documentation (integrating Swagger UI).

Notice that the path parameter is declared to be an integer.

## Standards-based benefits, alternative documentation[¶](#standards-based-benefits-alternative-documentation)

And because the generated schema is from the [OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md) standard, there are many compatible tools.

Because of this, **FastAPI** itself provides an alternative API documentation (using ReDoc), which you can access at [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc):

The same way, there are many compatible tools. Including code generation tools for many languages.

## Pydantic[¶](#pydantic)

All the data validation is performed under the hood by [Pydantic](https://docs.pydantic.dev/), so you get all the benefits from it. And you know you are in good hands.

You can use the same type declarations with `str`

, `float`

, `bool`

and many other complex data types.

Several of these are explored in the next chapters of the tutorial.

## Order matters[¶](#order-matters)

When creating *path operations*, you can find situations where you have a fixed path.

Like `/users/me`

, let's say that it's to get data about the current user.

And then you can also have a path `/users/{user_id}`

to get data about a specific user by some user ID.

Because *path operations* are evaluated in order, you need to make sure that the path for `/users/me`

is declared before the one for `/users/{user_id}`

:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/users/me")
async def read_user_me():
return {"user_id": "the current user"}
@app.get("/users/{user_id}")
async def read_user(user_id: str):
return {"user_id": user_id}
```


Otherwise, the path for `/users/{user_id}`

would match also for `/users/me`

, "thinking" that it's receiving a parameter `user_id`

with a value of `"me"`

.

Similarly, you cannot redefine a path operation:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/users")
async def read_users():
return ["Rick", "Morty"]
@app.get("/users")
async def read_users2():
return ["Bean", "Elfo"]
```


The first one will always be used since the path matches first.

## Predefined values[¶](#predefined-values)

If you have a *path operation* that receives a *path parameter*, but you want the possible valid *path parameter* values to be predefined, you can use a standard Python `Enum`

.

### Create an `Enum`

class[¶](#create-an-enum-class)

Import `Enum`

and create a sub-class that inherits from `str`

and from `Enum`

.

By inheriting from `str`

the API docs will be able to know that the values must be of type `string`

and will be able to render correctly.

Then create class attributes with fixed values, which will be the available valid values:

```
from enum import Enum
from fastapi import FastAPI
class ModelName(str, Enum):
alexnet = "alexnet"
resnet = "resnet"
lenet = "lenet"
app = FastAPI()
@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
if model_name is ModelName.alexnet:
return {"model_name": model_name, "message": "Deep Learning FTW!"}
if model_name.value == "lenet":
return {"model_name": model_name, "message": "LeCNN all the images"}
return {"model_name": model_name, "message": "Have some residuals"}
```


Tip

If you are wondering, "AlexNet", "ResNet", and "LeNet" are just names of Machine Learning models.

### Declare a *path parameter*[¶](#declare-a-path-parameter)

Then create a *path parameter* with a type annotation using the enum class you created (`ModelName`

):

```
from enum import Enum
from fastapi import FastAPI
class ModelName(str, Enum):
alexnet = "alexnet"
resnet = "resnet"
lenet = "lenet"
app = FastAPI()
@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
if model_name is ModelName.alexnet:
return {"model_name": model_name, "message": "Deep Learning FTW!"}
if model_name.value == "lenet":
return {"model_name": model_name, "message": "LeCNN all the images"}
return {"model_name": model_name, "message": "Have some residuals"}
```


### Check the docs[¶](#check-the-docs)

Because the available values for the *path parameter* are predefined, the interactive docs can show them nicely:

### Working with Python *enumerations*[¶](#working-with-python-enumerations)

The value of the *path parameter* will be an *enumeration member*.

#### Compare *enumeration members*[¶](#compare-enumeration-members)

You can compare it with the *enumeration member* in your created enum `ModelName`

:

```
from enum import Enum
from fastapi import FastAPI
class ModelName(str, Enum):
alexnet = "alexnet"
resnet = "resnet"
lenet = "lenet"
app = FastAPI()
@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
if model_name is ModelName.alexnet:
return {"model_name": model_name, "message": "Deep Learning FTW!"}
if model_name.value == "lenet":
return {"model_name": model_name, "message": "LeCNN all the images"}
return {"model_name": model_name, "message": "Have some residuals"}
```


#### Get the *enumeration value*[¶](#get-the-enumeration-value)

You can get the actual value (a `str`

in this case) using `model_name.value`

, or in general, `your_enum_member.value`

:

```
from enum import Enum
from fastapi import FastAPI
class ModelName(str, Enum):
alexnet = "alexnet"
resnet = "resnet"
lenet = "lenet"
app = FastAPI()
@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
if model_name is ModelName.alexnet:
return {"model_name": model_name, "message": "Deep Learning FTW!"}
if model_name.value == "lenet":
return {"model_name": model_name, "message": "LeCNN all the images"}
return {"model_name": model_name, "message": "Have some residuals"}
```


Tip

You could also access the value `"lenet"`

with `ModelName.lenet.value`

.

#### Return *enumeration members*[¶](#return-enumeration-members)

You can return *enum members* from your *path operation*, even nested in a JSON body (e.g. a `dict`

).

They will be converted to their corresponding values (strings in this case) before returning them to the client:

```
from enum import Enum
from fastapi import FastAPI
class ModelName(str, Enum):
alexnet = "alexnet"
resnet = "resnet"
lenet = "lenet"
app = FastAPI()
@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
if model_name is ModelName.alexnet:
return {"model_name": model_name, "message": "Deep Learning FTW!"}
if model_name.value == "lenet":
return {"model_name": model_name, "message": "LeCNN all the images"}
return {"model_name": model_name, "message": "Have some residuals"}
```


In your client you will get a JSON response like:

```
{
"model_name": "alexnet",
"message": "Deep Learning FTW!"
}
```


## Path parameters containing paths[¶](#path-parameters-containing-paths)

Let's say you have a *path operation* with a path `/files/{file_path}`

.

But you need `file_path`

itself to contain a *path*, like `home/johndoe/myfile.txt`

.

So, the URL for that file would be something like: `/files/home/johndoe/myfile.txt`

.

### OpenAPI support[¶](#openapi-support)

OpenAPI doesn't support a way to declare a *path parameter* to contain a *path* inside, as that could lead to scenarios that are difficult to test and define.

Nevertheless, you can still do it in **FastAPI**, using one of the internal tools from Starlette.

And the docs would still work, although not adding any documentation telling that the parameter should contain a path.

### Path convertor[¶](#path-convertor)

Using an option directly from Starlette you can declare a *path parameter* containing a *path* using a URL like:

```
/files/{file_path:path}
```


In this case, the name of the parameter is `file_path`

, and the last part, `:path`

, tells it that the parameter should match any *path*.

So, you can use it with:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/files/{file_path:path}")
async def read_file(file_path: str):
return {"file_path": file_path}
```


Tip

You might need the parameter to contain `/home/johndoe/myfile.txt`

, with a leading slash (`/`

).

In that case, the URL would be: `/files//home/johndoe/myfile.txt`

, with a double slash (`//`

) between `files`

and `home`

.

## Recap[¶](#recap)

With **FastAPI**, by using short, intuitive and standard Python type declarations, you get:

- Editor support: error checks, autocompletion, etc.
- Data "parsing"
- Data validation
- API annotation and automatic documentation

And you only have to declare them once.

That's probably the main visible advantage of **FastAPI** compared to alternative frameworks (apart from the raw performance).

---

## Source: https://fastapi.tiangolo.com/tutorial/query-params/

# Query Parameters[¶](#query-parameters)

When you declare other function parameters that are not part of the path parameters, they are automatically interpreted as "query" parameters.

```
from fastapi import FastAPI
app = FastAPI()
fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]
@app.get("/items/")
async def read_item(skip: int = 0, limit: int = 10):
return fake_items_db[skip : skip + limit]
```


The query is the set of key-value pairs that go after the `?`

in a URL, separated by `&`

characters.

For example, in the URL:

```
http://127.0.0.1:8000/items/?skip=0&limit=10
```


...the query parameters are:

`skip`

: with a value of`0`

`limit`

: with a value of`10`


As they are part of the URL, they are "naturally" strings.

But when you declare them with Python types (in the example above, as `int`

), they are converted to that type and validated against it.

All the same process that applied for path parameters also applies for query parameters:

- Editor support (obviously)
- Data "parsing"
- Data validation
- Automatic documentation

## Defaults[¶](#defaults)

As query parameters are not a fixed part of a path, they can be optional and can have default values.

In the example above they have default values of `skip=0`

and `limit=10`

.

So, going to the URL:

```
http://127.0.0.1:8000/items/
```


would be the same as going to:

```
http://127.0.0.1:8000/items/?skip=0&limit=10
```


But if you go to, for example:

```
http://127.0.0.1:8000/items/?skip=20
```


The parameter values in your function will be:

`skip=20`

: because you set it in the URL`limit=10`

: because that was the default value

## Optional parameters[¶](#optional-parameters)

The same way, you can declare optional query parameters, by setting their default to `None`

:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/items/{item_id}")
async def read_item(item_id: str, q: str | None = None):
if q:
return {"item_id": item_id, "q": q}
return {"item_id": item_id}
```


In this case, the function parameter `q`

will be optional, and will be `None`

by default.

Check

Also notice that **FastAPI** is smart enough to notice that the path parameter `item_id`

is a path parameter and `q`

is not, so, it's a query parameter.

## Query parameter type conversion[¶](#query-parameter-type-conversion)

You can also declare `bool`

types, and they will be converted:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/items/{item_id}")
async def read_item(item_id: str, q: str | None = None, short: bool = False):
item = {"item_id": item_id}
if q:
item.update({"q": q})
if not short:
item.update(
{"description": "This is an amazing item that has a long description"}
)
return item
```


In this case, if you go to:

```
http://127.0.0.1:8000/items/foo?short=1
```


or

```
http://127.0.0.1:8000/items/foo?short=True
```


or

```
http://127.0.0.1:8000/items/foo?short=true
```


or

```
http://127.0.0.1:8000/items/foo?short=on
```


or

```
http://127.0.0.1:8000/items/foo?short=yes
```


or any other case variation (uppercase, first letter in uppercase, etc), your function will see the parameter `short`

with a `bool`

value of `True`

. Otherwise as `False`

.

## Multiple path and query parameters[¶](#multiple-path-and-query-parameters)

You can declare multiple path parameters and query parameters at the same time, **FastAPI** knows which is which.

And you don't have to declare them in any specific order.

They will be detected by name:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/users/{user_id}/items/{item_id}")
async def read_user_item(
user_id: int, item_id: str, q: str | None = None, short: bool = False
):
item = {"item_id": item_id, "owner_id": user_id}
if q:
item.update({"q": q})
if not short:
item.update(
{"description": "This is an amazing item that has a long description"}
)
return item
```


## Required query parameters[¶](#required-query-parameters)

When you declare a default value for non-path parameters (for now, we have only seen query parameters), then it is not required.

If you don't want to add a specific value but just make it optional, set the default as `None`

.

But when you want to make a query parameter required, you can just not declare any default value:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/items/{item_id}")
async def read_user_item(item_id: str, needy: str):
item = {"item_id": item_id, "needy": needy}
return item
```


Here the query parameter `needy`

is a required query parameter of type `str`

.

If you open in your browser a URL like:

```
http://127.0.0.1:8000/items/foo-item
```


...without adding the required parameter `needy`

, you will see an error like:

```
{
"detail": [
{
"type": "missing",
"loc": [
"query",
"needy"
],
"msg": "Field required",
"input": null
}
]
}
```


As `needy`

is a required parameter, you would need to set it in the URL:

```
http://127.0.0.1:8000/items/foo-item?needy=sooooneedy
```


...this would work:

```
{
"item_id": "foo-item",
"needy": "sooooneedy"
}
```


And of course, you can define some parameters as required, some as having a default value, and some entirely optional:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/items/{item_id}")
async def read_user_item(
item_id: str, needy: str, skip: int = 0, limit: int | None = None
):
item = {"item_id": item_id, "needy": needy, "skip": skip, "limit": limit}
return item
```


In this case, there are 3 query parameters:

`needy`

, a required`str`

.`skip`

, an`int`

with a default value of`0`

.`limit`

, an optional`int`

.

Tip

You could also use `Enum`

s the same way as with [Path Parameters](../path-params/#predefined-values).

---

## Source: https://fastapi.tiangolo.com/tutorial/body/

# Request Body[¶](#request-body)

When you need to send data from a client (let's say, a browser) to your API, you send it as a **request body**.

A **request** body is data sent by the client to your API. A **response** body is the data your API sends to the client.

Your API almost always has to send a **response** body. But clients don't necessarily need to send **request bodies** all the time, sometimes they only request a path, maybe with some query parameters, but don't send a body.

To declare a **request** body, you use [Pydantic](https://docs.pydantic.dev/) models with all their power and benefits.

Info

To send data, you should use one of: `POST`

(the more common), `PUT`

, `DELETE`

or `PATCH`

.

Sending a body with a `GET`

request has an undefined behavior in the specifications, nevertheless, it is supported by FastAPI, only for very complex/extreme use cases.

As it is discouraged, the interactive docs with Swagger UI won't show the documentation for the body when using `GET`

, and proxies in the middle might not support it.

## Import Pydantic's `BaseModel`

[¶](#import-pydantics-basemodel)

First, you need to import `BaseModel`

from `pydantic`

:

```
from fastapi import FastAPI
from pydantic import BaseModel
class Item(BaseModel):
name: str
description: str | None = None
price: float
tax: float | None = None
app = FastAPI()
@app.post("/items/")
async def create_item(item: Item):
return item
```


## Create your data model[¶](#create-your-data-model)

Then you declare your data model as a class that inherits from `BaseModel`

.

Use standard Python types for all the attributes:

```
from fastapi import FastAPI
from pydantic import BaseModel
class Item(BaseModel):
name: str
description: str | None = None
price: float
tax: float | None = None
app = FastAPI()
@app.post("/items/")
async def create_item(item: Item):
return item
```


The same as when declaring query parameters, when a model attribute has a default value, it is not required. Otherwise, it is required. Use `None`

to make it just optional.

For example, this model above declares a JSON "`object`

" (or Python `dict`

) like:

```
{
"name": "Foo",
"description": "An optional description",
"price": 45.2,
"tax": 3.5
}
```


...as `description`

and `tax`

are optional (with a default value of `None`

), this JSON "`object`

" would also be valid:

```
{
"name": "Foo",
"price": 45.2
}
```


## Declare it as a parameter[¶](#declare-it-as-a-parameter)

To add it to your *path operation*, declare it the same way you declared path and query parameters:

```
from fastapi import FastAPI
from pydantic import BaseModel
class Item(BaseModel):
name: str
description: str | None = None
price: float
tax: float | None = None
app = FastAPI()
@app.post("/items/")
async def create_item(item: Item):
return item
```


...and declare its type as the model you created, `Item`

.

## Results[¶](#results)

With just that Python type declaration, **FastAPI** will:

- Read the body of the request as JSON.
- Convert the corresponding types (if needed).
- Validate the data.
- If the data is invalid, it will return a nice and clear error, indicating exactly where and what was the incorrect data.

- Give you the received data in the parameter
`item`

.- As you declared it in the function to be of type
`Item`

, you will also have all the editor support (completion, etc) for all of the attributes and their types.

- As you declared it in the function to be of type
- Generate
[JSON Schema](https://json-schema.org)definitions for your model, you can also use them anywhere else you like if it makes sense for your project. - Those schemas will be part of the generated OpenAPI schema, and used by the automatic documentation UIs.

## Automatic docs[¶](#automatic-docs)

The JSON Schemas of your models will be part of your OpenAPI generated schema, and will be shown in the interactive API docs:

And will also be used in the API docs inside each *path operation* that needs them:

## Editor support[¶](#editor-support)

In your editor, inside your function you will get type hints and completion everywhere (this wouldn't happen if you received a `dict`

instead of a Pydantic model):

You also get error checks for incorrect type operations:

This is not by chance, the whole framework was built around that design.

And it was thoroughly tested at the design phase, before any implementation, to ensure it would work with all the editors.

There were even some changes to Pydantic itself to support this.

The previous screenshots were taken with [Visual Studio Code](https://code.visualstudio.com).

But you would get the same editor support with [PyCharm](https://www.jetbrains.com/pycharm/) and most of the other Python editors:

Tip

If you use [PyCharm](https://www.jetbrains.com/pycharm/) as your editor, you can use the [Pydantic PyCharm Plugin](https://github.com/koxudaxi/pydantic-pycharm-plugin/).

It improves editor support for Pydantic models, with:

- auto-completion
- type checks
- refactoring
- searching
- inspections

## Use the model[¶](#use-the-model)

Inside of the function, you can access all the attributes of the model object directly:

```
from fastapi import FastAPI
from pydantic import BaseModel
class Item(BaseModel):
name: str
description: str | None = None
price: float
tax: float | None = None
app = FastAPI()
@app.post("/items/")
async def create_item(item: Item):
item_dict = item.model_dump()
if item.tax is not None:
price_with_tax = item.price + item.tax
item_dict.update({"price_with_tax": price_with_tax})
return item_dict
```


## Request body + path parameters[¶](#request-body-path-parameters)

You can declare path parameters and request body at the same time.

**FastAPI** will recognize that the function parameters that match path parameters should be **taken from the path**, and that function parameters that are declared to be Pydantic models should be **taken from the request body**.

```
from fastapi import FastAPI
from pydantic import BaseModel
class Item(BaseModel):
name: str
description: str | None = None
price: float
tax: float | None = None
app = FastAPI()
@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
return {"item_id": item_id, **item.model_dump()}
```


## Request body + path + query parameters[¶](#request-body-path-query-parameters)

You can also declare **body**, **path** and **query** parameters, all at the same time.

**FastAPI** will recognize each of them and take the data from the correct place.

```
from fastapi import FastAPI
from pydantic import BaseModel
class Item(BaseModel):
name: str
description: str | None = None
price: float
tax: float | None = None
app = FastAPI()
@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item, q: str | None = None):
result = {"item_id": item_id, **item.model_dump()}
if q:
result.update({"q": q})
return result
```


The function parameters will be recognized as follows:

- If the parameter is also declared in the
**path**, it will be used as a path parameter. - If the parameter is of a
**singular type**(like`int`

,`float`

,`str`

,`bool`

, etc) it will be interpreted as a**query**parameter. - If the parameter is declared to be of the type of a
**Pydantic model**, it will be interpreted as a request**body**.

Note

FastAPI will know that the value of `q`

is not required because of the default value `= None`

.

The `str | None`

is not used by FastAPI to determine that the value is not required, it will know it's not required because it has a default value of `= None`

.

But adding the type annotations will allow your editor to give you better support and detect errors.

## Without Pydantic[¶](#without-pydantic)

If you don't want to use Pydantic models, you can also use **Body** parameters. See the docs for [Body - Multiple Parameters: Singular values in body](../body-multiple-params/#singular-values-in-body).

---

## Source: https://fastapi.tiangolo.com/tutorial/query-params-str-validations/

# Query Parameters and String Validations[¶](#query-parameters-and-string-validations)

**FastAPI** allows you to declare additional information and validation for your parameters.

Let's take this application as example:

```
from fastapi import FastAPI
app = FastAPI()
@app.get("/items/")
async def read_items(q: str | None = None):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


The query parameter `q`

is of type `str | None`

, that means that it's of type `str`

but could also be `None`

, and indeed, the default value is `None`

, so FastAPI will know it's not required.

Note

FastAPI will know that the value of `q`

is not required because of the default value `= None`

.

Having `str | None`

will allow your editor to give you better support and detect errors.

## Additional validation[¶](#additional-validation)

We are going to enforce that even though `q`

is optional, whenever it is provided, **its length doesn't exceed 50 characters**.

### Import `Query`

and `Annotated`

[¶](#import-query-and-annotated)

To achieve that, first import:

`Query`

from`fastapi`

`Annotated`

from`typing`


```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: Annotated[str | None, Query(max_length=50)] = None):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: str | None = Query(default=None, max_length=50)):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


Info

FastAPI added support for `Annotated`

(and started recommending it) in version 0.95.0.

If you have an older version, you would get errors when trying to use `Annotated`

.

Make sure you [Upgrade the FastAPI version](../../deployment/versions/#upgrading-the-fastapi-versions) to at least 0.95.1 before using `Annotated`

.

## Use `Annotated`

in the type for the `q`

parameter[¶](#use-annotated-in-the-type-for-the-q-parameter)

Remember I told you before that `Annotated`

can be used to add metadata to your parameters in the [Python Types Intro](../../python-types/#type-hints-with-metadata-annotations)?

Now it's the time to use it with FastAPI. 🚀

We had this type annotation:

```
q: str | None = None
```


What we will do is wrap that with `Annotated`

, so it becomes:

```
q: Annotated[str | None] = None
```


Both of those versions mean the same thing, `q`

is a parameter that can be a `str`

or `None`

, and by default, it is `None`

.

Now let's jump to the fun stuff. 🎉

## Add `Query`

to `Annotated`

in the `q`

parameter[¶](#add-query-to-annotated-in-the-q-parameter)

Now that we have this `Annotated`

where we can put more information (in this case some additional validation), add `Query`

inside of `Annotated`

, and set the parameter `max_length`

to `50`

:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: Annotated[str | None, Query(max_length=50)] = None):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: str | None = Query(default=None, max_length=50)):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


Notice that the default value is still `None`

, so the parameter is still optional.

But now, having `Query(max_length=50)`

inside of `Annotated`

, we are telling FastAPI that we want it to have **additional validation** for this value, we want it to have maximum 50 characters. 😎

Tip

Here we are using `Query()`

because this is a **query parameter**. Later we will see others like `Path()`

, `Body()`

, `Header()`

, and `Cookie()`

, that also accept the same arguments as `Query()`

.

FastAPI will now:

**Validate**the data making sure that the max length is 50 characters- Show a
**clear error**for the client when the data is not valid **Document**the parameter in the OpenAPI schema*path operation*(so it will show up in the**automatic docs UI**)

## Alternative (old): `Query`

as the default value[¶](#alternative-old-query-as-the-default-value)

Previous versions of FastAPI (before 0.95.0) required you to use `Query`

as the default value of your parameter, instead of putting it in `Annotated`

, there's a high chance that you will see code using it around, so I'll explain it to you.

Tip

For new code and whenever possible, use `Annotated`

as explained above. There are multiple advantages (explained below) and no disadvantages. 🍰

This is how you would use `Query()`

as the default value of your function parameter, setting the parameter `max_length`

to 50:

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: str | None = Query(default=None, max_length=50)):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: Annotated[str | None, Query(max_length=50)] = None):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


As in this case (without using `Annotated`

) we have to replace the default value `None`

in the function with `Query()`

, we now need to set the default value with the parameter `Query(default=None)`

, it serves the same purpose of defining that default value (at least for FastAPI).

So:

```
q: str | None = Query(default=None)
```


...makes the parameter optional, with a default value of `None`

, the same as:

```
q: str | None = None
```


But the `Query`

version declares it explicitly as being a query parameter.

Then, we can pass more parameters to `Query`

. In this case, the `max_length`

parameter that applies to strings:

```
q: str | None = Query(default=None, max_length=50)
```


This will validate the data, show a clear error when the data is not valid, and document the parameter in the OpenAPI schema *path operation*.

`Query`

as the default value or in `Annotated`

[¶](#query-as-the-default-value-or-in-annotated)

Keep in mind that when using `Query`

inside of `Annotated`

you cannot use the `default`

parameter for `Query`

.

Instead, use the actual default value of the function parameter. Otherwise, it would be inconsistent.

For example, this is not allowed:

```
q: Annotated[str, Query(default="rick")] = "morty"
```


...because it's not clear if the default value should be `"rick"`

or `"morty"`

.

So, you would use (preferably):

```
q: Annotated[str, Query()] = "rick"
```


...or in older code bases you will find:

```
q: str = Query(default="rick")
```


### Advantages of `Annotated`

[¶](#advantages-of-annotated)

**Using Annotated is recommended** instead of the default value in function parameters, it is

**better**for multiple reasons. 🤓

The **default** value of the **function parameter** is the **actual default** value, that's more intuitive with Python in general. 😌

You could **call** that same function in **other places** without FastAPI, and it would **work as expected**. If there's a **required** parameter (without a default value), your **editor** will let you know with an error, **Python** will also complain if you run it without passing the required parameter.

When you don't use `Annotated`

and instead use the **(old) default value style**, if you call that function without FastAPI in **other places**, you have to **remember** to pass the arguments to the function for it to work correctly, otherwise the values will be different from what you expect (e.g. `QueryInfo`

or something similar instead of `str`

). And your editor won't complain, and Python won't complain running that function, only when the operations inside error out.

Because `Annotated`

can have more than one metadata annotation, you could now even use the same function with other tools, like [Typer](https://typer.tiangolo.com/). 🚀

## Add more validations[¶](#add-more-validations)

You can also add a parameter `min_length`

:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(
q: Annotated[str | None, Query(min_length=3, max_length=50)] = None,
):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: str | None = Query(default=None, min_length=3, max_length=50)):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## Add regular expressions[¶](#add-regular-expressions)

You can define a regular expression `pattern`

that the parameter should match:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(
q: Annotated[
str | None, Query(min_length=3, max_length=50, pattern="^fixedquery$")
] = None,
):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(
q: str | None = Query(
default=None, min_length=3, max_length=50, pattern="^fixedquery$"
),
):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


This specific regular expression pattern checks that the received parameter value:

`^`

: starts with the following characters, doesn't have characters before.`fixedquery`

: has the exact value`fixedquery`

.`$`

: ends there, doesn't have any more characters after`fixedquery`

.

If you feel lost with all these **"regular expression"** ideas, don't worry. They are a hard topic for many people. You can still do a lot of stuff without needing regular expressions yet.

Now you know that whenever you need them you can use them in **FastAPI**.

## Default values[¶](#default-values)

You can, of course, use default values other than `None`

.

Let's say that you want to declare the `q`

query parameter to have a `min_length`

of `3`

, and to have a default value of `"fixedquery"`

:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: Annotated[str, Query(min_length=3)] = "fixedquery"):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: str = Query(default="fixedquery", min_length=3)):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


Note

Having a default value of any type, including `None`

, makes the parameter optional (not required).

## Required parameters[¶](#required-parameters)

When we don't need to declare more validations or metadata, we can make the `q`

query parameter required just by not declaring a default value, like:

```
q: str
```


instead of:

```
q: str | None = None
```


But we are now declaring it with `Query`

, for example like:

```
q: Annotated[str | None, Query(min_length=3)] = None
```


So, when you need to declare a value as required while using `Query`

, you can simply not declare a default value:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: Annotated[str, Query(min_length=3)]):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: str = Query(min_length=3)):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


### Required, can be `None`

[¶](#required-can-be-none)

You can declare that a parameter can accept `None`

, but that it's still required. This would force clients to send a value, even if the value is `None`

.

To do that, you can declare that `None`

is a valid type but simply do not declare a default value:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: Annotated[str | None, Query(min_length=3)]):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: str | None = Query(min_length=3)):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## Query parameter list / multiple values[¶](#query-parameter-list-multiple-values)

When you define a query parameter explicitly with `Query`

you can also declare it to receive a list of values, or said in another way, to receive multiple values.

For example, to declare a query parameter `q`

that can appear multiple times in the URL, you can write:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: Annotated[list[str] | None, Query()] = None):
query_items = {"q": q}
return query_items
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: list[str] | None = Query(default=None)):
query_items = {"q": q}
return query_items
```


Then, with a URL like:

```
http://localhost:8000/items/?q=foo&q=bar
```


you would receive the multiple `q`

*query parameters'* values (`foo`

and `bar`

) in a Python `list`

inside your *path operation function*, in the *function parameter* `q`

.

So, the response to that URL would be:

```
{
"q": [
"foo",
"bar"
]
}
```


Tip

To declare a query parameter with a type of `list`

, like in the example above, you need to explicitly use `Query`

, otherwise it would be interpreted as a request body.

The interactive API docs will update accordingly, to allow multiple values:

### Query parameter list / multiple values with defaults[¶](#query-parameter-list-multiple-values-with-defaults)

You can also define a default `list`

of values if none are provided:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: Annotated[list[str], Query()] = ["foo", "bar"]):
query_items = {"q": q}
return query_items
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: list[str] = Query(default=["foo", "bar"])):
query_items = {"q": q}
return query_items
```


If you go to:

```
http://localhost:8000/items/
```


the default of `q`

will be: `["foo", "bar"]`

and your response will be:

```
{
"q": [
"foo",
"bar"
]
}
```


#### Using just `list`

[¶](#using-just-list)

You can also use `list`

directly instead of `list[str]`

:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: Annotated[list, Query()] = []):
query_items = {"q": q}
return query_items
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: list = Query(default=[])):
query_items = {"q": q}
return query_items
```


Note

Keep in mind that in this case, FastAPI won't check the contents of the list.

For example, `list[int]`

would check (and document) that the contents of the list are integers. But `list`

alone wouldn't.

## Declare more metadata[¶](#declare-more-metadata)

You can add more information about the parameter.

That information will be included in the generated OpenAPI and used by the documentation user interfaces and external tools.

Note

Keep in mind that different tools might have different levels of OpenAPI support.

Some of them might not show all the extra information declared yet, although in most of the cases, the missing feature is already planned for development.

You can add a `title`

:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(
q: Annotated[str | None, Query(title="Query string", min_length=3)] = None,
):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(
q: str | None = Query(default=None, title="Query string", min_length=3),
):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


And a `description`

:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(
q: Annotated[
str | None,
Query(
title="Query string",
description="Query string for the items to search in the database that have a good match",
min_length=3,
),
] = None,
):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(
q: str | None = Query(
default=None,
title="Query string",
description="Query string for the items to search in the database that have a good match",
min_length=3,
),
):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## Alias parameters[¶](#alias-parameters)

Imagine that you want the parameter to be `item-query`

.

Like in:

```
http://127.0.0.1:8000/items/?item-query=foobaritems
```


But `item-query`

is not a valid Python variable name.

The closest would be `item_query`

.

But you still need it to be exactly `item-query`

...

Then you can declare an `alias`

, and that alias is what will be used to find the parameter value:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: Annotated[str | None, Query(alias="item-query")] = None):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(q: str | None = Query(default=None, alias="item-query")):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## Deprecating parameters[¶](#deprecating-parameters)

Now let's say you don't like this parameter anymore.

You have to leave it there a while because there are clients using it, but you want the docs to clearly show it as deprecated.

Then pass the parameter `deprecated=True`

to `Query`

:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(
q: Annotated[
str | None,
Query(
alias="item-query",
title="Query string",
description="Query string for the items to search in the database that have a good match",
min_length=3,
max_length=50,
pattern="^fixedquery$",
deprecated=True,
),
] = None,
):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(
q: str | None = Query(
default=None,
alias="item-query",
title="Query string",
description="Query string for the items to search in the database that have a good match",
min_length=3,
max_length=50,
pattern="^fixedquery$",
deprecated=True,
),
):
results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
if q:
results.update({"q": q})
return results
```


The docs will show it like this:

## Exclude parameters from OpenAPI[¶](#exclude-parameters-from-openapi)

To exclude a query parameter from the generated OpenAPI schema (and thus, from the automatic documentation systems), set the parameter `include_in_schema`

of `Query`

to `False`

:

```
from typing import Annotated
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(
hidden_query: Annotated[str | None, Query(include_in_schema=False)] = None,
):
if hidden_query:
return {"hidden_query": hidden_query}
else:
return {"hidden_query": "Not found"}
```


## 🤓 Other versions and variants

Tip

Prefer to use the `Annotated`

version if possible.

```
from fastapi import FastAPI, Query
app = FastAPI()
@app.get("/items/")
async def read_items(
hidden_query: str | None = Query(default=None, include_in_schema=False),
):
if hidden_query:
return {"hidden_query": hidden_query}
else:
return {"hidden_query": "Not found"}
```


## Custom Validation[¶](#custom-validation)

There could be cases where you need to do some **custom validation** that can't be done with the parameters shown above.

In those cases, you can use a **custom validator function** that is applied after the normal validation (e.g. after validating that the value is a `str`

).

You can achieve that using [Pydantic's AfterValidator](https://docs.pydantic.dev/latest/concepts/validators/#field-after-validator) inside of

`Annotated`

.Tip

Pydantic also has [ BeforeValidator](https://docs.pydantic.dev/latest/concepts/validators/#field-before-validator) and others. 🤓

For example, this custom validator checks that the item ID starts with `isbn-`

for an ISBN book number or with `imdb-`

for an IMDB movie URL ID:

```
import random
from typing import Annotated
from fastapi import FastAPI
from pydantic import AfterValidator
app = FastAPI()
data = {
"isbn-9781529046137": "The Hitchhiker's Guide to the Galaxy",
"imdb-tt0371724": "The Hitchhiker's Guide to the Galaxy",
"isbn-9781439512982": "Isaac Asimov: The Complete Stories, Vol. 2",
}
def check_valid_id(id: str):
if not id.startswith(("isbn-", "imdb-")):
raise ValueError('Invalid ID format, it must start with "isbn-" or "imdb-"')
return id
@app.get("/items/")
async def read_items(
id: Annotated[str | None, AfterValidator(check_valid_id)] = None,
):
if id:
item = data.get(id)
else:
id, item = random.choice(list(data.items()))
return {"id": id, "name": item}
```


Info

This is available with Pydantic version 2 or above. 😎

Tip

If you need to do any type of validation that requires communicating with any **external component**, like a database or another API, you should instead use **FastAPI Dependencies**, you will learn about them later.

These custom validators are for things that can be checked with **only** the **same data** provided in the request.

### Understand that Code[¶](#understand-that-code)

The important point is just using ** AfterValidator with a function inside Annotated**. Feel free to skip this part. 🤸


But if you're curious about this specific code example and you're still entertained, here are some extra details.

#### String with `value.startswith()`

[¶](#string-with-value-startswith)

Did you notice? a string using `value.startswith()`

can take a tuple, and it will check each value in the tuple:

```
# Code above omitted 👆
def check_valid_id(id: str):
if not id.startswith(("isbn-", "imdb-")):
raise ValueError('Invalid ID format, it must start with "isbn-" or "imdb-"')
return id
# Code below omitted 👇
```


## 👀 Full file preview

```
import random
from typing import Annotated
from fastapi import FastAPI
from pydantic import AfterValidator
app = FastAPI()
data = {
"isbn-9781529046137": "The Hitchhiker's Guide to the Galaxy",
"imdb-tt0371724": "The Hitchhiker's Guide to the Galaxy",
"isbn-9781439512982": "Isaac Asimov: The Complete Stories, Vol. 2",
}
def check_valid_id(id: str):
if not id.startswith(("isbn-", "imdb-")):
raise ValueError('Invalid ID format, it must start with "isbn-" or "imdb-"')
return id
@app.get("/items/")
async def read_items(
id: Annotated[str | None, AfterValidator(check_valid_id)] = None,
):
if id:
item = data.get(id)
else:
id, item = random.choice(list(data.items()))
return {"id": id, "name": item}
```


#### A Random Item[¶](#a-random-item)

With `data.items()`

we get an iterable object with tuples containing the key and value for each dictionary item.

We convert this iterable object into a proper `list`

with `list(data.items())`

.

Then with `random.choice()`

we can get a **random value** from the list, so, we get a tuple with `(id, name)`

. It will be something like `("imdb-tt0371724", "The Hitchhiker's Guide to the Galaxy")`

.

Then we **assign those two values** of the tuple to the variables `id`

and `name`

.

So, if the user didn't provide an item ID, they will still receive a random suggestion.

...we do all this in a **single simple line**. 🤯 Don't you love Python? 🐍

```
# Code above omitted 👆
@app.get("/items/")
async def read_items(
id: Annotated[str | None, AfterValidator(check_valid_id)] = None,
):
if id:
item = data.get(id)
else:
id, item = random.choice(list(data.items()))
return {"id": id, "name": item}
```


## 👀 Full file preview

```
import random
from typing import Annotated
from fastapi import FastAPI
from pydantic import AfterValidator
app = FastAPI()
data = {
"isbn-9781529046137": "The Hitchhiker's Guide to the Galaxy",
"imdb-tt0371724": "The Hitchhiker's Guide to the Galaxy",
"isbn-9781439512982": "Isaac Asimov: The Complete Stories, Vol. 2",
}
def check_valid_id(id: str):
if not id.startswith(("isbn-", "imdb-")):
raise ValueError('Invalid ID format, it must start with "isbn-" or "imdb-"')
return id
@app.get("/items/")
async def read_items(
id: Annotated[str | None, AfterValidator(check_valid_id)] = None,
):
if id:
item = data.get(id)
else:
id, item = random.choice(list(data.items()))
return {"id": id, "name": item}
```


## Recap[¶](#recap)

You can declare additional validations and metadata for your parameters.

Generic validations and metadata:

`alias`

`title`

`description`

`deprecated`


Validations specific for strings:

`min_length`

`max_length`

`pattern`


Custom validations using `AfterValidator`

.

In these examples you saw how to declare validations for `str`

values.

See the next chapters to learn how to declare validations for other types, like numbers.