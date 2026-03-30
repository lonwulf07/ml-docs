# Pytorch Documentation
> Scraped on: 2026-03-30 | Root Source: [https://pytorch.org/docs/stable/index.html](https://pytorch.org/docs/stable/index.html)



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

## Source: https://pytorch.org/get-started/locally/

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

## Source: https://pytorch.org/docs/stable/user_guide/index.html

# User Guide[#](#user-guide)

Created On: Aug 13, 2025 | Last Updated On: Dec 03, 2025

PyTorch provides a flexible and efficient platform for building deep learning models, offering dynamic computation graphs and a rich ecosystem of tools and libraries. This guide will help you harness the power of PyTorch to create and deploy machine learning models effectively.

Note

This guide is a work in progress.

---

## Source: https://pytorch.org/docs/stable/user_guide/pytorch_main_components.html

# PyTorch Main Components[#](#pytorch-main-components)

Created On: Aug 13, 2025 | Last Updated On: Aug 13, 2025

PyTorch is a flexible and powerful library for deep learning that provides a comprehensive set of tools for building, training, and deploying machine learning models.

## PyTorch Components for Basic Deep Learning[#](#pytorch-components-for-basic-deep-learning)

Some of the basic PyTorch components include:

**Tensors**- N-dimensional arrays that serve as PyTorch’s fundamental data structure. They support automatic differentiation, hardware acceleration, and provide a comprehensive API for mathematical operations.**Autograd**- PyTorch’s automatic differentiation engine that tracks operations performed on tensors and builds a computational graph dynamically to be able to compute gradients.**Neural Network API**- A modular framework for building neural networks with pre-defined layers, activation functions, and loss functions. The`nn.Module`

base class provides a clean interface for creating custom network architectures with parameter management.**DataLoaders**- Tools for efficient data handling that provide features like batching, shuffling, and parallel data loading. They abstract away the complexities of data preprocessing and iteration, allowing for optimized training loops.

## PyTorch Compiler[#](#pytorch-compiler)

The PyTorch compiler is a suite of tools that optimize model execution and
reduce resource requirements. You can learn more about the PyTorch compiler [here](https://docs.pytorch.org/docs/stable/torch.compiler_get_started.html).

---

## Source: https://pytorch.org/docs/stable/user_guide/torch_compiler/torch.compiler.html

# torch.compiler[#](#torch-compiler)

Created On: Jul 28, 2023 | Last Updated On: Dec 07, 2025

`torch.compiler`

is a namespace through which some of the internal compiler
methods are surfaced for user consumption. The main function and the feature in
this namespace is `torch.compile`

.

`torch.compile`

is a PyTorch function introduced in PyTorch 2.x that aims to
solve the problem of accurate graph capturing in PyTorch and ultimately enable
software engineers to run their PyTorch programs faster. `torch.compile`

is
written in Python and it marks the transition of PyTorch from C++ to Python.

`torch.compile`

leverages the following underlying technologies:

**TorchDynamo (torch._dynamo)**is an internal API that uses a CPython feature called the Frame Evaluation API to safely capture PyTorch graphs. Methods that are available externally for PyTorch users are surfaced through the`torch.compiler`

namespace.**TorchInductor**is the default`torch.compile`

deep learning compiler that generates fast code for multiple accelerators and backends. You need to use a backend compiler to make speedups through`torch.compile`

possible. For NVIDIA, AMD and Intel GPUs, it leverages OpenAI Triton as the key building block.**AOT Autograd**captures not only the user-level code, but also backpropagation, which results in capturing the backwards pass “ahead-of-time”. This enables acceleration of both forwards and backwards pass using TorchInductor.

To better understand how `torch.compile`

tracing behavior on your code, or to
learn more about the internals of `torch.compile`

, please refer to the [ torch.compile programming model](compile/programming_model.html).

Note

In some cases, the terms `torch.compile`

, TorchDynamo, `torch.compiler`

might be used interchangeably in this documentation.

Warning

`torch.compile`

may not support recently released major versions of Python.

If you attempt to use `@torch.compile`

in an unsupported Python
environment, you may encounter an error similar to:

```
RuntimeError: torch.compile is not supported on Python 3.xx.0+
```

Please ensure that your current Python version is within the range
supported by PyTorch for `torch.compile`

.

If you have installed PyTorch on a Python version that is too new,
you will need to switch to an earlier Python version in order to use `torch.compile`

.

As mentioned above, to run your workflows faster, `torch.compile`

through
TorchDynamo requires a backend that converts the captured graphs into a fast
machine code. Different backends can result in various optimization gains.
The default backend is called TorchInductor, also known as *inductor*,
TorchDynamo has a list of supported backends developed by our partners,
which can be seen by running `torch.compiler.list_backends()`

each of which
with its optional dependencies.

Some of the most commonly used backends include:

**Training & inference backends**

Backend |
Description |
|---|---|
|
Uses the TorchInductor backend. |
|
CUDA graphs with AOT Autograd. |
|
Uses IPEX on CPU. |

**Inference-only backends**

Backend |
Description |
|---|---|
|
Uses Torch-TensorRT for inference optimizations. Requires |
|
Uses IPEX for inference on CPU. |
|
Uses Apache TVM for inference optimizations. |
|
Uses OpenVINO for inference optimizations. |

---

## Source: https://pytorch.org/docs/stable/user_guide/torch_compiler/export.html

# torch.export[#](#torch-export)

Created On: Jun 12, 2025 | Last Updated On: Feb 14, 2026

## Overview[#](#overview)

[ torch.export.export()](export/api_reference.html#torch.export.export) takes a

[and produces a traced graph representing only the Tensor computation of the function in an Ahead-of-Time (AOT) fashion, which can subsequently be executed with different inputs or serialized.](../../generated/torch.nn.Module.html#torch.nn.Module)

`torch.nn.Module`

```
import torch
from torch.export import export, ExportedProgram
class Mod(torch.nn.Module):
def forward(self, x: torch.Tensor, y: torch.Tensor) -> torch.Tensor:
a = torch.sin(x)
b = torch.cos(y)
return a + b
example_args = (torch.randn(10, 10), torch.randn(10, 10))
exported_program: ExportedProgram = export(Mod(), args=example_args)
print(exported_program)
```

```
ExportedProgram:
class GraphModule(torch.nn.Module):
def forward(self, x: "f32[10, 10]", y: "f32[10, 10]"):
# File: /tmp/ipykernel_385/2550508656.py:6 in forward, code: a = torch.sin(x)
sin: "f32[10, 10]" = torch.ops.aten.sin.default(x); x = None
# File: /tmp/ipykernel_385/2550508656.py:7 in forward, code: b = torch.cos(y)
cos: "f32[10, 10]" = torch.ops.aten.cos.default(y); y = None
# File: /tmp/ipykernel_385/2550508656.py:8 in forward, code: return a + b
add: "f32[10, 10]" = torch.ops.aten.add.Tensor(sin, cos); sin = cos = None
return (add,)
Graph signature:
# inputs
x: USER_INPUT
y: USER_INPUT
# outputs
add: USER_OUTPUT
Range constraints: {}
```

`torch.export`

produces a clean intermediate representation (IR) with the
following invariants. More specifications about the IR can be found
[here](export/ir_spec.html#export-ir-spec).

**Soundness**: It is guaranteed to be a sound representation of the original program, and maintains the same calling conventions of the original program.**Normalized**: There are no Python semantics within the graph. Submodules from the original programs are inlined to form one fully flattened computational graph.**Graph properties**: By default, the graph may contain both functional and non-functional operators (including mutations). To obtain a purely functional graph, use`run_decompositions()`

which removes mutations and aliasing.**Metadata**: The graph contains metadata captured during tracing, such as a stacktrace from user’s code.

Under the hood, `torch.export`

leverages the following latest technologies:

**TorchDynamo (torch._dynamo)**is an internal API that uses a CPython feature called the Frame Evaluation API to safely trace PyTorch graphs. This provides a massively improved graph capturing experience, with much fewer rewrites needed in order to fully trace the PyTorch code.**AOT Autograd**ensures the graph is decomposed/lowered to the ATen operator set. When using`run_decompositions()`

, it can also provide functionalization.**Torch FX (torch.fx)**is the underlying representation of the graph, allowing flexible Python-based transformations.

### Existing frameworks[#](#existing-frameworks)

[ torch.compile()](../../generated/torch.compile.html#torch.compile) also utilizes the same PT2 stack as

`torch.export`

, but
is slightly different:**JIT vs. AOT**:is a JIT compiler whereas which is not intended to be used to produce compiled artifacts outside of deployment.`torch.compile()`

**Partial vs. Full Graph Capture**: Whenruns into an untraceable part of a model, it will “graph break” and fall back to running the program in the eager Python runtime. In comparison,`torch.compile()`

`torch.export`

aims to get a full graph representation of a PyTorch model, so it will error out when something untraceable is reached. Since`torch.export`

produces a full graph disjoint from any Python features or runtime, this graph can then be saved, loaded, and run in different environments and languages.**Usability tradeoff**: Sinceis able to fallback to the Python runtime whenever it reaches something untraceable, it is a lot more flexible.`torch.compile()`

`torch.export`

will instead require users to provide more information or rewrite their code to make it traceable.

Compared to [ torch.fx.symbolic_trace()](../../fx.html#torch.fx.symbolic_trace),

`torch.export`

traces using
TorchDynamo which operates at the Python bytecode level, giving it the ability
to trace arbitrary Python constructs not limited by what Python operator
overloading supports. Additionally, `torch.export`

keeps fine-grained track of
tensor metadata, so that conditionals on things like tensor shapes do not
fail tracing. In general, `torch.export`

is expected to work on more user
programs, and produce lower-level graphs (at the `torch.ops.aten`

operator
level). Note that users can still use [as a preprocessing step before](../../fx.html#torch.fx.symbolic_trace)

`torch.fx.symbolic_trace()`

`torch.export`

.Compared to `torch.jit.script()`

, `torch.export`

does not capture Python
control flow or data structures, unless using explicit [control flow operators](../../higher_order_ops/index.html#higher-order-ops),
but it supports more Python language features due to its comprehensive coverage
over Python bytecodes. The resulting graphs are simpler and only have straight
line control flow, except for explicit control flow operators.

Compared to `torch.jit.trace()`

, `torch.export`

is sound:
it can trace code that performs integer computation on sizes and records
all of the side-conditions necessary to ensure that a particular
trace is valid for other inputs.

## Exporting a PyTorch Model[#](#exporting-a-pytorch-model)

The main entrypoint is through [ torch.export.export()](export/api_reference.html#torch.export.export), which takes a

[and sample inputs, and captures the computation graph into an](../../generated/torch.nn.Module.html#torch.nn.Module)

`torch.nn.Module`

[. An example:](export/api_reference.html#torch.export.ExportedProgram)

`torch.export.ExportedProgram`

```
import torch
from torch.export import export, ExportedProgram
# Simple module for demonstration
class M(torch.nn.Module):
def __init__(self) -> None:
super().__init__()
self.conv = torch.nn.Conv2d(
in_channels=3, out_channels=16, kernel_size=3, padding=1
)
self.relu = torch.nn.ReLU()
self.maxpool = torch.nn.MaxPool2d(kernel_size=3)
def forward(self, x: torch.Tensor, *, constant=None) -> torch.Tensor:
a = self.conv(x)
a.add_(constant)
return self.maxpool(self.relu(a))
example_args = (torch.randn(1, 3, 256, 256),)
example_kwargs = {"constant": torch.ones(1, 16, 256, 256)}
exported_program: ExportedProgram = export(
M(), args=example_args, kwargs=example_kwargs
)
print(exported_program)
# To run the exported program, we can use the `module()` method
print(exported_program.module()(torch.randn(1, 3, 256, 256), constant=torch.ones(1, 16, 256, 256)))
```

```
ExportedProgram:
class GraphModule(torch.nn.Module):
def forward(self, p_conv_weight: "f32[16, 3, 3, 3]", p_conv_bias: "f32[16]", x: "f32[1, 3, 256, 256]", constant: "f32[1, 16, 256, 256]"):
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/conv.py:553 in forward, code: return self._conv_forward(input, self.weight, self.bias)
conv2d: "f32[1, 16, 256, 256]" = torch.ops.aten.conv2d.default(x, p_conv_weight, p_conv_bias, [1, 1], [1, 1]); x = p_conv_weight = p_conv_bias = None
# File: /tmp/ipykernel_385/2848084713.py:16 in forward, code: a.add_(constant)
add_: "f32[1, 16, 256, 256]" = torch.ops.aten.add_.Tensor(conv2d, constant); conv2d = constant = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/activation.py:143 in forward, code: return F.relu(input, inplace=self.inplace)
relu: "f32[1, 16, 256, 256]" = torch.ops.aten.relu.default(add_); add_ = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/pooling.py:224 in forward, code: return F.max_pool2d(
max_pool2d: "f32[1, 16, 85, 85]" = torch.ops.aten.max_pool2d.default(relu, [3, 3], [3, 3]); relu = None
return (max_pool2d,)
Graph signature:
# inputs
p_conv_weight: PARAMETER target='conv.weight'
p_conv_bias: PARAMETER target='conv.bias'
x: USER_INPUT
constant: USER_INPUT
# outputs
max_pool2d: USER_OUTPUT
Range constraints: {}
tensor([[[[1.6361, 1.3575, 1.5090, ..., 1.8684, 2.0575, 2.3525],
[1.5979, 1.6358, 1.6353, ..., 2.1376, 1.8364, 1.5103],
[2.0354, 1.7343, 1.3660, ..., 2.1124, 1.3536, 2.5232],
...,
[2.0711, 1.3192, 1.9112, ..., 1.6319, 2.2271, 1.5633],
[1.5654, 1.2811, 1.7964, ..., 2.3347, 2.0199, 1.5952],
[1.8763, 2.5465, 1.5316, ..., 1.7361, 2.0728, 1.4320]],
[[2.1906, 1.8252, 1.7311, ..., 1.8804, 2.1711, 2.6774],
[2.2291, 2.1046, 1.9019, ..., 1.4717, 1.5339, 1.7294],
[1.9412, 2.3689, 2.3954, ..., 2.0539, 1.6581, 1.9007],
...,
[1.7901, 2.2124, 1.8354, ..., 2.2759, 1.6649, 2.3742],
[2.3949, 1.8030, 1.3785, ..., 1.8990, 1.5354, 2.7043],
[1.7145, 1.9264, 1.3885, ..., 2.1281, 2.2073, 1.7974]],
[[1.3511, 1.8772, 2.1592, ..., 1.6866, 1.9400, 2.3264],
[1.7196, 1.7163, 1.3311, ..., 2.1618, 1.9805, 1.6055],
[1.8913, 1.1997, 2.0874, ..., 1.4219, 2.0495, 1.4346],
...,
[1.9880, 2.3578, 1.7995, ..., 1.8099, 2.0027, 2.0339],
[1.6332, 1.4641, 1.7290, ..., 1.8676, 1.4868, 1.6178],
[2.3873, 1.4545, 1.4019, ..., 2.1417, 1.6874, 1.8513]],
...,
[[1.4448, 1.6909, 1.6185, ..., 1.5018, 1.6550, 1.4199],
[1.4336, 1.6634, 1.5292, ..., 1.7054, 1.3264, 1.6959],
[1.3734, 1.5064, 2.6254, ..., 1.8087, 1.8936, 1.4550],
...,
[1.7285, 1.2677, 2.2299, ..., 2.0206, 1.5512, 1.6754],
[1.5296, 2.2469, 1.4553, ..., 0.9023, 1.4818, 1.3075],
[1.9648, 1.8313, 1.8305, ..., 2.1610, 1.7885, 1.4613]],
[[1.8450, 1.7293, 1.9982, ..., 2.1941, 1.3005, 2.0208],
[1.8475, 1.9899, 2.5512, ..., 1.9839, 1.8247, 1.7404],
[2.3274, 1.6106, 1.7237, ..., 1.8432, 1.9986, 2.1507],
...,
[1.6551, 2.0752, 1.7230, ..., 1.9486, 1.3595, 1.9805],
[1.5701, 1.7889, 2.1340, ..., 1.7987, 1.1151, 2.8683],
[1.7538, 1.8034, 1.7963, ..., 1.5775, 1.8453, 1.4207]],
[[1.8188, 1.8762, 2.0758, ..., 1.5185, 1.6972, 1.9349],
[1.6960, 1.5242, 1.9100, ..., 1.9771, 1.7101, 1.9340],
[1.8599, 1.5346, 1.4952, ..., 1.9242, 1.8803, 2.4453],
...,
[1.8951, 1.7287, 1.8596, ..., 1.6141, 1.9019, 2.0386],
[2.0862, 1.8298, 1.6074, ..., 1.7255, 1.6393, 1.7541],
[1.5337, 1.8980, 2.3273, ..., 2.1792, 1.7568, 1.9916]]]],
grad_fn=<MaxPool2DWithIndicesBackward0>)
```

Inspecting the `ExportedProgram`

, we can note the following:

The

contains the computation graph of the original program, along with records of the original code for easy debugging.`torch.fx.Graph`

The graph contains only

`torch.ops.aten`

operators found[here](https://github.com/pytorch/pytorch/blob/main/aten/src/ATen/native/native_functions.yaml)and custom operators.The parameters (weight and bias to conv) are lifted as inputs to the graph, resulting in no

`get_attr`

nodes in the graph, which previously existed in the result of.`torch.fx.symbolic_trace()`

The

`torch.export.ExportGraphSignature`

models the input and output signature, along with specifying which inputs are parameters.The resulting shape and dtype of tensors produced by each node in the graph is noted. For example, the

`conv2d`

node will result in a tensor of dtype`torch.float32`

and shape (1, 16, 256, 256).

## Expressing Dynamism[#](#expressing-dynamism)

By default `torch.export`

will trace the program assuming all input shapes are
**static**, and specializing the exported program to those dimensions. One
consequence of this is that at runtime, the program won’t work on inputs with
different shapes, even if they’re valid in eager mode.

An example:

```
import torch
import traceback as tb
class M(torch.nn.Module):
def __init__(self):
super().__init__()
self.branch1 = torch.nn.Sequential(
torch.nn.Linear(64, 32), torch.nn.ReLU()
)
self.branch2 = torch.nn.Sequential(
torch.nn.Linear(128, 64), torch.nn.ReLU()
)
self.buffer = torch.ones(32)
def forward(self, x1, x2):
out1 = self.branch1(x1)
out2 = self.branch2(x2)
return (out1 + self.buffer, out2)
example_args = (torch.randn(32, 64), torch.randn(32, 128))
ep = torch.export.export(M(), example_args)
print(ep)
example_args2 = (torch.randn(64, 64), torch.randn(64, 128))
try:
ep.module()(*example_args2) # fails
except Exception:
tb.print_exc()
```

```
ExportedProgram:
class GraphModule(torch.nn.Module):
def forward(self, p_branch1_0_weight: "f32[32, 64]", p_branch1_0_bias: "f32[32]", p_branch2_0_weight: "f32[64, 128]", p_branch2_0_bias: "f32[64]", c_buffer: "f32[32]", x1: "f32[32, 64]", x2: "f32[32, 128]"):
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/linear.py:134 in forward, code: return F.linear(input, self.weight, self.bias)
linear: "f32[32, 32]" = torch.ops.aten.linear.default(x1, p_branch1_0_weight, p_branch1_0_bias); x1 = p_branch1_0_weight = p_branch1_0_bias = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/activation.py:143 in forward, code: return F.relu(input, inplace=self.inplace)
relu: "f32[32, 32]" = torch.ops.aten.relu.default(linear); linear = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/linear.py:134 in forward, code: return F.linear(input, self.weight, self.bias)
linear_1: "f32[32, 64]" = torch.ops.aten.linear.default(x2, p_branch2_0_weight, p_branch2_0_bias); x2 = p_branch2_0_weight = p_branch2_0_bias = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/activation.py:143 in forward, code: return F.relu(input, inplace=self.inplace)
relu_1: "f32[32, 64]" = torch.ops.aten.relu.default(linear_1); linear_1 = None
# File: /tmp/ipykernel_385/1522925308.py:19 in forward, code: return (out1 + self.buffer, out2)
add: "f32[32, 32]" = torch.ops.aten.add.Tensor(relu, c_buffer); relu = c_buffer = None
return (add, relu_1)
Graph signature:
# inputs
p_branch1_0_weight: PARAMETER target='branch1.0.weight'
p_branch1_0_bias: PARAMETER target='branch1.0.bias'
p_branch2_0_weight: PARAMETER target='branch2.0.weight'
p_branch2_0_bias: PARAMETER target='branch2.0.bias'
c_buffer: CONSTANT_TENSOR target='buffer'
x1: USER_INPUT
x2: USER_INPUT
# outputs
add: USER_OUTPUT
relu_1: USER_OUTPUT
Range constraints: {}
```

```
Traceback (most recent call last):
File "/tmp/ipykernel_385/1522925308.py", line 28, in <module>
ep.module()(*example_args2) # fails
File "/opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/fx/graph_module.py", line 949, in call_wrapped
return self._wrapped_call(self, *args, **kwargs)
File "/opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/fx/graph_module.py", line 461, in __call__
raise e
File "/opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/fx/graph_module.py", line 447, in __call__
return super(self.cls, obj).__call__(*args, **kwargs) # type: ignore[misc]
File "/opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/module.py", line 1779, in _wrapped_call_impl
return self._call_impl(*args, **kwargs)
File "/opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/module.py", line 1885, in _call_impl
return inner()
File "/opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/module.py", line 1833, in inner
result = forward_call(*args, **kwargs)
File "<eval_with_key>.25", line 11, in forward
_guards_fn = self._guards_fn(x1, x2); _guards_fn = None
File "/opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/module.py", line 1779, in _wrapped_call_impl
return self._call_impl(*args, **kwargs)
File "/opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/module.py", line 1790, in _call_impl
return forward_call(*args, **kwargs)
File "/opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/_dynamo/external_utils.py", line 240, in inner
return func(*args, **kwargs)
File "<string>", line 3, in _
File "/opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/__init__.py", line 2254, in _assert
raise AssertionError(message)
AssertionError: Guard failed: x1.size()[0] == 32
```

However, some dimensions, such as a batch dimension, can be dynamic and vary
from run to run. Such dimensions must be specified by using the
`torch.export.Dim()`

API to create them and by passing them into
[ torch.export.export()](export/api_reference.html#torch.export.export) through the

`dynamic_shapes`

argument.```
import torch
class M(torch.nn.Module):
def __init__(self):
super().__init__()
self.branch1 = torch.nn.Sequential(
torch.nn.Linear(64, 32), torch.nn.ReLU()
)
self.branch2 = torch.nn.Sequential(
torch.nn.Linear(128, 64), torch.nn.ReLU()
)
self.buffer = torch.ones(32)
def forward(self, x1, x2):
out1 = self.branch1(x1)
out2 = self.branch2(x2)
return (out1 + self.buffer, out2)
example_args = (torch.randn(32, 64), torch.randn(32, 128))
# Create a dynamic batch size
batch = torch.export.Dim("batch")
# Specify that the first dimension of each input is that batch size
dynamic_shapes = {"x1": {0: batch}, "x2": {0: batch}}
ep = torch.export.export(
M(), args=example_args, dynamic_shapes=dynamic_shapes
)
print(ep)
example_args2 = (torch.randn(64, 64), torch.randn(64, 128))
ep.module()(*example_args2) # success
```

```
ExportedProgram:
class GraphModule(torch.nn.Module):
def forward(self, p_branch1_0_weight: "f32[32, 64]", p_branch1_0_bias: "f32[32]", p_branch2_0_weight: "f32[64, 128]", p_branch2_0_bias: "f32[64]", c_buffer: "f32[32]", x1: "f32[s24, 64]", x2: "f32[s24, 128]"):
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/linear.py:134 in forward, code: return F.linear(input, self.weight, self.bias)
linear: "f32[s24, 32]" = torch.ops.aten.linear.default(x1, p_branch1_0_weight, p_branch1_0_bias); x1 = p_branch1_0_weight = p_branch1_0_bias = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/activation.py:143 in forward, code: return F.relu(input, inplace=self.inplace)
relu: "f32[s24, 32]" = torch.ops.aten.relu.default(linear); linear = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/linear.py:134 in forward, code: return F.linear(input, self.weight, self.bias)
linear_1: "f32[s24, 64]" = torch.ops.aten.linear.default(x2, p_branch2_0_weight, p_branch2_0_bias); x2 = p_branch2_0_weight = p_branch2_0_bias = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/activation.py:143 in forward, code: return F.relu(input, inplace=self.inplace)
relu_1: "f32[s24, 64]" = torch.ops.aten.relu.default(linear_1); linear_1 = None
# File: /tmp/ipykernel_385/3456136871.py:18 in forward, code: return (out1 + self.buffer, out2)
add: "f32[s24, 32]" = torch.ops.aten.add.Tensor(relu, c_buffer); relu = c_buffer = None
return (add, relu_1)
Graph signature:
# inputs
p_branch1_0_weight: PARAMETER target='branch1.0.weight'
p_branch1_0_bias: PARAMETER target='branch1.0.bias'
p_branch2_0_weight: PARAMETER target='branch2.0.weight'
p_branch2_0_bias: PARAMETER target='branch2.0.bias'
c_buffer: CONSTANT_TENSOR target='buffer'
x1: USER_INPUT
x2: USER_INPUT
# outputs
add: USER_OUTPUT
relu_1: USER_OUTPUT
Range constraints: {s24: VR[0, int_oo]}
```

```
(tensor([[1.6062, 1.0000, 1.0392, ..., 1.4282, 1.0000, 1.4208],
[1.0000, 1.0000, 1.0000, ..., 1.2684, 1.0000, 1.0000],
[1.1177, 1.0000, 1.0000, ..., 1.5261, 1.5962, 1.0000],
...,
[1.0000, 1.0000, 1.0000, ..., 1.0000, 1.7490, 1.0000],
[1.0000, 1.0000, 1.0139, ..., 1.4368, 1.4105, 1.9556],
[1.0000, 1.6940, 1.5041, ..., 1.0000, 1.0461, 1.0000]],
grad_fn=<AddBackward0>),
tensor([[0.0000, 0.0000, 0.0000, ..., 0.0000, 0.6185, 0.3069],
[0.0000, 0.0000, 0.3451, ..., 0.0000, 0.0000, 0.8333],
[0.0000, 0.4400, 0.0000, ..., 0.4834, 0.0000, 0.0000],
...,
[0.0000, 0.0000, 0.0000, ..., 0.1091, 0.5058, 1.5450],
[0.0000, 0.3533, 0.1413, ..., 0.0000, 0.0000, 0.1738],
[0.0000, 0.1092, 1.1414, ..., 0.0000, 0.0000, 0.5446]],
grad_fn=<ReluBackward0>))
```

Some additional things to note:

Through the

`torch.export.Dim()`

API and the`dynamic_shapes`

argument, we specified the first dimension of each input to be dynamic. Looking at the inputs`x1`

and`x2`

, they have a symbolic shape of`(s0, 64)`

and`(s0, 128)`

, instead of the`(32, 64)`

and`(32, 128)`

shaped tensors that we passed in as example inputs.`s0`

is a symbol representing that this dimension can be a range of values.`exported_program.range_constraints`

describes the ranges of each symbol appearing in the graph. In this case, we see that`s0`

has the range [0, int_oo]. For technical reasons that are difficult to explain here, they are assumed to be not 0 or 1. This is not a bug, and does not necessarily mean that the exported program will not work for dimensions 0 or 1. See[The 0/1 Specialization Problem](https://docs.google.com/document/d/16VPOa3d-Liikf48teAOmxLc92rgvJdfosIy-yoT38Io/edit?fbclid=IwAR3HNwmmexcitV0pbZm_x1a4ykdXZ9th_eJWK-3hBtVgKnrkmemz6Pm5jRQ#heading=h.ez923tomjvyk)for an in-depth discussion of this topic.

In the example, we used `Dim("batch")`

to create a dynamic dimension. This is
the most explicit way to specify dynamism. We can also use `Dim.DYNAMIC`

and
`Dim.AUTO`

to specify dynamism. We will go over both methods in the next section.

### Named Dims[#](#named-dims)

For every dimension specified with `Dim("name")`

, we will allocate a symbolic
shape. Specifying a `Dim`

with the same name will result in the same symbol
to be generated. This allows users to specify what symbols are allocated for
each input dimension.

```
batch = Dim("batch")
dynamic_shapes = {"x1": {0: dim}, "x2": {0: batch}}
```

For each `Dim`

, we can specify minimum and maximum values. We also allow
specifying relations between `Dim`

s in univariate linear expressions: `A * dim + B`

.
This allows users to specify more complex constraints like integer divisibility
for dynamic dimensions. These features allow for users to place explicit
restrictions on the dynamic behavior of the `ExportedProgram`

produced.

```
dx = Dim("dx", min=4, max=256)
dh = Dim("dh", max=512)
dynamic_shapes = {
"x": (dx, None),
"y": (2 * dx, dh),
}
```

However, `ConstraintViolationErrors`

will be raised if the while tracing, we emit guards
that conflict with the relations or static/dynamic specifications given. For
example, in the above specification, the following is asserted:

`x.shape[0]`

is to have range`[4, 256]`

, and related to`y.shape[0]`

by`y.shape[0] == 2 * x.shape[0]`

.`x.shape[1]`

is static.`y.shape[1]`

has range`[0, 512]`

, and is unrelated to any other dimension.

If any of these assertions are found to be incorrect while tracing (ex.
`x.shape[0]`

is static, or `y.shape[1]`

has a smaller range, or
`y.shape[0] != 2 * x.shape[0]`

), then a `ConstraintViolationError`

will be
raised, and the user will need to change their `dynamic_shapes`

specification.

### Dim Hints[#](#dim-hints)

Instead of explicitly specifying dynamism using `Dim("name")`

, we can let
`torch.export`

infer the ranges and relationships of the dynamic values using
`Dim.DYNAMIC`

. This is also a more convenient way to specify dynamism when you
don’t know specifically *how* dynamic your dynamic values are.

```
dynamic_shapes = {
"x": (Dim.DYNAMIC, None),
"y": (Dim.DYNAMIC, Dim.DYNAMIC),
}
```

We can also specify min/max values for `Dim.DYNAMIC`

, which will serve as hints
to export. But if while tracing export found the range to be different, it will
automatically update the range without raising an error. We also cannot specify
relationships between dynamic values. Instead, this will be inferred by export,
and exposed to users through an inspection of assertions within the graph. In
this method of specifying dynamism, `ConstraintViolationErrors`

will **only** be
raised if the specified value is inferred to be **static**.

An even more convenient way to specify dynamism is to use `Dim.AUTO`

, which will
behave like `Dim.DYNAMIC`

, but will **not** raise an error if the dimension is
inferred to be static. This is useful for when you have no idea what the dynamic
values are, and want to export the program with a “best effort” dynamic approach.

### ShapesCollection[#](#shapescollection)

When specifying which inputs are dynamic via `dynamic_shapes`

, we must specify
the dynamism of every input. For example, given the following inputs:

```
args = {"x": tensor_x, "others": [tensor_y, tensor_z]}
```

we would need to specify the dynamism of `tensor_x`

, `tensor_y`

, and `tensor_z`

along with the dynamic shapes:

```
# With named-Dims
dim = torch.export.Dim(...)
dynamic_shapes = {"x": {0: dim, 1: dim + 1}, "others": [{0: dim * 2}, None]}
torch.export(..., args, dynamic_shapes=dynamic_shapes)
```

However, this is particularly complicated as we need to specify the
`dynamic_shapes`

specification in the same nested input structure as the input
arguments. Instead, an easier way to specify dynamic shapes is with the helper
utility `torch.export.ShapesCollection`

, where instead of specifying the
dynamism of every single input, we can just assign directly which input
dimensions are dynamic.

```
import torch
class M(torch.nn.Module):
def forward(self, inp):
x = inp["x"] * 1
y = inp["others"][0] * 2
z = inp["others"][1] * 3
return x, y, z
tensor_x = torch.randn(3, 4, 8)
tensor_y = torch.randn(6)
tensor_z = torch.randn(6)
args = {"x": tensor_x, "others": [tensor_y, tensor_z]}
dim = torch.export.Dim("dim")
sc = torch.export.ShapesCollection()
sc[tensor_x] = (dim, dim + 1, 8)
sc[tensor_y] = {0: dim * 2}
print(sc.dynamic_shapes(M(), (args,)))
ep = torch.export.export(M(), (args,), dynamic_shapes=sc)
print(ep)
```

```
{'inp': {'x': (Dim('dim', min=0), dim + 1, 8), 'others': [{0: 2*dim}, None]}}
ExportedProgram:
class GraphModule(torch.nn.Module):
def forward(self, inp_x: "f32[s96, s96 + 1, 8]", inp_others_0: "f32[2*s96]", inp_others_1: "f32[6]"):
# File: /tmp/ipykernel_385/1070110726.py:5 in forward, code: x = inp["x"] * 1
mul: "f32[s96, s96 + 1, 8]" = torch.ops.aten.mul.Tensor(inp_x, 1); inp_x = None
# File: /tmp/ipykernel_385/1070110726.py:6 in forward, code: y = inp["others"][0] * 2
mul_1: "f32[2*s96]" = torch.ops.aten.mul.Tensor(inp_others_0, 2); inp_others_0 = None
# File: /tmp/ipykernel_385/1070110726.py:7 in forward, code: z = inp["others"][1] * 3
mul_2: "f32[6]" = torch.ops.aten.mul.Tensor(inp_others_1, 3); inp_others_1 = None
return (mul, mul_1, mul_2)
Graph signature:
# inputs
inp_x: USER_INPUT
inp_others_0: USER_INPUT
inp_others_1: USER_INPUT
# outputs
mul: USER_OUTPUT
mul_1: USER_OUTPUT
mul_2: USER_OUTPUT
Range constraints: {s96: VR[0, int_oo], s96 + 1: VR[1, int_oo], 2*s96: VR[0, int_oo]}
```

### AdditionalInputs[#](#additionalinputs)

In the case where you don’t know how dynamic your inputs are, but you have an
ample set of testing or profiling data that can provide a fair sense of
representative inputs for a model, you can use
`torch.export.AdditionalInputs`

in place of `dynamic_shapes`

. You can
specify all the possible inputs used to trace the program, and
`AdditionalInputs`

will infer which inputs are dynamic based on which input
shapes are changing.

Example:

```
import dataclasses
import torch
import torch.utils._pytree as pytree
@dataclasses.dataclass
class D:
b: bool
i: int
f: float
t: torch.Tensor
pytree.register_dataclass(D)
class M(torch.nn.Module):
def forward(self, d: D):
return d.i + d.f + d.t
input1 = (D(True, 3, 3.0, torch.ones(3)),)
input2 = (D(True, 4, 3.0, torch.ones(4)),)
ai = torch.export.AdditionalInputs()
ai.add(input1)
ai.add(input2)
print(ai.dynamic_shapes(M(), input1))
ep = torch.export.export(M(), input1, dynamic_shapes=ai)
print(ep)
```

```
{'d': [None, DimHint(DYNAMIC), None, (DimHint(DYNAMIC),)]}
ExportedProgram:
class GraphModule(torch.nn.Module):
def forward(self, d_b, d_i: "Sym(s37)", d_f, d_t: "f32[s99]"):
# File: /tmp/ipykernel_385/829931439.py:16 in forward, code: return d.i + d.f + d.t
sym_float: "Sym(ToFloat(s37))" = torch.sym_float(d_i); d_i = None
add: "Sym(ToFloat(s37) + 3.0)" = sym_float + 3.0; sym_float = None
add_1: "f32[s99]" = torch.ops.aten.add.Tensor(d_t, add); d_t = add = None
return (add_1,)
Graph signature:
# inputs
d_b: USER_INPUT
d_i: USER_INPUT
d_f: USER_INPUT
d_t: USER_INPUT
# outputs
add_1: USER_OUTPUT
Range constraints: {s37: VR[0, int_oo], s99: VR[2, int_oo]}
```

## Serialization[#](#serialization)

To save the `ExportedProgram`

, users can use the [ torch.export.save()](export/api_reference.html#torch.export.save) and

[APIs. The resulting file is a zipfile with a specific structure. The details of the structure are defined in the](export/api_reference.html#torch.export.load)

`torch.export.load()`

[PT2 Archive Spec](export/pt2_archive.html#export-pt2-archive).

An example:

```
import torch
class MyModule(torch.nn.Module):
def forward(self, x):
return x + 10
exported_program = torch.export.export(MyModule(), (torch.randn(5),))
torch.export.save(exported_program, 'exported_program.pt2')
saved_exported_program = torch.export.load('exported_program.pt2')
```

## Export IR: Training vs Inference[#](#export-ir-training-vs-inference)

The graph produced by `torch.export`

returns a graph containing only
[ATen operators](https://pytorch.org/cppdocs/#aten), which are the basic unit of
computation in PyTorch. Export provides different IR levels based on your use case:

IR Type |
How to Obtain |
Properties |
Operator Count |
Use Case |
|---|---|---|---|---|
Training IR |
|
May contain mutations |
~3000 |
Training with autograd |
Inference IR |
|
Purely functional |
~2000 |
Inference deployment |
Core ATen IR |
|
Purely functional, highly decomposed |
~180 |
Minimal backend support |

### Training IR (Default)[#](#training-ir-default)

By default, export produces a **Training IR** which contains all ATen
operators, including both functional and non-functional (mutating) operators.
A functional operator is one that does not contain any mutations or aliasing
of the inputs, while non-functional operators may modify their inputs in-place.
You can find a list of all ATen operators
[here](https://github.com/pytorch/pytorch/blob/main/aten/src/ATen/native/native_functions.yaml)
and you can inspect if an operator is functional by checking
`op._schema.is_mutable`

.

This Training IR, which may contain mutations, is designed for training use cases and can be used with eager PyTorch Autograd.

```
import torch
class M(torch.nn.Module):
def __init__(self) -> None:
super().__init__()
self.conv = torch.nn.Conv2d(1, 3, 1, 1)
self.bn = torch.nn.BatchNorm2d(3)
def forward(self, x):
x = self.conv(x)
x = self.bn(x)
return (x,)
ep_for_training = torch.export.export(M(), (torch.randn(1, 1, 3, 3),))
print(ep_for_training.graph_module.print_readable(print_output=False))
```

```
class GraphModule(torch.nn.Module):
def forward(self, p_conv_weight: "f32[3, 1, 1, 1]", p_conv_bias: "f32[3]", p_bn_weight: "f32[3]", p_bn_bias: "f32[3]", b_bn_running_mean: "f32[3]", b_bn_running_var: "f32[3]", b_bn_num_batches_tracked: "i64[]", x: "f32[1, 1, 3, 3]"):
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/conv.py:553 in forward, code: return self._conv_forward(input, self.weight, self.bias)
conv2d: "f32[1, 3, 3, 3]" = torch.ops.aten.conv2d.default(x, p_conv_weight, p_conv_bias); x = p_conv_weight = p_conv_bias = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/batchnorm.py:174 in forward, code: self.num_batches_tracked.add_(1) # type: ignore[has-type]
add_: "i64[]" = torch.ops.aten.add_.Tensor(b_bn_num_batches_tracked, 1); b_bn_num_batches_tracked = add_ = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/batchnorm.py:194 in forward, code: return F.batch_norm(
batch_norm: "f32[1, 3, 3, 3]" = torch.ops.aten.batch_norm.default(conv2d, p_bn_weight, p_bn_bias, b_bn_running_mean, b_bn_running_var, True, 0.1, 1e-05, False); conv2d = p_bn_weight = p_bn_bias = b_bn_running_mean = b_bn_running_var = None
return (batch_norm,)
```

### Inference IR (via run_decompositions)[#](#inference-ir-via-run-decompositions)

To obtain an **Inference IR** suitable for deployment, use the
`ExportedProgram.run_decompositions()`

API. This method automatically:

Functionalizes the graph (removes all mutations and converts them to functional equivalents)

Optionally decomposes ATen operators based on the provided decomposition table


This produces a purely functional graph ideal for inference scenarios.

By specifying an empty decomposition table (`decomp_table={}`

), you get just
the functionalization without additional decompositions. This produces an
Inference IR with ~2000 functional operators (compared to 3000+ in Training IR).

```
import torch
class M(torch.nn.Module):
def __init__(self) -> None:
super().__init__()
self.conv = torch.nn.Conv2d(1, 3, 1, 1)
self.bn = torch.nn.BatchNorm2d(3)
def forward(self, x):
x = self.conv(x)
x = self.bn(x)
return (x,)
ep_for_training = torch.export.export(M(), (torch.randn(1, 1, 3, 3),))
with torch.no_grad():
ep_for_inference = ep_for_training.run_decompositions(decomp_table={})
print(ep_for_inference.graph_module.print_readable(print_output=False))
```

```
class GraphModule(torch.nn.Module):
def forward(self, p_conv_weight: "f32[3, 1, 1, 1]", p_conv_bias: "f32[3]", p_bn_weight: "f32[3]", p_bn_bias: "f32[3]", b_bn_running_mean: "f32[3]", b_bn_running_var: "f32[3]", b_bn_num_batches_tracked: "i64[]", x: "f32[1, 1, 3, 3]"):
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/conv.py:553 in forward, code: return self._conv_forward(input, self.weight, self.bias)
conv2d: "f32[1, 3, 3, 3]" = torch.ops.aten.conv2d.default(x, p_conv_weight, p_conv_bias); x = p_conv_weight = p_conv_bias = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/batchnorm.py:174 in forward, code: self.num_batches_tracked.add_(1) # type: ignore[has-type]
add: "i64[]" = torch.ops.aten.add.Tensor(b_bn_num_batches_tracked, 1); b_bn_num_batches_tracked = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/batchnorm.py:194 in forward, code: return F.batch_norm(
_native_batch_norm_legit_functional = torch.ops.aten._native_batch_norm_legit_functional.default(conv2d, p_bn_weight, p_bn_bias, b_bn_running_mean, b_bn_running_var, True, 0.1, 1e-05); conv2d = p_bn_weight = p_bn_bias = b_bn_running_mean = b_bn_running_var = None
getitem: "f32[1, 3, 3, 3]" = _native_batch_norm_legit_functional[0]
getitem_3: "f32[3]" = _native_batch_norm_legit_functional[3]
getitem_4: "f32[3]" = _native_batch_norm_legit_functional[4]; _native_batch_norm_legit_functional = None
return (getitem_3, getitem_4, add, getitem)
```

```
/opt/conda/envs/py_3.10/lib/python3.10/copyreg.py:101: FutureWarning: `isinstance(treespec, LeafSpec)` is deprecated, use `isinstance(treespec, TreeSpec) and treespec.is_leaf()` instead.
return cls.__new__(cls, *args)
```

As we can see, the previously in-place operator,
`torch.ops.aten.add_.default`

has now been replaced with
`torch.ops.aten.add.default`

, a functional operator.

### Core ATen IR[#](#core-aten-ir)

We can further lower the Inference IR to the
`Core ATen Operator Set <https://docs.pytorch.org/docs/main/user_guide/torch_compiler/torch.compiler_ir.html#core-aten-ir>`

__,
which contains only ~180 operators. This is achieved by passing `decomp_table=None`

(which uses the default decomposition table) to `run_decompositions()`

. This IR
is optimal for backends who want to minimize the number of operators they need
to implement.

```
import torch
class M(torch.nn.Module):
def __init__(self) -> None:
super().__init__()
self.conv = torch.nn.Conv2d(1, 3, 1, 1)
self.bn = torch.nn.BatchNorm2d(3)
def forward(self, x):
x = self.conv(x)
x = self.bn(x)
return (x,)
ep_for_training = torch.export.export(M(), (torch.randn(1, 1, 3, 3),))
with torch.no_grad():
core_aten_ir = ep_for_training.run_decompositions(decomp_table=None)
print(core_aten_ir.graph_module.print_readable(print_output=False))
```

```
class GraphModule(torch.nn.Module):
def forward(self, p_conv_weight: "f32[3, 1, 1, 1]", p_conv_bias: "f32[3]", p_bn_weight: "f32[3]", p_bn_bias: "f32[3]", b_bn_running_mean: "f32[3]", b_bn_running_var: "f32[3]", b_bn_num_batches_tracked: "i64[]", x: "f32[1, 1, 3, 3]"):
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/conv.py:553 in forward, code: return self._conv_forward(input, self.weight, self.bias)
convolution: "f32[1, 3, 3, 3]" = torch.ops.aten.convolution.default(x, p_conv_weight, p_conv_bias, [1, 1], [0, 0], [1, 1], False, [0, 0], 1); x = p_conv_weight = p_conv_bias = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/batchnorm.py:174 in forward, code: self.num_batches_tracked.add_(1) # type: ignore[has-type]
add: "i64[]" = torch.ops.aten.add.Tensor(b_bn_num_batches_tracked, 1); b_bn_num_batches_tracked = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/batchnorm.py:194 in forward, code: return F.batch_norm(
_native_batch_norm_legit_functional = torch.ops.aten._native_batch_norm_legit_functional.default(convolution, p_bn_weight, p_bn_bias, b_bn_running_mean, b_bn_running_var, True, 0.1, 1e-05); convolution = p_bn_weight = p_bn_bias = b_bn_running_mean = b_bn_running_var = None
getitem: "f32[1, 3, 3, 3]" = _native_batch_norm_legit_functional[0]
getitem_3: "f32[3]" = _native_batch_norm_legit_functional[3]
getitem_4: "f32[3]" = _native_batch_norm_legit_functional[4]; _native_batch_norm_legit_functional = None
return (getitem_3, getitem_4, add, getitem)
```

```
/opt/conda/envs/py_3.10/lib/python3.10/copyreg.py:101: FutureWarning: `isinstance(treespec, LeafSpec)` is deprecated, use `isinstance(treespec, TreeSpec) and treespec.is_leaf()` instead.
return cls.__new__(cls, *args)
```

We now see that `torch.ops.aten.conv2d.default`

has been decomposed
into `torch.ops.aten.convolution.default`

. This is because `convolution`

is a more “core” operator, as operations like `conv1d`

and `conv2d`

can be
implemented using the same op.

We can also specify our own decomposition behaviors:

```
class M(torch.nn.Module):
def __init__(self) -> None:
super().__init__()
self.conv = torch.nn.Conv2d(1, 3, 1, 1)
self.bn = torch.nn.BatchNorm2d(3)
def forward(self, x):
x = self.conv(x)
x = self.bn(x)
return (x,)
ep_for_training = torch.export.export(M(), (torch.randn(1, 1, 3, 3),))
my_decomp_table = torch.export.default_decompositions()
def my_awesome_custom_conv2d_function(x, weight, bias, stride=[1, 1], padding=[0, 0], dilation=[1, 1], groups=1):
return 2 * torch.ops.aten.convolution(x, weight, bias, stride, padding, dilation, False, [0, 0], groups)
my_decomp_table[torch.ops.aten.conv2d.default] = my_awesome_custom_conv2d_function
my_ep = ep_for_training.run_decompositions(my_decomp_table)
print(my_ep.graph_module.print_readable(print_output=False))
```

```
class GraphModule(torch.nn.Module):
def forward(self, p_conv_weight: "f32[3, 1, 1, 1]", p_conv_bias: "f32[3]", p_bn_weight: "f32[3]", p_bn_bias: "f32[3]", b_bn_running_mean: "f32[3]", b_bn_running_var: "f32[3]", b_bn_num_batches_tracked: "i64[]", x: "f32[1, 1, 3, 3]"):
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/conv.py:553 in forward, code: return self._conv_forward(input, self.weight, self.bias)
convolution: "f32[1, 3, 3, 3]" = torch.ops.aten.convolution.default(x, p_conv_weight, p_conv_bias, [1, 1], [0, 0], [1, 1], False, [0, 0], 1); x = p_conv_weight = p_conv_bias = None
mul: "f32[1, 3, 3, 3]" = torch.ops.aten.mul.Tensor(convolution, 2); convolution = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/batchnorm.py:174 in forward, code: self.num_batches_tracked.add_(1) # type: ignore[has-type]
add: "i64[]" = torch.ops.aten.add.Tensor(b_bn_num_batches_tracked, 1); b_bn_num_batches_tracked = None
# File: /opt/conda/envs/py_3.10/lib/python3.10/site-packages/torch/nn/modules/batchnorm.py:194 in forward, code: return F.batch_norm(
_native_batch_norm_legit_functional = torch.ops.aten._native_batch_norm_legit_functional.default(mul, p_bn_weight, p_bn_bias, b_bn_running_mean, b_bn_running_var, True, 0.1, 1e-05); mul = p_bn_weight = p_bn_bias = b_bn_running_mean = b_bn_running_var = None
getitem: "f32[1, 3, 3, 3]" = _native_batch_norm_legit_functional[0]
getitem_3: "f32[3]" = _native_batch_norm_legit_functional[3]
getitem_4: "f32[3]" = _native_batch_norm_legit_functional[4]; _native_batch_norm_legit_functional = None
return (getitem_3, getitem_4, add, getitem)
```

```
/opt/conda/envs/py_3.10/lib/python3.10/copyreg.py:101: FutureWarning: `isinstance(treespec, LeafSpec)` is deprecated, use `isinstance(treespec, TreeSpec) and treespec.is_leaf()` instead.
return cls.__new__(cls, *args)
```

Notice that instead of `torch.ops.aten.conv2d.default`

being decomposed
into `torch.ops.aten.convolution.default`

, it is now decomposed into
`torch.ops.aten.convolution.default`

and `torch.ops.aten.mul.Tensor`

,
which matches our custom decomposition rule.

## Limitations of torch.export[#](#limitations-of-torch-export)

As `torch.export`

is a one-shot process for capturing a computation graph from
a PyTorch program, it might ultimately run into untraceable parts of programs as
it is nearly impossible to support tracing all PyTorch and Python features. In
the case of `torch.compile`

, an unsupported operation will cause a “graph
break” and the unsupported operation will be run with default Python evaluation.
In contrast, `torch.export`

will require users to provide additional
information or rewrite parts of their code to make it traceable.

[Draft-export](export/draft_export.html#export-draft-export) is a great resource for listing out
graphs breaks that will be encountered when tracing the program, along with
additional debug information to solve those errors.

[ExportDB](../../generated/exportdb/index.html#torch-export-db) is also great resource for learning about the
kinds of programs that are supported and unsupported, along with ways to rewrite
programs to make them traceable.

### TorchDynamo unsupported[#](#torchdynamo-unsupported)

When using `torch.export`

with `strict=True`

, this will use TorchDynamo to
evaluate the program at the Python bytecode level to trace the program into a
graph. Compared to previous tracing frameworks, there will be significantly
fewer rewrites required to make a program traceable, but there will still be
some Python features that are unsupported. An option to get past dealing with
this graph breaks is by using
[non-strict export](export/programming_model.html#non-strict-export) through changing the `strict`

flag
to `strict=False`

.

### Data/Shape-Dependent Control Flow[#](#data-shape-dependent-control-flow)

Graph breaks can also be encountered on data-dependent control flow (`if x.shape[0] > 2`

) when shapes are not being specialized, as a tracing compiler cannot
possibly deal with without generating code for a combinatorially exploding
number of paths. In such cases, users will need to rewrite their code using
special control flow operators. Currently, we support [higher order operators](../../higher_order_ops/index.html#higher-order-ops)
to express control flow patterns like conditionals, mapping, scanning, and looping.

You can also refer to this
[tutorial](https://docs.pytorch.org/tutorials/intermediate/torch_export_tutorial.html#data-dependent-errors)
for more ways of addressing data-dependent errors.

### Missing Fake/Meta Kernels for Operators[#](#missing-fake-meta-kernels-for-operators)

When tracing, a FakeTensor kernel (aka meta kernel) is required for all operators. This is used to reason about the input/output shapes for this operator.

Please see this [tutorial](https://docs.pytorch.org/tutorials/advanced/custom_ops_landing_page.html)
for more details.

In the unfortunate case where your model uses an ATen operator that is does not have a FakeTensor kernel implementation yet, please file an issue.

---

## Source: https://pytorch.org/docs/stable/notes.html

# Developer Notes[#](#developer-notes)

Created On: Apr 16, 2025 | Last Updated On: Apr 16, 2025

[Automatic Mixed Precision examples](notes/amp_examples.html)[Autograd mechanics](notes/autograd.html)[Broadcasting semantics](notes/broadcasting.html)[CPU threading and TorchScript inference](notes/cpu_threading_torchscript_inference.html)[CUDA semantics](notes/cuda.html)[PyTorch Custom Operators Landing Page](notes/custom_operators.html)[Distributed Data Parallel](notes/ddp.html)[Extending PyTorch](notes/extending.html)[Extending torch.func with autograd.Function](notes/extending.func.html)[Frequently Asked Questions](notes/faq.html)[Getting Started on Intel GPU](notes/get_start_xpu.html)[Gradcheck mechanics](notes/gradcheck.html)[HIP (ROCm) semantics](notes/hip.html)[Features for large-scale deployments](notes/large_scale_deployments.html)[LibTorch Stable ABI](notes/libtorch_stable_abi.html)[LocalTensor Tutorial: Single-Process SPMD Debugging](notes/local_tensor_tutorial.html)[MKLDNN backend](notes/mkldnn.html)[Bfloat16 (BF16) on MKLDNN backend](notes/mkldnn.html#bfloat16-bf16-on-mkldnn-backend)[Modules](notes/modules.html)[MPS backend](notes/mps.html)[Multiprocessing best practices](notes/multiprocessing.html)[Numerical accuracy](notes/numerical_accuracy.html)[Out Notes](notes/out.html)[Reproducibility](notes/randomness.html)[Serialization semantics](notes/serialization.html)[Windows FAQ](notes/windows.html)

---

## Source: https://pytorch.org/docs/stable/accelerator/index.html

# Accelerator Integration[#](#accelerator-integration)

Created On: Sep 02, 2025 | Last Updated On: Dec 26, 2025

Since PyTorch 2.1, the community has made significant progress in streamlining the process of integrating new accelerators into the PyTorch ecosystem. These improvements include, but are not limited to: refinements to the `PrivateUse1`

Dispatch Key, the introduction and enhancement of core subsystem extension mechanisms, and the device-agnostic refactoring of key modules (e.g., `torch.accelerator`

, `memory management`

). Taken together, these advances provide the foundation for a **robust**, **flexible**, and **developer-friendly** pathway for accelerator integration.

Note

This guide is a work in progress. For more details, please refer to the [roadmap](https://github.com/pytorch/pytorch/issues/158917).

## Why Does This Matter?[#](#why-does-this-matter)

This integration pathway offers several major benefits:

**Speed**: Extensibility is built into all core PyTorch modules. Developers can integrate new accelerators into their downstream codebases independently—without modifying upstream code and without being limited by community review bandwidth.**Future-proofing**: This is the default integration path for all future PyTorch features, meaning that as new modules and features are added, they will automatically support scaling to new accelerators if this path is followed.**Autonomy**: Vendors maintain full control over their accelerator integration timelines, enabling fast iteration cycles and reducing reliance on upstream coordination.

## Target Audience[#](#target-audience)

This document is intended for:

**Accelerator Developers**who are integrating accelerator into PyTorch;**Advanced PyTorch Users**interested in the inner workings of key modules;

## About This Document[#](#about-this-document)

This guide aims to provide a **comprehensive overview of the modern integration pathway** for new accelerator in PyTorch. It walks through the full integration surface, from low-level device primitives to higher-level domain modules like compilation and quantization. The structure follows a **modular and scenario-driven approach**, where each topic is paired with corresponding code examples from [torch_openreg](https://github.com/pytorch/pytorch/tree/main/test/cpp_extensions/open_registration_extension/torch_openreg), an official reference implementation, and this series is structured around four major axes:

**Runtime**: Covers core components such as Event, Stream, Memory, Generator, Guard, Hooks, as well as the supporting C++ scaffolding.**Operators**: Involve the minimum necessary set of operators, forward and backward operators, fallback operators, fallthroughs, STUBs, etc. in both C++ and Python implementations.**Python Frontend**: Focuses on Python bindings for modules and device-agnostic APIs.**High-level Modules**: Explores integration with major subsystems such as`AMP`

,`Compiler`

,`ONNX`

, and`Distributed`

and so on.

The goal is to help developers:

Understand the full scope of accelerator integration;

Follow best practices to quickly launch new accelerators;

Avoid common pitfalls through clear, targeted examples.


Next, we will delve into each chapter of this guide. Each chapter focuses on a key aspect of integration, providing detailed explanations and illustrative examples. Since some chapters build upon previous ones, readers are encouraged to follow the sequence to achieve a more coherent understanding.

---

## Source: https://pytorch.org/docs/stable/pytorch-api.html

# Reference API[#](#reference-api)

Created On: Apr 16, 2025 | Last Updated On: Jan 24, 2026

[torch](torch.html)[torch.nn](nn.html)[torch.nn.functional](nn.functional.html)[torch.Tensor](tensors.html)[Tensor Attributes](tensor_attributes.html)[Tensor Views](tensor_view.html)[torch.amp](amp.html)[torch.autograd](autograd.html)[torch.library](library.html)[torch.accelerator](accelerator.html)[torch.cpu](cpu.html)[torch.cuda](cuda.html)[torch.cuda.memory](torch_cuda_memory.html)[torch.mps](mps.html)[torch.xpu](xpu.html)[torch.mtia](mtia.html)[torch.mtia.memory](mtia.memory.html)[torch.mtia.mtia_graph](mtia.mtia_graph.html)[Meta device](meta.html)[torch.backends](backends.html)[torch.export](user_guide/torch_compiler/export.html)[torch.distributed](distributed.html)[torch.distributed.tensor](distributed.tensor.html)[torch.distributed.algorithms.join](distributed.algorithms.join.html)[torch.distributed.elastic](distributed.elastic.html)[torch.distributed.fsdp](fsdp.html)[torch.distributed.fsdp.fully_shard](distributed.fsdp.fully_shard.html)[torch.distributed.tensor.parallel](distributed.tensor.parallel.html)[torch.distributed.optim](distributed.optim.html)[torch.distributed.pipelining](distributed.pipelining.html)[torch.distributed._symmetric_memory](symmetric_memory.html)[torch.distributed.checkpoint](distributed.checkpoint.html)[torch.distributions](distributions.html)[torch.compiler](torch.compiler_api.html)[torch.fft](fft.html)[torch.func](func.html)[torch.futures](futures.html)[torch.fx](fx.html)[torch.fx.experimental](fx.experimental.html)[torch.hub](hub.html)[torch.linalg](linalg.html)[torch.monitor](monitor.html)[torch.signal](signal.html)[torch.special](special.html)[torch.overrides](torch.overrides.html)[torch.nativert](nativert.html)[torch.package](package.html)[torch.profiler](profiler.html)[torch.nn.init](nn.init.html)[torch.nn.attention](nn.attention.html)[torch.onnx](onnx.html)[torch.optim](optim.html)[Complex Numbers](complex_numbers.html)[DDP Communication Hooks](ddp_comm_hooks.html)[Quantization](quantization.html)[Distributed RPC Framework](rpc.html)[torch.random](random.html)[torch.masked](masked.html)[torch.nested](nested.html)[torch.Size](size.html)[torch.sparse](sparse.html)[torch.Storage](storage.html)[torch.testing](testing.html)[torch.utils](utils.html)[torch.utils.collect_env](utils.html#module-torch.utils.collect_env)[torch.utils.flop_counter](utils.html#module-torch.utils.flop_counter)[torch.utils.hipify.hipify_python](utils.html#module-torch.utils.hipify.hipify_python)[torch.utils.benchmark](benchmark_utils.html)[torch.utils.checkpoint](checkpoint.html)[torch.utils.cpp_extension](cpp_extension.html)[torch.utils.data](data.html)[torch.utils.deterministic](deterministic.html)[torch.utils.jit](jit_utils.html)[torch.utils.dlpack](dlpack.html)[torch.utils.mobile_optimizer](mobile_optimizer.html)[torch.utils.model_zoo](model_zoo.html)[torch.utils.tensorboard](tensorboard.html)[torch.utils.module_tracker](module_tracker.html)[Type Info](type_info.html)[Named Tensors](named_tensor.html)[Named Tensors operator coverage](name_inference.html)[torch.__config__](config_mod.html)[torch.__future__](future_mod.html)[torch._logging](logging.html)[Torch Environment Variables](torch_environment_variables.html)

---

## Source: https://pytorch.org/docs/stable/torch.html

# torch[#](#module-torch)

Created On: Dec 23, 2016 | Last Updated On: Jan 08, 2026

The torch package contains data structures for multi-dimensional tensors and defines mathematical operations over these tensors. Additionally, it provides many utilities for efficient serialization of Tensors and arbitrary types, and other useful utilities.

It has a CUDA counterpart, that enables you to run your tensor computations on an NVIDIA GPU with compute capability >= 3.0.

## Tensors[#](#tensors)

`is_tensor` |

Returns True if obj is a PyTorch tensor.

`is_storage`

Returns True if obj is a PyTorch storage object.

`is_complex`

Returns True if the data type of `input`

is a complex data type i.e., one of `torch.complex64`

, and `torch.complex128`

.

`is_conj`

Returns True if the `input`

is a conjugated tensor, i.e. its conjugate bit is set to True.

`is_floating_point`

Returns True if the data type of `input`

is a floating point data type i.e., one of `torch.float64`

, `torch.float32`

, `torch.float16`

, and `torch.bfloat16`

.

`is_nonzero`

Returns True if the `input`

is a single element tensor which is not equal to zero after type conversions.

`set_default_dtype`

Sets the default floating point dtype to `d`

.

`get_default_dtype`

Get the current default floating point [ torch.dtype](tensor_attributes.html#torch.dtype).

`set_default_device`

Sets the default `torch.Tensor`

to be allocated on `device`

.

`get_default_device`

Gets the default `torch.Tensor`

to be allocated on `device`


`set_default_tensor_type`

`numel`

Returns the total number of elements in the `input`

tensor.

`set_printoptions`

Set options for printing.

`set_flush_denormal`

Disables denormal floating numbers on CPU.

### Creation Ops[#](#creation-ops)

Note

Random sampling creation ops are listed under [Random sampling](#random-sampling) and
include:
`torch.rand()`

`torch.rand_like()`

`torch.randn()`

`torch.randn_like()`

`torch.randint()`

`torch.randint_like()`

[ torch.randperm()](generated/torch.randperm.html#torch.randperm)
You may also use

[with the](generated/torch.empty.html#torch.empty)

`torch.empty()`

[In-place random sampling](#inplace-random-sampling)methods to create

[s with values sampled from a broader range of distributions.](tensors.html#torch.Tensor)

`torch.Tensor`

`tensor` |

Constructs a tensor with no autograd history (also known as a "leaf tensor", see [Autograd mechanics](notes/autograd.html)) by copying `data`

.

`sparse_coo_tensor`

Constructs a [sparse tensor in COO(rdinate) format](sparse.html#sparse-coo-docs) with specified values at the given `indices`

.

`sparse_csr_tensor`

Constructs a [sparse tensor in CSR (Compressed Sparse Row)](sparse.html#sparse-csr-docs) with specified values at the given `crow_indices`

and `col_indices`

.

`sparse_csc_tensor`

Constructs a [sparse tensor in CSC (Compressed Sparse Column)](sparse.html#sparse-csc-docs) with specified values at the given `ccol_indices`

and `row_indices`

.

`sparse_bsr_tensor`

Constructs a [sparse tensor in BSR (Block Compressed Sparse Row))](sparse.html#sparse-bsr-docs) with specified 2-dimensional blocks at the given `crow_indices`

and `col_indices`

.

`sparse_bsc_tensor`

Constructs a [sparse tensor in BSC (Block Compressed Sparse Column))](sparse.html#sparse-bsc-docs) with specified 2-dimensional blocks at the given `ccol_indices`

and `row_indices`

.

`asarray`

Converts `obj`

to a tensor.

`as_tensor`

Converts `data`

into a tensor, sharing data and preserving autograd history if possible.

`as_strided`

Create a view of an existing torch.Tensor `input`

with specified `size`

, `stride`

and `storage_offset`

.

`from_file`

Creates a CPU tensor with a storage backed by a memory-mapped file.

`from_numpy`

Creates a [ Tensor](tensors.html#torch.Tensor) from a

[.](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray)

`numpy.ndarray`

`from_dlpack`

Converts a tensor from an external library into a `torch.Tensor`

.

`frombuffer`

Creates a 1-dimensional [ Tensor](tensors.html#torch.Tensor) from an object that implements the Python buffer protocol.

`zeros`

Returns a tensor filled with the scalar value 0, with the shape defined by the variable argument `size`

.

`zeros_like`

Returns a tensor filled with the scalar value 0, with the same size as `input`

.

`ones`

Returns a tensor filled with the scalar value 1, with the shape defined by the variable argument `size`

.

`ones_like`

Returns a tensor filled with the scalar value 1, with the same size as `input`

.

`arange`

Returns a 1-D tensor of size with values from the interval `[start, end)`

taken with common difference `step`

beginning from start.

`range`

Returns a 1-D tensor of size with values from `start`

to `end`

with step `step`

.

`linspace`

Creates a one-dimensional tensor of size `steps`

whose values are evenly spaced from `start`

to `end`

, inclusive.

`logspace`

Creates a one-dimensional tensor of size `steps`

whose values are evenly spaced from to , inclusive, on a logarithmic scale with base `base`

.

`eye`

Returns a 2-D tensor with ones on the diagonal and zeros elsewhere.

`empty`

Returns a tensor filled with uninitialized data.

`empty_like`

Returns an uninitialized tensor with the same size as `input`

.

`empty_strided`

Creates a tensor with the specified `size`

and `stride`

and filled with undefined data.

`full`

Creates a tensor of size `size`

filled with `fill_value`

.

`full_like`

Returns a tensor with the same size as `input`

filled with `fill_value`

.

`quantize_per_tensor`

Converts a float tensor to a quantized tensor with given scale and zero point.

`quantize_per_channel`

Converts a float tensor to a per-channel quantized tensor with given scales and zero points.

`dequantize`

Returns an fp32 Tensor by dequantizing a quantized Tensor

`complex`

Constructs a complex tensor with its real part equal to [ real](generated/torch.real.html#torch.real) and its imaginary part equal to

[.](generated/torch.imag.html#torch.imag)

`imag`

`polar`

Constructs a complex tensor whose elements are Cartesian coordinates corresponding to the polar coordinates with absolute value [ abs](generated/torch.abs.html#torch.abs) and angle

[.](generated/torch.angle.html#torch.angle)

`angle`

`heaviside`

Computes the Heaviside step function for each element in `input`

.

### Indexing, Slicing, Joining, Mutating Ops[#](#indexing-slicing-joining-mutating-ops)

`adjoint` |

Returns a view of the tensor conjugated and with the last two dimensions transposed.

`argwhere`

Returns a tensor containing the indices of all non-zero elements of `input`

.

`cat`

Concatenates the given sequence of tensors in `tensors`

in the given dimension.

`concat`

Alias of [ torch.cat()](generated/torch.cat.html#torch.cat).

`concatenate`

Alias of [ torch.cat()](generated/torch.cat.html#torch.cat).

`conj`

Returns a view of `input`

with a flipped conjugate bit.

`chunk`

Attempts to split a tensor into the specified number of chunks.

`dsplit`

Splits `input`

, a tensor with three or more dimensions, into multiple tensors depthwise according to `indices_or_sections`

.

`column_stack`

Creates a new tensor by horizontally stacking the tensors in `tensors`

.

`dstack`

Stack tensors in sequence depthwise (along third axis).

`gather`

Gathers values along an axis specified by dim.

`hsplit`

Splits `input`

, a tensor with one or more dimensions, into multiple tensors horizontally according to `indices_or_sections`

.

`hstack`

Stack tensors in sequence horizontally (column wise).

`index_add`

See [ index_add_()](generated/torch.Tensor.index_add_.html#torch.Tensor.index_add_) for function description.

`index_copy`

See [ index_add_()](generated/torch.Tensor.index_add_.html#torch.Tensor.index_add_) for function description.

`index_reduce`

See [ index_reduce_()](generated/torch.Tensor.index_reduce_.html#torch.Tensor.index_reduce_) for function description.

`index_select`

Returns a new tensor which indexes the `input`

tensor along dimension `dim`

using the entries in `index`

.

`masked_select`

Returns a new 1-D tensor which indexes the `input`

tensor according to the boolean mask `mask`

which is a BoolTensor.

`movedim`

Moves the dimension(s) of `input`

at the position(s) in `source`

to the position(s) in `destination`

.

`moveaxis`

Alias for [ torch.movedim()](generated/torch.movedim.html#torch.movedim).

`narrow`

Returns a new tensor that is a narrowed version of `input`

tensor.

`narrow_copy`

Same as [ Tensor.narrow()](generated/torch.Tensor.narrow.html#torch.Tensor.narrow) except this returns a copy rather than shared storage.

`nonzero`

`permute`

Returns a view of the original tensor `input`

with its dimensions permuted.

`reshape`

Returns a tensor with the same data and number of elements as `input`

, but with the specified shape.

`row_stack`

Alias of [ torch.vstack()](generated/torch.vstack.html#torch.vstack).

`select`

Slices the `input`

tensor along the selected dimension at the given index.

`scatter`

Out-of-place version of `torch.Tensor.scatter_()`


`diagonal_scatter`

Embeds the values of the `src`

tensor into `input`

along the diagonal elements of `input`

, with respect to `dim1`

and `dim2`

.

`select_scatter`

Embeds the values of the `src`

tensor into `input`

at the given index.

`slice_scatter`

Embeds the values of the `src`

tensor into `input`

at the given dimension.

`scatter_add`

Out-of-place version of `torch.Tensor.scatter_add_()`


`scatter_reduce`

Out-of-place version of `torch.Tensor.scatter_reduce_()`


`segment_reduce`

Perform a segment reduction operation on the input tensor along the specified axis.

`split`

Splits the tensor into chunks.

`squeeze`

Returns a tensor with all specified dimensions of `input`

of size 1 removed.

`stack`

Concatenates a sequence of tensors along a new dimension.

`swapaxes`

Alias for [ torch.transpose()](generated/torch.transpose.html#torch.transpose).

`swapdims`

Alias for [ torch.transpose()](generated/torch.transpose.html#torch.transpose).

`t`

Expects `input`

to be <= 2-D tensor and transposes dimensions 0 and 1.

`take`

Returns a new tensor with the elements of `input`

at the given indices.

`take_along_dim`

Selects values from `input`

at the 1-dimensional indices from `indices`

along the given `dim`

.

`tensor_split`

Splits a tensor into multiple sub-tensors, all of which are views of `input`

, along dimension `dim`

according to the indices or number of sections specified by `indices_or_sections`

.

`tile`

Constructs a tensor by repeating the elements of `input`

.

`transpose`

Returns a tensor that is a transposed version of `input`

.

`unbind`

Removes a tensor dimension.

`unravel_index`

Converts a tensor of flat indices into a tuple of coordinate tensors that index into an arbitrary tensor of the specified shape.

`unsqueeze`

Returns a new tensor with a dimension of size one inserted at the specified position.

`vsplit`

Splits `input`

, a tensor with two or more dimensions, into multiple tensors vertically according to `indices_or_sections`

.

`vstack`

Stack tensors in sequence vertically (row wise).

`where`

Return a tensor of elements selected from either `input`

or `other`

, depending on `condition`

.

## Accelerators[#](#accelerators)

Within the PyTorch repo, we define an “Accelerator” as a [ torch.device](tensor_attributes.html#torch.device) that is being used
alongside a CPU to speed up computation. These devices use an asynchronous execution scheme,
using

[and](generated/torch.Stream.html#torch.Stream)

`torch.Stream`

[as their main way to perform synchronization. We also assume that only one such accelerator can be available at once on a given host. This allows us to use the current accelerator as the default device for relevant concepts such as pinned memory, Stream device_type, FSDP, etc.](generated/torch.Event.html#torch.Event)

`torch.Event`

As of today, accelerator devices are (in no particular order) [“CUDA”](cuda.html), [“MTIA”](mtia.html),
[“XPU”](xpu.html), [“MPS”](mps.html), “HPU”, and PrivateUse1 (many device not in the PyTorch repo itself).

Many tools in the PyTorch Ecosystem use fork to create subprocesses (for example dataloading
or intra-op parallelism), it is thus important to delay as much as possible any
operation that would prevent further forks. This is especially important here as most accelerator’s initialization has such effect.
In practice, you should keep in mind that checking [ torch.accelerator.current_accelerator()](generated/torch.accelerator.current_accelerator.html#torch.accelerator.current_accelerator)
is a compile-time check by default, it is thus always fork-safe.
On the contrary, passing the

`check_available=True`

flag to this function or calling
[will usually prevent later fork.](generated/torch.accelerator.is_available.html#torch.accelerator.is_available)

`torch.accelerator.is_available()`

Some backends provide an experimental opt-in option to make the runtime availability
check fork-safe. When using the CUDA device `PYTORCH_NVML_BASED_CUDA_CHECK=1`

can be
used for example.

## Generators[#](#generators)

`Generator` |

Creates and returns a generator object that manages the state of the algorithm which produces pseudo random numbers.

## Random sampling[#](#random-sampling)

`seed` |

Sets the seed for generating random numbers to a non-deterministic random number on all devices.

`manual_seed`

Sets the seed for generating random numbers on all devices.

`initial_seed`

Returns the initial seed for generating random numbers as a Python long.

`get_rng_state`

Returns the random number generator state as a torch.ByteTensor.

`set_rng_state`

Sets the random number generator state.

-
torch.default_generator
*Returns the default CPU torch.Generator*[#](#torch.torch.default_generator)

`bernoulli` |

Draws binary random numbers (0 or 1) from a Bernoulli distribution.

`multinomial`

Returns a tensor where each row contains `num_samples`

indices sampled from the multinomial (a stricter definition would be multivariate, refer to [ torch.distributions.multinomial.Multinomial](distributions.html#torch.distributions.multinomial.Multinomial) for more details) probability distribution located in the corresponding row of tensor

`input`

.`normal`

Returns a tensor of random numbers drawn from separate normal distributions whose mean and standard deviation are given.

`poisson`

Returns a tensor of the same size as `input`

with each element sampled from a Poisson distribution with rate parameter given by the corresponding element in `input`

i.e.,

`rand`

Returns a tensor filled with random numbers from a uniform distribution on the interval

`rand_like`

Returns a tensor with the same size as `input`

that is filled with random numbers from a uniform distribution on the interval .

`randint`

Returns a tensor filled with random integers generated uniformly between `low`

(inclusive) and `high`

(exclusive).

`randint_like`

Returns a tensor with the same shape as Tensor `input`

filled with random integers generated uniformly between `low`

(inclusive) and `high`

(exclusive).

`randn`

Returns a tensor filled with random numbers from a normal distribution with mean 0 and variance 1 (also called the standard normal distribution).

`randn_like`

Returns a tensor with the same size as `input`

that is filled with random numbers from a normal distribution with mean 0 and variance 1.

`randperm`

Returns a random permutation of integers from `0`

to `n - 1`

.

### In-place random sampling[#](#in-place-random-sampling)

There are a few more in-place random sampling functions defined on Tensors as well. Click through to refer to their documentation:

- in-place version of`torch.Tensor.bernoulli_()`

`torch.bernoulli()`

- numbers drawn from the Cauchy distribution`torch.Tensor.cauchy_()`

- numbers drawn from the exponential distribution`torch.Tensor.exponential_()`

- elements drawn from the geometric distribution`torch.Tensor.geometric_()`

- samples from the log-normal distribution`torch.Tensor.log_normal_()`

- in-place version of`torch.Tensor.normal_()`

`torch.normal()`

- numbers sampled from the discrete uniform distribution`torch.Tensor.random_()`

- numbers sampled from the continuous uniform distribution`torch.Tensor.uniform_()`


### Quasi-random sampling[#](#quasi-random-sampling)

The |

## Serialization[#](#serialization)

`save` |

Saves an object to a disk file.

`load`

Loads an object saved with [ torch.save()](generated/torch.save.html#torch.save) from a file.

## Parallelism[#](#parallelism)

`get_num_threads` |

Returns the number of threads used for parallelizing CPU operations

`set_num_threads`

Sets the number of threads used for intraop parallelism on CPU.

`get_num_interop_threads`

Returns the number of threads used for inter-op parallelism on CPU (e.g. in JIT interpreter).

`set_num_interop_threads`

Sets the number of threads used for interop parallelism (e.g. in JIT interpreter) on CPU.

## Locally disabling gradient computation[#](#locally-disabling-gradient-computation)

The context managers [ torch.no_grad()](generated/torch.no_grad.html#torch.no_grad),

[, and](generated/torch.enable_grad.html#torch.enable_grad)

`torch.enable_grad()`

`torch.set_grad_enabled()`

are helpful for locally disabling and enabling
gradient computation. See [Locally disabling gradient computation](autograd.html#locally-disable-grad)for more details on their usage. These context managers are thread local, so they won’t work if you send work to another thread using the

`threading`

module, etc.Examples:

```
>>> x = torch.zeros(1, requires_grad=True)
>>> with torch.no_grad():
... y = x * 2
>>> y.requires_grad
False
>>> is_train = False
>>> with torch.set_grad_enabled(is_train):
... y = x * 2
>>> y.requires_grad
False
>>> torch.set_grad_enabled(True) # this can also be used as a function
>>> y = x * 2
>>> y.requires_grad
True
>>> torch.set_grad_enabled(False)
>>> y = x * 2
>>> y.requires_grad
False
```

`no_grad` |

Context-manager that disables gradient calculation.

`enable_grad`

Context-manager that enables gradient calculation.

Context-manager that sets gradient calculation on or off.

`is_grad_enabled`

Returns True if grad mode is currently enabled.

Context manager that enables or disables inference mode.

`is_inference_mode_enabled`

Returns True if inference mode is currently enabled.

## Math operations[#](#math-operations)

### Constants[#](#constants)

|
A floating-point positive infinity. Alias for |
|
A floating-point “not a number” value. This value is not a legal number. Alias for |

### Pointwise Ops[#](#pointwise-ops)

`abs` |

Computes the absolute value of each element in `input`

.

`absolute`

Alias for `torch.abs()`


`acos`

Returns a new tensor with the arccosine (in radians) of each element in `input`

.

`arccos`

Alias for [ torch.acos()](generated/torch.acos.html#torch.acos).

`acosh`

Returns a new tensor with the inverse hyperbolic cosine of the elements of `input`

.

`arccosh`

Alias for [ torch.acosh()](generated/torch.acosh.html#torch.acosh).

`add`

Adds `other`

, scaled by `alpha`

, to `input`

.

`addcdiv`

Performs the element-wise division of `tensor1`

by `tensor2`

, multiplies the result by the scalar `value`

and adds it to `input`

.

`addcmul`

Performs the element-wise multiplication of `tensor1`

by `tensor2`

, multiplies the result by the scalar `value`

and adds it to `input`

.

`angle`

Computes the element-wise angle (in radians) of the given `input`

tensor.

`asin`

Returns a new tensor with the arcsine of the elements (in radians) in the `input`

tensor.

`arcsin`

Alias for [ torch.asin()](generated/torch.asin.html#torch.asin).

`asinh`

Returns a new tensor with the inverse hyperbolic sine of the elements of `input`

.

`arcsinh`

Alias for [ torch.asinh()](generated/torch.asinh.html#torch.asinh).

`atan`

Returns a new tensor with the arctangent of the elements (in radians) in the `input`

tensor.

`arctan`

Alias for [ torch.atan()](generated/torch.atan.html#torch.atan).

`atanh`

Returns a new tensor with the inverse hyperbolic tangent of the elements of `input`

.

`arctanh`

Alias for [ torch.atanh()](generated/torch.atanh.html#torch.atanh).

`atan2`

Element-wise arctangent of with consideration of the quadrant.

`arctan2`

Alias for [ torch.atan2()](generated/torch.atan2.html#torch.atan2).

`bitwise_not`

Computes the bitwise NOT of the given input tensor.

`bitwise_and`

Computes the bitwise AND of `input`

and `other`

.

`bitwise_or`

Computes the bitwise OR of `input`

and `other`

.

`bitwise_xor`

Computes the bitwise XOR of `input`

and `other`

.

`bitwise_left_shift`

Computes the left arithmetic shift of `input`

by `other`

bits.

`bitwise_right_shift`

Computes the right arithmetic shift of `input`

by `other`

bits.

`ceil`

Returns a new tensor with the ceil of the elements of `input`

, the smallest integer greater than or equal to each element.

`clamp`

`clip`

Alias for [ torch.clamp()](generated/torch.clamp.html#torch.clamp).

`conj_physical`

Computes the element-wise conjugate of the given `input`

tensor.

`copysign`

Create a new floating-point tensor with the magnitude of `input`

and the sign of `other`

, elementwise.

`cos`

Returns a new tensor with the cosine of the elements of `input`

given in radians.

`cosh`

Returns a new tensor with the hyperbolic cosine of the elements of `input`

.

`deg2rad`

Returns a new tensor with each of the elements of `input`

converted from angles in degrees to radians.

`div`

Divides each element of the input `input`

by the corresponding element of `other`

.

`divide`

Alias for [ torch.div()](generated/torch.div.html#torch.div).

`digamma`

Alias for [ torch.special.digamma()](special.html#torch.special.digamma).

`erf`

Alias for [ torch.special.erf()](special.html#torch.special.erf).

`erfc`

Alias for [ torch.special.erfc()](special.html#torch.special.erfc).

`erfinv`

Alias for [ torch.special.erfinv()](special.html#torch.special.erfinv).

`exp`

Returns a new tensor with the exponential of the elements of the input tensor `input`

.

`exp2`

Alias for [ torch.special.exp2()](special.html#torch.special.exp2).

`expm1`

Alias for [ torch.special.expm1()](special.html#torch.special.expm1).

`fake_quantize_per_channel_affine`

Returns a new tensor with the data in `input`

fake quantized per channel using `scale`

, `zero_point`

, `quant_min`

and `quant_max`

, across the channel specified by `axis`

.

`fake_quantize_per_tensor_affine`

Returns a new tensor with the data in `input`

fake quantized using `scale`

, `zero_point`

, `quant_min`

and `quant_max`

.

`fix`

Alias for `torch.trunc()`


`float_power`

Raises `input`

to the power of `exponent`

, elementwise, in double precision.

`floor`

Returns a new tensor with the floor of the elements of `input`

, the largest integer less than or equal to each element.

`floor_divide`

`fmod`

Applies C++'s [std::fmod](https://en.cppreference.com/w/cpp/numeric/math/fmod) entrywise.

`frac`

Computes the fractional portion of each element in `input`

.

`frexp`

Decomposes `input`

into mantissa and exponent tensors such that .

`gradient`

Estimates the gradient of a function in one or more dimensions using the [second-order accurate central differences method](https://www.ams.org/journals/mcom/1988-51-184/S0025-5718-1988-0935077-0/S0025-5718-1988-0935077-0.pdf) and either first or second order estimates at the boundaries.

`imag`

Returns a new tensor containing imaginary values of the `self`

tensor.

`ldexp`

Multiplies `input`

by 2 ** `other`

.

`lerp`

Does a linear interpolation of two tensors `start`

(given by `input`

) and `end`

based on a scalar or tensor `weight`

and returns the resulting `out`

tensor.

`lgamma`

Computes the natural logarithm of the absolute value of the gamma function on `input`

.

`log`

Returns a new tensor with the natural logarithm of the elements of `input`

.

`log10`

Returns a new tensor with the logarithm to the base 10 of the elements of `input`

.

`log1p`

Returns a new tensor with the natural logarithm of (1 + `input`

).

`log2`

Returns a new tensor with the logarithm to the base 2 of the elements of `input`

.

`logaddexp`

Logarithm of the sum of exponentiations of the inputs.

`logaddexp2`

Logarithm of the sum of exponentiations of the inputs in base-2.

`logical_and`

Computes the element-wise logical AND of the given input tensors.

`logical_not`

Computes the element-wise logical NOT of the given input tensor.

`logical_or`

Computes the element-wise logical OR of the given input tensors.

`logical_xor`

Computes the element-wise logical XOR of the given input tensors.

`logit`

Alias for [ torch.special.logit()](special.html#torch.special.logit).

`hypot`

Given the legs of a right triangle, return its hypotenuse.

`i0`

Alias for [ torch.special.i0()](special.html#torch.special.i0).

`igamma`

Alias for [ torch.special.gammainc()](special.html#torch.special.gammainc).

`igammac`

Alias for [ torch.special.gammaincc()](special.html#torch.special.gammaincc).

`mul`

Multiplies `input`

by `other`

.

`multiply`

Alias for [ torch.mul()](generated/torch.mul.html#torch.mul).

`mvlgamma`

Alias for [ torch.special.multigammaln()](special.html#torch.special.multigammaln).

`nan_to_num`

Replaces `NaN`

, positive infinity, and negative infinity values in `input`

with the values specified by `nan`

, `posinf`

, and `neginf`

, respectively.

`neg`

Returns a new tensor with the negative of the elements of `input`

.

`negative`

Alias for `torch.neg()`


`nextafter`

Return the next floating-point value after `input`

towards `other`

, elementwise.

`polygamma`

Alias for [ torch.special.polygamma()](special.html#torch.special.polygamma).

`positive`

Returns `input`

.

`pow`

Takes the power of each element in `input`

with `exponent`

and returns a tensor with the result.

`quantized_batch_norm`

Applies batch normalization on a 4D (NCHW) quantized tensor.

`quantized_max_pool1d`

Applies a 1D max pooling over an input quantized tensor composed of several input planes.

`quantized_max_pool2d`

Applies a 2D max pooling over an input quantized tensor composed of several input planes.

`rad2deg`

Returns a new tensor with each of the elements of `input`

converted from angles in radians to degrees.

`real`

Returns a new tensor containing real values of the `self`

tensor.

`reciprocal`

Returns a new tensor with the reciprocal of the elements of `input`


`remainder`

Computes [Python's modulus operation](https://docs.python.org/3/reference/expressions.html#binary-arithmetic-operations) entrywise.

`round`

Rounds elements of `input`

to the nearest integer.

`rsqrt`

Returns a new tensor with the reciprocal of the square-root of each of the elements of `input`

.

`sigmoid`

Alias for [ torch.special.expit()](special.html#torch.special.expit).

`sign`

Returns a new tensor with the signs of the elements of `input`

.

`sgn`

This function is an extension of torch.sign() to complex tensors.

`signbit`

Tests if each element of `input`

has its sign bit set or not.

`sin`

Returns a new tensor with the sine of the elements in the `input`

tensor, where each value in this input tensor is in radians.

`sinc`

Alias for [ torch.special.sinc()](special.html#torch.special.sinc).

`sinh`

Returns a new tensor with the hyperbolic sine of the elements of `input`

.

`softmax`

Alias for [ torch.nn.functional.softmax()](generated/torch.nn.functional.softmax.html#torch.nn.functional.softmax).

`sqrt`

Returns a new tensor with the square-root of the elements of `input`

.

`square`

Returns a new tensor with the square of the elements of `input`

.

`sub`

Subtracts `other`

, scaled by `alpha`

, from `input`

.

`subtract`

Alias for [ torch.sub()](generated/torch.sub.html#torch.sub).

`tan`

Returns a new tensor with the tangent of the elements in the `input`

tensor, where each value in this input tensor is in radians.

`tanh`

Returns a new tensor with the hyperbolic tangent of the elements of `input`

.

`true_divide`

Alias for [ torch.div()](generated/torch.div.html#torch.div) with

`rounding_mode=None`

.`trunc`

Returns a new tensor with the truncated integer values of the elements of `input`

.

`xlogy`

Alias for [ torch.special.xlogy()](special.html#torch.special.xlogy).

### Reduction Ops[#](#reduction-ops)

`argmax` |

Returns the indices of the maximum value of all elements in the `input`

tensor.

`argmin`

Returns the indices of the minimum value(s) of the flattened tensor or along a dimension

`amax`

Returns the maximum value of each slice of the `input`

tensor in the given dimension(s) `dim`

.

`amin`

Returns the minimum value of each slice of the `input`

tensor in the given dimension(s) `dim`

.

`aminmax`

Computes the minimum and maximum values of the `input`

tensor.

`all`

Tests if all elements in `input`

evaluate to True.

`any`

Tests if any element in `input`

evaluates to True.

`max`

Returns the maximum value of all elements in the `input`

tensor.

`min`

Returns the minimum value of all elements in the `input`

tensor.

`dist`

Returns the p-norm of (`input`

- `other`

)

`logsumexp`

Returns the log of summed exponentials of each row of the `input`

tensor in the given dimension `dim`

.

`mean`

`nanmean`

Computes the mean of all non-NaN elements along the specified dimensions.

`median`

Returns the median of the values in `input`

.

`nanmedian`

Returns the median of the values in `input`

, ignoring `NaN`

values.

`mode`

Returns a namedtuple `(values, indices)`

where `values`

is the mode value of each row of the `input`

tensor in the given dimension `dim`

, i.e. a value which appears most often in that row, and `indices`

is the index location of each mode value found.

`norm`

Returns the matrix norm or vector norm of a given tensor.

`nansum`

Returns the sum of all elements, treating Not a Numbers (NaNs) as zero.

`prod`

Returns the product of all elements in the `input`

tensor.

`quantile`

Computes the q-th quantiles of each row of the `input`

tensor along the dimension `dim`

.

`nanquantile`

This is a variant of [ torch.quantile()](generated/torch.quantile.html#torch.quantile) that "ignores"

`NaN`

values, computing the quantiles `q`

as if `NaN`

values in `input`

did not exist.`std`

Calculates the standard deviation over the dimensions specified by `dim`

.

`std_mean`

Calculates the standard deviation and mean over the dimensions specified by `dim`

.

`sum`

Returns the sum of all elements in the `input`

tensor.

`unique`

Returns the unique elements of the input tensor.

`unique_consecutive`

Eliminates all but the first element from every consecutive group of equivalent elements.

`var`

Calculates the variance over the dimensions specified by `dim`

.

`var_mean`

Calculates the variance and mean over the dimensions specified by `dim`

.

`count_nonzero`

Counts the number of non-zero values in the tensor `input`

along the given `dim`

.

`hash_tensor`

Returns a hash of all elements in the `input`

tensor.

### Comparison Ops[#](#comparison-ops)

`allclose` |

This function checks if `input`

and `other`

satisfy the condition:

`argsort`

Returns the indices that sort a tensor along a given dimension in ascending order by value.

`eq`

Computes element-wise equality

`equal`

`True`

if two tensors have the same size and elements, `False`

otherwise.

`ge`

Computes element-wise.

`greater_equal`

Alias for [ torch.ge()](generated/torch.ge.html#torch.ge).

`gt`

Computes element-wise.

`greater`

Alias for [ torch.gt()](generated/torch.gt.html#torch.gt).

`isclose`

Returns a new tensor with boolean elements representing if each element of `input`

is "close" to the corresponding element of `other`

.

`isfinite`

Returns a new tensor with boolean elements representing if each element is finite or not.

`isin`

Tests if each element of `elements`

is in `test_elements`

.

`isinf`

Tests if each element of `input`

is infinite (positive or negative infinity) or not.

`isposinf`

Tests if each element of `input`

is positive infinity or not.

`isneginf`

Tests if each element of `input`

is negative infinity or not.

`isnan`

Returns a new tensor with boolean elements representing if each element of `input`

is NaN or not.

`isreal`

Returns a new tensor with boolean elements representing if each element of `input`

is real-valued or not.

`kthvalue`

Returns a namedtuple `(values, indices)`

where `values`

is the `k`

th smallest element of each row of the `input`

tensor in the given dimension `dim`

.

`le`

Computes element-wise.

`less_equal`

Alias for [ torch.le()](generated/torch.le.html#torch.le).

`lt`

Computes element-wise.

`less`

Alias for [ torch.lt()](generated/torch.lt.html#torch.lt).

`maximum`

Computes the element-wise maximum of `input`

and `other`

.

`minimum`

Computes the element-wise minimum of `input`

and `other`

.

`fmax`

Computes the element-wise maximum of `input`

and `other`

.

`fmin`

Computes the element-wise minimum of `input`

and `other`

.

`ne`

Computes element-wise.

`not_equal`

Alias for [ torch.ne()](generated/torch.ne.html#torch.ne).

`sort`

Sorts the elements of the `input`

tensor along a given dimension in ascending order by value.

`topk`

Returns the `k`

largest elements of the given `input`

tensor along a given dimension.

`msort`

Sorts the elements of the `input`

tensor along its first dimension in ascending order by value.

### Spectral Ops[#](#spectral-ops)

`stft` |

Short-time Fourier transform (STFT).

`istft`

Inverse short time Fourier Transform.

`bartlett_window`

Bartlett window function.

`blackman_window`

Blackman window function.

`hamming_window`

Hamming window function.

`hann_window`

Hann window function.

`kaiser_window`

Computes the Kaiser window with window length `window_length`

and shape parameter `beta`

.

### Other Operations[#](#other-operations)

`atleast_1d` |

Returns a 1-dimensional view of each input tensor with zero dimensions.

`atleast_2d`

Returns a 2-dimensional view of each input tensor with zero dimensions.

`atleast_3d`

Returns a 3-dimensional view of each input tensor with zero dimensions.

`bincount`

Count the frequency of each value in an array of non-negative ints.

`block_diag`

Create a block diagonal matrix from provided tensors.

`broadcast_tensors`

Broadcasts the given tensors according to [Broadcasting semantics](notes/broadcasting.html#broadcasting-semantics).

`broadcast_to`

Broadcasts `input`

to the shape `shape`

.

`broadcast_shapes`

Similar to [ broadcast_tensors()](generated/torch.broadcast_tensors.html#torch.broadcast_tensors) but for shapes.

`bucketize`

Returns the indices of the buckets to which each value in the `input`

belongs, where the boundaries of the buckets are set by `boundaries`

.

`cartesian_prod`

Do cartesian product of the given sequence of tensors.

`cdist`

Computes batched the p-norm distance between each pair of the two collections of row vectors.

`clone`

Returns a copy of `input`

.

`combinations`

Compute combinations of length of the given tensor.

`corrcoef`

Estimates the Pearson product-moment correlation coefficient matrix of the variables given by the `input`

matrix, where rows are the variables and columns are the observations.

`cov`

Estimates the covariance matrix of the variables given by the `input`

matrix, where rows are the variables and columns are the observations.

`cross`

Returns the cross product of vectors in dimension `dim`

of `input`

and `other`

.

`cummax`

Returns a namedtuple `(values, indices)`

where `values`

is the cumulative maximum of elements of `input`

in the dimension `dim`

.

`cummin`

Returns a namedtuple `(values, indices)`

where `values`

is the cumulative minimum of elements of `input`

in the dimension `dim`

.

`cumprod`

Returns the cumulative product of elements of `input`

in the dimension `dim`

.

`cumsum`

Returns the cumulative sum of elements of `input`

in the dimension `dim`

.

`diag`

If

`input`

is a vector (1-D tensor), then returns a 2-D square tensor

`diag_embed`

Creates a tensor whose diagonals of certain 2D planes (specified by `dim1`

and `dim2`

) are filled by `input`

.

`diagflat`

If

`input`

is a vector (1-D tensor), then returns a 2-D square tensor

`diagonal`

Returns a partial view of `input`

with the its diagonal elements with respect to `dim1`

and `dim2`

appended as a dimension at the end of the shape.

`diff`

Computes the n-th forward difference along the given dimension.

`einsum`

Sums the product of the elements of the input `operands`

along dimensions specified using a notation based on the Einstein summation convention.

`flatten`

Flattens `input`

by reshaping it into a one-dimensional tensor.

`flip`

Reverse the order of an n-D tensor along given axis in dims.

`fliplr`

Flip tensor in the left/right direction, returning a new tensor.

`flipud`

Flip tensor in the up/down direction, returning a new tensor.

`kron`

Computes the Kronecker product, denoted by , of `input`

and `other`

.

`rot90`

Rotate an n-D tensor by 90 degrees in the plane specified by dims axis.

`gcd`

Computes the element-wise greatest common divisor (GCD) of `input`

and `other`

.

`histc`

Computes the histogram of a tensor.

`histogram`

Computes a histogram of the values in a tensor.

`histogramdd`

Computes a multi-dimensional histogram of the values in a tensor.

`meshgrid`

Creates grids of coordinates specified by the 1D inputs in attr:tensors.

`lcm`

Computes the element-wise least common multiple (LCM) of `input`

and `other`

.

`logcumsumexp`

Returns the logarithm of the cumulative summation of the exponentiation of elements of `input`

in the dimension `dim`

.

`ravel`

Return a contiguous flattened tensor.

`renorm`

Returns a tensor where each sub-tensor of `input`

along dimension `dim`

is normalized such that the p-norm of the sub-tensor is lower than the value `maxnorm`


`repeat_interleave`

Repeat elements of a tensor.

`roll`

Roll the tensor `input`

along the given dimension(s).

`searchsorted`

Find the indices from the *innermost* dimension of `sorted_sequence`

such that, if the corresponding values in `values`

were inserted before the indices, when sorted, the order of the corresponding *innermost* dimension within `sorted_sequence`

would be preserved.

`tensordot`

Returns a contraction of a and b over multiple dimensions.

`trace`

Returns the sum of the elements of the diagonal of the input 2-D matrix.

`tril`

Returns the lower triangular part of the matrix (2-D tensor) or batch of matrices `input`

, the other elements of the result tensor `out`

are set to 0.

`tril_indices`

Returns the indices of the lower triangular part of a `row`

-by- `col`

matrix in a 2-by-N Tensor, where the first row contains row coordinates of all indices and the second row contains column coordinates.

`triu`

Returns the upper triangular part of a matrix (2-D tensor) or batch of matrices `input`

, the other elements of the result tensor `out`

are set to 0.

`triu_indices`

Returns the indices of the upper triangular part of a `row`

by `col`

matrix in a 2-by-N Tensor, where the first row contains row coordinates of all indices and the second row contains column coordinates.

`unflatten`

Expands a dimension of the input tensor over multiple dimensions.

`vander`

Generates a Vandermonde matrix.

`view_as_real`

Returns a view of `input`

as a real tensor.

`view_as_complex`

Returns a view of `input`

as a complex tensor.

`resolve_conj`

Returns a new tensor with materialized conjugation if `input`

's conjugate bit is set to True, else returns `input`

.

`resolve_neg`

Returns a new tensor with materialized negation if `input`

's negative bit is set to True, else returns `input`

.

### BLAS and LAPACK Operations[#](#blas-and-lapack-operations)

`addbmm` |

Performs a batch matrix-matrix product of matrices stored in `batch1`

and `batch2`

, with a reduced add step (all matrix multiplications get accumulated along the first dimension).

`addmm`

Performs a matrix multiplication of the matrices `mat1`

and `mat2`

.

`addmv`

Performs a matrix-vector product of the matrix `mat`

and the vector `vec`

.

`addr`

Performs the outer-product of vectors `vec1`

and `vec2`

and adds it to the matrix `input`

.

`baddbmm`

Performs a batch matrix-matrix product of matrices in `batch1`

and `batch2`

.

`bmm`

Performs a batch matrix-matrix product of matrices stored in `input`

and `mat2`

.

`chain_matmul`

Returns the matrix product of the 2-D tensors.

`cholesky`

Computes the Cholesky decomposition of a symmetric positive-definite matrix or for batches of symmetric positive-definite matrices.

`cholesky_inverse`

Computes the inverse of a complex Hermitian or real symmetric positive-definite matrix given its Cholesky decomposition.

`cholesky_solve`

Computes the solution of a system of linear equations with complex Hermitian or real symmetric positive-definite lhs given its Cholesky decomposition.

`dot`

Computes the dot product of two 1D tensors.

`geqrf`

This is a low-level function for calling LAPACK's geqrf directly.

`ger`

Alias of [ torch.outer()](generated/torch.outer.html#torch.outer).

`inner`

Computes the dot product for 1D tensors.

`inverse`

Alias for `torch.linalg.inv()`


`det`

Alias for `torch.linalg.det()`


`logdet`

Calculates log determinant of a square matrix or batches of square matrices.

`slogdet`

Alias for `torch.linalg.slogdet()`


`lu`

Computes the LU factorization of a matrix or batches of matrices `A`

.

`lu_solve`

Returns the LU solve of the linear system using the partially pivoted LU factorization of A from [ lu_factor()](generated/torch.linalg.lu_factor.html#torch.linalg.lu_factor).

`lu_unpack`

Unpacks the LU decomposition returned by [ lu_factor()](generated/torch.linalg.lu_factor.html#torch.linalg.lu_factor) into the P, L, U matrices.

`matmul`

Matrix product of two tensors.

`matrix_power`

Alias for `torch.linalg.matrix_power()`


`matrix_exp`

Alias for [ torch.linalg.matrix_exp()](generated/torch.linalg.matrix_exp.html#torch.linalg.matrix_exp).

`mm`

Performs a matrix multiplication of the matrices `input`

and `mat2`

.

`mv`

Performs a matrix-vector product of the matrix `input`

and the vector `vec`

.

`orgqr`

Alias for [ torch.linalg.householder_product()](generated/torch.linalg.householder_product.html#torch.linalg.householder_product).

`ormqr`

Computes the matrix-matrix multiplication of a product of Householder matrices with a general matrix.

`outer`

Outer product of `input`

and `vec2`

.

`pinverse`

Alias for `torch.linalg.pinv()`


`qr`

Computes the QR decomposition of a matrix or a batch of matrices `input`

, and returns a namedtuple (Q, R) of tensors such that with being an orthogonal matrix or batch of orthogonal matrices and being an upper triangular matrix or batch of upper triangular matrices.

`svd`

Computes the singular value decomposition of either a matrix or batch of matrices `input`

.

`svd_lowrank`

Return the singular value decomposition `(U, S, V)`

of a matrix, batches of matrices, or a sparse matrix such that .

`pca_lowrank`

Performs linear Principal Component Analysis (PCA) on a low-rank matrix, batches of such matrices, or sparse matrix.

`lobpcg`

Find the k largest (or smallest) eigenvalues and the corresponding eigenvectors of a symmetric positive definite generalized eigenvalue problem using matrix-free LOBPCG methods.

`trapz`

Alias for [ torch.trapezoid()](generated/torch.trapezoid.html#torch.trapezoid).

`trapezoid`

Computes the [trapezoidal rule](https://en.wikipedia.org/wiki/Trapezoidal_rule) along `dim`

.

`cumulative_trapezoid`

Cumulatively computes the [trapezoidal rule](https://en.wikipedia.org/wiki/Trapezoidal_rule) along `dim`

.

`triangular_solve`

Solves a system of equations with a square upper or lower triangular invertible matrix and multiple right-hand sides .

`vdot`

Computes the dot product of two 1D vectors along a dimension.

### Foreach Operations[#](#foreach-operations)

Warning

This API is in beta and subject to future changes. Forward-mode AD is not supported.

`_foreach_abs` |

Apply [ torch.abs()](generated/torch.abs.html#torch.abs) to each Tensor of the input list.

`_foreach_abs_`

Apply [ torch.abs()](generated/torch.abs.html#torch.abs) to each Tensor of the input list.

`_foreach_acos`

Apply [ torch.acos()](generated/torch.acos.html#torch.acos) to each Tensor of the input list.

`_foreach_acos_`

Apply [ torch.acos()](generated/torch.acos.html#torch.acos) to each Tensor of the input list.

`_foreach_asin`

Apply [ torch.asin()](generated/torch.asin.html#torch.asin) to each Tensor of the input list.

`_foreach_asin_`

Apply [ torch.asin()](generated/torch.asin.html#torch.asin) to each Tensor of the input list.

`_foreach_atan`

Apply [ torch.atan()](generated/torch.atan.html#torch.atan) to each Tensor of the input list.

`_foreach_atan_`

Apply [ torch.atan()](generated/torch.atan.html#torch.atan) to each Tensor of the input list.

`_foreach_ceil`

Apply [ torch.ceil()](generated/torch.ceil.html#torch.ceil) to each Tensor of the input list.

`_foreach_ceil_`

Apply [ torch.ceil()](generated/torch.ceil.html#torch.ceil) to each Tensor of the input list.

`_foreach_cos`

Apply [ torch.cos()](generated/torch.cos.html#torch.cos) to each Tensor of the input list.

`_foreach_cos_`

Apply [ torch.cos()](generated/torch.cos.html#torch.cos) to each Tensor of the input list.

`_foreach_cosh`

Apply [ torch.cosh()](generated/torch.cosh.html#torch.cosh) to each Tensor of the input list.

`_foreach_cosh_`

Apply [ torch.cosh()](generated/torch.cosh.html#torch.cosh) to each Tensor of the input list.

`_foreach_erf`

Apply [ torch.erf()](generated/torch.erf.html#torch.erf) to each Tensor of the input list.

`_foreach_erf_`

Apply [ torch.erf()](generated/torch.erf.html#torch.erf) to each Tensor of the input list.

`_foreach_erfc`

Apply [ torch.erfc()](generated/torch.erfc.html#torch.erfc) to each Tensor of the input list.

`_foreach_erfc_`

Apply [ torch.erfc()](generated/torch.erfc.html#torch.erfc) to each Tensor of the input list.

`_foreach_exp`

Apply [ torch.exp()](generated/torch.exp.html#torch.exp) to each Tensor of the input list.

`_foreach_exp_`

Apply [ torch.exp()](generated/torch.exp.html#torch.exp) to each Tensor of the input list.

`_foreach_expm1`

Apply [ torch.expm1()](generated/torch.expm1.html#torch.expm1) to each Tensor of the input list.

`_foreach_expm1_`

Apply [ torch.expm1()](generated/torch.expm1.html#torch.expm1) to each Tensor of the input list.

`_foreach_floor`

Apply [ torch.floor()](generated/torch.floor.html#torch.floor) to each Tensor of the input list.

`_foreach_floor_`

Apply [ torch.floor()](generated/torch.floor.html#torch.floor) to each Tensor of the input list.

`_foreach_log`

Apply [ torch.log()](generated/torch.log.html#torch.log) to each Tensor of the input list.

`_foreach_log_`

Apply [ torch.log()](generated/torch.log.html#torch.log) to each Tensor of the input list.

`_foreach_log10`

Apply [ torch.log10()](generated/torch.log10.html#torch.log10) to each Tensor of the input list.

`_foreach_log10_`

Apply [ torch.log10()](generated/torch.log10.html#torch.log10) to each Tensor of the input list.

`_foreach_log1p`

Apply [ torch.log1p()](generated/torch.log1p.html#torch.log1p) to each Tensor of the input list.

`_foreach_log1p_`

Apply [ torch.log1p()](generated/torch.log1p.html#torch.log1p) to each Tensor of the input list.

`_foreach_log2`

Apply [ torch.log2()](generated/torch.log2.html#torch.log2) to each Tensor of the input list.

`_foreach_log2_`

Apply [ torch.log2()](generated/torch.log2.html#torch.log2) to each Tensor of the input list.

`_foreach_neg`

Apply [ torch.neg()](generated/torch.neg.html#torch.neg) to each Tensor of the input list.

`_foreach_neg_`

Apply [ torch.neg()](generated/torch.neg.html#torch.neg) to each Tensor of the input list.

`_foreach_tan`

Apply [ torch.tan()](generated/torch.tan.html#torch.tan) to each Tensor of the input list.

`_foreach_tan_`

Apply [ torch.tan()](generated/torch.tan.html#torch.tan) to each Tensor of the input list.

`_foreach_sin`

Apply [ torch.sin()](generated/torch.sin.html#torch.sin) to each Tensor of the input list.

`_foreach_sin_`

Apply [ torch.sin()](generated/torch.sin.html#torch.sin) to each Tensor of the input list.

`_foreach_sinh`

Apply [ torch.sinh()](generated/torch.sinh.html#torch.sinh) to each Tensor of the input list.

`_foreach_sinh_`

Apply [ torch.sinh()](generated/torch.sinh.html#torch.sinh) to each Tensor of the input list.

`_foreach_round`

Apply [ torch.round()](generated/torch.round.html#torch.round) to each Tensor of the input list.

`_foreach_round_`

Apply [ torch.round()](generated/torch.round.html#torch.round) to each Tensor of the input list.

`_foreach_sqrt`

Apply [ torch.sqrt()](generated/torch.sqrt.html#torch.sqrt) to each Tensor of the input list.

`_foreach_sqrt_`

Apply [ torch.sqrt()](generated/torch.sqrt.html#torch.sqrt) to each Tensor of the input list.

`_foreach_lgamma`

Apply [ torch.lgamma()](generated/torch.lgamma.html#torch.lgamma) to each Tensor of the input list.

`_foreach_lgamma_`

Apply [ torch.lgamma()](generated/torch.lgamma.html#torch.lgamma) to each Tensor of the input list.

`_foreach_frac`

Apply [ torch.frac()](generated/torch.frac.html#torch.frac) to each Tensor of the input list.

`_foreach_frac_`

Apply [ torch.frac()](generated/torch.frac.html#torch.frac) to each Tensor of the input list.

`_foreach_reciprocal`

Apply [ torch.reciprocal()](generated/torch.reciprocal.html#torch.reciprocal) to each Tensor of the input list.

`_foreach_reciprocal_`

Apply [ torch.reciprocal()](generated/torch.reciprocal.html#torch.reciprocal) to each Tensor of the input list.

`_foreach_sigmoid`

Apply [ torch.sigmoid()](generated/torch.sigmoid.html#torch.sigmoid) to each Tensor of the input list.

`_foreach_sigmoid_`

Apply [ torch.sigmoid()](generated/torch.sigmoid.html#torch.sigmoid) to each Tensor of the input list.

`_foreach_trunc`

Apply [ torch.trunc()](generated/torch.trunc.html#torch.trunc) to each Tensor of the input list.

`_foreach_trunc_`

Apply [ torch.trunc()](generated/torch.trunc.html#torch.trunc) to each Tensor of the input list.

`_foreach_zero_`

Apply `torch.zero()`

to each Tensor of the input list.

## Utilities[#](#utilities)

`compiled_with_cxx11_abi` |

Returns whether PyTorch was built with _GLIBCXX_USE_CXX11_ABI=1

`result_type`

Returns the [ torch.dtype](tensor_attributes.html#torch.dtype) that would result from performing an arithmetic operation on the provided input tensors.

`can_cast`

Determines if a type conversion is allowed under PyTorch casting rules described in the type promotion [documentation](tensor_attributes.html#type-promotion-doc).

`promote_types`

Returns the [ torch.dtype](tensor_attributes.html#torch.dtype) with the smallest size and scalar kind that is not smaller nor of lower kind than either type1 or type2.

`use_deterministic_algorithms`

Sets whether PyTorch operations must use "deterministic" algorithms.

`are_deterministic_algorithms_enabled`

Returns True if the global deterministic flag is turned on.

`is_deterministic_algorithms_warn_only_enabled`

Returns True if the global deterministic flag is set to warn only.

`set_deterministic_debug_mode`

Sets the debug mode for deterministic operations.

`get_deterministic_debug_mode`

Returns the current value of the debug mode for deterministic operations.

`set_float32_matmul_precision`

Sets the internal precision of float32 matrix multiplications.

`get_float32_matmul_precision`

Returns the current value of float32 matrix multiplication precision.

`set_warn_always`

When this flag is False (default) then some PyTorch warnings may only appear once per process.

`get_device_module`

Returns the module associated with a given device(e.g., torch.device('cuda'), "mtia:0", "xpu", ...).

`is_warn_always_enabled`

Returns True if the global warn_always flag is turned on.

`vmap`

vmap is the vectorizing map; `vmap(func)`

returns a new function that maps `func`

over some dimension of the inputs.

`_assert`

A wrapper around Python's assert which is symbolically traceable.

## Symbolic Numbers[#](#symbolic-numbers)

-
*class*torch.SymInt(*node*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/__init__.py#L445)[#](#torch.SymInt) Like an int (including magic methods), but redirects all operations on the wrapped node. This is used in particular to symbolically record operations in the symbolic shape workflow.


-
*class*torch.SymFloat(*node*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/__init__.py#L642)[#](#torch.SymFloat) Like a float (including magic methods), but redirects all operations on the wrapped node. This is used in particular to symbolically record operations in the symbolic shape workflow.


-
*class*torch.SymBool(*node*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/__init__.py#L764)[#](#torch.SymBool) Like a bool (including magic methods), but redirects all operations on the wrapped node. This is used in particular to symbolically record operations in the symbolic shape workflow.

Unlike regular bools, regular boolean operators will force extra guards instead of symbolically evaluate. Use the bitwise operators instead to handle this.


`sym_float` |

SymInt-aware utility for float casting.

`sym_fresh_size`

`sym_int`

SymInt-aware utility for int casting.

`sym_max`

SymInt-aware utility for max which avoids branching on a < b.

`sym_min`

SymInt-aware utility for min().

`sym_not`

SymInt-aware utility for logical negation.

`sym_ite`

SymInt-aware utility for ternary operator (`t if b else f`

.)

`sym_sum`

N-ary add which is faster to compute for long lists than iterated binary addition.

## Export Path[#](#export-path)

Warning

This feature is a prototype and may have compatibility breaking changes in the future.

export generated/exportdb/index

## Control Flow[#](#control-flow)

Warning

This feature is a prototype and may have compatibility breaking changes in the future.

`cond` |

Conditionally applies true_fn or false_fn.

## Optimizations[#](#optimizations)

`compile` |

Optimizes given model/function using TorchDynamo and specified backend.

---

## Source: https://pytorch.org/docs/stable/nn.html

# torch.nn[#](#module-torch.nn)

Created On: Dec 23, 2016 | Last Updated On: Jul 25, 2025

These are the basic building blocks for graphs:

`Buffer` |

A kind of Tensor that should not be considered a model parameter.

`Parameter`

A kind of Tensor that is to be considered a module parameter.

`UninitializedParameter`

A parameter that is not initialized.

`UninitializedBuffer`

A buffer that is not initialized.

[Containers](#id1)[#](#containers)

`Module` |

Base class for all neural network modules.

`Sequential`

A sequential container.

`ModuleList`

Holds submodules in a list.

`ModuleDict`

Holds submodules in a dictionary.

`ParameterList`

Holds parameters in a list.

`ParameterDict`

Holds parameters in a dictionary.

Global Hooks For Module

`register_module_forward_pre_hook` |

Register a forward pre-hook common to all modules.

`register_module_forward_hook`

Register a global forward hook for all the modules.

`register_module_backward_hook`

Register a backward hook common to all the modules.

`register_module_full_backward_pre_hook`

Register a backward pre-hook common to all the modules.

`register_module_full_backward_hook`

Register a backward hook common to all the modules.

`register_module_buffer_registration_hook`

Register a buffer registration hook common to all modules.

`register_module_module_registration_hook`

Register a module registration hook common to all modules.

`register_module_parameter_registration_hook`

Register a parameter registration hook common to all modules.

[Convolution Layers](#id1)[#](#convolution-layers)

Applies a 1D convolution over an input signal composed of several input planes. |
|
Applies a 2D convolution over an input signal composed of several input planes. |
|
Applies a 3D convolution over an input signal composed of several input planes. |
|
Applies a 1D transposed convolution operator over an input image composed of several input planes. |
|
Applies a 2D transposed convolution operator over an input image composed of several input planes. |
|
Applies a 3D transposed convolution operator over an input image composed of several input planes. |
|
A `in_channels` argument. |
|
A `in_channels` argument. |
|
A `in_channels` argument. |
|
A `in_channels` argument. |
|
A `in_channels` argument. |
|
A `in_channels` argument. |
|
Extracts sliding local blocks from a batched input tensor. |
|
Combines an array of sliding local blocks into a large containing tensor. |

[Pooling layers](#id1)[#](#pooling-layers)

Applies a 1D max pooling over an input signal composed of several input planes. |
|
Applies a 2D max pooling over an input signal composed of several input planes. |
|
Applies a 3D max pooling over an input signal composed of several input planes. |
|
Computes a partial inverse of |
|
Computes a partial inverse of |
|
Computes a partial inverse of |
|
Applies a 1D average pooling over an input signal composed of several input planes. |
|
Applies a 2D average pooling over an input signal composed of several input planes. |
|
Applies a 3D average pooling over an input signal composed of several input planes. |
|
Applies a 2D fractional max pooling over an input signal composed of several input planes. |
|
Applies a 3D fractional max pooling over an input signal composed of several input planes. |
|
Applies a 1D power-average pooling over an input signal composed of several input planes. |
|
Applies a 2D power-average pooling over an input signal composed of several input planes. |
|
Applies a 3D power-average pooling over an input signal composed of several input planes. |
|
Applies a 1D adaptive max pooling over an input signal composed of several input planes. |
|
Applies a 2D adaptive max pooling over an input signal composed of several input planes. |
|
Applies a 3D adaptive max pooling over an input signal composed of several input planes. |
|
Applies a 1D adaptive average pooling over an input signal composed of several input planes. |
|
Applies a 2D adaptive average pooling over an input signal composed of several input planes. |
|
Applies a 3D adaptive average pooling over an input signal composed of several input planes. |

[Padding Layers](#id1)[#](#padding-layers)

Pads the input tensor using the reflection of the input boundary. |
|
Pads the input tensor using the reflection of the input boundary. |
|
Pads the input tensor using the reflection of the input boundary. |
|
Pads the input tensor using replication of the input boundary. |
|
Pads the input tensor using replication of the input boundary. |
|
Pads the input tensor using replication of the input boundary. |
|
Pads the input tensor boundaries with zero. |
|
Pads the input tensor boundaries with zero. |
|
Pads the input tensor boundaries with zero. |
|
Pads the input tensor boundaries with a constant value. |
|
Pads the input tensor boundaries with a constant value. |
|
Pads the input tensor boundaries with a constant value. |
|
Pads the input tensor using circular padding of the input boundary. |
|
Pads the input tensor using circular padding of the input boundary. |
|
Pads the input tensor using circular padding of the input boundary. |

[Non-linear Activations (weighted sum, nonlinearity)](#id1)[#](#non-linear-activations-weighted-sum-nonlinearity)

Applies the Exponential Linear Unit (ELU) function, element-wise. |
|
Applies the Hard Shrinkage (Hardshrink) function element-wise. |
|
Applies the Hardsigmoid function element-wise. |
|
Applies the HardTanh function element-wise. |
|
Applies the Hardswish function, element-wise. |
|
Applies the LeakyReLU function element-wise. |
|
Applies the Logsigmoid function element-wise. |
|
Allows the model to jointly attend to information from different representation subspaces. |
|
Applies the element-wise PReLU function. |
|
Applies the rectified linear unit function element-wise. |
|
Applies the ReLU6 function element-wise. |
|
Applies the randomized leaky rectified linear unit function, element-wise. |
|
Applies the SELU function element-wise. |
|
Applies the CELU function element-wise. |
|
Applies the Gaussian Error Linear Units function. |
|
Applies the Sigmoid function element-wise. |
|
Applies the Sigmoid Linear Unit (SiLU) function, element-wise. |
|
Applies the Mish function, element-wise. |
|
Applies the Softplus function element-wise. |
|
Applies the soft shrinkage function element-wise. |
|
Applies the element-wise Softsign function. |
|
Applies the Hyperbolic Tangent (Tanh) function element-wise. |
|
Applies the element-wise Tanhshrink function. |
|
Thresholds each element of the input Tensor. |
|
Applies the gated linear unit function. |

[Non-linear Activations (other)](#id1)[#](#non-linear-activations-other)

Applies the Softmin function to an n-dimensional input Tensor. |
|
Applies the Softmax function to an n-dimensional input Tensor. |
|
Applies SoftMax over features to each spatial location. |
|
Applies the function to an n-dimensional input Tensor. |
|
Efficient softmax approximation. |

[Normalization Layers](#id1)[#](#normalization-layers)

Applies Batch Normalization over a 2D or 3D input. |
|
Applies Batch Normalization over a 4D input. |
|
Applies Batch Normalization over a 5D input. |
|
A |
|
A |
|
A |
|
Applies Group Normalization over a mini-batch of inputs. |
|
Applies Batch Normalization over a N-Dimensional input. |
|
Applies Instance Normalization. |
|
Applies Instance Normalization. |
|
Applies Instance Normalization. |
|
A `num_features` argument. |
|
A `num_features` argument. |
|
A `num_features` argument. |
|
Applies Layer Normalization over a mini-batch of inputs. |
|
Applies local response normalization over an input signal. |
|
Applies Root Mean Square Layer Normalization over a mini-batch of inputs. |

[Recurrent Layers](#id1)[#](#recurrent-layers)

Base class for RNN modules (RNN, LSTM, GRU). |
|
Apply a multi-layer Elman RNN with or non-linearity to an input sequence. |
|
Apply a multi-layer long short-term memory (LSTM) RNN to an input sequence. |
|
Apply a multi-layer gated recurrent unit (GRU) RNN to an input sequence. |
|
An Elman RNN cell with tanh or ReLU non-linearity. |
|
A long short-term memory (LSTM) cell. |
|
A gated recurrent unit (GRU) cell. |

[Transformer Layers](#id1)[#](#transformer-layers)

A basic transformer layer. |
|
TransformerEncoder is a stack of N encoder layers. |
|
TransformerDecoder is a stack of N decoder layers. |
|
TransformerEncoderLayer is made up of self-attn and feedforward network. |
|
TransformerDecoderLayer is made up of self-attn, multi-head-attn and feedforward network. |

[Linear Layers](#id1)[#](#linear-layers)

A placeholder identity operator that is argument-insensitive. |
|
Applies an affine linear transformation to the incoming data: . |
|
Applies a bilinear transformation to the incoming data: . |
|
A |

[Dropout Layers](#id1)[#](#dropout-layers)

During training, randomly zeroes some of the elements of the input tensor with probability |
|
Randomly zero out entire channels. |
|
Randomly zero out entire channels. |
|
Randomly zero out entire channels. |
|
Applies Alpha Dropout over the input. |
|
Randomly masks out entire channels. |

[Sparse Layers](#id1)[#](#sparse-layers)

A simple lookup table that stores embeddings of a fixed dictionary and size. |
|
Compute sums or means of 'bags' of embeddings, without instantiating the intermediate embeddings. |

[Distance Functions](#id1)[#](#distance-functions)

Returns cosine similarity between and , computed along dim. |
|
Computes the pairwise distance between input vectors, or between columns of input matrices. |

[Loss Functions](#id1)[#](#loss-functions)

Creates a criterion that measures the mean absolute error (MAE) between each element in the input and target . |
|
Creates a criterion that measures the mean squared error (squared L2 norm) between each element in the input and target . |
|
This criterion computes the cross entropy loss between input logits and target. |
|
The Connectionist Temporal Classification loss. |
|
The negative log likelihood loss. |
|
Negative log likelihood loss with Poisson distribution of target. |
|
Gaussian negative log likelihood loss. |
|
The Kullback-Leibler divergence loss. |
|
Creates a criterion that measures the Binary Cross Entropy between the target and the input probabilities: |
|
This loss combines a Sigmoid layer and the BCELoss in one single class. |
|
Creates a criterion that measures the loss given inputs , , two 1D mini-batch or 0D Tensors, and a label 1D mini-batch or 0D Tensor (containing 1 or -1). |
|
Measures the loss given an input tensor and a labels tensor (containing 1 or -1). |
|
Creates a criterion that optimizes a multi-class multi-classification hinge loss (margin-based loss) between input (a 2D mini-batch Tensor) and output (which is a 2D Tensor of target class indices). |
|
Creates a criterion that uses a squared term if the absolute element-wise error falls below delta and a delta-scaled L1 term otherwise. |
|
Creates a criterion that uses a squared term if the absolute element-wise error falls below beta and an L1 term otherwise. |
|
Creates a criterion that optimizes a two-class classification logistic loss between input tensor and target tensor (containing 1 or -1). |
|
Creates a criterion that optimizes a multi-label one-versus-all loss based on max-entropy, between input and target of size . |
|
Creates a criterion that measures the loss given input tensors , and a Tensor label with values 1 or -1. |
|
Creates a criterion that optimizes a multi-class classification hinge loss (margin-based loss) between input (a 2D mini-batch Tensor) and output (which is a 1D tensor of target class indices, ): |
|
Creates a criterion that measures the triplet loss given an input tensors , , and a margin with a value greater than . |
|
Creates a criterion that measures the triplet loss given input tensors , , and (representing anchor, positive, and negative examples, respectively), and a nonnegative, real-valued function ("distance function") used to compute the relationship between the anchor and positive example ("positive distance") and the anchor and negative example ("negative distance"). |

[Vision Layers](#id1)[#](#vision-layers)

Rearrange elements in a tensor according to an upscaling factor. |
|
Reverse the PixelShuffle operation. |
|
Upsamples a given multi-channel 1D (temporal), 2D (spatial) or 3D (volumetric) data. |
|
Applies a 2D nearest neighbor upsampling to an input signal composed of several input channels. |
|
Applies a 2D bilinear upsampling to an input signal composed of several input channels. |

[Shuffle Layers](#id1)[#](#shuffle-layers)

Divides and rearranges the channels in a tensor. |

[DataParallel Layers (multi-GPU, distributed)](#id1)[#](#module-torch.nn.parallel)

Implements data parallelism at the module level. |
|
Implement distributed data parallelism based on |

[Utilities](#id1)[#](#module-torch.nn.utils)

From the `torch.nn.utils`

module:

Utility functions to clip parameter gradients.

`clip_grad_norm_` |

Clip the gradient norm of an iterable of parameters.

`clip_grad_norm`

Clip the gradient norm of an iterable of parameters.

`clip_grad_value_`

Clip the gradients of an iterable of parameters at specified value.

`get_total_norm`

Compute the norm of an iterable of tensors.

`clip_grads_with_norm_`

Scale the gradients of an iterable of parameters given a pre-calculated total norm and desired max norm.

Utility functions to flatten and unflatten Module parameters to and from a single vector.

`parameters_to_vector` |

Flatten an iterable of parameters into a single vector.

`vector_to_parameters`

Copy slices of a vector into an iterable of parameters.

Utility functions to fuse Modules with BatchNorm modules.

`fuse_conv_bn_eval` |

Fuse a convolutional module and a BatchNorm module into a single, new convolutional module.

`fuse_conv_bn_weights`

Fuse convolutional module parameters and BatchNorm module parameters into new convolutional module parameters.

`fuse_linear_bn_eval`

Fuse a linear module and a BatchNorm module into a single, new linear module.

`fuse_linear_bn_weights`

Fuse linear module parameters and BatchNorm module parameters into new linear module parameters.

Utility functions to convert Module parameter memory formats.

`convert_conv2d_weight_memory_format` |

Convert `memory_format`

of `nn.Conv2d.weight`

to `memory_format`

.

`convert_conv3d_weight_memory_format`

Convert `memory_format`

of `nn.Conv3d.weight`

to `memory_format`

The conversion recursively applies to nested `nn.Module`

, including `module`

.

Utility functions to apply and remove weight normalization from Module parameters.

`weight_norm` |

Apply weight normalization to a parameter in the given module.

`remove_weight_norm`

Remove the weight normalization reparameterization from a module.

`spectral_norm`

Apply spectral normalization to a parameter in the given module.

`remove_spectral_norm`

Remove the spectral normalization reparameterization from a module.

Utility functions for initializing Module parameters.

`skip_init` |

Given a module class object and args / kwargs, instantiate the module without initializing parameters / buffers.

Utility classes and functions for pruning Module parameters.

Abstract base class for creation of new pruning techniques. |
|
Container holding a sequence of pruning methods for iterative pruning. |
|
Utility pruning method that does not prune any units but generates the pruning parametrization with a mask of ones. |
|
Prune (currently unpruned) units in a tensor at random. |
|
Prune (currently unpruned) units in a tensor by zeroing out the ones with the lowest L1-norm. |
|
Prune entire (currently unpruned) channels in a tensor at random. |
|
Prune entire (currently unpruned) channels in a tensor based on their L |
|
Apply pruning reparameterization without pruning any units. |
|
Prune tensor by removing random (currently unpruned) units. |
|
Prune tensor by removing units with the lowest L1-norm. |
|
Prune tensor by removing random channels along the specified dimension. |
|
Prune tensor by removing channels with the lowest L |
|
Globally prunes tensors corresponding to all parameters in |
|
Prune tensor corresponding to parameter called |
|
Remove the pruning reparameterization from a module and the pruning method from the forward hook. |
|
Check if a module is pruned by looking for pruning pre-hooks. |

Parametrizations implemented using the new parametrization functionality
in `torch.nn.utils.parameterize.register_parametrization()`

.

Apply an orthogonal or unitary parametrization to a matrix or a batch of matrices. |
|
Apply weight normalization to a parameter in the given module. |
|
Apply spectral normalization to a parameter in the given module. |

Utility functions to parametrize Tensors on existing Modules.
Note that these functions can be used to parametrize a given Parameter
or Buffer given a specific function that maps from an input space to the
parametrized space. They are not parameterizations that would transform
an object into a parameter. See the
[Parametrizations tutorial](https://pytorch.org/tutorials/intermediate/parametrizations.html)
for more information on how to implement your own parametrizations.

Register a parametrization to a tensor in a module. |
|
Remove the parametrizations on a tensor in a module. |
|
Context manager that enables the caching system within parametrizations registered with |
|
Determine if a module has a parametrization. |
|
Transfer parametrizations and the parameters they parametrize from |
|
Return the module type before parametrizations were applied and if not, then it returns the module type. |

A sequential container that holds and manages the original parameters or buffers of a parametrized |

Utility functions to call a given Module in a stateless manner.

Perform a functional call on the module by replacing the module parameters and buffers with the provided ones. |

Utility functions in other modules

Holds the data and list of |
|
Packs a Tensor containing padded sequences of variable length. |
|
Pad a packed batch of variable length sequences. |
|
Pad a list of variable length Tensors with |
|
Packs a list of variable length Tensors. |
|
Unpack PackedSequence into a list of variable length Tensors. |
|
Unpad padded Tensor into a list of variable length Tensors. |
|
Returns the inverse of |
|
Returns whether |
|
Return a canonicalized dict of factory kwargs. |

Flattens a contiguous range of dims into a tensor. |
|
Unflattens a tensor dim expanding it to a desired shape. |

[Quantized Functions](#id1)[#](#quantized-functions)

Quantization refers to techniques for performing computations and storing tensors at lower bitwidths than
floating point precision. PyTorch supports both per tensor and per channel asymmetric linear quantization. To learn more how to use quantized functions in PyTorch, please refer to the [Quantization](quantization.html#quantization-doc) documentation.

[Lazy Modules Initialization](#id1)[#](#lazy-modules-initialization)

A mixin for modules that lazily initialize parameters, also known as "lazy modules". |

---

## Source: https://pytorch.org/docs/stable/nn.functional.html

# torch.nn.functional[#](#torch-nn-functional)

Created On: Jun 11, 2019 | Last Updated On: Dec 08, 2025

## Convolution functions[#](#convolution-functions)

`conv1d` |

Applies a 1D convolution over an input signal composed of several input planes.

`conv2d`

Applies a 2D convolution over an input image composed of several input planes.

`conv3d`

Applies a 3D convolution over an input image composed of several input planes.

`conv_transpose1d`

Applies a 1D transposed convolution operator over an input signal composed of several input planes, sometimes also called "deconvolution".

`conv_transpose2d`

Applies a 2D transposed convolution operator over an input image composed of several input planes, sometimes also called "deconvolution".

`conv_transpose3d`

Applies a 3D transposed convolution operator over an input image composed of several input planes, sometimes also called "deconvolution"

`unfold`

Extract sliding local blocks from a batched input tensor.

`fold`

Combine an array of sliding local blocks into a large containing tensor.

## Pooling functions[#](#pooling-functions)

`avg_pool1d` |

Applies a 1D average pooling over an input signal composed of several input planes.

`avg_pool2d`

Applies 2D average-pooling operation in regions by step size steps.

`avg_pool3d`

Applies 3D average-pooling operation in regions by step size steps.

`max_pool1d`

Applies a 1D max pooling over an input signal composed of several input planes.

`max_pool2d`

Applies a 2D max pooling over an input signal composed of several input planes.

`max_pool3d`

Applies a 3D max pooling over an input signal composed of several input planes.

`max_unpool1d`

Compute a partial inverse of `MaxPool1d`

.

`max_unpool2d`

Compute a partial inverse of `MaxPool2d`

.

`max_unpool3d`

Compute a partial inverse of `MaxPool3d`

.

`lp_pool1d`

Apply a 1D power-average pooling over an input signal composed of several input planes.

`lp_pool2d`

Apply a 2D power-average pooling over an input signal composed of several input planes.

`lp_pool3d`

Apply a 3D power-average pooling over an input signal composed of several input planes.

`adaptive_max_pool1d`

Applies a 1D adaptive max pooling over an input signal composed of several input planes.

`adaptive_max_pool2d`

Applies a 2D adaptive max pooling over an input signal composed of several input planes.

`adaptive_max_pool3d`

Applies a 3D adaptive max pooling over an input signal composed of several input planes.

`adaptive_avg_pool1d`

Applies a 1D adaptive average pooling over an input signal composed of several input planes.

`adaptive_avg_pool2d`

Apply a 2D adaptive average pooling over an input signal composed of several input planes.

`adaptive_avg_pool3d`

Apply a 3D adaptive average pooling over an input signal composed of several input planes.

`fractional_max_pool2d`

Applies 2D fractional max pooling over an input signal composed of several input planes.

`fractional_max_pool3d`

Applies 3D fractional max pooling over an input signal composed of several input planes.

## Attention Mechanisms[#](#attention-mechanisms)

The [ torch.nn.attention.bias](nn.attention.bias.html#module-torch.nn.attention.bias) module contains attention_biases that are designed to be used with
scaled_dot_product_attention.

`scaled_dot_product_attention` |

scaled_dot_product_attention(query, key, value, attn_mask=None, dropout_p=0.0,

## Non-linear activation functions[#](#non-linear-activation-functions)

`threshold` |

Apply a threshold to each element of the input Tensor.

`threshold_`

In-place version of [ threshold()](generated/torch.nn.functional.threshold.html#torch.nn.functional.threshold).

`relu`

Applies the rectified linear unit function element-wise.

`relu_`

In-place version of [ relu()](generated/torch.nn.functional.relu.html#torch.nn.functional.relu).

`hardtanh`

Applies the HardTanh function element-wise.

`hardtanh_`

In-place version of [ hardtanh()](generated/torch.nn.functional.hardtanh.html#torch.nn.functional.hardtanh).

`hardswish`

Apply hardswish function, element-wise.

`relu6`

Applies the element-wise function .

`elu`

Apply the Exponential Linear Unit (ELU) function element-wise.

`elu_`

In-place version of [ elu()](generated/torch.nn.functional.elu.html#torch.nn.functional.elu).

`selu`

Applies element-wise, , with and .

`celu`

Applies element-wise, .

`leaky_relu`

Applies element-wise,

`leaky_relu_`

In-place version of [ leaky_relu()](generated/torch.nn.functional.leaky_relu.html#torch.nn.functional.leaky_relu).

`prelu`

Applies element-wise the function where weight is a learnable parameter.

`rrelu`

Randomized leaky ReLU.

`rrelu_`

In-place version of [ rrelu()](generated/torch.nn.functional.rrelu.html#torch.nn.functional.rrelu).

`glu`

The gated linear unit.

`gelu`

When the approximate argument is 'none', it applies element-wise the function

`logsigmoid`

Applies element-wise

`hardshrink`

Applies the hard shrinkage function element-wise

`tanhshrink`

Applies element-wise,

`softsign`

Applies element-wise, the function

`softplus`

Applies element-wise, the function .

`softmin`

Apply a softmin function.

`softmax`

Apply a softmax function.

`softshrink`

Applies the soft shrinkage function elementwise

`gumbel_softmax`

Sample from the Gumbel-Softmax distribution ([Link 1](https://arxiv.org/abs/1611.00712) [Link 2](https://arxiv.org/abs/1611.01144)) and optionally discretize.

`log_softmax`

Apply a softmax followed by a logarithm.

`tanh`

Applies element-wise,

`sigmoid`

Applies the element-wise function

`hardsigmoid`

Apply the Hardsigmoid function element-wise.

`silu`

Apply the Sigmoid Linear Unit (SiLU) function, element-wise.

`mish`

Apply the Mish function, element-wise.

`batch_norm`

Apply Batch Normalization for each channel across a batch of data.

`group_norm`

Apply Group Normalization for last certain number of dimensions.

`instance_norm`

Apply Instance Normalization independently for each channel in every data sample within a batch.

`layer_norm`

Apply Layer Normalization for last certain number of dimensions.

`local_response_norm`

Apply local response normalization over an input signal.

`rms_norm`

Apply Root Mean Square Layer Normalization.

`normalize`

Perform normalization of inputs over specified dimension.

## Linear functions[#](#linear-functions)

## Dropout functions[#](#dropout-functions)

`dropout` |

During training, randomly zeroes some elements of the input tensor with probability `p`

.

`alpha_dropout`

Apply alpha dropout to the input.

`feature_alpha_dropout`

Randomly masks out entire channels (a channel is a feature map).

`dropout1d`

Randomly zero out entire channels (a channel is a 1D feature map).

`dropout2d`

Randomly zero out entire channels (a channel is a 2D feature map).

`dropout3d`

Randomly zero out entire channels (a channel is a 3D feature map).

## Sparse functions[#](#sparse-functions)

`embedding` |

Generate a simple lookup table that looks up embeddings in a fixed dictionary and size.

`embedding_bag`

Compute sums, means or maxes of bags of embeddings.

`one_hot`

Takes LongTensor with index values of shape `(*)`

and returns a tensor of shape `(*, num_classes)`

that have zeros everywhere except where the index of last dimension matches the corresponding value of the input tensor, in which case it will be 1.

## Distance functions[#](#distance-functions)

`pairwise_distance` |

See [ torch.nn.PairwiseDistance](generated/torch.nn.PairwiseDistance.html#torch.nn.PairwiseDistance) for details

`cosine_similarity`

Returns cosine similarity between `x1`

and `x2`

, computed along dim.

`pdist`

Computes the p-norm distance between every pair of row vectors in the input.

## Loss functions[#](#loss-functions)

`binary_cross_entropy` |

Compute Binary Cross Entropy between the target and input probabilities.

`binary_cross_entropy_with_logits`

Compute Binary Cross Entropy between target and input logits.

`poisson_nll_loss`

Compute the Poisson negative log likelihood loss.

`cosine_embedding_loss`

Compute the cosine embedding loss.

`cross_entropy`

Compute the cross entropy loss between input logits and target.

`ctc_loss`

Compute the Connectionist Temporal Classification loss.

`gaussian_nll_loss`

Compute the Gaussian negative log likelihood loss.

`hinge_embedding_loss`

Compute the hinge embedding loss.

`kl_div`

Compute the KL Divergence loss.

`l1_loss`

Compute the L1 loss, with optional weighting.

`mse_loss`

Compute the element-wise mean squared error, with optional weighting.

`margin_ranking_loss`

Compute the margin ranking loss.

`multilabel_margin_loss`

Compute the multilabel margin loss.

`multilabel_soft_margin_loss`

Compute the multilabel soft margin loss.

`multi_margin_loss`

Compute the multi margin loss, with optional weighting.

`nll_loss`

Compute the negative log likelihood loss.

`huber_loss`

Compute the Huber loss, with optional weighting.

`smooth_l1_loss`

Compute the Smooth L1 loss.

`soft_margin_loss`

Compute the soft margin loss.

`triplet_margin_loss`

Compute the triplet loss between given input tensors and a margin greater than 0.

`triplet_margin_with_distance_loss`

Compute the triplet margin loss for input tensors using a custom distance function.

## Vision functions[#](#vision-functions)

`pixel_shuffle` |

Rearranges elements in a tensor of shape to a tensor of shape , where r is the `upscale_factor`

.

`pixel_unshuffle`

Reverses the [ PixelShuffle](generated/torch.nn.PixelShuffle.html#torch.nn.PixelShuffle) operation by rearranging elements in a tensor of shape to a tensor of shape , where r is the

`downscale_factor`

.`pad`

Pads tensor.

`interpolate`

Down/up samples the input.

`upsample`

Upsample input.

`upsample_nearest`

Upsamples the input, using nearest neighbours' pixel values.

`upsample_bilinear`

Upsamples the input, using bilinear upsampling.

`grid_sample`

Compute grid sample.

`affine_grid`

Generate 2D or 3D flow field (sampling grid), given a batch of affine matrices `theta`

.

## DataParallel functions (multi-GPU, distributed)[#](#dataparallel-functions-multi-gpu-distributed)

### data_parallel[#](#data-parallel)

|
Evaluate module(input) in parallel across the GPUs given in device_ids. |

## Low-Precision functions[#](#low-precision-functions)

`ScalingType` |

alias of `_ScalingType`


`SwizzleType`

alias of `_SwizzleType`


`grouped_mm`

Computes a grouped matrix multiply that shares weight shapes across experts but allows jagged token counts per expert, which is common in Mixture-of-Experts (MoE) layers.

`scaled_mm`

scaled_mm(mat_a, mat_b, scale_a, scale_recipe_a, scale_b, scale_recipe_b, swizzle_a, swizzle_b, bias, output_dtype,

`scaled_grouped_mm`

scaled_grouped_mm(mat_a, mat_b, scale_a, scale_recipe_a, scale_b, scale_recipe_b, swizzle_a, swizzle_b, bias, offs,

---

## Source: https://pytorch.org/docs/stable/tensors.html

# torch.Tensor[#](#torch-tensor)

Created On: Dec 23, 2016 | Last Updated On: Jun 27, 2025

A [ torch.Tensor](#torch.Tensor) is a multi-dimensional matrix containing elements of
a single data type. Please see

[torch.dtype](tensor_attributes.html#dtype-doc)for more details about dtype support.

## Initializing and basic operations[#](#initializing-and-basic-operations)

A tensor can be constructed from a Python [ list](https://docs.python.org/3/library/stdtypes.html#list) or sequence using the

[constructor:](generated/torch.tensor.html#torch.tensor)

`torch.tensor()`

```
>>> torch.tensor([[1., -1.], [1., -1.]])
tensor([[ 1.0000, -1.0000],
[ 1.0000, -1.0000]])
>>> torch.tensor(np.array([[1, 2, 3], [4, 5, 6]]))
tensor([[ 1, 2, 3],
[ 4, 5, 6]])
```

Warning

[ torch.tensor()](generated/torch.tensor.html#torch.tensor) always copies

`data`

. If you have a Tensor
`data`

and just want to change its `requires_grad`

flag, use
[or](generated/torch.Tensor.requires_grad_.html#torch.Tensor.requires_grad_)

`requires_grad_()`

[to avoid a copy. If you have a numpy array and want to avoid a copy, use](generated/torch.Tensor.detach.html#torch.Tensor.detach)

`detach()`

[.](generated/torch.as_tensor.html#torch.as_tensor)

`torch.as_tensor()`

A tensor of specific data type can be constructed by passing a
[ torch.dtype](tensor_attributes.html#torch.dtype) and/or a

[to a constructor or tensor creation op:](tensor_attributes.html#torch.device)

`torch.device`

```
>>> torch.zeros([2, 4], dtype=torch.int32)
tensor([[ 0, 0, 0, 0],
[ 0, 0, 0, 0]], dtype=torch.int32)
>>> cuda0 = torch.device('cuda:0')
>>> torch.ones([2, 4], dtype=torch.float64, device=cuda0)
tensor([[ 1.0000, 1.0000, 1.0000, 1.0000],
[ 1.0000, 1.0000, 1.0000, 1.0000]], dtype=torch.float64, device='cuda:0')
```

For more information about building Tensors, see [Creation Ops](torch.html#tensor-creation-ops)

The contents of a tensor can be accessed and modified using Python’s indexing and slicing notation:

```
>>> x = torch.tensor([[1, 2, 3], [4, 5, 6]])
>>> print(x[1][2])
tensor(6)
>>> x[0][1] = 8
>>> print(x)
tensor([[ 1, 8, 3],
[ 4, 5, 6]])
```

Use [ torch.Tensor.item()](generated/torch.Tensor.item.html#torch.Tensor.item) to get a Python number from a tensor containing a
single value:

```
>>> x = torch.tensor([[1]])
>>> x
tensor([[ 1]])
>>> x.item()
1
>>> x = torch.tensor(2.5)
>>> x
tensor(2.5000)
>>> x.item()
2.5
```

For more information about indexing, see [Indexing, Slicing, Joining, Mutating Ops](torch.html#indexing-slicing-joining)

A tensor can be created with `requires_grad=True`

so that
[ torch.autograd](autograd.html#module-torch.autograd) records operations on them for automatic differentiation.

```
>>> x = torch.tensor([[1., -1.], [1., 1.]], requires_grad=True)
>>> out = x.pow(2).sum()
>>> out.backward()
>>> x.grad
tensor([[ 2.0000, -2.0000],
[ 2.0000, 2.0000]])
```

Each tensor has an associated `torch.Storage`

, which holds its data.
The tensor class also provides multi-dimensional, [strided](https://en.wikipedia.org/wiki/Stride_of_an_array)
view of a storage and defines numeric operations on it.

Note

For more information on tensor views, see [Tensor Views](tensor_view.html#tensor-view-doc).

Note

For more information on the [ torch.dtype](tensor_attributes.html#torch.dtype),

[, and](tensor_attributes.html#torch.device)

`torch.device`

[attributes of a](tensor_attributes.html#torch.layout)

`torch.layout`

[, see](#torch.Tensor)

`torch.Tensor`

[Tensor Attributes](tensor_attributes.html#tensor-attributes-doc).

Note

Methods which mutate a tensor are marked with an underscore suffix.
For example, `torch.FloatTensor.abs_()`

computes the absolute value
in-place and returns the modified tensor, while `torch.FloatTensor.abs()`

computes the result in a new tensor.

Note

To change an existing tensor’s [ torch.device](tensor_attributes.html#torch.device) and/or

[, consider using](tensor_attributes.html#torch.dtype)

`torch.dtype`

[method on the tensor.](generated/torch.Tensor.to.html#torch.Tensor.to)

`to()`

Warning

Current implementation of [ torch.Tensor](#torch.Tensor) introduces memory overhead,
thus it might lead to unexpectedly high memory usage in the applications with many tiny tensors.
If this is your case, consider using one large structure.

## Tensor class reference[#](#tensor-class-reference)

-
*class*torch.Tensor[#](#torch.Tensor) There are a few main ways to create a tensor, depending on your use case.

To create a tensor with pre-existing data, use

.`torch.tensor()`

To create a tensor with specific size, use

`torch.*`

tensor creation ops (see[Creation Ops](torch.html#tensor-creation-ops)).To create a tensor with the same size (and similar types) as another tensor, use

`torch.*_like`

tensor creation ops (see[Creation Ops](torch.html#tensor-creation-ops)).To create a tensor with similar type but different size as another tensor, use

`tensor.new_*`

creation ops.There is a legacy constructor

`torch.Tensor`

whose use is discouraged. Useinstead.`torch.tensor()`



-
Tensor.__init__(
*self*,*data*)[#](#torch.Tensor.__init__) This constructor is deprecated, we recommend using

instead. What this constructor does depends on the type of`torch.tensor()`

`data`

.If

`data`

is a Tensor, returns an alias to the original Tensor. Unlike, this tracks autograd and will propagate gradients to the original Tensor.`torch.tensor()`

`device`

kwarg is not supported for this`data`

type.If

`data`

is a sequence or nested sequence, create a tensor of the default dtype (typically`torch.float32`

) whose data is the values in the sequences, performing coercions if necessary. Notably, this differs fromin that this constructor will always construct a float tensor, even if the inputs are all integers.`torch.tensor()`

If

`data`

is a, returns an empty tensor of that size.`torch.Size`


This constructor does not support explicitly specifying

`dtype`

or`device`

of the returned tensor. We recommend usingwhich provides this functionality.`torch.tensor()`

- Args:
data (array_like): The tensor to construct from.

- Keyword args:
- device (
, optional): the desired device of returned tensor.`torch.device`

Default: if None, same

as this tensor.`torch.device`


- device (


-
Tensor.T
[#](#torch.Tensor.T) Returns a view of this tensor with its dimensions reversed.

If

`n`

is the number of dimensions in`x`

,`x.T`

is equivalent to`x.permute(n-1, n-2, ..., 0)`

.Warning

The use of

on tensors of dimension other than 2 to reverse their shape is deprecated and it will throw an error in a future release. Consider`Tensor.T()`

to transpose batches of matrices or x.permute(*torch.arange(x.ndim - 1, -1, -1)) to reverse the dimensions of a tensor.`mT`


-
Tensor.H
[#](#torch.Tensor.H) Returns a view of a matrix (2-D tensor) conjugated and transposed.

`x.H`

is equivalent to`x.transpose(0, 1).conj()`

for complex matrices and`x.transpose(0, 1)`

for real matrices.See also

: An attribute that also works on batches of matrices.`mH`


-
Tensor.mT
[#](#torch.Tensor.mT) Returns a view of this tensor with the last two dimensions transposed.

`x.mT`

is equivalent to`x.transpose(-2, -1)`

.

Returns a new Tensor with |
|
Returns a Tensor of size |
|
Returns a Tensor of size |
|
Returns a Tensor of size |
|
Returns a Tensor of size |
|
Is |
|
Is |
|
Is |
|
Is the |
|
This attribute is |
|
Alias for |
|
Returns a new tensor containing real values of the |
|
Returns a new tensor containing imaginary values of the |
|
Returns the number of bytes consumed by the "view" of elements of the Tensor if the Tensor does not use sparse storage layout. |
|
Alias for |
|
See |
|
In-place version of |
|
Alias for |
|
In-place version of `abs_()` |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
Add a scalar or tensor to |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
Alias for |
|
See |
|
See |
|
See |
|
See |
|
See |
|
Applies the function |
|
See |
|
See |
|
See |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
atan2_(other) -> Tensor |
|
See |
|
See |
|
Computes the gradient of current tensor wrt graph leaves. |
|
See |
|
In-place version of |
|
Returns a result tensor where each is independently sampled from . |
|
Fills each location of |
|
|
|
See |
|
In-place version of |
|
In-place version of |
|
In-place version of |
|
In-place version of |
|
In-place version of |
|
In-place version of |
|
See |
|
|
|
|
|
See |
|
Fills the tensor with numbers drawn from the Cauchy distribution: |
|
See |
|
In-place version of |
|
|
|
See |
|
See |
|
See |
|
In-place version of |
|
Alias for |
|
Alias for |
|
See |
|
Returns a contiguous in memory tensor containing the same data as |
|
Copies the elements from |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
See |
|
See |
|
In-place version of |
|
acosh() -> Tensor |
|
acosh_() -> Tensor |
|
Returns a copy of this object in CPU memory. |
|
See |
|
Returns a copy of this object in CUDA memory. |
|
See |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
|
|
|
|
|
|
Returns the address of the first element of |
|
See |
|
Given a quantized Tensor, dequantize it and return the dequantized float Tensor. |
|
See |
|
Return the number of dense dimensions in a |
|
Returns a new Tensor, detached from the current graph. |
|
Detaches the Tensor from the graph that created it, making it a leaf. |
|
See |
|
See |
|
See |
|
Fill the main diagonal of a tensor that has at least 2-dimensions. |
|
See |
|
See |
|
See |
|
See |
|
In-place version of |
|
Returns the number of dimensions of |
|
Returns the uniquely determined tuple of int describing the dim order or physical layout of |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
|
|
See |
|
Returns the size in bytes of an individual element. |
|
See |
|
In-place version of |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
Returns a new view of the |
|
Expand this tensor to the same size as |
|
Fills |
|
See |
|
In-place version of |
|
Fills |
|
See |
|
See |
|
See |
|
See |
|
|
|
In-place version of |
|
See |
|
In-place version of |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
In-place version of |
|
Fills |
|
See |
|
See |
|
For CUDA tensors, this function returns the device ordinal of the GPU on which the tensor resides. |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
|
|
See |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
Accumulate the elements of |
|
Out-of-place version of |
|
Copies the elements of `self` tensor by selecting the indices in the order given in `index` . |
|
Out-of-place version of |
|
Fills the elements of the |
|
Out-of-place version of |
|
Puts values from the tensor |
|
Out-place version of |
|
Accumulate the elements of |
|
Return the indices tensor of a |
|
See |
|
|
|
Given a quantized Tensor, |
|
See |
|
See |
|
See |
|
See |
|
See |
|
See |
|
See |
|
Returns True if |
|
Returns True if the data type of |
|
Returns True if the conjugate bit of |
|
Returns True if the data type of |
|
See |
|
All Tensors that have |
|
Returns true if this tensor resides in pinned memory. |
|
Returns True if both tensors are pointing to the exact same memory (same storage, offset, size and stride). |
|
Checks if tensor is in shared memory. |
|
Returns True if the data type of |
|
Is |
|
See |
|
See |
|
Returns the value of this tensor as a standard Python number. |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
Fills |
|
In-place version of |
|
In-place version of |
|
In-place version of |
|
In-place version of |
|
See |
|
In-place version of |
|
|
|
See |
|
In-place version of |
|
lt(other) -> Tensor |
|
In-place version of |
|
See |
|
See |
|
Makes a |
|
Applies `self` tensor. |
|
Copies elements from |
|
Out-of-place version of |
|
Fills elements of |
|
Out-of-place version of |
|
See |
|
Note
`torch.linalg.matrix_power()` |
|
See |
|
See |
|
See |
|
Defines how to transform |
|
See |
|
See |
|
See |
|
See |
|
See |
|
See |
|
See |
|
See |
|
See |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
See |
|
In-place version of |
|
See |
|
See |
|
See |
|
Alias for |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
Alias for |
|
In-place version of |
|
See |
|
See |
|
Fills
`std` |
|
See |
|
Returns the tensor as a NumPy |
|
See |
|
See |
|
See |
|
Returns a view of the tensor with its dimensions permuted. |
|
Copies the tensor to pinned memory, if it's not already pinned. |
|
See |
|
In-place version of |
|
See |
|
See |
|
In-place version of |
|
See |
|
Copies the elements from |
|
See |
|
Returns the quantization scheme of a given QTensor. |
|
See |
|
Given a Tensor quantized by linear(affine) quantization, returns the scale of the underlying quantizer(). |
|
Given a Tensor quantized by linear(affine) quantization, returns the zero_point of the underlying quantizer(). |
|
Given a Tensor quantized by linear (affine) per-channel quantization, returns a Tensor of scales of the underlying quantizer. |
|
Given a Tensor quantized by linear (affine) per-channel quantization, returns a tensor of zero_points of the underlying quantizer. |
|
Given a Tensor quantized by linear (affine) per-channel quantization, returns the index of dimension on which per-channel quantization is applied. |
|
See |
|
Fills |
|
see |
|
In-place version of |
|
Marks the tensor as having been used by this stream. |
|
Registers a backward hook. |
|
Registers a backward hook that runs after grad accumulation. |
|
In-place version of |
|
See |
|
In-place version of |
|
Repeats this tensor along the specified dimensions. |
|
Is |
|
Change if autograd should record operations on this tensor: sets this tensor's |
|
Returns a tensor with the same data and number of elements as |
|
Returns this tensor as the same shape as |
|
Resizes |
|
Resizes the |
|
Enables this Tensor to have their |
|
Is |
|
See |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
Out-of-place version of |
|
Writes all values from the tensor |
|
Adds all values from the tensor |
|
Out-of-place version of |
|
Reduces all values from the |
|
Out-of-place version of |
|
See |
|
Sets the underlying storage, size, and strides. |
|
Moves the underlying storage to shared memory. |
|
|
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
Returns the size of the |
|
Returns the size of the |
|
See |
|
Alias for |
|
See |
|
See |
|
Returns a new |
|
Return the number of sparse dimensions in a |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
See |
|
Returns the underlying |
|
Returns the underlying |
|
Returns |
|
Returns the type of the underlying storage. |
|
Returns the stride of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
Sum |
|
See |
|
See |
|
See |
|
See |
|
In-place version of |
|
See |
|
Performs Tensor dtype and/or device conversion. |
|
Returns a copy of the tensor in |
|
See |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
Returns the tensor as a (nested) list. |
|
See |
|
Creates a strided copy of |
|
Returns a sparse copy of the tensor. |
|
Convert a tensor to compressed row storage format (CSR). |
|
Convert a tensor to compressed column storage (CSC) format. |
|
Convert a tensor to a block sparse row (BSR) storage format of given blocksize. |
|
Convert a tensor to a block sparse column (BSC) storage format of given blocksize. |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
See |
|
In-place version of |
|
In-place version of |
|
See |
|
In-place version of |
|
Returns the type if dtype is not provided, else casts this object to the specified type. |
|
Returns this tensor cast to the type of the given tensor. |
|
See |
|
See |
|
Returns a view of the original tensor which contains all slices of size |
|
Fills |
|
Returns the unique elements of the input tensor. |
|
Eliminates all but the first element from every consecutive group of equivalent elements. |
|
In-place version of |
|
Return the values tensor of a |
|
See |
|
See |
|
Returns a new tensor with the same data as the |
|
View this tensor as the same size as |
|
See |
|
|
|
See |
|
In-place version of |
|
Returns a copy of this object in XPU memory. |
|
Fills |

---

## Source: https://pytorch.org/docs/stable/tensor_attributes.html

# Tensor Attributes[#](#tensor-attributes)

Created On: Apr 21, 2018 | Last Updated On: Dec 15, 2025

Each `torch.Tensor`

has a [ torch.dtype](#torch.dtype),

[, and](#torch.device)

`torch.device`

[.](#torch.layout)

`torch.layout`

## torch.dtype[#](#torch-dtype)

-
*class*torch.dtype[#](#torch.dtype)

A [ torch.dtype](#torch.dtype) is an object that represents the data type of a

[. PyTorch has several different data types:](tensors.html#torch.Tensor)

`torch.Tensor`

**Floating point dtypes**

dtype |
description |
|---|---|
|
32-bit floating point, as defined in |
|
64-bit floating point, as defined in |
|
16-bit floating point, as defined in |
|
16-bit floating point, sometimes referred to as Brain floating point, S-E-M 1-8-7 |
|
32-bit complex with two float16 components |
|
64-bit complex with two float32 components |
|
128-bit complex with two float64 components |
8-bit floating point, S-E-M 1-4-3, from |
|
|
8-bit floating point, S-E-M 1-5-2, from |
8-bit floating point, S-E-M 1-4-3, from |
|
8-bit floating point, S-E-M 1-5-2, from |
|
8-bit floating point, S-E-M 0-8-0, from |
|
packed 4-bit floating point, S-E-M 1-2-1, from |

**Integer dtypes**

dtype |
description |
|---|---|
|
8-bit integer (unsigned) |
|
8-bit integer (signed) |
16-bit integer (unsigned) |
|
|
16-bit integer (signed) |
32-bit integer (unsigned) |
|
|
32-bit integer (signed) |
64-bit integer (unsigned) |
|
|
64-bit integer (signed) |
|
Boolean |

[1](#id1),

[2](#id3),

[3](#id4),

[4](#id6),

[5](#id8),

[6](#id10),

[7](#id13),

[8](#id15),

[9](#id17))

a shell dtype is a specialized dtype with limited op and backend support.
Specifically, ops that support tensor creation (`torch.empty`

, `torch.fill`

, `torch.zeros`

)
and operations which do not peek inside the data elements (`torch.cat`

, `torch.view`

, `torch.reshape`

)
are supported. Ops that peek inside the data elements such as casting,
matrix multiplication, nan/inf checks are supported only on a case by
case basis, depending on maturity and presence of hardware accelerated kernels
and established use cases.

**Note**: legacy constructors such as `torch.*.FloatTensor`

, `torch.*.DoubleTensor`

, `torch.*.HalfTensor`

,
`torch.*.BFloat16Tensor`

, `torch.*.ByteTensor`

, `torch.*.CharTensor`

, `torch.*.ShortTensor`

, `torch.*.IntTensor`

,
`torch.*.LongTensor`

, `torch.*.BoolTensor`

only remain for backwards compatibility and should no longer be used.

To find out if a [ torch.dtype](#torch.dtype) is a floating point data type, the property

[can be used, which returns](generated/torch.is_floating_point.html#torch.is_floating_point)

`is_floating_point`

`True`

if the data type is a floating point data type.To find out if a [ torch.dtype](#torch.dtype) is a complex data type, the property

[can be used, which returns](generated/torch.is_complex.html#torch.is_complex)

`is_complex`

`True`

if the data type is a complex data type.When the dtypes of inputs to an arithmetic operation (add, sub, div, mul) differ, we promote by finding the minimum dtype that satisfies the following rules:

If the type of a scalar operand is of a higher category than tensor operands (where complex > floating > integral > boolean), we promote to a type with sufficient size to hold all scalar operands of that category.

If a zero-dimension tensor operand has a higher category than dimensioned operands, we promote to a type with sufficient size and category to hold all zero-dim tensor operands of that category.

If there are no higher-category zero-dim operands, we promote to a type with sufficient size and category to hold all dimensioned operands.


A floating point scalar operand has dtype torch.get_default_dtype() and an integral non-boolean scalar operand has dtype torch.int64. Unlike numpy, we do not inspect values when determining the minimum dtypes of an operand. Complex types are not yet supported. Promotion for shell dtypes is not defined.

Promotion Examples:

```
>>> float_tensor = torch.ones(1, dtype=torch.float)
>>> double_tensor = torch.ones(1, dtype=torch.double)
>>> complex_float_tensor = torch.ones(1, dtype=torch.complex64)
>>> complex_double_tensor = torch.ones(1, dtype=torch.complex128)
>>> int_tensor = torch.ones(1, dtype=torch.int)
>>> long_tensor = torch.ones(1, dtype=torch.long)
>>> uint_tensor = torch.ones(1, dtype=torch.uint8)
>>> bool_tensor = torch.ones(1, dtype=torch.bool)
# zero-dim tensors
>>> long_zerodim = torch.tensor(1, dtype=torch.long)
>>> int_zerodim = torch.tensor(1, dtype=torch.int)
>>> torch.add(5, 5).dtype
torch.int64
# 5 is an int64, but does not have higher category than int_tensor so is not considered.
>>> (int_tensor + 5).dtype
torch.int32
>>> (int_tensor + long_zerodim).dtype
torch.int32
>>> (long_tensor + int_tensor).dtype
torch.int64
>>> (bool_tensor + long_tensor).dtype
torch.int64
>>> (bool_tensor + uint_tensor).dtype
torch.uint8
>>> (float_tensor + double_tensor).dtype
torch.float64
>>> (complex_float_tensor + complex_double_tensor).dtype
torch.complex128
>>> (bool_tensor + int_tensor).dtype
torch.int32
# Since long is a different kind than float, result dtype only needs to be large enough
# to hold the float.
>>> torch.add(long_tensor, float_tensor).dtype
torch.float32
```

- When the output tensor of an arithmetic operation is specified, we allow casting to its dtype except that:
An integral output tensor cannot accept a floating point tensor.

A boolean output tensor cannot accept a non-boolean tensor.

A non-complex output tensor cannot accept a complex tensor



Casting Examples:

```
# allowed:
>>> float_tensor *= float_tensor
>>> float_tensor *= int_tensor
>>> float_tensor *= uint_tensor
>>> float_tensor *= bool_tensor
>>> float_tensor *= double_tensor
>>> int_tensor *= long_tensor
>>> int_tensor *= uint_tensor
>>> uint_tensor *= int_tensor
# disallowed (RuntimeError: result type can't be cast to the desired output type):
>>> int_tensor *= float_tensor
>>> bool_tensor *= int_tensor
>>> bool_tensor *= uint_tensor
>>> float_tensor *= complex_float_tensor
```

## torch.device[#](#torch-device)

-
*class*torch.device[#](#torch.device)

A [ torch.device](#torch.device) is an object representing the device on which a

[is or will be allocated.](tensors.html#torch.Tensor)

`torch.Tensor`

The [ torch.device](#torch.device) contains a device type (most commonly “cpu” or
“cuda”, but also potentially

[“mps”](mps.html),

[“xpu”](xpu.html),

[“xla”](https://github.com/pytorch/xla/)or

[“meta”](meta.html)) and optional device ordinal for the device type. If the device ordinal is not present, this object will always represent the current device for the device type, even after

[is called; e.g., a](generated/torch.cuda.set_device.html#torch.cuda.set_device)

`torch.cuda.set_device()`

[constructed with device](tensors.html#torch.Tensor)

`torch.Tensor`

`'cuda'`

is equivalent to `'cuda:X'`

where X is
the result of [.](generated/torch.cuda.current_device.html#torch.cuda.current_device)

`torch.cuda.current_device()`

A [ torch.Tensor](tensors.html#torch.Tensor)’s device can be accessed via the

[property.](generated/torch.Tensor.device.html#torch.Tensor.device)

`Tensor.device`

A [ torch.device](#torch.device) can be constructed using:


A device string, which is a string representation of the device type and optionally the device ordinal.

A device type and a device ordinal.

A device ordinal, where the current

[accelerator]type will be used.

Via a device string:

```
>>> torch.device('cuda:0')
device(type='cuda', index=0)
>>> torch.device('cpu')
device(type='cpu')
>>> torch.device('mps')
device(type='mps')
>>> torch.device('cuda') # implicit index is the "current device index"
device(type='cuda')
```

Via a device type and a device ordinal:

```
>>> torch.device('cuda', 0)
device(type='cuda', index=0)
>>> torch.device('mps', 0)
device(type='mps', index=0)
>>> torch.device('cpu', 0)
device(type='cpu', index=0)
```

Via a device ordinal:

Note

This method will raise a RuntimeError if no accelerator is currently detected.

```
>>> torch.device(0) # the current accelerator is cuda
device(type='cuda', index=0)
>>> torch.device(1) # the current accelerator is xpu
device(type='xpu', index=1)
>>> torch.device(0) # no current accelerator detected
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
RuntimeError: Cannot access accelerator device when none is available.
```

The device object can also be used as a context manager to change the default device tensors are allocated on:

```
>>> with torch.device('cuda:1'):
... r = torch.randn(2, 3)
>>> r.device
device(type='cuda', index=1)
```

This context manager has no effect if a factory function is passed an explicit,
non-None device argument. To globally change the default device, see also
[ torch.set_default_device()](generated/torch.set_default_device.html#torch.set_default_device).

Warning

This function imposes a slight performance cost on every Python
call to the torch API (not just factory functions). If this
is causing problems for you, please comment on
[pytorch/pytorch#92701](https://github.com/pytorch/pytorch/issues/92701)

Note

The [ torch.device](#torch.device) argument in functions can generally be substituted with a string.
This allows for fast prototyping of code.

```
>>> # Example of a function that takes in a torch.device
>>> cuda1 = torch.device('cuda:1')
>>> torch.randn((2,3), device=cuda1)
```

```
>>> # You can substitute the torch.device with a string
>>> torch.randn((2,3), device='cuda:1')
```

Note

Methods which take a device will generally accept a (properly formatted) string or an integer device ordinal, i.e. the following are all equivalent:

```
>>> torch.randn((2,3), device=torch.device('cuda:1'))
>>> torch.randn((2,3), device='cuda:1')
>>> torch.randn((2,3), device=1) # equivalent to 'cuda:1' if the current accelerator is cuda
```

Note

Tensors are never moved automatically between devices and require an explicit call from the user. Scalar Tensors (with tensor.dim()==0) are the only exception to this rule and they are automatically transferred from CPU to GPU when needed as this operation can be done “for free”. Example:

```
>>> # two scalars
>>> torch.ones(()) + torch.ones(()).cuda() # OK, scalar auto-transferred from CPU to GPU
>>> torch.ones(()).cuda() + torch.ones(()) # OK, scalar auto-transferred from CPU to GPU
```

```
>>> # one scalar (CPU), one vector (GPU)
>>> torch.ones(()) + torch.ones(1).cuda() # OK, scalar auto-transferred from CPU to GPU
>>> torch.ones(1).cuda() + torch.ones(()) # OK, scalar auto-transferred from CPU to GPU
```

```
>>> # one scalar (GPU), one vector (CPU)
>>> torch.ones(()).cuda() + torch.ones(1) # Fail, scalar not auto-transferred from GPU to CPU and non-scalar not auto-transferred from CPU to GPU
>>> torch.ones(1) + torch.ones(()).cuda() # Fail, scalar not auto-transferred from GPU to CPU and non-scalar not auto-transferred from CPU to GPU
```

## torch.layout[#](#torch-layout)

-
*class*torch.layout[#](#torch.layout)

Warning

The `torch.layout`

class is in beta and subject to change.

A [ torch.layout](#torch.layout) is an object that represents the memory layout of a

[. Currently, we support](tensors.html#torch.Tensor)

`torch.Tensor`

`torch.strided`

(dense Tensors)
and have beta support for `torch.sparse_coo`

(sparse COO Tensors).`torch.strided`

represents dense Tensors and is the memory layout that
is most commonly used. Each strided tensor has an associated
`torch.Storage`

, which holds its data. These tensors provide
multi-dimensional, [strided](https://en.wikipedia.org/wiki/Stride_of_an_array)
view of a storage. Strides are a list of integers: the k-th stride
represents the jump in the memory necessary to go from one element to the
next one in the k-th dimension of the Tensor. This concept makes it possible
to perform many tensor operations efficiently.

Example:

```
>>> x = torch.tensor([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
>>> x.stride()
(5, 1)
>>> x.t().stride()
(1, 5)
```

For more information on `torch.sparse_coo`

tensors, see [torch.sparse](sparse.html#sparse-docs).

## torch.memory_format[#](#torch-memory-format)

-
*class*torch.memory_format[#](#torch.memory_format)

A [ torch.memory_format](#torch.memory_format) is an object representing the memory format on which a

[is or will be allocated.](tensors.html#torch.Tensor)

`torch.Tensor`

Possible values are:

`torch.contiguous_format`

: Tensor is or will be allocated in dense non-overlapping memory. Strides represented by values in decreasing order.`torch.channels_last`

: Tensor is or will be allocated in dense non-overlapping memory. Strides represented by values in`strides[0] > strides[2] > strides[3] > strides[1] == 1`

aka NHWC order.`torch.channels_last_3d`

: Tensor is or will be allocated in dense non-overlapping memory. Strides represented by values in`strides[0] > strides[2] > strides[3] > strides[4] > strides[1] == 1`

aka NDHWC order.`torch.preserve_format`

: Used in functions like clone to preserve the memory format of the input tensor. If input tensor is allocated in dense non-overlapping memory, the output tensor strides will be copied from the input. Otherwise output strides will follow`torch.contiguous_format`

---

## Source: https://pytorch.org/docs/stable/tensor_view.html

# Tensor Views[#](#tensor-views)

Created On: Feb 28, 2020 | Last Updated On: Feb 26, 2025

PyTorch allows a tensor to be a `View`

of an existing tensor. View tensor shares the same underlying data
with its base tensor. Supporting `View`

avoids explicit data copy, thus allows us to do fast and memory efficient
reshaping, slicing and element-wise operations.

For example, to get a view of an existing tensor `t`

, you can call `t.view(...)`

.

```
>>> t = torch.rand(4, 4)
>>> b = t.view(2, 8)
>>> t.storage().data_ptr() == b.storage().data_ptr() # `t` and `b` share the same underlying data.
True
# Modifying view tensor changes base tensor as well.
>>> b[0][0] = 3.14
>>> t[0][0]
tensor(3.14)
```

Since views share underlying data with its base tensor, if you edit the data in the view, it will be reflected in the base tensor as well.

Typically a PyTorch op returns a new tensor as output, e.g. [ add()](generated/torch.Tensor.add.html#torch.Tensor.add).
But in case of view ops, outputs are views of input tensors to avoid unnecessary data copy.
No data movement occurs when creating a view, view tensor just changes the way
it interprets the same data. Taking a view of contiguous tensor could potentially produce a non-contiguous tensor.
Users should pay additional attention as contiguity might have implicit performance impact.

[is a common example.](generated/torch.Tensor.transpose.html#torch.Tensor.transpose)

`transpose()`

```
>>> base = torch.tensor([[0, 1],[2, 3]])
>>> base.is_contiguous()
True
>>> t = base.transpose(0, 1) # `t` is a view of `base`. No data movement happened here.
# View tensors might be non-contiguous.
>>> t.is_contiguous()
False
# To get a contiguous tensor, call `.contiguous()` to enforce
# copying data when `t` is not contiguous.
>>> c = t.contiguous()
```

For reference, here’s a full list of view ops in PyTorch:

Basic slicing and indexing op, e.g.

`tensor[0, 2:, 1:7:2]`

returns a view of base`tensor`

, see note below.`real`

`imag`

`view_as_real()`

`split_with_sizes()`

(sparse tensor only)`indices()`

(sparse tensor only)`values()`


Note

When accessing the contents of a tensor via indexing, PyTorch follows Numpy behaviors
that basic indexing returns views, while advanced indexing returns a copy.
Assignment via either basic or advanced indexing is in-place. See more examples in
[Numpy indexing documentation](https://numpy.org/doc/stable/user/basics.indexing.html).

It’s also worth mentioning a few ops with special behaviors:

,`reshape()`

and`reshape_as()`

can return either a view or new tensor, user code shouldn’t rely on whether it’s view or not.`flatten()`

returns`contiguous()`

**itself**if input tensor is already contiguous, otherwise it returns a new contiguous tensor by copying data.

For a more detailed walk-through of PyTorch internal implementation,
please refer to [ezyang’s blogpost about PyTorch Internals](http://blog.ezyang.com/2019/05/pytorch-internals/).

---

## Source: https://pytorch.org/docs/stable/amp.html

# Automatic Mixed Precision package - torch.amp[#](#automatic-mixed-precision-package-torch-amp)

Created On: Jun 12, 2025 | Last Updated On: Jun 12, 2025

[ torch.amp](#module-torch.amp) provides convenience methods for mixed precision,
where some operations use the

`torch.float32`

(`float`

) datatype and other operations
use lower precision floating point datatype (`lower_precision_fp`

): `torch.float16`

(`half`

) or `torch.bfloat16`

. Some ops, like linear layers and convolutions,
are much faster in `lower_precision_fp`

. Other ops, like reductions, often require the dynamic
range of `float32`

. Mixed precision tries to match each op to its appropriate datatype.Ordinarily, “automatic mixed precision training” with datatype of `torch.float16`

uses [ torch.autocast](#torch.autocast) and

`torch.amp.GradScaler`

together, as shown in the [Automatic Mixed Precision examples](notes/amp_examples.html#amp-examples)and

[Automatic Mixed Precision recipe](https://pytorch.org/tutorials/recipes/recipes/amp_recipe.html). However,

[and](#torch.autocast)

`torch.autocast`

`torch.GradScaler`

are modular, and may be used separately if desired.
As shown in the CPU example section of [, “automatic mixed precision training/inference” on CPU with datatype of](#torch.autocast)

`torch.autocast`

`torch.bfloat16`

only uses [.](#torch.autocast)

`torch.autocast`

Warning

`torch.cuda.amp.autocast(args...)`

and `torch.cpu.amp.autocast(args...)`

is deprecated. Please use `torch.amp.autocast("cuda", args...)`

or `torch.amp.autocast("cpu", args...)`

instead.
`torch.cuda.amp.GradScaler(args...)`

and `torch.cpu.amp.GradScaler(args...)`

is deprecated. Please use `torch.amp.GradScaler("cuda", args...)`

or `torch.amp.GradScaler("cpu", args...)`

instead.

[ torch.autocast](#torch.autocast) and

[are new in version](#torch.cpu.amp.autocast)

`torch.cpu.amp.autocast`

`1.10`

.[Autocasting](#id4)[#](#autocasting)

-
torch.amp.autocast_mode.is_autocast_available(
*device_type*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/amp/autocast_mode.py#L28)[#](#torch.amp.autocast_mode.is_autocast_available) Return a bool indicating if autocast is available on

`device_type`

.- Parameters:
**device_type**() – Device type to use. Possible values are: ‘cuda’, ‘cpu’, ‘mtia’, ‘maia’, ‘xpu’, and so on. The type is the same as the type attribute of a*str*. Thus, you may obtain the device type of a tensor using Tensor.device.type.`torch.device`

- Return type:


-
*class*torch.autocast(*device_type*,*dtype=None*,*enabled=True*,*cache_enabled=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/amp/autocast_mode.py#L52)[#](#torch.autocast) Instances of

serve as context managers or decorators that allow regions of your script to run in mixed precision.`autocast`

In these regions, ops run in an op-specific dtype chosen by autocast to improve performance while maintaining accuracy. See the

[Autocast Op Reference](#autocast-op-reference)for details.When entering an autocast-enabled region, Tensors may be any type. You should not call

`half()`

or`bfloat16()`

on your model(s) or inputs when using autocasting.should wrap only the forward pass(es) of your network, including the loss computation(s). Backward passes under autocast are not recommended. Backward ops run in the same type that autocast used for corresponding forward ops.`autocast`

Example for CUDA Devices:

# Creates model and optimizer in default precision model = Net().cuda() optimizer = optim.SGD(model.parameters(), ...) for input, target in data: optimizer.zero_grad() # Enables autocasting for the forward pass (model + loss) with torch.autocast(device_type="cuda"): output = model(input) loss = loss_fn(output, target) # Exits the context manager before backward() loss.backward() optimizer.step()

See the

[Automatic Mixed Precision examples](notes/amp_examples.html#amp-examples)for usage (along with gradient scaling) in more complex scenarios (e.g., gradient penalty, multiple models/losses, custom autograd functions).can also be used as a decorator, e.g., on the`autocast`

`forward`

method of your model:class AutocastModel(nn.Module): ... @torch.autocast(device_type="cuda") def forward(self, input): ...

Floating-point Tensors produced in an autocast-enabled region may be

`float16`

. After returning to an autocast-disabled region, using them with floating-point Tensors of different dtypes may cause type mismatch errors. If so, cast the Tensor(s) produced in the autocast region back to`float32`

(or other dtype if desired). If a Tensor from the autocast region is already`float32`

, the cast is a no-op, and incurs no additional overhead. CUDA Example:# Creates some tensors in default dtype (here assumed to be float32) a_float32 = torch.rand((8, 8), device="cuda") b_float32 = torch.rand((8, 8), device="cuda") c_float32 = torch.rand((8, 8), device="cuda") d_float32 = torch.rand((8, 8), device="cuda") with torch.autocast(device_type="cuda"): # torch.mm is on autocast's list of ops that should run in float16. # Inputs are float32, but the op runs in float16 and produces float16 output. # No manual casts are required. e_float16 = torch.mm(a_float32, b_float32) # Also handles mixed input types f_float16 = torch.mm(d_float32, e_float16) # After exiting autocast, calls f_float16.float() to use with d_float32 g_float32 = torch.mm(d_float32, f_float16.float())

CPU Training Example:

# Creates model and optimizer in default precision model = Net() optimizer = optim.SGD(model.parameters(), ...) for epoch in epochs: for input, target in data: optimizer.zero_grad() # Runs the forward pass with autocasting. with torch.autocast(device_type="cpu", dtype=torch.bfloat16): output = model(input) loss = loss_fn(output, target) loss.backward() optimizer.step()

CPU Inference Example:

# Creates model in default precision model = Net().eval() with torch.autocast(device_type="cpu", dtype=torch.bfloat16): for input in data: # Runs the forward pass with autocasting. output = model(input)

CPU Inference Example with Jit Trace:

class TestModel(nn.Module): def __init__(self, input_size, num_classes): super().__init__() self.fc1 = nn.Linear(input_size, num_classes) def forward(self, x): return self.fc1(x) input_size = 2 num_classes = 2 model = TestModel(input_size, num_classes).eval() # For now, we suggest to disable the Jit Autocast Pass, # As the issue: https://github.com/pytorch/pytorch/issues/75956 torch._C._jit_set_autocast_mode(False) with torch.cpu.amp.autocast(cache_enabled=False): model = torch.jit.trace(model, torch.randn(1, input_size)) model = torch.jit.freeze(model) # Models Run for _ in range(3): model(torch.randn(1, input_size))

Type mismatch errors

*in*an autocast-enabled region are a bug; if this is what you observe, please file an issue.`autocast(enabled=False)`

subregions can be nested in autocast-enabled regions. Locally disabling autocast can be useful, for example, if you want to force a subregion to run in a particular`dtype`

. Disabling autocast gives you explicit control over the execution type. In the subregion, inputs from the surrounding region should be cast to`dtype`

before use:# Creates some tensors in default dtype (here assumed to be float32) a_float32 = torch.rand((8, 8), device="cuda") b_float32 = torch.rand((8, 8), device="cuda") c_float32 = torch.rand((8, 8), device="cuda") d_float32 = torch.rand((8, 8), device="cuda") with torch.autocast(device_type="cuda"): e_float16 = torch.mm(a_float32, b_float32) with torch.autocast(device_type="cuda", enabled=False): # Calls e_float16.float() to ensure float32 execution # (necessary because e_float16 was created in an autocasted region) f_float32 = torch.mm(c_float32, e_float16.float()) # No manual casts are required when re-entering the autocast-enabled region. # torch.mm again runs in float16 and produces float16 output, regardless of input types. g_float16 = torch.mm(d_float32, f_float32)

The autocast state is thread-local. If you want it enabled in a new thread, the context manager or decorator must be invoked in that thread. This affects

and`torch.nn.DataParallel`

when used with more than one GPU per process (see`torch.nn.parallel.DistributedDataParallel`

[Working with Multiple GPUs](notes/amp_examples.html#amp-multigpu)).- Parameters:
**device_type**(*str**,**required*) – Device type to use. Possible values are: ‘cuda’, ‘cpu’, ‘mtia’, ‘maia’, ‘xpu’, and ‘hpu’. The type is the same as the type attribute of a. Thus, you may obtain the device type of a tensor using Tensor.device.type.`torch.device`

**enabled**(*bool**,**optional*) – Whether autocasting should be enabled in the region. Default:`True`

**dtype**(*torch_dtype**,**optional*) – Data type for ops run in autocast. It uses the default value (`torch.float16`

for CUDA and`torch.bfloat16`

for CPU), given by`get_autocast_dtype()`

, ifis`dtype`

`None`

. Default:`None`

**cache_enabled**(*bool**,**optional*) – Whether the weight cache inside autocast should be enabled. Default:`True`




-
torch.amp.custom_fwd(
*fwd=None*,***,*device_type*,*cast_inputs=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/amp/autocast_mode.py#L441)[#](#torch.amp.custom_fwd) Create a helper decorator for

`forward`

methods of custom autograd functions.Autograd functions are subclasses of

. See the`torch.autograd.Function`

[example page](notes/amp_examples.html#amp-custom-examples)for more detail.- Parameters:
**device_type**() – Device type to use. ‘cuda’, ‘cpu’, ‘mtia’, ‘maia’, ‘xpu’ and so on. The type is the same as the type attribute of a*str*. Thus, you may obtain the device type of a tensor using Tensor.device.type.`torch.device`

**cast_inputs**(or None, optional, default=None) – If not`torch.dtype`

`None`

, when`forward`

runs in an autocast-enabled region, casts incoming floating-point Tensors to the target dtype (non-floating-point Tensors are not affected), then executes`forward`

with autocast disabled. If`None`

,`forward`

’s internal ops execute with the current autocast state.


Note

If the decorated

`forward`

is called outside an autocast-enabled region,is a no-op and`custom_fwd`

`cast_inputs`

has no effect.

-
torch.amp.custom_bwd(
*bwd=None*,***,*device_type*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/amp/autocast_mode.py#L500)[#](#torch.amp.custom_bwd) Create a helper decorator for backward methods of custom autograd functions.

Autograd functions are subclasses of

. Ensures that`torch.autograd.Function`

`backward`

executes with the same autocast state as`forward`

. See the[example page](notes/amp_examples.html#amp-custom-examples)for more detail.- Parameters:
**device_type**() – Device type to use. ‘cuda’, ‘cpu’, ‘mtia’, ‘maia’, ‘xpu’ and so on. The type is the same as the type attribute of a*str*. Thus, you may obtain the device type of a tensor using Tensor.device.type.`torch.device`



-
*class*torch.cuda.amp.autocast(*enabled=True*,*dtype=torch.float16*,*cache_enabled=True*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/cuda/amp/autocast_mode.py#L13)[#](#torch.cuda.amp.autocast) See

.`torch.autocast`

`torch.cuda.amp.autocast(args...)`

is deprecated. Please use`torch.amp.autocast("cuda", args...)`

instead.

-
torch.cuda.amp.custom_fwd(
*fwd=None*,***,*cast_inputs=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/cuda/amp/autocast_mode.py#L85)[#](#torch.cuda.amp.custom_fwd) `torch.cuda.amp.custom_fwd(args...)`

is deprecated. Please use`torch.amp.custom_fwd(args..., device_type='cuda')`

instead.

-
torch.cuda.amp.custom_bwd(
*bwd*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/cuda/amp/autocast_mode.py#L100)[#](#torch.cuda.amp.custom_bwd) `torch.cuda.amp.custom_bwd(args...)`

is deprecated. Please use`torch.amp.custom_bwd(args..., device_type='cuda')`

instead.

-
*class*torch.cpu.amp.autocast(*enabled=True*,*dtype=torch.bfloat16*,*cache_enabled=True*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/cpu/amp/autocast_mode.py#L12)[#](#torch.cpu.amp.autocast) See

.`torch.autocast`

`torch.cpu.amp.autocast(args...)`

is deprecated. Please use`torch.amp.autocast("cpu", args...)`

instead.

[Gradient Scaling](#id5)[#](#gradient-scaling)

If the forward pass for a particular op has `float16`

inputs, the backward pass for
that op will produce `float16`

gradients.
Gradient values with small magnitudes may not be representable in `float16`

.
These values will flush to zero (“underflow”), so the update for the corresponding parameters will be lost.

To prevent underflow, “gradient scaling” multiplies the network’s loss(es) by a scale factor and invokes a backward pass on the scaled loss(es). Gradients flowing backward through the network are then scaled by the same factor. In other words, gradient values have a larger magnitude, so they don’t flush to zero.

Each parameter’s gradient (`.grad`

attribute) should be unscaled before the optimizer
updates the parameters, so the scale factor does not interfere with the learning rate.

Note

AMP/fp16 may not work for every model! For example, most bf16-pretrained models cannot operate in the fp16 numerical range of max 65504 and will cause gradients to overflow instead of underflow. In this case, the scale factor may decrease under 1 as an attempt to bring gradients to a number representable in the fp16 dynamic range. While one may expect the scale to always be above 1, our GradScaler does NOT make this guarantee to maintain performance. If you encounter NaNs in your loss or gradients when running with AMP/fp16, verify your model is compatible.

[Autocast Op Reference](#id6)[#](#autocast-op-reference)

[Op Eligibility](#id7)[#](#op-eligibility)

Ops that run in `float64`

or non-floating-point dtypes are not eligible, and will
run in these types whether or not autocast is enabled.

Only out-of-place ops and Tensor methods are eligible.
In-place variants and calls that explicitly supply an `out=...`

Tensor
are allowed in autocast-enabled regions, but won’t go through autocasting.
For example, in an autocast-enabled region `a.addmm(b, c)`

can autocast,
but `a.addmm_(b, c)`

and `a.addmm(b, c, out=d)`

cannot.
For best performance and stability, prefer out-of-place ops in autocast-enabled
regions.

Ops called with an explicit `dtype=...`

argument are not eligible,
and will produce output that respects the `dtype`

argument.

[CUDA Op-Specific Behavior](#id8)[#](#cuda-op-specific-behavior)

The following lists describe the behavior of eligible ops in autocast-enabled regions.
These ops always go through autocasting whether they are invoked as part of a [ torch.nn.Module](generated/torch.nn.Module.html#torch.nn.Module),
as a function, or as a

[method. If functions are exposed in multiple namespaces, they go through autocasting regardless of the namespace.](tensors.html#torch.Tensor)

`torch.Tensor`

Ops not listed below do not go through autocasting. They run in the type defined by their inputs. However, autocasting may still change the type in which unlisted ops run if they’re downstream from autocasted ops.

If an op is unlisted, we assume it’s numerically stable in `float16`

.
If you believe an unlisted op is numerically unstable in `float16`

,
please file an issue.

[CUDA Ops that can autocast to ](#id9)`float16`

[#](#cuda-ops-that-can-autocast-to-float16)

`float16`

`__matmul__`

,
`addbmm`

,
`addmm`

,
`addmv`

,
`addr`

,
`baddbmm`

,
`bmm`

,
`chain_matmul`

,
`multi_dot`

,
`conv1d`

,
`conv2d`

,
`conv3d`

,
`conv_transpose1d`

,
`conv_transpose2d`

,
`conv_transpose3d`

,
`GRUCell`

,
`linear`

,
`LSTMCell`

,
`matmul`

,
`mm`

,
`mv`

,
`prelu`

,
`RNNCell`


[CUDA Ops that can autocast to ](#id10)`float32`

[#](#cuda-ops-that-can-autocast-to-float32)

`float32`

`__pow__`

,
`__rdiv__`

,
`__rpow__`

,
`__rtruediv__`

,
`acos`

,
`asin`

,
`binary_cross_entropy_with_logits`

,
`cosh`

,
`cosine_embedding_loss`

,
`cdist`

,
`cosine_similarity`

,
`cross_entropy`

,
`cumprod`

,
`cumsum`

,
`dist`

,
`erfinv`

,
`exp`

,
`expm1`

,
`group_norm`

,
`hinge_embedding_loss`

,
`kl_div`

,
`l1_loss`

,
`layer_norm`

,
`log`

,
`log_softmax`

,
`log10`

,
`log1p`

,
`log2`

,
`margin_ranking_loss`

,
`mse_loss`

,
`multilabel_margin_loss`

,
`multi_margin_loss`

,
`nll_loss`

,
`norm`

,
`normalize`

,
`pdist`

,
`poisson_nll_loss`

,
`pow`

,
`prod`

,
`reciprocal`

,
`rsqrt`

,
`sinh`

,
`smooth_l1_loss`

,
`soft_margin_loss`

,
`softmax`

,
`softmin`

,
`softplus`

,
`sum`

,
`renorm`

,
`tan`

,
`triplet_margin_loss`


[CUDA Ops that promote to the widest input type](#id11)[#](#cuda-ops-that-promote-to-the-widest-input-type)

These ops don’t require a particular dtype for stability, but take multiple inputs
and require that the inputs’ dtypes match. If all of the inputs are
`float16`

, the op runs in `float16`

. If any of the inputs is `float32`

,
autocast casts all inputs to `float32`

and runs the op in `float32`

.

`addcdiv`

,
`addcmul`

,
`atan2`

,
`bilinear`

,
`cross`

,
`dot`

,
`grid_sample`

,
`index_put`

,
`scatter_add`

,
`tensordot`


Some ops not listed here (e.g., binary ops like `add`

) natively promote
inputs without autocasting’s intervention. If inputs are a mixture of `float16`

and `float32`

, these ops run in `float32`

and produce `float32`

output,
regardless of whether autocast is enabled.

[Prefer ](#id12)`binary_cross_entropy_with_logits`

over `binary_cross_entropy`

[#](#prefer-binary-cross-entropy-with-logits-over-binary-cross-entropy)

`binary_cross_entropy_with_logits`

over `binary_cross_entropy`

The backward passes of [ torch.nn.functional.binary_cross_entropy()](generated/torch.nn.functional.binary_cross_entropy.html#torch.nn.functional.binary_cross_entropy) (and

[, which wraps it) can produce gradients that aren’t representable in](generated/torch.nn.BCELoss.html#torch.nn.BCELoss)

`torch.nn.BCELoss`

`float16`

. In autocast-enabled regions, the forward input
may be `float16`

, which means the backward gradient must be representable in `float16`

(autocasting `float16`

forward inputs to `float32`

doesn’t help, because that cast must be reversed in backward).
Therefore, `binary_cross_entropy`

and `BCELoss`

raise an error in autocast-enabled regions.Many models use a sigmoid layer right before the binary cross entropy layer.
In this case, combine the two layers using [ torch.nn.functional.binary_cross_entropy_with_logits()](generated/torch.nn.functional.binary_cross_entropy_with_logits.html#torch.nn.functional.binary_cross_entropy_with_logits)
or

[.](generated/torch.nn.BCEWithLogitsLoss.html#torch.nn.BCEWithLogitsLoss)

`torch.nn.BCEWithLogitsLoss`

`binary_cross_entropy_with_logits`

and `BCEWithLogits`

are safe to autocast.[XPU Op-Specific Behavior (Experimental)](#id13)[#](#xpu-op-specific-behavior-experimental)

The following lists describe the behavior of eligible ops in autocast-enabled regions.
These ops always go through autocasting whether they are invoked as part of a [ torch.nn.Module](generated/torch.nn.Module.html#torch.nn.Module),
as a function, or as a

[method. If functions are exposed in multiple namespaces, they go through autocasting regardless of the namespace.](tensors.html#torch.Tensor)

`torch.Tensor`

Ops not listed below do not go through autocasting. They run in the type defined by their inputs. However, autocasting may still change the type in which unlisted ops run if they’re downstream from autocasted ops.

If an op is unlisted, we assume it’s numerically stable in `float16`

.
If you believe an unlisted op is numerically unstable in `float16`

,
please file an issue.

[XPU Ops that can autocast to ](#id14)`float16`

[#](#xpu-ops-that-can-autocast-to-float16)

`float16`

`addbmm`

,
`addmm`

,
`addmv`

,
`addr`

,
`baddbmm`

,
`bmm`

,
`chain_matmul`

,
`multi_dot`

,
`conv1d`

,
`conv2d`

,
`conv3d`

,
`conv_transpose1d`

,
`conv_transpose2d`

,
`conv_transpose3d`

,
`GRUCell`

,
`linear`

,
`LSTMCell`

,
`matmul`

,
`mm`

,
`mv`

,
`RNNCell`


[XPU Ops that can autocast to ](#id15)`float32`

[#](#xpu-ops-that-can-autocast-to-float32)

`float32`

`__pow__`

,
`__rdiv__`

,
`__rpow__`

,
`__rtruediv__`

,
`binary_cross_entropy_with_logits`

,
`cosine_embedding_loss`

,
`cosine_similarity`

,
`cumsum`

,
`dist`

,
`exp`

,
`group_norm`

,
`hinge_embedding_loss`

,
`kl_div`

,
`l1_loss`

,
`layer_norm`

,
`log`

,
`log_softmax`

,
`margin_ranking_loss`

,
`nll_loss`

,
`normalize`

,
`poisson_nll_loss`

,
`pow`

,
`reciprocal`

,
`rsqrt`

,
`soft_margin_loss`

,
`softmax`

,
`softmin`

,
`sum`

,
`triplet_margin_loss`


[XPU Ops that promote to the widest input type](#id16)[#](#xpu-ops-that-promote-to-the-widest-input-type)

These ops don’t require a particular dtype for stability, but take multiple inputs
and require that the inputs’ dtypes match. If all of the inputs are
`float16`

, the op runs in `float16`

. If any of the inputs is `float32`

,
autocast casts all inputs to `float32`

and runs the op in `float32`

.

`bilinear`

,
`cross`

,
`grid_sample`

,
`index_put`

,
`scatter_add`

,
`tensordot`


Some ops not listed here (e.g., binary ops like `add`

) natively promote
inputs without autocasting’s intervention. If inputs are a mixture of `float16`

and `float32`

, these ops run in `float32`

and produce `float32`

output,
regardless of whether autocast is enabled.

[CPU Op-Specific Behavior](#id17)[#](#cpu-op-specific-behavior)

The following lists describe the behavior of eligible ops in autocast-enabled regions.
These ops always go through autocasting whether they are invoked as part of a [ torch.nn.Module](generated/torch.nn.Module.html#torch.nn.Module),
as a function, or as a

[method. If functions are exposed in multiple namespaces, they go through autocasting regardless of the namespace.](tensors.html#torch.Tensor)

`torch.Tensor`

Ops not listed below do not go through autocasting. They run in the type defined by their inputs. However, autocasting may still change the type in which unlisted ops run if they’re downstream from autocasted ops.

If an op is unlisted, we assume it’s numerically stable in `bfloat16`

.
If you believe an unlisted op is numerically unstable in `bfloat16`

,
please file an issue. `float16`

shares the lists of `bfloat16`

.

[CPU Ops that can autocast to ](#id18)`bfloat16`

[#](#cpu-ops-that-can-autocast-to-bfloat16)

`bfloat16`

`conv1d`

,
`conv2d`

,
`conv3d`

,
`bmm`

,
`mm`

,
`linalg_vecdot`

,
`baddbmm`

,
`addmm`

,
`addbmm`

,
`linear`

,
`matmul`

,
`_convolution`

,
`conv_tbc`

,
`mkldnn_rnn_layer`

,
`conv_transpose1d`

,
`conv_transpose2d`

,
`conv_transpose3d`

,
`prelu`

,
`scaled_dot_product_attention`

,
`_native_multi_head_attention`


[CPU Ops that can autocast to ](#id19)`float32`

[#](#cpu-ops-that-can-autocast-to-float32)

`float32`

`avg_pool3d`

,
`binary_cross_entropy`

,
`grid_sampler`

,
`grid_sampler_2d`

,
`_grid_sampler_2d_cpu_fallback`

,
`grid_sampler_3d`

,
`polar`

,
`prod`

,
`quantile`

,
`nanquantile`

,
`stft`

,
`cdist`

,
`trace`

,
`view_as_complex`

,
`cholesky`

,
`cholesky_inverse`

,
`cholesky_solve`

,
`inverse`

,
`lu_solve`

,
`orgqr`

,
`inverse`

,
`ormqr`

,
`pinverse`

,
`max_pool3d`

,
`max_unpool2d`

,
`max_unpool3d`

,
`adaptive_avg_pool3d`

,
`reflection_pad1d`

,
`reflection_pad2d`

,
`replication_pad1d`

,
`replication_pad2d`

,
`replication_pad3d`

,
`mse_loss`

,
`cosine_embedding_loss`

,
`nll_loss`

,
`nll_loss2d`

,
`hinge_embedding_loss`

,
`poisson_nll_loss`

,
`cross_entropy_loss`

,
`l1_loss`

,
`huber_loss`

,
`margin_ranking_loss`

,
`soft_margin_loss`

,
`triplet_margin_loss`

,
`multi_margin_loss`

,
`ctc_loss`

,
`kl_div`

,
`multilabel_margin_loss`

,
`binary_cross_entropy_with_logits`

,
`fft_fft`

,
`fft_ifft`

,
`fft_fft2`

,
`fft_ifft2`

,
`fft_fftn`

,
`fft_ifftn`

,
`fft_rfft`

,
`fft_irfft`

,
`fft_rfft2`

,
`fft_irfft2`

,
`fft_rfftn`

,
`fft_irfftn`

,
`fft_hfft`

,
`fft_ihfft`

,
`linalg_cond`

,
`linalg_matrix_rank`

,
`linalg_solve`

,
`linalg_cholesky`

,
`linalg_svdvals`

,
`linalg_eigvals`

,
`linalg_eigvalsh`

,
`linalg_inv`

,
`linalg_householder_product`

,
`linalg_tensorinv`

,
`linalg_tensorsolve`

,
`fake_quantize_per_tensor_affine`

,
`geqrf`

,
`_lu_with_info`

,
`qr`

,
`svd`

,
`triangular_solve`

,
`fractional_max_pool2d`

,
`fractional_max_pool3d`

,
`adaptive_max_pool3d`

,
`multilabel_margin_loss_forward`

,
`linalg_qr`

,
`linalg_cholesky_ex`

,
`linalg_svd`

,
`linalg_eig`

,
`linalg_eigh`

,
`linalg_lstsq`

,
`linalg_inv_ex`


[CPU Ops that promote to the widest input type](#id20)[#](#cpu-ops-that-promote-to-the-widest-input-type)

These ops don’t require a particular dtype for stability, but take multiple inputs
and require that the inputs’ dtypes match. If all of the inputs are
`bfloat16`

, the op runs in `bfloat16`

. If any of the inputs is `float32`

,
autocast casts all inputs to `float32`

and runs the op in `float32`

.

`cat`

,
`stack`

,
`index_copy`


Some ops not listed here (e.g., binary ops like `add`

) natively promote
inputs without autocasting’s intervention. If inputs are a mixture of `bfloat16`

and `float32`

, these ops run in `float32`

and produce `float32`

output,
regardless of whether autocast is enabled.

---

## Source: https://pytorch.org/docs/stable/autograd.html

# Automatic differentiation package - torch.autograd[#](#module-torch.autograd)

Created On: Dec 23, 2016 | Last Updated On: Nov 01, 2025

`torch.autograd`

provides classes and functions implementing automatic differentiation of arbitrary scalar valued functions.

It requires minimal changes to the existing code - you only need to declare `Tensor`

s
for which gradients should be computed with the `requires_grad=True`

keyword.
As of now, we only support autograd for floating point `Tensor`

types (
half, float, double and bfloat16) and complex `Tensor`

types (cfloat, cdouble).

`backward` |

Compute the sum of gradients of given tensors with respect to graph leaves.

`grad`

Compute and return the sum of gradients of outputs with respect to the inputs.

## Forward-mode Automatic Differentiation[#](#forward-mode-automatic-differentiation)

Warning

This API is in beta. Even though the function signatures are very unlikely to change, improved operator coverage is planned before we consider this stable.

Please see the [forward-mode AD tutorial](https://pytorch.org/tutorials/intermediate/forward_ad_usage.html)
for detailed steps on how to use this API.

Context-manager for forward AD, where all forward AD computation must occur within the |
|
Associate a tensor value with its tangent to create a "dual tensor" for forward AD gradient computation. |
|
Unpack a "dual tensor" to get both its Tensor value and its forward AD gradient. |
|
Enter a new forward grad level. |
|
Exit a forward grad level. |
|
Namedtuple returned by |

## Functional higher level API[#](#functional-higher-level-api)

Warning

This API is in beta. Even though the function signatures are very unlikely to change, major improvements to performances are planned before we consider this stable.

This section contains the higher level API for the autograd that builds on the basic API above and allows you to compute jacobians, hessians, etc.

This API works with user-provided functions that take only Tensors as input and return
only Tensors.
If your function takes other arguments that are not Tensors or Tensors that don’t have requires_grad set,
you can use a lambda to capture them.
For example, for a function `f`

that takes three inputs, a Tensor for which we want the jacobian, another
tensor that should be considered constant and a boolean flag as `f(input, constant, flag=flag)`

you can use it as `functional.jacobian(lambda x: f(x, constant, flag=flag), input)`

.

Compute the Jacobian of a given function. |
|
Compute the Hessian of a given scalar function. |
|
Compute the dot product between a vector |
|
Compute the dot product between the Jacobian of the given function at the point given by the inputs and a vector |
|
Compute the dot product between vector |
|
Compute the dot product between the scalar function's Hessian and a vector |

## Locally disabling gradient computation[#](#locally-disabling-gradient-computation)

See [Locally disabling gradient computation](notes/autograd.html#locally-disable-grad-doc) for more information on the differences
between no-grad and inference mode as well as other related mechanisms that
may be confused with the two. Also see [Locally disabling gradient computation](torch.html#torch-rst-local-disable-grad)
for a list of functions that can be used to locally disable gradients.

## Default gradient layouts[#](#default-gradient-layouts)

When a non-sparse `param`

receives a non-sparse gradient during
[ torch.autograd.backward()](generated/torch.autograd.backward.html#torch.autograd.backward) or


`torch.Tensor.backward()`

`param.grad`

is accumulated as follows.If `param.grad`

is initially `None`

:

If

`param`

’s memory is non-overlapping and dense,`.grad`

is created with strides matching`param`

(thus matching`param`

’s layout).Otherwise,

`.grad`

is created with rowmajor-contiguous strides.

If `param`

already has a non-sparse `.grad`

attribute:

If

`create_graph=False`

,`backward()`

accumulates into`.grad`

in-place, which preserves its strides.If

`create_graph=True`

,`backward()`

replaces`.grad`

with a new tensor`.grad + new grad`

, which attempts (but does not guarantee) matching the preexisting`.grad`

’s strides.

The default behavior (letting `.grad`

s be `None`

before the first
`backward()`

, such that their layout is created according to 1 or 2,
and retained over time according to 3 or 4) is recommended for best performance.
Calls to `model.zero_grad()`

or `optimizer.zero_grad()`

will not affect `.grad`

layouts.

In fact, resetting all `.grad`

s to `None`

before each
accumulation phase, e.g.:

```
for iterations...
...
for param in model.parameters():
param.grad = None
loss.backward()
```

such that they’re recreated according to 1 or 2 every time,
is a valid alternative to `model.zero_grad()`

or `optimizer.zero_grad()`

that may improve performance for some networks.

### Manual gradient layouts[#](#manual-gradient-layouts)

If you need manual control over `.grad`

’s strides,
assign `param.grad =`

a zeroed tensor with desired strides
before the first `backward()`

, and never reset it to `None`

.
3 guarantees your layout is preserved as long as `create_graph=False`

.
4 indicates your layout is *likely* preserved even if `create_graph=True`

.

## In-place operations on Tensors[#](#in-place-operations-on-tensors)

Supporting in-place operations in autograd is a hard matter, and we discourage their use in most cases. Autograd’s aggressive buffer freeing and reuse makes it very efficient and there are very few occasions when in-place operations actually lower memory usage by any significant amount. Unless you’re operating under heavy memory pressure, you might never need to use them.

### In-place correctness checks[#](#in-place-correctness-checks)

All `Tensor`

s keep track of in-place operations applied to them, and
if the implementation detects that a tensor was saved for backward in one of
the functions, but it was modified in-place afterwards, an error will be raised
once backward pass is started. This ensures that if you’re using in-place
functions and not seeing any errors, you can be sure that the computed
gradients are correct.

## Variable (deprecated)[#](#variable-deprecated)

Warning

The Variable API has been deprecated: Variables are no longer necessary to
use autograd with tensors. Autograd automatically supports Tensors with
`requires_grad`

set to `True`

. Below please find a quick guide on what
has changed:

`Variable(tensor)`

and`Variable(tensor, requires_grad)`

still work as expected, but they return Tensors instead of Variables.`var.data`

is the same thing as`tensor.data`

.Methods such as

`var.backward(), var.detach(), var.register_hook()`

now work on tensors with the same method names.

In addition, one can now create tensors with `requires_grad=True`

using factory
methods such as [ torch.randn()](generated/torch.randn.html#torch.randn),

[,](generated/torch.zeros.html#torch.zeros)

`torch.zeros()`

[, and others like the following:](generated/torch.ones.html#torch.ones)

`torch.ones()`

`autograd_tensor = torch.randn((2, 3, 4), requires_grad=True)`


## Tensor autograd functions[#](#tensor-autograd-functions)

|
This attribute is `self` . |
|
Is |
|
All Tensors that have |
|
Computes the gradient of current tensor wrt graph leaves. |
|
Returns a new Tensor, detached from the current graph. |
|
Detaches the Tensor from the graph that created it, making it a leaf. |
|
Registers a backward hook. |
|
Registers a backward hook that runs after grad accumulation. |
|
Enables this Tensor to have their
`backward()` |

## Function[#](#function)

-
*class*torch.autograd.Function(**args*,***kwargs*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/function.py#L485)[#](#torch.autograd.Function) Base class to create custom autograd.Function.

To create a custom autograd.Function, subclass this class and implement the

and`forward()`

static methods. Then, to use your custom op in the forward pass, call the class method`backward()`

`apply`

. Do not calldirectly.`forward()`

To ensure correctness and best performance, make sure you are calling the correct methods on

`ctx`

and validating your backward function using.`torch.autograd.gradcheck()`

See

[Extending torch.autograd](notes/extending.html#extending-autograd)for more details on how to use this class.Examples:

>>> class Exp(Function): >>> @staticmethod >>> def forward(ctx, i): >>> result = i.exp() >>> ctx.save_for_backward(result) >>> return result >>> >>> @staticmethod >>> def backward(ctx, grad_output): >>> result, = ctx.saved_tensors >>> return grad_output * result >>> >>> # Use it by calling the apply method: >>> output = Exp.apply(input)


Define the forward of the custom autograd Function. |
|
Define a formula for differentiating the operation with backward mode automatic differentiation. |
|
Define a formula for differentiating the operation with forward mode automatic differentiation. |
|
Define the behavior for this autograd.Function underneath |

## Context method mixins[#](#context-method-mixins)

When creating a new [ Function](#torch.autograd.Function), the following methods are available to

`ctx`

.Mark given tensors as modified in an in-place operation. |
|
Mark outputs as non-differentiable. |
|
Save given tensors for a future call to |
|
Set whether to materialize grad tensors. |

## Custom Function utilities[#](#custom-function-utilities)

Decorator for backward method.

Base custom [ Function](#torch.autograd.Function) used to build PyTorch utilities

This class is used for internal autograd work. |
|
This class is here only for backward compatibility reasons. |
|
This class is here only for backward compatibility reasons. |

## Numerical gradient checking[#](#module-torch.autograd.gradcheck)

`gradcheck` |

Check gradients computed via small finite differences against analytical gradients wrt tensors in `inputs`

that are of floating point or complex type and with `requires_grad=True`

.

`gradgradcheck`

Check gradients of gradients computed via small finite differences against analytical gradients wrt tensors in `inputs`

and `grad_outputs`

that are of floating point or complex type and with `requires_grad=True`

.

`GradcheckError`

Error raised by [ gradcheck()](generated/torch.autograd.gradcheck.gradcheck.html#torch.autograd.gradcheck.gradcheck) and

[.](generated/torch.autograd.gradcheck.gradgradcheck.html#torch.autograd.gradcheck.gradgradcheck)

`gradgradcheck()`

## Profiler[#](#profiler)

Autograd includes a profiler that lets you inspect the cost of different
operators inside your model - both on the CPU and GPU. There are three modes
implemented at the moment - CPU-only using [ profile](#torch.autograd.profiler.profile).
nvprof based (registers both CPU and GPU activity) using

[. and vtune profiler based using](#torch.autograd.profiler.emit_nvtx)

`emit_nvtx`

[.](#torch.autograd.profiler.emit_itt)

`emit_itt`

-
*class*torch.autograd.profiler.profile(*enabled=True*,***,*use_cuda=False*,*use_device=None*,*record_shapes=False*,*with_flops=False*,*profile_memory=False*,*with_stack=False*,*with_modules=False*,*use_kineto=False*,*use_cpu=True*,*experimental_config=None*,*acc_events=False*,*custom_trace_id_callback=None*,*post_processing_timeout_s=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/profiler.py#L112)[#](#torch.autograd.profiler.profile) Context manager that manages autograd profiler state and holds a summary of results.

Note

This is the backend, most people should use

instead.`torch.profiler`

Under the hood it just records events of functions being executed in C++ and exposes those events to Python. You can wrap any code into it and it will only report runtime of PyTorch functions. Note: profiler is thread local and is automatically propagated into the async tasks

- Parameters:
**enabled**(*bool**,**optional*) – Setting this to False makes this context manager a no-op.**use_cuda**(*bool**,**optional*) – Enables timing of CUDA events as well using the cudaEvent API. (will be deprecated)**use_device**(*str**,**optional*) – Enables timing of device events. Adds approximately 4us of overhead to each tensor operation when use cuda. The valid devices options are ‘cuda’, ‘xpu’, ‘mtia’ and ‘privateuseone’.**record_shapes**(*bool**,**optional*) – If shapes recording is set, information about input dimensions will be collected. This allows one to see which dimensions have been used under the hood and further group by them using prof.key_averages(group_by_input_shape=True). Please note that shape recording might skew your profiling data. It is recommended to use separate runs with and without shape recording to validate the timing. Most likely the skew will be negligible for bottom most events (in a case of nested function calls). But for higher level functions the total self cpu time might be artificially increased because of the shape collection.**with_flops**(*bool**,**optional*) – If with_flops is set, the profiler will estimate the FLOPs (floating point operations) value using the operator’s input shape. This allows one to estimate the hardware performance. Currently, this option only works for the matrix multiplication and 2D convolution operators.**profile_memory**(*bool**,**optional*) – track tensor memory allocation/deallocation.**with_stack**(*bool**,**optional*) – record source information (file and line number) for the ops.**with_modules**() – record module hierarchy (including function names) corresponding to the callstack of the op. e.g. If module A’s forward call’s module B’s forward which contains an aten::add op, then aten::add’s module hierarchy is A.B Note that this support exist, at the moment, only for TorchScript models and not eager mode models.*bool***use_kineto**(*bool**,**optional*) – experimental, enable profiling with Kineto profiler.**use_cpu**(*bool**,**optional*) – profile CPU events; setting to`False`

requires`use_kineto=True`

and can be used to lower the overhead for GPU-only profiling.**experimental_config**(*_ExperimentalConfig*) – A set of experimental options used by profiler libraries like Kineto. Note, backward compatibility is not guaranteed.**acc_events**() – Enable the accumulation of FunctionEvents across multiple profiling cycles*bool***post_processing_timeout_s**() – Optional timeout in seconds for post-processing profiler results. In this context, post-processing happens after the profiling itself has finished. If specified, event parsing will stop after this duration and return partial results. Useful for handling large traces that may take too long to process.*float*


Warning

Enabling memory profiling or source attribution incurs additional profiler overhead

Warning

This context managers should not be called recursively, i.e. no nested instances are allowed

Warning

Due to some CUDA multiprocessing limitations (see

[CUDA in multiprocessing](notes/multiprocessing.html#multiprocessing-cuda-note)), one cannot use the profiler with`use_device = 'cuda'`

to benchmark DataLoaders with`num_workers > 0`

. If you wish to benchmark data loading, please use`use_device = None`

or`num_workers = 0`

.Example

>>> x = torch.randn((1, 1), requires_grad=True) >>> with torch.autograd.profiler.profile() as prof: >>> for _ in range(100): # any normal python code, really! >>> y = x ** 2 >>> y.backward() >>> # NOTE: some columns were removed for brevity >>> print(prof.key_averages().table(sort_by="self_cpu_time_total")) ----------------------------------- --------------- --------------- --------------- Name Self CPU total CPU time avg Number of Calls ----------------------------------- --------------- --------------- --------------- mul 32.048ms 32.048ms 200 pow 27.041ms 27.041ms 200 PowBackward0 9.727ms 55.483ms 100 torch::autograd::AccumulateGrad 9.148ms 9.148ms 100 torch::autograd::GraphRoot 691.816us 691.816us 100 ----------------------------------- --------------- --------------- ---------------


Export an EventList as a Chrome tracing tools file. |
|
Averages all function events over their keys. |
|
Returns total time spent on CPU. |
|
Compute aggregate statistics across all events. |
|
Raises an error if a key is seen more than once. |
|
Provides an abstraction for incrementing the step count globally. |
|
Context manager/function decorator that adds a label to a code block/function when running autograd profiler. |
|
Acceleration structure for accessing mem_records in interval. |
|

-
*class*torch.autograd.profiler.emit_nvtx(*enabled=True*,*record_shapes=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/profiler.py#L994)[#](#torch.autograd.profiler.emit_nvtx) Context manager that makes every autograd operation emit an NVTX range.

It is useful when running the program under nvprof:

nvprof --profile-from-start off -o trace_name.prof -- <regular command here>

Unfortunately, there’s no way to force nvprof to flush the data it collected to disk, so for CUDA profiling one has to use this context manager to annotate nvprof traces and wait for the process to exit before inspecting them. Then, either NVIDIA Visual Profiler (nvvp) can be used to visualize the timeline, or

can load the results for inspection e.g. in Python REPL.`torch.autograd.profiler.load_nvprof()`

- Parameters:
**enabled**(*bool**,**optional*) – Setting`enabled=False`

makes this context manager a no-op. Default:`True`

.**record_shapes**(*bool**,**optional*) – If`record_shapes=True`

, the nvtx range wrapping each autograd op will append information about the sizes of Tensor arguments received by that op, in the following format:`[[arg0.size(0), arg0.size(1), ...], [arg1.size(0), arg1.size(1), ...], ...]`

Non-tensor arguments will be represented by`[]`

. Arguments will be listed in the order they are received by the backend op. Please note that this order may not match the order in which those arguments were passed on the Python side. Also note that shape recording may increase the overhead of nvtx range creation. Default:`False`



Example

>>> with torch.cuda.profiler.profile(): ... model(x) # Warmup CUDA memory allocator and profiler ... with torch.autograd.profiler.emit_nvtx(): ... model(x)

**Forward-backward correlation**When viewing a profile created using

in the Nvidia Visual Profiler, correlating each backward-pass op with the corresponding forward-pass op can be difficult. To ease this task,`emit_nvtx`

appends sequence number information to the ranges it generates.`emit_nvtx`

During the forward pass, each function range is decorated with

`seq=<N>`

.`seq`

is a running counter, incremented each time a new backward Function object is created and stashed for backward. Thus, the`seq=<N>`

annotation associated with each forward function range tells you that if a backward Function object is created by this forward function, the backward object will receive sequence number N. During the backward pass, the top-level range wrapping each C++ backward Function’s`apply()`

call is decorated with`stashed seq=<M>`

.`M`

is the sequence number that the backward object was created with. By comparing`stashed seq`

numbers in backward with`seq`

numbers in forward, you can track down which forward op created each backward Function.Any functions executed during the backward pass are also decorated with

`seq=<N>`

. During default backward (with`create_graph=False`

) this information is irrelevant, and in fact,`N`

may simply be 0 for all such functions. Only the top-level ranges associated with backward Function objects’`apply()`

methods are useful, as a way to correlate these Function objects with the earlier forward pass.**Double-backward**If, on the other hand, a backward pass with

`create_graph=True`

is underway (in other words, if you are setting up for a double-backward), each function’s execution during backward is given a nonzero, useful`seq=<N>`

. Those functions may themselves create Function objects to be executed later during double-backward, just as the original functions in the forward pass did. The relationship between backward and double-backward is conceptually the same as the relationship between forward and backward: The functions still emit current-sequence-number-tagged ranges, the Function objects they create still stash those sequence numbers, and during the eventual double-backward, the Function objects’`apply()`

ranges are still tagged with`stashed seq`

numbers, which can be compared to seq numbers from the backward pass.

-
*class*torch.autograd.profiler.emit_itt(*enabled=True*,*record_shapes=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/profiler.py#L923)[#](#torch.autograd.profiler.emit_itt) Context manager that makes every autograd operation emit an ITT range.

It is useful when running the program under Intel(R) VTune Profiler:

vtune <--vtune-flags> <regular command here>

The Instrumentation and Tracing Technology (ITT) API enables your application to generate and control the collection of trace data during its execution across different Intel tools. This context manager is to annotate Intel(R) VTune Profiling trace. With help of this context manager, you will be able to see labeled ranges in Intel(R) VTune Profiler GUI.

- Parameters:
**enabled**(*bool**,**optional*) – Setting`enabled=False`

makes this context manager a no-op. Default:`True`

.**record_shapes**(*bool**,**optional*) – If`record_shapes=True`

, the itt range wrapping each autograd op will append information about the sizes of Tensor arguments received by that op, in the following format:`[[arg0.size(0), arg0.size(1), ...], [arg1.size(0), arg1.size(1), ...], ...]`

Non-tensor arguments will be represented by`[]`

. Arguments will be listed in the order they are received by the backend op. Please note that this order may not match the order in which those arguments were passed on the Python side. Also note that shape recording may increase the overhead of itt range creation. Default:`False`



Example

>>> with torch.autograd.profiler.emit_itt(): ... model(x)


Open an nvprof trace file and parses autograd annotations. |

## Debugging and anomaly detection[#](#debugging-and-anomaly-detection)

-
*class*torch.autograd.detect_anomaly(*check_nan=True*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/anomaly_mode.py#L12)[#](#torch.autograd.detect_anomaly) Context-manager that enable anomaly detection for the autograd engine.

This does two things:

Running the forward pass with detection enabled will allow the backward pass to print the traceback of the forward operation that created the failing backward function.

If

`check_nan`

is`True`

, any backward computation that generate “nan” value will raise an error. Default`True`

.

Warning

This mode should be enabled only for debugging as the different tests will slow down your program execution.

Example

>>> import torch >>> from torch import autograd >>> class MyFunc(autograd.Function): ... @staticmethod ... def forward(ctx, inp): ... return inp.clone() ... ... @staticmethod ... def backward(ctx, gO): ... # Error during the backward pass ... raise RuntimeError("Some error in backward") ... return gO.clone() >>> def run_fn(a): ... out = MyFunc.apply(a) ... return out.sum() >>> inp = torch.rand(10, 10, requires_grad=True) >>> out = run_fn(inp) >>> out.backward() Traceback (most recent call last): File "<stdin>", line 1, in <module> File "/your/pytorch/install/torch/_tensor.py", line 93, in backward torch.autograd.backward(self, gradient, retain_graph, create_graph) File "/your/pytorch/install/torch/autograd/__init__.py", line 90, in backward allow_unreachable=True) # allow_unreachable flag File "/your/pytorch/install/torch/autograd/function.py", line 76, in apply return self._forward_cls.backward(self, *args) File "<stdin>", line 8, in backward RuntimeError: Some error in backward >>> with autograd.detect_anomaly(): ... inp = torch.rand(10, 10, requires_grad=True) ... out = run_fn(inp) ... out.backward() Traceback of forward call that caused the error: File "tmp.py", line 53, in <module> out = run_fn(inp) File "tmp.py", line 44, in run_fn out = MyFunc.apply(a) Traceback (most recent call last): File "<stdin>", line 4, in <module> File "/your/pytorch/install/torch/_tensor.py", line 93, in backward torch.autograd.backward(self, gradient, retain_graph, create_graph) File "/your/pytorch/install/torch/autograd/__init__.py", line 90, in backward allow_unreachable=True) # allow_unreachable flag File "/your/pytorch/install/torch/autograd/function.py", line 76, in apply return self._forward_cls.backward(self, *args) File "<stdin>", line 8, in backward RuntimeError: Some error in backward


-
*class*torch.autograd.set_detect_anomaly(*mode*,*check_nan=True*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/anomaly_mode.py#L97)[#](#torch.autograd.set_detect_anomaly) Context-manager that sets the anomaly detection for the autograd engine on or off.

`set_detect_anomaly`

will enable or disable the autograd anomaly detection based on its argument`mode`

. It can be used as a context-manager or as a function.See

`detect_anomaly`

above for details of the anomaly detection behaviour.

Context-manager that enables or disables multithreaded backward. |

## Autograd graph[#](#autograd-graph)

Autograd exposes methods that allow one to inspect the graph and interpose behavior during the backward pass.

The `grad_fn`

attribute of a [ torch.Tensor](tensors.html#torch.Tensor) holds a

`torch.autograd.graph.Node`

if the tensor is the output of a operation that was recorded by autograd (i.e., grad_mode is
enabled and at least one of the inputs required gradients), or `None`

otherwise.Return the name. |
|
Return the metadata. |
|
Register a backward hook. |
|
Register a backward pre-hook. |
|
Update autograd metadata tracking whether the given Tensor was modified in place. |

Some operations need intermediary results to be saved during the forward pass
in order to execute the backward pass.
These intermediary results are saved as attributes on the `grad_fn`

and can be accessed.
For example:

```
>>> a = torch.tensor([0., 0., 0.], requires_grad=True)
>>> b = a.exp()
>>> print(isinstance(b.grad_fn, torch.autograd.graph.Node))
True
>>> print(dir(b.grad_fn))
['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '_raw_saved_result', '_register_hook_dict', '_saved_result', 'metadata', 'name', 'next_functions', 'register_hook', 'register_prehook', 'requires_grad']
>>> print(torch.allclose(b.grad_fn._saved_result, b))
True
```

You can also define how these saved tensors should be packed / unpacked using hooks.
A common application is to trade compute for memory by saving those intermediary results
to disk or to CPU instead of leaving them on the GPU. This is especially useful if you
notice your model fits on GPU during evaluation, but not training.
Also see [Hooks for saved tensors](notes/autograd.html#saved-tensors-hooks-doc).

-
*class*torch.autograd.graph.saved_tensors_hooks(*pack_hook*,*unpack_hook*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/graph.py#L263)[#](#torch.autograd.graph.saved_tensors_hooks) Context-manager that sets a pair of pack / unpack hooks for saved tensors.

Use this context-manager to define how intermediary results of an operation should be packed before saving, and unpacked on retrieval.

In that context, the

`pack_hook`

function will be called every time an operation saves a tensor for backward (this includes intermediary results saved using`save_for_backward()`

but also those recorded by a PyTorch-defined operation). The output of`pack_hook`

is then stored in the computation graph instead of the original tensor.The

`unpack_hook`

is called when the saved tensor needs to be accessed, namely when executingor`torch.Tensor.backward()`

. It takes as argument the`torch.autograd.grad()`

*packed*object returned by`pack_hook`

and should return a tensor which has the same content as the original tensor (passed as input to the corresponding`pack_hook`

).The hooks should have the following signatures:

pack_hook(tensor: Tensor) -> Any

unpack_hook(Any) -> Tensor

where the return value of

`pack_hook`

is a valid input to`unpack_hook`

.In general, you want

`unpack_hook(pack_hook(t))`

to be equal to`t`

in terms of value, size, dtype and device.Example:

>>> def pack_hook(x): ... print("Packing", x) ... return x.detach() >>> >>> def unpack_hook(x): ... print("Unpacking", x) ... return x >>> >>> a = torch.ones(5, requires_grad=True) >>> b = torch.ones(5, requires_grad=True) * 2 >>> with torch.autograd.graph.saved_tensors_hooks(pack_hook, unpack_hook): ... y = a * b Packing tensor([1., 1., 1., 1., 1.], requires_grad=True) Packing tensor([2., 2., 2., 2., 2.], grad_fn=<MulBackward0>) >>> y.sum().backward() Unpacking tensor([1., 1., 1., 1., 1.], requires_grad=True) Unpacking tensor([2., 2., 2., 2., 2.], grad_fn=<MulBackward0>)

Warning

Performing an inplace operation on the input to either hooks may lead to undefined behavior.

Warning

Only one pair of hooks is allowed at a time. When recursively nesting this context-manager, only the inner-most pair of hooks will be applied.

Warning

To avoid reference cycle, the return value of

`pack_hook`

cannot hold a reference to the input tensor. For example, use lambda x: x.detach() instead of lambda x: x as the pack hook.

-
*class*torch.autograd.graph.save_on_cpu(*pin_memory=False*,*device_type='cuda'*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/graph.py#L347)[#](#torch.autograd.graph.save_on_cpu) Context manager under which tensors saved by the forward pass will be stored on cpu, then retrieved for backward.

When performing operations within this context manager, intermediary results saved in the graph during the forward pass will be moved to CPU, then copied back to the original device when needed for the backward pass. If the graph was already on CPU, no tensor copy is performed.

Use this context-manager to trade compute for GPU memory usage (e.g. when your model doesn’t fit in GPU memory during training).

- Parameters:
**pin_memory**() – If*bool*`True`

tensors will be saved to CPU pinned memory during packing and copied to GPU asynchronously during unpacking. Defaults to`False`

. Also see[Use pinned memory buffers](notes/cuda.html#cuda-memory-pinning).

Example:

>>> a = torch.randn(5, requires_grad=True, device="cuda") >>> b = torch.randn(5, requires_grad=True, device="cuda") >>> c = torch.randn(5, requires_grad=True, device="cuda") >>> >>> def f(a, b, c): ... prod_1 = a * b # a and b are saved on GPU ... with torch.autograd.graph.save_on_cpu(): ... prod_2 = prod_1 * c # prod_1 and c are saved on CPU ... y = prod_2 * a # prod_2 and a are saved on GPU ... return y >>> >>> y = f(a, b, c) >>> del a, b, c # for illustration only >>> # the content of a, b, and prod_2 are still alive on GPU >>> # the content of prod_1 and c only live on CPU >>> y.sum().backward() # all CPU tensors are moved back to GPU, for backward >>> # all intermediary tensors are released (deleted) after the call to backward


-
*class*torch.autograd.graph.disable_saved_tensors_hooks(*error_message*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/graph.py#L410)[#](#torch.autograd.graph.disable_saved_tensors_hooks) Context-manager that disables the saved tensors default hooks feature.

Useful for if you are creating a feature that does not work with saved tensors default hooks.

- Parameters:
**error_message**() – When saved tensors default hooks are used when they have been are disabled, a RuntimeError with this error message gets raised.*str*- Return type:
[None, None, None]*Generator*

Example:

>>> message = "saved tensors default hooks are disabled" >>> with torch.autograd.graph.disable_saved_tensors_hooks(message): ... # Raises RuntimeError: saved tensors default hooks are disabled ... with torch.autograd.graph.save_on_cpu(): ... pass


-
*class*torch.autograd.graph.register_multi_grad_hook(*tensors*,*fn*,***,*mode='all'*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/graph.py#L470)[#](#torch.autograd.graph.register_multi_grad_hook) Register a multi-grad backward hook.

There are two supported modes:

`"all"`

and`"any"`

.Under the

`"all"`

mode, the hook will be called after gradients with respect to every tensor in`tensors`

have been computed. If a tensor is in`tensors`

but is not part of the graph, or if a tensor is not needed to compute the gradients for any`inputs`

specified for the current`.backward()`

or`.grad()`

call, this tensor will be ignored and the hook will not wait for its gradient to be computed.After every non-ignored tensor’s gradient has been computed,

`fn`

will be called with those gradients.`None`

will be passed for tensors that did not have their gradients computed.Under the

`"any"`

mode, the hook will be called after the first gradient with respect to a tensor in`tensors`

has been computed. The hook will be called with that gradient as its argument.The hook should not modify its arguments.

This function returns a handle with a method

`handle.remove()`

that removes the hook.Note

See

[Backward Hooks execution](notes/autograd.html#backward-hooks-execution)for more information on how when this hook is executed, and how its execution is ordered relative to other hooks.Example:

>>> import torch >>> >>> a = torch.rand(2, 3, requires_grad=True) >>> b = torch.rand(2, 3, requires_grad=True) >>> c = a * b >>> d = a * b >>> >>> def fn(grads): ... print([g is not None for g in grads]) ... >>> torch.autograd.graph.register_multi_grad_hook((a, b, c, d), fn) >>> >>> c.sum().backward(retain_graph=True) [True, True, True, False] >>> c.sum().backward(inputs=(a,), retain_graph=True) [True, False, True, False] >>>

- Return type:
*RemovableHandle*


-
*class*torch.autograd.graph.allow_mutation_on_saved_tensors[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/graph.py#L762)[#](#torch.autograd.graph.allow_mutation_on_saved_tensors) Context manager under which mutating tensors saved for backward is allowed.

Under this context manager, tensors saved for backward are cloned on mutation, so the original version can still be used during backward. Normally, mutating a tensor saved for backward will result in an error raised when it’s used during backward.

To ensure the correct behavior, both the forward and backward should be run under the same context manager.

- Returns:
An _AllowMutationOnSavedContext object storing the state managed by this context manager. This object can be useful for debugging purposes. The state managed by the context manager is automatically cleared upon exiting.

- Return type:
[*Generator**_AllowMutationOnSavedContext*, None, None]

Example:

>>> import torch >>> with torch.autograd.graph.allow_mutation_on_saved_tensors(): ... # forward ... a = torch.ones(2, 3, requires_grad=True) ... b = a.clone() ... out = (b**2).sum() ... b.sin_() ... # backward ... out.sum().backward() ... tensor([[0.8415, 0.8415, 0.8415], [0.8415, 0.8415, 0.8415]], grad_fn=<SinBackward0>)


-
*class*torch.autograd.graph.GradientEdge(*node*,*output_nr*,*ownership_token=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/graph.py#L200)[#](#torch.autograd.graph.GradientEdge) Object representing a given gradient edge within the autograd graph.

To get the gradient edge where a given Tensor gradient will be computed, you can do

`edge = autograd.graph.get_gradient_edge(tensor)`

.

-
torch.autograd.graph.get_gradient_edge(
*tensor*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/graph.py#L214)[#](#torch.autograd.graph.get_gradient_edge) Get the gradient edge for computing the gradient of the given Tensor.

In particular, it is equivalent to call

`g = autograd.grad(loss, input)`

and`g = autograd.grad(loss, get_gradient_edge(input))`

.- Return type:


-
torch.autograd.graph.set_warn_on_accumulate_grad_stream_mismatch(
*enabled*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/autograd/graph.py#L446)[#](#torch.autograd.graph.set_warn_on_accumulate_grad_stream_mismatch) Whether to warn when the AccumulateGrad node’s stream does not match the stream of the node that produced the incoming gradient.

---

## Source: https://pytorch.org/docs/stable/library.html

# torch.library[#](#module-torch.library)

Created On: Jun 13, 2022 | Last Updated On: Aug 13, 2025

torch.library is a collection of APIs for extending PyTorch’s core library of operators. It contains utilities for testing custom operators, creating new custom operators, and extending operators defined with PyTorch’s C++ operator registration APIs (e.g. aten operators).

For a detailed guide on effectively using these APIs, please see
[PyTorch Custom Operators Landing Page](https://pytorch.org/tutorials/advanced/custom_ops_landing_page.html)
for more details on how to effectively use these APIs.

## Testing custom ops[#](#testing-custom-ops)

Use [ torch.library.opcheck()](#torch.library.opcheck) to test custom ops for incorrect usage of the
Python torch.library and/or C++ TORCH_LIBRARY APIs. Also, if your operator supports
training, use

[to test that the gradients are mathematically correct.](autograd.html#module-torch.autograd.gradcheck)

`torch.autograd.gradcheck()`

-
torch.library.opcheck(
*op*,*args*,*kwargs=None*,***,*test_utils=('test_schema', 'test_autograd_registration', 'test_faketensor', 'test_aot_dispatch_dynamic')*,*raise_exception=True*,*atol=None*,*rtol=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L1632)[#](#torch.library.opcheck) Given an operator and some sample arguments, tests if the operator is registered correctly.

That is, when you use the torch.library/TORCH_LIBRARY APIs to create a custom op, you specified metadata (e.g. mutability info) about the custom op and these APIs require that the functions you pass them satisfy certain properties (e.g. no data pointer access in the fake/meta/abstract kernel)

`opcheck`

tests these metadata and properties.Concretely, we test the following:

test_schema: If the schema matches the implementation of the operator. For example: if the schema specifies a Tensor is mutated, then we check the implementation mutates the Tensor. If the schema specifies that we return a new Tensor, then we check that the implementation returns a new Tensor (instead of an existing one or a view of an existing one).

test_autograd_registration: If the operator supports training (autograd): we check that its autograd formula is registered via torch.library.register_autograd or a manual registration to one or more DispatchKey::Autograd keys. Any other DispatchKey-based registrations may lead to undefined behavior.

test_faketensor: If the operator has a FakeTensor kernel (and if it is correct). The FakeTensor kernel is necessary ( but not sufficient) for the operator to work with PyTorch compilation APIs (torch.compile/export/FX). We check that a FakeTensor kernel (also sometimes known as a meta kernel) was registered for the operator and that it is correct. This test takes the result of running the operator on real tensors and the result of running the operator on FakeTensors and checks that they have the same Tensor metadata (sizes/strides/dtype/device/etc).

test_aot_dispatch_dynamic: If the operator has correct behavior with PyTorch compilation APIs (torch.compile/export/FX). This checks that the outputs (and gradients, if applicable) are the same under eager-mode PyTorch and torch.compile. This test is a superset of

`test_faketensor`

and is an e2e test; other things it tests are that the operator supports functionalization and that the backward pass (if it exists) also supports FakeTensor and functionalization.

For best results, please call

`opcheck`

multiple times with a representative set of inputs. If your operator supports autograd, please use`opcheck`

with inputs with`requires_grad = True`

; if your operator supports multiple devices (e.g. CPU and CUDA), please use`opcheck`

with inputs on all supported devices.- Parameters:
**op**(*OpOverload**|**OpOverloadPacket**|*) – The operator. Must either be a function decorated with*CustomOpDef*or an OpOverload/OpOverloadPacket found in torch.ops.* (e.g. torch.ops.aten.sin, torch.ops.mylib.foo)`torch.library.custom_op()`

**test_utils**(*str**|**Sequence**[**str**]*) – Tests that we should run. Default: all of them. Example: (“test_schema”, “test_faketensor”)**raise_exception**() – If we should raise an exception on the first error. If False, we will return a dict with information on if each test passed or not.*bool***rtol**(*Optional**[**float**]*) – Relative tolerance for floating point comparisons. If specified`atol`

must also be specified. If omitted, default values based on the`dtype`

are selected (see the table in).`torch.testing.assert_close()`

**atol**(*Optional**[**float**]*) – Absolute tolerance for floating point comparisons. If specified`rtol`

must also be specified. If omitted, default values based on the`dtype`

are selected (see the table in).`torch.testing.assert_close()`


- Return type:

Warning

opcheck and

test different things; opcheck tests if your usage of torch.library APIs is correct while`torch.autograd.gradcheck()`

tests if your autograd formula is mathematically correct. Use both to test custom ops that support gradient computation.`torch.autograd.gradcheck()`

Example

>>> @torch.library.custom_op("mylib::numpy_mul", mutates_args=()) >>> def numpy_mul(x: Tensor, y: float) -> Tensor: >>> x_np = x.numpy(force=True) >>> z_np = x_np * y >>> return torch.from_numpy(z_np).to(x.device) >>> >>> @numpy_mul.register_fake >>> def _(x, y): >>> return torch.empty_like(x) >>> >>> def setup_context(ctx, inputs, output): >>> y, = inputs >>> ctx.y = y >>> >>> def backward(ctx, grad): >>> return grad * ctx.y, None >>> >>> numpy_mul.register_autograd(backward, setup_context=setup_context) >>> >>> sample_inputs = [ >>> (torch.randn(3), 3.14), >>> (torch.randn(2, 3, device='cuda'), 2.718), >>> (torch.randn(1, 10, requires_grad=True), 1.234), >>> (torch.randn(64, 64, device='cuda', requires_grad=True), 90.18), >>> ] >>> >>> for args in sample_inputs: >>> torch.library.opcheck(numpy_mul, args)


## Creating new custom ops in Python[#](#creating-new-custom-ops-in-python)

Use [ torch.library.custom_op()](#torch.library.custom_op) to create new custom ops.

-
torch.library.custom_op(
*name*,*fn=None*,*/*,***,*mutates_args*,*device_types=None*,*schema=None*,*tags=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/_library/custom_ops.py#L50)[#](#torch.library.custom_op) Wraps a function into custom operator.

Reasons why you may want to create a custom op include: - Wrapping a third-party library or custom kernel to work with PyTorch subsystems like Autograd. - Preventing torch.compile/export/FX tracing from peeking inside your function.

This API is used as a decorator around a function (please see examples). The provided function must have type hints; these are needed to interface with PyTorch’s various subsystems.

- Parameters:
**name**() – A name for the custom op that looks like “{namespace}::{name}”, e.g. “mylib::my_linear”. The name is used as the op’s stable identifier in PyTorch subsystems (e.g. torch.export, FX graphs). To avoid name collisions, please use your project name as the namespace; e.g. all custom ops in pytorch/fbgemm use “fbgemm” as the namespace.*str***mutates_args**(*Iterable**[**str**] or**"unknown"*) – The names of args that the function mutates. This MUST be accurate, otherwise, the behavior is undefined. If “unknown”, it pessimistically assumes that all inputs to the operator are being mutated.**device_types**(*str**|**None**|**Sequence**[**str**]*) – The device type(s) the function is valid for. If no device type is provided, then the function is used as the default implementation for all device types. Examples: “cpu”, “cuda”. When registering a device-specific implementation for an operator that accepts no Tensors, we require the operator to have a “device: torch.device argument”.**schema**(*str**|**None*) – A schema string for the operator. If None (recommended) we’ll infer a schema for the operator from its type annotations. We recommend letting us infer a schema unless you have a specific reason not to. Example: “(Tensor x, int y) -> (Tensor, Tensor)”.

- Return type:
[[*Callable*[[…],*Callable*[object](https://docs.python.org/3/library/functions.html#object)]],[CustomOpDef](#torch._library.custom_ops.CustomOpDef)] |*CustomOpDef*

Note

We recommend not passing in a

`schema`

arg and instead letting us infer it from the type annotations. It is error-prone to write your own schema. You may wish to provide your own schema if our interpretation of the type annotation is not what you want. For more info on how to write a schema string, see[here](https://github.com/pytorch/pytorch/blob/main/aten/src/ATen/native/README.md#func)- Examples::
>>> import torch >>> from torch import Tensor >>> from torch.library import custom_op >>> import numpy as np >>> >>> @custom_op("mylib::numpy_sin", mutates_args=()) >>> def numpy_sin(x: Tensor) -> Tensor: >>> x_np = x.cpu().numpy() >>> y_np = np.sin(x_np) >>> return torch.from_numpy(y_np).to(device=x.device) >>> >>> x = torch.randn(3) >>> y = numpy_sin(x) >>> assert torch.allclose(y, x.sin()) >>> >>> # Example of a custom op that only works for one device type. >>> @custom_op("mylib::numpy_sin_cpu", mutates_args=(), device_types="cpu") >>> def numpy_sin_cpu(x: Tensor) -> Tensor: >>> x_np = x.numpy() >>> y_np = np.sin(x_np) >>> return torch.from_numpy(y_np) >>> >>> x = torch.randn(3) >>> y = numpy_sin_cpu(x) >>> assert torch.allclose(y, x.sin()) >>> >>> # Example of a custom op that mutates an input >>> @custom_op("mylib::numpy_sin_inplace", mutates_args={"x"}, device_types="cpu") >>> def numpy_sin_inplace(x: Tensor) -> None: >>> x_np = x.numpy() >>> np.sin(x_np, out=x_np) >>> >>> x = torch.randn(3) >>> expected = x.sin() >>> numpy_sin_inplace(x) >>> assert torch.allclose(x, expected) >>> >>> # Example of a factory function >>> @torch.library.custom_op("mylib::bar", mutates_args={}, device_types="cpu") >>> def bar(device: torch.device) -> Tensor: >>> return torch.ones(3) >>> >>> bar("cpu")



-
torch.library.triton_op(
*name*,*fn=None*,*/*,***,*mutates_args*,*schema=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/_library/triton.py#L296)[#](#torch.library.triton_op) Create a custom operator whose implementation is backed by 1+ triton kernels.

This is a more structured way of using triton kernels with PyTorch. Prefer using triton kernels with no

`torch.library`

custom operator wrappers (like,`torch.library.custom_op()`

) because that is simpler; only use`torch.library.triton_op()`

/`torch.library.custom_op()`

if you want to create an operator that behaves like PyTorch built-in operators. For example, you may use a`torch.library.triton_op()`

`torch.library`

wrapper API to define the behavior of the triton kernel when passed a tensor subclass or under a TorchDispatchMode.Use

instead of`torch.library.triton_op()`

when the implementation consists of 1+ triton kernels.`torch.library.custom_op()`

treats custom operators as opaque (`torch.library.custom_op()`

and`torch.compile()`

will never trace into them), but`torch.export.export()`

`triton_op`

makes the implementation visible to these subsystems, allowing them to optimize the triton kernel(s).Note that

`fn`

must only consist of calls to PyTorch-understood operators and triton kernels. Any triton kernels called inside`fn`

must be wrapped in a call to.`torch.library.wrap_triton()`

- Parameters:
**name**() – A name for the custom op that looks like “{namespace}::{name}”, e.g. “mylib::my_linear”. The name is used as the op’s stable identifier in PyTorch subsystems (e.g. torch.export, FX graphs). To avoid name collisions, please use your project name as the namespace; e.g. all custom ops in pytorch/fbgemm use “fbgemm” as the namespace.*str***mutates_args**(*Iterable**[**str**] or**"unknown"*) – The names of args that the function mutates. This MUST be accurate, otherwise, the behavior is undefined. If “unknown”, it pessimistically assumes that all inputs to the operator are being mutated.**schema**(*str**|**None*) – A schema string for the operator. If None (recommended) we’ll infer a schema for the operator from its type annotations. We recommend letting us infer a schema unless you have a specific reason not to. Example: “(Tensor x, int y) -> (Tensor, Tensor)”.

- Return type:

Example:

>>> import torch >>> from torch.library import triton_op, wrap_triton >>> >>> import triton >>> from triton import language as tl >>> >>> @triton.jit >>> def add_kernel( >>> in_ptr0, >>> in_ptr1, >>> out_ptr, >>> n_elements, >>> BLOCK_SIZE: "tl.constexpr", >>> ): >>> pid = tl.program_id(axis=0) >>> block_start = pid * BLOCK_SIZE >>> offsets = block_start + tl.arange(0, BLOCK_SIZE) >>> mask = offsets < n_elements >>> x = tl.load(in_ptr0 + offsets, mask=mask) >>> y = tl.load(in_ptr1 + offsets, mask=mask) >>> output = x + y >>> tl.store(out_ptr + offsets, output, mask=mask) >>> >>> @triton_op("mylib::add", mutates_args={}) >>> def add(x: torch.Tensor, y: torch.Tensor) -> torch.Tensor: >>> output = torch.empty_like(x) >>> n_elements = output.numel() >>> >>> def grid(meta): >>> return (triton.cdiv(n_elements, meta["BLOCK_SIZE"]),) >>> >>> # NB: we need to wrap the triton kernel in a call to wrap_triton >>> wrap_triton(add_kernel)[grid](x, y, output, n_elements, 16) >>> return output >>> >>> @torch.compile >>> def f(x, y): >>> return add(x, y) >>> >>> x = torch.randn(3, device="cuda") >>> y = torch.randn(3, device="cuda") >>> >>> z = f(x, y) >>> assert torch.allclose(z, x + y)


-
torch.library.wrap_triton(
*triton_kernel*,*/*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/_library/triton.py#L503)[#](#torch.library.wrap_triton) Allows capture of a triton kernel into a graph via make_fx or non-strict

`torch.export`

.These technologies perform Dispatcher-based tracing (via

`__torch_dispatch__`

) and cannot see calls to raw triton kernels. The`wrap_triton`

API wraps a triton kernel into a callable that can actually be traced into a graph.Please use this API together with

.`torch.library.triton_op()`

Examples

>>> import torch >>> import triton >>> from triton import language as tl >>> from torch.fx.experimental.proxy_tensor import make_fx >>> from torch.library import wrap_triton >>> >>> @triton.jit >>> def add_kernel( >>> in_ptr0, >>> in_ptr1, >>> out_ptr, >>> n_elements, >>> BLOCK_SIZE: "tl.constexpr", >>> ): >>> pid = tl.program_id(axis=0) >>> block_start = pid * BLOCK_SIZE >>> offsets = block_start + tl.arange(0, BLOCK_SIZE) >>> mask = offsets < n_elements >>> x = tl.load(in_ptr0 + offsets, mask=mask) >>> y = tl.load(in_ptr1 + offsets, mask=mask) >>> output = x + y >>> tl.store(out_ptr + offsets, output, mask=mask) >>> >>> def add(x, y): >>> output = torch.empty_like(x) >>> n_elements = output.numel() >>> >>> def grid_fn(meta): >>> return (triton.cdiv(n_elements, meta["BLOCK_SIZE"]),) >>> >>> wrap_triton(add_kernel)[grid_fn](x, y, output, n_elements, 16) >>> return output >>> >>> x = torch.randn(3, device="cuda") >>> y = torch.randn(3, device="cuda") >>> gm = make_fx(add)(x, y) >>> print(gm.code) >>> # def forward(self, x_1, y_1): >>> # empty_like = torch.ops.aten.empty_like.default(x_1, pin_memory = False) >>> # triton_kernel_wrapper_mutation_proxy = triton_kernel_wrapper_mutation( >>> # kernel_idx = 0, constant_args_idx = 0, >>> # grid = [(1, 1, 1)], kwargs = { >>> # 'in_ptr0': x_1, 'in_ptr1': y_1, 'out_ptr': empty_like, >>> # 'n_elements': 3, 'BLOCK_SIZE': 16 >>> # }) >>> # return empty_like

- Return type:


## Extending custom ops (created from Python or C++)[#](#extending-custom-ops-created-from-python-or-c)

Use the `register.*`

methods, such as [ torch.library.register_kernel()](#torch.library.register_kernel) and

[, to add implementations for any operators (they may have been created using](#torch.library.register_fake)

`torch.library.register_fake()`

[or via PyTorch’s C++ operator registration APIs).](#torch.library.custom_op)

`torch.library.custom_op()`

-
torch.library.register_kernel(
*op*,*device_types*,*func=None*,*/*,***,*lib=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L795)[#](#torch.library.register_kernel) Register an implementation for a device type for this operator.

Some valid device_types are: “cpu”, “cuda”, “xla”, “mps”, “ipu”, “xpu”. This API may be used as a decorator.

- Parameters:
**op**(*str**|**OpOverload*) – The operator to register an impl to.**device_types**(*str**|**None**|**Sequence**[**str**]*) – The device_types to register an impl to. If None, we will register to all device types – please only use this option if your implementation is truly device-type-agnostic.**func**(*Callable*) – The function to register as the implementation for the given device types.**lib**(*Optional**[**Library**]*) – If provided, the lifetime of this registration


- Examples::
>>> import torch >>> from torch import Tensor >>> from torch.library import custom_op >>> import numpy as np >>> >>> # Create a custom op that works on cpu >>> @custom_op("mylib::numpy_sin", mutates_args=(), device_types="cpu") >>> def numpy_sin(x: Tensor) -> Tensor: >>> x_np = x.numpy() >>> y_np = np.sin(x_np) >>> return torch.from_numpy(y_np) >>> >>> # Add implementations for the cuda device >>> @torch.library.register_kernel("mylib::numpy_sin", "cuda") >>> def _(x): >>> x_np = x.cpu().numpy() >>> y_np = np.sin(x_np) >>> return torch.from_numpy(y_np).to(device=x.device) >>> >>> x_cpu = torch.randn(3) >>> x_cuda = x_cpu.cuda() >>> assert torch.allclose(numpy_sin(x_cpu), x_cpu.sin()) >>> assert torch.allclose(numpy_sin(x_cuda), x_cuda.sin())



-
torch.library.register_autocast(
*op*,*device_type*,*cast_inputs*,*/*,***,*lib=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L864)[#](#torch.library.register_autocast) Register an autocast dispatch rule for this custom op.

Valid device_type include: “cpu” and “cuda”.

- Parameters:
**op**(*str**|**OpOverload*) – The operator to register an autocast dispatch rule to.**device_type**() – Device type to use. ‘cuda’ or ‘cpu’. The type is the same as the type attribute of a*str*. Thus, you may obtain the device type of a tensor using Tensor.device.type.`torch.device`

**cast_inputs**() – When custom op runs in an autocast-enabled region, casts incoming floating-point Tensors to the target dtype (non-floating-point Tensors are not affected), then executes custom op with autocast disabled.`torch.dtype`

**lib**(*Optional**[**Library**]*) – If provided, the lifetime of this registration


- Examples::
>>> import torch >>> from torch import Tensor >>> from torch.library import custom_op >>> >>> # Create a custom op that works on cuda >>> @torch.library.custom_op("mylib::my_sin", mutates_args=()) >>> def my_sin(x: Tensor) -> Tensor: >>> return torch.sin(x) >>> >>> # Register autocast dispatch rule for the cuda device >>> torch.library.register_autocast("mylib::my_sin", "cuda", torch.float16) >>> >>> x = torch.randn(3, dtype=torch.float32, device="cuda") >>> with torch.autocast("cuda", dtype=torch.float16): >>> y = torch.ops.mylib.my_sin(x) >>> assert y.dtype == torch.float16



-
torch.library.register_autograd(
*op*,*backward*,*/*,***,*setup_context=None*,*lib=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L1138)[#](#torch.library.register_autograd) Register a backward formula for this custom op.

In order for an operator to work with autograd, you need to register a backward formula: 1. You must tell us how to compute gradients during the backward pass by providing us a “backward” function. 2. If you need any values from the forward to compute gradients, you can use setup_context to save values for backward.

`backward`

runs during the backward pass. It accepts`(ctx, *grads)`

: -`grads`

is one or more gradients. The number of gradients matches the number of outputs of the operator. The`ctx`

object is[the same ctx object](context_method_mixins)used by. The semantics of`torch.autograd.Function`

`backward_fn`

are the same as.`torch.autograd.Function.backward()`

`setup_context(ctx, inputs, output)`

runs during the forward pass. Please save quantities needed for backward onto the`ctx`

object via eitheror assigning them as attributes of`torch.autograd.function.FunctionCtx.save_for_backward()`

`ctx`

. If your custom op has kwarg-only arguments, we expect the signature of`setup_context`

to be`setup_context(ctx, inputs, keyword_only_inputs, output)`

.Both

`setup_context_fn`

and`backward_fn`

must be traceable. That is, they may not directly accessand they must not depend on or mutate global state. If you need a non-traceable backward, you can make it a separate custom_op that you call inside`torch.Tensor.data_ptr()`

`backward_fn`

.If you need different autograd behavior on different devices, then we recommend creating two different custom operators, one for each device that needs different behavior, and switching between them at runtime.

Examples

>>> import torch >>> import numpy as np >>> from torch import Tensor >>> >>> @torch.library.custom_op("mylib::numpy_sin", mutates_args=()) >>> def numpy_sin(x: Tensor) -> Tensor: >>> x_np = x.cpu().numpy() >>> y_np = np.sin(x_np) >>> return torch.from_numpy(y_np).to(device=x.device) >>> >>> def setup_context(ctx, inputs, output) -> Tensor: >>> x, = inputs >>> ctx.save_for_backward(x) >>> >>> def backward(ctx, grad): >>> x, = ctx.saved_tensors >>> return grad * x.cos() >>> >>> torch.library.register_autograd( ... "mylib::numpy_sin", backward, setup_context=setup_context ... ) >>> >>> x = torch.randn(3, requires_grad=True) >>> y = numpy_sin(x) >>> (grad_x,) = torch.autograd.grad(y, x, torch.ones_like(y)) >>> assert torch.allclose(grad_x, x.cos()) >>> >>> # Example with a keyword-only arg >>> @torch.library.custom_op("mylib::numpy_mul", mutates_args=()) >>> def numpy_mul(x: Tensor, *, val: float) -> Tensor: >>> x_np = x.cpu().numpy() >>> y_np = x_np * val >>> return torch.from_numpy(y_np).to(device=x.device) >>> >>> def setup_context(ctx, inputs, keyword_only_inputs, output) -> Tensor: >>> ctx.val = keyword_only_inputs["val"] >>> >>> def backward(ctx, grad): >>> return grad * ctx.val >>> >>> torch.library.register_autograd( ... "mylib::numpy_mul", backward, setup_context=setup_context ... ) >>> >>> x = torch.randn(3, requires_grad=True) >>> y = numpy_mul(x, val=3.14) >>> (grad_x,) = torch.autograd.grad(y, x, torch.ones_like(y)) >>> assert torch.allclose(grad_x, torch.full_like(x, 3.14))


-
torch.library.register_fake(
*op*,*func=None*,*/*,***,*lib=None*,*_stacklevel=1*,*allow_override=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L962)[#](#torch.library.register_fake) Register a FakeTensor implementation (“fake impl”) for this operator.

Also sometimes known as a “meta kernel”, “abstract impl”.

An “FakeTensor implementation” specifies the behavior of this operator on Tensors that carry no data (“FakeTensor”). Given some input Tensors with certain properties (sizes/strides/storage_offset/device), it specifies what the properties of the output Tensors are.

The FakeTensor implementation has the same signature as the operator. It is run for both FakeTensors and meta tensors. To write a FakeTensor implementation, assume that all Tensor inputs to the operator are regular CPU/CUDA/Meta tensors, but they do not have storage, and you are trying to return regular CPU/CUDA/Meta tensor(s) as output. The FakeTensor implementation must consist of only PyTorch operations (and may not directly access the storage or data of any input or intermediate Tensors).

This API may be used as a decorator (see examples).

For a detailed guide on custom ops, please see

[https://pytorch.org/tutorials/advanced/custom_ops_landing_page.html](https://pytorch.org/tutorials/advanced/custom_ops_landing_page.html)- Parameters:
**op_name**– Operator name (along with the overload) or OpOverload object.**func**(*Callable**|**None*) – Fake tensor implementation.**lib**(*Optional**[**Library**]*) – Library to register the fake tensor to.**allow_override**() – Flag controlling if we want to override an existing registered fake impl. This is by default off, and will error you’re trying to register a fake impl to an operator that already has a fake impl. This also only applies if the custom operator was not created via torch.library.custom_op, as overriding and existing fake impl is already allowed.*bool*


Examples

>>> import torch >>> import numpy as np >>> from torch import Tensor >>> >>> # Example 1: an operator without data-dependent output shape >>> @torch.library.custom_op("mylib::custom_linear", mutates_args=()) >>> def custom_linear(x: Tensor, weight: Tensor, bias: Tensor) -> Tensor: >>> raise NotImplementedError("Implementation goes here") >>> >>> @torch.library.register_fake("mylib::custom_linear") >>> def _(x, weight, bias): >>> assert x.dim() == 2 >>> assert weight.dim() == 2 >>> assert bias.dim() == 1 >>> assert x.shape[1] == weight.shape[1] >>> assert weight.shape[0] == bias.shape[0] >>> assert x.device == weight.device >>> >>> return (x @ weight.t()) + bias >>> >>> with torch._subclasses.fake_tensor.FakeTensorMode(): >>> x = torch.randn(2, 3) >>> w = torch.randn(3, 3) >>> b = torch.randn(3) >>> y = torch.ops.mylib.custom_linear(x, w, b) >>> >>> assert y.shape == (2, 3) >>> >>> # Example 2: an operator with data-dependent output shape >>> @torch.library.custom_op("mylib::custom_nonzero", mutates_args=()) >>> def custom_nonzero(x: Tensor) -> Tensor: >>> x_np = x.numpy(force=True) >>> res = np.stack(np.nonzero(x_np), axis=1) >>> return torch.tensor(res, device=x.device) >>> >>> @torch.library.register_fake("mylib::custom_nonzero") >>> def _(x): >>> # Number of nonzero-elements is data-dependent. >>> # Since we cannot peek at the data in an fake impl, >>> # we use the ctx object to construct a new symint that >>> # represents the data-dependent size. >>> ctx = torch.library.get_ctx() >>> nnz = ctx.new_dynamic_size() >>> shape = [nnz, x.dim()] >>> result = x.new_empty(shape, dtype=torch.int64) >>> return result >>> >>> from torch.fx.experimental.proxy_tensor import make_fx >>> >>> x = torch.tensor([0, 1, 2, 3, 4, 0]) >>> trace = make_fx(torch.ops.mylib.custom_nonzero, tracing_mode="symbolic")(x) >>> trace.print_readable() >>> >>> assert torch.allclose(trace(x), torch.ops.mylib.custom_nonzero(x))


-
torch.library.register_vmap(
*op*,*func=None*,*/*,***,*lib=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L1351)[#](#torch.library.register_vmap) Register a vmap implementation to support

for this custom op.`torch.vmap()`

This API may be used as a decorator (see examples).

In order for an operator to work with

, you may need to register a vmap implementation in the following signature:`torch.vmap()`

`vmap_func(info, in_dims: Tuple[Optional[int]], *args, **kwargs)`

,where

`*args`

and`**kwargs`

are the arguments and kwargs for`op`

. We do not support kwarg-only Tensor args.It specifies how do we compute the batched version of

`op`

given inputs with an additional dimension (specified by`in_dims`

).For each arg in

`args`

,`in_dims`

has a corresponding`Optional[int]`

. It is`None`

if the arg is not a Tensor or if the arg is not being vmapped over, otherwise, it is an integer specifying what dimension of the Tensor is being vmapped over.`info`

is a collection of additional metadata that may be helpful:`info.batch_size`

specifies the size of the dimension being vmapped over, while`info.randomness`

is the`randomness`

option that was passed to.`torch.vmap()`

The return of the function

`func`

is a tuple of`(output, out_dims)`

. Similar to`in_dims`

,`out_dims`

should be of the same structure as`output`

and contain one`out_dim`

per output that specifies if the output has the vmapped dimension and what index it is in.Examples

>>> import torch >>> import numpy as np >>> from torch import Tensor >>> from typing import Tuple >>> >>> def to_numpy(tensor): >>> return tensor.cpu().numpy() >>> >>> lib = torch.library.Library("mylib", "FRAGMENT") >>> @torch.library.custom_op("mylib::numpy_cube", mutates_args=()) >>> def numpy_cube(x: Tensor) -> Tuple[Tensor, Tensor]: >>> x_np = to_numpy(x) >>> dx = torch.tensor(3 * x_np ** 2, device=x.device) >>> return torch.tensor(x_np ** 3, device=x.device), dx >>> >>> def numpy_cube_vmap(info, in_dims, x): >>> result = numpy_cube(x) >>> return result, (in_dims[0], in_dims[0]) >>> >>> torch.library.register_vmap(numpy_cube, numpy_cube_vmap) >>> >>> x = torch.randn(3) >>> torch.vmap(numpy_cube)(x) >>> >>> @torch.library.custom_op("mylib::numpy_mul", mutates_args=()) >>> def numpy_mul(x: Tensor, y: Tensor) -> Tensor: >>> return torch.tensor(to_numpy(x) * to_numpy(y), device=x.device) >>> >>> @torch.library.register_vmap("mylib::numpy_mul") >>> def numpy_mul_vmap(info, in_dims, x, y): >>> x_bdim, y_bdim = in_dims >>> x = x.movedim(x_bdim, -1) if x_bdim is not None else x.unsqueeze(-1) >>> y = y.movedim(y_bdim, -1) if y_bdim is not None else y.unsqueeze(-1) >>> result = x * y >>> result = result.movedim(-1, 0) >>> return result, 0 >>> >>> >>> x = torch.randn(3) >>> y = torch.randn(3) >>> torch.vmap(numpy_mul)(x, y)

Note

The vmap function should aim to preserve the semantics of the entire custom operator. That is,

`grad(vmap(op))`

should be replaceable with a`grad(map(op))`

.If your custom operator has any custom behavior in the backward pass, please keep this in mind.


-
torch.library.impl_abstract(
*qualname*,*func=None*,***,*lib=None*,*_stacklevel=1*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L776)[#](#torch.library.impl_abstract) This API was renamed to

in PyTorch 2.4. Please use that instead.`torch.library.register_fake()`


-
torch.library.get_ctx()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L1541)[#](#torch.library.get_ctx) get_ctx() returns the current AbstractImplCtx object.

Calling

`get_ctx()`

is only valid inside of an fake impl (seefor more usage details.`torch.library.register_fake()`

- Return type:
*FakeImplCtx*


-
torch.library.register_torch_dispatch(
*op*,*torch_dispatch_class*,*func=None*,*/*,***,*lib=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L1269)[#](#torch.library.register_torch_dispatch) Registers a torch_dispatch rule for the given operator and

`torch_dispatch_class`

.This allows for open registration to specify the behavior between the operator and the

`torch_dispatch_class`

without needing to modify the`torch_dispatch_class`

or the operator directly.The

`torch_dispatch_class`

is either a Tensor subclass with`__torch_dispatch__`

or a TorchDispatchMode.If it is a Tensor subclass, we expect

`func`

to have the following signature:`(cls, func: OpOverload, types: Tuple[type, ...], args, kwargs) -> Any`

If it is a TorchDispatchMode, we expect

`func`

to have the following signature:`(mode, func: OpOverload, types: Tuple[type, ...], args, kwargs) -> Any`

`args`

and`kwargs`

will have been normalized the same way they are in`__torch_dispatch__`

(see[__torch_dispatch__ calling convention](notes/extending.html#torch-dispatch-calling-convention)).Examples

>>> import torch >>> >>> @torch.library.custom_op("mylib::foo", mutates_args={}) >>> def foo(x: torch.Tensor) -> torch.Tensor: >>> return x.clone() >>> >>> class MyMode(torch.utils._python_dispatch.TorchDispatchMode): >>> def __torch_dispatch__(self, func, types, args=(), kwargs=None): >>> return func(*args, **kwargs) >>> >>> @torch.library.register_torch_dispatch("mylib::foo", MyMode) >>> def _(mode, func, types, args, kwargs): >>> x, = args >>> return x + 1 >>> >>> x = torch.randn(3) >>> y = foo(x) >>> assert torch.allclose(y, x) >>> >>> with MyMode(): >>> y = foo(x) >>> assert torch.allclose(y, x + 1)


-
torch.library.infer_schema(
*prototype_function*,*/*,***,*mutates_args*,*op_name=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/_library/infer_schema.py#L20)[#](#torch.library.infer_schema) Parses the schema of a given function with type hints. The schema is inferred from the function’s type hints, and can be used to define a new operator.

We make the following assumptions:

None of the outputs alias any of the inputs or each other.

- String type annotations “device, dtype, Tensor, types” without library specification areassumed to be torch.*. Similarly, string type annotations “Optional, List, Sequence, Union”without library specification are assumed to be typing.*.
- Only the args listed in
`mutates_args`

are being mutated. If`mutates_args`

is “unknown”,it assumes that all inputs to the operator are being mutates.

Callers (e.g. the custom ops API) are responsible for checking these assumptions.

- Parameters:
**prototype_function**() – The function from which to infer a schema for from its type annotations.*Callable***op_name**(*Optional**[**str**]*) – The name of the operator in the schema. If`name`

is None, then the name is not included in the inferred schema. Note that the input schema to`torch.library.Library.define`

requires a operator name.**mutates_args**(*"unknown"**|**Iterable**[**str**]*) – The arguments that are mutated in the function.

- Returns:
The inferred schema.

- Return type:

Example

>>> def foo_impl(x: torch.Tensor) -> torch.Tensor: >>> return x.sin() >>> >>> infer_schema(foo_impl, op_name="foo", mutates_args={}) foo(Tensor x) -> Tensor >>> >>> infer_schema(foo_impl, mutates_args={}) (Tensor x) -> Tensor


-
*class*torch._library.custom_ops.CustomOpDef(*namespace*,*name*,*schema*,*fn*,*tags=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/_library/custom_ops.py#L179)[#](#torch._library.custom_ops.CustomOpDef) CustomOpDef is a wrapper around a function that turns it into a custom op.

It has various methods for registering additional behavior for this custom op.

You should not instantiate CustomOpDef directly; instead, use the

API.`torch.library.custom_op()`

-
set_kernel_enabled(
*device_type*,*enabled=True*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/_library/custom_ops.py#L227)[#](#torch._library.custom_ops.CustomOpDef.set_kernel_enabled) Disable or re-enable an already registered kernel for this custom operator.

If the kernel is already disabled/enabled, this is a no-op.

Note

If a kernel is first disabled and then registered, it is disabled until enabled again.

- Parameters:

Example

>>> inp = torch.randn(1) >>> >>> # define custom op `f`. >>> @custom_op("mylib::f", mutates_args=()) >>> def f(x: Tensor) -> Tensor: >>> return torch.zeros(1) >>> >>> print(f(inp)) # tensor([0.]), default kernel >>> >>> @f.register_kernel("cpu") >>> def _(x): >>> return torch.ones(1) >>> >>> print(f(inp)) # tensor([1.]), CPU kernel >>> >>> # temporarily disable the CPU kernel >>> with f.set_kernel_enabled("cpu", enabled = False): >>> print(f(inp)) # tensor([0.]) with CPU kernel disabled


-
set_kernel_enabled(

-
torch.library.get_kernel(
*op*,*dispatch_key*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L1550)[#](#torch.library.get_kernel) Returns the computed kernel for a given operator and dispatch key.

This function retrieves the kernel that would be executed for a given operator and dispatch key combination. The returned SafeKernelFunction can be used to call the kernel in a boxed fashion. The intended use case for this function is to retrieve the original kernel for a given dispatch key and then register another kernel to the same dispatch key that calls into the original kernel for certain cases.

- Parameters:
**op**(*str**|**OpOverload**|*) – Operator name (along with the overload) or OpOverload object Can be a string (e.g., “aten::add.Tensor”), an OpOverload, or a CustomOpDef.*CustomOpDef***dispatch_key**(*str**|**torch.DispatchKey*) – The dispatch key to get the kernel for. Can be a string (e.g., “CPU”, “CUDA”) or a DispatchKey enum value.

- Returns:
- A safe kernel function that can be used to
call the kernel.


- Return type:
torch._C._SafeKernelFunction

- Raises:
– If the operator does not exist.**RuntimeError**

Example

>>> # Get the CPU kernel for torch.add >>> kernel = torch.library.get_kernel("aten::add.Tensor", "CPU") >>> >>> # You can also use DispatchKey enum >>> kernel = torch.library.get_kernel("aten::add.Tensor", torch.DispatchKey.CPU) >>> >>> # Or use an OpOverload directly >>> kernel = torch.library.get_kernel(torch.ops.aten.add.Tensor, "CPU") >>> >>> # Example: Using get_kernel in a custom op with conditional dispatch >>> # Get the original kernel for torch.sin >>> original_sin_kernel = torch.library.get_kernel("aten::sin", "CPU") >>> >>> # If input has negative values, use original sin, otherwise return zeros >>> def conditional_sin_impl(dispatch_keys, x): >>> if (x < 0).any(): >>> return original_sin_kernel.call_boxed(dispatch_keys, x) >>> else: >>> return torch.zeros_like(x) >>> >>> lib = torch.library.Library("aten", "IMPL") >>> # with_keyset=True so the first argument to the impl is the current DispatchKeySet >>> which needs to be the first argument to ``kernel.call_boxed`` >>> lib.impl("sin", conditional_sin_impl, "CPU", with_keyset=True) >>> >>> # Test the conditional behavior >>> x_positive = torch.tensor([1.0, 2.0]) >>> x_mixed = torch.tensor([-1.0, 2.0]) >>> torch.sin(x_positive) tensor([0., 0.]) >>> torch.sin(x_mixed) tensor([-0.8415, 0.9093])


## Low-level APIs[#](#low-level-apis)

The following APIs are direct bindings to PyTorch’s C++ low-level operator registration APIs.

Warning

The low-level operator registration APIs and the PyTorch Dispatcher are a complicated PyTorch concept. We recommend you use the higher level APIs above (that do not require a torch.library.Library object) when possible. [This blog post](http://blog.ezyang.com/2020/09/lets-talk-about-the-pytorch-dispatcher/) is a good starting point to learn about the PyTorch Dispatcher.

A tutorial that walks you through some examples on how to use this API is available on [Google Colab](https://colab.research.google.com/drive/1RRhSfk7So3Cn02itzLWE9K4Fam-8U011?usp=sharing).

-
*class*torch.library.Library(*ns*,*kind*,*dispatch_key=''*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L68)[#](#torch.library.Library) A class to create libraries that can be used to register new operators or override operators in existing libraries from Python. A user can optionally pass in a dispatch keyname if they only want to register kernels corresponding to only one specific dispatch key.

To create a library to override operators in an existing library (with name ns), set the kind to “IMPL”. To create a new library (with name ns) to register new operators, set the kind to “DEF”. To create a fragment of a possibly existing library to register operators (and bypass the limitation that there is only one library for a given namespace), set the kind to “FRAGMENT”.

- Parameters:
**ns**– library name**kind**– “DEF”, “IMPL”, “FRAGMENT”**dispatch_key**– PyTorch dispatch key (default: “”)


-
define(
*schema*,*alias_analysis=''*,***,*tags=()*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L129)[#](#torch.library.Library.define) Defines a new operator and its semantics in the ns namespace.

- Parameters:
**schema**– function schema to define a new operator.**alias_analysis**(*optional*) – Indicates if the aliasing properties of the operator arguments can be inferred from the schema (default behavior) or not (“CONSERVATIVE”).**tags**(*Tag**|**Sequence**[**Tag**]*) – one or more torch.Tag to apply to this operator. Tagging an operator changes the operator’s behavior under various PyTorch subsystems; please read the docs for the torch.Tag carefully before applying it.

- Returns:
name of the operator as inferred from the schema.


Example:

>>> my_lib = Library("mylib", "DEF") >>> my_lib.define("sum(Tensor self) -> Tensor")


-
fallback(
*fn*,*dispatch_key=''*,***,*with_keyset=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L373)[#](#torch.library.Library.fallback) Registers the function implementation as the fallback for the given key.

This function only works for a library with global namespace (“_”).

- Parameters:
**fn**– function used as fallback for the given dispatch key orto register a fallthrough.`fallthrough_kernel()`

**dispatch_key**– dispatch key that the input function should be registered for. By default, it uses the dispatch key that the library was created with.**with_keyset**– flag controlling if the current dispatcher call keyset should be passed as the first argument to`fn`

when calling. This should be used to create the appropriate keyset for redispatch calls.


Example:

>>> my_lib = Library("_", "IMPL") >>> def fallback_kernel(op, *args, **kwargs): >>> # Handle all autocast ops generically >>> # ... >>> my_lib.fallback(fallback_kernel, "Autocast")


-
impl(
*op_name*,*fn*,*dispatch_key=''*,***,*with_keyset=False*,*allow_override=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L285)[#](#torch.library.Library.impl) Registers the function implementation for an operator defined in the library.

- Parameters:
**op_name**– operator name (along with the overload) or OpOverload object.**fn**– function that’s the operator implementation for the input dispatch key orto register a fallthrough.`fallthrough_kernel()`

**dispatch_key**– dispatch key that the input function should be registered for. By default, it uses the dispatch key that the library was created with.**with_keyset**– flag controlling if the current dispatcher call keyset should be passed as the first argument to`fn`

when calling. This should be used to create the appropriate keyset for redispatch calls.**allow_override**– Flag controlling if we want to override an existing registered kernel implementation. This is by default off, and will error you’re trying to register a kernel to a dispatch key with a kernel already registered.


- Example::
>>> my_lib = Library("aten", "IMPL") >>> def div_cpu(self, other): >>> return self * (1 / other) >>> my_lib.impl("div.Tensor", div_cpu, "CPU")




-
torch.library.fallthrough_kernel()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L61)[#](#torch.library.fallthrough_kernel) A dummy function to pass to

`Library.impl`

in order to register a fallthrough.

-
torch.library.define(
*qualname*,*schema*,***,*lib=None*,*tags=()*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L497)[#](#torch.library.define) -
torch.library.define(
*lib*,*schema*,*alias_analysis=''*) Defines a new operator.

In PyTorch, defining an op (short for “operator”) is a two step-process: - we need to define the op (by providing an operator name and schema) - we need to implement behavior for how the operator interacts with various PyTorch subsystems, like CPU/CUDA Tensors, Autograd, etc.

This entrypoint defines the custom operator (the first step) you must then perform the second step by calling various

`impl_*`

APIs, likeor`torch.library.impl()`

.`torch.library.register_fake()`

- Parameters:
**qualname**() – The qualified name for the operator. Should be a string that looks like “namespace::name”, e.g. “aten::sin”. Operators in PyTorch need a namespace to avoid name collisions; a given operator may only be created once. If you are writing a Python library, we recommend the namespace to be the name of your top-level module.*str***schema**() – The schema of the operator. E.g. “(Tensor x) -> Tensor” for an op that accepts one Tensor and returns one Tensor. It does not contain the operator name (that is passed in*str*`qualname`

).**lib**(*Optional**[**Library**]*) – If provided, the lifetime of this operator will be tied to the lifetime of the Library object.**tags**(*Tag**|**Sequence**[**Tag**]*) – one or more torch.Tag to apply to this operator. Tagging an operator changes the operator’s behavior under various PyTorch subsystems; please read the docs for the torch.Tag carefully before applying it.


- Example::
>>> import torch >>> import numpy as np >>> >>> # Define the operator >>> torch.library.define("mylib::sin", "(Tensor x) -> Tensor") >>> >>> # Add implementations for the operator >>> @torch.library.impl("mylib::sin", "cpu") >>> def f(x): >>> return torch.from_numpy(np.sin(x.numpy())) >>> >>> # Call the new operator from torch.ops. >>> x = torch.randn(3) >>> y = torch.ops.mylib.sin(x) >>> assert torch.allclose(y, x.sin())



-
torch.library.impl(
*lib*,*name*,*dispatch_key=''*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/library.py#L607)[#](#torch.library.impl) -
torch.library.impl(
*qualname:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*types:*,[str](https://docs.python.org/3/library/stdtypes.html#str)| Sequence[[str](https://docs.python.org/3/library/stdtypes.html#str)]*func:*,[None](https://docs.python.org/3/library/constants.html#None)= None***,*lib:*) Callable[[Callable[...,[Library](#torch.library.Library)|[None](https://docs.python.org/3/library/constants.html#None)= None[object](https://docs.python.org/3/library/functions.html#object)]],[None](https://docs.python.org/3/library/constants.html#None)] -
torch.library.impl(
*qualname:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*types:*,[str](https://docs.python.org/3/library/stdtypes.html#str)| Sequence[[str](https://docs.python.org/3/library/stdtypes.html#str)]*func: Callable[...,*,[object](https://docs.python.org/3/library/functions.html#object)]***,*lib:*)[Library](#torch.library.Library)|[None](https://docs.python.org/3/library/constants.html#None)= None[None](https://docs.python.org/3/library/constants.html#None) -
torch.library.impl(
*lib:*,[Library](#torch.library.Library)*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*dispatch_key:*) Callable[[Callable[_P, _T]], Callable[_P, _T]][str](https://docs.python.org/3/library/stdtypes.html#str)= '' Register an implementation for a device type for this operator.

You may pass “default” for

`types`

to register this implementation as the default implementation for ALL device types. Please only use this if the implementation truly supports all device types; for example, this is true if it is a composition of built-in PyTorch operators.This API may be used as a decorator. You can use nested decorators with this API provided they return a function and are placed inside this API (see Example 2).

Some valid types are: “cpu”, “cuda”, “xla”, “mps”, “ipu”, “xpu”.

- Parameters:

Examples

>>> import torch >>> import numpy as np >>> # Example 1: Register function. >>> # Define the operator >>> torch.library.define("mylib::mysin", "(Tensor x) -> Tensor") >>> >>> # Add implementations for the cpu device >>> @torch.library.impl("mylib::mysin", "cpu") >>> def f(x): >>> return torch.from_numpy(np.sin(x.numpy())) >>> >>> x = torch.randn(3) >>> y = torch.ops.mylib.mysin(x) >>> assert torch.allclose(y, x.sin()) >>> >>> # Example 2: Register function with decorator. >>> def custom_decorator(func): >>> def wrapper(*args, **kwargs): >>> return func(*args, **kwargs) + 1 >>> return wrapper >>> >>> # Define the operator >>> torch.library.define("mylib::sin_plus_one", "(Tensor x) -> Tensor") >>> >>> # Add implementations for the operator >>> @torch.library.impl("mylib::sin_plus_one", "cpu") >>> @custom_decorator >>> def f(x): >>> return torch.from_numpy(np.sin(x.numpy())) >>> >>> # Call the new operator from torch.ops. >>> x = torch.randn(3) >>> >>> y1 = torch.ops.mylib.sin_plus_one(x) >>> y2 = torch.sin(x) + 1 >>> assert torch.allclose(y1, y2)

---

## Source: https://pytorch.org/docs/stable/accelerator.html

# torch.accelerator[#](#module-torch.accelerator)

Created On: Oct 27, 2024 | Last Updated On: Nov 13, 2025

This package introduces support for the current [accelerator](torch.html#accelerators) in python.

`device_count` |

Return the number of current [accelerator](torch.html#accelerators) available.

`is_available`

Check if the current accelerator is available at runtime: it was build, all the required drivers are available and at least one device is visible.

`current_accelerator`

Return the device of the accelerator available at compilation time.

`set_device_index`

Set the current device index to a given device.

`set_device_idx`

(Deprecated) Set the current device index to a given device.

`current_device_index`

Return the index of a currently selected device for the current [accelerator](torch.html#accelerators).

`current_device_idx`

(Deprecated) Return the index of a currently selected device for the current [accelerator](torch.html#accelerators).

`set_stream`

Set the current stream to a given stream.

`current_stream`

Return the currently selected stream for a given device.

`synchronize`

Wait for all kernels in all streams on the given device to complete.

`device_index`

Context manager to set the current device index for the current [accelerator](torch.html#accelerators).

## Memory management[#](#memory-management)

`empty_cache` |

Release all unoccupied cached memory currently held by the caching allocator so that those can be used in other application.

`get_memory_info`

Return the current device memory information for a given device index.

`max_memory_allocated`

Return the current [accelerator](torch.html#accelerators) maximum device memory occupied by tensors in bytes for a given device index.

`max_memory_reserved`

Return the current [accelerator](torch.html#accelerators) maximum device memory managed by the caching allocator in bytes for a given device index.

`memory_allocated`

Return the current [accelerator](torch.html#accelerators) device memory occupied by tensors in bytes for a given device index.

`memory_reserved`

Return the current [accelerator](torch.html#accelerators) device memory managed by the caching allocator in bytes for a given device index.

`memory_stats`

Return a dictionary of accelerator device memory allocator statistics for a given device index.

`reset_accumulated_memory_stats`

Reset the "accumulated" (historical) stats tracked by the current [accelerator](torch.html#accelerators) memory allocator for a given device index.

`reset_peak_memory_stats`

Reset the "peak" stats tracked by the current [accelerator](torch.html#accelerators) memory allocator for a given device index.

---

## Source: https://pytorch.org/docs/stable/cpu.html

# torch.cpu[#](#module-torch.cpu)

Created On: Jul 11, 2023 | Last Updated On: Oct 13, 2025

This package implements abstractions found in `torch.cuda`

to facilitate writing device-agnostic code.

`current_device` |

Returns current device for cpu.

`current_stream`

Returns the currently selected [ Stream](generated/torch.cpu.Stream_class.html#torch.cpu.Stream) for a given device.

`is_available`

Returns a bool indicating if CPU is currently available.

`is_initialized`

Returns True if the CPU is initialized.

`synchronize`

Waits for all kernels in all streams on the CPU device to complete.

`stream`

Wrapper around the Context-manager StreamContext that selects a given stream.

`set_device`

Sets the current device, in CPU we do nothing.

`device_count`

Returns number of CPU devices (not cores).

`StreamContext`

Context-manager that selects a given stream.

## Streams and events[#](#streams-and-events)

`Stream` |

N.B.

---

## Source: https://pytorch.org/docs/stable/cuda.html

# torch.cuda[#](#module-torch.cuda)

Created On: Dec 23, 2016 | Last Updated On: Oct 22, 2025

This package adds support for CUDA tensor types.

It implements the same function as CPU tensors, but they utilize GPUs for computation.

It is lazily initialized, so you can always import it, and use
[ is_available()](generated/torch.cuda.is_available.html#torch.cuda.is_available) to determine if your system supports CUDA.

[CUDA semantics](notes/cuda.html#cuda-semantics) has more details about working with CUDA.

`StreamContext` |

Context-manager that selects a given stream.

`can_device_access_peer`

Check if peer access between two devices is possible.

`check_error`

Raise an error if the result of a CUDA runtime API call is not success.

`current_blas_handle`

Return cublasHandle_t pointer to current cuBLAS handle

`current_device`

Return the index of a currently selected device.

`current_stream`

Return the currently selected [ Stream](generated/torch.cuda.Stream_class.html#torch.cuda.Stream) for a given device.

`cudart`

Retrieves the CUDA runtime API module.

`default_stream`

Return the default [ Stream](generated/torch.cuda.Stream_class.html#torch.cuda.Stream) for a given device.

`device`

Context-manager that changes the selected device.

`device_count`

Return the number of GPUs available.

`device_memory_used`

Return used global (device) memory in bytes as given by nvidia-smi or amd-smi.

`device_of`

Context-manager that changes the current device to that of given object.

`get_arch_list`

Return list CUDA architectures this library was compiled for.

`get_device_capability`

Get the cuda capability of a device.

`get_device_name`

Get the name of a device.

`get_device_properties`

Get the properties of a device.

`get_gencode_flags`

Return NVCC gencode flags this library was compiled with.

`get_stream_from_external`

Return a [ Stream](generated/torch.cuda.Stream_class.html#torch.cuda.Stream) from an externally allocated CUDA stream.

`get_sync_debug_mode`

Return current value of debug mode for cuda synchronizing operations.

`init`

Initialize PyTorch's CUDA state.

`ipc_collect`

Force collects GPU memory after it has been released by CUDA IPC.

`is_available`

Return a bool indicating if CUDA is currently available.

`is_bf16_supported`

Return a bool indicating if the current CUDA/ROCm device supports dtype bfloat16.

`is_initialized`

Return whether PyTorch's CUDA state has been initialized.

`is_tf32_supported`

Return a bool indicating if the current CUDA/ROCm device supports dtype tf32.

`memory_usage`

Return the percent of time over the past sample period during which global (device) memory was being read or written as given by nvidia-smi.

`set_device`

Set the current device.

`set_stream`

Set the current stream. This is a wrapper API to set the stream.

`set_sync_debug_mode`

Set the debug mode for cuda synchronizing operations.

`stream`

Wrap around the Context-manager StreamContext that selects a given stream.

`synchronize`

Wait for all kernels in all streams on a CUDA device to complete.

`utilization`

Return the percent of time over the past sample period during which one or more kernels was executing on the GPU as given by nvidia-smi.

`temperature`

Return the average temperature of the GPU sensor in Degrees C (Centigrades).

`power_draw`

Return the average power draw of the GPU sensor in mW (MilliWatts)

`clock_rate`

Return the clock speed of the GPU SM in MHz (megahertz) over the past sample period as given by nvidia-smi.

`AcceleratorError`

Exception raised while executing on device

`OutOfMemoryError`

Exception raised when device is out of memory

## Random Number Generator[#](#random-number-generator)

`get_rng_state` |

Return the random number generator state of the specified GPU as a ByteTensor.

`get_rng_state_all`

Return a list of ByteTensor representing the random number states of all devices.

`set_rng_state`

Set the random number generator state of the specified GPU.

`set_rng_state_all`

Set the random number generator state of all devices.

`manual_seed`

Set the seed for generating random numbers for the current GPU.

`manual_seed_all`

Set the seed for generating random numbers on all GPUs.

`seed`

Set the seed for generating random numbers to a random number for the current GPU.

`seed_all`

Set the seed for generating random numbers to a random number on all GPUs.

`initial_seed`

Return the current random seed of the current GPU.

## Communication collectives[#](#communication-collectives)

Broadcasts a tensor to specified GPU devices. |
|
Broadcast a sequence of tensors to the specified GPUs. |
|
Sum tensors from multiple GPUs. |
|
Sum tensors from multiple GPUs. |
|
Scatters tensor across multiple GPUs. |
|
Gathers tensors from multiple GPU devices. |

## Streams and events[#](#streams-and-events)

`Stream` |

Wrapper around a CUDA stream.

`ExternalStream`

Wrapper around an externally allocated CUDA stream.

`Event`

Wrapper around a CUDA event.

## Graphs (beta)[#](#graphs-beta)

`is_current_stream_capturing` |

Return True if CUDA graph capture is underway on the current CUDA stream, False otherwise.

`graph_pool_handle`

Return an opaque token representing the id of a graph memory pool.

`CUDAGraph`

Wrapper around a CUDA graph.

`graph`

Context-manager that captures CUDA work into a [ torch.cuda.CUDAGraph](generated/torch.cuda.CUDAGraph.html#torch.cuda.CUDAGraph) object for later replay.

`make_graphed_callables`

Accept callables (functions or [ nn.Module](generated/torch.nn.Module.html#torch.nn.Module)s) and returns graphed versions.

This package adds support for device memory management implemented in CUDA.

## Memory management[#](#memory-management)

`empty_cache` |

Release all unoccupied cached memory currently held by the caching allocator so that those can be used in other GPU application and visible in nvidia-smi.

`get_per_process_memory_fraction`

Get memory fraction for a process.

`list_gpu_processes`

Return a human-readable printout of the running processes and their GPU memory use for a given device.

`mem_get_info`

Return the global free and total GPU memory for a given device using cudaMemGetInfo.

`memory_stats`

Return a dictionary of CUDA memory allocator statistics for a given device.

`memory_stats_as_nested_dict`

Return the result of `memory_stats()`

as a nested dictionary.

`reset_accumulated_memory_stats`

Reset the "accumulated" (historical) stats tracked by the CUDA memory allocator.

`host_memory_stats`

Return a dictionary of pinned (host) allocator statistics.

`host_memory_stats_as_nested_dict`

Return the result of `host_memory_stats()`

as a nested dictionary.

`reset_accumulated_host_memory_stats`

Reset the "accumulated" (historical) stats tracked by the host memory allocator.

`memory_summary`

Return a human-readable printout of the current memory allocator statistics for a given device.

`memory_snapshot`

Return a snapshot of the CUDA memory allocator state across all devices.

`memory_allocated`

Return the current GPU memory occupied by tensors in bytes for a given device.

`max_memory_allocated`

Return the maximum GPU memory occupied by tensors in bytes for a given device.

`reset_max_memory_allocated`

Reset the starting point in tracking maximum GPU memory occupied by tensors for a given device.

`memory_reserved`

Return the current GPU memory managed by the caching allocator in bytes for a given device.

`max_memory_reserved`

Return the maximum GPU memory managed by the caching allocator in bytes for a given device.

`set_per_process_memory_fraction`

Set memory fraction for a process.

`memory_cached`

Deprecated; see `memory_reserved()`

.

`max_memory_cached`

Deprecated; see `max_memory_reserved()`

.

`reset_max_memory_cached`

Reset the starting point in tracking maximum GPU memory managed by the caching allocator for a given device.

`reset_peak_memory_stats`

Reset the "peak" stats tracked by the CUDA memory allocator.

`reset_peak_host_memory_stats`

Reset the "peak" stats tracked by the host memory allocator.

`caching_allocator_alloc`

Perform a memory allocation using the CUDA memory allocator.

`caching_allocator_delete`

Delete memory allocated using the CUDA memory allocator.

`get_allocator_backend`

Return a string describing the active allocator backend as set by `PYTORCH_ALLOC_CONF`

.

`CUDAPluggableAllocator`

CUDA memory allocator loaded from a so file.

`change_current_allocator`

Change the currently used memory allocator to be the one provided.

`MemPool`

MemPool represents a pool of memory in a caching allocator.

`caching_allocator_enable` |

Enable or disable the CUDA memory allocator.

-
*class*torch.cuda.use_mem_pool(*pool*,*device=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/cuda/memory.py#L1295)[#](#torch.cuda.use_mem_pool) A context manager that routes allocations to a given pool.

- Parameters:
**pool**(*torch.cuda.MemPool*) – a MemPool object to be made active so that allocations route to this pool.**device**(*torch.device**or**int**,**optional*) – selected device. Uses MemPool on the current device, given by, if`current_device()`

is`device`

`None`

(default).


Note

This context manager makes only current thread’s allocations route to the given pool. If a new thread is spawned inside the context manager (e.g. by calling backward) the allocations in that thread will not route to the given pool.


## NVIDIA Tools Extension (NVTX)[#](#nvidia-tools-extension-nvtx)

Describe an instantaneous event that occurred at some point. |
|
Push a range onto a stack of nested range span. |
|
Pop a range off of a stack of nested range spans. |
|
Context manager / decorator that pushes an NVTX range at the beginning of its scope, and pops it at the end. |

## Jiterator (beta)[#](#jiterator-beta)

Create a jiterator-generated cuda kernel for an elementwise op. |
|
Create a jiterator-generated cuda kernel for an elementwise op that supports returning one or more outputs. |

## TunableOp[#](#tunableop)

Some operations could be implemented using more than one library or more than one technique. For example, a GEMM could be implemented for CUDA or ROCm using either the cublas/cublasLt libraries or hipblas/hipblasLt libraries, respectively. How does one know which implementation is the fastest and should be chosen? That’s what TunableOp provides. Certain operators have been implemented using multiple strategies as Tunable Operators. At runtime, all strategies are profiled and the fastest is selected for all subsequent operations.

See the [documentation](cuda.tunable.html) for information on how to use it.

## Stream Sanitizer (prototype)[#](#stream-sanitizer-prototype)

CUDA Sanitizer is a prototype tool for detecting synchronization errors between streams in PyTorch.
See the [documentation](cuda._sanitizer.html) for information on how to use it.

## GPUDirect Storage (prototype)[#](#gpudirect-storage-prototype)

The APIs in `torch.cuda.gds`

provide thin wrappers around certain cuFile APIs that allow
direct memory access transfers between GPU memory and storage, avoiding a bounce buffer in the CPU. See the
[cufile api documentation](https://docs.nvidia.com/gpudirect-storage/api-reference-guide/index.html#cufile-io-api)
for more details.

These APIs can be used in versions greater than or equal to CUDA 12.6. In order to use these APIs, one must
ensure that their system is appropriately configured to use GPUDirect Storage per the
[GPUDirect Storage documentation](https://docs.nvidia.com/gpudirect-storage/troubleshooting-guide/contents.html).

See the docs for [ GdsFile](generated/torch.cuda.gds.GdsFile.html#torch.cuda.gds.GdsFile) for an example of how to use these.

`gds_register_buffer` |

Registers a storage on a CUDA device as a cufile buffer.

`gds_deregister_buffer`

Deregisters a previously registered storage on a CUDA device as a cufile buffer.

`GdsFile`

Wrapper around cuFile.

## Green Contexts (experimental)[#](#green-contexts-experimental)

`torch.cuda.green_contexts`

provides thin wrappers around the CUDA Green Context APIs
to enable more general carveout of SM resources for CUDA kernels.

These APIs can be used in PyTorch with CUDA versions greater than or equal to 12.8.

See the docs for [ GreenContext](generated/torch.cuda.green_contexts.GreenContext.html#torch.cuda.green_contexts.GreenContext) for an example of how to use these.

`GreenContext` |

Wrapper around a CUDA green context.

---

## Source: https://pytorch.org/docs/stable/torch_cuda_memory.html

# Understanding CUDA Memory Usage[#](#understanding-cuda-memory-usage)

Created On: Aug 23, 2023 | Last Updated On: Sep 02, 2025

To debug CUDA memory use, PyTorch provides a way to generate memory snapshots that record the state of allocated CUDA memory at any point in time, and optionally record the history of allocation events that led up to that snapshot.

The generated snapshots can then be drag and dropped onto the interactiver viewer hosted at [pytorch.org/memory_viz](https://pytorch.org/memory_viz) which
can be used to explore the snapshot.

Note

The memory profiler and visualizer described in this document only have visibility into the CUDA memory that is allocated and managed through the PyTorch allocator. Any memory allocated directly from CUDA APIs will not be visible in the PyTorch memory profiler.

NCCL (used for distributed communication on CUDA devices) is a common example of a library that allocates some
GPU memory that is invisible to the PyTorch memory profiler. See [Identifying Non-PyTorch allocations](#non-pytorch-alloc) for more info.

## Generating a Snapshot[#](#generating-a-snapshot)

The common pattern for recording a snapshot is to enable memory history, run the code to be observed, and then save a file with a pickled snapshot:

```
# enable memory history, which will
# add tracebacks and event history to snapshots
torch.cuda.memory._record_memory_history()
run_your_code()
torch.cuda.memory._dump_snapshot("my_snapshot.pickle")
```

## Using the visualizer[#](#using-the-visualizer)

Open [https://pytorch.org/memory_viz](https://pytorch.org/memory_viz) and drag/drop the pickled snapshot file into the visualizer.
The visualizer is a javascript application that runs locally on your computer. It does not upload any snapshot data.

## Active Memory Timeline[#](#active-memory-timeline)

The Active Memory Timeline shows all the live tensors over time in the snapshot on a particular GPU. Pan/Zoom over the plot to look at smaller allocations. Mouse over allocated blocks to see a stack trace for when that block was allocated, and details like its address. The detail slider can be adjusted to render fewer allocations and improve performance when there is a lot of data.

## Allocator State History[#](#allocator-state-history)

The Allocator State History shows individual allocator events in a timeline on the left. Select an event in the timeline to see a visual summary of the allocator state at that event. This summary shows each individual segment returned from cudaMalloc and how it is split up into blocks of individual allocations or free space. Mouse over segments and blocks to see the stack trace when the memory was allocated. Mouse over events to see the stack trace when the event occurred, such as when a tensor was freed. Out of memory errors are reported as OOM events. Looking at the state of memory during an OOM may provide insight into why an allocation failed even though reserved memory still exists.

The stack trace information also reports the address at which an allocation occurred. The address b7f064c000000_0 refers to the (b)lock at address 7f064c000000 which is the “_0”th time this address was allocated. This unique string can be looked up in the Active Memory Timeline and searched in the Active State History to examine the memory state when a tensor was allocated or freed.

## Identifying Non-PyTorch allocations[#](#non-pytorch-alloc)

If you suspect CUDA memory is being allocated outside of PyTorch, you can collect the raw CUDA allocation info using the pynvml package, and compare that to the allocation reported by pytorch.

To collect raw memory usage outside pytorch, use `device_memory_used()`


```
import torch
device_idx = ...
print(torch.cuda.device_memory_used(device_idx))
```

## Snapshot API Reference[#](#snapshot-api-reference)

-
torch.cuda.memory._record_memory_history(
*enabled='all'*,*context='all'*,*stacks='all'*,*max_entries=9223372036854775807*,*device=None*,*clear_history=False*,*compile_context=False*,*global_record_annotations=False*,*skip_actions=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/cuda/memory.py#L872)[#](#torch.cuda.memory._record_memory_history) Enable recording of stack traces associated with memory allocations, so you can tell what allocated any piece of memory in

.`torch.cuda.memory._snapshot()`

In addition to keeping stack traces with each current allocation and free, this will also enable recording of a history of all alloc/free events.

Use

to retrieve this information, and the tools in _memory_viz.py to visualize snapshots.`torch.cuda.memory._snapshot()`

### Buffer behavior

[#](#buffer-behavior)This will store up to max_entries instances of TraceEntry when enabled. Python trace collection defaults to sys.maxsize, meaning long-running or indefinitely running jobs should set a reasonable limit to avoid excessive memory use. Expect each entry to be several KB.

Longer running workflows or those with smaller max_entries values will only store the last accumulated max_entries entries, meaning new entries overwrite older entries.

C++ implementation for reference to ring buffer implementation:

if (record_history) { if (alloc_trace->size() < alloc_trace_max_entries_) { alloc_trace->emplace_back(te); } else { (*alloc_trace)[alloc_trace_next++] = te; if (alloc_trace_next == alloc_trace_max_entries_) { alloc_trace_next = 0; } } }

### Latency impact

[#](#latency-impact)The Python trace collection is fast (2us per trace), so you may consider enabling this on production jobs if you anticipate ever having to debug memory issues.

C++ trace collection is also fast (~50ns/frame), which for many typical programs works out to ~2us per trace, but can vary depending on stack depth.

- param enabled:
None, disable recording memory history. “state”, keep information for currently allocated memory. “all”, additionally keep a history of all alloc/free calls. Defaults to “all”.

- type enabled:
Literal[None, “state”, “all”], optional

- param context:
None, Do not record any tracebacks. “state”, Record tracebacks for currently allocated memory. “alloc”, additionally keep tracebacks for alloc calls. “all”, additionally keep tracebacks for free calls. Defaults to “all”.

- type context:
Literal[None, “state”, “alloc”, “all”], optional

- param stacks:
“python”, include Python, TorchScript, and inductor frames in tracebacks “all”, additionally include C++ frames Defaults to “all”.

- type stacks:
Literal[“python”, “all”], optional

- param max_entries:
Keep a maximum of max_entries alloc/free events in the recorded history recorded.

- type max_entries:
int, optional

- param clear_history:
Clear history when enabling, defaults to False.

- type clear_history:
bool, optional

- param skip_actions:
List of action types to skip when recording memory history. This can be used to reduce memory overhead by excluding certain types of events from being recorded. Valid action types are:

“alloc”: Memory allocation events

“free_requested”: Free requests (memory marked for freeing)

“free_completed”: Completed free operations (memory actually freed)

“segment_alloc”: Segment allocation from cudaMalloc

“segment_free”: Segment freed back to CUDA via cudaFree

“oom”: Out-of-memory exceptions

“snapshot”: Memory snapshot generation events


For example, to skip recording free_requested events: skip_actions=[“free_requested”]

Defaults to None (record all actions).

- type skip_actions:
list[str], optional



-
torch.cuda.memory._snapshot(
*device=None*,*augment_with_fx_traces=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/cuda/memory.py#L992)[#](#torch.cuda.memory._snapshot) Save a snapshot of CUDA memory state at the time it was called.

The state is represented as a dictionary with the following structure.

class Snapshot(TypedDict): segments: List[Segment] device_traces: List[List[TraceEntry]] class Segment(TypedDict): # Segments are memory returned from a cudaMalloc call. # The size of reserved memory is the sum of all Segments. # Segments are cached and reused for future allocations. # If the reuse is smaller than the segment, the segment # is split into more then one Block. # empty_cache() frees Segments that are entirely inactive. address: int total_size: int # cudaMalloc'd size of segment stream: int segment_type: Literal["small", "large"] # 'large' (>1MB) allocated_size: int # size of memory in use active_size: int # size of memory in use or in active_awaiting_free state blocks: List[Block] class Block(TypedDict): # A piece of memory returned from the allocator, or # current cached but inactive. size: int requested_size: int # size requested during malloc, may be smaller than # size due to rounding address: int state: Literal[ "active_allocated", # used by a tensor "active_awaiting_free", # waiting for another stream to finish using # this, then it will become free "inactive", ] # free for reuse frames: List[Frame] # stack trace from where the allocation occurred class Frame(TypedDict): filename: str line: int name: str # Optional FX debug fields (present when augment_with_fx_traces=True # and the frame corresponds to FX-generated code) fx_node_op: str # FX node operation type (e.g., 'call_function', 'output') fx_node_name: str # FX node name (e.g., 'linear', 'relu_1') fx_original_trace: str # Original model source code stack trace class TraceEntry(TypedDict): # When `torch.cuda.memory._record_memory_history()` is enabled, # the snapshot will contain TraceEntry objects that record each # action the allocator took. action: Literal[ "alloc" # memory allocated "free_requested", # the allocated received a call to free memory "free_completed", # the memory that was requested to be freed is now # able to be used in future allocation calls "segment_alloc", # the caching allocator ask cudaMalloc for more memory # and added it as a segment in its cache "segment_free", # the caching allocator called cudaFree to return memory # to cuda possibly trying free up memory to # allocate more segments or because empty_caches was called "oom", # the allocator threw an OOM exception. 'size' is # the requested number of bytes that did not succeed "snapshot", # the allocator generated a memory snapshot # useful to coorelate a previously taken # snapshot with this trace ] addr: int # not present for OOM frames: List[Frame] size: int stream: int device_free: int # only present for OOM, the amount of # memory cuda still reports to be free

- Parameters:
**device**(*Device*) – Device to capture snapshot for. If None, captures for current device.**augment_with_fx_traces**– If True, augment stack trace frames with FX debug information that maps generated FX code back to original model source code. This adds fx_node_op, fx_node_name, fx_original_trace, and fx_node_info fields to Frame objects. Default: False.

- Returns:
The Snapshot dictionary object



-
torch.cuda.memory._dump_snapshot(
*filename='dump_snapshot.pickle'*,*augment_with_fx_traces=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/cuda/memory.py#L1090)[#](#torch.cuda.memory._dump_snapshot) Save a pickled version of the torch.memory._snapshot() dictionary to a file.

This file can be opened by the interactive snapshot viewer at pytorch.org/memory_viz

Snapshot file sizes scale with max_entries and stack trace depth per entry, with several KB per entry. These can easily be in the GB range for longer running workflows with large max_entries.

- Parameters:
**filename**(*str**,**optional*) – Name of the file to create. Defaults to “dump_snapshot.pickle”.**augment_with_fx_traces**(*bool**,**optional*) – If True, augment the snapshot with FX debug information before dumping. This maps generated FX code stack traces back to original model source code. Defaults to False.

---

## Source: https://pytorch.org/docs/stable/mps.html

# torch.mps[#](#module-torch.mps)

Created On: Feb 10, 2023 | Last Updated On: Jun 08, 2025

This package enables an interface for accessing MPS (Metal Performance Shaders) backend in Python.
Metal is Apple’s API for programming metal GPU (graphics processor unit). Using MPS means that increased
performance can be achieved, by running work on the metal GPU(s).
See [https://developer.apple.com/documentation/metalperformanceshaders](https://developer.apple.com/documentation/metalperformanceshaders) for more details.

`device_count` |

Returns the number of available MPS devices.

`synchronize`

Waits for all kernels in all streams on a MPS device to complete.

`get_rng_state`

Returns the random number generator state as a ByteTensor.

`set_rng_state`

Sets the random number generator state.

`manual_seed`

Sets the seed for generating random numbers.

`seed`

Sets the seed for generating random numbers to a random number.

`empty_cache`

Releases all unoccupied cached memory currently held by the caching allocator so that those can be used in other GPU applications.

`set_per_process_memory_fraction`

Set memory fraction for limiting process's memory allocation on MPS device.

`current_allocated_memory`

Returns the current GPU memory occupied by tensors in bytes.

`driver_allocated_memory`

Returns total GPU memory allocated by Metal driver for the process in bytes.

`recommended_max_memory`

Returns recommended max Working set size for GPU memory in bytes.

`compile_shader`

Compiles compute shader from source and allows one to invoke kernels defined there from the comfort of Python runtime Example.

## MPS Profiler[#](#mps-profiler)

Start OS Signpost tracing from MPS backend. |
|
Stops generating OS Signpost tracing from MPS backend. |
|
Context Manager to enabling generating OS Signpost tracing from MPS backend. |
|
Checks if metal capture is in progress |
|
Checks if metal_capture context manager is usable To enable metal capture, set MTL_CAPTURE_ENABLED envvar |
|
Context manager that enables capturing of Metal calls into gputrace |

## MPS Event[#](#mps-event)

Wrapper around an MPS event. |

---

## Source: https://pytorch.org/docs/stable/xpu.html

# torch.xpu[#](#module-torch.xpu)

Created On: Feb 01, 2024 | Last Updated On: Feb 11, 2026

This package introduces support for the XPU backend, specifically tailored for Intel GPU optimization.

This package is lazily initialized, so you can always import it, and use
[ is_available()](generated/torch.xpu.is_available.html#torch.xpu.is_available) to determine if your system supports XPU.

`StreamContext` |

Context-manager that selects a given stream.

`can_device_access_peer`

Query whether a device can access a peer device's memory.

`current_device`

Return the index of a currently selected device.

`current_stream`

Return the currently selected [ Stream](generated/torch.xpu.Stream_class.html#torch.xpu.Stream) for a given device.

`device`

Context-manager that changes the selected device.

`device_count`

Return the number of XPU device available.

`device_of`

Context-manager that changes the current device to that of given object.

`get_arch_list`

Return list XPU architectures this library was compiled for.

`get_device_capability`

Get the xpu capability of a device.

`get_device_name`

Get the name of a device.

`get_device_properties`

Get the properties of a device.

`get_gencode_flags`

Return XPU AOT(ahead-of-time) build flags this library was compiled with.

`get_stream_from_external`

Return a [ Stream](generated/torch.xpu.Stream_class.html#torch.xpu.Stream) from an external SYCL queue.

`init`

Initialize PyTorch's XPU state.

`is_available`

Return a bool indicating if XPU is currently available.

`is_bf16_supported`

Return a bool indicating if the current XPU device supports dtype bfloat16.

`is_initialized`

Return whether PyTorch's XPU state has been initialized.

`is_tf32_supported`

Return a bool indicating if the current XPU device supports dtype tf32.

`set_device`

Set the current device.

`set_stream`

Set the current stream. This is a wrapper API to set the stream.

`stream`

Wrap around the Context-manager StreamContext that selects a given stream.

`synchronize`

Wait for all kernels in all streams on a XPU device to complete.

## Random Number Generator[#](#random-number-generator)

`get_rng_state` |

Return the random number generator state of the specified GPU as a ByteTensor.

`get_rng_state_all`

Return a list of ByteTensor representing the random number states of all devices.

`initial_seed`

Return the current random seed of the current GPU.

`manual_seed`

Set the seed for generating random numbers for the current GPU.

`manual_seed_all`

Set the seed for generating random numbers on all GPUs.

`seed`

Set the seed for generating random numbers to a random number for the current GPU.

`seed_all`

Set the seed for generating random numbers to a random number on all GPUs.

`set_rng_state`

Set the random number generator state of the specified GPU.

`set_rng_state_all`

Set the random number generator state of all devices.

## Streams and events[#](#streams-and-events)

## Graphs[#](#graphs)

`is_current_stream_capturing` |

Return True if XPU graph capture is underway on the current XPU stream, False otherwise.

`graph_pool_handle`

Return an opaque token representing the id of a graph memory pool.

`XPUGraph`

Wrapper around a XPU graph.

`graph`

Context-manager that captures XPU work into a [ torch.xpu.XPUGraph](generated/torch.xpu.XPUGraph.html#torch.xpu.XPUGraph) object for later replay.

`make_graphed_callables`

Accept callables (functions or [ nn.Module](generated/torch.nn.Module.html#torch.nn.Module)s) and returns graphed versions.

## Memory management[#](#memory-management)

`XPUPluggableAllocator` |

XPU memory allocator loaded dynamically from a shared library.

`change_current_allocator`

Change the currently used memory allocator to be the one provided.

`empty_cache`

Release all unoccupied cached memory currently held by the caching allocator so that those can be used in other XPU application.

`get_per_process_memory_fraction`

Retrieve the memory fraction currently set for a process on a given XPU device.

`max_memory_allocated`

Return the maximum GPU memory occupied by tensors in bytes for a given device.

`max_memory_reserved`

Return the maximum GPU memory managed by the caching allocator in bytes for a given device.

`mem_get_info`

Return the global free and total GPU memory for a given device.

`memory_allocated`

Return the current GPU memory occupied by tensors in bytes for a given device.

`memory_reserved`

Return the current GPU memory managed by the caching allocator in bytes for a given device.

`memory_snapshot`

Return a snapshot of the XPU memory allocator state across all devices.

`memory_stats`

Return a dictionary of XPU memory allocator statistics for a given device.

`memory_stats_as_nested_dict`

Return the result of `memory_stats()`

as a nested dictionary.

`reset_accumulated_memory_stats`

Reset the "accumulated" (historical) stats tracked by the XPU memory allocator.

`reset_peak_memory_stats`

Reset the "peak" stats tracked by the XPU memory allocator.

`set_per_process_memory_fraction`

Set the memory fraction for a single process on XPU device.

`MemPool`

MemPool represents a pool of memory in a caching allocator.

-
*class*torch.xpu.use_mem_pool(*pool*,*device=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/xpu/memory.py#L605)[#](#torch.xpu.use_mem_pool) A context manager that routes allocations to a given pool.

- Parameters:
**pool**(*torch.xpu.MemPool*) – a`MemPool`

object to be made active so that allocations route to this pool.**device**(*torch.device**or**int**,**optional*) – selected device. Uses`MemPool on the current device, given by :func:`~torch.xpu.current_device`

, ifis`device`

`None`

(default).


Note

This context manager makes only current thread’s allocations route to the given pool. If a new thread is spawned inside the context manager (e.g. by calling backward) the allocations in that thread will not route to the given pool.

---

## Source: https://pytorch.org/docs/stable/mtia.html

# torch.mtia[#](#torch-mtia)

Created On: Jul 11, 2023 | Last Updated On: Dec 10, 2025

The MTIA backend is implemented out of the tree, only interfaces are defined here.

This package enables an interface for accessing MTIA backend in python

`StreamContext` |

Context-manager that selects a given stream.

`current_device`

Return the index of a currently selected device.

`current_stream`

Return the currently selected [ Stream](generated/torch.mtia.Stream_class.html#torch.mtia.Stream) for a given device.

`default_stream`

Return the default [ Stream](generated/torch.mtia.Stream_class.html#torch.mtia.Stream) for a given device.

`device_count`

Return the number of MTIA devices available.

`init`

`is_available`

Return true if MTIA device is available

`is_bf16_supported`

Return a bool indicating if the current MTIA device supports dtype bfloat16.

`is_initialized`

Return whether PyTorch's MTIA state has been initialized.

`memory_stats`

Return a dictionary of MTIA memory allocator statistics for a given device.

`get_device_capability`

Return capability of a given device as a tuple of (major version, minor version).

`empty_cache`

Empty the MTIA device cache.

`record_memory_history`

Enable/Disable the memory profiler on MTIA allocator

`snapshot`

Return a dictionary of MTIA memory allocator history

`attach_out_of_memory_observer`

Attach an out-of-memory observer to MTIA memory allocator

`set_device`

Set the current device.

`set_stream`

Set the current stream. This is a wrapper API to set the stream.

`stream`

Wrap around the Context-manager StreamContext that selects a given stream.

`synchronize`

Waits for all jobs in all streams on a MTIA device to complete.

`device`

Context-manager that changes the selected device.

`set_rng_state`

Sets the random number generator state of the specified MTIA device.

`get_rng_state`

Returns the random number generator state of the specified MTIA device as a ByteTensor.

`set_rng_state_all`

Sets the random number generator state of all devices.

`get_rng_state_all`

Returns a list of ByteTensor representing the random number states of all devices.

`manual_seed`

Sets the seed for generating random numbers for the current MTIA device.

`manual_seed_all`

Sets the seed for generating random numbers on all MTIA devices.

`seed`

Sets the seed for generating random numbers to a random number for the current MTIA device.

`seed_all`

Sets the seed for generating random numbers to a random number on all MTIA devices.

`initial_seed`

Returns the current random seed of the current MTIA device.

`DeferredMtiaCallError`

---

## Source: https://pytorch.org/docs/stable/mtia.memory.html

# torch.mtia.memory[#](#torch-mtia-memory)

Created On: Dec 09, 2024 | Last Updated On: Oct 29, 2025

The MTIA backend is implemented out of the tree, only interfaces are defined here.

This package adds support for device memory management implemented in MTIA.

`memory_stats` |

Return a dictionary of MTIA memory allocator statistics for a given device.

`memory_allocated`

Return the current MTIA memory occupied by tensors in bytes for a given device.

---

## Source: https://pytorch.org/docs/stable/mtia.mtia_graph.html

# torch.mtia.mtia_graph

Created On: Nov 10, 2025 | Last Updated On: Dec 02, 2025

The MTIA backend is implemented out of the tree, only interfaces are defined here.

-
torch.mtia.mtia_graph.graph_pool_handle()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/mtia/mtia_graph.py#L12)
Return an opaque token representing the id of a graph memory pool.

- Return type:
[tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int), [int](https://docs.python.org/3/library/functions.html#int)]



-
*class *torch.mtia.mtia_graph.MTIAGraph(*keep_graph=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/mtia/mtia_graph.py#L20)
Wrapper around a MTIA graph.

- Return type:
Self


-
capture_begin(
*pool*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/mtia/mtia_graph.py#L28)
Begin capturing a MTIA graph.



-
capture_end()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/mtia/mtia_graph.py#L34)
End the capture of a MTIA graph.



-
instantiate()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/mtia/mtia_graph.py#L40)
Instantiate the captured MTIA graph.



-
pool()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/mtia/mtia_graph.py#L58)
Return an opaque token representing the id of this graph’s memory pool

- Return type:
[tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int), [int](https://docs.python.org/3/library/functions.html#int)]



-
replay()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/mtia/mtia_graph.py#L46)
Replay the captured MTIA graph.



-
reset()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/mtia/mtia_graph.py#L52)
Destroy the captured graph and reset the states.




-
*class *torch.mtia.mtia_graph.graph(*mtia_graph*, *pool=None*, *stream=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/mtia/mtia_graph.py#L65)

---

## Source: https://pytorch.org/docs/stable/meta.html

# Meta device[#](#meta-device)

Created On: Jun 17, 2025 | Last Updated On: Jun 17, 2025

The “meta” device is an abstract device which denotes a tensor which records only metadata, but no actual data. Meta tensors have two primary use cases:

Models can be loaded on the meta device, allowing you to load a representation of the model without actually loading the actual parameters into memory. This can be helpful if you need to make transformations on the model before you load the actual data.

Most operations can be performed on meta tensors, producing new meta tensors that describe what the result would have been if you performed the operation on a real tensor. You can use this to perform abstract analysis without needing to spend time on compute or space to represent the actual tensors. Because meta tensors do not have real data, you cannot perform data-dependent operations like

or`torch.nonzero()`

. In some cases, not all device types (e.g., CPU and CUDA) have exactly the same output metadata for an operation; we typically prefer representing the CUDA behavior faithfully in this situation.`item()`


Warning

Although in principle meta tensor computation should always be faster than an equivalent CPU/CUDA computation, many meta tensor implementations are implemented in Python and have not been ported to C++ for speed, so you may find that you get lower absolute framework latency with small CPU tensors.

## Idioms for working with meta tensors[#](#idioms-for-working-with-meta-tensors)

An object can be loaded with [ torch.load()](generated/torch.load.html#torch.load) onto meta device by specifying

`map_location='meta'`

:```
>>> torch.save(torch.randn(2), 'foo.pt')
>>> torch.load('foo.pt', map_location='meta')
tensor(..., device='meta', size=(2,))
```

If you have some arbitrary code which performs some tensor construction without
explicitly specifying a device, you can override it to instead construct on meta device by using
the [ torch.device()](tensor_attributes.html#torch.device) context manager:

```
>>> with torch.device('meta'):
... print(torch.randn(30, 30))
...
tensor(..., device='meta', size=(30, 30))
```

This is especially helpful NN module construction, where you often are not able to explicitly pass in a device for initialization:

```
>>> from torch.nn.modules import Linear
>>> with torch.device('meta'):
... print(Linear(20, 30))
...
Linear(in_features=20, out_features=30, bias=True)
```

You cannot convert a meta tensor directly to a CPU/CUDA tensor, because the meta tensor stores no data and we do not know what the correct data values for your new tensor are:

```
>>> torch.ones(5, device='meta').to("cpu")
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
NotImplementedError: Cannot copy out of meta tensor; no data!
```

Use a factory function like [ torch.empty_like()](generated/torch.empty_like.html#torch.empty_like) to explicitly specify how
you would like the missing data to be filled in.

NN modules have a convenience method [ torch.nn.Module.to_empty()](generated/torch.nn.Module.html#torch.nn.Module.to_empty) that
allows you to move the module to another device, leaving all parameters
uninitialized. You are expected to explicitly reinitialize the parameters
manually:

```
>>> from torch.nn.modules import Linear
>>> with torch.device('meta'):
... m = Linear(20, 30)
>>> m.to_empty(device="cpu")
Linear(in_features=20, out_features=30, bias=True)
```

`torch._subclasses.meta_utils`

contains undocumented utilities for taking
an arbitrary Tensor and constructing an equivalent meta Tensor with high
fidelity. These APIs are experimental and may be changed in a BC breaking way
at any time.

---

## Source: https://pytorch.org/docs/stable/backends.html

# torch.backends[#](#module-torch.backends)

Created On: Sep 16, 2020 | Last Updated On: Jan 13, 2026

`torch.backends`

controls the behavior of various backends that PyTorch supports.

These backends include:

`torch.backends.cpu`

`torch.backends.cuda`

`torch.backends.cudnn`

`torch.backends.cusparselt`

`torch.backends.mha`

`torch.backends.mps`

`torch.backends.mkl`

`torch.backends.mkldnn`

`torch.backends.nnpack`

`torch.backends.openmp`

`torch.backends.opt_einsum`

`torch.backends.xeon`


## torch.backends.cpu[#](#module-torch.backends.cpu)

## torch.backends.cuda[#](#module-torch.backends.cuda)

-
torch.backends.cuda.is_built()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L39)[#](#torch.backends.cuda.is_built) Return whether PyTorch is built with CUDA support.

Note that this doesn’t necessarily mean CUDA is available; just that if this PyTorch binary were run on a machine with working CUDA drivers and devices, we would be able to use it.


-
torch.backends.cuda.matmul.allow_tf32
[#](#torch.backends.cuda.matmul.allow_tf32) A

that controls whether TensorFloat-32 tensor cores may be used in matrix multiplications on Ampere or newer GPUs. allow_tf32 is going to be deprecated. See`bool`

[TensorFloat-32 (TF32) on Ampere (and later) devices](notes/cuda.html#tf32-on-ampere).

-
torch.backends.cuda.matmul.allow_fp16_reduced_precision_reduction
[#](#torch.backends.cuda.matmul.allow_fp16_reduced_precision_reduction) A

that controls whether reduced precision reductions (e.g., with fp16 accumulation type) are allowed with fp16 GEMMs. Assigning a tuple`bool`

`(allow_reduced_precision, allow_splitk)`

lets you also toggle whether split-K heuristics may be used when dispatching to cuBLASLt.`allow_splitk`

defaults to`True`

.

-
torch.backends.cuda.matmul.allow_bf16_reduced_precision_reduction
[#](#torch.backends.cuda.matmul.allow_bf16_reduced_precision_reduction) A

that controls whether reduced precision reductions are allowed with bf16 GEMMs. Assigning a tuple`bool`

`(allow_reduced_precision, allow_splitk)`

lets you also toggle whether split-K heuristics may be used when dispatching to cuBLASLt.`allow_splitk`

defaults to`True`

.

-
torch.backends.cuda.cufft_plan_cache
[#](#torch.backends.cuda.cufft_plan_cache) `cufft_plan_cache`

contains the cuFFT plan caches for each CUDA device. Query a specific device i’s cache via torch.backends.cuda.cufft_plan_cache[i].-
torch.backends.cuda.cufft_plan_cache.size
[#](#torch.backends.cuda.cufft_plan_cache.size) A readonly

that shows the number of plans currently in a cuFFT plan cache.`int`


-
torch.backends.cuda.cufft_plan_cache.max_size
[#](#torch.backends.cuda.cufft_plan_cache.max_size) A

that controls the capacity of a cuFFT plan cache.`int`


-
torch.backends.cuda.cufft_plan_cache.clear()
[#](#torch.backends.cuda.cufft_plan_cache.clear) Clears a cuFFT plan cache.


-
torch.backends.cuda.cufft_plan_cache.size

-
torch.backends.cuda.preferred_blas_library(
*backend=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L288)[#](#torch.backends.cuda.preferred_blas_library) Override the library PyTorch uses for BLAS operations. Choose between cuBLAS, cuBLASLt, and CK [ROCm-only].

Warning

This flag is experimental and subject to change.

When PyTorch runs a CUDA BLAS operation it defaults to cuBLAS even if both cuBLAS and cuBLASLt are available. For PyTorch built for ROCm, hipBLAS, hipBLASLt, and CK may offer different performance. This flag (a

) allows overriding which BLAS library to use.`str`

If “cublas” is set then cuBLAS will be used wherever possible.

If “cublaslt” is set then cuBLASLt will be used wherever possible.

If “ck” is set then CK will be used wherever possible.

If “default” (the default) is set then heuristics will be used to pick between the other options.

When no input is given, this function returns the currently preferred library.

User may use the environment variable TORCH_BLAS_PREFER_CUBLASLT=1 to set the preferred library to cuBLASLt globally. This flag only sets the initial value of the preferred library and the preferred library may still be overridden by this function call later in your script.


Note: When a library is preferred other libraries may still be used if the preferred library doesn’t implement the operation(s) called. This flag may achieve better performance if PyTorch’s library selection is incorrect for your application’s inputs.

- Return type:
*_BlasBackend*


-
torch.backends.cuda.preferred_rocm_fa_library(
*backend=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L343)[#](#torch.backends.cuda.preferred_rocm_fa_library) [ROCm-only] Override the backend PyTorch uses in ROCm environments for Flash Attention. Choose between AOTriton and CK

Warning

This flag is experimental and subject to change.

When Flash Attention is enabled and desired, PyTorch defaults to using AOTriton as the backend. This flag (a

) allows users to override this backend to use composable_kernel`str`

If “default” is set then the default backend will be used wherever possible. Currently AOTriton.

If “aotriton” is set then AOTriton will be used wherever possible.

If “ck” is set then CK will be used wherever possible.

When no input is given, this function returns the currently preferred library.

User may use the environment variable TORCH_ROCM_FA_PREFER_CK=1 to set the preferred library to CK globally.


Note: When a library is preferred other libraries may still be used if the preferred library doesn’t implement the operation(s) called. This flag may achieve better performance if PyTorch’s library selection is incorrect for your application’s inputs.

- Return type:
*_ROCmFABackend*


-
torch.backends.cuda.preferred_linalg_library(
*backend=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L217)[#](#torch.backends.cuda.preferred_linalg_library) Override the heuristic PyTorch uses to choose between cuSOLVER and MAGMA for CUDA linear algebra operations.

Warning

This flag is experimental and subject to change.

When PyTorch runs a CUDA linear algebra operation it often uses the cuSOLVER or MAGMA libraries, and if both are available it decides which to use with a heuristic. This flag (a

) allows overriding those heuristics.`str`

If “cusolver” is set then cuSOLVER will be used wherever possible.

If “magma” is set then MAGMA will be used wherever possible.

If “default” (the default) is set then heuristics will be used to pick between cuSOLVER and MAGMA if both are available.

When no input is given, this function returns the currently preferred library.

User may use the environment variable TORCH_LINALG_PREFER_CUSOLVER=1 to set the preferred library to cuSOLVER globally. This flag only sets the initial value of the preferred library and the preferred library may still be overridden by this function call later in your script.


Note: When a library is preferred other libraries may still be used if the preferred library doesn’t implement the operation(s) called. This flag may achieve better performance if PyTorch’s heuristic library selection is incorrect for your application’s inputs.

Currently supported linalg operators:

`torch.linalg.eighvals()`


- Return type:
*_LinalgBackend*


-
*class*torch.backends.cuda.SDPAParams[#](#torch.backends.cuda.SDPAParams)

-
torch.backends.cuda.flash_sdp_enabled()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L388)[#](#torch.backends.cuda.flash_sdp_enabled) Warning

This flag is beta and subject to change.

Returns whether flash scaled dot product attention is enabled or not.


-
torch.backends.cuda.enable_mem_efficient_sdp(
*enabled*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L415)[#](#torch.backends.cuda.enable_mem_efficient_sdp) Warning

This flag is beta and subject to change.

Enables or disables memory efficient scaled dot product attention.


-
torch.backends.cuda.mem_efficient_sdp_enabled()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L406)[#](#torch.backends.cuda.mem_efficient_sdp_enabled) Warning

This flag is beta and subject to change.

Returns whether memory efficient scaled dot product attention is enabled or not.


-
torch.backends.cuda.enable_flash_sdp(
*enabled*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L397)[#](#torch.backends.cuda.enable_flash_sdp) Warning

This flag is beta and subject to change.

Enables or disables flash scaled dot product attention.


-
torch.backends.cuda.math_sdp_enabled()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L424)[#](#torch.backends.cuda.math_sdp_enabled) Warning

This flag is beta and subject to change.

Returns whether math scaled dot product attention is enabled or not.


-
torch.backends.cuda.enable_math_sdp(
*enabled*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L433)[#](#torch.backends.cuda.enable_math_sdp) Warning

This flag is beta and subject to change.

Enables or disables math scaled dot product attention.


-
torch.backends.cuda.fp16_bf16_reduction_math_sdp_allowed()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L451)[#](#torch.backends.cuda.fp16_bf16_reduction_math_sdp_allowed) Warning

This flag is beta and subject to change.

Returns whether fp16/bf16 reduction in math scaled dot product attention is enabled or not.


-
torch.backends.cuda.allow_fp16_bf16_reduction_math_sdp(
*enabled*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L442)[#](#torch.backends.cuda.allow_fp16_bf16_reduction_math_sdp) Warning

This flag is beta and subject to change.

Enables or disables fp16/bf16 reduction in math scaled dot product attention.


-
torch.backends.cuda.cudnn_sdp_enabled()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L533)[#](#torch.backends.cuda.cudnn_sdp_enabled) Warning

This flag is beta and subject to change.

Returns whether cuDNN scaled dot product attention is enabled or not.


-
torch.backends.cuda.enable_cudnn_sdp(
*enabled*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L542)[#](#torch.backends.cuda.enable_cudnn_sdp) Warning

This flag is beta and subject to change.

Enables or disables cuDNN scaled dot product attention.


-
torch.backends.cuda.is_flash_attention_available()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L460)[#](#torch.backends.cuda.is_flash_attention_available) Check if PyTorch was built with FlashAttention for scaled_dot_product_attention.

- Returns:
True if FlashAttention is built and available; otherwise, False.

- Return type:

Note

This function is dependent on a CUDA-enabled build of PyTorch. It will return False in non-CUDA environments.


-
torch.backends.cuda.can_use_flash_attention(
*params*,*debug=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L473)[#](#torch.backends.cuda.can_use_flash_attention) Check if FlashAttention can be utilized in scaled_dot_product_attention.

- Parameters:
**params**() – An instance of SDPAParams containing the tensors for query, key, value, an optional attention mask, dropout rate, and a flag indicating if the attention is causal.*_SDPAParams***debug**() – Whether to logging.warn debug information as to why FlashAttention could not be run. Defaults to False.*bool*

- Returns:
True if FlashAttention can be used with the given parameters; otherwise, False.

- Return type:

Note

This function is dependent on a CUDA-enabled build of PyTorch. It will return False in non-CUDA environments.


-
torch.backends.cuda.can_use_efficient_attention(
*params*,*debug=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L493)[#](#torch.backends.cuda.can_use_efficient_attention) Check if efficient_attention can be utilized in scaled_dot_product_attention.

- Parameters:
**params**() – An instance of SDPAParams containing the tensors for query, key, value, an optional attention mask, dropout rate, and a flag indicating if the attention is causal.*_SDPAParams***debug**() – Whether to logging.warn with information as to why efficient_attention could not be run. Defaults to False.*bool*

- Returns:
True if efficient_attention can be used with the given parameters; otherwise, False.

- Return type:

Note

This function is dependent on a CUDA-enabled build of PyTorch. It will return False in non-CUDA environments.


-
torch.backends.cuda.can_use_cudnn_attention(
*params*,*debug=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L513)[#](#torch.backends.cuda.can_use_cudnn_attention) Check if cudnn_attention can be utilized in scaled_dot_product_attention.

- Parameters:
**params**() – An instance of SDPAParams containing the tensors for query, key, value, an optional attention mask, dropout rate, and a flag indicating if the attention is causal.*_SDPAParams***debug**() – Whether to logging.warn with information as to why cuDNN attention could not be run. Defaults to False.*bool*

- Returns:
True if cuDNN can be used with the given parameters; otherwise, False.

- Return type:

Note

This function is dependent on a CUDA-enabled build of PyTorch. It will return False in non-CUDA environments.


-
torch.backends.cuda.sdp_kernel(
*enable_flash=True*,*enable_math=True*,*enable_mem_efficient=True*,*enable_cudnn=True*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cuda/__init__.py#L551)[#](#torch.backends.cuda.sdp_kernel) Warning

This flag is beta and subject to change.

This context manager can be used to temporarily enable or disable any of the three backends for scaled dot product attention. Upon exiting the context manager, the previous state of the flags will be restored.


## torch.backends.cudnn[#](#module-torch.backends.cudnn)

-
torch.backends.cudnn.is_available()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/cudnn/__init__.py#L124)[#](#torch.backends.cudnn.is_available) Return a bool indicating if CUDNN is currently available.


-
torch.backends.cudnn.allow_tf32
[#](#torch.backends.cudnn.allow_tf32) A

that controls where TensorFloat-32 tensor cores may be used in cuDNN convolutions on Ampere or newer GPUs. allow_tf32 is going to be deprecated. See`bool`

[TensorFloat-32 (TF32) on Ampere (and later) devices](notes/cuda.html#tf32-on-ampere).

-
torch.backends.cudnn.deterministic
[#](#torch.backends.cudnn.deterministic) A

that, if True, causes cuDNN to only use deterministic convolution algorithms. See also`bool`

and`torch.are_deterministic_algorithms_enabled()`

.`torch.use_deterministic_algorithms()`


-
torch.backends.cudnn.benchmark
[#](#torch.backends.cudnn.benchmark) A

that, if True, causes cuDNN to benchmark multiple convolution algorithms and select the fastest.`bool`


-
torch.backends.cudnn.benchmark_limit
[#](#torch.backends.cudnn.benchmark_limit) A

that specifies the maximum number of cuDNN convolution algorithms to try when torch.backends.cudnn.benchmark is True. Set benchmark_limit to zero to try every available algorithm. Note that this setting only affects convolutions dispatched via the cuDNN v8 API.`int`


## torch.backends.cusparselt[#](#module-torch.backends.cusparselt)

## torch.backends.mha[#](#module-torch.backends.mha)

## torch.backends.miopen[#](#module-torch.backends.miopen)

-
torch.backends.miopen.immediate
[#](#torch.backends.miopen.immediate) A

that, if True, causes MIOpen to use Immediate Mode (`bool`

[https://rocm.docs.amd.com/projects/MIOpen/en/latest/how-to/find-and-immediate.html](https://rocm.docs.amd.com/projects/MIOpen/en/latest/how-to/find-and-immediate.html)).

## torch.backends.mps[#](#module-torch.backends.mps)

## torch.backends.mkl[#](#module-torch.backends.mkl)

-
*class*torch.backends.mkl.verbose(*enable*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/mkl/__init__.py#L14)[#](#torch.backends.mkl.verbose) On-demand oneMKL verbosing functionality.

To make it easier to debug performance issues, oneMKL can dump verbose messages containing execution information like duration while executing the kernel. The verbosing functionality can be invoked via an environment variable named MKL_VERBOSE. However, this methodology dumps messages in all steps. Those are a large amount of verbose messages. Moreover, for investigating the performance issues, generally taking verbose messages for one single iteration is enough. This on-demand verbosing functionality makes it possible to control scope for verbose message dumping. In the following example, verbose messages will be dumped out for the second inference only.

import torch model(data) with torch.backends.mkl.verbose(torch.backends.mkl.VERBOSE_ON): model(data)

- Parameters:
**level**– Verbose level -`VERBOSE_OFF`

: Disable verbosing -`VERBOSE_ON`

: Enable verbosing


## torch.backends.mkldnn[#](#module-torch.backends.mkldnn)

-
*class*torch.backends.mkldnn.verbose(*level*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/mkldnn/__init__.py#L33)[#](#torch.backends.mkldnn.verbose) On-demand oneDNN (former MKL-DNN) verbosing functionality.

To make it easier to debug performance issues, oneDNN can dump verbose messages containing information like kernel size, input data size and execution duration while executing the kernel. The verbosing functionality can be invoked via an environment variable named DNNL_VERBOSE. However, this methodology dumps messages in all steps. Those are a large amount of verbose messages. Moreover, for investigating the performance issues, generally taking verbose messages for one single iteration is enough. This on-demand verbosing functionality makes it possible to control scope for verbose message dumping. In the following example, verbose messages will be dumped out for the second inference only.

import torch model(data) with torch.backends.mkldnn.verbose(torch.backends.mkldnn.VERBOSE_ON): model(data)

- Parameters:
**level**– Verbose level -`VERBOSE_OFF`

: Disable verbosing -`VERBOSE_ON`

: Enable verbosing -`VERBOSE_ON_CREATION`

: Enable verbosing, including oneDNN kernel creation


## torch.backends.nnpack[#](#module-torch.backends.nnpack)

## torch.backends.openmp[#](#module-torch.backends.openmp)

## torch.backends.opt_einsum[#](#module-torch.backends.opt_einsum)

-
torch.backends.opt_einsum.is_available()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/opt_einsum/__init__.py#L17)[#](#torch.backends.opt_einsum.is_available) Return a bool indicating if opt_einsum is currently available.

You must install opt-einsum in order for torch to automatically optimize einsum. To make opt-einsum available, you can install it along with torch:

`pip install torch[opt-einsum]`

or by itself:`pip install opt-einsum`

. If the package is installed, torch will import it automatically and use it accordingly. Use this function to check whether opt-einsum was installed and properly imported by torch.- Return type:


-
torch.backends.opt_einsum.get_opt_einsum()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/backends/opt_einsum/__init__.py#L30)[#](#torch.backends.opt_einsum.get_opt_einsum) Return the opt_einsum package if opt_einsum is currently available, else None.

- Return type:


-
torch.backends.opt_einsum.enabled
[#](#torch.backends.opt_einsum.enabled) A

that controls whether opt_einsum is enabled (`bool`

`True`

by default). If so, torch.einsum will use opt_einsum ([https://optimized-einsum.readthedocs.io/en/stable/path_finding.html](https://optimized-einsum.readthedocs.io/en/stable/path_finding.html)) if available to calculate an optimal path of contraction for faster performance.If opt_einsum is not available, torch.einsum will fall back to the default contraction path of left to right.


-
torch.backends.opt_einsum.strategy
[#](#torch.backends.opt_einsum.strategy) A

that specifies which strategies to try when`str`

`torch.backends.opt_einsum.enabled`

is`True`

. By default, torch.einsum will try the “auto” strategy, but the “greedy” and “optimal” strategies are also supported. Note that the “optimal” strategy is factorial on the number of inputs as it tries all possible paths. See more details in opt_einsum’s docs ([https://optimized-einsum.readthedocs.io/en/stable/path_finding.html](https://optimized-einsum.readthedocs.io/en/stable/path_finding.html)).

---

## Source: https://pytorch.org/docs/stable/distributed.html

# Distributed communication package - torch.distributed[#](#distributed-communication-package-torch-distributed)

Created On: Jul 12, 2017 | Last Updated On: Feb 14, 2026

Note

Please refer to [PyTorch Distributed Overview](https://pytorch.org/tutorials/beginner/dist_overview.html)
for a brief introduction to all features related to distributed training.

## Backends[#](#backends)

`torch.distributed`

supports four built-in backends, each with
different capabilities. The table below shows which functions are available
for use with a CPU or GPU for each backend. For NCCL, GPU refers to CUDA GPU
while for XCCL to XPU GPU.

MPI supports CUDA only if the implementation used to build PyTorch supports it.

Backend |
|
|
|
|
||||
|---|---|---|---|---|---|---|---|---|
Device |
CPU |
GPU |
CPU |
GPU |
CPU |
GPU |
CPU |
GPU |
send |
✓ |
✘ |
✓ |
? |
✘ |
✓ |
✘ |
✓ |
recv |
✓ |
✘ |
✓ |
? |
✘ |
✓ |
✘ |
✓ |
broadcast |
✓ |
✓ |
✓ |
? |
✘ |
✓ |
✘ |
✓ |
all_reduce |
✓ |
✓ |
✓ |
? |
✘ |
✓ |
✘ |
✓ |
reduce |
✓ |
✓ |
✓ |
? |
✘ |
✓ |
✘ |
✓ |
all_gather |
✓ |
✓ |
✓ |
? |
✘ |
✓ |
✘ |
✓ |
gather |
✓ |
✓ |
✓ |
? |
✘ |
✓ |
✘ |
✓ |
scatter |
✓ |
✓ |
✓ |
? |
✘ |
✓ |
✘ |
✓ |
reduce_scatter |
✓ |
✓ |
✘ |
✘ |
✘ |
✓ |
✘ |
✓ |
all_to_all |
✘ |
✘ |
✓ |
? |
✘ |
✓ |
✘ |
✓ |
barrier |
✓ |
✘ |
✓ |
? |
✘ |
✓ |
✘ |
✓ |

### Backends that come with PyTorch[#](#backends-that-come-with-pytorch)

PyTorch distributed package supports Linux (stable), macOS (stable), and Windows (prototype). By default for Linux, the Gloo and NCCL backends are built and included in PyTorch distributed (NCCL only when building with CUDA). MPI is an optional backend that can only be included if you build PyTorch from source. (e.g. building PyTorch on a host that has MPI installed.)

Note

As of PyTorch v1.8, Windows supports all collective communications backends but NCCL,
If the `init_method`

argument of [ init_process_group()](#torch.distributed.init_process_group) points to a file it must adhere
to the following schema:

Local file system,

`init_method="file:///d:/tmp/some_file"`

Shared file system,

`init_method="file://////{machine_name}/{share_folder_name}/some_file"`


Same as on Linux platform, you can enable TcpStore by setting environment variables, MASTER_ADDR and MASTER_PORT.

### Which backend to use?[#](#which-backend-to-use)

In the past, we were often asked: “which backend should I use?”.

Rule of thumb

Use the NCCL backend for distributed training with CUDA

**GPU**.Use the XCCL backend for distributed training with XPU

**GPU**.Use the Gloo backend for distributed training with

**CPU**.

GPU hosts with InfiniBand interconnect

Use NCCL, since it’s the only backend that currently supports InfiniBand and GPUDirect.


GPU hosts with Ethernet interconnect

Use NCCL, since it currently provides the best distributed GPU training performance, especially for multiprocess single-node or multi-node distributed training. If you encounter any problem with NCCL, use Gloo as the fallback option. (Note that Gloo currently runs slower than NCCL for GPUs.)


CPU hosts with InfiniBand interconnect

If your InfiniBand has enabled IP over IB, use Gloo, otherwise, use MPI instead. We are planning on adding InfiniBand support for Gloo in the upcoming releases.


CPU hosts with Ethernet interconnect

Use Gloo, unless you have specific reasons to use MPI.



### Common environment variables[#](#common-environment-variables)

#### Choosing the network interface to use[#](#choosing-the-network-interface-to-use)

By default, both the NCCL and Gloo backends will try to find the right network interface to use. If the automatically detected interface is not correct, you can override it using the following environment variables (applicable to the respective backend):

**NCCL_SOCKET_IFNAME**, for example`export NCCL_SOCKET_IFNAME=eth0`

**GLOO_SOCKET_IFNAME**, for example`export GLOO_SOCKET_IFNAME=eth0`


If you’re using the Gloo backend, you can specify multiple interfaces by separating
them by a comma, like this: `export GLOO_SOCKET_IFNAME=eth0,eth1,eth2,eth3`

.
The backend will dispatch operations in a round-robin fashion across these interfaces.
It is imperative that all processes specify the same number of interfaces in this variable.

#### Other NCCL environment variables[#](#other-nccl-environment-variables)

**Debugging** - in case of NCCL failure, you can set `NCCL_DEBUG=INFO`

to print an explicit
warning message as well as basic NCCL initialization information.

You may also use `NCCL_DEBUG_SUBSYS`

to get more details about a specific
aspect of NCCL. For example, `NCCL_DEBUG_SUBSYS=COLL`

would print logs of
collective calls, which may be helpful when debugging hangs, especially those
caused by collective type or message size mismatch. In case of topology
detection failure, it would be helpful to set `NCCL_DEBUG_SUBSYS=GRAPH`

to inspect the detailed detection result and save as reference if further help
from NCCL team is needed.

**Performance tuning** - NCCL performs automatic tuning based on its topology detection to save users’
tuning effort. On some socket-based systems, users may still try tuning
`NCCL_SOCKET_NTHREADS`

and `NCCL_NSOCKS_PERTHREAD`

to increase socket
network bandwidth. These two environment variables have been pre-tuned by NCCL
for some cloud providers, such as AWS or GCP.

For a full list of NCCL environment variables, please refer to
[NVIDIA NCCL’s official documentation](https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/env.html)

You can tune NCCL communicators even further using `torch.distributed.ProcessGroupNCCL.NCCLConfig`

and `torch.distributed.ProcessGroupNCCL.Options`

. Learn more about them using `help`

(e.g. `help(torch.distributed.ProcessGroupNCCL.NCCLConfig)`

) in the interpreter.

## Basics[#](#basics)

The `torch.distributed`

package provides PyTorch support and communication primitives
for multiprocess parallelism across several computation nodes running on one or more
machines. The class [ torch.nn.parallel.DistributedDataParallel()](generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel) builds on this
functionality to provide synchronous distributed training as a wrapper around any
PyTorch model. This differs from the kinds of parallelism provided by

[Multiprocessing package - torch.multiprocessing](multiprocessing.html)and

[in that it supports multiple network-connected machines and in that the user must explicitly launch a separate copy of the main training script for each process.](generated/torch.nn.DataParallel.html#torch.nn.DataParallel)

`torch.nn.DataParallel()`

In the single-machine synchronous case, `torch.distributed`

or the
[ torch.nn.parallel.DistributedDataParallel()](generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel) wrapper may still have advantages over other
approaches to data-parallelism, including

[:](generated/torch.nn.DataParallel.html#torch.nn.DataParallel)

`torch.nn.DataParallel()`

Each process maintains its own optimizer and performs a complete optimization step with each iteration. While this may appear redundant, since the gradients have already been gathered together and averaged across processes and are thus the same for every process, this means that no parameter broadcast step is needed, reducing time spent transferring tensors between nodes.

Each process contains an independent Python interpreter, eliminating the extra interpreter overhead and “GIL-thrashing” that comes from driving several execution threads, model replicas, or GPUs from a single Python process. This is especially important for models that make heavy use of the Python runtime, including models with recurrent layers or many small components.


## Initialization[#](#initialization)

The package needs to be initialized using the [ torch.distributed.init_process_group()](#torch.distributed.init_process_group)
or

[function before calling any other methods. Both block until all processes have joined.](#torch.distributed.device_mesh.init_device_mesh)

`torch.distributed.device_mesh.init_device_mesh()`

Warning

Initialization is not thread-safe. Process group creation should be performed from a single thread, to prevent inconsistent ‘UUID’ assignment across ranks, and to prevent races during initialization that can lead to hangs.

-
torch.distributed.is_available()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/__init__.py#L17)[#](#torch.distributed.is_available) Return

`True`

if the distributed package is available.Otherwise,

`torch.distributed`

does not expose any other APIs. Currently,`torch.distributed`

is available on Linux, MacOS and Windows. Set`USE_DISTRIBUTED=1`

to enable it when building PyTorch from source. Currently, the default value is`USE_DISTRIBUTED=1`

for Linux and Windows,`USE_DISTRIBUTED=0`

for MacOS.- Return type:


-
torch.distributed.init_process_group(
*backend=None*,*init_method=None*,*timeout=None*,*world_size=-1*,*rank=-1*,*store=None*,*group_name=''*,*pg_options=None*,*device_id=None*,*_ranks=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1603)[#](#torch.distributed.init_process_group) Initialize the default distributed process group.

This will also initialize the distributed package.

- There are 2 main ways to initialize a process group:
Specify

`store`

,`rank`

, and`world_size`

explicitly.Specify

`init_method`

(a URL string) which indicates where/how to discover peers. Optionally specify`rank`

and`world_size`

, or encode all required parameters in the URL and omit them.


If neither is specified,

`init_method`

is assumed to be “env://”.- Parameters:
**backend**(*str**or**Backend**,**optional*) – The backend to use. Depending on build-time configurations, valid values include`mpi`

,`gloo`

,`nccl`

,`ucc`

,`xccl`

or one that is registered by a third-party plugin. Since 2.6, if`backend`

is not provided, c10d will use a backend registered for the device type indicated by the device_id kwarg (if provided). The known default registrations today are:`nccl`

for`cuda`

,`gloo`

for`cpu`

,`xccl`

for`xpu`

. If neither`backend`

nor`device_id`

is provided, c10d will detect the accelerator on the run-time machine and use a backend registered for that detected accelerator (or`cpu`

). This field can be given as a lowercase string (e.g.,`"gloo"`

), which can also be accessed viaattributes (e.g.,`Backend`

`Backend.GLOO`

). If using multiple processes per machine with`nccl`

backend, each process must have exclusive access to every GPU it uses, as sharing GPUs between processes can result in deadlock or NCCL invalid usage.`ucc`

backend is experimental. Default backend for the device can be queried with.`get_default_backend_for_device()`

**init_method**(*str**,**optional*) – URL specifying how to initialize the process group. Default is “env://” if no`init_method`

or`store`

is specified. Mutually exclusive with`store`

.**world_size**(*int**,**optional*) – Number of processes participating in the job. Required if`store`

is specified.**rank**(*int**,**optional*) – Rank of the current process (it should be a number between 0 and`world_size`

-1). Required if`store`

is specified.**store**(*Store**,**optional*) – Key/value store accessible to all workers, used to exchange connection/address information. Mutually exclusive with`init_method`

.**timeout**(*timedelta**,**optional*) – Timeout for operations executed against the process group. Default value is 10 minutes for NCCL and 30 minutes for other backends. This is the duration after which collectives will be aborted asynchronously and the process will crash. This is done since CUDA execution is async and it is no longer safe to continue executing user code since failed async NCCL operations might result in subsequent CUDA operations running on corrupted data. When TORCH_NCCL_BLOCKING_WAIT is set, the process will block and wait for this timeout.**group_name**(*str**,**optional**,**deprecated*) – Group name. This argument is ignored**pg_options**(*ProcessGroupOptions**,**optional*) – process group options specifying what additional options need to be passed in during the construction of specific process groups. As of now, the only options we support is`ProcessGroupNCCL.Options`

for the`nccl`

backend,`is_high_priority_stream`

can be specified so that the nccl backend can pick up high priority cuda streams when there’re compute kernels waiting. For other available options to config nccl, See[https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/api/types.html#ncclconfig-t](https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/api/types.html#ncclconfig-t)**device_id**(*torch.device**|**int**,**optional*) – a single, specific device this process will work on, allowing for backend-specific optimizations. Currently this has two effects, only under NCCL: the communicator is immediately formed (calling`ncclCommInit*`

immediately rather than the normal lazy call) and sub-groups will use`ncclCommSplit`

when possible to avoid unnecessary overhead of group creation. If you want to know NCCL initialization error early, you can also use this field. If an int is provided, the API assumes that the accelerator type at compile time will be used.**_ranks**(*list**[**int**]**|**None*) – The ranks in the process group. If provided, the process group name will be the hash of all the ranks in the group.


Note

To enable

`backend == Backend.MPI`

, PyTorch needs to be built from source on a system that supports MPI.Note

Support for multiple backends is experimental. Currently when no backend is specified, both

`gloo`

and`nccl`

backends will be created. The`gloo`

backend will be used for collectives with CPU tensors and the`nccl`

backend will be used for collectives with CUDA tensors. A custom backend can be specified by passing in a string with format “<device_type>:<backend_name>,<device_type>:<backend_name>”, e.g. “cpu:gloo,cuda:custom_backend”.

-
torch.distributed.device_mesh.init_device_mesh(
*device_type*,*mesh_shape*,***,*mesh_dim_names=None*,*backend_override=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/device_mesh.py#L1460)[#](#torch.distributed.device_mesh.init_device_mesh) Initializes a DeviceMesh based on device_type, mesh_shape, and mesh_dim_names parameters.

This creates a DeviceMesh with an n-dimensional array layout, where n is the length of mesh_shape. If mesh_dim_names is provided, each dimension is labeled as mesh_dim_names[i].

Note

init_device_mesh follows SPMD programming model, meaning the same PyTorch Python program runs on all processes/ranks in the cluster. Ensure mesh_shape (the dimensions of the nD array describing device layout) is identical across all ranks. Inconsistent mesh_shape may lead to hanging.

Note

If no process group is found, init_device_mesh will initialize distributed process group/groups required for distributed communications behind the scene.

- Parameters:
**device_type**() – The device type of the mesh. Currently supports: “cpu”, “cuda/cuda-like”, “xpu”. Passing in a device type with a GPU index, such as “cuda:0”, is not allowed.*str***mesh_shape**(*Tuple**[**int**]*) – A tuple defining the dimensions of the multi-dimensional array describing the layout of devices.**mesh_dim_names**(*tuple**[**str**,**...**]**,**optional*) – A tuple of mesh dimension names to assign to each dimension of the multi-dimensional array describing the layout of devices. Its length must match the length of mesh_shape. Each string in mesh_dim_names must be unique.**backend_override**(*Dict**[**int**|**str**,**tuple**[**str**,**Options**]**|**str**|**Options**]**,**optional*) – Overrides for some or all of the ProcessGroups that will be created for each mesh dimension. Each key can be either the index of a dimension or its name (if mesh_dim_names is provided). Each value can be a tuple containing the name of the backend and its options, or just one of these two components (in which case the other will be set to its default value).

- Returns:
A

object representing the device layout.`DeviceMesh`

- Return type:

Example:

>>> from torch.distributed.device_mesh import init_device_mesh >>> >>> mesh_1d = init_device_mesh("cuda", mesh_shape=(8,)) >>> mesh_2d = init_device_mesh("cuda", mesh_shape=(2, 8), mesh_dim_names=("dp", "tp"))


-
torch.distributed.is_initialized()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1333)[#](#torch.distributed.is_initialized) Check if the default process group has been initialized.

- Return type:


-
torch.distributed.distributed_c10d.is_xccl_available()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1291)[#](#torch.distributed.distributed_c10d.is_xccl_available) Check if the XCCL backend is available.

- Return type:


-
torch.distributed.distributed_c10d.batch_isend_irecv(
*p2p_op_list*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2847)[#](#torch.distributed.distributed_c10d.batch_isend_irecv) Send or Receive a batch of tensors asynchronously and return a list of requests.

Process each of the operations in

`p2p_op_list`

and return the corresponding requests. NCCL, Gloo, and UCC backend are currently supported.- Parameters:
**p2p_op_list**(*list**[**P2POp**]*) – A list of point-to-point operations(type of each operator is`torch.distributed.P2POp`

). The order of the isend/irecv in the list matters and it needs to match with corresponding isend/irecv on the remote end.- Returns:
A list of distributed request objects returned by calling the corresponding op in the op_list.

- Return type:

Examples

>>> send_tensor = torch.arange(2, dtype=torch.float32) + 2 * rank >>> recv_tensor = torch.randn(2, dtype=torch.float32) >>> send_op = dist.P2POp(dist.isend, send_tensor, (rank + 1) % world_size) >>> recv_op = dist.P2POp( ... dist.irecv, recv_tensor, (rank - 1 + world_size) % world_size ... ) >>> reqs = batch_isend_irecv([send_op, recv_op]) >>> for req in reqs: >>> req.wait() >>> recv_tensor tensor([2, 3]) # Rank 0 tensor([0, 1]) # Rank 1

Note

Note that when this API is used with the NCCL PG backend, users must set the current GPU device with torch.cuda.set_device, otherwise it will lead to unexpected hang issues.

In addition, if this API is the first collective call in the

`group`

passed to`dist.P2POp`

, all ranks of the`group`

must participate in this API call; otherwise, the behavior is undefined. If this API call is not the first collective call in the`group`

, batched P2P operations involving only a subset of ranks of the`group`

are allowed.

-
torch.distributed.distributed_c10d.destroy_process_group(
*group=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2273)[#](#torch.distributed.distributed_c10d.destroy_process_group) Destroy a given process group, and deinitialize the distributed package.

- Parameters:
**group**(*ProcessGroup**,**optional*) – The process group to be destroyed, if group.WORLD is given, all process groups including the default one will be destroyed.


-
torch.distributed.distributed_c10d.is_backend_available(
*backend*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1308)[#](#torch.distributed.distributed_c10d.is_backend_available) Check backend availability.

Checks if the given backend is available and supports the built-in backends or third-party backends through function

`Backend.register_backend`

.

-
torch.distributed.distributed_c10d.irecv(
*tensor*,*src=None*,*group=None*,*tag=0*,*group_src=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2555)[#](#torch.distributed.distributed_c10d.irecv) Receives a tensor asynchronously.

Warning

`tag`

is not supported with the NCCL backend.Unlike recv, which is blocking, irecv allows src == dst rank, i.e. recv from self.

- Parameters:
**tensor**() – Tensor to fill with received data.*Tensor***src**(*int**,**optional*) – Source rank on global process group (regardless of`group`

argument). Will receive from any process if unspecified.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**tag**(*int**,**optional*) – Tag to match recv with remote send**group_src**(*int**,**optional*) – Destination rank on`group`

. Invalid to specify both`src`

and`group_src`

.

- Returns:
A distributed request object. None, if not part of the group

- Return type:
| None*Work*


-
torch.distributed.distributed_c10d.is_gloo_available()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1281)[#](#torch.distributed.distributed_c10d.is_gloo_available) Check if the Gloo backend is available.

- Return type:


-
torch.distributed.distributed_c10d.is_initialized()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1333)[#](#torch.distributed.distributed_c10d.is_initialized) Check if the default process group has been initialized.

- Return type:


-
torch.distributed.distributed_c10d.is_mpi_available()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1271)[#](#torch.distributed.distributed_c10d.is_mpi_available) Check if the MPI backend is available.

- Return type:


-
torch.distributed.distributed_c10d.is_nccl_available()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1276)[#](#torch.distributed.distributed_c10d.is_nccl_available) Check if the NCCL backend is available.

- Return type:


-
torch.distributed.distributed_c10d.is_torchelastic_launched()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1338)[#](#torch.distributed.distributed_c10d.is_torchelastic_launched) Check whether this process was launched with

`torch.distributed.elastic`

(aka torchelastic).The existence of

`TORCHELASTIC_RUN_ID`

environment variable is used as a proxy to determine whether the current process was launched with torchelastic. This is a reasonable proxy since`TORCHELASTIC_RUN_ID`

maps to the rendezvous id which is always a non-null value indicating the job id for peer discovery purposes..- Return type:


-
torch.distributed.distributed_c10d.is_ucc_available()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1286)[#](#torch.distributed.distributed_c10d.is_ucc_available) Check if the UCC backend is available.

- Return type:


-
torch.distributed.is_torchelastic_launched()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1338)[#](#torch.distributed.is_torchelastic_launched) Check whether this process was launched with

`torch.distributed.elastic`

(aka torchelastic).The existence of

`TORCHELASTIC_RUN_ID`

environment variable is used as a proxy to determine whether the current process was launched with torchelastic. This is a reasonable proxy since`TORCHELASTIC_RUN_ID`

maps to the rendezvous id which is always a non-null value indicating the job id for peer discovery purposes..- Return type:


-
torch.distributed.get_default_backend_for_device(
*device*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1436)[#](#torch.distributed.get_default_backend_for_device) Return the default backend for the given device.

- Parameters:
**device**(*Union**[**str**,**torch.device**]*) – The device to get the default backend for.- Returns:
The default backend for the given device as a lower case string.

- Return type:


Currently three initialization methods are supported:

### TCP initialization[#](#tcp-initialization)

There are two ways to initialize using TCP, both requiring a network address
reachable from all processes and a desired `world_size`

. The first way
requires specifying an address that belongs to the rank 0 process. This
initialization method requires that all processes have manually specified ranks.

Note that multicast address is not supported anymore in the latest distributed
package. `group_name`

is deprecated as well.

```
import torch.distributed as dist
# Use address of one of the machines
dist.init_process_group(backend, init_method='tcp://10.1.1.20:23456',
rank=args.rank, world_size=4)
```

### Environment variable initialization[#](#environment-variable-initialization)

This method will read the configuration from environment variables, allowing one to fully customize how the information is obtained. The variables to be set are:

`MASTER_PORT`

- required; has to be a free port on machine with rank 0`MASTER_ADDR`

- required (except for rank 0); address of rank 0 node`WORLD_SIZE`

- required; can be set either here, or in a call to init function`RANK`

- required; can be set either here, or in a call to init function

The machine with rank 0 will be used to set up all connections.

This is the default method, meaning that `init_method`

does not have to be specified (or
can be `env://`

).

### Improving initialization time[#](#improving-initialization-time)

`TORCH_GLOO_LAZY_INIT`

- establishes connections on demand rather than using a full mesh which can greatly improve initialization time for non all2all operations.

## Post-Initialization[#](#post-initialization)

Once [ torch.distributed.init_process_group()](#torch.distributed.init_process_group) was run, the following functions can be used. To
check whether the process group has already been initialized use

[.](#torch.distributed.is_initialized)

`torch.distributed.is_initialized()`

-
*class*torch.distributed.Backend(*name*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L257)[#](#torch.distributed.Backend) An enum-like class for backends.

Available backends: GLOO, NCCL, UCC, MPI, XCCL, FAKE, and other registered backends.

The values of this class are lowercase strings, e.g.,

`"gloo"`

. They can be accessed as attributes, e.g.,`Backend.NCCL`

.This class can be directly called to parse the string, e.g.,

`Backend(backend_str)`

will check if`backend_str`

is valid, and return the parsed lowercase string if so. It also accepts uppercase strings, e.g.,`Backend("GLOO")`

returns`"gloo"`

.Note

The entry

`Backend.UNDEFINED`

is present but only used as initial value of some fields. Users should neither use it directly nor assume its existence.-
*classmethod*register_backend(*name*,*func*,*extended_api=False*,*devices=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L327)[#](#torch.distributed.Backend.register_backend) Register a new backend with the given name and instantiating function.

This class method is used by 3rd party

`ProcessGroup`

extension to register new backends.- Parameters:
**name**() – Backend name of the*str*`ProcessGroup`

extension. It should match the one in`init_process_group()`

.**func**(*function*) – Function handler that instantiates the backend. The function should be implemented in the backend extension and takes four arguments, including`store`

,`rank`

,`world_size`

, and`timeout`

.**extended_api**(*bool**,**optional*) – Whether the backend supports extended argument structure. Default:`False`

. If set to`True`

, the backend will get an instance of`c10d::DistributedBackendOptions`

, and a process group options object as defined by the backend implementation.**device**(*str**or**list**of**str**,**optional*) – device type this backend supports, e.g. “cpu”, “cuda”, etc. If None, assuming both “cpu” and “cuda”


Note

This support of 3rd party backend is experimental and subject to change.


-

-
torch.distributed.get_backend(
*group=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1410)[#](#torch.distributed.get_backend) Return the backend of the given process group.

- Parameters:
**group**(*ProcessGroup**,**optional*) – The process group to work on. The default is the general main process group. If another specific group is specified, the calling process must be part of`group`

.- Returns:
The backend of the given process group as a lower case string.

- Return type:


-
torch.distributed.get_rank(
*group=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2464)[#](#torch.distributed.get_rank) Return the rank of the current process in the provided

`group`

, default otherwise.Rank is a unique identifier assigned to each process within a distributed process group. They are always consecutive integers ranging from 0 to

`world_size`

.- Parameters:
**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.- Returns:
The rank of the process group -1, if not part of the group

- Return type:


-
torch.distributed.get_world_size(
*group=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2491)[#](#torch.distributed.get_world_size) Return the number of processes in the current process group.

- Parameters:
**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.- Returns:
The world size of the process group -1, if not part of the group

- Return type:


## Shutdown[#](#shutdown)

It is important to clean up resources on exit by calling `destroy_process_group()`

.

The simplest pattern to follow is to destroy every process group and backend by calling
`destroy_process_group()`

with the default value of None for the `group`

argument, at a
point in the training script where communications are no longer needed, usually near the
end of main(). The call should be made once per trainer-process, not at the outer
process-launcher level.

if `destroy_process_group()`

is not called by all ranks in a pg within the timeout duration,
especially when there are multiple process-groups in the application e.g. for N-D parallelism,
hangs on exit are possible. This is because the destructor for ProcessGroupNCCL calls ncclCommAbort,
which must be called collectively, but the order of calling ProcessGroupNCCL’s destructor if called
by python’s GC is not deterministic. Calling `destroy_process_group()`

helps by ensuring
ncclCommAbort is called in a consistent order across ranks, and avoids calling ncclCommAbort
during ProcessGroupNCCL’s destructor.

### Reinitialization[#](#reinitialization)

`destroy_process_group`

can also be used to destroy individual process groups. One use
case could be fault tolerant training, where a process group may be destroyed and then
a new one initialized during runtime. In this case, it’s critical to synchronize the trainer
processes using some means other than torch.distributed primitives _after_ calling destroy and
before subsequently initializing. This behavior is currently unsupported/untested, due to
the difficulty of achieving this synchronization, and is considered a known issue. Please file
a github issue or RFC if this is a use case that’s blocking you.

## Groups[#](#groups)

By default collectives operate on the default group (also called the world) and
require all processes to enter the distributed function call. However, some workloads can benefit
from more fine-grained communication. This is where distributed groups come
into play. [ new_group()](#torch.distributed.new_group) function can be
used to create new groups, with arbitrary subsets of all processes. It returns
an opaque group handle that can be given as a

`group`

argument to all collectives
(collectives are distributed functions to exchange information in certain well-known programming patterns).-
torch.distributed.new_group(
*ranks=None*,*timeout=None*,*backend=None*,*pg_options=None*,*use_local_synchronization=False*,*group_desc=None*,*device_id=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L5364)[#](#torch.distributed.new_group) Create a new distributed group.

This function requires that all processes in the main group (i.e. all processes that are part of the distributed job) enter this function, even if they are not going to be members of the group. Additionally, groups should be created in the same order in all processes.

Warning

Safe concurrent usage: When using multiple process groups with the

`NCCL`

backend, the user must ensure a globally consistent execution order of collectives across ranks.If multiple threads within a process issue collectives, explicit synchronization is necessary to ensure consistent ordering.

When using async variants of torch.distributed communication APIs, a work object is returned and the communication kernel is enqueued on a separate CUDA stream, allowing overlap of communication and computation. Once one or more async ops have been issued on one process group, they must be synchronized with other cuda streams by calling work.wait() before using another process group.

See Using multiple NCCL communicators concurrently <https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/usage/communicators.html#using-multiple-nccl-communicators-concurrently> for more details.

- Parameters:
**ranks**(*list**[**int**]*) – List of ranks of group members. If`None`

, will be set to all ranks. Default is`None`

.**timeout**(*timedelta**,**optional*) – see init_process_group for details and default value.**backend**(*str**or**Backend**,**optional*) – The backend to use. Depending on build-time configurations, valid values are`gloo`

and`nccl`

. By default uses the same backend as the global group. This field should be given as a lowercase string (e.g.,`"gloo"`

), which can also be accessed viaattributes (e.g.,`Backend`

`Backend.GLOO`

). If`None`

is passed in, the backend corresponding to the default process group will be used. Default is`None`

.**pg_options**(*ProcessGroupOptions**,**optional*) – process group options specifying what additional options need to be passed in during the construction of specific process groups. i.e. for the`nccl`

backend,`is_high_priority_stream`

can be specified so that process group can pick up high priority cuda streams. For other available options to config nccl, See[https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/api/types.html#ncclconfig-tuse_local_synchronization](https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/api/types.html#ncclconfig-tuse_local_synchronization)(bool, optional): perform a group-local barrier at the end of the process group creation. This is different in that non-member ranks don’t need to call into API and don’t join the barrier.**group_desc**(*str**,**optional*) – a string to describe the process group.**device_id**(*torch.device**,**optional*) – a single, specific device to “bind” this process to, The new_group call will try to initialize a communication backend immediately for the device if this field is given.

- Returns:
A handle of distributed group that can be given to collective calls or GroupMember.NON_GROUP_MEMBER if the rank is not part of

`ranks`

.

N.B. use_local_synchronization doesn’t work with MPI.

N.B. While use_local_synchronization=True can be significantly faster with larger clusters and small process groups, care must be taken since it changes cluster behavior as non-member ranks don’t join the group barrier().

N.B. use_local_synchronization=True can lead to deadlocks when each rank creates multiple overlapping process groups. To avoid that, make sure all ranks follow the same global creation order.


-
torch.distributed.distributed_c10d.shrink_group(
*ranks_to_exclude*,*group=None*,*shrink_flags=0*,*pg_options=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L5844)[#](#torch.distributed.distributed_c10d.shrink_group) Shrinks a process group by excluding specified ranks.

Creates and returns a new, smaller process group comprising only the ranks from the original group that were not in the

`ranks_to_exclude`

list.- Parameters:
**ranks_to_exclude**(*List**[**int**]*) – A list of ranks from the original`group`

to exclude from the new group.**group**(*ProcessGroup**,**optional*) – The process group to shrink. If`None`

, the default process group is used. Defaults to`None`

.**shrink_flags**(*int**,**optional*) – Flags to control the shrinking behavior. Can be`SHRINK_DEFAULT`

(default) or`SHRINK_ABORT`

.`SHRINK_ABORT`

will attempt to terminate ongoing operations in the parent communicator before shrinking. Defaults to`SHRINK_DEFAULT`

.**pg_options**(*ProcessGroupOptions**,**optional*) – Backend-specific options to apply to the shrunken process group. If provided, the backend will use these options when creating the new group. If omitted, the new group inherits defaults from the parent.

- Returns:
a new group comprised of the remaining ranks. If the default group was shrunk, the returned group becomes the new default group.

- Return type:
- Raises:
– if the group’s backend does not support shrinking.**TypeError**– if**ValueError**`ranks_to_exclude`

is invalid (empty, out of bounds,**duplicates****, or****excludes all ranks****)****.**–– if an excluded rank calls this function or the backend**RuntimeError****fails the operation.**–


Notes

Only non-excluded ranks should call this function; excluded ranks must not participate in the shrink operation.

Shrinking the default group destroys all other process groups since rank reassignment makes them inconsistent.



-
torch.distributed.get_group_rank(
*group*,*global_rank*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1052)[#](#torch.distributed.get_group_rank) Translate a global rank into a group rank.

`global_rank`

must be part of`group`

otherwise this raises RuntimeError.- Parameters:
**group**() – ProcessGroup to find the relative rank.*ProcessGroup***global_rank**() – Global rank to query.*int*

- Returns:
Group rank of

`global_rank`

relative to`group`

- Return type:

N.B. calling this function on the default process group returns identity


-
torch.distributed.get_global_rank(
*group*,*group_rank*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1080)[#](#torch.distributed.get_global_rank) Translate a group rank into a global rank.

`group_rank`

must be part of group otherwise this raises RuntimeError.- Parameters:
**group**() – ProcessGroup to find the global rank from.*ProcessGroup***group_rank**() – Group rank to query.*int*

- Returns:
Global rank of

`group_rank`

relative to`group`

- Return type:

N.B. calling this function on the default process group returns identity


-
torch.distributed.get_process_group_ranks(
*group*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L1118)[#](#torch.distributed.get_process_group_ranks) Get all ranks associated with

`group`

.- Parameters:
**group**(*Optional**[**ProcessGroup**]*) – ProcessGroup to get all ranks from. If None, the default process group will be used.- Returns:
List of global ranks ordered by group rank.

- Return type:


## DeviceMesh[#](#devicemesh)

DeviceMesh is a higher level abstraction that manages process groups (or NCCL communicators).
It allows user to easily create inter node and intra node process groups without worrying about
how to set up the ranks correctly for different sub process groups, and it helps manage those
distributed process group easily. [ init_device_mesh()](#torch.distributed.device_mesh.init_device_mesh) function can be
used to create new DeviceMesh, with a mesh shape describing the device topology.

-
*class*torch.distributed.device_mesh.DeviceMesh(*device_type*,*mesh=None*,***,*mesh_dim_names=None*,*backend_override=None*,*_init_backend=True*,*_rank=None*,*_layout=None*,*_rank_map=None*,*_root_mesh=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/device_mesh.py#L151)[#](#torch.distributed.device_mesh.DeviceMesh) DeviceMesh represents a mesh of devices, where layout of devices could be represented as a n-d dimension array, and each value of the n-d dimensional array is the global id of the default process group ranks.

DeviceMesh could be used to setup the N dimensional device connections across the cluster, and manage the ProcessGroups for N dimensional parallelisms. Communications could happen on each dimension of the DeviceMesh separately. DeviceMesh respects the device that user selects already (i.e. if user call torch.cuda.set_device before the DeviceMesh initialization), and will select/set the device for the current process if user does not set the device beforehand. Note that manual device selection should happen BEFORE the DeviceMesh initialization.

DeviceMesh can also be used as a context manager when using together with DTensor APIs.

Note

DeviceMesh follows SPMD programming model, which means the same PyTorch Python program is running on all processes/ranks in the cluster. Therefore, users need to make sure the mesh array (which describes the layout of devices) should be identical across all ranks. Inconsistent mesh will lead to silent hang.

- Parameters:
**device_type**() – The device type of the mesh. Currently supports: “cpu”, “cuda/cuda-like”.*str***mesh**(*ndarray*) – A multi-dimensional array or an integer tensor describing the layout of devices, where the IDs are global IDs of the default process group.**_rank**() – (experimental/internal) The global rank of the current process. If not provided, it will be inferred from the default process group.*int*

- Returns:
A

object representing the device layout.`DeviceMesh`

- Return type:

The following program runs on each process/rank in an SPMD manner. In this example, we have 2 hosts with 4 GPUs each. A reduction over the first dimension of mesh will reduce across columns (0, 4), .. and (3, 7), a reduction over the second dimension of mesh reduces across rows (0, 1, 2, 3) and (4, 5, 6, 7).

Example:

>>> from torch.distributed.device_mesh import DeviceMesh >>> >>> # Initialize device mesh as (2, 4) to represent the topology >>> # of cross-host(dim 0), and within-host (dim 1). >>> mesh = DeviceMesh(device_type="cuda", mesh=[[0, 1, 2, 3],[4, 5, 6, 7]])

-
*static*from_group(*group*,*device_type*,*mesh=None*,***,*mesh_dim_names=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/device_mesh.py#L1026)[#](#torch.distributed.device_mesh.DeviceMesh.from_group) Constructs a

with`DeviceMesh`

`device_type`

from an existing`ProcessGroup`

or a list of existing`ProcessGroup`

.The constructed device mesh has number of dimensions equal to the number of groups passed. For example, if a single process group is passed in, the resulted DeviceMesh is a 1D mesh. If a list of 2 process groups is passed in, the resulted DeviceMesh is a 2D mesh.

If more than one group is passed, then the

`mesh`

and`mesh_dim_names`

arguments are required. The order of the process groups passed in determines the topology of the mesh. For example, the first process group will be the 0th dimension of the DeviceMesh. The mesh tensor passed in must have the same number of dimensions as the number of process groups passed in, and the order of the dimensions in the mesh tensor must match the order in the process groups passed in.- Parameters:
**group**(*ProcessGroup**or**list**[**ProcessGroup**]*) – the existing ProcessGroup or a list of existing ProcessGroups.**device_type**() – The device type of the mesh. Currently supports: “cpu”, “cuda/cuda-like”. Passing in a device type with a GPU index, such as “cuda:0”, is not allowed.*str***mesh**(*torch.Tensor**or**ArrayLike**,**optional*) – A multi-dimensional array or an integer tensor describing the layout of devices, where the IDs are global IDs of the default process group. Default is None.**mesh_dim_names**(*tuple**[**str**,**...**]**,**optional*) – A tuple of mesh dimension names to assign to each dimension of the multi-dimensional array describing the layout of devices. Its length must match the length of mesh_shape. Each string in mesh_dim_names must be unique. Default is None.

- Returns:
A

object representing the device layout.`DeviceMesh`

- Return type:


-
get_all_groups()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/device_mesh.py#L785)[#](#torch.distributed.device_mesh.DeviceMesh.get_all_groups) Returns a list of ProcessGroups for all mesh dimensions.

- Returns:
A list of

`ProcessGroup`

object.- Return type:


-
get_coordinate()
[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/device_mesh.py#L1206)[#](#torch.distributed.device_mesh.DeviceMesh.get_coordinate) Return the relative indices of this rank relative to all dimensions of the mesh. If this rank is not part of the mesh, return None.


-
get_group(
*mesh_dim=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/device_mesh.py#L736)[#](#torch.distributed.device_mesh.DeviceMesh.get_group) Returns the single ProcessGroup specified by mesh_dim, or, if mesh_dim is not specified and the DeviceMesh is 1-dimensional, returns the only ProcessGroup in the mesh.

- Parameters:
**mesh_dim**(*str/python:int**,**optional*) – it can be the name of the mesh dimension or the index**None.**(*of the mesh dimension. Default is*) –

- Returns:
A

`ProcessGroup`

object.- Return type:


-
get_local_rank(
*mesh_dim=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/device_mesh.py#L1143)[#](#torch.distributed.device_mesh.DeviceMesh.get_local_rank) Returns the local rank of the given mesh_dim of the DeviceMesh.

- Parameters:
**mesh_dim**(*str/python:int**,**optional*) – it can be the name of the mesh dimension or the index**None.**(*of the mesh dimension. Default is*) –

- Returns:
An integer denotes the local rank.

- Return type:

The following program runs on each process/rank in an SPMD manner. In this example, we have 2 hosts with 4 GPUs each. Calling mesh_2d.get_local_rank(mesh_dim=0) on rank 0, 1, 2, 3 would return 0. Calling mesh_2d.get_local_rank(mesh_dim=0) on rank 4, 5, 6, 7 would return 1. Calling mesh_2d.get_local_rank(mesh_dim=1) on rank 0, 4 would return 0. Calling mesh_2d.get_local_rank(mesh_dim=1) on rank 1, 5 would return 1. Calling mesh_2d.get_local_rank(mesh_dim=1) on rank 2, 6 would return 2. Calling mesh_2d.get_local_rank(mesh_dim=1) on rank 3, 7 would return 3.

Example:

>>> from torch.distributed.device_mesh import DeviceMesh >>> >>> # Initialize device mesh as (2, 4) to represent the topology >>> # of cross-host(dim 0), and within-host (dim 1). >>> mesh = DeviceMesh(device_type="cuda", mesh=[[0, 1, 2, 3],[4, 5, 6, 7]])



## Point-to-point communication[#](#point-to-point-communication)

-
torch.distributed.send(
*tensor*,*dst=None*,*group=None*,*tag=0*,*group_dst=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2600)[#](#torch.distributed.send) Send a tensor synchronously.

Warning

`tag`

is not supported with the NCCL backend.- Parameters:
**tensor**() – Tensor to send.*Tensor***dst**() – Destination rank on global process group (regardless of*int*`group`

argument). Destination rank should not be the same as the rank of the current process.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**tag**(*int**,**optional*) – Tag to match send with remote recv**group_dst**(*int**,**optional*) – Destination rank on`group`

. Invalid to specify both`dst`

and`group_dst`

.



-
torch.distributed.recv(
*tensor*,*src=None*,*group=None*,*tag=0*,*group_src=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2632)[#](#torch.distributed.recv) Receives a tensor synchronously.

Warning

`tag`

is not supported with the NCCL backend.- Parameters:
**tensor**() – Tensor to fill with received data.*Tensor***src**(*int**,**optional*) – Source rank on global process group (regardless of`group`

argument). Will receive from any process if unspecified.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**tag**(*int**,**optional*) – Tag to match recv with remote send**group_src**(*int**,**optional*) – Destination rank on`group`

. Invalid to specify both`src`

and`group_src`

.

- Returns:
Sender rank -1, if not part of the group

- Return type:


[ isend()](#torch.distributed.isend) and

[return distributed request objects when used. In general, the type of this object is unspecified as they should never be created manually, but they are guaranteed to support two methods:](#torch.distributed.irecv)

`irecv()`

`is_completed()`

- returns True if the operation has finished`wait()`

- will block the process until the operation is finished.`is_completed()`

is guaranteed to return True once it returns.

-
torch.distributed.isend(
*tensor*,*dst=None*,*group=None*,*tag=0*,*group_dst=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2510)[#](#torch.distributed.isend) Send a tensor asynchronously.

Warning

Modifying

`tensor`

before the request completes causes undefined behavior.Warning

`tag`

is not supported with the NCCL backend.Unlike send, which is blocking, isend allows src == dst rank, i.e. send to self.

- Parameters:
**tensor**() – Tensor to send.*Tensor***dst**() – Destination rank on global process group (regardless of*int*`group`

argument)**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**tag**(*int**,**optional*) – Tag to match send with remote recv**group_dst**(*int**,**optional*) – Destination rank on`group`

. Invalid to specify both`dst`

and`group_dst`


- Returns:
A distributed request object. None, if not part of the group

- Return type:
| None*Work*


-
torch.distributed.irecv(
*tensor*,*src=None*,*group=None*,*tag=0*,*group_src=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2555)[#](#torch.distributed.irecv) Receives a tensor asynchronously.

Warning

`tag`

is not supported with the NCCL backend.Unlike recv, which is blocking, irecv allows src == dst rank, i.e. recv from self.

- Parameters:
**tensor**() – Tensor to fill with received data.*Tensor***src**(*int**,**optional*) – Source rank on global process group (regardless of`group`

argument). Will receive from any process if unspecified.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**tag**(*int**,**optional*) – Tag to match recv with remote send**group_src**(*int**,**optional*) – Destination rank on`group`

. Invalid to specify both`src`

and`group_src`

.

- Returns:
A distributed request object. None, if not part of the group

- Return type:
| None*Work*


-
torch.distributed.send_object_list(
*object_list*,*dst=None*,*group=None*,*device=None*,*group_dst=None*,*use_batch=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L3463)[#](#torch.distributed.send_object_list) Sends picklable objects in

`object_list`

synchronously.Similar to

, but Python objects can be passed in. Note that all objects in`send()`

`object_list`

must be picklable in order to be sent.- Parameters:
**object_list**(*List**[**Any**]*) – List of input objects to sent. Each object must be picklable. Receiver must provide lists of equal sizes.**dst**() – Destination rank to send*int*`object_list`

to. Destination rank is based on global process group (regardless of`group`

argument)**group**(*ProcessGroup**|**None*) – (ProcessGroup, optional): The process group to work on. If None, the default process group will be used. Default is`None`

.**device**(`torch.device`

, optional) – If not None, the objects are serialized and converted to tensors which are moved to the`device`

before sending. Default is`None`

.**group_dst**(*int**,**optional*) – Destination rank on`group`

. Must specify one of`dst`

and`group_dst`

but not both**use_batch**(*bool**,**optional*) – If True, use batch p2p operations instead of regular send operations. This avoids initializing 2-rank communicators and uses existing entire group communicators. See batch_isend_irecv for usage and assumptions. Default is`False`

.

- Returns:
`None`

.

Note

For NCCL-based process groups, internal tensor representations of objects must be moved to the GPU device before communication takes place. In this case, the device used is given by

`torch.cuda.current_device()`

and it is the user’s responsibility to ensure that this is set so that each rank has an individual GPU, via`torch.cuda.set_device()`

.Warning

Object collectives have a number of serious performance and scalability limitations. See

[Object collectives](#object-collectives)for details.Warning

uses`send_object_list()`

`pickle`

module implicitly, which is known to be insecure. It is possible to construct malicious pickle data which will execute arbitrary code during unpickling. Only call this function with data you trust.Warning

Calling

with GPU tensors is not well supported and inefficient as it incurs GPU -> CPU transfer since tensors would be pickled. Please consider using`send_object_list()`

instead.`send()`

- Example::
>>> # Note: Process group initialization omitted on each rank. >>> import torch.distributed as dist >>> # Assumes backend is not NCCL >>> device = torch.device("cpu") >>> if dist.get_rank() == 0: >>> # Assumes world_size of 2. >>> objects = ["foo", 12, {1: 2}] # any picklable object >>> dist.send_object_list(objects, dst=1, device=device) >>> else: >>> objects = [None, None, None] >>> dist.recv_object_list(objects, src=0, device=device) >>> objects ['foo', 12, {1: 2}]



-
torch.distributed.recv_object_list(
*object_list*,*src=None*,*group=None*,*device=None*,*group_src=None*,*use_batch=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L3581)[#](#torch.distributed.recv_object_list) Receives picklable objects in

`object_list`

synchronously.Similar to

, but can receive Python objects.`recv()`

- Parameters:
**object_list**(*List**[**Any**]*) – List of objects to receive into. Must provide a list of sizes equal to the size of the list being sent.**src**(*int**,**optional*) – Source rank from which to recv`object_list`

. Source rank is based on global process group (regardless of`group`

argument) Will receive from any rank if set to None. Default is`None`

.**group**(*ProcessGroup**|**None*) – (ProcessGroup, optional): The process group to work on. If None, the default process group will be used. Default is`None`

.**device**(`torch.device`

, optional) – If not None, receives on this device. Default is`None`

.**group_src**(*int**,**optional*) – Destination rank on`group`

. Invalid to specify both`src`

and`group_src`

.**use_batch**(*bool**,**optional*) – If True, use batch p2p operations instead of regular send operations. This avoids initializing 2-rank communicators and uses existing entire group communicators. See batch_isend_irecv for usage and assumptions. Default is`False`

.

- Returns:
Sender rank. -1 if rank is not part of the group. If rank is part of the group,

`object_list`

will contain the sent objects from`src`

rank.

Note

For NCCL-based process groups, internal tensor representations of objects must be moved to the GPU device before communication takes place. In this case, the device used is given by

`torch.cuda.current_device()`

and it is the user’s responsibility to ensure that this is set so that each rank has an individual GPU, via`torch.cuda.set_device()`

.Warning

Object collectives have a number of serious performance and scalability limitations. See

[Object collectives](#object-collectives)for details.Warning

uses`recv_object_list()`

`pickle`

module implicitly, which is known to be insecure. It is possible to construct malicious pickle data which will execute arbitrary code during unpickling. Only call this function with data you trust.Warning

Calling

with GPU tensors is not well supported and inefficient as it incurs GPU -> CPU transfer since tensors would be pickled. Please consider using`recv_object_list()`

instead.`recv()`

- Example::
>>> # Note: Process group initialization omitted on each rank. >>> import torch.distributed as dist >>> # Assumes backend is not NCCL >>> device = torch.device("cpu") >>> if dist.get_rank() == 0: >>> # Assumes world_size of 2. >>> objects = ["foo", 12, {1: 2}] # any picklable object >>> dist.send_object_list(objects, dst=1, device=device) >>> else: >>> objects = [None, None, None] >>> dist.recv_object_list(objects, src=0, device=device) >>> objects ['foo', 12, {1: 2}]



-
torch.distributed.batch_isend_irecv(
*p2p_op_list*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2847)[#](#torch.distributed.batch_isend_irecv) Send or Receive a batch of tensors asynchronously and return a list of requests.

Process each of the operations in

`p2p_op_list`

and return the corresponding requests. NCCL, Gloo, and UCC backend are currently supported.- Parameters:
**p2p_op_list**(*list**[**P2POp**]*) – A list of point-to-point operations(type of each operator is`torch.distributed.P2POp`

). The order of the isend/irecv in the list matters and it needs to match with corresponding isend/irecv on the remote end.- Returns:
A list of distributed request objects returned by calling the corresponding op in the op_list.

- Return type:

Examples

>>> send_tensor = torch.arange(2, dtype=torch.float32) + 2 * rank >>> recv_tensor = torch.randn(2, dtype=torch.float32) >>> send_op = dist.P2POp(dist.isend, send_tensor, (rank + 1) % world_size) >>> recv_op = dist.P2POp( ... dist.irecv, recv_tensor, (rank - 1 + world_size) % world_size ... ) >>> reqs = batch_isend_irecv([send_op, recv_op]) >>> for req in reqs: >>> req.wait() >>> recv_tensor tensor([2, 3]) # Rank 0 tensor([0, 1]) # Rank 1

Note

Note that when this API is used with the NCCL PG backend, users must set the current GPU device with torch.cuda.set_device, otherwise it will lead to unexpected hang issues.

In addition, if this API is the first collective call in the

`group`

passed to`dist.P2POp`

, all ranks of the`group`

must participate in this API call; otherwise, the behavior is undefined. If this API call is not the first collective call in the`group`

, batched P2P operations involving only a subset of ranks of the`group`

are allowed.

-
*class*torch.distributed.P2POp(*op*,*tensor*,*peer=None*,*group=None*,*tag=0*,*group_peer=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L504)[#](#torch.distributed.P2POp) A class to build point-to-point operations for

`batch_isend_irecv`

.This class builds the type of P2P operation, communication buffer, peer rank, Process Group, and tag. Instances of this class will be passed to

`batch_isend_irecv`

for point-to-point communications.- Parameters:
**op**(*Callable*) – A function to send data to or receive data from a peer process. The type of`op`

is either`torch.distributed.isend`

or`torch.distributed.irecv`

.**tensor**() – Tensor to send or receive.*Tensor***peer**(*int**,**optional*) – Destination or source rank.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**tag**(*int**,**optional*) – Tag to match send with recv.**group_peer**(*int**,**optional*) – Destination or source rank.



## Synchronous and asynchronous collective operations[#](#synchronous-and-asynchronous-collective-operations)

Every collective operation function supports the following two kinds of operations,
depending on the setting of the `async_op`

flag passed into the collective:

**Synchronous operation** - the default mode, when `async_op`

is set to `False`

.
When the function returns, it is guaranteed that
the collective operation is performed. In the case of CUDA operations, it is not guaranteed
that the CUDA operation is completed, since CUDA operations are asynchronous. For CPU collectives, any
further function calls utilizing the output of the collective call will behave as expected. For CUDA collectives,
function calls utilizing the output on the same CUDA stream will behave as expected. Users must take care of
synchronization under the scenario of running under different streams. For details on CUDA semantics such as stream
synchronization, see [CUDA Semantics](https://pytorch.org/docs/stable/notes/cuda.html).
See the below script to see examples of differences in these semantics for CPU and CUDA operations.

**Asynchronous operation** - when `async_op`

is set to True. The collective operation function
returns a distributed request object. In general, you don’t need to create it manually and it
is guaranteed to support two methods:

`is_completed()`

- in the case of CPU collectives, returns`True`

if completed. In the case of CUDA operations, returns`True`

if the operation has been successfully enqueued onto a CUDA stream and the output can be utilized on the default stream without further synchronization.`wait()`

- in the case of CPU collectives, will block the process until the operation is completed. In the case of CUDA collectives, will block the currently active CUDA stream until the operation is completed (but will not block the CPU).`get_future()`

- returns`torch._C.Future`

object. Supported for NCCL, also supported for most operations on GLOO and MPI, except for peer to peer operations. Note: as we continue adopting Futures and merging APIs,`get_future()`

call might become redundant.

**Example**

The following code can serve as a reference regarding semantics for CUDA operations when using distributed collectives. It shows the explicit need to synchronize when using collective outputs on different CUDA streams:

```
# Code runs on each rank.
dist.init_process_group("nccl", rank=rank, world_size=2)
output = torch.tensor([rank]).cuda(rank)
s = torch.cuda.Stream()
handle = dist.all_reduce(output, async_op=True)
# Wait ensures the operation is enqueued, but not necessarily complete.
handle.wait()
# Using result on non-default stream.
with torch.cuda.stream(s):
s.wait_stream(torch.cuda.default_stream())
output.add_(100)
if rank == 0:
# if the explicit call to wait_stream was omitted, the output below will be
# non-deterministically 1 or 101, depending on whether the allreduce overwrote
# the value after the add completed.
print(output)
```

## Collective functions[#](#collective-functions)

-
torch.distributed.broadcast(
*tensor*,*src=None*,*group=None*,*async_op=False*,*group_src=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2926)[#](#torch.distributed.broadcast) Broadcasts the tensor to the whole group.

`tensor`

must have the same number of elements in all processes participating in the collective.- Parameters:
**tensor**() – Data to be sent if*Tensor*`src`

is the rank of current process, and tensor to be used to save received data otherwise.**src**() – Source rank on global process group (regardless of*int*`group`

argument).**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op**group_src**() – Source rank on*int*`group`

. Must specify one of`group_src`

and`src`

but not both.

- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group



-
torch.distributed.broadcast_object_list(
*object_list*,*src=None*,*group=None*,*device=None*,*group_src=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L3723)[#](#torch.distributed.broadcast_object_list) Broadcasts picklable objects in

`object_list`

to the whole group.Similar to

, but Python objects can be passed in. Note that all objects in`broadcast()`

`object_list`

must be picklable in order to be broadcasted.- Parameters:
**object_list**(*List**[**Any**]*) – List of input objects to broadcast. Each object must be picklable. Only objects on the`src`

rank will be broadcast, but each rank must provide lists of equal sizes.**src**() – Source rank from which to broadcast*int*`object_list`

. Source rank is based on global process group (regardless of`group`

argument)**group**(*ProcessGroup**|**None*) – (ProcessGroup, optional): The process group to work on. If None, the default process group will be used. Default is`None`

.**device**(`torch.device`

, optional) – If not None, the objects are serialized and converted to tensors which are moved to the`device`

before broadcasting. Default is`None`

.**group_src**() – Source rank on*int*`group`

. Must not specify one of`group_src`

and`src`

but not both.

- Returns:
`None`

. If rank is part of the group,`object_list`

will contain the broadcasted objects from`src`

rank.

Note

For NCCL-based process groups, internal tensor representations of objects must be moved to the GPU device before communication takes place. In this case, the device used is given by

`torch.cuda.current_device()`

and it is the user’s responsibility to ensure that this is set so that each rank has an individual GPU, via`torch.cuda.set_device()`

.Note

Note that this API differs slightly from the

collective since it does not provide an`broadcast()`

`async_op`

handle and thus will be a blocking call.Warning

Object collectives have a number of serious performance and scalability limitations. See

[Object collectives](#object-collectives)for details.Warning

uses`broadcast_object_list()`

`pickle`

module implicitly, which is known to be insecure. It is possible to construct malicious pickle data which will execute arbitrary code during unpickling. Only call this function with data you trust.Warning

Calling

with GPU tensors is not well supported and inefficient as it incurs GPU -> CPU transfer since tensors would be pickled. Please consider using`broadcast_object_list()`

instead.`broadcast()`

- Example::
>>> # Note: Process group initialization omitted on each rank. >>> import torch.distributed as dist >>> if dist.get_rank() == 0: >>> # Assumes world_size of 3. >>> objects = ["foo", 12, {1: 2}] # any picklable object >>> else: >>> objects = [None, None, None] >>> # Assumes backend is not NCCL >>> device = torch.device("cpu") >>> dist.broadcast_object_list(objects, src=0, device=device) >>> objects ['foo', 12, {1: 2}]



-
torch.distributed.all_reduce(
*tensor*,*op=<RedOpType.SUM: 0>*,*group=None*,*async_op=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L2978)[#](#torch.distributed.all_reduce) Reduces the tensor data across all machines in a way that all get the final result.

After the call

`tensor`

is going to be bitwise identical in all processes.Complex tensors are supported.

- Parameters:
**tensor**() – Input and output of the collective. The function operates in-place.*Tensor***op**(*optional*) – One of the values from`torch.distributed.ReduceOp`

enum. Specifies an operation used for element-wise reductions.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op

- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group


Examples

>>> # All tensors below are of torch.int64 type. >>> # We have 2 process groups, 2 ranks. >>> device = torch.device(f"cuda:{rank}") >>> tensor = torch.arange(2, dtype=torch.int64, device=device) + 1 + 2 * rank >>> tensor tensor([1, 2], device='cuda:0') # Rank 0 tensor([3, 4], device='cuda:1') # Rank 1 >>> dist.all_reduce(tensor, op=ReduceOp.SUM) >>> tensor tensor([4, 6], device='cuda:0') # Rank 0 tensor([4, 6], device='cuda:1') # Rank 1

>>> # All tensors below are of torch.cfloat type. >>> # We have 2 process groups, 2 ranks. >>> tensor = torch.tensor( ... [1 + 1j, 2 + 2j], dtype=torch.cfloat, device=device ... ) + 2 * rank * (1 + 1j) >>> tensor tensor([1.+1.j, 2.+2.j], device='cuda:0') # Rank 0 tensor([3.+3.j, 4.+4.j], device='cuda:1') # Rank 1 >>> dist.all_reduce(tensor, op=ReduceOp.SUM) >>> tensor tensor([4.+4.j, 6.+6.j], device='cuda:0') # Rank 0 tensor([4.+4.j, 6.+6.j], device='cuda:1') # Rank 1


-
torch.distributed.reduce(
*tensor*,*dst=None*,*op=<RedOpType.SUM: 0>*,*group=None*,*async_op=False*,*group_dst=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L3148)[#](#torch.distributed.reduce) Reduces the tensor data across all machines.

Only the process with rank

`dst`

is going to receive the final result.- Parameters:
**tensor**() – Input and output of the collective. The function operates in-place.*Tensor***dst**() – Destination rank on global process group (regardless of*int*`group`

argument)**op**(*optional*) – One of the values from`torch.distributed.ReduceOp`

enum. Specifies an operation used for element-wise reductions.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op**group_dst**() – Destination rank on*int*`group`

. Must specify one of`group_dst`

and`dst`

but not both.

- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group



-
torch.distributed.all_gather(
*tensor_list*,*tensor*,*group=None*,*async_op=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L3990)[#](#torch.distributed.all_gather) Gathers tensors from the whole group in a list.

Complex and uneven sized tensors are supported.

- Parameters:
**tensor_list**(*list**[**Tensor**]*) – Output list. It should contain correctly-sized tensors to be used for output of the collective. Uneven sized tensors are supported.**tensor**() – Tensor to be broadcast from current process.*Tensor***group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op

- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group


Examples

>>> # All tensors below are of torch.int64 dtype. >>> # We have 2 process groups, 2 ranks. >>> device = torch.device(f"cuda:{rank}") >>> tensor_list = [ ... torch.zeros(2, dtype=torch.int64, device=device) for _ in range(2) ... ] >>> tensor_list [tensor([0, 0], device='cuda:0'), tensor([0, 0], device='cuda:0')] # Rank 0 [tensor([0, 0], device='cuda:1'), tensor([0, 0], device='cuda:1')] # Rank 1 >>> tensor = torch.arange(2, dtype=torch.int64, device=device) + 1 + 2 * rank >>> tensor tensor([1, 2], device='cuda:0') # Rank 0 tensor([3, 4], device='cuda:1') # Rank 1 >>> dist.all_gather(tensor_list, tensor) >>> tensor_list [tensor([1, 2], device='cuda:0'), tensor([3, 4], device='cuda:0')] # Rank 0 [tensor([1, 2], device='cuda:1'), tensor([3, 4], device='cuda:1')] # Rank 1

>>> # All tensors below are of torch.cfloat dtype. >>> # We have 2 process groups, 2 ranks. >>> tensor_list = [ ... torch.zeros(2, dtype=torch.cfloat, device=device) for _ in range(2) ... ] >>> tensor_list [tensor([0.+0.j, 0.+0.j], device='cuda:0'), tensor([0.+0.j, 0.+0.j], device='cuda:0')] # Rank 0 [tensor([0.+0.j, 0.+0.j], device='cuda:1'), tensor([0.+0.j, 0.+0.j], device='cuda:1')] # Rank 1 >>> tensor = torch.tensor( ... [1 + 1j, 2 + 2j], dtype=torch.cfloat, device=device ... ) + 2 * rank * (1 + 1j) >>> tensor tensor([1.+1.j, 2.+2.j], device='cuda:0') # Rank 0 tensor([3.+3.j, 4.+4.j], device='cuda:1') # Rank 1 >>> dist.all_gather(tensor_list, tensor) >>> tensor_list [tensor([1.+1.j, 2.+2.j], device='cuda:0'), tensor([3.+3.j, 4.+4.j], device='cuda:0')] # Rank 0 [tensor([1.+1.j, 2.+2.j], device='cuda:1'), tensor([3.+3.j, 4.+4.j], device='cuda:1')] # Rank 1


-
torch.distributed.all_gather_into_tensor(
*output_tensor*,*input_tensor*,*group=None*,*async_op=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L4090)[#](#torch.distributed.all_gather_into_tensor) Gather tensors from all ranks and put them in a single output tensor.

This function requires all tensors to be the same size on each process.

- Parameters:
**output_tensor**() – Output tensor to accommodate tensor elements from all ranks. It must be correctly sized to have one of the following forms: (i) a concatenation of all the input tensors along the primary dimension; for definition of “concatenation”, see*Tensor*`torch.cat()`

; (ii) a stack of all the input tensors along the primary dimension; for definition of “stack”, see`torch.stack()`

. Examples below may better explain the supported output forms.**input_tensor**() – Tensor to be gathered from current rank. Different from the*Tensor*`all_gather`

API, the input tensors in this API must have the same size across all ranks.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op

- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group


Examples

>>> # All tensors below are of torch.int64 dtype and on CUDA devices. >>> # We have two ranks. >>> device = torch.device(f"cuda:{rank}") >>> tensor_in = torch.arange(2, dtype=torch.int64, device=device) + 1 + 2 * rank >>> tensor_in tensor([1, 2], device='cuda:0') # Rank 0 tensor([3, 4], device='cuda:1') # Rank 1 >>> # Output in concatenation form >>> tensor_out = torch.zeros(world_size * 2, dtype=torch.int64, device=device) >>> dist.all_gather_into_tensor(tensor_out, tensor_in) >>> tensor_out tensor([1, 2, 3, 4], device='cuda:0') # Rank 0 tensor([1, 2, 3, 4], device='cuda:1') # Rank 1 >>> # Output in stack form >>> tensor_out2 = torch.zeros(world_size, 2, dtype=torch.int64, device=device) >>> dist.all_gather_into_tensor(tensor_out2, tensor_in) >>> tensor_out2 tensor([[1, 2], [3, 4]], device='cuda:0') # Rank 0 tensor([[1, 2], [3, 4]], device='cuda:1') # Rank 1


-
torch.distributed.all_gather_object(
*object_list*,*obj*,*group=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L3237)[#](#torch.distributed.all_gather_object) Gathers picklable objects from the whole group into a list.

Similar to

, but Python objects can be passed in. Note that the object must be picklable in order to be gathered.`all_gather()`

- Parameters:
**object_list**(*list**[**Any**]*) – Output list. It should be correctly sized as the size of the group for this collective and will contain the output.**obj**(*Any*) – Pickable Python object to be broadcast from current process.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used. Default is`None`

.

- Returns:
None. If the calling rank is part of this group, the output of the collective will be populated into the input

`object_list`

. If the calling rank is not part of the group, the passed in`object_list`

will be unmodified.

Note

Note that this API differs slightly from the

collective since it does not provide an`all_gather()`

`async_op`

handle and thus will be a blocking call.Note

For NCCL-based processed groups, internal tensor representations of objects must be moved to the GPU device before communication takes place. In this case, the device used is given by

`torch.cuda.current_device()`

and it is the user’s responsibility to ensure that this is set so that each rank has an individual GPU, via`torch.cuda.set_device()`

.Warning

Object collectives have a number of serious performance and scalability limitations. See

[Object collectives](#object-collectives)for details.Warning

uses`all_gather_object()`

`pickle`

module implicitly, which is known to be insecure. It is possible to construct malicious pickle data which will execute arbitrary code during unpickling. Only call this function with data you trust.Warning

Calling

with GPU tensors is not well supported and inefficient as it incurs GPU -> CPU transfer since tensors would be pickled. Please consider using`all_gather_object()`

instead.`all_gather()`

- Example::
>>> # Note: Process group initialization omitted on each rank. >>> import torch.distributed as dist >>> # Assumes world_size of 3. >>> gather_objects = ["foo", 12, {1: 2}] # any picklable object >>> output = [None for _ in gather_objects] >>> dist.all_gather_object(output, gather_objects[dist.get_rank()]) >>> output ['foo', 12, {1: 2}]



-
torch.distributed.gather(
*tensor*,*gather_list=None*,*dst=None*,*group=None*,*async_op=False*,*group_dst=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L4329)[#](#torch.distributed.gather) Gathers a list of tensors in a single process.

This function requires all tensors to be the same size on each process.

- Parameters:
**tensor**() – Input tensor.*Tensor***gather_list**(*list**[**Tensor**]**,**optional*) – List of appropriately, same-sized tensors to use for gathered data (default is None, must be specified on the destination rank)**dst**(*int**,**optional*) – Destination rank on global process group (regardless of`group`

argument). (If both`dst`

and`group_dst`

are None, default is global rank 0)**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op**group_dst**(*int**,**optional*) – Destination rank on`group`

. Invalid to specify both`dst`

and`group_dst`


- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group


Note

Note that all Tensors in gather_list must have the same size.

- Example::
>>> # We have 2 process groups, 2 ranks. >>> tensor_size = 2 >>> device = torch.device(f'cuda:{rank}') >>> tensor = torch.ones(tensor_size, device=device) + rank >>> if dist.get_rank() == 0: >>> gather_list = [torch.zeros_like(tensor, device=device) for i in range(2)] >>> else: >>> gather_list = None >>> dist.gather(tensor, gather_list, dst=0) >>> # Rank 0 gets gathered data. >>> gather_list [tensor([1., 1.], device='cuda:0'), tensor([2., 2.], device='cuda:0')] # Rank 0 None # Rank 1



-
torch.distributed.gather_object(
*obj*,*object_gather_list=None*,*dst=None*,*group=None*,*group_dst=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L3332)[#](#torch.distributed.gather_object) Gathers picklable objects from the whole group in a single process.

Similar to

, but Python objects can be passed in. Note that the object must be picklable in order to be gathered.`gather()`

- Parameters:
**obj**(*Any*) – Input object. Must be picklable.**object_gather_list**(*list**[**Any**]*) – Output list. On the`dst`

rank, it should be correctly sized as the size of the group for this collective and will contain the output. Must be`None`

on non-dst ranks. (default is`None`

)**dst**(*int**,**optional*) – Destination rank on global process group (regardless of`group`

argument). (If both`dst`

and`group_dst`

are None, default is global rank 0)**group**(*ProcessGroup**|**None*) – (ProcessGroup, optional): The process group to work on. If None, the default process group will be used. Default is`None`

.**group_dst**(*int**,**optional*) – Destination rank on`group`

. Invalid to specify both`dst`

and`group_dst`


- Returns:
None. On the

`dst`

rank,`object_gather_list`

will contain the output of the collective.

Note

Note that this API differs slightly from the gather collective since it does not provide an async_op handle and thus will be a blocking call.

Note

For NCCL-based processed groups, internal tensor representations of objects must be moved to the GPU device before communication takes place. In this case, the device used is given by

`torch.cuda.current_device()`

and it is the user’s responsibility to ensure that this is set so that each rank has an individual GPU, via`torch.cuda.set_device()`

.Warning

Object collectives have a number of serious performance and scalability limitations. See

[Object collectives](#object-collectives)for details.Warning

uses`gather_object()`

`pickle`

module implicitly, which is known to be insecure. It is possible to construct malicious pickle data which will execute arbitrary code during unpickling. Only call this function with data you trust.Warning

Calling

with GPU tensors is not well supported and inefficient as it incurs GPU -> CPU transfer since tensors would be pickled. Please consider using`gather_object()`

instead.`gather()`

- Example::
>>> # Note: Process group initialization omitted on each rank. >>> import torch.distributed as dist >>> # Assumes world_size of 3. >>> gather_objects = ["foo", 12, {1: 2}] # any picklable object >>> output = [None for _ in gather_objects] >>> dist.gather_object( ... gather_objects[dist.get_rank()], ... output if dist.get_rank() == 0 else None, ... dst=0 ... ) >>> # On rank 0 >>> output ['foo', 12, {1: 2}]



-
torch.distributed.scatter(
*tensor*,*scatter_list=None*,*src=None*,*group=None*,*async_op=False*,*group_src=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L4412)[#](#torch.distributed.scatter) Scatters a list of tensors to all processes in a group.

Each process will receive exactly one tensor and store its data in the

`tensor`

argument.Complex tensors are supported.

- Parameters:
**tensor**() – Output tensor.*Tensor***scatter_list**(*list**[**Tensor**]*) – List of tensors to scatter (default is None, must be specified on the source rank)**src**() – Source rank on global process group (regardless of*int*`group`

argument). (If both`src`

and`group_src`

are None, default is global rank 0)**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op**group_src**(*int**,**optional*) – Source rank on`group`

. Invalid to specify both`src`

and`group_src`


- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group


Note

Note that all Tensors in scatter_list must have the same size.

- Example::
>>> # Note: Process group initialization omitted on each rank. >>> import torch.distributed as dist >>> tensor_size = 2 >>> device = torch.device(f'cuda:{rank}') >>> output_tensor = torch.zeros(tensor_size, device=device) >>> if dist.get_rank() == 0: >>> # Assumes world_size of 2. >>> # Only tensors, all of which must be the same size. >>> t_ones = torch.ones(tensor_size, device=device) >>> t_fives = torch.ones(tensor_size, device=device) * 5 >>> scatter_list = [t_ones, t_fives] >>> else: >>> scatter_list = None >>> dist.scatter(output_tensor, scatter_list, src=0) >>> # Rank i gets scatter_list[i]. >>> output_tensor tensor([1., 1.], device='cuda:0') # Rank 0 tensor([5., 5.], device='cuda:1') # Rank 1



-
torch.distributed.scatter_object_list(
*scatter_object_output_list*,*scatter_object_input_list=None*,*src=None*,*group=None*,*group_src=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L3855)[#](#torch.distributed.scatter_object_list) Scatters picklable objects in

`scatter_object_input_list`

to the whole group.Similar to

, but Python objects can be passed in. On each rank, the scattered object will be stored as the first element of`scatter()`

`scatter_object_output_list`

. Note that all objects in`scatter_object_input_list`

must be picklable in order to be scattered.- Parameters:
**scatter_object_output_list**(*List**[**Any**]*) – Non-empty list whose first element will store the object scattered to this rank.**scatter_object_input_list**(*List**[**Any**]**,**optional*) – List of input objects to scatter. Each object must be picklable. Only objects on the`src`

rank will be scattered, and the argument can be`None`

for non-src ranks.**src**() – Source rank from which to scatter*int*`scatter_object_input_list`

. Source rank is based on global process group (regardless of`group`

argument). (If both`src`

and`group_src`

are None, default is global rank 0)**group**(*ProcessGroup**|**None*) – (ProcessGroup, optional): The process group to work on. If None, the default process group will be used. Default is`None`

.**group_src**(*int**,**optional*) – Source rank on`group`

. Invalid to specify both`src`

and`group_src`


- Returns:
`None`

. If rank is part of the group,`scatter_object_output_list`

will have its first element set to the scattered object for this rank.

Note

Note that this API differs slightly from the scatter collective since it does not provide an

`async_op`

handle and thus will be a blocking call.Warning

Object collectives have a number of serious performance and scalability limitations. See

[Object collectives](#object-collectives)for details.Warning

uses`scatter_object_list()`

`pickle`

module implicitly, which is known to be insecure. It is possible to construct malicious pickle data which will execute arbitrary code during unpickling. Only call this function with data you trust.Warning

Calling

with GPU tensors is not well supported and inefficient as it incurs GPU -> CPU transfer since tensors would be pickled. Please consider using`scatter_object_list()`

instead.`scatter()`

- Example::
>>> # Note: Process group initialization omitted on each rank. >>> import torch.distributed as dist >>> if dist.get_rank() == 0: >>> # Assumes world_size of 3. >>> objects = ["foo", 12, {1: 2}] # any picklable object >>> else: >>> # Can be any list on non-src ranks, elements are not used. >>> objects = [None, None, None] >>> output_list = [None] >>> dist.scatter_object_list(output_list, objects, src=0) >>> # Rank i gets objects[i]. For example, on rank 2: >>> output_list [{1: 2}]



-
torch.distributed.reduce_scatter(
*output*,*input_list*,*op=<RedOpType.SUM: 0>*,*group=None*,*async_op=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L4517)[#](#torch.distributed.reduce_scatter) Reduces, then scatters a list of tensors to all processes in a group.

- Parameters:
**output**() – Output tensor.*Tensor***input_list**(*list**[**Tensor**]*) – List of tensors to reduce and scatter.**op**(*optional*) – One of the values from`torch.distributed.ReduceOp`

enum. Specifies an operation used for element-wise reductions.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op.

- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group.



-
torch.distributed.reduce_scatter_tensor(
*output*,*input*,*op=<RedOpType.SUM: 0>*,*group=None*,*async_op=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L4562)[#](#torch.distributed.reduce_scatter_tensor) Reduces, then scatters a tensor to all ranks in a group.

- Parameters:
**output**() – Output tensor. It should have the same size across all ranks.*Tensor***input**() – Input tensor to be reduced and scattered. Its size should be output tensor size times the world size. The input tensor can have one of the following shapes: (i) a concatenation of the output tensors along the primary dimension, or (ii) a stack of the output tensors along the primary dimension. For definition of “concatenation”, see*Tensor*`torch.cat()`

. For definition of “stack”, see`torch.stack()`

.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op.

- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group.


Examples

>>> # All tensors below are of torch.int64 dtype and on CUDA devices. >>> # We have two ranks. >>> device = torch.device(f"cuda:{rank}") >>> tensor_out = torch.zeros(2, dtype=torch.int64, device=device) >>> # Input in concatenation form >>> tensor_in = torch.arange(world_size * 2, dtype=torch.int64, device=device) >>> tensor_in tensor([0, 1, 2, 3], device='cuda:0') # Rank 0 tensor([0, 1, 2, 3], device='cuda:1') # Rank 1 >>> dist.reduce_scatter_tensor(tensor_out, tensor_in) >>> tensor_out tensor([0, 2], device='cuda:0') # Rank 0 tensor([4, 6], device='cuda:1') # Rank 1 >>> # Input in stack form >>> tensor_in = torch.reshape(tensor_in, (world_size, 2)) >>> tensor_in tensor([[0, 1], [2, 3]], device='cuda:0') # Rank 0 tensor([[0, 1], [2, 3]], device='cuda:1') # Rank 1 >>> dist.reduce_scatter_tensor(tensor_out, tensor_in) >>> tensor_out tensor([0, 2], device='cuda:0') # Rank 0 tensor([4, 6], device='cuda:1') # Rank 1


-
torch.distributed.all_to_all_single(
*output*,*input*,*output_split_sizes=None*,*input_split_sizes=None*,*group=None*,*async_op=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L4693)[#](#torch.distributed.all_to_all_single) Split input tensor and then scatter the split list to all processes in a group.

Later the received tensors are concatenated from all the processes in the group and returned as a single output tensor.

Complex tensors are supported.

- Parameters:
**output**() – Gathered concatenated output tensor.*Tensor***input**() – Input tensor to scatter.*Tensor***output_split_sizes**– (list[Int], optional): Output split sizes for dim 0 if specified None or empty, dim 0 of`output`

tensor must divide equally by`world_size`

.**input_split_sizes**– (list[Int], optional): Input split sizes for dim 0 if specified None or empty, dim 0 of`input`

tensor must divide equally by`world_size`

.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op.

- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group.


Warning

all_to_all_single is experimental and subject to change.

Examples

>>> input = torch.arange(4) + rank * 4 >>> input tensor([0, 1, 2, 3]) # Rank 0 tensor([4, 5, 6, 7]) # Rank 1 tensor([8, 9, 10, 11]) # Rank 2 tensor([12, 13, 14, 15]) # Rank 3 >>> output = torch.empty([4], dtype=torch.int64) >>> dist.all_to_all_single(output, input) >>> output tensor([0, 4, 8, 12]) # Rank 0 tensor([1, 5, 9, 13]) # Rank 1 tensor([2, 6, 10, 14]) # Rank 2 tensor([3, 7, 11, 15]) # Rank 3

>>> # Essentially, it is similar to following operation: >>> scatter_list = list(input.chunk(world_size)) >>> gather_list = list(output.chunk(world_size)) >>> for i in range(world_size): >>> dist.scatter(gather_list[i], scatter_list if i == rank else [], src = i)

>>> # Another example with uneven split >>> input tensor([0, 1, 2, 3, 4, 5]) # Rank 0 tensor([10, 11, 12, 13, 14, 15, 16, 17, 18]) # Rank 1 tensor([20, 21, 22, 23, 24]) # Rank 2 tensor([30, 31, 32, 33, 34, 35, 36]) # Rank 3 >>> input_splits [2, 2, 1, 1] # Rank 0 [3, 2, 2, 2] # Rank 1 [2, 1, 1, 1] # Rank 2 [2, 2, 2, 1] # Rank 3 >>> output_splits [2, 3, 2, 2] # Rank 0 [2, 2, 1, 2] # Rank 1 [1, 2, 1, 2] # Rank 2 [1, 2, 1, 1] # Rank 3 >>> output = ... >>> dist.all_to_all_single(output, input, output_splits, input_splits) >>> output tensor([ 0, 1, 10, 11, 12, 20, 21, 30, 31]) # Rank 0 tensor([ 2, 3, 13, 14, 22, 32, 33]) # Rank 1 tensor([ 4, 15, 16, 23, 34, 35]) # Rank 2 tensor([ 5, 17, 18, 24, 36]) # Rank 3

>>> # Another example with tensors of torch.cfloat type. >>> input = torch.tensor( ... [1 + 1j, 2 + 2j, 3 + 3j, 4 + 4j], dtype=torch.cfloat ... ) + 4 * rank * (1 + 1j) >>> input tensor([1+1j, 2+2j, 3+3j, 4+4j]) # Rank 0 tensor([5+5j, 6+6j, 7+7j, 8+8j]) # Rank 1 tensor([9+9j, 10+10j, 11+11j, 12+12j]) # Rank 2 tensor([13+13j, 14+14j, 15+15j, 16+16j]) # Rank 3 >>> output = torch.empty([4], dtype=torch.int64) >>> dist.all_to_all_single(output, input) >>> output tensor([1+1j, 5+5j, 9+9j, 13+13j]) # Rank 0 tensor([2+2j, 6+6j, 10+10j, 14+14j]) # Rank 1 tensor([3+3j, 7+7j, 11+11j, 15+15j]) # Rank 2 tensor([4+4j, 8+8j, 12+12j, 16+16j]) # Rank 3


-
torch.distributed.all_to_all(
*output_tensor_list*,*input_tensor_list*,*group=None*,*async_op=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L4842)[#](#torch.distributed.all_to_all) Scatters list of input tensors to all processes in a group and return gathered list of tensors in output list.

Complex tensors are supported.

- Parameters:
**output_tensor_list**(*list**[**Tensor**]*) – List of tensors to be gathered one per rank.**input_tensor_list**(*list**[**Tensor**]*) – List of tensors to scatter one per rank.**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op.

- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group.


Warning

all_to_all is experimental and subject to change.

Examples

>>> input = torch.arange(4) + rank * 4 >>> input = list(input.chunk(4)) >>> input [tensor([0]), tensor([1]), tensor([2]), tensor([3])] # Rank 0 [tensor([4]), tensor([5]), tensor([6]), tensor([7])] # Rank 1 [tensor([8]), tensor([9]), tensor([10]), tensor([11])] # Rank 2 [tensor([12]), tensor([13]), tensor([14]), tensor([15])] # Rank 3 >>> output = list(torch.empty([4], dtype=torch.int64).chunk(4)) >>> dist.all_to_all(output, input) >>> output [tensor([0]), tensor([4]), tensor([8]), tensor([12])] # Rank 0 [tensor([1]), tensor([5]), tensor([9]), tensor([13])] # Rank 1 [tensor([2]), tensor([6]), tensor([10]), tensor([14])] # Rank 2 [tensor([3]), tensor([7]), tensor([11]), tensor([15])] # Rank 3

>>> # Essentially, it is similar to following operation: >>> scatter_list = input >>> gather_list = output >>> for i in range(world_size): >>> dist.scatter(gather_list[i], scatter_list if i == rank else [], src=i)

>>> input tensor([0, 1, 2, 3, 4, 5]) # Rank 0 tensor([10, 11, 12, 13, 14, 15, 16, 17, 18]) # Rank 1 tensor([20, 21, 22, 23, 24]) # Rank 2 tensor([30, 31, 32, 33, 34, 35, 36]) # Rank 3 >>> input_splits [2, 2, 1, 1] # Rank 0 [3, 2, 2, 2] # Rank 1 [2, 1, 1, 1] # Rank 2 [2, 2, 2, 1] # Rank 3 >>> output_splits [2, 3, 2, 2] # Rank 0 [2, 2, 1, 2] # Rank 1 [1, 2, 1, 2] # Rank 2 [1, 2, 1, 1] # Rank 3 >>> input = list(input.split(input_splits)) >>> input [tensor([0, 1]), tensor([2, 3]), tensor([4]), tensor([5])] # Rank 0 [tensor([10, 11, 12]), tensor([13, 14]), tensor([15, 16]), tensor([17, 18])] # Rank 1 [tensor([20, 21]), tensor([22]), tensor([23]), tensor([24])] # Rank 2 [tensor([30, 31]), tensor([32, 33]), tensor([34, 35]), tensor([36])] # Rank 3 >>> output = ... >>> dist.all_to_all(output, input) >>> output [tensor([0, 1]), tensor([10, 11, 12]), tensor([20, 21]), tensor([30, 31])] # Rank 0 [tensor([2, 3]), tensor([13, 14]), tensor([22]), tensor([32, 33])] # Rank 1 [tensor([4]), tensor([15, 16]), tensor([23]), tensor([34, 35])] # Rank 2 [tensor([5]), tensor([17, 18]), tensor([24]), tensor([36])] # Rank 3

>>> # Another example with tensors of torch.cfloat type. >>> input = torch.tensor( ... [1 + 1j, 2 + 2j, 3 + 3j, 4 + 4j], dtype=torch.cfloat ... ) + 4 * rank * (1 + 1j) >>> input = list(input.chunk(4)) >>> input [tensor([1+1j]), tensor([2+2j]), tensor([3+3j]), tensor([4+4j])] # Rank 0 [tensor([5+5j]), tensor([6+6j]), tensor([7+7j]), tensor([8+8j])] # Rank 1 [tensor([9+9j]), tensor([10+10j]), tensor([11+11j]), tensor([12+12j])] # Rank 2 [tensor([13+13j]), tensor([14+14j]), tensor([15+15j]), tensor([16+16j])] # Rank 3 >>> output = list(torch.empty([4], dtype=torch.int64).chunk(4)) >>> dist.all_to_all(output, input) >>> output [tensor([1+1j]), tensor([5+5j]), tensor([9+9j]), tensor([13+13j])] # Rank 0 [tensor([2+2j]), tensor([6+6j]), tensor([10+10j]), tensor([14+14j])] # Rank 1 [tensor([3+3j]), tensor([7+7j]), tensor([11+11j]), tensor([15+15j])] # Rank 2 [tensor([4+4j]), tensor([8+8j]), tensor([12+12j]), tensor([16+16j])] # Rank 3


-
torch.distributed.barrier(
*group=None*,*async_op=False*,*device_ids=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L4966)[#](#torch.distributed.barrier) Synchronize all processes.

This collective blocks processes until the whole group enters this function, if async_op is False, or if async work handle is called on wait().

- Parameters:
**group**(*ProcessGroup**,**optional*) – The process group to work on. If None, the default process group will be used.**async_op**(*bool**,**optional*) – Whether this op should be an async op**device_ids**(*[**int**]**,**optional*) – List of device/GPU ids. Only one id is expected.

- Returns:
Async work handle, if async_op is set to True. None, if not async_op or if not part of the group


Note

ProcessGroupNCCL now blocks the cpu thread till the completion of the barrier collective.

Note

ProcessGroupNCCL implements barrier as an all_reduce of a 1-element tensor. A device must be chosen for allocating this tensor. The device choice is made by checking in this order (1) the first device passed to device_ids arg of barrier if not None, (2) the device passed to init_process_group if not None, (3) the device that was first used with this process group, if another collective with tensor inputs has been performed, (4) the device index indicated by the global rank mod local device count.


-
torch.distributed.monitored_barrier(
*group=None*,*timeout=None*,*wait_all_ranks=False*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/distributed_c10d.py#L5041)[#](#torch.distributed.monitored_barrier) Synchronize processes similar to

`torch.distributed.barrier`

, but consider a configurable timeout.It is able to report ranks that did not pass this barrier within the provided timeout. Specifically, for non-zero ranks, will block until a send/recv is processed from rank 0. Rank 0 will block until all send /recv from other ranks are processed, and will report failures for ranks that failed to respond in time. Note that if one rank does not reach the monitored_barrier (for example due to a hang), all other ranks would fail in monitored_barrier.

This collective will block all processes/ranks in the group, until the whole group exits the function successfully, making it useful for debugging and synchronizing. However, it can have a performance impact and should only be used for debugging or scenarios that require full synchronization points on the host-side. For debugging purposes, this barrier can be inserted before the application’s collective calls to check if any ranks are desynchronized.

Note

Note that this collective is only supported with the GLOO backend.

- Parameters:
**group**(*ProcessGroup**,**optional*) – The process group to work on. If`None`

, the default process group will be used.**timeout**(*datetime.timedelta**,**optional*) – Timeout for monitored_barrier. If`None`

, the default process group timeout will be used.**wait_all_ranks**(*bool**,**optional*) – Whether to collect all failed ranks or not. By default, this is`False`

and`monitored_barrier`

on rank 0 will throw on the first failed rank it encounters in order to fail fast. By setting`wait_all_ranks=True`

`monitored_barrier`

will collect all failed ranks and throw an error containing information about all failed ranks.

- Returns:
`None`

.

- Example::
>>> # Note: Process group initialization omitted on each rank. >>> import torch.distributed as dist >>> if dist.get_rank() != 1: >>> dist.monitored_barrier() # Raises exception indicating that >>> # rank 1 did not call into monitored_barrier. >>> # Example with wait_all_ranks=True >>> if dist.get_rank() == 0: >>> dist.monitored_barrier(wait_all_ranks=True) # Raises exception >>> # indicating that ranks 1, 2, ... world_size - 1 did not call into >>> # monitored_barrier.



-
*class*torch.distributed.Work[#](#torch.distributed.Work) A Work object represents the handle to a pending asynchronous operation in PyTorch’s distributed package. It is returned by non-blocking collective operations, such as dist.all_reduce(tensor, async_op=True).

-
block_current_stream(
*self: torch._C._distributed_c10d.Work*)[None](https://docs.python.org/3/library/constants.html#None)[#](#torch.distributed.Work.block_current_stream) Blocks the currently active GPU stream on the operation to complete. For GPU based collectives this is equivalent to synchronize. For CPU initiated collectives such as with Gloo this will block the CUDA stream until the operation is complete.

This returns immediately in all cases.

To check whether an operation was successful you should check the Work object result asynchronously.


-
exception(
*self: torch._C._distributed_c10d.Work*) std::__exception_ptr::exception_ptr[#](#torch.distributed.Work.exception)

-
get_future(
*self: torch._C._distributed_c10d.Work*) torch.Future[#](#torch.distributed.Work.get_future) - Returns:
A

`torch.futures.Future`

object which is associated with the completion of the`Work`

. As an example, a future object can be retrieved by`fut = process_group.allreduce(tensors).get_future()`

.

- Example::
Below is an example of a simple allreduce DDP communication hook that uses

`get_future`

API to retrieve a Future associated with the completion of`allreduce`

.>>> def allreduce(process_group: dist.ProcessGroup, bucket: dist.GradBucket): -> torch.futures.Future >>> group_to_use = process_group if process_group is not None else torch.distributed.group.WORLD >>> tensor = bucket.buffer().div_(group_to_use.size()) >>> return torch.distributed.all_reduce(tensor, group=group_to_use, async_op=True).get_future() >>> ddp_model.register_comm_hook(state=None, hook=allreduce)


Warning

`get_future`

API supports NCCL, and partially GLOO and MPI backends (no support for peer-to-peer operations like send/recv) and will return a`torch.futures.Future`

.In the example above,

`allreduce`

work will be done on GPU using NCCL backend,`fut.wait()`

will return after synchronizing the appropriate NCCL streams with PyTorch’s current device streams to ensure we can have asynchronous CUDA execution and it does not wait for the entire operation to complete on GPU. Note that`CUDAFuture`

does not support`TORCH_NCCL_BLOCKING_WAIT`

flag or NCCL’s`barrier()`

. In addition, if a callback function was added by`fut.then()`

, it will wait until`WorkNCCL`

’s NCCL streams synchronize with`ProcessGroupNCCL`

’s dedicated callback stream and invoke the callback inline after running the callback on the callback stream.`fut.then()`

will return another`CUDAFuture`

that holds the return value of the callback and a`CUDAEvent`

that recorded the callback stream.For CPU work,

`fut.done()`

returns true when work has been completed and value() tensors are ready.For GPU work,

`fut.done()`

returns true only whether the operation has been enqueued.For mixed CPU-GPU work (e.g. sending GPU tensors with GLOO),

`fut.done()`

returns true when tensors have arrived on respective nodes, but not yet necessarily synched on respective GPUs (similarly to GPU work).


-
get_future_result(
*self: torch._C._distributed_c10d.Work*) torch.Future[#](#torch.distributed.Work.get_future_result) - Returns:
A

`torch.futures.Future`

object of int type which maps to the enum type of WorkResult As an example, a future object can be retrieved by`fut = process_group.allreduce(tensor).get_future_result()`

.

- Example::
users can use

`fut.wait()`

to blocking wait for the completion of the work and get the WorkResult by`fut.value()`

. Also, users can use`fut.then(call_back_func)`

to register a callback function to be called when the work is completed, without blocking the current thread.

Warning

`get_future_result`

API supports NCCL

-
result(
*self: torch._C._distributed_c10d.Work*)[list](https://docs.python.org/3/library/stdtypes.html#list)[[torch.Tensor](tensors.html#torch.Tensor)][#](#torch.distributed.Work.result)

-
wait(
*self: torch._C._distributed_c10d.Work*,*timeout:*)[datetime.timedelta](https://docs.python.org/3/library/datetime.html#datetime.timedelta)= datetime.timedelta(0)[bool](https://docs.python.org/3/library/functions.html#bool)[#](#torch.distributed.Work.wait) - Returns:
true/false.


- Example::
- try:
work.wait(timeout)

- except:
# some handling



Warning

In normal cases, users do not need to set the timeout. calling wait() is the same as calling synchronize(): Letting the current stream block on the completion of the NCCL work. However, if timeout is set, it will block the CPU thread until the NCCL work is completed or timed out. If timeout, exception will be thrown.


-
block_current_stream(

-
*class*torch.distributed.ReduceOp[#](#torch.distributed.ReduceOp) An enum-like class for available reduction operations:

`SUM`

,`PRODUCT`

,`MIN`

,`MAX`

,`BAND`

,`BOR`

,`BXOR`

, and`PREMUL_SUM`

.`BAND`

,`BOR`

, and`BXOR`

reductions are not available when using the`NCCL`

backend.`AVG`

divides values by the world size before summing across ranks.`AVG`

is only available with the`NCCL`

backend, and only for NCCL versions 2.10 or later.`PREMUL_SUM`

multiplies inputs by a given scalar locally before reduction.`PREMUL_SUM`

is only available with the`NCCL`

backend, and only available for NCCL versions 2.11 or later. Users are supposed to use`torch.distributed._make_nccl_premul_sum`

.Additionally,

`MAX`

,`MIN`

and`PRODUCT`

are not supported for complex tensors.The values of this class can be accessed as attributes, e.g.,

`ReduceOp.SUM`

. They are used in specifying strategies for reduction collectives, e.g.,.`reduce()`

This class does not support

`__members__`

property.

## Distributed Key-Value Store[#](#distributed-key-value-store)

The distributed package comes with a distributed key-value store, which can be
used to share information between processes in the group as well as to
initialize the distributed package in
[ torch.distributed.init_process_group()](#torch.distributed.init_process_group) (by explicitly creating the store
as an alternative to specifying

`init_method`

.) There are 3 choices for
Key-Value Stores: [,](#torch.distributed.TCPStore)

`TCPStore`

[, and](#torch.distributed.FileStore)

`FileStore`

[.](#torch.distributed.HashStore)

`HashStore`

-
*class*torch.distributed.Store[#](#torch.distributed.Store) Base class for all store implementations, such as the 3 provided by PyTorch distributed: (

,`TCPStore`

, and`FileStore`

).`HashStore`

-
add(
*self: torch._C._distributed_c10d.Store*,*arg0:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*arg1:*)[SupportsInt](https://docs.python.org/3/library/typing.html#typing.SupportsInt)[int](https://docs.python.org/3/library/functions.html#int)[#](#torch.distributed.Store.add) The first call to add for a given

`key`

creates a counter associated with`key`

in the store, initialized to`amount`

. Subsequent calls to add with the same`key`

increment the counter by the specified`amount`

. Calling`add()`

with a key that has already been set in the store by`set()`

will result in an exception.- Parameters:

- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> # Using TCPStore as an example, other store types can also be used >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> store.add("first_key", 1) >>> store.add("first_key", 6) >>> # Should return 7 >>> store.get("first_key")



-
append(
*self: torch._C._distributed_c10d.Store*,*arg0:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*arg1:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[None](https://docs.python.org/3/library/constants.html#None)[#](#torch.distributed.Store.append) Append the key-value pair into the store based on the supplied

`key`

and`value`

. If`key`

does not exists in the store, it will be created.- Parameters:

- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> store.append("first_key", "po") >>> store.append("first_key", "tato") >>> # Should return "potato" >>> store.get("first_key")



-
check(
*self: torch._C._distributed_c10d.Store*,*arg0:*)[collections.abc.Sequence](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)][bool](https://docs.python.org/3/library/functions.html#bool)[#](#torch.distributed.Store.check) The call to check whether a given list of

`keys`

have value stored in the store. This call immediately returns in normal cases but still suffers from some edge deadlock cases, e.g, calling check after TCPStore has been destroyed. Calling`check()`

with a list of keys that one wants to check whether stored in the store or not.- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> # Using TCPStore as an example, other store types can also be used >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> store.add("first_key", 1) >>> # Should return 7 >>> store.check(["first_key"])



-
clone(
*self: torch._C._distributed_c10d.Store*) torch._C._distributed_c10d.Store[#](#torch.distributed.Store.clone) Clones the store and returns a new object that points to the same underlying store. The returned store can be used concurrently with the original object. This is intended to provide a safe way to use a store from multiple threads by cloning one store per thread.


-
compare_set(
*self: torch._C._distributed_c10d.Store*,*arg0:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*arg1:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*arg2:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[bytes](https://docs.python.org/3/library/stdtypes.html#bytes)[#](#torch.distributed.Store.compare_set) Inserts the key-value pair into the store based on the supplied

`key`

and performs comparison between`expected_value`

and`desired_value`

before inserting.`desired_value`

will only be set if`expected_value`

for the`key`

already exists in the store or if`expected_value`

is an empty string.- Parameters:

- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> store.set("key", "first_value") >>> store.compare_set("key", "first_value", "second_value") >>> # Should return "second_value" >>> store.get("key")



-
delete_key(
*self: torch._C._distributed_c10d.Store*,*arg0:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[bool](https://docs.python.org/3/library/functions.html#bool)[#](#torch.distributed.Store.delete_key) Deletes the key-value pair associated with

`key`

from the store. Returns true if the key was successfully deleted, and false if it was not.Warning

The

`delete_key`

API is only supported by theand`TCPStore`

. Using this API with the`HashStore`

will result in an exception.`FileStore`

- Parameters:
**key**() – The key to be deleted from the store*str*- Returns:
True if

`key`

was deleted, otherwise False.

- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> # Using TCPStore as an example, HashStore can also be used >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> store.set("first_key") >>> # This should return true >>> store.delete_key("first_key") >>> # This should return false >>> store.delete_key("bad_key")



-
get(
*self: torch._C._distributed_c10d.Store*,*arg0:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[bytes](https://docs.python.org/3/library/stdtypes.html#bytes)[#](#torch.distributed.Store.get) Retrieves the value associated with the given

`key`

in the store. If`key`

is not present in the store, the function will wait for`timeout`

, which is defined when initializing the store, before throwing an exception.- Parameters:
**key**() – The function will return the value associated with this key.*str*- Returns:
Value associated with

`key`

if`key`

is in the store.

- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> store.set("first_key", "first_value") >>> # Should return "first_value" >>> store.get("first_key")



-
has_extended_api(
*self: torch._C._distributed_c10d.Store*)[bool](https://docs.python.org/3/library/functions.html#bool)[#](#torch.distributed.Store.has_extended_api) Returns true if the store supports extended operations.


-
list_keys(
*self: torch._C._distributed_c10d.Store*)[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)][#](#torch.distributed.Store.list_keys) Returns a list of all keys in the store.


-
multi_get(
*self: torch._C._distributed_c10d.Store*,*arg0:*)[collections.abc.Sequence](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)][list](https://docs.python.org/3/library/stdtypes.html#list)[[bytes](https://docs.python.org/3/library/stdtypes.html#bytes)][#](#torch.distributed.Store.multi_get) Retrieve all values in

`keys`

. If any key in`keys`

is not present in the store, the function will wait for`timeout`

- Parameters:
**keys**(*List**[**str**]*) – The keys to be retrieved from the store.

- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> store.set("first_key", "po") >>> store.set("second_key", "tato") >>> # Should return [b"po", b"tato"] >>> store.multi_get(["first_key", "second_key"])



-
multi_set(
*self: torch._C._distributed_c10d.Store*,*arg0:*,[collections.abc.Sequence](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*arg1:*)[collections.abc.Sequence](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)][None](https://docs.python.org/3/library/constants.html#None)[#](#torch.distributed.Store.multi_set) Inserts a list key-value pair into the store based on the supplied

`keys`

and`values`

- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> store.multi_set(["first_key", "second_key"], ["po", "tato"]) >>> # Should return b"po" >>> store.get("first_key")



-
num_keys(
*self: torch._C._distributed_c10d.Store*)[int](https://docs.python.org/3/library/functions.html#int)[#](#torch.distributed.Store.num_keys) Returns the number of keys set in the store. Note that this number will typically be one greater than the number of keys added by

`set()`

and`add()`

since one key is used to coordinate all the workers using the store.Warning

When used with the

,`TCPStore`

`num_keys`

returns the number of keys written to the underlying file. If the store is destructed and another store is created with the same file, the original keys will be retained.- Returns:
The number of keys present in the store.


- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> # Using TCPStore as an example, other store types can also be used >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> store.set("first_key", "first_value") >>> # This should return 2 >>> store.num_keys()



-
queue_len(
*self: torch._C._distributed_c10d.Store*,*arg0:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[int](https://docs.python.org/3/library/functions.html#int)[#](#torch.distributed.Store.queue_len) Returns the length of the specified queue.

If the queue doesn’t exist it returns 0.

See queue_push for more details.

- Parameters:
**key**() – The key of the queue to get the length.*str*


-
queue_pop(
*self: torch._C._distributed_c10d.Store*,*key:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*block:*)[bool](https://docs.python.org/3/library/functions.html#bool)= True[bytes](https://docs.python.org/3/library/stdtypes.html#bytes)[#](#torch.distributed.Store.queue_pop) Pops a value from the specified queue or waits until timeout if the queue is empty.

See queue_push for more details.

If block is False, a dist.QueueEmptyError will be raised if the queue is empty.


-
queue_push(
*self: torch._C._distributed_c10d.Store*,*arg0:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*arg1:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[None](https://docs.python.org/3/library/constants.html#None)[#](#torch.distributed.Store.queue_push) Pushes a value into the specified queue.

Using the same key for queues and set/get operations may result in unexpected behavior.

wait/check operations are supported for queues.

wait with queues will only wake one waiting worker rather than all.


-
set(
*self: torch._C._distributed_c10d.Store*,*arg0:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*arg1:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[None](https://docs.python.org/3/library/constants.html#None)[#](#torch.distributed.Store.set) Inserts the key-value pair into the store based on the supplied

`key`

and`value`

. If`key`

already exists in the store, it will overwrite the old value with the new supplied`value`

.- Parameters:

- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> store.set("first_key", "first_value") >>> # Should return "first_value" >>> store.get("first_key")



-
set_timeout(
*self: torch._C._distributed_c10d.Store*,*arg0:*)[datetime.timedelta](https://docs.python.org/3/library/datetime.html#datetime.timedelta)[None](https://docs.python.org/3/library/constants.html#None)[#](#torch.distributed.Store.set_timeout) Sets the store’s default timeout. This timeout is used during initialization and in

`wait()`

and`get()`

.- Parameters:
**timeout**(*timedelta*) – timeout to be set in the store.

- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> # Using TCPStore as an example, other store types can also be used >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> store.set_timeout(timedelta(seconds=10)) >>> # This will throw an exception after 10 seconds >>> store.wait(["bad_key"])



-
*property*timeout[#](#torch.distributed.Store.timeout) Gets the timeout of the store.


-
wait(
**args*,***kwargs*)[#](#torch.distributed.Store.wait) Overloaded function.

wait(self: torch._C._distributed_c10d.Store, arg0: collections.abc.Sequence[str]) -> None


Waits for each key in

`keys`

to be added to the store. If not all keys are set before the`timeout`

(set during store initialization), then`wait`

will throw an exception.- Parameters:
**keys**() – List of keys on which to wait until they are set in the store.*list*

- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> # Using TCPStore as an example, other store types can also be used >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> # This will throw an exception after 30 seconds >>> store.wait(["bad_key"])


wait(self: torch._C._distributed_c10d.Store, arg0: collections.abc.Sequence[str], arg1: datetime.timedelta) -> None


Waits for each key in

`keys`

to be added to the store, and throws an exception if the keys have not been set by the supplied`timeout`

.- Parameters:
**keys**() – List of keys on which to wait until they are set in the store.*list***timeout**(*timedelta*) – Time to wait for the keys to be added before throwing an exception.


- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> # Using TCPStore as an example, other store types can also be used >>> store = dist.TCPStore("127.0.0.1", 0, 1, True, timedelta(seconds=30)) >>> # This will throw an exception after 10 seconds >>> store.wait(["bad_key"], timedelta(seconds=10))



-
add(

-
*class*torch.distributed.TCPStore[#](#torch.distributed.TCPStore) A TCP-based distributed key-value store implementation. The server store holds the data, while the client stores can connect to the server store over TCP and perform actions such as

`set()`

to insert a key-value pair,`get()`

to retrieve a key-value pair, etc. There should always be one server store initialized because the client store(s) will wait for the server to establish a connection.- Parameters:
**host_name**() – The hostname or IP Address the server store should run on.*str***port**() – The port on which the server store should listen for incoming requests.*int***world_size**(*int**,**optional*) – The total number of store users (number of clients + 1 for the server). Default is None (None indicates a non-fixed number of store users).**is_master**(*bool**,**optional*) – True when initializing the server store and False for client stores. Default is False.**timeout**(*timedelta**,**optional*) – Timeout used by the store during initialization and for methods such as`get()`

and`wait()`

. Default is timedelta(seconds=300)**wait_for_workers**(*bool**,**optional*) – Whether to wait for all the workers to connect with the server store. This is only applicable when world_size is a fixed value. Default is True.**multi_tenant**(*bool**,**optional*) – If True, all`TCPStore`

instances in the current process with the same host/port will use the same underlying`TCPServer`

. Default is False.**master_listen_fd**(*int**,**optional*) – If specified, the underlying`TCPServer`

will listen on this file descriptor, which must be a socket already bound to`port`

. To bind an ephemeral port we recommend setting the port to 0 and reading`.port`

. Default is None (meaning the server creates a new socket and attempts to bind it to`port`

).**use_libuv**(*bool**,**optional*) – If True, use libuv for`TCPServer`

backend. Default is True.


- Example::
>>> import torch.distributed as dist >>> from datetime import timedelta >>> # Run on process 1 (server) >>> server_store = dist.TCPStore("127.0.0.1", 1234, 2, True, timedelta(seconds=30)) >>> # Run on process 2 (client) >>> client_store = dist.TCPStore("127.0.0.1", 1234, 2, False) >>> # Use any of the store methods from either the client or server after initialization >>> server_store.set("first_key", "first_value") >>> client_store.get("first_key")


-
__init__(
*self:*,[torch._C._distributed_c10d.TCPStore](#torch.distributed.TCPStore)*host_name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*port:*,[SupportsInt](https://docs.python.org/3/library/typing.html#typing.SupportsInt)*world_size:*,[SupportsInt](https://docs.python.org/3/library/typing.html#typing.SupportsInt)|[None](https://docs.python.org/3/library/constants.html#None)= None*is_master:*,[bool](https://docs.python.org/3/library/functions.html#bool)= False*timeout:*,[datetime.timedelta](https://docs.python.org/3/library/datetime.html#datetime.timedelta)= datetime.timedelta(seconds=300)*wait_for_workers:*,[bool](https://docs.python.org/3/library/functions.html#bool)= True*multi_tenant:*,[bool](https://docs.python.org/3/library/functions.html#bool)= False*master_listen_fd:*,[SupportsInt](https://docs.python.org/3/library/typing.html#typing.SupportsInt)|[None](https://docs.python.org/3/library/constants.html#None)= None*use_libuv:*)[bool](https://docs.python.org/3/library/functions.html#bool)= True[None](https://docs.python.org/3/library/constants.html#None)[#](#torch.distributed.TCPStore.__init__) Creates a new TCPStore.


-
*property*host[#](#torch.distributed.TCPStore.host) Gets the hostname on which the store listens for requests.


-
*property*libuvBackend[#](#torch.distributed.TCPStore.libuvBackend) Returns True if it’s using the libuv backend.


-
*property*port[#](#torch.distributed.TCPStore.port) Gets the port number on which the store listens for requests.



-
*class*torch.distributed.HashStore[#](#torch.distributed.HashStore) A thread-safe store implementation based on an underlying hashmap. This store can be used within the same process (for example, by other threads), but cannot be used across processes.

- Example::
>>> import torch.distributed as dist >>> store = dist.HashStore() >>> # store can be used from other threads >>> # Use any of the store methods after initialization >>> store.set("first_key", "first_value")


-
__init__(
*self:*)[torch._C._distributed_c10d.HashStore](#torch.distributed.HashStore)[None](https://docs.python.org/3/library/constants.html#None)[#](#torch.distributed.HashStore.__init__) Creates a new HashStore.



-
*class*torch.distributed.FileStore[#](#torch.distributed.FileStore) A store implementation that uses a file to store the underlying key-value pairs.

- Parameters:

- Example::
>>> import torch.distributed as dist >>> store1 = dist.FileStore("/tmp/filestore", 2) >>> store2 = dist.FileStore("/tmp/filestore", 2) >>> # Use any of the store methods from either the client or server after initialization >>> store1.set("first_key", "first_value") >>> store2.get("first_key")


-
__init__(
*self:*,[torch._C._distributed_c10d.FileStore](#torch.distributed.FileStore)*file_name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*world_size:*)[SupportsInt](https://docs.python.org/3/library/typing.html#typing.SupportsInt)= -1[None](https://docs.python.org/3/library/constants.html#None)[#](#torch.distributed.FileStore.__init__) Creates a new FileStore.


-
*property*path[#](#torch.distributed.FileStore.path) Gets the path of the file used by FileStore to store key-value pairs.



-
*class*torch.distributed.PrefixStore[#](#torch.distributed.PrefixStore) A wrapper around any of the 3 key-value stores (

,`TCPStore`

, and`FileStore`

) that adds a prefix to each key inserted to the store.`HashStore`

- Parameters:
**prefix**() – The prefix string that is prepended to each key before being inserted into the store.*str***store**(*torch.distributed.store*) – A store object that forms the underlying key-value store.


-
__init__(
*self: torch._C._distributed_c10d.PrefixStore*,*prefix:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*store: torch._C._distributed_c10d.Store*)[None](https://docs.python.org/3/library/constants.html#None)[#](#torch.distributed.PrefixStore.__init__) Creates a new PrefixStore.


-
*property*underlying_store[#](#torch.distributed.PrefixStore.underlying_store) Gets the underlying store object that PrefixStore wraps around.



## Profiling Collective Communication[#](#profiling-collective-communication)

Note that you can use `torch.profiler`

(recommended, only available after 1.8.1) or `torch.autograd.profiler`

to profile collective communication and point-to-point communication APIs mentioned here. All out-of-the-box backends (`gloo`

,
`nccl`

, `mpi`

) are supported and collective communication usage will be rendered as expected in profiling output/traces. Profiling your code is the same as any regular torch operator:

```
import torch
import torch.distributed as dist
with torch.profiler():
tensor = torch.randn(20, 10)
dist.all_reduce(tensor)
```

Please refer to the [profiler documentation](https://pytorch.org/docs/main/profiler.html) for a full overview of profiler features.

## Optimization with Symmetric Memory[#](#optimization-with-symmetric-memory)

### Copy Engine Collectives[#](#copy-engine-collectives)

When NCCL collective operations are performed on symmetric memory tensors with the zero-CTA policy, data movement is offloaded to the GPU’s copy engines (DMA engines) instead of using CUDA streaming multiprocessors (SMs). This frees up SMs for compute work, enabling better overlap of communication and computation.

For setup instructions, requirements, and examples, see
[Copy Engine Collectives](symmetric_memory.html#copy-engine-collectives) in the Symmetric Memory documentation.

### Higher-Precision Reduction[#](#higher-precision-reduction)

When NCCL collectives such as `reduce_scatter`

and `all_reduce`

operate on
symmetric memory tensors, NCCL’s symmetric kernel implementation automatically
performs internal reduction with higher precision (e.g., BF16/FP16 in → FP32
accumulate → BF16/FP16 out). This improves numerical accuracy without any code
changes to the collective call.

For details on scope, supported domains, and version requirements, see
[Higher-Precision Reduction](symmetric_memory.html#higher-precision-reduction) in the Symmetric Memory documentation.

## Multi-GPU collective functions[#](#multi-gpu-collective-functions)

Warning

The multi-GPU functions (which stand for multiple GPUs per CPU thread) are deprecated. As of today, PyTorch Distributed’s preferred programming model is one device per thread, as exemplified by the APIs in this document. If you are a backend developer and want to support multiple devices per thread, please contact PyTorch Distributed’s maintainers.

## Object collectives[#](#object-collectives)

Warning

Object collectives have a number of serious limitations. Read further to determine if they are safe to use for your use case.

Object collectives are a set of collective-like operations that work on arbitrary Python objects, as long as they can be pickled. There are various collective patterns implemented (e.g. broadcast, all_gather, …) but they each roughly follow this pattern:

convert the input object into a pickle (raw bytes), then shove it into a byte tensor

communicate the size of this byte tensor to peers (first collective operation)

allocate appropriately sized tensor to perform the real collective

communicate the object data (second collective operation)

convert raw data back into Python (unpickle)


Object collectives sometimes have surprising performance or memory characteristics that lead to long runtimes or OOMs, and thus they should be used with caution. Here are some common issues.

**Asymmetric pickle/unpickle time** - Pickling objects can be slow, depending on the number, type and size of the objects.
When the collective has a fan-in (e.g. gather_object), the receiving rank(s) must unpickle N times more objects than
the sending rank(s) had to pickle, which can cause other ranks to time out on their next collective.

**Inefficient tensor communication** - Tensors should be sent via regular collective APIs, not object collective APIs.
It is possible to send Tensors via object collective APIs, but they will be serialized and deserialized (including a
CPU-sync and device-to-host copy in the case of non-CPU tensors), and in almost every case other than debugging or
troubleshooting code, it would be worth the trouble to refactor the code to use non-object collectives instead.

**Unexpected tensor devices** - If you still want to send tensors via object collectives, there is another aspect
specific to cuda (and possibly other accelerators) tensors. If you pickle a tensor that is currently on `cuda:3`

, and
then unpickle it, you will get another tensor on `cuda:3`

*regardless of which process you are on, or which CUDA device
is the ‘default’ device for that process*. With regular tensor collective APIs, ‘output tensors’ will always be on the
same, local device, which is generally what you’d expect.

Unpickling a tensor will implicitly activate a CUDA context if it is the first time a GPU is used by the process, which can waste significant amounts of GPU memory. This issue can be avoided by moving tensors to CPU before passing them as inputs to an object collective.

## Third-party backends[#](#third-party-backends)

Besides the builtin GLOO/MPI/NCCL backends, PyTorch distributed supports
third-party backends through a run-time register mechanism.
For references on how to develop a third-party backend through C++ Extension,
please refer to [Tutorials - Custom C++ and CUDA Extensions](https://pytorch.org/tutorials/advanced/cpp_extension.html) and
`test/cpp_extensions/cpp_c10d_extension.cpp`

. The capability of third-party
backends are decided by their own implementations.

The new backend derives from `c10d::ProcessGroup`

and registers the backend
name and the instantiating interface through [ torch.distributed.Backend.register_backend()](#torch.distributed.Backend.register_backend)
when imported.

When manually importing this backend and invoking [ torch.distributed.init_process_group()](#torch.distributed.init_process_group)
with the corresponding backend name, the

`torch.distributed`

package runs on
the new backend.Warning

The support of third-party backend is experimental and subject to change.

## Launch utility[#](#launch-utility)

The `torch.distributed`

package also provides a launch utility in
`torch.distributed.launch`

. This helper utility can be used to launch
multiple processes per node for distributed training.

Module `torch.distributed.launch`

.

`torch.distributed.launch`

is a module that spawns up multiple distributed
training processes on each of the training nodes.

Warning

This module is going to be deprecated in favor of [torchrun](elastic/run.html#launcher-api).

The utility can be used for single-node distributed training, in which one or more processes per node will be spawned. The utility can be used for either CPU training or GPU training. If the utility is used for GPU training, each distributed process will be operating on a single GPU. This can achieve well-improved single-node training performance. It can also be used in multi-node distributed training, by spawning up multiple processes on each node for well-improved multi-node distributed training performance as well. This will especially be beneficial for systems with multiple Infiniband interfaces that have direct-GPU support, since all of them can be utilized for aggregated communication bandwidth.

In both cases of single-node distributed training or multi-node distributed
training, this utility will launch the given number of processes per node
(`--nproc-per-node`

). If used for GPU training, this number needs to be less
or equal to the number of GPUs on the current system (`nproc_per_node`

),
and each process will be operating on a single GPU from *GPU 0 to
GPU (nproc_per_node - 1)*.

**How to use this module:**

Single-Node multi-process distributed training


```
python -m torch.distributed.launch --nproc-per-node=NUM_GPUS_YOU_HAVE
YOUR_TRAINING_SCRIPT.py (--arg1 --arg2 --arg3 and all other
arguments of your training script)
```

Multi-Node multi-process distributed training: (e.g. two nodes)


Node 1: *(IP: 192.168.1.1, and has a free port: 1234)*

```
python -m torch.distributed.launch --nproc-per-node=NUM_GPUS_YOU_HAVE
--nnodes=2 --node-rank=0 --master-addr="192.168.1.1"
--master-port=1234 YOUR_TRAINING_SCRIPT.py (--arg1 --arg2 --arg3
and all other arguments of your training script)
```

Node 2:

```
python -m torch.distributed.launch --nproc-per-node=NUM_GPUS_YOU_HAVE
--nnodes=2 --node-rank=1 --master-addr="192.168.1.1"
--master-port=1234 YOUR_TRAINING_SCRIPT.py (--arg1 --arg2 --arg3
and all other arguments of your training script)
```

To look up what optional arguments this module offers:


```
python -m torch.distributed.launch --help
```

**Important Notices:**

1. This utility and multi-process distributed (single-node or multi-node) GPU training currently only achieves the best performance using the NCCL distributed backend. Thus NCCL backend is the recommended backend to use for GPU training.

2. In your training program, you must parse the command-line argument:
`--local-rank=LOCAL_PROCESS_RANK`

, which will be provided by this module.
If your training program uses GPUs, you should ensure that your code only
runs on the GPU device of LOCAL_PROCESS_RANK. This can be done by:

Parsing the local_rank argument

```
>>> import argparse
>>> parser = argparse.ArgumentParser()
>>> parser.add_argument("--local-rank", "--local_rank", type=int)
>>> args = parser.parse_args()
```

Set your device to local rank using either

```
>>> torch.cuda.set_device(args.local_rank) # before your code runs
```

or

```
>>> with torch.cuda.device(args.local_rank):
>>> # your code to run
>>> ...
```

Changed in version 2.0.0: The launcher will passes the `--local-rank=<rank>`

argument to your script.
From PyTorch 2.0.0 onwards, the dashed `--local-rank`

is preferred over the
previously used underscored `--local_rank`

.

For backward compatibility, it may be necessary for users to handle both
cases in their argument parsing code. This means including both `"--local-rank"`

and `"--local_rank"`

in the argument parser. If only `"--local_rank"`

is
provided, the launcher will trigger an error: “error: unrecognized arguments:
–local-rank=<rank>”. For training code that only supports PyTorch 2.0.0+,
including `"--local-rank"`

should be sufficient.

3. In your training program, you are supposed to call the following function
at the beginning to start the distributed backend. It is strongly recommended
that `init_method=env://`

. Other init methods (e.g. `tcp://`

) may work,
but `env://`

is the one that is officially supported by this module.

```
>>> torch.distributed.init_process_group(backend='YOUR BACKEND',
>>> init_method='env://')
```

4. In your training program, you can either use regular distributed functions
or use [ torch.nn.parallel.DistributedDataParallel()](generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel) module. If your
training program uses GPUs for training and you would like to use

[module, here is how to configure it.](generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel)

`torch.nn.parallel.DistributedDataParallel()`

```
>>> model = torch.nn.parallel.DistributedDataParallel(model,
>>> device_ids=[args.local_rank],
>>> output_device=args.local_rank)
```

Please ensure that `device_ids`

argument is set to be the only GPU device id
that your code will be operating on. This is generally the local rank of the
process. In other words, the `device_ids`

needs to be `[args.local_rank]`

,
and `output_device`

needs to be `args.local_rank`

in order to use this
utility

5. Another way to pass `local_rank`

to the subprocesses via environment variable
`LOCAL_RANK`

. This behavior is enabled when you launch the script with
`--use-env=True`

. You must adjust the subprocess example above to replace
`args.local_rank`

with `os.environ['LOCAL_RANK']`

; the launcher
will not pass `--local-rank`

when you specify this flag.

Warning

`local_rank`

is NOT globally unique: it is only unique per process
on a machine. Thus, don’t use it to decide if you should, e.g.,
write to a networked filesystem. See
[pytorch/pytorch#12042](https://github.com/pytorch/pytorch/issues/12042) for an example of
how things can go wrong if you don’t do this correctly.

## Spawn utility[#](#spawn-utility)

The [Multiprocessing package - torch.multiprocessing](multiprocessing.html#multiprocessing-doc) package also provides a `spawn`

function in [ torch.multiprocessing.spawn()](multiprocessing.html#module-torch.multiprocessing.spawn). This helper function
can be used to spawn multiple processes. It works by passing in the
function that you want to run and spawns N processes to run it. This
can be used for multiprocess distributed training as well.

For references on how to use it, please refer to [PyTorch example - ImageNet
implementation](https://github.com/pytorch/examples/tree/master/imagenet)

Note that this function requires Python 3.4 or higher.

## Debugging `torch.distributed`

applications[#](#debugging-torch-distributed-applications)

Debugging distributed applications can be challenging due to hard to understand hangs, crashes, or inconsistent behavior across ranks. `torch.distributed`

provides
a suite of tools to help debug training applications in a self-serve fashion:

### Python Breakpoint[#](#python-breakpoint)

It is extremely convenient to use python’s debugger in a distributed environment, but because it does not work out of the box many people do not use it at all. PyTorch offers a customized wrapper around pdb that streamlines the process.

`torch.distributed.breakpoint`

makes this process easy. Internally, it customizes `pdb`

’s breakpoint behavior in two ways but otherwise behaves as normal `pdb`

.

Attaches the debugger only on one rank (specified by the user).

Ensures all other ranks stop, by using a

`torch.distributed.barrier()`

that will release once the debugged rank issues a`continue`

Reroutes stdin from the child process such that it connects to your terminal.


To use it, simply issue `torch.distributed.breakpoint(rank)`

on all ranks, using the same value for `rank`

in each case.

### Monitored Barrier[#](#monitored-barrier)

As of v1.10, [ torch.distributed.monitored_barrier()](#torch.distributed.monitored_barrier) exists as an alternative to

[which fails with helpful information about which rank may be faulty when crashing, i.e. not all ranks calling into](#torch.distributed.barrier)

`torch.distributed.barrier()`

[within the provided timeout.](#torch.distributed.monitored_barrier)

`torch.distributed.monitored_barrier()`

[implements a host-side barrier using](#torch.distributed.monitored_barrier)

`torch.distributed.monitored_barrier()`

`send`

/`recv`

communication primitives in a process similar to acknowledgements, allowing rank 0 to report which rank(s) failed to acknowledge
the barrier in time. As an example, consider the following function where rank 1 fails to call into [(in practice this could be due to an application bug or hang in a previous collective):](#torch.distributed.monitored_barrier)

`torch.distributed.monitored_barrier()`

```
import os
from datetime import timedelta
import torch
import torch.distributed as dist
import torch.multiprocessing as mp
def worker(rank):
dist.init_process_group("nccl", rank=rank, world_size=2)
# monitored barrier requires gloo process group to perform host-side sync.
group_gloo = dist.new_group(backend="gloo")
if rank not in [1]:
dist.monitored_barrier(group=group_gloo, timeout=timedelta(seconds=2))
if __name__ == "__main__":
os.environ["MASTER_ADDR"] = "localhost"
os.environ["MASTER_PORT"] = "29501"
mp.spawn(worker, nprocs=2, args=())
```

The following error message is produced on rank 0, allowing the user to determine which rank(s) may be faulty and investigate further:

```
RuntimeError: Rank 1 failed to pass monitoredBarrier in 2000 ms
Original exception:
[gloo/transport/tcp/pair.cc:598] Connection closed by peer [2401:db00:eef0:1100:3560:0:1c05:25d]:8594
```

`TORCH_DISTRIBUTED_DEBUG`

[#](#torch-distributed-debug)

With `TORCH_CPP_LOG_LEVEL=INFO`

, the environment variable `TORCH_DISTRIBUTED_DEBUG`

can be used to trigger additional useful logging and collective synchronization checks to ensure all ranks
are synchronized appropriately. `TORCH_DISTRIBUTED_DEBUG`

can be set to either `OFF`

(default), `INFO`

, or `DETAIL`

depending on the debugging level
required. Please note that the most verbose option, `DETAIL`

may impact the application performance and thus should only be used when debugging issues.

Setting `TORCH_DISTRIBUTED_DEBUG=INFO`

will result in additional debug logging when models trained with [ torch.nn.parallel.DistributedDataParallel()](generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel) are initialized, and

`TORCH_DISTRIBUTED_DEBUG=DETAIL`

will additionally log runtime performance statistics a select number of iterations. These runtime statistics
include data such as forward time, backward time, gradient communication time, etc. As an example, given the following application:```
import os
import torch
import torch.distributed as dist
import torch.multiprocessing as mp
class TwoLinLayerNet(torch.nn.Module):
def __init__(self):
super().__init__()
self.a = torch.nn.Linear(10, 10, bias=False)
self.b = torch.nn.Linear(10, 1, bias=False)
def forward(self, x):
a = self.a(x)
b = self.b(x)
return (a, b)
def worker(rank):
dist.init_process_group("nccl", rank=rank, world_size=2)
torch.cuda.set_device(rank)
print("init model")
model = TwoLinLayerNet().cuda()
print("init ddp")
ddp_model = torch.nn.parallel.DistributedDataParallel(model, device_ids=[rank])
inp = torch.randn(10, 10).cuda()
print("train")
for _ in range(20):
output = ddp_model(inp)
loss = output[0] + output[1]
loss.sum().backward()
if __name__ == "__main__":
os.environ["MASTER_ADDR"] = "localhost"
os.environ["MASTER_PORT"] = "29501"
os.environ["TORCH_CPP_LOG_LEVEL"]="INFO"
os.environ[
"TORCH_DISTRIBUTED_DEBUG"
] = "DETAIL" # set to DETAIL for runtime logging.
mp.spawn(worker, nprocs=2, args=())
```

The following logs are rendered at initialization time:

```
I0607 16:10:35.739390 515217 logger.cpp:173] [Rank 0]: DDP Initialized with:
broadcast_buffers: 1
bucket_cap_bytes: 26214400
find_unused_parameters: 0
gradient_as_bucket_view: 0
is_multi_device_module: 0
iteration: 0
num_parameter_tensors: 2
output_device: 0
rank: 0
total_parameter_size_bytes: 440
world_size: 2
backend_name: nccl
bucket_sizes: 440
cuda_visible_devices: N/A
device_ids: 0
dtypes: float
master_addr: localhost
master_port: 29501
module_name: TwoLinLayerNet
nccl_async_error_handling: N/A
nccl_blocking_wait: N/A
nccl_debug: WARN
nccl_ib_timeout: N/A
nccl_nthreads: N/A
nccl_socket_ifname: N/A
torch_distributed_debug: INFO
```

The following logs are rendered during runtime (when `TORCH_DISTRIBUTED_DEBUG=DETAIL`

is set):

```
I0607 16:18:58.085681 544067 logger.cpp:344] [Rank 1 / 2] Training TwoLinLayerNet unused_parameter_size=0
Avg forward compute time: 40838608
Avg backward compute time: 5983335
Avg backward comm. time: 4326421
Avg backward comm/comp overlap time: 4207652
I0607 16:18:58.085693 544066 logger.cpp:344] [Rank 0 / 2] Training TwoLinLayerNet unused_parameter_size=0
Avg forward compute time: 42850427
Avg backward compute time: 3885553
Avg backward comm. time: 2357981
Avg backward comm/comp overlap time: 2234674
```

In addition, `TORCH_DISTRIBUTED_DEBUG=INFO`

enhances crash logging in [ torch.nn.parallel.DistributedDataParallel()](generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel) due to unused parameters in the model. Currently,

`find_unused_parameters=True`

must be passed into [initialization if there are parameters that may be unused in the forward pass, and as of v1.10, all model outputs are required to be used in loss computation as](generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel)

`torch.nn.parallel.DistributedDataParallel()`

[does not support unused parameters in the backwards pass. These constraints are challenging especially for larger models, thus when crashing with an error,](generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel)

`torch.nn.parallel.DistributedDataParallel()`

[will log the fully qualified name of all parameters that went unused. For example, in the above application, if we modify](generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel)

`torch.nn.parallel.DistributedDataParallel()`

`loss`

to be instead computed as `loss = output[1]`

, then `TwoLinLayerNet.a`

does not receive a gradient in the backwards pass, and
thus results in `DDP`

failing. On a crash, the user is passed information about parameters which went unused, which may be challenging to manually find for large models:```
RuntimeError: Expected to have finished reduction in the prior iteration before starting a new one. This error indicates that your module has parameters that were not used in producing loss. You can enable unused parameter detection by passing
the keyword argument `find_unused_parameters=True` to `torch.nn.parallel.DistributedDataParallel`, and by
making sure all `forward` function outputs participate in calculating loss.
If you already have done the above, then the distributed data parallel module wasn't able to locate the output tensors in the return value of your module's `forward` function. Please include the loss function and the structure of the return va
lue of `forward` of your module when reporting this issue (e.g. list, dict, iterable).
Parameters which did not receive grad for rank 0: a.weight
Parameter indices which did not receive grad for rank 0: 0
```

Setting `TORCH_DISTRIBUTED_DEBUG=DETAIL`

will trigger additional consistency and synchronization checks on every collective call issued by the user
either directly or indirectly (such as DDP `allreduce`

). This is done by creating a wrapper process group that wraps all process groups returned by
[ torch.distributed.init_process_group()](#torch.distributed.init_process_group) and

[APIs. As a result, these APIs will return a wrapper process group that can be used exactly like a regular process group, but performs consistency checks before dispatching the collective to an underlying process group. Currently, these checks include a](#torch.distributed.new_group)

`torch.distributed.new_group()`

[, which ensures all ranks complete their outstanding collective calls and reports ranks which are stuck. Next, the collective itself is checked for consistency by ensuring all collective functions match and are called with consistent tensor shapes. If this is not the case, a detailed error report is included when the application crashes, rather than a hang or uninformative error message. As an example, consider the following function which has mismatched input shapes into](#torch.distributed.monitored_barrier)

`torch.distributed.monitored_barrier()`

[:](#torch.distributed.all_reduce)

`torch.distributed.all_reduce()`

```
import torch
import torch.distributed as dist
import torch.multiprocessing as mp
def worker(rank):
dist.init_process_group("nccl", rank=rank, world_size=2)
torch.cuda.set_device(rank)
tensor = torch.randn(10 if rank == 0 else 20).cuda()
dist.all_reduce(tensor)
torch.cuda.synchronize(device=rank)
if __name__ == "__main__":
os.environ["MASTER_ADDR"] = "localhost"
os.environ["MASTER_PORT"] = "29501"
os.environ["TORCH_CPP_LOG_LEVEL"]="INFO"
os.environ["TORCH_DISTRIBUTED_DEBUG"] = "DETAIL"
mp.spawn(worker, nprocs=2, args=())
```

With the `NCCL`

backend, such an application would likely result in a hang which can be challenging to root-cause in nontrivial scenarios. If the user enables
`TORCH_DISTRIBUTED_DEBUG=DETAIL`

and reruns the application, the following error message reveals the root cause:

```
work = default_pg.allreduce([tensor], opts)
RuntimeError: Error when verifying shape tensors for collective ALLREDUCE on rank 0. This likely indicates that input shapes into the collective are mismatched across ranks. Got shapes: 10
[ torch.LongTensor{1} ]
```

Note

For fine-grained control of the debug level during runtime the functions `torch.distributed.set_debug_level()`

, `torch.distributed.set_debug_level_from_env()`

, and
`torch.distributed.get_debug_level()`

can also be used.

In addition, `TORCH_DISTRIBUTED_DEBUG=DETAIL`

can be used in conjunction with `TORCH_SHOW_CPP_STACKTRACES=1`

to log the entire callstack when a collective desynchronization is detected. These
collective desynchronization checks will work for all applications that use `c10d`

collective calls backed by process groups created with the
[ torch.distributed.init_process_group()](#torch.distributed.init_process_group) and

[APIs.](#torch.distributed.new_group)

`torch.distributed.new_group()`

### torch.distributed.debug HTTP Server[#](#torch-distributed-debug-http-server)

The `torch.distributed.debug`

module provides a HTTP server that can be used to debug distributed applications. The server can
be started by calling [ torch.distributed.debug.start_debug_server()](#torch.distributed.debug.start_debug_server). This
allows users to collect data across all workers at runtime.

-
torch.distributed.debug.start_debug_server(
*port=25999*,*worker_port=0*,*start_method=None*,*dump_dir=None*,*dump_interval=60.0*,*enabled_dumps=None*,*handlers=None*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/debug/__init__.py#L27)[#](#torch.distributed.debug.start_debug_server) Start the debug server stack on all workers. The frontend debug server is only started on rank0 while the per rank worker servers are started on all ranks.

This server provides an HTTP frontend that allows for debugging slow and deadlocked distributed jobs across all ranks simultaneously. This collects data such as stack traces, FlightRecorder events, and performance profiles.

This depends on dependencies which are not installed by default.

Dependencies: - Jinja2 - aiohttp

WARNING: This is intended to only be used in trusted network environments. The debug server is not designed to be secure and should not be exposed to the public internet. See SECURITY.md for more details.

WARNING: This is an experimental feature and may change at any time.

- Parameters:
**port**() – The port to start the frontend debug server on.*int***worker_port**() – The port to start the worker server on. Defaults to 0, which will cause the worker server to bind to an ephemeral port.*int***start_method**(*str**|**None*) – The multiprocessing start method to use for the frontend server process. One of “fork”, “spawn”, or “forkserver”. If None, uses the default start method. Using “spawn” is recommended when using CUDA or when fork safety is a concern.**dump_dir**(*str**|**None*) – Directory to write periodic debug dumps to. If None, periodic dumping is disabled.**dump_interval**() – Seconds between periodic dumps. Defaults to 60.*float***enabled_dumps**(*set**[**str**]**|**None*) – Set of handler dump filenames to enable (e.g. {“stacks”, “fr_trace”, “tcpstore”}). If None, all handlers that implement dump() are enabled.**handlers**(*list**[**DebugHandler**]**|**None*) – List of debug handlers to use. If None, uses the default handlers. See torch.distributed.debug._handlers for the default handlers.



## Logging[#](#logging)

In addition to explicit debugging support via [ torch.distributed.monitored_barrier()](#torch.distributed.monitored_barrier) and

`TORCH_DISTRIBUTED_DEBUG`

, the underlying C++ library of `torch.distributed`

also outputs log
messages at various levels. These messages can be helpful to understand the execution state of a distributed training job and to troubleshoot problems such as network connection failures. The
following matrix shows how the log level can be adjusted via the combination of `TORCH_CPP_LOG_LEVEL`

and `TORCH_DISTRIBUTED_DEBUG`

environment variables.
|
|
Effective Log Level |
|---|---|---|
|
ignored |
Error |
|
ignored |
Warning |
|
ignored |
Info |
|
|
Debug |
|
|
Trace (a.k.a. All) |

Distributed components raise custom Exception types derived from `RuntimeError`

:

`torch.distributed.DistError`

: This is the base type of all distributed exceptions.`torch.distributed.DistBackendError`

: This exception is thrown when a backend-specific error occurs. For example, if the`NCCL`

backend is used and the user attempts to use a GPU that is not available to the`NCCL`

library.`torch.distributed.DistNetworkError`

: This exception is thrown when networking libraries encounter errors (ex: Connection reset by peer)`torch.distributed.DistStoreError`

: This exception is thrown when the Store encounters an error (ex: TCPStore timeout)

-
*class*torch.distributed.DistError[#](#torch.distributed.DistError) Exception raised when an error occurs in the distributed library


-
*class*torch.distributed.DistBackendError[#](#torch.distributed.DistBackendError) Exception raised when a backend error occurs in distributed


-
*class*torch.distributed.DistNetworkError[#](#torch.distributed.DistNetworkError) Exception raised when a network error occurs in distributed


-
*class*torch.distributed.DistStoreError[#](#torch.distributed.DistStoreError) Exception raised when an error occurs in the distributed store


If you are running single node training, it may be convenient to interactively breakpoint your script. We offer a way to conveniently breakpoint a single rank:

-
torch.distributed.breakpoint(
*rank=0*,*skip=0*,*timeout_s=3600*)[[source]](https://github.com/pytorch/pytorch/blob/v2.11.0/torch/distributed/__init__.py#L94)[#](#torch.distributed.breakpoint) Set a breakpoint, but only on a single rank. All other ranks will wait for you to be done with the breakpoint before continuing.