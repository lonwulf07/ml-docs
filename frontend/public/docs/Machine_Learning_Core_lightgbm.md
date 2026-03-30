# Lightgbm Documentation
> Scraped on: 2026-03-30 | Root Source: [https://lightgbm.readthedocs.io/en/latest/](https://lightgbm.readthedocs.io/en/latest/)



---

## Source: https://lightgbm.readthedocs.io/en/latest/

# Welcome to LightGBM’s documentation![](#welcome-to-lightgbm-s-documentation)

**LightGBM** is a gradient boosting framework that uses tree based learning algorithms. It is designed to be distributed and efficient with the following advantages:

Faster training speed and higher efficiency.

Lower memory usage.

Better accuracy.

Support of parallel, distributed, and GPU learning.

Capable of handling large-scale data.


For more details, please refer to [Features](./Features.html).

---

## Source: https://lightgbm.readthedocs.io/en/latest/Installation-Guide.html

# Installation Guide[](#installation-guide)

## Versioning[](#versioning)

LightGBM releases use a 3-part version number, with this format:

```
{major}.{minor}.{patch}
```

This version follows a scheme called Intended Effort Versioning (“Effver” for short). Changes to a component of the version indicate how much effort it will likely take to update code using a previous version.

`major`

= updating will require significant effort`minor`

= some effort`patch`

= no or very little effort

This means that **new minor versions can contain breaking changes**, but these are typically
small or limited to less-frequently-used parts of the project.

When built from source on an unreleased commit, this version takes the following form:

```
{major}.{minor}.{patch}.99
```

That `.99`

is added to ensure that a version built from an unreleased commit is considered “newer”
than all previous releases, and “older” than all future releases.

To download such artifacts, run the following from the root of this repository.

```
bash .ci/download-artifacts.sh ${COMMIT_ID}
```

Where COMMIT_ID is the full commit SHA pointing to a commit on `master`

.
The artifacts can then be found in the `release-artifacts/`

directory.

For more details on why LightGBM uses EffVer instead of other schemes like semantic versioning,
see [https://jacobtomlinson.dev/effver/](https://jacobtomlinson.dev/effver/).

## General Installation Notes[](#general-installation-notes)

All instructions below are aimed at compiling the 64-bit version of LightGBM. It is worth compiling the 32-bit version only in very rare special cases involving environmental limitations. The 32-bit version is slow and untested, so use it at your own risk and don’t forget to adjust some of the commands below when installing.

By default, instructions below will use **VS Build Tools** or **make** tool to compile the code.
It it possible to use [Ninja](https://ninja-build.org) tool instead of make on all platforms, but VS Build Tools cannot be replaced with Ninja.
You can add `-G Ninja`

to CMake flags to use Ninja.

By default, instructions below will produce a shared library file and an executable file with command-line interface.
You can add `-DBUILD_CLI=OFF`

to CMake flags to disable the executable compilation.

If you need to build a static library instead of a shared one, you can add `-DBUILD_STATIC_LIB=ON`

to CMake flags.

By default, instructions below will place header files into system-wide folder.
You can add `-DINSTALL_HEADERS=OFF`

to CMake flags to disable headers installation.

By default, on macOS, CMake is looking into Homebrew standard folders for finding dependencies (e.g. OpenMP).
You can add `-DUSE_HOMEBREW_FALLBACK=OFF`

to CMake flags to disable this behaviour.

Users who want to perform benchmarking can make LightGBM output time costs for different internal routines by adding `-DUSE_TIMETAG=ON`

to CMake flags.

It is possible to build LightGBM in debug mode.
In this mode all compiler optimizations are disabled and LightGBM performs more checks internally.
To enable debug mode you can add `-DUSE_DEBUG=ON`

to CMake flags or choose `Debug_*`

configuration (e.g. `Debug_DLL`

, `Debug_mpi`

) in Visual Studio depending on how you are building LightGBM.

In addition to the debug mode, LightGBM can be built with compiler sanitizers.
To enable them add `-DUSE_SANITIZER=ON -DENABLED_SANITIZERS="address;leak;undefined"`

to CMake flags.
These values refer to the following supported sanitizers:

`address`

- AddressSanitizer (ASan);`leak`

- LeakSanitizer (LSan);`undefined`

- UndefinedBehaviorSanitizer (UBSan);`thread`

- ThreadSanitizer (TSan).

Please note, that ThreadSanitizer cannot be used together with other sanitizers.
For more info and additional sanitizers’ parameters please refer to the [following docs](https://github.com/google/sanitizers/wiki).
It is very useful to build [C++ unit tests](#build-c-unit-tests) with sanitizers.

## Windows[](#windows)

On Windows, LightGBM can be built using

**Visual Studio**;**CMake**and**VS Build Tools**;**CMake**and**MinGW**.

### Visual Studio (or VS Build Tools)[](#visual-studio-or-vs-build-tools)

#### With GUI[](#with-gui)

Install

[Visual Studio](https://visualstudio.microsoft.com/downloads/).Navigate to one of the releases at

[https://github.com/lightgbm-org/LightGBM/releases](https://github.com/lightgbm-org/LightGBM/releases), download`LightGBM-complete_source_code_zip.zip`

, and unzip it.Go to

`LightGBM-complete_source_code_zip/windows`

folder.Open

`LightGBM.sln`

file with**Visual Studio**, choose`Release`

configuration if you need executable file or`DLL`

configuration if you need shared library and click`Build`

->`Build Solution (Ctrl+Shift+B)`

.If you have errors about

**Platform Toolset**, go to`Project`

->`Properties`

->`Configuration Properties`

->`General`

and select the toolset installed on your machine.If you have errors about

**Windows SDK Version**, go to`Project`

->`Properties`

->`Configuration Properties`

->`General`

and select the SDK installed on your machine.

The `.exe`

file will be in `LightGBM-complete_source_code_zip/windows/x64/Release`

folder.
The `.dll`

file will be in `LightGBM-complete_source_code_zip/windows/x64/DLL`

folder.

#### From Command Line[](#from-command-line)

Install

[Git for Windows](https://git-scm.com/download/win),[CMake](https://cmake.org/)and[VS Build Tools](https://visualstudio.microsoft.com/downloads/)(**VS Build Tools**is not needed if**Visual Studio**is already installed).Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -A x64 cmake --build build --target ALL_BUILD --config Release


The `.exe`

and `.dll`

files will be in `LightGBM/Release`

folder.

### MinGW-w64[](#mingw-w64)

Install

[Git for Windows](https://git-scm.com/download/win),[CMake](https://cmake.org/)and[MinGW-w64](https://www.mingw-w64.org/downloads/).Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -G "MinGW Makefiles" cmake --build build -j4


The `.exe`

and `.dll`

files will be in `LightGBM/`

folder.

**Note**: You may need to run the `cmake -B build -S . -G "MinGW Makefiles"`

one more time or add `-DCMAKE_SH=CMAKE_SH-NOTFOUND`

to CMake flags if you encounter the `sh.exe was found in your PATH`

error.

It is recommended that you use **Visual Studio** since it has better multithreading efficiency in **Windows** for many-core systems
(see [Question 4](./FAQ.html#i-am-using-windows-should-i-use-visual-studio-or-mingw-for-compiling-lightgbm) and [Question 8](./FAQ.html#cpu-usage-is-low-like-10-in-windows-when-using-lightgbm-on-very-large-datasets-with-many-core-systems)).

## Linux[](#linux)

On Linux, LightGBM can be built using

**CMake**and**gcc**;**CMake**and**Clang**.

After compilation the executable and `.so`

files will be in `LightGBM/`

folder.

### gcc[](#gcc)

Install

[CMake](https://cmake.org/)and**gcc**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . cmake --build build -j4


### Clang[](#clang)

Install

[CMake](https://cmake.org/),**Clang**and**OpenMP**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=clang++-14 CC=clang-14 # replace "14" with version of Clang installed on your machine cmake -B build -S . cmake --build build -j4


## macOS[](#macos)

On macOS, LightGBM can be installed using

**Homebrew**;**MacPorts**;

or can be built using

**CMake**and**Apple Clang**;**CMake**and**gcc**.

### Install Using `Homebrew`

[](#install-using-homebrew)

```
brew install lightgbm
```

Refer to [https://formulae.brew.sh/formula/lightgbm](https://formulae.brew.sh/formula/lightgbm) for more details.

### Install Using `MacPorts`

[](#install-using-macports)

```
sudo port install LightGBM
```

Refer to [https://ports.macports.org/port/LightGBM](https://ports.macports.org/port/LightGBM) for more details.

**Note**: Port for LightGBM is not maintained by LightGBM’s maintainers.

### Build from GitHub[](#build-from-github)

After compilation the executable and `.dylib`

files will be in `LightGBM/`

folder.

#### Apple Clang[](#apple-clang)

Install

[CMake](https://cmake.org/)and**OpenMP**:brew install cmake libomp

Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . cmake --build build -j4


#### gcc[](#id1)

Install

[CMake](https://cmake.org/)and**gcc**:brew install cmake gcc

Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=g++-7 CC=gcc-7 # replace "7" with version of gcc installed on your machine cmake -B build -S . cmake --build build -j4


## Docker[](#docker)

Refer to [Docker folder](https://github.com/lightgbm-org/LightGBM/tree/master/docker).

## Build Threadless Version (not Recommended)[](#build-threadless-version-not-recommended)

The default build version of LightGBM is based on OpenMP.
You can build LightGBM without OpenMP support but it is **strongly not recommended**.

### Windows[](#id2)

On Windows, a version of LightGBM without OpenMP support can be built using

**Visual Studio**;**CMake**and**VS Build Tools**;**CMake**and**MinGW**.

#### Visual Studio (or VS Build Tools)[](#id3)

##### With GUI[](#id4)

Install

[Visual Studio](https://visualstudio.microsoft.com/downloads/).Navigate to one of the releases at

[https://github.com/lightgbm-org/LightGBM/releases](https://github.com/lightgbm-org/LightGBM/releases), download`LightGBM-complete_source_code_zip.zip`

, and unzip it.Go to

`LightGBM-complete_source_code_zip/windows`

folder.Open

`LightGBM.sln`

file with**Visual Studio**, choose`Release`

configuration if you need executable file or`DLL`

configuration if you need shared library.Go to

`Project`

->`Properties`

->`Configuration Properties`

->`C/C++`

->`Language`

and change the`OpenMP Support`

property to`No (/openmp-)`

.Get back to the project’s main screen and click

`Build`

->`Build Solution (Ctrl+Shift+B)`

.If you have errors about

**Platform Toolset**, go to`Project`

->`Properties`

->`Configuration Properties`

->`General`

and select the toolset installed on your machine.If you have errors about

**Windows SDK Version**, go to`Project`

->`Properties`

->`Configuration Properties`

->`General`

and select the SDK installed on your machine.

The `.exe`

file will be in `LightGBM-complete_source_code_zip/windows/x64/Release`

folder.
The `.dll`

file will be in `LightGBM-complete_source_code_zip/windows/x64/DLL`

folder.

##### From Command Line[](#id5)

Install

[Git for Windows](https://git-scm.com/download/win),[CMake](https://cmake.org/)and[VS Build Tools](https://visualstudio.microsoft.com/downloads/)(**VS Build Tools**is not needed if**Visual Studio**is already installed).Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -A x64 -DUSE_OPENMP=OFF cmake --build build --target ALL_BUILD --config Release


The `.exe`

and `.dll`

files will be in `LightGBM/Release`

folder.

#### MinGW-w64[](#id6)

Install

[Git for Windows](https://git-scm.com/download/win),[CMake](https://cmake.org/)and[MinGW-w64](https://www.mingw-w64.org/downloads/).Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -G "MinGW Makefiles" -DUSE_OPENMP=OFF cmake --build build -j4


The `.exe`

and `.dll`

files will be in `LightGBM/`

folder.

**Note**: You may need to run the `cmake -B build -S . -G "MinGW Makefiles" -DUSE_OPENMP=OFF`

one more time or add `-DCMAKE_SH=CMAKE_SH-NOTFOUND`

to CMake flags if you encounter the `sh.exe was found in your PATH`

error.

### Linux[](#id7)

On Linux, a version of LightGBM without OpenMP support can be built using

**CMake**and**gcc**;**CMake**and**Clang**.

After compilation the executable and `.so`

files will be in `LightGBM/`

folder.

#### gcc[](#id8)

Install

[CMake](https://cmake.org/)and**gcc**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -DUSE_OPENMP=OFF cmake --build build -j4


#### Clang[](#id9)

Install

[CMake](https://cmake.org/)and**Clang**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=clang++-14 CC=clang-14 # replace "14" with version of Clang installed on your machine cmake -B build -S . -DUSE_OPENMP=OFF cmake --build build -j4


### macOS[](#id10)

On macOS, a version of LightGBM without OpenMP support can be built using

**CMake**and**Apple Clang**;**CMake**and**gcc**.

After compilation the executable and `.dylib`

files will be in `LightGBM/`

folder.

#### Apple Clang[](#id11)

Install

[CMake](https://cmake.org/):brew install cmake

Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -DUSE_OPENMP=OFF cmake --build build -j4


#### gcc[](#id12)

Install

[CMake](https://cmake.org/)and**gcc**:brew install cmake gcc

Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=g++-7 CC=gcc-7 # replace "7" with version of gcc installed on your machine cmake -B build -S . -DUSE_OPENMP=OFF cmake --build build -j4


## Build MPI Version[](#build-mpi-version)

The default build version of LightGBM is based on socket. LightGBM also supports MPI.
[MPI](https://en.wikipedia.org/wiki/Message_Passing_Interface) is a high performance communication approach with [RDMA](https://en.wikipedia.org/wiki/Remote_direct_memory_access) support.

If you need to run a distributed learning application with high performance communication, you can build the LightGBM with MPI support.

### Windows[](#id13)

On Windows, an MPI version of LightGBM can be built using

**MS MPI**and**Visual Studio**;**MS MPI**,**CMake**and**VS Build Tools**.

**Note**: Building MPI version by **MinGW** is not supported due to the miss of MPI library in it.

#### With GUI[](#id14)

You need to install

[MS MPI](https://learn.microsoft.com/en-us/message-passing-interface/microsoft-mpi-release-notes)first. Both`msmpisdk.msi`

and`msmpisetup.exe`

are needed.Install

[Visual Studio](https://visualstudio.microsoft.com/downloads/).Navigate to one of the releases at

[https://github.com/lightgbm-org/LightGBM/releases](https://github.com/lightgbm-org/LightGBM/releases), download`LightGBM-complete_source_code_zip.zip`

, and unzip it.Go to

`LightGBM-complete_source_code_zip/windows`

folder.Open

`LightGBM.sln`

file with**Visual Studio**, choose`Release_mpi`

configuration and click`Build`

->`Build Solution (Ctrl+Shift+B)`

.If you have errors about

**Platform Toolset**, go to`Project`

->`Properties`

->`Configuration Properties`

->`General`

and select the toolset installed on your machine.If you have errors about

**Windows SDK Version**, go to`Project`

->`Properties`

->`Configuration Properties`

->`General`

and select the SDK installed on your machine.

The `.exe`

file will be in `LightGBM-complete_source_code_zip/windows/x64/Release_mpi`

folder.

#### From Command Line[](#id15)

You need to install

[MS MPI](https://learn.microsoft.com/en-us/message-passing-interface/microsoft-mpi-release-notes)first. Both`msmpisdk.msi`

and`msmpisetup.exe`

are needed.Install

[Git for Windows](https://git-scm.com/download/win),[CMake](https://cmake.org/)and[VS Build Tools](https://visualstudio.microsoft.com/downloads/)(**VS Build Tools**is not needed if**Visual Studio**is already installed).Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -A x64 -DUSE_MPI=ON cmake --build build --target ALL_BUILD --config Release


The `.exe`

and `.dll`

files will be in `LightGBM/Release`

folder.

### Linux[](#id16)

On Linux, an MPI version of LightGBM can be built using

**CMake**,**gcc**and**Open MPI**;**CMake**,**Clang**and**Open MPI**.

After compilation the executable and `.so`

files will be in `LightGBM/`

folder.

#### gcc[](#id17)

#### Clang[](#id18)

### macOS[](#id19)

On macOS, an MPI version of LightGBM can be built using

**CMake**,**Open MPI**and**Apple Clang**;**CMake**,**Open MPI**and**gcc**.

After compilation the executable and `.dylib`

files will be in `LightGBM/`

folder.

#### Apple Clang[](#id20)

#### gcc[](#id21)

Install

[CMake](https://cmake.org/),[Open MPI](https://www.open-mpi.org/)and**gcc**:brew install cmake open-mpi gcc

Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=g++-7 CC=gcc-7 # replace "7" with version of gcc installed on your machine cmake -B build -S . -DUSE_MPI=ON cmake --build build -j4


## Build GPU Version[](#build-gpu-version)

### Windows[](#id22)

On Windows, a GPU version of LightGBM (`device_type=gpu`

) can be built using

**OpenCL**,**Boost**,**CMake**and**VS Build Tools**;**OpenCL**,**Boost**,**CMake**and**MinGW**.

If you use **MinGW**, the build procedure is similar to the build on Linux.

Following procedure is for the **MSVC** (Microsoft Visual C++) build.

Install

[Git for Windows](https://git-scm.com/download/win),[CMake](https://cmake.org/)and[VS Build Tools](https://visualstudio.microsoft.com/downloads/)(**VS Build Tools**is not needed if**Visual Studio**is installed).Install

**OpenCL**for Windows. The installation depends on the brand (NVIDIA, AMD, Intel) of your GPU card.For running on Intel, get

[Intel SDK for OpenCL](https://software.intel.com/en-us/articles/opencl-drivers).For running on AMD, get AMD APP SDK.

For running on NVIDIA, get

[CUDA Toolkit](https://developer.nvidia.com/cuda-downloads).

Further reading and correspondence table:

[GPU SDK Correspondence and Device Targeting Table](./GPU-Targets.html).Install

[Boost Binaries](https://sourceforge.net/projects/boost/files/boost-binaries/).**Note**: Match your Visual C++ version:Visual Studio 2017 ->

`msvc-14.1-64.exe`

,Visual Studio 2019 ->

`msvc-14.2-64.exe`

,Visual Studio 2022 ->

`msvc-14.3-64.exe`

.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -A x64 -DUSE_GPU=ON -DBOOST_ROOT=C:/local/boost_1_63_0 -DBOOST_LIBRARYDIR=C:/local/boost_1_63_0/lib64-msvc-14.3 # if you have installed NVIDIA CUDA to a customized location, you should specify paths to OpenCL headers and library like the following: # cmake -B build -S . -A x64 -DUSE_GPU=ON -DBOOST_ROOT=C:/local/boost_1_63_0 -DBOOST_LIBRARYDIR=C:/local/boost_1_63_0/lib64-msvc-14.3 -DOpenCL_LIBRARY="C:/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v10.0/lib/x64/OpenCL.lib" -DOpenCL_INCLUDE_DIR="C:/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v10.0/include" cmake --build build --target ALL_BUILD --config Release

**Note**:`C:/local/boost_1_63_0`

and`C:/local/boost_1_63_0/lib64-msvc-14.3`

are locations of your**Boost**binaries (assuming you’ve downloaded 1.63.0 version for Visual Studio 2022).

The `.exe`

and `.dll`

files will be in `LightGBM/Release`

folder.

### Linux[](#id23)

On Linux, a GPU version of LightGBM (`device_type=gpu`

) can be built using

**CMake**,**OpenCL**,**Boost**and**gcc**;**CMake**,**OpenCL**,**Boost**and**Clang**.

**OpenCL** headers and libraries are usually provided by GPU manufacture.
The generic OpenCL ICD packages (for example, Debian packages `ocl-icd-libopencl1`

, `ocl-icd-opencl-dev`

, `pocl-opencl-icd`

) can also be used.

Required **Boost** libraries (Boost.Align, Boost.System, Boost.Filesystem, Boost.Chrono) should be provided by the following Debian packages: `libboost-dev`

, `libboost-system-dev`

, `libboost-filesystem-dev`

, `libboost-chrono-dev`

.

After compilation the executable and `.so`

files will be in `LightGBM/`

folder.

#### gcc[](#id24)

Install

[CMake](https://cmake.org/),**gcc**,**OpenCL**and**Boost**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -DUSE_GPU=ON # if you have installed NVIDIA CUDA to a customized location, you should specify paths to OpenCL headers and library like the following: # cmake -B build -S . -DUSE_GPU=ON -DOpenCL_LIBRARY=/usr/local/cuda/lib64/libOpenCL.so -DOpenCL_INCLUDE_DIR=/usr/local/cuda/include/ cmake --build build -j4


#### Clang[](#id25)

Install

[CMake](https://cmake.org/),**Clang**,**OpenMP**,**OpenCL**and**Boost**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=clang++-14 CC=clang-14 # replace "14" with version of Clang installed on your machine cmake -B build -S . -DUSE_GPU=ON # if you have installed NVIDIA CUDA to a customized location, you should specify paths to OpenCL headers and library like the following: # cmake -B build -S . -DUSE_GPU=ON -DOpenCL_LIBRARY=/usr/local/cuda/lib64/libOpenCL.so -DOpenCL_INCLUDE_DIR=/usr/local/cuda/include/ cmake --build build -j4


### macOS[](#id26)

The GPU version is not supported on macOS.

### Docker[](#id27)

Refer to [GPU Docker folder](https://github.com/lightgbm-org/LightGBM/tree/master/docker/gpu).

## Build CUDA Version[](#build-cuda-version)

The [original GPU version](#build-gpu-version) of LightGBM (`device_type=gpu`

) is based on OpenCL, and only computes histograms on GPUs, with other parts of training in CPUs.

The CUDA-based version (`device_type=cuda`

) is a separate implementation that runs significantly faster by putting all the training process on GPUs. It also supports multi-GPU, and multi-node multi-GPU training.
Use this version in Linux environments with an NVIDIA GPU with compute capability 6.0 or higher.

### Windows[](#id28)

The CUDA version is not supported on Windows.
Use the [GPU version](#build-gpu-version) (`device_type=gpu`

) for GPU acceleration on Windows.

### Linux[](#id29)

On Linux, a CUDA version of LightGBM can be built using

**CMake**,**gcc**and**CUDA**;**CMake**,**Clang**and**CUDA**.

Please refer to [this detailed guide](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html) for **CUDA** libraries installation.

After compilation the executable and `.so`

files will be in `LightGBM/`

folder.

#### gcc[](#id30)

Install

[CMake](https://cmake.org/),**gcc**and**CUDA**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -DUSE_CUDA=ON cmake --build build -j4


#### Clang[](#id31)

Install

[CMake](https://cmake.org/),**Clang**,**OpenMP**and**CUDA**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=clang++-14 CC=clang-14 # replace "14" with version of Clang installed on your machine cmake -B build -S . -DUSE_CUDA=ON cmake --build build -j4


### macOS[](#id32)

The CUDA version is not supported on macOS.

## Build ROCm Version[](#build-rocm-version)

The [original GPU version](#build-gpu-version) of LightGBM (`device_type=gpu`

) is based on OpenCL.

The ROCm-based version (`device_type=cuda`

) is a separate implementation. Yes, the ROCm version reuses the `device_type=cuda`

as a convenience for users. Use this version in Linux environments with an AMD GPU.

### Windows[](#id33)

The ROCm version is not supported on Windows.
Use the [GPU version](#build-gpu-version) (`device_type=gpu`

) for GPU acceleration on Windows.

### Linux[](#id34)

On Linux, a ROCm version of LightGBM can be built using

**CMake**,**gcc**and**ROCm**;**CMake**,**Clang**and**ROCm**.

Please refer to [the ROCm docs](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/) for **ROCm** libraries installation.

After compilation the executable and `.so`

files will be in `LightGBM/`

folder.

#### gcc[](#id35)

Install

[CMake](https://cmake.org/),**gcc**and**ROCm**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -DUSE_ROCM=ON cmake --build build -j4


#### Clang[](#id36)

Install

[CMake](https://cmake.org/),**Clang**,**OpenMP**and**ROCm**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=clang++-14 CC=clang-14 # replace "14" with version of Clang installed on your machine cmake -B build -S . -DUSE_ROCM=ON cmake --build build -j4


### macOS[](#id37)

The ROCm version is not supported on macOS.

## Build Java Wrapper[](#build-java-wrapper)

Using the following instructions you can generate a JAR file containing the LightGBM [C API](./Development-Guide.html#c-api) wrapped by **SWIG**.

After compilation the `.jar`

file will be in `LightGBM/build`

folder.

### Windows[](#id38)

On Windows, a Java wrapper of LightGBM can be built using

**Java**,**SWIG**,**CMake**and**VS Build Tools**;**Java**,**SWIG**,**CMake**and**MinGW**.

#### VS Build Tools[](#vs-build-tools)

Install

[Git for Windows](https://git-scm.com/download/win),[CMake](https://cmake.org/)and[VS Build Tools](https://visualstudio.microsoft.com/downloads/)(**VS Build Tools**is not needed if**Visual Studio**is already installed).Install

[SWIG](https://www.swig.org/download.html)and**Java**(also make sure that`JAVA_HOME`

environment variable is set properly).Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -A x64 -DUSE_SWIG=ON cmake --build build --target ALL_BUILD --config Release


#### MinGW-w64[](#id39)

Install

[Git for Windows](https://git-scm.com/download/win),[CMake](https://cmake.org/)and[MinGW-w64](https://www.mingw-w64.org/downloads/).Install

[SWIG](https://www.swig.org/download.html)and**Java**(also make sure that`JAVA_HOME`

environment variable is set properly).Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -G "MinGW Makefiles" -DUSE_SWIG=ON cmake --build build -j4


**Note**: You may need to run the `cmake -B build -S . -G "MinGW Makefiles" -DUSE_SWIG=ON`

one more time or add `-DCMAKE_SH=CMAKE_SH-NOTFOUND`

to CMake flags if you encounter the `sh.exe was found in your PATH`

error.

It is recommended to use **VS Build Tools (Visual Studio)** since it has better multithreading efficiency in **Windows** for many-core systems
(see [Question 4](./FAQ.html#i-am-using-windows-should-i-use-visual-studio-or-mingw-for-compiling-lightgbm) and [Question 8](./FAQ.html#cpu-usage-is-low-like-10-in-windows-when-using-lightgbm-on-very-large-datasets-with-many-core-systems)).

### Linux[](#id40)

On Linux, a Java wrapper of LightGBM can be built using

**CMake**,**gcc**,**Java**and**SWIG**;**CMake**,**Clang**,**Java**and**SWIG**.

#### gcc[](#id41)

#### Clang[](#id42)

Install

[CMake](https://cmake.org/),**Clang**,**OpenMP**,[SWIG](https://www.swig.org/download.html)and**Java**(also make sure that`JAVA_HOME`

environment variable is set properly).Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=clang++-14 CC=clang-14 # replace "14" with version of Clang installed on your machine cmake -B build -S . -DUSE_SWIG=ON cmake --build build -j4


### macOS[](#id43)

On macOS, a Java wrapper of LightGBM can be built using

**CMake**,**Java**,**SWIG**and**Apple Clang**;**CMake**,**Java**,**SWIG**and**gcc**.

#### Apple Clang[](#id44)

Install

[CMake](https://cmake.org/),**Java**(also make sure that`JAVA_HOME`

environment variable is set properly),[SWIG](https://www.swig.org/download.html)and**OpenMP**:brew install cmake openjdk swig libomp export JAVA_HOME="$(brew --prefix openjdk)/libexec/openjdk.jdk/Contents/Home/"

Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -DUSE_SWIG=ON cmake --build build -j4


#### gcc[](#id45)

Install

[CMake](https://cmake.org/),**Java**(also make sure that`JAVA_HOME`

environment variable is set properly),[SWIG](https://www.swig.org/download.html)and**gcc**:brew install cmake openjdk swig gcc export JAVA_HOME="$(brew --prefix openjdk)/libexec/openjdk.jdk/Contents/Home/"

Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=g++-7 CC=gcc-7 # replace "7" with version of gcc installed on your machine cmake -B build -S . -DUSE_SWIG=ON cmake --build build -j4


## Build Python-package[](#build-python-package)

Refer to [Python-package folder](https://github.com/lightgbm-org/LightGBM/tree/master/python-package).

## Build R-package[](#build-r-package)

Refer to [R-package folder](https://github.com/lightgbm-org/LightGBM/tree/master/R-package).

## Build C++ Unit Tests[](#build-c-unit-tests)

### Windows[](#id46)

On Windows, C++ unit tests of LightGBM can be built using

**CMake**and**VS Build Tools**;**CMake**and**MinGW**.

#### VS Build Tools[](#id47)

Install

[Git for Windows](https://git-scm.com/download/win),[CMake](https://cmake.org/)and[VS Build Tools](https://visualstudio.microsoft.com/downloads/)(**VS Build Tools**is not needed if**Visual Studio**is already installed).Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -A x64 -DBUILD_CPP_TEST=ON cmake --build build --target testlightgbm --config Debug


The `.exe`

file will be in `LightGBM/Debug`

folder.

#### MinGW-w64[](#id48)

Install

[Git for Windows](https://git-scm.com/download/win),[CMake](https://cmake.org/)and[MinGW-w64](https://www.mingw-w64.org/downloads/).Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -G "MinGW Makefiles" -DBUILD_CPP_TEST=ON cmake --build build --target testlightgbm -j4


The `.exe`

file will be in `LightGBM/`

folder.

**Note**: You may need to run the `cmake -B build -S . -G "MinGW Makefiles" -DBUILD_CPP_TEST=ON`

one more time or add `-DCMAKE_SH=CMAKE_SH-NOTFOUND`

to CMake flags if you encounter the `sh.exe was found in your PATH`

error.

### Linux[](#id49)

On Linux, a C++ unit tests of LightGBM can be built using

**CMake**and**gcc**;**CMake**and**Clang**.

After compilation the executable file will be in `LightGBM/`

folder.

#### gcc[](#id50)

Install

[CMake](https://cmake.org/)and**gcc**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -DBUILD_CPP_TEST=ON cmake --build build --target testlightgbm -j4


#### Clang[](#id51)

Install

[CMake](https://cmake.org/),**Clang**and**OpenMP**.Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=clang++-14 CC=clang-14 # replace "14" with version of Clang installed on your machine cmake -B build -S . -DBUILD_CPP_TEST=ON cmake --build build --target testlightgbm -j4


### macOS[](#id52)

On macOS, a C++ unit tests of LightGBM can be built using

**CMake**and**Apple Clang**;**CMake**and**gcc**.

After compilation the executable file will be in `LightGBM/`

folder.

#### Apple Clang[](#id53)

Install

[CMake](https://cmake.org/)and**OpenMP**:brew install cmake libomp

Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM cmake -B build -S . -DBUILD_CPP_TEST=ON cmake --build build --target testlightgbm -j4


#### gcc[](#id54)

Install

[CMake](https://cmake.org/)and**gcc**:brew install cmake gcc

Run the following commands:

git clone --recursive https://github.com/lightgbm-org/LightGBM cd LightGBM export CXX=g++-7 CC=gcc-7 # replace "7" with version of gcc installed on your machine cmake -B build -S . -DBUILD_CPP_TEST=ON cmake --build build --target testlightgbm -j4

---

## Source: https://lightgbm.readthedocs.io/en/latest/Quick-Start.html

# Quick Start[](#quick-start)

This is a quick start guide for LightGBM CLI version.

Follow the [Installation Guide](./Installation-Guide.html) to install LightGBM first.

**List of other helpful links**

## Training Data Format[](#training-data-format)

LightGBM supports input data files with [CSV](https://en.wikipedia.org/wiki/Comma-separated_values), [TSV](https://en.wikipedia.org/wiki/Tab-separated_values) and [LibSVM](https://www.csie.ntu.edu.tw/~cjlin/libsvm/) (zero-based) formats.

Files could be both with and without [headers](./Parameters.html#header).

[Label column](./Parameters.html#label_column) could be specified both by index and by name.

Some columns could be [ignored](./Parameters.html#ignore_column).

### Categorical Feature Support[](#categorical-feature-support)

LightGBM can use categorical features directly (without one-hot encoding).
The experiment on [Expo data](https://community.amstat.org/jointscsg-section/dataexpo/dataexpo2009) shows about 8x speed-up compared with one-hot encoding.

For the setting details, please refer to the `categorical_feature`

[parameter](./Parameters.html#categorical_feature).

### Weight and Query/Group Data[](#weight-and-query-group-data)

LightGBM also supports weighted training, it needs an additional [weight data](./Parameters.html#weight-data).
And it needs an additional [query data](./Parameters.html#query-data) for ranking task.

Also, [weight](./Parameters.html#weight_column) and [query](./Parameters.html#group_column) data could be specified as columns in training data in the same manner as label.

## Parameters Quick Look[](#parameters-quick-look)

The parameters format is `key1=value1 key2=value2 ...`

.

Parameters can be set both in config file and command line. If one parameter appears in both command line and config file, LightGBM will use the parameter from the command line.

The most important parameters which new users should take a look at are located into [Core Parameters](./Parameters.html#core-parameters)
and the top of [Learning Control Parameters](./Parameters.html#learning-control-parameters)
sections of the full detailed list of [LightGBM’s parameters](./Parameters.html).

## Run LightGBM[](#run-lightgbm)

```
lightgbm config=your_config_file other_args ...
```

Parameters can be set both in the config file and command line, and the parameters in command line have higher priority than in the config file.
For example, the following command line will keep `num_trees=10`

and ignore the same parameter in the config file.

```
lightgbm config=train.conf num_trees=10
```

---

## Source: https://lightgbm.readthedocs.io/en/latest/Python-Intro.html

# Python-package Introduction[](#python-package-introduction)

This document gives a basic walk-through of LightGBM Python-package.

**List of other helpful links**

## Install[](#install)

The preferred way to install LightGBM is via pip:

```
pip install lightgbm
```

Refer to [Python-package](https://github.com/lightgbm-org/LightGBM/tree/master/python-package) folder for the detailed installation guide.

To verify your installation, try to `import lightgbm`

in Python:

```
import lightgbm as lgb
```

## Data Interface[](#data-interface)

The LightGBM Python module can load data from:

LibSVM (zero-based) / TSV / CSV format text file

NumPy 2D array(s), pandas DataFrame, pyarrow Table, SciPy sparse matrix

LightGBM binary file

LightGBM

`Sequence`

object(s)

The data is stored in a `Dataset`

object.

Many of the examples in this page use functionality from `numpy`

. To run the examples, be sure to import `numpy`

in your session.

```
import numpy as np
```

**To load a LibSVM (zero-based) text file or a LightGBM binary file into Dataset:**

```
train_data = lgb.Dataset('train.svm.bin')
```

**To load a numpy array into Dataset:**

```
rng = np.random.default_rng()
data = rng.uniform(size=(500, 10)) # 500 entities, each contains 10 features
label = rng.integers(low=0, high=2, size=(500, )) # binary target
train_data = lgb.Dataset(data, label=label)
```

**To load a scipy.sparse.csr_matrix array into Dataset:**

```
import scipy
csr = scipy.sparse.csr_matrix((dat, (row, col)))
train_data = lgb.Dataset(csr)
```

**Load from Sequence objects:**

We can implement `Sequence`

interface to read binary files. The following example shows reading HDF5 file with `h5py`

.

```
import h5py
class HDFSequence(lgb.Sequence):
def __init__(self, hdf_dataset, batch_size):
self.data = hdf_dataset
self.batch_size = batch_size
def __getitem__(self, idx):
return self.data[idx]
def __len__(self):
return len(self.data)
f = h5py.File('train.hdf5', 'r')
train_data = lgb.Dataset(HDFSequence(f['X'], 8192), label=f['Y'][:])
```

Features of using `Sequence`

interface:

Data sampling uses random access, thus does not go through the whole dataset

Reading data in batch, thus saves memory when constructing

`Dataset`

objectSupports creating

`Dataset`

from multiple data files

Please refer to `Sequence`

[API doc](./Python-API.html#data-structure-api).

[dataset_from_multi_hdf5.py](https://github.com/lightgbm-org/LightGBM/blob/master/examples/python-guide/dataset_from_multi_hdf5.py) is a detailed example.

**Saving Dataset into a LightGBM binary file will make loading faster:**

```
train_data = lgb.Dataset('train.svm.txt')
train_data.save_binary('train.bin')
```

**Create validation data:**

```
validation_data = train_data.create_valid('validation.svm')
```

or

```
validation_data = lgb.Dataset('validation.svm', reference=train_data)
```

In LightGBM, the validation data should be aligned with training data.

**Specific feature names and categorical features:**

```
train_data = lgb.Dataset(data, label=label, feature_name=['c1', 'c2', 'c3'], categorical_feature=['c3'])
```

LightGBM can use categorical features as input directly. It doesn’t need to convert to one-hot encoding, and is much faster than one-hot encoding (about 8x speed-up).

**Note**: You should convert your categorical features to `int`

type before you construct `Dataset`

.

**Weights can be set when needed:**

```
rng = np.random.default_rng()
w = rng.uniform(size=(500, ))
train_data = lgb.Dataset(data, label=label, weight=w)
```

or

```
train_data = lgb.Dataset(data, label=label)
rng = np.random.default_rng()
w = rng.uniform(size=(500, ))
train_data.set_weight(w)
```

And you can use `Dataset.set_init_score()`

to set initial score, and `Dataset.set_group()`

to set group/query data for ranking tasks.

**Memory efficient usage:**

The `Dataset`

object in LightGBM is very memory-efficient, it only needs to save discrete bins.
However, Numpy/Array/Pandas object is memory expensive.
If you are concerned about your memory consumption, you can save memory by:

Set

`free_raw_data=True`

(default is`True`

) when constructing the`Dataset`

Explicitly set

`raw_data=None`

after the`Dataset`

has been constructedCall

`gc`


## Setting Parameters[](#setting-parameters)

LightGBM can use a dictionary to set [Parameters](./Parameters.html).
For instance:

Booster parameters:

param = {'num_leaves': 31, 'objective': 'binary'} param['metric'] = 'auc'

You can also specify multiple eval metrics:

param['metric'] = ['auc', 'binary_logloss']


## Training[](#training)

Training a model requires a parameter list and data set:

```
num_round = 10
bst = lgb.train(param, train_data, num_round, valid_sets=[validation_data])
```

After training, the model can be saved:

```
bst.save_model('model.txt')
```

The trained model can also be dumped to JSON format:

```
json_model = bst.dump_model()
```

A saved model can be loaded:

```
bst = lgb.Booster(model_file='model.txt') # init model
```

## CV[](#cv)

Training with 5-fold CV:

```
lgb.cv(param, train_data, num_round, nfold=5)
```

## Early Stopping[](#early-stopping)

If you have a validation set, you can use early stopping to find the optimal number of boosting rounds.
Early stopping requires at least one set in `valid_sets`

. If there is more than one, it will use all of them except the training data:

```
bst = lgb.train(param, train_data, num_round, valid_sets=valid_sets, callbacks=[lgb.early_stopping(stopping_rounds=5)])
bst.save_model('model.txt', num_iteration=bst.best_iteration)
```

The model will train until the validation score stops improving.
Validation score needs to improve at least every `stopping_rounds`

to continue training.

The index of iteration that has the best performance will be saved in the `best_iteration`

field if early stopping logic is enabled by setting `early_stopping`

callback.
Note that `train()`

will return a model from the best iteration.

This works with both metrics to minimize (L2, log loss, etc.) and to maximize (NDCG, AUC, etc.).
Note that if you specify more than one evaluation metric, all of them will be used for early stopping.
However, you can change this behavior and make LightGBM check only the first metric for early stopping by passing `first_metric_only=True`

in `early_stopping`

callback constructor.

## Prediction[](#prediction)

A model that has been trained or loaded can perform predictions on datasets:

```
# 7 entities, each contains 10 features
rng = np.random.default_rng()
data = rng.uniform(size=(7, 10))
ypred = bst.predict(data)
```

If early stopping is enabled during training, you can get predictions from the best iteration with `bst.best_iteration`

:

```
ypred = bst.predict(data, num_iteration=bst.best_iteration)
```

---

## Source: https://lightgbm.readthedocs.io/en/latest/Features.html

# Features[](#features)

This is a conceptual overview of how LightGBM works[[1]](#references). We assume familiarity with decision tree boosting algorithms to focus instead on aspects of LightGBM that may differ from other boosting packages. For detailed algorithms, please refer to the citations or source code.

## Optimization in Speed and Memory Usage[](#optimization-in-speed-and-memory-usage)

Many boosting tools use pre-sort-based algorithms[[2, 3]](#references) (e.g. default algorithm in xgboost) for decision tree learning. It is a simple solution, but not easy to optimize.

LightGBM uses histogram-based algorithms[[4, 5, 6]](#references), which bucket continuous feature (attribute) values into discrete bins. This speeds up training and reduces memory usage. Advantages of histogram-based algorithms include the following:

**Reduced cost of calculating the gain for each split**Pre-sort-based algorithms have time complexity

`O(#data)`

Computing the histogram has time complexity

`O(#data)`

, but this involves only a fast sum-up operation. Once the histogram is constructed, a histogram-based algorithm has time complexity`O(#bins)`

, and`#bins`

is far smaller than`#data`

.

**Use histogram subtraction for further speedup**To get one leaf’s histograms in a binary tree, use the histogram subtraction of its parent and its neighbor

So it needs to construct histograms for only one leaf (with smaller

`#data`

than its neighbor). It then can get histograms of its neighbor by histogram subtraction with small cost (`O(#bins)`

)

**Reduce memory usage**Replaces continuous values with discrete bins. If

`#bins`

is small, can use small data type, e.g. uint8_t, to store training dataNo need to store additional information for pre-sorting feature values


**Reduce communication cost for distributed learning**

## Sparse Optimization[](#sparse-optimization)

Need only

`O(2 * #non_zero_data)`

to construct histogram for sparse features

## Optimization in Accuracy[](#optimization-in-accuracy)

### Leaf-wise (Best-first) Tree Growth[](#leaf-wise-best-first-tree-growth)

Most decision tree learning algorithms grow trees by level (depth)-wise, like the following image:

LightGBM grows trees leaf-wise (best-first)[[7]](#references). It will choose the leaf with max delta loss to grow.
Holding `#leaf`

fixed, leaf-wise algorithms tend to achieve lower loss than level-wise algorithms.

Leaf-wise may cause over-fitting when `#data`

is small, so LightGBM includes the `max_depth`

parameter to limit tree depth. However, trees still grow leaf-wise even when `max_depth`

is specified.

### Optimal Split for Categorical Features[](#optimal-split-for-categorical-features)

It is common to represent categorical features with one-hot encoding, but this approach is suboptimal for tree learners. Particularly for high-cardinality categorical features, a tree built on one-hot features tends to be unbalanced and needs to grow very deep to achieve good accuracy.

Instead of one-hot encoding, the optimal solution is to split on a categorical feature by partitioning its categories into 2 subsets. If the feature has `k`

categories, there are `2^(k-1) - 1`

possible partitions.
But there is an efficient solution for regression trees[[8]](#references). It needs about `O(k * log(k))`

to find the optimal partition.

The basic idea is to sort the categories according to the training objective at each split.
More specifically, LightGBM sorts the histogram (for a categorical feature) according to its accumulated values (`sum_gradient / sum_hessian`

) and then finds the best split on the sorted histogram.

## Optimization in Network Communication[](#optimization-in-network-communication)

It only needs to use some collective communication algorithms, like “All reduce”, “All gather” and “Reduce scatter”, in distributed learning of LightGBM.
LightGBM implements state-of-the-art algorithms[[9]](#references).
These collective communication algorithms can provide much better performance than point-to-point communication.

## Optimization in Distributed Learning[](#optimization-in-distributed-learning)

LightGBM provides the following distributed learning algorithms.

### Feature Parallel[](#feature-parallel)

#### Traditional Algorithm[](#traditional-algorithm)

Feature parallel aims to parallelize the “Find Best Split” in the decision tree. The procedure of traditional feature parallel is:

Partition data vertically (different machines have different feature set).

Workers find local best split point {feature, threshold} on local feature set.

Communicate local best splits with each other and get the best one.

Worker with best split to perform split, then send the split result of data to other workers.

Other workers split data according to received data.


The shortcomings of traditional feature parallel:

Has computation overhead, since it cannot speed up “split”, whose time complexity is

`O(#data)`

. Thus, feature parallel cannot speed up well when`#data`

is large.Need communication of split result, which costs about

`O(#data / 8)`

(one bit for one data).

#### Feature Parallel in LightGBM[](#feature-parallel-in-lightgbm)

Since feature parallel cannot speed up well when `#data`

is large, we make a little change: instead of partitioning data vertically, every worker holds the full data.
Thus, LightGBM doesn’t need to communicate for split result of data since every worker knows how to split data.
And `#data`

won’t be larger, so it is reasonable to hold the full data in every machine.

The procedure of feature parallel in LightGBM:

Workers find local best split point {feature, threshold} on local feature set.

Communicate local best splits with each other and get the best one.

Perform best split.


However, this feature parallel algorithm still suffers from computation overhead for “split” when `#data`

is large.
So it will be better to use data parallel when `#data`

is large.

### Data Parallel[](#data-parallel)

#### Traditional Algorithm[](#id1)

Data parallel aims to parallelize the whole decision learning. The procedure of data parallel is:

Partition data horizontally.

Workers use local data to construct local histograms.

Merge global histograms from all local histograms.

Find best split from merged global histograms, then perform splits.


The shortcomings of traditional data parallel:

High communication cost. If using point-to-point communication algorithm, communication cost for one machine is about

`O(#machine * #feature * #bin)`

. If using collective communication algorithm (e.g. “All Reduce”), communication cost is about`O(2 * #feature * #bin)`

(check cost of “All Reduce” in chapter 4.5 at[[9]](#references)).

#### Data Parallel in LightGBM[](#data-parallel-in-lightgbm)

We reduce communication cost of data parallel in LightGBM:

Instead of “Merge global histograms from all local histograms”, LightGBM uses “Reduce Scatter” to merge histograms of different (non-overlapping) features for different workers. Then workers find the local best split on local merged histograms and sync up the global best split.

As aforementioned, LightGBM uses histogram subtraction to speed up training. Based on this, we can communicate histograms only for one leaf, and get its neighbor’s histograms by subtraction as well.


All things considered, data parallel in LightGBM has time complexity `O(0.5 * #feature * #bin)`

.

### Voting Parallel[](#voting-parallel)

Voting parallel further reduces the communication cost in [Data Parallel](#data-parallel) to constant cost.
It uses two-stage voting to reduce the communication cost of feature histograms[[10]](#references).

## GPU Support[](#gpu-support)

Thanks [@huanzhang12](https://github.com/huanzhang12) for contributing this feature. Please read [[11]](#references) to get more details.

## Applications and Metrics[](#applications-and-metrics)

LightGBM supports the following applications:

regression, the objective function is L2 loss

binary classification, the objective function is logloss

multi classification

cross-entropy, the objective function is logloss and supports training on non-binary labels

LambdaRank, the objective function is LambdaRank with NDCG


LightGBM supports the following metrics:

L1 loss

L2 loss

Log loss

Classification error rate

AUC

NDCG

MAP

Multi-class log loss

Multi-class error rate

AUC-mu

`(new in v3.0.0)`

Average precision

`(new in v3.1.0)`

Fair

Huber

Poisson

Quantile

MAPE

Kullback-Leibler

Gamma

Tweedie


For more details, please refer to [Parameters](./Parameters.html#metric-parameters).

## Other Features[](#other-features)

Limit

`max_depth`

of tree while grows tree leaf-wiseL1/L2 regularization

Bagging

Column (feature) sub-sample

Continued train with input GBDT model

Continued train with the input score file

Weighted training

Validation metric output during training

Multiple validation data

Multiple metrics

Early stopping (both training and prediction)

Prediction for leaf index


For more details, please refer to [Parameters](./Parameters.html).

## References[](#references)

[1] Guolin Ke, Qi Meng, Thomas Finley, Taifeng Wang, Wei Chen, Weidong Ma, Qiwei Ye, Tie-Yan Liu. “[LightGBM: A Highly Efficient Gradient Boosting Decision Tree](https://proceedings.neurips.cc/paper/2017/hash/6449f44a102fde848669bdd9eb6b76fa-Abstract.html).” Advances in Neural Information Processing Systems 30 (NIPS 2017), pp. 3149-3157.

[2] Mehta, Manish, Rakesh Agrawal, and Jorma Rissanen. “SLIQ: A fast scalable classifier for data mining.” International Conference on Extending Database Technology. Springer Berlin Heidelberg, 1996.

[3] Shafer, John, Rakesh Agrawal, and Manish Mehta. “SPRINT: A scalable parallel classifier for data mining.” Proc. 1996 Int. Conf. Very Large Data Bases. 1996.

[4] Ranka, Sanjay, and V. Singh. “CLOUDS: A decision tree classifier for large datasets.” Proceedings of the 4th Knowledge Discovery and Data Mining Conference. 1998.

[5] Machado, F. P. “Communication and memory efficient parallel decision tree construction.” (2003).

[6] Li, Ping, Qiang Wu, and Christopher J. Burges. “Mcrank: Learning to rank using multiple classification and gradient boosting.” Advances in Neural Information Processing Systems 20 (NIPS 2007).

[7] Shi, Haijian. “Best-first decision tree learning.” Diss. The University of Waikato, 2007.

[8] Walter D. Fisher. “[On Grouping for Maximum Homogeneity](https://www.jstor.org/stable/2281952).” Journal of the American Statistical Association. Vol. 53, No. 284 (Dec., 1958), pp. 789-798.

[9] Thakur, Rajeev, Rolf Rabenseifner, and William Gropp. “[Optimization of collective communication operations in MPICH](https://www.mpich.org/2012/10/24/optimization-of-collective-communication-operations-in-mpich/).” International Journal of High Performance Computing Applications 19.1 (2005), pp. 49-66.

[10] Qi Meng, Guolin Ke, Taifeng Wang, Wei Chen, Qiwei Ye, Zhi-Ming Ma, Tie-Yan Liu. “[A Communication-Efficient Parallel Algorithm for Decision Tree](https://proceedings.neurips.cc/paper/2016/hash/10a5ab2db37feedfdeaab192ead4ac0e-Abstract.html).” Advances in Neural Information Processing Systems 29 (NIPS 2016), pp. 1279-1287.

[11] Huan Zhang, Si Si and Cho-Jui Hsieh. “[GPU Acceleration for Large-scale Tree Boosting](https://arxiv.org/abs/1706.08359).” SysML Conference, 2018.

---

## Source: https://lightgbm.readthedocs.io/en/latest/Experiments.html

# Experiments[](#experiments)

## Comparison Experiment[](#comparison-experiment)

For the detailed experiment scripts and output logs, please refer to this [repo](https://github.com/guolinke/boosting_tree_benchmarks).

### History[](#history)

08 Mar, 2020: update according to the latest master branch ([1b97eaf](https://github.com/dmlc/xgboost/commit/1b97eaf7a74315bfa2c132d59f937a35408bcfd1) for XGBoost, [bcad692](https://github.com/lightgbm-org/LightGBM/commit/bcad692e263e0317cab11032dd017c78f9e58e5f) for LightGBM). (`xgboost_exact`

is not updated for it is too slow.)

27 Feb, 2017: first version.

### Data[](#data)

We used 5 datasets to conduct our comparison experiments. Details of data are listed in the following table:

Data |
Task |
Link |
#Train_Set |
#Feature |
Comments |
|---|---|---|---|---|---|
Higgs |
Binary classification |
10,500,000 |
28 |
last 500,000 samples were used as test set |
|
Yahoo LTR |
Learning to rank |
473,134 |
700 |
set1.train as train, set1.test as test |
|
MS LTR |
Learning to rank |
2,270,296 |
137 |
{S1,S2,S3} as train set, {S5} as test set |
|
Expo |
Binary classification |
11,000,000 |
700 |
last 1,000,000 samples were used as test set |
|
Allstate |
Binary classification |
13,184,290 |
4228 |
last 1,000,000 samples were used as test set |

### Environment[](#environment)

We ran all experiments on a single Linux server (Azure ND24s) with the following specifications:

OS |
CPU |
Memory |
|---|---|---|
Ubuntu 16.04 LTS |
2 * E5-2690 v4 |
448GB |

### Baseline[](#baseline)

We used [xgboost](https://github.com/dmlc/xgboost) as a baseline.

Both xgboost and LightGBM were built with OpenMP support.

### Settings[](#settings)

We set up total 3 settings for experiments. The parameters of these settings are:

xgboost:

eta = 0.1 max_depth = 8 num_round = 500 nthread = 16 tree_method = exact min_child_weight = 100

xgboost_hist (using histogram based algorithm):

eta = 0.1 num_round = 500 nthread = 16 min_child_weight = 100 tree_method = hist grow_policy = lossguide max_depth = 0 max_leaves = 255

LightGBM:

learning_rate = 0.1 num_leaves = 255 num_trees = 500 num_threads = 16 min_data_in_leaf = 0 min_sum_hessian_in_leaf = 100


xgboost grows trees depth-wise and controls model complexity by `max_depth`

.
LightGBM uses a leaf-wise algorithm instead and controls model complexity by `num_leaves`

.
So we cannot compare them in the exact same model setting. For the tradeoff, we use xgboost with `max_depth=8`

, which will have max number leaves to 255, to compare with LightGBM with `num_leaves=255`

.

Other parameters are default values.

### Result[](#result)

#### Speed[](#speed)

We compared speed using only the training task without any test or metric output. We didn’t count the time for IO.
For the ranking tasks, since XGBoost and LightGBM implement different ranking objective functions, we used `regression`

objective for speed benchmark, for the fair comparison.

The following table is the comparison of time cost:

Data |
xgboost |
xgboost_hist |
LightGBM |
|---|---|---|---|
Higgs |
3794.34 s |
165.575 s |
|
Yahoo LTR |
674.322 s |
131.462 s |
|
MS LTR |
1251.27 s |
98.386 s |
|
Expo |
1607.35 s |
137.65 s |
|
Allstate |
2867.22 s |
315.256 s |
|

LightGBM ran faster than xgboost on all experiment data sets.

#### Accuracy[](#accuracy)

We computed all accuracy metrics only on the test data set.

Data |
Metric |
xgboost |
xgboost_hist |
LightGBM |
|---|---|---|---|---|
Higgs |
AUC |
0.839593 |
0.845314 |
|
Yahoo LTR |
NDCG |
0.719748 |
0.720049 |
|
NDCG |
0.717813 |
0.722573 |
|
|
NDCG |
0.737849 |
0.740899 |
|
|
NDCG |
0.78089 |
0.782957 |
|
|
MS LTR |
NDCG |
0.483956 |
0.485115 |
|
NDCG |
0.467951 |
0.47313 |
|
|
NDCG |
0.472476 |
0.476375 |
|
|
NDCG |
0.492429 |
0.496553 |
|
|
Expo |
AUC |
0.756713 |
0.776224 |
|
Allstate |
AUC |
0.607201 |
|
0.609072 |

#### Memory Consumption[](#memory-consumption)

We monitored RES while running training task. And we set `two_round=true`

(this will increase data-loading time and
reduce peak memory usage but not affect training speed or accuracy) in LightGBM to reduce peak memory usage.

Data |
xgboost |
xgboost_hist |
LightGBM (col-wise) |
LightGBM (row-wise) |
|---|---|---|---|---|
Higgs |
4.853GB |
7.335GB |
|
1.401GB |
Yahoo LTR |
1.907GB |
4.023GB |
|
2.161GB |
MS LTR |
5.469GB |
7.491GB |
|
1.296GB |
Expo |
1.553GB |
2.606GB |
|
0.711GB |
Allstate |
6.237GB |
12.090GB |
|
1.755GB |

## Parallel Experiment[](#parallel-experiment)

### History[](#id1)

27 Feb, 2017: first version.

### Data[](#id2)

We used a terabyte click log dataset to conduct parallel experiments. Details are listed in following table:

Data |
Task |
Link |
#Data |
#Feature |
|---|---|---|---|---|
Criteo |
Binary classification |
1,700,000,000 |
67 |

This data contains 13 integer features and 26 categorical features for 24 days of click logs. We statisticized the click-through rate (CTR) and count for these 26 categorical features from the first ten days. Then we used next ten days’ data, after replacing the categorical features by the corresponding CTR and count, as training data. The processed training data have a total of 1.7 billions records and 67 features.

### Environment[](#id3)

We ran our experiments on 16 Windows servers with the following specifications:

OS |
CPU |
Memory |
Network Adapter |
|---|---|---|---|
Windows Server 2012 |
2 * E5-2670 v2 |
DDR3 1600Mhz, 256GB |
Mellanox ConnectX-3, 54Gbps, RDMA support |

### Settings[](#id4)

```
learning_rate = 0.1
num_leaves = 255
num_trees = 100
num_thread = 16
tree_learner = data
```

We used data parallel here because this data is large in `#data`

but small in `#feature`

. Other parameters were default values.

### Results[](#results)

#Machine |
Time per Tree |
Memory Usage(per Machine) |
|---|---|---|
1 |
627.8 s |
176GB |
2 |
311 s |
87GB |
4 |
156 s |
43GB |
8 |
80 s |
22GB |
16 |
42 s |
11GB |

The results show that LightGBM achieves a linear speedup with distributed learning.

## GPU Experiments[](#gpu-experiments)

Refer to [GPU Performance](./GPU-Performance.html).

---

## Source: https://lightgbm.readthedocs.io/en/latest/Parameters.html

# Parameters[](#parameters)

This page contains descriptions of all parameters in LightGBM.

**List of other helpful links**

## Parameters Format[](#parameters-format)

Parameters are merged together in the following order (later items overwrite earlier ones):

LightGBM’s default values

special files for

`weight`

,`init_score`

,`query`

, and`positions`

(see[Others](#others))(CLI only) configuration in a file passed like

`config=train.conf`

(CLI only) configuration passed via the command line

(Python, R) special keyword arguments to some functions (e.g.

`num_boost_round`

in`train()`

)(Python, R)

`params`

function argument (including`**kwargs`

in Python and`...`

in R)(C API)

`parameters`

or`params`

function argument

Many parameters have “aliases”, alternative names which refer to the same configuration.

Where a mix of the primary parameter name and aliases are given, the primary parameter name is always preferred to any aliases.

For example, in Python:

```
# use learning rate of 0.07, because 'learning_rate'
# is the primary parameter name
lgb.train(
params={
"learning_rate": 0.07,
"shrinkage_rate": 0.12
},
train_set=dtrain
)
```

Where multiple aliases are given, and the primary parameter name is not, the first alias
appearing in the lists returned by `Config::parameter2aliases()`

in the C++ library is used.
Those lists are hard-coded in a fairly arbitrary way… wherever possible, avoid relying on this behavior.

For example, in Python:

```
# use learning rate of 0.12, LightGBM has a hard-coded preference for 'shrinkage_rate'
# over any other aliases, and 'learning_rate' is not provided
lgb.train(
params={
"eta": 0.19,
"shrinkage_rate": 0.12
},
train_set=dtrain
)
```

**CLI**

The parameters format is `key1=value1 key2=value2 ...`

.
Parameters can be set both in config file and command line.
By using command line, parameters should not have spaces before and after `=`

.
By using config files, one line can only contain one parameter. You can use `#`

to comment.

**Python**

Any parameters that accept multiple values should be passed as a Python list.

```
params = {
"monotone_constraints": [-1, 0, 1]
}
```

**R**

Any parameters that accept multiple values should be passed as an R list.

```
params <- list(
monotone_constraints = c(-1, 0, 1)
)
```

## Core Parameters[](#core-parameters)

`config`

[🔗︎](#config), default =`""`

, type = string, aliases:`config_file`

path of config file

**Note**: can be used only in CLI version

`task`

[🔗︎](#task), default =`train`

, type = enum, options:`train`

,`predict`

,`convert_model`

,`refit`

, aliases:`task_type`

`train`

, for training, aliases:`training`

`predict`

, for prediction, aliases:`prediction`

,`test`

`convert_model`

, for converting model file into if-else format, see more information in[Convert Parameters](#convert-parameters)`refit`

, for refitting existing models with new data, aliases:`refit_tree`

`save_binary`

, load train (and validation) data then save dataset to binary file. Typical usage:`save_binary`

first, then run multiple`train`

tasks in parallel using the saved binary file**Note**: can be used only in CLI version; for language-specific packages you can use the correspondent functions

`objective`

[🔗︎](#objective), default =`regression`

, type = enum, options:`regression`

,`regression_l1`

,`huber`

,`fair`

,`poisson`

,`quantile`

,`mape`

,`gamma`

,`tweedie`

,`binary`

,`multiclass`

,`multiclassova`

,`cross_entropy`

,`cross_entropy_lambda`

,`lambdarank`

,`rank_xendcg`

, aliases:`objective_type`

,`app`

,`application`

,`loss`

regression application

`regression`

, L2 loss, aliases:`regression_l2`

,`l2`

,`mean_squared_error`

,`mse`

,`l2_root`

,`root_mean_squared_error`

,`rmse`

`regression_l1`

, L1 loss, aliases:`l1`

,`mean_absolute_error`

,`mae`

`huber`

,[Huber loss](https://en.wikipedia.org/wiki/Huber_loss)`fair`

,[Fair loss](https://www.kaggle.com/c/allstate-claims-severity/discussion/24520)`poisson`

,[Poisson regression](https://en.wikipedia.org/wiki/Poisson_regression)`quantile`

,[Quantile regression](https://en.wikipedia.org/wiki/Quantile_regression)`mape`

,[MAPE loss](https://en.wikipedia.org/wiki/Mean_absolute_percentage_error), aliases:`mean_absolute_percentage_error`

`gamma`

, Gamma regression with log-link. It might be useful, e.g., for modeling insurance claims severity, or for any target that might be[gamma-distributed](https://en.wikipedia.org/wiki/Gamma_distribution#Occurrence_and_applications)`tweedie`

, Tweedie regression with log-link. It might be useful, e.g., for modeling total loss in insurance, or for any target that might be[tweedie-distributed](https://en.wikipedia.org/wiki/Tweedie_distribution#Occurrence_and_applications)

binary classification application

`binary`

, binary[log loss](https://en.wikipedia.org/wiki/Cross_entropy)classification (or logistic regression)requires labels in {0, 1}; see

`cross-entropy`

application for general probability labels in [0, 1]

multi-class classification application

`multiclass`

,[softmax](https://en.wikipedia.org/wiki/Softmax_function)objective function, aliases:`softmax`

`multiclassova`

,[One-vs-All](https://en.wikipedia.org/wiki/Multiclass_classification#One-vs.-rest)binary objective function, aliases:`multiclass_ova`

,`ova`

,`ovr`

`num_class`

should be set as well

cross-entropy application

`cross_entropy`

, objective function for cross-entropy (with optional linear weights), aliases:`xentropy`

`cross_entropy_lambda`

, alternative parameterization of cross-entropy, aliases:`xentlambda`

label is anything in interval [0, 1]


ranking application

`lambdarank`

,[lambdarank](https://proceedings.neurips.cc/paper/2006/hash/af44c4c56f385c43f2529f9b1b018f6a-Abstract.html)objective.[label_gain](#label_gain)can be used to set the gain (weight) of`int`

label and all values in`label`

must be smaller than number of elements in`label_gain`

`rank_xendcg`

,[XE_NDCG_MART](https://arxiv.org/abs/1911.09798)ranking objective function, aliases:`xendcg`

,`xe_ndcg`

,`xe_ndcg_mart`

,`xendcg_mart`

`rank_xendcg`

is faster than and achieves the similar performance as`lambdarank`

label should be

`int`

type, and larger number represents the higher relevance (e.g. 0:bad, 1:fair, 2:good, 3:perfect)

custom objective function (gradients and hessians not computed directly by LightGBM)

`custom`

must be passed through parameters explicitly in the C API

**Note**: cannot be used in CLI version


`boosting`

[🔗︎](#boosting), default =`gbdt`

, type = enum, options:`gbdt`

,`rf`

,`dart`

, aliases:`boosting_type`

,`boost`

`gbdt`

, traditional Gradient Boosting Decision Tree, aliases:`gbrt`

`rf`

, Random Forest, aliases:`random_forest`

`dart`

,[Dropouts meet Multiple Additive Regression Trees](https://arxiv.org/abs/1505.01866)**Note**: internally, LightGBM uses`gbdt`

mode for the first`1 / learning_rate`

iterations


`data_sample_strategy`

[🔗︎](#data_sample_strategy), default =`bagging`

, type = enum, options:`bagging`

,`goss`

`bagging`

, Randomly Bagging Sampling**Note**:`bagging`

is only effective when`bagging_freq > 0`

and`bagging_fraction < 1.0`


`goss`

, Gradient-based One-Side Sampling*New in version 4.0.0*

`data`

[🔗︎](#data), default =`""`

, type = string, aliases:`train`

,`train_data`

,`train_data_file`

,`data_filename`

path of training data, LightGBM will train from this data

**Note**: can be used only in CLI version

`valid`

[🔗︎](#valid), default =`""`

, type = string, aliases:`test`

,`valid_data`

,`valid_data_file`

,`test_data`

,`test_data_file`

,`valid_filenames`

path(s) of validation/test data, LightGBM will output metrics for these data

support multiple validation data, separated by

`,`

**Note**: can be used only in CLI version

`num_iterations`

[🔗︎](#num_iterations), default =`100`

, type = int, aliases:`num_iteration`

,`n_iter`

,`num_tree`

,`num_trees`

,`num_round`

,`num_rounds`

,`nrounds`

,`num_boost_round`

,`n_estimators`

,`max_iter`

, constraints:`num_iterations >= 0`

number of boosting iterations

**Note**: internally, LightGBM constructs`num_class * num_iterations`

trees for multi-class classification problems

`learning_rate`

[🔗︎](#learning_rate), default =`0.1`

, type = double, aliases:`shrinkage_rate`

,`eta`

, constraints:`learning_rate > 0.0`

shrinkage rate

in

`dart`

, it also affects on normalization weights of dropped trees

`num_leaves`

[🔗︎](#num_leaves), default =`31`

, type = int, aliases:`num_leaf`

,`max_leaves`

,`max_leaf`

,`max_leaf_nodes`

, constraints:`1 < num_leaves <= 131072`

max number of leaves in one tree


`tree_learner`

[🔗︎](#tree_learner), default =`serial`

, type = enum, options:`serial`

,`feature`

,`data`

,`voting`

, aliases:`tree`

,`tree_type`

,`tree_learner_type`

`serial`

, single machine tree learner`feature`

, feature parallel tree learner, aliases:`feature_parallel`

`data`

, data parallel tree learner, aliases:`data_parallel`

`voting`

, voting parallel tree learner, aliases:`voting_parallel`

refer to

[Distributed Learning Guide](./Parallel-Learning-Guide.html)to get more details

`num_threads`

[🔗︎](#num_threads), default =`0`

, type = int, aliases:`num_thread`

,`nthread`

,`nthreads`

,`n_jobs`

used only in

`train`

,`prediction`

and`refit`

tasks or in correspondent functions of language-specific packagesnumber of threads for LightGBM

`0`

means default number of threads in OpenMPfor the best speed, set this to the number of

**real CPU cores**, not the number of threads (most CPUs use[hyper-threading](https://en.wikipedia.org/wiki/Hyper-threading)to generate 2 threads per CPU core)do not set it too large if your dataset is small (for instance, do not use 64 threads for a dataset with 10,000 rows)

be aware a task manager or any similar CPU monitoring tool might report that cores not being fully utilized.

**This is normal**for distributed learning, do not use all CPU cores because this will cause poor performance for the network communication

**Note**: please**don’t**change this during training, especially when running multiple jobs simultaneously by external packages, otherwise it may cause undesirable errors

`device_type`

[🔗︎](#device_type), default =`cpu`

, type = enum, options:`cpu`

,`gpu`

,`cuda`

, aliases:`device`

device for the tree learning

`cpu`

supports all LightGBM functionality and is portable across the widest range of operating systems and hardware`cuda`

offers faster training than`gpu`

or`cpu`

, but only works on GPUs supporting CUDA or ROCm`gpu`

can be faster than`cpu`

and works on a wider range of GPUs than CUDA**Note**: it is recommended to use the smaller`max_bin`

(e.g. 63) to get the better speed up**Note**: for the faster speed, GPU uses 32-bit float point to sum up by default, so this may affect the accuracy for some tasks. You can set`gpu_use_dp=true`

to enable 64-bit float point, but it will slow down the training**Note**: refer to[Installation Guide](./Installation-Guide.html)to build LightGBM with GPU, CUDA, or ROCm support

`seed`

[🔗︎](#seed), default =`None`

, type = int, aliases:`random_seed`

,`random_state`

this seed is used to generate other seeds, e.g.

`data_random_seed`

,`feature_fraction_seed`

, etc.by default, this seed is unused in favor of default values of other seeds

this seed has lower priority in comparison with other seeds, which means that it will be overridden, if you set other seeds explicitly


`deterministic`

[🔗︎](#deterministic), default =`false`

, type = boolused only with

`cpu`

device typesetting this to

`true`

should ensure the stable results when using the same data and the same parameters (and different`num_threads`

)when you use the different seeds, different LightGBM versions, the binaries compiled by different compilers, or in different systems, the results are expected to be different

you can

[raise issues](https://github.com/lightgbm-org/LightGBM/issues)in LightGBM GitHub repo when you meet the unstable results**Note**: setting this to`true`

may slow down the training**Note**: to avoid potential instability due to numerical issues, please set`force_col_wise=true`

or`force_row_wise=true`

when setting`deterministic=true`



## Learning Control Parameters[](#learning-control-parameters)

`force_col_wise`

[🔗︎](#force_col_wise), default =`false`

, type = boolused only with

`cpu`

device typeset this to

`true`

to force col-wise histogram buildingenabling this is recommended when:

the number of columns is large, or the total number of bins is large

`num_threads`

is large, e.g.`> 20`

you want to reduce memory cost


**Note**: when both`force_col_wise`

and`force_row_wise`

are`false`

, LightGBM will firstly try them both, and then use the faster one. To remove the overhead of testing set the faster one to`true`

manually**Note**: this parameter cannot be used at the same time with`force_row_wise`

, choose only one of them

`force_row_wise`

[🔗︎](#force_row_wise), default =`false`

, type = boolused only with

`cpu`

device typeset this to

`true`

to force row-wise histogram buildingenabling this is recommended when:

the number of data points is large, and the total number of bins is relatively small

`num_threads`

is relatively small, e.g.`<= 16`

you want to use small

`bagging_fraction`

or`goss`

sample strategy to speed up

**Note**: setting this to`true`

will double the memory cost for Dataset object. If you have not enough memory, you can try setting`force_col_wise=true`

**Note**: when both`force_col_wise`

and`force_row_wise`

are`false`

, LightGBM will firstly try them both, and then use the faster one. To remove the overhead of testing set the faster one to`true`

manually**Note**: this parameter cannot be used at the same time with`force_col_wise`

, choose only one of them

`histogram_pool_size`

[🔗︎](#histogram_pool_size), default =`-1.0`

, type = double, aliases:`hist_pool_size`

max cache size in MB for historical histogram

`< 0`

means no limit

`max_depth`

[🔗︎](#max_depth), default =`-1`

, type = intlimit the max depth for tree model. This is used to deal with over-fitting when

`#data`

is small. Tree still grows leaf-wise`<= 0`

means no limit

`min_data_in_leaf`

[🔗︎](#min_data_in_leaf), default =`20`

, type = int, aliases:`min_data_per_leaf`

,`min_data`

,`min_child_samples`

,`min_samples_leaf`

, constraints:`min_data_in_leaf >= 0`

minimal number of data in one leaf. Can be used to deal with over-fitting

**Note**: this is an approximation based on the Hessian, so occasionally you may observe splits which produce leaf nodes that have less than this many observations

`min_sum_hessian_in_leaf`

[🔗︎](#min_sum_hessian_in_leaf), default =`1e-3`

, type = double, aliases:`min_sum_hessian_per_leaf`

,`min_sum_hessian`

,`min_hessian`

,`min_child_weight`

, constraints:`min_sum_hessian_in_leaf >= 0.0`

minimal sum hessian in one leaf. Like

`min_data_in_leaf`

, it can be used to deal with over-fitting

`bagging_fraction`

[🔗︎](#bagging_fraction), default =`1.0`

, type = double, aliases:`sub_row`

,`subsample`

,`bagging`

, constraints:`0.0 < bagging_fraction <= 1.0`

like

`feature_fraction`

, but this will randomly select part of data without resamplingcan be used to speed up training

can be used to deal with over-fitting

**Note**: to enable bagging,`bagging_freq`

should be set to a non zero value as well

`pos_bagging_fraction`

[🔗︎](#pos_bagging_fraction), default =`1.0`

, type = double, aliases:`pos_sub_row`

,`pos_subsample`

,`pos_bagging`

, constraints:`0.0 < pos_bagging_fraction <= 1.0`

used only in

`binary`

applicationused for imbalanced binary classification problem, will randomly sample

`#pos_samples * pos_bagging_fraction`

positive samples in baggingshould be used together with

`neg_bagging_fraction`

set this to

`1.0`

to disable**Note**: to enable this, you need to set`bagging_freq`

and`neg_bagging_fraction`

as well**Note**: if both`pos_bagging_fraction`

and`neg_bagging_fraction`

are set to`1.0`

, balanced bagging is disabled**Note**: if balanced bagging is enabled,`bagging_fraction`

will be ignored

`neg_bagging_fraction`

[🔗︎](#neg_bagging_fraction), default =`1.0`

, type = double, aliases:`neg_sub_row`

,`neg_subsample`

,`neg_bagging`

, constraints:`0.0 < neg_bagging_fraction <= 1.0`

used only in

`binary`

applicationused for imbalanced binary classification problem, will randomly sample

`#neg_samples * neg_bagging_fraction`

negative samples in baggingshould be used together with

`pos_bagging_fraction`

set this to

`1.0`

to disable**Note**: to enable this, you need to set`bagging_freq`

and`pos_bagging_fraction`

as well**Note**: if both`pos_bagging_fraction`

and`neg_bagging_fraction`

are set to`1.0`

, balanced bagging is disabled**Note**: if balanced bagging is enabled,`bagging_fraction`

will be ignored

`bagging_freq`

[🔗︎](#bagging_freq), default =`0`

, type = int, aliases:`subsample_freq`

frequency for bagging

`0`

means disable bagging;`k`

means perform bagging at every`k`

iteration. Every`k`

-th iteration, LightGBM will randomly select`bagging_fraction * 100%`

of the data to use for the next`k`

iterations**Note**: bagging is only effective when`0.0 < bagging_fraction < 1.0`


`bagging_seed`

[🔗︎](#bagging_seed), default =`3`

, type = int, aliases:`bagging_fraction_seed`

random seed for bagging


`bagging_by_query`

[🔗︎](#bagging_by_query), default =`false`

, type = boolwhether to do bagging sample by query

*New in version 4.6.0*

`feature_fraction`

[🔗︎](#feature_fraction), default =`1.0`

, type = double, aliases:`sub_feature`

,`colsample_bytree`

, constraints:`0.0 < feature_fraction <= 1.0`

LightGBM will randomly select a subset of features on each iteration (tree) if

`feature_fraction`

is smaller than`1.0`

. For example, if you set it to`0.8`

, LightGBM will select 80% of features before training each treecan be used to speed up training

can be used to deal with over-fitting


`feature_fraction_bynode`

[🔗︎](#feature_fraction_bynode), default =`1.0`

, type = double, aliases:`sub_feature_bynode`

,`colsample_bynode`

, constraints:`0.0 < feature_fraction_bynode <= 1.0`

LightGBM will randomly select a subset of features on each tree node if

`feature_fraction_bynode`

is smaller than`1.0`

. For example, if you set it to`0.8`

, LightGBM will select 80% of features at each tree nodecan be used to deal with over-fitting

**Note**: unlike`feature_fraction`

, this cannot speed up training**Note**: if both`feature_fraction`

and`feature_fraction_bynode`

are smaller than`1.0`

, the final fraction of each node is`feature_fraction * feature_fraction_bynode`


`feature_fraction_seed`

[🔗︎](#feature_fraction_seed), default =`2`

, type = intrandom seed for

`feature_fraction`


`extra_trees`

[🔗︎](#extra_trees), default =`false`

, type = bool, aliases:`extra_tree`

use extremely randomized trees

if set to

`true`

, when evaluating node splits LightGBM will check only one randomly-chosen threshold for each featurecan be used to speed up training

can be used to deal with over-fitting


`extra_seed`

[🔗︎](#extra_seed), default =`6`

, type = intrandom seed for selecting thresholds when

`extra_trees`

is true

`early_stopping_round`

[🔗︎](#early_stopping_round), default =`0`

, type = int, aliases:`early_stopping_rounds`

,`early_stopping`

,`n_iter_no_change`

will stop training if one metric of one validation data doesn’t improve in last

`early_stopping_round`

rounds`<= 0`

means disablecan be used to speed up training


`early_stopping_min_delta`

[🔗︎](#early_stopping_min_delta), default =`0.0`

, type = double, constraints:`early_stopping_min_delta >= 0.0`

when early stopping is used (i.e.

`early_stopping_round > 0`

), require the early stopping metric to improve by at least this delta to be considered an improvement*New in version 4.4.0*

`first_metric_only`

[🔗︎](#first_metric_only), default =`false`

, type = boolLightGBM allows you to provide multiple evaluation metrics. Set this to

`true`

, if you want to use only the first metric for early stopping

`max_delta_step`

[🔗︎](#max_delta_step), default =`0.0`

, type = double, aliases:`max_tree_output`

,`max_leaf_output`

used to limit the max output of tree leaves

`<= 0`

means no constraintthe final max output of leaves is

`learning_rate * max_delta_step`


`lambda_l1`

[🔗︎](#lambda_l1), default =`0.0`

, type = double, aliases:`reg_alpha`

,`l1_regularization`

, constraints:`lambda_l1 >= 0.0`

L1 regularization


`lambda_l2`

[🔗︎](#lambda_l2), default =`0.0`

, type = double, aliases:`reg_lambda`

,`lambda`

,`l2_regularization`

, constraints:`lambda_l2 >= 0.0`

L2 regularization


`linear_lambda`

[🔗︎](#linear_lambda), default =`0.0`

, type = double, constraints:`linear_lambda >= 0.0`

linear tree regularization, corresponds to the parameter

`lambda`

in Eq. 3 of[Gradient Boosting with Piece-Wise Linear Regression Trees](https://arxiv.org/abs/1802.05640)

`min_gain_to_split`

[🔗︎](#min_gain_to_split), default =`0.0`

, type = double, aliases:`min_split_gain`

, constraints:`min_gain_to_split >= 0.0`

the minimal gain to perform split

can be used to speed up training


`drop_rate`

[🔗︎](#drop_rate), default =`0.1`

, type = double, aliases:`rate_drop`

, constraints:`0.0 <= drop_rate <= 1.0`

used only in

`dart`

dropout rate: a fraction of previous trees to drop during the dropout


`max_drop`

[🔗︎](#max_drop), default =`50`

, type = intused only in

`dart`

max number of dropped trees during one boosting iteration

`<=0`

means no limit

`skip_drop`

[🔗︎](#skip_drop), default =`0.5`

, type = double, constraints:`0.0 <= skip_drop <= 1.0`

used only in

`dart`

probability of skipping the dropout procedure during a boosting iteration


`xgboost_dart_mode`

[🔗︎](#xgboost_dart_mode), default =`false`

, type = boolused only in

`dart`

set this to

`true`

, if you want to use XGBoost DART mode

`uniform_drop`

[🔗︎](#uniform_drop), default =`false`

, type = boolused only in

`dart`

set this to

`true`

, if you want to use uniform drop

`drop_seed`

[🔗︎](#drop_seed), default =`4`

, type = intused only in

`dart`

random seed to choose dropping models


`top_rate`

[🔗︎](#top_rate), default =`0.2`

, type = double, constraints:`0.0 <= top_rate <= 1.0`

used only in

`goss`

the retain ratio of large gradient data


`other_rate`

[🔗︎](#other_rate), default =`0.1`

, type = double, constraints:`0.0 <= other_rate <= 1.0`

used only in

`goss`

the retain ratio of small gradient data


`min_data_per_group`

[🔗︎](#min_data_per_group), default =`100`

, type = int, constraints:`min_data_per_group > 0`

used for the categorical features

minimal number of data per categorical group


`max_cat_threshold`

[🔗︎](#max_cat_threshold), default =`32`

, type = int, constraints:`max_cat_threshold > 0`

used for the categorical features

limit number of split points considered for categorical features. See

[the documentation on how LightGBM finds optimal splits for categorical features](./Features.html#optimal-split-for-categorical-features)for more detailscan be used to speed up training


`cat_l2`

[🔗︎](#cat_l2), default =`10.0`

, type = double, constraints:`cat_l2 >= 0.0`

used for the categorical features

L2 regularization in categorical split


`cat_smooth`

[🔗︎](#cat_smooth), default =`10.0`

, type = double, constraints:`cat_smooth >= 0.0`

used for the categorical features

this can reduce the effect of noises in categorical features, especially for categories with few data


`max_cat_to_onehot`

[🔗︎](#max_cat_to_onehot), default =`4`

, type = int, constraints:`max_cat_to_onehot > 0`

used for the categorical features

when number of categories of one feature smaller than or equal to

`max_cat_to_onehot`

, one-vs-other split algorithm will be used

`top_k`

[🔗︎](#top_k), default =`20`

, type = int, aliases:`topk`

, constraints:`top_k > 0`

used only in

`voting`

tree learner, refer to[Voting parallel](./Parallel-Learning-Guide.html#choose-appropriate-parallel-algorithm)set this to larger value for more accurate result, but it will slow down the training speed


`monotone_constraints`

[🔗︎](#monotone_constraints), default =`None`

, type = multi-int, aliases:`mc`

,`monotone_constraint`

,`monotonic_cst`

used for constraints of monotonic features

`1`

means increasing,`-1`

means decreasing,`0`

means non-constraintyou need to specify all features in order. For example,

`mc=-1,0,1`

means decreasing for the 1st feature, non-constraint for the 2nd feature and increasing for the 3rd feature

`monotone_constraints_method`

[🔗︎](#monotone_constraints_method), default =`basic`

, type = enum, options:`basic`

,`intermediate`

,`advanced`

, aliases:`monotone_constraining_method`

,`mc_method`

used only if

`monotone_constraints`

is setmonotone constraints method

`basic`

, the most basic monotone constraints method. It does not slow down the training speed at all, but over-constrains the predictions`intermediate`

, a[more advanced method](https://hal.science/hal-02862802/document), which may slow down the training speed very slightly. However, this method is much less constraining than the basic method and should significantly improve the results`advanced`

, an[even more advanced method](https://hal.science/hal-02862802/document), which may slow down the training speed. However, this method is even less constraining than the intermediate method and should again significantly improve the results


`monotone_penalty`

[🔗︎](#monotone_penalty), default =`0.0`

, type = double, aliases:`monotone_splits_penalty`

,`ms_penalty`

,`mc_penalty`

, constraints:`monotone_penalty >= 0.0`

used only if

`monotone_constraints`

is set[monotone penalty](https://hal.science/hal-02862802/document): a penalization parameter X forbids any monotone splits on the first X (rounded down) level(s) of the tree. The penalty applied to monotone splits on a given depth is a continuous, increasing function the penalization parameterif

`0.0`

(the default), no penalization is applied

`feature_contri`

[🔗︎](#feature_contri), default =`None`

, type = multi-double, aliases:`feature_contrib`

,`fc`

,`fp`

,`feature_penalty`

used to control feature’s split gain, will use

`gain[i] = max(0, feature_contri[i]) * gain[i]`

to replace the split gain of i-th featureyou need to specify all features in order


`forcedsplits_filename`

[🔗︎](#forcedsplits_filename), default =`""`

, type = string, aliases:`fs`

,`forced_splits_filename`

,`forced_splits_file`

,`forced_splits`

path to a

`.json`

file that specifies splits to force at the top of every decision tree before best-first learning commences`.json`

file can be arbitrarily nested, and each split contains`feature`

,`threshold`

fields, as well as`left`

and`right`

fields representing subsplitscategorical splits are forced in a one-hot fashion, with

`left`

representing the split containing the feature value and`right`

representing other values**Note**: the forced split logic will be ignored, if the split makes gain worsesee

[this file](https://github.com/lightgbm-org/LightGBM/blob/master/examples/binary_classification/forced_splits.json)as an example

`refit_decay_rate`

[🔗︎](#refit_decay_rate), default =`0.9`

, type = double, constraints:`0.0 <= refit_decay_rate <= 1.0`

decay rate of

`refit`

task, will use`leaf_output = refit_decay_rate * old_leaf_output + (1.0 - refit_decay_rate) * new_leaf_output`

to refit treesused only in

`refit`

task in CLI version or as argument in`refit`

function in language-specific package

`cegb_tradeoff`

[🔗︎](#cegb_tradeoff), default =`1.0`

, type = double, constraints:`cegb_tradeoff >= 0.0`

cost-effective gradient boosting multiplier for all penalties


`cegb_penalty_split`

[🔗︎](#cegb_penalty_split), default =`0.0`

, type = double, constraints:`cegb_penalty_split >= 0.0`

cost-effective gradient-boosting penalty for splitting a node


`cegb_penalty_feature_lazy`

[🔗︎](#cegb_penalty_feature_lazy), default =`0,0,...,0`

, type = multi-doublecost-effective gradient boosting penalty for using a feature

applied per data point


`cegb_penalty_feature_coupled`

[🔗︎](#cegb_penalty_feature_coupled), default =`0,0,...,0`

, type = multi-doublecost-effective gradient boosting penalty for using a feature

applied once per forest


`path_smooth`

[🔗︎](#path_smooth), default =`0`

, type = double, constraints:`path_smooth >= 0.0`

controls smoothing applied to tree nodes

helps prevent overfitting on leaves with few samples

if

`0.0`

(the default), no smoothing is appliedif

`path_smooth > 0`

then`min_data_in_leaf`

must be at least`2`

larger values give stronger regularization

the weight of each node is

`w * (n / path_smooth) / (n / path_smooth + 1) + w_p / (n / path_smooth + 1)`

, where`n`

is the number of samples in the node,`w`

is the optimal node weight to minimise the loss (approximately`-sum_gradients / sum_hessians`

), and`w_p`

is the weight of the parent nodenote that the parent output

`w_p`

itself has smoothing applied, unless it is the root node, so that the smoothing effect accumulates with the tree depth


`interaction_constraints`

[🔗︎](#interaction_constraints), default =`""`

, type = stringcontrols which features can appear in the same branch

by default interaction constraints are disabled, to enable them you can specify

for CLI, lists separated by commas, e.g.

`[0,1,2],[2,3]`

for Python-package, list of lists, e.g.

`[[0, 1, 2], [2, 3]]`

for R-package, list of character or numeric vectors, e.g.

`list(c("var1", "var2", "var3"), c("var3", "var4"))`

or`list(c(1L, 2L, 3L), c(3L, 4L))`

. Numeric vectors should use 1-based indexing, where`1L`

is the first feature,`2L`

is the second feature, etc.

any two features can only appear in the same branch only if there exists a constraint containing both features


`verbosity`

[🔗︎](#verbosity), default =`1`

, type = int, aliases:`verbose`

controls the level of LightGBM’s verbosity

`< 0`

: Fatal,`= 0`

: Error (Warning),`= 1`

: Info,`> 1`

: Debug

`input_model`

[🔗︎](#input_model), default =`""`

, type = string, aliases:`model_input`

,`model_in`

filename of input model

for

`prediction`

task, this model will be applied to prediction datafor

`train`

task, training will be continued from this model**Note**: can be used only in CLI version

`output_model`

[🔗︎](#output_model), default =`LightGBM_model.txt`

, type = string, aliases:`model_output`

,`model_out`

filename of output model in training

**Note**: can be used only in CLI version

`saved_feature_importance_type`

[🔗︎](#saved_feature_importance_type), default =`0`

, type = intthe feature importance type in the saved model file

`0`

: count-based feature importance (numbers of splits are counted);`1`

: gain-based feature importance (values of gain are counted)**Note**: can be used only in CLI version

`snapshot_freq`

[🔗︎](#snapshot_freq), default =`-1`

, type = int, aliases:`save_period`

frequency of saving model file snapshot

set this to positive value to enable this function. For example, the model file will be snapshotted at each iteration if

`snapshot_freq=1`

**Note**: can be used only in CLI version

`use_quantized_grad`

[🔗︎](#use_quantized_grad), default =`false`

, type = boolwhether to use gradient quantization when training

enabling this will discretize (quantize) the gradients and hessians into bins of

`num_grad_quant_bins`

with quantized training, most arithmetics in the training process will be integer operations

gradient quantization can accelerate training, with little accuracy drop in most cases

**Note**: works only with`cpu`

and`cuda`

device type*New in version 4.0.0*

`num_grad_quant_bins`

[🔗︎](#num_grad_quant_bins), default =`4`

, type = intused only if

`use_quantized_grad=true`

number of bins to quantization gradients and hessians

with more bins, the quantized training will be closer to full precision training

**Note**: works only with`cpu`

and`cuda`

device type*New in version 4.0.0*

`quant_train_renew_leaf`

[🔗︎](#quant_train_renew_leaf), default =`false`

, type = boolused only if

`use_quantized_grad=true`

whether to renew the leaf values with original gradients when quantized training

renewing is very helpful for good quantized training accuracy for ranking objectives

**Note**: works only with`cpu`

and`cuda`

device type*New in version 4.0.0*

`stochastic_rounding`

[🔗︎](#stochastic_rounding), default =`true`

, type = boolused only if

`use_quantized_grad=true`

whether to use stochastic rounding in gradient quantization

**Note**: works only with`cpu`

and`cuda`

device type*New in version 4.0.0*


## IO Parameters[](#io-parameters)

### Dataset Parameters[](#dataset-parameters)

`linear_tree`

[🔗︎](#linear_tree), default =`false`

, type = bool, aliases:`linear_trees`

fit piecewise linear gradient boosting tree

tree splits are chosen in the usual way, but the model at each leaf is linear instead of constant

the linear model at each leaf includes all the numerical features in that leaf’s branch

the first tree has constant leaf values

categorical features are used for splits as normal but are not used in the linear models

missing values should not be encoded as

`0`

. Use`np.nan`

for Python,`NA`

for the CLI, and`NA`

,`NA_real_`

, or`NA_integer_`

for Rit is recommended to rescale data before training so that features have similar mean and standard deviation

**Note**: works only with`cpu`

,`gpu`

device type and`serial`

tree learner**Note**:`regression_l1`

objective is not supported with linear tree boosting**Note**: setting`linear_tree=true`

significantly increases the memory use of LightGBM**Note**: if you specify`monotone_constraints`

, constraints will be enforced when choosing the split points, but not when fitting the linear models on leaves

`max_bin`

[🔗︎](#max_bin), default =`255`

, type = int, aliases:`max_bins`

, constraints:`max_bin > 1`

max number of bins that feature values will be bucketed in

small number of bins may reduce training accuracy but may increase general power (deal with over-fitting)

LightGBM will auto compress memory according to

`max_bin`

. For example, LightGBM will use`uint8_t`

for feature value if`max_bin=255`


`max_bin_by_feature`

[🔗︎](#max_bin_by_feature), default =`None`

, type = multi-intmax number of bins for each feature

if not specified, will use

`max_bin`

for all features

`min_data_in_bin`

[🔗︎](#min_data_in_bin), default =`3`

, type = int, constraints:`min_data_in_bin > 0`

minimal number of data inside one bin

use this to avoid one-data-one-bin (potential over-fitting)


`bin_construct_sample_cnt`

[🔗︎](#bin_construct_sample_cnt), default =`200000`

, type = int, aliases:`subsample_for_bin`

, constraints:`bin_construct_sample_cnt > 0`

number of data that sampled to construct feature discrete bins

setting this to larger value will give better training result, but may increase data loading time

set this to larger value if data is very sparse

**Note**: don’t set this to small values, otherwise, you may encounter unexpected errors and poor accuracy

`data_random_seed`

[🔗︎](#data_random_seed), default =`1`

, type = int, aliases:`data_seed`

random seed for sampling data to construct histogram bins


`is_enable_sparse`

[🔗︎](#is_enable_sparse), default =`true`

, type = bool, aliases:`is_sparse`

,`enable_sparse`

,`sparse`

used to enable/disable sparse optimization


`enable_bundle`

[🔗︎](#enable_bundle), default =`true`

, type = bool, aliases:`is_enable_bundle`

,`bundle`

set this to

`false`

to disable Exclusive Feature Bundling (EFB), which is described in[LightGBM: A Highly Efficient Gradient Boosting Decision Tree](https://proceedings.neurips.cc/paper/2017/hash/6449f44a102fde848669bdd9eb6b76fa-Abstract.html)**Note**: disabling this may cause the slow training speed for sparse datasets

`use_missing`

[🔗︎](#use_missing), default =`true`

, type = boolset this to

`false`

to disable the special handle of missing value

`zero_as_missing`

[🔗︎](#zero_as_missing), default =`false`

, type = boolset this to

`true`

to treat all zero as missing values (including the unshown values in LibSVM / sparse matrices)set this to

`false`

to use`na`

for representing missing values

`feature_pre_filter`

[🔗︎](#feature_pre_filter), default =`true`

, type = boolset this to

`true`

(the default) to tell LightGBM to ignore the features that are unsplittable based on`min_data_in_leaf`

as dataset object is initialized only once and cannot be changed after that, you may need to set this to

`false`

when searching parameters with`min_data_in_leaf`

, otherwise features are filtered by`min_data_in_leaf`

firstly if you don’t reconstruct dataset object**Note**: setting this to`false`

may slow down the training

`pre_partition`

[🔗︎](#pre_partition), default =`false`

, type = bool, aliases:`is_pre_partition`

used for distributed learning (excluding the

`feature_parallel`

mode)`true`

if training data are pre-partitioned, and different machines use different partitions

`two_round`

[🔗︎](#two_round), default =`false`

, type = bool, aliases:`two_round_loading`

,`use_two_round_loading`

set this to

`true`

if data file is too big to fit in memoryby default, LightGBM will map data file to memory and load features from memory. This will provide faster data loading speed, but may cause run out of memory error when the data file is very big

**Note**: works only in case of loading data directly from text file

`header`

[🔗︎](#header), default =`false`

, type = bool, aliases:`has_header`

set this to

`true`

if input data has header**Note**: works only in case of loading data directly from text file

`label_column`

[🔗︎](#label_column), default =`""`

, type = int or string, aliases:`label`

used to specify the label column

use number for index, e.g.

`label=0`

means column_0 is the labeladd a prefix

`name:`

for column name, e.g.`label=name:is_click`

if omitted, the first column in the training data is used as the label

**Note**: works only in case of loading data directly from text file

`weight_column`

[🔗︎](#weight_column), default =`""`

, type = int or string, aliases:`weight`

used to specify the weight column

use number for index, e.g.

`weight=0`

means column_0 is the weightadd a prefix

`name:`

for column name, e.g.`weight=name:weight`

**Note**: works only in case of loading data directly from text file**Note**: index starts from`0`

and it doesn’t count the label column when passing type is`int`

, e.g. when label is column_0, and weight is column_1, the correct parameter is`weight=0`

**Note**: weights should be non-negative

`group_column`

[🔗︎](#group_column), default =`""`

, type = int or string, aliases:`group`

,`group_id`

,`query_column`

,`query`

,`query_id`

used to specify the query/group id column

use number for index, e.g.

`query=0`

means column_0 is the query idadd a prefix

`name:`

for column name, e.g.`query=name:query_id`

**Note**: works only in case of loading data directly from text file**Note**: data should be grouped by query_id, for more information, see[Query Data](#query-data)**Note**: index starts from`0`

and it doesn’t count the label column when passing type is`int`

, e.g. when label is column_0 and query_id is column_1, the correct parameter is`query=0`


`ignore_column`

[🔗︎](#ignore_column), default =`""`

, type = multi-int or string, aliases:`ignore_feature`

,`blacklist`

used to specify some ignoring columns in training

use number for index, e.g.

`ignore_column=0,1,2`

means column_0, column_1 and column_2 will be ignoredadd a prefix

`name:`

for column name, e.g.`ignore_column=name:c1,c2,c3`

means c1, c2 and c3 will be ignored**Note**: works only in case of loading data directly from text file**Note**: index starts from`0`

and it doesn’t count the label column when passing type is`int`

**Note**: despite the fact that specified columns will be completely ignored during the training, they still should have a valid format allowing LightGBM to load file successfully

`categorical_feature`

[🔗︎](#categorical_feature), default =`""`

, type = multi-int or string, aliases:`cat_feature`

,`categorical_column`

,`cat_column`

,`categorical_features`

used to specify categorical features

use number for index, e.g.

`categorical_feature=0,1,2`

means column_0, column_1 and column_2 are categorical featuresadd a prefix

`name:`

for column name, e.g.`categorical_feature=name:c1,c2,c3`

means c1, c2 and c3 are categorical features**Note**: all values will be cast to`int32`

(integer codes will be extracted from pandas categoricals in the Python-package)**Note**: index starts from`0`

and it doesn’t count the label column when passing type is`int`

**Note**: all values should be less than`Int32.MaxValue`

(2147483647)**Note**: using large values could be memory consuming. Tree decision rule works best when categorical features are presented by consecutive integers starting from zero**Note**: all negative values will be treated as**missing values****Note**: the output cannot be monotonically constrained with respect to a categorical feature**Note**: floating point numbers in categorical features will be rounded towards 0

`forcedbins_filename`

[🔗︎](#forcedbins_filename), default =`""`

, type = stringpath to a

`.json`

file that specifies bin upper bounds for some or all features`.json`

file should contain an array of objects, each containing the word`feature`

(integer feature index) and`bin_upper_bound`

(array of thresholds for binning)see

[this file](https://github.com/lightgbm-org/LightGBM/blob/master/examples/regression/forced_bins.json)as an example

`save_binary`

[🔗︎](#save_binary), default =`false`

, type = bool, aliases:`is_save_binary`

,`is_save_binary_file`

if

`true`

, LightGBM will save the dataset (including validation data) to a binary file. This speed ups the data loading for the next time**Note**:`init_score`

is not saved in binary file**Note**: can be used only in CLI version; for language-specific packages you can use the correspondent function

`precise_float_parser`

[🔗︎](#precise_float_parser), default =`false`

, type = booluse precise floating point number parsing for text parser (e.g. CSV, TSV, LibSVM input)

**Note**: setting this to`true`

may lead to much slower text parsing

`parser_config_file`

[🔗︎](#parser_config_file), default =`""`

, type = stringpath to a

`.json`

file that specifies customized parser initialized configurationsee

[lightgbm-transform](https://github.com/lightgbm-org/LightGBM-transform)for usage examples**Note**:`lightgbm-transform`

is not maintained by LightGBM’s maintainers. Bug reports or feature requests should go to[issues page](https://github.com/lightgbm-org/LightGBM-transform/issues)*New in version 4.0.0*


### Predict Parameters[](#predict-parameters)

`start_iteration_predict`

[🔗︎](#start_iteration_predict), default =`0`

, type = intused only in

`prediction`

taskused to specify from which iteration to start the prediction

`<= 0`

means from the first iteration

`num_iteration_predict`

[🔗︎](#num_iteration_predict), default =`-1`

, type = intused only in

`prediction`

taskused to specify how many trained iterations will be used in prediction

`<= 0`

means no limit

`predict_raw_score`

[🔗︎](#predict_raw_score), default =`false`

, type = bool, aliases:`is_predict_raw_score`

,`predict_rawscore`

,`raw_score`

used only in

`prediction`

taskset this to

`true`

to predict only the raw scoresset this to

`false`

to predict transformed scores

`predict_leaf_index`

[🔗︎](#predict_leaf_index), default =`false`

, type = bool, aliases:`is_predict_leaf_index`

,`leaf_index`

used only in

`prediction`

taskset this to

`true`

to predict with leaf index of all trees

`predict_contrib`

[🔗︎](#predict_contrib), default =`false`

, type = bool, aliases:`is_predict_contrib`

,`contrib`

used only in

`prediction`

taskset this to

`true`

to estimate[SHAP values](https://arxiv.org/abs/1706.06060), which represent how each feature contributes to each predictionproduces

`#features + 1`

values where the last value is the expected value of the model output over the training data**Note**: if you want to get more explanation for your model’s predictions using SHAP values like SHAP interaction values, you can install[shap package](https://github.com/shap)**Note**: unlike the shap package, with`predict_contrib`

we return a matrix with an extra column, where the last column is the expected value**Note**: this feature is not implemented for linear trees

`predict_disable_shape_check`

[🔗︎](#predict_disable_shape_check), default =`false`

, type = boolused only in

`prediction`

taskcontrol whether or not LightGBM raises an error when you try to predict on data with a different number of features than the training data

if

`false`

(the default), a fatal error will be raised if the number of features in the dataset you predict on differs from the number seen during trainingif

`true`

, LightGBM will attempt to predict on whatever data you provide. This is dangerous because you might get incorrect predictions, but you could use it in situations where it is difficult or expensive to generate some features and you are very confident that they were never chosen for splits in the model**Note**: be very careful setting this parameter to`true`


`pred_early_stop`

[🔗︎](#pred_early_stop), default =`false`

, type = boolused only in

`prediction`

taskused only in

`classification`

and`ranking`

applicationsused only for predicting normal or raw scores

if

`true`

, will use early-stopping to speed up the prediction. May affect the accuracy**Note**: cannot be used with`rf`

boosting type or custom objective function

`pred_early_stop_freq`

[🔗︎](#pred_early_stop_freq), default =`10`

, type = intused only in

`prediction`

task and if`pred_early_stop=true`

the frequency of checking early-stopping prediction


`pred_early_stop_margin`

[🔗︎](#pred_early_stop_margin), default =`10.0`

, type = doubleused only in

`prediction`

task and if`pred_early_stop=true`

the threshold of margin in early-stopping prediction


`output_result`

[🔗︎](#output_result), default =`LightGBM_predict_result.txt`

, type = string, aliases:`predict_result`

,`prediction_result`

,`predict_name`

,`prediction_name`

,`pred_name`

,`name_pred`

used only in

`prediction`

taskfilename of prediction result

**Note**: can be used only in CLI version


### Convert Parameters[](#convert-parameters)

`convert_model_language`

[🔗︎](#convert_model_language), default =`""`

, type = stringused only in

`convert_model`

taskonly

`cpp`

is supported yet; for conversion model to other languages consider using[m2cgen](https://github.com/BayesWitnesses/m2cgen)utilityif

`convert_model_language`

is set and`task=train`

, the model will be also converted**Note**: can be used only in CLI version

`convert_model`

[🔗︎](#convert_model), default =`gbdt_prediction.cpp`

, type = string, aliases:`convert_model_file`

used only in

`convert_model`

taskoutput filename of converted model

**Note**: can be used only in CLI version


## Objective Parameters[](#objective-parameters)

`objective_seed`

[🔗︎](#objective_seed), default =`5`

, type = intused only in

`rank_xendcg`

objectiverandom seed for objectives, if random process is needed


`num_class`

[🔗︎](#num_class), default =`1`

, type = int, aliases:`num_classes`

, constraints:`num_class > 0`

used only in

`multi-class`

classification application

`is_unbalance`

[🔗︎](#is_unbalance), default =`false`

, type = bool, aliases:`unbalance`

,`unbalanced_sets`

used only in

`binary`

and`multiclassova`

applicationsset this to

`true`

if training data are unbalanced**Note**: while enabling this should increase the overall performance metric of your model, it will also result in poor estimates of the individual class probabilities**Note**: this parameter cannot be used at the same time with`scale_pos_weight`

, choose only**one**of them

`scale_pos_weight`

[🔗︎](#scale_pos_weight), default =`1.0`

, type = double, constraints:`scale_pos_weight > 0.0`

used only in

`binary`

and`multiclassova`

applicationsweight of labels with positive class

**Note**: while enabling this should increase the overall performance metric of your model, it will also result in poor estimates of the individual class probabilities**Note**: this parameter cannot be used at the same time with`is_unbalance`

, choose only**one**of them

`sigmoid`

[🔗︎](#sigmoid), default =`1.0`

, type = double, constraints:`sigmoid > 0.0`

used only in

`binary`

and`multiclassova`

classification and in`lambdarank`

applicationsparameter for the sigmoid function


`boost_from_average`

[🔗︎](#boost_from_average), default =`true`

, type = boolused only in

`regression`

,`binary`

,`multiclassova`

and`cross-entropy`

applicationsadjusts initial score to the mean of labels for faster convergence


`reg_sqrt`

[🔗︎](#reg_sqrt), default =`false`

, type = boolused only in

`regression`

applicationused to fit

`sqrt(label)`

instead of original values and prediction result will be also automatically converted to`prediction^2`

might be useful in case of large-range labels


`alpha`

[🔗︎](#alpha), default =`0.9`

, type = double, constraints:`alpha > 0.0`

used only in

`huber`

and`quantile`

`regression`

applicationsparameter for

[Huber loss](https://en.wikipedia.org/wiki/Huber_loss)and[Quantile regression](https://en.wikipedia.org/wiki/Quantile_regression)

`fair_c`

[🔗︎](#fair_c), default =`1.0`

, type = double, constraints:`fair_c > 0.0`

used only in

`fair`

`regression`

applicationparameter for

[Fair loss](https://www.kaggle.com/c/allstate-claims-severity/discussion/24520)

`poisson_max_delta_step`

[🔗︎](#poisson_max_delta_step), default =`0.7`

, type = double, constraints:`poisson_max_delta_step > 0.0`

used only in

`poisson`

`regression`

applicationparameter for

[Poisson regression](https://en.wikipedia.org/wiki/Poisson_regression)to safeguard optimization

`tweedie_variance_power`

[🔗︎](#tweedie_variance_power), default =`1.5`

, type = double, constraints:`1.0 <= tweedie_variance_power < 2.0`

used only in

`tweedie`

`regression`

applicationused to control the variance of the tweedie distribution

set this closer to

`2`

to shift towards a**Gamma**distributionset this closer to

`1`

to shift towards a**Poisson**distribution

`lambdarank_truncation_level`

[🔗︎](#lambdarank_truncation_level), default =`30`

, type = int, constraints:`lambdarank_truncation_level > 0`

used only in

`lambdarank`

applicationcontrols the number of top-results to focus on during training, refer to “truncation level” in the Sec. 3 of

[LambdaMART paper](https://www.microsoft.com/en-us/research/publication/from-ranknet-to-lambdarank-to-lambdamart-an-overview/)this parameter is closely related to the desirable cutoff

`k`

in the metric**NDCG@k**that we aim at optimizing the ranker for. The optimal setting for this parameter is likely to be slightly higher than`k`

(e.g.,`k + 3`

) to include more pairs of documents to train on, but perhaps not too high to avoid deviating too much from the desired target metric**NDCG@k**

`lambdarank_norm`

[🔗︎](#lambdarank_norm), default =`true`

, type = boolused only in

`lambdarank`

applicationset this to

`true`

to normalize the lambdas for different queries, and improve the performance for unbalanced dataset this to

`false`

to enforce the original lambdarank algorithm

`label_gain`

[🔗︎](#label_gain), default =`0,1,3,7,15,31,63,...,2^30-1`

, type = multi-doubleused only in

`lambdarank`

applicationrelevant gain for labels. For example, the gain of label

`2`

is`3`

in case of default label gainsseparate by

`,`


`lambdarank_position_bias_regularization`

[🔗︎](#lambdarank_position_bias_regularization), default =`0.0`

, type = double, constraints:`lambdarank_position_bias_regularization >= 0.0`

used only in

`lambdarank`

application when positional information is provided and position bias is modeledlarger values reduce the inferred position bias factors

*New in version 4.1.0*


## Metric Parameters[](#metric-parameters)

`metric`

[🔗︎](#metric), default =`""`

, type = multi-enum, aliases:`metrics`

,`metric_types`

metric(s) to be evaluated on the evaluation set(s)

`""`

(empty string or not specified) means that metric corresponding to specified`objective`

will be used (this is possible only for pre-defined objective functions, otherwise no evaluation metric will be added)`"None"`

(string,**not**a`None`

value) means that no metric will be registered, aliases:`na`

,`null`

,`custom`

`l1`

, absolute loss, aliases:`mean_absolute_error`

,`mae`

,`regression_l1`

`l2`

, square loss, aliases:`mean_squared_error`

,`mse`

,`regression_l2`

,`regression`

`rmse`

, root square loss, aliases:`root_mean_squared_error`

,`l2_root`

`quantile`

,[Quantile regression](https://en.wikipedia.org/wiki/Quantile_regression)`mape`

,[MAPE loss](https://en.wikipedia.org/wiki/Mean_absolute_percentage_error), aliases:`mean_absolute_percentage_error`

`huber`

,[Huber loss](https://en.wikipedia.org/wiki/Huber_loss)`fair`

,[Fair loss](https://www.kaggle.com/c/allstate-claims-severity/discussion/24520)`poisson`

, negative log-likelihood for[Poisson regression](https://en.wikipedia.org/wiki/Poisson_regression)`gamma`

, negative log-likelihood for**Gamma**regression`gamma_deviance`

, residual deviance for**Gamma**regression`tweedie`

, negative log-likelihood for**Tweedie**regression`ndcg`

,[NDCG](https://en.wikipedia.org/wiki/Discounted_cumulative_gain#Normalized_DCG), aliases:`lambdarank`

,`rank_xendcg`

,`xendcg`

,`xe_ndcg`

,`xe_ndcg_mart`

,`xendcg_mart`

`map`

,[MAP](https://makarandtapaswi.wordpress.com/2012/07/02/intuition-behind-average-precision-and-map/), aliases:`mean_average_precision`

`auc`

,[AUC](https://en.wikipedia.org/wiki/Receiver_operating_characteristic#Area_under_the_curve)`average_precision`

,[average precision score](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html)`r2`

,[R-squared](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html)`binary_logloss`

,[log loss](https://en.wikipedia.org/wiki/Cross_entropy), aliases:`binary`

`binary_error`

, for one sample:`0`

for correct classification,`1`

for error classification`auc_mu`

,[AUC-mu](https://proceedings.mlr.press/v97/kleiman19a.html)`multi_logloss`

, log loss for multi-class classification, aliases:`multiclass`

,`softmax`

,`multiclassova`

,`multiclass_ova`

,`ova`

,`ovr`

`multi_error`

, error rate for multi-class classification`cross_entropy`

, cross-entropy (with optional linear weights), aliases:`xentropy`

`cross_entropy_lambda`

, “intensity-weighted” cross-entropy, aliases:`xentlambda`

`kullback_leibler`

,[Kullback-Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence), aliases:`kldiv`


support multiple metrics, separated by

`,`


`metric_freq`

[🔗︎](#metric_freq), default =`1`

, type = int, aliases:`output_freq`

, constraints:`metric_freq > 0`

frequency for metric output

**Note**: can be used only in CLI version

`is_provide_training_metric`

[🔗︎](#is_provide_training_metric), default =`false`

, type = bool, aliases:`training_metric`

,`is_training_metric`

,`train_metric`

set this to

`true`

to output metric result over training dataset**Note**: can be used only in CLI version

`eval_at`

[🔗︎](#eval_at), default =`1,2,3,4,5`

, type = multi-int, aliases:`ndcg_eval_at`

,`ndcg_at`

,`map_eval_at`

,`map_at`

`multi_error_top_k`

[🔗︎](#multi_error_top_k), default =`1`

, type = int, constraints:`multi_error_top_k > 0`

used only with

`multi_error`

metricthreshold for top-k multi-error metric

the error on each sample is

`0`

if the true class is among the top`multi_error_top_k`

predictions, and`1`

otherwisemore precisely, the error on a sample is

`0`

if there are at least`num_classes - multi_error_top_k`

predictions strictly less than the prediction on the true class

when

`multi_error_top_k=1`

this is equivalent to the usual multi-error metric

`auc_mu_weights`

[🔗︎](#auc_mu_weights), default =`None`

, type = multi-doubleused only with

`auc_mu`

metriclist representing flattened matrix (in row-major order) giving loss weights for classification errors

list should have

`n * n`

elements, where`n`

is the number of classesthe matrix co-ordinate

`[i, j]`

should correspond to the`i * n + j`

-th element of the listif not specified, will use equal weights for all classes



## Network Parameters[](#network-parameters)

`num_machines`

[🔗︎](#num_machines), default =`1`

, type = int, aliases:`num_machine`

, constraints:`num_machines > 0`

the number of machines for distributed learning application

this parameter is needed to be set in both

**socket**and**MPI**versions

`local_listen_port`

[🔗︎](#local_listen_port), default =`12400 (random for Dask-package)`

, type = int, aliases:`local_port`

,`port`

, constraints:`local_listen_port > 0`

TCP listen port for local machines

**Note**: don’t forget to allow this port in firewall settings before training

`time_out`

[🔗︎](#time_out), default =`120`

, type = int, constraints:`time_out > 0`

socket time-out in minutes


`machine_list_filename`

[🔗︎](#machine_list_filename), default =`""`

, type = string, aliases:`machine_list_file`

,`machine_list`

,`mlist`

path of file that lists machines for this distributed learning application

each line contains one IP and one port for one machine. The format is

`ip port`

(space as a separator)**Note**: can be used only in CLI version

`machines`

[🔗︎](#machines), default =`""`

, type = string, aliases:`workers`

,`nodes`

list of machines in the following format:

`ip1:port1,ip2:port2`



## GPU Parameters[](#gpu-parameters)

`gpu_platform_id`

[🔗︎](#gpu_platform_id), default =`-1`

, type = intused only with

`gpu`

device typeOpenCL platform ID. Usually each GPU vendor exposes one OpenCL platform

`-1`

means the system-wide default platform**Note**: refer to[GPU Targets](./GPU-Targets.html#query-opencl-devices-in-your-system)for more details

`gpu_device_id`

[🔗︎](#gpu_device_id), default =`-1`

, type = intOpenCL device ID in the specified platform or CUDA device ID. Each GPU in the selected platform has a unique device ID

`-1`

means the default device in the selected platformin multi-GPU case (

`num_gpu>1`

) means ID of the master GPU**Note**: refer to[GPU Targets](./GPU-Targets.html#query-opencl-devices-in-your-system)for more details

`gpu_device_id_list`

[🔗︎](#gpu_device_id_list), default =`""`

, type = stringlist of CUDA device IDs

**Note**: can be used only in CUDA implementation (`device_type="cuda"`

) and when`num_gpu>1`

if empty, the devices with the smallest IDs will be used


`gpu_use_dp`

[🔗︎](#gpu_use_dp), default =`false`

, type = boolset this to

`true`

to use double precision math on GPU (by default single precision is used)**Note**: can be used only in OpenCL implementation (`device_type="gpu"`

), in CUDA implementation only double precision is currently supported

`num_gpu`

[🔗︎](#num_gpu), default =`1`

, type = int, constraints:`num_gpu > 0`

number of GPUs used for training in this node

**Note**: can be used only in CUDA implementation (`device_type="cuda"`

)if

`0`

, only 1 GPU will be usedused in both single-machine and distributed learning applications

in distributed learning application, each machine can use different number of GPUs



## Others[](#others)

### Continued Training with Input Score[](#continued-training-with-input-score)

LightGBM supports continued training with initial scores. It uses an additional file to store these initial scores, like the following:

```
0.5
-0.1
0.9
...
```

It means the initial score of the first data row is `0.5`

, second is `-0.1`

, and so on.
The initial score file corresponds with data file line by line, and has per score per line.

If the name of data file is `train.txt`

, the initial score file should be named as `train.txt.init`

and placed in the same folder as the data file.
In this case, LightGBM will auto load initial score file if it exists.

If binary data files exist for raw data file `train.txt`

, for example in the name `train.txt.bin`

, then the initial score file should be named as `train.txt.bin.init`

.

### Weight Data[](#weight-data)

LightGBM supports weighted training. It uses an additional file to store weight data, like the following:

```
1.0
0.5
0.8
...
```

It means the weight of the first data row is `1.0`

, second is `0.5`

, and so on. Weights should be non-negative.

The weight file corresponds with data file line by line, and has per weight per line.

And if the name of data file is `train.txt`

, the weight file should be named as `train.txt.weight`

and placed in the same folder as the data file.
In this case, LightGBM will load the weight file automatically if it exists.

Also, you can include weight column in your data file.
Please refer to the `weight_column`

[parameter](#weight_column) in above.

### Query Data[](#query-data)

For learning to rank, it needs query information for training data.

LightGBM uses an additional file to store query data, like the following:

```
27
18
67
...
```

For wrapper libraries like in Python and R, this information can also be provided as an array-like via the Dataset parameter `group`

.

```
[27, 18, 67, ...]
```

For example, if you have a 112-document dataset with `group = [27, 18, 67]`

, that means that you have 3 groups, where the first 27 records are in the first group, records 28-45 are in the second group, and records 46-112 are in the third group.

**Note**: data should be ordered by the query.

If the name of data file is `train.txt`

, the query file should be named as `train.txt.query`

and placed in the same folder as the data file.
In this case, LightGBM will load the query file automatically if it exists.

Also, you can include query/group id column in your data file.
Please refer to the `group_column`

[parameter](#group_column) in above.

---

## Source: https://lightgbm.readthedocs.io/en/latest/Parameters-Tuning.html

# Parameters Tuning[](#parameters-tuning)

This page contains parameters tuning guides for different scenarios.

**List of other helpful links**

## Tune Parameters for the Leaf-wise (Best-first) Tree[](#tune-parameters-for-the-leaf-wise-best-first-tree)

LightGBM uses the [leaf-wise](./Features.html#leaf-wise-best-first-tree-growth) tree growth algorithm, while many other popular tools use depth-wise tree growth.
Compared with depth-wise growth, the leaf-wise algorithm can converge much faster.
However, the leaf-wise growth may be over-fitting if not used with the appropriate parameters.

To get good results using a leaf-wise tree, these are some important parameters:

`num_leaves`

. This is the main parameter to control the complexity of the tree model. Theoretically, we can set`num_leaves = 2^(max_depth)`

to obtain the same number of leaves as depth-wise tree. However, this simple conversion is not good in practice. A leaf-wise tree is typically much deeper than a depth-wise tree for a fixed number of leaves. Unconstrained depth can induce over-fitting. Thus, when trying to tune the`num_leaves`

, we should let it be smaller than`2^(max_depth)`

. For example, when the`max_depth=7`

the depth-wise tree can get good accuracy, but setting`num_leaves`

to`127`

may cause over-fitting, and setting it to`70`

or`80`

may get better accuracy than depth-wise.`min_data_in_leaf`

. This is a very important parameter to prevent over-fitting in a leaf-wise tree. Its optimal value depends on the number of training samples and`num_leaves`

. Setting it to a large value can avoid growing too deep a tree, but may cause under-fitting. In practice, setting it to hundreds or thousands is enough for a large dataset.`max_depth`

. You also can use`max_depth`

to limit the tree depth explicitly. If you set`max_depth`

, also explicitly set`num_leaves`

to some value`<= 2^max_depth`

.

## For Faster Speed[](#for-faster-speed)

### Add More Computational Resources[](#add-more-computational-resources)

On systems where it is available, LightGBM uses OpenMP to parallelize many operations. The maximum number of threads used by LightGBM is controlled by the parameter `num_threads`

. By default, this will defer to the default behavior of OpenMP (one thread per real CPU core or the value in environment variable `OMP_NUM_THREADS`

, if it is set). For best performance, set this to the number of **real** CPU cores available.

You might be able to achieve faster training by moving to a machine with more available CPU cores.

Using distributed (multi-machine) training might also reduce training time. See the [Distributed Learning Guide](./Parallel-Learning-Guide.html) for details.

### Use a GPU-enabled version of LightGBM[](#use-a-gpu-enabled-version-of-lightgbm)

You might find that training is faster using a GPU-enabled build of LightGBM. See the [GPU Tutorial](./GPU-Tutorial.html) for details.

### Grow Shallower Trees[](#grow-shallower-trees)

The total training time for LightGBM increases with the total number of tree nodes added. LightGBM comes with several parameters that can be used to control the number of nodes per tree.

The suggestions below will speed up training, but might hurt training accuracy.

#### Decrease `max_depth`

[](#decrease-max-depth)

This parameter is an integer that controls the maximum distance between the root node of each tree and a leaf node. Decrease `max_depth`

to reduce training time.

#### Decrease `num_leaves`

[](#decrease-num-leaves)

LightGBM adds nodes to trees based on the gain from adding that node, regardless of depth. This figure from [the feature documentation](./Features.html#leaf-wise-best-first-tree-growth) illustrates the process.

Because of this growth strategy, it isn’t straightforward to use `max_depth`

alone to limit the complexity of trees. The `num_leaves`

parameter sets the maximum number of nodes per tree. Decrease `num_leaves`

to reduce training time.

#### Increase `min_gain_to_split`

[](#increase-min-gain-to-split)

When adding a new tree node, LightGBM chooses the split point that has the largest gain. Gain is basically the reduction in training loss that results from adding a split point. By default, LightGBM sets `min_gain_to_split`

to 0.0, which means “there is no improvement that is too small”. However, in practice you might find that very small improvements in the training loss don’t have a meaningful impact on the generalization error of the model. Increase `min_gain_to_split`

to reduce training time.

#### Increase `min_data_in_leaf`

and `min_sum_hessian_in_leaf`

[](#increase-min-data-in-leaf-and-min-sum-hessian-in-leaf)

Depending on the size of the training data and the distribution of features, it’s possible for LightGBM to add tree nodes that only describe a small number of observations. In the most extreme case, consider the addition of a tree node that only a single observation from the training data falls into. This is very unlikely to generalize well, and probably is a sign of overfitting.

This can be prevented indirectly with parameters like `max_depth`

and `num_leaves`

, but LightGBM also offers parameters to help you directly avoid adding these overly-specific tree nodes.

`min_data_in_leaf`

: Minimum number of observations that must fall into a tree node for it to be added.`min_sum_hessian_in_leaf`

: Minimum sum of the Hessian (second derivative of the objective function evaluated for each observation) for observations in a leaf. For some regression objectives, this is just the minimum number of records that have to fall into each node. For classification objectives, it represents a sum over a distribution of probabilities. See[this Stack Overflow answer](https://stats.stackexchange.com/questions/317073/explanation-of-min-child-weight-in-xgboost-algorithm)for a good description of how to reason about values of this parameter.

### Grow Less Trees[](#grow-less-trees)

#### Decrease `num_iterations`

[](#decrease-num-iterations)

The `num_iterations`

parameter controls the number of boosting rounds that will be performed. Since LightGBM uses decision trees as the learners, this can also be thought of as “number of trees”.

If you try changing `num_iterations`

, change the `learning_rate`

as well. `learning_rate`

will not have any impact on training time, but it will impact the training accuracy. As a general rule, if you reduce `num_iterations`

, you should increase `learning_rate`

.

Choosing the right value of `num_iterations`

and `learning_rate`

is highly dependent on the data and objective, so these parameters are often chosen from a set of possible values through hyperparameter tuning.

Decrease `num_iterations`

to reduce training time.

#### Use Early Stopping[](#use-early-stopping)

If early stopping is enabled, after each boosting round the model’s training accuracy is evaluated against a validation set that contains data not available to the training process. That accuracy is then compared to the accuracy as of the previous boosting round. If the model’s accuracy fails to improve for some number of consecutive rounds, LightGBM stops the training process.

That “number of consecutive rounds” is controlled by the parameter `early_stopping_round`

. For example, `early_stopping_round=1`

says “the first time accuracy on the validation set does not improve, stop training”.

Set `early_stopping_round`

and provide a validation set to possibly reduce training time.

### Consider Fewer Splits[](#consider-fewer-splits)

The parameters described in previous sections control how many trees are constructed and how many nodes are constructed per tree. Training time can be further reduced by reducing the amount of time needed to add a tree node to the model.

The suggestions below will speed up training, but might hurt training accuracy.

#### Enable Feature Pre-Filtering When Creating Dataset[](#enable-feature-pre-filtering-when-creating-dataset)

By default, when a LightGBM `Dataset`

object is constructed, some features will be filtered out based on the value of `min_data_in_leaf`

.

For a simple example, consider a 1000-observation dataset with a feature called `feature_1`

. `feature_1`

takes on only two values: 25.0 (995 observations) and 50.0 (5 observations). If `min_data_in_leaf = 10`

, there is no split for this feature which will result in a valid split at least one of the leaf nodes will only have 5 observations.

Instead of reconsidering this feature and then ignoring it every iteration, LightGBM filters this feature out at before training, when the `Dataset`

is constructed.

If this default behavior has been overridden by setting `feature_pre_filter=False`

, set `feature_pre_filter=True`

to reduce training time.

#### Decrease `max_bin`

or `max_bin_by_feature`

When Creating Dataset[](#decrease-max-bin-or-max-bin-by-feature-when-creating-dataset)

LightGBM training [buckets continuous features into discrete bins](./Features.html#optimization-in-speed-and-memory-usage) to improve training speed and reduce memory requirements for training. This binning is done one time during `Dataset`

construction. The number of splits considered when adding a node is `O(#feature * #bin)`

, so reducing the number of bins per feature can reduce the number of splits that need to be evaluated.

`max_bin`

is controls the maximum number of bins that features will bucketed into. It is also possible to set this maximum feature-by-feature, by passing `max_bin_by_feature`

.

Reduce `max_bin`

or `max_bin_by_feature`

to reduce training time.

#### Increase `min_data_in_bin`

When Creating Dataset[](#increase-min-data-in-bin-when-creating-dataset)

Some bins might contain a small number of observations, which might mean that the effort of evaluating that bin’s boundaries as possible split points isn’t likely to change the final model very much. You can control the granularity of the bins by setting `min_data_in_bin`

.

Increase `min_data_in_bin`

to reduce training time.

#### Decrease `feature_fraction`

[](#decrease-feature-fraction)

By default, LightGBM considers all features in a `Dataset`

during the training process. This behavior can be changed by setting `feature_fraction`

to a value `> 0`

and `<= 1.0`

. Setting `feature_fraction`

to `0.5`

, for example, tells LightGBM to randomly select `50%`

of features at the beginning of constructing each tree. This reduces the total number of splits that have to be evaluated to add each tree node.

Decrease `feature_fraction`

to reduce training time.

#### Decrease `max_cat_threshold`

[](#decrease-max-cat-threshold)

LightGBM uses a [custom approach for finding optimal splits for categorical features](./Advanced-Topics.html#categorical-feature-support). In this process, LightGBM explores splits that break a categorical feature into two groups. These are sometimes called “k-vs.-rest” splits. Higher `max_cat_threshold`

values correspond to more split points and larger possible group sizes to search.

Decrease `max_cat_threshold`

to reduce training time.

### Use Less Data[](#use-less-data)

#### Use Bagging[](#use-bagging)

By default, LightGBM uses all observations in the training data for each iteration. It is possible to instead tell LightGBM to randomly sample the training data. This process of training over multiple random samples without replacement is called “bagging”.

Set `bagging_freq`

to an integer greater than 0 to control how often a new sample is drawn. Set `bagging_fraction`

to a value `> 0.0`

and `< 1.0`

to control the size of the sample. For example, `{"bagging_freq": 5, "bagging_fraction": 0.75}`

tells LightGBM “re-sample without replacement every 5 iterations, and draw samples of 75% of the training data”.

Decrease `bagging_fraction`

to reduce training time.

### Save Constructed Datasets with `save_binary`

[](#save-constructed-datasets-with-save-binary)

This only applies to the LightGBM CLI. If you pass parameter `save_binary`

, the training dataset and all validations sets will be saved in a binary format understood by LightGBM. This can speed up training next time, because binning and other work done when constructing a `Dataset`

does not have to be re-done.

## For Better Accuracy[](#for-better-accuracy)

Use large

`max_bin`

(may be slower)Use small

`learning_rate`

with large`num_iterations`

Use large

`num_leaves`

(may cause over-fitting)Use bigger training data

Try

`dart`


## Deal with Over-fitting[](#deal-with-over-fitting)

Use small

`max_bin`

Use small

`num_leaves`

Use

`min_data_in_leaf`

and`min_sum_hessian_in_leaf`

Use bagging by set

`bagging_fraction`

and`bagging_freq`

Use feature sub-sampling by set

`feature_fraction`

Use bigger training data

Try

`lambda_l1`

,`lambda_l2`

and`min_gain_to_split`

for regularizationTry

`max_depth`

to avoid growing deep treeTry

`extra_trees`

Try increasing

`path_smooth`

---

## Source: https://lightgbm.readthedocs.io/en/latest/C-API.html

# C API[](#c-api)

**Copyright**Copyright (c) 2016-2026 Microsoft Corporation. All rights reserved. Copyright (c) 2016-2026 The LightGBM developers. All rights reserved. Licensed under the MIT License. See LICENSE file in the project root for license information.


Note

To avoid type conversion on large data, the most of our exposed interface supports both float32 and float64, except the following:

gradient and Hessian;

current score for training and validation data.


Defines

-
C_API_DTYPE_FLOAT32 (0)
[](#c.C_API_DTYPE_FLOAT32) float32 (single precision float).


-
C_API_DTYPE_FLOAT64 (1)
[](#c.C_API_DTYPE_FLOAT64) float64 (double precision float).


-
C_API_DTYPE_INT32 (2)
[](#c.C_API_DTYPE_INT32) int32.


-
C_API_DTYPE_INT64 (3)
[](#c.C_API_DTYPE_INT64) int64.


-
C_API_FEATURE_IMPORTANCE_GAIN (1)
[](#c.C_API_FEATURE_IMPORTANCE_GAIN) Gain type of feature importance.


-
C_API_FEATURE_IMPORTANCE_SPLIT (0)
[](#c.C_API_FEATURE_IMPORTANCE_SPLIT) Split type of feature importance.


-
C_API_MATRIX_TYPE_CSC (1)
[](#c.C_API_MATRIX_TYPE_CSC) CSC sparse matrix type.


-
C_API_MATRIX_TYPE_CSR (0)
[](#c.C_API_MATRIX_TYPE_CSR) CSR sparse matrix type.


-
C_API_PREDICT_CONTRIB (3)
[](#c.C_API_PREDICT_CONTRIB) Predict feature contributions (SHAP values).


-
C_API_PREDICT_LEAF_INDEX (2)
[](#c.C_API_PREDICT_LEAF_INDEX) Predict leaf index.


-
C_API_PREDICT_NORMAL (0)
[](#c.C_API_PREDICT_NORMAL) Normal prediction, with transform (if needed).


-
C_API_PREDICT_RAW_SCORE (1)
[](#c.C_API_PREDICT_RAW_SCORE) Predict raw score.


-
INLINE_FUNCTION inline
[](#c.INLINE_FUNCTION) Inline specifier.


-
THREAD_LOCAL thread_local
[](#c.THREAD_LOCAL) Thread local specifier.


Typedefs

-
typedef void *BoosterHandle
[](#c.BoosterHandle) Handle of booster.


-
typedef void *ByteBufferHandle
[](#c.ByteBufferHandle) Handle of ByteBuffer.


-
typedef void *DatasetHandle
[](#c.DatasetHandle) Handle of dataset.


-
typedef void *FastConfigHandle
[](#c.FastConfigHandle) Handle of FastConfig.


Functions

-
static char *LastErrorMsg()
[](#c.LastErrorMsg) Handle of error message.

- Returns:
Error message



-
LIGHTGBM_C_EXPORT int LGBM_BoosterAddValidData(
[BoosterHandle](#c.BoosterHandle)handle, const[DatasetHandle](#c.DatasetHandle)valid_data)[](#c.LGBM_BoosterAddValidData) Add new validation data to booster.

- Parameters:
**handle**– Handle of booster**valid_data**– Validation dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterCalcNumPredict(
[BoosterHandle](#c.BoosterHandle)handle, int num_row, int predict_type, int start_iteration, int num_iteration, int64_t *out_len)[](#c.LGBM_BoosterCalcNumPredict) Get number of predictions.

- Parameters:
**handle**– Handle of booster**num_row**– Number of rows**predict_type**– What should be predicted`C_API_PREDICT_NORMAL`

: normal prediction, with transform (if needed);`C_API_PREDICT_RAW_SCORE`

: raw score;`C_API_PREDICT_LEAF_INDEX`

: leaf index;`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iterations for prediction, <= 0 means no limit**out_len**–**[out]**Length of prediction

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterCreate(const
[DatasetHandle](#c.DatasetHandle)train_data, const char *parameters,[BoosterHandle](#c.BoosterHandle)*out)[](#c.LGBM_BoosterCreate) Create a new boosting learner.

- Parameters:
**train_data**– Training dataset**parameters**– Parameters in format ‘key1=value1 key2=value2’**out**–**[out]**Handle of created booster

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterCreateFromModelfile(const char *filename, int *out_num_iterations,
[BoosterHandle](#c.BoosterHandle)*out)[](#c.LGBM_BoosterCreateFromModelfile) Load an existing booster from model file.

- Parameters:
**filename**– Filename of model**out_num_iterations**–**[out]**Number of iterations of this booster**out**–**[out]**Handle of created booster

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterDumpModel(
[BoosterHandle](#c.BoosterHandle)handle, int start_iteration, int num_iteration, int feature_importance_type, int64_t buffer_len, int64_t *out_len, char *out_str)[](#c.LGBM_BoosterDumpModel) Dump model to JSON.

- Parameters:
**handle**– Handle of booster**start_iteration**– Start index of the iteration that should be dumped**num_iteration**– Index of the iteration that should be dumped, <= 0 means dump all**feature_importance_type**– Type of feature importance, can be`C_API_FEATURE_IMPORTANCE_SPLIT`

or`C_API_FEATURE_IMPORTANCE_GAIN`

**buffer_len**– String buffer length, if`buffer_len < out_len`

, you should re-allocate buffer**out_len**–**[out]**Actual output length**out_str**–**[out]**JSON format string of model, should pre-allocate memory

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterFeatureImportance(
[BoosterHandle](#c.BoosterHandle)handle, int num_iteration, int importance_type, double *out_results)[](#c.LGBM_BoosterFeatureImportance) Get model feature importance.

- Parameters:
**handle**– Handle of booster**num_iteration**– Number of iterations for which feature importance is calculated, <= 0 means use all**importance_type**– Method of importance calculation:`C_API_FEATURE_IMPORTANCE_SPLIT`

: result contains numbers of times the feature is used in a model;`C_API_FEATURE_IMPORTANCE_GAIN`

: result contains total gains of splits which use the feature

**out_results**–**[out]**Result array with feature importance

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterFree(
[BoosterHandle](#c.BoosterHandle)handle)[](#c.LGBM_BoosterFree) Free space for booster.

- Parameters:
**handle**– Handle of booster to be freed

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterFreePredictSparse(void *indptr, int32_t *indices, void *data, int indptr_type, int data_type)
[](#c.LGBM_BoosterFreePredictSparse) Method corresponding to

`LGBM_BoosterPredictSparseOutput`

to free the allocated data.- Parameters:
**indptr**– Pointer to output row headers or column headers to be deallocated**indices**– Pointer to sparse indices to be deallocated**data**– Pointer to sparse data space to be deallocated**indptr_type**– Type of`indptr`

, can be`C_API_DTYPE_INT32`

or`C_API_DTYPE_INT64`

**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`


- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetCurrentIteration(
[BoosterHandle](#c.BoosterHandle)handle, int *out_iteration)[](#c.LGBM_BoosterGetCurrentIteration) Get index of the current boosting iteration.

- Parameters:
**handle**– Handle of booster**out_iteration**–**[out]**Index of the current boosting iteration

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetEval(
[BoosterHandle](#c.BoosterHandle)handle, int data_idx, int *out_len, double *out_results)[](#c.LGBM_BoosterGetEval) Get evaluation for training data and validation data.

Note

You should call

`LGBM_BoosterGetEvalNames`

first to get the names of evaluation metrics.You should pre-allocate memory for

`out_results`

, you can get its length by`LGBM_BoosterGetEvalCounts`

.

- Parameters:
**handle**– Handle of booster**data_idx**– Index of data, 0: training data, 1: 1st validation data, 2: 2nd validation data and so on**out_len**–**[out]**Length of output result**out_results**–**[out]**Array with evaluation results

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetEvalCounts(
[BoosterHandle](#c.BoosterHandle)handle, int *out_len)[](#c.LGBM_BoosterGetEvalCounts) Get number of evaluation metrics.

- Parameters:
**handle**– Handle of booster**out_len**–**[out]**Total number of evaluation metrics

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetEvalNames(
[BoosterHandle](#c.BoosterHandle)handle, const int len, int *out_len, const size_t buffer_len, size_t *out_buffer_len, char **out_strs)[](#c.LGBM_BoosterGetEvalNames) Get names of evaluation metrics.

- Parameters:
**handle**– Handle of booster**len**– Number of`char*`

pointers stored at`out_strs`

. If smaller than the max size, only this many strings are copied**out_len**–**[out]**Total number of evaluation metrics**buffer_len**– Size of pre-allocated strings. Content is copied up to`buffer_len - 1`

and null-terminated**out_buffer_len**–**[out]**String sizes required to do the full string copies**out_strs**–**[out]**Names of evaluation metrics, should pre-allocate memory

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetFeatureNames(
[BoosterHandle](#c.BoosterHandle)handle, const int len, int *out_len, const size_t buffer_len, size_t *out_buffer_len, char **out_strs)[](#c.LGBM_BoosterGetFeatureNames) Get names of features.

- Parameters:
**handle**– Handle of booster**len**– Number of`char*`

pointers stored at`out_strs`

. If smaller than the max size, only this many strings are copied**out_len**–**[out]**Total number of features**buffer_len**– Size of pre-allocated strings. Content is copied up to`buffer_len - 1`

and null-terminated**out_buffer_len**–**[out]**String sizes required to do the full string copies**out_strs**–**[out]**Names of features, should pre-allocate memory

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetLeafValue(
[BoosterHandle](#c.BoosterHandle)handle, int tree_idx, int leaf_idx, double *out_val)[](#c.LGBM_BoosterGetLeafValue) Get leaf value.

- Parameters:
**handle**– Handle of booster**tree_idx**– Index of tree**leaf_idx**– Index of leaf**out_val**–**[out]**Output result from the specified leaf

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetLinear(
[BoosterHandle](#c.BoosterHandle)handle, int *out)[](#c.LGBM_BoosterGetLinear) Get int representing whether booster is fitting linear trees.

- Parameters:
**handle**– Handle of booster**out**–**[out]**The address to hold linear trees indicator

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetLoadedParam(
[BoosterHandle](#c.BoosterHandle)handle, int64_t buffer_len, int64_t *out_len, char *out_str)[](#c.LGBM_BoosterGetLoadedParam) Get parameters as JSON string.

- Parameters:
**handle**– Handle of booster**buffer_len**– Allocated space for string**out_len**–**[out]**Actual size of string**out_str**–**[out]**JSON string containing parameters

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetLowerBoundValue(
[BoosterHandle](#c.BoosterHandle)handle, double *out_results)[](#c.LGBM_BoosterGetLowerBoundValue) Get model lower bound value.

- Parameters:
**handle**– Handle of booster**out_results**–**[out]**Result pointing to min value

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetNumClasses(
[BoosterHandle](#c.BoosterHandle)handle, int *out_len)[](#c.LGBM_BoosterGetNumClasses) Get number of classes.

- Parameters:
**handle**– Handle of booster**out_len**–**[out]**Number of classes

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetNumFeature(
[BoosterHandle](#c.BoosterHandle)handle, int *out_len)[](#c.LGBM_BoosterGetNumFeature) Get number of features.

- Parameters:
**handle**– Handle of booster**out_len**–**[out]**Total number of features

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetNumPredict(
[BoosterHandle](#c.BoosterHandle)handle, int data_idx, int64_t *out_len)[](#c.LGBM_BoosterGetNumPredict) Get number of predictions for training data and validation data (this can be used to support customized evaluation functions).

- Parameters:
**handle**– Handle of booster**data_idx**– Index of data, 0: training data, 1: 1st validation data, 2: 2nd validation data and so on**out_len**–**[out]**Number of predictions

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetPredict(
[BoosterHandle](#c.BoosterHandle)handle, int data_idx, int64_t *out_len, double *out_result)[](#c.LGBM_BoosterGetPredict) Get prediction for training data and validation data.

Note

You should pre-allocate memory for

`out_result`

, its length is equal to`num_class * num_data`

.- Parameters:
**handle**– Handle of booster**data_idx**– Index of data, 0: training data, 1: 1st validation data, 2: 2nd validation data and so on**out_len**–**[out]**Length of output result**out_result**–**[out]**Pointer to array with predictions

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterGetUpperBoundValue(
[BoosterHandle](#c.BoosterHandle)handle, double *out_results)[](#c.LGBM_BoosterGetUpperBoundValue) Get model upper bound value.

- Parameters:
**handle**– Handle of booster**out_results**–**[out]**Result pointing to max value

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterLoadModelFromString(const char *model_str, int *out_num_iterations,
[BoosterHandle](#c.BoosterHandle)*out)[](#c.LGBM_BoosterLoadModelFromString) Load an existing booster from string.

- Parameters:
**model_str**– Model string**out_num_iterations**–**[out]**Number of iterations of this booster**out**–**[out]**Handle of created booster

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterMerge(
[BoosterHandle](#c.BoosterHandle)handle,[BoosterHandle](#c.BoosterHandle)other_handle)[](#c.LGBM_BoosterMerge) Merge model from

`other_handle`

into`handle`

.- Parameters:
**handle**– Handle of booster, will merge another booster into this one**other_handle**– Other handle of booster

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterNumberOfTotalModel(
[BoosterHandle](#c.BoosterHandle)handle, int *out_models)[](#c.LGBM_BoosterNumberOfTotalModel) Get number of weak sub-models.

- Parameters:
**handle**– Handle of booster**out_models**–**[out]**Number of weak sub-models

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterNumModelPerIteration(
[BoosterHandle](#c.BoosterHandle)handle, int *out_tree_per_iteration)[](#c.LGBM_BoosterNumModelPerIteration) Get number of trees per iteration.

- Parameters:
**handle**– Handle of booster**out_tree_per_iteration**–**[out]**Number of trees per iteration

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForArrow(
[BoosterHandle](#c.BoosterHandle)handle, int64_t n_chunks, const struct ArrowArray *chunks, const struct ArrowSchema *schema, int predict_type, int start_iteration, int num_iteration, const char *parameter, int64_t *out_len, double *out_result)[](#c.LGBM_BoosterPredictForArrow) Make prediction for a new dataset.

Note

You should pre-allocate memory for

`out_result`

:for normal and raw score, its length is equal to

`num_class * num_data`

;for leaf index, its length is equal to

`num_class * num_data * num_iteration`

;for feature contributions, its length is equal to

`num_class * num_data * (num_feature + 1)`

.

- Parameters:
**handle**– Handle of booster**n_chunks**– The number of Arrow arrays passed to this function**chunks**– Pointer to the list of Arrow arrays**schema**– Pointer to the schema of all Arrow arrays**predict_type**– What should be predicted`C_API_PREDICT_NORMAL`

: normal prediction, with transform (if needed);`C_API_PREDICT_RAW_SCORE`

: raw score;`C_API_PREDICT_LEAF_INDEX`

: leaf index;`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iteration for prediction, <= 0 means no limit**parameter**– Other parameters for prediction, e.g. early stopping for prediction**out_len**–**[out]**Length of output result**out_result**–**[out]**Pointer to array with predictions

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForCSC(
[BoosterHandle](#c.BoosterHandle)handle, const void *col_ptr, int col_ptr_type, const int32_t *indices, const void *data, int data_type, int64_t ncol_ptr, int64_t nelem, int64_t num_row, int predict_type, int start_iteration, int num_iteration, const char *parameter, int64_t *out_len, double *out_result)[](#c.LGBM_BoosterPredictForCSC) Make prediction for a new dataset in CSC format.

Note

You should pre-allocate memory for

`out_result`

:for normal and raw score, its length is equal to

`num_class * num_data`

;for leaf index, its length is equal to

`num_class * num_data * num_iteration`

;for feature contributions, its length is equal to

`num_class * num_data * (num_feature + 1)`

.

- Parameters:
**handle**– Handle of booster**col_ptr**– Pointer to column headers**col_ptr_type**– Type of`col_ptr`

, can be`C_API_DTYPE_INT32`

or`C_API_DTYPE_INT64`

**indices**– Pointer to row indices**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**ncol_ptr**– Number of columns in the matrix + 1**nelem**– Number of nonzero elements in the matrix**num_row**– Number of rows**predict_type**– What should be predicted`C_API_PREDICT_NORMAL`

: normal prediction, with transform (if needed);`C_API_PREDICT_RAW_SCORE`

: raw score;`C_API_PREDICT_LEAF_INDEX`

: leaf index;`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iteration for prediction, <= 0 means no limit**parameter**– Other parameters for prediction, e.g. early stopping for prediction**out_len**–**[out]**Length of output result**out_result**–**[out]**Pointer to array with predictions

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForCSR(
[BoosterHandle](#c.BoosterHandle)handle, const void *indptr, int indptr_type, const int32_t *indices, const void *data, int data_type, int64_t nindptr, int64_t nelem, int64_t num_col, int predict_type, int start_iteration, int num_iteration, const char *parameter, int64_t *out_len, double *out_result)[](#c.LGBM_BoosterPredictForCSR) Make prediction for a new dataset in CSR format.

Note

You should pre-allocate memory for

`out_result`

:for normal and raw score, its length is equal to

`num_class * num_data`

;for leaf index, its length is equal to

`num_class * num_data * num_iteration`

;for feature contributions, its length is equal to

`num_class * num_data * (num_feature + 1)`

.

- Parameters:
**handle**– Handle of booster**indptr**– Pointer to row headers**indptr_type**– Type of`indptr`

, can be`C_API_DTYPE_INT32`

or`C_API_DTYPE_INT64`

**indices**– Pointer to column indices**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nindptr**– Number of rows in the matrix + 1**nelem**– Number of nonzero elements in the matrix**num_col**– Number of columns**predict_type**– What should be predicted`C_API_PREDICT_NORMAL`

: normal prediction, with transform (if needed);`C_API_PREDICT_RAW_SCORE`

: raw score;`C_API_PREDICT_LEAF_INDEX`

: leaf index;`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iterations for prediction, <= 0 means no limit**parameter**– Other parameters for prediction, e.g. early stopping for prediction**out_len**–**[out]**Length of output result**out_result**–**[out]**Pointer to array with predictions

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForCSRSingleRow(
[BoosterHandle](#c.BoosterHandle)handle, const void *indptr, int indptr_type, const int32_t *indices, const void *data, int data_type, int64_t nindptr, int64_t nelem, int64_t num_col, int predict_type, int start_iteration, int num_iteration, const char *parameter, int64_t *out_len, double *out_result)[](#c.LGBM_BoosterPredictForCSRSingleRow) Make prediction for a new dataset in CSR format. This method re-uses the internal predictor structure from previous calls and is optimized for single row invocation.

Note

You should pre-allocate memory for

`out_result`

:for normal and raw score, its length is equal to

`num_class * num_data`

;for leaf index, its length is equal to

`num_class * num_data * num_iteration`

;for feature contributions, its length is equal to

`num_class * num_data * (num_feature + 1)`

.

- Parameters:
**handle**– Handle of booster**indptr**– Pointer to row headers**indptr_type**– Type of`indptr`

, can be`C_API_DTYPE_INT32`

or`C_API_DTYPE_INT64`

**indices**– Pointer to column indices**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nindptr**– Number of rows in the matrix + 1**nelem**– Number of nonzero elements in the matrix**num_col**– Number of columns**predict_type**– What should be predicted`C_API_PREDICT_NORMAL`

: normal prediction, with transform (if needed);`C_API_PREDICT_RAW_SCORE`

: raw score;`C_API_PREDICT_LEAF_INDEX`

: leaf index;`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iterations for prediction, <= 0 means no limit**parameter**– Other parameters for prediction, e.g. early stopping for prediction**out_len**–**[out]**Length of output result**out_result**–**[out]**Pointer to array with predictions

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForCSRSingleRowFast(
[FastConfigHandle](#c.FastConfigHandle)fastConfig_handle, const void *indptr, const int indptr_type, const int32_t *indices, const void *data, const int64_t nindptr, const int64_t nelem, int64_t *out_len, double *out_result)[](#c.LGBM_BoosterPredictForCSRSingleRowFast) Faster variant of

`LGBM_BoosterPredictForCSRSingleRow`

.Score single rows after setup with

`LGBM_BoosterPredictForCSRSingleRowFastInit`

.By removing the setup steps from this call extra optimizations can be made like initializing the config only once, instead of once per call.

Note

Setting up the number of threads is only done once at

`LGBM_BoosterPredictForCSRSingleRowFastInit`

instead of at each prediction. If you use a different number of threads in other calls, you need to start the setup process over, or that number of threads will be used for these calls as well.Note

You should pre-allocate memory for

`out_result`

:for normal and raw score, its length is equal to

`num_class * num_data`

;for leaf index, its length is equal to

`num_class * num_data * num_iteration`

;for feature contributions, its length is equal to

`num_class * num_data * (num_feature + 1)`

.

- Parameters:
**fastConfig_handle**– FastConfig object handle returned by`LGBM_BoosterPredictForCSRSingleRowFastInit`

**indptr**– Pointer to row headers**indptr_type**– Type of`indptr`

, can be`C_API_DTYPE_INT32`

or`C_API_DTYPE_INT64`

**indices**– Pointer to column indices**data**– Pointer to the data space**nindptr**– Number of rows in the matrix + 1**nelem**– Number of nonzero elements in the matrix**out_len**–**[out]**Length of output result**out_result**–**[out]**Pointer to array with predictions

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForCSRSingleRowFastInit(
[BoosterHandle](#c.BoosterHandle)handle, const int predict_type, const int start_iteration, const int num_iteration, const int data_type, const int64_t num_col, const char *parameter,[FastConfigHandle](#c.FastConfigHandle)*out_fastConfig)[](#c.LGBM_BoosterPredictForCSRSingleRowFastInit) Initialize and return a


for use with[FastConfigHandle](#c__api_8h_1a806c2b4bfde61f8da54f3726ff78d6d7)`LGBM_BoosterPredictForCSRSingleRowFast`

.Release the

`FastConfig`

by passing its handle to`LGBM_FastConfigFree`

when no longer needed.- Parameters:
**handle**– Booster handle**predict_type**– What should be predicted`C_API_PREDICT_NORMAL`

: normal prediction, with transform (if needed);`C_API_PREDICT_RAW_SCORE`

: raw score;`C_API_PREDICT_LEAF_INDEX`

: leaf index;`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iterations for prediction, <= 0 means no limit**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**num_col**– Number of columns**parameter**– Other parameters for prediction, e.g. early stopping for prediction**out_fastConfig**–**[out]**FastConfig object with which you can call`LGBM_BoosterPredictForCSRSingleRowFast`


- Returns:
0 when it succeeds, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForFile(
[BoosterHandle](#c.BoosterHandle)handle, const char *data_filename, int data_has_header, int predict_type, int start_iteration, int num_iteration, const char *parameter, const char *result_filename)[](#c.LGBM_BoosterPredictForFile) Make prediction for file.

- Parameters:
**handle**– Handle of booster**data_filename**– Filename of file with data**data_has_header**– Whether file has header or not**predict_type**– What should be predicted`C_API_PREDICT_NORMAL`

: normal prediction, with transform (if needed);`C_API_PREDICT_RAW_SCORE`

: raw score;`C_API_PREDICT_LEAF_INDEX`

: leaf index;`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iterations for prediction, <= 0 means no limit**parameter**– Other parameters for prediction, e.g. early stopping for prediction**result_filename**– Filename of result file in which predictions will be written

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForMat(
[BoosterHandle](#c.BoosterHandle)handle, const void *data, int data_type, int32_t nrow, int32_t ncol, int is_row_major, int predict_type, int start_iteration, int num_iteration, const char *parameter, int64_t *out_len, double *out_result)[](#c.LGBM_BoosterPredictForMat) Make prediction for a new dataset.

Note

You should pre-allocate memory for

`out_result`

:for normal and raw score, its length is equal to

`num_class * num_data`

;for leaf index, its length is equal to

`num_class * num_data * num_iteration`

;for feature contributions, its length is equal to

`num_class * num_data * (num_feature + 1)`

.

- Parameters:
**handle**– Handle of booster**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nrow**– Number of rows**ncol**– Number of columns**is_row_major**– 1 for row-major, 0 for column-major**predict_type**– What should be predicted`C_API_PREDICT_NORMAL`

: normal prediction, with transform (if needed);`C_API_PREDICT_RAW_SCORE`

: raw score;`C_API_PREDICT_LEAF_INDEX`

: leaf index;`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iteration for prediction, <= 0 means no limit**parameter**– Other parameters for prediction, e.g. early stopping for prediction**out_len**–**[out]**Length of output result**out_result**–**[out]**Pointer to array with predictions

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForMats(
[BoosterHandle](#c.BoosterHandle)handle, const void **data, int data_type, int32_t nrow, int32_t ncol, int predict_type, int start_iteration, int num_iteration, const char *parameter, int64_t *out_len, double *out_result)[](#c.LGBM_BoosterPredictForMats) Make prediction for a new dataset presented in a form of array of pointers to rows.

Note

You should pre-allocate memory for

`out_result`

:for normal and raw score, its length is equal to

`num_class * num_data`

;for leaf index, its length is equal to

`num_class * num_data * num_iteration`

;for feature contributions, its length is equal to

`num_class * num_data * (num_feature + 1)`

.

- Parameters:
**handle**– Handle of booster**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nrow**– Number of rows**ncol**– Number columns**predict_type**– What should be predicted`C_API_PREDICT_NORMAL`

: normal prediction, with transform (if needed);`C_API_PREDICT_RAW_SCORE`

: raw score;`C_API_PREDICT_LEAF_INDEX`

: leaf index;`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iteration for prediction, <= 0 means no limit**parameter**– Other parameters for prediction, e.g. early stopping for prediction**out_len**–**[out]**Length of output result**out_result**–**[out]**Pointer to array with predictions

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForMatSingleRow(
[BoosterHandle](#c.BoosterHandle)handle, const void *data, int data_type, int ncol, int is_row_major, int predict_type, int start_iteration, int num_iteration, const char *parameter, int64_t *out_len, double *out_result)[](#c.LGBM_BoosterPredictForMatSingleRow) Make prediction for a new dataset. This method re-uses the internal predictor structure from previous calls and is optimized for single row invocation.

Note

You should pre-allocate memory for

`out_result`

:for normal and raw score, its length is equal to

`num_class * num_data`

;for leaf index, its length is equal to

`num_class * num_data * num_iteration`

;for feature contributions, its length is equal to

`num_class * num_data * (num_feature + 1)`

.

- Parameters:
**handle**– Handle of booster**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**ncol**– Number columns**is_row_major**– 1 for row-major, 0 for column-major**predict_type**– What should be predicted`C_API_PREDICT_NORMAL`

: normal prediction, with transform (if needed);`C_API_PREDICT_RAW_SCORE`

: raw score;`C_API_PREDICT_LEAF_INDEX`

: leaf index;`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iteration for prediction, <= 0 means no limit**parameter**– Other parameters for prediction, e.g. early stopping for prediction**out_len**–**[out]**Length of output result**out_result**–**[out]**Pointer to array with predictions

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForMatSingleRowFast(
[FastConfigHandle](#c.FastConfigHandle)fastConfig_handle, const void *data, int64_t *out_len, double *out_result)[](#c.LGBM_BoosterPredictForMatSingleRowFast) Faster variant of

`LGBM_BoosterPredictForMatSingleRow`

.Score a single row after setup with

`LGBM_BoosterPredictForMatSingleRowFastInit`

.By removing the setup steps from this call extra optimizations can be made like initializing the config only once, instead of once per call.

Note

Setting up the number of threads is only done once at

`LGBM_BoosterPredictForMatSingleRowFastInit`

instead of at each prediction. If you use a different number of threads in other calls, you need to start the setup process over, or that number of threads will be used for these calls as well.- Parameters:
**fastConfig_handle**– FastConfig object handle returned by`LGBM_BoosterPredictForMatSingleRowFastInit`

**data**– Single-row array data (no other way than row-major form).**out_len**–**[out]**Length of output result**out_result**–**[out]**Pointer to array with predictions

- Returns:
0 when it succeeds, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictForMatSingleRowFastInit(
[BoosterHandle](#c.BoosterHandle)handle, const int predict_type, const int start_iteration, const int num_iteration, const int data_type, const int32_t ncol, const char *parameter,[FastConfigHandle](#c.FastConfigHandle)*out_fastConfig)[](#c.LGBM_BoosterPredictForMatSingleRowFastInit) Initialize and return a


for use with[FastConfigHandle](#c__api_8h_1a806c2b4bfde61f8da54f3726ff78d6d7)`LGBM_BoosterPredictForMatSingleRowFast`

.Release the

`FastConfig`

by passing its handle to`LGBM_FastConfigFree`

when no longer needed.- Parameters:
**handle**– Booster handle**predict_type**– What should be predicted`C_API_PREDICT_NORMAL`

: normal prediction, with transform (if needed);`C_API_PREDICT_RAW_SCORE`

: raw score;`C_API_PREDICT_LEAF_INDEX`

: leaf index;`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iterations for prediction, <= 0 means no limit**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**ncol**– Number of columns**parameter**– Other parameters for prediction, e.g. early stopping for prediction**out_fastConfig**–**[out]**FastConfig object with which you can call`LGBM_BoosterPredictForMatSingleRowFast`


- Returns:
0 when it succeeds, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterPredictSparseOutput(
[BoosterHandle](#c.BoosterHandle)handle, const void *indptr, int indptr_type, const int32_t *indices, const void *data, int data_type, int64_t nindptr, int64_t nelem, int64_t num_col_or_row, int predict_type, int start_iteration, int num_iteration, const char *parameter, int matrix_type, int64_t *out_len, void **out_indptr, int32_t **out_indices, void **out_data)[](#c.LGBM_BoosterPredictSparseOutput) Make sparse prediction for a new dataset in CSR or CSC format. Currently only used for feature contributions.

Note

The outputs are pre-allocated, as they can vary for each invocation, but the shape should be the same:

for feature contributions, the shape of sparse matrix will be

`num_class * num_data * (num_feature + 1)`

. The output indptr_type for the sparse matrix will be the same as the given input indptr_type. Call`LGBM_BoosterFreePredictSparse`

to deallocate resources.

- Parameters:
**handle**– Handle of booster**indptr**– Pointer to row headers for CSR or column headers for CSC**indptr_type**– Type of`indptr`

, can be`C_API_DTYPE_INT32`

or`C_API_DTYPE_INT64`

**indices**– Pointer to column indices for CSR or row indices for CSC**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nindptr**– Number of entries in`indptr`

**nelem**– Number of nonzero elements in the matrix**num_col_or_row**– Number of columns for CSR or number of rows for CSC**predict_type**– What should be predicted, only feature contributions supported currently`C_API_PREDICT_CONTRIB`

: feature contributions (SHAP values)

**start_iteration**– Start index of the iteration to predict**num_iteration**– Number of iterations for prediction, <= 0 means no limit**parameter**– Other parameters for prediction, e.g. early stopping for prediction**matrix_type**– Type of matrix input and output, can be`C_API_MATRIX_TYPE_CSR`

or`C_API_MATRIX_TYPE_CSC`

**out_len**–**[out]**Length of output data and output indptr (pointer to an array with two entries where to write them)**out_indptr**–**[out]**Pointer to output row headers for CSR or column headers for CSC**out_indices**–**[out]**Pointer to sparse column indices for CSR or row indices for CSC**out_data**–**[out]**Pointer to sparse data space

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterRefit(
[BoosterHandle](#c.BoosterHandle)handle, const int32_t *leaf_preds, int32_t nrow, int32_t ncol)[](#c.LGBM_BoosterRefit) Refit the tree model using the new data (online learning).

- Parameters:
**handle**– Handle of booster**leaf_preds**– Pointer to predicted leaf indices**nrow**– Number of rows of`leaf_preds`

**ncol**– Number of columns of`leaf_preds`


- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterResetParameter(
[BoosterHandle](#c.BoosterHandle)handle, const char *parameters)[](#c.LGBM_BoosterResetParameter) Reset config for booster.

- Parameters:
**handle**– Handle of booster**parameters**– Parameters in format ‘key1=value1 key2=value2’

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterResetTrainingData(
[BoosterHandle](#c.BoosterHandle)handle, const[DatasetHandle](#c.DatasetHandle)train_data)[](#c.LGBM_BoosterResetTrainingData) Reset training data for booster.

- Parameters:
**handle**– Handle of booster**train_data**– Training dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterRollbackOneIter(
[BoosterHandle](#c.BoosterHandle)handle)[](#c.LGBM_BoosterRollbackOneIter) Rollback one iteration.

- Parameters:
**handle**– Handle of booster

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterSaveModel(
[BoosterHandle](#c.BoosterHandle)handle, int start_iteration, int num_iteration, int feature_importance_type, const char *filename)[](#c.LGBM_BoosterSaveModel) Save model into file.

- Parameters:
**handle**– Handle of booster**start_iteration**– Start index of the iteration that should be saved**num_iteration**– Index of the iteration that should be saved, <= 0 means save all**feature_importance_type**– Type of feature importance, can be`C_API_FEATURE_IMPORTANCE_SPLIT`

or`C_API_FEATURE_IMPORTANCE_GAIN`

**filename**– The name of the file

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterSaveModelToString(
[BoosterHandle](#c.BoosterHandle)handle, int start_iteration, int num_iteration, int feature_importance_type, int64_t buffer_len, int64_t *out_len, char *out_str)[](#c.LGBM_BoosterSaveModelToString) Save model to string.

- Parameters:
**handle**– Handle of booster**start_iteration**– Start index of the iteration that should be saved**num_iteration**– Index of the iteration that should be saved, <= 0 means save all**feature_importance_type**– Type of feature importance, can be`C_API_FEATURE_IMPORTANCE_SPLIT`

or`C_API_FEATURE_IMPORTANCE_GAIN`

**buffer_len**– String buffer length, if`buffer_len < out_len`

, you should re-allocate buffer**out_len**–**[out]**Actual output length**out_str**–**[out]**String of model, should pre-allocate memory

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterSetLeafValue(
[BoosterHandle](#c.BoosterHandle)handle, int tree_idx, int leaf_idx, double val)[](#c.LGBM_BoosterSetLeafValue) Set leaf value.

- Parameters:
**handle**– Handle of booster**tree_idx**– Index of tree**leaf_idx**– Index of leaf**val**– Leaf value

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterShuffleModels(
[BoosterHandle](#c.BoosterHandle)handle, int start_iter, int end_iter)[](#c.LGBM_BoosterShuffleModels) Shuffle models.

- Parameters:
**handle**– Handle of booster**start_iter**– The first iteration that will be shuffled**end_iter**– The last iteration that will be shuffled

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterUpdateOneIter(
[BoosterHandle](#c.BoosterHandle)handle, int *produced_empty_tree)[](#c.LGBM_BoosterUpdateOneIter) Update the model for one iteration.

- Parameters:
**handle**– Handle of booster**produced_empty_tree**–**[out]**1 means the tree(s) produced by this iteration did not have any splits. This usually means that training is “finished” (calling this function again will not change the model’s predictions). However, that is not always the case. For example, if you have added any randomness (like column sampling by setting`feature_fraction_bynode < 1.0`

), it is possible that another call to this function would produce a non-empty tree.

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterUpdateOneIterCustom(
[BoosterHandle](#c.BoosterHandle)handle, const float *grad, const float *hess, int *produced_empty_tree)[](#c.LGBM_BoosterUpdateOneIterCustom) Update the model by specifying gradient and Hessian directly (this can be used to support customized loss functions).

Note

The length of the arrays referenced by

`grad`

and`hess`

must be equal to`num_class * num_train_data`

, this is not verified by the library, the caller must ensure this.- Parameters:
**handle**– Handle of booster**grad**– The first order derivative (gradient) statistics**hess**– The second order derivative (Hessian) statistics**produced_empty_tree**–**[out]**1 means the tree(s) produced by this iteration did not have any splits. This usually means that training is “finished” (calling this function again will not change the model’s predictions). However, that is not always the case. For example, if you have added any randomness (like column sampling by setting`feature_fraction_bynode < 1.0`

), it is possible that another call to this function would produce a non-empty tree.

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_BoosterValidateFeatureNames(
[BoosterHandle](#c.BoosterHandle)handle, const char **data_names, int data_num_features)[](#c.LGBM_BoosterValidateFeatureNames) Check that the feature names of the data match the ones used to train the booster.

- Parameters:
**handle**– Handle of booster**data_names**– Array with the feature names in the data**data_num_features**– Number of features in the data

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_ByteBufferFree(
[ByteBufferHandle](#c.ByteBufferHandle)handle)[](#c.LGBM_ByteBufferFree) Free space for byte buffer.

- Parameters:
**handle**– Handle of byte buffer to be freed

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_ByteBufferGetAt(
[ByteBufferHandle](#c.ByteBufferHandle)handle, int32_t index, uint8_t *out_val)[](#c.LGBM_ByteBufferGetAt) Get a ByteBuffer value at an index.

- Parameters:
**handle**– Handle of byte buffer to be read**index**– Index of value to return**out_val**–**[out]**Byte value at index to return

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetAddFeaturesFrom(
[DatasetHandle](#c.DatasetHandle)target,[DatasetHandle](#c.DatasetHandle)source)[](#c.LGBM_DatasetAddFeaturesFrom) Add features from

`source`

to`target`

.- Parameters:
**target**– The handle of the dataset to add features to**source**– The handle of the dataset to take features from

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetCreateByReference(const
[DatasetHandle](#c.DatasetHandle)reference, int64_t num_total_row,[DatasetHandle](#c.DatasetHandle)*out)[](#c.LGBM_DatasetCreateByReference) Allocate the space for dataset and bucket feature bins according to reference dataset.

- Parameters:
**reference**– Used to align bin mapper with other dataset**num_total_row**– Number of total rows**out**–**[out]**Created dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetCreateFromArrow(int64_t n_chunks, const struct ArrowArray *chunks, const struct ArrowSchema *schema, const char *parameters, const
[DatasetHandle](#c.DatasetHandle)reference,[DatasetHandle](#c.DatasetHandle)*out)[](#c.LGBM_DatasetCreateFromArrow) Create dataset from Arrow.

- Parameters:
**n_chunks**– The number of Arrow arrays passed to this function**chunks**– Pointer to the list of Arrow arrays**schema**– Pointer to the schema of all Arrow arrays**parameters**– Additional parameters**reference**– Used to align bin mapper with other dataset, nullptr means isn’t used**out**–**[out]**Created dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetCreateFromCSC(const void *col_ptr, int col_ptr_type, const int32_t *indices, const void *data, int data_type, int64_t ncol_ptr, int64_t nelem, int64_t num_row, const char *parameters, const
[DatasetHandle](#c.DatasetHandle)reference,[DatasetHandle](#c.DatasetHandle)*out)[](#c.LGBM_DatasetCreateFromCSC) Create a dataset from CSC format.

- Parameters:
**col_ptr**– Pointer to column headers**col_ptr_type**– Type of`col_ptr`

, can be`C_API_DTYPE_INT32`

or`C_API_DTYPE_INT64`

**indices**– Pointer to row indices**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**ncol_ptr**– Number of columns in the matrix + 1**nelem**– Number of nonzero elements in the matrix**num_row**– Number of rows**parameters**– Additional parameters**reference**– Used to align bin mapper with other dataset, nullptr means isn’t used**out**–**[out]**Created dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetCreateFromCSR(const void *indptr, int indptr_type, const int32_t *indices, const void *data, int data_type, int64_t nindptr, int64_t nelem, int64_t num_col, const char *parameters, const
[DatasetHandle](#c.DatasetHandle)reference,[DatasetHandle](#c.DatasetHandle)*out)[](#c.LGBM_DatasetCreateFromCSR) Create a dataset from CSR format.

- Parameters:
**indptr**– Pointer to row headers**indptr_type**– Type of`indptr`

, can be`C_API_DTYPE_INT32`

or`C_API_DTYPE_INT64`

**indices**– Pointer to column indices**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nindptr**– Number of rows in the matrix + 1**nelem**– Number of nonzero elements in the matrix**num_col**– Number of columns**parameters**– Additional parameters**reference**– Used to align bin mapper with other dataset, nullptr means isn’t used**out**–**[out]**Created dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetCreateFromCSRFunc(void *get_row_funptr, int num_rows, int64_t num_col, const char *parameters, const
[DatasetHandle](#c.DatasetHandle)reference,[DatasetHandle](#c.DatasetHandle)*out)[](#c.LGBM_DatasetCreateFromCSRFunc) Create a dataset from CSR format through callbacks.

- Parameters:
**get_row_funptr**– Pointer to`std::function<void(int idx, std::vector<std::pair<int, double>>& ret)>`

(called for every row and expected to clear and fill`ret`

)**num_rows**– Number of rows**num_col**– Number of columns**parameters**– Additional parameters**reference**– Used to align bin mapper with other dataset, nullptr means isn’t used**out**–**[out]**Created dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetCreateFromFile(const char *filename, const char *parameters, const
[DatasetHandle](#c.DatasetHandle)reference,[DatasetHandle](#c.DatasetHandle)*out)[](#c.LGBM_DatasetCreateFromFile) Load dataset from file (like LightGBM CLI version does).

- Parameters:
**filename**– The name of the file**parameters**– Additional parameters**reference**– Used to align bin mapper with other dataset, nullptr means isn’t used**out**–**[out]**A loaded dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetCreateFromMat(const void *data, int data_type, int32_t nrow, int32_t ncol, int is_row_major, const char *parameters, const
[DatasetHandle](#c.DatasetHandle)reference,[DatasetHandle](#c.DatasetHandle)*out)[](#c.LGBM_DatasetCreateFromMat) Create dataset from dense matrix.

- Parameters:
**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nrow**– Number of rows**ncol**– Number of columns**is_row_major**– 1 for row-major, 0 for column-major**parameters**– Additional parameters**reference**– Used to align bin mapper with other dataset, nullptr means isn’t used**out**–**[out]**Created dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetCreateFromMats(int32_t nmat, const void **data, int data_type, int32_t *nrow, int32_t ncol, int *is_row_major, const char *parameters, const
[DatasetHandle](#c.DatasetHandle)reference,[DatasetHandle](#c.DatasetHandle)*out)[](#c.LGBM_DatasetCreateFromMats) Create dataset from array of dense matrices.

- Parameters:
**nmat**– Number of dense matrices**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nrow**– Number of rows**ncol**– Number of columns**is_row_major**– Pointer to the data layouts. 1 for row-major, 0 for column-major**parameters**– Additional parameters**reference**– Used to align bin mapper with other dataset, nullptr means isn’t used**out**–**[out]**Created dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetCreateFromSampledColumn(double **sample_data, int **sample_indices, int32_t ncol, const int *num_per_col, int32_t num_sample_row, int32_t num_local_row, int64_t num_dist_row, const char *parameters,
[DatasetHandle](#c.DatasetHandle)*out)[](#c.LGBM_DatasetCreateFromSampledColumn) Allocate the space for dataset and bucket feature bins according to sampled data.

- Parameters:
**sample_data**– Sampled data, grouped by the column**sample_indices**– Indices of sampled data**ncol**– Number of columns**num_per_col**– Size of each sampling column**num_sample_row**– Number of sampled rows**num_local_row**– Total number of rows local to machine**num_dist_row**– Number of total distributed rows**parameters**– Additional parameters**out**–**[out]**Created dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetCreateFromSerializedReference(const void *ref_buffer, int32_t ref_buffer_size, int64_t num_row, int32_t num_classes, const char *parameters,
[DatasetHandle](#c.DatasetHandle)*out)[](#c.LGBM_DatasetCreateFromSerializedReference) Allocate the space for dataset and bucket feature bins according to serialized reference dataset.

- Parameters:
**ref_buffer**– A binary representation of the dataset schema (feature groups, bins, etc.)**ref_buffer_size**– The size of the reference array in bytes**num_row**– Number of total rows the dataset will contain**num_classes**– Number of classes (will be used only in case of multiclass and specifying initial scores)**parameters**– Additional parameters**out**–**[out]**Created dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetDumpText(
[DatasetHandle](#c.DatasetHandle)handle, const char *filename)[](#c.LGBM_DatasetDumpText) Save dataset to text file, intended for debugging use only.

- Parameters:
**handle**– Handle of dataset**filename**– The name of the file

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetFree(
[DatasetHandle](#c.DatasetHandle)handle)[](#c.LGBM_DatasetFree) Free space for dataset.

- Parameters:
**handle**– Handle of dataset to be freed

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetGetFeatureNames(
[DatasetHandle](#c.DatasetHandle)handle, const int len, int *num_feature_names, const size_t buffer_len, size_t *out_buffer_len, char **feature_names)[](#c.LGBM_DatasetGetFeatureNames) Get feature names of dataset.

- Parameters:
**handle**– Handle of dataset**len**– Number of`char*`

pointers stored at`out_strs`

. If smaller than the max size, only this many strings are copied**num_feature_names**–**[out]**Number of feature names**buffer_len**– Size of pre-allocated strings. Content is copied up to`buffer_len - 1`

and null-terminated**out_buffer_len**–**[out]**String sizes required to do the full string copies**feature_names**–**[out]**Feature names, should pre-allocate memory

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetGetFeatureNumBin(
[DatasetHandle](#c.DatasetHandle)handle, int feature, int *out)[](#c.LGBM_DatasetGetFeatureNumBin) Get number of bins for feature.

- Parameters:
**handle**– Handle of dataset**feature**– Index of the feature**out**–**[out]**The address to hold number of bins

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetGetField(
[DatasetHandle](#c.DatasetHandle)handle, const char *field_name, int *out_len, const void **out_ptr, int *out_type)[](#c.LGBM_DatasetGetField) Get info vector from dataset.

- Parameters:
**handle**– Handle of dataset**field_name**– Field name**out_len**–**[out]**Used to set result length**out_ptr**–**[out]**Pointer to the result**out_type**–**[out]**Type of result pointer, can be`C_API_DTYPE_INT32`

,`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`


- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetGetNumData(
[DatasetHandle](#c.DatasetHandle)handle, int *out)[](#c.LGBM_DatasetGetNumData) Get number of data points.

- Parameters:
**handle**– Handle of dataset**out**–**[out]**The address to hold number of data points

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetGetNumFeature(
[DatasetHandle](#c.DatasetHandle)handle, int *out)[](#c.LGBM_DatasetGetNumFeature) Get number of features.

- Parameters:
**handle**– Handle of dataset**out**–**[out]**The address to hold number of features

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetGetSubset(const
[DatasetHandle](#c.DatasetHandle)handle, const int32_t *used_row_indices, int32_t num_used_row_indices, const char *parameters,[DatasetHandle](#c.DatasetHandle)*out)[](#c.LGBM_DatasetGetSubset) Create subset of a data.

- Parameters:
**handle**– Handle of full dataset**used_row_indices**– Indices used in subset**num_used_row_indices**– Length of`used_row_indices`

**parameters**– Additional parameters**out**–**[out]**Subset of data

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetInitStreaming(
[DatasetHandle](#c.DatasetHandle)dataset, int32_t has_weights, int32_t has_init_scores, int32_t has_queries, int32_t nclasses, int32_t nthreads, int32_t omp_max_threads)[](#c.LGBM_DatasetInitStreaming) Initialize the Dataset for streaming.

- Parameters:
**dataset**– Handle of dataset**has_weights**– Whether the dataset has Metadata weights**has_init_scores**– Whether the dataset has Metadata initial scores**has_queries**– Whether the dataset has Metadata queries/groups**nclasses**– Number of initial score classes**nthreads**– Number of external threads that will use the PushRows APIs**omp_max_threads**– Maximum number of OpenMP threads (-1 for default)

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetMarkFinished(
[DatasetHandle](#c.DatasetHandle)dataset)[](#c.LGBM_DatasetMarkFinished) Mark the Dataset as complete by calling

`dataset->FinishLoad`

.- Parameters:
**dataset**– Handle of dataset

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetPushRows(
[DatasetHandle](#c.DatasetHandle)dataset, const void *data, int data_type, int32_t nrow, int32_t ncol, int32_t start_row)[](#c.LGBM_DatasetPushRows) Push data to existing dataset, if

`nrow + start_row == num_total_row`

, will call`dataset->FinishLoad`

.- Parameters:
**dataset**– Handle of dataset**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nrow**– Number of rows**ncol**– Number of columns**start_row**– Row start index

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetPushRowsByCSR(
[DatasetHandle](#c.DatasetHandle)dataset, const void *indptr, int indptr_type, const int32_t *indices, const void *data, int data_type, int64_t nindptr, int64_t nelem, int64_t num_col, int64_t start_row)[](#c.LGBM_DatasetPushRowsByCSR) Push data to existing dataset, if

`nrow + start_row == num_total_row`

, will call`dataset->FinishLoad`

.- Parameters:
**dataset**– Handle of dataset**indptr**– Pointer to row headers**indptr_type**– Type of`indptr`

, can be`C_API_DTYPE_INT32`

or`C_API_DTYPE_INT64`

**indices**– Pointer to column indices**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nindptr**– Number of rows in the matrix + 1**nelem**– Number of nonzero elements in the matrix**num_col**– Number of columns**start_row**– Row start index

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetPushRowsByCSRWithMetadata(
[DatasetHandle](#c.DatasetHandle)dataset, const void *indptr, int indptr_type, const int32_t *indices, const void *data, int data_type, int64_t nindptr, int64_t nelem, int64_t start_row, const float *label, const float *weight, const double *init_score, const int32_t *query, int32_t tid)[](#c.LGBM_DatasetPushRowsByCSRWithMetadata) Push CSR data to existing dataset. (See

`LGBM_DatasetPushRowsWithMetadata`

for more details.)- Parameters:
**dataset**– Handle of dataset**indptr**– Pointer to row headers**indptr_type**– Type of`indptr`

, can be`C_API_DTYPE_INT32`

or`C_API_DTYPE_INT64`

**indices**– Pointer to column indices**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nindptr**– Number of rows in the matrix + 1**nelem**– Number of nonzero elements in the matrix**start_row**– Row start index**label**– Pointer to array with nindptr-1 labels**weight**– Optional pointer to array with nindptr-1 weights**init_score**– Optional pointer to array with (nindptr-1)*nclasses initial scores, in column format**query**– Optional pointer to array with nindptr-1 query values**tid**– The id of the calling thread, from 0…N-1 threads

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetPushRowsWithMetadata(
[DatasetHandle](#c.DatasetHandle)dataset, const void *data, int data_type, int32_t nrow, int32_t ncol, int32_t start_row, const float *label, const float *weight, const double *init_score, const int32_t *query, int32_t tid)[](#c.LGBM_DatasetPushRowsWithMetadata) Push data to existing dataset. The general flow for a streaming scenario is:

create Dataset “schema” (e.g.

`LGBM_DatasetCreateFromSampledColumn`

)init them for thread-safe streaming (

`LGBM_DatasetInitStreaming`

)push data (

`LGBM_DatasetPushRowsWithMetadata`

or`LGBM_DatasetPushRowsByCSRWithMetadata`

)call

`LGBM_DatasetMarkFinished`


- Parameters:
**dataset**– Handle of dataset**data**– Pointer to the data space**data_type**– Type of`data`

pointer, can be`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`

**nrow**– Number of rows**ncol**– Number of feature columns**start_row**– Row start index, i.e., the index at which to start inserting data**label**– Pointer to array with nrow labels**weight**– Optional pointer to array with nrow weights**init_score**– Optional pointer to array with nrow*nclasses initial scores, in column format**query**– Optional pointer to array with nrow query values**tid**– The id of the calling thread, from 0…N-1 threads

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetSaveBinary(
[DatasetHandle](#c.DatasetHandle)handle, const char *filename)[](#c.LGBM_DatasetSaveBinary) Save dataset to binary file.

- Parameters:
**handle**– Handle of dataset**filename**– The name of the file

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetSerializeReferenceToBinary(
[DatasetHandle](#c.DatasetHandle)handle,[ByteBufferHandle](#c.ByteBufferHandle)*out, int32_t *out_len)[](#c.LGBM_DatasetSerializeReferenceToBinary) Create a dataset schema representation as a binary byte array (excluding data).

- Parameters:
**handle**– Handle of dataset**out**–**[out]**The output byte array**out_len**–**[out]**The length of the output byte array (returned for convenience)

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetSetFeatureNames(
[DatasetHandle](#c.DatasetHandle)handle, const char **feature_names, int num_feature_names)[](#c.LGBM_DatasetSetFeatureNames) Save feature names to dataset.

- Parameters:
**handle**– Handle of dataset**feature_names**– Feature names**num_feature_names**– Number of feature names

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetSetField(
[DatasetHandle](#c.DatasetHandle)handle, const char *field_name, const void *field_data, int num_element, int type)[](#c.LGBM_DatasetSetField) Set vector to a content in info.

Note

*group*only works for`C_API_DTYPE_INT32`

;*label*and*weight*only work for`C_API_DTYPE_FLOAT32`

;*init_score*only works for`C_API_DTYPE_FLOAT64`

.

- Parameters:
**handle**– Handle of dataset**field_name**– Field name, can be*label*,*weight*,*init_score*,*group***field_data**– Pointer to data vector**num_element**– Number of elements in`field_data`

**type**– Type of`field_data`

pointer, can be`C_API_DTYPE_INT32`

,`C_API_DTYPE_FLOAT32`

or`C_API_DTYPE_FLOAT64`


- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetSetFieldFromArrow(
[DatasetHandle](#c.DatasetHandle)handle, const char *field_name, int64_t n_chunks, const struct ArrowArray *chunks, const struct ArrowSchema *schema)[](#c.LGBM_DatasetSetFieldFromArrow) Set vector to a content in info.

Note

*group*converts input datatype into`int32`

;*label*and*weight*convert input datatype into`float32`

;*init_score*converts input datatype into`float64`

.

- Parameters:
**handle**– Handle of dataset**field_name**– Field name, can be*label*,*weight*,*init_score*,*group***n_chunks**– The number of Arrow arrays passed to this function**chunks**– Pointer to the list of Arrow arrays**schema**– Pointer to the schema of all Arrow arrays

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetSetWaitForManualFinish(
[DatasetHandle](#c.DatasetHandle)dataset, int wait)[](#c.LGBM_DatasetSetWaitForManualFinish) Set whether or not the Dataset waits for a manual MarkFinished call or calls FinishLoad on itself automatically. Set to 1 for streaming scenario, and use

`LGBM_DatasetMarkFinished`

to manually finish the Dataset.- Parameters:
**dataset**– Handle of dataset**wait**– Whether to wait or not (1 or 0)

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DatasetUpdateParamChecking(const char *old_parameters, const char *new_parameters)
[](#c.LGBM_DatasetUpdateParamChecking) Raise errors for attempts to update dataset parameters.

- Parameters:
**old_parameters**– Current dataset parameters**new_parameters**– New dataset parameters

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_DumpParamAliases(int64_t buffer_len, int64_t *out_len, char *out_str)
[](#c.LGBM_DumpParamAliases) Dump all parameter names with their aliases to JSON.

- Parameters:
**buffer_len**– String buffer length, if`buffer_len < out_len`

, you should re-allocate buffer**out_len**–**[out]**Actual output length**out_str**–**[out]**JSON format string of parameters, should pre-allocate memory

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_FastConfigFree(
[FastConfigHandle](#c.FastConfigHandle)fastConfig)[](#c.LGBM_FastConfigFree) Release FastConfig object.

- Parameters:
**fastConfig**– Handle to the FastConfig object acquired with a`*FastInit()`

method.

- Returns:
0 when it succeeds, -1 when failure happens



-
LIGHTGBM_C_EXPORT const char *LGBM_GetLastError()
[](#c.LGBM_GetLastError) Get string message of the last error.

- Returns:
Error information



-
LIGHTGBM_C_EXPORT int LGBM_GetMaxThreads(int *out)
[](#c.LGBM_GetMaxThreads) Get current maximum number of threads used by LightGBM routines in this process.

- Parameters:
**out**–**[out]**current maximum number of threads used by LightGBM. -1 means defaulting to omp_get_num_threads().

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_GetSampleCount(int32_t num_total_row, const char *parameters, int *out)
[](#c.LGBM_GetSampleCount) Get number of samples based on parameters and total number of rows of data.

- Parameters:
**num_total_row**– Number of total rows**parameters**– Additional parameters, namely,`bin_construct_sample_cnt`

is used to calculate returned value**out**–**[out]**Number of samples. This value is used to pre-allocate memory to hold sample indices when calling`LGBM_SampleIndices`


- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_NetworkFree()
[](#c.LGBM_NetworkFree) Finalize the network.

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_NetworkInit(const char *machines, int local_listen_port, int listen_time_out, int num_machines)
[](#c.LGBM_NetworkInit) Initialize the network.

- Parameters:
**machines**– List of machines in format ‘ip1:port1,ip2:port2’**local_listen_port**– TCP listen port for local machines**listen_time_out**– Socket time-out in minutes**num_machines**– Total number of machines

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_NetworkInitWithFunctions(int num_machines, int rank, void *reduce_scatter_ext_fun, void *allgather_ext_fun)
[](#c.LGBM_NetworkInitWithFunctions) Initialize the network with external collective functions.

- Parameters:
**num_machines**– Total number of machines**rank**– Rank of local machine**reduce_scatter_ext_fun**– The external reduce-scatter function**allgather_ext_fun**– The external allgather function

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_RegisterLogCallback(void (*callback)(const char*))
[](#c.LGBM_RegisterLogCallback) Register a callback function for log redirecting.

- Parameters:
**callback**– The callback function to register

- Returns:
0 when succeed, -1 when failure happens



-
LIGHTGBM_C_EXPORT int LGBM_SampleIndices(int32_t num_total_row, const char *parameters, void *out, int32_t *out_len)
[](#c.LGBM_SampleIndices) Create sample indices for total number of rows.

Note

You should pre-allocate memory for

`out`

, you can get its length by`LGBM_GetSampleCount`

.- Parameters:
**num_total_row**– Number of total rows**parameters**– Additional parameters, namely,`bin_construct_sample_cnt`

and`data_random_seed`

are used to produce the output**out**–**[out]**Created indices, type is int32_t**out_len**–**[out]**Number of indices

- Returns:
0 when succeed, -1 when failure happens



-
inline void LGBM_SetLastError(const char *msg)
[](#c.LGBM_SetLastError) Set string message of the last error.

Note

This will call unsafe

`sprintf`

when compiled using C standards before C99.- Parameters:
**msg**– Error message



-
LIGHTGBM_C_EXPORT int LGBM_SetMaxThreads(int num_threads)
[](#c.LGBM_SetMaxThreads) Set maximum number of threads used by LightGBM routines in this process.

- Parameters:
**num_threads**– maximum number of threads used by LightGBM. -1 means defaulting to omp_get_num_threads().

- Returns:
0 when succeed, -1 when failure happens

---

## Source: https://lightgbm.readthedocs.io/en/latest/Python-API.html

# Python API[](#python-api)

## Data Structure API[](#data-structure-api)

|
Dataset in LightGBM. |
|
Booster in LightGBM. |
|
CVBooster in LightGBM. |
|
Generic data access interface. |

## Training API[](#training-api)

|
Perform the training with given parameters. |
|
Perform the cross-validation with given parameters. |

## Scikit-learn API[](#scikit-learn-api)

|
Implementation of the scikit-learn API for LightGBM. |
|
LightGBM classifier. |
|
LightGBM regressor. |
|
LightGBM ranker. |

## Dask API[](#dask-api)

Added in version 3.2.0.

|
Distributed version of lightgbm.LGBMClassifier. |
|
Distributed version of lightgbm.LGBMRegressor. |
|
Distributed version of lightgbm.LGBMRanker. |

## Callbacks[](#callbacks)

|
Create a callback that activates early stopping. |
|
Create a callback that logs the evaluation results. |
|
Create a callback that records the evaluation history into |
|
Create a callback that resets the parameter after the first iteration. |

## Plotting[](#plotting)

|
Plot model's feature importances. |
|
Plot split value histogram for the specified feature of the model. |
|
Plot one metric during training. |
|
Plot specified tree. |
|
Create a digraph representation of specified tree. |

## Utilities[](#utilities)

|
Register custom logger. |

---

## Source: https://lightgbm.readthedocs.io/en/latest/R/reference/

Datasets included with the R-package

agaricus.train

Training part from Mushroom Data Set

agaricus.test

Test part from Mushroom Data Set

bank

Bank Marketing Data Set

Data I/O required for LightGBM

dim(<lgb.Dataset>)

Dimensions of an lgb.Dataset

lgb.Dataset

dimnames(<lgb.Dataset>) `dimnames<-`(<lgb.Dataset>)

dimnames(<lgb.Dataset>)

`dimnames<-`(<lgb.Dataset>)

Handling of column names of lgb.Dataset

get_field()

Get one attribute of a lgb.Dataset

set_field()

Set one attribute of a lgb.Dataset object

lgb.Dataset()

Construct lgb.Dataset object

lgb.Dataset.construct()

Construct Dataset explicitly

lgb.Dataset.create.valid()

Construct validation data

lgb.Dataset.save()

Save lgb.Dataset to a binary file

lgb.Dataset.set.categorical()

Set categorical feature of lgb.Dataset

lgb.Dataset.set.reference()

Set reference of lgb.Dataset

lgb.convert_with_rules()

Data preparator for LightGBM datasets with rules (integer)

lgb.slice.Dataset()

Slice a dataset

Train models with LightGBM and then use them to make predictions on new data

lightgbm()

Train a LightGBM model

lgb.train()

Main training logic for LightGBM

predict(<lgb.Booster>)

Predict method for LightGBM model

lgb.cv()

Main CV logic for LightGBM

lgb.configure_fast_predict()

Configure Fast Single-Row Predictions

Save and load LightGBM models

lgb.dump()

Dump LightGBM model to json

lgb.save()

Save LightGBM model

lgb.load()

Load LightGBM model

lgb.model.dt.tree()

Parse a LightGBM model json dump

lgb.drop_serialized()

Drop serialized raw bytes in a LightGBM model object

lgb.make_serializable()

Make a LightGBM object serializable by keeping raw bytes

lgb.restore_handle()

Restore the C++ component of a de-serialized LightGBM model

Analyze your models

lgb.get.eval.result()

Get record evaluation result from booster

lgb.importance()

Compute feature importance in a model

lgb.interprete()

Compute feature contribution of prediction

lgb.plot.importance()

Plot feature importance as a bar graph

lgb.plot.interpretation()

Plot feature contribution as a bar graph

print(<lgb.Booster>)

Print method for LightGBM model

summary(<lgb.Booster>)

Summary method for LightGBM model

Manage degree of parallelism used by LightGBM

getLGBMthreads()

Get default number of threads used by LightGBM

setLGBMthreads()

Set maximum number of threads used by LightGBM

---

## Source: https://lightgbm.readthedocs.io/en/latest/Parallel-Learning-Guide.html

# Distributed Learning Guide[](#distributed-learning-guide)

This guide describes distributed learning in LightGBM. Distributed learning allows the use of multiple machines to produce a single model.

Follow the [Quick Start](./Quick-Start.html) to know how to use LightGBM first.

## How Distributed LightGBM Works[](#how-distributed-lightgbm-works)

This section describes how distributed learning in LightGBM works. To learn how to do this in various programming languages and frameworks, please see [Integrations](#integrations).

### Choose Appropriate Parallel Algorithm[](#choose-appropriate-parallel-algorithm)

LightGBM provides 3 distributed learning algorithms now.

Parallel Algorithm |
How to Use |
|---|---|
Data parallel |
|
Feature parallel |
|
Voting parallel |
|

These algorithms are suited for different scenarios, which is listed in the following table:

#data is small |
#data is large |
|
|---|---|---|
|
Feature Parallel |
Data Parallel |
|
Feature Parallel |
Voting Parallel |

More details about these parallel algorithms can be found in [optimization in distributed learning](./Features.html#optimization-in-distributed-learning).

## Integrations[](#integrations)

This section describes how to run distributed LightGBM training in various programming languages and frameworks. To learn how distributed learning in LightGBM works generally, please see [How Distributed LightGBM Works](#how-distributed-lightgbm-works).

### Apache Spark[](#apache-spark)

Apache Spark users can use [SynapseML](https://aka.ms/spark) for machine learning workflows with LightGBM. This project is not maintained by LightGBM’s maintainers.

See [this SynapseML example](https://github.com/microsoft/SynapseML/tree/master/docs/Explore%20Algorithms/LightGBM) for additional information on using LightGBM on Spark.

Note

`SynapseML`

is not maintained by LightGBM’s maintainers. Bug reports or feature requests should be directed to [https://github.com/microsoft/SynapseML/issues](https://github.com/microsoft/SynapseML/issues).

### Dask[](#dask)

Added in version 3.2.0.

LightGBM’s Python-package supports distributed learning via [Dask](https://docs.dask.org/en/latest/). This integration is maintained by LightGBM’s maintainers.

Warning

Dask integration is only tested on macOS and Linux.

#### Dask Examples[](#dask-examples)

For sample code using `lightgbm.dask`

, see [these Dask examples](https://github.com/lightgbm-org/LightGBM/tree/master/examples/python-guide/dask).

#### Training with Dask[](#training-with-dask)

This section contains detailed information on performing LightGBM distributed training using Dask.

##### Configuring the Dask Cluster[](#configuring-the-dask-cluster)

**Allocating Threads**

When setting up a Dask cluster for training, give each Dask worker process at least two threads. If you do not do this, training might be substantially slower because communication work and training work will block each other.

If you do not have other significant processes competing with Dask for resources, just accept the default `nthreads`

from your chosen `dask.distributed`

cluster.

```
from distributed import Client, LocalCluster
cluster = LocalCluster(n_workers=3)
client = Client(cluster)
```

**Managing Memory**

Use the Dask diagnostic dashboard or your preferred monitoring tool to monitor Dask workers’ memory consumption during training. As described in [the Dask worker documentation](https://distributed.dask.org/en/stable/worker-memory.html), Dask workers will automatically start spilling data to disk if memory consumption gets too high. This can substantially slow down computations, since disk I/O is usually much slower than reading the same data from memory.

At 60% of memory load, [Dask will] spill least recently used data to disk


To reduce the risk of hitting memory limits, consider restarting each worker process before running any data loading or training code.

```
client.restart()
```

##### Setting Up Training Data[](#setting-up-training-data)

The estimators in `lightgbm.dask`

expect that matrix-like or array-like data are provided in Dask DataFrame, Dask Array, or (in some cases) Dask Series format. See [the Dask DataFrame documentation](https://docs.dask.org/en/latest/dataframe.html) and [the Dask Array documentation](https://docs.dask.org/en/latest/array.html) for more information on how to create such data structures.


While setting up for training, `lightgbm`

will concatenate all of the partitions on a worker into a single dataset. Distributed training then proceeds with one LightGBM worker process per Dask worker.


When setting up data partitioning for LightGBM training with Dask, try to follow these suggestions:

ensure that each worker in the cluster has some of the training data

try to give each worker roughly the same amount of data, especially if your dataset is small

if you plan to train multiple models (for example, to tune hyperparameters) on the same data, use

`client.persist()`

before training to materialize the data one time

##### Using a Specific Dask Client[](#using-a-specific-dask-client)

In most situations, you should not need to tell `lightgbm.dask`

to use a specific Dask client. By default, the client returned by `distributed.default_client()`

will be used.

However, you might want to explicitly control the Dask client used by LightGBM if you have multiple active clients in the same session. This is useful in more complex workflows like running multiple training jobs on different Dask clusters.

LightGBM’s Dask estimators support setting an attribute `client`

to control the client that is used.

```
import lightgbm as lgb
from distributed import Client, LocalCluster
cluster = LocalCluster()
client = Client(cluster)
# option 1: keyword argument in constructor
dask_model = lgb.DaskLGBMClassifier(client=client)
# option 2: set_params() after construction
dask_model = lgb.DaskLGBMClassifier()
dask_model.set_params(client=client)
```

##### Using Specific Ports[](#using-specific-ports)

At the beginning of training, `lightgbm.dask`

sets up a LightGBM network where each Dask worker runs one long-running task that acts as a LightGBM worker. During training, LightGBM workers communicate with each other over TCP sockets. By default, random open ports are used when creating these sockets.

If the communication between Dask workers in the cluster used for training is restricted by firewall rules, you must tell LightGBM exactly what ports to use.

**Option 1: provide a specific list of addresses and ports**

LightGBM supports a parameter `machines`

, a comma-delimited string where each entry refers to one worker (host name or IP) and a port that that worker will accept connections on. If you provide this parameter to the estimators in `lightgbm.dask`

, LightGBM will not search randomly for ports.

For example, consider the case where you are running one Dask worker process on each of the following IP addresses:

```
10.0.1.0
10.0.2.0
10.0.3.0
```

You could edit your firewall rules to allow traffic on one additional port on each of these hosts, then provide `machines`

directly.

```
import lightgbm as lgb
machines = "10.0.1.0:12401,10.0.2.0:12402,10.0.3.0:15000"
dask_model = lgb.DaskLGBMRegressor(machines=machines)
```

If you are running multiple Dask worker processes on physical host in the cluster, be sure that there are multiple entries for that IP address, with different ports. For example, if you were running a cluster with `nprocs=2`

(2 Dask worker processes per machine), you might open two additional ports on each of these hosts, then provide `machines`

as follows.

```
import lightgbm as lgb
machines = ",".join([
"10.0.1.0:16000",
"10.0.1.0:16001",
"10.0.2.0:16000",
"10.0.2.0:16001",
])
dask_model = lgb.DaskLGBMRegressor(machines=machines)
```

Warning

Providing `machines`

gives you complete control over the networking details of training, but it also makes the training process fragile. Training will fail if you use `machines`

and any of the following are true:

any of the ports mentioned in

`machines`

are not open when training beginssome partitions of the training data are held by machines that that are not present in

`machines`

some machines mentioned in

`machines`

do not hold any of the training data

**Option 2: specify one port to use on every worker**

If you are only running one Dask worker process on each host, and if you can reliably identify a port that is open on every host, using `machines`

is unnecessarily complicated. If `local_listen_port`

is given and `machines`

is not, LightGBM will not search for ports randomly, but it will limit the list of addresses in the LightGBM network to those Dask workers that have a piece of the training data.

For example, consider the case where you are running one Dask worker process on each of the following IP addresses:

```
10.0.1.0
10.0.2.0
10.0.3.0
```

You could edit your firewall rules to allow communication between any of the workers over one port, then provide that port via parameter `local_listen_port`

.

```
import lightgbm as lgb
dask_model = lgb.DaskLGBMRegressor(local_listen_port=12400)
```

Warning

Providing `local_listen_port`

is slightly less fragile than `machines`

because LightGBM will automatically figure out which workers have pieces of the training data. However, using this method, training can fail if any of the following are true:

the port

`local_listen_port`

is not open on any of the worker hostsany machine has multiple Dask worker processes running on it


##### Using Custom Objective Functions with Dask[](#using-custom-objective-functions-with-dask)

Added in version 4.0.0.

It is possible to customize the boosting process by providing a custom objective function written in Python. See the Dask API’s documentation for details on how to implement such functions.

Warning

Custom objective functions used with `lightgbm.dask`

will be called by each worker process on only that worker’s local data.

Follow the example below to use a custom implementation of the `regression_l2`

objective.

```
import dask.array as da
import lightgbm as lgb
import numpy as np
from distributed import Client, LocalCluster
cluster = LocalCluster(n_workers=2)
client = Client(cluster)
X = da.random.random((1000, 10), (500, 10))
y = da.random.random((1000,), (500,))
def custom_l2_obj(y_true, y_pred):
grad = y_pred - y_true
hess = np.ones(len(y_true))
return grad, hess
dask_model = lgb.DaskLGBMRegressor(
objective=custom_l2_obj
)
dask_model.fit(X, y)
```

#### Prediction with Dask[](#prediction-with-dask)

The estimators from `lightgbm.dask`

can be used to create predictions based on data stored in Dask collections. In that interface, `.predict()`

expects a Dask Array or Dask DataFrame, and returns a Dask Array of predictions.

See [the Dask prediction example](https://github.com/lightgbm-org/LightGBM/blob/master/examples/python-guide/dask/prediction.py) for some sample code that shows how to perform Dask-based prediction.

For model evaluation, consider using [the metrics functions from dask-ml](https://ml.dask.org/modules/api.html#dask-ml-metrics-metrics). Those functions are intended to provide the same API as equivalent functions in `sklearn.metrics`

, but they use distributed computation powered by Dask to compute metrics without all of the input data ever needing to be on a single machine.

#### Saving Dask Models[](#saving-dask-models)

After training with Dask, you have several options for saving a fitted model.

**Option 1: pickle the Dask estimator**

LightGBM’s Dask estimators can be pickled directly with `cloudpickle`

, `joblib`

, or `pickle`

.

```
import dask.array as da
import pickle
import lightgbm as lgb
from distributed import Client, LocalCluster
cluster = LocalCluster(n_workers=2)
client = Client(cluster)
X = da.random.random((1000, 10), (500, 10))
y = da.random.random((1000,), (500,))
dask_model = lgb.DaskLGBMRegressor()
dask_model.fit(X, y)
with open("dask-model.pkl", "wb") as f:
pickle.dump(dask_model, f)
```

A model saved this way can then later be loaded with whichever serialization library you used to save it.

```
import pickle
with open("dask-model.pkl", "rb") as f:
dask_model = pickle.load(f)
```

Note

If you explicitly set a Dask client (see [Using a Specific Dask Client](#using-a-specific-dask-client)), it will not be saved when pickling the estimator. When loading a Dask estimator from disk, if you need to use a specific client you can add it after loading with `dask_model.set_params(client=client)`

.

**Option 2: pickle the sklearn estimator**

The estimators available from `lightgbm.dask`

can be converted to an instance of the equivalent class from `lightgbm.sklearn`

. Choosing this option allows you to use Dask for training but avoid depending on any Dask libraries at scoring time.

```
import dask.array as da
import joblib
import lightgbm as lgb
from distributed import Client, LocalCluster
cluster = LocalCluster(n_workers=2)
client = Client(cluster)
X = da.random.random((1000, 10), (500, 10))
y = da.random.random((1000,), (500,))
dask_model = lgb.DaskLGBMRegressor()
dask_model.fit(X, y)
# convert to sklearn equivalent
sklearn_model = dask_model.to_local()
print(type(sklearn_model))
#> lightgbm.sklearn.LGBMRegressor
joblib.dump(sklearn_model, "sklearn-model.joblib")
```

A model saved this way can then later be loaded with whichever serialization library you used to save it.

```
import joblib
sklearn_model = joblib.load("sklearn-model.joblib")
```

**Option 3: save the LightGBM Booster**

The lowest-level model object in LightGBM is the `lightgbm.Booster`

. After training, you can extract a Booster from the Dask estimator.

```
import dask.array as da
import lightgbm as lgb
from distributed import Client, LocalCluster
cluster = LocalCluster(n_workers=2)
client = Client(cluster)
X = da.random.random((1000, 10), (500, 10))
y = da.random.random((1000,), (500,))
dask_model = lgb.DaskLGBMRegressor()
dask_model.fit(X, y)
# get underlying Booster object
bst = dask_model.booster_
```

From the point forward, you can use any of the following methods to save the Booster:

serialize with

`cloudpickle`

,`joblib`

, or`pickle`

`bst.dump_model()`

: dump the model to a dictionary which could be written out as JSON`bst.model_to_string()`

: dump the model to a string in memory`bst.save_model()`

: write the output of`bst.model_to_string()`

to a text file

### Kubeflow[](#kubeflow)

Kubeflow users can also use the [Kubeflow XGBoost Operator](https://github.com/kubeflow/xgboost-operator) for machine learning workflows with LightGBM. You can see [this example](https://github.com/kubeflow/xgboost-operator/tree/master/config/samples/lightgbm-dist) for more details.

Kubeflow integrations for LightGBM are not maintained by LightGBM’s maintainers.

Note

The Kubeflow integrations for LightGBM are not maintained by LightGBM’s maintainers. Bug reports or feature requests should be directed to [https://github.com/kubeflow/fairing/issues](https://github.com/kubeflow/fairing/issues) or [https://github.com/kubeflow/xgboost-operator/issues](https://github.com/kubeflow/xgboost-operator/issues).

### LightGBM CLI[](#lightgbm-cli)

#### Preparation[](#preparation)

By default, distributed learning with LightGBM uses socket-based communication.

If you need to build distributed version with MPI support, please refer to [Installation Guide](./Installation-Guide.html#build-mpi-version).

##### Socket Version[](#socket-version)

It needs to collect IP of all machines that want to run distributed learning in and allocate one TCP port (assume 12345 here) for all machines,
and change firewall rules to allow income of this port (12345). Then write these IP and ports in one file (assume `mlist.txt`

), like following:

```
machine1_ip 12345
machine2_ip 12345
```

##### MPI Version[](#mpi-version)

It needs to collect IP (or hostname) of all machines that want to run distributed learning in.
Then write these IP in one file (assume `mlist.txt`

) like following:

```
machine1_ip
machine2_ip
```

**Note**: For Windows users, need to start “smpd” to start MPI service. More details can be found [here](https://www.youtube.com/watch?v=iqzXhp5TxUY).

#### Run Distributed Learning[](#run-distributed-learning)

##### Socket Version[](#run-parallel-learning)

Edit following parameters in config file:

`tree_learner=your_parallel_algorithm`

, edit`your_parallel_algorithm`

(e.g. feature/data) here.`num_machines=your_num_machines`

, edit`your_num_machines`

(e.g. 4) here.`machine_list_file=mlist.txt`

,`mlist.txt`

is created in[Preparation section](#preparation).`local_listen_port=12345`

,`12345`

is allocated in[Preparation section](#preparation).Copy data file, executable file, config file and

`mlist.txt`

to all machines.Run following command on all machines, you need to change

`your_config_file`

to real config file.For Windows:

`lightgbm.exe config=your_config_file`

For Linux:

`./lightgbm config=your_config_file`


##### MPI Version[](#id2)

Edit following parameters in config file:

`tree_learner=your_parallel_algorithm`

, edit`your_parallel_algorithm`

(e.g. feature/data) here.`num_machines=your_num_machines`

, edit`your_num_machines`

(e.g. 4) here.Copy data file, executable file, config file and

`mlist.txt`

to all machines.**Note**: MPI needs to be run in the**same path on all machines**.Run following command on one machine (not need to run on all machines), need to change

`your_config_file`

to real config file.For Windows:

`mpiexec.exe /machinefile mlist.txt lightgbm.exe config=your_config_file`

For Linux:

`mpiexec --machinefile mlist.txt ./lightgbm config=your_config_file`


#### Example[](#example)

### Ray[](#ray)

[Ray](https://www.ray.io/) is a Python-based framework for distributed computing. Ray provides LightGBM support through the Ray Train API with `LightGBMTrainer`

and the [lightgbm_ray](https://github.com/ray-project/lightgbm_ray) project maintained within the official Ray GitHub organization.

For the Ray Train API, see [the Ray documentation](https://docs.ray.io/en/latest/train/api/api.html#lightgbm) for usage examples.

For the lightgbm_ray project, see [the lightgbm_ray documentation](https://docs.ray.io/en/latest/tune/api_docs/integration.html#lightgbm-tune-integration-lightgbm) for usage examples.

Note

`lightgbm_ray`

and `ray`

are not maintained by LightGBM’s maintainers. Bug reports or feature requests should be directed to [https://github.com/ray-project/lightgbm_ray/issues](https://github.com/ray-project/lightgbm_ray/issues) and [https://github.com/ray-project/ray/issues](https://github.com/ray-project/ray/issues) respectively.

### Mars[](#mars)

[Mars](https://mars-project.readthedocs.io/en/latest/) is a tensor-based framework for large-scale data computation. LightGBM integration, maintained within the Mars GitHub repository, can be used to perform distributed LightGBM training using `pymars`

.

See [the mars documentation](https://mars-project.readthedocs.io/en/latest/user_guide/learn/lightgbm.html) for usage examples.

Note

`Mars`

is not maintained by LightGBM’s maintainers. Bug reports or feature requests should be directed to [https://github.com/mars-project/mars/issues](https://github.com/mars-project/mars/issues).

---

## Source: https://lightgbm.readthedocs.io/en/latest/GPU-Tutorial.html

# LightGBM GPU Tutorial[](#lightgbm-gpu-tutorial)

The purpose of this document is to give you a quick step-by-step tutorial on GPU training.

We will use the GPU instance on [Microsoft Azure cloud computing platform](https://azure.microsoft.com/) for demonstration,
but you can use any machine with modern AMD or NVIDIA GPUs.

## GPU Setup[](#gpu-setup)

You need to launch a `NV`

type instance on Azure (available in East US, North Central US, South Central US, West Europe and Southeast Asia zones)
and select Ubuntu 16.04 LTS as the operating system.

For testing, the smallest `NV6`

type virtual machine is sufficient, which includes 1/2 M60 GPU, with 8 GB memory, 180 GB/s memory bandwidth and 4,825 GFLOPS peak computation power.
Don’t use the `NC`

type instance as the GPUs (K80) are based on an older architecture (Kepler).

First we need to install minimal NVIDIA drivers and OpenCL development environment:

```
sudo apt-get update
sudo apt-get install --no-install-recommends nvidia-375
sudo apt-get install --no-install-recommends nvidia-opencl-icd-375 nvidia-opencl-dev opencl-headers
```

After installing the drivers you need to restart the server.

```
sudo init 6
```

After about 30 seconds, the server should be up again.

If you are using an AMD GPU, you should download and install the [AMDGPU-Pro](https://www.amd.com/en/support.html) driver and also install packages `ocl-icd-libopencl1`

and `ocl-icd-opencl-dev`

.

## Build LightGBM[](#build-lightgbm)

Now install necessary building tools and dependencies:

```
sudo apt-get install --no-install-recommends git cmake build-essential libboost-dev libboost-system-dev libboost-filesystem-dev
```

The `NV6`

GPU instance has a 320 GB ultra-fast SSD mounted at `/mnt`

.
Let’s use it as our workspace (skip this if you are using your own machine):

```
sudo mkdir -p /mnt/workspace
sudo chown $(whoami):$(whoami) /mnt/workspace
cd /mnt/workspace
```

Now we are ready to checkout LightGBM and compile it with GPU support:

```
git clone --recursive https://github.com/lightgbm-org/LightGBM
cd LightGBM
cmake -B build -S . -DUSE_GPU=1
# if you have installed NVIDIA CUDA to a customized location, you should specify paths to OpenCL headers and library like the following:
# cmake -B build -S . -DUSE_GPU=1 -DOpenCL_LIBRARY=/usr/local/cuda/lib64/libOpenCL.so -DOpenCL_INCLUDE_DIR=/usr/local/cuda/include/
cmake --build build -j$(nproc)
```

You will see two binaries are generated, `lightgbm`

and `lib_lightgbm.so`

.

If you are building on macOS, you probably need to remove macro `BOOST_COMPUTE_USE_OFFLINE_CACHE`

in `src/treelearner/gpu_tree_learner.h`

to avoid a known crash bug in Boost.Compute.

## Install Python Interface (optional)[](#install-python-interface-optional)

If you want to use the Python interface of LightGBM, you can install it now (along with some necessary Python-package dependencies):

```
sudo apt-get -y install python3-pip python3-venv
sudo -H pip install numpy scipy scikit-learn -U
sudo sh ./build-python.sh install --precompile
```

You need to set an additional parameter `"device" : "gpu"`

(along with your other options like `learning_rate`

, `num_leaves`

, etc) to use GPU in Python.

You can read our [Python-package Examples](https://github.com/lightgbm-org/LightGBM/tree/master/examples/python-guide) for more information on how to use the Python interface.

## Dataset Preparation[](#dataset-preparation)

Using the following commands to prepare the Higgs dataset:

```
git clone https://github.com/guolinke/boosting_tree_benchmarks.git
cd boosting_tree_benchmarks/data
wget "https://archive.ics.uci.edu/ml/machine-learning-databases/00280/HIGGS.csv.gz"
gunzip HIGGS.csv.gz
python higgs2libsvm.py
cd ../..
ln -s boosting_tree_benchmarks/data/higgs.train
ln -s boosting_tree_benchmarks/data/higgs.test
```

Now we create a configuration file for LightGBM by running the following commands (please copy the entire block and run it as a whole):

```
cat > lightgbm_gpu.conf <<EOF
max_bin = 63
num_leaves = 255
num_iterations = 50
learning_rate = 0.1
tree_learner = serial
task = train
is_training_metric = false
min_data_in_leaf = 1
min_sum_hessian_in_leaf = 100
ndcg_eval_at = 1,3,5,10
device = gpu
gpu_platform_id = 0
gpu_device_id = 0
EOF
echo "num_threads=$(nproc)" >> lightgbm_gpu.conf
```

GPU is enabled in the configuration file we just created by setting `device=gpu`

.
In this configuration we use the first GPU installed on the system (`gpu_platform_id=0`

and `gpu_device_id=0`

). If `gpu_platform_id`

or `gpu_device_id`

is not set, the default platform and GPU will be selected.
You might have multiple platforms (AMD/Intel/NVIDIA) or GPUs. You can use the [clinfo](https://github.com/Oblomov/clinfo) utility to identify the GPUs on each platform. On Ubuntu, you can install `clinfo`

by executing `sudo apt-get install clinfo`

. If you have a discrete GPU by AMD/NVIDIA and an integrated GPU by Intel, make sure to select the correct `gpu_platform_id`

to use the discrete GPU.

## Run Your First Learning Task on GPU[](#run-your-first-learning-task-on-gpu)

Now we are ready to start GPU training!

First we want to verify the GPU works correctly. Run the following command to train on GPU, and take a note of the AUC after 50 iterations:

```
./lightgbm config=lightgbm_gpu.conf data=higgs.train valid=higgs.test objective=binary metric=auc
```

Now train the same dataset on CPU using the following command. You should observe a similar AUC:

```
./lightgbm config=lightgbm_gpu.conf data=higgs.train valid=higgs.test objective=binary metric=auc device=cpu
```

Now we can make a speed test on GPU without calculating AUC after each iteration.

```
./lightgbm config=lightgbm_gpu.conf data=higgs.train objective=binary metric=auc
```

Speed test on CPU:

```
./lightgbm config=lightgbm_gpu.conf data=higgs.train objective=binary metric=auc device=cpu
```

You should observe over three times speedup on this GPU.

The GPU acceleration can be used on other tasks/metrics (regression, multi-class classification, ranking, etc) as well. For example, we can train the Higgs dataset on GPU as a regression task:

```
./lightgbm config=lightgbm_gpu.conf data=higgs.train objective=regression_l2 metric=l2
```

Also, you can compare the training speed with CPU:

```
./lightgbm config=lightgbm_gpu.conf data=higgs.train objective=regression_l2 metric=l2 device=cpu
```

## Further Reading[](#further-reading)

## Reference[](#reference)

Please kindly cite the following article in your publications if you find the GPU acceleration useful:

Huan Zhang, Si Si and Cho-Jui Hsieh. “[GPU Acceleration for Large-scale Tree Boosting](https://arxiv.org/abs/1706.08359).” SysML Conference, 2018.

---

## Source: https://lightgbm.readthedocs.io/en/latest/Advanced-Topics.html

# Advanced Topics[](#advanced-topics)

## Missing Value Handle[](#missing-value-handle)

LightGBM enables the missing value handle by default. Disable it by setting

`use_missing=false`

.LightGBM uses NA (NaN) to represent missing values by default. Change it to use zero by setting

`zero_as_missing=true`

.When

`zero_as_missing=false`

(default), the unrecorded values in sparse matrices (and LightSVM) are treated as zeros.When

`zero_as_missing=true`

, NA and zeros (including unrecorded values in sparse matrices (and LightSVM)) are treated as missing.

## Categorical Feature Support[](#categorical-feature-support)

LightGBM offers good accuracy with integer-encoded categorical features. LightGBM applies

[Fisher (1958)](https://www.jstor.org/stable/2281952)to find the optimal split over categories as[described here](./Features.html#optimal-split-for-categorical-features). This often performs better than one-hot encoding.Use

`categorical_feature`

to specify the categorical features. Refer to the parameter`categorical_feature`

in[Parameters](./Parameters.html#categorical_feature).Categorical features will be cast to

`int32`

(integer codes will be extracted from pandas categoricals in the Python-package) so they must be encoded as non-negative integers (negative values will be treated as missing) less than`Int32.MaxValue`

(2147483647). It is best to use a contiguous range of integers started from zero. Floating point numbers in categorical features will be rounded towards 0.Use

`min_data_per_group`

,`cat_smooth`

to deal with over-fitting (when`#data`

is small or`#category`

is large).For a categorical feature with high cardinality (

`#category`

is large), it often works best to treat the feature as numeric, either by simply ignoring the categorical interpretation of the integers or by embedding the categories in a low-dimensional numeric space.

## LambdaRank[](#lambdarank)

The label should be of type

`int`

, such that larger numbers correspond to higher relevance (e.g. 0:bad, 1:fair, 2:good, 3:perfect).Use

`label_gain`

to set the gain(weight) of`int`

label.Use

`lambdarank_truncation_level`

to truncate the max DCG.

## Cost Efficient Gradient Boosting[](#cost-efficient-gradient-boosting)

[Cost Efficient Gradient Boosting](https://proceedings.neurips.cc/paper/2017/hash/4fac9ba115140ac4f1c22da82aa0bc7f-Abstract.html) (CEGB) makes it possible to penalise boosting based on the cost of obtaining feature values.
CEGB penalises learning in the following ways:

Each time a tree is split, a penalty of

`cegb_penalty_split`

is applied.When a feature is used for the first time,

`cegb_penalty_feature_coupled`

is applied. This penalty can be different for each feature and should be specified as one`double`

per feature.When a feature is used for the first time for a data row,

`cegb_penalty_feature_lazy`

is applied. Like`cegb_penalty_feature_coupled`

, this penalty is specified as one`double`

per feature.

Each of the penalties above is scaled by `cegb_tradeoff`

.
Using this parameter, it is possible to change the overall strength of the CEGB penalties by changing only one parameter.

## Parameters Tuning[](#parameters-tuning)

Refer to

[Parameters Tuning](./Parameters-Tuning.html).

## Distributed Learning[](#distributed-learning)

Refer to

[Distributed Learning Guide](./Parallel-Learning-Guide.html).

## GPU Support[](#gpu-support)

Refer to

[GPU Tutorial](./GPU-Tutorial.html)and[GPU Targets](./GPU-Targets.html).

## Support for Position Bias Treatment[](#support-for-position-bias-treatment)

Often the relevance labels provided in Learning-to-Rank tasks might be derived from implicit user feedback (e.g., clicks) and therefore might be biased due to their position/location on the screen when having been presented to a user. LightGBM can make use of positional data.

For example, consider the case where you expect that the first 3 results from a search engine will be visible in users’ browsers without scrolling, and all other results for a query would require scrolling.

LightGBM could be told to account for the position bias from results being “above the fold” by providing a `positions`

array encoded as follows:

```
0
0
0
1
1
0
0
0
1
...
```

Where `0 = "above the fold"`

and `1 = "requires scrolling"`

.
The specific values are not important, as long as they are consistent across all observations in the training data.
An encoding like `100 = "above the fold"`

and `17 = "requires scrolling"`

would result in exactly the same trained model.

In that way, `positions`

in LightGBM’s API are similar to a categorical feature.
Just as with non-ordinal categorical features, an integer representation is just used for memory and computational efficiency… LightGBM does not care about the absolute or relative magnitude of the values.

Unlike a categorical feature, however, `positions`

are used to adjust the target to reduce the bias in predictions made by the trained model.

The position file corresponds with training data file line by line, and has one position per line. And if the name of training data file is `train.txt`

, the position file should be named as `train.txt.position`

and placed in the same folder as the data file.
In this case, LightGBM will load the position file automatically if it exists. The positions can also be specified through the `Dataset`

constructor when using Python API. If the positions are specified in both approaches, the `.position`

file will be ignored.

Currently, implemented is an approach to model position bias by using an idea of Generalized Additive Models ([GAM](https://en.wikipedia.org/wiki/Generalized_additive_model)) to linearly decompose the document score `s`

into the sum of a relevance component `f`

and a positional component `g`

: `s(x, pos) = f(x) + g(pos)`

where the former component depends on the original query-document features and the latter depends on the position of an item.
During the training, the compound scoring function `s(x, pos)`

is fit with a standard ranking algorithm (e.g., LambdaMART) which boils down to jointly learning the relevance component `f(x)`

(it is later returned as an unbiased model) and the position factors `g(pos)`

that help better explain the observed (biased) labels.
Similar score decomposition ideas have previously been applied for classification & pointwise ranking tasks with assumptions of binary labels and binary relevance (a.k.a. “two-tower” models, refer to the papers: [Towards Disentangling Relevance and Bias in Unbiased Learning to Rank](https://arxiv.org/abs/2212.13937), [PAL: a position-bias aware learning framework for CTR prediction in live recommender systems](https://dl.acm.org/doi/10.1145/3298689.3347033), [A General Framework for Debiasing in CTR Prediction](https://arxiv.org/abs/2112.02767)).
In LightGBM, we adapt this idea to general pairwise Lerarning-to-Rank with arbitrary ordinal relevance labels.
Besides, GAMs have been used in the context of explainable ML ([Accurate Intelligible Models with Pairwise Interactions](https://www.cs.cornell.edu/~yinlou/projects/gam/)) to linearly decompose the contribution of each feature (and possibly their pairwise interactions) to the overall score, for subsequent analysis and interpretation of their effects in the trained models.

---

## Source: https://lightgbm.readthedocs.io/en/latest/FAQ.html

# LightGBM FAQ[](#lightgbm-faq)

Please post questions, feature requests, and bug reports at [https://github.com/lightgbm-org/LightGBM/issues](https://github.com/lightgbm-org/LightGBM/issues).

This project is mostly maintained by volunteers, so please be patient. If your request is time-sensitive or more than a month goes by without a response, please tag the maintainers below for help.

[@guolinke](https://github.com/guolinke)**Guolin Ke**[@shiyu1994](https://github.com/shiyu1994)**Yu Shi**[@jameslamb](https://github.com/jameslamb)**James Lamb**[@jmoralez](https://github.com/jmoralez)**José Morales**

## General LightGBM Questions[](#general-lightgbm-questions)

### 1. Where do I find more details about LightGBM parameters?[](#where-do-i-find-more-details-about-lightgbm-parameters)

Take a look at [Parameters](./Parameters.html).

### 2. On datasets with millions of features, training does not start (or starts after a very long time).[](#on-datasets-with-millions-of-features-training-does-not-start-or-starts-after-a-very-long-time)

Use a smaller value for `bin_construct_sample_cnt`

and a larger value for `min_data`

.

### 3. When running LightGBM on a large dataset, my computer runs out of RAM.[](#when-running-lightgbm-on-a-large-dataset-my-computer-runs-out-of-ram)

**Multiple Solutions**: set the `histogram_pool_size`

parameter to the MB you want to use for LightGBM (histogram_pool_size + dataset size = approximately RAM used),
lower `num_leaves`

or lower `max_bin`

(see [lightgbm-org/LightGBM#562](https://github.com/lightgbm-org/LightGBM/issues/562)).

### 4. I am using Windows. Should I use Visual Studio or MinGW for compiling LightGBM?[](#i-am-using-windows-should-i-use-visual-studio-or-mingw-for-compiling-lightgbm)

Visual Studio [performs best for LightGBM](https://github.com/lightgbm-org/LightGBM/issues/542).

### 5. When using LightGBM GPU, I cannot reproduce results over several runs.[](#when-using-lightgbm-gpu-i-cannot-reproduce-results-over-several-runs)

This is normal and expected behaviour, but you may try to use `gpu_use_dp = true`

for reproducibility
(see [lightgbm-org/LightGBM#560](https://github.com/lightgbm-org/LightGBM/pull/560#issuecomment-304561654)).
You may also use the CPU version.

### 6. Bagging is not reproducible when changing the number of threads.[](#bagging-is-not-reproducible-when-changing-the-number-of-threads)

~~
LightGBM bagging is multithreaded, so its output depends on the number of threads used.
There is ~~[no workaround currently](https://github.com/lightgbm-org/LightGBM/issues/632).

Starting from [#2804](https://github.com/lightgbm-org/LightGBM/pull/2804) bagging result doesn’t depend on the number of threads.
So this issue should be solved in the latest version.

### 7. I tried to use Random Forest mode, and LightGBM crashes![](#i-tried-to-use-random-forest-mode-and-lightgbm-crashes)

This is expected behaviour for arbitrary parameters. To enable Random Forest,
you must use `bagging_fraction`

and `feature_fraction`

different from 1, along with a `bagging_freq`

.
[This thread](https://github.com/lightgbm-org/LightGBM/issues/691) includes an example.

### 8. CPU usage is low (like 10%) in Windows when using LightGBM on very large datasets with many-core systems.[](#cpu-usage-is-low-like-10-in-windows-when-using-lightgbm-on-very-large-datasets-with-many-core-systems)

Please use [Visual Studio](https://visualstudio.microsoft.com/downloads/)
as it may be [10x faster than MinGW](https://github.com/lightgbm-org/LightGBM/issues/749) especially for very large trees.

### 9. When I’m trying to specify a categorical column with the `categorical_feature`

parameter, I get the following sequence of warnings, but there are no negative values in the column.[](#when-i-m-trying-to-specify-a-categorical-column-with-the-categorical-feature-parameter-i-get-the-following-sequence-of-warnings-but-there-are-no-negative-values-in-the-column)

```
[LightGBM] [Warning] Met negative value in categorical features, will convert it to NaN
[LightGBM] [Warning] There are no meaningful features, as all feature values are constant.
```

The column you’re trying to pass via `categorical_feature`

likely contains very large values.
Categorical features in LightGBM are limited by int32 range,
so you cannot pass values that are greater than `Int32.MaxValue`

(2147483647) as categorical features (see [lightgbm-org/LightGBM#1359](https://github.com/lightgbm-org/LightGBM/issues/1359)).
You should convert them to integers ranging from zero to the number of categories first.

### 10. LightGBM crashes randomly with the error like: `Initializing libiomp5.dylib, but found libomp.dylib already initialized.`

[](#lightgbm-crashes-randomly-with-the-error-like-initializing-libiomp5-dylib-but-found-libomp-dylib-already-initialized)

```
OMP: Error #15: Initializing libiomp5.dylib, but found libomp.dylib already initialized.
OMP: Hint: This means that multiple copies of the OpenMP runtime have been linked into the program. That is dangerous, since it can degrade performance or cause incorrect results. The best thing to do is to ensure that only a single OpenMP runtime is linked into the process, e.g. by avoiding static linking of the OpenMP runtime in any library. As an unsafe, unsupported, undocumented workaround you can set the environment variable KMP_DUPLICATE_LIB_OK=TRUE to allow the program to continue to execute, but that may cause crashes or silently produce incorrect results. For more information, please see http://www.intel.com/software/products/support/.
```

**Possible Cause**: This error means that you have multiple OpenMP libraries installed on your machine and they conflict with each other.
(File extensions in the error message may differ depending on the operating system).

If you are using Python distributed by Conda, then it is highly likely that the error is caused by the `numpy`

package from Conda which includes the `mkl`

package which in turn conflicts with the system-wide library.
In this case you can update the `numpy`

package in Conda or replace the Conda’s OpenMP library instance with system-wide one by creating a symlink to it in Conda environment folder `$CONDA_PREFIX/lib`

.

**Solution**: Assuming you are using macOS with Homebrew, the command which overwrites OpenMP library files in the current active Conda environment with symlinks to the system-wide library ones installed by Homebrew:

```
ln -sf `ls -d "$(brew --cellar libomp)"/*/lib`/* $CONDA_PREFIX/lib
```

The described above fix worked fine before the release of OpenMP 8.0.0 version.
Starting from 8.0.0 version, Homebrew formula for OpenMP includes `-DLIBOMP_INSTALL_ALIASES=OFF`

option which leads to that the fix doesn’t work anymore.
However, you can create symlinks to library aliases manually:

```
for LIBOMP_ALIAS in libgomp.dylib libiomp5.dylib libomp.dylib; do sudo ln -sf "$(brew --cellar libomp)"/*/lib/libomp.dylib $CONDA_PREFIX/lib/$LIBOMP_ALIAS; done
```

Another workaround would be removing MKL optimizations from Conda’s packages completely:

```
conda install nomkl
```

If this is not your case, then you should find conflicting OpenMP library installations on your own and leave only one of them.

### 11. LightGBM hangs when multithreading (OpenMP) and using forking in Linux at the same time.[](#lightgbm-hangs-when-multithreading-openmp-and-using-forking-in-linux-at-the-same-time)

Use `nthreads=1`

to disable multithreading of LightGBM. There is a bug with OpenMP which hangs forked sessions
with multithreading activated. A more expensive solution is to use new processes instead of using fork, however,
keep in mind it is creating new processes where you have to copy memory and load libraries (example: if you want to
fork 16 times your current process, then you will require to make 16 copies of your dataset in memory)
(see [lightgbm-org/LightGBM#1789](https://github.com/lightgbm-org/LightGBM/issues/1789#issuecomment-433713383)).

An alternative, if multithreading is really necessary inside the forked sessions, would be to compile LightGBM with Intel toolchain. Intel compilers are unaffected by this bug.

For C/C++ users, any OpenMP feature cannot be used before the fork happens. If an OpenMP feature is used before the fork happens (example: using OpenMP for forking), OpenMP will hang inside the forked sessions. Use new processes instead and copy memory as required by creating new processes instead of forking (or, use Intel compilers).

Cloud platform container services may cause LightGBM to hang, if they use Linux fork to run multiple containers on a
single instance. For example, LightGBM hangs in AWS Batch array jobs, which [use the ECS agent](https://aws.amazon.com/batch/faqs) to manage multiple running jobs. Setting `nthreads=1`

mitigates the issue.

### 12. Why is early stopping not enabled by default in LightGBM?[](#why-is-early-stopping-not-enabled-by-default-in-lightgbm)

Early stopping involves choosing a validation set, a special type of holdout which is used to evaluate the current state of the model after each iteration to see if training can stop.

In `LightGBM`

, [we have decided to require that users specify this set directly](./Parameters.html#valid). Many options exist for splitting training data into training, test, and validation sets.

The appropriate splitting strategy depends on the task and domain of the data, information that a modeler has but which `LightGBM`

as a general-purpose tool does not.

### 13. Does LightGBM support direct loading data from zero-based or one-based LibSVM format file?[](#does-lightgbm-support-direct-loading-data-from-zero-based-or-one-based-libsvm-format-file)

LightGBM supports loading data from zero-based LibSVM format file directly.

### 14. Why CMake cannot find the compiler when compiling LightGBM with MinGW?[](#why-cmake-cannot-find-the-compiler-when-compiling-lightgbm-with-mingw)

```
CMake Error: CMAKE_C_COMPILER not set, after EnableLanguage
CMake Error: CMAKE_CXX_COMPILER not set, after EnableLanguage
```

This is a known issue of CMake when using MinGW. The easiest solution is to run again your `cmake`

command to bypass the one time stopper from CMake. Or you can upgrade your version of CMake to at least version 3.17.0.

See [lightgbm-org/LightGBM#3060](https://github.com/lightgbm-org/LightGBM/issues/3060#issuecomment-626338538) for more details.

### 15. Where can I find LightGBM’s logo to use it in my presentation?[](#where-can-i-find-lightgbm-s-logo-to-use-it-in-my-presentation)

You can find LightGBM’s logo in different file formats and resolutions [here](https://github.com/lightgbm-org/LightGBM/tree/master/docs/logo).

### 16. LightGBM crashes randomly or operating system hangs during or after running LightGBM.[](#lightgbm-crashes-randomly-or-operating-system-hangs-during-or-after-running-lightgbm)

**Possible Cause**: This behavior may indicate that you have multiple OpenMP libraries installed on your machine and they conflict with each other, similarly to the `FAQ #10`

.

If you are using any Python-package that depends on `threadpoolctl`

, you also may see the following warning in your logs in this case:

```
/root/miniconda/envs/test-env/lib/python3.8/site-packages/threadpoolctl.py:546: RuntimeWarning:
Found Intel OpenMP ('libiomp') and LLVM OpenMP ('libomp') loaded at
the same time. Both libraries are known to be incompatible and this
can cause random crashes or deadlocks on Linux when loaded in the
same Python program.
Using threadpoolctl may cause crashes or deadlocks. For more
information and possible workarounds, please see
https://github.com/joblib/threadpoolctl/blob/master/multiple_openmp.md
```

Detailed description of conflicts between multiple OpenMP instances is provided in the [following document](https://github.com/joblib/threadpoolctl/blob/master/multiple_openmp.md).

**Solution**: Assuming you are using LightGBM Python-package and conda as a package manager, we strongly recommend using `conda-forge`

channel as the only source of all your Python package installations because it contains built-in patches to workaround OpenMP conflicts. Some other workarounds are listed [here](https://github.com/joblib/threadpoolctl/blob/master/multiple_openmp.md) under the “Workarounds for Intel OpenMP and LLVM OpenMP case” section.

If this is not your case, then you should find conflicting OpenMP library installations on your own and leave only one of them.

### 17. Loading LightGBM fails like: `cannot allocate memory in static TLS block`

[](#loading-lightgbm-fails-like-cannot-allocate-memory-in-static-tls-block)

When loading LightGBM, you may encounter errors like the following.

```
lib/libgomp.so.1: cannot allocate memory in static TLS block
```

This most commonly happens on aarch64 Linux systems.

`gcc`

’s OpenMP library (`libgomp.so`

) tries to allocate a small amount of static thread-local storage (“TLS”)
when it’s dynamically loaded.

That error can happen when the loader isn’t able to find a large enough block of memory.

On aarch64 Linux, processes and loaded libraries share the same pool of static TLS, which makes such failures more likely. See these discussions:

If you are experiencing this issue when using the `lightgbm`

Python-package, try upgrading
to at least `v4.6.0`

.

For older versions of the Python-package, or for other LightGBM APIs, this issue can
often be avoided by loading `libgomp.so.1`

. That can be done directly by setting environment
variable `LD_PRELOAD`

, like this:

```
export LD_PRELOAD=/root/miniconda3/envs/test-env/lib/libgomp.so.1
```

It can also be done indirectly by changing the order that other libraries are loaded into processes, which varies by programming language and application type.

For more details, see these discussions:

## R-package[](#r-package)

### 1. Any training command using LightGBM does not work after an error occurred during the training of a previous LightGBM model.[](#any-training-command-using-lightgbm-does-not-work-after-an-error-occurred-during-the-training-of-a-previous-lightgbm-model)

In older versions of the R-package (prior to `v3.3.0`

), this could happen occasionally and the solution was to run `lgb.unloader(wipe = TRUE)`

to remove all LightGBM-related objects. Some conversation about this could be found in [lightgbm-org/LightGBM#698](https://github.com/lightgbm-org/LightGBM/issues/698).

That is no longer necessary as of `v3.3.0`

, and function `lgb.unloader()`

has since been removed from the R-package.

### 2. I used `setinfo()`

, tried to print my `lgb.Dataset`

, and now the R console froze![](#i-used-setinfo-tried-to-print-my-lgb-dataset-and-now-the-r-console-froze)

As of at least LightGBM v3.3.0, this issue has been resolved and printing a `Dataset`

object does not cause the console to freeze.

In older versions, avoid printing the `Dataset`

after calling `setinfo()`

.

As of LightGBM v4.0.0, `setinfo()`

has been replaced by a new method, `set_field()`

.

### 3. `error in data.table::data.table()...argument 2 is NULL`

.[](#error-in-data-table-data-table-argument-2-is-null)

If you are experiencing this error when running `lightgbm`

, you may be facing the same issue reported in [#2715](https://github.com/lightgbm-org/LightGBM/issues/2715) and later in [#2989](https://github.com/lightgbm-org/LightGBM/pull/2989#issuecomment-614374151). We have seen that in some situations, using `data.table`

1.11.x results in this error. To get around this, you can upgrade your version of `data.table`

to at least version 1.12.0.

### 4. `package/dependency ‘Matrix’ is not available ...`

[](#package-dependency-matrix-is-not-available)

In April 2024, `Matrix==1.7-0`

was published to CRAN.
That version had a floor of `R (>=4.4.0)`

.
`{Matrix}`

is a hard runtime dependency of `{lightgbm}`

, so on any version of R older than `4.4.0`

, running `install.packages("lightgbm")`

results in something like the following.

```
package ‘Matrix’ is not available for this version of R
```

To fix that without upgrading to R 4.4.0 or greater, manually install an older version of `{Matrix}`

.

```
install.packages('https://cran.r-project.org/src/contrib/Archive/Matrix/Matrix_1.6-5.tar.gz', repos = NULL)
```

## Python-package[](#python-package)

### 1. `Error: setup script specifies an absolute path`

when installing from GitHub using `python setup.py install`

.[](#error-setup-script-specifies-an-absolute-path-when-installing-from-github-using-python-setup-py-install)

Note

As of v4.0.0, `lightgbm`

does not support directly invoking `setup.py`

.
This answer refers only to versions of `lightgbm`

prior to v4.0.0.

```
error: Error: setup script specifies an absolute path:
/Users/Microsoft/LightGBM/python-package/lightgbm/../../lib_lightgbm.so
setup() arguments must *always* be /-separated paths relative to the setup.py directory, *never* absolute paths.
```

This error should be solved in latest version.
If you still meet this error, try to remove `lightgbm.egg-info`

folder in your Python-package and reinstall,
or check [this thread on stackoverflow](https://stackoverflow.com/questions/18085571/pip-install-error-setup-script-specifies-an-absolute-path).

### 2. Error messages: `Cannot ... before construct dataset`

.[](#error-messages-cannot-before-construct-dataset)

I see error messages like…

```
Cannot get/set label/weight/init_score/group/num_data/num_feature before construct dataset
```

but I’ve already constructed a dataset by some code like:

```
train = lightgbm.Dataset(X_train, y_train)
```

or error messages like

```
Cannot set predictor/reference/categorical feature after freed raw data, set free_raw_data=False when construct Dataset to avoid this.
```

**Solution**: Because LightGBM constructs bin mappers to build trees, and train and valid Datasets within one Booster share the same bin mappers,
categorical features and feature names etc., the Dataset objects are constructed when constructing a Booster.
If you set `free_raw_data=True`

(default), the raw data (with Python data struct) will be freed.
So, if you want to:

get label (or weight/init_score/group/data) before constructing a dataset, it’s same as get

`self.label`

;set label (or weight/init_score/group) before constructing a dataset, it’s same as

`self.label=some_label_array`

;get num_data (or num_feature) before constructing a dataset, you can get data with

`self.data`

. Then, if your data is`numpy.ndarray`

, use some code like`self.data.shape`

. But do not do this after subsetting the Dataset, because you’ll get always`None`

;set predictor (or reference/categorical feature) after constructing a dataset, you should set

`free_raw_data=False`

or init a Dataset object with the same raw data.

### 3. I encounter segmentation faults (segfaults) randomly after installing LightGBM from PyPI using `pip install lightgbm`

.[](#i-encounter-segmentation-faults-segfaults-randomly-after-installing-lightgbm-from-pypi-using-pip-install-lightgbm)

We are doing our best to provide universal wheels which have high running speed and are compatible with any hardware, OS, compiler, etc. at the same time.
However, sometimes it’s just impossible to guarantee the possibility of usage of LightGBM in any specific environment (see [lightgbm-org/LightGBM#1743](https://github.com/lightgbm-org/LightGBM/issues/1743)).

Therefore, the first thing you should try in case of segfaults is **compiling from the source** using `pip install --no-binary lightgbm lightgbm`

.
For the OS-specific prerequisites see [https://github.com/lightgbm-org/LightGBM/blob/master/python-package/README.rst](https://github.com/lightgbm-org/LightGBM/blob/master/python-package/README.rst).

Also, feel free to post a new issue in our GitHub repository. We always look at each case individually and try to find a root cause.

### 4. I would like to install LightGBM from conda. What channel should I choose?[](#i-would-like-to-install-lightgbm-from-conda-what-channel-should-i-choose)

We strongly recommend installation from the `conda-forge`

channel and not from the `default`

one.

For some specific examples, see [this comment](https://github.com/lightgbm-org/LightGBM/issues/4948#issuecomment-1013766397).

In addition, as of `lightgbm==4.4.0`

, the `conda-forge`

package automatically supports CUDA-based GPU acceleration.

### 5. How do I subclass `scikit-learn`

estimators?[](#how-do-i-subclass-scikit-learn-estimators)

For `lightgbm <= 4.5.0`

, copy all of the constructor arguments from the corresponding
`lightgbm`

class into the constructor of your custom estimator.

For later versions, just ensure that the constructor of your custom estimator calls `super().__init__()`

.

Consider the example below, which implements a regressor that allows creation of truncated predictions.
This pattern will work with `lightgbm > 4.5.0`

.

```
import numpy as np
from lightgbm import LGBMRegressor
from sklearn.datasets import make_regression
class TruncatedRegressor(LGBMRegressor):
def __init__(self, **kwargs):
super().__init__(**kwargs)
def predict(self, X, max_score: float = np.inf):
preds = super().predict(X)
np.clip(preds, a_min=None, a_max=max_score, out=preds)
return preds
X, y = make_regression(n_samples=1_000, n_features=4)
reg_trunc = TruncatedRegressor().fit(X, y)
preds = reg_trunc.predict(X)
print(f"mean: {preds.mean():.2f}, max: {preds.max():.2f}")
# mean: -6.81, max: 345.10
preds_trunc = reg_trunc.predict(X, max_score=preds.mean())
print(f"mean: {preds_trunc.mean():.2f}, max: {preds_trunc.max():.2f}")
# mean: -56.50, max: -6.81
```

---

## Source: https://lightgbm.readthedocs.io/en/latest/Development-Guide.html

# Development Guide[](#development-guide)

## Algorithms[](#algorithms)

Refer to [Features](./Features.html) for understanding of important algorithms used in LightGBM.

## Classes and Code Structure[](#classes-and-code-structure)

### Important Classes[](#important-classes)

Class |
Description |
|---|---|
|
The entrance of application, including training and prediction logic |
|
Data structure used for storing feature discrete values (converted from float values) |
|
Boosting interface (GBDT, DART, etc.) |
|
Stores parameters and configurations |
|
Stores information of dataset |
|
Used to construct dataset |
|
Stores the data of feature, could be multiple features |
|
Evaluation metrics |
|
Network interfaces and communication algorithms |
|
Objective functions used to train |
|
Stores information of tree model |
|
Used to learn trees |

### Code Structure[](#code-structure)

Path |
Description |
|---|---|
./include |
Header files |
./include/utils |
Some common functions |
./src/application |
Implementations of training and prediction logic |
./src/boosting |
Implementations of Boosting |
./src/io |
Implementations of IO related classes, including |
./src/metric |
Implementations of metrics |
./src/network |
Implementations of network functions |
./src/objective |
Implementations of objective functions |
./src/treelearner |
Implementations of tree learners |

## Documents API[](#documents-api)

Refer to [docs README](./README.html).

## C API[](#c-api)

Refer to [C API](./C-API.html) or the comments in [c_api.h](https://github.com/lightgbm-org/LightGBM/blob/master/include/LightGBM/c_api.h) file, from which the documentation is generated.

## Tests[](#tests)

C++ unit tests are located in the `./tests/cpp_tests`

folder and written with the help of Google Test framework.
To run tests locally first refer to the [Installation Guide](./Installation-Guide.html#build-c-unit-tests) for how to build tests and then simply run compiled executable file.
It is highly recommended to build tests with [sanitizers](./Installation-Guide.html#sanitizers).

## High Level Language Package[](#high-level-language-package)

See the implementations at [Python-package](https://github.com/lightgbm-org/LightGBM/tree/master/python-package) and [R-package](https://github.com/lightgbm-org/LightGBM/tree/master/R-package).

## Questions[](#questions)

Refer to [FAQ](./FAQ.html).

Also feel free to open [issues](https://github.com/lightgbm-org/LightGBM/issues) if you met problems.

---

## Source: https://lightgbm.readthedocs.io/en/latest/genindex.html

Contents:
Installation Guide
Quick Start
Python Quick Start
Features
Experiments
Parameters
Parameters Tuning
C API
Python API
R API
Distributed Learning Guide
GPU Tutorial
Advanced Topics
FAQ
Development Guide
LightGBM
Index
Index
_
|
A
|
B
|
C
|
D
|
E
|
F
|
G
|
I
|
L
|
M
|
N
|
O
|
P
|
R
|
S
|
T
|
U
_
__init__() (lightgbm.Booster method)
(lightgbm.CVBooster method)
(lightgbm.DaskLGBMClassifier method)
(lightgbm.DaskLGBMRanker method)
(lightgbm.DaskLGBMRegressor method)
(lightgbm.Dataset method)
(lightgbm.LGBMClassifier method)
(lightgbm.LGBMModel method)
(lightgbm.LGBMRanker method)
(lightgbm.LGBMRegressor method)
(lightgbm.Sequence method)
A
add_features_from() (lightgbm.Dataset method)
add_valid() (lightgbm.Booster method)
B
batch_size (lightgbm.Sequence attribute)
best_iteration (lightgbm.CVBooster attribute)
best_iteration_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
best_score_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
Booster (class in lightgbm)
booster_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
BoosterHandle (C type)
boosters (lightgbm.CVBooster attribute)
ByteBufferHandle (C type)
C
C_API_DTYPE_FLOAT32 (C macro)
C_API_DTYPE_FLOAT64 (C macro)
C_API_DTYPE_INT32 (C macro)
C_API_DTYPE_INT64 (C macro)
C_API_FEATURE_IMPORTANCE_GAIN (C macro)
C_API_FEATURE_IMPORTANCE_SPLIT (C macro)
C_API_MATRIX_TYPE_CSC (C macro)
C_API_MATRIX_TYPE_CSR (C macro)
C_API_PREDICT_CONTRIB (C macro)
C_API_PREDICT_LEAF_INDEX (C macro)
C_API_PREDICT_NORMAL (C macro)
C_API_PREDICT_RAW_SCORE (C macro)
classes_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.LGBMClassifier property)
client_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
construct() (lightgbm.Dataset method)
create_tree_digraph() (in module lightgbm)
create_valid() (lightgbm.Dataset method)
current_iteration() (lightgbm.Booster method)
cv() (in module lightgbm)
CVBooster (class in lightgbm)
D
DaskLGBMClassifier (class in lightgbm)
DaskLGBMRanker (class in lightgbm)
DaskLGBMRegressor (class in lightgbm)
Dataset (class in lightgbm)
DatasetHandle (C type)
dump_model() (lightgbm.Booster method)
E
early_stopping() (in module lightgbm)
eval() (lightgbm.Booster method)
eval_train() (lightgbm.Booster method)
eval_valid() (lightgbm.Booster method)
evals_result_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
F
FastConfigHandle (C type)
feature_importance() (lightgbm.Booster method)
feature_importances_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
feature_name() (lightgbm.Booster method)
feature_name_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
feature_names_in_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
feature_num_bin() (lightgbm.Dataset method)
fit() (lightgbm.DaskLGBMClassifier method)
(lightgbm.DaskLGBMRanker method)
(lightgbm.DaskLGBMRegressor method)
(lightgbm.LGBMClassifier method)
(lightgbm.LGBMModel method)
(lightgbm.LGBMRanker method)
(lightgbm.LGBMRegressor method)
free_dataset() (lightgbm.Booster method)
free_network() (lightgbm.Booster method)
G
get_data() (lightgbm.Dataset method)
get_feature_name() (lightgbm.Dataset method)
get_field() (lightgbm.Dataset method)
get_group() (lightgbm.Dataset method)
get_init_score() (lightgbm.Dataset method)
get_label() (lightgbm.Dataset method)
get_leaf_output() (lightgbm.Booster method)
get_metadata_routing() (lightgbm.DaskLGBMClassifier method)
(lightgbm.DaskLGBMRanker method)
(lightgbm.DaskLGBMRegressor method)
(lightgbm.LGBMClassifier method)
(lightgbm.LGBMModel method)
(lightgbm.LGBMRanker method)
(lightgbm.LGBMRegressor method)
get_params() (lightgbm.DaskLGBMClassifier method)
(lightgbm.DaskLGBMRanker method)
(lightgbm.DaskLGBMRegressor method)
(lightgbm.Dataset method)
(lightgbm.LGBMClassifier method)
(lightgbm.LGBMModel method)
(lightgbm.LGBMRanker method)
(lightgbm.LGBMRegressor method)
get_position() (lightgbm.Dataset method)
get_ref_chain() (lightgbm.Dataset method)
get_split_value_histogram() (lightgbm.Booster method)
get_weight() (lightgbm.Dataset method)
I
INLINE_FUNCTION (C macro)
L
LastErrorMsg (C function)
LGBM_BoosterAddValidData (C function)
LGBM_BoosterCalcNumPredict (C function)
LGBM_BoosterCreate (C function)
LGBM_BoosterCreateFromModelfile (C function)
LGBM_BoosterDumpModel (C function)
LGBM_BoosterFeatureImportance (C function)
LGBM_BoosterFree (C function)
LGBM_BoosterFreePredictSparse (C function)
LGBM_BoosterGetCurrentIteration (C function)
LGBM_BoosterGetEval (C function)
LGBM_BoosterGetEvalCounts (C function)
LGBM_BoosterGetEvalNames (C function)
LGBM_BoosterGetFeatureNames (C function)
LGBM_BoosterGetLeafValue (C function)
LGBM_BoosterGetLinear (C function)
LGBM_BoosterGetLoadedParam (C function)
LGBM_BoosterGetLowerBoundValue (C function)
LGBM_BoosterGetNumClasses (C function)
LGBM_BoosterGetNumFeature (C function)
LGBM_BoosterGetNumPredict (C function)
LGBM_BoosterGetPredict (C function)
LGBM_BoosterGetUpperBoundValue (C function)
LGBM_BoosterLoadModelFromString (C function)
LGBM_BoosterMerge (C function)
LGBM_BoosterNumberOfTotalModel (C function)
LGBM_BoosterNumModelPerIteration (C function)
LGBM_BoosterPredictForArrow (C function)
LGBM_BoosterPredictForCSC (C function)
LGBM_BoosterPredictForCSR (C function)
LGBM_BoosterPredictForCSRSingleRow (C function)
LGBM_BoosterPredictForCSRSingleRowFast (C function)
LGBM_BoosterPredictForCSRSingleRowFastInit (C function)
LGBM_BoosterPredictForFile (C function)
LGBM_BoosterPredictForMat (C function)
LGBM_BoosterPredictForMats (C function)
LGBM_BoosterPredictForMatSingleRow (C function)
LGBM_BoosterPredictForMatSingleRowFast (C function)
LGBM_BoosterPredictForMatSingleRowFastInit (C function)
LGBM_BoosterPredictSparseOutput (C function)
LGBM_BoosterRefit (C function)
LGBM_BoosterResetParameter (C function)
LGBM_BoosterResetTrainingData (C function)
LGBM_BoosterRollbackOneIter (C function)
LGBM_BoosterSaveModel (C function)
LGBM_BoosterSaveModelToString (C function)
LGBM_BoosterSetLeafValue (C function)
LGBM_BoosterShuffleModels (C function)
LGBM_BoosterUpdateOneIter (C function)
LGBM_BoosterUpdateOneIterCustom (C function)
LGBM_BoosterValidateFeatureNames (C function)
LGBM_ByteBufferFree (C function)
LGBM_ByteBufferGetAt (C function)
LGBM_DatasetAddFeaturesFrom (C function)
LGBM_DatasetCreateByReference (C function)
LGBM_DatasetCreateFromArrow (C function)
LGBM_DatasetCreateFromCSC (C function)
LGBM_DatasetCreateFromCSR (C function)
LGBM_DatasetCreateFromCSRFunc (C function)
LGBM_DatasetCreateFromFile (C function)
LGBM_DatasetCreateFromMat (C function)
LGBM_DatasetCreateFromMats (C function)
LGBM_DatasetCreateFromSampledColumn (C function)
LGBM_DatasetCreateFromSerializedReference (C function)
LGBM_DatasetDumpText (C function)
LGBM_DatasetFree (C function)
LGBM_DatasetGetFeatureNames (C function)
LGBM_DatasetGetFeatureNumBin (C function)
LGBM_DatasetGetField (C function)
LGBM_DatasetGetNumData (C function)
LGBM_DatasetGetNumFeature (C function)
LGBM_DatasetGetSubset (C function)
LGBM_DatasetInitStreaming (C function)
LGBM_DatasetMarkFinished (C function)
LGBM_DatasetPushRows (C function)
LGBM_DatasetPushRowsByCSR (C function)
LGBM_DatasetPushRowsByCSRWithMetadata (C function)
LGBM_DatasetPushRowsWithMetadata (C function)
LGBM_DatasetSaveBinary (C function)
LGBM_DatasetSerializeReferenceToBinary (C function)
LGBM_DatasetSetFeatureNames (C function)
LGBM_DatasetSetField (C function)
LGBM_DatasetSetFieldFromArrow (C function)
LGBM_DatasetSetWaitForManualFinish (C function)
LGBM_DatasetUpdateParamChecking (C function)
LGBM_DumpParamAliases (C function)
LGBM_FastConfigFree (C function)
LGBM_GetLastError (C function)
LGBM_GetMaxThreads (C function)
LGBM_GetSampleCount (C function)
LGBM_NetworkFree (C function)
LGBM_NetworkInit (C function)
LGBM_NetworkInitWithFunctions (C function)
LGBM_RegisterLogCallback (C function)
LGBM_SampleIndices (C function)
LGBM_SetLastError (C function)
LGBM_SetMaxThreads (C function)
LGBMClassifier (class in lightgbm)
LGBMModel (class in lightgbm)
LGBMRanker (class in lightgbm)
LGBMRegressor (class in lightgbm)
log_evaluation() (in module lightgbm)
lower_bound() (lightgbm.Booster method)
M
model_from_string() (lightgbm.Booster method)
(lightgbm.CVBooster method)
model_to_string() (lightgbm.Booster method)
(lightgbm.CVBooster method)
N
n_classes_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.LGBMClassifier property)
n_estimators_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
n_features_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
n_features_in_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
n_iter_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
num_data() (lightgbm.Dataset method)
num_feature() (lightgbm.Booster method)
(lightgbm.Dataset method)
num_model_per_iteration() (lightgbm.Booster method)
num_trees() (lightgbm.Booster method)
O
objective_ (lightgbm.DaskLGBMClassifier property)
(lightgbm.DaskLGBMRanker property)
(lightgbm.DaskLGBMRegressor property)
(lightgbm.LGBMClassifier property)
(lightgbm.LGBMModel property)
(lightgbm.LGBMRanker property)
(lightgbm.LGBMRegressor property)
P
plot_importance() (in module lightgbm)
plot_metric() (in module lightgbm)
plot_split_value_histogram() (in module lightgbm)
plot_tree() (in module lightgbm)
predict() (lightgbm.Booster method)
(lightgbm.DaskLGBMClassifier method)
(lightgbm.DaskLGBMRanker method)
(lightgbm.DaskLGBMRegressor method)
(lightgbm.LGBMClassifier method)
(lightgbm.LGBMModel method)
(lightgbm.LGBMRanker method)
(lightgbm.LGBMRegressor method)
predict_proba() (lightgbm.DaskLGBMClassifier method)
(lightgbm.LGBMClassifier method)
R
record_evaluation() (in module lightgbm)
refit() (lightgbm.Booster method)
register_logger() (in module lightgbm)
reset_parameter() (in module lightgbm)
(lightgbm.Booster method)
rollback_one_iter() (lightgbm.Booster method)
S
save_binary() (lightgbm.Dataset method)
save_model() (lightgbm.Booster method)
(lightgbm.CVBooster method)
score() (lightgbm.DaskLGBMClassifier method)
(lightgbm.DaskLGBMRegressor method)
(lightgbm.LGBMClassifier method)
(lightgbm.LGBMRegressor method)
Sequence (class in lightgbm)
set_categorical_feature() (lightgbm.Dataset method)
set_feature_name() (lightgbm.Dataset method)
set_field() (lightgbm.Dataset method)
set_fit_request() (lightgbm.DaskLGBMClassifier method)
(lightgbm.DaskLGBMRanker method)
(lightgbm.DaskLGBMRegressor method)
(lightgbm.LGBMClassifier method)
(lightgbm.LGBMModel method)
(lightgbm.LGBMRanker method)
(lightgbm.LGBMRegressor method)
set_group() (lightgbm.Dataset method)
set_init_score() (lightgbm.Dataset method)
set_label() (lightgbm.Dataset method)
set_leaf_output() (lightgbm.Booster method)
set_network() (lightgbm.Booster method)
set_params() (lightgbm.DaskLGBMClassifier method)
(lightgbm.DaskLGBMRanker method)
(lightgbm.DaskLGBMRegressor method)
(lightgbm.LGBMClassifier method)
(lightgbm.LGBMModel method)
(lightgbm.LGBMRanker method)
(lightgbm.LGBMRegressor method)
set_position() (lightgbm.Dataset method)
set_predict_proba_request() (lightgbm.DaskLGBMClassifier method)
(lightgbm.LGBMClassifier method)
set_predict_request() (lightgbm.DaskLGBMClassifier method)
(lightgbm.DaskLGBMRanker method)
(lightgbm.DaskLGBMRegressor method)
(lightgbm.LGBMClassifier method)
(lightgbm.LGBMModel method)
(lightgbm.LGBMRanker method)
(lightgbm.LGBMRegressor method)
set_reference() (lightgbm.Dataset method)
set_score_request() (lightgbm.DaskLGBMClassifier method)
(lightgbm.DaskLGBMRegressor method)
(lightgbm.LGBMClassifier method)
(lightgbm.LGBMRegressor method)
set_train_data_name() (lightgbm.Booster method)
set_weight() (lightgbm.Dataset method)
shuffle_models() (lightgbm.Booster method)
subset() (lightgbm.Dataset method)
T
THREAD_LOCAL (C macro)
to_local() (lightgbm.DaskLGBMClassifier method)
(lightgbm.DaskLGBMRanker method)
(lightgbm.DaskLGBMRegressor method)
train() (in module lightgbm)
trees_to_dataframe() (lightgbm.Booster method)
U
update() (lightgbm.Booster method)
upper_bound() (lightgbm.Booster method)