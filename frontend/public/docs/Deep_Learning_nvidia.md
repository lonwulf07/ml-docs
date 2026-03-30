# Nvidia Documentation
> Scraped on: 2026-03-30 | Root Source: [https://docs.nvidia.com/deeplearning/cudnn/index.html](https://docs.nvidia.com/deeplearning/cudnn/index.html)



---

## Source: https://docs.nvidia.com/deeplearning/cudnn/index.html

# NVIDIA cuDNN[#](#nvidia-cudnn)

The NVIDIA CUDA Deep Neural Network library (cuDNN) is a GPU-accelerated library of primitives for deep neural networks. It provides highly tuned implementations of operations arising frequently in deep neural network (DNN) applications:

Scaled dot-product attention

Convolution, including cross-correlation

Matrix multiplication

Normalizations, softmax, and pooling

Arithmetic, mathematical, relational, and logical pointwise operations


Beyond just providing high-performance implementations of individual operations, cuDNN also supports a flexible set of multi-operation fusion patterns for further optimization. The goal is to achieve the best available performance on NVIDIA GPUs for important deep learning use cases.

In cuDNN, both single-operation and multi-operation computations are expressed as operation graphs. The following API layers are available for constructing these graphs:

Python frontend API

C++ frontend API

C backend API


The [NVIDIA cuDNN frontend API](../frontend/latest/developer/overview.html) provides a simplified programming model that is sufficient for most use cases.

Use the [NVIDIA cuDNN backend API](../backend/latest/api/overview.html#api-overview) only if you want to use the legacy fixed-function routines that are not graph-based interfaces and are not exposed by the frontend API layers, or if you need a C-only interface.

---

## Source: https://docs.nvidia.com/deeplearning/cudnn/frontend/latest/index.html

# NVIDIA cuDNN Frontend[#](#nvidia-cudnn-frontend)

The

[NVIDIA cuDNN frontend API]provides a simplified programming model that is sufficient for most use cases.Use the

[NVIDIA cuDNN backend API]only if you want to use the legacy fixed-function routines that are not graph-based interfaces and are not exposed by the frontend API layers.

[Overview](developer/overview.html)[Building and Running a cuDNN Graph Workflow](developer/overview.html#building-and-running-a-cudnn-graph-workflow)[APIs](developer/overview.html#apis)[Creating the Graph](developer/overview.html#creating-the-graph)[Defining Tensors](developer/overview.html#defining-tensors)[Defining Operations](developer/overview.html#defining-operations)[Validating the Graph](developer/overview.html#validating-the-graph)[Building the Backend Graph](developer/overview.html#building-the-backend-graph)[Creating the Execution Plan](developer/overview.html#creating-the-execution-plan)[Getting the Execution Plan Count](developer/overview.html#getting-the-execution-plan-count)[Checking Graph Support](developer/overview.html#checking-graph-support)[Building the Execution Plan](developer/overview.html#building-the-execution-plan)[Filtering Plans (Optional)](developer/overview.html#filtering-plans-optional)[Autotuning](developer/overview.html#autotuning)[Executing the Graph](developer/overview.html#executing-the-graph)[Miscellaneous APIs](developer/overview.html#miscellaneous-apis)[Serialization](developer/overview.html#serialization)[Error Handling](developer/overview.html#error-handling)

[Operations](developer/overview.html#operations)

[Core Concepts](developer/core-concepts.html)[Graphs](developer/graph-api.html)[Key Concepts](developer/graph-api.html#key-concepts)[Supported Graph Patterns](developer/graph-api.html#supported-graph-patterns)[Mapping with Backend Descriptors](developer/graph-api.html#mapping-with-backend-descriptors)[cuDNN JIT](developer/graph-api.html#cudnn-jit)

[Hardware Forward Compatibility](developer/forward-compatibility.html)[Odds and Ends](developer/misc.html)[Debugging](developer/debugging.html)

[Supported Products](reference/support-matrix.html)[FAQs](reference/faq.html)[Support](reference/support.html)[Software License Agreement](reference/eula.html)[Acknowledgements](reference/acknowledgements.html)[Notices](reference/notices.html)

---

## Source: https://docs.nvidia.com/deeplearning/cudnn/backend/latest/index.html

# NVIDIA cuDNN Backend[#](#nvidia-cudnn-backend)

Use the

[NVIDIA cuDNN backend API]only if you want to use the legacy fixed-function routines that are not graph-based interfaces and are not exposed by the frontend API layers.The

[NVIDIA cuDNN frontend API]provides a simplified programming model that is sufficient for most use cases.

[Overview](https://docs.nvidia.com/deeplearning/cudnn/latest/)[Installation Guide](../../installation/latest/index.html)[Release Notes](release-notes.html)[cuDNN 9.20.0](release-notes.html#cudnn-9-20-0)[cuDNN 9.19.1](release-notes.html#cudnn-9-19-1)[cuDNN 9.19.0](release-notes.html#cudnn-9-19-0)[cuDNN 9.18.1](release-notes.html#cudnn-9-18-1)[cuDNN 9.18.0](release-notes.html#cudnn-9-18-0)[cuDNN 9.17.1](release-notes.html#cudnn-9-17-1)[cuDNN 9.17.0](release-notes.html#cudnn-9-17-0)[cuDNN 9.16.0](release-notes.html#cudnn-9-16-0)[cuDNN 9.15.1](release-notes.html#cudnn-9-15-1)[cuDNN 9.15.0](release-notes.html#cudnn-9-15-0)[cuDNN 9.14.0](release-notes.html#cudnn-9-14-0)[cuDNN 9.13.1](release-notes.html#cudnn-9-13-1)[cuDNN 9.13.0](release-notes.html#cudnn-9-13-0)[cuDNN 9.12.0](release-notes.html#cudnn-9-12-0)[cuDNN 9.11.1](release-notes.html#cudnn-9-11-1)[cuDNN 9.11.0](release-notes.html#cudnn-9-11-0)[cuDNN 9.10.2](release-notes.html#cudnn-9-10-2)[cuDNN 9.10.1](release-notes.html#cudnn-9-10-1)[cuDNN 9.10.0](release-notes.html#cudnn-9-10-0)[cuDNN 9.9.0](release-notes.html#cudnn-9-9-0)[cuDNN 9.8.0](release-notes.html#cudnn-9-8-0)[cuDNN 9.7.1](release-notes.html#cudnn-9-7-1)[cuDNN 9.7.0](release-notes.html#cudnn-9-7-0)[cuDNN 9.6.0](release-notes.html#cudnn-9-6-0)[cuDNN 9.5.1](release-notes.html#cudnn-9-5-1)[cuDNN 9.5.0](release-notes.html#cudnn-9-5-0)[cuDNN 9.4.0](release-notes.html#cudnn-9-4-0)[cuDNN 9.3.0](release-notes.html#cudnn-9-3-0)[cuDNN 9.2.1](release-notes.html#cudnn-9-2-1)[cuDNN 9.2.0](release-notes.html#cudnn-9-2-0)[cuDNN 9.1.1](release-notes.html#cudnn-9-1-1)[cuDNN 9.1.0](release-notes.html#cudnn-9-1-0)[cuDNN 9.0.0](release-notes.html#cudnn-9-0-0)


[Overview](developer/overview.html)[Core Concepts](developer/core-concepts.html)[Graph API](developer/graph-api.html)[Legacy API](developer/legacy-api.html)[Compatibility](developer/forward-compatibility.html)[Odds and Ends](developer/misc.html)

[Support Matrix](reference/support-matrix.html)[Troubleshooting](reference/troubleshooting.html)[Documentation Archives](reference/archives.html)[Software License Agreement](reference/eula.html)[Acknowledgements](reference/acknowledgements.html)[Notices](reference/notices.html)

---

## Source: https://docs.nvidia.com/deeplearning/cudnn/installation/latest/index.html

# NVIDIA cuDNN Installation Guide[#](#nvidia-cudnn-installation-guide)

[Overview](https://docs.nvidia.com/deeplearning/cudnn/latest/)[Installing cuDNN Backend](backend.html)[Prerequisites](prerequisites.html)[Installing cuDNN Backend on Linux](linux.html)[Installing the CUDA Toolkit for Linux](linux.html#installing-the-cuda-toolkit-for-linux)[Installing Zlib](linux.html#installing-zlib)[Installing the cuDNN Backend Packages on Linux](linux.html#installing-the-cudnn-backend-packages-on-linux)[Package Manager Installation](linux.html#package-manager-installation)[Tarball Installation](linux.html#tarball-installation)[Conda Installation](linux.html#conda-installation)[Python Wheels - Linux Installation](linux.html#python-wheels-linux-installation)[Verifying the Install on Linux](linux.html#verifying-the-install-on-linux)[Upgrading From Older Versions of cuDNN to cuDNN 9.x.y](linux.html#upgrading-from-older-versions-of-cudnn-to-cudnn-9-x-y)


[Installing cuDNN Backend on Windows](windows.html)

[Installing cuDNN Frontend](frontend.html)[Building and Running a cuDNN Dependent Program](build-run-cudnn.html)[Cross-Compiling cuDNN Samples](cross-compiling.html)