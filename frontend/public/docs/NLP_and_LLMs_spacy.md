# Spacy Documentation
> Scraped on: 2026-03-30 | Root Source: [https://spacy.io/api](https://spacy.io/api)



---

## Source: https://spacy.io/api

# Library Architecture

The central data structures in spaCy are the [ Language](/api/language) class,
the

[and the](/api/vocab)

`Vocab`

[object. The](/api/doc)

`Doc`

`Language`

class
is used to process a text and turn it into a `Doc`

object. It’s typically stored
as a variable called `nlp`

. The `Doc`

object owns the **sequence of tokens**and all their annotations. By centralizing strings, word vectors and lexical attributes in the

`Vocab`

, we avoid storing multiple copies of this data. This
saves memory, and ensures there’s a **single source of truth**.

Text annotations are also designed to allow a single source of truth: the `Doc`

object owns the data, and [ Span](/api/span) and

[are](/api/token)

`Token`

**views that point into it**. The

`Doc`

object is constructed by the
[, and then](/api/tokenizer)

`Tokenizer`

**modified in place**by the components of the pipeline. The

`Language`

object coordinates these components. It takes
raw text and sends it through the pipeline, returning an **annotated document**. It also orchestrates training and serialization.

[Container objects ](#architecture-containers)

| Name | Description |
|---|---|
`Doc` |

`DocBin`

`Doc`

objects for efficient binary serialization. Also used for [training data](/api/data-formats#binary-training).`Example`

`Doc`

objects: the reference data and the predictions.`Language`

`Doc`

objects. Different languages implement their own subclasses of it. The variable is typically called `nlp`

.`Lexeme`

`Span`

`Doc`

object.`SpanGroup`

`Doc`

.`Token`

[Processing pipeline ](#architecture-pipeline)

The processing pipeline consists of one or more **pipeline components** that are
called on the `Doc`

in order. The tokenizer runs before the components. Pipeline
components can be added using [ Language.add_pipe](/api/language#add_pipe).
They can contain a statistical model and trained weights, or only make
rule-based modifications to the

`Doc`

. spaCy provides a range of built-in
components for different language processing tasks and also allows adding
[custom components](/usage/processing-pipelines#custom-components).

| Name | Description |
|---|---|
`AttributeRuler` |

`DependencyParser`

`EditTreeLemmatizer`

`EntityLinker`

`EntityRecognizer`

`EntityRuler`

`Doc`

using token-based rules or exact phrase matches.`Lemmatizer`

`Morphologizer`

`SentenceRecognizer`

`Sentencizer`

`Tagger`

`TextCategorizer`

`Tok2Vec`

`Tokenizer`

`Doc`

objects from the words.`TrainablePipe`

`Transformer`

[Other functions](/api/pipeline-functions)`Doc`

, e.g. to merge spans of tokens.[Matchers ](#architecture-matchers)

Matchers help you find and extract information from [ Doc](/api/doc) objects
based on match patterns describing the sequences you’re looking for. A matcher
operates on a

`Doc`

and gives you access to the matched tokens **in context**.

| Name | Description |
|---|---|
`DependencyMatcher` |

[Semgrex operators](https://nlp.stanford.edu/nlp/javadoc/javanlp/edu/stanford/nlp/semgraph/semgrex/SemgrexPattern.html).`Matcher`

`PhraseMatcher`

[Other classes ](#architecture-other)

| Name | Description |
|---|---|
`Corpus` |

`KnowledgeBase`

`InMemoryLookupKB`

`KnowledgeBase`

storing all data in memory.`Candidate`

`KnowledgeBase`

.`Lookups`

`MorphAnalysis`

`Morphology`

`Scorer`

`StringStore`

`Vectors`

`Vocab`

[objects.](/api/lexeme)`Lexeme`

---

## Source: https://spacy.io/

### Get things done

spaCy is designed to help you do real work — to build real products, or gather real insights. The library respects your time, and tries to avoid wasting it. It's easy to install, and its API is simple and productive.

### Blazing fast

spaCy excels at large-scale information extraction tasks. It's written from the ground up in carefully memory-managed Cython. If your application needs to process entire web dumps, spaCy is the library you want to be using.

### Awesome ecosystem

Since its release in 2015, spaCy has become an industry standard with a huge ecosystem. Choose from a variety of plugins, integrate with your machine learning stack and build custom components and workflows.

---

## Source: https://spacy.io/usage

# Install spaCy

`# Note M1 GPU support is experimental, see `[Thinc issue #792](https://github.com/explosion/thinc/issues/792)python -m venv .envsource .env/bin/activatesource .env/bin/activate.env\Scripts\activatepython -m venv .envsource .env/bin/activatesource .env/bin/activate.env\Scripts\activateconda create -n venvconda activate venvpip install -U pip setuptools wheelpip install -U pip setuptools wheelpip install -U spacyconda install -c conda-forge spacyconda install -c conda-forge cupyconda install -c conda-forge spacy-transformersgit clone https://github.com/explosion/spaCycd spaCypip install -r requirements.txtpip install --no-build-isolation --editable .# packages only available via pippip install spacy-lookups-datapython -m spacy download ca_core_news_smpython -m spacy download zh_core_web_smpython -m spacy download hr_core_news_smpython -m spacy download da_core_news_smpython -m spacy download nl_core_news_smpython -m spacy download en_core_web_smpython -m spacy download fi_core_news_smpython -m spacy download fr_core_news_smpython -m spacy download de_core_news_smpython -m spacy download el_core_news_smpython -m spacy download it_core_news_smpython -m spacy download ja_core_news_smpython -m spacy download ko_core_news_smpython -m spacy download lt_core_news_smpython -m spacy download mk_core_news_smpython -m spacy download xx_ent_wiki_smpython -m spacy download nb_core_news_smpython -m spacy download pl_core_news_smpython -m spacy download pt_core_news_smpython -m spacy download ro_core_news_smpython -m spacy download ru_core_news_smpython -m spacy download sl_core_news_smpython -m spacy download es_core_news_smpython -m spacy download sv_core_news_smpython -m spacy download uk_core_news_sm


[Installation instructions ](#installation)

spaCy is compatible with **64-bit CPython 3.7+** and runs on **Unix/Linux**,
**macOS/OS X** and **Windows**. The latest spaCy releases are available over
[pip](https://pypi.python.org/pypi/spacy) and
[conda](https://anaconda.org/conda-forge/spacy).

[pip ](#pip)

Using pip, spaCy releases are available as source packages and binary wheels.
Before you install spaCy and its dependencies, make sure that your `pip`

,
`setuptools`

and `wheel`

are up to date.



When using pip it is generally recommended to install packages in a virtual environment to avoid modifying system state:



spaCy also lets you install extra dependencies by specifying the following
keywords in brackets, e.g. `spacy[ja]`

or `spacy[lookups,transformers]`

(with
multiple comma-separated extras). See the `[options.extras_require]`

section in
spaCy’s [ setup.cfg](https://github.com/explosion/spaCy/tree/master/setup.cfg) for details on what’s included.

| Name | Description |
|---|---|
`lookups` | Install
`spacy-lookups-data` |

`transformers`

[. The package will be installed automatically when you install a transformer-based pipeline.](https://github.com/explosion/spacy-transformers)`spacy-transformers`

`cuda`

, …[CuPy](https://cupy.chainer.org)for your given CUDA version. See the GPU[installation instructions](/usage#gpu)for details and options.`apple`

[to improve performance on an Apple M1.](https://github.com/explosion/thinc-apple-ops)`thinc-apple-ops`

`ja`

, `ko`

, `th`

[languages](/usage/models#languages).[conda ](#conda)

Thanks to our great community, we’ve been able to re-add conda support. You can
also install spaCy via `conda-forge`

:



For the feedstock including the build recipe and configuration, check out
[this repository](https://github.com/conda-forge/spacy-feedstock). Note that we
currently don’t publish any [pre-releases](/usage#changelog-pre) on conda.

[Upgrading spaCy ](#upgrading)

When updating to a newer version of spaCy, it’s generally recommended to start
with a clean virtual environment. If you’re upgrading to a new major version,
make sure you have the latest **compatible trained pipelines** installed, and
that there are no old and incompatible packages left over in your environment,
as this can often lead to unexpected results and errors. If you’ve trained your
own models, keep in mind that your train and runtime inputs must match. This
means you’ll have to **retrain your pipelines** with the new version.

spaCy also provides a [ validate](/api/cli#validate) command, which lets you
verify that all installed pipeline packages are compatible with your spaCy
version. If incompatible packages are found, tips and installation instructions
are printed. It’s recommended to run the command with

`python -m`

to make sure
you’re executing the correct version of spaCy.


[Run spaCy with GPU ](#gpu)

As of v2.0, spaCy comes with neural network models that are implemented in our
machine learning library, [Thinc](https://thinc.ai). For GPU support, we’ve been
grateful to use the work of Chainer’s [CuPy](https://cupy.chainer.org) module,
which provides a numpy-compatible interface for GPU arrays.

spaCy can be installed for a CUDA-compatible GPU by specifying `spacy[cuda]`

,
`spacy[cuda102]`

, `spacy[cuda112]`

, `spacy[cuda113]`

, etc. If you know your CUDA
version, using the more explicit specifier allows CuPy to be installed via
wheel, saving some compilation time. The specifiers should install
[ cupy](https://cupy.chainer.org).



Once you have a GPU-enabled installation, the best way to activate it is to call
[ spacy.prefer_gpu](/api/top-level#spacy.prefer_gpu) or

[somewhere in your script before any pipelines have been loaded.](/api/top-level#spacy.require_gpu)

`spacy.require_gpu()`

`require_gpu`

will raise an error
if no GPU is available.


[Compile from source ](#source)

The other way to install spaCy is to clone its
[GitHub repository](https://github.com/explosion/spaCy) and build it from
source. That is the common way if you want to make changes to the code base.
You’ll need to make sure that you have a development environment consisting of a
Python distribution including header files, a compiler,
[pip](https://pip.pypa.io/en/stable/) and [git](https://git-scm.com) installed.
The compiler part is the trickiest. How to do that depends on your system. See
notes on [Ubuntu](/usage#source-ubuntu), [macOS / OS X](/usage#source-osx) and
[Windows](/usage#source-windows) for details.



To install with extras:



How to install compilers and related build tools:

**Ubuntu:**Install system-level dependencies via`apt-get`

:`sudo apt-get install build-essential python-dev git`

**macOS / OS X:**Install a recent version of[XCode](https://developer.apple.com/xcode/), including the so-called “Command Line Tools”. macOS and OS X ship with Python and Git preinstalled.**Windows:**Install a version of the[Visual C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)or[Visual Studio Express](https://www.visualstudio.com/vs/visual-studio-express/)that matches the version that was used to compile your Python interpreter.

#### Using build constraints when compiling from source

If you install spaCy from source or with `pip`

for platforms where there are not
binary wheels on PyPI, you may need to use build constraints if any package in
your environment requires an older version of `numpy`

.

If `numpy`

gets downgraded from the most recent release at any point after
you’ve compiled `spacy`

, you might see an error that looks like this:



To fix this, create a new virtual environment and install `spacy`

and all of its
dependencies using build constraints.
[Build constraints](https://pip.pypa.io/en/stable/user_guide/#constraints-files)
specify an older version of `numpy`

that is only used while compiling `spacy`

,
and then your runtime environment can use any newer version of `numpy`

and still
be compatible. In addition, use `--no-cache-dir`

to ignore any previously cached
wheels so that all relevant packages are recompiled from scratch:



Our build constraints currently specify the oldest supported `numpy`

available
on PyPI for `x86_64`

and `aarch64`

. Depending on your platform and environment,
you may want to customize the specific versions of `numpy`

. For other platforms,
you can have a look at SciPy’s
[ oldest-supported-numpy](https://github.com/scipy/oldest-supported-numpy/blob/main/setup.cfg)
package to see what the oldest recommended versions of

`numpy`

are.(*Warning*: don’t use `pip install -c constraints.txt`

instead of
`PIP_CONSTRAINT`

, since this isn’t applied to the isolated build environments.)

[Additional options for developers ](#source-developers)

Some additional options may be useful for spaCy developers who are editing the source code and recompiling frequently.

-
Install in editable mode. Changes to

`.py`

files will be reflected as soon as the files are saved, but edits to Cython files (`.pxd`

,`.pyx`

) will require the`pip install`

command below to be run again. Before installing in editable mode, be sure you have removed any previous installs with`pip uninstall spacy`

, which you may need to run multiple times to remove all traces of earlier installs. -
Build in parallel. Starting in v3.4.0, you can specify the number of build jobs with the environment variable

`SPACY_NUM_BUILD_JOBS`

: -
For editable mode and parallel builds with

`python setup.py`

instead of`pip`

(no longer recommended):

#### Visual Studio Code extension

The [spaCy VSCode Extension](https://github.com/explosion/spacy-vscode) provides
additional tooling and features for working with spaCy’s config files. Version
1.0.0 includes hover descriptions for registry functions, variables, and section
names within the config as an installable extension.

- Install a supported version of Python on your system (
`>=3.7`

) - Install the
[Python Extension for Visual Studio Code](https://code.visualstudio.com/docs/python/python-tutorial) - Create a
[virtual python environment](https://docs.python.org/3/library/venv.html) - Install all python requirements (
`spaCy >= 3.4.0`

&`pygls >= 1.0.0`

) - Install
[spaCy extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=Explosion.spacy-extension) - Select your python environment
- You are ready to work with
`.cfg`

files in spaCy!

[Building an executable ](#executable)

The spaCy repository includes a [ Makefile](https://github.com/explosion/spaCy/tree/master/Makefile) that
builds an executable zip file using

[(](https://github.com/pantsbuild/pex)

`pex`

**P**ython

**Ex**ecutable). The executable includes spaCy and all its package dependencies and only requires the system Python at runtime. Building an executable

`.pex`

file is often the most convenient way to deploy spaCy, as it
lets you separate the build from the deployment process.


You can configure the build process with the following environment variables:

| Variable | Description |
|---|---|
`SPACY_EXTRAS` | Additional Python packages to install alongside spaCy with optional version specifications. Should be a string that can be passed to `pip install` . See
`Makefile` |
`PYVER` | The Python version to build against. This version needs to be available on your build and runtime machines. Defaults to `3.8` . |
`WHEELHOUSE` | Directory to store the wheel files during compilation. Defaults to `./wheelhouse` . |

[Run tests ](#run-tests)

spaCy comes with an [extensive test suite](https://github.com/explosion/spaCy/tree/master/spacy/tests). In order
to run the tests, you’ll usually want to clone the [repository](https://github.com/explosion/spaCy/tree/master)
and [build spaCy from source](/usage#source). This will also install the required
development dependencies and test utilities defined in the `requirements.txt`

.

Alternatively, you can find out where spaCy is installed and run `pytest`

on
that directory. Don’t forget to also install the test utilities via spaCy’s
[ requirements.txt](https://github.com/explosion/spaCy/tree/master/requirements.txt):



Calling `pytest`

on the spaCy directory will run only the basic tests. The flag
`--slow`

is optional and enables additional tests that take longer.



[Troubleshooting guide ](#troubleshooting)

This section collects some of the most common errors you may come across when
installing, loading and using spaCy, as well as their solutions. Also see the
[Discussions FAQ Thread](https://github.com/explosion/spaCy/discussions/8226),
which is updated more frequently and covers more transitory issues.



This usually means that the trained pipeline you’re trying to download does not
exist, or isn’t available for your version of spaCy. Check the
[compatibility table](https://github.com/explosion/spacy-models/tree/master/compatibility.json)
to see which packages are available for your spaCy version. If you’re using an
old version, consider upgrading to the latest release. Note that while spaCy
supports tokenization for [a variety of languages](/usage/models#languages), not
all of them come with trained pipelines. To only use the tokenizer, import the
language’s `Language`

class instead, for example
`from spacy.lang.fr import French`

.



This error means that the spaCy module can’t be located on your system, or in
your environment. Make sure you have spaCy installed. If you’re using a virtual
environment, make sure it’s activated and check that spaCy is installed in that
environment – otherwise, you’re trying to load a system installation. You can
also run `which python`

to find out where your Python executable is located.



As of spaCy v1.7, all trained pipelines can be installed as Python packages.
This means that they’ll become importable modules of your application. If this
fails, it’s usually a sign that the package is not installed in the current
environment. Run `pip list`

or `pip freeze`

to check which pipeline packages you
have installed, and install the [correct package](/models) if necessary. If
you’re importing a package manually at the top of a file, make sure to use the
full name of the package.



This error may occur when running the `spacy`

command from the command line.
spaCy does not currently add an entry to your `PATH`

environment variable, as
this can lead to unexpected results, especially when using a virtual
environment. Instead, spaCy adds an auto-alias that maps `spacy`

to
`python -m spacy`

. If this is not working as expected, run the command with
`python -m`

, yourself – for example `python -m spacy download en_core_web_sm`

.
For more info on this, see the [ download](/api/cli#download) command.



While this could technically have many causes, including spaCy being broken, the
most likely one is that your script’s file or directory name is “shadowing” the
module – e.g. your file is called `spacy.py`

, or a directory you’re importing
from is called `spacy`

. So, when using spaCy, never call anything else `spacy`

.

If your training data only contained new entities and you didn’t mix in any examples the model previously recognized, it can cause the model to “forget” what it had previously learned. This is also referred to as the “catastrophic forgetting problem”. A solution is to pre-label some text, and mix it with the new text in your updates. You can also do this by running spaCy over some text, extracting a bunch of entities the model previously recognized correctly, and adding them to your training examples.



If you’re training models, writing them to disk, and versioning them with git,
you might encounter this error when trying to load them in a Windows
environment. This happens because a default install of Git for Windows is
configured to automatically convert Unix-style end-of-line characters (LF) to
Windows-style ones (CRLF) during file checkout (and the reverse when
committing). While that’s mostly fine for text files, a trained model written to
disk has some binary files that should not go through this conversion. When they
do, you get the error above. You can fix it by either changing your
[ core.autocrlf](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)
setting to

`"false"`

, or by committing a
[file to your repository to tell Git on which files or folders it shouldn’t do LF-to-CRLF conversion, with an entry like](https://git-scm.com/docs/gitattributes)

`.gitattributes`

`path/to/spacy/model/** -text`

. After you’ve done
either of these, clone your repository again.

---

## Source: https://spacy.io/models

# Trained Models & Pipelines

`python -m spacy download en_core_web_smimport spacynlp = spacy.load("en_core_web_sm")import en_core_web_smnlp = en_core_web_sm.load()doc = nlp("This is a sentence.")print([(w.text, w.pos_) for w in doc])`


[Package naming conventions ](#conventions)

In general, spaCy expects all pipeline packages to follow the naming convention
of `[lang]_[name]`

. For spaCy’s pipelines, we also chose to divide the name into
three components:

-
**Type:**Capabilities (e.g.`core`

for general-purpose pipeline with tagging, parsing, lemmatization and named entity recognition, or`dep`

for only tagging, parsing and lemmatization). -
**Genre:**Type of text the pipeline is trained on, e.g.`web`

or`news`

. -
**Size:**Package size indicator,`sm`

,`md`

,`lg`

or`trf`

.`sm`

and`trf`

pipelines have no static word vectors.For pipelines with default vectors,

`md`

has a reduced word vector table with 20k unique vectors for ~500k words and`lg`

has a large word vector table with ~500k entries.For pipelines with floret vectors,

`md`

vector tables have 50k entries and`lg`

vector tables have 200k entries.

For example, [ en_core_web_sm](/models/en#en_core_web_sm) is a small English
pipeline trained on written web text (blogs, news, comments), that includes
vocabulary, syntax and entities.

[Package versioning ](#model-versioning)

Additionally, the pipeline package versioning reflects both the compatibility
with spaCy, as well as the model version. A package version `a.b.c`

translates
to:

`a`

:**spaCy major version**. For example,`2`

for spaCy v2.x.`b`

:**spaCy minor version**. For example,`3`

for spaCy v2.3.x.`c`

:**Model version**. Different model config: e.g. from being trained on different data, with different parameters, for different numbers of iterations, with different vectors, etc.

For a detailed compatibility overview, see the
[ compatibility.json](https://github.com/explosion/spacy-models/tree/master/compatibility.json).
This is also the source of spaCy’s internal compatibility check, performed when
you run the

[command.](/api/cli#download)

`download`

[Trained pipeline design ](#design)

The spaCy v3 trained pipelines are designed to be efficient and configurable. For example, multiple components can share a common “token-to-vector” model and it’s easy to swap out or disable the lemmatizer. The pipelines are designed to be efficient in terms of speed and size and work well when the pipeline is run in full.

When modifying a trained pipeline, it’s important to understand how the
components **depend on** each other. Unlike spaCy v2, where the `tagger`

,
`parser`

and `ner`

components were all independent, some v3 components depend on
earlier components in the pipeline. As a result, disabling or reordering
components can affect the annotation quality or lead to warnings and errors.

Main changes from spaCy v2 models:

- The
component may be a separate, shared component. A component like a tagger or parser can`Tok2Vec`

[listen](/api/architectures#Tok2VecListener)to an earlier`tok2vec`

or`transformer`

rather than having its own separate tok2vec layer. - Rule-based exceptions move from individual components to the
`attribute_ruler`

. Lemma and POS exceptions move from the tokenizer exceptions to the attribute ruler and the tag map and morph rules move from the tagger to the attribute ruler. - The lemmatizer tables and processing move from the vocab and tagger to a
separate
`lemmatizer`

component.

[CNN/CPU pipeline design ](#design-cnn)

In the `sm`

/`md`

/`lg`

models:

- The
`tagger`

,`morphologizer`

and`parser`

components listen to the`tok2vec`

component. If the lemmatizer is trainable (v3.3+),`lemmatizer`

also listens to`tok2vec`

. - The
`attribute_ruler`

maps`token.tag`

to`token.pos`

if there is no`morphologizer`

. The`attribute_ruler`

additionally makes sure whitespace is tagged consistently and copies`token.pos`

to`token.tag`

if there is no tagger. For English, the attribute ruler can improve its mapping from`token.tag`

to`token.pos`

if dependency parses from a`parser`

are present, but the parser is not required. - The
`lemmatizer`

component for many languages requires`token.pos`

annotation from either`tagger`

+`attribute_ruler`

or`morphologizer`

. - The
`ner`

component is independent with its own internal tok2vec layer.

#### CNN/CPU pipelines with floret vectors

The Croatian, Finnish, Korean, Slovenian, Swedish and Ukrainian `md`

and `lg`

pipelines use [floret vectors](/usage/v3-2#vectors) instead of default vectors.
If you’re running a trained pipeline on texts and working with [ Doc](/api/doc)
objects, you shouldn’t notice any difference with floret vectors. With floret
vectors no tokens are out-of-vocabulary, so

[will return](/api/token#attributes)

`Token.is_oov`

`False`

for all tokens.If you access vectors directly for similarity comparisons, there are a few differences because floret vectors don’t include a fixed word list like the vector keys for default vectors.

-
If your workflow iterates over the vector keys, you need to use an external word list instead:

-
is not supported because there’s no fixed list of vectors to compare your vectors to.`Vectors.most_similar`


[Transformer pipeline design ](#design-trf)

In the transformer (`trf`

) pipelines, the `tagger`

, `parser`

and `ner`

(if
present) all listen to the `transformer`

component. The `attribute_ruler`

and
`lemmatizer`

have the same configuration as in the CNN models.

For spaCy v3.0-v3.6, `trf`

pipelines use
[ spacy-transformers](https://github.com/explosion/spacy-transformers) and the
transformer output in

`doc._.trf_data`

is a
[object.](/api/transformer#transformerdata)

`TransformerData`

For spaCy v3.7+, `trf`

pipelines use
[ spacy-curated-transformers](https://github.com/explosion/spacy-curated-transformers)
and

`doc._.trf_data`

is a
[object.](/api/curatedtransformer#doctransformeroutput)

`DocTransformerOutput`

[Modifying the default pipeline ](#design-modify)

For faster processing, you may only want to run a subset of the components in a
trained pipeline. The `disable`

and `exclude`

arguments to
[ spacy.load](/api/top-level#spacy.load) let you control which components are
loaded and run. Disabled components are loaded in the background so it’s
possible to reenable them in the same pipeline in the future with

[. To skip loading a component completely, use](/api/language#enable_pipe)

`nlp.enable_pipe`

`exclude`

instead of `disable`

.#### Disable part-of-speech tagging and lemmatization

To disable part-of-speech tagging and lemmatization, disable the `tagger`

,
`morphologizer`

, `attribute_ruler`

and `lemmatizer`

components.



#### Use senter rather than parser for fast sentence segmentation

If you need fast sentence segmentation without dependency parses, disable the
`parser`

use the `senter`

component instead:



The `senter`

component is ~10× faster than the parser and more accurate
than the rule-based `sentencizer`

.

#### Switch from trainable lemmatizer to default lemmatizer

Since v3.3, a number of pipelines use a trainable lemmatizer. You can check whether the lemmatizer is trainable:



If you’d like to switch to a non-trainable lemmatizer that’s similar to v3.2 or earlier, you can replace the trainable lemmatizer with the default non-trainable lemmatizer:



#### Switch from rule-based to lookup lemmatization

For the Dutch, English, French, Greek, Macedonian, Norwegian and Spanish pipelines, you can swap out a trainable or rule-based lemmatizer for a lookup lemmatizer:



#### Disable everything except NER

For the non-transformer models, the `ner`

component is independent, so you can
disable everything else:



In the transformer models, `ner`

listens to the `transformer`

component, so you
can disable all components related tagging, parsing, and lemmatization.



#### Move NER to the end of the pipeline

For access to `POS`

and `LEMMA`

features in an `entity_ruler`

, move `ner`

to the
end of the pipeline after `attribute_ruler`

and `lemmatizer`

:

---

## Source: https://spacy.io/universe

# Universe

[Adept Augmentations](/universe/project/adeptaugmentations)

[A Python library aimed at dissecting and augmenting NER training data for a few-shot scenario.](/universe/project/adeptaugmentations)

[Classy Classification](/universe/project/classyclassification)

[Have you ever struggled with needing a spaCy TextCategorizer but didn't have the time to train one from scratch? Classy Classification is the way to go!](/universe/project/classyclassification)

[Concise Concepts](/universe/project/conciseconcepts)

[Concise Concepts uses few-shot NER based on word embedding similarity to get you going with easy!](/universe/project/conciseconcepts)

[eMFDscore : Extended Moral Foundation Dictionary Scoring for Python](/universe/project/eMFDscore)

[Extended Moral Foundation Dictionary Scoring for Python](/universe/project/eMFDscore)

[Forte](/universe/project/forte)

[Forte is a toolkit for building Natural Language Processing pipelines, featuring cross-task interaction, adaptable data-model interfaces and composable pipelines.](/universe/project/forte)

[LingFeat](/universe/project/lingfeat)

[A Linguistic Feature Extraction (Text Analysis) Tool for Readability Assessment and Text Simplification](/universe/project/lingfeat)

[Rule-based Matcher Explorer](/universe/project/matcher-explorer)

[Test spaCy's rule-based Matcher by creating token patterns interactively](/universe/project/matcher-explorer)

[MindMeld - Conversational AI platform](/universe/project/mindmeld)

[Conversational AI platform for deep-domain voice interfaces and chatbots](/universe/project/mindmeld)

[pic2phrase_bot: Photo Description Generator](/universe/project/pic2phrase_bot)

[A bot that generates descriptions to submitted photos, in a human-like manner.](/universe/project/pic2phrase_bot)

[Presidio Research](/universe/project/presidio-research)

[Toolbox for developing and evaluating PII detectors, NER models for PII and generating fake PII data](/universe/project/presidio-research)

[pySBD - python Sentence Boundary Disambiguation](/universe/project/python-sentence-boundary-disambiguation)

[Rule-based sentence boundary detection that works out-of-the-box](/universe/project/python-sentence-boundary-disambiguation)

[Redfield NLP Nodes for KNIME](/universe/project/redfield-spacy-nodes)

[Makes the functionality of the spaCy library available in KNIME Analytics Platform.](/universe/project/redfield-spacy-nodes)

[A spaCy Package for Romanian Legal Document Processing](/universe/project/rolegal)

[rolegal: a spaCy Package for Noisy Romanian Legal Document Processing](/universe/project/rolegal)

[English Interpretation Sentence Pattern](/universe/project/sent-pattern)

[English interpretation for accurate translation from English to Japanese](/universe/project/sent-pattern)

[spaCy - sentence-transformers](/universe/project/spacy-sentence-bert)

[Pipelines for pretrained sentence-transformers (BERT, RoBERTa, XLM-RoBERTa & Co.) directly within spaCy](/universe/project/spacy-sentence-bert)

[spaCy - Universal Sentence Encoder](/universe/project/spacy-universal-sentence-encoder)

[Make use of Google's Universal Sentence Encoder directly within spaCy](/universe/project/spacy-universal-sentence-encoder)

### Found a mistake or something isn't working?

If you've come across a universe project that isn't working or is incompatible with the reported spaCy version, let us know by [opening a discussion thread](https://github.com/explosion/spaCy/discussions/new).

### Submit your project

If you have a project that you want the spaCy community to make use of, you can suggest it by submitting a pull request to the spaCy website repository. The Universe database is open-source and collected in a simple JSON file. For more details on the formats and available fields, see the documentation. Looking for inspiration your own spaCy plugin or extension? Check out the [project idea](https://github.com/explosion/spaCy/discussions/categories/new-features-project-ideas/) section in Discussions.

---

## Source: https://spacy.io/api/architectures

# Model Architectures

A **model architecture** is a function that wires up a
[ Model](https://thinc.ai/docs/api-model) instance, which you can then use in a
pipeline component or as a layer of a larger network. This page documents
spaCy’s built-in architectures that are used for different NLP tasks. All
trainable

[built-in components](/api#architecture-pipeline)expect a

`model`

argument defined in the config and document their the default architecture.
Custom architectures can be registered using the
[decorator and used as part of the](/api/top-level#registry)

`@spacy.registry.architectures`

[training config](/usage/training#custom-functions). Also see the usage documentation on

[layers and model architectures](/usage/layers-architectures).

[Tok2Vec architectures ](#tok2vec-arch)

[spacy.Tok2Vec.v2 ](#Tok2Vec)

Construct a tok2vec model out of two subnetworks: one for embedding and one for
encoding. See the
[“Embed, Encode, Attend, Predict”](https://explosion.ai/blog/deep-learning-formula-nlp)
blog post for background.

| Name | Description |
|---|---|
`embed` | Embed tokens into context-independent word vector representations. For example,
|

`encode`

[MaxoutWindowEncoder](/api/architectures#MaxoutWindowEncoder).[Model](https://thinc.ai/docs/api-model)[List[[Floats2d](https://thinc.ai/docs/api-types#types)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]][spacy.HashEmbedCNN.v2 ](#HashEmbedCNN)

Build spaCy’s “standard” tok2vec layer. This layer is defined by a
[MultiHashEmbed](/api/architectures#MultiHashEmbed) embedding layer that uses
subword features, and a
[MaxoutWindowEncoder](/api/architectures#MaxoutWindowEncoder) encoding layer
consisting of a CNN and a layer-normalized maxout activation function.

| Name | Description |
|---|---|
`width` | The width of the input and output. These are required to be the same, so that residual connections can be used. Recommended values are `96` , `128` or `300` . int |
`depth` | The number of convolutional layers to use. Recommended values are between `2` and `8` . int |
`embed_size` | The number of rows in the hash embedding tables. This can be surprisingly small, due to the use of the hash embeddings. Recommended values are between `2000` and `10000` . int |
`window_size` | The number of tokens on either side to concatenate during the convolutions. The receptive field of the CNN will be `depth * window_size * 2 + 1` , so a 4-layer network with a window size of `2` will be sensitive to 17 words at a time. Recommended value is `1` . int |
`maxout_pieces` | The number of pieces to use in the maxout non-linearity. If `1` , the
`Mish` |
`subword_features` | Whether to also embed subword features, specifically the prefix, suffix and word shape. This is recommended for alphabetic languages like English, but not if single-character tokens are used for a language such as Chinese. bool |
`pretrained_vectors` | Whether to also use static vectors. bool |
CREATES | The model using the architecture.
|

[spacy.Tok2VecListener.v1 ](#Tok2VecListener)

A listener is used as a sublayer within a component such as a
[ DependencyParser](/api/dependencyparser),

[or](/api/entityrecognizer)

`EntityRecognizer`

[. Usually you’ll have multiple listeners connecting to a single upstream](/api/textcategorizer)

`TextCategorizer`

[component that’s earlier in the pipeline. The listener layers act as](/api/tok2vec)

`Tok2Vec`

**proxies**, passing the predictions from the

`Tok2Vec`

component into downstream components, and
communicating gradients back upstream.Instead of defining its own `Tok2Vec`

instance, a model architecture like
[Tagger](/api/architectures#tagger) can define a listener as its `tok2vec`

argument that connects to the shared `tok2vec`

component in the pipeline.

Listeners work by caching the `Tok2Vec`

output for a given batch of `Doc`

s. This
means that in order for a component to work with the listener, the batch of
`Doc`

s passed to the listener must be the same as the batch of `Doc`

s passed to
the `Tok2Vec`

. As a result, any manipulation of the `Doc`

s which would affect
`Tok2Vec`

output, such as to create special contexts or remove `Doc`

s for which
no prediction can be made, must happen inside the model, **after** the call to
the `Tok2Vec`

component.

| Name | Description |
|---|---|
`width` | The width of the vectors produced by the “upstream”
`Tok2Vec` |

`upstream`

`Tok2Vec`

component to communicate with. By default, the upstream name is the wildcard string `"*"`

, but you could also specify the name of the `Tok2Vec`

component. You’ll almost never have multiple upstream `Tok2Vec`

components, so the wildcard string will almost always be fine. str**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]][spacy.MultiHashEmbed.v2 ](#MultiHashEmbed)

Construct an embedding layer that separately embeds a number of lexical
attributes using hash embedding, concatenates the results, and passes it through
a feed-forward subnetwork to build a mixed representation. The features used can
be configured with the `attrs`

argument. The suggested attributes are `NORM`

,
`PREFIX`

, `SUFFIX`

and `SHAPE`

. This lets the model take into account some
subword information, without construction a fully character-based
representation. If pretrained vectors are available, they can be included in the
representation as well, with the vectors table kept static (i.e. it’s not
updated).

| Name | Description |
|---|---|
`width` | The output width. Also used as the width of the embedding tables. Recommended values are between `64` and `300` . If static vectors are included, a learned linear layer is used to map the vectors to the specified width before concatenating it with the other embedding outputs. A single maxout layer is then used to reduce the concatenated vectors to the final width. int |
`attrs` | The token attributes to embed. A separate embedding table will be constructed for each attribute. List[Union[int, str]] |
`rows` | The number of rows for each embedding tables. Can be low, due to the hashing trick. Recommended values are between `1000` and `10000` . The layer needs surprisingly few rows, due to its use of the hashing trick. Generally between 2000 and 10000 rows is sufficient, even for very large vocabularies. A number of rows must be specified for each table, so the `rows` list must be of the same length as the `attrs` parameter. List[int] |
`include_static_vectors` | Whether to also use static word vectors. Requires a vectors table to be loaded in the
`Doc` |

**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]][spacy.CharacterEmbed.v2 ](#CharacterEmbed)

Construct an embedded representation based on character embeddings, using a feed-forward network. A fixed number of UTF-8 byte characters are used for each word, taken from the beginning and end of the word equally. Padding is used in the center for words that are too short.

For instance, let’s say `nC=4`

, and the word is “jumping”. The characters used
will be `"jung"`

(two from the start, two from the end). If we had `nC=8`

, the
characters would be `"jumpping"`

: 4 from the start, 4 from the end. This ensures
that the final character is always in the last position, instead of being in an
arbitrary position depending on the word length.

The characters are embedded in a embedding table with a given number of rows,
and the vectors concatenated. A hash-embedded vector of the `NORM`

of the word
is also concatenated on, and the result is then passed through a feed-forward
network to construct a single vector to represent the information.

| Name | Description |
|---|---|
`width` | The width of the output vector and the `NORM` hash embedding. int |
`rows` | The number of rows in the `NORM` hash embedding table. int |
`nM` | The dimensionality of the character embeddings. Recommended values are between `16` and `64` . int |
`nC` | The number of UTF-8 bytes to embed per word. Recommended values are between `3` and `8` , although it may depend on the length of words in the language. int |
CREATES | The model using the architecture.
|

[spacy.MaxoutWindowEncoder.v2 ](#MaxoutWindowEncoder)

Encode context using convolutions with maxout activation, layer normalization and residual connections.

| Name | Description |
|---|---|
`width` | The input and output width. These are required to be the same, to allow residual connections. This value will be determined by the width of the inputs. Recommended values are between `64` and `300` . int |
`window_size` | The number of words to concatenate around each token to construct the convolution. Recommended value is `1` . int |
`maxout_pieces` | The number of maxout pieces to use. Recommended values are `2` or `3` . int |
`depth` | The number of convolutional layers. Recommended value is `4` . int |
CREATES | The model using the architecture.
|

[spacy.MishWindowEncoder.v2 ](#MishWindowEncoder)

Encode context using convolutions with
[ Mish](https://thinc.ai/docs/api-layers#mish) activation, layer normalization
and residual connections.

| Name | Description |
|---|---|
`width` | The input and output width. These are required to be the same, to allow residual connections. This value will be determined by the width of the inputs. Recommended values are between `64` and `300` . int |
`window_size` | The number of words to concatenate around each token to construct the convolution. Recommended value is `1` . int |
`depth` | The number of convolutional layers. Recommended value is `4` . int |
CREATES | The model using the architecture.
|

[spacy.TorchBiLSTMEncoder.v1 ](#TorchBiLSTMEncoder)

Encode context using bidirectional LSTM layers. Requires
[PyTorch](https://pytorch.org).

| Name | Description |
|---|---|
`width` | The input and output width. These are required to be the same, to allow residual connections. This value will be determined by the width of the inputs. Recommended values are between `64` and `300` . int |
`depth` | The number of recurrent layers, for instance `depth=2` results in stacking two LSTMs together. int |
`dropout` | Creates a Dropout layer on the outputs of each LSTM layer except the last layer. Set to 0.0 to disable this functionality. float |
CREATES | The model using the architecture.
|

[spacy.StaticVectors.v2 ](#StaticVectors)

Embed [ Doc](/api/doc) objects with their vocab’s vectors table, applying a
learned linear projection to control the dimensionality. Unknown tokens are
mapped to a zero vector. See the documentation on

[static vectors](/usage/embeddings-transformers#static-vectors)for details.

| Name | Description |
|---|---|
`nO` | The output width of the layer, after the linear projection. Optional[int] |
`nM` | The width of the static vectors. Optional[int] |
`dropout` | Optional dropout rate. If set, it’s applied per dimension over the whole batch. Defaults to `None` . Optional[float] |
`init_W` | The
`glorot_uniform_init` |

[Ops](https://thinc.ai/docs/api-backends#ops), Tuple[int, …]]],

[FloatsXd](https://thinc.ai/docs/api-types#types)]

`key_attr`

[or](/api/vectors)`Vectors`

[. Defaults to](/api/cli#init-vectors)`spacy init vectors`

`"ORTH"`

. str**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)],[Ragged](https://thinc.ai/docs/api-types#ragged)][spacy.FeatureExtractor.v1 ](#FeatureExtractor)

Extract arrays of input features from [ Doc](/api/doc) objects. Expects a list
of feature names to extract, which should refer to token attributes.

| Name | Description |
|---|---|
`columns` | The token attributes to extract. List[Union[int, str]] |
CREATES | The created feature extraction layer.
|

[Transformer architectures ](#transformers)

The following architectures are provided by the package
[ spacy-transformers](https://github.com/explosion/spacy-transformers). See the

[usage documentation](/usage/embeddings-transformers#transformers)for how to integrate the architectures into your training config.

[spacy-transformers.TransformerModel.v3 ](#TransformerModel)

Load and wrap a transformer model from the
[HuggingFace transformers](https://huggingface.co/transformers) library. You
can use any transformer that has pretrained weights and a PyTorch
implementation. The

`name`

variable is passed through to the underlying library,
so it can be either a string or a path. If it’s a string, the pretrained weights
will be downloaded via the transformers library if they are not already
available locally.In order to support longer documents, the
[TransformerModel](/api/architectures#TransformerModel) layer allows you to pass
in a `get_spans`

function that will divide up the [ Doc](/api/doc) objects
before passing them through the transformer. Your spans are allowed to overlap
or exclude tokens. This layer is usually used directly by the

[component, which allows you to share the transformer weights across your pipeline. For a layer that’s configured for use in other components, see](/api/transformer)

`Transformer`

[Tok2VecTransformer](/api/architectures#Tok2VecTransformer).

| Name | Description |
|---|---|
`name` | Any model name that can be loaded by
`transformers.AutoModel` |

`get_spans`

[object and returns lists of](/api/doc)`Doc`

[objects to process by the transformer.](/api)`Span`

[See here](/api/transformer#span_getters)for built-in options and examples. Callable[[List[[Doc](/api/doc)]], List[[Span](/api/span)]]`tokenizer_config`

[. Dict[str, Any]](https://huggingface.co/transformers/model_doc/auto.html#transformers.AutoTokenizer)`transformers.AutoTokenizer`

`transformer_config`

[Dict[str, Any]](https://huggingface.co/transformers/model_doc/auto.html?highlight=autoconfig#transformers.AutoConfig)`transformers.AutoConfig`

`mixed_precision`

[Tensor Cores](https://developer.nvidia.com/tensor-cores)and reduces GPU memory use. bool`grad_scaler_config`

`thinc.api.PyTorchGradScaler`

during training when `mixed_precision`

is enabled. Dict[str, Any]**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)],[FullTransformerBatch](/api/transformer#fulltransformerbatch)]- The
`transformer_config`

argument was added in`spacy-transformers.TransformerModel.v2`

. - The
`mixed_precision`

and`grad_scaler_config`

arguments were added in`spacy-transformers.TransformerModel.v3`

.

The other arguments are shared between all versions.

[spacy-transformers.TransformerListener.v1 ](#TransformerListener)

Create a `TransformerListener`

layer, which will connect to a
[ Transformer](/api/transformer) component earlier in the pipeline. The layer
takes a list of

[objects as input, and produces a list of 2-dimensional arrays as output, with each array having one row per token. Most spaCy models expect a sublayer with this signature, making it easy to connect them to a transformer model via this sublayer. Transformer models usually operate over wordpieces, which usually don’t align one-to-one against spaCy tokens. The layer therefore requires a reduction operation in order to calculate a single token vector given zero or more wordpiece vectors.](/api/doc)

`Doc`

| Name | Description |
|---|---|
`pooling` | A reduction layer used to calculate the token vectors based on zero or more wordpiece vectors. If in doubt, mean pooling (see
`reduce_mean` |

[Model](https://thinc.ai/docs/api-model)[

[Ragged](https://thinc.ai/docs/api-types#ragged),

[Floats2d](https://thinc.ai/docs/api-types#types)]

`grad_factor`

`0`

to “freeze” the transformer weights with respect to the component, or use it to make some components more significant than others. Leaving it at `1.0`

is usually fine. float`upstream`

`Transformer`

component to communicate with. By default, the upstream name is the wildcard string `"*"`

, but you could also specify the name of the `Transformer`

component. You’ll almost never have multiple upstream `Transformer`

components, so the wildcard string will almost always be fine. str**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]][spacy-transformers.Tok2VecTransformer.v3 ](#Tok2VecTransformer)

Use a transformer as a [ Tok2Vec](/api/tok2vec) layer directly. This does

**not**allow multiple components to share the transformer weights and does

**not**allow the transformer to set annotations into the

[object, but it’s a](/api/doc)

`Doc`

**simpler solution**if you only need the transformer within one component.

| Name | Description |
|---|---|
`get_spans` | Function that takes a batch of
`Doc` |

[objects to process by the transformer.](/api)

`Span`

[See here](/api/transformer#span_getters)for built-in options and examples. Callable[[List[

[Doc](/api/doc)]], List[

[Span](/api/span)]]

`tokenizer_config`

[. Dict[str, Any]](https://huggingface.co/transformers/model_doc/auto.html#transformers.AutoTokenizer)`transformers.AutoTokenizer`

`transformer_config`

`pooling`

[) is usually a good choice.](https://thinc.ai/docs/api-layers#reduce_mean)`reduce_mean`

[Model](https://thinc.ai/docs/api-model)[[Ragged](https://thinc.ai/docs/api-types#ragged),[Floats2d](https://thinc.ai/docs/api-types#types)]`grad_factor`

`0`

to “freeze” the transformer weights with respect to the component, or use it to make some components more significant than others. Leaving it at `1.0`

is usually fine. float`mixed_precision`

[Tensor Cores](https://developer.nvidia.com/tensor-cores)and reduces GPU memory use. bool`grad_scaler_config`

`thinc.api.PyTorchGradScaler`

during training when `mixed_precision`

is enabled. Dict[str, Any]**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]- The
`transformer_config`

argument was added in`spacy-transformers.Tok2VecTransformer.v2`

. - The
`mixed_precision`

and`grad_scaler_config`

arguments were added in`spacy-transformers.Tok2VecTransformer.v3`

.

The other arguments are shared between all versions.

[Curated Transformer architectures ](#curated-trf)

The following architectures are provided by the package
[ spacy-curated-transformers](https://github.com/explosion/spacy-curated-transformers).
See the

[usage documentation](/usage/embeddings-transformers#transformers)for how to integrate the architectures into your training config.

When loading the model
[from the Hugging Face Hub](/api/curatedtransformer#hf_trfencoder_loader), the
model config’s parameters must be same as the hyperparameters used by the
pre-trained model. The
[ init fill-curated-transformer](/api/cli#init-fill-curated-transformer) CLI
command can be used to automatically fill in these values.

### spacy-curated-transformers.AlbertTransformer.v1

Construct an ALBERT transformer model.

| Name | Description |
|---|---|
`vocab_size` | Vocabulary size. int |
`with_spans` | Callback that constructs a span generator model. Callable |
`piece_encoder` | The piece encoder to segment input tokens.
|

`attention_probs_dropout_prob`

`embedding_width`

`hidden_act`

`hidden_dropout_prob`

`hidden_width`

`intermediate_width`

`layer_norm_eps`

`max_position_embeddings`

`model_max_length`

`num_attention_heads`

`num_hidden_groups`

`num_hidden_layers`

`padding_idx`

`type_vocab_size`

`mixed_precision`

`grad_scaler_config`

**CREATES**[Model](https://thinc.ai/docs/api-model)### spacy-curated-transformers.BertTransformer.v1

Construct a BERT transformer model.

| Name | Description |
|---|---|
`vocab_size` | Vocabulary size. int |
`with_spans` | Callback that constructs a span generator model. Callable |
`piece_encoder` | The piece encoder to segment input tokens.
|

`attention_probs_dropout_prob`

`hidden_act`

`hidden_dropout_prob`

`hidden_width`

`intermediate_width`

`layer_norm_eps`

`max_position_embeddings`

`model_max_length`

`num_attention_heads`

`num_hidden_layers`

`padding_idx`

`type_vocab_size`

`mixed_precision`

`grad_scaler_config`

**CREATES**[Model](https://thinc.ai/docs/api-model)### spacy-curated-transformers.CamembertTransformer.v1

Construct a CamemBERT transformer model.

| Name | Description |
|---|---|
`vocab_size` | Vocabulary size. int |
`with_spans` | Callback that constructs a span generator model. Callable |
`piece_encoder` | The piece encoder to segment input tokens.
|

`attention_probs_dropout_prob`

`hidden_act`

`hidden_dropout_prob`

`hidden_width`

`intermediate_width`

`layer_norm_eps`

`max_position_embeddings`

`model_max_length`

`num_attention_heads`

`num_hidden_layers`

`padding_idx`

`type_vocab_size`

`mixed_precision`

`grad_scaler_config`

**CREATES**[Model](https://thinc.ai/docs/api-model)### spacy-curated-transformers.RobertaTransformer.v1

Construct a RoBERTa transformer model.

| Name | Description |
|---|---|
`vocab_size` | Vocabulary size. int |
`with_spans` | Callback that constructs a span generator model. Callable |
`piece_encoder` | The piece encoder to segment input tokens.
|

`attention_probs_dropout_prob`

`hidden_act`

`hidden_dropout_prob`

`hidden_width`

`intermediate_width`

`layer_norm_eps`

`max_position_embeddings`

`model_max_length`

`num_attention_heads`

`num_hidden_layers`

`padding_idx`

`type_vocab_size`

`mixed_precision`

`grad_scaler_config`

**CREATES**[Model](https://thinc.ai/docs/api-model)### spacy-curated-transformers.XlmrTransformer.v1

Construct a XLM-RoBERTa transformer model.

| Name | Description |
|---|---|
`vocab_size` | Vocabulary size. int |
`with_spans` | Callback that constructs a span generator model. Callable |
`piece_encoder` | The piece encoder to segment input tokens.
|

`attention_probs_dropout_prob`

`hidden_act`

`hidden_dropout_prob`

`hidden_width`

`intermediate_width`

`layer_norm_eps`

`max_position_embeddings`

`model_max_length`

`num_attention_heads`

`num_hidden_layers`

`padding_idx`

`type_vocab_size`

`mixed_precision`

`grad_scaler_config`

**CREATES**[Model](https://thinc.ai/docs/api-model)### spacy-curated-transformers.ScalarWeight.v1

Construct a model that accepts a list of transformer layer outputs and returns a weighted representation of the same.

| Name | Description |
|---|---|
`num_layers` | Number of transformer hidden layers. int |
`dropout_prob` | Dropout probability. float |
`mixed_precision` | Use mixed-precision training. bool |
`grad_scaler_config` | Configuration passed to the PyTorch gradient scaler. dict |
CREATES | The model using the architecture
|

### spacy-curated-transformers.TransformerLayersListener.v1

Construct a listener layer that communicates with one or more upstream
Transformer components. This layer extracts the output of the last transformer
layer and performs pooling over the individual pieces of each `Doc`

token,
returning their corresponding representations. The upstream name should either
be the wildcard string ’*’, or the name of the Transformer component.

In almost all cases, the wildcard string will suffice as there’ll only be one upstream Transformer component. But in certain situations, e.g: you have disjoint datasets for certain tasks, or you’d like to use a pre-trained pipeline but a downstream task requires its own token representations, you could end up with more than one Transformer component in the pipeline.

| Name | Description |
|---|---|
`layers` | The number of layers produced by the upstream transformer component, excluding the embedding layer. int |
`width` | The width of the vectors produced by the upstream transformer component. int |
`pooling` | Model that is used to perform pooling over the piece representations.
|

`upstream_name`

`grad_factor`

**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]### spacy-curated-transformers.LastTransformerLayerListener.v1

Construct a listener layer that communicates with one or more upstream Transformer components. This layer extracts the output of the last transformer layer and performs pooling over the individual pieces of each Doc token, returning their corresponding representations. The upstream name should either be the wildcard string ’*’, or the name of the Transformer component.

In almost all cases, the wildcard string will suffice as there’ll only be one upstream Transformer component. But in certain situations, e.g: you have disjoint datasets for certain tasks, or you’d like to use a pre-trained pipeline but a downstream task requires its own token representations, you could end up with more than one Transformer component in the pipeline.

| Name | Description |
|---|---|
`width` | The width of the vectors produced by the upstream transformer component. int |
`pooling` | Model that is used to perform pooling over the piece representations.
|

`upstream_name`

`grad_factor`

**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]### spacy-curated-transformers.ScalarWeightingListener.v1

Construct a listener layer that communicates with one or more upstream Transformer components. This layer calculates a weighted representation of all transformer layer outputs and performs pooling over the individual pieces of each Doc token, returning their corresponding representations.

Requires its upstream Transformer components to return all layer outputs from their models. The upstream name should either be the wildcard string ’*’, or the name of the Transformer component.

In almost all cases, the wildcard string will suffice as there’ll only be one upstream Transformer component. But in certain situations, e.g: you have disjoint datasets for certain tasks, or you’d like to use a pre-trained pipeline but a downstream task requires its own token representations, you could end up with more than one Transformer component in the pipeline.

| Name | Description |
|---|---|
`width` | The width of the vectors produced by the upstream transformer component. int |
`weighting` | Model that is used to perform the weighting of the different layer outputs.
|

`pooling`

[Model](https://thinc.ai/docs/api-model)`upstream_name`

`grad_factor`

**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]### spacy-curated-transformers.BertWordpieceEncoder.v1

Construct a WordPiece piece encoder model that accepts a list of token sequences or documents and returns a corresponding list of piece identifiers. This encoder also splits each token on punctuation characters, as expected by most BERT models.

This model must be separately initialized using an appropriate loader.

### spacy-curated-transformers.ByteBpeEncoder.v1

Construct a Byte-BPE piece encoder model that accepts a list of token sequences or documents and returns a corresponding list of piece identifiers.

This model must be separately initialized using an appropriate loader.

### spacy-curated-transformers.CamembertSentencepieceEncoder.v1

Construct a SentencePiece piece encoder model that accepts a list of token sequences or documents and returns a corresponding list of piece identifiers with CamemBERT post-processing applied.

This model must be separately initialized using an appropriate loader.

### spacy-curated-transformers.CharEncoder.v1

Construct a character piece encoder model that accepts a list of token sequences or documents and returns a corresponding list of piece identifiers.

This model must be separately initialized using an appropriate loader.

### spacy-curated-transformers.SentencepieceEncoder.v1

Construct a SentencePiece piece encoder model that accepts a list of token sequences or documents and returns a corresponding list of piece identifiers.

This model must be separately initialized using an appropriate loader.

### spacy-curated-transformers.WordpieceEncoder.v1

Construct a WordPiece piece encoder model that accepts a list of token sequences or documents and returns a corresponding list of piece identifiers. This encoder also splits each token on punctuation characters, as expected by most BERT models.

This model must be separately initialized using an appropriate loader.

### spacy-curated-transformers.XlmrSentencepieceEncoder.v1

Construct a SentencePiece piece encoder model that accepts a list of token sequences or documents and returns a corresponding list of piece identifiers with XLM-RoBERTa post-processing applied.

This model must be separately initialized using an appropriate loader.

[Pretraining architectures ](#pretrain)

The spacy `pretrain`

command lets you initialize a `Tok2Vec`

layer in your
pipeline with information from raw text. To this end, additional layers are
added to build a network for a temporary task that forces the `Tok2Vec`

layer to
learn something about sentence structure and word cooccurrence statistics. Two
pretraining objectives are available, both of which are variants of the cloze
task [Devlin et al. (2018)](https://arxiv.org/abs/1810.04805) introduced for
BERT.

For more information, see the section on
[pretraining](/usage/embeddings-transformers#pretraining).

[spacy.PretrainVectors.v1 ](#pretrain_vectors)

Predict the word’s vector from a static embeddings table as pretraining
objective for a Tok2Vec layer. To use this objective, make sure that the
`initialize.vectors`

section in the config refers to a model with static
vectors.

| Name | Description |
|---|---|
`maxout_pieces` | The number of maxout pieces to use. Recommended values are `2` or `3` . int |
`hidden_size` | Size of the hidden layer of the model. int |
`loss` | The loss function can be either “cosine” or “L2”. We typically recommend to use “cosine”. ~~~str~~ |
CREATES | A callable function that can create the Model, given the `vocab` of the pipeline and the `tok2vec` layer to pretrain. Callable[[
|

[spacy.PretrainCharacters.v1 ](#pretrain_chars)

Predict some number of leading and trailing UTF-8 bytes as pretraining objective for a Tok2Vec layer.

| Name | Description |
|---|---|
`maxout_pieces` | The number of maxout pieces to use. Recommended values are `2` or `3` . int |
`hidden_size` | Size of the hidden layer of the model. int |
`n_characters` | The window of characters - e.g. if `n_characters = 2` , the model will try to predict the first two and last two characters of the word. int |
CREATES | A callable function that can create the Model, given the `vocab` of the pipeline and the `tok2vec` layer to pretrain. Callable[[
|

[Parser & NER architectures ](#parser)

[spacy.TransitionBasedParser.v2 ](#TransitionBasedParser)

Build a transition-based parser model. Can apply to NER or dependency parsing.
Transition-based parsing is an approach to structured prediction where the task
of predicting the structure is mapped to a series of state transitions. You
might find [this tutorial](https://explosion.ai/blog/parsing-english-in-python)
helpful for background information. The neural network state prediction model
consists of either two or three subnetworks:

**tok2vec**: Map each token into a vector representation. This subnetwork is run once for each batch.**lower**: Construct a feature-specific vector for each`(token, feature)`

pair. This is also run once for each batch. Constructing the state representation is then a matter of summing the component features and applying the non-linearity.**upper**(optional): A feed-forward network that predicts scores from the state representation. If not present, the output from the lower model is used as action scores directly.

| Name | Description |
|---|---|
`tok2vec` | Subnetwork to map tokens into vector representations.
|

`state_type`

`extra_state_tokens`

`False`

. bool`hidden_width`

`maxout_pieces`

`1`

, `2`

or `3`

. If `1`

, the maxout non-linearity is replaced with a [non-linearity if](https://thinc.ai/docs/api-layers#relu)`Relu`

`use_upper`

is `True`

, and no non-linearity if `False`

. int`use_upper`

`False`

for large pretrained models such as transformers, and `True`

for smaller networks. The upper layer is computed on CPU, which becomes a bottleneck on larger GPU-based models, where it’s also less necessary. bool`nO`

**CREATES**[Model](https://thinc.ai/docs/api-model)[List[Docs], List[List[[Floats2d](https://thinc.ai/docs/api-types#types)]]][TransitionBasedParser.v1](/api/legacy#TransitionBasedParser_v1) had the exact
same signature, but the `use_upper`

argument was `True`

by default.

[Tagging architectures ](#tagger)

[spacy.Tagger.v2 ](#Tagger)

Build a tagger model, using a provided token-to-vector component. The tagger model adds a linear layer with softmax activation to predict scores given the token vectors.

| Name | Description |
|---|---|
`tok2vec` | Subnetwork to map tokens into vector representations.
|

`nO`

`None`

. Optional[int]`normalize`

`False`

. bool**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]- The
`normalize`

argument was added in`spacy.Tagger.v2`

.`spacy.Tagger.v1`

always normalizes probabilities during inference.

The other arguments are shared between all versions.

[Text classification architectures ](#textcat)

A text classification architecture needs to take a [ Doc](/api/doc) as input,
and produce a score for each potential label class. Textcat challenges can be
binary (e.g. sentiment analysis) or involve multiple possible labels.
Multi-label challenges can either have mutually exclusive labels (each example
has exactly one label), or multiple labels may be applicable at the same time.

As the properties of text classification problems can vary widely, we provide several different built-in architectures. It is recommended to experiment with different architectures and settings to determine what works best on your specific data and challenge.

[spacy.TextCatEnsemble.v2 ](#TextCatEnsemble)

Stacked ensemble of a linear bag-of-words model and a neural network model. The
neural network is built upon a Tok2Vec layer and uses attention. The setting for
whether or not this model should cater for multi-label classification, is taken
from the linear model, where it is stored in `model.attrs["multi_label"]`

.

| Name | Description |
|---|---|
`linear_model` | The linear bag-of-words model.
|

`tok2vec`

`tok2vec`

layer to build the neural network upon. [Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]`nO`

[component will set it when](/api/textcategorizer)`TextCategorizer`

`initialize`

is called. Optional[int]**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)],[Floats2d](https://thinc.ai/docs/api-types#types)][TextCatEnsemble.v1](/api/legacy#TextCatEnsemble_v1) was functionally similar,
but used an internal `tok2vec`

instead of taking it as argument:

| Name | Description |
|---|---|
`exclusive_classes` | Whether or not categories are mutually exclusive. bool |
`pretrained_vectors` | Whether or not pretrained vectors will be used in addition to the feature vectors. bool |
`width` | Output dimension of the feature encoding step. int |
`embed_size` | Input dimension of the feature encoding step. int |
`conv_depth` | Depth of the tok2vec layer. int |
`window_size` | The number of contextual vectors to
|

`ngram_size`

`ngram_size=3`

would give unigram, trigram and bigram features. int`dropout`

`nO`

[component will set it when](/api/textcategorizer)`TextCategorizer`

`initialize`

is called. Optional[int]**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)],[Floats2d](https://thinc.ai/docs/api-types#types)][spacy.TextCatBOW.v3 ](#TextCatBOW)

An n-gram “bag-of-words” model. This architecture should run much faster than the others, but may not be as accurate, especially if texts are short.

| Name | Description |
|---|---|
`exclusive_classes` | Whether or not categories are mutually exclusive. bool |
`ngram_size` | Determines the maximum length of the n-grams in the BOW model. For instance, `ngram_size=3` would give unigram, trigram and bigram features. int |
`no_output_layer` | Whether or not to add an output layer to the model (`Softmax` activation if `exclusive_classes` is `True` , else `Logistic` ). bool |
`length` | The size of the weights vector. The length will be rounded up to the next power of two if it is not a power of two. Defaults to `262144` . int |
`nO` | Output dimension, determined by the number of different labels. If not set, the
`TextCategorizer` |

`initialize`

is called. Optional[int]**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)],[Floats2d](https://thinc.ai/docs/api-types#types)][TextCatBOW.v1](/api/legacy#TextCatBOW_v1)was not yet resizable. Since v2, new labels can be added to this component, even after training.[TextCatBOW.v1](/api/legacy#TextCatBOW_v1)and[TextCatBOW.v2](/api/legacy#TextCatBOW_v2)used an erroneous sparse linear layer that only used a small number of the allocated parameters.[TextCatBOW.v1](/api/legacy#TextCatBOW_v1)and[TextCatBOW.v2](/api/legacy#TextCatBOW_v2)did not have the`length`

argument.

[spacy.TextCatParametricAttention.v1 ](#TextCatParametricAttention)

A neural network model that is built upon Tok2Vec and uses parametric attention to attend to tokens that are relevant to text classification.

| Name | Description |
|---|---|
`tok2vec` | The `tok2vec` layer to build the neural network upon.
|
`exclusive_classes` | Whether or not categories are mutually exclusive. bool |
`nO` | Output dimension, determined by the number of different labels. If not set, the
`TextCategorizer` |

`initialize`

is called. Optional[int]**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)],[Floats2d](https://thinc.ai/docs/api-types#types)][spacy.TextCatReduce.v1 ](#TextCatReduce)

A classifier that pools token hidden representations of each `Doc`

using first,
max or mean reduction and then applies a classification layer. Reductions are
concatenated when multiple reductions are used.

| Name | Description |
|---|---|
`exclusive_classes` | Whether or not categories are mutually exclusive. bool |
`tok2vec` | The
`tok2vec` |

[Model](https://thinc.ai/docs/api-model)

`use_reduce_first`

`Doc`

. bool`use_reduce_last`

`Doc`

. bool`use_reduce_max`

`Doc`

. bool`use_reduce_mean`

`Doc`

. bool`nO`

[component will set it when](/api/textcategorizer)`TextCategorizer`

`initialize`

is called. Optional[int]**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)],[Floats2d](https://thinc.ai/docs/api-types#types)][Span classification architectures ](#spancat)

[spacy.SpanCategorizer.v1 ](#SpanCategorizer)

Build a span categorizer model to power a
[ SpanCategorizer](/api/spancategorizer) component, given a token-to-vector
model, a reducer model to map the sequence of vectors for each span down to a
single vector, and a scorer model to map the vectors to probabilities.

| Name | Description |
|---|---|
`tok2vec` | The token-to-vector model.
|

`reducer`

[Model](https://thinc.ai/docs/api-model)[[Ragged](https://thinc.ai/docs/api-types#ragged),[Floats2d](https://thinc.ai/docs/api-types#types)]`scorer`

[Model](https://thinc.ai/docs/api-model)[[Floats2d](https://thinc.ai/docs/api-types#types),[Floats2d](https://thinc.ai/docs/api-types#types)]**CREATES**[Model](https://thinc.ai/docs/api-model)[Tuple[List[[Doc](/api/doc)],[Ragged](https://thinc.ai/docs/api-types#ragged)],[Floats2d](https://thinc.ai/docs/api-types#types)][spacy.mean_max_reducer.v1 ](#mean_max_reducer)

Reduce sequences by concatenating their mean and max pooled vectors, and then combine the concatenated vectors with a hidden layer.

| Name | Description |
|---|---|
`hidden_size` | The size of the hidden layer. int |

[Entity linking architectures ](#entitylinker)

An [ EntityLinker](/api/entitylinker) component disambiguates textual mentions
(tagged as named entities) to unique identifiers, grounding the named entities
into the “real world”. This requires 3 main components:

- A
(KB) holding the unique identifiers, potential synonyms and prior probabilities.`KnowledgeBase`

- A candidate generation step to produce a set of likely identifiers, given a certain textual mention.
- A machine learning
that picks the most plausible ID from the set of candidates.`Model`


[spacy.EntityLinker.v2 ](#EntityLinker)

The `EntityLinker`

model architecture is a Thinc `Model`

with a
[ Linear](https://thinc.ai/api-layers#linear) output layer.

| Name | Description |
|---|---|
`tok2vec` | The
`tok2vec` |

[Model](https://thinc.ai/docs/api-model)

`nO`

`nO`

dimension is not set, the entity linking component will set it when `initialize`

is called. Optional[int]**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)],[Floats2d](https://thinc.ai/docs/api-types#types)][spacy.EmptyKB.v1 ](#EmptyKB.v1)

A function that creates an empty `KnowledgeBase`

from a [ Vocab](/api/vocab)
instance.

| Name | Description |
|---|---|
`entity_vector_length` | The length of the vectors encoding each entity in the KB. Defaults to `64` . int |

[spacy.EmptyKB.v2 ](#EmptyKB)

A function that creates an empty `KnowledgeBase`

from a [ Vocab](/api/vocab)
instance. This is the default when a new entity linker component is created. It
returns a

`Callable[[Vocab, int], InMemoryLookupKB]`

.[spacy.KBFromFile.v1 ](#KBFromFile)

A function that reads an existing `KnowledgeBase`

from file.

| Name | Description |
|---|---|
`kb_path` | The location of the KB that was stored to file.
|

[spacy.CandidateGenerator.v1 ](#CandidateGenerator)

A function that takes as input a [ KnowledgeBase](/api/kb) and a

[object denoting a named entity, and returns a list of plausible](/api/span)

`Span`

[objects. The default](/api/kb#candidate)

`Candidate`

`CandidateGenerator`

uses the text of a mention to find its potential aliases in
the `KnowledgeBase`

. Note that this function is case-dependent.[spacy.CandidateBatchGenerator.v1 ](#CandidateBatchGenerator)

A function that takes as input a [ KnowledgeBase](/api/kb) and an

`Iterable`

of
[objects denoting named entities, and returns a list of plausible](/api/span)

`Span`

[objects per specified](/api/kb#candidate)

`Candidate`

[. The default](/api/span)

`Span`

`CandidateBatchGenerator`

uses the text of a
mention to find its potential aliases in the `KnowledgeBase`

. Note that this
function is case-dependent.[Coreference ](#coref-architectures)experimental

A [ CoreferenceResolver](/api/coref) component identifies tokens that refer to
the same entity. A

[component infers spans from single tokens. Together these components can be used to reproduce traditional coreference models. You can also omit the](/api/span-resolver)

`SpanResolver`

`SpanResolver`

if working
with only token-level clusters is acceptable.[spacy-experimental.Coref.v1 ](#Coref)experimental

The `Coref`

model architecture is a Thinc `Model`

.

| Name | Description |
|---|---|
`tok2vec` | The
`tok2vec` |

[Model](https://thinc.ai/docs/api-model)

`distance_embedding_size`

`dropout`

`hidden_size`

`depth`

`antecedent_limit`

`antecedent_batch_size`

**CREATES**[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)],[Floats2d](https://thinc.ai/docs/api-types#types)][spacy-experimental.SpanResolver.v1 ](#SpanResolver)experimental

The `SpanResolver`

model architecture is a Thinc `Model`

. Note that
`MentionClusters`

is `List[List[Tuple[int, int]]]`

.

| Name | Description |
|---|---|
`tok2vec` | The
`tok2vec` |

[Model](https://thinc.ai/docs/api-model)

`hidden_size`

`distance_embedding_size`

`conv_channels`

`window_size`

`1`

means consider one token on each side. int`max_distance`

`prefix`

**CREATES**

---

## Source: https://spacy.io/api/data-formats

# Data formats

This section documents input and output formats of data used by spaCy, including
the [training config](/usage/training#config), training data and lexical
vocabulary data. For an overview of label schemes used by the models, see the
[models directory](/models). Each trained pipeline documents the label schemes
used in its components, depending on the data it was trained on.

[Training config ](#config)v3.0

Config files define the training process and pipeline and can be passed to
[ spacy train](/api/cli#train). They use

[Thinc’s configuration system](https://thinc.ai/docs/usage-config)under the hood. For details on how to use training configs, see the

[usage documentation](/usage/training#config). To get started with the recommended settings for your use case, check out the

[quickstart widget](/usage/training#quickstart)or run the

[command.](/api/cli#init-config)

`init config`

`explosion/spaCy/master/spacy/default_config.cfg`


[nlp ](#config-nlp)section

Defines the `nlp`

object, its tokenizer and
[processing pipeline](/usage/processing-pipelines) component names.

| Name | Description |
|---|---|
`lang` | Pipeline language
`null` . str |

`pipeline`

`[components]`

block, e.g. `[components.ner]`

. See docs on [defining components](/usage/training#config-components). Defaults to`[]`

. List[str]`disabled`

`pipeline`

. After a pipeline is loaded, disabled components can be enabled using [. List[str]](/api/language#enable_pipe)`Language.enable_pipe`

`before_creation`

[callback](/usage/training#custom-code-nlp-callbacks)to modify`Language`

subclass before it’s initialized. Defaults to `null`

. Optional[Callable[[Type[[Language](/api/language)]], Type[[Language](/api/language)]]]`after_creation`

[callback](/usage/training#custom-code-nlp-callbacks)to modify`nlp`

object right after it’s initialized. Defaults to `null`

. Optional[Callable[[[Language](/api/language)],[Language](/api/language)]]`after_pipeline_creation`

[callback](/usage/training#custom-code-nlp-callbacks)to modify`nlp`

object after the pipeline components have been added. Defaults to `null`

. Optional[Callable[[[Language](/api/language)],[Language](/api/language)]]`tokenizer`

[. Callable[[str],](/api/tokenizer)`Tokenizer`

[Doc](/api/doc)]`batch_size`

[and](/api/language#pipe)`Language.pipe`

[. int](/api/language#evaluate)`Language.evaluate`

[components ](#config-components)section

This section includes definitions of the
[pipeline components](/usage/processing-pipelines) and their models, if
available. Components in this section can be referenced in the `pipeline`

of the
`[nlp]`

block. Component blocks need to specify either a `factory`

(named
function to use to create component) or a `source`

(name of path of trained
pipeline to copy components from). See the docs on
[defining pipeline components](/usage/training#config-components) for details.

[paths, system ](#config-variables)variables

These sections define variables that can be referenced across the other sections
as variables. For example `${paths.train}`

uses the value of `train`

defined in
the block `[paths]`

. If your config includes custom registered functions that
need paths, you can define them here. All config values can also be
[overwritten](/usage/training#config-overrides) on the CLI when you run
[ spacy train](/api/cli#train), which is especially relevant for data paths
that you don’t want to hard-code in your config file.



[corpora ](#config-corpora)section

This section defines a **dictionary** mapping of string keys to functions. Each
function takes an `nlp`

object and yields [ Example](/api/example) objects. By
default, the two keys

`train`

and `dev`

are specified and each refer to a
[. When pretraining, an additional](/api/top-level#Corpus)

`Corpus`

`pretrain`

section is added that defaults to a [. You can also register custom functions that return a callable.](/api/top-level#jsonlcorpus)

`JsonlCorpus`

| Name | Description |
|---|---|
`train` | Training data corpus, typically used in `[training]` block. Callable[[
|
`dev` | Development data corpus, typically used in `[training]` block. Callable[[
|
`pretrain` | Raw text for
`[pretraining]` block (if available). Callable[[
|

[Language](/api/language)], Iterator[[Example](/api/example)]]Alternatively, the `[corpora]`

block can refer to **one function** that returns
a dictionary keyed by the corpus names. This can be useful if you want to load a
single corpus once and then divide it up into `train`

and `dev`

partitions.

| Name | Description |
|---|---|
`corpora` | A dictionary keyed by string names, mapped to corpus functions that receive the current `nlp` object and return an iterator of
`Example` |

[training ](#config-training)section

This section defines settings and controls for the training and evaluation
process that are used when you run [ spacy train](/api/cli#train).

| Name | Description |
|---|---|
`accumulate_gradient` | Whether to divide the batch up into substeps. Defaults to `1` . int |
`batcher` | Callable that takes an iterator of
`Doc` |

`Doc`

s. Defaults to [. Callable[[Iterator[](/api/top-level#batch_by_words)

`batch_by_words`

[Doc](/api/doc)], Iterator[List[

[Doc](/api/doc)]]]]

`before_to_disk`

`nlp`

object right before it is saved to disk during and after training. Can be used to remove or reset config values or disable components. Defaults to `null`

. Optional[Callable[[[Language](/api/language)],[Language](/api/language)]]`before_update`

v3.5`nlp`

object and a `Dict`

containing the following entries: `step`

, `epoch`

. Can be used to make deferred changes to components. Defaults to `null`

. Optional[Callable[[[Language](/api/language), Dict[str, Any]], None]]`dev_corpus`

`corpora.dev`

. str`dropout`

`0.1`

. float`eval_frequency`

`200`

. int`frozen_components`

[here](/usage/training#config-components)for details. Defaults to`[]`

. List[str]`annotating_components`

v3.1[here](/usage/training#annotating-components)for details. Defaults to`[]`

. List[str]`gpu_allocator`

`"pytorch"`

or `"tensorflow"`

. Defaults to variable `${system.gpu_allocator}`

. str`logger`

`nlp`

and stdout and stderr `IO`

objects, sets up the logger, and returns two new callables to log a training step and to finalize the logger. Defaults to [. Callable[[](/api/top-level#ConsoleLogger)`ConsoleLogger`

[Language](/api/language), IO, IO], [Tuple[Callable[[Dict[str, Any]], None], Callable[[], None]]]]`max_epochs`

`0`

means an unlimited number of epochs. `-1`

means that the train corpus should be streamed rather than loaded into memory with no shuffling within the training loop. Defaults to `0`

. int`max_steps`

`0`

means an unlimited number of steps. Defaults to `20000`

. int`optimizer`

[.](https://thinc.ai/docs/api-optimizers#adam)`Adam`

[Optimizer](https://thinc.ai/docs/api-optimizers)`patience`

`0`

disables early stopping. Defaults to `1600`

. int`score_weights`

[here](/usage/training#metrics)for details. Defaults to`{}`

. Dict[str, float]`seed`

`${system.seed}`

. int`train_corpus`

`corpora.train`

. str[pretraining ](#config-pretraining)sectionoptional

This section is optional and defines settings and controls for
[language model pretraining](/usage/embeddings-transformers#pretraining). It’s
used when you run [ spacy pretrain](/api/cli#pretrain).

| Name | Description |
|---|---|
`max_epochs` | Maximum number of epochs. Defaults to `1000` . int |
`dropout` | The dropout rate. Defaults to `0.2` . float |
`n_save_every` | Saving frequency. Defaults to `null` . Optional[int] |
`objective` | The pretraining objective. Defaults to `{"type": "characters", "n_characters": 4}` . Dict[str, Any] |
`optimizer` | The optimizer. The learning rate schedule and other settings can be configured as part of the optimizer. Defaults to
`Adam` |

[Optimizer](https://thinc.ai/docs/api-optimizers)

`corpus`

`corpora.pretrain`

. str`batcher`

[objects and yields batches of](/api/doc)`Doc`

`Doc`

s. Defaults to [. Callable[[Iterator[](/api/top-level#batch_by_words)`batch_by_words`

[Doc](/api/doc)], Iterator[List[[Doc](/api/doc)]]]]`component`

`"tok2vec"`

. str`layer`

[initialize ](#config-initialize)section

This config block lets you define resources for **initializing the pipeline**.
It’s used by [ Language.initialize](/api/language#initialize) and typically
called right before training (but not at runtime). The section allows you to
specify local file paths or custom functions to load data resources from,
without requiring them at runtime when you load the trained pipeline back in.
Also see the usage guides on the

[config lifecycle](/usage/training#config-lifecycle)and

[custom initialization](/usage/training#initialization).

| Name | Description |
|---|---|
`after_init` | Optional callback to modify the `nlp` object after initialization. Optional[Callable[[
|
`before_init` | Optional callback to modify the `nlp` object before initialization. Optional[Callable[[
|
`components` | Additional arguments passed to the `initialize` method of a pipeline component, keyed by component name. If type annotations are available on the method, the config will be validated against them. The `initialize` methods will always receive the `get_examples` callback and the current `nlp` object. Dict[str, Dict[str, Any]] |
`init_tok2vec` | Optional path to pretrained tok2vec weights created with
`spacy pretrain` |

`${paths.init_tok2vec}`

. Ignored when actually running pretraining, as you’re creating the file to be used later. Optional[str]`lookups`

[. Defaults to](https://github.com/explosion/spacy-lookups-data)`spacy-lookups-data`

`null`

. Optional[[Lookups](/api/lookups)]`tokenizer`

`initialize`

method of the specified tokenizer. Can be used for languages like Chinese that depend on dictionaries or trained models for tokenization. If type annotations are available on the method, the config will be validated against them. The `initialize`

method will always receive the `get_examples`

callback and the current `nlp`

object. Dict[str, Any]`vectors`

[. Defaults to](/api/cli#init-vectors)`init vectors`

`null`

. Optional[str]`vocab_data`

[vocabulary file](/api/data-formats#vocab-jsonl)to initialize vocabulary. Optional[str][Training data ](#training)

[Binary training format ](#binary-training)v3.0

The main data format used in spaCy v3.0 is a **binary format** created by
serializing a [ DocBin](/api/docbin), which represents a collection of

`Doc`

objects. This means that you can train spaCy pipelines using the same format it
outputs: annotated `Doc`

objects. The binary format is extremely **efficient in storage**, especially when packing multiple documents together.

Typically, the extension for these binary files is `.spacy`

, and they are used
as input format for specifying a [training corpus](/api/corpus) and for spaCy’s
CLI [ train](/api/cli#train) command. The built-in

[command helps you convert spaCy’s previous](/api/cli#convert)

`convert`

[JSON format](/api/data-formats#json-input)to the new binary format. It also supports conversion of the

`.conllu`

format used by the
[Universal Dependencies corpora](https://github.com/UniversalDependencies).

Note that while this is the format used to save training data, you do not have
to understand the internal details to use it or create training data. See the
section on [preparing training data](/usage/training#training-data).

[JSON training format ](#json-input)deprecated

## Example structure


Here’s an example of dependencies, part-of-speech tags and named entities, taken from the English Wall Street Journal portion of the Penn Treebank:

`explosion/spaCy/v2.3.x/examples/training/training-data.json`


[Annotation format for creating training examples ](#dict-input)

An [ Example](/api/example) object holds the information for one training
instance. It stores two

[objects: one for holding the gold-standard reference data, and one for holding the predictions of the pipeline. Examples can be created using the](/api/doc)

`Doc`

[method with a reference](/api/example#from_dict)

`Example.from_dict`

`Doc`

and
a dictionary of gold-standard annotations.| Name | Description |
|---|---|
`text` | Raw text. str |
`words` | List of gold-standard tokens. List[str] |
`lemmas` | List of lemmas. List[str] |
`spaces` | List of boolean values indicating whether the corresponding tokens is followed by a space or not. List[bool] |
`tags` | List of fine-grained
|

`pos`

[POS tags](/usage/linguistic-features#pos-tagging). List[str]`morphs`

[morphological features](/usage/linguistic-features#rule-based-morphology). List[str]`sent_starts`

`deps`

[dependency relation](/usage/linguistic-features#dependency-parse)of a token to its head. List[str]`heads`

`entities`

**Option 1:**List of[BILUO tags](/usage/linguistic-features#accessing-ner)per token of the format`"{action}-{label}"`

, or `None`

for unannotated tokens. List[str]`entities`

**Option 2:**List of`(start_char, end_char, label)`

tuples defining all entities in the text. List[Tuple[int, int, str]]`cats`

`label`

/`value`

pairs indicating how relevant a certain [text category](/api/textcategorizer)is for the text. Dict[str, float]`links`

`offset`

/`dict`

pairs defining [named entity links](/usage/linguistic-features#entity-linking). The character offsets are linked to a dictionary of relevant knowledge base IDs. Dict[Tuple[int, int], Dict]`spans`

`spans_key`

/`List[Tuple]`

pairs defining the spans for each spans key as `(start_char, end_char, label, kb_id)`

tuples. Dict[str, List[Tuple[int, int, str, str]]## Examples


[Lexical data for vocabulary ](#vocab-jsonl)

This data file can be provided via the `vocab_data`

setting in the
`[initialize]`

block of the training config to pre-define the lexical data to
initialize the `nlp`

object’s vocabulary with. The file should contain one
lexical entry per line. The first line defines the language and vocabulary
settings. All other lines are expected to be JSON objects describing an
individual lexeme. The lexical attributes will be then set as attributes on
spaCy’s [ Lexeme](/api/lexeme#attributes) object.

## First line


## Entry structure


Here’s an example of the 20 most frequent lexemes in the English training data:

`explosion/spaCy/master/extra/example_data/vocab-data.jsonl`


[Pipeline meta ](#meta)

The pipeline meta is available as the file `meta.json`

and exported
automatically when you save an `nlp`

object to disk. Its contents are available
as [ nlp.meta](/api/language#meta).

| Name | Description |
|---|---|
`lang` | Pipeline language
`"en"` . str |

`name`

`"core_web_sm"`

. The final package name will be `{lang}_{name}`

. Defaults to `"pipeline"`

. str`version`

[. Defaults to](/api/cli#package)`spacy package`

`"0.0.0"`

. str`spacy_version`

[trained pipelines](/models). For instance, a pipeline trained with v3.0.0 will have the version range`">=3.0.0,<3.1.0"`

. str`parent_package`

`"spacy"`

or `"spacy_nightly"`

. Defaults to `"spacy"`

. str`requirements`

[. Should be a list of package names with optional version specifiers, just like you’d define them in a](/api/cli#package)`spacy package`

`setup.cfg`

or `requirements.txt`

. Defaults to `[]`

. List[str]`description`

`""`

. str`author`

`""`

. str`email`

`""`

. str`url`

`""`

. str`license`

`""`

. str`sources`

`"name"`

, `"url"`

, `"author"`

and `"license"`

. [See here](https://github.com/explosion/spacy-models/tree/master/meta)for examples. Defaults to`None`

. Optional[List[Dict[str, str]]]`vectors`

`"width"`

, `"vectors"`

(number of vectors), `"keys"`

and `"name"`

. Dict[str, Any]`pipeline`

[. Only exists for reference and is not used to create the components. This information is defined in the](/api/language#pipe_names)`nlp.pipe_names`

[. Defaults to](/api/data-formats#config)`config.cfg`

`[]`

. List[str]`labels`

[.](/api/language#pipe_labels)`nlp.pipe_labels`

[See here](https://github.com/explosion/spacy-models/tree/master/meta)for examples. Defaults to`{}`

. Dict[str, Dict[str, List[str]]]`performance`

[. Dictionary of](/api/cli#train)`spacy train`

[score names](/usage/training#metrics)mapped to scores. Defaults to`{}`

. Dict[str, Union[float, Dict[str, float]]]`speed`

[. Typically a dictionary with the keys](/api/cli#train)`spacy train`

`"cpu"`

, `"gpu"`

and `"nwords"`

(words per second). Defaults to `{}`

. Dict[str, Optional[Union[float, str]]]`spacy_git_version`

v3.0[used to create pipeline. str](https://github.com/explosion/spaCy)`spacy`

[. Any](/api/language#meta)`nlp.meta`

---

## Source: https://spacy.io/api/cli

# Command Line Interface

spaCy’s CLI provides a range of helpful commands for downloading and training
pipelines, converting data and debugging your config, data and installation. For
a list of available commands, you can type `python -m spacy --help`

. You can
also add the `--help`

flag to any command or subcommand to see the description,
available arguments and usage.

[download ](#download)command

Download [trained pipelines](/usage/models) for spaCy. The downloader finds the
best-matching compatible version and uses `pip install`

to download the Python
package. Direct downloads don’t perform any compatibility checks and require the
pipeline name to be specified with its version (e.g. `en_core_web_sm-3.0.0`

).



| Name | Description |
|---|---|
`model` | Pipeline package name, e.g.
`en_core_web_sm` |

`--direct`

, `-D`

`--sdist`

, `-S`

v3.0`.tar.gz`

archive) instead of the default pre-built binary wheel. bool`--help`

, `-h`

`pip install`

when installing the pipeline package. For example, `--user`

to install to the user home directory or `--no-deps`

to not install package dependencies. Any**CREATES**`site-packages`

directory.[info ](#info)command

Print information about your spaCy installation, trained pipelines and local
setup, and generate [Markdown](https://en.wikipedia.org/wiki/Markdown)-formatted
markup to copy-paste into
[GitHub issues](https://github.com/explosion/spaCy/issues).





| Name | Description |
|---|---|
`model` | A trained pipeline, i.e. package name or path (optional). Optional[str] |
`--markdown` , `-md` | Print information as Markdown. bool |
`--silent` , `-s` | Don’t print anything, just return the values. bool |
`--exclude` , `-e` | Comma-separated keys to exclude from the print-out. Defaults to `"labels"` . Optional[str] |
`--url` , `-u` v3.5.0 | Print the URL to download the most recent compatible version of the pipeline. Requires a pipeline name. bool |
`--help` , `-h` | Show help message and available arguments. bool |
PRINTS | Information about your spaCy installation. |

[validate ](#validate)command

Find all trained pipeline packages installed in the current environment and
check whether they are compatible with the currently installed version of spaCy.
Should be run after upgrading spaCy via `pip install -U spacy`

to ensure that
all installed packages can be used with the new version. It will show a list of
packages and their installed versions. If any package is out of date, the latest
compatible versions and command for updating are shown.



| Name | Description |
|---|---|
PRINTS | Details about the compatibility of your installed pipeline packages. |

[init ](#init)v3.0

The `spacy init`

CLI includes helpful commands for initializing training config
files and pipeline directories.

[init config ](#init-config)commandv3.0

Initialize and save a [ config.cfg file](/usage/training#config) using the

**recommended settings**for your use case. It works just like the

[quickstart widget](/usage/training#quickstart), only that it also auto-fills all default values and exports a

[training](/usage/training#config)-ready config. The settings you specify will impact the suggested model architectures and pipeline setup, as well as the hyperparameters. You can also adjust and customize those settings in your config file later.



| Name | Description |
|---|---|
`output_file` | Path to output `.cfg` file or `-` to write the config to stdout (so you can pipe it forward to a file or to the `train` command). Note that if you’re writing to stdout, no additional logging info is printed.
|
`--lang` , `-l` | Optional code of the
`"en"` . str |

`--pipeline`

, `-p`

[pipeline components](/usage/processing-pipelines#built-in)to include. Defaults to`"tagger,parser,ner"`

. str`--optimize`

, `-o`

`"efficiency"`

or `"accuracy"`

. Whether to optimize for efficiency (faster inference, smaller model, lower memory consumption) or higher accuracy (potentially larger and slower model). This will impact the choice of architecture, pretrained weights and related hyperparameters. Defaults to `"efficiency"`

. str`--gpu`

, `-G`

`--pretraining`

, `-pt`

[). Defaults to](/api/cli#pretrain)`spacy pretrain`

`False`

. bool`--force`

, `-f`

`--help`

, `-h`

**CREATES**[init fill-config ](#init-fill-config)v3.0

Auto-fill a partial [.cfg file](/usage/training#config) with **all default
values**, e.g. a config generated with the
[quickstart widget](/usage/training#quickstart). Config files used for training
should always be complete and not contain any hidden defaults or missing values,
so this command helps you create your final training config. In order to find
the available settings and defaults, all functions referenced in the config will
be created, and their signatures are used to find the defaults. If your config
contains a problem that can’t be resolved automatically, spaCy will show you a
validation error with more details.



| Name | Description |
|---|---|
`base_path` | Path to base config to fill, e.g. generated by the
|

`output_file`

`.cfg`

file or ”-” to write to stdout so you can pipe it to a file. Defaults to ”-” (stdout). [Path](https://docs.python.org/3/library/pathlib.html)`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--pretraining`

, `-pt`

[). Defaults to](/api/cli#pretrain)`spacy pretrain`

`False`

. bool`--diff`

, `-D`

`--help`

, `-h`

**CREATES**[init fill-curated-transformer ](#init-fill-curated-transformer)commandv3.7

Auto-fill the Hugging Face model hyperpameters and loader parameters of a
[Curated Transformer](/api/curatedtransformer) pipeline component in a
[.cfg file](/usage/training#config). The name and revision of the
[Hugging Face model](https://huggingface.co/models) can either be passed as
command-line arguments or read from the
`initialize.components.transformer.encoder_loader`

config section.



| Name | Description |
|---|---|
`base_path` | Path to base config to fill, e.g. generated by the
|

`output_file`

`.cfg`

file or ”-” to write to stdout so you can pipe it to a file. Defaults to ”-” (stdout). [Path](https://docs.python.org/3/library/pathlib.html)`--model-name`

, `-m`

`--model-revision`

, `-r`

`main`

. Optional[str]`--pipe-name`

, `-n`

`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]**CREATES**[init vectors ](#init-vectors)commandv3.0

Convert [word vectors](/usage/linguistic-features#vectors-similarity) for use
with spaCy. Will export an `nlp`

object that you can use in the
[ [initialize]](/api/data-formats#config-initialize) block of your config to
initialize a model with vectors. See the usage guide on

[static vectors](/usage/embeddings-transformers#static-vectors)for details on how to use vectors in your model.



| Name | Description |
|---|---|
`lang` | Pipeline language
`en` . str |

`vectors_loc`

`.txt`

format or as a zipped text file in `.zip`

or `.tar.gz`

format. [Path](https://docs.python.org/3/library/pathlib.html)`output_dir`

[Path](https://docs.python.org/3/library/pathlib.html)`--truncate`

, `-t`

`0`

for no truncation. int`--prune`

, `-p`

`-1`

for no pruning. int`--mode`

, `-m`

`default`

or [. Defaults to](https://github.com/explosion/floret)`floret`

`default`

. str`--attr`

, `-a`

`LOWER`

or `NORM`

) Defaults to `ORTH`

. str`--name`

, `-n`

`meta.json`

, e.g. `en_core_web_md.vectors`

. Optional[str]`--verbose`

, `-V`

`--help`

, `-h`

**CREATES**[init labels ](#init-labels)commandv3.0

Generate JSON files for the labels in the data. This helps speed up the training
process, since spaCy won’t have to preprocess the data to extract the labels.
After generating the labels, you can provide them to components that accept a
`labels`

argument on initialization via the
[ [initialize]](/api/data-formats#config-initialize) block of your config.



| Name | Description |
|---|---|
`config_path` | Path to
`-` , the data will be
|

`output_path`

[Path](https://docs.python.org/3/library/pathlib.html)`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--verbose`

, `-V`

`--gpu-id`

, `-g`

`-1`

for CPU. Defaults to `-1`

. int`--help`

, `-h`

`--`

that correspond to the config section and value to override, e.g. `--paths.train ./train.spacy`

. Any**CREATES**[find-function ](#find-function)commandv3.7

Find the module, path and line number to the file for a given registered function. This functionality is helpful to understand where registered functions, as used in the config file, are defined.



| Name | Description |
|---|---|
`func_name` | Name of the registered function. str |
`--registry` , `-r` | Name of the catalogue registry. str |

[convert ](#convert)command

Convert files into spaCy’s
[binary training data format](/api/data-formats#binary-training), a serialized
[ DocBin](/api/docbin), for use with the

`train`

command and other experiment
management functions. The converter can be specified on the command line, or
chosen based on the file extension of the input file.


| Name | Description |
|---|---|
`input_path` | Input file or directory.
|

`output_dir`

`"-"`

, meaning data will be written to `stdout`

. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--converter`

, `-c`

`--file-type`

, `-t`

`spacy`

(default) for binary [data or](/api/docbin)`DocBin`

`json`

for v2.x JSON format. str`--n-sents`

, `-n`

`conll`

, `conllu`

, `iob`

, `ner`

int`--seg-sents`

, `-s`

`conll`

, `ner`

bool`--base`

, `-b`

, `--model`

`--seg-sents`

). Optional[str]`--morphology`

, `-m`

`conllu`

bool`--merge-subtokens`

, `-T`

`--ner-map`

, `-nm`

`conllu`

Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--lang`

, `-l`

`--concatenate`

, `-C`

`--help`

, `-h`

**CREATES**[training data that can be used with](/api/docbin)`DocBin`

[.](/api/cli#train)`spacy train`

[Converters ](#converters)

| ID | Description |
|---|---|
`auto` | Automatically pick converter based on file extension and file content (default). |
`json` | JSON-formatted training data used in spaCy v2.x. |
`conllu` | Universal Dependencies `.conllu` format. |
`ner` / `conll` | NER with IOB/IOB2/BILUO tags, one token per line with columns separated by whitespace. The first column is the token and the final column is the NER tag. Sentences are separated by blank lines and documents are separated by the line `-DOCSTART- -X- O O` . Supports CoNLL 2003 NER format. See
|
`iob` | NER with IOB/IOB2/BILUO tags, one sentence per line with tokens separated by whitespace and annotation separated by `|` , either `word|B-ENT` or`word|POS|B-ENT` . See
|

[debug ](#debug)v3.0

The `spacy debug`

CLI includes helpful commands for debugging and profiling your
configs, data and implementations.

[debug config ](#debug-config)commandv3.0

Debug a [ config.cfg file](/usage/training#config) and show validation errors.
The command will create all objects in the tree and validate them. Note that
some config validation errors are blocking and will prevent the rest of the
config from being resolved. This means that you may not see all validation
errors at once and some issues are only shown once previous errors have been
fixed. To auto-fill a partial config and save the result, you can use the

[command.](/api/cli#init-fill-config)

`init fill-config`









| Name | Description |
|---|---|
`config_path` | Path to
`-` , the data will be
|

`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--show-functions`

, `-F`

`--show-variables`

, `-V`

`${paths.train}`

and their values that will be used. This also reflects any config overrides provided on the CLI, e.g. `--paths.train /path`

. bool`--help`

, `-h`

`--`

that correspond to the config section and value to override, e.g. `--paths.train ./train.spacy`

. Any**PRINTS**[debug data ](#debug-data)command

Analyze, debug and validate your training and development data. Get useful stats, and find problems like invalid entity annotations, cyclic dependencies, low data labels and more.





| Name | Description |
|---|---|
`config_path` | Path to
`-` , the data will be
|

`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--ignore-warnings`

, `-IW`

`--verbose`

, `-V`

`--no-format`

, `-NF`

`--help`

, `-h`

`--`

that correspond to the config section and value to override, e.g. `--paths.train ./train.spacy`

. Any**PRINTS**[debug diff-config ](#debug-diff)command

Show a diff of a config file with respect to spaCy’s defaults or another config file. If additional settings were used in the creation of the config file, then you must supply these as extra parameters to the command when comparing to the default settings. The generated diff can also be used when posting to the discussion forum to provide more information for the maintainers.





| Name | Description |
|---|---|
`config_path` | Path to
|

`compare_to`

`None`

to compare against default settings. Optional[Union[[Path](https://docs.python.org/3/library/pathlib.html), str]`optimize`

, `-o`

`"efficiency"`

or `"accuracy"`

. Whether the config was optimized for efficiency (faster inference, smaller model, lower memory consumption) or higher accuracy (potentially larger and slower model). Only relevant when comparing against a default config. Defaults to `"efficiency"`

. str`gpu`

, `-G`

`pretraining`

, `-pt`

[). Only relevant when comparing against a default config. Defaults to](/api/cli#pretrain)`spacy pretrain`

`False`

. bool`markdown`

, `-md`

`False`

. bool**PRINTS**[debug profile ](#debug-profile)command

Profile which functions take the most time in a spaCy pipeline. Input should be
formatted as one JSON object per line with a key `"text"`

. It can either be
provided as a JSONL file, or be read from `sys.sytdin`

. If no input file is
specified, the IMDB dataset is loaded via
[ ml_datasets](https://github.com/explosion/ml_datasets).



| Name | Description |
|---|---|
`model` | A loadable spaCy pipeline (package name or path). str |
`inputs` | Path to input file, or `-` for standard input.
|
`--n-texts` , `-n` | Maximum number of texts to use if available. Defaults to `10000` . int |
`--help` , `-h` | Show help message and available arguments. bool |
PRINTS | Profiling information for the pipeline. |

[debug model ](#debug-model)commandv3.0

Debug a Thinc [ Model](https://thinc.ai/docs/api-model) by running it on a
sample text and checking how it updates its internal weights and parameters.



In this example log, we just print the name of each layer after creation of the model (“Step 0”), which helps us to understand the internal structure of the Neural Network, and to focus on specific layers that we want to inspect further (see next example).





In this example log, we see how initialization of the model (Step 1) propagates
the correct values for the `nI`

(input) and `nO`

(output) dimensions of the
various layers. In the `softmax`

layer, this step also defines the `W`

matrix as
an all-zero matrix determined by the `nO`

and `nI`

dimensions. After a first
training step (Step 2), this matrix has clearly updated its values through the
training feedback loop.





| Name | Description |
|---|---|
`config_path` | Path to
`-` , the data will be
|

`component`

`--layers`

, `-l`

`--dimensions`

, `-DIM`

`--parameters`

, `-PAR`

`--gradients`

, `-GRAD`

`--attributes`

, `-ATTR`

`--print-step0`

, `-P0`

`--print-step1`

, `-P1`

`--print-step2`

, `-P2`

`--print-step3`

, `-P3`

`--gpu-id`

, `-g`

`-1`

for CPU. Defaults to `-1`

. int`--help`

, `-h`

`--`

that correspond to the config section and value to override, e.g. `--paths.train ./train.spacy`

. Any**PRINTS**[debug pieces ](#debug-pieces)commandv3.7

Analyze word- or sentencepiece stats.



| Name | Description |
|---|---|
`config_path` | Path to config file. Union[
|

`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--name`

, `-n`

`--`

that correspond to the config section and value to override, e.g. `--paths.train ./train.spacy`

. Any**PRINTS**




[train ](#train)command

Train a pipeline. Expects data in spaCy’s
[binary format](/api/data-formats#training) and a
[config file](/api/data-formats#config) with all settings and hyperparameters.
Will save out the best model from all epochs, as well as the final pipeline. The
`--code`

argument can be used to provide a Python file that’s imported before
the training process starts. This lets you register
[custom functions](/usage/training#custom-functions) and architectures and refer
to them in your config, all while still using spaCy’s built-in `train`

workflow.
If you need to manage complex multi-step training workflows, check out the new
[spaCy projects](/usage/projects).



| Name | Description |
|---|---|
`config_path` | Path to
`-` , the data will be
|

`--output`

, `-o`

[Path](https://docs.python.org/3/library/pathlib.html)]`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--verbose`

, `-V`

`--gpu-id`

, `-g`

`-1`

for CPU. Defaults to `-1`

. int`--help`

, `-h`

`--`

that correspond to the config section and value to override, e.g. `--paths.train ./train.spacy`

. Any**CREATES**[Calling the training function from Python ](#train-function)v3.2

The training CLI exposes a `train`

helper function that lets you run the
training just like `spacy train`

. Usually it’s easier to use the command line
directly, but if you need to kick off training from code this is how to do it.

| Name | Description |
|---|---|
`config_path` | Path to the config to use for training. Union[str,
|

`output_path`

[Path](https://docs.python.org/3/library/pathlib.html)]]*keyword-only*`use_gpu`

`overrides`

[pretrain ](#pretrain)commandexperimental

Pretrain the “token to vector” ([ Tok2vec](/api/tok2vec)) layer of pipeline
components on raw text, using an approximate language-modeling objective.
Specifically, we load pretrained vectors, and train a component like a CNN,
BiLSTM, etc to predict vectors which match the pretrained ones. The weights are
saved to a directory after each epoch. You can then include a

**path to one of these pretrained weights files**in your

[training config](/usage/training#config)as the

`init_tok2vec`

setting when you
train your pipeline. This technique may be especially helpful if you have little
labelled data. See the usage docs on
[pretraining](/usage/embeddings-transformers#pretraining)for more info. To read the raw text, a

[is typically used.](/api/top-level#jsonlcorpus)

`JsonlCorpus`



| Name | Description |
|---|---|
`config_path` | Path to
`-` , the data will be
|

`output_dir`

[Path](https://docs.python.org/3/library/pathlib.html)`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--resume-path`

, `-r`

[Path](https://docs.python.org/3/library/pathlib.html)]`--epoch-resume`

, `-er`

`--resume-path`

. Prevents unintended overwriting of existing weight files. Optional[int]`--gpu-id`

, `-g`

`-1`

for CPU. Defaults to `-1`

. int`--skip-last`

, `-L`

v3.5.2`model-last.bin`

. Defaults to `False`

. bool`--help`

, `-h`

`--`

that correspond to the config section and value to override, e.g. `--training.dropout 0.2`

. Any**CREATES**`spacy train`

.[evaluate ](#evaluate)command

The `evaluate`

subcommand is superseded by
[ spacy benchmark accuracy](/api/cli#benchmark-accuracy).

`evaluate`

is provided as an
alias to `benchmark accuracy`

for compatibility.[benchmark ](#benchmark)v3.5

The `spacy benchmark`

CLI includes commands for benchmarking the accuracy and
speed of your spaCy pipelines.

[accuracy ](#benchmark-accuracy)commandv3.5

Evaluate the accuracy of a trained pipeline. Expects a loadable spaCy pipeline
(package name or path) and evaluation data in the
[binary .spacy format](/api/data-formats#binary-training). The

`--gold-preproc`

option sets up the evaluation examples with gold-standard
sentences and tokens for the predictions. Gold preprocessing helps the
annotations align to the tokenization, and may result in sequences of more
consistent length. However, it may reduce runtime accuracy due to train/test
skew. To render a sample of dependency parses in a HTML file using the
[displaCy visualizations](/usage/visualizers), set as output directory as the

`--displacy-path`

argument.


| Name | Description |
|---|---|
`model` | Pipeline to evaluate. Can be a package or a path to a data directory. str |
`data_path` | Location of evaluation data in spaCy’s
|

`--output`

, `-o`

[Path](https://docs.python.org/3/library/pathlib.html)]`--code`

, `-c`

v3.0[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--gold-preproc`

, `-G`

`--gpu-id`

, `-g`

`-1`

for CPU. int`--displacy-path`

, `-dp`

[Path](https://docs.python.org/3/library/pathlib.html)]`--displacy-limit`

, `-dl`

`25`

. Keep in mind that a significantly higher number might cause the `.html`

files to render slowly. int`--per-component`

, `-P`

v3.6`False`

. bool`--spans-key`

, `-sk`

v3.6.2`Doc.spans`

. Defaults to `sc`

. str`--help`

, `-h`

**CREATES**[speed ](#benchmark-speed)commandv3.5

Benchmark the speed of a trained pipeline with a 95% confidence interval.
Expects a loadable spaCy pipeline (package name or path) and benchmark data in
the [binary .spacy format](/api/data-formats#binary-training). The pipeline is
warmed up before any measurements are taken.



| Name | Description |
|---|---|
`model` | Pipeline to benchmark the speed of. Can be a package or a path to a data directory. str |
`data_path` | Location of benchmark data in spaCy’s
|

`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--batch-size`

, `-b`

`--no-shuffle`

`--gpu-id`

, `-g`

`-1`

for CPU. int`--batches`

`50`

. Optional[int]`--warmup`

, `-w`

`3`

Optional[int]`--help`

, `-h`

**PRINTS**[apply ](#apply)commandv3.5

Applies a trained pipeline to data and stores the resulting annotated documents
in a `DocBin`

. The input can be a single file or a directory. The recognized
input formats are:

`.spacy`

`.jsonl`

containing a user specified`text_key`

- Files with any other extension are assumed to be plain text files containing a single document.

When a directory is provided it is traversed recursively to collect all files.

When loading a .spacy file, any potential annotations stored on the `Doc`

that are not overwritten by the pipeline will be preserved.
If you want to evaluate the pipeline on raw text only, make sure that the .spacy file does not contain any annotations.



| Name | Description |
|---|---|
`model` | Pipeline to apply to the data. Can be a package or a path to a data directory. str |
`data_path` | Location of data to be evaluated in spaCy’s
|

`output-file`

`DocBin`

path. str`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--text-key`

, `-tk`

`.jsonl`

files to use to grab the texts from. Defaults to `text`

. Optional[str]`--force-overwrite`

, `-F`

`output-file`

already exists, then force `apply`

to overwrite it. If this is `False`

(default) then quits with a warning instead. bool`--gpu-id`

, `-g`

`-1`

for CPU. int`--batch-size`

, `-b`

`1`

. int`--n-process`

, `-n`

`1`

. int`--help`

, `-h`

**CREATES**`DocBin`

with the annotations from the `model`

for all the files found in `data-path`

.[find-threshold ](#find-threshold)commandv3.5

Runs prediction trials for a trained model with varying thresholds to maximize
the specified metric. The search space for the threshold is traversed linearly
from 0 to 1 in `n_trials`

steps. Results are displayed in a table on `stdout`

(the corresponding API call to `spacy.cli.find_threshold.find_threshold()`

returns all results).

This is applicable only for components whose predictions are influenced by
thresholds - e.g. `textcat_multilabel`

and `spancat`

, but not `textcat`

. Note
that the full path to the corresponding threshold attribute in the config has to
be provided.

| Name | Description |
|---|---|
`model` | Pipeline to evaluate. Can be a package or a path to a data directory. str |
`data_path` | Path to file with DocBin with docs to use for threshold search.
|

`pipe_name`

`threshold_key`

`scores_key`

`--n_trials`

, `-n`

`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions)for new architectures. Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--gpu-id`

, `-g`

`-1`

for CPU. int`--gold-preproc`

, `-G`

`--verbose`

, `-V`

, `-VV`

`--help`

, `-h`

[assemble ](#assemble)command

Assemble a pipeline from a config file without additional training. Expects a
[config file](/api/data-formats#config) with all settings and hyperparameters.
The `--code`

argument can be used to import a Python file that lets you register
[custom functions](/usage/training#custom-functions) and refer to them in your
config.



| Name | Description |
|---|---|
`config_path` | Path to the
`-` , the data will be
|

`output_dir`

[Path](https://docs.python.org/3/library/pathlib.html)]`--code`

, `-c`

[registering custom functions](/usage/training#custom-functions). Optional[[Path](https://docs.python.org/3/library/pathlib.html)]`--verbose`

, `-V`

`--help`

, `-h`

`--`

that correspond to the config section and value to override, e.g. `--paths.data ./data`

. Any**CREATES**[package ](#package)command

Generate an installable [Python package](/usage/training#models-generating) from
an existing pipeline data directory. All data files are copied over. If
additional code files are provided (e.g. Python files containing custom
registered functions like
[pipeline components](/usage/processing-pipelines#custom-components)), they are
copied into the package and imported in the `__init__.py`

. If the path to a
[ meta.json](/api/data-formats#meta) is supplied, or a

`meta.json`

is found in
the input directory, this file is used. Otherwise, the data can be entered
directly from the command line. spaCy will then create a build artifact that you
can distribute and install with `pip install`

. As of v3.1, the `package`

command
will also create a formatted `README.md`

based on the pipeline information
defined in the `meta.json`

. If a `README.md`

is already present in the source
directory, it will be used instead.


| Name | Description |
|---|---|
`input_dir` | Path to directory containing pipeline data.
|

`output_dir`

[Path](https://docs.python.org/3/library/pathlib.html)`--code`

, `-c`

v3.0`__init__.py`

. This allows including [registering functions](/usage/training#custom-functions)and[custom components](/usage/processing-pipelines#custom-components). str`--meta-path`

, `-m`

[file (optional). Optional[](/api/data-formats#meta)`meta.json`

[Path](https://docs.python.org/3/library/pathlib.html)]`--create-meta`

, `-C`

`meta.json`

file on the command line, even if one already exists in the directory. If an existing file is found, its entries will be shown as the defaults in the command line prompt. bool`--build`

, `-b`

v3.0`sdist`

(for a `.tar.gz`

archive) and/or `wheel`

(for a binary `.whl`

file), or `none`

if you want to run this step manually. The generated artifacts can be installed by `pip install`

. Defaults to `sdist`

. str`--name`

, `-n`

v3.0`--version`

, `-v`

v3.0`--force`

, `-f`

`--help`

, `-h`

**CREATES**[project ](#project)v3.0

The `spacy project`

CLI includes subcommands for working with
[spaCy projects](/usage/projects), end-to-end workflows for building and
deploying custom spaCy pipelines.

[project clone ](#project-clone)command

Clone a project template from a Git repository. Calls into `git`

under the hood
and can use the sparse checkout feature if available, so you’re only downloading
what you need. By default, spaCy’s
[project templates repo](https://github.com/explosion/projects) is used, but you
can provide any other repo (public or private) that you have access to using the
`--repo`

option.



| Name | Description |
|---|---|
`name` | The name of the template to clone, relative to the repo. Can be a top-level directory or a subdirectory like `dir/template` . str |
`dest` | Where to clone the project. Defaults to current working directory.
|

`--repo`

, `-r`

`--branch`

, `-b`

`master`

. str`--sparse`

, `-S`

[sparse checkout](https://git-scm.com/docs/git-sparse-checkout)to only check out and download what’s needed. Requires Git v22.2+. bool`--help`

, `-h`

**CREATES**[project directory](/usage/projects#project-files).[project assets ](#project-assets)command

Fetch project assets like datasets and pretrained weights. Assets are defined in
the `assets`

section of the [ project.yml](/usage/projects#project-yml). If a

`checksum`

is provided, the file is only downloaded if no local file with the
same checksum exists and spaCy will show an error if the checksum of the
downloaded file doesn’t match. If assets don’t specify a `url`

they’re
considered “private” and you have to take care of putting them into the
destination directory yourself. If a local path is provided, the asset is copied
into the current project.


| Name | Description |
|---|---|
`project_dir` | Path to project directory. Defaults to current working directory.
|

`--extra`

, `-e`

v3.3.1`--sparse`

, `-S`

[sparse checkout](https://git-scm.com/docs/git-sparse-checkout)to only check out and download what’s needed. Requires Git v22.2+. bool`--help`

, `-h`

**CREATES**`project.yml`

.[project run ](#project-run)command

Run a named command or workflow defined in the
[ project.yml](/usage/projects#project-yml). If a workflow name is specified,
all commands in the workflow are run, in order. If commands define

[dependencies or outputs](/usage/projects#deps-outputs), they will only be re-run if state has changed. For example, if the input dataset changes, a preprocessing command that depends on those files will be re-run.



| Name | Description |
|---|---|
`subcommand` | Name of the command or workflow to run. str |
`project_dir` | Path to project directory. Defaults to current working directory.
|

`--force`

, `-F`

`--dry`

, `-D`

`--help`

, `-h`

**EXECUTES**`project.yml`

.[project push ](#project-push)command

Upload all available files or directories listed as in the `outputs`

section of
commands to a remote storage. Outputs are archived and compressed prior to
upload, and addressed in the remote storage using the output’s relative path
(URL encoded), a hash of its command string and dependencies, and a hash of its
file contents. This means `push`

should **never overwrite** a file in your
remote. If all the hashes match, the contents are the same and nothing happens.
If the contents are different, the new version of the file is uploaded. Deleting
obsolete files is left up to you.

Remotes can be defined in the `remotes`

section of the
[ project.yml](/usage/projects#project-yml). Under the hood, spaCy uses

[to communicate with the remote storages, so you can use any protocol that](https://cloudpathlib.drivendata.org)

`cloudpathlib`

`cloudpathlib`

supports,
including [S3](https://aws.amazon.com/s3/),

[Google Cloud Storage](https://cloud.google.com/storage), and the local filesystem, although you may need to install extra dependencies to use certain protocols.



| Name | Description |
|---|---|
`remote` | The name of the remote to upload to. Defaults to `"default"` . str |
`project_dir` | Path to project directory. Defaults to current working directory.
|

`--help`

, `-h`

**UPLOADS**[project pull ](#project-pull)command

Download all files or directories listed as `outputs`

for commands, unless they
are already present locally. When searching for files in the remote, `pull`

won’t just look at the output path, but will also consider the **command
string** and the **hashes of the dependencies**. For instance, let’s say you’ve
previously pushed a checkpoint to the remote, but now you’ve changed some
hyper-parameters. Because you’ve changed the inputs to the command, if you run
`pull`

, you won’t retrieve the stale result. If you train your pipeline and push
the outputs to the remote, the outputs will be saved alongside the prior
outputs, so if you change the config back, you’ll be able to fetch back the
result.

Remotes can be defined in the `remotes`

section of the
[ project.yml](/usage/projects#project-yml). Under the hood, spaCy uses

[to communicate with the remote storages, so you can use any protocol that](https://github.com/justindujardin/pathy)

`Pathy`

`Pathy`

supports, including
[S3](https://aws.amazon.com/s3/),

[Google Cloud Storage](https://cloud.google.com/storage), and the local filesystem, although you may need to install extra dependencies to use certain protocols.



| Name | Description |
|---|---|
`remote` | The name of the remote to download from. Defaults to `"default"` . str |
`project_dir` | Path to project directory. Defaults to current working directory.
|

`--help`

, `-h`

**DOWNLOADS**[project document ](#project-document)command

Auto-generate a pretty Markdown-formatted `README`

for your project, based on
its [ project.yml](/usage/projects#project-yml). Will create sections that
document the available commands, workflows and assets. The auto-generated
content will be placed between two hidden markers, so you can add your own
custom content before or after the auto-generated documentation. When you re-run
the

`project document`

command, only the auto-generated part is replaced.


For more examples, see the templates in our
[ projects](https://github.com/explosion/projects) repo.

| Name | Description |
|---|---|
`project_dir` | Path to project directory. Defaults to current working directory.
|

`--output`

, `-o`

`-`

for stdout (default). If a file is specified and it already exists and contains auto-generated docs, only the auto-generated docs section is replaced. [Path](https://docs.python.org/3/library/pathlib.html)`--no-emoji`

, `-NE`

**CREATES**[project dvc ](#project-dvc)command

Auto-generate [Data Version Control](https://dvc.org) (DVC) config file. Calls
[ dvc run](https://dvc.org/doc/command-reference/run) with

`--no-exec`

under
the hood to generate the `dvc.yaml`

. A DVC project can only define one pipeline,
so you need to specify one workflow defined in the
[. If no workflow is specified, the first defined workflow is used. The DVC config will only be updated if the](/usage/projects#project-yml)

`project.yml`

`project.yml`

changed. For details, see the
[DVC integration](/usage/projects#dvc)docs.



| Name | Description |
|---|---|
`project_dir` | Path to project directory. Defaults to current working directory.
|

`workflow`

`project.yml`

. Defaults to first workflow if not set. Optional[str]`--force`

, `-F`

`--verbose`

, `-V`

`--quiet`

, `-q`

`--help`

, `-h`

**CREATES**`dvc.yaml`

file in the project directory, based on the steps defined in the given workflow.[huggingface-hub ](#huggingface-hub)v3.1

The `spacy huggingface-cli`

CLI includes commands for uploading your trained
spaCy pipelines to the [Hugging Face Hub](https://huggingface.co/).

[huggingface-hub push ](#huggingface-hub-push)command

Push a spaCy pipeline to the Hugging Face Hub. Expects a `.whl`

file packaged
with [ spacy package](/api/cli#package) and

`--build wheel`

. For more details,
see the spaCy project [integration](/usage/projects#huggingface_hub).



| Name | Description |
|---|---|
`whl_path` | The path to the `.whl` file packaged with
`spacy package` |
`--org` , `-o` | Optional name of organization to which the pipeline should be uploaded. str |
`--msg` , `-m` | Commit message to use for update. Defaults to `"Update spaCy pipeline"` . str |
`--verbose` , `-V` | Output additional info for debugging, e.g. the full generated hub metadata. bool |
UPLOADS | The pipeline to the hub. |

---

## Source: https://spacy.io/api/top-level

# Top-level Functions

[spacy.load ](#spacy.load)function

Load a pipeline using the name of an installed
[package](/usage/saving-loading#models), a string path or a `Path`

-like object.
spaCy will try resolving the load argument in this order. If a pipeline is
loaded from a string name, spaCy will assume it’s a Python package and import it
and call the package’s own `load()`

method. If a pipeline is loaded from a path,
spaCy will assume it’s a data directory, load its
[ config.cfg](/api/data-formats#config) and use the language and pipeline
information to construct the

`Language`

class. The data will be loaded in via
[. Loading a pipeline from a package will also import any custom code, if present, whereas loading from a directory does not. For these cases, you need to manually import your custom code.](/api/language#from_disk)

`Language.from_disk`

| Name | Description |
|---|---|
`name` | Pipeline to load, i.e. package name or path. Union[str,
|

*keyword-only*`vocab`

`True`

(default), a new `Vocab`

object will be created. Union[[Vocab](/api/vocab), bool]`disable`

[disable](/usage/processing-pipelines#disabling). Disabled pipes will be loaded but they won’t be run unless you explicitly enable them by calling[nlp.enable_pipe](/api/language#enable_pipe). Is merged with the config entry`nlp.disabled`

. Union[str, Iterable[str]]`enable`

v3.4[enable](/usage/processing-pipelines#disabling). All other pipes will be disabled. Union[str, Iterable[str]]`exclude`

v3.0[exclude](/usage/processing-pipelines#disabling). Excluded components won’t be loaded. Union[str, Iterable[str]]`config`

v3.0`"components.name.value"`

. Union[Dict[str, Any],[Config](https://thinc.ai/docs/api-config#config)]**RETURNS**`Language`

object with the loaded pipeline. [Language](/api/language)Essentially, `spacy.load()`

is a convenience wrapper that reads the pipeline’s
[ config.cfg](/api/data-formats#config), uses the language and pipeline
information to construct a

`Language`

object, loads in the model data and
weights, and returns it.## Abstract example


[spacy.blank ](#spacy.blank)function

Create a blank pipeline of a given language class. This function is the twin of
`spacy.load()`

.

| Name | Description |
|---|---|
`name` |
|

*keyword-only*`vocab`

`True`

(default), a new `Vocab`

object will be created. Union[[Vocab](/api/vocab), bool]`config`

v3.0`"components.name.value"`

. Union[Dict[str, Any],[Config](https://thinc.ai/docs/api-config#config)]`meta`

[. Dict[str, Any]](/api/language#meta)`nlp.meta`

**RETURNS**`Language`

object of the appropriate subclass. [Language](/api/language)[spacy.info ](#spacy.info)function

The same as the [ info command](/api/cli#info). Pretty-print information about
your installation, installed pipelines and local setup from within spaCy.

| Name | Description |
|---|---|
`model` | Optional pipeline, i.e. a package name or path (optional). Optional[str] |
keyword-only | |
`markdown` | Print information as Markdown. bool |
`silent` | Don’t print anything, just return. bool |

[spacy.explain ](#spacy.explain)function

Get a description for a given POS tag, dependency label or entity type. For a
list of available terms, see [ glossary.py](https://github.com/explosion/spaCy/tree/master/spacy/glossary.py).

| Name | Description |
|---|---|
`term` | Term to explain. str |
RETURNS | The explanation, or `None` if not found in the glossary. Optional[str] |

[spacy.prefer_gpu ](#spacy.prefer_gpu)function

Allocate data and perform operations on [GPU](/usage#gpu), if available. If
data has already been allocated on CPU, it will not be moved. Ideally, this
function should be called right after importing spaCy and *before* loading any
pipelines.

| Name | Description |
|---|---|
`gpu_id` | Device index to select. Defaults to `0` . int |
RETURNS | Whether the GPU was activated. bool |

[spacy.require_gpu ](#spacy.require_gpu)function

Allocate data and perform operations on [GPU](/usage#gpu). Will raise an error
if no GPU is available. If data has already been allocated on CPU, it will not
be moved. Ideally, this function should be called right after importing spaCy
and *before* loading any pipelines.

| Name | Description |
|---|---|
`gpu_id` | Device index to select. Defaults to `0` . int |
RETURNS | `True` bool |

[spacy.require_cpu ](#spacy.require_cpu)functionv3.0.0

Allocate data and perform operations on CPU. If data has already been allocated
on GPU, it will not be moved. Ideally, this function should be called right
after importing spaCy and *before* loading any pipelines.

| Name | Description |
|---|---|
RETURNS | `True` bool |

[displaCy ](#displacy)

As of v2.0, spaCy comes with a built-in visualization suite. For more info and
examples, see the usage guide on [visualizing spaCy](/usage/visualizers).

[displacy.serve ](#displacy.serve)method

Serve a dependency parse tree or named entity visualization to view it in your browser. Will run a simple web server.

| Name | Description |
|---|---|
`docs` | Document(s) or span(s) to visualize. Union[Iterable[Union[
|

`style`

v3.3`"dep"`

, `"ent"`

or `"span"`

. Defaults to `"dep"`

. str`page`

`True`

. bool`minify`

`False`

. bool`options`

[Visualizer-specific options](/api/top-level#displacy_options), e.g. colors. Dict[str, Any]`manual`

`Doc`

and instead expect a dict or list of dicts. [See here](/usage/visualizers#manual-usage)for formats and examples. Defaults to`False`

. bool`port`

`5000`

. int`host`

`"0.0.0.0"`

. str`auto_select_port`

v3.5`True`

, automatically switch to a different port if the specified port is already in use. Defaults to `False`

. bool[displacy.render ](#displacy.render)method

Render a dependency parse tree or named entity visualization.

| Name | Description |
|---|---|
`docs` | Document(s) or span(s) to visualize. Union[Iterable[Union[
|

`style`

`"dep"`

, `"ent"`

or `"span"`

v3.3. Defaults to `"dep"`

. str`page`

`False`

. bool`minify`

`False`

. bool`options`

[Visualizer-specific options](/api/top-level#displacy_options), e.g. colors. Dict[str, Any]`manual`

`Doc`

and instead expect a dict or list of dicts. [See here](/usage/visualizers#manual-usage)for formats and examples. Defaults to`False`

. bool`jupyter`

[Jupyter](http://jupyter.org/)mode” to return markup ready to be rendered in a notebook. Detected automatically if`None`

(default). Optional[bool]**RETURNS**[displacy.parse_deps ](#displacy.parse_deps)method

Generate dependency parse in `{'words': [], 'arcs': []}`

format. For use with
the `manual=True`

argument in `displacy.render`

.

| Name | Description |
|---|---|
`orig_doc` | Doc or span to parse dependencies. Union[
|

`options`

**RETURNS**[displacy.parse_ents ](#displacy.parse_ents)method

Generate named entities in `[{start: i, end: i, label: 'label'}]`

format. For
use with the `manual=True`

argument in `displacy.render`

.

| Name | Description |
|---|---|
`doc` | Doc to parse entities.
|

`options`

**RETURNS**[displacy.parse_spans ](#displacy.parse_spans)method

Generate spans in `[{start_token: i, end_token: i, label: 'label'}]`

format. For
use with the `manual=True`

argument in `displacy.render`

.

| Name | Description |
|---|---|
`doc` | Doc to parse entities.
|

`options`

**RETURNS**[Visualizer data structures ](#displacy_structures)

You can use displaCy’s data format to manually render data. This can be useful if you want to visualize output from other libraries. You can find examples of displaCy’s different data formats below.

[Dependency Visualizer data structure ](#structure-dep)

| Dictionary Key | Description |
|---|---|
`words` | List of dictionaries describing a word token (see structure below). List[Dict[str, Any]] |
`arcs` | List of dictionaries describing the relations between words (see structure below). List[Dict[str, Any]] |
Optional | |
`title` | Title of the visualization. Optional[str] |
`settings` | Dependency Visualizer options (see
|

| Dictionary Key | Description |
|---|---|
`text` | Text content of the word. str |
`tag` | Fine-grained part-of-speech. str |
`lemma` | Base form of the word. Optional[str] |

| Dictionary Key | Description |
|---|---|
`start` | The index of the starting token. int |
`end` | The index of the ending token. int |
`label` | The type of dependency relation. str |
`dir` | Direction of the relation (`left` , `right` ). str |

[Named Entity Recognition data structure ](#structure-ent)

| Dictionary Key | Description |
|---|---|
`text` | String representation of the document text. str |
`ents` | List of dictionaries describing entities (see structure below). List[Dict[str, Any]] |
Optional | |
`title` | Title of the visualization. Optional[str] |
`settings` | Entity Visualizer options (see
|

| Dictionary Key | Description |
|---|---|
`start` | The index of the first character of the entity. int |
`end` | The index of the last character of the entity. (not inclusive) int |
`label` | Label attached to the entity. str |
Optional | |
`kb_id` | `KnowledgeBase` ID. str |
`kb_url` | `KnowledgeBase` URL. str |

[Span Classification data structure ](#structure-span)

| Dictionary Key | Description |
|---|---|
`text` | String representation of the document text. str |
`spans` | List of dictionaries describing spans (see structure below). List[Dict[str, Any]] |
`tokens` | List of word tokens. List[str] |
Optional | |
`title` | Title of the visualization. Optional[str] |
`settings` | Span Visualizer options (see
|

| Dictionary Key | Description |
|---|---|
`start_token` | The index of the first token of the span in `tokens` . int |
`end_token` | The index of the last token of the span in `tokens` . int |
`label` | Label attached to the span. str |
Optional | |
`kb_id` | `KnowledgeBase` ID. str |
`kb_url` | `KnowledgeBase` URL. str |

[Visualizer options ](#displacy_options)

The `options`

argument lets you specify additional settings for each visualizer.
If a setting is not present in the options, the default value will be used.

[Dependency Visualizer options ](#options-dep)

| Name | Description |
|---|---|
`fine_grained` | Use fine-grained part-of-speech tags (`Token.tag_` ) instead of coarse-grained tags (`Token.pos_` ). Defaults to `False` . bool |
`add_lemma` | Print the lemmas in a separate row below the token texts. Defaults to `False` . bool |
`collapse_punct` | Attach punctuation to tokens. Can make the parse more readable, as it prevents long arcs to attach punctuation. Defaults to `True` . bool |
`collapse_phrases` | Merge noun phrases into one token. Defaults to `False` . bool |
`compact` | “Compact mode” with square arrows that takes up less space. Defaults to `False` . bool |
`color` | Text color. Can be provided in any CSS legal format as a string e.g.: `"#00ff00"` , `"rgb(0, 255, 0)"` , `"hsl(120, 100%, 50%)"` and `"green"` all correspond to the color green (without transparency). Defaults to `"#000000"` . str |
`bg` | Background color. Can be provided in any CSS legal format as a string e.g.: `"#00ff00"` , `"rgb(0, 255, 0)"` , `"hsl(120, 100%, 50%)"` and `"green"` all correspond to the color green (without transparency). Defaults to `"#ffffff"` . str |
`font` | Font name or font family for all text. Defaults to `"Arial"` . str |
`offset_x` | Spacing on left side of the SVG in px. Defaults to `50` . int |
`arrow_stroke` | Width of arrow path in px. Defaults to `2` . int |
`arrow_width` | Width of arrow head in px. Defaults to `10` in regular mode and `8` in compact mode. int |
`arrow_spacing` | Spacing between arrows in px to avoid overlaps. Defaults to `20` in regular mode and `12` in compact mode. int |
`word_spacing` | Vertical spacing between words and arcs in px. Defaults to `45` . int |
`distance` | Distance between words in px. Defaults to `175` in regular mode and `150` in compact mode. int |

[Named Entity Visualizer options ](#displacy_options-ent)

| Name | Description |
|---|---|
`ents` | Entity types to highlight or `None` for all types (default). Optional[List[str]] |
`colors` | Color overrides. Entity types should be mapped to color names or values. Dict[str, str] |
`template` | Optional template to overwrite the HTML used to render entity spans. Should be a format string and can use `{bg}` , `{text}` and `{label}` . See
`templates.py` |
`kb_url_template` v3.2.1 | Optional template to construct the KB url for the entity to link to. Expects a python f-string format with single field to fill in. Optional[str] |

[Span Visualizer options ](#displacy_options-span)

| Name | Description |
|---|---|
`spans_key` | Which spans key to render spans from. Default is `"sc"` . str |
`templates` | Dictionary containing the keys `"span"` , `"slice"` , and `"start"` . These dictate how the overall span, a span slice, and the starting token will be rendered. Optional[Dict[str, str] |
`kb_url_template` | Optional template to construct the KB url for the entity to link to. Expects a python f-string format with single field to fill in Optional[str] |
`colors` | Color overrides. Entity types should be mapped to color names or values. Dict[str, str] |

By default, displaCy comes with colors for all entity types used by
[spaCy’s trained pipelines](/models) for both entity and span visualizer. If
you’re using custom entity types, you can use the `colors`

setting to add your
own colors for them. Your application or pipeline package can also expose a
[ spacy_displacy_colors entry point](/usage/saving-loading#entry-points-displacy)
to add custom labels and their colors automatically.

By default, displaCy links to `#`

for entities without a `kb_id`

set on their
span. If you wish to link an entity to their URL then consider using the
`kb_url_template`

option from above. For example if the `kb_id`

on a span is
`Q95`

and this is a Wikidata identifier then this option can be set to
`https://www.wikidata.org/wiki/{}`

. Clicking on your entity in the rendered HTML
should redirect you to their Wikidata page, in this case
`https://www.wikidata.org/wiki/Q95`

.

[registry ](#registry)v3.0

spaCy’s function registry extends
[Thinc’s registry](https://thinc.ai/docs/api-config#registry) and allows you
to map strings to functions. You can register functions to create architectures,
optimizers, schedules and more, and then refer to them and set their arguments
in your

[config file](/usage/training#config). Python type hints are used to validate the inputs. See the

[Thinc docs](https://thinc.ai/docs/api-config#registry)for details on the

`registry`

methods and our helper library
[for some background on the concept of function registries. spaCy also uses the function registry for language subclasses, model architecture, lookups and pipeline component factories.](https://github.com/explosion/catalogue)

`catalogue`

| Registry name | Description |
|---|---|
`architectures` | Registry for functions that create
`config.cfg` . |

`augmenters`

[data augmentation](/api/top-level#augmenters)callbacks for corpora and other training data iterators.`batchers`

[data batchers](/api/top-level#batchers).`callbacks`

[modify the](/usage/training#custom-code-nlp-callbacks)before training.`nlp`

object`displacy_colors`

[. Automatically reads from](/usage/visualizers)`displacy`

NER visualizer[entry points](/usage/saving-loading#entry-points).`factories`

[pipeline components](/usage/processing-pipelines#custom-components). Added automatically when you use the`@spacy.component`

decorator and also reads from [entry points](/usage/saving-loading#entry-points).`initializers`

[initializers](https://thinc.ai/docs/api-initializers).`languages`

`Language`

subclasses. Automatically reads from [entry points](/usage/saving-loading#entry-points).`layers`

[layers](https://thinc.ai/docs/api-layers).`loggers`

[training results](/usage/training).`lookups`

`vocab.lookups`

.`losses`

[losses](https://thinc.ai/docs/api-loss).`misc`

`optimizers`

[optimizers](https://thinc.ai/docs/api-optimizers).`readers`

[.](/api/corpus)`Corpus`

`schedules`

[schedules](https://thinc.ai/docs/api-schedules).`scorers`

[. Scoring methods are called with](/api/scorer)`Scorer`

`Iterable[Example]`

and arbitrary `**kwargs`

and return scores as `Dict[str, Any]`

.`tokenizers`

`nlp`

object and returns a [or a custom callable.](/api/tokenizer)`Tokenizer`

[spacy-transformers registry ](#registry-transformers)

The following registries are added by the
[ spacy-transformers](https://github.com/explosion/spacy-transformers) package.
See the

[API reference and](/api/transformer)

`Transformer`

[usage docs](/usage/embeddings-transformers)for details.

| Registry name | Description |
|---|---|
`span_getters` |

`Doc`

objects and return a list of `Span`

objects to process by the transformer, e.g. sentences.`annotation_setters`

`Doc`

objects and a [and can set additional annotations on the](/api/transformer#fulltransformerbatch)`FullTransformerBatch`

`Doc`

.[Loggers ](#loggers)v3.0

A logger records the training results. When a logger is created, two functions
are returned: one for logging the information for each training step, and a
second function that is called to finalize the logging when the training is
finished. To log each training step, a
[dictionary](/usage/training#custom-logging) is passed on from the
[ spacy train](/api/cli#train), including information such as the training loss
and the accuracy scores on the development set.

The built-in, default logger is the ConsoleLogger, which prints results to the
console in tabular format and saves them to a `jsonl`

file. The
[spacy-loggers](https://github.com/explosion/spacy-loggers) package, included as
a dependency of spaCy, enables other loggers, such as one that sends results to
a [Weights & Biases](https://www.wandb.com/) dashboard.

Instead of using one of the built-in loggers, you can
[implement your own](/usage/training#custom-logging).

#### spacy.ConsoleLogger.v2 registered function

Writes the results of a training step to the console in a tabular format and
saves them to a `jsonl`

file.





Note that the cumulative loss keeps increasing within one epoch, but should start decreasing across epochs.

| Name | Description |
|---|---|
`progress_bar` | Whether the logger should print a progress bar tracking the steps till the next evaluation pass (default: `False` ). bool |
`console_output` | Whether the logger should print the logs in the console (default: `True` ). bool |
`output_file` | The file to save the training logs to (default: `None` ). Optional[Union[str,
|

[spacy.ConsoleLogger.v3 ](#ConsoleLogger)registered function

Writes the results of a training step to the console in a tabular format and
optionally saves them to a `jsonl`

file.

| Name | Description |
|---|---|
`progress_bar` | Type of progress bar to show in the console: `"train"` , `"eval"` or `None` . |
The bar tracks the number of steps until `training.max_steps` and `training.eval_frequency` are reached respectively (default: `None` ). Optional[str] | |
`console_output` | Whether the logger should print the logs in the console (default: `True` ). bool |
`output_file` | The file to save the training logs to (default: `None` ). Optional[Union[str,
|

[Readers ](#readers)

[File readers ](#file-readers)v3.0

The following file readers are provided by our serialization library
[ srsly](https://github.com/explosion/srsly). All registered functions take one
argument

`path`

, pointing to the file path to load.| Name | Description |
|---|---|
`srsly.read_json.v1` | Read data from a JSON file. |
`srsly.read_jsonl.v1` | Read data from a JSONL (newline-delimited JSON) file. |
`srsly.read_yaml.v1` | Read data from a YAML file. |
`srsly.read_msgpack.v1` | Read data from a binary MessagePack file. |

[spacy.read_labels.v1 ](#read_labels)registered function

Read a JSON-formatted labels file generated with
[ init labels](/api/cli#init-labels). Typically used in the

[block of the training config to speed up the model initialization process and provide pre-generated label sets.](/api/data-formats#config-initialize)

`[initialize]`

| Name | Description |
|---|---|
`path` | The path to the labels file generated with
`init labels` |

[Path](https://docs.python.org/3/library/pathlib.html)

`require`

`False`

and the labels file doesn’t exist, the loader will return `None`

and the `initialize`

method will extract the labels from the data. Defaults to `False`

. bool**CREATES**[Corpus readers ](#corpus-readers)v3.0

Corpus readers are registered functions that load data and return a function
that takes the current `nlp`

object and yields [ Example](/api/example) objects
that can be used for

[training](/usage/training)and

[pretraining](/usage/embeddings-transformers#pretraining). You can replace it with your own registered function in the

[to customize the data loading and streaming.](/api/top-level#registry)

`@readers`

registry[spacy.Corpus.v1 ](#corpus)registered function

The `Corpus`

reader manages annotated corpora and can be used for training and
development datasets in the [DocBin](/api/docbin) (`.spacy`

) format. Also see
the [ Corpus](/api/corpus) class.

| Name | Description |
|---|---|
`path` | The directory or filename to read from. Expects data in spaCy’s binary
`.spacy` format |

[Path](https://docs.python.org/3/library/pathlib.html)]

`gold_preproc`

[for details. bool](/api/corpus#init)`Corpus`

`max_length`

`0`

for no limit. int`limit`

`0`

for no limit. int`augmenter`

`None`

. Optional[Callable]**CREATES**[Corpus](/api/corpus)[spacy.JsonlCorpus.v1 ](#jsonlcorpus)registered function

Create [ Example](/api/example) objects from a JSONL (newline-delimited JSON)
file of texts keyed by

`"text"`

. Can be used to read the raw text corpus for
language model [pretraining](/usage/embeddings-transformers#pretraining)from a JSONL file. Also see the

[class.](/api/corpus#jsonlcorpus)

`JsonlCorpus`

| Name | Description |
|---|---|
`path` | The directory or filename to read from. Expects newline-delimited JSON with a key `"text"` for each record. Union[str,
|
`min_length` | Minimum document length (in tokens). Shorter documents will be skipped. Defaults to `0` , which indicates no limit. int |
`max_length` | Maximum document length (in tokens). Longer documents will be skipped. Defaults to `0` , which indicates no limit. int |
`limit` | Limit corpus to a subset of examples, e.g. for debugging. Defaults to `0` for no limit. int |
CREATES | The corpus reader.
|

[Batchers ](#batchers)v3.0

A data batcher implements a batching strategy that essentially turns a stream of
items into a stream of batches, with each batch consisting of one item or a list
of items. During training, the models update their weights after processing one
batch at a time. Typical batching strategies include presenting the training
data as a stream of batches with similar sizes, or with increasing batch sizes.
See the Thinc documentation on
[ schedules](https://thinc.ai/docs/api-schedules) for a few standard examples.

Instead of using one of the built-in batchers listed here, you can also
[implement your own](/usage/training#custom-code-readers-batchers), which may or
may not use a custom schedule.

[spacy.batch_by_words.v1 ](#batch_by_words)registered function

Create minibatches of roughly a given number of words. If any examples are
longer than the specified batch length, they will appear in a batch by
themselves, or be discarded if `discard_oversize`

is set to `True`

. The argument
`docs`

can be a list of strings, [ Doc](/api/doc) objects or

[objects.](/api/example)

`Example`

| Name | Description |
|---|---|
`seqs` | The sequences to minibatch. Iterable[Any] |
`size` | The target number of words per batch. Can also be a block referencing a schedule, e.g.
`compounding` |

`tolerance`

`discard_oversize`

`get_length`

`len()`

if not set. Optional[Callable[[Any], int]]**CREATES**[spacy.batch_by_sequence.v1 ](#batch_by_sequence)registered function

Create a batcher that creates batches of the specified size.

| Name | Description |
|---|---|
`size` | The target number of items per batch. Can also be a block referencing a schedule, e.g.
`compounding` |

`get_length`

`len()`

if not set. Optional[Callable[[Any], int]]**CREATES**[spacy.batch_by_padded.v1 ](#batch_by_padded)registered function

Minibatch a sequence by the size of padded batches that would result, with sequences binned by length within a window. The padded size is defined as the maximum length of sequences within the batch multiplied by the number of sequences in the batch.

| Name | Description |
|---|---|
`size` | The largest padded size to batch sequences into. Can also be a block referencing a schedule, e.g.
`compounding` |

`buffer`

`discard_oversize`

`get_length`

`len()`

if not set. Optional[Callable[[Any], int]]**CREATES**[Augmenters ](#augmenters)v3.0

Data augmentation is the process of applying small modifications to the training
data. It can be especially useful for punctuation and case replacement – for
example, if your corpus only uses smart quotes and you want to include
variations using regular quotes, or to make the model less sensitive to
capitalization by including a mix of capitalized and lowercase examples. See the
[usage guide](/usage/training#data-augmentation) for details and examples.

[spacy.orth_variants.v1 ](#orth_variants)registered function

Create a data augmentation callback that uses orth-variant replacement. The callback can be added to a corpus or other data iterator during training. It’s especially useful for punctuation and case replacement, to help generalize beyond corpora that don’t have smart quotes, or only have smart quotes etc.

| Name | Description |
|---|---|
`level` | The percentage of texts that will be augmented. float |
`lower` | The percentage of texts that will be lowercased. float |
`orth_variants` | A dictionary containing the single and paired orth variants. Typically loaded from a JSON file. See
`en_orth_variants.json` |

**CREATES**`nlp`

object and an [and yields augmented](/api/example)`Example`

`Example`

objects. Callable[[[Language](/api/language),[Example](/api/example)], Iterator[[Example](/api/example)]][spacy.lower_case.v1 ](#lower_case)registered function

Create a data augmentation callback that lowercases documents. The callback can be added to a corpus or other data iterator during training. It’s especially useful for making the model less sensitive to capitalization.

| Name | Description |
|---|---|
`level` | The percentage of texts that will be augmented. float |
CREATES | A function that takes the current `nlp` object and an
`Example` |

[Callbacks ](#callbacks)v3.0

The config supports [callbacks](/usage/training#custom-code-nlp-callbacks) at
several points in the lifecycle that can be used modify the `nlp`

object.

[spacy.copy_from_base_model.v1 ](#copy_from_base_model)registered function

Copy the tokenizer and/or vocab from the specified models. It’s similar to the
v2 [base model](https://v2.spacy.io/api/cli#train) option and useful in
combination with
[sourced components](/usage/processing-pipelines#sourced-components) when
fine-tuning an existing pipeline. The vocab includes the lookups and the vectors
from the specified model. Intended for use in `[initialize.before_init]`

.

| Name | Description |
|---|---|
`tokenizer` | The pipeline to copy the tokenizer from. Defaults to `None` . Optional[str] |
`vocab` | The pipeline to copy the vocab from. The vocab includes the lookups and vectors. Defaults to `None` . Optional[str] |
CREATES | A function that takes the current `nlp` object and modifies its `tokenizer` and `vocab` . Callable[[
|

[spacy.models_with_nvtx_range.v1 ](#models_with_nvtx_range)registered function

Recursively wrap the models in each pipe using
[NVTX](https://nvidia.github.io/NVTX/) range markers. These markers aid in GPU
profiling by attributing specific operations to a [Model](https://thinc.ai/docs/api-model)’s forward or
backprop passes.

| Name | Description |
|---|---|
`forward_color` | Color identifier for forward passes. Defaults to `-1` . int |
`backprop_color` | Color identifier for backpropagation passes. Defaults to `-1` . int |
CREATES | A function that takes the current `nlp` and wraps forward/backprop passes in NVTX ranges. Callable[[
|

[spacy.models_and_pipes_with_nvtx_range.v1 ](#models_and_pipes_with_nvtx_range)registered functionv3.4

Recursively wrap both the models and methods of each pipe using
[NVTX](https://nvidia.github.io/NVTX/) range markers. By default, the following
methods are wrapped: `pipe`

, `predict`

, `set_annotations`

, `update`

, `rehearse`

,
`get_loss`

, `initialize`

, `begin_update`

, `finish_update`

, `update`

.

| Name | Description |
|---|---|
`forward_color` | Color identifier for model forward passes. Defaults to `-1` . int |
`backprop_color` | Color identifier for model backpropagation passes. Defaults to `-1` . int |
`additional_pipe_functions` | Additional pipeline methods to wrap. Keys are pipeline names and values are lists of method identifiers. Defaults to `None` . Optional[Dict[str, List[str]]] |
CREATES | A function that takes the current `nlp` and wraps pipe models and methods in NVTX ranges. Callable[[
|

[Training data and alignment ](#gold)

[training.offsets_to_biluo_tags ](#offsets_to_biluo_tags)function

Encode labelled spans into per-token tags, using the
[BILUO scheme](/usage/linguistic-features#accessing-ner) (Begin, In, Last, Unit,
Out). Returns a list of strings, describing the tags. Each tag string will be in
the form of either `""`

, `"O"`

or `"{action}-{label}"`

, where action is one of
`"B"`

, `"I"`

, `"L"`

, `"U"`

. The string `"-"`

is used where the entity offsets
don’t align with the tokenization in the `Doc`

object. The training algorithm
will view these as missing values. `O`

denotes a non-entity token. `B`

denotes
the beginning of a multi-token entity, `I`

the inside of an entity of three or
more tokens, and `L`

the end of an entity of two or more tokens. `U`

denotes a
single-token entity.

| Name | Description |
|---|---|
`doc` | The document that the entity offsets refer to. The output tags will refer to the token boundaries within the document.
|

`entities`

`(start, end, label)`

triples. `start`

and `end`

should be character-offset integers denoting the slice into the original string. List[Tuple[int, int, Union[str, int]]]`missing`

`"O"`

. str**RETURNS**[BILUO](/usage/linguistic-features#accessing-ner)tags. List[str][training.biluo_tags_to_offsets ](#biluo_tags_to_offsets)function

Encode per-token tags following the
[BILUO scheme](/usage/linguistic-features#accessing-ner) into entity offsets.

| Name | Description |
|---|---|
`doc` | The document that the BILUO tags refer to.
|

`tags`

[BILUO](/usage/linguistic-features#accessing-ner)tags with each tag describing one token. Each tag string will be of the form of either`""`

, `"O"`

or `"{action}-{label}"`

, where action is one of `"B"`

, `"I"`

, `"L"`

, `"U"`

. List[str]**RETURNS**`(start, end, label)`

triples. `start`

and `end`

will be character-offset integers denoting the slice into the original string. List[Tuple[int, int, str]][training.biluo_tags_to_spans ](#biluo_tags_to_spans)function

Encode per-token tags following the
[BILUO scheme](/usage/linguistic-features#accessing-ner) into
[ Span](/api/span) objects. This can be used to create entity spans from
token-based tags, e.g. to overwrite the

`doc.ents`

.| Name | Description |
|---|---|
`doc` | The document that the BILUO tags refer to.
|

`tags`

[BILUO](/usage/linguistic-features#accessing-ner)tags with each tag describing one token. Each tag string will be of the form of either`""`

, `"O"`

or `"{action}-{label}"`

, where action is one of `"B"`

, `"I"`

, `"L"`

, `"U"`

. List[str]**RETURNS**`Span`

objects with added entity labels. List[[Span](/api/span)][training.biluo_to_iob ](#biluo_to_iob)function

Convert a sequence of [BILUO](/usage/linguistic-features#accessing-ner) tags to
[IOB](/usage/linguistic-features#accessing-ner) tags. This is useful if you want
use the BILUO tags with a model that only supports IOB tags.

| Name | Description |
|---|---|
`tags` | A sequence of
|

**RETURNS**[IOB](/usage/linguistic-features#accessing-ner)tags. List[str][training.iob_to_biluo ](#iob_to_biluo)function

Convert a sequence of [IOB](/usage/linguistic-features#accessing-ner) tags to
[BILUO](/usage/linguistic-features#accessing-ner) tags. This is useful if you
want use the IOB tags with a model that only supports BILUO tags.

| Name | Description |
|---|---|
`tags` | A sequence of
|

**RETURNS**[BILUO](/usage/linguistic-features#accessing-ner)tags. List[str][training.biluo_to_iob ](#biluo_to_iob)function

Convert a sequence of [BILUO](/usage/linguistic-features#accessing-ner) tags to
[IOB](/usage/linguistic-features#accessing-ner) tags. This is useful if you want
use the BILUO tags with a model that only supports IOB tags.

| Name | Description |
|---|---|
`tags` | A sequence of
|

**RETURNS**[IOB](/usage/linguistic-features#accessing-ner)tags. List[str][training.iob_to_biluo ](#iob_to_biluo)function

Convert a sequence of [IOB](/usage/linguistic-features#accessing-ner) tags to
[BILUO](/usage/linguistic-features#accessing-ner) tags. This is useful if you
want use the IOB tags with a model that only supports BILUO tags.

| Name | Description |
|---|---|
`tags` | A sequence of
|

**RETURNS**[BILUO](/usage/linguistic-features#accessing-ner)tags. List[str][Utility functions ](#util)

spaCy comes with a small collection of utility functions located in
[ spacy/util.py](https://github.com/explosion/spaCy/tree/master/spacy/util.py). Because utility functions are
mostly intended for

**internal use within spaCy**, their behavior may change with future releases. The functions documented on this page should be safe to use and we’ll try to ensure backwards compatibility. However, we recommend having additional tests in place if your application depends on any of spaCy’s utilities.

[util.get_lang_class ](#util.get_lang_class)function

Import and load a `Language`

class. Allows lazy-loading
[language data](/usage/linguistic-features#language-data) and importing
languages using the two-letter language code. To add a language code for a
custom language class, you can register it using the
[ @registry.languages](/api/top-level#registry) decorator.

| Name | Description |
|---|---|
`lang` | Two-letter language code, e.g. `"en"` . str |
RETURNS | The respective subclass.
|

[util.lang_class_is_loaded ](#util.lang_class_is_loaded)function

Check whether a `Language`

subclass is already loaded. `Language`

subclasses are
loaded lazily to avoid expensive setup code associated with the language data.

| Name | Description |
|---|---|
`name` | Two-letter language code, e.g. `"en"` . str |
RETURNS | Whether the class has been loaded. bool |

[util.load_model ](#util.load_model)function

Load a pipeline from a package or data path. If called with a string name, spaCy
will assume the pipeline is a Python package and import and call its `load()`

method. If called with a path, spaCy will assume it’s a data directory, read the
language and pipeline settings from the [ config.cfg](/api/data-formats#config)
and create a

`Language`

object. The model data will then be loaded in via
[.](/api/language#from_disk)

`Language.from_disk`

| Name | Description |
|---|---|
`name` | Package name or path. str |
keyword-only | |
`vocab` | Optional shared vocab to pass in on initialization. If `True` (default), a new `Vocab` object will be created. Union[
|
`disable` | Name(s) of pipeline component(s) to
`nlp.enable_pipe` |

`enable`

v3.4[enable](/usage/processing-pipelines#disabling). All other pipes will be disabled, but can be enabled again using[. Union[str, Iterable[str]]](/api/language#enable_pipe)`nlp.enable_pipe`

`exclude`

[exclude](/usage/processing-pipelines#disabling). Excluded components won’t be loaded. Union[str, Iterable[str]]`config`

v3.0`"nlp.pipeline"`

. Union[Dict[str, Any],[Config](https://thinc.ai/docs/api-config#config)]**RETURNS**`Language`

class with the loaded pipeline. [Language](/api/language)[util.load_model_from_init_py ](#util.load_model_from_init_py)function

A helper function to use in the `load()`

method of a pipeline package’s
[ __init__.py](https://github.com/explosion/spacy-models/tree/master/template/model/xx_model_name/__init__.py).

| Name | Description |
|---|---|
`init_file` | Path to package’s `__init__.py` , i.e. `__file__` . Union[str,
|
keyword-only | |
`vocab` v3.0 | Optional shared vocab to pass in on initialization. If `True` (default), a new `Vocab` object will be created. Union[
|
`disable` | Name(s) of pipeline component(s) to
`nlp.enable_pipe` |

`enable`

v3.4[enable](/usage/processing-pipelines#disabling). All other pipes will be disabled, but can be enabled again using[. Union[str, Iterable[str]]](/api/language#enable_pipe)`nlp.enable_pipe`

`exclude`

v3.0[exclude](/usage/processing-pipelines#disabling). Excluded components won’t be loaded. Union[str, Iterable[str]]`config`

v3.0`"nlp.pipeline"`

. Union[Dict[str, Any],[Config](https://thinc.ai/docs/api-config#config)]**RETURNS**`Language`

class with the loaded pipeline. [Language](/api/language)[util.load_config ](#util.load_config)functionv3.0

Load a pipeline’s [ config.cfg](/api/data-formats#config) from a file path. The
config typically includes details about the components and how they’re created,
as well as all training settings and hyperparameters.

| Name | Description |
|---|---|
`path` | Path to the pipeline’s `config.cfg` . Union[str,
|
`overrides` | Optional config overrides to replace in loaded config. Can be provided as nested dict, or as flat dict with keys in dot notation, e.g. `"nlp.pipeline"` . Dict[str, Any] |
`interpolate` | Whether to interpolate the config and replace variables like `${paths.train}` with their values. Defaults to `False` . bool |
RETURNS | The pipeline’s config.
|

[util.load_meta ](#util.load_meta)functionv3.0

Get a pipeline’s [ meta.json](/api/data-formats#meta) from a file path and
validate its contents. The meta typically includes details about author,
licensing, data sources and version.

| Name | Description |
|---|---|
`path` | Path to the pipeline’s `meta.json` . Union[str,
|
RETURNS | The pipeline’s meta data. Dict[str, Any] |

[util.get_installed_models ](#util.get_installed_models)functionv3.0

List all pipeline packages installed in the current environment. This will
include any spaCy pipeline that was packaged with
[ spacy package](/api/cli#package). Under the hood, pipeline packages expose a
Python entry point that spaCy can check, without having to load the

`nlp`

object.| Name | Description |
|---|---|
RETURNS | The string names of the pipelines installed in the current environment. List[str] |

[util.is_package ](#util.is_package)function

Check if string maps to a package installed via pip. Mainly used to validate
[pipeline packages](/usage/models).

| Name | Description |
|---|---|
`name` | Name of package. str |
RETURNS | `True` if installed package, `False` if not. bool |

[util.get_package_path ](#util.get_package_path)function

Get path to an installed package. Mainly used to resolve the location of
[pipeline packages](/usage/models). Currently imports the package to find its
path.

| Name | Description |
|---|---|
`package_name` | Name of installed package. str |
RETURNS | Path to pipeline package directory.
|

[util.is_in_jupyter ](#util.is_in_jupyter)function

Check if user is running spaCy from a [Jupyter](https://jupyter.org) notebook by
detecting the IPython kernel. Mainly used for the
[ displacy](/api/top-level#displacy) visualizer.

| Name | Description |
|---|---|
RETURNS | `True` if in Jupyter, `False` if not. bool |

[util.compile_prefix_regex ](#util.compile_prefix_regex)function

Compile a sequence of prefix rules into a regex object.

| Name | Description |
|---|---|
`entries` | The prefix rules, e.g.
`lang.punctuation.TOKENIZER_PREFIXES` |

[Pattern](https://docs.python.org/3/library/re.html#regular-expression-objects)]]

**RETURNS**[.](/api/tokenizer#attributes)`Tokenizer.prefix_search`

[Pattern](https://docs.python.org/3/library/re.html#regular-expression-objects)[util.compile_suffix_regex ](#util.compile_suffix_regex)function

Compile a sequence of suffix rules into a regex object.

| Name | Description |
|---|---|
`entries` | The suffix rules, e.g.
`lang.punctuation.TOKENIZER_SUFFIXES` |

[Pattern](https://docs.python.org/3/library/re.html#regular-expression-objects)]]

**RETURNS**[.](/api/tokenizer#attributes)`Tokenizer.suffix_search`

[Pattern](https://docs.python.org/3/library/re.html#regular-expression-objects)[util.compile_infix_regex ](#util.compile_infix_regex)function

Compile a sequence of infix rules into a regex object.

| Name | Description |
|---|---|
`entries` | The infix rules, e.g.
`lang.punctuation.TOKENIZER_INFIXES` |

[Pattern](https://docs.python.org/3/library/re.html#regular-expression-objects)]]

**RETURNS**[.](/api/tokenizer#attributes)`Tokenizer.infix_finditer`

[Pattern](https://docs.python.org/3/library/re.html#regular-expression-objects)[util.minibatch ](#util.minibatch)function

Iterate over batches of items. `size`

may be an iterator, so that batch-size can
vary on each step.

| Name | Description |
|---|---|
`items` | The items to batch up. Iterable[Any] |
`size` | The batch size(s). Union[int, Sequence[int]] |
YIELDS | The batches. |

[util.filter_spans ](#util.filter_spans)function

Filter a sequence of [ Span](/api/span) objects and remove duplicates or
overlaps. Useful for creating named entities (where one token can only be part
of one entity) or when merging spans with

[. When spans overlap, the (first) longest span is preferred over shorter spans.](/api/doc#retokenizer.merge)

`Retokenizer.merge`

| Name | Description |
|---|---|
`spans` | The spans to filter. Iterable[
|

**RETURNS**[Span](/api/span)][util.get_words_and_spaces ](#get_words_and_spaces)functionv3.0

Given a list of words and a text, reconstruct the original tokens and return a
list of words and spaces that can be used to create a [ Doc](/api/doc#init).
This can help recover destructive tokenization that didn’t preserve any
whitespace information.

| Name | Description |
|---|---|
`words` | The list of words. Iterable[str] |
`text` | The original text. str |
RETURNS | A list of words and a list of boolean values indicating whether the word at this position is followed by a space. Tuple[List[str], List[bool]] |

---

## Source: https://spacy.io/api/doc

# Doc

A `Doc`

is a sequence of [ Token](/api/token) objects. Access sentences and
named entities, export annotations to numpy arrays, losslessly serialize to
compressed binary strings. The

`Doc`

object holds an array of
[structs. The Python-level](/api/cython-structs#tokenc)

`TokenC`

`Token`

and
[objects are views of this array, i.e. they don’t own the data themselves.](/api/span)

`Span`

[Doc.__init__ ](#init)method

Construct a `Doc`

object. The most common way to get a `Doc`

object is via the
`nlp`

object.

| Name | Description |
|---|---|
`vocab` | A storage container for lexical types.
|

`words`

`spaces`

`words`

, if specified. Defaults to a sequence of `True`

. Optional[List[bool]]*keyword-only*`user_data`

`tags`

v3.0`words`

, to assign as `token.tag`

for each word. Defaults to `None`

. Optional[List[str]]`pos`

v3.0`words`

, to assign as `token.pos`

for each word. Defaults to `None`

. Optional[List[str]]`morphs`

v3.0`words`

, to assign as `token.morph`

for each word. Defaults to `None`

. Optional[List[str]]`lemmas`

v3.0`words`

, to assign as `token.lemma`

for each word. Defaults to `None`

. Optional[List[str]]`heads`

v3.0`words`

, to assign as the head for each word. Head indices are the absolute position of the head in the `Doc`

. Defaults to `None`

. Optional[List[int]]`deps`

v3.0`words`

, to assign as `token.dep`

for each word. Defaults to `None`

. Optional[List[str]]`sent_starts`

v3.0`words`

, to assign as `token.is_sent_start`

. Will be overridden by heads if `heads`

is provided. Defaults to `None`

. Optional[List[Union[bool, int, None]]]`ents`

v3.0`words`

, to assign the token-based IOB tag. Defaults to `None`

. Optional[List[str]][Doc.__getitem__ ](#getitem)method

Get a [ Token](/api/token) object at position

`i`

, where `i`

is an integer.
Negative indexing is supported, and follows the usual Python semantics, i.e.
`doc[-2]`

is `doc[len(doc) - 2]`

.| Name | Description |
|---|---|
`i` | The index of the token. int |
RETURNS | The token at `doc[i]` .
|

Get a [ Span](/api/span) object, starting at position

`start`

(token index) and
ending at position `end`

(token index). For instance, `doc[2:5]`

produces a span
consisting of tokens 2, 3 and 4. Stepped slices (e.g. `doc[start : end : step]`

)
are not supported, as `Span`

objects must be contiguous (cannot have gaps). You
can use negative indices and open-ended ranges, which have their normal Python
semantics.| Name | Description |
|---|---|
`start_end` | The slice of the document to get. Tuple[int, int] |
RETURNS | The span at `doc[start:end]` .
|

[Doc.__iter__ ](#iter)method

Iterate over `Token`

objects, from which the annotations can be easily accessed.

This is the main way of accessing [ Token](/api/token) objects, which are the
main way annotations are accessed from Python. If faster-than-Python speeds are
required, you can instead access the annotations as a numpy array, or access the
underlying C data directly from Cython.

| Name | Description |
|---|---|
YIELDS | A `Token` object.
|

[Doc.__len__ ](#len)method

Get the number of tokens in the document.

| Name | Description |
|---|---|
RETURNS | The number of tokens in the document. int |

[Doc.set_extension ](#set_extension)classmethod

Define a custom attribute on the `Doc`

which becomes available via `Doc._`

. For
details, see the documentation on
[custom attributes](/usage/processing-pipelines#custom-components-attributes).

| Name | Description |
|---|---|
`name` | Name of the attribute to set by the extension. For example, `"my_attr"` will be available as `doc._.my_attr` . str |
`default` | Optional default value of the attribute if no getter or method is defined. Optional[Any] |
`method` | Set a custom method on the object, for example `doc._.compare(other_doc)` . Optional[Callable[[
|
`getter` | Getter function that takes the object and returns an attribute value. Is called when the user accesses the `._` attribute. Optional[Callable[[
|
`setter` | Setter function that takes the `Doc` and a value, and modifies the object. Is called when the user writes to the `Doc._` attribute. Optional[Callable[[
|
`force` | Force overwriting existing attribute. bool |

[Doc.get_extension ](#get_extension)classmethod

Look up a previously registered extension by name. Returns a 4-tuple
`(default, method, getter, setter)`

if the extension is registered. Raises a
`KeyError`

otherwise.

| Name | Description |
|---|---|
`name` | Name of the extension. str |
RETURNS | A `(default, method, getter, setter)` tuple of the extension. Tuple[Optional[Any], Optional[Callable], Optional[Callable], Optional[Callable]] |

[Doc.has_extension ](#has_extension)classmethod

Check whether an extension has been registered on the `Doc`

class.

| Name | Description |
|---|---|
`name` | Name of the extension to check. str |
RETURNS | Whether the extension has been registered. bool |

[Doc.remove_extension ](#remove_extension)classmethod

Remove a previously registered extension.

| Name | Description |
|---|---|
`name` | Name of the extension. str |
RETURNS | A `(default, method, getter, setter)` tuple of the removed extension. Tuple[Optional[Any], Optional[Callable], Optional[Callable], Optional[Callable]] |

[Doc.char_span ](#char_span)method

Create a `Span`

object from the slice `doc.text[start_idx:end_idx]`

. Returns
`None`

if the character indices don’t map to a valid span using the default
alignment mode `“strict”.

| Name | Description |
|---|---|
`start` | The index of the first character of the span. int |
`end` | The index of the last character after the span. int |
`label` | A label to attach to the span, e.g. for named entities. Union[int, str] |
`kb_id` | An ID from a knowledge base to capture the meaning of a named entity. Union[int, str] |
`vector` | A meaning representation of the span.
|

`alignment_mode`

`"strict"`

(no snapping), `"contract"`

(span of all tokens completely within the character span), `"expand"`

(span of all tokens at least partially covered by the character span). Defaults to `"strict"`

. str`span_id`

v3.3.1**RETURNS**`None`

. Optional[[Span](/api/span)][Doc.set_ents ](#set_ents)methodv3.0

Set the named entities in the document.

| Name | Description |
|---|---|
`entities` | Spans with labels to set as entities. List[
|

*keyword-only*`blocked`

[Span](/api/span)]]`missing`

[Span](/api/span)]]`outside`

[Span](/api/span)]]`default`

`"blocked"`

, `"missing"`

, `"outside"`

and `"unmodified"`

(preserve current state). Defaults to `"outside"`

. str[Doc.similarity ](#similarity)methodNeeds model

Make a semantic similarity estimate. The default estimate is cosine similarity using an average of word vectors.

| Name | Description |
|---|---|
`other` | The object to compare with. By default, accepts `Doc` , `Span` , `Token` and `Lexeme` objects. Union[
|
RETURNS | A scalar similarity score. Higher is more similar. float |

[Doc.count_by ](#count_by)method

Count the frequencies of a given attribute. Produces a dict of
`{attr (int): count (ints)}`

frequencies, keyed by the values of the given
attribute ID.

| Name | Description |
|---|---|
`attr_id` | The attribute ID. int |
RETURNS | A dictionary mapping attributes to integer counts. Dict[int, int] |

[Doc.get_lca_matrix ](#get_lca_matrix)method

Calculates the lowest common ancestor matrix for a given `Doc`

. Returns LCA
matrix containing the integer index of the ancestor, or `-1`

if no common
ancestor is found, e.g. if span excludes a necessary ancestor.

| Name | Description |
|---|---|
RETURNS | The lowest common ancestor matrix of the `Doc` .
|

[Doc.has_annotation ](#has_annotation)method

Check whether the doc contains annotation on a
[ Token attribute](/api/token#attributes).

| Name | Description |
|---|---|
`attr` | The attribute string name or int ID. Union[int, str] |
keyword-only | |
`require_complete` | Whether to check that the attribute is set on every token in the doc. Defaults to `False` . bool |
RETURNS | Whether specified annotation is present in the doc. bool |

[Doc.to_array ](#to_array)method

Export given token attributes to a numpy `ndarray`

. If `attr_ids`

is a sequence
of `M`

attributes, the output array will be of shape `(N, M)`

, where `N`

is the
length of the `Doc`

(in tokens). If `attr_ids`

is a single attribute, the output
shape will be `(N,)`

. You can specify attributes by integer ID (e.g.
`spacy.attrs.LEMMA`

) or string name (e.g. “LEMMA” or “lemma”). The values will
be 64-bit integers.

Returns a 2D array with one row per token and one column per attribute (when
`attr_ids`

is a list), or as a 1D numpy array, with one item per attribute (when
`attr_ids`

is a single value).

| Name | Description |
|---|---|
`attr_ids` | A list of attributes (int IDs or string names) or a single attribute (int ID or string name). Union[int, str, List[Union[int, str]]] |
RETURNS | The exported attributes as a numpy array. Union[
|

[Doc.from_array ](#from_array)method

Load attributes from a numpy array. Write to a `Doc`

object, from an `(M, N)`

array of attributes.

| Name | Description |
|---|---|
`attrs` | A list of attribute ID ints. List[int] |
`array` | The attribute values to load.
|

`exclude`

[serialization fields](/api/doc#serialization-fields)to exclude. Iterable[str]**RETURNS**`Doc`

itself. [Doc](/api/doc)[Doc.from_docs ](#from_docs)staticmethodv3.0

Concatenate multiple `Doc`

objects to form a new one. Raises an error if the
`Doc`

objects do not all share the same `Vocab`

.

| Name | Description |
|---|---|
`docs` | A list of `Doc` objects. List[
|
`ensure_whitespace` | Insert a space between two adjacent docs whenever the first doc does not end in whitespace. bool |
`attrs` | Optional list of attribute ID ints or attribute name strings. Optional[List[Union[str, int]]] |
keyword-only | |
`exclude` v3.3 | String names of Doc attributes to exclude. Supported: `spans` , `tensor` , `user_data` . Iterable[str] |
RETURNS | The new `Doc` object that is containing the other docs or `None` , if `docs` is empty or `None` . Optional[
|

[Doc.to_disk ](#to_disk)method

Save the current state to a directory.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[Doc.from_disk ](#from_disk)method

Loads state from a directory. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`Doc`

object. [Doc](/api/doc)[Doc.to_bytes ](#to_bytes)method

Serialize, i.e. export the document contents to a binary string.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`Doc`

, including all annotations. bytes[Doc.from_bytes ](#from_bytes)method

Deserialize, i.e. import the document contents from a binary string.

| Name | Description |
|---|---|
`data` | The string to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`Doc`

object. [Doc](/api/doc)[Doc.to_json ](#to_json)method

Serializes a document to JSON. Note that this is format differs from the
deprecated [ JSON training format](/api/data-formats#json-input).

| Name | Description |
|---|---|
`underscore` | Optional list of string names of custom `Doc` attributes. Attribute values need to be JSON-serializable. Values will be added to an `"_"` key in the data, e.g. `"_": {"foo": "bar"}` . Optional[List[str]] |
RETURNS | The data in JSON format. Dict[str, Any] |

[Doc.from_json ](#from_json)methodv3.3.1

Deserializes a document from JSON, i.e. generates a document from the provided
JSON data as generated by [ Doc.to_json()](/api/doc#to_json).

| Name | Description |
|---|---|
`doc_json` | The Doc data in JSON format from
`Doc.to_json` |

*keyword-only*`validate`

`False`

. bool**RETURNS**`Doc`

corresponding to the provided JSON. [Doc](/api/doc)[Doc.retokenize ](#retokenize)contextmanager

Context manager to handle retokenization of the `Doc`

. Modifications to the
`Doc`

’s tokenization are stored, and then made all at once when the context
manager exits. This is much more efficient, and less error-prone. All views of
the `Doc`

(`Span`

and `Token`

) created before the retokenization are
invalidated, although they may accidentally continue to work.

| Name | Description |
|---|---|
RETURNS | The retokenizer. Retokenizer |

[Retokenizer.merge ](#retokenizer.merge)method

Mark a span for merging. The `attrs`

will be applied to the resulting token (if
they’re context-dependent token attributes like `LEMMA`

or `DEP`

) or to the
underlying lexeme (if they’re context-independent lexical attributes like
`LOWER`

or `IS_STOP`

). Writable custom extension attributes can be provided
using the `"_"`

key and specifying a dictionary that maps attribute names to
values.

| Name | Description |
|---|---|
`span` | The span to merge.
|

`attrs`

[Retokenizer.split ](#retokenizer.split)method

Mark a token for splitting, into the specified `orths`

. The `heads`

are required
to specify how the new subtokens should be integrated into the dependency tree.
The list of per-token heads can either be a token in the original document, e.g.
`doc[2]`

, or a tuple consisting of the token in the original document and its
subtoken index. For example, `(doc[3], 1)`

will attach the subtoken to the
second subtoken of `doc[3]`

.

This mechanism allows attaching subtokens to other newly created subtokens,
without having to keep track of the changing token indices. If the specified
head token will be split within the retokenizer block and no subtoken index is
specified, it will default to `0`

. Attributes to set on subtokens can be
provided as a list of values. They’ll be applied to the resulting token (if
they’re context-dependent token attributes like `LEMMA`

or `DEP`

) or to the
underlying lexeme (if they’re context-independent lexical attributes like
`LOWER`

or `IS_STOP`

).

| Name | Description |
|---|---|
`token` | The token to split.
|

`orths`

`heads`

`token`

or `(token, subtoken)`

tuples specifying the tokens to attach the newly split subtokens to. List[Union[[Token](/api/token), Tuple[[Token](/api/token), int]]]`attrs`

[Doc.ents ](#ents)propertyNeeds model

The named entities in the document. Returns a tuple of named entity `Span`

objects, if the entity recognizer has been applied.

| Name | Description |
|---|---|
RETURNS | Entities in the document, one `Span` per entity. Tuple[
|

[Doc.spans ](#spans)property

A dictionary of named span groups, to store and access additional span
annotations. You can write to it by assigning a list of [ Span](/api/span)
objects or a

[to a given key.](/api/spangroup)

`SpanGroup`

| Name | Description |
|---|---|
RETURNS | The span groups assigned to the document. Dict[str,
|

[Doc.cats ](#cats)propertyNeeds model

Maps a label to a score for categories applied to the document. Typically set by
the [ TextCategorizer](/api/textcategorizer).

| Name | Description |
|---|---|
RETURNS | The text categories mapped to scores. Dict[str, float] |

[Doc.noun_chunks ](#noun_chunks)propertyNeeds model

Iterate over the base noun phrases in the document. Yields base noun-phrase
`Span`

objects, if the document has been syntactically parsed. A base noun
phrase, or “NP chunk”, is a noun phrase that does not permit other NPs to be
nested within it – so no NP-level coordination, no prepositional phrases, and no
relative clauses.

To customize the noun chunk iterator in a loaded pipeline, modify
[ nlp.vocab.get_noun_chunks](/api/vocab#attributes). If the

`noun_chunk`

[syntax iterator](/usage/linguistic-features#language-data)has not been implemented for the given language, a

`NotImplementedError`

is raised.| Name | Description |
|---|---|
YIELDS | Noun chunks in the document.
|

[Doc.sents ](#sents)propertyNeeds model

Iterate over the sentences in the document. Sentence spans have no label.

This property is only available when
[sentence boundaries](/usage/linguistic-features#sbd) have been set on the
document by the `parser`

, `senter`

, `sentencizer`

or some custom function. It
will raise an error otherwise.

| Name | Description |
|---|---|
YIELDS | Sentences in the document.
|

[Doc.has_vector ](#has_vector)propertyNeeds model

A boolean value indicating whether a word vector is associated with the object.

| Name | Description |
|---|---|
RETURNS | Whether the document has a vector data attached. bool |

[Doc.vector ](#vector)propertyNeeds model

A real-valued meaning representation. Defaults to an average of the token vectors.

| Name | Description |
|---|---|
RETURNS | A 1-dimensional array representing the document’s vector.
|

[Doc.vector_norm ](#vector_norm)propertyNeeds model

The L2 norm of the document’s vector representation.

| Name | Description |
|---|---|
RETURNS | The L2 norm of the vector representation. float |

[Attributes ](#attributes)

| Name | Description |
|---|---|
`text` | A string representation of the document text. str |
`text_with_ws` | An alias of `Doc.text` , provided for duck-type compatibility with `Span` and `Token` . str |
`mem` | The document’s local memory heap, for all C data it owns.
|

`vocab`

[Vocab](/api/vocab)`tensor`

[numpy.ndarray](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html)`user_data`

`lang`

`lang_`

`sentiment`

`user_hooks`

`Doc`

’s properties. Dict[str, Callable]`user_token_hooks`

`Token`

children. Dict[str, Callable]`user_span_hooks`

`Span`

children. Dict[str, Callable]`has_unknown_spaces`

`_`

[attribute extensions](/usage/processing-pipelines#custom-components-attributes). Underscore[Serialization fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`text` | The value of the `Doc.text` attribute. |
`sentiment` | The value of the `Doc.sentiment` attribute. |
`tensor` | The value of the `Doc.tensor` attribute. |
`user_data` | The value of the `Doc.user_data` dictionary. |
`user_data_keys` | The keys of the `Doc.user_data` dictionary. |
`user_data_values` | The values of the `Doc.user_data` dictionary. |

---

## Source: https://spacy.io/api/docbin

# DocBin

The `DocBin`

class lets you efficiently serialize the information from a
collection of `Doc`

objects. You can control which information is serialized by
passing a list of attribute IDs, and optionally also specify whether the user
data is serialized. The `DocBin`

is faster and produces smaller data sizes than
pickle, and allows you to deserialize without executing arbitrary Python code. A
notable downside to this format is that you can’t easily extract just one
document from the `DocBin`

. The serialization format is gzipped msgpack, where
the msgpack object has the following structure:

## msgpack object structure


Strings for the words, tags, labels etc are represented by 64-bit hashes in the
token data, and every string that occurs at least once is passed via the strings
object. This means the storage is more efficient if you pack more documents
together, because you have less duplication in the strings. For usage examples,
see the docs on [serializing Doc objects](/usage/saving-loading#docs).

[DocBin.__init__ ](#init)method

Create a `DocBin`

object to hold serialized annotations.

| Argument | Description |
|---|---|
`attrs` | List of attributes to serialize. `ORTH` (hash of token text) and `SPACY` (whether the token is followed by whitespace) are always serialized, so they’re not required. Defaults to `("ORTH", "TAG", "HEAD", "DEP", "ENT_IOB", "ENT_TYPE", "ENT_KB_ID", "LEMMA", "MORPH", "POS")` . Iterable[str] |
`store_user_data` | Whether to write the `Doc.user_data` and the values of custom extension attributes to file/bytes. Defaults to `False` . bool |
`docs` | `Doc` objects to add on initialization. Iterable[
|

[DocBin.__len__ ](#len)method

Get the number of `Doc`

objects that were added to the `DocBin`

.

| Argument | Description |
|---|---|
RETURNS | The number of `Doc` s added to the `DocBin` . int |

[DocBin.add ](#add)method

Add a `Doc`

’s annotations to the `DocBin`

for serialization.

| Argument | Description |
|---|---|
`doc` | The `Doc` object to add.
|

[DocBin.get_docs ](#get_docs)method

Recover `Doc`

objects from the annotations, using the given vocab.

| Argument | Description |
|---|---|
`vocab` | The shared vocab.
|

**YIELDS**`Doc`

objects. [Doc](/api/doc)[DocBin.merge ](#merge)method

Extend the annotations of this `DocBin`

with the annotations from another. Will
raise an error if the pre-defined `attrs`

of the two `DocBin`

s don’t match.

| Argument | Description |
|---|---|
`other` | The `DocBin` to merge into the current bin.
|

[DocBin.to_bytes ](#to_bytes)method

Serialize the `DocBin`

’s annotations to a bytestring.

| Argument | Description |
|---|---|
RETURNS | The serialized `DocBin` . bytes |

[DocBin.from_bytes ](#from_bytes)method

Deserialize the `DocBin`

’s annotations from a bytestring.

| Argument | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
RETURNS | The loaded `DocBin` .
|

[DocBin.to_disk ](#to_disk)methodv3.0

Save the serialized `DocBin`

to a file. Typically uses the `.spacy`

extension
and the result can be used as the input data for
[ spacy train](/api/cli#train).

| Argument | Description |
|---|---|
`path` | The file path, typically with the `.spacy` extension. Union[str,
|

[DocBin.from_disk ](#from_disk)methodv3.0

Load a serialized `DocBin`

from a file. Typically uses the `.spacy`

extension.

| Argument | Description |
|---|---|
`path` | The file path, typically with the `.spacy` extension. Union[str,
|
RETURNS | The loaded `DocBin` .
|

---

## Source: https://spacy.io/api/example

# Example

An `Example`

holds the information for one training instance. It stores two
`Doc`

objects: one for holding the gold-standard reference data, and one for
holding the predictions of the pipeline. An
[ Alignment](/api/example#alignment-object) object stores the alignment between
these two documents, as they can differ in tokenization.

[Example.__init__ ](#init)method

Construct an `Example`

object from the `predicted`

document and the `reference`

document. If `alignment`

is `None`

, it will be initialized from the words in
both documents.

| Name | Description |
|---|---|
`predicted` | The document containing (partial) predictions. Cannot be `None` .
|
`reference` | The document containing gold-standard annotations. Cannot be `None` .
|
keyword-only | |
`alignment` | An object holding the alignment between the tokens of the `predicted` and `reference` documents. Optional[
|

[Example.from_dict ](#from_dict)classmethod

Construct an `Example`

object from the `predicted`

document and the reference
annotations provided as a dictionary. For more details on the required format,
see the [training format documentation](/api/data-formats#dict-input).

| Name | Description |
|---|---|
`predicted` | The document containing (partial) predictions. Cannot be `None` .
|
`example_dict` | The gold-standard annotations as a dictionary. Cannot be `None` . Dict[str, Any] |
RETURNS | The newly constructed object.
|

[Example.text ](#text)property

The text of the `predicted`

document in this `Example`

.

| Name | Description |
|---|---|
RETURNS | The text of the `predicted` document. str |

[Example.predicted ](#predicted)property

The `Doc`

holding the predictions. Occasionally also referred to as `example.x`

.

| Name | Description |
|---|---|
RETURNS | The document containing (partial) predictions.
|

[Example.reference ](#reference)property

The `Doc`

holding the gold-standard annotations. Occasionally also referred to
as `example.y`

.

| Name | Description |
|---|---|
RETURNS | The document containing gold-standard annotations.
|

[Example.alignment ](#alignment)property

The [ Alignment](/api/example#alignment-object) object mapping the tokens of
the

`predicted`

document to those of the `reference`

document.| Name | Description |
|---|---|
RETURNS | The document containing gold-standard annotations.
|

[Example.get_aligned ](#get_aligned)method

Get the aligned view of a certain token attribute, denoted by its int ID or string name.

| Name | Description |
|---|---|
`field` | Attribute ID or string name. Union[int, str] |
`as_string` | Whether or not to return the list of values as strings. Defaults to `False` . bool |
RETURNS | List of integer values, or string values if `as_string` is `True` . Union[List[int], List[str]] |

[Example.get_aligned_parse ](#get_aligned_parse)method

Get the aligned view of the dependency parse. If `projectivize`

is set to
`True`

, non-projective dependency trees are made projective through the
Pseudo-Projective Dependency Parsing algorithm by Nivre and Nilsson (2005).

| Name | Description |
|---|---|
`projectivize` | Whether or not to projectivize the dependency trees. Defaults to `True` . bool |
RETURNS | List of integer values, or string values if `as_string` is `True` . Union[List[int], List[str]] |

[Example.get_aligned_ner ](#get_aligned_ner)method

Get the aligned view of the NER
[BILUO](/usage/linguistic-features#accessing-ner) tags.

| Name | Description |
|---|---|
RETURNS | List of BILUO values, denoting whether tokens are part of an NER annotation or not. List[str] |

[Example.get_aligned_spans_y2x ](#get_aligned_spans_y2x)method

Get the aligned view of any set of [ Span](/api/span) objects defined over

[. The resulting span indices will align to the tokenization in](/api/example#reference)

`Example.reference`

[.](/api/example#predicted)

`Example.predicted`

| Name | Description |
|---|---|
`y_spans` | `Span` objects aligned to the tokenization of `reference` . Iterable[
|
`allow_overlap` | Whether the resulting `Span` objects may overlap or not. Set to `False` by default. bool |
RETURNS | `Span` objects aligned to the tokenization of `predicted` . List[
|

[Example.get_aligned_spans_x2y ](#get_aligned_spans_x2y)method

Get the aligned view of any set of [ Span](/api/span) objects defined over

[. The resulting span indices will align to the tokenization in](/api/example#predicted)

`Example.predicted`

[. This method is particularly useful to assess the accuracy of predicted entities against the original gold-standard annotation.](/api/example#reference)

`Example.reference`

| Name | Description |
|---|---|
`x_spans` | `Span` objects aligned to the tokenization of `predicted` . Iterable[
|
`allow_overlap` | Whether the resulting `Span` objects may overlap or not. Set to `False` by default. bool |
RETURNS | `Span` objects aligned to the tokenization of `reference` . List[
|

[Example.to_dict ](#to_dict)method

Return a [dictionary representation](/api/data-formats#dict-input) of the
reference annotation contained in this `Example`

.

| Name | Description |
|---|---|
RETURNS | Dictionary representation of the reference annotation. Dict[str, Any] |

[Example.split_sents ](#split_sents)method

Split one `Example`

into multiple `Example`

objects, one for each sentence.

| Name | Description |
|---|---|
RETURNS | List of `Example` objects, one for each original sentence. List[
|

[Alignment ](#alignment-object)v3.0

Calculate alignment tables between two tokenizations.

[Alignment attributes ](#alignment-attributes)

Alignment attributes are managed using `AlignmentArray`

, which is a simplified
version of Thinc’s [Ragged](https://thinc.ai/docs/api-types#ragged) type that
only supports the `data`

and `length`

attributes.

| Name | Description |
|---|---|
`x2y` | The `AlignmentArray` object holding the alignment from `x` to `y` . AlignmentArray |
`y2x` | The `AlignmentArray` object holding the alignment from `y` to `x` . AlignmentArray |

[Alignment.from_strings ](#classmethod)function

| Name | Description |
|---|---|
`A` | String values of candidate tokens to align. List[str] |
`B` | String values of reference tokens to align. List[str] |
RETURNS | An `Alignment` object describing the alignment.
|

---

## Source: https://spacy.io/api/language

# Language

Usually you’ll load this once per process as `nlp`

and pass the instance around
your application. The `Language`

class is created when you call
[ spacy.load](/api/top-level#spacy.load) and contains the shared vocabulary and

[language data](/usage/linguistic-features#language-data), optional binary weights, e.g. provided by a

[trained pipeline](/models), and the

[processing pipeline](/usage/processing-pipelines)containing components like the tagger or parser that are called on a document in order. You can also add your own processing pipeline components that take a

`Doc`

object, modify it and
return it.[Language.__init__ ](#init)method

Initialize a `Language`

object. Note that the `meta`

is only used for meta
information in [ Language.meta](/api/language#meta) and not to configure the

`nlp`

object or to override the config. To initialize from a config, use
[instead.](/api/language#from_config)

`Language.from_config`

| Name | Description |
|---|---|
`vocab` | A `Vocab` object. If `True` , a vocab is created using the default language data settings.
|
keyword-only | |
`max_length` | Maximum number of characters allowed in a single text. Defaults to `10 ** 6` . int |
`meta` |
|

`create_tokenizer`

`nlp`

object and returns a tokenizer. Callable[[[Language](/api/language)], Callable[[str],[Doc](/api/doc)]]`batch_size`

[and](/api/language#pipe)`pipe`

[. Defaults to](/api/language#evaluate)`evaluate`

`1000`

. int[Language.from_config ](#from_config)classmethodv3.0

Create a `Language`

object from a loaded config. Will set up the tokenizer and
language data, add pipeline components based on the pipeline and add pipeline
components based on the definitions specified in the config. If no config is
provided, the default config of the given language is used. This is also how
spaCy loads a model under the hood based on its
[ config.cfg](/api/data-formats#config).

| Name | Description |
|---|---|
`config` | The loaded config. Union[Dict[str, Any],
|

*keyword-only*`vocab`

`Vocab`

object. If `True`

, a vocab is created using the default language data settings. [Vocab](/api/vocab)`disable`

[disable](/usage/processing-pipelines#disabling). Disabled pipes will be loaded but they won’t be run unless you explicitly enable them by calling[nlp.enable_pipe](/api/language#enable_pipe). Is merged with the config entry`nlp.disabled`

. Union[str, Iterable[str]]`enable`

v3.4[enable](/usage/processing-pipelines#disabling). All other pipes will be disabled, but can be enabled again using[nlp.enable_pipe](/api/language#enable_pipe). Union[str, Iterable[str]]`exclude`

[exclude](/usage/processing-pipelines#disabling). Excluded components won’t be loaded. Union[str, Iterable[str]]`meta`

[Meta data](/api/data-formats#meta)overrides. Dict[str, Any]`auto_fill`

`True`

. bool`validate`

`True`

. bool**RETURNS**[Language](/api/language)[Language.component ](#component)classmethodv3.0

Register a custom pipeline component under a given name. This allows
initializing the component by name using
[ Language.add_pipe](/api/language#add_pipe) and referring to it in

[config files](/usage/training#config). This classmethod and decorator is intended for

**simple stateless functions**that take a

`Doc`

and return it. For
more complex stateful components that allow settings and need access to the
shared `nlp`

object, use the [decorator. For more details and examples, see the](/api/language#factory)

`Language.factory`

[usage documentation](/usage/processing-pipelines#custom-components).

| Name | Description |
|---|---|
`name` | The name of the component factory. str |
keyword-only | |
`assigns` | `Doc` or `Token` attributes assigned by this component, e.g. `["token.ent_id"]` . Used for
|
`requires` | `Doc` or `Token` attributes required by this component, e.g. `["token.ent_id"]` . Used for
|
`retokenizes` | Whether the component changes tokenization. Used for
|

`func`

[Doc](/api/doc)],[Doc](/api/doc)]][Language.factory ](#factory)classmethod

Register a custom pipeline component factory under a given name. This allows
initializing the component by name using
[ Language.add_pipe](/api/language#add_pipe) and referring to it in

[config files](/usage/training#config). The registered factory function needs to take at least two

**named arguments**which spaCy fills in automatically:

`nlp`

for the current `nlp`

object and `name`

for the component instance name. This
can be useful to distinguish multiple instances of the same component and allows
trainable components to add custom losses using the component instance name. The
`default_config`

defines the default values of the remaining factory arguments.
It’s merged into the [. For more details and examples, see the](/api/language#config)

`nlp.config`

[usage documentation](/usage/processing-pipelines#custom-components).

| Name | Description |
|---|---|
`name` | The name of the component factory. str |
keyword-only | |
`default_config` | The default config, describing the default values of the factory arguments. Dict[str, Any] |
`assigns` | `Doc` or `Token` attributes assigned by this component, e.g. `["token.ent_id"]` . Used for
|
`requires` | `Doc` or `Token` attributes required by this component, e.g. `["token.ent_id"]` . Used for
|
`retokenizes` | Whether the component changes tokenization. Used for
|

`default_score_weights`

`1.0`

per component and will be combined and normalized for the whole pipeline. If a weight is set to `None`

, the score will not be logged or weighted. Dict[str, Optional[float]]`func`

[Doc](/api/doc)],[Doc](/api/doc)]]][Language.__call__ ](#call)method

Apply the pipeline to some text. The text can span multiple sentences, and can contain arbitrary whitespace. Alignment into the original string is preserved.

Instead of text, a `Doc`

can be passed as input, in which case tokenization is
skipped, but the rest of the pipeline is run.

| Name | Description |
|---|---|
`text` | The text to be processed, or a Doc. Union[str,
|

*keyword-only*`disable`

[disable](/usage/processing-pipelines#disabling). List[str]`component_cfg`

`None`

. Optional[Dict[str, Dict[str, Any]]]**RETURNS**[Doc](/api/doc)[Language.pipe ](#pipe)method

Process texts as a stream, and yield `Doc`

objects in order. This is usually
more efficient than processing texts one-by-one.

Instead of text, a `Doc`

object can be passed as input. In this case
tokenization is skipped but the rest of the pipeline is run.

| Name | Description |
|---|---|
`texts` | A sequence of strings (or `Doc` objects). Iterable[Union[str,
|
keyword-only | |
`as_tuples` | If set to `True` , inputs should be a sequence of `(text, context)` tuples. Output will then be a sequence of `(doc, context)` tuples. Defaults to `False` . bool |
`batch_size` | The number of texts to buffer. Optional[int] |
`disable` | Names of pipeline components to
|

`component_cfg`

`None`

. Optional[Dict[str, Dict[str, Any]]]`n_process`

`1`

. int**YIELDS**[Doc](/api/doc)[Language.set_error_handler ](#set_error_handler)methodv3.0

Define a callback that will be invoked when an error is thrown during processing
of one or more documents. Specifically, this function will call
[ set_error_handler](/api/pipe#set_error_handler) on all the pipeline
components that define that function. The error handler will be invoked with the
original component’s name, the component itself, the list of documents that was
being processed, and the original error.

| Name | Description |
|---|---|
`error_handler` | A function that performs custom error handling. Callable[[str, Callable[[
|

[Language.initialize ](#initialize)methodv3.0

Initialize the pipeline for training and return an
[ Optimizer](https://thinc.ai/docs/api-optimizers). Under the hood, it uses the
settings defined in the

[config block to set up the vocabulary, load in vectors and tok2vec weights and pass optional arguments to the](/api/data-formats#config-initialize)

`[initialize]`

`initialize`

methods implemented by pipeline
components or the tokenizer. This method is typically called automatically when
you run [. See the usage guide on the](/api/cli#train)

`spacy train`

[config lifecycle](/usage/training#config-lifecycle)and

[initialization](/usage/training#initialization)for details.

`get_examples`

should be a function that returns an iterable of
[ Example](/api/example) objects. The data examples can either be the full
training data or a representative sample. They are used to

**initialize the models**of trainable pipeline components and are passed each component’s

[method, if available. Initialization includes validating the network,](/api/pipe#initialize)

`initialize`

[inferring missing shapes](/usage/layers-architectures#thinc-shape-inference)and setting up the label scheme based on the data.

If no `get_examples`

function is provided when calling `nlp.initialize`

, the
pipeline components will be initialized with generic data. In this case, it is
crucial that the output dimension of each component has already been defined
either in the [config](/usage/training#config), or by calling
[ pipe.add_label](/api/pipe#add_label) for each possible output label (e.g. for
the tagger or textcat).

| Name | Description |
|---|---|
`get_examples` | Optional function that returns gold-standard annotations in the form of
`Example` |

[Example](/api/example)]]]

*keyword-only*`sgd`

[if not set. Optional[](/api/language#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]**RETURNS**[Optimizer](https://thinc.ai/docs/api-optimizers)[Language.resume_training ](#resume_training)methodexperimentalv3.0

Continue training a trained pipeline. Create and return an optimizer, and
initialize “rehearsal” for any pipeline component that has a `rehearse`

method.
Rehearsal is used to prevent models from “forgetting” their initialized
“knowledge”. To perform rehearsal, collect samples of text you want the models
to retain performance on, and call [ nlp.rehearse](/api/language#rehearse) with
a batch of

[Example](/api/example)objects.

| Name | Description |
|---|---|
keyword-only | |
`sgd` | An optimizer. Will be created via
`create_optimizer` |

[Optimizer](https://thinc.ai/docs/api-optimizers)]

**RETURNS**[Optimizer](https://thinc.ai/docs/api-optimizers)[Language.update ](#update)method

Update the models in the pipeline.

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |

[Example](/api/example)]

*keyword-only*`drop`

`sgd`

[if not set. Optional[](/api/language#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]`losses`

`component_cfg`

`None`

. Optional[Dict[str, Dict[str, Any]]]**RETURNS**`losses`

dictionary. Dict[str, float][Language.rehearse ](#rehearse)methodexperimentalv3.0

Perform a “rehearsal” update from a batch of data. Rehearsal updates teach the current model to make predictions similar to an initial model, to try to address the “catastrophic forgetting” problem. This feature is experimental.

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |

[Example](/api/example)]

*keyword-only*`drop`

`sgd`

[if not set. Optional[](/api/language#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]`losses`

**RETURNS**`losses`

dictionary. Dict[str, float][Language.evaluate ](#evaluate)method

Evaluate a pipeline’s components.

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |

[Example](/api/example)]

*keyword-only*`batch_size`

`scorer`

[to use. If not passed in, a new one will be created. Optional[](/api/scorer)`Scorer`

[Scorer](/api/scorer)]`component_cfg`

`None`

. Optional[Dict[str, Dict[str, Any]]]`scorer_cfg`

`Scorer`

. Defaults to `None`

. Optional[Dict[str, Any]]`per_component`

v3.6`False`

. bool**RETURNS**[Language.use_params ](#use_params)contextmanagermethod

Replace weights of models in the pipeline with those provided in the params dictionary. Can be used as a context manager, in which case, models go back to their original weights after the block.

| Name | Description |
|---|---|
`params` | A dictionary of parameters keyed by model ID. dict |

[Language.add_pipe ](#add_pipe)method

Add a component to the processing pipeline. Expects a name that maps to a
component factory registered using
[ @Language.component](/api/language#component) or

[. Components should be callables that take a](/api/language#factory)

`@Language.factory`

`Doc`

object, modify it and return it. Only one of `before`

,
`after`

, `first`

or `last`

can be set. Default behavior is `last=True`

.| Name | Description |
|---|---|
`factory_name` | Name of the registered component factory. str |
`name` | Optional unique name of pipeline component instance. If not set, the factory name is used. An error is raised if the name already exists in the pipeline. Optional[str] |
keyword-only | |
`before` | Component name or index to insert component directly before. Optional[Union[str, int]] |
`after` | Component name or index to insert component directly after. Optional[Union[str, int]] |
`first` | Insert component first / not first in the pipeline. Optional[bool] |
`last` | Insert component last / not last in the pipeline. Optional[bool] |
`config` v3.0 | Optional config parameters to use for this component. Will be merged with the `default_config` specified by the component factory. Dict[str, Any] |
`source` v3.0 | Optional source pipeline to copy component from. If a source is provided, the `factory_name` is interpreted as the name of the component in the source pipeline. Make sure that the vocab, vectors and settings of the source pipeline match the target pipeline. Optional[
|
`validate` v3.0 | Whether to validate the component config and arguments against the types expected by the factory. Defaults to `True` . bool |
RETURNS | The pipeline component. Callable[[
|

[Language.create_pipe ](#create_pipe)method

Create a pipeline component from a factory.

| Name | Description |
|---|---|
`factory_name` | Name of the registered component factory. str |
`name` | Optional unique name of pipeline component instance. If not set, the factory name is used. An error is raised if the name already exists in the pipeline. Optional[str] |
keyword-only | |
`config` v3.0 | Optional config parameters to use for this component. Will be merged with the `default_config` specified by the component factory. Dict[str, Any] |
`validate` v3.0 | Whether to validate the component config and arguments against the types expected by the factory. Defaults to `True` . bool |
RETURNS | The pipeline component. Callable[[
|

[Language.has_factory ](#has_factory)classmethodv3.0

Check whether a factory name is registered on the `Language`

class or subclass.
Will check for
[language-specific factories](/usage/processing-pipelines#factories-language)
registered on the subclass, as well as general-purpose factories registered on
the `Language`

base class, available to all subclasses.

| Name | Description |
|---|---|
`name` | Name of the pipeline factory to check. str |
RETURNS | Whether a factory of that name is registered on the class. bool |

[Language.has_pipe ](#has_pipe)method

Check whether a component is present in the pipeline. Equivalent to
`name in nlp.pipe_names`

.

| Name | Description |
|---|---|
`name` | Name of the pipeline component to check. str |
RETURNS | Whether a component of that name exists in the pipeline. bool |

[Language.get_pipe ](#get_pipe)method

Get a pipeline component for a given component name.

| Name | Description |
|---|---|
`name` | Name of the pipeline component to get. str |
RETURNS | The pipeline component. Callable[[
|

[Language.replace_pipe ](#replace_pipe)method

Replace a component in the pipeline and return the new component.

| Name | Description |
|---|---|
`name` | Name of the component to replace. str |
`component` | The factory name of the component to insert. str |
keyword-only | |
`config` v3.0 | Optional config parameters to use for the new component. Will be merged with the `default_config` specified by the component factory. Optional[Dict[str, Any]] |
`validate` v3.0 | Whether to validate the component config and arguments against the types expected by the factory. Defaults to `True` . bool |
RETURNS | The new pipeline component. Callable[[
|

[Language.rename_pipe ](#rename_pipe)method

Rename a component in the pipeline. Useful to create custom names for
pre-defined and pre-loaded components. To change the default name of a component
added to the pipeline, you can also use the `name`

argument on
[ add_pipe](/api/language#add_pipe).

| Name | Description |
|---|---|
`old_name` | Name of the component to rename. str |
`new_name` | New name of the component. str |

[Language.remove_pipe ](#remove_pipe)method

Remove a component from the pipeline. Returns the removed component name and component function.

| Name | Description |
|---|---|
`name` | Name of the component to remove. str |
RETURNS | A `(name, component)` tuple of the removed component. Tuple[str, Callable[[
|

[Language.disable_pipe ](#disable_pipe)methodv3.0

Temporarily disable a pipeline component so it’s not run as part of the
pipeline. Disabled components are listed in
[ nlp.disabled](/api/language#attributes) and included in

[, but not in](/api/language#attributes)

`nlp.components`

[, so they’re not run when you process a](/api/language#pipeline)

`nlp.pipeline`

`Doc`

with the `nlp`

object. If the component is already disabled, this method
does nothing.| Name | Description |
|---|---|
`name` | Name of the component to disable. str |

[Language.enable_pipe ](#enable_pipe)methodv3.0

Enable a previously disabled component (e.g. via
[ Language.disable_pipes](/api/language#disable_pipes)) so it’s run as part of
the pipeline,

[. If the component is already enabled, this method does nothing.](/api/language#pipeline)

`nlp.pipeline`

| Name | Description |
|---|---|
`name` | Name of the component to enable. str |

[Language.select_pipes ](#select_pipes)contextmanagermethodv3.0

Disable one or more pipeline components. If used as a context manager, the
pipeline will be restored to the initial state at the end of the block.
Otherwise, a `DisabledPipes`

object is returned, that has a `.restore()`

method
you can use to undo your changes. You can specify either `disable`

(as a list or
string), or `enable`

. In the latter case, all components not in the `enable`

list will be disabled. Under the hood, this method calls into
[ disable_pipe](/api/language#disable_pipe) and

[.](/api/language#enable_pipe)

`enable_pipe`

| Name | Description |
|---|---|
keyword-only | |
`disable` | Name(s) of pipeline component(s) to disable. Optional[Union[str, Iterable[str]]] |
`enable` | Name(s) of pipeline component(s) that will not be disabled. Optional[Union[str, Iterable[str]]] |
RETURNS | The disabled pipes that can be restored by calling the object’s `.restore()` method. DisabledPipes |

[Language.get_factory_meta ](#get_factory_meta)classmethodv3.0

Get the factory meta information for a given pipeline component name. Expects
the name of the component **factory**. The factory meta is an instance of the
[ FactoryMeta](/api/language#factorymeta) dataclass and contains the
information about the component and its default provided by the

[or](/api/language#component)

`@Language.component`

[decorator.](/api/language#factory)

`@Language.factory`

| Name | Description |
|---|---|
`name` | The factory name. str |
RETURNS | The factory meta.
|

[Language.get_pipe_meta ](#get_pipe_meta)methodv3.0

Get the factory meta information for a given pipeline component name. Expects
the name of the component **instance** in the pipeline. The factory meta is an
instance of the [ FactoryMeta](/api/language#factorymeta) dataclass and
contains the information about the component and its default provided by the

[or](/api/language#component)

`@Language.component`

[decorator.](/api/language#factory)

`@Language.factory`

| Name | Description |
|---|---|
`name` | The pipeline component name. str |
RETURNS | The factory meta.
|

[Language.analyze_pipes ](#analyze_pipes)methodv3.0

Analyze the current pipeline components and show a summary of the attributes
they assign and require, and the scores they set. The data is based on the
information provided in the [ @Language.component](/api/language#component) and

[decorator. If requirements aren’t met, e.g. if a component specifies a required property that is not set by a previous component, a warning is shown.](/api/language#factory)

`@Language.factory`

## Structured


## Pretty


| Name | Description |
|---|---|
keyword-only | |
`keys` | The values to display in the table. Corresponds to attributes of the
`FactoryMeta` |

`["assigns", "requires", "scores", "retokenizes"]`

. List[str]`pretty`

`False`

. bool**RETURNS**`"summary"`

(component meta by pipe), `"problems"`

(attribute names by pipe) and `"attrs"`

(pipes that assign and require an attribute, keyed by attribute). Optional[Dict[str, Any]][Language.replace_listeners ](#replace_listeners)methodv3.0

Find [listener layers](/usage/embeddings-transformers#embedding-layers)
(connecting to a shared token-to-vector embedding component) of a given pipeline
component model and replace them with a standalone copy of the token-to-vector
layer. The listener layer allows other components to connect to a shared
token-to-vector embedding component like [ Tok2Vec](/api/tok2vec) or

[. Replacing listeners can be useful when training a pipeline with components sourced from an existing pipeline: if multiple components (e.g. tagger, parser, NER) listen to the same token-to-vector component, but some of them are frozen and not updated, their performance may degrade significantly as the token-to-vector component is updated with new data. To prevent this, listeners can be replaced with a standalone token-to-vector layer that is owned by the component and doesn’t change if the component isn’t updated.](/api/transformer)

`Transformer`

This method is typically not called directly and only executed under the hood
when loading a config with
[sourced components](/usage/training#config-components) that define
`replace_listeners`

.

| Name | Description |
|---|---|
`tok2vec_name` | Name of the token-to-vector component, typically `"tok2vec"` or `"transformer"` .str |
`pipe_name` | Name of pipeline component to replace listeners for. str |
`listeners` | The paths to the listeners, relative to the component config, e.g. `["model.tok2vec"]` . Typically, implementations will only connect to one tok2vec component, `model.tok2vec` , but in theory, custom models can use multiple listeners. The value here can either be an empty list to not replace any listeners, or a complete list of the paths to all listener layers used by the model that should be replaced.Iterable[str] |

[Language.memory_zone ](#memory_zone)contextmanagerv3.8

Begin a block where all resources allocated during the block will be freed at the end of it. If a resources was created within the memory zone block, accessing it outside the block is invalid. Behavior of this invalid access is undefined. Memory zones should not be nested. The memory zone is helpful for services that need to process large volumes of text with a defined memory budget.

| Name | Description |
|---|---|
`mem` | Optional `cymem.Pool` object to own allocations (created if not provided). This argument is not required for ordinary usage. Defaults to `None` . Optional[
|
RETURNS | The memory pool that owns the allocations. This object is not required for ordinary usage. Iterator[
|

[Language.meta ](#meta)property

Meta data for the `Language`

class, including name, version, data sources,
license, author information and more. If a trained pipeline is loaded, this
contains meta data of the pipeline. The `Language.meta`

is also what’s
serialized as the `meta.json`

when you save an `nlp`

object to disk. See the
[meta data format](/api/data-formats#meta) for more details.

| Name | Description |
|---|---|
RETURNS | The meta data. Dict[str, Any] |

[Language.config ](#config)propertyv3.0

Export a trainable [ config.cfg](/api/data-formats#config) for the current

`nlp`

object. Includes the current pipeline, all configs used to create the
currently active pipeline components, as well as the default training config
that can be used with [.](/api/cli#train)

`spacy train`

`Language.config`

returns
a [Thinc](https://thinc.ai/docs/api-config#config), which is a subclass of the built-in

`Config`

object`dict`

. It supports the additional methods `to_disk`

(serialize the config to a file) and `to_str`

(output the config as a string).| Name | Description |
|---|---|
RETURNS | The config.
|

[Language.to_disk ](#to_disk)method

Save the current state to a directory. Under the hood, this method delegates to
the `to_disk`

methods of the individual pipeline components, if available. This
means that if a trained pipeline is loaded, all components and their weights
will be saved to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | Names of pipeline components or
|

[Language.from_disk ](#from_disk)method

Loads state from a directory, including all data that was saved with the
`Language`

object. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | Names of pipeline components or
|

**RETURNS**`Language`

object. [Language](/api/language)[Language.to_bytes ](#to_bytes)method

Serialize the current state to a binary string.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | Names of pipeline components or
|

**RETURNS**`Language`

object. bytes[Language.from_bytes ](#from_bytes)method

Load state from a binary string. Note that this method is commonly used via the
subclasses like `English`

or `German`

to make language-specific functionality
like the [lexical attribute getters](/usage/linguistic-features#language-data)
available to the loaded object.

Note that if you want to serialize and reload a whole pipeline, using this alone
won’t work, you also need to handle the config. See
[“Serializing the pipeline”](https://spacy.io/usage/saving-loading#pipeline) for
details.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | Names of pipeline components or
|

**RETURNS**`Language`

object. [Language](/api/language)[Attributes ](#attributes)

| Name | Description |
|---|---|
`vocab` | A container for the lexical types.
|

`tokenizer`

[Tokenizer](/api/tokenizer)`make_doc`

`Doc`

. Callable[[str],[Doc](/api/doc)]`pipeline`

`(name, component)`

tuples describing the current processing pipeline, in order. List[Tuple[str, Callable[[[Doc](/api/doc)],[Doc](/api/doc)]]]`pipe_names`

`pipe_labels`

`pipe_factories`

`factories`

[Doc](/api/doc)],[Doc](/api/doc)]]]`factory_names`

v3.0`components`

v3.0`(name, component)`

tuples, including components that are currently disabled. List[Tuple[str, Callable[[[Doc](/api/doc)],[Doc](/api/doc)]]]`component_names`

v3.0`disabled`

v3.0`path`

`None`

. Optional[[Path](https://docs.python.org/3/library/pathlib.html)][Class attributes ](#class-attributes)

| Name | Description |
|---|---|
`Defaults` | Settings, data and factory methods for creating the `nlp` object and processing pipeline.
|
`lang` |
|

`default_config`

[config](/usage/training#config)to use for[Language.config](/api/language#config). Defaults to[.](https://github.com/explosion/spaCy/tree/master/spacy/default_config.cfg)`default_config.cfg`

[Config](https://thinc.ai/docs/api-config#config)[Defaults ](#defaults)

The following attributes can be set on the `Language.Defaults`

class to
customize the default language data:

| Name | Description |
|---|---|
`stop_words` | List of stop words, used for `Token.is_stop` .Example:
`stop_words.py` |
`tokenizer_exceptions` | Tokenizer exception rules, string mapped to list of token attributes.Example:
`de/tokenizer_exceptions.py` |
`prefixes` , `suffixes` , `infixes` | Prefix, suffix and infix rules for the default tokenizer.Example:
`puncutation.py` |
`token_match` | Optional regex for matching strings that should never be split, overriding the infix rules.Example:
`fr/tokenizer_exceptions.py` |
`url_match` | Regular expression for matching URLs. Prefixes and suffixes are removed before applying the match.Example:
`tokenizer_exceptions.py` |
`lex_attr_getters` | Custom functions for setting lexical attributes on tokens, e.g. `like_num` .Example:
`lex_attrs.py` |
`syntax_iterators` | Functions that compute views of a `Doc` object based on its syntax. At the moment, only used for
Example:
`syntax_iterators.py` |
`writing_system` | Information about the language’s writing system, available via `Vocab.writing_system` . Defaults to: `{"direction": "ltr", "has_case": True, "has_letters": True}.` .Example:
`zh/__init__.py` |
`config` | Default
`nlp.config` . This can include references to custom tokenizers or lemmatizers.Example:
`zh/__init__.py` |

[Config](https://thinc.ai/docs/api-config#config)

[Serialization fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

`tokenizer`

`meta`

[.](/api/language#meta)`Language.meta`

`"ner"`

.[FactoryMeta ](#factorymeta)dataclassv3.0

The `FactoryMeta`

contains the information about the component and its default
provided by the [ @Language.component](/api/language#component) or

[decorator. It’s created whenever a component is defined and stored on the](/api/language#factory)

`@Language.factory`

`Language`

class for each component
instance and factory instance.| Name | Description |
|---|---|
`factory` | The name of the registered component factory. str |
`default_config` | The default config, describing the default values of the factory arguments. Dict[str, Any] |
`assigns` | `Doc` or `Token` attributes assigned by this component, e.g. `["token.ent_id"]` . Used for
|
`requires` | `Doc` or `Token` attributes required by this component, e.g. `["token.ent_id"]` . Used for
|
`retokenizes` | Whether the component changes tokenization. Used for
|

`default_score_weights`

`1.0`

per component and will be combined and normalized for the whole pipeline. If a weight is set to `None`

, the score will not be logged or weighted. Dict[str, Optional[float]]`scores`

`["ents_f", "ents_r", "ents_p"]`

. Based on the `default_score_weights`

and used for

---

## Source: https://spacy.io/api/lexeme

# Lexeme

A `Lexeme`

has no string context – it’s a word type, as opposed to a word token.
It therefore has no part-of-speech tag, dependency parse, or lemma (if
lemmatization depends on the part-of-speech tag).

[Lexeme.__init__ ](#init)method

Create a `Lexeme`

object.

| Name | Description |
|---|---|
`vocab` | The parent vocabulary.
|

`orth`

[Lexeme.set_flag ](#set_flag)method

Change the value of a boolean flag.

| Name | Description |
|---|---|
`flag_id` | The attribute ID of the flag to set. int |
`value` | The new value of the flag. bool |

[Lexeme.check_flag ](#check_flag)method

Check the value of a boolean flag.

| Name | Description |
|---|---|
`flag_id` | The attribute ID of the flag to query. int |
RETURNS | The value of the flag. bool |

[Lexeme.similarity ](#similarity)methodNeeds model

Compute a semantic similarity estimate. Defaults to cosine over vectors.

| Name | Description |
|---|---|
| other | The object to compare with. By default, accepts `Doc` , `Span` , `Token` and `Lexeme` objects. Union[
|
RETURNS | A scalar similarity score. Higher is more similar. float |

[Lexeme.has_vector ](#has_vector)propertyNeeds model

A boolean value indicating whether a word vector is associated with the lexeme.

| Name | Description |
|---|---|
RETURNS | Whether the lexeme has a vector data attached. bool |

[Lexeme.vector ](#vector)propertyNeeds model

A real-valued meaning representation.

| Name | Description |
|---|---|
RETURNS | A 1-dimensional array representing the lexeme’s vector.
|

[Lexeme.vector_norm ](#vector_norm)propertyNeeds model

The L2 norm of the lexeme’s vector representation.

| Name | Description |
|---|---|
RETURNS | The L2 norm of the vector representation. float |

[Attributes ](#attributes)

| Name | Description |
|---|---|
`vocab` | The lexeme’s vocabulary.
|

`text`

`orth`

`orth_`

`Lexeme.text`

). Exists mostly for consistency with the other attributes. str`rank`

`flags`

`norm`

`norm_`

`lower`

`lower_`

`shape`

`x`

or `X`

, and numeric characters are replaced by `d`

, and sequences of the same character are truncated after length 4. For example,`"Xxxx"`

or`"dd"`

. int`shape_`

`x`

or `X`

, and numeric characters are replaced by `d`

, and sequences of the same character are truncated after length 4. For example,`"Xxxx"`

or`"dd"`

. str`prefix`

`N=1`

. int`prefix_`

`N=1`

. str`suffix`

`N=3`

. int`suffix_`

`N=3`

. str`is_alpha`

`lexeme.text.isalpha()`

. bool`is_ascii`

`[any(ord(c) >= 128 for c in lexeme.text)]`

. bool`is_digit`

`lexeme.text.isdigit()`

. bool`is_lower`

`lexeme.text.islower()`

. bool`is_upper`

`lexeme.text.isupper()`

. bool`is_title`

`lexeme.text.istitle()`

. bool`is_punct`

`is_left_punct`

`(`

? bool`is_right_punct`

`)`

? bool`is_space`

`lexeme.text.isspace()`

. bool`is_bracket`

`is_quote`

`is_currency`

`like_url`

`like_num`

`like_email`

`is_oov`

`is_stop`

`lang`

`lang_`

`prob`

`cluster`

`sentiment`

---

## Source: https://spacy.io/api/span

# Span

A slice from a [ Doc](/api/doc) object.

[Span.__init__ ](#init)method

Create a `Span`

object from the slice `doc[start : end]`

.

| Name | Description |
|---|---|
`doc` | The parent document.
|

`start`

`end`

`label`

`vector`

[numpy.ndarray](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html)[ndim=1, dtype=float32]`vector_norm`

`kb_id`

`span_id`

[Span.__getitem__ ](#getitem)method

Get a `Token`

object.

| Name | Description |
|---|---|
`i` | The index of the token within the span. int |
RETURNS | The token at `span[i]` .
|

Get a `Span`

object.

| Name | Description |
|---|---|
`start_end` | The slice of the span to get. Tuple[int, int] |
RETURNS | The span at `span[start : end]` .
|

[Span.__iter__ ](#iter)method

Iterate over `Token`

objects.

| Name | Description |
|---|---|
YIELDS | A `Token` object.
|

[Span.__len__ ](#len)method

Get the number of tokens in the span.

| Name | Description |
|---|---|
RETURNS | The number of tokens in the span. int |

[Span.set_extension ](#set_extension)classmethod

Define a custom attribute on the `Span`

which becomes available via `Span._`

.
For details, see the documentation on
[custom attributes](/usage/processing-pipelines#custom-components-attributes).

| Name | Description |
|---|---|
`name` | Name of the attribute to set by the extension. For example, `"my_attr"` will be available as `span._.my_attr` . str |
`default` | Optional default value of the attribute if no getter or method is defined. Optional[Any] |
`method` | Set a custom method on the object, for example `span._.compare(other_span)` . Optional[Callable[[
|
`getter` | Getter function that takes the object and returns an attribute value. Is called when the user accesses the `._` attribute. Optional[Callable[[
|
`setter` | Setter function that takes the `Span` and a value, and modifies the object. Is called when the user writes to the `Span._` attribute. Optional[Callable[[
|
`force` | Force overwriting existing attribute. bool |

[Span.get_extension ](#get_extension)classmethod

Look up a previously registered extension by name. Returns a 4-tuple
`(default, method, getter, setter)`

if the extension is registered. Raises a
`KeyError`

otherwise.

| Name | Description |
|---|---|
`name` | Name of the extension. str |
RETURNS | A `(default, method, getter, setter)` tuple of the extension. Tuple[Optional[Any], Optional[Callable], Optional[Callable], Optional[Callable]] |

[Span.has_extension ](#has_extension)classmethod

Check whether an extension has been registered on the `Span`

class.

| Name | Description |
|---|---|
`name` | Name of the extension to check. str |
RETURNS | Whether the extension has been registered. bool |

[Span.remove_extension ](#remove_extension)classmethod

Remove a previously registered extension.

| Name | Description |
|---|---|
`name` | Name of the extension. str |
RETURNS | A `(default, method, getter, setter)` tuple of the removed extension. Tuple[Optional[Any], Optional[Callable], Optional[Callable], Optional[Callable]] |

[Span.char_span ](#char_span)method

Create a `Span`

object from the slice `span.text[start:end]`

. Returns `None`

if
the character indices don’t map to a valid span.

| Name | Description |
|---|---|
`start` | The index of the first character of the span. int |
`end` | The index of the last character after the span. int |
`label` | A label to attach to the span, e.g. for named entities. Union[int, str] |
`kb_id` | An ID from a knowledge base to capture the meaning of a named entity. Union[int, str] |
`vector` | A meaning representation of the span.
|

`id`

`alignment_mode`

v3.5.1`"strict"`

(no snapping), `"contract"`

(span of all tokens completely within the character span), `"expand"`

(span of all tokens at least partially covered by the character span). Defaults to `"strict"`

. str`span_id`

v3.5.1**RETURNS**`None`

. Optional[[Span](/api/span)][Span.similarity ](#similarity)methodNeeds model

Make a semantic similarity estimate. The default estimate is cosine similarity using an average of word vectors.

| Name | Description |
|---|---|
`other` | The object to compare with. By default, accepts `Doc` , `Span` , `Token` and `Lexeme` objects. Union[
|
RETURNS | A scalar similarity score. Higher is more similar. float |

[Span.get_lca_matrix ](#get_lca_matrix)method

Calculates the lowest common ancestor matrix for a given `Span`

. Returns LCA
matrix containing the integer index of the ancestor, or `-1`

if no common
ancestor is found, e.g. if span excludes a necessary ancestor.

| Name | Description |
|---|---|
RETURNS | The lowest common ancestor matrix of the `Span` .
|

[Span.to_array ](#to_array)method

Given a list of `M`

attribute IDs, export the tokens to a numpy `ndarray`

of
shape `(N, M)`

, where `N`

is the length of the document. The values will be
32-bit integers.

| Name | Description |
|---|---|
`attr_ids` | A list of attributes (int IDs or string names) or a single attribute (int ID or string name). Union[int, str, List[Union[int, str]]] |
RETURNS | The exported attributes as a numpy array. Union[
|

[Span.ents ](#ents)propertyNeeds model

The named entities that fall completely within the span. Returns a tuple of
`Span`

objects.

| Name | Description |
|---|---|
RETURNS | Entities in the span, one `Span` per entity. Tuple[
|

[Span.noun_chunks ](#noun_chunks)propertyNeeds model

Iterate over the base noun phrases in the span. Yields base noun-phrase `Span`

objects, if the document has been syntactically parsed. A base noun phrase, or
“NP chunk”, is a noun phrase that does not permit other NPs to be nested within
it – so no NP-level coordination, no prepositional phrases, and no relative
clauses.

If the `noun_chunk`

[syntax iterator](/usage/linguistic-features#language-data)
has not been implemented for the given language, a `NotImplementedError`

is
raised.

| Name | Description |
|---|---|
YIELDS | Noun chunks in the span.
|

[Span.as_doc ](#as_doc)method

Create a new `Doc`

object corresponding to the `Span`

, with a copy of the data.

When calling this on many spans from the same doc, passing in a precomputed
array representation of the doc using the `array_head`

and `array`

args can save
time.

| Name | Description |
|---|---|
`copy_user_data` | Whether or not to copy the original doc’s user data. bool |
`array_head` | Precomputed array attributes (headers) of the original doc, as generated by `Doc._get_array_attrs()` . Tuple |
`array` | Precomputed array version of the original doc as generated by
`Doc.to_array` |

[numpy.ndarray](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html)

**RETURNS**`Doc`

object of the `Span`

’s content. [Doc](/api/doc)[Span.root ](#root)propertyNeeds model

The token with the shortest path to the root of the sentence (or the root itself). If multiple tokens are equally high in the tree, the first token is taken.

| Name | Description |
|---|---|
RETURNS | The root token.
|

[Span.conjuncts ](#conjuncts)propertyNeeds model

A tuple of tokens coordinated to `span.root`

.

| Name | Description |
|---|---|
RETURNS | The coordinated tokens. Tuple[
|

[Span.lefts ](#lefts)propertyNeeds model

Tokens that are to the left of the span, whose heads are within the span.

| Name | Description |
|---|---|
YIELDS | A left-child of a token of the span.
|

[Span.rights ](#rights)propertyNeeds model

Tokens that are to the right of the span, whose heads are within the span.

| Name | Description |
|---|---|
YIELDS | A right-child of a token of the span.
|

[Span.n_lefts ](#n_lefts)propertyNeeds model

The number of tokens that are to the left of the span, whose heads are within the span.

| Name | Description |
|---|---|
RETURNS | The number of left-child tokens. int |

[Span.n_rights ](#n_rights)propertyNeeds model

The number of tokens that are to the right of the span, whose heads are within the span.

| Name | Description |
|---|---|
RETURNS | The number of right-child tokens. int |

[Span.subtree ](#subtree)propertyNeeds model

Tokens within the span and tokens which descend from them.

| Name | Description |
|---|---|
YIELDS | A token within the span, or a descendant from it.
|

[Span.has_vector ](#has_vector)propertyNeeds model

A boolean value indicating whether a word vector is associated with the object.

| Name | Description |
|---|---|
RETURNS | Whether the span has a vector data attached. bool |

[Span.vector ](#vector)propertyNeeds model

A real-valued meaning representation. Defaults to an average of the token vectors.

| Name | Description |
|---|---|
RETURNS | A 1-dimensional array representing the span’s vector. `numpy.ndarray[ndim=1, dtype=float32] |

[Span.vector_norm ](#vector_norm)propertyNeeds model

The L2 norm of the span’s vector representation.

| Name | Description |
|---|---|
RETURNS | The L2 norm of the vector representation. float |

[Span.sent ](#sent)propertyNeeds model

The sentence span that this span is a part of. This property is only available
when [sentence boundaries](/usage/linguistic-features#sbd) have been set on the
document by the `parser`

, `senter`

, `sentencizer`

or some custom function. It
will raise an error otherwise.

If the span happens to cross sentence boundaries, only the first sentence will be returned. If it is required that the sentence always includes the full span, the result can be adjusted as such:



| Name | Description |
|---|---|
RETURNS | The sentence span that this span is a part of.
|

[Span.sents ](#sents)propertyv3.2.1Needs model

Returns a generator over the sentences the span belongs to. This property is
only available when [sentence boundaries](/usage/linguistic-features#sbd) have
been set on the document by the `parser`

, `senter`

, `sentencizer`

or some custom
function. It will raise an error otherwise.

If the span happens to cross sentence boundaries, all sentences the span overlaps with will be returned.

| Name | Description |
|---|---|
RETURNS | A generator yielding sentences this `Span` is a part of Iterable[
|

[Attributes ](#attributes)

| Name | Description |
|---|---|
`doc` | The parent document.
|

`tensor`

`Doc`

’s tensor. [numpy.ndarray](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html)`start`

`end`

`start_char`

`end_char`

`text`

`text_with_ws`

`orth`

`orth_`

`Span.text`

). Exists mostly for consistency with the other attributes. str`label`

`label_`

`lemma_`

`"".join(token.text_with_ws for token in span)`

. str`kb_id`

`kb_id_`

`ent_id`

`ent_id_`

`id`

`id_`

`sentiment`

`_`

---

## Source: https://spacy.io/api/spangroup

# SpanGroup

A group of arbitrary, potentially overlapping [ Span](/api/span) objects that
all belong to the same

[object. The group can be named, and you can attach additional attributes to it. Span groups are generally accessed via the](/api/doc)

`Doc`

[attribute, which will convert lists of spans into a](/api/doc#spans)

`Doc.spans`

`SpanGroup`

object for you automatically on assignment. `SpanGroup`

objects behave similar to `list`

s, so you can append `Span`

objects to them or
access a member at a given index.[SpanGroup.__init__ ](#init)method

Create a `SpanGroup`

.

| Name | Description |
|---|---|
`doc` | The document the span group belongs to.
|

*keyword-only*`name`

`doc.spans`

, the key name is used. Defaults to `""`

. str`attrs`

`spans`

[Span](/api/span)][SpanGroup.doc ](#doc)property

The [ Doc](/api/doc) object the span group is referring to.

| Name | Description |
|---|---|
RETURNS | The reference document.
|

[SpanGroup.has_overlap ](#has_overlap)property

Check whether the span group contains overlapping spans.

| Name | Description |
|---|---|
RETURNS | Whether the span group contains overlaps. bool |

[SpanGroup.__len__ ](#len)method

Get the number of spans in the group.

| Name | Description |
|---|---|
RETURNS | The number of spans in the group. int |

[SpanGroup.__getitem__ ](#getitem)method

Get a span from the group. Note that a copy of the span is returned, so if any changes are made to this span, they are not reflected in the corresponding member of the span group. The item or group will need to be reassigned for changes to be reflected in the span group.

| Name | Description |
|---|---|
`i` | The item index. int |
RETURNS | The span at the given index.
|

[SpanGroup.__setitem__ ](#setitem)methodv3.3

Set a span in the span group.

| Name | Description |
|---|---|
`i` | The item index. int |
`span` | The new value.
|

[SpanGroup.__delitem__ ](#delitem)methodv3.3

Delete a span from the span group.

| Name | Description |
|---|---|
`i` | The item index. int |

[SpanGroup.__add__ ](#add)methodv3.3

Concatenate the current span group with another span group and return the result
in a new span group. Any `attrs`

from the first span group will have precedence
over `attrs`

in the second.

| Name | Description |
|---|---|
`other` | The span group or spans to concatenate. Union[
|

**RETURNS**[SpanGroup](/api/spangroup)[SpanGroup.__iadd__ ](#iadd)methodv3.3

Append an iterable of spans or the content of a span group to the current span
group. Any `attrs`

in the other span group will be added for keys that are not
already present in the current span group.

| Name | Description |
|---|---|
`other` | The span group or spans to append. Union[
|

**RETURNS**[SpanGroup](/api/spangroup)[SpanGroup.__iter__ ](#iter)methodv3.5

Iterate over the spans in this span group.

| Name | Description |
|---|---|
YIELDS | A span in this span group.
|

[SpanGroup.append ](#append)method

Add a [ Span](/api/span) object to the group. The span must refer to the same

[object as the span group.](/api/doc)

`Doc`

| Name | Description |
|---|---|
`span` | The span to append.
|

[SpanGroup.extend ](#extend)method

Add multiple [ Span](/api/span) objects or contents of another

`SpanGroup`

to
the group. All spans must refer to the same [object as the span group.](/api/doc)

`Doc`

| Name | Description |
|---|---|
`spans` | The spans to add. Union[
|

[SpanGroup.copy ](#copy)methodv3.3

Return a copy of the span group.

| Name | Description |
|---|---|
`doc` | The document to which the copy is bound. Defaults to `None` for the current doc. Optional[
|
RETURNS | A copy of the `SpanGroup` object.
|

[SpanGroup.to_bytes ](#to_bytes)method

Serialize the span group to a bytestring.

| Name | Description |
|---|---|
RETURNS | The serialized `SpanGroup` . bytes |

[SpanGroup.from_bytes ](#from_bytes)method

Load the span group from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
RETURNS | The `SpanGroup` object.
|

---

## Source: https://spacy.io/api/token

# Token

[Token.__init__ ](#init)method

Construct a `Token`

object.

| Name | Description |
|---|---|
`vocab` | A storage container for lexical types.
|

`doc`

[Doc](/api/doc)`offset`

[Token.__len__ ](#len)method

The number of unicode characters in the token, i.e. `token.text`

.

| Name | Description |
|---|---|
RETURNS | The number of unicode characters in the token. int |

[Token.set_extension ](#set_extension)classmethod

Define a custom attribute on the `Token`

which becomes available via `Token._`

.
For details, see the documentation on
[custom attributes](/usage/processing-pipelines#custom-components-attributes).

| Name | Description |
|---|---|
`name` | Name of the attribute to set by the extension. For example, `"my_attr"` will be available as `token._.my_attr` . str |
`default` | Optional default value of the attribute if no getter or method is defined. Optional[Any] |
`method` | Set a custom method on the object, for example `token._.compare(other_token)` . Optional[Callable[[
|
`getter` | Getter function that takes the object and returns an attribute value. Is called when the user accesses the `._` attribute. Optional[Callable[[
|
`setter` | Setter function that takes the `Token` and a value, and modifies the object. Is called when the user writes to the `Token._` attribute. Optional[Callable[[
|
`force` | Force overwriting existing attribute. bool |

[Token.get_extension ](#get_extension)classmethod

Look up a previously registered extension by name. Returns a 4-tuple
`(default, method, getter, setter)`

if the extension is registered. Raises a
`KeyError`

otherwise.

| Name | Description |
|---|---|
`name` | Name of the extension. str |
RETURNS | A `(default, method, getter, setter)` tuple of the extension. Tuple[Optional[Any], Optional[Callable], Optional[Callable], Optional[Callable]] |

[Token.has_extension ](#has_extension)classmethod

Check whether an extension has been registered on the `Token`

class.

| Name | Description |
|---|---|
`name` | Name of the extension to check. str |
RETURNS | Whether the extension has been registered. bool |

[Token.remove_extension ](#remove_extension)classmethod

Remove a previously registered extension.

| Name | Description |
|---|---|
`name` | Name of the extension. str |
RETURNS | A `(default, method, getter, setter)` tuple of the removed extension. Tuple[Optional[Any], Optional[Callable], Optional[Callable], Optional[Callable]] |

[Token.check_flag ](#check_flag)method

Check the value of a boolean flag.

| Name | Description |
|---|---|
`flag_id` | The attribute ID of the flag to check. int |
RETURNS | Whether the flag is set. bool |

[Token.similarity ](#similarity)methodNeeds model

Compute a semantic similarity estimate. Defaults to cosine over vectors.

| Name | Description |
|---|---|
| other | The object to compare with. By default, accepts `Doc` , `Span` , `Token` and `Lexeme` objects. Union[
|
RETURNS | A scalar similarity score. Higher is more similar. float |

[Token.nbor ](#nbor)method

Get a neighboring token.

| Name | Description |
|---|---|
`i` | The relative position of the token to get. Defaults to `1` . int |
RETURNS | The token at position `self.doc[self.i+i]` .
|

[Token.set_morph ](#set_morph)method

Set the morphological analysis from a UD FEATS string, hash value of a UD FEATS
string, features dict or `MorphAnalysis`

. The value `None`

can be used to reset
the morph to an unset state.

| Name | Description |
|---|---|
| features | The morphological features to set. Union[int, dict, str,
|

[Token.has_morph ](#has_morph)method

Check whether the token has annotated morph information. Return `False`

when the
morph annotation is unset/missing.

| Name | Description |
|---|---|
RETURNS | Whether the morph annotation is set. bool |

[Token.is_ancestor ](#is_ancestor)methodNeeds model

Check whether this token is a parent, grandparent, etc. of another in the dependency tree.

| Name | Description |
|---|---|
| descendant | Another token.
|

**RETURNS**[Token.ancestors ](#ancestors)propertyNeeds model

A sequence of the token’s syntactic ancestors (parents, grandparents, etc).

| Name | Description |
|---|---|
YIELDS | A sequence of ancestor tokens such that `ancestor.is_ancestor(self)` .
|

[Token.conjuncts ](#conjuncts)propertyNeeds model

A tuple of coordinated tokens, not including the token itself.

| Name | Description |
|---|---|
RETURNS | The coordinated tokens. Tuple[
|

[Token.children ](#children)propertyNeeds model

A sequence of the token’s immediate syntactic children.

| Name | Description |
|---|---|
YIELDS | A child token such that `child.head == self` .
|

[Token.lefts ](#lefts)propertyNeeds model

The leftward immediate children of the word in the syntactic dependency parse.

| Name | Description |
|---|---|
YIELDS | A left-child of the token.
|

[Token.rights ](#rights)propertyNeeds model

The rightward immediate children of the word in the syntactic dependency parse.

| Name | Description |
|---|---|
YIELDS | A right-child of the token.
|

[Token.n_lefts ](#n_lefts)propertyNeeds model

The number of leftward immediate children of the word in the syntactic dependency parse.

| Name | Description |
|---|---|
RETURNS | The number of left-child tokens. int |

[Token.n_rights ](#n_rights)propertyNeeds model

The number of rightward immediate children of the word in the syntactic dependency parse.

| Name | Description |
|---|---|
RETURNS | The number of right-child tokens. int |

[Token.subtree ](#subtree)propertyNeeds model

A sequence containing the token and all the token’s syntactic descendants.

| Name | Description |
|---|---|
YIELDS | A descendant token such that `self.is_ancestor(token)` or `token == self` .
|

[Token.has_vector ](#has_vector)propertyNeeds model

A boolean value indicating whether a word vector is associated with the token.

| Name | Description |
|---|---|
RETURNS | Whether the token has a vector data attached. bool |

[Token.vector ](#vector)propertyNeeds model

A real-valued meaning representation.

| Name | Description |
|---|---|
RETURNS | A 1-dimensional array representing the token’s vector.
|

[Token.vector_norm ](#vector_norm)propertyNeeds model

The L2 norm of the token’s vector representation.

| Name | Description |
|---|---|
RETURNS | The L2 norm of the vector representation. float |

[Attributes ](#attributes)

| Name | Description |
|---|---|
`doc` | The parent document.
|

`lex`

v3.0[Lexeme](/api/lexeme)`sent`

[Span](/api/span)`text`

`text_with_ws`

`whitespace_`

`orth`

`orth_`

`Token.text`

). Exists mostly for consistency with the other attributes. str`vocab`

`Doc`

. vocab`tensor`

`Doc`

’s tensor. [numpy.ndarray](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html)`head`

[Token](/api/token)`left_edge`

[Token](/api/token)`right_edge`

[Token](/api/token)`i`

`ent_type`

`ent_type_`

`ent_iob`

`3`

means the token begins an entity, `2`

means it is outside an entity, `1`

means it is inside an entity, and `0`

means no entity tag is set. int`ent_iob_`

`ent_kb_id`

`ent_kb_id_`

`ent_id`

`ent_id_`

`lemma`

`lemma_`

`norm`

[tokenizer exceptions](/usage/linguistic-features#language-data). int`norm_`

[tokenizer exceptions](/usage/linguistic-features#language-data). str`lower`

`lower_`

`Token.text.lower()`

. str`shape`

`x`

or `X`

, and numeric characters are replaced by `d`

, and sequences of the same character are truncated after length 4. For example,`"Xxxx"`

or`"dd"`

. int`shape_`

`x`

or `X`

, and numeric characters are replaced by `d`

, and sequences of the same character are truncated after length 4. For example,`"Xxxx"`

or`"dd"`

. str`prefix`

`N=1`

. int`prefix_`

`N=1`

. str`suffix`

`N=3`

. int`suffix_`

`N=3`

. str`is_alpha`

`token.text.isalpha()`

. bool`is_ascii`

`all(ord(c) < 128 for c in token.text)`

. bool`is_digit`

`token.text.isdigit()`

. bool`is_lower`

`token.text.islower()`

. bool`is_upper`

`token.text.isupper()`

. bool`is_title`

`token.text.istitle()`

. bool`is_punct`

`is_left_punct`

`"("`

? bool`is_right_punct`

`")"`

? bool`is_sent_start`

`None`

if unknown. Defaults to `True`

for the first token in the `Doc`

.`is_sent_end`

`None`

if unknown.`is_space`

`token.text.isspace()`

. bool`is_bracket`

`is_quote`

`is_currency`

`like_url`

`like_num`

`like_email`

`is_oov`

`is_stop`

`pos`

[Universal POS tag set](https://universaldependencies.org/u/pos/). int`pos_`

[Universal POS tag set](https://universaldependencies.org/u/pos/). str`tag`

`tag_`

`morph`

v3.0[MorphAnalysis](/api/morphology#morphanalysis)`dep`

`dep_`

`lang`

`lang_`

`prob`

`idx`

`sentiment`

`lex_id`

`rank`

`cluster`

`_`

---

## Source: https://spacy.io/api/attributeruler

# AttributeRuler

The attribute ruler lets you set token attributes for tokens identified by
[ Matcher patterns](/usage/rule-based-matching#matcher). The attribute ruler is
typically used to handle exceptions for token attributes and to map values
between attributes such as mapping fine-grained POS tags to coarse-grained POS
tags. See the

[usage guide](/usage/linguistic-features#mappings-exceptions)for examples.

[Config and implementation ](#config)

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[.](/usage/training#config)

`config.cfg`

for training| Setting | Description |
|---|---|
`validate` | Whether patterns should be validated (passed to the `Matcher` ). Defaults to `False` . bool |

`explosion/spaCy/master/spacy/pipeline/attributeruler.py`


[AttributeRuler.__init__ ](#init)method

Initialize the attribute ruler.

| Name | Description |
|---|---|
`vocab` | The shared vocabulary to pass to the matcher.
|

`name`

*keyword-only*`validate`

[). Defaults to](/api/matcher#init)`Matcher`

`False`

. bool`scorer`

[for the attributes](/api/scorer#score_token_attr)`Scorer.score_token_attr`

`"tag`

“, `"pos"`

, `"morph"`

and `"lemma"`

and [for the attribute](/api/scorer#score_token_attr_per_feat)`Scorer.score_token_attr_per_feat`

`"morph"`

. Optional[Callable][AttributeRuler.__call__ ](#call)method

Apply the attribute ruler to a `Doc`

, setting token attributes for tokens
matched by the provided patterns.

| Name | Description |
|---|---|
`doc` | The document to process.
|

**RETURNS**[Doc](/api/doc)[AttributeRuler.add ](#add)method

Add patterns to the attribute ruler. The patterns are a list of `Matcher`

patterns and the attributes are a dict of attributes to set on the matched
token. If the pattern matches a span of more than one token, the `index`

can be
used to set the attributes for the token at that index in the span. The `index`

may be negative to index from the end of the span.

| Name | Description |
|---|---|
`patterns` | The `Matcher` patterns to add. Iterable[List[Dict[Union[int, str], Any]]] |
`attrs` | The attributes to assign to the target token in the matched span. Dict[str, Any] |
`index` | The index of the token in the matched span to modify. May be negative to index from the end of the span. Defaults to `0` . int |

[AttributeRuler.add_patterns ](#add_patterns)method

Add patterns from a list of pattern dicts. Each pattern dict can specify the
keys `"patterns"`

, `"attrs"`

and `"index"`

, which match the arguments of
[ AttributeRuler.add](/api/attributeruler#add).

| Name | Description |
|---|---|
`patterns` | The patterns to add. Iterable[Dict[str, Union[List[dict], dict, int]]] |

[AttributeRuler.patterns ](#patterns)property

Get all patterns that have been added to the attribute ruler in the
`patterns_dict`

format accepted by
[ AttributeRuler.add_patterns](/api/attributeruler#add_patterns).

| Name | Description |
|---|---|
RETURNS | The patterns added to the attribute ruler. List[Dict[str, Union[List[dict], dict, int]]] |

[AttributeRuler.initialize ](#initialize)method

Initialize the component with data and used before training to load in rules
from a file. This method is typically called by
[ Language.initialize](/api/language#initialize) and lets you customize
arguments it receives via the

[block in the config.](/api/data-formats#config-initialize)

`[initialize.components]`

| Name | Description |
|---|---|
`get_examples` | Function that returns gold-standard annotations in the form of
`Example` |

[Example](/api/example)]]

*keyword-only*`nlp`

`nlp`

object. Defaults to `None`

. Optional[[Language](/api/language)]`patterns`

[(](/api/attributeruler#add)`AttributeRuler.add`

`patterns`

/`attrs`

/`index`

) to add as patterns. Defaults to `None`

. Optional[Iterable[Dict[str, Union[List[dict], dict, int]]]]`tag_map`

`None`

. Optional[Dict[str, Dict[Union[int, str], Union[int, str]]]]`morph_rules`

`None`

. Optional[Dict[str, Dict[str, Dict[Union[int, str], Union[int, str]]]]][AttributeRuler.load_from_tag_map ](#load_from_tag_map)method

Load attribute ruler patterns from a tag map.

| Name | Description |
|---|---|
`tag_map` | The tag map that maps fine-grained tags to coarse-grained tags and morphological features. Dict[str, Dict[Union[int, str], Union[int, str]]] |

[AttributeRuler.load_from_morph_rules ](#load_from_morph_rules)method

Load attribute ruler patterns from morph rules.

| Name | Description |
|---|---|
`morph_rules` | The morph rules that map token text and fine-grained tags to coarse-grained tags, lemmas and morphological features. Dict[str, Dict[str, Dict[Union[int, str], Union[int, str]]]] |

[AttributeRuler.to_disk ](#to_disk)method

Serialize the pipe to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[AttributeRuler.from_disk ](#from_disk)method

Load the pipe from disk. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`AttributeRuler`

object. AttributeRuler[AttributeRuler.to_bytes ](#to_bytes)method

Serialize the pipe to a bytestring.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`AttributeRuler`

object. bytes[AttributeRuler.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`AttributeRuler`

object. AttributeRuler[Serialization fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

`patterns`

`Matcher`

patterns. You usually don’t want to exclude this.`attrs`

`indices`

---

## Source: https://spacy.io/api/coref

# CoreferenceResolver

A `CoreferenceResolver`

component groups tokens into clusters that refer to the
same thing. Clusters are represented as SpanGroups that start with a prefix
(`coref_clusters`

by default).

A `CoreferenceResolver`

component can be paired with a
[ SpanResolver](/api/span-resolver) to expand single tokens to spans.

[Assigned Attributes ](#assigned-attributes)

Predictions will be saved to `Doc.spans`

as a [ SpanGroup](/api/spangroup). The
span key will be a prefix plus a serial number referring to the coreference
cluster, starting from zero.

The span key prefix defaults to `"coref_clusters"`

, but can be passed as a
parameter.

| Location | Value |
|---|---|
`Doc.spans[prefix + "_" + cluster_number]` | One coreference cluster, represented as single-token spans. Cluster numbers start from 1.
|

[Config and implementation ](#config)

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[. See the](/usage/training#config)

`config.cfg`

for training[model architectures](/api/architectures#coref-architectures)documentation for details on the architectures and their arguments and hyperparameters.

| Setting | Description |
|---|---|
`model` | The
`Model` |

[Coref](/api/architectures#Coref).

[Model](https://thinc.ai/docs/api-model)

`span_cluster_prefix`

`doc.spans`

. Defaults to `coref_clusters`

. str[CoreferenceResolver.__init__ ](#init)method

Create a new pipeline instance. In your application, you would normally use a
shortcut for this and instantiate the component using its string name and
[ nlp.add_pipe](/api/language#add_pipe).

| Name | Description |
|---|---|
`vocab` | The shared vocabulary.
|

`model`

[powering the pipeline component.](https://thinc.ai/docs/api-model)`Model`

[Model](https://thinc.ai/docs/api-model)`name`

`losses`

during training. str*keyword-only*`span_cluster_prefix`

[CoreferenceResolver.__call__ ](#call)method

Apply the pipe to one document. The document is modified in place and returned.
This usually happens under the hood when the `nlp`

object is called on a text
and all pipeline components are applied to the `Doc`

in order. Both
[ __call__](/api/coref#call) and

[delegate to the](/api/coref#pipe)

`pipe`

[and](/api/coref#predict)

`predict`

[methods.](/api/coref#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`doc` | The document to process.
|

**RETURNS**[Doc](/api/doc)[CoreferenceResolver.pipe ](#pipe)method

Apply the pipe to a stream of documents. This usually happens under the hood
when the `nlp`

object is called on a text and all pipeline components are
applied to the `Doc`

in order. Both [ __call__](/api/coref#call) and

[delegate to the](/api/coref#pipe)

`pipe`

[and](/api/coref#predict)

`predict`

[methods.](/api/coref#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`stream` | A stream of documents. Iterable[
|

*keyword-only*`batch_size`

`128`

. int**YIELDS**[Doc](/api/doc)[CoreferenceResolver.initialize ](#initialize)method

Initialize the component for training. `get_examples`

should be a function that
returns an iterable of [ Example](/api/example) objects.

**At least one example should be supplied.**The data examples are used to

**initialize the model**of the component and can either be the full training data or a representative sample. Initialization includes validating the network,

[inferring missing shapes](https://thinc.ai/docs/usage-models#validation)and setting up the label scheme based on the data. This method is typically called by

[.](/api/language#initialize)

`Language.initialize`

| Name | Description |
|---|---|
`get_examples` | Function that returns gold-standard annotations in the form of
`Example` |

`Example`

. Callable[[], Iterable[[Example](/api/example)]]

*keyword-only*`nlp`

`nlp`

object. Defaults to `None`

. Optional[[Language](/api/language)][CoreferenceResolver.predict ](#predict)method

Apply the component’s model to a batch of [ Doc](/api/doc) objects, without
modifying them. Clusters are returned as a list of

`MentionClusters`

, one for
each input `Doc`

. A `MentionClusters`

instance is just a list of lists of pairs
of `int`

s, where each item corresponds to a cluster, and the `int`

s correspond
to token indices.| Name | Description |
|---|---|
`docs` | The documents to predict. Iterable[
|

**RETURNS**`docs`

. List[MentionClusters][CoreferenceResolver.set_annotations ](#set_annotations)method

Modify a batch of documents, saving coreference clusters in `Doc.spans`

.

| Name | Description |
|---|---|
`docs` | The documents to modify. Iterable[
|

`clusters`

`docs`

. List[MentionClusters][CoreferenceResolver.update ](#update)method

Learn from a batch of [ Example](/api/example) objects. Delegates to

[.](/api/coref#predict)

`predict`

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |

[Example](/api/example)]

*keyword-only*`drop`

`sgd`

[if not set. Optional[](/api/coref#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]`losses`

**RETURNS**`losses`

dictionary. Dict[str, float][CoreferenceResolver.create_optimizer ](#create_optimizer)method

Create an optimizer for the pipeline component.

| Name | Description |
|---|---|
RETURNS | The optimizer.
|

[CoreferenceResolver.use_params ](#use_params)methodcontextmanager

Modify the pipe’s model, to use the given parameter values. At the end of the context, the original parameters are restored.

| Name | Description |
|---|---|
`params` | The parameter values to use in the model. dict |

[CoreferenceResolver.to_disk ](#to_disk)method

Serialize the pipe to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[CoreferenceResolver.from_disk ](#from_disk)method

Load the pipe from disk. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`CoreferenceResolver`

object. CoreferenceResolver[CoreferenceResolver.to_bytes ](#to_bytes)method

Serialize the pipe to a bytestring, including the `KnowledgeBase`

.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`CoreferenceResolver`

object. bytes[CoreferenceResolver.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`CoreferenceResolver`

object. CoreferenceResolver[Serialization fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

`cfg`

`model`

---

## Source: https://spacy.io/api/curatedtransformer

# CuratedTransformer

This pipeline component lets you use a curated set of transformer models in your pipeline. spaCy Curated Transformers currently supports the following model types:

- ALBERT
- BERT
- CamemBERT
- RoBERTa
- XLM-RoBERT

If you want to use another type of model, use
[spacy-transformers](/api/spacy-transformers), which allows you to use all
Hugging Face transformer models with spaCy.

You will usually connect downstream components to a shared Curated Transformer
pipe using one of the Curated Transformer listener layers. This works similarly
to spaCy’s [Tok2Vec](/api/tok2vec), and the
[Tok2VecListener](/api/architectures#Tok2VecListener) sublayer. The component
assigns the output of the transformer to the `Doc`

’s extension attributes. To
access the values, you can use the custom
[ Doc._.trf_data](/api/curatedtransformer#assigned-attributes) attribute.

For more details, see the [usage documentation](/usage/embeddings-transformers).

[Assigned Attributes ](#assigned-attributes)

The component sets the following
[custom extension attribute](/usage/processing-pipeline#custom-components-attributes):

| Location | Value |
|---|---|
`Doc._.trf_data` | Curated Transformer outputs for the `Doc` object. DocTransformerOutput |

[Config and Implementation ](#config)

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[. See the](/usage/training#config)

`config.cfg`

for training[model architectures](/api/architectures#curated-trf)documentation for details on the curated transformer architectures and their arguments and hyperparameters.

| Setting | Description |
|---|---|
`model` | The Thinc
`Model` |

[.](/api/architectures#curated-trf)

`XlmrTransformer`

[Model](https://thinc.ai/docs/api-model)

`frozen`

`True`

, the model’s weights are frozen and no backpropagation is performed. bool`all_layer_outputs`

`True`

, the model returns the outputs of all the layers. Otherwise, only the output of the last layer is returned. This must be set to `True`

if any of the pipe’s downstream listeners require the outputs of all transformer layers. bool`explosion/spacy-curated-transformers/main/spacy_curated_transformers/pipeline/transformer.py`


[CuratedTransformer.__init__ ](#init)method

Construct a `CuratedTransformer`

component. One or more subsequent spaCy
components can use the transformer outputs as features in its model, with
gradients backpropagated to the single shared weights. The activations from the
transformer are saved in the [ Doc._.trf_data](/api/curatedtransformer#assigned-attributes) extension
attribute. You can also provide a callback to set additional annotations. In
your application, you would normally use a shortcut for this and instantiate the
component using its string name and

[.](/api/language#create_pipe)

`nlp.add_pipe`

| Name | Description |
|---|---|
`vocab` | The shared vocabulary.
|

`model`

[Model](https://thinc.ai/docs/api-model)*keyword-only*`name`

`frozen`

`True`

, the model’s weights are frozen and no backpropagation is performed. bool`all_layer_outputs`

`True`

, the model returns the outputs of all the layers. Otherwise, only the output of the last layer is returned. This must be set to `True`

if any of the pipe’s downstream listeners require the outputs of all transformer layers. bool[CuratedTransformer.__call__ ](#call)method

Apply the pipe to one document. The document is modified in place, and returned.
This usually happens under the hood when the `nlp`

object is called on a text
and all pipeline components are applied to the `Doc`

in order. Both
[ __call__](/api/curatedtransformer#call) and

[delegate to the](/api/curatedtransformer#pipe)

`pipe`

[and](/api/curatedtransformer#predict)

`predict`

[methods.](/api/curatedtransformer#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`doc` | The document to process.
|

**RETURNS**[Doc](/api/doc)[CuratedTransformer.pipe ](#pipe)method

Apply the pipe to a stream of documents. This usually happens under the hood
when the `nlp`

object is called on a text and all pipeline components are
applied to the `Doc`

in order. Both [ __call__](/api/curatedtransformer#call)
and

[delegate to the](/api/curatedtransformer#pipe)

`pipe`

[and](/api/curatedtransformer#predict)

`predict`

[methods.](/api/curatedtransformer#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`stream` | A stream of documents. Iterable[
|

*keyword-only*`batch_size`

`128`

. int**YIELDS**[Doc](/api/doc)[CuratedTransformer.initialize ](#initialize)method

Initialize the component for training and return an
[ Optimizer](https://thinc.ai/docs/api-optimizers).

`get_examples`

should be a
function that returns an iterable of [objects.](/api/example)

`Example`

**At least one example should be supplied.**The data examples are used to

**initialize the model**of the component and can either be the full training data or a representative sample. Initialization includes validating the network,

[inferring missing shapes](https://thinc.ai/docs/usage-models#validation)and setting up the label scheme based on the data. This method is typically called by

[.](/api/language#initialize)

`Language.initialize`

| Name | Description |
|---|---|
`get_examples` | Function that returns gold-standard annotations in the form of
`Example` |

`Example`

. Callable[[], Iterable[[Example](/api/example)]]

*keyword-only*`nlp`

`nlp`

object. Defaults to `None`

. Optional[[Language](/api/language)]`encoder_loader`

`piece_loader`

[CuratedTransformer.predict ](#predict)method

Apply the component’s model to a batch of [ Doc](/api/doc) objects without
modifying them.

| Name | Description |
|---|---|
`docs` | The documents to predict. Iterable[
|

**RETURNS**[CuratedTransformer.set_annotations ](#set_annotations)method

Assign the extracted features to the `Doc`

objects. By default, the
[ DocTransformerOutput](/api/curatedtransformer#doctransformeroutput) object is
written to the

[attribute. Your](/api/curatedtransformer#assigned-attributes)

`Doc._.trf_data`

`set_extra_annotations`

callback is then called, if provided.| Name | Description |
|---|---|
`docs` | The documents to modify. Iterable[
|

`scores`

`CuratedTransformer.predict`

.[CuratedTransformer.update ](#update)method

Prepare for an update to the transformer.

Like the [ Tok2Vec](/api/tok2vec) component, the

`CuratedTransformer`

component
is unusual in that it does not receive “gold standard” annotations to calculate
a weight update. The optimal output of the transformer data is unknown; it’s a
hidden layer inside the network that is updated by backpropagating from output
layers.The `CuratedTransformer`

component therefore does not perform a weight update
during its own `update`

method. Instead, it runs its transformer model and
communicates the output and the backpropagation callback to any downstream
components that have been connected to it via the transformer listener sublayer.
If there are multiple listeners, the last layer will actually backprop to the
transformer and call the optimizer, while the others simply increment the
gradients.

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |


`Example.predicted`

`Doc`

object is used, the reference `Doc`

is ignored. Iterable[[Example](/api/example)]

*keyword-only*`drop`

`sgd`

[if not set. Optional[](/api/curatedtransformer#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]`losses`

**RETURNS**`losses`

dictionary. Dict[str, float][CuratedTransformer.create_optimizer ](#create_optimizer)method

Create an optimizer for the pipeline component.

| Name | Description |
|---|---|
RETURNS | The optimizer.
|

[CuratedTransformer.use_params ](#use_params)methodcontextmanager

Modify the pipe’s model to use the given parameter values. At the end of the context, the original parameters are restored.

| Name | Description |
|---|---|
`params` | The parameter values to use in the model. dict |

[CuratedTransformer.to_disk ](#to_disk)method

Serialize the pipe to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[CuratedTransformer.from_disk ](#from_disk)method

Load the pipe from disk. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`CuratedTransformer`

object. CuratedTransformer[CuratedTransformer.to_bytes ](#to_bytes)method

Serialize the pipe to a bytestring.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`CuratedTransformer`

object. bytes[CuratedTransformer.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`CuratedTransformer`

object. CuratedTransformer[Serialization Fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

`cfg`

`model`

[DocTransformerOutput ](#doctransformeroutput)dataclass

Curated Transformer outputs for one `Doc`

object. Stores the dense
representations generated by the transformer for each piece identifier. Piece
identifiers are grouped by token. Instances of this class are typically assigned
to the [ Doc._.trf_data](/api/curatedtransformer#assigned-attributes) extension
attribute.

| Name | Description |
|---|---|
`all_outputs` | List of `Ragged` tensors that correspends to outputs of the different transformer layers. Each tensor element corresponds to a piece identifier’s representation. List[
|
`last_layer_only` | If only the last transformer layer’s outputs are preserved. bool |

[DocTransformerOutput.embedding_layer ](#doctransformeroutput-embeddinglayer)property

Return the output of the transformer’s embedding layer or `None`

if
`last_layer_only`

is `True`

.

| Name | Description |
|---|---|
RETURNS | Embedding layer output. Optional[
|

[DocTransformerOutput.last_hidden_layer_state ](#doctransformeroutput-lasthiddenlayerstate)property

Return the output of the transformer’s last hidden layer.

| Name | Description |
|---|---|
RETURNS | Last hidden layer output.
|

[DocTransformerOutput.all_hidden_layer_states ](#doctransformeroutput-allhiddenlayerstates)property

Return the outputs of all transformer layers (excluding the embedding layer).

| Name | Description |
|---|---|
RETURNS | Hidden layer outputs. List[
|

[DocTransformerOutput.num_outputs ](#doctransformeroutput-numoutputs)property

Return the number of layer outputs stored in the `DocTransformerOutput`

instance
(including the embedding layer).

| Name | Description |
|---|---|
RETURNS | Numbef of outputs. int |

[Span Getters ](#span_getters)

Span getters are functions that take a batch of [ Doc](/api/doc) objects and
return a lists of

[objects for each doc to be processed by the transformer. This is used to manage long documents by cutting them into smaller sequences before running the transformer. The spans are allowed to overlap, and you can also omit sections of the](/api/span)

`Span`

`Doc`

if they are not relevant.
Span getters can be referenced in the
`[components.transformer.model.with_spans]`

block of the config to customize the
sequences processed by the transformer.| Name | Description |
|---|---|
`docs` | A batch of `Doc` objects. Iterable[
|
RETURNS | The spans to process by the transformer. List[List[
|

[WithStridedSpans.v1 ](#strided_spans)registered function

Create a span getter for strided spans. If you set the `window`

and `stride`

to
the same value, the spans will cover each token once. Setting `stride`

lower
than `window`

will allow for an overlap, so that some tokens are counted twice.
This can be desirable, because it allows all tokens to have both a left and
right context.

| Name | Description |
|---|---|
`window` | The window size. int |
`stride` | The stride size. int |

## Model Loaders

[Curated Transformer models](/api/architectures#curated-trf) are constructed
with default hyperparameters and randomized weights when the pipeline is
created. To load the weights of an existing pre-trained model into the pipeline,
one of the following loader callbacks can be used. The pre-trained model must
have the same hyperparameters as the model used by the pipeline.

[HFTransformerEncoderLoader.v1 ](#hf_trfencoder_loader)registered_function

Construct a callback that initializes a supported transformer model with weights from a corresponding HuggingFace model.

| Name | Description |
|---|---|
`name` | Name of the HuggingFace model. str |
`revision` | Name of the model revision/branch. str |

[PyTorchCheckpointLoader.v1 ](#pytorch_checkpoint_loader)registered_function

Construct a callback that initializes a supported transformer model with weights from a PyTorch checkpoint.

| Name | Description |
|---|---|
`path` | Path to the PyTorch checkpoint.
|

## Tokenizer Loaders

[Curated Transformer models](/api/architectures#curated-trf) must be paired with
a matching tokenizer (piece encoder) model in a spaCy pipeline. As with the
transformer models, tokenizers are constructed with an empty vocabulary during
pipeline creation - They need to be initialized with an appropriate loader
before use in training/inference.

[ByteBPELoader.v1 ](#bytebpe_loader)registered_function

Construct a callback that initializes a Byte-BPE piece encoder model.

| Name | Description |
|---|---|
`vocab_path` | Path to the vocabulary file.
|

`merges_path`

[Path](https://docs.python.org/3/library/pathlib.html)[CharEncoderLoader.v1 ](#charencoder_loader)registered_function

Construct a callback that initializes a character piece encoder model.

| Name | Description |
|---|---|
`path` | Path to the serialized character model.
|

`bos_piece`

`"[BOS]"`

. str`eos_piece`

`"[EOS]"`

. str`unk_piece`

`"[UNK]"`

. str`normalize`

`"NFKC"`

. str[HFPieceEncoderLoader.v1 ](#hf_pieceencoder_loader)registered_function

Construct a callback that initializes a HuggingFace piece encoder model. Used in conjunction with the HuggingFace model loader.

| Name | Description |
|---|---|
`name` | Name of the HuggingFace model. str |
`revision` | Name of the model revision/branch. str |

[SentencepieceLoader.v1 ](#sentencepiece_loader)registered_function

Construct a callback that initializes a SentencePiece piece encoder model.

| Name | Description |
|---|---|
`path` | Path to the serialized SentencePiece model.
|

[WordpieceLoader.v1 ](#wordpiece_loader)registered_function

Construct a callback that initializes a WordPiece piece encoder model.

| Name | Description |
|---|---|
`path` | Path to the serialized WordPiece model.
|

## Callbacks

[gradual_transformer_unfreezing.v1 ](#gradual_transformer_unfreezing)registered_function

Construct a callback that can be used to gradually unfreeze the weights of one or more Transformer components during training. This can be used to prevent catastrophic forgetting during fine-tuning.

| Name | Description |
|---|---|
`target_pipes` | A dictionary whose keys and values correspond to the names of Transformer components and the training step at which they should be unfrozen respectively. Dict[str, int] |

---

## Source: https://spacy.io/api/dependencyparser

# DependencyParser

A transition-based dependency parser component. The dependency parser jointly
learns sentence segmentation and labelled dependency parsing, and can optionally
learn to merge tokens that had been over-segmented by the tokenizer. The parser
uses a variant of the **non-monotonic arc-eager transition-system** described by
[Honnibal and Johnson (2014)](https://www.aclweb.org/anthology/D15-1162/), with
the addition of a “break” transition to perform the sentence segmentation.
[Nivre (2005)](https://www.aclweb.org/anthology/P05-1013/)’s **pseudo-projective
dependency transformation** is used to allow the parser to predict
non-projective parses.

The parser is trained using an **imitation learning objective**. It follows the
actions predicted by the current weights, and at each state, determines which
actions are compatible with the optimal parse that could be reached from the
current state. The weights are updated such that the scores assigned to the set
of optimal actions is increased, while scores assigned to other actions are
decreased. Note that more than one action may be optimal for a given state.

[Assigned Attributes ](#assigned-attributes)

Dependency predictions are assigned to the `Token.dep`

and `Token.head`

fields.
Beside the dependencies themselves, the parser decides sentence boundaries,
which are saved in `Token.is_sent_start`

and accessible via `Doc.sents`

.

| Location | Value |
|---|---|
`Token.dep` | The type of dependency relation (hash). int |
`Token.dep_` | The type of dependency relation. str |
`Token.head` | The syntactic parent, or “governor”, of this token.
|

`Token.is_sent_start`

`True`

or `False`

for all tokens. bool`Doc.sents`

`Doc`

, determined by `Token.is_sent_start`

values. Iterator[[Span](/api/span)][Config and implementation ](#config)

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[. See the](/usage/training#config)

`config.cfg`

for training[model architectures](/api/architectures)documentation for details on the architectures and their arguments and hyperparameters.

| Setting | Description |
|---|---|
`moves` | A list of transition names. Inferred from the data if not provided. Defaults to `None` . Optional[TransitionSystem] |
`update_with_oracle_cut_size` | During training, cut long sequences into shorter segments by creating intermediate states based on the gold-standard history. The model is not very sensitive to this parameter, so you usually won’t need to change it. Defaults to `100` . int |
`learn_tokens` | Whether to learn to merge subtokens that are split relative to the gold standard. Experimental. Defaults to `False` . bool |
`min_action_freq` | The minimum frequency of labelled actions to retain. Rarer labelled actions have their label backed-off to “dep”. While this primarily affects the label accuracy, it can also affect the attachment structure, as the labels are used to represent the pseudo-projectivity transformation. Defaults to `30` . int |
`model` | The
`Model` |

[TransitionBasedParser](/api/architectures#TransitionBasedParser).

[Model](https://thinc.ai/docs/api-model)[List[

[Doc](/api/doc)], List[

[Floats2d](https://thinc.ai/docs/api-types#types)]]

`explosion/spaCy/master/spacy/pipeline/dep_parser.pyx`


[DependencyParser.__init__ ](#init)method

Create a new pipeline instance. In your application, you would normally use a
shortcut for this and instantiate the component using its string name and
[ nlp.add_pipe](/api/language#add_pipe).

| Name | Description |
|---|---|
`vocab` | The shared vocabulary.
|

`model`

[powering the pipeline component.](https://thinc.ai/docs/api-model)`Model`

[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]`name`

`losses`

during training. str`moves`

*keyword-only*`update_with_oracle_cut_size`

`100`

. int`learn_tokens`

`False`

. bool`min_action_freq`

`scorer`

[for the attribute](/api/scorer#score_deps)`Scorer.score_deps`

`"dep"`

ignoring the labels `p`

and `punct`

and [for the attribute](/api/scorer#score_spans)`Scorer.score_spans`

`"sents"`

. Optional[Callable][DependencyParser.__call__ ](#call)method

Apply the pipe to one document. The document is modified in place, and returned.
This usually happens under the hood when the `nlp`

object is called on a text
and all pipeline components are applied to the `Doc`

in order. Both
[ __call__](/api/dependencyparser#call) and

[delegate to the](/api/dependencyparser#pipe)

`pipe`

[and](/api/dependencyparser#predict)

`predict`

[methods.](/api/dependencyparser#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`doc` | The document to process.
|

**RETURNS**[Doc](/api/doc)[DependencyParser.pipe ](#pipe)method

Apply the pipe to a stream of documents. This usually happens under the hood
when the `nlp`

object is called on a text and all pipeline components are
applied to the `Doc`

in order. Both [ __call__](/api/dependencyparser#call) and

[delegate to the](/api/dependencyparser#pipe)

`pipe`

[and](/api/dependencyparser#predict)

`predict`

[methods.](/api/dependencyparser#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`docs` | A stream of documents. Iterable[
|

*keyword-only*`batch_size`

`128`

. int**YIELDS**[Doc](/api/doc)[DependencyParser.initialize ](#initialize)methodv3.0

Initialize the component for training. `get_examples`

should be a function that
returns an iterable of [ Example](/api/example) objects.

**At least one example should be supplied.**The data examples are used to

**initialize the model**of the component and can either be the full training data or a representative sample. Initialization includes validating the network,

[inferring missing shapes](https://thinc.ai/docs/usage-models#validation)and setting up the label scheme based on the data. This method is typically called by

[and lets you customize arguments it receives via the](/api/language#initialize)

`Language.initialize`

[block in the config.](/api/data-formats#config-initialize)

`[initialize.components]`

| Name | Description |
|---|---|
`get_examples` | Function that returns gold-standard annotations in the form of
`Example` |

`Example`

. Callable[[], Iterable[[Example](/api/example)]]

*keyword-only*`nlp`

`nlp`

object. Defaults to `None`

. Optional[[Language](/api/language)]`labels`

[property after initialization. To generate a reusable JSON file from your data, you should run the](/api/dependencyparser#label_data)`label_data`

[command. If no labels are provided, the](/api/cli#init-labels)`init labels`

`get_examples`

callback is used to extract the labels from the data, which may be a lot slower. Optional[Dict[str, Dict[str, int]]][DependencyParser.predict ](#predict)method

Apply the component’s model to a batch of [ Doc](/api/doc) objects, without
modifying them.

| Name | Description |
|---|---|
`docs` | The documents to predict. Iterable[
|

**RETURNS**[DependencyParser.set_annotations ](#set_annotations)method

Modify a batch of [ Doc](/api/doc) objects, using pre-computed scores.

| Name | Description |
|---|---|
`docs` | The documents to modify. Iterable[
|

`scores`

`DependencyParser.predict`

. Returns an internal helper class for the parse state. List[StateClass][DependencyParser.update ](#update)method

Learn from a batch of [ Example](/api/example) objects, updating the pipe’s
model. Delegates to

[and](/api/dependencyparser#predict)

`predict`

[.](/api/dependencyparser#get_loss)

`get_loss`

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |

[Example](/api/example)]

*keyword-only*`drop`

`sgd`

[if not set. Optional[](/api/dependencyparser#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]`losses`

**RETURNS**`losses`

dictionary. Dict[str, float][DependencyParser.get_loss ](#get_loss)method

Find the loss and gradient of loss for the batch of documents and their predicted scores.

| Name | Description |
|---|---|
`examples` | The batch of examples. Iterable[
|

`scores`

**RETURNS**`(loss, gradient)`

. Tuple[float, float][DependencyParser.create_optimizer ](#create_optimizer)method

Create an [ Optimizer](https://thinc.ai/docs/api-optimizers) for the pipeline
component.

| Name | Description |
|---|---|
RETURNS | The optimizer.
|

[DependencyParser.use_params ](#use_params)methodcontextmanager

Modify the pipe’s model, to use the given parameter values. At the end of the context, the original parameters are restored.

| Name | Description |
|---|---|
`params` | The parameter values to use in the model. dict |

[DependencyParser.add_label ](#add_label)method

Add a new label to the pipe. Note that you don’t have to call this method if you
provide a **representative data sample** to the [ initialize](/api/dependencyparser#initialize)
method. In this case, all labels found in the sample will be automatically added
to the model, and the output dimension will be

[inferred](/usage/layers-architectures#thinc-shape-inference)automatically.

| Name | Description |
|---|---|
`label` | The label to add. str |
RETURNS | `0` if the label is already present, otherwise `1` . int |

[DependencyParser.set_output ](#set_output)method

Change the output dimension of the component’s model by calling the model’s
attribute `resize_output`

. This is a function that takes the original model and
the new output dimension `nO`

, and changes the model in place. When resizing an
already trained model, care should be taken to avoid the “catastrophic
forgetting” problem.

| Name | Description |
|---|---|
`nO` | The new output dimension. int |

[DependencyParser.to_disk ](#to_disk)method

Serialize the pipe to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[DependencyParser.from_disk ](#from_disk)method

Load the pipe from disk. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`DependencyParser`

object. DependencyParser[DependencyParser.to_bytes ](#to_bytes)method

Serialize the pipe to a bytestring.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`DependencyParser`

object. bytes[DependencyParser.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`DependencyParser`

object. DependencyParser[DependencyParser.labels ](#labels)property

The labels currently added to the component.

| Name | Description |
|---|---|
RETURNS | The labels added to the component. Tuple[str, …] |

[DependencyParser.label_data ](#label_data)propertyv3.0

The labels currently added to the component and their internal meta information.
This is the data generated by [ init labels](/api/cli#init-labels) and used by

[to initialize the model with a pre-defined label set.](/api/dependencyparser#initialize)

`DependencyParser.initialize`

| Name | Description |
|---|---|
RETURNS | The label data added to the component. Dict[str, Dict[str, Dict[str, int]]] |

[Serialization fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

`cfg`

`model`

---

## Source: https://spacy.io/api/edittreelemmatizer

# EditTreeLemmatizer

A trainable component for assigning base forms to tokens. This lemmatizer uses
**edit trees** to transform tokens into base forms. The lemmatization model
predicts which edit tree is applicable to a token. The edit tree data structure
and construction method used by this lemmatizer were proposed in
[Joint Lemmatization and Morphological Tagging with Lemming](https://aclanthology.org/D15-1272.pdf)
(Thomas Müller et al., 2015).

For a lookup and rule-based lemmatizer, see [ Lemmatizer](/api/lemmatizer).

[Assigned Attributes ](#assigned-attributes)

Predictions are assigned to `Token.lemma`

.

| Location | Value |
|---|---|
`Token.lemma` | The lemma (hash). int |
`Token.lemma_` | The lemma. str |

[Config and implementation ](#config)

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[. See the](/usage/training#config)

`config.cfg`

for training[model architectures](/api/architectures)documentation for details on the architectures and their arguments and hyperparameters.

| Setting | Description |
|---|---|
`model` | A model instance that predicts the edit tree probabilities. The output vectors should match the number of edit trees in size, and be normalized as probabilities (all scores between 0 and 1, with the rows summing to `1` ). Defaults to
|
`backoff` |
`orth` . str |

`min_tree_freq`

`3`

. int`overwrite`

`False`

. bool`top_k`

`backoff`

. Defaults to `1`

. int`scorer`

[for the attribute](/api/scorer#score_token_attr)`Scorer.score_token_attr`

`"lemma"`

. Optional[Callable]`explosion/spaCy/master/spacy/pipeline/edit_tree_lemmatizer.py`


[EditTreeLemmatizer.__init__ ](#init)method

Create a new pipeline instance. In your application, you would normally use a
shortcut for this and instantiate the component using its string name and
[ nlp.add_pipe](/api/language#add_pipe).

| Name | Description |
|---|---|
`vocab` | The shared vocabulary.
|

`model`

`1`

). [Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]`name`

`losses`

during training. str*keyword-only*`backoff`

[Token](/api/token)attribute to use when no applicable edit tree is found. Defaults to`orth`

. str`min_tree_freq`

`3`

. int`overwrite`

`False`

. bool`top_k`

`backoff`

. Defaults to `1`

. int`scorer`

[for the attribute](/api/scorer#score_token_attr)`Scorer.score_token_attr`

`"lemma"`

. Optional[Callable][EditTreeLemmatizer.__call__ ](#call)method

Apply the pipe to one document. The document is modified in place, and returned.
This usually happens under the hood when the `nlp`

object is called on a text
and all pipeline components are applied to the `Doc`

in order. Both
[ __call__](/api/edittreelemmatizer#call) and

[delegate to the](/api/edittreelemmatizer#pipe)

`pipe`

[and](/api/edittreelemmatizer#predict)

`predict`

[methods.](/api/edittreelemmatizer#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`doc` | The document to process.
|

**RETURNS**[Doc](/api/doc)[EditTreeLemmatizer.pipe ](#pipe)method

Apply the pipe to a stream of documents. This usually happens under the hood
when the `nlp`

object is called on a text and all pipeline components are
applied to the `Doc`

in order. Both [ __call__](/api/edittreelemmatizer#call)
and

[delegate to the](/api/edittreelemmatizer#pipe)

`pipe`

[and](/api/edittreelemmatizer#predict)

`predict`

[methods.](/api/edittreelemmatizer#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`stream` | A stream of documents. Iterable[
|

*keyword-only*`batch_size`

`128`

. int**YIELDS**[Doc](/api/doc)[EditTreeLemmatizer.initialize ](#initialize)methodv3.0

Initialize the component for training. `get_examples`

should be a function that
returns an iterable of [ Example](/api/example) objects.

**At least one example should be supplied.**The data examples are used to

**initialize the model**of the component and can either be the full training data or a representative sample. Initialization includes validating the network,

[inferring missing shapes](https://thinc.ai/docs/usage-models#validation)and setting up the label scheme based on the data. This method is typically called by

[and lets you customize arguments it receives via the](/api/language#initialize)

`Language.initialize`

[block in the config.](/api/data-formats#config-initialize)

`[initialize.components]`

| Name | Description |
|---|---|
`get_examples` | Function that returns gold-standard annotations in the form of
`Example` |

`Example`

. Callable[[], Iterable[[Example](/api/example)]]

*keyword-only*`nlp`

`nlp`

object. Defaults to `None`

. Optional[[Language](/api/language)]`labels`

[property after initialization. To generate a reusable JSON file from your data, you should run the](/api/edittreelemmatizer#label_data)`label_data`

[command. If no labels are provided, the](/api/cli#init-labels)`init labels`

`get_examples`

callback is used to extract the labels from the data, which may be a lot slower. Optional[Iterable[str]][EditTreeLemmatizer.predict ](#predict)method

Apply the component’s model to a batch of [ Doc](/api/doc) objects, without
modifying them.

| Name | Description |
|---|---|
`docs` | The documents to predict. Iterable[
|

**RETURNS**[EditTreeLemmatizer.set_annotations ](#set_annotations)method

Modify a batch of [ Doc](/api/doc) objects, using pre-computed tree
identifiers.

| Name | Description |
|---|---|
`docs` | The documents to modify. Iterable[
|

`tree_ids`

`EditTreeLemmatizer.predict`

.[EditTreeLemmatizer.update ](#update)method

Learn from a batch of [ Example](/api/example) objects containing the
predictions and gold-standard annotations, and update the component’s model.
Delegates to

[and](/api/edittreelemmatizer#predict)

`predict`

[.](/api/edittreelemmatizer#get_loss)

`get_loss`

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |

[Example](/api/example)]

*keyword-only*`drop`

`sgd`

[if not set. Optional[](/api/edittreelemmatizer#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]`losses`

**RETURNS**`losses`

dictionary. Dict[str, float][EditTreeLemmatizer.get_loss ](#get_loss)method

Find the loss and gradient of loss for the batch of documents and their predicted scores.

| Name | Description |
|---|---|
`examples` | The batch of examples. Iterable[
|

`scores`

**RETURNS**`(loss, gradient)`

. Tuple[float, float][EditTreeLemmatizer.create_optimizer ](#create_optimizer)method

Create an optimizer for the pipeline component.

| Name | Description |
|---|---|
RETURNS | The optimizer.
|

[EditTreeLemmatizer.use_params ](#use_params)methodcontextmanager

Modify the pipe’s model, to use the given parameter values. At the end of the context, the original parameters are restored.

| Name | Description |
|---|---|
`params` | The parameter values to use in the model. dict |

[EditTreeLemmatizer.to_disk ](#to_disk)method

Serialize the pipe to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[EditTreeLemmatizer.from_disk ](#from_disk)method

Load the pipe from disk. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`EditTreeLemmatizer`

object. EditTreeLemmatizer[EditTreeLemmatizer.to_bytes ](#to_bytes)method

Serialize the pipe to a bytestring.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`EditTreeLemmatizer`

object. bytes[EditTreeLemmatizer.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`EditTreeLemmatizer`

object. EditTreeLemmatizer[EditTreeLemmatizer.labels ](#labels)property

The labels currently added to the component.

| Name | Description |
|---|---|
RETURNS | The labels added to the component. Tuple[str, …] |

[EditTreeLemmatizer.label_data ](#label_data)propertyv3.0

The labels currently added to the component and their internal meta information.
This is the data generated by [ init labels](/api/cli#init-labels) and used by

[to initialize the model with a pre-defined label set.](/api/edittreelemmatizer#initialize)

`EditTreeLemmatizer.initialize`

| Name | Description |
|---|---|
RETURNS | The label data added to the component. Tuple[str, …] |

[Serialization fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

`cfg`

`model`

`trees`

---

## Source: https://spacy.io/api/entitylinker

# EntityLinker

An `EntityLinker`

component disambiguates textual mentions (tagged as named
entities) to unique identifiers, grounding the named entities into the “real
world”. It requires a `KnowledgeBase`

, as well as a function to generate
plausible candidates from that `KnowledgeBase`

given a certain textual mention,
and a machine learning model to pick the right candidate, given the local
context of the mention. `EntityLinker`

defaults to using the
[ InMemoryLookupKB](/api/inmemorylookupkb) implementation.

[Assigned Attributes ](#assigned-attributes)

Predictions, in the form of knowledge base IDs, will be assigned to
`Token.ent_kb_id_`

.

| Location | Value |
|---|---|
`Token.ent_kb_id` | Knowledge base ID (hash). int |
`Token.ent_kb_id_` | Knowledge base ID. str |

[Config and implementation ](#config)

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[. See the](/usage/training#config)

`config.cfg`

for training[model architectures](/api/architectures)documentation for details on the architectures and their arguments and hyperparameters.

| Setting | Description |
|---|---|
`labels_discard` | NER labels that will automatically get a “NIL” prediction. Defaults to `[]` . Iterable[str] |
`n_sents` | The number of neighbouring sentences to take into account. Defaults to 0. int |
`incl_prior` | Whether or not to include prior probabilities from the KB in the model. Defaults to `True` . bool |
`incl_context` | Whether or not to include the local context in the model. Defaults to `True` . bool |
`model` | The
`Model` |

[EntityLinker](/api/architectures#EntityLinker).

[Model](https://thinc.ai/docs/api-model)

`entity_vector_length`

`64`

. int`use_gold_ents`

`True`

. If `False`

, entities must be set in the training data or by an annotating component in the pipeline. int`get_candidates`

`Span`

object. Defaults to [CandidateGenerator](/api/architectures#CandidateGenerator), a function looking up exact, case-dependent aliases in the KB. Callable[[[KnowledgeBase](/api/kb),[Span](/api/span)], Iterable[[Candidate](/api/kb#candidate)]]`get_candidates_batch`

v3.5`Span`

objects. Defaults to [CandidateBatchGenerator](/api/architectures#CandidateBatchGenerator), a function looking up exact, case-dependent aliases in the KB. Callable[[[KnowledgeBase](/api/kb), Iterable[[Span](/api/span)]], Iterable[Iterable[[Candidate](/api/kb#candidate)]]]`generate_empty_kb`

v3.5.1`KnowledgeBase`

object. Defaults to [, which generates an empty](/api/architectures#EmptyKB)`spacy.EmptyKB.v2`

[. Callable[[](/api/inmemorylookupkb)`InMemoryLookupKB`

[Vocab](/api/vocab), int],[KnowledgeBase](/api/kb)]`overwrite`

v3.2`True`

. bool`scorer`

v3.2[. Optional[Callable]](/api/scorer#score_links)`Scorer.score_links`

`threshold`

v3.4`None`

implies that all predictions are accepted, otherwise those with a score beneath the threshold are discarded. If there are no predictions with scores above the threshold, the linked entity is `NIL`

. Optional[float]`explosion/spaCy/master/spacy/pipeline/entity_linker.py`


[EntityLinker.__init__ ](#init)method

Create a new pipeline instance. In your application, you would normally use a
shortcut for this and instantiate the component using its string name and
[ nlp.add_pipe](/api/language#add_pipe).

Upon construction of the entity linker component, an empty knowledge base is
constructed with the provided `entity_vector_length`

. If you want to use a
custom knowledge base, you should either call
[ set_kb](/api/entitylinker#set_kb) or provide a

`kb_loader`

in the
[call.](/api/entitylinker#initialize)

`initialize`

| Name | Description |
|---|---|
`vocab` | The shared vocabulary.
|

`model`

[powering the pipeline component.](https://thinc.ai/docs/api-model)`Model`

[Model](https://thinc.ai/docs/api-model)`name`

`losses`

during training. str*keyword-only*`entity_vector_length`

`get_candidates`

`Span`

object. Callable[[[KnowledgeBase](/api/kb),[Span](/api/span)], Iterable[[Candidate](/api/kb#candidate)]]`labels_discard`

`"NIL"`

prediction. Iterable[str]`n_sents`

`incl_prior`

`incl_context`

`overwrite`

v3.2`True`

. bool`scorer`

v3.2[. Optional[Callable]](/api/scorer#score_links)`Scorer.score_links`

`threshold`

v3.4`None`

implies that all predictions are accepted, otherwise those with a score beneath the threshold are discarded. If there are no predictions with scores above the threshold, the linked entity is `NIL`

. Optional[float][EntityLinker.__call__ ](#call)method

Apply the pipe to one document. The document is modified in place and returned.
This usually happens under the hood when the `nlp`

object is called on a text
and all pipeline components are applied to the `Doc`

in order. Both
[ __call__](/api/entitylinker#call) and

[delegate to the](/api/entitylinker#pipe)

`pipe`

[and](/api/entitylinker#predict)

`predict`

[methods.](/api/entitylinker#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`doc` | The document to process.
|

**RETURNS**[Doc](/api/doc)[EntityLinker.pipe ](#pipe)method

Apply the pipe to a stream of documents. This usually happens under the hood
when the `nlp`

object is called on a text and all pipeline components are
applied to the `Doc`

in order. Both [ __call__](/api/entitylinker#call) and

[delegate to the](/api/entitylinker#pipe)

`pipe`

[and](/api/entitylinker#predict)

`predict`

[methods.](/api/entitylinker#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`stream` | A stream of documents. Iterable[
|

*keyword-only*`batch_size`

`128`

. int**YIELDS**[Doc](/api/doc)[EntityLinker.set_kb ](#set_kb)methodv3.0

The `kb_loader`

should be a function that takes a `Vocab`

instance and creates
the `KnowledgeBase`

, ensuring that the strings of the knowledge base are synced
with the current vocab.

| Name | Description |
|---|---|
`kb_loader` | Function that creates a
`KnowledgeBase` |

`Vocab`

instance. Callable[[[Vocab](/api/vocab)],

[KnowledgeBase](/api/kb)]

[EntityLinker.initialize ](#initialize)methodv3.0

Initialize the component for training. `get_examples`

should be a function that
returns an iterable of [ Example](/api/example) objects.

**At least one example should be supplied.**The data examples are used to

**initialize the model**of the component and can either be the full training data or a representative sample. Initialization includes validating the network,

[inferring missing shapes](https://thinc.ai/docs/usage-models#validation)and setting up the label scheme based on the data. This method is typically called by

[.](/api/language#initialize)

`Language.initialize`

Optionally, a `kb_loader`

argument may be specified to change the internal
knowledge base. This argument should be a function that takes a `Vocab`

instance
and creates the `KnowledgeBase`

, ensuring that the strings of the knowledge base
are synced with the current vocab.

| Name | Description |
|---|---|
`get_examples` | Function that returns gold-standard annotations in the form of
`Example` |

`Example`

. Callable[[], Iterable[[Example](/api/example)]]

*keyword-only*`nlp`

`nlp`

object. Defaults to `None`

. Optional[[Language](/api/language)]`kb_loader`

[from a](/api/kb)`KnowledgeBase`

`Vocab`

instance. Callable[[[Vocab](/api/vocab)],[KnowledgeBase](/api/kb)][EntityLinker.predict ](#predict)method

Apply the component’s model to a batch of [ Doc](/api/doc) objects, without
modifying them. Returns the KB IDs for each entity in each doc, including

`NIL`

if there is no prediction.| Name | Description |
|---|---|
`docs` | The documents to predict. Iterable[
|

**RETURNS**`docs`

. List[str][EntityLinker.set_annotations ](#set_annotations)method

Modify a batch of documents, using pre-computed entity IDs for a list of named entities.

| Name | Description |
|---|---|
`docs` | The documents to modify. Iterable[
|

`kb_ids`

`EntityLinker.predict`

. List[str][EntityLinker.update ](#update)method

Learn from a batch of [ Example](/api/example) objects, updating both the
pipe’s entity linking model and context encoder. Delegates to

[.](/api/entitylinker#predict)

`predict`

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |

[Example](/api/example)]

*keyword-only*`drop`

`sgd`

[if not set. Optional[](/api/entitylinker#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]`losses`

**RETURNS**`losses`

dictionary. Dict[str, float][EntityLinker.create_optimizer ](#create_optimizer)method

Create an optimizer for the pipeline component.

| Name | Description |
|---|---|
RETURNS | The optimizer.
|

[EntityLinker.use_params ](#use_params)methodcontextmanager

Modify the pipe’s model, to use the given parameter values. At the end of the context, the original parameters are restored.

| Name | Description |
|---|---|
`params` | The parameter values to use in the model. dict |

[EntityLinker.to_disk ](#to_disk)method

Serialize the pipe to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[EntityLinker.from_disk ](#from_disk)method

Load the pipe from disk. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`EntityLinker`

object. EntityLinker[EntityLinker.to_bytes ](#to_bytes)method

Serialize the pipe to a bytestring, including the `KnowledgeBase`

.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`EntityLinker`

object. bytes[EntityLinker.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`EntityLinker`

object. EntityLinker[Serialization fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

`cfg`

`model`

`kb`

---

## Source: https://spacy.io/api/entityrecognizer

# EntityRecognizer

A transition-based named entity recognition component. The entity recognizer
identifies **non-overlapping labelled spans** of tokens. The transition-based
algorithm used encodes certain assumptions that are effective for “traditional”
named entity recognition tasks, but may not be a good fit for every span
identification problem. Specifically, the loss function optimizes for **whole
entity accuracy**, so if your inter-annotator agreement on boundary tokens is
low, the component will likely perform poorly on your problem. The
transition-based algorithm also assumes that the most decisive information about
your entities will be close to their initial tokens. If your entities are long
and characterized by tokens in their middle, the component will likely not be a
good fit for your task.

[Assigned Attributes ](#assigned-attributes)

Predictions will be saved to `Doc.ents`

as a tuple. Each label will also be
reflected to each underlying token, where it is saved in the `Token.ent_type`

and `Token.ent_iob`

fields. Note that by definition each token can only have one
label.

When setting `Doc.ents`

to create training data, all the spans must be valid and
non-overlapping, or an error will be thrown.

| Location | Value |
|---|---|
`Doc.ents` | The annotated spans. Tuple[
|

`Token.ent_iob`

`Token.ent_iob_`

`Token.ent_type`

`Token.ent_type_`

[Config and implementation ](#config)

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[. See the](/usage/training#config)

`config.cfg`

for training[model architectures](/api/architectures)documentation for details on the architectures and their arguments and hyperparameters.

| Setting | Description |
|---|---|
`moves` | A list of transition names. Inferred from the data if not provided. Defaults to `None` . Optional[TransitionSystem] |
`update_with_oracle_cut_size` | During training, cut long sequences into shorter segments by creating intermediate states based on the gold-standard history. The model is not very sensitive to this parameter, so you usually won’t need to change it. Defaults to `100` . int |
`model` | The
`Model` |

[TransitionBasedParser](/api/architectures#TransitionBasedParser).

[Model](https://thinc.ai/docs/api-model)[List[

[Doc](/api/doc)], List[

[Floats2d](https://thinc.ai/docs/api-types#types)]]

`incorrect_spans_key`

`SpanGroup`

in `doc.spans`

that specifies incorrect spans. The NER will learn not to predict (exactly) those spans. Defaults to `None`

. Optional[str]`scorer`

[. Optional[Callable]](/api/scorer#get_ner_prf)`spacy.scorer.get_ner_prf`

`explosion/spaCy/master/spacy/pipeline/ner.pyx`


[EntityRecognizer.__init__ ](#init)method

Create a new pipeline instance. In your application, you would normally use a
shortcut for this and instantiate the component using its string name and
[ nlp.add_pipe](/api/language#add_pipe).

| Name | Description |
|---|---|
`vocab` | The shared vocabulary.
|

`model`

[powering the pipeline component.](https://thinc.ai/docs/api-model)`Model`

[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]`name`

`losses`

during training. str`moves`

`None`

, which is the default. Optional[TransitionSystem]*keyword-only*`update_with_oracle_cut_size`

`100`

. int`incorrect_spans_key`

[, under this key. Defaults to](/api/doc#spans)`Doc.spans`

`None`

. Optional[str][EntityRecognizer.__call__ ](#call)method

Apply the pipe to one document. The document is modified in place and returned.
This usually happens under the hood when the `nlp`

object is called on a text
and all pipeline components are applied to the `Doc`

in order. Both
[ __call__](/api/entityrecognizer#call) and

[delegate to the](/api/entityrecognizer#pipe)

`pipe`

[and](/api/entityrecognizer#predict)

`predict`

[methods.](/api/entityrecognizer#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`doc` | The document to process.
|

**RETURNS**[Doc](/api/doc)[EntityRecognizer.pipe ](#pipe)method

Apply the pipe to a stream of documents. This usually happens under the hood
when the `nlp`

object is called on a text and all pipeline components are
applied to the `Doc`

in order. Both [ __call__](/api/entityrecognizer#call) and

[delegate to the](/api/entityrecognizer#pipe)

`pipe`

[and](/api/entityrecognizer#predict)

`predict`

[methods.](/api/entityrecognizer#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`docs` | A stream of documents. Iterable[
|

*keyword-only*`batch_size`

`128`

. int**YIELDS**[Doc](/api/doc)[EntityRecognizer.initialize ](#initialize)methodv3.0

Initialize the component for training. `get_examples`

should be a function that
returns an iterable of [ Example](/api/example) objects.

**At least one example should be supplied.**The data examples are used to

**initialize the model**of the component and can either be the full training data or a representative sample. Initialization includes validating the network,

[inferring missing shapes](https://thinc.ai/docs/usage-models#validation)and setting up the label scheme based on the data. This method is typically called by

[and lets you customize arguments it receives via the](/api/language#initialize)

`Language.initialize`

[block in the config.](/api/data-formats#config-initialize)

`[initialize.components]`

| Name | Description |
|---|---|
`get_examples` | Function that returns gold-standard annotations in the form of
`Example` |

`Example`

. Callable[[], Iterable[[Example](/api/example)]]

*keyword-only*`nlp`

`nlp`

object. Defaults to `None`

. Optional[[Language](/api/language)]`labels`

[property after initialization. To generate a reusable JSON file from your data, you should run the](/api/entityrecognizer#label_data)`label_data`

[command. If no labels are provided, the](/api/cli#init-labels)`init labels`

`get_examples`

callback is used to extract the labels from the data, which may be a lot slower. Optional[Dict[str, Dict[str, int]]][EntityRecognizer.predict ](#predict)method

Apply the component’s model to a batch of [ Doc](/api/doc) objects, without
modifying them.

| Name | Description |
|---|---|
`docs` | The documents to predict. Iterable[
|

**RETURNS**[EntityRecognizer.set_annotations ](#set_annotations)method

Modify a batch of [ Doc](/api/doc) objects, using pre-computed scores.

| Name | Description |
|---|---|
`docs` | The documents to modify. Iterable[
|

`scores`

`EntityRecognizer.predict`

. Returns an internal helper class for the parse state. List[StateClass][EntityRecognizer.update ](#update)method

Learn from a batch of [ Example](/api/example) objects, updating the pipe’s
model. Delegates to

[and](/api/entityrecognizer#predict)

`predict`

[.](/api/entityrecognizer#get_loss)

`get_loss`

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |

[Example](/api/example)]

*keyword-only*`drop`

`sgd`

[if not set. Optional[](/api/entityrecognizer#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]`losses`

**RETURNS**`losses`

dictionary. Dict[str, float][EntityRecognizer.get_loss ](#get_loss)method

Find the loss and gradient of loss for the batch of documents and their predicted scores.

| Name | Description |
|---|---|
`examples` | The batch of examples. Iterable[
|

`scores`

**RETURNS**`(loss, gradient)`

. Tuple[float, float][EntityRecognizer.create_optimizer ](#create_optimizer)method

Create an optimizer for the pipeline component.

| Name | Description |
|---|---|
RETURNS | The optimizer.
|

[EntityRecognizer.use_params ](#use_params)methodcontextmanager

Modify the pipe’s model, to use the given parameter values. At the end of the context, the original parameters are restored.

| Name | Description |
|---|---|
`params` | The parameter values to use in the model. dict |

[EntityRecognizer.add_label ](#add_label)method

Add a new label to the pipe. Note that you don’t have to call this method if you
provide a **representative data sample** to the [ initialize](/api/entityrecognizer#initialize)
method. In this case, all labels found in the sample will be automatically added
to the model, and the output dimension will be

[inferred](/usage/layers-architectures#thinc-shape-inference)automatically.

| Name | Description |
|---|---|
`label` | The label to add. str |
RETURNS | `0` if the label is already present, otherwise `1` . int |

[EntityRecognizer.set_output ](#set_output)method

Change the output dimension of the component’s model by calling the model’s
attribute `resize_output`

. This is a function that takes the original model and
the new output dimension `nO`

, and changes the model in place. When resizing an
already trained model, care should be taken to avoid the “catastrophic
forgetting” problem.

| Name | Description |
|---|---|
`nO` | The new output dimension. int |

[EntityRecognizer.to_disk ](#to_disk)method

Serialize the pipe to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[EntityRecognizer.from_disk ](#from_disk)method

Load the pipe from disk. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`EntityRecognizer`

object. EntityRecognizer[EntityRecognizer.to_bytes ](#to_bytes)method

Serialize the pipe to a bytestring.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`EntityRecognizer`

object. bytes[EntityRecognizer.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`EntityRecognizer`

object. EntityRecognizer[EntityRecognizer.labels ](#labels)property

The labels currently added to the component.

| Name | Description |
|---|---|
RETURNS | The labels added to the component. Tuple[str, …] |

[EntityRecognizer.label_data ](#label_data)propertyv3.0

The labels currently added to the component and their internal meta information.
This is the data generated by [ init labels](/api/cli#init-labels) and used by

[to initialize the model with a pre-defined label set.](/api/entityrecognizer#initialize)

`EntityRecognizer.initialize`

| Name | Description |
|---|---|
RETURNS | The label data added to the component. Dict[str, Dict[str, Dict[str, int]]] |

[Serialization fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

`cfg`

`model`

---

## Source: https://spacy.io/api/entityruler

# EntityRuler

The entity ruler lets you add spans to the [ Doc.ents](/api/doc#ents) using
token-based rules or exact phrase matches. It can be combined with the
statistical

[to boost accuracy, or used on its own to implement a purely rule-based entity recognition system. For usage examples, see the docs on](/api/entityrecognizer)

`EntityRecognizer`

[rule-based entity recognition](/usage/rule-based-matching#entityruler).

[Assigned Attributes ](#assigned-attributes)

This component assigns predictions basically the same way as the
[ EntityRecognizer](/api/entityrecognizer).

Predictions can be accessed under `Doc.ents`

as a tuple. Each label will also be
reflected in each underlying token, where it is saved in the `Token.ent_type`

and `Token.ent_iob`

fields. Note that by definition each token can only have one
label.

When setting `Doc.ents`

to create training data, all the spans must be valid and
non-overlapping, or an error will be thrown.

| Location | Value |
|---|---|
`Doc.ents` | The annotated spans. Tuple[
|

`Token.ent_iob`

`Token.ent_iob_`

`Token.ent_type`

`Token.ent_type_`

[Config and implementation ](#config)

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[.](/usage/training#config)

`config.cfg`

for training| Setting | Description |
|---|---|
`phrase_matcher_attr` | Optional attribute name match on for the internal
`PhraseMatcher` |

`LOWER`

to match on the lowercase token text. Defaults to `None`

. Optional[Union[int, str]]`matcher_fuzzy_compare`

v3.5`Matcher`

. Defaults to `spacy.matcher.levenshtein.levenshtein_compare`

. Callable`validate`

`Matcher`

and `PhraseMatcher`

). Defaults to `False`

. bool`overwrite_ents`

`False`

. bool`ent_id_sep`

`"||"`

. str`scorer`

[. Optional[Callable]](/api/scorer#get_ner_prf)`spacy.scorer.get_ner_prf`

`explosion/spaCy/master/spacy/pipeline/entityruler.py`


[EntityRuler.__init__ ](#init)method

Initialize the entity ruler. If patterns are supplied here, they need to be a
list of dictionaries with a `"label"`

and `"pattern"`

key. A pattern can either
be a token pattern (list) or a phrase pattern (string). For example:
`{"label": "ORG", "pattern": "Apple"}`

.

| Name | Description |
|---|---|
`nlp` | The shared nlp object to pass the vocab to the matchers and process phrase patterns.
|

`name`

v3.0*keyword-only*`phrase_matcher_attr`

[, e.g.](/api/phrasematcher)`PhraseMatcher`

`LOWER`

to match on the lowercase token text. Defaults to `None`

. Optional[Union[int, str]]`matcher_fuzzy_compare`

v3.5`Matcher`

. Defaults to `spacy.matcher.levenshtein.levenshtein_compare`

. Callable`validate`

`validate`

. Defaults to `False`

. bool`overwrite_ents`

`False`

. bool`ent_id_sep`

`"||"`

. str`patterns`

`scorer`

[. Optional[Callable]](/api/scorer#get_ner_prf)`spacy.scorer.get_ner_prf`

[EntityRuler.initialize ](#initialize)methodv3.0

Initialize the component with data and used before training to load in rules
from a [pattern file](/usage/rule-based-matching#entityruler-files). This
method is typically called by [ Language.initialize](/api/language#initialize)
and lets you customize arguments it receives via the

[block in the config.](/api/data-formats#config-initialize)

`[initialize.components]`

| Name | Description |
|---|---|
`get_examples` | Function that returns gold-standard annotations in the form of
`Example` |

`EntityRuler`

. Callable[[], Iterable[[Example](/api/example)]]

*keyword-only*`nlp`

`nlp`

object. Defaults to `None`

. Optional[[Language](/api/language)]`patterns`

`None`

. Optional[Sequence[Dict[str, Union[str, List[Dict[str, Any]]]]]][EntityRuler.__len__ ](#len)method

The number of all patterns added to the entity ruler.

| Name | Description |
|---|---|
RETURNS | The number of patterns. int |

[EntityRuler.__contains__ ](#contains)method

Whether a label is present in the patterns.

| Name | Description |
|---|---|
`label` | The label to check. str |
RETURNS | Whether the entity ruler contains the label. bool |

[EntityRuler.__call__ ](#call)method

Find matches in the `Doc`

and add them to the `doc.ents`

. Typically, this
happens automatically after the component has been added to the pipeline using
[ nlp.add_pipe](/api/language#add_pipe). If the entity ruler was initialized
with

`overwrite_ents=True`

, existing entities will be replaced if they overlap
with the matches. When matches overlap in a Doc, the entity ruler prioritizes
longer patterns over shorter, and if equal the match occurring first in the Doc
is chosen.| Name | Description |
|---|---|
`doc` | The `Doc` object to process, e.g. the `Doc` in the pipeline.
|
RETURNS | The modified `Doc` with added entities, if available.
|

[EntityRuler.add_patterns ](#add_patterns)method

Add patterns to the entity ruler. A pattern can either be a token pattern (list
of dicts) or a phrase pattern (string). For more details, see the usage guide on
[rule-based matching](/usage/rule-based-matching).

| Name | Description |
|---|---|
`patterns` | The patterns to add. List[Dict[str, Union[str, List[dict]]]] |

[EntityRuler.remove ](#remove)methodv3.2.1

Remove a pattern by its ID from the entity ruler. A `ValueError`

is raised if
the ID does not exist.

| Name | Description |
|---|---|
`id` | The ID of the pattern rule. str |

[EntityRuler.to_disk ](#to_disk)method

Save the entity ruler patterns to a directory. The patterns will be saved as
newline-delimited JSON (JSONL). If a file with the suffix `.jsonl`

is provided,
only the patterns are saved as JSONL. If a directory name is provided, a
`patterns.jsonl`

and `cfg`

file with the component configuration is exported.

| Name | Description |
|---|---|
`path` | A path to a JSONL file or directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|

[EntityRuler.from_disk ](#from_disk)method

Load the entity ruler from a path. Expects either a file containing
newline-delimited JSON (JSONL) with one entry per line, or a directory
containing a `patterns.jsonl`

file and a `cfg`

file with the component
configuration.

| Name | Description |
|---|---|
`path` | A path to a JSONL file or directory. Paths may be either strings or `Path` -like objects. Union[str,
|
RETURNS | The modified `EntityRuler` object. EntityRuler |

[EntityRuler.to_bytes ](#to_bytes)method

Serialize the entity ruler patterns to a bytestring.

| Name | Description |
|---|---|
RETURNS | The serialized patterns. bytes |

[EntityRuler.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The bytestring to load. bytes |
RETURNS | The modified `EntityRuler` object. EntityRuler |

[EntityRuler.labels ](#labels)property

All labels present in the match patterns.

| Name | Description |
|---|---|
RETURNS | The string labels. Tuple[str, …] |

[EntityRuler.ent_ids ](#ent_ids)property

All entity IDs present in the `id`

properties of the match patterns.

| Name | Description |
|---|---|
RETURNS | The string IDs. Tuple[str, …] |

[EntityRuler.patterns ](#patterns)property

Get all patterns that were added to the entity ruler.

| Name | Description |
|---|---|
RETURNS | The original patterns, one dictionary per pattern. List[Dict[str, Union[str, dict]]] |

[Attributes ](#attributes)

| Name | Description |
|---|---|
`matcher` | The underlying matcher used to process token patterns.
|

`phrase_matcher`

[PhraseMatcher](/api/phrasematcher)`token_patterns`

`phrase_patterns`

---

## Source: https://spacy.io/api/large-language-models

# Large Language Models

[The spacy-llm package](https://github.com/explosion/spacy-llm) integrates
Large Language Models (LLMs) into spaCy, featuring a modular system for

**fast prototyping**and

**prompting**, and turning unstructured responses into

**robust outputs**for various NLP tasks,

**no training data**required.

[Config and implementation ](#config)

An LLM component is implemented through the `LLMWrapper`

class. It is accessible
through a generic `llm`

[component factory](https://spacy.io/usage/processing-pipelines#custom-components-factories)
as well as through task-specific component factories: `llm_ner`

, `llm_spancat`

,
`llm_rel`

, `llm_textcat`

, `llm_sentiment`

, `llm_summarization`

,
`llm_entity_linker`

, `llm_raw`

and `llm_translation`

. For these factories, the
GPT-3-5 model from OpenAI is used by default, but this can be customized.

[LLMWrapper.__init__ ](#init)method

Create a new pipeline instance. In your application, you would normally use a
shortcut for this and instantiate the component using its string name and
[ nlp.add_pipe](/api/language#add_pipe).

| Name | Description |
|---|---|
`name` | String name of the component instance. `llm` by default. str |
keyword-only | |
`vocab` | The shared vocabulary.
|

`task`

[LLM Task](/api/large-language-models#tasks)can generate prompts and parse LLM responses. LLMTask`model`

[LLM Model](/api/large-language-models#models)queries a specific LLM API.. Callable[[Iterable[Any]], Iterable[Any]]`cache`

[Cache](/api/large-language-models#cache)to use for caching prompts and responses per doc. Cache`save_io`

`Doc._.llm_io`

custom attribute. bool[LLMWrapper.__call__ ](#call)method

Apply the pipe to one document. The document is modified in place and returned.
This usually happens under the hood when the `nlp`

object is called on a text
and all pipeline components are applied to the `Doc`

in order.

| Name | Description |
|---|---|
`doc` | The document to process.
|

**RETURNS**[Doc](/api/doc)[LLMWrapper.pipe ](#pipe)method

Apply the pipe to a stream of documents. This usually happens under the hood
when the `nlp`

object is called on a text and all pipeline components are
applied to the `Doc`

in order.

| Name | Description |
|---|---|
`docs` | A stream of documents. Iterable[
|

*keyword-only*`batch_size`

`128`

. int**YIELDS**[Doc](/api/doc)[LLMWrapper.add_label ](#add_label)method

Add a new label to the pipe’s task. Alternatively, provide the labels upon the
[task](/api/large-language-models#task) definition, or through the `[initialize]`

block of the
[config](/api/large-language-models#config).

| Name | Description |
|---|---|
`label` | The label to add. str |
RETURNS | `0` if the label is already present, otherwise `1` . int |

[LLMWrapper.to_disk ](#to_disk)method

Serialize the pipe to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[LLMWrapper.from_disk ](#from_disk)method

Load the pipe from disk. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`LLMWrapper`

object. LLMWrapper[LLMWrapper.to_bytes ](#to_bytes)method

Serialize the pipe to a bytestring.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`LLMWrapper`

object. bytes[LLMWrapper.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`LLMWrapper`

object. LLMWrapper[LLMWrapper.labels ](#labels)property

The labels currently added to the component. Empty tuple if the LLM’s task does not require labels.

| Name | Description |
|---|---|
RETURNS | The labels added to the component. Tuple[str, …] |

[Tasks ](#tasks)

In `spacy-llm`

, a *task* defines an NLP problem or question and its solution
using an LLM. It does so by implementing the following responsibilities:

- Loading a prompt template and injecting documents’ data into the prompt. Optionally, include fewshot examples in the prompt.
- Splitting the prompt into several pieces following a map-reduce paradigm,
*if*the prompt is too long to fit into the model’s context and the task supports sharding prompts. - Parsing the LLM’s responses back into structured information and validating the parsed output.

Two different task interfaces are supported: `ShardingLLMTask`

and
`NonShardingLLMTask`

. Only the former supports the sharding of documents, i. e.
splitting up prompts if they are too long.

All tasks are registered in the `llm_tasks`

registry.

[On Sharding ](#task-sharding)

“Sharding” describes, generally speaking, the process of distributing parts of a
dataset across multiple storage units for easier processing and lookups. In
`spacy-llm`

we use this term (synonymously: “mapping”) to describe the splitting
up of prompts if they are too long for a model to handle, and “fusing”
(synonymously: “reducing”) to describe how the model responses for several
shards are merged back together into a single document.

Prompts are broken up in a manner that *always* keeps the prompt in the template
intact, meaning that the instructions to the LLM will always stay complete. The
document content however will be split, if the length of the fully rendered
prompt exceeds a model context length.

A toy example: let’s assume a model has a context window of 25 tokens and the prompt template for our fictional, sharding-supporting task looks like this:



Depending on how tokens are counted exactly (this is a config setting), we might
come up with `n = 12`

tokens for the number of tokens in the prompt
instructions. Furthermore let’s assume that our `text`

is “This has been
amazing - I can’t remember the last time I left the cinema so impressed.” -
which has roughly 19 tokens.

Considering we only have 13 tokens to add to our prompt before we hit the
context limit, we’ll have to split our prompt into two parts. Thus `spacy-llm`

,
assuming the task used supports sharding, will split the prompt into two (the
default splitting strategy splits by tokens, but alternative splitting
strategies splitting e. g. by sentences can be configured):

*(Prompt 1/2)*



*(Prompt 2/2)*



The reduction step is task-specific - a sentiment estimation task might e. g. do a weighted average of the sentiment scores. Note that prompt sharding introduces potential inaccuracies, as the LLM won’t have access to the entire document at once. Depending on your use case this might or might not be problematic.

`NonShardingLLMTask`


`NonShardingLLMTask`

[task.generate_prompts ](#task-nonsharding-generate-prompts)

Takes a collection of documents, and returns a collection of “prompts”, which
can be of type `Any`

. Often, prompts are of type `str`

- but this is not
enforced to allow for maximum flexibility in the framework.

| Argument | Description |
|---|---|
`docs` | The input documents. Iterable[
|

**RETURNS**[task.parse_responses ](#task-non-sharding-parse-responses)

Takes a collection of LLM responses and the original documents, parses the
responses into structured information, and sets the annotations on the
documents. The `parse_responses`

function is free to set the annotations in any
way, including `Doc`

fields like `ents`

, `spans`

or `cats`

, or using custom
defined fields.

The `responses`

are of type `Iterable[Any]`

, though they will often be `str`

objects. This depends on the return type of the [model](/api/large-language-models#models).

| Argument | Description |
|---|---|
`docs` | The input documents. Iterable[
|

`responses`

**RETURNS**[Doc](/api/doc)]`ShardingLLMTask`


`ShardingLLMTask`

[task.generate_prompts ](#task-sharding-generate-prompts)

Takes a collection of documents, breaks them up into shards if necessary to fit
all content into the model’s context, and returns a collection of collections of
“prompts” (i. e. each doc can have multiple shards, each of which have exactly
one prompt), which can be of type `Any`

. Often, prompts are of type `str`

- but
this is not enforced to allow for maximum flexibility in the framework.

| Argument | Description |
|---|---|
`docs` | The input documents. Iterable[
|

**RETURNS**[task.parse_responses ](#task-sharding-parse-responses)

Receives a collection of collections of LLM responses (i. e. each doc can have
multiple shards, each of which have exactly one prompt / prompt response) and
the original shards, parses the responses into structured information, sets the
annotations on the shards, and merges back doc shards into single docs. The
`parse_responses`

function is free to set the annotations in any way, including
`Doc`

fields like `ents`

, `spans`

or `cats`

, or using custom defined fields.

The `responses`

are of type `Iterable[Iterable[Any]]`

, though they will often be
`str`

objects. This depends on the return type of the [model](/api/large-language-models#models).

| Argument | Description |
|---|---|
`shards` | The input document shards. Iterable[Iterable[
|

`responses`

**RETURNS**[Doc](/api/doc)][Translation ](#translation)

The translation task translates texts from a defined or inferred source to a defined target language.

[spacy.Translation.v1 ](#translation-v1)

`spacy.Translation.v1`

supports both zero-shot and few-shot prompting.

| Argument | Description |
|---|---|
`template` | Custom prompt template to send to LLM model. Defaults to
|

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

(NEW)`prompt_example_type`

(NEW)`TranslationExample`

. Optional[Type[FewshotExample]]`source_lang`

`target_lang`

`field`

`doc._.{field}`

). Defaults to `translation`

. strTo perform [few-shot learning](/usage/large-language-models#few-shot-prompts),
you can write down a few examples in a separate file, and provide these to be
injected into the prompt to the LLM. The default reader `spacy.FewShotReader.v1`

supports `.yml`

, `.yaml`

, `.json`

and `.jsonl`

.





[Raw prompting ](#raw)

Different to all other tasks `spacy.Raw.vX`

doesn’t provide a specific prompt,
wrapping doc data, to the model. Instead it instructs the model to reply to the
doc content. This is handy for use cases like question answering (where each doc
contains one question) or if you want to include customized prompts for each
doc.

[spacy.Raw.v1 ](#raw-v1)

Note that since this task may request arbitrary information, it doesn’t do any
parsing per se - the model response is stored in a custom `Doc`

attribute (i. e.
can be accessed via `doc._.{field}`

).

It supports both zero-shot and few-shot prompting.

| Argument | Description |
|---|---|
`template` | Custom prompt template to send to LLM model. Defaults to
|

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

`prompt_example_type`

`RawExample`

. Optional[Type[FewshotExample]]`field`

`doc._.{field}`

). Defaults to `reply`

. strTo perform [few-shot learning](/usage/large-language-models#few-shot-prompts),
you can write down a few examples in a separate file, and provide these to be
injected into the prompt to the LLM. The default reader `spacy.FewShotReader.v1`

supports `.yml`

, `.yaml`

, `.json`

and `.jsonl`

.





[Summarization ](#summarization)

A summarization task takes a document as input and generates a summary that is stored in an extension attribute.

[spacy.Summarization.v1 ](#summarization-v1)

The `spacy.Summarization.v1`

task supports both zero-shot and few-shot
prompting.

| Argument | Description |
|---|---|
`template` | Custom prompt template to send to LLM model. Defaults to
|

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

(NEW)`prompt_example_type`

(NEW)`SummarizationExample`

. Optional[Type[FewshotExample]]`max_n_words`

`None`

. Optional[int]`field`

`doc._.{field}`

). Defaults to `summary`

. strThe summarization task prompts the model for a concise summary of the provided
text. It optionally allows to limit the response to a certain number of tokens -
note that this requirement will be included in the prompt, but the task doesn’t
perform a hard cut-off. It’s hence possible that your summary exceeds
`max_n_words`

.

To perform [few-shot learning](/usage/large-language-models#few-shot-prompts),
you can write down a few examples in a separate file, and provide these to be
injected into the prompt to the LLM. The default reader `spacy.FewShotReader.v1`

supports `.yml`

, `.yaml`

, `.json`

and `.jsonl`

.





[EL (Entity Linking) ](#nel)

The EL links recognized entities (see [NER](/api/large-language-models#ner)) to those in a knowledge base
(KB). The EL task prompts the LLM to select the most likely candidate from the
KB, whose structure can be arbitrary.

Note that the documents processed by the entity linking task are expected to
have recognized entities in their `.ents`

attribute. This can be achieved by
either running the [NER task](/api/large-language-models#ner), using a trained spaCy NER model or setting
the entities manually prior to running the EL task.

In order to be able to pull data from the KB, an object implementing the
`CandidateSelector`

protocol has to be provided. This requires two functions:
(1) `__call__()`

to fetch candidate entities for entity mentions in the text
(assumed to be available in `Doc.ents`

) and (2) `get_entity_description()`

to
fetch descriptions for any given entity ID. Descriptions can be empty, but
ideally provide more context for entities stored in the KB.

`spacy-llm`

provides a `CandidateSelector`

implementation
(`spacy.CandidateSelector.v1`

) that leverages a spaCy knowledge base - as used
in an `entity_linking`

component - to select candidates. This knowledge base can
be loaded from an existing spaCy pipeline (note that the pipeline’s EL component
doesn’t have to be trained) or from a separate .yaml file.

[spacy.EntityLinker.v1 ](#el-v1)

Supports zero- and few-shot prompting. Relies on a configurable component suggesting viable entities before letting the LLM pick the most likely candidate.

| Argument | Description |
|---|---|
`template` | Custom prompt template to send to LLM model. Defaults to
|

`parse_responses`

`prompt_example_type`

`ELExample`

. Optional[Type[FewshotExample]]`examples`

`None`

is passed, zero-shot learning will be used. Defaults to `None`

. ExamplesConfigType`scorer`

[Scorer](/api/scorer)][spacy.CandidateSelector.v1 ](#candidate-selector-v1)

`spacy.CandidateSelector.v1`

is an implementation of the `CandidateSelector`

protocol required by [ spacy.EntityLinker.v1](/api/large-language-models#el-v1). The built-in candidate
selector method allows loading existing knowledge bases in several ways, e. g.
loading from a spaCy pipeline with a (not necessarily trained) entity linking
component, and loading from a file describing the knowlege base as a .yaml file.
Either way the loaded data will be converted to a spaCy

`InMemoryLookupKB`

instance. The KB’s selection capabilities are used to select the most likely
entity candidates for the specified mentions.| Argument | Description |
|---|---|
`kb_loader` | KB loader object. InMemoryLookupKBLoader |
`top_n` | Top-n candidates to include in the prompt. Defaults to 5. int |

[spacy.KBObjectLoader.v1 ](#kb-object-loader-v1)

Adheres to the `InMemoryLookupKBLoader`

interface required by
[ spacy.CandidateSelector.v1](/api/large-language-models#candidate-selector-v1). Loads a knowledge base
from an existing spaCy pipeline.

| Argument | Description |
|---|---|
`path` | Path to KB file. Union[str,
|

`nlp_path`

[Path](https://docs.python.org/3/library/pathlib.html), str]]`desc_path`

`ent_desc_reader`

[spacy.KBFileLoader.v1 ](#kb-file-loader-v1)

Adheres to the `InMemoryLookupKBLoader`

interface required by
[ spacy.CandidateSelector.v1](/api/large-language-models#candidate-selector-v1). Loads a knowledge base
from a knowledge base file. The KB .yaml file has to stick to the following
format:



See
[here](https://github.com/explosion/spacy-llm/blob/main/usage_examples/el_openai/el_kb_data.yml)
for a toy example of how such a KB file might look like.

| Argument | Description |
|---|---|
`path` | Path to KB file. Union[str,
|

[NER ](#ner)

The NER task identifies non-overlapping entities in text.

[spacy.NER.v3 ](#ner-v3)

Version 3 is fundamentally different to v1 and v2, as it implements
Chain-of-Thought prompting, based on the
[PromptNER paper](https://arxiv.org/pdf/2305.15444.pdf) by Ashok and Lipton
(2023). On an internal use-case, we have found this implementation to obtain
significant better accuracy - with an increase of F-score of up to 15 percentage
points.

When no examples are [specified](/usage/large-language-models#few-shot-prompts),
the v3 implementation will use a dummy example in the prompt. Technically this
means that the task will always perform few-shot prompting under the hood.

| Argument | Description |
|---|---|
`template` | Custom prompt template to send to LLM model. Defaults to
|

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

(NEW)`prompt_example_type`

(NEW)`NERExample`

. Optional[Type[FewshotExample]]`scorer`

[Scorer](/api/scorer)]`labels`

`label_definitions`

`None`

. Optional[Dict[str, str]]`description`

(NEW)`normalizer`

`None`

, defaults to `spacy.LowercaseNormalizer.v1`

. Defaults to `None`

. Optional[Callable[[str], str]]`alignment_mode`

`"strict"`

, `"contract"`

or `"expand"`

. Defaults to `"contract"`

. str`case_sensitive_matching`

`False`

. boolNote that the `single_match`

parameter, used in v1 and v2, is not supported
anymore, as the CoT parsing algorithm takes care of this automatically.

New to v3 is the fact that you can provide an explicit description of what
entities should look like. You can use this feature in addition to
`label_definitions`

.



To perform [few-shot learning](/usage/large-language-models#few-shot-prompts),
you can write down a few examples in a separate file, and provide these to be
injected into the prompt to the LLM. The default reader `spacy.FewShotReader.v1`

supports `.yml`

, `.yaml`

, `.json`

and `.jsonl`

.

While not required, this task works best when both positive and negative
examples are provided. The format is different than the files required for v1
and v2, as additional fields such as `is_entity`

and `reason`

should now be
provided.





For a fully working example, see this
[usage example](https://github.com/explosion/spacy-llm/tree/main/usage_examples/ner_v3_openai).

[spacy.NER.v2 ](#ner-v2)

This version supports explicitly defining the provided labels with custom descriptions, and further supports zero-shot and few-shot prompting just like v1.

| Argument | Description |
|---|---|
`template` (NEW) | Custom prompt template to send to LLM model. Defaults to
|

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

(NEW)`prompt_example_type`

(NEW)`NERExample`

. Optional[Type[FewshotExample]]`scorer`

(NEW)[Scorer](/api/scorer)]`labels`

`label_definitions`

(NEW)`None`

. Optional[Dict[str, str]]`normalizer`

`None`

, defaults to `spacy.LowercaseNormalizer.v1`

. Defaults to `None`

. Optional[Callable[[str], str]]`alignment_mode`

`"strict"`

, `"contract"`

or `"expand"`

. Defaults to `"contract"`

. str`case_sensitive_matching`

`False`

. bool`single_match`

`False`

. boolThe parameters `alignment_mode`

, `case_sensitive_matching`

and `single_match`

are identical to the [v1](/api/large-language-models#ner-v1) implementation. The format of few-shot
examples are also the same.

New to v2 is the fact that you can write definitions for each label and provide
them via the `label_definitions`

argument. This lets you tell the LLM exactly
what you’re looking for rather than relying on the LLM to interpret its task
given just the label name. Label descriptions are freeform so you can write
whatever you want here, but a brief description along with some examples and
counter examples seems to work quite well.



For a fully working example, see this
[usage example](https://github.com/explosion/spacy-llm/tree/main/usage_examples/ner_dolly).

[spacy.NER.v1 ](#ner-v1)

The original version of the built-in NER task supports both zero-shot and few-shot prompting.

| Argument | Description |
|---|---|
`examples` | Optional function that generates examples for few-shot learning. Defaults to `None` . Optional[Callable[[], Iterable[Any]]] |
`parse_responses` (NEW) | Callable for parsing LLM responses for this task. Defaults to the internal parsing method for this task. Optional[TaskResponseParser[NERTask]] |
`prompt_example_type` (NEW) | Type to use for fewshot examples. Defaults to `NERExample` . Optional[Type[FewshotExample]] |
`scorer` (NEW) | Scorer function that evaluates the task performance on provided examples. Defaults to the metric used by spaCy. Optional[
|

`labels`

`normalizer`

`None`

, defaults to `spacy.LowercaseNormalizer.v1`

. Optional[Callable[[str], str]]`alignment_mode`

`"strict"`

, `"contract"`

or `"expand"`

. Defaults to `"contract"`

. str`case_sensitive_matching`

`False`

. bool`single_match`

`False`

. boolThe NER task implementation doesn’t currently ask the LLM for specific offsets, but simply expects a list of strings that represent the enties in the document. This means that a form of string matching is required. This can be configured by the following parameters:

- The
`single_match`

parameter is typically set to`False`

to allow for multiple matches. For instance, the response from the LLM might only mention the entity “Paris” once, but you’d still want to mark it every time it occurs in the document. - The case-sensitive matching is typically set to
`False`

to be robust against case variances in the LLM’s output. - The
`alignment_mode`

argument is used to match entities as returned by the LLM to the tokens from the original`Doc`

- specifically it’s used as argument in the call to. The`doc.char_span()`

`"strict"`

mode will only keep spans that strictly adhere to the given token boundaries.`"contract"`

will only keep those tokens that are fully within the given range, e.g. reducing`"New Y"`

to`"New"`

. Finally,`"expand"`

will expand the span to the next token boundaries, e.g. expanding`"New Y"`

out to`"New York"`

.

To perform [few-shot learning](/usage/large-language-models#few-shot-prompts),
you can write down a few examples in a separate file, and provide these to be
injected into the prompt to the LLM. The default reader `spacy.FewShotReader.v1`

supports `.yml`

, `.yaml`

, `.json`

and `.jsonl`

.





[SpanCat ](#spancat)

The SpanCat task identifies potentially overlapping entities in text.

[spacy.SpanCat.v3 ](#spancat-v3)

The built-in SpanCat v3 task is a simple adaptation of the NER v3 task to
support overlapping entities and store its annotations in `doc.spans`

.

| Argument | Description |
|---|---|
`template` | Custom prompt template to send to LLM model. Defaults to
`spancat.v3.jinja` |

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

(NEW)`prompt_example_type`

(NEW)`SpanCatExample`

. Optional[Type[FewshotExample]]`scorer`

(NEW)[Scorer](/api/scorer)]`labels`

`label_definitions`

`None`

. Optional[Dict[str, str]]`description`

(NEW)`spans_key`

`Doc.spans`

dict to save the spans under. Defaults to `"sc"`

. str`normalizer`

`None`

, defaults to `spacy.LowercaseNormalizer.v1`

. Optional[Callable[[str], str]]`alignment_mode`

`"strict"`

, `"contract"`

or `"expand"`

. Defaults to `"contract"`

. str`case_sensitive_matching`

`False`

. boolNote that the `single_match`

parameter, used in v1 and v2, is not supported
anymore, as the CoT parsing algorithm takes care of this automatically.

[spacy.SpanCat.v2 ](#spancat-v2)

The built-in SpanCat v2 task is a simple adaptation of the NER v2 task to
support overlapping entities and store its annotations in `doc.spans`

.

| Argument | Description |
|---|---|
`template` (NEW) | Custom prompt template to send to LLM model. Defaults to
`spancat.v2.jinja` |

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

(NEW)`prompt_example_type`

(NEW)`SpanCatExample`

. Optional[Type[FewshotExample]]`scorer`

(NEW)[Scorer](/api/scorer)]`labels`

`label_definitions`

(NEW)`None`

. Optional[Dict[str, str]]`spans_key`

`Doc.spans`

dict to save the spans under. Defaults to `"sc"`

. str`normalizer`

`None`

, defaults to `spacy.LowercaseNormalizer.v1`

. Optional[Callable[[str], str]]`alignment_mode`

`"strict"`

, `"contract"`

or `"expand"`

. Defaults to `"contract"`

. str`case_sensitive_matching`

`False`

. bool`single_match`

`False`

. boolExcept for the `spans_key`

parameter, the SpanCat v2 task reuses the
configuration from the NER v2 task. Refer to [its documentation](/api/large-language-models#ner-v2) for
more insight.

[spacy.SpanCat.v1 ](#spancat-v1)

The original version of the built-in SpanCat task is a simple adaptation of the
v1 NER task to support overlapping entities and store its annotations in
`doc.spans`

.

| Argument | Description |
|---|---|
`examples` | Optional function that generates examples for few-shot learning. Defaults to `None` . Optional[Callable[[], Iterable[Any]]] |
`parse_responses` (NEW) | Callable for parsing LLM responses for this task. Defaults to the internal parsing method for this task. Optional[TaskResponseParser[SpanCatTask]] |
`prompt_example_type` (NEW) | Type to use for fewshot examples. Defaults to `SpanCatExample` . Optional[Type[FewshotExample]] |
`scorer` (NEW) | Scorer function that evaluates the task performance on provided examples. Defaults to the metric used by spaCy. Optional[
|

`labels`

`spans_key`

`Doc.spans`

dict to save the spans under. Defaults to `"sc"`

. str`normalizer`

`None`

, defaults to `spacy.LowercaseNormalizer.v1`

. Optional[Callable[[str], str]]`alignment_mode`

`"strict"`

, `"contract"`

or `"expand"`

. Defaults to `"contract"`

. str`case_sensitive_matching`

`False`

. bool`single_match`

`False`

. boolExcept for the `spans_key`

parameter, the SpanCat v1 task reuses the
configuration from the NER v1 task. Refer to [its documentation](/api/large-language-models#ner-v1) for
more insight.

[TextCat ](#textcat)

The TextCat task labels documents with relevant categories.

[spacy.TextCat.v3 ](#textcat-v3)

On top of the functionality from v2, version 3 of the built-in TextCat tasks allows setting definitions of labels. Those definitions are included in the prompt.

| Argument | Description |
|---|---|
`template` | Custom prompt template to send to LLM model. Defaults to
`textcat.v3.jinja` |

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

(NEW)`prompt_example_type`

(NEW)`TextCatExample`

. Optional[Type[FewshotExample]]`scorer`

(NEW)[Scorer](/api/scorer)]`labels`

`label_definitions`

(NEW)`None`

. Optional[Dict[str, str]]`normalizer`

`None`

, falls back to `spacy.LowercaseNormalizer.v1`

. Defaults to `None`

. Optional[Callable[[str], str]]`exclusive_classes`

`True`

, only one label per document should be valid. If set to `False`

, one document can have multiple labels. Defaults to `False`

. bool`allow_none`

`True`

, allows the LLM to not return any of the given label. The resulting dict in `doc.cats`

will have `0.0`

scores for all labels. Defaults to `True`

. bool`verbose`

`True`

, warnings will be generated when the LLM returns invalid responses. Defaults to `False`

. boolThe formatting of few-shot examples is the same as those for the
[v1](/api/large-language-models#textcat-v1) implementation.

[spacy.TextCat.v2 ](#textcat-v2)

V2 includes all v1 functionality, with an improved prompt template.

| Argument | Description |
|---|---|
`template` (NEW) | Custom prompt template to send to LLM model. Defaults to
`textcat.v2.jinja` |

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

(NEW)`prompt_example_type`

(NEW)`TextCatExample`

. Optional[Type[FewshotExample]]`scorer`

(NEW)[Scorer](/api/scorer)]`labels`

`normalizer`

`None`

, falls back to `spacy.LowercaseNormalizer.v1`

. Optional[Callable[[str], str]]`exclusive_classes`

`True`

, only one label per document should be valid. If set to `False`

, one document can have multiple labels. Defaults to `False`

. bool`allow_none`

`True`

, allows the LLM to not return any of the given label. The resulting dict in `doc.cats`

will have `0.0`

scores for all labels. Defaults to `True`

. bool`verbose`

`True`

, warnings will be generated when the LLM returns invalid responses. Defaults to `False`

. boolThe formatting of few-shot examples is the same as those for the
[v1](/api/large-language-models#textcat-v1) implementation.

[spacy.TextCat.v1 ](#textcat-v1)

Version 1 of the built-in TextCat task supports both zero-shot and few-shot prompting.

| Argument | Description |
|---|---|
`examples` | Optional function that generates examples for few-shot learning. Deafults to `None` . Optional[Callable[[], Iterable[Any]]] |
`parse_responses` (NEW) | Callable for parsing LLM responses for this task. Defaults to the internal parsing method for this task. Optional[TaskResponseParser[SpanCatTask]] |
`prompt_example_type` (NEW) | Type to use for fewshot examples. Defaults to `TextCatExample` . Optional[Type[FewshotExample]] |
`scorer` (NEW) | Scorer function that evaluates the task performance on provided examples. Defaults to the metric used by spaCy. Optional[
|

`labels`

`normalizer`

`None`

, falls back to `spacy.LowercaseNormalizer.v1`

. Optional[Callable[[str], str]]`exclusive_classes`

`True`

, only one label per document should be valid. If set to `False`

, one document can have multiple labels. Defaults to `False`

. bool`allow_none`

`True`

, allows the LLM to not return any of the given label. The resulting dict in `doc.cats`

will have `0.0`

scores for all labels. Defaults to `True`

. bool`verbose`

`True`

, warnings will be generated when the LLM returns invalid responses. Defaults to `False`

. boolTo perform [few-shot learning](/usage/large-language-models#few-shot-prompts),
you can write down a few examples in a separate file, and provide these to be
injected into the prompt to the LLM. The default reader `spacy.FewShotReader.v1`

supports `.yml`

, `.yaml`

, `.json`

and `.jsonl`

.





If you want to perform few-shot learning with a binary classifier (i. e. a text either should or should not be assigned to a given class), you can provide positive and negative examples with answers of “POS” or “NEG”. “POS” means that this example should be assigned the class label defined in the configuration, “NEG” means it shouldn’t. E. g. for spam classification:



[REL ](#rel)

The REL task extracts relations between named entities.

[spacy.REL.v1 ](#rel-v1)

The built-in REL task supports both zero-shot and few-shot prompting. It relies on an upstream NER component for entities extraction.

| Argument | Description |
|---|---|
`template` | Custom prompt template to send to LLM model. Defaults to
`rel.v3.jinja` |

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

(NEW)`prompt_example_type`

(NEW)`RELExample`

. Optional[Type[FewshotExample]]`scorer`

(NEW)[Scorer](/api/scorer)]`labels`

`label_definitions`

`None`

. Optional[Dict[str, str]]`normalizer`

`None`

, falls back to `spacy.LowercaseNormalizer.v1`

. Defaults to `None`

. Optional[Callable[[str], str]]`verbose`

`True`

, warnings will be generated when the LLM returns invalid responses. Defaults to `False`

. boolTo perform [few-shot learning](/usage/large-language-models#few-shot-prompts),
you can write down a few examples in a separate file, and provide these to be
injected into the prompt to the LLM. The default reader `spacy.FewShotReader.v1`

supports `.yml`

, `.yaml`

, `.json`

and `.jsonl`

.





Note: the REL task relies on pre-extracted entities to make its prediction.
Hence, you’ll need to add a component that populates `doc.ents`

with recognized
spans to your spaCy pipeline and put it *before* the REL component.

For a fully working example, see this
[usage example](https://github.com/explosion/spacy-llm/tree/main/usage_examples/rel_openai).

[Lemma ](#lemma)

The Lemma task lemmatizes the provided text and updates the `lemma_`

attribute
in the doc’s tokens accordingly.

[spacy.Lemma.v1 ](#lemma-v1)

This task supports both zero-shot and few-shot prompting.

| Argument | Description |
|---|---|
`template` | Custom prompt template to send to LLM model. Defaults to
|

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

(NEW)`prompt_example_type`

(NEW)`LemmaExample`

. Optional[Type[FewshotExample]]`scorer`

(NEW)[Scorer](/api/scorer)]The task prompts the LLM to lemmatize the passed text and return the lemmatized
version as a list of tokens and their corresponding lemma. E. g. the text
`I'm buying ice cream for my friends`

should invoke the response



If for any given text/doc instance the number of lemmas returned by the LLM
doesn’t match the number of tokens from the pipeline’s tokenizer, no lemmas are
stored in the corresponding doc’s tokens. Otherwise the tokens `.lemma_`

property is updated with the lemma suggested by the LLM.

To perform [few-shot learning](/usage/large-language-models#few-shot-prompts),
you can write down a few examples in a separate file, and provide these to be
injected into the prompt to the LLM. The default reader `spacy.FewShotReader.v1`

supports `.yml`

, `.yaml`

, `.json`

and `.jsonl`

.





[Sentiment ](#sentiment)

Performs sentiment analysis on provided texts. Scores between 0 and 1 are stored
in `Doc._.sentiment`

- the higher, the more positive. Note in cases of parsing
issues (e. g. in case of unexpected LLM responses) the value might be `None`

.

[spacy.Sentiment.v1 ](#sentiment-v1)

This task supports both zero-shot and few-shot prompting.

| Argument | Description |
|---|---|
`template` | Custom prompt template to send to LLM model. Defaults to
|

`examples`

`None`

. Optional[Callable[[], Iterable[Any]]]`parse_responses`

(NEW)`prompt_example_type`

(NEW)`SentimentExample`

. Optional[Type[FewshotExample]]`scorer`

(NEW)[Scorer](/api/scorer)]`field`

`doc._.{field}`

). Defaults to `sentiment`

. strTo perform [few-shot learning](/usage/large-language-models#few-shot-prompts),
you can write down a few examples in a separate file, and provide these to be
injected into the prompt to the LLM. The default reader `spacy.FewShotReader.v1`

supports `.yml`

, `.yaml`

, `.json`

and `.jsonl`

.





[NoOp ](#noop)

This task is only useful for testing - it tells the LLM to do nothing, and does
not set any fields on the `docs`

.

[spacy.NoOp.v1 ](#noop-v1)

This task needs no further configuration.

[Models ](#models)

A *model* defines which LLM model to query, and how to query it. It can be a
simple function taking a collection of prompts (consistent with the output type
of `task.generate_prompts()`

) and returning a collection of responses
(consistent with the expected input of `parse_responses`

). Generally speaking,
it’s a function of type
`Callable[[Iterable[Iterable[Any]]], Iterable[Iterable[Any]]]`

, but specific
implementations can have other signatures, like
`Callable[[Iterable[Iterable[str]]], Iterable[Iterable[str]]]`

.

Note: the model signature expects a nested iterable so it’s able to deal with sharded docs. Unsharded docs (i. e. those produced by (nonsharding tasks)[/api/large-language-models#task-nonsharding]) are reshaped to fit the expected data structure.

[Models via REST API ](#models-rest)

These models all take the same parameters, but note that the `config`

should
contain provider-specific keys and values, as it will be passed onwards to the
provider’s API.

| Argument | Description |
|---|---|
`name` | Model name, i. e. any supported variant for this particular model. Default depends on the specific model (cf. below) str |
`config` | Further configuration passed on to the model. Default depends on the specific model (cf. below). Dict[Any, Any] |
`strict` | If `True` , raises an error if the LLM API returns a malformed response. Otherwise, return the error responses as is. Defaults to `True` . bool |
`max_tries` | Max. number of tries for API request. Defaults to `5` . int |
`max_request_time` | Max. time (in seconds) to wait for request to terminate before raising an exception. Defaults to `30.0` . float |
`interval` | Time interval (in seconds) for API retries in seconds. Defaults to `1.0` . float |
`endpoint` | Endpoint URL. Defaults to the provider’s standard URL, if available (which is not the case for providers with exclusively custom deployments, such as Azure) Optional[str] |

Currently, these models are provided as part of the core library:

| Model | Provider | Supported names | Default name | Default config |
|---|---|---|---|---|
`spacy.GPT-4.v1` | OpenAI | `["gpt-4", "gpt-4-0314", "gpt-4-32k", "gpt-4-32k-0314"]` | `"gpt-4"` | `{}` |
`spacy.GPT-4.v2` | OpenAI | `["gpt-4", "gpt-4-0314", "gpt-4-32k", "gpt-4-32k-0314"]` | `"gpt-4"` | `{temperature=0.0}` |
`spacy.GPT-4.v3` | OpenAI | All names of
|

`"gpt-4"`

`{temperature=0.0}`

`spacy.GPT-3-5.v1`

`["gpt-3.5-turbo", "gpt-3.5-turbo-16k", "gpt-3.5-turbo-0613", "gpt-3.5-turbo-0613-16k", "gpt-3.5-turbo-instruct"]`

`"gpt-3.5-turbo"`

`{}`

`spacy.GPT-3-5.v2`

`["gpt-3.5-turbo", "gpt-3.5-turbo-16k", "gpt-3.5-turbo-0613", "gpt-3.5-turbo-0613-16k", "gpt-3.5-turbo-instruct"]`

`"gpt-3.5-turbo"`

`{temperature=0.0}`

`spacy.GPT-3-5.v3`

[GPT-3.5 models](https://platform.openai.com/docs/models/gpt-3-5)offered by OpenAI`"gpt-3.5-turbo"`

`{temperature=0.0}`

`spacy.Davinci.v1`

`["davinci"]`

`"davinci"`

`{}`

`spacy.Davinci.v2`

`["davinci"]`

`"davinci"`

`{temperature=0.0, max_tokens=500}`

`spacy.Text-Davinci.v1`

`["text-davinci-003", "text-davinci-002"]`

`"text-davinci-003"`

`{}`

`spacy.Text-Davinci.v2`

`["text-davinci-003", "text-davinci-002"]`

`"text-davinci-003"`

`{temperature=0.0, max_tokens=1000}`

`spacy.Code-Davinci.v1`

`["code-davinci-002"]`

`"code-davinci-002"`

`{}`

`spacy.Code-Davinci.v2`

`["code-davinci-002"]`

`"code-davinci-002"`

`{temperature=0.0, max_tokens=500}`

`spacy.Curie.v1`

`["curie"]`

`"curie"`

`{}`

`spacy.Curie.v2`

`["curie"]`

`"curie"`

`{temperature=0.0, max_tokens=500}`

`spacy.Text-Curie.v1`

`["text-curie-001"]`

`"text-curie-001"`

`{}`

`spacy.Text-Curie.v2`

`["text-curie-001"]`

`"text-curie-001"`

`{temperature=0.0, max_tokens=500}`

`spacy.Babbage.v1`

`["babbage"]`

`"babbage"`

`{}`

`spacy.Babbage.v2`

`["babbage"]`

`"babbage"`

`{temperature=0.0, max_tokens=500}`

`spacy.Text-Babbage.v1`

`["text-babbage-001"]`

`"text-babbage-001"`

`{}`

`spacy.Text-Babbage.v2`

`["text-babbage-001"]`

`"text-babbage-001"`

`{temperature=0.0, max_tokens=500}`

`spacy.Ada.v1`

`["ada"]`

`"ada"`

`{}`

`spacy.Ada.v2`

`["ada"]`

`"ada"`

`{temperature=0.0, max_tokens=500}`

`spacy.Text-Ada.v1`

`["text-ada-001"]`

`"text-ada-001"`

`{}`

`spacy.Text-Ada.v2`

`["text-ada-001"]`

`"text-ada-001"`

`{temperature=0.0, max_tokens=500}`

`spacy.Azure.v1`

`{temperature=0.0}`

`spacy.Command.v1`

`["command", "command-light", "command-light-nightly", "command-nightly"]`

`"command"`

`{}`

`spacy.Claude-2-1.v1`

`["claude-2-1"]`

`"claude-2-1"`

`{}`

`spacy.Claude-2.v1`

`["claude-2", "claude-2-100k"]`

`"claude-2"`

`{}`

`spacy.Claude-1.v1`

`["claude-1", "claude-1-100k"]`

`"claude-1"`

`{}`

`spacy.Claude-1-0.v1`

`["claude-1.0"]`

`"claude-1.0"`

`{}`

`spacy.Claude-1-2.v1`

`["claude-1.2"]`

`"claude-1.2"`

`{}`

`spacy.Claude-1-3.v1`

`["claude-1.3", "claude-1.3-100k"]`

`"claude-1.3"`

`{}`

`spacy.Claude-instant-1.v1`

`["claude-instant-1", "claude-instant-1-100k"]`

`"claude-instant-1"`

`{}`

`spacy.Claude-instant-1-1.v1`

`["claude-instant-1.1", "claude-instant-1.1-100k"]`

`"claude-instant-1.1"`

`{}`

`spacy.PaLM.v1`

`["chat-bison-001", "text-bison-001"]`

`"text-bison-001"`

`{temperature=0.0}`

To use these models, make sure that you’ve [set the relevant API](/api/large-language-models#api-keys)
keys as environment variables.

**⚠️ A note on spacy.Azure.v1.** Working with Azure OpenAI is slightly
different than working with models from other providers:

- In Azure LLMs have to be made available by creating a
*deployment*of a given model (e. g. GPT-3.5). This deployment can have an arbitrary name. The`name`

argument, which everywhere else denotes the model name (e. g.`claude-1.0`

,`gpt-3.5`

), here refers to the*deployment name*. - Deployed Azure OpenAI models are reachable via a resource-specific base URL,
usually of the form
`https://{resource}.openai.azure.com`

. Hence the URL has to be specified via the`base_url`

argument. - Azure further expects the
*API version*to be specified. The default value for this, via the`api_version`

argument, is currently`2023-05-15`

but may be updated in the future. - Finally, since we can’t infer information about the model from the deployment
name,
`spacy-llm`

requires the`model_type`

to be set to either`"completions"`

or`"chat"`

, depending on whether the deployed model is a completion or chat model.

[API Keys ](#api-keys)

Note that when using hosted services, you have to ensure that the proper API keys are set as environment variables as described by the corresponding provider’s documentation.

E. g. when using OpenAI, you have to get an API key from openai.com, and ensure that the keys are set as environmental variables:



For Cohere:



For Anthropic:



For PaLM:



[Models via HuggingFace ](#models-hf)

These models all take the same parameters:

| Argument | Description |
|---|---|
`name` | Model name, i. e. any supported variant for this particular model. str |
`config_init` | Further configuration passed on to the construction of the model with `transformers.pipeline()` . Defaults to `{}` . Dict[str, Any] |
`config_run` | Further configuration used during model inference. Defaults to `{}` . Dict[str, Any] |

Currently, these models are provided as part of the core library:

| Model | Provider | Supported names | HF directory |
|---|---|---|---|
`spacy.Dolly.v1` | Databricks | `["dolly-v2-3b", "dolly-v2-7b", "dolly-v2-12b"]` |
|

`spacy.Falcon.v1`

`["falcon-rw-1b", "falcon-7b", "falcon-7b-instruct", "falcon-40b-instruct"]`

[https://huggingface.co/tiiuae](https://huggingface.co/tiiuae)`spacy.Llama2.v1`

`["Llama-2-7b-hf", "Llama-2-13b-hf", "Llama-2-70b-hf"]`

[https://huggingface.co/meta-llama](https://huggingface.co/meta-llama)`spacy.Mistral.v1`

`["Mistral-7B-v0.1", "Mistral-7B-Instruct-v0.1"]`

[https://huggingface.co/mistralai](https://huggingface.co/mistralai)`spacy.StableLM.v1`

`["stablelm-base-alpha-3b", "stablelm-base-alpha-7b", "stablelm-tuned-alpha-3b", "stablelm-tuned-alpha-7b"]`

[https://huggingface.co/stabilityai](https://huggingface.co/stabilityai)`spacy.OpenLLaMA.v1`

`["open_llama_3b", "open_llama_7b", "open_llama_7b_v2", "open_llama_13b"]`

[https://huggingface.co/openlm-research](https://huggingface.co/openlm-research)Note that Hugging Face will download the model the first time you use it - you
can
[define the cached directory](https://huggingface.co/docs/huggingface_hub/main/en/guides/manage-cache)
by setting the environmental variable `HF_HOME`

.

[Installation with HuggingFace ](#install-hf)

To use models from HuggingFace, ideally you have a GPU enabled and have
installed `transformers`

, `torch`

and CUDA in your virtual environment. This
allows you to have the setting `device=cuda:0`

in your config, which ensures
that the model is loaded entirely on the GPU (and fails otherwise).

You can do so with



If you don’t have access to a GPU, you can install `accelerate`

and
set`device_map=auto`

instead, but be aware that this may result in some layers
getting distributed to the CPU or even the hard drive, which may ultimately
result in extremely slow queries.



[LangChain models ](#langchain-models)

To use [LangChain](https://github.com/hwchase17/langchain) for the API retrieval
part, make sure you have installed it first:



Note that LangChain currently only supports Python 3.9 and beyond.

LangChain models in `spacy-llm`

work slightly differently. `langchain`

’s models
are parsed automatically, each LLM class in `langchain`

has one entry in
`spacy-llm`

’s registry. As `langchain`

’s design has one class per API and not
per model, this results in registry entries like `langchain.OpenAI.v1`

- i. e.
there is one registry entry per API and not per model (family), as for the REST-
and HuggingFace-based entries.

The name of the model to be used has to be passed in via the `name`

attribute.

| Argument | Description |
|---|---|
`name` | The name of a model supported by LangChain for this API. str |
`config` | Configuration passed on to the LangChain model. Defaults to `{}` . Dict[Any, Any] |
`query` | Function that executes the prompts. If `None` , defaults to `spacy.CallLangChain.v1` . Optional[Callable[[“langchain.llms.BaseLLM”, Iterable[Any]], Iterable[Any]]] |

The default `query`

(`spacy.CallLangChain.v1`

) executes the prompts by running
`model(text)`

for each given textual prompt.

[Cache ](#cache)

Interacting with LLMs, either through an external API or a local instance, is
costly. Since developing an NLP pipeline generally means a lot of exploration
and prototyping, `spacy-llm`

implements a built-in cache to avoid reprocessing
the same documents at each run that keeps batches of documents stored on disk.

| Argument | Description |
|---|---|
`path` | Cache directory. If `None` , no caching is performed, and this component will act as a NoOp. Defaults to `None` . Optional[Union[str,
|
`batch_size` | Number of docs in one batch (file). Once a batch is full, it will be peristed to disk. Defaults to 64. int |
`max_batches_in_mem` | Max. number of batches to hold in memory. Allows you to limit the effect on your memory if you’re handling a lot of docs. Defaults to 4. int |

When retrieving a document, the `BatchCache`

will first figure out what batch
the document belongs to. If the batch isn’t in memory it will try to load the
batch from disk and then move it into memory.

Note that since the cache is generated by a registered function, you can also
provide your own registered function returning your own cache implementation. If
you wish to do so, ensure that your cache object adheres to the `Protocol`

defined in `spacy_llm.ty.Cache`

.

[Various functions ](#various-functions)

[spacy.FewShotReader.v1 ](#fewshotreader-v1)

This function is registered in spaCy’s `misc`

registry, and reads in examples
from a `.yml`

, `.yaml`

, `.json`

or `.jsonl`

file. It uses
[ srsly](https://github.com/explosion/srsly) to read in these files and parses
them depending on the file extension.

| Argument | Description |
|---|---|
`path` | Path to an examples file with suffix `.yml` , `.yaml` , `.json` or `.jsonl` . Union[str,
|

[spacy.FileReader.v1 ](#filereader-v1)

This function is registered in spaCy’s `misc`

registry, and reads a file
provided to the `path`

to return a `str`

representation of its contents. This
function is typically used to read
[Jinja](https://jinja.palletsprojects.com/en/3.1.x/) files containing the prompt
template.

| Argument | Description |
|---|---|
`path` | Path to the file to be read. Union[str,
|

[Normalizer functions ](#normalizer-functions)

These functions provide simple normalizations for string comparisons, e.g.
between a list of specified labels and a label given in the raw text of the LLM
response. They are registered in spaCy’s `misc`

registry and have the signature
`Callable[[str], str]`

.

`spacy.StripNormalizer.v1`

: only apply`text.strip()`

`spacy.LowercaseNormalizer.v1`

: applies`text.strip().lower()`

to compare strings in a case-insensitive way.

---

## Source: https://spacy.io/api/lemmatizer

# Lemmatizer

Component for assigning base forms to tokens using rules based on part-of-speech
tags, or lookup tables. Different [ Language](/api/language) subclasses can
implement their own lemmatizer components via

[language-specific factories](/usage/processing-pipelines#factories-language). The default data used is provided by the

[extension package.](https://github.com/explosion/spacy-lookups-data)

`spacy-lookups-data`

For a trainable lemmatizer, see [ EditTreeLemmatizer](/api/edittreelemmatizer).

[Assigned Attributes ](#assigned-attributes)

Lemmas generated by rules or predicted will be saved to `Token.lemma`

.

| Location | Value |
|---|---|
`Token.lemma` | The lemma (hash). int |
`Token.lemma_` | The lemma. str |

## Config and implementation

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[. For examples of the lookups data format used by the lookup and rule-based lemmatizers, see](/usage/training#config)

`config.cfg`

for training[.](https://github.com/explosion/spacy-lookups-data)

`spacy-lookups-data`

| Setting | Description |
|---|---|
`mode` | The lemmatizer mode, e.g. `"lookup"` or `"rule"` . Defaults to `lookup` if no language-specific lemmatizer is available (see the following table). str |
`overwrite` | Whether to overwrite existing lemmas. Defaults to `False` . bool |
`model` | Not yet implemented: the model to use.
|
keyword-only | |
`scorer` | The scoring method. Defaults to
`Scorer.score_token_attr` |

`"lemma"`

. Optional[Callable]Many languages specify a default lemmatizer mode other than `lookup`

if a better
lemmatizer is available. The lemmatizer modes `rule`

and `pos_lookup`

require
[ token.pos](/api/token) from a previous pipeline component (see example
pipeline configurations in the

[pretrained pipeline design details](/models#design-cnn)) or rely on third-party libraries (

`pymorphy3`

).| Language | Default Mode |
|---|---|
`bn` | `rule` |
`ca` | `pos_lookup` |
`el` | `rule` |
`en` | `rule` |
`es` | `rule` |
`fa` | `rule` |
`fr` | `rule` |
`it` | `pos_lookup` |
`mk` | `rule` |
`nb` | `rule` |
`nl` | `rule` |
`pl` | `pos_lookup` |
`ru` | `pymorphy3` |
`sv` | `rule` |
`uk` | `pymorphy3` |

`explosion/spaCy/master/spacy/pipeline/lemmatizer.py`


[Lemmatizer.__init__ ](#init)method

Create a new pipeline instance. In your application, you would normally use a
shortcut for this and instantiate the component using its string name and
[ nlp.add_pipe](/api/language#add_pipe).

| Name | Description |
|---|---|
`vocab` | The shared vocabulary.
|

`model`

**Not yet implemented:**The model to use.[Model](https://thinc.ai/docs/api-model)`name`

`losses`

during training. str*keyword-only*`"lookup"`

or `"rule"`

. Defaults to `"lookup"`

. str[Lemmatizer.__call__ ](#call)method

Apply the pipe to one document. The document is modified in place, and returned.
This usually happens under the hood when the `nlp`

object is called on a text
and all pipeline components are applied to the `Doc`

in order.

| Name | Description |
|---|---|
`doc` | The document to process.
|

**RETURNS**[Doc](/api/doc)[Lemmatizer.pipe ](#pipe)method

Apply the pipe to a stream of documents. This usually happens under the hood
when the `nlp`

object is called on a text and all pipeline components are
applied to the `Doc`

in order.

| Name | Description |
|---|---|
`stream` | A stream of documents. Iterable[
|

*keyword-only*`batch_size`

`128`

. int**YIELDS**[Doc](/api/doc)[Lemmatizer.initialize ](#initialize)method

Initialize the lemmatizer and load any data resources. This method is typically
called by [ Language.initialize](/api/language#initialize) and lets you
customize arguments it receives via the

[block in the config. The loading only happens during initialization, typically before training. At runtime, all data is loaded from disk.](/api/data-formats#config-initialize)

`[initialize.components]`

| Name | Description |
|---|---|
`get_examples` | Function that returns gold-standard annotations in the form of
`Example` |

`None`

. Optional[Callable[[], Iterable[[Example](/api/example)]]]

*keyword-only*`nlp`

`nlp`

object. Defaults to `None`

. Optional[[Language](/api/language)]`lookups`

`"lemma_rules"`

, `"lemma_index"`

, `"lemma_exc"`

and `"lemma_lookup"`

. If `None`

, default tables are loaded from [. Defaults to](https://github.com/explosion/spacy-lookups-data)`spacy-lookups-data`

`None`

. Optional[[Lookups](/api/lookups)][Lemmatizer.lookup_lemmatize ](#lookup_lemmatize)method

Lemmatize a token using a lookup-based approach. If no lemma is found, the original string is returned.

| Name | Description |
|---|---|
`token` | The token to lemmatize.
|

**RETURNS**[Lemmatizer.rule_lemmatize ](#rule_lemmatize)method

Lemmatize a token using a rule-based approach. Typically relies on POS tags.

| Name | Description |
|---|---|
`token` | The token to lemmatize.
|

**RETURNS**[Lemmatizer.is_base_form ](#is_base_form)method

Check whether we’re dealing with an uninflected paradigm, so we can avoid lemmatization entirely.

| Name | Description |
|---|---|
`token` | The token to analyze.
|

**RETURNS**[Lemmatizer.get_lookups_config ](#get_lookups_config)classmethod

Returns the lookups configuration settings for a given mode for use in
[ Lemmatizer.load_lookups](/api/lemmatizer#load_lookups).

| Name | Description |
|---|---|
`mode` | The lemmatizer mode. str |
RETURNS | The required table names and the optional table names. Tuple[List[str], List[str]] |

[Lemmatizer.to_disk ](#to_disk)method

Serialize the pipe to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[Lemmatizer.from_disk ](#from_disk)method

Load the pipe from disk. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`Lemmatizer`

object. Lemmatizer[Lemmatizer.to_bytes ](#to_bytes)method

Serialize the pipe to a bytestring.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`Lemmatizer`

object. bytes[Lemmatizer.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`Lemmatizer`

object. Lemmatizer[Attributes ](#attributes)

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

[Vocab](/api/vocab)

`lookups`

[Lookups](/api/lookups)`mode`

[Serialization fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

`lookups`

---

## Source: https://spacy.io/api/morphologizer

# Morphologizer

A trainable pipeline component to predict morphological features and
coarse-grained POS tags following the Universal Dependencies
[UPOS](https://universaldependencies.org/u/pos/index.html) and
[FEATS](https://universaldependencies.org/format.html#morphological-annotation)
annotation guidelines.

[Assigned Attributes ](#assigned-attributes)

Predictions are saved to `Token.morph`

and `Token.pos`

.

| Location | Value |
|---|---|
`Token.pos` | The UPOS part of speech (hash). int |
`Token.pos_` | The UPOS part of speech. str |
`Token.morph` | Morphological features.
|

[Config and implementation ](#config)

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[. See the](/usage/training#config)

`config.cfg`

for training[model architectures](/api/architectures)documentation for details on the architectures and their arguments and hyperparameters.

| Setting | Description |
|---|---|
`model` | The model to use. Defaults to
|

`overwrite`

v3.2`True`

. bool`extend`

v3.2`overwrite`

) are preserved. Defaults to `False`

. bool`scorer`

v3.2[for the attributes](/api/scorer#score_token_attr)`Scorer.score_token_attr`

`"pos"`

and `"morph"`

and [for the attribute](/api/scorer#score_token_attr_per_feat)`Scorer.score_token_attr_per_feat`

`"morph"`

. Optional[Callable]`label_smoothing`

v3.6[Label smoothing](https://arxiv.org/abs/1906.02629)factor. Defaults to`0.0`

. float`explosion/spaCy/master/spacy/pipeline/morphologizer.pyx`


[Morphologizer.__init__ ](#init)method

Create a new pipeline instance. In your application, you would normally use a
shortcut for this and instantiate the component using its string name and
[ nlp.add_pipe](/api/language#add_pipe).

The `overwrite`

and `extend`

settings determine how existing annotation is
handled (with the example for existing annotation `A=B|C=D`

+ predicted
annotation `C=E|X=Y`

):

`overwrite=True, extend=True`

: overwrite values of existing features, add any new features (`A=B|C=D`

+`C=E|X=Y`

→`A=B|C=E|X=Y`

)`overwrite=True, extend=False`

: overwrite completely, removing any existing features (`A=B|C=D`

+`C=E|X=Y`

→`C=E|X=Y`

)`overwrite=False, extend=True`

: keep values of existing features, add any new features (`A=B|C=D`

+`C=E|X=Y`

→`A=B|C=D|X=Y`

)`overwrite=False, extend=False`

: do not modify the existing annotation if set (`A=B|C=D`

+`C=E|X=Y`

→`A=B|C=D`

)

| Name | Description |
|---|---|
`vocab` | The shared vocabulary.
|

`model`

[powering the pipeline component.](https://thinc.ai/docs/api-model)`Model`

[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]`name`

`losses`

during training. str*keyword-only*`overwrite`

v3.2`True`

. bool`extend`

v3.2`overwrite`

) are preserved. Defaults to `False`

. bool`scorer`

v3.2[for the attributes](/api/scorer#score_token_attr)`Scorer.score_token_attr`

`"pos"`

and `"morph"`

and [for the attribute](/api/scorer#score_token_attr_per_feat)`Scorer.score_token_attr_per_feat`

`"morph"`

. Optional[Callable][Morphologizer.__call__ ](#call)method

Apply the pipe to one document. The document is modified in place, and returned.
This usually happens under the hood when the `nlp`

object is called on a text
and all pipeline components are applied to the `Doc`

in order. Both
[ __call__](/api/morphologizer#call) and

[delegate to the](/api/morphologizer#pipe)

`pipe`

[and](/api/morphologizer#predict)

`predict`

[methods.](/api/morphologizer#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`doc` | The document to process.
|

**RETURNS**[Doc](/api/doc)[Morphologizer.pipe ](#pipe)method

Apply the pipe to a stream of documents. This usually happens under the hood
when the `nlp`

object is called on a text and all pipeline components are
applied to the `Doc`

in order. Both [ __call__](/api/morphologizer#call) and

[delegate to the](/api/morphologizer#pipe)

`pipe`

[and](/api/morphologizer#predict)

`predict`

[methods.](/api/morphologizer#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`stream` | A stream of documents. Iterable[
|

*keyword-only*`batch_size`

`128`

. int**YIELDS**[Doc](/api/doc)[Morphologizer.initialize ](#initialize)method

Initialize the component for training. `get_examples`

should be a function that
returns an iterable of [ Example](/api/example) objects.

**At least one example should be supplied.**The data examples are used to

**initialize the model**of the component and can either be the full training data or a representative sample. Initialization includes validating the network,

[inferring missing shapes](https://thinc.ai/docs/usage-models#validation)and setting up the label scheme based on the data. This method is typically called by

[and lets you customize arguments it receives via the](/api/language#initialize)

`Language.initialize`

[block in the config.](/api/data-formats#config-initialize)

`[initialize.components]`

| Name | Description |
|---|---|
`get_examples` | Function that returns gold-standard annotations in the form of
`Example` |

`Example`

. Callable[[], Iterable[[Example](/api/example)]]

*keyword-only*`nlp`

`nlp`

object. Defaults to `None`

. Optional[[Language](/api/language)]`labels`

[property after initialization. To generate a reusable JSON file from your data, you should run the](/api/morphologizer#label_data)`label_data`

[command. If no labels are provided, the](/api/cli#init-labels)`init labels`

`get_examples`

callback is used to extract the labels from the data, which may be a lot slower. Optional[dict][Morphologizer.predict ](#predict)method

Apply the component’s model to a batch of [ Doc](/api/doc) objects, without
modifying them.

| Name | Description |
|---|---|
`docs` | The documents to predict. Iterable[
|

**RETURNS**[Morphologizer.set_annotations ](#set_annotations)method

Modify a batch of [ Doc](/api/doc) objects, using pre-computed scores.

| Name | Description |
|---|---|
`docs` | The documents to modify. Iterable[
|

`scores`

`Morphologizer.predict`

.[Morphologizer.update ](#update)method

Learn from a batch of [ Example](/api/example) objects containing the
predictions and gold-standard annotations, and update the component’s model.
Delegates to

[and](/api/morphologizer#predict)

`predict`

[.](/api/morphologizer#get_loss)

`get_loss`

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |

[Example](/api/example)]

*keyword-only*`drop`

`sgd`

[if not set. Optional[](/api/morphologizer#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]`losses`

**RETURNS**`losses`

dictionary. Dict[str, float][Morphologizer.get_loss ](#get_loss)method

Find the loss and gradient of loss for the batch of documents and their predicted scores.

| Name | Description |
|---|---|
`examples` | The batch of examples. Iterable[
|

`scores`

**RETURNS**`(loss, gradient)`

. Tuple[float, float][Morphologizer.create_optimizer ](#create_optimizer)method

Create an optimizer for the pipeline component.

| Name | Description |
|---|---|
RETURNS | The optimizer.
|

[Morphologizer.use_params ](#use_params)methodcontextmanager

Modify the pipe’s model, to use the given parameter values. At the end of the context, the original parameters are restored.

| Name | Description |
|---|---|
`params` | The parameter values to use in the model. dict |

[Morphologizer.add_label ](#add_label)method

Add a new label to the pipe. If the `Morphologizer`

should set annotations for
both `pos`

and `morph`

, the label should include the UPOS as the feature `POS`

.
Raises an error if the output dimension is already set, or if the model has
already been fully [initialized](/api/morphologizer#initialize). Note that you don’t have to call
this method if you provide a **representative data sample** to the
[ initialize](/api/morphologizer#initialize) method. In this case, all labels found in the sample
will be automatically added to the model, and the output dimension will be

[inferred](/usage/layers-architectures#thinc-shape-inference)automatically.

| Name | Description |
|---|---|
`label` | The label to add. str |
RETURNS | `0` if the label is already present, otherwise `1` . int |

[Morphologizer.to_disk ](#to_disk)method

Serialize the pipe to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[Morphologizer.from_disk ](#from_disk)method

Load the pipe from disk. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`Morphologizer`

object. Morphologizer[Morphologizer.to_bytes ](#to_bytes)method

Serialize the pipe to a bytestring.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`Morphologizer`

object. bytes[Morphologizer.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`Morphologizer`

object. Morphologizer[Morphologizer.labels ](#labels)property

The labels currently added to the component in the Universal Dependencies
[FEATS](https://universaldependencies.org/format.html#morphological-annotation)
format. Note that even for a blank component, this will always include the
internal empty label `_`

. If POS features are used, the labels will include the
coarse-grained POS as the feature `POS`

.

| Name | Description |
|---|---|
RETURNS | The labels added to the component. Tuple[str, …] |

[Morphologizer.label_data ](#label_data)propertyv3.0

The labels currently added to the component and their internal meta information.
This is the data generated by [ init labels](/api/cli#init-labels) and used by

[to initialize the model with a pre-defined label set.](/api/morphologizer#initialize)

`Morphologizer.initialize`

| Name | Description |
|---|---|
RETURNS | The label data added to the component. dict |

[Serialization fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

`cfg`

`model`

---

## Source: https://spacy.io/api/sentencerecognizer

# SentenceRecognizer

A trainable pipeline component for sentence segmentation. For a simpler,
rule-based strategy, see the [ Sentencizer](/api/sentencizer).

[Assigned Attributes ](#assigned-attributes)

Predicted values will be assigned to `Token.is_sent_start`

. The resulting
sentences can be accessed using `Doc.sents`

.

| Location | Value |
|---|---|
`Token.is_sent_start` | A boolean value indicating whether the token starts a sentence. This will be either `True` or `False` for all tokens. bool |
`Doc.sents` | An iterator over sentences in the `Doc` , determined by `Token.is_sent_start` values. Iterator[
|

[Config and implementation ](#config)

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[. See the](/usage/training#config)

`config.cfg`

for training[model architectures](/api/architectures)documentation for details on the architectures and their arguments and hyperparameters.

| Setting | Description |
|---|---|
`model` | The
`Model` |

[Tagger](/api/architectures#Tagger).

[Model](https://thinc.ai/docs/api-model)[List[

[Doc](/api/doc)], List[

[Floats2d](https://thinc.ai/docs/api-types#types)]]

`overwrite`

v3.2`False`

. bool`scorer`

v3.2[for the attribute](/api/scorer#score_spans)`Scorer.score_spans`

`"sents"`

. Optional[Callable]`explosion/spaCy/master/spacy/pipeline/senter.pyx`


[SentenceRecognizer.__init__ ](#init)method

Initialize the sentence recognizer.

Create a new pipeline instance. In your application, you would normally use a
shortcut for this and instantiate the component using its string name and
[ nlp.add_pipe](/api/language#add_pipe).

| Name | Description |
|---|---|
`vocab` | The shared vocabulary.
|

`model`

[powering the pipeline component.](https://thinc.ai/docs/api-model)`Model`

[Model](https://thinc.ai/docs/api-model)[List[[Doc](/api/doc)], List[[Floats2d](https://thinc.ai/docs/api-types#types)]]`name`

`losses`

during training. str*keyword-only*`overwrite`

v3.2`False`

. bool`scorer`

v3.2[for the attribute](/api/scorer#score_spans)`Scorer.score_spans`

`"sents"`

. Optional[Callable][SentenceRecognizer.__call__ ](#call)method

Apply the pipe to one document. The document is modified in place, and returned.
This usually happens under the hood when the `nlp`

object is called on a text
and all pipeline components are applied to the `Doc`

in order. Both
[ __call__](/api/sentencerecognizer#call) and

[delegate to the](/api/sentencerecognizer#pipe)

`pipe`

[and](/api/sentencerecognizer#predict)

`predict`

[methods.](/api/sentencerecognizer#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`doc` | The document to process.
|

**RETURNS**[Doc](/api/doc)[SentenceRecognizer.pipe ](#pipe)method

Apply the pipe to a stream of documents. This usually happens under the hood
when the `nlp`

object is called on a text and all pipeline components are
applied to the `Doc`

in order. Both [ __call__](/api/sentencerecognizer#call)
and

[delegate to the](/api/sentencerecognizer#pipe)

`pipe`

[and](/api/sentencerecognizer#predict)

`predict`

[methods.](/api/sentencerecognizer#set_annotations)

`set_annotations`

| Name | Description |
|---|---|
`stream` | A stream of documents. Iterable[
|

*keyword-only*`batch_size`

`128`

. int**YIELDS**[Doc](/api/doc)[SentenceRecognizer.initialize ](#initialize)method

Initialize the component for training. `get_examples`

should be a function that
returns an iterable of [ Example](/api/example) objects.

**At least one example should be supplied.**The data examples are used to

**initialize the model**of the component and can either be the full training data or a representative sample. Initialization includes validating the network,

[inferring missing shapes](https://thinc.ai/docs/usage-models#validation)and setting up the label scheme based on the data. This method is typically called by

[.](/api/language#initialize)

`Language.initialize`

| Name | Description |
|---|---|
`get_examples` | Function that returns gold-standard annotations in the form of
`Example` |

`Example`

. Callable[[], Iterable[[Example](/api/example)]]

*keyword-only*`nlp`

`nlp`

object. Defaults to `None`

. Optional[[Language](/api/language)][SentenceRecognizer.predict ](#predict)method

Apply the component’s model to a batch of [ Doc](/api/doc) objects, without
modifying them.

| Name | Description |
|---|---|
`docs` | The documents to predict. Iterable[
|

**RETURNS**[SentenceRecognizer.set_annotations ](#set_annotations)method

Modify a batch of [ Doc](/api/doc) objects, using pre-computed scores.

| Name | Description |
|---|---|
`docs` | The documents to modify. Iterable[
|

`scores`

`SentenceRecognizer.predict`

.[SentenceRecognizer.update ](#update)method

Learn from a batch of [ Example](/api/example) objects containing the
predictions and gold-standard annotations, and update the component’s model.
Delegates to

[and](/api/sentencerecognizer#predict)

`predict`

[.](/api/sentencerecognizer#get_loss)

`get_loss`

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |

[Example](/api/example)]

*keyword-only*`drop`

`sgd`

[if not set. Optional[](/api/sentencerecognizer#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]`losses`

**RETURNS**`losses`

dictionary. Dict[str, float][SentenceRecognizer.rehearse ](#rehearse)methodexperimentalv3.0

Perform a “rehearsal” update from a batch of data. Rehearsal updates teach the current model to make predictions similar to an initial model to try to address the “catastrophic forgetting” problem. This feature is experimental.

| Name | Description |
|---|---|
`examples` | A batch of
`Example` |

[Example](/api/example)]

*keyword-only*`drop`

`sgd`

[if not set. Optional[](/api/sentencerecognizer#create_optimizer)`create_optimizer`

[Optimizer](https://thinc.ai/docs/api-optimizers)]`losses`

**RETURNS**`losses`

dictionary. Dict[str, float][SentenceRecognizer.get_loss ](#get_loss)method

Find the loss and gradient of loss for the batch of documents and their predicted scores.

| Name | Description |
|---|---|
`examples` | The batch of examples. Iterable[
|

`scores`

**RETURNS**`(loss, gradient)`

. Tuple[float, float][SentenceRecognizer.create_optimizer ](#create_optimizer)method

Create an optimizer for the pipeline component.

| Name | Description |
|---|---|
RETURNS | The optimizer.
|

[SentenceRecognizer.use_params ](#use_params)methodcontextmanager

Modify the pipe’s model, to use the given parameter values. At the end of the context, the original parameters are restored.

| Name | Description |
|---|---|
`params` | The parameter values to use in the model. dict |

[SentenceRecognizer.to_disk ](#to_disk)method

Serialize the pipe to disk.

| Name | Description |
|---|---|
`path` | A path to a directory, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

[SentenceRecognizer.from_disk ](#from_disk)method

Load the pipe from disk. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`path` | A path to a directory. Paths may be either strings or `Path` -like objects. Union[str,
|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`SentenceRecognizer`

object. SentenceRecognizer[SentenceRecognizer.to_bytes ](#to_bytes)method

Serialize the pipe to a bytestring.

| Name | Description |
|---|---|
keyword-only | |
`exclude` | String names of
|

**RETURNS**`SentenceRecognizer`

object. bytes[SentenceRecognizer.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The data to load from. bytes |
keyword-only | |
`exclude` | String names of
|

**RETURNS**`SentenceRecognizer`

object. SentenceRecognizer[Serialization fields ](#serialization-fields)

During serialization, spaCy will export several data fields used to restore
different aspects of the object. If needed, you can exclude them from
serialization by passing in the string names via the `exclude`

argument.

| Name | Description |
|---|---|
`vocab` | The shared
`Vocab` |

`cfg`

`model`

---

## Source: https://spacy.io/api/sentencizer

# Sentencizer

A simple pipeline component to allow custom sentence boundary detection logic
that doesn’t require the dependency parse. By default, sentence segmentation is
performed by the [ DependencyParser](/api/dependencyparser), so the

`Sentencizer`

lets you implement a simpler, rule-based strategy that doesn’t
require a statistical model to be loaded.[Assigned Attributes ](#assigned-attributes)

Calculated values will be assigned to `Token.is_sent_start`

. The resulting
sentences can be accessed using `Doc.sents`

.

| Location | Value |
|---|---|
`Token.is_sent_start` | A boolean value indicating whether the token starts a sentence. This will be either `True` or `False` for all tokens. bool |
`Doc.sents` | An iterator over sentences in the `Doc` , determined by `Token.is_sent_start` values. Iterator[
|

[Config and implementation ](#config)

The default config is defined by the pipeline component factory and describes
how the component should be configured. You can override its settings via the
`config`

argument on [ nlp.add_pipe](/api/language#add_pipe) or in your

[.](/usage/training#config)

`config.cfg`

for training| Setting | Description |
|---|---|
`punct_chars` | Optional custom list of punctuation characters that mark sentence ends. See below for defaults if not set. Defaults to `None` . Optional[List[str]] |
`overwrite` v3.2 | Whether existing annotation is overwritten. Defaults to `False` . bool |
`scorer` v3.2 | The scoring method. Defaults to
`Scorer.score_spans` |

`"sents"`

Optional[Callable]`explosion/spaCy/master/spacy/pipeline/sentencizer.pyx`


[Sentencizer.__init__ ](#init)method

Initialize the sentencizer.

| Name | Description |
|---|---|
keyword-only | |
`punct_chars` | Optional custom list of punctuation characters that mark sentence ends. See below for defaults. Optional[List[str]] |
`overwrite` v3.2 | Whether existing annotation is overwritten. Defaults to `False` . bool |
`scorer` v3.2 | The scoring method. Defaults to
`Scorer.score_spans` |

`"sents"`

Optional[Callable]## punct_chars defaults


[Sentencizer.__call__ ](#call)method

Apply the sentencizer on a `Doc`

. Typically, this happens automatically after
the component has been added to the pipeline using
[ nlp.add_pipe](/api/language#add_pipe).

| Name | Description |
|---|---|
`doc` | The `Doc` object to process, e.g. the `Doc` in the pipeline.
|
RETURNS | The modified `Doc` with added sentence boundaries.
|

[Sentencizer.pipe ](#pipe)method

Apply the pipe to a stream of documents. This usually happens under the hood
when the `nlp`

object is called on a text and all pipeline components are
applied to the `Doc`

in order.

| Name | Description |
|---|---|
`stream` | A stream of documents. Iterable[
|

*keyword-only*`batch_size`

`128`

. int**YIELDS**[Doc](/api/doc)[Sentencizer.to_disk ](#to_disk)method

Save the sentencizer settings (punctuation characters) to a directory. Will
create a file `sentencizer.json`

. This also happens automatically when you save
an `nlp`

object with a sentencizer added to its pipeline.

| Name | Description |
|---|---|
`path` | A path to a JSON file, which will be created if it doesn’t exist. Paths may be either strings or `Path` -like objects. Union[str,
|

[Sentencizer.from_disk ](#from_disk)method

Load the sentencizer settings from a file. Expects a JSON file. This also
happens automatically when you load an `nlp`

object or model with a sentencizer
added to its pipeline.

| Name | Description |
|---|---|
`path` | A path to a JSON file. Paths may be either strings or `Path` -like objects. Union[str,
|
RETURNS | The modified `Sentencizer` object. Sentencizer |

[Sentencizer.to_bytes ](#to_bytes)method

Serialize the sentencizer settings to a bytestring.

| Name | Description |
|---|---|
RETURNS | The serialized data. bytes |

[Sentencizer.from_bytes ](#from_bytes)method

Load the pipe from a bytestring. Modifies the object in place and returns it.

| Name | Description |
|---|---|
`bytes_data` | The bytestring to load. bytes |
RETURNS | The modified `Sentencizer` object. Sentencizer |