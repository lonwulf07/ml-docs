# Numpy Documentation
> Scraped on: 2026-03-30 | Root Source: [https://numpy.org/doc/stable/](https://numpy.org/doc/stable/)



---

## Source: https://numpy.org/doc/stable/

# NumPy documentation[#](#numpy-documentation)

**Version**: 2.4

**Download documentation**:
[Historical versions of documentation](https://numpy.org/doc/)

**Useful links**:
[Home](https://numpy.org) |
[Installation](https://numpy.org/install/) |
[Source Repository](https://github.com/numpy/numpy) |
[Issue Tracker](https://github.com/numpy/numpy/issues) |
[Q&A Support](https://numpy.org/gethelp/) |
[Mailing List](https://mail.python.org/mailman/listinfo/numpy-discussion)

NumPy is the fundamental package for scientific computing in Python. It is a Python library that provides a multidimensional array object, various derived objects (such as masked arrays and matrices), and an assortment of routines for fast operations on arrays, including mathematical, logical, shape manipulation, sorting, selecting, I/O, discrete Fourier transforms, basic linear algebra, basic statistical operations, random simulation and much more.

Getting started

New to NumPy? Check out the Absolute Beginner’s Guide. It contains an introduction to NumPy’s main concepts and links to additional tutorials.

User guide

The user guide provides in-depth information on the key concepts of NumPy with useful background information and explanation.

API reference

The reference guide contains a detailed description of the functions, modules, and objects included in NumPy. The reference describes how the methods work and which parameters can be used. It assumes that you have an understanding of the key concepts.

Contributor’s guide

Want to add to the codebase? Can help add translation or a flowchart to the documentation? The contributing guidelines will guide you through the process of improving NumPy.

---

## Source: https://numpy.org/doc/stable/user/index.html

NumPy user guide# This guide is an overview and explains the important features; details are found in NumPy reference. Getting started What is NumPy? Installation NumPy quickstart NumPy: the absolute basics for beginners Fundamentals and usage NumPy fundamentals Array creation Indexing on ndarrays I/O with NumPy Data types Broadcasting Copies and views Working with Arrays of Strings And Bytes Structured arrays Universal functions (ufunc) basics NumPy for MATLAB users NumPy tutorials NumPy how-tos Advanced usage and interoperability Using NumPy C-API F2PY user guide and reference manual Under-the-hood documentation for developers Interoperability with NumPy

---

## Source: https://numpy.org/doc/stable/reference/index.html

# NumPy reference[#](#numpy-reference)

- Release:
2.4

- Date:
December 21, 2025


This reference manual details functions, modules, and objects
included in NumPy, describing what they are and what they do.
For learning how to use NumPy, see the [complete documentation](../index.html#numpy-docs-mainpage).

## Python API[#](#python-api)

[Routines and objects by topic](routines.html)[Constants](constants.html)[Array creation routines](routines.array-creation.html)[Array manipulation routines](routines.array-manipulation.html)[Bit-wise operations](routines.bitwise.html)[String functionality](routines.strings.html)[Datetime support functions](routines.datetime.html)[Data type routines](routines.dtype.html)[Mathematical functions with automatic domain](routines.emath.html)[Floating point error handling](routines.err.html)[Exceptions and Warnings](routines.exceptions.html)[Discrete Fourier Transform](routines.fft.html)[Functional programming](routines.functional.html)[Input and output](routines.io.html)[Indexing routines](routines.indexing.html)[Linear algebra](routines.linalg.html)[Logic functions](routines.logic.html)[Masked array operations](routines.ma.html)[Mathematical functions](routines.math.html)[Miscellaneous routines](routines.other.html)[Polynomials](routines.polynomials.html)[Random sampling](random/index.html)[Set routines](routines.set.html)[Sorting, searching, and counting](routines.sort.html)[Statistics](routines.statistics.html)[Test support](routines.testing.html)[Window functions](routines.window.html)


## C API[#](#c-api)

## Other topics[#](#other-topics)

## Acknowledgements[#](#acknowledgements)

Large parts of this manual originate from Travis E. Oliphant’s book
[Guide to NumPy](https://archive.org/details/NumPyBook) (which generously
entered Public Domain in August 2008). The reference documentation for many of
the functions are written by numerous contributors and developers of
NumPy.

---

## Source: https://numpy.org/doc/stable/building/index.html

# Building from source[#](#building-from-source)

Note

If you are only trying to install NumPy, we recommend using binaries - see
[Installation](https://numpy.org/install) for details on that.

Building NumPy from source requires setting up system-level dependencies (compilers, BLAS/LAPACK libraries, etc.) first, and then invoking a build. The build may be done in order to install NumPy for local usage, develop NumPy itself, or build redistributable binary packages. And it may be desired to customize aspects of how the build is done. This guide will cover all these aspects. In addition, it provides background information on how the NumPy build works, and links to up-to-date guides for generic Python build & packaging documentation that is relevant.

## System-level dependencies[#](#system-level-dependencies)

NumPy uses compiled code for speed, which means you need compilers and some other system-level (i.e, non-Python / non-PyPI) dependencies to build it on your system.

Note

If you are using Conda, you can skip the steps in this section - with the
exception of installing compilers for Windows or the Apple Developer Tools
for macOS. All other dependencies will be installed automatically by the
`mamba env create -f environment.yml`

command.

If you want to use the system Python and `pip`

, you will need:

C and C++ compilers (typically GCC).

Python header files (typically a package named

`python3-dev`

or`python3-devel`

)BLAS and LAPACK libraries.

[OpenBLAS](https://github.com/OpenMathLib/OpenBLAS/)is the NumPy default; other variants include Apple Accelerate,[MKL](https://software.intel.com/en-us/intel-mkl),[ATLAS](https://math-atlas.sourceforge.net/)and[Netlib](https://www.netlib.org/lapack/index.html)(or “Reference”) BLAS and LAPACK.`pkg-config`

for dependency detection.A Fortran compiler is needed only for running the

`f2py`

tests. The instructions below include a Fortran compiler, however you can safely leave it out.

To install NumPy build requirements, you can do:

```
sudo apt install -y gcc g++ gfortran libopenblas-dev liblapack-dev pkg-config python3-pip python3-dev
```

Alternatively, you can do:

```
sudo apt build-dep numpy
```

This command installs whatever is needed to build NumPy, with the advantage that new dependencies or updates to required versions are handled by the package managers.

To install NumPy build requirements, you can do:

```
sudo dnf install gcc-gfortran python3-devel openblas-devel lapack-devel pkgconfig
```

Alternatively, you can do:

```
sudo dnf builddep numpy
```

This command installs whatever is needed to build NumPy, with the advantage that new dependencies or updates to required versions are handled by the package managers.

To install NumPy build requirements, you can do:

```
sudo yum install gcc-gfortran python3-devel openblas-devel lapack-devel pkgconfig
```

Alternatively, you can do:

```
sudo yum-builddep numpy
```

This command installs whatever is needed to build NumPy, with the advantage that new dependencies or updates to required versions are handled by the package managers.

To install NumPy build requirements, you can do:

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

On macOS >=13.3, the easiest build option is to use Accelerate, which is already installed and will be automatically used by default.

On older macOS versions you need a different BLAS library, most likely
OpenBLAS, plus pkg-config to detect OpenBLAS. These are easiest to install
with [Homebrew](https://brew.sh/):

```
brew install openblas pkg-config gfortran
```

On Windows, the use of a Fortran compiler is more tricky than on other
platforms, because MSVC does not support Fortran, and gfortran and MSVC
can’t be used together. If you don’t need to run the `f2py`

tests, simply
using MSVC is easiest. Otherwise, you will need one of these sets of
compilers:

MSVC + Intel Fortran (

`ifort`

)Intel compilers (

`icc`

,`ifort`

)Mingw-w64 compilers (

`gcc`

,`g++`

,`gfortran`

)

Compared to macOS and Linux, building NumPy on Windows is a little more difficult, due to the need to set up these compilers. It is not possible to just call a one-liner on the command prompt as you would on other platforms.

First, install Microsoft Visual Studio - the 2019 Community Edition or any
newer version will work (see the
[Visual Studio download site](https://visualstudio.microsoft.com/downloads/)).
This is needed even if you use the MinGW-w64 or Intel compilers, in order
to ensure you have the Windows Universal C Runtime (the other components of
Visual Studio are not needed when using Mingw-w64, and can be deselected if
desired, to save disk space). The recommended version of the UCRT is
>= 10.0.22621.0.

The MSVC installer does not put the compilers on the system path, and
the install location may change. To query the install location, MSVC
comes with a `vswhere.exe`

command-line utility. And to make the
C/C++ compilers available inside the shell you are using, you need to
run a `.bat`

file for the correct bitness and architecture (e.g., for
64-bit Intel CPUs, use `vcvars64.bat`

).

If using a Conda environment while a version of Visual Studio 2019+ is installed that includes the MSVC v142 package (VS 2019 C++ x86/x64 build tools), activating the conda environment should cause Visual Studio to be found and the appropriate .bat file executed to set these variables.

For detailed guidance, see [Use the Microsoft C++ toolset from the command line](https://learn.microsoft.com/en-us/cpp/build/building-on-the-command-line?view=msvc-170).

Similar to MSVC, the Intel compilers are designed to be used with an
activation script (`Intel\oneAPI\setvars.bat`

) that you run in the
shell you are using. This makes the compilers available on the path.
For detailed guidance, see
[Get Started with the Intel® oneAPI HPC Toolkit for Windows](https://www.intel.com/content/www/us/en/docs/oneapi-hpc-toolkit/get-started-guide-windows/2023-1/overview.html).

There are several sources of binaries for MinGW-w64. We recommend the
RTools versions, which can be installed with Chocolatey (see
Chocolatey install instructions [here](https://chocolatey.org/install)):

```
choco install rtools -y --no-progress --force --version=4.0.0.20220206
```

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

In Windows on ARM64, the set of a compiler options that are available for
building NumPy are limited. Compilers such as GCC and GFortran are not yet
supported for Windows on ARM64. Currently, the NumPy build for Windows on ARM64
is supported with MSVC and LLVM toolchains. The use of a Fortran compiler is
more tricky than on other platforms, because MSVC does not support Fortran, and
gfortran and MSVC can’t be used together. If you don’t need to run the `f2py`

tests, simply using MSVC is easiest. Otherwise, you will need the following
set of compilers:

MSVC + flang (

`cl`

,`flang`

)LLVM + flang (

`clang-cl`

,`flang`

)

First, install Microsoft Visual Studio - the 2022 Community Edition will
work (see the [Visual Studio download site](https://visualstudio.microsoft.com/downloads/)).
Ensure that you have installed necessary Visual Studio components for building NumPy
on WoA from [here](https://gist.github.com/Mugundanmcw/c3bb93018d5da9311fb2b222f205ba19).

To use the flang compiler for Windows on ARM64, install Latest LLVM
toolchain for WoA from [here](https://github.com/llvm/llvm-project/releases).

The MSVC installer does not put the compilers on the system path, and
the install location may change. To query the install location, MSVC
comes with a `vswhere.exe`

command-line utility. And to make the
C/C++ compilers available inside the shell you are using, you need to
run a `.bat`

file for the correct bitness and architecture (e.g., for
ARM64-based CPUs, use `vcvarsarm64.bat`

).

For detailed guidance, see [Use the Microsoft C++ toolset from the command line](https://learn.microsoft.com/en-us/cpp/build/building-on-the-command-line?view=msvc-170).

Similar to MSVC, LLVM does not put the compilers on the system path.
To set system path for LLVM compilers, users may need to use `set`

command to put compilers on the system path. To check compiler’s path
for LLVM’s clang-cl, try invoking LLVM’s clang-cl compiler in the shell you use
(`clang-cl --version`

).

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
flang
--version
```

).

Warning

Currently, Conda environment is not yet supported officially on [Windows
on ARM64](https://github.com/conda-forge/conda-forge.github.io/issues/1940).
The present approach uses virtualenv for building NumPy from source on
Windows on ARM64.

## Building NumPy from source[#](#building-numpy-from-source)

If you want to only install NumPy from source once and not do any development
work, then the recommended way to build and install is to use `pip`

.
Otherwise, conda is recommended.

Note

If you don’t have a conda installation yet, we recommend using
[Miniforge](https://github.com/conda-forge/miniforge); any conda flavor will work though.

### Building from source to use NumPy[#](#building-from-source-to-use-numpy)

If you are using a conda environment, `pip`

is still the tool you use to
invoke a from-source build of NumPy. It is important to always use the
`--no-build-isolation`

flag to the `pip install`

command, to avoid
building against a `numpy`

wheel from PyPI. In order for that to work you
must first install the remaining build dependencies into the conda
environment:

```
# Either install all NumPy dev dependencies into a fresh conda environment
mamba env create -f environment.yml
# Or, install only the required build dependencies
mamba install python numpy cython compilers openblas meson-python pkg-config
# To build the latest stable release:
pip install numpy --no-build-isolation --no-binary numpy
# To build a development version, you need a local clone of the NumPy git repository:
git clone https://github.com/numpy/numpy.git
cd numpy
git submodule update --init
pip install . --no-build-isolation
```

Warning

On Windows, the AR, LD, and LDFLAGS environment variables may be set, which will cause the pip install command to fail. These variables are only needed for flang and can be safely unset prior to running pip install.

```
# To build the latest stable release:
pip install numpy --no-binary numpy
# To build a development version, you need a local clone of the NumPy git repository:
git clone https://github.com/numpy/numpy.git
cd numpy
git submodule update --init
pip install .
```

### Building from source for NumPy development[#](#building-from-source-for-numpy-development)

If you want to build from source in order to work on NumPy itself, first clone the NumPy repository:

```
git clone https://github.com/numpy/numpy.git
cd numpy
git submodule update --init
```

Then you want to do the following:

Create a dedicated development environment (virtual environment or conda environment),

Install all needed dependencies (

*build*, and also*test*,*doc*and*optional*dependencies),Build NumPy with the

`spin`

developer interface.

Step (3) is always the same, steps (1) and (2) are different between conda and virtual environments:

To create a `numpy-dev`

development environment with every required and
optional dependency installed, run:

```
mamba env create -f environment.yml
mamba activate numpy-dev
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
.\venv\Scripts\activate
```

```
python -m venv venv
.\venv\Scripts\activate
```

Note

Building NumPy with BLAS and LAPACK functions requires OpenBLAS
library at Runtime. In Windows on ARM64, this can be done by setting
up pkg-config for OpenBLAS dependency. The build steps for OpenBLAS
for Windows on ARM64 can be found [here](http://www.openmathlib.org/OpenBLAS/docs/install/#windows-on-arm).

Then install the Python-level dependencies from PyPI with:

```
python -m pip install -r requirements/build_requirements.txt
```

To build NumPy in an activated development environment, run:

```
spin build
```

This will install NumPy inside the repository (by default in a
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

Warning

In an activated conda environment on Windows, the AR, LD, and LDFLAGS environment variables may be set, which will cause the build to fail. These variables are only needed for flang and can be safely unset for build.

IDE support & editable installs

While the `spin`

interface is our recommended way of working on NumPy,
it has one limitation: because of the custom install location, NumPy
installed using `spin`

will not be recognized automatically within an
IDE (e.g., for running a script via a “run” button, or setting breakpoints
visually). This will work better with an *in-place build* (or “editable
install”).

Editable installs are supported. It is important to understand that **you
may use either an editable install or** `spin`

**in a given repository clone,
but not both**. If you use editable installs, you have to use `pytest`

and other development tools directly instead of using `spin`

.

To use an editable install, ensure you start from a clean repository (run
`git clean -xdf`

if you’ve built with `spin`

before) and have all
dependencies set up correctly as described higher up on this page. Then
do:

```
# Note: the --no-build-isolation is important!
pip install -e . --no-build-isolation
# To run the tests for, e.g., the `numpy.linalg` module:
pytest numpy/linalg
```

When making changes to NumPy code, including to compiled code, there is no
need to manually rebuild or reinstall. NumPy is automatically rebuilt each
time NumPy is imported by the Python interpreter; see the [meson-python](https://mesonbuild.com/meson-python/)
documentation on editable installs for more details on how that works under
the hood.

When you run `git clean -xdf`

, which removes the built extension modules,
remember to also uninstall NumPy with `pip uninstall numpy`

.

Warning

Note that editable installs are fundamentally incomplete installs.
Their only guarantee is that `import numpy`

works - so they are
suitable for working on NumPy itself, and for working on pure Python
packages that depend on NumPy. Headers, entrypoints, and other such
things may not be available from an editable install.

---

## Source: https://numpy.org/doc/stable/dev/index.html

# Contributing to NumPy[#](#contributing-to-numpy)

Not a coder? Not a problem! NumPy is multi-faceted, and we can use a lot of help. These are all activities we’d like to get help with (they’re all important, so we list them in alphabetical order):

Code maintenance and development

Community coordination

DevOps

Developing educational content & narrative documentation

Fundraising

Marketing

Project management

Translating content

Website design and development

Writing technical documentation


We understand that everyone has a different level of experience,
also NumPy is a pretty well-established project, so it’s hard to
make assumptions about an ideal “first-time-contributor”.
So, that’s why we don’t mark issues with the “good-first-issue”
label. Instead, you’ll find [issues labeled “Sprintable”](https://github.com/numpy/numpy/labels/sprintable).
These issues can either be:

**Easily fixed**when you have guidance from an experienced contributor (perfect for working in a sprint).**A learning opportunity**for those ready to dive deeper, even if you’re not in a sprint.

Additionally, depending on your prior experience, some “Sprintable” issues might be easy, while others could be more challenging for you.

The rest of this document discusses working on the NumPy code base and documentation.
We’re in the process of updating our descriptions of other activities and roles.
If you are interested in these other activities, please contact us!
You can do this via
the [numpy-discussion mailing list](https://mail.python.org/mailman/listinfo/numpy-discussion),
or on [GitHub](https://github.com/numpy/numpy) (open an issue or comment on a
relevant issue). These are our preferred communication channels (open source is open
by nature!), however if you prefer to discuss in a more private space first,
you can do so on Slack (see [numpy.org/contribute](https://numpy.org/contribute/) for details).

## Development process - summary[#](#development-process-summary)

Here’s the short summary, complete TOC links are below:

If you are a first-time contributor:

Go to

[numpy/numpy](https://github.com/numpy/numpy)and click the “fork” button to create your own copy of the project.Clone the project to your local computer:

git clone --recurse-submodules https://github.com/your-username/numpy.git

Change the directory:

cd numpy

Add the upstream repository:

git remote add upstream https://github.com/numpy/numpy.git

Now,

`git remote -v`

will show two remote repositories named:`upstream`

, which refers to the`numpy`

repository`origin`

, which refers to your personal fork

Pull the latest changes from upstream, including tags:

git checkout main git pull upstream main --tags

Initialize numpy’s submodules:

git submodule update --init


Develop your contribution:

Create a branch for the feature you want to work on. Since the branch name will appear in the merge message, use a sensible name such as ‘linspace-speedups’:

git checkout -b linspace-speedups

Commit locally as you progress (

`git add`

and`git commit`

) Use a[properly formatted](development_workflow.html#writing-the-commit-message)commit message, write tests that fail before your change and pass afterward, run all the[tests locally](development_environment.html#development-environment). Be sure to document any changed behavior in docstrings, keeping to the NumPy docstring[standard](howto-docs.html#howto-document).

To submit your contribution:

Push your changes back to your fork on GitHub:

git push origin linspace-speedups

Go to GitHub. The new branch will show up with a green Pull Request button. Make sure the title and message are clear, concise, and self- explanatory. Then click the button to submit it.

If your commit introduces a new feature or changes functionality, post on the

[mailing list](https://mail.python.org/mailman/listinfo/numpy-discussion)to explain your changes. For bug fixes, documentation updates, etc., this is generally not necessary, though if you do not get any reaction, do feel free to ask for review.

Review process:

Reviewers (the other developers and interested community members) will write inline and/or general comments on your Pull Request (PR) to help you improve its implementation, documentation and style. Every single developer working on the project has their code reviewed, and we’ve come to see it as friendly conversation from which we all learn and the overall code quality benefits. Therefore, please don’t let the review discourage you from contributing: its only aim is to improve the quality of project, not to criticize (we are, after all, very grateful for the time you’re donating!). See our

[Reviewer Guidelines](reviewer_guidelines.html#reviewer-guidelines)for more information.To update your PR, make your changes on your local repository, commit,

**run tests, and only if they succeed**push to your fork. As soon as those changes are pushed up (to the same branch as before) the PR will update automatically. If you have no idea how to fix the test failures, you may push your changes anyway and ask for help in a PR comment.Various continuous integration (CI) services are triggered after each PR update to build the code, run unit tests, measure code coverage and check coding style of your branch. The CI tests must pass before your PR can be merged. If CI fails, you can find out why by clicking on the “failed” icon (red cross) and inspecting the build and test log. To avoid overuse and waste of this resource,

[test your work](development_environment.html#recommended-development-setup)locally before committing.A PR must be

**approved**by at least one core team member before merging. Approval means the core team member has carefully reviewed the changes, and the PR is ready for merging.

Document changes

Beyond changes to a functions docstring and possible description in the general documentation, if your change introduces any user-facing modifications they may need to be mentioned in the release notes. To add your change to the release notes, you need to create a short file with a summary and place it in

`doc/release/upcoming_changes`

. The file`doc/release/upcoming_changes/README.rst`

details the format and filename conventions.If your change introduces a deprecation, make sure to discuss this first on GitHub or the mailing list first. If agreement on the deprecation is reached, follow

[NEP 23 deprecation policy](https://numpy.org/neps/nep-0023-backwards-compatibility.html#nep23)to add the deprecation.Cross referencing issues

If the PR relates to any issues, you can add the text

`xref gh-xxxx`

where`xxxx`

is the number of the issue to github comments. Likewise, if the PR solves an issue, replace the`xref`

with`closes`

,`fixes`

or any of the other flavors[github accepts](https://help.github.com/en/articles/closing-issues-using-keywords).In the source code, be sure to preface any issue or PR reference with

`gh-xxxx`

.

For a more detailed discussion, read on and follow the links at the bottom of this page.

### Guidelines[#](#guidelines)

All code should have tests (see

[test coverage](#test-coverage)below for more details).All code should be

[documented](https://numpydoc.readthedocs.io/en/latest/format.html#docstring-standard).No changes are ever committed without review and approval by a core team member. Please ask politely on the PR or on the

[mailing list](https://mail.python.org/mailman/listinfo/numpy-discussion)if you get no response to your pull request within a week.

### Stylistic guidelines[#](#stylistic-guidelines)

### Test coverage[#](#test-coverage)

Pull requests (PRs) that modify code should either have new tests, or modify existing
tests to fail before the PR and pass afterwards. You should [run the tests](development_environment.html#development-environment) before pushing a PR.

Running NumPy’s test suite locally requires some additional packages, such as
`pytest`

and `hypothesis`

. The additional testing dependencies are listed
in `requirements/test_requirements.txt`

in the top-level directory, and can
conveniently be installed with:

```
$ python -m pip install -r requirements/test_requirements.txt
```

Tests for a module should ideally cover all code in that module, i.e., statement coverage should be at 100%.

To measure the test coverage, run:

```
$ spin test --coverage
```

This will create a report in `html`

format at `build/coverage`

, which can be
viewed with your browser, e.g.:

```
$ firefox build/coverage/index.html
```

### Building docs[#](#building-docs)

To build the HTML documentation, use:

```
spin docs
```

You can also run `make`

from the `doc`

directory. `make help`

lists
all targets.

To get the appropriate dependencies and other requirements,
see [Building the NumPy API and reference docs](howto_build_docs.html#howto-build-docs).

## Development process - details[#](#development-process-details)

The rest of the story

[Setting up and using your development environment](development_environment.html)[Building the NumPy API and reference docs](howto_build_docs.html)[Development workflow](development_workflow.html)[Advanced debugging tools](development_advanced_debugging.html)[Using GitHub Codespaces for NumPy development](development_ghcodespaces.html)[Reviewer guidelines](reviewer_guidelines.html)[NumPy benchmarks](../benchmarking.html)[NumPy C style guide](https://numpy.org/neps/nep-0045-c_style_guide.html)[For downstream package authors](depending_on_numpy.html)[Releasing a version](releasing.html)[NumPy governance](governance/index.html)[How to contribute to the NumPy documentation](howto-docs.html)

NumPy-specific workflow is in [numpy-development-workflow](development_workflow.html#development-workflow).

---

## Source: https://numpy.org/doc/stable/release.html

# Release notes[#](#release-notes)

[2.4.0](release/2.4.0-notes.html)[2.3.5](release/2.3.5-notes.html)[2.3.4](release/2.3.4-notes.html)[2.3.3](release/2.3.3-notes.html)[2.3.2](release/2.3.2-notes.html)[2.3.1](release/2.3.1-notes.html)[2.3.0](release/2.3.0-notes.html)[2.2.6](release/2.2.6-notes.html)[2.2.5](release/2.2.5-notes.html)[2.2.4](release/2.2.4-notes.html)[2.2.3](release/2.2.3-notes.html)[2.2.2](release/2.2.2-notes.html)[2.2.1](release/2.2.1-notes.html)[2.2.0](release/2.2.0-notes.html)[2.1.3](release/2.1.3-notes.html)[2.1.2](release/2.1.2-notes.html)[2.1.1](release/2.1.1-notes.html)[2.1.0](release/2.1.0-notes.html)[2.0.2](release/2.0.2-notes.html)[2.0.1](release/2.0.1-notes.html)[2.0.0](release/2.0.0-notes.html)[1.26.4](release/1.26.4-notes.html)[1.26.3](release/1.26.3-notes.html)[1.26.2](release/1.26.2-notes.html)[1.26.1](release/1.26.1-notes.html)[1.26.0](release/1.26.0-notes.html)[1.25.2](release/1.25.2-notes.html)[1.25.1](release/1.25.1-notes.html)[1.25.0](release/1.25.0-notes.html)[1.24.4](release/1.24.4-notes.html)[1.24.3](release/1.24.3-notes.html)[1.24.2](release/1.24.2-notes.html)[1.24.1](release/1.24.1-notes.html)[1.24.0](release/1.24.0-notes.html)[1.23.5](release/1.23.5-notes.html)[1.23.4](release/1.23.4-notes.html)[1.23.3](release/1.23.3-notes.html)[1.23.2](release/1.23.2-notes.html)[1.23.1](release/1.23.1-notes.html)[1.23.0](release/1.23.0-notes.html)[1.22.4](release/1.22.4-notes.html)[1.22.3](release/1.22.3-notes.html)[1.22.2](release/1.22.2-notes.html)[1.22.1](release/1.22.1-notes.html)[1.22.0](release/1.22.0-notes.html)[1.21.6](release/1.21.6-notes.html)[1.21.5](release/1.21.5-notes.html)[1.21.4](release/1.21.4-notes.html)[1.21.3](release/1.21.3-notes.html)[1.21.2](release/1.21.2-notes.html)[1.21.1](release/1.21.1-notes.html)[1.21.0](release/1.21.0-notes.html)[1.20.3](release/1.20.3-notes.html)[1.20.2](release/1.20.2-notes.html)[1.20.1](release/1.20.1-notes.html)[1.20.0](release/1.20.0-notes.html)[1.19.5](release/1.19.5-notes.html)[1.19.4](release/1.19.4-notes.html)[1.19.3](release/1.19.3-notes.html)[1.19.2](release/1.19.2-notes.html)[1.19.1](release/1.19.1-notes.html)[1.19.0](release/1.19.0-notes.html)[1.18.5](release/1.18.5-notes.html)[1.18.4](release/1.18.4-notes.html)[1.18.3](release/1.18.3-notes.html)[1.18.2](release/1.18.2-notes.html)[1.18.1](release/1.18.1-notes.html)[1.18.0](release/1.18.0-notes.html)[1.17.5](release/1.17.5-notes.html)[1.17.4](release/1.17.4-notes.html)[1.17.3](release/1.17.3-notes.html)[1.17.2](release/1.17.2-notes.html)[1.17.1](release/1.17.1-notes.html)[1.17.0](release/1.17.0-notes.html)[1.16.6](release/1.16.6-notes.html)[1.16.5](release/1.16.5-notes.html)[1.16.4](release/1.16.4-notes.html)[1.16.3](release/1.16.3-notes.html)[1.16.2](release/1.16.2-notes.html)[1.16.1](release/1.16.1-notes.html)[1.16.0](release/1.16.0-notes.html)[1.15.4](release/1.15.4-notes.html)[1.15.3](release/1.15.3-notes.html)[1.15.2](release/1.15.2-notes.html)[1.15.1](release/1.15.1-notes.html)[1.15.0](release/1.15.0-notes.html)[1.14.6](release/1.14.6-notes.html)[1.14.5](release/1.14.5-notes.html)[1.14.4](release/1.14.4-notes.html)[1.14.3](release/1.14.3-notes.html)[1.14.2](release/1.14.2-notes.html)[1.14.1](release/1.14.1-notes.html)[1.14.0](release/1.14.0-notes.html)[1.13.3](release/1.13.3-notes.html)[1.13.2](release/1.13.2-notes.html)[1.13.1](release/1.13.1-notes.html)[1.13.0](release/1.13.0-notes.html)[1.12.1](release/1.12.1-notes.html)[1.12.0](release/1.12.0-notes.html)[1.11.3](release/1.11.3-notes.html)[1.11.2](release/1.11.2-notes.html)[1.11.1](release/1.11.1-notes.html)[1.11.0](release/1.11.0-notes.html)[1.10.4](release/1.10.4-notes.html)[1.10.3](release/1.10.3-notes.html)[1.10.2](release/1.10.2-notes.html)[1.10.1](release/1.10.1-notes.html)[1.10.0](release/1.10.0-notes.html)[1.9.2](release/1.9.2-notes.html)[1.9.1](release/1.9.1-notes.html)[1.9.0](release/1.9.0-notes.html)[1.8.2](release/1.8.2-notes.html)[1.8.1](release/1.8.1-notes.html)[1.8.0](release/1.8.0-notes.html)[1.7.2](release/1.7.2-notes.html)[1.7.1](release/1.7.1-notes.html)[1.7.0](release/1.7.0-notes.html)[1.6.2](release/1.6.2-notes.html)[1.6.1](release/1.6.1-notes.html)[1.6.0](release/1.6.0-notes.html)[1.5.0](release/1.5.0-notes.html)[1.4.0](release/1.4.0-notes.html)[1.3.0](release/1.3.0-notes.html)

---

## Source: https://numpy.org/numpy-tutorials/

This set of tutorials and educational materials is being developed in the
[numpy-tutorials](https://github.com/numpy/numpy-tutorials) repository, and is
not a part of the NumPy source tree. The goal of this repository is to provide
high-quality resources by the NumPy project, both for self-learning and for
teaching classes with. If you’re interested in adding your own content, check
the [Contributing](/numpy-tutorials/contributing) section.

To open a live version of the content, click the **launch Binder** button above.
To open each of the `.md`

files, right click and select “Open with -> Notebook”.
You can also launch individual tutorials on Binder by clicking on the rocket
icon that appears in the upper-right corner of each tutorial. To download a
local copy of the `.ipynb`

files, you can either
[clone this repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
or use the download icon in the upper-right corner of each tutorial.

## Useful links and resources[¶](#useful-links-and-resources)

The following links may be useful:

Note that regular documentation issues for NumPy can be found in the [main NumPy
repository](https://github.com/numpy/numpy/issues) (see the `Documentation`

labels there).

---

## Source: https://numpy.org/neps

# Roadmap & NumPy enhancement proposals[#](#roadmap-numpy-enhancement-proposals)

This page provides an overview of development priorities for NumPy.
Specifically, it contains a roadmap with a higher-level overview, as
well as NumPy Enhancement Proposals (NEPs)—suggested changes
to the library—in various stages of discussion or completion.
See [NEP 0 — Purpose and process](nep-0000.html) for more informations about NEPs.

## Roadmap[#](#roadmap)

## NumPy enhancement proposals (NEPs)[#](#numpy-enhancement-proposals-neps)

[Meta-NEPs (NEPs about NEPs or active Processes)](meta.html)[Provisional NEPs (provisionally accepted; interface may change)](provisional.html)[Accepted NEPs (implementation in progress)](accepted.html)[Open NEPs (under consideration)](open.html)[Finished NEPs](finished.html)[NEP 1 — A simple file format for NumPy arrays](nep-0001-npy-format.html)[NEP 5 — Generalized universal functions](nep-0005-generalized-ufuncs.html)[NEP 7 — A proposal for implementing some date/time types in NumPy](nep-0007-datetime-proposal.html)[NEP 10 — Optimizing iterator/UFunc performance](nep-0010-new-iterator-ufunc.html)[NEP 13 — A mechanism for overriding Ufuncs](nep-0013-ufunc-overrides.html)[NEP 14 — Plan for dropping Python 2.7 support](nep-0014-dropping-python2.7-proposal.html)[NEP 15 — Merging multiarray and umath](nep-0015-merge-multiarray-umath.html)[NEP 18 — A dispatch mechanism for NumPy's high level array functions](nep-0018-array-function-protocol.html)[NEP 19 — Random number generator policy](nep-0019-rng-policy.html)[NEP 20 — Expansion of generalized universal function signatures](nep-0020-gufunc-signature-enhancement.html)[NEP 22 — Duck typing for NumPy arrays – high level overview](nep-0022-ndarray-duck-typing-overview.html)[NEP 27 — Zero rank arrays](nep-0027-zero-rank-arrarys.html)[NEP 28 — numpy.org website redesign](nep-0028-website-redesign.html)[NEP 29 — Recommend Python and NumPy version support as a community policy standard](nep-0029-deprecation_policy.html)[NEP 32 — Remove the financial functions from NumPy](nep-0032-remove-financial-functions.html)[NEP 34 — Disallow inferring ``dtype=object`` from sequences](nep-0034-infer-dtype-is-object.html)[NEP 35 — Array creation dispatching with __array_function__](nep-0035-array-creation-dispatch-with-array-function.html)[NEP 38 — Using SIMD optimization instructions for performance](nep-0038-SIMD-optimizations.html)[NEP 40 — Legacy datatype implementation in NumPy](nep-0040-legacy-datatype-impl.html)[NEP 49 — Data allocation strategies](nep-0049-data-allocation-strategies.html)[NEP 50 — Promotion rules for Python scalars](nep-0050-scalar-promotion.html)[NEP 52 — Python API cleanup for NumPy 2.0](nep-0052-python-api-cleanup.html)[NEP 55 — Add a UTF-8 variable-width string DType to NumPy](nep-0055-string_dtype.html)[NEP 56 — Array API standard support in NumPy's main namespace](nep-0056-array-api-main-namespace.html)

[Deferred and Superseded NEPs](deferred.html)[NEP 2 — A proposal to build numpy without warning with a big set of warning flags](nep-0002-warnfix.html)[NEP 3 — Cleaning the math configuration of numpy.core](nep-0003-math_config_clean.html)[NEP 4 — A (third) proposal for implementing some date/time types in NumPy](nep-0004-datetime-proposal3.html)[NEP 6 — Replacing Trac with a different bug tracker](nep-0006-newbugtracker.html)[NEP 8 — A proposal for adding groupby functionality to NumPy](nep-0008-groupby_additions.html)[NEP 9 — Structured array extensions](nep-0009-structured_array_extensions.html)[NEP 11 — Deferred UFunc evaluation](nep-0011-deferred-ufunc-evaluation.html)[NEP 12 — Missing data functionality in NumPy](nep-0012-missing-data.html)[NEP 21 — Simplified and explicit advanced indexing](nep-0021-advanced-indexing.html)[NEP 24 — Missing data functionality - alternative 1 to NEP 12](nep-0024-missing-data-2.html)[NEP 25 — NA support via special dtypes](nep-0025-missing-data-3.html)[NEP 26 — Summary of missing data NEPs and discussion](nep-0026-missing-data-summary.html)[NEP 30 — Duck typing for NumPy arrays - implementation](nep-0030-duck-array-protocol.html)[NEP 31 — Context-local and global overrides of the NumPy API](nep-0031-uarray.html)[NEP 37 — A dispatch protocol for NumPy-like modules](nep-0037-array-module.html)[NEP 47 — Adopting the array API standard](nep-0047-array-api-standard.html)

[Rejected and Withdrawn NEPs](rejected.html)

---

## Source: https://numpy.org/doc/

# NumPy Documentation

Versions:

-
[NumPy 2.4 Manual](2.4)

[[HTML+zip]](2.4/numpy-html.zip)[[Reference Guide PDF]](2.4/numpy-ref.pdf)[[User Guide PDF]](2.4/numpy-user.pdf) -
[NumPy 2.3 Manual](2.3)

[[HTML+zip]](2.3/numpy-html.zip)[[Reference Guide PDF]](2.3/numpy-ref.pdf)[[User Guide PDF]](2.3/numpy-user.pdf) -
[NumPy 2.2 Manual](2.2)

[[HTML+zip]](2.2/numpy-html.zip)[[Reference Guide PDF]](2.2/numpy-ref.pdf)[[User Guide PDF]](2.2/numpy-user.pdf) -
[NumPy 2.1 Manual](2.1)

[[HTML+zip]](2.1/numpy-html.zip)[[Reference Guide PDF]](2.1/numpy-ref.pdf)[[User Guide PDF]](2.1/numpy-user.pdf) -
[NumPy 2.0 Manual](2.0)

[[HTML+zip]](2.0/numpy-html.zip)[[Reference Guide PDF]](2.0/numpy-ref.pdf)[[User Guide PDF]](2.0/numpy-user.pdf) -
[NumPy 1.23 Manual](1.23)

[[HTML+zip]](1.23/numpy-html.zip)[[Reference Guide PDF]](1.23/numpy-ref.pdf)[[User Guide PDF]](1.23/numpy-user.pdf) -
[NumPy 1.22 Manual](1.22)

[[HTML+zip]](1.22/numpy-html.zip)[[Reference Guide PDF]](1.22/numpy-ref.pdf)[[User Guide PDF]](1.22/numpy-user.pdf) -
[NumPy 1.21 Manual](1.21)

[[HTML+zip]](1.21/numpy-html.zip)[[Reference Guide PDF]](1.21/numpy-ref.pdf)[[User Guide PDF]](1.21/numpy-user.pdf) -
[NumPy 1.20 Manual](1.20)

[[HTML+zip]](1.20/numpy-html.zip)[[Reference Guide PDF]](1.20/numpy-ref.pdf)[[User Guide PDF]](1.20/numpy-user.pdf) -
[NumPy 1.19 Manual](1.19)

[[HTML+zip]](1.19/numpy-html.zip)[[Reference Guide PDF]](1.19/numpy-ref.pdf)[[User Guide PDF]](1.19/numpy-user.pdf) -
[NumPy 1.18 Manual](1.18)

[[HTML+zip]](1.18/numpy-html.zip)[[Reference Guide PDF]](1.18/numpy-ref.pdf)[[User Guide PDF]](1.18/numpy-user.pdf) -
[NumPy 1.17 Manual](1.17)

[[HTML+zip]](1.17/numpy-html.zip)[[Reference Guide PDF]](1.17/numpy-ref.pdf)[[User Guide PDF]](1.17/numpy-user.pdf) -
[NumPy 1.16 Manual](1.16)

[[HTML+zip]](1.16/numpy-html.zip)[[Reference Guide PDF]](1.16/numpy-ref.pdf)[[User Guide PDF]](1.16/numpy-user.pdf) -
[NumPy 1.15 Manual](1.15)

[[HTML+zip]](_downloads/numpy-html-1.15.4.zip)[[Reference Guide PDF]](_downloads/numpy-ref-1.15.4.pdf)[[User Guide PDF]](_downloads/numpy-user-1.15.4.pdf) -
[NumPy 1.14 Manual](1.14)

[[HTML+zip]](_downloads/numpy-html-1.14.5.zip)[[Reference Guide PDF]](_downloads/numpy-ref-1.14.5.pdf)[[User Guide PDF]](_downloads/numpy-user-1.14.5.pdf) -
[NumPy 1.13 Manual](1.13)

[[HTML+zip]](_downloads/numpy-html-1.13.0.zip)[[Reference Guide PDF]](_downloads/numpy-ref-1.13.0.pdf)[[User Guide PDF]](_downloads/numpy-user-1.13.0.pdf)

---

## Source: https://numpy.org

```
"""
To try the examples in the browser:
1. Type code in the input cell and press
Shift + Enter to execute
2. Or copy paste the code, and click on
the "Run" button in the toolbar
"""
# The standard way to import NumPy:
import numpy as np
# Create a 2-D array, set every second element in
# some rows and find max per row:
x = np.arange(15, dtype=np.int64).reshape(3, 5)
x[1:, ::2] = -99
x
# array([[ 0, 1, 2, 3, 4],
# [-99, 6, -99, 8, -99],
# [-99, 11, -99, 13, -99]])
x.max(axis=1)
# array([ 4, 8, 13])
# Generate normally distributed random numbers:
rng = np.random.default_rng()
samples = rng.normal(size=2500)
samples
```


Nearly every scientist working in Python draws on the power of NumPy.

NumPy brings the computational power of languages like C and Fortran to Python, a language much easier to learn and use. With this power comes simplicity: a solution in NumPy is often clear and elegant.

NumPy's API is the starting point when libraries are written to exploit innovative hardware, create specialized array types, or add capabilities beyond what NumPy provides.

| Array Library | Capabilities & Application areas | |
|

NumPy lies at the core of a rich ecosystem of data science libraries. A typical exploratory data science workflow might look like:

NumPy forms the basis of powerful machine learning libraries like [scikit-learn](https://scikit-learn.org) and [SciPy](https://scipy.org). As machine learning grows, so does the list of libraries built on NumPy. [TensorFlow’s](https://www.tensorflow.org) deep learning capabilities have broad applications — among them speech and image recognition, text-based applications, time-series analysis, and video detection. [PyTorch](https://pytorch.org), another deep learning library, is popular among researchers in computer vision and natural language processing.

Statistical techniques called [ensemble methods](https://scikit-learn.org/stable/modules/ensemble.html) such as binning, bagging, stacking, and boosting are among the ML algorithms implemented by tools such as [XGBoost](https://xgboost.readthedocs.io/), [LightGBM](https://lightgbm.readthedocs.io/en/latest/), and [CatBoost](https://catboost.ai) — one of the fastest inference engines. [Yellowbrick](https://www.scikit-yb.org/en/latest/) and [Eli5](https://eli5.readthedocs.io/en/latest/) offer machine learning visualizations.

NumPy is an essential component in the burgeoning [Python visualization landscape](https://pyviz.org/overviews/index.html), which includes [Matplotlib](https://matplotlib.org), [Seaborn](https://seaborn.pydata.org), [Plotly](https://plot.ly), [Altair](https://altair-viz.github.io), [Bokeh](https://docs.bokeh.org/en/latest/), [Holoviz](https://holoviz.org), [Vispy](http://vispy.org), [Napari](https://napari.org/), and [PyVista](https://docs.pyvista.org/), to name a few.

NumPy’s accelerated processing of large arrays allows researchers to visualize datasets far larger than native Python could handle.

---

## Source: https://numpy.org/install/

This page assumes you are comfortable using a terminal and are familiar with package managers.
The only prerequisite for installing NumPy is Python itself. If you don’t have
Python yet and want the simplest way to get started, we recommend you use the
[Anaconda Distribution](https://www.anaconda.com/download) - it includes
Python, NumPy, and many other commonly used packages for scientific computing
and data science.

The recommended method of installing NumPy depends on your preferred workflow. Below, we break down the installation methods into the following categories:

Choose the method that best suits your needs. If you’re unsure, start with the **Environment-based** method using `conda`

or `pip`

.

Below are the different methods for **installing NumPy**. Click on the tabs to explore each method:

Recommended for new users who want a streamlined workflow.

**uv:** A modern Python package manager designed for speed and simplicity.

`uv pip install numpy`


**pixi:** A cross-platform package manager for Python and other languages.

`pixi add numpy`


The two main tools that install Python packages are `pip`

and `conda`

. Their functionality partially overlaps (e.g. both can install `numpy`

), however, they can also work together. We’ll discuss the major differences between pip and conda here - this is important to understand if you want to manage packages effectively.

The first difference is that conda is cross-language and it can install Python, while pip is installed for a particular Python on your system and installs other packages to that same Python install only. This also means conda can install non-Python libraries and tools you may need (e.g. compilers, CUDA, HDF5), while pip can’t.

The second difference is that pip installs from the Python Packaging Index (PyPI), while conda installs from its own channels (typically “defaults” or “conda-forge”). PyPI is the largest collection of packages by far, however, all popular packages are available for conda as well.

The third difference is that conda is an integrated solution for managing packages, dependencies and environments, while with pip you may need another tool (there are many!) for dealing with environments or complex dependencies.

```
conda create -n my-env
conda activate my-env
conda install numpy
```


`pip install numpy`


**Tip:** Use a virtual environment for better dependency management

```
python -m venv my-env
source my-env/bin/activate # macOS/Linux
my-env\Scripts\activate # Windows
pip install numpy
```


Not recommended for most users, but available for convenience.

**macOS (Homebrew):**

`brew install numpy`


**Linux (APT):**

`sudo apt install python3-numpy`


**Windows (Chocolatey):**

`choco install numpy`


For advanced users and developers who want to customize or debug **NumPy**.

A word of warning: building Numpy from source can be a nontrivial exercise.
We recommend using binaries instead if those are available for your platform via one of the above methods.
For details on how to build from source, see [the building from source guide in the Numpy docs](https://numpy.org/devdocs/building/).

After installing NumPy, verify the installation by running the following in a Python shell or script:

```
import numpy as np
print(np.__version__)
```


This should print the installed version of NumPy without errors.

If your installation fails with the message below, see [Troubleshooting
ImportError](https://numpy.org/doc/stable/user/troubleshooting-importerror.html).

```
IMPORTANT: PLEASE READ THIS FOR ADVICE ON HOW TO SOLVE THIS ISSUE!
Importing the numpy c-extensions failed. This error can happen for
different reasons, often due to issues with your setup.
```

---

## Source: https://numpy.org/gethelp/

**Development issues:** For NumPy development-related matters (e.g., bug reports), please
see [Community](/community/).

**User questions:** The best way to get help is to post your question to a site
like [StackOverflow](http://stackoverflow.com/questions/tagged/numpy) or
[Reddit](https://www.reddit.com/r/Numpy/). We wish we could keep an eye on
these sites, or answer questions directly, but the volume is a little
overwhelming!

A forum for asking usage questions, e.g. “How do I do X in NumPy?”. Please [use the #numpy tag](https://stackoverflow.com/help/tagging)

Another forum for usage questions.

---

## Source: https://numpy.org/doc/stable/user/absolute_beginners.html

# NumPy: the absolute basics for beginners[#](#numpy-the-absolute-basics-for-beginners)

Welcome to the absolute beginner’s guide to NumPy!

NumPy (**Num**erical **Py**thon) is an open source Python library that’s
widely used in science and engineering. The NumPy library contains
multidimensional array data structures, such as the homogeneous, N-dimensional
`ndarray`

, and a large library of functions that operate efficiently on these
data structures. Learn more about NumPy at [What is NumPy](whatisnumpy.html#whatisnumpy),
and if you have comments or suggestions, please
[reach out](https://numpy.org/community/)!

## How to import NumPy[#](#how-to-import-numpy)

After [installing NumPy](https://numpy.org/install/), it may be imported
into Python code like:

```
import numpy as np
```

This widespread convention allows access to NumPy features with a short,
recognizable prefix (`np.`

) while distinguishing NumPy features from others
that have the same name.

## Reading the example code[#](#reading-the-example-code)

Throughout the NumPy documentation, you will find blocks that look like:

```
>>> a = np.array([[1, 2, 3],
... [4, 5, 6]])
>>> a.shape
(2, 3)
```

Text preceded by `>>>`

or `...`

is **input**, the code that you would
enter in a script or at a Python prompt. Everything else is **output**, the
results of running your code. Note that `>>>`

and `...`

are not part of the
code and may cause an error if entered at a Python prompt.

To run the code in the examples, you can copy and paste it into a Python script or REPL, or use the experimental interactive examples in the browser provided in various locations in the documentation.

## Why use NumPy?[#](#why-use-numpy)

Python lists are excellent, general-purpose containers. They can be “heterogeneous”, meaning that they can contain elements of a variety of types, and they are quite fast when used to perform individual operations on a handful of elements.

Depending on the characteristics of the data and the types of operations that need to be performed, other containers may be more appropriate; by exploiting these characteristics, we can improve speed, reduce memory consumption, and offer a high-level syntax for performing a variety of common processing tasks. NumPy shines when there are large quantities of “homogeneous” (same-type) data to be processed on the CPU.

## What is an “array”?[#](#what-is-an-array)

In computer programming, an array is a structure for storing and retrieving data. We often talk about an array as if it were a grid in space, with each cell storing one element of the data. For instance, if each element of the data were a number, we might visualize a “one-dimensional” array like a list:

A two-dimensional array would be like a table:

A three-dimensional array would be like a set of tables, perhaps stacked
as though they were printed on separate pages. In NumPy, this idea is
generalized to an arbitrary number of dimensions, and so the fundamental
array class is called `ndarray`

: it represents an “N-dimensional
array”.

Most NumPy arrays have some restrictions. For instance:

All elements of the array must be of the same type of data.

Once created, the total size of the array can’t change.

The shape must be “rectangular”, not “jagged”; e.g., each row of a two-dimensional array must have the same number of columns.


When these conditions are met, NumPy exploits these characteristics to make the array faster, more memory efficient, and more convenient to use than less restrictive data structures.

For the remainder of this document, we will use the word “array” to refer to
an instance of `ndarray`

.

## Array fundamentals[#](#array-fundamentals)

One way to initialize an array is using a Python sequence, such as a list. For example:

```
>>> a = np.array([1, 2, 3, 4, 5, 6])
>>> a
array([1, 2, 3, 4, 5, 6])
```

Elements of an array can be accessed in [various ways](quickstart.html#quickstart-indexing-slicing-and-iterating). For instance, we can access an
individual element of this array as we would access an element in the original
list: using the integer index of the element within square brackets.

```
>>> a[0]
1
```

Note

As with built-in Python sequences, NumPy arrays are “0-indexed”: the first
element of the array is accessed using index `0`

, not `1`

.

Like the original list, the array is mutable.

```
>>> a[0] = 10
>>> a
array([10, 2, 3, 4, 5, 6])
```

Also like the original list, Python slice notation can be used for indexing.

```
>>> a[:3]
array([10, 2, 3])
```

One major difference is that slice indexing of a list copies the elements into
a new list, but slicing an array returns a *view*: an object that refers to the
data in the original array. The original array can be mutated using the view.

```
>>> b = a[3:]
>>> b
array([4, 5, 6])
>>> b[0] = 40
>>> a
array([ 10, 2, 3, 40, 5, 6])
```

See [Copies and views](basics.copies.html#basics-copies-and-views) for a more comprehensive explanation of when
array operations return views rather than copies.

Two- and higher-dimensional arrays can be initialized from nested Python sequences:

```
>>> a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
>>> a
array([[ 1, 2, 3, 4],
[ 5, 6, 7, 8],
[ 9, 10, 11, 12]])
```

In NumPy, a dimension of an array is sometimes referred to as an “axis”. This
terminology may be useful to disambiguate between the dimensionality of an
array and the dimensionality of the data represented by the array. For
instance, the array `a`

could represent three points, each lying within a
four-dimensional space, but `a`

has only two “axes”.

Another difference between an array and a list of lists is that an
element of the array can be accessed by specifying the index along each
axis within a *single* set of square brackets, separated by commas.
For instance, the element `8`

is in row `1`

and column `3`

:

```
>>> a[1, 3]
8
```

Note

It is familiar practice in mathematics to refer to elements of a matrix
by the row index first and the column index second. This happens to be true
for two-dimensional arrays, but a better mental model is to think of
the column index as coming *last* and the row index as *second to last*.
This generalizes to arrays with *any* number of dimensions.

Note

You might hear of a 0-D (zero-dimensional) array referred to as a “scalar”, a 1-D (one-dimensional) array as a “vector”, a 2-D (two-dimensional) array as a “matrix”, or an N-D (N-dimensional, where “N” is typically an integer greater than 2) array as a “tensor”. For clarity, it is best to avoid the mathematical terms when referring to an array because the mathematical objects with these names behave differently than arrays (e.g. “matrix” multiplication is fundamentally different from “array” multiplication), and there are other objects in the scientific Python ecosystem that have these names (e.g. the fundamental data structure of PyTorch is the “tensor”).

## Array attributes[#](#array-attributes)

*This section covers the* `ndim`

, `shape`

, `size`

, *and* `dtype`

*attributes of an array*.

The number of dimensions of an array is contained in the `ndim`

attribute.

```
>>> a.ndim
2
```

The shape of an array is a tuple of non-negative integers that specify the number of elements along each dimension.

```
>>> a.shape
(3, 4)
>>> len(a.shape) == a.ndim
True
```

The fixed, total number of elements in array is contained in the `size`

attribute.

```
>>> a.size
12
>>> import math
>>> a.size == math.prod(a.shape)
True
```

Arrays are typically “homogeneous”, meaning that they contain elements of
only one “data type”. The data type is recorded in the `dtype`

attribute.

```
>>> a.dtype
dtype('int64') # "int" for integer, "64" for 64-bit
```

[Read more about array attributes here](../reference/arrays.ndarray.html#arrays-ndarray) and learn about
[array objects here](../reference/arrays.html#arrays).

## How to create a basic array[#](#how-to-create-a-basic-array)

*This section covers* `np.zeros()`

, `np.ones()`

,
`np.empty()`

, `np.arange()`

, `np.linspace()`


Besides creating an array from a sequence of elements, you can easily create an
array filled with `0`

’s:

```
>>> np.zeros(2)
array([0., 0.])
```

Or an array filled with `1`

’s:

```
>>> np.ones(2)
array([1., 1.])
```

Or even an empty array! The function `empty`

creates an array whose initial
content is random and depends on the state of the memory. The reason to use
`empty`

over `zeros`

(or something similar) is speed - just make sure to
fill every element afterwards!

```
>>> # Create an empty array with 2 elements
>>> np.empty(2)
array([3.14, 42. ]) # may vary
```

You can create an array with a range of elements:

```
>>> np.arange(4)
array([0, 1, 2, 3])
```

And even an array that contains a range of evenly spaced intervals. To do this,
you will specify the **first number**, **last number**, and the **step size**.

```
>>> np.arange(2, 9, 2)
array([2, 4, 6, 8])
```

You can also use `np.linspace()`

to create an array with values that are
spaced linearly in a specified interval:

```
>>> np.linspace(0, 10, num=5)
array([ 0. , 2.5, 5. , 7.5, 10. ])
```

**Specifying your data type**

While the default data type is floating point (`np.float64`

), you can explicitly
specify which data type you want using the `dtype`

keyword.

```
>>> x = np.ones(2, dtype=np.int64)
>>> x
array([1, 1])
```

## Adding, removing, and sorting elements[#](#adding-removing-and-sorting-elements)

*This section covers* `np.sort()`

, `np.concatenate()`


Sorting an array is simple with `np.sort()`

. You can specify the axis, kind,
and order when you call the function.

If you start with this array:

```
>>> arr = np.array([2, 1, 5, 3, 7, 4, 6, 8])
```

You can quickly sort the numbers in ascending order with:

```
>>> np.sort(arr)
array([1, 2, 3, 4, 5, 6, 7, 8])
```

In addition to sort, which returns a sorted copy of an array, you can use:

, which is an indirect sort along a specified axis,`argsort`

, which is an indirect stable sort on multiple keys,`lexsort`

, which will find elements in a sorted array, and`searchsorted`

, which is a partial sort.`partition`


To read more about sorting an array, see: [ sort](../reference/generated/numpy.sort.html#numpy.sort).

If you start with these arrays:

```
>>> a = np.array([1, 2, 3, 4])
>>> b = np.array([5, 6, 7, 8])
```

You can concatenate them with `np.concatenate()`

.

```
>>> np.concatenate((a, b))
array([1, 2, 3, 4, 5, 6, 7, 8])
```

Or, if you start with these arrays:

```
>>> x = np.array([[1, 2], [3, 4]])
>>> y = np.array([[5, 6]])
```

You can concatenate them with:

```
>>> np.concatenate((x, y), axis=0)
array([[1, 2],
[3, 4],
[5, 6]])
```

In order to remove elements from an array, it’s simple to use indexing to select the elements that you want to keep.

To read more about concatenate, see: [ concatenate](../reference/generated/numpy.concatenate.html#numpy.concatenate).

## How do you know the shape and size of an array?[#](#how-do-you-know-the-shape-and-size-of-an-array)

*This section covers* `ndarray.ndim`

, `ndarray.size`

, `ndarray.shape`


`ndarray.ndim`

will tell you the number of axes, or dimensions, of the array.

`ndarray.size`

will tell you the total number of elements of the array. This
is the *product* of the elements of the array’s shape.

`ndarray.shape`

will display a tuple of integers that indicate the number of
elements stored along each dimension of the array. If, for example, you have a
2-D array with 2 rows and 3 columns, the shape of your array is `(2, 3)`

.

For example, if you create this array:

```
>>> array_example = np.array([[[0, 1, 2, 3],
... [4, 5, 6, 7]],
...
... [[0, 1, 2, 3],
... [4, 5, 6, 7]],
...
... [[0 ,1 ,2, 3],
... [4, 5, 6, 7]]])
```

To find the number of dimensions of the array, run:

```
>>> array_example.ndim
3
```

To find the total number of elements in the array, run:

```
>>> array_example.size
24
```

And to find the shape of your array, run:

```
>>> array_example.shape
(3, 2, 4)
```

## Can you reshape an array?[#](#can-you-reshape-an-array)

*This section covers* `arr.reshape()`


**Yes!**

Using `arr.reshape()`

will give a new shape to an array without changing the
data. Just remember that when you use the reshape method, the array you want to
produce needs to have the same number of elements as the original array. If you
start with an array with 12 elements, you’ll need to make sure that your new
array also has a total of 12 elements.

If you start with this array:

```
>>> a = np.arange(6)
>>> print(a)
[0 1 2 3 4 5]
```

You can use `reshape()`

to reshape your array. For example, you can reshape
this array to an array with three rows and two columns:

```
>>> b = a.reshape(3, 2)
>>> print(b)
[[0 1]
[2 3]
[4 5]]
```

With `np.reshape`

, you can specify a few optional parameters:

```
>>> np.reshape(a, shape=(1, 6), order='C')
array([[0, 1, 2, 3, 4, 5]])
```

`a`

is the array to be reshaped.

`shape`

is the new shape you want. You can specify an integer or a tuple of
integers. If you specify an integer, the result will be an array of that length.
The shape should be compatible with the original shape.

`order:`

`C`

means to read/write the elements using C-like index order,
`F`

means to read/write the elements using Fortran-like index order, `A`

means to read/write the elements in Fortran-like index order if a is Fortran
contiguous in memory, C-like order otherwise. (This is an optional parameter and
doesn’t need to be specified.)

If you want to learn more about C and Fortran order, you can
[read more about the internal organization of NumPy arrays here](../dev/internals.html#numpy-internals).
Essentially, C and Fortran orders have to do with how indices correspond
to the order the array is stored in memory. In Fortran, when moving through
the elements of a two-dimensional array as it is stored in memory, the **first**
index is the most rapidly varying index. As the first index moves to the next
row as it changes, the matrix is stored one column at a time.
This is why Fortran is thought of as a **Column-major language**.
In C on the other hand, the **last** index changes
the most rapidly. The matrix is stored by rows, making it a **Row-major
language**. What you do for C or Fortran depends on whether it’s more important
to preserve the indexing convention or not reorder the data.

## How to convert a 1D array into a 2D array (how to add a new axis to an array)[#](#how-to-convert-a-1d-array-into-a-2d-array-how-to-add-a-new-axis-to-an-array)

*This section covers* `np.newaxis`

, `np.expand_dims`


You can use `np.newaxis`

and `np.expand_dims`

to increase the dimensions of
your existing array.

Using `np.newaxis`

will increase the dimensions of your array by one dimension
when used once. This means that a **1D** array will become a **2D** array, a
**2D** array will become a **3D** array, and so on.

For example, if you start with this array:

```
>>> a = np.array([1, 2, 3, 4, 5, 6])
>>> a.shape
(6,)
```

You can use `np.newaxis`

to add a new axis:

```
>>> a2 = a[np.newaxis, :]
>>> a2.shape
(1, 6)
```

You can explicitly convert a 1D array to either a row vector or a column
vector using `np.newaxis`

. For example, you can convert a 1D array to a row
vector by inserting an axis along the first dimension:

```
>>> row_vector = a[np.newaxis, :]
>>> row_vector.shape
(1, 6)
```

Or, for a column vector, you can insert an axis along the second dimension:

```
>>> col_vector = a[:, np.newaxis]
>>> col_vector.shape
(6, 1)
```

You can also expand an array by inserting a new axis at a specified position
with `np.expand_dims`

.

For example, if you start with this array:

```
>>> a = np.array([1, 2, 3, 4, 5, 6])
>>> a.shape
(6,)
```

You can use `np.expand_dims`

to add an axis at index position 1 with:

```
>>> b = np.expand_dims(a, axis=1)
>>> b.shape
(6, 1)
```

You can add an axis at index position 0 with:

```
>>> c = np.expand_dims(a, axis=0)
>>> c.shape
(1, 6)
```

Find more information about [newaxis here](../reference/routines.indexing.html#arrays-indexing) and
`expand_dims`

at [ expand_dims](../reference/generated/numpy.expand_dims.html#numpy.expand_dims).

## Indexing and slicing[#](#indexing-and-slicing)

You can index and slice NumPy arrays in the same ways you can slice Python lists.

```
>>> data = np.array([1, 2, 3])
>>> data[1]
2
>>> data[0:2]
array([1, 2])
>>> data[1:]
array([2, 3])
>>> data[-2:]
array([2, 3])
```

You can visualize it this way:

You may want to take a section of your array or specific array elements to use in further analysis or additional operations. To do that, you’ll need to subset, slice, and/or index your arrays.

If you want to select values from your array that fulfill certain conditions, it’s straightforward with NumPy.

For example, if you start with this array:

```
>>> a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

You can easily print all of the values in the array that are less than 5.

```
>>> print(a[a < 5])
[1 2 3 4]
```

You can also select, for example, numbers that are equal to or greater than 5, and use that condition to index an array.

```
>>> five_up = (a >= 5)
>>> print(a[five_up])
[ 5 6 7 8 9 10 11 12]
```

You can select elements that are divisible by 2:

```
>>> divisible_by_2 = a[a%2==0]
>>> print(divisible_by_2)
[ 2 4 6 8 10 12]
```

Or you can select elements that satisfy two conditions using the `&`

and `|`

operators:

```
>>> c = a[(a > 2) & (a < 11)]
>>> print(c)
[ 3 4 5 6 7 8 9 10]
```

You can also make use of the logical operators **&** and **|** in order to
return boolean values that specify whether or not the values in an array fulfill
a certain condition. This can be useful with arrays that contain names or other
categorical values.

```
>>> five_up = (a > 5) | (a == 5)
>>> print(five_up)
[[False False False False]
[ True True True True]
[ True True True True]]
```

You can also use `np.nonzero()`

to select elements or indices from an array.

Starting with this array:

```
>>> a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

You can use `np.nonzero()`

to print the indices of elements that are, for
example, less than 5:

```
>>> b = np.nonzero(a < 5)
>>> print(b)
(array([0, 0, 0, 0]), array([0, 1, 2, 3]))
```

In this example, a tuple of arrays was returned: one for each dimension. The first array represents the row indices where these values are found, and the second array represents the column indices where the values are found.

If you want to generate a list of coordinates where the elements exist, you can zip the arrays, iterate over the list of coordinates, and print them. For example:

```
>>> list_of_coordinates= list(zip(b[0], b[1]))
>>> for coord in list_of_coordinates:
... print(coord)
(np.int64(0), np.int64(0))
(np.int64(0), np.int64(1))
(np.int64(0), np.int64(2))
(np.int64(0), np.int64(3))
```

You can also use `np.nonzero()`

to print the elements in an array that are less
than 5 with:

```
>>> print(a[b])
[1 2 3 4]
```

If the element you’re looking for doesn’t exist in the array, then the returned array of indices will be empty. For example:

```
>>> not_there = np.nonzero(a == 42)
>>> print(not_there)
(array([], dtype=int64), array([], dtype=int64))
```

Learn more about [indexing and slicing here](quickstart.html#quickstart-indexing-slicing-and-iterating)
and [here](basics.indexing.html#basics-indexing).

Read more about using the nonzero function at: [ nonzero](../reference/generated/numpy.nonzero.html#numpy.nonzero).

## How to create an array from existing data[#](#how-to-create-an-array-from-existing-data)

*This section covers* `slicing and indexing`

, `np.vstack()`

, `np.hstack()`

,
`np.hsplit()`

, `.view()`

, `copy()`


You can easily create a new array from a section of an existing array.

Let’s say you have this array:

```
>>> a = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
```

You can create a new array from a section of your array any time by specifying where you want to slice your array.

```
>>> arr1 = a[3:8]
>>> arr1
array([4, 5, 6, 7, 8])
```

Here, you grabbed a section of your array from index position 3 through index position 8 but not including position 8 itself.

*Reminder: Array indexes begin at 0. This means the first element of the array is at index 0,
the second element is at index 1, and so on.*

You can also stack two existing arrays, both vertically and horizontally. Let’s
say you have two arrays, `a1`

and `a2`

:

```
>>> a1 = np.array([[1, 1],
... [2, 2]])
>>> a2 = np.array([[3, 3],
... [4, 4]])
```

You can stack them vertically with `vstack`

:

```
>>> np.vstack((a1, a2))
array([[1, 1],
[2, 2],
[3, 3],
[4, 4]])
```

Or stack them horizontally with `hstack`

:

```
>>> np.hstack((a1, a2))
array([[1, 1, 3, 3],
[2, 2, 4, 4]])
```

You can split an array into several smaller arrays using `hsplit`

. You can
specify either the number of equally shaped arrays to return or the columns
*after* which the division should occur.

Let’s say you have this array:

```
>>> x = np.arange(1, 25).reshape(2, 12)
>>> x
array([[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]])
```

If you wanted to split this array into three equally shaped arrays, you would run:

```
>>> np.hsplit(x, 3)
[array([[ 1, 2, 3, 4],
[13, 14, 15, 16]]), array([[ 5, 6, 7, 8],
[17, 18, 19, 20]]), array([[ 9, 10, 11, 12],
[21, 22, 23, 24]])]
```

If you wanted to split your array after the third and fourth column, you’d run:

```
>>> np.hsplit(x, (3, 4))
[array([[ 1, 2, 3],
[13, 14, 15]]), array([[ 4],
[16]]), array([[ 5, 6, 7, 8, 9, 10, 11, 12],
[17, 18, 19, 20, 21, 22, 23, 24]])]
```

[Learn more about stacking and splitting arrays here](quickstart.html#quickstart-stacking-arrays).

You can use the `view`

method to create a new array object that looks at the
same data as the original array (a *shallow copy*).

Views are an important NumPy concept! NumPy functions, as well as operations like indexing and slicing, will return views whenever possible. This saves memory and is faster (no copy of the data has to be made). However it’s important to be aware of this - modifying data in a view also modifies the original array!

Let’s say you create this array:

```
>>> a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

Now we create an array `b1`

by slicing `a`

and modify the first element of
`b1`

. This will modify the corresponding element in `a`

as well!

```
>>> b1 = a[0, :]
>>> b1
array([1, 2, 3, 4])
>>> b1[0] = 99
>>> b1
array([99, 2, 3, 4])
>>> a
array([[99, 2, 3, 4],
[ 5, 6, 7, 8],
[ 9, 10, 11, 12]])
```

Using the `copy`

method will make a complete copy of the array and its data (a
*deep copy*). To use this on your array, you could run:

```
>>> b2 = a.copy()
```

## Basic array operations[#](#basic-array-operations)

*This section covers addition, subtraction, multiplication, division, and more*

Once you’ve created your arrays, you can start to work with them. Let’s say, for example, that you’ve created two arrays, one called “data” and one called “ones”

You can add the arrays together with the plus sign.

```
>>> data = np.array([1, 2])
>>> ones = np.ones(2, dtype=int)
>>> data + ones
array([2, 3])
```

You can, of course, do more than just addition!

```
>>> data - ones
array([0, 1])
>>> data * data
array([1, 4])
>>> data / data
array([1., 1.])
```

Basic operations are simple with NumPy. If you want to find the sum of the
elements in an array, you’d use `sum()`

. This works for 1D arrays, 2D arrays,
and arrays in higher dimensions.

```
>>> a = np.array([1, 2, 3, 4])
>>> a.sum()
10
```

To add the rows or the columns in a 2D array, you would specify the axis.

If you start with this array:

```
>>> b = np.array([[1, 1], [2, 2]])
```

You can sum over the axis of rows with:

```
>>> b.sum(axis=0)
array([3, 3])
```

You can sum over the axis of columns with:

```
>>> b.sum(axis=1)
array([2, 4])
```

## Broadcasting[#](#broadcasting)

There are times when you might want to carry out an operation between an array
and a single number (also called *an operation between a vector and a scalar*)
or between arrays of two different sizes. For example, your array (we’ll call it
“data”) might contain information about distance in miles but you want to
convert the information to kilometers. You can perform this operation with:

```
>>> data = np.array([1.0, 2.0])
>>> data * 1.6
array([1.6, 3.2])
```

NumPy understands that the multiplication should happen with each cell. That
concept is called **broadcasting**. Broadcasting is a mechanism that allows
NumPy to perform operations on arrays of different shapes. The dimensions of
your array must be compatible, for example, when the dimensions of both arrays
are equal or when one of them is 1. If the dimensions are not compatible, you
will get a `ValueError`

.

## More useful array operations[#](#more-useful-array-operations)

*This section covers maximum, minimum, sum, mean, product, standard deviation, and more*

NumPy also performs aggregation functions. In addition to `min`

, `max`

, and
`sum`

, you can easily run `mean`

to get the average, `prod`

to get the
result of multiplying the elements together, `std`

to get the standard
deviation, and more.

```
>>> data = np.array([1, 2, 3])
>>> data.max()
3
>>> data.min()
1
>>> data.sum()
6
```

Let’s start with this array, called “a”

```
>>> a = np.array([[0.45053314, 0.17296777, 0.34376245, 0.5510652],
... [0.54627315, 0.05093587, 0.40067661, 0.55645993],
... [0.12697628, 0.82485143, 0.26590556, 0.56917101]])
```

It’s very common to want to aggregate along a row or column. By default, every NumPy aggregation function will return the aggregate of the entire array. To find the sum or the minimum of the elements in your array, run:

```
>>> a.sum()
4.8595784
```

Or:

```
>>> a.min()
0.05093587
```

You can specify on which axis you want the aggregation function to be computed.
For example, you can find the minimum value within each column by specifying
`axis=0`

.

```
>>> a.min(axis=0)
array([0.12697628, 0.05093587, 0.26590556, 0.5510652 ])
```

The four values listed above correspond to the number of columns in your array. With a four-column array, you will get four values as your result.

Read more about [array methods here](../reference/arrays.ndarray.html#array-ndarray-methods).

## Creating matrices[#](#creating-matrices)

You can pass Python lists of lists to create a 2-D array (or “matrix”) to represent them in NumPy.

```
>>> data = np.array([[1, 2], [3, 4], [5, 6]])
>>> data
array([[1, 2],
[3, 4],
[5, 6]])
```

Indexing and slicing operations are useful when you’re manipulating matrices:

```
>>> data[0, 1]
2
>>> data[1:3]
array([[3, 4],
[5, 6]])
>>> data[0:2, 0]
array([1, 3])
```

You can aggregate matrices the same way you aggregated vectors:

```
>>> data.max()
6
>>> data.min()
1
>>> data.sum()
21
```

You can aggregate all the values in a matrix and you can aggregate them across
columns or rows using the `axis`

parameter. To illustrate this point, let’s
look at a slightly modified dataset:

```
>>> data = np.array([[1, 2], [5, 3], [4, 6]])
>>> data
array([[1, 2],
[5, 3],
[4, 6]])
>>> data.max(axis=0)
array([5, 6])
>>> data.max(axis=1)
array([2, 5, 6])
```

Once you’ve created your matrices, you can add and multiply them using arithmetic operators if you have two matrices that are the same size.

```
>>> data = np.array([[1, 2], [3, 4]])
>>> ones = np.array([[1, 1], [1, 1]])
>>> data + ones
array([[2, 3],
[4, 5]])
```

You can do these arithmetic operations on matrices of different sizes, but only if one matrix has only one column or one row. In this case, NumPy will use its broadcast rules for the operation.

```
>>> data = np.array([[1, 2], [3, 4], [5, 6]])
>>> ones_row = np.array([[1, 1]])
>>> data + ones_row
array([[2, 3],
[4, 5],
[6, 7]])
```

Be aware that when NumPy prints N-dimensional arrays, the last axis is looped over the fastest while the first axis is the slowest. For instance:

```
>>> np.ones((4, 3, 2))
array([[[1., 1.],
[1., 1.],
[1., 1.]],
[[1., 1.],
[1., 1.],
[1., 1.]],
[[1., 1.],
[1., 1.],
[1., 1.]],
[[1., 1.],
[1., 1.],
[1., 1.]]])
```

There are often instances where we want NumPy to initialize the values of an
array. NumPy offers functions like `ones()`

and `zeros()`

, and the
`random.Generator`

class for random number generation for that.
All you need to do is pass in the number of elements you want it to generate:

```
>>> np.ones(3)
array([1., 1., 1.])
>>> np.zeros(3)
array([0., 0., 0.])
>>> rng = np.random.default_rng() # the simplest way to generate random numbers
>>> rng.random(3)
array([0.63696169, 0.26978671, 0.04097352])
```

You can also use `ones()`

, `zeros()`

, and `random()`

to create
a 2D array if you give them a tuple describing the dimensions of the matrix:

```
>>> np.ones((3, 2))
array([[1., 1.],
[1., 1.],
[1., 1.]])
>>> np.zeros((3, 2))
array([[0., 0.],
[0., 0.],
[0., 0.]])
>>> rng.random((3, 2))
array([[0.01652764, 0.81327024],
[0.91275558, 0.60663578],
[0.72949656, 0.54362499]]) # may vary
```

Read more about creating arrays, filled with `0`

’s, `1`

’s, other values or
uninitialized, at [array creation routines](../reference/routines.array-creation.html#routines-array-creation).

## Generating random numbers[#](#generating-random-numbers)

The use of random number generation is an important part of the configuration and evaluation of many numerical and machine learning algorithms. Whether you need to randomly initialize weights in an artificial neural network, split data into random sets, or randomly shuffle your dataset, being able to generate random numbers (actually, repeatable pseudo-random numbers) is essential.

With `Generator.integers`

, you can generate random integers from low (remember
that this is inclusive with NumPy) to high (exclusive). You can set
`endpoint=True`

to make the high number inclusive.

You can generate a 2 x 4 array of random integers between 0 and 4 with:

```
>>> rng.integers(5, size=(2, 4))
array([[2, 1, 1, 0],
[0, 0, 0, 4]]) # may vary
```

## How to get unique items and counts[#](#how-to-get-unique-items-and-counts)

*This section covers* `np.unique()`


You can find the unique elements in an array easily with `np.unique`

.

For example, if you start with this array:

```
>>> a = np.array([11, 11, 12, 13, 14, 15, 16, 17, 12, 13, 11, 14, 18, 19, 20])
```

you can use `np.unique`

to print the unique values in your array:

```
>>> unique_values = np.unique(a)
>>> print(unique_values)
[11 12 13 14 15 16 17 18 19 20]
```

To get the indices of unique values in a NumPy array (an array of first index
positions of unique values in the array), just pass the `return_index`

argument in `np.unique()`

as well as your array.

```
>>> unique_values, indices_list = np.unique(a, return_index=True)
>>> print(indices_list)
[ 0 2 3 4 5 6 7 12 13 14]
```

You can pass the `return_counts`

argument in `np.unique()`

along with your
array to get the frequency count of unique values in a NumPy array.

```
>>> unique_values, occurrence_count = np.unique(a, return_counts=True)
>>> print(occurrence_count)
[3 2 2 2 1 1 1 1 1 1]
```

This also works with 2D arrays! If you start with this array:

```
>>> a_2d = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [1, 2, 3, 4]])
```

You can find unique values with:

```
>>> unique_values = np.unique(a_2d)
>>> print(unique_values)
[ 1 2 3 4 5 6 7 8 9 10 11 12]
```

If the axis argument isn’t passed, your 2D array will be flattened.

If you want to get the unique rows or columns, make sure to pass the `axis`

argument. To find the unique rows, specify `axis=0`

and for columns, specify
`axis=1`

.

```
>>> unique_rows = np.unique(a_2d, axis=0)
>>> print(unique_rows)
[[ 1 2 3 4]
[ 5 6 7 8]
[ 9 10 11 12]]
```

To get the unique rows, index position, and occurrence count, you can use:

```
>>> unique_rows, indices, occurrence_count = np.unique(
... a_2d, axis=0, return_counts=True, return_index=True)
>>> print(unique_rows)
[[ 1 2 3 4]
[ 5 6 7 8]
[ 9 10 11 12]]
>>> print(indices)
[0 1 2]
>>> print(occurrence_count)
[2 1 1]
```

To learn more about finding the unique elements in an array, see [ unique](../reference/generated/numpy.unique.html#numpy.unique).

## Transposing and reshaping a matrix[#](#transposing-and-reshaping-a-matrix)

*This section covers* `arr.reshape()`

, `arr.transpose()`

, `arr.T`


It’s common to need to transpose your matrices. NumPy arrays have the property
`T`

that allows you to transpose a matrix.

You may also need to switch the dimensions of a matrix. This can happen when,
for example, you have a model that expects a certain input shape that is
different from your dataset. This is where the `reshape`

method can be useful.
You simply need to pass in the new dimensions that you want for the matrix.

```
>>> data.reshape(2, 3)
array([[1, 2, 3],
[4, 5, 6]])
>>> data.reshape(3, 2)
array([[1, 2],
[3, 4],
[5, 6]])
```

You can also use `.transpose()`

to reverse or change the axes of an array
according to the values you specify.

If you start with this array:

```
>>> arr = np.arange(6).reshape((2, 3))
>>> arr
array([[0, 1, 2],
[3, 4, 5]])
```

You can transpose your array with `arr.transpose()`

.

```
>>> arr.transpose()
array([[0, 3],
[1, 4],
[2, 5]])
```

You can also use `arr.T`

:

```
>>> arr.T
array([[0, 3],
[1, 4],
[2, 5]])
```

To learn more about transposing and reshaping arrays, see [ transpose](../reference/generated/numpy.transpose.html#numpy.transpose) and

[.](../reference/generated/numpy.reshape.html#numpy.reshape)

`reshape`

## How to reverse an array[#](#how-to-reverse-an-array)

*This section covers* `np.flip()`


NumPy’s `np.flip()`

function allows you to flip, or reverse, the contents of
an array along an axis. When using `np.flip()`

, specify the array you would like
to reverse and the axis. If you don’t specify the axis, NumPy will reverse the
contents along all of the axes of your input array.

**Reversing a 1D array**

If you begin with a 1D array like this one:

```
>>> arr = np.array([1, 2, 3, 4, 5, 6, 7, 8])
```

You can reverse it with:

```
>>> reversed_arr = np.flip(arr)
```

If you want to print your reversed array, you can run:

```
>>> print('Reversed Array: ', reversed_arr)
Reversed Array: [8 7 6 5 4 3 2 1]
```

**Reversing a 2D array**

A 2D array works much the same way.

If you start with this array:

```
>>> arr_2d = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

You can reverse the content in all of the rows and all of the columns with:

```
>>> reversed_arr = np.flip(arr_2d)
>>> print(reversed_arr)
[[12 11 10 9]
[ 8 7 6 5]
[ 4 3 2 1]]
```

You can easily reverse only the *rows* with:

```
>>> reversed_arr_rows = np.flip(arr_2d, axis=0)
>>> print(reversed_arr_rows)
[[ 9 10 11 12]
[ 5 6 7 8]
[ 1 2 3 4]]
```

Or reverse only the *columns* with:

```
>>> reversed_arr_columns = np.flip(arr_2d, axis=1)
>>> print(reversed_arr_columns)
[[ 4 3 2 1]
[ 8 7 6 5]
[12 11 10 9]]
```

You can also reverse the contents of only one column or row. For example, you can reverse the contents of the row at index position 1 (the second row):

```
>>> arr_2d[1] = np.flip(arr_2d[1])
>>> print(arr_2d)
[[ 1 2 3 4]
[ 8 7 6 5]
[ 9 10 11 12]]
```

You can also reverse the column at index position 1 (the second column):

```
>>> arr_2d[:,1] = np.flip(arr_2d[:,1])
>>> print(arr_2d)
[[ 1 10 3 4]
[ 8 7 6 5]
[ 9 2 11 12]]
```

Read more about reversing arrays at [ flip](../reference/generated/numpy.flip.html#numpy.flip).

## Reshaping and flattening multidimensional arrays[#](#reshaping-and-flattening-multidimensional-arrays)

*This section covers* `.flatten()`

, `ravel()`


There are two popular ways to flatten an array: `.flatten()`

and `.ravel()`

.
The primary difference between the two is that the new array created using
`ravel()`

is actually a reference to the parent array (i.e., a “view”). This
means that any changes to the new array will affect the parent array as well.
Since `ravel`

does not create a copy, it’s memory efficient.

If you start with this array:

```
>>> x = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

You can use `flatten`

to flatten your array into a 1D array.

```
>>> x.flatten()
array([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
```

When you use `flatten`

, changes to your new array won’t change the parent
array.

For example:

```
>>> a1 = x.flatten()
>>> a1[0] = 99
>>> print(x) # Original array
[[ 1 2 3 4]
[ 5 6 7 8]
[ 9 10 11 12]]
>>> print(a1) # New array
[99 2 3 4 5 6 7 8 9 10 11 12]
```

But when you use `ravel`

, the changes you make to the new array will affect
the parent array.

For example:

```
>>> a2 = x.ravel()
>>> a2[0] = 98
>>> print(x) # Original array
[[98 2 3 4]
[ 5 6 7 8]
[ 9 10 11 12]]
>>> print(a2) # New array
[98 2 3 4 5 6 7 8 9 10 11 12]
```

Read more about `flatten`

at [ ndarray.flatten](../reference/generated/numpy.ndarray.flatten.html#numpy.ndarray.flatten) and

`ravel`

at [.](../reference/generated/numpy.ravel.html#numpy.ravel)

`ravel`

## How to access the docstring for more information[#](#how-to-access-the-docstring-for-more-information)

*This section covers* `help()`

, `?`

, `??`


When it comes to the data science ecosystem, Python and NumPy are built with the
user in mind. One of the best examples of this is the built-in access to
documentation. Every object contains the reference to a string, which is known
as the **docstring**. In most cases, this docstring contains a quick and concise
summary of the object and how to use it. Python has a built-in `help()`

function that can help you access this information. This means that nearly any
time you need more information, you can use `help()`

to quickly find the
information that you need.

For example:

```
>>> help(max)
Help on built-in function max in module builtins:
max(...)
max(iterable, *[, default=obj, key=func]) -> value
max(arg1, arg2, *args, *[, key=func]) -> value
With a single iterable argument, return its biggest item. The
default keyword-only argument specifies an object to return if
the provided iterable is empty.
With two or more arguments, return the largest argument.
```

Because access to additional information is so useful, IPython uses the `?`

character as a shorthand for accessing this documentation along with other
relevant information. IPython is a command shell for interactive computing in
multiple languages.
[You can find more information about IPython here](https://ipython.org/).

For example:

```
In [0]: max?
max(iterable, *[, default=obj, key=func]) -> value
max(arg1, arg2, *args, *[, key=func]) -> value
With a single iterable argument, return its biggest item. The
default keyword-only argument specifies an object to return if
the provided iterable is empty.
With two or more arguments, return the largest argument.
Type: builtin_function_or_method
```

You can even use this notation for object methods and objects themselves.

Let’s say you create this array:

```
>>> a = np.array([1, 2, 3, 4, 5, 6])
```

Then you can obtain a lot of useful information (first details about `a`

itself,
followed by the docstring of `ndarray`

of which `a`

is an instance):

```
In [1]: a?
Type: ndarray
String form: [1 2 3 4 5 6]
Length: 6
File: ~/anaconda3/lib/python3.9/site-packages/numpy/__init__.py
Docstring: <no docstring>
Class docstring:
ndarray(shape, dtype=float, buffer=None, offset=0,
strides=None, order=None)
An array object represents a multidimensional, homogeneous array
of fixed-size items. An associated data-type object describes the
format of each element in the array (its byte-order, how many bytes it
occupies in memory, whether it is an integer, a floating point number,
or something else, etc.)
Arrays should be constructed using `array`, `zeros` or `empty` (refer
to the See Also section below). The parameters given here refer to
a low-level method (`ndarray(...)`) for instantiating an array.
For more information, refer to the `numpy` module and examine the
methods and attributes of an array.
Parameters
----------
(for the __new__ method; see Notes below)
shape : tuple of ints
Shape of created array.
...
```

This also works for functions and other objects that **you** create. Just
remember to include a docstring with your function using a string literal
(`""" """`

or `''' '''`

around your documentation).

For example, if you create this function:

```
>>> def double(a):
... '''Return a * 2'''
... return a * 2
```

You can obtain information about the function:

```
In [2]: double?
Signature: double(a)
Docstring: Return a * 2
File: ~/Desktop/<ipython-input-23-b5adf20be596>
Type: function
```

You can reach another level of information by reading the source code of the
object you’re interested in. Using a double question mark (`??`

) allows you to
access the source code.

For example:

```
In [3]: double??
Signature: double(a)
Source:
def double(a):
'''Return a * 2'''
return a * 2
File: ~/Desktop/<ipython-input-23-b5adf20be596>
Type: function
```

If the object in question is compiled in a language other than Python, using
`??`

will return the same information as `?`

. You’ll find this with a lot of
built-in objects and types, for example:

```
In [4]: len?
Signature: len(obj, /)
Docstring: Return the number of items in a container.
Type: builtin_function_or_method
```

and :

```
In [5]: len??
Signature: len(obj, /)
Docstring: Return the number of items in a container.
Type: builtin_function_or_method
```

have the same output because they were compiled in a programming language other than Python.

## Working with mathematical formulas[#](#working-with-mathematical-formulas)

The ease of implementing mathematical formulas that work on arrays is one of the things that make NumPy so widely used in the scientific Python community.

For example, this is the mean square error formula (a central formula used in supervised machine learning models that deal with regression):

Implementing this formula is simple and straightforward in NumPy:

What makes this work so well is that `predictions`

and `labels`

can contain
one or a thousand values. They only need to be the same size.

You can visualize it this way:

In this example, both the predictions and labels vectors contain three values,
meaning `n`

has a value of three. After we carry out subtractions the values
in the vector are squared. Then NumPy sums the values, and your result is the
error value for that prediction and a score for the quality of the model.

## How to save and load NumPy objects[#](#how-to-save-and-load-numpy-objects)

*This section covers* `np.save`

, `np.savez`

, `np.savetxt`

,
`np.load`

, `np.loadtxt`


You will, at some point, want to save your arrays to disk and load them back
without having to re-run the code. Fortunately, there are several ways to save
and load objects with NumPy. The ndarray objects can be saved to and loaded from
the disk files with `loadtxt`

and `savetxt`

functions that handle normal
text files, `load`

and `save`

functions that handle NumPy binary files with
a **.npy** file extension, and a `savez`

function that handles NumPy files
with a **.npz** file extension.

The **.npy** and **.npz** files store data, shape, dtype, and other information
required to reconstruct the ndarray in a way that allows the array to be
correctly retrieved, even when the file is on another machine with different
architecture.

If you want to store a single ndarray object, store it as a .npy file using
`np.save`

. If you want to store more than one ndarray object in a single file,
save it as a .npz file using `np.savez`

. You can also save several arrays
into a single file in compressed npz format with [ savez_compressed](../reference/generated/numpy.savez_compressed.html#numpy.savez_compressed).

It’s easy to save and load an array with `np.save()`

. Just make sure to
specify the array you want to save and a file name. For example, if you create
this array:

```
>>> a = np.array([1, 2, 3, 4, 5, 6])
```

You can save it as “filename.npy” with:

```
>>> np.save('filename', a)
```

You can use `np.load()`

to reconstruct your array.

```
>>> b = np.load('filename.npy')
```

If you want to check your array, you can run:

```
>>> print(b)
[1 2 3 4 5 6]
```

You can save a NumPy array as a plain text file like a **.csv** or **.txt** file
with `np.savetxt`

.

For example, if you create this array:

```
>>> csv_arr = np.array([1, 2, 3, 4, 5, 6, 7, 8])
```

You can easily save it as a .csv file with the name “new_file.csv” like this:

```
>>> np.savetxt('new_file.csv', csv_arr)
```

You can quickly and easily load your saved text file using `loadtxt()`

:

```
>>> np.loadtxt('new_file.csv')
array([1., 2., 3., 4., 5., 6., 7., 8.])
```

The `savetxt()`

and `loadtxt()`

functions accept additional optional
parameters such as header, footer, and delimiter. While text files can be easier
for sharing, .npy and .npz files are smaller and faster to read. If you need more
sophisticated handling of your text file (for example, if you need to work with
lines that contain missing values), you will want to use the [ genfromtxt](../reference/generated/numpy.genfromtxt.html#numpy.genfromtxt)
function.

With [ savetxt](../reference/generated/numpy.savetxt.html#numpy.savetxt), you can specify headers, footers, comments, and more.

Learn more about [input and output routines here](../reference/routines.io.html#routines-io).

## Importing and exporting a CSV[#](#importing-and-exporting-a-csv)

It’s simple to read in a CSV that contains existing information. The best and
easiest way to do this is to use
[Pandas](https://pandas.pydata.org).

```
>>> import pandas as pd
>>> # If all of your columns are the same type:
>>> x = pd.read_csv('music.csv', header=0).values
>>> print(x)
[['Billie Holiday' 'Jazz' 1300000 27000000]
['Jimmie Hendrix' 'Rock' 2700000 70000000]
['Miles Davis' 'Jazz' 1500000 48000000]
['SIA' 'Pop' 2000000 74000000]]
>>> # You can also simply select the columns you need:
>>> x = pd.read_csv('music.csv', usecols=['Artist', 'Plays']).values
>>> print(x)
[['Billie Holiday' 27000000]
['Jimmie Hendrix' 70000000]
['Miles Davis' 48000000]
['SIA' 74000000]]
```

It’s simple to use Pandas in order to export your array as well. If you are new to NumPy, you may want to create a Pandas dataframe from the values in your array and then write the data frame to a CSV file with Pandas.

If you created this array “a”

```
>>> a = np.array([[-2.58289208, 0.43014843, -1.24082018, 1.59572603],
... [ 0.99027828, 1.17150989, 0.94125714, -0.14692469],
... [ 0.76989341, 0.81299683, -0.95068423, 0.11769564],
... [ 0.20484034, 0.34784527, 1.96979195, 0.51992837]])
```

You could create a Pandas dataframe

```
>>> df = pd.DataFrame(a)
>>> print(df)
0 1 2 3
0 -2.582892 0.430148 -1.240820 1.595726
1 0.990278 1.171510 0.941257 -0.146925
2 0.769893 0.812997 -0.950684 0.117696
3 0.204840 0.347845 1.969792 0.519928
```

You can easily save your dataframe with:

```
>>> df.to_csv('pd.csv')
```

And read your CSV with:

```
>>> data = pd.read_csv('pd.csv')
```

You can also save your array with the NumPy `savetxt`

method.

```
>>> np.savetxt('np.csv', a, fmt='%.2f', delimiter=',', header='1, 2, 3, 4')
```

If you’re using the command line, you can read your saved CSV any time with a command such as:

```
$ cat np.csv
# 1, 2, 3, 4
-2.58,0.43,-1.24,1.60
0.99,1.17,0.94,-0.15
0.77,0.81,-0.95,0.12
0.20,0.35,1.97,0.52
```

Or you can open the file any time with a text editor!

If you’re interested in learning more about Pandas, take a look at the
[official Pandas documentation](https://pandas.pydata.org/index.html).
Learn how to install Pandas with the
[official Pandas installation information](https://pandas.pydata.org/pandas-docs/stable/install.html).

## Plotting arrays with Matplotlib[#](#plotting-arrays-with-matplotlib)

If you need to generate a plot for your values, it’s very simple with
[Matplotlib](https://matplotlib.org/).

For example, you may have an array like this one:

```
>>> a = np.array([2, 1, 5, 7, 4, 6, 8, 14, 10, 9, 18, 20, 22])
```

If you already have Matplotlib installed, you can import it with:

```
>>> import matplotlib.pyplot as plt
# If you're using Jupyter Notebook, you may also want to run the following
# line of code to display your code in the notebook:
%matplotlib inline
```

All you need to do to plot your values is run:

```
>>> plt.plot(a)
# If you are running from a command line, you may need to do this:
# >>> plt.show()
```

For example, you can plot a 1D array like this:

```
>>> x = np.linspace(0, 5, 20)
>>> y = np.linspace(0, 10, 20)
>>> plt.plot(x, y, 'purple') # line
>>> plt.plot(x, y, 'o') # dots
```

With Matplotlib, you have access to an enormous number of visualization options.

```
>>> fig = plt.figure()
>>> ax = fig.add_subplot(projection='3d')
>>> X = np.arange(-5, 5, 0.15)
>>> Y = np.arange(-5, 5, 0.15)
>>> X, Y = np.meshgrid(X, Y)
>>> R = np.sqrt(X**2 + Y**2)
>>> Z = np.sin(R)
>>> ax.plot_surface(X, Y, Z, rstride=1, cstride=1, cmap='viridis')
```

To read more about Matplotlib and what it can do, take a look at
[the official documentation](https://matplotlib.org/).
For directions regarding installing Matplotlib, see the official
[installation section](https://matplotlib.org/users/installing.html).

*Image credits: Jay Alammar*
[https://jalammar.github.io/](https://jalammar.github.io/)