# Vllm Documentation
> Scraped on: 2026-03-30 | Root Source: [https://docs.vllm.ai/](https://docs.vllm.ai/)



---

## Source: https://docs.vllm.ai/

# Welcome to vLLM[¶](#welcome-to-vllm)

**Easy, fast, and cheap LLM serving for everyone **

vLLM is a fast and easy-to-use library for LLM inference and serving.

Originally developed in the [Sky Computing Lab](https://sky.cs.berkeley.edu) at UC Berkeley, vLLM has evolved into a community-driven project with contributions from both academia and industry.

Where to get started with vLLM depends on the type of user. If you are looking to:

- Run open-source models on vLLM, we recommend starting with the
[Quickstart Guide](getting_started/quickstart/) - Build applications with vLLM, we recommend starting with the
[User Guide](usage/) - Build vLLM, we recommend starting with
[Developer Guide](contributing/)

For information about the development of vLLM, see:

vLLM is fast with:

- State-of-the-art serving throughput
- Efficient management of attention key and value memory with
**PagedAttention** - Continuous batching of incoming requests
- Fast model execution with CUDA/HIP graph
- Quantization:
[GPTQ](https://arxiv.org/abs/2210.17323),[AWQ](https://arxiv.org/abs/2306.00978), INT4, INT8, and FP8 - Optimized CUDA kernels, including integration with FlashAttention and FlashInfer.
- Speculative decoding
- Chunked prefill

vLLM is flexible and easy to use with:

- Seamless integration with popular HuggingFace models
- High-throughput serving with various decoding algorithms, including
*parallel sampling*,*beam search*, and more - Tensor, pipeline, data and expert parallelism support for distributed inference
- Streaming outputs
- OpenAI-compatible API server
- Support for NVIDIA GPUs, AMD CPUs and GPUs, Intel CPUs and GPUs, PowerPC CPUs, Arm CPUs, and TPU. Additionally, support for diverse hardware plugins such as Intel Gaudi, IBM Spyre and Huawei Ascend.
- Prefix caching support
- Multi-LoRA support

For more information, check out the following:

[vLLM announcing blog post](https://blog.vllm.ai/2023/06/20/vllm.html)(intro to PagedAttention)[vLLM paper](https://arxiv.org/abs/2309.06180)(SOSP 2023)[How continuous batching enables 23x throughput in LLM inference while reducing p50 latency](https://www.anyscale.com/blog/continuous-batching-llm-inference)by Cade Daniel et al.[vLLM Meetups](community/meetups/)

---

## Source: https://docs.vllm.ai/en/stable/

# Welcome to vLLM[¶](#welcome-to-vllm)

**Easy, fast, and cheap LLM serving for everyone **

vLLM is a fast and easy-to-use library for LLM inference and serving.

Originally developed in the [Sky Computing Lab](https://sky.cs.berkeley.edu) at UC Berkeley, vLLM has evolved into a community-driven project with contributions from both academia and industry.

Where to get started with vLLM depends on the type of user. If you are looking to:

- Run open-source models on vLLM, we recommend starting with the
[Quickstart Guide](getting_started/quickstart/) - Build applications with vLLM, we recommend starting with the
[User Guide](usage/) - Build vLLM, we recommend starting with
[Developer Guide](contributing/)

For information about the development of vLLM, see:

vLLM is fast with:

- State-of-the-art serving throughput
- Efficient management of attention key and value memory with
**PagedAttention** - Continuous batching of incoming requests
- Fast model execution with CUDA/HIP graph
- Quantization:
[GPTQ](https://arxiv.org/abs/2210.17323),[AWQ](https://arxiv.org/abs/2306.00978), INT4, INT8, and FP8 - Optimized CUDA kernels, including integration with FlashAttention and FlashInfer.
- Speculative decoding
- Chunked prefill

vLLM is flexible and easy to use with:

- Seamless integration with popular HuggingFace models
- High-throughput serving with various decoding algorithms, including
*parallel sampling*,*beam search*, and more - Tensor, pipeline, data and expert parallelism support for distributed inference
- Streaming outputs
- OpenAI-compatible API server
- Support for NVIDIA GPUs, AMD CPUs and GPUs, Intel CPUs and GPUs, PowerPC CPUs, Arm CPUs, and TPU. Additionally, support for diverse hardware plugins such as Intel Gaudi, IBM Spyre and Huawei Ascend.
- Prefix caching support
- Multi-LoRA support

For more information, check out the following:

[vLLM announcing blog post](https://blog.vllm.ai/2023/06/20/vllm.html)(intro to PagedAttention)[vLLM paper](https://arxiv.org/abs/2309.06180)(SOSP 2023)[How continuous batching enables 23x throughput in LLM inference while reducing p50 latency](https://www.anyscale.com/blog/continuous-batching-llm-inference)by Cade Daniel et al.[vLLM Meetups](community/meetups/)

---

## Source: https://docs.vllm.ai/usage/

# Features[¶](#features)

## Compatibility Matrix[¶](#compatibility-matrix)

The tables below show mutually exclusive features and the support on some hardware.

The symbols used have the following meanings:

- ✅ = Full compatibility
- 🟠 = Partial compatibility
- ❌ = No compatibility
- ❔ = Unknown or TBD

Note

Check the ❌ or 🟠 with links to see tracking issue for unsupported feature/hardware combination.

### Feature x Feature[¶](#feature-x-feature)

| Feature |
|
|---|

[APC](automatic_prefix_caching/)

[LoRA](lora/)

[SD](speculative_decoding/)

[pooling](../models/pooling_models/)

[prompt-embeds](prompt_embeds/)

[CP](../configuration/optimization/#chunked-prefill)[APC](automatic_prefix_caching/)[LoRA](lora/)[SD](speculative_decoding/)[pooling](../models/pooling_models/)[❌](https://github.com/vllm-project/vllm/issues/7366)[❌](https://github.com/vllm-project/vllm/issues/7366)[mm](multimodal_inputs/)[🟠](https://github.com/vllm-project/vllm/pull/4194)^[❌](https://github.com/vllm-project/vllm/issues/6137)[❌](https://github.com/vllm-project/vllm/issues/7968)[❌](https://github.com/vllm-project/vllm/issues/6137)[❌](https://github.com/vllm-project/vllm/issues/7968)[prompt-embeds](prompt_embeds/)* Chunked prefill and prefix caching are only applicable to last-token or all pooling with causal attention.

^ LoRA is only applicable to the language backbone of multimodal models.

### Feature x Hardware[¶](#feature-x-hardware)

| Feature | Volta | Turing | Ampere | Ada | Hopper | CPU | AMD | Intel GPU |
|---|---|---|---|---|---|---|---|---|
|

[❌](https://github.com/vllm-project/vllm/issues/2729)[APC](automatic_prefix_caching/)[❌](https://github.com/vllm-project/vllm/issues/3687)[LoRA](lora/)[SD](speculative_decoding/)[❌](https://github.com/vllm-project/vllm/issues/26970)[pooling](../models/pooling_models/)[mm](multimodal_inputs/)[prompt-embeds](prompt_embeds/)[❌](https://github.com/vllm-project/vllm/issues/8477)Note

For information on feature support on Google TPU, please refer to the [TPU-Inference Recommended Models and Features](https://docs.vllm.ai/projects/tpu/en/latest/recommended_models_features/) documentation.

---

## Source: https://docs.vllm.ai/contributing/

# Contributing to vLLM[¶](#contributing-to-vllm)

Thank you for your interest in contributing to vLLM! Our community is open to everyone and welcomes all kinds of contributions, no matter how small or large. There are several ways you can contribute to the project:

- Identify and report any issues or bugs.
- Request or add support for a new model.
- Suggest or implement new features.
- Improve documentation or contribute a how-to guide.

We also believe in the power of community support; thus, answering queries, offering PR reviews, and assisting others are also highly regarded and beneficial contributions.

Finally, one of the most impactful ways to support us is by raising awareness about vLLM. Talk about it in your blog posts and highlight how it's driving your incredible projects. Express your support on social media if you're using vLLM, or simply offer your appreciation by starring our repository!

## Job Board[¶](#job-board)

Unsure on where to start? Check out the following links for tasks to work on:

## License[¶](#license)

See [ LICENSE](https://github.com/vllm-project/vllm/blob/main/LICENSE).

## Developing[¶](#developing)

The first step of contributing to vLLM is to clone the GitHub repository:

Then, configure your Python virtual environment.

It's recommended to use [uv](https://docs.astral.sh/uv/), a very fast Python environment manager, to create and manage Python environments. Please follow the [documentation](https://docs.astral.sh/uv/#getting-started) to install `uv`

. After installing `uv`

, you can create a new Python environment using the following commands:

If you are only developing vLLM's Python code, install vLLM using:

If you are developing vLLM's Python and CUDA/C++ code, install Pytorch first:

uv pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu129


Then install the necessary build dependencies from `requirements/build.txt`

, skipping `torch`

as it was installed in the previous step:

Finally install vLLM using:

For more details about installing from source and installing for other hardware, check out the [installation instructions](../getting_started/installation/) for your hardware and head to the "Build wheel from source" section.

For an optimized workflow when iterating on C++/CUDA kernels, see the [Incremental Compilation Workflow](incremental_build/) for recommendations.

Tip

vLLM is compatible with Python versions 3.10 to 3.13. However, vLLM's default [ Dockerfile](https://github.com/vllm-project/vllm/blob/main/docker/Dockerfile) ships with Python 3.12 and tests in CI (except `mypy`

) are run with Python 3.12.

Therefore, we recommend developing with Python 3.12 to minimise the chance of your local environment clashing with our CI environment.

### Linting[¶](#linting)

vLLM uses `pre-commit`

to lint and format the codebase. See [https://pre-commit.com/#usage](https://pre-commit.com/#usage) if `pre-commit`

is new to you. Setting up `pre-commit`

is as easy as:

vLLM's `pre-commit`

hooks will now run automatically every time you commit.

Tips

You can manually run the `pre-commit`

hooks using:

Some `pre-commit`

hooks only run in CI. If you need to, you can run them locally with:

### Documentation[¶](#documentation)

MkDocs is a fast, simple and downright gorgeous static site generator that's geared towards building project documentation. Documentation source files are written in Markdown, and configured with a single YAML configuration file, [ mkdocs.yaml](https://github.com/vllm-project/vllm/blob/main/mkdocs.yaml).

Get started with:

Tip

Ensure that your Python version is compatible with the plugins (e.g., `mkdocs-awesome-nav`

requires Python 3.10+)

MkDocs comes with a built-in dev-server that lets you preview your documentation as you work on it. From the root of the repository, run:

mkdocs serve # with API ref (~10 minutes)
API_AUTONAV_EXCLUDE=vllm mkdocs serve # API ref off (~15 seconds)


Once you see `Serving on http://127.0.0.1:8000/`

in the logs, the live preview is ready! Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser to see it.

For additional features and advanced configurations, refer to the:

[MkDocs documentation](https://www.mkdocs.org/)[Material for MkDocs documentation](https://squidfunk.github.io/mkdocs-material/)(the MkDocs theme we use)

### Testing[¶](#testing)

vLLM uses `pytest`

to test the codebase.

# Install the test dependencies used in CI (CUDA only)
uv pip install -r requirements/common.txt -r requirements/dev.txt --torch-backend=auto
# Install some common test dependencies (hardware agnostic)
uv pip install pytest pytest-asyncio
# Run all tests
pytest tests/
# Run tests for a single test file with detailed output
pytest -s -v tests/test_logger.py


Install python3-dev if Python.h is missing

If any of the above commands fails with `Python.h: No such file or directory`

, install `python3-dev`

with `sudo apt install python3-dev`

.

Warnings

Currently, the repository is not fully checked by `mypy`

.

Currently, not all unit tests pass when run on CPU platforms. If you don't have access to a GPU platform to run unit tests locally, rely on the continuous integration system to run the tests for now.

## Issues[¶](#issues)

If you encounter a bug or have a feature request, please [search existing issues](https://github.com/vllm-project/vllm/issues?q=is%3Aissue) first to see if it has already been reported. If not, please [file a new issue](https://github.com/vllm-project/vllm/issues/new/choose), providing as much relevant information as possible.

Important

If you discover a security vulnerability, please follow the instructions [ here](https://github.com/vllm-project/vllm/blob/main/SECURITY.md).

## Pull Requests & Code Reviews[¶](#pull-requests-code-reviews)

Thank you for your contribution to vLLM! Before submitting the pull request, please ensure the PR meets the following criteria. This helps vLLM maintain the code quality and improve the efficiency of the review process.

### DCO and Signed-off-by[¶](#dco-and-signed-off-by)

When contributing changes to this project, you must agree to the [ DCO](https://github.com/vllm-project/vllm/blob/main/DCO). Commits must include a `Signed-off-by:`

header which certifies agreement with the terms of the DCO.

Using `-s`

with `git commit`

will automatically add this header.

Tip

You can enable automatic sign-off via your IDE:

**PyCharm**: Click on the`Show Commit Options`

icon to the right of the`Commit and Push...`

button in the`Commit`

window. It will bring up a`git`

window where you can modify the`Author`

and enable`Sign-off commit`

.**VSCode**: Open the[Settings editor](https://code.visualstudio.com/docs/configure/settings)and enable the`Git: Always Sign Off`

(`git.alwaysSignOff`

) field.

### AI Assisted Contributions[¶](#ai-assisted-contributions)

Before making an AI assisted contribution, you must:

**Be involved**: Do not submit "pure agent" PRs. The human submitter is responsible for reviewing all changed lines, validating behavior end-to-end, and running relevant tests.**Ensure significance**: Avoid one-off "busywork" PRs (single typo, isolated style cleanup, one mutable default fix, etc.). Bundle mechanical cleanups into a clear, systematic scope.

When AI tools provide non-trivial assistance in generating or modifying code, you must:

**Review thoroughly**: You remain responsible for all code you submit. Review and understand AI-generated code with the same care as code you write manually.**Disclose in PR**: Always mention when a pull request includes AI-generated code. Add a note in the PR description.**Mark commits**: Add attribution using commit trailers such as`Co-authored-by:`

(other projects use`Assisted-by:`

or`Generated-by:`

). For example:

Your commit message here
Co-authored-by: GitHub Copilot
Co-authored-by: Claude
Co-authored-by: gemini-code-assist
Signed-off-by: Your Name <[[email protected]](/cdn-cgi/l/email-protection)>


AI-assisted code must meet all quality standards: proper testing, documentation, adherence to style guides, and thorough review. Attribution helps reviewers evaluate contributions in context and maintains legal clarity for the project.

### PR Title and Classification[¶](#pr-title-and-classification)

Only specific types of PRs will be reviewed. The PR title is prefixed appropriately to indicate the type of change. Please use one of the following:

`[Bugfix]`

for bug fixes.`[CI/Build]`

for build or continuous integration improvements.`[Doc]`

for documentation fixes and improvements.`[Model]`

for adding a new model or improving an existing model. Model name should appear in the title.`[Frontend]`

For changes on the vLLM frontend (e.g., OpenAI API server,`LLM`

class, etc.)`[Kernel]`

for changes affecting CUDA kernels or other compute kernels.`[Core]`

for changes in the core vLLM logic (e.g.,`LLMEngine`

,`AsyncLLMEngine`

,`Scheduler`

, etc.)`[Hardware][Vendor]`

for hardware-specific changes. Vendor name should appear in the prefix (e.g.,`[Hardware][AMD]`

).`[Misc]`

for PRs that do not fit the above categories. Please use this sparingly.

Note

If the PR spans more than one category, please include all relevant prefixes.

### Code Quality[¶](#code-quality)

The PR needs to meet the following code quality standards:

- We adhere to
[Google Python style guide](https://google.github.io/styleguide/pyguide.html)and[Google C++ style guide](https://google.github.io/styleguide/cppguide.html). - Pass all linter checks.
- The code needs to be well-documented to ensure future contributors can easily understand the code.
- Include sufficient tests to ensure the project stays correct and robust. This includes both unit tests and integration tests.
- Please add documentation to
`docs/`

if the PR modifies the user-facing behaviors of vLLM. It helps vLLM users understand and utilize the new features or changes.

### Adding or Changing Kernels[¶](#adding-or-changing-kernels)

When actively developing or modifying kernels, using the [Incremental Compilation Workflow](incremental_build/) is highly recommended for faster build times. Each custom kernel needs a schema and one or more implementations to be registered with PyTorch.

- Make sure custom ops are registered following PyTorch guidelines:
[Custom C++ and CUDA Operators](https://pytorch.org/tutorials/advanced/cpp_custom_ops.html#cpp-custom-ops-tutorial)and[The Custom Operators Manual](https://docs.google.com/document/d/1_W62p8WJOQQUzPsJYa7s701JXt0qf2OfLub2sbkHOaU). - Custom operations that return
`Tensors`

require meta-functions. Meta-functions should be implemented and registered in Python so that dynamic dims can be handled automatically. See above documents for a description of meta-functions. - Use
[torch.library.opcheck()](https://pytorch.org/docs/stable/library.html#torch.library.opcheck)to test the function registration and meta-function for any registered ops. See`tests/kernels`

for examples. - When changing the C++ signature of an existing op, the schema must be updated to reflect the changes.
- If a new custom type is needed, see the following document:
[Custom Class Support in PT2](https://docs.google.com/document/d/18fBMPuOJ0fY5ZQ6YyrHUppw9FA332CpNtgB6SOIgyuA).

### Notes for Large Changes[¶](#notes-for-large-changes)

Please keep the changes as concise as possible. For major architectural changes (>500 LOC excluding kernel/data/config/test), we would expect a GitHub issue (RFC) discussing the technical design and justification. Otherwise, we will tag it with `rfc-required`

and might not go through the PR.

### What to Expect for the Reviews[¶](#what-to-expect-for-the-reviews)

The goal of the vLLM team is to be a *transparent reviewing machine*. We would like to make the review process transparent and efficient and make sure no contributor feels confused or frustrated. However, the vLLM team is small, so we need to prioritize some PRs over others. Here is what you can expect from the review process:

- After the PR is submitted, the PR will be assigned to a reviewer. Every reviewer will pick up the PRs based on their expertise and availability.
- After the PR is assigned, the reviewer will provide status updates every 2-3 days. If the PR is not reviewed within 7 days, please feel free to ping the reviewer or the vLLM team.
- After the review, the reviewer will put an
`action-required`

label on the PR if there are changes required. The contributor should address the comments and ping the reviewer to re-review the PR. - Please respond to all comments within a reasonable time frame. If a comment isn't clear or you disagree with a suggestion, feel free to ask for clarification or discuss the suggestion.
- Note that not all CI checks will be executed due to limited computational resources. The reviewer will add
`ready`

label to the PR when the PR is ready to merge or a full CI run is needed.

## Thank You[¶](#thank-you)

Finally, thank you for taking the time to read these guidelines and for your interest in contributing to vLLM. All of your contributions help make vLLM a great tool and community for everyone!

---

## Source: https://docs.vllm.ai/api/

# Summary[¶](#summary)

## Configuration[¶](#configuration)

API documentation for vLLM's configuration classes.

[vllm.config.ModelConfig](vllm/config/#vllm.config.ModelConfig)[vllm.config.CacheConfig](vllm/config/#vllm.config.CacheConfig)[vllm.config.LoadConfig](vllm/config/#vllm.config.LoadConfig)[vllm.config.ParallelConfig](vllm/config/#vllm.config.ParallelConfig)[vllm.config.SchedulerConfig](vllm/config/#vllm.config.SchedulerConfig)[vllm.config.DeviceConfig](vllm/config/#vllm.config.DeviceConfig)[vllm.config.SpeculativeConfig](vllm/config/#vllm.config.SpeculativeConfig)[vllm.config.LoRAConfig](vllm/config/#vllm.config.LoRAConfig)[vllm.config.MultiModalConfig](vllm/config/#vllm.config.MultiModalConfig)[vllm.config.PoolerConfig](vllm/config/#vllm.config.PoolerConfig)[vllm.config.StructuredOutputsConfig](vllm/config/#vllm.config.StructuredOutputsConfig)[vllm.config.ProfilerConfig](vllm/config/#vllm.config.ProfilerConfig)[vllm.config.ObservabilityConfig](vllm/config/#vllm.config.ObservabilityConfig)[vllm.config.KVTransferConfig](vllm/config/#vllm.config.KVTransferConfig)[vllm.config.CompilationConfig](vllm/config/#vllm.config.CompilationConfig)[vllm.config.VllmConfig](vllm/config/#vllm.config.VllmConfig)

## Offline Inference[¶](#offline-inference)

LLM Class.

Prompt schema for LLM APIs.

## vLLM Engines[¶](#vllm-engines)

Engine classes for offline and online inference.

## Inference Parameters[¶](#inference-parameters)

Inference parameters for vLLM APIs.

## Multi-Modality[¶](#multi-modality)

vLLM provides experimental support for multi-modal models through the [vllm.multimodal](vllm/multimodal/#vllm.multimodal) package.

Multi-modal inputs can be passed alongside text and token prompts to [supported models](../models/supported_models/#list-of-multimodal-language-models) via the `multi_modal_data`

field in [vllm.inputs.PromptType](vllm/inputs/#vllm.inputs.PromptType).

Looking to add your own multi-modal model? Please follow the instructions listed [here](../contributing/model/multimodal/).

### Internal data structures[¶](#internal-data-structures)

[vllm.multimodal.inputs.PlaceholderRange](vllm/multimodal/inputs/#vllm.multimodal.inputs.PlaceholderRange)[vllm.multimodal.inputs.NestedTensors](vllm/multimodal/inputs/#vllm.multimodal.inputs.NestedTensors)[vllm.multimodal.inputs.MultiModalFieldElem](vllm/multimodal/inputs/#vllm.multimodal.inputs.MultiModalFieldElem)[vllm.multimodal.inputs.MultiModalFieldConfig](vllm/multimodal/inputs/#vllm.multimodal.inputs.MultiModalFieldConfig)[vllm.multimodal.inputs.MultiModalKwargsItem](vllm/multimodal/inputs/#vllm.multimodal.inputs.MultiModalKwargsItem)[vllm.multimodal.inputs.MultiModalKwargsItems](vllm/multimodal/inputs/#vllm.multimodal.inputs.MultiModalKwargsItems)

---

## Source: https://docs.vllm.ai/projects/tpu/en/latest/getting_started/installation/

# Installation[¶](#installation)

This guide provides instructions for installing and running `tpu-inference`

.

There are three ways to install `tpu-inference`

:

## Install using pip via uv[¶](#install-using-pip-via-uv)

We recommend using [uv](https://docs.astral.sh/uv/) (`uv pip install`

) instead of standard `pip`

as it improves installation speed.

-
Create a working directory:

-
Install

`uv`

and set up a Python virtual environment: -
Use the following command to install vllm-tpu using

`uv`

or`pip`

:

## Run with Docker[¶](#run-with-docker)

Include the `--privileged`

, `--net=host`

, and `--shm-size=150gb`

options to enable TPU interaction and shared memory.

export DOCKER_URI=vllm/vllm-tpu:latest
sudo docker run -it --rm --name $USER-vllm --privileged --net=host \
-v /dev/shm:/dev/shm \
--shm-size 150gb \
-p 8000:8000 \
--entrypoint /bin/bash ${DOCKER_URI}


## Install from source[¶](#install-from-source)

For debugging or development purposes, you can install `tpu-inference`

from source. `tpu-inference`

is a plugin for `vllm`

, so you need to install both from source.

-
Install system dependencies:

-
Clone the

`vllm`

and`tpu-inference`

repositories: -
Install

`uv`

and set up a Python virtual environment: -
Install

`vllm`

from source, targeting the TPU device:NOTE:

`tpu-inference`

repo pins`vllm`

revision in`vllm_lkg.version`

file, make sure to checkout proper revision beforehand. -
Install

`tpu-inference`

from source:

## Verify Installation[¶](#verify-installation)

To quickly verify that the installation was successful under any of the above methods and `vllm-tpu`

is correctly configured:

python -c '
import jax
import vllm
import importlib.metadata
from vllm.platforms import current_platform
tpu_version = importlib.metadata.version("tpu_inference")
print(f"vllm version: {vllm.__version__}")
print(f"tpu_inference version: {tpu_version}")
print(f"vllm platform: {current_platform.get_device_name()}")
print(f"jax backends: {jax.devices()}")
'
# Expected output:
# vllm version: 0.x.x
# tpu_inference version: 0.x.x
# vllm platform: TPU V6E (or your specific TPU architecture)
# jax backends: [TpuDevice(id=0, process_index=0, coords=(0,0,0), core_on_chip=0), ...]