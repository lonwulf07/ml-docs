# Vespa Documentation
> Scraped on: 2026-03-30 | Root Source: [https://docs.vespa.ai/](https://docs.vespa.ai/)



---

## Source: https://docs.vespa.ai/

Welcome to the Vespa documentation site!

To see what Vespa is about, visit the [Vespa home page](https://vespa.ai).

[Getting started](en/getting-started.html) - Create your first app

[Table of contents](sitemap.html) - Browse documentation

[FAQ](en/faq.html) - Frequently asked questions

[Vespa Slack](https://slack.vespa.ai) - chat with users and developers

[GitHub Issues](https://github.com/vespa-engine/vespa/issues) - browse and create issues

[Stack Overflow](https://stackoverflow.com/questions/tagged/vespa) - questions tagged vespa

[Vespa Blog](https://blog.vespa.ai/) - the Vespa tech blog

[vespaengine@](https://twitter.com/vespaengine) - Vespa on Twitter

---

## Source: https://docs.vespa.ai/en/basics/deploy-an-application.html

Follow these steps to deploy a Vespa application to the [dev zone](../operations/environments.html#dev)
on Vespa Cloud (for free).

Alternative versions of this guide:

Setup:

**Create a tenant on Vespa Cloud:**

Go to [console.vespa-cloud.com](https://console.vespa-cloud.com/)
and create your tenant (unless you already have one).

**Install the Vespa CLI**
using

$ brew install vespa-cli

Windows/No Homebrew? See the [Vespa CLI page](/en/clients/vespa-cli.html) to download directly.

**Configure the Vespa client:**

$ export VESPA_CLI_HOME=$PWD/.vespa

$ vespa config set target cloud $ vespa config set application vespa-team.autotest

Use the tenant name from step 1 instead of "vespa-team", and replace in other steps in this example guide, too.

**Get Vespa Cloud control plane access:**

$ vespa auth login

Follow the instructions from the command to authenticate.

**Clone a sample application:**

$ vespa clone album-recommendation myapp && cd myapp

See [sample-apps](https://github.com/vespa-engine/sample-apps) for other sample apps you can clone.

**Add a certificate for data plane access
to the application:**

$ vespa auth cert app

It is a good idea to take note of the path to the `.pem`

files written here.

Steps:

[Deploy](applications.html#deploying-applications) the application:

$ vespa deploy --wait 600 ./app

The first deployment may take a few minutes while nodes are provisioned.

$ vespa feed dataset/documents.jsonl

**Run queries:**

$ vespa query "select * from music where album contains 'head'"

$ vespa query \ "select * from music where true" \ "ranking=rank_albums" \ "ranking.features.query(user_profile)={{cat:pop}:0.8,{cat:rock}:0.2,{cat:jazz}:0.1}"

Congratulations, you have deployed your first Vespa application!
Application instances in the [dev zone](../operations/environments.html#dev)
will by default keep running for 14 days after the last deployment.
You can control this in the
[console](https://console.vespa-cloud.com/).

$ vespa destroy --force

---

## Source: https://docs.vespa.ai/en/basics/applications.html

You use Vespa by deploying an *application* to it. Why applications?
Because Vespa handles both data and the
computations you do over them - together an application.

An application is specified by an *application package* - a directory with some files.
The application package contains *everything* that is needed to run your application:
Config, schemas, components, ML models, and so on.

The *only* way to change an application is to make the change in the application package
and then deploy it again. Vespa will then safely change the running system to match the new
application package revision, without impacting queries, writes, or data.

You can create a complete application package with just a single file: services.xml. This file
specifies the clusters that your application should run. It could just be a single stateless cluster
- what's called *container* - like this:

Put this in a file called services.xml, and you have created the world's smallest application package.
However, this won't do much, usually you want to have a `content`

cluster which can store data,
maintain indexes, and run the distributed part of queries. You'll also want your container cluster to load
the necessary middleware for this. With that we get a services file like this:

This specifies a pretty normal simple Vespa application, but now we need another file:
The schema of the document type we'll use. This goes into the directory `schemas/`

,
so our application package now looks like this:

services.xml schemas/myschema.sd

The schema file describes a kind of data and the computations (such as ranking/scoring) you want to do over it. At minimum it just lists the fields of that data type and if and each field should be indexed:

schema myschema { document myschema { field text type string { indexing: summary | index } field embedding type tensor<bfloat16>(x[384]) { indexing: attribute | index } field popularity type double { indexing: summary | attribute } } }

With these two files we have specified a fully functional application that can do text, vector and hybrid search with filtering.

Rather than creating applications from scratch like this, you can also clone one of our sample
applications as a starting point like we did in [getting started](deploy-an-application.html).

To read more on schemas, see the [schemas](schemas.html) guide.
To see everything an application package can contain, see the
[application package reference](../reference/applications/application-packages.html).

To create running instances of an application, or make the changes to one take effect, you *deploy* it.
Deployments to the dev zone and to self-managed clusters sets up a single instance, while deployments to production
can set up multiple instances in one or more regions.

To deploy an application package you use the [deploy command](../clients/vespa-cli.html#deployment) in Vespa CLI:

This will deploy the application package at the current dir to the current target and the default dev zone
(use `vespa deploy -h`

to see other options).

Deployment to production zones use a separate command:

Production deployments also require an additional file in the application package to specify where
it should be deployed: deployment.xml. See [production deployment](../operations/production-deployment.html).
The recommended way to deploy to production is by setting up a continuous deployment job, see
[automated deployments](../operations/automated-deployments.html).

Deploying a change to an application package is generally safe to do at any time. It does not disrupt queries and writes, and invalid or destructive changes are rejected before taking effect. You can also add tests that verifies the application before deployment to production zones.

---

## Source: https://docs.vespa.ai/en/basics/schemas.html

This is an introduction to schemas in Vespa. You can find all the details in the
[schema reference](../reference/schemas/schemas.html).

A schema defines a type of data and what we want to compute over it. An application package can contain multiple schemas for different kinds of data. Each content cluster specified in services.xml refers to the schemas that should be stored an indexed in that cluster. Schemas can inherit other schemas to avoid repeating common content.

Schemas are placed in files named the same as the schema, with the ending ".sd" (for schema definition),
in the `schemas/`

directory of the application package.

A schema contains a document type, which is a named collection of fields:

schema mySchema { document mySchema { field myField type string { indexing: summary | index } ... more fields } }

Each field has a type, a way it should be processed and indexed, and optionally other settings.
The main decision you make is how the field should be used in queries, determined by the `indexing`

statement:

`indexing: summary`

: The field should be available in query responses
(`indexing: index`

: If a string: Create a full-text on-disk index.
If a tensor: Create an HNSW vector index (requires `attribute`

in addition).
`indexing: attribute`

: For any field type: Make the field value available for structured search
(exact, range, regexp etc.), ranking, sorting, grouping, and aggregation in the
`indexing: attribute`

and `attribute: fast-search`

: As above, but in addition, create an index
over this data to make it an efficient filter. Suitable for structured fields that are used as strong filters in queries.
The indexing statement can contain multiple expressions separated by a pipe character, and these can also preprocess the
value, so the pipe should be read as passing to the next expression, as on Unix. See the
[reference](../reference/schemas/schemas.html#field) for all the types and content of fields.

When a schema is defined and added to a content cluster, you can [write data](writing.html)
according to it, and [query](querying.html) using the attributes and indexed fields in it.
Indexing always happens automatically in real time.

The document type in the schema defines the fields that you can put and get (read and write) for that document type. However, sometimes you want to take an input field and process it in some way before it is stored/indexed. To do that, you can create additional synthetic fields outside the document in the schema:

schema mySchema { document mySchema { field myField type string { indexing: summary | index } ... } field mySyntheticField type tensor(x[386]) { indexing: input myField |[embed]| attribute | index } }

A *rank profile* specifies what should be computed over the data described by the schema,
and how the documents of it should be ranked to select the ones to return in a query response:

schema mySchema { ... rank-profile hybrid { first-phase { expression { 0.3 * bm25(myText) + 0.5 * closeness(myEmbedding) + 0.2 * attribute(popularity) } } } }

A schema can have any number of rank profiles for different use cases, experiments and so on,
and each can have multiple functions that compute some value to be returned or used in ranking.
In addition to simple math functions like the above these can also be machine-learned models.
See [ranking](ranking.html) for more.

Schemas may become thousands of lines, with inheritance, multiple rank functions calling each other and so on.
The most efficient way of working with them is to use an IDE and install the Vespa plugin to get syntax highlighting,
completions and navigation - see [IDE support](../applications/ide-support.html).

What happens if you change the schema of a running application?

You can find the details in [modifying schemas](../reference/schemas/schemas.html#modifying-schemas).

---

## Source: https://docs.vespa.ai/en/basics/writing.html

This is an introduction to writing data into Vespa.

Once you have added one or more schemas to an application, and have added `<document-api>`

in services.xml to the container cluster you want to handle writes, you can send writes following those schemas.
A document is written as a JSON map containing a value for each field:

Each document has an id, which has two parts which can be decided freely:

Fields can remain empty; you do not need to set a value for every field defined in the document type.

You can find complete information on the document format in the
[document JSON format reference](../reference/schemas/document-json-format.html).

Documents are written to your application instances *write endpoint*,
using the [document/v1](../writing/document-v1-api-guide.html) HTTP API.
You can use the API directly, or use one of the clients provided by Vespa:

[vespa feed mydoc.json/mydocs.jsonl](../clients/vespa-cli.html#documents)

to feed one or many documents to Vespa.[application.feed_iterable(...)](https://vespa-engine.github.io/pyvespa/reads-writes.html#feeding-operations-from-a-file)

[myFeedClient.put(id, json, params)](../clients/vespa-feed-client.html#example-java)

Documents can also be removed, retrieved, and updated using the same API and clients.

Documents can be fully replaced by a new version by writing them again, but you can also update any individual fields of existing documents. This is especially useful for updating attribute fields such as e.g. behavior signals or prices at high throughput, without impacting other fields and indexes.

Updates are sent in the same ways as document puts, it's just the format that's different:

Updates can also increment numerical values, add to arrays and tensor etc., read more in the
[partial update guide](../writing/partial-updates.html).

Write operations to Vespa are streamed (using HTTP/2), and processed asynchronously. There is no need for a separate batch API to feed with the maximal throughput a system can handle, servers will push back by responding more slowly when they are close to saturation, and clients use this signal to back off, allowing them to dynamically converge at the maximal throughput a system can handle.

The write operations to Vespa are always applied in real time: When a write operation is asynchronously acknowledged, the write operation is persisted, fully processed and the result is visible in all subsequent queries. Vespa achieves this by a unique index design, combining in-memory mutable structures with and (for full-text) disk-backed posting lists.

Read more in the [feed sizing doc](../performance/sizing-feeding.html).

In addition to supporting writes, the document/v1 HTTP API can also return single documents by id
(get), and stream any selection of a document corpus (visit). Visiting is used for background and one-time
jobs such as backup and scraping content for offline machine learning. It is designed to have minimal
impact on the running system rather than returning with low latency. Read more in
[the document/v1 guide](../writing/document-v1-api-guide.html#data-dump).

---

## Source: https://docs.vespa.ai/en/basics/querying.html

An introduction to querying with Vespa.

Queries in Vespa are expressed as a YQL string: A query language identical to SQL for structured data, with additions for vector and full-text search, for example:

select * from mySchema where myTextField contains 'someWord' and myNumber > 10.0

You can also search multiple fields with one query item (like "contains"), by defining
[fieldset](../reference/schemas/schemas.html#fieldset) in the schema.

Any nested combination of and/or and so on is supported, see the full syntax in the
[query language reference](../reference/querying/yql.html).

Queries are sent as HTTP requests, to the endpoint of a container cluster having <search> in services.xml.
The YQL query is sent as the `yql`

parameter (HTTP Encoded):

endpoint-url/search/?yql=select+%2A+from+sources+%2A+where+true

The Vespa CLI can do this for you:

vespa query "select * from sources * where true"

You can add the `-v`

option to see the HTTP request that this becomes.

On Vespa Cloud your application will by default get an mTLS certificate that you use to make requests.
If you want to use an access token, you can [add one in the console](../security/guide#configuring-tokens).

In addition to the YQL parameter, you can send other query request parameters to supply data such as user/llm query text, vectors, and parameters controlling the query execution. These are added to HTTP requests in the obvious way, and passed to Vespa CLI by adding multiple arguments:

vespa query -v "select * from sources * where true" "timeout=100ms"

You can also send the query parameters
[as a JSON payload](../querying/query-api.html#http) instead of as request parameters:

$ curl -H "Content-Type: application/json" \ --data '{"yql" : "select * from sources * where true"}' \ endpoint-url/search/

To see all the parameters accepted, see the [query API reference](../reference/api/query.html).

You may end up wanting to set many query parameters in your queries. Instead of passing them in the request,
you can create a query profile in the application package containing all the parameters and just specify
the profile in the request, see [query profiles](../querying/query-profiles.html).

You can use the `text`

YQL operator to retrieve or rank using raw text.
This will process the text and (by default) search it with the
[WeakAnd](../ranking/wand.html#weakand) text search operator.

You can pass the text directly, or refer to a separate request parameter (using `@parameter`

):

$ vespa query "select * from sources * where title contains text(@query)" \ "query=Any text, from a human/llm"

You can set options controlling how the text is to be parsed and matched, see
the [text() reference documentation](../reference/querying/yql.html#text).

Querying by vectors is done using the `nearestNeighbor`

YQL operator, which takes a document and query vector:

$ vespa query 'select * from sources * where {targetHits: 100}nearestNeighbor(my_vector_field, my_query_vector)' \ ranking=my_rank_profile \ 'input.query(my_query_vector)'='[1,2,3]'

Read more in [nearest neighbor search](../querying/nearest-neighbor-search).

You can combine multiple nearestNeighbor, text and other operators in any way:

$ vespa query "select * from sources * where (({targetHits: 300}nearestNeighbor(my_title_embedding, my_query_vector)) \ or ({targetHits: 150}nearestNeighbor(my_body_embeddings, my_query_vector)) \ or title contains text(@query) or body contains text(@query)) \ and range(title, 0.0, 500.0) and category in ('c1', 'c2') \ and !(blacklisted=true)" \ "input.query(my_query_vector)=embed(@query)" \ "query=Hello, world! "

---

## Source: https://docs.vespa.ai/en/basics/ranking.html

*Ranking* in Vespa is the computation that is done on matching documents during query execution.
These are specified as [ranking functions](../ranking/ranking-expressions-features.html) in
*rank profiles* in the schema.

The special function named `first-phase`

will determine the initial *rank* of the matches,
such that the top k can be selected as response to a query:

rank-profile my-rank-profile { first-phase { expression: 0.7 * bm25(text) + 0.3 * attribute(popularity) } }

The ranking functions can be any mathematical function combining rank features,
including [tensor math](../ranking/tensor-user-guide.html#ranking-with-tensors) and
[machine-learned models](#machine-learned-model-inference).

The rank features these functions can use are of three categories:

`attribute(fieldName)`

: Any document field which has `attribute`

in the indexing statement.`query(name)`

: Any value sent with the query as an input. When these are tensors
(not scalars) they must be declared as an input in the rank profile.
Refer to the [full list of rank features](../reference/ranking/rank-features.html).

Query features (inputs) that are tensors must be declared in the rank profile:

rank-profile my-rank-profile { inputs { query(user_context) tensor<float>(x[3]) } first-phase { expression: bm25(text) + sum(query(user_context) * attribute(document_context)) } }

This is also how the type of query vectors in vector search are declared.

A schema can have any number of rank profiles specifying computations and ranking
for different use cases, experiments, and so on. Queries select one using the
[ranking.profile](../reference/api/query.html#ranking.profile) parameter
in requests or a [query profile](../querying/query-profiles.html).
If no profile is specified in the request, the one called `default`

is used, and
if that isn't specified in the schema, a default one ranking by the [nativeRank](../ranking/nativerank.html)
feature is used. Another built-in rank profile `unranked`

is also always available.
Specifying this boosts serving performance in queries which do not need ranking because ordering is not important or
[explicit field sorting](../reference/querying/sorting-language.html) is used.

To avoid very long schema files, rank profiles can also be specified in their own files in the
application package, named
`schemas/[schema-name]/[profile-name].profile`

.
See the [schema reference](../reference/schemas/schemas.html#rank-profile) for documentation
of all the content of rank profiles.

Rank profiles can inherit other profiles to avoid duplication, as in
`rank-profile myProfile inherits default, another`

.

In addition to first-phase which specify the initial ranking that will be applied
on all matching documents during matching, rank profiles can also specify functions
that will be applied to *rerank* the top k documents before returning the final result.
This is useful to direct more computation towards the most promising candidate documents:

schema myapp { rank-profile my-rank-profile { first-phase { expression { attribute(quality) * freshness(timestamp) + bm25(title) } } second-phase { expression: xgboost(my_xgboost_reranker) total-rerank-count: 1000 # Over all nodes } global-phase { expression: sum(onnx(my_large_onnx_model)) rerank-count: 20 } } }

The `second-phase`

expression is executed locally on the content node, using local data.
This is efficient on thousands of candidates. The `global-phase`

expression
is executed on the global result set after merging, in the container node and is best used for
any very expensive and high quality final reranking.
See [phased ranking](../ranking/phased-ranking.html) for details.

A rank profile can define any number of functions which can be used in other ranking expressions or (when taking no arguments) be returned with results.

schema myapp { rank-profile my-rank-profile { function clickProbability() { expression: xgboost('myClickModel') } function textRanking(field) { expression: 0.7 * bm25(field) + 0.3 * nativeProximity(field) } first-phase { expression { 0.1 * clickProbability() 0.2 * closeness(embeddingsField) + 0.3 * textRanking(titleField) + 0.4 * textRanking(bodyField) } } summary-features { clickProbability() # Returned with every mathed document } } }

Read more in [ranking expressions and functions](../ranking/ranking-expressions-features.html).

In addition to ranking *documents*, a rank profile can also rank and select array elements within documents.
This is most commonly used to select individual chunks within documents in RAG applications, see
[working with chunks](../rag/working-with-chunks.html#layered-ranking-selecting-chunks-to-return).

The best quality is achieved by learning relevance functions using machine learning from a training set. Vespa lets you use machine-learned models in these formats in distributed ranking (first-and second phase):

As these are exposed as rank features, they can be used in ranking expressions exactly like any other rank feature.

---

## Source: https://docs.vespa.ai/en/basics/operations.html

A deployed Vespa application is a self-contained highly available, distributed stateful system. Operating these at scale is difficult, so Vespa automates this to the extent possible in the deployment environment it is running.

| Deployment environment | Automated operations | Suitable for |
|---|---|---|
| Vespa self-managed/open source | Application deployment (single application, single instance), application change (except rolling restarts), data redistribution, failover | Development |
| Vespa Kubernetes Operator | Application deployment (single application, single instance), application change,
data redistribution, failover, node provisioning, failed node replacement, node type change,
|

Vespa is designed to enable applications to evolve in production. This includes these aspects:

Content clusters in Vespa can be scaled to any amount of content by adding more nodes (horizontal scaling).
Data will redistribute automatically, and there's no need for manual tuning of the process.
To scale to large amounts of queries, content clusters can also be scaled by adding multiple *groups*
of nodes (vertical scaling). Each group contains a single copy of the corpus and container clusters
will automatically load balance over groups.

A Vespa application can consist of any number of stateless and stateful clusters. On larger applications it can be beneficial to split different functions into separate clusters that can be optimized separately. For example, having one stateless container cluster for feeding and another for querying, or using different content clusters for different data schemas.

Read more in [elasticity](../content/elasticity.html) and the [performance guide](../performance/).

---

## Source: https://docs.vespa.ai/en/basics/whats-more.html

The *Vespa basics* articles introduces the central concepts in Vespa, but can't cover everything
needed to build complete applications. Some additional important features are:

[Grouping and aggregation](../querying/grouping.html) (faceting): Grouping in the query language lets you
specify hierarchical
groupings and aggregations that will be performed over all the matches to a query distributed over all
participating nodes.
**Streaming search**: In applications where queries search fixed small subsets of all data
(such as a user or tenant) it is not cost-effective to build indexes. For these use case Vespa
supports a [streaming mode](../performance/streaming-search.html) which delivers low-latency search
without the cost of maintaining indexes or even keeping data in memory.
**Application components**: Applications can include Java components that implement application logic,
such as intercepting queries and results and implement custom workflows
([Searchers](../applications/searchers.html)),
modify write operations ([document processors](../applications/document-processors.html)), and
implementing custom API's ([handlers](../applications/request-handlers.html)).
**Parent-child relations**: Joins are not supported in Vespa because they wouldn't scale, but
the special case where one side of the join is much smaller than the other is supported. This is called
a [parent-child relation](../schemas/parent-child.html).
**Federation**: Most applications federate over multiple types of content.
Vespa will federate over all schemas and clusters by default, and includes
a [federation framework](../querying/federation.html) which lets you define application specific
schemes to formulate queries to
each content type, include content from other services, combine content in application-specific ways
and so on.
**Predicate fields**: Sometimes it is useful to allow documents to specify when they should be matched,
as conditions on properties sent with the query, for example to let content target specific kinds of users.
This can be done using [predicate fields](../schemas/predicate-fields.html).
**Geo search**: By using [geo fields](../querying/geo-search.html), you can find documents within
a given area, use distance to the query in ranking, or even retrieve by distance to a path for route planning.
**Mutable attributes**: By defining [mutable attributes](../reference/schemas/schemas.html#mutate)
on the documents, applications can collect statistics in real time on each document to track how
often they are matched, ranked, and returned in results.

Read more in the full [features](../learn/features.html) list.

---

## Source: https://docs.vespa.ai/en/learn/overview.html

Vespa is a platform for applications which need low-latency computation over large data sets. It stores and indexes your structured, text and vector data so that queries, selection and processing and machine-learned model inference over the data can be performed quickly at serving time at any scale. Functionality can be customized and extended with application components hosted within Vespa. This document is an overview of the features and main components of Vespa.

Vespa allows application developers to create applications that scale
to large amounts of data and high loads without sacrificing latency or reliability.
A Vespa application consists of a number of *stateless Java container clusters*
and zero or more *content* clusters storing data.

The [stateless container clusters](../applications/containers.html) host components
which process incoming data and/or queries and their responses.
These components provide functionality belonging to the platform like indexing
transformations and the global stages of query execution, but can also include the middleware logic of the application.
Application developers can configure their Vespa system with a single stateless cluster which
performs all such functions, or create different clusters for each kind of task.
The container clusters then pass queries and data operations on to the appropriate nodes in the content clusters.
If the application uses data it does not own, you can add components to access data from external services as well.

[ Content clusters](../content/elasticity.html) in Vespa are responsible for storing data
and execute queries and inferences over the data.
Queries can range from simple data lookups for content serving to complex conditions for selecting the relevant
data, ranking it using machine-learned models, and grouping and aggregating the data across all nodes
participating in the query.
All the operations provided by Vespa scales to more content, more expensive inference, and higher query volume
simply by adding more nodes to the content clusters.

When changing the nodes of a content cluster for scaling or on node failure, content clusters automatically re-balance data in the background to maintain a balanced distribution at the configured redundancy level. Faulty nodes are also automatically removed from the serving path to avoid any impact to queries and writes (failover).

After intermediate processing in a container cluster, data is written to content clusters.
Writes are persistent and visible in all queries after receiving an ack on the write message,
after a few milliseconds. Each write is guaranteed to either succeed or provide failure information
response within a given time limit, and writes and scale linearly with the available resources, indefinitely.
In addition to rewriting and removing entire documents, writes may selectively modify only individual document fields.
Writes can be sent directly over HTTP/2, or by using a Java client —
refer to the [API documentation](../reference/api/api.html).

Each document instance stored in Vespa are of a type defined in a configured [schema](../basics/schemas.html),
which defines the document fields and how to store and index them, as well as the ranking and inference
profiles that belongs to the document type. Applications can contain any number of schemas for different
data types, and configure them to be stored either in the same or multiple content clusters.

Container and content clusters handle all the end user traffic of a Vespa application,
but there's also a third type of cluster, the *admin and config clusters*.
These set up and manage the other clusters in the application according to configuration, and
manages the process of changing the clusters safely without disruption to traffic
when the configuration changed.

A Vespa application is completely specified by an
[ application package](../basics/applications.html),
which is a directory structure containing a declaration of the clusters to run as part of the application,
the content schemas, any machine-learned models and Java components,
and other configuration or data files needed by various features.
Application developers create a running application from their application package by

The rest of this document provides some more detail on the functions Vespa performs.

Vespa accepts the following operations:

[Container clusters](../applications/containers.html) host the application components
which employ the operations listed above and process their return data.
Vespa provides a set of components out of the box, together with component infrastructure:
dependency injection,
with added support for injection of config from the admin server or the application package;
a component model based on OSGi;
a shared mechanism to chain components into handler chains for modularity
as well as metrics and logging.
The container also provides the network layer for handling and issuing remote requests -
HTTP is provided out of the box,
and other protocols/transports can be transparently plugged in as components.

Developers can make changes to components (and of course their configuration) simply by redeploying their application package - the system takes care of copying the components to the nodes of the cluster and loading/unloading components impacting request serving or restarting nodes.

[Content clusters](../content/elasticity.html) store data
and maintain distributed indices of data for searches and selects.
Data is replicated over multiple nodes, with a number of copies specified by the application,
such that the cluster can automatically repair itself on loss of a node or a disk.
Using the same mechanism, clusters can also be grown or shrunk while online,
simply by changing the set of available nodes declared in the application package.

Lookup of an individual document is routed directly to a node storing that document, while queries are spread over a subset of nodes which contain the queried documents. Complex queries are performed as distributed algorithms with multiple steps back and forth between the container and the content nodes; this is to achieve the low latency which is one of the main design goals of Vespa.

The [single configuration cluster](../basics/applications.html)
controls all the other clusters of the system.
A config server derives the low level configuration of each individual cluster, node and process,
such that the application developer can specify the desired system on a higher level
without worrying about its detailed realization.
Whenever the application package is redeployed,
the system will compute the necessary changes in configuration and manage the process
of moving safely from the current to the new configuration without disrupting queries or writes.

Application packages may be [changed, redeployed](../reference/api/deploy-v2.html)
and [inspected](../reference/api/config-v2.html) over an HTTP REST API,
or through a [command line interface](../clients/vespa-cli.html#deployment).
The administration cluster runs over [ZooKeeper](https://zookeeper.apache.org)
to make changes to configuration singular and consistent, and to avoid having a single point of failure.

An application package looks the same, and is deployed the same way,
whether it specifies a large system with hundreds of nodes or a single node running all services.
The only change needed is to the lists of nodes making up the cluster.
The container clusters may also be started within a single Java VM by "deploying" the
application package from a method call.
This is useful for testing applications in an IDE and in unit tests.
Application packages with components can be [developed](../applications/developer-guide.html)
in an IDE using Maven starting from sample applications.

Vespa allows functionally rich and highly available applications to be developed to scale and perform to high standards without burdening developers with the considerable low level complexity this requires. It allows developers to evolve and grow their applications over time without taking the system offline, and lets them avoid complex data and page precomputing schemes which lead to stale data that cannot be personalized, since this often requires complex queries to complete in real user time over data which is constantly changing at the same time.

For more details, read [Vespa Features](features.html), or try to
[deploy an application](../basics/deploy-an-application.html).

---

## Source: https://docs.vespa.ai/en/llm-help.html

Redirecting…
Click here if you are not redirected.

---

## Source: https://docs.vespa.ai/en/learn/features.html

## What is Vespa?

Vespa is a platform for applications which need low-latency computation over large data sets.
It allows you to write and persist any amount of data, and execute high volumes of queries over
the data which typically complete in tens of milliseconds.

Queries can use both structured filters conditions, text and nearest neighbor vector search to select data.
All the matching data is then ranked according to ranking functions - typically machine learned -
to implement such use cases as search relevance, recommendation, targeting and personalization.

All the matching data can also be grouped into groups and subgroups where data is aggregated
for each group to implement features like graphs, tag clouds, navigational tools, result
diversity and so on.

Application specific behavior can be included by adding Java components for processing
queries, results and writes to the application package.

Vespa is real time. It is architected to maintain constant response times with any data volume by
executing queries in parallel over many data shards and cores, and with added query volume
by executing queries in parallel over many copies of the same data (groups). It is optimized
to return responses in tens of milliseconds. Writes to data becomes visible in a few milliseconds
and can be handled at a rate of thousands to tens of thousands per node per second.

A lot of work has gone into making Vespa easy to set up and operate.
Any Vespa application - from single node systems to systems running on hundreds of nodes in data centers -
are fully configured by a single artifact called an *application package*. Low level configuration of
nodes, processes and components is done by the system itself based on the desired traits specified in the
application package.

Vespa is scalable. System sizes up to hundreds of nodes handling tens of billions of documents,
and tens of thousands of queries per second
are not uncommon, and no harder to set up and modify than single node systems. Since
all system components, as well as stored data is redundant and self-correcting, hardware
failures are not operational emergencies and can be handled by re-adding capacity when convenient.

Vespa is self-repairing and dynamic. When machines are lost or new ones added, data is automatically
redistributed over the machines, while continuing serving and accepting writes to the data.
Changes to configuration and Java components can be made while serving by deploying a changed
application package - no downtime or restarts required.

## Features

This section provides an overview of the main features of Vespa.
The remainder of the documentation goes into full detail.

### Data and writes

- Documents in Vespa may be added, replaced, modified (single fields or any subset) and removed.
- Writes are acknowledged back to the client issuing them when they are durable and visible in queries,
in a few milliseconds.
- Writes can be issued at a sustained volume of thousands to tens of thousands per node per second while serving queries.
- Data is replicated with a configurable redundancy.
- An even data distribution, with the desired redundancy is automatically maintained when nodes are added,
removed or lost unexpectedly.
- Data corruption is automatically repaired from an uncorrupted replica of the data.
- Data is written over a simple HTTP/2 API, or (for high volume) using a small, standalone client.
- Document data schemas allow fields of any of the usual primitive types as well as collections, structs and tensors.
- Any number of data schemas can be used at the same time.
- Documents may reference each other and field from referenced documents may be used in queries without performance penalty.
- Write operations can be processed by adding custom Java components.
- Data can be streamed out of the system for batch reprocessing.

### Queries

- Queries may contain any combination of structured filters, free text and vector search operators.
- Queries may contain large tensors and vectors (to represent e.g a user).
- Queries choose how results should be ranked and specify how they should be organized (see sections below).
- Queries and results may be processed by adding custom Java components - or any HTTP request may be
turned into a query by custom request handlers.
- Query response times are typically in tens of milliseconds and can be maintained given any load
and data size by adding more hardware.
- A
*streaming search* mode is available where search/selection is only supported on predefined
groups of documents (e.g a user's document). In this mode each node can store and serve billions of
documents while maintaining low response times.

### Ranking and inference

- All results are ranked using a configured ranking function, selected in the query.
- A ranking function may be any mathematical function over scalars or tensors (multidimensional arrays).
- Scalar functions include an "if" function to express business logic and decision trees.
- Tensor functions include a powerful set of primitives and composite functions which
allows expression of advanced machine-learned ranking functions such as e.g. deep neural nets.
- Functions can also refer to ONNX models invoked locally on the content nodes.
- Multiple ranking phases are supported to allocate more CPU to ranking promising candidates.
- A powerful set of text ranking features using positional information from the documents is provided out of the box.
- Other ranking features include 2D distance and freshness.

### Organizing data and presenting results

- Matches to a query can be grouped and aggregated according to a specification in the query.
- All the matches are included, even though they reside on multiple machines executing in parallel.
- Matches can be grouped by a unique value or by a numerical bucket.
- Any level of groups and subgroups are supported, and multiple parallel groupings can be specified in one query.
- Data can be aggregated (counted, averaged etc.) and selected within each group and subgroup.
- Any selection of data from documents can be included with the final result returned to the client.
- Search engine style keyword highlighting in matching fields is supported.

## Configuration and operations

- Vespa can be installed using rpm files or a Docker image - on personal laptops, owned datacenters or in AWS.
- An application of Vespa is fully specified as a separate buildable artifact: An
*application package* -
individual machines or processes need never be configured individually.
- Systems may contain multiple clusters of each type (stateless and stateful), each containing any number of nodes.
- Systems of any size may be specified by two short configuration files in the application package.
- Document schemas, Java components and ranking functions/models are also configured in the application package.
- An application package is deployed as a single unit to Vespa to realizes the system desired by the application.
- Most application changes (including Java component changes) can be performed by deploying
a changed application package - the system will manage its own change process while serving and handling writes.
- Most document schema changes (excluding field type changes) can be made while the system is live.
- Application package changes are validated on deployment to prevent destructive changes to live systems.
- Vespa has no single-point-of-failures and automatically routes around failing nodes.
- System logs are collected to a central server in real time.
- Selected metrics may be emitted to a third-party metrics/alerting system from all the nodes.

---

## Source: https://docs.vespa.ai/en/learn/tutorials/

Learn how to use Vespa Vector Search in the [practical nearest neighbor search guide](../../querying/nearest-neighbor-search-guide).
It uses Vespa's support for [nearest neighbor search](../../querying/nearest-neighbor-search), there is
also support for fast [approximate nearest neighbor search](../../querying/approximate-nn-hnsw) in Vespa.
The guide covers combining vector search with filters and how to perform hybrid search,
combining retrieval over inverted index structures with vector search.

[Tutorial: Hybrid Text Search](hybrid-search).
A search tutorial and introduction to hybrid text ranking with Vespa,
combining BM25 with text embedding models.

Follow this series to learn how to build a complete application supporting both content recommendation/personalization, navigation, and search.

Learn how to use Vespa for ML model serving in [Stateless Model Evaluation](../../ranking/stateless-model-evaluation.html).
Vespa supports running inference with models from many popular ML frameworks, which can be used
for ranking, query classification, question answering, multi-modal retrieval, and more.

Vespa supports integrating [embedding](../../rag/embedding.html) models, which avoids transferring large amounts of embedding vector data
over the network and allows for efficient serving of embedding models.

The [e-commerce shopping sample application](e-commerce) demonstrates Vespa grouping,
true in-place partial updates, custom ranking, and more.

The [HTTP API tutorial](http-api.html) shows how to build a custom HTTP API in an application.

There are many examples and starting applications on
[GitHub](https://github.com/vespa-engine/sample-apps/)
and [Pyvespa examples](https://vespa-engine.github.io/pyvespa/index.html).

---

## Source: https://docs.vespa.ai/en/learn/faq.html

Refer to [Vespa Support](https://vespa.ai/support/) for more support options.

[Ranking](../basics/ranking.html) is maybe the primary Vespa feature -
we like to think of it as scalable, online computation.
A rank profile is where the application's logic is implemented,
supporting simple types like `double`

and complex types like `tensor`

.
Supply ranking data in queries in query features (e.g. different weights per customer),
or look up in a [Searcher](../applications/searchers.html).
Typically, a document (e.g. product) "feature vector"/"weights" will be compared to a user-specific vector (tensor).

Vespa doesn't have specific support for storing customer data as such.
You can store this data as a separate document type in Vespa and look it up before passing the query,
or store this customer meta-data as part of the other meta-data for the customer
(i.e. login information) and pass it along the query when you send it to the backend.
Find an example on how to look up data in
[album-recommendation-docproc](https://github.com/vespa-engine/sample-apps/tree/master/examples/document-processing).

Create a tensor in the ranking function from arrays or weighted sets using `tensorFrom...`

functions -
see [document features](../reference/ranking/rank-features.html#document-features).

Pass a ranking feature like `query(threshold)`

and use an `if`

statement in the ranking expression -
see [retrieval and ranking](../ranking/ranking-intro#retrieval-and-ranking). Example:

rank-profile drop-low-score { function my_score() { expression: ..... #custom first phase score } rank-score-drop-limit:0.0 first-phase { if(my_score() < query(threshold), -1, my_score()) } }

Rank expressions are not evaluated lazily. No, this would require lambda arguments. Only doubles and tensors are passed between functions. Example:

function inline foo(tensor, defaultVal) { expression: if (count(tensor) == 0, defaultValue, sum(tensor)) } function bar() { expression: foo(tensor, sum(tensor1 * tensor2)) }

Yes, this can be accomplished by configuring [match-phase](../reference/schemas/schemas.html#match-phase)
in the rank profile, or by adding a range query item using *hitLimit* to the query tree,
see [capped numeric range search](../reference/querying/yql.html#numeric).
Both methods require an *attribute* field with *fast-search*. The capped range query is faster, but beware that if
there are other restrictive filters in the query, one might end up with 0 hits.
The additional filters are applied as a post filtering
step over the hits from the capped range query. *match-phase* on the other hand, is safe to use with filters or other query terms,
and also supports diversification which the capped range query term does not support.

The returned [relevance](../reference/querying/default-result-format.html#relevance) for a hit can become "-Infinity" instead
of a double. This can happen in two cases:

`NaN`

(Not a Number). For example, `log(0)`

would produce
-Infinity. One can use `each(output(summary()))`

that are outside what Vespa computed and caches on a heap. This is controlled by the To hard-code documents to positions in the result set,
see the [pin results example](../ranking/multivalue-query-operators.html#pin-results-example).

There is a [maximum document size](../reference/applications/services/content.html#max-document-size) of 128 MiB,
which is configurable per content cluster in services.xml.

No enforced limit, except resource usage (memory).

E.g. a product is offered in a list of stores with a quantity per store.
Use [multivalue fields](../searching-multi-valued-fields.html) (array of struct) or [parent child](../schemas/parent-child.html).
Which one to chose depends on use case, see discussion in the latter link.

E.g. price and quantity available per store may often change vs the actual product attributes.
Vespa supports [partial updates](../writing/reads-and-writes.html) of documents.
Also, the parent/child feature is implemented to support use-cases where child elements are updated frequently,
while a more limited set of parent elements are updated less frequently.

See the [Vespa Consistency Model](../content/consistency).
Vespa is not transactional in the traditional sense, it doesn't have strict ACID guarantees.
Vespa is designed for high performance use-cases with eventual consistency
as an acceptable (and to some extent configurable) trade-off.

Wildcard fields are not supported in vespa.
Workaround would be to use maps to store the wildcard fields.
Map needs to be defined with `indexing: attribute`

and hence will be stored in memory.
Refer to [map](../reference/schemas/schemas.html#map).

Implement a [document processor](../applications/document-processors.html) for this.

Set a selection criterion on the `document`

element in `services.xml`

.
The criterion selects documents to keep.
I.e. to purge documents "older than two weeks", the expression should be "newer than two weeks".
Read more about [document expiry](../schemas/documents.html#document-expiry).

Changing redundancy is a live and safe change
(assuming there is headroom on disk / memory - e.g. from 2 to 3 is 50% more).
The time to migrate will be quite similar to what it took to feed initially -
a bit hard to say generally, and depends on IO and index settings, like if building an HNSW index.
To monitor progress, take a look at the
[multinode](https://github.com/vespa-engine/sample-apps/tree/master/examples/operations/multinode)
sample application for the *clustercontroller* status page - this shows buckets pending, live.
Finally, use the `.idealstate.merge_bucket.pending`

metric to track progress -
when 0, there are no more data syncing operations - see
[monitor distance to ideal state](../operations/self-managed/admin-procedures.html#monitor-distance-to-ideal-state).
Nodes will work as normal during data sync, and query coverage will be the same.

It does not,
*namespace* is a mechanism to split the document space into parts that can be used for document selection -
see [documentation](../schemas/documents.html#namespace). The namespace is not indexed and cannot
be searched using the query api, but can be used by [visiting](../writing/visiting.html).

There are multiple things that can cause this, see [visiting troubleshooting](../writing/visiting.html#troubleshooting).

Run a query like `vespa query "select * from sources * where true"`

and see the `totalCount`

field.
Alternatively, use metrics or `vespa visit`

- see [examples](../writing/batch-delete.html#example).

Not in the field definition, but it's possible to do this with the [choice](../writing/indexing.html#choice-example)
expression in an indexing statement.

Facets is called [grouping](../grouping.html) in Vespa.
Groups can be multi-level.

Add filters to the query using [YQL](../querying/query-language.html)
using boolean, numeric and [text matching](../querying/text-matching.html). Query terms can be annotated
as filters, which means that they are not highlighted when bolding results.

One way is to describe items using tensors and query for the
[nearest neighbor](../reference/querying/yql.html#nearestneighbor) -
using full precision or approximate (ANN) - the latter is used when the set is too large for an exact calculation.
Apply filters to the query to limit the neighbor candidate set.
Using [dot products](../ranking/multivalue-query-operators.html) or [weak and](../ranking/wand.html) are alternatives.

Vespa does not have a stop-word concept inherently.
See the [sample app](https://github.com/vespa-engine/sample-apps/pull/335/files)
for how to use [filter terms](../reference/querying/yql.html#annotations).
[Tripling the query performance of lexical search](https://blog.vespa.ai/tripling-the-query-performance-of-lexical-search/)
it s good blog post on this subject.

Trying to request more than 400 hits in a query, getting this error:
`{'code': 3, 'summary': 'Illegal query', 'message': '401 hits requested, configured limit: 400.'}`

.

`maxHits`

in a `<field name="maxHits">500</field>`

in `search/query-profiles/default.xml`

(create as needed).
The See the [UserProfileSearcher](https://github.com/vespa-engine/sample-apps/blob/master/news/app-6-recommendation-with-searchers/src/main/java/ai/vespa/example/UserProfileSearcher.java)
for how to create a new query to fetch data -
this creates a new Query, sets a new root and parameters - then `fill`

s the Hits.

See the sub-query question above, in addition add something like:

Yes, using the [in query operator](../reference/querying/yql.html#in). Example:

```
select * from data where user_id in (10, 20, 30)
```


The best article on the subject is
[multi-lookup set filtering](../performance/feature-tuning.html#multi-lookup-set-filtering).
Refer to the [in operator example](../ranking/multivalue-query-operators.html#in-example)
on how to use it programmatically in a [Java Searcher](../applications/searchers.html).

Use the [in query operator](../reference/querying/yql.html#in). Example:

```
select * from data where category in ('cat1', 'cat2', 'cat3')
```


See [multi-lookup set filtering](#is-it-possible-to-query-vespa-using-a-list-of-document-ids)
above for more details.

Count all documents using a query like [select * from doc where true](../querying/query-language.html) -
this counts all documents from the "doc" source.
Using `select * from doc where true limit 0`

will return the count and no hits,
alternatively add [hits=0](../reference/api/query.html#hits).
Pass [ranking.profile=unranked](../reference/api/query.html#ranking.profile)
to make the query less expensive to run.
If an *estimate* is good enough, use [hitcountestimate=true](../reference/api/query.html#hitcountestimate).

Yes - a deployment warning with *This may lead to recall and ranking issues* is emitted
when fields with conflicting tokenization are put in the same
[fieldset](../reference/schemas/schemas.html#fieldset).
This is because a given query item searching one fieldset is tokenized just once,
so there's no right choice of tokenization in this case.
If you have text that you want to apply to multiple fields with different tokenization,
include the text multiple times in the query:

```
select * from sources * where fieldsetOrField1 contains text(@query) or fieldsetOrField2 contains text(@query)
```


More details on [stack overflow](https://stackoverflow.com/questions/72784136/why-vepsa-easily-warning-me-this-may-lead-to-recall-and-ranking-issues).

Find query timeout details in the [Query API Guide](../querying/query-api.html#timeout)
and the [Query API Reference](../reference/api/query.html#timeout).

Backslash is used to escape special characters in YQL. For example, to query with a literal backslash, which is useful in regexpes, you need to escape it with another backslash: \. Unescaped backslashes in YQL will lead to "token recognition error at: ''".

In addition, Vespa CLI unescapes double backslashes to single (while single backslashes are left alone), so if you query with Vespa CLI you need to escape with another backslash: \\. The same applies to strings in Java.

Also note that both log messages and JSON results escape backslashes, so any \ becomes \.

E.g. two select queries with slightly different filtering condition and have a limit operator for each of the subquery. This makes it impossible to do via OR conditions to select both collection of documents - something equivalent to:

```
SELECT 1 AS x
UNION ALL
SELECT 2 AS y;
```


This isn’t possible, need to run 2 queries.
Alternatively, split a single incoming query into two running in parallel in a [Searcher](../applications/searchers.html) - example:

```
FutureResult futureResult = new AsyncExecution(settings).search(query);
FutureResult otherFutureResult = new AsyncExecution(settings).search(otherQuery);
```


There is no index or attribute data structure that allows efficient *searching* for documents where
an array field has a certain number of elements or items.
The *grouping language* has a [size()](../reference/querying/grouping-language.html#list-expressions) operator that can be used in queries.

The [visiting](../writing/visiting.html#analyzing-field-values) API using document selections supports it, with a linear scan over all documents.
If the field is an *attribute* one can query using grouping to identify Nan Values,
see count and list [fields with NaN](../querying/grouping.html#count-fields-with-nan).

See the [random.match](../reference/ranking/rank-features.html#random.match) rank feature - example:

```
rank-profile random {
first-phase {
expression: random.match
}
}
```


Run queries, seeding the random generator:

```
$ vespa query 'select * from music where true' \
ranking=random \
rankproperty.random.match.seed=2
```


See [result diversity](../querying/result-diversity) for strategies on how to create result sets from different sources.

If you want to search for the most dissimilar items,
you can with angular distance multiply your `clip_query_embedding`

by the scalar -1.
Then you are searching for the points that are closest to the point
which is the farthest away from your `clip_query_embedding`

.

Also see a [pyvespa example](https://vespa-engine.github.io/pyvespa/examples/pyvespa-examples.html#Neighbors).

The best option is to use `--verbose`

option, like `vespa feed --verbose myfile.jsonl`

-
see [documentation](../clients/vespa-cli.html#documents).
A common problem is a mismatch in schema names and [document IDs](../schemas/documents.html#document-ids) - a schema like:

```
schema article {
document article {
...
}
}
```


will have a document feed like:

```
{"put": "id:mynamespace:article::1234", "fields": { ... }}
```


Note that the [namespace](glossary.html#namespace) is not mentioned in the schema,
and the schema name is the same as the document name.

This configuration is a combination of content and container cluster configuration,
see [indexing](../writing/indexing.html) and [feed troubleshooting](../operations/self-managed/admin-procedures.html#troubleshooting).

This is often a problem if using [document expiry](../schemas/documents.html#document-expiry),
as documents already expired will not be persisted, they are silently dropped and ignored.
Feeding stale test data with old timestamps in combination with document-expiry can cause this
behavior.

Using too many HTTP clients can generate a 429 response code.
The Vespa sample apps use [vespa feed](../clients/vespa-cli.html#documents) which uses HTTP/2 for high throughput -
it is better to stream the feed files through this client.

Vespa does not have a Kafka connector.
Refer to third-party connectors like [kafka-connect-vespa](https://github.com/vinted/kafka-connect-vespa).

E.g. integrating NER, word sense disambiguation, specific intent detection. Vespa supports these things well:

E.g. instead of using terms or n-grams as the unit, we might use terms with specific word senses -
e.g. bark (dog bark) vs. bark (tree bark), or BCG (company) vs. BCG (vaccine name).
Creating a new index *format* means changing the core.
However, for the examples above, one just need control over the tokens which are indexed (and queried).
That is easily done in some Java code.
The simplest way to do this is to plug in a [custom tokenizer](../linguistics/linguistics.html).
That gets called from the query parser and bundled linguistics processing [Searchers](../applications/searchers.html)
as well as the [Document Processor](../applications/document-processors.html)
creating the annotations that are consumed by the indexing operation.
Since all that is Searchers and Docprocs which you can replace and/or add custom components before and after,
you can also take full control over these things without modifying the platform itself.

It provides the building blocks but not an out-of-the-box solution.
We can write a [Searcher](../applications/searchers.html) to detect query-side entities and rewrite the query,
and a [DocProc](../applications/document-processors.html) if we want to handle them in some special way on the indexing side.

You can write a document processor for text extraction, Vespa does not provide it out of the box.

[Imported fields](../schemas/parent-child.html) from parent documents are defined as [attributes](../content/attributes.html),
and have limited text match modes (i.e. `indexing: index`

cannot be used).
[Details](https://stackoverflow.com/questions/71936330/parent-child-mode-cannot-be-searched-by-parent-column).

If you have added vectors to your documents and queries, and see that the rank feature
closeness(field, yourEmbeddingField) produces 1.0 for all documents, you are likely using
[distance-metric](../reference/schemas/schemas.html#distance-metric): innerproduct/prenormalized-angular,
but your vectors are not normalized, and the solution is normally to switch to
[distance-metric: angular](../reference/schemas/schemas.html#angular)
or use
[distance-metric: dotproduct](../reference/schemas/schemas.html#dotproduct)
(available from Vespa 8.170.18
).

With non-normalized vectors, you often get negative distances, and those are capped to 0, leading to closeness 1.0. Some embedding models, such as models from sbert.net, claim to output normalized vectors but might not.

Plugins have to run in the JVM - [jython](https://www.jython.org/) might be an alternative,
however Vespa Team has no experience with it.
Vespa does not have a language like
[painless](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting-painless.html) -
it is more flexible to write application logic in a JVM-supported language, using
[Searchers](../applications/searchers.html) and [Document Processors](../applications/document-processors.html).

A [Searcher](../applications/searchers.html) intercepts a query and/or result.
To get a number of documents by id in a Searcher or other component like a [Document processor](../applications/document-processors.html),
you can have an instance of [com.yahoo.documentapi.DocumentAccess](../reference/applications/components.html#injectable-components)
injected and use that to get documents by id instead of the HTTP API.

Vespa uses Java 17 - it will support 20 some time in the future.

Use `System.out.println`

to write text to the [vespa.log](../reference/operations/log-files.html).

Vespa has a near real-time indexing core with typically sub-second latencies from document ingestion to being indexed.
This depends on the use-case, available resources and how the system is tuned.
Some more examples and thoughts can be found in the [scaling guide](../performance/sizing-search.html).

Vespa does not have a concept of "batch ingestion"
as it contradicts many of the core features that are the strengths of Vespa,
including [serving elasticity](../content/elasticity.html) and sub-second indexing latency.
That said, we have numerous use-cases in production
that do high throughput updates to large parts of the (sometimes entire) document set.
In cases where feed throughput is more important than indexing latency, you can tune this to meet your requirements.
Some of this is detailed in the [feed sizing guide](../performance/sizing-feeding.html).

Yes. The [content node](../content/proton.html) is implemented in C++
and not memory constrained other than what the operating system does.

If the replicas are in sync the request is only sent to the primary content node. Otherwise, it's sent to several nodes, depending on replica metadata. Example: if a bucket has 3 replicas A, B, C and A & B both have metadata state X and C has metadata state Y, a request will be sent to A and C (but not B since it has the same state as A and would therefore not return a potentially different document).

[Attribute](../content/attributes.html) (with or without `fast-search`

) is always in memory,
but does not support tokenized matching.
It is for structured data.
[Index](../basics/schemas.html#document-fields) (where there’s no such thing as fast-search since it is always fast)
is in memory to the extent there is available memory and supports tokenized matching.
It is for unstructured text.

It is possible to guarantee that fields that are defined with `index`

have both the dictionary and the postings in memory by changing from `mmap`

to `populate`

,
see [index > io > search](../reference/applications/services/content.html#index-io-search).
Make sure that the content nodes run on nodes with plenty of memory available,
during index switch the memory footprint will 2x.
Familiarity with Linux tools like `pmap`

can help diagnose what is mapped and if it’s resident or not.

Fields that are defined with `attribute`

are in-memory,
fields that have both `index`

and `attribute`

have separate data structures,
queries will use the default mapped on disk data structures that supports `text`

matching,
while grouping, summary and ranking can access the field from the `attribute`

store.

A Vespa query is executed in two phases as described in [sizing search](../performance/sizing-search.html),
and summary requests can touch disk (and also uses `mmap`

by default).
Due to their potential size there is no populate option here,
but one can define [dedicated document summary](../querying/document-summaries.html#performance)
containing only fields that are defined with `attribute`

.

The [practical performance guide](../performance/practical-search-performance-guide)
can be a good starting point as well to understand Vespa query execution,
difference between `index`

and `attribute`

and summary fetching performance.

Deleting documents, by using the [document API](../writing/reads-and-writes.html)
or [garbage collection](../schemas/documents.html#document-expiry) will increase the capacity on the content nodes.
However, this is not necessarily observable in system metrics -
this depends on many factors, like what kind of memory that is released,
when [flush](../content/proton.html#proton-maintenance-jobs) jobs are run and document [schema](../basics/schemas.html).

In short, Vespa is not designed to release memory once used.
It is designed for sustained high throughput, low latency,
keeping maximum memory used under control
using features like [feed block](../writing/feed-block.html).

When deleting documents, one can observe a slight increase in memory.
A deleted document is represented using a [tombstone](../operations/self-managed/admin-procedures.html#content-cluster-configuration),
that will later be removed, see [removed-db-prune-age](../reference/applications/services/content.html#removed-db-prune-age).
When running garbage collection,
the summary store is scanned using mmap and both VIRT and page cache memory usage increases.

Read up on [attributes](../content/attributes.html) to understand more of how such fields are stored and managed.
[Paged attributes](../content/attributes.html#paged-attributes) trades off memory usage vs. query latency
for a lower max memory usage.

A field is of type *index* or *attribute* - [details](../querying/text-matching.html#index-and-attribute).

Fields with *index* use no incremental memory at deployment, if the field has no value.

Fields with *attribute* use memory, even if the field value is not set,

Attributes are optimized for random access: To be able to jump to the value of any document in O(1) time.
That requires allocating a constant amount of memory (the value, or a pointer) per document,
regardless of whether there is a value.
In short, knowing that a value is unset is a value in itself for attributes,
so deploying new fields or new schemas with attributes will cause an incremental increase in memory.
Applications with many unused schemas and fields can factor this in when sizing for memory.
Refer to [attributes](../content/attributes.html#attribute-memory-usage) for details.

[Autoscaling](../operations/autoscaling.html) is the best guide to understand how to size and autoscale the system.
Container clusters are stateless and can be autoscaled more quickly than content clusters.

It is not possible to autoscale content clusters for 8x load increase in 5 minutes,
as this requires both provisioning and data migration.
Such use cases are best discussed with the Vespa Team to understand the resource bottlenecks,
tradeoffs and mitigations.
Also read [Graceful Degradation](../performance/graceful-degradation.html).

It depends. Vespa aims to adapt to resources (like auto thread config based on virtual node thread count)
and actual use (when to run maintenance jobs like compaction),
but there are tradeoffs that applications owners can/should make.
Start off by reading the [Vespa Serving Scaling Guide](../performance/sizing-search.html),
then run [benchmarks](../performance/benchmarking-cloud.html) and use the [dashboards](../operations/monitoring.html).

Yes, deployment is using this web service API,
which allows you to create an edit session from the currently deployed package,
make modifications, and deploy (prepare+activate) it: [deploy-rest-api-v2.html](../reference/api/deploy-v2.html).
However, this is only useful in cases where you want to avoid transferring data to the config server unnecessarily.
When you resend everything, the config server will notice that you did not actually change e.g. the node configs
and avoid unnecessary noop changes.

[Elasticity](../content/elasticity.html) is a core Vespa strength -
easily add and remove nodes with minimal (if any) serving impact.
The exact time needed depends on how much data will need to be migrated in the background
for the system to converge to [ideal data distribution](../content/idealstate.html).

You will need to load balance incoming requests between the nodes running the
[stateless Java container cluster(s)](overview.html).
This can typically be done using a simple network load balancer available in most cloud services.
This is included when using [Vespa Cloud](https://cloud.vespa.ai/),
with an HTTPS endpoint that is already load balanced - both locally within the region and globally across regions.

[Search sizing](../performance/sizing-search.html) is the intro to this.
Topology matters, and this is much used in the high-volume Vespa applications to optimise latency vs. cost.

With [Vespa Cloud](https://cloud.vespa.ai/),
we do automated background upgrades daily without noticeable serving impact.
If you host Vespa yourself, you can do this, but need to implement the orchestration logic necessary to handle this.
The high level procedure is found in [live-upgrade](../operations/self-managed/live-upgrade.html).

[Vespa Cloud](https://cloud.vespa.ai/en/reference/zones) has integrated support - query a global endpoint.
Writes will have to go to each zone. There is no auto-sync between zones.

Building indexes offline requires the partition layout to be known in the offline system, which is in conflict with elasticity and auto-recovery (where nodes can come and go without service impact). It is also at odds with realtime writes. For these reasons, it is not recommended, and not supported.

Use [visiting](../writing/visiting.html) to dump all or a subset of the documents.
See [data-management-and-backup](https://cloud.vespa.ai/en/data-management-and-backup) for more information.

Failure response will be given in case the document is not written on some replica nodes.

Yes, it will be available, eventually.
Also try [Multinode testing and observability](https://github.com/vespa-engine/sample-apps/tree/master/examples/operations/multinode).

Yes just add a `deleted`

attribute, add [fast-search](../content/attributes.html#fast-search) on it
and create a searcher which adds an `andnot deleted`

item to queries.

You can set a [transition-time](../reference/applications/services/content.html#transition-time) in services.xml
to configure the cluster controller how long a node is to be kept in maintenance mode
before being automatically marked down.

Grouped distribution is used to reduce search latency. Content is distributed to a configured set of groups, such that the entire document collection is contained in each group. Setting the redundancy and searchable-copies equal to the number of groups ensures that data can be queried from all groups.

Refer to [#17898](https://github.com/vespa-engine/vespa/issues/17898) for a discussion of options.

Use [/state/v1/version](../reference/api/state-v1.html#state-v1-version) to find Vespa version.

See [rollback](../applications/deployment.html#rollback) for options.

If deployment fails with error message "Deployment failed, code: 413 ("Payload Too Large.")" you might need to increase the config server's JVM heap size. The config server has a default JVM heap size of 2 Gb. When deploying an app with e.g. large models this might not be enough, try increasing the heap to e.g. 4 Gb when executing 'docker run …' by adding an environment variable to the command line:

```
docker run --env VESPA_CONFIGSERVER_JVMARGS=-Xmx4g <other options> <image>
```


When deploying an application package, with some kind of error, the endpoints might fail, like:

```
$ vespa deploy --wait 300
Uploading application package ... done
Success: Deployed target/application.zip
Waiting up to 5m0s for query service to become available ...
Error: service 'query' is unavailable: services have not converged
```


Another example:

```
[INFO] [03:33:48] Failed to get 100 consecutive OKs from endpoint ...
```


There are many ways this can fail, the first step is to check the Vespa Container:

```
$ docker exec vespa vespa-logfmt -l error
[2022-10-21 10:55:09.744] ERROR container
Container.com.yahoo.container.jdisc.ConfiguredApplication
Reconfiguration failed, your application package must be fixed, unless this is a JNI reload issue:
Could not create a component with id 'ai.vespa.example.album.MetalSearcher'.
Tried to load class directly, since no bundle was found for spec: album-recommendation-java.
If a bundle with the same name is installed,
there is a either a version mismatch or the installed bundle's version contains a qualifier string.
...
```


[Bundle plugin troubleshooting](../applications/bundles.html#bundle-plugin-troubleshooting) is a good resource
to analyze Vespa container startup / bundle load problems.

Using an M1 MacBook Pro / AArch64 makes the Docker run fail:

```
WARNING: The requested image’s platform (linux/amd64) does not match the detected host platform (linux/arm64/v8)
and no specific platform was requested
```


Make sure you are running a recent version of the Docker image, do `docker pull vespaengine/vespa`

.

Make sure all [Config servers](../operations/self-managed/configuration-server.html#troubleshooting) are started,
and are able to establish ZooKeeper quorum (if more than one) -
see the [multinode](https://github.com/vespa-engine/sample-apps/tree/master/examples/operations/multinode) sample application.
Validate that the container has [enough memory](../operations/self-managed/docker-containers.html).

The Config Server cluster with 3 nodes fails to start.
The ZooKeeper cluster the Config Servers use waits for hosts on the network,
the hosts wait for ZooKeeper in a catch 22 -
see [sampleapp troubleshooting](https://github.com/vespa-engine/sample-apps/tree/master/examples/operations#troubleshooting).

Use [vespa-logfmt](../reference/operations/self-managed/tools.html#vespa-logfmt) to dump logs.
If Vespa is running in a local container (named "vespa"), run `docker exec vespa vespa-logfmt`

.

See [encoding troubleshooting](../linguistics/troubleshooting-encoding.html)
for how to handle and remove control characters from the document feed.

[Deploy an application](../basics/deploy-an-application.html) to create a tenant and start your
[free trial](https://vespa.ai/free-trial/).
This tenant can be your personal tenant, or shared with others.
It can not be renamed.

If the tenant is already created, add more users to it. Click the "account" button in the Vespa Cloud Console (top right in the tenant view), then "users". From this view you can manage users in the tenant, and their roles - from here, you can add/set tenant admins.

When starting the free trial, you are asked to accept Terms of Service. For paid plans, this is covered by the contract.

Click "account", then "billing" in the console to enter information required for billing.
Use [Vespa Support](https://vespa.ai/support/) if you need to provide this information without console login.

Yes, contact [Vespa Support](https://vespa.ai/support/) to set it up.

See [node resources](../performance/node-resources) to assess current and auto-suggested resources
and [autoscaling](../operations/autoscaling.html) for how to automate.

Managing resources is easy, as most changes are automated.
Adding / removing / changing nodes starts automated data migration,
see [elasticity](../content/elasticity.html).

Schema changes might require data reindexing, which is automated, but takes some time.
Other schema changes require data refeed - [details](../reference/schemas/schemas.html#modifying-schemas)

Use the [Memory Visualizer](../performance/memory-visualizer.html) to evaluate how memory is allocated to the fields.
Fields can be `index`

, `attribute`

and `summary`

, and combinations of these,
with settings like `fast-search`

that affects memory usage.
[Attributes](../content/attributes.html) is a great read for understanding Vespa memory usage.

Listing archived objects can fail,
e.g. `gsutil -u my_project ls gs://vespa-cloud-data-prod-gcp-us-central1-f-12345f/my_tenant`

can fail with
```
AccessDeniedException: 403 me@mymail.com does not have serviceusage.services.use access to the Google Cloud project.
Permission \'serviceusage.services.use\' denied on resource (or it may not exist).
```

This can be due to missing rights on your Google project (my_project in the example above)
- from the Google documentation:
*"The user account accessing the Cloud Storage Bucket must be granted the Service Usage Consumer role
(see https://cloud.google.com/service-usage/docs/access-control)
in order to charge the specified user project for the bucket usage cost"*

Vespa Cloud applications have a Prometheus endpoint.
Find guides for how to integrate with Grafana and AWS Cloudwatch at [monitoring](../operations/monitoring.html).

Vespa Cloud has detailed dashboards linked from the *monitoring* tab in the Console,
one for each zone the instance is deployed to.

Vespa is normally upgraded daily. There are exceptions, like holidays and weekends.
During upgrades, nodes are stopped one-by-one per cluster.
As all clusters have one redundant node, serving and write traffic is not impacted by upgrades.
Before the upgrade, the application's [system and staging tests](../operations/automated-deployments.html) are run,
halting the upgrade if they fail.
Documents are re-migrated to the upgraded node before doing the next node,
see [Elastic Vespa](../content/elasticity.html) for details.

Issues like Feed Blocked, Deployment and Deprecation warnings show up in the console. There are no warnings on redundancy level / searchable copies, as redundant document buckets are activated for queries automatically, and auto data-migration kicks in for node failures / replacements.

The management of data stored in an application running on Vespa Cloud is the responsibility of the application owner and, as such, Vespa Cloud does not have any retention policy for this data as long as it is stored by the application.

The following data retention policies applies to Vespa Cloud:

Yes, Vespa.ai has a SOC 2 attestation: [Trust Center](https://trust.vespa.ai).

Read more in [GDPR](https://cloud.vespa.ai/en/gdpr).

Vespa is most often used for queries in data written from the information sources, although it can also be used without data, e.g. for model serving. It is the application owner that writes the integration with Vespa Cloud to write data.

Vespa Cloud uses the following Cloud providers:

The storage devices are encrypted per Cloud provider, at rest.

See the [security guide](../security/guide.html) for roles and permissions.
The Vespa Cloud Console has a log view tool,
and logs / access logs can be exported to the customer's AWS account easily.
Deployment operations are tracked in the deployment view, with a history.
Vespa Cloud Operators do not have node access, unless specifically granted by the customer, audit logged.

At termination, all application instances are removed, with data, before the tenant can be deactivated.

In `dev`

zones we use shared resources hence have more than one node on each host/instance.
In order to provide a best possible overall responsiveness we do not restrict CPU resources for the individual application nodes.

---

## Source: https://docs.vespa.ai/en/learn/glossary.html

This is a glossary of both Vespa-specific terminology, and general terms useful in this context.

**Application**

The unit of deployment and management.
It can contain any number of clusters and schemas etc., but all deployed together.
The files defining the application is called [Application Package](../basics/applications.html).

**Attribute**

An attribute is a field with properties other than an indexed field.
Attribute fields have flexible match modes, including exact match, prefix match, and case-sensitive matching.
Attributes enable high sustained update rates by writing directly to memory without disk access.
Features like Grouping, Sorting, and [Parent/Child](#parent-child) use attributes.

**Boolean Search**

Use [Predicate fields](../schemas/predicate-fields.html)
to match queries to a set of boolean constraints in documents.
The typical use case is to have a set of boolean constraints
representing advertisements, specifying their target groups.
Example: `hobby in [Music, Hiking] and age in [20..30]`

.

**Cluster**

A set of homogenous nodes which all perform the same task. Vespa has two types: Container clusters are stateless, and content clusters store and process the data.

**Component**

Components extend a base class from the Container code module;
some are [Chained](../applications/chaining.html) for execution.
The component types are:

**Configuration Server**

The configuration server hosts most of the control plane of Vespa,
where application packages are deployed to - often shortened to "config server".
Config servers are deployed as one or in a cluster - see [overview](overview.html).
The config server serves configuration for all Vespa processes,
and is normally the first cluster started.

**Container**

Vespa's Java container, hosting all application components as well as the stateless logic of Vespa itself.
Read more in [Container](../applications/containers.html).
Not to be confused with [Docker Containers](#docker).

**Content Node**

Content nodes are stateful and holds the document and index data -
see [content nodes](../content/content-nodes.html).
These nodes implement Vespa's [elasticity](../content/elasticity.html)
for seamless data migration and scaling.

**Control Plane**

The deploy-commands are Vespa's control plane.
The control plane is often secured with other credentials than the [data plane](#data-plane).
Often low throughput and used by automation like GitHub Actions to deploy new versions
of application packages.

**Data Plane**

Document and Query APIs make the Vespa Data plane.
Also see [control plane](#control-plane).
Often high throughout / low latency, as this is user-serving.

**Deploy**

`deploy`

is a control-plane command to upload and activate a new version of an
[application package](#application).

**Deployment**

A deployment is a running Vespa application,
created by using [deploy](#deploy).

**Diversity**

Result diversity means having diverse results in the result set.
As an example, not return the n highest ranking results, but eliminate similar hits, e.g. from the same domain.
Refer to [diversity](../reference/schemas/schemas.html#diversity) and
[grouping](../querying/grouping.html) for features to eliminate similar hits or group them together.

**Docker**

Vespa is available as a container image from
[hub.docker.com](https://hub.docker.com/r/vespaengine/vespa).
Products to run this image include Docker, Podman and runC,
and it enables users to run Vespa in a well-defined environment on multiple platforms.
Read more in [Docker Containers](../operations/self-managed/docker-containers.html).

**Document**

Vespa models data as documents.
A document has a string identifier, set by the application, unique across all documents.
A document is a set of key-value pairs.
A document has a [Schema](#schema).
Read more in [Documents](../schemas/documents.html).

**Document frequency (normalized)**

The *document frequency* of a term captures how often the term occurs in the document corpus
relative to the total number of documents.
For ranking purposes this value is always normalized so that it is in the range [0, 1].
For example, if a term occurs in 600 out of 1000 documents, its normalized document
frequency will be \(600/1000 = 0.6\).

From an information retrieval perspective, the normalized document frequency gives a measure
of how common (or rare) a term is. Query terms that occur rarely (thus having a low document
frequency) are usually expected to be more *relevant* to the query, since they are
more specific. On the other end, very common terms (with high document frequency) are often
considered to be "stopwords" (such as "the", "an" etc.), and are expected to have a low
contribution to query relevance. This is directly related to
[inverse document frequency](https://en.wikipedia.org/wiki/Tf%E2%80%93idf#Inverse_document_frequency),
which is used by classic text ranking algorithms such as [tf-idf](https://en.wikipedia.org/wiki/Tf%E2%80%93idf)
and [BM25](../ranking/bm25.html).

**Document summary**

A [document summary](../querying/document-summaries.html)
is the information that is shown for each document in a query result.
What information to include is determined by a document summary class:
A named set of fields with config on which information they should contain.
When Vespa stores a document, it is written to the [document store](../content/proton.html#document-store)
and used to generate summaries.
The document store is scanned when using [streaming search](../performance/streaming-search.html).

**Document Processor**

Document processing is a framework to create chains of configurable [Components](#component)
that read and modify document operations.
A Document Processor uses `getFieldValue()`

and `setFieldValue()`

to process fields,
alternatively using generated code from [Concrete Documents](../schemas/concrete-documents.html).

**Document Type**

The data type part of a [Schema](#schema) - a collection of fields.

**Elasticity**

Vespa's clusters are elastic - a user can add or remove nodes on running applications without service disruption.
For the stateful content nodes, this causes data sync between nodes for uniform distribution,
with minimal data re-distribution. Read more in [Elasticity](../content/elasticity.html).

**Enclave**

Vespa Cloud Enclave is a feature to run your Vespa application in Vespa Cloud in your own AWS or GCP account,
see the [Enclave documentation](../operations/enclave/enclave).

**Embedding**

A common technique in modern big data serving applications is to map the subject data - say, text or images -
to points in an abstract vector space and then do computation in that vector space.
For example, retrieve similar data by finding nearby points in the vector space,
or using the vectors as input to a neural net.
This mapping is usually referred to as *embedding*,
and Vespa provides [built-in support](../rag/embedding.html) for this.

**Estimated hit ratio**

When Vespa plans how a query should be evaluated in the most efficient way
possible, one of the most important pieces of information is how many *hits*
different parts of the query will produce. The estimated hit ratio is a normalized
number in the range [0, 1] that states the proportion of documents that is expected
to match a given part of the query.

For example, a query with an `AND`

operator over multiple terms will benefit
by having the query planner place the term with the *lowest* estimated hit
ratio *first* in the AND's evaluation order. This is because that term will be
the cheapest to evaluate (least number of candidate documents to iterate over), and all
other terms can be excluded as a possible match if it doesn't match.

**Federation**

The [Container](#container) allows multiple sources of data
to be [federated](../querying/federation.html) to a common search service.
The sources of data may be both search clusters, or external services,
backed by Vespa or any other kind of service.
The container may be used as a pure federation platform
by setting up a system consisting solely of container nodes federating to external services.

**Field**

Documents have [Fields](../basics/schemas.html#document-fields).
A field has a type, and a field contained in a document can be written to, read from and queried.
A field can also be generated (i.e. a synthetic field) -
in this case, the field definition is outside the document - [example](/en/writing/indexing.html#date-indexing).
A field can be singlevalue, like a string, or multivalue, like an array of strings.

**Fieldset**

The term *fieldset* has two meanings in Vespa:

**Garbage Collection**

Use a [Document Selection](../reference/applications/services/content.html#document.selection)
to [auto-expire](../schemas/documents.html#document-expiry) documents by time or any other criterion.

**Grouping**

Vespa Grouping is a list processing language which describes how the query hits should be grouped,
aggregated and presented in result sets.
A grouping statement takes the list of all matches to a query as input and groups/aggregates it,
possibly in multiple nested and parallel ways to produce the output.
[Read more](../querying/grouping.html).

**Handler**

Also called *Request Handler*.
A handler is a [Component](#component) used to build API endpoints on the [Container](#container).
Find documentation at [developing request handlers](../applications/request-handlers.html),
and [example use](https://github.com/vespa-engine/sample-apps/tree/master/model-inference/src/main/java/ai/vespa/example).

**Indexing**

The process of creating index structures.
This includes routing document writes to indexing processors,
processing (indexing) documents and writing the documents to content clusters.
Settings like [streaming search](#streaming-search) do not create indices to optimize resource usage.

**Instance**

*Instance* is always "default" in Vespa.ai
(i.e. there is only one) -
managed services like [Vespa Cloud](https://cloud.vespa.ai/) support multiple,
[read more](tenant-apps-instances.html).
An instance is a deployment of an application for a given purpose, like production serving -
multiple instances of an application can be used to support more use cases like integration testing.

**Namespace**

A segment of [Document IDs](#document)
which helps you generate unique ids also if you have multiple sources of unique values.
Namespace can be used to [Visit](#visit) a subspace of the corpus.

**Nearest neighbor search**

[Nearest neighbor search](../querying/nearest-neighbor-search),
or [vector search](../querying/vector-search-intro.html),
is a technique used to find the closest data points to a given query point in a high-dimensional vector space -
see [distance metric](../querying/nearest-neighbor-search#distance-metrics-for-nearest-neighbor-search).
It can be exact or approximate.
This is supported in Vespa using the
[nearestNeighbor](../reference/querying/yql.html#nearestneighbor) query operator.

**Node**

A Node is a host / container instance running one or more [Services](#service).
The mapping from logical to actual name is configured in [hosts.xml](../reference/applications/hosts.html).

**Parent / Child**

Using document references, documents can have [parent/child](../schemas/parent-child.html) relationships.
Use this to join data by importing fields from parent documents.
Parent documents are replicated to all nodes in the cluster.

**Partial Update**

A partial update is an update to one or more fields in a document.
It also includes updating all index structures,
so the effect of the partial update is immediately observable in queries.
Partial updates do not require the full document,
and enables a high write throughput with memory-only operations.
[Read more](../writing/partial-updates.html).

**Posting List**

A posting list is a fundamental data structure in information retrieval and search engines.
It is used in inverted indexes to store the occurrences of a term in a collection of documents.
[Read more](../performance/feature-tuning.html#posting-lists).

**Quantization**

Quantization is the process of constraining an input
from a continuous or otherwise large set of values (such as the real numbers)
to a discrete set (such as the integers).
It is a way to reduce memory and CPU usage for [tensor operations](#tensor)
in [nearest neighbor search](#nearest-neighbor-search),
to improve throughput or latencies.

**Query**

Use the [Query API](../querying/query-api.html) to query the corpus.
Queries are written in [YQL](../reference/querying/yql.html),
or can be created programmatically in a [Searcher](#searcher).
Configure query execution in a [Query Profile](../querying/query-profiles.html).

**Ranking**

Ranking is where Vespa does computing, or inference over documents.
The computations to be done are expressed in functions called
[Ranking Expressions](../ranking/ranking-expressions-features.html#ranking-expressions),
bundled into [Rank Profiles](../basics/ranking.html#rank-profiles) defined in a [Schema](#schema).
These can range from simple math expressions combining some rank features,
to tensor expressions or large machine-learned models.
Ranking can be single- or [multiphased](../ranking/phased-ranking.html).

**Schema**

A description of a particular type of data and how to process/rank it.
See the [Schema guide](../basics/schemas.html).

**Searcher**

A searcher is a [Component](#component) - usually deployed as part of an OSGi bundle.
All Searchers must implement a single method `search(query)`

.
Developers implement application query logic in Searchers -
[read more](../applications/searchers.html).

**Semantic search**

Semantic search denotes search with meaning,
as distinguished from lexical search where the search engine looks for literal matches of the query words.
Read [
Revolutionizing Semantic Search with Multi-Vector HNSW Indexing](https://blog.vespa.ai/semantic-search-with-multi-vector-indexing/)
for more details on semantic search, pointers to resources, and how to implement it.

**Service**

A Service runs in a [Cluster](#cluster) of container or content nodes,
configured in [services.xml](../reference/applications/services/services.html).

**Streaming search**

[Streaming search](../performance/streaming-search.html) is querying fields that do not have an index structure.
The indexing cost is minimal as no index is generated.
A query is hence a scan over all data, and normally slower than using index structures.
Streaming search is used for applications like personal search, where the searched data volume is small.
It can be a powerful option to drastically limit memory use in nearest-neighbor applications
where the possible neighbor set it orders of magnitude smaller than the total.

**Tenant**

An organizational unit that owns [applications](#application).
In Vespa.ai APIs, *tenant* and *application* are always "default",
and a Vespa system has exactly one tenant
and one application.
On [Vespa Cloud](https://cloud.vespa.ai/),
multiple tenants and applications is supported -
[read more](tenant-apps-instances.html).

**Tensor**

A [Tensor](../ranking/tensor-user-guide.html) is a data structure which generalizes scalars, vectors and matrices
to any number of dimensions:
A scalar is a tensor of rank 0, a vector is a tensor of rank 1, a matrix is a tensor of rank 2.
Tensors consist of a set of scalar valued cells, with each cell having a unique address.
A cell's address is specified by its index or label in all the dimensions of that tensor.
The number of dimensions in a tensor is the rank of the tensor,
each dimension can be either mapped or indexed.

**Visit**

[Visit](../writing/visiting.html) is a feature to efficiently get or process a set of / all documents,
identified by a [Document Selection Expression](../reference/writing/document-selector-language.html).
Visit iterates over all, or a set of, buckets and sends documents to a (set of) targets.

---

## Source: https://docs.vespa.ai/en/learn/releases.html

Vespa is released every Monday through Thursday. Each public release has passed all functional and performance tests, and all cloud applications are automatically upgraded to it.

For each Vespa release, the following artifacts are provided:

Releases:

Use the [Vespa Factory](https://factory.vespa.ai/releases)
to inspect the commits in each release:

Vespa uses [semantic versioning](https://semver.org/).
Each release is backwards compatible and supports live migration on running systems, provided they
are running a version which is less than 2 months old.
It is therefore a minor version number change. All new features are released on such minor versions.
Every second year or so we make a major version change which removes previously deprecated
functionality.

Java APIs, web service APIs and all application package constructs are supported through a major release and only removed on a new release if they are already marked deprecated.

Use of deprecated Java APIs will cause a warning on compilation, and use of deprecated application package constructs will cause a deprecation warning on deployment. Note that Java APIs come in two categories:

Check the Javadoc list to verify that you are using public packages.

In addition, some public Java classes and methods are marked with the com.yahoo.api.annotations.Beta tag. These are under development and may still change before they stabilize.

Data written to Vespa is compatible between adjacent releases. For self-hosted systems, it may be necessary to upgrade through each minor release rather than in larger leaps to ensure Vespa can read existing data. This is a good practice in any case.

---

## Source: https://docs.vespa.ai/en/learn/tenant-apps-instances.html

When registering for Vespa Cloud, a *tenant* is created.
Tenant is the billable unit, and most often represents an organization.
A tenant has one or more *applications* with one or more *instances*:

Instances are used for different use cases,
and are deployed to a set of [zones](../operations/zones.html) - example:

The *Application* has a "default" instance serving queries from two *production* zones.
It has an "integration" instance with another dataset, used for other applications to interface a
production-like, stable interface.
Finally, a developer has deployed the "bob" instance to a *dev* zone to further develop plugin code.

Deployments to production zones are specified in [deployment.xml](../reference/applications/deployment.html).
Deployments to the manual *dev* zones are normally done directly from a developer computer for rapid code and config development.
Read more in [Automated deployments](../operations/automated-deployments.html).

The service configuration is specified in [services.xml](../reference/applications/services/services.html)
and is composed of individually sized *clusters*.
A cluster is deployed to a set of *nodes* with *resources* specified.

The tenant name cannot be changed - create a new tenant, or contact Vespa Support.

Tenants in trial are auto-expired once trial is completed. Move to a paid plan to keep applications and data.

It is not possible to auto-migrate applications and data between tenants.
To move an application to a new tenant, re-deploy the application with the new tenant name,
see [cloning applications and data](../cloud/cloning-applications-and-data).

---

## Source: https://docs.vespa.ai/en/learn/migrating-to-cloud.html

Migrating a Vespa application to Vespa Cloud is straightforward, as applications on Vespa Cloud supports all the same features as your self-hosted Vespa instances, you're just gaining some new capabilities and avoid the operational work.

The high-level process is as follows:

The rest of this guide assumes you have a [tenant](tenant-apps-instances.html) ready for deployment:

```
$ export VESPA_TENANT_NAME=mytenant
```


**Prerequisites:**

$ podman machine init --memory 6000 $ podman machine start

`NO_SPACE`

- the vespaengine/vespa container image + headroom for data requires disk space.
An [application package](../basics/applications.html) from a self-hosted system
can be deployed with minor modifications to the Vespa Cloud `dev`

environment.

The root of an application package might look at this:

```
├── schemas
│ └── doc.sd
└── services.xml
```


There are often more files, the above is a minimum. This is the root of the application package - make this the current working directory:

```
$ cd /location/of/app/package
```


Make sure the Vespa CLI is installed, see pre-requisites above:

```
$ vespa
Usage:
vespa [flags]
vespa [command]
```


Configure the local environment and log in to Vespa Cloud:

```
$ vespa config set target cloud && \
vespa config set application $VESPA_TENANT_NAME.myapp && \
vespa auth login
```


Create and get security credentials:

```
$ vespa auth cert
```


This will add the `security`

directory to the application package,
and add a public certificate to it:

```
├── schemas
│ └── doc.sd
├── security
│ └── clients.pem
└── services.xml
```


The command also installs a key/certificate pair in the Vespa CLI home directory, see
[vespa auth cert](../reference/clients/vespa-cli/vespa_auth_cert.html).
This pair is used in subsequent accesses to the data plane for document and query operations.

Add [deployment.xml](../reference/applications/deployment.html#deployment) with your cloud provider account -
This ensures the deployment uses resources from the correct account - examples:

```
<deployment version="1.0" cloud-account="gcp:project-name">
<dev />
</deployment>
```


```
<deployment version="1.0" cloud-account="aws:123456789012">
<dev />
</deployment>
```


The application package should look like:

```
├── deployment.xml
├── schemas
│ └── doc.sd
├── security
│ └── clients.pem
└── services.xml
```


`hosts.xml`

is not used in Vespa Cloud, remove it.

Edit the `<nodes>`

configuration in `services.xml`

- from:

```
<container id="default" version="1.0">
<document-api/>
<document-processing/>
<search/>
<nodes>
<node hostalias="node4" />
<node hostalias="node5" />
</nodes>
</container>
```


to:

```
<container id="default" version="1.0">
<document-api/>
<document-processing/>
<search/>
<nodes count="2">
<resources vcpu="2" memory="8Gb" disk="50Gb"/>
</nodes>
</container>
```


In short, this is the Vespa Cloud syntax for resource specifications.

Example, migrating from a cluster using `c7i.2xlarge`

instance type,
with a 200G disk - from the AWS specifications:

```
c7i.2xlarge 8 16 EBS-Only
```


Equivalent Vespa Cloud configuration:

```
<resources vcpu="8" memory="16Gb" disk="200Gb"/>
```


Repeat this for all clusters in `services.xml`

. Notes:

`dev`

environment, what is `count=2`

is best practise at this point.At this point, the local environment and the application package is ready for deployment:

```
$ vespa deploy --wait 600
```


Please note that a first-time deployment normally takes a few minutes, as resources are provisioned.

At this point, we recommend opening the console to observe the deployed application.
The link will be `https://console.vespa-cloud.com/tenant/mytenant/application/myapp/dev/instance/default`

(replace with your own names) - this is also easily found in the console main page:

Refer to [vespa8 release notes](../reference/release-notes/vespa8.html) for troubleshooting
in case the deployments fails, based on a Vespa 7 (or earlier) version.

The endpoints are shown in the console, one can also list them like:

```
$ vespa status query
Container default at https://aa1c1234.b225678e.z.vespa-app.cloud/ is ready
```


Test the query endpoint, expect `totalCount: 0`

:

```
$ vespa query 'select * from sources * where true'
```


```
{
"root": {
"id": "toplevel",
"relevance": 1.0,
"fields": {
"totalCount": 0
},
```


In the `services.xml`

examples at the start of this guide,
both `<search>`

and `<document>`

and configured in the same cluster, named `default`

.
In case of multiple container clusters, select the one configured with `<search>`

:

```
vespa query 'select * from sources * where true' --cluster myquerycluster
```


Finally, feed a document to the cluster (this is the cluster configured with `<document>`

)

```
vespa feed mydoc.jsonl --cluster myfeedcluster
```


Redo the query and observe nonzero `totalCount`

.

This is the final step in the functional validation. Please note:

`dev`

expire after 7 days of inactivity,
i.e., 7 days after the last deployment.

---

## Source: https://docs.vespa.ai/en/learn/migrating-from-elastic-search.html

This is a guide for how to move data from Elasticsearch to Vespa. By the end of this guide you will have exported documents from Elasticsearch, generated a deployable Vespa application package and tested this with documents and queries.

**Prerequisites:**

$ podman machine init --memory 6000 $ podman machine start

`NO_SPACE`

- the vespaengine/vespa container image + headroom for data requires disk space.
To get started, [sign up](https://vespa.ai/free-trial/) to get an endpoint to deploy to.
Set the *tenant name* from the signup:

$ export TENANT_NAME=vespa-team # Replace with your tenant name

Alternatively, [test with local deployment](#test-with-local-deployment).

This section sets up an index with 1000 sample documents using
[getting-started-index](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/getting-started-index.html).
Skip this part if you already have an index.
Wait for Elasticsearch to start:

$ docker network create --driver bridge esnet $ docker run -d --rm --name esnode --network esnet -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" \ docker.elastic.co/elasticsearch/elasticsearch:7.10.2 $ while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:9200)" != "200" ]]; do sleep 1; echo 'waiting ...'; done

Download test data, and feed it to the Elasticsearch instance:

$ curl 'https://raw.githubusercontent.com/elastic/elasticsearch/7.10/docs/src/test/resources/accounts.json' \ > accounts.json $ curl -H "Content-Type:application/json" --data-binary @accounts.json 'localhost:9200/bank/_bulk?pretty&refresh'

Verify that the index has 1000 documents:

$ curl 'localhost:9200/_cat/indices?v'

This guide uses [ElasticDump](https://github.com/elasticsearch-dump/elasticsearch-dump)
to export the index contents and the index mapping.
Export the documents and mappings, then delete the Docker network and the Elasticsearch container:

$ docker run --rm --name esdump --network esnet -v "$PWD":/dump -w /dump elasticdump/elasticsearch-dump \ --input=http://esnode:9200/bank --output=bank_data.json --type=data $ docker run --rm --name esdump --network esnet -v "$PWD":/dump -w /dump elasticdump/elasticsearch-dump \ --input=http://esnode:9200/bank --output=bank_mapping.json --type=mapping $ docker rm -f esnode && docker network remove esnet

[ES_Vespa_parser.py](https://github.com/vespa-engine/vespa/tree/master/config-model/src/main/python)
is provided for conversion of Elasticsearch data and index mappings to Vespa data and configuration.
It is a basic script with minimal error checking -
it is designed for a simple export, modify this as needed for your application's needs.
Generate Vespa documents and configuration:

$ curl 'https://raw.githubusercontent.com/vespa-engine/vespa/master/config-model/src/main/python/ES_Vespa_parser.py' \ > ES_Vespa_parser.py $ python3 ./ES_Vespa_parser.py --application_name bank bank_data.json bank_mapping.json

This generates documents in *documents.json*
(see [JSON format](../reference/schemas/document-json-format.html))
where each document has IDs like this `id:bank:_doc::1`

.
It also generates a *bank* folder with an [application package](../basics/applications.html):

/bank │ ├── documents.json ├── hosts.xml ├── services.xml └── /schemas └── _doc.sd

Enter the application package directory:

$ cd bank

Install [Vespa CLI](/en/clients/vespa-cli.html).
In this example we use [Homebrew](https://brew.sh/),
you can also download from [GitHub](https://github.com/vespa-engine/vespa/releases):

$ brew install vespa-cli

Configure for Vespa Cloud deployment, log in and add credentials:

$ vespa config set target cloud $ vespa config set application $TENANT_NAME.myapp.default

$ vespa auth login

$ export VESPA_CLI_HOME=$PWD/.vespa TMPDIR=$PWD/.tmp $ mkdir -p $TMPDIR $ vespa config set target cloud $ vespa config set application vespa-team.migration $ export VESPA_CLI_API_KEY="$(echo "$VESPA_TEAM_API_KEY" | openssl base64 -A -a -d)"

$ vespa auth cert

Also see [getting started](../basics/deploy-an-application.html) guide.
Deploy the application package:

$ vespa deploy --wait 300

Index the documents exported from Elasticsearch:

$ vespa feed documents.json

Export all documents:

$ vespa visit

Get a document:

$ vespa document get id:bank:_doc::1

Count documents, find `"totalCount":1000`

in the output:

$ vespa query 'select * from _doc where true'

Run a simple query against the *firstname* field:

$ vespa query 'select firstname,lastname from _doc where firstname contains "amber"'

Review the differences in document records, Vespa to the right:

{ "_index": "bank", "_type": "_doc", "_id": "1", "_score": 1, "_source": { "account_number": 1, "balance": 39225, "firstname": "Amber", "lastname": "Duke", "age": 32, "gender": "M", "address": "880 Holmes Lane", "employer": "Pyrami", "email": "amberduke@pyrami.com", "city": "Brogan", "state": "IL" } } |
{ "put": "id:bank:_doc::1", "fields": { "account_number": 1, "balance": 39225, "firstname": "Amber", "lastname": "Duke", "age": 32, "gender": "M", "address": "880 Holmes Lane", "employer": "Pyrami", "email": "amberduke@pyrami.com", "city": "Brogan", "state": "IL" } } |

The [id](../schemas/documents.html#document-ids) field
`id:bank:_doc::1`

is composed of:

`bank`

`_doc`

`1`

Read more in [Documents](../schemas/documents.html) and
[Schemas](../basics/schemas.html).
The schema is the key Vespa configuration file where field types
and [ranking](../basics/ranking.html) are configured.
The schema (found in `schemas/_doc.sd`

) also has
[indexing](../basics/schemas.html#document-fields) settings, example:

search _doc { document _doc { field account_number type long { indexing: summary | attribute } field address type string { indexing: summary | index } ... } }

These settings impact both performance and how fields are matched.
For example, the *account_number* above is using the *attribute* keyword,
which makes the field available for [sorting](../reference/querying/sorting-language.html),
[ranking](../basics/ranking.html), [grouping](../querying/grouping.html),
but which by default does not have data structures for fast search.
Read more in [attributes](../content/attributes.html) and
[
practical search performance guide](../performance/practical-search-performance-guide).

To run the steps above, using a local deployment,
follow the steps in the [quickstart](../basics/deploy-an-application-local.html)
to start a local container running Vespa.
Then, deploy the application package from the *bank* folder.

---

## Source: https://docs.vespa.ai/en/learn/about-documentation.html

The Vespa documentation ([https://docs.vespa.ai/](https://docs.vespa.ai/)) provides all the information required
to use all Vespa features and deploy them in any supported environment.

It is split into guides and tutorials, which explains features and how to use them to solve problems, and reference documentation which list complete information about all features and APIs.

The Vespa platform is open source, and can be deployed in self-managed systems and on the Vespa Cloud service. Some add-ons (but no core functionality) are only available under a commercial license.

Documents that describe functionality with such limited applicability are clearly marked by one or more of the following chips:

| Vespa Cloud This content is applicable to Vespa Cloud deployments. | Only applicable to Vespa Cloud deployments. |
| Self-managed This content is applicable to self-managed Vespa systems. | Only applicable to self-managed deployments. |
| Enterprise Not open source: This functionality is only available commercially. | Not open source: Available commercially only (both self-managed and on cloud unless also marked by one of the other chips above). |

For clarity, any document *not* marked with any of these chips describes functionality that is
open source and available both on Vespa Cloud and self-managed deployments.

If you find errors or want to improve the documentation,
[create an issue](https://github.com/vespa-engine/vespa/issues) or
[contribute a fix](contributing). See the [README](https://docs.vespa.ai/README.md)
before contributing.

*Italic* is used for:

`Constant Width`

is used for:

Commands meant to be run on the command line are shown like this, prepended by a $ for the prompt:

```
$ export PATH=$VESPA_HOME/bin:$PATH # how to highlight text in <pre>
```

Notes and other Important pieces of information are shown like:

---

## Source: https://docs.vespa.ai/en/learn/contributing.html

Contributions to [Vespa](http://github.com/vespa-engine/vespa)
and the [Vespa documentation](http://github.com/vespa-engine/documentation)
are welcome.
This document tells you what you need to know to contribute.

All work on Vespa happens directly on GitHub,
using the [GitHub flow model](https://docs.github.com/en/get-started/quickstart/github-flow).
We release the master branch a few times a week, and you should expect it to almost always work.
In addition to the [builds seen on factory.vespa.ai](https://factory.vespa.ai)
we have a large acceptance and performance test suite which
is also run continuously.

All pull requests are reviewed by a member of the Vespa Committers team. You can find a suitable reviewer in the OWNERS file upward in the source tree from where you are making the change (the OWNERS have a special responsibility for ensuring the long-term integrity of a portion of the code). If you want to become a committer/OWNER making some quality contributions is the way to start.

We require all pull request checks to pass.

Vespa uses semantic versioning - see [vespa versions](releases.html).
Notice in particular that any Java API in a package having a @PublicAPI
annotation in the package-info file cannot be changed in an incompatible way
between major versions: Existing types and method signatures must be preserved
(but can be marked deprecated).

We track issues in [GitHub issues](https://github.com/vespa-engine/vespa/issues).
It is fine to submit issues also for feature requests and ideas, whether you intend to work on them or not.

There is also a [ToDo list](https://github.com/vespa-engine/vespa/blob/master/TODO.md) for larger things
which no one are working on yet.

If you have questions, want to share your experience or help others,
please join our community on the [Vespa Slack](https://slack.vespa.ai),
or see Vespa on [Stack Overflow](http://stackoverflow.com/questions/tagged/vespa).

---

## Source: https://docs.vespa.ai/en/applications/developer-guide.html

This document explains how to develop applications, including basic terminology,
tips on using the Vespa Cloud Console, and how to benchmark and size your application.
See [deploy a sample application](../basics/deploy-an-application.html) to deploy a basic sample application, and
[automated deployments](../operations/automated-deployments.html) on making production deployments safe routine occurences.

Developers will typically deploy their application to the `dev`

[zone](../operations/zones.html)
during development. Each deployment is owned by a *tenant*, and each specified *instance* is
a separate copy of the application; this lets developers work on independent copies of the same application,
or collaborate on a shared one, as they prefer—more details [here](../learn/tenant-apps-instances.html).
These values can be set in the Vespa Cloud UI when deploying, or with each of the build and deploy tools,
as shown in the respective getting-started guides.

Additionally, a deployment may specify a different [zone](../operations/zones.html) to deploy to,
instead of the default `dev`

zone.

Deployments to `dev`

are downscaled to one small node by default, so that
applications can be deployed there without changing `services.xml`

.
See [performance testing](#performance-testing) for how to disable auto downsizing
using `deploy:environment="dev"`

.

The `dev`

zone is a sandbox and not for production serving; It has no uptime guarantees.

An automated Vespa software upgrade can be triggered at any time,
and this may lead to some downtime if you have only one node per cluster
(as with the default [auto downsizing](#auto-downsizing)).

For performance testing, to avoid auto downsizing,
lock the [resources](../reference/applications/services/services.html) using `deploy:environment="dev"`

:

Read more in [benchmarking](../performance/benchmarking-cloud.html) and
[variants in services.xml](../operations/deployment-variants.html).

Application packages can contain Java components to be run in container clusters. The most common component types are:

Components are constructed by dependency injection and are reloaded safely on deployment without restarts.
See the [container documentation](containers.html) for more details.

See [deploy an application having Java components](../basics/deploy-an-application-java.html),
and [troubleshooting](../operations/self-managed/admin-procedures.html#troubleshooting).

The development cycle consists of creating the component,
deploying the application package to Vespa, writing tests, and iterating.
These steps refer to files in
[
album-recommendation-java](https://github.com/vespa-engine/sample-apps/tree/master/album-recommendation-java):

| Build |
All the Vespa sample applications use the | |
|---|---|---|
| Configure |
A key Vespa feature is code and configuration consistency,
deployed using an
The Maven target
After generating config classes, they will resolve in tools like
| |
| Tests |
Examples unit tests are found in
Read more in |

Vespa Cloud does not allow debugging over the *Java Debug Wire Protocol (JDWP)* due to the protocol's inherent lack of security measures.
If you need interactive debugging, deploy your application to a self-hosted Vespa installation (below)
and manually [add the JDWP agent to JVM options](#debugging-components).

You may debug your Java code by requesting either a JVM heap dump or a Java Flight Recorder recording through the
[Vespa Cloud Console](https://console.vespa-cloud.com/). Go to your application's cluster overview and select
*export JVM artifact* on any *container* node. The process will take up to a few minutes.
You'll find the steps to download the dump on the Console once it's completed.
Extract the files from the downloaded Zstandard-compressed archive, and use the free
[JDK Mission Control](https://www.oracle.com/java/technologies/jdk-mission-control.html) utility to inspect
the dump/recording.

To debug a [Searcher](searchers.html) /
[Document Processor](document-processors.html) /
[Component](components.html) running in a self-hosted container,
set up a remote debugging configuration in the IDEA - IntelliJ example:

`+`

to add a new configuration.```
<container id="default" version="1.0">
<nodes>
<jvm options="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" />
```

```
$ docker run --detach --name vespa --hostname vespa-container \
--publish 127.0.0.1:8080:8080 --publish 127.0.0.1:19071:19071 --publish 127.0.0.1:5005:5005 \
vespaengine/vespa
```

When using Vespa Cloud, system and tests are most easily developed using a test deployment in a
`dev`

zone to run the tests against.
Refer to [general testing guide](testing.html)
for a discussion of the different test types,
and the [basic HTTP tests](../reference/applications/testing.html) or
[Java JUnit tests](../reference/applications/testing-java.html) reference
for how to write the relevant tests.

If using the [Vespa CLI](../clients/vespa-cli.html) to deploy and run
[basic HTTP tests](../reference/applications/testing.html),
the same commands as in the test reference will just work,
provided the CLI is configured to use the `cloud`

target.

With Maven, and [Java Junit tests](../reference/applications/testing-java.html),
some additional configuration is required,
to infuse the test runtime on the local machine with API and data plane credentials:

$ mvn test \ -D test.categories=system \ -D dataPlaneKeyFile=data-plane-private-key.pem -D dataPlaneCertificateFile=data-plane-public-cert.pem \ -D apiKey="$API_KEY"

The `apiKey`

is used to fetch the *dev* instance's endpoints.
The data plane key and certificate pair is used by
[ai.vespa.hosted.cd.Endpoint](https://github.com/vespa-engine/vespa/blob/master/cloud/tenant-cd-api/src/main/java/ai/vespa/hosted/cd/Endpoint.java)
to access the application endpoint.
Note that the `-D vespa.test.config`

argument is gone;
this configuration is automatically fetched from the Vespa Cloud API—hence the need for the API key.

When running Vespa self-hosted like in the
[sample application](../basics/deploy-an-application-local.html),
no authentication is required by default, to either API or container, and specifying a data plane key and certificate
will instead cause the test to fail, since the correct SSL context is the Java default in this case.

Make sure the TestRuntime is able to start.
As it will init an SSL context, make sure to remove config when running locally, in order to use a default context.
Remove properties from *pom.xml* and IDE debug configuration.

Developers can also set these parameters in the IDE run configuration to debug system tests:

-D test.categories=system -D tenant=my_tenant -D application=my_app -D instance=my_instance -D apiKeyFile=/path/to/myname.mytenant.pem -D dataPlaneCertificateFile=data-plane-public-cert.pem -D dataPlaneKeyFile=data-plane-private-key.pem

Vespa Cloud upgrades daily, and applications in `dev`

also have their Vespa platform upgraded.
This usually happens at the opposite time of day of when deployments are made to each instance, and takes some minutes.
Deployments without redundancy will be unavailable during the upgrade.

Failure to deploy, due to authentication (HTTP code 401) or authorization (HTTP code 403),
is most often due to wrong configuration of `tenant`

and/or `application`

,
when using command line tools to deploy. Ensure the values set with Vespa CLI or in `pom.xml`

match what is configured in the UI.

In case of data plane failure,
remember to copy the public certificate to `src/main/application/security/clients.pem`

before building and deploying. This is handled by the Vespa CLI `vespa auth cert`

command.

To run Java [system and staging tests](../reference/applications/testing-java.html) in an IDE,
ensure all API and data plane keys and certificates are configured in the IDE as well;
not all IDEs pick up all settings from `pom.xml`

correctly:

-Dtest.categories=system -DapiKeyFile=/path-to/tname.pem -DdataPlaneCertificateFile=/path-to/data-plane-public-cert.pem -DdataPlaneKeyFile=/path-to/data-plane-private-key.pem

---

## Source: https://docs.vespa.ai/en/applications/ide-support.html

Vespa provides plugins for working with schemas and rank profiles in IDE's:

If you are working with non-trivial Vespa applications, installing a plugin is highly recommended!

---

## Source: https://docs.vespa.ai/en/applications/deployment.html

In this document we explain various aspects of application deployment in detail.
Refer to [application deployment](../basics/applications.html#deploying-applications) for an introduction.

After the deployment command has succeeded, the application package will take effect, but this does
not complete immediately in the distributed system that is your running application;
it happens through a distributed *convergence* process that you can track from the command line
or console. Refer to the [deploy reference](../reference/applications/application-packages.html#deploy)
for detailed steps run when deploying an application.

You can get the status of the last deployment by using the status command:

Hover over the instance square to the left, click pin, give a reason - this will start the downgrade process:

The pinning to a new version starts a new deployment, and can be rolled out as a normal rollout. To speed it up, cancel system and staging test jobs by clicking abort.

Skipping tests is at the application owners own discretion and risk:

Of the two, the staging test takes longer to run. The user decides whether to skip testing phases or not. With this, a user can control whether to immediately roll back a version including test phases or not, as well as rolling out to production zones in parallel or not.

After the pin to rollback, make sure to update the code repository so the next deployments is in sync, and remove the pin for later deployments.

Generally, to roll back an application package change, deploy again with the previous version to roll back to. The above section describes the fast-track rollback. The alternatives are:

The application package can have components and other large files. When an app is deployed, these files are distributed to the nodes:

When new components or files specified in config are distributed, the container gets a new file reference, waits for it to be available and switches to new config when all files are available.

Most application packages are stored as source code in a code repository.
However, some resources are generated or too large to store in a code repository,
like models or an [FSA](../reference/operations/tools.html#vespa-makefsa).

Machine learned models in Vespa,
are stored in the application package under the *models* directory.
This might be inconvenient for some applications,
for instance for models that are frequently retrained on some remote system.
Also, models might be too large to fit within the constraints of the version control system.

The solution is to download the models from the remote location during the application package build.
This is simply implemented by adding a step in *pom.xml*
(see [example](https://github.com/vespa-cloud/cord-19-search/blob/main/pom.xml)):

*bin/download_model.sh* example:

#!/bin/bash DIR="$1" URL="$2" echo "[INFO] Downloading $URL into $DIR" mkdir -p $DIR pushd $DIR curl -O $URL popd

Any necessary credentials for authentication and authorization should be added to this script, as well as any unpacking of archives (for TensorFlow models for instance).

Also see the [model](../reference/applications/config-files.html#model) config type to specify resources that
should be downloaded by container nodes during convergence.

---

## Source: https://docs.vespa.ai/en/applications/vespaignore.html

When deploying an [application
package](../reference/applications/application-packages.html) with [Vespa CLI](/en/clients/vespa-cli.html),
a `.vespaignore`

file (similar to `.gitignore`

) can be
added to the package to prevent specific files or path patterns from being
included in the deployed package.

Ignoring files is useful when the Vespa application directory contains files that are only used for development purposes, and are not directly referenced by the application.

The `.vespaignore`

file must be placed at the same level
as [services.xml](../reference/applications/services/services.html). Having
multiple `.vespaignore`

at different path levels is not supported.

This is an example of a `.vespaignore`

file that excludes files
and directories rarely needed in an application package.

# exclude hidden files and readme .DS_Store .gitignore README.md # exclude feed input ext/ # exclude auxiliary scripts *.py *.sh

The `.vespaignore`

format is a subset of
the `.gitignore`

format, where:

`#`

are ignored and can be used for comments`services.xml`

`/`

always denote a directory, e.g. the pattern `foo/`

will match the directory `foo`

(and any files below),
but not the file `foo`

Complex rules, such as negated patterns and recursive globbing (`**`

) are not supported.

---

## Source: https://docs.vespa.ai/en/applications/containers.html

Vespa's Java container - JDisc, hosts all application components as well as the stateless logic of Vespa itself.
Which particular components are hosted by a container cluster is configured in services.xml. The main features of
JDIsc are:

- HTTP serving out of the box from an embedded Jetty server,
and support for plugging in other transport mechanisms.
- Integration with the config system of Vespa which allows components to
[receive up-to-date config](configuring-components.html)
(by constructor injection) resulting from application deployment.
[Dependency injection based on Guice](dependency-injection.html)
(Felix), but extended for configs and component collections.
- A component model based on
[OSGi](bundles.html) which allows
component to be (re)deployed to running servers, and to control which APIs they expose to others.
- The features above combine to allow application package changes (changes to components, configuration or data)
to be applied by Vespa without disrupting request serving nor requiring restarts.
- Standard component types exists for
Application components can be of any other type as well and do not need to reference any Vespa API to
be loaded and managed by the container.
- A general
[chain composition](chaining.html) mechanism for components.

## Developing Components

-
The JDisc container provides a framework for processing requests and responses,
named
*Processing* - its building blocks are:
-
[Chains](chaining.html)
of other components that are to be executed serially,
with each providing some service or transform
-
[Processors](processing.html)
that change the request and / or the response. They may also
make multiple forward requests, in series or parallel,
or manufacture the response content themselves
-
[Renderers](processing.html#response-rendering)
that are used to serialize a Processor's response before
returning it to a client

-
Application Lifecycle and unit testing:
-
Handlers and filters:
-
Searchers and Document Processors:

## Reference documentation

---

## Source: https://docs.vespa.ai/en/applications/components.html

This document explains the common concepts necessary to develop all types of Container components. A basic knowledge of the Vespa Container is required.

All components must extend a base class from the Container code module.
For example, searchers must extend the class `com.yahoo.search.Searcher`

.
The main available component types are:

Searchers and document processors belong to a subclass of components
called [chained components](chaining.html).
For an introduction to how the different component types interact,
refer to the [overview of component types](../reference/applications/components.html#component-types).

The components of the search container are usually deployed as part of
an [OSGi bundle](bundles.html).
Build the bundles using maven and the [bundle plugin](bundles.html#maven-bundle-plugin).
Refer to the [
multiple-bundles sample app](https://github.com/vespa-engine/sample-apps/tree/master/examples/multiple-bundles) for a multi-bundle example.

Components will be executed concurrently by multiple threads.
This places an important constraint on all component classes:
*non-final instance variables are not safe.*
They must be eliminated, or made thread-safe somehow.

Components that use threads, file handles or other native resources
that needs to be released when the component falls out of scope,
must override a method called `deconstruct`

.
Here is an example implementation from a component that uses a thread pool named 'executor':

@Override public void deconstruct() { super.deconstruct(); try { executor.shutdown(); executor.awaitTermination(10, TimeUnit.SECONDS); } catch (InterruptedException e) { Thread.currentThread().interrupt(); } }

Note that it is always advisable to call the super-method first.
Also see [
SharedResource.java](https://github.com/vespa-engine/vespa/blob/master/jdisc_core/src/main/java/com/yahoo/jdisc/SharedResource.java) for how to configure [debug options](../reference/applications/services/container.html#jvm)
for use in tools like YourKit.
This can be used to track component lifetime / (de)construction issues, e.g.:

<nodes> <jvm options="-Djdisc.debug.resources=true"/> </nodes>

Read more in [container profiling](../performance/profiling.html#profiling-the-query-container).

The components might need to access resources, such as other components or config. These are injected directly into the constructor. The following types of constructor dependencies are allowed:

The [Component Reference](../reference/applications/components.html#injectable-components) contains a
complete list of built-in injectable components.

If your component class needs more than one public constructor,
the one to be used by the container must be annotated with `@com.yahoo.component.annotation.Inject`

from
[annotations](https://search.maven.org/artifact/com.yahoo.vespa/annotations).

This component provides information about the environment that the component is running in, for example

The two latter can be used e.g. for [bucket testing](testing.html#feature-switches-and-bucket-tests)
new features on a subset of nodes.
Please note that the node indices are not necessarily contiguous or starting from zero.

The container will create one or more instances of the component,
as specified in [the application package](#adding-component-to-application-package).
The container will create a new instance of this component
only when it is reconfigured,
so any data needed by the component can be read and prepared from a constructor in the component.

See the full API available to components at the
[
Container Javadoc](https://javadoc.io/doc/com.yahoo.vespa/container-disc/latest/com/yahoo/container/package-summary.html).

Once the component passes unit tests, it can be deployed. The steps involved are building the component jar file, adding it to the Vespa application package and deploying the application package. These steps are described in the following sections, using a searcher as example.

To build the plugin jar, call `mvn install`

in the project directory.
It can then be found in the target directory, and will have the suffix *-deploy.jar*.

Assume for the rest of the document that the artifactId
is `com.yahoo.search.example.SimpleSearcher`

and the version is `1.0`

.
The plugin built will then have the name *com.yahoo.search.example.SimpleSearcher-1.0-deploy.jar*.

The previous step should produce a plugin jar file,
which may now be deployed to Vespa by adding it to
an [application package](../basics/applications.html):
A directory containing at minimum *hosts.xml* and *services.xml*.

`com.yahoo.search.example.SimpleSearcher-1.0-deploy.jar`

in the `components/`

directory under the application package rootTo include the searcher, define a search chain and add the searcher to it. Example:

<?xml version="1.0" encoding="utf-8" ?> <services version="1.0"> <admin version="2.0"> <adminserver hostalias="node1" /> </configservers> <logserver hostalias="node1" /> </admin> <container version="1.0"> <search> <chain id="default" inherits="vespa"> <searcher id="com.yahoo.search.example.SimpleSearcher" bundle="the name in <artifactId> in your pom.xml" /> </chain> </search> <nodes> <node hostalias="node1" /> </nodes> </container> </services>

The searcher id above is resolved to the plugin jar we added by the `Bundle-SymbolicName`

([a field in the manifest of the jar file](bundles.html)),
which is determined by the `artifactId`

,
and to the right class within the bundle by the class name.
By keeping the `searcher id`

, `class name`

and `artifactId`

the same, we keep things simple,
but more advanced use where this is possible is also supported.
This will be explained in later sections.

For a reference to these tags,
see [the search chains reference](../reference/applications/services/search.html#chain).

Example `hosts.xml`

:

<?xml version="1.0" encoding="utf-8" ?> <hosts> <host name="localhost"> <alias>node1</alias> </host> </hosts>

By creating a directory containing this `services.xml`

,
`hosts.xml`

and `components/com.yahoo.search.example.SimpleSearcher-1.0-deploy.jar`

,
that directory becomes a complete application package containing a bundle, which can now be deployed.

Set up a Vespa instance using the [quick start](../basics/deploy-an-application-local.html).
Once the component and the config are added to the application package,
it can be [deployed](../basics/applications.html#deploying-applications)
by running `vespa deploy`

.
These steps will copy any changed bundles to the nodes in the cluster which needs them
and switch queries over to running the new component versions.

This works safely without requiring any processes to be restarted, even if the application package contains changes to classes which are already running queries. The switch is atomic from the point of view of the query - all queries will execute to completion, either using only the components of the last version of the application package or only the new ones, so interdependent changes in multiple searcher components can be deployed without problems.

The exception to the above is bundles containing JNI packages.
There can only be one instance of the native library, so such bundles cannot reload.
Best practice is to load the JNI library in the constructor,
as this will cause the new bundle *not* to load, but continue on the current version.
A subsequent restart will load the new bundle.
This will hence not cause failures.
Alternatively, if the JNI library is initialized lazily (e.g. on first invocation),
bundle reloads will succeed, but subsequent invocations of code using the JNI library will fail.
Hence, the new version will run, but fail.

A warning is issued in the log when deploying rather than the normal
*Switching to the latest deployed set of handlers* - example:

[2016-09-21 14:22:05.387] WARNING : container stderr Cannot load mylib native library

To minimize restarts, it is recommended to put JNI components in minimal, separate bundles. This will prevent reload of the JNI-bundles, unless the JNI-bundle itself is changed.

All containers also provide a built-in handler that outputs JSON formatted information about the active application,
including its components and chains (it can also be configured to show
[a user-defined version](../reference/applications/application-packages.html#versioning-application-packages)).
The handler answers to requests with the path `/ApplicationStatus`

.
For example, if 'localhost' runs a container with HTTP configured on port 8080:

http://localhost:8080/ApplicationStatus

External dependencies [can be included into the bundle](bundles.html#maven-bundle-plugin).

The JDisc Container has one set of *global* packages.
These are packages that are available with no import,
and constitutes the supported API of the JDisc Container.
Backwards incompatible changes are not made to these packages.

There is also a set of *exported* packages.
These are available for import, and includes all legacy packages,
plus extension packages which are not part of the core API.
Note that these are not considered to be "public" APIs, as global packages are,
and backwards incompatible changes *can* be made to these packages,
or they may be removed.

The list of exported and global packages is available in the
[container-disc
pom.xml](https://github.com/vespa-engine/vespa/blob/master/container-disc/pom.xml), in `project/properties/exportedPackages`

and `project/properties/globalPackages`

.

All the elements of the search container which may be referenced by an
id may be *versioned*, that includes chains, components and query profiles.
This allows multiple versions of these elements to be used at the same time,
including multiple versions of the same classes,
which is handy for [bucket testing](testing.html#feature-switches-and-bucket-tests) new versions.

An id or id reference may include a version by using the following syntax: `name:version`

.
This works with ids in search requests, services.xml, code and query profiles.

A version has the format:

major.minor.micro.qualifier

where major, minor and micro are integers and qualifier is a string.
Any right-hand portion of the version string may be skipped.
In *versions*, skipped values mean "0" (and *empty* for the qualifier).
In *version references* skipped values means "unspecified".
Any unspecified number will be matched to the highest number available,
while a qualifier specified *must* be matched exactly if it is specified
(qualifiers are rarely used).

To specify the version of a bundle, specify version in pom.xml
(we recommend not using *qualifier*):

```
<groupId>com.yahoo.example</groupId>
<artifactId>MyPlugin</artifactId>
<version>major.minor.micro</version>
```

This will automatically be used to set the `Bundle-Version`

in the bundle manifest.

For more details, see [component versioning](../reference/applications/components.html#component-versioning).

If there is some error in the application package,
it will usually be detected during the `vespa prepare`

step and cause an error message.
However, some classes of errors are only detected once the application is deployed.
When redeploying an application, it is therefore recommended watching the vespa log by running:

vespa-logfmt -N

The new application is active after the INFO message:

Switched to the latest deployed set of handlers...;

If this message does not appear after a reasonable amount of time
after completion of `vespa activate`

,
one will see some errors or warnings instead, that will help debug the application.

At deployment or container start, components are constructed. Construction can fail - to debug, enable more logging (replace "container" as needed with container id):

$[vespa-logctl]container:com.yahoo.container.di.componentgraph.core.ComponentNode debug=on .com.yahoo.container.di.componentgraph.core.ComponentNode ON ON ON ON ON ON ON OFF

Look for "Constructing" and "Finished constructing" in *vespa.log* -
this identifies components that did not construct.

Model downloading failures look like the below and are caused by a fail to download the model to the container:

ERROR container Container.com.yahoo.jdisc.core.StandaloneMain JDisc exiting: Throwable caught: exception= java.lang.RuntimeException: Not able to create config builder for payload '{ "tokenizerPath": "\\"\\" https://huggingface.co/Snowflake/snowflake-arctic-embed-l/raw/main/tokenizer.json \\"\\"", "transformerModel": "\\"\\" https://huggingface.co/Snowflake/snowflake-arctic-embed-l/resolve/main/onnx/model_int8.onnx \\"\\"", "transformerMaxTokens": 512, "transformerInputIds": "input_ids", "transformerAttentionMask": "attention_mask", "transformerTokenTypeIds": "token_type_ids", "transformerOutput": "last_hidden_state", "normalize": true, "poolingStrategy": "cls", "transformerExecutionMode": "sequential", "transformerInterOpThreads": 1, "transformerIntraOpThreads": -4, "transformerGpuDevice": 0 }

Check urls / names, and that the model can be downloaded in the network the Vespa Container is running.

---

## Source: https://docs.vespa.ai/en/applications/searchers.html

The *Container* is the home for all global processing of
user actions (represented as queries) and their results.
It provides a development and hosting environment for processing
[components](components.html),
and a model for composing such components developed by multiple development teams into a functional whole.

This document describes how to develop and deploy Searcher components.
To get started with development,
see the [Developer Guide](developer-guide.html).
For reference, see the [
Container javadoc](https://javadoc.io/doc/com.yahoo.vespa/container-search/latest/com/yahoo/search/package-summary.html),
and the [services.xml reference](../reference/applications/services/processing.html#chain).

Best practise for queries is submitting the user-generated query as-is to Vespa,
then use Searcher components to implement additional logic.
Refer to the [Query HTTP API](../querying/query-api.html#http).

The components of the search container are called *Searchers*.
A searcher is a component - usually deployed as part of an OSGi bundle -
which extends the class `com.yahoo.search.Searcher`

.
All Searchers must implement a single method:

When the container receives a request, it will create a Query representing it
and execute a configured list of such Searcher components.
This is done by calling the `search()`

method on the first searcher in the list.
That searcher is responsible for passing the call to the next searcher in the list (or not, as it sees fit).
This is done by calling `search()`

on the Executor given,
which keeps track of where we are in the list of Searchers.
Hence, this is a noop searcher implementation:

Eventually the search call will reach the end of the list of searchers. The last searcher in the list may create a Result (somehow), which is now passed back up the call chain until it reaches the top. The container will then translate that Result back to a response to the incoming request.

As is evident from this description, this is a synchronous model,
where each request is processed in a dedicated worker thread until the result is returned.
This synchronous model is implemented with [
multi-threading of individual searchers](#keeping-state-in-searchers).

The single searcher method is sufficient to express all kinds of functionality, e.g.:

The **Query** in the search container is the container of all the
information needed to create a result to the request, including:

The **Result** encapsulates all the data generated from a Query.
The Result contains a composite tree of Hit objects organized in lists called HitGroups
(the Result points to the topmost group).
Each Hit contains some particular data item which is deemed relevant to the Query.
The Hit objects has a general key-value storage,
but are also polymorphic to support representing more structured information.
See the [ inspecting
structured data](inspecting-structured-data.html) documentation for details about handling structured information in a Searcher.

As Hits may be hierarchically organized into hit lists, the Result object is capable of representing any organization of the results. For example, in a federated system the hits are initially organized in one hit group per source. Upstream searchers may reorganize this into something that fits the user's need better, e.g a single blended group, or one group per likely interpretation of the query etc.

The lists of searchers mentioned above are called *search chains*.
Search chains are a special case of the [ general component chains](chaining.html).
A search chain is nothing more than a list of searcher instances having an id.
The search chains are typically not created for every query but are part of the configuration.
Multiple ones may exist at the same time, the chain to execute may be specified in the request.
If nothing is specified, a default one is used.
The same Searcher instance may exist in multiple search chains,
which is why the Execution object is responsible for knowing the next Searcher to invoke in a particular request.

Search chains may also be executed programmatically (typically from a Searcher), synchronously or asynchronously:

Asynchronous execution is useful in cases like [federation](../querying/federation.html),
where a searcher forks a Query to multiple search chains in parallel,
each getting results from a particular source.
Also, as in the example, it is allowed to use the same Execution instance to construct
multiple AsyncExecution instances, as the state is only copied from the constructor argument.

The execution order of the searchers in a chain are not ordered explicitly,
but by [ordering constraints](chaining.html)
declared in the searchers or their configuration.
Also read the [search reference](../reference/applications/services/search.html).

Example of a complete searcher:

The container will create one or more instances of this class
and place it in the desired search chain(s) to serve queries, as specified in
[ the configuration](components.html#adding-component-to-application-package).
The first line in this searcher forwards the query to whatever is the next searcher in the chain this is a part of.
This will eventually produce a Result, which is modified and then passed back to the previous searcher in this chain.
The container will create a new instance of this searcher only when it is reconfigured,
so any data needed by the searcher can be read and prepared from a constructor in the searcher.
Constructors may also accept [configuration](components.html#dependency-injection),
as any other pluggable component.

Find the full API available to searchers in the
[
Search Container Javadoc](https://javadoc.io/doc/com.yahoo.vespa/container-search/latest/com/yahoo/search/package-summary.html).

Before there is any point in testing a searcher in a real system, it should pass a set of unit tests which test it in isolation or together with the few searchers it interacts with. To do this, we can write unit tests which programmatically sets up a search chain containing the searcher to be tested, the searchers it interacts with (if any) and a searcher which produces mock results appropriate for the tests. Here is a simple example testing the Searcher above:

In this case, no searcher producing mock results is needed
because the searcher we are testing does not care what the Result contains.
If the search chain ends with a searcher which produces no result,
the framework will simply return an empty result, which is what happens in this case.
A test adding a mock searcher producing results are shown in
[federation](../querying/federation.html#unit-testing-the-result-processor).

To write unit tests of the whole application package,
see the [Developer Guide](developer-guide.html).

Once the searcher passes unit tests, it can be deployed to the Vespa system hosting it.
The procedure is the same as described in
[deploying a component](components.html#deploying-a-component).
First [build the component jar](components.html#building-the-plugin-jar).
To include the searcher in *services.xml*, define a search chain and add the searcher to it - example:

This defines the search chain `default`

,
which will be used in queries when no other chain is explicitly specified.
The searcher id above is resolved to the component bundle jar we added by the symbolic name in the manifest,
and to the right class within the bundle by the class name.
By keeping all these three the same, we keep things simple,
but more advanced use where this is possible is also supported, see later sections.

See the [search chains reference](../reference/applications/services/search.html#chain).

Example *hosts.xml*:

By creating a directory containing *services.xml*,
*hosts.xml* and *components/Simplesearcher.jar*,
that directory becomes a complete application package containing a bundle,
which can now be deployed to a Vespa instance.

After deployment, query the application:
[http://localhost:8080/search?query=best](http://localhost:8080/search/?query=best).

A searcher can also be tested running inside a container.
Create an instance from the *container* part of the *services.xml* file above:

Examine which searchers are in a chain and their ordering:

The query object is used to pass information between searchers. A part of the query is a general property store which may hold any object. Any values set in the request or in the query profile is available through these properties, but in addition searchers may add any objects they create. This is useful when some searcher component is producing information later consumed by some other. Example:

This code illustrates two idioms such searchers should follow when exchanging data:

When it does not cause unwanted dependencies,
it is recommended to wrap the property get and put in a (static)
`getFrom`

and `setTo`

method in the stored object,
to allow storage and lookup without having to mention the key unnecessarily outside the object.

Note that the objects are passed as regular in-memory references, so there is no noticeable overhead in this. However, in some situations (like when federating to multiple sources) the query will need to be cloned. The query will then attempt to clone the added properties. Those that implement Cloneable will have clone called, the rest will be copied by reference.

On the other hand, cloning objects which should not change is wasteful, they should be copied by reference. Hence, the guidelines are:

In some cases there is a need for passing information between searchers beyond those who see the same Query object. For this purpose, the Query provides a QueryContext object which provides a shared data view to all Searchers working on the same request. The context provides (among other things) a facility for setting properties (named objects). The context can be accessed safely from all the threads working on a request without incurring synchronization overhead (with some caveats), but provides linear, not constant lookup time. To set and retrieve such properties, use:

It is easy to pass arguments to searchers - any key-value looked up in the query properties in the searcher can be passed as is in the request, or in a query profile. Example:

This value can be set by adding `&my.parameter=myValue`

to the request. Guidelines:

`myfeature.a`

, `myfeature.b`

etc.
In addition to helping keep the search API clean, this allows various
query profiles containing settings for all values in
`myfeature`

to be defined and selected at run time,
which is often useful.Parameters should be used for all query state which it is reasonable and just as cheap to assume may change with every query. Good candidates are e.g. numerical values to algorithms and switches to business logic.

In broad strokes, the Container works like this:

There is a single instance of each search chain. In every chain, there is a single instance of each searcher. (Unless a chain is configured with multiple, identical searchers - this is a rare case.)

When simultaneous requests arrive for the same search chain,
multiple worker threads execute the searchers in that chain.
A searcher can therefore be executed concurrently by multiple threads;
many threads of execution can be going through the `search()`

method, concurrently.

This model places an important constraint on searcher classes:
*instance variables are not safe.* They must be eliminated, or made thread-safe somehow.

As the passing of queries and results happen on the call stack, the container will allocate many worker threads to execute queries, using one thread per query until the result is returned.

This means that any state we wish to keep along in the searcher for this particular query
until the result is returned should be kept as local variables in the search method,
while state which should be shared by all queries should be kept as member variables.
As the latter kind will be accessed by multiple threads at any one time,
the state of such member variables must be *multithread safe*.

This critical restriction is similar to those of e.g. the Servlet API. A quick example should drive the point home:

The second example uses an instance variable, which will be accessed concurrently by multiple threads. Without proper concurrency controls (such as synchronization), such access is inherently unsafe and may yield inconsistent results, and/or data corruption.

Options for implementing a multithread-safe searcher with instance variables:

`ThreadLocal`

.
The model of a single pass fetching results from a Query described in
this document is sometimes too simplistic to produce good performance.
The search container supports *multiphase searching* to address such cases.
With multiphase searching, the hits of the result is first filled with some minimal information.
This minimally filled result is sent up the search chain where some of the hits are hopefully removed.
When more information is needed, a second fill request is sent down the search chain
to fetch more data for just those hits remaining in the result.
This can happen in repeated stages, working on progressively smaller sets of hits
containing progressively more expensive information.

The container supports this by offering `fill`

methods on execution,
which may be called to request more information added to the hits of the result from a searcher.
In addition, the backends and backend providers must support multiphase searching
(this is currently only the case for internal Vespa clusters).

Any searchers should assume they are operating in a multiphase setup, meaning:

`fill()`

to get the default set of fields for
each hit type or `fill(summaryClassName)`

to get a
particular collection of fields known to exist in the backend(s) in question.
Calling fill on a result which contains already-filled hits is cheap.`search`

method and the `fill`

method.
The fill method must request filling down the source
branches which has remaining hits in the result.`fill`

method which fills the hits in the given
result belonging to that backend with information from the backend.
If your searcher encounters a problem and wants to signal an error,
set an error hit in the result object by calling `result.hits().addError(errorMsg)`

.

See the FAQ for [timeouts](../learn/faq#how-is-the-query-timeout-computed).

How to gracefully handle a timeout inside a Searcher?
`Result result = execution.search(query)`

can result in a timeout - when printed:

Container.com...vespa.Searcher result: Result: Source 'top-chain': 12: Timed out: Error in execution of chain 'top-chain': Chain timed out.

When having a tree of chains (see [federation](../querying/federation.html#timeout-behavior)),
where the main chain calls one chain per source,
and in this case, one of the source chains times out (e.g. does not return a Result within its deadline),
this can happen.

It is not generally possible to prevent this from ever happening,
but searchers can check `query.getTimeLeft`

before doing time-consuming stuff,
and pass `query.getTimeLeft() - a_little`

as timeout
to processes they initiate (such as network calls) that are able to take a deadline themselves.

In a Searcher, one often will use
[WordItem](https://javadoc.io/doc/com.yahoo.vespa/container-search/latest/com/yahoo/prelude/query/WordItem.html)
to modify the current query, or create a new query based on input query terms, or results from the current query.
To keep linguistic settings (e.g. stemming) from the parent query, set `isFromQuery`

to true -
[
example](https://github.com/vespa-cloud/vespa-documentation-search/blob/main/src/main/java/ai/vespa/cloud/docsearch/DocumentationSearcher.java).

---

## Source: https://docs.vespa.ai/en/applications/document-processors.html

This document describes how to develop and deploy *Document Processors*,
often called *docproc* in this documentation.
Document processing is a framework to create [chains](chaining.html)
of configurable [components](components.html),
that read and modify document operations.

The input source splits the input data into logical units called [documents](../schemas/documents.html).
A [feeder application](../writing/reads-and-writes.html) sends the documents into a document processing chain.
This chain is an ordered list of document processors.
Document processing examples range from language detection,
HTML removal and natural language processing to mail attachment processing,
character set transcoding and image thumbnailing.
At the end of the processing chain, extracted data will typically be set in some fields in the document.

The motivation for document processing is that code and configuration is atomically deployed, as like all Vespa components. It is also easy to build components that access data in Vespa as part of processing.

To get started, see the
[sample application](https://github.com/vespa-engine/sample-apps/tree/master/examples/document-processing).
Read [indexing](../writing/indexing.html) to understand deployment and routing.
As document processors are chained components just like Searchers,
read [Searcher Development](searchers.html).
For reference, see the [Javadoc](https://javadoc.io/doc/com.yahoo.vespa/docproc),
and [services.xml](../reference/applications/services/docproc.html).

Refer to[
album-recommendation-docproc](https://github.com/vespa-engine/sample-apps/tree/master/examples/document-processing) to get started,
[
LyricsDocumentProcessor.java](https://github.com/vespa-engine/sample-apps/blob/master/examples/document-processing/src/main/java/ai/vespa/example/album/LyricsDocumentProcessor.java) is a document processor example.
Add the document processor in [services.xml](../reference/applications/services/docproc.html),
and then add it to a [chain](#chains).
The type of processing done by the processor dictates what chain it should be part of:

An example that adds a general document processor to the "default" chain, and an indexing related processor to the chain for a particular content cluster:

<services> <container version="1.0" id="default"> <document-processing> <chain id="default"> <documentprocessor id="ai.vespa.example.album.LyricsDocumentProcessor" bundle="albums-docproc"/> </chain> <chain id="my-indexing" inherits="indexing"> <documentprocessor id="ai.vespa.example.album.PostIndexingDocumentProcessor" bundle="albums-docproc"/> </chain> </document-processing> </container> <content version="1.0" id="content"> <documents> ... <document-processing cluster="default" chain="my-indexing" /> </documents> </content> </services>

The "default" chain, if it exists, is run by default, before the chain used for indexing.
The default indexing chain is called "indexing",
and *must* be inherited by any chain that is to replace it.

To run through any chain, specify a [route](../writing/document-routing.html) which includes the chain.
For example, the route `default/chain.my-chain indexing`

would route feed operations
through the chain "my-chain" in the "default" container cluster, and then to the "indexing" hop,
which resolves to the specified indexing chain for each content cluster the document should be sent to.
More details can be found in [indexing](../writing/document-routing.html#document-processing):

A document processor is a component extending `com.yahoo.docproc.DocumentProcessor`

.
All document processors must implement `process()`

:

public Progress process(Processing processing);

When the container receives a document operation,
it will create a new `Processing`

, and add the `DocumentPut`

s,
`DocumentUpdate`

s or `DocumentRemove`

s to the `List`

accessible through `Processing.getDocumentOperations()`

.
The latter is useful also where a processing should be stopped
by doing `Processing.getDocumentOperations().clear()`

before `Progress.DONE`

,
say for blocklist use, to stop a `DocumentPut/Update`

.

Furthermore, the call stack of the document processing chain in question will
be *copied* to `Processing.callStack()`

,
so that document processors may freely modify the flow of control for this processing
without affecting all other processings going on.
After creation, the `Processing`

is added to an internal queue.

A worker thread will retrieve a `Processing`

from the input queue,
and run its document operations through its call stack.
A minimal, no-op document processor implementation is thus:

The `process()`

method should loop through all
document operations in `Processing.getDocumentOperations()`

, do
whatever it sees fit to them, and return a `Progress`

:

| Return code | Description |
|---|---|
`Progress.DONE` |
Returned if a document processor has successfully processed a `Processing` . |
`Progress.FAILED` |
Processing failed and the input message should return a
This result is represented as a |
`Progress.INVALID_INPUT` |
Available since 8.584. Processing failed due to invalid input, like a malformed document operation.
This result is represented as a |
`Progress.LATER` |
See
By the use of |

| Exception | Description |
|---|---|
`com.yahoo.docproc.TransientFailureException` |
Processing failed and the input message should return a transient failure
back to the feeding application,
meaning that this application may try to re-feed this document operation.
|
`RuntimeException` |
Throwing any other `RuntimeException`
means same behavior as for `Progress.FAILED` .
|

The call stack mentioned above is another name for a *document processor chain*.
Document processor chains are a special case of the general
[component chains](chaining.html) -
to avoid confusion some concepts are explained here as well.
A document processor chain is nothing more than a list of document processor instances,
having an id, and represented as a stack.
The document processor chains are typically not created for every processing,
but are part of the configuration.
Multiple ones may exist at the same time,
the chain to execute will be specified by the message bus destination of the incoming message.
The same document processor instance may exist in multiple document processor chains,
which is why the `CallStack`

of the `Processing`

is responsible for knowing the next document processor to invoke in a particular message.

The execution order of the document processors in a chain are not ordered explicitly,
but by [ordering constraints](chaining.html#ordering-components)
declared in the document processors or their configuration.

The Document Processing Framework works like this:

`Progress.FAILED`

or thrown an exception.
There is a single instance of each document processor chain. In every chain, there is a single instance of each document processor - unless a chain is configured with multiple, identical document processors - this is a rare case.

As is evident from the model above,
multiple worker threads execute the document processors in a chain concurrently.
Thus, many threads of execution can be going through `process()`

in a
document processor, at the same time.

This model places an important constraint on document processor classes:
*instance variables are not safe.*
They must be eliminated, or made thread-safe somehow.

Also see [Resource management](components.html#resource-management),
use `deconstruct()`

in order to not leak resources.

The execution model outlined above also shows one important restriction:
If a document processor performs any high-latency operation in its process() method,
a docproc worker thread will be occupied.
With all *n* worker threads blocking on an external resource,
throughput will be limited.
This can be fixed by saving the state in the Processing object,
and returning `Progress.LATER`

.
A document processor doing a high-latency operation should use a pattern like this:

`Progress.LATER`

.
This Processing is the appended to the back of the input queue,
and we will be called again later.`Progress.DONE`

.`Progress.LATER`

again.As is evident, this will let the finite set of document processing threads to do more work at the same time.

Any state in the document processor for the particular Processing
should be kept as local variables in the process method,
while state which should be shared by all Processings should be kept as member variables.
As the latter kind will be accessed by multiple threads at any one time,
the state of such member variables must be *thread-safe*.
This critical restriction is similar to those of e.g. the Servlet API.
Options for implementing a multithread-safe document processor with instance variables:

`ThreadLocal`

.
`Processing`

has a map `String -> Object`

that can be used to pass information between document processors.
It is also useful when using `Progress.LATER`

to save the state of a processing - see
[
Processing.java](https://github.com/vespa-engine/vespa/blob/master/docproc/src/main/java/com/yahoo/docproc/Processing.java) for `get/setVariable`

and more.

The [
sample application](https://github.com/vespa-engine/sample-apps/tree/master/examples/document-processing) uses such context variables, too.

Ordering of feed operations is not guaranteed.
Operations on different documents will be done concurrently and are therefore not ordered.
However, Vespa guarantees that operations on the same document are processed in the order they were fed
if they enter vespa at the *same* feed endpoint.

Document operations that are produced inside a document processor obey the same rules as at feed time. If you either split the input into other documents or into multiple operations to the same document, Vespa will ensure that operations to the same document id are sequenced and are delivered in the order they enter.

Consider the following configuration:

<?xml version="1.0" encoding="utf-8" ?> <services version="1.0"> <container version="1.0" id="default"> <document-processing> <chain id="default"> <documentprocessor id="SomeDocumentProcessor"> <config name="foo.something"> <variable>value</variable> </config> </documentprocessor> </chain> </document-processing> </container> </services>

Changing chain ids, components in a chain, component configuration and schema mapping all takes effect after
deployment - no restart required.
Changing a *cluster name* (i.e. the container id)
requires a restart of docproc services after *vespa activate*.

Note when adding or modifying a processing chain in a running cluster;
if at the same time deploying a *new* document processor
(i.e. a document processor that was unknown to Vespa at the time the cluster was started),
the container must be restarted:

$[vespa-sentinel-cmd]restart container

The framework core supports asynchronous processing, processing one or multiple documents or document updates at the same time, document processors that makes dynamic decisions about the processing flow and passing of information between processors outside the document or document update:

`Docproc Services`

may be created.
One of the services is the `DocumentOperation`

for processing,
meaning `DocumentPuts`

, `DocumentUpdates`

and `DocumentRemoves`

.
It has a `Call Stack`

which lists the calls to make to
various `DocumentProcessors`

to process each DocumentOperation handed to the service.
`Calls`

,
which refer to the Document Processor instance to call.
`Processing`

for its duration
(instead of in a thread or process).
A Document Processor may make some asynchronous calls (typically to remote services)
and return to the framework that it should be called again later
for the same Processing to handle the outcome of the calls.
`context`

, which is a Map of named values
which can be used to pass arguments between processors.

---

## Source: https://docs.vespa.ai/en/applications/request-handlers.html

This document explains how to implement and deploy a custom request handler.

In most cases, implementing your own request handlers is unnecessary, as both searchers and processors can access the request data directly. However, there are a few cases where custom request handlers are useful:

Upon receiving a request, the request handler must consume its content, process it,
and then return a response.
The most convenient way to implement a request handler is by subclassing the
[
ThreadedHttpRequestHandler](https://javadoc.io/doc/com.yahoo.vespa/container-disc/latest/com/yahoo/container/jdisc/ThreadedHttpRequestHandler.html).

This utility base class uses a synchronous API and a multithreaded execution model. It also implements a lot of functionality that is needed by most request handlers:

The [Vespa sample apps](https://github.com/vespa-engine/sample-apps) on GitHub contains
a few example request handler implementations:

| Handler | Description |
|---|---|
|

`ProcessingHandler`

.
This handler is also used in the
To deploy a request handler in an application,
use the [handler](../reference/applications/services/container.html#handler) element in *services.xml*:

<container id="default" version="1.0"> <handler id="my.package.MyRequestHandler" bundle="the name in <artifactId> in your pom.xml"> <binding>http://*/*</binding> </handler>

A request handler may be bound to zero or more URI patterns by adding a
[binding](../reference/applications/services/container.html#binding) element for each pattern.