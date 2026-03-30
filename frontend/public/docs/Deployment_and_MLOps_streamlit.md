# Streamlit Documentation
> Scraped on: 2026-03-30 | Root Source: [https://docs.streamlit.io/](https://docs.streamlit.io/)



---

## Source: https://docs.streamlit.io/

Streamlit documentation

[Streamlit](https://www.streamlit.io) is an open-source Python framework for data scientists and AI/ML engineers to deliver dynamic data apps with only a few lines of code. Build and deploy powerful data apps in minutes. Let's get started!

How to use our docs


*rocket_launch*[Get started](/get-started) with Streamlit! Set up your development environment and learn the fundamental concepts, and start coding!


*description*[Develop](/develop) your Streamlit app! Our API reference explains each Streamlit function with examples. Dive deep into all of our features with conceptual guides. Try out our step-by-step tutorials.


*cloud*[Deploy](/deploy) your Streamlit app! Streamlit Community Cloud our free platform for deploying and sharing Streamlit apps. Streamlit in Snowflake is an enterprise-class solution where you can house your data and apps in one, unified, global system. Explore all your options!


*school*[Knowledge base](/knowledge-base) is a self-serve library of tips, tricks, and articles that answer your questions about creating and deploying Streamlit apps.

## What's new


*touch_app*#### Dynamic containers

`st.tabs`

, `st.expander`

, and `st.popover`

can track open/closed state and trigger reruns with the new `on_change`

parameter.


*share*#### Widget binding

Most non-trigger widgets have a `bind`

parameter to sync widget state with URL query parameters.


*open_in_new*#### Clickable images

`st.image`

has a `link`

parameter to make images clickable with HTTP/HTTPS URLs.


*visibility_off*#### Hidden pages

`st.Page`

has a `visibility`

parameter to hide pages in the navigation menu while keeping them routable.


*format_color_text*#### CSS colors in Markdown

Markdown supports arbitrary CSS colors for text foreground and background styling.


*speed*#### Metric delta descriptions

`st.metric`

has a `delta_description`

parameter to display descriptive text next to delta values.

## Latest blog posts

[View all updates](https://blog.streamlit.io/)

## Join the community

Streamlit is more than just a way to make data apps, it's also a community of creators that share their apps and ideas and help each other make their work better. Please come join us on the community forum. We love to hear your questions, ideas, and help you work through your bugs — stop by today!

[View forum](https://discuss.streamlit.io)

---

## Source: https://docs.streamlit.io/get-started

Get started with Streamlit

This Get Started guide explains how Streamlit works, how to install Streamlit on your preferred operating system, and how to create your first Streamlit app!


*downloading*[Installation](/get-started/installation) helps you set up your development environment. Walk through installing Streamlit on Windows, macOS, or Linux. Alternatively, code right in your browser with GitHub Codespaces or Streamlit in Snowflake.


*description*[Fundamentals](/get-started/fundamentals) introduces you to Streamlit's data model and development flow. You'll learn what makes Streamlit the most powerful way to build data apps, including the ability to display and style data, draw charts and maps, add interactive widgets, customize app layouts, cache computation, and define themes.


*auto_awesome*[First steps](/get-started/tutorials) walks you through creating apps using core features to fetch and cache data, draw charts, plot information on a map, and use interactive widgets to filter results.


*rocket_launch*[Use GitHub Codespaces](/get-started/installation/community-cloud) if you want to skip past local installation and code right in your browser. This guide uses Streamlit Community Cloud to help you automatically configure a codespace.

## 30 Days of Streamlit 🎈

30 Days of Streamlit 🎈 is a free, self-paced 30 day challenge that teaches you how to build and deploy data apps with Streamlit. Complete the daily challenges, share your solutions with us on Twitter and LinkedIn, and stop by the forum with any questions!

[Start the challenge](https://30days.streamlit.app/)


*arrow_forward*Next: Installation*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/get-started/installation

Install Streamlit

There are multiple ways to set up your development environment and install Streamlit. Developing locally with Python installed on your own computer is the most common scenario.

*star*

#### Tip

Try a Streamlit Playground that runs in your browser — no installation required.
(Note that this is not how Streamlit is meant to be used, because it has many downsides. That's why it's a
*playground*!)


*arrow_forward*Instructions for the playgroundSummary for experienced Python developers

-
To set up your Python environment and test your installation, execute the following terminal commands:

Terminal`pip install streamlit streamlit hello`

-
Jump to our

[Basic concepts](/get-started/fundamentals/main-concepts).

Install Streamlit on your machine

Option 1: I like the command line

Install Streamlit on your own machine using tools like `venv`

and `pip`

.


*arrow_forward*Instructions for the command lineOption 2: I prefer a graphical interface

Install Streamlit using the Anaconda Distribution graphical user interface. This is also the best approach if you're on Windows or don't have Python set up.


*arrow_forward*Instructions for Anaconda DistributionCreate an app in the cloud

Option 1: I want a free cloud environment

Use Streamlit Community Cloud with GitHub Codespaces so you don't have to go through the trouble of installing Python and setting up an environment.


*arrow_forward*Instructions for GitHub CodespacesOption 2: I need something secure, controlled, and in the cloud

Use Streamlit in Snowflake to code your apps in the cloud, right alongside your data with role-based access controls.


*arrow_forward*Instructions for Snowflake

*arrow_back*Previous: Get started

*arrow_forward*Next: Use Streamlit Playground*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/get-started/fundamentals

Fundamental concepts

Are you new to Streamlit and want the grand tour? If so, you're in the right place!


*description*[Basic concepts.](/get-started/fundamentals/main-concepts) Learn the fundamental concepts of Streamlit. How is a Streamlit app structured? How does it run? How does it magically get your data on a webpage?


*description*[Advanced concepts.](/get-started/fundamentals/advanced-concepts) After you understand the rerun logic of Streamlit, learn how to make efficient and dynamic apps with caching and Session State. Get introduced to handling database connections.


*description*[Additional features.](/get-started/fundamentals/additional-features) Learn about Streamlit's additional features. You don't need to know these concepts for your first app, but check it out to know what's available.


*arrow_back*Previous: Installation

*arrow_forward*Next: Basic concepts*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/get-started/tutorials

First steps building Streamlit apps

If you've just read through our [Basic concepts](/get-started/fundamentals/main-concepts) and want to get your hands on Streamlit. Check out these tutorials. Make sure you have [installed Streamlit](/get-started/installation) so you can execute the code yourself.


*description*[Create an app](/get-started/tutorials/create-an-app) uses the concepts learned in Fundamentals along with caching to walk through making your first app.


*auto_stories*[Create a multipage app](/get-started/tutorials/create-a-multipage-app) walks through the easy steps to add pages to your app.


*arrow_back*Previous: Fundamentals

*arrow_forward*Next: Create an app*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/develop

Develop

Get all the information you need to build beautiful, performant web apps with Streamlit!


*book*[Concepts.](/develop/concepts) Learn how Streamlit works with in-depth guides to our execution model and features.


*list*[API reference.](/develop/api-reference) Learn about our API with function definitions and examples.


*auto_awesome*[Tutorials.](/develop/tutorials) Follow step-by-step instructions to build example apps and useful snippets.


*bolt*[Quick references.](/develop/quick-reference) Check out our quick references for easy access to convenient information like our changelog, cheat sheet, pre-release features, and roadmap.


*arrow_back*Previous: Get started

*arrow_forward*Next: Concepts*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/develop/concepts

Development concepts

This section gives you background on how different parts of Streamlit work.


##### Streamlit's architecture and execution model

Streamlit's execution model makes it easy to turn your scripts into beautiful, interactive web apps.

- Understand how to run your app.
- Understand Streamlit's execution and client-server model.
- Understand the primary tools to work with Streamlit reruns.


##### Multipage apps

Streamlit provides an automated way to build multipage apps through directory structure.

- Learn how to structure and configure your multipage app.


##### App design considerations

Bring together Streamlit's architecture and execution model to design your app. Work with Streamlit commands to render dynamic and interactic content for your users.

- Learn how to make your apps performant and easy-to-manage.
- Learn how to structure and design your project.


##### Connections and secrets

- Learn how to manage connections and secrets with Streamlit's convenient, built-in features.


##### Creating custom components

Custom components extend Streamlit's functionality.

- Learn how to build your own custom component.
- Learn how install a third-party component.


##### Configuration and theming

Streamlit provides a variety options to customize and configure your app.

- Learn how to work with configuration options, including server settings, client settings, and theming.


##### App testing

Streamlit app testing enables developers to build and run automated tests. Bring your favorite test automation software and enjoy simple syntax to simulate user input and inspect rendered output.


*arrow_back*Previous: Develop

*arrow_forward*Next: Architecture and execution*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/develop/api-reference

API reference

Streamlit makes it easy for you to visualize, mutate, and share data. The API reference is organized by activity type, like displaying data or optimizing performance. Each section includes methods associated with the activity type, including examples.

Browse our API below and click to learn more about any of our available commands! 🎈

Display almost anything

Write and magic

Python

#### st.write

Write arguments to the app.

```
st.write("Hello **world**!")
st.write(my_data_frame)
st.write(my_mpl_figure)
```


Python

#### st.write_stream

Write generators or streams to the app with a typewriter effect.

```
st.write_stream(my_generator)
st.write_stream(my_llm_stream)
```


Python

#### Magic

Any time Streamlit sees either a variable or literal value on its own line, it automatically writes that to your app using `st.write`


```
"Hello **world**!"
my_data_frame
my_mpl_figure
```


Text elements

Python

#### Markdown

Display string formatted as Markdown.

```
st.markdown("Hello **world**!")
```


Python

#### Title

Display text in title formatting.

```
st.title("The app title")
```


Python

#### Header

Display text in header formatting.

```
st.header("This is a header")
```


Python

#### Subheader

Display text in subheader formatting.

```
st.subheader("This is a subheader")
```


Python

#### Badge

Display a small, colored badge.

```
st.badge("New")
```


Python

#### Caption

Display text in small font.

```
st.caption("This is written small caption text")
```


Python

#### Code block

Display a code block with optional syntax highlighting.

```
st.code("a = 1234")
```


Python

#### Echo

Display some code in the app, then execute it. Useful for tutorials.

```
with st.echo():
st.write('This code will be printed')
```


Python

#### LaTeX

Display mathematical expressions formatted as LaTeX.

```
st.latex("\int a x^2 \,dx")
```


Python

#### Preformatted text

Write fixed-width and preformatted text.

```
st.text("Hello world")
```


Python

#### Divider

Display a horizontal rule.

```
st.divider()
```


Python

#### Get help

Display object’s doc string, nicely formatted.

```
st.help(st.write)
st.help(pd.DataFrame)
```


Python

#### Render HTML

Renders HTML strings to your app.

```
st.html("<p>Foo bar.</p>")
```


Third-party components

These are featured components created by our lovely community. For more examples and inspiration, check out our [Components Gallery](https://streamlit.io/components) and [Streamlit Extras](https://extras.streamlit.app)!

Data elements

Python

#### Dataframes

Display a dataframe as an interactive table.

```
st.dataframe(my_data_frame)
```


Python

#### Data editor

Display a data editor widget.

```
edited = st.data_editor(df, num_rows="dynamic")
```


Python

#### Column configuration

Configure the display and editing behavior of dataframes and data editors.

```
st.column_config.NumberColumn("Price (in USD)", min_value=0, format="$%d")
```


Python

#### Static tables

Display a static table.

```
st.table(my_data_frame)
```


Python

#### Metrics

Display a metric in big bold font, with an optional indicator of how the metric changed.

```
st.metric("My metric", 42, 2)
```


Python

#### Dicts and JSON

Display object or string as a pretty-printed JSON string.

```
st.json(my_dict)
```


Third-party components

These are featured components created by our lovely community. For more examples and inspiration, check out our [Components Gallery](https://streamlit.io/components) and [Streamlit Extras](https://extras.streamlit.app)!

Chart elements

Python

#### Simple area charts

Display an area chart.

```
st.area_chart(my_data_frame)
```


Python

#### Simple bar charts

Display a bar chart.

```
st.bar_chart(my_data_frame)
```


Python

#### Simple line charts

Display a line chart.

```
st.line_chart(my_data_frame)
```


Python

#### Simple scatter charts

Display a line chart.

```
st.scatter_chart(my_data_frame)
```


Python

#### Scatterplots on maps

Display a map with points on it.

```
st.map(my_data_frame)
```


Python

#### Matplotlib

Display a matplotlib.pyplot figure.

```
st.pyplot(my_mpl_figure)
```


Python

#### Altair

Display a chart using the Altair library.

```
st.altair_chart(my_altair_chart)
```


Python

#### Vega-Lite

Display a chart using the Vega-Lite library.

```
st.vega_lite_chart(my_vega_lite_chart)
```


Python

#### Plotly

Display an interactive Plotly chart.

```
st.plotly_chart(my_plotly_chart)
```


Python

#### PyDeck

Display a chart using the PyDeck library.

```
st.pydeck_chart(my_pydeck_chart)
```


Python

#### GraphViz

Display a graph using the dagre-d3 library.

```
st.graphviz_chart(my_graphviz_spec)
```


Third-party components

These are featured components created by our lovely community. For more examples and inspiration, check out our [Components Gallery](https://streamlit.io/components) and [Streamlit Extras](https://extras.streamlit.app)!

Input widgets

Python

#### Button

Display a button widget.

```
clicked = st.button("Click me")
```


Python

#### Download button

Display a download button widget.

```
st.download_button("Download file", file)
```


Python

#### Form button

Display a form submit button. For use with `st.form`

.

```
st.form_submit_button("Sign up")
```


Python

#### Link button

Display a link button.

```
st.link_button("Go to gallery", url)
```


Python

#### Page link

Display a link to another page in a multipage app.

```
st.page_link("app.py", label="Home", icon="🏠")
st.page_link("pages/profile.py", label="My profile")
```


Python

#### Checkbox

Display a checkbox widget.

```
selected = st.checkbox("I agree")
```


Python

#### Color picker

Display a color picker widget.

```
color = st.color_picker("Pick a color")
```


Python

#### Feedback

Display a rating or sentiment button group.

```
st.feedback("stars")
```


Python

#### Multiselect

Display a multiselect widget. The multiselect widget starts as empty.

```
choices = st.multiselect("Buy", ["milk", "apples", "potatoes"])
```


Python

#### Pills

Display a pill-button selection widget.

```
st.pills("Tags", ["Sports", "AI", "Politics"])
```


Python

#### Radio

Display a radio button widget.

```
choice = st.radio("Pick one", ["cats", "dogs"])
```


Python

#### Segmented control

Display a segmented-button selection widget.

```
st.segmented_control("Filter", ["Open", "Closed", "All"])
```


Python

#### Selectbox

Display a select widget.

```
choice = st.selectbox("Pick one", ["cats", "dogs"])
```


Python

#### Select-slider

Display a slider widget to select items from a list.

```
size = st.select_slider("Pick a size", ["S", "M", "L"])
```


Python

#### Toggle

Display a toggle widget.

```
activated = st.toggle("Activate")
```


Python

#### Number input

Display a numeric input widget.

```
choice = st.number_input("Pick a number", 0, 10)
```


Python

#### Slider

Display a slider widget.

```
number = st.slider("Pick a number", 0, 100)
```


Python

#### Date input

Display a date input widget.

```
date = st.date_input("Your birthday")
```


Python

#### Datetime input

Display a datetime input widget.

```
datetime = st.datetime_input("Schedule your event")
```


Python

#### Time input

Display a time input widget.

```
time = st.time_input("Meeting time")
```


Python

#### Chat input

Display a chat input widget.

```
prompt = st.chat_input("Say something")
if prompt:
st.write(f"The user has sent: {prompt}")
```


Python

#### Text-area

Display a multi-line text input widget.

```
text = st.text_area("Text to translate")
```


Python

#### Text input

Display a single-line text input widget.

```
name = st.text_input("First name")
```


Python

#### Audio input

Display a widget that allows users to record with their microphone.

```
speech = st.audio_input("Record a voice message")
```


Python

#### Data editor

Display a data editor widget.

```
edited = st.data_editor(df, num_rows="dynamic")
```


Python

#### File uploader

Display a file uploader widget.

```
data = st.file_uploader("Upload a CSV")
```


Python

#### Camera input

Display a widget that allows users to upload images directly from a camera.

```
image = st.camera_input("Take a picture")
```


Third-party components

These are featured components created by our lovely community. For more examples and inspiration, check out our [Components Gallery](https://streamlit.io/components) and [Streamlit Extras](https://extras.streamlit.app)!

Media elements

Python

#### Image

Display an image or list of images.

```
st.image(numpy_array)
st.image(image_bytes)
st.image(file)
st.image("https://example.com/myimage.jpg")
```


Python

#### Logo

Display a logo in the upper-left corner of your app and its sidebar.

```
st.logo("logo.jpg")
```


#### PDF

Python

Display a PDF file.

```
st.pdf("my_document.pdf")
```


Python

#### Audio

Display an audio player.

```
st.audio(numpy_array)
st.audio(audio_bytes)
st.audio(file)
st.audio("https://example.com/myaudio.mp3", format="audio/mp3")
```


Python

#### Video

Display a video player.

```
st.video(numpy_array)
st.video(video_bytes)
st.video(file)
st.video("https://example.com/myvideo.mp4", format="video/mp4")
```


Third-party components

These are featured components created by our lovely community. For more examples and inspiration, check out our [Components Gallery](https://streamlit.io/components) and [Streamlit Extras](https://extras.streamlit.app)!

Layouts and containers

Python

#### Columns

Insert containers laid out as side-by-side columns.

```
col1, col2 = st.columns(2)
col1.write("this is column 1")
col2.write("this is column 2")
```


Python

#### Container

Insert a multi-element container.

```
c = st.container()
st.write("This will show last")
c.write("This will show first")
c.write("This will show second")
```


Python

#### Modal dialog

Insert a modal dialog that can rerun independently from the rest of the script.

```
@st.dialog("Sign up")
def email_form():
name = st.text_input("Name")
email = st.text_input("Email")
```


Python

#### Empty

Insert a single-element container.

```
c = st.empty()
st.write("This will show last")
c.write("This will be replaced")
c.write("This will show first")
```


Python

#### Expander

Insert a multi-element container that can be expanded/collapsed.

```
with st.expander("Open to see more"):
st.write("This is more content")
```


Python

#### Popover

Insert a multi-element popover container that can be opened/closed.

```
with st.popover("Settings"):
st.checkbox("Show completed")
```


Python

#### Sidebar

Display items in a sidebar.

```
st.sidebar.write("This lives in the sidebar")
st.sidebar.button("Click me!")
```


Python

#### Space

Add vertical or horizontal space.

```
st.space("small")
```


Python

#### Tabs

Insert containers separated into tabs.

```
tab1, tab2 = st.tabs(["Tab 1", "Tab2"])
tab1.write("this is tab 1")
tab2.write("this is tab 2")
```


Third-party components

These are featured components created by our lovely community. For more examples and inspiration, check out our [Components Gallery](https://streamlit.io/components) and [Streamlit Extras](https://extras.streamlit.app)!

Chat elements

Streamlit provides a few commands to help you build conversational apps. These chat elements are designed to be used in conjunction with each other, but you can also use them separately.

`st.chat_message`

lets you insert a chat message container into the app so you can display messages from the user or the app. Chat containers can contain other Streamlit elements, including charts, tables, text, and more. `st.chat_input`

lets you display a chat input widget so the user can type in a message.

Python

#### Chat input

Display a chat input widget.

```
prompt = st.chat_input("Say something")
if prompt:
st.write(f"The user has sent: {prompt}")
```


Python

#### Chat message

Insert a chat message container.

```
import numpy as np
with st.chat_message("user"):
st.write("Hello 👋")
st.line_chart(np.random.randn(30, 3))
```


Python

#### Status container

Display output of long-running tasks in a container.

```
with st.status('Running'):
do_something_slow()
```


Python

#### st.write_stream

Write generators or streams to the app with a typewriter effect.

```
st.write_stream(my_generator)
st.write_stream(my_llm_stream)
```


Status elements

Python

#### Progress bar

Display a progress bar.

```
for i in range(101):
st.progress(i)
do_something_slow()
```


Python

#### Spinner

Temporarily displays a message while executing a block of code.

```
with st.spinner("Please wait..."):
do_something_slow()
```


Python

#### Status container

Display output of long-running tasks in a container.

```
with st.status('Running'):
do_something_slow()
```


Python

#### Toast

Briefly displays a toast message in the bottom-right corner.

```
st.toast('Butter!', icon='🧈')
```


Python

#### Balloons

Display celebratory balloons!

```
do_something()
# Celebrate when all done!
st.balloons()
```


Python

#### Snowflakes

Display celebratory snowflakes!

```
do_something()
# Celebrate when all done!
st.snow()
```


Python

#### Success box

Display a success message.

```
st.success("Match found!")
```


Python

#### Info box

Display an informational message.

```
st.info("Dataset is updated every day at midnight.")
```


Python

#### Warning box

Display warning message.

```
st.warning("Unable to fetch image. Skipping...")
```


Python

#### Error box

Display error message.

```
st.error("We encountered an error")
```


Python

#### Exception output

Display an exception.

```
e = RuntimeError("This is an exception of type RuntimeError")
st.exception(e)
```


Third-party components

These are featured components created by our lovely community. For more examples and inspiration, check out our [Components Gallery](https://streamlit.io/components) and [Streamlit Extras](https://extras.streamlit.app)!

App logic and configuration

Authentication and user info

Python

#### Log in a user

`st.login()`

starts an authentication flow with an identity provider.

```
st.login()
```


Python

#### Log out a user

`st.logout()`

removes a user's identity information.

```
st.logout()
```


Python

#### User info

`st.user`

returns information about a logged-in user.

```
if st.user.is_logged_in:
st.write(f"Welcome back, {st.user.name}!")
```


Navigation and pages

Python

#### Navigation

Configure the available pages in a multipage app.

```
st.navigation({
"Your account" : [log_out, settings],
"Reports" : [overview, usage],
"Tools" : [search]
})
```


Python

#### Page

Define a page in a multipage app.

```
home = st.Page(
"home.py",
title="Home",
icon=":material/home:"
)
```


Python

#### Page link

Display a link to another page in a multipage app.

```
st.page_link("app.py", label="Home", icon="🏠")
st.page_link("pages/profile.py", label="My profile")
```


Python

#### Switch page

Programmatically navigates to a specified page.

```
st.switch_page("pages/my_page.py")
```


Execution flow

Python

#### Modal dialog

Insert a modal dialog that can rerun independently from the rest of the script.

```
@st.dialog("Sign up")
def email_form():
name = st.text_input("Name")
email = st.text_input("Email")
```


Python

#### Forms

Create a form that batches elements together with a “Submit" button.

```
with st.form(key='my_form'):
name = st.text_input("Name")
email = st.text_input("Email")
st.form_submit_button("Sign up")
```


Python

#### Fragments

Define a fragment to rerun independently from the rest of the script.

```
@st.fragment(run_every="10s")
def fragment():
df = get_data()
st.line_chart(df)
```


Python

#### Rerun script

Rerun the script immediately.

```
st.rerun()
```


Python

#### Stop execution

Stops execution immediately.

```
st.stop()
```


Third-party components

These are featured components created by our lovely community. For more examples and inspiration, check out our [Components Gallery](https://streamlit.io/components) and [Streamlit Extras](https://extras.streamlit.app)!

Caching and state

Python

#### Cache data

Function decorator to cache functions that return data (e.g. dataframe transforms, database queries, ML inference).

```
@st.cache_data
def long_function(param1, param2):
# Perform expensive computation here or
# fetch data from the web here
return data
```


Python

#### Cache resource

Function decorator to cache functions that return global resources (e.g. database connections, ML models).

```
@st.cache_resource
def init_model():
# Return a global resource here
return pipeline(
"sentiment-analysis",
model="distilbert-base-uncased-finetuned-sst-2-english"
)
```


Python

#### Session state

Session state is a way to share variables between reruns, for each user session.

```
st.session_state['key'] = value
```


Python

#### Query parameters

Get, set, or clear the query parameters that are shown in the browser's URL bar.

```
st.query_params[key] = value
st.query_params.clear()
```


Python

#### Context

`st.context`

provides a read-only interface to access cookies, headers, locale, and other browser-session information.

```
st.context.cookies
st.context.headers
```


Connections and databases

Setup your connection

Python

#### Create a connection

Connect to a data source or API

```
conn = st.connection('pets_db', type='sql')
pet_owners = conn.query('select * from pet_owners')
st.dataframe(pet_owners)
```


Built-in connections

Python

#### SnowflakeConnection

A connection to Snowflake.

```
conn = st.connection('snowflake')
```


Python

#### SQLConnection

A connection to a SQL database using SQLAlchemy.

```
conn = st.connection('sql')
```


Build your own connections

Python

#### Connection base class

Build your own connection with `BaseConnection`

.

```
class MyConnection(BaseConnection[myconn.MyConnection]):
def _connect(self, **kwargs) -> MyConnection:
return myconn.connect(**self._secrets, **kwargs)
def query(self, query):
return self._instance.query(query)
```


Secrets management

Python

#### Secrets singleton

Access secrets from a local TOML file.

```
key = st.secrets["OpenAI_key"]
```


Python

#### Secrets file

Save your secrets in a per-project or per-profile TOML file.

```
OpenAI_key = "<YOUR_SECRET_KEY>"
```


Third-party components

These are featured components created by our lovely community. For more examples and inspiration, check out our [Components Gallery](https://streamlit.io/components) and [Streamlit Extras](https://extras.streamlit.app)!

Custom Components

V2 custom components

Python

#### Register

Register a custom component.

```
my_component = st.components.v2.component(
html=HTML,
js=JS
)
my_component()
```


Python

#### Mount

Mount a custom component.

```
my_component = st.components.v2.component(
html=HTML,
js=JS
)
my_component()
```


Terminal

#### npm support code

Support code published through npm.

```
npm i @streamlit/component-v2-lib
```


TypeScript

#### FrontendRenderer

Type alias for the component function.

```
import { FrontendRenderer } from "@streamlit/component-v2-lib";
```


TypeScript

#### FrontendRendererArgs

Type alias for the component arguments.

```
import { FrontendRendererArgs } from "@streamlit/component-v2-lib";
```


TypeScript

#### FrontendState

Type alias for the component state.

```
import { FrontendState } from "@streamlit/component-v2-lib";
```


TypeScript

#### CleanupFunction

Type alias for the component cleanup function.

```
import { CleanupFunction } from "@streamlit/component-v2-lib";
```


V1 custom components

Python

#### Declare a component

Create and register a custom component.

```
from st.components.v1 import declare_component
declare_component(
"custom_slider",
"/frontend",
)
```


Python

#### HTML

Display an HTML string in an iframe.

```
from st.components.v1 import html
html(
"<p>Foo bar.</p>"
)
```


Python

#### iframe

Load a remote URL in an iframe.

```
from st.components.v1 import iframe
iframe(
"docs.streamlit.io"
)
```


Configuration

Python

#### Configuration file

Configures the default settings for your app.

```
your-project/
├── .streamlit/
│ └── config.toml
└── your_app.py
```


Python

#### Get config option

Retrieve a single configuration option.

```
st.get_option("theme.primaryColor")
```


Python

#### Set config option

Set a single configuration option. (This is very limited.)

```
st.set_option("deprecation.showPyplotGlobalUse", False)
```


Python

#### Set page title, favicon, and more

Configures the default settings of the page.

```
st.set_page_config(
page_title="My app",
page_icon=":shark:",
)
```


Developer tools

App testing

Python

#### st.testing.v1.AppTest

`st.testing.v1.AppTest`

simulates a running Streamlit app for testing.

```
from streamlit.testing.v1 import AppTest
at = AppTest.from_file("streamlit_app.py")
at.secrets["WORD"] = "Foobar"
at.run()
assert not at.exception
at.text_input("word").input("Bazbat").run()
assert at.warning[0].value == "Try again."
```


Python

#### AppTest.from_file

`st.testing.v1.AppTest.from_file`

initializes a simulated app from a file.

```
from streamlit.testing.v1 import AppTest
at = AppTest.from_file("streamlit_app.py")
at.run()
```


Python

#### AppTest.from_string

`st.testing.v1.AppTest.from_string`

initializes a simulated app from a string.

```
from streamlit.testing.v1 import AppTest
at = AppTest.from_string(app_script_as_string)
at.run()
```


Python

#### AppTest.from_function

`st.testing.v1.AppTest.from_function`

initializes a simulated app from a function.

```
from streamlit.testing.v1 import AppTest
at = AppTest.from_function(app_script_as_callable)
at.run()
```


Python

#### Block

A representation of container elements, including:

`st.chat_message`

`st.columns`

`st.sidebar`

`st.tabs`

- The main body of the app.

```
# at.sidebar returns a Block
at.sidebar.button[0].click().run()
assert not at.exception
```


Python

#### Element

The base class for representation of all elements, including:

`st.title`

`st.header`

`st.markdown`

`st.dataframe`


```
# at.title returns a sequence of Title
# Title inherits from Element
assert at.title[0].value == "My awesome app"
```


Python

#### Button

A representation of `st.button`

and `st.form_submit_button`

.

```
at.button[0].click().run()
```


Python

#### ChatInput

A representation of `st.chat_input`

.

```
at.chat_input[0].set_value("What is Streamlit?").run()
```


Python

#### Checkbox

A representation of `st.checkbox`

.

```
at.checkbox[0].check().run()
```


Python

#### ColorPicker

A representation of `st.color_picker`

.

```
at.color_picker[0].pick("#FF4B4B").run()
```


Python

#### DateInput

A representation of `st.date_input`

.

```
release_date = datetime.date(2023, 10, 26)
at.date_input[0].set_value(release_date).run()
```


Python

#### Multiselect

A representation of `st.multiselect`

.

```
at.multiselect[0].select("New York").run()
```


Python

#### NumberInput

A representation of `st.number_input`

.

```
at.number_input[0].increment().run()
```


Python

#### Radio

A representation of `st.radio`

.

```
at.radio[0].set_value("New York").run()
```


Python

#### SelectSlider

A representation of `st.select_slider`

.

```
at.select_slider[0].set_range("A","C").run()
```


Python

#### Selectbox

A representation of `st.selectbox`

.

```
at.selectbox[0].select("New York").run()
```


Python

#### Slider

A representation of `st.slider`

.

```
at.slider[0].set_range(2,5).run()
```


Python

#### TextArea

A representation of `st.text_area`

.

```
at.text_area[0].input("Streamlit is awesome!").run()
```


Python

#### TextInput

A representation of `st.text_input`

.

```
at.text_input[0].input("Streamlit").run()
```


Python

#### TimeInput

A representation of `st.time_input`

.

```
at.time_input[0].increment().run()
```


Python

#### Toggle

A representation of `st.toggle`

.

```
at.toggle[0].set_value("True").run()
```


Third-party components

These are featured components created by our lovely community. For more examples and inspiration, check out our [Components Gallery](https://streamlit.io/components) and [Streamlit Extras](https://extras.streamlit.app)!


*arrow_back*Previous: Concepts

*arrow_forward*Next: Write and magic*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/develop/tutorials

Tutorials

Our tutorials include step-by-step examples of building different types of apps in Streamlit.


##### Add user authentication

Add user authentication with Streamlit's built-in support for OpenID Connect.


##### Chat apps and LLMs

Work with LLMs and create chat apps.


##### Configuration and theming

Customize the appearance of your app.


##### Connect to data sources

Connect to popular datasources.


##### Work with Streamlit's core elements

Work with core elements like dataframes and charts.


##### Use core features to work with Streamlit's execution model

Build simple apps and walk through examples to learn about Streamlit's core features and execution model.


##### Build custom components

Build package-based custom components with the official component template.


##### Create multipage apps

Create multipage apps, navigation, and flows.

When you're done developing your app, see our [deployment tutorials](/deploy/tutorials), too!


*arrow_back*Previous: API reference

*arrow_forward*Next: Authentication and personalization*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/develop/quick-reference

Quick reference


##### Cheatsheet

A dense list of Streamlit commands with example syntax.


##### Release notes

See how Streamlit has changed with each new version.


##### Pre-release features

Understand how we introduce new features and how you can get your hands on them sooner!


##### Roadmap

Get a sneak peek at what we have scheduled for the next year.


*arrow_back*Previous: Tutorials

*arrow_forward*Next: Cheat sheet*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/deploy

Deploy

Get all the information you need to deploy your app and share it with your users.


*book*[Concepts.](/deploy/concepts) Understand the basics of app deployment.


*cloud*[Streamlit Community Cloud.](/deploy/streamlit-community-cloud) Deploy your app on our free platform and join a community of developers who share their apps around the world. This is a great place for your non-commerical, personal, and educational apps.


*ac_unit*[Snowflake.](/deploy/snowflake) Deploy your app in Snowflake for a secure, enterprise-grade environment. This is a great place for your business apps.


*bolt*[Other platforms.](/deploy/tutorials) Learn how to deploy your app on a variety of platforms with our convenient collection of tutorials.


*arrow_back*Previous: Develop

*arrow_forward*Next: Concepts*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/deploy/concepts

Deployment concepts

Learn the fundamental concepts of app deployment. There are three main processes involved in deploying apps.

- Install Python, Streamlit, and other dependencies in your deployment environment.
- Securely handle your secrets and private information.
- Remote start your app (
`streamlit run`

).

If you're using Streamlit Community Cloud, we'll do most of the work for you!


*build_circle*[Dependencies.](/deploy/concepts/dependencies) Understand the basics of configuring your deployment environment.


*password*[Secrets.](/deploy/concepts/secrets) Understand the basics of secret management.


*arrow_back*Previous: Deploy

*arrow_forward*Next: Dependencies*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/deploy/streamlit-community-cloud

Welcome to Streamlit Community Cloud

With Streamlit Community Cloud, you can create, deploy, and manage your Streamlit apps — all for free. Share your apps with the world and build a customized profile page to display your work. Your Community Cloud account connects directly to your GitHub repositories (public or private). Most apps will launch in only a few minutes. Community Cloud handles all of the containerization, so deploying is easy. Bring your own code, or start from one of our popular templates. Rapidly prototype, explore, and update apps by simply changing your code in GitHub. Most changes appear immediately!

Want to avoid the work of setting up a local development environment? Community Cloud can help you quickly configure a codespace to develop in the cloud. Start coding or editing a Streamlit app with just a few clicks. See [Edit your app](/deploy/streamlit-community-cloud/manage-your-app/edit-your-app).

Go to our [Community Cloud quickstart](/deploy/streamlit-community-cloud/get-started/quickstart) to speed-run through creating your account, deploying an example app, and editing it using GitHub Codespaces. If you haven't built your first Streamlit app yet, see [Get started with Streamlit](/get-started).


*arrow_forward*[Get started.](/deploy/streamlit-community-cloud/get-started) Learn about Streamlit Community Cloud accounts and how to create one.


*flight_takeoff*[Deploy your app.](/deploy/streamlit-community-cloud/deploy-your-app) A step-by-step guide on how to get your app deployed.


*settings*[Manage your app.](/deploy/streamlit-community-cloud/manage-your-app) Access logs, reboot apps, set favorites, and more. Jump into a GitHub codespace to edit your app in the cloud.


*share*[Share your app.](/deploy/streamlit-community-cloud/share-your-app) Share or embed your app.


*manage_accounts*[Manage your account.](/deploy/streamlit-community-cloud/manage-your-account) Update your email, manage connections, or delete your account.


*arrow_back*Previous: Concepts

*arrow_forward*Next: Get started*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/deploy/snowflake

Deploy Streamlit apps in Snowflake

Host your apps alongside your data in a single, global platform. Snowflake provides industry-leading features that ensure the highest levels of security for your account, users, data, and apps. If you're looking for an enterprise hosting solution, try Snowflake!

There are three ways to host Streamlit apps in Snowflake:


*bolt*[Streamlit in Snowflake.](https://docs.snowflake.com/developer-guide/streamlit/about-streamlit) Run your Streamlit app as a native object in Snowflake. Enjoy an in-browser editor and minimal work to configure your environment. Share your app with other users in your Snowflake account through role-based access control (RBAC). This is a great way to deploy apps internally for your business. Check out Snowflake docs!


*ac_unit*[Snowflake Native Apps.](https://docs.snowflake.com/en/developer-guide/native-apps/adding-streamlit) Package your app with data and share it with other Snowflake accounts. This is a great way to share apps and their underlying data with other organizations who use Snowflake. Check out Snowflake docs!


*web_asset*[Snowpark Container Services.](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/overview) Deploy your app in a container that's optimized to run in Snowflake. This is the most flexible option, where you can use any library and assign a public URL to your app. Manage your allowed viewers through your Snowflake account. Check out Snowflake docs!

*push_pin*

#### Note

Using Snowpark Container Services to deploy a Streamlit app requires a compute pool, which is not available in a trial account at this time.


*arrow_back*Previous: Streamlit Community Cloud

*arrow_forward*Next: Other platforms*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/deploy/tutorials

Deployment tutorials

This sections contains step-by-step guides on how to deploy Streamlit apps to various cloud platforms and services. We have deployment guides for:


##### Streamlit Community Cloud


##### Docker


##### Kubernetes

While we work on official Streamlit deployment guides for other hosting providers, here are some user-submitted tutorials for different cloud services:

[How to deploy Streamlit apps to](https://dev.to/whitphx/how-to-deploy-streamlit-apps-to-google-app-engine-407o), by**Google App Engine**[Yuichiro Tachibana (Tsuchiya)](https://discuss.streamlit.io/u/whitphx/summary).[Host Streamlit on](https://towardsdatascience.com/quickly-build-and-deploy-an-application-with-streamlit-988ca08c7e83), by Maarten Grootendorst.**Heroku**[Deploy Streamlit on](https://docs.cloud.ploomber.io/en/latest/apps/streamlit.html), by Ido Michael.**Ploomber Cloud**[Host Streamlit on](https://www.21yunbox.com/docs/#/deploy-streamlit), by Toby Lei.**21YunBox**[Deploy a Streamlit App on](https://www.koyeb.com/docs/deploy/streamlit), by Justin Ellingwood.**Koyeb**[Community-supported deployment wiki](https://discuss.streamlit.io/t/streamlit-deployment-guide-wiki/5099).


*arrow_back*Previous: Snowflake

*arrow_forward*Next: Docker*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/knowledge-base

Knowledge base

The knowledge base is a self-serve library of tips, step-by-step tutorials, and articles that answer your questions about creating and deploying Streamlit apps.


*quiz*[FAQ](/knowledge-base/using-streamlit) Here are some frequently asked questions about using Streamlit.


*downloading*[Installing dependencies.](/knowledge-base/dependencies) If you run into problems installing dependencies for your Streamlit apps, we've got you covered.


*report*[Deployment issues.](/knowledge-base/deploy) Have questions about deploying Streamlit apps to the cloud? This section covers deployment-related issues.


*arrow_back*Previous: Deploy

*arrow_forward*Next: FAQ*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/knowledge-base/using-streamlit

FAQ

Here are some frequently asked questions about using Streamlit. If you feel something important is missing that everyone needs to know, please [open an issue](https://github.com/streamlit/docs/issues) or [submit a pull request](https://github.com/streamlit/docs/pulls) and we'll be happy to review it!

[Sanity checks](/knowledge-base/using-streamlit/sanity-checks)[How can I make Streamlit watch for changes in other modules I'm importing in my app?](/knowledge-base/using-streamlit/streamlit-watch-changes-other-modules-importing-app)[What browsers does Streamlit support?](/knowledge-base/using-streamlit/supported-browsers)[Where does st.file_uploader store uploaded files and when do they get deleted?](/knowledge-base/using-streamlit/where-file-uploader-store-when-deleted)[How do you retrieve the filename of a file uploaded with st.file_uploader?](/knowledge-base/using-streamlit/retrieve-filename-uploaded)[How to remove "· Streamlit" from the app title?](/knowledge-base/using-streamlit/remove-streamlit-app-title)[How to download a file in Streamlit?](/knowledge-base/using-streamlit/how-download-file-streamlit)[How to download a Pandas DataFrame as a CSV?](/knowledge-base/using-streamlit/how-download-pandas-dataframe-csv)[How can I make](/knowledge-base/using-streamlit/pydeck-chart-custom-mapbox-styles)`st.pydeck_chart`

use custom Mapbox styles?[How to insert elements out of order?](/knowledge-base/using-streamlit/insert-elements-out-of-order)[How do I upgrade to the latest version of Streamlit?](/knowledge-base/using-streamlit/how-upgrade-latest-version-streamlit)[Widget updating for every second input when using session state](/knowledge-base/using-streamlit/widget-updating-session-state)[How do I create an anchor link?](/knowledge-base/using-streamlit/create-anchor-link)[How do I enable camera access?](/knowledge-base/using-streamlit/enable-camera)[Why does Streamlit restrict nested](/knowledge-base/using-streamlit/why-streamlit-restrict-nested-columns)`st.columns`

?[What is serializable session state?](/knowledge-base/using-streamlit/serializable-session-state)


*arrow_back*Previous: Knowledge base

*arrow_forward*Next: How do I create an anchor link?*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/knowledge-base/dependencies

Installing dependencies

[ModuleNotFoundError: No module named](/knowledge-base/dependencies/module-not-found-error)[ImportError: libGL.so.1: cannot open shared object file: No such file or directory](/knowledge-base/dependencies/libgl)[ERROR: No matching distribution found for](/knowledge-base/dependencies/no-matching-distribution)[How to install a package not on PyPI/Conda but available on GitHub](/knowledge-base/dependencies/install-package-not-pypi-conda-available-github)


*arrow_back*Previous: FAQ

*arrow_forward*Next: How to install a package not on PyPI or Conda but available on GitHub*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/knowledge-base/deploy

Deployment-related questions and errors

[How do I deploy Streamlit on a domain so it appears to run on a regular port (i.e. port 80)?](/knowledge-base/deploy/deploy-streamlit-domain-port-80)[How can I deploy multiple Streamlit apps on different subdomains?](/knowledge-base/deploy/deploy-multiple-streamlit-apps-different-subdomains)[Invoking a Python subprocess in a deployed Streamlit app](/knowledge-base/deploy/invoking-python-subprocess-deployed-streamlit-app)[Does Streamlit support the WSGI Protocol? (aka Can I deploy Streamlit with gunicorn?)](/knowledge-base/deploy/does-streamlit-support-wsgi-protocol)[Argh. This app has gone over its resource limits.](/knowledge-base/deploy/resource-limits)[App is not loading when running remotely](/knowledge-base/deploy/remote-start)[Authentication without SSO](/knowledge-base/deploy/authentication-without-sso)[How do I increase the upload limit of](/knowledge-base/deploy/increase-file-uploader-limit-streamlit-cloud)`st.file_uploader`

on Streamlit Community Cloud?[Huh. This is isn't supposed to happen message after trying to log in](/knowledge-base/deploy/huh-this-isnt-supposed-to-happen-message-after-trying-to-log-in)[Login attempt to Streamlit Community Cloud fails with error 403](/knowledge-base/deploy/login-attempt-to-streamlit-community-cloud-fails-with-error-403)[How to submit a support case for Streamlit Community Cloud](/knowledge-base/deploy/how-to-submit-a-support-case-for-streamlit-community-cloud)


*arrow_back*Previous: Installing dependencies

*arrow_forward*Next: How can I deploy multiple Streamlit apps on different subdomains?*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/develop/api-reference/layout/st.tabs?utm_source=streamlit

st.tabs

Insert containers separated into tabs.

Inserts a number of multi-element containers as tabs. Tabs are a navigational element that allows users to easily move between groups of related content.

To add elements to the returned containers, you can use the `with` notation
(preferred) or just call methods directly on the returned object. See
the examples below.

By default, all tab content is computed and sent to the frontend
regardless of which tab is selected. To enable lazy execution where
only the selected tab's content runs, use `on_change="rerun"` or
pass a callable to `on_change`. Each tab's `.open` property
indicates whether it is the currently selected tab, letting you
conditionally render expensive content.

| Function signature
|
|---|

st.tabs(tabs, *, width="stretch", default=None, key=None, on_change="ignore", args=None, kwargs=None)

tabs (list of str)

Creates a tab for each string in the list. The first tab is selected by default. The string is used as the name of the tab and can optionally contain GitHub-flavored Markdown of the following types: Bold, Italics, Strikethroughs, Inline Code, Links, and Images. Images display like icons, with a max height equal to the font height.

Unsupported Markdown elements are unwrapped so only their children (text contents) render. Common block-level Markdown (headings, lists, blockquotes) is automatically escaped and displays as literal text in labels.

See the `body` parameter of [ st.markdown](https://docs.streamlit.io/develop/api-reference/text/st.markdown) for additional,
supported Markdown directives.

width ("stretch" or int)

The width of the tab container. This can be one of the following:

`"stretch"`(default): The width of the container matches the width of the parent container.- An integer specifying the width in pixels: The container has a fixed width. If the specified width is greater than the width of the parent container, the width of the container matches the width of the parent container.

default (str or None)

The default tab to select. If this is `None` (default), the first
tab is selected. If this is a string, it must be one of the tab
labels. If two tabs have the same label as `default`, the first
one is selected.

key (str, int, or None)

An optional string or integer to use as the unique key for
the widget. If this is `None` (default), a key will be
generated for the widget based on the values of the other
parameters. No two widgets may have the same key.

When `on_change` is set to `"rerun"` or a callable, setting a
key lets you read or update the active tab label via
`st.session_state[key]`. For more details, see [Widget behavior](https://docs.streamlit.io/develop/concepts/architecture/widget-behavior).

on_change ("ignore", "rerun", callable, or None)

How the tabs should respond when the user switches tabs. This
controls whether tabs track state and trigger reruns. `on_change`
can be one of the following values:

`"ignore"`(default): The tabs don't track state. All tab content runs regardless of which tab is selected. The`.open`attribute of each tab container returns`None`for all tabs.`"rerun"`: The tabs track state. Streamlit reruns the app when the user switches tabs. The`.open`attribute of each tab container returns its current state, which is`True`if it is selected and`False`if it isn't selected. This lets you skip expensive work in hidden tabs.- A callable: The tabs track state. Streamlit executes the callable
as a callback function and reruns the app when the user switches
tabs. The
`.open`attribute of each tab container returns its state like when`on_change="rerun"`. If you need to access label of the current tab inside your callback, fetch it through Session State.

When the tabs track state, they can't be used inside Streamlit cache-decorated functions.

args (list or tuple or None)

An optional list or tuple of args to pass to the `on_change`
callback.

kwargs (dict or None)

An optional dict of kwargs to pass to the `on_change` callback.

(Sequence of TabContainers)

A sequence of `TabContainer` objects with `.open` properties to
return the current state of the tabs if the tabs track state.

#### Examples

*Example 1: Use context management*

You can use `with` notation to insert any element into a tab:

import streamlit as st tab1, tab2, tab3 = st.tabs(["Cat", "Dog", "Owl"]) with tab1: st.header("A cat") st.image("https://static.streamlit.io/examples/cat.jpg", width=200) with tab2: st.header("A dog") st.image("https://static.streamlit.io/examples/dog.jpg", width=200) with tab3: st.header("An owl") st.image("https://static.streamlit.io/examples/owl.jpg", width=200)

*Example 2: Call methods directly*

You can call methods directly on the returned objects:

import streamlit as st from numpy.random import default_rng as rng df = rng(0).standard_normal((10, 1)) tab1, tab2 = st.tabs(["📈 Chart", "🗃 Data"]) tab1.subheader("A tab with a chart") tab1.line_chart(df) tab2.subheader("A tab with the data") tab2.write(df)

*Example 3: Set the default tab and style the tab labels*

Use the `default` parameter to set the default tab. You can also use
Markdown in the tab labels.

import streamlit as st tab1, tab2, tab3 = st.tabs( [":cat: Cat", ":dog: Dog", ":rainbow[Owl]"], default=":rainbow[Owl]" ) with tab1: st.header("A cat") st.image("https://static.streamlit.io/examples/cat.jpg", width=200) with tab2: st.header("A dog") st.image("https://static.streamlit.io/examples/dog.jpg", width=200) with tab3: st.header("An owl") st.image("https://static.streamlit.io/examples/owl.jpg", width=200)

**Example 4: Programmatically control the tab state**

You can use a key to programmatically control the tab state or access
the state in callbacks. You must set the `on_change` parameter for
the tabs to track state.

import streamlit as st def switch_tab(tab): st.session_state.animal = tab def on_tab_change(): st.toast(f"You opened the {st.session_state.animal} tab.") cat, dog, owl = st.tabs( ["Cat", "Dog", "Owl"], on_change=on_tab_change, key="animal" ) if cat.open: with cat: st.write("This is the cat") if dog.open: with dog: st.write("This is the dog") if owl.open: with owl: st.write("This is the owl") with st.container(horizontal=True): st.button("Cat", on_click=switch_tab, args=("Cat",)) st.button("Dog", on_click=switch_tab, args=("Dog",)) st.button("Owl", on_click=switch_tab, args=("Owl",))

TabContainer

A container returned for each tab in `st.tabs`.

`TabContainer` is a `DeltaGenerator` subclass with an additional
`.open` property for lazy execution. Use `with` notation or call
methods directly on the container to add elements to the tab.

| Attributes | |
open (bool or None) | Whether this tab is the currently active tab. This is |

#### Examples

**Example 1: Lazy loading content**

import streamlit as st import time cat, dog, owl = st.tabs(["Cat", "Dog", "Owl"], on_change="rerun") if cat.open: with cat: with st.spinner("Loading cat..."): time.sleep(2) st.write("This is the cat") if dog.open: with dog: with st.spinner("Loading dog..."): time.sleep(2) st.write("This is the dog") if owl.open: with owl: with st.spinner("Loading owl..."): time.sleep(2) st.write("This is the owl")

**Example 2: Conditionally render content outside of the tab**

import streamlit as st cat, dog, owl = st.tabs(["Cat", "Dog", "Owl"], on_change="rerun") with cat: st.write("This is the cat") with dog: st.write("This is the dog") with owl: st.write("This is the owl") if cat.open: options = ["orange", "tuxie", "tortie"] cat_color = st.sidebar.selectbox("What color is your cat?", options) if dog.open: options = ["golden", "black", "white"] dog_color = st.sidebar.selectbox("What color is your dog?", options) if owl.open: options = ["brown", "white", "black"] owl_color = st.sidebar.selectbox("What color is your owl?", options)


*arrow_back*Previous: st.space

*arrow_forward*Next: Chat elements*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/develop/concepts/architecture/widget-behavior?utm_source=streamlit

Understanding widget behavior

Widgets (like `st.button`

, `st.selectbox`

, and `st.text_input`

) are at the heart of Streamlit apps. They are the interactive elements of Streamlit that pass information from your users into your Python code. Widgets are magical and often work how you want, but they can have surprising behavior in some situations. Understanding the different parts of a widget and the precise order in which events occur helps you achieve your desired results.

This guide covers advanced concepts about widgets. Generally, it begins with simpler concepts and increases in complexity. For most beginning users, these details won't be important to know right away. When you want to dynamically change widgets or preserve widget information between pages, these concepts will be important to understand. We recommend having a basic understanding of [Session State](/develop/api-reference/caching-and-state/st.session_state) before reading this guide.

*expand_more*

- The actions of one user don't affect the widgets of any other user.
- A widget command returns the widget's current value, which is a simple Python type. For example,
`st.button`

returns a Boolean value. - Widgets return their default values on their first call before a user interacts with them.
- A widget's identity depends on the arguments passed to the widget command. If a key is provided, the key determines the widget's identity, with limited exceptions noted in each widget's
`key`

parameter description. If no key is provided, changing a widget's label, min value, max value, default value, placeholder text, or help text will cause it to reset. - If you don't call a widget command in a script run, Streamlit will delete the widget's information—
*including its key-value pair in Session State*. If you call the same widget command later, Streamlit treats it as a new widget. - Widgets are not stateful between pages. If you have two widgets with the same key on different pages, they will be treated as two different widgets.

The last three points (widget identity and widget deletion) are the most relevant when dynamically changing widgets or working with multi-page applications. This is covered in detail later in this guide: [Statefulness of widgets](/develop/concepts/architecture/widget-behavior#statefulness-of-widgets) and [Widget life cycle](/develop/concepts/architecture/widget-behavior#widget-life-cycle).

*priority_high*

#### Important

**Key-based widget identity (v1.55.0)**

As of v1.55.0, all widgets support key-based identity. When a `key`

is provided, the key is the primary determinant of the widget's identity, and changing other parameters (like `label`

, `options`

, or `default`

) won't reset the widget. Some parameters that constrain valid values still affect identity for specific widgets, even when a key is provided. For example, changing `min_value`

or `max_value`

for `st.slider`

will reset the widget because the current value could be invalidated. These exceptions are noted in each widget's `key`

parameter description.

Key-based identity was progressively introduced from v1.50.0 through v1.55.0. If you're using an older version, check the [release notes](/develop/quick-reference/release-notes) to see which widgets support key-based identity in your version.

**Other notable changes:**

**v1.46.0**: When navigating between pages, widget keys in`st.session_state`

are deleted at the beginning of the new page's script run instead of the end.**v1.55.0**: Most widgets support a new`bind`

parameter to sync widget values with URL query parameters. See[Binding widgets to query parameters](/develop/concepts/architecture/widget-behavior#binding-widgets-to-query-parameters).

Anatomy of a widget

There are four parts to keep in mind when using widgets:

- The frontend component as seen by the user.
- The backend (Python) in-memory value.
- The key-value pair in
`st.session_state`

that provides programmatic access to the widget's value. - The return value given by the widget's function.

Widgets are session dependent

Widget states are dependent on a particular session (browser connection). The actions of one user do not affect the widgets of any other user. Furthermore, if a user opens up multiple tabs to access an app, each tab will be a unique session. Changing a widget in one tab will not affect the same widget in another tab.

Widgets return simple Python data types

The value of a widget as seen through `st.session_state`

and returned by the widget function are of simple Python types. For example, `st.button`

returns a boolean value and will have the same boolean value saved in `st.session_state`

if using a key. The first time a widget function is called (before a user interacts with it), it will return its default value. For example, `st.selectbox`

returns the first option by default. Default values are configurable for all widgets with a few special exceptions like `st.button`

and `st.file_uploader`

.

Callbacks let you react to widget changes

Most widgets accept an `on_change`

callback parameter (or `on_click`

for buttons). A callback is a Python function that Streamlit calls when the user interacts with the widget. You can optionally pass arguments to the callback through the `args`

and `kwargs`

parameters. Callbacks are covered in detail in [Order of operations](/develop/concepts/architecture/widget-behavior#order-of-operations).

Keys help distinguish widgets and access their values

Widget keys serve three purposes:

- Distinguishing two otherwise identical widgets.
- Maintaining statefulness of the widget while changing its parameters.
- Creating a means to access and manipulate the widget's value through
`st.session_state`

.

Additionally, for developer convenience, keys are repeated in the DOM as HTML attributes with a Streamlit-specific prefix, `st-key-`

, to prevent conflicts. The exact prefix, attribute name, and placement within the widget's DOM subtree aren't guaranteed to be stable between versions.

Widget identity: Key-based vs parameter-based

Whenever possible, Streamlit updates widgets incrementally on the frontend instead of rebuilding them with each rerun. This means Streamlit assigns a widget identity to each widget from the arguments passed to the widget command.

Widget identity depends on whether a key is provided:

**With a key**: The key is the primary determinant of the widget's identity. Other parameters like`label`

,`default`

,`placeholder`

, and`help`

can change without resetting the widget. However, some widgets have specific parameters that also affect identity because changing them could invalidate the current value. For example, changing`min_value`

/`max_value`

on`st.slider`

or`selection_mode`

on`st.pills`

will reset the widget even with a key. Check the`key`

parameter description of each widget to see its exceptions, if any.**Without a key**: A widget's parameters (label, options, min/max, default, placeholder, help text) determine the widget identity. Changing one of these parameters will reset the widget. Note that callback functions, callback args and kwargs, label visibility, and disabling a widget do not affect the widget identity.

In all cases, widget identities and states aren't preserved between pages. More information is provided below in [Statefulness of widgets](/develop/concepts/architecture/widget-behavior#statefulness-of-widgets).

Streamlit can't understand two identical widgets on the same page

If you have two widgets of the same type with the same arguments on the same page, you will get a `DuplicateWidgetID`

error. In this case, assign unique keys to the two widgets.

The following example will cause a `DuplicateWidgetID`

error.

```
st.button("OK")
st.button("OK")
```


The following example correctly assigns unique keys to the two buttons to avoid the `DuplicateWidgetID`

error.

```
st.button("OK", key="privacy")
st.button("OK", key="terms")
```


Order of operations

When a user interacts with a widget, the widget is updated and triggers a rerun in the following order:

- The widget value in
`st.session_state`

is updated. - The callback function (if any) is executed.
- The page reruns with the widget command returning its new value.

If the callback function displays anything on the screen, that content will appear above the rest of the page. A callback function runs as a *prefix* to the script run. Consequently, that means anything written via a callback function will disappear as soon as the user performs their next action. Widget commands should generally not be called within a callback function.

*push_pin*

#### Note

If a callback function is passed any args or kwargs, those arguments will be established when the widget command is called, not later when the user interacts with the widget. In particular, if you want to use a widget's value in its own callback function, you can't pass that value to the callback function via the `args`

parameter; you must assign a key to the widget and look up its value using `st.session_state`

*within the callback function*.

Using callback functions with forms

Using a callback function with a form requires understanding of this order of operations.

```
import streamlit as st
if "attendance" not in st.session_state:
st.session_state.attendance = set()
def take_attendance():
if st.session_state.name in st.session_state.attendance:
st.info(f"{st.session_state.name} has already been counted.")
else:
st.session_state.attendance.add(st.session_state.name)
with st.form(key="my_form"):
st.text_input("Name", key="name")
st.form_submit_button("I'm here!", on_click=take_attendance)
```


Statefulness of widgets

As long as the widget identity remains the same and that widget is continuously rendered on the frontend, then it will be stateful and remember user input.

Changing a widget's identity will reset it

If any of the parameters that determine a widget's identity change, Streamlit will see it as a new widget and it will reset. Providing a key protects the widget from resets when most parameters change. The use of default values is particularly important in this case. If you use a key and change a widget's default value, there will be no change to the widget's state. If you don't use a key, changing a widget's default value will reset the widget to that default value.

In this example, we have two sliders where you can change the min, max, and default values. Try interacting with each slider to change its value then change the min or max setting to see what happens. Because `min_value`

and `max_value`

constrain valid values, changing them resets `st.slider`

even with a key. However, if you change the default value, only the slider without a key will reset. The keyed slider will remain stateful.

```
import streamlit as st
cols = st.columns([2, 1, 2])
minimum = cols[0].number_input("Minimum", 1, 3)
maximum = cols[2].number_input("Maximum", 8, 10, 10)
value = cols[1].number_input("Default", 4, 7, 5)
st.slider("No key", minimum, maximum, value)
st.slider("With a key", minimum, maximum, value, key="a")
```


Retain statefulness when changing a widget's identity

Here is a solution for the above example that preserves the slider's value when the min and max change. The widget's initial value is set through Session State rather than the `value`

parameter. When you are programmatically changing a widget, use Session State to maintain the widget's state to avoid unexpected behavior.

```
import streamlit as st
st.session_state.setdefault("a", 5)
cols = st.columns(2)
minimum = cols[0].number_input("Min", 1, 5, key="min")
maximum = cols[1].number_input("Max", 6, 10, 10, key="max")
def update_value():
st.session_state.a = min(st.session_state.a, maximum)
st.session_state.a = max(st.session_state.a, minimum)
update_value()
st.slider("A", minimum, maximum, key="a")
```


The `update_value()`

function ensures consistency between the widget parameters and value. By writing to `st.session_state.a`

, the key-value pair is available for use by the "new" widget. Without this write, Streamlit would overwrite the key-value pair with the default value. The reason for this is explained in [Widget life cycle](/develop/concepts/architecture/widget-behavior#widget-life-cycle).

Widgets do not persist when not continually rendered

If a widget command for a specific widget instance isn't called during a script run, then none of its parts are retained, including its value in `st.session_state`

. If a widget has a key and you navigate away from that widget, its key and associated value in `st.session_state`

are deleted. Even temporarily hiding a widget causes it to reset when it reappears; Streamlit will treat it like a new widget. To preserve widget state across pages or when widgets are temporarily hidden, save the value to a separate placeholder key as shown below.

Save widget values in Session State to preserve them between pages

If you want to navigate away from a widget and return to it while keeping its value, use a separate key in `st.session_state`

to save the information independently from the widget. This technique is also recommended to carry a widget's state to a new instance on another page. In this example, an underscore-prefixed, temporary key is used with a widget. Hence, `"_my_key"`

is used as the widget key, but the data is copied to `"my_key"`

to preserve it between pages.

```
import streamlit as st
def store_value():
# Copy the value to the permanent key
st.session_state["my_key"] = st.session_state["_my_key"]
# Copy the saved value to the temporary key
st.session_state["_my_key"] = st.session_state["my_key"]
st.number_input("Number of filters", key="_my_key", on_change=store_value)
```


If this is functionalized to work with multiple widgets, it could look something like this:

```
import streamlit as st
def store_value(key):
st.session_state[key] = st.session_state["_"+key]
def load_value(key):
st.session_state["_"+key] = st.session_state[key]
load_value("my_key")
st.number_input("Number of filters", key="_my_key", on_change=store_value, args=["my_key"])
```


Widget life cycle

When a widget command is called, Streamlit will check if it already has a widget with the same identity. Streamlit will reconnect if it thinks the widget already exists. Otherwise, it will make a new one.

As mentioned earlier, Streamlit determines a widget's identity differently based on if it has a key. The page name also factors into a widget's identity, where widget identites are not preserved between pages. On the other hand, callback functions, callback args and kwargs, label visibility, and disabling a widget never affect a widget's identity.

Calling a widget command when the widget doesn't already exist

If your script rerun calls a widget command with a changed identity or calls a widget command that wasn't used on the last script run:

- Streamlit will build the frontend and backend parts of the widget, using its default value.
- If the widget has been assigned a key, Streamlit will check if that key already exists in Session State.
a. If the key exists and
**isn't**associated to a widget with a different identity, Streamlit will assign that key's value to the widget. b. If the key exists and is associated to a widget with a different identity, Streamlit will overwrite the key-value pair with the default value. This is why writing to Session State before the widget command is important when[retaining statefulness across identity changes](/develop/concepts/architecture/widget-behavior#retain-statefulness-when-changing-a-widgets-identity). c. If the key doesn't exist, Streamlit will create a new key-value pair with the default value. - If there are args or kwargs for a callback function, they are evaluated and saved in memory.
- The widget value is then returned by the function.

For step 2, prior to v1.46.0, Streamlit would ignore the value in Session State if it came from an instance of the widget on another page. This is because a widget on another page necessarily has a different identity. As of v1.46.0, Streamlit deletes such values at the beginning of a script run on a new page.

Calling a widget command when the widget already exists

When rerunning a script without changing a widget's identity:

- Streamlit will connect to the existing frontend and backend parts.
- If the widget has a key that was deleted from
`st.session_state`

, then Streamlit will recreate the key using the current frontend value. This is because deleting a key from Session State will not revert the widget to a default value. - The widget command will return the current value of the widget.

Widget clean-up process

Streamlit cleans up widget data at the end of every script run and at the beginning of a script run on a new page.

When Streamlit gets to the end of a script run, it will delete the data for any widgets it has in memory that were not rendered on the screen. Most importantly, that means Streamlit will delete all key-value pairs in `st.session_state`

associated with a widget not currently on screen. When you switch pages, Streamlit will delete all data associated with widgets from the previous page.

Binding widgets to query parameters

As of v1.55.0, most widgets support a `bind`

parameter that syncs the widget's value with a URL query parameter. This makes it easy to create shareable URLs that preserve widget state and allow users to bookmark specific app configurations.

How binding works

To bind a widget to a query parameter, set `bind="query-params"`

and provide a `key`

. The key is used as the query parameter name in the URL.

```
import streamlit as st
st.selectbox("Color", ["Red", "Green", "Blue"], key="color", bind="query-params")
```


When a user selects "Green", the URL updates to include `?color=Green`

. If someone opens that URL, the selectbox initializes to "Green" instead of the default "Red".

Behavior details

**Default values keep URLs clean**: When a widget's value matches its default, the query parameter is removed from the URL.**Invalid values are ignored**: If the URL contains an invalid value for the widget, the value is ignored and removed from the URL.**Programmatic updates**: A bound query parameter can't be set or deleted through`st.query_params`

. To programmatically change a bound widget's value, use`st.session_state`

.**Range values**: Widgets that return a range, like range sliders, use repeated query parameters. For example, a slider with a range of 10 to 90 will produce a URL ending with`?price=10&price=90`

.

Trigger-like widgets (`st.button`

, `st.download_button`

, `st.chat_input`

, `st.file_uploader`

, `st.camera_input`

, and `st.audio_input`

) don't support binding because their values are transient.

Example: Filterable dashboard with a shareable URL

```
import streamlit as st
category = st.selectbox(
"Category",
["All", "Electronics", "Clothing", "Books"],
key="category",
bind="query-params",
)
price = st.slider(
"Max price",
0, 1000, 500,
key="max_price",
bind="query-params",
)
st.write(f"Showing {category} items under ${price}")
```


With this setup, a URL like `https://myapp.streamlit.app/?category=Electronics&max_price=200`

initializes the app with "Electronics" selected and the price slider set to 200. Sharing this URL gives others the exact same view.

Best practices and recommendations

For multipage apps

**Primary recommendation:** Use common widgets in the entrypoint file with [ st.navigation](/develop/api-reference/navigation/st.navigation) to bypass page identity issues entirely:

```
# streamlit_app.py (entrypoint)
import streamlit as st
# Common widgets that persist across all pages
user_name = st.sidebar.text_input("Name", key="global_name")
user_role = st.sidebar.selectbox("Role", ["User", "Admin"], key="global_role")
# Navigation
page = st.navigation([
st.Page("page1.py", title="Dashboard"),
st.Page("page2.py", title="Settings"),
])
page.run()
```


**Secondary recommendation:** For widgets that must be on individual pages, use the placeholder key pattern. See [Save widget values in Session State to preserve them between pages](/develop/concepts/architecture/widget-behavior#save-widget-values-in-session-state-to-preserve-them-between-pages) for more information.

For parameter changes

- Use keys when you need widgets to maintain state despite parameter changes.
- If you need to change a parameter that affects a widget's identity, use placeholder keys like you would for multipage apps,
or use a callback to directly maintain a widget's state. For more information, see
[Retain statefulness when changing a widget's identity](/develop/concepts/architecture/widget-behavior#retain-statefulness-when-changing-a-widgets-identity). - To force a widget to reset, update its key, or update a parameter without using a key.


*arrow_back*Previous: Fragments

*arrow_forward*Next: Multipage apps*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/develop/api-reference/media/st.image?utm_source=streamlit

| Function signature
|
|---|

st.image(image, caption=None, width="content", use_column_width=None, clamp=False, channels="RGB", output_format="auto", *, use_container_width=None, link=None)

image (numpy.ndarray, BytesIO, str, Path, or list of these)

The image to display. This can be one of the following:

- A URL (string) for a hosted image.
- A path to a local image file. The path can be a
`str`or`Path`object. Paths can be absolute or relative to the working directory (where you execute`streamlit run`). - An SVG string like
`<svg xmlns=...</svg>`. - A byte array defining an image. This includes monochrome images of shape (w,h) or (w,h,1), color images of shape (w,h,3), or RGBA images of shape (w,h,4), where w and h are the image width and height, respectively.
- A list of any of the above. Streamlit displays the list as a row of images that overflow to additional rows as needed.

caption (str or list of str)

Image caption(s). If this is `None` (default), no caption is
displayed. If `image` is a list of multiple images, `caption`
must be a list of captions (one caption for each image) or
`None`.

Captions can optionally contain GitHub-flavored Markdown. Syntax
information can be found at: [https://github.github.com/gfm](https://github.github.com/gfm).

See the `body` parameter of [ st.markdown](https://docs.streamlit.io/develop/api-reference/text/st.markdown) for additional,
supported Markdown directives.

width ("content", "stretch", or int)

The width of the image element. This can be one of the following:

`"content"`(default): The width of the element matches the width of its content, but doesn't exceed the width of the parent container.`"stretch"`: The width of the element matches the width of the parent container.- An integer specifying the width in pixels: The element has a fixed width. If the specified width is greater than the width of the parent container, the width of the element matches the width of the parent container.

When using an SVG image without a default width, use `"stretch"`
or an integer.

use_column_width ("auto", "always", "never", or bool)

*delete*

`use_column_width` is deprecated and will be removed in a future
release. Please use the `width` parameter instead.

If "auto", set the image's width to its natural size, but do not exceed the width of the column. If "always" or True, set the image's width to the column width. If "never" or False, set the image's width to its natural size. Note: if set, use_column_width takes precedence over the width parameter.

clamp (bool)

Whether to clamp image pixel values to a valid range (0-255 per
channel). This is only used for byte array images; the parameter is
ignored for image URLs and files. If this is `False` (default)
and an image has an out-of-range value, a `RuntimeError` will be
raised.

channels ("RGB" or "BGR")

The color format when `image` is an `nd.array`. This is ignored
for other image types. If this is `"RGB"` (default),
`image[:, :, 0]` is the red channel, `image[:, :, 1]` is the
green channel, and `image[:, :, 2]` is the blue channel. For
images coming from libraries like OpenCV, you should set this to
`"BGR"` instead.

output_format ("JPEG", "PNG", or "auto")

The output format to use when transferring the image data. If this
is `"auto"` (default), Streamlit identifies the compression type
based on the type and format of the image. Photos should use the
`"JPEG"` format for lossy compression while diagrams should use
the `"PNG"` format for lossless compression.

use_container_width (bool)

*delete*

`use_container_width` is deprecated and will be removed in a
future release. For `use_container_width=True`, use
`width="stretch"`. For `use_container_width=False`, use
`width="content"`.

Whether to override `width` with the width of the parent
container. If `use_container_width` is `False` (default),
Streamlit sets the image's width according to `width`. If
`use_container_width` is `True`, Streamlit sets the width of
the image to match the width of the parent container.

link (str or None)

The URL to open when a user clicks on the image. This can be an
external URL like `"https://streamlit.io"` or a relative path
like `"/my_page"`. If `link` is `None` (default), the
image will not include a hyperlink.

This parameter is only supported when displaying a single image.

#### Example

import streamlit as st st.image("sunrise.jpg", caption="Sunrise by the mountains")


*arrow_back*Previous: st.audio

*arrow_forward*Next: st.logo*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/develop/api-reference/navigation/st.page?utm_source=streamlit

st.Page

Configure a page for `st.navigation` in a multipage app.

Call `st.Page` to initialize a `StreamlitPage` object, and pass it to
`st.navigation` to declare a page in your app.

When a user navigates to a page, `st.navigation` returns the selected
`StreamlitPage` object. Call `.run()` on the returned `StreamlitPage`
object to execute the page. You can only run the page returned by
`st.navigation`, and you can only run it once per app rerun.

A page can be defined by a Python file or `Callable`.

| Function signature
|
|---|

st.Page(page, *, title=None, icon=None, url_path=None, default=False, visibility="visible")

page (str, Path, or callable)

The page source as a `Callable` or path to a Python file. If the page
source is defined by a Python file, the path can be a string or
`pathlib.Path` object. Paths can be absolute or relative to the
entrypoint file. If the page source is defined by a `Callable`, the
`Callable` can't accept arguments.

title (str or None)

The title of the page. If this is `None` (default), the page title
(in the browser tab) and label (in the navigation menu) will be
inferred from the filename or callable name in `page`. For more
information, see [Overview of multipage apps](https://docs.streamlit.io/st.page.automatic-page-labels).

The title supports GitHub-flavored Markdown of the following types: Bold, Italics, Strikethrough, Inline Code, and Images. Images display like icons, with a max height equal to the font height.

Unsupported Markdown elements are unwrapped so only their children (text contents) render. Common block-level Markdown (headings, lists, blockquotes) is automatically escaped and displays as literal text in labels.

See the `body` parameter of [ st.markdown](https://docs.streamlit.io/develop/api-reference/text/st.markdown) for additional, supported
Markdown directives.

icon (str or None)

An optional emoji or icon to display next to the page title and label.
If `icon` is `None` (default), no icon is displayed next to the
page label in the navigation menu, and a Streamlit icon is displayed
next to the title (in the browser tab). If `icon` is a string, the
following options are valid:

- A single-character emoji. For example, you can set
`icon="🚨"` or

`icon="🔥"`. Emoji short codes are not supported.

- A single-character emoji. For example, you can set
- An icon from the Material Symbols library (rounded style) in the
format

`":material/icon_name:"`where "icon_name" is the name of the icon in snake case.For example,

`icon=":material/thumb_up:"`will display the Thumb Up icon. Find additional icons in the[Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Rounded)font library.

`"spinner"`: Displays a spinner as an icon. In this case, the spinner only displays next to the page label in the navigation menu. The spinner isn't used as the page favicon next to the title in the browser tab. The favicon is the default Streamlit icon unless otherwise specified with the`page_icon`parameter of`st.set_page_config`.

url_path (str or None)

The page's URL pathname, which is the path relative to the app's root
URL. If this is `None` (default), the URL pathname will be inferred
from the filename or callable name in `page`. For more information,
see [Overview of multipage apps](https://docs.streamlit.io/st.page.automatic-page-urls).

The default page will have a pathname of `""`, indicating the root
URL of the app. If you set `default=True`, `url_path` is ignored.
`url_path` can't include forward slashes; paths can't include
subdirectories.

default (bool)

Whether this page is the default page to be shown when the app is
loaded. If `default` is `False` (default), the page will have a
nonempty URL pathname. However, if no default page is passed to
`st.navigation` and this is the first page, this page will become the
default page. If `default` is `True`, then the page will have
an empty pathname and `url_path` will be ignored.

visibility ("visible" or "hidden")

Whether the page is shown in the navigation menu. If this is
`"visible"` (default), the page appears in the navigation menu. If
this is `"hidden"`, the page is excluded from the navigation menu but
remains accessible via direct URL, `st.page_link`, or
`st.switch_page`.

Note

Navigating to a page by URL starts a new session. For a
hidden page to be accessible by URL, it must be passed to
`st.navigation` during the new session's initial script
run.

(StreamlitPage)

The page object associated to the given script.

#### Example

import streamlit as st def page2(): st.title("Second page") pg = st.navigation([ st.Page("page1.py", title="First page", icon="🔥"), st.Page(page2, title="Second page", icon=":material/favorite:"), ]) pg.run()

StreamlitPage

A page within a multipage Streamlit app.

Use `st.Page` to initialize a `StreamlitPage` object.

| Class description
|
|---|

StreamlitPage(page, *, title=None, icon=None, url_path=None, default=False, visibility="visible")

[run](/develop/api-reference/navigation/st.page#stpagerun)()

Execute the page.

icon (str)

The icon of the page.

If no icon was declared in `st.Page`, this property returns `""`.

title (str)

The title of the page.

Unless declared otherwise in `st.Page`, the page title is inferred
from the filename or callable name. For more information, see
[Overview of multipage apps](https://docs.streamlit.io/st.page.automatic-page-labels).

The title supports GitHub-flavored Markdown as described in `st.Page`.

url_path (str)

The page's URL pathname, which is the path relative to the app's root URL.

Unless declared otherwise in `st.Page`, the URL pathname is inferred
from the filename or callable name. For more information, see
[Overview of multipage apps](https://docs.streamlit.io/st.page.automatic-page-urls).

The default page will always have a `url_path` of `""` to indicate
the root URL (e.g. homepage).

visibility (Literal["visible", "hidden"])

Whether the page is shown in the navigation menu. If this is
`"visible"` (default), the page appears in the navigation menu. If
this is `"hidden"`, the page is excluded from the navigation menu but
remains accessible via direct URL, `st.page_link`, or
`st.switch_page`.

Note

Navigating to a page by URL starts a new session. For a
hidden page to be accessible by URL, it must be passed to
`st.navigation` during the new session's initial script
run.

StreamlitPage.run

Execute the page.

When a page is returned by `st.navigation`, use the `.run()` method
within your entrypoint file to render the page. You can only call this
method on the page returned by `st.navigation`. You can only call
this method once per run of your entrypoint file.

| Function signature
|
|---|

StreamlitPage.run()


*arrow_back*Previous: st.navigation

*arrow_forward*Next: st.page_link*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/develop/api-reference/text/st.markdown?utm_source=streamlit

| Function signature
|
|---|

st.markdown(body, unsafe_allow_html=False, *, help=None, width="auto", text_alignment="left")

body (any)

The text to display as GitHub-flavored Markdown. Syntax
information can be found at: [https://github.github.com/gfm](https://github.github.com/gfm).
If anything other than a string is passed, it will be converted
into a string behind the scenes using `str(body)`.

This also supports:

Emoji shortcodes, such as

`:+1:`and`:sunglasses:`. For a list of all supported codes, see[https://share.streamlit.io/streamlit/emoji-shortcodes](https://share.streamlit.io/streamlit/emoji-shortcodes).Streamlit logo shortcode. Use

`:streamlit:`to add a little Streamlit flair to your text.A limited set of typographical symbols.

`"<- -> <-> -- >= <= ~="`becomes "← → ↔ — ≥ ≤ ≈" when parsed as Markdown.Google Material Symbols (rounded style), using the syntax

`:material/icon_name:`, where "icon_name" is the name of the icon in snake case. For a complete list of icons, see Google's[Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Rounded)font library.LaTeX expressions, by wrapping them in "$" or "$$" (the "$$" must be on their own lines). Supported LaTeX functions are listed at

[https://katex.org/docs/supported.html](https://katex.org/docs/supported.html).Colored text and background colors for text. There are two ways to apply colors:

Streamlit color palette: Use the syntax

`:color[your text]`and`:color-background[your text]`, where`color`is one of: red, orange, yellow, green, blue, violet, gray, grey, rainbow, or primary. For example,`:orange[your text]`or`:blue-background[your text]`. If you use "primary", Streamlit will use the default primary accent color unless you set the`theme.primaryColor`configuration option.Custom CSS colors: Use the syntax

`:color[your text]{foreground="..." background="..."}`with a valid CSS color value. Both`foreground`and`background`are optional. Supported formats include named CSS colors, HEX, RGB(A), and HSL(A). For example,`:color[warning]{foreground="#d50000"}`or`:color[note]{foreground="rgb(0,100,200)" background="hsl(60,100%,90%)"}`.Note

When using

`:color[...]{}`with custom CSS colors, a named color like`"red"`refers to the standard CSS named color, not the Streamlit palette color. RGB and HSL values must use comma-separated syntax; the modern space-separated syntax isn't supported. Colors are parsed by[color2k](https://color2k.com).

Colored badges, using the syntax

`:color-badge[text in the badge]`.`color`must be replaced with any of the following supported colors: red, orange, yellow, green, blue, violet, gray/grey, or primary. For example, you can use`:orange-badge[your text here]`or`:blue-badge[your text here]`.Small text, using the syntax

`:small[text to show small]`.

unsafe_allow_html (bool)

Whether to render HTML within `body`. If this is `False`
(default), any HTML tags found in `body` will be escaped and
therefore treated as raw text. If this is `True`, any HTML
expressions within `body` will be rendered.

Adding custom HTML to your app impacts safety, styling, and maintainability.

Note

If you only want to insert HTML or CSS without Markdown text,
we recommend using `st.html` instead.

help (str or None)

A tooltip that gets displayed next to the Markdown. If this is
`None` (default), no tooltip is displayed.

The tooltip can optionally contain GitHub-flavored Markdown,
including the Markdown directives described in the `body`
parameter of `st.markdown`.

width ("auto", "stretch", "content", or int)

The width of the Markdown element. This can be one of the following:

`"auto"`(default): The width of the element adapts based on the container flex layout. In vertical containers, the element uses`"stretch"`width. In horizontal containers, the element uses`"content"`width.`"stretch"`: The width of the element matches the width of the parent container.`"content"`: The width of the element matches the width of its content, but doesn't exceed the width of the parent container.- An integer specifying the width in pixels: The element has a fixed width. If the specified width is greater than the width of the parent container, the width of the element matches the width of the parent container.

text_alignment ("left", "center", "right", or "justify")

The horizontal alignment of the text within the element. This can be one of the following:

`"left"`(default): Text is aligned to the left edge.`"center"`: Text is centered.`"right"`: Text is aligned to the right edge.`"justify"`: Text is justified (stretched to fill the available width with the last line left-aligned).

Note

For text alignment to have a visible effect, the element's
width must be wider than its content. If you use
`width="content"` with short text, the alignment may not be
noticeable.

#### Examples

import streamlit as st st.markdown("*Streamlit* is **really** ***cool***.") st.markdown(''' :red[Streamlit] :orange[can] :green[write] :blue[text] :violet[in] :gray[pretty] :rainbow[colors] and :blue-background[highlight] text.''') st.markdown("Here's a bouquet —\ :tulip::cherry_blossom::rose::hibiscus::sunflower::blossom:") multi = '''If you end a line with two spaces, a soft return is used for the next line. Two (or more) newline characters in a row will result in a hard return. ''' st.markdown(multi)

```
import streamlit as st
md = st.text_area('Type in your markdown string (without outer quotes)',
"Happy Streamlit-ing! :balloon:")
st.code(f"""
import streamlit as st
st.markdown('''{md}''')
""")
st.markdown(md)
```



*arrow_back*Previous: st.subheader

*arrow_forward*Next: st.badge*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.

---

## Source: https://docs.streamlit.io/develop/api-reference/data/st.metric?utm_source=streamlit

| Function signature
|
|---|

st.metric(label, value, delta=None, delta_color="normal", *, help=None, label_visibility="visible", border=False, width="stretch", height="content", chart_data=None, chart_type="line", delta_arrow="auto", format=None, delta_description=None)

label (str)

The header or title for the metric. The label can optionally contain GitHub-flavored Markdown of the following types: Bold, Italics, Strikethroughs, Inline Code, Links, and Images. Images display like icons, with a max height equal to the font height.

Unsupported Markdown elements are unwrapped so only their children (text contents) render. Common block-level Markdown (headings, lists, blockquotes) is automatically escaped and displays as literal text in labels.

See the `body` parameter of [ st.markdown](https://docs.streamlit.io/develop/api-reference/text/st.markdown) for additional,
supported Markdown directives.

value (int, float, decimal.Decimal, str, or None)

Value of the metric. `None` is rendered as a long dash.

The value can optionally contain GitHub-flavored Markdown, subject
to the same limitations described in the `label` parameter.

delta (int, float, decimal.Decimal, str, or None)

Amount or indicator of change in the metric. An arrow is shown next to the delta, oriented according to its sign:

- If the delta is
`None`or an empty string, no arrow is shown. - If the delta is a negative number or starts with a minus sign, the arrow points down and the delta is red.
- Otherwise, the arrow points up and the delta is green.

You can modify the display, color, and orientation of the arrow
using the `delta_color` and `delta_arrow` parameters.

The delta can optionally contain GitHub-flavored Markdown, subject
to the same limitations described in the `label` parameter.

delta_color (str)

The color of the delta and chart. This can be one of the following:

`"normal"`(default): The color is red when the delta is negative and green otherwise.`"inverse"`: The color is green when the delta is negative and red otherwise. This is useful when a negative change is considered good, like a decrease in cost.`"off"`: The color is gray regardless of the delta.- A named color from the basic palette: The chart and delta are the
specified color regardless of their value. This can be one of the
following:
`"red"`,`"orange"`,`"yellow"`,`"green"`,`"blue"`,`"violet"`,`"gray"`/`"grey"`, or`"primary"`.

help (str or None)

A tooltip that gets displayed next to the metric label. Streamlit
only displays the tooltip when `label_visibility="visible"`. If
this is `None` (default), no tooltip is displayed.

The tooltip can optionally contain GitHub-flavored Markdown,
including the Markdown directives described in the `body`
parameter of `st.markdown`.

label_visibility ("visible", "hidden", or "collapsed")

The visibility of the label. The default is `"visible"`. If this
is `"hidden"`, Streamlit displays an empty spacer instead of the
label, which can help keep the widget aligned with other widgets.
If this is `"collapsed"`, Streamlit displays no label or spacer.

border (bool)

Whether to show a border around the metric container. If this is
`False` (default), no border is shown. If this is `True`, a
border is shown.

height ("content", "stretch", or int)

The height of the metric element. This can be one of the following:

`"content"`(default): The height of the element matches the height of its content.`"stretch"`: The height of the element matches the height of its content or the height of the parent container, whichever is larger. If the element is not in a parent container, the height of the element matches the height of its content.- An integer specifying the height in pixels: The element has a fixed height. If the content is larger than the specified height, scrolling is enabled.

width ("stretch", "content", or int)

The width of the metric element. This can be one of the following:

`"stretch"`(default): The width of the element matches the width of the parent container.`"content"`: The width of the element matches the width of its content, but doesn't exceed the width of the parent container.- An integer specifying the width in pixels: The element has a fixed width. If the specified width is greater than the width of the parent container, the width of the element matches the width of the parent container.

chart_data (Iterable or None)

A sequence of numeric values to display as a sparkline chart. If
this is `None` (default), no chart is displayed. The sequence can
be anything supported by `st.dataframe`, including a `list` or
`set`. If the sequence is dataframe-like, the first column will
be used. Each value will be cast to `float` internally by
default.

The chart uses the color of the delta indicator, which can be
modified using the `delta_color` parameter.

chart_type ("line", "bar", or "area")

The type of sparkline chart to display. This can be one of the following:

`"line"`(default): A simple sparkline.`"area"`: A sparkline with area shading.`"bar"`: A bar chart.

delta_arrow ("auto", "up", "down", or "off")

Controls the direction of the delta indicator arrow. This can be one of the following strings:

`"auto"`(default): The arrow direction follows the sign of`delta`.`"up"`or`"down"`: The arrow is forced to point in the specified direction.`"off"`: No arrow is shown, but the delta value remains visible.

format (str or None)

A format string controlling how numbers are displayed for `value`
and `delta`. The format is only applied if the value or delta is
numeric. If the value or delta is a string with non-numeric
characters, the format is ignored. The format can be one of the
following values:

`None`(default): No formatting is applied.`"plain"`: Show the full number without any formatting (e.g. "1234.567").`"localized"`: Show the number in the default locale format (e.g. "1,234.567").`"percent"`: Show the number as a percentage (e.g. "123456.70%").`"dollar"`: Show the number as a dollar amount (e.g. "$1,234.57").`"euro"`: Show the number as a euro amount (e.g. "€1,234.57").`"yen"`: Show the number as a yen amount (e.g. "¥1,235").`"accounting"`: Show the number in an accounting format (e.g. "1,234.00").`"bytes"`: Show the number in a byte format (e.g. "1.2KB").`"compact"`: Show the number in a compact format (e.g. "1.2K").`"scientific"`: Show the number in scientific notation (e.g. "1.235E3").`"engineering"`: Show the number in engineering notation (e.g. "1.235E3").- printf-style format string: Format the number with a printf
specifier, like
`"%d"`to show a signed integer (e.g. "1234") or`"%.2f"`to show a float with 2 decimal places. Use`,`for thousand separators (e.g.`"%,d"`yields`"1,234"`).

delta_description (str or None)

A short description displayed next to the delta value, such as
`"month over month"` or `"vs. last quarter"`. If this is `None`
(default), no description is shown. The description is displayed
in a smaller, muted font style similar to `st.caption`.

#### Examples


Example 1: Show a metricimport streamlit as st st.metric(label="Temperature", value="70 °F", delta="1.2 °F")

Example 2: Create a row of metrics

st.metriclooks especially nice in combination withst.columns.import streamlit as st col1, col2, col3 = st.columns(3) col1.metric("Temperature", "70 °F", "1.2 °F") col2.metric("Wind", "9 mph", "-8%") col3.metric("Humidity", "86%", "4%")

Example 3: Modify the delta indicatorThe delta indicator color can also be inverted or turned off.

import streamlit as st st.metric( label="Gas price", value=4, delta=-0.5, delta_color="inverse" ) st.metric( label="Active developers", value=123, delta=123, delta_color="off", )

Example 4: Create a grid of metric cardsAdd borders to your metrics to create a dashboard look.

import streamlit as st a, b = st.columns(2) c, d = st.columns(2) a.metric("Temperature", "30°F", "-9°F", border=True) b.metric("Wind", "4 mph", "2 mph", border=True) c.metric("Humidity", "77%", "5%", border=True) d.metric("Pressure", "30.34 inHg", "-2 inHg", border=True)

Example 5: Show sparklinesTo show trends over time, add sparklines.

import streamlit as st from numpy.random import default_rng as rng changes = list(rng(4).standard_normal(20)) data = [sum(changes[:i]) for i in range(20)] delta = round(data[-1], 2) row = st.container(horizontal=True) with row: st.metric( "Line", 10, delta, chart_data=data, chart_type="line", border=True ) st.metric( "Area", 10, delta, chart_data=data, chart_type="area", border=True ) st.metric( "Bar", 10, delta, chart_data=data, chart_type="bar", border=True )


*arrow_back*Previous: st.table

*arrow_forward*Next: st.json*forum*

### Still have questions?

Our [forums](https://discuss.streamlit.io) are full of helpful information and Streamlit experts.