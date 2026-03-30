# Xgboost Documentation
> Scraped on: 2026-03-30 | Root Source: [https://xgboost.readthedocs.io/en/stable/](https://xgboost.readthedocs.io/en/stable/)



---

## Source: https://xgboost.readthedocs.io/en/stable/

# XGBoost Documentation[](#xgboost-documentation)

**XGBoost** is an optimized distributed gradient boosting library designed to be highly **efficient**, **flexible** and **portable**.
It implements machine learning algorithms under the [Gradient Boosting](https://en.wikipedia.org/wiki/Gradient_boosting) framework.
XGBoost provides a parallel tree boosting (also known as GBDT, GBM) that solve many data science problems in a fast and accurate way.
The same code runs on major distributed environment (Hadoop, SGE, MPI) and can solve problems beyond billions of examples.

## Contents[](#contents)

[Installation Guide](install.html)[Building From Source](build.html)[Get Started with XGBoost](get_started.html)[XGBoost Tutorials](tutorials/index.html)[Introduction to Boosted Trees](tutorials/model.html)[Introduction to Model IO](tutorials/saving_model.html)[Slicing Models](tutorials/slicing_model.html)[Learning to Rank](tutorials/learning_to_rank.html)[DART booster](tutorials/dart.html)[Monotonic Constraints](tutorials/monotonic.html)[Feature Interaction Constraints](tutorials/feature_interaction_constraint.html)[Survival Analysis with Accelerated Failure Time](tutorials/aft_survival_analysis.html)[Categorical Data](tutorials/categorical.html)[Multiple Outputs](tutorials/multioutput.html)[Random Forests(TM) in XGBoost](tutorials/rf.html)[Distributed XGBoost on Kubernetes](tutorials/kubernetes.html)[Distributed XGBoost with XGBoost4J-Spark](https://xgboost.readthedocs.io/en/latest/jvm/xgboost4j_spark_tutorial.html)[Distributed XGBoost with XGBoost4J-Spark-GPU](https://xgboost.readthedocs.io/en/latest/jvm/xgboost4j_spark_gpu_tutorial.html)[Distributed XGBoost with Dask](tutorials/dask.html)[Distributed XGBoost with PySpark](tutorials/spark_estimator.html)[Distributed XGBoost with Ray](tutorials/ray.html)[Using XGBoost External Memory Version](tutorials/external_memory.html)[C API Tutorial](tutorials/c_api_tutorial.html)[Text Input Format of DMatrix](tutorials/input_format.html)[Notes on Parameter Tuning](tutorials/param_tuning.html)[Custom Objective and Evaluation Metric](tutorials/custom_metric_obj.html)[Advanced Usage of Custom Objectives](tutorials/advanced_custom_obj.html)[Intercept](tutorials/intercept.html)[Privacy Preserving Inference with Concrete ML](tutorials/privacy_preserving.html)

[Frequently Asked Questions](faq.html)[GPU Support](gpu/index.html)[XGBoost Parameters](parameter.html)[Prediction](prediction.html)[Tree Methods](treemethod.html)[Python Package](python/index.html)[R Package](R-package/index.html)[JVM Package](jvm/index.html)[Ruby Package](https://github.com/ankane/xgboost-ruby)[Swift Package](https://github.com/kongzii/SwiftXGBoost)[Julia Package](julia.html)[C Package](c.html)[C++ Interface](c%2B%2B.html)[Contribute to XGBoost](contrib/index.html)[Release Notes](changes/index.html)[3.2.0 (2026 Feb 09)](changes/v3.2.0.html)[3.1.3 Patch Release (Jan 08 2026)](changes/v3.1.0.html)[3.1.2 Patch Release (Nov 20 2025)](changes/v3.1.0.html#patch-release-nov-20-2025)[3.1.1 Patch Release (Oct 22 2025)](changes/v3.1.0.html#patch-release-oct-22-2025)[3.1.0 (2025 Sep 22)](changes/v3.1.0.html#sep-22)[3.0.3 Patch Release (Jul 30 2025)](changes/v3.0.0.html)[3.0.2 Patch Release (May 25 2025)](changes/v3.0.0.html#patch-release-may-25-2025)[3.0.1 Patch Release (May 13 2025)](changes/v3.0.0.html#patch-release-may-13-2025)[3.0.0 (2025 Feb 27)](changes/v3.0.0.html#feb-27)[2.1.4 Patch Release (2025 Feb 6)](changes/v2.1.0.html)[2.1.3 Patch Release (2024 Nov 26)](changes/v2.1.0.html#patch-release-2024-nov-26)[2.1.2 Patch Release (2024 Oct 23)](changes/v2.1.0.html#patch-release-2024-oct-23)[2.1.1 Patch Release (2024 Jul 31)](changes/v2.1.0.html#patch-release-2024-jul-31)[2.1.0 (2024 Jun 20)](changes/v2.1.0.html#jun-20)

---

## Source: https://xgboost.readthedocs.io/en/stable/install.html

[Installation Guide](#id15)[](#installation-guide)

XGBoost provides binary packages for some language bindings. The binary packages support
the GPU algorithm (`device=cuda:0`

) on machines with NVIDIA GPUs. Please note that
**training with multiple GPUs is only supported for Linux platform**. See
[XGBoost GPU Support](gpu/index.html). Also we have both stable releases and nightly builds, see below for how
to install them. For building from source, visit [this page](build.html).

[Stable Release](#id16)[](#stable-release)

[Python](#id17)[](#python)

Pre-built binary wheels are uploaded to PyPI (Python Package Index) for each release. Supported platforms are Linux (x86_64, aarch64), Windows (x86_64) and MacOS (x86_64, Apple Silicon).

```
# Pip 21.3+ is required
pip install xgboost
```

You might need to run the command with `--user`

flag or use `virtualenv`

if you run
into permission errors.

Note

Parts of the Python package now require glibc 2.28+

Starting from 2.1.0, XGBoost Python package will be distributed in two variants:

`manylinux_2_28`

: for recent Linux distros with glibc 2.28 or newer. This variant comes with all features enabled.`manylinux2014`

: for old Linux distros with glibc older than 2.28. This variant does not support GPU algorithms or federated learning.

The `pip`

package manager will automatically choose the correct variant depending on your system.

Starting from **May 31, 2025**, we will stop distributing the `manylinux2014`

variant and exclusively
distribute the `manylinux_2_28`

variant. We made this decision so that our CI/CD pipeline won’t have
depend on software components that reached end-of-life (such as CentOS 7). We strongly encourage
everyone to migrate to recent Linux distros in order to use future versions of XGBoost.

Note. If you want to use GPU algorithms or federated learning on an older Linux distro, you have two alternatives:

Upgrade to a recent Linux distro with glibc 2.28+. OR

Build XGBoost from the source.


Note

Windows users need to install Visual C++ Redistributable

XGBoost requires DLLs from [Visual C++ Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=48145)
in order to function, so make sure to install it. Exception: If
you have Visual Studio installed, you already have access to
necessary libraries and thus don’t need to install Visual C++
Redistributable.

Capabilities of binary wheels for each platform:

Platform |
GPU |
Multi-Node-Multi-GPU |
|---|---|---|
Linux x86_64 |
✔ |
✔ |
Linux aarch64 |
✔ |
✘ |
MacOS x86_64 |
✘ |
✘ |
MacOS Apple Silicon |
✘ |
✘ |
Windows |
✔ |
✘ |

Linux aarch64 wheels now ship with CUDA support, so `pip install xgboost`

on
modern Jetson or Graviton machines provides the same GPU functionality as the
Linux x86_64 wheel. Multi-node and multi-GPU training remain experimental on
ARM64 at this time.

[Minimal installation (CPU-only)](#id18)[](#minimal-installation-cpu-only)

The default installation with `pip`

will install the full XGBoost package, including the support for the GPU algorithms and federated learning.

You may choose to reduce the size of the installed package and save the disk space, by opting to install `xgboost-cpu`

instead:

```
pip install xgboost-cpu
```

The `xgboost-cpu`

variant will have drastically smaller disk footprint, but does not provide some features, such as the GPU algorithms and
federated learning.

Currently, `xgboost-cpu`

package is provided for x86_64 (amd64) Linux and Windows platforms.

[Conda](#id19)[](#conda)

You may use the Conda packaging manager to install XGBoost:

```
conda install -c conda-forge py-xgboost
```

Conda should be able to detect the existence of a GPU on your machine and install the correct variant of XGBoost. If you run into issues, try indicating the variant explicitly:

```
# CPU variant
conda install -c conda-forge py-xgboost=*=cpu*
# GPU variant
conda install -c conda-forge py-xgboost=*=cuda*
```

To force the installation of the GPU variant on a machine that does not have an NVIDIA GPU, use environment variable `CONDA_OVERRIDE_CUDA`

,
as described in [“Managing Virtual Packages” in the conda docs](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-virtual.html).

```
export CONDA_OVERRIDE_CUDA="12.8"
conda install -c conda-forge py-xgboost=*=cuda*
```

You can install Conda from the following link: [Download the conda-forge Installer](https://conda-forge.org/download/).

[R](#id20)[](#r)

From R Universe


```
install.packages('xgboost', repos = c('https://dmlc.r-universe.dev', 'https://cloud.r-project.org'))
```

Note

Using all CPU cores (threads) on Mac OSX

If you are using Mac OSX, you should first install OpenMP library (`libomp`

) by running

```
brew install libomp
```

and then run `install.packages("xgboost")`

. Without OpenMP, XGBoost will only use a
single CPU core, leading to suboptimal training speed.

We also provide

**experimental**pre-built binary with GPU support. With this binary, you will be able to use the GPU algorithm without building XGBoost from the source. Download the binary package from the Releases page. The file name will be of the form`xgboost_r_gpu_[os]_[version].tar.gz`

, where`[os]`

is either`linux`

or`win64`

. (We build the binaries for 64-bit Linux and Windows.) Then install XGBoost by running:# Install dependencies R -q -e "install.packages(c('data.table', 'jsonlite'))" # Install XGBoost R CMD INSTALL ./xgboost_r_gpu_linux.tar.gz

From CRAN (outdated):


Warning

We are working on bringing the CRAN version of XGBoost up-to-date, in the meantime, please use packages from the R-universe.

```
install.packages("xgboost")
```

Note

Using all CPU cores (threads) on Mac OSX

If you are using Mac OSX, you should first install OpenMP library (`libomp`

) by running

```
brew install libomp
```

and then run `install.packages("xgboost")`

. Without OpenMP, XGBoost will only use a
single CPU core, leading to suboptimal training speed.

[JVM](#id21)[](#jvm)

XGBoost4j-Spark


```
<properties>
...
<!-- Specify Scala version in package name -->
<scala.binary.version>2.12</scala.binary.version>
</properties>
<dependencies>
...
<dependency>
<groupId>ml.dmlc</groupId>
<artifactId>xgboost4j-spark_${scala.binary.version}</artifactId>
<version>latest_version_num</version>
</dependency>
</dependencies>
```

```
libraryDependencies ++= Seq(
"ml.dmlc" %% "xgboost4j-spark" % "latest_version_num"
)
```

XGBoost4j-Spark-GPU


```
<properties>
...
<!-- Specify Scala version in package name -->
<scala.binary.version>2.12</scala.binary.version>
</properties>
<dependencies>
...
<dependency>
<groupId>ml.dmlc</groupId>
<artifactId>xgboost4j-spark-gpu_${scala.binary.version}</artifactId>
<version>latest_version_num</version>
</dependency>
</dependencies>
```

```
libraryDependencies ++= Seq(
"ml.dmlc" %% "xgboost4j-spark-gpu" % "latest_version_num"
)
```

This will check out the latest stable version from the Maven Central.

For the latest release version number, please check [release page](https://github.com/dmlc/xgboost/releases).

To enable the GPU algorithm (`device='cuda'`

), use artifacts `xgboost4j-spark-gpu_2.12`

instead (note the `gpu`

suffix).

Note

Windows not supported in the JVM package

Currently, XGBoost4J-Spark does not support Windows platform, as the distributed training algorithm is inoperational for Windows. Please use Linux or MacOS.

[Nightly Build](#id22)[](#nightly-build)

[Python](#id23)[](#id1)

Nightly builds are available. You can go to [this page](https://s3-us-west-2.amazonaws.com/xgboost-nightly-builds/list.html),
find the wheel with the commit ID you want and install it with pip:

```
pip install <url to the wheel>
```

The capability of Python pre-built wheel is the same as stable release.

[R](#id24)[](#id2)

Other than standard CRAN installation, we also provide *experimental* pre-built binary on
with GPU support. You can go to [this page](https://s3-us-west-2.amazonaws.com/xgboost-nightly-builds/list.html), Find the commit
ID you want to install and then locate the file `xgboost_r_gpu_[os]_[commit].tar.gz`

,
where `[os]`

is either `linux`

or `win64`

. (We build the binaries for 64-bit Linux
and Windows.) Download it and run the following commands:

```
# Install dependencies
R -q -e "install.packages(c('data.table', 'jsonlite', 'remotes'))"
# Install XGBoost
R CMD INSTALL ./xgboost_r_gpu_linux.tar.gz
```

[JVM](#id25)[](#id4)

XGBoost4j/XGBoost4j-Spark


```
<repository>
<id>XGBoost4J Snapshot Repo</id>
<name>XGBoost4J Snapshot Repo</name>
<url>https://s3-us-west-2.amazonaws.com/xgboost-maven-repo/snapshot/</url>
</repository>
```

```
resolvers += "XGBoost4J Snapshot Repo" at "https://s3-us-west-2.amazonaws.com/xgboost-maven-repo/snapshot/"
```

Then add XGBoost4J-Spark as a dependency:

```
<properties>
...
<!-- Specify Scala version in package name -->
<scala.binary.version>2.12</scala.binary.version>
</properties>
<dependencies>
<dependency>
<groupId>ml.dmlc</groupId>
<artifactId>xgboost4j-spark_${scala.binary.version}</artifactId>
<version>latest_version_num-SNAPSHOT</version>
</dependency>
</dependencies>
```

```
libraryDependencies ++= Seq(
"ml.dmlc" %% "xgboost4j-spark" % "latest_version_num-SNAPSHOT"
)
```

XGBoost4j-Spark-GPU


```
<properties>
...
<!-- Specify Scala version in package name -->
<scala.binary.version>2.12</scala.binary.version>
</properties>
<dependencies>
<dependency>
<groupId>ml.dmlc</groupId>
<artifactId>xgboost4j-spark-gpu_${scala.binary.version}</artifactId>
<version>latest_version_num-SNAPSHOT</version>
</dependency>
</dependencies>
```

```
libraryDependencies ++= Seq(
"ml.dmlc" %% "xgboost4j-spark-gpu" % "latest_version_num-SNAPSHOT"
)
```

Look up the `version`

field in [pom.xml](https://github.com/dmlc/xgboost/blob/master/jvm-packages/pom.xml) to get the correct version number.

The SNAPSHOT JARs are hosted by the XGBoost project. Every commit in the `master`

branch will automatically trigger generation of a new SNAPSHOT JAR. You can control how often Maven should upgrade your SNAPSHOT installation by specifying `updatePolicy`

. See [here](http://maven.apache.org/pom.html#Repositories) for details.

You can browse the file listing of the Maven repository at [https://s3-us-west-2.amazonaws.com/xgboost-maven-repo/list.html](https://s3-us-west-2.amazonaws.com/xgboost-maven-repo/list.html).

To enable the GPU algorithm (`device='cuda'`

), use artifacts `xgboost4j-gpu_2.12`

and `xgboost4j-spark-gpu_2.12`

instead (note the `gpu`

suffix).

---

## Source: https://xgboost.readthedocs.io/en/stable/build.html

# Building From Source[](#building-from-source)

This page gives instructions on how to build and install XGBoost from the source code on
various systems. If the instructions do not work for you, please feel free to ask
questions at [GitHub](https://github.com/dmlc/xgboost/issues).

Note

Pre-built binary is available: now with GPU support

Consider installing XGBoost from a pre-built binary, to avoid the trouble of building XGBoost from the source. Checkout [Installation Guide](install.html).

[Obtaining the Source Code](#id2)[](#obtaining-the-source-code)

To obtain the development repository of XGBoost, one needs to use `git`

. XGBoost uses
Git submodules to manage dependencies. So when you clone the repo, remember to specify
`--recursive`

option:

git clone --recursive https://github.com/dmlc/xgboost

[Building Python Package from Source](#id7)[](#building-python-package-from-source)

The Python package is located at `python-package/`

.

[Building Python Package with Default Toolchains](#id8)[](#building-python-package-with-default-toolchains)

There are several ways to build and install the package from source:

Build C++ core with CMake first


You can first build C++ library using CMake as described in

[Building the Shared Library]. After compilation, a shared library will appear in`lib/`

directory. On Linux distributions, the shared library is`lib/libxgboost.so`

. The install script`pip install .`

will reuse the shared library instead of compiling it from scratch, making it quite fast to run.$ cd python-package/ $ pip install . # Will re-use lib/libxgboost.so

Install the Python package directly


If the shared object is not present, the Python project setup script will try to run the CMake build command automatically. Navigate to the

`python-package/`

directory and install the Python package by running:$ cd python-package/ $ pip install -v . # Builds the shared object automatically.which will compile XGBoost’s native (C++) code using default CMake flags. To enable additional compilation options, pass corresponding

`--config-settings`

:$ pip install -v . --config-settings use_cuda=True --config-settings use_nccl=TrueUse Pip 22.1 or later to use

`--config-settings`

option.Here are the available options for

`--config-settings`

:@dataclasses.dataclass class BuildConfiguration: # pylint: disable=R0902 """Configurations use when building libxgboost""" # Whether to hide C++ symbols in libxgboost.so hide_cxx_symbols: bool = True # Whether to enable OpenMP use_openmp: bool = True # Whether to enable CUDA use_cuda: bool = False # Whether to enable NCCL use_nccl: bool = False # Whether to load nccl dynamically use_dlopen_nccl: bool = False # Whether to enable federated learning plugin_federated: bool = False # Whether to enable rmm support plugin_rmm: bool = False # Special option: See explanation below use_system_libxgboost: bool = False

`use_system_libxgboost`

is a special option. See Item 4 below for detailed description.Note

Verbose flag recommended

As

`pip install .`

will build C++ code, it will take a while to complete. To ensure that the build is progressing successfully, we suggest that you add the verbose flag (`-v`

) when invoking`pip install`

.

Editable installation


To further enable rapid development and iteration, we provide an

editable installation. In an editable installation, the installed package is simply a symbolic link to your working copy of the XGBoost source code. So every changes you make to your source directory will be immediately visible to the Python interpreter. To install XGBoost as editable installation, first build the shared library as previously described in[Running CMake and build], then install the Python package with the`-e`

flag:# Build shared library libxgboost.so cmake -B build -S . -GNinja cd build && ninja # Install as editable installation cd ../python-package pip install -e .

Reuse the

`libxgboost.so`

on system path.

This option is useful for package managers that wish to separately package

`libxgboost.so`

and the XGBoost Python package. For example, Conda publishes`libxgboost`

(for the shared library) and`py-xgboost`

(for the Python package).To use this option, first make sure that

`libxgboost.so`

exists in the system library path:import sys import pathlib libpath = pathlib.Path(sys.base_prefix).joinpath("lib", "libxgboost.so") assert libpath.exists()Then pass

`use_system_libxgboost=True`

option to`pip install`

:cd python-package pip install . --config-settings use_system_libxgboost=True

Note

See [Notes on packaging XGBoost’s Python package](contrib/python_packaging.html) for instructions on packaging and distributing
XGBoost as Python distributions.

[Building R Package From Source](#id9)[](#building-r-package-from-source)

By default, the package installed by running `install.packages`

is built from source
using the package from [CRAN](https://cran.r-project.org/). Here we list some other
options for installing development version.

[Installing the development version (Linux / Mac OSX)](#id10)[](#installing-the-development-version-linux-mac-osx)

Make sure you have installed git and a recent C++ compiler supporting C++11 (See above sections for requirements of building C++ core).

Due to the use of git-submodules, `remotes::install_github()`

cannot be used to
install the latest version of R package. Thus, one has to run git to check out the code
first, see [Obtaining the Source Code](#get-source) on how to initialize the git repository for XGBoost. The
simplest way to install the R package after obtaining the source code is:

```
cd R-package
R CMD INSTALL .
```

Use the environment variable `MAKEFLAGS=-j$(nproc)`

if you want to speedup the build. As
an alternative, the package can also be loaded through `devtools::load_all()`

from the
same subfolder `R-package`

in the repository’s root, and by extension, can be installed
through RStudio’s build panel if one adds that folder `R-package`

as an R package
project in the RStudio IDE.

```
library(devtools)
devtools::load_all(path = "/path/to/xgboost/R-package")
```

On Linux, if you want to use the CMake build for greater flexibility around compile flags, the earlier snippet can be replaced by:

```
cmake -B build -S . -DR_LIB=ON -GNinja
cd build && ninja install
```

Warning

MSVC is not supported for the R package as it has difficulty handling R C headers. CMake build is not supported either.

Note in this case that `cmake`

will not take configurations from your regular
`Makevars`

file (if you have such a file under `~/.R/Makevars`

) - instead, custom
configurations such as compilers to use and flags need to be set through CMake variables
like `-DCMAKE_CXX_COMPILER`

.

[Building R package with GPU support](#id11)[](#building-r-package-with-gpu-support)

The procedure and requirements are similar as in [Building with GPU support](#build-gpu-support), so make sure to read it first.

On Linux, starting from the XGBoost directory type:

```
cmake -B build -S . -DUSE_CUDA=ON -DR_LIB=ON
cmake --build build --target install -j$(nproc)
```

When default target is used, an R package shared library would be built in the `build`

area.
The `install`

target, in addition, assembles the package files with this shared library under `build/R-package`

and runs `R CMD INSTALL`

.

[Building JVM Packages](#id12)[](#building-jvm-packages)

Building XGBoost4J using Maven requires Maven 3 or newer, Java 7+ and CMake 3.18+ for
compiling Java code as well as the Java Native Interface (JNI) bindings. In addition, a
Python script is used during configuration, make sure the command `python`

is available
on your system path (some distros use the name `python3`

instead of `python`

).

Before you install XGBoost4J, you need to define environment variable `JAVA_HOME`

as your JDK directory to ensure that your compiler can find `jni.h`

correctly, since XGBoost4J relies on JNI to implement the interaction between the JVM and native libraries.

After your `JAVA_HOME`

is defined correctly, it is as simple as run `mvn package`

under jvm-packages directory to install XGBoost4J. You can also skip the tests by running `mvn -DskipTests=true package`

, if you are sure about the correctness of your local setup.

To publish the artifacts to your local maven repository, run

```
mvn install
```

Or, if you would like to skip tests, run

```
mvn -DskipTests install
```

This command will publish the xgboost binaries, the compiled java classes as well as the java sources to your local repository. Then you can use XGBoost4J in your Java projects by including the following dependency in `pom.xml`

:

```
<dependency>
<groupId>ml.dmlc</groupId>
<artifactId>xgboost4j</artifactId>
<version>latest_source_version_num</version>
</dependency>
```

For sbt, please add the repository and dependency in build.sbt as following:

```
resolvers += "Local Maven Repository" at "file://"+Path.userHome.absolutePath+"/.m2/repository"
"ml.dmlc" % "xgboost4j" % "latest_source_version_num"
```

If you want to use XGBoost4J-Spark, replace `xgboost4j`

with `xgboost4j-spark`

.

Note

XGBoost4J-Spark requires Apache Spark 2.3+

XGBoost4J-Spark now requires **Apache Spark 3.4+**. Latest versions of XGBoost4J-Spark uses facilities of org.apache.spark.ml.param.shared extensively to provide for a tight integration with Spark MLLIB framework, and these facilities are not fully available on earlier versions of Spark.

Also, make sure to install Spark directly from [Apache website](https://spark.apache.org/). **Upstream XGBoost is not guaranteed to work with third-party distributions of Spark, such as Cloudera Spark.** Consult appropriate third parties to obtain their distribution of XGBoost.

[Additional System-dependent Features](#id13)[](#additional-system-dependent-features)

OpenMP on MacOS: See

[Running CMake and build](#running-cmake-and-build)for installing`openmp`

. The flag -`mvn -Duse.openmp=OFF`

can be used to disable OpenMP support.GPU support can be enabled by passing an additional flag to maven

`mvn -Duse.cuda=ON install`

. See[Building with GPU support](#build-gpu-support)for more info. In addition,`-Dplugin.rmm=ON`

can enable the optional RMM support.

[Building the Documentation](#id14)[](#building-the-documentation)

XGBoost uses [Sphinx](https://www.sphinx-doc.org/en/stable/) for documentation. To
build it locally, you need a installed XGBoost with all its dependencies along with:

System dependencies

git

graphviz


Python dependencies

Checkout the

`requirements.txt`

file under`doc/`


Under `xgboost/doc`

directory, run `make <format>`

with `<format>`

replaced by the
format you want. For a list of supported formats, run `make help`

under the same
directory. This builds a partial document for Python but not other language bindings. To
build the full document, see [Documentation and Examples](contrib/docs.html).

---

## Source: https://xgboost.readthedocs.io/en/stable/get_started.html

# Get Started with XGBoost[](#get-started-with-xgboost)

This is a quick start tutorial showing snippets for you to quickly try out XGBoost on the demo dataset on a binary classification task.

## Links to Other Helpful Resources[](#links-to-other-helpful-resources)

See

[Installation Guide](install.html)on how to install XGBoost.See

[Text Input Format](tutorials/input_format.html)on using text format for specifying training/testing data.See

[Tutorials](tutorials/index.html)for tips and tutorials.See

[Learning to use XGBoost by Examples](https://github.com/dmlc/xgboost/tree/master/demo)for more code examples.

## Python[](#python)

```
from xgboost import XGBClassifier
# read data
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
data = load_iris()
X_train, X_test, y_train, y_test = train_test_split(data['data'], data['target'], test_size=.2)
# create model instance
bst = XGBClassifier(n_estimators=2, max_depth=2, learning_rate=1, objective='binary:logistic')
# fit model
bst.fit(X_train, y_train)
# make predictions
preds = bst.predict(X_test)
```

## R[](#r)

```
# load data
data(agaricus.train, package='xgboost')
data(agaricus.test, package='xgboost')
train <- agaricus.train
test <- agaricus.test
# fit model
bst <- xgboost(x = train$data, y = factor(train$label),
max.depth = 2, eta = 1, nrounds = 2,
nthread = 2, objective = "binary:logistic")
# predict
pred <- predict(bst, test$data)
```

## Julia[](#julia)

```
using XGBoost
# read data
train_X, train_Y = readlibsvm("demo/data/agaricus.txt.train", (6513, 126))
test_X, test_Y = readlibsvm("demo/data/agaricus.txt.test", (1611, 126))
# fit model
num_round = 2
bst = xgboost(train_X, num_round, label=train_Y, eta=1, max_depth=2)
# predict
pred = predict(bst, test_X)
```

## Scala[](#scala)

```
import ml.dmlc.xgboost4j.scala.DMatrix
import ml.dmlc.xgboost4j.scala.XGBoost
object XGBoostScalaExample {
def main(args: Array[String]) {
// read trainining data, available at xgboost/demo/data
val trainData =
new DMatrix("/path/to/agaricus.txt.train")
// define parameters
val paramMap = List(
"eta" -> 0.1,
"max_depth" -> 2,
"objective" -> "binary:logistic").toMap
// number of iterations
val round = 2
// train the model
val model = XGBoost.train(trainData, paramMap, round)
// run prediction
val predTrain = model.predict(trainData)
// save model to the file.
model.saveModel("/local/path/to/model")
}
}
```

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/index.html

# XGBoost Tutorials[](#xgboost-tutorials)

This section contains official tutorials inside XGBoost package.
See [Awesome XGBoost](https://github.com/dmlc/xgboost/tree/master/demo) for more resources. Also, don’t miss the feature introductions in each package.

[Introduction to Boosted Trees](model.html)[Introduction to Model IO](saving_model.html)[Slicing Models](slicing_model.html)[Learning to Rank](learning_to_rank.html)[DART booster](dart.html)[Monotonic Constraints](monotonic.html)[Feature Interaction Constraints](feature_interaction_constraint.html)[Survival Analysis with Accelerated Failure Time](aft_survival_analysis.html)[Categorical Data](categorical.html)[Multiple Outputs](multioutput.html)[Random Forests(TM) in XGBoost](rf.html)[Distributed XGBoost on Kubernetes](kubernetes.html)[Distributed XGBoost with XGBoost4J-Spark](https://xgboost.readthedocs.io/en/latest/jvm/xgboost4j_spark_tutorial.html)[Distributed XGBoost with XGBoost4J-Spark-GPU](https://xgboost.readthedocs.io/en/latest/jvm/xgboost4j_spark_gpu_tutorial.html)[Distributed XGBoost with Dask](dask.html)[Distributed XGBoost with PySpark](spark_estimator.html)[Distributed XGBoost with Ray](ray.html)[Using XGBoost External Memory Version](external_memory.html)[C API Tutorial](c_api_tutorial.html)[Text Input Format of DMatrix](input_format.html)[Notes on Parameter Tuning](param_tuning.html)[Custom Objective and Evaluation Metric](custom_metric_obj.html)[Advanced Usage of Custom Objectives](advanced_custom_obj.html)[Intercept](intercept.html)[Privacy Preserving Inference with Concrete ML](privacy_preserving.html)

---

## Source: https://xgboost.readthedocs.io/en/stable/faq.html

# Frequently Asked Questions[](#frequently-asked-questions)

This document contains frequently asked questions about XGBoost.

## How to tune parameters[](#how-to-tune-parameters)

## Description of the model[](#description-of-the-model)

## I have a big dataset[](#i-have-a-big-dataset)

XGBoost is designed to be memory efficient. Usually it can handle problems as long as the data fits into your memory. This usually means millions of instances.

If you are running out of memory, checkout the tutorial page for using [distributed training](tutorials/index.html) with one of the many frameworks, or the [external memory version](tutorials/external_memory.html) for using external memory.

## How to handle categorical feature?[](#how-to-handle-categorical-feature)

Visit [this tutorial](tutorials/categorical.html) for a walkthrough of categorical data handling and some worked examples.

## Why not implement distributed XGBoost on top of X (Spark, Hadoop)?[](#why-not-implement-distributed-xgboost-on-top-of-x-spark-hadoop)

The first fact we need to know is going distributed does not necessarily solve all the problems. Instead, it creates more problems such as more communication overhead and fault tolerance. The ultimate question will still come back to how to push the limit of each computation node and use less resources to complete the task (thus with less communication and chance of failure).

To achieve these, we decide to reuse the optimizations in the single node XGBoost and build the distributed version on top of it. The demand for communication in machine learning is rather simple, in the sense that we can depend on a limited set of APIs. Such design allows us to reuse most of the code, while being portable to major platforms such as Hadoop/Yarn, MPI, SGE. Most importantly, it pushes the limit of the computation resources we can use.

## How can I port a model to my own system?[](#how-can-i-port-a-model-to-my-own-system)

The model and data format of XGBoost are exchangeable,
which means the model trained by one language can be loaded in another.
This means you can train the model using R, while running prediction using
Java or C++, which are more common in production systems.
You can also train the model using distributed versions,
and load them in from Python to do some interactive analysis. See [Model IO](tutorials/saving_model.html) for more information.

## Do you support LambdaMART?[](#do-you-support-lambdamart)

Yes, XGBoost implements LambdaMART. Checkout the objective section in [parameters](parameter.html).

## How to deal with missing values[](#how-to-deal-with-missing-values)

XGBoost supports missing values by default. In tree algorithms, branch directions for missing values are learned during training. Note that the gblinear booster treats missing values as zeros.

When the `missing`

parameter is specified, values in the input predictor that is equal to
`missing`

will be treated as missing and removed. By default it’s set to `NaN`

.

## Slightly different result between runs[](#slightly-different-result-between-runs)

This could happen, due to non-determinism in floating point summation order and multi-threading. Also, data partitioning changes by distributed framework can be an issue as well. Though the general accuracy will usually remain the same.

## Why do I see different results with sparse and dense data?[](#why-do-i-see-different-results-with-sparse-and-dense-data)

“Sparse” elements are treated as if they were “missing” by the tree booster, and as zeros by the linear booster. However, if we convert the sparse matrix back to dense matrix, the sparse matrix might fill the missing entries with 0, which is a valid value for xgboost. In short, sparse matrix implementations like scipy treats 0 as missing, while 0 is a valid split value for XGBoost decision trees.

---

## Source: https://xgboost.readthedocs.io/en/stable/gpu/index.html

# XGBoost GPU Support[](#xgboost-gpu-support)

This page contains information about GPU algorithms supported in XGBoost.

Note

CUDA 12.0, Compute Capability 5.0 required (See [this list](https://en.wikipedia.org/wiki/CUDA#GPUs_supported) to look up compute capability of your GPU card.)

## CUDA Accelerated Tree Construction Algorithms[](#cuda-accelerated-tree-construction-algorithms)

Most of the algorithms in XGBoost including training, prediction and evaluation can be accelerated with CUDA-capable GPUs.

### Usage[](#usage)

To enable GPU acceleration, specify the `device`

parameter as `cuda`

. In addition, the device ordinal (which GPU to use if you have multiple devices in the same node) can be specified using the `cuda:<ordinal>`

syntax, where `<ordinal>`

is an integer that represents the device ordinal. XGBoost defaults to 0 (the first device reported by CUDA runtime).

The GPU algorithms currently work with CLI, Python, R, and JVM packages. See [Installation Guide](../install.html) for details.

```
params = dict()
params["device"] = "cuda"
params["tree_method"] = "hist"
Xy = xgboost.QuantileDMatrix(X, y)
xgboost.train(params, Xy)
```

```
XGBRegressor(tree_method="hist", device="cuda")
```

### GPU-Accelerated SHAP values[](#gpu-accelerated-shap-values)

XGBoost makes use of [GPUTreeShap](https://github.com/rapidsai/gputreeshap) as a backend for computing shap values when the GPU is used.

```
booster.set_param({"device": "cuda:0"})
shap_values = booster.predict(dtrain, pred_contribs=True)
shap_interaction_values = model.predict(dtrain, pred_interactions=True)
```

See [Use GPU to speedup SHAP value computation](../python/examples/gpu_tree_shap.html#sphx-glr-python-examples-gpu-tree-shap-py) for a worked example.

### Multi-node Multi-GPU Training[](#multi-node-multi-gpu-training)

XGBoost supports fully distributed GPU training using [Dask](https://dask.org/), `Spark`

and `PySpark`

. For getting started with Dask see our tutorial [Distributed XGBoost with Dask](../tutorials/dask.html) and worked examples [XGBoost Dask Feature Walkthrough](../python/dask-examples/index.html), also Python documentation [Dask API](../python/python_api.html#dask-api) for complete reference. For usage with `Spark`

using Scala see [XGBoost4J-Spark-GPU Tutorial](../jvm/xgboost4j_spark_gpu_tutorial.html). Lastly for distributed GPU training with `PySpark`

, see [Distributed XGBoost with PySpark](../tutorials/spark_estimator.html).

### RMM integration[](#rmm-integration)

XGBoost provides optional support for RMM integration. See [Using XGBoost with RAPIDS Memory Manager (RMM) plugin](../python/rmm-examples/index.html) for more info.

### Memory usage[](#memory-usage)

The following are some guidelines on the device memory usage of the `hist`

tree method on GPU.

Memory inside xgboost training is generally allocated for two reasons - storing the dataset and working memory.

The dataset itself is stored on device in a compressed ELLPACK format. The ELLPACK format is a type of sparse matrix that stores elements with a constant row stride. This format is convenient for parallel computation when compared to CSR because the row index of each element is known directly from its address in memory. The disadvantage of the ELLPACK format is that it becomes less memory efficient if the maximum row length is significantly more than the average row length. Elements are quantised and stored as integers. These integers are compressed to a minimum bit length. Depending on the number of features, we usually don’t need the full range of a 32 bit integer to store elements and so compress this down. The compressed, quantised ELLPACK format will commonly use 1/4 the space of a CSR matrix stored in floating point.

Working memory is allocated inside the algorithm proportional to the number of rows to keep track of gradients, tree positions and other per row statistics. Memory is allocated for histogram bins proportional to the number of bins, number of features and nodes in the tree. For performance reasons we keep histograms in memory from previous nodes in the tree, when a certain threshold of memory usage is passed we stop doing this to conserve memory at some performance loss.

If you are getting out-of-memory errors on a big dataset, try the
[ xgboost.QuantileDMatrix](../python/python_api.html#xgboost.QuantileDMatrix) first. If you have access to NVLink-C2C devices, see

[external memory version](../tutorials/external_memory.html). In addition,

[should be preferred over](../python/python_api.html#xgboost.Booster.inplace_predict)

`inplace_predict()`

`predict`

when data
is already on GPU. Both [and](../python/python_api.html#xgboost.QuantileDMatrix)

`xgboost.QuantileDMatrix`

[are automatically enabled if you are using the scikit-learn interface. Last but not least, using](../python/python_api.html#xgboost.Booster.inplace_predict)

`inplace_predict()`

[with a data iterator as input is a great way to increase memory capacity, see](../python/python_api.html#xgboost.QuantileDMatrix)

`QuantileDMatrix`

[Demo for using data iterator with Quantile DMatrix](../python/examples/quantile_data_iterator.html#sphx-glr-python-examples-quantile-data-iterator-py).

### CPU-GPU Interoperability[](#cpu-gpu-interoperability)

The model can be used on any device regardless of the one used to train it. For instance, a model trained using GPU can still work on a CPU-only machine and vice versa. For more information about model serialization, see [Introduction to Model IO](../tutorials/saving_model.html).

### Developer notes[](#developer-notes)

The application may be profiled with annotations by specifying `USE_NTVX`

to cmake. Regions covered by the ‘Monitor’ class in CUDA code will automatically appear in the nsight profiler when verbosity is set to 3.

## References[](#references)

[NVIDIA Parallel Forall: Gradient Boosting, Decision Trees and XGBoost with CUDA](https://devblogs.nvidia.com/parallelforall/gradient-boosting-decision-trees-xgboost-cuda/)

[Out-of-Core GPU Gradient Boosting](https://arxiv.org/abs/2005.09148)

### Contributors[](#contributors)

Many thanks to the following contributors (alphabetical order):

Andrey Adinets

Jiaming Yuan

Jonathan C. McKinney

Matthew Jones

Philip Cho

Rong Ou

Rory Mitchell

Shankara Rao Thejaswi Nanditale

Sriram Chandramouli

Vinay Deshpande


Please report bugs to the XGBoost [issues list](https://github.com/dmlc/xgboost/issues).

---

## Source: https://xgboost.readthedocs.io/en/stable/parameter.html

# XGBoost Parameters[](#xgboost-parameters)

Before running XGBoost, we must set three types of parameters: general parameters, booster parameters and task parameters.

**General parameters**relate to which booster we are using to do boosting, commonly tree or linear model**Booster parameters**depend on which booster you have chosen**Learning task parameters**decide on the learning scenario. For example, regression tasks may use different parameters with ranking tasks.

Note

Parameters in R package

In R-package, you can use `.`

(dot) to replace underscore in the parameters, for example, you can use `max.depth`

to indicate `max_depth`

. The underscore parameters are also valid in R.

## Global Configuration[](#global-configuration)

The following parameters can be set in the global scope, using [ xgboost.config_context()](python/python_api.html#xgboost.config_context) (Python) or

`xgb.set.config()`

(R).`verbosity`

: Verbosity of printing messages. Valid values of 0 (silent), 1 (warning), 2 (info), and 3 (debug).`use_rmm`

: Whether to use RAPIDS Memory Manager (RMM) to allocate cache GPU memory. The primary memory is always allocated on the RMM pool when XGBoost is built (compiled) with the RMM plugin enabled. Valid values are`true`

and`false`

. See[Using XGBoost with RAPIDS Memory Manager (RMM) plugin](python/rmm-examples/index.html)for details.`use_cuda_async_pool`

[default=false]Whether to use the device memory pool in the CUDA driver. This option is not available if XGBoost is built with RMM support, as it is the same as using the RMM CudaAsyncMemoryResource pool.

Added in version 3.2.0.

Warning

This is an experimental feature and is subject to change without notice. Windows is not supported yet.

`nthread`

: Set the global number of threads for OpenMP. Use this only when you need to override some OpenMP-related environment variables like`OMP_NUM_THREADS`

. Otherwise, the`nthread`

parameter from the Booster and the DMatrix should be preferred as the former sets the global variable and might cause conflicts with other libraries.

## General Parameters[](#general-parameters)

`booster`

[default=`gbtree`

]Which booster to use. Can be

`gbtree`

,`gblinear`

or`dart`

;`gbtree`

and`dart`

use tree based models while`gblinear`

uses linear functions.

`device`

[default=`cpu`

]Added in version 2.0.0.

Device for XGBoost to run. User can set it to one of the following values:

`cpu`

: Use CPU.`cuda`

: Use a GPU (CUDA device).`cuda:<ordinal>`

:`<ordinal>`

is an integer that specifies the ordinal of the GPU (which GPU do you want to use if you have more than one devices).`gpu`

: Default GPU device selection from the list of available and supported devices. Only`cuda`

devices are supported currently.`gpu:<ordinal>`

: Default GPU device selection from the list of available and supported devices. Only`cuda`

devices are supported currently.

For more information about GPU acceleration, see

[XGBoost GPU Support](gpu/index.html). In distributed environments, ordinal selection is handled by distributed frameworks instead of XGBoost. As a result, using`cuda:<ordinal>`

will result in an error. Use`cuda`

instead.

`verbosity`

[default=1]Verbosity of printing messages. Valid values are 0 (silent), 1 (warning), 2 (info), 3 (debug). Sometimes XGBoost tries to change configurations based on heuristics, which is displayed as warning message. If there’s unexpected behaviour, please try to increase value of verbosity.


`validate_parameters`

[default to`false`

, except for Python, R and CLI interface]When set to True, XGBoost will perform validation of input parameters to check whether a parameter is used or not. A warning is emitted when there’s unknown parameter.


`nthread`

[default to maximum number of threads available if not set]Number of parallel threads used to run XGBoost. When choosing it, please keep thread contention and hyperthreading in mind.


`disable_default_eval_metric`

[default=`false`

]Flag to disable default metric. Set to 1 or

`true`

to disable.


### Parameters for Tree Booster[](#parameters-for-tree-booster)

`eta`

[default=0.3, alias:`learning_rate`

]Step size shrinkage used in update to prevent overfitting. After each boosting step, we can directly get the weights of new features, and

`eta`

shrinks the feature weights to make the boosting process more conservative.range: [0,1]


`gamma`

[default=0, alias:`min_split_loss`

]Minimum loss reduction required to make a further partition on a leaf node of the tree. The larger

`gamma`

is, the more conservative the algorithm will be. Note that a tree where no splits were made might still contain a single terminal node with a non-zero score. This is the same \(\gamma\) described in the[Introduction to Boosted Trees](tutorials/model.html).range: [0,∞]


`max_depth`

[default=6, type=int32]Maximum depth of a tree. Increasing this value will make the model more complex and more likely to overfit. 0 indicates no limit on depth. Beware that XGBoost aggressively consumes memory when training a deep tree.

`exact`

tree method requires non-zero value.range: [0,∞]


`min_child_weight`

[default=1]Minimum sum of instance weight (hessian) needed in a child. If the tree partition step results in a leaf node with the sum of instance weight less than

`min_child_weight`

, then the building process will give up further partitioning. In linear regression task, this simply corresponds to minimum number of instances needed to be in each node. The larger`min_child_weight`

is, the more conservative the algorithm will be.range: [0,∞]


`max_delta_step`

[default=0]Maximum delta step we allow each leaf output to be. If the value is set to 0, it means there is no constraint. If it is set to a positive value, it can help making the update step more conservative. Usually this parameter is not needed, but it might help in logistic regression when class is extremely imbalanced. Set it to value of 1-10 might help control the update.

range: [0,∞]


`subsample`

[default=1]Subsample ratio of the training instances. Setting it to 0.5 means that XGBoost would randomly sample half of the training data prior to growing trees. and this will prevent overfitting. Subsampling will occur once in every boosting iteration.

range: (0,1]


`sampling_method`

[default=`uniform`

]

Changed in version 3.2.0:

XGBoost supports both CPU and GPU for gradient-based sampling.


The method to use to sample the training instances.

`uniform`

: each training instance has an equal probability of being selected. Typically set`subsample`

>= 0.5 for good results.`gradient_based`

: the selection probability for each training instance is proportional to the*regularized absolute value*of gradients (more specifically, \(\sqrt{g^2+\lambda h^2}\)).`subsample`

may be set to as low as 0.1 without loss of model accuracy. Note that this sampling method is only supported when`tree_method`

is set to`hist`

; other tree methods only support`uniform`

sampling.

Note

When working with reduced gradient for multi-target models, the accuracy of gradient-based sampling might be sub-optimal. The sampling is performed using the split gradient, which may not be optimal with the full gradient. Use uniform sampling as an alternative.

`colsample_bytree`

,`colsample_bylevel`

,`colsample_bynode`

[default=1]This is a family of parameters for subsampling of columns.

All

`colsample_by*`

parameters have a range of (0, 1], the default value of 1, and specify the fraction of columns to be subsampled.`colsample_bytree`

is the subsample ratio of columns when constructing each tree. Subsampling occurs once for every tree constructed.`colsample_bylevel`

is the subsample ratio of columns for each level. Subsampling occurs once for every new depth level reached in a tree. Columns are subsampled from the set of columns chosen for the current tree.`colsample_bynode`

is the subsample ratio of columns for each node (split). Subsampling occurs once every time a new split is evaluated. Columns are subsampled from the set of columns chosen for the current level. This is not supported by the exact tree method.`colsample_by*`

parameters work cumulatively. For instance, the combination`{'colsample_bytree':0.5, 'colsample_bylevel':0.5, 'colsample_bynode':0.5}`

with 64 features will leave 8 features to choose from at each split.Using the Python or the R package, one can set the

`feature_weights`

for DMatrix to define the probability of each feature being selected when using column sampling. There’s a similar parameter for`fit`

method in sklearn interface.

`lambda`

[default=1, alias:`reg_lambda`

]L2 regularization term on weights. Increasing this value will make model more conservative. This is the \(\lambda\) described in the

[Introduction to Boosted Trees](tutorials/model.html).range: [0, \(\infty\)]


`alpha`

[default=0, alias:`reg_alpha`

]L1 regularization term on weights. Increasing this value will make model more conservative.

range: [0, \(\infty\)]


`tree_method`

string [default=`auto`

]The tree construction algorithm used in XGBoost. See description in the

[reference paper](https://arxiv.org/abs/1603.02754)and[Tree Methods](treemethod.html).Choices:

`auto`

,`exact`

,`approx`

,`hist`

, this is a combination of commonly used updaters. For other updaters like`refresh`

, set the parameter`updater`

directly.`auto`

: Same as the`hist`

tree method.`exact`

: Exact greedy algorithm. Enumerates all split candidates.`approx`

: Approximate greedy algorithm using quantile sketch and gradient histogram.`hist`

: Faster histogram optimized approximate greedy algorithm.


`scale_pos_weight`

[default=1]Control the balance of positive and negative weights, useful for unbalanced classes. A typical value to consider:

`sum(negative instances) / sum(positive instances)`

. See[Parameters Tuning](tutorials/param_tuning.html)for more discussion. Also, see Higgs Kaggle competition demo for examples:[R](https://github.com/dmlc/xgboost/blob/master/demo/kaggle-higgs/higgs-train.R),[py1](https://github.com/dmlc/xgboost/blob/master/demo/kaggle-higgs/higgs-numpy.py),[py2](https://github.com/dmlc/xgboost/blob/master/demo/kaggle-higgs/higgs-cv.py),[py3](https://github.com/dmlc/xgboost/blob/master/demo/guide-python/cross_validation.py).

`updater`

A comma separated string defining the sequence of tree updaters to run, providing a modular way to construct and to modify the trees. This is an advanced parameter that is usually set automatically, depending on some other parameters. However, it could be also set explicitly by a user. The following updaters exist:

`grow_colmaker`

: non-distributed column-based construction of trees.`grow_histmaker`

: distributed tree construction with row-based data splitting based on global proposal of histogram counting.`grow_quantile_histmaker`

: Grow tree using quantized histogram.`grow_gpu_hist`

: Enabled when`tree_method`

is set to`hist`

along with`device=cuda`

.`grow_gpu_approx`

: Enabled when`tree_method`

is set to`approx`

along with`device=cuda`

.`sync`

: synchronizes trees in all distributed nodes.`refresh`

: refreshes tree’s statistics and/or leaf values based on the current data. Note that no random subsampling of data rows is performed.`prune`

: prunes the splits where loss < min_split_loss (or gamma) and nodes that have depth greater than`max_depth`

.


`refresh_leaf`

[default=1]This is a parameter of the

`refresh`

updater. When this flag is 1, tree leafs as well as tree nodes’ stats are updated. When it is 0, only node stats are updated.

`process_type`

[default=`default`

]A type of boosting process to run.

Choices:

`default`

,`update`

`default`

: The normal boosting process which creates new trees.`update`

: Starts from an existing model and only updates its trees. In each boosting iteration, a tree from the initial model is taken, a specified sequence of updaters is run for that tree, and a modified tree is added to the new model. The new model would have either the same or smaller number of trees, depending on the number of boosting iterations performed. Currently, the following built-in updaters could be meaningfully used with this process type:`refresh`

,`prune`

. With`process_type=update`

, one cannot use updaters that create new trees.


`grow_policy`

[default=`depthwise`

]Controls a way new nodes are added to the tree.

Currently supported only if

`tree_method`

is set to`hist`

or`approx`

.Choices:

`depthwise`

,`lossguide`

`depthwise`

: split at nodes closest to the root.`lossguide`

: split at nodes with highest loss change.


`max_leaves`

[default=0, type=int32]Maximum number of nodes to be added. Not used by

`exact`

tree method.

`max_bin`

, [default=256, type=int32]Only used if

`tree_method`

is set to`hist`

or`approx`

.Maximum number of discrete bins to bucket continuous features.

Increasing this number improves the optimality of splits at the cost of higher computation time.


`num_parallel_tree`

, [default=1]Number of parallel trees constructed during each iteration. This option is used to support boosted random forest.


`monotone_constraints`

Constraint of variable monotonicity. See

[Monotonic Constraints](tutorials/monotonic.html)for more information.

`interaction_constraints`

Constraints for interaction representing permitted interactions. The constraints must be specified in the form of a nest list, e.g.

`[[0, 1], [2, 3, 4]]`

, where each inner list is a group of indices of features that are allowed to interact with each other. See[Feature Interaction Constraints](tutorials/feature_interaction_constraint.html)for more information.

`multi_strategy`

, [default =`one_output_per_tree`

]Added in version 2.0.0.

Note

This parameter is working-in-progress.

The strategy used for training multi-target models, including multi-target regression and multi-class classification. See

[Multiple Outputs](tutorials/multioutput.html)for more information.`one_output_per_tree`

: One model for each target.`multi_output_tree`

: Use multi-target trees.



### Parameters for Non-Exact Tree Methods[](#parameters-for-non-exact-tree-methods)

`max_cached_hist_node`

, [default = 65536]Maximum number of cached nodes for histogram. This can be used with the

`hist`

and the`approx`

tree methods.Added in version 2.0.0.

For most of the cases this parameter should not be set except for growing deep trees. After 3.0, this parameter affects GPU algorithms as well.



### Parameters for Categorical Feature[](#parameters-for-categorical-feature)

These parameters are only used for training with categorical data. See
[Categorical Data](tutorials/categorical.html) for more information.

Note

The `exact`

tree method is not supported for categorical features.

`max_cat_to_onehot`

Added in version 1.6.0.

A threshold for deciding whether XGBoost should use one-hot encoding based split for categorical data. When number of categories is lesser than the threshold then one-hot encoding is chosen, otherwise the categories will be partitioned into children nodes.


`max_cat_threshold`

Added in version 1.7.0.

Maximum number of categories considered for each split. Used only by partition-based splits for preventing over-fitting.



### Additional parameters for Dart Booster (`booster=dart`

)[](#additional-parameters-for-dart-booster-booster-dart)

Note

Using `predict()`

with DART booster

If the booster object is DART type, `predict()`

will perform dropouts, i.e. only
some of the trees will be evaluated. This will produce incorrect results if `data`

is
not the training data. To obtain correct results on test sets, set `iteration_range`

to
a nonzero value, e.g.

```
preds = bst.predict(dtest, iteration_range=(0, num_round))
```

`sample_type`

[default=`uniform`

]Type of sampling algorithm.

`uniform`

: dropped trees are selected uniformly.`weighted`

: dropped trees are selected in proportion to weight.


`normalize_type`

[default=`tree`

]Type of normalization algorithm.

`tree`

: new trees have the same weight of each of dropped trees.Weight of new trees are

`1 / (k + learning_rate)`

.Dropped trees are scaled by a factor of

`k / (k + learning_rate)`

.

`forest`

: new trees have the same weight of sum of dropped trees (forest).Weight of new trees are

`1 / (1 + learning_rate)`

.Dropped trees are scaled by a factor of

`1 / (1 + learning_rate)`

.



`rate_drop`

[default=0.0]Dropout rate (a fraction of previous trees to drop during the dropout).

range: [0.0, 1.0]


`one_drop`

[default=0]When this flag is enabled, at least one tree is always dropped during the dropout (allows Binomial-plus-one or epsilon-dropout from the original DART paper).


`skip_drop`

[default=0.0]Probability of skipping the dropout procedure during a boosting iteration.

If a dropout is skipped, new trees are added in the same manner as

`gbtree`

.Note that non-zero

`skip_drop`

has higher priority than`rate_drop`

or`one_drop`

.

range: [0.0, 1.0]



### Parameters for Linear Booster (`booster=gblinear`

)[](#parameters-for-linear-booster-booster-gblinear)

`lambda`

[default=0, alias:`reg_lambda`

]L2 regularization term on weights. Increasing this value will make model more conservative. Normalised to number of training examples.


`alpha`

[default=0, alias:`reg_alpha`

]L1 regularization term on weights. Increasing this value will make model more conservative. Normalised to number of training examples.


`eta`

[default=0.5, alias:`learning_rate`

]Step size shrinkage used in update to prevent overfitting. After each boosting step, we can directly get the weights of new features, and

`eta`

shrinks the feature weights to make the boosting process more conservative.range: [0,1]


`updater`

[default=`shotgun`

]Choice of algorithm to fit linear model

`shotgun`

: Parallel coordinate descent algorithm based on shotgun algorithm. Uses ‘hogwild’ parallelism and therefore produces a nondeterministic solution on each run.`coord_descent`

: Ordinary coordinate descent algorithm. Also multithreaded but still produces a deterministic solution. When the`device`

parameter is set to`cuda`

or`gpu`

, a GPU variant would be used.


`feature_selector`

[default=`cyclic`

]Feature selection and ordering method

`cyclic`

: Deterministic selection by cycling through features one at a time.`shuffle`

: Similar to`cyclic`

but with random feature shuffling prior to each update.`random`

: A random (with replacement) coordinate selector.`greedy`

: Select coordinate with the greatest gradient magnitude. It has`O(num_feature^2)`

complexity. It is fully deterministic. It allows restricting the selection to`top_k`

features per group with the largest magnitude of univariate weight change, by setting the`top_k`

parameter. Doing so would reduce the complexity to`O(num_feature*top_k)`

.`thrifty`

: Thrifty, approximately-greedy feature selector. Prior to cyclic updates, reorders features in descending magnitude of their univariate weight changes. This operation is multithreaded and is a linear complexity approximation of the quadratic greedy selection. It allows restricting the selection to`top_k`

features per group with the largest magnitude of univariate weight change, by setting the`top_k`

parameter.


`top_k`

[default=0]The number of top features to select in

`greedy`

and`thrifty`

feature selector. The value of 0 means using all the features.


## Learning Task Parameters[](#learning-task-parameters)

Specify the learning task and the corresponding learning objective. The objective options are below:

`objective`

[default=reg:squarederror]`reg:squarederror`

: regression with squared loss.`reg:squaredlogerror`

: regression with squared log loss \(\frac{1}{2}[log(pred + 1) - log(label + 1)]^2\). All input labels are required to be greater than -1. Also, see metric`rmsle`

for possible issue with this objective.`reg:logistic`

: logistic regression, output probability`reg:pseudohubererror`

: regression with Pseudo Huber loss, a twice differentiable alternative to absolute loss.`reg:absoluteerror`

: Regression with L1 error. When tree model is used, leaf value is refreshed after tree construction. If used in distributed training, the leaf value is calculated as the mean value from all workers, which is not guaranteed to be optimal.Added in version 1.7.0.

`reg:quantileerror`

: Quantile loss, also known as`pinball loss`

. See later sections for its parameter and[Quantile Regression](python/examples/quantile_regression.html#sphx-glr-python-examples-quantile-regression-py)for a worked example.Added in version 2.0.0.

`binary:logistic`

: logistic regression for binary classification, output probability`binary:logitraw`

: logistic regression for binary classification, output score before logistic transformation`binary:hinge`

: hinge loss for binary classification. This makes predictions of 0 or 1, rather than producing probabilities.`count:poisson`

: Poisson regression for count data, output mean of Poisson distribution.`max_delta_step`

is set to 0.7 by default in Poisson regression (used to safeguard optimization)

`survival:cox`

: Cox regression for right censored survival time data (negative values are considered right censored). Note that predictions are returned on the hazard ratio scale (i.e., as HR = exp(marginal_prediction) in the proportional hazard function`h(t) = h0(t) * HR`

).`survival:aft`

: Accelerated failure time model for censored survival time data. See[Survival Analysis with Accelerated Failure Time](tutorials/aft_survival_analysis.html)for details.`multi:softmax`

: set XGBoost to do multiclass classification using the softmax objective, you also need to set num_class(number of classes)`multi:softprob`

: same as softmax, but output a vector of`ndata * nclass`

, which can be further reshaped to`ndata * nclass`

matrix. The result contains predicted probability of each data point belonging to each class.`rank:ndcg`

: Use LambdaMART to perform pair-wise ranking where[Normalized Discounted Cumulative Gain (NDCG)](https://en.wikipedia.org/wiki/NDCG)is maximized. This objective supports position debiasing for click data.`rank:map`

: Use LambdaMART to perform pair-wise ranking where[Mean Average Precision (MAP)](https://en.wikipedia.org/wiki/Mean_average_precision#Mean_average_precision)is maximized`rank:pairwise`

: Use LambdaRank to perform pair-wise ranking using the ranknet objective.`reg:gamma`

: gamma regression with log-link. Output is a mean of gamma distribution. It might be useful, e.g., for modeling insurance claims severity, or for any outcome that might be[gamma-distributed](https://en.wikipedia.org/wiki/Gamma_distribution#Occurrence_and_applications).`reg:tweedie`

: Tweedie regression with log-link. It might be useful, e.g., for modeling total loss in insurance, or for any outcome that might be[Tweedie-distributed](https://en.wikipedia.org/wiki/Tweedie_distribution#Occurrence_and_applications).

`base_score`

The initial prediction score of all instances, also known as the global bias, or the intercept.

Changed in version 3.1.0: XGBoost is updated to use vector-valued intercept by default.

The parameter is automatically estimated for selected objectives before training. To disable the estimation, specify a real number argument, e.g.

`base_score = 0.5`

.If

`base_margin`

is supplied,`base_score`

will not be used.If we train the model with a sufficient number of iterations, changing this value does not offer significant benefit.


See

[Intercept](tutorials/intercept.html)for more information, including different use cases.`eval_metric`

[default according to objective]Evaluation metrics for validation data, a default metric will be assigned according to objective (rmse for regression, and logloss for classification, mean average precision for

`rank:map`

, etc.)User can add multiple evaluation metrics. Python users: remember to pass the metrics in as list of parameters pairs instead of map, so that latter

`eval_metric`

won’t override previous onesThe choices are listed below:

`rmse`

:[root mean square error](https://en.wikipedia.org/wiki/Root_mean_square_error)`rmsle`

: root mean square log error: \(\sqrt{\frac{1}{N}[log(pred + 1) - log(label + 1)]^2}\). Default metric of`reg:squaredlogerror`

objective. This metric reduces errors generated by outliers in dataset. But because`log`

function is employed,`rmsle`

might output`nan`

when prediction value is less than -1. See`reg:squaredlogerror`

for other requirements.`mae`

:[mean absolute error](https://en.wikipedia.org/wiki/Mean_absolute_error)`mphe`

:[mean Pseudo Huber error](https://en.wikipedia.org/wiki/Huber_loss). Default metric of`reg:pseudohubererror`

objective.`logloss`

:[negative log-likelihood](https://en.wikipedia.org/wiki/Log-likelihood)`error`

: Binary classification error rate. It is calculated as`#(wrong cases)/#(all cases)`

. For the predictions, the evaluation will regard the instances with prediction value larger than 0.5 as positive instances, and the others as negative instances.`error@t`

: a different than 0.5 binary classification threshold value could be specified by providing a numerical value through ‘t’.`merror`

: Multiclass classification error rate. It is calculated as`#(wrong cases)/#(all cases)`

.`mlogloss`

:[Multiclass logloss](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.log_loss.html).`auc`

:[Receiver Operating Characteristic Area under the Curve](https://en.wikipedia.org/wiki/Receiver_operating_characteristic#Area_under_the_curve). Available for classification and learning-to-rank tasks.When used with binary classification, the objective should be

`binary:logistic`

or similar functions that work on probability.When used with multi-class classification, objective should be

`multi:softprob`

instead of`multi:softmax`

, as the latter doesn’t output probability. Also the AUC is calculated by 1-vs-rest with reference class weighted by class prevalence.When used with LTR task, the AUC is computed by comparing pairs of documents to count correctly sorted pairs. This corresponds to pairwise learning to rank. The implementation has some issues with average AUC around groups and distributed workers not being well-defined.

On a single machine the AUC calculation is exact. In a distributed environment the AUC is a weighted average over the AUC of training rows on each node - therefore, distributed AUC is an approximation sensitive to the distribution of data across workers. Use another metric in distributed environments if precision and reproducibility are important.

When input dataset contains only negative or positive samples, the output is NaN. The behavior is implementation defined, for instance,

`scikit-learn`

returns \(0.5\) instead.

`aucpr`

:[Area under the PR curve](https://en.wikipedia.org/wiki/Precision_and_recall). Available for classification and learning-to-rank tasks.After XGBoost 1.6, both of the requirements and restrictions for using

`aucpr`

in classification problem are similar to`auc`

. For ranking task, only binary relevance label \(y \in [0, 1]\) is supported. Different from`map (mean average precision)`

,`aucpr`

calculates the*interpolated*area under precision recall curve using continuous interpolation.`pre`

: Precision at \(k\). Supports only learning to rank task.-
The average precision is defined as:

\[AP@l = \frac{1}{min{(l, N)}}\sum^l_{k=1}P@k \cdot I_{(k)}\]where \(I_{(k)}\) is an indicator function that equals to \(1\) when the document at \(k\) is relevant and \(0\) otherwise. The \(P@k\) is the precision at \(k\), and \(N\) is the total number of relevant documents. Lastly, the mean average precision is defined as the weighted average across all queries.

`ndcg@n`

,`map@n`

,`pre@n`

: \(n\) can be assigned as an integer to cut off the top positions in the lists for evaluation.`ndcg-`

,`map-`

,`ndcg@n-`

,`map@n-`

: In XGBoost, the NDCG and MAP evaluate the score of a list without any positive samples as \(1\). By appending “-” to the evaluation metric name, we can ask XGBoost to evaluate these scores as \(0\) to be consistent under some conditions.`poisson-nloglik`

: negative log-likelihood for Poisson regression`gamma-nloglik`

: negative log-likelihood for gamma regression`cox-nloglik`

: negative partial log-likelihood for Cox proportional hazards regression`gamma-deviance`

: residual deviance for gamma regression`tweedie-nloglik`

: negative log-likelihood for Tweedie regression (at a specified value of the`tweedie_variance_power`

parameter)`aft-nloglik`

: Negative log likelihood of Accelerated Failure Time model. See[Survival Analysis with Accelerated Failure Time](tutorials/aft_survival_analysis.html)for details.`interval-regression-accuracy`

: Fraction of data points whose predicted labels fall in the interval-censored labels. Only applicable for interval-censored data. See[Survival Analysis with Accelerated Failure Time](tutorials/aft_survival_analysis.html)for details.


`seed`

[default=0]Random number seed. In the R package, if not specified, instead of defaulting to seed ‘zero’, will take a random seed through R’s own RNG engine.


`seed_per_iteration`

[default=`false`

]Seed PRNG determnisticly via iterator number.



### Parameters for Tweedie Regression (`objective=reg:tweedie`

)[](#parameters-for-tweedie-regression-objective-reg-tweedie)

`tweedie_variance_power`

[default=1.5]Parameter that controls the variance of the Tweedie distribution

`var(y) ~ E(y)^tweedie_variance_power`

range: (1,2)

Set closer to 2 to shift towards a gamma distribution

Set closer to 1 to shift towards a Poisson distribution.



### Parameter for using Pseudo-Huber (`reg:pseudohubererror`

)[](#parameter-for-using-pseudo-huber-reg-pseudohubererror)

`huber_slope`

: A parameter used for Pseudo-Huber loss to define the \(\delta\) term. [default = 1.0]

### Parameter for using Quantile Loss (`reg:quantileerror`

)[](#parameter-for-using-quantile-loss-reg-quantileerror)

`quantile_alpha`

: A scalar or a list of targeted quantiles.Added in version 2.0.0.


### Parameter for using AFT Survival Loss (`survival:aft`

) and Negative Log Likelihood of AFT metric (`aft-nloglik`

)[](#parameter-for-using-aft-survival-loss-survival-aft-and-negative-log-likelihood-of-aft-metric-aft-nloglik)

`aft_loss_distribution`

: Probability Density Function for the AFT distribution;`normal`

,`logistic`

, or`extreme`

.`aft_loss_distribution_scale`

: Scaling factor for the AFT distribution. Range: (0,∞)

### Parameters for learning to rank (`rank:ndcg`

, `rank:map`

, `rank:pairwise`

)[](#parameters-for-learning-to-rank-rank-ndcg-rank-map-rank-pairwise)

These are parameters specific to learning to rank task. See [Learning to Rank](tutorials/learning_to_rank.html) for an in-depth explanation.

`lambdarank_pair_method`

[default =`topk`

]How to construct pairs for pair-wise learning.

`mean`

: Sample`lambdarank_num_pair_per_sample`

pairs for each document in the query list.`topk`

: Focus on top-`lambdarank_num_pair_per_sample`

documents. Construct \(|query|\) pairs for each document at the top-`lambdarank_num_pair_per_sample`

ranked by the model.

`lambdarank_num_pair_per_sample`

[range = \([1, \infty]\)]It specifies the number of pairs sampled for each document when pair method is

`mean`

, or the truncation level for queries when the pair method is`topk`

. For example, to train with`ndcg@6`

, set`lambdarank_num_pair_per_sample`

to \(6\) and`lambdarank_pair_method`

to`topk`

.`lambdarank_normalization`

[default =`true`

]Added in version 2.1.0.

Whether to normalize the leaf value by lambda gradient. This can sometimes stagnate the training progress.

Changed in version 3.0.0.

When the

`mean`

method is used, it’s normalized by the`lambdarank_num_pair_per_sample`

instead of gradient.`lambdarank_score_normalization`

[default =`true`

]Added in version 3.0.0.

Whether to normalize the delta metric by the difference of prediction scores. This can sometimes stagnate the training progress. With pairwise ranking, we can normalize the gradient using the difference between two samples in each pair to reduce influence from the pairs that have large difference in ranking scores. This can help us regularize the model to reduce bias and prevent overfitting. Similar to other regularization techniques, this might prevent training from converging.

There was no normalization before 2.0. In 2.0 and later versions this is used by default. In 3.0, we made this an option that users can disable.

`lambdarank_unbiased`

[default =`false`

]

Specify whether do we need to debias input click data.


`lambdarank_bias_norm`

[default = 2.0]\(L_p\) normalization for position debiasing, default is \(L_2\). Only relevant when

`lambdarank_unbiased`

is set to true.`ndcg_exp_gain`

[default =`true`

]Whether we should use exponential gain function for

`NDCG`

. There are two forms of gain function for`NDCG`

, one is using relevance value directly while the other is using \(2^{rel} - 1\) to emphasize on retrieving relevant documents. When`ndcg_exp_gain`

is true (the default), relevance degree cannot be greater than 31.

---

## Source: https://xgboost.readthedocs.io/en/stable/prediction.html

# Prediction[](#prediction)

There are a number of prediction functions in XGBoost with various parameters. This
document attempts to clarify some of confusions around prediction with a focus on the
Python binding, R package is similar when `strict_shape`

is specified (see below).

## Prediction Options[](#prediction-options)

There are a number of different prediction options for the
[ xgboost.Booster.predict()](python/python_api.html#xgboost.Booster.predict) method, ranging from

`pred_contribs`

to
`pred_leaf`

. The output shape depends on types of prediction. Also for multi-class
classification problem, XGBoost builds one tree for each class and the trees for each
class are called a “group” of trees, so output dimension may change due to used model.
After 1.4 release, we added a new parameter called `strict_shape`

, one can set it to
`True`

to indicate a more restricted output is desired. Assuming you are using
[, here is a list of possible returns:](python/python_api.html#xgboost.Booster)

`xgboost.Booster`

When using normal prediction with

`strict_shape`

set to`True`

:Output is a 2-dim array with first dimension as rows and second as groups. For regression/survival/ranking/binary classification this is equivalent to a column vector with

`shape[1] == 1`

. But for multi-class with`multi:softprob`

the number of columns equals to number of classes. If strict_shape is set to False then XGBoost might output 1 or 2 dim array.When using

`output_margin`

to avoid transformation and`strict_shape`

is set to`True`

:Similar to the previous case, output is a 2-dim array, except for that

`multi:softmax`

has equivalent output shape of`multi:softprob`

due to dropped transformation. If strict shape is set to False then output can have 1 or 2 dim depending on used model.When using

`pred_contribs`

with`strict_shape`

set to`True`

:Output is a 3-dim array, with

`(rows, groups, columns + 1)`

as shape. Whether`approx_contribs`

is used does not change the output shape. If the strict shape parameter is not set, it can be a 2 or 3 dimension array depending on whether multi-class model is being used.When using

`pred_interactions`

with`strict_shape`

set to`True`

:Output is a 4-dim array, with

`(rows, groups, columns + 1, columns + 1)`

as shape. Like the predict contribution case, whether`approx_contribs`

is used does not change the output shape. If strict shape is set to False, it can have 3 or 4 dims depending on the underlying model.When using

`pred_leaf`

with`strict_shape`

set to`True`

:Output is a 4-dim array with

`(n_samples, n_iterations, n_classes, n_trees_in_forest)`

as shape.`n_trees_in_forest`

is specified by the`numb_parallel_tree`

during training. When strict shape is set to False, output is a 2-dim array with last 3 dims concatenated into 1. Also the last dimension is dropped if it equals to 1. When using`apply`

method in scikit learn interface, this is set to False by default.

For R package, when `strict_shape`

is specified, an `array`

is returned, with the same
value as Python except R array is column-major while Python numpy array is row-major, so
all the dimensions are reversed. For example, for a Python `predict_leaf`

output
obtained by having `strict_shape=True`

has 4 dimensions: ```
(n_samples, n_iterations,
n_classes, n_trees_in_forest)
```

, while R with `strict_shape=TRUE`

outputs
`(n_trees_in_forest, n_classes, n_iterations, n_samples)`

.

Other than these prediction types, there’s also a parameter called `iteration_range`

,
which is similar to model slicing. But instead of actually splitting up the model into
multiple stacks, it simply returns the prediction formed by the trees within range.
Number of trees created in each iteration equals to \(trees_i = num\_class \times
num\_parallel\_tree\). So if you are training a boosted random forest with size of 4, on
the 3-class classification dataset, and want to use the first 2 iterations of trees for
prediction, you need to provide `iteration_range=(0, 2)`

. Then the first \(2
\times 3 \times 4\) trees will be used in this prediction.

## Early Stopping[](#early-stopping)

When a model is trained with early stopping, there is an inconsistent behavior between
native Python interface and sklearn/R interfaces. By default on R and sklearn interfaces,
the `best_iteration`

is automatically used so prediction comes from the best model. But
with the native Python interface [ xgboost.Booster.predict()](python/python_api.html#xgboost.Booster.predict) and

[uses the full model. Users can use](python/python_api.html#xgboost.Booster.inplace_predict)

`xgboost.Booster.inplace_predict()`

`best_iteration`

attribute with `iteration_range`

parameter to achieve the same
behavior. Also the `save_best`

parameter from [might be useful.](python/python_api.html#xgboost.callback.EarlyStopping)

`xgboost.callback.EarlyStopping`

## Base Margin[](#base-margin)

There’s a training parameter in XGBoost called `base_score`

, and a meta data for
`DMatrix`

called `base_margin`

(which can be set in `fit`

method if you are using
scikit-learn interface). They specifies the global bias for boosted model. If the latter
is supplied then former is ignored. `base_margin`

can be used to train XGBoost model
based on other models. See demos on boosting from predictions.

## Staged Prediction[](#staged-prediction)

Using the native interface with `DMatrix`

, prediction can be staged (or cached). For
example, one can first predict on the first 4 trees then run prediction on 8 trees. After
running the first prediction, result from first 4 trees are cached so when you run the
prediction with 8 trees XGBoost can reuse the result from previous prediction. The cache
expires automatically upon next prediction, train or evaluation if the cached `DMatrix`

object is expired (like going out of scope and being collected by garbage collector in
your language environment).

## In-place Prediction[](#in-place-prediction)

Traditionally XGBoost accepts only `DMatrix`

for prediction, with wrappers like
scikit-learn interface the construction happens internally. We added support for in-place
predict to bypass the construction of `DMatrix`

, which is slow and memory consuming.
The new predict function has limited features but is often sufficient for simple inference
tasks. It accepts some commonly found data types in Python like [ numpy.ndarray](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray),

[and](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.csr_matrix.html#scipy.sparse.csr_matrix)

`scipy.sparse.csr_matrix`

`cudf.DataFrame`

instead of
[. You can call](python/python_api.html#xgboost.DMatrix)

`xgboost.DMatrix`

[to use it. Be aware that the output of in-place prediction depends on input data type, when input is on GPU data output is](python/python_api.html#xgboost.Booster.inplace_predict)

`xgboost.Booster.inplace_predict()`

`cupy.ndarray`

, otherwise a [is returned.](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray)

`numpy.ndarray`

## Thread Safety[](#thread-safety)

After 1.4 release, all prediction functions including normal `predict`

with various
parameters like shap value computation and `inplace_predict`

are thread safe when
underlying booster is `gbtree`

or `dart`

, which means as long as tree model is used,
prediction itself should thread safe. But the safety is only guaranteed with prediction.
If one tries to train a model in one thread and provide prediction at the other using the
same model the behaviour is undefined. This happens easier than one might expect, for
instance we might accidentally call `clf.set_params()`

inside a predict function:

```
def predict_fn(clf: xgb.XGBClassifier, X):
X = preprocess(X)
clf.set_params(n_jobs=1) # NOT safe!
return clf.predict_proba(X, iteration_range=(0, 10))
with ThreadPoolExecutor(max_workers=10) as e:
e.submit(predict_fn, ...)
```

## Privacy-Preserving Prediction[](#privacy-preserving-prediction)

[Concrete ML](https://github.com/zama-ai/concrete-ml) is a third-party open-source library developed by [Zama](https://www.zama.ai/) that proposes gradient
boosting classes similar to ours, but predicting directly over encrypted data, thanks to
Fully Homomorphic Encryption. A simple example would be as follows:

```
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from concrete.ml.sklearn import XGBClassifier
x, y = make_classification(n_samples=100, class_sep=2, n_features=30, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(
x, y, test_size=10, random_state=42
)
# Train in the clear and quantize the weights
model = XGBClassifier()
model.fit(X_train, y_train)
# Simulate the predictions in the clear
y_pred_clear = model.predict(X_test)
# Compile in FHE
model.compile(X_train)
# Generate keys
model.fhe_circuit.keygen()
# Run the inference on encrypted inputs!
y_pred_fhe = model.predict(X_test, fhe="execute")
print("In clear :", y_pred_clear)
print("In FHE :", y_pred_fhe)
print(f"Similarity: {int((y_pred_fhe == y_pred_clear).mean()*100)}%")
```

More information and examples are given in the [Concrete ML documentation](https://docs.zama.ai/concrete-ml).

---

## Source: https://xgboost.readthedocs.io/en/stable/treemethod.html

# Tree Methods[](#tree-methods)

For training boosted tree models, there are 2 parameters used for choosing algorithms,
namely `updater`

and `tree_method`

. XGBoost has 3 builtin tree methods, namely
`exact`

, `approx`

and `hist`

. Along with these tree methods, there are also some
free standing updaters including `refresh`

, `prune`

and `sync`

. The parameter
`updater`

is more primitive than `tree_method`

as the latter is just a
pre-configuration of the former. The difference is mostly due to historical reasons that
each updater requires some specific configurations and might has missing features. As we
are moving forward, the gap between them is becoming more and more irrelevant. We will
collectively document them under tree methods.

## Exact Solution[](#exact-solution)

Exact means XGBoost considers all candidates from data for tree splitting, but underlying the objective is still interpreted as a Taylor expansion.

`exact`

: The vanilla gradient boosting tree algorithm described in[reference paper](http://arxiv.org/abs/1603.02754). During split-finding, it iterates over all entries of input data. It’s more accurate (among other greedy methods) but computationally slower in compared to other tree methods. Further more, its feature set is limited. Features like distributed training and external memory that require approximated quantiles are not supported. This tree method can be used with the parameter`tree_method`

set to`exact`

.

## Approximated Solutions[](#approximated-solutions)

As `exact`

tree method is slow in computation performance and difficult to scale, we
often employ approximated training algorithms. These algorithms build a gradient
histogram for each node and iterate through the histogram instead of real dataset. Here
we introduce the implementations in XGBoost.

`approx`

tree method: An approximation tree method described in[reference paper](http://arxiv.org/abs/1603.02754). It runs sketching before building each tree using all the rows (rows belonging to the root). Hessian is used as weights during sketch. The algorithm can be accessed by setting`tree_method`

to`approx`

.`hist`

tree method: An approximation tree method used in LightGBM with slight differences in implementation. It runs sketching before training using only user provided weights instead of hessian. The subsequent per-node histogram is built upon this global sketch. This is the fastest algorithm as it runs sketching only once. The algorithm can be accessed by setting`tree_method`

to`hist`

.

## Implications[](#implications)

Some objectives like `reg:squarederror`

have constant hessian. In this case, the
`hist`

should be preferred as weighted sketching doesn’t make sense with constant
weights. When using non-constant hessian objectives, sometimes `approx`

yields better
accuracy, but with slower computation performance. Most of the time using `hist`

with
higher `max_bin`

can achieve similar or even superior accuracy while maintaining good
performance. However, as xgboost is largely driven by community effort, the actual
implementations have some differences than pure math description. Result might be
slightly different than expectation, which we are currently trying to overcome.

## Other Updaters[](#other-updaters)

`Prune`

: It prunes the existing trees.`prune`

is usually used as part of other tree methods. To use pruner independently, one needs to set the process type to update by:`{"process_type": "update", "updater": "prune"}`

. With this set of parameters, during training, XGBoost will prune the existing trees according to 2 parameters`min_split_loss (gamma)`

and`max_depth`

.`Refresh`

: Refresh the statistic of built trees on a new training dataset. Like the pruner, To use refresh independently, one needs to set the process type to update:`{"process_type": "update", "updater": "refresh"}`

. During training, the updater will change statistics like`cover`

and`weight`

according to the new training dataset. When`refresh_leaf`

is also set to true (default), XGBoost will update the leaf value according to the new leaf weight, but the tree structure (split condition) itself doesn’t change.There are examples on both training continuation (adding new trees) and using update process on

`demo/guide-python`

. Also checkout the`process_type`

parameter in[XGBoost Parameters](parameter.html).`Sync`

: Synchronize the tree among workers when running distributed training.

## Removed Updaters[](#removed-updaters)

3 Updaters were removed during development due to maintainability. We describe them here solely for the interest of documentation.

Distributed colmaker, which was a distributed version of exact tree method. It required specialization for column based splitting strategy and a different prediction procedure. As the exact tree method is slow by itself and scaling is even less efficient, we removed it entirely.

`skmaker`

. Per-node weighted sketching employed by`grow_local_histmaker`

is slow, the`skmaker`

was unmaintained and seems to be a workaround trying to eliminate the histogram creation step and uses sketching values directly during split evaluation. It was never tested and contained some unknown bugs, we decided to remove it and focus our resources on more promising algorithms instead. For accuracy, most of the time`approx`

and`hist`

are enough with some parameters tuning, so removing them don’t have any real practical impact.`grow_local_histmaker`

updater: An approximation tree method described in[reference paper](http://arxiv.org/abs/1603.02754). This updater was rarely used in practice so it was still an updater rather than tree method. During split finding, it first runs a weighted GK sketching for data points belong to current node to find split candidates, using hessian as weights. The histogram is built upon this per-node sketch. It was faster than`exact`

in some applications, but still slow in computation. It was removed because it depended on Rabit’s customized reduction function that handles all the data structure that can be serialized/deserialized into fixed size buffer, which is not directly supported by NCCL or federated learning gRPC, making it hard to refactor into a common allreducer interface.

## Feature Matrix[](#feature-matrix)

Following table summarizes some differences in supported features between 4 tree methods, T means supported while F means unsupported.

Exact |
Approx |
Approx (GPU) |
Hist |
Hist (GPU) |
|
|---|---|---|---|---|---|
grow_policy |
Depthwise |
depthwise/lossguide |
depthwise/lossguide |
depthwise/lossguide |
depthwise/lossguide |
max_leaves |
F |
T |
T |
T |
T |
sampling method |
uniform |
uniform |
gradient_based/uniform |
uniform |
gradient_based/uniform |
categorical data |
F |
T |
T |
T |
T |
External memory |
F |
T |
P |
T |
P |
Distributed |
F |
T |
T |
T |
T |

Features/parameters that are not mentioned here are universally supported for all 3 tree methods (for instance, column sampling and constraints). The P in external memory means special handling. Please note that both categorical data and external memory are experimental.

---

## Source: https://xgboost.readthedocs.io/en/stable/python/index.html

# XGBoost Python Package[](#xgboost-python-package)

This page contains links to all the python related documents on python package.
To install the package, checkout [Installation Guide](../install.html).

## Contents[](#contents)

[Python Package Introduction](python_intro.html)[Using the Scikit-Learn Estimator Interface](sklearn_estimator.html)[Python API Reference](python_api.html)[Global Configuration](python_api.html#global-configuration)[Core Data Structure](python_api.html#module-xgboost.core)`DMatrix`

`DMatrix.data_split_mode()`

`DMatrix.feature_names`

`DMatrix.feature_types`

`DMatrix.get_base_margin()`

`DMatrix.get_categories()`

`DMatrix.get_data()`

`DMatrix.get_float_info()`

`DMatrix.get_group()`

`DMatrix.get_label()`

`DMatrix.get_quantile_cut()`

`DMatrix.get_uint_info()`

`DMatrix.get_weight()`

`DMatrix.num_col()`

`DMatrix.num_nonmissing()`

`DMatrix.num_row()`

`DMatrix.save_binary()`

`DMatrix.set_base_margin()`

`DMatrix.set_float_info()`

`DMatrix.set_float_info_npy2d()`

`DMatrix.set_group()`

`DMatrix.set_info()`

`DMatrix.set_label()`

`DMatrix.set_uint_info()`

`DMatrix.set_weight()`

`DMatrix.slice()`


`QuantileDMatrix`

`QuantileDMatrix.data_split_mode()`

`QuantileDMatrix.feature_names`

`QuantileDMatrix.feature_types`

`QuantileDMatrix.get_base_margin()`

`QuantileDMatrix.get_categories()`

`QuantileDMatrix.get_data()`

`QuantileDMatrix.get_float_info()`

`QuantileDMatrix.get_group()`

`QuantileDMatrix.get_label()`

`QuantileDMatrix.get_quantile_cut()`

`QuantileDMatrix.get_uint_info()`

`QuantileDMatrix.get_weight()`

`QuantileDMatrix.num_col()`

`QuantileDMatrix.num_nonmissing()`

`QuantileDMatrix.num_row()`

`QuantileDMatrix.ref`

`QuantileDMatrix.save_binary()`

`QuantileDMatrix.set_base_margin()`

`QuantileDMatrix.set_float_info()`

`QuantileDMatrix.set_float_info_npy2d()`

`QuantileDMatrix.set_group()`

`QuantileDMatrix.set_info()`

`QuantileDMatrix.set_label()`

`QuantileDMatrix.set_uint_info()`

`QuantileDMatrix.set_weight()`

`QuantileDMatrix.slice()`


`ExtMemQuantileDMatrix`

`ExtMemQuantileDMatrix.data_split_mode()`

`ExtMemQuantileDMatrix.feature_names`

`ExtMemQuantileDMatrix.feature_types`

`ExtMemQuantileDMatrix.get_base_margin()`

`ExtMemQuantileDMatrix.get_categories()`

`ExtMemQuantileDMatrix.get_data()`

`ExtMemQuantileDMatrix.get_float_info()`

`ExtMemQuantileDMatrix.get_group()`

`ExtMemQuantileDMatrix.get_label()`

`ExtMemQuantileDMatrix.get_quantile_cut()`

`ExtMemQuantileDMatrix.get_uint_info()`

`ExtMemQuantileDMatrix.get_weight()`

`ExtMemQuantileDMatrix.num_col()`

`ExtMemQuantileDMatrix.num_nonmissing()`

`ExtMemQuantileDMatrix.num_row()`

`ExtMemQuantileDMatrix.ref`

`ExtMemQuantileDMatrix.save_binary()`

`ExtMemQuantileDMatrix.set_base_margin()`

`ExtMemQuantileDMatrix.set_float_info()`

`ExtMemQuantileDMatrix.set_float_info_npy2d()`

`ExtMemQuantileDMatrix.set_group()`

`ExtMemQuantileDMatrix.set_info()`

`ExtMemQuantileDMatrix.set_label()`

`ExtMemQuantileDMatrix.set_uint_info()`

`ExtMemQuantileDMatrix.set_weight()`

`ExtMemQuantileDMatrix.slice()`


`Booster`

`Booster.__getitem__()`

`Booster.attr()`

`Booster.attributes()`

`Booster.best_iteration`

`Booster.best_score`

`Booster.boost()`

`Booster.copy()`

`Booster.dump_model()`

`Booster.eval()`

`Booster.eval_set()`

`Booster.feature_names`

`Booster.feature_types`

`Booster.get_categories()`

`Booster.get_dump()`

`Booster.get_fscore()`

`Booster.get_score()`

`Booster.get_split_value_histogram()`

`Booster.inplace_predict()`

`Booster.load_config()`

`Booster.load_model()`

`Booster.num_boosted_rounds()`

`Booster.num_features()`

`Booster.predict()`

`Booster.reset()`

`Booster.save_config()`

`Booster.save_model()`

`Booster.save_raw()`

`Booster.set_attr()`

`Booster.set_param()`

`Booster.trees_to_dataframe()`

`Booster.update()`


`DataIter`

`Categories`


[Learning API](python_api.html#module-xgboost.training)[Scikit-Learn API](python_api.html#module-xgboost.sklearn)`XGBRegressor`

`XGBRegressor.apply()`

`XGBRegressor.best_iteration`

`XGBRegressor.best_score`

`XGBRegressor.coef_`

`XGBRegressor.evals_result()`

`XGBRegressor.feature_importances_`

`XGBRegressor.feature_names_in_`

`XGBRegressor.fit()`

`XGBRegressor.get_booster()`

`XGBRegressor.get_metadata_routing()`

`XGBRegressor.get_num_boosting_rounds()`

`XGBRegressor.get_params()`

`XGBRegressor.get_xgb_params()`

`XGBRegressor.intercept_`

`XGBRegressor.load_model()`

`XGBRegressor.n_features_in_`

`XGBRegressor.predict()`

`XGBRegressor.save_model()`

`XGBRegressor.score()`

`XGBRegressor.set_fit_request()`

`XGBRegressor.set_params()`

`XGBRegressor.set_predict_request()`

`XGBRegressor.set_score_request()`


`XGBClassifier`

`XGBClassifier.apply()`

`XGBClassifier.best_iteration`

`XGBClassifier.best_score`

`XGBClassifier.coef_`

`XGBClassifier.evals_result()`

`XGBClassifier.feature_importances_`

`XGBClassifier.feature_names_in_`

`XGBClassifier.fit()`

`XGBClassifier.get_booster()`

`XGBClassifier.get_metadata_routing()`

`XGBClassifier.get_num_boosting_rounds()`

`XGBClassifier.get_params()`

`XGBClassifier.get_xgb_params()`

`XGBClassifier.intercept_`

`XGBClassifier.load_model()`

`XGBClassifier.n_features_in_`

`XGBClassifier.predict()`

`XGBClassifier.predict_proba()`

`XGBClassifier.save_model()`

`XGBClassifier.score()`

`XGBClassifier.set_fit_request()`

`XGBClassifier.set_params()`

`XGBClassifier.set_predict_proba_request()`

`XGBClassifier.set_predict_request()`

`XGBClassifier.set_score_request()`


`XGBRanker`

`XGBRanker.apply()`

`XGBRanker.best_iteration`

`XGBRanker.best_score`

`XGBRanker.coef_`

`XGBRanker.evals_result()`

`XGBRanker.feature_importances_`

`XGBRanker.feature_names_in_`

`XGBRanker.fit()`

`XGBRanker.get_booster()`

`XGBRanker.get_metadata_routing()`

`XGBRanker.get_num_boosting_rounds()`

`XGBRanker.get_params()`

`XGBRanker.get_xgb_params()`

`XGBRanker.intercept_`

`XGBRanker.load_model()`

`XGBRanker.n_features_in_`

`XGBRanker.predict()`

`XGBRanker.save_model()`

`XGBRanker.score()`

`XGBRanker.set_fit_request()`

`XGBRanker.set_params()`

`XGBRanker.set_predict_request()`


`XGBRFRegressor`

`XGBRFRegressor.apply()`

`XGBRFRegressor.best_iteration`

`XGBRFRegressor.best_score`

`XGBRFRegressor.coef_`

`XGBRFRegressor.evals_result()`

`XGBRFRegressor.feature_importances_`

`XGBRFRegressor.feature_names_in_`

`XGBRFRegressor.fit()`

`XGBRFRegressor.get_booster()`

`XGBRFRegressor.get_metadata_routing()`

`XGBRFRegressor.get_num_boosting_rounds()`

`XGBRFRegressor.get_params()`

`XGBRFRegressor.get_xgb_params()`

`XGBRFRegressor.intercept_`

`XGBRFRegressor.load_model()`

`XGBRFRegressor.n_features_in_`

`XGBRFRegressor.predict()`

`XGBRFRegressor.save_model()`

`XGBRFRegressor.score()`

`XGBRFRegressor.set_fit_request()`

`XGBRFRegressor.set_params()`

`XGBRFRegressor.set_predict_request()`

`XGBRFRegressor.set_score_request()`


`XGBRFClassifier`

`XGBRFClassifier.apply()`

`XGBRFClassifier.best_iteration`

`XGBRFClassifier.best_score`

`XGBRFClassifier.coef_`

`XGBRFClassifier.evals_result()`

`XGBRFClassifier.feature_importances_`

`XGBRFClassifier.feature_names_in_`

`XGBRFClassifier.fit()`

`XGBRFClassifier.get_booster()`

`XGBRFClassifier.get_metadata_routing()`

`XGBRFClassifier.get_num_boosting_rounds()`

`XGBRFClassifier.get_params()`

`XGBRFClassifier.get_xgb_params()`

`XGBRFClassifier.intercept_`

`XGBRFClassifier.load_model()`

`XGBRFClassifier.n_features_in_`

`XGBRFClassifier.predict()`

`XGBRFClassifier.predict_proba()`

`XGBRFClassifier.save_model()`

`XGBRFClassifier.score()`

`XGBRFClassifier.set_fit_request()`

`XGBRFClassifier.set_params()`

`XGBRFClassifier.set_predict_proba_request()`

`XGBRFClassifier.set_predict_request()`

`XGBRFClassifier.set_score_request()`



[Plotting API](python_api.html#module-xgboost.plotting)[Callback API](python_api.html#module-xgboost.callback)[Dask API](python_api.html#dask-api)[PySpark API](python_api.html#module-xgboost.spark)`SparkXGBClassifier`

`SparkXGBClassifier.clear()`

`SparkXGBClassifier.copy()`

`SparkXGBClassifier.explainParam()`

`SparkXGBClassifier.explainParams()`

`SparkXGBClassifier.extractParamMap()`

`SparkXGBClassifier.fit()`

`SparkXGBClassifier.fitMultiple()`

`SparkXGBClassifier.getFeaturesCol()`

`SparkXGBClassifier.getLabelCol()`

`SparkXGBClassifier.getOrDefault()`

`SparkXGBClassifier.getParam()`

`SparkXGBClassifier.getPredictionCol()`

`SparkXGBClassifier.getProbabilityCol()`

`SparkXGBClassifier.getRawPredictionCol()`

`SparkXGBClassifier.getValidationIndicatorCol()`

`SparkXGBClassifier.getWeightCol()`

`SparkXGBClassifier.hasDefault()`

`SparkXGBClassifier.hasParam()`

`SparkXGBClassifier.isDefined()`

`SparkXGBClassifier.isSet()`

`SparkXGBClassifier.load()`

`SparkXGBClassifier.params`

`SparkXGBClassifier.read()`

`SparkXGBClassifier.save()`

`SparkXGBClassifier.set()`

`SparkXGBClassifier.setParams()`

`SparkXGBClassifier.set_coll_cfg()`

`SparkXGBClassifier.set_device()`

`SparkXGBClassifier.uid`

`SparkXGBClassifier.write()`


`SparkXGBClassifierModel`

`SparkXGBClassifierModel.clear()`

`SparkXGBClassifierModel.copy()`

`SparkXGBClassifierModel.explainParam()`

`SparkXGBClassifierModel.explainParams()`

`SparkXGBClassifierModel.extractParamMap()`

`SparkXGBClassifierModel.getFeaturesCol()`

`SparkXGBClassifierModel.getLabelCol()`

`SparkXGBClassifierModel.getOrDefault()`

`SparkXGBClassifierModel.getParam()`

`SparkXGBClassifierModel.getPredictionCol()`

`SparkXGBClassifierModel.getProbabilityCol()`

`SparkXGBClassifierModel.getRawPredictionCol()`

`SparkXGBClassifierModel.getValidationIndicatorCol()`

`SparkXGBClassifierModel.getWeightCol()`

`SparkXGBClassifierModel.get_booster()`

`SparkXGBClassifierModel.get_feature_importances()`

`SparkXGBClassifierModel.hasDefault()`

`SparkXGBClassifierModel.hasParam()`

`SparkXGBClassifierModel.isDefined()`

`SparkXGBClassifierModel.isSet()`

`SparkXGBClassifierModel.load()`

`SparkXGBClassifierModel.params`

`SparkXGBClassifierModel.read()`

`SparkXGBClassifierModel.save()`

`SparkXGBClassifierModel.set()`

`SparkXGBClassifierModel.set_coll_cfg()`

`SparkXGBClassifierModel.set_device()`

`SparkXGBClassifierModel.transform()`

`SparkXGBClassifierModel.uid`

`SparkXGBClassifierModel.write()`


`SparkXGBRegressor`

`SparkXGBRegressor.clear()`

`SparkXGBRegressor.copy()`

`SparkXGBRegressor.explainParam()`

`SparkXGBRegressor.explainParams()`

`SparkXGBRegressor.extractParamMap()`

`SparkXGBRegressor.fit()`

`SparkXGBRegressor.fitMultiple()`

`SparkXGBRegressor.getFeaturesCol()`

`SparkXGBRegressor.getLabelCol()`

`SparkXGBRegressor.getOrDefault()`

`SparkXGBRegressor.getParam()`

`SparkXGBRegressor.getPredictionCol()`

`SparkXGBRegressor.getValidationIndicatorCol()`

`SparkXGBRegressor.getWeightCol()`

`SparkXGBRegressor.hasDefault()`

`SparkXGBRegressor.hasParam()`

`SparkXGBRegressor.isDefined()`

`SparkXGBRegressor.isSet()`

`SparkXGBRegressor.load()`

`SparkXGBRegressor.params`

`SparkXGBRegressor.read()`

`SparkXGBRegressor.save()`

`SparkXGBRegressor.set()`

`SparkXGBRegressor.setParams()`

`SparkXGBRegressor.set_coll_cfg()`

`SparkXGBRegressor.set_device()`

`SparkXGBRegressor.uid`

`SparkXGBRegressor.write()`


`SparkXGBRegressorModel`

`SparkXGBRegressorModel.clear()`

`SparkXGBRegressorModel.copy()`

`SparkXGBRegressorModel.explainParam()`

`SparkXGBRegressorModel.explainParams()`

`SparkXGBRegressorModel.extractParamMap()`

`SparkXGBRegressorModel.getFeaturesCol()`

`SparkXGBRegressorModel.getLabelCol()`

`SparkXGBRegressorModel.getOrDefault()`

`SparkXGBRegressorModel.getParam()`

`SparkXGBRegressorModel.getPredictionCol()`

`SparkXGBRegressorModel.getValidationIndicatorCol()`

`SparkXGBRegressorModel.getWeightCol()`

`SparkXGBRegressorModel.get_booster()`

`SparkXGBRegressorModel.get_feature_importances()`

`SparkXGBRegressorModel.hasDefault()`

`SparkXGBRegressorModel.hasParam()`

`SparkXGBRegressorModel.isDefined()`

`SparkXGBRegressorModel.isSet()`

`SparkXGBRegressorModel.load()`

`SparkXGBRegressorModel.params`

`SparkXGBRegressorModel.read()`

`SparkXGBRegressorModel.save()`

`SparkXGBRegressorModel.set()`

`SparkXGBRegressorModel.set_coll_cfg()`

`SparkXGBRegressorModel.set_device()`

`SparkXGBRegressorModel.transform()`

`SparkXGBRegressorModel.uid`

`SparkXGBRegressorModel.write()`


`SparkXGBRanker`

`SparkXGBRanker.clear()`

`SparkXGBRanker.copy()`

`SparkXGBRanker.explainParam()`

`SparkXGBRanker.explainParams()`

`SparkXGBRanker.extractParamMap()`

`SparkXGBRanker.fit()`

`SparkXGBRanker.fitMultiple()`

`SparkXGBRanker.getFeaturesCol()`

`SparkXGBRanker.getLabelCol()`

`SparkXGBRanker.getOrDefault()`

`SparkXGBRanker.getParam()`

`SparkXGBRanker.getPredictionCol()`

`SparkXGBRanker.getValidationIndicatorCol()`

`SparkXGBRanker.getWeightCol()`

`SparkXGBRanker.hasDefault()`

`SparkXGBRanker.hasParam()`

`SparkXGBRanker.isDefined()`

`SparkXGBRanker.isSet()`

`SparkXGBRanker.load()`

`SparkXGBRanker.params`

`SparkXGBRanker.read()`

`SparkXGBRanker.save()`

`SparkXGBRanker.set()`

`SparkXGBRanker.setParams()`

`SparkXGBRanker.set_coll_cfg()`

`SparkXGBRanker.set_device()`

`SparkXGBRanker.uid`

`SparkXGBRanker.write()`


`SparkXGBRankerModel`

`SparkXGBRankerModel.clear()`

`SparkXGBRankerModel.copy()`

`SparkXGBRankerModel.explainParam()`

`SparkXGBRankerModel.explainParams()`

`SparkXGBRankerModel.extractParamMap()`

`SparkXGBRankerModel.getFeaturesCol()`

`SparkXGBRankerModel.getLabelCol()`

`SparkXGBRankerModel.getOrDefault()`

`SparkXGBRankerModel.getParam()`

`SparkXGBRankerModel.getPredictionCol()`

`SparkXGBRankerModel.getValidationIndicatorCol()`

`SparkXGBRankerModel.getWeightCol()`

`SparkXGBRankerModel.get_booster()`

`SparkXGBRankerModel.get_feature_importances()`

`SparkXGBRankerModel.hasDefault()`

`SparkXGBRankerModel.hasParam()`

`SparkXGBRankerModel.isDefined()`

`SparkXGBRankerModel.isSet()`

`SparkXGBRankerModel.load()`

`SparkXGBRankerModel.params`

`SparkXGBRankerModel.read()`

`SparkXGBRankerModel.save()`

`SparkXGBRankerModel.set()`

`SparkXGBRankerModel.set_coll_cfg()`

`SparkXGBRankerModel.set_device()`

`SparkXGBRankerModel.transform()`

`SparkXGBRankerModel.uid`

`SparkXGBRankerModel.write()`



[Collective](python_api.html#module-xgboost.collective)

[Supported Python data structures](data_input.html)[Callback Functions](callbacks.html)[XGBoost Python Feature Walkthrough](examples/index.html)[XGBoost Dask Feature Walkthrough](dask-examples/index.html)[Survival Analysis Walkthrough](survival-examples/index.html)[Using XGBoost with RAPIDS Memory Manager (RMM) plugin](rmm-examples/index.html)

---

## Source: https://xgboost.readthedocs.io/en/stable/R-package/index.html

# XGBoost R Package[](#xgboost-r-package)


You have found the XGBoost R Package!

## Get Started[](#get-started)

Since XGBoost 3.0.0, the latest R package is available on [R-universe](https://dmlc.r-universe.dev/xgboost) in addition to the CRAN package.

Check out the

[Installation Guide](../install.html)for instructions on how to install xgboost, and[Tutorials](../tutorials/index.html)for examples on how to use XGBoost for various tasks.Read the latest

[API documentation](../r_docs/R-package/docs/reference/index.html).Read the

[CRAN documentation](https://cran.r-project.org/web/packages/xgboost/xgboost.pdf).

---

## Source: https://xgboost.readthedocs.io/en/stable/jvm/index.html

# XGBoost JVM Package[](#xgboost-jvm-package)



You have found the XGBoost JVM Package!

## Installation[](#installation)

Checkout the [Installation Guide](../install.html) for how to install the jvm package, or
[Building from Source](../build.html) on how to build it from the sources.

## Contents[](#id1)

Note

Please note that the flink interface is still under construction.

---

## Source: https://xgboost.readthedocs.io/en/stable/julia.html

Installation Guide
Building From Source
Get Started with XGBoost
XGBoost Tutorials
Frequently Asked Questions
GPU Support
XGBoost Parameters
Prediction
Tree Methods
Python Package
R Package
JVM Package
Ruby Package
Swift Package
Julia Package
C Package
C++ Interface
Contribute to XGBoost
Release Notes
xgboost
XGBoost.jl
View page source
XGBoost.jl
See
XGBoost.jl Project page
.

---

## Source: https://xgboost.readthedocs.io/en/stable/c.html

# XGBoost C Package[](#xgboost-c-package)

XGBoost implements a set of C API designed for various bindings, we maintain its stability
and the CMake/make build interface. See [C API Tutorial](tutorials/c_api_tutorial.html) for an
introduction and `demo/c-api/`

for related examples. Also one can generate doxygen
document by providing `-DBUILD_C_DOC=ON`

as parameter to `CMake`

during build, or
simply look at function comments in `include/xgboost/c_api.h`

. The reference is exported
to sphinx with the help of breathe, which doesn’t contain links to examples but might be
easier to read. For the original doxygen pages please visit:

## C API Reference[](#c-api-reference)

### Library[](#library)

-
*group*Library These functions are used to obtain general information about XGBoost including version, build info and current global configuration.

Typedefs

-
typedef void *DMatrixHandle
[](#_CPPv413DMatrixHandle) Handle to the DMatrix.


-
typedef void *BoosterHandle
[](#_CPPv413BoosterHandle) Handle to the Booster.


-
typedef void *CategoriesHandle
[](#_CPPv416CategoriesHandle) Handle to the categories container.

**Since**3.2.0



Functions

-
void XGBoostVersion(int *major, int *minor, int *patch)
[](#_CPPv414XGBoostVersionPiPiPi) Return the version of the XGBoost library.

The output variable is only written if it’s not NULL.

- Parameters:
**major**– Store the major version number.**minor**– Store the minor version number.**patch**– Store the patch (revision) number.



-
int XGBuildInfo(char const **out)
[](#_CPPv411XGBuildInfoPPKc) Get compile information of the shared XGBoost library.

- Parameters:
**out**– string encoded JSON object containing build flags and dependency versions.- Returns:
0 when success, -1 when failure happens



-
const char *XGBGetLastError()
[](#_CPPv415XGBGetLastErrorv) Get the string message of the last error.

Most functions in XGBoost returns 0 when success and non-zero when an error occurred. In the case of error,

[XGBGetLastError](#group__Library_1ga28f4dca0483368bfbc7ee8160310ab63)can be used to retrieve the error messageThis function is thread safe.

- Returns:
The error message from the last error.



-
int XGBRegisterLogCallback(void (*callback)(const char*))
[](#_CPPv422XGBRegisterLogCallbackPFvPKcE) register callback function for LOG(INFO) messages — helpful messages that are not errors.

Note

This function can be called by multiple threads. The callback function will run on the thread that registered it.

- Returns:
0 when success, -1 when failure happens



-
int XGBSetGlobalConfig(char const *config)
[](#_CPPv418XGBSetGlobalConfigPKc) Set global configuration (collection of parameters that apply globally). This function accepts the list of key-value pairs representing the global-scope parameters to be configured. The list of key-value pairs are passed in as a JSON string.

- Parameters:
**config**– a JSON string representing the list of key-value pairs. The JSON object shall be flat: no value can be a JSON object or an array.- Returns:
0 when success, -1 when failure happens



-
int XGBGetGlobalConfig(char const **out_config)
[](#_CPPv418XGBGetGlobalConfigPPKc) Get current global configuration (collection of parameters that apply globally).

- Parameters:
**out_config**– pointer to received returned global configuration, represented as a JSON string.- Returns:
0 when success, -1 when failure happens



-
typedef void *DMatrixHandle

### DMatrix[](#dmatrix)

-
*group*DMatrix DMatrix is the basic data storage for XGBoost used by all XGBoost algorithms including both training, prediction and explanation. There are a few variants of

`DMatrix`

including normal`DMatrix`

, which is a CSR matrix,`QuantileDMatrix`

, which is used by histogram-based tree methods for saving memory, and lastly the experimental external-memory-based DMatrix, which reads data in batches during training. For the last two variants, see the[Streaming](#group__Streaming)group.Functions

-
int XGDMatrixCreateFromFile(const char *fname, int silent,
[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv423XGDMatrixCreateFromFilePKciP13DMatrixHandle) load a data matrix

-
*Deprecated:* since 2.0.0


See also

- Parameters:
**fname**– the name of the file**silent**– whether print messages during loading**out**– a loaded data matrix

- Returns:
0 when success, -1 when failure happens


-

-
int XGDMatrixCreateFromURI(char const *config,
[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv422XGDMatrixCreateFromURIPKcP13DMatrixHandle) load a data matrix

- Parameters:
**config**– JSON encoded parameters for DMatrix construction. Accepted fields are:uri: The URI of the input file. The URI parameter

`format`

is required when loading text data.See

[Text Input Format of DMatrix](tutorials/input_format.html)for more info.silent (optional): Whether to print message during loading. Default to true.

data_split_mode (optional): Whether the file was split by row or column beforehand for distributed computing. Default to row.


**out**– a loaded data matrix

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixCreateFromColumnar(char const *data, char const *config,
[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv427XGDMatrixCreateFromColumnarPKcPKcP13DMatrixHandle) Create a DMatrix from columnar data. (table)

A special type of input to the

`DMatrix`

is the columnar format, which refers to column-based dataframes. XGBoost can accept both numeric data types like integers and floats, along with the categorical type, called dictionary in arrow’s term. The addition of categorical type is introduced in 3.1.0. The dataframe is represented by a list array interfaces with one object for each column.A categorical type is represented by 3 buffers, the validity mask, the names of the categories (called index for most of the dataframe implementation), and the codes used to represent the categories in the rows. XGBoost consumes a categorical column by accepting two JSON-encoded arrow arrays in a list. The first item in the list is a JSON object with

`{"offsets": IntegerArray, "values": StringArray }`

representing the string names defined by the arrow columnar format. The second buffer is an masked integer array that stores the categorical codes along with the validity mask:[ // categorical column, represented as an array (list) [ { 'offsets': { 'data': (129412626415808, True), 'typestr': '<i4', 'version': 3, 'strides': None, 'shape': (3,), 'mask': None }, 'values': { 'data': (129412626416000, True), 'typestr': '<i1', 'version': 3, 'strides': None, 'shape': (7,), 'mask': None } }, { 'data': (106200854378448, True), 'typestr': '<i1', 'version': 3, 'strides': None, 'shape': (2,), 'mask': None } ], // numeric column, represented as an object, same number of rows as the previous column (2) { 'data': (106200854378448, True), 'typestr': '<f4', 'version': 3, 'strides': None, 'shape': (2,), 'mask': None } ]

As for numeric inputs, it’s the same as dense array.

- Parameters:
**data**– A list of JSON-encoded array interfaces.**config**– See[XGDMatrixCreateFromDense](#group__DMatrix_1ga3e836a891df997bee524a18e16b8e540)for details.**out**– The created DMatrix.

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixCreateFromCSR(char const *indptr, char const *indices, char const *data, bst_ulong ncol, char const *config,
[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv422XGDMatrixCreateFromCSRPKcPKcPKc9bst_ulongPKcP13DMatrixHandle) Create a DMatrix from CSR matrix.

- Parameters:
**indptr**– JSON encoded**array_interface**to row pointers in CSR.**indices**– JSON encoded**array_interface**to column indices in CSR.**data**– JSON encoded**array_interface**to values in CSR.**ncol**– The number of columns.**config**– See[XGDMatrixCreateFromDense](#group__DMatrix_1ga3e836a891df997bee524a18e16b8e540)for details.**out**– The created dmatrix

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixCreateFromDense(char const *data, char const *config,
[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv424XGDMatrixCreateFromDensePKcPKcP13DMatrixHandle) Create a DMatrix from dense array.

The array interface is defined in

[https://numpy.org/doc/2.1/reference/arrays.interface.html](https://numpy.org/doc/2.1/reference/arrays.interface.html)We encode the interface as a JSON object.- Parameters:
**data**– JSON encoded**array_interface**to array values.**config**– JSON encoded configuration. Required values are:missing: Which value to represent missing value.

nthread (optional): Number of threads used for initializing DMatrix.

data_split_mode (optional): Whether the data was split by row or column beforehand. Default to row.


**out**– The created DMatrix

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixCreateFromCSC(char const *indptr, char const *indices, char const *data, bst_ulong nrow, char const *config,
[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv422XGDMatrixCreateFromCSCPKcPKcPKc9bst_ulongPKcP13DMatrixHandle) Create a DMatrix from a CSC matrix.

- Parameters:
**indptr**– JSON encoded**array_interface**to column pointers in CSC.**indices**– JSON encoded**array_interface**to row indices in CSC.**data**– JSON encoded**array_interface**to values in CSC.**nrow**– The number of rows in the matrix.**config**– See[XGDMatrixCreateFromDense](#group__DMatrix_1ga3e836a891df997bee524a18e16b8e540)for details.**out**– The created dmatrix.

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixCreateFromMat(const float *data, bst_ulong nrow, bst_ulong ncol, float missing,
[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv422XGDMatrixCreateFromMatPKf9bst_ulong9bst_ulongfP13DMatrixHandle) create matrix content from dense matrix

- Parameters:
**data**– pointer to the data space**nrow**– number of rows**ncol**– number columns**missing**– which value to represent missing value**out**– created dmatrix

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixCreateFromMat_omp(const float *data, bst_ulong nrow, bst_ulong ncol, float missing,
[DMatrixHandle](#_CPPv413DMatrixHandle)*out, int nthread)[](#_CPPv426XGDMatrixCreateFromMat_ompPKf9bst_ulong9bst_ulongfP13DMatrixHandlei) create matrix content from dense matrix

- Parameters:
**data**– pointer to the data space**nrow**– number of rows**ncol**– number columns**missing**– which value to represent missing value**out**– created dmatrix**nthread**– number of threads (up to maximum cores available, if <=0 use all cores)

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixCreateFromCudaColumnar(char const *data, char const *config,
[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv431XGDMatrixCreateFromCudaColumnarPKcPKcP13DMatrixHandle) Create DMatrix from CUDA columnar format. (cuDF)

See

[XGDMatrixCreateFromColumnar](#group__DMatrix_1gad821e2318362d3ca45c5a396bea846c7)for a brief description of the columnar format.- Parameters:
**data**– A list of JSON-encoded array interfaces.**config**– See[XGDMatrixCreateFromDense](#group__DMatrix_1ga3e836a891df997bee524a18e16b8e540)for details.**out**– Created dmatrix

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixCreateFromCudaArrayInterface(char const *data, char const *config,
[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv437XGDMatrixCreateFromCudaArrayInterfacePKcPKcP13DMatrixHandle) Create DMatrix from CUDA array.

- Parameters:
**data**– JSON encoded**cuda_array_interface**for array data.**config**– JSON encoded configuration. Required values are:missing: Which value to represent missing value.

nthread (optional): Number of threads used for initializing DMatrix.

data_split_mode (optional): Whether the data was split by row or column beforehand. Default to row.


**out**– created dmatrix

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixSliceDMatrix(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const int *idxset, bst_ulong len,[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv421XGDMatrixSliceDMatrix13DMatrixHandlePKi9bst_ulongP13DMatrixHandle) create a new dmatrix from sliced content of existing matrix

- Parameters:
**handle**– instance of data matrix to be sliced**idxset**– index set**len**– length of index set**out**– a sliced new matrix

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixSliceDMatrixEx(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const int *idxset, bst_ulong len,[DMatrixHandle](#_CPPv413DMatrixHandle)*out, int allow_groups)[](#_CPPv423XGDMatrixSliceDMatrixEx13DMatrixHandlePKi9bst_ulongP13DMatrixHandlei) create a new dmatrix from sliced content of existing matrix

- Parameters:
**handle**– instance of data matrix to be sliced**idxset**– index set**len**– length of index set**out**– a sliced new matrix**allow_groups**– allow slicing of an array with groups

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixFree(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle)[](#_CPPv413XGDMatrixFree13DMatrixHandle) Free a DMatrix object.

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixSaveBinary(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const char *fname, int silent)[](#_CPPv419XGDMatrixSaveBinary13DMatrixHandlePKci) Save the DMatrix object into a file.

`QuantileDMatrix`

and external memory DMatrix are not supported.- Parameters:
**handle**– a instance of data matrix**fname**– File name**silent**– print statistics when saving

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixSetInfoFromInterface(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, char const *field, char const *data)[](#_CPPv429XGDMatrixSetInfoFromInterface13DMatrixHandlePKcPKc) Set content in array interface to a content in info.

- Parameters:
**handle**– An instance of data matrix**field**– Field name.**data**– JSON encoded**array_interface**to values in the dense matrix/vector.

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixSetFloatInfo(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const char *field, const float *array, bst_ulong len)[](#_CPPv421XGDMatrixSetFloatInfo13DMatrixHandlePKcPKf9bst_ulong) set float vector to a content in info

- Parameters:
**handle**– a instance of data matrix**field**– field name, can be label, weight**array**– pointer to float vector**len**– length of array

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixSetUIntInfo(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const char *field, const unsigned *array, bst_ulong len)[](#_CPPv420XGDMatrixSetUIntInfo13DMatrixHandlePKcPKj9bst_ulong) -
*Deprecated:* since 2.1.0


Use

[XGDMatrixSetInfoFromInterface](#group__DMatrix_1gad3177f4c5d12a5e56e818e66514b41e7)instead.-

-
int XGDMatrixSetStrFeatureInfo(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const char *field, const char **features, const bst_ulong size)[](#_CPPv426XGDMatrixSetStrFeatureInfo13DMatrixHandlePKcPPKcK9bst_ulong) Set string encoded information of all features.

Accepted fields are:

feature_name

feature_type


char const* feat_names [] {"feat_0", "feat_1"}; XGDMatrixSetStrFeatureInfo(handle, "feature_name", feat_names, 2); // i for integer, q for quantitive, c for categorical. Similarly "int" and "float" // are also recognized. char const* feat_types [] {"i", "q"}; XGDMatrixSetStrFeatureInfo(handle, "feature_type", feat_types, 2);

- Parameters:
**handle**– An instance of data matrix**field**– Field name**features**– Pointer to array of strings.**size**– Size of`features`

pointer (number of strings passed in).

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixGetStrFeatureInfo(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const char *field, bst_ulong *size, const char ***out_features)[](#_CPPv426XGDMatrixGetStrFeatureInfo13DMatrixHandlePKcP9bst_ulongPPPKc) Get string encoded information of all features.

Accepted fields are:

feature_name

feature_type


Caller is responsible for copying out the data, before next call to any API function of XGBoost.

char const **c_out_features = NULL; bst_ulong out_size = 0; // Asumming the feature names are already set by `XGDMatrixSetStrFeatureInfo`. XGDMatrixGetStrFeatureInfo(handle, "feature_name", &out_size, &c_out_features) for (bst_ulong i = 0; i < out_size; ++i) { // Here we are simply printing the string. Copy it out if the feature name is // useful after printing. printf("feature %lu: %s\n", i, c_out_features[i]); }

- Parameters:
**handle**– An instance of data matrix**field**– Field name**size**– Size of output pointer`features`

(number of strings returned).**out_features**– Address of a pointer to array of strings. Result is stored in thread local memory.

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixGetCategories(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, char const *config,[CategoriesHandle](#_CPPv416CategoriesHandle)*out)[](#_CPPv422XGDMatrixGetCategories13DMatrixHandlePKcP16CategoriesHandle) Create an opaque handle to the internal category container.

The container should be freed by

[XGBCategoriesFree](#group__DMatrix_1gaf532dbb8cc3ca83957d1f963f9d29166)**Since**3.2.0


DMatrixHandle fmat; // Create a DMatrix from categorical data // ... CategoriesHandle cats; int err = XGBoosterGetCategories(fmat, NULL, &cats) if (err != 0) { exit(-1); } err = XGBCategoriesFree(cats); if (err != 0) { exit(-1); }

Note

Experimental API, subject to change in the future.

- Parameters:
**handle**– An instance of the data matrix.**config**– Unused, reserved for the future.**out**– Created handle to the category container. Set to NULL if there’s no category.

- Returns:
0 when success, -1 when failure happens.



-
int XGDMatrixGetCategoriesExportToArrow(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, char const *config,[CategoriesHandle](#_CPPv416CategoriesHandle)*out, char const **export_out)[](#_CPPv435XGDMatrixGetCategoriesExportToArrow13DMatrixHandlePKcP16CategoriesHandlePPKc) Create an opaque handle to the internal container and export it to arrow.

The container should be freed by

[XGBCategoriesFree](#group__DMatrix_1gaf532dbb8cc3ca83957d1f963f9d29166)**Since**3.2.0


Note

Experimental API, subject to change in the future.

- Parameters:
**handle**– An instance of the data matrix.**config**– Unused, reserved for the future.**out**– Created handle to the category container**export_out**– JSON encoded array of categories, with length equal to the number of features.

- Returns:
0 when success, -1 when failure happens.



-
int XGBCategoriesFree(
[CategoriesHandle](#_CPPv416CategoriesHandle)handle)[](#_CPPv417XGBCategoriesFree16CategoriesHandle) Free the opaque handle.

**Since**3.2.0


Note

Experimental API, subject to change in the future.

- Parameters:
**handle**– An instance of the category container.- Returns:
0 when success, -1 when failure happens.



-
int XGDMatrixSetDenseInfo(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const char *field, void const *data, bst_ulong size, int type)[](#_CPPv421XGDMatrixSetDenseInfo13DMatrixHandlePKcPKv9bst_ulongi) -
*Deprecated:* since 2.1.0


Use

[XGDMatrixSetInfoFromInterface](#group__DMatrix_1gad3177f4c5d12a5e56e818e66514b41e7)instead.-

-
int XGDMatrixGetInfoRef(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, char const *field, char const **out_array)[](#_CPPv419XGDMatrixGetInfoRef13DMatrixHandlePKcPPKc) Get a reference to data like label or weight.

This method replaces the existing

[XGDMatrixGetFloatInfo](#group__DMatrix_1gaecc0dbd4127a8d82383f62148082541b)and[XGDMatrixGetUIntInfo](#group__DMatrix_1gaa0978ddfaf81b638f8fa2b474a11388d)to support non-vector (like a matrix) output. The output data directly references the internal storage, as a result, it’s read-only and user should copy data before the next XGBoost call.**Since**3.2.0


- Parameters:
**handle**– An instance of data matrix**field**– Field name**out_array**– JSON encoded __(cuda)_array_interface__ to the output.

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixGetFloatInfo(const
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const char *field, bst_ulong *out_len, const float **out_dptr)[](#_CPPv421XGDMatrixGetFloatInfoK13DMatrixHandlePKcP9bst_ulongPPKf) get float info vector from matrix.

- Parameters:
**handle**– a instance of data matrix**field**– field name**out_len**– used to set result length**out_dptr**– pointer to the result

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixGetUIntInfo(const
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const char *field, bst_ulong *out_len, const unsigned **out_dptr)[](#_CPPv420XGDMatrixGetUIntInfoK13DMatrixHandlePKcP9bst_ulongPPKj) get uint32 info vector from matrix

- Parameters:
**handle**– a instance of data matrix**field**– field name**out_len**– The length of the field.**out_dptr**– pointer to the result

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixNumRow(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, bst_ulong *out)[](#_CPPv415XGDMatrixNumRow13DMatrixHandleP9bst_ulong) Get the number of rows from a DMatrix.

- Parameters:
**handle**– the handle to the DMatrix**out**– The address to hold number of rows.

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixNumCol(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, bst_ulong *out)[](#_CPPv415XGDMatrixNumCol13DMatrixHandleP9bst_ulong) Get the number of columns from a DMatrix.

- Parameters:
**handle**– the handle to the DMatrix**out**– The output of number of columns

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixNumNonMissing(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, bst_ulong *out)[](#_CPPv422XGDMatrixNumNonMissing13DMatrixHandleP9bst_ulong) Get number of valid values from a DMatrix.

- Parameters:
**handle**– the handle to the DMatrix**out**– The output of number of non-missing values

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixDataSplitMode(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, bst_ulong *out)[](#_CPPv422XGDMatrixDataSplitMode13DMatrixHandleP9bst_ulong) Get the data split mode from DMatrix.

- Parameters:
**handle**– the handle to the DMatrix**out**– The output of the data split mode

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixGetDataAsCSR(
[DMatrixHandle](#_CPPv413DMatrixHandle)const handle, char const *config, bst_ulong *out_indptr, unsigned *out_indices, float *out_data)[](#_CPPv421XGDMatrixGetDataAsCSRK13DMatrixHandlePKcP9bst_ulongPjPf) Get the predictors from DMatrix as CSR matrix for testing. If this is a quantized DMatrix, quantized values are returned instead.

Unlike most of XGBoost C functions, caller of

`XGDMatrixGetDataAsCSR`

is required to allocate the memory for return buffer instead of using thread local memory from XGBoost. This is to avoid allocating a huge memory buffer that can not be freed until exiting the thread.**Since**1.7.0


- Parameters:
**handle**– the handle to the DMatrix**config**– JSON configuration string. At the moment it should be an empty document, preserved for future use.**out_indptr**– indptr of output CSR matrix.**out_indices**– Column index of output CSR matrix.**out_data**– Data value of CSR matrix.

- Returns:
0 when success, -1 when failure happens



-
int XGDMatrixGetQuantileCut(
[DMatrixHandle](#_CPPv413DMatrixHandle)const handle, char const *config, char const **out_indptr, char const **out_data)[](#_CPPv423XGDMatrixGetQuantileCutK13DMatrixHandlePKcPPKcPPKc) Export the quantile cuts used for training histogram-based models like

`hist`

and`approx`

. Useful for model compression.**Since**2.0.0


- Parameters:
**handle**– the handle to the DMatrix**config**– JSON configuration string. At the moment it should be an empty document, preserved for future use.**out_indptr**– indptr of output CSC matrix represented by a JSON encoded __(cuda_)array_interface__.**out_data**– Data value of CSC matrix represented by a JSON encoded __(cuda_)array_interface__.



-
int XGDMatrixCreateFromFile(const char *fname, int silent,

#### Streaming[](#streaming)

-
*group*Streaming Quantile DMatrix and external memory DMatrix can be created from batches of data.

There are 2 sets of data callbacks for DMatrix. The first one is currently exclusively used by JVM packages. It uses


to accept batches for CSR formated input, and concatenate them into 1 final big CSR. The related functions are:[XGBoostBatchCSR](#structXGBoostBatchCSR)Another set is used by external data iterator. It accepts foreign data iterators as callbacks. There are 2 different senarios where users might want to pass in callbacks instead of raw data. First it’s the Quantile DMatrix used by the hist and GPU-based hist tree method. For this case, the data is first compressed by quantile sketching then merged. This is particular useful for distributed setting as it eliminates 2 copies of data. First one by a

`concat`

from external library to make the data into a blob for normal DMatrix initialization, another one by the internal CSR copy of DMatrix.The second use case is external memory support where users can pass a custom data iterator into XGBoost for loading data in batches. For both cases, the iterator is only used during the construction of the DMatrix and can be safely freed after construction finishes. There are short notes on each of the use cases in respected DMatrix factory function.

Related functions are:

##### Factory functions

[](#group__Streaming_1autotoc_md0)[XGDMatrixCreateFromCallback](#group__Streaming_1ga41fbed4c98bde6625c3a1b65fea3c6e9)for external memory[XGQuantileDMatrixCreateFromCallback](#group__Streaming_1gacda4c56a0906ec81f1d1328e768bf831)for quantile DMatrix[XGExtMemQuantileDMatrixCreateFromCallback](#group__Streaming_1gab3a9426c5b42c1f4ef53aa64f092f3b2)for External memory Quantile DMatrix

##### Proxy that callers can use to pass data to XGBoost

[](#group__Streaming_1autotoc_md1)Typedefs

-
typedef void *DataIterHandle
[](#_CPPv414DataIterHandle) handle to a external data iterator


-
typedef void *DataHolderHandle
[](#_CPPv416DataHolderHandle) handle to an internal data holder.


-
typedef int XGBCallbackSetData(
[DataHolderHandle](#_CPPv416DataHolderHandle)handle,[XGBoostBatchCSR](#_CPPv415XGBoostBatchCSR)batch)[](#_CPPv418XGBCallbackSetData) Callback to set the data to handle,.

- Param handle:
The handle to the callback.

- Param batch:
The data content to be set.



-
typedef int XGBCallbackDataIterNext(
[DataIterHandle](#_CPPv414DataIterHandle)data_handle,[XGBCallbackSetData](#_CPPv418XGBCallbackSetData)*set_function,[DataHolderHandle](#_CPPv416DataHolderHandle)set_function_handle)[](#_CPPv423XGBCallbackDataIterNext) The data reading callback function. The iterator will be able to give subset of batch in the data.

If there is data, the function will call set_function to set the data.

- Param data_handle:
The handle to the callback.

- Param set_function:
The batch returned by the iterator

- Param set_function_handle:
The handle to be passed to set function.

- Return:
0 if we are reaching the end and batch is not returned.



-
typedef int XGDMatrixCallbackNext(
[DataIterHandle](#_CPPv414DataIterHandle)iter)[](#_CPPv421XGDMatrixCallbackNext) Callback function prototype for getting next batch of data.

- Param iter:
A handler to the user defined iterator.

- Return:
0 when success, -1 when failure happens.



-
typedef void DataIterResetCallback(
[DataIterHandle](#_CPPv414DataIterHandle)handle)[](#_CPPv421DataIterResetCallback) Callback function prototype for resetting the external iterator.


Functions

-
int XGDMatrixCreateFromDataIter(
[DataIterHandle](#_CPPv414DataIterHandle)data_handle,[XGBCallbackDataIterNext](#_CPPv423XGBCallbackDataIterNext)*callback, const char *cache_info, float missing,[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv427XGDMatrixCreateFromDataIter14DataIterHandleP23XGBCallbackDataIterNextPKcfP13DMatrixHandle) Create a DMatrix from a data iterator.

- Parameters:
**data_handle**– The handle to the data.**callback**– The callback to get the data.**cache_info**– Additional information about cache file, can be null.**missing**– Which value to represent missing value.**out**– The created DMatrix

- Returns:
0 when success, -1 when failure happens.



-
int XGProxyDMatrixCreate(
[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv420XGProxyDMatrixCreateP13DMatrixHandle) Create a DMatrix proxy for setting data, can be freed by

[XGDMatrixFree](#group__DMatrix_1ga2d148bb68942afe5a572c2b9a854de4a).Second set of callback functions, used by constructing Quantile DMatrix or external memory DMatrix using a custom iterator.

The DMatrix proxy is only a temporary reference (wrapper) to the actual user data. For instance, if a dense matrix (like a numpy array) is passed into the proxy DMatrix via the

[XGProxyDMatrixSetDataDense](#group__Streaming_1gab31237395c8aaab6b0cd51ae87beaa51)method, then the proxy DMatrix holds only a reference and the input array cannot be freed until the next iteration starts, signaled by a call to the[XGDMatrixCallbackNext](#group__Streaming_1gaaab0c0ce234827f980304d57d19da57d)by XGBoost. It’s called`ProxyDMatrix`

because it reuses the interface of the DMatrix class in XGBoost, but it’s just a mid interface for the[XGDMatrixCreateFromCallback](#group__Streaming_1ga41fbed4c98bde6625c3a1b65fea3c6e9)and related constructors to consume various user input types.User inputs -> Proxy DMatrix (wrapper) -> Actual DMatrix

- Parameters:
**out**– The created Proxy DMatrix.- Returns:
0 when success, -1 when failure happens.



-
int XGDMatrixCreateFromCallback(
[DataIterHandle](#_CPPv414DataIterHandle)iter,[DMatrixHandle](#_CPPv413DMatrixHandle)proxy,[DataIterResetCallback](#_CPPv421DataIterResetCallback)*reset,[XGDMatrixCallbackNext](#_CPPv421XGDMatrixCallbackNext)*next, char const *config,[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv427XGDMatrixCreateFromCallback14DataIterHandle13DMatrixHandleP21DataIterResetCallbackP21XGDMatrixCallbackNextPKcP13DMatrixHandle) Create an external memory DMatrix with data iterator.

Short note for how to use second set of callback for external memory data support:

Step 0: Define a data iterator with 2 methods

`reset`

, and`next`

.Step 1: Create a DMatrix proxy by

[XGProxyDMatrixCreate](#group__Streaming_1ga8eb52e44ca26bf3742f97bb605c9fe34)and hold the handle.Step 2: Pass the iterator handle, proxy handle and 2 methods into

[XGDMatrixCreateFromCallback](#group__Streaming_1ga41fbed4c98bde6625c3a1b65fea3c6e9), along with other parameters encoded as a JSON object.Step 3: Call appropriate data setters in

`next`

functions.

- Parameters:
**iter**– A handle to external data iterator.**proxy**– A DMatrix proxy handle created by[XGProxyDMatrixCreate](#group__Streaming_1ga8eb52e44ca26bf3742f97bb605c9fe34).**reset**– Callback function resetting the iterator state.**next**– Callback function yielding the next batch of data.**config**– JSON encoded parameters for DMatrix construction. Accepted fields are:missing: Which value to represent missing value

cache_prefix: The path of cache file, caller must initialize all the directories in this path.

nthread (optional): Number of threads used for initializing DMatrix.


**out**–**[out]**The created external memory DMatrix

- Returns:
0 when success, -1 when failure happens



-
int XGQuantileDMatrixCreateFromCallback(
[DataIterHandle](#_CPPv414DataIterHandle)iter,[DMatrixHandle](#_CPPv413DMatrixHandle)proxy,[DataIterHandle](#_CPPv414DataIterHandle)ref,[DataIterResetCallback](#_CPPv421DataIterResetCallback)*reset,[XGDMatrixCallbackNext](#_CPPv421XGDMatrixCallbackNext)*next, char const *config,[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv435XGQuantileDMatrixCreateFromCallback14DataIterHandle13DMatrixHandle14DataIterHandleP21DataIterResetCallbackP21XGDMatrixCallbackNextPKcP13DMatrixHandle) Create a Quantile DMatrix with a data iterator.

Short note for how to use the second set of callback for (GPU)Hist tree method:

Step 0: Define a data iterator with 2 methods

`reset`

, and`next`

.Step 1: Create a DMatrix proxy by

[XGProxyDMatrixCreate](#group__Streaming_1ga8eb52e44ca26bf3742f97bb605c9fe34)and hold the handle.Step 2: Pass the iterator handle, proxy handle and 2 methods into

[XGQuantileDMatrixCreateFromCallback](#group__Streaming_1gacda4c56a0906ec81f1d1328e768bf831).Step 3: Call appropriate data setters in

`next`

functions.

See test_iterative_dmatrix.cu or Python interface for examples.

- Parameters:
**iter**– A handle to external data iterator.**proxy**– A DMatrix proxy handle created by[XGProxyDMatrixCreate](#group__Streaming_1ga8eb52e44ca26bf3742f97bb605c9fe34).**ref**– Reference DMatrix for providing quantile information.**reset**– Callback function resetting the iterator state.**next**– Callback function yielding the next batch of data.**config**– JSON encoded parameters for DMatrix construction. Accepted fields are:missing: Which value to represent missing value

nthread (optional): Number of threads used for initializing DMatrix.

max_bin (optional): Maximum number of bins for building histogram. Must be consistent with the corresponding booster training parameter.

max_quantile_blocks (optional): For GPU-based inputs, XGBoost handles incoming batches with multiple growing substreams. This parameter sets the maximum number of batches before XGBoost can cut the sub-stream and create a new one. This can help bound the memory usage. By default, XGBoost grows new sub-streams exponentially until batches are exhausted. Only used for the training dataset and the default is None (unbounded).


**out**– The created Quantile DMatrix.

- Returns:
0 when success, -1 when failure happens



-
int XGExtMemQuantileDMatrixCreateFromCallback(
[DataIterHandle](#_CPPv414DataIterHandle)iter,[DMatrixHandle](#_CPPv413DMatrixHandle)proxy,[DataIterHandle](#_CPPv414DataIterHandle)ref,[DataIterResetCallback](#_CPPv421DataIterResetCallback)*reset,[XGDMatrixCallbackNext](#_CPPv421XGDMatrixCallbackNext)*next, char const *config,[DMatrixHandle](#_CPPv413DMatrixHandle)*out)[](#_CPPv441XGExtMemQuantileDMatrixCreateFromCallback14DataIterHandle13DMatrixHandle14DataIterHandleP21DataIterResetCallbackP21XGDMatrixCallbackNextPKcP13DMatrixHandle) Create a Quantile DMatrix backed by external memory.

See

[Using XGBoost External Memory Version](tutorials/external_memory.html)for more info.**Since**3.0.0


cache_host_ratio (optioinal): For GPU-based inputs, XGBoost can split the cache into host and device portitions to reduce the data transfer overhead. This parameter specifies the size of host cache compared to the size of the entire cache:

`host / (host + device)`

.

Note

This is experimental and subject to change.

- Parameters:
**out**– The created Quantile DMatrix.**iter**– A handle to external data iterator.**proxy**– A DMatrix proxy handle created by[XGProxyDMatrixCreate](#group__Streaming_1ga8eb52e44ca26bf3742f97bb605c9fe34).**ref**– Reference DMatrix for providing quantile information.**reset**– Callback function resetting the iterator state.**next**– Callback function yielding the next batch of data.**config**– JSON encoded parameters for DMatrix construction. Accepted fields are:missing: Which value to represent missing value

cache_prefix: The path of cache file, caller must initialize all the directories in this path.

nthread (optional): Number of threads used for initializing DMatrix.

max_bin (optional): Maximum number of bins for building histogram. Must be consistent with the corresponding booster training parameter.

on_host (optional): Whether the data should be placed on host memory. Used by GPU inputs.

min_cache_page_bytes (optional): The minimum number of bytes for each internal GPU page. Set to 0 to disable page concatenation. Automatic configuration if the parameter is not provided or set to None.

max_quantile_blocks (optional): For GPU-based inputs, XGBoost handles incoming batches with multiple growing substreams. This parameter sets the maximum number of batches before XGBoost can cut the sub-stream and create a new one. This can help bound the memory usage. By default, XGBoost grows new sub-streams exponentially until batches are exhausted. Only used for the training dataset and the default is None (unbounded).



- Returns:
0 when success, -1 when failure happens



-
int XGProxyDMatrixSetDataCudaArrayInterface(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const char *data)[](#_CPPv439XGProxyDMatrixSetDataCudaArrayInterface13DMatrixHandlePKc) Set data on a DMatrix proxy.

- Parameters:
**handle**– A DMatrix proxy created by[XGProxyDMatrixCreate](#group__Streaming_1ga8eb52e44ca26bf3742f97bb605c9fe34)**data**– Null terminated JSON document string representation of CUDA array interface.

- Returns:
0 when success, -1 when failure happens



-
int XGProxyDMatrixSetDataColumnar(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, char const *data)[](#_CPPv429XGProxyDMatrixSetDataColumnar13DMatrixHandlePKc) Set columnar (table) data on a DMatrix proxy.

- Parameters:
**handle**– A DMatrix proxy created by[XGProxyDMatrixCreate](#group__Streaming_1ga8eb52e44ca26bf3742f97bb605c9fe34)**data**– See[XGDMatrixCreateFromColumnar](#group__DMatrix_1gad821e2318362d3ca45c5a396bea846c7)for details.

- Returns:
0 when success, -1 when failure happens



-
int XGProxyDMatrixSetDataCudaColumnar(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, const char *data)[](#_CPPv433XGProxyDMatrixSetDataCudaColumnar13DMatrixHandlePKc) Set CUDA-based columnar (table) data on a DMatrix proxy.

- Parameters:
**handle**– A DMatrix proxy created by[XGProxyDMatrixCreate](#group__Streaming_1ga8eb52e44ca26bf3742f97bb605c9fe34)**data**– See[XGDMatrixCreateFromColumnar](#group__DMatrix_1gad821e2318362d3ca45c5a396bea846c7)for details.

- Returns:
0 when success, -1 when failure happens



-
int XGProxyDMatrixSetDataDense(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, char const *data)[](#_CPPv426XGProxyDMatrixSetDataDense13DMatrixHandlePKc) Set data on a DMatrix proxy.

- Parameters:
**handle**– A DMatrix proxy created by[XGProxyDMatrixCreate](#group__Streaming_1ga8eb52e44ca26bf3742f97bb605c9fe34)**data**– Null terminated JSON document string representation of array interface.

- Returns:
0 when success, -1 when failure happens



-
int XGProxyDMatrixSetDataCSR(
[DMatrixHandle](#_CPPv413DMatrixHandle)handle, char const *indptr, char const *indices, char const *data, bst_ulong ncol)[](#_CPPv424XGProxyDMatrixSetDataCSR13DMatrixHandlePKcPKcPKc9bst_ulong) Set data on a DMatrix proxy.

- Parameters:
**handle**– A DMatrix proxy created by[XGProxyDMatrixCreate](#group__Streaming_1ga8eb52e44ca26bf3742f97bb605c9fe34)**indptr**– JSON encoded**array_interface**to row pointer in CSR.**indices**– JSON encoded**array_interface**to column indices in CSR.**data**– JSON encoded**array_interface**to values in CSR..**ncol**– The number of columns of input CSR matrix.

- Returns:
0 when success, -1 when failure happens



-
struct XGBoostBatchCSR
[](#_CPPv415XGBoostBatchCSR) *#include <c_api.h>*Mini batch used in XGBoost Data Iteration.



### Booster[](#booster)

-
*group*Booster The

`Booster`

class is the gradient-boosted model for XGBoost.During training, the booster object has many caches for improved performance. In addition to gradient and prediction, it also includes runtime buffers like leaf partitions. These buffers persist with the Booster object until either

[XGBoosterReset()](#group__Booster_1gae952ca519453a0219bfffcdb421608b3)is called or the booster is deleted by the[XGBoosterFree()](#group__Booster_1ga273e030407c2ab55844f59a487cb3714).Functions

-
int XGBoosterCreate(const
[DMatrixHandle](#_CPPv413DMatrixHandle)dmats[], bst_ulong len,[BoosterHandle](#_CPPv413BoosterHandle)*out)[](#_CPPv415XGBoosterCreateA_K13DMatrixHandle9bst_ulongP13BoosterHandle) Create a XGBoost learner (booster)

- Parameters:
**dmats**– matrices that are set to be cached by the booster.**len**– length of dmats**out**– handle to the result booster

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterFree(
[BoosterHandle](#_CPPv413BoosterHandle)handle)[](#_CPPv413XGBoosterFree13BoosterHandle) Delete the booster.

- Parameters:
**handle**– The handle to be freed.- Returns:
0 when success, -1 when failure happens



-
int XGBoosterReset(
[BoosterHandle](#_CPPv413BoosterHandle)handle)[](#_CPPv414XGBoosterReset13BoosterHandle) Reset the booster object to release data caches used for training.

**Since**3.0.0


- Returns:
0 when success, -1 when failure happens



-
int XGBoosterSlice(
[BoosterHandle](#_CPPv413BoosterHandle)handle, int begin_layer, int end_layer, int step,[BoosterHandle](#_CPPv413BoosterHandle)*out)[](#_CPPv414XGBoosterSlice13BoosterHandleiiiP13BoosterHandle) Slice a model using boosting index. The slice m:n indicates taking all trees that were fit during the boosting rounds m, (m+1), (m+2), …, (n-1).

- Parameters:
**handle**– Booster to be sliced.**begin_layer**– start of the slice**end_layer**– end of the slice; end_layer=0 is equivalent to end_layer=num_boost_round**step**– step size of the slice**out**– Sliced booster.

- Returns:
0 when success, -1 when failure happens, -2 when index is out of bound.



-
int XGBoosterBoostedRounds(
[BoosterHandle](#_CPPv413BoosterHandle)handle, int *out)[](#_CPPv422XGBoosterBoostedRounds13BoosterHandlePi) Get number of boosted rounds from gradient booster. When process_type is update, this number might drop due to removed tree.

- Parameters:
**handle**– Handle to booster.**out**– Pointer to output integer.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterSetParam(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const char *name, const char *value)[](#_CPPv417XGBoosterSetParam13BoosterHandlePKcPKc) set parameters

- Parameters:
**handle**– handle**name**– parameter name**value**– value of parameter

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterGetNumFeature(
[BoosterHandle](#_CPPv413BoosterHandle)handle, bst_ulong *out)[](#_CPPv422XGBoosterGetNumFeature13BoosterHandleP9bst_ulong) get number of features

- Parameters:
**handle**– Handle to booster.**out**– number of features

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterUpdateOneIter(
[BoosterHandle](#_CPPv413BoosterHandle)handle, int iter,[DMatrixHandle](#_CPPv413DMatrixHandle)dtrain)[](#_CPPv422XGBoosterUpdateOneIter13BoosterHandlei13DMatrixHandle) update the model in one round using dtrain

- Parameters:
**handle**– handle**iter**– current iteration rounds**dtrain**– training data

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterBoostOneIter(
[BoosterHandle](#_CPPv413BoosterHandle)handle,[DMatrixHandle](#_CPPv413DMatrixHandle)dtrain, float *grad, float *hess, bst_ulong len)[](#_CPPv421XGBoosterBoostOneIter13BoosterHandle13DMatrixHandlePfPf9bst_ulong) -
*Deprecated:* since 2.1.0


-

-
int XGBoosterTrainOneIter(
[BoosterHandle](#_CPPv413BoosterHandle)handle,[DMatrixHandle](#_CPPv413DMatrixHandle)dtrain, int iter, char const *grad, char const *hess)[](#_CPPv421XGBoosterTrainOneIter13BoosterHandle13DMatrixHandleiPKcPKc) Update a model with gradient and Hessian. This is used for training with a custom objective function.

**Since**2.0.0


- Parameters:
**handle**– handle**dtrain**– The training data.**iter**– The current iteration round. When training continuation is used, the count should restart.**grad**– Json encoded __(cuda)_array_interface__ for gradient.**hess**– Json encoded __(cuda)_array_interface__ for Hessian.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterEvalOneIter(
[BoosterHandle](#_CPPv413BoosterHandle)handle, int iter,[DMatrixHandle](#_CPPv413DMatrixHandle)dmats[], const char *evnames[], bst_ulong len, const char **out_result)[](#_CPPv420XGBoosterEvalOneIter13BoosterHandleiA_13DMatrixHandleA_PKc9bst_ulongPPKc) get evaluation statistics for xgboost

- Parameters:
**handle**– handle**iter**– current iteration rounds**dmats**– pointers to data to be evaluated**evnames**– pointers to names of each data**len**– length of dmats**out_result**– the string containing evaluation statistics

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterDumpModel(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const char *fmap, int with_stats, bst_ulong *out_len, const char ***out_dump_array)[](#_CPPv418XGBoosterDumpModel13BoosterHandlePKciP9bst_ulongPPPKc) dump model, return array of strings representing model dump

- Parameters:
**handle**– handle**fmap**– name to fmap can be empty string**with_stats**– whether to dump with statistics**out_len**– length of output array**out_dump_array**– pointer to hold representing dump of each model

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterDumpModelEx(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const char *fmap, int with_stats, const char *format, bst_ulong *out_len, const char ***out_dump_array)[](#_CPPv420XGBoosterDumpModelEx13BoosterHandlePKciPKcP9bst_ulongPPPKc) dump model, return array of strings representing model dump

- Parameters:
**handle**– handle**fmap**– name to fmap can be empty string**with_stats**– whether to dump with statistics**format**– the format to dump the model in**out_len**– length of output array**out_dump_array**– pointer to hold representing dump of each model

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterDumpModelWithFeatures(
[BoosterHandle](#_CPPv413BoosterHandle)handle, int fnum, const char **fname, const char **ftype, int with_stats, bst_ulong *out_len, const char ***out_models)[](#_CPPv430XGBoosterDumpModelWithFeatures13BoosterHandleiPPKcPPKciP9bst_ulongPPPKc) dump model, return array of strings representing model dump

- Parameters:
**handle**– handle**fnum**– number of features**fname**– names of features**ftype**– types of features**with_stats**– whether to dump with statistics**out_len**– length of output array**out_models**– pointer to hold representing dump of each model

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterDumpModelExWithFeatures(
[BoosterHandle](#_CPPv413BoosterHandle)handle, int fnum, const char **fname, const char **ftype, int with_stats, const char *format, bst_ulong *out_len, const char ***out_models)[](#_CPPv432XGBoosterDumpModelExWithFeatures13BoosterHandleiPPKcPPKciPKcP9bst_ulongPPPKc) dump model, return array of strings representing model dump

- Parameters:
**handle**– handle**fnum**– number of features**fname**– names of features**ftype**– types of features**with_stats**– whether to dump with statistics**format**– the format to dump the model in**out_len**– length of output array**out_models**– pointer to hold representing dump of each model

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterGetCategories(
[BoosterHandle](#_CPPv413BoosterHandle)handle, char const *config,[CategoriesHandle](#_CPPv416CategoriesHandle)*out)[](#_CPPv422XGBoosterGetCategories13BoosterHandlePKcP16CategoriesHandle) -
**Since**3.2.0


Note

Experimental API, subject to change in the future.


-
int XGBoosterGetCategoriesExportToArrow(
[BoosterHandle](#_CPPv413BoosterHandle)handle, char const *config,[CategoriesHandle](#_CPPv416CategoriesHandle)*out, char const **export_out)[](#_CPPv435XGBoosterGetCategoriesExportToArrow13BoosterHandlePKcP16CategoriesHandlePPKc) See

[XGDMatrixGetCategoriesExportToArrow](#group__DMatrix_1gae1e929c160291345563f2f11706d05f3)**Since**3.2.0


Note

Experimental API, subject to change in the future.


-
int XGBoosterGetAttr(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const char *key, const char **out, int *success)[](#_CPPv416XGBoosterGetAttr13BoosterHandlePKcPPKcPi) Get string attribute from Booster.

- Parameters:
**handle**– handle**key**– The key of the attribute.**out**– The result attribute, can be NULL if the attribute do not exist.**success**– Whether the result is contained in out.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterSetAttr(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const char *key, const char *value)[](#_CPPv416XGBoosterSetAttr13BoosterHandlePKcPKc) Set or delete string attribute.

- Parameters:
**handle**– handle**key**– The key of the attribute.**value**– The value to be saved. If nullptr, the attribute would be deleted.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterGetAttrNames(
[BoosterHandle](#_CPPv413BoosterHandle)handle, bst_ulong *out_len, const char ***out)[](#_CPPv421XGBoosterGetAttrNames13BoosterHandleP9bst_ulongPPPKc) Get the names of all attribute from Booster.

- Parameters:
**handle**– handle**out_len**– the argument to hold the output length**out**– pointer to hold the output attribute stings

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterSetStrFeatureInfo(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const char *field, const char **features, const bst_ulong size)[](#_CPPv426XGBoosterSetStrFeatureInfo13BoosterHandlePKcPPKcK9bst_ulong) Set string encoded feature info in Booster, similar to the feature info in DMatrix.

Accepted fields are:

feature_name

feature_type


- Parameters:
**handle**– An instance of Booster**field**– Field name**features**– Pointer to array of strings.**size**– Size of`features`

pointer (number of strings passed in).

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterGetStrFeatureInfo(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const char *field, bst_ulong *len, const char ***out_features)[](#_CPPv426XGBoosterGetStrFeatureInfo13BoosterHandlePKcP9bst_ulongPPPKc) Get string encoded feature info from Booster, similar to the feature info in DMatrix.

Accepted field names are:

feature_name

feature_type


Caller is responsible for copying out the data, before the next call to any API function of XGBoost.

- Parameters:
**handle**– An instance of Booster**field**– Field name**len**– Size of output pointer`features`

(number of strings returned).**out_features**– Address of a pointer to array of strings. Result is stored in thread local memory.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterFeatureScore(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const char *config, bst_ulong *out_n_features, char const ***out_features, bst_ulong *out_dim, bst_ulong const **out_shape, float const **out_scores)[](#_CPPv421XGBoosterFeatureScore13BoosterHandlePKcP9bst_ulongPPPKcP9bst_ulongPPK9bst_ulongPPKf) Calculate feature scores for tree models. When used on linear model, only the

`weight`

importance type is defined, and output scores is a row major matrix with shape [n_features, n_classes] for multi-class model. For tree model, out_n_feature is always equal to out_n_scores and has multiple definitions of importance type.- Parameters:
**handle**– An instance of Booster**config**– Parameters for computing scores encoded as JSON. Accepted JSON keys are:importance_type: A JSON string with following possible values:

’weight’: the number of times a feature is used to split the data across all trees.

’gain’: the average gain across all splits the feature is used in.

’cover’: the average coverage across all splits the feature is used in.

’total_gain’: the total gain across all splits the feature is used in.

’total_cover’: the total coverage across all splits the feature is used in.


feature_map: An optional JSON string with URI or path to the feature map file.

feature_names: An optional JSON array with string names for each feature.


**out_n_features**– Length of output feature names.**out_features**– An array of string as feature names, ordered the same as output scores.**out_dim**– Dimension of output feature scores.**out_shape**– Shape of output feature scores with length of`out_dim`

.**out_scores**– An array of floating point as feature scores with shape of`out_shape`

.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterCreate(const

#### Prediction[](#prediction)

-
*group*Prediction These functions are used for running prediction and explanation algorithms.

Functions

-
int XGBoosterPredict(
[BoosterHandle](#_CPPv413BoosterHandle)handle,[DMatrixHandle](#_CPPv413DMatrixHandle)dmat, int option_mask, unsigned ntree_limit, int training, bst_ulong *out_len, const float **out_result)[](#_CPPv416XGBoosterPredict13BoosterHandle13DMatrixHandleijiP9bst_ulongPPKf) make prediction based on dmat (deprecated, use

[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)instead)-
*Deprecated:*

See also

- Parameters:
**handle**– handle**dmat**– data matrix**option_mask**– bit-mask of options taken in prediction, possible values 0:normal prediction 1:output margin instead of transformed value 2:output leaf index of trees instead of leaf value, note leaf index is unique per tree 4:output feature contributions to individual predictions**ntree_limit**– limit number of trees used for prediction, this is only valid for boosted trees when the parameter is set to 0, we will use all the trees**training**– Whether the prediction function is used as part of a training loop. Prediction can be run in 2 scenarios:Given data matrix X, obtain prediction y_pred from the model.

Obtain the prediction for computing gradients. For example, DART booster performs dropout during training, and the prediction result will be different from the one obtained by normal inference step due to dropped trees. Set training=false for the first scenario. Set training=true for the second scenario. The second scenario applies when you are defining a custom objective function.


**out_len**– used to store length of returning result**out_result**– used to set a pointer to array

- Returns:
0 when success, -1 when failure happens


-

-
int XGBoosterPredictFromDMatrix(
[BoosterHandle](#_CPPv413BoosterHandle)handle,[DMatrixHandle](#_CPPv413DMatrixHandle)dmat, char const *config, bst_ulong const **out_shape, bst_ulong *out_dim, float const **out_result)[](#_CPPv427XGBoosterPredictFromDMatrix13BoosterHandle13DMatrixHandlePKcPPK9bst_ulongP9bst_ulongPPKf) Make prediction from DMatrix, replacing

[XGBoosterPredict](#group__Prediction_1ga3e4d11089d266ae4f913ab43864c6b12).“type”: [0, 6]

0: normal prediction

1: output margin

2: predict contribution

3: predict approximated contribution

4: predict feature interaction

5: predict approximated feature interaction

6: predict leaf “training”: bool Whether the prediction function is used as part of a training loop.

**Not used for inplace prediction**.

Prediction can be run in 2 scenarios:

Given data matrix X, obtain prediction y_pred from the model.

Obtain the prediction for computing gradients. For example, DART booster performs dropout during training, and the prediction result will be different from the one obtained by normal inference step due to dropped trees. Set training=false for the first scenario. Set training=true for the second scenario. The second scenario applies when you are defining a custom objective function. “iteration_begin”: int Beginning iteration of prediction. “iteration_end”: int End iteration of prediction. Set to 0 this will become the size of tree model (all the trees). “strict_shape”: bool Whether should we reshape the output with stricter rules. If set to true, normal/margin/contrib/interaction predict will output consistent shape disregarding the use of multi-class model, and leaf prediction will output 4-dim array representing: (n_samples, n_iterations, n_classes, n_trees_in_forest)


Example JSON input for running a normal prediction with strict output shape, 2 dim for softprob , 1 dim for others.

{ "type": 0, "training": false, "iteration_begin": 0, "iteration_end": 0, "strict_shape": true }

See also

[XGBoosterPredictFromDense](#group__Prediction_1ga17c3224ae6e92977cbc436205d17a903)[XGBoosterPredictFromCSR](#group__Prediction_1ga636a2de725760b20cd0042487ab401cb)[XGBoosterPredictFromCudaArray](#group__Prediction_1ga0835b6c0c1b4378b231fc3d52c7f51f2)[XGBoosterPredictFromCudaColumnar](#group__Prediction_1ga36f7bc90afab54c45dc9675ab0b7a371)- Parameters:
**handle**– Booster handle**dmat**– DMatrix handle**config**– String encoded predict configuration in JSON format, with following available fields in the JSON object:**out_shape**– Shape of output prediction (copy before use).**out_dim**– Dimension of output prediction.**out_result**– Buffer storing prediction value (copy before use).

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterPredictFromDense(
[BoosterHandle](#_CPPv413BoosterHandle)handle, char const *values, char const *config,[DMatrixHandle](#_CPPv413DMatrixHandle)m, bst_ulong const **out_shape, bst_ulong *out_dim, const float **out_result)[](#_CPPv425XGBoosterPredictFromDense13BoosterHandlePKcPKc13DMatrixHandlePPK9bst_ulongP9bst_ulongPPKf) Inplace prediction from CPU dense matrix.

Note

If the booster is configured to run on a CUDA device, XGBoost falls back to run prediction with DMatrix with a performance warning.

- Parameters:
**handle**– Booster handle.**values**– JSON encoded**array_interface**to values.**config**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info. Additional fields for inplace prediction are:”missing”: float


**m**– An optional (NULL if not available) proxy DMatrix instance storing meta info.**out_shape**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.**out_dim**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.**out_result**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterPredictFromColumnar(
[BoosterHandle](#_CPPv413BoosterHandle)handle, char const *values, char const *config,[DMatrixHandle](#_CPPv413DMatrixHandle)m, bst_ulong const **out_shape, bst_ulong *out_dim, const float **out_result)[](#_CPPv428XGBoosterPredictFromColumnar13BoosterHandlePKcPKc13DMatrixHandlePPK9bst_ulongP9bst_ulongPPKf) Inplace prediction from CPU columnar data. (Table)

Note

If the booster is configured to run on a CUDA device, XGBoost falls back to run prediction with DMatrix with a performance warning.

- Parameters:
**handle**– Booster handle.**data**– See[XGDMatrixCreateFromColumnar](#group__DMatrix_1gad821e2318362d3ca45c5a396bea846c7)for more info.**config**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info. Additional fields for inplace prediction are:”missing”: float


**m**– An optional (NULL if not available) proxy DMatrix instance storing meta info.**out_shape**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.**out_dim**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.**out_result**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterPredictFromCSR(
[BoosterHandle](#_CPPv413BoosterHandle)handle, char const *indptr, char const *indices, char const *values, bst_ulong ncol, char const *config,[DMatrixHandle](#_CPPv413DMatrixHandle)m, bst_ulong const **out_shape, bst_ulong *out_dim, const float **out_result)[](#_CPPv423XGBoosterPredictFromCSR13BoosterHandlePKcPKcPKc9bst_ulongPKc13DMatrixHandlePPK9bst_ulongP9bst_ulongPPKf) Inplace prediction from CPU CSR matrix.

Note

If the booster is configured to run on a CUDA device, XGBoost falls back to run prediction with DMatrix with a performance warning.

- Parameters:
**handle**– Booster handle.**indptr**– JSON encoded**array_interface**to row pointer in CSR.**indices**– JSON encoded**array_interface**to column indices in CSR.**values**– JSON encoded**array_interface**to values in CSR..**ncol**– Number of features in data.**config**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info. Additional fields for inplace prediction are:”missing”: float


**m**– An optional (NULL if not available) proxy DMatrix instance storing meta info.**out_shape**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.**out_dim**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.**out_result**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterPredictFromCudaArray(
[BoosterHandle](#_CPPv413BoosterHandle)handle, char const *values, char const *config,[DMatrixHandle](#_CPPv413DMatrixHandle)proxy, bst_ulong const **out_shape, bst_ulong *out_dim, const float **out_result)[](#_CPPv429XGBoosterPredictFromCudaArray13BoosterHandlePKcPKc13DMatrixHandlePPK9bst_ulongP9bst_ulongPPKf) Inplace prediction from CUDA Dense matrix (cupy in Python).

Note

If the booster is configured to run on a CPU, XGBoost falls back to run prediction with DMatrix with a performance warning.

- Parameters:
**handle**– Booster handle**values**– JSON encoded**cuda_array_interface**to values.**config**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info. Additional fields for inplace prediction are:”missing”: float


**proxy**– An optional (NULL if not available) proxy DMatrix instance storing meta info.**out_shape**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.**out_dim**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.**out_result**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterPredictFromCudaColumnar(
[BoosterHandle](#_CPPv413BoosterHandle)handle, char const *data, char const *config,[DMatrixHandle](#_CPPv413DMatrixHandle)proxy, bst_ulong const **out_shape, bst_ulong *out_dim, const float **out_result)[](#_CPPv432XGBoosterPredictFromCudaColumnar13BoosterHandlePKcPKc13DMatrixHandlePPK9bst_ulongP9bst_ulongPPKf) Inplace prediction from CUDA dense dataframe (cuDF in Python).

Note

If the booster is configured to run on a CPU, XGBoost falls back to run prediction with DMatrix with a performance warning.

- Parameters:
**handle**– Booster handle**data**– See[XGDMatrixCreateFromColumnar](#group__DMatrix_1gad821e2318362d3ca45c5a396bea846c7)for more info.**config**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info. Additional fields for inplace prediction are:”missing”: float


**proxy**– An optional (NULL if not available) proxy DMatrix instance storing meta info.**out_shape**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.**out_dim**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.**out_result**– See[XGBoosterPredictFromDMatrix](#group__Prediction_1gaaddd1ac06e24eef88a6c08983ba2b223)for more info.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterPredict(

#### Serialization[](#serialization)

-
*group*Serialization There are multiple ways to serialize a Booster object depending on the use case.

Short note for serialization APIs. There are 3 different sets of serialization API.

Functions with the term “Model” handles saving/loading XGBoost model like trees or linear weights. Striping out parameters configuration like training algorithms or CUDA device ID. These functions are designed to let users reuse the trained model for different tasks, examples are prediction, training continuation or model interpretation.

Functions with the term “Config” handles save/loading configuration. It helps user to study the internal of XGBoost. Also user can use the load method for specifying parameters in a structured way. These functions were introduced in 1.0.0.

Functions with the term “Serialization” are combination of above two. They are used in situations like check-pointing, or continuing training task in a distributed environment. In these cases the task must be carried out without any user intervention.


Functions

-
int XGBoosterLoadModel(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const char *fname)[](#_CPPv418XGBoosterLoadModel13BoosterHandlePKc) Load the model from an existing file.

- Parameters:
**handle**– handle**fname**– File name. The string must be UTF-8 encoded.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterSaveModel(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const char *fname)[](#_CPPv418XGBoosterSaveModel13BoosterHandlePKc) Save the model into an existing file.

- Parameters:
**handle**– handle**fname**– File name. The string must be UTF-8 encoded.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterLoadModelFromBuffer(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const void *buf, bst_ulong len)[](#_CPPv428XGBoosterLoadModelFromBuffer13BoosterHandlePKv9bst_ulong) load model from in memory buffer

- Parameters:
**handle**– handle**buf**– pointer to the buffer**len**– the length of the buffer

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterSaveModelToBuffer(
[BoosterHandle](#_CPPv413BoosterHandle)handle, char const *config, bst_ulong *out_len, char const **out_dptr)[](#_CPPv426XGBoosterSaveModelToBuffer13BoosterHandlePKcP9bst_ulongPPKc) Save model into raw bytes, return header of the array. User must copy the result out, before next xgboost call.

- Parameters:
**handle**– handle**config**– JSON encoded string storing parameters for the function. Following keys are expected in the JSON document:”format”: str

json: Output booster will be encoded as JSON.

ubj: Output booster will be encoded as Universal binary JSON. this format except for compatibility reasons.



**out_len**– The argument to hold the output length**out_dptr**– The argument to hold the output data pointer

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterSerializeToBuffer(
[BoosterHandle](#_CPPv413BoosterHandle)handle, bst_ulong *out_len, const char **out_dptr)[](#_CPPv426XGBoosterSerializeToBuffer13BoosterHandleP9bst_ulongPPKc) Memory snapshot based serialization method. Saves everything states into buffer.

- Parameters:
**handle**– handle**out_len**– the argument to hold the output length**out_dptr**– the argument to hold the output data pointer

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterUnserializeFromBuffer(
[BoosterHandle](#_CPPv413BoosterHandle)handle, const void *buf, bst_ulong len)[](#_CPPv430XGBoosterUnserializeFromBuffer13BoosterHandlePKv9bst_ulong) Memory snapshot based serialization method. Loads the buffer returned from

[XGBoosterSerializeToBuffer](#group__Serialization_1gaf6ca66b82d53df2f4fa493e0109aa86e).- Parameters:
**handle**– handle**buf**– pointer to the buffer**len**– the length of the buffer

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterSaveJsonConfig(
[BoosterHandle](#_CPPv413BoosterHandle)handle, bst_ulong *out_len, char const **out_str)[](#_CPPv423XGBoosterSaveJsonConfig13BoosterHandleP9bst_ulongPPKc) Save XGBoost’s internal configuration into a JSON document. Currently the support is experimental, function signature may change in the future without notice.

- Parameters:
**handle**– handle to Booster object.**out_len**– length of output string**out_str**– A valid pointer to array of characters. The characters array is allocated and managed by XGBoost, while pointer to that array needs to be managed by caller.

- Returns:
0 when success, -1 when failure happens



-
int XGBoosterLoadJsonConfig(
[BoosterHandle](#_CPPv413BoosterHandle)handle, char const *config)[](#_CPPv423XGBoosterLoadJsonConfig13BoosterHandlePKc) Load XGBoost’s internal configuration from a JSON document. Currently the support is experimental, function signature may change in the future without notice.

- Parameters:
**handle**– handle to Booster object.**config**– string representation of a JSON document.

- Returns:
0 when success, -1 when failure happens




### Collective[](#collective)

-
*group*Collective Experimental support for exposing internal communicator in XGBoost.

The collective communicator in XGBoost evolved from the

`rabit`

project of dmlc but has changed significantly since its adoption. It consists of a tracker and a set of workers. The tracker is responsible for bootstrapping the communication group and handling centralized tasks like logging. The workers are actual communicators performing collective tasks like allreduce.To use the collective implementation, one needs to first create a tracker with corresponding parameters, then get the arguments for workers using

[XGTrackerWorkerArgs()](#group__Collective_1gaf7e22328192de039c663e5611c6c1fc5). The obtained arguments can then be passed to the[XGCommunicatorInit()](#group__Collective_1ga9d0f3cfcea059dc4b4d7496595049f4d)function. Call to[XGCommunicatorInit()](#group__Collective_1ga9d0f3cfcea059dc4b4d7496595049f4d)must be accompanied with a[XGCommunicatorFinalize()](#group__Collective_1gabc3b39b98896071c5e398b21f573856f)call for cleanups. Please note that the communicator uses`std::thread`

in C++, which has undefined behavior in a C++ destructor due to the runtime shutdown sequence. It’s preferable to call[XGCommunicatorFinalize()](#group__Collective_1gabc3b39b98896071c5e398b21f573856f)before the runtime is shutting down. This requirement is similar to a Python thread or socket, which should not be relied upon in a`__del__`

function.Since it’s used as a part of XGBoost, errors will be returned when a XGBoost function is called, for instance, training a booster might return a connection error.

Note

This is still under development.

Typedefs

-
typedef void *TrackerHandle
[](#_CPPv413TrackerHandle) Handle to the tracker.

There are currently two types of tracker in XGBoost, first one is

`rabit`

, while the other one is`federated`

.`rabit`

is used for normal collective communication, while`federated`

is used for federated learning.

Functions

-
int XGTrackerCreate(char const *config,
[TrackerHandle](#_CPPv413TrackerHandle)*handle)[](#_CPPv415XGTrackerCreatePKcP13TrackerHandle) Create a new tracker.

dmlc_communicator: String, the type of tracker to create. Available options are

`rabit`

and`federated`

. See[TrackerHandle](#group__Collective_1gaa21c8c7fc16389e0ff426e91f2c12e68)for more info.n_workers: Integer, the number of workers.

port: (Optional) Integer, the port this tracker should listen to.

timeout: (Optional) Integer, timeout in seconds for various networking operations. Default is 300 seconds.


Some configurations are

`rabit`

specific:host: (Optional) String, Used by the the

`rabit`

tracker to specify the address of the host. This can be useful when the communicator cannot reliably obtain the host address.sortby: (Optional) Integer.

0: Sort workers by their host name.

1: Sort workers by task IDs.



Some

`federated`

specific configurations:federated_secure: Boolean, whether this is a secure server. False for testing.

server_key_path: Path to the server key. Used only if this is a secure server.

server_cert_path: Path to the server certificate. Used only if this is a secure server.

client_cert_path: Path to the client certificate. Used only if this is a secure server.


- Parameters:
**config**– JSON encoded parameters.**handle**– The handle to the created tracker.

- Returns:
0 when success, -1 when failure happens



-
int XGTrackerWorkerArgs(
[TrackerHandle](#_CPPv413TrackerHandle)handle, char const **args)[](#_CPPv419XGTrackerWorkerArgs13TrackerHandlePPKc) Get the arguments needed for running workers. This should be called after

[XGTrackerRun()](#group__Collective_1ga0e8655584d33a24d043bf86f597f12bf).- Parameters:
**handle**– The handle to the tracker.**args**– The arguments returned as a JSON document.

- Returns:
0 when success, -1 when failure happens



-
int XGTrackerRun(
[TrackerHandle](#_CPPv413TrackerHandle)handle, char const *config)[](#_CPPv412XGTrackerRun13TrackerHandlePKc) Start the tracker. The tracker runs in the background and this function returns once the tracker is started.

- Parameters:
**handle**– The handle to the tracker.**config**– Unused at the moment, preserved for the future.

- Returns:
0 when success, -1 when failure happens



-
int XGTrackerWaitFor(
[TrackerHandle](#_CPPv413TrackerHandle)handle, char const *config)[](#_CPPv416XGTrackerWaitFor13TrackerHandlePKc) Wait for the tracker to finish, should be called after

[XGTrackerRun()](#group__Collective_1ga0e8655584d33a24d043bf86f597f12bf). This function will block until the tracker task is finished or timeout is reached.- Parameters:
**handle**– The handle to the tracker.**config**– JSON encoded configuration. No argument is required yet, preserved for the future.

- Returns:
0 when success, -1 when failure happens



-
int XGTrackerFree(
[TrackerHandle](#_CPPv413TrackerHandle)handle)[](#_CPPv413XGTrackerFree13TrackerHandle) Free a tracker instance. This should be called after

[XGTrackerWaitFor()](#group__Collective_1ga290ba5c91b485b0a4070ac838e57e0ab). If the tracker is not properly waited, this function will shutdown all connections with the tracker, potentially leading to undefined behavior.- Parameters:
**handle**– The handle to the tracker.- Returns:
0 when success, -1 when failure happens



-
int XGCommunicatorInit(char const *config)
[](#_CPPv418XGCommunicatorInitPKc) Initialize the collective communicator.

Currently the communicator API is experimental, function signatures may change in the future without notice.

Call this once in the worker process before using anything. Please make sure

[XGCommunicatorFinalize()](#group__Collective_1gabc3b39b98896071c5e398b21f573856f)is called after use. The initialized commuicator is a global thread-local variable.Only applicable to the

`rabit`

communicator:dmlc_tracker_uri: Hostname or IP address of the tracker.

dmlc_tracker_port: Port number of the tracker.

dmlc_task_id: ID of the current task, can be used to obtain deterministic rank assignment.

dmlc_retry: The number of retries for connection failure.

dmlc_timeout: Timeout in seconds.

dmlc_nccl_path: Path to the nccl shared library

`libnccl.so`

.

Only applicable to the

`federated`

communicator (use upper case for environment variables, use lower case for runtime configuration):federated_server_address: Address of the federated server.

federated_world_size: Number of federated workers.

federated_rank: Rank of the current worker.

federated_server_cert_path: Server certificate file path. Only needed for the SSL mode.

federated_client_key_path: Client key file path. Only needed for the SSL mode.

federated_client_cert_path: Client certificate file path. Only needed for the SSL mode.


- Parameters:
**config**– JSON encoded configuration. Accepted JSON keys are:dmlc_communicator: The type of the communicator, this should match the tracker type.

rabit: Use Rabit. This is the default if the type is unspecified.

federated: Use the gRPC interface for Federated Learning.



- Returns:
0 when success, -1 when failure happens



-
int XGCommunicatorFinalize(void)
[](#_CPPv422XGCommunicatorFinalizev) Finalize the collective communicator.

Call this function after you have finished all jobs.

- Returns:
0 when success, -1 when failure happens



-
int XGCommunicatorGetRank(void)
[](#_CPPv421XGCommunicatorGetRankv) Get rank of the current process.

- Returns:
Rank of the worker.



-
int XGCommunicatorGetWorldSize(void)
[](#_CPPv426XGCommunicatorGetWorldSizev) Get the total number of processes.

- Returns:
Total world size.



-
int XGCommunicatorIsDistributed(void)
[](#_CPPv427XGCommunicatorIsDistributedv) Get if the communicator is distributed.

- Returns:
True if the communicator is distributed.



-
int XGCommunicatorPrint(char const *message)
[](#_CPPv419XGCommunicatorPrintPKc) Print the message to the tracker.

This function can be used to communicate the information of the progress to the user who monitors the tracker.

- Parameters:
**message**– The message to be printed.- Returns:
0 when success, -1 when failure happens



-
int XGCommunicatorGetProcessorName(const char **name_str)
[](#_CPPv430XGCommunicatorGetProcessorNamePPKc) Get the name of the processor.

- Parameters:
**name_str**– Pointer to received returned processor name.- Returns:
0 when success, -1 when failure happens



-
int XGCommunicatorBroadcast(void *send_receive_buffer, size_t size, int root)
[](#_CPPv423XGCommunicatorBroadcastPv6size_ti) Broadcast a memory region to all others from root. This function is NOT thread-safe.

Example:

int a = 1; Broadcast(&a, sizeof(a), root);

- Parameters:
**send_receive_buffer**– Pointer to the send or receive buffer.**size**– Size of the data in bytes.**root**– The process rank to broadcast from.

- Returns:
0 when success, -1 when failure happens



-
int XGCommunicatorAllreduce(void *send_receive_buffer, size_t count, int data_type, int op)
[](#_CPPv423XGCommunicatorAllreducePv6size_tii) Perform in-place allreduce. This function is NOT thread-safe.

Example Usage: the following code gives sum of the result

enum class Op { kMax = 0, kMin = 1, kSum = 2, kBitwiseAND = 3, kBitwiseOR = 4, kBitwiseXOR = 5 }; std::vector<int> data(10); ... Allreduce(data.data(), data.size(), DataType:kInt32, Op::kSum); ...

- Parameters:
**send_receive_buffer**– Buffer for both sending and receiving data.**count**– Number of elements to be reduced.**data_type**– Enumeration of data type, see xgboost::collective::DataType in communicator.h.**op**– Enumeration of operation type, see xgboost::collective::Operation in communicator.h.

- Returns:
0 when success, -1 when failure happens



-
typedef void *TrackerHandle

---

## Source: https://xgboost.readthedocs.io/en/stable/c%2B%2B.html

# XGBoost C++ API[](#xgboost-c-api)

Starting from 1.0 release, CMake will generate installation rules to export all C++ headers. But
the c++ interface is much closer to the internal of XGBoost than other language bindings.
As a result it’s changing quite often and we don’t maintain its stability. Along with the
plugin system (see `plugin/example`

in XGBoost’s source tree), users can utilize some
existing c++ headers for gaining more access to the internal of XGBoost.

---

## Source: https://xgboost.readthedocs.io/en/stable/contrib/index.html

# Contribute to XGBoost[](#contribute-to-xgboost)

XGBoost has been developed by community members. Everyone is welcome to contribute. We value all forms of contributions, including, but not limited to:

Code reviews for pull requests

Documentation and usage examples

Community participation in forums and issues

Code readability and developer guide

We welcome contributions that add code comments to improve readability.

We also welcome contributions to docs to explain the design choices of the XGBoost internals.


Test cases to make the codebase more robust.

Tutorials, blog posts, talks that promote the project.


Here are guidelines for contributing to various aspect of the XGBoost project:

---

## Source: https://xgboost.readthedocs.io/en/stable/changes/index.html

# Release Notes[](#release-notes)

For release notes prior to the 2.1 release, please see [news](https://github.com/dmlc/xgboost/blob/master/NEWS.md) .

[3.2.0 (2026 Feb 09)](v3.2.0.html)[3.1.3 Patch Release (Jan 08 2026)](v3.1.0.html)[3.1.2 Patch Release (Nov 20 2025)](v3.1.0.html#patch-release-nov-20-2025)[3.1.1 Patch Release (Oct 22 2025)](v3.1.0.html#patch-release-oct-22-2025)[3.1.0 (2025 Sep 22)](v3.1.0.html#sep-22)[3.0.3 Patch Release (Jul 30 2025)](v3.0.0.html)[3.0.2 Patch Release (May 25 2025)](v3.0.0.html#patch-release-may-25-2025)[3.0.1 Patch Release (May 13 2025)](v3.0.0.html#patch-release-may-13-2025)[3.0.0 (2025 Feb 27)](v3.0.0.html#feb-27)[2.1.4 Patch Release (2025 Feb 6)](v2.1.0.html)[2.1.3 Patch Release (2024 Nov 26)](v2.1.0.html#patch-release-2024-nov-26)[2.1.2 Patch Release (2024 Oct 23)](v2.1.0.html#patch-release-2024-oct-23)[2.1.1 Patch Release (2024 Jul 31)](v2.1.0.html#patch-release-2024-jul-31)[2.1.0 (2024 Jun 20)](v2.1.0.html#jun-20)

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/model.html

# Introduction to Boosted Trees[](#introduction-to-boosted-trees)

XGBoost stands for “Extreme Gradient Boosting”, where the term “Gradient Boosting” originates from the paper *Greedy Function Approximation: A Gradient Boosting Machine*, by Friedman.

The term **gradient boosted trees** has been around for a while, and there are a lot of materials on the topic.
This tutorial will explain boosted trees in a self-contained and principled way using the elements of supervised learning.
We think this explanation is cleaner, more formal, and motivates the model formulation used in XGBoost.

## Elements of Supervised Learning[](#elements-of-supervised-learning)

XGBoost is used for supervised learning problems, where we use the training data (with multiple features) \(x_i\) to predict a target variable \(y_i\). Before we learn about trees specifically, let us start by reviewing the basic elements in supervised learning.

### Model and Parameters[](#model-and-parameters)

The **model** in supervised learning usually refers to the mathematical structure of by which the prediction \(y_i\) is made from the input \(x_i\).
A common example is a *linear model*, where the prediction is given as \(\hat{y}_i = \sum_j \theta_j x_{ij}\), a linear combination of weighted input features.
The prediction value can have different interpretations, depending on the task, i.e., regression or classification.
For example, it can be logistic transformed to get the probability of positive class in logistic regression, and it can also be used as a ranking score when we want to rank the outputs.

The **parameters** are the undetermined part that we need to learn from data. In linear regression problems, the parameters are the coefficients \(\theta\).
Usually we will use \(\theta\) to denote the parameters (there are many parameters in a model, our definition here is sloppy).

### Objective Function: Training Loss + Regularization[](#objective-function-training-loss-regularization)

With judicious choices for \(y_i\), we may express a variety of tasks, such as regression, classification, and ranking.
The task of **training** the model amounts to finding the best parameters \(\theta\) that best fit the training data \(x_i\) and labels \(y_i\). In order to train the model, we need to define the **objective function**
to measure how well the model fit the training data.

A salient characteristic of objective functions is that they consist of two parts: **training loss** and **regularization term**:

where \(L\) is the training loss function, and \(\Omega\) is the regularization term. The training loss measures how *predictive* our model is with respect to the training data.
A common choice of \(L\) is the *mean squared error*, which is given by

Another commonly used loss function is logistic loss, to be used for logistic regression:

The **regularization term** is what people usually forget to add. The regularization term controls the complexity of the model, which helps us to avoid overfitting.
This sounds a bit abstract, so let us consider the following problem in the following picture. You are asked to *fit* visually a step function given the input data points
on the upper left corner of the image.
Which solution among the three do you think is the best fit?

The correct answer is marked in red. Please consider if this visually seems a reasonable fit to you. The general principle is we want both a *simple* and *predictive* model.
The tradeoff between the two is also referred as **bias-variance tradeoff** in machine learning.

### Why introduce the general principle?[](#why-introduce-the-general-principle)

The elements introduced above form the basic elements of supervised learning, and they are natural building blocks of machine learning toolkits. For example, you should be able to describe the differences and commonalities between gradient boosted trees and random forests. Understanding the process in a formalized way also helps us to understand the objective that we are learning and the reason behind the heuristics such as pruning and smoothing.

## Decision Tree Ensembles[](#decision-tree-ensembles)

Now that we have introduced the elements of supervised learning, let us get started with real trees.
To begin with, let us first learn about the model choice of XGBoost: **decision tree ensembles**.
The tree ensemble model consists of a set of classification and regression trees (CART). Here’s a simple example of a CART that classifies whether someone will like a hypothetical computer game X.


We classify the members of a family into different leaves, and assign them the score on the corresponding leaf. A CART is a bit different from decision trees, in which the leaf only contains decision values. In CART, a real score is associated with each of the leaves, which gives us richer interpretations that go beyond classification. This also allows for a principled, unified approach to optimization, as we will see in a later part of this tutorial.

Usually, a single tree is not strong enough to be used in practice. What is actually used is the ensemble model, which sums the prediction of multiple trees together.


Here is an example of a tree ensemble of two trees. The prediction scores of each individual tree are summed up to get the final score.
If you look at the example, an important fact is that the two trees try to *complement* each other.
Mathematically, we can write our model in the form

where \(K\) is the number of trees, \(f_k\) is a function in the functional space \(\mathcal{F}\), and \(\mathcal{F}\) is the set of all possible CARTs. The objective function to be optimized is given by

where \(\omega(f_k)\) is the complexity of the tree \(f_k\), defined in detail later.

Now here comes a trick question: what is the *model* used in random forests? Tree ensembles! So random forests and boosted trees are really the same models; the
difference arises from how we train them. This means that, if you write a predictive service for tree ensembles, you only need to write one and it should work
for both random forests and gradient boosted trees. (See [Treelite](https://treelite.readthedocs.io/en/latest/index.html) for an actual example.) One example of why elements of supervised learning rock.

## Tree Boosting[](#tree-boosting)

Now that we introduced the model, let us turn to training: How should we learn the trees?
The answer is, as is always for all supervised learning models: *define an objective function and optimize it*!

Let the following be the objective function (remember it always needs to contain training loss and regularization):

in which \(t\) is the number of trees in our ensemble. (Each training step will add one new tree, so that at step \(t\) the ensemble contains \(K=t\) trees).

### Additive Training[](#additive-training)

The first question we want to ask: what are the **parameters** of trees?
You can find that what we need to learn are those functions \(f_k\), each containing the structure
of the tree and the leaf scores. Learning tree structure is much harder than traditional optimization problem where you can simply take the gradient.
It is intractable to learn all the trees at once.
Instead, we use an additive strategy: fix what we have learned, and add one new tree at a time.
We write the prediction value at step \(t\) as \(\hat{y}_i^{(t)}\). Then we have

It remains to ask: which tree do we want at each step? A natural thing is to add the one that optimizes our objective.

If we consider using mean squared error (MSE) as our loss function, the objective becomes

The form of MSE is friendly, with a first order term (usually called the residual) and a quadratic term.
For other losses of interest (for example, logistic loss), it is not so easy to get such a nice form.
So in the general case, we take the *Taylor expansion of the loss function up to the second order*:

where the \(g_i\) and \(h_i\) are defined as

After we remove all the constants, the specific objective at step \(t\) becomes

This becomes our optimization goal for the new tree. One important advantage of this definition is that the value of the objective function only depends on \(g_i\) and \(h_i\). This is how XGBoost supports custom loss functions. We can optimize every loss function, including logistic regression and pairwise ranking, using exactly the same solver that takes \(g_i\) and \(h_i\) as input!

### Model Complexity[](#model-complexity)

We have introduced the training step, but wait, there is one important thing, the **regularization term**!
We need to define the complexity of the tree \(\omega(f)\). In order to do so, let us first refine the definition of the tree \(f(x)\) as

Here \(w\) is the vector of scores on leaves, \(q\) is a function assigning each data point to the corresponding leaf, and \(T\) is the number of leaves. In XGBoost, we define the complexity as

Of course, there is more than one way to define the complexity, but this one works well in practice. The regularization is one part most tree packages treat less carefully, or simply ignore. This was because the traditional treatment of tree learning only emphasized improving impurity, while the complexity control was left to heuristics. By defining it formally, we can get a better idea of what we are learning and obtain models that perform well in the wild.

### The Structure Score[](#the-structure-score)

Here is the magical part of the derivation. After re-formulating the tree model, we can write the objective value with the \(t\)-th tree as:

where \(I_j = \{i|q(x_i)=j\}\) is the set of indices of data points assigned to the \(j\)-th leaf. Notice that in the second line we have changed the index of the summation because all the data points on the same leaf get the same score. We could further compress the expression by defining \(G_j = \sum_{i\in I_j} g_i\) and \(H_j = \sum_{i\in I_j} h_i\):

In this equation, \(w_j\) are independent with respect to each other, the form \(G_jw_j+\frac{1}{2}(H_j+\lambda)w_j^2\) is quadratic and the best \(w_j\) for a given structure \(q(x)\) and the best objective reduction we can get is:

The last equation measures *how good* a tree structure \(q(x)\) is.


If all this sounds a bit complicated, let’s take a look at the picture, and see how the scores can be calculated. Basically, for a given tree structure, we push the statistics \(g_i\) and \(h_i\) to the leaves they belong to, sum the statistics together, and use the formula to calculate how good the tree is. This score is like the impurity measure in a decision tree, except that it also takes the model complexity into account.

### Learn the tree structure[](#learn-the-tree-structure)

Now that we have a way to measure how good a tree is, ideally we would enumerate all possible trees and pick the best one. In practice this is intractable, so we will try to optimize one level of the tree at a time. Specifically we try to split a leaf into two leaves, and the score it gains is

This formula can be decomposed as 1) the score on the new left leaf 2) the score on the new right leaf 3) The score on the original leaf 4) regularization on the additional leaf.
We can see an important fact here: if the gain is smaller than \(\gamma\), we would do better not to add that branch. This is exactly the **pruning** techniques in tree based
models! By using the principles of supervised learning, we can naturally come up with the reason these techniques work :)

For real valued data, we usually want to search for an optimal split. To efficiently do so, we place all the instances in sorted order, like the following picture.


A left to right scan is sufficient to calculate the structure score of all possible split solutions, and we can find the best split efficiently.

Note

Limitation of additive tree learning

Since it is intractable to enumerate all possible tree structures, we add one split at a time. This approach works well most of the time, but there are some edge cases that fail due to this approach. For those edge cases, training results in a degenerate model because we consider only one feature dimension at a time. See [Can Gradient Boosting Learn Simple Arithmetic?](http://mariofilho.com/can-gradient-boosting-learn-simple-arithmetic/) for an example.

## Final words on XGBoost[](#final-words-on-xgboost)

Now that you understand what boosted trees are, you may ask, where is the introduction for XGBoost?
XGBoost is exactly a tool motivated by the formal principle introduced in this tutorial!
More importantly, it is developed with both deep consideration in terms of **systems optimization** and **principles in machine learning**.
The goal of this library is to push the extreme of the computation limits of machines to provide a **scalable**, **portable** and **accurate** library.
Make sure you try it out, and most importantly, contribute your piece of wisdom (code, examples, tutorials) to the community!

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/saving_model.html

# Introduction to Model IO[](#introduction-to-model-io)

**Contents**

Since 2.1.0, the default model format for XGBoost is the UBJSON format, the option is enabled for serializing models to file, serializing models to buffer, and for memory snapshot (pickle and alike).

JSON and UBJSON have the same document structure with different representations, and we
will refer them collectively as the JSON format. This tutorial aims to share some basic
insights into the JSON serialisation method used in XGBoost. Without explicitly
mentioned, the following sections assume you are using the one of the 2 outputs formats,
which can be enabled by providing the file name with `.json`

(or `.ubj`

for binary
JSON) as file extension when saving/loading model: `booster.save_model('model.json')`

.
More details below.

Before we get started, XGBoost is a gradient boosting library with focus on tree model, which means inside XGBoost, there are 2 distinct parts:

The model consisting of trees and

Hyperparameters and configurations used for building the model.


If you come from the Deep Learning community, then it should be clear to you that there are differences between the neural network structures composed of weights with fixed tensor operations, and the optimizers (like RMSprop) used to train them.

So when one calls `booster.save_model`

(`xgb.save`

in R), XGBoost saves the trees,
some model parameters like number of input columns in trained trees, and the objective
function, which combined to represent the concept of “model” in XGBoost. As for why are
we saving the objective as part of model, that’s because objective controls transformation
of global bias (called `base_score`

or the intercept in XGBoost) and task-specific
information. Users can share this model with others for inference, evaluation or continue
the training with a different set of hyper-parameters etc.

However, this is not the end of story. There are cases where we need to save something
more than just the model itself. For example, in distributed training, XGBoost performs
checkpointing operation. Or for some reasons, your favorite distributed computing
framework decide to copy the model from one worker to another and continue the training in
there. In such cases, the serialisation output is required to contain enough information
to continue previous training without user providing any parameters again. We consider
such scenario as **memory snapshot** (or memory based serialisation method) and
distinguish it with normal model IO operation. Currently, memory snapshot is used in the
following places:

Python package: when the

`Booster`

object is pickled with the built-in`pickle`

module.R package: when the

`xgb.Booster`

object is persisted with the built-in functions`saveRDS`

or`save`

.JVM packages: when the

`Booster`

object is serialized with the built-in functions`saveModel`

.

To enable JSON format support for model IO (saving only the trees and objective), provide
a filename with `.json`

or `.ubj`

as file extension, the latter is the extension for
[Universal Binary JSON](https://ubjson.org/)

```
bst.save_model('model_file_name.json')
```

```
xgb.save(bst, 'model_file_name.json')
```

```
val format = "json" // or val format = "ubj"
model.write.option("format", format).save("model_directory_path")
```

Note

Only load models from JSON files that were produced by XGBoost. Attempting to load JSON files that were produced by an external source may lead to undefined behaviors and crashes.

When loading the model back, XGBoost recognizes the file extensions `.json`

and
`.ubj`

, and can dispatch accordingly. If the extension is not specified, XGBoost tries
to guess the right one.

## A note on backward compatibility of models and memory snapshots[](#a-note-on-backward-compatibility-of-models-and-memory-snapshots)

**We guarantee backward compatibility for models but not for memory snapshots.**

Models (trees and objective) use a stable representation, so that models produced in earlier
versions of XGBoost are accessible in later versions of XGBoost. **If you’d like to store or archive
your model for long-term storage, use** `save_model`

(Python) and `xgb.save`

(R).

On the other hand, memory snapshot (serialisation) captures many stuff internal to XGBoost, and its
format is not stable and is subject to frequent changes. Therefore, memory snapshot is suitable for
checkpointing only, where you persist the complete snapshot of the training configurations so that
you can recover robustly from possible failures and resume the training process. Loading memory
snapshot generated by an earlier version of XGBoost may result in errors or undefined behaviors.
**If a model is persisted with** `pickle.dump`

(Python) or `saveRDS`

(R), **then the model may
not be accessible in later versions of XGBoost.**

## Custom objective and metric[](#custom-objective-and-metric)

XGBoost accepts user provided objective and metric functions as an extension. These functions are not saved in model file as they are language dependent features. With Python, user can pickle the model to include these functions in saved binary. One drawback is, the output from pickle is not a stable serialization format and doesn’t work on different Python version nor XGBoost version, not to mention different language environments. Another way to workaround this limitation is to provide these functions again after the model is loaded. If the customized function is useful, please consider making a PR for implementing it inside XGBoost, this way we can have your functions working with different language bindings.

## Loading pickled file from different version of XGBoost[](#loading-pickled-file-from-different-version-of-xgboost)

As noted, pickled model is neither portable nor stable, but in some cases the pickled models are valuable. One way to restore it in the future is to load it back with that specific version of Python and XGBoost, export the model by calling save_model.

A similar procedure may be used to recover the model persisted in an old RDS file. In R,
you are able to install an older version of XGBoost using the `remotes`

package:

```
library(remotes)
remotes::install_version("xgboost", "0.90.0.1") # Install version 0.90.0.1
```

Once the desired version is installed, you can load the RDS file with `readRDS`

and recover the
`xgb.Booster`

object. Then call `xgb.save`

to export the model using the stable representation.
Now you should be able to use the model in the latest version of XGBoost.

## Saving and Loading the internal parameters configuration[](#saving-and-loading-the-internal-parameters-configuration)

XGBoost’s `C API`

, `Python API`

and `R API`

support saving and loading the internal
configuration directly as a JSON string. In Python package:

```
bst = xgboost.train(...)
config = bst.save_config()
print(config)
```

or in R:

```
config <- xgb.config(bst)
print(config)
```

Will print out something similar to (not actual output as it’s too long for demonstration):

```
{
"Learner": {
"generic_parameter": {
"device": "cuda:0",
"gpu_page_size": "0",
"n_jobs": "0",
"random_state": "0",
"seed": "0",
"seed_per_iteration": "0"
},
"gradient_booster": {
"gbtree_train_param": {
"num_parallel_tree": "1",
"process_type": "default",
"tree_method": "hist",
"updater": "grow_gpu_hist",
"updater_seq": "grow_gpu_hist"
},
"name": "gbtree",
"updater": {
"grow_gpu_hist": {
"gpu_hist_train_param": {
"debug_synchronize": "0",
},
"train_param": {
"alpha": "0",
"cache_opt": "1",
"colsample_bylevel": "1",
"colsample_bynode": "1",
"colsample_bytree": "1",
"default_direction": "learn",
...
"subsample": "1"
}
}
}
},
"learner_train_param": {
"booster": "gbtree",
"disable_default_eval_metric": "0",
"objective": "reg:squarederror"
},
"metrics": [],
"objective": {
"name": "reg:squarederror",
"reg_loss_param": {
"scale_pos_weight": "1"
}
}
},
"version": [1, 0, 0]
}
```

You can load it back to the model generated by same version of XGBoost by:

```
bst.load_config(config)
```

This way users can study the internal representation more closely. Please note that some JSON generators make use of locale dependent floating point serialization methods, which is not supported by XGBoost.

## Difference between saving model and dumping model[](#difference-between-saving-model-and-dumping-model)

XGBoost has a function called `dump_model`

in the Booster class, which lets you to
export the model in a readable format like `text`

, `json`

or `dot`

(graphviz). The
primary use case for it is for model interpretation and visualization, and is not supposed
to be loaded back to XGBoost.

## Categories[](#categories)

Since 3.1, the categories encoding from a training dataframe is stored in the booster to
provide test-time re-coding support, see [Auto-recoding (Data Consistency)](categorical.html#cat-recode) for more info about how the
re-coder works. We will briefly explain the JSON format for the serialized category index.

The categories are saved in a JSON object named “cats” under the gbtree model. It contains three keys:

feature_segments


This is a CSR-like pointer that stores the number of categories for each feature. It starts with zero and ends with the total number of categories from all features. For example:

```
feature_segments = [0, 3, 3, 5]
```

The `feature_segments`

list represents a dataset with two categorical features and one
numerical feature. The first feature contains three categories, the second feature is
numerical and thus has no categories, and the last feature includes two categories.

sorted_idx


This array stores the sorted indices (argsort) of categories across all features,
segmented by the `feature_segments`

. Given a feature with categories: ```
["b", "c",
"a"]
```

, the sorted index is `[2, 0, 1]`

.

enc


This is an array with a length equal to the number of features, storing all the categories
in the same order as the input dataframe. The storage schema depends on whether the
categories are strings (XGBoost also supports numerical categories, such as integers). For
string categories, we use a schema similar to the arrow format for a string array. The
categories of each feature are represented by two arrays, namely `offsets`

and
`values`

. The format is also similar to a CSR-matrix. The `values`

field is a
`uint8`

array storing characters from all category names. Given a feature with three
categories: `["bb", "c", "a"]`

, the `values`

field is `[98, 98, 99, 97]`

. Then the
`offsets`

segments the `values`

array similar to a CSR pointer: `[0, 2, 3, 4]`

. We
chose to not store the `values`

as a JSON string to avoid handling special characters
and string encoding. The string names are stored exactly as given by the dataframe.

As for numerical categories, the `enc`

contains two keys: `type`

and `values`

. The
`type`

field is an integer ID that identifies the type of the categories, such as 64-bit
integers and 32-bit floating points (note that they are all f32 inside a decision
tree). The exact mapping between the type to the integer ID is internal but stable. The
`values`

is an array storing all categories in a feature.

## Brief History[](#brief-history)

The JSON format was introduced in 1.0, aiming to replace the now removed old binary internal format with an open format that can be easily reused

Later in XGBoost 1.6.0, additional support for Universal Binary JSON was introduced as an optimization for more efficient model IO.

UBJSON has been set to default in 2.1.

The old binary format was removed in 3.1.

The JSON schema file is no longer maintained and has been removed in 3.2. The underlying schema of the model is not changed.

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/slicing_model.html

# Slicing Models[](#slicing-models)

## Slice tree model[](#slice-tree-model)

When `booster`

is set to `gbtree`

or `dart`

, XGBoost builds a tree model, which is a
list of trees and can be sliced into multiple sub-models.

```
import xgboost as xgb
from sklearn.datasets import make_classification
num_classes = 3
X, y = make_classification(n_samples=1000, n_informative=5,
n_classes=num_classes)
dtrain = xgb.DMatrix(data=X, label=y)
num_parallel_tree = 4
num_boost_round = 16
# total number of built trees is num_parallel_tree * num_classes * num_boost_round
# We build a boosted random forest for classification here.
booster = xgb.train({
'num_parallel_tree': 4, 'subsample': 0.5, 'num_class': 3},
num_boost_round=num_boost_round, dtrain=dtrain)
# This is the sliced model, containing [3, 7) forests
# step is also supported with some limitations like negative step is invalid.
sliced: xgb.Booster = booster[3:7]
# Access individual tree layer
trees = [_ for _ in booster]
assert len(trees) == num_boost_round
```

```
library(xgboost)
data(agaricus.train, package = "xgboost")
dm <- xgb.DMatrix(agaricus.train$data, label = agaricus.train$label)
model <- xgb.train(
params = xgb.params(objective = "binary:logistic", max_depth = 4),
data = dm,
nrounds = 20
)
sliced <- model[seq(3, 7)]
##### xgb.Booster
# of features: 126
# of rounds: 5
```

The sliced model is a copy of selected trees, that means the model itself is immutable
during slicing. This feature is the basis of `save_best`

option in early stopping
callback. See [Demo for prediction using individual trees and model slices](../python/examples/individual_trees.html#sphx-glr-python-examples-individual-trees-py) for a worked example on
how to combine prediction with sliced trees.

Note

The returned model slice doesn’t contain attributes like
[ best_iteration](../python/python_api.html#xgboost.Booster.best_iteration) and

[.](../python/python_api.html#xgboost.Booster.best_score)

`best_score`

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/learning_to_rank.html

# Learning to Rank[](#learning-to-rank)

**Contents**

## Overview[](#overview)

Often in the context of information retrieval, learning-to-rank aims to train a model that arranges a set of query results into an ordered list [[1]](#references). For supervised learning-to-rank, the predictors are sample documents encoded as feature matrix, and the labels are relevance degree for each sample. Relevance degree can be multi-level (graded) or binary (relevant or not). The training samples are often grouped by their query index with each query group containing multiple query results.

XGBoost implements learning to rank through a set of objective functions and performance metrics. The default objective is `rank:ndcg`

based on the `LambdaMART`

[[2]](#references) algorithm, which in turn is an adaptation of the `LambdaRank`

[[3]](#references) framework to gradient boosting trees. For a history and a summary of the algorithm, see [[5]](#references). The implementation in XGBoost features deterministic GPU computation, distributed training, position debiasing and two different pair construction strategies.

## Training with the Pairwise Objective[](#training-with-the-pairwise-objective)

`LambdaMART`

is a pairwise ranking model, meaning that it compares the relevance degree for every pair of samples in a query group and calculate a proxy gradient for each pair. The default objective `rank:ndcg`

is using the surrogate gradient derived from the `ndcg`

metric. To train a XGBoost model, we need an additional sorted array called `qid`

for specifying the query group of input samples. An example input would look like this:

QID |
Label |
Features |
|---|---|---|
1 |
0 |
\(x_1\) |
1 |
1 |
\(x_2\) |
1 |
0 |
\(x_3\) |
2 |
0 |
\(x_4\) |
2 |
1 |
\(x_5\) |
2 |
1 |
\(x_6\) |
2 |
1 |
\(x_7\) |

Notice that the samples are sorted based on their query index in a non-decreasing order. In the above example, the first three samples belong to the first query and the next four samples belong to the second. For the sake of simplicity, we will use a synthetic binary learning-to-rank dataset in the following code snippets, with binary labels representing whether the result is relevant or not, and randomly assign the query group index to each sample. For an example that uses a real world dataset, please see [Getting started with learning to rank](../python/examples/learning_to_rank.html#sphx-glr-python-examples-learning-to-rank-py).

```
from sklearn.datasets import make_classification
import numpy as np
import xgboost as xgb
# Make a synthetic ranking dataset for demonstration
seed = 1994
X, y = make_classification(random_state=seed)
rng = np.random.default_rng(seed)
n_query_groups = 3
qid = rng.integers(0, n_query_groups, size=X.shape[0])
# Sort the inputs based on query index
sorted_idx = np.argsort(qid)
X = X[sorted_idx, :]
y = y[sorted_idx]
qid = qid[sorted_idx]
```

The simplest way to train a ranking model is by using the scikit-learn estimator interface. Continuing the previous snippet, we can train a simple ranking model without tuning:

```
ranker = xgb.XGBRanker(tree_method="hist", lambdarank_num_pair_per_sample=8, objective="rank:ndcg", lambdarank_pair_method="topk")
ranker.fit(X, y, qid=qid)
```

Please note that, as of writing, there’s no learning-to-rank interface in scikit-learn. As a result, the [ xgboost.XGBRanker](../python/python_api.html#xgboost.XGBRanker) class does not fully conform the scikit-learn estimator guideline and can not be directly used with some of its utility functions. For instances, the

`auc_score`

and `ndcg_score`

in scikit-learn don’t consider query group information nor the pairwise loss. Most of the metrics are implemented as part of XGBoost, but to use scikit-learn utilities like `sklearn.model_selection.cross_validation()`

, we need to make some adjustments in order to pass the `qid`

as an additional parameter for [. Given a data frame](../python/python_api.html#xgboost.XGBRanker.score)

`xgboost.XGBRanker.score()`

`X`

(either pandas or cuDF), add the column `qid`

as follows:```
import pandas as pd
# `X`, `qid`, and `y` are from the previous snippet, they are all sorted by the `sorted_idx`.
df = pd.DataFrame(X, columns=[str(i) for i in range(X.shape[1])])
df["qid"] = qid
ranker.fit(df, y) # No need to pass qid as a separate argument
from sklearn.model_selection import StratifiedGroupKFold, cross_val_score
# Works with cv in scikit-learn, along with HPO utilities like GridSearchCV
kfold = StratifiedGroupKFold(shuffle=False)
cross_val_score(ranker, df, y, cv=kfold, groups=df.qid)
```

The above snippets build a model using `LambdaMART`

with the `NDCG@8`

metric. The outputs of a ranker are relevance scores:

```
scores = ranker.predict(X)
sorted_idx = np.argsort(scores)[::-1]
# Sort the relevance scores from most relevant to least relevant
scores = scores[sorted_idx]
```

## Position Bias[](#position-bias)

Added in version 2.0.0.

Note

The feature is considered experimental. This is a heated research area, and your input is much appreciated!

Obtaining real relevance degrees for query results is an expensive and strenuous, requiring human labelers to label all results one by one. When such labeling task is infeasible, we might want to train the learning-to-rank model on user click data instead, as it is relatively easy to collect. Another advantage of using click data directly is that it can reflect the most up-to-date user preferences [[1]](#references). However, user clicks are often biased, as users tend to choose results that are displayed in higher positions. User clicks are also noisy, where users might accidentally click on irrelevant documents. To ameliorate these issues, XGBoost implements the `Unbiased LambdaMART`

[[4]](#references) algorithm to debias the position-dependent click data. The feature can be enabled by the `lambdarank_unbiased`

parameter; see [Parameters for learning to rank (rank:ndcg, rank:map, rank:pairwise)](../parameter.html#ltr-param) for related options and [Getting started with learning to rank](../python/examples/learning_to_rank.html#sphx-glr-python-examples-learning-to-rank-py) for a worked example with simulated user clicks.

## Loss[](#loss)

XGBoost implements different `LambdaMART`

objectives based on different metrics. We list them here as a reference. Other than those used as objective function, XGBoost also implements metrics like `pre`

(for precision) for evaluation. See [parameters](../parameter.html) for available options and the following sections for how to choose these objectives based of the amount of effective pairs.

NDCG


Normalized Discounted Cumulative Gain `NDCG`

can be used with both binary relevance and multi-level relevance. If you are not sure about your data, this metric can be used as the default. The name for the objective is `rank:ndcg`

.

MAP


Mean average precision `MAP`

is a binary measure. It can be used when the relevance label is 0 or 1. The name for the objective is `rank:map`

.

Pairwise


The LambdaMART algorithm scales the logistic loss with learning to rank metrics like `NDCG`

in the hope of including ranking information into the loss function. The `rank:pairwise`

loss is the original version of the pairwise loss, also known as the RankNet loss [[7]](#references) or the pairwise logistic loss. Unlike the `rank:map`

and the `rank:ndcg`

, no scaling is applied (\(|\Delta Z_{ij}| = 1\)).

Whether scaling with a LTR metric is actually more effective is still up for debate; [[8]](#references) provides a theoretical foundation for general lambda loss functions and some insights into the framework.

## Constructing Pairs[](#constructing-pairs)

There are two implemented strategies for constructing document pairs for \(\lambda\)-gradient calculation. The first one is the `mean`

method, another one is the `topk`

method. The preferred strategy can be specified by the `lambdarank_pair_method`

parameter.

For the `mean`

strategy, XGBoost samples `lambdarank_num_pair_per_sample`

pairs for each document in a query list. For example, given a list of 3 documents and `lambdarank_num_pair_per_sample`

is set to 2, XGBoost will randomly sample 6 pairs, assuming the labels for these documents are different. On the other hand, if the pair method is set to `topk`

, XGBoost constructs about \(k \times |query|\) number of pairs with \(|query|\) pairs for each sample at the top \(k = lambdarank\_num\_pair\) position. The number of pairs counted here is an approximation since we skip pairs that have the same label.

## Obtaining Good Result[](#obtaining-good-result)

Learning to rank is a sophisticated task and an active research area. It’s not trivial to train a model that generalizes well. There are multiple loss functions available in XGBoost along with a set of hyperparameters. This section contains some hints for how to choose hyperparameters as a starting point. One can further optimize the model by tuning these hyperparameters.

The first question would be how to choose an objective that matches the task at hand. If your input data has multi-level relevance degrees, then either `rank:ndcg`

or `rank:pairwise`

should be used. However, when the input has binary labels, we have multiple options based on the target metric. [[6]](#references) provides some guidelines on this topic and users are encouraged to see the analysis done in their work. The choice should be based on the number of effective pairs, which refers to the number of pairs that can generate non-zero gradient and contribute to training. LambdaMART with `MRR`

has the least amount of effective pairs as the \(\lambda\)-gradient is only non-zero when the pair contains a non-relevant document ranked higher than the top relevant document. As a result, it’s not implemented in XGBoost. Since `NDCG`

is a multi-level metric, it usually generate more effective pairs than `MAP`

.

However, when there are sufficiently many effective pairs, it’s shown in [[6]](#references) that matching the target metric with the objective is of significance. When the target metric is `MAP`

and you are using a large dataset that can provide a sufficient amount of effective pairs, `rank:map`

can in theory yield higher `MAP`

value than `rank:ndcg`

.

The consideration of effective pairs also applies to the choice of pair method (`lambdarank_pair_method`

) and the number of pairs for each sample (`lambdarank_num_pair_per_sample`

). For example, the mean-`NDCG`

considers more pairs than `NDCG@10`

, so the former generates more effective pairs and provides more granularity than the latter. Also, using the `mean`

strategy can help the model generalize with random sampling. However, one might want to focus the training on the top \(k\) documents instead of using all pairs, to better fit their real-world application.

When using the mean strategy for generating pairs, where the target metric (like `NDCG`

) is computed over the whole query list, users can specify how many pairs should be generated per each document, by setting the `lambdarank_num_pair_per_sample`

. XGBoost will randomly sample `lambdarank_num_pair_per_sample`

pairs for each element in the query group (\(|pairs| = |query| \times num\_pairsample\)). Often, setting it to 1 can produce reasonable results. In cases where performance is inadequate due to insufficient number of effective pairs being generated, set `lambdarank_num_pair_per_sample`

to a higher value. As more document pairs are generated, more effective pairs will be generated as well.

On the other hand, if you are prioritizing the top \(k\) documents, the `lambdarank_num_pair_per_sample`

should be set slightly higher than \(k\) (with a few more documents) to obtain a good training result. Lastly, XGBoost employs additional regularization for learning to rank objectives, which can be disabled by setting the `lambdarank_normalization`

to `False`

.

**Summary** If you have large amount of training data:

Use the target-matching objective.

Choose the

`topk`

strategy for generating document pairs (if it’s appropriate for your application).

On the other hand, if you have comparatively small amount of training data:

Select

`NDCG`

or the RankNet loss (`rank:pairwise`

).Choose the

`mean`

strategy for generating document pairs, to obtain more effective pairs.

For any method chosen, you can modify `lambdarank_num_pair_per_sample`

to control the amount of pairs generated.

## Distributed Training[](#distributed-training)

XGBoost implements distributed learning-to-rank with integration of multiple frameworks
including [Dask](dask.html), [Spark](../jvm/xgboost4j_spark_tutorial.html), and
[PySpark](spark_estimator.html). The interface is similar to the single-node
counterpart. Please refer to document of the respective XGBoost interface for details.

Warning

Position-debiasing is not yet supported for existing distributed interfaces.

XGBoost works with collective operations, which means data is scattered to multiple workers. We can divide the data partitions by query group and ensure no query group is split among workers. However, this requires a costly sort and groupby operation and might only be necessary for selected use cases. Splitting and scattering a query group to multiple workers is theoretically sound but can affect the model’s accuracy. If there are only a small number of groups sitting at the boundaries of workers, the small discrepancy is not an issue, as the amount of training data is usually large when distributed training is used.

For a longer explanation, assuming the pairwise ranking method is used, we calculate the gradient based on relevance degree by constructing pairs within a query group. If a single query group is split among workers and we use worker-local data for gradient calculation, then we are simply sampling pairs from a smaller group for each worker to calculate the gradient and the evaluation metric. The comparison between each pair doesn’t change because a group is split into sub-groups, what changes is the number of total and effective pairs and normalizers like IDCG. One can generate more pairs from a large group than it’s from two smaller subgroups. As a result, the obtained gradient is still valid from a theoretical standpoint but might not be optimal. As long as each data partitions within a worker are correctly sorted by query IDs, XGBoost can aggregate sample gradients accordingly. And both the (Py)Spark interface and the Dask interface can sort the data according to query ID, please see respected tutorials for more information.

However, it’s possible that a distributed framework shuffles the data during map reduce and splits every query group into multiple workers. In that case, the performance would be disastrous. As a result, it depends on the data and the framework for whether a sorted groupby is needed.

## Comparing Results with Version 1.7[](#comparing-results-with-version-1-7)

The learning to rank implementation has been significantly updated in 2.0 with added hyper-parameters and training strategies. To obtain similar result as the 1.7 [ xgboost.XGBRanker](../python/python_api.html#xgboost.XGBRanker), following parameter should be used:

```
params = {
# 1.7 only supports sampling, while 2.0 and later use top-k as the default.
# See above sections for the trade-off.
"lambdarank_pair_method": "mean",
# 1.7 uses the ranknet loss while later versions use the NDCG weighted loss
"objective": "rank:pairwise",
# 1.7 doesn't have this normalization.
"lambdarank_score_normalization": False,
"base_score": 0.5,
# The default tree method has been changed from approx to hist.
"tree_method": "approx",
# The default for `mean` pair method is one pair each sample, which is the default in 1.7 as well.
# You can leave it as unset.
"lambdarank_num_pair_per_sample": 1,
}
```

The result still differs due to the change of random seed. But the overall training strategy would be the same for `rank:pairwise`

.

## Reproducible Result[](#reproducible-result)

Like any other tasks, XGBoost should generate reproducible results given the same hardware and software environments (and data partitions, if distributed interface is used). Even when the underlying environment has changed, the result should still be consistent. However, when the `lambdarank_pair_method`

is set to `mean`

, XGBoost uses random sampling, and results may differ depending on the platform used. The random number generator used on Windows (Microsoft Visual C++) is different from the ones used on other platforms like Linux (GCC, Clang) [[1]](#f0), so the output varies significantly between these platforms.

## References[](#references)

[1] Tie-Yan Liu. 2009. “[Learning to Rank for Information Retrieval](https://doi.org/10.1561/1500000016)”. Found. Trends Inf. Retr. 3, 3 (March 2009), 225–331.

[2] Christopher J. C. Burges, Robert Ragno, and Quoc Viet Le. 2006. “[Learning to rank with nonsmooth cost functions](https://dl.acm.org/doi/10.5555/2976456.2976481)”. In Proceedings of the 19th International Conference on Neural Information Processing Systems (NIPS’06). MIT Press, Cambridge, MA, USA, 193–200.

[3] Wu, Q., Burges, C.J.C., Svore, K.M. et al. “[Adapting boosting for information retrieval measures](https://doi.org/10.1007/s10791-009-9112-1)”. Inf Retrieval 13, 254–270 (2010).

[4] Ziniu Hu, Yang Wang, Qu Peng, Hang Li. “[Unbiased LambdaMART: An Unbiased Pairwise Learning-to-Rank Algorithm](https://dl.acm.org/doi/10.1145/3308558.3313447)”. Proceedings of the 2019 World Wide Web Conference.

[5] Burges, Chris J.C. “[From RankNet to LambdaRank to LambdaMART: An Overview](https://www.microsoft.com/en-us/research/publication/from-ranknet-to-lambdarank-to-lambdamart-an-overview/)”. MSR-TR-2010-82

[6] Pinar Donmez, Krysta M. Svore, and Christopher J.C. Burges. 2009. “[On the local optimality of LambdaRank](https://doi.org/10.1145/1571941.1572021)”. In Proceedings of the 32nd international ACM SIGIR conference on Research and development in information retrieval (SIGIR ‘09). Association for Computing Machinery, New York, NY, USA, 460–467.

[7] Chris Burges, Tal Shaked, Erin Renshaw, Ari Lazier, Matt Deeds, Nicole Hamilton, and Greg Hullender. 2005. “[Learning to rank using gradient descent](https://doi.org/10.1145/1102351.1102363)”. In Proceedings of the 22nd international conference on Machine learning (ICML ‘05). Association for Computing Machinery, New York, NY, USA, 89–96.

[8] Xuanhui Wang and Cheng Li and Nadav Golbandi and Mike Bendersky and Marc Najork. 2018. “[The LambdaLoss Framework for Ranking Metric Optimization](https://dl.acm.org/doi/10.1145/3269206.3271784)”. Proceedings of The 27th ACM International Conference on Information and Knowledge Management (CIKM ‘18).

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/dart.html

# DART booster[](#dart-booster)

XGBoost mostly combines a huge number of regression trees with a small learning rate. In this situation, trees added early are significant and trees added late are unimportant.

Vinayak and Gilad-Bachrach proposed a new method to add dropout techniques from the deep neural net community to boosted trees, and reported better results in some situations.

This is a instruction of new tree booster `dart`

.

## Original paper[](#original-paper)

Rashmi Korlakai Vinayak, Ran Gilad-Bachrach. “DART: Dropouts meet Multiple Additive Regression Trees.” [[PMLR](http://proceedings.mlr.press/v38/korlakaivinayak15.pdf), [arXiv](https://arxiv.org/abs/1505.01866)].

## Features[](#features)

Drop trees in order to solve the over-fitting.

Trivial trees (to correct trivial errors) may be prevented.



Because of the randomness introduced in the training, expect the following few differences:

Training can be slower than

`gbtree`

because the random dropout prevents usage of the prediction buffer.The early stop might not be stable, due to the randomness.


## How it works[](#how-it-works)

In \(m\)-th training round, suppose \(k\) trees are selected to be dropped.

Let \(D = \sum_{i \in \mathbf{K}} F_i\) be the leaf scores of dropped trees and \(F_m = \eta \tilde{F}_m\) be the leaf scores of a new tree.

The objective function is as follows:


\(D\) and \(F_m\) are overshooting, so using scale factor


## Parameters[](#parameters)

The booster `dart`

inherits `gbtree`

booster, so it supports all parameters that `gbtree`

does, such as `eta`

, `gamma`

, `max_depth`

etc.

Additional parameters are noted below:

`sample_type`

: type of sampling algorithm.`uniform`

: (default) dropped trees are selected uniformly.`weighted`

: dropped trees are selected in proportion to weight.

`normalize_type`

: type of normalization algorithm.`tree`

: (default) New trees have the same weight of each of dropped trees.

\[\begin{split}a \left( \sum_{i \in \mathbf{K}} F_i + \frac{1}{k} F_m \right) &= a \left( \sum_{i \in \mathbf{K}} F_i + \frac{\eta}{k} \tilde{F}_m \right) \\ &\sim a \left( 1 + \frac{\eta}{k} \right) D \\ &= a \frac{k + \eta}{k} D = D , \\ &\quad a = \frac{k}{k + \eta}\end{split}\]`forest`

: New trees have the same weight of sum of dropped trees (forest).

\[\begin{split}a \left( \sum_{i \in \mathbf{K}} F_i + F_m \right) &= a \left( \sum_{i \in \mathbf{K}} F_i + \eta \tilde{F}_m \right) \\ &\sim a \left( 1 + \eta \right) D \\ &= a (1 + \eta) D = D , \\ &\quad a = \frac{1}{1 + \eta} .\end{split}\]`rate_drop`

: dropout rate.range: [0.0, 1.0]


`skip_drop`

: probability of skipping dropout.If a dropout is skipped, new trees are added in the same manner as gbtree.

range: [0.0, 1.0]



## Sample Script[](#sample-script)

```
import xgboost as xgb
# read in data
dtrain = xgb.DMatrix('demo/data/agaricus.txt.train?format=libsvm')
dtest = xgb.DMatrix('demo/data/agaricus.txt.test?format=libsvm')
# specify parameters via map
param = {'booster': 'dart',
'max_depth': 5, 'learning_rate': 0.1,
'objective': 'binary:logistic',
'sample_type': 'uniform',
'normalize_type': 'tree',
'rate_drop': 0.1,
'skip_drop': 0.5}
num_round = 50
bst = xgb.train(param, dtrain, num_round)
preds = bst.predict(dtest)
```

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/monotonic.html

# Monotonic Constraints[](#monotonic-constraints)

It is often the case in a modeling problem or project that the functional form of an acceptable model is constrained in some way. This may happen due to business considerations, or because of the type of scientific question being investigated. In some cases, where there is a very strong prior belief that the true relationship has some quality, constraints can be used to improve the predictive performance of the model.

A common type of constraint in this situation is that certain features bear a **monotonic** relationship to the predicted response:

whenever \(x \leq x'\) is an **increasing constraint**; or

whenever \(x \leq x'\) is a **decreasing constraint**.

XGBoost has the ability to enforce monotonicity constraints on any features used in a boosted model.

## A Simple Example[](#a-simple-example)

To illustrate, let’s create some simulated data with two features and a response according to the following scheme

The response generally increases with respect to the \(x_1\) feature, but a sinusoidal variation has been superimposed, resulting in the true effect being non-monotonic. For the \(x_2\) feature the variation is decreasing with a sinusoidal variation.

Let’s fit a boosted tree model to this data without imposing any monotonic constraints:

The black curve shows the trend inferred from the model for each feature. To make these plots the distinguished feature \(x_i\) is fed to the model over a one-dimensional grid of values, while all the other features (in this case only one other feature) are set to their average values. We see that the model does a good job of capturing the general trend with the oscillatory wave superimposed.

Here is the same model, but fit with monotonicity constraints:

We see the effect of the constraint. For each variable the general direction of the trend is still evident, but the oscillatory behaviour no longer remains as it would violate our imposed constraints.

## Enforcing Monotonic Constraints in XGBoost[](#enforcing-monotonic-constraints-in-xgboost)

It is very simple to enforce monotonicity constraints in XGBoost. Here we will give an example using Python, but the same general idea generalizes to other platforms.

Suppose the following code fits your model without monotonicity constraints

```
model_no_constraints = xgb.train(params, dtrain,
num_boost_round = 1000, evals = evallist,
early_stopping_rounds = 10)
```

Then fitting with monotonicity constraints only requires adding a single parameter

```
params_constrained = params.copy()
params_constrained['monotone_constraints'] = (1,-1)
model_with_constraints = xgb.train(params_constrained, dtrain,
num_boost_round = 1000, evals = evallist,
early_stopping_rounds = 10)
```

In this example the training data `X`

has two columns, and by using the parameter values `(1,-1)`

we are telling XGBoost to impose an increasing constraint on the first predictor and a decreasing constraint on the second.

Some other examples:

`(1,0)`

: An increasing constraint on the first predictor and no constraint on the second.`(0,-1)`

: No constraint on the first predictor and a decreasing constraint on the second.

Note

**Note for the ‘hist’ tree construction algorithm**. If `tree_method`

is set to
either `hist`

or `approx`

, enabling monotonic constraints may produce unnecessarily
shallow trees. This is because the `hist`

method reduces the number of candidate
splits to be considered at each split. Monotonic constraints may wipe out all available
split candidates, in which case no split is made. To reduce the effect, you may want to
increase the `max_bin`

parameter to consider more split candidates.

## Using feature names[](#using-feature-names)

XGBoost’s Python and R packages support using feature names instead of feature indices for
specifying the constraints. Given a data frame with columns `["f0", "f1", "f2"]`

, the
monotonic constraint can be specified as `{"f0": 1, "f2": -1}`

(Python) or as
`list(f0=1, f2=-1)`

(R, when using ‘xgboost()’, but not ‘xgb.train’), and `"f1"`

will
default to `0`

(no constraint).

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/feature_interaction_constraint.html

# Feature Interaction Constraints[](#feature-interaction-constraints)

The decision tree is a powerful tool to discover interaction among independent variables (features). Variables that appear together in a traversal path are interacting with one another, since the condition of a child node is predicated on the condition of the parent node. For example, the highlighted red path in the diagram below contains three variables: \(x_1\), \(x_7\), and \(x_{10}\), so the highlighted prediction (at the highlighted leaf node) is the product of interaction between \(x_1\), \(x_7\), and \(x_{10}\).

When the tree depth is larger than one, many variables interact on
the sole basis of minimizing training loss, and the resulting decision tree may
capture a spurious relationship (noise) rather than a legitimate relationship
that generalizes across different datasets. **Feature interaction constraints**
allow users to decide which variables are allowed to interact and which are not.

Potential benefits include:

Better predictive performance from focusing on interactions that work – whether through domain specific knowledge or algorithms that rank interactions

Less noise in predictions; better generalization

More control to the user on what the model can fit. For example, the user may want to exclude some interactions even if they perform well due to regulatory constraints.


## A Simple Example[](#a-simple-example)

Feature interaction constraints are expressed in terms of groups of variables
that are allowed to interact. For example, the constraint
`[0, 1]`

indicates that variables \(x_0\) and \(x_1\) are allowed to
interact with each other but with no other variable. Similarly, `[2, 3, 4]`

indicates that \(x_2\), \(x_3\), and \(x_4\) are allowed to
interact with one another but with no other variable. A set of feature
interaction constraints is expressed as a nested list, e.g.
`[[0, 1], [2, 3, 4]]`

, where each inner list is a group of indices of features
that are allowed to interact with each other.

In the following diagram, the left decision tree is in violation of the first
constraint (`[0, 1]`

), whereas the right decision tree complies with both the
first and second constraints (`[0, 1]`

, `[2, 3, 4]`

).

forbidden |
allowed |

## Enforcing Feature Interaction Constraints in XGBoost[](#enforcing-feature-interaction-constraints-in-xgboost)

It is very simple to enforce feature interaction constraints in XGBoost. Here we will give an example using Python, but the same general idea generalizes to other platforms.

Suppose the following code fits your model without feature interaction constraints:

```
model_no_constraints = xgb.train(params, dtrain,
num_boost_round = 1000, evals = evallist,
early_stopping_rounds = 10)
```

Then fitting with feature interaction constraints only requires adding a single parameter:

```
params_constrained = params.copy()
# Use nested list to define feature interaction constraints
params_constrained['interaction_constraints'] = '[[0, 2], [1, 3, 4], [5, 6]]'
# Features 0 and 2 are allowed to interact with each other but with no other feature
# Features 1, 3, 4 are allowed to interact with one another but with no other feature
# Features 5 and 6 are allowed to interact with each other but with no other feature
model_with_constraints = xgb.train(params_constrained, dtrain,
num_boost_round = 1000, evals = evallist,
early_stopping_rounds = 10)
```

## Using feature name instead[](#using-feature-name-instead)

XGBoost’s Python and R packages support using feature names instead of feature index for
specifying the constraints. Given a data frame with columns `["f0", "f1", "f2"]`

, the
feature interaction constraint can be specified as `[["f0", "f2"]]`

(Python) or
`list(c("f0", "f2"))`

(R, when passing them to function `xgboost()`

).

## Advanced topic[](#advanced-topic)

The intuition behind interaction constraints is simple. Users may have prior knowledge about
relations between different features, and encode it as constraints during model
construction. But there are also some subtleties around specifying constraints. Take
the constraint `[[1, 2], [2, 3, 4]]`

as an example. The second feature appears in two
different interaction sets, `[1, 2]`

and `[2, 3, 4]`

. So the union set of features
allowed to interact with `2`

is `{1, 3, 4}`

. In the following diagram, the root splits at
feature `2`

. Because all its descendants should be able to interact with it, all 4 features
are legitimate split candidates at the second layer. At first sight, this might look like
disregarding the specified constraint sets, but it is not.

This has lead to some interesting implications of feature interaction constraints. Take
`[[0, 1], [0, 1, 2], [1, 2]]`

as another example. Assuming we have only 3 available
features in our training datasets for presentation purpose, careful readers might have
found out that the above constraint is the same as simply `[[0, 1, 2]]`

. Since no matter which
feature is chosen for split in the root node, all its descendants are allowed to include every
feature as legitimate split candidates without violating interaction constraints.

For one last example, we use `[[0, 1], [1, 3, 4]]`

and choose feature `0`

as split for
the root node. At the second layer of the built tree, `1`

is the only legitimate split
candidate except for `0`

itself, since they belong to the same constraint set.
Following the grow path of our example tree below, the node at the second layer splits at
feature `1`

. But due to the fact that `1`

also belongs to second constraint set ```
[1,
3, 4]
```

, at the third layer, we are allowed to include all features as split candidates and
still comply with the interaction constraints of its ascendants.

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/aft_survival_analysis.html

# Survival Analysis with Accelerated Failure Time[](#survival-analysis-with-accelerated-failure-time)

## What is survival analysis?[](#what-is-survival-analysis)

**Survival analysis (regression)** models **time to an event of interest**. Survival analysis is a special kind of regression and differs from the conventional regression task as follows:

The label is always positive, since you cannot wait a negative amount of time until the event occurs.

The label may not be fully known, or

**censored**, because “it takes time to measure time.”

The second bullet point is crucial and we should dwell on it more. As you may have guessed from the name, one of the earliest applications of survival analysis is to model mortality of a given population. Let’s take [NCCTG Lung Cancer Dataset](https://stat.ethz.ch/R-manual/R-devel/library/survival/html/lung.html) as an example. The first 8 columns represent features and the last column, Time to death, represents the label.

Inst |
Age |
Sex |
ph.ecog |
ph.karno |
pat.karno |
meal.cal |
wt.loss |
|
|---|---|---|---|---|---|---|---|---|
3 |
74 |
1 |
1 |
90 |
100 |
1175 |
N/A |
306 |
3 |
68 |
1 |
0 |
90 |
90 |
1225 |
15 |
455 |
3 |
56 |
1 |
0 |
90 |
90 |
N/A |
15 |
\([1010, +\infty)\) |
5 |
57 |
1 |
1 |
90 |
60 |
1150 |
11 |
210 |
1 |
60 |
1 |
0 |
100 |
90 |
N/A |
0 |
883 |
12 |
74 |
1 |
1 |
50 |
80 |
513 |
0 |
\([1022, +\infty)\) |
7 |
68 |
2 |
2 |
70 |
60 |
384 |
10 |
310 |

Take a close look at the label for the third patient. **His label is a range, not a single number.** The third patient’s label is said to be **censored**, because for some reason the experimenters could not get a complete measurement for that label. One possible scenario: the patient survived the first 1010 days and walked out of the clinic on the 1011th day, so his death was not directly observed. Another possibility: The experiment was cut short (since you cannot run it forever) before his death could be observed. In any case, his label is \([1010, +\infty)\), meaning his time to death can be any number that’s higher than 1010, e.g. 2000, 3000, or 10000.

There are four kinds of censoring:

**Uncensored**: the label is not censored and given as a single number.**Right-censored**: the label is of form \([a, +\infty)\), where \(a\) is the lower bound.**Left-censored**: the label is of form \([0, b]\), where \(b\) is the upper bound.**Interval-censored**: the label is of form \([a, b]\), where \(a\) and \(b\) are the lower and upper bounds, respectively.

Right-censoring is the most commonly used.

## Accelerated Failure Time model[](#accelerated-failure-time-model)

**Accelerated Failure Time (AFT)** model is one of the most commonly used models in survival analysis. The model is of the following form:

where

\(\mathbf{x}\) is a vector in \(\mathbb{R}^d\) representing the features.

\(\mathbf{w}\) is a vector consisting of \(d\) coefficients, each corresponding to a feature.

\(\langle \cdot, \cdot \rangle\) is the usual dot product in \(\mathbb{R}^d\).

\(\ln{(\cdot)}\) is the natural logarithm.

\(Y\) and \(Z\) are random variables.

\(Y\) is the output label.

\(Z\) is a random variable of a known probability distribution. Common choices are the normal distribution, the logistic distribution, and the extreme distribution. Intuitively, \(Z\) represents the “noise” that pulls the prediction \(\langle \mathbf{w}, \mathbf{x} \rangle\) away from the true log label \(\ln{Y}\).


\(\sigma\) is a parameter that scales the size of \(Z\).


Note that this model is a generalized form of a linear regression model \(Y = \langle \mathbf{w}, \mathbf{x} \rangle\). In order to make AFT work with gradient boosting, we revise the model as follows:

where \(\mathcal{T}(\mathbf{x})\) represents the output from a decision tree ensemble, given input \(\mathbf{x}\). Since \(Z\) is a random variable, we have a likelihood defined for the expression \(\ln{Y} = \mathcal{T}(\mathbf{x}) + \sigma Z\). So the goal for XGBoost is to maximize the (log) likelihood by fitting a good tree ensemble \(\mathcal{T}(\mathbf{x})\).

## How to use[](#how-to-use)

The first step is to express the labels in the form of a range, so that **every data point has two numbers associated with it, namely the lower and upper bounds for the label.** For uncensored labels, use a degenerate interval of form \([a, a]\).

Censoring type |
Interval form |
Lower bound finite? |
Upper bound finite? |
|---|---|---|---|
Uncensored |
\([a, a]\) |
✔ |
✔ |
Right-censored |
\([a, +\infty)\) |
✔ |
✘ |
Left-censored |
\([0, b]\) |
✔ |
✔ |
Interval-censored |
\([a, b]\) |
✔ |
✔ |

Collect the lower bound numbers in one array (let’s call it `y_lower_bound`

) and the upper bound number in another array (call it `y_upper_bound`

). The ranged labels are associated with a data matrix object via calls to [ xgboost.DMatrix.set_float_info()](../python/python_api.html#xgboost.DMatrix.set_float_info):

```
import numpy as np
import xgboost as xgb
# 4-by-2 Data matrix
X = np.array([[1, -1], [-1, 1], [0, 1], [1, 0]])
dtrain = xgb.DMatrix(X)
# Associate ranged labels with the data matrix.
# This example shows each kind of censored labels.
# uncensored right left interval
y_lower_bound = np.array([ 2.0, 3.0, 0.0, 4.0])
y_upper_bound = np.array([ 2.0, +np.inf, 4.0, 5.0])
dtrain.set_float_info('label_lower_bound', y_lower_bound)
dtrain.set_float_info('label_upper_bound', y_upper_bound)
```

```
library(xgboost)
# 4-by-2 Data matrix
X <- matrix(c(1., -1., -1., 1., 0., 1., 1., 0.),
nrow=4, ncol=2, byrow=TRUE)
dtrain <- xgb.DMatrix(X)
# Associate ranged labels with the data matrix.
# This example shows each kind of censored labels.
# uncensored right left interval
y_lower_bound <- c( 2., 3., 0., 4.)
y_upper_bound <- c( 2., +Inf, 4., 5.)
setinfo(dtrain, 'label_lower_bound', y_lower_bound)
setinfo(dtrain, 'label_upper_bound', y_upper_bound)
```

Now we are ready to invoke the training API:

```
params = {'objective': 'survival:aft',
'eval_metric': 'aft-nloglik',
'aft_loss_distribution': 'normal',
'aft_loss_distribution_scale': 1.20,
'tree_method': 'hist', 'learning_rate': 0.05, 'max_depth': 2}
bst = xgb.train(params, dtrain, num_boost_round=5,
evals=[(dtrain, 'train')])
```

```
params <- list(objective='survival:aft',
eval_metric='aft-nloglik',
aft_loss_distribution='normal',
aft_loss_distribution_scale=1.20,
tree_method='hist',
learning_rate=0.05,
max_depth=2)
watchlist <- list(train = dtrain)
bst <- xgb.train(params, dtrain, nrounds=5, watchlist)
```

We set `objective`

parameter to `survival:aft`

and `eval_metric`

to `aft-nloglik`

, so that the log likelihood for the AFT model would be maximized. (XGBoost will actually minimize the negative log likelihood, hence the name `aft-nloglik`

.)

The parameter `aft_loss_distribution`

corresponds to the distribution of the \(Z\) term in the AFT model, and `aft_loss_distribution_scale`

corresponds to the scaling factor \(\sigma\).

Currently, you can choose from three probability distributions for `aft_loss_distribution`

:

|
Probability Density Function (PDF) |
|---|---|
|
\(\dfrac{\exp{(-z^2/2)}}{\sqrt{2\pi}}\) |
|
\(\dfrac{e^z}{(1+e^z)^2}\) |
|
\(e^z e^{-\exp{z}}\) |

Note that it is not yet possible to set the ranged label using the scikit-learn interface (e.g. [ xgboost.XGBRegressor](../python/python_api.html#xgboost.XGBRegressor)). For now, you should use

[with](../python/python_api.html#xgboost.train)

`xgboost.train`

[. For a collection of Python examples, see](../python/python_api.html#xgboost.DMatrix)

`xgboost.DMatrix`

[Survival Analysis Walkthrough](../python/survival-examples/index.html)

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/categorical.html

# Categorical Data[](#categorical-data)

**Contents**

Since version 1.5, XGBoost has support for categorical data. For numerical data, the
split condition is defined as \(value < threshold\), while for categorical data the
split is defined depending on whether partitioning or onehot encoding is used. For
partition-based splits, the splits are specified as \(value \in categories\), where
`categories`

is the set of categories in one feature. If onehot encoding is used
instead, then the split is defined as \(value == category\). More advanced categorical
split strategy is planned for future releases and this tutorial details how to inform
XGBoost about the data type.

## Training with scikit-learn Interface[](#training-with-scikit-learn-interface)

The easiest way to pass categorical data into XGBoost is using dataframe and the
`scikit-learn`

interface like [ XGBClassifier](../python/python_api.html#xgboost.XGBClassifier). For
preparing the data, users need to specify the data type of input predictor as

`category`

. For `pandas/cudf Dataframe`

, this can be achieved by```
X["cat_feature"].astype("category")
```

for all columns that represent categorical features. After which, users can tell XGBoost
to enable training with categorical data. Assuming that you are using the
[ XGBClassifier](../python/python_api.html#xgboost.XGBClassifier) for classification problem, specify the
parameter

`enable_categorical`

:```
# Supported tree methods are `approx` and `hist`.
clf = xgb.XGBClassifier(tree_method="hist", enable_categorical=True, device="cuda")
# X is the dataframe we created in previous snippet
clf.fit(X, y)
# Must use JSON/UBJSON for serialization, otherwise the information is lost.
clf.save_model("categorical-model.json")
```

Once training is finished, most of other features can utilize the model. For instance one can plot the model and calculate the global feature importance:

```
# Get a graph
graph = xgb.to_graphviz(clf, num_trees=1)
# Or get a matplotlib axis
ax = xgb.plot_tree(clf, num_trees=1)
# Get feature importances
clf.feature_importances_
```

The `scikit-learn`

interface from dask is similar to single node version. The basic
idea is create dataframe with category feature type, and tell XGBoost to use it by setting
the `enable_categorical`

parameter. See [Getting started with categorical data](../python/examples/categorical.html#sphx-glr-python-examples-categorical-py)
for a worked example of using categorical data with `scikit-learn`

interface with
one-hot encoding. A comparison between using one-hot encoded data and XGBoost’s
categorical data support can be found [Train XGBoost with cat_in_the_dat dataset](../python/examples/cat_in_the_dat.html#sphx-glr-python-examples-cat-in-the-dat-py).

Added in version 3.0: Support for the R package using `factor`

.

## Optimal Partitioning[](#optimal-partitioning)

Added in version 1.6.

Optimal partitioning is a technique for partitioning the categorical predictors for each
node split, the proof of optimality for numerical output was first introduced by [[1]](#references). The algorithm is used in decision trees [[2]](#references), later
LightGBM [[3]](#references) brought it to the context of gradient boosting trees and
now is also adopted in XGBoost as an optional feature for handling categorical
splits. More specifically, the proof by Fisher [[1]](#references) states that, when
trying to partition a set of discrete values into groups based on the distances between a
measure of these values, one only needs to look at sorted partitions instead of
enumerating all possible permutations. In the context of decision trees, the discrete
values are categories, and the measure is the output leaf value. Intuitively, we want to
group the categories that output similar leaf values. During split finding, we first sort
the gradient histogram to prepare the contiguous partitions then enumerate the splits
according to these sorted values. One of the related parameters for XGBoost is
`max_cat_to_onehot`

, which controls whether one-hot encoding or partitioning should be
used for each feature, see [Parameters for Categorical Feature](../parameter.html#cat-param) for details.

## Using native interface[](#using-native-interface)

The `scikit-learn`

interface is user friendly, but lacks some features that are only
available in native interface. For instance users cannot compute SHAP value directly.
Also native interface supports more data types. To use the native interface with
categorical data, we need to pass the similar parameter to [ DMatrix](../python/python_api.html#xgboost.DMatrix) or

[and the](../python/python_api.html#xgboost.QuantileDMatrix)

`QuantileDMatrix`

[function. For dataframe input:](../python/python_api.html#xgboost.train)

`train`

```
# X is a dataframe we created in previous snippet
Xy = xgb.DMatrix(X, y, enable_categorical=True)
booster = xgb.train({"tree_method": "hist", "max_cat_to_onehot": 5}, Xy)
# Must use JSON for serialization, otherwise the information is lost
booster.save_model("categorical-model.json")
```

SHAP value computation:

```
SHAP = booster.predict(Xy, pred_interactions=True)
# categorical features are listed as "c"
print(booster.feature_types)
```

For other types of input, like `numpy array`

, we can tell XGBoost about the feature
types by using the `feature_types`

parameter in [ DMatrix](../python/python_api.html#xgboost.DMatrix):

```
# "q" is numerical feature, while "c" is categorical feature
ft = ["q", "c", "c"]
X: np.ndarray = load_my_data()
assert X.shape[1] == 3
Xy = xgb.DMatrix(X, y, feature_types=ft, enable_categorical=True)
```

For numerical data, the feature type can be `"q"`

or `"float"`

, while for categorical
feature it’s specified as `"c"`

. The Dask module in XGBoost has the same interface so
`dask.Array`

can also be used for categorical data. Lastly, the
sklearn interface [ XGBRegressor](../python/python_api.html#xgboost.XGBRegressor) has the same parameter.

## Auto-recoding (Data Consistency)[](#auto-recoding-data-consistency)

Changed in version 3.1: Starting with XGBoost 3.1, the **Python** interface can perform automatic re-coding for
new inputs.

XGBoost accepts parameters to indicate which feature is considered categorical, either
through the `dtypes`

of a dataframe or through the `feature_types`

parameter. However,
except for the Python interface, XGBoost doesn’t store the information about how
categories are encoded in the first place. For instance, given an encoding schema that
maps music genres to integer codes:

```
{"acoustic": 0, "indie": 1, "blues": 2, "country": 3}
```

Aside from the Python interface (R/Java/C, etc), XGBoost doesn’t know this mapping from the input and hence cannot store it in the model. The mapping usually happens in the users’ data engineering pipeline. To ensure the correct result from XGBoost, users need to keep the pipeline for transforming data consistent across training and testing data.

Starting with 3.1, the **Python** interface can remember the encoding and perform recoding
during inference and training continuation when the input is a dataframe (pandas,
cuDF, polars, pyarrow, modin). The feature support focuses on basic usage. It has
some restrictions on the types of inputs that can be accepted. First, category names must
have one of the following types:

string

integer, from 8-bit to 64-bit, both signed and unsigned are supported.

32-bit or 64-bit floating point


Other category types are not supported. Second, the input types must be strictly
consistent. For example, XGBoost will raise an error if the categorical columns in the
training set are unsigned integers whereas the test dataset has signed integer columns. If
you have categories that are not one of the supported types, you need to perform the
re-coding using a pre-processing data transformer like the
[ sklearn.preprocessing.OrdinalEncoder](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OrdinalEncoder.html#sklearn.preprocessing.OrdinalEncoder). See

[Feature engineering pipeline for categorical data](../python/examples/cat_pipeline.html#sphx-glr-python-examples-cat-pipeline-py)for a worked example using an ordinal encoder. To clarify, the type here refers to the type of the name of categories (called

`Index`

in pandas):```
# string type
{"acoustic": 0, "indie": 1, "blues": 2, "country": 3}
# integer type
{-1: 0, 1: 1, 3: 2, 7: 3}
# depending on the dataframe implementation, it can be signed or unsigned.
{5: 0, 1: 1, 3: 2, 7: 3}
# floating point type, both 32-bit and 64-bit are supported.
{-1.0: 0, 1.0: 1, 3.0: 2, 7.0: 3}
```

Internally, XGBoost attempts to extract the categories from the dataframe inputs. For inference (predict), the re-coding happens on the fly and there’s no data copy (baring some internal transformations performed by the dataframe itself). For training continuation however, re-coding requires some extra steps if you are using the native interface. The sklearn interface and the Dask interface can handle training continuation automatically. Last, please note that using the re-coder with the native interface is still experimental. It’s ready for testing, but we want to observe the feature usage for a period of time and might make some breaking changes if needed. The following is a snippet of using the native interface:

```
import pandas as pd
X = pd.DataFrame()
Xy = xgboost.QuantileDMatrix(X, y, enable_categorical=True)
booster = xgboost.train({}, Xy)
# XGBoost can handle re-coding for inference without user intervention
X_new = pd.DataFrame()
booster.inplace_predict(X_new)
# Get categories saved in the model for training continuation
categories = booster.get_categories()
# Use saved categories as a reference for re-coding.
# Training continuation requires a re-coded DMatrix, pass the categories as feature_types
Xy_new = xgboost.QuantileDMatrix(
X_new, y_new, feature_types=categories, enable_categorical=True, ref=Xy
)
booster_1 = xgboost.train({}, Xy_new, xgb_model=booster)
```

No extra step is required for using the scikit-learn interface as long as the inputs are dataframes. During training continuation, XGBoost will either extract the categories from the previous model or use the categories from the new training dataset if the input model doesn’t have the information. As a side note, users can inspect the content of the categories by exporting it to arrow arrays. This interface is still experimental:

```
categories = booster.get_categories(export_to_arrow=True)
print(categories.to_arrow())
```

In addition to the notes above, there’s a [blog post](https://developer.nvidia.com/blog/training-xgboost-models-with-gpu-accelerated-polars-dataframes/)
about using XGBoost with Polars for categorical features with various examples.

The re-coder handles missing categories at inference time. However, if there’s a new category during inference that’s unseen during training (missing during training), a re-coder doesn’t help as it doesn’t know what would be a valid code. There are various heuristics for handling unseen categories during inference. The best and simplest approach is to re-train the model since a new category represents a new type of data. The type of a categorical feature is defined by the set of discrete values. If the set is changed, then the type is considered to be different. In addition, one might add an “unknown” category during training and synthesize some samples with this category as missing values. Lastly, you might consider the new category similar to an existing one based on your domain knowledge, and map to that category during ETL.

For **R**, the auto-recoding is not yet supported as of 3.1. To provide an example:

```
> f0 = factor(c("a", "b", "c"))
> as.numeric(f0)
[1] 1 2 3
> f0
[1] a b c
Levels: a b c
```

In the above snippet, we have the mapping: `a -> 1, b -> 2, c -> 3`

. Assuming the above
is the training data, and the next snippet is the test data:

```
> f1 = factor(c("a", "c"))
> as.numeric(f1)
[1] 1 2
> f1
[1] a c
Levels: a c
```

Now, we have `a -> 1, c -> 2`

because `b`

is missing, and the R factor encodes the data
differently, resulting in invalid test-time encoding. XGBoost cannot remember the original
encoding for the R package. You will have to encode the data explicitly during inference:

```
> f1 = factor(c("a", "c"), levels = c("a", "b", "c"))
> f1
[1] a c
Levels: a b c
> as.numeric(f1)
[1] 1 3
```

## Miscellaneous[](#miscellaneous)

By default, XGBoost assumes input category codes are integers starting from 0 till the number of categories \([0, n\_categories)\). However, user might provide inputs with invalid values due to mistakes or missing values in training dataset. It can be negative value, integer values that can not be accurately represented by 32-bit floating point, or values that are larger than actual number of unique categories. During training this is validated but for prediction it’s treated as the same as not-chosen category for performance reasons.

## References[](#references)

[1] Walter D. Fisher. “[On Grouping for Maximum Homogeneity](https://www.tandfonline.com/doi/abs/10.1080/01621459.1958.10501479)”. Journal of the American Statistical Association. Vol. 53, No. 284 (Dec., 1958), pp. 789-798.

[2] Trevor Hastie, Robert Tibshirani, Jerome Friedman. “[The Elements of Statistical Learning](https://link.springer.com/book/10.1007/978-0-387-84858-7)”. Springer Series in Statistics Springer New York Inc. (2001).

[3] Guolin Ke, Qi Meng, Thomas Finley, Taifeng Wang, Wei Chen, Weidong Ma, Qiwei Ye, Tie-Yan Liu. “[LightGBM: A Highly Efficient Gradient Boosting Decision Tree](https://papers.nips.cc/paper/6907-lightgbm-a-highly-efficient-gradient-boosting-decision-tree.pdf).” Advances in Neural Information Processing Systems 30 (NIPS 2017), pp. 3149-3157.

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/multioutput.html

# Multiple Outputs[](#multiple-outputs)

**Contents**

Added in version 1.6.

Starting from version 1.6, XGBoost has experimental support for multi-output regression
and multi-label classification with Python package. Multi-label classification usually
refers to targets that have multiple non-exclusive class labels. For instance, a movie
can be simultaneously classified as both sci-fi and comedy. For detailed explanation of
terminologies related to different multi-output models please refer to the
[scikit-learn user guide](https://scikit-learn.org/stable/modules/multiclass.html).

Note

As of XGBoost 3.0, the feature is experimental and has limited features. Only the
Python package is tested. In addition, `glinear`

is not supported.

## Training with One-Model-Per-Target[](#training-with-one-model-per-target)

By default, XGBoost builds one model for each target similar to sklearn meta estimators,
with the added benefit of reusing data and other integrated features like SHAP. For a
worked example of regression, see
[A demo for multi-output regression](../python/examples/multioutput_regression.html#sphx-glr-python-examples-multioutput-regression-py). For multi-label classification,
the binary relevance strategy is used. Input `y`

should be of shape ```
(n_samples,
n_classes)
```

with each column having a value of 0 or 1 to specify whether the sample is
labeled as positive for respective class. Given a sample with 3 output classes and 2
labels, the corresponding y should be encoded as `[1, 0, 1]`

with the second class
labeled as negative and the rest labeled as positive. At the moment XGBoost supports only
dense matrix for labels.

```
from sklearn.datasets import make_multilabel_classification
import numpy as np
X, y = make_multilabel_classification(
n_samples=32, n_classes=5, n_labels=3, random_state=0
)
clf = xgb.XGBClassifier(tree_method="hist")
clf.fit(X, y)
np.testing.assert_allclose(clf.predict(X), y)
```

The feature is still under development with limited support from objectives and metrics.

## Training with Vector Leaf[](#training-with-vector-leaf)

Added in version 2.0.0.

Note

This is still working-in-progress, and most features are missing.

XGBoost can optionally build multi-output trees with the size of leaf equals to the number
of targets when the tree method hist is used. The behavior can be controlled by the
`multi_strategy`

training parameter, which can take the value one_output_per_tree (the
default) for building one model per-target or multi_output_tree for building
multi-output trees.

```
clf = xgb.XGBClassifier(tree_method="hist", multi_strategy="multi_output_tree")
```

See [A demo for multi-output regression](../python/examples/multioutput_regression.html#sphx-glr-python-examples-multioutput-regression-py) for a worked example with
regression.

## Using Reduced Gradient (Sketch Boost)[](#using-reduced-gradient-sketch-boost)

Added in version 3.2.0.

Note

This is still working-in-progress, and most features are missing. It is documented here for early testers to provide feedback. Related interface might change without notice.

When the number of targets is large, training a gradient boosting tree model using the
full gradient matrix becomes challenging. The training procedure may run out of memory for
storing the histogram, or run extremely slowly due to the amount of computation needed. As
an optimization, XGBoost implements an interface for using two types of gradients based on
the concepts from Sketch Boost [[1]](#references).

The key insight is that we can use different gradients for two distinct purposes:

**Split gradient**: A reduced-dimension gradient used to determine the tree structure.**Value gradient**: The full gradient used to calculate the final leaf values for accurate predictions.

This separation allows the expensive histogram building and split finding to operate on a smaller gradient matrix, while still producing valid predictions using the full loss function for leaf values. The Sketch Boost paper proposes using dimensionality reduction on the gradient matrix. In practice, one can also define a different but related loss with a small gradient matrix for finding the tree structure.

To access this feature, create a custom objective that inherits from `TreeObjective`

and
implement the `split_grad`

method.

```
from xgboost.objective import TreeObjective
from cuml.decomposition import TruncatedSVD
import cupy as cp
class LsObj(TreeObjective):
def __call__(self, iteration: int, y_pred, dtrain):
"""Least squared error."""
y_true = dtrain.get_label()
grad = y_pred - y_true
hess = cp.ones(grad.shape)
return cp.array(grad), cp.array(hess)
def split_grad(self, iteration: int, grad, hess):
svd_params = {"algorithm": "jacobi", "n_components": 2, "n_iter": 8}
svd = TruncatedSVD(output_type="cupy", **svd_params)
svd.fit(grad)
grad = svd.transform(grad)
hess = svd.transform(hess)
hess = cp.clip(hess, 0.01, None)
return grad, hess
```

See [A demo for multi-output regression using reduced gradient](../python/examples/multioutput_reduced_gradient.html#sphx-glr-python-examples-multioutput-reduced-gradient-py) for a complete worked
example. The feature supports only the `multi_strategy=multi_output_tree`

.

## References[](#references)

[1] Leonid Iosipoi, Anton Vakhrushev. “[Fast Gradient Boosted Decision Tree for Multioutput Problems](https://proceedings.neurips.cc/paper_files/paper/2022/file/a36c3dbe676fa8445715a31a90c66ab3-Paper-Conference.pdf)”. NeurIPS 2022, pp 25422 - 25435.

---

## Source: https://xgboost.readthedocs.io/en/stable/tutorials/rf.html

# Random Forests(TM) in XGBoost[](#random-forests-tm-in-xgboost)

XGBoost is normally used to train gradient-boosted decision trees and other gradient boosted models. Random Forests use the same model representation and inference, as gradient-boosted decision trees, but a different training algorithm. One can use XGBoost to train a standalone random forest or use random forest as a base model for gradient boosting. Here we focus on training standalone random forest.

We have native APIs for training random forests since the early days, and a new
Scikit-Learn wrapper after 0.82 (not included in 0.82). Please note that the new
Scikit-Learn wrapper is still **experimental**, which means we might change the interface
whenever needed.

## Standalone Random Forest With XGBoost API[](#standalone-random-forest-with-xgboost-api)

The following parameters must be set to enable random forest training.

`booster`

should be set to`gbtree`

, as we are training forests. Note that as this is the default, this parameter needn’t be set explicitly.`subsample`

must be set to a value less than 1 to enable random selection of training cases (rows).One of

`colsample_by*`

parameters must be set to a value less than 1 to enable random selection of columns. Normally,`colsample_bynode`

would be set to a value less than 1 to randomly sample columns at each tree split.`num_parallel_tree`

should be set to the size of the forest being trained.`num_boost_round`

should be set to 1 to prevent XGBoost from boosting multiple random forests. Note that this is a keyword argument to`train()`

, and is not part of the parameter dictionary.`eta`

(alias:`learning_rate`

) must be set to 1 when training random forest regression.`random_state`

can be used to seed the random number generator.

Other parameters should be set in a similar way they are set for gradient boosting. For
instance, `objective`

will typically be `reg:squarederror`

for regression and
`binary:logistic`

for classification, `lambda`

should be set according to a desired
regularization weight, etc.

If both `num_parallel_tree`

and `num_boost_round`

are greater than 1, training will
use a combination of random forest and gradient boosting strategy. It will perform
`num_boost_round`

rounds, boosting a random forest of `num_parallel_tree`

trees at
each round. If early stopping is not enabled, the final model will consist of
`num_parallel_tree`

* `num_boost_round`

trees.

Here is a sample parameter dictionary for training a random forest on a GPU using xgboost:

```
params = {
"colsample_bynode": 0.8,
"learning_rate": 1,
"max_depth": 5,
"num_parallel_tree": 100,
"objective": "binary:logistic",
"subsample": 0.8,
"tree_method": "hist",
"device": "cuda",
}
```

A random forest model can then be trained as follows:

```
bst = train(params, dmatrix, num_boost_round=1)
```

## Standalone Random Forest With Scikit-Learn-Like API[](#standalone-random-forest-with-scikit-learn-like-api)

`XGBRFClassifier`

and `XGBRFRegressor`

are SKL-like classes that provide random forest
functionality. They are basically versions of `XGBClassifier`

and `XGBRegressor`

that
train random forest instead of gradient boosting, and have default values and meaning of
some of the parameters adjusted accordingly. In particular:

`n_estimators`

specifies the size of the forest to be trained; it is converted to`num_parallel_tree`

, instead of the number of boosting rounds`learning_rate`

is set to 1 by default`colsample_bynode`

and`subsample`

are set to 0.8 by default`booster`

is always`gbtree`


For a simple example, you can train a random forest regressor with:

```
from sklearn.model_selection import KFold
# Your code ...
kf = KFold(n_splits=2)
for train_index, test_index in kf.split(X, y):
xgb_model = xgb.XGBRFRegressor(random_state=42).fit(
X[train_index], y[train_index])
```

Note that these classes have a smaller selection of parameters compared to using
`train()`

. In particular, it is impossible to combine random forests with gradient
boosting using this API.

## Caveats[](#caveats)

XGBoost uses 2nd order approximation to the objective function. This can lead to results that differ from a random forest implementation that uses the exact value of the objective function.

XGBoost does not perform replacement when subsampling training cases. Each training case can occur in a subsampled set either 0 or 1 time.