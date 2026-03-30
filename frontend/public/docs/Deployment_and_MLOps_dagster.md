# Dagster Documentation
> Scraped on: 2026-03-30 | Root Source: [https://dagster.io/docs](https://dagster.io/docs)



---

## Source: https://dagster.io/docs

# Welcome to Dagster

Dagster is a data orchestrator built for data engineers, with integrated lineage, observability, a declarative programming model, and best-in-class testability.

defs/assets.py

`import dagster as dg`



@dg.asset

def hello(context: dg.AssetExecutionContext):

context.log.info("Hello!")



@dg.asset(deps=[hello])

def world(context: dg.AssetExecutionContext):

context.log.info("World!")




## Get started[](#get-started)


## Quickstart

Build your first Dagster pipeline in our Quickstart tutorial.


## Thinking in Assets

New to Dagster? Learn about how thinking in assets can help you manage your data better.


## Dagster Plus

Learn about Dagster Plus, our managed offering that includes a hosted Dagster instance and many more features.

## Join the Dagster community[](#join-the-dagster-community)


## Slack

Join our Slack community to talk with other Dagster users, use our AI-powered chatbot, and get help with Dagster.


## GitHub

Star our GitHub repository and follow our development through GitHub Discussions.


## YouTube

Watch our latest videos on YouTube.


## Dagster University

Learn Dagster through interactive courses and hands-on tutorials.

---

## Source: https://dagster.io/

# Your platform for AI and data pipelines.

Dagster is a unified control plane for teams to build, scale, and observe their AI & data pipelines with confidence.

## Trusted by teams building modern data platforms, worldwide

## Battle tested data orchestration

A unified platform built to run your most critical data flows, from pipelines and transformations to full-scale AI and ML operations.

### ETL & ELT Pipelines

Build reliable pipelines to move data from SaaS apps and APIs to warehouses like Snowflake or BigQuery.

### Data Transformation

Orchestrate dbt, Databricks, or Python transformations to produce clean, modeled data that powers analytics and BI.

### AI & ML Workflows

Accelerate ML development with pipelines that streamline data prep, model training, and experiment tracking.

## Integrated observability

See everything, catch issues fast, and keep your data trusted with built-in lineage, alerting, and real-time health metrics.

### Data Catalog & Lineage

Empower teams to discover and understand datasets with clear ownership, lineage, and auto-generated documentation that stays current.

### Monitoring & Alerting

Stay ahead of data incidents with intelligent alerts in Slack, and streamlined resolution workflows with AI-powered debugging and impact analysis.

### Realtime Health Metrics

Track freshness, performance, costs, and reliability to keep pipelines healthy and stakeholders confident in their data.

**Activate your data with Compass**

Turn warehouse data into instant, trustworthy answers for every stakeholder, right inside the tools they already use.

**Data-driven Decisions in Seconds**

Give your stakeholders instant access to business insights inside the tools they already use, without waiting for reports or dashboards.

### Unlock the Power of Your Warehouse

Compass understands your unique business context and answers common business questions with real data from your warehouse.

### Governed by the Data Team

Your analysts and data engineers guide Compass behind the scenes with GitOps — so answers stay trustworthy.

## Enterprise ready

### Roles & permissions

We offer SSO, RBAC and SCIM provisioning, with support for Google, Github and SAML IdPs.

### SOC 2 Type II, HIPAA and beyond

We’re independently audited and aligned with the standards that matter most.

### Flexible deployment options

Run Dagster on your cloud or ours, with supprt for North American and European regions.

### Multi-tenant instances

Keep your code and data isolated with multi-tenant code deployments.

### Audit logs and retention policies

Track all activity and changes made to the system with a unified view of all user actions.

### Enterprise support

Get dedicated support from our team of Dagster experts.

## Ship data and AI products faster.

Automate, monitor, and optimize your data pipelines with ease. Get started today with a free trial or book a demo to see Dagster in action.

[Try Dagster+](https://dagster.plus/signup)

## Trusted by data teams.

Built for scale.

Ready for you.

“Dagster has been instrumental in empowering our development team to deliver insights at 20x the velocity compared to the past. From Idea inception to Insight is down to 2 days vs 6+ months before.”

“Somebody magically built the thing I had been envisioning and wanted, and now it's there and I can use it.”

"We would not exist today as a company if we didn't move to a single unified codebase, with a real data platform beneath it."

"Dagster is easy to use, it's ELT friendly, can integrate with the main modern tools out of box and allows you to automate whatever you want wherever it is."

---

## Source: https://dagster.io/integrations

# Connect to everything in your data ecosystem

Dagster integrates with every major tool in the modern data and AI stack—so your orchestrator isn’t the blocker, it’s the bridge.

[Explore Integrations](#integration-list)

## Explore Integrations

Explore docs, guides, and examples for Dagster’s integrations—spanning orchestration, ingestion, storage, transformation, and beyond.


### Airbyte

Orchestrate Airbyte connections and schedule syncs alongside upstream or downstream dependencies.

All integrations

ETL / Reverse ETL


### Anthropic

Integrate Anthropic's Claude AI models into your Dagster pipelines for advanced conversational AI capabilities.

All integrations

Other


### Apache Airflow

Accelerate the migration of Airflow DAGs to Dagster assets with opinionated tooling.

All integrations

Other


### AWS Athena

This integration allows you to connect to AWS Athena and analyze data in Amazon S3 using standard SQL within your Dagster pipelines.

All integrations

Storage


### AWS CloudWatch

This integration allows you to send Dagster logs to AWS CloudWatch, enabling centralized logging and monitoring of your Dagster jobs.

All integrations

Logging & Monitoring


### AWS ECR

This integration allows you to connect to AWS Elastic Container Registry (ECR), enabling you to manage your container images more effectively in your Dagster pipelines.

All integrations

Other


### AWS EMR

The AWS EMR integration allows you to seamlessly integrate AWS EMR into your Dagster pipelines for petabyte-scale data processing using open-source tools like Apache Spark, Hive, Presto, and more.

All integrations

Compute


### AWS Glue

The AWS Glue integration enables you to initiate AWS Glue jobs directly from Dagster, seamlessly pass parameters to your code, and stream logs and structured messages back into Dagster.

All integrations

Compute


### AWS Lambda

Using the AWS Lambda integration with Dagster, you can leverage serverless functions to execute external code in your pipelines.

All integrations

Compute


### AWS Redshift

Using this integration, you can seamlessly integrate AWS Redshift into your Dagster workflows, leveraging Redshift’s data warehousing capabilities for your data pipelines.

All integrations

Storage


### AWS S3

The AWS S3 integration allows data engineers to easily read and write objects to the durable AWS S3 storage, enabling engineers to have a resilient storage layer when constructing their pipelines.

All integrations

Storage


### AWS Secrets Manager

This integration allows you to manage, retrieve, and rotate credentials, API keys, and other secrets using AWS Secrets Manager.

All integrations

Other


### Azure Data Lake Storage Gen 2 (ADLS2)

Get utilities for ADLS2 and Blob Storage.

All integrations

Storage


### Bash / Shell

Execute a Bash/shell command, directly or as a read from a script file.

All integrations

Compute


### Census

Trigger Census synchs from within your Dagster pipelines.

All integrations

ETL / Reverse ETL


### Cube

Push changes from upstream data sources to Cube's semantic layer.

All integrations

Other


### Databricks

The Databricks integration enables you to initiate Databricks jobs directly from Dagster, seamlessly pass parameters to your code, and stream logs and structured messages back into Dagster.

All integrations

Compute


### Datadog

Publish metrics to Datadog from within Dagster ops and entralize your monitoring metrics.

All integrations

Logging & Monitoring


### dbt Cloud

Run dbt Cloud™ jobs as part of your data pipeline.

All integrations

ETL / Reverse ETL


### dbt™

Put your dbt transformations to work, directly from within Dagster.

All integrations

ETL / Reverse ETL


### Delta Lake

Integrate your pipelines into Delta Lake.

All integrations

Storage


### dlt

Easily ingest and replicate data between systems with dlt through Dagster.

All integrations

ETL / Reverse ETL


### Docker

Run runs external processes in docker containers directly from Dagster.

All integrations

Compute


### DuckDB

Read and write natively to DuckDB from Software Defined Assets.

All integrations

Storage


### Fivetran

Orchestrate Fivetran connectors and schedule syncs with upstream or downstream dependencies.

All integrations

ETL / Reverse ETL


### GCP BigQuery

Integrate with GCP BigQuery.

All integrations

Storage


### GCP Dataproc

Integrate with GCP Dataproc.

All integrations

Compute


### GCP GCS

Integrate with GCP GCS.

All integrations

Storage


### Gemini

Integrate Google's Gemini AI models into your Dagster pipelines for advanced AI capabilities.

All integrations

Other


### Github

Integrate with GitHub Apps and automate operations within your github repositories.

All integrations

Other


### Great Expectations

Yield an expectation and its output with all relevant metadata.

All integrations

Other


### Hashicorp Vault

Centrally manage credentials and certificates, then use them in your pipelines.

All integrations

Other


### Hex

Work in Hex, then pull Hex apps in to your pipeline as Software Defined Assets.

All integrations


### Hightouch

Trigger syncs and monitor them until they complete.

All integrations

ETL / Reverse ETL


### Jupyter

Dagstermill eliminates the tedious "productionization" of Jupyter notebooks.

All integrations

Compute


### Kubernetes

Launch Kubernetes pods and execute external code directly from Dagster.

All integrations

Compute


### lakeFS

lakeFS provides version control and complete lineage over the data lake.

All integrations

Storage


### Looker

The Looker integration allows you to monitor your Looker instance as assets in Dagster, along with other data assets.

All integrations

Business Intelligence


### Meltano

Tap into open source configurable ETL+ and the Singer integration library.

All integrations

ETL / Reverse ETL


### Microsoft SharePoint

Connect Dagster with Microsoft SharePoint document libraries using the Graph API. Enable automated file operations, folder management, and data extraction from SharePoint.

All integrations

Storage


### Microsoft Teams

Keep your team up to speed with Teams messages.

All integrations

Alerting


### MLflow

Streamline the process of productionizing, maintaining and monitoring machine learning models.

All integrations


### Modal

Run serverless Python functions at scale with Modal directly from your Dagster pipelines.

All integrations

Compute


### Open Metadata

Configure and schedule Dagster metadata and profiler workflows from the OpenMetadata UI.

All integrations

Metadata & Data Quality


### OpenAI

Integrate OpenAI calls into your Dagster pipelines, without breaking the bank.

All integrations

Other


### Pagerduty

Centralize your monitoring with the dagster-pagerduty integration.

All integrations

Alerting


### Pandas

Implement validation on pandas DataFrames.

All integrations

Metadata & Data Quality


### Pandera

Generate Dagster Types from Pandera dataframe schemas.

All integrations

Metadata & Data Quality


### Polars

Use Polars eager or lazy DataFrames as inputs and outputs in your Dagster assets and ops.

All integrations

Metadata & Data Quality


### Power BI

The Power BI integration allows you to monitor your Power BI workspace as assets in Dagster, along with other data assets.

All integrations

Business Intelligence


### Prometheus

Integrate with Prometheus via the prometheus_client library.

All integrations

Logging & Monitoring


### Ray

Scale your Python workloads with Ray's distributed computing framework directly from Dagster.

All integrations

Compute


### Salesforce

Integrate Salesforce CRM data into your Dagster pipelines. Query records, perform bulk operations, and sync customer data with support for multiple authentication methods.

All integrations

Other


### SDF

Put your SDF transformations to work, directly from within Dagster.

All integrations

ETL / Reverse ETL


### Secoda

Help your team understand metadata from Dagster by adding context in Secoda.

All integrations

Metadata & Data Quality


### SFTP

High-performance secure file transfer integration with support for parallel transfers, batch operations, and advanced filtering. Built on asyncSSH for optimal performance.

All integrations

Storage


### Sigma

The Sigma integration allows you to monitor your Sigma organization as assets in Dagster, along with other data assets.

All integrations

Business Intelligence


### Slack

Up your notification game and keep stakeholders in the loop.

All integrations

Alerting


### Sling

Extract and load data from popular data sources to destinations with Sling through Dagster.

All integrations

ETL / Reverse ETL


### SLURM

Bridge high-performance computing with modern data orchestration. Run Dagster assets seamlessly across laptops, CI pipelines, and supercomputers with full observability.

All integrations

Compute


### Snowflake

An integration with the Snowflake AI Data Cloud. Read and write natively to Snowflake from Software Defined Assets.

All integrations

Storage


### Spark

Configure and run Spark jobs.

All integrations

Compute


### SSH/SFTP

Establish encrypted connections to networked resources.

All integrations

Other


### Tableau

The Tableau integration allows you to monitor your Tableau workspace as assets in Dagster, along with other data assets.

All integrations

Business Intelligence


### Twilio

Integrate Twilio tasks into your data pipeline runs.

All integrations

Alerting


### Weights & Biases

Orchestrate your MLOps pipelines and maintain ML assets.

All integrations

Other

## Start Your Data Journey Today

Unlock the power of data orchestration with our demo or explore the open-source version.

---

## Source: https://legacy-docs.dagster.io

Dagster is an orchestrator that's designed for developing and maintaining data assets, such as tables, data sets, machine learning models, and reports.

You declare functions that you want to run and the data assets that those functions produce or update. Dagster then helps you run your functions at the right time and keep your assets up-to-date.

Dagster is designed to be used at every stage of the data development lifecycle, including local development, unit tests, integration tests, staging environments, and production.

**New to Dagster**? Check out the **Quickstart**, learn with some hands-on **Tutorials**, or dive into **Concepts**. For an in-depth learning experience, enroll in **Dagster University**.

**Questions? Interested in seeing some community contributions, or contributing yourself?** [Check out the Dagster community](https://dagster.io/community)!

Use one of our examples to explore Dagster concepts, integrations, and realistic projects.

---

## Source: https://dagster.io/blog/python-packages-primer-1

### The foundation of a solid Python project is mastering modules, packages and imports.

The following article is part of a series on Python for data engineering aimed at helping data engineers, data scientists, data analysts, Machine Learning engineers, or others who are new to Python master the basics. To date this beginners guide consists of:


, explored the basics of Python modules, Python packages and how to import modules into your own projects.**Part 1: Python Packages: a Primer for Data People (part 1 of 2)**, covered dependency management and virtual environments.**Part 2: Python Packages: a Primer for Data People (part 2 of 2)**, covered 9 best practices and examples on structuring your projects.**Part 3: Best Practices in Structuring Python Projects**, we explore setting up a Dagster project, and the key concept of Data Assets.**Part 4: From Python Projects to Dagster Pipelines**, we cover the importance of environment variables and how to use them.**Part 5: Environment Variables in Python**, or how type hints reduce errors.**Part 6: Type Hinting**, or learning design patterns, which are reusable solutions to common problems in software design.**Part 7: Factory Patterns**a design pattern frequently used in ETL to ensure data quality and reliability.**Part 8: Write-Audit-Publish in data pipelines**, learn to automate data pipelines and deployments with Git.**Part 9: CI/CD and Data Pipeline Automation (with Git)**, learn how to code data pipelines in Python for performance.**Part 10: High-performance Python for Data Engineering**, in which we explore the sharp edges of Python’s system of imports, modules, and packages.**Part 11: Breaking Packages in Python**

[ Sign up for our newsletter](/newsletter-signup) to get all the updates! And if you enjoyed this guide check out our

[, complete with Python code examples.](/glossary)

**data engineering glossary**

Dagster runs on Python, and most data engineers or developers with a basic grasp of Python can get simple pipelines up and running rapidly. But some users who are less familiar with Python find Python packages to be a bit of a headache.

So let’s talk about what Python packages are and how to use them. We’ll cover specific topics that will help you understand what’s involved in structuring a Python project, and how this translates to more complex builds such as data pipelines and orchestrators. In later articles we will see how these concepts apply to Dagster.

If you’ve only worked on existing codebases or a [Jupyter notebook](https://docs.jupyter.org/en/latest/), it can be pretty overwhelming to package code from scratch. What is an `__init__.py`

file and when should you use it? What are relative vs. absolute imports? Let’s dive in!

## Table of Contents

[What are Python packages?](/blog/python-packages-primer-1#)[Starting with modules](/blog/python-packages-primer-1#)[From modules to packages](/blog/python-packages-primer-1#)[What is __init__.py?](/blog/python-packages-primer-1#)[How do you manage packages in Python?](/blog/python-packages-primer-1#)[How does pip work?](/blog/python-packages-primer-1#)[What are relative vs. absolute imports?](/blog/python-packages-primer-1#)

## What are Python packages?

We put our Python code into packages as it makes it easy to share and reuse code in the Python community. A package is simply a collection of files and directories that include the code, documentation, and other necessary files that we will examine later.

We use Python packages instead of script files and Jupyter notebooks when we want to reuse complex code. With script files, code can become cluttered and difficult to maintain, while notebooks are often used for exploratory work but are not easily reusable.

You can think of a Python package as a standalone “project”. A project can contain multiple modules, each of which contains a specific set of related functions and variables. Hence, this makes it easier for you to embed tools from “projects” you need within your own code.

## Starting with modules

**Modules** are the building blocks of Python packages. A module is a single Python file that contains definitions and statements. They provide a way to structure your code into logical units and reuse code across multiple projects.


To use a module in your code, you use the import statement. For example, if you have a module called `mymodule.py`

, you can use its functions and variables in your code with the following import statement:

`import mymodule`


Once you have imported a module, you can access its functions and variables using the dot (`.`

) notation. For example, if the mymodule.py file has a function called `greet`

, you can use it in your code as follows:

```
import mymodule
mymodule.greet("John")
```


Let's create our own example module to illustrate the concept. Create a file called `examplemodule.py`

and add the following code to it:

```
def greet(name):
print("Hello, " + name + "!")
def add(a, b):
return a + b
```


Here, we defined two functions, `greet`

and `add`

, in the `examplemodule.py`

file. These functions can now be imported and used in other parts of your code.

## From modules to packages

As your code grows, it can become difficult to manage and maintain all the code in a single module. **Packages** provide a way to organize and split your code into multiple modules, while still keeping everything organized and accessible.

To create a package, simply create a directory and place one or more modules in it. The directory should contain a special file called `__init__.py`

, which tells Python that this directory is a package and should be treated as such. The `__init__.py`

file can be left empty or it can contain code that will be executed when the package is imported. We explain `__init__.py`

files in more detail below.

Let's refactor the example module from the previous section to be a package. Create a directory called `examplepackage`

and move the `examplemodule.py`

file into it. Then, create a file called `__init__.py`

in the `examplepackage`

directory.


Your file structure should now look like this:

```
examplepackage/
__init__.py
examplemodule.py
```


You can now import the functions from the ** examplemodule.py** file in your code as follows:

```
import examplepackage.examplemodule
examplepackage.examplemodule.greet("John")
examplepackage.examplemodule.add(1, 2)
```


In this example, we have refactored the `examplemodule.py`

file into a package called `examplepackage`

. The functions from the `examplemodule.py`

file can now be imported and used in your code as before, but with the added benefits of organization and modularity provided by packages.

## What is __init__.py?

`__init__.py`

is a special file in Python packages that serves as an entry point for the package. It is executed when the package is imported, and its code can be used to initialize the package or set up any necessary components. The file is optional, but is often used to define the public interface of the package, making it easier for other developers to understand and use the package.

In previous versions of Python, `__init__.py`

was required for a directory to be recognized as a package. However, as of Python 3.3, `__init__.py`

is optional due to the introduction of PEP 420, which allows for packages to be defined without an `__init__.py`

file.

Here's an example of how you could use `__init__.py`

in a package:

```
### examplepackage/__init__.py
from .examplemodule import greet, add
__all__ = [
'greet',
'add',
]
```


In this example, the ** __init__.py** file imports the

**and**

`greet`

**functions from the**

`add`

**file and makes them part of the public interface of the package. The**

`examplemodule.py`

**variable is used to define the public interface of the package, and makes it easier for other developers to understand and use the package.**

`__all__`

With this setup, you can now import the ** greet** and

**functions from the**

`add`

**as follows:**

`examplepackage`

```
import examplepackage
examplepackage.greet("John")
examplepackage.add(1, 2)
```


## How do you manage packages in Python?

The most common way developers distribute their packages is by uploading them to a public repository called the [Python Package Index (PyPI)](https://pypi.org/). We use a system called **pip** which stands for "Pip Installs Packages". It is a command-line tool that allows users to install and manage packages from PyPI and other package indexes.

If you’ve used `pip install`

, you have downloaded and installed a package through the Python Package Index (PyPI).

Package management systems like pip make it easy to install, update, and remove packages, as well as manage dependencies (packages that are required for other packages to function properly) in a project.

## How does pip work?

`pip install`

is the command we use to download and install different packages from a library called PyPI or even from your own computer. When you run this command, it will check if the package is available on PyPI and if so, it will download and install it on your computer. In addition, it will check on - and if needed install - all the dependencies listed in the package metadata. Finally, pip will keep track of all the packages you install to help you upgrade or uninstall them later.

By default, `pip install`

installs the latest version of the package, but you can choose to install a specific version if you need to by using `pip install <PACKAGE>==<VERSION>`

, so for example you might use `pip install numpy==1.23.5`

. This can be helpful if you're having trouble with your code and need to use a specific version of a package.

Have you ever noticed that when you use `pip install`

to add a feature to your Python code, the name you use to install it is different from the name you use when you import it? This happens because there are two types of names:- the *distribution name*, which is the name you use to install the package using `pip install`

- the *package name*, which is the name you use when you import the package in your code.

The distribution name is unique and guaranteed to be different from other package names by PyPI, the library where you get your packages from. On the other hand, the package name is chosen by the person who created the package, so it may not be unique.

This is why you might install a package called "*dagster-dbt*" using `pip install`

, but import it in your code using the name "*dagster_dbt*". This is also why you might install a package called "*scikit-learn*" using `pip install`

, but import it in your code using the name "*sklearn*".

## What are relative vs. absolute imports?

When writing a package, there may be times when we want to use relative imports. [Relative imports](https://docs.python.org/3/reference/import.html#package-relative-imports) consist of either explicit or implicit imports, but you really only need to know about explicit relative imports as implicit relative imports are not supported in Python 3.

Relative imports allow you to import modules relative to the current module. They use the keyword "from" followed by the name of the current package and the name of the module or package being imported. For example, if you have a package named ** examplepackage** with two modules,

**and**

`module1.py`

**, you can import the code from**

`module2.py`

**into**

`module1.py`

**using a relative import as follows:**

`module2.py`

```
### examplepackage/module2.py
from .module1 import greeting
def greet(name):
print(greeting + " " + name)
```


Here, the relative import ** from .module1 import greeting** is used to import the

**variable from the**

`greeting`

**file into the**

`module1.py`

**file. The**

`module2.py`

**before**

`.`

**indicates that the import should be relative to the current module.**

`module1`

**Absolute imports** allow you to import modules using their full name, regardless of their location relative to the current module. They use the the full path of the module or package being imported. For example, you could use an absolute import to access the ** greeting** variable from the

**file into the**

`module1.py`

**file as follows:**

`module2.py`

```
### examplepackage/module2.py
from examplepackage.module1 import greeting
def greet(name):
print(greeting + " " + name)
```


Here, the absolute import ** from examplepackage.module1 import greeting** is used to import the greeting variable from the

**file into the**

`module1.py`

**file. The full name of the module,**

`module2.py`

**, is used to specify the location of the module.**

`examplepackage.module1`

In Python 3, relative imports must be ** explicit** and the

**imports are the default behavior.**

*absolute*

### Up next…

We hope this blog post has provided a useful introduction to Python packages and how to manage dependencies effectively. If you have any questions or need further clarification, feel free to join the Dagster Slack and ask the community for help. Thank you for reading!

Our [next article (Part 2 of this series)](https://dagster.io/blog/python-packages-primer-2) will dive into **Python dependency management** and how and when you should use **virtual environments**.