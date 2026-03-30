# Pytorch Documentation
> Scraped on: 2026-03-30 | Root Source: [https://pytorch.org/vision/stable/index.html](https://pytorch.org/vision/stable/index.html)



---

## Source: https://pytorch.org/vision/stable/index.html

# torchvision[¶](#torchvision)

This library is part of the [PyTorch](http://pytorch.org/) project. PyTorch is an open source
machine learning framework.

Features described in this documentation are classified by release status:


Stable:These features will be maintained long-term and there should generally be no major performance limitations or gaps in documentation. We also expect to maintain backwards compatibility (although breaking changes can happen and notice will be given one release ahead of time).

Beta:Features are tagged as Beta because the API may change based on user feedback, because the performance needs to improve, or because coverage across operators is not yet complete. For Beta features, we are committing to seeing the feature through to the Stable classification. We are not, however, committing to backwards compatibility.

Prototype:These features are typically not available as part of binary distributions like PyPI or Conda, except sometimes behind run-time flags, and are at an early stage for feedback and testing.

The [ torchvision](#module-torchvision) package consists of popular datasets, model
architectures, and common image transformations for computer vision.

-
torchvision.get_video_backend()
[[source]](_modules/torchvision.html#get_video_backend)[¶](#torchvision.get_video_backend) Returns the currently active video backend used to decode videos.

- Returns:
Name of the video backend. Currently only ‘pyav’ is supported.

- Return type:


-
torchvision.set_image_backend(
*backend*)[[source]](_modules/torchvision.html#set_image_backend)[¶](#torchvision.set_image_backend) Specifies the package used to load images.

- Parameters:
**backend**(*string*) – Name of the image backend. one of {‘PIL’, ‘accimage’}. The`accimage`

package uses the Intel IPP library. It is generally faster than PIL, but does not support as many operations.


-
torchvision.set_video_backend(
*backend*)[[source]](_modules/torchvision.html#set_video_backend)[¶](#torchvision.set_video_backend) Specifies the package used to decode videos.

- Parameters:
**backend**(*string*) – Name of the video backend. Only ‘pyav’ is supported. The`pyav`

package uses the 3rd party PyAv library. It is a Pythonic binding for the FFmpeg libraries.

---

## Source: https://pytorch.org/

Get Started: Install PyTorch Locally or Launch Instantly on Supported Cloud Platforms


### Flight Recorder: A New Lens for Understanding NCCL Watchdog Timeouts


### Enabling Up to 41% Faster Pre-training: MXFP8 and DeepEP for DeepSeek-V3 on B200 with TorchTitan

## Join PyTorch Foundation

As a member of the PyTorch Foundation, you’ll have access to resources that allow you to be stewards of stable, secure, and long-lasting codebases. You can collaborate on training, local and regional events, open-source developer tooling, academic research, and guides to help new users and contributors have a productive experience.

[EXPLORE BENEFITS](/join)

## Key Features & Capabilities

##### Production Ready

Transition seamlessly between eager and graph modes with TorchScript, and accelerate the path to production with TorchServe.

##### Distributed Training

Scalable distributed training and performance optimization in research and production is enabled by the torch.distributed backend.

##### Robust Ecosystem

A rich ecosystem of tools and libraries extends PyTorch and supports development in computer vision, NLP and more.

##### Cloud Support

PyTorch is well supported on major cloud platforms, providing frictionless development and easy scaling.

## Install PyTorch

Select your preferences and run the install command. Stable represents the most currently tested and supported version of PyTorch. This should be suitable for many users. Preview is available if you want the latest, not fully tested and supported, builds that are generated nightly. Please ensure that you have **met the prerequisites below (e.g., numpy)**, depending on your package manager. You can also [install previous versions of PyTorch](https://pytorch.org/get-started/previous-versions). Note that LibTorch is only available for C++.

**NOTE:** Latest Stable PyTorch requires Python 3.10 or later.

pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

[Previous versions of PyTorch](/get-started/previous-versions/)

### Quick Start With Cloud Partners

Get up and running with PyTorch quickly through popular cloud platforms and machine learning services.

## Ecosystem

##### Featured Projects

Explore a rich ecosystem of libraries, tools, and more to support development.

#### Captum

Captum (“comprehension” in Latin) is an open source, extensible library for model interpretability built on PyTorch.

#### PyTorch Geometric

PyTorch Geometric is a library for deep learning on irregular input data such as graphs, point clouds, and manifolds.

#### skorch

skorch is a high-level library for PyTorch that provides full scikit-learn compatibility.

## Companies & Universities Using PyTorch

##### Amazon Advertising

Reduce inference costs by 71% and scale out using PyTorch, TorchServe, and AWS Inferentia.

[READ CASE STUDIES](/case-studies/)

##### Salesforce

Pushing the state of the art in NLP and Multi-task learning.

##### Stanford University

Using PyTorch’s flexibility to efficiently research new algorithmic approaches.

---

## Source: https://pytorch.org/get-started

## Start Locally

Select your preferences and run the install command. Stable represents the most currently tested and supported version of PyTorch. This should
be suitable for many users. Preview is available if you want the latest, not fully tested and supported, builds that are generated nightly.
Please ensure that you have **met the prerequisites below (e.g., numpy)**, depending on your package manager. You can also
[install previous versions of PyTorch](/get-started/previous-versions). Note that LibTorch is only available for C++.

**NOTE:** Latest Stable PyTorch requires Python 3.10 or later.

pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

# Installing on macOS

PyTorch can be installed and used on macOS. Depending on your system and GPU capabilities, your experience with PyTorch on macOS may vary in terms of processing time.

## Prerequisites

### macOS Version

PyTorch is supported on macOS 10.15 (Catalina) or above.

### Python

It is recommended that you use Python 3.10 - 3.14.
You can install Python either through [Homebrew](https://brew.sh/) or
the [Python website](https://www.python.org/downloads/mac-osx/).

### Package Manager

To install the PyTorch binaries, you will need to use the supported package manager: [pip](https://pypi.org/project/pip/).

#### pip

*Python 3*

If you installed Python via Homebrew or the Python website, `pip`

was installed with it. If you installed Python 3.x, then you will be using the command `pip3`

.

Tip: If you want to use just the command

`pip`

, instead of`pip3`

, you can symlink`pip`

to the`pip3`

binary.

## Installation

### pip

To install PyTorch via pip, use the following command, depending on your Python version:

```
# Python 3.x
pip3 install torch torchvision
```


## Verification

To ensure that PyTorch was installed correctly, we can verify the installation by running sample PyTorch code. Here we will construct a randomly initialized tensor.

```
import torch
x = torch.rand(5, 3)
print(x)
```


The output should be something similar to:

```
tensor([[0.3380, 0.3845, 0.3217],
[0.8337, 0.9050, 0.2650],
[0.2979, 0.7141, 0.9069],
[0.1449, 0.1132, 0.1375],
[0.4675, 0.3947, 0.1426]])
```


## Building from source

For the majority of PyTorch users, installing from a pre-built binary via a package manager will provide the best experience. However, there are times when you may want to install the bleeding edge PyTorch code, whether for testing or actual development on the PyTorch core. To install the latest PyTorch code, you will need to [build PyTorch from source](https://github.com/pytorch/pytorch#from-source).

### Prerequisites

- [Optional] Install
[pip](https://pypi.org/project/pip/) - Follow the steps described here:
[https://github.com/pytorch/pytorch#from-source](https://github.com/pytorch/pytorch#from-source)

You can verify the installation as described [above](#mac-verification).

# Installing on Linux

PyTorch can be installed and used on various Linux distributions. Depending on your system and compute requirements, your experience with PyTorch on Linux may vary in terms of processing time. It is recommended, but not required, that your Linux system has an NVIDIA or AMD GPU in order to harness the full power of PyTorch’s [CUDA](https://developer.nvidia.com/cuda-zone) [support](https://pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html?highlight=cuda&__hstc=76629258.724dacd2270c1ae797f3a62ecd655d50.1746547368336.1746547368336.1746547368336.1&__hssc=76629258.10.1746547368336&__hsfp=2230748894#cuda-tensors) or [ROCm](https://rocm.docs.amd.com/) support.

## Prerequisites

### Supported Linux Distributions

PyTorch is supported on Linux distributions that use [glibc](https://www.gnu.org/software/libc/) >= v2.28, which include the following:

[Arch Linux](https://www.archlinux.org/download/), minimum version 2020.01.22[CentOS](https://www.centos.org/download/), minimum version 8[Debian](https://www.debian.org/distrib/), minimum version 10.0[Fedora](https://getfedora.org/), minimum version 24[Mint](https://linuxmint.com/download.php), minimum version 20[OpenSUSE](https://get.opensuse.org/), minimum version 15[PCLinuxOS](https://www.pclinuxos.com/), minimum version 2014.7[Slackware](http://www.slackware.com/getslack/), minimum version 14.2[Ubuntu](https://www.ubuntu.com/download/desktop), minimum version 20.04 (please note that 20.04 reached EOL)

The install instructions here will generally apply to all supported Linux distributions. An example difference is that your distribution may support

`yum`

instead of`apt`

. The specific examples shown were run on an Ubuntu 18.04 machine.

### Python

Python 3.10-3.14 is generally installed by default on any of our supported Linux distributions, which meets our recommendation.

Tip: By default, you will have to use the command

`python3`

to run Python. If you want to use just the command`python`

, instead of`python3`

, you can symlink`python`

to the`python3`

binary.

However, if you want to install another version, there are multiple ways:

- APT
[Python website](https://www.python.org/downloads/mac-osx/)

If you decide to use APT, you can run the following command to install it:

```
sudo apt install python
```


### Package Manager

To install the PyTorch binaries, you will need to use the supported package manager: [pip](https://pypi.org/project/pip/).

#### pip

*Python 3*

While Python 3.x is installed by default on Linux, `pip`

is not installed by default.

```
sudo apt install python3-pip
```


Tip: If you want to use just the command

`pip`

, instead of`pip3`

, you can symlink`pip`

to the`pip3`

binary.

## Installation

### pip

#### No CUDA

To install PyTorch via pip, and do not have a [CUDA-capable](https://developer.nvidia.com/cuda-zone) or [ROCm-capable](https://rocm.docs.amd.com/) system or do not require CUDA/ROCm (i.e. GPU support), in the above selector, choose OS: Linux, Package: Pip, Language: Python and Compute Platform: CPU.
Then, run the command that is presented to you.

#### With CUDA

To install PyTorch via pip, and do have a [CUDA-capable](https://developer.nvidia.com/cuda-zone) system, in the above selector, choose OS: Linux, Package: Pip, Language: Python and the CUDA version suited to your machine. Often, the latest CUDA version is better.
Then, run the command that is presented to you.

#### With ROCm

To install PyTorch via pip, and do have a [ROCm-capable](https://rocm.docs.amd.com/) system, in the above selector, choose OS: Linux, Package: Pip, Language: Python and the ROCm version supported.
Then, run the command that is presented to you.

## Verification

To ensure that PyTorch was installed correctly, we can verify the installation by running sample PyTorch code. Here we will construct a randomly initialized tensor.

```
import torch
x = torch.rand(5, 3)
print(x)
```


The output should be something similar to:

```
tensor([[0.3380, 0.3845, 0.3217],
[0.8337, 0.9050, 0.2650],
[0.2979, 0.7141, 0.9069],
[0.1449, 0.1132, 0.1375],
[0.4675, 0.3947, 0.1426]])
```


Additionally, to check if your GPU driver and CUDA/ROCm is enabled and accessible by PyTorch, run the following commands to return whether or not the GPU driver is enabled (the ROCm build of PyTorch uses the same semantics at the python API level [link](https://github.com/pytorch/pytorch/blob/master/docs/source/notes/hip.rst#hip-interfaces-reuse-the-cuda-interfaces), so the below commands should also work for ROCm):

```
import torch
torch.cuda.is_available()
```


## Building from source

For the majority of PyTorch users, installing from a pre-built binary via a package manager will provide the best experience. However, there are times when you may want to install the bleeding edge PyTorch code, whether for testing or actual development on the PyTorch core. To install the latest PyTorch code, you will need to [build PyTorch from source](https://github.com/pytorch/pytorch#from-source).

### Prerequisites

- Install
[Pip](#pip) - If you need to build PyTorch with GPU support
a. for NVIDIA GPUs, install
[CUDA](https://developer.nvidia.com/cuda-downloads), if your machine has a[CUDA-enabled GPU](https://developer.nvidia.com/cuda-gpus). b. for AMD GPUs, install[ROCm](https://rocm.docs.amd.com/), if your machine has a[ROCm-enabled GPU](https://rocm.docs.amd.com/) - Follow the steps described here:
[https://github.com/pytorch/pytorch#from-source](https://github.com/pytorch/pytorch#from-source)

You can verify the installation as described [above](#linux-verification).

# Installing on Windows

PyTorch can be installed and used on various Windows distributions. Depending on your system and compute requirements, your experience with PyTorch on Windows may vary in terms of processing time. It is recommended, but not required, that your Windows system has an NVIDIA GPU in order to harness the full power of PyTorch’s [CUDA](https://developer.nvidia.com/cuda-zone) [support](https://pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html?highlight=cuda&__hstc=76629258.724dacd2270c1ae797f3a62ecd655d50.1746547368336.1746547368336.1746547368336.1&__hssc=76629258.10.1746547368336&__hsfp=2230748894#cuda-tensors).

## Prerequisites

### Supported Windows Distributions

PyTorch is supported on the following Windows distributions:

[Windows](https://www.microsoft.com/en-us/windows)7 and greater;[Windows 10](https://www.microsoft.com/en-us/software-download/windows10ISO)or greater recommended.[Windows Server 2008](https://docs.microsoft.com/en-us/windows-server/windows-server)r2 and greater

The install instructions here will generally apply to all supported Windows distributions. The specific examples shown will be run on a Windows 10 Enterprise machine


### Python

Currently, PyTorch on Windows only supports Python 3.10-3.14; Python 2.x is not supported.

As it is not installed by default on Windows, there are multiple ways to install Python:

If you decide to use Chocolatey, and haven’t installed Chocolatey yet, ensure that you are running your command prompt as an administrator.


For a Chocolatey-based install, run the following command in an administrative command prompt:

```
choco install python
```


### Package Manager

To install the PyTorch binaries, you will need to use the supported package manager: [pip](https://pypi.org/project/pip/).

#### pip

If you installed Python by any of the recommended ways [above](#windows-python), [pip](https://pypi.org/project/pip/) will have already been installed for you.

## Installation

### pip

#### No CUDA

To install PyTorch via pip, and do not have a [CUDA-capable](https://developer.nvidia.com/cuda-zone) system or do not require CUDA, in the above selector, choose OS: Windows, Package: Pip and CUDA: None.
Then, run the command that is presented to you.

#### With CUDA

To install PyTorch via pip, and do have a [CUDA-capable](https://developer.nvidia.com/cuda-zone) system, in the above selector, choose OS: Windows, Package: Pip and the CUDA version suited to your machine. Often, the latest CUDA version is better.
Then, run the command that is presented to you.

## Verification

To ensure that PyTorch was installed correctly, we can verify the installation by running sample PyTorch code. Here we will construct a randomly initialized tensor.

From the command line, type:

```
python
```


then enter the following code:

```
import torch
x = torch.rand(5, 3)
print(x)
```


The output should be something similar to:

```
tensor([[0.3380, 0.3845, 0.3217],
[0.8337, 0.9050, 0.2650],
[0.2979, 0.7141, 0.9069],
[0.1449, 0.1132, 0.1375],
[0.4675, 0.3947, 0.1426]])
```


Additionally, to check if your GPU driver and CUDA is enabled and accessible by PyTorch, run the following commands to return whether or not the CUDA driver is enabled:

```
import torch
torch.cuda.is_available()
```


## Building from source

For the majority of PyTorch users, installing from a pre-built binary via a package manager will provide the best experience. However, there are times when you may want to install the bleeding edge PyTorch code, whether for testing or actual development on the PyTorch core. To install the latest PyTorch code, you will need to [build PyTorch from source](https://github.com/pytorch/pytorch#from-source).

### Prerequisites

- Install
[pip](https://pypi.org/project/pip/) - Install
[CUDA](https://developer.nvidia.com/cuda-downloads), if your machine has a[CUDA-enabled GPU](https://developer.nvidia.com/cuda-gpus). - If you want to build on Windows, Visual Studio with MSVC toolset, and NVTX are also needed. The exact requirements of those dependencies could be found out
[here](https://github.com/pytorch/pytorch#from-source). - Follow the steps described here:
[https://github.com/pytorch/pytorch#from-source](https://github.com/pytorch/pytorch#from-source)

You can verify the installation as described [above](#windows-verification).

---

## Source: https://pytorch.org/tutorials

# Welcome to PyTorch Tutorials[#](#welcome-to-pytorch-tutorials)

**What’s new in PyTorch tutorials?**

### Learn the Basics

Familiarize yourself with PyTorch concepts and modules. Learn how to load data, build deep neural networks, train and save your models in this quickstart guide.

[Get started with PyTorch](beginner/basics/intro.html)

# Additional Resources[#](#additional-resources)

### Examples of PyTorch

A set of examples around PyTorch in Vision, Text, Reinforcement Learning that you can incorporate in your existing work.

[Check Out Examples](https://pytorch.org/examples?utm_source=examples&utm_medium=examples-landing)

### Run Tutorials on Google Colab

Learn how to copy tutorial data into Google Drive so that you can run tutorials on Google Colab.

[Open](beginner/colab.html)

---

## Source: https://pytorch.org/tutorials/beginner/basics/intro.html

Note

[Go to the end](#sphx-glr-download-beginner-basics-intro-py)
to download the full example code.

**Learn the Basics** ||
[Quickstart](quickstart_tutorial.html) ||
[Tensors](tensorqs_tutorial.html) ||
[Datasets & DataLoaders](data_tutorial.html) ||
[Transforms](transforms_tutorial.html) ||
[Build Model](buildmodel_tutorial.html) ||
[Autograd](autogradqs_tutorial.html) ||
[Optimization](optimization_tutorial.html) ||
[Save & Load Model](saveloadrun_tutorial.html)

# Learn the Basics[#](#learn-the-basics)

Created On: Feb 09, 2021 | Last Updated: Jan 20, 2026 | Last Verified: Nov 05, 2024

Authors:
[Suraj Subramanian](https://github.com/subramen),
[Seth Juarez](https://github.com/sethjuarez/),
[Cassie Breviu](https://github.com/cassiebreviu/),
[Dmitry Soshnikov](https://soshnikov.com/),
[Ari Bornstein](https://github.com/aribornstein/)

Most machine learning workflows involve working with data, creating models, optimizing model parameters, and saving the trained models. This tutorial introduces you to a complete ML workflow implemented in PyTorch, with links to learn more about each of these concepts.

We’ll use the FashionMNIST dataset to train a neural network that predicts if an input image belongs to one of the following classes: T-shirt/top, Trouser, Pullover, Dress, Coat, Sandal, Shirt, Sneaker, Bag, or Ankle boot.

This tutorial assumes a basic familiarity with Python and Deep Learning concepts.

## Running the Tutorial Code[#](#running-the-tutorial-code)

You can run this tutorial in a couple of ways:

**In the cloud**: This is the easiest way to get started! Each section has a “Run in Google Colab” link at the top, which opens an integrated notebook in Google Colab with the code in a fully-hosted environment.**Locally**: This option requires you to set up PyTorch and TorchVision first on your local machine ([installation instructions](https://pytorch.org/get-started/locally/)). Download the notebook or copy the code into your favorite IDE.

## How to Use this Guide[#](#how-to-use-this-guide)

If you’re familiar with other deep learning frameworks, check out the [0. Quickstart](quickstart_tutorial.html) first
to quickly familiarize yourself with PyTorch’s API.

If you’re new to deep learning frameworks, head right into the first section of our step-by-step guide: [1. Tensors](tensorqs_tutorial.html).

---

## Source: https://pytorch.org/tutorials/beginner/introyt.html

# Introduction to PyTorch - YouTube Series[#](#introduction-to-pytorch-youtube-series)

Created On: Nov 30, 2021 | Last Updated: Nov 04, 2024 | Last Verified: Nov 05, 2024

This page has been moved.

Redirecting now…

Created On: Nov 30, 2021 | Last Updated: Nov 04, 2024 | Last Verified: Nov 05, 2024

This page has been moved.

Redirecting now…

---

## Source: https://discuss.pytorch.org/

| Category | Topics |
|---|---|
|
39863
|
|
|
2456
|
|
##
|
680
|
##
|
266
|
##
|
12098
|
|
38
|
|
##
|
201
|
##
|
2771
|
##
|
441
|
##
|
124
|
##
|
2655
|
##
|
6083
|
##
|
185
|
##
|
132
|
##
|
50
|
##
|
912
|
##
|
692
|
##
|
1124
|
|
198
|
|
##
|
121
|
|
251
|
|
|
56
|
|
|
398
|
|
|
74
|
|
##
|
101
|
##
|
368
|
##
|
1
|
|
76
|
|
##
|
920
|
##
|
11
|
##
|
132
|
|
72
|
|
##
|
36
|
|
53
|
|
##
|
5
|
##
|
11
|

---

## Source: https://pytorch.org/resources

Explore resources, get your questions answered, and join the discussion with other PyTorch developers.

Access comprehensive developer documentation.

Browse and join discussions on deep learning with PyTorch.

Discuss advanced topics.

Get in-depth tutorials for beginners and advanced developers.

Docs and tutorials in Chinese, translated by the community.

Report bugs, request features, discuss issues, and more.

Tutorials in Korean, translated by the community.

Tutorials in Japanese, translated by the community.

View example projects for vision, text, RL, and more.

Learn about the PyTorch core and module maintainers.

Learn how you can contribute to PyTorch code and documentation.

PyTorch design principles for contributors and maintainers.

Forums used by PyTorch core developers and contributors to the PyTorch codebase for technical discussions.

Learn about the PyTorch governance hierarchy.

Check out the PyTorch Mobile demo app for iOS and Android.

Further your education and career goals.

Stay up-to-date with the latest updates.

---

## Source: https://pytorch.org/ecosystem/contributor-awards-2024

We are pleased to announce our second annual 2024 Contributor Awards, a highlight of this year’s PyTorch Conference. The Annual PyTorch Contributor Awards honor individuals who have made significant contributions to the PyTorch ecosystem, presented at the PyTorch Conference.

In 2024, PyTorch has experienced significant growth, with contributions from over 3,500 individuals and 3,000 organizations. This marks a remarkable increase compared to just two years ago, when only 200 organizations were contributing to the project.

As we recognize and celebrate these achievements, we extend our heartfelt thanks to every member of our community. Your dedication, passion, and hard work have been instrumental in shaping PyTorch’s success.

Congratulations to this year’s nominees and recipients for the outstanding individuals and teams who have played a pivotal role in PyTorch’s journey. Your contributions have enriched our community and accelerated the advancement of AI and machine learning.

---

## Source: https://pytorch.org/edge

## What is ExecuTorch?

ExecuTorch is an end-to-end solution for enabling on-device inference capabilities across mobile and edge devices including wearables, embedded devices and microcontrollers. It is part of the PyTorch Edge ecosystem and enables efficient deployment of various PyTorch models (vision, speech, Generative AI, and more) to edge devices. Key value propositions of ExecuTorch are:

**Portability**: Compatibility with a wide variety of computing platforms, from high-end mobile phones to highly constrained embedded systems and microcontrollers.

**Productivity**: Enabling developers to use the same toolchains and SDK from PyTorch model authoring and conversion, to debugging and deployment to a wide variety of platforms.

**Performance**: Providing end users with a seamless and high-performance experience due to a lightweight runtime and utilizing full hardware capabilities such as CPUs, NPUs and DSPs.

## Explore ExecuTorch

ExecuTorch is currently powering various experiences across AR, VR and Family of Apps (FOA) products and services at Meta. We are excited to see how the community leverages our all new on-device AI stack. You can learn more about [key components](https://pytorch.org/executorch/stable/getting-started-architecture) of ExecuTorch and its architecture, [how it works](https://pytorch.org/executorch/stable/intro-how-it-works), and explore [documentation pages](https://pytorch.org/executorch) and [detailed tutorials](https://pytorch.org/executorch/stable/#tutorials-and-examples:~:text=Getting%20Started-,Tutorials%20and%20Examples,-Docs).

[ExecuTorch on GitHub](https://github.com/pytorch/executorch)

[ExecuTorch Webpage](http://executorch.ai/)

[ExecuTorch Documentation](https://pytorch.org/executorch/stable/index.html)

---

## Source: https://pytorch.org/executorch/stable/index.html

# Welcome to the ExecuTorch Documentation[#](#welcome-to-the-executorch-documentation)

**ExecuTorch** is PyTorch’s solution for efficient AI inference on edge devices — from mobile phones to embedded systems.

## Key Value Propositions[#](#key-value-propositions)

**Portability:**Run on diverse platforms, from high-end mobile to constrained microcontrollers**Performance:**Lightweight runtime with full hardware acceleration (CPU, GPU, NPU, DSP)**Productivity:**Use familiar PyTorch tools from authoring to deployment

## 🎯 Wins & Success Stories[#](#wins-success-stories)

## Explore Documentation[#](#explore-documentation)

**Intro**

**Overview, architecture, and core concepts** — Understand how ExecuTorch works and its benefits

[Intro](intro-section.html)

**Quick Start**

**Get started with ExecuTorch** — Install, export your first model, and run inference

[Quick Start](quick-start-section.html)

**Edge**

**Android, iOS, Desktop, Embedded** — Platform-specific deployment guides and examples

[Edge](edge-platforms-section.html)

**Backends**

**CPU, GPU, NPU/Accelerator backends** — Hardware acceleration and backend selection

[Backends](backends-section.html)

**LLMs**

**LLM export, optimization, and deployment** — Complete LLM workflow for edge devices

[LLMs](llm/working-with-llms.html)

**Advanced**

**Quantization, memory planning, custom passes** — Deep customization and optimization

[Advanced](advanced-topics-section.html)

**Tools**

**Developer tools, profiling, debugging** — Comprehensive development and debugging suite

[Tools](tools-section.html)

**API**

**API Reference Usages & Examples** — Detailed Python, C++, and Java API references

[API](api-section.html)

**💬 Support**

**FAQ, troubleshooting, contributing** — Get help and contribute to the project

[Support](support-section.html)

---

## Source: https://pytorch.org/docs/stable/index.html

# PyTorch documentation[#](#pytorch-documentation)

PyTorch is an optimized tensor library for deep learning using GPUs and CPUs.

Features described in this documentation are classified by release status:

**Stable (API-Stable):**
These features will be maintained long-term and there should generally be no major performance limitations or gaps in documentation. We also expect to maintain backwards compatibility (although breaking changes can happen and notice will be given one release ahead of time).

**Unstable (API-Unstable):**
Encompasses all features that are under active development where APIs may change based on user feedback, requisite performance improvements or because coverage across operators is not yet complete.
The APIs and performance characteristics of these features may change.

[Install PyTorch](https://pytorch.org/get-started/locally/)[User Guide](user_guide/index.html)[Reference API](pytorch-api.html)[C++](https://docs.pytorch.org/cppdocs/)[torch](torch.html)[torch.nn](nn.html)[torch.nn.functional](nn.functional.html)[torch.Tensor](tensors.html)[Tensor Attributes](tensor_attributes.html)[Tensor Views](tensor_view.html)[torch.amp](amp.html)[torch.autograd](autograd.html)[torch.library](library.html)[torch.accelerator](accelerator.html)[torch.cpu](cpu.html)[torch.cuda](cuda.html)[torch.cuda.memory](torch_cuda_memory.html)[torch.mps](mps.html)[torch.xpu](xpu.html)[torch.mtia](mtia.html)[torch.mtia.memory](mtia.memory.html)[torch.mtia.mtia_graph](mtia.mtia_graph.html)[Meta device](meta.html)[torch.backends](backends.html)[torch.export](user_guide/torch_compiler/export.html)[torch.distributed](distributed.html)[torch.distributed.tensor](distributed.tensor.html)[torch.distributed.algorithms.join](distributed.algorithms.join.html)[torch.distributed.elastic](distributed.elastic.html)[torch.distributed.fsdp](fsdp.html)[torch.distributed.fsdp.fully_shard](distributed.fsdp.fully_shard.html)[torch.distributed.tensor.parallel](distributed.tensor.parallel.html)[torch.distributed.optim](distributed.optim.html)[torch.distributed.pipelining](distributed.pipelining.html)[torch.distributed._symmetric_memory](symmetric_memory.html)[torch.distributed.checkpoint](distributed.checkpoint.html)[torch.distributions](distributions.html)[torch.compiler](torch.compiler_api.html)[torch.fft](fft.html)[torch.func](func.html)[torch.futures](futures.html)[torch.fx](fx.html)[torch.fx.experimental](fx.experimental.html)[torch.hub](hub.html)[torch.linalg](linalg.html)[torch.monitor](monitor.html)[torch.signal](signal.html)[torch.special](special.html)[torch.overrides](torch.overrides.html)[torch.nativert](nativert.html)[torch.package](package.html)[torch.profiler](profiler.html)[torch.nn.init](nn.init.html)[torch.nn.attention](nn.attention.html)[torch.onnx](onnx.html)[torch.optim](optim.html)[Complex Numbers](complex_numbers.html)[DDP Communication Hooks](ddp_comm_hooks.html)[Quantization](quantization.html)[Distributed RPC Framework](rpc.html)[torch.random](random.html)[torch.masked](masked.html)[torch.nested](nested.html)[torch.Size](size.html)[torch.sparse](sparse.html)[torch.Storage](storage.html)[torch.testing](testing.html)[torch.utils](utils.html)[torch.utils.collect_env](utils.html#module-torch.utils.collect_env)[torch.utils.flop_counter](utils.html#module-torch.utils.flop_counter)[torch.utils.hipify.hipify_python](utils.html#module-torch.utils.hipify.hipify_python)[torch.utils.benchmark](benchmark_utils.html)[torch.utils.checkpoint](checkpoint.html)[torch.utils.cpp_extension](cpp_extension.html)[torch.utils.data](data.html)[torch.utils.deterministic](deterministic.html)[torch.utils.jit](jit_utils.html)[torch.utils.dlpack](dlpack.html)[torch.utils.mobile_optimizer](mobile_optimizer.html)[torch.utils.model_zoo](model_zoo.html)[torch.utils.tensorboard](tensorboard.html)[torch.utils.module_tracker](module_tracker.html)[Type Info](type_info.html)[Named Tensors](named_tensor.html)[Named Tensors operator coverage](name_inference.html)[torch.__config__](config_mod.html)[torch.__future__](future_mod.html)[torch._logging](logging.html)[Torch Environment Variables](torch_environment_variables.html)

[Developer Notes](notes.html)[Automatic Mixed Precision examples](notes/amp_examples.html)[Autograd mechanics](notes/autograd.html)[Broadcasting semantics](notes/broadcasting.html)[CPU threading and TorchScript inference](notes/cpu_threading_torchscript_inference.html)[CUDA semantics](notes/cuda.html)[PyTorch Custom Operators Landing Page](notes/custom_operators.html)[Distributed Data Parallel](notes/ddp.html)[Extending PyTorch](notes/extending.html)[Extending torch.func with autograd.Function](notes/extending.func.html)[Frequently Asked Questions](notes/faq.html)[Getting Started on Intel GPU](notes/get_start_xpu.html)[Gradcheck mechanics](notes/gradcheck.html)[HIP (ROCm) semantics](notes/hip.html)[Features for large-scale deployments](notes/large_scale_deployments.html)[LibTorch Stable ABI](notes/libtorch_stable_abi.html)[LocalTensor Tutorial: Single-Process SPMD Debugging](notes/local_tensor_tutorial.html)[MKLDNN backend](notes/mkldnn.html)[Bfloat16 (BF16) on MKLDNN backend](notes/mkldnn.html#bfloat16-bf16-on-mkldnn-backend)[Modules](notes/modules.html)[MPS backend](notes/mps.html)[Multiprocessing best practices](notes/multiprocessing.html)[Numerical accuracy](notes/numerical_accuracy.html)[Out Notes](notes/out.html)[Reproducibility](notes/randomness.html)[Serialization semantics](notes/serialization.html)[Windows FAQ](notes/windows.html)

[Community](community/index.html)

---

## Source: https://pytorch.org/pytorch-domains

#### torchrl

torchrl is an open-source, Python-first Reinforcement Learning library for PyTorch with a focus on high modularity and good runtime performance, providing low and high-level RL abstractions and reusable functionals for cost functions, returns, and data processing.

---

## Source: https://pytorch.org/blog/

Flight Recorder: A New Lens for Understanding NCCL Watchdog Timeouts Blog Flight Recorder: A New Lens for Understanding NCCL Watchdog Timeouts If you’ve ever trained a large AI model and had it fail with an error…Phillip Liu, Uttam Thakore, Junjie Wang, Justin YangMarch 25, 2026

Enabling Up to 41% Faster Pre-training: MXFP8 and DeepEP for DeepSeek-V3 on B200 with TorchTitan Blog Enabling Up to 41% Faster Pre-training: MXFP8 and DeepEP for DeepSeek-V3 on B200 with TorchTitan TL;DR In a joint effort between PyTorch and Nebius, we enabled training DeepSeek-V3 Mixture-of-Experts models…PyTorch and Nebius (Hooman Ramezani) TeamsMarch 25, 2026

PyTorch 2.11 Release Blog Blog PyTorch 2.11 Release Blog We are excited to announce the release of PyTorch® 2.11 (release notes)! The PyTorch 2.11…PyTorch FoundationMarch 23, 2026

PyTorch 2.10+TorchAO: Powering AIPC scenarios on Intel® Core™ Ultra Series 3 processors Blog PyTorch 2.10+TorchAO: Powering AIPC scenarios on Intel® Core™ Ultra Series 3 processors Overview We are excited to introduce the highlights of Intel® Core™ Ultra Series 3 processors…Intel PyTorch and Client AI SW teamMarch 20, 2026

TorchSpec: Speculative Decoding Training at Scale Blog TorchSpec: Speculative Decoding Training at Scale Introduction Over the past year, large language models have rapidly expanded in both scale and…TorchSpec team, Mooncake teamMarch 19, 2026

Generalized Dot-Product Attention: Tackling Real-World Challenges in GPU Training Kernels Blog Generalized Dot-Product Attention: Tackling Real-World Challenges in GPU Training Kernels In this blog post, we present the kernel design of Generalized Dot-Product Attention (GDPA), a…Jackie (Jiaqi) Xu, Chao Chen, Shuqi Yang, Markus Hoehnerbach, Xiaoyi (Leo) Liu, Ted Zadouri‡, Dev (Devashish) Shankar, Jacky Zhou, Hongtao Yu, Manman Ren, Han Xu, Chunzhi Yang†, Jade Nie†, Haoyu Zhang, Huayu Li, Michael Shu, Musharaf Sultan, Max Leung, John Bocharov, Tri Dao‡March 18, 2026

Building Voice Agents with ExecuTorch: A Cross-Platform Foundation for On-Device Audio Blog Building Voice Agents with ExecuTorch: A Cross-Platform Foundation for On-Device Audio TL;DR Open source voice models are proliferating, but there's no unified native inference platform for…Mergen Nachin, Manuel Candales, Mengwei Liu, Jacob Szwejbka, Young Han, Songhao Jia, Stephen Jia, Scott Roy, Alban Desmaison, Hansong Zhang from PyTorch Team at Meta; Yagil Burowski, Matt Clayton, Will Burford from LM StudioMarch 15, 2026

MXFP8 Training for MoEs: 1.3x training speedup vs BF16 for Llama4 Scout on GB200 cluster using TorchAO and TorchTitan Blog MXFP8 Training for MoEs: 1.3x training speedup vs BF16 for Llama4 Scout on GB200 cluster using TorchAO and TorchTitan TL;DR We recently demonstrated a +30.2% training speedup for Llama4 Scout with equivalent convergence to…Daniel Vega-Myhre,Matthias Reso,Vasiliy Kuznetsov,Driss Guessous,Simon Fan, Alireza Shamsoshoara, Chinmay BaikarMarch 12, 2026

PyTorch at NVIDIA GTC 2026: Join Us in San Jose! Blog PyTorch at NVIDIA GTC 2026: Join Us in San Jose! We're excited to announce that PyTorch will have a strong presence at NVIDIA GTC 2026,…Clement Anthonioz Blanc, Chris Gottbrath, PyTorch Team at MetaMarch 9, 2026

KernelAgent: Hardware-Guided GPU Kernel Optimization via Multi-Agent Orchestration Blog KernelAgent: Hardware-Guided GPU Kernel Optimization via Multi-Agent Orchestration Summary Recently, the PyTorch team released KernelAgent, an open agentic system achieving 100% correctness across…Kaiming Cheng, Laura Wang, Jack Khuu, Mark Saroufim, Wenyuan Chi, Jiannan Wang, and Joe IsaacsonMarch 6, 2026

FlexAttention + FlashAttention-4: Fast and Flexible Blog FlexAttention + FlashAttention-4: Fast and Flexible TL;DR: On Hopper and Blackwell GPUs, FlexAttention now has a FlashAttention-4 backend. We added support…Driss Guessous, Reuben Stern, Markus Hoehnerbach, Fung Xie, Ted Zadouri, Jay Shah, Tri DaoMarch 5, 2026

Deploying PyTorch Models to the Micro-Edge with ExecuTorch and Arm Blog Deploying PyTorch Models to the Micro-Edge with ExecuTorch and Arm The world of AI is expanding beyond the cloud, reaching devices that fit in the…Dominica Abena Oforiwaa AmanfoMarch 5, 2026

Quantization-Aware Training in TorchAO (II) Blog Quantization-Aware Training in TorchAO (II) In our previous Quantization-Aware Training (QAT) blog, we introduced the initial QAT flow in TorchAO…Meta: Andrew Or, Lisa Jin, Scott Roy, Jerry Zhang, Mergen Nachin, Supriya Rao, Lin Xiao Unsloth: Daniel Han Axolotl: Salman MohammadiMarch 4, 2026

Enhancing Multimodal Training and Memory Efficiency with DeepSpeed Blog Enhancing Multimodal Training and Memory Efficiency with DeepSpeed Overview This blog walks through two crucial DeepSpeed updates: (1) a PyTorch-identical backward API that…Masahiro Tanaka (Anyscale) and Olatunji Ruwase (Snowflake)February 24, 2026

Accelerating Autotuning in Helion with Bayesian Optimization Blog Accelerating Autotuning in Helion with Bayesian Optimization Introduction As introduced in a previous blog post, Helion is a high-level DSL that empowers…Ethan Che, Oguz Ulgen, Max Balandat, Jongsok Choi, Jason AnselFebruary 24, 2026

Pyrefly Now Type Checks PyTorch Blog Pyrefly Now Type Checks PyTorch We’re excited to share that PyTorch now leverages Pyrefly to power type checking across our…PyTorch and Pyrefly Teams at MetaFebruary 12, 2026

Accelerating Mamba2 with Kernel Fusion Blog Accelerating Mamba2 with Kernel Fusion Summary In this post, we discuss how we optimized the Mamba-2 State-Space Dual (SSD) module…Rishi Astra, Tri Dao, Adnan HoqueFebruary 6, 2026

Some Matrix Multiplication Engines Are Not As Accurate As We Thought Blog Some Matrix Multiplication Engines Are Not As Accurate As We Thought What is an accumulator in an accelerator's GEMM engine and why does it matter? GPUs…Chi-Chun (Charlie) Liu, Monodeep Kar, Naigang Wang, Raghu Kiran Ganti, Mudhakar SrivatsaFebruary 6, 2026

Building Highly Efficient Inference System for Recommenders Using PyTorch Blog Building Highly Efficient Inference System for Recommenders Using PyTorch Why Choose PyTorch for Recommendation System PyTorch has emerged as the de facto framework in…Lu Fang, Shiyan Deng, Hongyi Jia, Huamin Li, Ilina Mitra, Sheng Qin, Zhengkai Zhang, Zhuoran Zhao, Zinnia ZhengFebruary 5, 2026

Portable Paged Attention in Helion Blog Portable Paged Attention in Helion Recently, the PyTorch team released Helion, a new domain-specific and PyTorch-based language to make the…Burkhard Ringlein (IBM Research) and the vLLM Team at IBM ResearchFebruary 3, 2026

---

## Source: https://pytorch.org/community-blog

Flight Recorder: A New Lens for Understanding NCCL Watchdog Timeouts Blog Flight Recorder: A New Lens for Understanding NCCL Watchdog Timeouts If you’ve ever trained a large AI model and had it fail with an error…Phillip Liu, Uttam Thakore, Junjie Wang, Justin YangMarch 25, 2026

Enabling Up to 41% Faster Pre-training: MXFP8 and DeepEP for DeepSeek-V3 on B200 with TorchTitan Blog Enabling Up to 41% Faster Pre-training: MXFP8 and DeepEP for DeepSeek-V3 on B200 with TorchTitan TL;DR In a joint effort between PyTorch and Nebius, we enabled training DeepSeek-V3 Mixture-of-Experts models…PyTorch and Nebius (Hooman Ramezani) TeamsMarch 25, 2026

PyTorch 2.11 Release Blog Blog PyTorch 2.11 Release Blog We are excited to announce the release of PyTorch® 2.11 (release notes)! The PyTorch 2.11…PyTorch FoundationMarch 23, 2026

PyTorch 2.10+TorchAO: Powering AIPC scenarios on Intel® Core™ Ultra Series 3 processors Blog PyTorch 2.10+TorchAO: Powering AIPC scenarios on Intel® Core™ Ultra Series 3 processors Overview We are excited to introduce the highlights of Intel® Core™ Ultra Series 3 processors…Intel PyTorch and Client AI SW teamMarch 20, 2026

TorchSpec: Speculative Decoding Training at Scale Blog TorchSpec: Speculative Decoding Training at Scale Introduction Over the past year, large language models have rapidly expanded in both scale and…TorchSpec team, Mooncake teamMarch 19, 2026

Generalized Dot-Product Attention: Tackling Real-World Challenges in GPU Training Kernels Blog Generalized Dot-Product Attention: Tackling Real-World Challenges in GPU Training Kernels In this blog post, we present the kernel design of Generalized Dot-Product Attention (GDPA), a…Jackie (Jiaqi) Xu, Chao Chen, Shuqi Yang, Markus Hoehnerbach, Xiaoyi (Leo) Liu, Ted Zadouri‡, Dev (Devashish) Shankar, Jacky Zhou, Hongtao Yu, Manman Ren, Han Xu, Chunzhi Yang†, Jade Nie†, Haoyu Zhang, Huayu Li, Michael Shu, Musharaf Sultan, Max Leung, John Bocharov, Tri Dao‡March 18, 2026

Building Voice Agents with ExecuTorch: A Cross-Platform Foundation for On-Device Audio Blog Building Voice Agents with ExecuTorch: A Cross-Platform Foundation for On-Device Audio TL;DR Open source voice models are proliferating, but there's no unified native inference platform for…Mergen Nachin, Manuel Candales, Mengwei Liu, Jacob Szwejbka, Young Han, Songhao Jia, Stephen Jia, Scott Roy, Alban Desmaison, Hansong Zhang from PyTorch Team at Meta; Yagil Burowski, Matt Clayton, Will Burford from LM StudioMarch 15, 2026

MXFP8 Training for MoEs: 1.3x training speedup vs BF16 for Llama4 Scout on GB200 cluster using TorchAO and TorchTitan Blog MXFP8 Training for MoEs: 1.3x training speedup vs BF16 for Llama4 Scout on GB200 cluster using TorchAO and TorchTitan TL;DR We recently demonstrated a +30.2% training speedup for Llama4 Scout with equivalent convergence to…Daniel Vega-Myhre,Matthias Reso,Vasiliy Kuznetsov,Driss Guessous,Simon Fan, Alireza Shamsoshoara, Chinmay BaikarMarch 12, 2026

PyTorch at NVIDIA GTC 2026: Join Us in San Jose! Blog PyTorch at NVIDIA GTC 2026: Join Us in San Jose! We're excited to announce that PyTorch will have a strong presence at NVIDIA GTC 2026,…Clement Anthonioz Blanc, Chris Gottbrath, PyTorch Team at MetaMarch 9, 2026

KernelAgent: Hardware-Guided GPU Kernel Optimization via Multi-Agent Orchestration Blog KernelAgent: Hardware-Guided GPU Kernel Optimization via Multi-Agent Orchestration Summary Recently, the PyTorch team released KernelAgent, an open agentic system achieving 100% correctness across…Kaiming Cheng, Laura Wang, Jack Khuu, Mark Saroufim, Wenyuan Chi, Jiannan Wang, and Joe IsaacsonMarch 6, 2026

FlexAttention + FlashAttention-4: Fast and Flexible Blog FlexAttention + FlashAttention-4: Fast and Flexible TL;DR: On Hopper and Blackwell GPUs, FlexAttention now has a FlashAttention-4 backend. We added support…Driss Guessous, Reuben Stern, Markus Hoehnerbach, Fung Xie, Ted Zadouri, Jay Shah, Tri DaoMarch 5, 2026

Deploying PyTorch Models to the Micro-Edge with ExecuTorch and Arm Blog Deploying PyTorch Models to the Micro-Edge with ExecuTorch and Arm The world of AI is expanding beyond the cloud, reaching devices that fit in the…Dominica Abena Oforiwaa AmanfoMarch 5, 2026

Quantization-Aware Training in TorchAO (II) Blog Quantization-Aware Training in TorchAO (II) In our previous Quantization-Aware Training (QAT) blog, we introduced the initial QAT flow in TorchAO…Meta: Andrew Or, Lisa Jin, Scott Roy, Jerry Zhang, Mergen Nachin, Supriya Rao, Lin Xiao Unsloth: Daniel Han Axolotl: Salman MohammadiMarch 4, 2026

Enhancing Multimodal Training and Memory Efficiency with DeepSpeed Blog Enhancing Multimodal Training and Memory Efficiency with DeepSpeed Overview This blog walks through two crucial DeepSpeed updates: (1) a PyTorch-identical backward API that…Masahiro Tanaka (Anyscale) and Olatunji Ruwase (Snowflake)February 24, 2026

Accelerating Autotuning in Helion with Bayesian Optimization Blog Accelerating Autotuning in Helion with Bayesian Optimization Introduction As introduced in a previous blog post, Helion is a high-level DSL that empowers…Ethan Che, Oguz Ulgen, Max Balandat, Jongsok Choi, Jason AnselFebruary 24, 2026

Pyrefly Now Type Checks PyTorch Blog Pyrefly Now Type Checks PyTorch We’re excited to share that PyTorch now leverages Pyrefly to power type checking across our…PyTorch and Pyrefly Teams at MetaFebruary 12, 2026

Accelerating Mamba2 with Kernel Fusion Blog Accelerating Mamba2 with Kernel Fusion Summary In this post, we discuss how we optimized the Mamba-2 State-Space Dual (SSD) module…Rishi Astra, Tri Dao, Adnan HoqueFebruary 6, 2026

Some Matrix Multiplication Engines Are Not As Accurate As We Thought Blog Some Matrix Multiplication Engines Are Not As Accurate As We Thought What is an accumulator in an accelerator's GEMM engine and why does it matter? GPUs…Chi-Chun (Charlie) Liu, Monodeep Kar, Naigang Wang, Raghu Kiran Ganti, Mudhakar SrivatsaFebruary 6, 2026

Building Highly Efficient Inference System for Recommenders Using PyTorch Blog Building Highly Efficient Inference System for Recommenders Using PyTorch Why Choose PyTorch for Recommendation System PyTorch has emerged as the de facto framework in…Lu Fang, Shiyan Deng, Hongyi Jia, Huamin Li, Ilina Mitra, Sheng Qin, Zhengkai Zhang, Zhuoran Zhao, Zinnia ZhengFebruary 5, 2026

Portable Paged Attention in Helion Blog Portable Paged Attention in Helion Recently, the PyTorch team released Helion, a new domain-specific and PyTorch-based language to make the…Burkhard Ringlein (IBM Research) and the vLLM Team at IBM ResearchFebruary 3, 2026

---

## Source: https://pytorch.org/community-stories

May 14, 2025 In [Energy](https://pytorch.org/blog/tag/energy/), [PyTorch](https://pytorch.org/blog/tag/pytorch/)

[How OpenSynth Uses PyTorch to Accelerate Compute for Energy Modelling Applications](https://pytorch.org/blog/how-opensynth-uses-pytorch-to-accelerate-compute-for-energy-modelling-applications/)

OpenSynth has recently leveraged PyTorch to improve the experience of its users and community. OpenSynth is an open source community hosted by LF Energy that is democratising access to synthetic energy demand data. Access to smart meter data is essential to rapid and successful energy transitions. Researchers, modelers and policymakers…

May 1, 2025 In [Geospatial AI](https://pytorch.org/blog/tag/geospatial-ai/), [PyTorch](https://pytorch.org/blog/tag/pytorch/)

[How IBM Research Uses PyTorch and TerraTorch to Make Geospatial Computer Vision Accessible for Everyone](https://pytorch.org/blog/how-ibm-uses-pt-terratorch/)

Earth Observation-based analytics are becoming essential for understanding our planet — from monitoring deforestation to tracking urban development and analyzing the impacts of climate change. However, the coding and deep learning skills for applying AI models to satellite imagery and earth observation data has traditionally been a major barrier for…

Jan 24, 2025 In [Gaming](https://pytorch.org/blog/tag/gaming/), [PyTorch](https://pytorch.org/blog/tag/pytorch/)

[How Intel Uses PyTorch to Empower Generative AI through Intel Arc GPUs](https://pytorch.org/blog/how-intel-uses-pytorch-to-empower-generative-ai-through-intel-arc-gpus/)

Intel has long been at the forefront of technological innovation, and its recent venture into Generative AI (GenAI) solutions is no exception. With the rise of AI-powered gaming experiences, Intel sought to deliver an accessible and intuitive GenAI inferencing solution tailored for AI PCs powered by Intel’s latest GPUs. By…

Sep 27, 2024 In [Research](https://pytorch.org/blog/tag/research/)

[Using PyTorch for Monocular Depth Estimation Webinar](https://www.youtube.com/watch?v=xf2QgioY370)

In this webinar, Bob Chesebrough of Intel guides you through the steps he took to create a clipped image with background clutter removed from the image. He accomplished this using monocular depth estimation with PyTorch. This could potentially be used to automate structure from motion and other image-related tasks where…

May 25, 2024 In [Education](https://pytorch.org/blog/tag/education/)

[AI Helps Duolingo Personalize Language Learning](https://aws.amazon.com/machine-learning/customers/innovators/duolingo/)

Learning a foreign language was probably one of your goals last year. And the year before, and the year before that. Like gym memberships, our best intentions often don’t survive very long. Aside from the time required to achieve proficiency with a new language, most people struggle with traditional approaches…

Oct 11, 2023 In [Technology](https://pytorch.org/blog/tag/technology/)

[ML Model Server Resource Saving – Transition From High-Cost GPUs to Intel CPUs and oneAPI powered Software with performance](https://pytorch.org/blog/ml-model-server-resource-saving/)

Here, We will be sharing our experience in moving AI workloads from our GPU servers to our Intel CPU servers without any performance or quality degradation, and saving annual costs of approximately 340 thousand U.S. Dollar (refer to the Conclusion) in the process.

Mar 9, 2023 In [Technology](https://pytorch.org/blog/tag/technology/)

[Axon offers technology boost for public safety with in-car Automated License Plate Recognition on Azure](https://www.microsoft.com/en/customers/story/1610624764549732009-axon-partner-professional-services-azure)

Axon, a technology leader in public safety, developed AI technology to add cutting-edge license plate recognition capabilities to its in-car camera products, which now can identify plates for vehicles of interest and provide law enforcement with proactive notifications and alerts. Axon AI scientists and engineers chose Microsoft Azure infrastructure as…

Feb 21, 2023 In [Healthcare](https://pytorch.org/blog/tag/healthcare/)

[HippoScreen Improves AI Performance by 2.4x with oneAPI Tools](https://www.intel.com/content/www/us/en/developer/articles/case-study/hipposcreen-boosts-ai-performance-2-4x-with-oneapi.html?__hstc=132719121.79047e7759b3443b2a0adad08cefef2e.1690914491749.1739154032649.1739162850489.450&__hssc=132719121.3.1739162850489&__hsfp=2349570600)

The Taiwan-based neurotechnology startup used tools and frameworks in the Intel® oneAPI Base and AI Analytics Toolkits to the improve efficiency and build times of deep-learning models used in its Brain Waves AI system. As a result, HippoScreen is able to broaden the system’s applications to a wider range of…

Feb 2, 2023 In [Aerospace](https://pytorch.org/blog/tag/aerospace/)

[NASA and IBM to Speed AI Creation with New Foundation Models](https://thenewstack.io/nasa-and-ibm-to-speed-ai-creation-with-new-foundation-models/)

NASA and IBM are working together to create foundation models based on NASA’s data sets — including geospatial data — with the goal of accelerating the creation of AI models.

Jan 23, 2023 In [Retail](https://pytorch.org/blog/tag/retail/)

[Search Model Serving Using PyTorch and TorchServe](https://medium.com/walmartglobaltech/search-model-serving-using-pytorch-and-torchserve-6caf9d1c5f4d)

Walmart Search has embarked on the journey of adopting Deep Learning in the search ecosystem to improve search relevance. For our pilot use case, we served the computationally intensive Bert Base model at runtime with an objective to achieve low latency and high throughput.

---

## Source: https://pytorch.org/events

####
[
OpenEnv AI Hackathon ](https://pytorch.org/event/openenv-ai-hackathon/)

Introducing India’s first OpenEnv AI Hackathon, hosted by Meta in collaboration with Hugging Face and PyTorch. This initiative brings together developers across the country to build what powers the next...

---

## Source: https://pytorch.org/newsletter

## Newsletter Sign Up

Subscribe to our monthly newsletter to get the latest updates, event info, and community news from the PyTorch Foundation in your inbox.

Subscribe to our monthly newsletter to get the latest updates, event info, and community news from the PyTorch Foundation in your inbox.

Join the contributor’s discussion forum to learn and collaborate on the latest development across PyTorch

---

## Source: https://pytorch.org/foundation

## Accelerating Open Source AI

Welcome to the PyTorch Foundation, a vibrant, community-driven hub for open source AI. Developers, researchers, and industry pioneers collaborate here to advance open source AI and PyTorch Foundation projects.

From cutting-edge development to production-ready tools and libraries, the PyTorch Foundation thrives through transparent collaboration and collective innovation. As part of the Linux Foundation, we host global events, deliver specialized training, support research, and provide resources to accelerate your AI journey. Whether you are contributing code, sharing your expertise, or deploying real-world AI solutions, the PyTorch Foundation actively empowers you to shape the future of accessible, impactful, and sustainable open source AI.

## Our Guiding Principles

Our mission is to drive the adoption of AI and deep learning by supporting an open, vendor-neutral ecosystem built around PyTorch. By making state-of-the-art tools and libraries accessible to everyone, we aim to democratize innovation in AI and ML. Learn more about the mission and values that guide us in our [PyTorch Foundation Principles](/wp-content/uploads/2024/11/pytorch-foundation-principles.pdf).

## PyTorch Members

## Our Governance

The PyTorch Foundation’s Governing Board oversees the Foundation’s activities according to its Guiding Principles and the [PyTorch Foundation Charter](http://charter.pytorch.org).

The [PyTorch Foundation Code of Conduct](https://pytorch.org/code-of-conduct) details our commitment to fostering an inclusive, welcoming, and safe environment for everyone involved in the PyTorch Foundation community.

The technical governance structure for the PyTorch open source project is defined by the PyTorch maintainers and is available on our [PyTorch Technical Governance page](https://pytorch.org/docs/main/community/governance.html).

## How to Get Involved

New to the PyTorch Foundation? Check out our guide to [getting started with the PyTorch Foundation](https://pytorch.org/new) or join the PyTorch [developer](https://pytorch.org/#community-module) or [user](https://discuss.pytorch.org/) community to contribute, learn, and get your questions answered.

## Get in Touch

The success of PyTorch is only possible with the contributions and support of our developer community and member companies. If you would like to learn how you can collaborate with your peers in the PyTorch Foundation, and would like to have a conversation with a PyTorch Foundation representative, please fill out this form.

**Note:** for all PyTorch **technical questions** please go to **discuss.pytorch.org**

---

## Source: https://pytorch.org/governing-board

### Andrew Wafaa

#### Arm

#### GB Chair & TAC Vice Chair

### Andrew Wafaa

Andrew is part of Arm’s Strategy & Ecosystem and Developer platforms leadership team, heading up Arm’s Open Source Office and is responsible for Arm’s relationship and engagements with software communities. With over 25 years of deep engagement with open source communities under a variety of employers, through the years he has held various positions with a variety of projects and foundations. Currently he is the Chair of the Yocto Project and sits on the Board of the PyTorch Foundation, FreeBSD Foundation, Xen Project and on the TSC/TAC/SC of PyTorch, Zephyr, UXLFoundation. He has previously served on the Board of the Rust Foundation, OpenUK and openSUSE Project. To support his work with the various communities, Andrew is often at most of the open source events that are held globally.


### Ankit Patel

#### NVIDIA

#### Senior Director

### Ankit Patel

#### Senior Director

Ankit Patel is a senior director at NVIDIA, leading developer engagement for SDKs, APIs, and tools. He joined NVIDIA in 2011, transitioning from GPU product manager to software product management in virtualization, ray tracing, and AI. Previously, he managed video editing and live production products at Matrox Video and Blackmagic Design. Ankit holds a bachelor’s degree in computer science from Concordia University and an MBA from Cornell University.


### Brian Granger

#### Amazon Web Services

#### Senior Principal Technologist

### Brian Granger

#### Senior Principal Technologist

Brian Granger is a Senior Principal Technologist at Amazon Web Services and a professor of physics and data science at Cal Poly State University in San Luis Obispo, CA. He works at the intersection of UX design and engineering on tools for scientific computing, data science, machine learning, and data visualization. Brian is a co-founder and leader of Project Jupyter, co-founder of the Altair project for statistical visualization, and creator of the PyZMQ project for ZMQ-based message passing in Python.


### Dwarak Rajagopal

#### Snowflake

#### Vice President of AI Engineering

### Dwarak Rajagopal

#### Vice President of AI Engineering

Dwarak Rajagopal is a distinguished technology leader with over two decades of experience at some of the world’s most innovative companies, including Google, Meta, Uber, Apple, and AMD. As Vice President of AI Engineering at Snowflake, Dwarak oversees the AI and ML engineering organizations, helping drive innovation across Snowflake Cortex AI, Snowflake’s AI Research Team, and open source offerings. He previously served as Senior Engineering Director at Google, where he spearheaded the AI Frameworks and On-Device Machine Learning teams, driving cutting-edge advancements in AI and large language models (LLMs) to enhance efficiency across server and mobile platforms. Earlier in his career, Dwarak led Meta’s PyTorch Core Frameworks team, bridging the gap between AI research and production. His career also includes developing autonomous driving software at Uber, pioneering graphics technology at Apple, and shaping compiler innovations at AMD.

Dwarak is passionate about democratizing AI through open source initiatives and ensuring the ethical advancement of technology. His visionary leadership continues to shape the future of AI and empower global innovation.


### Fan Zhao

#### Intel

#### Senior Director AI Frameworks

### Fan Zhao

#### Senior Director AI Frameworks

Fan Zhao is a Senior Director of the AI Frameworks team at Intel. She and her team focused on the optimization of PyTorch, vLLM, SGLang, as well as other inference serving and fine-tuning stacks. With over 20 years of experience in the technology industry and a long-standing commitment to open-source ecosystems, Fan has been a driving force in democratizing AI hardware and software.


### Fred Li

#### Huawei

#### General Manager of Open Source Development

### Fred Li

#### General Manager of Open Source Development

Fred Li, General Manager of Open Source Development at Huawei’s Computing Product Line, brings over 20 years of technology and open-source experience since 2015. Serving as the platinum director of OpenStack Foundation and representing Huawei in PyTorch Foundation and LF AI & Data, he’s a pivotal figure in open source. Fred initiated the openEuler community in 2019, nurturing multiple open-source communities with thousands of engineers and millions of users. With expertise in IT product development, project management, and open-source strategy, Fred is committed to global open-source advocacy.


### Joe Spisak

#### Meta

### Joe Spisak

Joseph Spisak is the Director of Product Management for AI at Meta. A veteran of the AI space with over 10 years experience, Joe led product teams at Meta/Facebook, Google and Amazon where he focused on open source AI, open science and building developer tools such as PyTorch to help the community scale up AI in an open and collaborative way. As the leader of product for PyTorch, he and the team built an amazing platform and community that made PyTorch the leading open source AI development framework in the industry and took it to the Linux Foundation. Joe is also an angel advisor to companies like Anthropic, Lastmile.AI (former FB), EvolutionaryScale (former FB), Udacity, Lightning.AI, and others.


### Luca Antiga

#### Lightning AI

#### CTO

#### TAC Chair

### Luca Antiga

#### CTO

Luca Antiga is the CTO at Lightning AI. He is an early contributor to PyTorch core and co-authored “Deep Learning with PyTorch” (published by Manning). He started his journey as a researcher in Bioengineering, and later co-founded Orobix, a company focused on building and deploying AI in production settings.


### Lysandre Debut

#### Hugging Face

#### Head of Open Source

#### Gold Member Representative

### Lysandre Debut

#### Head of Open Source

Lysandre is the Head of Open Source at Hugging Face. Lysandre has been at Hugging Face since the company’s pivot to open-source, and was the first engineer to focus entirely on the open-source mission. Now leading the open-source part of the organization, Lysandre remains technically involved by being a core maintainer of the Transformers library.


### Niles Burbank

#### AMD

#### Director of Product Management

### Niles Burbank

#### Director of Product Management

Niles Burbank is Director of Product Management at AMD, responsible for a family of data center GPU products. Based in Markham, Canada, he has been involved in the computer hardware industry since 1995 in a range of technical and management roles. Niles shares AMD’s passion for working together with the wider community to deliver the software and hardware tools that will advance AI. He holds an MASc in Electrical Engineering from the University of Toronto.


### Raghu Ganti

#### IBM

#### Distinguished Engineer

### Raghu Ganti

#### Distinguished Engineer

Raghu Ganti, a Distinguished Engineer at IBM T. J. Watson Research Center, leads the development of tuning and training stack for LLMs on IBM’s Hybrid Cloud platform. He has extensive expertise in large scale distributed algorithms and his work on spatiotemporal data analysis has been included in 15+ IBM products.

---

## Source: https://pytorch.org/credits

To support this, PyTorch has established a program that enables organizations to contribute either cloud credits or financial donations directly towards maintaining and expanding our Continuous Integration (CI) infrastructure and other foundation-hosted project infrastructure. Contributions from organizations like AWS have already provided cloud credits, demonstrating a clear commitment to the success and sustainability of the PyTorch’ Foundation’s hosted projects. Many organizations continue to sponsor PyTorch projects, recognizing that supporting foundational infrastructure contributes directly to their own business growth and success.

## Sponsors

Organizations can get started sponsoring cloud credits today.

### Thank you to the following PyTorch Foundation supporters for supporting our CI infrastructure and ongoing development.

## Advance the ecosystem

Join the PyTorch Credits program and benefit in the following ways:

- Highlight your company participation in the ecosystem
- Help shape the future of cloud native
- Establish your company as a thought leader in the space
- Collaborate with various companies and organizations — improving open source technologies

### Cloud credit levels + benefits

### Supporter

Starting benefits

- Coordinated PyTorch blog
- Appropriate placement on the PyTorch website

### $250K

### Advocate

Everything included in Supporter benefits, plus:

- Bonus online program slot (live webinar, live stream, or on-demand webinar – your choice) to highlight your participation in the program

### $500K

### Champion

Everything included in Advocate benefits, plus:

- Top placement on the PyTorch website with an explanation of the offering
- PyTorch marketing campaign to drive awareness towards the donation

– Coordinated blog post and media outreach

– Social media shout out to thank your company for their contribution

– Mention in the PyTorch keynote at the next PyTorch Conference - PyTorch will set up resource pooling and CI capacity for self-service of your offering

### $1m+

## How it works

Step 1

### Decide how to donate

Cloud credits can be donated via cash or credit:

- Credit, for products a sponsor usually sells as a service to the public
- Cash, to be earmarked for paying for services when we run out of donated credits

Step 2

### Determine the technical points of contact

Projects often need help utilizing credits. We ask that you provide a technical support resource with a defined SLA.

Step 3

### Projects benefit from your donation

After getting set up with PyTorch, projects can access these credits via a curated self-service portal, managed by PyTorch.

[JOIN THE PYTORCH CLOUD CREDITS PROGRAM](/credits/sponsor)

---

## Source: https://pytorch.org/tac

The TAC holds open meetings once a month that anyone in the community can attend. The committee provides thought leadership on technical topics, knowledge sharing, and a forum to discuss issues with other technical experts in the community.

## Resources


### Andrew Wafaa

#### Arm

#### GB Chair & TAC Vice Chair

### Andrew Wafaa

Andrew is part of Arm’s Strategy & Ecosystem and Developer platforms leadership team, heading up Arm’s Open Source Office and is responsible for Arm’s relationship and engagements with software communities. With over 25 years of deep engagement with open source communities under a variety of employers, through the years he has held various positions with a variety of projects and foundations. Currently he is the Chair of the Yocto Project and sits on the Board of the PyTorch Foundation, FreeBSD Foundation, Xen Project and on the TSC/TAC/SC of PyTorch, Zephyr, UXLFoundation. He has previously served on the Board of the Rust Foundation, OpenUK and openSUSE Project. To support his work with the various communities, Andrew is often at most of the open source events that are held globally.


### Jeff Daily

#### AMD

#### Fellow

### Jeff Daily

#### Fellow

Jeff Daily is a Fellow at AMD and the chief architect of the Machine Learning Software Engineering group supporting ML frameworks such as PyTorch and onnxruntime on AMD GPUs. He enjoys delivering open source software to answer the challenges of the rapidly-changing ML landscape. For over five years, he has contributed to the PyTorch core as well as its extension libraries. His sustained contributions earned him the first ever Linux Foundation PyTorch Award “for excellence in long-term contributions across all PyTorch modalities.” Though he has not achieved the status of maintainer, Jeff is a trusted contributor. Jeff’s technical leadership is one of the reasons PyTorch runs out of the box without any code modifications on AMD GPUs. In addition to PyTorch technical contributions, Jeff is the AMD representative for the PyTorch Foundation’s Technical Advisory Committee.


### Luca Antiga

#### Lightning AI

#### CTO

#### TAC Chair

### Luca Antiga

#### CTO

Luca Antiga is the CTO at Lightning AI. He is an early contributor to PyTorch core and co-authored “Deep Learning with PyTorch” (published by Manning). He started his journey as a researcher in Bioengineering, and later co-founded Orobix, a company focused on building and deploying AI in production settings.


### Milos Puzovic

#### Arm

#### Technical Director

### Milos Puzovic

#### Technical Director

Milos Puzovic is Technical Director at Arm where he is working on accelerating machine learning frameworks such as PyTorch on AArch64. In the past, he worked on designing and developing infrastructure for rapid development and deployment to edge devices and cloud of novel neural models that were trained using semi-supervised approach. He also has interest in optimizing applications through hardware and software co-design by using machine learning, code generation, optimization and verification of high-level models for different types of architecture. Milos has PhD in Computer Science from University of Cambridge where his thesis was on hardware/software interface for dynamic multicore scheduling and BSc with First Class Honors in Joint Mathematics and Computer Science from Imperial College London.


### Olatunji Ruwase

#### Snowflake

#### DeepSpeed Project Representative

### Olatunji Ruwase

Olatunji (Tunji) Ruwase is a Principal Engineer at Snowflake, where he focuses on building high-performance AI infrastructure and systems for large-scale training and inference. Prior to joining Snowflake, he was a co-founder and lead of the DeepSpeed project at Microsoft, where his research and engineering contributions advanced the state of deep learning optimization across distributed training, inference, and hyperparameter tuning. His work has been deployed in key Microsoft products including Bing, Ads, HyperDrive, and Catapult. Tunji holds a PhD in Computer Science from Carnegie Mellon University and brings a deep background in compilers, operating systems, and hardware accelerators.


### Piotr Bialecki

#### NVIDIA

### Piotr Bialecki

Piotr joined PyTorch team at NVIDIA in 2019 and currently manages the team. He drives NVIDIA’s effort in maintaining and advancing PyTorch’s CUDA backend and received the PyTorch SUPERHERO award in 2023 for his community contributions especially in the PyTorch discussion board. As a Core Maintainer, he is also focussed on PyTorch’s long-term vision and development.


### Shauheen Zahirazami

#### AWS

#### Senior ML Engineering Manager

### Shauheen Zahirazami

#### Senior ML Engineering Manager


### Yikun Jiang

#### Huawei

#### Principal Engineer

### Yikun Jiang

#### Principal Engineer

Yikun Jiang is principal software engineer from Huawei computing opensource development team, working on multi-arch, heterogeneous hardware support and improvement of projects in computing area. He has more than 10 years experience in computing area, and leads an active and creative team in R&D under the principle of “upstream first”, which aims to make diverse computing power ubiquitous.

---

## Source: https://pytorch.org/staff

### Mark Collier

He/Him

#### Executive Director

### Mark Collier

He/Him#### Executive Director

Mark has a proven track record of fostering organizational growth in neighboring open source foundations. Mark co-founded the Open Stack Foundation (now OpenInfra Foundation), and has played a key role in the development and global success of OIF. Over the past 13 years, he established it as a leading cloud platform and one of the most dynamic projects in the history of open source computing. Since its modest beginnings under Mark’s leadership in 2012 OSF/OIF has expanded into a community of 8 platinum, 10 gold and 66 silver corporate members. Mark’s robust knowledge of AI, including a central role in shaping the definition of open source AI through the Open Source Initiative, makes him an ideal leader for LF AI & Data and the PyTorch Foundation.


### Meredith Roach

she/her

#### Membership Solutions

### Meredith Roach

she/her#### Membership Solutions

Meredith Roach (she/her) works on the Memberships team at The Linux Foundation, where she drives membership growth for the PyTorch Foundation. Prior to joining the Linux Foundation, she worked as a technical trainer and instructional designer in the software industry. She holds a B.A. in Organizational Development from Temple University, and when not at work, you can likely find her hiking and fishing in the mountains with her family.


### Grace Lucier

she/her

#### PR Manager

### Grace Lucier

she/her#### PR Manager

Grace Lucier (she/her) is a PR Manager at The Linux Foundation, where she drives media relations and strategy for the PyTorch Foundation, the OpenSearch Software Foundation and the Open Software Security Foundation, amongst other programs. Her background in communications, marketing and journalism informs her PR expertise. Prior to joining the Linux Foundation, she worked at two Boston-based PR agencies. She holds a B.A. in English and Philosophy from The College of the Holy Cross.


### Naomi Washington

she/her

#### Sr. Program Manager

### Naomi Washington

she/her#### Sr. Program Manager

Naomi is an accomplished professional with extensive experience in project and event management. A detail-oriented, innovative professional with 10+ years of experience in leading projects to successful completion and a performance history of amplifying efficiency and productivity.


### Jordan Conway

he/him

#### Senior Cloud Operations Engineer

### Jordan Conway

he/him#### Senior Cloud Operations Engineer

Jordan Conway is a Senior Cloud Operations Engineer at The Linux Foundation, mastering multi cloud environments and CI/CD workflows. He’s a skilled problem-solver with a passion for automation and Open Source technology. Jordan also brings a collaborative spirit and deep technical skills to his work. With experience that includes leadership roles in the Open Source Technology and Medical Imaging Technology industries, he’s a fast learner always exploring new tech.

When he’s not “brew installing” homebrew packages you can find him homebrewing beer with his wife and exploring the wilderness with his two daughters.


### Bazil Sterling

he/him

#### Communications and Marketing Associate

### Bazil Sterling

he/him#### Communications and Marketing Associate

Bazil Sterling (he/him) is a Communications and Marketing Associate at The Linux Foundation, where he drives marketing and communications efforts for key open source initiatives, including the PyTorch Foundation, LF Decentralized Trust, and DENT. With a background in journalism, public relations, marketing, and advertising, Bazil is a storyteller who crafts compelling narratives that elevate open source communities. He is particularly passionate about supporting projects advancing sustainability and open collaboration.


### Regina Nkenchor

she/her

#### Program Manager

### Regina Nkenchor

she/her#### Program Manager

Regina Nkenchor (she/her) is a Program Manager at the Linux Foundation, where she oversees high-impact projects, including PyTorch, the Civil Infrastructure Platform (CIP), and RISE. With over a decade of experience in the technology industry, Regina has successfully led digital transformation initiatives across sectors such as tax, finance, education, retail, and open source ecosystems.

Prior to joining the Linux Foundation, Regina served as a Software Engineer and as an Open Source Program Office (OSPO) Ambassador at IKEA.

Regina brings a multidisciplinary perspective to her work, combining technical expertise in software engineering with foundations in informatics, public administration, and law.

Outside of work, Regina enjoys traveling and connecting with new people.


### Thanh Ha

He/Him

#### Senior Cloud Operations Engineer

### Thanh Ha

He/Him#### Senior Cloud Operations Engineer

Thanh Ha is a Senior Cloud Operations Engineer at The Linux Foundation, working on the PyTorch CI infrastructure. A seasoned DevOps professional with over 15 years experience, Thanh excels in Infrastructure Optimization: Enhancing the backbone of software development for scalability and performance, Automation Mastery: Streamlining CI/CD pipelines to accelerate development cycles and ensure consistency, and Quality Assurance: Innovating QA and testing processes to deliver robust, high-quality software. With a passion for merging hands-on technical expertise with industry best practices, Thanh collaborates closely with development teams, driving technological advancements and mentoring emerging talent in the DevOps field.


### Deb Giles

She/Her

#### Director of Events

### Deb Giles

She/Her#### Director of Events

Deb Giles (she/her) is the Event Director for the Linux Foundation’s Collaborative Projects, where she oversees global events, including the PyTorch Conference. With over 15 years of experience in producing conferences, corporate meetings, and trade shows, Deb has worked across a wide range of industries including tech, gaming, and construction. She holds a Bachelor’s degree in Marketing from Azusa Pacific University. Based in Nashville, TN, Deb enjoys traveling, hiking, and spending time with her dog, Shadow, in her free time.


### Jennifer Bly

She/Her

#### Director of Marketing and Communications

### Jennifer Bly

She/Her#### Director of Marketing and Communications

Jennifer Bly (she/her) is Director of Marketing and Communications at the Linux Foundation where she leads marketing and communications for open source projects like the PyTorch Foundation, High Performance Software Foundation, OpenSSF, and Ultra Ethernet Consortium. She develops marketing strategies that encompass integrated campaigns with an emphasis on public relations, communications, social media engagement, content development, brand storytelling and more. Jennifer has a knack for making complex technical issues easy to understand in ways that motivate people to pay attention and take action. Before joining the Linux Foundation she was the External Relations Manager at the American Registry for Internet Numbers (ARIN), where she led the outreach team to increase the organization’s visibility in the internet community and develop strategic relationships that build customer growth and engagement. Jennifer earned her MA in Mass Communication from the University of Florida and Accreditation in Public Relations (APR) from the Public Relations Society of America (PRSA). Within PRSA she is active on the Executive Committee of the Technology Section. She is passionate about creating a better internet and enjoys getting the word out about people doing great work in the open source community.


### Matt White

He/Him

#### CTO

### Matt White

He/Him#### CTO

Matt White (he/him) is the CTO of the PyTorch Foundation and AgenticAI at the Linux Foundation. Matt is a distinguished expert in artificial intelligence and business, renowned for successfully deploying large-scale AI platforms across the telecom, gaming, media, and entertainment industries. With over two decades of experience, Matt has consistently demonstrated his ability to stay ahead of the curve in technological innovation, spearheading advancements in AI applications in diverse domains.

---

## Source: https://pytorch.org/contact-us

### NEED TECHNICAL SUPPORT?

Please visit [discuss.pytorch.org](https://discuss.pytorch.org/) for technical support issues, you will receive the fastest response for your issue. Thank you.

Please visit [discuss.pytorch.org](https://discuss.pytorch.org/) for technical support issues, you will receive the fastest response for your issue. Thank you.

---

## Source: https://pytorch.org/join

According to statistics from MIT Sloan, 75% of top executives believe AI will help their organizations grow and gain a competitive edge. Since 2020, there has been a 14X increase in the number of active AI startups, and venture capitalist-funded startups have increased by 6X. The PwC Global Artificial Intelligence Study indicates that AI has the potential to contribute $15.7 trillion to the global economy by 2030, with 45% of the total economic gains coming from product enhancements that stimulate consumer demand.

By joining the PyTorch Foundation, you can help build and shape the future of end-to-end machine learning frameworks alongside your industry peers. PyTorch offers a user-friendly front-end, distributed training, and an ecosystem of tools and libraries that enable fast, flexible experimentation and efficient production.

As a member of the PyTorch Foundation, you’ll have access to resources that allow you to be stewards of stable, secure, and long-lasting codebases. You can collaborate on training, local and regional events, open-source developer tooling, academic research, and guides to help new users and contributors have a productive experience.

## Apply for Membership Today

If your organization is interested in becoming a Member of the PyTorch Foundation, please complete the [Member Enrollment form](https://enrollment.lfx.linuxfoundation.org/?__hsfp=4098832003&__hssc=132719121.2.1717433164561&__hstc=132719121.a67b2c1b5a78c632faebc43c508dc604.1717433164561.1717433164561.1717433164561.1&project=pytorch) and designate someone with signature authority for your institution for the membership approval process.

Please note, membership is not required to participate in PyTorch as an individual contributor. You can join the community at any time and collaborate with others interested in the project.

[Apply for Membership](https://enrollment.lfx.linuxfoundation.org/?__hsfp=4098832003&__hssc=132719121.2.1717433164561&__hstc=132719121.a67b2c1b5a78c632faebc43c508dc604.1717433164561.1717433164561.1717433164561.1&project=pytorch)

*Are you a student interested in learning about PyTorch? Get Started!*

## Membership Benefits

### Insight

Gain technical traction and insight for your organization’s products by immersing your teams with other industry leaders.

### Influence

Influence technical priorities, approaches, and code and gain early access to technical deliverables in motion.

### Thought Leadership

Provide thought leadership and expand industry awareness as PyTorch amplifies member progress across the industry.

### Talent

Retain, attract, and increase engineering skills and employees and build your innovation partner network, supply chain, and customer pipeline.

### Community

Deepen your engagement and leadership in local and industry developer networks and conferences.

## Join the Membership that fits your goals

| Benefit | Platinum | Gold | Silver | Associate |
| Hold one (1) voting seat on PTF Governing Board & one (1) voting representative on TAC | ||||
| Appoint one (1) voting representative in any subcommittees including Marketing and Finance Committee | ||||
| Strategic direction on programs including Ambassador program and Training and Certification programs | ||||
| Ability to be elected to TAC Chair, vote on TAC matters including project approvals and act as Working Group lead | ||||
| Eligible to be nominated to hold a Governing Board voting seat (Gold=1:3 uncapped, Silver=1:10 capped at max 3) | ||||
| Eligible to be nominated to hold a TAC voting seat (Gold=1:3 uncapped) | ||||
| Ability to contribute infrastructure to support CI for PyTorch Foundation projects and participate in CI Infra working group | ||||
| Ability to donate cash or credits to support CI infrastructure | ||||
| Access OSPO and Academic Outreach | ||||
| Enjoy prominent placement in displays of membership levels including website, landscape and marketing materials | ||||
| Opportunity to participate in webinars and livestreams | ||||
| Issue a joint announcement with PTF upon membership | ||||
| Develop customized social media posts with PTF upon membership | ||||
| Opportunity to submit vendor-neutral content for the PTF blog | ||||
| Opportunity to publish technical case studies on PTF projects | ||||
| Opportunity to submit content to PTF newsletter | ||||
| Ability to display your logo on the PTF website and in marketing materials | ||||
| Opportunity to host PyTorch Day | ||||
| PyTorch Event Discounts: 3% discount on event sponsorships and 20% off employee registrations to eligble PTF events | ||||
| Receive discounts on PTF training courses | ||||
| Annual subscription granting access to our library of eLearning courses and certification exams. Each seat gets access to up to two certification exams per year along with unlimited learning. | 50 Vouchers | Ten (10) 50% Discount Vouchers | ||
| Platinum benefit vouchers can be used for either (1) a one-year subscription that includes unlimited e-learning, SkillCreds, and Microlearning content – and up to two certifications; OR (2) a 50% discount coupon off of a Guaranteed-to-run, instructor-led course. | ||||
| Annual Fee | $350,000 | $150,000 | LF Silver Membership +
|
Free: Limited to academic and nonprofit institutions |

## Questions? Contact Us

The success of PyTorch is only possible with the contributions and support of our developer community and member companies. To learn more about how you can join your industry peers in supporting PyTorch, or for any questions you may have, please fill out this form to be contacted by a PyTorch Foundation representative.

**Note:** for all PyTorch **technical questions** please go to **discuss.pytorch.org**

---

## Source: https://pytorch.org/vision/versions.html

PyTorch Documentation
Pick a version
main (unstable)
v0.26 (stable release)
v0.25
v0.24
v0.23
v0.22
v0.21
v0.20
v0.19
v0.18
v0.17
v0.16
v0.15
v0.14
v0.13
v0.12
v0.11.0
v0.10.0
v0.9.0
v0.8.1
You can view previous versions of the torchvision documentation
here
.