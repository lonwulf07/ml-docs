# Jax Documentation
> Scraped on: 2026-03-30 | Root Source: [https://jax.readthedocs.io/en/latest/](https://jax.readthedocs.io/en/latest/)



---

## Source: https://jax.readthedocs.io/en/latest/

# JAX: High performance array computing[#](#jax-high-performance-array-computing)

## High performance array computing

JAX is a Python library for accelerator-oriented array computation and program transformation, designed for high-performance numerical computing and large-scale machine learning.

JAX provides a familiar NumPy-style API for ease of adoption by researchers and engineers.

JAX includes composable function transformations for compilation, batching, automatic differentiation, and parallelization.

The same code executes on multiple backends, including CPU, GPU, & TPU

If you’re looking to use JAX to train neural networks, check out the [JAX AI
Stack](https://docs.jaxstack.ai/en/latest/getting_started.html)!

## Ecosystem[#](#ecosystem)

JAX itself is narrowly-scoped and focuses on efficient array operations & program transformations. Built around JAX is an evolving ecosystem of machine learning and numerical computing tools; the following is just a small sample of what is out there:

**Optimizers & solvers**

**Data loading**

**Probabilistic modeling**

Many more JAX-based libraries have been developed; the community-run [Awesome JAX](https://github.com/n2cholas/awesome-jax) page
maintains an up-to-date list.

---

## Source: https://jax.readthedocs.io/en/latest/installation.html

# Installation[#](#installation)

Using JAX requires installing two packages: `jax`

, which is pure Python and
cross-platform, and `jaxlib`

which contains compiled binaries, and requires
different builds for different operating systems and accelerators.

**Summary:** For most users, a typical JAX installation may look something like this:

**CPU-only (Linux/macOS/Windows)**pip install -U jax

**GPU (NVIDIA, CUDA 13)**pip install -U "jax[cuda13]"

**GPU (AMD, ROCm)**pip install -U "jax[rocm7-local]"

**TPU (Google Cloud TPU VM)**pip install -U "jax[tpu]"


## Supported platforms[#](#supported-platforms)

The table below shows all supported platforms and installation options. Check if your setup is supported; and if it says *“yes”* or *“experimental”*, then click on the corresponding link to learn how to install JAX in greater detail.

Linux, x86_64 |
Linux, aarch64 |
Mac, aarch64 |
Windows, x86_64 |
Windows WSL2, x86_64 |
|
|---|---|---|---|---|---|
CPU |
|||||
NVIDIA GPU |
n/a |
no |
|||
Google Cloud TPU |
n/a |
n/a |
n/a |
n/a |
|
AMD GPU |
no |
n/a |
no |
||
Apple GPU |
n/a |
no |
n/a |
n/a |
|
Intel GPU |
n/a |
n/a |
no |
no |

## CPU[#](#cpu)

### pip installation: CPU[#](#pip-installation-cpu)

Currently, the JAX team releases `jaxlib`

wheels for the following
operating systems and architectures:

Linux, x86_64

Linux, aarch64

macOS, Apple ARM-based

Windows, x86_64 (

*experimental*)

To install a CPU-only version of JAX, which might be useful for doing local development on a laptop, you can run:

```
pip install --upgrade pip
pip install --upgrade jax
```

On Windows, you may also need to install the
[Microsoft Visual Studio 2019 Redistributable](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)
if it is not already installed on your machine.

Other operating systems and architectures require building from source. Trying
to pip install on other operating systems and architectures may lead to `jaxlib`

not being installed alongside `jax`

, although `jax`

may successfully install
(but fail at runtime).

## NVIDIA GPU[#](#nvidia-gpu)

On CUDA 12, JAX supports NVIDIA GPUs that have SM version 5.2 (Maxwell) or newer. Note that Kepler-series GPUs are no longer supported by JAX since NVIDIA has dropped support for Kepler GPUs in its software. On CUDA 13, JAX supports NVIDIA GPUs that have SM version 7.5 or newer. NVIDIA dropped support for previous GPUs in CUDA 13.

You must first install the NVIDIA driver. You’re recommended to install the newest driver available from NVIDIA, but the driver version must be >= 525 for CUDA 12 on Linux, and >= 580 for CUDA 13 on Linux.

If you need to use a newer CUDA toolkit with an older driver, for example
on a cluster where you cannot update the NVIDIA driver easily, you may be
able to use the
[CUDA forward compatibility packages](https://docs.nvidia.com/deploy/cuda-compatibility/)
that NVIDIA provides for this purpose.

### pip installation: NVIDIA GPU (CUDA, installed via pip, easier)[#](#pip-installation-nvidia-gpu-cuda-installed-via-pip-easier)

There are two ways to install JAX with NVIDIA GPU support:

Using NVIDIA CUDA and cuDNN installed from pip wheels

Using a self-installed CUDA/cuDNN


The JAX team strongly recommends installing CUDA and cuDNN using the pip wheels, since it is much easier!

NVIDIA has released CUDA packages only for x86_64 and aarch64.

```
pip install --upgrade pip
# NVIDIA CUDA 13 installation
# Note: wheels only available on linux.
pip install --upgrade "jax[cuda13]"
# Alternatively, for CUDA 12, use
# pip install --upgrade "jax[cuda12]"
```

We recommend migrating to the CUDA 13 wheels; at some point in the future we will drop CUDA 12 support.

If JAX detects the wrong version of the NVIDIA CUDA libraries, there are several things you need to check:

Make sure that

`LD_LIBRARY_PATH`

is not set, since`LD_LIBRARY_PATH`

can override the NVIDIA CUDA libraries.Make sure that the NVIDIA CUDA libraries installed are those requested by JAX. Rerunning the installation command above should work.


### pip installation: NVIDIA GPU (CUDA, installed locally, harder)[#](#pip-installation-nvidia-gpu-cuda-installed-locally-harder)

If you prefer to use a preinstalled copy of NVIDIA CUDA, you must first
install NVIDIA [CUDA](https://developer.nvidia.com/cuda-downloads) and
[cuDNN](https://developer.nvidia.com/CUDNN).

JAX provides pre-built CUDA-compatible wheels for **Linux x86_64 and Linux aarch64 only**. Other
combinations of operating system and architecture are possible, but require
building from source (refer to [Building from source](developer.html#building-from-source) to learn more}.

You should use an NVIDIA driver version that is at least as new as your
[NVIDIA CUDA toolkit’s corresponding driver version](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html#cuda-major-component-versions__table-cuda-toolkit-driver-versions).
If you need to use a newer CUDA toolkit with an older driver, for example
on a cluster where you cannot update the NVIDIA driver easily, you may be
able to use the
[CUDA forward compatibility packages](https://docs.nvidia.com/deploy/cuda-compatibility/)
that NVIDIA provides for this purpose.

JAX currently ships two CUDA wheel variants: CUDA 12 and CUDA 13:

The CUDA 12 wheel is:

Built with |
Compatible with |
|---|---|
CUDA 12.3 |
CUDA >=12.1 |
CUDNN 9.8 |
CUDNN >=9.8, <10.0 |
NCCL 2.19 |
NCCL >=2.18 |

The CUDA 13 wheel is:

Built with |
Compatible with |
|---|---|
CUDA 13.0 |
CUDA >=13.0 |
CUDNN 9.8 |
CUDNN >=9.8, <10.0 |
NCCL 2.19 |
NCCL >=2.18 |

JAX checks the versions of your libraries, and will report an error if they are
not sufficiently new.
Setting the `JAX_SKIP_CUDA_CONSTRAINTS_CHECK`

environment variable will disable
the check, but using older versions of CUDA may lead to errors, or incorrect
results.

NCCL is an optional dependency, required only if you are performing multi-GPU computations.

To install, run:

```
pip install --upgrade pip
# Installs the wheel compatible with NVIDIA CUDA 13 and cuDNN 9.8 or newer.
# Note: wheels only available on linux.
pip install --upgrade "jax[cuda13-local]"
# Installs the wheel compatible with NVIDIA CUDA 12 and cuDNN 9.8 or newer.
# Note: wheels only available on linux.
# pip install --upgrade "jax[cuda12-local]"
```

**These pip installations do not work with Windows, and may fail silently; refer to the table
above.**

You can find your CUDA version with the command:

```
nvcc --version
```

JAX uses `LD_LIBRARY_PATH`

to find CUDA libraries and `PATH`

to find binaries
(`ptxas`

, `nvlink`

). Please make sure that these paths point to the correct CUDA
installation.

JAX requires libdevice10.bc, which typically comes from the cuda-nvvm package. Make sure that it is present in your CUDA installation.

Please let the JAX team know on [the GitHub issue tracker](https://github.com/jax-ml/jax/issues)
if you run into any errors or problems with the pre-built wheels.

### NVIDIA GPU Docker containers[#](#nvidia-gpu-docker-containers)

NVIDIA provides the [JAX
Toolbox](https://github.com/NVIDIA/JAX-Toolbox) containers, which are
bleeding edge containers containing nightly releases of jax and some
models/frameworks.

## Google Cloud TPU[#](#google-cloud-tpu)

### pip installation: Google Cloud TPU[#](#pip-installation-google-cloud-tpu)

JAX provides pre-built wheels for
[Google Cloud TPU](https://cloud.google.com/tpu/docs/users-guide-tpu-vm).
To install JAX along with appropriate versions of `jaxlib`

and `libtpu`

, you can run
the following in your cloud TPU VM:

```
pip install "jax[tpu]"
```

For users of Colab (https://colab.research.google.com/), be sure you are
using *TPU v2* and not the older, deprecated TPU runtime.

## Mac GPU[#](#mac-gpu)

JAX is not supported on Mac/OSX GPU; instead use the standard [CPU installation](#install-cpu) commands.

## AMD GPU (Linux)[#](#amd-gpu-linux)

AMD GPU support is provided by a ROCm JAX plugin supported by AMD.

### pip installation: AMD GPU (ROCm)[#](#pip-installation-amd-gpu-rocm)

JAX supports a ROCm install via:

```
pip install --upgrade "jax[rocm7-local]"
```

ROCm-specific fixes are shipped as *post-releases* of the ROCm plugin/PJRT
packages (for example, `jax-rocm7-plugin==0.9.1.post1`

). Upgrading
`jax[rocm7-local]`

will pick up the newest compatible post-release available from
your configured package indexes.

For prerequisites (ROCm/Docker), and for ROCm-specific extras such as `jax[rocm7-local]`

, please see [AMD’s Instructions](https://github.com/jax-ml/jax/blob/main/build/rocm/README.md) for details.

**Note**: ROCm support on Windows WSL2 is experimental. For WSL installation, you may need to:

Install

[ROCm for WSL](https://rocm.docs.amd.com/projects/install-on-windows/en/latest/tutorial/quick-start.html)following AMD’s official guideFollow the standard Linux ROCm JAX installation steps within your WSL environment

Be aware that performance and stability may differ from native Linux installations


## Intel GPU[#](#intel-gpu)

Intel provides an experimental OneAPI plugin: intel-extension-for-openxla for Intel GPU hardware. For more details and installation instructions, refer to one of the following two methods:

Pip installation:

[JAX acceleration on Intel GPU](https://github.com/intel/intel-extension-for-openxla/blob/main/docs/acc_jax.md).Using

[Intel’s XLA Docker container](https://hub.docker.com/r/intel/intel-optimized-xla).

Please report any issues related to:

JAX:

[JAX issue tracker](https://github.com/jax-ml/jax/issues).Intel’s OpenXLA plugin:

[Intel-extension-for-openxla issue tracker](https://github.com/intel/intel-extension-for-openxla/issues).

## Conda (community-supported)[#](#conda-community-supported)

### Conda installation[#](#conda-installation)

There is a community-supported Conda build of `jax`

. To install it using `conda`

,
simply run:

```
conda install jax -c conda-forge
```

If you run this command on machine with an NVIDIA GPU, this should install a CUDA-enabled package of `jaxlib`

.

To ensure that the jax version you are installing is indeed CUDA-enabled, run:

```
conda install "jaxlib=*=*cuda*" jax -c conda-forge
```

If you would like to override which release of CUDA is used by JAX, or to
install the CUDA build on a machine without GPUs, follow the instructions in the
[Tips & tricks](https://conda-forge.org/docs/user/tipsandtricks.html#installing-cuda-enabled-packages-like-tensorflow-and-pytorch)
section of the `conda-forge`

website.

Go to the `conda-forge`

[jaxlib](https://github.com/conda-forge/jaxlib-feedstock#installing-jaxlib) and
[jax](https://github.com/conda-forge/jax-feedstock#installing-jax) repositories
for more details.

## JAX nightly installation[#](#jax-nightly-installation)

Nightly releases reflect the state of the main JAX repository at the time they are built, and may not pass the full test suite.

Unlike the instructions for installing a JAX release, here we name all of JAX’s
packages explicitly on the command line, so `pip`

will upgrade them if a newer
version is available.

JAX publishes nightlies, release candidates(RCs), and releases to several non-pypi [PEP 503](https://us-python.pkg.dev/ml-oss-artifacts-published/jax/simple/) indexes.

All JAX packages can be reached from the index `https://us-python.pkg.dev/ml-oss-artifacts-published/jax/simple/`

as well as PyPI mirrored packages. This additional mirroring enables nightly
installation to use –index (-i) as the install method with pip.

**Note:** The unified index could return an RC or release as the newest version
even with `--pre`

immediately after a release before the newest nightly is
rebuilt. If automation or testing must be done against nightlies or you cannot
use our full index, use the extra index `https://us-python.pkg.dev/ml-oss-artifacts-published/jax-public-nightly-artifacts-registry/simple/`

which only contains nightly artifacts.

The nightly index URLs can also be browsed directly. The `--index`

URL is a
[PEP 503](https://peps.python.org/pep-0503/) simple repository index for `pip`

,
and each package has its own sub-directory. For example, you can see the available
`jax`

packages at
[https://us-python.pkg.dev/ml-oss-artifacts-published/jax-public-nightly-artifacts-registry/simple/jax](https://us-python.pkg.dev/ml-oss-artifacts-published/jax-public-nightly-artifacts-registry/simple/jax),
`jax-cuda12-pjrt`

packages at
[https://us-python.pkg.dev/ml-oss-artifacts-published/jax-public-nightly-artifacts-registry/simple/jax-cuda12-pjrt](https://us-python.pkg.dev/ml-oss-artifacts-published/jax-public-nightly-artifacts-registry/simple/jax-cuda12-pjrt),
and `jax-cuda13-pjrt`

packages at
[https://us-python.pkg.dev/ml-oss-artifacts-published/jax-public-nightly-artifacts-registry/simple/jax-cuda13-pjrt](https://us-python.pkg.dev/ml-oss-artifacts-published/jax-public-nightly-artifacts-registry/simple/jax-cuda13-pjrt).

CPU only:


```
pip install -U --pre jax jaxlib -i https://us-python.pkg.dev/ml-oss-artifacts-published/jax/simple/
```

Google Cloud TPU:


```
pip install -U --pre jax jaxlib libtpu requests -i https://us-python.pkg.dev/ml-oss-artifacts-published/jax/simple/ -f https://storage.googleapis.com/jax-releases/libtpu_releases.html
```

NVIDIA GPU (CUDA 13):


```
pip install -U --pre jax jaxlib "jax-cuda13-plugin[with-cuda]" jax-cuda13-pjrt -i https://us-python.pkg.dev/ml-oss-artifacts-published/jax/simple/
```

NVIDIA GPU (CUDA 12):


```
pip install -U --pre jax jaxlib "jax-cuda12-plugin[with-cuda]" jax-cuda12-pjrt -i https://us-python.pkg.dev/ml-oss-artifacts-published/jax/simple/
```

## Building JAX from source[#](#building-jax-from-source)

Refer to [Building from source](developer.html#building-from-source).

## Installing older `jaxlib`

wheels[#](#installing-older-jaxlib-wheels)

Due to storage limitations on the Python package index, the JAX team periodically removes
older `jaxlib`

wheels from the releases on http://pypi.org/project/jax. These can
still be installed directly via the URLs here. For example:

```
# Install jaxlib on CPU via the wheel archive
pip install "jax[cpu]==0.3.25" -i https://us-python.pkg.dev/ml-oss-artifacts-published/jax/simple/
# Install the jaxlib 0.3.25 CPU wheel directly
pip install jaxlib==0.3.25 -i https://us-python.pkg.dev/ml-oss-artifacts-published/jax/simple/
```

For specific older GPU wheels, be sure to use the `jax_cuda_releases.html`

URL; for example

```
pip install jaxlib==0.3.25+cuda11.cudnn82 -f https://storage.googleapis.com/jax-releases/jax_cuda_releases.html
```

---

## Source: https://jax.readthedocs.io/en/latest/notebooks/thinking_in_jax.html

# Quickstart: How to think in JAX[#](#quickstart-how-to-think-in-jax)

**JAX is a library for array-oriented numerical computation ( à la NumPy), with automatic differentiation and JIT compilation to enable high-performance machine learning research**.

This document provides a quick overview of essential JAX features, so you can get started with JAX:

JAX provides a unified NumPy-like interface to computations that run on CPU, GPU, or TPU, in local or distributed settings.

JAX features built-in Just-In-Time (JIT) compilation via

[Open XLA](https://github.com/openxla), an open-source machine learning compiler ecosystem.JAX functions support efficient evaluation of gradients via its automatic differentiation transformations.

JAX functions can be automatically vectorized to efficiently map them over arrays representing batches of inputs.


## Installation[#](#installation)

JAX can be installed for CPU on Linux, Windows, and macOS directly from the [Python Package Index](https://pypi.org/project/jax/):

```
pip install jax
```

or, for NVIDIA GPU:

```
pip install -U "jax[cuda13]"
```

For more detailed platform-specific installation information, check out [Installation](https://docs.jax.dev/en/latest/installation.html).

## JAX vs. NumPy[#](#jax-vs-numpy)

**Key concepts:**

JAX provides a NumPy-inspired interface for convenience.

Through

[duck-typing](https://en.wikipedia.org/wiki/Duck_typing), JAX arrays can often be used as drop-in replacements of NumPy arrays.Unlike NumPy arrays, JAX arrays are always immutable.


NumPy provides a well-known, powerful API for working with numerical data. For convenience, JAX provides [ jax.numpy](https://docs.jax.dev/en/latest/jax.numpy.html) which closely mirrors the NumPy API and provides easy entry into JAX. Almost anything that can be done with

`numpy`

can be done with `jax.numpy`

, which is typically imported under the `jnp`

alias:```
import jax.numpy as jnp
```

With this import, you can immediately use JAX in a similar manner to typical NumPy programs, including using NumPy-style array creation functions, Python functions and operators, and array attributes and methods:

```
import matplotlib.pyplot as plt
x_jnp = jnp.linspace(0, 10, 1000)
y_jnp = 2 * jnp.sin(x_jnp) * jnp.cos(x_jnp)
plt.plot(x_jnp, y_jnp);
```

The code blocks are identical to what you would expect with NumPy, aside from replacing `np`

with `jnp`

, and the results are the same. As we can see, JAX arrays can often be used directly in place of NumPy arrays for things like plotting.

The arrays themselves are implemented as different Python types:

```
import numpy as np
import jax.numpy as jnp
x_np = np.linspace(0, 10, 1000)
x_jnp = jnp.linspace(0, 10, 1000)
```

```
type(x_np)
```

```
numpy.ndarray
```

```
type(x_jnp)
```

```
jaxlib._jax.ArrayImpl
```

Python’s duck-typing allows JAX arrays and NumPy arrays to be used interchangeably in many places. However, there is one important difference between JAX and NumPy arrays: JAX arrays are immutable, meaning that once created their contents cannot be changed.

Here is an example of mutating an array in NumPy:

```
# NumPy: mutable arrays
x = np.arange(10)
x[0] = 10
print(x)
```

```
[10 1 2 3 4 5 6 7 8 9]
```

The equivalent in JAX results in an error, as JAX arrays are immutable:

```
%xmode minimal
```

```
Exception reporting mode: Minimal
```

```
# JAX: immutable arrays
x = jnp.arange(10)
x[0] = 10
```

```
TypeError: JAX arrays are immutable and do not support in-place item assignment. Instead of x[idx] = y, use x = x.at[idx].set(y) or another .at[] method: https://docs.jax.dev/en/latest/_autosummary/jax.numpy.ndarray.at.html
```

For updating individual elements, JAX provides an [indexed update syntax](https://docs.jax.dev/en/latest/_autosummary/jax.numpy.ndarray.at.html#jax-numpy-ndarray-at) that returns an updated copy:

```
y = x.at[0].set(10)
print(x)
print(y)
```

```
[0 1 2 3 4 5 6 7 8 9]
[10 1 2 3 4 5 6 7 8 9]
```

You’ll find a few differences between JAX arrays and NumPy arrays once you begin digging in. See also:

[Key concepts](https://docs.jax.dev/en/latest/key-concepts.html#jax-arrays-jax-array)for an introduction to the key concepts of JAX, such as transformations, tracing, jaxprs and pytrees.[🔪 JAX - The Sharp Bits 🔪](https://docs.jax.dev/en/latest/notebooks/Common_Gotchas_in_JAX.html)for common gotchas when using JAX.

## JAX arrays (`jax.Array`

)[#](#jax-arrays-jax-array)

**Key concepts:**

Create arrays using JAX API functions.

JAX array objects have a

`devices`

attribute that indicates where the array is stored.JAX arrays can be

*sharded*across multiple devices for parallel computation.

The default array implementation in JAX is [ jax.Array](https://docs.jax.dev/en/latest/_autosummary/jax.Array.html#jax.Array). In many ways it is similar to
the

[type that you may be familiar with from the NumPy package, but it has some important differences.](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray)

`numpy.ndarray`

### Array creation[#](#array-creation)

We typically don’t call the `jax.Array`

constructor directly, but rather create arrays via JAX API functions.
For example, [ jax.numpy](https://docs.jax.dev/en/latest/jax.numpy.html#module-jax.numpy) provides familiar NumPy-style array construction functionality
such as

`jax.numpy.zeros`

, `jax.numpy.linspace`

, `jax.numpy.arange`

, etc.```
import jax
import jax.numpy as jnp
x = jnp.arange(5)
isinstance(x, jax.Array)
```

```
True
```

If you use Python type annotations in your code, `jax.Array`

is the appropriate
annotation for jax array objects (see [ jax.typing](https://docs.jax.dev/en/latest/jax.typing.html#module-jax.typing) for more discussion).

### Array devices and sharding[#](#array-devices-and-sharding)

JAX Array objects have a `devices`

method that lets you inspect where the contents of the array are stored. In the simplest cases, this will be a single CPU device:

```
x.devices()
```

```
{CpuDevice(id=0)}
```

In general, an array may be [ sharded](https://docs.jax.dev/en/latest/notebooks/Distributed_arrays_and_automatic_parallelization.html) across multiple devices, in a manner that can be inspected via the

`sharding`

attribute:```
x.sharding
```

```
SingleDeviceSharding(device=CpuDevice(id=0), memory_kind=device)
```

Here the array is on a single device, but in general a JAX array can be
sharded across multiple devices, or even multiple hosts.
To read more about sharded arrays and parallel computation, refer to [Introduction to parallel programming](https://docs.jax.dev/en/latest/sharded-computation.html).

## Just-in-time compilation with `jax.jit`

[#](#just-in-time-compilation-with-jax-jit)

**Key concepts:**

By default JAX executes operations one at a time, in sequence.

Using a just-in-time (JIT) compilation decorator, sequences of operations can be optimized together and run at once.

Not all JAX code can be JIT compiled, as it requires array shapes to be static & known at compile time.


JAX runs transparently on the GPU or TPU (falling back to CPU if you don’t have one), with all JAX operations being expressed in terms of XLA. If we have a sequence of operations, we can use the [ jax.jit](https://docs.jax.dev/en/latest/_autosummary/jax.jit.html) function to compile this sequence of operations together using the XLA compiler.

For example, consider this function that normalizes the rows of a 2D matrix, expressed in terms of `jax.numpy`

operations:

```
import jax.numpy as jnp
def norm(X):
X = X - X.mean(0)
return X / X.std(0)
```

A just-in-time compiled version of the function can be created using the `jax.jit`

transform:

```
from jax import jit
norm_compiled = jit(norm)
```

This function returns the same results as the original, up to standard floating-point accuracy:

```
np.random.seed(1701)
X = jnp.array(np.random.rand(10000, 10))
np.allclose(norm(X), norm_compiled(X), atol=1E-6)
```

```
True
```

But due to the compilation (which includes fusing of operations, avoidance of allocating temporary arrays, and a host of other tricks), execution times can be orders of magnitude faster in the JIT-compiled case. We can use IPython’s `%timeit`

to quickly benchmark our function, using `block_until_ready()`

to account for JAX’s [asynchronous dispatch](https://docs.jax.dev/en/latest/async_dispatch.html):

```
%timeit norm(X).block_until_ready()
%timeit norm_compiled(X).block_until_ready()
```

```
349 μs ± 14.7 μs per loop (mean ± std. dev. of 7 runs, 1,000 loops each)
277 μs ± 5.96 μs per loop (mean ± std. dev. of 7 runs, 1,000 loops each)
```

That said, `jax.jit`

does have limitations: in particular, it requires all arrays to have static shapes. That means that some JAX operations are incompatible with JIT compilation.

For example, this operation can be executed in op-by-op mode:

```
def get_negatives(x):
return x[x < 0]
x = jnp.array(np.random.randn(10))
get_negatives(x)
```

```
Array([-0.10570311, -0.59403396, -0.8680282 , -0.23489487], dtype=float32)
```

But it returns an error if you attempt to execute it in jit mode:

```
jit(get_negatives)(x)
```

```
NonConcreteBooleanIndexError: Array boolean indices must be concrete; got bool[10]
See https://docs.jax.dev/en/latest/errors.html#jax.errors.NonConcreteBooleanIndexError
```

This is because the function generates an array whose shape is not known at compile time: the size of the output depends on the values of the input array, and so it is not compatible with JIT.

For more on JIT compilation in JAX, check out [Just-in-time compilation](https://docs.jax.dev/en/latest/jit-compilation.html).

## Taking derivatives with `jax.grad`

[#](#taking-derivatives-with-jax-grad)

**Key concepts:**

JAX provides automatic differentiation via the

`jax.grad`

transformation.The

`jax.grad`

and`jax.jit`

transformations compose and can be mixed arbitrarily.

In addition to transforming functions via JIT compilation, JAX also provides other transformations. One such transformation is [ jax.grad](https://docs.jax.dev/en/latest/_autosummary/jax.grad.html), which performs

[automatic differentiation (autodiff)](https://en.wikipedia.org/wiki/Automatic_differentiation):

```
from jax import grad
def sum_logistic(x):
return jnp.sum(1.0 / (1.0 + jnp.exp(-x)))
x_small = jnp.arange(3.)
derivative_fn = grad(sum_logistic)
print(derivative_fn(x_small))
```

```
[0.25 0.19661197 0.10499357]
```

Let’s verify with finite differences that our result is correct.

```
def first_finite_differences(f, x, eps=1E-3):
return jnp.array([(f(x + eps * v) - f(x - eps * v)) / (2 * eps)
for v in jnp.eye(len(x))])
print(first_finite_differences(sum_logistic, x_small))
```

```
[0.24998187 0.1964569 0.10502338]
```

The [ jax.grad](https://docs.jax.dev/en/latest/_autosummary/jax.grad.html) and

[transformations compose and can be mixed arbitrarily. For instance, while the](https://docs.jax.dev/en/latest/_autosummary/jax.jit.html)

`jax.jit`

`sum_logistic`

function was differentiated directly in the previous example, it could also be JIT-compiled, and these operations can be combined. We can go further:```
print(grad(jit(grad(jit(grad(sum_logistic)))))(1.0))
```

```
-0.0353256
```

Beyond scalar-valued functions, the [ jax.jacobian](https://docs.jax.dev/en/latest/_autosummary/jax.jacobian.html) transformation can be
used to compute the full Jacobian matrix for vector-valued functions:

```
from jax import jacobian
print(jacobian(jnp.exp)(x_small))
```

```
[[1. 0. 0. ]
[0. 2.7182817 0. ]
[0. 0. 7.389056 ]]
```

For more advanced autodiff operations, you can use [ jax.vjp](https://docs.jax.dev/en/latest/_autosummary/jax.vjp.html) for reverse-mode vector-Jacobian products,
and

[and](https://docs.jax.dev/en/latest/_autosummary/jax.jvp.html)

`jax.jvp`

[for forward-mode Jacobian-vector products. The two can be composed arbitrarily with one another, and with other JAX transformations. For example,](https://docs.jax.dev/en/latest/_autosummary/jax.linearize.html)

`jax.linearize`

`jax.jvp`

and `jax.vjp`

are used to define the forward-mode [and reverse-mode](https://docs.jax.dev/en/latest/_autosummary/jax.jacfwd.html)

`jax.jacfwd`

[for computing Jacobians in forward- and reverse-mode, respectively. Here’s one way to compose them to make a function that efficiently computes full Hessian matrices:](https://docs.jax.dev/en/latest/_autosummary/jax.jacrev.html)

`jax.jacrev`

```
from jax import jacfwd, jacrev
def hessian(fun):
return jit(jacfwd(jacrev(fun)))
print(hessian(sum_logistic)(x_small))
```

```
[[-0. -0. -0. ]
[-0. -0.09085776 -0. ]
[-0. -0. -0.07996249]]
```

This kind of composition produces efficient code in practice; this is more-or-less how JAX’s built-in [ jax.hessian](https://docs.jax.dev/en/latest/_autosummary/jax.hessian.html) function is implemented.

For more on automatic differentiation in JAX, check out [Automatic differentiation](https://docs.jax.dev/en/latest/automatic-differentiation.html).

## Auto-vectorization with `jax.vmap`

[#](#auto-vectorization-with-jax-vmap)

**Key concepts:**

JAX provides automatic vectorization via the

transformation.`jax.vmap`

`jax.vmap`

can be composed with`jax.jit`

to produce efficient vectorized code.

Another useful transformation is [ jax.vmap](https://docs.jax.dev/en/latest/_autosummary/jax.vmap.html), the vectorizing map.
It has the familiar semantics of mapping a function along array axes, but instead of explicitly looping
over function calls, it transforms the function into a natively vectorized version for better performance.
When composed with

[, it can be just as performant as manually rewriting your function to operate over an extra batch dimension.](https://docs.jax.dev/en/latest/_autosummary/jax.jit.html)

`jax.jit`

We’re going to work with a simple example, and promote matrix-vector products into matrix-matrix products using [ jax.vmap](https://docs.jax.dev/en/latest/_autosummary/jax.vmap.html).
Although this is easy to do by hand in this specific case, the same technique can apply to more complicated functions.

```
from jax import random
key = random.key(1701)
key1, key2 = random.split(key)
mat = random.normal(key1, (150, 100))
batched_x = random.normal(key2, (10, 100))
def apply_matrix(x):
return jnp.dot(mat, x)
```

The `apply_matrix`

function maps a vector to a vector, but we may want to apply it row-wise across a matrix.
We could do this by looping over the batch dimension in Python, but this usually results in poor performance.

```
def naively_batched_apply_matrix(v_batched):
return jnp.stack([apply_matrix(v) for v in v_batched])
print('Naively batched')
%timeit naively_batched_apply_matrix(batched_x).block_until_ready()
```

```
Naively batched
853 μs ± 4.48 μs per loop (mean ± std. dev. of 7 runs, 1,000 loops each)
```

A programmer familiar with the `jnp.dot`

function might recognize that `apply_matrix`

can
be rewritten to avoid explicit looping, using the built-in batching semantics of `jnp.dot`

:

```
import numpy as np
@jit
def batched_apply_matrix(batched_x):
return jnp.dot(batched_x, mat.T)
np.testing.assert_allclose(naively_batched_apply_matrix(batched_x),
batched_apply_matrix(batched_x), atol=1E-4, rtol=1E-4)
print('Manually batched')
%timeit batched_apply_matrix(batched_x).block_until_ready()
```

```
Manually batched
40.6 μs ± 1.49 μs per loop (mean ± std. dev. of 7 runs, 10,000 loops each)
```

However, as functions become more complicated, this kind of manual batching becomes more difficult and error-prone.
The `jax.vmap`

transformation is designed to automatically transform a function into a batch-aware version:

```
from jax import vmap
@jit
def vmap_batched_apply_matrix(batched_x):
return vmap(apply_matrix)(batched_x)
np.testing.assert_allclose(naively_batched_apply_matrix(batched_x),
vmap_batched_apply_matrix(batched_x), atol=1E-4, rtol=1E-4)
print('Auto-vectorized with vmap')
%timeit vmap_batched_apply_matrix(batched_x).block_until_ready()
```

```
Auto-vectorized with vmap
47.4 μs ± 516 ns per loop (mean ± std. dev. of 7 runs, 10,000 loops each)
```

As you would expect, `jax.vmap`

can be arbitrarily composed with `jax.jit`

,
`jax.grad`

, and any other JAX transformation.

For more on automatic vectorization in JAX, check out [Automatic vectorization](https://docs.jax.dev/en/latest/automatic-vectorization.html).

## Pseudorandom numbers[#](#pseudorandom-numbers)

**Key concepts:**

JAX uses a different model for pseudo random number generation than NumPy.

JAX random functions consume a random

`key`

that must be split to generate new independent keys.JAX’s random key model is thread-safe and avoids issues with global state.


Generally, JAX strives to be compatible with NumPy, but pseudo random number generation is a notable exception. NumPy supports a method of pseudo random number generation that is based on a global `state`

, which can be set using [ numpy.random.seed](https://numpy.org/doc/stable/reference/random/generated/numpy.random.seed.html). Global random state interacts poorly with JAX’s compute model and makes it difficult to enforce reproducibility across different threads, processes, and devices. JAX instead tracks state explicitly via a random

`key`

:```
from jax import random
key = random.key(43)
print(key)
```

```
Array((), dtype=key<fry>) overlaying:
[ 0 43]
```

The key is effectively a stand-in for NumPy’s hidden state object, but we pass it explicitly to [ jax.random](https://docs.jax.dev/en/latest/jax.random.html) functions. Importantly, random functions consume the key, but do not modify it: feeding the same key object to a random function will always result in the same sample being generated.

```
print(random.normal(key))
print(random.normal(key))
```

```
0.07520543
0.07520543
```

**The rule of thumb is: never reuse keys (unless you want identical outputs).**

In order to generate different and independent samples, you must [ jax.random.split](https://docs.jax.dev/en/latest/_autosummary/jax.random.split.html) the key explicitly before passing it to a random function:

```
for i in range(3):
new_key, subkey = random.split(key)
del key # The old key is consumed by split() -- we must never use it again.
val = random.normal(subkey)
del subkey # The subkey is consumed by normal().
print(f"draw {i}: {val}")
key = new_key # new_key is safe to use in the next iteration.
```

```
draw 0: -1.9133632183074951
draw 1: -1.4749839305877686
draw 2: -0.36703771352767944
```

Note that this code is thread safe, since the local random state eliminates possible race conditions involving global state. `jax.random.split`

is a deterministic function that converts one `key`

into several independent (in the pseudorandomness sense) keys.

For more on pseudo random numbers in JAX, see the [Pseudorandom numbers tutorial](https://docs.jax.dev/en/latest/random-numbers.html).

## Debugging[#](#debugging)

Debugging JAX code can be challenging due to its functional programming model and the fact that JAX code is often transformed via JIT compilation or vectorization. However, JAX provides several tools to help with debugging.

`jax.debug.print`

[#](#jax-debug-print)

For simple inspection, use [ jax.debug.print](https://docs.jax.dev/en/latest/_autosummary/jax.debug.print.html).

Python’s built-in `print`

executes at trace-time, before the runtime values exist. Because of this, `print`

will only show tracer values within `jax.jit`

-decorated code.

```
import jax
import jax.numpy as jnp
@jax.jit
def f(x):
print("print(x) ->", x)
y = jnp.sin(x)
print("print(y) ->", y)
return y
result = f(2.)
```

```
print(x) -> JitTracer(~float32[])
print(y) -> JitTracer(~float32[])
```

If you want to print the actual runtime values, you can use `jax.debug.print`

:

```
@jax.jit
def f(x):
jax.debug.print("jax.debug.print(x) -> {x}", x=x)
y = jnp.sin(x)
jax.debug.print("jax.debug.print(y) -> {y}", y=y)
return y
result = f(2.)
```

```
jax.debug.print(x) -> 2.0
jax.debug.print(y) -> 0.9092974066734314
```

### Debugging flags[#](#debugging-flags)

JAX offers flags and context managers that enable catching errors more easily. For example, you can enable the `jax.debug_nans`

flag to automatically detect when NaNs are produced in `jax.jit`

-compiled code. You can also enable the `jax_disable_jit`

flag to disable JIT-compilation, enabling use of traditional Python debugging tools like `print`

and `pdb`

.

For more details, see [Introduction to debugging](https://docs.jax.dev/en/latest/debugging.html).

This is just a taste of what JAX can do. We’re really excited to see what you do with it!

---

## Source: https://jax.readthedocs.io/en/latest/notebooks/Common_Gotchas_in_JAX.html

# 🔪 JAX - The Sharp Bits 🔪[#](#jax-the-sharp-bits)

When walking about the countryside of Italy, the people will not hesitate to tell you that **JAX** has [ “una anima di pura programmazione funzionale”](https://www.sscardapane.it/iaml-backup/jax-intro/).

**JAX** is a language for **expressing** and **composing** **transformations** of numerical programs. **JAX** is also able to **compile** numerical programs for CPU or accelerators (GPU/TPU).
JAX works great for many numerical and scientific programs, but **only if they are written with certain constraints** that we describe below.

```
import numpy as np
from jax import jit
from jax import lax
from jax import random
import jax
import jax.numpy as jnp
```

## 🔪 Pure functions[#](#pure-functions)

JAX transformation and compilation are designed to work only on Python functions that are functionally pure: all the input data is passed through the function parameters, all the results are output through the function results. A pure function will always return the same result if invoked with the same inputs.

Here are some examples of functions that are not functionally pure for which JAX behaves differently than the Python interpreter. Note that these behaviors are not guaranteed by the JAX system; the proper way to use JAX is to use it only on functionally pure Python functions.

```
def impure_print_side_effect(x):
print("Executing function") # This is a side-effect
return x
# The side-effects appear during the first run
print ("First call: ", jit(impure_print_side_effect)(4.))
# Subsequent runs with parameters of same type and shape may not show the side-effect
# This is because JAX now invokes a cached compilation of the function
print ("Second call: ", jit(impure_print_side_effect)(5.))
# JAX re-runs the Python function when the type or shape of the argument changes
print ("Third call, different type: ", jit(impure_print_side_effect)(jnp.array([5.])))
```

```
Executing function
First call: 4.0
Second call: 5.0
Executing function
Third call, different type: [5.]
```

```
g = 0.
def impure_uses_globals(x):
return x + g
# JAX captures the value of the global during the first run
print ("First call: ", jit(impure_uses_globals)(4.))
g = 10. # Update the global
# Subsequent runs may silently use the cached value of the globals
print ("Second call: ", jit(impure_uses_globals)(5.))
# JAX re-runs the Python function when the type or shape of the argument changes
# This will end up reading the latest value of the global
print ("Third call, different type: ", jit(impure_uses_globals)(jnp.array([4.])))
```

```
First call: 4.0
Second call: 5.0
Third call, different type: [14.]
```

```
g = 0.
def impure_saves_global(x):
global g
g = x
return x
# JAX runs once the transformed function with special Traced values for arguments
print ("First call: ", jit(impure_saves_global)(4.))
print ("Saved global: ", g) # Saved global has an internal JAX value
```

```
First call: 4.0
Saved global: JitTracer(~float32[])
```

A Python function can be functionally pure even if it actually uses stateful objects internally, as long as it does not read or write external state:

```
def pure_uses_internal_state(x):
state = dict(even=0, odd=0)
for i in range(10):
state['even' if i % 2 == 0 else 'odd'] += x
return state['even'] + state['odd']
print(jit(pure_uses_internal_state)(5.))
```

```
50.0
```

It is not recommended to use iterators in any JAX function you want to `jit`

or in any control-flow primitive. The reason is that an iterator is a python object which introduces state to retrieve the next element. Therefore, it is incompatible with JAX’s functional programming model. In the code below, there are some examples of incorrect attempts to use iterators with JAX. Most of them return an error, but some give unexpected results.

```
import jax.numpy as jnp
from jax import make_jaxpr
# lax.fori_loop
array = jnp.arange(10)
print(lax.fori_loop(0, 10, lambda i,x: x+array[i], 0)) # expected result 45
iterator = iter(range(10))
print(lax.fori_loop(0, 10, lambda i,x: x+next(iterator), 0)) # unexpected result 0
# lax.scan
def func11(arr, extra):
ones = jnp.ones(arr.shape)
def body(carry, aelems):
ae1, ae2 = aelems
return (carry + ae1 * ae2 + extra, carry)
return lax.scan(body, 0., (arr, ones))
make_jaxpr(func11)(jnp.arange(16), 5.)
# make_jaxpr(func11)(iter(range(16)), 5.) # throws error
# lax.cond
array_operand = jnp.array([0.])
lax.cond(True, lambda x: x+1, lambda x: x-1, array_operand)
iter_operand = iter(range(10))
# lax.cond(True, lambda x: next(x)+1, lambda x: next(x)-1, iter_operand) # throws error
```

```
45
0
```

## 🔪 In-place updates[#](#in-place-updates)

In Numpy you’re used to doing this:

```
numpy_array = np.zeros((3,3), dtype=np.float32)
print("original array:")
print(numpy_array)
# In place, mutating update
numpy_array[1, :] = 1.0
print("updated array:")
print(numpy_array)
```

```
original array:
[[0. 0. 0.]
[0. 0. 0.]
[0. 0. 0.]]
updated array:
[[0. 0. 0.]
[1. 1. 1.]
[0. 0. 0.]]
```

If we try to do in-place indexed updating on a `jax.Array`

, however, we get an **error**! (☉_☉)

```
%xmode Minimal
```

```
Exception reporting mode: Minimal
```

```
jax_array = jnp.zeros((3,3), dtype=jnp.float32)
# In place update of JAX's array will yield an error!
jax_array[1, :] = 1.0
```

```
TypeError: JAX arrays are immutable and do not support in-place item assignment. Instead of x[idx] = y, use x = x.at[idx].set(y) or another .at[] method: https://docs.jax.dev/en/latest/_autosummary/jax.numpy.ndarray.at.html
```

And if we try to do `__iadd__`

-style in-place updating, we get **different behavior than NumPy**! (☉_☉) (☉_☉)

```
jax_array = jnp.array([10, 20])
jax_array_new = jax_array
jax_array_new += 10
print(jax_array_new) # `jax_array_new` is rebound to a new value [20, 30], but...
print(jax_array) # the original value is unmodified as [10, 20] !
numpy_array = np.array([10, 20])
numpy_array_new = numpy_array
numpy_array_new += 10
print(numpy_array_new) # `numpy_array_new is numpy_array`, and it was updated
print(numpy_array) # in-place, so both are [20, 30] !
```

```
[20 30]
[10 20]
[20 30]
[20 30]
```

That’s because NumPy defines `__iadd__`

to perform in-place mutation. In
contrast, `jax.Array`

doesn’t define an `__iadd__`

, so Python treats
`jax_array_new += 10`

as syntactic sugar for `jax_array_new = jax_array_new + 10`

, rebinding the variable without mutating any arrays.

Allowing mutation of variables in-place makes program analysis and transformation difficult. JAX requires that programs are pure functions.

Instead, JAX offers a *functional* array update using the [ .at property on JAX arrays](https://docs.jax.dev/en/latest/_autosummary/jax.numpy.ndarray.at.html#jax.numpy.ndarray.at).

️⚠️ inside `jit`

’d code and `lax.while_loop`

or `lax.fori_loop`

the **size** of slices can’t be functions of argument *values* but only functions of argument *shapes* – the slice start indices have no such restriction. See the below **Control Flow** Section for more information on this limitation.

### Array updates: `x.at[idx].set(y)`

[#](#array-updates-x-at-idx-set-y)

For example, the update above can be written as:

```
jax_array = jnp.zeros((3,3), dtype=jnp.float32)
updated_array = jax_array.at[1, :].set(1.0)
print("updated array:\n", updated_array)
```

```
updated array:
[[0. 0. 0.]
[1. 1. 1.]
[0. 0. 0.]]
```

JAX’s array update functions, unlike their NumPy versions, operate out-of-place. That is, the updated array is returned as a new array and the original array is not modified by the update.

```
print("original array unchanged:\n", jax_array)
```

```
original array unchanged:
[[0. 0. 0.]
[0. 0. 0.]
[0. 0. 0.]]
```

However, inside **jit**-compiled code, if the **input value** `x`

of `x.at[idx].set(y)`

is not reused, the compiler will optimize the array update to occur *in-place*.

### Array updates with other operations[#](#array-updates-with-other-operations)

Indexed array updates are not limited simply to overwriting values. For example, we can perform indexed addition as follows:

```
print("original array:")
jax_array = jnp.ones((5, 6))
print(jax_array)
new_jax_array = jax_array.at[::2, 3:].add(7.)
print("new array post-addition:")
print(new_jax_array)
```

```
original array:
[[1. 1. 1. 1. 1. 1.]
[1. 1. 1. 1. 1. 1.]
[1. 1. 1. 1. 1. 1.]
[1. 1. 1. 1. 1. 1.]
[1. 1. 1. 1. 1. 1.]]
new array post-addition:
[[1. 1. 1. 8. 8. 8.]
[1. 1. 1. 1. 1. 1.]
[1. 1. 1. 8. 8. 8.]
[1. 1. 1. 1. 1. 1.]
[1. 1. 1. 8. 8. 8.]]
```

For more details on indexed array updates, see the [documentation for the .at property](https://docs.jax.dev/en/latest/_autosummary/jax.numpy.ndarray.at.html#jax.numpy.ndarray.at).

## 🔪 Using `jax.jit`

with class methods[#](#using-jax-jit-with-class-methods)

Most examples of [ jax.jit](https://docs.jax.dev/en/latest/_autosummary/jax.jit.html) concern decorating stand-alone Python functions, but decorating a method within a class introduces some complication. For example, consider the following simple class, where we’ve used a standard

`jax.jit`

annotation on a method:```
import jax.numpy as jnp
from jax import jit
class CustomClass:
def __init__(self, x: jnp.ndarray, mul: bool):
self.x = x
self.mul = mul
@jit # <---- How to do this correctly?
def calc(self, y):
if self.mul:
return self.x * y
return y
```

However, this approach will result in an error when you attempt to call this method:

```
c = CustomClass(2, True)
c.calc(3)
```

```
TypeError: Error interpreting argument to <function CustomClass.calc at 0x7e24819a7740> as an abstract array. The problematic value is of type <class '__main__.CustomClass'> and was passed to the function at path self.
This typically means that a jit-wrapped function was called with a non-array argument, and this argument was not marked as static using the static_argnums or static_argnames parameters of jax.jit.
```

The problem is that the first argument to the function is `self`

, which has type `CustomClass`

, and JAX does not know how to handle this type. There are three basic strategies we might use in this case, and we’ll discuss them below.

### Strategy 1: JIT-compiled helper function[#](#strategy-1-jit-compiled-helper-function)

The most straightforward approach is to create a helper function external to the class that can be JIT-decorated in the normal way. For example:

```
from functools import partial
class CustomClass:
def __init__(self, x: jnp.ndarray, mul: bool):
self.x = x
self.mul = mul
def calc(self, y):
return _calc(self.mul, self.x, y)
@partial(jit, static_argnums=0)
def _calc(mul, x, y):
if mul:
return x * y
return y
```

The result will work as expected:

```
c = CustomClass(2, True)
print(c.calc(3))
```

```
6
```

The benefit of such an approach is that it is simple, explicit, and it avoids the need to teach JAX how to handle objects of type `CustomClass`

. However, you may wish to keep all the method logic in the same place.

### Strategy 2: Marking `self`

as static[#](#strategy-2-marking-self-as-static)

Another common pattern is to use `static_argnums`

to mark the `self`

argument as static. But this must be done with care to avoid unexpected results. You may be tempted to simply do this:

```
class CustomClass:
def __init__(self, x: jnp.ndarray, mul: bool):
self.x = x
self.mul = mul
# WARNING: this example is broken, as we'll see below. Don't copy & paste!
@partial(jit, static_argnums=0)
def calc(self, y):
if self.mul:
return self.x * y
return y
```

If you call the method, it will no longer raise an error:

```
c = CustomClass(2, True)
print(c.calc(3))
```

```
6
```

However, there is a catch: if you mutate the object after the first method call, the subsequent method call may return an incorrect result:

```
c.mul = False
print(c.calc(3)) # Should print 3
```

```
6
```

Why is this? When you mark an object as static, it will effectively be used as a dictionary key in JIT’s internal compilation cache, meaning its hash (i.e. `hash(obj)`

) equality (i.e. `obj1 == obj2`

) and object identity (i.e. `obj1 is obj2`

) will be assumed to have consistent behavior. The default `__hash__`

for a custom object is its object ID, and so JAX has no way of knowing that a mutated object should trigger a re-compilation.

You can partially address this by defining an appropriate `__hash__`

and `__eq__`

methods for your object; for example:

```
class CustomClass:
def __init__(self, x: jnp.ndarray, mul: bool):
self.x = x
self.mul = mul
@partial(jit, static_argnums=0)
def calc(self, y):
if self.mul:
return self.x * y
return y
def __hash__(self):
return hash((self.x, self.mul))
def __eq__(self, other):
return (isinstance(other, CustomClass) and
(self.x, self.mul) == (other.x, other.mul))
```

(see the [ object.__hash__](https://docs.python.org/3/reference/datamodel.html#object.__hash__) documentation for more discussion of the requirements
when overriding

`__hash__`

).This should work correctly with JIT and other transforms **so long as you never mutate your object**. Mutations of objects used as hash keys lead to several subtle problems, which is why for example mutable Python containers (e.g. [ dict](https://docs.python.org/3/library/stdtypes.html#dict),

[) don’t define](https://docs.python.org/3/library/stdtypes.html#list)

`list`

`__hash__`

, while their immutable counterparts (e.g. [) do.](https://docs.python.org/3/library/stdtypes.html#tuple)

`tuple`

If your class relies on in-place mutations (such as setting `self.attr = ...`

within its methods), then your object is not really “static” and marking it as such may lead to problems. Fortunately, there’s another option for this case.

### Strategy 3: Making `CustomClass`

a PyTree[#](#strategy-3-making-customclass-a-pytree)

The most flexible approach to correctly JIT-compiling a class method is to register the type as a custom PyTree object; see [Custom pytree nodes](https://docs.jax.dev/en/latest/custom_pytrees.html#pytrees-custom-pytree-nodes). This lets you specify exactly which components of the class should be treated as static and which should be
treated as dynamic. Here’s how it might look:

```
class CustomClass:
def __init__(self, x: jnp.ndarray, mul: bool):
self.x = x
self.mul = mul
@jit
def calc(self, y):
if self.mul:
return self.x * y
return y
def _tree_flatten(self):
children = (self.x,) # arrays / dynamic values
aux_data = {'mul': self.mul} # static values
return (children, aux_data)
@classmethod
def _tree_unflatten(cls, aux_data, children):
return cls(*children, **aux_data)
from jax import tree_util
tree_util.register_pytree_node(CustomClass,
CustomClass._tree_flatten,
CustomClass._tree_unflatten)
```

This is certainly more involved, but it solves all the issues associated with the simpler approaches used above:

```
c = CustomClass(2, True)
print(c.calc(3))
```

```
6
```

```
c.mul = False # mutation is detected
print(c.calc(3))
```

```
3
```

```
c = CustomClass(jnp.array(2), True) # non-hashable x is supported
print(c.calc(3))
```

```
6
```

So long as your `tree_flatten`

and `tree_unflatten`

functions correctly handle all relevant attributes in the class, you should be able to use objects of this type directly as arguments to JIT-compiled functions, without any special annotations.

## 🔪 Out-of-bounds indexing[#](#out-of-bounds-indexing)

In Numpy, you are used to errors being thrown when you index an array outside of its bounds, like this:

```
np.arange(10)[11]
```

```
IndexError: index 11 is out of bounds for axis 0 with size 10
```

However, raising an error from code running on an accelerator can be difficult or impossible. Therefore, JAX must choose some non-error behavior for out of bounds indexing (akin to how invalid floating point arithmetic results in `NaN`

). When the indexing operation is an array index update (e.g. `index_add`

or `scatter`

-like primitives), updates at out-of-bounds indices will be skipped; when the operation is an array index retrieval (e.g. NumPy indexing or `gather`

-like primitives) the index is clamped to the bounds of the array since **something** must be returned. For example, the last value of the array will be returned from this indexing operation:

```
jnp.arange(10)[11]
```

```
Array(9, dtype=int32)
```

If you would like finer-grained control over the behavior for out-of-bound indices, you can use the optional parameters of [ ndarray.at](https://docs.jax.dev/en/latest/_autosummary/jax.numpy.ndarray.at.html); for example:

```
jnp.arange(10.0).at[11].get()
```

```
Array(9., dtype=float32)
```

```
jnp.arange(10.0).at[11].get(mode='fill', fill_value=jnp.nan)
```

```
Array(nan, dtype=float32)
```

Note that due to this behavior for index retrieval, functions like `jnp.nanargmin`

and `jnp.nanargmax`

return -1 for slices consisting of NaNs whereas Numpy would throw an error.

Note also that, as the two behaviors described above are not inverses of each other, reverse-mode automatic differentiation (which turns index updates into index retrievals and vice versa) [will not preserve the semantics of out of bounds indexing](https://github.com/jax-ml/jax/issues/5760). Thus it may be a good idea to think of out-of-bounds indexing in JAX as a case of [undefined behavior](https://en.wikipedia.org/wiki/Undefined_behavior).

## 🔪 Non-array inputs: NumPy vs. JAX[#](#non-array-inputs-numpy-vs-jax)

NumPy is generally happy accepting Python lists or tuples as inputs to its API functions:

```
np.sum([1, 2, 3])
```

```
np.int64(6)
```

JAX departs from this, generally returning a helpful error:

```
jnp.sum([1, 2, 3])
```

```
TypeError: sum requires ndarray or scalar arguments, got <class 'list'> at position 0.
```

This is a deliberate design choice, because passing lists or tuples to traced functions can lead to silent performance degradation that might otherwise be difficult to detect.

For example, consider the following permissive version of `jnp.sum`

that allows list inputs:

```
def permissive_sum(x):
return jnp.sum(jnp.array(x))
x = list(range(10))
permissive_sum(x)
```

```
Array(45, dtype=int32)
```

The output is what we would expect, but this hides potential performance issues under the hood. In JAX’s tracing and JIT compilation model, each element in a Python list or tuple is treated as a separate JAX variable, and individually processed and pushed to device. This can be seen in the jaxpr for the `permissive_sum`

function above:

```
make_jaxpr(permissive_sum)(x)
```

```
{ lambda ; a:i32[] b:i32[] c:i32[] d:i32[] e:i32[] f:i32[] g:i32[] h:i32[] i:i32[]
j:i32[]. let
k:i32[] = convert_element_type[new_dtype=int32 weak_type=False] a
l:i32[1] = broadcast_in_dim k
m:i32[] = convert_element_type[new_dtype=int32 weak_type=False] b
n:i32[1] = broadcast_in_dim m
o:i32[] = convert_element_type[new_dtype=int32 weak_type=False] c
p:i32[1] = broadcast_in_dim o
q:i32[] = convert_element_type[new_dtype=int32 weak_type=False] d
r:i32[1] = broadcast_in_dim q
s:i32[] = convert_element_type[new_dtype=int32 weak_type=False] e
t:i32[1] = broadcast_in_dim s
u:i32[] = convert_element_type[new_dtype=int32 weak_type=False] f
v:i32[1] = broadcast_in_dim u
w:i32[] = convert_element_type[new_dtype=int32 weak_type=False] g
x:i32[1] = broadcast_in_dim w
y:i32[] = convert_element_type[new_dtype=int32 weak_type=False] h
z:i32[1] = broadcast_in_dim y
ba:i32[] = convert_element_type[new_dtype=int32 weak_type=False] i
bb:i32[1] = broadcast_in_dim ba
bc:i32[] = convert_element_type[new_dtype=int32 weak_type=False] j
bd:i32[1] = broadcast_in_dim bc
be:i32[10] = concatenate[dimension=0] l n p r t v x z bb bd
bf:i32[] = reduce_sum[axes=(0,) out_sharding=None] be
in (bf,) }
```

Each entry of the list is handled as a separate input, resulting in a tracing & compilation overhead that grows linearly with the size of the list. To prevent surprises like this, JAX avoids implicit conversions of lists and tuples to arrays.

If you would like to pass a tuple or list to a JAX function, you can do so by first explicitly converting it to an array:

```
jnp.sum(jnp.array(x))
```

```
Array(45, dtype=int32)
```

## 🔪 Random numbers[#](#random-numbers)

JAX’s pseudo-random number generation differs from Numpy’s in important ways. For a quick how-to, see [Pseudorandom numbers](thinking_in_jax.html#key-concepts-prngs). For more details, see the [Pseudorandom numbers](../random-numbers.html#pseudorandom-numbers) tutorial.

## 🔪 Control flow[#](#control-flow)

## 🔪 Dynamic shapes[#](#dynamic-shapes)

JAX code used within transforms like `jax.jit`

, `jax.vmap`

, `jax.grad`

, etc. requires all output arrays and intermediate arrays to have static shape: that is, the shape cannot depend on values within other arrays.

For example, if you were implementing your own version of `jnp.nansum`

, you might start with something like this:

```
def nansum(x):
mask = ~jnp.isnan(x) # boolean mask selecting non-nan values
x_without_nans = x[mask]
return x_without_nans.sum()
```

Outside JIT and other transforms, this works as expected:

```
x = jnp.array([1, 2, jnp.nan, 3, 4])
print(nansum(x))
```

```
10.0
```

If you attempt to apply `jax.jit`

or another transform to this function, it will error:

```
jax.jit(nansum)(x)
```

```
NonConcreteBooleanIndexError: Array boolean indices must be concrete; got bool[5]
See https://docs.jax.dev/en/latest/errors.html#jax.errors.NonConcreteBooleanIndexError
```

The problem is that the size of `x_without_nans`

is dependent on the values within `x`

, which is another way of saying its size is *dynamic*.
Often in JAX it is possible to work-around the need for dynamically-sized arrays via other means.
For example, here it is possible to use the three-argument form of `jnp.where`

to replace the NaN values with zeros, thus computing the same result while avoiding dynamic shapes:

```
@jax.jit
def nansum_2(x):
mask = ~jnp.isnan(x) # boolean mask selecting non-nan values
return jnp.where(mask, x, 0).sum()
print(nansum_2(x))
```

```
10.0
```

Similar tricks can be played in other situations where dynamically-shaped arrays occur.

## 🔪 Debugging NaNs and Infs[#](#debugging-nans-and-infs)

Use the `jax_debug_nans`

and `jax_debug_infs`

flags to find the source of NaN/Inf values in functions and gradients. See [JAX debugging flags](../debugging/flags.html#debugging-flags).

## 🔪 Double (64bit) precision[#](#double-64bit-precision)

At the moment, JAX by default enforces single-precision numbers to mitigate the Numpy API’s tendency to aggressively promote operands to `double`

. This is the desired behavior for many machine-learning applications, but it may catch you by surprise!

```
x = random.uniform(random.key(0), (1000,), dtype=jnp.float64)
x.dtype
```

```
/tmp/ipykernel_2194/1258726447.py:1: UserWarning: Explicitly requested dtype float64 is not available, and will be truncated to dtype float32. To enable more dtypes, set the jax_enable_x64 configuration option or the JAX_ENABLE_X64 shell environment variable. See https://github.com/jax-ml/jax#current-gotchas for more.
x = random.uniform(random.key(0), (1000,), dtype=jnp.float64)
```

```
dtype('float32')
```

To use double-precision numbers, you need to set the `jax_enable_x64`

configuration variable **at startup**.

There are a few ways to do this:

You can enable 64-bit mode by setting the environment variable

`JAX_ENABLE_X64=True`

.You can manually set the

`jax_enable_x64`

configuration flag at startup:# again, this only works on startup! import jax jax.config.update("jax_enable_x64", True)

You can parse command-line flags with

`absl.app.run(main)`

import jax jax.config.config_with_absl()

If you want JAX to run absl parsing for you, i.e. you don’t want to do

`absl.app.run(main)`

, you can instead useimport jax if __name__ == '__main__': # calls jax.config.config_with_absl() *and* runs absl parsing jax.config.parse_flags_with_absl()


Note that #2-#4 work for *any* of JAX’s configuration options.

We can then confirm that `x64`

mode is enabled, for example:

```
import jax
import jax.numpy as jnp
from jax import random
jax.config.update("jax_enable_x64", True)
x = random.uniform(random.key(0), (1000,), dtype=jnp.float64)
x.dtype # --> dtype('float64')
```

### Caveats[#](#caveats)

⚠️ XLA doesn’t support 64-bit convolutions on all backends!

## 🔪 Miscellaneous divergences from NumPy[#](#miscellaneous-divergences-from-numpy)

While `jax.numpy`

makes every attempt to replicate the behavior of numpy’s API, there do exist corner cases where the behaviors differ.
Many such cases are discussed in detail in the sections above; here we list several other known places where the APIs diverge.

For binary operations, JAX’s type promotion rules differ somewhat from those used by NumPy. See

[Type Promotion Semantics](https://docs.jax.dev/en/latest/type_promotion.html)for more details.When performing unsafe type casts (i.e. casts in which the target dtype cannot represent the input value), JAX’s behavior may be backend dependent, and in general may diverge from NumPy’s behavior. Numpy allows control over the result in these scenarios via the

`casting`

argument (see); JAX does not provide any such configuration, instead directly inheriting the behavior of`np.ndarray.astype`

[XLA:ConvertElementType](https://www.openxla.org/xla/operation_semantics#convertelementtype).Here is an example of an unsafe cast with differing results between NumPy and JAX:

>>> np.arange(254.0, 258.0).astype('uint8') array([254, 255, 0, 1], dtype=uint8) >>> jnp.arange(254.0, 258.0).astype('uint8') Array([254, 255, 255, 255], dtype=uint8)

This sort of mismatch would typically arise when casting extreme values from floating to integer types or vice versa.

When operating on

[subnormal](https://en.wikipedia.org/wiki/Subnormal_number)floating point numbers, JAX operations use flush-to-zero semantics on some backends. For example:>>> import jax.numpy as jnp >>> subnormal = jnp.float32(1E-45) >>> subnormal # subnormals are representable Array(1.e-45, dtype=float32) >>> subnormal + 0 # but are flushed to zero within operations Array(0., dtype=float32)

The detailed operation semantics for subnormal values will generally vary depending on the backend.


## Fin.[#](#fin)

If something’s not covered here that has caused you weeping and gnashing of teeth, please let us know and we’ll extend these introductory *advisos*!

---

## Source: https://jax.readthedocs.io/en/latest/jax-101.html

# JAX 101[#](#jax-101)

These tutorials cover basic usage of JAX and its features, including some of the
internal mechanisms that make JAX work. They start with the fundamentals and are
meant to be read sequentially. For more in-depth discussions of JAX’s design and
implementation, in no particular order, see the [advanced guides](advanced_guides.html).

---

## Source: https://jax.readthedocs.io/en/latest/jit-compilation.html

# Just-in-time compilation[#](#just-in-time-compilation)

In this section, we will further explore how JAX works, and how we can make it performant.
We will discuss the [ jax.jit()](_autosummary/jax.jit.html#jax.jit) transformation, which will perform

*Just In Time*(JIT) compilation of a JAX Python function so it can be executed efficiently in XLA.

## How JAX transformations work[#](#how-jax-transformations-work)

In the previous section, we discussed that JAX allows us to transform Python functions.
JAX accomplishes this by reducing each function into a sequence of [primitive](glossary.html#term-primitive) operations, each
representing one fundamental unit of computation.

One way to see the sequence of primitives behind a function is using [ jax.make_jaxpr()](_autosummary/jax.make_jaxpr.html#jax.make_jaxpr):

```
import jax
import jax.numpy as jnp
global_list = []
def log2(x):
global_list.append(x)
ln_x = jnp.log(x)
ln_2 = jnp.log(2.0)
return ln_x / ln_2
print(jax.make_jaxpr(log2)(3.0))
```

```
{ lambda ; a:f32[]. let
b:f32[] = log a
c:f32[] = log 2.0:f32[]
d:f32[] = div b c
in (d,) }
```

The [JAX internals: The jaxpr language](jaxpr.html#jax-internals-jaxpr) section of the documentation provides more information on the meaning of the above output.

Importantly, notice that the jaxpr does not capture the side-effect present in the function: there is nothing in it corresponding to `global_list.append(x)`

.
This is a feature, not a bug: JAX transformations are designed to understand side-effect-free (a.k.a. functionally pure) code.
If *pure function* and *side-effect* are unfamiliar terms, this is explained in a little more detail in [🔪 JAX - The Sharp Bits 🔪: Pure Functions](https://docs.jax.dev/en/latest/notebooks/Common_Gotchas_in_JAX.html#pure-functions).

Impure functions are dangerous because under JAX transformations they are likely not to behave as intended; they might fail silently, or produce surprising downstream errors like leaked [Tracers](key-concepts.html#key-concepts-tracing).
Moreover, JAX often can’t detect when side effects are present.
(If you want debug printing, use [ jax.debug.print()](_autosummary/jax.debug.print.html#jax.debug.print). To express general side-effects at the cost of performance, see

[. To check for tracer leaks at the cost of performance, use with](_autosummary/jax.experimental.io_callback.html#jax.experimental.io_callback)

`jax.experimental.io_callback()`

[).](_autosummary/jax.check_tracer_leaks.html#jax.check_tracer_leaks)

`jax.check_tracer_leaks()`

When tracing, JAX wraps each argument by a *tracer* object. These tracers then record all JAX operations performed on them during the function call (which happens in regular Python). Then, JAX uses the tracer records to reconstruct the entire function. The output of that reconstruction is the jaxpr. Since the tracers do not record the Python side-effects, they do not appear in the jaxpr. However, the side-effects still happen during the trace itself.

Note: the Python `print()`

function is not pure: the text output is a side-effect of the function. Therefore, any `print()`

calls will only happen during tracing, and will not appear in the jaxpr:

```
def log2_with_print(x):
print("printed x:", x)
ln_x = jnp.log(x)
ln_2 = jnp.log(2.0)
return ln_x / ln_2
print(jax.make_jaxpr(log2_with_print)(3.))
```

```
printed x: JitTracer(~float32[])
{ lambda ; a:f32[]. let
b:f32[] = log a
c:f32[] = log 2.0:f32[]
d:f32[] = div b c
in (d,) }
```

See how the printed `x`

is a `Traced`

object? That’s the JAX internals at work.

The fact that the Python code runs at least once is strictly an implementation detail, and so shouldn’t be relied upon. However, it’s useful to understand as you can use it when debugging to print out intermediate values of a computation.

A key thing to understand is that a jaxpr captures the function as executed on the parameters given to it. For example, if we have a Python conditional, the jaxpr will only know about the branch we take:

```
def log2_if_rank_2(x):
if x.ndim == 2:
ln_x = jnp.log(x)
ln_2 = jnp.log(2.0)
return ln_x / ln_2
else:
return x
print(jax.make_jaxpr(log2_if_rank_2)(jax.numpy.array([1, 2, 3])))
```

```
{ lambda ; a:i32[3]. let in (a,) }
```

## JIT compiling a function[#](#jit-compiling-a-function)

As explained before, JAX enables operations to execute on CPU/GPU/TPU using the same code.
Let’s look at an example of computing a *Scaled Exponential Linear Unit*
([SELU](https://proceedings.neurips.cc/paper/6698-self-normalizing-neural-networks.pdf)), an
operation commonly used in deep learning:

```
import jax
import jax.numpy as jnp
def selu(x, alpha=1.67, lambda_=1.05):
return lambda_ * jnp.where(x > 0, x, alpha * jnp.exp(x) - alpha)
x = jnp.arange(1000000)
%timeit selu(x).block_until_ready()
```

```
5.85 ms ± 82 μs per loop (mean ± std. dev. of 7 runs, 100 loops each)
```

The code above is sending one operation at a time to the accelerator. This limits the ability of the XLA compiler to optimize our functions.

Naturally, what we want to do is give the XLA compiler as much code as possible, so it can fully optimize it. For this purpose, JAX provides the [ jax.jit()](_autosummary/jax.jit.html#jax.jit) transformation, which will JIT compile a JAX-compatible function. The example below shows how to use JIT to speed up the previous function.

```
selu_jit = jax.jit(selu)
# Pre-compile the function before timing...
selu_jit(x).block_until_ready()
%timeit selu_jit(x).block_until_ready()
```

```
590 μs ± 2.14 μs per loop (mean ± std. dev. of 7 runs, 1,000 loops each)
```

Here’s what just happened:

We defined

`selu_jit`

as the compiled version of`selu`

.We called

`selu_jit`

once on`x`

. This is where JAX does its tracing – it needs to have some inputs to wrap in tracers, after all. The jaxpr is then compiled using XLA into very efficient code optimized for your GPU or TPU. Finally, the compiled code is executed to satisfy the call. Subsequent calls to`selu_jit`

will use the compiled code directly, skipping the python implementation entirely. (If we didn’t include the warm-up call separately, everything would still work, but then the compilation time would be included in the benchmark. It would still be faster, because we run many loops in the benchmark, but it wouldn’t be a fair comparison.)We timed the execution speed of the compiled version. (Note the use of

, which is required due to JAX’s`block_until_ready()`

[Asynchronous dispatch](async_dispatch.html#async-dispatch)).

## Why can’t we just JIT everything?[#](#why-can-t-we-just-jit-everything)

After going through the example above, you might be wondering whether we should simply apply [ jax.jit()](_autosummary/jax.jit.html#jax.jit) to every function. To understand why this is not the case, and when we should/shouldn’t apply

`jit`

, let’s first check some cases where JIT doesn’t work.```
# Condition on value of x.
def f(x):
if x > 0:
return x
else:
return 2 * x
jax.jit(f)(10) # Raises an error
```

```
TracerBoolConversionError: Attempted boolean conversion of traced array with shape bool[].
The error occurred while tracing the function f at /tmp/ipykernel_2114/2956679937.py:3 for jit. This concrete value was not available in Python because it depends on the value of the argument x.
See https://docs.jax.dev/en/latest/errors.html#jax.errors.TracerBoolConversionError
```

```
# While loop conditioned on x and n.
def g(x, n):
i = 0
while i < n:
i += 1
return x + i
jax.jit(g)(10, 20) # Raises an error
```

```
TracerBoolConversionError: Attempted boolean conversion of traced array with shape bool[].
The error occurred while tracing the function g at /tmp/ipykernel_2114/722961019.py:3 for jit. This concrete value was not available in Python because it depends on the value of the argument n.
See https://docs.jax.dev/en/latest/errors.html#jax.errors.TracerBoolConversionError
```

The problem in both cases is that we tried to condition the trace-time flow of the program using runtime values.
Traced values within JIT, like `x`

and `n`

here, can only affect control flow via their static attributes: such as
`shape`

or `dtype`

, and not via their values.
For more detail on the interaction between Python control flow and JAX, see [Control flow and logical operators with JIT](control-flow.html#control-flow).

One way to deal with this problem is to rewrite the code to avoid conditionals on value. Another is to use special [Control flow operators](jax.lax.html#lax-control-flow) like [ jax.lax.cond()](_autosummary/jax.lax.cond.html#jax.lax.cond). However, sometimes that is not possible or practical.
In that case, you can consider JIT-compiling only part of the function.
For example, if the most computationally expensive part of the function is inside the loop, we can JIT-compile just that inner part (though make sure to check the next section on caching to avoid shooting yourself in the foot):

```
# While loop conditioned on x and n with a jitted body.
@jax.jit
def loop_body(prev_i):
return prev_i + 1
def g_inner_jitted(x, n):
i = 0
while i < n:
i = loop_body(i)
return x + i
g_inner_jitted(10, 20)
```

```
Array(30, dtype=int32, weak_type=True)
```

## Marking arguments as static[#](#marking-arguments-as-static)

If we really need to JIT-compile a function that has a condition on the value of an input, we can tell JAX to help itself to a less abstract tracer for a particular input by specifying `static_argnums`

or `static_argnames`

.
The cost of this is that the resulting jaxpr and compiled artifact depends on the particular value passed, and so JAX will have to re-compile the function for every new value of the specified static input.
It is only a good strategy if the function is guaranteed to see a limited set of static values.

```
f_jit_correct = jax.jit(f, static_argnums=0)
print(f_jit_correct(10))
```

```
10
```

```
g_jit_correct = jax.jit(g, static_argnames=['n'])
print(g_jit_correct(10, 20))
```

```
30
```

To specify such arguments when using `jit`

as a decorator, a common pattern is to use python’s [ functools.partial()](https://docs.python.org/3/library/functools.html#functools.partial):

```
from functools import partial
@partial(jax.jit, static_argnames=['n'])
def g_jit_decorated(x, n):
i = 0
while i < n:
i += 1
return x + i
print(g_jit_decorated(10, 20))
```

```
30
```

## JIT and caching[#](#jit-and-caching)

With the compilation overhead of the first JIT call, understanding how and when [ jax.jit()](_autosummary/jax.jit.html#jax.jit) caches previous compilations is key to using it effectively.

Suppose we define `f = jax.jit(g)`

. When we first invoke `f`

, it will get compiled, and the resulting XLA code will get cached. Subsequent calls of `f`

will reuse the cached code.
This is how `jax.jit`

makes up for the up-front cost of compilation.

If we specify `static_argnums`

, then the cached code will be used only for the same values of arguments labelled as static. If any of them change, recompilation occurs.
If there are many values, then your program might spend more time compiling than it would have executing ops one-by-one.

Avoid calling [ jax.jit()](_autosummary/jax.jit.html#jax.jit) on temporary functions defined inside loops or other Python scopes.
For most cases, JAX will be able to use the compiled, cached function in subsequent calls to

[. However, because the cache relies on the hash of the function, it becomes problematic when equivalent functions are redefined. This will cause unnecessary compilation each time in the loop:](_autosummary/jax.jit.html#jax.jit)

`jax.jit()`

```
from functools import partial
def unjitted_loop_body(prev_i):
return prev_i + 1
def g_inner_jitted_partial(x, n):
i = 0
while i < n:
# Don't do this! each time the partial returns
# a function with different hash
i = jax.jit(partial(unjitted_loop_body))(i)
return x + i
def g_inner_jitted_lambda(x, n):
i = 0
while i < n:
# Don't do this!, lambda will also return
# a function with a different hash
i = jax.jit(lambda x: unjitted_loop_body(x))(i)
return x + i
def g_inner_jitted_normal(x, n):
i = 0
while i < n:
# this is OK, since JAX can find the
# cached, compiled function
i = jax.jit(unjitted_loop_body)(i)
return x + i
print("jit called in a loop with partials:")
%timeit g_inner_jitted_partial(10, 20).block_until_ready()
print("jit called in a loop with lambdas:")
%timeit g_inner_jitted_lambda(10, 20).block_until_ready()
print("jit called in a loop with caching:")
%timeit g_inner_jitted_normal(10, 20).block_until_ready()
```

```
jit called in a loop with partials:
425 ms ± 4.44 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)
jit called in a loop with lambdas:
433 ms ± 7.37 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)
jit called in a loop with caching:
2.69 ms ± 13.5 μs per loop (mean ± std. dev. of 7 runs, 100 loops each)
```

---

## Source: https://jax.readthedocs.io/en/latest/automatic-vectorization.html

# Automatic vectorization[#](#automatic-vectorization)

In the previous section we discussed JIT compilation via the [ jax.jit()](_autosummary/jax.jit.html#jax.jit) function.
This notebook discusses another of JAX’s transforms: vectorization via

[.](_autosummary/jax.vmap.html#jax.vmap)

`jax.vmap()`

## Manual vectorization[#](#manual-vectorization)

Consider the following simple code that computes the convolution of two one-dimensional vectors:

```
import jax
import jax.numpy as jnp
x = jnp.arange(5)
w = jnp.array([2., 3., 4.])
def convolve(x, w):
output = []
for i in range(1, len(x)-1):
output.append(jnp.dot(x[i-1:i+2], w))
return jnp.array(output)
convolve(x, w)
```

```
Array([11., 20., 29.], dtype=float32)
```

Suppose we would like to apply this function to a batch of weights `w`

to a batch of vectors `x`

.

```
xs = jnp.stack([x, x])
ws = jnp.stack([w, w])
```

The most naive option would be to simply loop over the batch in Python:

```
def manually_batched_convolve(xs, ws):
output = []
for i in range(xs.shape[0]):
output.append(convolve(xs[i], ws[i]))
return jnp.stack(output)
manually_batched_convolve(xs, ws)
```

```
Array([[11., 20., 29.],
[11., 20., 29.]], dtype=float32)
```

This produces the correct result, however it is not very efficient.

In order to batch the computation efficiently, you would normally have to rewrite the function manually to ensure it is done in vectorized form. This is not particularly difficult to implement, but does involve changing how the function treats indices, axes, and other parts of the input.

For example, we could manually rewrite `convolve()`

to support vectorized computation across the batch dimension as follows:

```
def manually_vectorized_convolve(xs, ws):
output = []
for i in range(1, xs.shape[-1] -1):
output.append(jnp.sum(xs[:, i-1:i+2] * ws, axis=1))
return jnp.stack(output, axis=1)
manually_vectorized_convolve(xs, ws)
```

```
Array([[11., 20., 29.],
[11., 20., 29.]], dtype=float32)
```

Such re-implementation can be messy and error-prone as the complexity of a function increases; fortunately JAX provides another way.

## Automatic vectorization[#](#id2)

In JAX, the [ jax.vmap()](_autosummary/jax.vmap.html#jax.vmap) transformation is designed to generate such a vectorized implementation of a function automatically:

```
auto_batch_convolve = jax.vmap(convolve)
auto_batch_convolve(xs, ws)
```

```
Array([[11., 20., 29.],
[11., 20., 29.]], dtype=float32)
```

It does this by tracing the function similarly to [ jax.jit()](_autosummary/jax.jit.html#jax.jit), and automatically adding batch axes at the beginning of each input.

If the batch dimension is not the first, you may use the `in_axes`

and `out_axes`

arguments to specify the location of the batch dimension in inputs and outputs. These may be an integer if the batch axis is the same for all inputs and outputs, or lists, otherwise.

```
auto_batch_convolve_v2 = jax.vmap(convolve, in_axes=1, out_axes=1)
xst = jnp.transpose(xs)
wst = jnp.transpose(ws)
auto_batch_convolve_v2(xst, wst)
```

```
Array([[11., 11.],
[20., 20.],
[29., 29.]], dtype=float32)
```

[ jax.vmap()](_autosummary/jax.vmap.html#jax.vmap) also supports the case where only one of the arguments is batched: for example, if you would like to convolve to a single set of weights

`w`

with a batch of vectors `x`

; in this case the `in_axes`

argument can be set to `None`

:```
batch_convolve_v3 = jax.vmap(convolve, in_axes=[0, None])
batch_convolve_v3(xs, w)
```

```
Array([[11., 20., 29.],
[11., 20., 29.]], dtype=float32)
```

## Combining transformations[#](#combining-transformations)

As with all JAX transformations, [ jax.jit()](_autosummary/jax.jit.html#jax.jit) and

[are designed to be composable, which means you can wrap a vmapped function with](_autosummary/jax.vmap.html#jax.vmap)

`jax.vmap()`

`jit`

, or a jitted function with `vmap`

, and everything will work correctly:```
jitted_batch_convolve = jax.jit(auto_batch_convolve)
jitted_batch_convolve(xs, ws)
```

```
Array([[11., 20., 29.],
[11., 20., 29.]], dtype=float32)
```

It is sometimes useful to compose `vmap`

with itself. For instance, we can
succinctly express the pairwise evaluation of a function using two nested
applications of `vmap`

:

```
def pairwise(f, xs):
return jax.vmap(lambda x: jax.vmap(lambda y: f(x, y))(xs))(xs)
```

Suppose `xs`

is a matrix whose M rows are each N-dimensional points, and that
`dist(x, y)`

computes the distance between two N-dimensional vectors. Then
`pairwise(dist, xs)`

is the M-by-M matrix of pairwise distances among `xs`

.

---

## Source: https://jax.readthedocs.io/en/latest/automatic-differentiation.html

# Automatic differentiation[#](#automatic-differentiation)

In this section, you will learn about fundamental applications of automatic differentiation (autodiff) in JAX. JAX has a pretty general autodiff system. Computing gradients is a critical part of modern machine learning methods, and this tutorial will walk you through a few introductory autodiff topics, such as:

[3. Differentiating with respect to nested lists, tuples, and dicts](#automatic-differentiation-nested-lists-tuples-and-dicts)[4. Evaluating a function and its gradient using jax.value_and_grad](#automatic-differentiation-evaluating-using-jax-value-and-grad)

Make sure to also check out the [“Advanced automatic differentiation” guides](advanced_guides.html#advanced-guides) for more advanced topics.

While understanding how automatic differentiation works “under the hood” isn’t crucial for using JAX in most contexts, you are encouraged to check out this quite accessible [video](https://www.youtube.com/watch?v=wG_nF1awSSY) to get a deeper sense of what’s going on.

## 1. Taking gradients with `jax.grad`

[#](#taking-gradients-with-jax-grad)

In JAX, you can differentiate a scalar-valued function with the [ jax.grad()](_autosummary/jax.grad.html#jax.grad) transformation:

```
import jax
import jax.numpy as jnp
from jax import grad
grad_tanh = grad(jnp.tanh)
print(grad_tanh(2.0))
```

```
0.070650816
```

[ jax.grad()](_autosummary/jax.grad.html#jax.grad) takes a function and returns a function. If you have a Python function

`f`

that evaluates the mathematical function \(f\), then `jax.grad(f)`

is a Python function that evaluates the mathematical function \(\nabla f\). That means `grad(f)(x)`

represents the value \(\nabla f(x)\).Since [ jax.grad()](_autosummary/jax.grad.html#jax.grad) operates on functions, you can apply it to its own output to differentiate as many times as you like:

```
print(grad(grad(jnp.tanh))(2.0))
print(grad(grad(grad(jnp.tanh)))(2.0))
```

```
-0.13621868
0.25265405
```

JAX’s autodiff makes it easy to compute higher-order derivatives, because the functions that compute derivatives are themselves differentiable. Thus, higher-order derivatives are as easy as stacking transformations. This can be illustrated in the single-variable case:

The derivative of \(f(x) = x^3 + 2x^2 - 3x + 1\) can be computed as:

```
f = lambda x: x**3 + 2*x**2 - 3*x + 1
dfdx = jax.grad(f)
```

The higher-order derivatives of \(f\) are:

Computing any of these in JAX is as easy as chaining the [ jax.grad()](_autosummary/jax.grad.html#jax.grad) function:

```
d2fdx = jax.grad(dfdx)
d3fdx = jax.grad(d2fdx)
d4fdx = jax.grad(d3fdx)
```

Evaluating the above in \(x=1\) would give you:

Using JAX:

```
print(dfdx(1.))
print(d2fdx(1.))
print(d3fdx(1.))
print(d4fdx(1.))
```

```
4.0
10.0
6.0
0.0
```

## 2. Computing gradients in a linear logistic regression[#](#computing-gradients-in-a-linear-logistic-regression)

The next example shows how to compute gradients with [ jax.grad()](_autosummary/jax.grad.html#jax.grad) in a linear logistic regression model. First, the setup:

```
key = jax.random.key(0)
def sigmoid(x):
return 0.5 * (jnp.tanh(x / 2) + 1)
# Outputs probability of a label being true.
def predict(W, b, inputs):
return sigmoid(jnp.dot(inputs, W) + b)
# Build a toy dataset.
inputs = jnp.array([[0.52, 1.12, 0.77],
[0.88, -1.08, 0.15],
[0.52, 0.06, -1.30],
[0.74, -2.49, 1.39]])
targets = jnp.array([True, True, False, True])
# Training loss is the negative log-likelihood of the training examples.
def loss(W, b):
preds = predict(W, b, inputs)
label_probs = preds * targets + (1 - preds) * (1 - targets)
return -jnp.sum(jnp.log(label_probs))
# Initialize random model coefficients
key, W_key, b_key = jax.random.split(key, 3)
W = jax.random.normal(W_key, (3,))
b = jax.random.normal(b_key, ())
```

Use the [ jax.grad()](_autosummary/jax.grad.html#jax.grad) function with its

`argnums`

argument to differentiate a function with respect to positional arguments.```
# Differentiate `loss` with respect to the first positional argument:
W_grad = grad(loss, argnums=0)(W, b)
print(f'{W_grad=}')
# Since argnums=0 is the default, this does the same thing:
W_grad = grad(loss)(W, b)
print(f'{W_grad=}')
# But you can choose different values too, and drop the keyword:
b_grad = grad(loss, 1)(W, b)
print(f'{b_grad=}')
# Including tuple values
W_grad, b_grad = grad(loss, (0, 1))(W, b)
print(f'{W_grad=}')
print(f'{b_grad=}')
```

```
W_grad=Array([-0.433146 , -0.7354605, -1.2598922], dtype=float32)
W_grad=Array([-0.433146 , -0.7354605, -1.2598922], dtype=float32)
b_grad=Array(-0.69001776, dtype=float32)
W_grad=Array([-0.433146 , -0.7354605, -1.2598922], dtype=float32)
b_grad=Array(-0.69001776, dtype=float32)
```

The [ jax.grad()](_autosummary/jax.grad.html#jax.grad) API has a direct correspondence to the excellent notation in Spivak’s classic

*Calculus on Manifolds*(1965), also used in Sussman and Wisdom’s

[(2015) and their](https://mitpress.mit.edu/9780262028967/structure-and-interpretation-of-classical-mechanics)

*Structure and Interpretation of Classical Mechanics*[(2013). Both books are open-access. See in particular the “Prologue” section of](https://mitpress.mit.edu/9780262019347/functional-differential-geometry)

*Functional Differential Geometry**Functional Differential Geometry*for a defense of this notation.

Essentially, when using the `argnums`

argument, if `f`

is a Python function for evaluating the mathematical function \(f\), then the Python expression `jax.grad(f, i)`

evaluates to a Python function for evaluating \(\partial_i f\).

## 3. Differentiating with respect to nested lists, tuples, and dicts[#](#differentiating-with-respect-to-nested-lists-tuples-and-dicts)

Due to JAX’s PyTree abstraction (see [Pytrees](pytrees.html#working-with-pytrees)), differentiating with
respect to standard Python containers just works, so use tuples, lists, and dicts (and arbitrary nesting) however you like.

Continuing the previous example:

```
def loss2(params_dict):
preds = predict(params_dict['W'], params_dict['b'], inputs)
label_probs = preds * targets + (1 - preds) * (1 - targets)
return -jnp.sum(jnp.log(label_probs))
print(grad(loss2)({'W': W, 'b': b}))
```

```
{'W': Array([-0.433146 , -0.7354605, -1.2598922], dtype=float32), 'b': Array(-0.69001776, dtype=float32)}
```

You can create [Custom pytree nodes](custom_pytrees.html#pytrees-custom-pytree-nodes) to work with not just [ jax.grad()](_autosummary/jax.grad.html#jax.grad) but other JAX transformations (

[,](_autosummary/jax.jit.html#jax.jit)

`jax.jit()`

[, and so on).](_autosummary/jax.vmap.html#jax.vmap)

`jax.vmap()`

## 4. Evaluating a function and its gradient using `jax.value_and_grad`

[#](#evaluating-a-function-and-its-gradient-using-jax-value-and-grad)

Another convenient function is [ jax.value_and_grad()](_autosummary/jax.value_and_grad.html#jax.value_and_grad) for efficiently computing both a function’s value as well as its gradient’s value in one pass.

Continuing the previous examples:

```
loss_value, Wb_grad = jax.value_and_grad(loss, (0, 1))(W, b)
print('loss value', loss_value)
print('loss value', loss(W, b))
```

```
loss value 2.9729187
loss value 2.9729187
```

## 5. Checking against numerical differences[#](#checking-against-numerical-differences)

A great thing about derivatives is that they’re straightforward to check with finite differences.

Continuing the previous examples:

```
# Set a step size for finite differences calculations
eps = 1e-4
# Check b_grad with scalar finite differences
b_grad_numerical = (loss(W, b + eps / 2.) - loss(W, b - eps / 2.)) / eps
print('b_grad_numerical', b_grad_numerical)
print('b_grad_autodiff', grad(loss, 1)(W, b))
# Check W_grad with finite differences in a random direction
key, subkey = jax.random.split(key)
vec = jax.random.normal(subkey, W.shape)
unitvec = vec / jnp.sqrt(jnp.vdot(vec, vec))
W_grad_numerical = (loss(W + eps / 2. * unitvec, b) - loss(W - eps / 2. * unitvec, b)) / eps
print('W_dirderiv_numerical', W_grad_numerical)
print('W_dirderiv_autodiff', jnp.vdot(grad(loss)(W, b), unitvec))
```

```
b_grad_numerical -0.6890297
b_grad_autodiff -0.69001776
W_dirderiv_numerical 1.3041496
W_dirderiv_autodiff 1.3006744
```

JAX provides a simple convenience function that does essentially the same thing, but checks up to any order of differentiation that you like:

```
from jax.test_util import check_grads
check_grads(loss, (W, b), order=2) # check up to 2nd order derivatives
```

## Next steps[#](#next-steps)

The [“Advanced automatic differentiation” guides](advanced_guides.html#advanced-guides) provide more advanced and detailed explanations of how the ideas covered in this document are implemented in the JAX backend. Some features, such as [Custom derivative rules for JAX-transformable Python functions](notebooks/Custom_derivative_rules_for_Python_code.html#advanced-autodiff-custom-derivative-rules), depend on understanding advanced automatic differentiation, so do check out that section if you are interested.

---

## Source: https://jax.readthedocs.io/en/latest/pytrees.html

# Pytrees[#](#working-with-pytrees)

JAX has built-in support for objects that look like dictionaries (dicts) of arrays, or lists of lists of dicts, or other nested structures — in JAX these are called pytrees. This section will explain how to use them, provide useful code examples, and point out common “gotchas” and patterns.

For an explanation of how to create custom pytrees, see [Custom pytree nodes](custom_pytrees.html).

## What is a pytree?[#](#what-is-a-pytree)

A pytree is a container-like structure built out of container-like Python objects — “leaf” pytrees and/or more pytrees. A pytree can include lists, tuples, and dicts. A leaf is anything that’s not a pytree, such as an array, but a single leaf is also a pytree.

In the context of machine learning (ML), a pytree can contain:

Model parameters

Dataset entries

Reinforcement learning agent observations


When working with datasets, you can often come across pytrees (such as lists of lists of dicts).

Below is an example of a simple pytree. In JAX, you can use [ jax.tree.leaves()](_autosummary/jax.tree.leaves.html#jax.tree.leaves), to extract the flattened leaves from the trees, as demonstrated here:

```
import jax
import jax.numpy as jnp
example_trees = [
[1, 'a', object()],
(1, (2, 3), ()),
[1, {'k1': 2, 'k2': (3, 4)}, 5],
{'a': 2, 'b': (2, 3)},
jnp.array([1, 2, 3]),
]
# Print how many leaves the pytrees have.
for pytree in example_trees:
# This `jax.tree.leaves()` method extracts the flattened leaves from the pytrees.
leaves = jax.tree.leaves(pytree)
print(f"{repr(pytree):<45} has {len(leaves)} leaves: {leaves}")
```

```
[1, 'a', <object object at 0x7959b18dc560>] has 3 leaves: [1, 'a', <object object at 0x7959b18dc560>]
(1, (2, 3), ()) has 3 leaves: [1, 2, 3]
[1, {'k1': 2, 'k2': (3, 4)}, 5] has 5 leaves: [1, 2, 3, 4, 5]
{'a': 2, 'b': (2, 3)} has 3 leaves: [2, 2, 3]
Array([1, 2, 3], dtype=int32) has 1 leaves: [Array([1, 2, 3], dtype=int32)]
```

Any tree-like structure built out of container-like Python objects can be treated as a pytree in JAX.
Classes are considered container-like if they are in the pytree registry, which by default includes lists, tuples, and dicts. Any object whose type is *not* in the pytree container registry will be treated as a leaf node in the tree.

The pytree registry can be extended to include user-defined container classes by registering the class
with functions that specify how to flatten the tree; see [Custom pytree nodes](custom_pytrees.html#pytrees-custom-pytree-nodes) below.

## Common pytree functions[#](#common-pytree-functions)

JAX provides a number of utilities to operate over pytrees. These can be found in the [ jax.tree_util](jax.tree_util.html#module-jax.tree_util) subpackage;
for convenience many of these have aliases in the

[module.](jax.tree.html#module-jax.tree)

`jax.tree`

### Common function: `jax.tree.map`

[#](#common-function-jax-tree-map)

The most commonly used pytree function is [ jax.tree.map()](_autosummary/jax.tree.map.html#jax.tree.map). It works analogously to Python’s native

`map`

, but transparently operates over entire pytrees.Here’s an example:

```
list_of_lists = [
[1, 2, 3],
[1, 2],
[1, 2, 3, 4]
]
jax.tree.map(lambda x: x*2, list_of_lists)
```

```
[[2, 4, 6], [2, 4], [2, 4, 6, 8]]
```

[ jax.tree.map()](_autosummary/jax.tree.map.html#jax.tree.map) also allows mapping a

[N-ary](https://en.wikipedia.org/wiki/N-ary)function over multiple arguments. For example:

```
another_list_of_lists = list_of_lists
jax.tree.map(lambda x, y: x+y, list_of_lists, another_list_of_lists)
```

```
[[2, 4, 6], [2, 4], [2, 4, 6, 8]]
```

When using multiple arguments with [ jax.tree.map()](_autosummary/jax.tree.map.html#jax.tree.map), the structure of the inputs must exactly match. That is, lists must have the same number of elements, dicts must have the same keys, etc.

### Example of `jax.tree.map`

with ML model parameters[#](#example-of-jax-tree-map-with-ml-model-parameters)

This example demonstrates how pytree operations can be useful when training a simple [multi-layer perceptron (MLP)](https://en.wikipedia.org/wiki/Multilayer_perceptron).

Begin with defining the initial model parameters:

```
import numpy as np
def init_mlp_params(layer_widths):
params = []
for n_in, n_out in zip(layer_widths[:-1], layer_widths[1:]):
params.append(
dict(weights=np.random.normal(size=(n_in, n_out)) * np.sqrt(2/n_in),
biases=np.ones(shape=(n_out,))
)
)
return params
params = init_mlp_params([1, 128, 128, 1])
```

Use [ jax.tree.map()](_autosummary/jax.tree.map.html#jax.tree.map) to check the shapes of the initial parameters:

```
jax.tree.map(lambda x: x.shape, params)
```

```
[{'biases': (128,), 'weights': (1, 128)},
{'biases': (128,), 'weights': (128, 128)},
{'biases': (1,), 'weights': (128, 1)}]
```

Next, define the functions for training the MLP model:

```
# Define the forward pass.
def forward(params, x):
*hidden, last = params
for layer in hidden:
x = jax.nn.relu(x @ layer['weights'] + layer['biases'])
return x @ last['weights'] + last['biases']
# Define the loss function.
def loss_fn(params, x, y):
return jnp.mean((forward(params, x) - y) ** 2)
# Set the learning rate.
LEARNING_RATE = 0.0001
# Using the stochastic gradient descent, define the parameter update function.
# Apply `@jax.jit` for JIT compilation (speed).
@jax.jit
def update(params, x, y):
# Calculate the gradients with `jax.grad`.
grads = jax.grad(loss_fn)(params, x, y)
# Note that `grads` is a pytree with the same structure as `params`.
# `jax.grad` is one of many JAX functions that has
# built-in support for pytrees.
# This is useful - you can apply the SGD update using JAX pytree utilities.
return jax.tree.map(
lambda p, g: p - LEARNING_RATE * g, params, grads
)
```

## Viewing the pytree definition of an object[#](#viewing-the-pytree-definition-of-an-object)

To view the pytree definition of an arbitrary `object`

for debugging purposes, you can use:

```
from jax.tree_util import tree_structure
print(tree_structure(object))
```

```
PyTreeDef(*)
```

## Pytrees and JAX transformations[#](#pytrees-and-jax-transformations)

Many JAX functions, like [ jax.lax.scan()](_autosummary/jax.lax.scan.html#jax.lax.scan), operate over pytrees of arrays. In addition, all JAX function transformations can be applied to functions that accept as input and produce as output pytrees of arrays.

Some JAX function transformations take optional parameters that specify how certain input or output values should be treated (such as the `in_axes`

and `out_axes`

arguments to [ jax.vmap()](_autosummary/jax.vmap.html#jax.vmap)). These parameters can also be pytrees, and their structure must correspond to the pytree structure of the corresponding arguments. In particular, to be able to “match up” leaves in these parameter pytrees with values in the argument pytrees, the parameter pytrees are often constrained to be tree prefixes of the argument pytrees.

For example, if you pass the following input to [ jax.vmap()](_autosummary/jax.vmap.html#jax.vmap) (note that the input arguments to a function are considered a tuple):

```
vmap(f, in_axes=(a1, {"k1": a2, "k2": a3}))
```

then you can use the following `in_axes`

pytree to specify that only the `k2`

argument is mapped (`axis=0`

), and the rest aren’t mapped over (`axis=None`

):

```
vmap(f, in_axes=(None, {"k1": None, "k2": 0}))
```

The optional parameter pytree structure must match that of the main input pytree. However, the optional parameters can optionally be specified as a “prefix” pytree, meaning that a single leaf value can be applied to an entire sub-pytree.

For example, if you have the same [ jax.vmap()](_autosummary/jax.vmap.html#jax.vmap) input as above, but wish to only map over the dictionary argument, you can use:

```
vmap(f, in_axes=(None, 0)) # equivalent to (None, {"k1": 0, "k2": 0})
```

Alternatively, if you want every argument to be mapped, you can write a single leaf value that is applied over the entire argument tuple pytree:

```
vmap(f, in_axes=0) # equivalent to (0, {"k1": 0, "k2": 0})
```

This happens to be the default `in_axes`

value for [ jax.vmap()](_autosummary/jax.vmap.html#jax.vmap).

The same logic applies to other optional parameters that refer to specific input or output values of a transformed function, such as `out_axes`

in [ jax.vmap()](_autosummary/jax.vmap.html#jax.vmap).

## Explicit key paths[#](#explicit-key-paths)

In a pytree each leaf has a *key path*. A key path for a leaf is a `list`

of *keys*, where the length of the list is equal to the depth of the leaf in the pytree . Each *key* is a [hashable object](https://docs.python.org/3/glossary.html#term-hashable) that represents an index into the corresponding pytree node type. The type of the key depends on the pytree node type; for example, the type of keys for `dict`

s is different from the type of keys for `tuple`

s.

For built-in pytree node types, the set of keys for any pytree node instance is unique. For a pytree comprising nodes with this property, the key path for each leaf is unique.

JAX has the following `jax.tree_util.*`

methods for working with key paths:

: Works similarly to`jax.tree_util.tree_flatten_with_path()`

, but returns key paths.`jax.tree.flatten()`

: Works similarly to`jax.tree_util.tree_map_with_path()`

, but the function also takes key paths as arguments.`jax.tree.map()`

: Given a general key path, returns a reader-friendly string expression.`jax.tree_util.keystr()`


For example, one use case is to print debugging information related to a certain leaf value:

```
import collections
ATuple = collections.namedtuple("ATuple", ('name'))
tree = [1, {'k1': 2, 'k2': (3, 4)}, ATuple('foo')]
flattened, _ = jax.tree_util.tree_flatten_with_path(tree)
for key_path, value in flattened:
print(f'Value of tree{jax.tree_util.keystr(key_path)}: {value}')
```

```
Value of tree[0]: 1
Value of tree[1]['k1']: 2
Value of tree[1]['k2'][0]: 3
Value of tree[1]['k2'][1]: 4
Value of tree[2].name: foo
```

To express key paths, JAX provides a few default key types for the built-in pytree node types, namely:

`SequenceKey(idx: int)`

: For lists and tuples.`DictKey(key: Hashable)`

: For dictionaries.`GetAttrKey(name: str)`

: For`namedtuple`

s and preferably custom pytree nodes (more in the next section)

You are free to define your own key types for your custom nodes. They will work with [ jax.tree_util.keystr()](_autosummary/jax.tree_util.keystr.html#jax.tree_util.keystr) as long as their

`__str__()`

method is also overridden with a reader-friendly expression.```
for key_path, _ in flattened:
print(f'Key path of tree{jax.tree_util.keystr(key_path)}: {repr(key_path)}')
```

```
Key path of tree[0]: (SequenceKey(idx=0),)
Key path of tree[1]['k1']: (SequenceKey(idx=1), DictKey(key='k1'))
Key path of tree[1]['k2'][0]: (SequenceKey(idx=1), DictKey(key='k2'), SequenceKey(idx=0))
Key path of tree[1]['k2'][1]: (SequenceKey(idx=1), DictKey(key='k2'), SequenceKey(idx=1))
Key path of tree[2].name: (SequenceKey(idx=2), GetAttrKey(name='name'))
```

## Common pytree gotchas[#](#common-pytree-gotchas)

This section covers some of the most common problems (“gotchas”) encountered when using JAX pytrees.

### Mistaking pytree nodes for leaves[#](#mistaking-pytree-nodes-for-leaves)

A common gotcha to look out for is accidentally introducing *tree nodes* instead of *leaves*:

```
a_tree = [jnp.zeros((2, 3)), jnp.zeros((3, 4))]
# Try to make another pytree with ones instead of zeros.
shapes = jax.tree.map(lambda x: x.shape, a_tree)
jax.tree.map(jnp.ones, shapes)
```

```
[(Array([1., 1.], dtype=float32), Array([1., 1., 1.], dtype=float32)),
(Array([1., 1., 1.], dtype=float32), Array([1., 1., 1., 1.], dtype=float32))]
```

What happened here is that the `shape`

of an array is a tuple, which is a pytree node, with its elements as leaves. Thus, in the map, instead of calling `jnp.ones`

on e.g. `(2, 3)`

, it’s called on `2`

and `3`

.

The solution will depend on the specifics, but there are two broadly applicable options:

Rewrite the code to avoid the intermediate

.`jax.tree.map()`

Convert the tuple into a NumPy array (

`np.array`

) or a JAX NumPy array (`jnp.array`

), which makes the entire sequence a leaf.

### Handling of `None`

by `jax.tree_util`

[#](#handling-of-none-by-jax-tree-util)

`jax.tree_util`

functions treat `None`

as the absence of a pytree node, not as a leaf:

```
jax.tree.leaves([None, None, None])
```

```
[]
```

To treat `None`

as a leaf, you can use the `is_leaf`

argument:

```
jax.tree.leaves([None, None, None], is_leaf=lambda x: x is None)
```

```
[None, None, None]
```

## Common pytree patterns[#](#common-pytree-patterns)

This section covers some of the most common patterns with JAX pytrees.

### Transposing pytrees with `jax.tree.map`

and `jax.tree.transpose`

[#](#transposing-pytrees-with-jax-tree-map-and-jax-tree-transpose)

To transpose a pytree (turn a list of trees into a tree of lists), JAX has two functions: [ jax.tree.map()](_autosummary/jax.tree.map.html#jax.tree.map) (more basic) and

[(more flexible, complex and verbose).](_autosummary/jax.tree.transpose.html#jax.tree.transpose)

`jax.tree.transpose()`

**Option 1:** Use [ jax.tree.map()](_autosummary/jax.tree.map.html#jax.tree.map). Here’s an example:

```
def tree_transpose(list_of_trees):
"""
Converts a list of trees of identical structure into a single tree of lists.
"""
return jax.tree.map(lambda *xs: list(xs), *list_of_trees)
# Convert a dataset from row-major to column-major.
episode_steps = [dict(t=1, obs=3), dict(t=2, obs=4)]
tree_transpose(episode_steps)
```

```
{'obs': [3, 4], 't': [1, 2]}
```

**Option 2:** For more complex transposes, use [ jax.tree.transpose()](_autosummary/jax.tree.transpose.html#jax.tree.transpose), which is more verbose, but allows you specify the structure of the inner and outer pytree for more flexibility. For example:

```
jax.tree.transpose(
outer_treedef = jax.tree.structure([0 for e in episode_steps]),
inner_treedef = jax.tree.structure(episode_steps[0]),
pytree_to_transpose = episode_steps
)
```

```
{'obs': [3, 4], 't': [1, 2]}
```

### Extending pytrees[#](#extending-pytrees)

Material on extending pytrees has been moved to [Custom pytree nodes](custom_pytrees.html#pytrees-custom-pytree-nodes).

---

## Source: https://jax.readthedocs.io/en/latest/random-numbers.html

# Pseudorandom numbers[#](#pseudorandom-numbers)


If all scientific papers whose results are in doubt because of bad- Numerical Recipes`rand()`

s were to disappear from library shelves, there would be a gap on each shelf about as big as your fist.

In this section we focus on [ jax.random](jax.random.html#module-jax.random) and pseudo random number generation (PRNG); that is, the process of algorithmically generating sequences of numbers whose properties approximate the properties of sequences of random numbers sampled from an appropriate distribution.

PRNG-generated sequences are not truly random because they are actually determined by their initial value, which is typically referred to as the `seed`

, and each step of random sampling is a deterministic function of some `state`

that is carried over from a sample to the next.

Pseudo random number generation is an essential component of any machine learning or scientific computing framework. Generally, JAX strives to be compatible with NumPy, but pseudo random number generation is a notable exception.

To better understand the difference between the approaches taken by JAX and NumPy when it comes to random number generation we will discuss both approaches in this section.

## Random numbers in NumPy[#](#random-numbers-in-numpy)

Pseudo random number generation is natively supported in NumPy by the [ numpy.random](https://numpy.org/doc/stable/reference/random/index.html#module-numpy.random) module.
In NumPy, pseudo random number generation is based on a global

`state`

, which can be set to a deterministic initial condition using [.](https://numpy.org/doc/stable/reference/random/generated/numpy.random.seed.html#numpy.random.seed)

`numpy.random.seed()`

```
import numpy as np
np.random.seed(0)
```

Repeated calls to NumPy’s stateful pseudorandom number generators (PRNGs) mutate the global state and give a stream of pseudorandom numbers:

```
print(np.random.random())
print(np.random.random())
print(np.random.random())
```

```
0.5488135039273248
0.7151893663724195
0.6027633760716439
```

Underneath the hood, NumPy uses the [Mersenne Twister](https://en.wikipedia.org/wiki/Mersenne_Twister) PRNG to power its pseudorandom functions. The PRNG has a period of \(2^{19937}-1\) and at any point can be described by 624 32-bit unsigned ints and a position indicating how much of this “entropy” has been used up.

You can inspect the content of the state using the following command.

```
def print_truncated_random_state():
"""To avoid spamming the outputs, print only part of the state."""
full_random_state = np.random.get_state()
print(str(full_random_state)[:460], '...')
print_truncated_random_state()
```

```
('MT19937', array([2443250962, 1093594115, 1878467924, 2709361018, 1101979660,
3904844661, 676747479, 2085143622, 1056793272, 3812477442,
2168787041, 275552121, 2696932952, 3432054210, 1657102335,
3518946594, 962584079, 1051271004, 3806145045, 1414436097,
2032348584, 1661738718, 1116708477, 2562755208, 3176189976,
696824676, 2399811678, 3992505346, 569184356, 2626558620,
136797809, 4273176064, 296167901, 343 ...
```

The `state`

is updated by each call to a random function:

```
np.random.seed(0)
print_truncated_random_state()
```

```
('MT19937', array([ 0, 1, 1812433255, 1900727105, 1208447044,
2481403966, 4042607538, 337614300, 3232553940, 1018809052,
3202401494, 1775180719, 3192392114, 594215549, 184016991,
829906058, 610491522, 3879932251, 3139825610, 297902587,
4075895579, 2943625357, 3530655617, 1423771745, 2135928312,
2891506774, 1066338622, 135451537, 933040465, 2759011858,
2273819758, 3545703099, 2516396728, 127 ...
```

```
_ = np.random.uniform()
print_truncated_random_state()
```

```
('MT19937', array([2443250962, 1093594115, 1878467924, 2709361018, 1101979660,
3904844661, 676747479, 2085143622, 1056793272, 3812477442,
2168787041, 275552121, 2696932952, 3432054210, 1657102335,
3518946594, 962584079, 1051271004, 3806145045, 1414436097,
2032348584, 1661738718, 1116708477, 2562755208, 3176189976,
696824676, 2399811678, 3992505346, 569184356, 2626558620,
136797809, 4273176064, 296167901, 343 ...
```

NumPy allows you to sample both individual numbers, or entire vectors of numbers in a single function call. For instance, you may sample a vector of 3 scalars from a uniform distribution by doing:

```
np.random.seed(0)
print(np.random.uniform(size=3))
```

```
[0.5488135 0.71518937 0.60276338]
```

NumPy provides a *sequential equivalent guarantee*, meaning that sampling N numbers in a row individually or sampling a vector of N numbers results in the same pseudo-random sequences:

```
np.random.seed(0)
print("individually:", np.stack([np.random.uniform() for _ in range(3)]))
np.random.seed(0)
print("all at once: ", np.random.uniform(size=3))
```

```
individually: [0.5488135 0.71518937 0.60276338]
all at once: [0.5488135 0.71518937 0.60276338]
```

## Random numbers in JAX[#](#random-numbers-in-jax)

JAX’s random number generation differs from NumPy’s in important ways, because NumPy’s PRNG design makes it hard to simultaneously guarantee a number of desirable properties. Specifically, in JAX we want PRNG generation to be:

reproducible,

parallelizable,

vectorisable.


We will discuss why in the following. First, we will focus on the implications of a PRNG design based on a global state. Consider the code:

```
import numpy as np
np.random.seed(0)
def bar(): return np.random.uniform()
def baz(): return np.random.uniform()
def foo(): return bar() + 2 * baz()
print(foo())
```

```
1.9791922366721637
```

The function `foo`

sums two scalars sampled from a uniform distribution.

The output of this code can only satisfy requirement #1 if we assume a predictable order of execution for `bar()`

and `baz()`

.
This is not a problem in NumPy, which always evaluates code in the order defined by the Python interpreter.
In JAX, however, this is more problematic: for efficient execution, we want the JIT compiler to be free to reorder, elide, and fuse various operations in the function we define.
Further, when executing in multi-device environments, execution efficiency would be hampered by the need for each process to synchronize a global state.

### Explicit random state[#](#explicit-random-state)

To avoid these issues, JAX avoids implicit global random state, and instead tracks state explicitly via a random `key`

:

```
from jax import random
key = random.key(42)
print(key)
```

```
Array((), dtype=key<fry>) overlaying:
[ 0 42]
```

Note

This section uses the new-style typed PRNG keys produced by [ jax.random.key()](_autosummary/jax.random.key.html#jax.random.key), rather than the
old-style raw PRNG keys produced by

[. For details, see](_autosummary/jax.random.PRNGKey.html#jax.random.PRNGKey)

`jax.random.PRNGKey()`

[JEP 9263: Typed keys & pluggable RNGs](jep/9263-typed-keys.html#jep-9263).

A key is an array with a special dtype corresponding to the particular PRNG implementation being used; in the default implementation each key is backed by a pair of `uint32`

values.

The key is effectively a stand-in for NumPy’s hidden state object, but we pass it explicitly to [ jax.random()](jax.random.html#module-jax.random) functions.
Importantly, random functions consume the key, but do not modify it: feeding the same key object to a random function will always result in the same sample being generated.

```
print(random.normal(key))
print(random.normal(key))
```

```
-0.028304616
-0.028304616
```

Reusing the same key, even with different [ random](jax.random.html#module-jax.random) APIs, can result in correlated outputs, which is generally undesirable.

**The rule of thumb is: never reuse keys (unless you want identical outputs). Reusing the same state will cause sadness and monotony, depriving the end user of lifegiving chaos.**

JAX uses a modern [Threefry counter-based PRNG](https://github.com/jax-ml/jax/blob/main/docs/jep/263-prng.md) that’s splittable. That is, its design allows us to fork the PRNG state into new PRNGs for use with parallel stochastic generation.
In order to generate different and independent samples, you must [ split()](_autosummary/jax.random.split.html#jax.random.split) the key explicitly before passing it to a random function:

```
for i in range(3):
new_key, subkey = random.split(key)
del key # The old key is consumed by split() -- we must never use it again.
val = random.normal(subkey)
del subkey # The subkey is consumed by normal().
print(f"draw {i}: {val}")
key = new_key # new_key is safe to use in the next iteration.
```

```
draw 0: 0.6057640314102173
draw 1: -0.21089035272598267
draw 2: -0.3948981463909149
```

(Calling `del`

here is not required, but we do so to emphasize that the key should not be reused once consumed.)

[ jax.random.split()](_autosummary/jax.random.split.html#jax.random.split) is a deterministic function that converts one

`key`

into several independent (in the pseudorandomness sense) keys.
We keep one of the outputs as the `new_key`

, and can safely use the unique extra key (called `subkey`

) as input into a random function, and then discard it forever.
If you wanted to get another sample from the normal distribution, you would split `key`

again, and so on: the crucial point is that you never use the same key twice.It doesn’t matter which part of the output of `split(key)`

we call `key`

, and which we call `subkey`

.
They are all independent keys with equal status.
The key/subkey naming convention is a typical usage pattern that helps track how keys are consumed:
subkeys are destined for immediate consumption by random functions, while the key is retained to generate more randomness later.

Usually, the above example would be written concisely as

```
key, subkey = random.split(key)
```

which discards the old key automatically.
It’s worth noting that [ split()](_autosummary/jax.random.split.html#jax.random.split) can create as many keys as you need, not just 2:

```
key, *forty_two_subkeys = random.split(key, num=43)
```

### Lack of sequential equivalence[#](#lack-of-sequential-equivalence)

Another difference between NumPy’s and JAX’s random modules relates to the sequential equivalence guarantee mentioned above.

As in NumPy, JAX’s random module also allows sampling of vectors of numbers. However, JAX does not provide a sequential equivalence guarantee, because doing so would interfere with the vectorization on SIMD hardware (requirement #3 above).

In the example below, sampling 3 values out of a normal distribution individually using three subkeys gives a different result to using giving a single key and specifying `shape=(3,)`

:

```
key = random.key(42)
subkeys = random.split(key, 3)
sequence = np.stack([random.normal(subkey) for subkey in subkeys])
print("individually:", sequence)
key = random.key(42)
print("all at once: ", random.normal(key, shape=(3,)))
```

```
individually: [0.07592554 0.60576403 0.4323065 ]
all at once: [-0.02830462 0.46713185 0.29570296]
```

The lack of sequential equivalence gives us freedom to write code more efficiently; for example,
instead of generating `sequence`

above via a sequential loop, we can use [ jax.vmap()](_autosummary/jax.vmap.html#jax.vmap) to
compute the same result in a vectorized manner:

```
import jax
print("vectorized:", jax.vmap(random.normal)(subkeys))
```

```
vectorized: [0.07592554 0.60576403 0.4323065 ]
```

## Next Steps[#](#next-steps)

For more information on JAX random numbers, refer to the documentation of the [ jax.random](jax.random.html#module-jax.random)
module. If you’re interested in the details of the design of JAX’s random number generator,
see

[JAX PRNG Design](jep/263-prng.html#prng-design-jep).

---

## Source: https://jax.readthedocs.io/en/latest/sharded-computation.html

# Introduction to parallel programming[#](#introduction-to-parallel-programming)

This tutorial serves as an introduction to device parallelism for Single-Program Multi-Data (SPMD) code in JAX. SPMD is a parallelism technique where the same computation, such as the forward pass of a neural network, can be run on different input data (for example, different inputs in a batch) in parallel on different devices, such as several GPUs or Google TPUs.

The tutorial covers three modes of parallel computation:

*Automatic sharding via*: The compiler chooses the optimal computation strategy (a.k.a. “the compiler takes the wheel”).`jax.jit()`

*Explicit Sharding*(*new*) is similar to automatic sharding in that you’re writing a global-view program. The difference is that the sharding of each array is part of the array’s JAX-level type making it an explicit part of the programming model. These shardings are propagated at the JAX level and queryable at trace time. It’s still the compiler’s responsibility to turn the whole-array program into per-device programs (turning`jnp.sum`

into`psum`

for example) but the compiler is heavily constrained by the user-supplied shardings.*Fully manual sharding with manual control using*:`jax.shard_map()`

`shard_map`

enables per-device code and explicit communication collectives

A summary table:

Mode |
View? |
Explicit sharding? |
Explicit Collectives? |
|---|---|---|---|
Auto |
Global |
❌ |
❌ |
Explicit |
Global |
✅ |
❌ |
Manual |
Per-device |
✅ |
✅ |

Using these schools of thought for SPMD, you can transform a function written for one device into a function that can run in parallel on multiple devices.

```
import jax
jax.config.update('jax_num_cpu_devices', 8)
```

```
jax.devices()
```

```
[CpuDevice(id=0),
CpuDevice(id=1),
CpuDevice(id=2),
CpuDevice(id=3),
CpuDevice(id=4),
CpuDevice(id=5),
CpuDevice(id=6),
CpuDevice(id=7)]
```

## Key concept: Data sharding[#](#key-concept-data-sharding)

Key to all of the distributed computation approaches below is the concept of *data sharding*, which describes how data is laid out on the available devices.

How can JAX understand how the data is laid out across devices? JAX’s datatype, the [ jax.Array](_autosummary/jax.Array.html#jax.Array) immutable array data structure, represents arrays with physical storage spanning one or multiple devices, and helps make parallelism a core feature of JAX. The

[object is designed with distributed data and computation in mind. Every](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

`jax.Array`

has an associated [object, which describes which shard of the global data is required by each global device. When you create a](jax.sharding.html#jax.sharding.Sharding)

`jax.sharding.Sharding`

[from scratch, you also need to create its](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

`Sharding`

.In the simplest cases, arrays are sharded on a single device, as demonstrated below:

```
import numpy as np
import jax.numpy as jnp
arr = jnp.arange(32.0).reshape(4, 8)
arr.devices()
```

```
{CpuDevice(id=0)}
```

```
arr.sharding
```

```
SingleDeviceSharding(device=CpuDevice(id=0), memory_kind=device)
```

For a more visual representation of the storage layout, the [ jax.debug](jax.debug.html#module-jax.debug) module provides some helpers to visualize the sharding of an array. For example,

[displays how the array is stored in memory of a single device:](_autosummary/jax.debug.visualize_array_sharding.html#jax.debug.visualize_array_sharding)

`jax.debug.visualize_array_sharding()`

```
jax.debug.visualize_array_sharding(arr)
```

CPU 0

To create an array with a non-trivial sharding, you can define a [ jax.sharding](jax.sharding.html#module-jax.sharding) specification for the array and pass this to

[.](_autosummary/jax.device_put.html#jax.device_put)

`jax.device_put()`

Here, define a [ NamedSharding](jax.sharding.html#jax.sharding.NamedSharding), which specifies an N-dimensional grid of devices with named axes, where

[allows for precise device placement:](jax.sharding.html#jax.sharding.Mesh)

`jax.sharding.Mesh`

```
from jax.sharding import PartitionSpec as P
mesh = jax.make_mesh((2, 4), ('x', 'y'))
sharding = jax.sharding.NamedSharding(mesh, P('x', 'y'))
print(sharding)
```

```
NamedSharding(mesh=Mesh('x': 2, 'y': 4, axis_types=(Explicit, Explicit)), spec=P('x', 'y'), memory_kind=device)
```

Passing this `Sharding`

object to [ jax.device_put()](_autosummary/jax.device_put.html#jax.device_put), you can obtain a sharded array:

```
arr_sharded = jax.device_put(arr, sharding)
print(arr_sharded)
jax.debug.visualize_array_sharding(arr_sharded)
```

```
[[ 0. 1. 2. 3. 4. 5. 6. 7.]
[ 8. 9. 10. 11. 12. 13. 14. 15.]
[16. 17. 18. 19. 20. 21. 22. 23.]
[24. 25. 26. 27. 28. 29. 30. 31.]]
```

CPU 0 CPU 1 CPU 2 CPU 3 CPU 4 CPU 5 CPU 6 CPU 7

## 1. Automatic parallelism via `jit`

[#](#automatic-parallelism-via-jit)

Once you have sharded data, the easiest way to do parallel computation is to simply pass the data to a [ jax.jit()](_autosummary/jax.jit.html#jax.jit)-compiled function! In JAX, you need to only specify how you want the input and output of your code to be partitioned, and the compiler will figure out how to: 1) partition everything inside; and 2) compile inter-device communications.

The XLA compiler behind `jit`

includes heuristics for optimizing computations across multiple devices.
In the simplest of cases, those heuristics boil down to *computation follows data*.

To demonstrate how auto-parallelization works in JAX, below is an example that uses a [ jax.jit()](_autosummary/jax.jit.html#jax.jit)-decorated staged-out function: it’s a simple element-wise function, where the computation for each shard will be performed on the device associated with that shard, and the output is sharded in the same way:

```
@jax.jit
def f_elementwise(x):
return 2 * jnp.sin(x) + 1
result = f_elementwise(arr_sharded)
print("shardings match:", result.sharding == arr_sharded.sharding)
```

```
shardings match: True
```

As computations get more complex, the compiler makes decisions about how to best propagate the sharding of the data.

Here, you sum along the leading axis of `x`

, and visualize how the result values are stored across multiple devices (with [ jax.debug.visualize_array_sharding()](_autosummary/jax.debug.visualize_array_sharding.html#jax.debug.visualize_array_sharding)):

```
@jax.jit
def f_contract(x):
return x.sum(axis=0)
result = f_contract(arr_sharded)
jax.debug.visualize_array_sharding(result)
print(result)
```

CPU 0,4 CPU 1,5 CPU 2,6 CPU 3,7

```
[48. 52. 56. 60. 64. 68. 72. 76.]
```

The result is partially replicated: that is, the first two elements of the array are replicated on devices `0`

and `4`

, the second on `1`

and `5`

, and so on.

## 2. Explicit sharding[#](#explicit-sharding)

The main idea behind explicit shardings, (a.k.a. sharding-in-types), is that
the JAX-level *type* of a value includes a description of how the value is sharded.
We can query the JAX-level type of any JAX value (or Numpy array, or Python
scalar) using `jax.typeof`

:

```
some_array = np.arange(8)
print(f"JAX-level type of some_array: {jax.typeof(some_array)}")
```

```
JAX-level type of some_array: int32[8]
```

Importantly, we can query the type even while tracing under a `jit`

(the JAX-level type
is almost *defined* as “the information about a value we have access to while
under a jit).

```
@jax.jit
def foo(x):
print(f"JAX-level type of x during tracing: {jax.typeof(x)}")
return x + x
foo(some_array)
```

```
JAX-level type of x during tracing: int32[8]
```

```
Array([ 0, 2, 4, 6, 8, 10, 12, 14], dtype=int32)
```

To start seeing shardings in the type we need to set up an explicit-sharding mesh.

```
from jax.sharding import AxisType
mesh = jax.make_mesh((2, 4), ("X", "Y"),
axis_types=(AxisType.Explicit, AxisType.Explicit))
```

Now we can create some sharded arrays:

```
replicated_array = np.arange(8).reshape(4, 2)
sharded_array = jax.device_put(replicated_array, jax.NamedSharding(mesh, P("X", None)))
print(f"replicated_array type: {jax.typeof(replicated_array)}")
print(f"sharded_array type: {jax.typeof(sharded_array)}")
```

```
replicated_array type: int32[4,2]
sharded_array type: int32[4@X,2]
```

We should read the type `int32[4@X, 2]`

as “a 4-by-2 array of 32-bit ints whose first dimension
is sharded along mesh axis ‘X’. The array is replicated along all other mesh
axes”

These shardings associated with JAX-level types propagate through operations. For example:

```
arg0 = jax.device_put(np.arange(4).reshape(4, 1),
jax.NamedSharding(mesh, P("X", None)))
arg1 = jax.device_put(np.arange(8).reshape(1, 8),
jax.NamedSharding(mesh, P(None, "Y")))
@jax.jit
def add_arrays(x, y):
ans = x + y
print(f"x sharding: {jax.typeof(x)}")
print(f"y sharding: {jax.typeof(y)}")
print(f"ans sharding: {jax.typeof(ans)}")
return ans
with jax.set_mesh(mesh):
add_arrays(arg0, arg1)
```

```
x sharding: int32[4@X,1]
y sharding: int32[1,8@Y]
ans sharding: int32[4@X,8@Y]
```

That’s the gist of it. Shardings propagate deterministically at trace time and we can query them at trace time.

## 3. Manual parallelism with `shard_map`

[#](#manual-parallelism-with-shard-map)

In the automatic parallelism methods explored above, you can write a function as if you’re operating on the full dataset, and `jit`

will split that computation across multiple devices. By contrast, with [ jax.shard_map()](_autosummary/jax.shard_map.html#jax.shard_map) you write the function that will handle a single shard of data, and

`shard_map`

will construct the full function.`shard_map`

works by mapping a function across a particular *mesh* of devices (`shard_map`

maps over shards). In the example below:

As before,

allows for precise device placement, with the axis names parameter for logical and physical axis names.`jax.sharding.Mesh`

The

`in_specs`

argument determines the shard sizes. The`out_specs`

argument identifies how the blocks are assembled back together.

**Note:** [ jax.shard_map()](_autosummary/jax.shard_map.html#jax.shard_map) code can work inside

[if you need it.](_autosummary/jax.jit.html#jax.jit)

`jax.jit()`

```
mesh = jax.make_mesh((8,), ('x',))
f_elementwise_sharded = jax.shard_map(
f_elementwise,
mesh=mesh,
in_specs=P('x'),
out_specs=P('x'))
arr = jax.device_put(jnp.arange(32), jax.NamedSharding(mesh, P('x')))
f_elementwise_sharded(arr)
```

```
Array([ 1. , 2.682942 , 2.818595 , 1.28224 , -0.513605 ,
-0.9178486 , 0.44116902, 2.3139732 , 2.9787164 , 1.824237 ,
-0.08804226, -0.99998045, -0.07314587, 1.840334 , 2.9812148 ,
2.3005757 , 0.42419338, -0.92279494, -0.50197446, 1.2997544 ,
2.8258905 , 2.6733112 , 0.98229736, -0.69244087, -0.81115675,
0.7352965 , 2.525117 , 2.912752 , 1.5418116 , -0.32726777,
-0.97606325, 0.19192469], dtype=float32)
```

The function you write only “sees” a single batch of the data, which you can check by printing the device local shape:

```
x = jax.device_put(jnp.arange(32), jax.NamedSharding(mesh, P('x')))
print(f"global shape: {x.shape=}")
def f(x):
print(f"device local shape: {x.shape=}")
return x * 2
y = jax.shard_map(f, mesh=mesh, in_specs=P('x'), out_specs=P('x'))(x)
```

```
global shape: x.shape=(32,)
device local shape: x.shape=(4,)
```

Because each of your functions only “sees” the device-local part of the data, it means that aggregation-like functions require some extra thought.

For example, here’s what a `shard_map`

of a [ jax.numpy.sum()](_autosummary/jax.numpy.sum.html#jax.numpy.sum) looks like:

```
def f(x):
return jnp.sum(x, keepdims=True)
jax.shard_map(f, mesh=mesh, in_specs=P('x'), out_specs=P('x'))(x)
```

```
Array([ 6, 22, 38, 54, 70, 86, 102, 118], dtype=int32)
```

Your function `f`

operates separately on each shard, and the resulting summation reflects this.

If you want to sum across shards, you need to explicitly request it using collective operations like [ jax.lax.psum()](_autosummary/jax.lax.psum.html#jax.lax.psum):

```
def f(x):
sum_in_shard = x.sum()
return jax.lax.psum(sum_in_shard, 'x')
jax.shard_map(f, mesh=mesh, in_specs=P('x'), out_specs=P())(x)
```

```
Array(496, dtype=int32)
```

Because the output no longer has a sharded dimension, set `out_specs=P()`

(recall that the `out_specs`

argument identifies how the blocks are assembled back together in `shard_map`

).

## Comparing the three approaches[#](#comparing-the-three-approaches)

With these concepts fresh in our mind, let’s compare the three approaches for a simple neural network layer.

Start by defining your canonical function like this:

```
@jax.jit
def layer(x, weights, bias):
return jax.nn.sigmoid(x @ weights + bias)
```

```
import numpy as np
rng = np.random.default_rng(0)
x = rng.normal(size=(32,))
weights = rng.normal(size=(32, 4))
bias = rng.normal(size=(4,))
layer(x, weights, bias)
```

```
Array([0.02138916, 0.8931118 , 0.5989196 , 0.9774251 ], dtype=float32)
```

You can automatically run this in a distributed manner using [ jax.jit()](_autosummary/jax.jit.html#jax.jit) and passing appropriately sharded data.

If you shard the leading axis of both `x`

and make `weights`

fully replicated,
then the matrix multiplication will automatically happen in parallel:

```
mesh = jax.make_mesh((8,), ('x',))
x_sharded = jax.device_put(x, jax.NamedSharding(mesh, P('x')))
weights_sharded = jax.device_put(weights, jax.NamedSharding(mesh, P()))
layer(x_sharded, weights_sharded, bias)
```

```
Array([0.02138916, 0.8931118 , 0.5989196 , 0.9774251 ], dtype=float32)
```

Alternatively, you can use explicit sharding mode too:

```
explicit_mesh = jax.make_mesh((8,), ('X',), axis_types=(AxisType.Explicit,))
x_sharded = jax.device_put(x, jax.NamedSharding(explicit_mesh, P('X')))
weights_sharded = jax.device_put(weights, jax.NamedSharding(explicit_mesh, P()))
@jax.jit
def layer_auto(x, weights, bias):
print(f"x sharding: {jax.typeof(x)}")
print(f"weights sharding: {jax.typeof(weights)}")
print(f"bias sharding: {jax.typeof(bias)}")
out = layer(x, weights, bias)
print(f"out sharding: {jax.typeof(out)}")
return out
with jax.set_mesh(explicit_mesh):
layer_auto(x_sharded, weights_sharded, bias)
```

```
x sharding: float32[32@X]
weights sharding: float32[32,4]
bias sharding: float32[4]
out sharding: float32[4]
```

Finally, you can do the same thing with `shard_map`

, using [ jax.lax.psum()](_autosummary/jax.lax.psum.html#jax.lax.psum) to indicate the cross-shard collective required for the matrix product:

```
from functools import partial
@jax.jit
@partial(jax.shard_map, mesh=mesh,
in_specs=(P('x'), P('x', None), P(None)),
out_specs=P(None))
def layer_sharded(x, weights, bias):
return jax.nn.sigmoid(jax.lax.psum(x @ weights, 'x') + bias)
rep_s = jax.NamedSharding(mesh, P())
sharded_s = jax.NamedSharding(mesh, P('x'))
x, weights, bias = jax.device_put((x, weights, bias), (sharded_s, sharded_s, rep_s))
layer_sharded(x, weights, bias)
```

```
Array([0.02138916, 0.8931118 , 0.5989196 , 0.9774251 ], dtype=float32)
```

## Controlling data and computation placement on devices[#](#controlling-data-and-computation-placement-on-devices)

Let’s look at the principles of data and computation placement in JAX.

In JAX, the computation follows data placement. JAX arrays have two placement
properties: 1) the device where the data resides; and 2) whether it is
**committed** to the device or not (the data is sometimes referred to as being
*sticky* to the device).

By default, JAX arrays are placed uncommitted on the default device
(`jax.devices()[0]`

), which is the first GPU or TPU by default. If no GPU or
TPU is present, `jax.devices()[0]`

is the CPU. The default device can be
temporarily overridden with the [ jax.default_device()](_autosummary/jax.default_device.html#jax.default_device) context manager, or
set for the whole process by setting the environment variable

`JAX_PLATFORMS`

or the absl flag `--jax_platforms`

to “cpu”, “gpu”, or “tpu” (`JAX_PLATFORMS`

can also be a list of platforms, which determines which platforms are available
in priority order).```
>>> from jax import numpy as jnp
>>> print(jnp.ones(3).devices())
{CudaDevice(id=0)}
```

Computations involving uncommitted data are performed on the default device and the results are uncommitted on the default device.

Data can also be placed explicitly on a device using [ jax.device_put()](_autosummary/jax.device_put.html#jax.device_put) with
a

`device`

parameter, in which case the data becomes **committed**to the device:

```
>>> import jax
>>> from jax import device_put
>>> arr = device_put(1, jax.devices()[2])
>>> print(arr.devices())
{CudaDevice(id=2)}
```

Computations involving some committed inputs will happen on the committed device and the result will be committed on the same device. Invoking an operation on arguments that are committed to more than one device will raise an error.

You can also use [ jax.device_put()](_autosummary/jax.device_put.html#jax.device_put) without a

`device`

parameter. If the
data is already on a device (committed or not), it’s left as-is. If the data
isn’t on any device—that is, it’s a regular Python or NumPy value—it’s placed
uncommitted on the default device.Jitted functions behave like any other primitive operations—they will follow the data and will show errors if invoked on data committed on more than one device.

(Before [PR #6002](https://github.com/jax-ml/jax/pull/6002) in March 2021
there was some laziness in creation of array constants, so that
`jax.device_put(jnp.zeros(...), jax.devices()[1])`

or similar would actually
create the array of zeros on `jax.devices()[1]`

, instead of creating the
array on the default device then moving it. But this optimization was removed
so as to simplify the implementation.)

(As of April 2020, [ jax.jit()](_autosummary/jax.jit.html#jax.jit) has a

`device`

parameter that affects the device
placement. That parameter is experimental, is likely to be removed or changed,
and its use is not recommended.)For a worked-out example, we recommend reading through
`test_computation_follows_data`

in
[multi_device_test.py](https://github.com/jax-ml/jax/blob/main/tests/multi_device_test.py).

## Next steps[#](#next-steps)

This tutorial serves as a brief introduction of sharded and parallel computation in JAX.

To learn about each SPMD method in-depth, check out these docs:

---

## Source: https://jax.readthedocs.io/en/latest/control-flow.html

# Control flow and logical operators with JIT[#](#control-flow-and-logical-operators-with-jit)

When executing eagerly (outside of `jit`

), JAX code works with Python control flow and logical operators just like Numpy code. Using control flow and logical operators with `jit`

is more complicated.

In a nutshell, Python control flow and logical operators are evaluated at JIT compile time, such that the compiled function represents a single path through the [control flow graph](https://en.wikipedia.org/wiki/Control-flow_graph) (logical operators affect the path via short-circuiting). If the path depends on the values of the inputs, the function (by default) cannot be JIT compiled. The path may depend on the shape or dtype of the inputs, and the function is re-compiled every time it is called on an input with a new shape or dtype.

```
from jax import grad, jit
import jax.numpy as jnp
```

For example, this works:

```
@jit
def f(x):
for i in range(3):
x = 2 * x
return x
print(f(3))
```

```
24
```

So does this:

```
@jit
def g(x):
y = 0.
for i in range(x.shape[0]):
y = y + x[i]
return y
print(g(jnp.array([1., 2., 3.])))
```

```
6.0
```

But this doesn’t, at least by default:

```
@jit
def f(x):
if x < 3:
return 3. * x ** 2
else:
return -4 * x
# This will fail!
f(2)
```

```
---------------------------------------------------------------------------
TracerBoolConversionError Traceback (most recent call last)
Cell In[4], line 9
5 else:
6 return -4 * x
7
8 # This will fail!
----> 9 f(2)
[... skipping hidden 5 frame]
Cell In[4], line 3, in f(x)
1 @jit
2 def f(x):
----> 3 if x < 3:
4 return 3. * x ** 2
5 else:
6 return -4 * x
[... skipping hidden 1 frame]
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/core.py:1855, in concretization_function_error.<locals>.error(self, arg)
1854 def error(self, arg):
-> 1855 raise TracerBoolConversionError(arg)
TracerBoolConversionError: Attempted boolean conversion of traced array with shape bool[].
The error occurred while tracing the function f at /tmp/ipykernel_1601/3402096563.py:1 for jit. This concrete value was not available in Python because it depends on the value of the argument x.
See https://docs.jax.dev/en/latest/errors.html#jax.errors.TracerBoolConversionError
```

Neither does this:

```
@jit
def g(x):
return (x > 0) and (x < 3)
# This will fail!
g(2)
```

```
---------------------------------------------------------------------------
TracerBoolConversionError Traceback (most recent call last)
Cell In[5], line 6
2 def g(x):
3 return (x > 0) and (x < 3)
4
5 # This will fail!
----> 6 g(2)
[... skipping hidden 5 frame]
Cell In[5], line 3, in g(x)
1 @jit
2 def g(x):
----> 3 return (x > 0) and (x < 3)
[... skipping hidden 1 frame]
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/core.py:1855, in concretization_function_error.<locals>.error(self, arg)
1854 def error(self, arg):
-> 1855 raise TracerBoolConversionError(arg)
TracerBoolConversionError: Attempted boolean conversion of traced array with shape bool[].
The error occurred while tracing the function g at /tmp/ipykernel_1601/543860509.py:1 for jit. This concrete value was not available in Python because it depends on the value of the argument x.
See https://docs.jax.dev/en/latest/errors.html#jax.errors.TracerBoolConversionError
```

**What gives!?**

When we `jit`

-compile a function, we usually want to compile a version of the function that works for many different argument values, so that we can cache and reuse the compiled code. That way we don’t have to re-compile on each function evaluation.

For example, if we evaluate an `@jit`

function on the array `jnp.array([1., 2., 3.], jnp.float32)`

, we might want to compile code that we can reuse to evaluate the function on `jnp.array([4., 5., 6.], jnp.float32)`

to save on compile time.

To get a view of your Python code that is valid for many different argument values, JAX traces it with the `ShapedArray`

abstraction as input, where each abstract value represents the set of all array values with a fixed shape and dtype. For example, if we trace using the abstract value `ShapedArray((3,), jnp.float32)`

, we get a view of the function that can be reused for any concrete value in the corresponding set of arrays. That means we can save on compile time.

But there’s a tradeoff here: if we trace a Python function on a `ShapedArray((), jnp.float32)`

that isn’t committed to a specific concrete value, when we hit a line like `if x < 3`

, the expression `x < 3`

evaluates to an abstract `ShapedArray((), jnp.bool_)`

that represents the set `{True, False}`

. When Python attempts to coerce that to a concrete `True`

or `False`

, we get an error: we don’t know which branch to take, and can’t continue tracing! The tradeoff is that with higher levels of abstraction we gain a more general view of the Python code (and thus save on re-compilations), but we require more constraints on the Python code to complete the trace.

The good news is that you can control this tradeoff yourself. By having `jit`

trace on more refined abstract values, you can relax the traceability constraints. For example, using the `static_argnames`

(or `static_argnums`

) argument to `jit`

, we can specify to trace on concrete values of some arguments. Here’s that example function again:

```
def f(x):
if x < 3:
return 3. * x ** 2
else:
return -4 * x
f = jit(f, static_argnames='x')
print(f(2.))
```

```
12.0
```

Here’s another example, this time involving a loop:

```
def f(x, n):
y = 0.
for i in range(n):
y = y + x[i]
return y
f = jit(f, static_argnames='n')
f(jnp.array([2., 3., 4.]), 2)
```

```
Array(5., dtype=float32)
```

In effect, the loop gets statically unrolled. JAX can also trace at *higher* levels of abstraction, like `Unshaped`

, but that’s not currently the default for any transformation

️⚠️ **functions with argument- value dependent shapes**

These control-flow issues also come up in a more subtle way: numerical functions we want to **jit** can’t specialize the shapes of internal arrays on argument *values* (specializing on argument **shapes** is ok). As a trivial example, let’s make a function whose output happens to depend on the input variable `length`

.

```
def example_fun(length, val):
return jnp.ones((length,)) * val
# un-jit'd works fine
print(example_fun(5, 4))
```

```
[4. 4. 4. 4. 4.]
```

```
bad_example_jit = jit(example_fun)
# this will fail:
bad_example_jit(10, 4)
```

```
---------------------------------------------------------------------------
TypeError Traceback (most recent call last)
Cell In[9], line 3
1 bad_example_jit = jit(example_fun)
2 # this will fail:
----> 3 bad_example_jit(10, 4)
[... skipping hidden 5 frame]
Cell In[8], line 2, in example_fun(length, val)
1 def example_fun(length, val):
----> 2 return jnp.ones((length,)) * val
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/numpy/array_creation.py:138, in ones(shape, dtype, device, out_sharding)
136 raise TypeError("expected sequence object with len >= 0 or a single integer")
137 if (m := _check_forgot_shape_tuple("ones", shape, dtype)): raise TypeError(m)
--> 138 shape = canonicalize_shape(shape)
139 dtype = dtypes.check_and_canonicalize_user_dtype(
140 float if dtype is None else dtype, "ones")
141 sharding = util.choose_device_or_out_sharding(
142 device, out_sharding, 'jnp.ones')
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/numpy/array_creation.py:45, in canonicalize_shape(shape, context)
43 return core.canonicalize_shape((shape,), context)
44 else:
---> 45 return core.canonicalize_shape(shape, context)
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/core.py:2015, in canonicalize_shape(shape, context)
2013 except TypeError:
2014 pass
-> 2015 raise _invalid_shape_error(shape, context)
TypeError: Shapes must be 1D sequences of concrete values of integer type, got (JitTracer(~int32[]),).
If using `jit`, try using `static_argnums` or applying `jit` to smaller subfunctions.
The error occurred while tracing the function example_fun at /tmp/ipykernel_1601/1210496444.py:1 for jit. This concrete value was not available in Python because it depends on the value of the argument length.
```

```
# static_argnames tells JAX to recompile on changes at these argument positions:
good_example_jit = jit(example_fun, static_argnames='length')
# first compile
print(good_example_jit(10, 4))
# recompiles
print(good_example_jit(5, 4))
```

```
[4. 4. 4. 4. 4. 4. 4. 4. 4. 4.]
[4. 4. 4. 4. 4.]
```

`static_argnames`

can be handy if `length`

in our example rarely changes, but it would be disastrous if it changed a lot!

Lastly, if your function has global side-effects, JAX’s tracer can cause weird things to happen. A common gotcha is trying to print arrays inside **jit**’d functions:

```
@jit
def f(x):
print(x)
y = 2 * x
print(y)
return y
f(2)
```

```
JitTracer(~int32[])
JitTracer(~int32[])
```

```
Array(4, dtype=int32, weak_type=True)
```

## Structured control flow primitives[#](#structured-control-flow-primitives)

There are more options for control flow in JAX. Say you want to avoid re-compilations but still want to use control flow that’s traceable, and that avoids un-rolling large loops. Then you can use these 4 structured control flow primitives:

`lax.cond`

*differentiable*`lax.while_loop`

**fwd-mode-differentiable**`lax.fori_loop`

**fwd-mode-differentiable**in general;**fwd and rev-mode differentiable**if endpoints are static.`lax.scan`

*differentiable*

`cond`

[#](#cond)

python equivalent:

```
def cond(pred, true_fun, false_fun, operand):
if pred:
return true_fun(operand)
else:
return false_fun(operand)
```

```
from jax import lax
operand = jnp.array([0.])
lax.cond(True, lambda x: x+1, lambda x: x-1, operand)
# --> array([1.], dtype=float32)
lax.cond(False, lambda x: x+1, lambda x: x-1, operand)
# --> array([-1.], dtype=float32)
```

```
Array([-1.], dtype=float32)
```

`jax.lax`

provides two other functions that allow branching on dynamic predicates:

is like a batched version of`lax.select`

`lax.cond`

, with the choices expressed as pre-computed arrays rather than as functions.is like`lax.switch`

`lax.cond`

, but allows switching between any number of callable choices.

In addition, `jax.numpy`

provides several numpy-style interfaces to these functions:

with three arguments is the numpy-style wrapper of`jnp.where`

`lax.select`

.is a numpy-style wrapper of`jnp.piecewise`

`lax.switch`

, but switches on a list of boolean conditions rather than a single scalar index.has an API similar to`jnp.select`

`jnp.piecewise`

, but the choices are given as pre-computed arrays rather than as functions. It is implemented in terms of multiple calls to`lax.select`

.

`while_loop`

[#](#while-loop)

python equivalent:

```
def while_loop(cond_fun, body_fun, init_val):
val = init_val
while cond_fun(val):
val = body_fun(val)
return val
```

```
init_val = 0
cond_fun = lambda x: x < 10
body_fun = lambda x: x+1
lax.while_loop(cond_fun, body_fun, init_val)
# --> array(10, dtype=int32)
```

```
Array(10, dtype=int32, weak_type=True)
```

`fori_loop`

[#](#fori-loop)

python equivalent:

```
def fori_loop(start, stop, body_fun, init_val):
val = init_val
for i in range(start, stop):
val = body_fun(i, val)
return val
```

```
init_val = 0
start = 0
stop = 10
body_fun = lambda i,x: x+i
lax.fori_loop(start, stop, body_fun, init_val)
# --> array(45, dtype=int32)
```

```
Array(45, dtype=int32, weak_type=True)
```

### Summary[#](#summary)

\(\ast\) = argument-**value**-independent loop condition - unrolls the loop

## Logical operators[#](#logical-operators)

`jax.numpy`

provides `logical_and`

, `logical_or`

, and `logical_not`

, which operate element-wise on arrays and can be evaluated under `jit`

without recompiling. Like their Numpy counterparts, the binary operators do not short circuit. Bitwise operators (`&`

, `|`

, `~`

) can also be used with `jit`

.

For example, consider a function that checks if its input is a positive even integer. The pure Python and JAX versions give the same answer when the input is scalar.

```
def python_check_positive_even(x):
is_even = x % 2 == 0
# `and` short-circults, so when `is_even` is `False`, `x > 0` is not evaluated.
return is_even and (x > 0)
@jit
def jax_check_positive_even(x):
is_even = x % 2 == 0
# `logical_and` does not short circuit, so `x > 0` is always evaluated.
return jnp.logical_and(is_even, x > 0)
print(python_check_positive_even(24))
print(jax_check_positive_even(24))
```

```
True
True
```

When the JAX version with `logical_and`

is applied to an array, it returns elementwise values.

```
x = jnp.array([-1, 2, 5])
print(jax_check_positive_even(x))
```

```
[False True False]
```

Python logical operators error when applied to JAX arrays of more than one element, even without `jit`

. This replicates NumPy’s behavior.

```
print(python_check_positive_even(x))
```

```
---------------------------------------------------------------------------
ValueError Traceback (most recent call last)
Cell In[17], line 1
----> 1 print(python_check_positive_even(x))
Cell In[15], line 4, in python_check_positive_even(x)
1 def python_check_positive_even(x):
2 is_even = x % 2 == 0
3 # `and` short-circults, so when `is_even` is `False`, `x > 0` is not evaluated.
----> 4 return is_even and (x > 0)
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/array.py:293, in ArrayImpl.__bool__(self)
292 def __bool__(self):
--> 293 core.check_bool_conversion(self)
294 return bool(self._value)
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/core.py:869, in check_bool_conversion(arr)
866 raise ValueError("The truth value of an empty array is ambiguous. Use"
867 " `array.size > 0` to check that an array is not empty.")
868 if arr.size > 1:
--> 869 raise ValueError("The truth value of an array with more than one element"
870 " is ambiguous. Use a.any() or a.all()")
ValueError: The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()
```

## Python control flow + autodiff[#](#python-control-flow-autodiff)

Remember that the above constraints on control flow and logical operators are relevant only with `jit`

. If you just want to apply `grad`

to your python functions, without `jit`

, you can use regular Python control-flow constructs with no problems, as if you were using [Autograd](https://github.com/hips/autograd) (or Pytorch or TF Eager).

```
def f(x):
if x < 3:
return 3. * x ** 2
else:
return -4 * x
print(grad(f)(2.)) # ok!
print(grad(f)(4.)) # ok!
```

```
12.0
-4.0
```

---

## Source: https://jax.readthedocs.io/en/latest/tracing.html

# Tracing[#](#tracing)

`jax.jit`

and other JAX transforms work by *tracing* a function to determine its effect on inputs of a specific shape and type. For a window into tracing, let’s put a few `print()`

statements within a JIT-compiled function and then call the function:

```
from jax import jit
import jax.numpy as jnp
import numpy as np
@jit
def f(x, y):
print("Running f():")
print(f" x = {x}")
print(f" y = {y}")
result = jnp.dot(x + 1, y + 1)
print(f" result = {result}")
return result
x = np.random.randn(3, 4)
y = np.random.randn(4)
f(x, y)
```

```
Running f():
x = JitTracer(float32[3,4])
y = JitTracer(float32[4])
result = JitTracer(float32[3])
```

```
Array([2.998076 , 7.8138704, 4.5759163], dtype=float32)
```

Notice that the print statements execute, but rather than printing the data we
passed to the function, though, it prints *tracer* objects that stand-in for
them (something like `Traced<ShapedArray(float32[])>`

).

These tracer objects are what `jax.jit`

uses to extract the sequence of
operations specified by the function. Basic tracers are stand-ins that encode
the **shape** and **dtype** of the arrays, but are agnostic to the values. This
recorded sequence of computations can then be efficiently applied within XLA to
new inputs with the same shape and dtype, without having to re-execute the
Python code.

When we call the compiled function again on matching inputs, no re-compilation is required and nothing is printed because the result is computed in compiled XLA rather than in Python:

```
x2 = np.random.randn(3, 4)
y2 = np.random.randn(4)
f(x2, y2)
```

```
Array([5.9529185, 5.275844 , 4.231103 ], dtype=float32)
```

The extracted sequence of operations is encoded in a JAX expression, or
[ jaxpr](key-concepts.html#key-concepts-jaxprs) for short. You can view the jaxpr using the

`jax.make_jaxpr`

transformation:```
from jax import make_jaxpr
def f(x, y):
return jnp.dot(x + 1, y + 1)
make_jaxpr(f)(x, y)
```

```
{ lambda ; a:f32[3,4] b:f32[4]. let
c:f32[3,4] = add a 1.0:f32[]
d:f32[4] = add b 1.0:f32[]
e:f32[3] = dot_general[
dimension_numbers=(([1], [0]), ([], []))
preferred_element_type=float32
] c d
in (e,) }
```

Note one consequence of this: because JIT compilation is done *without*
information on the content of the array, control flow statements in the function
cannot depend on traced values (see [Control flow and logical operators with JIT](control-flow.html#control-flow)). For example, this fails:

```
@jit
def f(x, neg):
return -x if neg else x
f(1, True)
```

```
---------------------------------------------------------------------------
TracerBoolConversionError Traceback (most recent call last)
Cell In[4], line 5
1 @jit
2 def f(x, neg):
3 return -x if neg else x
4
----> 5 f(1, True)
[... skipping hidden 5 frame]
Cell In[4], line 3, in f(x, neg)
1 @jit
2 def f(x, neg):
----> 3 return -x if neg else x
[... skipping hidden 1 frame]
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/core.py:1855, in concretization_function_error.<locals>.error(self, arg)
1854 def error(self, arg):
-> 1855 raise TracerBoolConversionError(arg)
TracerBoolConversionError: Attempted boolean conversion of traced array with shape bool[].
The error occurred while tracing the function f at /tmp/ipykernel_3945/2422663986.py:1 for jit. This concrete value was not available in Python because it depends on the value of the argument neg.
See https://docs.jax.dev/en/latest/errors.html#jax.errors.TracerBoolConversionError
```

If there are variables that you would not like to be traced, they can be marked
as *static* for the purposes of JIT compilation:

```
from functools import partial
@partial(jit, static_argnums=(1,))
def f(x, neg):
return -x if neg else x
f(1, True)
```

```
Array(-1, dtype=int32, weak_type=True)
```

Note that calling a JIT-compiled function with a different static argument results in re-compilation, so the function still works as expected:

```
f(1, False)
```

```
Array(1, dtype=int32, weak_type=True)
```

## Static vs traced operations[#](#static-vs-traced-operations)

Just as values can be either static or traced, operations can be static or traced. Static operations are evaluated at compile-time in Python; traced operations are compiled & evaluated at run-time in XLA.

This distinction between static and traced values makes it important to think about how to keep a static value static. Consider this function:

```
import jax.numpy as jnp
from jax import jit
@jit
def f(x):
return x.reshape(jnp.array(x.shape).prod())
x = jnp.ones((2, 3))
f(x)
```

```
---------------------------------------------------------------------------
TypeError Traceback (most recent call last)
Cell In[7], line 9
5 def f(x):
6 return x.reshape(jnp.array(x.shape).prod())
7
8 x = jnp.ones((2, 3))
----> 9 f(x)
[... skipping hidden 5 frame]
Cell In[7], line 6, in f(x)
4 @jit
5 def f(x):
----> 6 return x.reshape(jnp.array(x.shape).prod())
[... skipping hidden 2 frame]
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/numpy/array_methods.py:461, in _compute_newshape(arr, newshape)
459 except:
460 newshape = [newshape]
--> 461 newshape = core.canonicalize_shape(newshape) # type: ignore[arg-type]
462 neg1s = [i for i, d in enumerate(newshape) if type(d) is int and d == -1]
463 if len(neg1s) > 1:
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/core.py:2015, in canonicalize_shape(shape, context)
2013 except TypeError:
2014 pass
-> 2015 raise _invalid_shape_error(shape, context)
TypeError: Shapes must be 1D sequences of concrete values of integer type, got [JitTracer(int32[])].
If using `jit`, try using `static_argnums` or applying `jit` to smaller subfunctions.
The error occurred while tracing the function f at /tmp/ipykernel_3945/1983583872.py:4 for jit. This value became a tracer due to JAX operations on these lines:
operation a:i32[] = reduce_prod[axes=(0,)] b
from line /tmp/ipykernel_3945/1983583872.py:6:19 (f)
```

This fails with an error specifying that a tracer was found instead of a 1D sequence of concrete values of integer type. Let’s add some print statements to the function to understand why this is happening:

```
@jit
def f(x):
print(f"x = {x}")
print(f"x.shape = {x.shape}")
print(f"jnp.array(x.shape).prod() = {jnp.array(x.shape).prod()}")
# comment this out to avoid the error:
# return x.reshape(jnp.array(x.shape).prod())
f(x)
```

```
x = JitTracer(float32[2,3])
x.shape = (2, 3)
jnp.array(x.shape).prod() = JitTracer(int32[])
```

Notice that although `x`

is traced, `x.shape`

is a static value. However, when
we use `jnp.array`

and `jnp.prod`

on this static value, it becomes a traced
value, at which point it cannot be used in a function like `reshape()`

that
requires a static input (recall: array shapes must be static).

A useful pattern is to use `numpy`

for operations that should be static (i.e.
done at compile-time), and use `jax.numpy`

for operations that should be traced
(i.e. compiled and executed at run-time). For this function, it might look like
this:

```
from jax import jit
import jax.numpy as jnp
import numpy as np
@jit
def f(x):
return x.reshape((np.prod(x.shape),))
f(x)
```

```
Array([1., 1., 1., 1., 1., 1.], dtype=float32)
```

For this reason, a standard convention in JAX programs is to
`import numpy as np`

and `import jax.numpy as jnp`

so that both interfaces are
available for finer control over whether operations are performed in a static
manner (with `numpy`

, once at compile-time) or a traced manner (with
`jax.numpy`

, optimized at run-time).

Understanding which values and operations will be static and which will be
traced is a key part of using `jax.jit`

effectively.

## Different kinds of JAX values[#](#different-kinds-of-jax-values)

A tracer value carries an **abstract** value, e.g., `ShapedArray`

with
information about the shape and dtype of an array. We will refer here to such
tracers as **abstract tracers**. Some tracers, e.g., those that are introduced
for arguments of autodiff transformations, carry `ConcreteArray`

abstract values
that actually include the regular array data, and are used, e.g., for resolving
conditionals. We will refer here to such tracers as **concrete tracers**. Tracer
values computed from these concrete tracers, perhaps in combination with regular
values, result in concrete tracers. A **concrete value** is either a regular
value or a concrete tracer.

Typically, computations that involve at least a tracer value will produce a
tracer value. There are very few exceptions, when a computation can be
entirely done using the abstract value carried by a tracer, in which case the
result can be a **regular** Python value. For example, getting the shape of a
tracer with `ShapedArray`

abstract value. Another example is when explicitly
casting a concrete tracer value to a regular type, e.g., `int(x)`

or
`x.astype(float)`

. Another such situation is for `bool(x)`

, which produces a
Python bool when concreteness makes it possible. That case is especially salient
because of how often it arises in control flow.

Here is how the transformations introduce abstract or concrete tracers:

: introduces`jax.jit()`

**abstract tracers**for all positional arguments except those denoted by`static_argnums`

, which remain regular values.: introduces`jax.pmap()`

**abstract tracers**for all positional arguments except those denoted by`static_broadcasted_argnums`

.,`jax.vmap()`

,`jax.make_jaxpr()`

`xla_computation()`

: introduce**abstract tracers**for all positional arguments.and`jax.jvp()`

introduce`jax.grad()`

**concrete tracers**for all positional arguments. An exception is when these transformations are within an outer transformation and the actual arguments are themselves abstract tracers; in that case, the tracers introduced by the autodiff transformations are also abstract tracers.All higher-order control-flow primitives (

`lax.cond()`

,`lax.while_loop()`

,`lax.fori_loop()`

,`lax.scan()`

) when they process the functionals introduce**abstract tracers**, whether or not there is a JAX transformation in progress.

All of this is relevant when you have code that can operate only on regular Python values, such as code that has conditional control-flow based on data:

```
def divide(x, y):
return x / y if y >= 1. else 0.
```

If we want to apply [ jax.jit()](_autosummary/jax.jit.html#jax.jit), we must ensure to specify

`static_argnums=1`

to ensure `y`

stays a regular value. This is due to the boolean expression
`y >= 1.`

, which requires concrete values (regular or tracers). The
same would happen if we write explicitly `bool(y >= 1.)`

, or `int(y)`

,
or `float(y)`

.Interestingly, `jax.grad(divide)(3., 2.)`

, works because [ jax.grad()](_autosummary/jax.grad.html#jax.grad)
uses concrete tracers, and resolves the conditional using the concrete
value of

`y`

.

---

## Source: https://jax.readthedocs.io/en/latest/stateful-computations.html

# Stateful computations[#](#stateful-computations)

JAX transformations like [ jit()](_autosummary/jax.jit.html#jax.jit),

[,](_autosummary/jax.vmap.html#jax.vmap)

`vmap()`

[, require the functions they wrap to be pure: that is, functions whose outputs depend](_autosummary/jax.grad.html#jax.grad)

`grad()`

*solely*on the inputs, and which have no side effects such as updating of global state. You can find a discussion of this in

[JAX sharp bits: Pure functions](https://docs.jax.dev/en/latest/notebooks/Common_Gotchas_in_JAX.html#pure-functions).

This constraint can pose some challenges in the context of machine learning, where state may exist in many forms. For example:

model parameters,

optimizer state, and

stateful layers, such as

[BatchNorm](https://en.wikipedia.org/wiki/Batch_normalization).

This section offers some advice of how to properly handle state in a JAX program.

## A simple example: Counter[#](#a-simple-example-counter)

Let’s start by looking at a simple stateful program: a counter.

```
import jax
import jax.numpy as jnp
class Counter:
"""A simple counter."""
def __init__(self):
self.n = 0
def count(self) -> int:
"""Increments the counter and returns the new value."""
self.n += 1
return self.n
def reset(self):
"""Resets the counter to zero."""
self.n = 0
counter = Counter()
for _ in range(3):
print(counter.count())
```

```
1
2
3
```

The counter’s `n`

attribute maintains the counter’s *state* between successive calls of `count`

. It is modified as a side effect of calling `count`

.

Let’s say we want to count fast, so we JIT-compile the `count`

method.
(In this example, this wouldn’t actually help speed anyway, for many reasons, but treat this as a toy model of JIT-compiling the update of model parameters, where [ jit()](_autosummary/jax.jit.html#jax.jit) makes an enormous difference).

```
counter.reset()
fast_count = jax.jit(counter.count)
for _ in range(3):
print(fast_count())
```

```
1
1
1
```

Oh no! Our counter isn’t working. This is because the line

```
self.n += 1
```

in `count`

involves a side effect: it modifies the input counter in-place, and so this function is not supported by `jit`

.
Such side effects are executed only once when the function is first traced, and subsequent calls will not repeat the side effect.
So, how do we fix it?

## The solution: explicit state[#](#the-solution-explicit-state)

Part of the problem with our counter was that the returned value didn’t depend on the arguments, meaning a constant was “baked into” the compiled output. But it shouldn’t be a constant – it should depend on the state. Well, then why don’t we make the state into an argument?

```
CounterState = int
class CounterV2:
def count(self, n: CounterState) -> tuple[int, CounterState]:
# You could just return n+1, but here we separate its role as
# the output and as the counter state for didactic purposes.
return n+1, n+1
def reset(self) -> CounterState:
return 0
counter = CounterV2()
state = counter.reset()
for _ in range(3):
value, state = counter.count(state)
print(value)
```

```
1
2
3
```

In this new version of `Counter`

, we moved `n`

to be an argument of `count`

, and added another return value that represents the new, updated, state. To use this counter, we now need to keep track of the state explicitly. But in return, we can now safely `jax.jit`

this counter:

```
state = counter.reset()
fast_count = jax.jit(counter.count)
for _ in range(3):
value, state = fast_count(state)
print(value)
```

```
1
2
3
```

## A general strategy[#](#a-general-strategy)

We can apply the same process to any stateful method to convert it into a stateless one. We took a class of the form

```
class StatefulClass
state: State
def stateful_method(*args, **kwargs) -> Output:
```

and turned it into a class of the form

```
class StatelessClass
def stateless_method(state: State, *args, **kwargs) -> (Output, State):
```

This is a common [functional programming](https://en.wikipedia.org/wiki/Functional_programming) pattern, and, essentially, is the way that state is handled in all JAX programs.

Notice that the need for a class becomes less clear once we have rewritten it this way. We could just keep `stateless_method`

, since the class is no longer doing any work.
This is because, like the strategy we just applied, object-oriented programming (OOP) is a way to help programmers understand program state.

In our case, the `CounterV2`

class is nothing more than a namespace bringing all the functions that use `CounterState`

into one location. Exercise for the reader: do you think it makes sense to keep it as a class?

Incidentally, you’ve already seen an example of this strategy in the JAX pseudo-randomness API, [ jax.random](jax.random.html#module-jax.random), shown in the

[Pseudorandom numbers](random-numbers.html#pseudorandom-numbers)section. Unlike Numpy, which manages random state using implicitly updated stateful classes, JAX requires the programmer to work directly with the random generator state – the PRNG key.

## Simple worked example: Linear Regression[#](#simple-worked-example-linear-regression)

Let’s apply this strategy to a simple machine learning model: linear regression via gradient descent.

Here, we only deal with one kind of state: the model parameters. But generally, you’ll see many kinds of state being threaded in and out of JAX functions, like optimizer state, layer statistics for batchnorm, and others.

The function to look at carefully is `update`

.

```
from typing import NamedTuple
class Params(NamedTuple):
weight: jnp.ndarray
bias: jnp.ndarray
def init(rng) -> Params:
"""Returns the initial model params."""
weights_key, bias_key = jax.random.split(rng)
weight = jax.random.normal(weights_key, ())
bias = jax.random.normal(bias_key, ())
return Params(weight, bias)
def loss(params: Params, x: jnp.ndarray, y: jnp.ndarray) -> jnp.ndarray:
"""Computes the least squares error of the model's predictions on x against y."""
pred = params.weight * x + params.bias
return jnp.mean((pred - y) ** 2)
LEARNING_RATE = 0.005
@jax.jit
def update(params: Params, x: jnp.ndarray, y: jnp.ndarray) -> Params:
"""Performs one SGD update step on params using the given data."""
grad = jax.grad(loss)(params, x, y)
# If we were using Adam or another stateful optimizer,
# we would also do something like
#
# updates, new_optimizer_state = optimizer(grad, optimizer_state)
#
# and then use `updates` instead of `grad` to actually update the params.
# (And we'd include `new_optimizer_state` in the output, naturally.)
new_params = jax.tree.map(
lambda param, g: param - g * LEARNING_RATE, params, grad)
return new_params
```

Notice that we manually pipe the params in and out of the update function.

```
import matplotlib.pyplot as plt
rng = jax.random.key(42)
# Generate true data from y = w*x + b + noise
true_w, true_b = 2, -1
x_rng, noise_rng = jax.random.split(rng)
xs = jax.random.normal(x_rng, (128, 1))
noise = jax.random.normal(noise_rng, (128, 1)) * 0.5
ys = xs * true_w + true_b + noise
# Fit regression
params = init(rng)
for _ in range(1000):
params = update(params, xs, ys)
plt.scatter(xs, ys)
plt.plot(xs, params.weight * xs + params.bias, c='red', label='Model Prediction')
plt.legend();
```

## Taking it further[#](#taking-it-further)

The strategy described above is how any JAX program must handle state when using transformations like `jit`

, `vmap`

, `grad`

, etc.

Handling parameters manually seems fine if you’re dealing with two parameters, but what if it’s a neural net with dozens of layers? You might already be getting worried about two things:

Are we supposed to initialize them all manually, essentially repeating what we already write in the forward pass definition?

Are we supposed to pipe all these things around manually?


The details can be tricky to handle, but there are examples of libraries that take care of this for you. See [JAX Ecosystem Libraries](https://docs.jax.dev/en/latest/#ecosystem) for some examples.

---

## Source: https://jax.readthedocs.io/en/latest/key-concepts.html

# Key concepts[#](#key-concepts)

This section briefly introduces some key concepts of the JAX package.

## Transformations[#](#transformations)

Along with functions to operate on arrays, JAX includes a number of
[transformations](glossary.html#term-transformation) which operate on JAX functions. These include

: Just-in-time (JIT) compilation; see`jax.jit()`

[Just-in-time compilation](jit-compilation.html#jit-compilation): Vectorizing transform; see`jax.vmap()`

[Automatic vectorization](automatic-vectorization.html#automatic-vectorization): Gradient transform; see`jax.grad()`

[Automatic differentiation](automatic-differentiation.html#automatic-differentiation)

as well as several others. Transformations accept a function as an argument, and return a new transformed function. For example, here’s how you might JIT-compile a simple SELU function:

```
import jax
import jax.numpy as jnp
def selu(x, alpha=1.67, lambda_=1.05):
return lambda_ * jnp.where(x > 0, x, alpha * jnp.exp(x) - alpha)
selu_jit = jax.jit(selu)
print(selu_jit(1.0))
```

```
1.05
```

Often you’ll see transformations applied using Python’s decorator syntax for convenience:

```
@jax.jit
def selu(x, alpha=1.67, lambda_=1.05):
return lambda_ * jnp.where(x > 0, x, alpha * jnp.exp(x) - alpha)
```

## Tracing[#](#tracing)

The magic behind transformations is the notion of a [Tracer](glossary.html#term-Tracer).
Tracers are abstract stand-ins for array objects, and are passed to JAX functions in order
to extract the sequence of operations that the function encodes.

You can see this by printing any array value within transformed JAX code; for example:

```
@jax.jit
def f(x):
print(x)
return x + 1
x = jnp.arange(5)
result = f(x)
```

```
JitTracer(int32[5])
```

The value printed is not the array `x`

, but a `Tracer`

instance that
represents essential attributes of `x`

, such as its `shape`

and `dtype`

. By executing
the function with traced values, JAX can determine the sequence of operations encoded
by the function before those operations are actually executed: transformations like
[ jit()](_autosummary/jax.jit.html#jax.jit),

[, and](_autosummary/jax.vmap.html#jax.vmap)

`vmap()`

[can then map this sequence of input operations to a transformed sequence of operations.](_autosummary/jax.grad.html#jax.grad)

`grad()`

**Static vs traced operations**: Just as values can be either static or traced,
operations can be static or traced. Static operations are evaluated at compile-time
in Python; traced operations are compiled & evaluated at run-time in XLA.

For more details, see [Tracing](tracing.html#tracing-tutorial).

## Jaxprs[#](#jaxprs)

JAX has its own intermediate representation for sequences of operations, known as a [jaxpr](glossary.html#term-jaxpr).
A jaxpr (short for *JAX exPRession*) is a simple representation of a functional program, comprising a sequence of [primitive](glossary.html#term-primitive) operations.

For example, consider the `selu`

function we defined above:

```
def selu(x, alpha=1.67, lambda_=1.05):
return lambda_ * jnp.where(x > 0, x, alpha * jnp.exp(x) - alpha)
```

We can use the [ jax.make_jaxpr()](_autosummary/jax.make_jaxpr.html#jax.make_jaxpr) utility to convert this function into a jaxpr
given a particular input:

```
x = jnp.arange(5.0)
jax.make_jaxpr(selu)(x)
```

```
{ lambda ; a:f32[5]. let
b:bool[5] = gt a 0.0:f32[]
c:f32[5] = exp a
d:f32[5] = mul 1.6699999570846558:f32[] c
e:f32[5] = sub d 1.6699999570846558:f32[]
f:f32[5] = jit[
name=_where
jaxpr={ lambda ; b:bool[5] a:f32[5] e:f32[5]. let
f:f32[5] = select_n b e a
in (f,) }
] b a e
g:f32[5] = mul 1.0499999523162842:f32[] f
in (g,) }
```

Comparing this to the Python function definition, we see that it encodes the precise
sequence of operations that the function represents. We’ll go into more depth about
jaxprs later in [JAX internals: The jaxpr language](jaxpr.html#jax-internals-jaxpr).

## Pytrees[#](#pytrees)

JAX functions and transformations fundamentally operate on arrays, but in practice it is
convenient to write code that works with collection of arrays: for example, a neural
network might organize its parameters in a dictionary of arrays with meaningful keys.
Rather than handle such structures on a case-by-case basis, JAX relies on the [pytree](glossary.html#term-pytree)
abstraction to treat such collections in a uniform manner.

Here are some examples of objects that can be treated as pytrees:

```
# (nested) list of parameters
params = [1, 2, (jnp.arange(3), jnp.ones(2))]
print(jax.tree.structure(params))
print(jax.tree.leaves(params))
```

```
PyTreeDef([*, *, (*, *)])
[1, 2, Array([0, 1, 2], dtype=int32), Array([1., 1.], dtype=float32)]
```

```
# Dictionary of parameters
params = {'n': 5, 'W': jnp.ones((2, 2)), 'b': jnp.zeros(2)}
print(jax.tree.structure(params))
print(jax.tree.leaves(params))
```

```
PyTreeDef({'W': *, 'b': *, 'n': *})
[Array([[1., 1.],
[1., 1.]], dtype=float32), Array([0., 0.], dtype=float32), 5]
```

```
# Named tuple of parameters
from typing import NamedTuple
class Params(NamedTuple):
a: int
b: float
params = Params(1, 5.0)
print(jax.tree.structure(params))
print(jax.tree.leaves(params))
```

```
PyTreeDef(CustomNode(namedtuple[Params], [*, *]))
[1, 5.0]
```

JAX has a number of general-purpose utilities for working with PyTrees; for example
the functions [ jax.tree.map()](_autosummary/jax.tree.map.html#jax.tree.map) can be used to map a function to every leaf in a
tree, and

[can be used to apply a reduction across the leaves in a tree.](_autosummary/jax.tree.reduce.html#jax.tree.reduce)

`jax.tree.reduce()`

You can learn more in the [Pytrees](pytrees.html#working-with-pytrees) tutorial.

## JAX API layering: NumPy, lax & XLA[#](#jax-api-layering-numpy-lax-xla)

All JAX operations are implemented in terms of operations in [XLA](https://www.openxla.org/xla/) – the Accelerated Linear Algebra compiler. If you look at the source of `jax.numpy`

, you’ll see that all the operations are eventually expressed in terms of functions defined in [ jax.lax](jax.lax.html#module-jax.lax). While

`jax.numpy`

is a high-level wrapper that provides a familiar interface, you can think of `jax.lax`

as a stricter, but often more powerful, lower-level API for working with multi-dimensional arrays.For example, while `jax.numpy`

will implicitly promote arguments to allow operations between mixed data types, `jax.lax`

will not:

```
import jax.numpy as jnp
jnp.add(1, 1.0) # jax.numpy API implicitly promotes mixed types.
```

```
Array(2., dtype=float32, weak_type=True)
```

```
from jax import lax
lax.add(1, 1.0) # jax.lax API requires explicit type promotion.
```

```
---------------------------------------------------------------------------
TypeError Traceback (most recent call last)
Cell In[10], line 2
1 from jax import lax
----> 2 lax.add(1, 1.0) # jax.lax API requires explicit type promotion.
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/lax/lax.py:1162, in add(x, y)
1142 r"""Elementwise addition: :math:`x + y`.
1143
1144 This function lowers directly to the `stablehlo.add`_ operation.
(...) 1159 .. _stablehlo.add: https://openxla.org/stablehlo/spec#add
1160 """
1161 x, y = core.standard_insert_pvary(x, y)
-> 1162 return add_p.bind(x, y)
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/core.py:653, in Primitive.bind(self, *args, **params)
651 trace_ctx.set_trace(eval_trace)
652 try:
--> 653 return self.bind_with_trace(prev_trace, args, avals, params)
654 finally:
655 trace_ctx.set_trace(prev_trace)
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/core.py:661, in Primitive.bind_with_trace(self, trace, args, avals, params)
659 with set_current_trace(trace):
660 return self.to_lojax(*args, **params) # type: ignore
--> 661 return trace.process_primitive(self, args, params)
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/core.py:1211, in EvalTrace.process_primitive(self, primitive, args, params)
1209 args = map(full_lower, args)
1210 check_eval_args(args)
-> 1211 return primitive.impl(*args, **params)
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/dispatch.py:89, in apply_primitive(prim, *args, **params)
87 prev = config.disable_jit.swap_local(False)
88 try:
---> 89 outs = fun(*args)
90 finally:
91 config.disable_jit.set_local(prev)
[... skipping hidden 15 frame]
File ~/checkouts/readthedocs.org/user_builds/jax/envs/latest/lib/python3.12/site-packages/jax/_src/lax/lax.py:8777, in check_same_dtypes(name, *avals)
8775 equiv = _JNP_FUNCTION_EQUIVALENTS[name]
8776 msg += f" (Tip: jnp.{equiv} is a similar function that does automatic type promotion on inputs)."
-> 8777 raise TypeError(msg.format(name, ", ".join(str(a.dtype) for a in avals)))
TypeError: lax.add requires arguments to have the same dtypes, got int32, float32. (Tip: jnp.add is a similar function that does automatic type promotion on inputs).
```

If using `jax.lax`

directly, you’ll have to do type promotion explicitly in such cases:

```
lax.add(jnp.float32(1), 1.0)
```

```
Array(2., dtype=float32)
```

Along with this strictness, `jax.lax`

also provides efficient APIs for some more general operations than are supported by NumPy.

For example, consider a 1D convolution, which can be expressed in NumPy this way:

```
x = jnp.array([1, 2, 1])
y = jnp.ones(10)
jnp.convolve(x, y)
```

```
Array([1., 3., 4., 4., 4., 4., 4., 4., 4., 4., 3., 1.], dtype=float32)
```

Under the hood, this NumPy operation is translated to a much more general convolution implemented by [ lax.conv_general_dilated](https://docs.jax.dev/en/latest/_autosummary/jax.lax.conv_general_dilated.html):

```
from jax import lax
result = lax.conv_general_dilated(
x.reshape(1, 1, 3).astype(float), # note: explicit promotion
y.reshape(1, 1, 10),
window_strides=(1,),
padding=[(len(y) - 1, len(y) - 1)]) # equivalent of padding='full' in NumPy
result[0, 0]
```

```
Array([1., 3., 4., 4., 4., 4., 4., 4., 4., 4., 3., 1.], dtype=float32)
```

This is a batched convolution operation designed to be efficient for the types of convolutions often used in deep neural nets. It requires much more boilerplate, but is far more flexible and scalable than the convolution provided by NumPy (See [Convolutions in JAX](https://docs.jax.dev/en/latest/notebooks/convolutions.html) for more detail on JAX convolutions).

At their heart, all `jax.lax`

operations are Python wrappers for operations in XLA; here, for example, the convolution implementation is provided by [XLA:ConvWithGeneralPadding](https://www.openxla.org/xla/operation_semantics#convwithgeneralpadding_convolution).
Every JAX operation is eventually expressed in terms of these fundamental XLA operations, which is what enables just-in-time (JIT) compilation.

---

## Source: https://jax.readthedocs.io/en/latest/advanced_guides.html

# Resources and Advanced Guides[#](#resources-and-advanced-guides)

This section contains examples and tutorials on more advanced topics, such as multi-core computation, automatic differentiation, and custom operations.

[Distributed arrays and automatic parallelization](notebooks/Distributed_arrays_and_automatic_parallelization.html)[Explicit sharding (a.k.a. “sharding in types”)](notebooks/explicit-sharding.html)[Manual parallelism with](notebooks/shard_map.html)`shard_map`

[Device-local array layout control](notebooks/layout.html)[JAX Memories and Host Offloading](notebooks/host-offloading.html)[Optimizer State Offloading](notebooks/host-offloading.html#optimizer-state-offloading)[Introduction to multi-controller JAX (aka multi-process/multi-host JAX)](multi_process.html)[Fault Tolerant Distributed JAX](fault_tolerance.html)[Distributed data loading](distributed_data_loading.html)[Colocated Python](notebooks/colocated-python.html)

---

## Source: https://jax.readthedocs.io/en/latest/notebooks/Distributed_arrays_and_automatic_parallelization.html

# Distributed arrays and automatic parallelization[#](#distributed-arrays-and-automatic-parallelization)

This tutorial discusses parallelism via `jax.Array`

, the unified array object model available in JAX v0.4.1 and newer. See [The Training Cookbook](../the-training-cookbook.html) for a real-world machine learning training example that uses this API.

```
from typing import Optional
import numpy as np
import jax
import jax.numpy as jnp
```

⚠️ WARNING: The notebook requires 8 devices to run.

```
if len(jax.local_devices()) < 8:
raise Exception("Notebook requires 8 devices to run")
```

## Intro and a quick example[#](#intro-and-a-quick-example)

By reading this tutorial notebook, you’ll learn about `jax.Array`

, a unified
datatype for representing arrays, even with physical storage spanning multiple
devices. You’ll also learn about how using `jax.Array`

s together with `jax.jit`

can provide automatic compiler-based parallelization.

Before we think step by step, here’s a quick example.
First, we’ll create a `jax.Array`

sharded across multiple devices:

```
from jax.sharding import PartitionSpec as P, NamedSharding
```

```
# Create a Sharding object to distribute a value across devices:
mesh = jax.make_mesh((4, 2), ('x', 'y'))
```

```
# Create an array of random values:
x = jax.random.normal(jax.random.key(0), (8192, 8192))
# and use jax.device_put to distribute it across devices:
y = jax.device_put(x, NamedSharding(mesh, P('x', 'y')))
jax.debug.visualize_array_sharding(y)
```

┌──────────┬──────────┐ │ TPU 0 │ TPU 1 │ ├──────────┼──────────┤ │ TPU 2 │ TPU 3 │ ├──────────┼──────────┤ │ TPU 6 │ TPU 7 │ ├──────────┼──────────┤ │ TPU 4 │ TPU 5 │ └──────────┴──────────┘

Next, we’ll apply a computation to it and visualize how the result values are stored across multiple devices too:

```
z = jnp.sin(y)
jax.debug.visualize_array_sharding(z)
```

┌──────────┬──────────┐ │ TPU 0 │ TPU 1 │ ├──────────┼──────────┤ │ TPU 2 │ TPU 3 │ ├──────────┼──────────┤ │ TPU 6 │ TPU 7 │ ├──────────┼──────────┤ │ TPU 4 │ TPU 5 │ └──────────┴──────────┘

The evaluation of the `jnp.sin`

application was automatically parallelized
across the devices on which the input values (and output values) are stored:

```
# `x` is present on a single device
%timeit -n 5 -r 5 jnp.sin(x).block_until_ready()
```

```
The slowest run took 8.96 times longer than the fastest. This could mean that an intermediate result is being cached.
25.2 ms ± 30.9 ms per loop (mean ± std. dev. of 5 runs, 5 loops each)
```

```
# `y` is sharded across 8 devices.
%timeit -n 5 -r 5 jnp.sin(y).block_until_ready()
```

```
2.4 ms ± 61.4 µs per loop (mean ± std. dev. of 5 runs, 5 loops each)
```

Now let’s look at each of these pieces in more detail!

## Computation follows data sharding and is automatically parallelized[#](#computation-follows-data-sharding-and-is-automatically-parallelized)

With sharded input data, the compiler can give us parallel computation. In particular, functions decorated with `jax.jit`

can operate over sharded arrays without copying data onto a single device. Instead, computation follows sharding: based on the sharding of the input data, the compiler decides shardings for intermediates and output values, and parallelizes their evaluation, even inserting communication operations as necessary.

For example, the simplest computation is an elementwise one:

```
mesh = jax.make_mesh((4, 2), ('a', 'b'))
```

```
x = jax.device_put(x, NamedSharding(mesh, P('a', 'b')))
print('input sharding:')
jax.debug.visualize_array_sharding(x)
y = jnp.sin(x)
print('output sharding:')
jax.debug.visualize_array_sharding(y)
```

```
input sharding:
output sharding:
```

┌──────────┬──────────┐ │ TPU 0 │ TPU 1 │ ├──────────┼──────────┤ │ TPU 2 │ TPU 3 │ ├──────────┼──────────┤ │ TPU 6 │ TPU 7 │ ├──────────┼──────────┤ │ TPU 4 │ TPU 5 │ └──────────┴──────────┘

┌──────────┬──────────┐ │ TPU 0 │ TPU 1 │ ├──────────┼──────────┤ │ TPU 2 │ TPU 3 │ ├──────────┼──────────┤ │ TPU 6 │ TPU 7 │ ├──────────┼──────────┤ │ TPU 4 │ TPU 5 │ └──────────┴──────────┘

Here for the elementwise operation `jnp.sin`

the compiler chose the output sharding to be the same as the input. Moreover, the compiler automatically parallelized the computation, so that each device computed its output shard from its input shard in parallel.

In other words, even though we wrote the `jnp.sin`

computation as if a single machine were to execute it, the compiler splits up the computation for us and executes it on multiple devices.

We can do the same for more than just elementwise operations too. Consider a matrix multiplication with sharded inputs:

```
y = jax.device_put(x, NamedSharding(mesh, P('a', None)))
z = jax.device_put(x, NamedSharding(mesh, P(None, 'b')))
print('lhs sharding:')
jax.debug.visualize_array_sharding(y)
print('rhs sharding:')
jax.debug.visualize_array_sharding(z)
w = jnp.dot(y, z)
print('out sharding:')
jax.debug.visualize_array_sharding(w)
```

```
lhs sharding:
rhs sharding:
out sharding:
```

┌───────────────────────┐ │ TPU 0,1 │ ├───────────────────────┤ │ TPU 2,3 │ ├───────────────────────┤ │ TPU 6,7 │ ├───────────────────────┤ │ TPU 4,5 │ └───────────────────────┘

┌───────────┬───────────┐ │ │ │ │ │ │ │ │ │ │ │ │ │TPU 0,2,4,6│TPU 1,3,5,7│ │ │ │ │ │ │ │ │ │ │ │ │ └───────────┴───────────┘

┌──────────┬──────────┐ │ TPU 0 │ TPU 1 │ ├──────────┼──────────┤ │ TPU 2 │ TPU 3 │ ├──────────┼──────────┤ │ TPU 6 │ TPU 7 │ ├──────────┼──────────┤ │ TPU 4 │ TPU 5 │ └──────────┴──────────┘

Here the compiler chose the output sharding so that it could maximally parallelize the computation: without needing communication, each device already has the input shards it needs to compute its output shard.

How can we be sure it’s actually running in parallel? We can do a simple timing experiment:

```
x_single = jax.device_put(x, jax.devices()[0])
jax.debug.visualize_array_sharding(x_single)
```

```
┌───────────────────────┐
│ │
│ │
│ │
│ │
│ TPU 0 │
│ │
│ │
│ │
│ │
└───────────────────────┘
```

```
np.allclose(jnp.dot(x_single, x_single),
jnp.dot(y, z))
```

```
True
```

```
%timeit -n 5 -r 5 jnp.dot(x_single, x_single).block_until_ready()
```

```
49.7 ms ± 349 µs per loop (mean ± std. dev. of 5 runs, 5 loops each)
```

```
%timeit -n 5 -r 5 jnp.dot(y, z).block_until_ready()
```

```
7.47 ms ± 44.8 µs per loop (mean ± std. dev. of 5 runs, 5 loops each)
```

Even copying a sharded `Array`

produces a result with the sharding of the input:

```
w_copy = jnp.copy(w)
jax.debug.visualize_array_sharding(w_copy)
```

┌──────────┬──────────┐ │ TPU 0 │ TPU 1 │ ├──────────┼──────────┤ │ TPU 2 │ TPU 3 │ ├──────────┼──────────┤ │ TPU 6 │ TPU 7 │ ├──────────┼──────────┤ │ TPU 4 │ TPU 5 │ └──────────┴──────────┘

So computation follows data placement: when we explicitly shard data with `jax.device_put`

, and apply functions to that data, the compiler attempts to parallelize the computation and decide the output sharding. This policy for sharded data is a generalization of [JAX’s policy of following explicit device placement](https://docs.jax.dev/en/latest/faq.html#controlling-data-and-computation-placement-on-devices).

### When explicit shardings disagree, JAX errors[#](#when-explicit-shardings-disagree-jax-errors)

But what if two arguments to a computation are explicitly placed on different sets of devices, or with incompatible device orders? In these ambiguous cases, an error is raised:

```
import textwrap
from termcolor import colored
def print_exception(e):
name = colored(f'{type(e).__name__}', 'red', force_color=True)
print(textwrap.fill(f'{name}: {str(e)}'))
```

```
sharding1 = NamedSharding(Mesh(jax.devices()[:4], 'x'), P('x'))
sharding2 = NamedSharding(Mesh(jax.devices()[4:], 'x'), P('x'))
y = jax.device_put(x, sharding1)
z = jax.device_put(x, sharding2)
try: y + z
except ValueError as e: print_exception(e)
```

```
ValueError: Received incompatible devices for jitted
computation. Got argument x1 of jax.numpy.add with shape int32[24] and
device ids [0, 1, 2, 3] on platform TPU and argument x2 of
jax.numpy.add with shape int32[24] and device ids [4, 5, 6, 7] on
platform TPU
```

```
devices = jax.devices()
permuted_devices = [devices[i] for i in [0, 1, 2, 3, 6, 7, 4, 5]]
sharding1 = NamedSharding(Mesh(devices, 'x'), P('x'))
sharding2 = NamedSharding(Mesh(permuted_devices, 'x'), P('x'))
y = jax.device_put(x, sharding1)
z = jax.device_put(x, sharding2)
try: y + z
except ValueError as e: print_exception(e)
```

```
ValueError: Received incompatible devices for jitted
computation. Got argument x1 of jax.numpy.add with shape int32[24] and
device ids [0, 1, 2, 3, 4, 5, 6, 7] on platform TPU and argument x2 of
jax.numpy.add with shape int32[24] and device ids [0, 1, 2, 3, 6, 7,
4, 5] on platform TPU
```

We say arrays that have been explicitly placed or sharded with `jax.device_put`

are *committed* to their device(s), and so won’t be automatically moved. See the [device placement FAQ](https://docs.jax.dev/en/latest/faq.html#controlling-data-and-computation-placement-on-devices) for more information.

When arrays are *not* explicitly placed or sharded with `jax.device_put`

, they are placed *uncommitted* on the default device.
Unlike committed arrays, uncommitted arrays can be moved and resharded automatically: that is, uncommitted arrays can be arguments to a computation even if other arguments are explicitly placed on different devices.

For example, the output of `jnp.zeros`

, `jnp.arange`

, and `jnp.array`

are uncommitted:

```
y = jax.device_put(x, sharding1)
y + jnp.ones_like(y)
y + jnp.arange(y.size).reshape(y.shape)
print('no error!')
```

```
no error!
```

## Constraining shardings of intermediates in `jit`

ted code[#](#constraining-shardings-of-intermediates-in-jitted-code)

While the compiler will attempt to decide how a function’s intermediate values and outputs should be sharded, we can also give it hints using `jax.lax.with_sharding_constraint`

. Using `jax.lax.with_sharding_constraint`

is much like `jax.device_put`

, except we use it inside staged-out (i.e. `jit`

-decorated) functions:

```
mesh = jax.make_mesh((4, 2), ('x', 'y'))
```

```
x = jax.random.normal(jax.random.key(0), (8192, 8192))
x = jax.device_put(x, NamedSharding(mesh, P('x', 'y')))
```

```
@jax.jit
def f(x):
x = x + 1
y = jax.lax.with_sharding_constraint(x, NamedSharding(mesh, P('y', 'x')))
return y
```

```
jax.debug.visualize_array_sharding(x)
y = f(x)
jax.debug.visualize_array_sharding(y)
```

┌──────────┬──────────┐ │ TPU 0 │ TPU 1 │ ├──────────┼──────────┤ │ TPU 2 │ TPU 3 │ ├──────────┼──────────┤ │ TPU 6 │ TPU 7 │ ├──────────┼──────────┤ │ TPU 4 │ TPU 5 │ └──────────┴──────────┘

┌───────┬───────┬───────┬───────┐ │ │ │ │ │ │ TPU 0 │ TPU 2 │ TPU 6 │ TPU 4 │ │ │ │ │ │ │ │ │ │ │ ├───────┼───────┼───────┼───────┤ │ │ │ │ │ │ TPU 1 │ TPU 3 │ TPU 7 │ TPU 5 │ │ │ │ │ │ │ │ │ │ │ └───────┴───────┴───────┴───────┘

```
@jax.jit
def f(x):
x = x + 1
y = jax.lax.with_sharding_constraint(x, NamedSharding(mesh, P()))
return y
```

```
jax.debug.visualize_array_sharding(x)
y = f(x)
jax.debug.visualize_array_sharding(y)
```

┌──────────┬──────────┐ │ TPU 0 │ TPU 1 │ ├──────────┼──────────┤ │ TPU 2 │ TPU 3 │ ├──────────┼──────────┤ │ TPU 6 │ TPU 7 │ ├──────────┼──────────┤ │ TPU 4 │ TPU 5 │ └──────────┴──────────┘

┌───────────────────────┐ │ │ │ │ │ │ │ │ │ TPU 0,1,2,3,4,5,6,7 │ │ │ │ │ │ │ │ │ └───────────────────────┘

By adding `with_sharding_constraint`

, we’ve constrained the sharding of the output. In addition to respecting the annotation on a particular intermediate, the compiler will use annotations to decide shardings for other values.

It’s often a good practice to annotate the outputs of computations, for example based on how the values are ultimately consumed.

## Examples: neural networks[#](#examples-neural-networks)

**⚠️ WARNING: The following is meant to be a simple demonstration of automatic sharding propagation with jax.Array, but it may not reflect best practices for real examples.** For instance, real examples may require more use of

`with_sharding_constraint`

.We can use `jax.device_put`

and `jax.jit`

’s computation-follows-sharding features to parallelize computation in neural networks. Here are some simple examples, based on this basic neural network:

```
import jax
import jax.numpy as jnp
```

```
def predict(params, inputs):
for W, b in params:
outputs = jnp.dot(inputs, W) + b
inputs = jnp.maximum(outputs, 0)
return outputs
def loss(params, batch):
inputs, targets = batch
predictions = predict(params, inputs)
return jnp.mean(jnp.sum((predictions - targets)**2, axis=-1))
```

```
loss_jit = jax.jit(loss)
gradfun = jax.jit(jax.grad(loss))
```

```
def init_layer(key, n_in, n_out):
k1, k2 = jax.random.split(key)
W = jax.random.normal(k1, (n_in, n_out)) / jnp.sqrt(n_in)
b = jax.random.normal(k2, (n_out,))
return W, b
def init_model(key, layer_sizes, batch_size):
key, *keys = jax.random.split(key, len(layer_sizes))
params = list(map(init_layer, keys, layer_sizes[:-1], layer_sizes[1:]))
key, *keys = jax.random.split(key, 3)
inputs = jax.random.normal(keys[0], (batch_size, layer_sizes[0]))
targets = jax.random.normal(keys[1], (batch_size, layer_sizes[-1]))
return params, (inputs, targets)
layer_sizes = [784, 8192, 8192, 8192, 10]
batch_size = 8192
params, batch = init_model(jax.random.key(0), layer_sizes, batch_size)
```

### 8-way batch data parallelism[#](#way-batch-data-parallelism)

```
mesh = jax.make_mesh((8,), ('batch',))
```

```
sharding = NamedSharding(mesh, P('batch'))
replicated_sharding = NamedSharding(mesh, P())
```

```
batch = jax.device_put(batch, sharding)
params = jax.device_put(params, replicated_sharding)
```

```
loss_jit(params, batch)
```

```
Array(23.469475, dtype=float32)
```

```
step_size = 1e-5
for _ in range(30):
grads = gradfun(params, batch)
params = [(W - step_size * dW, b - step_size * db)
for (W, b), (dW, db) in zip(params, grads)]
print(loss_jit(params, batch))
```

```
10.760109
```

```
%timeit -n 5 -r 5 gradfun(params, batch)[0][0].block_until_ready()
```

```
53.8 ms ± 1.14 ms per loop (mean ± std. dev. of 5 runs, 5 loops each)
```

```
batch_single = jax.device_put(batch, jax.devices()[0])
params_single = jax.device_put(params, jax.devices()[0])
```

```
%timeit -n 5 -r 5 gradfun(params_single, batch_single)[0][0].block_until_ready()
```

```
351 ms ± 81.2 ms per loop (mean ± std. dev. of 5 runs, 5 loops each)
```

### 4-way batch data parallelism and 2-way model tensor parallelism[#](#way-batch-data-parallelism-and-2-way-model-tensor-parallelism)

```
mesh = jax.make_mesh((4, 2), ('batch', 'model'))
```

```
batch = jax.device_put(batch, NamedSharding(mesh, P('batch', None)))
jax.debug.visualize_array_sharding(batch[0])
jax.debug.visualize_array_sharding(batch[1])
```

┌───────┐ │TPU 0,1│ ├───────┤ │TPU 2,3│ ├───────┤ │TPU 6,7│ ├───────┤ │TPU 4,5│ └───────┘

┌───────┐ │TPU 0,1│ ├───────┤ │TPU 2,3│ ├───────┤ │TPU 6,7│ ├───────┤ │TPU 4,5│ └───────┘

```
replicated_sharding = NamedSharding(mesh, P())
```

```
(W1, b1), (W2, b2), (W3, b3), (W4, b4) = params
W1 = jax.device_put(W1, replicated_sharding)
b1 = jax.device_put(b1, replicated_sharding)
W2 = jax.device_put(W2, NamedSharding(mesh, P(None, 'model')))
b2 = jax.device_put(b2, NamedSharding(mesh, P('model')))
W3 = jax.device_put(W3, NamedSharding(mesh, P('model', None)))
b3 = jax.device_put(b3, replicated_sharding)
W4 = jax.device_put(W4, replicated_sharding)
b4 = jax.device_put(b4, replicated_sharding)
params = (W1, b1), (W2, b2), (W3, b3), (W4, b4)
```

```
jax.debug.visualize_array_sharding(W2)
```

┌───────────┬───────────┐ │ │ │ │ │ │ │ │ │ │ │ │ │TPU 0,2,4,6│TPU 1,3,5,7│ │ │ │ │ │ │ │ │ │ │ │ │ └───────────┴───────────┘

```
jax.debug.visualize_array_sharding(W3)
```

┌───────────────────────┐ │ │ │ TPU 0,2,4,6 │ │ │ │ │ ├───────────────────────┤ │ │ │ TPU 1,3,5,7 │ │ │ │ │ └───────────────────────┘

```
print(loss_jit(params, batch))
```

```
10.760109
```

```
step_size = 1e-5
for _ in range(30):
grads = gradfun(params, batch)
params = [(W - step_size * dW, b - step_size * db)
for (W, b), (dW, db) in zip(params, grads)]
```

```
print(loss_jit(params, batch))
```

```
10.752513
```

```
(W1, b1), (W2, b2), (W3, b3), (W4, b4) = params
jax.debug.visualize_array_sharding(W2)
jax.debug.visualize_array_sharding(W3)
```

┌───────────┬───────────┐ │ │ │ │ │ │ │ │ │ │ │ │ │TPU 0,2,4,6│TPU 1,3,5,7│ │ │ │ │ │ │ │ │ │ │ │ │ └───────────┴───────────┘

┌───────────────────────┐ │ │ │ TPU 0,2,4,6 │ │ │ │ │ ├───────────────────────┤ │ │ │ TPU 1,3,5,7 │ │ │ │ │ └───────────────────────┘

```
%timeit -n 10 -r 10 gradfun(params, batch)[0][0].block_until_ready()
```

```
51.4 ms ± 454 µs per loop (mean ± std. dev. of 10 runs, 10 loops each)
```

---

## Source: https://jax.readthedocs.io/en/latest/notebooks/explicit-sharding.html

# Explicit sharding (a.k.a. “sharding in types”)[#](#explicit-sharding-a-k-a-sharding-in-types)

JAX’s traditional automatic sharding leaves sharding decisions to the compiler.
You can provide hints to the compiler using
`jax.lax.with_sharding_constraint`

but for the most part you’re supposed to be
focussed on the math while the compiler worries about sharding.

But what if you have a strong opinion about how you want your program sharded?
With enough calls to `with_sharding_constraint`

you can probably guide the
compiler’s hand to make it do what you want. But “compiler tickling” is
famously not a fun programming model. Where should you put the sharding
constraints? You could put them on every single intermediate but that’s a lot
of work and it’s also easy to make mistakes that way because there’s no way to
check that the shardings make sense together. More commonly, people add just
enough sharding annotations to constrain the compiler. But this is a slow
iterative process. It’s hard to know ahead of time what XLA’s GSPMD pass will
do (it’s a whole-program optimization) so all you can do is add annotations,
inspect XLA’s sharding choices to see what happened, and repeat.

To fix this we’ve come up with a different style of sharding programming we
call “explicit sharding” or “sharding in types”. The idea is that sharding
propagation happens at the JAX level at trace time. Each JAX operation has a
sharding rule that takes the shardings of the op’s arguments and produces a
sharding for the op’s result. For most operations these rules are simple and
obvious because there’s only one reasonable choice. But for some operations it’s
unclear how to shard the result. In that case we ask the programmer
to provide an `out_sharding`

argument explicitly and we throw a (trace-time)
error otherwise. Since the shardings are propagated at trace time they can
also be *queried* at trace time too. In the rest of this doc we’ll describe
how to use explicit sharding mode. Note that this is a new feature so we
expect there to be bugs and unimplemented cases. Please let us know when you
find something that doesn’t work! Also see [The Training Cookbook](../the-training-cookbook.html)
for a real-world machine learning training example that uses explicit sharding.

```
import jax
import numpy as np
import jax.numpy as jnp
from jax.sharding import PartitionSpec as P, AxisType, get_abstract_mesh, reshard
jax.config.update('jax_num_cpu_devices', 8)
```

## Setting up an explicit mesh[#](#setting-up-an-explicit-mesh)

The main idea behind explicit shardings, (a.k.a. sharding-in-types), is that
the JAX-level *type* of a value includes a description of how the value is sharded.
We can query the JAX-level type of any JAX value (or Numpy array, or Python
scalar) using `jax.typeof`

:

```
some_array = np.arange(8)
print(f"JAX-level type of some_array: {jax.typeof(some_array)}")
```

```
JAX-level type of some_array: int32[8]
```

Importantly, we can query the type even while tracing under a `jit`

(the JAX-level type
is almost *defined* as “the information about a value we have access to while
under a jit).

```
@jax.jit
def foo(x):
print(f"JAX-level type of x during tracing: {jax.typeof(x)}")
return x + x
foo(some_array)
```

```
JAX-level type of x during tracing: int32[8]
```

```
Array([ 0, 2, 4, 6, 8, 10, 12, 14], dtype=int32)
```

These types show the shape and dtype of array but they don’t appear to
show sharding. (Actually, they *did* show sharding, but the shardings were
trivial. See “Concrete array shardings”, below.) To start seeing some
interesting shardings we need to set up an explicit-sharding mesh.

`jax.set_mesh`

can be used as a global setter or a context manager. We use
`jax.set_mesh`

in this notebook as a global setter. You can use it as a scoped
context manager via `with jax.set_mesh(mesh)`

.

```
mesh = jax.make_mesh((2, 4), ("X", "Y"),
axis_types=(AxisType.Explicit, AxisType.Explicit))
jax.set_mesh(mesh)
print(f"Current mesh is: {get_abstract_mesh()}")
```

```
Current mesh is: AbstractMesh('X': 2, 'Y': 4, axis_types=(Explicit, Explicit), device_kind=cpu, num_cores=None)
```

Now we can create some sharded arrays using `reshard`

:

```
replicated_array = np.arange(8).reshape(4, 2)
sharded_array = reshard(replicated_array, P("X", None))
print(f"replicated_array type: {jax.typeof(replicated_array)}")
print(f"sharded_array type: {jax.typeof(sharded_array)}")
```

```
replicated_array type: int32[4,2]
sharded_array type: int32[4@X,2]
```

We should read the type `f32[4@X, 2]`

as “a 4-by-2 array of 32-bit floats whose first dimension
is sharded along mesh axis ‘X’. The array is replicated along all other mesh
axes”

These shardings associated with JAX-level types propagate through operations. For example:

```
arg0 = reshard(np.arange(4).reshape(4, 1), P("X", None))
arg1 = reshard(np.arange(8).reshape(1, 8), P(None, "Y"))
result = arg0 + arg1
print(f"arg0 sharding: {jax.typeof(arg0)}")
print(f"arg1 sharding: {jax.typeof(arg1)}")
print(f"result sharding: {jax.typeof(result)}")
```

```
arg0 sharding: int32[4@X,1]
arg1 sharding: int32[1,8@Y]
result sharding: int32[4@X,8@Y]
```

We can do the same type querying under a jit:

```
@jax.jit
def add_arrays(x, y):
ans = x + y
print(f"x sharding: {jax.typeof(x)}")
print(f"y sharding: {jax.typeof(y)}")
print(f"ans sharding: {jax.typeof(ans)}")
return ans
add_arrays(arg0, arg1)
```

```
x sharding: int32[4@X,1]
y sharding: int32[1,8@Y]
ans sharding: int32[4@X,8@Y]
```

```
Array([[ 0, 1, 2, 3, 4, 5, 6, 7],
[ 1, 2, 3, 4, 5, 6, 7, 8],
[ 2, 3, 4, 5, 6, 7, 8, 9],
[ 3, 4, 5, 6, 7, 8, 9, 10]], dtype=int32)
```

That’s the gist of it. Shardings propagate deterministically at trace time and we can query them at trace time.

## JAX transformations and higher-order functions[#](#jax-transformations-and-higher-order-functions)

The staged-out representation of JAX programs is explicitly typed. (We call
the types “avals” but that’s not important.) In explicit-sharding mode, the
sharding is part of that type. This means that shardings need to match
wherever types need to match. For example, the two sides of a `lax.cond`

need to
have results with matching shardings. And the carry of `lax.scan`

needs to have the
same sharding at the input and the output of the scan body. And when you
construct a jaxpr without concrete arguments using `make_jaxpr`

you need to
provide shardings too. Certain JAX transformations perform type-level
operations. Automatic differentation constructs a tangent type for each primal
type in the original computation (e.g. `TangentOf(float) == float`

,
`TangentOf(int) == float0`

). With sharding in the types, this means that tangent
values are sharded in the same way as their primal values. Vmap and scan also
do type-level operations, they lift an array shape to a rank-augmented version
of that shape. That extra array axis needs a sharding. We can infer it from the
arguments to the vmap/scan but they all need to agree. And a nullary vmap/scan
needs an explicit sharding argument just as it needs an explicit length
argument.

## Working around unimplemented sharding rules using `auto_axes`

[#](#working-around-unimplemented-sharding-rules-using-auto-axes)

The implementation of explicit sharding is still a work-in-progress and there
are plenty of ops that are missing sharding rules. For example, `scatter`

and
`gather`

(i.e. indexing ops).

Normally we wouldn’t suggest using a feature with so many unimplemented cases,
but in this instance there’s a reasonable fallback you can use: `auto_axes`

.
The idea is that you can temporarily drop into a context where the mesh axes
are “auto” rather than “explicit”. You explicitly specify how you intend the
final result of the `auto_axes`

to be sharded as it gets returned to the calling context.

This works as a fallback for ops with unimplemented sharding rules. It also
works when you want to override the sharding-in-types type system. For
example, suppose we want to add a `f32[4@X, 4]`

to a `f32[4, 4@X]`

. Our
sharding rule for addition would throw an error: the result would need to be
`f32[4@X, 4@X]`

, which tries uses a mesh axis twice, which is illegal. But say you
want to perform the operation anyway, and you want the result to be sharded along
the first axis only, like `f32[4@X, 4]`

. You can do this as follows:

```
from jax.sharding import auto_axes, explicit_axes
some_x = reshard(np.arange(16).reshape(4, 4), P("X", None))
some_y = reshard(np.arange(16).reshape(4, 4), P(None, "X"))
try:
some_x + some_y
except Exception as e:
print("ERROR!")
print(e)
print("=== try again with auto_axes ===")
@auto_axes
def add_with_out_sharding_kwarg(x, y):
print(f"We're in auto-sharding mode here. This is the current mesh: {get_abstract_mesh()}")
return x + y
result = add_with_out_sharding_kwarg(some_x, some_y, out_sharding=P("X", None))
print(f"Result type: {jax.typeof(result)}")
```

```
ERROR!
add operation with inputs: i32[4@X,4], i32[4,4@X] produces an illegally sharded result: i32[4@X,4@X]
=== try again with auto_axes ===
We're in auto-sharding mode here. This is the current mesh: AbstractMesh('X': 2, 'Y': 4, axis_types=(Auto, Auto), device_kind=cpu, num_cores=None)
Result type: int32[4@X,4]
```

## Using a mixture of sharding modes[#](#using-a-mixture-of-sharding-modes)

JAX now has three styles of parallelism:

*Automatic sharding*is where you treat all the devices as a single logical machine and write a “global view” array program for that machine. The compiler decides how to partition the data and computation across the available devices. You can give hints to the compiler using`with_sharding_constraint`

.*Explicit Sharding*(*new*) is similar to automatic sharding in that you’re writing a global-view program. The difference is that the sharding of each array is part of the array’s JAX-level type making it an explicit part of the programming model. These shardings are propagated at the JAX level and queryable at trace time. It’s still the compiler’s responsibility to turn the whole-array program into per-device programs (turning`jnp.sum`

into`psum`

for example) but the compiler is heavily constrained by the user-supplied shardings.*Manual Sharding*(`shard_map`

) is where you write a program from the perspective of a single device. Communication between devices happens via explicit collective operations like psum.

A summary table:

Mode |
View? |
Explicit sharding? |
Explicit Collectives? |
|---|---|---|---|
Auto |
Global |
❌ |
❌ |
Explicit |
Global |
✅ |
❌ |
Manual |
Per-device |
✅ |
✅ |

The current mesh tells us which sharding mode we’re in. We can query it with
`get_abstract_mesh`

:

```
print(f"Current mesh is: {get_abstract_mesh()}")
```

```
Current mesh is: AbstractMesh('X': 2, 'Y': 4, axis_types=(Explicit, Explicit), device_kind=cpu, num_cores=None)
```

Since `axis_types=(Explicit, Explicit)`

, this means we’re in fully-explicit
mode. Notice that the sharding mode is associated with a mesh *axis*, not the
mesh as a whole. We can actually mix sharding modes by having a different
sharding mode for each mesh axis. Shardings (on JAX-level types) can only
mention *explicit* mesh axes and collective operations like `psum`

can only
mention *manual* mesh axes.

You can use the `auto_axes`

API to be `Auto`

over some mesh axes while being `Explicit`

over other. For example:

```
import functools
@functools.partial(auto_axes, axes='X')
def g(y):
print(f'mesh inside g: {get_abstract_mesh()}')
print(f'y.sharding inside g: {jax.typeof(y) = }', end='\n\n')
return y * 2
@jax.jit
def f(arr1):
print(f'mesh inside f: {get_abstract_mesh()}')
x = jnp.sin(arr1)
print(f'x.sharding: {jax.typeof(x)}', end='\n\n')
z = g(x, out_sharding=P("X", "Y"))
print(f'z.sharding: {jax.typeof(z)}', end="\n\n")
return z + 1
some_x = reshard(np.arange(16).reshape(4, 4), P("X", "Y"))
f(some_x)
```

```
mesh inside f: AbstractMesh('X': 2, 'Y': 4, axis_types=(Explicit, Explicit), device_kind=cpu, num_cores=None)
x.sharding: float32[4@X,4@Y]
mesh inside g: AbstractMesh('X': 2, 'Y': 4, axis_types=(Auto, Explicit), device_kind=cpu, num_cores=None)
y.sharding inside g: jax.typeof(y) = ShapedArray(float32[4,4@Y])
z.sharding: float32[4@X,4@Y]
```

```
Array([[ 1. , 2.682942 , 2.818595 , 1.28224 ],
[-0.513605 , -0.9178486 , 0.44116902, 2.3139732 ],
[ 2.9787164 , 1.824237 , -0.08804226, -0.99998045],
[-0.07314587, 1.840334 , 2.9812148 , 2.3005757 ]], dtype=float32)
```

As you can see, inside `g`

, the type of `arr1`

is `ShapedArray(float32[4,4@Y])`

which indicates it’s Explicit over `Y`

mesh axis while auto over `X`

.

You can also use the `explicit_axes`

API to drop into `Explicit`

mode over some or all mesh axes.

```
auto_mesh = jax.make_mesh((2, 4), ("X", "Y"),
axis_types=(AxisType.Auto, AxisType.Auto))
@functools.partial(explicit_axes, axes=('X', 'Y'))
def explicit_g(y):
print(f'mesh inside g: {get_abstract_mesh()}')
print(f'y.sharding inside g: {jax.typeof(y) = }')
z = y * 2
print(f'z.sharding inside g: {jax.typeof(z) = }', end='\n\n')
return z
@jax.jit
def f(arr1):
print(f'mesh inside f: {get_abstract_mesh()}', end='\n\n')
x = jnp.sin(arr1)
z = explicit_g(x, in_sharding=P("X", "Y"))
return z + 1
with jax.set_mesh(auto_mesh):
some_x = jax.device_put(np.arange(16).reshape(4, 4), P("X", "Y"))
f(some_x)
```

```
mesh inside f: AbstractMesh('X': 2, 'Y': 4, axis_types=(Auto, Auto), device_kind=cpu, num_cores=None)
mesh inside g: AbstractMesh('X': 2, 'Y': 4, axis_types=(Explicit, Explicit), device_kind=cpu, num_cores=None)
y.sharding inside g: jax.typeof(y) = ShapedArray(float32[4@X,4@Y])
z.sharding inside g: jax.typeof(z) = ShapedArray(float32[4@X,4@Y])
```

As you can see, all axes of mesh inside `f`

are of type `Auto`

while inside `g`

, they are of type `Explicit`

.
Because of that, sharding is visible on the type of arrays inside `g`

.

## Concrete array shardings can mention `Auto`

mesh axis[#](#concrete-array-shardings-can-mention-auto-mesh-axis)

You can query the sharding of a concrete array `x`

with `x.sharding`

. You
might expect the result to be the same as the sharding associated with the
value’s type, `jax.typeof(x).sharding`

. It might not be! The concrete array sharding, `x.sharding`

, describes the sharding along
both `Explicit`

and `Auto`

mesh axes. It’s the sharding that the compiler
eventually chose. Whereas the type-specificed sharding,
`jax.typeof(x).sharding`

, only describes the sharding along `Explicit`

mesh
axes. The `Auto`

axes are deliberately hidden from the type because they’re
the purview of the compiler. We can think of the concrete array sharding being consistent with, but more specific than,
the type-specified sharding. For example:

```
def compare_shardings(x):
print(f"=== with mesh: {get_abstract_mesh()} ===")
print(f"Concrete value sharding: {x.sharding.spec}")
print(f"Type-specified sharding: {jax.typeof(x).sharding.spec}")
my_array = jnp.sin(reshard(np.arange(8), P("X")))
compare_shardings(my_array)
@auto_axes
def check_in_auto_context(x):
compare_shardings(x)
return x
check_in_auto_context(my_array, out_sharding=P("X"))
```

```
=== with mesh: AbstractMesh('X': 2, 'Y': 4, axis_types=(Explicit, Explicit), device_kind=cpu, num_cores=None) ===
Concrete value sharding: P('X',)
Type-specified sharding: P('X',)
=== with mesh: AbstractMesh('X': 2, 'Y': 4, axis_types=(Auto, Auto), device_kind=cpu, num_cores=None) ===
Concrete value sharding: P('X',)
Type-specified sharding: P(None,)
```

```
Array([ 0. , 0.84147096, 0.9092974 , 0.14112 , -0.7568025 ,
-0.9589243 , -0.2794155 , 0.6569866 ], dtype=float32)
```

Notice that at the top level, where we’re currently in a fully `Explicit`

mesh
context, the concrete array sharding and type-specified sharding agree. But
under the `auto_axes`

decorator we’re in a fully `Auto`

mesh context and the
two shardings disagree: the type-specified sharding is `P(None)`

whereas the
concrete array sharding is `P("X")`

(though it could be anything! It’s up to
the compiler).

---

## Source: https://jax.readthedocs.io/en/latest/notebooks/shard_map.html

# Manual parallelism with `shard_map`

[#](#manual-parallelism-with-shard-map)

## Overview[#](#overview)

`shard_map`

is a single-program multiple-data (SPMD) multi-device parallelism API to map a function over shards of data. Mapped function applications, or *instances*, communicate with each other via explicit collective communication operations.

`shard_map`

is complementary to, and composable with, the automatic compiler-based parallelization built into `jit`

. With `jit`

you write code as if for a single device, and [the compiler can automatically partition computation over multiple devices](https://docs.jax.dev/en/latest/notebooks/Distributed_arrays_and_automatic_parallelization.html), generating per-device code and communication collectives behind the scenes. With `shard_map`

you take control, writing your own partitioned code and explicit collectives. Or you can do a bit of both: take manual control across groups of devices while leaving within-group device partitioning up to the compiler. The two approaches can be mixed, matched, and composed as needed.

If you’re familiar with `pmap`

, think of `shard_map`

as an evolution. It’s more expressive, performant, and composable with other JAX APIs. It even works eagerly, for easier debugging! (For more, see [a detailed comparison to pmap.](https://docs.jax.dev/en/latest/jep/14273-shard-map.html#why-don-t-pmap-or-xmap-already-solve-this))

By reading this tutorial, you’ll learn how to use `shard_map`

to get full control over your multi-device code. You’ll see in detail how it composes with `jax.jit`

’s automatic parallelization and `jax.grad`

’s automatic differentiation. We’ll also give some basic examples of neural network parallelization strategies, for a more detailed example see [The Training Cookbook](../the-training-cookbook.html).

We’ll assume this tutorial is being run in an environment with eight devices:

```
import os
os.environ["XLA_FLAGS"] = '--xla_force_host_platform_device_count=8' # Use 8 CPU devices
```

### So, let’s see a `shard_map`

![#](#so-let-s-see-a-shard-map)

Without further ado, here’s a toy example:

```
from functools import partial
import jax
import jax.numpy as jnp
from jax.sharding import Mesh, PartitionSpec as P
Explicit = jax.sharding.AxisType.Explicit
Auto = jax.sharding.AxisType.Auto
```

```
mesh = jax.make_mesh((4, 2), ('x', 'y'))
jax.set_mesh(mesh)
a = jax.device_put(jnp.arange( 8 * 16.).reshape(8, 16), P('x', 'y'))
b = jax.device_put(jnp.arange(16 * 4.).reshape(16, 4), P('y', None))
@jax.shard_map(in_specs=(P('x', 'y'), P('y', None)), out_specs=P('x', None))
def matmul_basic(a_block, b_block):
# a_block: f32[2, 8]
# b_block: f32[8, 4]
c_partialsum = jnp.dot(a_block, b_block)
c_block = jax.lax.psum(c_partialsum, 'y')
# c_block: f32[2, 4]
return c_block
c = matmul_basic(a, b) # c: f32[8, 4]
```

This function computes a matrix multiply in parallel by performing local block matrix multiplies followed by a collective sum operation. We can check the result is correct:

```
from jax.tree_util import tree_map, tree_all
def allclose(a, b):
return tree_all(tree_map(partial(jnp.allclose, atol=1e-2, rtol=1e-2), a, b))
allclose(c, jnp.dot(a, b, out_sharding=P('x', None)))
```

```
True
```

The result is sharded along its rows:

```
jax.debug.visualize_array_sharding(c)
```

CPU 0,1 CPU 2,3 CPU 4,5 CPU 6,7

At a high level, `shard_map`

is kind of like `vmap`

or `pmap`

, in that we’re
mapping a function over pieces of array data, but notice that

`shard_map`

slices up inputs into blocks (and the output is formed by concatenating result blocks), keeping the rank the same, whereas`vmap`

would reduce the rank by mapping away an axis;the

`mesh`

argument lets us control precise device placement of computation and results;we’re mapping over multiple data axes at once, and setting up multiple axis names for collectives (both

`'x'`

and`'y'`

here);since we’re not using

`jax.jit`

yet, everything is eagerly evaluated, and we can even`print`

intermediate values for debugging.

The above code is performing the same computation as this `jax.jit`

automatic parallelization code:

```
from jax.sharding import NamedSharding
a = jax.device_put(a, P('x', 'y'))
b = jax.device_put(b, P('y', None))
@jax.jit
def matmul_reference(a, b):
return jnp.dot(a, b, out_sharding=P('x', None))
c_ref = matmul_reference(a, b)
allclose(c_ref, jnp.dot(a, b, out_sharding=P('x', None)))
```

```
True
```

We can think of `shard_map`

as performing a `device_put`

or
`with_sharding_constraint`

on its inputs according to its `mesh`

and `in_specs`

arguments, so the blocks over which `matmul_basic`

operates are the same as in
`matmul_reference`

:

```
print('a blocks:'); jax.debug.visualize_array_sharding(a)
print('b blocks:'); jax.debug.visualize_array_sharding(b)
print('c blocks:'); jax.debug.visualize_array_sharding(c)
```

```
a blocks:
b blocks:
c blocks:
```

CPU 0 CPU 1 CPU 2 CPU 3 CPU 4 CPU 5 CPU 6 CPU 7

CPU 0,2,4,6 CPU 1,3,5,7

CPU 0,1 CPU 2,3 CPU 4,5 CPU 6,7

### Slow down, start with the basics![#](#slow-down-start-with-the-basics)

#### Rank-reducing vs rank-preserving maps[#](#rank-reducing-vs-rank-preserving-maps)

We can think of `vmap`

and `pmap`

as unstacking each array input along an axis
(e.g. unpacking a 2D matrix into its 1D rows), applying its body function to
each piece, and stacking the results back together, at least when collectives
aren’t involved:

```
def check_vmap(f, xs):
ans = jax.vmap(f, in_axes=(0,), out_axes=0)(xs)
expected = jnp.stack([f(x) for x in xs]) # vmap reference semantics
print(allclose(ans, expected))
check_vmap(lambda x: x @ x, jnp.arange(12).reshape(4, 3))
```

```
True
```

For example, if `xs`

had shape `f32[8,5]`

then each `x`

would have shape
`f32[5]`

, and if each `f(x)`

had shape `f32[3,7]`

then the final stacked result
`vmap(f)(xs)`

would have shape `f32[8,3,7]`

. That is, each application of the
body function `f`

takes as argument inputs with one fewer axis than the
corresponding argument to `vmap(f)`

. We can say these are *rank-reducing maps*
with unstacking/stacking of inputs/outputs.

The number of logical applications of `f`

, or *instances* of `f`

, is determined
by the size of the input axis being mapped over: for example, if we map over an
input axis of size 8, semantically we get 8 logical applications of the
function.

In contrast, `shard_map`

does not have this rank-reducing behavior. Instead, we
can think of it as slicing (or “unconcatenating”) along input axes into blocks,
applying the body function, and concatenating the results back together (again
when collectives aren’t involved):

```
import numpy as np
devices = np.array(jax.devices()[:4])
mesh = Mesh(devices, ('i',)) # mesh.shape['i'] = 4
jax.set_mesh(mesh)
def check_shmap(f, y):
ans = jax.shard_map(f, in_specs=P('i'), out_specs=P('i'))(y)
expected = jnp.concatenate([f(y_blk) for y_blk in jnp.split(y, mesh.shape['i'])])
print(allclose(ans, expected))
check_shmap(lambda x: x.T @ x, jnp.arange(32).reshape(8, 4))
```

```
True
```

Recall that `jnp.split`

slices its input into equally-sized blocks with the same
rank, so that if in the above example `y`

had shape `f32[8,5]`

then each
`y_blk`

would have shape `f32[2,5]`

, and if each `f(y_blk)`

had shape
`f32[3,7]`

then the final concatenated result `shard_map(f, ...)(y)`

would have
shape `f32[12,7]`

. So `shard_map`

maps over *shards*, or blocks, of its inputs.
We can say it’s a *rank-preserving map* with unconcatenating/concatenating of
its inputs/outputs.

The number of logical applications of `f`

is determined by the mesh size, not
by any input axis size: for example, if we have a mesh of total size 4 (i.e.
over 4 devices) then semantically we get 4 logical applications of the
function, corresponding to the 4 devices physically computing them.

#### Controlling how each input is split (unconcatenated) and tiled with `in_specs`

[#](#controlling-how-each-input-is-split-unconcatenated-and-tiled-with-in-specs)

Each of the `in_specs`

identifies some of the corresponding input array’s axes
with mesh axes by name using `PartitionSpec`

s, representing how to split (or
unconcatenate) that input into the blocks to which the body function is
applied. That identification determines the shard sizes; when an input axis is
identified with a mesh axis, the input is split (unconcatenated) along that
logical axis into a number of pieces equal to the corresponding mesh axis size.
(It’s an error if the corresponding mesh axis size does not evenly divide the
input array axis size.) If an input’s pspec does not mention a mesh axis name,
then there’s no splitting over that mesh axis. For example:

```
mesh = jax.make_mesh((4, 2), ('i', 'j'))
jax.set_mesh(mesh)
@jax.shard_map(in_specs=P('i', None), out_specs=P('i', 'j'))
def f1(x_block):
print(x_block.shape) # prints (3, 12)
return x_block
x1 = jax.device_put(jnp.arange(12 * 12).reshape(12, 12), P('i', None))
y = f1(x1)
```

```
(3, 12)
```

Here, because the input pspec did not mention the mesh axis name `'j'`

, no
input array axis is split over that mesh axis; similarly, because the second
axis of the input array is not identified with (and hence split over) any mesh
axis, application of `f1`

gets a full view of the input along that axis.

When a mesh axis is not mentioned in an input pspec, we can always rewrite to a
less efficient program where all mesh axes are mentioned but the caller
performs a `jnp.tile`

, for example:

```
@jax.shard_map(in_specs=P('i', 'j'), out_specs=P('i', 'j'))
def f2(x_block):
print(x_block.shape)
return x_block
x = jnp.arange(12 * 12).reshape(12, 12)
x_ = jnp.tile(x, (1, mesh.shape['j'])) # x_ has shape (12, 24)
x_ = jax.device_put(x, P('i', 'j'))
y = f2(x_) # prints (3,12), and f1(x) == f2(x_)
```

```
(3, 6)
```

In other words, because each input pspec can mention each mesh axis name zero
or one times, rather than having to mention each name exactly once, we can say
that in addition to the `jnp.split`

built into its input, `shard_map`

also has
a `jnp.tile`

built into its input, at least logically (though the tiling may
not need to be carried out physically, depending on the arguments’ physical
sharding layout). The tiling to use is not unique; we could also have tiled
along the first axis, and used the pspec `P(('j', 'i'), None)`

.

Physical data movement is possible on inputs, as each device needs to have a copy of the appropriate data.

#### Controlling how each output assembled by concatenation, block transposition, and untiling using `out_specs`

[#](#controlling-how-each-output-assembled-by-concatenation-block-transposition-and-untiling-using-out-specs)

Analogously to the input side, each of the `out_specs`

identifies some of the
corresponding output array’s axes with mesh axes by name, representing how the
output blocks (one for each application of the body function, or equivalently
one for each physical device) should be assembled back together to form the
final output value. For example, in both the `f1`

and `f2`

examples above the
`out_specs`

indicate we should form the final output by concatenating together
the block results along both axes, resulting in both cases an array `y`

of
shape `(12, 24)`

. (It’s an error if an output shape of the body function, i.e.
an output block shape, has a rank too small for the concatenation described by
the corresponding output pspec.)

When a mesh axis name is not mentioned in an output pspec, it represents an un-tiling: when the user writes an output pspec which does not mention one of the mesh axis names, they promise that the output blocks are equal along that mesh axis, and so only one block along that axis is used in the output (rather than concatenating all the blocks together along that mesh axis). For example, using the same mesh as above:

```
auto_mesh = jax.make_mesh((4, 2), ('i', 'j'), (Auto, Auto))
with jax.set_mesh(auto_mesh):
x = jnp.array([[3.]])
z = jax.shard_map(lambda: x, in_specs=(), out_specs=P('i', 'j'))()
print(z) # prints the same as jnp.tile(x, (4, 2))
z = jax.shard_map(lambda: x, in_specs=(), out_specs=P('i', None))()
print(z) # prints the same as jnp.tile(x, (4, 1)), or just jnp.tile(x, (4,))
z = jax.shard_map(lambda: x, in_specs=(), out_specs=P(None, None))()
print(z) # prints the same as jnp.tile(x, (1, 1)), or just x
```

```
[[3. 3.]
[3. 3.]
[3. 3.]
[3. 3.]]
[[3.]
[3.]
[3.]
[3.]]
[[3.]]
```

The body function closing over an array value is equivalent to passing it as an augment with a corresponding input pspec of P(None, None). As another example, following more closely to the other examples above:

```
@jax.shard_map(in_specs=P('i', 'j'), out_specs=P('i', None))
def f3(x_block):
return jax.lax.psum(x_block, 'j')
x = jax.device_put(jnp.arange(12 * 12).reshape(12, 12), P('i', 'j'))
y3 = f3(x)
print(y3.shape)
```

```
(12, 6)
```

The result has a second axis size of 6, half the size of the input’s second
axis. In this case, the un-tile expressed by not mentioning the mesh axis name
`'j'`

in the output pspec was safe because of the collective `psum`

, which
ensures each output block is equal along the corresponding mesh axis. Here are
two more examples where we vary which mesh axes are mentioned in the output
pspec:

```
@jax.shard_map(in_specs=P('i', 'j'), out_specs=P(None, 'j'))
def f4(x_block):
return jax.lax.psum(x_block, 'i')
x = jax.device_put(jnp.arange(12 * 12).reshape(12, 12), P('i', 'j'))
y4 = f4(x)
print(y4.shape) # (3,12)
@jax.shard_map(in_specs=P('i', 'j'), out_specs=P(None, None))
def f5(x_block):
return jax.lax.psum(x_block, ('i', 'j'))
y5 = f5(x)
print(y5.shape) # (3,6)
```

```
(3, 12)
(3, 6)
```

On the physical side, not mentioning a mesh axis name in an output pspec
assembles an `Array`

from the output device buffers with replicated layout
along that mesh axis.

There is no runtime check that the output blocks are actually equal along a mesh axis to be un-tiled along, or equivalently that the corresponding physical buffers have equal values and thus can be interpreted as a replicated layout for a single logical array. But we can provide a static check mechanism which raises an error on all potentially-incorrect programs.

Because the `out_specs`

can mention mesh axis names zero or one times, and
because they can be mentioned in any order, we can say that in addition to the
`jnp.concatenate`

built into its output, `shard_map`

also has both an *untile*
and a *block transpose* built into its output.

Physical data movement is not possible on outputs, no matter the output pspec.
Instead, `out_specs`

just encodes how to assemble the block outputs into
`Array`

s, or physically how to interpret the buffers across devices as the
physical layout of a single logical `Array`

.

#### Tracking how values vary over manual mesh axes, and `check_vma=True`

[#](#tracking-how-values-vary-over-manual-mesh-axes-and-check-vma-true)

Under a `shard_map`

, values can vary across function instances, or they can be
the same. For example, when we use `in_specs`

to split an argument over a mesh
axis, each function instance along that mesh axis gets a different value:

```
mesh = jax.make_mesh((2,), ('i',))
jax.set_mesh(mesh)
@jax.shard_map(in_specs=P('i'), out_specs=P('i'))
def f(x):
print(x)
return 2 * x
x = jax.device_put(jnp.arange(6.), P('i'))
f(x)
```

```
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[0. 1. 2.]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[3. 4. 5.]
```

```
Array([ 0., 2., 4., 6., 8., 10.], dtype=float32)
```

If instead `in_specs`

does not split the argument over a mesh axis, the value
is the same for each function instance along that axis:

```
@jax.shard_map(in_specs=P(), out_specs=P())
def f(x):
print(x)
return 2 * x
x = jnp.arange(6.)
f(x)
```

```
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[0. 1. 2. 3. 4. 5.]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[0. 1. 2. 3. 4. 5.]
```

```
Array([ 0., 2., 4., 6., 8., 10.], dtype=float32)
```

A collective’s output may have a different variance than its input. For
example, applying a `psum`

produces the same output on each function instance
along an axis:

```
@jax.shard_map(in_specs=P('i'), out_specs=P())
def f(x):
y = jax.lax.psum(x, 'i')
print(y)
return y
x = jax.device_put(jnp.arange(6.), P('i'))
f(x)
```

```
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[3. 5. 7.]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[3. 5. 7.]
```

```
Array([3., 5., 7.], dtype=float32)
```

In general, each intermediate value in a `shard_map`

can be either unvarying or
possibly-varying over each manual mesh axis. That information can be tracked in
the JAX type system, enabled by the `check_vma=True`

argument to `shard_map`

:

```
@jax.shard_map(in_specs=P('i'), out_specs=P())
def f(x):
print(jax.typeof(x)) # f32[3]{i}
y = jax.lax.psum(x, 'i')
print(jax.typeof(y)) # f32[3]
return y
x = jax.device_put(jnp.arange(6.), P('i'))
f(x)
```

```
float32[3]{V:i}
float32[3]
```

```
Array([3., 5., 7.], dtype=float32)
```

Here, the type `f32[3]{i}`

means that the value of `x`

is varying over mesh
axis `'i'`

. The type of `y`

printing as `f32[3]`

indicates it is unvarying over
all mesh axes; that is, empty sets are not printed. We call this part of the
type the *varying manual axes* (VMA), and it can be accessed via
`jax.typeof(x).vma`

.

In general, the VMA type of a value can include any subset of the manual mesh
axes over which the `shard_map`

is acting:

```
mesh = jax.make_mesh((4, 2), ('i', 'j'))
jax.set_mesh(mesh)
@jax.shard_map(in_specs=P('i', 'j'), out_specs=P('i'))
def f(x):
print(jax.typeof(x)) # f32[2,2]{i,j}
y = jax.lax.psum(x, 'j')
assert jax.typeof(y).vma == {'i'}
print(jax.typeof(y)) # f32[2,2]{i}
return y
x = jax.device_put(jnp.arange(8 * 4.).reshape(8, 4), P('i', 'j'))
f(x)
```

```
float32[2,2]{V:(i,j)}
float32[2,2]{V:i}
```

```
Array([[ 2., 4.],
[10., 12.],
[18., 20.],
[26., 28.],
[34., 36.],
[42., 44.],
[50., 52.],
[58., 60.]], dtype=float32)
```

Tracking varying manual axes can be useful:

Your code can include prints, assertions, or conditionals about whether values are varying over expected mesh axes;

It enables efficient reverse-mode autodiff that doesn’t require defensive

`psum`

s (see[JEP](https://docs.jax.dev/en/latest/jep/17111-shmap-transpose.html));The correctness of

`out_specs`

can be checked, ruling out the potential bug example below.

For example, this `out_specs`

bug is caught with `check_vma=True`

, but uncaught
without it:

```
mesh = jax.make_mesh((2,), ('i',))
jax.set_mesh(mesh)
x = jax.device_put(jnp.arange(6.), P('i'))
try:
y = jax.shard_map(lambda x: x, in_specs=P('i'), out_specs=P())(x)
except Exception as e:
print(e)
```

```
shard_map applied to the function '_rem_singleton' was given out_specs which require replication which can't be statically inferred given the mesh:
The mesh given has shape (2,) with corresponding axis names ('i',).
out_specs is P() which implies that the corresponding output value is replicated across mesh axis 'i', but could not infer replication over any axes
Check if these output values are meant to be replicated over those mesh axes. If not, consider revising the corresponding out_specs entries. If so, consider disabling the check by passing the check_vma=False argument to `jax.shard_map`.
```

Here the `out_specs`

incorrectly promise that each function instance along mesh
axis `'i'`

produces the same value and thus we can choose just one of them.
With `check_vma=True`

(the default) it raises an exception, while with
`check_vma=False`

there is no exception and instead we get silent undefined
behavior.

Sometimes we want to treat a value that is unvarying over a mesh axis as
varying over that mesh axis. That’s what `jax.lax.pcast`

does:

```
@jax.shard_map(in_specs=P(), out_specs=None)
def f(x):
print(jax.typeof(x)) # f32[6]
y = jax.lax.pcast(x, 'i', to='varying')
print(jax.typeof(y)) # f32[6]{i}
x = jnp.arange(6.)
f(x)
```

```
float32[6]
float32[6]{V:i}
```

Think of `jax.lax.pcast(..., to='varying')`

as applying a
type cast: it’s a no-op at runtime,
though under reverse-mode autodiff it transposes to a `jax.lax.psum`

(see
[JEP](https://docs.jax.dev/en/latest/jep/17111-shmap-transpose.html)). That
makes sense because they do opposite things to the VMA: where `y: f32[3]{i} = jax.lax.pcast(x: f32[3], 'i', to='varying')`

,
we correspondingly have `x_grad: f32[3] = jax.lax.psum(y_grad: f32[3]{i}, 'i')`

.

JAX implicitly inserts `jax.lax.pcast(..., to='varying')`

calls in many cases,
especially for binary operations:

```
@jax.shard_map(in_specs=(P('i'), P()), out_specs=P('i'))
def f(x, y):
return x * y
x = jax.device_put(jnp.arange(6.), P('i'))
y = jnp.arange(3.)
print(jax.make_jaxpr(f)(x, y))
```

```
{ lambda ; a:f32[6@i] b:f32[3]. let
c:f32[6@i] = shard_map[
check_vma=True
in_specs=(P('i',), P())
jaxpr={ lambda ; d:f32[3]{V:i} e:f32[3]. let
f:f32[3]{V:i} = pvary[axes=('i',)] e
g:f32[3]{V:i} = mul d f
in (g,) }
manual_axes=frozenset({'i'})
mesh=AbstractMesh('i': 2, axis_types=(Explicit,), device_kind=cpu, num_cores=None)
out_specs=(P('i',),)
] a b
in (c,) }
```

In a jaxpr, the multiplication operation requires the VMA types of its
arguments to match, but for convenience the `jax.numpy`

and `jax.lax`

APIs
automatically apply `jax.lax.pcast(..., to='varying')`

to make argument VMA
types agree. In a jaxpr, these `jax.lax.pcast`

calls show up as `pvary`

since
`jax.lax.pcast(..., to='varying')`

dispatches to `lax.pvary`

.

In some cases, like with `jax.lax.scan`

, you might need to apply
`jax.lax.pcast`

yourself to ensure VMA types match as required. For example,
this code raises an error:

```
mesh = jax.make_mesh((2,), ('i',))
jax.set_mesh(mesh)
@jax.shard_map(in_specs=(P('i'), P()), out_specs=P('i'))
def f(x, y):
def body(carry, _):
c1, c2 = carry
return (c2, c1), () # swap the carry
(x_, y_), _ = jax.lax.scan(body, (x, y), (), length=2)
return x_, y_
x = jnp.arange(6.)
y = jnp.arange(3.)
try:
f(x, y)
except Exception as e:
print(e)
```

```
in_specs passed to shard_map: P('i',) does not match the specs of the input: P(None,) for arg: float32[6]. `in_specs` is an optional argument so you can omit specifying it and shard_map will infer the in_specs from the arguments. If you want to reshard your inputs, you can use `jax.reshard` on the arguments and then pass those args to shard_map.
```

To make the types match, we need to apply `jax.lax.pcast`

to some arguments to
the `scan`

:

```
mesh = jax.make_mesh((2,), ('i',))
jax.set_mesh(mesh)
@jax.shard_map(in_specs=(P('i'), P()), out_specs=P('i'))
def f(x, y):
def body(carry, _):
c1, c2 = carry
return (c2, c1), () # swap the carry
y = jax.lax.pcast(y, 'i', to='varying') # apply pcast to fix the error
(x_, y_), _ = jax.lax.scan(body, (x, y), (), length=2)
return x_, y_
x = jax.device_put(jnp.arange(6.), P('i'))
y = jnp.arange(3.)
f(x, y)
```

```
(Array([0., 1., 2., 3., 4., 5.], dtype=float32),
Array([0., 1., 2., 0., 1., 2.], dtype=float32))
```

Here’s a summary of collective primitives and how they affect varying manual axis types:

Name |
Device variance type |
Example |
Lowers to HLO |
Transpose |
|---|---|---|---|---|
|
|
|
|
|
|
|
|
no-op (no communication) |
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
n/a |
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
|
|
|
|
|
|
|
|
|

A few notes on the table:

The function

`jax.lax.psum`

is a convenience wrapper around`psum_invariant`

.It’s surprising that

`all_gather`

is`Varying -> Varying`

, but that’s because it’s really the transpose of`psum_scatter`

which is`Varying -> Varying`

.Neither

`pscatter`

nor`all_gather_invariant`

have user APIs at the time of writing, but they’re described here for completeness.

## API Specification[#](#api-specification)

```
from jax.sharding import Mesh
Specs = PyTree[PartitionSpec]
def shard_map(
f: Callable, /, *, out_specs: Specs, mesh: Mesh | None = None,
in_specs: Specs | None = None,
axis_names: collections.abc.Set[AxisName] = set(),
check_vma: bool = True,
) -> Callable:
...
```

where:

communication collectives like

`psum`

in the body of`f`

can mention the axis names of`mesh`

;`mesh`

encodes devices arranged in an array and with associated axis names, just like it does for`sharding.NamedSharding`

; If None, mesh will be inferred from the context which can be set via the`jax.set_mesh`

context manager.`in_specs`

are`PartitionSpec`

s which can zero or one times mention axis names from`mesh`

to express slicing/unconcatenation of inputs, respectively, with unmentioned names corresponding to replication and untiling (assert-replicated-so-give-me-one-copy). If None, all mesh axes must be of type`Explicit`

, in which case the in_specs are inferred from the argument types;`out_specs`

are`PartitionSpec`

s which can zero or one times mention axis names from`mesh`

to express concatenation of outputs, with unmentioned names corresponding to replication and untiling (assert-replicated-so-give-me-one-copy), respectively;`axis_names`

is an optional set of axis names corresponding to the subset of names of`mesh`

to treat manual in the body. If empty,`f`

is manual over all axes of the mesh.`check_vma`

is an optional boolean indicating whether to check statically for any replication errors in`out_specs`

, and also whether to enable a related automatic differentiation optimization (see[JEP](https://docs.jax.dev/en/latest/jep/17111-shmap-transpose.html)).

The shapes of the arguments passed to `f`

have the same ranks as the arguments
passed to `shard_map`

-of-`f`

, and the shape of an argument to `f`

is computed
from the shape `shape`

of the corresponding argument to `shard_map`

-of-`f`

and
the corresponding `PartitionSpec`

`spec`

as roughly
`tuple(sz // (1 if n is None else mesh.shape[n]) for sz, n in zip(shape, spec))`

.

## Collectives tutorial[#](#collectives-tutorial)

A `shard_map`

need not be a pure map: function applications can communicate
with each other via *collectives*, using axis names defined in the `mesh`

argument.

Recall that `shard_map`

maps a function over shards, or blocks, of input data,
so that this:

```
mesh = Mesh(jax.devices(), ('i',))
x = jnp.arange(16.)
f_shmapped = jax.shard_map(f, in_specs=P('i'), out_specs=P('i'))
y = f_shmapped(x)
```

Computes the same values, evaluating applications of `f`

to the same argument
values, as this reference function:

```
def f_shmapped_ref(x):
x_blocks = jnp.array_split(x, mesh.shape['i'])
y_blocks = [f(x_blk) for x_blk in x_blocks]
return jnp.concatenate(y_blocks)
```

We call these applications of `f`

to different argument shards *function
instances*. Each function instance is executed on a different device (or subset
of devices).

These reference semantics work when `f`

has no communication collectives in
it. But what if we want the function instances to communicate, corresponding
to having cross-device communication? That is, what are the reference
semantics when `f`

contains a collective? Say `f`

has just one collective, and
is of the form

```
def f(x_blk):
z_blk = f_part1(x_blk)
u_blk = collective(z_blk, axis_name)
v_blk = f_part2(x_blk, z_blk, u_blk)
return v_blk
```

where we’re assuming there’s only one mesh axis we’re mapping over, and
`axis_name`

is the corresponding name for it. Then the reference semantics
would look more like:

```
def f_shmapped_ref(x):
x_blocks = jnp.array_split(x, mesh.shape[0])
z_blocks = [f_part1(x_blk) for x_blk in x_blocks]
u_blocks = [collective_ref(i, z_blocks) for i in range(len(z_blocks))]
v_blocks = [f_part2(x_blk, z_blk, u_blk) for x_blk, z_blk, u_blk
in zip(x_blocks, z_blocks, u_blocks)]
return jnp.concatenate(v_blocks)
```

Notice that `collective_ref`

might depend on all the `z_blocks`

. That is,
while `f_part1`

and `f_part2`

are mapped over blocks independently, a
collective introduces some amount of cross-block dependence. Physically, that
means communication across devices. Exactly what communication happens, and
what values are computed, depend on the collective.

`psum`

[#](#psum)

The simplest collective may be `jax.lax.psum`

, which computes an
all-reduce-sum along a device mesh axis (or multiple axes).
Here’s a toy example:

```
import jax
import jax.numpy as jnp
from jax import lax
from jax.sharding import Mesh, PartitionSpec as P
```

```
mesh1d = Mesh(jax.devices()[:4], ('i',))
jax.set_mesh(mesh1d)
@jax.shard_map(mesh=mesh1d, in_specs=P('i'), out_specs=P(None))
def f1(x_block):
print('BEFORE:\n', x_block)
y_block = jax.lax.psum(x_block, 'i')
print('AFTER:\n', y_block)
return y_block
```

```
x = jnp.array([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 1, 2])
y = f1(x)
print('FINAL RESULT:\n', y)
```

```
BEFORE:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[3 1 4 1]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[5 9 2 6]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[5 3 5 8]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[9 7 1 2]
AFTER:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[22 20 12 17]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[22 20 12 17]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[22 20 12 17]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[22 20 12 17]
FINAL RESULT:
[22 20 12 17]
```

The prints show that each function application starts with its own chunk of
the argument value `x_block`

. After the `psum`

, each function application has
the same value of `y_block`

, computed by summing the applications’ `x_block`

values together.

In the case where there’s a single axis name in the computation, we could say
that the `collective_ref`

reference implementation for `psum`

is

```
def psum_ref(_, x_blocks):
tot = sum(x_blocks)
return [tot] * len(x_blocks)
```

Notice also that because `f1`

returns `y_block`

, the result of a `psum`

over
`'i'`

, we can use `out_specs=P()`

so the caller gets a single logical copy of
the result value, rather than a tiled result.

When there is more than one mesh axis, we can perform a `psum`

over
each one separately, or over multiple axes at once:

```
mesh2d = Mesh(np.array(jax.devices()[:4]).reshape(2, 2), ('i', 'j'))
jax.set_mesh(mesh2d)
@jax.shard_map(mesh=mesh2d, in_specs=P('i', 'j'), out_specs=P(None, 'j'))
def f2(x_block):
print('BEFORE:\n', x_block)
y_block = jax.lax.psum(x_block, 'i')
print('AFTER:\n', y_block)
return y_block
y = f2(jnp.arange(16).reshape(4, 4))
print('FINAL RESULT:\n', y)
```

```
BEFORE:
On TFRT_CPU_0 at mesh coordinates (i, j,) = (0, 0):
[[0 1]
[4 5]]
On TFRT_CPU_1 at mesh coordinates (i, j,) = (0, 1):
[[2 3]
[6 7]]
On TFRT_CPU_2 at mesh coordinates (i, j,) = (1, 0):
[[ 8 9]
[12 13]]
On TFRT_CPU_3 at mesh coordinates (i, j,) = (1, 1):
[[10 11]
[14 15]]
AFTER:
On TFRT_CPU_0 at mesh coordinates (i, j,) = (0, 0):
[[ 8 10]
[16 18]]
On TFRT_CPU_1 at mesh coordinates (i, j,) = (0, 1):
[[12 14]
[20 22]]
On TFRT_CPU_2 at mesh coordinates (i, j,) = (1, 0):
[[ 8 10]
[16 18]]
On TFRT_CPU_3 at mesh coordinates (i, j,) = (1, 1):
[[12 14]
[20 22]]
FINAL RESULT:
[[ 8 10 12 14]
[16 18 20 22]]
```

By applying a `psum`

over mesh axis `'i'`

, we get values of `y_block`

which
are equal along axis ‘`i'`

, but not axis `'j'`

. (So we can use
`out_specs=P(None, 'j')`

to get a single logical result along that axis.)

If we apply the `psum`

over both axes, the `y_block`

value is equal along both
axes:

```
@jax.shard_map(mesh=mesh2d, in_specs=P('i', 'j'), out_specs=P(None, None))
def f3(x_block):
print('BEFORE:\n', x_block)
y_block = jax.lax.psum(x_block, ('i', 'j'))
print('AFTER:\n', y_block)
return y_block
y = f3(jnp.arange(16).reshape(4, 4))
print('FINAL RESULT:\n', y)
```

```
BEFORE:
On TFRT_CPU_0 at mesh coordinates (i, j,) = (0, 0):
[[0 1]
[4 5]]
On TFRT_CPU_1 at mesh coordinates (i, j,) = (0, 1):
[[2 3]
[6 7]]
On TFRT_CPU_2 at mesh coordinates (i, j,) = (1, 0):
[[ 8 9]
[12 13]]
On TFRT_CPU_3 at mesh coordinates (i, j,) = (1, 1):
[[10 11]
[14 15]]
AFTER:
On TFRT_CPU_0 at mesh coordinates (i, j,) = (0, 0):
[[20 24]
[36 40]]
On TFRT_CPU_1 at mesh coordinates (i, j,) = (0, 1):
[[20 24]
[36 40]]
On TFRT_CPU_2 at mesh coordinates (i, j,) = (1, 0):
[[20 24]
[36 40]]
On TFRT_CPU_3 at mesh coordinates (i, j,) = (1, 1):
[[20 24]
[36 40]]
FINAL RESULT:
[[20 24]
[36 40]]
```

In machine learning, we often use `psum`

to compute total losses or, when we
have a `grad`

inside the `shard_map`

ped function body, total gradients.

In the sequel, we’ll see how `psum`

can be implemented in terms of other
primitives, which gives some intuition about its communication cost.

`all_gather`

[#](#all-gather)

Another fundamental operation is gathering array shards along an axis, so that each function application has a full copy of the data along that axis:

```
jax.set_mesh(mesh1d)
@jax.shard_map(mesh=mesh1d, in_specs=P('i'), out_specs=P('i'))
def f4(x_block):
print('BEFORE:\n', x_block)
y_block = jax.lax.all_gather(x_block, 'i', tiled=True)
print('AFTER:\n', y_block)
return y_block
x = jnp.array([3, 9, 5, 2])
y = f4(x)
print('FINAL RESULT:\n', y)
```

```
BEFORE:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[3]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[9]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[5]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[2]
AFTER:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[3 9 5 2]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[3 9 5 2]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[3 9 5 2]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[3 9 5 2]
FINAL RESULT:
[3 9 5 2 3 9 5 2 3 9 5 2 3 9 5 2]
```

The prints show that each function application again starts with its own chunk
of the argument value `x_block`

. After the `all_gather`

, they have a common
value, computed by concatenating the values of `x_block`

.

(Notice that we actually can’t set `out_specs=P()`

here. For technical
reasons related to automatic differentiation, we consider the output of
`all_gather`

not to be guaranteed invariant across devices. If we wanted it to
be guaranteed invariant, we could use `jax.lax.all_gather_invariant`

, or in
this case we could just avoid doing the `all_gather`

in the function body and
instead just use `out_specs=P('i')`

to perform the concatenation.)

When `tiled=False`

(the default), results are stacked along a new axis instead
of concatenated:

```
@jax.shard_map(mesh=mesh1d, in_specs=P('i'), out_specs=P('i'))
def f5(x_block):
print('BEFORE:\n', x_block)
y_block = jax.lax.all_gather(x_block, 'i', tiled=False)
print('AFTER:\n', y_block)
return y_block
y = f5(x)
print('FINAL RESULT:\n', y)
```

```
BEFORE:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[3]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[9]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[5]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[2]
AFTER:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[[3]
[9]
[5]
[2]]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[[3]
[9]
[5]
[2]]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[[3]
[9]
[5]
[2]]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[[3]
[9]
[5]
[2]]
FINAL RESULT:
[[3]
[9]
[5]
[2]
[3]
[9]
[5]
[2]
[3]
[9]
[5]
[2]
[3]
[9]
[5]
[2]]
```

We could write the `collective_ref`

reference semantics function for
`all_gather`

as

```
def all_gather_ref(_, x_blocks, *, tiled=False):
combine = jnp.concatenate if tiled else jnp.stack
return [combine(x_blocks)] * len(x_blocks)
```

In deep learning, we might use `all_gather`

s on parameters in fully sharded
data parallelism (FSDP).

`psum_scatter`

[#](#psum-scatter)

The `jax.lax.psum_scatter`

collective is a bit less intuitive. It’s like
`psum`

except each function instance gets only one shard of the result:

```
@jax.shard_map(in_specs=P('i'), out_specs=P('i'))
def f6(x_block):
print('BEFORE:\n', x_block)
y_block = jax.lax.psum_scatter(x_block, 'i', tiled=True)
print('AFTER:\n', y_block)
return y_block
x = jnp.array([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 1, 2])
y = f6(x)
print('FINAL RESULT:\n', y)
```

```
BEFORE:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[3 1 4 1]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[5 9 2 6]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[5 3 5 8]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[9 7 1 2]
AFTER:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[22]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[20]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[12]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[17]
FINAL RESULT:
[22 20 12 17]
```

As shown by the prints, each resulting `y_block`

has a smaller size than the
argument `x_block`

, unlike with `psum`

. Moreover, compared to `psum`

, here
each `y_block`

only represents a slice of the sum of the `x_block`

s across
function instances. (Even though each function instance gets only one shard of
the sum, the final output `y`

is the same as in the `psum`

example because
here we use `out_specs=P('i')`

to concatenate each function instance’s
output.)

In terms of what values are computed, a `collective_ref`

reference
implementation might look like:

```
def psum_scatter_ref(i, x_blocks, *, tiled=False):
axis_size = len(x_blocks)
tot = sum(x_blocks)
if tiled:
tot = tot.reshape(axis_size, -1, *tot.shape[1:]) # split leading axis
return [tot[i] for i in range(tot.shape[0])]
```

It’s not captured in the semantics reference implementation, but
`psum_scatter`

is useful because these results can be computed more
efficiently, with less communication, than a full `psum`

. In fact, one way to
think of `psum_scatter`

is as “the first half of a `psum`

, before an
`all_gather`

”. That is, one way to implement `psum`

is:

```
def psum(x, axis_name):
summed_chunk = jax.lax.psum_scatter(x, axis_name)
return jax.lax.all_gather(summed_chunk, axis_name)
```

Indeed, this implementation is often used on both TPU and GPU!

The reason `psum_scatter`

can require about half the communication as a full
`psum`

is illustrated in the `ppermute`

section.

Another intuition is that we can use `psum_scatter`

to implement a distributed
matrix multiplication with inputs and outputs sharded over the same axis. In
machine learning, `psum_scatter`

can be used in tensor-parallel matrix
multiplies or fully-sharded data parallel gradient accumulation, as shown in
the examples to follow.

`ppermute`

[#](#ppermute)

The `jax.lax.ppermute`

collective provides the most direct way for
function instances to send data to one another. Given a mesh axis and a
list of `(source_index, destination_index)`

pairs representing indices along
that mesh axis, `ppermute`

sends its argument value from each source function
instance to each destination:

```
@jax.shard_map(in_specs=P('i'), out_specs=P('i'))
def f7(x_block):
sz = jax.lax.axis_size('i')
print('BEFORE:\n', x_block)
y_block = jax.lax.ppermute(x_block, 'i', [(i, (i + 1) % sz) for i in range(sz)])
print('AFTER:\n', y_block)
return y_block
y = f7(jnp.arange(8))
print('FINAL RESULT:\n', y)
```

```
BEFORE:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[0 1]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[2 3]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[4 5]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[6 7]
AFTER:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[6 7]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[0 1]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[2 3]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[4 5]
FINAL RESULT:
[6 7 0 1 2 3 4 5]
```

In this case, with just two function instances, each instance’s value of
`y_block`

is the other’s value of `x_block`

.

Source indices and destination indices can’t be repeated. If an index does not appear as a destination, then the value of the corresponding function instance’s result is an array of zeros.

A `collective_ref`

reference implementation could look like

```
def ppermute_ref(i, x_blocks, perm):
results = [jnp.zeros_like(x_blocks[0])] * len(x_blocks)
for src, dst in perm:
results[dst] = x_blocks[src]
return results
```

Other collectives can be implemented efficiently, in terms of total
communication, using `ppermute`

s where each function passes data only to its
neighbors. For example, we could implement `psum_scatter`

using a sequence of
`ppermute`

s and local additions this way:

Or, with a numerical example:

Intuitively, on each iteration each function instance sends ‘up’ the value it received on the previous iteration, and reduces (adds) the value it receives this iteration. In code, it might look like this:

```
def psum_scatter(x, axis_name, *, tiled=False):
size = jax.lax.axis_size(axis_name)
idx = jax.lax.axis_index(axis_name) # function instance index along axis_name
if tiled:
x = x.reshape(size, -1, *x.shape[1:]) # split leading axis
shift = partial(jax.lax.ppermute, axis_name=axis_name,
perm=[(i, (i - 1) % size) for i in range(size)])
for i in range(1, size):
update = shift(x[(idx + i) % size])
x = x.at[(idx + i + 1) % size].add(update)
return x[idx]
```

```
@jax.shard_map(in_specs=P('i'), out_specs=P('i'))
def f8(x_block):
print('BEFORE:\n', x_block)
y_block = psum_scatter(x_block, 'i', tiled=True)
print('AFTER:\n', y_block)
return y_block
x = jnp.array([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 1, 2])
y = f8(x)
print('FINAL RESULT:\n', y)
```

```
BEFORE:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[3 1 4 1]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[5 9 2 6]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[5 3 5 8]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[9 7 1 2]
AFTER:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[22]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[20]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[12]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[17]
FINAL RESULT:
[22 20 12 17]
```

On TPU, there are higher-dimensional variants of this algorithm to exploit multiple bidirectional physical mesh axes.

Notice that `psum_scatter`

is the transpose of `all_gather`

. Indeed, a way to
implement `all_gather`

in terms of `ppermute`

looks like the reverse of the
above process:

In deep learning, we might use `ppermute`

when implementing SPMD pipeline
parallelism, where we divide our network along its depth into stages and
evaluate the applications of stages in parallel. Or we might use `ppermute`

in
parallelizing the evaluation of convolutional layers, where we shard over
spatial axes and thus devices must communicate “halos” to each other. Or it
may be used under-the-hood in tensor-parallel matrix multiplies.

`all_to_all`

[#](#all-to-all)

A final collective is `all_to_all`

, which is essentially a block matrix
transpose operating along one positional axis and one cross-device axis:

```
@jax.shard_map(mesh=mesh1d, in_specs=P('i'), out_specs=P('i'))
def f9(x_block):
print('BEFORE:\n', x_block)
y_block = jax.lax.all_to_all(x_block, 'i', split_axis=0, concat_axis=0,
tiled=True)
print('AFTER:\n', y_block)
return y_block
x = jnp.array([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 1, 2])
y = f9(x)
print('FINAL RESULT:\n', y)
```

```
BEFORE:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[3 1 4 1]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[5 9 2 6]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[5 3 5 8]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[9 7 1 2]
AFTER:
On TFRT_CPU_0 at mesh coordinates (i,) = (0,):
[3 5 5 9]
On TFRT_CPU_1 at mesh coordinates (i,) = (1,):
[1 9 3 7]
On TFRT_CPU_2 at mesh coordinates (i,) = (2,):
[4 2 5 1]
On TFRT_CPU_3 at mesh coordinates (i,) = (3,):
[1 6 8 2]
FINAL RESULT:
[3 5 5 9 1 9 3 7 4 2 5 1 1 6 8 2]
```

The `split_axis`

argument indicates which positional axis should be sharded
and partitioned across the mesh axis. The `concat_axis`

argument indicates the
axis along which the communicated results should be concatenated or stacked.

When `tiled=False`

(the default), the `split_axis`

axis size must equal the
size of the mesh axis named `axis_name`

, and a new axis of that size is
created at position `concat_axis`

for the stacked results. When `tiled=True`

,
the `split_axis`

axis size need only be evenly divisible by the size of the
mesh axis, and results are concatenated along the existing axis `concat_axis`

.

The `collective_ref`

reference semantics when `split_axis=0`

and
`concat_axis=0`

might look like:

```
def all_to_all_ref(_, x_blocks, *, tiled=False):
axis_size = len(x_blocks)
if tiled:
splits = [jnp.array_split(x, axis_size) for x in x_blocks]
return [jnp.concatenate(s) for s in zip(*splits)]
else:
splits = [list(x) for x in x_blocks]
return [jnp.stack(s) for s in zip(*splits)]
```

In deep learning, we might use `all_to_all`

in mixture-of-expert routing,
where we first sort our local batch of examples according to which expert they
should go to, then apply an `all_to_all`

to redistribute examples to experts.

## Toy examples[#](#toy-examples)

How might we use `shard_map`

and collective communication in practice? These
examples, while simple, give some idea.

### Matrix multiplies[#](#matrix-multiplies)

Parallelizing matrix multiplication is central in scaling up deep learning
models, both for training and for inference. When `jax.jit`

automatically
parallelizes matrix multiplication, it can use one of several different
strategies, depending on matrix sizes, hardware details, and other factors. How
might we write some of those parallelized routines more explicitly using
`shard_map`

? And how can we optimize them to get better compute/communication
overlap and thus improve FLOP utilization?

```
import jax
import jax.numpy as jnp
from jax.sharding import Mesh, PartitionSpec as P
```

```
mesh = Mesh(jax.devices()[:4], ('i',))
jax.set_mesh(mesh)
def device_put(x, pspec):
return jax.device_put(x, NamedSharding(mesh, pspec))
```

#### Example 1: `all-gather`

on one side[#](#example-1-all-gather-on-one-side)

Consider performing a matrix multiplication where we shard the left-hand side argument (can think: parameters) on its leading (non-contracting) dimension:

```
lhs_spec = P('i', None)
lhs = device_put(jax.random.normal(jax.random.key(0), (8, 8)), lhs_spec)
```

And we shard the right-hand side argument (can think: activations) on its contracting dimension, with a similar sharding for the output:

```
rhs_spec = P('i', None)
rhs = device_put(jax.random.normal(jax.random.key(1), (8, 4)), rhs_spec)
```

To perform this matrix multiplication, we can first all-gather the right-hand side and then perform local matrix multiplies against the sharded left-hand side:

```
@jax.jit
@jax.shard_map(in_specs=(lhs_spec, rhs_spec),
out_specs=rhs_spec)
def matmul_allgather(lhs_block, rhs_block):
rhs = jax.lax.all_gather(rhs_block, 'i', tiled=True)
return lhs_block @ rhs
```

```
out = matmul_allgather(lhs, rhs)
print(jnp.allclose(out, lhs @ rhs, atol=1e-3, rtol=1e-3))
```

```
True
```

That’s great, but we’re not getting any compute/communication overlap
here: before we can start the matmul, we need the `all_gather`

to complete.
Here’s a profile using the same code, but on larger example shapes (`(8192, 8192)`

for `lhs`

and `(8192, 1024)`

for `rhs`

):

We can get compute/communication overlap if instead of calling `all_gather`

we
basically inline our above implementation of `all_gather`

in terms of
`ppermute`

, then interleave steps of the gather permutation with local matrix
multiplies:

```
@jax.jit
@jax.shard_map(in_specs=(lhs_spec, rhs_spec),
out_specs=rhs_spec)
def matmul_allgather_overlapped(lhs_block, rhs_block):
size = jax.lax.axis_size('i')
idx = jax.lax.axis_index('i')
shift = partial(jax.lax.ppermute, axis_name='i',
perm=[(i, (i + 1) % size) for i in range(size)])
B = lhs_block.shape[1] // size
lhs_blocks = lambda i: lax.dynamic_slice_in_dim(lhs_block, i * B, B, 1)
out_block = lhs_blocks(idx) @ rhs_block
for i in range(1, size):
rhs_block = shift(rhs_block)
out_block += lhs_blocks((idx - i) % size) @ rhs_block
return out_block
```

```
out = matmul_allgather_overlapped(lhs, rhs)
print(jnp.allclose(out, lhs @ rhs, atol=1e-3, rtol=1e-3))
```

```
True
```

This implementation allows overlap between communication and computation, and also avoids gathering a large intermediate onto each device. But on TPU it uses only half the interconnect bandwidth by permuting in only one direction along the ring. To permute bidirectionally, we just split the blocks in half and send each half in each direction:

```
@jax.jit
@jax.shard_map(in_specs=(lhs_spec, rhs_spec),
out_specs=rhs_spec)
def matmul_allgather_overlapped_bidi(lhs_block, rhs_block):
size = jax.lax.axis_size('i')
idx = jax.lax.axis_index('i')
shift_up = partial(jax.lax.ppermute, axis_name='i',
perm=[(i, (i + 1) % size) for i in range(size)])
shift_dn = partial(jax.lax.ppermute, axis_name='i',
perm=[(i, (i - 1) % size) for i in range(size)])
B = lhs_block.shape[1] // size // 2 # half-size blocks
lhs_blocks = lambda i, hi: lax.dynamic_slice_in_dim(lhs_block, (2*i+hi) * B, B, 1)
rhs_block_lo, rhs_block_hi = jnp.split(rhs_block, 2, axis=0)
out_block = lhs_blocks(idx, 0) @ rhs_block_lo
out_block += lhs_blocks(idx, 1) @ rhs_block_hi
for i in range(1, size):
rhs_block_lo = shift_up(rhs_block_lo)
rhs_block_hi = shift_dn(rhs_block_hi)
out_block += lhs_blocks((idx - i) % size, 0) @ rhs_block_lo
out_block += lhs_blocks((idx + i) % size, 1) @ rhs_block_hi
return out_block
```

```
out = matmul_allgather_overlapped_bidi(lhs, rhs)
print(jnp.allclose(out, lhs @ rhs, atol=1e-3, rtol=1e-3))
```

```
True
```

In practice, to reduce compile times we would probably roll this into a
`jax.lax.fori_loop`

. We might also have additional axes of parallelism
involved.

#### Example 2: `psum_scatter`

the result[#](#example-2-psum-scatter-the-result)

Another sharding we might start with has both `lhs`

and `rhs`

sharded along
their contracting dimensions, with the output sharded like `rhs`

again:

```
lhs_spec = P(None, 'i')
lhs = device_put(lhs, lhs_spec)
rhs_spec = P('i', None)
rhs = device_put(rhs, rhs_spec)
```

Here we can use a `reduce_scatter`

to perform the contraction sum over shards:

```
@jax.shard_map(in_specs=(lhs_spec, rhs_spec),
out_specs=rhs_spec)
def matmul_psumscatter(lhs_block, rhs_block):
out_summand = lhs_block @ rhs_block
return jax.lax.psum_scatter(out_summand, 'i', tiled=True)
out = matmul_psumscatter(lhs, rhs)
print(jnp.allclose(out, lhs @ rhs, atol=1e-3, rtol=1e-3))
```

```
True
```

But the scattering communication must wait for the entire local matrix multiply
to finish before it can start. To get communication/computation overlap, we can
inline an implementation of `psum_scatter`

in terms of `ppermute`

, then
interleave the communication steps with local matrix multiplies:

```
@jax.shard_map(in_specs=(lhs_spec, rhs_spec),
out_specs=rhs_spec)
def matmul_psumscatter_overlapped(lhs_block, rhs_block):
size = jax.lax.axis_size('i')
idx = jax.lax.axis_index('i')
shift = partial(jax.lax.ppermute, axis_name='i',
perm=[(i, (i - 1) % size) for i in range(size)])
lhs_block = lhs_block.reshape(size, -1, lhs_block.shape[1]) # split 1st axis
out_summand = lhs_block[(idx + 1) % size] @ rhs_block
for i in range(1, size):
out_summand = shift(out_summand)
out_summand += lhs_block[(idx + i + 1) % size] @ rhs_block
return out_summand
```

```
out = matmul_psumscatter_overlapped(lhs, rhs)
print(jnp.allclose(out, lhs @ rhs, atol=1e-3, rtol=1e-3))
```

```
True
```

As in the previous example, to fully utilize interconnects on TPU, we’d run a bidirectional version:

```
@jax.shard_map(in_specs=(lhs_spec, rhs_spec),
out_specs=rhs_spec)
def matmul_psumscatter_overlapped_bidi(lhs_block, rhs_block):
size = jax.lax.axis_size('i')
idx = jax.lax.axis_index('i')
shift_up = partial(jax.lax.ppermute, axis_name='i',
perm=[(i, (i + 1) % size) for i in range(size)])
shift_dn = partial(jax.lax.ppermute, axis_name='i',
perm=[(i, (i - 1) % size) for i in range(size)])
B = lhs_block.shape[0] // size // 2 # half-size blocks
lhs_blocks = lambda i, hi: lax.dynamic_slice_in_dim(lhs_block, (2*i+hi) * B, B, 0)
out_summand_lo = lhs_blocks((idx - 1) % size, 0) @ rhs_block
out_summand_hi = lhs_blocks((idx + 1) % size, 1) @ rhs_block
for i in range(1, size):
out_summand_lo = shift_up(out_summand_lo)
out_summand_hi = shift_dn(out_summand_hi)
out_summand_lo += lhs_blocks((idx - i - 1) % size, 0) @ rhs_block
out_summand_hi += lhs_blocks((idx + i + 1) % size, 1) @ rhs_block
return jnp.concatenate([out_summand_lo, out_summand_hi])
```

```
out = matmul_psumscatter_overlapped_bidi(lhs, rhs)
print(jnp.allclose(out, lhs @ rhs, atol=1e-3, rtol=1e-3))
```

```
True
```

### Neural networks[#](#neural-networks)

We can use `shard_map`

to parallelize computation in neural networks, either by
itself or in combination with the automatic partitioning in `jax.jit`

. This
section has a few examples based on this toy neural network and random data:

```
import jax
import jax.numpy as jnp
def predict(params, inputs):
for W, b in params:
outputs = jnp.dot(inputs, W) + b
inputs = jax.nn.relu(outputs)
return outputs
def loss(params, batch):
inputs, targets = batch
predictions = predict(params, inputs)
return jnp.mean(jnp.sum((predictions - targets) ** 2, axis=-1))
```

```
def init_layer(key, n_in, n_out):
k1, k2 = jax.random.split(key)
W = jax.random.normal(k1, (n_in, n_out)) / jnp.sqrt(n_in)
b = jax.random.normal(k2, (n_out,))
return W, b
def init(key, layer_sizes, batch_size):
key, *keys = jax.random.split(key, len(layer_sizes))
params = list(map(init_layer, keys, layer_sizes[:-1], layer_sizes[1:]))
key, *keys = jax.random.split(key, 3)
inputs = jax.random.normal(keys[0], (batch_size, layer_sizes[0]))
targets = jax.random.normal(keys[1], (batch_size, layer_sizes[-1]))
return params, (inputs, targets)
```

```
layer_sizes = [784, 128, 128, 128, 128, 128, 8]
batch_size = 32
params, batch = init(jax.random.key(0), layer_sizes, batch_size)
```

Compare these examples with the purely [automatic partitioning examples in the
“Distributed arrays and automatic partitioning”
doc](https://docs.jax.dev/en/latest/notebooks/Distributed_arrays_and_automatic_parallelization.html).
While in those automatic partitioning examples we don’t need to edit the model
functions to use different parallelization strategies, with `shard_map`

we
often do.

#### 8-way batch data parallelism[#](#way-batch-data-parallelism)

The simplest multi-device parallelism strategy is to shard the batch of inputs and targets over multiple devices, replicate the parameters over those devices, and apply the model in parallel to those shards of data. To evaluate the total loss, the devices need only communicate with a scalar-sized all-reduce-sum at the end. (To evaluate the gradient of the loss, the devices must perform all-reduce-sums of parameter gradients in the backward pass.)

```
from jax.sharding import Mesh, PartitionSpec as P
mesh = jax.make_mesh((8,), ('batch',))
jax.set_mesh(mesh)
# replicate initial params on all devices, shard data batch over devices
batch = jax.device_put(batch, NamedSharding(mesh, P('batch')))
params = jax.device_put(params, NamedSharding(mesh, P()))
# adapt the loss function to sum the losses across devices
@jax.shard_map(out_specs=P())
def loss_dp(params, local_batch):
inputs, targets = local_batch
predictions = predict(params, inputs) # use reference 'predict`
local_loss = jnp.mean(jnp.sum((predictions - targets)**2, axis=-1))
return jax.lax.pmean(local_loss, 'batch')
```

We can check that the loss and its gradients match the reference (base) model:

```
print(jax.jit(loss)(params, batch))
print(jax.jit(loss_dp)(params, batch))
```

```
11.920298
11.920298
```

```
def allclose(a, b):
return tree_all(tree_map(partial(jnp.allclose, atol=1e-2, rtol=1e-2), a, b))
print(allclose(jax.jit(jax.grad(loss))(params, batch),
jax.jit(jax.grad(loss_dp))(params, batch)))
```

```
True
```

We can print the compiler IR to inspect the gradient computation and verify that the collective all-reduce-sum operations happen where we’d expect: at the end of the forward pass to compute the loss value, and in the backward pass to compute the total parameter gradients.

#### 8-way fully sharded data parallelism (FSDP)[#](#way-fully-sharded-data-parallelism-fsdp)

Another strategy is to additionally shard the parameters over the devices,
all-gathering each one when the full value is needed for the `jnp.dot`

or bias
addition. Since we only have one full parameter in local device memory at a
time, rather than keeping all parameters in all device memories as in the
preceding DP example, we free up significant memory that we can use for larger
models or larger batch sizes. And because XLA will overlap computation and
inter-device communication, the wall-clock time doesn’t suffer.

So now we need collectives in two places: the model prediction function
`predict`

needs to all-gather the parameters before they’re used, and as in the
DP case the loss function needs to sum the local losses to compute the total
loss.

There’s one other ingredient we need: we don’t want to store the fully gathered
parameters from the forward pass for use on the backward pass. Instead, we want
to gather them again on the backward pass. We can express that by using
`jax.remat`

with a [custom
policy](https://docs.jax.dev/en/latest/notebooks/autodiff_remat.html#custom-policies-for-what-s-saveable)
(or a `custom_vjp`

), though XLA typically does that rematerialization
automatically.

This general [FSDP
approach](https://engineering.fb.com/2021/07/15/open-source/fsdp/) is similar
to [weight update sharding (WUS)](https://arxiv.org/abs/2004.13336) and
[ZeRO-3](https://arxiv.org/abs/1910.02054).

```
# shard data batch *and params* over devices
mesh = jax.make_mesh((4,), ('batch',))
jax.set_mesh(mesh)
batch = jax.device_put(batch, P('batch'))
params = jax.device_put(params, P('batch'))
# adapt the prediction function to gather weights just before their use,
# and to re-gather them on the backward pass (rather than saving them)
@partial(jax.remat, policy=lambda op, *_, **__: str(op) != 'all_gather')
def predict_fsdp(params_frag, inputs):
for W_frag, b_frag in params_frag:
W = jax.lax.all_gather(W_frag, 'batch', tiled=True)
b = jax.lax.all_gather(b_frag, 'batch', tiled=True)
outputs = jnp.dot(inputs, W) + b
inputs = jax.nn.relu(outputs)
return outputs
@jax.shard_map(out_specs=P())
def loss_fsdp(local_params, local_batch):
inputs, targets = local_batch
predictions = predict_fsdp(local_params, inputs)
local_loss = jnp.mean(jnp.sum((predictions - targets) ** 2, axis=-1))
return jax.lax.pmean(local_loss, 'batch')
```

Again we can check that the loss and its gradients match the reference model:

```
repl_params = jax.device_put(params, P())
repl_batch = jax.device_put(batch, P())
print(jax.jit(loss)(repl_params, repl_batch))
print(jax.jit(loss_fsdp)(params, batch))
print(allclose(jax.jit(jax.grad(loss))(repl_params, repl_batch),
jax.jit(jax.grad(loss_fsdp))(params, batch)))
```

```
11.920298
11.920298
True
```

#### 8-way tensor parallelism (TP)[#](#way-tensor-parallelism-tp)

Usually we don’t use tensor model parallelism by itself, but seeing it in
isolation is a good warmup on parallel matrix multiplication. It’s also a good
example of using `shard_map`

in a library function, called in a larger
`jit`

-based computation.

The parallelization idea is that we’ll keep the data/activations sharded over
its feature axis (rather than its batch axis), and we’ll similarly shard weight
matrices over their input-feature axis (and biases over their feature axis).
Then to perform the parallel matrix multiplication, we’ll perform local matrix
multiplications followed by a `psum_scatter`

to sum the local results and
efficiently scatter the result’s shards.

```
mesh = jax.make_mesh((8,), ('feats',))
jax.set_mesh(mesh)
batch = jax.device_put(batch, NamedSharding(mesh, P(None, 'feats')))
params = jax.device_put(params, NamedSharding(mesh, P('feats')))
def predict_tp(params, inputs):
for W, b in params:
outputs = gemm_tp(inputs, W, b)
inputs = jax.nn.relu(outputs)
return outputs
@jax.shard_map(in_specs=(P(None, 'feats'), P('feats', None), P('feats')),
out_specs=P(None, 'feats'))
def gemm_tp(inputs, W, b):
block_result = jnp.dot(inputs, W)
return jax.lax.psum_scatter(block_result, 'feats',
scatter_dimension=1, tiled=True) + b
def loss_tp(params, batch):
inputs, targets = batch
predictions = predict_tp(params, inputs)
return jnp.mean(jnp.sum((predictions - targets) ** 2, axis=-1)) # NOTE psum!
```

#### FSDP + TP, with `shard_map`

at the top level[#](#fsdp-tp-with-shard-map-at-the-top-level)

We can compose these strategies together, using multiple axes of parallelism.

```
mesh = jax.make_mesh((4, 2), ('batch', 'feats'))
jax.set_mesh(mesh)
batch = jax.device_put(batch, NamedSharding(mesh, P('batch', 'feats')))
params = jax.device_put(params, NamedSharding(mesh, P(('feats', 'batch'))))
# mostly same as previous predict_fsdp definition, except we call gemm_tp
@partial(jax.remat, policy=lambda op, *_, **__: str(op) != 'all_gather')
def predict_fsdp_tp(params_frag, inputs):
for W_frag, b_frag in params_frag:
W = jax.lax.all_gather(W_frag, 'batch', tiled=True)
b = jax.lax.all_gather(b_frag, 'batch', tiled=True)
block_result = jnp.dot(inputs, W)
outputs = jax.lax.psum_scatter(block_result, 'feats',
scatter_dimension=1, tiled=True) + b
inputs = jax.nn.relu(outputs)
return outputs
@jax.shard_map(in_specs=(P(('feats', 'batch')), P('batch', 'feats')),
out_specs=P())
def loss_fsdp_tp(local_params, local_batch):
inputs, targets = local_batch
predictions = predict_fsdp_tp(local_params, inputs)
sq_err = jax.lax.psum(jnp.sum((predictions - targets) ** 2, axis=-1), 'feats')
return jax.lax.pmean(jnp.mean(sq_err), 'batch')
```

Notice how we have to do *two* collective reductions: one over `'feats'`

and
one over `'batch'`

. In the pure TP example, we didn’t write the `'feats'`

reduction explicitly because we only used `shard_map`

within `gemm_tp`

; in the
caller `loss_tp`

, the compiler automatically translated our use of `jnp.sum`

to
perform a `psum`

as needed given the sharded result returned by `predict_tp`

.

```
repl_params = jax.device_put(params, P())
repl_batch = jax.device_put(batch, P())
print(jax.jit(loss)(repl_params, repl_batch))
print(jax.jit(loss_fsdp_tp)(params, batch))
print(allclose(jax.jit(jax.grad(loss))(repl_params, repl_batch),
jax.jit(jax.grad(loss_fsdp_tp))(params, batch)))
```

```
11.920298
11.920298
True
```

#### SPMD pipeline parallelism (PP)[#](#spmd-pipeline-parallelism-pp)

With pipeline parallelism we aim to parallelize the evaluation of layers at different depths in our network. For example, one device might compute the application of the first layer while another device computes the application of the second; when they finish, the first device passes its results to the second while the second passes its results to the device responsible for the third layer, and the process repeats. In general the number of pipeline stages may be different from the number of layers, as each stage may be responsible for multiple layers.

With SPMD pipelining, we exploit the fact that most layers in the network apply
the computation, just with different parameter values. In particular, we can
stack together all the parameters except for those for the first and last
layers, then use a `shard_map`

to map over blocks of those layer parameters,
where each block of parameters corresponds to a pipeline stage. We then use the
`jax.lax.ppermute`

collective to shift data down the parallel pipeline.

This particular pipelining strategy is essentially [the GPipe
strategy](https://arxiv.org/abs/1811.06965). There are several variants, as
well as quite different strategies, and which is appropriate can depend on the
speed of the networking between stages and batch sizes. But for this tutorial
we’ll focus on just one strategy.

First, we choose some pipeline parameters:

```
L = len(params) - 2 # num layers, excluding first and last
N = batch_size # batch size
F = params[0][0].shape[1] # num features
# choose some pipeline parameters
S = 2 # number of stages
B = 8 # size of each microbatch
assert L % S == 0, "S (number of stages) must divide L (number of inner layers)"
# compute some useful quantities
M, ragged = divmod(N, B) # M is number of microbatches
assert not ragged, "B (size of each microbatch) must divide total batch size"
K, ragged = divmod(M, S) # K is microbatches per stage
assert not ragged, "S (number of stages) must divide number of microbatches"
print(f'{S} stages, {L // S} layer(s) per stage, {L} pipelined layers total')
print(f'{B} examples per microbatch, {M} microbatches total')
```

```
2 stages, 2 layer(s) per stage, 4 pipelined layers total
8 examples per microbatch, 4 microbatches total
```

```
mesh = Mesh(jax.devices()[:S], ('stages',))
def predict_pp(params, inputs):
(W_first, b_first), inner_params, (W_last, b_last) = params
inputs = jax.nn.relu(jnp.dot(inputs, W_first) + b_first)
inputs = spmd_pipeline(lambda Wb, x: jax.nn.relu(x @ Wb[0] + Wb[1]),
inner_params, inputs)
outputs = jnp.dot(inputs, W_last) + b_last
return outputs
@jax.shard_map(in_specs=((P(), P('stages'), P()), P('stages')), out_specs=P())
def loss_pp(params, batch):
inputs, targets = batch
predictions = predict_pp(params, inputs.reshape(K, B, -1)).reshape(K * B, -1)
local_loss = jnp.mean(jnp.sum((predictions - targets)**2, axis=-1))
return jax.lax.pmean(local_loss, 'stages')
```

```
def spmd_pipeline(fn, stage_params, inputs):
stage = jax.lax.axis_index('stages')
outputs = jnp.zeros_like(inputs) * jnp.nan
state = jnp.zeros((L // S, B, F)) * jnp.nan
for i in range(M+L-1):
state = state.at[0].set(jnp.where(stage == 0, inputs[i % K], state[0]))
state = jax.vmap(fn)(stage_params, state)
outputs = outputs.at[(i-L+1) % K].set(jnp.where(stage == S-1, state[-1], outputs[(i-L+1) % K]))
state, inputs, outputs = shift(i, state, inputs, outputs)
outputs = jax.lax.ppermute(outputs, 'stages', [(i, (i+1) % S) for i in range(S)])
return outputs
def shift(i, state, inputs, outputs):
sh = lambda x, d: jax.lax.ppermute(x, 'stages', [(i, (i+d) % S) for i in range(S)])
state = jnp.roll(state, +1, axis=0).at[0].set(sh(state[-1], +1))
if (i % K) == (-1 % K):
inputs = sh(inputs, +1)
if ((i-L+1) % K) == (-1 % K):
outputs = sh(outputs, +1)
return state, inputs, outputs
```

```
first_params, *inner_params, last_params = params
Ws, bs = zip(*inner_params)
params_stacked = jnp.stack(Ws), jnp.stack(bs)
first_params = jax.device_put(first_params, NamedSharding(mesh, P()))
params_stacked = jax.device_put(params_stacked, NamedSharding(mesh, P('stages')))
last_params = jax.device_put(last_params, NamedSharding(mesh, P()))
params_ = first_params, params_stacked, last_params
batch_ = jax.device_put(batch, NamedSharding(mesh, P('stages')))
```

```
jax.set_mesh(mesh)
print(jax.jit(loss_pp)(params_, batch_))
```

```
11.920298
```

```
_ = jax.jit(jax.grad(loss_pp))(params_, batch_) # don't crash
```

---

## Source: https://jax.readthedocs.io/en/latest/notebooks/layout.html

# Device-local array layout control[#](#device-local-array-layout-control)

The `jax.experimental.layout`

package provides ways to control
how JAX arrays are laid out in device-local memory.

## Terminology[#](#terminology)

Array layout is tightly coupled with array
[sharding](https://docs.jax.dev/en/latest/notebooks/Distributed_arrays_and_automatic_parallelization.html%3E).
Together, a layout and a sharding fully describes how an array’s
values are laid out across (distributed) memories. Along these lines,
we use the following terminology:

**Layout**: how an array’s values are laid out within each memory in which they reside (e.g., in the memory of a single device memory). A typical layout specification is a minor-to-major order listing of array dimensions.**Sharding**: how an array’s values are distributed*across*different memory spaces, such as multiple device memories (e.g. described by sharding some dimensions and replicating others).**Format**: the pairing of**layout**and**sharding**, providing a complete picture of an array’s memory placement.

## Types[#](#types)

There are two Python types that come up when controlling array
layouts: `Layout`

and `Format`

.

The

`Layout`

class is used to define the in-memory layout of an array. It has the following key attributes:`major_to_minor`

: A tuple of integers specifying the dimension ordering in memory. For example, for a 2-dimensional array,`(0, 1)`

indicates row-major layout and`(1, 0)`

indicates column-major.`_tiling`

: An intentionally hidden, highly experimental, optional attribute to specify a tiled layout.`AUTO`

: A special, static sentinel object that can be used with`jax.jit`

to request that the compiler automatically determine a good layout for a compiled function’s input or output arrays.

The

`Format`

class carries both a`Layout`

and a`Sharding`

, with either one taking on a default value when it is not specified. When the layout is explicitly specified, the sharding must be as well.

JAX API functions, such as `jax.jit`

and `jax.device_put`

, accept
`Sharding`

s for sharding control or `Format`

s for additional layout
control. They typically do not accept `Layout`

instances directly.

## Specifying and reading layouts[#](#specifying-and-reading-layouts)

By passing `Format`

objects to `jax.jit`

in place of shardings (in the
`in_shardings`

and `out_shardings`

arguments), you can guide the
compiler’s layout decisions. Similarly you can pass `Format`

s instead
of `Sharding`

s to `jax.device_put`

to control the layout of the
resulting array.

Let’s see an example that uses both explicit and automatic layouts (as
in `Layout.AUTO`

). Imagine we have two compiled functions, `init_fn`

and `apply_fn`

. Say we expect `init_fn`

to be called roughly once, but
`apply_fn`

to be called on the output of `init_fn`

many times, so that
we care much more about the performance of `apply_fn`

. We may want to
have the compiler choose a good layout for `apply_fn`

and constrain
`init_fn`

to produce arrays of such layout. We can do this as follows:

```
import jax, jax.numpy as jnp
from jax.experimental.layout import Layout, Format
from jax.sharding import SingleDeviceSharding
import numpy as np
def init_fn(x, y):
return x * 2, y * 3
def apply_fn(x, y):
return x[0, :], y[:, 0]
```

Since `apply_fn`

reads a contiguous column of its second argument `y`

,
it makes sense to lay it out in column-major order (where columns are
stored contiguously). Using `Layout.AUTO`

, we can ask the compiler to
infer good input layouts and see that it indeed chooses to request the
second argument in column-major layout.

```
shape = (4 * 128, 8 * 128)
duck = jax.ShapeDtypeStruct(shape, jnp.float32)
# Compile the `apply` function with layouts inferred automatically
apply_exe = jax.jit(
apply_fn,
in_shardings=Format(Layout.AUTO),
out_shardings=Format(Layout.AUTO),
).trace(duck, duck).lower().compile()
# Read back the inferred input layout
arg_formats, kwarg_formats = apply_exe.input_formats
assert len(kwarg_formats) == 0
assert arg_formats[0].layout.major_to_minor == (0, 1)
assert arg_formats[1].layout.major_to_minor == (1, 0)
```

We can then compile `init_fn`

to explicitly match this layout in its
outputs.

```
init_exe = jax.jit(init_fn, out_shardings=arg_formats).trace(
duck, duck).lower().compile()
assert init_exe.output_formats == arg_formats
```

Finally we can see how the compiled `apply_fn`

behaves when called
with differently laid out input arrays. The behavior varies with
whether inputs are
[committed](https://docs.jax.dev/en/latest/faq.html#controlling-data-and-computation-placement-on-devices). As
the following test demonstrates, if the argument arrays are committed,
then the pre-compiled `apply_fn`

requires they match the layout
determined by the compiler above. Meanwhile it accepts uncommitted
arrays of any layout (including, of course, the inferred layout). In
this case, the arrays may be relaid out prior to invoking the compiled
computation.

```
def test(x, y, msg):
print(f'-- {msg}:')
print('x major_to_minor =', x.format.layout.major_to_minor)
print('y major_to_minor =', y.format.layout.major_to_minor)
try:
apply_exe(x, y)
print('-> `apply` called successfully')
except ValueError as e:
assert 'does not match' in str(e)
print('-> error: mismatched input layouts')
print()
dev = jax.devices()[0]
x1 = y1 = jnp.ones(shape)
test(x1, y1, 'uncommitted with mismatched layout')
x2, y2 = init_exe(x1, y1)
test(x2, y2, 'uncommitted with matching layout')
x3 = jnp.ones(shape)
y3 = jax.device_put(np.ones(shape), Format(Layout(major_to_minor=(1, 0)),
SingleDeviceSharding(dev)))
test(x3, y3, 'committed with matching layout')
x4 = jnp.ones(shape)
y4 = jax.device_put(np.ones(shape), Format(Layout(major_to_minor=(0, 1)),
SingleDeviceSharding(dev)))
test(x4, y4, 'committed with mismatched layout')
```

```
-- uncommitted with mismatched layout:
x major_to_minor = (0, 1)
y major_to_minor = (0, 1)
-> `apply` called successfully
-- uncommitted with matching layout:
x major_to_minor = (0, 1)
y major_to_minor = (1, 0)
-> `apply` called successfully
-- committed with matching layout:
x major_to_minor = (0, 1)
y major_to_minor = (1, 0)
-> `apply` called successfully
-- committed with mismatched layout:
x major_to_minor = (0, 1)
y major_to_minor = (0, 1)
-> error: mismatched input layouts
```

## Constraining intermediate layouts[#](#constraining-intermediate-layouts)

We can also enforce a specific layout on an intermediate value within
a JIT-compiled function using `with_layout_constraint`

:

```
from jax.experimental.layout import with_layout_constraint
@jax.jit
def f(x):
y = x.T
# Enforce a specific layout on `y`
y = with_layout_constraint(y, Layout(major_to_minor=(0, 1)))
return y * 2
```

This is analogous to
[ jax.lax.with_sharding_constraint](https://docs.jax.dev/en/latest/_autosummary/jax.lax.with_sharding_constraint.html),
for constraining layouts rather than shardings.

---

## Source: https://jax.readthedocs.io/en/latest/notebooks/host-offloading.html

# JAX Memories and Host Offloading[#](#jax-memories-and-host-offloading)

This tutorial provides a practical introduction to host offloading techniques in JAX, focusing on:

Activation offloading

Parameter offloading

Optimizer state offloading


By applying offloading strategies, developers can better manage memory resources and reduce memory pressure on devices. To implement these strategies effectively, understanding JAX’s core mechanisms for data placement and movement is essential.

## Building Blocks for Offloading[#](#building-blocks-for-offloading)

JAX provides several key components for controlling where and how data are stored and moved between the host and the device memory. The following sections explore:

How to specify data distribution with sharding

How to control memory placement between host and device

How to manage data movement in jitted functions


### NamedSharding and Memory Kinds[#](#namedsharding-and-memory-kinds)

[ NamedSharding](../jax.sharding.html#jax.sharding.NamedSharding) defines how data are distributed across devices. It includes:

Basic data distribution configuration

`memory_kind`

parameter for specifying memory type (`device`

or`pinned_host`

)By default,

`memory_kind`

is set to`device`

memory`with_memory_kind`

method for creating new sharding with modified memory type

```
import jax
import jax.numpy as jnp
from jax.sharding import Mesh, NamedSharding, PartitionSpec as P
import numpy as np
# Create mesh
# 1x1 mesh represents a single device with two named dimensions (x and y)
mesh = Mesh(np.array(jax.devices()[0]).reshape(1, 1), ('x', 'y'))
# Device sharding - partitions data along x and y dimensions
s_dev = NamedSharding(mesh, P('x', 'y'), memory_kind="device")
# Host sharding - same partitioning but in pinned host memory
s_host = s_dev.with_memory_kind('pinned_host')
print(s_dev) # Shows device memory sharding
print(s_host) # Shows pinned host memory sharding
```

```
NamedSharding(mesh=Mesh('x': 1, 'y': 1), spec=PartitionSpec('x', 'y'), memory_kind=device)
NamedSharding(mesh=Mesh('x': 1, 'y': 1), spec=PartitionSpec('x', 'y'), memory_kind=pinned_host)
```

### Data Placement with device_put[#](#data-placement-with-device-put)

[ jax.device_put()](../_autosummary/jax.device_put.html#jax.device_put) is a function that explicitly transfers arrays to a specified memory location according to a sharding specification.

```
# Create a 2x4 array
arr = jnp.arange(8.0).reshape(2, 4)
# Move arrays to different memory locations based on sharding objects
arr_host = jax.device_put(arr, s_host) # Places in pinned host memory
arr_dev = jax.device_put(arr, s_dev) # Places in device memory
# Verify memory locations
print(arr_host.sharding.memory_kind) # Output: pinned_host
print(arr_dev.sharding.memory_kind) # Output: device
```

```
pinned_host
device
```

### Output Sharding Controls[#](#output-sharding-controls)

Shardings determine how data is split across devices. JAX provides `out_shardings`

to control how output arrays are partitioned when leaving a jitted function.

Key Features:

Can differ from input sharding

Allows different memory kinds for outputs


Examples:

#### Device Output Sharding[#](#device-output-sharding)

```
f = jax.jit(lambda x:x, out_shardings=s_dev)
out_dev = f(arr_host)
print("Result value of H2D: \n", out_dev)
```

```
Result value of H2D:
[[0. 1. 2. 3.]
[4. 5. 6. 7.]]
```

Moving data from host to device memory when needed for computation is the essence of host offloading. Use [ jax.device_put()](../_autosummary/jax.device_put.html#jax.device_put) to perform this transfer in this example to optimize performance.

```
# Instead of the lambda function, add_func can be defined explicitly
# move data to device before computation
def add_func(x): # Move data to device and add one
x = jax.device_put(x, s_dev)
return x + 1
f = jax.jit(add_func, out_shardings=s_dev)
out_dev = f(arr_host)
print("Result value of H2D and add 1 in device memory: \n", out_dev)
```

```
Result value of H2D and add 1 in device memory:
[[1. 2. 3. 4.]
[5. 6. 7. 8.]]
```

#### Host Output Sharding[#](#host-output-sharding)

```
f = jax.jit(lambda x: x, out_shardings=s_host)
out_host = f(arr_dev) # Input arrays in the device memory while output arrays in the host memory
print("Result value of D2H: \n", out_host)
```

```
Result value of D2H:
[[0. 1. 2. 3.]
[4. 5. 6. 7.]]
```

## Activation Offloading[#](#activation-offloading)

Before diving into activation offloading, let’s first take a look at the baseline code.

This code implements a simple neural network with 10 layers, each consisting of two linear transformations. The code demonstrates basic memory usage patterns and provides a foundation for comparing offloading optimization techniques.

Key components:

Each layer consists of two sequential linear operations:

First multiplication:

`x @ w1`

Second multiplication:

`y @ w2`


10-layer network using JAX’s scan operation

Memory usage analysis

Gradient computation with JIT compilation


To analyze memory usage in JAX, the [ jax.stages.Compiled.memory_analysis()](../jax.stages.html#jax.stages.Compiled.memory_analysis) method can be used on a compiled function. This provides detailed statistics about memory consumption during computation. The key metrics include temporary memory size, argument size, output size, and alias size. To calculate the total memory usage, sum the temporary, argument, and output sizes, then subtract the alias size to avoid double-counting the same memory multiple times. This provides a summarized view of how the device memory is utilized across different aspects of the computation.

```
# Initialize input and weights with small values (0.0001)
input = jnp.ones((256, 256), dtype=jnp.float32) * 0.001 # Input matrix: 256 x 256
w1 = jnp.ones((10, 256, 1024), dtype=jnp.float32) * 0.001 # 10 layers of 256 x 1024 matrices
w2 = jnp.ones((10, 1024, 256), dtype=jnp.float32) * 0.001 # 10 layers of 1024 x 256 matrices
def two_layers(x, w):
# Simple two-layer linear transformation
w1, w2 = w
y = x @ w1
return y @ w2, None
def scanned(w, x):
# Applies the layer function 10 times using JAX's scan operation
# Input: w (tuple of weight matrices), x (input matrix)
# Output: sum of the final layer's output
result = jax.lax.scan(two_layers, x, w)[0]
return jnp.sum(result)
# Compile and compute gradients of the scanned function
f = jax.jit(jax.grad(scanned)) # Apply JIT compilation to gradient computation
# Analyze memory usage
compiled_step = f.lower((w1, w2), input).compile()
compiled_stats = compiled_step.memory_analysis()
if compiled_stats is not None:
# Calculate total memory usage including temporary storage, arguments, and outputs
# Subtract alias size to avoid double-counting memory shared between different components
total = compiled_stats.temp_size_in_bytes + compiled_stats.argument_size_in_bytes \
+ compiled_stats.output_size_in_bytes - compiled_stats.alias_size_in_bytes
print(f"Temp size: {compiled_stats.temp_size_in_bytes / (1024**2):.2f} MB")
print(f"Argument size: {compiled_stats.argument_size_in_bytes / (1024**2):.2f} MB")
print(f"Total size: {total/(1024**2):.2f} MB")
# Execute the function and print sample results
result = f((w1, w2), input) # Execute the function with weights and input
print("Sample of results: ", result[0][0, 0, :5])
```

```
Temp size: 17.25 MB
Argument size: 20.25 MB
Total size: 57.50 MB
Sample of results: [3.8312336e-07 3.8312336e-07 3.8312336e-07 3.8312336e-07 3.8312336e-07]
```

The detailed coverage of activation offloading can be found in the [Gradient checkpointing with jax.checkpoint (jax.remat)](../gradient-checkpointing.html#gradient-checkpointing) tutorial. Activation offloading helps manage memory by moving intermediate activations to host memory after the forward pass, and bringing them back to device memory during the backward pass when needed for gradient computation.

To implement activation offloading effectively, it is important to understand checkpoint names and policies. Here’s how they work in a simple example:

### Checkpoint Names[#](#checkpoint-names)

The `checkpoint_name()`

function allows labeling activations for memory management during computation. Here’s a simple example that a checkpoint name `x`

is specified.

```
from jax.ad_checkpoint import checkpoint_name
def layer_name(x, w):
w1, w2 = w
x = checkpoint_name(x, "x")
y = x @ w1
return y @ w2, None
```

The checkpoint name helps the system decide whether to:

Keep the activation in device memory or

Offload it to host memory during computation


This pattern is common in neural networks, where multiple transformations are applied sequentially to input data.

### Checkpoint Policies[#](#checkpoint-policies)

This checkpoint policy implements a memory management strategy that optimizes memory usage during computation. It manages memory by handling intermediate values through three strategies:

Recomputing during backward pass (default behavior)

Storing on device

Offloading to host memory after forward pass and loading back during backward pass


```
from jax import checkpoint_policies as cp
policy = cp.save_and_offload_only_these_names(
names_which_can_be_saved=[], # No values stored on device
names_which_can_be_offloaded=["x"], # Offload activations labeled "x"
offload_src="device", # Move from device memory
offload_dst="pinned_host" # To pinned host memory
)
```

[ jax.lax.scan()](../_autosummary/jax.lax.scan.html#jax.lax.scan) is commonly used in JAX for handling sequential operations (like RNNs or transformers). It can be integrated with JAX’s rematerialization to process sequential data.

Key components:

`jax.remat()`

creates a rematerialized version of the layer function using`jax.remat()`

and applies the checkpoint policy to the layer function`prevent_cse=False`

enables XLA’s common subexpression elimination for better performanceiterates the rematerialized layer along an axis`jax.lax.scan()`


```
def scanned(w, x):
remat_layer = jax.remat(layer_name,
policy=policy, # Use our offloading policy
prevent_cse=False) # Allow CSE optimizations
result = jax.lax.scan(remat_layer, x, w)[0]
return jnp.sum(result)
# Initialize input and weights with small values (0.0001)
input = jnp.ones((256, 256), dtype=jnp.float32) * 0.001 # Input matrix: 256 x 256
w1 = jnp.ones((10, 256, 1024), dtype=jnp.float32) * 0.001 # 10 layers of 256 x 1024 matrices
w2 = jnp.ones((10, 1024, 256), dtype=jnp.float32) * 0.001 # 10 layers of 1024 x 256 matrices
# Compile and compute gradients of the scanned function
f = jax.jit(jax.grad(scanned)) # Apply JIT compilation to gradient computation
# Analyze memory usage
compiled_step = f.lower((w1, w2), input).compile()
compiled_stats = compiled_step.memory_analysis()
if compiled_stats is not None:
total = compiled_stats.temp_size_in_bytes + compiled_stats.argument_size_in_bytes \
+ compiled_stats.output_size_in_bytes - compiled_stats.alias_size_in_bytes
print(f"Temp size: {compiled_stats.temp_size_in_bytes / (1024**2):.2f} MB")
print(f"Argument size: {compiled_stats.argument_size_in_bytes / (1024**2):.2f} MB")
print(f"Total size: {total/(1024**2):.2f} MB")
result_activation = f((w1, w2), input) # Execute the function with weights and input
# Verify numerical correctness
are_close = jnp.allclose(
result_activation[0], # Result from activation offloading only
result[0], # Result from both activation and parameter offloading
rtol=1e-5,
atol=1e-5
)
print(f"Results match within tolerance: {are_close}")
print("Sample of results: ", result_activation[0][0, 0, :5])
```

```
Temp size: 6.50 MB
Argument size: 20.25 MB
Total size: 46.75 MB
Results match within tolerance: True
Sample of results: [3.8312336e-07 3.8312336e-07 3.8312336e-07 3.8312336e-07 3.8312336e-07]
```

Activation offloading reduces temporary memory usage from 17.25 MB to 6.5 MB while input and output argument sizes remain the same. Totally 10.75 MB is saved. It is achieved by offloading activation `x`

to host memory after the forward pass and loading it back to device memory before the backward pass.

### Summary of Activation Offloading[#](#summary-of-activation-offloading)

Activation offloading provides a powerful way to manage memory in large computations by:

Using checkpoint names to mark specific activations

Applying policies to control where and how activations are stored

Supporting common JAX patterns like scan operations

Moving selected activations to host memory when device memory is under budget


This approach is particularly useful when working with large models that would otherwise exceed device memory capacity.

## Parameter Offloading[#](#parameter-offloading)

Model parameters (also known as weights) can be offloaded to the host memory to optimize device memory usage during initialization. This is achieved by using [ jax.jit()](../_autosummary/jax.jit.html#jax.jit) with a sharding strategy that specifies host memory kind.

While parameter offloading and activation offloading are distinct memory optimization techniques, the following example demonstrates parameter offloading built upon the activation offloading implementation shown earlier.

### Parameter Placement for Computation[#](#parameter-placement-for-computation)

Different from the earlier `layer`

function, [ jax.device_put()](../_autosummary/jax.device_put.html#jax.device_put) is applied to move parameter

`w1`

and `w2`

to the device before the matrix multiplications. This ensures the parameters are available on the device for both forward and backward passes.Note that the activation offloading implementation remains unchanged, using the same:

Checkpoint name

`"x"`

Checkpoint policy

`scanned`

function combining`jax.remat()`

and`jax.lax.scan()`


### Parameter Initialization with Host Offloading[#](#parameter-initialization-with-host-offloading)

During the initialization, parameter `w1`

and `w2`

are placed on host memory before being passed to the [ jax.jit()](../_autosummary/jax.jit.html#jax.jit) function

`f`

, while keeping the `input`

variable on the device.```
# Hybrid version: Both activation and parameter offloading
def hybrid_layer(x, w):
# Move model parameters w1 and w2 to device memory via device_put
w1, w2 = jax.tree.map(lambda x: jax.device_put(x, s_dev), w)
x = checkpoint_name(x, "x") # Offload activation x to host memory
y = x @ w1
return y @ w2, None
def hybrid_scanned(w, x):
remat_layer = jax.remat(hybrid_layer, # Use hybrid_layer instead of layer
policy=policy, # Use offloading policy
prevent_cse=False) # Allow CSE optimizations
result = jax.lax.scan(remat_layer, x, w)[0]
return jnp.sum(result)
# Move model parameters w1 and w2 to the host via device_put
# Initialize input and weights with small values (0.0001)
wh1 = jax.device_put(w1, s_host)
wh2 = jax.device_put(w2, s_host)
# Compile and compute gradients of the scanned function
f = jax.jit(jax.grad(hybrid_scanned)) # Apply JIT compilation to gradient computation
# Analyze memory usage
compiled_step = f.lower((wh1, wh2), input).compile()
compiled_stats = compiled_step.memory_analysis()
if compiled_stats is not None:
total = compiled_stats.temp_size_in_bytes + compiled_stats.argument_size_in_bytes \
+ compiled_stats.output_size_in_bytes - compiled_stats.alias_size_in_bytes
print(f"Temp size: {compiled_stats.temp_size_in_bytes / (1024**2):.2f} MB")
print(f"Argument size: {compiled_stats.argument_size_in_bytes / (1024**2):.2f} MB")
print(f"Total size: {total / (1024**2):.2f} MB")
result_both = f((wh1, wh2), input) # Execute with both activation and parameter offloading
# Verify numerical correctness
are_close = jnp.allclose(
result_activation[0], # Result from activation offloading only
result_both[0], # Result from both activation and parameter offloading
rtol=1e-5,
atol=1e-5
)
print(f"Results match within tolerance: {are_close}")
```

```
Temp size: 4.75 MB
Argument size: 0.25 MB
Total size: 25.00 MB
Results match within tolerance: True
```

This implementation demonstrates how offloading model parameters together with activation offloading to host memory can significantly reduce device memory usage.

### Memory Analysis[#](#memory-analysis)

**Baseline Memory Usage:**

Input tensor: 0.25 MB (256 × 256 × 4 bytes)

Model parameters (w1, w2): 10 MB each (256 × 1024 × 4 bytes ≈ 1 MB per layer × 10 layers)


**Memory Usage Comparison:**

Argument size without parameter offloading: 20.25 MB (0.25 + 10 + 10)

Argument size with parameter offloading: 0.25 MB (only input remains)

Temporary memory without activation offloading: 17.25 MB

Temporary memory with activation offloading: 6.50 MB

Temporary memory with activation and parameter offloading: 4.75 MB


#### Key Optimizations[#](#key-optimizations)

**Parameter Offloading**: Moving parameters (w1, w2) to host memory reduces argument size by 20 MB (from 20.25 MB to 0.25 MB).**Activation Offloading**: Moving activations to host memory reduces temporary memory usage by 10.75 MB (from 17.25 to 6.50 MB).**Hybrid Strategy**: The rematerialization of activation offloading helps avoid keeping weights on the device and reduce temporary memory usage by 1.75 MB (from 6.50 MB to 4.75 MB). Without it, JAX would be eager to keep the on-device copies of the weights alive for the backward pass.

#### Results[#](#results)

**Total Memory Savings**: 33.5 MB (20 MB + 10.75 MB + 1.75 MB)

This hybrid approach demonstrates that parameter and activation offloading work synergistically to achieve significant memory reductions while maintaining computational correctness.

### Limitations of Parameter Offloading[#](#limitations-of-parameter-offloading)

[ jax.lax.scan()](../_autosummary/jax.lax.scan.html#jax.lax.scan) is crucial for effective parameter management. Using an explicit for loop would cause parameters to continuously occupy device memory, resulting in the same memory usage as without parameter offloading. While

[allows specifying the scan axis, parameter offloading currently works only when scanning over axis 0. Scanning over other axes generates a](../_autosummary/jax.lax.scan.html#jax.lax.scan)

`jax.lax.scan()`

`transpose`

operation during compilation before returning parameters to the device, which is expensive and not supported on all platforms.The offloading performance can vary for different device types. It may degrade performance due to memory transfers between host and device, so it’s important to consider this trade-off when designing your optimization strategy.

# Optimizer State Offloading[#](#optimizer-state-offloading)

Optimizer state offloading is a memory management technique that stores optimizer states in host memory instead of device memory. This approach is particularly useful when optimizer states are large, as it reduces device memory usage.

A basic JAX implementation using the Adam optimizer can serve as a starting point, where all tensors are stored on the device. This will serve as a reference implementation before introducing optimizer state offloading.

## Basic Implementation[#](#basic-implementation)

This section, let’s implement a simple model with the Adam optimizer. This implementation helps establish the baseline behavior before exploring optimizer state offloading. It is particularly useful for understanding memory patterns in large-scale neural network training.

In the code example below, a neural network training loop is included to use JAX and Optax’s Adam optimizer. The network consists of four linear layers with GELU activation functions, processing large matrices of size 7168x7168. The training process involves:

Forward pass: The input flows through four layers, each applying a linear transformation followed by GELU activation

Loss computation: Calculates mean squared error between output and input, plus L2 regularization

Backward pass: Computes gradients using automatic differentiation

Optimization step: Updates parameters using Adam optimizer with gradient clipping


The code uses JIT compilation to optimize performance and includes memory usage analysis to monitor the computational resources required during training. The memory analysis provides insights into temporary memory usage, argument sizes, and total memory consumption during the optimization step.

```
import optax
DIM = 7168
# Initialize data and parameter w1, w2, w3 and w4
input = jnp.ones((DIM, DIM))
params = {f'w{i}': jnp.ones((DIM, DIM)) for i in range(1, 5)}
# Initialize optimizer
optimizer = optax.chain(
optax.clip_by_global_norm(1.0),
optax.adam(learning_rate=0.1)
)
opt_state = optimizer.init(params)
def gelu(x):
return 0.5 * x * (1 + jnp.tanh(jnp.sqrt(2 / jnp.pi) * (x + 0.044715 * x**3)))
def single_layer(x, w):
return x @ w
def forward(params, x):
for i in range(1, 5):
x = gelu(single_layer(x, params[f'w{i}']))
return x
def compute_loss(params, inputs):
outputs = forward(params, inputs)
loss = jnp.mean((outputs - inputs) ** 2)
l2_reg = 0.001 * sum(jnp.sum(w ** 2) for w in jax.tree_util.tree_leaves(params))
return loss + l2_reg
def step(params, opt_state, inputs):
grads = jax.grad(lambda p: compute_loss(p, inputs))(params)
updates, new_opt_state = optimizer.update(grads, opt_state, params)
return optax.apply_updates(params, updates), new_opt_state
# JIT compile the step function with proper sharding
step = jax.jit(step, donate_argnums=(0, 1))
# Run a optimization step
new_params, new_opt_state = step(params, opt_state, input)
# Analyze memory usage
compiled_step = step.lower(params, opt_state, input).compile()
compiled_stats = compiled_step.memory_analysis()
if compiled_stats is not None:
total = compiled_stats.temp_size_in_bytes + compiled_stats.argument_size_in_bytes \
+ compiled_stats.output_size_in_bytes - compiled_stats.alias_size_in_bytes
print(f"Temp size: {compiled_stats.temp_size_in_bytes / (1024**3):.2f} GB")
print(f"Argument size: {compiled_stats.argument_size_in_bytes / (1024**3):.2f} GB")
print(f"Total size: {total / (1024**3):.2f} GB")
```

```
Temp size: 2.11 GB
Argument size: 2.49 GB
Total size: 4.59 GB
```

Optimizer state offloading can be implemented as follows.

## Setting Up Sharding and Memory Kinds[#](#setting-up-sharding-and-memory-kinds)

`jax.sharding.SingleDeivceSharding()`

is adopted to simplify the shardings for both device and host memory kinds. During the model state initialization, move the optimizer state to the host using `device_put()`

.

## Model and Training Step Implementation[#](#model-and-training-step-implementation)

Next, define the model architecture, loss function, and training step. The key addition here is moving the optimizer state to device memory via `device_put()`

at the beginning of each training step, as it’s needed for the parameter update on the device.

## Running and Comparing Results[#](#running-and-comparing-results)

After setting up the sharding, the optimizer state is moved to host memory and the step function is run with [ jax.jit()](../_autosummary/jax.jit.html#jax.jit).

The JIT compilation of the step function uses several important parameters:

`donate_argnums=(0,)`

: Indicates that the first argument (parameters) can be modified in-place, allowing JAX to reuse its memory`out_shardings`

: Specifies how output tensors should be sharded across the mesh (devices and hosts)

```
# Create sharding specifications for device and host memory
s_dev = jax.sharding.SingleDeviceSharding(jax.devices()[0], memory_kind="device")
s_host = jax.sharding.SingleDeviceSharding(jax.devices()[0], memory_kind="pinned_host")
def step(params, opt_state, inputs):
grads = jax.grad(lambda p: compute_loss(p, inputs))(params)
opt_state = jax.device_put(opt_state, s_dev)
updates, new_opt_state = optimizer.update(grads, opt_state, params)
new_params = optax.apply_updates(params, updates)
return new_params, new_opt_state
params = {f'w{i}': jnp.ones((DIM, DIM)) for i in range(1, 5)}
opt_state = optimizer.init(params)
# Initialize optimizer
optimizer = optax.chain(
optax.clip_by_global_norm(1.0),
optax.adam(learning_rate=0.1)
)
# Optimizer state is placed on the host during initialization
opt_state = jax.device_put(opt_state, s_host)
# JIT compile the step function with proper sharding and memory optimization
step = jax.jit(
step,
donate_argnums=(0,),
out_shardings=(s_dev, s_host)
)
# Run an optimization step
new_params, offload_opt_state = step(params, opt_state, input)
# Analyze memory usage
compiled_step = step.lower(params, opt_state, input).compile()
compiled_stats = compiled_step.memory_analysis()
if compiled_stats is not None:
total = compiled_stats.temp_size_in_bytes + compiled_stats.argument_size_in_bytes \
+ compiled_stats.output_size_in_bytes - compiled_stats.alias_size_in_bytes
print(f"Temp size: {compiled_stats.temp_size_in_bytes / (1024**3):.2f} GB")
print(f"Argument size: {compiled_stats.argument_size_in_bytes / (1024**3):.2f} MB")
print(f"Total size: {total / (1024**3):.2f} GB")
```

```
Temp size: 1.91 GB
Argument size: 0.96 MB
Total size: 2.87 GB
```

This implementation demonstrates how to:

Set up sharding specifications for

`device`

and`pinned_host`

Move optimizer states between host and device memory via

`jax.device_put()`

Use

`out_shardings`

to ensure proper memory placementShow the memory usage


This implementation demonstrates how offloading optimizer state to host memory can reduce device memory usage through a trade-off between argument size and temporary memory.

Memory Analysis:

Argument Size Reduction:

The optimizer states are arguments of the

function`jax.jit()`

By offloading these states to host memory, the argument size on device is reduced


Temporary Memory Impact:

Offloading increases temporary memory usage

This is because outputs of optimizer states need memory buffers before being copied to host

The memory live ranges for these temporary buffers are extended due to the host-device transfers


Latency Hiding Scheduling:

JAX uses XLA’s latency hiding scheduling to overlap computation with host-device transfers

The overlapping can cause tensors to have larger live ranges, which increases memory pressure on the device

This adaptive behavior helps maintain stable memory usage while still providing some performance benefits


Memory Trade-off:

Total memory size with offloading: 2.87 GB

Total memory size without offloading: 4.59 GB

Net memory saving: 1.72 GB



while offloading increases temporary memory usage, the reduction in argument size more than compensates for this increase, resulting in an overall reduction in device memory usage.

Note: The optimizer states can be compared for numerical equivalence using `jax.tree_util.tree_map`

and `jnp.allclose`

, but this verification step is omitted here for brevity.

## Tools for Host Offloading[#](#tools-for-host-offloading)

[ jax.stages.Compiled.memory_analysis()](../jax.stages.html#jax.stages.Compiled.memory_analysis) API is utilized above to get memory usage information. For device memory analysis, refer to

[Profiling device memory](../device_memory_profiling.html). The profiling tools described in

[Profiling computation](../profiling.html)can help measure memory savings and performance impact from host offloading.

---

## Source: https://jax.readthedocs.io/en/latest/multi_process.html

# Introduction to multi-controller JAX (aka multi-process/multi-host JAX)[#](#introduction-to-multi-controller-jax-aka-multi-process-multi-host-jax)

By reading this tutorial, you’ll learn how to scale JAX computations to more devices than can fit in a single host machine, e.g. when running on a GPU cluster, Cloud TPU pod, or multiple CPU-only machines.

The main idea

**Run multiple Python processes**, which we sometimes call “controllers.” We can run one (or more) process per host machine.**Initialize the cluster with**.`jax.distributed.initialize()`

**A**, and if each process applies the same JAX function to it, it’s like programming against one big device.can span all processes`jax.Array`

**Use the same**as in single-controller JAX to control how data is distributed and computation is parallelized. XLA automatically exploits high-speed networking links like TPU ICI or NVLink between hosts when available, and otherwise uses available host networking (e.g. Ethernet, InfiniBand).[unified sharding mechanism](https://jax.readthedocs.io/en/latest/notebooks/Distributed_arrays_and_automatic_parallelization.html)**All processes (usually) run the same Python script**. You write this Python code almost exactly the same as you would for a single process — just run multiple instances of it and JAX takes care of the rest. In other words, except for array creation, you can write your JAX code as if there were one giant machine with all devices attached to it.

This tutorial assumes you’ve read [Distributed arrays and automatic
parallelization](https://jax.readthedocs.io/en/latest/notebooks/Distributed_arrays_and_automatic_parallelization.html), which is about single-controller JAX.

## Toy example[#](#toy-example)

Before we define terms and walk through the details, here’s a toy example:
making a process-spanning [ jax.Array](_autosummary/jax.Array.html#jax.Array) of values and applying

[functions to it.](jax.numpy.html#module-jax.numpy)

`jax.numpy`

```
# call this file toy.py, to be run in each process simultaneously
import jax
import jax.numpy as jnp
from jax.sharding import NamedSharding, PartitionSpec as P
import numpy as np
# in this example, get multi-process parameters from sys.argv
import sys
proc_id = int(sys.argv[1])
num_procs = int(sys.argv[2])
# initialize the distributed system
jax.distributed.initialize('localhost:10000', num_procs, proc_id)
# this example assumes 8 devices total
assert jax.device_count() == 8
# make a 2D mesh that refers to devices from all processes
mesh = jax.make_mesh((4, 2), ('i', 'j'))
# create some toy data
global_data = np.arange(32).reshape((4, 8))
# make a process- and device-spanning array from our toy data
sharding = NamedSharding(mesh, P('i', 'j'))
global_array = jax.device_put(global_data, sharding)
assert global_array.shape == global_data.shape
# each process has different shards of the global array
for shard in global_array.addressable_shards:
print(f"device {shard.device} has local data {shard.data}")
# apply a simple computation, automatically partitioned
global_result = jnp.sum(jnp.sin(global_array))
print(f'process={proc_id} got result: {global_result}')
```

Here, `mesh`

contains devices from all processes. We use it to create
`global_array`

, logically a single shared array, stored distributed across
devices from all processes.

Every process must apply the same operations, in the same order, to
`global_array`

. XLA automatically partitions those computations, for example
inserting communication collectives to compute the `jnp.sum`

over the full
array. We can print the final result because its value is replicated across
processes.

We can run this code locally on CPU, e.g. using 4 processes and 2 CPU devices per process:

```
export JAX_NUM_CPU_DEVICES=2
num_processes=4
range=$(seq 0 $(($num_processes - 1)))
for i in $range; do
python toy.py $i $num_processes > /tmp/toy_$i.out &
done
wait
for i in $range; do
echo "=================== process $i output ==================="
cat /tmp/toy_$i.out
echo
done
```

Outputs:

```
=================== process 0 output ===================
device TFRT_CPU_0 has local data [[0 1 2 3]]
device TFRT_CPU_1 has local data [[4 5 6 7]]
process=0 got result: -0.12398731708526611
=================== process 1 output ===================
device TFRT_CPU_131072 has local data [[ 8 9 10 11]]
device TFRT_CPU_131073 has local data [[12 13 14 15]]
process=1 got result: -0.12398731708526611
=================== process 2 output ===================
device TFRT_CPU_262144 has local data [[16 17 18 19]]
device TFRT_CPU_262145 has local data [[20 21 22 23]]
process=2 got result: -0.12398731708526611
=================== process 3 output ===================
device TFRT_CPU_393216 has local data [[24 25 26 27]]
device TFRT_CPU_393217 has local data [[28 29 30 31]]
process=3 got result: -0.12398731708526611
```

This might not look so different from single-controller JAX code, and in fact,
this is exactly how you’d write the single-controller version of the same
program! (We don’t technically need to call [ jax.distributed.initialize()](_autosummary/jax.distributed.initialize.html#jax.distributed.initialize)
for single-controller, but it doesn’t hurt.) Let’s run the same code from a
single process:

```
JAX_NUM_CPU_DEVICES=8 python toy.py 0 1
```

Outputs:

```
device TFRT_CPU_0 has local data [[0 1 2 3]]
device TFRT_CPU_1 has local data [[4 5 6 7]]
device TFRT_CPU_2 has local data [[ 8 9 10 11]]
device TFRT_CPU_3 has local data [[12 13 14 15]]
device TFRT_CPU_4 has local data [[16 17 18 19]]
device TFRT_CPU_5 has local data [[20 21 22 23]]
device TFRT_CPU_6 has local data [[24 25 26 27]]
device TFRT_CPU_7 has local data [[28 29 30 31]]
process=0 got result: -0.12398731708526611
```

The data is sharded across eight devices on one process rather than eight devices across four processes, but otherwise we’re running the same operations over the same data.

## Terminology[#](#terminology)

It’s worth pinning down some terminology.

We sometimes call each Python process running JAX computations a **controller**,
but the two terms are essentially synonymous.

Each process has a set of **local devices**, meaning it can transfer data to and
from those devices’ memories and run computation on those devices without
involving any other processes. The local devices are usually physically attached
to the process’s corresponding host, e.g. via PCI. A device can only be local to
one process; that is, the local device sets are disjoint. A process’s local
devices can be queried by evaluating [ jax.local_devices()](_autosummary/jax.local_devices.html#jax.local_devices). We sometimes
use the term

**addressable**to mean the same thing as local.

The devices across all processes are called the **global devices**. The list of
global devices is queried by [ jax.devices()](_autosummary/jax.devices.html#jax.devices). That list of all devices is
populated by running

[on all processes, which sets up a simple distributed system connecting the processes.](_autosummary/jax.distributed.initialize.html#jax.distributed.initialize)

`jax.distributed.initialize()`

We often use the terms **global** and **local** to describe process-spanning and
process-local concepts in general. For example, a “local array” could be a numpy
array that’s only visible to a single process, vs. a JAX “global array” is
conceptually visible to all processes.

## Setting up multiple JAX processes[#](#setting-up-multiple-jax-processes)

In practice, setting up multiple JAX processes looks a bit different from the
toy example, which is run from a single host machine. We usually launch each
process on a separate host, or have multiple hosts with multiple processes each.
We can do that directly using `ssh`

, or with a cluster manager like Slurm or
Kubernetes. In any case, **you must manually run your JAX program on each
host!** JAX doesn’t automatically start multiple processes from a single program
invocation.

However they’re launched, the Python processes need to run
[ jax.distributed.initialize()](_autosummary/jax.distributed.initialize.html#jax.distributed.initialize). When using Slurm, Kubernetes, or any Cloud
TPU deployment, we can run

[with no arguments as they’re automatically populated. Initializing the system means we can run](_autosummary/jax.distributed.initialize.html#jax.distributed.initialize)

`jax.distributed.initialize()`

[to report all devices across all processes.](_autosummary/jax.devices.html#jax.devices)

`jax.devices()`

Warning

[ jax.distributed.initialize()](_autosummary/jax.distributed.initialize.html#jax.distributed.initialize) must be called before running

[,](_autosummary/jax.devices.html#jax.devices)

`jax.devices()`

[, or running any computations on devices (e.g. with](_autosummary/jax.local_devices.html#jax.local_devices)

`jax.local_devices()`

[). Otherwise the JAX process won’t be aware of any non-local devices. (Using](jax.numpy.html#module-jax.numpy)

`jax.numpy`

[or other non-device-accessing functionality is ok.)](_autosummary/jax.config.html#jax.config)

`jax.config()`

[will raise an error if you accidentally call it after accessing any devices.](_autosummary/jax.distributed.initialize.html#jax.distributed.initialize)

`jax.distributed.initialize()`

### GPU Example[#](#gpu-example)

We can run multi-controller JAX on a cluster of [GPU machines](https://cloud.google.com/compute/docs/gpus).
For example, after creating four VMs on Google Cloud with two GPUs per VM, we
can run the following JAX program on every VM. In this example, we provide
arguments to [ jax.distributed.initialize()](_autosummary/jax.distributed.initialize.html#jax.distributed.initialize) explicitly. The coordinator
address, process id, and number of processes are read from the command line.

```
# In file gpu_example.py...
import jax
import sys
# Get the coordinator_address, process_id, and num_processes from the command line.
coord_addr = sys.argv[1]
proc_id = int(sys.argv[2])
num_procs = int(sys.argv[3])
# Initialize the GPU machines.
jax.distributed.initialize(coordinator_address=coord_addr,
num_processes=num_procs,
process_id=proc_id)
print("process id =", jax.process_index())
print("global devices =", jax.devices())
print("local devices =", jax.local_devices())
```

For example, if the first VM has address `192.168.0.1`

, then you would run
`python3 gpu_example.py 192.168.0.1:8000 0 4`

on the first VM, `python3 gpu_example.py 192.168.0.1:8000 1 4`

on the second VM, and so on. After running
the JAX program on all four VMs, the first process prints the following.

```
process id = 0
global devices = [CudaDevice(id=0), CudaDevice(id=1), CudaDevice(id=2), CudaDevice(id=3), CudaDevice(id=4), CudaDevice(id=5), CudaDevice(id=6), CudaDevice(id=7)]
local devices = [CudaDevice(id=0), CudaDevice(id=1)]
```

The process successfully sees all eight GPUs as global devices, as well as its two local devices. Similarly, the second process prints the following.

```
process id = 1
global devices = [CudaDevice(id=0), CudaDevice(id=1), CudaDevice(id=2), CudaDevice(id=3), CudaDevice(id=4), CudaDevice(id=5), CudaDevice(id=6), CudaDevice(id=7)]
local devices = [CudaDevice(id=2), CudaDevice(id=3)]
```

This VM sees the same global devices, but has a different set of local devices.

### TPU Example[#](#tpu-example)

As another example, we can run on [Cloud TPU](https://cloud.google.com/tpu?hl=en). After creating a
`v5litepod-16`

(which has 4 host machines), we might want to test that we can
connect the processes and list all devices:

```
$ TPU_NAME=jax-demo
$ EXTERNAL_IPS=$(gcloud compute tpus tpu-vm describe $TPU_NAME --zone 'us-central1-a' \
| grep externalIp | cut -d: -f2)
$ cat << EOF > demo.py
import jax
jax.distributed.initialize()
if jax.process_index() == 0:
print(jax.devices())
EOF
$ echo $EXTERNAL_IPS | xargs -n 1 -P 0 bash -c '
scp demo.py $0:
ssh $0 "pip -q install -U jax[tpu]"
ssh $0 "python demo.py" '
```

Here we’re using `xargs`

to run multiple `ssh`

commands in parallel, each one
running the same Python program on one of the TPU host machines. In the Python
code, we use [ jax.process_index()](_autosummary/jax.process_index.html#jax.process_index) to print only on one process. Here’s
what it prints:

```
[TpuDevice(id=0, process_index=0, coords=(0,0,0), core_on_chip=0), TpuDevice(id=1, process_index=0, coords=(1,0,0), core_on_chip=0), TpuDevice(id=4, process_index=0, coords=(0,1,0), core_on_chip=0), TpuDevice(id=5, process_index=0, coords=(1,1,0), core_on_chip=0), TpuDevice(id=2, process_index=1, coords=(2,0,0), core_on_chip=0), TpuDevice(id=3, process_index=1, coords=(3,0,0), core_on_chip=0), TpuDevice(id=6, process_index=1, coords=(2,1,0), core_on_chip=0), TpuDevice(id=7, process_index=1, coords=(3,1,0), core_on_chip=0), TpuDevice(id=8, process_index=2, coords=(0,2,0), core_on_chip=0), TpuDevice(id=9, process_index=2, coords=(1,2,0), core_on_chip=0), TpuDevice(id=12, process_index=2, coords=(0,3,0), core_on_chip=0), TpuDevice(id=13, process_index=2, coords=(1,3,0), core_on_chip=0), TpuDevice(id=10, process_index=3, coords=(2,2,0), core_on_chip=0), TpuDevice(id=11, process_index=3, coords=(3,2,0), core_on_chip=0), TpuDevice(id=14, process_index=3, coords=(2,3,0), core_on_chip=0), TpuDevice(id=15, process_index=3, coords=(3,3,0), core_on_chip=0)]
```

Woohoo, look at all those TPU cores!

### Kubernetes Example[#](#kubernetes-example)

Running multi-controller JAX on a Kubernetes cluster is almost identical in spirit to the GPU and TPU examples above: every pod runs the same Python program, JAX discovers its peers, and the cluster behaves like one giant machine.

**Container image**- start from a JAX-enabled image, e.g. one of the public JAX AI images on Google Artifact Registry ([TPU](https://console.cloud.google.com/artifacts/docker/cloud-tpu-images/us/jax-ai-image/tpu)/[GPU](https://console.cloud.google.com/artifacts/docker/deeplearning-images/us-central1/jax-ai-image/gpu)) or NVIDIA ([NGC](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/jax)/[JAX-Toolbox](https://github.com/NVIDIA/JAX-Toolbox)).**Workload type**- use either a[JobSet](https://github.com/kubernetes-sigs/jobset)or an[indexed Job](https://kubernetes.io/docs/concepts/workloads/controllers/job/#parallel-jobs). Each replica corresponds to one JAX process.**Service Account**- JAX needs permission to list the pods that belong to the job so that processes discover their peers. A minimal RBAC setup is provided in[examples/k8s/svc-acct.yaml](https://github.com/jax-ml/jax/blob/main/examples/k8s/svc-acct.yaml).

Below is a [minimal JobSet](https://github.com/jax-ml/jax/blob/main/examples/k8s/example.yaml) that launches two replicas. Replace the placeholders -
image, GPU count, and any private registry secrets - with values that match your environment.

```
apiVersion: jobset.x-k8s.io/v1alpha2
kind: JobSet
metadata:
name: jaxjob
spec:
replicatedJobs:
- name: workers
template:
spec:
parallelism: 2
completions: 2
backoffLimit: 0
template:
spec:
serviceAccountName: jax-job-sa # kubectl apply -f svc-acct.yaml
restartPolicy: Never
imagePullSecrets:
# https://k8s.io/docs/tasks/configure-pod-container/pull-image-private-registry/
- name: null
containers:
- name: main
image: null # e.g. ghcr.io/nvidia/jax:jax
imagePullPolicy: Always
resources:
limits:
cpu: 1
# https://k8s.io/docs/tasks/manage-gpus/scheduling-gpus/
nvidia.com/gpu: null
command:
- python
args:
- -c
- |
import jax
jax.distributed.initialize()
print(jax.devices())
print(jax.local_devices())
assert jax.process_count() > 1
assert len(jax.devices()) > len(jax.local_devices())
```

Apply the manifest and watch the pods complete:

```
$ kubectl apply -f example.yaml
$ kubectl get pods -l jobset.sigs.k8s.io/jobset-name=jaxjob
NAME READY STATUS RESTARTS AGE
jaxjob-workers-0-0-xpx8l 0/1 Completed 0 8m32s
jaxjob-workers-0-1-ddkq8 0/1 Completed 0 8m32s
```

When the job finishes, inspect the logs to confirm that every process saw all accelerators:

```
$ kubectl logs -l jobset.sigs.k8s.io/jobset-name=jaxjob
[CudaDevice(id=0), CudaDevice(id=1)]
[CudaDevice(id=0)]
[CudaDevice(id=0), CudaDevice(id=1)]
[CudaDevice(id=1)]
```

Every pod should have the same set of global devices and a different set of local devices. At this point, you can replace the inline script with your real JAX program.

Once the processes are set up, we can start building global [ jax.Array](_autosummary/jax.Array.html#jax.Array)s
and running computations. The remaining Python code examples in this tutorial
are meant to be run on all processes simultaneously, after running

[.](_autosummary/jax.distributed.initialize.html#jax.distributed.initialize)

`jax.distributed.initialize()`

## Meshes, shardings, and computations can span processes and hosts[#](#meshes-shardings-and-computations-can-span-processes-and-hosts)

Programming multiple processes from JAX usually looks just like programming a single process, just with more devices! The main exceptions to this are around data coming in or out of JAX, e.g. when loading from external data sources. We’ll first go over the basics of multi-process computations here, which largely look the same as their single-process counterparts. We’ll go over some data loading fundamentals, i.e. how to create JAX Arrays from non-JAX sources, later in this doc.

Recall a [ jax.sharding.Mesh](jax.sharding.html#jax.sharding.Mesh) pairs an array of

[s with a sequence of names, with one name per array axis. By creating a](_autosummary/jax.Device.html#jax.Device)

`jax.Device`

`Mesh`

using
devices from multiple processes, then using that mesh in a
[, we can construct](jax.sharding.html#jax.sharding.Sharding)

`jax.sharding.Sharding`

[s sharded over devices from multiple processes.](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

Here’s an example that directly constructs a `Mesh`

using [ jax.devices()](_autosummary/jax.devices.html#jax.devices)
to get devices from all processes:

```
from jax.sharding import Mesh
mesh = Mesh(jax.devices(), ('a',))
# in this case, the same as
mesh = jax.make_mesh((jax.device_count(),), ('a',)) # use this in practice
```

You should probably use the [ jax.make_mesh()](_autosummary/jax.make_mesh.html#jax.make_mesh) helper in practice, not only
because it’s simpler but also because it can choose more performant device
orderings automatically, but we’re spelling it out here. By default it includes
all devices across processes, just like

[.](_autosummary/jax.devices.html#jax.devices)

`jax.devices()`

Once we have a mesh, we can shard arrays over it. There are a few ways to
efficiently build process-spanning arrays, detailed in the last section, but for
now we’ll stick to `jax.device_put`

for simplicity:

```
arr = jax.device_put(jnp.ones((32, 32)), NamedSharding(mesh, P('a')))
if jax.process_index() == 0:
jax.debug.visualize_array_sharding(arr)
```

On process 0, this is printed:

```
┌───────────────────────┐
│ TPU 0 │
├───────────────────────┤
│ TPU 1 │
├───────────────────────┤
│ TPU 4 │
├───────────────────────┤
│ TPU 5 │
├───────────────────────┤
│ TPU 2 │
├───────────────────────┤
│ TPU 3 │
├───────────────────────┤
│ TPU 6 │
├───────────────────────┤
│ TPU 7 │
├───────────────────────┤
│ TPU 8 │
├───────────────────────┤
│ TPU 9 │
├───────────────────────┤
│ TPU 12 │
├───────────────────────┤
│ TPU 13 │
├───────────────────────┤
│ TPU 10 │
├───────────────────────┤
│ TPU 11 │
├───────────────────────┤
│ TPU 14 │
├───────────────────────┤
│ TPU 15 │
└───────────────────────┘
```

Let’s try a slightly more interesting computation!

```
mesh = jax.make_mesh((jax.device_count() // 2, 2), ('a', 'b'))
def device_put(x, spec):
return jax.device_put(x, NamedSharding(mesh, spec))
# construct global arrays by sharding over the global mesh
x = device_put(jnp.ones((4096, 2048)), P('a', 'b'))
y = device_put(jnp.ones((2048, 4096)), P('b', None))
# run a distributed matmul
z = jax.nn.relu(x @ y)
# inspect the sharding of the result
if jax.process_index() == 0:
jax.debug.visualize_array_sharding(z)
print()
print(z.sharding)
```

On process 0, this is printed:

```
┌───────────────────────┐
│ TPU 0,1 │
├───────────────────────┤
│ TPU 4,5 │
├───────────────────────┤
│ TPU 8,9 │
├───────────────────────┤
│ TPU 12,13 │
├───────────────────────┤
│ TPU 2,3 │
├───────────────────────┤
│ TPU 6,7 │
├───────────────────────┤
│ TPU 10,11 │
├───────────────────────┤
│ TPU 14,15 │
└───────────────────────┘
NamedSharding(mesh=Mesh('a': 8, 'b': 2), spec=PartitionSpec('a',), memory_kind=device)
```

Here, just from evaluating `x @ y`

on all processes, XLA is automatically
generating and running a distributed matrix multiplication. The result is
sharded against the mesh like `P('a', None)`

, since in this case the matmul
included a `psum`

over the `'b'`

axis.

Warning

When applying JAX computations to process-spanning arrays, to avoid deadlocks
and hangs, **it’s crucial that all processes with participating devices run the
same computation in the same order**. That’s because the computation may
involve collective communication barriers. If a device over which an array is
sharded does not join in the collective because its controller didn’t issue the
same computation, the other devices are left waiting. For example, if only the
first three processes evaluated `x @ y`

, while the last process evaluated `y @ x`

, the computation would likely hang indefinitely. This assumption,
computations on process-spanning arrays are run on all participating processes
in the same order, is mostly unchecked.

So the easiest way to avoid deadlocks in multi-process JAX is to run the same
Python code on every process, and beware of any control flow that depends on
[ jax.process_index()](_autosummary/jax.process_index.html#jax.process_index) and includes communication.

If a process-spanning array is sharded over devices on different processes, it
is an error to perform operations on the array that require the data to be
available locally to a process, like printing. For example, if we run `print(z)`

in the preceding example, we see

```
RuntimeError: Fetching value for `jax.Array` that spans non-addressable (non process local) devices is not possible. You can use `jax.experimental.multihost_utils.process_allgather` to print the global array or use `.addressable_shards` method of jax.Array to inspect the addressable (process local) shards.
```

To print the full array value, we must first ensure it’s replicated over
processes (but not necessarily over each process’s local devices), e.g. using
`jax.device_put`

. In the above example, we can write at the end:

```
w = device_put(z, P(None, None))
if jax.process_index() == 0:
print(w)
```

Be careful not to write the [ jax.device_put()](_autosummary/jax.device_put.html#jax.device_put) under the

`if process_index() == 0`

, because that would lead to a deadlock as only process 0 initiates the
collective communication and waits indefinitely for the other processes.
The [module has some functions that make it easier to process global](jax.experimental.multihost_utils.html#module-jax.experimental.multihost_utils)

`jax.experimental.multihost_utils`

[s (e.g.,](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

[).](_autosummary/jax.experimental.multihost_utils.process_allgather.html#jax.experimental.multihost_utils.process_allgather)

`jax.experimental.multihost_utils.process_allgather()`

Alternatively, to print or otherwise perform Python operations on only
process-local data, we can access `z.addressable_shards`

. Accessing that
attribute does not require any communication, so any subset of processes can do
it without needing the others. That attribute is not available under a
[ jax.jit()](_autosummary/jax.jit.html#jax.jit).

### Running on a subset of devices[#](#running-on-a-subset-of-devices)

In the above examples, we used global meshes over all devices. Multi-controller JAX also supports meshes over just a subset of devices, which is useful for running different computations concurrently on different devices.

Let’s define a mesh that includes just half of the global devices and
place some data on it. We’ll use the `devices`

arg of `jax.make_mesh`

to
indicate which devices to use.

```
num_devices = jax.device_count() // 2
mesh = jax.make_mesh((num_devices,), ('a',),
devices=jax.devices()[num_devices:],
axis_types=(jax.sharding.AxisType.Explicit,))
sharding = NamedSharding(mesh, P('a'))
data = np.arange(64).reshape((8, 8))
x = jax.device_put(data, sharding)
# inspect the sharding of the result
if jax.process_index() == 0:
jax.debug.visualize_array_sharding(x)
print()
print(x.sharding)
# inspect the data local to each host
print(f"Devices attached to process {jax.process_index()}: {jax.local_devices()}")
print(f"Addressable data for process {jax.process_index()}:")
for shard in x.addressable_shards:
print(f"device {shard.device} has local data {shard.data}")
```

The sharding, again on a four-host `v5litepod-16`

, looks like this:

```
┌───────────────────────┐
│ TPU 8 │
├───────────────────────┤
│ TPU 9 │
├───────────────────────┤
│ TPU 10 │
├───────────────────────┤
│ TPU 11 │
├───────────────────────┤
│ TPU 15 │
├───────────────────────┤
│ TPU 14 │
├───────────────────────┤
│ TPU 13 │
├───────────────────────┤
│ TPU 12 │
└───────────────────────┘
NamedSharding(mesh=Mesh('a': 8, axis_types=(Explicit,)), spec=PartitionSpec('a',), memory_kind=device)
```

Only processes 2 and 3 have local devices in the sharding; processes 0 and 1 don’t participate. Since process 0 has no addressable data in the array, it prints the following:

```
Devices attached to process 0: [TpuDevice(id=0, process_index=0, coords=(0,0,0), core_on_chip=0), TpuDevice(id=1, process_index=0, coords=(1,0,0), core_on_chip=0), TpuDevice(id=4, process_index=0, coords=(0,1,0), core_on_chip=0), TpuDevice(id=5, process_index=0, coords=(1,1,0), core_on_chip=0)]
Addressable data for process 0:
```

Process 1 prints something similar. Process 3, on the other hand, has half of the array’s data on its local devices, so it prints the following:

```
Devices attached to process 3: [TpuDevice(id=10, process_index=3, coords=(2,2,0), core_on_chip=0), TpuDevice(id=11, process_index=3, coords=(3,2,0), core_on_chip=0), TpuDevice(id=14, process_index=3, coords=(2,3,0), core_on_chip=0), TpuDevice(id=15, process_index=3, coords=(3,3,0), core_on_chip=0)]
Addressable data for process 3
device TPU_10(process=3,(2,2,0,0)) has local data [[16 17 18 19 20 21 22 23]]
device TPU_11(process=3,(3,2,0,0)) has local data [[24 25 26 27 28 29 30 31]]
device TPU_15(process=3,(3,3,0,0)) has local data [[32 33 34 35 36 37 38 39]]
device TPU_14(process=3,(2,3,0,0)) has local data [[40 41 42 43 44 45 46 47]]
```

Now let’s run the same computation as in `toy.py`

above with this array as
input. This time, only the devices attached to processes 2 and 3
participate, and the collective `jnp.sum`

replicates the result across only
those devices.

```
result = jnp.sum(jnp.sin(x))
print(f"process={jax.process_index()} got result: {result}")
```

Process 2 (and 3) can print the result:

```
process=2 got result: Array(0.09658563, dtype=float32)
```

Processes 0 and 1 have no participating devices, so they don’t have local copies of the result. Process 0 prints

```
process=0 got result: Array(shape=(), dtype=float32)
```

Keep in mind that each process must apply the same operations in the same order
*in processes that participate in the sharding*. In previous examples, all
processes participated. In this example, we could have run the computation only
in processes 2 and 3, but applying it in non-participating processes is fine
too and will produce an array with no local data, as in process 0 above.

### Transferring data across processes with `jax.device_put`

[#](#transferring-data-across-processes-with-jax-device-put)

[ jax.device_put()](_autosummary/jax.device_put.html#jax.device_put) can transfer data between devices across processes. As
with cross-process collectives, the data is transferred via high-speed
networking links like TPU ICI or NVLink when available. Cross-process

[must be called on all hosts that participate in either the source or destination sharding.](_autosummary/jax.device_put.html#jax.device_put)

`jax.device_put()`

An example use case is a pipeline-parallel program where each stage runs on a
different set of devices. After the first stage completes, use
[ jax.device_put()](_autosummary/jax.device_put.html#jax.device_put) to transfer the result to another set of devices for the
next stage of the pipeline. Here’s a simple illustration:

```
# Create a sharding that contains half of the global devices for the first
# stage of the pipeline.
num_devices = jax.device_count() // 2
mesh_first_half = jax.make_mesh((num_devices,), ('a',),
devices=jax.devices()[:num_devices],
axis_types=(jax.sharding.AxisType.Explicit,))
sharding_first_half = NamedSharding(mesh_first_half, P('a'))
# Create a sharding that contains the other half of the devices.
mesh_second_half = jax.make_mesh((num_devices,), ('a',),
devices=jax.devices()[num_devices:],
axis_types=(jax.sharding.AxisType.Explicit,))
sharding_second_half = NamedSharding(mesh_second_half, P('a'))
# Place the input data on the first mesh.
data = np.arange(64).reshape((8, 8))
x = jax.device_put(data, sharding_first_half)
# `f` is the first stage of the pipeline.
@jax.jit
def f(x):
# Arbitrary JAX computation.
return x
# `g` is the second stage of the pipeline
@jax.jit
def g(x):
# More JAX operations.
return x
# Run the first stage on the first set of devices.
y = f(x)
# Transfer the data to the second set of devices.
# `device_put` must be called in all processes that participate in either
# `y.sharding` or `sharding_second_half`, so it's important to call `y = f(x)`
# in all processes -- not just those that participate in the first stage -- so
# that we always have a reference to `y`.
z = jax.device_put(y, sharding_second_half)
# Run the second stage on the second set of devices.
result = g(z)
```

Thanks to JAX’s [Asynchronous dispatch](async_dispatch.html), [ jax.jit()](_autosummary/jax.jit.html#jax.jit) functions and/or

[s running on different devices will run in parallel if their inputs are ready. We can take advantage of this to implement a very simple example of microbatched pipeline parallelism:](_autosummary/jax.device_put.html#jax.device_put)

`jax.device_put()`

```
# Pipeline stage functions. Each stage will run on a different device.
pipeline_stages = [f, g, f, g]
devices = jax.devices()[:4]
microbatches = [np.arange(512**2).reshape((512, 512)) for _ in range(12)]
# Each microbatch is enqueued on each device sequentially, but each device
# conceptually has an independent queue of computations and transfers which can
# run in parallel across queues. For example, because there are no data
# dependencies between the microbatches, device 0 will immediately start a new
# microbatch once the previous is finished, overlapping with the `device_put` to
# device 1.
results = []
for mb in microbatches:
for d, s in zip(devices, pipeline_stages):
mb = jax.device_put(mb, d)
mb = s(mb)
results.append(mb)
```

Cross-process [ jax.device_put()](_autosummary/jax.device_put.html#jax.device_put) is currently supported only when the
source and destination shardings contain the same number of devices and have
the same shard shapes. If you’re finding this overly restrictive, please file a

[Github Issue](https://github.com/jax-ml/jax/issues).

## Making process-spanning arrays from external data[#](#making-process-spanning-arrays-from-external-data)

There are three main ways to create process-spanning [ jax.Array](_autosummary/jax.Array.html#jax.Array)s from
external data sources (e.g. numpy arrays from a data loader):

Create or load the full array on all processes, then shard onto devices using

;`jax.device_put()`

Create or load on each process an array representing just the data that will be locally sharded and stored on that process’s devices, then shard onto devices using

;`jax.make_array_from_process_local_data()`

Create or load on each process’s devices separate arrays, each representing the data to be stored on that device, then assemble them without any data movement using

.`jax.make_array_from_single_device_arrays()`


The latter two are most often used in practice, since it’s often too expensive to materialize the full global data in every process.

The toy example above uses [ jax.device_put()](_autosummary/jax.device_put.html#jax.device_put).

[ jax.make_array_from_process_local_data()](_autosummary/jax.make_array_from_process_local_data.html#jax.make_array_from_process_local_data) is often used for distributed data
loading. It’s not as general as

[, because it doesn’t directly specify which slice of the process-local data goes on each local device. This is convenient when loading data-parallel batches, because it doesn’t matter exactly which microbatch goes on each device. For example:](_autosummary/jax.make_array_from_single_device_arrays.html#jax.make_array_from_single_device_arrays)

`jax.make_array_from_single_device_arrays()`

```
# target (micro)batch size across the whole cluster
batch_size = 1024
# how many examples each process should load per batch
per_process_batch_size = batch_size // jax.process_count()
# how many examples each device will process per batch
per_device_batch_size = batch_size // jax.device_count()
# make a data-parallel mesh and sharding
mesh = jax.make_mesh((jax.device_count(),), ('batch'))
sharding = NamedSharding(mesh, P('batch'))
# our "data loader". each process loads a different set of "examples".
process_batch = np.random.rand(per_process_batch_size, 2048, 42)
# assemble a global array containing the per-process batches from all processes
global_batch = jax.make_array_from_process_local_data(sharding, process_batch)
# sanity check that everything got sharded correctly
assert global_batch.shape[0] == batch_size
assert process_batch.shape[0] == per_process_batch_size
assert global_batch.addressable_shards[0].data.shape[0] == per_device_batch_size
```

[ jax.make_array_from_single_device_arrays()](_autosummary/jax.make_array_from_single_device_arrays.html#jax.make_array_from_single_device_arrays) is the most general way to
build a process-spanning array. It’s often used after performing

[s to send each device its required data. This is the lowest-level option, since all data movement is performed manually (via e.g.](_autosummary/jax.device_put.html#jax.device_put)

`jax.device_put()`

[). Here’s an example:](_autosummary/jax.device_put.html#jax.device_put)

`jax.device_put()`

```
shape = (jax.process_count(), jax.local_device_count())
mesh = jax.make_mesh(shape, ('i', 'j'))
sharding = NamedSharding(mesh, P('i', 'j'))
# manually create per-device data equivalent to np.arange(jax.device_count())
# i.e. each device will get a single scalar value from 0..N
local_arrays = [
jax.device_put(
jnp.array([[jax.process_index() * jax.local_device_count() + i]]),
device)
for i, device in enumerate(jax.local_devices())
]
# assemble a global array from the local_arrays across all processes
global_array = jax.make_array_from_single_device_arrays(
shape=shape,
sharding=sharding,
arrays=local_arrays)
# sanity check
assert (np.all(
jax.experimental.multihost_utils.process_allgather(global_array) ==
np.arange(jax.device_count()).reshape(global_array.shape)))
```

All of these methods can also be used to create arrays that span only a subset
of processes. For example, we can use [ jax.make_array_from_single_device_arrays()](_autosummary/jax.make_array_from_single_device_arrays.html#jax.make_array_from_single_device_arrays)
to create an array spanning the devices on processes 0 and 1:

```
num_participating_processes = 2
shape = (num_participating_processes, jax.local_device_count())
devices = (jax.local_devices(process_index=0) +
jax.local_devices(process_index=1))
mesh = jax.make_mesh(shape, ('i', 'j'),
axis_types=(jax.sharding.AxisType.Explicit,) * 2,
devices=devices)
sharding = NamedSharding(mesh, P('i', 'j'))
# manually create per-device data in processes 0 and 1.
if jax.process_index() in (0, 1):
local_arrays = [
jax.device_put(
jnp.array([[jax.process_index() * jax.local_device_count() + i]]),
device)
for i, device in enumerate(jax.local_devices())
]
else:
local_arrays = []
# assemble an array from the local_arrays across processes 0 and 1
array = jax.make_array_from_single_device_arrays(
shape=shape,
sharding=sharding,
arrays=local_arrays,
dtype=jnp.int32)
# sanity check
if jax.process_index() in (0, 1):
for shard in array.addressable_shards:
assert shard.data.size == 1
else:
assert not array.addressable_shards
```

---

## Source: https://jax.readthedocs.io/en/latest/fault_tolerance.html

# Fault Tolerant Distributed JAX[#](#fault-tolerant-distributed-jax)

Recall that [multi-controller JAX](https://docs.jax.dev/en/latest/multi_process.html) allows you to run a JAX program distributed
across multiple machines. By default, if *any* of these machines fail, then
*every* machine will fail. That is, multi-controller JAX is not
**fault-tolerant** by default.

This article has three parts. In the first part, we’ll explain the basics of how to write fault tolerant multi-controller JAX programs. In the second part, we’ll show some example fault-tolerant multi-controller JAX programs. In the third part, we’ll take a look under the covers at how multi-controller JAX implements fault tolerance.

Warning

JAX’s support for fault tolerance is still experimental. It currently only works fully on GPUs. It has rough edges, is probably buggy, and is subject to change. Use at your own risk.

Note

If you’re looking for an alternative to fault-tolerant multi-controller JAX
on TPU, consider [Pathways](https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/pathways-intro).

## Part 1: Fault Tolerance Basics[#](#part-1-fault-tolerance-basics)

### Fault Intolerant By Default[#](#fault-intolerant-by-default)

By default, multi-controller JAX programs are not fault tolerant. If *any*
process crashes, then *all* other processes will also intentionally crash. To
make this concrete, consider the following trivial script, `example.py`

, that
initializes multi-controller JAX by calling `jax.distributed.initialize`

and
then enters an infinite loop.

```
1from absl import app
2from absl import flags
3from collections.abc import Sequence
4import jax
5import time
6
7_PROCESS_ID = flags.DEFINE_integer("i", -1, "Process id")
8_NUM_PROCESSES = flags.DEFINE_integer("n", -1, "Number of processes")
9
10
11def main(_: Sequence[str]) -> None:
12 jax.distributed.initialize(
13 coordinator_address="localhost:9000",
14 num_processes=_NUM_PROCESSES.value,
15 process_id=_PROCESS_ID.value,
16 local_device_ids=[_PROCESS_ID.value],
17 heartbeat_timeout_seconds=10,
18 )
19 print(f'{jax.devices()=}')
20 print(f'{jax.local_devices()=}')
21 while True:
22 print(time.time())
23 time.sleep(1)
24
25
26if __name__ == "__main__":
27 app.run(main)
```

Run `example.py`

across four processes on a VM with four GPUs by running
the following four commands, each in a different terminal. The
`local_device_ids`

argument to `jax.distributed.initialize`

ensures each
process is assigned only one of the four GPUs. We’ll explain the
`heartbeat_timeout_seconds`

argument in just a second.

```
python example.py --i=0 --n=4 # in terminal 1
python example.py --i=1 --n=4 # in terminal 2
python example.py --i=2 --n=4 # in terminal 3
python example.py --i=3 --n=4 # in terminal 4
```

When you run these commands, you’ll see the processes dutifully printing out
the current time every second. Next, fail the fourth process: ```
pkill -9 -f
'python example.py --i=3 --n=4'
```

. After about ten seconds, the other
processes will also terminate and spit out error messages that look something
like this:

```
E0926 17:26:32.075402 157988 coordination_service_agent.cc:332] Polled an error from coordination service (this can be an error from this or another task).
F0926 17:26:32.075587 157988 client.h:77] Terminating process because the JAX distributed service detected fatal errors. This most likely indicates that another task died; see the other task logs for more details. Disable Python buffering, i.e. `python -u`, to be sure to see all the previous output. absl::Status: UNAVAILABLE: The following tasks are unhealthy (stopped sending heartbeats):
/job:jax_worker/replica:0/task:3
The tasks have crashed. Check the task logs for an earlier error, or scheduler events (e.g. preemption, eviction) to debug further.
RPC: /tensorflow.CoordinationService/PollForError [type.googleapis.com/tensorflow.CoordinationServiceError='']
```

When a process in a multi-controller JAX program notices that a peer process
has crashed, it decides to crash as well. The processes [share fate](https://en.wikipedia.org/wiki/Fate-sharing). The
`heartbeat_timeout_seconds`

argument to `jax.distributed.initialize`

determines how long a process waits before concluding a peer process has died.
The first three processes crash about ten seconds after you kill the fourth
because we passed `heartbeat_timeout_seconds=10`

as an argument to
`jax.distributed.initialize`

.

### Surviving Faults[#](#surviving-faults)

We can disable fate-sharing by adding the
`--xla_gpu_nccl_terminate_on_error=false`

flag and the
`jax_enable_recoverability`

configuration option to `example.py`

, as shown
below:

```
1import os
2os.environ['XLA_FLAGS'] = '--xla_gpu_nccl_terminate_on_error=false'
3
4from absl import app
5from absl import flags
6from collections.abc import Sequence
7import jax
8import time
9
10_PROCESS_ID = flags.DEFINE_integer("i", -1, "Process id")
11_NUM_PROCESSES = flags.DEFINE_integer("n", -1, "Number of processes")
12
13
14def main(_: Sequence[str]) -> None:
15 jax.config.update("jax_enable_recoverability", True)
16 jax.distributed.initialize(
17 coordinator_address="localhost:9000",
18 num_processes=_NUM_PROCESSES.value,
19 process_id=_PROCESS_ID.value,
20 local_device_ids=[_PROCESS_ID.value],
21 heartbeat_timeout_seconds=10,
22 )
23 print(f'{jax.devices()=}')
24 print(f'{jax.local_devices()=}')
25 while True:
26 print(time.time())
27 time.sleep(1)
28
29
30if __name__ == "__main__":
31 app.run(main)
```

Again run the script across four processes and then kill the fourth. Notice that now, the other three processes happily continue executing.

Next try failing process 0. Notice that all four processes terminate with error messages that look something like the following:

```
E0929 17:42:48.594192 1044529 coordination_service_agent.cc:332] Polled an error from coordination service (this can be an error from this or another task).
F0929 17:42:48.594200 1044529 client.h:77] Terminating process because the JAX distributed service detected fatal errors. This most likely indicates that another task died; see the other task logs for more details. Disable Python buffering, i.e. `python -u`, to be sure to see all the previous output. absl::Status: UNAVAILABLE: Failed to send RPC to coordination service. Either the leader task was preempted/died/restarted unexpectedly or this task is experiencing network issues. Check earlier logs from 1) this task, 2) the leader (usually slice 0 task 0), and 3) cluster scheduler to debug further.
Additional GRPC error information from remote target coordination_service while calling /tensorflow.CoordinationService/PollForError:
:UNKNOWN:Error received from peer {grpc_message:"Socket closed", grpc_status:14}
```

Process 0 is special. If process 0 fails, every process will fail, even with
fate-sharing disabled. Why? Process 0 runs an RPC service called the
coordination service that all processes use to coordination with each other. If
the coordination service fails, all other processes have no choice but to fail.
See [Part 3: Implementation Details](#part3) for more details.

### Getting Stuck in Collectives[#](#getting-stuck-in-collectives)

`example.py`

is now able to survive faults, but the processes do not
communicate with each other at all. Any realistic multi-controller JAX program
would involve communication between the processes (otherwise, what’s the point
of using multi-controller JAX?). Let’s edit `example.py`

so that the
processes perform a collective `jnp.sum`

in every iteration of the loop.

```
1import os
2os.environ['XLA_FLAGS'] = '--xla_gpu_nccl_terminate_on_error=false'
3
4from absl import app
5from absl import flags
6from collections.abc import Sequence
7import jax
8import jax.numpy as jnp
9import time
10
11_PROCESS_ID = flags.DEFINE_integer("i", -1, "Process id")
12_NUM_PROCESSES = flags.DEFINE_integer("n", -1, "Number of processes")
13
14
15def main(_: Sequence[str]) -> None:
16 jax.config.update("jax_enable_recoverability", True)
17 jax.distributed.initialize(
18 coordinator_address="localhost:9000",
19 num_processes=_NUM_PROCESSES.value,
20 process_id=_PROCESS_ID.value,
21 local_device_ids=[_PROCESS_ID.value],
22 heartbeat_timeout_seconds=10,
23 )
24 print(f'{jax.devices()=}')
25 print(f'{jax.local_devices()=}')
26
27 n = jax.device_count()
28 jax.set_mesh(jax.make_mesh((n,), ("i",)))
29 x = jax.device_put(jnp.arange(n), jax.P("i"))
30 while True:
31 print(jnp.sum(x))
32 time.sleep(1)
33
34
35if __name__ == "__main__":
36 app.run(main)
```

In the highlighted code above, the processes create an array `x`

sharded
across the four processes and then perform a distributed `jnp.sum`

. Again run
the program and fail the fourth process. You’ll notice that the first three
process do not crash, but they do get *stuck*. By default, if a process fails
while participating in a distributed computation (like `jnp.sum`

), then the
rest of the processes participating in the computation will get stuck
*forever*.

### Cancelling Collectives[#](#cancelling-collectives)

We can avoid getting stuck by cancelling collectives with a failed participant. We can enable collective cancelling by providing a few more flags and environment variables, highlighted below.

```
1import os
2os.environ['XLA_FLAGS'] = ' '.join([
3 '--xla_gpu_nccl_terminate_on_error=false',
4 '--xla_gpu_nccl_async_execution=true',
5 '--xla_gpu_nccl_blocking_communicators=false',
6])
7os.environ['XLA_PYTHON_CLIENT_ABORT_COLLECTIVES_ON_FAILURE'] = '1'
8os.environ['XLA_PYTHON_CLIENT_USE_TFRT_GPU_CLIENT'] = '1'
9
10from absl import app
11from absl import flags
12from collections.abc import Sequence
13import jax
14import jax.numpy as jnp
15import time
16
17_PROCESS_ID = flags.DEFINE_integer("i", -1, "Process id")
18_NUM_PROCESSES = flags.DEFINE_integer("n", -1, "Number of processes")
19
20
21def main(_: Sequence[str]) -> None:
22 jax.config.update("jax_enable_recoverability", True)
23 jax.distributed.initialize(
24 coordinator_address="localhost:9000",
25 num_processes=_NUM_PROCESSES.value,
26 process_id=_PROCESS_ID.value,
27 local_device_ids=[_PROCESS_ID.value],
28 heartbeat_timeout_seconds=10,
29 )
30 print(f'{jax.devices()=}')
31 print(f'{jax.local_devices()=}')
32
33 # Don't do this. Use live_devices instead.
34 from jax.experimental.multihost_utils import _live_devices
35 _live_devices(jax._src.distributed.global_state.client, jax.devices())
36
37 n = jax.device_count()
38 jax.set_mesh(jax.make_mesh((n,), ("i",)))
39 x = jax.device_put(jnp.arange(n), jax.P("i"))
40 while True:
41 print(jnp.sum(x))
42 time.sleep(1)
43
44
45if __name__ == "__main__":
46 app.run(main)
```

We also need to insert a call to
`jax.experimental.multihost_utils._live_devices`

to make the script work. You
should normally not do this. You should instead use the `live_devices`

API
that we’ll introduce momentarily. For now, `_live_devices`

is a hack to get
the script working before we explain the proper API.

Again run the script and fail the fourth process. The first three processes
will be stuck in their call to `jnp.sum`

, but after about ten seconds, the
call will be cancelled and `jnp.sum`

will raise an exception that looks
something like this:

```
jaxlib._jax.XlaRuntimeError: FAILED_PRECONDITION: Task with incarnation id 3446767950926952685 is not connected
```

### Knowing Who’s Alive[#](#knowing-who-s-alive)

After a process dies, the remaining *alive* procesess need to learn who is dead
and who is alive. For this, we can use the core JAX fault tolerance API:
`live_devices`

. `live_devices`

is a context manager that takes a list of
devices as an argument and returns the subset of these devices that are alive.
Below, we edit `example.py`

to call `live_devices`

.

```
1import os
2os.environ['XLA_FLAGS'] = ' '.join([
3 '--xla_gpu_nccl_terminate_on_error=false',
4 '--xla_gpu_nccl_async_execution=true',
5 '--xla_gpu_nccl_blocking_communicators=false',
6])
7os.environ['XLA_PYTHON_CLIENT_ABORT_COLLECTIVES_ON_FAILURE'] = '1'
8os.environ['XLA_PYTHON_CLIENT_USE_TFRT_GPU_CLIENT'] = '1'
9
10from absl import app
11from absl import flags
12from collections.abc import Sequence
13from jax.experimental.multihost_utils import live_devices
14import jax
15import jax.numpy as jnp
16import time
17
18_PROCESS_ID = flags.DEFINE_integer("i", -1, "Process id")
19_NUM_PROCESSES = flags.DEFINE_integer("n", -1, "Number of processes")
20
21
22def main(_: Sequence[str]) -> None:
23 jax.config.update("jax_enable_recoverability", True)
24 jax.distributed.initialize(
25 coordinator_address="localhost:9000",
26 num_processes=_NUM_PROCESSES.value,
27 process_id=_PROCESS_ID.value,
28 local_device_ids=[_PROCESS_ID.value],
29 heartbeat_timeout_seconds=10,
30 )
31 print(f'{jax.devices()=}')
32 print(f'{jax.local_devices()=}')
33
34 while True:
35 try:
36 with live_devices(jax.devices()) as devices:
37 print(f'{devices=}')
38 n = len(devices)
39 jax.set_mesh(jax.make_mesh((n,), ("i",), devices=devices))
40 x = jax.device_put(jnp.arange(n), jax.P("i"))
41 print(jnp.sum(x))
42 except Exception as e:
43 print('FAIL:', e)
44 else:
45 print('PASS')
46 time.sleep(1)
47
48
49if __name__ == "__main__":
50 app.run(main)
```

In the highlighted code above, we call `live_devices`

with all devices
(`jax.devices()`

) to get the set `devices`

of live devices. We then shard
array `x`

over these devices and perform a `jnp.sum`

. If a process fails
while executing the `jnp.sum`

, then `jnp.sum`

will be cancelled and raise
an exception on the remaining live devices. Technically, the collective is not
guaranteed to fail. We’ll revisit this in [Atomicity](#atomicity). For now, assume it
will fail.

Note

`jax.devices()`

always returns the set of *all* devices, even if some of
these devices are on failed processes. Use
`jax.experimental.multihost_utils.live_devices`

to learn which of these
devices are live.

Again run the script and fail the fourth process. Notice that the remaining
three alive processes catch the exception raised by `jnp.sum`

and continue to
the next iteration of the while loop. In this next iteration, `devices`

does
not include the device on the failed fourth process. The three alive processes
continue to execute correctly even though the fourth process is dead.

Next, restart the fourth process. Notice that after the fourth process
restarts, its device is again included in the set of alive devices returned by
`live_devices`

. All four processes then continue executing normally.

At first blush, `live_devices`

seems trivial. You give it a list of devices,
and it returns the ones that are alive. How complicated can that be?
Unfortunately, as with [many things in distributed systems](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing), there are a lot
subtleties to iron out. Next, we explain the **barrier** semantics and
**atomicity** properties of `live_devices`

.

### Barrier Semantics[#](#barrier-semantics)

Recall that every process in a [multi-controller JAX](https://docs.jax.dev/en/latest/multi_process.html) program should run in
lockstep. The processes should execute the same instructions in the same order.
Failing to do so will *almost certainly* lead to deadlocks, crashes, or
anomalous behavior.

In the context of `live_devices`

, we need to ensure that every process agrees
on which processes are currently alive. This is difficult to ensure because
every process is executing independently at potentially different speeds and
processes can fail at any time. Consider again the `example.py`

script from
above running on four processes. Imagine process 1 and 2 call `live_devices`

,
then process 4 fails, and then process 3 calls `live_devices`

. Process 1 and
2 might think process 4 is alive while process 3 thinks it is dead.

To avoid situations like these, `live_devices`

guarantees that it returns the
same set of live devices to every process. It accomplishes this using a
barrier. A call to `live_devicess(devices)`

blocks until every live process
hosting a device in `devices`

has also called `live_devices`

. Once every
live process is in the `live_devices`

barrier, `live_devices`

returns the
same set of live devices to every process.

Important

`live_devices`

uses a barrier to ensure that it will *always* return the
same set of live devices to every live process.

Because `live_devices`

implements a barrier it is susceptible to deadlock if
used improperly. We recommend only having a single `with live_devices`

block
in a program. Multiple calls to `live_devices`

is hard to reason about and
can lead to deadlock.

See [Part 3: Implementation Details](#part3) for details on how the `live_devices`

barrier is implemented
as well as a formal semantics based on [linearizability](https://cs.brown.edu/~mph/HerlihyW90/p463-herlihy.pdf).

### Atomicity[#](#atomicity)

A distributed computation is **atomic** if every participant in the computation
agrees on whether the operation succeeds or fails. In the `example.py`

script
above, we saw that when a process failed during the execution of a `jnp.sum`

,
then `jnp.sum`

would abort and raise an exception on the remaining live
processes. So `jnp.sum`

is atomic?

Unfortunately, it’s not.

When a process fails during the execution of a collective operation (like
`jnp.sum`

), the remaining processes may cancel the operation and raise an
exception or they may complete the operation successfully. Collective
operations in JAX do not have any inherent atomicity properties.

If collective operations are not atomic, however, then multi-controller JAX processes might diverge. For example, if a process fails during a training step of a machine learning model, some processes might detect the failure and roll the model back to a checkpoint while other processes might think the step succeeded and keep training.

To avoid the complexities of non-atomic execution, `live_devices`

provides
its own atomicity guarantees despite the fact that collectives are not atomic.
Specifically, the body of a `with live_devices`

block is guaranteed to either
complete successfully on all processes or raise an exception on all processes.
More concretely, if we consider the code snippet below, either every process
executes branch A or every process executes branch B. It is impossible for some
processes to execute A while others execute B.

```
try:
with live_devices(jax.devices()) as devices:
...
except Exception as e:
... # Branch A
else:
... # Branch B
```

Warning

A `with live_devices`

block does not guarantee atomicity if the code
block non-deterministically raises exceptions for reasons other than
collectives that fail because of a crashed process. For example, if one
process raises an exception because it runs out of memory, this exception
will not be propagated to the other processes.

Recall that JAX uses [asynchronous dispatch](https://docs.jax.dev/en/latest/async_dispatch.html). Operations like `jnp.sum`

do
not block until the operation is complete. Instead, they return `jax.Arrays`

that act as futures. This asynchrony can interact with `live_devices`

in
unexpected ways. For example, consider the following code that performs a
`jnp.sum`

, assigns the result to `y`

, and then prints `y`

:

```
x = ...
y = ...
try:
with live_devices(jax.devices()) as devices:
y = jnp.sum(x)
except Exception as e:
... # Branch A
else:
... # Branch B
print(y)
```

Imagine that the `with live_devices`

block executes successfully on all
processes. That is, all processes execute branch B. This only guarantees that
every process successfully created a future and assigned it to `y`

. The
actual computation of the `jnp.sum`

may be delayed until outside the block.
Thus, some processes might successfully complete the `jnp.sum`

and print the
value of `y`

while other processes fail to complete the `jnp.sum`

and raise
an exception when trying to print `y`

.

To avoid this, use `jax.block_until_ready`

to ensure that computations are
performed within the `with live_devices`

block. The code snippet below, which
now calls `jax.block_until_ready`

when assigning to `y`

, guarantees that
every process will successfully execute the `jnp.sum`

or every process will
raise an exception.

```
x = ...
y = ...
try:
with live_devices(jax.devices()) as devices:
y = jax.block_until_ready(jnp.sum(x))
except Exception as e:
... # Branch A
else:
... # Branch B
print(y)
```

See [Part 3: Implementation Details](#part3) for details on how atomicity is implemented.

## Part 2: Examples[#](#part-2-examples)

`live_devices`

is not a panacea; it is a tool. It does not magically make
multi-controller JAX programs fault tolerant. Rather, it allows you to
implement fault tolerance yourself in the way that is best for your
application.

The exact details of how you implement fault-tolerance will vary greatly based
on the nature of your application. In this section, we present some examples of
how to use `live_devices`

. The examples are meant to be illustrative but not
prescriptive. There are many other ways to implement fault tolerance.

### Example 1: Fault Tolerant Data Parallel Training[#](#example-1-fault-tolerant-data-parallel-training)

In this example, we train a trivial single-parameter linear model (\(y = \alpha x\)) with data parallelism across four processes. The example is contrived—you would never train a model with a single parameter across four machines—but we intentionally keep the model simple to focus on fault tolerance.

Data parallelism makes implementing fault tolerance relatively straightforward. Because every process has a full copy of the model weights, if a process fails, we can simply ignore it and continue training. This example tolerates an arbitrary number of process failures (excluding process 0), but once a process fails, we assume it does not recover. The next example shows how to handle process recovery.

First, we set some flags to disable fate-sharing and enable collective cancelling. We also make the necessary imports and define some flags.

```
1import os
2os.environ['XLA_FLAGS'] = ' '.join([
3 '--xla_gpu_nccl_terminate_on_error=false',
4 '--xla_gpu_nccl_async_execution=true',
5 '--xla_gpu_nccl_blocking_communicators=false',
6])
7os.environ['XLA_PYTHON_CLIENT_ABORT_COLLECTIVES_ON_FAILURE'] = '1'
8os.environ['XLA_PYTHON_CLIENT_USE_TFRT_GPU_CLIENT'] = '1'
9
10from absl import app
11from absl import flags
12from collections.abc import Sequence
13from jax.experimental.multihost_utils import live_devices
14import jax
15import jax.numpy as jnp
16import time
17
18_PROCESS_ID = flags.DEFINE_integer("i", -1, "Process id")
19_NUM_PROCESSES = flags.DEFINE_integer("n", -1, "Number of processes")
```

Next, we define a `replicated`

function that returns an array replicated
across a set of devices. Note that `replicated`

doesn’t actually move any
data. It assumes the argument `x`

already has equal value across all
processes. It simply returns a new view of that data, in a process-spanning
jax.Array with a replicated sharding.

```
21def replicated(x: jax.Array, devices: list[jax.Device]):
22 """Return x replicated across the provided devices.
23
24 Note that replicated(x) doesn't actually move any data. It simply creates a
25 logically replicated array with x as the local replica.
26 """
27 n = len(devices)
28 mesh = jax.make_mesh((n, ), ("i", ), devices=devices)
29 spec = jax.sharding.PartitionSpec(None)
30 sharding = jax.sharding.NamedSharding(mesh, spec)
31 shards = [
32 jax.device_put(x.addressable_shards[0].data, d) for d in devices
33 if d.process_index == jax.process_index()
34 ]
35 return jax.make_array_from_single_device_arrays(x.shape, sharding, shards)
```

We define a similar `sharded`

function that returns an array sharded across a
set of devices. Again, `sharded`

is not actually moving any data between
processes.

```
38def sharded(x: jax.Array, devices: list[jax.Device]):
39 """Return x sharded across the provided devices.
40
41 Note that sharded(x) doesn't actually move any data. It simply creates a
42 logically sharded array. x should have the same shape as the global array.
43 """
44 n = len(devices)
45 mesh = jax.make_mesh((n, ), ("i", ), devices=devices)
46 spec = jax.sharding.PartitionSpec("i")
47 sharding = jax.sharding.NamedSharding(mesh, spec)
48 m = sharding.addressable_devices_indices_map(x.shape)
49 shards = [jax.device_put(x[m[d]], d) for d in jax.local_devices()]
50 return jax.make_array_from_single_device_arrays(x.shape, sharding, shards)
```

Now, we’re ready to start writing our training loop. We begin by initializing
multi-controller JAX by calling `jax.distributed.initialize`

.

```
53def main(_: Sequence[str]) -> None:
54 # Parse command line arguments and initialize multi-controller JAX.
55 jax.config.update("jax_enable_recoverability", True)
56 jax.distributed.initialize(coordinator_address="localhost:8000",
57 process_id=_PROCESS_ID.value,
58 num_processes=_NUM_PROCESSES.value,
59 local_device_ids=[_PROCESS_ID.value],
60 heartbeat_timeout_seconds=10)
61 print(f'{jax.devices()=}')
62 print(f'{jax.local_devices()=}')
```

Then, we define our simple linear model, generate some random training data, and initialize some basic hyperparameters.

```
64 # Initialize the model's weights.
65 keys = iter(jax.random.split(jax.random.key(seed=42), num=3))
66 weights = jax.random.normal(next(keys), shape=(1, ))
67
68 # We'll learn a trivial linear model: a*x.
69 def predict(weights, X):
70 return weights * X
71
72 # We'll use mean squared error loss.
73 def loss(weights, X, Y):
74 return jnp.mean((predict(weights, X) - Y)**2)
75
76 # Initialize the (noisy) training data with a=10.
77 X = jax.random.permutation(next(keys), jnp.arange(-300., 300.))
78 Y = 10 * X + jax.random.normal(next(keys), X.shape)
79
80 # Hyperparameters.
81 loss_and_grad = jax.jit(jax.value_and_grad(loss))
82 learning_rate = 1e-6
83 device_batch_size = 10
```

Finally, we enter the main training loop.

```
85 step = 0
86 while True:
87 try:
88 with live_devices(jax.devices()) as devices:
89 print(f'=== Running step {step} with live devices = {devices} ===')
90
91 # Replicate the model weights.
92 weights = replicated(weights, devices)
93
94 # Shard the batch.
95 batch_size = device_batch_size * len(devices)
96 start = (step * batch_size) % len(X)
97 stop = start + batch_size
98 X_batch = sharded(X[start:stop], devices)
99 Y_batch = sharded(Y[start:stop], devices)
100
101 # Compute gradients and update weights.
102 l, grad = loss_and_grad(weights, X_batch, Y_batch)
103 new_weights = jax.block_until_ready(weights - learning_rate * grad)
104 except Exception as e:
105 print(f'Step {step} failed: {e}')
106 else:
107 print(f'Step {step} succeeded: loss = {l}')
108 step += 1
109 weights = new_weights
110
111 time.sleep(1)
```

Every iteration of the loop, we call

`live_devices`

to learn which devices are currently alive.We then ensure that the model weights are replicated across these devices and ensure that the training data is sharded across these devices. Note that this doesn’t actually move any data between the devices; it simply creates JAX arrays with the appropriate replication and sharding metadata.

We call

`loss_and_grad`

to compute the gradient of the weights with respect to the current batch of data and then compute the new weights. Notice that we assign the new weights to`new_weights`

rather than assigning to`weights`

in case the training step fails. We also call`jax.block_until_ready`

to ensure that every process has computed the new weights when we exit the`live_devices`

block.If no processes failed during the execution of the training step, then the

`else`

branch is taken. The step is incremented, and`weights`

is updated. Otherwise, an exception will be raised and the`except`

branch is taken. In this case, we do not update`step`

or`weights`

and retry the step on the next iteration with the new set of live devices.

Here is the full example:

```
1import os
2os.environ['XLA_FLAGS'] = ' '.join([
3 '--xla_gpu_nccl_terminate_on_error=false',
4 '--xla_gpu_nccl_async_execution=true',
5 '--xla_gpu_nccl_blocking_communicators=false',
6])
7os.environ['XLA_PYTHON_CLIENT_ABORT_COLLECTIVES_ON_FAILURE'] = '1'
8os.environ['XLA_PYTHON_CLIENT_USE_TFRT_GPU_CLIENT'] = '1'
9
10from absl import app
11from absl import flags
12from collections.abc import Sequence
13from jax.experimental.multihost_utils import live_devices
14import jax
15import jax.numpy as jnp
16import time
17
18_PROCESS_ID = flags.DEFINE_integer("i", -1, "Process id")
19_NUM_PROCESSES = flags.DEFINE_integer("n", -1, "Number of processes")
20
21def replicated(x: jax.Array, devices: list[jax.Device]):
22 """Return x replicated across the provided devices.
23
24 Note that replicated(x) doesn't actually move any data. It simply creates a
25 logically replicated array with x as the local replica.
26 """
27 n = len(devices)
28 mesh = jax.make_mesh((n, ), ("i", ), devices=devices)
29 spec = jax.sharding.PartitionSpec(None)
30 sharding = jax.sharding.NamedSharding(mesh, spec)
31 shards = [
32 jax.device_put(x.addressable_shards[0].data, d) for d in devices
33 if d.process_index == jax.process_index()
34 ]
35 return jax.make_array_from_single_device_arrays(x.shape, sharding, shards)
36
37
38def sharded(x: jax.Array, devices: list[jax.Device]):
39 """Return x sharded across the provided devices.
40
41 Note that sharded(x) doesn't actually move any data. It simply creates a
42 logically sharded array. x should have the same shape as the global array.
43 """
44 n = len(devices)
45 mesh = jax.make_mesh((n, ), ("i", ), devices=devices)
46 spec = jax.sharding.PartitionSpec("i")
47 sharding = jax.sharding.NamedSharding(mesh, spec)
48 m = sharding.addressable_devices_indices_map(x.shape)
49 shards = [jax.device_put(x[m[d]], d) for d in jax.local_devices()]
50 return jax.make_array_from_single_device_arrays(x.shape, sharding, shards)
51
52
53def main(_: Sequence[str]) -> None:
54 # Parse command line arguments and initialize multi-controller JAX.
55 jax.config.update("jax_enable_recoverability", True)
56 jax.distributed.initialize(coordinator_address="localhost:8000",
57 process_id=_PROCESS_ID.value,
58 num_processes=_NUM_PROCESSES.value,
59 local_device_ids=[_PROCESS_ID.value],
60 heartbeat_timeout_seconds=10)
61 print(f'{jax.devices()=}')
62 print(f'{jax.local_devices()=}')
63
64 # Initialize the model's weights.
65 keys = iter(jax.random.split(jax.random.key(seed=42), num=3))
66 weights = jax.random.normal(next(keys), shape=(1, ))
67
68 # We'll learn a trivial linear model: a*x.
69 def predict(weights, X):
70 return weights * X
71
72 # We'll use mean squared error loss.
73 def loss(weights, X, Y):
74 return jnp.mean((predict(weights, X) - Y)**2)
75
76 # Initialize the (noisy) training data with a=10.
77 X = jax.random.permutation(next(keys), jnp.arange(-300., 300.))
78 Y = 10 * X + jax.random.normal(next(keys), X.shape)
79
80 # Hyperparameters.
81 loss_and_grad = jax.jit(jax.value_and_grad(loss))
82 learning_rate = 1e-6
83 device_batch_size = 10
84
85 step = 0
86 while True:
87 try:
88 with live_devices(jax.devices()) as devices:
89 print(f'=== Running step {step} with live devices = {devices} ===')
90
91 # Replicate the model weights.
92 weights = replicated(weights, devices)
93
94 # Shard the batch.
95 batch_size = device_batch_size * len(devices)
96 start = (step * batch_size) % len(X)
97 stop = start + batch_size
98 X_batch = sharded(X[start:stop], devices)
99 Y_batch = sharded(Y[start:stop], devices)
100
101 # Compute gradients and update weights.
102 l, grad = loss_and_grad(weights, X_batch, Y_batch)
103 new_weights = jax.block_until_ready(weights - learning_rate * grad)
104 except Exception as e:
105 print(f'Step {step} failed: {e}')
106 else:
107 print(f'Step {step} succeeded: loss = {l}')
108 step += 1
109 weights = new_weights
110
111 time.sleep(1)
112
113
114if __name__ == "__main__":
115 app.run(main)
```

### Example 2: Fault Tolerant Data Parallel Training With Recovery[#](#example-2-fault-tolerant-data-parallel-training-with-recovery)

Now, we modify the example above to allow failed processes to recover. When a process recovers, it needs to receive the current step and model weights. Because we assume process 0 never fails—recall that if process 0 fails, every process will fail—we have process 0 send the current step and weights to recovering processes.

First, we define `send`

and `recv`

functions that use a `shard_map`

to
send data from one device to another. The sender calls `send`

, and the
receiver calls `recv`

.

```
55def send(x: jax.Array, from_device: jax.Device, to_device: jax.Device):
56 """Sends x from one device to another."""
57 assert isinstance(x, jax.Array)
58 devices = [from_device, to_device]
59 psum = lambda x: jax.lax.psum(x, "i")
60 mesh = jax.make_mesh((2, ), ("i", ), devices=devices)
61 spec = jax.sharding.PartitionSpec(None)
62 x = replicated(x, [from_device, to_device])
63 shard_map.shard_map(psum, mesh=mesh, in_specs=spec, out_specs=spec)(x)
64
65
66def recv(x: jax.Array, from_device: jax.Device, to_device: jax.Device):
67 """Receives x from a matching send."""
68 assert isinstance(x, jax.Array)
69 to_device = jax.local_devices()[0]
70 devices = [from_device, to_device]
71 psum = lambda x: jax.lax.psum(x, "i")
72 mesh = jax.make_mesh((2, ), ("i", ), devices=devices)
73 spec = jax.sharding.PartitionSpec(None)
74 x = jnp.zeros_like(x)
75 x = replicated(x, [from_device, to_device])
76 return shard_map.shard_map(psum, mesh=mesh, in_specs=spec, out_specs=spec)(x)
```

`allgather`

performs an AllGather of a single float across a set of devices.

```
79def allgather(x: float, devices: list[jax.Device]) -> list[float]:
80 """Performs an AllGather across the provided devices."""
81 n = len(devices)
82 mesh = jax.make_mesh((n, ), ("i", ), devices=devices)
83 spec = jax.sharding.PartitionSpec('i')
84 p = lambda x: jax.lax.all_gather(x, "i", tiled=True)
85 f = jax.shard_map(p, mesh=mesh, in_specs=spec, out_specs=spec)
86 return jax.block_until_ready(f(np.array([x] * len(devices)))).addressable_shards[0].data
```

Finally, we modify the training loop to handle recovering processes, as shown in the highlighted code below.

```
121 step = 0
122 while True:
123 try:
124 with live_devices(jax.devices()) as devices:
125 print(f'=== Running step {step} with live devices = {devices} ===')
126
127 # Handle recovering devices. A device is recovering if its step doesn't
128 # match process 0's step. We assume process 0 never fails.
129 print('all gathering steps...')
130 steps = allgather(step, devices)
131 print(f'{steps=}')
132 recovering = [d for d, s in zip(devices, steps) if s != steps[0]]
133 for d in recovering:
134 # Process 0 sends weights and step to the recovering devices.
135 if jax.process_index() == 0:
136 print('sending...')
137 send(weights, jax.devices()[0], d)
138 send(jnp.array([step]), jax.devices()[0], d)
139 elif d.process_index == jax.process_index():
140 print('receiving...')
141 weights = recv(weights, jax.devices()[0], d)
142 step = recv(jnp.array([step]), jax.devices()[0], d)[0]
143
144 # Replicate the model weights.
145 weights = replicated(weights, devices)
146
147 # Shard the batch.
148 batch_size = device_batch_size * len(devices)
149 start = (step * batch_size) % len(X)
150 stop = start + batch_size
151 X_batch = sharded(X[start:stop], devices)
152 Y_batch = sharded(Y[start:stop], devices)
153
154 # Compute gradients and update weights.
155 l, grad = loss_and_grad(weights, X_batch, Y_batch)
156 new_weights = jax.block_until_ready(weights - learning_rate * grad)
157 except Exception as e:
158 print(f'Step {step} failed: {e}')
159 else:
160 print(f'Step {step} succeeded: loss = {l}')
161 step += 1
162 weights = new_weights
163
164 time.sleep(1)
```

Recovery is a two-step process. First, we need to detect which processes are recovering. Second, we need process 0 to send the step and weights to the recovering processes.

To detect which processes are recovering, we perform an AllGather on all live processes’ steps. When a failed process recovers, its

`step`

will be`0`

, while the`step`

on process`0`

will be some positive number, so if a process’ step is not equal to process 0’s step, then it is recovering.Then, we call the

`send`

and`recv`

functions we defined above to transfer the current step and model weights from process 0 to the recovering processes.

Here is the full example:

```
1import os
2os.environ['XLA_FLAGS'] = ' '.join([
3 '--xla_gpu_nccl_terminate_on_error=false',
4 '--xla_gpu_nccl_async_execution=true',
5 '--xla_gpu_nccl_blocking_communicators=false',
6])
7os.environ['XLA_PYTHON_CLIENT_ABORT_COLLECTIVES_ON_FAILURE'] = '1'
8os.environ['XLA_PYTHON_CLIENT_USE_TFRT_GPU_CLIENT'] = '1'
9
10from absl import app
11from absl import flags
12from collections.abc import Sequence
13from jax.experimental.multihost_utils import live_devices
14from jax.experimental import shard_map
15import jax
16import jax.numpy as jnp
17import numpy as np
18import time
19
20_PROCESS_ID = flags.DEFINE_integer("i", -1, "Process id")
21_NUM_PROCESSES = flags.DEFINE_integer("n", -1, "Number of processes")
22
23def replicated(x: jax.Array, devices: list[jax.Device]):
24 """Return x replicated across the provided devices.
25
26 Note that replicated(x) doesn't actually move any data. It simply creates a
27 logically replicated array with x as the local replica.
28 """
29 n = len(devices)
30 mesh = jax.make_mesh((n, ), ("i", ), devices=devices)
31 spec = jax.sharding.PartitionSpec(None)
32 sharding = jax.sharding.NamedSharding(mesh, spec)
33 shards = [
34 jax.device_put(x.addressable_shards[0].data, d) for d in devices
35 if d.process_index == jax.process_index()
36 ]
37 return jax.make_array_from_single_device_arrays(x.shape, sharding, shards)
38
39
40def sharded(x: jax.Array, devices: list[jax.Device]):
41 """Return x sharded across the provided devices.
42
43 Note that sharded(x) doesn't actually move any data. It simply creates a
44 logically sharded array. x should have the same shape as the global array.
45 """
46 n = len(devices)
47 mesh = jax.make_mesh((n, ), ("i", ), devices=devices)
48 spec = jax.sharding.PartitionSpec("i")
49 sharding = jax.sharding.NamedSharding(mesh, spec)
50 m = sharding.addressable_devices_indices_map(x.shape)
51 shards = [jax.device_put(x[m[d]], d) for d in jax.local_devices()]
52 return jax.make_array_from_single_device_arrays(x.shape, sharding, shards)
53
54
55def send(x: jax.Array, from_device: jax.Device, to_device: jax.Device):
56 """Sends x from one device to another."""
57 assert isinstance(x, jax.Array)
58 devices = [from_device, to_device]
59 psum = lambda x: jax.lax.psum(x, "i")
60 mesh = jax.make_mesh((2, ), ("i", ), devices=devices)
61 spec = jax.sharding.PartitionSpec(None)
62 x = replicated(x, [from_device, to_device])
63 shard_map.shard_map(psum, mesh=mesh, in_specs=spec, out_specs=spec)(x)
64
65
66def recv(x: jax.Array, from_device: jax.Device, to_device: jax.Device):
67 """Receives x from a matching send."""
68 assert isinstance(x, jax.Array)
69 to_device = jax.local_devices()[0]
70 devices = [from_device, to_device]
71 psum = lambda x: jax.lax.psum(x, "i")
72 mesh = jax.make_mesh((2, ), ("i", ), devices=devices)
73 spec = jax.sharding.PartitionSpec(None)
74 x = jnp.zeros_like(x)
75 x = replicated(x, [from_device, to_device])
76 return shard_map.shard_map(psum, mesh=mesh, in_specs=spec, out_specs=spec)(x)
77
78
79def allgather(x: float, devices: list[jax.Device]) -> list[float]:
80 """Performs an AllGather across the provided devices."""
81 n = len(devices)
82 mesh = jax.make_mesh((n, ), ("i", ), devices=devices)
83 spec = jax.sharding.PartitionSpec('i')
84 p = lambda x: jax.lax.all_gather(x, "i", tiled=True)
85 f = jax.shard_map(p, mesh=mesh, in_specs=spec, out_specs=spec)
86 return jax.block_until_ready(f(np.array([x] * len(devices)))).addressable_shards[0].data
87
88
89def main(_: Sequence[str]) -> None:
90 # Parse command line arguments and initialize multi-controller JAX.
91 jax.config.update("jax_enable_recoverability", True)
92 jax.distributed.initialize(coordinator_address="localhost:8000",
93 process_id=_PROCESS_ID.value,
94 num_processes=_NUM_PROCESSES.value,
95 local_device_ids=[_PROCESS_ID.value],
96 heartbeat_timeout_seconds=10)
97 print(f'{jax.devices()=}')
98 print(f'{jax.local_devices()=}')
99
100 # Initialize the model's weights.
101 keys = iter(jax.random.split(jax.random.key(seed=42), num=3))
102 weights = jax.random.normal(next(keys), shape=(1, ))
103
104 # We'll learn a trivial linear model: a*x.
105 def predict(weights, X):
106 return weights * X
107
108 # We'll use mean squared error loss.
109 def loss(weights, X, Y):
110 return jnp.mean((predict(weights, X) - Y)**2)
111
112 # Initialize the (noisy) training data with a=10.
113 X = jax.random.permutation(next(keys), jnp.arange(-300., 300.))
114 Y = 10 * X + jax.random.normal(next(keys), X.shape)
115
116 # Hyperparameters.
117 loss_and_grad = jax.jit(jax.value_and_grad(loss))
118 learning_rate = 1e-6
119 device_batch_size = 10
120
121 step = 0
122 while True:
123 try:
124 with live_devices(jax.devices()) as devices:
125 print(f'=== Running step {step} with live devices = {devices} ===')
126
127 # Handle recovering devices. A device is recovering if its step doesn't
128 # match process 0's step. We assume process 0 never fails.
129 print('all gathering steps...')
130 steps = allgather(step, devices)
131 print(f'{steps=}')
132 recovering = [d for d, s in zip(devices, steps) if s != steps[0]]
133 for d in recovering:
134 # Process 0 sends weights and step to the recovering devices.
135 if jax.process_index() == 0:
136 print('sending...')
137 send(weights, jax.devices()[0], d)
138 send(jnp.array([step]), jax.devices()[0], d)
139 elif d.process_index == jax.process_index():
140 print('receiving...')
141 weights = recv(weights, jax.devices()[0], d)
142 step = recv(jnp.array([step]), jax.devices()[0], d)[0]
143
144 # Replicate the model weights.
145 weights = replicated(weights, devices)
146
147 # Shard the batch.
148 batch_size = device_batch_size * len(devices)
149 start = (step * batch_size) % len(X)
150 stop = start + batch_size
151 X_batch = sharded(X[start:stop], devices)
152 Y_batch = sharded(Y[start:stop], devices)
153
154 # Compute gradients and update weights.
155 l, grad = loss_and_grad(weights, X_batch, Y_batch)
156 new_weights = jax.block_until_ready(weights - learning_rate * grad)
157 except Exception as e:
158 print(f'Step {step} failed: {e}')
159 else:
160 print(f'Step {step} succeeded: loss = {l}')
161 step += 1
162 weights = new_weights
163
164 time.sleep(1)
165
166
167if __name__ == "__main__":
168 app.run(main)
```

## Part 3: Implementation Details[#](#part-3-implementation-details)

We now take a deep dive into the architecture of multi-controller JAX and the
semantics and implementation of `live_devices`

. If you’re only interested in
writing fault-tolerant multi-controller JAX programs, the first two parts of
this article suffice.

### The Coordination Service[#](#the-coordination-service)

When you launch a multi-controller JAX program, the first process (i.e. process
0) runs a standalone RPC server called the **coordination service**. Moreover,
all processes (including process 0) create an RPC client to the coordination
service. Concretely, the `coordinator_address`

argument of
[ jax.distributed.initialize()](_autosummary/jax.distributed.initialize.html#jax.distributed.initialize) is the address of the coordination service.
This argument lets process 0 know on what address to run the server, and it
lets all processes know which address to connect to.

The coordination service implements the multi-controller JAX **control plane**.
For example, it can perform a distributed barrier across all processes, and it
implements a key-value store that processes can use to exchange small amounts
of metadata. Note, however, that the **data plane** (e.g., all collective
operations on program data) is implemented directly between the processes and
does not involve the coordination service.

One of the most important functionalities of the coordination service is health checking. Every process periodically sends a heartbeat to the coordination service. If a process fails, it stops sending heartbeats. If the coordination service hasn’t received a heartbeat from a process for a while, it assumes the process has failed.

This is shown in the interactive visualization below. The coordination service is shown at the top and three multi-controller JAX processes are shown at the bottom. Note how the processes periodically send heartbeats to the controller, and the controller keeps track of the health of each process based on when it last received a heartbeat. Try failing process 2 by clicking the “Fail” button. Observe how the process stops sending heartbeats and the coordination service eventually considers the process dead.

By default, when the coordination service detects that a process has failed, it
sends a message to all other processes requesting that they self-terminate. In
other words, all processes in a multi-controller JAX program [share fate](https://en.wikipedia.org/wiki/Fate-sharing).
Again fail process 2 in the visualization below by clicking the “Fail” button
and observe how the coordination service notifies the other processes to fail.

This fate sharing means that multi-controller JAX programs are not at all
fault-tolerant. They are fault-*intolerant*. To enable fault-tolerance, we
need to do two things:

First, we need to remove fate sharing and allow processes to continue executing even when a peer process has died. This can be enabled using the

`jax_enable_recoverability`

option, as described in[Part 1: Fault Tolerance Basics](#part1). We’ll assume that this option is set.Second, we need to provide an API that processes can use to learn which processes are alive and which have failed. This is the

`live_devices`

API introduced in[Part 1: Fault Tolerance Basics](#part1).

There is a surprising amount of technical depth and subtlety in implementing
the `live_devices`

API. We’ll walk through the design and implementation of
the API step-by-step. We’ll begin by introducing a simpler `live_processes`

API and slowly improve it until we arrive at the `live_devices`

API.

### Live Processes[#](#live-processes)

Let’s try to design a new hypothetical JAX API: `jax.live_processes`

. As the
name suggests, we want `jax.live_processes()`

to return the set of all
currently alive processes. Here is a naive but (as we’ll see momentarily)
incorrect implementation. When a process calls `jax.live_processes()`

, it
sends an RPC request to the coordination service. Remember that the
coordination service already uses heartbeats to keep track of which processes
are dead and which are alive, so when it receives a `jax.live_processes`

request, it responds with the set of processes it thinks are alive.

This is illustrated below. Below each process is a “Call live_processes”
button. You can click this button to make the process call
`jax.live_processes`

. Note how the coordination service replies to a
`live_processess`

request with the set of alive processes. Fail process 2 by
clicking the “Fail” button and see how it affects later calls to
`jax.live_processes`

.

This naive implementation is simple but incorrect. It is crucial that all processes in a multi-controller JAX job execute the same instructions in the same order. If the processes start to diverge, by executing different code paths in the JAX program, the job will behave erratically. Most likely, it will crash or hang or produce garbage values, and most certainly it will be very hard to reason about.

Our naive implementation of `jax.live_processes`

can very easily lead to
divergence. For example, consider a multi-controller JAX job with three
processes. If process 0 and 1 both call `jax.live_processes`

around the same
time that process 2 fails, the coordination service might report to process 0
that all processes are alive but report to process 1 that only processes 0 and
1 are alive. Try to produce this scenario in the visualization below:

If processes disagree on which processes are alive, they will almost certainly
diverge. Thankfully, we can avoid this divergence by augmenting
`jax.live_processes`

with barrier semantics.

### Barrier Semantics[#](#id2)

Let’s change the implementation of `jax.live_processes`

so that when the
coordination service receives a `jax.live_processes()`

request, it does not
reply right away. Instead, the coordination service only replies once *every*
live process has called `jax.live_processes()`

. Once every alive process has
entered the `jax.live_processess()`

barrier, the coordination service returns
the set of live processes. Crucially, the coordination service returns the
*same* set of live processes to all processes, which prevents the processes
from diverging.

This is illustrated below. Note that coordination server now keeps track of
which devices are in the `live_processes`

barrier. Try calling
`live_processes`

from every process. Notice how the coordination service
doesn’t respond until every process has entered the barrier. Then fail process
2 and call `live_processes`

from process 0 and process 1.

### Formal Semantics[#](#formal-semantics)

Distributed systems are notoriously complex. Machines can fail at arbitrary
times, and network messages can be dropped, delayed, and reordered. In this
section, we introduce a formal semantics of the `jax.live_processes`

API to
help tame this complexity. Thinking rigorously about the semantics of
`jax.live_processes`

will help us understand the behavior of the API even in
pathological executions.

We’ll base the formal semantics of `jax.live_processes`

on
[linearizability](https://cs.brown.edu/~mph/HerlihyW90/p463-herlihy.pdf): a popular formalism used to define the semantics of many
distributed APIs. Concretely, we model our distributed system as a number of
processes. Each process serially performs a number of events. There are four
types of events:

A process can

**start**(👶). We’ll assume that when a process starts, it connects to the coordination service, so the coordination service is aware that is has started.A process can

**fail**(💀). Unlike starting, the coordination service may not immediately be aware that a process has failed.A process can

**send**a`jax.live_processes`

request to the coordination service.A process can

**receive**a reply to a`jax.live_processes`

request from the coordination service.

Below is a diagram of an execution of three processes: 0, 1, and 2. Time
progresses from left to right. First, all three processes start. This is shown
with the baby emojis. Then all three processes send `jax.live_processes`

requests to the coordination service. This is shown as the start of the thick
colored regions. Later, all three processes receive a reply from the
coordination service with `0,1,2`

as the set of live devices.

In this simple execution, it is clear that `jax.live_processes`

is behaving
correctly. We can formalize this intuition with the following formal semantics.

Attention

An execution is valid if whenever `jax.live_processes`

returns a set `P`

of live processes, there exists an instantaneous moment in time at which
every process in `P`

was in the `live_processes`

barrier and every other
process was dead. An implementation of `live_processes`

is correct if
it only allows for valid executions.

Later, we will amend these formal semantics to cover some subtle corner cases, but assume this simplified semantics for now.

In the example above, `live_processes`

returns `0,1,2`

. In the
visualization below, we show that there does exist an instantaneous moment of
time in which processes 0, 1, and 2 are all in the barrier and all other
processes (there are none) are dead. The moment in time is drawn as a vertical
red bar.

There is nothing special about the specific moment in time we chose in the
visualization above. All that’s important is that *there exists some* moment in
time where all processes in P are in the barrier and all other processes are
dead. There are many moments in time that satisfy this property, as shown
below.

In the next example, processes 0 and 1 start, call `live_devices`

, and
receive `0,1`

as a reply. Process 2 is dead throughout the execution.

This is a valid execution under our formal semantics because there exists a moment a time in which processes 0 and 1 are in the barrier and process 2 is dead.

In the following execution, process 0 calls `jax.live_processes`

and receives
a reply of `0`

. Process 1 calls `jax.live_processes`

, but dies before
receiving a reply.

Is this a valid execution? Yes. There exists a moment in time at which process
0 is in the barrier and process 1 is dead, as shown below. Even though process
1 called `jax.live_processes`

, it is not guaranteed that process 1 will be
included in the coordination service’s response.

For example, process 1’s `jax.live_processes`

request may have been dropped
by the network and never received by the coordination service. So from the
coordination service’s perspective, process 1 is thoroughly dead and never even
entered the `live_processes`

barrier.

What about the same exact execution, except that process 0 now receives the
reply `0,1`

from the coordination service?

Again, this is a valid execution, as witnessed below. Intuitively, the
coordination service could have received `jax.live_processes`

requests from
both processes 0 and 1 and sent the reply `0,1`

to both. While this reply was
in the network, process 1 failed. Thus, even though process 1 is dead when
process 0 receives a reply, the execution is still valid.

This point bears repeating. If `jax.live_processes`

returns a set `P`

of
processes, it does not mean that all processes in `P`

are *currently* alive
and all other processes are *currently* dead. It only means that *there existed
a point in time* when this was true.

In the following execution, process 1 calls `jax.live_processes`

and fails.
Later, process 0 starts, calls `jax.live_processes`

, and receives `0,1`

as
a reply.

Using the formal semantics described thus far, this is *not* a valid execution.
There is never a point in time where process 0 and 1 are both alive. However,
this *should* be a valid execution.

The reason has to do with the unavoidable fact that in a distributed system, it is impossible to detect failures with 100% accuracy. If the coordination service hasn’t received heartbeats from a process in a while, it considers the process dead. But, the coordination service cannot determine with 100% certainty when the process died or if the process is actually dead at all. Maybe the process died a long time ago, or maybe it died very recently, or maybe it is alive but on the other side of a network partition.

Let’s return to the execution above for a concrete example. Imagine the
coordination service successfully received process 1’s `live_processes`

request. Then, process 1 failed but the coordination service didn’t detect the
failure immediately. In the meantime, the coordination service received process
0’s `live_processes`

request. At this point, the coordination service thought
both processes were alive and saw that both processes were in the barrier, so
it naturally returned `0,1`

to both processes (though only process 0 received
the reply because process 1 was dead).

The coordination service thought process 1 was alive when it was dead. And sometimes the coordination service might think a process is dead when it is alive. Though not ideal, we need to accommodate executions like this because they are unavoidable.

We amend our formal semantics and allow ourselves to move a failure either earlier or later in time, though we cannot move a failure past a different event from the same process. Intuitively, we can move a failure from when it actually happened to the point in time when the coordination service thought it happened. Continuing the example above, we can delay the failure of process 1 to create a moment in time in which both processes 0 and 1 are in the barrier, witnessing the fact that the execution is valid.

Consider a similar execution below.

As is, there is no moment in time in which process 0 is alive and process 1 is
dead. However, if we move the failure of process 1 leftwards, there is. How
might such an execution arise? Imagine process 1 is partitioned from the
coordination service. The coordination service doesn’t receive any messages
from process 1, including its heartbeats. This leads the coordination service
to conclude that process 1 is dead, even though it isn’t. Then, the
coordination service receives process 0’s `live_processes`

request and
responds with `0`

.

We cannot move a process failure past the process’ other events, however. For
example, the following execution is *invalid* because no matter where we move
the failure of process 1, there is never a moment in time where both processes
are in the barrier.

With these formal semantics, we can make sense of even complex executions. For example, consider the following execution.

After moving some process failures, we see the execution is valid.

The following execution, on the other hand, is invalid.

### Atomicity[#](#id3)

Equipped with `jax.live_processes`

, let’s try to write some fault-tolerant
multi-controller JAX code.

```
step = 0
while True:
# Get the devices on all live processes.
procs = jax.live_processes()
devices = [d for d in jax.devices() if d.process_index in procs]
# Shard array x over these devices.
mesh = jax.make_mesh((len(devices),), ("i",), devices=devices)
spec = jax.sharding.PartitionSpec("i")
sharding = jax.sharding.NamedSharding(mesh, spec)
x = jax.make_array_from_process_local_data(sharding, np.ones(1))
# Try to perform a jnp.sum.
try:
print(jnp.sum(x))
except:
# jnp.sum failed.
pass
else:
# jnp.sum succeeded.
step += 1
```

The code repeatedly

calls

`jax.live_processes`

to learn which processes are alive,computes the set of devices on the healthy processes,

shards an array across these healthy devices,

performs a

`jnp.sum`

(i.e. AllReduce) on the array, andincrements

`step`

if the`jnp.sum`

succeeds.

This code *looks* correct, but it has a very subtle bug. Assume the `jnp.sum`

is being performed across a set of processes `P`

. If one (or more) of the
processes in `P`

fails during the execution of the `jnp.sum`

, then
`jnp.sum`

can behave differently on different processes. Some processes in
`P`

might see `jnp.sum`

return the correct result. Other processes might
see `jnp.sum`

raise an exception. Others might see `jnp.sum`

return an
incorrect result.

Warning

If a process fails during a collective operation, the operation may behave differently on different processes.

This means that the processes executing the code example above might diverge.
Some might increment `step`

, and some might not. In the trivial code example
above, this divergence is benign, but in a real program, the divergence would
likely lead to a crash, a deadlock, or garbage outputs. For example, if a
multi-controller JAX program is training a model with data parallelism and
starts to diverge, some processes might roll back their model weights to a
previous checkpoint while others continue training, leading to a
“franken-model” where nobody agrees on what the model weights are supposed to
be.

To write fault-tolerant code that does not diverge, we want **atomicity**. When
executing a block of code (like the `jnp.sum`

above), we either want *every*
process to run the code successfully, or *every* process to learn that the code
failed to execute successfully. We don’t want some processes succeeding and
others failing.

Thankfully, we can achieve atomicity with a very simple trick: call
`live_processes`

twice, once before a code block and once after. If all the
processes that were alive before the block are also alive after the block, then
the code block executed successfully on all live processes. On the other hand,
if any process died, then all remaining processes can agree the code block
failed to execute properly. Here’s a sketch of what that might look like:

```
# Get the set of live processes before the code block.
procs_before = jax.live_processes()
# Execute the code block.
...
# Get the set of live processes after the code block
procs_after = jax.live_processes()
if procs_before == procs_after:
# The code block executed successfully on all processes in
# procs_before.
pass
else:
# The code block did not execute successfully. All processes will
# agree it failed.
pass
```

The code above should give you a rough idea of how to use two calls to
`live_processes`

to achieve atomicity, but there are still a handful of small
issues we need to address before it is fully correct. For example,

What if the code block throws an exception? We need to catch the exception and still call

`live_processess`

the second time and then re-raise the exception.What if a process fails after the first call to

`live_processes`

and recovers before the second call? Wouldn’t the code block fail but the processes before and after be the same? Every time a process starts, it generates a random**incarnation id**. In addition to checking that the set of processes hasn’t changed, we also check that their incarnation ids haven’t changed.What if a process recovers and its first call to

`live_processes`

matches up with a different process’ second call to`live_processes`

? Couldn’t this lead to a deadlock? Yes. We can avoid the problem by only calling`live_processes`

at a single program point. We can be clever and use a single call to`live_processes`

for two purposes. It can be used to check that the set of processes hasn’t changed since the previous call to`live_processes`

, and it can be used to generate the set of live processes that should be used the next time the atomic code block is executed.

All these details are handled and abstracted away by the `live_devices`

API
introduced in [Part 1: Fault Tolerance Basics](#part1). `live_devices`

is a context manager that
guarantees the atomic execution of a block of code. In the code snippet below,
`devices`

is a list of the devices on all live processes. The code block
`A`

will execute atomically across these processes. That is, either every
process will see the code raise an exception (branch `B`

) or every process
will see the code succeed (branch `C`

).

```
try:
with live_devices() as devices:
pass # A
except Exception as e:
pass # B
else:
pass # C
```

### Cancelling Collectives[#](#id4)

As mentioned in [Cancelling Collectives](#canceling-collectives), if a process participating in a
collective fails, then the other participating processes get stuck forever. We
need to explicitly cancel these collectives to allow the alive participants to
make progress. While the `live_devices`

API is supported on all JAX backends
(i.e. CPU, GPU, TPU), cancelling collectives is only supported by the GPU
backend. Here, we briefly explain some of the implementation details behind
collective cancelling.

The GPU backend implements collectives using [NCCL](https://developer.nvidia.com/nccl), NVIDIA’s collective
communication library. When a set of processes wants to perform a collective,
they form a **NCCL communicator**. Processes can then repeatedly perform
collectives using this communicator. Creating a communicator is expensive—it
requires network communication—so the JAX backend caches communicators keyed
by the set of participating processes and their incarnation ids.

Internally, a JAX client polls the coordination service for the current status of every process. If a client ever detects that a process is dead or has restarted with a new incarnation id, then the client aborts all communicators with the failed incarnation id in its cache key.

---

## Source: https://jax.readthedocs.io/en/latest/distributed_data_loading.html

# Distributed data loading[#](#distributed-data-loading)

This high-level guide demonstrates how you can perform distributed data loading — when you run JAX in a [multi-host or multi-process environment](multi_process.html), and the data required for the JAX computations is split across the multiple processes. This document covers the overall approach for how to think about distributed data loading, and then how to apply it to *data-parallel* (simpler) and *model-parallel* (more complicated) workloads.

Distributed data loading is usually more efficient (the data is split across processes) but also *more complex* compared with its alternatives, such as: 1) loading the *full global data in a single process*, splitting it up and sending the needed parts to the other processes via RPC; and 2) loading the *full global data in all processes* and only using the needed parts in each process. Loading the full global data is often simpler but more expensive. For example, in machine learning the training loop can get blocked while waiting for data, and additional network bandwidth gets used per each process.

Note

When using distributed data loading, it’s important that each device (for example, each GPU or TPU) has access to the input data shard(s) that it needs to run the computation. This is what usually makes distributed data loading more complicated and challenging to implement correctly (compared with the alternatives described above). If the incorrect data shards end up on the wrong devices, the computation can still run without errors, since the computation has no way to know what the input data “should” be. However, the final result will often be incorrect, since the input data was different than intended.

## General approach for loading a `jax.Array`

[#](#general-approach-for-loading-a-jax-array)

Consider a case of creating a single [ jax.Array](_autosummary/jax.Array.html#jax.Array) from raw data not produced by JAX. These concepts apply beyond loading batched data records, such as any multi-process

[that wasn’t directly produced by a JAX computation. Examples include: 1) loading model weights from a checkpoint; or 2) loading a large spatially-sharded image.](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

Every [ jax.Array](_autosummary/jax.Array.html#jax.Array) has an associated

[, which describes which shard of the global data is required by each global device. When you create a](jax.sharding.html#jax.sharding.Sharding)

`Sharding`

[from scratch, you also need to create its](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

`Sharding`

. This is how JAX can understand how the data is laid out across devices. You can create whatever `Sharding`

you want. In practice, you usually pick a `Sharding`

based on what kind of parallelism strategy you are implementing (you will learn more about data and model parallelism in more detail later in this guide). You can also pick a `Sharding`

based on how the raw data will be produced within each process.Once you have defined a [ Sharding](jax.sharding.html#jax.sharding.Sharding), you can use

[to provide a list of devices needed to load data for within the current process. (Note: The term “addressable devices” is a more general version of “local devices”. The goal is to make sure that each process’s data loader provides the right data to all of that process’ local devices.](jax.sharding.html#jax.sharding.Sharding.addressable_devices)

`addressable_devices()`

### Examples[#](#examples)

For example, consider a `(64, 128)`

[ jax.Array](_autosummary/jax.Array.html#jax.Array) that you need to shard across 4 processes with 2 devices each (8 devices total). This will result in 8 unique data shards, one for each device. There are many ways to shard this

[. You can perform a 1D sharding across the second dimension of the](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

[, giving each device a](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

`(64, 16)`

shard, as demonstrated below:In the above figure, each data shard has its own color to indicate which process needs to load that shard. For example, you assume process `0`

’s 2 devices contain shards `A`

and `B`

, corresponding to the first `(64, 32)`

piece of the global data.

You can pick a different distribution of shards to devices. For example:

Here is another example — a 2D sharding:

However the [ jax.Array](_autosummary/jax.Array.html#jax.Array) happens to be sharded, you have to make sure that each process’s data loader is provided with/loads the required shard(s) of the global data. There are several high-level methods for achieving this: 1) load the global data in each process; 2) use a per-device data pipeline; 3) use a consolidated per-process data pipeline; 4) load data in some convenient way and then reshard inside computation.

### Option 1: Load the global data in each process[#](#option-1-load-the-global-data-in-each-process)

Using this option, each process:

Loads the full value needed; and

Transfers only the needed shards to that process’s local devices.


This is not an efficient approach to distributed data loading, since each process will throw away the data not needed by its local devices, and the total data ingested can be higher than necessary. But this option works and is relatively simple to implement, while the performance overhead may be acceptable for certain workloads (for example, if the global data is small).

### Option 2: Use a per-device data pipeline[#](#option-2-use-a-per-device-data-pipeline)

In this option, each process sets up a data loader for each of its local devices (that is, each device gets its own data loader for just the data shard it requires).

This is efficient in terms of the data loaded. It can also sometimes be simpler to consider each device independently rather than all of a process’s local devices at once (refer to *Option 3: Use a consolidated per-process data pipeline* below). However, having multiple concurrent data loaders can sometimes cause performance issues.

### Option 3: Use a consolidated per-process data pipeline[#](#option-3-use-a-consolidated-per-process-data-pipeline)

If you choose this option, each process:

Sets up a single data loader that loads the data required for all of its local devices; and then

Shards the local data before transferring to each local device.


This is the *most efficient way to do distributed loading*. However, it’s also the *most complex*, since logic is needed both to figure out which data is needed by each device, and to create a single data loading that loads only all of that data (and, ideally, no other extra data).

### Option 4: Load data in some convenient way, reshard inside computation[#](#option-4-load-data-in-some-convenient-way-reshard-inside-computation)

This option is more challenging to explain, but often easier to implement than the above options (from 1 to 3).

Imagine a scenario where it’s difficult or rather impossible to set up data loaders that load exactly the data you need, either for per-device or per-process loaders. However, it may still be possible to set up a data loader per process that loads `1 / num_processes`

of the data, just not in the right sharding.

Then, continuing with your 2D example sharding from before, assume it is easier for each process to load a single column of the data:

Then, you can create a [ jax.Array](_autosummary/jax.Array.html#jax.Array) with a

[representing the per-column data, pass that directly into the computation, and use](jax.sharding.html#jax.sharding.Sharding)

`Sharding`

[to immediately reshard the column-sharded input to the desired sharding. And since the data is resharded inside the computation, it will be resharded over the accelerator communication links (for example, TPU ICI or NVLink).](_autosummary/jax.lax.with_sharding_constraint.html#jax.lax.with_sharding_constraint)

`jax.lax.with_sharding_constraint()`

This Option 4 has similar benefits to Option 3 (*Use a consolidated per-process data pipeline*):

Each process still has a single data loader; and

The global data is loaded exactly once across all processes; and

The global data has the additional benefit of offering more flexibility in how the data is loaded.


However, this approach uses accelerator interconnect bandwidth to perform the resharding, which may slow down certain workloads. Option 4 also requires that the input data be expressed as a separate `Sharding`

, in addition to the target `Sharding`

.

## Replication[#](#replication)

Replication describes a process where multiple devices have the same data shard. The general options mentioned above (Options 1 through 4) still work with replication. The only difference is that some processes may end up loading the same data shards. This section describes full replication and partial replication.

### Full replication[#](#full-replication)

**Full replication** is a process where all devices have a full copy of the data (that is, the data “shard” is the entire array value).

In the below example, since there are 8 devices in total (2 per process), you will end up with 8 copies of the full data. Each copy of the data is unsharded, that is the copy lives on a single device:

### Partial replication[#](#partial-replication)

**Partial replication** describes a process where there are multiple copies of the data, and each copy is sharded across multiple devices. For a given array value, there are generally many possible ways to perform partial replication (Note: There is always a single fully-replicated [ Sharding](jax.sharding.html#jax.sharding.Sharding) for a given array shape).

Below are two possible examples.

In the first example below, each copy is sharded across the two local devices of a process, for a total of 4 copies. This means that each process will need to load the full global data, since its local devices will have a full copy of the data.

In the second example below, each copy is still sharded across two devices, but each device pair is spread across two different processes. Process `0`

(pink) and process `1`

(yellow) both need to load just the first row of the data, and process `2`

(green) and process `3`

(blue) both need to load just the second row of the data:

Now that you’ve gone over the high-level options for creating a [ jax.Array](_autosummary/jax.Array.html#jax.Array), let’s apply them to data loading for ML applications.

## Data parallelism[#](#data-parallelism)

In *pure data parallelism* (without model parallelism):

You replicate the model on each device; and

Each model replica (that is, each device) receives a different per-replica batch of data.


When representing the input data as a single [ jax.Array](_autosummary/jax.Array.html#jax.Array), the Array contains the data across all replicas for this step (this is called

*global batch*), with each shard of the

[containing a single per-replica batch. You can represent this as a 1D sharding across all devices (check the example below) — in other words, the global batch is composed of all the per-replica batches concatenated together across the batch axis.](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

Applying this framework, you may conclude that process `0`

should get the first quarter (2 out of 8) of the global batch, while process `1`

should get the second, and so on.

But how can you know what the first quarter is? And how do you make sure process `0`

gets the first quarter? Luckily, there’s a very important trick about data parallelism that means you don’t have to answer these questions and makes the whole setup simpler.

## Important trick about data parallelism[#](#important-trick-about-data-parallelism)

The trick is you don’t need to care which per-replica batch lands on which replica. Therefore, it doesn’t matter which process loads a batch. The reason is that since each device corresponds to a model replica performing the same thing, it doesn’t matter which device gets which per-replica batch within the global batch.

What this means is that you are free to rearrange the per-replica batches within the global batch. In other words, you are free to randomize which data shard each device gets.

For example:

Usually, rearranging the data shards of a [ jax.Array](_autosummary/jax.Array.html#jax.Array), as demonstrated above, is not a good idea – you’re effectively permuting the value of the

[! However, for data parallelism, the global batch order isn’t meaningful, and you are free to rearrange the per-replica batches in the global batch, as already mentioned before.](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

This simplifies data loading because it means each device just needs an independent stream of per-replica batches, which can be easily implemented in most data loaders by creating an independent pipeline per process and chunking the resulting per-process batch into per-replica batches.

This is an instance of the *Option 2: Consolidated per-process data pipeline*. You can also use other options (such as 0, 1 and 3, which are covered earlier in this document), but this one is relatively simple and efficient.

Here’s an example of how to implement this setup using tf.data:

```
import jax
import tensorflow as tf
import numpy as np
################################################################################
# Step 1: setup the Dataset for pure data parallelism (do once)
################################################################################
# Fake example data (replace with your Dataset)
ds = tf.data.Dataset.from_tensor_slices(
[np.ones((16, 3)) * i for i in range(100)])
ds = ds.shard(num_shards=jax.process_count(), index=jax.process_index())
################################################################################
# Step 2: create a jax.Array of per-replica batches from the per-process batch
# produced from the Dataset (repeat every step). This can be used with batches
# produced by different data loaders as well!
################################################################################
# Grab just the first batch from the Dataset for this example
per_process_batch = ds.as_numpy_iterator().next()
mesh = jax.make_mesh((jax.device_count(),), ('batch',))
sharding = jax.NamedSharding(mesh, jax.sharding.PartitionSpec('batch'))
global_batch_array = jax.make_array_from_process_local_data(
sharding, per_process_batch)
```

## Data + model parallelism[#](#data-model-parallelism)

In **model parallelism** you shard each model replica across multiple devices. If you use **pure model parallelism** (without data parallelism):

There’s just one model replica sharded across all devices; and

The data is (usually) fully replicated across all devices.


This guide considers a case where you use **both data and model parallelism**:

You shard each of the multiple model replicas over multiple devices; and

You partially replicate the data over each model replica — each device in the same model replica gets the same per-replica batch, and devices across model replicas get different per-replica batches.


### Model parallelism within a process[#](#model-parallelism-within-a-process)

For the purposes of data loading, the simplest approach can be to shard each model replica within the local devices of a single process.

For this example, let’s switch to 2 processes with 4 devices each (instead of 4 processes with 2 devices each). Consider a scenario where each model replica is sharded over the 2 local devices of a single process. This results in 2 model replicas per process and 4 model replicas total, as demonstrated below:

Here, once again, the input data is represented as a single [ jax.Array](_autosummary/jax.Array.html#jax.Array) with a 1D sharding where each shard is a per-replica batch with an exception:

Unlike in the pure data parallelism case, you introduce partial replication and make 2 copies of the 1D-sharded global batch.

This is because each model replica is composed of 2 devices that each need a copy of the per-replica batch.


Keeping each model replica within a single process can make things simpler because you can reuse the pure data parallelism setup described above, except you also need to replicate the per-replica batches:

Note

*It’s also very important to replicate the per-replica batches to the correct devices!* While the very important trick about data parallelism means you don’t care which batch ends up on which replica, *you do care that a single replica only gets a single batch*.

For example, this is OK:

However, if you’re not careful about which local device you load each batch onto, you may accidentally create unreplicated data, even though the [ Sharding](jax.sharding.html#jax.sharding.Sharding) (and the parallelism strategy) says the data is replicated:

JAX will raise an error if you accidentally create a [ jax.Array](_autosummary/jax.Array.html#jax.Array) with unreplicated data that should be replicated within a single process (this isn’t always true for model parallelism across processes though; see the next section).

Here’s an example of how to implement per-process model parallelism and data parallelism using `tf.data`

:

```
import jax
import tensorflow as tf
import numpy as np
################################################################################
# Step 1: Set up the Dataset with a different data shard per-process (do once)
# (same as for pure data parallelism)
################################################################################
# Fake example data (replace with your Dataset)
per_process_batches = [np.ones((16, 3)) * i for i in range(100)]
ds = tf.data.Dataset.from_tensor_slices(per_process_batches)
ds = ds.shard(num_shards=jax.process_count(), index=jax.process_index())
################################################################################
# Step 2: Create a jax.Array of per-replica batches from the per-process batch
# produced from the Dataset (repeat every step)
################################################################################
# Grab just the first batch from the Dataset for this example
per_process_batch = ds.as_numpy_iterator().next()
num_model_replicas_per_process = 2 # set according to your parallelism strategy
num_model_replicas_total = num_model_replicas_per_process * jax.process_count()
# Create an example `Mesh` for per-process data parallelism. Make sure all devices
# are grouped by process, and then resize so each row is a model replica.
mesh_devices = np.array([jax.local_devices(process_idx)
for process_idx in range(jax.process_count())])
mesh_devices = mesh_devices.reshape(num_model_replicas_total, -1)
# Double check that each replica's devices are on a single process.
for replica_devices in mesh_devices:
num_processes = len(set(d.process_index for d in replica_devices))
assert num_processes == 1
mesh = jax.sharding.Mesh(mesh_devices, ["model_replicas", "data_parallelism"])
# Shard the data across model replicas. You don't shard across the
# data_parallelism mesh axis, meaning each per-replica shard will be replicated
# across that axis.
sharding = jax.sharding.NamedSharding(
mesh, jax.sharding.PartitionSpec("model_replicas"))
global_batch_array = jax.make_array_from_process_local_data(
sharding, per_process_batch)
```

### Model parallelism across processes[#](#model-parallelism-across-processes)

It can get more interesting when model replicas are spread across processes, either:

Because a single replica can’t fit within a process; or

Because the device assignment just isn’t set up that way.


For example, going back to the previous setup of 4 processes with 2 devices each, if you assign devices to replicas like so:

This is the same parallelism strategy as the previous per-process model parallelism example – 4 model replicas each sharded across 2 devices. The only difference is the device assignment – each replica’s two devices are split across different processes, and each process is only responsible for one copy of each per-replica batch (but for two replicas).

Splitting the model replicas across processes like this may seem like an arbitrary and unnecessary thing to do (and in this example it arguably is), but actual deployments may end up with this kind of device assignment to best take advantage of the communication links between devices.

Data loading now becomes more complicated because some extra coordination is required across processes. In the pure data parallelism and per-process model parallelism cases, it was only important that each process loaded a unique data stream. Now certain processes must load the same data, and some must load different data. In the above example, processes `0`

and `2`

(in colors pink and green, respectively) must load the same 2 per-replica batches, and processes `1`

and `3`

(colors yellow and blue, respectively) must also load the same 2 per-replica batches (but different from process `0`

and `2`

’s batches).

Furthermore, it’s important that each process doesn’t mix up its 2 per-replica batches. While you don’t care which batch lands on which replica (the very important trick about data parallelism), you need to care that all the devices in a replica get the same batch. For example, this would be bad:

Note

As of August 2023, JAX cannot detect if [ jax.Array](_autosummary/jax.Array.html#jax.Array) shards across processes are supposed to be replicated but aren’t, and will produce wrong results when the computation is run. So be careful not to do this!

To get the correct per-replica batch on each device, you need to represent the global input data as the following [ jax.Array](_autosummary/jax.Array.html#jax.Array):

---

## Source: https://jax.readthedocs.io/en/latest/notebooks/colocated-python.html

# Colocated Python[#](#colocated-python)

NOTE: Colocated Python is currently an experimental API. Its functionality and interface are subject to change without following the standard JAX compatibility policy.

Colocated Python provides a uniform way to run Python code on the hosts associated with a set of JAX devices. If the JAX devices represent local devices, the Python code will run on the local host. If the JAX devices represent remote devices, the Python code will be shipped to run on the host of these remote devices. This is useful when building a multi-host ML system on top of JAX that is portable across multi-controller JAX environments (running JAX code on each host with accelerators) as well as single-controller JAX environments (running JAX code on a single host orchestrating other hosts with accelerators).

## Colocated CPU devices[#](#colocated-cpu-devices)

To use colocated Python, the first step is to obtain CPU devices colocated with
target accelerator devices.
`jax.experimental.colocated_python.colocated_cpu_devices`

provides a standard
way to do so.

```
import jax
import jax.experimental.colocated_python as colocated_python
devices = jax.devices()
cpu_devices = colocated_python.colocated_cpu_devices(devices)
print(cpu_devices)
```

```
[CpuDevice(id=0)]
```

As usual, the CPU devices can be used with JAX APIs.

```
cpu_mesh = jax.sharding.Mesh(cpu_devices, ["x"])
cpu_sharding = jax.sharding.NamedSharding(cpu_mesh, jax.P())
x = jax.device_put(1, cpu_sharding)
y = jax.jit(lambda x: x + 1)(x)
print(y)
```

```
2
```

## Colocated Python function[#](#colocated-python-function)

CPU devices can also be used to run Python code with colocated Python.

```
def f(x):
return x + 1
f = colocated_python.colocated_python(f)
y = f(x)
assert y.sharding == x.sharding
print(y)
```

```
2
```

Since colocated Python runs normal Python code, you can also perform I/O:

```
def f(x):
with open('/tmp/foo', 'w') as f:
f.write(str(x))
return x
f = colocated_python.colocated_python(f)
jax.block_until_ready(f(x))
```

```
Array(1, dtype=int32, weak_type=True)
```

Note the use of `jax.block_until_ready`

to ensure the Python code has
completed. In principle, colocated Python calls may run asynchronously, similar
to jitted function calls; the calls would return JAX arrays and do not block
until their output is produced. Thus, you should block on an output from a
colocated Python call if the completion of the execution is significant.

There exist cases where a colocated Python call runs synchronously.

If the colocated Python function is called without “specialization” (see below), the very first call will run synchronously. This is because the shape and sharding of the output must be known for asynchronous execution, and colocated Python has to run the Python code once to discover this information.

Some JAX backends do not yet fully support asynchronous execution, and will fall back to synchronous execution.


The wrapped Python code must use exactly the same set of devices in the input and the output. This is a requirement similar to jitted functions that represent an SPMD execution.

## Specialization[#](#specialization)

Specialization in colocated Python is a mechanism to supply extra information about the input, output, and execution of a colocated Python function, when the information cannot be inferred in advance, or you would like to ensure the colocated Python executions to happen precisely as specified.

First, functions wrapped in colocated Python has a `specialize`

method.
This method is used to create another colocated Python wrapped function
specialized with the supplied information.

`out_specs_fn`

is a function that takes a pytree of
`jax.ShapeDtypeStruct`

of the call inputs and returns a pytree of
`jax.ShapeDtypeStruct`

expected for the output. Calling this function is
analogous to jitted function tracing, but this function is separate from the
original Python code. This function runs on the caller side and not executed on
the devices.

```
def f(x):
return x + 1
f = colocated_python.colocated_python(f)
f = f.specialize(out_specs_fn=lambda x: x)
y = f(x)
assert y.sharding == x.sharding
```

`in_specs`

takes a concrete pytree (the top level is tuple) of
`jax.sharding.ShapeDtypeStruct`

expected for the input to the colocated
Python function call. This is used if a certain input spec must be used, or the
output specs function can be computed only for a concrete input spec.

```
import jax.numpy as jnp
def f(x):
return x + 1
f = colocated_python.colocated_python(f)
f = f.specialize(
in_specs=(
# args
(
jax.ShapeDtypeStruct(
shape=(), dtype=jnp.int32, sharding=cpu_sharding
),
),
# kwargs
{},
),
out_specs_fn=lambda x: jax.ShapeDtypeStruct(
shape=(), dtype=jnp.int32, sharding=cpu_sharding
),
)
f(x) # `x` must match the input spec.
```

```
Array(2, dtype=int32, weak_type=True)
```

`devices`

specifies a list of devices that the colocated Python function
should run on. Having `devices`

specialized lets a colocated Python function
without input arguments run.

```
def f():
with open('/tmp/foo', 'w') as f:
f.write('foo')
return
f = colocated_python.colocated_python(f)
f = f.specialize(devices=cpu_devices)
f() # Would be an error if `f` is not specialized with ``devices``.
```

## Colocated Python class[#](#colocated-python-class)

Colocated Python also supports wrapping Python classes. A real instance is created on the hosts associated with the devices, and the caller side will get a wrapper class that forwards all method calls to the real instance using colocated Python.

```
class Adder:
def __init__(self, increment):
print('Adder created')
self.increment = increment
def __del__(self):
print('Adder destroyed')
def add(self, x):
return x + self.increment
Adder = colocated_python.colocated_python_class(Adder)
adder = Adder(1)
x = jax.device_put(1, cpu_sharding)
y = adder.add(x)
print(y)
```

```
Adder created
2
```

When the wrapper class instance is destroyed, the real instance is destroyed as well. Note that this destruction will be asynchronous.

```
del adder
```

```
Adder destroyed
```

There are a few important semantic differences between colocated Python and normal Python.

A colocated Python class instance is created only on the hosts associated with the devices when any non-constructor method is called for the first time. In the above example,

`Adder(1)`

captures the constructor arguments`1`

, but the actual constructor call`Adder(1)`

on the hosts happens only when the first`adder.add(x)`

call is made. This is because it is unknown what hosts the`Adder`

instance should be created on until there is a call to its method.If the method(s) of the same wrapper class is called with inputs with different devices, the real instance may be created at different times on different hosts. If the first method call used CPU devices on host A, and the second method call used CPU devices on host B, the real instance will be created on host A during the first method call, and then on host B during the second method call.

The methods of colocated Python classes are not yet specializable. The support will be added in the future.


## Execution order and concurrency[#](#execution-order-and-concurrency)

Colocated Python provides “program order” execution. Even if colocated Python calls may be asynchronous (returning output JAX arrays without blocking), the calls will be executed in the same order as the order the calls are made in the user program. Thus, by default, colocated Python calls are sequentially executed.

Several use cases of colocated Python will benefit from concurrent execution. For example, one colocated Python call may take long time to return because it may be doing expensive file reads, while another colocated Python call may need to do file writes that are independent from the first one. This situation could expect two calls to run concurrently without blocking each other.

Colocated Python provides concurrent execution if colocated Python calls are made from different threads. For example, the below example would make two colocated Python calls to run concurrently.

```
import concurrent.futures
import time
def f(x):
time.sleep(1)
return x + 1
f = colocated_python.colocated_python(f)
f = f.specialize(out_specs_fn=lambda x: x) # Calls will be asynchronous.
with concurrent.futures.ThreadPoolExecutor(2) as executor:
fut1 = executor.submit(f, x)
fut2 = executor.submit(f, x)
# Will finish in approximately 1 second instead of 2 seconds.
jax.block_until_ready([fut1.result(), fut2.result()])
```

While calls from different threads run concurrently, on each thread, program ordering will continue to apply.

---

## Source: https://jax.readthedocs.io/en/latest/the-training-cookbook.html

# The Training Cookbook[#](#the-training-cookbook)

Traditionally, machine learning codebases rely on libraries to perform much of the bookkeeping and parameter wrangling necessary for training large, complex models. While convenient, these libraries can abstract the key functionality and core APIs offered in JAX. The purpose of this cookbook, therefore, is to demonstrate best practices (or “recipes”) for writing simple yet high-performance machine learning training code directly in JAX. Following the patterns documented below will prepare your machine learning workloads to maximally leverage our compiler (XLA) for performance and tractability. Most training scripts adhere roughly to the following structure:

```
def train_loop(config: Config):
record_writer = RecordWriter()
train_state = init_train_state(config)
train_state = jax.tree.map(jax.ref.new_ref, train_state)
batch = iter(get_dataset_on_device(config))
for step in range(config.num_train_steps):
metrics = train_step(config, train_state, next(batch))
record_writer({"step": step} | metrics)
```

For each line of code above, we will explain the best practices and showcase the core technologies we have assembled to empower you to write simple, yet unbelievably performant code in JAX. The code above is a segment of a self-contained, completely functional [companion script](https://github.com/jax-ml/jax/blob/main/docs/the-training-cookbook.py) in which we initialize a [Vaswani et al. (2017)](https://arxiv.org/abs/170.03762) Transformer decoder, define the training loss for next-token prediction, and [Adam optimizer](https://arxiv.org/abs/1412.6980), in pure JAX. The code therein is suited to TPUs, CPUs, and GPUs, as well as single- and multi-host systems. For that reason, we use the terms *device* or *accelerator* to refer interchangeably to the hardware JAX is primarily performing arithmetic on—whether it be a TPU, GPU, or CPU—and *host system* to refer to operations performed exclusively using the host CPU. In this guide, there are many aspects of the JAX APIs we will gloss over for the sake of expediency. These are available for you to peruse at your leisure in our API documentation. However, there is a central JAX concept that one must confront in detail for much of what follows to cohere.

## Device Mesh and Shardings[#](#device-mesh-and-shardings)

JAX employs the [Single Program, Multiple Data (SPMD)](https://en.wikipedia.org/wiki/Single_program,_multiple_data) model of parallelism. This means we write a single program that runs on multiple devices, using annotations to specify which part of the data each device is responsible for. The two primary concepts for this are the [ jax.sharding.Mesh](jax.sharding.html#jax.sharding.Mesh) and

`jax.P`

.### Device Mesh[#](#device-mesh)

A [ jax.sharding.Mesh](jax.sharding.html#jax.sharding.Mesh) is an arrangement of all our accelerators into a NumPy

`ndarray`

, together with string labels for the axes of the device array. The reason for using an array is that this allows for a very convenient annotation for how arrays should be partitioned across devices. For this introduction, we will use the notation of an ordered dictionary [[1]](#ordered), so that

`{"x": 2, "y": 4}`

refers to a device mesh of shape `(2, 4)`

with labeled axes `"x"`

and `"y"`

. To shard an array `param`

, we decorate it with a `jax.P`

, which is a tuple of `str | None`

elements of the same length as the dimensions of the array. The `jax.P`

specifies which axes of our array are to be sharded over which axes of devices. A more thorough account of the notation of shardings and sharded computations is available in [Introduction to parallel programming](sharded-computation.html#sharded-computation). Some common sharding strategies such as data parallel, fully sharded data parallel, and basic tensor parallelism will be covered in

[Achieving High Performance](#achieving-high-performance).

Example

Suppose we have a device mesh of `{"x": 2, "y": 4}`

and an array `param`

of shape `(32, 64, 64, 128)`

. If we shard this array with jax.P(None, “x”, “y”, None) `, we end up with shards of size ``(32, 32, 16, 128)` distributed across the devices. The `None`

indicates that an axis should not be sharded. JAX implicitly broadcasts trailing axes, so an identical sharding can be achieved more concisely with jax.P(None, “x”, “y”). As a result, the shorthand for a fully replicated array (of any dimension) is jax.P().

Example

More advanced mesh geometries are convenient when aligned with the communication hierarchy of our devices. Host-to-host communication is typically slower than accelerator-to-accelerator communication. Suppose we have two host machines, each with eight attached GPUs. One might arrange the devices into a mesh of `{"host": 2, "gpu": 8}`

. Then we can shard a parameter as follows:

```
param = jnp.zeros((256, 192), out_sharding=jax.P("gpu", None))
```

The whole of `param`

will be replicated twice, but within each host, it will be spread across the eight locally attached GPUs, with each GPU storing a shard of shape `(32, 192)`

in HBM. This is particularly useful for [Fully-Sharded Data Parallel (FSDP)](#fsdp-sharding).

## Train State Initialization[#](#train-state-initialization)

```
@jax.jit
def init_train_state(config: Config) -> dot_dict:
train_state = dot_dict()
train_state.params = init_param_state(config)
train_state.opt = jax.tree.map(init_adam_state, train_state.params)
return train_state
```

Before we can get started, the first thing we need to do is set up the train state. The train state encapsulates (unsurprisingly) all the *stateful* aspects of the training process. This typically includes, at a minimum, the model parameters and the optimizer state. The way we have structured this function (though you may choose to do otherwise) is to:

Create a series of nested dictionaries to house the model parameters, and then

over those parameters to produce a similar set of nested dictionaries to house the accompanying optimizer states. (More on this`jax.tree.map()`

[below](#optimizer-initialization).)

### Parameter Initialization[#](#parameter-initialization)

```
@jax.jit
def init_train_state(config: Config) -> dot_dict:
train_state = dot_dict()
train_state.params = init_param_state(config)
train_state.opt = jax.tree.map(init_adam_state, train_state.params)
return train_state
```

To initialize our parameters, we build a series of nested dictionaries that correspond to the semantic sections of the neural network. If we were using a layer-based library such as PyTorch or Flax, these might correspond to neural network layers. For this example, we could, in fact, get by with a completely flattened dictionary, but the nested approach is convenient both for working with some of the APIs in JAX and for structuring our code.

```
def init_param_state(config: Config) -> dot_dict:
root_key = jax.random.key(config.param_seed)
key = map(ft.partial(jax.random.fold_in, root_key), it.count())
zero_init = jax.nn.initializers.constant(0.0)
he_init = jax.nn.initializers.he_normal(1, 1)
dtype = config.dtype
params = dot_dict(
pos_embed=zero_init(next(key), (config.seq_length, config.embed_dim), dtype, config.pos_embed),
layers=dot_dict(),
)
params.embedding = he_init(next(key), (config.vocab_size, config.embed_dim), dtype, config.embed)
params.linear_in = dot_dict(
kernel=he_init(next(key), (1, config.embed_dim), dtype, config.in_kernel),
bias=zero_init(next(key), (config.embed_dim,), dtype, config.in_bias),
)
params.linear_out = dot_dict(
kernel=he_init(next(key), (config.embed_dim, config.vocab_size), dtype, config.out_kernel),
)
for layer in range(config.num_layers):
qkv_shape = (3, config.embed_dim, config.num_heads, config.head_dim)
out_shape = (config.num_heads, config.head_dim, config.embed_dim)
params.layers[layer] = dot_dict(
attention=dot_dict(
qkv=he_init(next(key), qkv_shape, dtype, config.att_qkv),
out=he_init(next(key), out_shape, dtype, config.att_out),
),
mlp=dot_dict(
in_kernel=he_init(next(key), (config.embed_dim, config.mlp_dim), dtype, config.mlp_in),
out_kernel=he_init(next(key), (config.mlp_dim, config.embed_dim), dtype, config.mlp_out),
),
)
return params
```

Our `get_param_state`

function makes use of the `constant`

and `he_normal`

factories provided in [ jax.nn.initializers](jax.nn.initializers.html#module-jax.nn.initializers). These factories return an

*initializer*, which is a function conforming to the following protocol:

```
class Initializer(Protocol):
def __call__(self, key, shape, dtype, out_sharding) -> jax.Array:
...
```

The functional flavor of JAX requires explicit handling of all stochasticity (viz. [Pseudorandom numbers](random-numbers.html#pseudorandom-numbers)), so we set up a little iterator that yields PRNG keys. Then, to build our parameters, we initialize them at their respective positions in the `params`

nested dictionary, supplying the parameter shape, dtype, and sharding from the `Config`

class.

Note

By specifying the shardings here, we initialize each shard of each parameter directly on the correct device in the device mesh where it needs to be, preventing the need for needless host-to-device transfers or, in the case of a model that does not fit in system memory, avoiding out-of-memory errors.

### Optimizer Initialization[#](#optimizer-initialization)

```
@jax.jit
def init_train_state(config: Config) -> dot_dict:
train_state = dot_dict()
train_state.params = init_param_state(config)
train_state.opt = jax.tree.map(init_adam_state, train_state.params)
return train_state
```

When it comes to setting up the optimizer state, things are a little less straightforward than when we built the model parameters. The [Adam optimizer](https://arxiv.org/abs/1412.6980) requires that, for each parameter, we keep track of three optimization states: `mu`

, `nu`

, and `count`

. The simplest of these is `count`

, which stores the number of training steps we have performed. This is just a scalar used to de-bias the Adam updates. The `mu`

and `nu`

states will be arrays of the same shape, dtype, and sharding as the accompanying parameter `param`

[[2]](#zeros-like)

```
def init_adam_state(param: jax.Array) -> dot_dict:
adam_state = dot_dict(mu=jnp.zeros_like(param), nu=jnp.zeros_like(param), count=jnp.array(0))
return adam_state
```

When we use [ jax.tree.map()](_autosummary/jax.tree.map.html#jax.tree.map), it iterates over the items in

`train_state.params`

. For each parameter, it creates a corresponding Adam state, resulting in a new nested dictionary that mirrors the structure of `train_state.params`

. Each leaf in this new structure contains the optimizer state for the corresponding parameter.## The Train Step (Functional Transformations)[#](#the-train-step-functional-transformations)

```
@jax.jit
def train_step(config: Config, train_state: dot_dict, batch: dict) -> dict:
def loss_fn(params):
logits = model_apply(config, params, batch["observed_ids"])
labels = jax.nn.one_hot(batch["target_ids"], config.vocab_size)
return -(labels * jax.nn.log_softmax(logits)).mean()
params = jax.tree.map(jax.ref.get, train_state.params)
loss, grad = jax.value_and_grad(loss_fn)(params)
jax.tree.map(ft.partial(adam_update, config), train_state.params, grad, train_state.opt)
metrics = {"train_loss": loss}
return metrics
```

The train step is where we calculate the gradient of the model with respect to the current parameters and use the gradient, together with the optimizer, to update the parameters. To do this in JAX, we define the forward pass of the model, then we leverage JAX’s functional transformations to automatically generate the backward pass, which we use to calculate the gradients and perform the update.

### Model Forward Pass[#](#model-forward-pass)

```
def model_apply(config: Config, params: dot_dict, tokens: jax.Array) -> jax.Array:
out = params.embedding.at[tokens].get(out_sharding=config.act_seq)
out += params.pos_embed
del tokens
for layer in range(config.num_layers):
block = params.layers[layer]
att_skip = out # 1 billion dollars in venture capital funding please
qkv = jnp.einsum("bsd,3dkh->bs3kh", out, block.attention.qkv, out_sharding=config.act_att)
out = jax.nn.dot_product_attention(qkv[:, :, 0, :], qkv[:, :, 1, :], qkv[:, :, 2, :], is_causal=True)
out = jnp.einsum("bskh,khd->bsd", out, block.attention.out, out_sharding=config.act_seq)
out += att_skip
out *= jax.lax.rsqrt(jnp.linalg.norm(out, axis=-1, keepdims=True) + 1e-6)
mlp_skip = out # machine learning circa 1986
out = jnp.einsum("bsd,dh->bsh", out, block.mlp.in_kernel, out_sharding=config.act_hidden)
out = jax.nn.gelu(out)
out = jnp.einsum("bsh,hd->bsd", out, block.mlp.out_kernel, out_sharding=config.act_seq)
out += mlp_skip
out *= jax.lax.rsqrt(jnp.linalg.norm(out, axis=-1, keepdims=True) + 1e-6)
logits = jnp.einsum("bsd,dl->bsl", out, params.linear_out.kernel, out_sharding=config.act_seq)
return logits
```

The model’s forward pass is mostly unremarkable, aside from the `out_sharding`

annotations we have supplied. These annotations declare what the result-sharding should be after the operation executes. The compiler uses these activation shardings, together with the parameter shardings we supplied when we [initialized the model](#parameter-initialization), to dynamically insert [communication collectives](https://en.wikipedia.org/wiki/Collective_operation) that ferry parameters and activations alike between devices. By choosing a good sharding strategy, we can achieve highly performant training (and inference) code. We will cover some standard strategies that serve most use cases in the section titled [Achieving High Performance](#achieving-high-performance). For a detailed discussion of the principles underpinning the design of sharding strategies, see [The Scaling Cookbook](https://jax-ml.github.io/scaling-book/).

### Gradient and Optimizer Update[#](#gradient-and-optimizer-update)

```
@jax.jit
def train_step(config: Config, train_state: dot_dict, batch: dict) -> dict:
def loss_fn(params):
logits = model_apply(config, params, batch["observed_ids"])
labels = jax.nn.one_hot(batch["target_ids"], config.vocab_size)
return -(labels * jax.nn.log_softmax(logits)).mean()
params = jax.tree.map(jax.ref.get, train_state.params)
loss, grad = jax.value_and_grad(loss_fn)(params)
jax.tree.map(ft.partial(adam_update, config), train_state.params, grad, train_state.opt)
metrics = {"train_loss": loss}
return metrics
```

In order to calculate the gradient, we define the training loss. This is a function of the parameters that returns a scalar which summarizes how well our model, with the current `train_state`

parameters, is explaining the data.

```
loss, grad = jax.value_and_grad(loss_fn)(params)
```

By supplying this function to [ jax.value_and_grad()](_autosummary/jax.value_and_grad.html#jax.value_and_grad), we transform it into a function that returns both the scalar value and the gradient of

`loss_fn`

evaluated at `params`

(the *value*and

*grad*). Since we have defined our parameters in terms of a series of nested dictionaries, the gradient will also be a series of nested dictionaries, mirroring the parameters. Recall that, unlike the parameters, the optimizer states contain some extra, deeper nested dictionaries corresponding to the optimizer state per parameter. Take a moment, before reading the explanation, to ponder what the semantics of the following function call might be:

```
jax.tree.map(ft.partial(adam_update, config), train_state.params, grad, train_state.opt)
```

Examining the call signature of the function `adam_apply`

gives us a hint:

```
def adam_update(config: Config, param: jax.Ref, grad: jax.Array, adam_state: dot_dict):
adam_state.mu[...] = (1 - config.beta_1) * adam_state.mu[...] + config.beta_1 * grad
adam_state.nu[...] = (1 - config.beta_2) * adam_state.nu[...] + config.beta_2 * grad**2
adam_state.count[...] += 1
mu_hat = adam_state.mu[...] / (1 - config.beta_1 ** adam_state.count[...])
nu_hat = adam_state.nu[...] / (1 - config.beta_2 ** adam_state.count[...])
param[...] -= config.learning_rate * mu_hat / (jnp.sqrt(nu_hat + config.eps_root) + config.eps)
```

Because `train_state.params`

is the first argument, [ jax.tree.map()](_autosummary/jax.tree.map.html#jax.tree.map) uses its tree structure to guide the mapping process.

[[3]](#prefix-tree)This means that

`train_state.opt`

is traversed only as deep as the leaves of `train_state.params`

. The optimizer state for each parameter is therefore passed in as a complete subtree, which allows us to easily access all relevant states (like `mu`

and `nu`

) for a given `param`

inside `adam_apply`

.Tip

If we wished to use different optimization algorithms and states on different parameters in our model (or freeze some parameters), we could achieve this by modifying the body of `adam_apply`

and replacing [ jax.tree.map()](_autosummary/jax.tree.map.html#jax.tree.map) with

[, which allows the operand function to customize its behavior depending on the parameter.](_autosummary/jax.tree_util.tree_map_with_path.html#jax.tree_util.tree_map_with_path)

`jax.tree_util.tree_map_with_path()`

## The Training Loop[#](#the-training-loop)

```
def train_loop(config: Config):
record_writer = RecordWriter()
train_state = init_train_state(config)
train_state = jax.tree.map(jax.ref.new_ref, train_state)
batch = iter(get_dataset_on_device(config))
for step in range(config.num_train_steps):
metrics = train_step(config, train_state, next(batch))
record_writer({"step": step} | metrics)
```

During training, we have to orchestrate the flow of data between two key players: the host system and the accelerator. Ensuring smooth interplay between these systems is key to writing highly performant training code. The Python [GIL](https://en.wikipedia.org/wiki/Global_interpreter_lock) would ordinarily pose a significant obstacle here, but to work around this, the paradigm of [Asynchronous Dispatch](async_dispatch.html#async-dispatch) adopted by JAX makes this orchestration easy to accomplish. But, in order to leverage this paradigm, we need to be mindful of how our code will be executed when structuring our training step.

### Efficiency via Asynchronous Dispatch[#](#efficiency-via-asynchronous-dispatch)

One of the most important tasks performed by the host system is to fetch data and place it on the accelerators so that the accelerators are never waiting for data. The time when accelerators are waiting idle between train steps is referred to as the *step bubble*. We can leverage asynchronous dispatch to minimize the step bubble. Let’s see how this works with our training loop, discarding, for the moment, the line concerning the `record_writer`

.

```
for step in range(config.num_train_steps):
metrics = train_step(config, train_state, next(batch))
```

When this code executes, Python will first query the range iterator, get `step`

(with value `0`

), then call `next(batch)`

, which will take some time to retrieve the batch. Then, `train_step`

gets called. So far, nothing out of the ordinary.

What happens next is interesting. Because [ jax.jit()](_autosummary/jax.jit.html#jax.jit)-decorated calls are non-blocking, the call to

`train_step`

returns to the Python interpreter immediately. While the computation is enqueued on the accelerator, no work is actually performed yet. The Python loop continues, advancing the step counter and calling `next(batch)`

for the *next*iteration. Once the second call to

`train_step`

is made, its inputs are now the mutated reference to `train_state`

from the previous JIT call and a fresh batch of data. The runtime is clever and sees that in order to execute the second call to `train_step`

, we first need to realize the `train_state`

result of step `0`

to perform the mutation. And so it fires off the computation for the first step, and, crucially, while this happens, `train_step`

, once again, returns immediately, and the loop skips over again. Python now runs ahead until it encounters the `next(batch)`

function at step 3, which proceeds to execute in Python, loading data, *while*the first train step is executing (for real this time). And just like that, we can simultaneously load data and perform math on the accelerator, without any traditional multiprocessing.

[[4]](#sleep)

--- displayMode: compact --- gantt title Synchronous Dispatch: No Overlap axisFormat % section Host next(batch) :gb0, 0, 1000s next(batch) :gb1, after ajc0, 1000s next(batch) :gb2, after ajc1, 1000s section Accelerator train_step 0 :ajc0, after gb0, 2000s train_step 1 :ajc1, after gb1, 2000s

--- displayMode: compact --- gantt title JAX Asynchronous Dispatch: Host-Device Overlap axisFormat % section Host %% Task: id, name, start, duration_or_end next(batch) :gb0, 0, 1000s next(batch) :gb1, after gb0, 1000s next(batch) :gb2, after gb1, 1000s next(batch) :gb3, after jc0, 1000s next(batch) :gb4, after jc1, 1000s section Accelerator %% Task: id, name, start, duration_or_end train_step 0 :jc0, after gb1, 2000s train_step 1 :jc1, after jc0, 2000s train_step 2 :jc2, after jc1, 2000s

### Common Mistakes[#](#common-mistakes)

When writing asynchronous dispatch code in Python, there are two primary mistakes one should be wary of so as not to interrupt our careful orchestration of compute.

#### Requesting device-to-host transfers[#](#requesting-device-to-host-transfers)

Up until now, we have ignored what happens to the variable `metrics`

. Indeed, if this is left dangling, nothing will happen, and we will achieve good overlap just as advertised. However, more often than not, we would like to observe telemetry from our train step, such as the current loss, gradient statistics, and so on. Suppose we were to insert code such as:

```
metrics = train_step(config, train_state, next(batch))
print({"step": step} | metrics)
```

Instead of the loop ticking over, `print`

will incur a device-to-host transfer of whatever on-device arrays are in `metrics`

. This interrupts the Python interpreter, and the code is forced to execute synchronously, producing a step bubble. The solution is slightly counterintuitive: at each step, we gather the telemetry for the *previous* step.

```
class RecordWriter:
prev_metrics = None
def __call__(self, cur_metrics: dict):
self.prev_metrics, log_metrics = cur_metrics, self.prev_metrics
if log_metrics is None:
return
print(*it.starmap("{}: {}".format, log_metrics.items()), sep="\t")
```

and

```
metrics = train_step(config, train_state, next(batch))
```

A small helper function like this is essential to achieve good overlap and make the most of the resources of our host system and our accelerator. Of course, the simple `print`

statement here can be swapped out for any Python operation that requests data from the accelerator.

#### Interrupting the accelerator[#](#interrupting-the-accelerator)

The other common way in which we can waste spectacular amounts of cloud compute money is by unintentionally enqueuing math operations on the accelerator outside of the train step. Suppose we are using a cosine learning rate schedule.

```
def learning_rate(count, init_value: float = 1e-4, decay_steps: int = 10_000, alpha: float = 1e-6):
cosine_decay = 0.5 * (1 + jnp.cos(jnp.pi * jnp.minimum(count, decay_steps) / decay_steps))
return init_value * (1 - alpha) * cosine_decay
```

A common pattern is to want to visualize the schedule alongside the other metrics we’re gathering. However, even if we use the clever `record_writer`

class we defined earlier, the following code will create a bubble on the accelerator.

```
metrics = train_step(config, train_state, next(batch))
record_writer({"step": step, "learning_rate": learning_rate(step)} | metrics)
```

This is because we have used [ jax.numpy](jax.numpy.html#module-jax.numpy) in our calculations. When

[is called, the Python integer](_autosummary/jax.numpy.minimum.html#jax.numpy.minimum)

`jax.numpy.minimum()`

`step`

is promoted to a [and transferred to the accelerator (a host-to-device transfer). The calculation is now enqueued on the accelerator, outside our main](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

`train_step`

. To `print`

the result, the value must be transferred back to the host (a device-to-host transfer). This round-trip forces the accelerator to synchronize with the host, and we have thrown away money by creating a performance bubble. The two ways to avoid this are to use NumPy for these calculations or to use the [context manager.](_autosummary/jax.default_device.html#jax.default_device)

`jax.default_device()`

```
metrics = train_step(config, train_state, next(batch))
with jax.default_device('cpu'):
record_writer({"step": step, "learning_rate": learning_rate(step)} | metrics)
```

### Data Loading[#](#data-loading)

In addition to overlapping the actual loading of the data (that is, retrieving it from network storage to the host), JAX also allows us to overlap the host-to-device transfer of the data itself with the computation of the train step. The special function [ jax.device_put()](_autosummary/jax.device_put.html#jax.device_put) is carefully designed to be non-blocking, executing asynchronously, which makes it perfectly fine to use in the context of our train step. However, there is a more convenient function specifically designed for the task of loading data. In the following code,

`dataset`

is an ordinary Python iterator that yields a `dict`

of batched data. By mapping over this iterator with [, we generate a new iterator. Yielding from this new iterator will generate data placed on the device, ready for consumption by our train step. Internally, it will](_autosummary/jax.make_array_from_process_local_data.html#jax.make_array_from_process_local_data)

`jax.make_array_from_process_local_data()`

[to create](_autosummary/jax.tree.map.html#jax.tree.map)

`jax.tree.map()`

[objects and queue them to be transferred to the device. Provided the data can be batched fast enough, on both TPUs and GPUs, these transfers will be overlapped with the train step computation.](_autosummary/jax.Array.html#jax.Array)

`jax.Array`

```
def get_dataset_on_device(config: Config) -> Iterator[dict[str, jax.Array]]:
datset = get_dataset(config)
sharding = jax.P(config.mesh_axis_names)
return map(ft.partial(jax.make_array_from_process_local_data, sharding), datset)
```

## Achieving High Performance[#](#achieving-high-performance)

In this section, we will describe the three primary forms of model parallelism that are useful for training. During training, *throughput* is of paramount importance; that is, we wish to maximize the average number of operations per second. This contrasts with inference, where the goal is to minimize *latency* by ensuring all the operations happen in as little time as possible. Keeping throughput in mind as our ultimate goal for training, this section introduces the three primary strategies for sharding during training. For each strategy, we outline the JAX shardings that implement it and describe the collectives involved so that when studying program traces, you’ll have landmarks to look for to confirm that the program is behaving as expected. The sharding variables we define in the code blocks below correspond to their uses in the [initialization](#train-state-initialization) and [model forward pass](#model-forward-pass). But in the companion script these and other aspects of the training code are set conveniently using the global Config class.

```
@jax.tree_util.register_static
@dataclass(kw_only=True, frozen=True)
class Config:
mesh_axis_names: tuple[str, ...] = ("fsdp",)
mesh_shape: tuple[int, ...] = (8,)
seq_length: int = 128
num_train_steps: int = 10**6
host_batch_size: int = 16
learning_rate: float = 1e-4
beta_1: float = 0.9
beta_2: float = 0.999
eps: float = 1e-8
eps_root: float = 0.0
param_seed: int = 12738
num_layers: int = 4
embed_dim: int = 512
mlp_dim: int = 512 * 4
vocab_size: int = 2**8 # uint8 ascii encoding
num_heads: int = 8
head_dim: int = 128
dtype: str = "bfloat16"
embed: jax.P = jax.P(None, None)
pos_embed: jax.P = jax.P(None, None)
att_qkv: jax.P = jax.P(None, "fsdp", None, None)
att_out: jax.P = jax.P("fsdp", None, None)
mlp_in: jax.P = jax.P("fsdp", None)
mlp_out: jax.P = jax.P(None, "fsdp")
in_kernel: jax.P = jax.P(None, None)
in_bias: jax.P = jax.P(None)
out_kernel: jax.P = jax.P("fsdp", None)
out_bias: jax.P = jax.P(None)
act_ids: jax.P = jax.P("fsdp")
act_seq: jax.P = jax.P("fsdp", None, None)
act_att: jax.P = jax.P("fsdp", None, None, None)
act_hidden: jax.P = jax.P("fsdp", None, None)
def __post_init__(self):
mesh = jax.make_mesh(self.mesh_shape, self.mesh_axis_names, len(self.mesh_shape) * (AxisType.Explicit,))
jax.sharding.set_mesh(mesh)
```

### Data Parallel[#](#data-parallel)

Data parallel is the most common and easy-to-understand form of parallelism. In this scheme, each accelerator stores a complete copy of the model parameters, and we shard activations along the batch axis to split the computation of the gradients. To compute the gradients, each accelerator performs an individual forward and backward pass. Then, before the parameters are updated, XLA inserts an `AllReduce`

to share the updates and keep the models in sync.

*Mesh:*

```
mesh = jax.sharding.Mesh(jax.devices(), ('devices',))
```

*Parameter Shardings:*

```
pos_embed = jax.P(None, None)
att_qkv = jax.P(None, None, None, None)
att_out = jax.P(None, None, None)
mlp_in = jax.P(None, None)
mlp_out = jax.P(None, None)
in_kernel = jax.P(None, None)
in_bias = jax.P(None)
out_kernel = jax.P(None, None)
out_bias = jax.P(None)
```

*Activation Shardings:*

```
act_ids = jax.P("devices")
act_seq = jax.P("devices", None, None)
act_att = jax.P("devices", None, None, None)
act_hidden = jax.P("devices", None, None)
```

### Fully-Sharded Data Parallel (FSDP)[#](#fully-sharded-data-parallel-fsdp)

The drawback of data-parallel sharding is that we have to keep multiple, full, redundant copies of the model parameters in HBM. This is a very performant strategy for small models, but since HBM is in short supply, we need to shard the model parameters as well. In the *Fully-Sharded Data Parallel (FSDP)* strategy, we shard both the activations and the model parameters. Now, as the forward pass happens, the parameters are, one-by-one, unsharded (via `AllGather`

) into whole arrays before they are applied to the activations. This unsharding is brief and temporary, however, leading to a large saving in HBM. In the backward pass, each `AllGather`

becomes a `ReduceScatter`

. Then there is a final `ReduceScatter`

at the optimizer update to synchronize gradients. Compared with Data parallelism, the total communication traffic is 50% higher, but our HBM pressure is reduced by the size of the model divided by the number of devices.

*Mesh:*

```
mesh = jax.make_mesh((128*4,), ("fsdp",))
```

*Parameter Shardings:*

```
pos_embed = jax.P(None, None)
att_qkv = jax.P(None, "fsdp", None, None)
att_out = jax.P("fsdp", None, None)
mlp_in = jax.P("fsdp", None)
mlp_out = jax.P(None, "fsdp")
in_kernel = jax.P(None, None)
in_bias = jax.P(None)
out_kernel = jax.P("fsdp", None)
out_bias = jax.P(None)
```

*Activation Shardings:*

```
act_ids = jax.P("fsdp")
act_seq = jax.P("fsdp", None, None)
act_att = jax.P("fsdp", None, None, None)
act_hidden = jax.P("fsdp", None, None)
```

Note

While FSDP entails a great deal more communication than data parallel, in practice we are able to overlap the communication with the compute, thereby hiding it and achieving the same throughput at a drastically improved HBM budget.

### Tensor Parallel[#](#tensor-parallel)

If our model is large enough and structured appropriately, it becomes beneficial to partition the computation within a single example across our accelerators. Using a matrix multiplication as an example, we can spread the large matrix multiplications over two or four accelerators. This entails significantly more communication, and so this strategy only works for computations with a very high arithmetic intensity, such as extremely large matrix multiplications. With multi-head self-attention, we opt to shard along the heads with a replicated sequence axis, since this offers the most natural amount of parallelism. If the MLP is large enough we can also efficiently shard the matrix multiplications.

*Mesh:*

```
mesh = jax.make_mesh((128,4), ("fsdp", "tensor"))
```

*Parameter Shardings:*

```
pos_embed = jax.P(None, "tensor")
att_qkv = jax.P(None, "fsdp", "tensor", None)
att_out = jax.P("fsdp", None, None)
mlp_in = jax.P("fsdp", "tensor")
mlp_out = jax.P("tensor", "fsdp")
in_kernel = jax.P(None, None)
in_bias = jax.P(None)
out_kernel = jax.P("fsdp", None)
out_bias = jax.P(None)
```

*Activation Shardings:*

```
act_ids = jax.P("fsdp")
act_seq = jax.P("fsdp", None, None)
act_att = jax.P("fsdp", None, "tensor", None)
act_hidden = jax.P("fsdp", None, "tensor")
```

---

## Source: https://jax.readthedocs.io/en/latest/notebooks/autodiff_cookbook.html

# The Autodiff Cookbook[#](#the-autodiff-cookbook)

JAX has a pretty general automatic differentiation system. In this notebook, we’ll go through a whole bunch of neat autodiff ideas that you can cherry pick for your own work, starting with the basics.

```
import jax.numpy as jnp
from jax import grad, jit, vmap
from jax import random
key = random.key(0)
```

## Gradients[#](#gradients)

### Starting with `grad`

[#](#starting-with-grad)

You can differentiate a function with `grad`

:

```
grad_tanh = grad(jnp.tanh)
print(grad_tanh(2.0))
```

```
0.070650816
```

`grad`

takes a function and returns a function. If you have a Python function `f`

that evaluates the mathematical function \(f\), then `grad(f)`

is a Python function that evaluates the mathematical function \(\nabla f\). That means `grad(f)(x)`

represents the value \(\nabla f(x)\).

Since `grad`

operates on functions, you can apply it to its own output to differentiate as many times as you like:

```
print(grad(grad(jnp.tanh))(2.0))
print(grad(grad(grad(jnp.tanh)))(2.0))
```

```
-0.13621868
0.25265405
```

Let’s look at computing gradients with `grad`

in a linear logistic regression model. First, the setup:

```
def sigmoid(x):
return 0.5 * (jnp.tanh(x / 2) + 1)
# Outputs probability of a label being true.
def predict(W, b, inputs):
return sigmoid(jnp.dot(inputs, W) + b)
# Build a toy dataset.
inputs = jnp.array([[0.52, 1.12, 0.77],
[0.88, -1.08, 0.15],
[0.52, 0.06, -1.30],
[0.74, -2.49, 1.39]])
targets = jnp.array([True, True, False, True])
# Training loss is the negative log-likelihood of the training examples.
def loss(W, b):
preds = predict(W, b, inputs)
label_probs = preds * targets + (1 - preds) * (1 - targets)
return -jnp.sum(jnp.log(label_probs))
# Initialize random model coefficients
key, W_key, b_key = random.split(key, 3)
W = random.normal(W_key, (3,))
b = random.normal(b_key, ())
```

Use the `grad`

function with its `argnums`

argument to differentiate a function with respect to positional arguments.

```
# Differentiate `loss` with respect to the first positional argument:
W_grad = grad(loss, argnums=0)(W, b)
print('W_grad', W_grad)
# Since argnums=0 is the default, this does the same thing:
W_grad = grad(loss)(W, b)
print('W_grad', W_grad)
# But we can choose different values too, and drop the keyword:
b_grad = grad(loss, 1)(W, b)
print('b_grad', b_grad)
# Including tuple values
W_grad, b_grad = grad(loss, (0, 1))(W, b)
print('W_grad', W_grad)
print('b_grad', b_grad)
```

```
W_grad [-0.433146 -0.7354605 -1.2598922]
W_grad [-0.433146 -0.7354605 -1.2598922]
b_grad -0.69001776
W_grad [-0.433146 -0.7354605 -1.2598922]
b_grad -0.69001776
```

This `grad`

API has a direct correspondence to the excellent notation in Spivak’s classic *Calculus on Manifolds* (1965), also used in Sussman and Wisdom’s [ Structure and Interpretation of Classical Mechanics](https://mitpress.mit.edu/9780262028967/structure-and-interpretation-of-classical-mechanics) (2015) and their

[(2013). Both books are open-access. See in particular the “Prologue” section of](https://mitpress.mit.edu/9780262019347/functional-differential-geometry)

*Functional Differential Geometry**Functional Differential Geometry*for a defense of this notation.

Essentially, when using the `argnums`

argument, if `f`

is a Python function for evaluating the mathematical function \(f\), then the Python expression `grad(f, i)`

evaluates to a Python function for evaluating \(\partial_i f\).

### Differentiating with respect to nested lists, tuples, and dicts[#](#differentiating-with-respect-to-nested-lists-tuples-and-dicts)

Differentiating with respect to standard Python containers just works, so use tuples, lists, and dicts (and arbitrary nesting) however you like.

```
def loss2(params_dict):
preds = predict(params_dict['W'], params_dict['b'], inputs)
label_probs = preds * targets + (1 - preds) * (1 - targets)
return -jnp.sum(jnp.log(label_probs))
print(grad(loss2)({'W': W, 'b': b}))
```

```
{'W': Array([-0.433146 , -0.7354605, -1.2598922], dtype=float32), 'b': Array(-0.69001776, dtype=float32)}
```

You can [register your own container types](https://github.com/jax-ml/jax/issues/446#issuecomment-467105048) to work with not just `grad`

but all the JAX transformations (`jit`

, `vmap`

, etc.).

### Evaluate a function and its gradient using `value_and_grad`

[#](#evaluate-a-function-and-its-gradient-using-value-and-grad)

Another convenient function is `value_and_grad`

for efficiently computing both a function’s value as well as its gradient’s value:

```
from jax import value_and_grad
loss_value, Wb_grad = value_and_grad(loss, (0, 1))(W, b)
print('loss value', loss_value)
print('loss value', loss(W, b))
```

```
loss value 2.9729187
loss value 2.9729187
```

### Checking against numerical differences[#](#checking-against-numerical-differences)

A great thing about derivatives is that they’re straightforward to check with finite differences:

```
# Set a step size for finite differences calculations
eps = 1e-4
# Check b_grad with scalar finite differences
b_grad_numerical = (loss(W, b + eps / 2.) - loss(W, b - eps / 2.)) / eps
print('b_grad_numerical', b_grad_numerical)
print('b_grad_autodiff', grad(loss, 1)(W, b))
# Check W_grad with finite differences in a random direction
key, subkey = random.split(key)
vec = random.normal(subkey, W.shape)
unitvec = vec / jnp.sqrt(jnp.vdot(vec, vec))
W_grad_numerical = (loss(W + eps / 2. * unitvec, b) - loss(W - eps / 2. * unitvec, b)) / eps
print('W_dirderiv_numerical', W_grad_numerical)
print('W_dirderiv_autodiff', jnp.vdot(grad(loss)(W, b), unitvec))
```

```
b_grad_numerical -0.6890297
b_grad_autodiff -0.69001776
W_dirderiv_numerical 1.3041496
W_dirderiv_autodiff 1.3006744
```

JAX provides a simple convenience function that does essentially the same thing, but checks up to any order of differentiation that you like:

```
from jax.test_util import check_grads
check_grads(loss, (W, b), order=2) # check up to 2nd order derivatives
```

### Hessian-vector products with `grad`

-of-`grad`

[#](#hessian-vector-products-with-grad-of-grad)

One thing we can do with higher-order `grad`

is build a Hessian-vector product function. (Later on we’ll write an even more efficient implementation that mixes both forward- and reverse-mode, but this one will use pure reverse-mode.)

A Hessian-vector product function can be useful in a [truncated Newton Conjugate-Gradient algorithm](https://en.wikipedia.org/wiki/Truncated_Newton_method) for minimizing smooth convex functions, or for studying the curvature of neural network training objectives (e.g. [1](https://arxiv.org/abs/1406.2572), [2](https://arxiv.org/abs/1811.07062), [3](https://arxiv.org/abs/1706.04454), [4](https://arxiv.org/abs/1802.03451)).

For a scalar-valued function \(f : \mathbb{R}^n \to \mathbb{R}\) with continuous second derivatives (so that the Hessian matrix is symmetric), the Hessian at a point \(x \in \mathbb{R}^n\) is written as \(\partial^2 f(x)\). A Hessian-vector product function is then able to evaluate

\(\qquad v \mapsto \partial^2 f(x) \cdot v\)

for any \(v \in \mathbb{R}^n\).

The trick is not to instantiate the full Hessian matrix: if \(n\) is large, perhaps in the millions or billions in the context of neural networks, then that might be impossible to store.

Luckily, `grad`

already gives us a way to write an efficient Hessian-vector product function. We just have to use the identity

\(\qquad \partial^2 f (x) v = \partial [x \mapsto \partial f(x) \cdot v] = \partial g(x)\),

where \(g(x) = \partial f(x) \cdot v\) is a new scalar-valued function that dots the gradient of \(f\) at \(x\) with the vector \(v\). Notice that we’re only ever differentiating scalar-valued functions of vector-valued arguments, which is exactly where we know `grad`

is efficient.

In JAX code, we can just write this:

```
def hvp(f, x, v):
return grad(lambda x: jnp.vdot(grad(f)(x), v))(x)
```

This example shows that you can freely use lexical closure, and JAX will never get perturbed or confused.

We’ll check this implementation a few cells down, once we see how to compute dense Hessian matrices. We’ll also write an even better version that uses both forward-mode and reverse-mode.

### Jacobians and Hessians using `jacfwd`

and `jacrev`

[#](#jacobians-and-hessians-using-jacfwd-and-jacrev)

You can compute full Jacobian matrices using the `jacfwd`

and `jacrev`

functions:

```
from jax import jacfwd, jacrev
# Isolate the function from the weight matrix to the predictions
f = lambda W: predict(W, b, inputs)
J = jacfwd(f)(W)
print("jacfwd result, with shape", J.shape)
print(J)
J = jacrev(f)(W)
print("jacrev result, with shape", J.shape)
print(J)
```

```
jacfwd result, with shape (4, 3)
[[ 0.05069415 0.1091874 0.07506633]
[ 0.14170025 -0.17390487 0.02415345]
[ 0.12579198 0.01451446 -0.31447992]
[ 0.00574409 -0.0193281 0.01078958]]
jacrev result, with shape (4, 3)
[[ 0.05069415 0.10918741 0.07506634]
[ 0.14170025 -0.17390487 0.02415345]
[ 0.12579198 0.01451446 -0.31447995]
[ 0.00574409 -0.0193281 0.01078958]]
```

These two functions compute the same values (up to machine numerics), but differ in their implementation: `jacfwd`

uses forward-mode automatic differentiation, which is more efficient for “tall” Jacobian matrices (more outputs than inputs), while `jacrev`

uses reverse-mode, which is more efficient for “wide” Jacobian matrices (more inputs than outputs). For matrices that are near-square, `jacfwd`

probably has an edge over `jacrev`

.

You can also use `jacfwd`

and `jacrev`

with container types:

```
def predict_dict(params, inputs):
return predict(params['W'], params['b'], inputs)
J_dict = jacrev(predict_dict)({'W': W, 'b': b}, inputs)
for k, v in J_dict.items():
print("Jacobian from {} to logits is".format(k))
print(v)
```

```
Jacobian from W to logits is
[[ 0.05069415 0.10918741 0.07506634]
[ 0.14170025 -0.17390487 0.02415345]
[ 0.12579198 0.01451446 -0.31447995]
[ 0.00574409 -0.0193281 0.01078958]]
Jacobian from b to logits is
[0.09748876 0.16102302 0.24190766 0.00776229]
```

For more details on forward- and reverse-mode, as well as how to implement `jacfwd`

and `jacrev`

as efficiently as possible, read on!

Using a composition of two of these functions gives us a way to compute dense Hessian matrices:

```
def hessian(f):
return jacfwd(jacrev(f))
H = hessian(f)(W)
print("hessian, with shape", H.shape)
print(H)
```

```
hessian, with shape (4, 3, 3)
[[[ 0.02058932 0.04434624 0.03048803]
[ 0.04434623 0.09551499 0.06566654]
[ 0.03048803 0.06566655 0.04514575]]
[[-0.0743913 0.09129842 -0.01268033]
[ 0.09129842 -0.11204806 0.01556223]
[-0.01268034 0.01556223 -0.00216142]]
[[ 0.01176856 0.00135791 -0.02942139]
[ 0.00135791 0.00015668 -0.00339478]
[-0.0294214 -0.00339478 0.07355348]]
[[-0.00418412 0.014079 -0.00785936]
[ 0.014079 -0.04737393 0.02644569]
[-0.00785936 0.02644569 -0.01476286]]]
```

This shape makes sense: if we start with a function \(f : \mathbb{R}^n \to \mathbb{R}^m\), then at a point \(x \in \mathbb{R}^n\) we expect to get the shapes

\(f(x) \in \mathbb{R}^m\), the value of \(f\) at \(x\),

\(\partial f(x) \in \mathbb{R}^{m \times n}\), the Jacobian matrix at \(x\),

\(\partial^2 f(x) \in \mathbb{R}^{m \times n \times n}\), the Hessian at \(x\),


and so on.

To implement `hessian`

, we could have used `jacfwd(jacrev(f))`

or `jacrev(jacfwd(f))`

or any other composition of the two. But forward-over-reverse is typically the most efficient. That’s because in the inner Jacobian computation we’re often differentiating a function wide Jacobian (maybe like a loss function \(f : \mathbb{R}^n \to \mathbb{R}\)), while in the outer Jacobian computation we’re differentiating a function with a square Jacobian (since \(\nabla f : \mathbb{R}^n \to \mathbb{R}^n\)), which is where forward-mode wins out.

## How it’s made: two foundational autodiff functions[#](#how-it-s-made-two-foundational-autodiff-functions)

### Jacobian-Vector products (JVPs, aka forward-mode autodiff)[#](#jacobian-vector-products-jvps-aka-forward-mode-autodiff)

JAX includes efficient and general implementations of both forward- and reverse-mode automatic differentiation. The familiar `grad`

function is built on reverse-mode, but to explain the difference in the two modes, and when each can be useful, we need a bit of math background.

#### JVPs in math[#](#jvps-in-math)

Mathematically, given a function \(f : \mathbb{R}^n \to \mathbb{R}^m\), the Jacobian of \(f\) evaluated at an input point \(x \in \mathbb{R}^n\), denoted \(\partial f(x)\), is often thought of as a matrix in \(\mathbb{R}^m \times \mathbb{R}^n\):

\(\qquad \partial f(x) \in \mathbb{R}^{m \times n}\).

But we can also think of \(\partial f(x)\) as a linear map, which maps the tangent space of the domain of \(f\) at the point \(x\) (which is just another copy of \(\mathbb{R}^n\)) to the tangent space of the codomain of \(f\) at the point \(f(x)\) (a copy of \(\mathbb{R}^m\)):

\(\qquad \partial f(x) : \mathbb{R}^n \to \mathbb{R}^m\).

This map is called the [pushforward map](https://en.wikipedia.org/wiki/Pushforward_(differential)) of \(f\) at \(x\). The Jacobian matrix is just the matrix for this linear map in a standard basis.

If we don’t commit to one specific input point \(x\), then we can think of the function \(\partial f\) as first taking an input point and returning the Jacobian linear map at that input point:

\(\qquad \partial f : \mathbb{R}^n \to \mathbb{R}^n \to \mathbb{R}^m\).

In particular, we can uncurry things so that given input point \(x \in \mathbb{R}^n\) and a tangent vector \(v \in \mathbb{R}^n\), we get back an output tangent vector in \(\mathbb{R}^m\). We call that mapping, from \((x, v)\) pairs to output tangent vectors, the *Jacobian-vector product*, and write it as

\(\qquad (x, v) \mapsto \partial f(x) v\)

#### JVPs in JAX code[#](#jvps-in-jax-code)

Back in Python code, JAX’s `jvp`

function models this transformation. Given a Python function that evaluates \(f\), JAX’s `jvp`

is a way to get a Python function for evaluating \((x, v) \mapsto (f(x), \partial f(x) v)\).

```
from jax import jvp
# Isolate the function from the weight matrix to the predictions
f = lambda W: predict(W, b, inputs)
key, subkey = random.split(key)
v = random.normal(subkey, W.shape)
# Push forward the vector `v` along `f` evaluated at `W`
y, u = jvp(f, (W,), (v,))
```

In terms of [Haskell-like type signatures](https://wiki.haskell.org/Type_signature),
we could write

```
jvp :: (a -> b) -> a -> T a -> (b, T b)
```

where we use `T a`

to denote the type of the tangent space for `a`

. In words, `jvp`

takes as arguments a function of type `a -> b`

, a value of type `a`

, and a tangent vector value of type `T a`

. It gives back a pair consisting of a value of type `b`

and an output tangent vector of type `T b`

.

The `jvp`

-transformed function is evaluated much like the original function, but paired up with each primal value of type `a`

it pushes along tangent values of type `T a`

. For each primitive numerical operation that the original function would have applied, the `jvp`

-transformed function executes a “JVP rule” for that primitive that both evaluates the primitive on the primals and applies the primitive’s JVP at those primal values.

That evaluation strategy has some immediate implications about computational complexity: since we evaluate JVPs as we go, we don’t need to store anything for later, and so the memory cost is independent of the depth of the computation. In addition, the FLOP cost of the `jvp`

-transformed function is about 3x the cost of just evaluating the function (one unit of work for evaluating the original function, for example `sin(x)`

; one unit for linearizing, like `cos(x)`

; and one unit for applying the linearized function to a vector, like `cos_x * v`

). Put another way, for a fixed primal point \(x\), we can evaluate \(v \mapsto \partial f(x) \cdot v\) for about the same marginal cost as evaluating \(f\).

That memory complexity sounds pretty compelling! So why don’t we see forward-mode very often in machine learning?

To answer that, first think about how you could use a JVP to build a full Jacobian matrix. If we apply a JVP to a one-hot tangent vector, it reveals one column of the Jacobian matrix, corresponding to the nonzero entry we fed in. So we can build a full Jacobian one column at a time, and to get each column costs about the same as one function evaluation. That will be efficient for functions with “tall” Jacobians, but inefficient for “wide” Jacobians.

If you’re doing gradient-based optimization in machine learning, you probably want to minimize a loss function from parameters in \(\mathbb{R}^n\) to a scalar loss value in \(\mathbb{R}\). That means the Jacobian of this function is a very wide matrix: \(\partial f(x) \in \mathbb{R}^{1 \times n}\), which we often identify with the Gradient vector \(\nabla f(x) \in \mathbb{R}^n\). Building that matrix one column at a time, with each call taking a similar number of FLOPs to evaluate the original function, sure seems inefficient! In particular, for training neural networks, where \(f\) is a training loss function and \(n\) can be in the millions or billions, this approach just won’t scale.

To do better for functions like this, we just need to use reverse-mode.

### Vector-Jacobian products (VJPs, aka reverse-mode autodiff)[#](#vector-jacobian-products-vjps-aka-reverse-mode-autodiff)

Where forward-mode gives us back a function for evaluating Jacobian-vector products, which we can then use to build Jacobian matrices one column at a time, reverse-mode is a way to get back a function for evaluating vector-Jacobian products (equivalently Jacobian-transpose-vector products), which we can use to build Jacobian matrices one row at a time.

#### VJPs in math[#](#vjps-in-math)

Let’s again consider a function \(f : \mathbb{R}^n \to \mathbb{R}^m\). Starting from our notation for JVPs, the notation for VJPs is pretty simple:

\(\qquad (x, v) \mapsto v \partial f(x)\),

where \(v\) is an element of the cotangent space of \(f\) at \(x\) (isomorphic to another copy of \(\mathbb{R}^m\)). When being rigorous, we should think of \(v\) as a linear map \(v : \mathbb{R}^m \to \mathbb{R}\), and when we write \(v \partial f(x)\) we mean function composition \(v \circ \partial f(x)\), where the types work out because \(\partial f(x) : \mathbb{R}^n \to \mathbb{R}^m\). But in the common case we can identify \(v\) with a vector in \(\mathbb{R}^m\) and use the two almost interchangeably, just like we might sometimes flip between “column vectors” and “row vectors” without much comment.

With that identification, we can alternatively think of the linear part of a VJP as the transpose (or adjoint conjugate) of the linear part of a JVP:

\(\qquad (x, v) \mapsto \partial f(x)^\mathsf{T} v\).

For a given point \(x\), we can write the signature as

\(\qquad \partial f(x)^\mathsf{T} : \mathbb{R}^m \to \mathbb{R}^n\).

The corresponding map on cotangent spaces is often called the [pullback](https://en.wikipedia.org/wiki/Pullback_(differential_geometry))
of \(f\) at \(x\). The key for our purposes is that it goes from something that looks like the output of \(f\) to something that looks like the input of \(f\), just like we might expect from a transposed linear function.

#### VJPs in JAX code[#](#vjps-in-jax-code)

Switching from math back to Python, the JAX function `vjp`

can take a Python function for evaluating \(f\) and give us back a Python function for evaluating the VJP \((x, v) \mapsto (f(x), v^\mathsf{T} \partial f(x))\).

```
from jax import vjp
# Isolate the function from the weight matrix to the predictions
f = lambda W: predict(W, b, inputs)
y, vjp_fun = vjp(f, W)
key, subkey = random.split(key)
u = random.normal(subkey, y.shape)
# Pull back the covector `u` along `f` evaluated at `W`
v = vjp_fun(u)
```

In terms of [Haskell-like type signatures](https://wiki.haskell.org/Type_signature),
we could write

```
vjp :: (a -> b) -> a -> (b, CT b -> CT a)
```

where we use `CT a`

to denote the type for the cotangent space for `a`

. In words, `vjp`

takes as arguments a function of type `a -> b`

and a point of type `a`

, and gives back a pair consisting of a value of type `b`

and a linear map of type `CT b -> CT a`

.

This is great because it lets us build Jacobian matrices one row at a time, and the FLOP cost for evaluating \((x, v) \mapsto (f(x), v^\mathsf{T} \partial f(x))\) is only about three times the cost of evaluating \(f\). In particular, if we want the gradient of a function \(f : \mathbb{R}^n \to \mathbb{R}\), we can do it in just one call. That’s how `grad`

is efficient for gradient-based optimization, even for objectives like neural network training loss functions on millions or billions of parameters.

There’s a cost, though: though the FLOPs are friendly, memory scales with the depth of the computation. Also, the implementation is traditionally more complex than that of forward-mode, though JAX has some tricks up its sleeve (that’s a story for a future notebook!).

For more on how reverse-mode works, see [this tutorial video from the Deep Learning Summer School in 2017](http://videolectures.net/deeplearning2017_johnson_automatic_differentiation/).

### Vector-valued gradients with VJPs[#](#vector-valued-gradients-with-vjps)

If you’re interested in taking vector-valued gradients (like `tf.gradients`

):

```
from jax import vjp
def vgrad(f, x):
y, vjp_fn = vjp(f, x)
return vjp_fn(jnp.ones(y.shape))[0]
print(vgrad(lambda x: 3*x**2, jnp.ones((2, 2))))
```

```
[[6. 6.]
[6. 6.]]
```

### Hessian-vector products using both forward- and reverse-mode[#](#hessian-vector-products-using-both-forward-and-reverse-mode)

In a previous section, we implemented a Hessian-vector product function just using reverse-mode (assuming continuous second derivatives):

```
def hvp(f, x, v):
return grad(lambda x: jnp.vdot(grad(f)(x), v))(x)
```

That’s efficient, but we can do even better and save some memory by using forward-mode together with reverse-mode.

Mathematically, given a function \(f : \mathbb{R}^n \to \mathbb{R}\) to differentiate, a point \(x \in \mathbb{R}^n\) at which to linearize the function, and a vector \(v \in \mathbb{R}^n\), the Hessian-vector product function we want is

\((x, v) \mapsto \partial^2 f(x) v\)

Consider the helper function \(g : \mathbb{R}^n \to \mathbb{R}^n\) defined to be the derivative (or gradient) of \(f\), namely \(g(x) = \partial f(x)\). All we need is its JVP, since that will give us

\((x, v) \mapsto \partial g(x) v = \partial^2 f(x) v\).

We can translate that almost directly into code:

```
from jax import jvp, grad
# forward-over-reverse
def hvp(f, primals, tangents):
return jvp(grad(f), primals, tangents)[1]
```

Even better, since we didn’t have to call `jnp.dot`

directly, this `hvp`

function works with arrays of any shape and with arbitrary container types (like vectors stored as nested lists/dicts/tuples), and doesn’t even have a dependence on `jax.numpy`

.

Here’s an example of how to use it:

```
def f(X):
return jnp.sum(jnp.tanh(X)**2)
key, subkey1, subkey2 = random.split(key, 3)
X = random.normal(subkey1, (30, 40))
V = random.normal(subkey2, (30, 40))
ans1 = hvp(f, (X,), (V,))
ans2 = jnp.tensordot(hessian(f)(X), V, 2)
print(jnp.allclose(ans1, ans2, 1e-4, 1e-4))
```

```
True
```

Another way you might consider writing this is using reverse-over-forward:

```
# reverse-over-forward
def hvp_revfwd(f, primals, tangents):
g = lambda primals: jvp(f, primals, tangents)[1]
return grad(g)(primals)
```

That’s not quite as good, though, because forward-mode has less overhead than reverse-mode, and since the outer differentiation operator here has to differentiate a larger computation than the inner one, keeping forward-mode on the outside works best:

```
# reverse-over-reverse, only works for single arguments
def hvp_revrev(f, primals, tangents):
x, = primals
v, = tangents
return grad(lambda x: jnp.vdot(grad(f)(x), v))(x)
print("Forward over reverse")
%timeit -n10 -r3 hvp(f, (X,), (V,))
print("Reverse over forward")
%timeit -n10 -r3 hvp_revfwd(f, (X,), (V,))
print("Reverse over reverse")
%timeit -n10 -r3 hvp_revrev(f, (X,), (V,))
print("Naive full Hessian materialization")
%timeit -n10 -r3 jnp.tensordot(hessian(f)(X), V, 2)
```

```
Forward over reverse
5.9 ms ± 86.6 μs per loop (mean ± std. dev. of 3 runs, 10 loops each)
Reverse over forward
16 ms ± 9.44 ms per loop (mean ± std. dev. of 3 runs, 10 loops each)
Reverse over reverse
19 ms ± 7.25 ms per loop (mean ± std. dev. of 3 runs, 10 loops each)
Naive full Hessian materialization
62 ms ± 1.83 ms per loop (mean ± std. dev. of 3 runs, 10 loops each)
```

## Composing VJPs, JVPs, and `vmap`

[#](#composing-vjps-jvps-and-vmap)

### Jacobian-Matrix and Matrix-Jacobian products[#](#jacobian-matrix-and-matrix-jacobian-products)

Now that we have `jvp`

and `vjp`

transformations that give us functions to push-forward or pull-back single vectors at a time, we can use JAX’s `vmap`

[transformation](https://github.com/jax-ml/jax#auto-vectorization-with-vmap) to push and pull entire bases at once. In particular, we can use that to write fast matrix-Jacobian and Jacobian-matrix products.

```
# Isolate the function from the weight matrix to the predictions
f = lambda W: predict(W, b, inputs)
# Pull back the covectors `m_i` along `f`, evaluated at `W`, for all `i`.
# First, use a list comprehension to loop over rows in the matrix M.
def loop_mjp(f, x, M):
y, vjp_fun = vjp(f, x)
return jnp.vstack([vjp_fun(mi) for mi in M])
# Now, use vmap to build a computation that does a single fast matrix-matrix
# multiply, rather than an outer loop over vector-matrix multiplies.
def vmap_mjp(f, x, M):
y, vjp_fun = vjp(f, x)
outs, = vmap(vjp_fun)(M)
return outs
key = random.key(0)
num_covecs = 128
U = random.normal(key, (num_covecs,) + y.shape)
loop_vs = loop_mjp(f, W, M=U)
print('Non-vmapped Matrix-Jacobian product')
%timeit -n10 -r3 loop_mjp(f, W, M=U)
print('\nVmapped Matrix-Jacobian product')
vmap_vs = vmap_mjp(f, W, M=U)
%timeit -n10 -r3 vmap_mjp(f, W, M=U)
assert jnp.allclose(loop_vs, vmap_vs), 'Vmap and non-vmapped Matrix-Jacobian Products should be identical'
```

```
Non-vmapped Matrix-Jacobian product
166 ms ± 1.05 ms per loop (mean ± std. dev. of 3 runs, 10 loops each)
Vmapped Matrix-Jacobian product
6.68 ms ± 177 μs per loop (mean ± std. dev. of 3 runs, 10 loops each)
```

```
/tmp/ipykernel_2312/3769736790.py:8: DeprecationWarning: vstack requires ndarray or scalar arguments, got <class 'tuple'> at position 0. In a future JAX release this will be an error.
return jnp.vstack([vjp_fun(mi) for mi in M])
```

```
def loop_jmp(f, W, M):
# jvp immediately returns the primal and tangent values as a tuple,
# so we'll compute and select the tangents in a list comprehension
return jnp.vstack([jvp(f, (W,), (mi,))[1] for mi in M])
def vmap_jmp(f, W, M):
_jvp = lambda s: jvp(f, (W,), (s,))[1]
return vmap(_jvp)(M)
num_vecs = 128
S = random.normal(key, (num_vecs,) + W.shape)
loop_vs = loop_jmp(f, W, M=S)
print('Non-vmapped Jacobian-Matrix product')
%timeit -n10 -r3 loop_jmp(f, W, M=S)
vmap_vs = vmap_jmp(f, W, M=S)
print('\nVmapped Jacobian-Matrix product')
%timeit -n10 -r3 vmap_jmp(f, W, M=S)
assert jnp.allclose(loop_vs, vmap_vs), 'Vmap and non-vmapped Jacobian-Matrix products should be identical'
```

```
Non-vmapped Jacobian-Matrix product
160 ms ± 750 μs per loop (mean ± std. dev. of 3 runs, 10 loops each)
Vmapped Jacobian-Matrix product
2.64 ms ± 43.4 μs per loop (mean ± std. dev. of 3 runs, 10 loops each)
```

### The implementation of `jacfwd`

and `jacrev`

[#](#the-implementation-of-jacfwd-and-jacrev)

Now that we’ve seen fast Jacobian-matrix and matrix-Jacobian products, it’s not hard to guess how to write `jacfwd`

and `jacrev`

. We just use the same technique to push-forward or pull-back an entire standard basis (isomorphic to an identity matrix) at once.

```
from jax import jacrev as builtin_jacrev
def our_jacrev(f):
def jacfun(x):
y, vjp_fun = vjp(f, x)
# Use vmap to do a matrix-Jacobian product.
# Here, the matrix is the Euclidean basis, so we get all
# entries in the Jacobian at once.
J, = vmap(vjp_fun, in_axes=0)(jnp.eye(len(y)))
return J
return jacfun
assert jnp.allclose(builtin_jacrev(f)(W), our_jacrev(f)(W)), 'Incorrect reverse-mode Jacobian results!'
```

```
from jax import jacfwd as builtin_jacfwd
def our_jacfwd(f):
def jacfun(x):
_jvp = lambda s: jvp(f, (x,), (s,))[1]
Jt = vmap(_jvp, in_axes=1)(jnp.eye(len(x)))
return jnp.transpose(Jt)
return jacfun
assert jnp.allclose(builtin_jacfwd(f)(W), our_jacfwd(f)(W)), 'Incorrect forward-mode Jacobian results!'
```

Interestingly, [Autograd](https://github.com/hips/autograd) couldn’t do this. Our [implementation](https://github.com/HIPS/autograd/blob/96a03f44da43cd7044c61ac945c483955deba957/autograd/differential_operators.py#L60) of reverse-mode `jacobian`

in Autograd had to pull back one vector at a time with an outer-loop `map`

. Pushing one vector at a time through the computation is much less efficient than batching it all together with `vmap`

.

Another thing that Autograd couldn’t do is `jit`

. Interestingly, no matter how much Python dynamism you use in your function to be differentiated, we could always use `jit`

on the linear part of the computation. For example:

```
def f(x):
try:
if x < 3:
return 2 * x ** 3
else:
raise ValueError
except ValueError:
return jnp.pi * x
y, f_vjp = vjp(f, 4.)
print(jit(f_vjp)(1.))
```

```
(Array(3.1415927, dtype=float32, weak_type=True),)
```

## Complex numbers and differentiation[#](#complex-numbers-and-differentiation)

JAX is great at complex numbers and differentiation. To support both [holomorphic and non-holomorphic differentiation](https://en.wikipedia.org/wiki/Holomorphic_function), it helps to think in terms of JVPs and VJPs.

Consider a complex-to-complex function \(f: \mathbb{C} \to \mathbb{C}\) and identify it with a corresponding function \(g: \mathbb{R}^2 \to \mathbb{R}^2\),

```
def f(z):
x, y = jnp.real(z), jnp.imag(z)
return u(x, y) + v(x, y) * 1j
def g(x, y):
return (u(x, y), v(x, y))
```

That is, we’ve decomposed \(f(z) = u(x, y) + v(x, y) i\) where \(z = x + y i\), and identified \(\mathbb{C}\) with \(\mathbb{R}^2\) to get \(g\).

Since \(g\) only involves real inputs and outputs, we already know how to write a Jacobian-vector product for it, say given a tangent vector \((c, d) \in \mathbb{R}^2\), namely

\(\begin{bmatrix} \partial_0 u(x, y) & \partial_1 u(x, y) \\ \partial_0 v(x, y) & \partial_1 v(x, y) \end{bmatrix} \begin{bmatrix} c \\ d \end{bmatrix}\).

To get a JVP for the original function \(f\) applied to a tangent vector \(c + di \in \mathbb{C}\), we just use the same definition and identify the result as another complex number,

\(\partial f(x + y i)(c + d i) = \begin{matrix} \begin{bmatrix} 1 & i \end{bmatrix} \\ ~ \end{matrix} \begin{bmatrix} \partial_0 u(x, y) & \partial_1 u(x, y) \\ \partial_0 v(x, y) & \partial_1 v(x, y) \end{bmatrix} \begin{bmatrix} c \\ d \end{bmatrix}\).

That’s our definition of the JVP of a \(\mathbb{C} \to \mathbb{C}\) function! Notice it doesn’t matter whether or not \(f\) is holomorphic: the JVP is unambiguous.

Here’s a check:

```
def check(seed):
key = random.key(seed)
# random coeffs for u and v
key, subkey = random.split(key)
a, b, c, d = random.uniform(subkey, (4,))
def fun(z):
x, y = jnp.real(z), jnp.imag(z)
return u(x, y) + v(x, y) * 1j
def u(x, y):
return a * x + b * y
def v(x, y):
return c * x + d * y
# primal point
key, subkey = random.split(key)
x, y = random.uniform(subkey, (2,))
z = x + y * 1j
# tangent vector
key, subkey = random.split(key)
c, d = random.uniform(subkey, (2,))
z_dot = c + d * 1j
# check jvp
_, ans = jvp(fun, (z,), (z_dot,))
expected = (grad(u, 0)(x, y) * c +
grad(u, 1)(x, y) * d +
grad(v, 0)(x, y) * c * 1j+
grad(v, 1)(x, y) * d * 1j)
print(jnp.allclose(ans, expected))
```

```
check(0)
check(1)
check(2)
```

```
True
True
True
```

What about VJPs? We do something pretty similar: for a cotangent vector \(c + di \in \mathbb{C}\) we define the VJP of \(f\) as

\((c + di)^* \; \partial f(x + y i) = \begin{matrix} \begin{bmatrix} c & -d \end{bmatrix} \\ ~ \end{matrix} \begin{bmatrix} \partial_0 u(x, y) & \partial_1 u(x, y) \\ \partial_0 v(x, y) & \partial_1 v(x, y) \end{bmatrix} \begin{bmatrix} 1 \\ -i \end{bmatrix}\).

What’s with the negatives? They’re just to take care of complex conjugation, and the fact that we’re working with covectors.

Here’s a check of the VJP rules:

```
def check(seed):
key = random.key(seed)
# random coeffs for u and v
key, subkey = random.split(key)
a, b, c, d = random.uniform(subkey, (4,))
def fun(z):
x, y = jnp.real(z), jnp.imag(z)
return u(x, y) + v(x, y) * 1j
def u(x, y):
return a * x + b * y
def v(x, y):
return c * x + d * y
# primal point
key, subkey = random.split(key)
x, y = random.uniform(subkey, (2,))
z = x + y * 1j
# cotangent vector
key, subkey = random.split(key)
c, d = random.uniform(subkey, (2,))
z_bar = jnp.array(c + d * 1j) # for dtype control
# check vjp
_, fun_vjp = vjp(fun, z)
ans, = fun_vjp(z_bar)
expected = (grad(u, 0)(x, y) * c +
grad(v, 0)(x, y) * (-d) +
grad(u, 1)(x, y) * c * (-1j) +
grad(v, 1)(x, y) * (-d) * (-1j))
assert jnp.allclose(ans, expected, atol=1e-5, rtol=1e-5)
```

```
check(0)
check(1)
check(2)
```

What about convenience wrappers like `grad`

, `jacfwd`

, and `jacrev`

?

For \(\mathbb{R} \to \mathbb{R}\) functions, recall we defined `grad(f)(x)`

as being `vjp(f, x)[1](1.0)`

, which works because applying a VJP to a `1.0`

value reveals the gradient (i.e. Jacobian, or derivative). We can do the same thing for \(\mathbb{C} \to \mathbb{R}\) functions: we can still use `1.0`

as the cotangent vector, and we just get out a complex number result summarizing the full Jacobian:

```
def f(z):
x, y = jnp.real(z), jnp.imag(z)
return x**2 + y**2
z = 3. + 4j
grad(f)(z)
```

```
Array(6.-8.j, dtype=complex64)
```

For general \(\mathbb{C} \to \mathbb{C}\) functions, the Jacobian has 4 real-valued degrees of freedom (as in the 2x2 Jacobian matrices above), so we can’t hope to represent all of them within a complex number. But we can for holomorphic functions! A holomorphic function is precisely a \(\mathbb{C} \to \mathbb{C}\) function with the special property that its derivative can be represented as a single complex number. (The [Cauchy-Riemann equations](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Riemann_equations) ensure that the above 2x2 Jacobians have the special form of a scale-and-rotate matrix in the complex plane, i.e. the action of a single complex number under multiplication.) And we can reveal that one complex number using a single call to `vjp`

with a covector of `1.0`

.

Because this only works for holomorphic functions, to use this trick we need to promise JAX that our function is holomorphic; otherwise, JAX will raise an error when `grad`

is used for a complex-output function:

```
def f(z):
return jnp.sin(z)
z = 3. + 4j
grad(f, holomorphic=True)(z)
```

```
Array(-27.034946-3.8511534j, dtype=complex64, weak_type=True)
```

All the `holomorphic=True`

promise does is disable the error when the output is complex-valued. We can still write `holomorphic=True`

when the function isn’t holomorphic, but the answer we get out won’t represent the full Jacobian. Instead, it’ll be the Jacobian of the function where we just discard the imaginary part of the output:

```
def f(z):
return jnp.conjugate(z)
z = 3. + 4j
grad(f, holomorphic=True)(z) # f is not actually holomorphic!
```

```
Array(1.-0.j, dtype=complex64, weak_type=True)
```

There are some useful upshots for how `grad`

works here:

We can use

`grad`

on holomorphic \(\mathbb{C} \to \mathbb{C}\) functions.We can use

`grad`

to optimize \(f : \mathbb{C} \to \mathbb{R}\) functions, like real-valued loss functions of complex parameters`x`

, by taking steps in the direction of the conjugate of`grad(f)(x)`

.If we have an \(\mathbb{R} \to \mathbb{R}\) function that just happens to use some complex-valued operations internally (some of which must be non-holomorphic, e.g. FFTs used in convolutions) then

`grad`

still works and we get the same result that an implementation using only real values would have given.

In any case, JVPs and VJPs are always unambiguous. And if we wanted to compute the full Jacobian matrix of a non-holomorphic \(\mathbb{C} \to \mathbb{C}\) function, we can do it with JVPs or VJPs!

You should expect complex numbers to work everywhere in JAX. Here’s differentiating through a Cholesky decomposition of a complex matrix:

```
A = jnp.array([[5., 2.+3j, 5j],
[2.-3j, 7., 1.+7j],
[-5j, 1.-7j, 12.]])
def f(X):
L = jnp.linalg.cholesky(X)
return jnp.sum((L - jnp.sin(L))**2)
grad(f, holomorphic=True)(A)
```

```
Array([[-0.75341904 +0.j , -3.0509028 -10.940545j ,
5.9896846 +3.5423026j],
[-3.0509028 +10.940545j , -8.904491 +0.j ,
-5.1351523 -6.559373j ],
[ 5.9896846 -3.5423026j, -5.1351523 +6.559373j ,
0.01320427 +0.j ]], dtype=complex64)
```

## More advanced autodiff[#](#more-advanced-autodiff)

In this notebook, we worked through some easy, and then progressively more complicated, applications of automatic differentiation in JAX. We hope you now feel that taking derivatives in JAX is easy and powerful. For more details, check out the [“Advanced automatic differentiation” section in the JAX advanced guides](https://jax.readthedocs.io/en/latest/advanced_guides.html).

There’s a whole world of other autodiff tricks and functionality out there. Topics we didn’t cover, but hope to in an “Advanced Autodiff Cookbook” include:

Gauss-Newton Vector Products, linearizing once

Custom VJPs and JVPs

Efficient derivatives at fixed-points

Estimating the trace of a Hessian using random Hessian-vector products.

Forward-mode autodiff using only reverse-mode autodiff.

Taking derivatives with respect to custom data types.

Checkpointing (binomial checkpointing for efficient reverse-mode, not model snapshotting).

Optimizing VJPs with Jacobian pre-accumulation.

---

## Source: https://jax.readthedocs.io/en/latest/notebooks/autodiff_remat.html

# Control autodiff’s saved values with `jax.checkpoint`

(aka `jax.remat`

)[#](#control-autodiff-s-saved-values-with-jax-checkpoint-aka-jax-remat)

```
import jax
import jax.numpy as jnp
```

## Summary[#](#summary)

Use the `jax.checkpoint`

decorator (aliased as `jax.remat`

) with `jax.grad`

to control which intermediates are saved on the forward pass versus recomputed on the backward pass, trading off memory and FLOPs.

**Don’t miss the practical notes for a discussion about how jax.checkpoint interacts with jax.jit.**



Without using `jax.checkpoint`

, the forward pass of `jax.grad(f)(x)`

saves, for use on the backward pass, the values of Jacobian coefficients and other intermediates. We call these saved values *residuals*:

```
def g(W, x):
y = jnp.dot(W, x)
return jnp.sin(y)
def f(W1, W2, W3, x):
x = g(W1, x)
x = g(W2, x)
x = g(W3, x)
return x
W1 = jnp.ones((5, 4))
W2 = jnp.ones((6, 5))
W3 = jnp.ones((7, 6))
x = jnp.ones(4)
# Inspect the 'residual' values to be saved on the forward pass
# if we were to evaluate `jax.grad(f)(W1, W2, W3, x)`
from jax.ad_checkpoint import print_saved_residuals
jax.ad_checkpoint.print_saved_residuals(f, W1, W2, W3, x)
```

```
f32[5,4] from the argument 'W1'
f32[6,5] from the argument 'W2'
f32[7,6] from the argument 'W3'
f32[4] from the argument 'x'
f32[5] output of sin from <ipython-input-4-f510dde58e22>:3 (g)
f32[5] output of cos from <ipython-input-4-f510dde58e22>:3 (g)
f32[6] output of sin from <ipython-input-4-f510dde58e22>:3 (g)
f32[6] output of cos from <ipython-input-4-f510dde58e22>:3 (g)
f32[7] output of cos from <ipython-input-4-f510dde58e22>:3 (g)
```

By applying `jax.checkpoint`

to sub-functions, as a decorator or at specific application sites, we force JAX not to save any of that sub-function’s residuals. Instead, only the inputs of a `jax.checkpoint`

-decorated function might be saved, and any residuals consumed on the backward pass are re-computed from those inputs as needed:

```
def f2(W1, W2, W3, x):
x = jax.checkpoint(g)(W1, x)
x = jax.checkpoint(g)(W2, x)
x = jax.checkpoint(g)(W3, x)
return x
jax.ad_checkpoint.print_saved_residuals(f2, W1, W2, W3, x)
```

```
f32[5,4] from the argument 'W1'
f32[6,5] from the argument 'W2'
f32[7,6] from the argument 'W3'
f32[4] from the argument 'x'
f32[5] output of sin from <ipython-input-4-f510dde58e22>:3 (g)
f32[6] output of sin from <ipython-input-4-f510dde58e22>:3 (g)
```

Here the values of two `sin`

applications are saved because they are arguments
in subsequent applications of the `jax.checkpoint`

-decorated `g`

function, and
inputs to a `jax.checkpoint`

-decorated function may be saved. But no values of
`cos`

applications are saved.

To control which values are saveable without having to edit the definition of the function to be differentiated, you can use a rematerialization *policy*. Here is an example that saves only the results of `dot`

operations with no batch dimensions (since they are often FLOP-bound, and hence worth saving rather than recomputing):

```
f3 = jax.checkpoint(f, policy=jax.checkpoint_policies.dots_with_no_batch_dims_saveable)
jax.ad_checkpoint.print_saved_residuals(f3, W1, W2, W3, x)
```

```
f32[5,4] from the argument 'W1'
f32[6,5] from the argument 'W2'
f32[7,6] from the argument 'W3'
f32[4] from the argument 'x'
f32[5] output of dot_general from <ipython-input-4-f510dde58e22>:2 (g)
f32[6] output of dot_general from <ipython-input-4-f510dde58e22>:2 (g)
f32[7] output of dot_general from <ipython-input-4-f510dde58e22>:2 (g)
```

You can also use policies to refer to intermediate values you name using `jax.ad_checkpoint.checkpoint_name`

:

```
from jax.ad_checkpoint import checkpoint_name
def f4(W1, W2, W3, x):
x = checkpoint_name(g(W1, x), name='a')
x = checkpoint_name(g(W2, x), name='b')
x = checkpoint_name(g(W3, x), name='c')
return x
f4 = jax.checkpoint(f4, policy=jax.checkpoint_policies.save_only_these_names('a'))
jax.ad_checkpoint.print_saved_residuals(f4, W1, W2, W3, x)
```

```
f32[5,4] from the argument 'W1'
f32[6,5] from the argument 'W2'
f32[7,6] from the argument 'W3'
f32[4] from the argument 'x'
f32[5] named 'a' from <ipython-input-7-fc0ed1c14b8d>:4 (f4)
```

When playing around with these toy examples, we can get a closer look at what’s going on using the `print_fwd_bwd`

utility defined in this notebook:

```
from jax.tree_util import tree_flatten, tree_unflatten
from rich.console import Console
from rich.table import Table
import rich.text
def print_fwd_bwd(f, *args, **kwargs) -> None:
args, in_tree = tree_flatten((args, kwargs))
def f_(*args):
args, kwargs = tree_unflatten(in_tree, args)
return f(*args, **kwargs)
fwd = jax.make_jaxpr(lambda *args: jax.vjp(f_, *args))(*args).jaxpr
y, f_vjp = jax.vjp(f_, *args)
res, in_tree = tree_flatten(f_vjp)
def g_(*args):
*res, y = args
f_vjp = tree_unflatten(in_tree, res)
return f_vjp(y)
bwd = jax.make_jaxpr(g_)(*res, y).jaxpr
table = Table(show_header=False, show_lines=True, padding=(1, 2, 0, 2), box=None)
table.add_row("[bold green]forward computation:",
"[bold green]backward computation:")
table.add_row(rich.text.Text.from_ansi(str(fwd)),
rich.text.Text.from_ansi(str(bwd)))
console = Console(width=240, force_jupyter=True)
console.print(table)
def _renderable_repr(self):
return self.html
rich.jupyter.JupyterRenderable._repr_html_ = _renderable_repr
```

```
# no use of jax.checkpoint:
print_fwd_bwd(f, W1, W2, W3, x)
```

forward computation: backward computation: { lambda ; a:f32[5,4] b:f32[6,5] c:f32[7,6] d:f32[4]. let { lambda ; a:f32[7] b:f32[6] c:f32[7,6] d:f32[6] e:f32[5] f:f32[6,5] g:f32[5] h:f32[4] e:f32[5] = dot_general[dimension_numbers=(([1], [0]), ([], []))] a d i:f32[5,4] j:f32[7]. let f:f32[5] = sin e k:f32[7] = mul j a g:f32[5] = cos e l:f32[6] = dot_general[dimension_numbers=(([0], [0]), ([], []))] k c h:f32[6] = dot_general[dimension_numbers=(([1], [0]), ([], []))] b f m:f32[7,6] = dot_general[dimension_numbers=(([], []), ([], []))] k b i:f32[6] = sin h n:f32[6] = mul l d j:f32[6] = cos h o:f32[5] = dot_general[dimension_numbers=(([0], [0]), ([], []))] n f k:f32[7] = dot_general[dimension_numbers=(([1], [0]), ([], []))] c i p:f32[6,5] = dot_general[dimension_numbers=(([], []), ([], []))] n e l:f32[7] = sin k q:f32[5] = mul o g m:f32[7] = cos k r:f32[4] = dot_general[dimension_numbers=(([0], [0]), ([], []))] q i in (l, m, i, c, j, f, b, g, d, a) } s:f32[5,4] = dot_general[dimension_numbers=(([], []), ([], []))] q h in (s, p, m, r) }

```
# using jax.checkpoint with policy=jax.checkpoint_policies.dots_with_no_batch_dims_saveable:
print_fwd_bwd(f3, W1, W2, W3, x)
```

forward computation: backward computation: { lambda ; a:f32[5,4] b:f32[6,5] c:f32[7,6] d:f32[4]. let { lambda ; a:f32[5] b:f32[6] c:f32[7] d:f32[5,4] e:f32[6,5] f:f32[7,6] g:f32[4] h:f32[7]. let e:f32[5] = dot_general[dimension_numbers=(([1], [0]), ([], []))] a d i:f32[5,4] j:f32[6,5] k:f32[7,6] l:f32[4] = remat2[ f:f32[5] = sin e differentiated=True g:f32[6] = dot_general[dimension_numbers=(([1], [0]), ([], []))] b f jaxpr={ lambda ; m:f32[5] n:f32[6] o:f32[7] p:f32[5,4] q:f32[6,5] r:f32[7,6] h:f32[6] = sin g s:f32[4] t:f32[7]. let i:f32[7] = dot_general[dimension_numbers=(([1], [0]), ([], []))] c h u:f32[5] = sin m j:f32[7] = sin i v:f32[5] = cos m in (j, e, g, i, a, b, c, d) } w:f32[6] = sin n x:f32[6] = cos n y:f32[7] = cos o z:f32[7] = mul t y ba:f32[6] = dot_general[dimension_numbers=(([0], [0]), ([], []))] z r bb:f32[6] = mul ba x bc:f32[5] = dot_general[dimension_numbers=(([0], [0]), ([], []))] bb q bd:f32[5] = mul bc v be:f32[4] = dot_general[dimension_numbers=(([0], [0]), ([], []))] bd p bf:f32[5,4] = dot_general[dimension_numbers=(([], []), ([], []))] bd s bg:f32[6,5] = dot_general[dimension_numbers=(([], []), ([], []))] bb u bh:f32[7,6] = dot_general[dimension_numbers=(([], []), ([], []))] z w in (bf, bg, bh, be) } policy=<function dot_with_no_batch_dims at 0x7f5e469b1700> prevent_cse=True ] a b c d e f g h in (i, j, k, l) }

## Let’s think step by step[#](#let-s-think-step-by-step)

You might want to first (re)read [the Autodiff Cookbook Part 1](https://docs.jax.dev/en/latest/notebooks/autodiff_cookbook.html).

### Fundamentals of `jax.checkpoint`

[#](#fundamentals-of-jax-checkpoint)

In both `jax.linearize`

and `jax.vjp`

there is flexibility in how and when some values are computed. Different choices can trade off memory use against FLOPs. JAX provides control over these choices with `jax.checkpoint`

.

One such choice is whether to perform Jacobian coefficient computations on the forward pass, as soon as the inputs are available, or on the backward pass, just before the coefficients are needed. Consider the example of `sin_vjp`

:

```
def sin_vjp(x):
y = jnp.sin(x)
cos_x = jnp.cos(x)
return y, lambda y_bar: cos_x * y_bar
```

Another valid implementation would compute the value of `jnp.cos(x)`

on the backward pass rather than on the forward pass:

```
def sin_vjp2(x):
y = jnp.sin(x)
return y, lambda y_bar: jnp.cos(x) * y_bar
```

For this particular function, the amount of memory used by the two versions is the same, though we’ve reduced the FLOPs for the primal computation (i.e. the forward pass) and increased the FLOPs for the cotangent computation (i.e. the backward pass).

There’s another choice when it comes to function composition. Recall our VJP rule for a composition of two functions:

```
def f(x):
y = g(x)
z = h(y)
return z
def f_vjp(x):
y, g_vjp = jax.vjp(g, x)
z, h_vjp = jax.vjp(h, y)
def f_bwd(z_bar):
y_bar, = h_vjp(z_bar)
x_bar, = g_vjp(y_bar)
return x_bar
return z, f_bwd
```

An alternative is:

```
def f_vjp_checkpoint(x):
y = g(x)
z, h_vjp = jax.vjp(h, y)
def f_bwd2(z_bar):
y_bar, = h_vjp(z_bar)
_, g_vjp = jax.vjp(g, x)
x_bar, = g_vjp(y_bar)
return x_bar
return z, f_bwd2
```

In words, this alternative implementation doesn’t compute `g_vjp`

, or the residual values in its closure, on the forward pass. Instead it only computes them in the backward pass `f_bwd2`

. That means `f_vjp_checkpoint`

requires less memory: if `g`

and `h`

each required similar amounts of memory for their residuals, each much larger than `x`

, then the function produced by `f_vjp_checkpoint(x)`

requires half the memory as that of `f_vjp(x)`

!

The cost we pay is redundant work: in `f_bwd2`

we must re-evaluate `g(x)`

as part of `jax.vjp(g, x)`

just to discard its value (in the underscore variable on the line `_, g_vjp = jax.vjp(g, x)`

).

We can get this VJP behavior in autodiff — without having to write VJP functions directly — by instead using `jax.checkpoint`

in an alternative definition of the original function `f`

:

```
def f_checkpoint(x):
y = jax.checkpoint(g)(x)
z = h(y)
return z
```

In other words, we apply `jax.checkpoint`

to `g`

, the first stage of `f`

, rather than to `f`

itself. This way, when we evaluate `jax.grad(f_checkpoint)(x)`

, we’d get a computation like:

run the forward pass of

`g`

, discarding residual values;run the forward pass of

`h`

, saving residuals;run the backward pass of

`h`

, consuming residuals from step 2;re-run the forward pass of

`g`

, saving residuals;run the backward pass of

`g`

, consuming residuals from step 4.

That is, by evaluating `jax.grad(f_checkpoint)(x)`

we’d get the same computation as:

```
def f_checkpoint_grad(x):
y = g(x) # step 1
_, h_vjp = jax.vjp(h)(y) # step 2
y_bar, = h_vjp(1.0) # step 3
_, g_vjp = jax.vjp(g, x) # step 4
x_bar, = g_vjp(y_bar) # step 5
return x_bar
```

In general, `jax.checkpoint(foo)`

is a new function which has the same input-output behavior as `foo`

, but behaves differently under autodiff, particularly under `jax.linearize`

and `jax.vjp`

(and their wrappers, like `jax.grad`

) but not `jax.jvp`

. When differentiated, only the input to a `jax.checkpoint`

-differentiated function is stored on the forward pass; on the backward pass, residuals (i.e. intermediates from `foo`

and its Jacobian coefficient values needed for the backward pass) are recomputed.

Notice that if `f = lambda x: h(g(x))`

is the function we want to differentiate, i.e. if we want to apply `jax.grad(f)`

, we don’t get any memory savings by applying `jax.checkpoint`

to `f`

itself. That’s because evaluating `jax.grad(jax.checkpoint(f))(x)`

would lead to a computation like:

run the forward pass, discarding all residuals;

immediately re-run the forward pass, saving residuals;

run the backward pass, consuming residuals from step 2.


That is, in code we’d have something like:

```
def f_grad_bad1(x):
_ = f(x) # step 1
_, f_vjp = jax.vjp(f, x) # step 2
x_bar, = f_vjp(1.0) # step 3
return x_bar
```

We also wouldn’t get any memory savings by applying `jax.checkpoint`

to `h`

, the second stage of `f`

. That’s because evaluating `jax.grad(lambda x: jax.checkpoint(h)(g(x)))`

would lead to a computation like:

run the forward pass of

`g`

, saving residuals;run the forward pass of

`h`

, discarding residuals;immediately re-run the forward pass of

`h`

, saving residuals;run the backward pass of

`h`

, consuming residuals from step 3;run the backward pass of

`g`

, consuming residuals from step 1.

That is, in code we’d have something like:

```
def f_grad_bad2(x):
y, g_vjp = jax.vjp(g, x) # step 1
_z = h(y) # step 2
_, h_vjp = jax.vjp(h, y) # step 3
y_bar, = h_vjp(1.0) # step 3
x_bar, = g_vjp(y_bar) # step 5
return x_bar
```

Slightly more generally, if we had a chain composition of functions, like `f = lambda x: f3(f2(f1(x)))`

, and we were interested in evaluating `jax.grad(f)`

, we could say that:

we shouldn’t apply

`jax.checkpoint`

to the whole function`f`

, since that wouldn’t save any memory (and will perform wasteful recomputation);we shouldn’t apply

`jax.checkpoint`

to the last sub-function`f3`

, since that wouldn’t save any memory (and will perform wasteful recomputation);we could apply

`jax.checkpoint`

to`f1`

,`f2`

, or their composition`lambda x: f2(f1(x))`

, since any of those might save memory and would express different memory/recompute tradeoffs.

### Custom policies for what’s saveable[#](#custom-policies-for-what-s-saveable)

As shown so far, using `jax.checkpoint`

switches from one extreme to another:

without

`jax.checkpoint`

, JAX’s autodiff tends to compute everything possible on the forward pass and store it for the backward pass;with a

`jax.checkpoint`

decorator, we instead compute as little as possible on the forward pass and recompute values as needed on the backward pass.

To operate between these two extremes, saving some things and not others, we can carefully place `jax.checkpoint`

decorators on sub-functions. But that requires editing the function to be differentiated, e.g. model code, which may be inconvenient. It can also be hard to experiment with variations.

So an alternative is to use the `policy`

argument to `jax.checkpoint`

. A policy is a callable (i.e. a function) which takes as input a type-level specification of a first order primitive application and returns a boolean indicating whether the corresponding output value(s) are allowed to be saved as residuals (or instead must be recomputed in the (co)tangent computation as needed). To write robust code, a policy should be selected from the attributes on `jax.checkpoint_policies`

, like `jax.checkpoint_policies.dots_with_no_batch_dims_saveable`

, since the API for writing custom policy callables is considered internal.

For example, consider this function to be differentiated:

```
def loss(params, x, y):
return jnp.sum((predict(params, x) - y)**2)
def predict(params, x):
*Ws, Wlast = params
for W in Ws:
x = layer(W, x)
x = jnp.dot(Wlast, x)
return x
def layer(W, x):
return jnp.sin(jnp.dot(W, x))
```

```
W1 = W2 = W3 = jnp.ones((4, 4))
params = [W1, W2, W3]
x = jnp.ones(4)
y = jnp.ones(4)
```

```
print_saved_residuals(loss, params, x, y)
```

```
f32[4,4] from the argument 'params'
f32[4,4] from the argument 'params'
f32[4,4] from the argument 'params'
f32[4] from the argument 'x'
f32[4] output of sin from <ipython-input-18-3808b5023c3d>:12 (layer)
f32[4] output of cos from <ipython-input-18-3808b5023c3d>:12 (layer)
f32[4] output of sin from <ipython-input-18-3808b5023c3d>:12 (layer)
f32[4] output of cos from <ipython-input-18-3808b5023c3d>:12 (layer)
f32[4] output of mul from <ipython-input-18-3808b5023c3d>:2 (loss)
```

Instead of saving so many values on the forward pass, perhaps we only want to save the results of matrix multiplications with no batch dimension (since they may be FLOP- rather than memory-bound). We can do that using the policy `jax.checkpoint_policies.dots_with_no_batch_dims_saveable`

:

```
loss_checkpoint = jax.checkpoint(loss, policy=jax.checkpoint_policies.dots_with_no_batch_dims_saveable)
print_saved_residuals(loss_checkpoint, params, x, y)
```

```
f32[4,4] from the argument 'params'
f32[4,4] from the argument 'params'
f32[4,4] from the argument 'params'
f32[4] from the argument 'x'
f32[4] from the argument 'y'
f32[4] output of dot_general from <ipython-input-18-3808b5023c3d>:12 (layer)
f32[4] output of dot_general from <ipython-input-18-3808b5023c3d>:12 (layer)
f32[4] output of dot_general from <ipython-input-18-3808b5023c3d>:8 (predict)
```

Notice also that by providing a policy, we didn’t need to edit the code defining `loss`

, `predict`

, or `layer`

. That is particularly convenient if we want to experiment with policies in calling code (e.g. a training script) without changing library code (e.g. the neural network library).

Some policies can refer to values named with `jax.ad_checkpoint.checkpoint_name`

:

```
def predict(params, x):
*Ws, Wlast = params
for i, W in enumerate(Ws):
x = layer(W, x)
x = checkpoint_name(x, name=f'layer{i}_output')
x = jnp.dot(Wlast, x)
return x
```

By itself, `checkpoint_name`

is just an identity function. But because some policy functions know to look for them, we can use the names to control whether certain values output by `checkpoint_name`

are considered saveable:

```
print_saved_residuals(loss, params, x, y)
```

```
f32[4,4] from the argument 'params'
f32[4,4] from the argument 'params'
f32[4,4] from the argument 'params'
f32[4] from the argument 'x'
f32[4] output of cos from <ipython-input-18-3808b5023c3d>:12 (layer)
f32[4] named 'layer0_output' from <ipython-input-22-e48aedf368ad>:7 (predict)
f32[4] output of cos from <ipython-input-18-3808b5023c3d>:12 (layer)
f32[4] named 'layer1_output' from <ipython-input-22-e48aedf368ad>:7 (predict)
f32[4] output of mul from <ipython-input-18-3808b5023c3d>:2 (loss)
```

```
loss_checkpoint2 = jax.checkpoint(loss, policy=jax.checkpoint_policies.save_any_names_but_these('layer1_output'))
print_saved_residuals(loss_checkpoint2, params, x, y)
```

```
f32[4,4] from the argument 'params'
f32[4,4] from the argument 'params'
f32[4,4] from the argument 'params'
f32[4] from the argument 'x'
f32[4] from the argument 'y'
```

Another policy which refers to names is `jax.checkpoint_policies.save_only_these_names`

.

A list of policies can be found [here](https://docs.jax.dev/en/latest/jax.html#checkpoint-policies).

Policies only indicate what is saveable; a value is only saved if it’s actually needed by the backward pass.

### Advanced: recursive `jax.checkpoint`

[#](#advanced-recursive-jax-checkpoint)

By applying `jax.checkpoint`

in the right way, there are many tradeoffs between memory usage and (re)computation that can be expressed. One surprising example is *recursive* checkpointing, where we apply `jax.checkpoint`

to a function which itself calls `jax.checkpoint`

-decorated functions in a way so that memory usage from the chain composition of \(D\) functions scales like \(\mathcal{O}(\log_2 D)\) rather than \(\mathcal{O}(D)\).

As a toy example, consider the chain composition of multiple `jnp.sin`

functions:

```
def chain_compose(funs):
def f(x):
for fun in funs:
x = fun(x)
return x
return f
f = chain_compose([jnp.sin] * 8)
print_saved_residuals(f, 3.)
```

```
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
```

In general, the number of stored residuals scales linearly with the length of the chain:

```
f = chain_compose([jnp.sin] * 16)
print_saved_residuals(f, 3.)
```

```
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
f32[] output of cos from <ipython-input-25-46b5594773cb>:4 (f)
```

But we can apply `jax.checkpoint`

recursively to improve the scaling:

```
def recursive_checkpoint(funs):
if len(funs) == 1:
return funs[0]
elif len(funs) == 2:
f1, f2 = funs
return lambda x: f1(f2(x))
else:
f1 = recursive_checkpoint(funs[:len(funs)//2])
f2 = recursive_checkpoint(funs[len(funs)//2:])
return lambda x: f1(jax.checkpoint(f2)(x))
```

```
f = recursive_checkpoint([jnp.sin] * 8)
print_saved_residuals(f, 3.)
```

```
f32[] from the argument 'x'
f32[] output of sin from <ipython-input-27-86f83c871e81>:6 (<lambda>)
f32[] output of cos from <ipython-input-27-86f83c871e81>:6 (<lambda>)
f32[] output of cos from <ipython-input-27-86f83c871e81>:6 (<lambda>)
```

```
f = recursive_checkpoint([jnp.sin] * 16)
print_saved_residuals(f, 3.)
```

```
f32[] from the argument 'x'
f32[] output of sin from <ipython-input-27-86f83c871e81>:6 (<lambda>)
f32[] output of sin from <ipython-input-27-86f83c871e81>:6 (<lambda>)
f32[] output of cos from <ipython-input-27-86f83c871e81>:6 (<lambda>)
f32[] output of cos from <ipython-input-27-86f83c871e81>:6 (<lambda>)
```

The cost here, as usual, is recomputation: in particular, we end up performing \(\mathcal{O}(\log_2 D)\) times as many FLOPs:

```
f = chain_compose([jnp.sin] * 8)
print_fwd_bwd(f, 3.)
```

forward computation: backward computation: { lambda ; a:f32[]. let { lambda ; a:f32[] b:f32[] c:f32[] d:f32[] e:f32[] f:f32[] g:f32[] h:f32[] i:f32[]. let b:f32[] = sin a j:f32[] = mul i a c:f32[] = cos a k:f32[] = mul j b d:f32[] = sin b l:f32[] = mul k c e:f32[] = cos b m:f32[] = mul l d f:f32[] = sin d n:f32[] = mul m e g:f32[] = cos d o:f32[] = mul n f h:f32[] = sin f p:f32[] = mul o g i:f32[] = cos f q:f32[] = mul p h j:f32[] = sin h in (q,) } k:f32[] = cos h l:f32[] = sin j m:f32[] = cos j n:f32[] = sin l o:f32[] = cos l p:f32[] = sin n q:f32[] = cos n in (p, q, o, m, k, i, g, e, c) }

```
f = recursive_checkpoint([jnp.sin] * 8)
print_fwd_bwd(f, 3.)
```

forward computation: backward computation: { lambda ; a:f32[]. let { lambda ; a:f32[] b:f32[] c:f32[] d:f32[]. let b:f32[] = remat2[ e:f32[] = mul d a differentiated=False f:f32[] = mul e b jaxpr={ lambda ; c:f32[]. let d:f32[] = sin c; e:f32[] = sin d in (e,) } g:f32[] = remat2[ policy=None differentiated=True prevent_cse=True jaxpr={ lambda ; h:f32[] i:f32[]. let ] a j:f32[] = sin h f:f32[] = sin b k:f32[] = cos h g:f32[] = sin f l:f32[] = cos j h:f32[] = sin g m:f32[] = mul i l i:f32[] = sin h n:f32[] = mul m k j:f32[] = sin i in (n,) } k:f32[] = cos i policy=None l:f32[] = sin j prevent_cse=True m:f32[] = cos j ] c f in (l, m, k, g, a) } o:f32[] = remat2[ differentiated=True jaxpr={ lambda ; p:f32[] q:f32[]. let r:f32[] = sin p s:f32[] = sin r t:f32[] = sin s u:f32[] = cos s v:f32[] = cos t w:f32[] = mul q v x:f32[] = mul w u y:f32[] = remat2[ differentiated=True jaxpr={ lambda ; z:f32[] ba:f32[]. let bb:f32[] = sin z bc:f32[] = cos z bd:f32[] = cos bb be:f32[] = mul ba bd bf:f32[] = mul be bc in (bf,) } policy=None prevent_cse=True ] p x in (y,) } policy=None prevent_cse=True ] 3.0 g in (o,) }

## Practical notes[#](#practical-notes)

When differentiated functions are staged out to XLA for compilation, for example by applying `jax.jit`

to a function which contains a `jax.grad`

call, XLA will automatically optimize the computation, including decisions about when to compute or rematerialize values. As a result, ** jax.checkpoint often isn’t needed for differentiated functions under a jax.jit**. XLA will optimize things for you.


One exception is when using staged-out control flow, like `jax.lax.scan`

. Automatic compiler optimizations across multiple control flow primitives, e.g. across a forward-pass `scan`

and the corresponding backward-pass `scan`

, typically aren’t as thorough. As a result, it’s often a good idea to use `jax.checkpoint`

on the body function passed to `jax.lax.scan`

.

For example, one common pattern in large [Transformer models](https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)) is to express the architecture as a `jax.lax.scan`

over layers so as to reduce compilation times. That is, using a simple fully-connected network as an analogy, instead of writing something like this:

```
LayerParam = tuple[jnp.ndarray, jnp.ndarray] # weights, bias pair for a layer
ParamsList = list[LayerParam]
def net(params: ParamsList, x: jnp.ndarray):
for W, b in params:
x = jnp.maximum(jnp.dot(x, W) + b, 0.)
return x
```

We would instead iterate over the layer application with `jax.lax.scan`

:

```
StackedWeights = jnp.ndarray # all weight matrices stacked together
StackedBiases = jnp.ndarray # all bias vectors stacked together
all_weights = jnp.stack([W for W, _ in params])
all_biases = jnp.stack([b for _, b in params])
def layer(x, W_b_pair):
W, b = W_b_pair
out = jnp.maximum(jnp.dot(x, W) + b, 0.)
return out, None
def net(all_weights, all_biases, x):
x, _ = jax.lax.scan(layer, x, (all_weights, all_biases))
return x
```

This scan-over-layers version reduces compile times, but by foiling some compiler optimizations it can lead to inefficient computation of gradients. To mitigate the issue, we would use `jax.checkpoint`

on the scanned function:

```
from functools import partial
@partial(jax.checkpoint,
policy=jax.checkpoint_policies.dots_with_no_batch_dims_saveable)
def layer(x, W_b_pair):
W, b = W_b_pair
out = jnp.maximum(jnp.dot(x, W) + b, 0.)
return out, None
```

By using `jax.checkpoint`

this way, we’re manually controlling which values JAX’s autodiff saves between the forward and backward passes, and hence not relying on XLA optimizations to choose for us.

---

## Source: https://jax.readthedocs.io/en/latest/advanced_autodiff.html

Advanced Automatic Differentiation# Advanced automatic differentiation Higher-order derivatives Forward- and reverse-mode autodiff in JAX Complex numbers and differentiation Custom derivative rules for JAX-transformable Python functions

---

## Source: https://jax.readthedocs.io/en/latest/higher-order.html

# Higher-order derivatives[#](#higher-order-derivatives)

## Taking gradients (part 2)[#](#taking-gradients-part-2)

JAX’s autodiff makes it easy to compute higher-order derivatives, because the functions that compute derivatives are themselves differentiable. Thus, higher-order derivatives are as easy as stacking transformations.

The single-variable case was covered in the [Automatic differentiation](automatic-differentiation.html#automatic-differentiation) tutorial, where the example showed how to use [ jax.grad()](_autosummary/jax.grad.html#jax.grad) to compute the derivative of \(f(x) = x^3 + 2x^2 - 3x + 1\).

In the multivariable case, higher-order derivatives are more complicated. The second-order derivative of a function is represented by its [Hessian matrix](https://en.wikipedia.org/wiki/Hessian_matrix), defined according to:

The Hessian of a real-valued function of several variables, \(f: \mathbb R^n\to\mathbb R\), can be identified with the [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant) of its gradient.

JAX provides two transformations for computing the Jacobian of a function, [ jax.jacfwd()](_autosummary/jax.jacfwd.html#jax.jacfwd) and

[, corresponding to forward- and reverse-mode autodiff. They give the same answer, but one can be more efficient than the other in different circumstances – refer to the](_autosummary/jax.jacrev.html#jax.jacrev)

`jax.jacrev()`

[video about autodiff](https://www.youtube.com/watch?v=wG_nF1awSSY).

```
import jax
def hessian(f):
return jax.jacfwd(jax.grad(f))
```

Let’s double check this is correct on the dot-product \(f: \mathbf{x} \mapsto \mathbf{x} ^\top \mathbf{x}\).

if \(i=j\), \(\frac{\partial^2 f}{\partial_i\partial_j}(\mathbf{x}) = 2\). Otherwise, \(\frac{\partial^2 f}{\partial_i\partial_j}(\mathbf{x}) = 0\).

```
import jax.numpy as jnp
def f(x):
return jnp.dot(x, x)
hessian(f)(jnp.array([1., 2., 3.]))
```

```
Array([[2., 0., 0.],
[0., 2., 0.],
[0., 0., 2.]], dtype=float32)
```

## Higher-order derivative applications[#](#higher-order-derivative-applications)

Some meta-learning techniques, such as Model-Agnostic Meta-Learning ([MAML](https://arxiv.org/abs/1703.03400)), require differentiating through gradient updates. In other frameworks this can be quite cumbersome, but in JAX it’s much easier:

```
def meta_loss_fn(params, data):
"""Computes the loss after one step of SGD."""
grads = jax.grad(loss_fn)(params, data)
return loss_fn(params - lr * grads, data)
meta_grads = jax.grad(meta_loss_fn)(params, data)
```

### Stopping gradients[#](#stopping-gradients)

Autodiff enables automatic computation of the gradient of a function with respect to its inputs. Sometimes, however, you might want some additional control: for instance, you might want to avoid backpropagating gradients through some subset of the computational graph.

Consider for instance the TD(0) ([temporal difference](https://en.wikipedia.org/wiki/Temporal_difference_learning)) reinforcement learning update. This is used to learn to estimate the *value* of a state in an environment from experience of interacting with the environment. Let’s assume the value estimate \(v_{\theta}(s_{t-1}\)) in a state \(s_{t-1}\) is parameterised by a linear function.

```
# Value function and initial parameters
value_fn = lambda theta, state: jnp.dot(theta, state)
theta = jnp.array([0.1, -0.1, 0.])
```

Consider a transition from a state \(s_{t-1}\) to a state \(s_t\) during which you observed the reward \(r_t\)

```
# An example transition.
s_tm1 = jnp.array([1., 2., -1.])
r_t = jnp.array(1.)
s_t = jnp.array([2., 1., 0.])
```

The TD(0) update to the network parameters is:

This update is not the gradient of any loss function.

However, it can be **written** as the gradient of the pseudo loss function

if the dependency of the target \(r_t + v_{\theta}(s_t)\) on the parameter \(\theta\) is ignored.

How can you implement this in JAX? If you write the pseudo loss naively, you get:

```
def td_loss(theta, s_tm1, r_t, s_t):
v_tm1 = value_fn(theta, s_tm1)
target = r_t + value_fn(theta, s_t)
return -0.5 * ((target - v_tm1) ** 2)
td_update = jax.grad(td_loss)
delta_theta = td_update(theta, s_tm1, r_t, s_t)
delta_theta
```

```
Array([-1.2, 1.2, -1.2], dtype=float32)
```

But `td_update`

will **not** compute a TD(0) update, because the gradient computation will include the dependency of `target`

on \(\theta\).

You can use [ jax.lax.stop_gradient()](_autosummary/jax.lax.stop_gradient.html#jax.lax.stop_gradient) to force JAX to ignore the dependency of the target on \(\theta\):

```
def td_loss(theta, s_tm1, r_t, s_t):
v_tm1 = value_fn(theta, s_tm1)
target = r_t + value_fn(theta, s_t)
return -0.5 * ((jax.lax.stop_gradient(target) - v_tm1) ** 2)
td_update = jax.grad(td_loss)
delta_theta = td_update(theta, s_tm1, r_t, s_t)
delta_theta
```

```
Array([ 1.2, 2.4, -1.2], dtype=float32)
```

This will treat `target`

as if it did **not** depend on the parameters \(\theta\) and compute the correct update to the parameters.

Now, let’s also calculate \(\Delta \theta\) using the original TD(0) update expression, to cross-check our work. You may wish to try and implement this yourself using [ jax.grad()](_autosummary/jax.grad.html#jax.grad) and your knowledge so far. Here’s our solution:

```
s_grad = jax.grad(value_fn)(theta, s_tm1)
delta_theta_original_calculation = (r_t + value_fn(theta, s_t) - value_fn(theta, s_tm1)) * s_grad
delta_theta_original_calculation # [1.2, 2.4, -1.2], same as `delta_theta`
```

```
Array([ 1.2, 2.4, -1.2], dtype=float32)
```

`jax.lax.stop_gradient`

may also be useful in other settings, for instance if you want the gradient from some loss to only affect a subset of the parameters of the neural network (because, for instance, the other parameters are trained using a different loss).

### Straight-through estimator using `stop_gradient`

[#](#straight-through-estimator-using-stop-gradient)

The straight-through estimator is a trick for defining a ‘gradient’ of a function that is otherwise non-differentiable. Given a non-differentiable function \(f : \mathbb{R}^n \to \mathbb{R}^n\) that is used as part of a larger function that we wish to find a gradient of, we simply pretend during the backward pass that \(f\) is the identity function. This can be implemented neatly using `jax.lax.stop_gradient`

:

```
def f(x):
return jnp.round(x) # non-differentiable
def straight_through_f(x):
# Create an exactly-zero expression with Sterbenz lemma that has
# an exactly-one gradient.
zero = x - jax.lax.stop_gradient(x)
return zero + jax.lax.stop_gradient(f(x))
print("f(x): ", f(3.2))
print("straight_through_f(x):", straight_through_f(3.2))
print("grad(f)(x):", jax.grad(f)(3.2))
print("grad(straight_through_f)(x):", jax.grad(straight_through_f)(3.2))
```

```
f(x): 3.0
straight_through_f(x): 3.0
grad(f)(x): 0.0
grad(straight_through_f)(x): 1.0
```

### Per-example gradients[#](#per-example-gradients)

While most ML systems compute gradients and updates from batches of data, for reasons of computational efficiency and/or variance reduction, it is sometimes necessary to have access to the gradient/update associated with each specific sample in the batch.

For instance, this is needed to prioritize data based on gradient magnitude, or to apply clipping / normalisations on a sample by sample basis.

In many frameworks (PyTorch, TF, Theano) it is often not trivial to compute per-example gradients, because the library directly accumulates the gradient over the batch. Naive workarounds, such as computing a separate loss per example and then aggregating the resulting gradients are typically very inefficient.

In JAX, you can define the code to compute the gradient per-sample in an easy but efficient way.

Just combine the [ jax.jit()](_autosummary/jax.jit.html#jax.jit),

[and](_autosummary/jax.vmap.html#jax.vmap)

`jax.vmap()`

[transformations together:](_autosummary/jax.grad.html#jax.grad)

`jax.grad()`

```
perex_grads = jax.jit(jax.vmap(jax.grad(td_loss), in_axes=(None, 0, 0, 0)))
# Test it:
batched_s_tm1 = jnp.stack([s_tm1, s_tm1])
batched_r_t = jnp.stack([r_t, r_t])
batched_s_t = jnp.stack([s_t, s_t])
perex_grads(theta, batched_s_tm1, batched_r_t, batched_s_t)
```

```
Array([[ 1.2, 2.4, -1.2],
[ 1.2, 2.4, -1.2]], dtype=float32)
```

Let’s go through this one transformation at a time.

First, you apply [ jax.grad()](_autosummary/jax.grad.html#jax.grad) to

`td_loss`

to obtain a function that computes the gradient of the loss w.r.t. the parameters on single (unbatched) inputs:```
dtdloss_dtheta = jax.grad(td_loss)
dtdloss_dtheta(theta, s_tm1, r_t, s_t)
```

```
Array([ 1.2, 2.4, -1.2], dtype=float32)
```

This function computes one row of the array above.

Then, you vectorise this function using [ jax.vmap()](_autosummary/jax.vmap.html#jax.vmap). This adds a batch dimension to all inputs and outputs. Now, given a batch of inputs, you produce a batch of outputs — each output in the batch corresponds to the gradient for the corresponding member of the input batch.

```
almost_perex_grads = jax.vmap(dtdloss_dtheta)
batched_theta = jnp.stack([theta, theta])
almost_perex_grads(batched_theta, batched_s_tm1, batched_r_t, batched_s_t)
```

```
Array([[ 1.2, 2.4, -1.2],
[ 1.2, 2.4, -1.2]], dtype=float32)
```

This isn’t quite what we want, because we have to manually feed this function a batch of `theta`

s, whereas we actually want to use a single `theta`

. We fix this by adding `in_axes`

to the [ jax.vmap()](_autosummary/jax.vmap.html#jax.vmap), specifying theta as

`None`

, and the other args as `0`

. This makes the resulting function add an extra axis only to the other arguments, leaving `theta`

unbatched, as we want:```
inefficient_perex_grads = jax.vmap(dtdloss_dtheta, in_axes=(None, 0, 0, 0))
inefficient_perex_grads(theta, batched_s_tm1, batched_r_t, batched_s_t)
```

```
Array([[ 1.2, 2.4, -1.2],
[ 1.2, 2.4, -1.2]], dtype=float32)
```

This does what we want, but is slower than it has to be. Now, you wrap the whole thing in a [ jax.jit()](_autosummary/jax.jit.html#jax.jit) to get the compiled, efficient version of the same function:

```
perex_grads = jax.jit(inefficient_perex_grads)
perex_grads(theta, batched_s_tm1, batched_r_t, batched_s_t)
```

```
Array([[ 1.2, 2.4, -1.2],
[ 1.2, 2.4, -1.2]], dtype=float32)
```

```
%timeit inefficient_perex_grads(theta, batched_s_tm1, batched_r_t, batched_s_t).block_until_ready()
%timeit perex_grads(theta, batched_s_tm1, batched_r_t, batched_s_t).block_until_ready()
```

```
7.34 ms ± 44.3 μs per loop (mean ± std. dev. of 7 runs, 100 loops each)
8.23 μs ± 13.9 ns per loop (mean ± std. dev. of 7 runs, 100,000 loops each)
```

### Hessian-vector products with `jax.grad`

-of-`jax.grad`

[#](#hessian-vector-products-with-jax-grad-of-jax-grad)

One thing you can do with higher-order [ jax.grad()](_autosummary/jax.grad.html#jax.grad) is build a Hessian-vector product function. (Later on you’ll write an even more efficient implementation that mixes both forward- and reverse-mode, but this one will use pure reverse-mode.)

A Hessian-vector product function can be useful in a [truncated Newton Conjugate-Gradient algorithm](https://en.wikipedia.org/wiki/Truncated_Newton_method) for minimizing smooth convex functions, or for studying the curvature of neural network training objectives (e.g. [1](https://arxiv.org/abs/1406.2572), [2](https://arxiv.org/abs/1811.07062), [3](https://arxiv.org/abs/1706.04454), [4](https://arxiv.org/abs/1802.03451)).

For a scalar-valued function \(f : \mathbb{R}^n \to \mathbb{R}\) with continuous second derivatives (so that the Hessian matrix is symmetric), the Hessian at a point \(x \in \mathbb{R}^n\) is written as \(\partial^2 f(x)\). A Hessian-vector product function is then able to evaluate

\(\qquad v \mapsto \partial^2 f(x) \cdot v\)

for any \(v \in \mathbb{R}^n\).

The trick is not to instantiate the full Hessian matrix: if \(n\) is large, perhaps in the millions or billions in the context of neural networks, then that might be impossible to store.

Luckily, [ jax.grad()](_autosummary/jax.grad.html#jax.grad) already gives us a way to write an efficient Hessian-vector product function. You just have to use the identity:

\(\qquad \partial^2 f (x) v = \partial [x \mapsto \partial f(x) \cdot v] = \partial g(x)\),

where \(g(x) = \partial f(x) \cdot v\) is a new scalar-valued function that dots the gradient of \(f\) at \(x\) with the vector \(v\). Notice that you’re only ever differentiating scalar-valued functions of vector-valued arguments, which is exactly where you know [ jax.grad()](_autosummary/jax.grad.html#jax.grad) is efficient.

In JAX code, you can just write this:

```
def hvp(f, x, v):
return jax.grad(lambda x: jnp.vdot(jax.grad(f)(x), v))(x)
```

This example shows that you can freely use lexical closure, and JAX will never get perturbed or confused.

You will check this implementation a few cells down, once you learn how to compute dense Hessian matrices. You’ll also write an even better version that uses both forward-mode and reverse-mode.

### Jacobians and Hessians using `jax.jacfwd`

and `jax.jacrev`

[#](#jacobians-and-hessians-using-jax-jacfwd-and-jax-jacrev)

You can compute full Jacobian matrices using the [ jax.jacfwd()](_autosummary/jax.jacfwd.html#jax.jacfwd) and

[functions:](_autosummary/jax.jacrev.html#jax.jacrev)

`jax.jacrev()`

```
from jax import jacfwd, jacrev
# Define a sigmoid function.
def sigmoid(x):
return 0.5 * (jnp.tanh(x / 2) + 1)
# Outputs probability of a label being true.
def predict(W, b, inputs):
return sigmoid(jnp.dot(inputs, W) + b)
# Build a toy dataset.
inputs = jnp.array([[0.52, 1.12, 0.77],
[0.88, -1.08, 0.15],
[0.52, 0.06, -1.30],
[0.74, -2.49, 1.39]])
# Initialize random model coefficients
key = jax.random.key(0)
key, W_key, b_key = jax.random.split(key, 3)
W = jax.random.normal(W_key, (3,))
b = jax.random.normal(b_key, ())
# Isolate the function from the weight matrix to the predictions
f = lambda W: predict(W, b, inputs)
J = jacfwd(f)(W)
print("jacfwd result, with shape", J.shape)
print(J)
J = jacrev(f)(W)
print("jacrev result, with shape", J.shape)
print(J)
```

```
jacfwd result, with shape (4, 3)
[[ 0.05069415 0.1091874 0.07506633]
[ 0.14170025 -0.17390487 0.02415345]
[ 0.12579198 0.01451446 -0.31447992]
[ 0.00574409 -0.0193281 0.01078958]]
jacrev result, with shape (4, 3)
[[ 0.05069415 0.10918741 0.07506634]
[ 0.14170025 -0.17390487 0.02415345]
[ 0.12579198 0.01451446 -0.31447995]
[ 0.00574409 -0.0193281 0.01078958]]
```

These two functions compute the same values (up to machine numerics), but differ in their implementation: [ jax.jacfwd()](_autosummary/jax.jacfwd.html#jax.jacfwd) uses forward-mode automatic differentiation, which is more efficient for “tall” Jacobian matrices (more outputs than inputs), while

[uses reverse-mode, which is more efficient for “wide” Jacobian matrices (more inputs than outputs). For matrices that are near-square,](_autosummary/jax.jacrev.html#jax.jacrev)

`jax.jacrev()`

[probably has an edge over](_autosummary/jax.jacfwd.html#jax.jacfwd)

`jax.jacfwd()`

[.](_autosummary/jax.jacrev.html#jax.jacrev)

`jax.jacrev()`

You can also use [ jax.jacfwd()](_autosummary/jax.jacfwd.html#jax.jacfwd) and

[with container types:](_autosummary/jax.jacrev.html#jax.jacrev)

`jax.jacrev()`

```
def predict_dict(params, inputs):
return predict(params['W'], params['b'], inputs)
J_dict = jax.jacrev(predict_dict)({'W': W, 'b': b}, inputs)
for k, v in J_dict.items():
print("Jacobian from {} to logits is".format(k))
print(v)
```

```
Jacobian from W to logits is
[[ 0.05069415 0.10918741 0.07506634]
[ 0.14170025 -0.17390487 0.02415345]
[ 0.12579198 0.01451446 -0.31447995]
[ 0.00574409 -0.0193281 0.01078958]]
Jacobian from b to logits is
[0.09748876 0.16102302 0.24190766 0.00776229]
```

For more details on forward- and reverse-mode, as well as how to implement [ jax.jacfwd()](_autosummary/jax.jacfwd.html#jax.jacfwd) and

[as efficiently as possible, read on!](_autosummary/jax.jacrev.html#jax.jacrev)

`jax.jacrev()`

Using a composition of two of these functions gives us a way to compute dense Hessian matrices:

```
def hessian(f):
return jax.jacfwd(jax.jacrev(f))
H = hessian(f)(W)
print("hessian, with shape", H.shape)
print(H)
```

```
hessian, with shape (4, 3, 3)
[[[ 0.02058932 0.04434624 0.03048803]
[ 0.04434623 0.09551499 0.06566654]
[ 0.03048803 0.06566655 0.04514575]]
[[-0.0743913 0.09129842 -0.01268033]
[ 0.09129842 -0.11204806 0.01556223]
[-0.01268034 0.01556223 -0.00216142]]
[[ 0.01176856 0.00135791 -0.02942139]
[ 0.00135791 0.00015668 -0.00339478]
[-0.0294214 -0.00339478 0.07355348]]
[[-0.00418412 0.014079 -0.00785936]
[ 0.014079 -0.04737393 0.02644569]
[-0.00785936 0.02644569 -0.01476286]]]
```

This shape makes sense: if you start with a function \(f : \mathbb{R}^n \to \mathbb{R}^m\), then at a point \(x \in \mathbb{R}^n\) you expect to get the shapes:

\(f(x) \in \mathbb{R}^m\), the value of \(f\) at \(x\),

\(\partial f(x) \in \mathbb{R}^{m \times n}\), the Jacobian matrix at \(x\),

\(\partial^2 f(x) \in \mathbb{R}^{m \times n \times n}\), the Hessian at \(x\),


and so on.

To implement `hessian`

, you could have used `jacfwd(jacrev(f))`

or `jacrev(jacfwd(f))`

or any other composition of these two. But forward-over-reverse is typically the most efficient. That’s because in the inner Jacobian computation we’re often differentiating a function wide Jacobian (maybe like a loss function \(f : \mathbb{R}^n \to \mathbb{R}\)), while in the outer Jacobian computation we’re differentiating a function with a square Jacobian (since \(\nabla f : \mathbb{R}^n \to \mathbb{R}^n\)), which is where forward-mode wins out.