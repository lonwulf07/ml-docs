# Mxnet Documentation
> Scraped on: 2026-03-30 | Root Source: [https://mxnet.apache.org/versions/master/api](https://mxnet.apache.org/versions/master/api)



---

## Source: https://mxnet.apache.org/versions/master/api

# Docs

### Documentation for the supported language bindings

[Get Started ›](/versions/master/get_started)

## Python API

#### Python-first API

Apache MXNet provides a comprehensive and flexible Python API to serve a broad community of developers with different levels of experience and wide ranging requirements. Current efforts are focused on the
[Gluon API. Gluon provides a clear, concise, and simple API for deep learning. It makes it easy to prototype, build, and train deep learning models without sacrificing training speed.](/versions/master/api/python/docs/api)

You can checkout the [rich ecosystem](/versions/master/ecosystem) built around Apache MXNet Gluon, including [D2L.ai](https://d2l.ai), [GluonCV](https://gluon-cv.mxnet.io),
[GluonNLP](https://gluon-nlp.mxnet.io) and [GluonTS](https://gluon-ts.mxnet.io).

While most of the usability improvement around training are focused on the python API, the performance of Apache MXNet is accessible through a variety of different language bindings, checkout their respective API and guides below!

## Other Bindings

## Apache MXNet Architecture

Building a high-performance deep learning library requires many systems-level design decisions. In this design note, we share the rationale for the specific choices made when designing MXNet. We imagine that these insights may be useful to both deep learning practitioners and builders of other deep learning systems.

#### Deep Learning System Design Concepts

The following pages address general design concepts for deep learning systems. Mainly, they focus on the following 3 areas: abstraction, optimization, and trade-offs between efficiency and flexibility. Additionally, we provide an overview of the complete MXNet system.

## FAQ

[How to run MXNet on AWS?](/versions/master/api/faq/cloud)[How to do distributed training using MXNet on AWS?](/versions/master/api/faq/distributed_training)[What are MXNet environment variables?](/versions/master/api/faq/env_var)[How to use data from S3 for training?](/versions/master/api/faq/s3_integration)[How can I train using multiple GPUs with model parallelism?](/versions/master/api/faq/model_parallel_lstm)[How do I use mixed precision (float16) with MXNet or Gluon?](/versions/master/api/faq/float16)[How do I use gradient compression with distributed training?](/versions/master/api/faq/gradient_compression)[What are the best setup and data-handling tips and tricks for improving speed?](/versions/master/api/faq/perf)[How can I create a .rec dataset ?](/versions/master/api/faq/recordio)[How to run MXNet securely?](/versions/master/api/faq/security)

---

## Source: https://mxnet.apache.org/versions/master/

# APACHE MXNET:

A FLEXIBLE AND EFFICIENT

LIBRARY FOR DEEP LEARNING

A truly open source deep learning framework suited

for flexible research
prototyping and
production.

## Key Features &

Capabilities

### Hybrid Front-End

A hybrid front-end seamlessly transitions between Gluon eager imperative mode and symbolic mode to provide both flexibility and speed.

### Distributed Training

Scalable distributed training and performance optimization in research and production is enabled by the dual Parameter Server and Horovod support.

### 8 Language Bindings

Deep integration into Python and support for Scala, Julia, Clojure, Java, C++, R and Perl.

### Tools & Libraries

A thriving ecosystem of tools and libraries extends MXNet and enable use-cases in computer vision, NLP, time series and more.

## Ecosystem

Explore a rich ecosystem of libraries, tools, and more to support development.

## Community

Join the Apache MXNet scientific community to contribute, learn, and get answers to your questions.

---

## Source: https://mxnet.apache.org/versions/master/get_started

# Get Started

[Apache MXNet Tutorials ›](/versions/master/api/python/docs/tutorials)

## Build and install Apache MXNet from source

To build and install Apache MXNet from the official Apache Software Foundation
signed source code please follow our [Building From Source](/get_started/build_from_source) guide.

The signed source releases are available [here](/get_started/download)

## Platform and use-case specific instructions for using Apache MXNet

Please indicate your preferred configuration below to see specific instructions.

**WARNING**: the following PyPI package names are provided for your convenience but
they point to packages that are *not* provided nor endorsed by the Apache
Software Foundation. As such, they might contain software components with more
restrictive licenses than the Apache License and you’ll need to decide whether
they are appropriate for your usage. The packages linked here contain GPL GCC
Runtime Library components. Like all Apache Releases, the official Apache MXNet
releases consist of source code only and are found at the [Download
page](https://mxnet.apache.org/get_started/download).

Run the following command:

[here](https://github.com/oneapi-src/oneDNN). You can find performance numbers in the

[MXNet tuning guide](https://mxnet.apache.org/versions/1.8.0/api/faq/perf.html#intel-cpu). To install native MXNet without oneDNN, run the following command:

[here](https://github.com/oneapi-src/oneDNN). You can find performance numbers in the

[MXNet tuning guide](https://mxnet.apache.org/versions/1.7.0/api/faq/perf.html#intel-cpu). To install native MXNet without oneDNN, run the following command:

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

You can then [validate your MXNet installation](/get_started/validate_mxnet.html).

**NOTES:**

*mxnet-cu101* means the package is built with CUDA/cuDNN and the CUDA version is
10.1.

All MKL pip packages are experimental prior to version 1.3.0.

**WARNING**: the following links and names of binary distributions are provided for
your convenience but they point to packages that are *not* provided nor endorsed
by the Apache Software Foundation. As such, they might contain software
components with more restrictive licenses than the Apache License and you’ll
need to decide whether they are appropriate for your usage. Like all Apache
Releases, the official Apache MXNet releases consist of source code
only and are found at
the [Download page](https://mxnet.apache.org/get_started/download).

Docker images with *MXNet* are available at [DockerHub](https://hub.docker.com/r/mxnet/).
After you installed Docker on your machine, you can use them via:

You can list docker images to see if mxnet/python docker image pull was successful.

You can then [validate the installation](/get_started/validate_mxnet.html).

Please follow the build from source instructions linked above.

**WARNING**: the following PyPI package names are provided for your convenience but
they point to packages that are *not* provided nor endorsed by the Apache
Software Foundation. As such, they might contain software components with more
restrictive licenses than the Apache License and you’ll need to decide whether
they are appropriate for your usage. The packages linked here contain
proprietary parts of the NVidia CUDA SDK and GPL GCC Runtime Library components.
Like all Apache Releases, the official Apache MXNet releases
consist of source code only and are found at the [Download
page](https://mxnet.apache.org/get_started/download).

**PREREQUISITES**: [CUDA](https://developer.nvidia.com/cuda-downloads) should be installed first. Starting from version 1.8.0, [CUDNN](https://developer.nvidia.com/cudnn) and [NCCL](https://developer.nvidia.com/nccl) should be installed as well.

Run the following command:

You can then [validate your MXNet installation](/get_started/validate_mxnet.html).

**NOTES:**

*mxnet-cu101* means the package is built with CUDA/cuDNN and the CUDA version is
10.1.

All MKL pip packages are experimental prior to version 1.3.0.

**Important:** Make sure your installed CUDA (CUDNN/NCCL if applicable) version matches the CUDA version in the pip package.

Check your CUDA version with the following command:

You can either upgrade your CUDA install or install the MXNet package that supports your CUDA version.

**WARNING**: the following links and names of binary distributions are provided for
your convenience but they point to packages that are *not* provided nor endorsed
by the Apache Software Foundation. As such, they might contain software
components with more restrictive licenses than the Apache License and you’ll
need to decide whether they are appropriate for your usage. The packages linked
here contain proprietary parts of the NVidia CUDA SDK and GPL GCC Runtime
Library components. Like all Apache Releases, the official Apache MXNet
releases consist of source code only and are found at the [Download
page](https://mxnet.apache.org/get_started/download).

Docker images with *MXNet* are available at [DockerHub](https://hub.docker.com/r/mxnet/).

Please follow the [NVidia Docker installation
instructions](https://github.com/NVIDIA/nvidia-docker/wiki) to enable the usage
of GPUs from the docker containers.

After you installed Docker on your machine, you can use them via:

You can list docker images to see if mxnet/python docker image pull was successful.

You can then [validate the installation](/get_started/validate_mxnet.html).

Please follow the build from source instructions linked above.

You will need to R v3.4.4+ and build MXNet from source. Please follow the instructions linked above.

Prebuilt binaries distributed via Maven have been removed as they redistributed
Category-X binaries in violation of Apache Software Foundation (ASF) policies.
If you would like to help re-do the binary releases in an ASF-compliant manner,
please reach out via one of the [developer communications
channels](https://mxnet.apache.org/community/contribute#mxnet-dev-communications).
Until then, please follow the build from source instructions linked below.

Please refer to the [MXNet-Clojure setup guide](https://github.com/apache/incubator-mxnet/tree/master/contrib/clojure-package) for a detailed set of instructions to help you with the setup process that is required to use the Clojure dependency.

Previously available binaries distributed via Maven have been removed as they redistributed Category-X binaries in violation of Apache Software Foundation (ASF) policies.

At this point in time, no third-party binary Java packages are available. Please follow the build from source instructions linked above.

Please follow the build from source instructions linked above.

Please follow the build from source instructions linked above.

To use the C++ package, build from source the `USE_CPP_PACKAGE=1`

option. Please
refer to the build from source instructions linked above.

**WARNING**: the following PyPI package names are provided for your convenience but
they point to packages that are *not* provided nor endorsed by the Apache
Software Foundation. As such, they might contain software components with more
restrictive licenses than the Apache License and you’ll need to decide whether
they are appropriate for your usage. The packages linked here contain GPL GCC
Runtime Library components. Like all Apache Releases, the official Apache MXNet
releases consist of source code only and are found at the [Download
page](https://mxnet.apache.org/get_started/download).

Run the following command:

[here](https://github.com/oneapi-src/oneDNN). You can find performance numbers in the

[MXNet tuning guide](https://mxnet.apache.org/versions/1.8.0/api/faq/perf.html#intel-cpu). To install native MXNet without oneDNN, run the following command:

[here](https://github.com/oneapi-src/oneDNN). You can find performance numbers in the

[MXNet tuning guide](https://mxnet.apache.org/versions/1.7.0/api/faq/perf.html#intel-cpu). To install native MXNet without oneDNN, run the following command:

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

You can then [validate your MXNet installation](/get_started/validate_mxnet.html).

**NOTES:**

*mxnet-cu101* means the package is built with CUDA/cuDNN and the CUDA version is
10.1.

All MKL pip packages are experimental prior to version 1.3.0.

**WARNING**: the following links and names of binary distributions are provided for
your convenience but they point to packages that are *not* provided nor endorsed
by the Apache Software Foundation. As such, they might contain software
components with more restrictive licenses than the Apache License and you’ll
need to decide whether they are appropriate for your usage. Like all Apache
Releases, the official Apache MXNet releases consist of source code
only and are found at
the [Download page](https://mxnet.apache.org/get_started/download).

Docker images with *MXNet* are available at [DockerHub](https://hub.docker.com/r/mxnet/).
After you installed Docker on your machine, you can use them via:

You can list docker images to see if mxnet/python docker image pull was successful.

You can then [validate the installation](/get_started/validate_mxnet.html).

Please follow the build from source instructions linked above.

Please follow the build from source instructions linked above.

You will need to R v3.4.4+ and build MXNet from source. Please follow the instructions linked above.

Prebuilt binaries distributed via Maven have been removed as they redistributed
Category-X binaries in violation of Apache Software Foundation (ASF) policies.
If you would like to help re-do the binary releases in an ASF-compliant manner,
please reach out via one of the [developer communications
channels](https://mxnet.apache.org/community/contribute#mxnet-dev-communications).
Until then, please follow the build from source instructions linked below.

Please refer to the [MXNet-Clojure setup guide](https://github.com/apache/incubator-mxnet/tree/master/contrib/clojure-package) for a detailed set of instructions to help you with the setup process that is required to use the Clojure dependency.

Previously available binaries distributed via Maven have been removed as they redistributed Category-X binaries in violation of Apache Software Foundation (ASF) policies.

At this point in time, no third-party binary Java packages are available. Please follow the build from source instructions linked above.

Please follow the build from source instructions linked above.

Please follow the build from source instructions linked above.

To use the C++ package, build from source the `USE_CPP_PACKAGE=1`

option. Please
refer to the build from source instructions linked above.

**WARNING**: the following PyPI package names are provided for your convenience but
they point to packages that are *not* provided nor endorsed by the Apache
Software Foundation. As such, they might contain software components with more
restrictive licenses than the Apache License and you’ll need to decide whether
they are appropriate for your usage. The packages linked here contain GPL GCC
Runtime Library components. Like all Apache Releases, the official Apache MXNet
releases consist of source code only and are found at the [Download
page](https://mxnet.apache.org/get_started/download).

Run the following command:

[here](https://github.com/oneapi-src/oneDNN). You can find performance numbers in the

[MXNet tuning guide](https://mxnet.apache.org/versions/1.8.0/api/faq/perf.html#intel-cpu). To install native MXNet without oneDNN, run the following command:

[here](https://github.com/oneapi-src/oneDNN). You can find performance numbers in the

[MXNet tuning guide](https://mxnet.apache.org/versions/1.7.0/api/faq/perf.html#intel-cpu). To install native MXNet without oneDNN, run the following command:

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

[MXNet tuning guide](https://mxnet.apache.org/versions/1.6/api/faq/perf.html#intel-cpu).

You can then [validate your MXNet installation](/get_started/validate_mxnet.html).

**NOTES:**

*mxnet-cu101* means the package is built with CUDA/cuDNN and the CUDA version is
10.1.

All MKL pip packages are experimental prior to version 1.3.0.

Please follow the build from source instructions linked above.

**WARNING**: the following PyPI package names are provided for your convenience but
they point to packages that are *not* provided nor endorsed by the Apache
Software Foundation. As such, they might contain software components with more
restrictive licenses than the Apache License and you’ll need to decide whether
they are appropriate for your usage. The packages linked here contain
proprietary parts of the NVidia CUDA SDK and GPL GCC Runtime Library components.
Like all Apache Releases, the official Apache MXNet releases
consist of source code only and are found at the [Download
page](https://mxnet.apache.org/get_started/download).

**PREREQUISITES**: [CUDA](https://developer.nvidia.com/cuda-downloads) should be installed first. Starting from version 1.8.0, [CUDNN](https://developer.nvidia.com/cudnn) and [NCCL](https://developer.nvidia.com/nccl) should be installed as well.

Run the following command:

You can then [validate your MXNet installation](/get_started/validate_mxnet.html).

**NOTES:**

*mxnet-cu101* means the package is built with CUDA/cuDNN and the CUDA version is
10.1.

All MKL pip packages are experimental prior to version 1.3.0.

**Important:** Make sure your installed CUDA (CUDNN/NCCL if applicable) version matches the CUDA version in the pip package.

Check your CUDA version with the following command:

You can either upgrade your CUDA install or install the MXNet package that supports your CUDA version.

Please follow the build from source instructions linked above.

You will need to R v3.4.4+ and build MXNet from source. Please follow the instructions linked above.

Prebuilt binaries distributed via Maven have been removed as they redistributed
Category-X binaries in violation of Apache Software Foundation (ASF) policies.
If you would like to help re-do the binary releases in an ASF-compliant manner,
please reach out via one of the [developer communications
channels](https://mxnet.apache.org/community/contribute#mxnet-dev-communications).
Until then, please follow the build from source instructions linked below.

Please refer to the [MXNet-Clojure setup guide](https://github.com/apache/incubator-mxnet/tree/master/contrib/clojure-package) for a detailed set of instructions to help you with the setup process that is required to use the Clojure dependency.

Previously available binaries distributed via Maven have been removed as they redistributed Category-X binaries in violation of Apache Software Foundation (ASF) policies.

At this point in time, no third-party binary Java packages are available. Please follow the build from source instructions linked above.

Please follow the build from source instructions linked above.

Please follow the build from source instructions linked above.

To use the C++ package, build from source the `USE_CPP_PACKAGE=1`

option. Please
refer to the build from source instructions linked above.

MXNet is available on several cloud providers with GPU support. You can also find GPU/CPU-hybrid support for use cases like scalable inference, or even fractional GPU support with AWS Elastic Inference.

**WARNING**: the following cloud provider packages are provided for your convenience
but they point to packages that are *not* provided nor endorsed by the Apache
Software Foundation. As such, they might contain software components with more
restrictive licenses than the Apache License and you’ll need to decide whether
they are appropriate for your usage. Like all Apache Releases, the official
Apache MXNet releases consist of source code only and are found at
the [Download page](https://mxnet.apache.org/get_started/download).

**Alibaba**[NVIDIA VM](https://docs.nvidia.com/ngc/ngc-alibaba-setup-guide/launching-nv-cloud-vm-console.html#launching-nv-cloud-vm-console)**Amazon Web Services**[Amazon SageMaker](https://aws.amazon.com/sagemaker/)- Managed training and deployment of MXNet models[AWS Deep Learning AMI](https://aws.amazon.com/machine-learning/amis/)- Preinstalled Conda environments for Python 2 or 3 with MXNet, CUDA, cuDNN, oneDNN, and AWS Elastic Inference[Dynamic Training on AWS](https://github.com/awslabs/dynamic-training-with-apache-mxnet-on-aws)- experimental manual EC2 setup or semi-automated CloudFormation setup[NVIDIA VM](https://aws.amazon.com/marketplace/pp/B076K31M1S)**Google Cloud Platform**[NVIDIA VM](https://console.cloud.google.com/marketplace/details/nvidia-ngc-public/nvidia_gpu_cloud_image)**Microsoft Azure**[NVIDIA VM](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/nvidia.ngc_azure_17_11?tab=Overview)**Oracle Cloud**[NVIDIA VM](https://docs.cloud.oracle.com/iaas/Content/Compute/References/ngcimage.htm)

All NVIDIA VMs use the [NVIDIA MXNet Docker
container](https://ngc.nvidia.com/catalog/containers/nvidia:mxnet).
Follow the [container usage
instructions](https://ngc.nvidia.com/catalog/containers/nvidia:mxnet) found in
[NVIDIA’s container repository](https://ngc.nvidia.com/).

MXNet should work on any cloud provider’s CPU-only instances. Follow the Python pip install instructions, Docker instructions, or try the following preinstalled option.

**WARNING**: the following cloud provider packages are provided for your convenience
but they point to packages that are *not* provided nor endorsed by the Apache
Software Foundation. As such, they might contain software components with more
restrictive licenses than the Apache License and you’ll need to decide whether
they are appropriate for your usage. Like all Apache Releases, the official
Apache MXNet releases consist of source code only and are found at
the [Download page](https://mxnet.apache.org/get_started/download).

**Amazon Web Services**[AWS Deep Learning AMI](https://aws.amazon.com/machine-learning/amis/)- Preinstalled Conda environments for Python 2 or 3 with MXNet and oneDNN.

MXNet supports running on ARM devices, such as the Raspberry PI.

These instructions will walk through how to build MXNet for the Raspberry Pi and install the Python bindings for the library.

You can do a cross compilation build on your local machine (faster) or a native build on-device (slower, but more foolproof).

The complete MXNet library and its requirements can take almost 200MB of RAM, and loading large models with the library can take over 1GB of RAM. Because of this, we recommend running MXNet on the Raspberry Pi 3 or an equivalent device that has more than 1 GB of RAM and a Secure Digital (SD) card that has at least 4 GB of free memory.

## Native build on the Raspberry Pi

To build MXNet directly on the Raspberry Pi device, you can mainly follow the
standard [Ubuntu setup]
instructions. However, skip the step of copying the `config/linux.cmake`

to
`config.cmake`

and instead run the `cmake`

in the “Build MXNet core shared
library” step as follows:

```
rm -rf build
mkdir -p build && cd build
cmake \
-DUSE_SSE=OFF \
-DUSE_CUDA=OFF \
-DUSE_BLAS=Open \
-DUSE_OPENCV=ON \
-DUSE_OPENMP=ON \
-DUSE_SIGNAL_HANDLER=ON \
-DCMAKE_BUILD_TYPE=Release \
-GNinja ..
ninja -j$(nproc)
```


Some compilation units require memory close to 1GB, so it’s recommended that you
enable swap as explained below and be cautious about increasing the number of
jobs when building (-j). Executing these commands start the build process, which
can take up to a couple hours, and creates a file called `libmxnet.so`

in the
build directory.

If you are getting build errors in which the compiler is being killed, it is likely that the compiler is running out of memory (especially if you are on Raspberry Pi 1, 2 or Zero, which have less than 1GB of RAM), this can often be rectified by increasing the swapfile size on the Pi by editing the file /etc/dphys-swapfile and changing the line CONF_SWAPSIZE=100 to CONF_SWAPSIZE=1024, then running:

```
sudo /etc/init.d/dphys-swapfile stop
sudo /etc/init.d/dphys-swapfile start
free -m # to verify the swapfile size has been increased
```


## Cross-compiling on your local machine

### Obtaining the toolchain

You first need to setup the cross-compilation toolchain on your local machine.
On Debian based systems, you can install `crossbuild-essential-armel`

to obtain
a cross-toolchain for the ARMv4T, 5T, and 6, `crossbuild-essential-armhf`

ARMv7
architecture and `crossbuild-essential-arm64`

for ARMv8 (also called aarch64).
See for example
[Wikipedia](https://en.wikipedia.org/wiki/Raspberry_Pi#Specifications) to
determine the architecture of your Raspberry PI devices. If none of the Debian
toolchains works for you, you may like to refer to
[toolchains.bootlin.com](https://toolchains.bootlin.com/) for a large number of
ready-to-use cross-compilation toolchains.

### Cross-compiling MXNet dependencies

Before compiling MXNet, you need to cross-compile MXNet’s dependencies. At the
very minimum, you’ll need OpenBLAS. You can cross-compile it as follows,
replacing the `CC=aarch64-linux-gnu-gcc`

and `PREFIX=/usr/aarch64-linux-gnu`

based on your architecture:

```
git clone --recursive https://github.com/xianyi/OpenBLAS.git
cd OpenBLAS
make NOFORTRAN=1 NO_SHARED=1 CC=aarch64-linux-gnu-gcc
make PREFIX=/usr/local/aarch64-linux-gnu NO_SHARED=1 install
```


If you would like to compile MXNet with OpenCV support, enabling various image transformation related features, you also need to cross-compile OpenCV.

### Cross-compiling MXNet

Before you cross-compile MXNet, create a CMake toolchain file specifying all settings for your compilation. For example, `aarch64-linux-gnu-toolchain.cmake`

:

``` set(CMAKE_SYSTEM_NAME Linux) set(CMAKE_SYSTEM_PROCESSOR “aarch64”) set(CMAKE_C_COMPILER aarch64-linux-gnu-gcc) set(CMAKE_CXX_COMPILER aarch64-linux-gnu-g++) set(CMAKE_CUDA_HOST_COMPILER aarch64-linux-gnu-gcc) set(CMAKE_FIND_ROOT_PATH “/usr/aarch64-linux-gnu;/usr/local/aarch64-linux-gnu”)

set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER) set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY) set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY) set(CMAKE_FIND_ROOT_PATH_MODE_PACKAGE ONLY) ```

`CMAKE_FIND_ROOT_PATH`

should be a list of directories containing the
cross-compilation toolchain and MXNet’s cross-compiled dependencies. If you use
a toolchain from the bootlin site linked above, you can find the respective
CMake toolchain file at `share/buildroot/toolchainfile.cmake`

.

You can then cross-compile MXNet via

```
mkdir build; cd build
cmake -DCMAKE_TOOLCHAIN_FILE=${CMAKE_TOOLCHAIN_FILE} \
-DUSE_CUDA=OFF \
-DSUPPORT_F16C=OFF \
-DUSE_BLAS=Open \
-DUSE_OPENCV=OFF \
-DUSE_OPENMP=ON \
-DUSE_LAPACK=OFF \
-DUSE_SIGNAL_HANDLER=ON \
-DCMAKE_BUILD_TYPE=Release \
-G Ninja ..
ninja
cd ..
```


We would like to simplify this setup by integrating the Conan C++ dependency manager. Please send an email to the MXNet development mailinglist or open an issue on Github if you would like to help.

### Building the Python wheel

To build the wheel, you can follow the following process

``` export MXNET_LIBRARY_PATH=$(pwd)/build/libmxnet.so

cd python python3 setup.py bdist_wheel

# Fix pathing issues in the wheel. We need to move libmxnet.so from the data folder to the

# mxnet folder, then repackage the wheel.
WHEEL=`readlink -f dist/*.whl`

TMPDIR=`mktemp -d`

unzip -d ${TMPDIR} ${WHEEL}
rm ${WHEEL}
cd ${TMPDIR}
mv *.data/data/mxnet/libmxnet.so mxnet
zip -r ${WHEEL} .
cp ${WHEEL} ..
rm -rf ${TMPDIR}
```

We intend to fix the `setup.py`

to avoid the repackaging step. If you would like
to help, please send an email to the MXNet development mailinglist or open an
issue on Github.

### Final remarks

You are now ready to run MXNet on your Raspberry Pi device. You can get started
by following the tutorial on [Real-time Object Detection with MXNet On The
Raspberry
Pi](https://mxnet.io/api/python/docs/tutorials/deploy/inference/wine_detector.html).

*Note - Because the complete MXNet library takes up a significant amount of the
Raspberry Pi’s limited RAM, when loading training data or large models into
memory, you might have to turn off the GUI and terminate running processes to
free RAM.*

# NVIDIA Jetson Devices

To install MXNet on a Jetson TX or Nano, please refer to the [Jetson installation
guide](/get_started/jetson_setup).

---

## Source: https://mxnet.apache.org/versions/master/features

# Features

### Whether you are looking for a flexible library to quickly develop cutting-edge deep learning research or a robust framework to push production workload, Apache MXNet caters to all needs.

[Get Started ›](/versions/master/get_started)

### Hybrid Front-End

The Gluon Python API lets you use Apache MXNet in a fully imperative manner. It also
allows you to simply switch to
symbolic mode by calling the [hybridize](/api/python/docs/tutorials/packages/gluon/blocks/hybridize.html)
functionality. The symbolic execution provides faster and more optimized
execution as well as the ability to export the network for inference in different language bindings like
java or C++.

### Distributed Training

Apache MXNet allows you to make the most out of your hardware, whether it is multi-gpu or
multi-host training with near-linear scaling efficiency. Apache MXNet recently introduced support for
[Horovod](https://medium.com/apache-mxnet/distributed-training-using-apache-mxnet-with-horovod-44f98bf0e7b7),
the distributed learning framework developed by Uber.

### 8 Language Bindings

Deep integration into Python and support for Scala, Julia, Clojure, Java, C++, R and Perl. Combined with the hybridization feature, this allows a very smooth transition from Python training to deployment in the language of your choice to shorten the time to production.

---

## Source: https://mxnet.apache.org/versions/master/ecosystem

# Ecosystem

### Explore a rich ecosystem of libraries, tools, and more to support research and development of Deep Learning application across many fields and domains of application.

[Get Started ›](/versions/master/get_started)

## D2L.ai

A [deep learning book](https://d2l.ai) with interactive jupyter notebooks, math formula,
and a dedicated forum for discussions.

It offers an interactive learning experience with mathematics, figures, code, text, and discussions, where concepts and techniques are illustrated and implemented with experiments on real data sets.

Each section is an executable Jupyter notebook. You can modify the code and tune hyperparameters to get instant feedback to accumulate practical experiences in deep learning.

The book is authored by [Aston Zhang](https://www.astonzhang.com/), Amazon Applied
Scientist UIUC Ph.D., [Zack C. Lipton](http://zacklipton.com/), CMU Assistant Professor
UCSD Ph.D.,
[Mu Li](https://scholar.google.com/citations?user=Z_WrhK8AAAAJ&hl=en) Amazon Principal
Scientist CMU Ph.D. and [Alex J. Smola](https://alex.smola.org/) Amazon VP/Distinguished
Scientist TU Berlin Ph.D.

D2L is used as a textbook or a reference book at Carnegie Mellon University, Georgia Institute of Technology, the University of California Berkeley and many more university

---

## Source: https://mxnet.apache.org/versions/master/trusted_by

master
master
1.9.1
1.8.0
1.7.0
1.6.0
1.5.0
1.4.1
1.3.1
1.2.1
1.1.0
1.0.0
0.12.1
0.11.0
x
master
1.9.1
1.8.0
1.7.0
1.6.0
1.5.0
1.4.1
1.3.1
1.2.1
1.1.0
1.0.0
0.12.1
0.11.0
Get Started
Features
Ecosystem
Docs & Tutorials
Trusted By
GitHub
Apache
Apache Software Foundation
License
Security
Privacy
Events
Sponsorship
Thanks
master
master
1.9.1
1.8.0
1.7.0
1.6.0
1.5.0
1.4.1
1.3.1
1.2.1
1.1.0
1.0.0
0.12.1
0.11.0
This project has retired. For details please refer to its
Attic page
.
Trusted By
These are some of the organizations that use Apache MXNet.
Get Started
›

---

## Source: https://mxnet.apache.org/versions/master/api/faq/security.html

# MXNet Security Best Practices

# Reporting a security vulnerability

The Apache Software Foundation takes a very active stance in eliminating security problems and denial of service attacks against its products.

We strongly encourage folks to report such problems to our private security mailing list first, before disclosing them in a public forum.

Please note that the security mailing list should only be used for reporting undisclosed security vulnerabilities and managing the process of fixing such vulnerabilities. We cannot accept regular bug reports or other queries at this address. All mail sent to this address that does not relate to an undisclosed security problem in our source code will be ignored.

Questions about:

- if a vulnerability applies to your particular application
- obtaining further information on a published vulnerability
- availability of patches and/or new releases
should be addressed to the users mailing list. Please see the
[mailing lists page](/community/contribute#mxnet-dev-communications)for details of how to subscribe.

The private security mailing address is: [security@apache.org](mailto:security@apache.org) *. Feel free to consult the general Apache Security guide for further details about the reporting process.*

# MXNet Security Best Practices

MXNet framework has no built-in security protections. It assumes that the MXNet entities involved in model training and inferencing (hosting) are fully trusted. It also assumes that their communications cannot be eavesdropped or tampered with. MXNet consumers shall ensure that the above assumptions are met.

In particular the following threat-vectors exist when training using MXNet:

- When running distributed training using MXNet there is no built-in support for authenticating cluster nodes participating in the training job.
- Data exchange between cluster nodes happens is in plain-text.
- Using
`kvstore.set_optimizer`

one can use a custom optimizer to combine gradients. This optimizer code is sent to the server nodes as a pickle file. A server does not perform any further validation of the pickle file and simply executes the code trusting the sender (worker). - Since there is no authentication between nodes, a malicious actor running on the same network can launch a Denial of Service (DoS) attack by sending data that can overwhelm/crash a scheduler or other server nodes.

It is highly recommended that the following best practices be followed when using MXNet:

- Run MXNet with least privilege, i.e. not as root.
- Run MXNet training jobs inside a secure and isolated environment. If you are using a cloud provider like Amazon AWS, running your training job inside a
[private VPC](https://aws.amazon.com/vpc/)is a good way to accomplish this. Additionally, configure your network security settings so as to only allow connections that the cluster nodes require. - Make sure no unauthorized actors have physical or remote access to the nodes participating in MXNet training.
- During training, one can configure MXNet to periodically save model checkpoints. To protect these model checkpoints from unauthorized access, make sure the checkpoints are written out to an encrypted storage volume, and have a provision to delete checkpoints that are no longer needed.
- When sharing trained models, or when receiving trained models from other parties, ensure that model artifacts are authenticated and integrity protected using cryptographic signatures, thus ensuring that the data received comes from trusted sources and has not been maliciously (or accidentally) modified in transit.
- By default, mx.random uses a static and fixed seed value. The random utilities in MXNet should therefore never be used to implement any type of security critical functionality where cryptographically secure pseudorandom number generation is required.

# Deployment Considerations

The following are not MXNet framework specific threats but are applicable to Machine Learning models in general.

- When deploying high-value, proprietary models for inference, care should be taken to prevent an adversary from stealing the model. The research paper
[Stealing Machine Learning Models via Prediction APIs](https://arxiv.org/pdf/1609.02943.pdf)outlines experiments performed to show how an attacker can use a prediction API to leak the ML model or construct a nearly identical replica. A simple way to thwart such an attack is to not expose the prediction probabilities to a high degree of precision in the API response.

---

## Source: https://mxnet.apache.org/

# APACHE MXNET:

A FLEXIBLE AND EFFICIENT

LIBRARY FOR DEEP LEARNING

A truly open source deep learning framework suited

for flexible research
prototyping and
production.

## Key Features &

Capabilities

### Hybrid Front-End

A hybrid front-end seamlessly transitions between Gluon eager imperative mode and symbolic mode to provide both flexibility and speed.

### Distributed Training

Scalable distributed training and performance optimization in research and production is enabled by the dual Parameter Server and Horovod support.

### 8 Language Bindings

Deep integration into Python and support for Scala, Julia, Clojure, Java, C++, R and Perl.

### Tools & Libraries

A thriving ecosystem of tools and libraries extends MXNet and enable use-cases in computer vision, NLP, time series and more.

## Ecosystem

Explore a rich ecosystem of libraries, tools, and more to support development.

## Community

Join the Apache MXNet scientific community to contribute, learn, and get answers to your questions.

---

## Source: https://mxnet.apache.org/versions/1.9.1/

# APACHE MXNET:

A FLEXIBLE AND EFFICIENT

LIBRARY FOR DEEP LEARNING

A truly open source deep learning framework suited

for flexible research
prototyping and
production.

## Key Features &

Capabilities

### Hybrid Front-End

A hybrid front-end seamlessly transitions between Gluon eager imperative mode and symbolic mode to provide both flexibility and speed.

### Distributed Training

Scalable distributed training and performance optimization in research and production is enabled by the dual Parameter Server and Horovod support.

### 8 Language Bindings

Deep integration into Python and support for Scala, Julia, Clojure, Java, C++, R and Perl.

### Tools & Libraries

A thriving ecosystem of tools and libraries extends MXNet and enable use-cases in computer vision, NLP, time series and more.

## Ecosystem

Explore a rich ecosystem of libraries, tools, and more to support development.

## Community

Join the Apache MXNet scientific community to contribute, learn, and get answers to your questions.

---

## Source: https://mxnet.apache.org/versions/1.8.0/

# A FLEXIBLE AND EFFICIENT

LIBRARY FOR DEEP LEARNING

A truly open source deep learning framework suited

for flexible research
prototyping and
production.

## Key Features &

Capabilities

### Hybrid Front-End

A hybrid front-end seamlessly transitions between Gluon eager imperative mode and symbolic mode to provide both flexibility and speed.

### Distributed Training

Scalable distributed training and performance optimization in research and production is enabled by the dual Parameter Server and Horovod support.

### 8 Language Bindings

Deep integration into Python and support for Scala, Julia, Clojure, Java, C++, R and Perl.

### Tools & Libraries

A thriving ecosystem of tools and libraries extends MXNet and enable use-cases in computer vision, NLP, time series and more.

## Ecosystem

Explore a rich ecosystem of libraries, tools, and more to support development.

## Latest News

Follow our blog post publications to get the latest news on MXNet and its ecosystem

## Community

Join the MXNet scientific community to contribute, learn, and get answers to your questions.

---

## Source: https://mxnet.apache.org/versions/1.7.0/

# A FLEXIBLE AND EFFICIENT

LIBRARY FOR DEEP LEARNING

A truly open source deep learning framework suited

for flexible research
prototyping and
production.

## Key Features &

Capabilities

### Hybrid Front-End

A hybrid front-end seamlessly transitions between Gluon eager imperative mode and symbolic mode to provide both flexibility and speed.

### Distributed Training

Scalable distributed training and performance optimization in research and production is enabled by the dual Parameter Server and Horovod support.

### 8 Language Bindings

Deep integration into Python and support for Scala, Julia, Clojure, Java, C++, R and Perl.

### Tools & Libraries

A thriving ecosystem of tools and libraries extends MXNet and enable use-cases in computer vision, NLP, time series and more.

## Ecosystem

Explore a rich ecosystem of libraries, tools, and more to support development.

## Latest News

Follow our blog post publications to get the latest news on MXNet and its ecosystem

## Community

Join the MXNet scientific community to contribute, learn, and get answers to your questions.

---

## Source: https://mxnet.apache.org/versions/1.6.0/

# A FLEXIBLE AND EFFICIENT

LIBRARY FOR DEEP LEARNING

A truly open source deep learning framework suited

for flexible research
prototyping and
production.

## Key Features &

Capabilities

### Hybrid Front-End

A hybrid front-end seamlessly transitions between Gluon eager imperative mode and symbolic mode to provide both flexibility and speed.

### Distributed Training

Scalable distributed training and performance optimization in research and production is enabled by the dual Parameter Server and Horovod support.

### 8 Language Bindings

Deep integration into Python and support for Scala, Julia, Clojure, Java, C++, R and Perl.

### Tools & Libraries

A thriving ecosystem of tools and libraries extends MXNet and enable use-cases in computer vision, NLP, time series and more.

## Ecosystem

Explore a rich ecosystem of libraries, tools, and more to support development.

## Latest News

Follow our blog post publications to get the latest news on MXNet and its ecosystem

## Community

Join the MXNet scientific community to contribute, learn, and get answers to your questions.

---

## Source: https://mxnet.apache.org/versions/1.5.0/

This release features Automatic Mixed Precision, MKL-DNN updates, CUDA10.1 support and more.

Check out our quick overview of how to use Gluon, the imperative interface of MXNet.

Contributors and customers of MXNet post about how-tos, guides, examples, and stories about their MXNet experiences.

One-click pre-trained models, included in Gluon. Fast implementations of many state-of-the-art models, for plug-and-play effortless use.

Explore projects from simple demos, examples, tutorials to state-of-the-art research.

These tutorials introduce a few fundamental concepts in deep learning and how to implement them in MXNet.

---

## Source: https://mxnet.apache.org/versions/1.4.1/

This release features performance improvements, bug fixes, and more.

Check out our quick overview of how to use Gluon, the imperative interface of MXNet.

Contributors and customers of MXNet post about how-tos, guides, examples, and stories about their MXNet experiences.

One-click pre-trained models, included in Gluon. Fast implementations of many state-of-the-art models, for plug-and-play effortless use.

Explore projects from simple demos, examples, tutorials to state-of-the-art research.

These tutorials introduce a few fundamental concepts in deep learning and how to implement them in MXNet.

---

## Source: https://mxnet.apache.org/versions/1.3.1/

This release features deterministic algorithm enforcement for convolutional layers, added documentation, bug fixes, and more.

Check out our quick overview of how to use Gluon, the imperative interface of MXNet.

Contributors and customers of MXNet post about how-tos, guides, examples, and stories about their MXNet experiences.

One-click pre-trained models, included in Gluon. Fast implementations of many state-of-the-art models, for plug-and-play effortless use.

Explore projects from simple demos, examples, tutorials to state-of-the-art research.

These tutorials introduce a few fundamental concepts in deep learning and how to implement them in MXNet.

---

## Source: https://mxnet.apache.org/versions/1.2.1/

This release features reduced memory consumption for ReLU activation, improved performance of depthwise convolution, improved slice operator performance by 20x, and more.

Check out our quick overview of how to use Gluon, the imperative interface of MXNet.

Contributors and customers of MXNet post about how-tos, guides, examples, and stories about their MXNet experiences.

One-click pre-trained models, included in Gluon. Fast implementations of many state-of-the-art models, for plug-and-play effortless use.

Explore projects from simple demos, examples, tutorials to state-of-the-art research.

These tutorials introduce a few fundamental concepts in deep learning and how to implement them in MXNet.

---

## Source: https://mxnet.apache.org/versions/1.1.0/

This release features improved GPU inference speed, improved usability for examples & tutorials, several bug fixes, and more.

Check out our quick overview of how to use Gluon, the imperative interface of MXNet.

Contributors and customers of MXNet post about how-tos, guides, examples, and stories about their MXNet experiences.

One-click pre-trained models, included in Gluon. Fast implementations of many state-of-the-art models, for plug-and-play effortless use.

Explore projects from simple demos, examples, tutorials to state-of-the-art research.

These tutorials introduce a few fundamental concepts in deep learning and how to implement them in MXNet.

---

## Source: https://mxnet.apache.org/versions/1.0.0/

This release features maximum CPU core utilization by default, bulk execution with imperative mode, enhanced performance of several operators, and more.

Check out our quick overview of how to use Gluon, the imperative interface of MXNet.

Contributors and customers of MXNet post about how-tos, guides, examples, and stories about their MXNet experiences.

One-click pre-trained models, included in Gluon. Fast implementations of many state-of-the-art models, for plug-and-play effortless use.

Explore projects from simple demos, examples, tutorials to state-of-the-art research.

These tutorials introduce a few fundamental concepts in deep learning and how to implement them in MXNet.

---

## Source: https://mxnet.apache.org/versions/0.12.1/

This release features several bug fixes as well as added GPU support for the syevd operator.

Check out our quick overview of how to use Gluon, the imperative interface of MXNet.

Contributors and customers of MXNet post about how-tos, guides, examples, and stories about their MXNet experiences.

One-click pre-trained models, included in Gluon. Fast implementations of many state-of-the-art models, for plug-and-play effortless use.

Explore projects from simple demos, examples, tutorials to state-of-the-art research.

These tutorials introduce a few fundamental concepts in deep learning and how to implement them in MXNet.

---

## Source: https://mxnet.apache.org/versions/0.11.0/

This release features an Apple Core ML model converter, an experimental Gluon interface, Keras v1.2.2 support and more.

Check out our quick overview of how to use Gluon, the imperative interface of MXNet.

Contributors and customers of MXNet post about how-tos, guides, examples, and stories about their MXNet experiences.

One-click pre-trained models, included in Gluon. Fast implementations of many state-of-the-art models, for plug-and-play effortless use.

Explore projects from simple demos, examples, tutorials to state-of-the-art research.

These tutorials introduce a few fundamental concepts in deep learning and how to implement them in MXNet.

---

## Source: https://mxnet.apache.org/versions/master/api/python.html

# Python Guide

[Get Started ›](/versions/master/get_started)

## Apache MXNet - Python API

Apache MXNet provides a comprehensive and flexible Python API to serve a broad community of developers with different levels of experience and wide ranging requirements. In this section, we provide an in-depth discussion of the functionality provided by various MXNet Python packages.

Apache MXNet’s Python API has two primary high-level packages*: the Gluon API and Module API. We recommend that new users start with the Gluon API as it’s more flexible and easier to debug. Underlying these high-level packages are the core packages of NDArray and Symbol.

NDArray works with arrays in an imperative fashion, i.e. you define how arrays will be transformed to get to an end result. Symbol works with arrays in a declarative fashion, i.e. you define the end result that is required (via a symbolic graph) and the MXNet engine will use various optimizations to determine the steps required to obtain this. With NDArray you have a great deal of flexibility when composing operations (as you can use Python control flow), and you can easily step through your code and inspect the values of arrays, which helps with debugging. Unfortunately, this comes at a performance cost when compared to Symbol, which can perform optimizations on the symbolic graph.

Module API is backed by Symbol, so, although it’s very performant, it’s also a little more restrictive. With the Gluon API, you can get the best of both worlds. You can develop and test your model imperatively using NDArray, a then switch to Symbol for faster model training and inference (if Symbol equivalents exist for your operations).

Code examples are placed throughout the API documentation and these can be run after importing MXNet as follows:

```
>>> import mxnet as mx
```

---

## Source: https://mxnet.apache.org/versions/master/api/python/docs/tutorials

# Python Tutorials[¶](#python-tutorials)

## Getting started[¶](#getting-started)

A quick overview of the core concepts of MXNet using the Gluon API.

Guides that ease your transition to MXNet from other framework.

## Packages & Modules[¶](#packages-modules)

MXNet’s imperative interface for Python. If you’re new to MXNet, start here!

This section contains the mxnet.np and mxnet.npx usage hints.

How to use Automatic Differentiation with the Autograd API.

## Performance[¶](#performance)

How to get the best performance from MXNet.

How to profile MXNet models.

How to use int8 in your model to boost training speed.

How to get the most from your CPU by using oneDNN.

How to use TVM to boost performance.

## Deployment[¶](#deployment)

How to deploy MXNet on an Amazon EC2 instance.

How to run MXNet using Amazon SageMaker.

## Customization[¶](#customization)

Coming Soon (CustomOps and Custom Operators)

## Next steps[¶](#next-steps)

To learn more about using MXNet to implement various deep learning algorithms from scratch, we recommend the

[Dive into Deep Learning](https://d2l.ai)book.Check out the

[API Reference docs](../api/index.html).

---

## Source: https://mxnet.apache.org/versions/master/api/python/docs/api

# Python API[¶](#python-api)

## Overview[¶](#overview)

This API section details functions, modules, and objects included in Apache MXNet, describing what they are and what they do. The APIs are grouped into the following categories:

## Imperative API[¶](#imperative-api)

MXNet NP module, an array library that provides NumPy-compatible API.

MXNet NPX module, neural network extension to the NumPy-compatible API.

Imperative APIs to load data, construct and train neural networks.

## Advanced modules[¶](#advanced-modules)

API for querying MXNet enabled features.

MXNet array device for specifying in-memory storage device.

MXNet memory and performance profiler.

Managing symbolic graph execution.

Server node for the key value store.

Engine properties management.

Tools for compiling and running CUDA code from the python frontend.

Tools for using and testing MXNet.

General utility functions

## Legacy[¶](#legacy)

Imperative APIs to manipulate multi-dimensional arrays.

Symbolic APIs for multi-dimensional arrays and neural network layers

Functions to track various statuses during an epoch.

Image iterators and image augmentation functions.

Data iterators for common data formats and utility functions.

Read and write for the RecordIO data format.

Functions for Symbol visualization.

---

## Source: https://mxnet.apache.org/versions/master/api/cpp.html

# C++ Guide

[Get Started ›](/versions/master/get_started)

# MXNet - C++ API

The MXNet C++ Package provides C++ API bindings to the users of MXNet. Currently, these bindings are not available as standalone package. The users of these bindings are required to build this package as mentioned below.

## Building C++ Package

The cpp-package directory contains the implementation of C++ API. Users are required to build this directory or package before using it.
**The cpp-package is built while building the MXNet shared library, libmxnet.so, with USE_CPP_PACKAGE option turned on. Please follow the steps to build the C++ package**

### Steps to build the C++ package:

- Building the MXNet C++ package requires building MXNet from source.
- Clone the MXNet GitHub repository
**recursively**to ensure the code in submodules is available for building MXNet.`git clone --recursive https://github.com/apache/mxnet`

- Install the
[recommended dependencies](https://mxnet.apache.org/versions/master/get_started/build_from_source.html#installing-mxnet's-recommended-dependencies)and[optional dependencies](https://mxnet.apache.org/versions/master/get_started/build_from_source.html#overview-of-optional-dependencies-and-optional-features)for building MXNet from source. - There is a configuration file for cmake,
[config/*.cmake](https://github.com/apache/mxnet/tree/master/config)that contains all the compilation options. You can edit this file and set the appropriate options prior to running the**cmake**command. - Please refer to
[cmake configuration files](https://github.com/apache/mxnet/blob/970a2cfbe77d09ee610fdd70afca1a93247cf4fb/config/linux_gpu.cmake#L18-L37)for more details on how to configure and compile MXNet. - For enabling the build of C++ Package, set the
**-DUSE_CPP_PACKAGE = 1**in cmake options.

### Cross-Compilation steps:

- Build the C++ package for the
**host**platform to generate op.h file. - Remove the following line in
[CMakeLists.txt](https://github.com/apache/mxnet/blob/master/cpp-package/CMakeLists.txt#L15).`COMMAND python OpWrapperGenerator.py $<TARGET_FILE:mxnet>`

- Re-configure cmake for cross-compilation to build the
**target**C++ package.

## Usage

In order to consume the C++ API please follow the steps below.

- Ensure that the MXNet shared library is built from source with the
**USE_CPP_PACKAGE = 1**. - Include the
[MxNetCpp.h](https://github.com/apache/mxnet/blob/master/cpp-package/include/mxnet-cpp/MxNetCpp.h)in the program that is going to consume MXNet C++ API.`#include <mxnet-cpp/MxNetCpp.h>`

- While building the program, ensure that the correct paths to the directories containing header files and MXNet shared library.
- The program links the MXNet shared library dynamically. Hence the library needs to be accessible to the program during runtime. This can be achieved by including the path to the shared library in the environment variable
**LD_LIBRARY_PATH**for Linux, Mac. and Ubuntu OS and**PATH**for Windows OS.

---

## Source: https://mxnet.apache.org/versions/master/api/cpp/docs/tutorials

C++ Tutorials C/C++ Guide › C/C++ Tutorials › C/C++ API Reference › List of available tutorials Basics Multi Threaded Inference C++ API inference tutorial Subgraph API

---

## Source: https://mxnet.apache.org/versions/master/api/cpp/docs/api

mxnet
mxnet Documentation
Generated on Thu Jan 5 2023 03:47:41 for mxnet by
1.8.17

---

## Source: https://mxnet.apache.org/versions/1.9.1/api

# Docs

### Documentation for the supported language bindings

[Get Started ›](/versions/1.9.1/get_started)

## Python API

#### Python-first API

Apache MXNet provides a comprehensive and flexible Python API to serve a broad community of developers with different levels of experience and wide ranging requirements. Current efforts are focused on the
[Gluon API. Gluon provides a clear, concise, and simple API for deep learning. It makes it easy to prototype, build, and train deep learning models without sacrificing training speed.](/versions/1.9.1/api/python/docs/api)

You can checkout the [rich ecosystem](/versions/1.9.1/ecosystem) built around Apache MXNet Gluon, including [D2L.ai](https://d2l.ai), [GluonCV](https://gluon-cv.mxnet.io),
[GluonNLP](https://gluon-nlp.mxnet.io) and [GluonTS](https://gluon-ts.mxnet.io).

While most of the usability improvement around training are focused on the python API, the performance of Apache MXNet is accessible through a variety of different language bindings, checkout their respective API and guides below!

## Other Bindings

## Apache MXNet Architecture

Building a high-performance deep learning library requires many systems-level design decisions. In this design note, we share the rationale for the specific choices made when designing MXNet. We imagine that these insights may be useful to both deep learning practitioners and builders of other deep learning systems.

#### Deep Learning System Design Concepts

The following pages address general design concepts for deep learning systems. Mainly, they focus on the following 3 areas: abstraction, optimization, and trade-offs between efficiency and flexibility. Additionally, we provide an overview of the complete MXNet system.

## FAQ

[How to convert a Caffe model to MXNet?](/versions/1.9.1/api/faq/caffe)[How to run MXNet on AWS?](/versions/1.9.1/api/faq/cloud)[How to do distributed training using MXNet on AWS?](/versions/1.9.1/api/faq/distributed_training)[What are MXNet environment variables?](/versions/1.9.1/api/faq/env_var)[How to use data from S3 for training?](/versions/1.9.1/api/faq/s3_integration)[How to run MXNet securely?](/versions/1.9.1/api/faq/smart_device)[How can I train using multiple GPUs with model parallelism?](/versions/1.9.1/api/faq/model_parallel_lstm)[How do I run MXNet on Multiple CPU/GPUs with data parallelism?](/versions/1.9.1/api/faq/multi_device)[How do I visualize neural networks as computation graphs?](/versions/1.9.1/api/faq/visualize_graph)[How do I use mixed precision (float16) with MXNet or Gluon?](/versions/1.9.1/api/faq/float16)[How do I use gradient compression with distributed training?](/versions/1.9.1/api/faq/gradient_compression)[Can I use nnpack to improve the CPU performance of MXNet?](/versions/1.9.1/api/faq/nnpack)[What are the best setup and data-handling tips and tricks for improving speed?](/versions/1.9.1/api/faq/perf)[How can I create a .rec dataset ?](/versions/1.9.1/api/faq/recordio)[How to run MXNet securely?](/versions/1.9.1/api/faq/security)

---

## Source: https://mxnet.apache.org/versions/master/api/architecture/exception_handling

# Exception Handling in Apache MXNet

# Exception Handling in Apache MXNet

This tutorial explains the exception handling support in Apache MXNet, and provides examples on how to throw and handle exceptions when in a multithreaded context. Although, the examples are in Python, they can be easily extended to MXNet language bindings.

MXNet exceptions can be thrown from two areas:

- MXNet main thread. For eg. Infershape and InferType.
- Spawned threads:
- By dependency engine for operator execution in parallel
- By the iterators, during the data loading, text parsing phase etc.


In the first case, the exception is thrown and can be handled in the main thread. In the second case, the exception is thrown in a spawned thread, caught and transported to the main thread, where it is rethrown. This tutorial will give more explanation and examples on how to handle exceptions for the second case.

## Prerequisites

To complete this tutorial, we need:

- MXNet
[7b24137](https://github.com/apache/mxnet/commit/7b24137ed45df605defa4ce72ec91554f6e445f0). See Instructions in[Setup and Installation](https://mxnet.io/get_started).

## Exception Handling for Iterators

The below example shows how to handle exceptions for iterators. In this example, we populate files for data and labels with fewer number of labels compared to the number of samples. This should throw an exception.

CSVIter uses PrefetcherIter for loading and parsing data. The PrefetcherIter spawns a producer thread in the background which prefetches the data while the main thread consumes the data. The exception is thrown in the spawned producer thread during the prefetching, when the label is not found corresponding to a specific sample.

The exception is transported to the main thread, where it is rethrown when Next is
called as part of the following line: `for batch in iter(data_train)`

.

In general, Exception may be rethrown as part of `Next`

and `BeforeFirst`

calls which correspond to `reset()`

and `next()`

methods in `MXDataIter`

for Python language bindings.

```
import os
import mxnet as mx
cwd = os.getcwd()
data_path = os.path.join(cwd, "data.csv")
label_path = os.path.join(cwd, "label.csv")
with open(data_path, "w") as fout:
for i in range(8):
fout.write("1,2,3,4,5,6,7,8,9,10\n")
with open(label_path, "w") as fout:
for i in range(7):
fout.write("label"+str(i))
try:
data_train = mx.io.CSVIter(data_csv=data_path, label_csv=label_path, data_shape=(1, 10),
batch_size=4)
for batch in iter(data_train):
print(data_train.getdata().asnumpy())
except mx.base.MXNetError as ex:
print("Exception handled")
print(ex)
```


### Limitation

There is a race condition when your last `next()`

call doesnt reach the batch in your dataset where exception occurs. Exception may or may not be thrown in this case depending on which thread wins the race. To avoid this situation, you should try and iterate through your full dataset if you think it can throw exceptions which need to be handled.

## Exception Handling for Operators

The below example shows how to handle exceptions for operators in the imperative mode.

For the operator case, the dependency engine spawns a number of threads if it is running in the `ThreadedEnginePool`

or `ThreadedEnginePerDevice`

mode. The final operator is executed in one of the spawned threads.

If an operator throws an exception during execution, this exception is propagated down the dependency chain. Once there is a synchronizing call i.e. WaitToRead for a variable in the dependency chain, the propagated exception is rethrown.

In the below example, I illustrate how an exception that occured in the first line is propagated down the dependency chain, and finally is rethrown when we make a synchronizing call to WaitToRead.

```
import mxnet as mx
a = mx.nd.random.normal(0, 1, (2, 2))
b = mx.nd.random.normal(0, 2, (2, 2))
c = mx.nd.dot(a, b)
d = mx.nd.random.normal(0, -1, (2, 2))
e = mx.nd.dot(c, d)
e.wait_to_read()
```


Although the above exception occurs when executing the operation which writes to the variable d in one of the child threads, it is thrown only when the synchronization happens as part of the line: `e.wait_to_read()`

.

Let us take another example. In the following case, we write to two variables and then `wait_to_read`

for both. This example shows that any particular exception will not be thrown more than once.

```
import mxnet as mx
a = mx.nd.random.normal(0, 1, (2, 2))
b = mx.nd.random.normal(0, -1, (2, 2))
c, d = mx.nd.dot(a, b)
try:
c.asnumpy()
except mx.base.MXNetError as ex:
print("Exception handled")
d.asnumpy()
```

---

## Source: https://mxnet.apache.org/versions/master/api/architecture/note_data_loading

# Efficient Data Loaders

# Designing Efficient Data Loaders for Deep Learning

Data loading is an important component of any machine learning system. When we work with tiny datasets, we can get away with loading an entire dataset into GPU memory. With larger datasets, we must store examples in main memory. And when datasets grow too large to fit into main memory, data loading can become performance-critical. In designing a data loader, we aim to achieve more efficient data loading, to spend less effort on data preparation, and to present a clean and flexible interface.

We organize this design note as follows:

**IO Design Insight:**Guiding principles in data loading design.**Data Format:**Our solution using dmlc-core’s binary recordIO implementation.**Data Loading:**Our method to reduce IO cost by utilizing the threaded iterator provided by dmlc-core.**Interface Design:**Our approach to facilitate writing MXNet data iterators in just a few lines of Python.**Future Extension:**Prospective ideas for making data loading more flexible.

Our analysis will motivate several requirements that an effective IO system should fulfill.

*List of Key Requirements*

- Small file size.
- Parallel (distributed) packing of data.
- Fast data loading and online augmentation.
- Quick reads from arbitrary parts of the dataset in the distributed setting.

## Design Insight

To design an IO system, we must address two kinds of tasks: data preparation and data loading. Data preparation is usually performed offline, whereas data loading influences the online performance. In this section, we will introduce our insight of IO design involving the two phases.

### Data Preparation

Data preparation describes the process of packing data into a desired format for later processing. When working with large datasets like ImageNet, this process can be time-consuming. In these cases, there are several heuristics we ought to follow:

- Pack the dataset into small numbers of files. A dataset may contain millions of data instances. Packed data distributes easily from machine to machine.
- Do the packing once. We don’t want to repack data every time run-time settings, like the number of machines, are changed.
- Process the packing in parallel to save time.
- Be able to access arbitrary parts of the data easily. This is crucial for distributed machine learning when data parallelism is introduced. Things may get tricky when the data has been packed into several physical data files. The desired behavior could be: the packed data can be logically separated into arbitrary numbers of partitions, no matter how many physical data files there are. For example, if we pack 1000 images into 4 physical files, then each file contains 250 images. If we then use 10 machines to train a DNN, we should be able to load approximately 100 images per machine. Some machines may need images from different physical files.

### Data Loading

The next step to consider is how to load the packed data into RAM. Our goal is to load the data as quickly as possible. There are several heuristics we try to follow:

**Read continuously:**We can read faster when reading from contiguous locations on disk.**Reduce the bytes to be loaded:**We can achieve this by storing data in a compact way, e.g. saving images in JPEG format.**Load and train in different threads:**This avoids computational bottlenecks while loading data.**Save RAM:**Judiciously decide whether to load entire files into RAM.

## Data Format

Since the training of deep neural network often involves large amounts of data, the format we choose should be both efficient and convenient. To achieve our goals, we need to pack binary data into a splittable format. In MXNet, we rely on the binary recordIO format implemented in dmlc-core.

### Binary Record

In MXNet’s binary RecordIO, we store each data instance as a record.
**kMagic** is a *magic number* indicating the start of a record.
**Lrecord** encodes length and a continue flag.
In lrecord,

- cflag == 0: this is a complete record
- cflag == 1: start of a multiple-records
- cflag == 2: middle of multiple-records
- cflag == 3: end of multiple-records

**Data** is the space to save data content.
**Pad** is simply a padding space to make record align to 4 bytes.

After we pack the data, each file contains multiple records. Then, loading can be continuous. This avoids the low performance that can result from reading random locations on disk.

One advantage of storing data via records is that each record can vary in length. This allows us to save data compactly when good compression algorithms are available for our data. For example, we can use JPEG format to save image data. The packed data will be much smaller compared with storing uncompressed RGB values for each pixel.

Take ImageNet_1K dataset as an example.
If we store the data as 3 * 256 * 256 array of raw RGB values,
the dataset would occupy more than **200G**.
But after compressing the images using JPEG,
they only occupy about **35G** of disk space.
This significantly reduces the cost owing to reading from disk.

Here’s an example of binary recordIO:
We first resize the image into 256 * 256,
then compress into JPEG format.
After that, we save a header that indicates the index and label
for that image to be used when constructing the *Data* field for that record.
We then pack several images together into a file.
You may want to also review the [example using im2rec.py to create a RecordIO dataset](https://mxnet.apache.org/api/faq/recordio).

### Access Arbitrary Parts Of Data

One desirable property for a data loader might be: The packed data can be logically sliced into an arbitrary number of partitions, no matter how many physical packed data files there are. Since binary recordIO can easily locate the start and end of a record using the Magic Number, we can achieve the above goal using the InputSplit functionality provided by dmlc-core.

InputSplit takes the following parameters:

- FileSystem
*filesys*: dmlc-core wrapper around the IO operations for different file systems, like hdfs, s3, local. User shouldn’t need to worry about the difference between file systems anymore. - Char
*uri*: The URI of files. Note that it could be a list of files because we may pack the data into several physical parts. File URIs are separated by ‘;’. - Unsigned
*nsplit*: The number of logical splits.*nsplit*could be different from the number of physical files. - Unsigned
*rank*: Which split to load in this process.

The splitting process is demonstrated below:

- Determine the size of each partition.

- Approximately partition the records according to file size. Note that the boundary of each part may be located in the middle of a record.

- Set the beginning of partitions in such a way as to avoid splitting records across partitions.

By conducting the above operations, we now identify the records belong to each part, and the physical data files needed by each logical part. InputSplit greatly simplifies data parallelism, where each process only reads part of the data.

Since our partitioning scheme does not depend on the number of physical data files, we can process a huge dataset like ImageNet_22K in parallel fashion as illustrated below. We don’t need to consider distributed loading issue at the preparation time, just select the most efficient physical file number according to the dataset size and computing resources available.

## Data Loading and Preprocessing

When the speed of loading and preprocessing can’t keep up
with the speed of training or evaluation,
IO can bottleneck the speed of the whole system.
In this section, we will introduce a few tricks
to achieve greater efficiency when loading
and preprocessing data packed in binary recordIO format.
When applied to the ImageNet dataset, our approach achieves
the IO speed of **3000** images/sec **with a normal HDD**.

### Loading and preprocessing on the fly

When training deep neural networks, we sometimes must load and preprocess the data while simultaneously training for the following reasons:

- When the whole size of the dataset exceeds available RAM size, we can’t load it in advance;
- Sometimes, to make models robust to things like translations, rotations, and small amounts of color shift of noise, we introduce randomness into the training process. In these cases we must re-preprocess the data each time we revisit an example.

In service of efficiency, we also address multi-threading techniques. Taking Imagenet training as an example, after loading a bunch of image records, we can start multiple threads to simultaneously perform image decoding and image augmentation. We depict this process in the following illustration:

### Hide IO Cost Using Threadediter

One way to lower IO cost is to pre-fetch the data for next batch on one thread,
while the main thread performs the forward and backward passes for training.
To support more complicated training schemes,
MXNet provides a more general IO processing pipeline
using *threadediter* provided by dmlc-core.
The key of *threadediter* is to start a stand-alone thread that acts as a data provider,
while the main thread acts as a data consumer as illustrated below.

The threadediter maintains a buffer of a certain size and automatically fills the buffer when it’s not full. And after the consumer finishes consuming part of the data in the buffer, threadediter will reuse the space to save the next part of data.

## MXNet IO Python Interface

We make the IO object as an iterator in numpy. By achieving that, the user can easily access the data using a for-loop or calling next() function. Defining a data iterator is very similar to defining a symbolic operator in MXNet.

The following example code demonstrates a Cifar data iterator.

```
dataiter = mx.io.ImageRecordIter(
# Dataset Parameter, indicating the data file, please check the data is already there
path_imgrec="data/cifar/train.rec",
# Dataset Parameter, indicating the image size after preprocessing
data_shape=(3,28,28),
# Batch Parameter, tells how many images in a batch
batch_size=100,
# Augmentation Parameter, when offers mean_img, each image will subtract the mean value at each pixel
mean_img="data/cifar/cifar10_mean.bin",
# Augmentation Parameter, randomly crop a patch of the data_shape from the original image
rand_crop=True,
# Augmentation Parameter, randomly mirror the image horizontally
rand_mirror=True,
# Augmentation Parameter, randomly shuffle the data
shuffle=False,
# Backend Parameter, preprocessing thread number
preprocess_threads=4,
# Backend Parameter, prefetch buffer size
prefetch_buffer=1,
# Optional, the device context which data loader optimized for, could be 'gpu' or 'cpu'
ctx="gpu",
# The out data type, could be 'float32' 'int8' or 'uint8'
dtype="float32")
```


Generally, to create a data iterator, you need to provide five kinds of parameters:

**Dataset Param:**Information needed to access the dataset, e.g. file path, input shape.**Batch Param:**Specifies how to form a batch, e.g. batch size.**Augmentation Param:**Which augmentation operations (e.g. crop, mirror) should be taken on an input image.**Backend Param:**Controls the behavior of the backend threads to hide data loading cost.**Auxiliary Param:**Provides options to help with debugging.

Usually, **Dataset Param** and **Batch Param** MUST be given,
otherwise the data batch can’t be created.
Other parameters can be given as needed.
Ideally, we should separate the MX Data IO into modules,
some of which might be useful to expose to users, for example:

**Efficient prefetcher:**allows the user to write a data loader that reads their customized binary format that automatically gets multi-threaded prefetcher support.**Data transformer:**image random cropping, mirroring, etc. Allows the users to use those tools, or plug in their own customized transformers (maybe they want to add some specific kind of coherent random noise to data, etc.)

## Future Extensions

In the future, there are some extensions to our data IO that we might consider adding. Specifically, we might add specialized support for applications including image segmentation, object localization, and speech recognition. More detail will be provided when such applications have been running on MXNet.

---

## Source: https://mxnet.apache.org/versions/master/api/architecture/note_engine

# Dependency Engine

# Dependency Engine for Deep Learning

We always want deep learning libraries to run faster and scale to larger datasets. One natural approach is to see if we can benefit from throwing more hardware at the problem, as by using multiple GPUs simultaneously.

Library designers then ask:
How can we *parallelize* computation across devices?
And, more importantly, how can we *synchronize* computation
when we introduce multi-threading?
A runtime dependency engine is a generic solution to these problems.

In this document, we examine approaches for using runtime dependency scheduling to accelerate deep learning. We aim to explain how runtime dependency scheduling can both speed up and simplify multi-device deep learning. We also explore potential designs for a generic dependency engine that could be both library- and operation-independent.

Most of the discussion of on this page draws inspiration
from the MXNet dependency engine.
The dependency tracking algorithm we discuss
was primarily developed by [Yutian Li](https://github.com/hotpxl)
and [Mingjie Wang](https://github.com/jermainewang).

## Dependency Scheduling

Although most users want to take advantage of parallel computation, most of us are more familiar with serial programs. So one natural question is: how can we write serial programs and build a library to automatically parallelize our programs in an asynchronous way?

For example, in the following code, we can run `B = A + 1`

and `C = A + 2`

in any order, or in parallel:

```
A = 2
B = A + 1
C = A + 2
D = B * C
```


However, it’s quite hard to code the sequence manually
because the last operation, `D = B * C`

, needs to wait
for both of the preceding operations to complete before it starts.
The following dependency graph/data flow graph illustrates this.

A dependency engine is a library that takes a sequence of operations
and schedules them according to the dependency pattern, potentially in parallel.
So in this example, a dependency library
could run `B = A + 1`

and `C = A + 2`

in parallel,
and run `D = B * C`

after those operations complete.

## Problems in Dependency Scheduling

A dependency engine relieves the burden of writing concurrent programs. However, as operations become parallelized, new dependency tracking problems arise. In this section, we discuss those problems.

### Data Flow Dependency

Data flow dependency describes how the outcome of one computation can be used in other computations. Every dependency engine has to solve the data flow dependency problem.

Because we discussed this issue in the preceding section, we include the same figure here. Libraries that have data flow tracking engines include Minerva and Purine2.

### Memory Recycling

When should we recycle the memory that we allocated to the arrays? In serial processing, this is easy to determine. We simply recycle the memory after the variable goes out of scope. However, as the following figure shows, this is a bit harder in parallel processing.

In this example, because both computations need to use values from A,
we can’t recycle the memory until both complete.
The engine must schedule the memory recycling operations according to the dependencies,
and ensure that they are executed after both `B = A + 1`

and `C = A + 2`

complete.

### Random Number Generation

Random number generators, which are commonly used in machine learning, pose interesting challenges for dependency engines. Consider the following example:

In this example, we are generating random numbers in a sequence. Although it seems that the two random number generations can be parallelized, this is usually not the case. A pseudo-random number generator (PRNG) is not thread-safe because it might cause some internal state to mutate when generating a new number. Even if the PRNG is thread-safe, it is preferable to serialize number generation, so we can get reproducible random numbers.

## Case Study: A Dependency Engine for a Multi-GPU Neural Network

In the last section, we discussed the problems we might face in designing a dependency engine. Before thinking about how to design a generic engine to solve those problems, let’s consider how a dependency engine can help in multi-GPU training of a neural network. The following pseudocode Python program illustrates training one batch on a two-layer neural network.

```
# Example of one iteration Two GPU neural Net
data = next_batch()
data[gpu0].copyfrom(data[0:50])
data[gpu1].copyfrom(data[50:100])
# forward, backprop on GPU 0
fc1[gpu0] = FullcForward(data[gpu0], fc1_weight[gpu0])
fc2[gpu0] = FullcForward(fc1[gpu0], fc2_weight[gpu0])
fc2_ograd[gpu0] = LossGrad(fc2[gpu0], label[0:50])
fc1_ograd[gpu0], fc2_wgrad[gpu0] =
FullcBackward(fc2_ograd[gpu0] , fc2_weight[gpu0])
_, fc1_wgrad[gpu0] = FullcBackward(fc1_ograd[gpu0] , fc1_weight[gpu0])
# forward, backprop on GPU 1
fc1[gpu1] = FullcForward(data[gpu1], fc1_weight[gpu1])
fc2[gpu1] = FullcForward(fc1[gpu1], fc2_weight[gpu1])
fc2_ograd[gpu1] = LossGrad(fc2[gpu1], label[50:100])
fc1_ograd[gpu1], fc2_wgrad[gpu1] =
FullcBackward(fc2_ograd[gpu1] , fc2_weight[gpu1])
_, fc1_wgrad[gpu1] = FullcBackward(fc1_ograd[gpu1] , fc1_weight[gpu1])
# aggregate gradient and update
fc1_wgrad[cpu] = fc1_wgrad[gpu0] + fc1_wgrad[gpu1]
fc2_wgrad[cpu] = fc2_wgrad[gpu0] + fc2_wgrad[gpu1]
fc1_weight[cpu] -= lr * fc1_wgrad[cpu]
fc2_weight[cpu] -= lr * fc2_wgrad[cpu]
fc1_weight[cpu].copyto(fc1_weight[gpu0] , fc1_weight[gpu1])
fc2_weight[cpu].copyto(fc2_weight[gpu0] , fc2_weight[gpu1])
```


In this program, the data 0 to 50 is copied to GPU 0, and the data 50 to 100 is copied to GPU 1. The calculated gradients are aggregated in the CPU, which then performs a simple SGD update, and copies the updated weight back to each GPU. This is a common way to write a parallel program in a serial manner. The following dependency graph shows how it can be parallelized:

*Notes:*

- The gradient can be copied to the CPU as soon as we get the gradient of a layer.
- The weight can be copied back soon as the weight is updated.
- In the forward pass, we have a dependency on
`fc1_weight[cpu].copyto(fc1_weight[gpu0] , fc1_weight[gpu1])`

from the previous iteration. - There is a delay in computation between the last backward pass to layer k and the next forward call to layer k. We can synchronize the weight of layer k
*in parallel*with other computation during this delay.

This approach to optimization is used by multi-GPU deep learning libraries, such as CXXNet. The point is to overlap weight synchronization (communication) with computation. However, it’s not easy to do that, because the copy operation needs to be triggered as soon as the backward pass of the layer completes, which then triggers the reduction, updates, etc.

A dependency engine can schedule these operations and perform multi-threading and dependency tracking.

## Designing a Generic Dependency Engine

We hope that you’re convinced that a dependency engine is useful for scaling deep learning programs to multiple devices. Now let’s discuss how we can design and implement a generic interface for a dependency engine. This solution isn’t the only possible design for a dependency engine. It’s an example that we think is useful in most cases.

Our goal is to create a dependency engine that is *generic* and *lightweight*.
Ideally, we’d like the engine that easily plugs into existing deep learning code,
and that can scale up to multiple machines with minor modifications.
To do that, we need to focus only on dependency tracking,
not on assumptions about what users can or can’t do.

Here’s a summary of goals for the engine:

- The engine should not be aware of what operations it performs, so that users can perform any operations they define.
- It should not be restricted in what type of objects it can schedule.
- We should be able to schedule dependencies on GPU and CPU memory.
- We should be able to track dependencies on the random number generator, etc.

- The engine should not allocate resources. It should only track dependencies. Users can allocate their own memory, PRNG, etc.

The following Python snippet provides an engine interface that might help us reach our goal. Note that a real implementation will be closer to the metal, typically in C++.

```
class DepEngine(object):
def new_variable():
"""Return a new variable tag
Returns
-------
vtag : Variable Tag
The token of the engine to represent dependencies.
"""
pass
def push(exec_func, read_vars, mutate_vars):
"""Push the operation to the engine.
Parameters
----------
exec_func : callable
The real operation to be performed.
read_vars : list of Variable Tags
The list of variables this operation will read from.
mutate_vars : list of Variable Tags
The list of variables this operation will mutate.
"""
pass
```


Because we can’t make assumptions about what objects we are scheduling, we ask the user to allocate a
*virtual tag* that is associated with each object to represent what we need to schedule.
So, at the beginning, the user can allocate the variable tag,
and attach it to each of the objects that we want to schedule.

The user then calls `push`

to tell the engine about the function to execute.
The user also needs to specify the dependencies of the operation,
using `read_vars`

and `write_vars`

:

`read_vars`

are variable tags for objects that the operation will*read from*, without changing their internal state.`mutate_vars`

are variable tags for objects whose internal states the operation will mutate.

The preceding figure shows how to push operation `B = A + 1`

to the dependency engine. `B.data`

and
`A.data`

are the allocated space. Note that the engine is *only aware of variable tags*.
Any execution function can be processed.
This interface is generic for the operations and resources we want to schedule.

For fun, let’s look at how the engine internals work with the tags by considering the following code snippet:

```
B = A + 1
C = A + 2
A = C * 2
D = A + 3
```


The first line reads variable `A`

and mutates variable `B`

. The second line reads variable `A`

and mutates variable `C`

. And so on.

The engine maintains a queue for each variable, as the following animation shows for each of the four lines. Green blocks represents a read action, while red blocks represent mutations.

Upon building this queue, the engine sees that the first two green blocks at the beginning of `A`

’s queue could actually be run in parallel because they are both read actions and won’t conflict with each other. The following graph illustrates this point.

One cool thing about all this scheduling is that it’s not confined to numerical calculations. Because everything that is scheduled is only a tag, the engine could schedule everything!

The following figure gives a complete push sequence of the programs we mentioned in previous sections.

### Porting Existing Code to the Dependency Engine

Because the generic interface doesn’t control things like memory allocation and which operation to execute, most existing code can be scheduled by the dependency engine in two steps:

- Allocate the variable tags associated with resources like memory blob, PRNGS.
- Call
`push`

with the execution function as the original code to execute, and put the variable tags of corresponding resources correctly in`read_vars`

and`mutate_vars`

.

## Implementing the Generic Dependency Engine

We have described the generic engine interface and how it can be used to schedule various operations. In this section, we provide a high-level discussion of how to implement such an engine.

The general idea is as follows:

- Use a queue to track all of the pending dependencies on each variable tag.
- Use a counter on each operation to track how many dependencies are yet to be fulfilled.
- When operations are completed, update the state of the queue and dependency counters to schedule new operations.

The following figure illustrates the scheduling algorithm and might give you a better sense of what is going on in the engine.

Below, we show another example involving random number generators.

As you can see, the purpose of the algorithm is to update pending queues of operations and to make the right state transition when an operation has completed. More care should be taken to make sure the state transitions are done in a way that’s safe for threads.

### Separate Dependency Tracking with Running Policy

If you’re reading carefully, you might have noticed that the preceding section shows only the algorithm for deciding when an operation can be executed. We didn’t show how to actually run an operation. In practice, there can be many different policies. For example, we can either use a global thread-pool to run all operations, or use a specific thread to run operations on each device.

This running policy is usually independent of dependency tracking, and can be separated out as either an independent module or a virtual interface of base-dependency tracking modules. Developing an elegant runtime policy that is fair to all operations and schedules is an interesting systems problem itself.

## Discussion

The design that we discussed in this article isn’t the only solution to the dependency tracking problem. It’s just one example of how we might approach this. To be sure, some of these design choices are debatable. We’ll discuss some of them in this section.

### Dynamic vs. Static

The dependency engine interface discussed in this topic is somewhat dynamic in the sense that the user can push operations one by one, instead of declaring the entire dependency graph (static). Dynamic scheduling can require more overhead than static declarations, in terms of data structure. However, it also enables more flexibility, such as supporting auto parallelism for imperative programs or a mixture of imperative and symbolic programs. You can also add some level of predeclared operations to the interface to enable data structure reuse.

### Mutation vs. Immutable

The generic engine interface presented in this page supports explicit scheduling for mutation. In a typical data flow engine, the data are usually immutable. Working with immutable data has a lot of benefits. For example, immutable data is generally more suitable for parallelization, and facilitates better fault tolerance in a distributed setting (by way of re-computation).

However, immutability presents several challenges:

- It’s harder to schedule resource contention problems, as arise when dealing with random numbers and deletion.
- The engine usually needs to manage resources (memory, random number) to avoid conflicts. It’s harder to plug in user-allocated space, etc.
- Preallocated static memory isn’t available, again because the usual pattern is to write to a preallocated layer space, which is not supported if data is immutable.

Allowing mutation mitigates these issues.

## Source Code of the Generic Dependency Engine

[MXNet](https://github.com/apache/mxnet) provides an implementation
of the generic dependency engine described in this page.
We welcome your contributions.