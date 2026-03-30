# Scipy Documentation
> Scraped on: 2026-03-30 | Root Source: [https://docs.scipy.org/doc/scipy/](https://docs.scipy.org/doc/scipy/)



---

## Source: https://docs.scipy.org/doc/scipy/

# SciPy documentation[#](#scipy-documentation)

**Date**: January 11, 2026 **Version**: 1.17.0

**Download documentation**: [https://docs.scipy.org/doc/](https://docs.scipy.org/doc/)

**Useful links**:
[Install](https://scipy.org/install/) |
[Source Repository](https://github.com/scipy/scipy) |
[Issues & Ideas](https://github.com/scipy/scipy/issues) |
[Q&A Support](https://stackoverflow.com/questions/tagged/scipy) |
[Forum](https://discuss.scientific-python.org/c/contributor/scipy)

**SciPy** (pronounced “Sigh Pie”) is an open-source software for mathematics,
science, and engineering.

**User guide**

The user guide provides in-depth information on the key concepts of SciPy with useful background information and explanation.

**API reference**

The reference guide contains a detailed description of the SciPy API. The reference describes how the methods work and which parameters can be used. It assumes that you have an understanding of the key concepts.

**Building from source**

Want to build from source rather than use a Python distribution or
pre-built SciPy binary? This guide will describe how to set up your
build environment, and how to build *SciPy* itself, including the many
options for customizing that build.

**Developer guide**

Saw a typo in the documentation? Want to improve existing functionalities? The contributing guidelines will guide you through the process of improving SciPy.

---

## Source: https://docs.scipy.org/doc/scipy/tutorial/index.html

# SciPy User Guide[#](#scipy-user-guide)

SciPy is a collection of mathematical algorithms and convenience functions built
on [NumPy](https://numpy.org) . It adds significant power to Python by providing the user with
high-level commands and classes for manipulating and visualizing data.

## Subpackages and User Guides[#](#subpackages-and-user-guides)

SciPy is organized into subpackages covering different scientific computing domains. These are summarized in the following table, with their user guide linked in the Description and User Guide column (if available):

Subpackage |
Description and User Guide |
|---|---|
|
Clustering algorithms |
|
Physical and mathematical constants |
|
Finite difference differentiation tools |
|
|
|
Fast Fourier Transform routines (legacy) |
|
|
|
|
|
|
|
|
|
|
|
Orthogonal distance regression |
|
|
|
|
|
|
|
|
|
|
|

There are also additional user guides for these topics:

[Sparse eigenvalue problems with ARPACK](arpack.html)- Eigenvalue problem solver using iterative methods[Compressed Sparse Graph Routines (scipy.sparse.csgraph)](csgraph.html)- Compressed Sparse Graph Routines

For guidance on organizing and importing functions from SciPy subpackages, refer to the [Guidelines for Importing Functions from SciPy](https://scipy.github.io/devdocs/reference/index.html#guidelines-for-importing-functions-from-scipy).

For information on support for parallel execution and thread safety, see
[Parallel execution support in SciPy](parallel_execution.html#scipy-parallel-execution) and [Thread Safety in SciPy](thread_safety.html#scipy-thread-safety).

---

## Source: https://docs.scipy.org/doc/scipy/reference/index.html

# SciPy API[#](#scipy-api)

## Importing from SciPy[#](#importing-from-scipy)

In Python, the distinction between what is the public API of a library and what are private implementation details is not always clear. Unlike in other languages like Java, it is possible in Python to access “private” functions or objects. Occasionally this may be convenient, but be aware that if you do so your code may break without warning in future releases. Some widely understood rules for what is and isn’t public in Python are:

Methods / functions / classes and module attributes whose names begin with a leading underscore are private.

If a class name begins with a leading underscore, none of its members are public, whether or not they begin with a leading underscore.

If a module name in a package begins with a leading underscore none of its members are public, whether or not they begin with a leading underscore.

If a module or package defines

`__all__`

, that authoritatively defines the public interface.If a module or package doesn’t define

`__all__`

, then all names that don’t start with a leading underscore are public.

Note

Reading the above guidelines one could draw the conclusion that every private module or object starts with an underscore. This is not the case; the presence of underscores do mark something as private, but the absence of underscores do not mark something as public.

In SciPy there are modules whose names don’t start with an underscore, but that should be considered private. To clarify which modules these are, we define below what the public API is for SciPy, and give some recommendations for how to import modules/functions/objects from SciPy.

## Guidelines for importing functions from SciPy[#](#guidelines-for-importing-functions-from-scipy)

Everything in the namespaces of SciPy submodules is public. In general in
Python, it is recommended to make use of namespaces. For example, the
function `curve_fit`

(defined in `scipy/optimize/_minpack_py.py`

) should be
imported like this:

```
import scipy
result = scipy.optimize.curve_fit(...)
```

Or alternatively one could use the submodule as a namespace like so:

```
from scipy import optimize
result = optimize.curve_fit(...)
```

Note

For `scipy.io`

prefer the use of `import scipy`

because `io`

is also the name of a module in the Python
stdlib.

In some cases, the public API is one level deeper. For example, the
`scipy.sparse.linalg`

module is public, and the functions it contains are not
available in the `scipy.sparse`

namespace. Sometimes it may result in more
easily understandable code if functions are imported from one level deeper.
For example, in the following it is immediately clear that `lomax`

is a
distribution if the second form is chosen:

```
# first form
from scipy import stats
stats.lomax(...)
# second form
from scipy.stats import distributions
distributions.lomax(...)
```

In that case, the second form can be chosen **if** it is documented in the next
section that the submodule in question is public. Of course you can still use:

```
import scipy
scipy.stats.lomax(...)
# or
scipy.stats.distributions.lomax(...)
```

Note

SciPy is using a lazy loading mechanism which means that modules are only loaded in memory when you first try to access them.

## API definition[#](#api-definition)

Every submodule listed below is public. That means that these submodules are unlikely to be renamed or changed in an incompatible way, and if that is necessary, a deprecation warning will be raised for one SciPy release before the change is made.

-
`scipy.stats.distributions`



## SciPy structure[#](#scipy-structure)

All SciPy modules should follow the following conventions. In the
following, a *SciPy module* is defined as a Python package, say
`yyy`

, that is located in the scipy/ directory.

Ideally, each SciPy module should be as self-contained as possible. That is, it should have minimal dependencies on other packages or modules. Even dependencies on other SciPy modules should be kept to a minimum. A dependency on NumPy is of course assumed.

Directory

`yyy/`

contains:A file

`meson.build`

with build configuration for the submodule.A directory

`tests/`

that contains files`test_<name>.py`

corresponding to modules`yyy/<name>{.py,.so,/}`

.

Private modules should be prefixed with an underscore

`_`

, for instance`yyy/_somemodule.py`

.User-visible functions should have good documentation following the

[NumPy documentation style](https://numpydoc.readthedocs.io/en/latest/format.html).The

`__init__.py`

of the module should contain the main reference documentation in its docstring. This is connected to the Sphinx documentation under`doc/`

via Sphinx’s automodule directive.The reference documentation should first give a categorized list of the contents of the module using

`autosummary::`

directives, and after that explain points essential for understanding the use of the module.Tutorial-style documentation with extensive examples should be separate and put under

`doc/source/tutorial/`

.

See the existing SciPy submodules for guidance.

---

## Source: https://docs.scipy.org/doc/scipy/building/index.html

# Building from source[#](#building-from-source)

Note

If you are only trying to install SciPy, we recommend using binaries - see
[Installation](https://scipy.org/install) for details on that.

Building SciPy from source requires setting up system-level dependencies (compilers, BLAS/LAPACK libraries, etc.) first, and then invoking a build. The build may be done in order to install SciPy for local usage, develop SciPy itself, or build redistributable binary packages. And it may be desired to customize aspects of how the build is done. This guide will cover all these aspects. In addition, it provides background information on how the SciPy build works, and links to up-to-date guides for generic Python build & packaging documentation that is relevant.

## System-level dependencies[#](#system-level-dependencies)

SciPy uses compiled code for speed, which means you need compilers and some other system-level (i.e, non-Python / non-PyPI) dependencies to build it on your system.

Note

If you are using Conda, you can skip the steps in this section - with the
exception of installing compilers for Windows or the Apple Developer Tools
for macOS. All other dependencies will be installed automatically by the
`mamba env create -f environment.yml`

command.

If you want to use the system Python and `pip`

, you will need:

C, C++, and Fortran compilers (typically

`gcc`

,`g++`

, and`gfortran`

).Python header files (typically a package named

`python3-dev`

or`python3-devel`

)BLAS and LAPACK libraries.

[OpenBLAS](https://github.com/xianyi/OpenBLAS/)is the SciPy default; other variants include[ATLAS](http://math-atlas.sourceforge.net/)and[MKL](https://software.intel.com/en-us/intel-mkl).`pkg-config`

for dependency detection.

To install SciPy build requirements, you can do:

```
sudo apt install -y gcc g++ gfortran libopenblas-dev liblapack-dev pkg-config python3-pip python3-dev
```

Alternatively, you can do:

```
sudo apt build-dep scipy
```

This command installs whatever is needed to build SciPy, with the advantage that new dependencies or updates to required versions are handled by the package managers.

To install SciPy build requirements, you can do:

```
sudo dnf install gcc-gfortran python3-devel openblas-devel lapack-devel pkgconfig
```

Alternatively, you can do:

```
sudo dnf builddep scipy
```

This command installs whatever is needed to build SciPy, with the advantage that new dependencies or updates to required versions are handled by the package managers.

To install SciPy build requirements, you can do:

```
sudo yum install gcc-gfortran python3-devel openblas-devel lapack-devel pkgconfig
```

Alternatively, you can do:

```
sudo yum-builddep scipy
```

This command installs whatever is needed to build SciPy, with the advantage that new dependencies or updates to required versions are handled by the package managers.

To install SciPy build requirements, you can do:

```
sudo pacman -S gcc-fortran openblas pkgconf
```

Install Apple Developer Tools. An easy way to do this is to
[open a terminal window](https://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line),
enter the command:

```
xcode-select --install
```

and follow the prompts. Apple Developer Tools includes Git, the Clang C/C++ compilers, and other development utilities that may be required.

Do *not* use the macOS system Python. Instead, install Python
with [the python.org installer](https://www.python.org/downloads/) or
with a package manager like Homebrew, MacPorts or Fink.

The other system dependencies you need are a Fortran compiler, BLAS and
LAPACK libraries, and pkg-config. They’re easiest to install with
[Homebrew](https://brew.sh/):

```
brew install gfortran openblas pkg-config
```

To allow the build tools to find OpenBLAS, you must run:

```
brew info openblas | grep PKG_CONFIG_PATH
```

This will give you a command starting with `export PKG_CONFIG_PATH=`

, which
you must run.

Note

As of SciPy 1.14.0, we have added support for the Accelerate library
for BLAS and LAPACK. It requires macOS 13.3 or greater. To build with
Accelerate instead of OpenBLAS, see [Selecting BLAS and LAPACK libraries](blas_lapack.html#blas-lapack-selection).

A compatible set of C, C++ and Fortran compilers is needed to build SciPy. This is trickier on Windows than on other platforms, because MSVC does not support Fortran, and gfortran and MSVC can’t be used together. You will need one of these sets of compilers:

Mingw-w64 compilers (

`gcc`

,`g++`

,`gfortran`

) -*recommended, because it’s easiest to install and is what we use for SciPy’s own CI and binaries*MSVC + Intel Fortran (

`ifort`

)Intel compilers (

`icc`

,`ifort`

)

Compared to macOS and Linux, building SciPy on Windows is a little more difficult, due to the need to set up these compilers. It is not possible to just call a one-liner on the command prompt as you would on other platforms.

First, install Microsoft Visual Studio - the 2019 Community Edition or any
newer version will work (see the
[Visual Studio download site](https://visualstudio.microsoft.com/downloads/)).
This is needed even if you use the MinGW-w64 or Intel compilers, in order
to ensure you have the Windows Universal C Runtime (the other components of
Visual Studio are not needed when using Mingw-w64, and can be deselected if
desired, to save disk space).

There are several sources of binaries for MinGW-w64. We recommend the
RTools versions, which can be installed with Chocolatey (see
Chocolatey install instructions [here](https://chocolatey.org/install)):

```
choco install rtools -y --no-progress --force --version=4.0.0.20220206
```

In case of issues, we recommend using the exact same version as used
in the [SciPy GitHub Actions CI jobs for Windows](https://github.com/scipy/scipy/blob/main/.github/workflows/windows.yml).

The MSVC installer does not put the compilers on the system path, and
the install location may change. To query the install location, MSVC
comes with a `vswhere.exe`

command-line utility. And to make the
C/C++ compilers available inside the shell you are using, you need to
run a `.bat`

file for the correct bitness and architecture (e.g., for
64-bit Intel CPUs, use `vcvars64.bat`

).

For detailed guidance, see [Use the Microsoft C++ toolset from the command line](https://learn.microsoft.com/en-us/cpp/build/building-on-the-command-line?view=msvc-170).

Similar to MSVC, the Intel compilers are designed to be used with an
activation script (`Intel\oneAPI\setvars.bat`

) that you run in the
shell you are using. This makes the compilers available on the path.
For detailed guidance, see
[Get Started with the Intel® oneAPI HPC Toolkit for Windows](https://www.intel.com/content/www/us/en/docs/oneapi-hpc-toolkit/get-started-guide-windows/2023-1/overview.html).

Note

Compilers should be on the system path (i.e., the `PATH`

environment
variable should contain the directory in which the compiler executables
can be found) in order to be found, with the exception of MSVC which
will be found automatically if and only if there are no other compilers
on the `PATH`

. You can use any shell (e.g., Powershell, `cmd`

or
Git Bash) to invoke a build. To check that this is the case, try
invoking a Fortran compiler in the shell you use (e.g., ```
gfortran
--version
```

or `ifort --version`

).

Warning

When using a conda environment it is possible that the environment
creation will not work due to an outdated Fortran compiler. If that
happens, remove the `compilers`

entry from `environment.yml`

and
try again. The Fortran compiler should be installed as described in
this section.

## Building SciPy from source[#](#building-scipy-from-source)

If you want to only install SciPy from source once and not do any development
work, then the recommended way to build and install is to use `pip`

.
Otherwise, conda is recommended.

Note

If you don’t have a conda installation yet, we recommend using
[Miniforge](https://github.com/conda-forge/miniforge#miniforge); any conda flavor will work though.

### Building from source to use SciPy[#](#building-from-source-to-use-scipy)

If you are using a conda environment, `pip`

is still the tool you use to
invoke a from-source build of SciPy. It is important to always use the
`--no-build-isolation`

flag to the `pip install`

command, to avoid
building against a `numpy`

wheel from PyPI. In order for that to work you
must first install the remaining build dependencies into the conda
environment:

```
# Either install all SciPy dev dependencies into a fresh conda environment
mamba env create -f environment.yml
# Or, install only the required build dependencies
mamba install python numpy cython pythran pybind11 compilers openblas meson-python pkg-config
# To build the latest stable release:
pip install scipy --no-build-isolation --no-binary scipy
# To build a development version, you need a local clone of the SciPy git repository:
git clone https://github.com/scipy/scipy.git
cd scipy
git submodule update --init
pip install . --no-build-isolation
```

```
# To build the latest stable release:
pip install scipy --no-binary scipy
# To build a development version, you need a local clone of the SciPy git repository:
git clone https://github.com/scipy/scipy.git
cd scipy
git submodule update --init
pip install .
```

### Building from source for SciPy development[#](#building-from-source-for-scipy-development)

If you want to build from source in order to work on SciPy itself, first clone the SciPy repository:

```
git clone https://github.com/scipy/scipy.git
cd scipy
git submodule update --init
```

Tip

Many of the steps described below can now be accomplished automatically
with commands which execute tasks in SciPy’s Pixi workspace,
like `pixi run build`

.
To use this workspace, [install Pixi](https://pixi.sh/latest/installation/)
and execute `pixi task list`

in a local clone of SciPy’s source to see
the various tasks available.

This removes the need for developers to keep track of development environments and installed dependencies, as running a task automatically installs and uses a suitable environment. A future update to this guide will provide full details on using the Pixi workspace for SciPy development.

Then you want to do the following:

Create a dedicated development environment (virtual environment or conda environment),

Install all needed dependencies (

*build*, and also*test*,*doc*and*optional*dependencies),Build SciPy with our

`spin`

developer interface.

Step (3) is always the same, steps (1) and (2) are different between conda and virtual environments:

To create a `scipy-dev`

development environment with every required and
optional dependency installed, run:

```
mamba env create -f environment.yml
mamba activate scipy-dev
```

Note

There are many tools to manage virtual environments, like `venv`

,
`virtualenv`

/`virtualenvwrapper`

, `pyenv`

/`pyenv-virtualenv`

,
Poetry, PDM, Hatch, and more. Here we use the basic `venv`

tool that
is part of the Python stdlib. You can use any other tool; all we need is
an activated Python environment.

Create and activate a virtual environment in a new directory named `venv`

(
note that the exact activation command may be different based on your OS and shell
- see [“How venvs work”](https://docs.python.org/3/library/venv.html#how-venvs-work)
in the `venv`

docs).

```
python -m venv venv
source venv/bin/activate
```

```
python -m venv venv
source venv/bin/activate
```

```
python -m venv venv
venv\Scripts\Activate.ps1
```

Then install the Python-level dependencies (see `pyproject.toml`

) from
PyPI with:

```
# All dependencies
python -m pip install -r requirements/all.txt
# Alternatively, you can install just the dependencies for certain
# development tasks:
# Build and dev dependencies (for `spin {build, lint, mypy}`)
python -m pip install -r requirements/build.txt -r requirements/dev.txt
# Doc dependencies (for `spin {doc, refguide-check}`)
python -m pip install -r requirements/doc.txt
# Test dependencies (for `spin {test, bench, refguide-check}`)
python -m pip install -r requirements/test.txt
```

To build SciPy in an activated development environment, run:

```
spin build
```

This will install SciPy inside the repository (by default in a
`build-install`

directory). You can then run tests (`spin test`

),
drop into IPython (`spin ipython`

), or take other development steps
like build the html documentation or running benchmarks. The `spin`

interface is self-documenting, so please see `spin --help`

and
`spin <subcommand> --help`

for detailed guidance.

IDE support & editable installs

While the `spin build`

interface is our recommended way of working on SciPy,
it has one limitation: because of the custom install location, SciPy
will not be recognized automatically within an
IDE (e.g., for running a script via a “run” button, or setting breakpoints
visually). This will work better with an *in-place build* (or “editable
install”).

Editable installs are supported via `spin install`

.
When making changes to SciPy code, including to compiled code, there is no
need to manually rebuild or reinstall. However, should you need to run `git clean -xdf`

,
which removes the built extension modules, remember to also uninstall SciPy
with `pip uninstall scipy`

.

See the [meson-python](https://mesonbuild.com/meson-python/) documentation on editable installs for more details
on how things work under the hood.

Note that editable installations are unsuitable for some forms of development, such as working on sections of C/Cython API where tests are disabled for editable installations. They also tend to hit weird corner cases more frequently than regular installations, and have some known limitations like a lack of support for static typing.

## Installing static type stubs[#](#installing-static-type-stubs)

If you would like to install static type stubs to aid your development of SciPy,
you can include the `scipy-stubs`

package in your development environment.
It is available on PyPI and conda-forge - see the [scipy-stubs](https://github.com/jorenham/scipy-stubs?tab=readme-ov-file#installation) installation guide.

---

## Source: https://docs.scipy.org/doc/scipy/dev/index.html

# Developer Documentation[#](#developer-documentation)

Below you will find general information about contributing. For an overview of where help or new features are desired or planned, see the roadmap. And for a more detailed look at how the SciPy project works, see the organization section.

---

## Source: https://docs.scipy.org/doc/scipy/release.html

# Release Notes[#](#release-notes)

This is the list of changes to SciPy between each release. For full details,-notes
see the [commit logs](https://github.com/scipy/scipy/commits/).

[SciPy 1.17.0 Release Notes](release/1.17.0-notes.html)[SciPy 1.16.3 Release Notes](release/1.16.3-notes.html)[SciPy 1.16.2 Release Notes](release/1.16.2-notes.html)[SciPy 1.16.1 Release Notes](release/1.16.1-notes.html)[SciPy 1.16.0 Release Notes](release/1.16.0-notes.html)[SciPy 1.15.3 Release Notes](release/1.15.3-notes.html)[SciPy 1.15.2 Release Notes](release/1.15.2-notes.html)[SciPy 1.15.1 Release Notes](release/1.15.1-notes.html)[SciPy 1.15.0 Release Notes](release/1.15.0-notes.html)[SciPy 1.14.1 Release Notes](release/1.14.1-notes.html)[SciPy 1.14.0 Release Notes](release/1.14.0-notes.html)[SciPy 1.13.1 Release Notes](release/1.13.1-notes.html)[SciPy 1.13.0 Release Notes](release/1.13.0-notes.html)[SciPy 1.12.0 Release Notes](release/1.12.0-notes.html)[SciPy 1.11.4 Release Notes](release/1.11.4-notes.html)[SciPy 1.11.3 Release Notes](release/1.11.3-notes.html)[SciPy 1.11.2 Release Notes](release/1.11.2-notes.html)[SciPy 1.11.1 Release Notes](release/1.11.1-notes.html)[SciPy 1.11.0 Release Notes](release/1.11.0-notes.html)[SciPy 1.10.1 Release Notes](release/1.10.1-notes.html)[SciPy 1.10.0 Release Notes](release/1.10.0-notes.html)[SciPy 1.9.3 Release Notes](release/1.9.3-notes.html)[SciPy 1.9.2 Release Notes](release/1.9.2-notes.html)[SciPy 1.9.1 Release Notes](release/1.9.1-notes.html)[SciPy 1.9.0 Release Notes](release/1.9.0-notes.html)[SciPy 1.8.1 Release Notes](release/1.8.1-notes.html)[SciPy 1.8.0 Release Notes](release/1.8.0-notes.html)[SciPy 1.7.3 Release Notes](release/1.7.3-notes.html)[SciPy 1.7.2 Release Notes](release/1.7.2-notes.html)[SciPy 1.7.1 Release Notes](release/1.7.1-notes.html)[SciPy 1.7.0 Release Notes](release/1.7.0-notes.html)[SciPy 1.6.3 Release Notes](release/1.6.3-notes.html)[SciPy 1.6.2 Release Notes](release/1.6.2-notes.html)[SciPy 1.6.1 Release Notes](release/1.6.1-notes.html)[SciPy 1.6.0 Release Notes](release/1.6.0-notes.html)[SciPy 1.5.4 Release Notes](release/1.5.4-notes.html)[SciPy 1.5.3 Release Notes](release/1.5.3-notes.html)[SciPy 1.5.2 Release Notes](release/1.5.2-notes.html)[SciPy 1.5.1 Release Notes](release/1.5.1-notes.html)[SciPy 1.5.0 Release Notes](release/1.5.0-notes.html)[SciPy 1.4.1 Release Notes](release/1.4.1-notes.html)[SciPy 1.4.0 Release Notes](release/1.4.0-notes.html)[SciPy 1.3.3 Release Notes](release/1.3.3-notes.html)[SciPy 1.3.2 Release Notes](release/1.3.2-notes.html)[SciPy 1.3.1 Release Notes](release/1.3.1-notes.html)[SciPy 1.3.0 Release Notes](release/1.3.0-notes.html)[SciPy 1.2.3 Release Notes](release/1.2.3-notes.html)[SciPy 1.2.2 Release Notes](release/1.2.2-notes.html)[SciPy 1.2.1 Release Notes](release/1.2.1-notes.html)[SciPy 1.2.0 Release Notes](release/1.2.0-notes.html)[SciPy 1.1.0 Release Notes](release/1.1.0-notes.html)[SciPy 1.0.1 Release Notes](release/1.0.1-notes.html)[SciPy 1.0.0 Release Notes](release/1.0.0-notes.html)[SciPy 0.19.1 Release Notes](release/0.19.1-notes.html)[SciPy 0.19.0 Release Notes](release/0.19.0-notes.html)[SciPy 0.18.1 Release Notes](release/0.18.1-notes.html)[SciPy 0.18.0 Release Notes](release/0.18.0-notes.html)[SciPy 0.17.1 Release Notes](release/0.17.1-notes.html)[SciPy 0.17.0 Release Notes](release/0.17.0-notes.html)[SciPy 0.16.1 Release Notes](release/0.16.1-notes.html)[SciPy 0.16.0 Release Notes](release/0.16.0-notes.html)[SciPy 0.15.1 Release Notes](release/0.15.1-notes.html)[SciPy 0.15.0 Release Notes](release/0.15.0-notes.html)[SciPy 0.14.1 Release Notes](release/0.14.1-notes.html)[SciPy 0.14.0 Release Notes](release/0.14.0-notes.html)[SciPy 0.13.2 Release Notes](release/0.13.2-notes.html)[SciPy 0.13.1 Release Notes](release/0.13.1-notes.html)[SciPy 0.13.0 Release Notes](release/0.13.0-notes.html)[SciPy 0.12.1 Release Notes](release/0.12.1-notes.html)[SciPy 0.12.0 Release Notes](release/0.12.0-notes.html)[SciPy 0.11.0 Release Notes](release/0.11.0-notes.html)[SciPy 0.10.1 Release Notes](release/0.10.1-notes.html)[SciPy 0.10.0 Release Notes](release/0.10.0-notes.html)[SciPy 0.9.0 Release Notes](release/0.9.0-notes.html)[SciPy 0.8.0 Release Notes](release/0.8.0-notes.html)[SciPy 0.7.2 Release Notes](release/0.7.2-notes.html)[SciPy 0.7.1 Release Notes](release/0.7.1-notes.html)[SciPy 0.7.0 Release Notes](release/0.7.0-notes.html)

---

## Source: https://docs.scipy.org/doc/

# Numpy and Scipy Documentation[¶](#numpy-and-scipy-documentation)

Welcome! This is the documentation for Numpy and Scipy.

**For contributors:**

**Latest releases:**

**Others:**

-
For newer versions see

[https://www.numpy.org/doc](https://www.numpy.org/doc/)[Numpy (development version) Reference Guide](https://www.numpy.org/devdocs/reference/)[Numpy (development version) User Guide](https://www.numpy.org/devdocs/user/)[Numpy 1.17.0 Reference Guide](numpy-1.17.0/reference/),[[HTML+zip]](numpy-1.17.0/numpy-html-1.17.0.zip),[[PDF]](numpy-1.17.0/numpy-ref-1.17.0.pdf)[Numpy 1.17.0 User Guide](numpy-1.17.0/user/),[[PDF]](numpy-1.17.0/numpy-user-1.17.0.pdf)[Numpy 1.16.1 Reference Guide](numpy-1.16.1/reference/),[[HTML+zip]](numpy-1.16.1/numpy-html-1.16.1.zip),[[PDF]](numpy-1.16.1/numpy-ref-1.16.1.pdf)[Numpy 1.16.1 User Guide](numpy-1.16.1/user/),[[PDF]](numpy-1.16.1/numpy-user-1.16.1.pdf)[Numpy 1.16.0 Reference Guide](numpy-1.16.0/reference/),[[HTML+zip]](numpy-1.16.0/numpy-html-1.16.0.zip),[[PDF]](numpy-1.16.0/numpy-ref-1.16.0.pdf)[Numpy 1.16.0 User Guide](numpy-1.16.0/user/),[[PDF]](numpy-1.16.0/numpy-user-1.16.0.pdf)[Numpy 1.15.4 Reference Guide](numpy-1.15.4/reference/),[[HTML+zip]](numpy-1.15.4/numpy-html-1.15.4.zip),[[PDF]](numpy-1.15.4/numpy-ref-1.15.4.pdf)[Numpy 1.15.4 User Guide](numpy-1.15.4/user/),[[PDF]](numpy-1.15.4/numpy-user-1.15.4.pdf)[Numpy 1.15.1 Reference Guide](numpy-1.15.1/reference/),[[HTML+zip]](numpy-1.15.1/numpy-html-1.15.1.zip),[[PDF]](numpy-1.15.1/numpy-ref-1.15.1.pdf)[Numpy 1.15.1 User Guide](numpy-1.15.1/user/),[[PDF]](numpy-1.15.1/numpy-user-1.15.1.pdf)[Numpy 1.15.0 Reference Guide](numpy-1.15.0/reference/),[[HTML+zip]](numpy-1.15.0/numpy-html-1.15.0.zip),[[PDF]](numpy-1.15.0/numpy-ref-1.15.0.pdf)[Numpy 1.15.0 User Guide](numpy-1.15.0/user/),[[PDF]](numpy-1.15.0/numpy-user-1.15.0.pdf)[Numpy 1.14.5 Reference Guide](numpy-1.14.5/reference/),[[HTML+zip]](numpy-1.14.5/numpy-html-1.14.5.zip),[[PDF]](numpy-1.14.5/numpy-ref-1.14.5.pdf)[Numpy 1.14.5 User Guide](numpy-1.14.5/user/),[[PDF]](numpy-1.14.5/numpy-user-1.14.5.pdf)[Numpy 1.14.1 Reference Guide](numpy-1.14.1/reference/),[[HTML+zip]](numpy-1.14.1/numpy-html-1.14.1.zip),[[PDF]](numpy-1.14.1/numpy-ref-1.14.1.pdf)[Numpy 1.14.1 User Guide](numpy-1.14.1/user/),[[PDF]](numpy-1.14.1/numpy-user-1.14.1.pdf)[Numpy 1.14.0 Reference Guide](numpy-1.14.0/reference/),[[HTML+zip]](numpy-1.14.0/numpy-html-1.14.0.zip),[[PDF]](numpy-1.14.0/numpy-ref-1.14.0.pdf)[Numpy 1.14.0 User Guide](numpy-1.14.0/user/),[[PDF]](numpy-1.14.0/numpy-user-1.14.0.pdf)[Numpy 1.13.0 Reference Guide](numpy-1.13.0/reference/),[[HTML+zip]](numpy-1.13.0/numpy-html-1.13.0.zip),[[PDF]](numpy-1.13.0/numpy-ref-1.13.0.pdf)[Numpy 1.13.0 User Guide](numpy-1.13.0/user/),[[PDF]](numpy-1.13.0/numpy-user-1.13.0.pdf)[Numpy 1.12.0 Reference Guide](numpy-1.12.0/reference/),[[HTML+zip]](numpy-1.12.0/numpy-html-1.12.0.zip),[[PDF]](numpy-1.12.0/numpy-ref-1.12.0.pdf)[Numpy 1.12.0 User Guide](numpy-1.12.0/user/),[[PDF]](numpy-1.12.0/numpy-user-1.12.0.pdf)[Numpy 1.11.0 Reference Guide](numpy-1.11.0/reference/),[[HTML+zip]](numpy-1.11.0/numpy-html-1.11.0.zip),[[PDF]](numpy-1.11.0/numpy-ref-1.11.0.pdf)[Numpy 1.11.0 User Guide](numpy-1.11.0/user/),[[PDF]](numpy-1.11.0/numpy-user-1.11.0.pdf)[Numpy 1.10.4 Reference Guide](numpy-1.10.4/reference/),[[HTML+zip]](numpy-1.10.4/numpy-html-1.10.4.zip),[[PDF]](numpy-1.10.4/numpy-ref-1.10.4.pdf)[Numpy 1.10.4 User Guide](numpy-1.10.4/user/),[[PDF]](numpy-1.10.4/numpy-user-1.10.4.pdf)[Numpy 1.10.1 Reference Guide](numpy-1.10.1/reference/),[[HTML+zip]](numpy-1.10.1/numpy-html-1.10.1.zip),[[PDF]](numpy-1.10.1/numpy-ref-1.10.1.pdf)[Numpy 1.10.1 User Guide](numpy-1.10.1/user/),[[PDF]](numpy-1.10.1/numpy-user-1.10.1.pdf)[Numpy 1.10.0 Reference Guide](numpy-1.10.0/reference/),[[HTML+zip]](numpy-1.10.0/numpy-html-1.10.0.zip),[[PDF]](numpy-1.10.0/numpy-ref-1.10.0.pdf)[Numpy 1.10.0 User Guide](numpy-1.10.0/user/),[[PDF]](numpy-1.10.0/numpy-user-1.10.0.pdf)[Numpy 1.9.3 Reference Guide](numpy-1.9.3/reference/),[[HTML+zip]](numpy-1.9.3/numpy-html-1.9.3.zip),[[PDF]](numpy-1.9.3/numpy-ref-1.9.3.pdf)[Numpy 1.9.2 Reference Guide](numpy-1.9.2/reference/),[[HTML+zip]](numpy-1.9.2/numpy-html-1.9.2.zip),[[PDF]](numpy-1.9.2/numpy-ref-1.9.2.pdf)[Numpy 1.9.1 Reference Guide](numpy-1.9.1/reference/),[[HTML+zip]](numpy-1.9.1/numpy-html-1.9.1.zip),[[PDF]](numpy-1.9.1/numpy-ref-1.9.1.pdf)[Numpy 1.9.0 Reference Guide](numpy-1.9.0/reference/),[[HTML+zip]](numpy-1.9.0/numpy-html-1.9.0.zip),[[PDF]](numpy-1.9.0/numpy-ref-1.9.0.pdf)[Numpy 1.8.1 Reference Guide](numpy-1.8.1/reference/),[[HTML+zip]](numpy-1.8.1/numpy-html-1.8.1.zip),[[PDF]](numpy-1.8.1/numpy-ref-1.8.1.pdf)[Numpy 1.8.0 Reference Guide](numpy-1.8.0/reference/),[[HTML+zip]](numpy-1.8.0/numpy-html-1.8.0.zip),[[PDF]](numpy-1.8.0/numpy-ref-1.8.0.pdf)[Numpy 1.7.0 Reference Guide](numpy-1.7.0/reference/),[[HTML+zip]](numpy-1.7.0/numpy-html-1.7.0.zip),[[PDF]](numpy-1.7.0/numpy-ref-1.7.0.pdf)[Numpy 1.6 Reference Guide](numpy-1.6.0/reference/),[[HTML+zip]](numpy-1.6.0/numpy-html.zip),[[PDF]](numpy-1.6.0/numpy-ref.pdf)[Numpy 1.5 Reference Guide](numpy-1.5.x/reference/),[[HTML+zip]](numpy-1.5.x/numpy-html.zip),[[PDF]](numpy-1.5.x/numpy-ref.pdf)[Numpy 1.4 Reference Guide](numpy-1.4.x/reference/),[[HTML+zip]](numpy-1.4.x/numpy-html.zip),[[PDF]](numpy-1.4.x/numpy-ref.pdf) -
[Scipy (development version) Reference Guide](scipy-dev/reference/)[SciPy 1.17.0 Documentation](scipy-1.17.0/),[[HTML+zip]](scipy-1.17.0/scipy-html-1.17.0.zip)[SciPy 1.16.2 Documentation](scipy-1.16.2/),[[HTML+zip]](scipy-1.16.2/scipy-html-1.16.2.zip)[SciPy 1.16.1 Documentation](scipy-1.16.1/),[[HTML+zip]](scipy-1.16.1/scipy-html-1.16.1.zip)[SciPy 1.16.0 Documentation](scipy-1.16.0/),[[HTML+zip]](scipy-1.16.0/scipy-html-1.16.0.zip)[SciPy 1.15.3 Documentation](scipy-1.15.3/),[[HTML+zip]](scipy-1.15.3/scipy-html-1.15.3.zip)[SciPy 1.15.2 Documentation](scipy-1.15.2/),[[HTML+zip]](scipy-1.15.2/scipy-html-1.15.2.zip)[SciPy 1.15.1 Documentation](scipy-1.15.1/),[[HTML+zip]](scipy-1.15.1/scipy-html-1.15.1.zip)[SciPy 1.15.0 Documentation](scipy-1.15.0/),[[HTML+zip]](scipy-1.15.0/scipy-html-1.15.0.zip)[SciPy 1.14.1 Documentation](scipy-1.14.1/),[[HTML+zip]](scipy-1.14.1/scipy-html-1.14.1.zip)[SciPy 1.14.0 Documentation](scipy-1.14.0/),[[HTML+zip]](scipy-1.14.0/scipy-html-1.14.0.zip)[SciPy 1.13.1 Documentation](scipy-1.13.1/),[[HTML+zip]](scipy-1.13.1/scipy-html-1.13.1.zip)[SciPy 1.13.0 Documentation](scipy-1.13.0/),[[HTML+zip]](scipy-1.13.0/scipy-html-1.13.0.zip)[SciPy 1.12.0 Documentation](scipy-1.12.0/),[[HTML+zip]](scipy-1.12.0/scipy-html-1.12.0.zip)[SciPy 1.11.4 Documentation](scipy-1.11.4/),[[HTML+zip]](scipy-1.11.4/scipy-html-1.11.4.zip)[SciPy 1.11.3 Documentation](scipy-1.11.3/),[[HTML+zip]](scipy-1.11.3/scipy-html-1.11.3.zip)[SciPy 1.11.2 Documentation](scipy-1.11.2/),[[HTML+zip]](scipy-1.11.2/scipy-html-1.11.2.zip)[SciPy 1.11.1 Documentation](scipy-1.11.1/),[[HTML+zip]](scipy-1.11.1/scipy-html-1.11.1.zip)[SciPy 1.11.0 Documentation](scipy-1.11.0/),[[HTML+zip]](scipy-1.11.0/scipy-html-1.11.0.zip)[SciPy 1.10.1 Documentation](scipy-1.10.1/),[[HTML+zip]](scipy-1.10.1/scipy-html-1.10.1.zip)[SciPy 1.10.0 Documentation](scipy-1.10.0/),[[HTML+zip]](scipy-1.10.0/scipy-html-1.10.0.zip)[SciPy 1.9.3 Documentation](scipy-1.9.3/),[[HTML+zip]](scipy-1.9.3/scipy-html-1.9.3.zip)[SciPy 1.9.2 Documentation](scipy-1.9.2/),[[HTML+zip]](scipy-1.9.2/scipy-html-1.9.2.zip)[SciPy 1.9.1 Documentation](scipy-1.9.1/),[[HTML+zip]](scipy-1.9.1/scipy-html-1.9.1.zip)[SciPy 1.9.0 Documentation](scipy-1.9.0/),[[HTML+zip]](scipy-1.9.0/scipy-html-1.9.0.zip)[SciPy 1.8.1 Documentation](scipy-1.8.1/),[[HTML+zip]](scipy-1.8.1/scipy-html-1.8.1.zip),[[PDF]](scipy-1.8.1/scipy-ref-1.8.1.pdf)[SciPy 1.8.0 Documentation](scipy-1.8.0/),[[HTML+zip]](scipy-1.8.0/scipy-html-1.8.0.zip),[[PDF]](scipy-1.8.0/scipy-ref-1.8.0.pdf)[Scipy 1.7.1 Reference Guide](scipy-1.7.1/reference/),[[HTML+zip]](scipy-1.7.1/scipy-html-1.7.1.zip),[[PDF]](scipy-1.7.1/scipy-ref-1.7.1.pdf)[Scipy 1.7.0 Reference Guide](scipy-1.7.0/reference/),[[HTML+zip]](scipy-1.7.0/scipy-html-1.7.0.zip),[[PDF]](scipy-1.7.0/scipy-ref-1.7.0.pdf)[Scipy 1.6.3 Reference Guide](scipy-1.6.3/reference/),[[HTML+zip]](scipy-1.6.3/scipy-html-1.6.3.zip),[[PDF]](scipy-1.6.3/scipy-ref-1.6.3.pdf)[Scipy 1.6.2 Reference Guide](scipy-1.6.2/reference/),[[HTML+zip]](scipy-1.6.2/scipy-html-1.6.2.zip),[[PDF]](scipy-1.6.2/scipy-ref-1.6.2.pdf)[Scipy 1.6.1 Reference Guide](scipy-1.6.1/reference/),[[HTML+zip]](scipy-1.6.1/scipy-html-1.6.1.zip),[[PDF]](scipy-1.6.1/scipy-ref-1.6.1.pdf)[Scipy 1.6.0 Reference Guide](scipy-1.6.0/reference/),[[HTML+zip]](scipy-1.6.0/scipy-html-1.6.0.zip),[[PDF]](scipy-1.6.0/scipy-ref-1.6.0.pdf)[Scipy 1.5.4 Reference Guide](scipy-1.5.4/reference/),[[HTML+zip]](scipy-1.5.4/scipy-html-1.5.4.zip),[[PDF]](scipy-1.5.4/scipy-ref-1.5.4.pdf)[Scipy 1.5.3 Reference Guide](scipy-1.5.3/reference/),[[HTML+zip]](scipy-1.5.3/scipy-html-1.5.3.zip),[[PDF]](scipy-1.5.3/scipy-ref-1.5.3.pdf)[Scipy 1.5.2 Reference Guide](scipy-1.5.2/reference/),[[HTML+zip]](scipy-1.5.2/scipy-html-1.5.2.zip),[[PDF]](scipy-1.5.2/scipy-ref-1.5.2.pdf)[Scipy 1.5.1 Reference Guide](scipy-1.5.1/reference/),[[HTML+zip]](scipy-1.5.1/scipy-html-1.5.1.zip),[[PDF]](scipy-1.5.1/scipy-ref-1.5.1.pdf)[Scipy 1.5.0 Reference Guide](scipy-1.5.0/reference/),[[HTML+zip]](scipy-1.5.0/scipy-html-1.5.0.zip),[[PDF]](scipy-1.5.0/scipy-ref-1.5.0.pdf)[Scipy 1.4.1 Reference Guide](scipy-1.4.1/reference/),[[HTML+zip]](scipy-1.4.1/scipy-html-1.4.1.zip),[[PDF]](scipy-1.4.1/scipy-ref-1.4.1.pdf)[Scipy 1.4.0 Reference Guide](scipy-1.4.0/reference/),[[HTML+zip]](scipy-1.4.0/scipy-html-1.4.0.zip),[[PDF]](scipy-1.4.0/scipy-ref-1.4.0.pdf)[Scipy 1.3.3 Reference Guide](scipy-1.3.3/reference/),[[HTML+zip]](scipy-1.3.3/scipy-html-1.3.3.zip),[[PDF]](scipy-1.3.3/scipy-ref-1.3.3.pdf)[Scipy 1.3.2 Reference Guide](scipy-1.3.2/reference/),[[HTML+zip]](scipy-1.3.2/scipy-html-1.3.2.zip),[[PDF]](scipy-1.3.2/scipy-ref-1.3.2.pdf)[Scipy 1.3.1 Reference Guide](scipy-1.3.1/reference/),[[HTML+zip]](scipy-1.3.1/scipy-html-1.3.1.zip),[[PDF]](scipy-1.3.1/scipy-ref-1.3.1.pdf)[Scipy 1.3.0 Reference Guide](scipy-1.3.0/reference/),[[HTML+zip]](scipy-1.3.0/scipy-html-1.3.0.zip),[[PDF]](scipy-1.3.0/scipy-ref-1.3.0.pdf)[Scipy 1.2.3 Reference Guide](scipy-1.2.3/reference/),[[HTML+zip]](scipy-1.2.3/scipy-html-1.2.3.zip),[[PDF]](scipy-1.2.3/scipy-ref-1.2.3.pdf)[Scipy 1.2.1 Reference Guide](scipy-1.2.1/reference/),[[HTML+zip]](scipy-1.2.1/scipy-html-1.2.1.zip),[[PDF]](scipy-1.2.1/scipy-ref-1.2.1.pdf)[Scipy 1.2.0 Reference Guide](scipy-1.2.0/reference/),[[HTML+zip]](scipy-1.2.0/scipy-html-1.2.0.zip),[[PDF]](scipy-1.2.0/scipy-ref-1.2.0.pdf)[Scipy 1.1.0 Reference Guide](scipy-1.1.0/reference/),[[HTML+zip]](scipy-1.1.0/scipy-html-1.1.0.zip),[[PDF]](scipy-1.1.0/scipy-ref-1.1.0.pdf)[Scipy 1.0.0 Reference Guide](scipy-1.0.0/reference/),[[HTML+zip]](scipy-1.0.0/scipy-html-1.0.0.zip),[[PDF]](scipy-1.0.0/scipy-ref-1.0.0.pdf)[Scipy 0.19.1 Reference Guide](scipy-0.19.1/reference/),[[HTML+zip]](scipy-0.19.1/scipy-html-0.19.1.zip),[[PDF]](scipy-0.19.1/scipy-ref-0.19.1.pdf)[Scipy 0.19.0 Reference Guide](scipy-0.19.0/reference/),[[HTML+zip]](scipy-0.19.0/scipy-html-0.19.0.zip),[[PDF]](scipy-0.19.0/scipy-ref-0.19.0.pdf)[Scipy 0.18.1 Reference Guide](scipy-0.18.1/reference/),[[HTML+zip]](scipy-0.18.1/scipy-html-0.18.1.zip),[[PDF]](scipy-0.18.1/scipy-ref-0.18.1.pdf)[Scipy 0.18.0 Reference Guide](scipy-0.18.0/reference/),[[HTML+zip]](scipy-0.18.0/scipy-html-0.18.0.zip),[[PDF]](scipy-0.18.0/scipy-ref-0.18.0.pdf)[Scipy 0.17.1 Reference Guide](scipy-0.17.1/reference/),[[HTML+zip]](scipy-0.17.1/scipy-html-0.17.1.zip),[[PDF]](scipy-0.17.1/scipy-ref-0.17.1.pdf)[Scipy 0.17.0 Reference Guide](scipy-0.17.0/reference/),[[HTML+zip]](scipy-0.17.0/scipy-html-0.17.0.zip),[[PDF]](scipy-0.17.0/scipy-ref-0.17.0.pdf)[Scipy 0.16.1 Reference Guide](scipy-0.16.1/reference/),[[HTML+zip]](scipy-0.16.1/scipy-html-0.16.1.zip),[[PDF]](scipy-0.16.1/scipy-ref-0.16.1.pdf)[Scipy 0.16.0 Reference Guide](scipy-0.16.0/reference/),[[HTML+zip]](scipy-0.16.0/scipy-html-0.16.0.zip),[[PDF]](scipy-0.16.0/scipy-ref-0.16.0.pdf)[Scipy 0.15.1 Reference Guide](scipy-0.15.1/reference/),[[HTML+zip]](scipy-0.15.1/scipy-html-0.15.1.zip),[[PDF]](scipy-0.15.1/scipy-ref-0.15.1.pdf)[Scipy 0.15.0 Reference Guide](scipy-0.15.0/reference/),[[HTML+zip]](scipy-0.15.0/scipy-html-0.15.0.zip),[[PDF]](scipy-0.15.0/scipy-ref-0.15.0.pdf)[Scipy 0.14.1 Reference Guide](scipy-0.14.1/reference/),[[HTML+zip]](scipy-0.14.1/scipy-html-0.14.1.zip),[[PDF]](scipy-0.14.1/scipy-ref-0.14.1.pdf)[Scipy 0.14.0 Reference Guide](scipy-0.14.0/reference/),[[HTML+zip]](scipy-0.14.0/scipy-html-0.14.0.zip),[[PDF]](scipy-0.14.0/scipy-ref-0.14.0.pdf)[Scipy 0.13.0 Reference Guide](scipy-0.13.0/reference/),[[HTML+zip]](scipy-0.13.0/scipy-html.zip),[[PDF]](scipy-0.13.0/scipy-ref.pdf)[Scipy 0.12.0 Reference Guide](scipy-0.12.0/reference/),[[HTML+zip]](scipy-0.12.0/scipy-html.zip),[[PDF]](scipy-0.12.0/scipy-ref.pdf)[Scipy 0.11.0 Reference Guide](scipy-0.11.0/reference/),[[HTML+zip]](scipy-0.11.0/scipy-html.zip),[[PDF]](scipy-0.11.0/scipy-ref.pdf)[Scipy 0.10.1 Reference Guide](scipy-0.10.1/reference/),[[HTML+zip]](scipy-0.10.1/scipy-html.zip),[[PDF]](scipy-0.10.1/scipy-ref.pdf)[Scipy 0.10.0 Reference Guide](scipy-0.10.0/reference/),[[HTML+zip]](scipy-0.10.0/scipy-html.zip),[[PDF]](scipy-0.10.0/scipy-ref.pdf)[Scipy 0.9.0 Reference Guide](scipy-0.9.0/reference/),[[HTML+zip]](scipy-0.9.0/scipy-html.zip),[[PDF]](scipy-0.9.0/scipy-ref.pdf)

**Original Numpy documentation:**

|
|